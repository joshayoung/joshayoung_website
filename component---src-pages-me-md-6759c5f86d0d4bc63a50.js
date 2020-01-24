(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{404:function(t,e,a){"use strict";a.r(e);a(24),a(12),a(13),a(3),a(19);var l=a(0),n=a.n(l),r=a(84),i=a(421),o=a(445),d=function(){return o.data.allPodcastsJson.nodes.map(function(t){return{id:t.id,title:t.title,url:t.url,display:t.display}})},u=a(6),s=function(t){var e=t.podcast;return Object(u.d)("div",{key:e.id},!0===e.display?Object(u.d)("li",null,Object(u.d)("a",{href:e.url},e.title)):"")},c=function(){var t=d();return Object(u.d)("ul",null,t.map(function(t){return Object(u.d)(s,{podcast:t})}))},h=a(446),p=function(){return h.data.allPodcastsRecommendedJson.nodes.map(function(t){return{id:t.id,title:t.title,url:t.url,display:t.display}})},m=function(){var t=p();return Object(u.d)("ul",null,t.map(function(t){return Object(u.d)(s,{podcast:t})}))},b=function(t){var e=t.title,a=t.post;return Object(u.d)(n.a.Fragment,null,Object(u.d)("h5",null,e),Object(u.d)("ul",null,a.map(function(t,e){return Object(u.d)("li",{key:e},t.display?Object(u.d)(n.a.Fragment,null,t.short_title?Object(u.d)(n.a.Fragment,null,t.short_title):Object(u.d)(n.a.Fragment,null,t.title),(a=t).truncated_authors?" by"+a.truncated_authors:""!==a.author?" by "+a.author:void 0):"");var a})))},y=a(447),f=function(){return y.data.allBooksJson.nodes.map(function(t){return{hide_list:t.hide_from_recommended,id:t.id,title:t.title,data:t.data}})},w=function(){var t=f();return Object(u.d)(n.a.Fragment,null,t.map(function(t){return Object(u.d)(b,{key:t.id,title:t.title,post:t.data})}))},g=function(t){var e=t.title,a=t.hide,l=t.post;return Object(u.d)(n.a.Fragment,null,!0!==a?Object(u.d)(n.a.Fragment,null,Object(u.d)("h5",null,e),Object(u.d)("ul",null,l.map(function(t,e){return Object(u.d)(n.a.Fragment,null,t.display&&!0===t.recommend?Object(u.d)("li",{key:e},t.short_title?Object(u.d)(n.a.Fragment,null,t.short_title):Object(u.d)(n.a.Fragment,null,t.title),(a=t).truncated_authors?" by"+a.truncated_authors:""!==a.author?" by "+a.author:void 0):"");var a}))):"")},_=function(){var t=f();return Object(u.d)(n.a.Fragment,null,t.map(function(t){return Object(u.d)(g,{key:t.id,title:t.title,hide:t.hide_list,post:t.data})}))};function v(){return(v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(t[l]=a[l])}return t}).apply(this,arguments)}a.d(e,"_frontmatter",function(){return k}),a.d(e,"default",function(){return S});var k={},O={_frontmatter:k},j=i.a;function S(t){var e=t.components,a=function(t,e){if(null==t)return{};var a,l,n={},r=Object.keys(t);for(l=0;l<r.length;l++)a=r[l],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,["components"]);return Object(r.b)(j,v({},O,a,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h1",null,"About Me"),Object(r.b)("p",null,"My name is Josh Young. I am a web developer living and working in Franklin, Tennessee. I enjoy all things tech related. I am not a huge blogger, but I enjoy writing small posts about what I am currently  working with or technologies that I am using. Maybe something I say here will help someone in their journey; or at the very least provide a central place for me to document what I have learned when working through new projects."),Object(r.b)("h3",null,"My Job"),Object(r.b)("p",null,"For my day job, I maintain web applications, websites, other apps for my employer,\n",Object(r.b)("a",v({parentName:"p"},{href:"https://www.daveramsey.com"}),"Ramsey Solutions"),". In a typical day, I work primarily with Rails, Ruby, CSS, SASS, JavaScript and their accompanying technologies such as build tools, testing frameworks, and the like."),Object(r.b)("p",null,"In the past, I have had the opportunity to work with many technologies including, but not limited to: PHP, Laravel, Objective-C, C#, ASP.NET and Python. On the ",Object(r.b)("a",v({parentName:"p"},{href:"/resume"}),"resume")," portion of this site, I have listed some of my job duties in more detail."),Object(r.b)("h3",null,Object(r.b)("a",{id:"hobbies"})," Hobbies"),Object(r.b)("p",null,"Many of my hobbies relate to technology and development. I enjoy coding and designing web applications and web sites. When it comes to web development, I enjoy the whole stack from front end to back end. Therefore, I spend a significant amount of my free time keeping up with and learning the latest languages and frameworks. When possible, I try to implement this additional knowledge into the software stack that I use at work."),Object(r.b)("p",null,"I also spend some of my free time maintaining my home network, firewall, file server, git server, among other open-source applications. I enjoy Linux and FreeBSD so I spend time configuring these systems in my free time as well. As evident by some of my certifications and training, I also dabble in computer security. A good working knowledge of computer security and specifically web application security is very helpful as a web developer. If I am not working on servers or code, I spend my time playing my harmonica, biking, reading, or researching nutrition."),Object(r.b)("h3",null,Object(r.b)("a",{id:"podcasts"}),"Recommended Podcasts"),Object(r.b)("p",null,"Below I have listed the tech podcasts that I currently listen to or have listened to in the past. Podcasts are a great way to keep up with the latest changes in development. Hopefully this list will introduce a good podcast to someone who enjoys learning and keeping up with the latest changes in tech."),Object(r.b)(c,{mdxType:"PodcastOutput"}),Object(r.b)("h3",null,Object(r.b)("a",{id:"podcast_episodes"}),"Great Podcast Episodes"),Object(r.b)(m,{mdxType:"PodcastRecommendOutput"}),Object(r.b)("h3",null,Object(r.b)("a",{id:"books"}),"Books I've Read"),Object(r.b)("p",null,"Frequently, I try to delve deeper into specific aspects of tech that I want to learn more about. I find that buying a book about a particular technology can be a beneficial deep-dive experience. Below I have listed some of the books I have read over the years which have contributed to where I am today (listed in alphabetical order and categorized below)."),Object(r.b)(w,{mdxType:"BooksOutput"}),Object(r.b)("h3",null,Object(r.b)("a",{id:"books_i_recommendend"}),"Books I Recommend"),Object(r.b)("p",null,"Of the software engineering, networking, security, and design books that I listed above, these are some of the books that I highly recommend."),Object(r.b)(_,{mdxType:"BooksRecommendedOutput"}))}S.isMDXComponent=!0},445:function(t){t.exports={data:{allPodcastsJson:{nodes:[{id:"a67746f6-89cc-5f9e-a294-92fa04c4448e",title:"Full Stack Radio",url:"http://www.fullstackradio.com",display:!0},{id:"f6979a67-5486-5cd1-a6e6-0c893dc42afb",title:"Coding Blocks",url:"https://www.codingblocks.net",display:!0},{id:"bfa0372f-fa02-5c9f-8d06-c1ee699c2509",title:"BSD Now",url:"https://www.bsdnow.tv/episodes",display:!0},{id:"256e7b7a-fb13-5dc0-9505-6f05f4a8a9ef",title:"The Bike Shed",url:"http://bikeshed.fm",display:!0},{id:"0b4a7f9b-2ed6-5072-bf8b-3913ba423a3b",title:"Giant Robots Smashing Into Other Giant Robots",url:"http://giantrobots.fm/",display:!0},{id:"61b3d1a9-21ac-5d3f-9f87-fd9c8acc2f45",title:"Ruby on Rails Podcast",url:"http://5by5.tv/rubyonrails",display:!0},{id:"4d9ceb42-71be-5589-8cad-67aec035fc0e",title:"Ruby Rogues",url:"https://devchat.tv/ruby-rogues",display:!0},{id:"32188fad-e758-508f-824e-a529ab66b83c",title:"The Ruby Testing Podcast",url:"https://www.codewithjason.com/ruby-testing-podcast/",display:!0},{id:"458d79dd-9fd9-5baf-9d41-07bc5fe2d64d",title:".NET Rocks",url:"https://www.dotnetrocks.com",display:!0},{id:"382749f4-72d8-5af3-bd54-25aeefd7d194",title:"Command Line Heroes",url:"https://www.redhat.com/en/command-line-heroes",display:!0},{id:"27af4c75-a01b-5fa8-855a-463054182b96",title:"Software Engineering Daily",url:"https://softwareengineeringdaily.com",display:!0},{id:"9812f0e1-cd26-5a85-a9ba-a78fc5a9ce65",title:"Syntax",url:"https://syntax.fm",display:!0},{id:"0246b0d4-dcca-5c42-a6dd-2e307dc5da84",title:"Security Now",url:"https://twit.tv/shows/security-now",display:!0},{id:"91ee8902-cf73-57b5-93cf-8ea4f3b3f245",title:"Packet Pushers Datanauts",url:"http://packetpushers.net/series/datanauts-podcast",display:!0},{id:"0204eaef-cc69-54b8-be81-9f6fe3735c9c",title:"CTRL+CLICK CAST",url:"https://ctrlclickcast.com/episodes/archive",display:!0},{id:"c93e2201-b895-5d6c-8c07-6b72b283cb57",title:"CodePen Radio",url:"https://blog.codepen.io/radio",display:!0},{id:"7c62d64b-b835-50fc-86a1-a0e468facadc",title:"The Big Web Show",url:"http://5by5.tv/bigwebshow",display:!0},{id:"4068c3ec-3130-56a8-b748-9bfa4d5a3131",title:"A Responsive Web Design Podcast",url:"https://responsivewebdesign.com/podcast",display:!0},{id:"403b01c2-38dc-50b2-8141-c853cf188314",title:"FLOSS Weekly",url:"https://twit.tv/shows/floss-weekly",display:!0},{id:"3194a610-44bd-53ed-ab36-50d9312d2655",title:"Front End Happy Hour",url:"http://frontendhappyhour.com",display:!0},{id:"bca454a0-6ebd-5e45-bd38-57bec1dd6bae",title:"JavaScript Jabber",url:"https://devchat.tv/js-jabber",display:!0},{id:"7fb7eef6-b90c-5b44-b796-58e2a1b2cb77",title:"The Laracasts Snippet",url:"https://laracasts.simplecast.fm/",display:!0},{id:"d7ece9f5-73c1-5164-bee1-f74de7940661",title:"The Laravel Podcast",url:"http://www.laravelpodcast.com",display:!0},{id:"5aa1fee2-257a-5174-a42c-5e00b8a90f0d",title:"Ask Noah",url:"http://www.jupiterbroadcasting.com/show/asknoah",display:!0},{id:"ebd3267b-cc99-5607-a90e-940c306a079e",title:"Linux Action News",url:"http://www.jupiterbroadcasting.com/show/linux-action-news",display:!0},{id:"f9e07d81-1a07-5657-a009-84c88d6e1d46",title:"Request for Commits",url:"https://changelog.com/rfc",display:!0},{id:"f8e8f6c5-0495-5df0-b58e-f21ade90a60b",title:"Presentable",url:"https://www.relay.fm/presentable",display:!0},{id:"03a4278e-4985-5b72-8cd8-6fd5b06e24b4",title:"The PHP Roundtable",url:"https://www.phproundtable.com",display:!0},{id:"c1ed8b3d-65cd-5a88-8a61-979b21bdfcb3",title:"TechSNAP",url:"http://www.jupiterbroadcasting.com/show/techsnap",display:!0},{id:"f273b6f6-2df1-53d4-a25c-fa86d87cb832",title:"Scale Your Code Podcast",url:"https://itunes.apple.com/us/podcast/scale-your-code-podcast/id987253051?mt=2",display:!0},{id:"c1addeeb-840c-5378-b222-57b37faa526c",title:"ShopTalk Show",url:"http://shoptalkshow.com",display:!0},{id:"5513e257-87fa-530a-a1ce-ac7aafa93900",title:"The Web Ahead",url:"http://5by5.tv/webahead",display:!0},{id:"e37d8e31-ad94-5299-82ac-19e1f7afd887",title:"Toolsday",url:"http://www.toolsday.io/#episode-area",display:!0},{id:"388a4f9d-bbdb-5320-80ed-3c02ada7e415",title:"The Changelog",url:"https://changelog.com/podcast",display:!0}]}}}},446:function(t){t.exports={data:{allPodcastsRecommendedJson:{nodes:[{id:"61b5a7a8-b54b-5097-bb65-86cadb25a859",title:"Aaron Gustafson - Semantic HTML: The Hard Parts",url:"http://www.fullstackradio.com/118",display:!0},{id:"e01e28e1-810d-5656-a6ac-93c1c529da26",title:"Keeping Systems Simple",url:"https://www.jupiterbroadcasting.com/131156/keeping-systems-simple-techsnap-403",display:!0},{id:"4df89a07-aa2a-592e-8d1b-23b858840a45",title:"Dockerized Development Environments with Julian Fahrer",url:"https://devchat.tv/ruby-rogues/rr-426-dockerized-development-environments-with-julian-fahrer",display:!0},{id:"f2f86d85-ae7b-5596-9561-41aae611ed83",title:"Ben Orenstein - Outside-in TDD and Dependency Injection in Rails",url:"http://www.fullstackradio.com/27",display:!0},{id:"20a2e60f-93b2-542d-8b46-fc4f57ad4440",title:"Sorbet, a Type Checker for Ruby with Paul Tarjan",url:"https://devchat.tv/ruby-rogues/rr-427-sorbet-a-type-checker-for-ruby-with-paul-tarjan/",display:!0},{id:"483ae99f-80f5-5c43-bfe0-ce6e4ad8ba1b",title:"Microservices and Storyscript with Steve Peak",url:"https://devchat.tv/ruby-rogues/rr-419-microservices-and-storyscript-with-steve-peak/",display:!0},{id:"1f6e68c9-188e-552d-a54f-92ef7155d7d6",title:"Teaching and Learning with Sandi Metz",url:"https://www.techdoneright.io/69",display:!0},{id:"20e4f06f-1cce-52d1-9960-4918f1fd9270",title:"I'm Not a Lawyer, But...",url:"https://bikeshed.fm/episodes/211",display:!0},{id:"1f72a06a-f1b3-56bf-90fb-357e7c763252",title:"Ben Orenstein - Our All-Time Favorite Refactorings",url:"http://www.fullstackradio.com/78",display:!0},{id:"09d44764-b59e-5739-8ac8-791b701baff6",title:"Documenting Your Code",url:"https://devchat.tv/ruby-rogues/rr-424-documenting-your-code",display:!0},{id:"10b35b6f-c2ed-5304-8432-b5f7c50eab20",title:"Ben Orenstein - The Art of Pairing",url:"http://www.fullstackradio.com/94",display:!0}]}}}},447:function(t){t.exports={data:{allBooksJson:{nodes:[{hide_from_recommended:!1,id:"89aa343f-63be-5417-bfb8-8204363eb32b",title:"CSS",data:[{author:"Dan Cederholm",title:"SASS for Web Designers",url:"",display:!0,short_title:null,recommend:null,truncated_authors:null},{author:"Dan Cederholm",title:"CSS3 for Web Designers",url:"",display:!0,short_title:null,recommend:null,truncated_authors:null},{author:"Jon Duckett",title:"HTML and CSS: Design and Build Websites",url:"",display:!0,short_title:null,recommend:!0,truncated_authors:null}]},{hide_from_recommended:!1,id:"8391a9c7-8614-5e96-8ac9-79db3a3a7a9b",title:"Programming",data:[{author:"",title:"Perl Specialist Instructor Guide",url:"",display:!1,short_title:null,recommend:null,truncated_authors:null},{author:"Sandi Metz",title:"Practical Object-Oriented Design: An Agile Primer Using Ruby",url:"",display:!0,short_title:null,recommend:!0,truncated_authors:null},{author:"Russ Olsen",title:"Design Patterns in Ruby",url:"",display:!0,short_title:null,recommend:null,truncated_authors:null},{author:"Luke Welling and Laura Thomson",title:"PHP and MySQL Web Development",url:"",display:!0,short_title:null,recommend:null,truncated_authors:null},{author:"Noel Rappin",title:"Rails 5 Test Prescriptions",url:"https://pragprog.com/book/nrtest3/rails-5-test-prescriptions",display:!0,short_title:null,recommend:!0,truncated_authors:null},{author:"Katrina Owen & Sandi Metz",title:"99 Bottles of OOP",url:"",display:!0,short_title:null,recommend:!0,truncated_authors:null},{author:"Michele E. Davis and Jon A. Phillips",title:"Learning PHP and MySQL",url:"",display:!0,short_title:null,recommend:null,truncated_authors:null},{author:"Kenneth Baldwin, Andrew Gray, and Trevor Misfeldt",title:"The Elements of C# Style",url:"",display:!0,short_title:null,recommend:null,truncated_authors:"Kenneth Baldwin, Andrew Gray..."},{author:"Randal L. Schwartz, Brian D Foy, and Tom Phoenix",title:"Learning Perl",url:"",display:!0,short_title:null,recommend:null,truncated_authors:null},{author:"W. Jason Gilmore",title:"Easy Laravel 5",url:"",display:!0,short_title:null,recommend:null,truncated_authors:null},{author:"Erica Sadun",title:"The iOS 5 Developer's Cookbook",url:"",display:!0,short_title:null,recommend:null,truncated_authors:null},{author:"Zak Ruvalcaba",title:"Build Your Own ASP.NET Website Using C# and VB.NET",url:"",display:!0,short_title:null,recommend:null,truncated_authors:null},{author:"David A. Black",title:"The Well-Grounded Rubyist",url:"",display:!0,short_title:null,recommend:null,truncated_authors:null},{author:"Robert C. Martin",title:"Clean Code: A Handbook of Agile Software Craftsmanship",url:"",display:!0,short_title:"Clean Code",recommend:!0,truncated_authors:null},{author:"Andrew Hunt and David Thomas",title:"The Pragmatic Programmer: From Journeyman to Master",url:"",display:!0,short_title:"The Pragmatic Programmer",recommend:null,truncated_authors:null},{author:"Brett D. McLaughlin, Gary Pollice, & David West",title:"Object-Oriented Analysis & Design",url:"",display:!0,short_title:null,recommend:null,truncated_authors:null},{author:"Davey Shafik",title:"Phparchitects Zend Php 5 Certification Study Guide",url:"",display:!0,short_title:null,recommend:null,truncated_authors:null}]},{hide_from_recommended:!1,id:"fcda73b9-a8ca-5ec8-ab76-e0b29b2f6eef",title:"Design",data:[{author:"Jason Santa Maria",title:"On Web Typography",url:"",display:!0,short_title:null,recommend:null,truncated_authors:null},{author:"Donald Miller",title:"Building a StoryBrand",url:"",display:!0,short_title:null,recommend:!0,truncated_authors:null},{author:"Ellen Lupton",title:"Thinking with Type",url:"",display:!0,short_title:null,recommend:null,truncated_authors:null},{author:"Robert Hoekman, jr.",title:"Designing the Obvious",url:"",display:!0,short_title:null,recommend:null,truncated_authors:null},{author:"Donald A. Norman",title:"The Design of Everyday Things",url:"",display:!0,short_title:null,recommend:null,truncated_authors:null},{author:"Steve Krug",title:"Don't Make Me Think",url:"",display:!0,short_title:null,recommend:!0,truncated_authors:null}]},{hide_from_recommended:!1,id:"1ed7402c-0967-538e-8ebf-2fa612111aae",title:"Security",data:[{author:"Edward Skoudis",title:"Counter Hack Reloaded",url:"",display:!0,short_title:null,recommend:null,truncated_authors:null},{author:"",title:"Penetration Testing with Kali Linux v1.0.4",url:"",display:!0,short_title:null,recommend:!0,truncated_authors:null},{author:"Matt Walker",title:"CEH Certified Ethical Hacker All-in-One Exam Guide",url:"",display:!0,short_title:null,recommend:null,truncated_authors:null},{author:"Gordon Fyodor Lyon",title:"Nmap Network Scanning",url:"",display:!0,short_title:null,recommend:null,truncated_authors:null},{author:"Peter Kim",title:"The Hacker Playbook: Practical Guide To Penetration Testing",url:"",display:!0,short_title:null,recommend:null,truncated_authors:null},{author:"Georgia Weidman",title:"Penetration Testing: A Hands-On Introduction to Hacking",url:"",display:!0,short_title:null,recommend:!0,truncated_authors:null},{author:"David Kennedy, Jim O'Gorman, Devon Kearns, and Mati Aharoni",title:"Metasploit: The Penetration Tester's Guide",url:"",display:!0,short_title:"Metasploit",recommend:null,truncated_authors:null}]},{hide_from_recommended:!1,id:"af7a8ea6-3623-5b86-ae53-73d7b1c3fffb",title:"Networking",data:[{author:"Mike Meyers",title:"All-In-One: CompTIA Network+",url:"",display:!0,short_title:null,recommend:null,truncated_authors:null},{author:"Mike Meyers",title:"CompTIA Network+ Certification All-in-One Exam Guide, 5th Edition (Exam N10-005)",url:"",display:!0,short_title:"CompTIA Network+",recommend:!0,truncated_authors:null},{author:"Roderick W. Smith",title:"CompTIA Linux+ Complete Study Guide Authorized Courseware: Exams LX0-101 and LX0-102",url:"",display:!0,short_title:"CompTIA Linux+",recommend:!0,truncated_authors:null},{author:"Jean Andrews",title:"CompTIA A+ 2006 in Depth",url:"",display:!0,short_title:null,recommend:null,truncated_authors:null}]},{hide_from_recommended:!1,id:"f8def2b1-0f81-5956-867f-cddf312865fe",title:"JavaScript",data:[{author:"Jon Duckett",title:"JavaScript and jQuery: Interactive Front-End Web Development",url:"",display:!0,short_title:null,recommend:!0,truncated_authors:null},{author:"Douglas Crockford",title:"JavaScript: The Good Parts",url:"",display:!0,short_title:null,recommend:!0,truncated_authors:null},{author:"Peter-Paul Koch",title:"ppk on JavaScript",url:"",display:!0,short_title:null,recommend:!0,truncated_authors:null},{author:"Stoyan Stefanov",title:"JavaScript Patterns",url:"",display:!0,short_title:null,recommend:null,truncated_authors:null},{author:"Nick Heinle, and Bill Pena",title:"O'Reilly Web Studio: Designing with JavaScript: Creating Dynamic Web Pages",url:"",display:!0,short_title:null,recommend:null,truncated_authors:null},{author:"Ethan Brown",title:"Learning JavaScript",url:"",display:!0,short_title:null,recommend:null,truncated_authors:null},{author:"",title:"JavaScript Specialist Instructor Guide",url:"",display:!0,short_title:null,recommend:null,truncated_authors:null}]},{hide_from_recommended:!0,id:"0728cf8b-5b7e-56dc-8cd3-4024af5663ef",title:"Web Development",data:[{author:"Smashing Magazine",title:"Smashing Book 5",url:"",display:!0,short_title:null,recommend:null,truncated_authors:null},{author:"Karen McGrane",title:"Content Strategy for Mobile",url:"",display:!0,short_title:null,recommend:null,truncated_authors:null},{author:"Luke Wroblewski",title:"Web Form Design: Filling in the Blanks",url:"",display:!0,short_title:null,recommend:null,truncated_authors:null},{author:"Erin Kissane",title:"The Elements of Content Strategy",url:"",display:!0,short_title:null,recommend:null,truncated_authors:null},{author:"Luke Wroblewski",title:"Mobile First",url:"",display:!0,short_title:null,recommend:null,truncated_authors:null},{author:"Ethan Marcotte",title:"Responsive Design: Patterns & Principles",url:"",display:!0,short_title:null,recommend:null,truncated_authors:null},{author:"Jeremy Keith",title:"HTML5 for Web Designers",url:"",display:!0,short_title:null,recommend:null,truncated_authors:null}]},{hide_from_recommended:!0,id:"c7e46711-33b5-5fb5-8eed-0f1335026e80",title:"Databases",data:[{author:"Paul DuBois",title:"Developer's Library: MySQL",url:"",display:!0,short_title:null,recommend:null,truncated_authors:null},{author:"",title:"Database Design Specialist Instructor Guide",url:"",display:!0,short_title:null,recommend:null,truncated_authors:null}]},{hide_from_recommended:!0,id:"8f24737a-2117-54c6-a4dd-91671904dd01",title:"Miscellaneous",data:[{author:"Arnold Robbins, Elbert Hannah, and Linda Lamb",title:"Learning the Vi and Vim Editors",url:"",display:!0,short_title:null,recommend:null,truncated_authors:"Arnold Robbins, Elbert Hannah..."}]}]}}}}}]);
//# sourceMappingURL=component---src-pages-me-md-6759c5f86d0d4bc63a50.js.map