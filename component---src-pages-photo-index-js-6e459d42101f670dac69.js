;(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    178: function(e, t, n) {
      'use strict'
      n.r(t)
      var a = n(0),
        r = n.n(a),
        i = (n(183), n(189)),
        c = n(204),
        o = n.n(c),
        u = n(205),
        s = n.n(u),
        l = function(e) {
          var t = e.src
          return r.a.createElement('img', {
            style: { borderRadius: '3px', padding: '50px 0' },
            src: t,
          })
        }
      t.default = function() {
        return r.a.createElement(
          i.a,
          null,
          r.a.createElement(l, { src: s.a }),
          r.a.createElement(l, { src: o.a })
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
        c = n.n(i),
        o = n(182),
        u = n.n(o)
      n.d(t, 'Link', function() {
        return u.a
      }),
        n.d(t, 'withPrefix', function() {
          return o.withPrefix
        }),
        n.d(t, 'navigate', function() {
          return o.navigate
        }),
        n.d(t, 'push', function() {
          return o.push
        }),
        n.d(t, 'replace', function() {
          return o.replace
        }),
        n.d(t, 'navigateTo', function() {
          return o.navigateTo
        })
      var s = n(184),
        l = n.n(s)
      n.d(t, 'PageRenderer', function() {
        return l.a
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
        data: c.a.object,
        query: c.a.string.isRequired,
        render: c.a.func,
        children: c.a.func,
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
        c = n.n(i),
        o = n(53),
        u = n(2),
        s = function(e) {
          var t = e.location,
            n = u.default.getResourcesForPathnameSync(t.pathname)
          return r.a.createElement(
            o.a,
            Object.assign({ location: t, pageResources: n }, n.json)
          )
        }
      ;(s.propTypes = {
        location: c.a.shape({ pathname: c.a.string.isRequired }).isRequired,
      }),
        (t.default = s)
    },
    187: function(e, t, n) {},
    189: function(e, t, n) {
      'use strict'
      var a = n(185),
        r = n(0),
        i = n.n(r),
        c = n(4),
        o = n.n(c),
        u = n(190),
        s = n.n(u),
        l = n(183),
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
              l.Link,
              { activeClassName: 'active', to: '/' },
              i.a.createElement('h1', null, 'fabien')
            ),
            i.a.createElement(
              l.Link,
              { activeClassName: 'active', to: '/photo' },
              'photo'
            ),
            i.a.createElement(
              l.Link,
              { activeClassName: 'active', to: '/code' },
              'code'
            )
          )
        },
        f = (n(187),
        function(e) {
          var t = e.children
          return i.a.createElement(l.StaticQuery, {
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
                  s.a,
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
      f.propTypes = { children: o.a.node.isRequired }
      t.a = f
    },
    204: function(e, t, n) {
      e.exports = n.p + 'static/3-4a797f4f5b24fa798ebfc9fba760d4d6.jpg'
    },
    205: function(e, t, n) {
      e.exports = n.p + 'static/4-a20ba7aa7c4db6f07606c0587c01c0db.jpg'
    },
  },
])
//# sourceMappingURL=component---src-pages-photo-index-js-6e459d42101f670dac69.js.map
