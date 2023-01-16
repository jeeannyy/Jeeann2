(this.webpackJsonpjeeann=this.webpackJsonpjeeann||[]).push([[0],{146:function(e,t,a){e.exports=a(294)},151:function(e,t,a){},152:function(e,t,a){},278:function(e,t,a){},281:function(e,t,a){},282:function(e,t,a){},283:function(e,t,a){e.exports=a.p+"static/media/me.504f5b7c.jpg"},284:function(e,t,a){},286:function(e,t,a){},287:function(e,t,a){},288:function(e,t,a){},294:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(24),r=a.n(c),l=(a(151),a(13)),o=a(14),s=a(9),d=a(16),u=a(15),m=a(318),h=a(61),p=a.n(h),b=a(134),v=a.n(b),f=a(43),y=a.n(f),g=(a(152),a(93),a(64));function E(e){var t=i.a.useState(!1),a=Object(g.a)(t,2),n=a[0],c=a[1],r=i.a.useRef();return i.a.useEffect((function(){var e=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&c(e.isIntersecting)}))}));return e.observe(r.current),function(){return e.unobserve(r.current)}}),[]),i.a.createElement("div",{className:"fade-in-section ".concat(n?"is-visible":""),style:{transitionDelay:"".concat(e.delay)},ref:r},e.children)}var S=window.innerWidth<600,k=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(o.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){var e=this.state.expanded,t=[i.a.createElement("a",{href:"#intro"},"/home"),i.a.createElement("a",{href:"#about"},"/about"),i.a.createElement("a",{href:"#experience"},"/experience"),i.a.createElement("a",{href:"#projects"},"/software-creations")];return i.a.createElement("div",{className:"sidebar-nav"},!S&&i.a.createElement(m.a,{expanded:e,defaultOpenKeys:["3","4"],activeKey:this.state.activeKey,onSelect:this.handleSelect,appearance:"subtle"},i.a.createElement(m.a.Body,null,i.a.createElement("div",{className:"sidebar-links"},t.map((function(e,t){return i.a.createElement(E,{delay:"".concat(t+1,"00ms")},i.a.createElement("div",null,e))}))))),i.a.createElement("div",{className:"sidebar-logos",href:"/"},i.a.createElement("a",{href:"mailto:jeeann.kim@gmail.com"},i.a.createElement(p.a,{style:{fontSize:25}})),i.a.createElement("a",{href:"https://github.com/jeeannyy"},i.a.createElement(y.a,{style:{fontSize:24}})),i.a.createElement("a",{href:"https://www.linkedin.com/in/jeeanny/"},i.a.createElement(v.a,{style:{fontSize:26}}))))}}]),a}(i.a.Component),j=(a(278),a(135)),w=a.n(j),N=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1",visible:!0},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(o.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){return i.a.createElement("div",{id:"intro"},i.a.createElement(w.a,{avgTypingDelay:120},i.a.createElement("span",{className:"intro-title"},"Hi, ",i.a.createElement("span",{className:"intro-name"},"Jeeann")," here!")),i.a.createElement(E,null,i.a.createElement("div",{className:"intro-subtitle"},"I create stuff sometimes."),i.a.createElement("div",{className:"intro-desc"},"I'm a Software Engineer and Artist based in London \ud83c\uddec\ud83c\udde7. I have a great interest in human-computer interactions, media arts, artificial intelligence, and everything in between."),i.a.createElement("a",{href:"mailto:jeeann.kim@gmail.com",className:"intro-contact"},i.a.createElement(p.a,null),"  Say hi!")))}}]),a}(i.a.Component),T=a(139),O=a(316),C=a(320),x=a(317),K=a(315),L=a(319),I=["children","value","index"],R=window.innerWidth<600;function A(e){var t=e.children,a=e.value,n=e.index,c=Object(T.a)(e,I);return R?i.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},c),a===n&&i.a.createElement(L.a,{p:3},i.a.createElement(K.a,null,t))):i.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"vertical-tabpanel"},c),a===n&&i.a.createElement(L.a,{p:3},i.a.createElement(K.a,null,t)))}var J=Object(O.a)((function(e){return{root:{flexGrow:1,backgroundColor:"theme.palette.background.paper",display:"flex",height:300},tabs:{borderRight:"1px solid ".concat(e.palette.divider)}}})),P=function(){var e=J(),t=i.a.useState(0),a=Object(g.a)(t,2),n=a[0],c=a[1],r={Chingu:{jobTitle:"Frontend Developer @",duration:"JAN 2023 - Present",desc:["Collaborating with global web developers, contributing to our application's planning, designing, and deploying","Tech Stack: JavaScript, React.js, CSS, Git"]},"Code First Girls":{jobTitle:"Course Instructor @",duration:"NOV 2022 - Present",desc:["Teaching online web development courses to women who are beginners in programming","Leading lectures and supporting other instructors' classes, assisting in their presentations","Tech Stack: JavaScript, Git, HTML, CSS"]},"Athena Hackathon":{jobTitle:"Frontend Developer @",duration:"OCT 2022",desc:["Won the Best User Journey Prize from Valtech","Built an impact investment app that allows everyone to invest in socially and environmentally focused projects and companies through their daily spending activities, using our round-up feature.","Tech Stack: Python, Figma"]},freeCodeCamp:{jobTitle:"Open Source Contributor @",duration:"OCT 2022 - Present",desc:["Translating and reviewing freeCodeCamp tutorials from English to Korean for Korean developer community"]},"Pocket Forest":{jobTitle:"Full Stack Software Engineer @",duration:"2022",desc:["Facilitated discussions with the team to access users' expectations and constructed wireframe","Developed front-end skeleton using modular, reusable React Native components and made final calls for production-level UI changes","Tech Stack: React Native, MongoDB"]},NewNew:{jobTitle:"Full Stack Software Engineer @",duration:"2022",desc:["Architected a service of a ratings and reviews system to allow users to post reviews, view ratings, choose articles by categories and sort by likes, comments, date, and votes for a specific article","Built a news API with Node.js trying to mimic the real-world backend service which should provide information to the front-end architecture","Tech Stack: React.js, Node.js, Express, PSQL, CSS"]},TikTok:{jobTitle:"AI Data Operator Specialist @",duration:"SEP 2020 - FEB 2022",desc:["Machine Translation Project with AI-Lab-NLP-Machine Learning team","Worked cooperatively with the internal and global team to build QA policies and created documentation related to Korean trends","Identified controversial cases and errors using the content review & discussion set-up within the team and to be updated stakeholders","Created an onboarding guide for newbies and trained them to onboard","Led and supported team-building activities in Korea"]}};return i.a.createElement("div",{className:e.root},i.a.createElement(C.a,{orientation:R?null:"vertical",variant:R?"fullWidth":"scrollable",value:n,onChange:function(e,t){c(t)},className:e.tabs},Object.keys(r).map((function(e,t){return i.a.createElement(x.a,Object.assign({label:R?"0".concat(t,"."):e},(a=t,R?{id:"full-width-tab-".concat(a),"aria-controls":"full-width-tabpanel-".concat(a)}:{id:"vertical-tab-".concat(a)})));var a}))),Object.keys(r).map((function(e,t){return i.a.createElement(A,{value:n,index:t},i.a.createElement("span",{className:"joblist-job-title"},r[e].jobTitle+" "),i.a.createElement("span",{className:"joblist-job-company"},e),i.a.createElement("div",{className:"joblist-duration"},r[e].duration),i.a.createElement("ul",{className:"job-description"},r[e].desc.map((function(e,t){return i.a.createElement(E,{delay:"".concat(t+1,"00ms")},i.a.createElement("li",{key:t},e))}))))})))},B=(a(281),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(o.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){return i.a.createElement("div",{id:"experience"},i.a.createElement(E,null,i.a.createElement("div",{className:"section-header "},i.a.createElement("span",{className:"section-title"},"/ experience")),i.a.createElement(P,null)))}}]),a}(i.a.Component)),D=(a(282),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(o.a)(n,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){var e=i.a.createElement("p",null,"I am currently a ",i.a.createElement("b",null,"Frontend Developer")," at "," ",i.a.createElement("a",{href:"https://www.chingu.io/"},i.a.createElement("b",null,"Chingu"))," and ",i.a.createElement("b",null,"Course Instructor")," at "," ",i.a.createElement("a",{href:"https://codefirstgirls.com/"},i.a.createElement("b",null,"Code First Girls")),". I studied "," ",i.a.createElement("a",{href:"https://eng.ssu.ac.kr/"},"Media Arts and Computer Science")," at "," ",i.a.createElement("a",{href:"https://eng.ssu.ac.kr/"},i.a.createElement("b",null,"Soongsil University"))," in Seoul, South Korea and finished my ",i.a.createElement("b",null,"Software Engineering course")," at "," ",i.a.createElement("a",{href:"https://northcoders.com/"},i.a.createElement("b",null,"Northcoders"))," in London, UK. Before starting this journey, I worked as a marketer and data operator specialist at tvN, Kakao and TikTok."),t=i.a.createElement("p",null,"Outside of work, I'm interested in editing videos, painting, traveling, vintage fashion, R&B and jazz, and writing a diary."),n=["Javascript ES6+","React.js","Node.js","Express.js","MongoDB","HTML & CSS"];n.map((function(e){return i.a.createElement("li",null,e)}));return i.a.createElement("div",{id:"about"},i.a.createElement(E,null,i.a.createElement("div",{className:"section-header "},i.a.createElement("span",{className:"section-title"},"/ about me")),i.a.createElement("div",{className:"about-content"},i.a.createElement("div",{className:"about-description"},[e],"Here are some technologies I have been working with:",i.a.createElement("ul",{className:"tech-stack"},n.map((function(e,t){return i.a.createElement(E,{delay:"".concat(t+1,"00ms")},i.a.createElement("li",null,e))}))),[t]),i.a.createElement("div",{className:"about-image"},i.a.createElement("img",{src:a(283)})))))}}]),n}(i.a.Component)),F=(a(284),a(136)),M=a.n(F),H=(a(285),a(90)),z=a.n(H),W=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(o.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){return i.a.createElement("span",{className:"external-links"},i.a.createElement("a",{className:"github-icon",href:this.props.githubLink},i.a.createElement(y.a,{style:{fontSize:20,color:"var(--lightest-slate)"}})),this.props.openLink&&i.a.createElement("a",{className:"open-icon",href:this.props.openLink},i.a.createElement(z.a,{style:{fontSize:25,color:"var(--lightest-slate)"}})))}}]),a}(i.a.Component),G=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(o.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){var e={"News app":{desc:"This is a News app that user can view, discuss, rate articles. It interacts with an API which was developed during my News Backend project.",techStack:"React, React Router, Axios, CSS",link:"https://github.com/jeeannyy/News-app",open:"https://jeeannyy.github.io/News-app"},"Coin Tracker":{desc:"A coin tracker application that you can find the real-time cryptos' ranking, price chart, and history",techStack:"React, TypeScript, Styled-components",link:"https://github.com/jeeannyy/Coin-Tracker",open:"https://jeeannyy.github.io/Coin-Tracker/"},Jeflix:{desc:"This is a clone of the Netflix website built using React.JS as a Front-end.",techStack:"React, TypeScript, Styled-components",link:"https://github.com/jeeannyy/jetflix",open:"https://jeeannyy.github.io/jetflix/"},"Pocket Forest":{desc:"A location-based tree capture application. The user can take a picture of the tree using the map and tree marker. If the species is a match with our database, the tree has been added to user's pocket forest page.",techStack:"React Native, Expo, MongoDB, Jest, Heroku",link:"https://github.com/jeeannyy/Pocket-Forest"},"Weather app":{desc:"This is an application that informs the weather based on the user's real-time location",techStack:"React Native",link:"https://github.com/jeeannyy/Weather-app",open:""},Trello:{desc:"Cloned basic features of Trello application. You can add and delete boards and tasks",techStack:"React, TypeScript, Styled-components",link:"https://github.com/jeeannyy/Trello-Clone",open:"https://jeeannyy.github.io/Trello-Clone"},"Paint app":{desc:"A paint app for all age of people.",techStack:"JavaScript, HTML5 / CSS",link:"https://github.com/jeeannyy/Paint-app",open:"https://painting-jeeann.netlify.app"},Kokoatalk:{desc:"Cloned Korean messanger application, Kakaotalk.",techStack:"HTML5, CSS",link:"https://github.com/jeeannyy/Kokoatalk",open:"https://kokoatalk-jeeann.netlify.app/"},"Drum Kit":{desc:"A drum application that everyone can play it.",techStack:"JavaScript, HTML5, CSS",link:"https://drumkit-jeeann.netlify.app",open:"https://github.com/jeeannyy/Drum-Kit"},"Todo Todo":{desc:"Simple design To do list application.",techStack:"React, CSS",link:"https://github.com/jeeannyy/TodoTodo",open:"https://jeeannyy.github.io/TodoTodo/"},London:{desc:"A poster for practicing CSS grid and flex.",techStack:"HTML5, CSS",link:"https://github.com/jeeannyy/London",open:""},"Bad Religion":{desc:"A poster for practicing CSS grid and flex.",techStack:"HTML5, CSS",link:"https://github.com/jeeannyy/Bad-Religion",open:""},"Dice game":{desc:"A dice game made with Vanilla JS.",techStack:"JavaScript, HTML5, CSS",link:"https://github.com/jeeannyy/Dice-Game",open:"https://dicegame-jeeann.netlify.app"},"Real Time Chat":{desc:"A simple chat app that multiple people can join and chat in real time.",techStack:"socket.io, Javascript",link:"https://github.com/jeeannyy/Real-Time-Chat",open:""}};return i.a.createElement("div",{id:"projects"},i.a.createElement("div",{className:"section-header "},i.a.createElement("span",{className:"section-title"},"/ software-creations")),i.a.createElement("div",{className:"project-container"},i.a.createElement("ul",{className:"projects-grid"},Object.keys(e).map((function(t,a){return i.a.createElement(E,{delay:"".concat(a+1,"00ms")},i.a.createElement("li",{className:"projects-card"},i.a.createElement("div",{className:"card-header"},i.a.createElement("div",{className:"folder-icon"},i.a.createElement(M.a,{style:{fontSize:35}})),i.a.createElement(W,{githubLink:e[t].link,openLink:e[t].open})),i.a.createElement("div",{className:"card-title"},t),i.a.createElement("div",{className:"card-desc"},e[t].desc),i.a.createElement("div",{className:"card-tech"},e[t].techStack)))})))))}}]),a}(i.a.Component),U=(a(286),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(o.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){return i.a.createElement(E,null,i.a.createElement("div",{id:"credits"},i.a.createElement("div",{className:"ending-credits"},i.a.createElement("div",null,"Copyright \xa9 2022 Jeeanny\ud83e\udd95. All rights reserved."))))}}]),a}(i.a.Component));a(287),a(288),a(289);var V=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{id:"content"},i.a.createElement(N,null),i.a.createElement(D,null),i.a.createElement(B,null),i.a.createElement(G,null),i.a.createElement(U,null)),i.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(290);var Q=a(138);r.a.render(i.a.createElement(Q.a,null,i.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[146,1,2]]]);
//# sourceMappingURL=main.137760ff.chunk.js.map