;(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    181: function(e, t, a) {
      'use strict'
      a.r(t)
      var i = a(0),
        n = a.n(i),
        r = a(183),
        s = a(189)
      a(203),
        a(193),
        (t.default = function() {
          return n.a.createElement(
            s.a,
            null,
            n.a.createElement('h2', null, "hey, I'm Fabien 👋"),
            n.a.createElement(
              'p',
              null,
              'I write ',
              n.a.createElement(r.Link, { to: '/code' }, 'code'),
              ', both on the backend & the frontend. Mostly in JavaScript, but also a bit of Python. I am currently living in Paris and am always open to new projects.'
            ),
            n.a.createElement(
              'p',
              null,
              'I take some ',
              n.a.createElement(r.Link, { to: '/photo' }, 'photos'),
              ' on my free time.'
            ),
            n.a.createElement('br', null),
            n.a.createElement(
              'p',
              null,
              '👀 ',
              n.a.createElement(
                'a',
                {
                  rel: 'noopener noreferer',
                  target: '_blank',
                  href: 'https://www.youtube.com/watch?v=MGE_61qLWm0',
                },
                'se coucher tard nuit'
              ),
              '.'
            )
          )
        })
    },
    183: function(e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'graphql', function() {
          return h
        }),
        a.d(t, 'StaticQueryContext', function() {
          return f
        }),
        a.d(t, 'StaticQuery', function() {
          return p
        })
      var i = a(0),
        n = a.n(i),
        r = a(4),
        s = a.n(r),
        l = a(182),
        o = a.n(l)
      a.d(t, 'Link', function() {
        return o.a
      }),
        a.d(t, 'withPrefix', function() {
          return l.withPrefix
        }),
        a.d(t, 'navigate', function() {
          return l.navigate
        }),
        a.d(t, 'push', function() {
          return l.push
        }),
        a.d(t, 'replace', function() {
          return l.replace
        }),
        a.d(t, 'navigateTo', function() {
          return l.navigateTo
        })
      var d = a(184),
        c = a.n(d)
      a.d(t, 'PageRenderer', function() {
        return c.a
      })
      var u = a(33)
      a.d(t, 'parsePath', function() {
        return u.a
      })
      var f = n.a.createContext({}),
        p = function(e) {
          return n.a.createElement(f.Consumer, null, function(t) {
            return e.data || (t[e.query] && t[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : t[e.query].data)
              : n.a.createElement('div', null, 'Loading (StaticQuery)')
          })
        }
      function h() {
        throw new Error(
          'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.'
        )
      }
      p.propTypes = {
        data: s.a.object,
        query: s.a.string.isRequired,
        render: s.a.func,
        children: s.a.func,
      }
    },
    184: function(e, t, a) {
      var i
      e.exports = ((i = a(186)) && i.default) || i
    },
    185: function(e) {
      e.exports = { data: { site: { siteMetadata: { title: 'fabien' } } } }
    },
    186: function(e, t, a) {
      'use strict'
      a.r(t)
      a(34)
      var i = a(0),
        n = a.n(i),
        r = a(4),
        s = a.n(r),
        l = a(53),
        o = a(2),
        d = function(e) {
          var t = e.location,
            a = o.default.getResourcesForPathnameSync(t.pathname)
          return n.a.createElement(
            l.a,
            Object.assign({ location: t, pageResources: a }, a.json)
          )
        }
      ;(d.propTypes = {
        location: s.a.shape({ pathname: s.a.string.isRequired }).isRequired,
      }),
        (t.default = d)
    },
    187: function(e, t, a) {},
    189: function(e, t, a) {
      'use strict'
      var i = a(185),
        n = a(0),
        r = a.n(n),
        s = a(4),
        l = a.n(s),
        o = a(190),
        d = a.n(o),
        c = a(183),
        u = function(e) {
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
              c.Link,
              { activeClassName: 'active', to: '/' },
              r.a.createElement('h1', null, 'fabien')
            ),
            r.a.createElement(
              c.Link,
              { activeClassName: 'active', to: '/photo' },
              'photo'
            ),
            r.a.createElement(
              c.Link,
              { activeClassName: 'active', to: '/code' },
              'code'
            )
          )
        },
        f = (a(187),
        function(e) {
          var t = e.children
          return r.a.createElement(c.StaticQuery, {
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
                  d.a,
                  {
                    title: e.site.siteMetadata.title,
                    meta: [
                      { name: 'description', content: 'Sample' },
                      { name: 'keywords', content: 'sample, something' },
                    ],
                  },
                  r.a.createElement('html', { lang: 'en' })
                ),
                r.a.createElement(u, { siteTitle: e.site.siteMetadata.title }),
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
            data: i,
          })
        })
      f.propTypes = { children: l.a.node.isRequired }
      t.a = f
    },
    193: function(e, t, a) {
      'use strict'
      var i = a(35)
      ;(t.__esModule = !0), (t.default = void 0)
      var n,
        r = i(a(7)),
        s = i(a(54)),
        l = i(a(191)),
        o = i(a(192)),
        d = i(a(0)),
        c = i(a(4)),
        u = function(e) {
          var t = (0, o.default)({}, e)
          return (
            t.resolutions && ((t.fixed = t.resolutions), delete t.resolutions),
            t.sizes && ((t.fluid = t.sizes), delete t.sizes),
            t
          )
        },
        f = {},
        p = function(e) {
          var t = u(e),
            a = t.fluid ? t.fluid.src : t.fixed.src
          return !!f[a] || ((f[a] = !0), !1)
        },
        h = []
      var m = function(e, t) {
          ;(void 0 === n &&
            'undefined' != typeof window &&
            window.IntersectionObserver &&
            (n = new window.IntersectionObserver(
              function(e) {
                e.forEach(function(e) {
                  h.forEach(function(t) {
                    t[0] === e.target &&
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                      (n.unobserve(t[0]), t[1]())
                  })
                })
              },
              { rootMargin: '200px' }
            )),
          n).observe(e),
            h.push([e, t])
        },
        g = function(e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            a = e.sizes ? 'sizes="' + e.sizes + '" ' : '',
            i = e.srcSetWebp
              ? "<source type='image/webp' srcSet=\"" +
                e.srcSetWebp +
                '" ' +
                a +
                '/>'
              : '',
            n = e.srcSet ? '<source srcSet="' + e.srcSet + '" ' + a + '/>' : '',
            r = e.title ? 'title="' + e.title + '" ' : '',
            s = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            l = e.width ? 'width="' + e.width + '" ' : '',
            o = e.height ? 'height="' + e.height + '" ' : '',
            d = e.opacity ? e.opacity : '1'
          return (
            '<picture>' +
            i +
            n +
            '<img ' +
            l +
            o +
            t +
            s +
            r +
            'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:' +
            (e.transitionDelay ? e.transitionDelay : '0.5s') +
            ';opacity:' +
            d +
            ';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
          )
        },
        y = d.default.forwardRef(function(e, t) {
          var a = e.style,
            i = e.onLoad,
            n = e.onError,
            r = (0, l.default)(e, ['style', 'onLoad', 'onError'])
          return d.default.createElement(
            'img',
            (0, o.default)({}, r, {
              onLoad: i,
              onError: n,
              ref: t,
              style: (0, o.default)(
                {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                },
                a
              ),
            })
          )
        })
      y.propTypes = {
        style: c.default.object,
        onError: c.default.func,
        onLoad: c.default.func,
      }
      var b = (function(e) {
        function t(t) {
          var a
          a = e.call(this, t) || this
          var i = !0,
            n = !0,
            r = !1,
            l = t.fadeIn,
            o = p(t)
          !o &&
            'undefined' != typeof window &&
            window.IntersectionObserver &&
            ((i = !1), (n = !1), (r = !0)),
            'undefined' == typeof window && ((i = !1), (n = !1)),
            t.critical && ((i = !0), (n = !1), (r = !1))
          var c = !(a.props.critical && !a.props.fadeIn)
          return (
            (a.state = {
              isVisible: i,
              imgLoaded: n,
              IOSupported: r,
              fadeIn: l,
              hasNoScript: c,
              seenBefore: o,
            }),
            (a.imageRef = d.default.createRef()),
            (a.handleImageLoaded = a.handleImageLoaded.bind(
              (0, s.default)((0, s.default)(a))
            )),
            (a.handleRef = a.handleRef.bind((0, s.default)((0, s.default)(a)))),
            a
          )
        }
        ;(0, r.default)(t, e)
        var a = t.prototype
        return (
          (a.componentDidMount = function() {
            if (this.props.critical) {
              var e = this.imageRef.current
              e && e.complete && this.handleImageLoaded()
            }
          }),
          (a.handleRef = function(e) {
            var t = this
            this.state.IOSupported &&
              e &&
              m(e, function() {
                t.setState({ isVisible: !0 })
              })
          }),
          (a.handleImageLoaded = function() {
            this.setState({ imgLoaded: !0 }),
              this.state.seenBefore && this.setState({ fadeIn: !1 }),
              this.props.onLoad && this.props.onLoad()
          }),
          (a.render = function() {
            var e = u(this.props),
              t = e.title,
              a = e.alt,
              i = e.className,
              n = e.style,
              r = void 0 === n ? {} : n,
              s = e.imgStyle,
              l = void 0 === s ? {} : s,
              c = e.placeholderStyle,
              f = void 0 === c ? {} : c,
              p = e.fluid,
              h = e.fixed,
              m = e.backgroundColor,
              b = e.Tag,
              v = 'boolean' == typeof m ? 'lightgray' : m,
              w = (0, o.default)(
                {
                  opacity: this.state.imgLoaded ? 0 : 1,
                  transition: 'opacity 0.5s',
                  transitionDelay: this.state.imgLoaded ? '0.5s' : '0.25s',
                },
                l,
                f
              ),
              E = (0, o.default)(
                {
                  opacity:
                    this.state.imgLoaded || !1 === this.state.fadeIn ? 1 : 0,
                  transition:
                    !0 === this.state.fadeIn ? 'opacity 0.5s' : 'none',
                },
                l
              )
            if (p) {
              var S = p
              return d.default.createElement(
                b,
                {
                  className: (i || '') + ' gatsby-image-wrapper',
                  style: (0, o.default)(
                    { position: 'relative', overflow: 'hidden' },
                    r
                  ),
                  ref: this.handleRef,
                  key: 'fluid-' + JSON.stringify(S.srcSet),
                },
                d.default.createElement(b, {
                  style: {
                    width: '100%',
                    paddingBottom: 100 / S.aspectRatio + '%',
                  },
                }),
                S.base64 &&
                  d.default.createElement(y, {
                    alt: this.state.isVisible ? '' : a,
                    title: t,
                    src: S.base64,
                    style: w,
                  }),
                S.tracedSVG &&
                  d.default.createElement(y, {
                    alt: this.state.isVisible ? '' : a,
                    title: t,
                    src: S.tracedSVG,
                    style: w,
                  }),
                v &&
                  d.default.createElement(b, {
                    title: t,
                    style: {
                      backgroundColor: v,
                      position: 'absolute',
                      top: 0,
                      bottom: 0,
                      opacity: this.state.imgLoaded ? 0 : 1,
                      transitionDelay: '0.35s',
                      right: 0,
                      left: 0,
                    },
                  }),
                this.state.isVisible &&
                  d.default.createElement(
                    'picture',
                    null,
                    S.srcSetWebp &&
                      d.default.createElement('source', {
                        type: 'image/webp',
                        srcSet: S.srcSetWebp,
                        sizes: S.sizes,
                      }),
                    d.default.createElement('source', {
                      srcSet: S.srcSet,
                      sizes: S.sizes,
                    }),
                    d.default.createElement(y, {
                      alt: a,
                      title: t,
                      src: S.src,
                      style: E,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                    })
                  ),
                this.state.hasNoScript &&
                  d.default.createElement('noscript', {
                    dangerouslySetInnerHTML: {
                      __html: g((0, o.default)({ alt: a, title: t }, S)),
                    },
                  })
              )
            }
            if (h) {
              var L = h,
                R = (0, o.default)(
                  {
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'inline-block',
                    width: L.width,
                    height: L.height,
                  },
                  r
                )
              return (
                'inherit' === r.display && delete R.display,
                d.default.createElement(
                  b,
                  {
                    className: (i || '') + ' gatsby-image-wrapper',
                    style: R,
                    ref: this.handleRef,
                    key: 'fixed-' + JSON.stringify(L.srcSet),
                  },
                  L.base64 &&
                    d.default.createElement(y, {
                      alt: this.state.isVisible ? '' : a,
                      title: t,
                      src: L.base64,
                      style: w,
                    }),
                  L.tracedSVG &&
                    d.default.createElement(y, {
                      alt: this.state.isVisible ? '' : a,
                      title: t,
                      src: L.tracedSVG,
                      style: w,
                    }),
                  v &&
                    d.default.createElement(b, {
                      title: t,
                      style: {
                        backgroundColor: v,
                        width: L.width,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        transitionDelay: '0.25s',
                        height: L.height,
                      },
                    }),
                  this.state.isVisible &&
                    d.default.createElement(
                      'picture',
                      null,
                      L.srcSetWebp &&
                        d.default.createElement('source', {
                          type: 'image/webp',
                          srcSet: L.srcSetWebp,
                          sizes: L.sizes,
                        }),
                      d.default.createElement('source', {
                        srcSet: L.srcSet,
                        sizes: L.sizes,
                      }),
                      d.default.createElement(y, {
                        alt: a,
                        title: t,
                        width: L.width,
                        height: L.height,
                        src: L.src,
                        style: E,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                      })
                    ),
                  this.state.hasNoScript &&
                    d.default.createElement('noscript', {
                      dangerouslySetInnerHTML: {
                        __html: g(
                          (0, o.default)(
                            {
                              alt: a,
                              title: t,
                              width: L.width,
                              height: L.height,
                            },
                            L
                          )
                        ),
                      },
                    })
                )
              )
            }
            return null
          }),
          t
        )
      })(d.default.Component)
      b.defaultProps = { critical: !1, fadeIn: !0, alt: '', Tag: 'div' }
      var v = c.default.shape({
          width: c.default.number.isRequired,
          height: c.default.number.isRequired,
          src: c.default.string.isRequired,
          srcSet: c.default.string.isRequired,
          base64: c.default.string,
          tracedSVG: c.default.string,
          srcWebp: c.default.string,
          srcSetWebp: c.default.string,
        }),
        w = c.default.shape({
          aspectRatio: c.default.number.isRequired,
          src: c.default.string.isRequired,
          srcSet: c.default.string.isRequired,
          sizes: c.default.string.isRequired,
          base64: c.default.string,
          tracedSVG: c.default.string,
          srcWebp: c.default.string,
          srcSetWebp: c.default.string,
        })
      b.propTypes = {
        resolutions: v,
        sizes: w,
        fixed: v,
        fluid: w,
        fadeIn: c.default.bool,
        title: c.default.string,
        alt: c.default.string,
        className: c.default.oneOfType([c.default.string, c.default.object]),
        critical: c.default.bool,
        style: c.default.object,
        imgStyle: c.default.object,
        placeholderStyle: c.default.object,
        backgroundColor: c.default.oneOfType([
          c.default.string,
          c.default.bool,
        ]),
        onLoad: c.default.func,
        onError: c.default.func,
        Tag: c.default.string,
      }
      var E = b
      t.default = E
    },
    203: function(e) {
      e.exports = { data: { placeholderImage: null } }
    },
  },
])
//# sourceMappingURL=component---src-pages-index-js-7dd2446dd18b93725eab.js.map
