"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[4940],{"./packages/components/src/toggle-group-control/context.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{L:function(){return useToggleGroupControlContext}});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const ToggleGroupControlContext=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)({}),useToggleGroupControlContext=()=>(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(ToggleGroupControlContext);__webpack_exports__.Z=ToggleGroupControlContext},"./packages/components/src/toggle-group-control/toggle-group-control-option-base/component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return component}});var styles_namespaceObject={};__webpack_require__.r(styles_namespaceObject),__webpack_require__.d(styles_namespaceObject,{ButtonContentView:function(){return ButtonContentView},LabelView:function(){return LabelView},Uz:function(){return backdropView},Ji:function(){return buttonView},IA:function(){return labelBlock}});var react=__webpack_require__("./node_modules/react/index.js"),IO2C6XLJ=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/IO2C6XLJ.js"),use_reduced_motion=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs"),motion=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/render/dom/motion.mjs"),use_instance_id=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),use_context_system=__webpack_require__("./packages/components/src/context/use-context-system.js"),context_connect=__webpack_require__("./packages/components/src/context/context-connect.ts"),context=__webpack_require__("./packages/components/src/toggle-group-control/context.ts"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),config_values=__webpack_require__("./packages/components/src/utils/config-values.js"),colors_values=__webpack_require__("./packages/components/src/utils/colors-values.js"),reduce_motion=__webpack_require__("./packages/components/src/utils/reduce-motion.js");const LabelView=(0,emotion_styled_base_browser_esm.Z)("div",{target:"et6ln9s1"})({name:"sln1fl",styles:"display:inline-flex;max-width:100%;min-width:0;position:relative"}),labelBlock={name:"82a6rk",styles:"flex:1"},buttonView=({isDeselectable:isDeselectable,isIcon:isIcon,isPressed:isPressed,size:size})=>(0,emotion_react_browser_esm.iv)("align-items:center;appearance:none;background:transparent;border:none;border-radius:",config_values.Z.controlBorderRadius,";color:",colors_values.D.gray[700],";fill:currentColor;cursor:pointer;display:flex;font-family:inherit;height:100%;justify-content:center;line-height:100%;outline:none;padding:0 12px;position:relative;text-align:center;transition:background ",config_values.Z.transitionDurationFast," linear,color ",config_values.Z.transitionDurationFast," linear,font-weight 60ms linear;",(0,reduce_motion.r)("transition")," user-select:none;width:100%;z-index:2;&::-moz-focus-inner{border:0;}&:active{background:",config_values.Z.toggleGroupControlBackgroundColor,";}",isDeselectable&&deselectable," ",isIcon&&isIconStyles({size:size})," ",isPressed&&pressed,";",""),pressed=(0,emotion_react_browser_esm.iv)("color:",colors_values.D.white,";&:active{background:transparent;}",""),deselectable=(0,emotion_react_browser_esm.iv)("color:",colors_values.D.gray[900],";&:focus{box-shadow:inset 0 0 0 1px ",colors_values.D.white,",0 0 0 ",config_values.Z.borderWidthFocus," ",colors_values.D.theme.accent,";outline:2px solid transparent;}",""),ButtonContentView=(0,emotion_styled_base_browser_esm.Z)("div",{target:"et6ln9s0"})("display:flex;font-size:",config_values.Z.fontSize,";line-height:1;"),isIconStyles=({size:size="default"})=>(0,emotion_react_browser_esm.iv)("color:",colors_values.D.gray[900],";width:",{default:"30px","__unstable-large":"34px"}[size],";padding-left:0;padding-right:0;",""),backdropView=(0,emotion_react_browser_esm.iv)("background:",colors_values.D.gray[900],";border-radius:",config_values.Z.controlBorderRadius,";position:absolute;inset:0;z-index:1;outline:2px solid transparent;outline-offset:-3px;","");var use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts"),tooltip=__webpack_require__("./packages/components/src/tooltip/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const{ButtonContentView:component_ButtonContentView,LabelView:component_LabelView}=styles_namespaceObject,REDUCED_MOTION_TRANSITION_CONFIG={duration:0},WithToolTip=({showTooltip:showTooltip,text:text,children:children})=>showTooltip&&text?(0,jsx_runtime.jsx)(tooltip.Z,{text:text,placement:"top",children:children}):(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:children});function ToggleGroupControlOptionBase(props,forwardedRef){const shouldReduceMotion=(0,use_reduced_motion.J)(),toggleGroupControlContext=(0,context.L)(),id=(0,use_instance_id.Z)(ToggleGroupControlOptionBase,toggleGroupControlContext.baseId||"toggle-group-control-option-base"),buttonProps=(0,use_context_system.y)({...props,id:id},"ToggleGroupControlOptionBase"),{isBlock:isBlock=!1,isDeselectable:isDeselectable=!1,size:size="default"}=toggleGroupControlContext,{className:className,isIcon:isIcon=!1,value:value,children:children,showTooltip:showTooltip=!1,onFocus:onFocusProp,...otherButtonProps}=buttonProps,isPressed=toggleGroupControlContext.value===value,cx=(0,use_cx.I)(),labelViewClasses=(0,react.useMemo)((()=>cx(isBlock&&labelBlock)),[cx,isBlock]),itemClasses=(0,react.useMemo)((()=>cx(buttonView({isDeselectable:isDeselectable,isIcon:isIcon,isPressed:isPressed,size:size}),className)),[cx,isDeselectable,isIcon,isPressed,size,className]),backdropClasses=(0,react.useMemo)((()=>cx(backdropView)),[cx]),commonProps={...otherButtonProps,className:itemClasses,"data-value":value,ref:forwardedRef};return(0,jsx_runtime.jsxs)(component_LabelView,{className:labelViewClasses,children:[(0,jsx_runtime.jsx)(WithToolTip,{showTooltip:showTooltip,text:otherButtonProps["aria-label"],children:isDeselectable?(0,jsx_runtime.jsx)("button",{...commonProps,onFocus:onFocusProp,"aria-pressed":isPressed,type:"button",onClick:()=>{isDeselectable&&isPressed?toggleGroupControlContext.setValue(void 0):toggleGroupControlContext.setValue(value)},children:(0,jsx_runtime.jsx)(component_ButtonContentView,{children:children})}):(0,jsx_runtime.jsx)(IO2C6XLJ.Y,{render:(0,jsx_runtime.jsx)("button",{type:"button",...commonProps,onFocus:event=>{onFocusProp?.(event),event.defaultPrevented||toggleGroupControlContext.setValue(value)}}),value:value,children:(0,jsx_runtime.jsx)(component_ButtonContentView,{children:children})})}),isPressed?(0,jsx_runtime.jsx)(motion.E.div,{className:backdropClasses,transition:shouldReduceMotion?REDUCED_MOTION_TRANSITION_CONFIG:void 0,role:"presentation",layoutId:"toggle-group-backdrop-shared-layout-id"}):null]})}ToggleGroupControlOptionBase.displayName="ToggleGroupControlOptionBase";var component=(0,context_connect.Iq)(ToggleGroupControlOptionBase,"ToggleGroupControlOptionBase")},"./packages/components/src/toggle-group-control/toggle-group-control-option/component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_toggle_group_control_option_base__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/toggle-group-control/toggle-group-control-option-base/component.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnforwardedToggleGroupControlOption(props,ref){const{label:label,...restProps}=props,optionLabel=restProps["aria-label"]||label;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_toggle_group_control_option_base__WEBPACK_IMPORTED_MODULE_2__.Z,{...restProps,"aria-label":optionLabel,ref:ref,children:label})}UnforwardedToggleGroupControlOption.displayName="UnforwardedToggleGroupControlOption";const ToggleGroupControlOption=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(UnforwardedToggleGroupControlOption);__webpack_exports__.Z=ToggleGroupControlOption;try{ToggleGroupControlOption.displayName="ToggleGroupControlOption",ToggleGroupControlOption.__docgenInfo={description:'`ToggleGroupControlOption` is a form component and is meant to be used as a\nchild of `ToggleGroupControl`.\n\n```jsx\nimport {\n  __experimentalToggleGroupControl as ToggleGroupControl,\n  __experimentalToggleGroupControlOption as ToggleGroupControlOption,\n} from \'@wordpress/components\';\n\nfunction Example() {\n  return (\n    <ToggleGroupControl label="my label" value="vertical" isBlock>\n      <ToggleGroupControlOption value="horizontal" label="Horizontal" />\n      <ToggleGroupControlOption value="vertical" label="Vertical" />\n    </ToggleGroupControl>\n  );\n}\n```',displayName:"ToggleGroupControlOption",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | number"}},showTooltip:{defaultValue:{value:"false"},description:"Whether to display a Tooltip for the control option. If set to `true`, the tooltip will\nshow the aria-label or the label prop text.",name:"showTooltip",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Label for the option. If needed, the `aria-label` prop can be used in addition\nto specify a different label for assistive technologies.",name:"label",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/toggle-group-control/toggle-group-control-option/component.tsx#ToggleGroupControlOption"]={docgenInfo:ToggleGroupControlOption.__docgenInfo,name:"ToggleGroupControlOption",path:"packages/components/src/toggle-group-control/toggle-group-control-option/component.tsx#ToggleGroupControlOption"})}catch(__react_docgen_typescript_loader_error){}try{component.displayName="component",component.__docgenInfo={description:'`ToggleGroupControlOption` is a form component and is meant to be used as a\nchild of `ToggleGroupControl`.\n\n```jsx\nimport {\n  __experimentalToggleGroupControl as ToggleGroupControl,\n  __experimentalToggleGroupControlOption as ToggleGroupControlOption,\n} from \'@wordpress/components\';\n\nfunction Example() {\n  return (\n    <ToggleGroupControl label="my label" value="vertical" isBlock>\n      <ToggleGroupControlOption value="horizontal" label="Horizontal" />\n      <ToggleGroupControlOption value="vertical" label="Vertical" />\n    </ToggleGroupControl>\n  );\n}\n```',displayName:"component",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | number"}},showTooltip:{defaultValue:{value:"false"},description:"Whether to display a Tooltip for the control option. If set to `true`, the tooltip will\nshow the aria-label or the label prop text.",name:"showTooltip",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Label for the option. If needed, the `aria-label` prop can be used in addition\nto specify a different label for assistive technologies.",name:"label",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/toggle-group-control/toggle-group-control-option/component.tsx#component"]={docgenInfo:component.__docgenInfo,name:"component",path:"packages/components/src/toggle-group-control/toggle-group-control-option/component.tsx#component"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/toggle-group-control/toggle-group-control/component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return toggle_group_control_component}});var react=__webpack_require__("./node_modules/react/index.js"),LayoutGroup=__webpack_require__("./packages/components/node_modules/framer-motion/dist/es/components/LayoutGroup/index.mjs"),use_instance_id=__webpack_require__("./packages/compose/build-module/hooks/use-instance-id/index.js"),use_context_system=__webpack_require__("./packages/components/src/context/use-context-system.js"),context_connect=__webpack_require__("./packages/components/src/context/context-connect.ts"),use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts"),base_control=__webpack_require__("./packages/components/src/base-control/index.tsx"),emotion_styled_base_browser_esm=__webpack_require__("./node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),colors_values=__webpack_require__("./packages/components/src/utils/colors-values.js"),config_values=__webpack_require__("./packages/components/src/utils/config-values.js");const enclosingBorders=isBlock=>{const enclosingBorder=(0,emotion_react_browser_esm.iv)("border-color:",colors_values.D.ui.border,";","");return(0,emotion_react_browser_esm.iv)(isBlock&&enclosingBorder," &:hover{border-color:",colors_values.D.ui.borderHover,";}&:focus-within{border-color:",colors_values.D.ui.borderFocus,";box-shadow:",config_values.Z.controlBoxShadowFocus,";z-index:1;outline:2px solid transparent;outline-offset:-2px;}","")},toggleGroupControlSize=size=>(0,emotion_react_browser_esm.iv)("min-height:",{default:"36px","__unstable-large":"40px"}[size],";",""),block={name:"7whenc",styles:"display:flex;width:100%"},VisualLabelWrapper=(0,emotion_styled_base_browser_esm.Z)("div",{target:"eakva830"})({name:"zjik7",styles:"display:flex"});var R72A2MDW=__webpack_require__("./node_modules/@ariakit/react-core/esm/__chunks/R72A2MDW.js"),radio_group=__webpack_require__("./node_modules/@ariakit/react-core/esm/radio/radio-group.js"),component=__webpack_require__("./packages/components/src/view/component.tsx"),context=__webpack_require__("./packages/components/src/toggle-group-control/context.ts"),use_previous=__webpack_require__("./packages/compose/build-module/hooks/use-previous/index.js");function useComputeControlledOrUncontrolledValue(valueProp){const hasEverBeenUsedInControlledMode=(0,react.useRef)(!1),previousValueProp=(0,use_previous.Z)(valueProp);let value,defaultValue;return(0,react.useEffect)((()=>{hasEverBeenUsedInControlledMode.current||(hasEverBeenUsedInControlledMode.current=void 0!==valueProp&&void 0!==previousValueProp&&valueProp!==previousValueProp)}),[valueProp,previousValueProp]),hasEverBeenUsedInControlledMode.current?value=null!=valueProp?valueProp:"":defaultValue=valueProp,{value:value,defaultValue:defaultValue}}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnforwardedToggleGroupControlAsRadioGroup({children:children,isAdaptiveWidth:isAdaptiveWidth,label:label,onChange:onChangeProp,size:size,value:valueProp,id:idProp,...otherProps},forwardedRef){const generatedId=(0,use_instance_id.Z)(ToggleGroupControlAsRadioGroup,"toggle-group-control-as-radio-group"),baseId=idProp||generatedId,{value:value,defaultValue:defaultValue}=useComputeControlledOrUncontrolledValue(valueProp),wrappedOnChangeProp=onChangeProp?v=>{onChangeProp(null!=v?v:void 0)}:void 0,radio=R72A2MDW.s({defaultValue:defaultValue,value:value,setValue:wrappedOnChangeProp}),selectedValue=radio.useState("value"),setValue=radio.setValue,groupContextValue=(0,react.useMemo)((()=>({baseId:baseId,isBlock:!isAdaptiveWidth,size:size,value:selectedValue,setValue:setValue})),[baseId,isAdaptiveWidth,size,selectedValue,setValue]);return(0,jsx_runtime.jsx)(context.Z.Provider,{value:groupContextValue,children:(0,jsx_runtime.jsx)(radio_group.E,{store:radio,"aria-label":label,render:(0,jsx_runtime.jsx)(component.Z,{}),...otherProps,id:baseId,ref:forwardedRef,children:children})})}UnforwardedToggleGroupControlAsRadioGroup.displayName="UnforwardedToggleGroupControlAsRadioGroup";const ToggleGroupControlAsRadioGroup=(0,react.forwardRef)(UnforwardedToggleGroupControlAsRadioGroup);try{ToggleGroupControlAsRadioGroup.displayName="ToggleGroupControlAsRadioGroup",ToggleGroupControlAsRadioGroup.__docgenInfo={description:"",displayName:"ToggleGroupControlAsRadioGroup",props:{children:{defaultValue:null,description:"The options to render in the `ToggleGroupControl`, using either the `ToggleGroupControlOption` or\n`ToggleGroupControlOptionIcon` components.",name:"children",required:!0,type:{name:"ReactNode"}},label:{defaultValue:null,description:"Label for the control.",name:"label",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"Callback when a segment is selected.",name:"onChange",required:!1,type:{name:"(value: string | number) => void"}},size:{defaultValue:{value:"'default'"},description:"The size variant of the control.",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"__unstable-large"'}]}},value:{defaultValue:null,description:"The selected value.",name:"value",required:!1,type:{name:"string | number"}},isAdaptiveWidth:{defaultValue:{value:"false"},description:"Determines if segments should be rendered with equal widths.",name:"isAdaptiveWidth",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/toggle-group-control/toggle-group-control/as-radio-group.tsx#ToggleGroupControlAsRadioGroup"]={docgenInfo:ToggleGroupControlAsRadioGroup.__docgenInfo,name:"ToggleGroupControlAsRadioGroup",path:"packages/components/src/toggle-group-control/toggle-group-control/as-radio-group.tsx#ToggleGroupControlAsRadioGroup"})}catch(__react_docgen_typescript_loader_error){}var use_controlled_value=__webpack_require__("./packages/components/src/utils/hooks/use-controlled-value.ts");function UnforwardedToggleGroupControlAsButtonGroup({children:children,isAdaptiveWidth:isAdaptiveWidth,label:label,onChange:onChange,size:size,value:valueProp,id:idProp,...otherProps},forwardedRef){const generatedId=(0,use_instance_id.Z)(ToggleGroupControlAsButtonGroup,"toggle-group-control-as-button-group"),baseId=idProp||generatedId,{value:value,defaultValue:defaultValue}=useComputeControlledOrUncontrolledValue(valueProp),[selectedValue,setSelectedValue]=(0,use_controlled_value.O)({defaultValue:defaultValue,value:value,onChange:onChange}),groupContextValue=(0,react.useMemo)((()=>({baseId:baseId,value:selectedValue,setValue:setSelectedValue,isBlock:!isAdaptiveWidth,isDeselectable:!0,size:size})),[baseId,selectedValue,setSelectedValue,isAdaptiveWidth,size]);return(0,jsx_runtime.jsx)(context.Z.Provider,{value:groupContextValue,children:(0,jsx_runtime.jsx)(component.Z,{"aria-label":label,...otherProps,ref:forwardedRef,role:"group",children:children})})}UnforwardedToggleGroupControlAsButtonGroup.displayName="UnforwardedToggleGroupControlAsButtonGroup";const ToggleGroupControlAsButtonGroup=(0,react.forwardRef)(UnforwardedToggleGroupControlAsButtonGroup);try{ToggleGroupControlAsButtonGroup.displayName="ToggleGroupControlAsButtonGroup",ToggleGroupControlAsButtonGroup.__docgenInfo={description:"",displayName:"ToggleGroupControlAsButtonGroup",props:{children:{defaultValue:null,description:"The options to render in the `ToggleGroupControl`, using either the `ToggleGroupControlOption` or\n`ToggleGroupControlOptionIcon` components.",name:"children",required:!0,type:{name:"ReactNode"}},label:{defaultValue:null,description:"Label for the control.",name:"label",required:!0,type:{name:"string"}},onChange:{defaultValue:null,description:"Callback when a segment is selected.",name:"onChange",required:!1,type:{name:"(value: string | number) => void"}},size:{defaultValue:{value:"'default'"},description:"The size variant of the control.",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"__unstable-large"'}]}},value:{defaultValue:null,description:"The selected value.",name:"value",required:!1,type:{name:"string | number"}},isAdaptiveWidth:{defaultValue:{value:"false"},description:"Determines if segments should be rendered with equal widths.",name:"isAdaptiveWidth",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/toggle-group-control/toggle-group-control/as-button-group.tsx#ToggleGroupControlAsButtonGroup"]={docgenInfo:ToggleGroupControlAsButtonGroup.__docgenInfo,name:"ToggleGroupControlAsButtonGroup",path:"packages/components/src/toggle-group-control/toggle-group-control/as-button-group.tsx#ToggleGroupControlAsButtonGroup"})}catch(__react_docgen_typescript_loader_error){}function UnconnectedToggleGroupControl(props,forwardedRef){const{__nextHasNoMarginBottom:__nextHasNoMarginBottom=!1,className:className,isAdaptiveWidth:isAdaptiveWidth=!1,isBlock:isBlock=!1,isDeselectable:isDeselectable=!1,label:label,hideLabelFromVision:hideLabelFromVision=!1,help:help,onChange:onChange,size:size="default",value:value,children:children,...otherProps}=(0,use_context_system.y)(props,"ToggleGroupControl"),baseId=(0,use_instance_id.Z)(ToggleGroupControl,"toggle-group-control"),cx=(0,use_cx.I)(),classes=(0,react.useMemo)((()=>cx((({isBlock:isBlock,isDeselectable:isDeselectable,size:size})=>(0,emotion_react_browser_esm.iv)("background:",colors_values.D.ui.background,";border:1px solid transparent;border-radius:",config_values.Z.controlBorderRadius,";display:inline-flex;min-width:0;padding:2px;position:relative;",toggleGroupControlSize(size)," ",!isDeselectable&&enclosingBorders(isBlock),";",""))({isBlock:isBlock,isDeselectable:isDeselectable,size:size}),isBlock&&block,className)),[className,cx,isBlock,isDeselectable,size]),MainControl=isDeselectable?ToggleGroupControlAsButtonGroup:ToggleGroupControlAsRadioGroup;return(0,jsx_runtime.jsxs)(base_control.ZP,{help:help,__nextHasNoMarginBottom:__nextHasNoMarginBottom,children:[!hideLabelFromVision&&(0,jsx_runtime.jsx)(VisualLabelWrapper,{children:(0,jsx_runtime.jsx)(base_control.ZP.VisualLabel,{children:label})}),(0,jsx_runtime.jsx)(MainControl,{...otherProps,className:classes,isAdaptiveWidth:isAdaptiveWidth,label:label,onChange:onChange,ref:forwardedRef,size:size,value:value,children:(0,jsx_runtime.jsx)(LayoutGroup.S,{id:baseId,children:children})})]})}UnconnectedToggleGroupControl.displayName="UnconnectedToggleGroupControl";const ToggleGroupControl=(0,context_connect.Iq)(UnconnectedToggleGroupControl,"ToggleGroupControl");var toggle_group_control_component=ToggleGroupControl;try{ToggleGroupControl.displayName="ToggleGroupControl",ToggleGroupControl.__docgenInfo={description:'`ToggleGroupControl` is a form component that lets users choose options\nrepresented in horizontal segments. To render options for this control use\n`ToggleGroupControlOption` component.\n\nThis component is intended for selecting a single persistent value from a set of options,\nsimilar to a how a radio button group would work. If you simply want a toggle to switch between views,\nuse a `TabPanel` instead.\n\nOnly use this control when you know for sure the labels of items inside won\'t\nwrap. For items with longer labels, you can consider a `SelectControl` or a\n`CustomSelectControl` component instead.\n\n```jsx\nimport {\n  __experimentalToggleGroupControl as ToggleGroupControl,\n  __experimentalToggleGroupControlOption as ToggleGroupControlOption,\n} from \'@wordpress/components\';\n\nfunction Example() {\n  return (\n    <ToggleGroupControl label="my label" value="vertical" isBlock>\n      <ToggleGroupControlOption value="horizontal" label="Horizontal" />\n      <ToggleGroupControlOption value="vertical" label="Vertical" />\n    </ToggleGroupControl>\n  );\n}\n```',displayName:"ToggleGroupControl",props:{help:{defaultValue:null,description:"Additional description for the control.\n\nIt is preferable to use plain text for `help`, as it can be accessibly associated with the control using `aria-describedby`.\nWhen the `help` contains links, or otherwise non-plain text content, it will be associated with the control using `aria-details`.",name:"help",required:!1,type:{name:"ReactNode"}},__nextHasNoMarginBottom:{defaultValue:{value:"false"},description:"Start opting into the new margin-free styles that will become the default in a future version.",name:"__nextHasNoMarginBottom",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Label for the control.",name:"label",required:!0,type:{name:"string"}},hideLabelFromVision:{defaultValue:{value:"false"},description:"If true, the label will only be visible to screen readers.",name:"hideLabelFromVision",required:!1,type:{name:"boolean"}},isAdaptiveWidth:{defaultValue:{value:"false"},description:"Determines if segments should be rendered with equal widths.",name:"isAdaptiveWidth",required:!1,type:{name:"boolean"}},isBlock:{defaultValue:{value:"false"},description:"Renders `ToggleGroupControl` as a (CSS) block element, spanning the entire width of\nthe available space. This is the recommended style when the options are text-based and not icons.",name:"isBlock",required:!1,type:{name:"boolean"}},isDeselectable:{defaultValue:{value:"false"},description:"Whether an option can be deselected by clicking it again.",name:"isDeselectable",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Callback when a segment is selected.",name:"onChange",required:!1,type:{name:"(value: string | number) => void"}},value:{defaultValue:null,description:"The selected value.",name:"value",required:!1,type:{name:"string | number"}},children:{defaultValue:null,description:"The options to render in the `ToggleGroupControl`, using either the `ToggleGroupControlOption` or\n`ToggleGroupControlOptionIcon` components.",name:"children",required:!0,type:{name:"ReactNode"}},size:{defaultValue:{value:"'default'"},description:"The size variant of the control.",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"__unstable-large"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/toggle-group-control/toggle-group-control/component.tsx#ToggleGroupControl"]={docgenInfo:ToggleGroupControl.__docgenInfo,name:"ToggleGroupControl",path:"packages/components/src/toggle-group-control/toggle-group-control/component.tsx#ToggleGroupControl"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/utils/hooks/use-controlled-value.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{O:function(){return useControlledValue}});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useControlledValue({defaultValue:defaultValue,onChange:onChange,value:valueProp}){const hasValue=void 0!==valueProp,initialValue=hasValue?valueProp:defaultValue,[state,setState]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(initialValue);let setValue;return setValue=hasValue&&"function"==typeof onChange?onChange:hasValue||"function"!=typeof onChange?setState:nextValue=>{onChange(nextValue),setState(nextValue)},[hasValue?valueProp:state,setValue]}},"./packages/compose/build-module/hooks/use-previous/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return usePrevious}});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function usePrevious(value){const ref=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{ref.current=value}),[value]),ref.current}}}]);