(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[679],{1945:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return n(1035)}])},1107:function(e,t,n){"use strict";n.d(t,{L:function(){return r},Z:function(){return h}});var r,a=n(4924),o=n(5893),s=n(1664),i=n.n(s),c=n(4184),l=n.n(c),u=n(5474),d=n.n(u);function h(e){var t,n,s=e.ariaLabel,c=e.children,u=e.className,h=e.href,_=e.isActive,m=e.kind,f=void 0===m?r.Primary:m,g=e.onClick,p=e.target;return h?(0,o.jsx)(i(),{href:h,children:(0,o.jsx)("a",{"aria-label":s,rel:p?"noreferrer":void 0,role:"link",target:p,className:l()(d().button,u,(t={},(0,a.Z)(t,d().isActive,_),(0,a.Z)(t,d().buttonPrimary,f===r.Primary),(0,a.Z)(t,d().buttonSecondary,f===r.Secondary),(0,a.Z)(t,d().buttonIcon,f===r.Icon),t)),children:c})}):(0,o.jsx)("button",{"aria-label":s,disabled:_,onClick:g,className:l()(d().button,u,(n={},(0,a.Z)(n,d().isActive,_),(0,a.Z)(n,d().buttonPrimary,f===r.Primary),(0,a.Z)(n,d().buttonSecondary,f===r.Secondary),(0,a.Z)(n,d().buttonIcon,f===r.Icon),n)),children:c})}!function(e){e.Primary="primary",e.Secondary="secondary",e.Icon="icon"}(r||(r={}))},3661:function(e,t,n){"use strict";n.d(t,{Z:function(){return I}});var r=n(4924),a=n(5893),o=n(7294),s=n(9008),i=n.n(s),c=n(4184),l=n.n(c),u=JSON.parse('{"github":"https://www.github.com/ashharrison90","linkedin":"https://www.linkedin.com/in/ashharrison90","instagram":"https://www.instagram.com/ashharrison90","facebook":"https://www.facebook.com/ashleyharrison90","twitter":"https://twitter.com/ashharrison90"}'),d=n(1107),h=n(650),_=n(8797),m=n(7813),f=n(2476),g=n(7390),p=n(2836),v=n.n(p),x={facebook:(0,a.jsx)(h.Z,{}),github:(0,a.jsx)(_.Z,{}),instagram:(0,a.jsx)(m.Z,{}),linkedin:(0,a.jsx)(f.Z,{}),twitter:(0,a.jsx)(g.Z,{})};function b(){return(0,a.jsx)("footer",{className:v().footer,children:(0,a.jsx)("div",{className:v().socialLinks,children:Object.keys(u).map((function(e){return(0,a.jsx)(d.Z,{className:v().socialLink,ariaLabel:"Contact me on ".concat(e),href:u[e],kind:d.L.Icon,target:"_blank",children:x[e]},e)}))})})}var C=n(5152),j=n.n(C),k=n(1163),w=n(5897),y=n.n(w),N=j()((function(){return n.e(489).then(n.bind(n,9489))}),{loadableGenerated:{webpack:function(){return[9489]}},ssr:!1}),L=[{label:"Home",href:"/"},{label:"About",href:"/about"},{label:"Posts",href:"/posts"}],P=(0,o.forwardRef)((function(e,t){var n=e.show,o=(0,k.useRouter)();return(0,a.jsxs)("header",{ref:t,className:l()(y().header,(0,r.Z)({},y().hide,!n)),children:[(0,a.jsx)(N,{}),(0,a.jsxs)("nav",{className:y().nav,children:[L.map((function(e){var t=e.label,n=e.href;return(0,a.jsx)(d.Z,{className:y().pageLinks,href:n,isActive:o.pathname===n,kind:d.L.Secondary,children:t},n)})),o.asPath.startsWith("/posts/")&&(0,a.jsx)("div",{className:l()(y().postPageLinkContainer,(0,r.Z)({},y().hide,!n)),children:(0,a.jsx)(d.Z,{className:y().postPageLink,href:o.asPath,isActive:!0,kind:d.L.Secondary,children:o.asPath.replace("/posts","")},o.asPath)})]})]})})),S=n(8115),Z=n.n(S),T=0;function I(e){var t=e.backgroundContent,n=e.backgroundHeight,s=void 0===n?0:n,c=e.blurBackground,u=e.children,d=e.foregroundContent,h=e.hideHeaderUntilScroll,_=void 0!==h&&h,m=e.metaDescription,f=e.metaTitle,g=(0,o.useState)(!_),p=g[0],v=g[1],x=(0,o.useState)(0),C=x[0],j=x[1],k=(0,o.useRef)(null),w=(0,o.useRef)(null),y=(0,o.useRef)(null),N=function(){if(_?v(k.current.scrollTop>0):(v(k.current.scrollTop<T),T=k.current.scrollTop),d){var e=w.current.getBoundingClientRect().height,t=w.current.getBoundingClientRect().top,n=Math.round(Math.abs(t)/e*10)/10;j(Math.min(n,1))}};return(0,o.useEffect)((function(){y.current.addEventListener("focusin",(function(){return v(!0)})),k.current.addEventListener("scroll",N)}),[]),(0,a.jsxs)("div",{className:Z().container,children:[(0,a.jsxs)(i(),{children:[(0,a.jsx)("title",{children:f}),(0,a.jsx)("meta",{name:"description",content:m})]}),(0,a.jsx)(P,{show:p,ref:y}),(0,a.jsxs)("div",{className:Z().parallaxContainer,ref:k,role:"main",children:[t,(0,a.jsxs)("div",{"data-testid":"backgroundOverlay",className:l()(Z().foreground,(0,r.Z)({},Z().blur,c)),style:{backgroundColor:"rgba(var(--hero-background-rgb), ".concat(C,")")},children:[(0,a.jsx)("div",{ref:w,style:{height:"".concat(s,"%"),minHeight:"".concat(s,"%")},className:Z().foregroundContentRef,children:d}),(0,a.jsx)("div",{className:Z().contentContainer,children:(0,a.jsx)("div",{className:l()(Z().content,(0,r.Z)({},Z().padContent,!d&&!_)),children:u})}),(0,a.jsx)(b,{})]})]})]})}},423:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(5893),a=n(1664),o=n.n(a),s=n(7763),i=n.n(s),c=n(700),l=n(9657),u=n.n(l);function d(e){var t,n,a=e.coverImage,s=e.excerpt,l=e.searchString,d=e.slug,h=e.tags,_=e.title;return(0,r.jsx)(o(),{as:"/posts/".concat(d),href:"/posts/[slug]",children:(0,r.jsxs)("a",{"aria-label":_,className:u().card,"data-testid":"PostCard",children:[(0,r.jsx)("div",{"data-testid":"PostCard-image",style:{backgroundImage:"url(".concat(a,")")},className:u().backgroundImage}),(0,r.jsxs)("div",{className:u().titleContainer,children:[(0,r.jsx)("div",{className:u().title,children:(0,r.jsx)(i(),{searchWords:null!==(t=null===l||void 0===l?void 0:l.split(" "))&&void 0!==t?t:[],textToHighlight:_})}),(0,r.jsx)("div",{className:u().tags,children:h.map((function(e){return(0,r.jsx)(c.Z,{label:e,searchString:l},e)}))}),(0,r.jsx)("div",{className:u().excerpt,children:(0,r.jsx)(i(),{searchWords:null!==(n=null===l||void 0===l?void 0:l.split(" "))&&void 0!==n?n:[],textToHighlight:s})})]})]})})}},8827:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893),a=n(4184),o=n.n(a),s=n(2972),i=n.n(s);function c(e){var t=e.children,n=e.className;return(0,r.jsx)("div",{className:o()(i().gridContainer,n),children:t})}},700:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(5893),a=n(7294),o=n(7763),s=n.n(o),i=n(2023),c=n.n(i),l=n(3353),u=n(625),d=n.n(u);function h(e){var t,n=e.label,o=e.searchString,i=(0,a.useContext)(l.ThemeContext).theme,u=c()({luminosity:"light",seed:n}),h=c()({luminosity:"dark",seed:n});return(0,r.jsx)("div",{"data-testid":"tag",style:{borderColor:i===l.Theme.DARK?u:h,backgroundColor:i===l.Theme.DARK?"".concat(u,"22"):u,color:i===l.Theme.DARK?u:"var(--text-primary)"},className:d().container,children:(0,r.jsx)(s(),{searchWords:null!==(t=null===o||void 0===o?void 0:o.split(" "))&&void 0!==t?t:[],textToHighlight:n})})}},3353:function(e,t,n){"use strict";n.r(t),n.d(t,{Theme:function(){return r},ThemeContext:function(){return c},ThemeContextProvider:function(){return l}});var r,a=n(6042),o=n(9396),s=n(5893),i=n(7294);!function(e){e.LIGHT="light",e.DARK="dark"}(r||(r={}));var c=i.createContext({theme:r.LIGHT,setTheme:function(e){}}),l=function(e){var t,n=e.children,l=null!==(t=window.localStorage.getItem("theme"))&&void 0!==t?t:window.matchMedia("(prefers-color-scheme: dark)").matches?r.DARK:r.LIGHT;window.localStorage.setItem("theme",l),document.documentElement.setAttribute("data-theme",l);var u={theme:l,setTheme:function(e){window.localStorage.setItem("theme",e),document.documentElement.setAttribute("data-theme",e),_((0,o.Z)((0,a.Z)({},h),{theme:e}))}},d=(0,i.useState)(u),h=d[0],_=d[1];return(0,s.jsx)(c.Provider,{value:h,children:n})};t.default=l},1035:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return C},default:function(){return j}});var r,a=n(5893),o=n(8827),s=n(423),i=n(4184),c=n.n(i),l=n(2066),u=n.n(l),d=n(7294);function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}var _=function(e){return d.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},e),r||(r=d.createElement("path",{d:"M500.3 443.7 380.6 324c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723 99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9 53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0 15.606-15.64 15.606-41.04.006-56.64zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128-57.42 128-128 128-128-57.4-128-128z"})))};function m(e){var t=e.className,n=e.onChange,r=e.placeholder;return(0,a.jsxs)("div",{className:u().container,children:[(0,a.jsx)("input",{type:"search",className:c()(t,u().input),onChange:n,placeholder:r}),(0,a.jsx)(_,{className:u().icon})]})}var f=n(3661),g=n(8597),p=n.n(g);function v(e){var t=e.className,n=e.message;return(0,a.jsxs)("div",{className:c()(p().container,t),children:[(0,a.jsx)("div",{className:p().icon,children:"\ud83e\uddd0"}),(0,a.jsx)("div",{className:p().message,children:n})]})}var x=n(9435),b=n.n(x),C=!0;function j(e){var t=e.allPosts,n=(0,d.useState)(""),r=n[0],i=n[1],c=t.filter((function(e){return e.title.toLowerCase().includes(r.toLowerCase())||e.excerpt.toLowerCase().includes(r.toLowerCase())||e.tags.some((function(e){return e.toLowerCase().includes(r.toLowerCase())}))}));return(0,a.jsxs)(f.Z,{metaDescription:"A dumping ground for my ramblings. New posts whenever I can be bothered.",metaTitle:"Posts",children:[(0,a.jsx)("h1",{children:"posts"}),(0,a.jsx)("p",{children:"A dumping ground for my ramblings. New posts whenever I can be bothered."}),(0,a.jsx)("div",{className:b().searchContainer,children:(0,a.jsx)(m,{className:b().search,onChange:function(e){return i(e.target.value)},placeholder:"Search posts"})}),(0,a.jsx)(o.Z,{className:b().postGrid,children:c.map((function(e){return(0,a.jsx)(s.Z,{coverImage:e.coverImage,excerpt:e.excerpt,searchString:r,slug:e.slug,tags:e.tags,title:e.title},e.slug)}))}),!c.length&&(0,a.jsx)(v,{className:b().emptySearch,message:"Nothing found"})]})}},5474:function(e){e.exports={button:"Button_button__30ukX",isActive:"Button_isActive__CNUDQ",buttonPrimary:"Button_buttonPrimary__2_MJa",buttonSecondary:"Button_buttonSecondary__8WhSb",buttonIcon:"Button_buttonIcon__eVRg0"}},8597:function(e){e.exports={container:"EmptyState_container__EZ0Kc",icon:"EmptyState_icon__WQ2Ln",message:"EmptyState_message__KfrL9"}},2836:function(e){e.exports={footer:"Footer_footer__Dhw_9",socialLink:"Footer_socialLink__mnd4G",socialLinks:"Footer_socialLinks__RFkma"}},5897:function(e){e.exports={header:"Header_header__Z8PUO",nav:"Header_nav__9EX6V",pageLinks:"Header_pageLinks__dDmG_",postPageLink:"Header_postPageLink__TtVcZ",postPageLinkContainer:"Header_postPageLinkContainer__YEw2C",hide:"Header_hide__syVsa"}},8115:function(e){e.exports={container:"Layout_container__7UE5U",parallaxContainer:"Layout_parallaxContainer__KiGRL",foreground:"Layout_foreground__jg_fz",blur:"Layout_blur__PW_J3",foregroundContentRef:"Layout_foregroundContentRef__w_1Rz",contentContainer:"Layout_contentContainer__yeral",content:"Layout_content__Tk8uS",padContent:"Layout_padContent__LZVaW"}},9657:function(e){e.exports={backgroundImage:"PostCard_backgroundImage__Fn_2R",card:"PostCard_card__Hk_bu",titleContainer:"PostCard_titleContainer__qvCw5",title:"PostCard_title__2Ad9c",excerpt:"PostCard_excerpt__GgbBT",date:"PostCard_date__9VIkR",tags:"PostCard_tags___JVz6"}},2972:function(e){e.exports={gridContainer:"PostGrid_gridContainer__gS9e9"}},2066:function(e){e.exports={container:"Search_container__BbHf5",icon:"Search_icon__1HT5_",input:"Search_input__KnaAE"}},625:function(e){e.exports={container:"Tag_container__qJyQl"}},9435:function(e){e.exports={searchContainer:"Posts_searchContainer__Mn12Z",search:"Posts_search__3osWa",emptySearch:"Posts_emptySearch__Z3itB"}}},function(e){e.O(0,[325,577,774,888,179],(function(){return t=1945,e(e.s=t);var t}));var t=e.O();_N_E=t}]);