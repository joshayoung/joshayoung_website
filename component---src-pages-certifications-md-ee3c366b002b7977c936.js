(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9eSz":function(e,t,a){"use strict";var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),o=i(a("VbXa")),s=i(a("8OQS")),l=i(a("pVnL")),c=i(a("q1tI")),d=i(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(O&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,i=b(t||a||[]);return i&&i.src},b=function(e){if(O&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),g=function(e){var t=u(e),a=p(t);return h[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,O="undefined"!=typeof window,y=O&&window.IntersectionObserver,j=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},i&&c.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),a&&c.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function v(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:i})}))}function C(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:i})}))}function I(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var x=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(j.has(e.target)){var t=j.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),j.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),j.set(e,t)),function(){a.unobserve(e),j.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+c+o+s+a+i+t+n+r+l+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=c.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,n=e.spreadProps,o=e.ariaHidden,s=c.default.createElement(T,(0,l.default)({ref:t,src:a},n,{ariaHidden:o}));return i.length>1?c.default.createElement("picture",null,r(i),s):s})),T=c.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,o=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,b=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,l.default)({"aria-hidden":p,sizes:a,srcSet:i,src:r},b,{onLoad:o,onError:d,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));T.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var E=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=O&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&y&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||O&&(m||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:O}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=x(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=p(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,h=e.fluid,g=e.fixed,m=e.backgroundColor,O=e.durationFadeIn,y=e.Tag,j=e.itemProp,v=e.loading,I=e.draggable,x=h||g;if(!x)return null;var E=!1===this.state.fadeIn||this.state.imgLoaded,P=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,l.default)({opacity:E?1:0,transition:P?"opacity "+O+"ms":"none"},s),z="boolean"==typeof m?"lightgray":m,R={transitionDelay:O+"ms"},W=(0,l.default)({opacity:this.state.imgLoaded?0:1},P&&R,s,f),_={title:t,alt:this.state.isVisible?"":a,style:W,className:p,itemProp:j},H=this.state.isHydrated?b(x):x[0];if(h)return c.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},c.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),z&&c.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},P&&R)}),H.base64&&c.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:_,imageVariants:x,generateSources:C}),H.tracedSVG&&c.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:_,imageVariants:x,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,w(x),c.default.createElement(T,{alt:a,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:j,loading:v,draggable:I})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:a,title:t,loading:v},H,{imageVariants:x}))}}));if(g){var V=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:H.width,height:H.height},n);return"inherit"===n.display&&delete V.display,c.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(H.srcSet)},z&&c.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:z,width:H.width,opacity:this.state.imgLoaded?0:1,height:H.height},P&&R)}),H.base64&&c.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:_,imageVariants:x,generateSources:C}),H.tracedSVG&&c.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:_,imageVariants:x,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,w(x),c.default.createElement(T,{alt:a,title:t,width:H.width,height:H.height,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:j,loading:v,draggable:I})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:a,title:t,loading:v},H,{imageVariants:x}))}}))}return null},t}(c.default.Component);E.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var P=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),N=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});function z(e){return function(t,a,i){var r;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+i+"`, but their values are both `undefined`.");d.default.checkPropTypes(((r={})[a]=e,r),t,"prop",i)}}E.propTypes={resolutions:P,sizes:N,fixed:z(d.default.oneOfType([P,d.default.arrayOf(P)])),fluid:z(d.default.oneOfType([N,d.default.arrayOf(N)])),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var R=E;t.default=R},IV1k:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return O})),a.d(t,"default",(function(){return w}));var i=a("wx14"),r=a("zLVn"),n=a("q1tI"),o=a.n(n),s=a("7ljp"),l=a("XOS9"),c=a("Wbzz"),d=a("9eSz"),u=a.n(d),f=a("qKvR"),p=function(e){return Object(f.d)(c.b,{query:"1022643890",render:function(t){var a=t.images.edges.find((function(t){return t.node.relativePath.includes(e.filename)}));return a?Object(f.d)(u.a,{alt:e.alt,fluid:a.node.childImageSharp.fluid}):null}})},b={name:"k008qs",styles:"display:flex;"},h={name:"17z2vgo",styles:"flex:23%;padding-right:10px;"},g={name:"m6t2v7",styles:"flex:77%;"},m=function(e){var t=e.logo,a=e.link,i=e.children;return Object(f.d)(o.a.Fragment,null,Object(f.d)("div",{css:b},t?Object(f.d)("div",{css:h},Object(f.d)(p,{filename:t})):"",Object(f.d)("div",{css:g},i)),Object(f.d)("div",null,Object(f.d)("a",{href:a},"About Certification")))},O={},y={_frontmatter:O},j=l.a;function w(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(s.b)(j,Object(i.a)({},y,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",null,"My Certifications"),Object(s.b)("p",null,"Below I have included a list of certifications that I have attained over the past few years.\nMany of these certs required passing more than one test. I have included a short summary of each certification along with a link to a better explanation of each one. See all of my current CompTIA certs listed ",Object(s.b)("a",{href:"https://www.youracclaim.com/users/joshua-young.5eb07482/badges"},"here")," as well."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"#comptia-security"}),"CompTIA Security+")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"#ceh"}),"Certified Ethical Hacker (C|EH)")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"#pce"}),"Zend Certified PHP Engineer (ZCPE)")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"#network"}),"CompTIA Network+")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"#professional"}),"CIW Web Development Professional")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"#database"}),"CIW Database Design Specialist")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"#perl"}),"CIW Perl Specialist")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"#javascript"}),"CIW JavaScript Specialist")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"#linux"}),"CompTIA Linux+")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"#suse"}),"SUSE Certified Linux Administrator 11")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"#lpci"}),"LPIC-1")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object(i.a)({parentName:"li"},{href:"#aplus"}),"CompTIA A+"))),Object(s.b)("h3",null,Object(s.b)("a",{name:"comptia-security"}),"CompTIA Security+"),Object(s.b)(m,{logo:"resized/SecurityPlus_Logo_Certified_CE.png",link:"https://certification.comptia.org/certifications/security",mdxType:"Cert"},"The CompTIA Security+ certification addressed many IT security subjects such as: cryptography, network security, compliance, threats, access control, etc. This was a very good introduction to security subjects as they relate to computers and networks."),Object(s.b)("hr",null),Object(s.b)("h3",null,Object(s.b)("a",{name:"ceh"}),"Certified Ethical Hacker (C|EH)"),Object(s.b)(m,{logo:"changed_format/CEH_logo.png",link:"https://www.eccouncil.org/Certification/certified-ethical-hacker",mdxType:"Cert"},"The Certified Ethical Hacker certification covered many areas of computer security including: footprinting, scanning, enumeration, penetration testing, SQL injection, etc. By gaining a better understanding of the tactics use by ethical hackers, I acquired valuable information to facilitate building better defenses and more secure web applications."),Object(s.b)("hr",null),Object(s.b)("h3",null,Object(s.b)("a",{name:"pce"}),"Zend Certified PHP Engineer (ZCPE)"),Object(s.b)(m,{link:"https://www.zend.com/en/services/certification/php-certification",mdxType:"Cert"},"The Zend Certified PHP Engineer certification required exhaustive knowledge of the PHP language. Many of the areas that were tested included: functions, arrays, object oriented programming, security, strings, program logic, error detection, debugging, etc."),Object(s.b)("p",null,Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.zend.com/en/yellow-pages/ZEND024785"}),"Josh Young - ZCPE")),Object(s.b)("hr",null),Object(s.b)("h3",null,Object(s.b)("a",{name:"network"}),"CompTIA Network+"),Object(s.b)(m,{logo:"resized/NetworkPlus_Logo_Certified_CE.png",link:"https://certification.comptia.org/certifications/network",mdxType:"Cert"},"The CompTIA Network+ certification required knowledge in many network related areas. Here are a few of the subjects covered: routing, network topologies, virtualization, network segmentation, switch port security, user authentication, firewalls, network access control, etc."),Object(s.b)("hr",null),Object(s.b)("h3",null,Object(s.b)("a",{name:"professional"}),"CIW Web Development Professional"),Object(s.b)(m,{link:"http://www.ciwcertified.com/certifications/Web_Development_Series/development.php",mdxType:"Cert"},"The CIW Web Development Professional certification was awarded as a result of achieving the following certifications: CIW JavaScript Specialist, CIW Perl Specialist, and CIW Database Design Specialist."),Object(s.b)("hr",null),Object(s.b)("h3",null,Object(s.b)("a",{name:"database"}),"CIW Database Design Specialist"),Object(s.b)(m,{link:"http://www.ciwcertified.com/Certifications/Web_Development_Series/database_design.php",mdxType:"Cert"},"The CIW Database Design Specialist certification covered many areas of database design and optimization including: planning, relational algebra, design methodology, normalization, Structured Query Language (SQL), database security, etc."),Object(s.b)("hr",null),Object(s.b)("h3",null,Object(s.b)("a",{name:"perl"}),"CIW Perl Specialist"),Object(s.b)(m,{link:"http://www.ciwcertified.com/Certifications/Web_Development_Series/perl.php",mdxType:"Cert"},"The CIW Perl Specialist certification required knowledge in the following areas of the Perl language: loops, regular expressions, the interpreter, hashes, subroutines, reading/writing data, modules, object oriented programming techniques, database interaction, debugging, etc."),Object(s.b)("hr",null),Object(s.b)("h3",null,Object(s.b)("a",{name:"javascript"}),"CIW JavaScript Specialist"),Object(s.b)(m,{link:"http://www.ciwcertified.com/Certifications/Web_Development_Series/javascript.php",mdxType:"Cert"},"The CIW JavaScript Specialist certification covered the JavaScript language including topics such as: program flow, debugging, validation, DOM manipulation, libraries, AJAX, JavaScript security, libraries, etc."),Object(s.b)("hr",null),Object(s.b)("h3",null,Object(s.b)("a",{name:"linux"}),"CompTIA Linux+"),Object(s.b)(m,{logo:"resized/LinuxPlus_Logo_Certified.png",link:"https://certification.comptia.org/certifications/linux",mdxType:"Cert"},"The CompTIA Linux+ certification required a very thorough knowledge of Linux. Here are just a few of the knowledge areas: file systems, run levels, package management, file management, process manipulation, command line regular expressions, scripting, security, shells, network configuration, and scheduled task configuration."),Object(s.b)("hr",null),Object(s.b)("h3",null,Object(s.b)("a",{name:"suse"}),"SUSE Certified Linux Administrator 11"),Object(s.b)(m,{logo:"resized/cert_linux_admin_11_half.png",link:"https://training.suse.com/certification/sca-linux",mdxType:"Cert"},"This SUSE cert was attained through passing a Linux exam. This certification validates my skill for SUSE Linux 11."),Object(s.b)("hr",null),Object(s.b)("h3",null,Object(s.b)("a",{name:"lpci"}),"LPIC-1"),Object(s.b)(m,{link:"https://certification.comptia.org/certifications/linux",mdxType:"Cert"},"The LPIC-1 certification was all about Linux fundamentals. It covered many Linux areas including: symbolic links, permissions, disk management, file system integrity, process execution, GNU commands, libraries, boot loader configuration, etc."),Object(s.b)("p",null,Object(s.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.lpi.org/certification/get-certified-lpi/lpic-1-linux-server-professional"}),"About LPIC Certification")),Object(s.b)("hr",null),Object(s.b)("h3",null,Object(s.b)("a",{name:"aplus"}),"CompTIA A+"),Object(s.b)(m,{logo:"resized/Aplus_Logo_Certified_CE.png",link:"https://certification.comptia.org/certifications/a",mdxType:"Cert"},"The CompTIA A+ certification required knowledge in many areas of computer hardware including: BIOS configuration, motherboards, RAM, installation and configuration of computers and peripherals, network cable types, TCP/IP, TCP/UDP ports, networking tools, and troubleshooting."))}w.isMDXComponent=!0},XOS9:function(e,t,a){"use strict";var i=a("q1tI"),r=a.n(i),n=a("Bl7J"),o=a("qKvR");t.a=function(e){var t=e.children;return Object(o.d)(r.a.Fragment,null,Object(o.d)(n.a,{children:t,klass:"markdown"}))}},zLVn:function(e,t,a){"use strict";function i(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return i}))}}]);
//# sourceMappingURL=component---src-pages-certifications-md-ee3c366b002b7977c936.js.map