(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{404:function(t,e,n){"use strict";n.r(e);n(0);var r=n(421),o=n(430),a=n(6),i=n(413),c={name:"1sxa65t",styles:"padding:20px 0;font-size:30px;font-family:'Acme',sans-serif;margin-bottom:50px;line-height:1.7;&:first-letter{color:#3385ff;font-weight:bold;}span:not(.dot){background:#3385ff;display:inline-block;padding:0 10px;font-size:28px;color:#fff;a{color:#fff;}}.dot{color:#3385ff;display:inline-block;margin-right:10px;}"},l=function(){return Object(a.d)("section",{className:"",css:c},"My name is Josh",Object(a.d)("span",{className:"dot"},"."),"I am a Full Stack Software Engineer",Object(a.d)("span",{className:"dot"},"."),"Here I write about development and my current tech projects",Object(a.d)("span",{className:"dot"},"."),"Check out my ",Object(a.d)("span",null,Object(a.d)(i.a,{to:"/thoughts"},"Blog"))," to see what I am writing or my ",Object(a.d)(i.a,{to:"/projects"},Object(a.d)("span",null,"Projects"))," to see what I am building",Object(a.d)("span",{className:"dot"},"..."))},s=n(434),d=n(437),u=function(){return Object(a.d)(s.a,null,Object(a.d)("header",null,"Recently Updated Repos"),Object(a.d)(d.a,null))},f=n(448),p=function(){return f.data.allMdx.nodes.map(function(t){return{title:t.frontmatter.title,date:t.frontmatter.date,description:t.frontmatter.description,path:t.frontmatter.path}})},h=function(){var t=p();return Object(a.d)(s.a,null,Object(a.d)("header",null,"Latest Posts"),Object(a.d)("ul",null,t.map(function(t){return Object(a.d)("li",{key:t.path},Object(a.d)(i.a,{to:t.path},t.title))})))},b={name:"1w37zl5",styles:"@media (min-width:600px){display:flex;flex-direction:wrap;justify-content:space-between;}"},m=function(){return Object(a.d)("div",{css:b},Object(a.d)(h,null),Object(a.d)(u,null))},g=n(416),y=n(417);e.default=function(){return Object(a.d)(r.a,{klass:"home"},Object(a.d)(o.a,{title:"Home"}),Object(a.d)(l,null),Object(a.d)(g.a,null),Object(a.d)(y.a,null),Object(a.d)(m,null))}},413:function(t,e,n){"use strict";n.d(e,"b",function(){return u});var r=n(0),o=n.n(r),a=n(83),i=n.n(a);n.d(e,"a",function(){return i.a});n(414);var c=n(15),l=n(6),s=(c.default.enqueue,o.a.createContext({}));function d(t){var e=t.staticQueryData,n=t.data,r=t.query,a=t.render,i=n?n.data:e[r]&&e[r].data;return Object(l.d)(o.a.Fragment,null,i&&a(i),!i&&Object(l.d)("div",null,"Loading (StaticQuery)"))}var u=function(t){var e=t.data,n=t.query,r=t.render,o=t.children;return Object(l.d)(s.Consumer,null,function(t){return Object(l.d)(d,{data:e,query:n,render:r||o,staticQueryData:t})})}},414:function(t,e,n){var r;t.exports=(r=n(418))&&r.default||r},415:function(t,e,n){"use strict";n(0);var r=n(6);e.a=function(t){var e=t.children;return Object(r.d)("div",{css:Object(r.c)("padding-bottom:10px;border-bottom:3px solid #3385ff;margin-bottom:50px;&:last-child{border-bottom:none;}header{font-family:'Acme',sans-serif;font-size:24px;margin-bottom:5px;color:#3385ff;a{color:","#3385ff",';}&:before{content:"{ ";color:#b3b3b3;}&:after{content:" }";color:#b3b3b3;}}ul{display:flex;flex-wrap:wrap;list-style-type:none;margin-left:0;a{display:inline-block;padding:5px 10px;background:rgba(204,204,204,0.4);border:1px solid #f4f4f4;padding:4px 10px;border-radius:4px;margin:4px;}}')},e)}},416:function(t,e,n){"use strict";n(0);var r=n(415),o=n(6);e.a=function(){return Object(o.d)(r.a,null,Object(o.d)("header",null,"Glance"),Object(o.d)("ul",null,Object(o.d)("li",null,Object(o.d)("a",{href:"/me#books"},"Books")),Object(o.d)("li",null,Object(o.d)("a",{href:"/me#books_i_recommend"},"Great Books")),Object(o.d)("li",null,Object(o.d)("a",{href:"https://codepen.io/joshayoung/pens/popular"},"CodePen")),Object(o.d)("li",null,Object(o.d)("a",{href:"/me#hobbies"},"Hobbies")),Object(o.d)("li",null,Object(o.d)("a",{href:"https://github.com/joshayoung"},"GitHub")),Object(o.d)("li",null,Object(o.d)("a",{href:"/quotes"},"Quotes")),Object(o.d)("li",null,Object(o.d)("a",{href:"/stats"},"Stats")),Object(o.d)("li",null,Object(o.d)("a",{href:"/me#podcast_episodes"},"Great Podcasts")),Object(o.d)("li",null,Object(o.d)("a",{href:"https://www.linkedin.com/in/joshuayoung1"},"LinkedIn")),Object(o.d)("li",null,Object(o.d)("a",{href:"/tech-spectrum"},"Spectrum")),Object(o.d)("li",null,Object(o.d)("a",{href:"/me#podcasts"},"Podcasts"))))}},417:function(t,e,n){"use strict";n(149);var r=n(419),o=(n(0),n(415)),a=n(413),i=n(6);e.a=function(){var t,e,n=(t=r.data,e=[],t.allMarkdownRemark.edges.map(function(t){t.node.frontmatter.tags.forEach(function(t){e.includes(t.toLowerCase())||e.push(t.toLowerCase())})}),e);return Object(i.d)(o.a,null,Object(i.d)("header",null,Object(i.d)(a.a,{to:"/tags"},"Tags")),Object(i.d)("ul",{"aria-labelledby":"tags"},n.map(function(t){return Object(i.d)("li",{key:t},Object(i.d)("a",{href:"/tags/"+t},t.charAt(0).toUpperCase()+t.slice(1)))})))}},418:function(t,e,n){"use strict";n.r(e);n(45),n(20),n(12),n(13),n(3),n(19);var r=n(0),o=n.n(r),a=n(110);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.default=function(t){var e=t.location,n=t.pageResources;return n?o.a.createElement(a.a,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(n,!0).forEach(function(e){c(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({location:e,pageResources:n},n.json)):null}},419:function(t){t.exports={data:{allMarkdownRemark:{totalCount:13,edges:[{node:{frontmatter:{tags:["Jekyll","GitHub"]}}},{node:{frontmatter:{tags:["Atom","Vim"]}}},{node:{frontmatter:{tags:["VSCode","Atom"]}}},{node:{frontmatter:{tags:["React","JavaScript"]}}},{node:{frontmatter:{tags:["Docker"]}}},{node:{frontmatter:{tags:["Databases","Standards"]}}},{node:{frontmatter:{tags:["Laravel","PHP","PostgreSQL"]}}},{node:{frontmatter:{tags:["Security","CSP"]}}},{node:{frontmatter:{tags:["Programming"]}}},{node:{frontmatter:{tags:["Programming","Rails","Ruby","MVC"]}}},{node:{frontmatter:{tags:["Programming","Rails","Ruby","MVC"]}}},{node:{frontmatter:{tags:["Standards","Programming"]}}},{node:{frontmatter:{tags:["Programming","Rails","Ruby","MVC"]}}}]}}}},420:function(t,e,n){t.exports=n.p+"static/bck5-bfaefdab55fc8f52583cdada3a5f331a.png"},421:function(t,e,n){"use strict";var r=n(0),o=n.n(r),a=n(6),i={name:"1hn5xvm",styles:"svg{width:15px;height:15px;}#codepen,#linkedin,#github{fill:#3385ff;}"},c=function(){return Object(a.d)("div",{css:i},Object(a.d)("svg",{style:{display:"none"}},Object(a.d)("symbol",{id:"codepen",viewBox:"0 0 24 24"},Object(a.d)("path",{d:"m.455 16.512 10.969 7.314c.374.23.774.233 1.152 0l10.969-7.314c.281-.187.455-.522.455-.857v-7.312c0-.335-.174-.67-.455-.857l-10.969-7.313c-.374-.23-.774-.232-1.152 0l-10.969 7.313c-.281.187-.455.522-.455.857v7.312c0 .335.174.67.455.857zm10.514 4.528-8.076-5.384 3.603-2.411 4.473 2.987zm2.062 0v-4.808l4.473-2.987 3.603 2.411zm8.907-7.314-2.585-1.727 2.585-1.728zm-8.907-10.767 8.076 5.384-3.603 2.411-4.473-2.987zm-1.031 6.602 3.643 2.438-3.643 2.438-3.643-2.438zm-1.031-6.602v4.808l-4.473 2.987-3.603-2.411zm-8.906 7.314v-.001l2.585 1.728-2.585 1.728z"})),Object(a.d)("symbol",{id:"github",viewBox:"0 0 512 512"},Object(a.d)("path",{d:"m256 0c-140.609375 0-256 115.390625-256 256 0 119.988281 84.195312 228.984375 196 256v-84.695312c-11.078125 2.425781-21.273438 2.496093-32.550781-.828126-15.128907-4.464843-27.421875-14.542968-36.546875-29.910156-5.816406-9.8125-16.125-20.453125-26.878906-19.671875l-2.636719-29.882812c23.253906-1.992188 43.371093 14.167969 55.3125 34.230469 5.304687 8.921874 11.410156 14.152343 19.246093 16.464843 7.574219 2.230469 15.707032 1.160157 25.183594-2.1875 2.378906-18.972656 11.070313-26.074219 17.636719-36.074219v-.015624c-66.679687-9.945313-93.253906-45.320313-103.800781-73.242188-13.976563-37.074219-6.476563-83.390625 18.238281-112.660156.480469-.570313 1.347656-2.0625 1.011719-3.105469-11.332032-34.230469 2.476562-62.546875 2.984375-65.550781 13.078125 3.867187 15.203125-3.890625 56.808593 21.386718l7.191407 4.320313c3.007812 1.792969 2.0625.769531 5.070312.542969 17.371094-4.71875 35.683594-7.324219 53.726563-7.558594 18.179687.234375 36.375 2.839844 54.464844 7.75l2.328124.234375c-.203124-.03125.632813-.148437 2.035157-.984375 51.972656-31.480469 50.105469-21.191406 64.042969-25.722656.503906 3.007812 14.128906 31.785156 2.917968 65.582031-1.511718 4.65625 45.058594 47.300781 19.246094 115.753906-10.546875 27.933594-37.117188 63.308594-103.796875 73.253907v.015624c8.546875 13.027344 18.816406 19.957032 18.761719 46.832032v105.722656c111.808594-27.015625 196-136.011719 196-256 .003906-140.609375-115.386719-256-255.996094-256zm0 0"})),Object(a.d)("symbol",{id:"linkedin",viewBox:"0 0 512 512"},Object(a.d)("path",{d:"m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h362c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm-256 406h-60v-210h60zm0-240h-60v-60h60zm210 240h-60v-120c0-16.539062-13.460938-30-30-30s-30 13.460938-30 30v120h-60v-210h60v11.308594c15.71875-4.886719 25.929688-11.308594 45-11.308594 40.691406.042969 75 36.546875 75 79.6875zm0 0"}))),Object(a.d)("a",{href:"https://codepen.io/joshayoung/pens/popular"},Object(a.d)("svg",null,Object(a.d)("use",{xlinkHref:"#codepen"}))),Object(a.d)("a",{href:"https://www.linkedin.com/in/joshuayoung1"},Object(a.d)("svg",null,Object(a.d)("use",{xlinkHref:"#linkedin"}))),Object(a.d)("a",{href:"https://github.com/joshayoung"},Object(a.d)("svg",null,Object(a.d)("use",{xlinkHref:"#github"}))))},l=function(){return Object(a.d)("div",{className:"quote"},'"Nōn nōbīs, Domine, nōn nōbīs, sed nōminī tuō dā glōriam."')},s={name:"66qvyd",styles:"color:#999999;a{color:#999999;}"},d=function(){return Object(a.d)("div",{css:s},"Icons made by",Object(a.d)("a",{href:"https://www.flaticon.com/authors/freepik",title:"Freepik"},"Freepik")," and ",Object(a.d)("a",{href:"https://www.flaticon.com/authors/pixel-perfect",title:"Pixel perfect"},"Pixel perfect")," from ",Object(a.d)("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com"))},u=n(413),f=(new Date).getFullYear(),p={name:"z9mce0",styles:"background:#efefef;border-top:solid 1px #3385ff;height:125px;margin-top:-100px;padding:0 10px;padding-top:20px;@media (min-width:600px){height:80px;margin-top:-80px;}.inner{display:flex;justify-content:space-between;flex-direction:column;@media (min-width:600px){flex-direction:row;align-items:flex-end;}}.social{display:flex;justify-content:flex-end;flex-direction:column;align-items:flex-end;margin-bottom:20px;@media (min-width:600px){order:3;margin-bottom:0px;}}.quote{color:#999999;}.social a{margin:0 4px;display:inline-block;}"},h={name:"5e1w1r",styles:"display:flex;flex-direction:column;align-items:flex-end;font-size:12px;text-align:right;@media (min-width:600px){align-items:flex-start;}"},b=function(){return Object(a.d)("footer",{css:p},Object(a.d)("div",{className:"inner"},Object(a.d)("div",{className:"social"},Object(a.d)(c,null),Object(a.d)(u.a,{to:"/me"},"Josh Young - © ",f)),Object(a.d)("div",{css:h},Object(a.d)(d,null),Object(a.d)(l,null))))},m=n(422),g=Object(m.a)(u.a,{target:"e3wdn4i0"})("font-size:14px;color:",function(t){return t.color||"#000;"},";"),y=function(){return Object(a.d)("ul",{id:"js_navigation"},Object(a.d)("li",null,Object(a.d)(g,{activeClassName:"active",to:"/"},"Home")),Object(a.d)("li",null,Object(a.d)(g,{activeClassName:"active",to:"/thoughts"},"Thoughts")),Object(a.d)("li",null,Object(a.d)(g,{activeClassName:"active",to:"/projects"},"Projects")),Object(a.d)("li",null,Object(a.d)(g,{activeClassName:"active",to:"/classes"},"Classes")),Object(a.d)("li",null,Object(a.d)(g,{activeClassName:"active",to:"/certifications"},"Certs")),Object(a.d)("li",null,Object(a.d)(g,{activeClassName:"active",to:"/resume"},"Resume")),Object(a.d)("li",null,Object(a.d)(g,{activeClassName:"active",to:"/snippets"},"Snippets")),Object(a.d)("li",null,Object(a.d)(g,{activeClassName:"active",to:"/definitions"},"Definitions")),Object(a.d)("li",null,Object(a.d)(g,{activeClassName:"active",to:"/resources"},"Resources")),Object(a.d)("li",null,Object(a.d)(g,{activeClassName:"active",to:"/me"},"About")))},v=function(){return Object(a.d)("nav",{css:Object(a.c)("margin-left:100%;position:relative;left:-51px;label,#menu{display:none;}label{z-index:200;position:relative;}ul{padding-top:68px;position:fixed;background:","#3385ff",";background:#ececec;height:100%;z-index:100;width:250px;margin-top:-68px;right:-250px;animation-fill-mode:forwards;border-left:solid 3px ","#3385ff",";@media (min-width:700px){display:none;}}ul li{display:block;a.active{background:#fff;}}li:nth-of-type(2n) a{background:#e6e6e6;&.active{background:#fff;}&:hover{background:#fff;}}a{display:block;padding:10px;font-size:18px;&:hover{background:#fff;}}label{display:inline-block;font-size:34px;&:hover{cursor:pointer;}@media (min-width:700px){display:none;}}input:checked ~ ul{animation:open 0.5s ease;animation-fill-mode:forwards;}@keyframes open{from{right:-250px;}to{right:0;}}@keyframes close{from{right:0;}to{right:-250px;}}")},Object(a.d)("label",{className:"menu",htmlFor:"menu"},"☰"),Object(a.d)("input",{type:"checkbox",id:"menu"}),Object(a.d)(y,null))},j=function(t){var e=t.siteTitle;return Object(a.d)("header",null,e,Object(a.d)(v,null))};j.defaultProps={siteTitle:""};var O=j,x={name:"702a9o",styles:"font-size:52px;font-family:'Acme',sans-serif;display:block;margin-bottom:70px;span{color:#3385ff;}"},w={name:"c235h4",styles:"font-size:20px;font-style:italic;color:#3385ff;"},k=function(){return Object(a.d)(u.a,{to:"/",css:x},Object(a.d)("div",null,"Josh A",Object(a.d)("span",null,".")," Young"),Object(a.d)("div",{css:w},"{ Full Stack Software Engineer }"))},z=function(){return Object(a.d)("nav",{css:Object(a.c)("width:130px;margin:170px 10px 0 52px;display:none;@media (min-width:700px){display:block;}li{display:block;span{background:red;border-bottom:1px solid #ccc;}a{display:block;text-align:right;padding:10px;&.active{background:none;color:","#3385ff",";font-style:italic;}}}"),className:"left-nav"},Object(a.d)(y,null))},L={name:"ypz23l",styles:"margin:1rem auto;max-width:90vw;width:700px;@media (min-width:600px){border-left:1px solid #dedede;padding-left:30px;}@media (min-width:700px){margin:0;margin-top:50px;}> p:first-of-type{line-height:2;font-size:25px;background:#eaeaea;border-bottom:1px solid #3385ff;box-shadow:1px 1px 1px #ccc;padding:0 10px;font-family:'Acme',sans-serif;&:first-letter{color:#3385ff;}}"},S=function(t){var e=t.children;return Object(a.d)("main",{css:L},e)},P=n(416),E=n(417),_={name:"uaiufo",styles:"display:none;max-width:300px;font-size:14px;padding:10px;padding-left:40px;margin-top:240px;header{font-size:20px;}@media (min-width:600px){display:block;}"},N=function(){return Object(a.d)("div",{className:"aside",css:_},Object(a.d)(P.a,null),Object(a.d)(E.a,null))};var C=function(t){var e,n;function r(){var e;return(e=t.call(this)||this).state={offScreen:!1},e.handleScroll=e.handleScroll.bind(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)),e}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var i=r.prototype;return i.handleScroll=function(){window.pageYOffset>200?this.setState({offScreen:!0}):this.setState({offScreen:!1})},i.closeNav=function(t){console.log("closing")},i.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll),document.body.addEventListener("click",this.closeNav(this),!1)},i.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},i.render=function(){return Object(a.d)(o.a.Fragment,null,Object(a.d)("a",{style:this.state.offScreen?{position:"fixed"}:{display:"none",position:"relative"},css:Object(a.c)("bottom:0;left:200px;display:block;background:","#3385ff",";padding:2px 10px;border-top-right-radius:2px;border-top-left-radius:2px;font-size:14px;color:#fff;&:hover{text-decoration:underline;color:#fff;}"),href:"#top"},"Go To Top"))},r}(r.Component),M={name:"2mrtec",styles:"@media (min-width:700px){display:flex;justify-content:flex-start;}"},R=function(t){var e=t.children;return Object(a.d)("div",{css:M},Object(a.d)("a",{id:"top"}),Object(a.d)(O,null),Object(a.d)(z,null),Object(a.d)(S,null,Object(a.d)(k,null),e,Object(a.d)(C,null)),Object(a.d)(N,null))},A={name:"3mx9xp",styles:"display:flex;min-height:100vh;flex-direction:column;padding-bottom:100px;"},F=function(t){var e=t.children,n=t.klass;return Object(a.d)("div",{css:A,className:n},Object(a.d)(R,{children:e}))};n(424),n(425),n(426),n(427),n(420),e.a=function(t){var e=t.children,n=t.klass,r="#3385ff";return Object(a.d)(o.a.Fragment,null,Object(a.d)(a.a,{styles:Object(a.c)("pre{white-space:pre-wrap;}code{white-space:pre-wrap;}*{box-sizing:border-box;}body{font-family:'Work Sans',sans-serif;font-size:18px;line-height:1.4;background-color:#f2f2f2;background-image:-webkit-linear-gradient(10deg,#efefef 50%,#f4f4f4 50%);background-image:-webkit-linear-gradient(10deg,#fff59e 50%,#f4f4f4 50%);}h1{font-size:28px;border-bottom:1px solid ",r,';&:after{content:" /";color:',r,';}&:before{content:"/ ";color:',r,";}}h3{color:",r,';font-size:1.29rem;&:before{content:"{ ";color:#b3b3b3;}&:after{content:" }";color:#b3b3b3;}}h4{margin-bottom:0;}h6{margin:10px 0;}h5{margin:10px 0;}span{font-size:14px;}a{text-decoration:none;color:#000;&:hover{color:',r,";}}ul{list-style-type:square;padding:0;margin:0 0 0 30px;font-size:14px;}li > p{margin:0;}li span:last-child{margin-left:5px;}dl{dd{margin:0 0 10px 0;font-style:italic;font-size:14px;}dt{display:inline-block;font-weight:bold;color:",r,";&:after{content:': ';}}}")}),Object(a.d)(F,{children:e,klass:n}),Object(a.d)(b,null))}},428:function(t,e,n){n(12),n(13),n(35),n(47),n(52),n(3),n(151),n(21),n(22),n(87),n(66),n(20);var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,n,r){var o=e&&e.prototype instanceof b?e:b,a=Object.create(o.prototype),i=new S(r||[]);return a._invoke=function(t,e,n){var r=d;return function(o,a){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw a;return E()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=k(i,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var l=s(t,e,n);if("normal"===l.type){if(r=n.done?p:u,l.arg===h)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=p,n.method="throw",n.arg=l.arg)}}}(t,n,i),a}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}t.wrap=l;var d="suspendedStart",u="suspendedYield",f="executing",p="completed",h={};function b(){}function m(){}function g(){}var y={};y[a]=function(){return this};var v=Object.getPrototypeOf,j=v&&v(v(P([])));j&&j!==n&&r.call(j,a)&&(y=j);var O=g.prototype=b.prototype=Object.create(y);function x(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function w(t){var e;this._invoke=function(n,o){function a(){return new Promise(function(e,a){!function e(n,o,a,i){var c=s(t[n],t,o);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==typeof d&&r.call(d,"__await")?Promise.resolve(d.__await).then(function(t){e("next",t,a,i)},function(t){e("throw",t,a,i)}):Promise.resolve(d).then(function(t){l.value=t,a(l)},function(t){return e("throw",t,a,i)})}i(c.arg)}(n,o,e,a)})}return e=e?e.then(a,a):a()}}function k(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method))return h;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=s(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,h;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,h):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,h)}function z(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(z,this),this.reset(!0)}function P(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:E}}function E(){return{value:e,done:!0}}return m.prototype=O.constructor=g,g.constructor=m,g[c]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},x(w.prototype),w.prototype[i]=function(){return this},t.AsyncIterator=w,t.async=function(e,n,r,o){var a=new w(l(e,n,r,o));return t.isGeneratorFunction(n)?a:a.next().then(function(t){return t.done?t.value:a.next()})},x(O),O[c]="Generator",O[a]=function(){return this},O.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=P,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:P(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),h}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},429:function(t,e,n){t.exports=n(428)},430:function(t,e,n){"use strict";var r=n(431),o=(n(0),n(433)),a=n.n(o),i=n(6);function c(t){var e=t.description,n=t.lang,o=t.meta,c=t.title,l=r.data.site,s=e||l.siteMetadata.description;return Object(i.d)(a.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(o)},Object(i.d)("link",{rel:"apple-touch-icon",sizes:"72x72",href:"apple/site_apple.png"}),Object(i.d)("link",{rel:"apple-touch-icon",sizes:"114x114",href:"apple/site_apple_retina.png"}))}c.defaultProps={lang:"en",meta:[],description:""},e.a=c},431:function(t){t.exports={data:{site:{siteMetadata:{title:"Josh A. Young",description:"Josh Young's personal website.",author:"@joshayoung"}}}}},432:function(t,e,n){"use strict";var r=n(0),o=n.n(r),a=n(6);e.a=function(t){var e=t.results,n=t.repos;return Object(a.d)(o.a.Fragment,null,e?Object(a.d)("ul",null,n.map(function(t){return Object(a.d)("li",{key:t.raw_url||t},Object(a.d)("div",{dangerouslySetInnerHTML:{__html:t.url||t}}))})):Object(a.d)("ul",null,Object(a.d)("li",null,"loading...")))}},434:function(t,e,n){"use strict";n(0);var r=n(6),o={name:"qyshy4",styles:'margin-bottom:50px;&.last{margin-bottom:0;}header{font-family:\'Acme\',sans-serif;color:#3385ff;padding:3px;&:before{content:"{ ";color:#b3b3b3;}&:after{content:" }";color:#b3b3b3;}}'};e.a=function(t){var e=t.children;return Object(r.d)("div",{css:o},e)}},437:function(t,e,n){"use strict";n(52),n(3);var r=n(429),o=n.n(r),a=(n(428),n(153),n(16),n(21),n(0)),i=n(432),c=n(6);function l(t,e,n,r,o,a,i){try{var c=t[a](i),l=c.value}catch(s){return void n(s)}c.done?e(l):Promise.resolve(l).then(r,o)}var s=function(t){var e=[];return t.forEach(function(t,n){e.push({name:t.name,url:"<a href='"+t.html_url+"'>"+t.name+"</a>",raw_url:t.url,updated:t.updated_at,language:t.language,created_at:t.created_at.split("T")[0]})}),e.sort(function(t,e){return new Date(e.updated)-new Date(t.updated)}),e.slice(0,3)},d=function(){var t=Object(a.useState)("no data"),e=t[0],n=t[1],r=Object(a.useState)(!1),i=r[0],c=r[1];function d(){var t;return t=o.a.mark(function t(){var e,r,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return"5641875239b3d5d2f06aef7772e8d5e74c8c3870",t.next=3,fetch("https://api.github.com/users/joshayoung/repos",{headers:{Authorization:"token 5641875239b3d5d2f06aef7772e8d5e74c8c3870"}});case 3:return e=t.sent,t.next=6,e.json();case 6:r=t.sent,a=s(r),n(a),c(!0);case 10:case"end":return t.stop()}},t)}),(d=function(){var e=this,n=arguments;return new Promise(function(r,o){var a=t.apply(e,n);function i(t){l(a,r,o,i,c,"next",t)}function c(t){l(a,r,o,i,c,"throw",t)}i(void 0)})}).apply(this,arguments)}return Object(a.useEffect)(function(){!function(){d.apply(this,arguments)}()},[]),{repos:e,results:i}};e.a=function(){var t=d(),e=t.repos,n=t.results;return Object(c.d)(i.a,{repos:e,results:n})}},448:function(t){t.exports={data:{allMdx:{nodes:[{frontmatter:{title:"Many-to-Many Association in Rails",date:"May 26, 2018",description:"This post will demonstrate a basic many-to-many association in rails as well as the through-association.",path:"/many-to-many-association"}},{frontmatter:{title:"One-to-Many Association in Rails",date:"May 21, 2018",description:"This post will step through the necessary stepst to setup a one-to-many relationship between two tables in rails.",path:"/one-to-many-associations"}},{frontmatter:{title:"Basic Rails MVC Setup",date:"May 20, 2018",description:"This serves as a reference for a basic rails MVC setup with minimal customization.",path:"/basic-rails-mvc-setup"}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-2e3c347973cffedd06c0.js.map