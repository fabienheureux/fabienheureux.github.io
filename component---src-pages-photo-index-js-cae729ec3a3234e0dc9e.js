;(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    178: function(e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'fluidImage', function() {
          return o
        }),
        a.d(t, 'pageQuery', function() {
          return d
        })
      var i = a(0),
        r = a.n(i),
        n = a(193),
        s = a.n(n),
        l = a(189)
      t.default = function(e) {
        return r.a.createElement(
          l.a,
          null,
          r.a.createElement(s.a, {
            style: { borderRadius: '3px', padding: '50px 0' },
            fluid: e.data.imageOne.childImageSharp.fluid,
          }),
          r.a.createElement(s.a, {
            style: { borderRadius: '3px', padding: '50px 0' },
            fluid: e.data.imageTwo.childImageSharp.fluid,
          })
        )
      }
      var o = '1079307711',
        d = '343627232'
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
        r = a.n(i),
        n = a(4),
        s = a.n(n),
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
        u = a.n(d)
      a.d(t, 'PageRenderer', function() {
        return u.a
      })
      var c = a(33)
      a.d(t, 'parsePath', function() {
        return c.a
      })
      var f = r.a.createContext({}),
        p = function(e) {
          return r.a.createElement(f.Consumer, null, function(t) {
            return e.data || (t[e.query] && t[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : t[e.query].data)
              : r.a.createElement('div', null, 'Loading (StaticQuery)')
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
        r = a.n(i),
        n = a(4),
        s = a.n(n),
        l = a(53),
        o = a(2),
        d = function(e) {
          var t = e.location,
            a = o.default.getResourcesForPathnameSync(t.pathname)
          return r.a.createElement(
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
        r = a(0),
        n = a.n(r),
        s = a(4),
        l = a.n(s),
        o = a(190),
        d = a.n(o),
        u = a(183),
        c = function(e) {
          e.siteTitle
          return n.a.createElement(
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
            n.a.createElement(
              u.Link,
              { activeClassName: 'active', to: '/' },
              n.a.createElement('h1', null, 'fabien')
            ),
            n.a.createElement(
              u.Link,
              { activeClassName: 'active', to: '/photo' },
              'photo'
            ),
            n.a.createElement(
              u.Link,
              { activeClassName: 'active', to: '/code' },
              'code'
            )
          )
        },
        f = (a(187),
        function(e) {
          var t = e.children
          return n.a.createElement(u.StaticQuery, {
            query: '755544856',
            render: function(e) {
              return n.a.createElement(
                'div',
                {
                  style: {
                    display: 'flex',
                    flexDirection: 'row',
                    height: '100vh',
                    padding: '1rem',
                  },
                },
                n.a.createElement(
                  d.a,
                  {
                    title: e.site.siteMetadata.title,
                    meta: [
                      { name: 'description', content: 'Sample' },
                      { name: 'keywords', content: 'sample, something' },
                    ],
                  },
                  n.a.createElement('html', { lang: 'en' })
                ),
                n.a.createElement(c, { siteTitle: e.site.siteMetadata.title }),
                n.a.createElement(
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
      var r,
        n = i(a(7)),
        s = i(a(54)),
        l = i(a(191)),
        o = i(a(192)),
        d = i(a(0)),
        u = i(a(4)),
        c = function(e) {
          var t = (0, o.default)({}, e)
          return (
            t.resolutions && ((t.fixed = t.resolutions), delete t.resolutions),
            t.sizes && ((t.fluid = t.sizes), delete t.sizes),
            t
          )
        },
        f = {},
        p = function(e) {
          var t = c(e),
            a = t.fluid ? t.fluid.src : t.fixed.src
          return !!f[a] || ((f[a] = !0), !1)
        },
        h = []
      var g = function(e, t) {
          ;(void 0 === r &&
            'undefined' != typeof window &&
            window.IntersectionObserver &&
            (r = new window.IntersectionObserver(
              function(e) {
                e.forEach(function(e) {
                  h.forEach(function(t) {
                    t[0] === e.target &&
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                      (r.unobserve(t[0]), t[1]())
                  })
                })
              },
              { rootMargin: '200px' }
            )),
          r).observe(e),
            h.push([e, t])
        },
        m = function(e) {
          var t = e.src ? 'src="' + e.src + '" ' : 'src="" ',
            a = e.sizes ? 'sizes="' + e.sizes + '" ' : '',
            i = e.srcSetWebp
              ? "<source type='image/webp' srcSet=\"" +
                e.srcSetWebp +
                '" ' +
                a +
                '/>'
              : '',
            r = e.srcSet ? '<source srcSet="' + e.srcSet + '" ' + a + '/>' : '',
            n = e.title ? 'title="' + e.title + '" ' : '',
            s = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            l = e.width ? 'width="' + e.width + '" ' : '',
            o = e.height ? 'height="' + e.height + '" ' : '',
            d = e.opacity ? e.opacity : '1'
          return (
            '<picture>' +
            i +
            r +
            '<img ' +
            l +
            o +
            t +
            s +
            n +
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
            r = e.onError,
            n = (0, l.default)(e, ['style', 'onLoad', 'onError'])
          return d.default.createElement(
            'img',
            (0, o.default)({}, n, {
              onLoad: i,
              onError: r,
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
        style: u.default.object,
        onError: u.default.func,
        onLoad: u.default.func,
      }
      var b = (function(e) {
        function t(t) {
          var a
          a = e.call(this, t) || this
          var i = !0,
            r = !0,
            n = !1,
            l = t.fadeIn,
            o = p(t)
          !o &&
            'undefined' != typeof window &&
            window.IntersectionObserver &&
            ((i = !1), (r = !1), (n = !0)),
            'undefined' == typeof window && ((i = !1), (r = !1)),
            t.critical && ((i = !0), (r = !1), (n = !1))
          var u = !(a.props.critical && !a.props.fadeIn)
          return (
            (a.state = {
              isVisible: i,
              imgLoaded: r,
              IOSupported: n,
              fadeIn: l,
              hasNoScript: u,
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
        ;(0, n.default)(t, e)
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
              g(e, function() {
                t.setState({ isVisible: !0 })
              })
          }),
          (a.handleImageLoaded = function() {
            this.setState({ imgLoaded: !0 }),
              this.state.seenBefore && this.setState({ fadeIn: !1 }),
              this.props.onLoad && this.props.onLoad()
          }),
          (a.render = function() {
            var e = c(this.props),
              t = e.title,
              a = e.alt,
              i = e.className,
              r = e.style,
              n = void 0 === r ? {} : r,
              s = e.imgStyle,
              l = void 0 === s ? {} : s,
              u = e.placeholderStyle,
              f = void 0 === u ? {} : u,
              p = e.fluid,
              h = e.fixed,
              g = e.backgroundColor,
              b = e.Tag,
              v = 'boolean' == typeof g ? 'lightgray' : g,
              w = (0, o.default)(
                {
                  opacity: this.state.imgLoaded ? 0 : 1,
                  transition: 'opacity 0.5s',
                  transitionDelay: this.state.imgLoaded ? '0.5s' : '0.25s',
                },
                l,
                f
              ),
              S = (0, o.default)(
                {
                  opacity:
                    this.state.imgLoaded || !1 === this.state.fadeIn ? 1 : 0,
                  transition:
                    !0 === this.state.fadeIn ? 'opacity 0.5s' : 'none',
                },
                l
              )
            if (p) {
              var E = p
              return d.default.createElement(
                b,
                {
                  className: (i || '') + ' gatsby-image-wrapper',
                  style: (0, o.default)(
                    { position: 'relative', overflow: 'hidden' },
                    n
                  ),
                  ref: this.handleRef,
                  key: 'fluid-' + JSON.stringify(E.srcSet),
                },
                d.default.createElement(b, {
                  style: {
                    width: '100%',
                    paddingBottom: 100 / E.aspectRatio + '%',
                  },
                }),
                E.base64 &&
                  d.default.createElement(y, {
                    alt: this.state.isVisible ? '' : a,
                    title: t,
                    src: E.base64,
                    style: w,
                  }),
                E.tracedSVG &&
                  d.default.createElement(y, {
                    alt: this.state.isVisible ? '' : a,
                    title: t,
                    src: E.tracedSVG,
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
                    E.srcSetWebp &&
                      d.default.createElement('source', {
                        type: 'image/webp',
                        srcSet: E.srcSetWebp,
                        sizes: E.sizes,
                      }),
                    d.default.createElement('source', {
                      srcSet: E.srcSet,
                      sizes: E.sizes,
                    }),
                    d.default.createElement(y, {
                      alt: a,
                      title: t,
                      src: E.src,
                      style: S,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                    })
                  ),
                this.state.hasNoScript &&
                  d.default.createElement('noscript', {
                    dangerouslySetInnerHTML: {
                      __html: m((0, o.default)({ alt: a, title: t }, E)),
                    },
                  })
              )
            }
            if (h) {
              var R = h,
                L = (0, o.default)(
                  {
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'inline-block',
                    width: R.width,
                    height: R.height,
                  },
                  n
                )
              return (
                'inherit' === n.display && delete L.display,
                d.default.createElement(
                  b,
                  {
                    className: (i || '') + ' gatsby-image-wrapper',
                    style: L,
                    ref: this.handleRef,
                    key: 'fixed-' + JSON.stringify(R.srcSet),
                  },
                  R.base64 &&
                    d.default.createElement(y, {
                      alt: this.state.isVisible ? '' : a,
                      title: t,
                      src: R.base64,
                      style: w,
                    }),
                  R.tracedSVG &&
                    d.default.createElement(y, {
                      alt: this.state.isVisible ? '' : a,
                      title: t,
                      src: R.tracedSVG,
                      style: w,
                    }),
                  v &&
                    d.default.createElement(b, {
                      title: t,
                      style: {
                        backgroundColor: v,
                        width: R.width,
                        opacity: this.state.imgLoaded ? 0 : 1,
                        transitionDelay: '0.25s',
                        height: R.height,
                      },
                    }),
                  this.state.isVisible &&
                    d.default.createElement(
                      'picture',
                      null,
                      R.srcSetWebp &&
                        d.default.createElement('source', {
                          type: 'image/webp',
                          srcSet: R.srcSetWebp,
                          sizes: R.sizes,
                        }),
                      d.default.createElement('source', {
                        srcSet: R.srcSet,
                        sizes: R.sizes,
                      }),
                      d.default.createElement(y, {
                        alt: a,
                        title: t,
                        width: R.width,
                        height: R.height,
                        src: R.src,
                        style: S,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                      })
                    ),
                  this.state.hasNoScript &&
                    d.default.createElement('noscript', {
                      dangerouslySetInnerHTML: {
                        __html: m(
                          (0, o.default)(
                            {
                              alt: a,
                              title: t,
                              width: R.width,
                              height: R.height,
                            },
                            R
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
      var v = u.default.shape({
          width: u.default.number.isRequired,
          height: u.default.number.isRequired,
          src: u.default.string.isRequired,
          srcSet: u.default.string.isRequired,
          base64: u.default.string,
          tracedSVG: u.default.string,
          srcWebp: u.default.string,
          srcSetWebp: u.default.string,
        }),
        w = u.default.shape({
          aspectRatio: u.default.number.isRequired,
          src: u.default.string.isRequired,
          srcSet: u.default.string.isRequired,
          sizes: u.default.string.isRequired,
          base64: u.default.string,
          tracedSVG: u.default.string,
          srcWebp: u.default.string,
          srcSetWebp: u.default.string,
        })
      b.propTypes = {
        resolutions: v,
        sizes: w,
        fixed: v,
        fluid: w,
        fadeIn: u.default.bool,
        title: u.default.string,
        alt: u.default.string,
        className: u.default.oneOfType([u.default.string, u.default.object]),
        critical: u.default.bool,
        style: u.default.object,
        imgStyle: u.default.object,
        placeholderStyle: u.default.object,
        backgroundColor: u.default.oneOfType([
          u.default.string,
          u.default.bool,
        ]),
        onLoad: u.default.func,
        onError: u.default.func,
        Tag: u.default.string,
      }
      var S = b
      t.default = S
    },
  },
])
//# sourceMappingURL=component---src-pages-photo-index-js-cae729ec3a3234e0dc9e.js.map
