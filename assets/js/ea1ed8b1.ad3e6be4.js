(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{119:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},121:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var r=n(16),a=n(125);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const c=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+c:c}(t,e,n,r)}}function c(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},125:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},64:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n(0),i=n.n(a),c=n(119),s=n(121),u=n(72),l=n.n(u),o=[{title:"\u591a\u683c\u5f0f",imageUrl:"img/undraw_video_upload_3d4u.svg",description:i.a.createElement(i.a.Fragment,null,"\u652f\u6301 HLS\u3001FLV\u3001DASH\u3001WebTorrent \u7b49\u5176\u4ed6\u683c\u5f0f\u6d41\u5a92\u4f53\u64ad\u653e\u3002")},{title:"\u53ef\u5b9a\u5236",imageUrl:"img/undraw_design_components_9vy6.svg",description:i.a.createElement(i.a.Fragment,null,"\u53ef\u8f7b\u677e\u914d\u7f6e\u63a7\u5236\u6761\u3001\u4e0a\u4e0b\u6587\u83dc\u5355\u3001\u8bbe\u7f6e\u548c\u5b9a\u5236\u4e3b\u9898\uff0c\u5e76\u53ef\u4ee5\u4f7f\u7528\u63d2\u4ef6\u6269\u5145\u64ad\u653e\u5668\u529f\u80fd\uff0c\u63d0\u4f9b\u4e86 \u5185\u7f6e\u7ec4\u4ef6 \u65b9\u4fbf\u4e8c\u6b21\u5f00\u53d1\u3002")},{title:"\u591a\u529f\u80fd",imageUrl:"img/undraw_functions_egi3.svg",description:i.a.createElement(i.a.Fragment,null,"\u5f39\u5e55\u3001\u5168\u5c4f\u3001\u7f51\u9875\u5168\u5c4f\u3001\u5feb\u6377\u952e\u3001\u753b\u4e2d\u753b\u3001\u9694\u7a7a\u64ad\u653e\u3001\u901f\u5ea6\u63a7\u5236\u3001\u4e0a\u4e0b\u6587\u83dc\u5355\u3001\u89c6\u9891\u7f29\u7565\u56fe\u3001\u56fd\u9645\u5316\u7b49\u7b49\u3002")}];function f(e){var t=e.imageUrl,n=e.title,r=e.description,a=Object(s.a)(t);return i.a.createElement("div",{className:Object(c.a)("col col--4",l.a.feature)},i.a.createElement("div",{className:l.a.featureImgContainer},i.a.createElement("img",{className:l.a.featureImage,src:a,alt:n})),i.a.createElement("h3",{className:"my-2"},n),i.a.createElement("p",null,r))}t.default=function(){return i.a.createElement("div",{className:l.a.Container},i.a.createElement("div",{className:l.a.Content},i.a.createElement("section",{className:l.a.features},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},o.map((function(e,t){return i.a.createElement(f,Object(r.a)({key:t},e))})))))))}}}]);