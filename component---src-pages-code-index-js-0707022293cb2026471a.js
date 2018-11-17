;(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    180: function(e, t, a) {
      'use strict'
      a.r(t)
      var n = a(0),
        r = a.n(n),
        i = (a(183),
        a(55),
        function(e) {
          var t = e.text
          return r.a.createElement(
            'p',
            {
              style: {
                background: '#f3f3f3',
                margin: '0 1em 0 0',
                fontSize: '.75em',
                padding: '.25em 1em',
                fontWeight: 'bolder',
              },
            },
            t
          )
        }),
        o = function(e) {
          var t = e.title,
            a = e.description,
            n = e.tags,
            o = e.showcase,
            s = e.year,
            c = e.repo
          return r.a.createElement(
            'article',
            { style: { paddingBottom: '6em' } },
            r.a.createElement(
              'h2',
              {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                },
              },
              t,
              r.a.createElement(
                'sub',
                { style: { fontSize: '.5em', fontWeight: 'normal' } },
                s
              )
            ),
            a.map(function(e) {
              return r.a.createElement('p', null, e)
            }),
            r.a.createElement(
              'footer',
              { style: { marginTop: '1em' } },
              o &&
                r.a.createElement(
                  r.a.Fragment,
                  null,
                  'view the ',
                  r.a.createElement(
                    'a',
                    { href: o, target: '_blank' },
                    'project'
                  )
                ),
              c &&
                r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement('span', null, ' '),
                  'and the ',
                  r.a.createElement('a', { href: c, target: '_blank' }, 'code')
                ),
              r.a.createElement(
                'ul',
                {
                  style: {
                    listStyle: 'none',
                    display: 'flex',
                    margin: '2em 0 0 0',
                  },
                },
                n.map(function(e) {
                  return r.a.createElement(i, { text: e })
                })
              )
            )
          )
        },
        s = a(189)
      t.default = function() {
        return r.a.createElement(
          s.a,
          null,
          r.a.createElement(o, {
            title: 'Nukemap',
            description: [
              'A map showing various nuclear places in France. For each of these, various information sources are gathered in order to provide some great information about these places, and a way to show citizens things that happen in these places.',
              'It is a way of studying risks related to nuclear energy',
            ],
            tags: [
              'react',
              'node',
              'mongo',
              'graphql',
              'cartography',
              'sideproject',
            ],
            showcase: 'http://fabien.cool/nukemap/',
            repo: 'https://github.com/fabienheureux/nukemap',
            year: '2018',
          }),
          r.a.createElement(o, {
            title: 'Wing',
            description: [
              'Development of a new product at Wing',
              'There was a need for a new platform, plugged to UPS (and other carriers) API in order to book loads of shippings smoothly, and keep track of them in a clean backoffice.',
              "I used an event-driven architecture, using AWS SQS and AWS Lambda (with help of Serverless framework) in order to ensure that every shipping's request would be properly processed, and that every request to external APIs would be made at minimal costs.",
              'I also used a monorepo approach for this project in order to bring consistency accross various microservices developped for this project.',
            ],
            tags: [
              'react',
              'node',
              'graphql',
              'api',
              'serverless',
              'lerna',
              'aws',
              'docker',
            ],
            showcase: 'http://harmony.info/',
            year: '2018',
          }),
          r.a.createElement(o, {
            title: 'Mondelez',
            description: [
              'With BETC for Mondelez.',
              'A single-page website promoting its sustainable farming, Harmony.',
              'One of the key-feature of this project was to provide a consistent UI (and backoffice) for ~ 15 different languages.',
            ],
            tags: ['javascript', 'pixijs', '3d'],
            showcase: 'http://harmony.info/',
            year: '2018',
          }),
          r.a.createElement(o, {
            title: 'PayFit',
            description: [
              'frontend and backend works on the internal backoffice.',
              'frontend on the client web application',
              'worked on various services plugged to external marketing services, and others that connected to governement services',
            ],
            tags: [
              'react',
              'node',
              'serverless',
              'typescript',
              'docker',
              'mongo',
              'aws',
              'vue',
            ],
            showcase: 'https://payfit.com',
            year: '2017-2018',
          }),
          r.a.createElement(o, {
            title: 'RCI Mobility / Renault Mobility',
            description: [
              'Worked on various features on the frontend of client apps (Glide, Renault Mobility)',
            ],
            tags: ['react', 'redux'],
            showcase: 'https://www.renault-mobility.com/',
            year: '2017',
          }),
          r.a.createElement(o, {
            title: 'KuB, le webmedia breton de la culture',
            description: ['Refonte de kubweb.media'],
            tags: ['django', 'react', 'redux'],
            showcase: 'http://kubweb.media',
            year: '2016-2017',
          })
        )
      }
    },
    183: function(e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'graphql', function() {
          return f
        }),
        a.d(t, 'StaticQueryContext', function() {
          return p
        }),
        a.d(t, 'StaticQuery', function() {
          return m
        })
      var n = a(0),
        r = a.n(n),
        i = a(4),
        o = a.n(i),
        s = a(182),
        c = a.n(s)
      a.d(t, 'Link', function() {
        return c.a
      }),
        a.d(t, 'withPrefix', function() {
          return s.withPrefix
        }),
        a.d(t, 'navigate', function() {
          return s.navigate
        }),
        a.d(t, 'push', function() {
          return s.push
        }),
        a.d(t, 'replace', function() {
          return s.replace
        }),
        a.d(t, 'navigateTo', function() {
          return s.navigateTo
        })
      var l = a(184),
        u = a.n(l)
      a.d(t, 'PageRenderer', function() {
        return u.a
      })
      var d = a(33)
      a.d(t, 'parsePath', function() {
        return d.a
      })
      var p = r.a.createContext({}),
        m = function(e) {
          return r.a.createElement(p.Consumer, null, function(t) {
            return e.data || (t[e.query] && t[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : t[e.query].data)
              : r.a.createElement('div', null, 'Loading (StaticQuery)')
          })
        }
      function f() {
        throw new Error(
          'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.'
        )
      }
      m.propTypes = {
        data: o.a.object,
        query: o.a.string.isRequired,
        render: o.a.func,
        children: o.a.func,
      }
    },
    184: function(e, t, a) {
      var n
      e.exports = ((n = a(186)) && n.default) || n
    },
    185: function(e) {
      e.exports = { data: { site: { siteMetadata: { title: 'fabien' } } } }
    },
    186: function(e, t, a) {
      'use strict'
      a.r(t)
      a(34)
      var n = a(0),
        r = a.n(n),
        i = a(4),
        o = a.n(i),
        s = a(53),
        c = a(2),
        l = function(e) {
          var t = e.location,
            a = c.default.getResourcesForPathnameSync(t.pathname)
          return r.a.createElement(
            s.a,
            Object.assign({ location: t, pageResources: a }, a.json)
          )
        }
      ;(l.propTypes = {
        location: o.a.shape({ pathname: o.a.string.isRequired }).isRequired,
      }),
        (t.default = l)
    },
    187: function(e, t, a) {},
    189: function(e, t, a) {
      'use strict'
      var n = a(185),
        r = a(0),
        i = a.n(r),
        o = a(4),
        s = a.n(o),
        c = a(190),
        l = a.n(c),
        u = a(183),
        d = function(e) {
          e.siteTitle
          return i.a.createElement(
            'nav',
            {
              style: {
                width: '300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                fontWeight: '900',
              },
            },
            i.a.createElement(
              u.Link,
              { activeClassName: 'active', to: '/' },
              i.a.createElement('h1', null, 'fabien')
            ),
            i.a.createElement(
              u.Link,
              { activeClassName: 'active', to: '/photo' },
              'photo'
            ),
            i.a.createElement(
              u.Link,
              { activeClassName: 'active', to: '/code' },
              'code'
            )
          )
        },
        p = (a(187),
        function(e) {
          var t = e.children
          return i.a.createElement(u.StaticQuery, {
            query: '755544856',
            render: function(e) {
              return i.a.createElement(
                'div',
                {
                  style: {
                    display: 'flex',
                    flexDirection: 'row',
                    height: '100vh',
                    padding: '1rem',
                  },
                },
                i.a.createElement(
                  l.a,
                  {
                    title: e.site.siteMetadata.title,
                    meta: [
                      { name: 'description', content: 'Sample' },
                      { name: 'keywords', content: 'sample, something' },
                    ],
                  },
                  i.a.createElement('html', { lang: 'en' })
                ),
                i.a.createElement(d, { siteTitle: e.site.siteMetadata.title }),
                i.a.createElement(
                  'div',
                  {
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                      maxWidth: '700px',
                      padding: '5vh 0',
                    },
                  },
                  t
                )
              )
            },
            data: n,
          })
        })
      p.propTypes = { children: s.a.node.isRequired }
      t.a = p
    },
  },
])
//# sourceMappingURL=component---src-pages-code-index-js-0707022293cb2026471a.js.map