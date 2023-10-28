(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[8997],{"./packages/components/src/border-control/border-control/component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return border_control_component}});var react=__webpack_require__("./node_modules/react/index.js"),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),close_small=__webpack_require__("./packages/icons/build-module/library/close-small.js"),line_solid=__webpack_require__("./packages/icons/build-module/library/line-solid.js"),line_dashed=__webpack_require__("./packages/icons/build-module/library/line-dashed.js"),line_dotted=__webpack_require__("./packages/icons/build-module/library/line-dotted.js"),src_button=__webpack_require__("./packages/components/src/button/index.tsx"),base_control_styles=__webpack_require__("./packages/components/src/base-control/styles/base-control-styles.ts"),component=__webpack_require__("./packages/components/src/view/component.tsx"),flex_component=__webpack_require__("./packages/components/src/flex/flex/component.tsx"),visually_hidden_component=__webpack_require__("./packages/components/src/visually-hidden/component.tsx"),context_connect=__webpack_require__("./packages/components/src/context/context-connect.ts"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),config_values=__webpack_require__("./packages/components/src/utils/config-values.js"),box_sizing=__webpack_require__("./packages/components/src/utils/box-sizing.ts"),rtl=__webpack_require__("./packages/components/src/utils/rtl.js"),colors_values=__webpack_require__("./packages/components/src/utils/colors-values.js"),space=__webpack_require__("./packages/components/src/utils/space.ts"),unit_control_styles=__webpack_require__("./packages/components/src/unit-control/styles/unit-control-styles.ts");const labelStyles={name:"f3vz0n",styles:"font-weight:500"},focusBoxShadow=(0,emotion_react_browser_esm.iv)("box-shadow:inset ",config_values.Z.controlBoxShadowFocus,";",""),borderControl=(0,emotion_react_browser_esm.iv)("border:0;padding:0;margin:0;",box_sizing.p,";",""),styles_wrapperWidth=(0,emotion_react_browser_esm.iv)(unit_control_styles.Ke,"{flex:0 0 auto;}",""),colorIndicatorWrapper=(border,size)=>{const{style:style}=border||{};return(0,emotion_react_browser_esm.iv)("border-radius:9999px;border:2px solid transparent;",style?(border=>{const{color:color,style:style}=border||{},fallbackColor=style&&"none"!==style?colors_values.D.gray[300]:void 0;return(0,emotion_react_browser_esm.iv)("border-style:","none"===style?"solid":style,";border-color:",color||fallbackColor,";","")})(border):void 0," width:","__unstable-large"===size?"24px":"22px",";height:","__unstable-large"===size?"24px":"22px",";padding:","__unstable-large"===size?"2px":"1px",";&>span{height:",(0,space.D)(4),";width:",(0,space.D)(4),";background:linear-gradient(\n\t\t\t\t-45deg,\n\t\t\t\ttransparent 48%,\n\t\t\t\trgb( 0 0 0 / 20% ) 48%,\n\t\t\t\trgb( 0 0 0 / 20% ) 52%,\n\t\t\t\ttransparent 52%\n\t\t\t);}","")},borderControlPopoverControls=(0,emotion_react_browser_esm.iv)("width:",228,"px;>div:first-of-type>",base_control_styles.ar,"{margin-bottom:0;",labelStyles,";}&& ",base_control_styles.ar,"+button:not( .has-text ){min-width:24px;padding:0;}",""),borderControlPopoverContent=(0,emotion_react_browser_esm.iv)("",""),borderColorIndicator=(0,emotion_react_browser_esm.iv)("",""),resetButton=(0,emotion_react_browser_esm.iv)("justify-content:center;width:100%;&&{border-top:",config_values.Z.borderWidth," solid ",colors_values.D.gray[400],";border-top-left-radius:0;border-top-right-radius:0;height:40px;}",""),borderControlStylePicker=(0,emotion_react_browser_esm.iv)(base_control_styles.ar,"{",labelStyles,";}",""),borderStyleButton={name:"ed6beh",styles:"&&&&&{min-width:32px;width:32px;height:32px;padding:4px;}"};var use_context_system=__webpack_require__("./packages/components/src/context/use-context-system.js"),use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const BORDER_STYLES=[{label:(0,build_module.__)("Solid"),icon:line_solid.Z,value:"solid"},{label:(0,build_module.__)("Dashed"),icon:line_dashed.Z,value:"dashed"},{label:(0,build_module.__)("Dotted"),icon:line_dotted.Z,value:"dotted"}],Label=props=>{const{label:label,hideLabelFromVision:hideLabelFromVision}=props;return label?hideLabelFromVision?(0,jsx_runtime.jsx)(visually_hidden_component.Z,{as:"label",children:label}):(0,jsx_runtime.jsx)(base_control_styles.ar,{children:label}):null},BorderControlStylePicker=(props,forwardedRef)=>{const{buttonClassName:buttonClassName,hideLabelFromVision:hideLabelFromVision,label:label,onChange:onChange,value:value,...otherProps}=function useBorderControlStylePicker(props){const{className:className,...otherProps}=(0,use_context_system.y)(props,"BorderControlStylePicker"),cx=(0,use_cx.I)();return{...otherProps,className:(0,react.useMemo)((()=>cx(borderControlStylePicker,className)),[className,cx]),buttonClassName:(0,react.useMemo)((()=>cx(borderStyleButton)),[cx])}}(props);return(0,jsx_runtime.jsxs)(component.Z,{...otherProps,ref:forwardedRef,children:[(0,jsx_runtime.jsx)(Label,{label:label,hideLabelFromVision:hideLabelFromVision}),(0,jsx_runtime.jsx)(flex_component.Z,{justify:"flex-start",gap:1,children:BORDER_STYLES.map((borderStyle=>(0,jsx_runtime.jsx)(src_button.ZP,{className:buttonClassName,icon:borderStyle.icon,isSmall:!0,isPressed:borderStyle.value===value,onClick:()=>onChange(borderStyle.value===value?void 0:borderStyle.value),"aria-label":borderStyle.label,label:borderStyle.label,showTooltip:!0},borderStyle.value)))})]})};BorderControlStylePicker.displayName="BorderControlStylePicker";var border_control_style_picker_component=(0,context_connect.Iq)(BorderControlStylePicker,"BorderControlStylePicker"),color_indicator=__webpack_require__("./packages/components/src/color-indicator/index.tsx"),color_palette=__webpack_require__("./packages/components/src/color-palette/index.tsx"),dropdown=__webpack_require__("./packages/components/src/dropdown/index.tsx"),h_stack_component=__webpack_require__("./packages/components/src/h-stack/component.tsx"),v_stack_component=__webpack_require__("./packages/components/src/v-stack/component.tsx"),utils=__webpack_require__("./packages/components/src/unit-control/utils.ts");function useBorderControlDropdown(props){const{border:border,className:className,colors:colors=[],enableAlpha:enableAlpha=!1,enableStyle:enableStyle=!0,onChange:onChange,previousStyleSelection:previousStyleSelection,size:size="default",__experimentalIsRenderedInSidebar:__experimentalIsRenderedInSidebar=!1,...otherProps}=(0,use_context_system.y)(props,"BorderControlDropdown"),[widthValue]=(0,utils.YX)(border?.width),hasZeroWidth=0===widthValue,cx=(0,use_cx.I)(),classes=(0,react.useMemo)((()=>cx((size=>(0,emotion_react_browser_esm.iv)("background:#fff;&&>button{height:","__unstable-large"===size?"40px":"30px",";width:","__unstable-large"===size?"40px":"30px",";padding:0;display:flex;align-items:center;justify-content:center;",(0,rtl.b)({borderRadius:"2px 0 0 2px"},{borderRadius:"0 2px 2px 0"})()," border:",config_values.Z.borderWidth," solid ",colors_values.D.ui.border,";&:focus,&:hover:not( :disabled ){",focusBoxShadow," border-color:",colors_values.D.ui.borderFocus,";z-index:1;position:relative;}}",""))(size),className)),[className,cx,size]),indicatorClassName=(0,react.useMemo)((()=>cx(borderColorIndicator)),[cx]),indicatorWrapperClassName=(0,react.useMemo)((()=>cx(colorIndicatorWrapper(border,size))),[border,cx,size]),popoverControlsClassName=(0,react.useMemo)((()=>cx(borderControlPopoverControls)),[cx]),popoverContentClassName=(0,react.useMemo)((()=>cx(borderControlPopoverContent)),[cx]),resetButtonClassName=(0,react.useMemo)((()=>cx(resetButton)),[cx]);return{...otherProps,border:border,className:classes,colors:colors,enableAlpha:enableAlpha,enableStyle:enableStyle,indicatorClassName:indicatorClassName,indicatorWrapperClassName:indicatorWrapperClassName,onColorChange:color=>{onChange({color:color,style:"none"===border?.style?previousStyleSelection:border?.style,width:hasZeroWidth&&color?"1px":border?.width})},onStyleChange:style=>{const width=hasZeroWidth&&style?"1px":border?.width;onChange({...border,style:style,width:width})},onReset:()=>{onChange({...border,color:void 0,style:void 0})},popoverContentClassName:popoverContentClassName,popoverControlsClassName:popoverControlsClassName,resetButtonClassName:resetButtonClassName,__experimentalIsRenderedInSidebar:__experimentalIsRenderedInSidebar}}var dropdown_content_wrapper=__webpack_require__("./packages/components/src/dropdown/dropdown-content-wrapper.tsx"),color_palette_utils=__webpack_require__("./packages/components/src/color-palette/utils.ts");const getAriaLabelColorValue=colorValue=>colorValue.replace(/^var\((.+)\)$/,"$1"),BorderControlDropdown=(props,forwardedRef)=>{const{__experimentalIsRenderedInSidebar:__experimentalIsRenderedInSidebar,border:border,colors:colors,disableCustomColors:disableCustomColors,enableAlpha:enableAlpha,enableStyle:enableStyle,indicatorClassName:indicatorClassName,indicatorWrapperClassName:indicatorWrapperClassName,onReset:onReset,onColorChange:onColorChange,onStyleChange:onStyleChange,popoverContentClassName:popoverContentClassName,popoverControlsClassName:popoverControlsClassName,resetButtonClassName:resetButtonClassName,showDropdownHeader:showDropdownHeader,__unstablePopoverProps:__unstablePopoverProps,...otherProps}=useBorderControlDropdown(props),{color:color,style:style}=border||{},colorObject=((colorValue,colors)=>{if(colorValue&&colors){if((0,color_palette_utils.v9)(colors)){let matchedColor;return colors.some((origin=>origin.colors.some((color=>color.color===colorValue&&(matchedColor=color,!0))))),matchedColor}return colors.find((color=>color.color===colorValue))}})(color,colors),toggleAriaLabel=((colorValue,colorObject,style,isStyleEnabled)=>{if(isStyleEnabled){if(colorObject){const ariaLabelValue=getAriaLabelColorValue(colorObject.color);return style?(0,build_module.gB)('Border color and style picker. The currently selected color is called "%1$s" and has a value of "%2$s". The currently selected style is "%3$s".',colorObject.name,ariaLabelValue,style):(0,build_module.gB)('Border color and style picker. The currently selected color is called "%1$s" and has a value of "%2$s".',colorObject.name,ariaLabelValue)}if(colorValue){const ariaLabelValue=getAriaLabelColorValue(colorValue);return style?(0,build_module.gB)('Border color and style picker. The currently selected color has a value of "%1$s". The currently selected style is "%2$s".',ariaLabelValue,style):(0,build_module.gB)('Border color and style picker. The currently selected color has a value of "%1$s".',ariaLabelValue)}return(0,build_module.__)("Border color and style picker.")}return colorObject?(0,build_module.gB)('Border color picker. The currently selected color is called "%1$s" and has a value of "%2$s".',colorObject.name,getAriaLabelColorValue(colorObject.color)):colorValue?(0,build_module.gB)('Border color picker. The currently selected color has a value of "%1$s".',getAriaLabelColorValue(colorValue)):(0,build_module.__)("Border color picker.")})(color,colorObject,style,enableStyle),showResetButton=color||style&&"none"!==style,dropdownPosition=__experimentalIsRenderedInSidebar?"bottom left":void 0;return(0,jsx_runtime.jsx)(dropdown.Z,{renderToggle:({onToggle:onToggle})=>(0,jsx_runtime.jsx)(src_button.ZP,{onClick:onToggle,variant:"tertiary","aria-label":toggleAriaLabel,tooltipPosition:dropdownPosition,label:(0,build_module.__)("Border color and style picker"),showTooltip:!0,children:(0,jsx_runtime.jsx)("span",{className:indicatorWrapperClassName,children:(0,jsx_runtime.jsx)(color_indicator.Z,{className:indicatorClassName,colorValue:color})})}),renderContent:({onClose:onClose})=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dropdown_content_wrapper.Z,{paddingSize:"medium",children:(0,jsx_runtime.jsxs)(v_stack_component.Z,{className:popoverControlsClassName,spacing:6,children:[showDropdownHeader?(0,jsx_runtime.jsxs)(h_stack_component.Z,{children:[(0,jsx_runtime.jsx)(base_control_styles.ar,{children:(0,build_module.__)("Border color")}),(0,jsx_runtime.jsx)(src_button.ZP,{isSmall:!0,label:(0,build_module.__)("Close border color"),icon:close_small.Z,onClick:onClose})]}):void 0,(0,jsx_runtime.jsx)(color_palette.ZP,{className:popoverContentClassName,value:color,onChange:onColorChange,colors:colors,disableCustomColors:disableCustomColors,__experimentalIsRenderedInSidebar:__experimentalIsRenderedInSidebar,clearable:!1,enableAlpha:enableAlpha}),enableStyle&&(0,jsx_runtime.jsx)(border_control_style_picker_component,{label:(0,build_module.__)("Style"),value:style,onChange:onStyleChange})]})}),showResetButton&&(0,jsx_runtime.jsx)(dropdown_content_wrapper.Z,{paddingSize:"none",children:(0,jsx_runtime.jsx)(src_button.ZP,{className:resetButtonClassName,variant:"tertiary",onClick:()=>{onReset(),onClose()},children:(0,build_module.__)("Reset")})})]}),popoverProps:{...__unstablePopoverProps},...otherProps,ref:forwardedRef})};BorderControlDropdown.displayName="BorderControlDropdown";var border_control_dropdown_component=(0,context_connect.Iq)(BorderControlDropdown,"BorderControlDropdown"),unit_control=__webpack_require__("./packages/components/src/unit-control/index.tsx"),range_control=__webpack_require__("./packages/components/src/range-control/index.tsx");function useBorderControl(props){const{className:className,colors:colors=[],isCompact:isCompact,onChange:onChange,enableAlpha:enableAlpha=!0,enableStyle:enableStyle=!0,shouldSanitizeBorder:shouldSanitizeBorder=!0,size:size="default",value:border,width:width,__experimentalIsRenderedInSidebar:__experimentalIsRenderedInSidebar=!1,...otherProps}=(0,use_context_system.y)(props,"BorderControl"),[widthValue,originalWidthUnit]=(0,utils.YX)(border?.width),widthUnit=originalWidthUnit||"px",hadPreviousZeroWidth=0===widthValue,[colorSelection,setColorSelection]=(0,react.useState)(),[styleSelection,setStyleSelection]=(0,react.useState)(),onBorderChange=(0,react.useCallback)((newBorder=>{if(shouldSanitizeBorder)return onChange((border=>{if(void 0!==border?.width&&""!==border.width||void 0!==border?.color)return border})(newBorder));onChange(newBorder)}),[onChange,shouldSanitizeBorder]),onWidthChange=(0,react.useCallback)((newWidth=>{const newWidthValue=""===newWidth?void 0:newWidth,[parsedValue]=(0,utils.YX)(newWidth),hasZeroWidth=0===parsedValue,updatedBorder={...border,width:newWidthValue};hasZeroWidth&&!hadPreviousZeroWidth&&(setColorSelection(border?.color),setStyleSelection(border?.style),updatedBorder.color=void 0,updatedBorder.style="none"),!hasZeroWidth&&hadPreviousZeroWidth&&(void 0===updatedBorder.color&&(updatedBorder.color=colorSelection),"none"===updatedBorder.style&&(updatedBorder.style=styleSelection)),onBorderChange(updatedBorder)}),[border,hadPreviousZeroWidth,colorSelection,styleSelection,onBorderChange]),onSliderChange=(0,react.useCallback)((value=>{onWidthChange(`${value}${widthUnit}`)}),[onWidthChange,widthUnit]),cx=(0,use_cx.I)(),classes=(0,react.useMemo)((()=>cx(borderControl,className)),[className,cx]);let wrapperWidth=width;isCompact&&(wrapperWidth="__unstable-large"===size?"116px":"90px");const innerWrapperClassName=(0,react.useMemo)((()=>{const widthStyle=!!wrapperWidth&&styles_wrapperWidth,heightStyle=(size=>(0,emotion_react_browser_esm.iv)("height:","__unstable-large"===size?"40px":"30px",";",""))(size);return cx((0,emotion_react_browser_esm.iv)(unit_control_styles.Ke,"{flex:1 1 40%;}&& ",unit_control_styles.mY,"{min-height:0;}",""),widthStyle,heightStyle)}),[wrapperWidth,cx,size]),sliderClassName=(0,react.useMemo)((()=>cx((0,emotion_react_browser_esm.iv)("flex:1 1 60%;",(0,rtl.b)({marginRight:(0,space.D)(3)})(),";",""))),[cx]);return{...otherProps,className:classes,colors:colors,enableAlpha:enableAlpha,enableStyle:enableStyle,innerWrapperClassName:innerWrapperClassName,inputWidth:wrapperWidth,onBorderChange:onBorderChange,onSliderChange:onSliderChange,onWidthChange:onWidthChange,previousStyleSelection:styleSelection,sliderClassName:sliderClassName,value:border,widthUnit:widthUnit,widthValue:widthValue,size:size,__experimentalIsRenderedInSidebar:__experimentalIsRenderedInSidebar}}const BorderLabel=props=>{const{label:label,hideLabelFromVision:hideLabelFromVision}=props;return label?hideLabelFromVision?(0,jsx_runtime.jsx)(visually_hidden_component.Z,{as:"legend",children:label}):(0,jsx_runtime.jsx)(base_control_styles.ar,{as:"legend",children:label}):null},UnconnectedBorderControl=(props,forwardedRef)=>{const{colors:colors,disableCustomColors:disableCustomColors,disableUnits:disableUnits,enableAlpha:enableAlpha,enableStyle:enableStyle,hideLabelFromVision:hideLabelFromVision,innerWrapperClassName:innerWrapperClassName,inputWidth:inputWidth,label:label,onBorderChange:onBorderChange,onSliderChange:onSliderChange,onWidthChange:onWidthChange,placeholder:placeholder,__unstablePopoverProps:__unstablePopoverProps,previousStyleSelection:previousStyleSelection,showDropdownHeader:showDropdownHeader,size:size,sliderClassName:sliderClassName,value:border,widthUnit:widthUnit,widthValue:widthValue,withSlider:withSlider,__experimentalIsRenderedInSidebar:__experimentalIsRenderedInSidebar,...otherProps}=useBorderControl(props);return(0,jsx_runtime.jsxs)(component.Z,{as:"fieldset",...otherProps,ref:forwardedRef,children:[(0,jsx_runtime.jsx)(BorderLabel,{label:label,hideLabelFromVision:hideLabelFromVision}),(0,jsx_runtime.jsxs)(h_stack_component.Z,{spacing:4,className:innerWrapperClassName,children:[(0,jsx_runtime.jsx)(unit_control.ZP,{prefix:(0,jsx_runtime.jsx)(border_control_dropdown_component,{border:border,colors:colors,__unstablePopoverProps:__unstablePopoverProps,disableCustomColors:disableCustomColors,enableAlpha:enableAlpha,enableStyle:enableStyle,onChange:onBorderChange,previousStyleSelection:previousStyleSelection,showDropdownHeader:showDropdownHeader,__experimentalIsRenderedInSidebar:__experimentalIsRenderedInSidebar,size:size}),label:(0,build_module.__)("Border width"),hideLabelFromVision:!0,min:0,onChange:onWidthChange,value:border?.width||"",placeholder:placeholder,disableUnits:disableUnits,__unstableInputWidth:inputWidth,size:size}),withSlider&&(0,jsx_runtime.jsx)(range_control.Z,{__nextHasNoMarginBottom:!0,label:(0,build_module.__)("Border width"),hideLabelFromVision:!0,className:sliderClassName,initialPosition:0,max:100,min:0,onChange:onSliderChange,step:["px","%"].includes(widthUnit)?1:.1,value:widthValue||void 0,withInputField:!1})]})]})};UnconnectedBorderControl.displayName="UnconnectedBorderControl";const BorderControl=(0,context_connect.Iq)(UnconnectedBorderControl,"BorderControl");var border_control_component=BorderControl;try{BorderControl.displayName="BorderControl",BorderControl.__docgenInfo={description:"The `BorderControl` brings together internal sub-components which allow users to\nset the various properties of a border. The first sub-component, a\n`BorderDropdown` contains options representing border color and style. The\nborder width is controlled via a `UnitControl` and an optional `RangeControl`.\n\nBorder radius is not covered by this control as it may be desired separate to\ncolor, style, and width. For example, the border radius may be absorbed under\na \"shape\" abstraction.\n\n```jsx\nimport { __experimentalBorderControl as BorderControl } from '@wordpress/components';\nimport { __ } from '@wordpress/i18n';\n\nconst colors = [\n\t{ name: 'Blue 20', color: '#72aee6' },\n\t// ...\n];\n\nconst MyBorderControl = () => {\n\tconst [ border, setBorder ] = useState();\n\tconst onChange = ( newBorder ) => setBorder( newBorder );\n\n\treturn (\n\t\t<BorderControl\n\t\t\tcolors={ colors }\n\t\t\tlabel={ __( 'Border' ) }\n\t\t\tonChange={ onChange }\n\t\t\tvalue={ border }\n\t\t/>\n\t);\n};\n```",displayName:"BorderControl",props:{colors:{defaultValue:{value:"[]"},description:"Array with the colors to be shown. When displaying multiple color palettes\nto choose from, the format of the array changes from an array of colors\nobjects, to an array of color palettes.",name:"colors",required:!1,type:{name:"PaletteObject[] | ColorObject[]"}},__experimentalIsRenderedInSidebar:{defaultValue:{value:"false"},description:"Whether this is rendered in the sidebar.",name:"__experimentalIsRenderedInSidebar",required:!1,type:{name:"boolean"}},enableAlpha:{defaultValue:{value:"false"},description:"This controls whether the alpha channel will be offered when selecting\ncustom colors.",name:"enableAlpha",required:!1,type:{name:"boolean"}},disableCustomColors:{defaultValue:null,description:"This toggles the ability to choose custom colors.",name:"disableCustomColors",required:!1,type:{name:"boolean"}},hideLabelFromVision:{defaultValue:null,description:"Provides control over whether the label will only be visible to\nscreen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"If provided, a label will be generated using this as the content.",name:"label",required:!1,type:{name:"string"}},disableUnits:{defaultValue:null,description:"This controls whether unit selection should be disabled.",name:"disableUnits",required:!1,type:{name:"boolean"}},enableStyle:{defaultValue:{value:"true"},description:"This controls whether to support border style selection.",name:"enableStyle",required:!1,type:{name:"boolean"}},isCompact:{defaultValue:null,description:"This flags the `BorderControl` to render with a more compact\nappearance. It restricts the width of the control and prevents it\nfrom expanding to take up additional space.",name:"isCompact",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"A callback function invoked when the border value is changed via an\ninteraction that selects or clears, border color, style, or width.",name:"onChange",required:!0,type:{name:"(value?: Border) => void"}},__unstablePopoverProps:{defaultValue:null,description:"An internal prop used to control the visibility of the dropdown.",name:"__unstablePopoverProps",required:!1,type:{name:'Omit<PopoverProps, "children">'}},shouldSanitizeBorder:{defaultValue:{value:"true"},description:"If opted into, sanitizing the border means that if no width or color\nhave been selected, the border style is also cleared and `undefined`\nis returned as the new border value.",name:"shouldSanitizeBorder",required:!1,type:{name:"boolean"}},showDropdownHeader:{defaultValue:null,description:"Whether or not to show the header for the border color and style\npicker dropdown. The header includes a label for the color picker\nand a close button.",name:"showDropdownHeader",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"'default'"},description:"Size of the control.",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"__unstable-large"'}]}},value:{defaultValue:null,description:"An object representing a border or `undefined`. Used to set the\ncurrent border configuration for this component.",name:"value",required:!1,type:{name:"Border"}},width:{defaultValue:null,description:"Controls the visual width of the `BorderControl`. It has no effect if\nthe `isCompact` prop is set to `true`.",name:"width",required:!1,type:{name:"Width<string | number>"}},withSlider:{defaultValue:null,description:"Flags whether this `BorderControl` should also render a\n`RangeControl` for additional control over a border's width.",name:"withSlider",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/border-control/border-control/component.tsx#BorderControl"]={docgenInfo:BorderControl.__docgenInfo,name:"BorderControl",path:"packages/components/src/border-control/border-control/component.tsx#BorderControl"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/color-indicator/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnforwardedColorIndicator(props,forwardedRef){const{className:className,colorValue:colorValue,...additionalProps}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("component-color-indicator",className),style:{background:colorValue},ref:forwardedRef,...additionalProps})}UnforwardedColorIndicator.displayName="UnforwardedColorIndicator";const ColorIndicator=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(UnforwardedColorIndicator);__webpack_exports__.Z=ColorIndicator;try{ColorIndicator.displayName="ColorIndicator",ColorIndicator.__docgenInfo={description:"ColorIndicator is a React component that renders a specific color in a\ncircle. It's often used to summarize a collection of used colors in a child\ncomponent.\n\n```jsx\nimport { ColorIndicator } from '@wordpress/components';\n\nconst MyColorIndicator = () => <ColorIndicator colorValue=\"#0073aa\" />;\n```",displayName:"ColorIndicator",props:{colorValue:{defaultValue:null,description:"The color of the indicator. Any value from the CSS `background` property\nis supported.",name:"colorValue",required:!0,type:{name:"Background<string | number>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/color-indicator/index.tsx#ColorIndicator"]={docgenInfo:ColorIndicator.__docgenInfo,name:"ColorIndicator",path:"packages/components/src/color-indicator/index.tsx#ColorIndicator"})}catch(__react_docgen_typescript_loader_error){}try{colorindicator.displayName="colorindicator",colorindicator.__docgenInfo={description:"ColorIndicator is a React component that renders a specific color in a\ncircle. It's often used to summarize a collection of used colors in a child\ncomponent.\n\n```jsx\nimport { ColorIndicator } from '@wordpress/components';\n\nconst MyColorIndicator = () => <ColorIndicator colorValue=\"#0073aa\" />;\n```",displayName:"colorindicator",props:{colorValue:{defaultValue:null,description:"The color of the indicator. Any value from the CSS `background` property\nis supported.",name:"colorValue",required:!0,type:{name:"Background<string | number>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/color-indicator/index.tsx#colorindicator"]={docgenInfo:colorindicator.__docgenInfo,name:"colorindicator",path:"packages/components/src/color-indicator/index.tsx#colorindicator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/icons/build-module/library/close-small.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const closeSmall=(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"}));__webpack_exports__.Z=closeSmall},"./packages/icons/build-module/library/line-dashed.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const lineDashed=(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{fillRule:"evenodd",d:"M5 11.25h3v1.5H5v-1.5zm5.5 0h3v1.5h-3v-1.5zm8.5 0h-3v1.5h3v-1.5z",clipRule:"evenodd"}));__webpack_exports__.Z=lineDashed},"./packages/icons/build-module/library/line-dotted.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const lineDotted=(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{fillRule:"evenodd",d:"M5.25 11.25h1.5v1.5h-1.5v-1.5zm3 0h1.5v1.5h-1.5v-1.5zm4.5 0h-1.5v1.5h1.5v-1.5zm1.5 0h1.5v1.5h-1.5v-1.5zm4.5 0h-1.5v1.5h1.5v-1.5z",clipRule:"evenodd"}));__webpack_exports__.Z=lineDotted},"./packages/icons/build-module/library/line-solid.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/primitives/build-module/svg/index.js");const lineSolid=(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Wj,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.y$,{d:"M5 11.25h14v1.5H5z"}));__webpack_exports__.Z=lineSolid},"./node_modules/remove-accents/index.js":function(module){var characterMap={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Ấ":"A","Ắ":"A","Ẳ":"A","Ẵ":"A","Ặ":"A","Æ":"AE","Ầ":"A","Ằ":"A","Ȃ":"A","Ả":"A","Ạ":"A","Ẩ":"A","Ẫ":"A","Ậ":"A","Ç":"C","Ḉ":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ế":"E","Ḗ":"E","Ề":"E","Ḕ":"E","Ḝ":"E","Ȇ":"E","Ẻ":"E","Ẽ":"E","Ẹ":"E","Ể":"E","Ễ":"E","Ệ":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ḯ":"I","Ȋ":"I","Ỉ":"I","Ị":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ố":"O","Ṍ":"O","Ṓ":"O","Ȏ":"O","Ỏ":"O","Ọ":"O","Ổ":"O","Ỗ":"O","Ộ":"O","Ờ":"O","Ở":"O","Ỡ":"O","Ớ":"O","Ợ":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ủ":"U","Ụ":"U","Ử":"U","Ữ":"U","Ự":"U","Ý":"Y","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","ấ":"a","ắ":"a","ẳ":"a","ẵ":"a","ặ":"a","æ":"ae","ầ":"a","ằ":"a","ȃ":"a","ả":"a","ạ":"a","ẩ":"a","ẫ":"a","ậ":"a","ç":"c","ḉ":"c","è":"e","é":"e","ê":"e","ë":"e","ế":"e","ḗ":"e","ề":"e","ḕ":"e","ḝ":"e","ȇ":"e","ẻ":"e","ẽ":"e","ẹ":"e","ể":"e","ễ":"e","ệ":"e","ì":"i","í":"i","î":"i","ï":"i","ḯ":"i","ȋ":"i","ỉ":"i","ị":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ố":"o","ṍ":"o","ṓ":"o","ȏ":"o","ỏ":"o","ọ":"o","ổ":"o","ỗ":"o","ộ":"o","ờ":"o","ở":"o","ỡ":"o","ớ":"o","ợ":"o","ù":"u","ú":"u","û":"u","ü":"u","ủ":"u","ụ":"u","ử":"u","ữ":"u","ự":"u","ý":"y","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Ĉ":"C","ĉ":"c","Ċ":"C","ċ":"c","Č":"C","č":"c","C̆":"C","c̆":"c","Ď":"D","ď":"d","Đ":"D","đ":"d","Ē":"E","ē":"e","Ĕ":"E","ĕ":"e","Ė":"E","ė":"e","Ę":"E","ę":"e","Ě":"E","ě":"e","Ĝ":"G","Ǵ":"G","ĝ":"g","ǵ":"g","Ğ":"G","ğ":"g","Ġ":"G","ġ":"g","Ģ":"G","ģ":"g","Ĥ":"H","ĥ":"h","Ħ":"H","ħ":"h","Ḫ":"H","ḫ":"h","Ĩ":"I","ĩ":"i","Ī":"I","ī":"i","Ĭ":"I","ĭ":"i","Į":"I","į":"i","İ":"I","ı":"i","Ĳ":"IJ","ĳ":"ij","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","Ḱ":"K","ḱ":"k","K̆":"K","k̆":"k","Ĺ":"L","ĺ":"l","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ŀ":"L","ŀ":"l","Ł":"l","ł":"l","Ḿ":"M","ḿ":"m","M̆":"M","m̆":"m","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","ŉ":"n","N̆":"N","n̆":"n","Ō":"O","ō":"o","Ŏ":"O","ŏ":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","P̆":"P","p̆":"p","Ŕ":"R","ŕ":"r","Ŗ":"R","ŗ":"r","Ř":"R","ř":"r","R̆":"R","r̆":"r","Ȓ":"R","ȓ":"r","Ś":"S","ś":"s","Ŝ":"S","ŝ":"s","Ş":"S","Ș":"S","ș":"s","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","ț":"t","Ț":"T","Ť":"T","ť":"t","Ŧ":"T","ŧ":"t","T̆":"T","t̆":"t","Ũ":"U","ũ":"u","Ū":"U","ū":"u","Ŭ":"U","ŭ":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ȗ":"U","ȗ":"u","V̆":"V","v̆":"v","Ŵ":"W","ŵ":"w","Ẃ":"W","ẃ":"w","X̆":"X","x̆":"x","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Y̆":"Y","y̆":"y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ſ":"s","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","Ǎ":"A","ǎ":"a","Ǐ":"I","ǐ":"i","Ǒ":"O","ǒ":"o","Ǔ":"U","ǔ":"u","Ǖ":"U","ǖ":"u","Ǘ":"U","ǘ":"u","Ǚ":"U","ǚ":"u","Ǜ":"U","ǜ":"u","Ứ":"U","ứ":"u","Ṹ":"U","ṹ":"u","Ǻ":"A","ǻ":"a","Ǽ":"AE","ǽ":"ae","Ǿ":"O","ǿ":"o","Þ":"TH","þ":"th","Ṕ":"P","ṕ":"p","Ṥ":"S","ṥ":"s","X́":"X","x́":"x","Ѓ":"Г","ѓ":"г","Ќ":"К","ќ":"к","A̋":"A","a̋":"a","E̋":"E","e̋":"e","I̋":"I","i̋":"i","Ǹ":"N","ǹ":"n","Ồ":"O","ồ":"o","Ṑ":"O","ṑ":"o","Ừ":"U","ừ":"u","Ẁ":"W","ẁ":"w","Ỳ":"Y","ỳ":"y","Ȁ":"A","ȁ":"a","Ȅ":"E","ȅ":"e","Ȉ":"I","ȉ":"i","Ȍ":"O","ȍ":"o","Ȑ":"R","ȑ":"r","Ȕ":"U","ȕ":"u","B̌":"B","b̌":"b","Č̣":"C","č̣":"c","Ê̌":"E","ê̌":"e","F̌":"F","f̌":"f","Ǧ":"G","ǧ":"g","Ȟ":"H","ȟ":"h","J̌":"J","ǰ":"j","Ǩ":"K","ǩ":"k","M̌":"M","m̌":"m","P̌":"P","p̌":"p","Q̌":"Q","q̌":"q","Ř̩":"R","ř̩":"r","Ṧ":"S","ṧ":"s","V̌":"V","v̌":"v","W̌":"W","w̌":"w","X̌":"X","x̌":"x","Y̌":"Y","y̌":"y","A̧":"A","a̧":"a","B̧":"B","b̧":"b","Ḑ":"D","ḑ":"d","Ȩ":"E","ȩ":"e","Ɛ̧":"E","ɛ̧":"e","Ḩ":"H","ḩ":"h","I̧":"I","i̧":"i","Ɨ̧":"I","ɨ̧":"i","M̧":"M","m̧":"m","O̧":"O","o̧":"o","Q̧":"Q","q̧":"q","U̧":"U","u̧":"u","X̧":"X","x̧":"x","Z̧":"Z","z̧":"z","й":"и","Й":"И","ё":"е","Ё":"Е"},chars=Object.keys(characterMap).join("|"),allAccents=new RegExp(chars,"g"),firstAccent=new RegExp(chars,"");function matcher(match){return characterMap[match]}var removeAccents=function(string){return string.replace(allAccents,matcher)};module.exports=removeAccents,module.exports.has=function(string){return!!string.match(firstAccent)},module.exports.remove=removeAccents}}]);