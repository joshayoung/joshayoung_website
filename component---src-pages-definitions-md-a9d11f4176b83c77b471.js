(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{409:function(e,t,i){"use strict";i.r(t);i(24),i(12),i(13),i(3),i(19);var n=i(0),o=i.n(n),a=i(86),r=i(424),s=(i(438),i(474)),c=function(){return s.data.allDefinitionsJson.nodes.map(function(e){return{id:e.id,link:e.link,word:e.word,definition:e.definition}})},l=i(6),d=function(){var e=c();return Object(l.d)("dl",null,e.map(function(e){return Object(l.d)(o.a.Fragment,null,Object(l.d)("dt",null,e.word),Object(l.d)("dd",null,e.definition,""!==e.link&&null!==e.link?Object(l.d)("a",{target:"_blank",rel:"noopener noreferrer",href:e.link},"(resource)"):""))}))};function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}i.d(t,"_frontmatter",function(){return p}),i.d(t,"default",function(){return b});var p={},u={_frontmatter:p},m=r.a;function b(e){var t=e.components,i=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,["components"]);return Object(a.b)(m,f({},u,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",null,"Programming Definitions"),Object(a.b)("p",null,"These are some of the terms I have been introduced to over the years. In an effort to remember these and have a convenient place to reference, I have added them to this page."),Object(a.b)(d,{mdxType:"DefinitionsOutput"}))}b.isMDXComponent=!0},414:function(e,t,i){"use strict";i.d(t,"b",function(){return f});var n=i(0),o=i.n(n),a=i(83),r=i.n(a);i.d(t,"a",function(){return r.a});i(415);var s=i(15),c=i(6),l=(s.default.enqueue,o.a.createContext({}));function d(e){var t=e.staticQueryData,i=e.data,n=e.query,a=e.render,r=i?i.data:t[n]&&t[n].data;return Object(c.d)(o.a.Fragment,null,r&&a(r),!r&&Object(c.d)("div",null,"Loading (StaticQuery)"))}var f=function(e){var t=e.data,i=e.query,n=e.render,o=e.children;return Object(c.d)(l.Consumer,null,function(e){return Object(c.d)(d,{data:t,query:i,render:n||o,staticQueryData:e})})}},415:function(e,t,i){var n;e.exports=(n=i(419))&&n.default||n},416:function(e,t,i){"use strict";i(0);var n=i(6);t.a=function(e){var t=e.children;return Object(n.d)("div",{css:Object(n.c)("padding-bottom:10px;border-bottom:3px solid #3385ff;margin-bottom:50px;&:last-child{border-bottom:none;}header{font-family:'Acme',sans-serif;font-size:24px;margin-bottom:5px;color:#3385ff;a{color:","#3385ff",';}&:before{content:"{ ";color:#b3b3b3;}&:after{content:" }";color:#b3b3b3;}}ul{display:flex;flex-wrap:wrap;list-style-type:none;margin-left:0;a{display:inline-block;padding:5px 10px;background:rgba(204,204,204,0.4);border:1px solid #f4f4f4;padding:4px 10px;border-radius:4px;margin:4px;}}')},t)}},417:function(e,t,i){"use strict";i(0);var n=i(416),o=i(6);t.a=function(){return Object(o.d)(n.a,null,Object(o.d)("header",null,"Glance"),Object(o.d)("ul",null,Object(o.d)("li",null,Object(o.d)("a",{href:"/me#books"},"Books")),Object(o.d)("li",null,Object(o.d)("a",{href:"/me#books_i_recommend"},"Great Books")),Object(o.d)("li",null,Object(o.d)("a",{href:"https://codepen.io/joshayoung/pens/popular"},"CodePen")),Object(o.d)("li",null,Object(o.d)("a",{href:"/me#hobbies"},"Hobbies")),Object(o.d)("li",null,Object(o.d)("a",{href:"https://github.com/joshayoung"},"GitHub")),Object(o.d)("li",null,Object(o.d)("a",{href:"/quotes"},"Quotes")),Object(o.d)("li",null,Object(o.d)("a",{href:"/stats"},"Stats")),Object(o.d)("li",null,Object(o.d)("a",{href:"/me#podcast_episodes"},"Great Podcasts")),Object(o.d)("li",null,Object(o.d)("a",{href:"https://www.linkedin.com/in/joshuayoung1"},"LinkedIn")),Object(o.d)("li",null,Object(o.d)("a",{href:"/tech-spectrum"},"Spectrum")),Object(o.d)("li",null,Object(o.d)("a",{href:"/me#podcasts"},"Podcasts"))))}},418:function(e,t,i){"use strict";i(149);var n=i(420),o=(i(0),i(416)),a=i(414),r=i(6);t.a=function(){var e,t,i=(e=n.data,t=[],e.allMarkdownRemark.edges.map(function(e){e.node.frontmatter.tags.forEach(function(e){t.includes(e.toLowerCase())||t.push(e.toLowerCase())})}),t);return Object(r.d)(o.a,null,Object(r.d)("header",null,Object(r.d)(a.a,{to:"/tags"},"Tags")),Object(r.d)("ul",{"aria-labelledby":"tags"},i.map(function(e){return Object(r.d)("li",{key:e},Object(r.d)("a",{href:"/tags/"+e},e.charAt(0).toUpperCase()+e.slice(1)))})))}},419:function(e,t,i){"use strict";i.r(t);i(45),i(20),i(12),i(13),i(3),i(19);var n=i(0),o=i.n(n),a=i(110);function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}t.default=function(e){var t=e.location,i=e.pageResources;return i?o.a.createElement(a.a,function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(i,!0).forEach(function(t){s(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(i).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}({location:t,pageResources:i},i.json)):null}},420:function(e){e.exports={data:{allMarkdownRemark:{totalCount:13,edges:[{node:{frontmatter:{tags:["VSCode","Atom"]}}},{node:{frontmatter:{tags:["Jekyll","GitHub"]}}},{node:{frontmatter:{tags:["Atom","Vim"]}}},{node:{frontmatter:{tags:["Docker"]}}},{node:{frontmatter:{tags:["Laravel","PHP","PostgreSQL"]}}},{node:{frontmatter:{tags:["React","JavaScript"]}}},{node:{frontmatter:{tags:["Security","CSP"]}}},{node:{frontmatter:{tags:["Programming"]}}},{node:{frontmatter:{tags:["Programming","Rails","Ruby","MVC"]}}},{node:{frontmatter:{tags:["Databases","Standards"]}}},{node:{frontmatter:{tags:["Programming","Rails","Ruby","MVC"]}}},{node:{frontmatter:{tags:["Standards","Programming"]}}},{node:{frontmatter:{tags:["Programming","Rails","Ruby","MVC"]}}}]}}}},421:function(e,t,i){e.exports=i.p+"static/bck5-bfaefdab55fc8f52583cdada3a5f331a.png"},422:function(e,t,i){"use strict";var n=i(0),o=i.n(n),a=i(6),r={name:"1hn5xvm",styles:"svg{width:15px;height:15px;}#codepen,#linkedin,#github{fill:#3385ff;}"},s=function(){return Object(a.d)("div",{css:r},Object(a.d)("svg",{style:{display:"none"}},Object(a.d)("symbol",{id:"codepen",viewBox:"0 0 24 24"},Object(a.d)("path",{d:"m.455 16.512 10.969 7.314c.374.23.774.233 1.152 0l10.969-7.314c.281-.187.455-.522.455-.857v-7.312c0-.335-.174-.67-.455-.857l-10.969-7.313c-.374-.23-.774-.232-1.152 0l-10.969 7.313c-.281.187-.455.522-.455.857v7.312c0 .335.174.67.455.857zm10.514 4.528-8.076-5.384 3.603-2.411 4.473 2.987zm2.062 0v-4.808l4.473-2.987 3.603 2.411zm8.907-7.314-2.585-1.727 2.585-1.728zm-8.907-10.767 8.076 5.384-3.603 2.411-4.473-2.987zm-1.031 6.602 3.643 2.438-3.643 2.438-3.643-2.438zm-1.031-6.602v4.808l-4.473 2.987-3.603-2.411zm-8.906 7.314v-.001l2.585 1.728-2.585 1.728z"})),Object(a.d)("symbol",{id:"github",viewBox:"0 0 512 512"},Object(a.d)("path",{d:"m256 0c-140.609375 0-256 115.390625-256 256 0 119.988281 84.195312 228.984375 196 256v-84.695312c-11.078125 2.425781-21.273438 2.496093-32.550781-.828126-15.128907-4.464843-27.421875-14.542968-36.546875-29.910156-5.816406-9.8125-16.125-20.453125-26.878906-19.671875l-2.636719-29.882812c23.253906-1.992188 43.371093 14.167969 55.3125 34.230469 5.304687 8.921874 11.410156 14.152343 19.246093 16.464843 7.574219 2.230469 15.707032 1.160157 25.183594-2.1875 2.378906-18.972656 11.070313-26.074219 17.636719-36.074219v-.015624c-66.679687-9.945313-93.253906-45.320313-103.800781-73.242188-13.976563-37.074219-6.476563-83.390625 18.238281-112.660156.480469-.570313 1.347656-2.0625 1.011719-3.105469-11.332032-34.230469 2.476562-62.546875 2.984375-65.550781 13.078125 3.867187 15.203125-3.890625 56.808593 21.386718l7.191407 4.320313c3.007812 1.792969 2.0625.769531 5.070312.542969 17.371094-4.71875 35.683594-7.324219 53.726563-7.558594 18.179687.234375 36.375 2.839844 54.464844 7.75l2.328124.234375c-.203124-.03125.632813-.148437 2.035157-.984375 51.972656-31.480469 50.105469-21.191406 64.042969-25.722656.503906 3.007812 14.128906 31.785156 2.917968 65.582031-1.511718 4.65625 45.058594 47.300781 19.246094 115.753906-10.546875 27.933594-37.117188 63.308594-103.796875 73.253907v.015624c8.546875 13.027344 18.816406 19.957032 18.761719 46.832032v105.722656c111.808594-27.015625 196-136.011719 196-256 .003906-140.609375-115.386719-256-255.996094-256zm0 0"})),Object(a.d)("symbol",{id:"linkedin",viewBox:"0 0 512 512"},Object(a.d)("path",{d:"m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h362c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm-256 406h-60v-210h60zm0-240h-60v-60h60zm210 240h-60v-120c0-16.539062-13.460938-30-30-30s-30 13.460938-30 30v120h-60v-210h60v11.308594c15.71875-4.886719 25.929688-11.308594 45-11.308594 40.691406.042969 75 36.546875 75 79.6875zm0 0"}))),Object(a.d)("a",{href:"https://codepen.io/joshayoung/pens/popular"},Object(a.d)("svg",null,Object(a.d)("use",{xlinkHref:"#codepen"}))),Object(a.d)("a",{href:"https://www.linkedin.com/in/joshuayoung1"},Object(a.d)("svg",null,Object(a.d)("use",{xlinkHref:"#linkedin"}))),Object(a.d)("a",{href:"https://github.com/joshayoung"},Object(a.d)("svg",null,Object(a.d)("use",{xlinkHref:"#github"}))))},c=function(){return Object(a.d)("div",{className:"quote"},'"Nōn nōbīs, Domine, nōn nōbīs, sed nōminī tuō dā glōriam."')},l={name:"66qvyd",styles:"color:#999999;a{color:#999999;}"},d=function(){return Object(a.d)("div",{css:l},"Icons made by",Object(a.d)("a",{href:"https://www.flaticon.com/authors/freepik",title:"Freepik"},"Freepik")," and ",Object(a.d)("a",{href:"https://www.flaticon.com/authors/pixel-perfect",title:"Pixel perfect"},"Pixel perfect")," from ",Object(a.d)("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com"))},f=i(414),p=(new Date).getFullYear(),u={name:"z9mce0",styles:"background:#efefef;border-top:solid 1px #3385ff;height:125px;margin-top:-100px;padding:0 10px;padding-top:20px;@media (min-width:600px){height:80px;margin-top:-80px;}.inner{display:flex;justify-content:space-between;flex-direction:column;@media (min-width:600px){flex-direction:row;align-items:flex-end;}}.social{display:flex;justify-content:flex-end;flex-direction:column;align-items:flex-end;margin-bottom:20px;@media (min-width:600px){order:3;margin-bottom:0px;}}.quote{color:#999999;}.social a{margin:0 4px;display:inline-block;}"},m={name:"5e1w1r",styles:"display:flex;flex-direction:column;align-items:flex-end;font-size:12px;text-align:right;@media (min-width:600px){align-items:flex-start;}"},b=function(){return Object(a.d)("footer",{css:u},Object(a.d)("div",{className:"inner"},Object(a.d)("div",{className:"social"},Object(a.d)(s,null),Object(a.d)(f.a,{to:"/me"},"Josh Young - © ",p)),Object(a.d)("div",{css:m},Object(a.d)(d,null),Object(a.d)(c,null))))},h=i(423),g=Object(h.a)(f.a,{target:"e3wdn4i0"})("font-size:14px;color:",function(e){return e.color||"#000;"},";"),w=function(){return Object(a.d)("ul",{id:"js_navigation"},Object(a.d)("li",null,Object(a.d)(g,{activeClassName:"active",to:"/"},"Home")),Object(a.d)("li",null,Object(a.d)(g,{activeClassName:"active",to:"/thoughts"},"Thoughts")),Object(a.d)("li",null,Object(a.d)(g,{activeClassName:"active",to:"/projects"},"Projects")),Object(a.d)("li",null,Object(a.d)(g,{activeClassName:"active",to:"/classes"},"Classes")),Object(a.d)("li",null,Object(a.d)(g,{activeClassName:"active",to:"/certifications"},"Certs")),Object(a.d)("li",null,Object(a.d)(g,{activeClassName:"active",to:"/resume"},"Resume")),Object(a.d)("li",null,Object(a.d)(g,{activeClassName:"active",to:"/snippets"},"Snippets")),Object(a.d)("li",null,Object(a.d)(g,{activeClassName:"active",to:"/definitions"},"Definitions")),Object(a.d)("li",null,Object(a.d)(g,{activeClassName:"active",to:"/resources"},"Resources")),Object(a.d)("li",null,Object(a.d)(g,{activeClassName:"active",to:"/search"},"Search")),Object(a.d)("li",null,Object(a.d)(g,{activeClassName:"active",to:"/me"},"About")))},y=function(){return Object(a.d)("nav",{css:Object(a.c)("margin-left:100%;position:relative;left:-51px;label,#menu{display:none;}label{z-index:200;position:relative;}ul{padding-top:68px;position:fixed;background:","#3385ff",";background:#ececec;height:100%;z-index:100;width:250px;margin-top:-68px;right:-250px;animation-fill-mode:forwards;border-left:solid 3px ","#3385ff",";@media (min-width:700px){display:none;}}ul li{display:block;a.active{background:#fff;}}li:nth-of-type(2n) a{background:#e6e6e6;&.active{background:#fff;}&:hover{background:#fff;}}a{display:block;padding:10px;font-size:18px;&:hover{background:#fff;}}label{display:inline-block;font-size:34px;&:hover{cursor:pointer;}@media (min-width:700px){display:none;}}input:checked ~ ul{animation:open 0.5s ease;animation-fill-mode:forwards;}@keyframes open{from{right:-250px;}to{right:0;}}@keyframes close{from{right:0;}to{right:-250px;}}")},Object(a.d)("label",{className:"menu",htmlFor:"menu"},"☰"),Object(a.d)("input",{type:"checkbox",id:"menu"}),Object(a.d)(w,null))},k=function(e){var t=e.siteTitle;return Object(a.d)("header",null,t,Object(a.d)(y,null))};k.defaultProps={siteTitle:""};var v=k,O={name:"702a9o",styles:"font-size:52px;font-family:'Acme',sans-serif;display:block;margin-bottom:70px;span{color:#3385ff;}"},x={name:"c235h4",styles:"font-size:20px;font-style:italic;color:#3385ff;"},j=function(){return Object(a.d)(f.a,{to:"/",css:O},Object(a.d)("div",null,"Josh A",Object(a.d)("span",null,".")," Young"),Object(a.d)("div",{css:x},"{ Full Stack Software Engineer }"))},_=function(){return Object(a.d)("nav",{css:Object(a.c)("width:130px;margin:170px 10px 0 52px;display:none;@media (min-width:700px){display:block;}li{display:block;span{background:red;border-bottom:1px solid #ccc;}a{display:block;text-align:right;padding:10px;&.active{background:none;color:","#3385ff",";font-style:italic;}}}"),className:"left-nav"},Object(a.d)(w,null))},P={name:"1brijzg",styles:"margin:1rem auto;max-width:90vw;width:700px;@media (min-width:700px){border-left:1px solid #dedede;margin:0;margin-top:50px;padding-left:30px;}> p:first-of-type{line-height:2;font-size:25px;background:#eaeaea;border-bottom:1px solid #3385ff;box-shadow:1px 1px 1px #ccc;padding:0 10px;font-family:'Acme',sans-serif;&:first-letter{color:#3385ff;}}"},S=function(e){var t=e.children;return Object(a.d)("main",{css:P},t)},C=i(417),z=i(418),T={name:"uaiufo",styles:"display:none;max-width:300px;font-size:14px;padding:10px;padding-left:40px;margin-top:240px;header{font-size:20px;}@media (min-width:600px){display:block;}"},D=function(){return Object(a.d)("div",{className:"aside",css:T},Object(a.d)(C.a,null),Object(a.d)(z.a,null))};var R=function(e){var t,i;function n(){var t;return(t=e.call(this)||this).state={offScreen:!1},t.handleScroll=t.handleScroll.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}i=e,(t=n).prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i;var r=n.prototype;return r.handleScroll=function(){window.pageYOffset>200?this.setState({offScreen:!0}):this.setState({offScreen:!1})},r.closeNav=function(e){console.log("closing")},r.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll),document.body.addEventListener("click",this.closeNav(this),!1)},r.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},r.render=function(){return Object(a.d)(o.a.Fragment,null,Object(a.d)("a",{style:this.state.offScreen?{position:"fixed"}:{display:"none",position:"relative"},css:Object(a.c)("bottom:0;left:200px;display:block;background:","#3385ff",";padding:2px 10px;border-top-right-radius:2px;border-top-left-radius:2px;font-size:14px;color:#fff;&:hover{text-decoration:underline;color:#fff;}"),href:"#top"},"Go To Top"))},n}(n.Component),A={name:"2mrtec",styles:"@media (min-width:700px){display:flex;justify-content:flex-start;}"},L=function(e){var t=e.children;return Object(a.d)("div",{css:A},Object(a.d)("a",{id:"top"}),Object(a.d)(v,null),Object(a.d)(_,null),Object(a.d)(S,null,Object(a.d)(j,null),t,Object(a.d)(R,null)),Object(a.d)(D,null))},N={name:"3mx9xp",styles:"display:flex;min-height:100vh;flex-direction:column;padding-bottom:100px;"},E=function(e){var t=e.children,i=e.klass;return Object(a.d)("div",{css:N,className:i},Object(a.d)(L,{children:t}))};i(425),i(426),i(427),i(428),i(421),t.a=function(e){var t=e.children,i=e.klass,n="#3385ff";return Object(a.d)(o.a.Fragment,null,Object(a.d)(a.a,{styles:Object(a.c)("pre{white-space:pre-wrap;}code{white-space:pre-wrap;}*{box-sizing:border-box;}fieldset{border:none;}body{font-family:'Work Sans',sans-serif;font-size:18px;line-height:1.4;background-color:#f2f2f2;background-image:-webkit-linear-gradient(10deg,#efefef 50%,#f4f4f4 50%);background-image:-webkit-linear-gradient(10deg,#fff59e 50%,#f4f4f4 50%);}h1{font-size:28px;border-bottom:1px solid ",n,';&:after{content:" /";color:',n,';}&:before{content:"/ ";color:',n,";}}h3{color:",n,';font-size:1.29rem;&:before{content:"{ ";color:#b3b3b3;}&:after{content:" }";color:#b3b3b3;}}h4{margin-bottom:0;}h6{margin:10px 0;}h5{margin:10px 0;}span{font-size:14px;}a{text-decoration:none;color:#000;&:hover{color:',n,";}}ul{list-style-type:square;padding:0;margin:0 0 0 30px;font-size:14px;}li > p{margin:0;}li span:last-child{margin-left:5px;}dl{dd{margin:0 0 10px 0;font-style:italic;font-size:14px;}dt{display:inline-block;font-weight:bold;color:",n,";&:after{content:': ';}}}")}),Object(a.d)(E,{children:t,klass:i}),Object(a.d)(b,null))}},423:function(e,t,i){"use strict";i(21),i(84),i(150),i(45),i(22),i(51),i(20),i(12),i(13),i(3),i(19);var n=i(85),o=i.n(n),a=i(0),r=i(111),s=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,c=Object(r.a)(function(e){return s.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}),l=i(6),d=i(46),f=i(34),p=c,u=function(e){return"theme"!==e&&"innerRef"!==e},m=function(e){return"string"==typeof e&&e.charCodeAt(0)>96?p:u};function b(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)}return i}t.a=function e(t,i){var n,r,s;void 0!==i&&(n=i.label,s=i.target,r=t.__emotion_forwardProp&&i.shouldForwardProp?function(e){return t.__emotion_forwardProp(e)&&i.shouldForwardProp(e)}:i.shouldForwardProp);var c=t.__emotion_real===t,p=c&&t.__emotion_base||t;"function"!=typeof r&&c&&(r=t.__emotion_forwardProp);var u=r||m(p),h=!u("as");return function(){var g=arguments,w=c&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==n&&w.push("label:"+n+";"),null==g[0]||void 0===g[0].raw)w.push.apply(w,g);else{w.push(g[0][0]);for(var y=g.length,k=1;k<y;k++)w.push(g[k],g[0][k])}var v=Object(l.e)(function(e,t,i){return Object(a.createElement)(l.b.Consumer,null,function(n){var o=h&&e.as||p,c="",l=[],b=e;if(null==e.theme){for(var g in b={},e)b[g]=e[g];b.theme=n}"string"==typeof e.className?c=Object(d.a)(t.registered,l,e.className):null!=e.className&&(c=e.className+" ");var y=Object(f.a)(w.concat(l),t.registered,b);Object(d.b)(t,y,"string"==typeof o),c+=t.key+"-"+y.name,void 0!==s&&(c+=" "+s);var k=h&&void 0===r?m(o):u,v={};for(var O in e)h&&"as"===O||k(O)&&(v[O]=e[O]);return v.className=c,v.ref=i||e.innerRef,Object(a.createElement)(o,v)})});return v.displayName=void 0!==n?n:"Styled("+("string"==typeof p?p:p.displayName||p.name||"Component")+")",v.defaultProps=t.defaultProps,v.__emotion_real=v,v.__emotion_base=p,v.__emotion_styles=w,v.__emotion_forwardProp=r,Object.defineProperty(v,"toString",{value:function(){return"."+s}}),v.withComponent=function(t,n){return e(t,void 0!==n?function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?b(i,!0).forEach(function(t){o()(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):b(i).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}({},i||{},{},n):i).apply(void 0,w)},v}}},424:function(e,t,i){"use strict";var n=i(0),o=i.n(n),a=i(422),r=i(6);t.a=function(e){var t=e.children;return Object(r.d)(o.a.Fragment,null,Object(r.d)(a.a,{children:t,klass:"markdown"}))}},437:function(e,t,i){var n=i(1),o=i(11),a=i(48),r=/"/g,s=function(e,t,i,n){var o=String(a(e)),s="<"+t;return""!==i&&(s+=" "+i+'="'+String(n).replace(r,"&quot;")+'"'),s+">"+o+"</"+t+">"};e.exports=function(e,t){var i={};i[e]=t(s),n(n.P+n.F*o(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",i)}},438:function(e,t,i){"use strict";i(437)("link",function(e){return function(t){return e(this,"a","href",t)}})},474:function(e){e.exports={data:{allDefinitionsJson:{nodes:[{id:"8228567a-e988-5065-b5fe-a2e65bccc729",link:"https://en.wikipedia.org/wiki/Parameter_(computer_programming)",word:"Argument",definition:"one of the pieces of data provided as input to the subroutine"},{id:"ec513dbf-32dc-5cf3-bc23-e611a39fb9da",link:null,word:"Yagne",definition:"you ant gonna need it"},{id:"61988016-3f80-54fb-a1fd-3f3ac23bbed8",link:"https://en.wikipedia.org/wiki/Primitive_data_type",word:"Primitive Data Type",definition:"a data type provided by a programming language as a basic building block. Most languages allow more complicated composite types to be recursively constructed starting from basic types."},{id:"9c4e45bb-0377-56f3-b527-14976cbb6ac8",link:"https://en.wikipedia.org/wiki/Order_of_operations#Programming_languages",word:"Operator Precedence",definition:"is a collection of rules that reflect conventions about which procedures to perform first in order to evaluate a given mathematical expression"},{id:"ef838cae-d933-577d-9076-7f6826c14dea",link:"",word:"Idiomatic",definition:"using a programming language in a way that is typical for that language."},{id:"95fa73c8-a64a-53a8-90c7-bd14463bd515",link:"https://en.wikipedia.org/wiki/Memoization",word:"Memoization",definition:"memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again."},{id:"2d7f7615-f8c9-54d8-9305-91a11afa15e9",link:"https://en.wikipedia.org/wiki/De_Morgan%27s_laws",word:"De Morgan's laws",definition:"not (A or B) = not A and not B; and not (A and B) = not A or not B"},{id:"45cefbf1-69c3-596b-b952-d443fae10fe5",link:"https://en.wikipedia.org/wiki/Idempotence",word:"Idempotence",definition:"is the property of certain operations in mathematics and computer science whereby they can be applied multiple times without changing the result beyond the initial application."},{id:"6342fe53-3870-5790-8179-ce18eaa88eba",link:"https://en.wikipedia.org/wiki/Execution_(computing)",word:"Invoking",definition:"the specific action of a user starting (or launching or invoking) a program"},{id:"976379ac-7763-518b-b2b0-2f0c79cb3585",link:"https://en.wikipedia.org/wiki/Law_of_Demeter",word:"Law of Demeter",definition:"a given object should assume as little as possible about the structure or properties of anything else (including its subcomponents), in accordance with the principle of 'information hiding'"},{id:"71be046c-3faf-5023-832a-a3804f811ded",link:"https://en.wikipedia.org/wiki/Anonymous_function",word:"Anonymous Function",definition:"a function definition that is not bound to an identifier"},{id:"6ad82699-7709-561e-be52-b394f79be461",link:"https://en.wikipedia.org/wiki/Single_responsibility_principle",word:"Single Responsibility Principle",definition:"every module or class should have responsibility over a single part of the functionality provided by the software, and that responsibility should be entirely encapsulated by the class"},{id:"b7784a25-1133-566b-b029-2c554bfce65a",link:"https://en.wikipedia.org/wiki/Type_conversion",word:"Type Coercion",definition:"different ways of changing an entity of one data type into another ... the word coercion is used to denote an implicit conversion, either during compilation or during run time."},{id:"3374b1ee-7152-59c1-ac0d-6c5100c6401e",link:"https://en.wikipedia.org/wiki/Higher-order_function",word:"Higher-order Function",definition:"a function that does at least one of the following: takes one or more functions as arguments (i.e., procedural parameters), returns a function as its result."},{id:"021c230a-9e92-5f88-88bf-c5ecebe0d211",link:"https://en.wikipedia.org/wiki/Don%27t_repeat_yourself",word:"DRY",definition:"don't repeat yourself (DRY) is a principle of software development aimed at reducing repetition of information of all kinds"},{id:"e1c40032-1550-575f-990a-ef1d525d3096",link:"https://en.wikipedia.org/wiki/Don%27t_repeat_yourself",word:"WET",definition:"Violations of DRY are typically referred to as WET solutions, which is commonly taken to stand for either 'write everything twice', 'we enjoy typing' or 'waste everyone's time'."},{id:"9152bdf8-7924-5acf-95ed-5d5941a008b5",link:null,word:"Snake Cased",definition:"naming variables so that two words are separated with an underscore such as: 'the_variable' or 'Read_line'."},{id:"9d338716-edd3-576c-bedb-a8746cbcc1f0",link:"https://en.wikipedia.org/wiki/Open/closed_principle",word:"Open/Closed Principle",definition:"'software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification'; that is, such an entity can allow its behaviour to be extended without modifying its source code."},{id:"9ad35387-1d1b-5ec2-b9b4-a780efc2a5e0",link:"https://en.wikipedia.org/wiki/Click-through_rate",word:"Click-through Rate (CTR)",definition:"'is the ratio of users who click on a specific link to the number of total users who view a page, email, or advertisement. It is commonly used to measure the success of an online advertising campaign for a particular website as well as the effectiveness of email campaigns.'"},{id:"5de7832c-4d13-57d1-ab9b-d5ee89908cdb",link:"",word:"Soft Delete",definition:"'marking a database entry as deleted so that it no longer appears to the end user. On the backend a boolean flag is being set that prevent this entry from being shown on the frontend of the site."},{id:"8ec5e426-6f65-5185-b5c1-938d5bba2e3e",link:"https://en.wikipedia.org/wiki/Observer_pattern",word:"Observer Pattern",definition:"a software design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods."},{id:"5a82018f-58dd-5b78-bd2f-b5501f7aec9f",link:"",word:"Dyadic Form (in regard to functions)",definition:"a function that takes two arguments"},{id:"178b3040-c608-5523-bcb5-c1d52fc7973b",link:"https://en.wikipedia.org/wiki/Greenfield_project",word:"Greenfield Project",definition:"developing a system for a totally new environment, without concern for integrating with other systems, especially not legacy systems."},{id:"51393f96-3c95-52cf-8d45-1fd2bba33f81",link:"https://en.wikipedia.org/wiki/Brownfield_(software_development)",word:"Brownfield Development",definition:"problem spaces needing the development and deployment of new software systems in the immediate presence of existing (legacy) software applications/systems."},{id:"80b67c45-a108-5691-aa1b-ae89a4b32eca",link:"",word:"Monadic Form (in regard to functions)",definition:"a function that takes one argument"},{id:"4ab98ee5-1f29-5d17-9ae5-b9c719930d92",link:"https://en.wikipedia.org/wiki/Coupling_(computer_programming)#Types_of_coupling",word:"Temporal coupling",definition:"When two actions are bundled together into one module just because they happen to occur at the same time."},{id:"772f2928-8c44-5bbc-8f25-804ce18f15f4",link:"https://en.wiktionary.org/wiki/Appendix:List_of_Latin_phrases_(A%E2%80%93E)",word:"Caveat Utilitor",definition:"let the user beware"},{id:"991f438e-fad6-5019-b958-e605df5dd134",link:"https://en.wikipedia.org/wiki/Time_complexity#Linear_time",word:"Linear Time",definition:"if its time complexity is O(n). Informally, this means that for large enough input sizes the running time increases linearly with the size of the input. For example, a procedure that adds up all elements of a list requires time proportional to the length of the list."},{id:"7e9deeec-5afb-5999-920b-ff06397f646f",link:"https://en.wikipedia.org/wiki/Scope_(computer_science)#Lexical_scope_vs._dynamic_scope",word:"Lexical Scope",definition:"a variable's definition is resolved by searching its containing block or function, then if that fails searching the outer containing block, and so on"},{id:"5c473b18-8fa9-5392-b470-a8db8bd2f414",link:"https://en.wikipedia.org/wiki/Scope_(computer_science)#Lexical_scope_vs._dynamic_scope",word:"Dynamic Scope",definition:"a variable's definition is resolved by searching its ... calling function ..., then the function which called that calling function, and so on, progressing up the call stack"},{id:"8fb62853-85d9-5a4a-bec9-4c306688e4ab",link:"https://en.wikipedia.org/wiki/Binary_function",word:"Binary Function",definition:"a function that takes two inputs"},{id:"d3d3a14c-95e6-5aad-9e62-447f585df7fc",link:"https://en.wikipedia.org/wiki/Encapsulation_(computer_programming)",word:"Encapsulation",definition:"a language mechanism for restricting direct access to some of the object's components"},{id:"c0007799-49a2-55e7-a7d9-04c3a642d450",link:"https://en.wikipedia.org/wiki/Heisenbug",word:"Heisenbug",definition:"a software bug that seems to disappear or alter its behavior when one attempts to study it"},{id:"4dd4c7e3-eb19-5b6f-9b31-381d221ac517",link:"",word:"Invocation Operator",definition:"The two parenthesis next to a function name when you invoke it."},{id:"8ae0564f-5a6e-52c2-9b25-22dc71c74a1c",link:"https://en.wikipedia.org/wiki/Lambda_expression",word:"Lambda Expression",definition:"a function (or a subroutine) defined, and possibly called, without being bound to an identifier"},{id:"435d8f22-f350-5bc8-a507-9e4b16caa66f",link:"https://en.wikipedia.org/wiki/Tail_call",word:"Tail Recursion",definition:"the same subroutine being called again later in the call chain"},{id:"dfa795a2-a6cf-5479-86d7-988ba72e3714",link:"https://en.wikipedia.org/wiki/Parameter_(computer_programming)",word:"Parameter",definition:"An ordered list of parameters is usually included in the definition of a subroutine, so that, each time the subroutine is called, its arguments for that call can be assigned to the corresponding parameters."},{id:"159125ea-3d65-51d3-ab7b-61ccc3727b90",link:"https://en.wikipedia.org/wiki/Polymorphism_(computer_science)",word:"Polymorphism",definition:"when a name denotes instances of many different classes related by some common superclass"},{id:"df5f7254-1a8e-5be5-8c78-a23a35a394a2",link:"https://en.wikipedia.org/wiki/Tail_call",word:"Tail Call",definition:"a subroutine call performed as the final action of a procedure"},{id:"f2d2266c-35e5-5b79-88b4-4d17fe418853",link:"https://en.wikipedia.org/wiki/Transitive_relation",word:"Transitive Relation",definition:"an element a is related to an element b, and b is in turn related to an element c, then a is also related to c"},{id:"d7a887f9-9d29-5a57-b116-929928485914",link:"https://en.wikipedia.org/wiki/Unary_function",word:"Unary Function",definition:"a function that takes one argument"},{id:"29f3cccb-8a8c-53d2-a390-f2836fbf6b3f",link:"https://en.wikipedia.org/wiki/Predicate_(mathematical_logic)",word:"Predicate",definition:"a Boolean-valued function P: X→ {true, false}"},{id:"255f5da7-4867-571c-8048-d36ae13ba286",link:"https://en.wikipedia.org/wiki/Conway%27s_law",word:"Conway's Law",definition:"organizations which design systems ... are constrained to produce designs which are copies of the communication structures of these organizations"}]}}}}}]);
//# sourceMappingURL=component---src-pages-definitions-md-a9d11f4176b83c77b471.js.map