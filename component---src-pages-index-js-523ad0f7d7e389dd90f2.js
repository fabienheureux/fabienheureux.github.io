(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{177:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(182),o=n(188);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement("h2",null,"hey, I'm Fabien 👋"),r.a.createElement("p",null,"I write ",r.a.createElement(i.Link,{to:"/code"},"code"),", both on the backend & the frontend. Mostly in JavaScript, but also in Python. I am currently living in Paris and am always open to new projects."),r.a.createElement("p",null,"I shoot some ",r.a.createElement(i.Link,{to:"/photo"},"photos")," on my free time."),r.a.createElement("br",null),r.a.createElement("p",null,"👀"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.youtube.com/watch?v=MGE_61qLWm0"},"se coucher tard nuit"),"."))}},182:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(181),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(183),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},183:function(e,t,n){var a;e.exports=(a=n(185))&&a.default||a},184:function(e){e.exports={data:{site:{siteMetadata:{title:"fabien"}}}}},185:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(53),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},186:function(e,t,n){},188:function(e,t,n){"use strict";var a=n(184),r=n(0),i=n.n(r),o=n(4),c=n.n(o),l=n(189),u=n.n(l),s=n(182),d=function(e){e.siteTitle;return i.a.createElement("nav",{style:{width:"300px",display:"flex",flexDirection:"column",justifyContent:"center",fontWeight:"900"}},i.a.createElement(s.Link,{activeClassName:"active",to:"/"},i.a.createElement("h1",null,"fabien")),i.a.createElement(s.Link,{activeClassName:"active",to:"/photo"},"photo"),i.a.createElement(s.Link,{activeClassName:"active",to:"/code"},"code"))},m=(n(186),function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement("div",{style:{display:"flex",flexDirection:"row",height:"100vh",padding:"1rem"}},i.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{display:"flex",flexDirection:"column",maxWidth:"700px",width:"100%",padding:"5vh 0"}},t))},data:a})});m.propTypes={children:c.a.node.isRequired};t.a=m}}]);
//# sourceMappingURL=component---src-pages-index-js-523ad0f7d7e389dd90f2.js.map