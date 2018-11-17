;(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    176: function(e, t, n) {
      'use strict'
      n.r(t)
      var a = n(0),
        r = n.n(a),
        i = n(189)
      t.default = function() {
        return r.a.createElement(
          i.a,
          null,
          r.a.createElement('h1', null, 'NOT FOUND'),
          r.a.createElement(
            'p',
            null,
            "You just hit a route that doesn't exist... the sadness."
          )
        )
      }
    },
    183: function(e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, 'graphql', function() {
          return m
        }),
        n.d(t, 'StaticQueryContext', function() {
          return f
        }),
        n.d(t, 'StaticQuery', function() {
          return p
        })
      var a = n(0),
        r = n.n(a),
        i = n(4),
        o = n.n(i),
        c = n(182),
        u = n.n(c)
      n.d(t, 'Link', function() {
        return u.a
      }),
        n.d(t, 'withPrefix', function() {
          return c.withPrefix
        }),
        n.d(t, 'navigate', function() {
          return c.navigate
        }),
        n.d(t, 'push', function() {
          return c.push
        }),
        n.d(t, 'replace', function() {
          return c.replace
        }),
        n.d(t, 'navigateTo', function() {
          return c.navigateTo
        })
      var l = n(184),
        s = n.n(l)
      n.d(t, 'PageRenderer', function() {
        return s.a
      })
      var d = n(33)
      n.d(t, 'parsePath', function() {
        return d.a
      })
      var f = r.a.createContext({}),
        p = function(e) {
          return r.a.createElement(f.Consumer, null, function(t) {
            return e.data || (t[e.query] && t[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : t[e.query].data)
              : r.a.createElement('div', null, 'Loading (StaticQuery)')
          })
        }
      function m() {
        throw new Error(
          'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.'
        )
      }
      p.propTypes = {
        data: o.a.object,
        query: o.a.string.isRequired,
        render: o.a.func,
        children: o.a.func,
      }
    },
    184: function(e, t, n) {
      var a
      e.exports = ((a = n(186)) && a.default) || a
    },
    185: function(e) {
      e.exports = { data: { site: { siteMetadata: { title: 'fabien' } } } }
    },
    186: function(e, t, n) {
      'use strict'
      n.r(t)
      n(34)
      var a = n(0),
        r = n.n(a),
        i = n(4),
        o = n.n(i),
        c = n(53),
        u = n(2),
        l = function(e) {
          var t = e.location,
            n = u.default.getResourcesForPathnameSync(t.pathname)
          return r.a.createElement(
            c.a,
            Object.assign({ location: t, pageResources: n }, n.json)
          )
        }
      ;(l.propTypes = {
        location: o.a.shape({ pathname: o.a.string.isRequired }).isRequired,
      }),
        (t.default = l)
    },
    187: function(e, t, n) {},
    189: function(e, t, n) {
      'use strict'
      var a = n(185),
        r = n(0),
        i = n.n(r),
        o = n(4),
        c = n.n(o),
        u = n(190),
        l = n.n(u),
        s = n(183),
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
              s.Link,
              { activeClassName: 'active', to: '/' },
              i.a.createElement('h1', null, 'fabien')
            ),
            i.a.createElement(
              s.Link,
              { activeClassName: 'active', to: '/photo' },
              'photo'
            ),
            i.a.createElement(
              s.Link,
              { activeClassName: 'active', to: '/code' },
              'code'
            )
          )
        },
        f = (n(187),
        function(e) {
          var t = e.children
          return i.a.createElement(s.StaticQuery, {
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
            data: a,
          })
        })
      f.propTypes = { children: c.a.node.isRequired }
      t.a = f
    },
  },
])
//# sourceMappingURL=component---src-pages-404-js-a32f578f0a0cee8e853c.js.map
