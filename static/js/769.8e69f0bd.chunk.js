"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[769],{697:function(e,n,t){t.d(n,{Z:function(){return b}});var o=t(7462),r=t(3366),i=t(2791),a=t(3733),s=t(5917),l=t(104),u=t(8519),c=t(3459),d=t(184),f=["className","component"];var p=t(5902),v=t(7107),m=t(988),h=(0,t(5878).Z)("MuiBox",["root"]),E=(0,v.Z)(),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.themeId,t=e.defaultTheme,p=e.defaultClassName,v=void 0===p?"MuiBox-root":p,m=e.generateClassName,h=(0,s.ZP)("div",{shouldForwardProp:function(e){return"theme"!==e&&"sx"!==e&&"as"!==e}})(l.Z),E=i.forwardRef((function(e,i){var s=(0,c.Z)(t),l=(0,u.Z)(e),p=l.className,E=l.component,x=void 0===E?"div":E,b=(0,r.Z)(l,f);return(0,d.jsx)(h,(0,o.Z)({as:x,ref:i,className:(0,a.Z)(p,m?m(v):v),theme:n&&s[n]||s},b))}));return E}({themeId:m.Z,defaultTheme:E,defaultClassName:h.root,generateClassName:p.Z.generate}),b=x},4324:function(e,n,t){t.d(n,{Z:function(){return ve}});var o=t(3366),r=t(7462),i=t(2791),a=t(3733),s=t(6117);function l(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(void 0===e)return{};var t={};return Object.keys(e).filter((function(t){return t.match(/^on[A-Z]/)&&"function"===typeof e[t]&&!n.includes(t)})).forEach((function(n){t[n]=e[n]})),t}function u(e){if(void 0===e)return{};var n={};return Object.keys(e).filter((function(n){return!(n.match(/^on[A-Z]/)&&"function"===typeof e[n])})).forEach((function(t){n[t]=e[t]})),n}var c=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function d(e){var n,t=e.elementType,i=e.externalSlotProps,d=e.ownerState,f=e.skipResolvingSlotProps,p=void 0!==f&&f,v=(0,o.Z)(e,c),m=p?{}:function(e,n,t){return"function"===typeof e?e(n,t):e}(i,d),h=function(e){var n=e.getSlotProps,t=e.additionalProps,o=e.externalSlotProps,i=e.externalForwardedProps,s=e.className;if(!n){var c=(0,a.Z)(null==t?void 0:t.className,s,null==i?void 0:i.className,null==o?void 0:o.className),d=(0,r.Z)({},null==t?void 0:t.style,null==i?void 0:i.style,null==o?void 0:o.style),f=(0,r.Z)({},t,i,o);return c.length>0&&(f.className=c),Object.keys(d).length>0&&(f.style=d),{props:f,internalRef:void 0}}var p=l((0,r.Z)({},i,o)),v=u(o),m=u(i),h=n(p),E=(0,a.Z)(null==h?void 0:h.className,null==t?void 0:t.className,s,null==i?void 0:i.className,null==o?void 0:o.className),x=(0,r.Z)({},null==h?void 0:h.style,null==t?void 0:t.style,null==i?void 0:i.style,null==o?void 0:o.style),b=(0,r.Z)({},h,t,m,v);return E.length>0&&(b.className=E),Object.keys(x).length>0&&(b.style=x),{props:b,internalRef:h.ref}}((0,r.Z)({},v,{externalSlotProps:m})),E=h.props,x=h.internalRef,b=(0,s.Z)(x,null==m?void 0:m.ref,null==(n=e.additionalProps)?void 0:n.ref),g=function(e,n,t){return void 0===e||"string"===typeof e?n:(0,r.Z)({},n,{ownerState:(0,r.Z)({},n.ownerState,t)})}(t,(0,r.Z)({},E,{ref:b}),d);return g}var f=t(9439);function p(e){return e&&e.ownerDocument||document}var v=t(7054);function m(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.reduce((function(e,n){return null==n?e:function(){for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];e.apply(this,o),n.apply(this,o)}}),(function(){}))}var h=t(5671),E=t(3144),x=t(3433);function b(e){return p(e).defaultView||window}function g(e,n){n?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function y(e){return parseInt(b(e).getComputedStyle(e).paddingRight,10)||0}function k(e,n,t,o,r){var i=[n,t].concat((0,x.Z)(o));[].forEach.call(e.children,(function(e){var n=-1===i.indexOf(e),t=!function(e){var n=-1!==["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName),t="INPUT"===e.tagName&&"hidden"===e.getAttribute("type");return n||t}(e);n&&t&&g(e,r)}))}function Z(e,n){var t=-1;return e.some((function(e,o){return!!n(e)&&(t=o,!0)})),t}function R(e,n){var t=[],o=e.container;if(!n.disableScrollLock){if(function(e){var n=p(e);return n.body===e?b(e).innerWidth>n.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(o)){var r=function(e){var n=e.documentElement.clientWidth;return Math.abs(window.innerWidth-n)}(p(o));t.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight="".concat(y(o)+r,"px");var i=p(o).querySelectorAll(".mui-fixed");[].forEach.call(i,(function(e){t.push({value:e.style.paddingRight,property:"padding-right",el:e}),e.style.paddingRight="".concat(y(e)+r,"px")}))}var a;if(o.parentNode instanceof DocumentFragment)a=p(o).body;else{var s=o.parentElement,l=b(o);a="HTML"===(null==s?void 0:s.nodeName)&&"scroll"===l.getComputedStyle(s).overflowY?s:o}t.push({value:a.style.overflow,property:"overflow",el:a},{value:a.style.overflowX,property:"overflow-x",el:a},{value:a.style.overflowY,property:"overflow-y",el:a}),a.style.overflow="hidden"}return function(){t.forEach((function(e){var n=e.value,t=e.el,o=e.property;n?t.style.setProperty(o,n):t.style.removeProperty(o)}))}}var S=function(){function e(){(0,h.Z)(this,e),this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}return(0,E.Z)(e,[{key:"add",value:function(e,n){var t=this.modals.indexOf(e);if(-1!==t)return t;t=this.modals.length,this.modals.push(e),e.modalRef&&g(e.modalRef,!1);var o=function(e){var n=[];return[].forEach.call(e.children,(function(e){"true"===e.getAttribute("aria-hidden")&&n.push(e)})),n}(n);k(n,e.mount,e.modalRef,o,!0);var r=Z(this.containers,(function(e){return e.container===n}));return-1!==r?(this.containers[r].modals.push(e),t):(this.containers.push({modals:[e],container:n,restore:null,hiddenSiblings:o}),t)}},{key:"mount",value:function(e,n){var t=Z(this.containers,(function(n){return-1!==n.modals.indexOf(e)})),o=this.containers[t];o.restore||(o.restore=R(o,n))}},{key:"remove",value:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],t=this.modals.indexOf(e);if(-1===t)return t;var o=Z(this.containers,(function(n){return-1!==n.modals.indexOf(e)})),r=this.containers[o];if(r.modals.splice(r.modals.indexOf(e),1),this.modals.splice(t,1),0===r.modals.length)r.restore&&r.restore(),e.modalRef&&g(e.modalRef,n),k(r.container,e.mount,e.modalRef,r.hiddenSiblings,!1),this.containers.splice(o,1);else{var i=r.modals[r.modals.length-1];i.modalRef&&g(i.modalRef,!1)}return t}},{key:"isTopModal",value:function(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}}]),e}();var T=new S;function N(e){var n=e.container,t=e.disableEscapeKeyDown,o=void 0!==t&&t,a=e.disableScrollLock,u=void 0!==a&&a,c=e.manager,d=void 0===c?T:c,h=e.closeAfterTransition,E=void 0!==h&&h,x=e.onTransitionEnter,b=e.onTransitionExited,y=e.children,k=e.onClose,Z=e.open,R=e.rootRef,S=i.useRef({}),N=i.useRef(null),P=i.useRef(null),C=(0,s.Z)(P,R),w=i.useState(!Z),O=(0,f.Z)(w,2),M=O[0],I=O[1],A=function(e){return!!e&&e.props.hasOwnProperty("in")}(y),F=!0;"false"!==e["aria-hidden"]&&!1!==e["aria-hidden"]||(F=!1);var D=function(){return S.current.modalRef=P.current,S.current.mount=N.current,S.current},L=function(){d.mount(D(),{disableScrollLock:u}),P.current&&(P.current.scrollTop=0)},B=(0,v.Z)((function(){var e=function(e){return"function"===typeof e?e():e}(n)||p(N.current).body;d.add(D(),e),P.current&&L()})),j=i.useCallback((function(){return d.isTopModal(D())}),[d]),K=(0,v.Z)((function(e){N.current=e,e&&(Z&&j()?L():P.current&&g(P.current,F))})),U=i.useCallback((function(){d.remove(D(),F)}),[F,d]);i.useEffect((function(){return function(){U()}}),[U]),i.useEffect((function(){Z?B():A&&E||U()}),[Z,U,A,E,B]);var W=function(e){return function(n){var t;null==(t=e.onKeyDown)||t.call(e,n),"Escape"===n.key&&229!==n.which&&j()&&(o||(n.stopPropagation(),k&&k(n,"escapeKeyDown")))}},H=function(e){return function(n){var t;null==(t=e.onClick)||t.call(e,n),n.target===n.currentTarget&&k&&k(n,"backdropClick")}};return{getRootProps:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=l(e);delete t.onTransitionEnter,delete t.onTransitionExited;var o=(0,r.Z)({},t,n);return(0,r.Z)({role:"presentation"},o,{onKeyDown:W(o),ref:C})},getBackdropProps:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e;return(0,r.Z)({"aria-hidden":!0},n,{onClick:H(n),open:Z})},getTransitionProps:function(){return{onEnter:m((function(){I(!1),x&&x()}),null==y?void 0:y.props.onEnter),onExited:m((function(){I(!0),b&&b(),E&&U()}),null==y?void 0:y.props.onExited)}},rootRef:C,portalRef:K,isTopModal:j,exited:M,hasTransition:A}}var P=t(4419),C=t(184),w=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function O(e){var n=[],t=[];return Array.from(e.querySelectorAll(w)).forEach((function(e,o){var r=function(e){var n=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(n)?"true"===e.contentEditable||("AUDIO"===e.nodeName||"VIDEO"===e.nodeName||"DETAILS"===e.nodeName)&&null===e.getAttribute("tabindex")?0:e.tabIndex:n}(e);-1!==r&&function(e){return!(e.disabled||"INPUT"===e.tagName&&"hidden"===e.type||function(e){if("INPUT"!==e.tagName||"radio"!==e.type)return!1;if(!e.name)return!1;var n=function(n){return e.ownerDocument.querySelector('input[type="radio"]'.concat(n))},t=n('[name="'.concat(e.name,'"]:checked'));return t||(t=n('[name="'.concat(e.name,'"]'))),t!==e}(e))}(e)&&(0===r?n.push(e):t.push({documentOrder:o,tabIndex:r,node:e}))})),t.sort((function(e,n){return e.tabIndex===n.tabIndex?e.documentOrder-n.documentOrder:e.tabIndex-n.tabIndex})).map((function(e){return e.node})).concat(n)}function M(){return!0}function I(e){var n=e.children,t=e.disableAutoFocus,o=void 0!==t&&t,r=e.disableEnforceFocus,a=void 0!==r&&r,l=e.disableRestoreFocus,u=void 0!==l&&l,c=e.getTabbable,d=void 0===c?O:c,f=e.isEnabled,v=void 0===f?M:f,m=e.open,h=i.useRef(!1),E=i.useRef(null),x=i.useRef(null),b=i.useRef(null),g=i.useRef(null),y=i.useRef(!1),k=i.useRef(null),Z=(0,s.Z)(n.ref,k),R=i.useRef(null);i.useEffect((function(){m&&k.current&&(y.current=!o)}),[o,m]),i.useEffect((function(){if(m&&k.current){var e=p(k.current);return k.current.contains(e.activeElement)||(k.current.hasAttribute("tabIndex")||k.current.setAttribute("tabIndex","-1"),y.current&&k.current.focus()),function(){u||(b.current&&b.current.focus&&(h.current=!0,b.current.focus()),b.current=null)}}}),[m]),i.useEffect((function(){if(m&&k.current){var e=p(k.current),n=function(n){R.current=n,!a&&v()&&"Tab"===n.key&&e.activeElement===k.current&&n.shiftKey&&(h.current=!0,x.current&&x.current.focus())},t=function(){var n=k.current;if(null!==n)if(e.hasFocus()&&v()&&!h.current){if(!n.contains(e.activeElement)&&(!a||e.activeElement===E.current||e.activeElement===x.current)){if(e.activeElement!==g.current)g.current=null;else if(null!==g.current)return;if(y.current){var t=[];if(e.activeElement!==E.current&&e.activeElement!==x.current||(t=d(k.current)),t.length>0){var o,r,i=Boolean((null==(o=R.current)?void 0:o.shiftKey)&&"Tab"===(null==(r=R.current)?void 0:r.key)),s=t[0],l=t[t.length-1];"string"!==typeof s&&"string"!==typeof l&&(i?l.focus():s.focus())}else n.focus()}}}else h.current=!1};e.addEventListener("focusin",t),e.addEventListener("keydown",n,!0);var o=setInterval((function(){e.activeElement&&"BODY"===e.activeElement.tagName&&t()}),50);return function(){clearInterval(o),e.removeEventListener("focusin",t),e.removeEventListener("keydown",n,!0)}}}),[o,a,u,v,m,d]);var S=function(e){null===b.current&&(b.current=e.relatedTarget),y.current=!0};return(0,C.jsxs)(i.Fragment,{children:[(0,C.jsx)("div",{tabIndex:m?0:-1,onFocus:S,ref:E,"data-testid":"sentinelStart"}),i.cloneElement(n,{ref:Z,onFocus:function(e){null===b.current&&(b.current=e.relatedTarget),y.current=!0,g.current=e.target;var t=n.props.onFocus;t&&t(e)}}),(0,C.jsx)("div",{tabIndex:m?0:-1,onFocus:S,ref:x,"data-testid":"sentinelEnd"})]})}var A=t(4164),F=t(2876),D=t(2971);var L=i.forwardRef((function(e,n){var t=e.children,o=e.container,r=e.disablePortal,a=void 0!==r&&r,l=i.useState(null),u=(0,f.Z)(l,2),c=u[0],d=u[1],p=(0,s.Z)(i.isValidElement(t)?t.ref:null,n);if((0,F.Z)((function(){a||d(function(e){return"function"===typeof e?e():e}(o)||document.body)}),[o,a]),(0,F.Z)((function(){if(c&&!a)return(0,D.Z)(n,c),function(){(0,D.Z)(n,null)}}),[n,c,a]),a){if(i.isValidElement(t)){var v={ref:p};return i.cloneElement(t,v)}return(0,C.jsx)(i.Fragment,{children:t})}return(0,C.jsx)(i.Fragment,{children:c?A.createPortal(t,c):c})}));var B=t(6934),j=t(1402),K=t(4578),U=!1,W=t(5545),H="unmounted",V="exited",Y="entering",_="entered",q="exiting",z=function(e){function n(n,t){var o;o=e.call(this,n,t)||this;var r,i=t&&!t.isMounting?n.enter:n.appear;return o.appearStatus=null,n.in?i?(r=V,o.appearStatus=Y):r=_:r=n.unmountOnExit||n.mountOnEnter?H:V,o.state={status:r},o.nextCallback=null,o}(0,K.Z)(n,e),n.getDerivedStateFromProps=function(e,n){return e.in&&n.status===H?{status:V}:null};var t=n.prototype;return t.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},t.componentDidUpdate=function(e){var n=null;if(e!==this.props){var t=this.state.status;this.props.in?t!==Y&&t!==_&&(n=Y):t!==Y&&t!==_||(n=q)}this.updateStatus(!1,n)},t.componentWillUnmount=function(){this.cancelNextCallback()},t.getTimeouts=function(){var e,n,t,o=this.props.timeout;return e=n=t=o,null!=o&&"number"!==typeof o&&(e=o.exit,n=o.enter,t=void 0!==o.appear?o.appear:n),{exit:e,enter:n,appear:t}},t.updateStatus=function(e,n){if(void 0===e&&(e=!1),null!==n)if(this.cancelNextCallback(),n===Y){if(this.props.unmountOnExit||this.props.mountOnEnter){var t=this.props.nodeRef?this.props.nodeRef.current:A.findDOMNode(this);t&&function(e){e.scrollTop}(t)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===V&&this.setState({status:H})},t.performEnter=function(e){var n=this,t=this.props.enter,o=this.context?this.context.isMounting:e,r=this.props.nodeRef?[o]:[A.findDOMNode(this),o],i=r[0],a=r[1],s=this.getTimeouts(),l=o?s.appear:s.enter;!e&&!t||U?this.safeSetState({status:_},(function(){n.props.onEntered(i)})):(this.props.onEnter(i,a),this.safeSetState({status:Y},(function(){n.props.onEntering(i,a),n.onTransitionEnd(l,(function(){n.safeSetState({status:_},(function(){n.props.onEntered(i,a)}))}))})))},t.performExit=function(){var e=this,n=this.props.exit,t=this.getTimeouts(),o=this.props.nodeRef?void 0:A.findDOMNode(this);n&&!U?(this.props.onExit(o),this.safeSetState({status:q},(function(){e.props.onExiting(o),e.onTransitionEnd(t.exit,(function(){e.safeSetState({status:V},(function(){e.props.onExited(o)}))}))}))):this.safeSetState({status:V},(function(){e.props.onExited(o)}))},t.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},t.safeSetState=function(e,n){n=this.setNextCallback(n),this.setState(e,n)},t.setNextCallback=function(e){var n=this,t=!0;return this.nextCallback=function(o){t&&(t=!1,n.nextCallback=null,e(o))},this.nextCallback.cancel=function(){t=!1},this.nextCallback},t.onTransitionEnd=function(e,n){this.setNextCallback(n);var t=this.props.nodeRef?this.props.nodeRef.current:A.findDOMNode(this),o=null==e&&!this.props.addEndListener;if(t&&!o){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[t,this.nextCallback],i=r[0],a=r[1];this.props.addEndListener(i,a)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},t.render=function(){var e=this.state.status;if(e===H)return null;var n=this.props,t=n.children,r=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,(0,o.Z)(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.createElement(W.Z.Provider,{value:null},"function"===typeof t?t(e,r):i.cloneElement(i.Children.only(t),r))},n}(i.Component);function G(){}z.contextType=W.Z,z.propTypes={},z.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:G,onEntering:G,onEntered:G,onExit:G,onExiting:G,onExited:G},z.UNMOUNTED=H,z.EXITED=V,z.ENTERING=Y,z.ENTERED=_,z.EXITING=q;var X=z,J=t(3967);function Q(e,n){var t,o,r=e.timeout,i=e.easing,a=e.style,s=void 0===a?{}:a;return{duration:null!=(t=s.transitionDuration)?t:"number"===typeof r?r:r[n.mode]||0,easing:null!=(o=s.transitionTimingFunction)?o:"object"===typeof i?i[n.mode]:i,delay:s.transitionDelay}}var $=t(2071),ee=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],ne={entering:{opacity:1},entered:{opacity:1}},te=i.forwardRef((function(e,n){var t=(0,J.Z)(),a={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},s=e.addEndListener,l=e.appear,u=void 0===l||l,c=e.children,d=e.easing,f=e.in,p=e.onEnter,v=e.onEntered,m=e.onEntering,h=e.onExit,E=e.onExited,x=e.onExiting,b=e.style,g=e.timeout,y=void 0===g?a:g,k=e.TransitionComponent,Z=void 0===k?X:k,R=(0,o.Z)(e,ee),S=i.useRef(null),T=(0,$.Z)(S,c.ref,n),N=function(e){return function(n){if(e){var t=S.current;void 0===n?e(t):e(t,n)}}},P=N(m),w=N((function(e,n){!function(e){e.scrollTop}(e);var o=Q({style:b,timeout:y,easing:d},{mode:"enter"});e.style.webkitTransition=t.transitions.create("opacity",o),e.style.transition=t.transitions.create("opacity",o),p&&p(e,n)})),O=N(v),M=N(x),I=N((function(e){var n=Q({style:b,timeout:y,easing:d},{mode:"exit"});e.style.webkitTransition=t.transitions.create("opacity",n),e.style.transition=t.transitions.create("opacity",n),h&&h(e)})),A=N(E);return(0,C.jsx)(Z,(0,r.Z)({appear:u,in:f,nodeRef:S,onEnter:w,onEntered:O,onEntering:P,onExit:I,onExited:A,onExiting:M,addEndListener:function(e){s&&s(S.current,e)},timeout:y},R,{children:function(e,n){return i.cloneElement(c,(0,r.Z)({style:(0,r.Z)({opacity:0,visibility:"exited"!==e||f?void 0:"hidden"},ne[e],b,c.props.style),ref:T},n))}}))})),oe=t(5878),re=t(1217);function ie(e){return(0,re.Z)("MuiBackdrop",e)}(0,oe.Z)("MuiBackdrop",["root","invisible"]);var ae=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],se=(0,B.ZP)("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,t.invisible&&n.invisible]}})((function(e){var n=e.ownerState;return(0,r.Z)({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},n.invisible&&{backgroundColor:"transparent"})})),le=i.forwardRef((function(e,n){var t,i,s,l=(0,j.Z)({props:e,name:"MuiBackdrop"}),u=l.children,c=l.className,d=l.component,f=void 0===d?"div":d,p=l.components,v=void 0===p?{}:p,m=l.componentsProps,h=void 0===m?{}:m,E=l.invisible,x=void 0!==E&&E,b=l.open,g=l.slotProps,y=void 0===g?{}:g,k=l.slots,Z=void 0===k?{}:k,R=l.TransitionComponent,S=void 0===R?te:R,T=l.transitionDuration,N=(0,o.Z)(l,ae),w=(0,r.Z)({},l,{component:f,invisible:x}),O=function(e){var n=e.classes,t={root:["root",e.invisible&&"invisible"]};return(0,P.Z)(t,ie,n)}(w),M=null!=(t=y.root)?t:h.root;return(0,C.jsx)(S,(0,r.Z)({in:b,timeout:T},N,{children:(0,C.jsx)(se,(0,r.Z)({"aria-hidden":!0},M,{as:null!=(i=null!=(s=Z.root)?s:v.Root)?i:f,className:(0,a.Z)(O.root,c,null==M?void 0:M.className),ownerState:(0,r.Z)({},w,null==M?void 0:M.ownerState),classes:O,ref:n,children:u}))}))}));function ue(e){return(0,re.Z)("MuiModal",e)}(0,oe.Z)("MuiModal",["root","hidden","backdrop"]);var ce=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],de=(0,B.ZP)("div",{name:"MuiModal",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,!t.open&&t.exited&&n.hidden]}})((function(e){var n=e.theme,t=e.ownerState;return(0,r.Z)({position:"fixed",zIndex:(n.vars||n).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})})),fe=(0,B.ZP)(le,{name:"MuiModal",slot:"Backdrop",overridesResolver:function(e,n){return n.backdrop}})({zIndex:-1}),pe=i.forwardRef((function(e,n){var t,s,l,u,c,f,p=(0,j.Z)({name:"MuiModal",props:e}),v=p.BackdropComponent,m=void 0===v?fe:v,h=p.BackdropProps,E=p.className,x=p.closeAfterTransition,b=void 0!==x&&x,g=p.children,y=p.container,k=p.component,Z=p.components,R=void 0===Z?{}:Z,S=p.componentsProps,T=void 0===S?{}:S,w=p.disableAutoFocus,O=void 0!==w&&w,M=p.disableEnforceFocus,A=void 0!==M&&M,F=p.disableEscapeKeyDown,D=void 0!==F&&F,B=p.disablePortal,K=void 0!==B&&B,U=p.disableRestoreFocus,W=void 0!==U&&U,H=p.disableScrollLock,V=void 0!==H&&H,Y=p.hideBackdrop,_=void 0!==Y&&Y,q=p.keepMounted,z=void 0!==q&&q,G=p.onBackdropClick,X=p.open,J=p.slotProps,Q=p.slots,$=(0,o.Z)(p,ce),ee=(0,r.Z)({},p,{closeAfterTransition:b,disableAutoFocus:O,disableEnforceFocus:A,disableEscapeKeyDown:D,disablePortal:K,disableRestoreFocus:W,disableScrollLock:V,hideBackdrop:_,keepMounted:z}),ne=N((0,r.Z)({},ee,{rootRef:n})),te=ne.getRootProps,oe=ne.getBackdropProps,re=ne.getTransitionProps,ie=ne.portalRef,ae=ne.isTopModal,se=ne.exited,le=ne.hasTransition,pe=(0,r.Z)({},ee,{exited:se}),ve=function(e){var n=e.open,t=e.exited,o=e.classes,r={root:["root",!n&&t&&"hidden"],backdrop:["backdrop"]};return(0,P.Z)(r,ue,o)}(pe),me={};if(void 0===g.props.tabIndex&&(me.tabIndex="-1"),le){var he=re(),Ee=he.onEnter,xe=he.onExited;me.onEnter=Ee,me.onExited=xe}var be=null!=(t=null!=(s=null==Q?void 0:Q.root)?s:R.Root)?t:de,ge=null!=(l=null!=(u=null==Q?void 0:Q.backdrop)?u:R.Backdrop)?l:m,ye=null!=(c=null==J?void 0:J.root)?c:T.root,ke=null!=(f=null==J?void 0:J.backdrop)?f:T.backdrop,Ze=d({elementType:be,externalSlotProps:ye,externalForwardedProps:$,getSlotProps:te,additionalProps:{ref:n,as:k},ownerState:pe,className:(0,a.Z)(E,null==ye?void 0:ye.className,null==ve?void 0:ve.root,!pe.open&&pe.exited&&(null==ve?void 0:ve.hidden))}),Re=d({elementType:ge,externalSlotProps:ke,additionalProps:h,getSlotProps:function(e){return oe((0,r.Z)({},e,{onClick:function(n){G&&G(n),null!=e&&e.onClick&&e.onClick(n)}}))},className:(0,a.Z)(null==ke?void 0:ke.className,null==h?void 0:h.className,null==ve?void 0:ve.backdrop),ownerState:pe});return z||X||le&&!se?(0,C.jsx)(L,{ref:ie,container:y,disablePortal:K,children:(0,C.jsxs)(be,(0,r.Z)({},Ze,{children:[!_&&m?(0,C.jsx)(ge,(0,r.Z)({},Re)):null,(0,C.jsx)(I,{disableEnforceFocus:A,disableAutoFocus:O,disableRestoreFocus:W,isEnabled:ae,open:X,children:i.cloneElement(g,me)})]}))}):null})),ve=pe}}]);
//# sourceMappingURL=769.8e69f0bd.chunk.js.map