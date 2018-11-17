(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{180:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=(a(55),function(e){var t=e.text;return r.a.createElement("p",{style:{background:"#f3f3f3",margin:"0 1em 0 0",fontSize:".75em",padding:".25em 1em",fontWeight:"bolder"}},t)}),i=function(e){var t=e.title,a=e.description,n=e.tags,i=e.showcase,l=e.year,c=e.repo;return r.a.createElement("article",{style:{paddingBottom:"6em"}},r.a.createElement("h2",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"}},t,r.a.createElement("sub",{style:{fontSize:".5em",fontWeight:"normal"}},l)),a.map(function(e){return r.a.createElement("p",null,e)}),r.a.createElement("footer",{style:{marginTop:"1em"}},i&&r.a.createElement(r.a.Fragment,null,"view the"," ",r.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},"project")),c&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null," "),"and the"," ",r.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"},"code")),r.a.createElement("ul",{style:{listStyle:"none",display:"flex",margin:"2em 0 0 0"}},n.map(function(e){return r.a.createElement(o,{text:e})}))))},l=a(188);r.a.createElement(i,{title:"Nukemap",description:["A map showing various nuclear places in France. For each of these, various information sources are gathered in order to provide some great information about these places, and a way to show citizens things that happen in these places.","It is a way of studying risks related to nuclear energy"],tags:["react","node","mongo","graphql","cartography","sideproject"],showcase:"http://fabien.cool/nukemap/",repo:"https://github.com/fabienheureux/nukemap",year:"2018"}),t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(i,{title:"Wing",description:["Development of a new product at Wing.","There was a need for a new platform, plugged to UPS (and other carriers) API in order to book loads of shippings smoothly, and keep track of them in a clean backoffice.","I built an event-driven architecture, using AWS SQS and AWS Lambda in order to ensure that every shipping's request would be properly processed, and that every request to external APIs would be made at minimal costs.","I also used a monorepo approach for this project in order to bring consistency accross various microservices developped for this project."],tags:["react","node","graphql","api","serverless","lerna","aws","docker"],year:"2018"}),r.a.createElement(i,{title:"Mondelez",description:["With BETC for Mondelez.","Development of both the backend and the frontend of a single-page website promoting Mondelez' sustainable farming: Harmony.","One of the key-feature of this project was to provide a consistent UI (and backoffice) for ~ 15 different languages."],tags:["javascript","pixijs","3d","gravcms"],showcase:"http://harmony.info",year:"2018"}),r.a.createElement(i,{title:"PayFit",description:["Development of new features on both the frontend and backend of PayFit's internal backoffice.","I also worked on the development of new features on the frontend of the client web application. Mainly signup and signin pages.","Lots of my work at PayFit consisted on connecting external applications (marketing services, or governement taxes services) to internal microservices or CRM tools."],tags:["react","node","serverless","typescript","docker","mongo","aws","vue"],showcase:"https://payfit.com",year:"2017-2018"}),r.a.createElement(i,{title:"RCI Mobility / Renault Mobility",description:["Development of various features on the frontend of client apps (Glide, Renault Mobility)."],tags:["react","redux"],showcase:"https://www.renault-mobility.com",year:"2017"}),r.a.createElement(i,{title:"KuB, le webmedia breton de la culture",description:["Complete rebuild of KuB's website.","A challenge of this project was to build a clean backoffice allowing to build complex pages without hassle, containing media from many sources."],tags:["django","react","redux"],showcase:"http://kubweb.media",year:"2016-2017"}),r.a.createElement(i,{title:"Danone",description:["With BETC & Cogit Studio.","Worked on a full rebuild of DanOn's frontend."],showcase:"https://www.dan-on.com",tags:["javascript","liferay"],year:"2016"}),r.a.createElement(i,{title:"Schneider Electric",description:["With BETC & Cogit Studio.","I worked on the frontend development of Schneider Electric's corporate website, and led a full rebranding of it."],tags:["javascript","css","html5","automation"],showcase:"https://www.schneider-electric.com",year:"2015-2016"}),r.a.createElement("p",{style:{paddingBottom:"6em"}},r.a.createElement("h4",{style:{lineHeight:"1.5em"}},"And a bunch of other projects, mainly built using good old PHP CMS like Drupal, Wordpress or Spip"),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.ceriseh.com"},"www.ceriseh.com"),r.a.createElement("br",null),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.esmd.fr"},"www.esmd.fr"),r.a.createElement("br",null),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://atelierrozzen.com"},"atelierrozzen.com"),r.a.createElement("br",null),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.floretricotelle.com"},"www.floretricotelle.com"),r.a.createElement("br",null),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://cinematihanok.bzh"},"cinematihanok.bzh"),r.a.createElement("br",null),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://casbah-records.com"},"casbah-records.com"),r.a.createElement("br",null),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.douarnevez.com"},"www.douarnevez.com"),r.a.createElement("br",null),". . ."))}},182:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(181),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(183),d=a.n(s);a.d(t,"PageRenderer",function(){return d.a});var u=a(33);a.d(t,"parsePath",function(){return u.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},183:function(e,t,a){var n;e.exports=(n=a(185))&&n.default||n},184:function(e){e.exports={data:{site:{siteMetadata:{title:"fabien"}}}}},185:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(53),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},186:function(e,t,a){},188:function(e,t,a){"use strict";var n=a(184),r=a(0),o=a.n(r),i=a(4),l=a.n(i),c=a(189),s=a.n(c),d=a(182),u=function(e){e.siteTitle;return o.a.createElement("nav",{style:{width:"300px",display:"flex",flexDirection:"column",justifyContent:"center",fontWeight:"900"}},o.a.createElement(d.Link,{activeClassName:"active",to:"/"},o.a.createElement("h1",null,"fabien")),o.a.createElement(d.Link,{activeClassName:"active",to:"/photo"},"photo"),o.a.createElement(d.Link,{activeClassName:"active",to:"/code"},"code"))},p=(a(186),function(e){var t=e.children;return o.a.createElement(d.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement("div",{style:{display:"flex",flexDirection:"row",height:"100vh",padding:"1rem"}},o.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(u,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{style:{display:"flex",flexDirection:"column",maxWidth:"700px",width:"100%",padding:"5vh 0"}},t))},data:n})});p.propTypes={children:l.a.node.isRequired};t.a=p}}]);
//# sourceMappingURL=component---src-pages-code-index-js-7860a37f65f7168d97d9.js.map