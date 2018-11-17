;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    177: function(e, t, a) {
      'use strict'
      a.r(t)
      var n = a(0),
        i = a.n(n),
        r = (a(183), a(189))
      t.default = function() {
        return i.a.createElement(
          r.a,
          null,
          i.a.createElement('h2', null, 'coucou'),
          i.a.createElement(
            'p',
            null,
            'Nibh himenaeos vulputate natoque nunc sem interdum parturient sed mattis placerat potenti aenean penatibus accumsan sit scelerisque scelerisque. Tempus morbi a volutpat parturient amet volutpat fermentum fermentum conubia dis augue eros duis a nisi ultricies viverra ridiculus in ac vestibulum. Magnis eget quisque arcu suspendisse mi inceptos nunc consequat odio a scelerisque diam fermentum malesuada arcu porttitor venenatis rhoncus convallis et neque ut a a vestibulum augue a a.'
          )
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
          return m
        }),
        a.d(t, 'StaticQuery', function() {
          return p
        })
      var n = a(0),
        i = a.n(n),
        r = a(4),
        u = a.n(r),
        c = a(182),
        o = a.n(c)
      a.d(t, 'Link', function() {
        return o.a
      }),
        a.d(t, 'withPrefix', function() {
          return c.withPrefix
        }),
        a.d(t, 'navigate', function() {
          return c.navigate
        }),
        a.d(t, 'push', function() {
          return c.push
        }),
        a.d(t, 'replace', function() {
          return c.replace
        }),
        a.d(t, 'navigateTo', function() {
          return c.navigateTo
        })
      var s = a(184),
        l = a.n(s)
      a.d(t, 'PageRenderer', function() {
        return l.a
      })
      var d = a(33)
      a.d(t, 'parsePath', function() {
        return d.a
      })
      var m = i.a.createContext({}),
        p = function(e) {
          return i.a.createElement(m.Consumer, null, function(t) {
            return e.data || (t[e.query] && t[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : t[e.query].data)
              : i.a.createElement('div', null, 'Loading (StaticQuery)')
          })
        }
      function f() {
        throw new Error(
          'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.'
        )
      }
      p.propTypes = {
        data: u.a.object,
        query: u.a.string.isRequired,
        render: u.a.func,
        children: u.a.func,
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
        i = a.n(n),
        r = a(4),
        u = a.n(r),
        c = a(53),
        o = a(2),
        s = function(e) {
          var t = e.location,
            a = o.default.getResourcesForPathnameSync(t.pathname)
          return i.a.createElement(
            c.a,
            Object.assign({ location: t, pageResources: a }, a.json)
          )
        }
      ;(s.propTypes = {
        location: u.a.shape({ pathname: u.a.string.isRequired }).isRequired,
      }),
        (t.default = s)
    },
    187: function(e, t, a) {},
    189: function(e, t, a) {
      'use strict'
      var n = a(185),
        i = a(0),
        r = a.n(i),
        u = a(4),
        c = a.n(u),
        o = a(190),
        s = a.n(o),
        l = a(183),
        d = function(e) {
          e.siteTitle
          return r.a.createElement(
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
            r.a.createElement(
              l.Link,
              { activeClassName: 'active', to: '/' },
              r.a.createElement('h1', null, 'fabien')
            ),
            r.a.createElement(
              l.Link,
              { activeClassName: 'active', to: '/photo' },
              'photo'
            ),
            r.a.createElement(
              l.Link,
              { activeClassName: 'active', to: '/code' },
              'code'
            )
          )
        },
        m = (a(187),
        function(e) {
          var t = e.children
          return r.a.createElement(l.StaticQuery, {
            query: '755544856',
            render: function(e) {
              return r.a.createElement(
                'div',
                {
                  style: {
                    display: 'flex',
                    flexDirection: 'row',
                    height: '100vh',
                    padding: '1rem',
                  },
                },
                r.a.createElement(
                  s.a,
                  {
                    title: e.site.siteMetadata.title,
                    meta: [
                      { name: 'description', content: 'Sample' },
                      { name: 'keywords', content: 'sample, something' },
                    ],
                  },
                  r.a.createElement('html', { lang: 'en' })
                ),
                r.a.createElement(d, { siteTitle: e.site.siteMetadata.title }),
                r.a.createElement(
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
      m.propTypes = { children: c.a.node.isRequired }
      t.a = m
    },
  },
])
//# sourceMappingURL=component---src-pages-coucou-index-js-4b2fabed5494c6a4ff91.js.map
