"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[203],{2570:function(e,t,n){var o=n(7294),i=n(1800),a=n(3431);t.Z=e=>{let{children:t}=e;return(0,a.tZ)(o.Fragment,null,(0,a.tZ)(i.Z,{children:t,klass:"markdown"}))}},3730:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return Z},default:function(){return O}});var o=n(7462),i=n(4925),a=n(7294),r=n(4983),l=n(2570),s=n(1082);var u=()=>(0,s.K2)("3418027259").allPodcastsJson.nodes.map((e=>({id:e.id,title:e.title,url:e.url,display:e.display}))),d=n(3431),h=e=>{let{podcast:t}=e;return(0,d.tZ)("ul",null,function(e){if(!0===e.display)return(0,d.tZ)("li",null,(0,d.tZ)("a",{href:e.url},e.title))}(t))},p=()=>{const e=u();return(0,d.tZ)("ul",null,e.map((e=>(0,d.tZ)(h,{key:e.id,podcast:e}))))};var c=()=>(0,s.K2)("1496094863").allPodcastsRecommendedJson.nodes.map((e=>({id:e.id,title:e.title,url:e.url,display:e.display}))),m=()=>{const e=c();return(0,d.tZ)("ul",null,e.map((e=>(0,d.tZ)(h,{key:e.id,podcast:e}))))};var y=e=>{let{title:t,post:n}=e;return(0,d.tZ)(a.Fragment,null,(0,d.tZ)("h5",null,t),(0,d.tZ)("ul",null,n.map(((e,t)=>(0,d.tZ)("div",{key:t},function(e){return e.display?(0,d.tZ)("li",null," ",function(e){let t="";return t=e.short_title?e.short_title:e.title,t}(e)," ",function(e){return e.truncated_authors?" by "+e.truncated_authors:""!==e.author?" by "+e.author:void 0}(e)," "):null}(e))))))};var f=()=>(0,s.K2)("3315511679").allBooksJson.nodes.map((e=>({hide_list:e.hide_from_recommended,id:e.id,title:e.title,data:e.data}))),k=()=>{const e=f();return(0,d.tZ)(a.Fragment,null,e.map((e=>(0,d.tZ)(y,{key:e.id,title:e.title,post:e.data}))))},g=n(1721);let b=function(e){function t(){return e.apply(this,arguments)||this}(0,g.Z)(t,e);var n=t.prototype;return n.author=function(e){return e.truncated_authors?" by "+e.truncated_authors:""!==e.author?" by "+e.author:void 0},n.bookTitle=function(e){return e.short_title?(0,d.tZ)(a.Fragment,null,e.short_title,this.author(e)):(0,d.tZ)(a.Fragment,null,e.title,this.author(e))},n.theBook=function(e,t){if(e.display&&!0===e.recommend)return(0,d.tZ)("li",{key:t},this.bookTitle(e))},n.message=function(){if(!0!==this.props.hide)return(0,d.tZ)(a.Fragment,null,(0,d.tZ)("h5",null,this.props.title),(0,d.tZ)("ul",null,this.props.post.map(((e,t)=>this.theBook(e,t)))))},n.render=function(){return(0,d.tZ)(a.Fragment,null,this.message())},t}(a.Component);var w=b,v=()=>{const e=f();return(0,d.tZ)(a.Fragment,null,e.map((e=>(0,d.tZ)(w,{key:e.id,id:e.id,title:e.title,hide:e.hide_list,post:e.data}))))};const I=["components"],Z={},_={_frontmatter:Z},j=l.Z;function O(e){let{components:t}=e,n=(0,i.Z)(e,I);return(0,r.kt)(j,(0,o.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",null,"About Me"),(0,r.kt)("p",null,"My name is Josh Young. I am a web developer living and working in Nashville, Tennessee. I enjoy all things tech related. I am not a huge blogger, but I enjoy writing small posts about what I am currently working with or technologies that I am using. Maybe something I say here will help someone in their journey, or at the very least provide a central place for me to document what I have learned when working through new projects."),(0,r.kt)("h3",null,"My Job"),(0,r.kt)("p",null,"For my day job, I develope web APIs and mobile applications for my employer,\n",(0,r.kt)("a",{parentName:"p",href:"https://www.nfib.com/"},"National Federation of Independent Business"),'. In a typical day, I work primarily with Xamarin/Maui, C#, and ASP.NET and their accompanying technologies such as build tools, testing frameworks, and the like. I primarily write "Line-of-Business" Applications (Enterprise Software Development).'),(0,r.kt)("p",null,"In the past, I have had the opportunity to work with many technologies including, but not limited to: PHP, Laravel, Objective-C, Ruby, JavaScript, and Python. On the ",(0,r.kt)("a",{parentName:"p",href:"/resume"},"resume")," portion of this site, I have listed some of my job duties in more detail."),(0,r.kt)("h3",null,(0,r.kt)("a",{id:"hobbies"})," Hobbies"),(0,r.kt)("p",null,"Many of my hobbies relate to technology and development. I enjoy coding and designing web applications and web sites. When it comes to web development, I enjoy the whole stack from front end to back end. Therefore, I spend a significant amount of my free time keeping up with and learning the latest languages and frameworks. When possible, I try to implement this additional knowledge into the software stack that I use at work."),(0,r.kt)("p",null,"I also spend some of my free time maintaining my home network, firewall, file server, git server, among other open-source applications. I enjoy Linux and FreeBSD so I spend time configuring these systems in my free time as well. As evident by some of my certifications and training, I also dabble in computer security. A good working knowledge of computer security and specifically web application security is very helpful as a web developer. If I am not working on servers or code, I spend my time playing my harmonica, biking, reading, or researching nutrition."),(0,r.kt)("h3",null,(0,r.kt)("a",{id:"podcasts"}),"Recommended Podcasts"),(0,r.kt)("p",null,"Below I have listed the tech podcasts that I currently listen to or have listened to in the past. Podcasts are a great way to keep up with the latest changes in development. Hopefully this list will introduce a good podcast to someone who enjoys learning and keeping up with the latest changes in tech."),(0,r.kt)(p,{mdxType:"PodcastOutput"}),(0,r.kt)("h3",null,(0,r.kt)("a",{id:"podcast_episodes"}),"Great Podcast Episodes"),(0,r.kt)(m,{mdxType:"PodcastRecommendOutput"}),(0,r.kt)("h3",null,(0,r.kt)("a",{id:"books"}),"Books I've Read"),(0,r.kt)("p",null,"Frequently, I try to delve deeper into specific aspects of tech that I want to learn more about. I find that buying a book about a particular technology can be a beneficial deep-dive experience. Below I have listed some of the books I have read over the years, which have contributed to where I am today (listed in alphabetical order and categorized below)."),(0,r.kt)(k,{mdxType:"BooksOutput"}),(0,r.kt)("h3",null,(0,r.kt)("a",{id:"books_i_recommend"}),"Books I Recommend"),(0,r.kt)("p",null,"Of the software engineering, networking, security, and design books that I listed above, these are some of the books that I highly recommend."),(0,r.kt)(v,{mdxType:"BooksRecommendedOutput"}))}O.isMDXComponent=!0},4925:function(e,t,n){function o(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.d(t,{Z:function(){return o}})}}]);
//# sourceMappingURL=component---src-pages-me-md-3429d446edc17e153aec.js.map