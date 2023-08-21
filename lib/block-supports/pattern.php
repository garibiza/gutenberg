<?php
/**
 * Pattern block support flag.
 *
 * @package gutenberg
 */

$gutenberg_experiments = get_option( 'gutenberg-experiments' );
if ( $gutenberg_experiments && array_key_exists( 'gutenberg-connections', $gutenberg_experiments ) ) {
	function gutenberg_register_pattern_support( $block_type ) {
		$pattern_support = property_exists( $block_type, 'supports' ) ? _wp_array_get( $block_type->supports, array( '__experimentalConnections' ), false ) : false;

		if ( $pattern_support ) {
			if ( ! $block_type->uses_context ) {
				$block_type->uses_context = array();
			}

			if ( ! in_array( 'dynamicContent', $block_type->uses_context, true ) ) {
				$block_type->uses_context[] = 'dynamicContent';
			}
		}
	}

	// Register the block support.
	WP_Block_Supports::get_instance()->register(
		'pattern',
		array(
			'register_attribute' => 'gutenberg_register_pattern_support',
		)
	);
}
