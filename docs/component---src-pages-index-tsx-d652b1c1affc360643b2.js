(self.webpackChunkmy_extension_docs=self.webpackChunkmy_extension_docs||[]).push([[245],{115:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var l,s,c,m;if(Array.isArray(e)){if((l=e.length)!=i.length)return!1;for(s=l;0!=s--;)if(!o(e[s],i[s]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(m=e.entries();!(s=m.next()).done;)if(!i.has(s.value[0]))return!1;for(m=e.entries();!(s=m.next()).done;)if(!o(s.value[1],i.get(s.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(m=e.entries();!(s=m.next()).done;)if(!i.has(s.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((l=e.length)!=i.length)return!1;for(s=l;0!=s--;)if(e[s]!==i[s])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof i.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof i.toString)return e.toString()===i.toString();if((l=(c=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(s=l;0!=s--;)if(!Object.prototype.hasOwnProperty.call(i,c[s]))return!1;if(t&&e instanceof Element)return!1;for(s=l;0!=s--;)if(("_owner"!==c[s]&&"__v"!==c[s]&&"__o"!==c[s]||!e.$$typeof)&&!o(e[c[s]],i[c[s]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return o(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},2098:function(e,t,r){"use strict";var n,a=r(6540),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,c=[];function m(){s=e(c.map((function(e){return e.props}))),u.canUseDOM?t(s):r&&(s=r(s))}var u=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return s},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,c=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){c.push(this),m()},i.componentDidUpdate=function(){m()},i.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),m()},i.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return i(u,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(u,"canUseDOM",l),u}}},8326:function(e,t,r){"use strict";r.r(t),r.d(t,{Head:function(){return ge},default:function(){return be}});var n,a,o,i,l=r(4506),s=r(6540),c=r(5556),m=r.n(c),u=r(2098),d=r.n(u),f=r(115),p=r.n(f),h=r(8828),b=r.n(h),g="bodyAttributes",y="htmlAttributes",w="titleAttributes",x={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(x).map((function(e){return x[e]})),"charset"),E="cssText",N="href",T="http-equiv",S="innerHTML",C="itemprop",A="name",k="property",O="rel",j="src",L="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",P="defer",B="encodeSpecialCharacters",Y="onChangeClientState",F="titleTemplate",R=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),z=[x.NOSCRIPT,x.SCRIPT,x.STYLE],_="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},q=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},U=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=Q(e,x.TITLE),r=Q(e,F);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Q(e,M);return t||n||void 0},V=function(e){return Q(e,Y)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return W({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[x.BASE]})).map((function(e){return e[x.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},J=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var l=o[i],s=l.toLowerCase();-1===t.indexOf(s)||r===O&&"canonical"===e[r].toLowerCase()||s===O&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(l)||l!==S&&l!==E&&l!==C||(r=l)}if(!r||!e[r])return!1;var c=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][c]&&(a[r][c]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var l=o[i],s=b()({},n[l],a[l]);n[l]=s}return e}),[]).reverse()},Q=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),Z=function(e){return clearTimeout(e)},ee="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:r.g.requestAnimationFrame||X,te="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Z:r.g.cancelAnimationFrame||Z,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ne=null,ae=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,s=e.onChangeClientState,c=e.scriptTags,m=e.styleTags,u=e.title,d=e.titleAttributes;le(x.BODY,n),le(x.HTML,a),ie(u,d);var f={baseTag:se(x.BASE,r),linkTags:se(x.LINK,o),metaTags:se(x.META,i),noscriptTags:se(x.NOSCRIPT,l),scriptTags:se(x.SCRIPT,c),styleTags:se(x.STYLE,m)},p={},h={};Object.keys(f).forEach((function(e){var t=f[e],r=t.newTags,n=t.oldTags;r.length&&(p[e]=r),n.length&&(h[e]=f[e].oldTags)})),t&&t(),s(e,p,h)},oe=function(e){return Array.isArray(e)?e.join(""):e},ie=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),le(x.TITLE,t)},le=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(_),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),l=0;l<i.length;l++){var s=i[l],c=t[s]||"";r.getAttribute(s)!==c&&r.setAttribute(s,c),-1===a.indexOf(s)&&a.push(s);var m=o.indexOf(s);-1!==m&&o.splice(m,1)}for(var u=o.length-1;u>=0;u--)r.removeAttribute(o[u]);a.length===o.length?r.removeAttribute(_):r.getAttribute(_)!==i.join(",")&&r.setAttribute(_,i.join(","))}},se=function(e,t){var r=document.head||document.querySelector(x.HEAD),n=r.querySelectorAll(e+"["+_+"]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===S)r.innerHTML=t.innerHTML;else if(n===E)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[n]?"":t[n];r.setAttribute(n,l)}r.setAttribute(_,"true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},ce=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},me=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[I[r]||r]=e[r],t}),t)},ue=function(e,t,r){switch(e){case x.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[_]=!0,a=me(r,n),[s.createElement(x.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=ce(r),o=oe(t);return a?"<"+e+" "+_+'="true" '+a+">"+U(o,n)+"</"+e+">":"<"+e+" "+_+'="true">'+U(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case g:case y:return{toComponent:function(){return me(t)},toString:function(){return ce(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})[_]=!0,n);return Object.keys(t).forEach((function(e){var r=I[e]||e;if(r===S||r===E){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),s.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===S||e===E)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+U(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===z.indexOf(e);return t+"<"+e+" "+_+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,l=e.noscriptTags,s=e.scriptTags,c=e.styleTags,m=e.title,u=void 0===m?"":m,d=e.titleAttributes;return{base:ue(x.BASE,t,n),bodyAttributes:ue(g,r,n),htmlAttributes:ue(y,a,n),link:ue(x.LINK,o,n),meta:ue(x.META,i,n),noscript:ue(x.NOSCRIPT,l,n),script:ue(x.SCRIPT,s,n),style:ue(x.STYLE,c,n),title:ue(x.TITLE,{title:u,titleAttributes:d},n)}},fe=d()((function(e){return{baseTag:$([N,L],e),bodyAttributes:G(g,e),defer:Q(e,P),encode:Q(e,B),htmlAttributes:G(y,e),linkTags:J(x.LINK,[O,N],e),metaTags:J(x.META,[A,v,T,k,C],e),noscriptTags:J(x.NOSCRIPT,[S],e),onChangeClientState:V(e),scriptTags:J(x.SCRIPT,[j,S],e),styleTags:J(x.STYLE,[E],e),title:K(e),titleAttributes:G(w,e)}}),(function(e){ne&&te(ne),e.defer?ne=ee((function(){ae(e,(function(){ne=null}))})):(ae(e),ne=null)}),de)((function(){return null})),pe=(a=fe,i=o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case x.SCRIPT:case x.NOSCRIPT:return{innerHTML:t};case x.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return W({},n,((t={})[r.type]=[].concat(n[r.type]||[],[W({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(n.type){case x.TITLE:return W({},a,((t={})[n.type]=i,t.titleAttributes=W({},o),t));case x.BODY:return W({},a,{bodyAttributes:W({},o)});case x.HTML:return W({},a,{htmlAttributes:W({},o)})}return W({},a,((r={})[n.type]=W({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=W({},t);return Object.keys(e).forEach((function(t){var n;r=W({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return s.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[R[r]||r]=e[r],t}),t)}(q(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case x.LINK:case x.META:case x.NOSCRIPT:case x.SCRIPT:case x.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=q(e,["children"]),n=W({},r);return t&&(n=this.mapChildrenToProps(t,n)),s.createElement(a,n)},D(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(s.Component),o.propTypes={base:m().object,bodyAttributes:m().object,children:m().oneOfType([m().arrayOf(m().node),m().node]),defaultTitle:m().string,defer:m().bool,encodeSpecialCharacters:m().bool,htmlAttributes:m().object,link:m().arrayOf(m().object),meta:m().arrayOf(m().object),noscript:m().arrayOf(m().object),onChangeClientState:m().func,script:m().arrayOf(m().object),style:m().arrayOf(m().object),title:m().string,titleAttributes:m().object,titleTemplate:m().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);pe.renderStatic=pe.rewind;var he=e=>{let{children:t}=e;return s.createElement(s.Fragment,null,s.createElement("div",{className:"min-h-screen bg-gray-50"},s.createElement("div",{className:"global-wrapper"},t)))};var be=()=>s.createElement(he,null,s.createElement("main",{className:"font-sans bg-gray-50 text-gray-900"},s.createElement(pe,null,s.createElement("meta",{charSet:"utf-8"}),s.createElement("title",null,"SubSorter - YouTube Subscription Feed Organizer"),s.createElement("meta",{name:"description",content:"Enhance your YouTube subscription feed by hiding shorts, filtering streams, and bundling multiple videos from the same creator."}),s.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",rel:"stylesheet"})),s.createElement("section",{className:"bg-gradient-to-r from-red-700 to-red-500 text-white py-16 md:py-24"},s.createElement("div",{className:"container mx-auto px-4 max-w-6xl"},s.createElement("div",{className:"flex flex-col md:flex-row items-center justify-between"},s.createElement("div",{className:"md:w-1/2 mb-8 md:mb-0"},s.createElement("h1",{className:"text-4xl md:text-5xl font-bold mb-4"},"SubSorter"),s.createElement("p",{className:"text-xl md:text-2xl mb-6"},"Take control of your YouTube subscription feed"),s.createElement("p",{className:"text-lg mb-8"},"Filter out unwanted content and group videos from the same creator for a cleaner, more organized viewing experience."),s.createElement("div",{className:"flex gap-4"},s.createElement("a",{href:"#download",className:"bg-white text-red-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"},"Install Now"),s.createElement("a",{href:"#features",className:"border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-red-600 transition"},"Learn More"))),s.createElement("div",{className:"md:w-1/2"},s.createElement("div",{className:"relative rounded-lg shadow-xl overflow-hidden"},s.createElement("img",{src:"/images/hero-screenshot.png",alt:"SubSorter interface showing a clean YouTube subscription feed",className:"w-full"})))))),s.createElement("section",{id:"features",className:"py-16 md:py-24"},s.createElement("div",{className:"container mx-auto px-4 max-w-6xl"},s.createElement("h2",{className:"text-3xl md:text-4xl font-bold text-center mb-12"},"Key Features"),s.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"},s.createElement("div",{className:"bg-white p-6 rounded-lg shadow-md"},s.createElement("div",{className:"w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4"},s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M18 12H6"}))),s.createElement("h3",{className:"text-xl font-semibold mb-2"},"Hide Unwanted Content"),s.createElement("p",{className:"text-gray-600"},"Filter out shorts, live videos, streamed videos, and premieres with one click to focus on the content you actually want to watch.")),s.createElement("div",{className:"bg-white p-6 rounded-lg shadow-md"},s.createElement("div",{className:"w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4"},s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h7"}))),s.createElement("h3",{className:"text-xl font-semibold mb-2"},"Bundle Creator Videos"),s.createElement("p",{className:"text-gray-600"},"Group multiple uploads from the same creator to reduce clutter and organize your feed by channel.")),s.createElement("div",{className:"bg-white p-6 rounded-lg shadow-md"},s.createElement("div",{className:"w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4"},s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"}))),s.createElement("h3",{className:"text-xl font-semibold mb-2"},"Flexible Configuration"),s.createElement("p",{className:"text-gray-600"},"Easily customize settings to match your viewing preferences with intuitive controls.")),s.createElement("div",{className:"bg-white p-6 rounded-lg shadow-md"},s.createElement("div",{className:"w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4"},s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"}))),s.createElement("h3",{className:"text-xl font-semibold mb-2"},"Time-Based Bundling"),s.createElement("p",{className:"text-gray-600"},"Choose between 24-hour, 7-day, or 30-day timeframes for bundling creator content.")),s.createElement("div",{className:"bg-white p-6 rounded-lg shadow-md"},s.createElement("div",{className:"w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4"},s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"}))),s.createElement("h3",{className:"text-xl font-semibold mb-2"},"Privacy Focused"),s.createElement("p",{className:"text-gray-600"},"Runs entirely in your browser with no data collection or tracking. Your viewing habits stay private.")),s.createElement("div",{className:"bg-white p-6 rounded-lg shadow-md"},s.createElement("div",{className:"w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4"},s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"}))),s.createElement("h3",{className:"text-xl font-semibold mb-2"},"Seamless Integration"),s.createElement("p",{className:"text-gray-600"},"Works right within YouTube's interface for a native experience, with no need to switch between apps."))))),s.createElement("section",{className:"bg-gray-100 py-16 md:py-24"},s.createElement("div",{className:"container mx-auto px-4 max-w-6xl"},s.createElement("h2",{className:"text-3xl md:text-4xl font-bold text-center mb-12"},"How It Works"),s.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8"},s.createElement("div",{className:"text-center"},s.createElement("div",{className:"w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"},"1"),s.createElement("h3",{className:"text-xl font-semibold mb-2"},"Install the Extension"),s.createElement("p",{className:"text-gray-600"},"Add SubSorter to Chrome with just a few clicks from the Chrome Web Store.")),s.createElement("div",{className:"text-center"},s.createElement("div",{className:"w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"},"2"),s.createElement("h3",{className:"text-xl font-semibold mb-2"},"Configure Settings"),s.createElement("p",{className:"text-gray-600"},"Customize your filtering preferences using the settings button on your subscription feed.")),s.createElement("div",{className:"text-center"},s.createElement("div",{className:"w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold"},"3"),s.createElement("h3",{className:"text-xl font-semibold mb-2"},"Enjoy a Cleaner Feed"),s.createElement("p",{className:"text-gray-600"},"Browse your subscriptions with less clutter and better organization."))))),s.createElement("section",{className:"py-16 md:py-24"},s.createElement("div",{className:"container mx-auto px-4 max-w-6xl"},s.createElement("h2",{className:"text-3xl md:text-4xl font-bold text-center mb-12"},"See SubSorter in Action"),s.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8"},s.createElement("div",{className:"bg-white p-4 rounded-lg shadow-md"},s.createElement("img",{src:"/images/screenshot-1.png",alt:"SubSorter showing bundled videos from the same creator",className:"w-full rounded-lg"}),s.createElement("p",{className:"text-center mt-4 text-gray-600"},"Bundle videos from the same creator")),s.createElement("div",{className:"bg-white p-4 rounded-lg shadow-md"},s.createElement("img",{src:"/images/screenshot-2.png",alt:"SubSorter settings panel showing filter options",className:"w-full rounded-lg"}),s.createElement("p",{className:"text-center mt-4 text-gray-600"},"Easy-to-use settings panel"))))),s.createElement("section",{className:"bg-gray-100 py-16 md:py-24"},s.createElement("div",{className:"container mx-auto px-4 max-w-6xl"},s.createElement("h2",{className:"text-3xl md:text-4xl font-bold text-center mb-12"},"What Users Are Saying"),s.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8"},s.createElement("div",{className:"bg-white p-6 rounded-lg shadow-md"},s.createElement("div",{className:"flex items-center mb-4"},s.createElement("div",{className:"text-yellow-400 flex"},(0,l.A)(Array(5)).map(((e,t)=>s.createElement("svg",{key:t,xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},s.createElement("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})))))),s.createElement("p",{className:"text-gray-600 mb-4"},'"Finally, I can browse my subscriptions without being overwhelmed by shorts and multiple uploads. This extension is a game changer!"'),s.createElement("div",{className:"font-semibold"},"- Alex T.")),s.createElement("div",{className:"bg-white p-6 rounded-lg shadow-md"},s.createElement("div",{className:"flex items-center mb-4"},s.createElement("div",{className:"text-yellow-400 flex"},(0,l.A)(Array(5)).map(((e,t)=>s.createElement("svg",{key:t,xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},s.createElement("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})))))),s.createElement("p",{className:"text-gray-600 mb-4"},'"The bundling feature is brilliant. Now I can keep up with channels that post multiple videos per day without them dominating my feed."'),s.createElement("div",{className:"font-semibold"},"- Jamie K.")),s.createElement("div",{className:"bg-white p-6 rounded-lg shadow-md"},s.createElement("div",{className:"flex items-center mb-4"},s.createElement("div",{className:"text-yellow-400 flex"},(0,l.A)(Array(5)).map(((e,t)=>s.createElement("svg",{key:t,xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},s.createElement("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})))))),s.createElement("p",{className:"text-gray-600 mb-4"},'"Simple, effective, and exactly what YouTube should have built in. The settings are intuitive and it just works."'),s.createElement("div",{className:"font-semibold"},"- Taylor M."))))),s.createElement("section",{id:"download",className:"py-16 md:py-24 bg-gradient-to-r from-red-700 to-red-500 text-white"},s.createElement("div",{className:"container mx-auto px-4 max-w-6xl text-center"},s.createElement("h2",{className:"text-3xl md:text-4xl font-bold mb-6"},"Get SubSorter Today"),s.createElement("p",{className:"text-xl mb-8 max-w-2xl mx-auto"},"Transform your YouTube subscription experience with just one click. Free and privacy-focused."),s.createElement("a",{href:"https://chrome.google.com/webstore/category/extensions",target:"_blank",rel:"noopener noreferrer",className:"bg-white text-red-600 font-semibold px-8 py-4 rounded-lg inline-block hover:bg-gray-100 transition text-lg"},"Add to Chrome"),s.createElement("p",{className:"mt-4 text-sm opacity-80"},"Available for Chrome, Brave, Edge, and other Chromium-based browsers"))),s.createElement("section",{className:"py-16 md:py-24"},s.createElement("div",{className:"container mx-auto px-4 max-w-4xl"},s.createElement("h2",{className:"text-3xl md:text-4xl font-bold text-center mb-12"},"Frequently Asked Questions"),s.createElement("div",{className:"space-y-6"},s.createElement("div",{className:"bg-white p-6 rounded-lg shadow-md"},s.createElement("h3",{className:"text-xl font-semibold mb-2"},"Is SubSorter free to use?"),s.createElement("p",{className:"text-gray-600"},"Yes, SubSorter is completely free. There are no premium features or subscriptions.")),s.createElement("div",{className:"bg-white p-6 rounded-lg shadow-md"},s.createElement("h3",{className:"text-xl font-semibold mb-2"},"Does SubSorter collect any data?"),s.createElement("p",{className:"text-gray-600"},"No, SubSorter runs entirely in your browser and doesn't collect or transmit any data about your viewing habits or preferences.")),s.createElement("div",{className:"bg-white p-6 rounded-lg shadow-md"},s.createElement("h3",{className:"text-xl font-semibold mb-2"},"Which browsers are supported?"),s.createElement("p",{className:"text-gray-600"},"SubSorter works with Chrome, Brave, Edge, Opera, and other Chromium-based browsers that support Chrome extensions.")),s.createElement("div",{className:"bg-white p-6 rounded-lg shadow-md"},s.createElement("h3",{className:"text-xl font-semibold mb-2"},"Will this slow down YouTube?"),s.createElement("p",{className:"text-gray-600"},"SubSorter is designed to be lightweight and efficient. It uses debouncing and performance optimizations to minimize any impact on your browsing experience.")),s.createElement("div",{className:"bg-white p-6 rounded-lg shadow-md"},s.createElement("h3",{className:"text-xl font-semibold mb-2"},"Can I customize which content is filtered?"),s.createElement("p",{className:"text-gray-600"},"Yes, you can independently toggle filters for shorts, streams, live videos, and premieres based on your preferences."))))),s.createElement("footer",{className:"bg-gray-900 text-white py-8"},s.createElement("div",{className:"container mx-auto px-4 max-w-6xl"},s.createElement("div",{className:"flex flex-col md:flex-row justify-between items-center"},s.createElement("div",{className:"mb-4 md:mb-0"},s.createElement("h2",{className:"text-2xl font-bold"},"SubSorter"),s.createElement("p",{className:"text-gray-400"},"YouTube Subscription Feed Organizer")),s.createElement("div",{className:"flex space-x-4"},s.createElement("a",{href:"https://github.com/yourusername/subsorter",target:"_blank",rel:"noopener noreferrer",className:"hover:text-red-400 transition","aria-label":"GitHub Repository",title:"Visit our GitHub Repository"},s.createElement("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"},s.createElement("path",{fillRule:"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",clipRule:"evenodd"}))),s.createElement("a",{href:"https://twitter.com/yourusername",target:"_blank",rel:"noopener noreferrer",className:"hover:text-red-400 transition","aria-label":"Twitter Profile",title:"Follow us on Twitter"},s.createElement("svg",{className:"h-6 w-6",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"},s.createElement("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"}))))),s.createElement("div",{className:"mt-8 pt-8 border-t border-gray-800 text-center md:text-left text-sm text-gray-400"},s.createElement("p",null,"© ",(new Date).getFullYear()," SubSorter. All rights reserved."),s.createElement("p",{className:"mt-2"},"SubSorter is not affiliated with YouTube or Google. YouTube is a trademark of Google LLC."))))));const ge=()=>s.createElement(s.Fragment,null,s.createElement("title",null,"SubSorter - YouTube Subscription Feed Organizer"),s.createElement("meta",{name:"description",content:"Enhance your YouTube subscription feed by hiding shorts, filtering streams, and bundling multiple videos from the same creator."}))},8828:function(e){"use strict";e.exports=Object.assign}}]);
//# sourceMappingURL=component---src-pages-index-tsx-d652b1c1affc360643b2.js.map