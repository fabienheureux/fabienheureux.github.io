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
      a(202),
        a(203),
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
        o = a(182),
        l = a.n(o)
      a.d(t, 'Link', function() {
        return l.a
      }),
        a.d(t, 'withPrefix', function() {
          return o.withPrefix
        }),
        a.d(t, 'navigate', function() {
          return o.navigate
        }),
        a.d(t, 'push', function() {
          return o.push
        }),
        a.d(t, 'replace', function() {
          return o.replace
        }),
        a.d(t, 'navigateTo', function() {
          return o.navigateTo
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
        o = a(53),
        l = a(2),
        d = function(e) {
          var t = e.location,
            a = l.default.getResourcesForPathnameSync(t.pathname)
          return n.a.createElement(
            o.a,
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
        o = a.n(s),
        l = a(190),
        d = a.n(l),
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
      f.propTypes = { children: o.a.node.isRequired }
      t.a = f
    },
    202: function(e) {
      e.exports = {
        data: {
          placeholderImage: {
            childImageSharp: {
              fluid: {
                base64:
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==',
                aspectRatio: 1,
                src:
                  '/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-045aa.png',
                srcSet:
                  '/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-0552a.png 75w,\n/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-fc3be.png 150w,\n/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-045aa.png 300w,\n/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-24f49.png 450w,\n/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-5497d.png 600w,\n/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-483e1.png 800w',
                sizes: '(max-width: 300px) 100vw, 300px',
              },
            },
          },
        },
      }
    },
    203: function(e, t, a) {
      'use strict'
      var i = a(35)
      ;(t.__esModule = !0), (t.default = void 0)
      var n,
        r = i(a(7)),
        s = i(a(54)),
        o = i(a(192)),
        l = i(a(193)),
        d = i(a(0)),
        c = i(a(4)),
        u = function(e) {
          var t = (0, l.default)({}, e)
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
      var g = function(e, t) {
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
            n = e.srcSet ? '<source srcSet="' + e.srcSet + '" ' + a + '/>' : '',
            r = e.title ? 'title="' + e.title + '" ' : '',
            s = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" ',
            o = e.width ? 'width="' + e.width + '" ' : '',
            l = e.height ? 'height="' + e.height + '" ' : '',
            d = e.opacity ? e.opacity : '1'
          return (
            '<picture>' +
            i +
            n +
            '<img ' +
            o +
            l +
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
            r = (0, o.default)(e, ['style', 'onLoad', 'onError'])
          return d.default.createElement(
            'img',
            (0, l.default)({}, r, {
              onLoad: i,
              onError: n,
              ref: t,
              style: (0, l.default)(
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
            o = t.fadeIn,
            l = p(t)
          !l &&
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
              fadeIn: o,
              hasNoScript: c,
              seenBefore: l,
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
            var e = u(this.props),
              t = e.title,
              a = e.alt,
              i = e.className,
              n = e.style,
              r = void 0 === n ? {} : n,
              s = e.imgStyle,
              o = void 0 === s ? {} : s,
              c = e.placeholderStyle,
              f = void 0 === c ? {} : c,
              p = e.fluid,
              h = e.fixed,
              g = e.backgroundColor,
              b = e.Tag,
              v = 'boolean' == typeof g ? 'lightgray' : g,
              w = (0, l.default)(
                {
                  opacity: this.state.imgLoaded ? 0 : 1,
                  transition: 'opacity 0.5s',
                  transitionDelay: this.state.imgLoaded ? '0.5s' : '0.25s',
                },
                o,
                f
              ),
              E = (0, l.default)(
                {
                  opacity:
                    this.state.imgLoaded || !1 === this.state.fadeIn ? 1 : 0,
                  transition:
                    !0 === this.state.fadeIn ? 'opacity 0.5s' : 'none',
                },
                o
              )
            if (p) {
              var S = p
              return d.default.createElement(
                b,
                {
                  className: (i || '') + ' gatsby-image-wrapper',
                  style: (0, l.default)(
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
                      __html: m((0, l.default)({ alt: a, title: t }, S)),
                    },
                  })
              )
            }
            if (h) {
              var R = h,
                I = (0, l.default)(
                  {
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'inline-block',
                    width: R.width,
                    height: R.height,
                  },
                  r
                )
              return (
                'inherit' === r.display && delete I.display,
                d.default.createElement(
                  b,
                  {
                    className: (i || '') + ' gatsby-image-wrapper',
                    style: I,
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
                        style: E,
                        ref: this.imageRef,
                        onLoad: this.handleImageLoaded,
                        onError: this.props.onError,
                      })
                    ),
                  this.state.hasNoScript &&
                    d.default.createElement('noscript', {
                      dangerouslySetInnerHTML: {
                        __html: m(
                          (0, l.default)(
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
  },
])
//# sourceMappingURL=component---src-pages-index-js-c4afeb5da641a08e57bb.js.map
