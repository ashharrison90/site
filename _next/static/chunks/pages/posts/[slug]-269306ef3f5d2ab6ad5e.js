(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{4033:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var r=n(5893),a=n(6265),o=n(7294),s=n(4184),c=n.n(s),i=JSON.parse('{"github":"https://www.github.com/ashharrison90","linkedin":"https://www.linkedin.com/in/ashharrison90","instagram":"https://www.instagram.com/ashharrison90","facebook":"https://www.facebook.com/ashleyharrison90","twitter":"https://twitter.com/ashharrison90","email":"mailto:ashharrison90@gmail.com"}'),l=n(2852),u=n(9216),d=n.n(u);function h(){return(0,r.jsx)("footer",{className:d().footer,children:(0,r.jsx)("div",{className:d().socialLinks,children:Object.keys(i).map((function(e){return(0,r.jsx)(l.Z,{className:d().socialLink,ariaLabel:"Contact me on ".concat(e),link:i[e],type:e},e)}))})})}var f=n(5152),g=n(1163),p=n(1664),v=n(893),_=n.n(v);function m(e){var t=e.className,n=e.href,o=e.isActive,s=void 0!==o&&o,i=e.label;return(0,r.jsx)(p.default,{href:n,children:(0,r.jsx)("a",{className:c()(_().pageLink,t,(0,a.Z)({},_().activePage,s)),children:i})})}var x=n(2759),w=n.n(x),j=(0,f.default)((function(){return n.e(970).then(n.bind(n,2970))}),{ssr:!1,loadableGenerated:{webpack:function(){return[2970]},modules:["../components/Header/Header.tsx -> ../ThemeToggle/ThemeToggle"]}}),b=[{label:"Home",href:"/"},{label:"About",href:"/about"},{label:"Posts",href:"/posts"}];function k(e){var t=e.className,n=(0,g.useRouter)();return(0,r.jsxs)("header",{className:c()(w().header,t),children:[(0,r.jsx)(j,{}),(0,r.jsx)("nav",{children:b.map((function(e){var t=e.label,a=e.href;return(0,r.jsx)(m,{className:w().pageLinks,href:a,isActive:n.pathname===a,label:t},a)}))})]})}var L=n(6437),y=n.n(L);function C(e){var t=e.backgroundContent,n=e.backgroundHeight,s=void 0===n?0:n,i=e.blurBackground,l=e.children,u=e.foregroundContent,d=e.hideHeaderUntilScroll,f=void 0!==d&&d,g=(0,o.useState)(!f),p=g[0],v=g[1],_=(0,o.useState)(0),m=_[0],x=_[1],w=(0,o.useRef)(null),j=(0,o.useRef)(null);return(0,o.useEffect)((function(){if(w.current&&(u||f)){w.current.addEventListener("scroll",(function(){if(f&&v(w.current.scrollTop>0),u){var e,t,n=null===(e=j.current)||void 0===e?void 0:e.getBoundingClientRect().height,r=null===(t=j.current)||void 0===t?void 0:t.getBoundingClientRect().top,a=Math.round(Math.abs(r)/n*10)/10;x(Math.min(a,1))}}))}}),[]),(0,r.jsxs)("div",{className:y().container,children:[(0,r.jsx)(k,{className:c()((0,a.Z)({},y().hideHeader,!p))}),(0,r.jsxs)("div",{className:y().parallaxContainer,ref:w,role:"main",children:[t,(0,r.jsxs)("div",{"data-testid":"backgroundOverlay",className:c()(y().foreground,(0,a.Z)({},y().blur,i)),style:{backgroundColor:"rgba(var(--hero-background-rgb), ".concat(m,")")},children:[(0,r.jsx)("div",{ref:j,style:{height:"".concat(s,"%"),minHeight:"".concat(s,"%")},className:y().foregroundContentRef,children:u}),(0,r.jsx)("div",{className:y().contentContainer,children:(0,r.jsx)("div",{className:c()(y().content,(0,a.Z)({},y().padContent,!u&&!f)),children:l})}),(0,r.jsx)(h,{})]})]})]})}},2852:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(6265),a=n(5893),o=(n(7294),n(4184)),s=n.n(o),c=n(9419),i=n.n(c);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=function(e){return(0,a.jsx)("svg",u(u({},e),{},{children:(0,a.jsx)("path",{d:"M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"})}))};d.defaultProps={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"};var h=function(e){return(0,a.jsx)("svg",u(u({},e),{},{children:(0,a.jsx)("path",{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"})}))};h.defaultProps={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"};var f=function(e){return(0,a.jsx)("svg",u(u({},e),{},{children:(0,a.jsx)("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})}))};f.defaultProps={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512"};var g=function(e){return(0,a.jsx)("svg",u(u({},e),{},{children:(0,a.jsx)("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})}))};g.defaultProps={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"};var p=function(e){return(0,a.jsx)("svg",u(u({},e),{},{children:(0,a.jsx)("path",{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"})}))};p.defaultProps={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"};var v=function(e){return(0,a.jsx)("svg",u(u({},e),{},{children:(0,a.jsx)("path",{d:"M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z"})}))};v.defaultProps={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"};var _=function(e){return(0,a.jsx)("svg",u(u({},e),{},{children:(0,a.jsx)("path",{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"})}))};_.defaultProps={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"};var m={email:(0,a.jsx)(d,{}),facebook:(0,a.jsx)(h,{}),github:(0,a.jsx)(f,{}),instagram:(0,a.jsx)(g,{}),linkedin:(0,a.jsx)(p,{}),reddit:(0,a.jsx)(v,{}),twitter:(0,a.jsx)(_,{})};function x(e){var t=e.className,n=e.ariaLabel,r=e.link,o=e.type;return(0,a.jsx)("a",{"aria-label":n,className:s()(i().link,t),href:r,target:"_blank",rel:"noreferrer",children:m[o]})}},16:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return N},default:function(){return S}});var r=n(5893),a=n(9008),o=n(7294),s=n(4033),c=n(9246),i=n.n(c),l=n(2230),u=n(9410),d=n(7749),h=n(7906),f=n(7360),g=(n(2270),n(2852)),p=n(6265),v=n(809),_=n.n(v),m=n(2447),x=n(4842),w=n.n(x);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,p.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=function(e){return(0,r.jsx)("svg",b(b({},e),{},{children:(0,r.jsx)("path",{d:"M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z"})}))};function L(e){var t=e.title,n=e.url,a=function(){var e=(0,m.Z)(_().mark((function e(){return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.share({title:t,url:n});case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return(0,r.jsx)("button",{"aria-label":"Share",className:w().button,onClick:a,children:(0,r.jsx)(k,{})})}k.defaultProps={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"};var y=n(8230),C=n.n(y),O={linkedin:{label:"LinkedIn",getShareLink:function(e){return"https://www.linkedin.com/sharing/share-offsite/?url=".concat(e)}},reddit:{label:"Reddit",getShareLink:function(e,t){return"https://reddit.com/submit?url=".concat(e,"&title=").concat(t)}},twitter:{label:"Twitter",getShareLink:function(e,t){return"https://twitter.com/intent/tweet?url=".concat(e,"&text=").concat(t)}}};function P(e){var t=e.date,n=e.title,a=(0,o.useState)(""),s=a[0],c=a[1],i=(0,o.useState)(!1),l=i[0],u=i[1];return(0,o.useEffect)((function(){c(window.location.href),u(!!navigator.share)}),[]),(0,r.jsxs)("div",{className:C().titleContainer,children:[(0,r.jsx)("h1",{className:C().title,children:n}),(0,r.jsxs)("div",{className:C().infoContainer,children:[(0,r.jsx)("div",{className:C().date,children:new Date(t).toLocaleDateString()}),(0,r.jsxs)("div",{className:C().shareLinks,children:[l&&(0,r.jsx)(L,{title:n,url:s}),Object.keys(O).map((function(e){return(0,r.jsx)(g.Z,{type:e,ariaLabel:"Share to ".concat(O[e].label),link:O[e].getShareLink(encodeURIComponent(s),encodeURIComponent(n))},e)}))]})]})]})}l.Z.registerLanguage("javascript",u.Z),l.Z.registerLanguage("typescript",d.Z),l.Z.registerLanguage("python",h.Z),l.Z.registerLanguage("scss",f.Z);var N=!0;function S(e){var t=e.post;(0,o.useEffect)((function(){l.Z.highlightAll()}),[]);var n=(0,r.jsx)("img",{alt:"",className:i().coverImage,src:t.coverImage}),c=(0,r.jsx)("div",{className:i().padder});return(0,r.jsxs)(s.Z,{foregroundContent:c,backgroundContent:n,backgroundHeight:50,children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:t.title}),(0,r.jsx)("meta",{name:"description",content:t.excerpt})]}),(0,r.jsx)(P,{date:t.date,title:t.title}),(0,r.jsx)("div",{className:i().content,dangerouslySetInnerHTML:{__html:t.content}})]})}},9035:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return n(16)}])},9216:function(e){e.exports={footer:"Footer_footer__3f33N",socialLinks:"Footer_socialLinks__3jSsE",socialLink:"Footer_socialLink__1P7SG"}},2759:function(e){e.exports={header:"Header_header__OkoDL",pageLinks:"Header_pageLinks__3F3jI"}},6437:function(e){e.exports={container:"Layout_container__3yEil",parallaxContainer:"Layout_parallaxContainer__1Kc_u",foreground:"Layout_foreground__3M4Cd",blur:"Layout_blur__2qNF1",foregroundContentRef:"Layout_foregroundContentRef__3jGYa",contentContainer:"Layout_contentContainer__1_hXr",content:"Layout_content__hISvs",padContent:"Layout_padContent__3LNn2",hideHeader:"Layout_hideHeader__2mshq"}},893:function(e){e.exports={pageLink:"PageLink_pageLink__1CQoi",activePage:"PageLink_activePage__thO-8"}},8230:function(e){e.exports={titleContainer:"PostTitle_titleContainer__3RkHL",title:"PostTitle_title__35l_9",infoContainer:"PostTitle_infoContainer__3rqkx",shareLinks:"PostTitle_shareLinks__1CQQq",date:"PostTitle_date__2-DaU"}},4842:function(e){e.exports={button:"ShareButton_button__3YPcb"}},9419:function(e){e.exports={link:"SocialLink_link__1sGkw"}},9246:function(e){e.exports={content:"_slug__content__3iKGM",coverImage:"_slug__coverImage__1Q_Eu",padder:"_slug__padder__wvA8I"}}},function(e){e.O(0,[774,29,923,888,179],(function(){return t=9035,e(e.s=t);var t}));var t=e.O();_N_E=t}]);