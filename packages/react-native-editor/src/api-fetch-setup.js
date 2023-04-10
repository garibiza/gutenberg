/**
 * WordPress dependencies
 */
import { fetchRequest, postRequest } from '@wordpress/react-native-bridge';
import apiFetch from '@wordpress/api-fetch';
import { applyFilters } from '@wordpress/hooks';

const SUPPORTED_METHODS = [ 'GET', 'POST' ];
// Please add only wp.org API paths here!
const SUPPORTED_ENDPOINTS = {
	GET: [
		/wp\/v2\/(media|categories|blocks|themes)\/?\d*?.*/i,
		/wp\/v2\/search\?.*/i,
		/oembed\/1\.0\/proxy\?.*/i,
	],
	POST: [],
};

// [ONLY ON ANDROID] The requests made to these endpoints won't be cached.
const DISABLED_CACHING_ENDPOINTS = [ /wp\/v2\/(blocks)\/?\d*?.*/i ];

const setTimeoutPromise = ( delay ) =>
	new Promise( ( resolve ) => setTimeout( resolve, delay ) );

const fetchHandler = (
	{ path, url, method = 'GET', data, ...remainingOptions },
	retries = 20,
	retryCount = 1
) => {
	const endpoint = path || url;

	if ( ! isMethodSupported( method ) ) {
		return Promise.reject( `Unsupported method: ${ method }` );
	}

	if ( ! isPathSupported( endpoint, method ) ) {
		return Promise.reject(
			`Unsupported path for method ${ method }: ${ endpoint }`
		);
	}

	let responsePromise;
	switch ( method ) {
		case 'GET':
			responsePromise = fetchRequest(
				endpoint,
				shouldEnableCaching( endpoint ),
				{ ...remainingOptions }
			);
			break;
		case 'POST':
			responsePromise = postRequest( endpoint, data );
			break;
	}

	const parseResponse = ( response ) => {
		if ( typeof response === 'string' ) {
			response = JSON.parse( response );
		}
		return response;
	};

	return responsePromise.then( parseResponse ).catch( ( error ) => {
		// eslint-disable-next-line no-console
		console.warn( 'Network Error: ', JSON.stringify( error, null, 2 ) );
		if ( error.code >= 400 && error.code < 600 ) {
			return error;
		} else if ( retries === 0 ) {
			return Promise.reject( error );
		}
		return setTimeoutPromise( 1000 * retryCount ).then( () =>
			fetchHandler( { endpoint }, retries - 1, retryCount + 1 )
		);
	} );
};

export const isMethodSupported = ( method ) =>
	SUPPORTED_METHODS.includes( method );

export const isPathSupported = ( endpoint, method ) => {
	const supportedEndpoints = applyFilters(
		'native.supported_endpoints',
		SUPPORTED_ENDPOINTS
	);
	return supportedEndpoints[ method ].some( ( pattern ) =>
		pattern.test( endpoint )
	);
};

export const shouldEnableCaching = ( endpoint ) =>
	! DISABLED_CACHING_ENDPOINTS.some( ( pattern ) =>
		pattern.test( endpoint )
	);

export default () => {
	apiFetch.setFetchHandler( ( options ) => fetchHandler( options ) );
};
