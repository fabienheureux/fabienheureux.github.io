(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{183:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(193);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},189:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(33),o=a.n(l);a.d(t,"a",function(){return o.a});a(190);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},190:function(e,t,a){var n;e.exports=(n=a(192))&&n.default||n},191:function(e){e.exports={data:{site:{siteMetadata:{title:"fabien"}}}}},192:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(60),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},193:function(e,t,a){"use strict";var n=a(191),r=a(0),i=a.n(r),c=a(4),l=a.n(c),o=a(194),s=a.n(o),u=a(189),d=function(e){e.siteTitle;return i.a.createElement("nav",{style:{width:"300px",display:"flex",flexDirection:"column",justifyContent:"center",fontWeight:"900"}},i.a.createElement(u.a,{activeClassName:"active",to:"/"},i.a.createElement("h1",null,"fabien")),i.a.createElement(u.a,{activeClassName:"active",to:"/photo"},"photo"),i.a.createElement(u.a,{activeClassName:"active",to:"/code"},"code"))},m=(a(195),function(e){var t=e.children;return i.a.createElement(u.b,{query:"755544856",render:function(e){return i.a.createElement("div",{style:{display:"flex",flexDirection:"row",height:"100vh",padding:"1rem"}},i.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{display:"flex",flexDirection:"column",maxWidth:"700px",width:"100%",padding:"5vh 0"}},t))},data:n})});m.propTypes={children:l.a.node.isRequired};t.a=m}}]);
//# sourceMappingURL=component---src-pages-404-js-f98e9299cf26adc102e0.js.map