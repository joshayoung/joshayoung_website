(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{398:function(e,t,n){"use strict";n.r(t);n(0);var o=n(422),a=n(431),i=n(6);t.default=function(){return Object(i.d)(o.a,null,Object(i.d)(a.a,{title:"404: Not found"}),Object(i.d)("h1",null,"NOT FOUND"),Object(i.d)("p",null,"You just hit a route that doesn't exist... the sadness."))}},414:function(e,t,n){"use strict";n.d(t,"b",function(){return f});var o=n(0),a=n.n(o),i=n(83),r=n.n(i);n.d(t,"a",function(){return r.a});n(415);var c=n(15),l=n(6),d=(c.default.enqueue,a.a.createContext({}));function s(e){var t=e.staticQueryData,n=e.data,o=e.query,i=e.render,r=n?n.data:t[o]&&t[o].data;return Object(l.d)(a.a.Fragment,null,r&&i(r),!r&&Object(l.d)("div",null,"Loading (StaticQuery)"))}var f=function(e){var t=e.data,n=e.query,o=e.render,a=e.children;return Object(l.d)(d.Consumer,null,function(e){return Object(l.d)(s,{data:t,query:n,render:o||a,staticQueryData:e})})}},415:function(e,t,n){var o;e.exports=(o=n(419))&&o.default||o},416:function(e,t,n){"use strict";n(0);var o=n(6);t.a=function(e){var t=e.children;return Object(o.d)("div",{css:Object(o.c)("padding-bottom:10px;border-bottom:3px solid #3385ff;margin-bottom:50px;&:last-child{border-bottom:none;}header{font-family:'Acme',sans-serif;font-size:24px;margin-bottom:5px;color:#3385ff;a{color:","#3385ff",';}&:before{content:"{ ";color:#b3b3b3;}&:after{content:" }";color:#b3b3b3;}}ul{display:flex;flex-wrap:wrap;list-style-type:none;margin-left:0;a{display:inline-block;padding:5px 10px;background:rgba(204,204,204,0.4);border:1px solid #f4f4f4;padding:4px 10px;border-radius:4px;margin:4px;}}')},t)}},417:function(e,t,n){"use strict";n(0);var o=n(416),a=n(6);t.a=function(){return Object(a.d)(o.a,null,Object(a.d)("header",null,"Glance"),Object(a.d)("ul",null,Object(a.d)("li",null,Object(a.d)("a",{href:"/me#books"},"Books")),Object(a.d)("li",null,Object(a.d)("a",{href:"/me#books_i_recommend"},"Great Books")),Object(a.d)("li",null,Object(a.d)("a",{href:"https://codepen.io/joshayoung/pens/popular"},"CodePen")),Object(a.d)("li",null,Object(a.d)("a",{href:"/me#hobbies"},"Hobbies")),Object(a.d)("li",null,Object(a.d)("a",{href:"https://github.com/joshayoung"},"GitHub")),Object(a.d)("li",null,Object(a.d)("a",{href:"/quotes"},"Quotes")),Object(a.d)("li",null,Object(a.d)("a",{href:"/stats"},"Stats")),Object(a.d)("li",null,Object(a.d)("a",{href:"/me#podcast_episodes"},"Great Podcasts")),Object(a.d)("li",null,Object(a.d)("a",{href:"https://www.linkedin.com/in/joshuayoung1"},"LinkedIn")),Object(a.d)("li",null,Object(a.d)("a",{href:"/tech-spectrum"},"Spectrum")),Object(a.d)("li",null,Object(a.d)("a",{href:"/me#podcasts"},"Podcasts"))))}},418:function(e,t,n){"use strict";n(149);var o=n(420),a=(n(0),n(416)),i=n(414),r=n(6);t.a=function(){var e,t,n=(e=o.data,t=[],e.allMarkdownRemark.edges.map(function(e){e.node.frontmatter.tags.forEach(function(e){t.includes(e.toLowerCase())||t.push(e.toLowerCase())})}),t);return Object(r.d)(a.a,null,Object(r.d)("header",null,Object(r.d)(i.a,{to:"/tags"},"Tags")),Object(r.d)("ul",{"aria-labelledby":"tags"},n.map(function(e){return Object(r.d)("li",{key:e},Object(r.d)("a",{href:"/tags/"+e},e.charAt(0).toUpperCase()+e.slice(1)))})))}},419:function(e,t,n){"use strict";n.r(t);n(45),n(20),n(12),n(13),n(3),n(19);var o=n(0),a=n.n(o),i=n(110);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(i.a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(n,!0).forEach(function(t){c(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({location:t,pageResources:n},n.json)):null}},420:function(e){e.exports={data:{allMarkdownRemark:{totalCount:13,edges:[{node:{frontmatter:{tags:["Jekyll","GitHub"]}}},{node:{frontmatter:{tags:["React","JavaScript"]}}},{node:{frontmatter:{tags:["Atom","Vim"]}}},{node:{frontmatter:{tags:["Docker"]}}},{node:{frontmatter:{tags:["Laravel","PHP","PostgreSQL"]}}},{node:{frontmatter:{tags:["VSCode","Atom"]}}},{node:{frontmatter:{tags:["Security","CSP"]}}},{node:{frontmatter:{tags:["Databases","Standards"]}}},{node:{frontmatter:{tags:["Programming","Rails","Ruby","MVC"]}}},{node:{frontmatter:{tags:["Programming","Rails","Ruby","MVC"]}}},{node:{frontmatter:{tags:["Standards","Programming"]}}},{node:{frontmatter:{tags:["Programming"]}}},{node:{frontmatter:{tags:["Programming","Rails","Ruby","MVC"]}}}]}}}},421:function(e,t,n){e.exports=n.p+"static/bck5-bfaefdab55fc8f52583cdada3a5f331a.png"},422:function(e,t,n){"use strict";var o=n(0),a=n.n(o),i=n(6),r={name:"1hn5xvm",styles:"svg{width:15px;height:15px;}#codepen,#linkedin,#github{fill:#3385ff;}"},c=function(){return Object(i.d)("div",{css:r},Object(i.d)("svg",{style:{display:"none"}},Object(i.d)("symbol",{id:"codepen",viewBox:"0 0 24 24"},Object(i.d)("path",{d:"m.455 16.512 10.969 7.314c.374.23.774.233 1.152 0l10.969-7.314c.281-.187.455-.522.455-.857v-7.312c0-.335-.174-.67-.455-.857l-10.969-7.313c-.374-.23-.774-.232-1.152 0l-10.969 7.313c-.281.187-.455.522-.455.857v7.312c0 .335.174.67.455.857zm10.514 4.528-8.076-5.384 3.603-2.411 4.473 2.987zm2.062 0v-4.808l4.473-2.987 3.603 2.411zm8.907-7.314-2.585-1.727 2.585-1.728zm-8.907-10.767 8.076 5.384-3.603 2.411-4.473-2.987zm-1.031 6.602 3.643 2.438-3.643 2.438-3.643-2.438zm-1.031-6.602v4.808l-4.473 2.987-3.603-2.411zm-8.906 7.314v-.001l2.585 1.728-2.585 1.728z"})),Object(i.d)("symbol",{id:"github",viewBox:"0 0 512 512"},Object(i.d)("path",{d:"m256 0c-140.609375 0-256 115.390625-256 256 0 119.988281 84.195312 228.984375 196 256v-84.695312c-11.078125 2.425781-21.273438 2.496093-32.550781-.828126-15.128907-4.464843-27.421875-14.542968-36.546875-29.910156-5.816406-9.8125-16.125-20.453125-26.878906-19.671875l-2.636719-29.882812c23.253906-1.992188 43.371093 14.167969 55.3125 34.230469 5.304687 8.921874 11.410156 14.152343 19.246093 16.464843 7.574219 2.230469 15.707032 1.160157 25.183594-2.1875 2.378906-18.972656 11.070313-26.074219 17.636719-36.074219v-.015624c-66.679687-9.945313-93.253906-45.320313-103.800781-73.242188-13.976563-37.074219-6.476563-83.390625 18.238281-112.660156.480469-.570313 1.347656-2.0625 1.011719-3.105469-11.332032-34.230469 2.476562-62.546875 2.984375-65.550781 13.078125 3.867187 15.203125-3.890625 56.808593 21.386718l7.191407 4.320313c3.007812 1.792969 2.0625.769531 5.070312.542969 17.371094-4.71875 35.683594-7.324219 53.726563-7.558594 18.179687.234375 36.375 2.839844 54.464844 7.75l2.328124.234375c-.203124-.03125.632813-.148437 2.035157-.984375 51.972656-31.480469 50.105469-21.191406 64.042969-25.722656.503906 3.007812 14.128906 31.785156 2.917968 65.582031-1.511718 4.65625 45.058594 47.300781 19.246094 115.753906-10.546875 27.933594-37.117188 63.308594-103.796875 73.253907v.015624c8.546875 13.027344 18.816406 19.957032 18.761719 46.832032v105.722656c111.808594-27.015625 196-136.011719 196-256 .003906-140.609375-115.386719-256-255.996094-256zm0 0"})),Object(i.d)("symbol",{id:"linkedin",viewBox:"0 0 512 512"},Object(i.d)("path",{d:"m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h362c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm-256 406h-60v-210h60zm0-240h-60v-60h60zm210 240h-60v-120c0-16.539062-13.460938-30-30-30s-30 13.460938-30 30v120h-60v-210h60v11.308594c15.71875-4.886719 25.929688-11.308594 45-11.308594 40.691406.042969 75 36.546875 75 79.6875zm0 0"}))),Object(i.d)("a",{href:"https://codepen.io/joshayoung/pens/popular"},Object(i.d)("svg",null,Object(i.d)("use",{xlinkHref:"#codepen"}))),Object(i.d)("a",{href:"https://www.linkedin.com/in/joshuayoung1"},Object(i.d)("svg",null,Object(i.d)("use",{xlinkHref:"#linkedin"}))),Object(i.d)("a",{href:"https://github.com/joshayoung"},Object(i.d)("svg",null,Object(i.d)("use",{xlinkHref:"#github"}))))},l=function(){return Object(i.d)("div",{className:"quote"},'"Nōn nōbīs, Domine, nōn nōbīs, sed nōminī tuō dā glōriam."')},d={name:"66qvyd",styles:"color:#999999;a{color:#999999;}"},s=function(){return Object(i.d)("div",{css:d},"Icons made by",Object(i.d)("a",{href:"https://www.flaticon.com/authors/freepik",title:"Freepik"},"Freepik")," and ",Object(i.d)("a",{href:"https://www.flaticon.com/authors/pixel-perfect",title:"Pixel perfect"},"Pixel perfect")," from ",Object(i.d)("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com"))},f=n(414),u=(new Date).getFullYear(),p={name:"z9mce0",styles:"background:#efefef;border-top:solid 1px #3385ff;height:125px;margin-top:-100px;padding:0 10px;padding-top:20px;@media (min-width:600px){height:80px;margin-top:-80px;}.inner{display:flex;justify-content:space-between;flex-direction:column;@media (min-width:600px){flex-direction:row;align-items:flex-end;}}.social{display:flex;justify-content:flex-end;flex-direction:column;align-items:flex-end;margin-bottom:20px;@media (min-width:600px){order:3;margin-bottom:0px;}}.quote{color:#999999;}.social a{margin:0 4px;display:inline-block;}"},b={name:"5e1w1r",styles:"display:flex;flex-direction:column;align-items:flex-end;font-size:12px;text-align:right;@media (min-width:600px){align-items:flex-start;}"},m=function(){return Object(i.d)("footer",{css:p},Object(i.d)("div",{className:"inner"},Object(i.d)("div",{className:"social"},Object(i.d)(c,null),Object(i.d)(f.a,{to:"/me"},"Josh Young - © ",u)),Object(i.d)("div",{css:b},Object(i.d)(s,null),Object(i.d)(l,null))))},h=n(423),g=Object(h.a)(f.a,{target:"e3wdn4i0"})("font-size:14px;color:",function(e){return e.color||"#000;"},";"),j=function(){return Object(i.d)("ul",{id:"js_navigation"},Object(i.d)("li",null,Object(i.d)(g,{activeClassName:"active",to:"/"},"Home")),Object(i.d)("li",null,Object(i.d)(g,{activeClassName:"active",to:"/thoughts"},"Thoughts")),Object(i.d)("li",null,Object(i.d)(g,{activeClassName:"active",to:"/projects"},"Projects")),Object(i.d)("li",null,Object(i.d)(g,{activeClassName:"active",to:"/classes"},"Classes")),Object(i.d)("li",null,Object(i.d)(g,{activeClassName:"active",to:"/certifications"},"Certs")),Object(i.d)("li",null,Object(i.d)(g,{activeClassName:"active",to:"/resume"},"Resume")),Object(i.d)("li",null,Object(i.d)(g,{activeClassName:"active",to:"/snippets"},"Snippets")),Object(i.d)("li",null,Object(i.d)(g,{activeClassName:"active",to:"/definitions"},"Definitions")),Object(i.d)("li",null,Object(i.d)(g,{activeClassName:"active",to:"/resources"},"Resources")),Object(i.d)("li",null,Object(i.d)(g,{activeClassName:"active",to:"/search"},"Search")),Object(i.d)("li",null,Object(i.d)(g,{activeClassName:"active",to:"/me"},"About")))},O=function(){return Object(i.d)("nav",{css:Object(i.c)("margin-left:100%;position:relative;left:-51px;label,#menu{display:none;}label{z-index:200;position:relative;}ul{padding-top:68px;position:fixed;background:","#3385ff",";background:#ececec;height:100%;z-index:100;width:250px;margin-top:-68px;right:-250px;animation-fill-mode:forwards;border-left:solid 3px ","#3385ff",";@media (min-width:700px){display:none;}}ul li{display:block;a.active{background:#fff;}}li:nth-of-type(2n) a{background:#e6e6e6;&.active{background:#fff;}&:hover{background:#fff;}}a{display:block;padding:10px;font-size:18px;&:hover{background:#fff;}}label{display:inline-block;font-size:34px;&:hover{cursor:pointer;}@media (min-width:700px){display:none;}}input:checked ~ ul{animation:open 0.5s ease;animation-fill-mode:forwards;}@keyframes open{from{right:-250px;}to{right:0;}}@keyframes close{from{right:0;}to{right:-250px;}}")},Object(i.d)("label",{className:"menu",htmlFor:"menu"},"☰"),Object(i.d)("input",{type:"checkbox",id:"menu"}),Object(i.d)(j,null))},x=function(e){var t=e.siteTitle;return Object(i.d)("header",null,t,Object(i.d)(O,null))};x.defaultProps={siteTitle:""};var v=x,y={name:"702a9o",styles:"font-size:52px;font-family:'Acme',sans-serif;display:block;margin-bottom:70px;span{color:#3385ff;}"},w={name:"c235h4",styles:"font-size:20px;font-style:italic;color:#3385ff;"},k=function(){return Object(i.d)(f.a,{to:"/",css:y},Object(i.d)("div",null,"Josh A",Object(i.d)("span",null,".")," Young"),Object(i.d)("div",{css:w},"{ Full Stack Software Engineer }"))},z=function(){return Object(i.d)("nav",{css:Object(i.c)("width:130px;margin:170px 10px 0 52px;display:none;@media (min-width:700px){display:block;}li{display:block;span{background:red;border-bottom:1px solid #ccc;}a{display:block;text-align:right;padding:10px;&.active{background:none;color:","#3385ff",";font-style:italic;}}}"),className:"left-nav"},Object(i.d)(j,null))},S={name:"1brijzg",styles:"margin:1rem auto;max-width:90vw;width:700px;@media (min-width:700px){border-left:1px solid #dedede;margin:0;margin-top:50px;padding-left:30px;}> p:first-of-type{line-height:2;font-size:25px;background:#eaeaea;border-bottom:1px solid #3385ff;box-shadow:1px 1px 1px #ccc;padding:0 10px;font-family:'Acme',sans-serif;&:first-letter{color:#3385ff;}}"},C=function(e){var t=e.children;return Object(i.d)("main",{css:S},t)},P=n(417),N=n(418),R={name:"uaiufo",styles:"display:none;max-width:300px;font-size:14px;padding:10px;padding-left:40px;margin-top:240px;header{font-size:20px;}@media (min-width:600px){display:block;}"},D=function(){return Object(i.d)("div",{className:"aside",css:R},Object(i.d)(P.a,null),Object(i.d)(N.a,null))};var A=function(e){var t,n;function o(){var t;return(t=e.call(this)||this).state={offScreen:!1},t.handleScroll=t.handleScroll.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r=o.prototype;return r.handleScroll=function(){window.pageYOffset>200?this.setState({offScreen:!0}):this.setState({offScreen:!1})},r.closeNav=function(e){console.log("closing")},r.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll),document.body.addEventListener("click",this.closeNav(this),!1)},r.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},r.render=function(){return Object(i.d)(a.a.Fragment,null,Object(i.d)("a",{style:this.state.offScreen?{position:"fixed"}:{display:"none",position:"relative"},css:Object(i.c)("bottom:0;left:200px;display:block;background:","#3385ff",";padding:2px 10px;border-top-right-radius:2px;border-top-left-radius:2px;font-size:14px;color:#fff;&:hover{text-decoration:underline;color:#fff;}"),href:"#top"},"Go To Top"))},o}(o.Component),F={name:"2mrtec",styles:"@media (min-width:700px){display:flex;justify-content:flex-start;}"},M=function(e){var t=e.children;return Object(i.d)("div",{css:F},Object(i.d)("a",{id:"top"}),Object(i.d)(v,null),Object(i.d)(z,null),Object(i.d)(C,null,Object(i.d)(k,null),t,Object(i.d)(A,null)),Object(i.d)(D,null))},q={name:"3mx9xp",styles:"display:flex;min-height:100vh;flex-direction:column;padding-bottom:100px;"},E=function(e){var t=e.children,n=e.klass;return Object(i.d)("div",{css:q,className:n},Object(i.d)(M,{children:t}))};n(425),n(426),n(427),n(428),n(421),t.a=function(e){var t=e.children,n=e.klass,o="#3385ff";return Object(i.d)(a.a.Fragment,null,Object(i.d)(i.a,{styles:Object(i.c)("pre{white-space:pre-wrap;}code{white-space:pre-wrap;}*{box-sizing:border-box;}fieldset{border:none;}body{font-family:'Work Sans',sans-serif;font-size:18px;line-height:1.4;background-color:#f2f2f2;background-image:-webkit-linear-gradient(10deg,#efefef 50%,#f4f4f4 50%);background-image:-webkit-linear-gradient(10deg,#fff59e 50%,#f4f4f4 50%);}h1{font-size:28px;border-bottom:1px solid ",o,';&:after{content:" /";color:',o,';}&:before{content:"/ ";color:',o,";}}h3{color:",o,';font-size:1.29rem;&:before{content:"{ ";color:#b3b3b3;}&:after{content:" }";color:#b3b3b3;}}h4{margin-bottom:0;}h6{margin:10px 0;}h5{margin:10px 0;}span{font-size:14px;}a{text-decoration:none;color:#000;&:hover{color:',o,";}}ul{list-style-type:square;padding:0;margin:0 0 0 30px;font-size:14px;}li > p{margin:0;}li span:last-child{margin-left:5px;}dl{dd{margin:0 0 10px 0;font-style:italic;font-size:14px;}dt{display:inline-block;font-weight:bold;color:",o,";&:after{content:': ';}}}")}),Object(i.d)(E,{children:t,klass:n}),Object(i.d)(m,null))}},431:function(e,t,n){"use strict";var o=n(432),a=(n(0),n(435)),i=n.n(a),r=n(6);function c(e){var t=e.description,n=e.lang,a=e.meta,c=e.title,l=o.data.site,d=t||l.siteMetadata.description;return Object(r.d)(i.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:c},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:d}].concat(a)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},432:function(e){e.exports={data:{site:{siteMetadata:{title:"Josh A. Young",description:"Josh Young's personal website.",author:"@joshayoung"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-70b1cc04599c63547080.js.map