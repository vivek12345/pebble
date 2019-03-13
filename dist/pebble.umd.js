(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom'], factory) :
    (global = global || self, factory(global.pebble = {}, global.React, global.ReactDOM));
}(this, function (exports, React, ReactDOM) { 'use strict';

    var React__default = 'default' in React ? React['default'] : React;
    var ReactDOM__default = 'default' in ReactDOM ? ReactDOM['default'] : ReactDOM;

    var textEllipsis = {
      overflowX: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    };
    var flexRow = {
      display: "flex",
      flexDirection: "row"
    };
    var flexSpaceBetween = Object.assign({}, flexRow, {
      justifyContent: "space-between",
      alignContent: "initial"
    });
    var flexMiddleAlign = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    };
    var getPlaceholderStyle = function getPlaceholderStyle(color) {
      return {
        "::-webkit-input-placeholder": {
          color: color
        },
        "::-moz-placeholder": {
          color: color
        },
        ":-ms-input-placeholder": {
          color: color
        },
        ":-moz-placeholder": {
          color: color
        },
        "::placeholder": {
          color: color
        }
      };
    };

    var mixins = /*#__PURE__*/Object.freeze({
        textEllipsis: textEllipsis,
        flexRow: flexRow,
        flexSpaceBetween: flexSpaceBetween,
        flexMiddleAlign: flexMiddleAlign,
        getPlaceholderStyle: getPlaceholderStyle
    });

    function memoize(fn) {
      var cache = {};
      return function (arg) {
        if (cache[arg] === undefined) cache[arg] = fn(arg);
        return cache[arg];
      };
    }

    var unitlessKeys = {
      animationIterationCount: 1,
      borderImageOutset: 1,
      borderImageSlice: 1,
      borderImageWidth: 1,
      boxFlex: 1,
      boxFlexGroup: 1,
      boxOrdinalGroup: 1,
      columnCount: 1,
      columns: 1,
      flex: 1,
      flexGrow: 1,
      flexPositive: 1,
      flexShrink: 1,
      flexNegative: 1,
      flexOrder: 1,
      gridRow: 1,
      gridRowEnd: 1,
      gridRowSpan: 1,
      gridRowStart: 1,
      gridColumn: 1,
      gridColumnEnd: 1,
      gridColumnSpan: 1,
      gridColumnStart: 1,
      fontWeight: 1,
      lineHeight: 1,
      opacity: 1,
      order: 1,
      orphans: 1,
      tabSize: 1,
      widows: 1,
      zIndex: 1,
      zoom: 1,
      WebkitLineClamp: 1,
      fillOpacity: 1,
      floodOpacity: 1,
      stopOpacity: 1,
      strokeDasharray: 1,
      strokeDashoffset: 1,
      strokeMiterlimit: 1,
      strokeOpacity: 1,
      strokeWidth: 1
    };

    function murmurhash2_32_gc(str) {
      var l = str.length,
          h = l ^ l,
          i = 0,
          k;
      while (l >= 4) {
        k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
        k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
        k ^= k >>> 24;
        k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
        h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
        l -= 4;
        ++i;
      }
      switch (l) {
        case 3:
          h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
        case 2:
          h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
        case 1:
          h ^= str.charCodeAt(i) & 0xff;
          h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
      }
      h ^= h >>> 13;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
      h ^= h >>> 15;
      return (h >>> 0).toString(36);
    }

    function stylis_min (W) {
      function M(d, c, e, h, a) {
        for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
          g = e.charCodeAt(l);
          l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);
          if (0 === b + n + v + m) {
            if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
              switch (g) {
                case 32:
                case 9:
                case 59:
                case 13:
                case 10:
                  break;
                default:
                  f += e.charAt(l);
              }
              g = 59;
            }
            switch (g) {
              case 123:
                f = f.trim();
                q = f.charCodeAt(0);
                k = 1;
                for (t = ++l; l < B;) {
                  switch (g = e.charCodeAt(l)) {
                    case 123:
                      k++;
                      break;
                    case 125:
                      k--;
                      break;
                    case 47:
                      switch (g = e.charCodeAt(l + 1)) {
                        case 42:
                        case 47:
                          a: {
                            for (u = l + 1; u < J; ++u) {
                              switch (e.charCodeAt(u)) {
                                case 47:
                                  if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                    l = u + 1;
                                    break a;
                                  }
                                  break;
                                case 10:
                                  if (47 === g) {
                                    l = u + 1;
                                    break a;
                                  }
                              }
                            }
                            l = u;
                          }
                      }
                      break;
                    case 91:
                      g++;
                    case 40:
                      g++;
                    case 34:
                    case 39:
                      for (; l++ < J && e.charCodeAt(l) !== g;) {
                      }
                  }
                  if (0 === k) break;
                  l++;
                }
                k = e.substring(t, l);
                0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));
                switch (q) {
                  case 64:
                    0 < r && (f = f.replace(N, ''));
                    g = f.charCodeAt(1);
                    switch (g) {
                      case 100:
                      case 109:
                      case 115:
                      case 45:
                        r = c;
                        break;
                      default:
                        r = O;
                    }
                    k = M(c, r, k, g, a + 1);
                    t = k.length;
                    0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                    if (0 < t) switch (g) {
                      case 115:
                        f = f.replace(da, ea);
                      case 100:
                      case 109:
                      case 45:
                        k = f + '{' + k + '}';
                        break;
                      case 107:
                        f = f.replace(fa, '$1 $2');
                        k = f + '{' + k + '}';
                        k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                        break;
                      default:
                        k = f + k, 112 === h && (k = (p += k, ''));
                    } else k = '';
                    break;
                  default:
                    k = M(c, X(c, f, I), k, h, a + 1);
                }
                F += k;
                k = I = r = u = q = 0;
                f = '';
                g = e.charCodeAt(++l);
                break;
              case 125:
              case 59:
                f = (0 < r ? f.replace(N, '') : f).trim();
                if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
                  case 0:
                    break;
                  case 64:
                    if (105 === g || 99 === g) {
                      G += f + e.charAt(l);
                      break;
                    }
                  default:
                    58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
                }
                I = r = u = q = 0;
                f = '';
                g = e.charCodeAt(++l);
            }
          }
          switch (g) {
            case 13:
            case 10:
              47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
              0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
              z = 1;
              D++;
              break;
            case 59:
            case 125:
              if (0 === b + n + v + m) {
                z++;
                break;
              }
            default:
              z++;
              y = e.charAt(l);
              switch (g) {
                case 9:
                case 32:
                  if (0 === n + m + b) switch (x) {
                    case 44:
                    case 58:
                    case 9:
                    case 32:
                      y = '';
                      break;
                    default:
                      32 !== g && (y = ' ');
                  }
                  break;
                case 0:
                  y = '\\0';
                  break;
                case 12:
                  y = '\\f';
                  break;
                case 11:
                  y = '\\v';
                  break;
                case 38:
                  0 === n + b + m && (r = I = 1, y = '\f' + y);
                  break;
                case 108:
                  if (0 === n + b + m + E && 0 < u) switch (l - u) {
                    case 2:
                      112 === x && 58 === e.charCodeAt(l - 3) && (E = x);
                    case 8:
                      111 === K && (E = K);
                  }
                  break;
                case 58:
                  0 === n + b + m && (u = l);
                  break;
                case 44:
                  0 === b + v + n + m && (r = 1, y += '\r');
                  break;
                case 34:
                case 39:
                  0 === b && (n = n === g ? 0 : 0 === n ? g : n);
                  break;
                case 91:
                  0 === n + b + v && m++;
                  break;
                case 93:
                  0 === n + b + v && m--;
                  break;
                case 41:
                  0 === n + b + m && v--;
                  break;
                case 40:
                  if (0 === n + b + m) {
                    if (0 === q) switch (2 * x + 3 * K) {
                      case 533:
                        break;
                      default:
                        q = 1;
                    }
                    v++;
                  }
                  break;
                case 64:
                  0 === b + v + n + m + u + k && (k = 1);
                  break;
                case 42:
                case 47:
                  if (!(0 < n + m + v)) switch (b) {
                    case 0:
                      switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                        case 235:
                          b = 47;
                          break;
                        case 220:
                          t = l, b = 42;
                      }
                      break;
                    case 42:
                      47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
                  }
              }
              0 === b && (f += y);
          }
          K = x;
          x = g;
          l++;
        }
        t = p.length;
        if (0 < t) {
          r = c;
          if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
          p = r.join(',') + '{' + p + '}';
          if (0 !== w * E) {
            2 !== w || L(p, 2) || (E = 0);
            switch (E) {
              case 111:
                p = p.replace(ha, ':-moz-$1') + p;
                break;
              case 112:
                p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
            }
            E = 0;
          }
        }
        return G + p + F;
      }
      function X(d, c, e) {
        var h = c.trim().split(ia);
        c = h;
        var a = h.length,
            m = d.length;
        switch (m) {
          case 0:
          case 1:
            var b = 0;
            for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
              c[b] = Z(d, c[b], e, m).trim();
            }
            break;
          default:
            var v = b = 0;
            for (c = []; b < a; ++b) {
              for (var n = 0; n < m; ++n) {
                c[v++] = Z(d[n] + ' ', h[b], e, m).trim();
              }
            }
        }
        return c;
      }
      function Z(d, c, e) {
        var h = c.charCodeAt(0);
        33 > h && (h = (c = c.trim()).charCodeAt(0));
        switch (h) {
          case 38:
            return c.replace(F, '$1' + d.trim());
          case 58:
            return d.trim() + c.replace(F, '$1' + d.trim());
          default:
            if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
        }
        return d + c;
      }
      function P(d, c, e, h) {
        var a = d + ';',
            m = 2 * c + 3 * e + 4 * h;
        if (944 === m) {
          d = a.indexOf(':', 9) + 1;
          var b = a.substring(d, a.length - 1).trim();
          b = a.substring(0, d).trim() + b + ';';
          return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
        }
        if (0 === w || 2 === w && !L(a, 1)) return a;
        switch (m) {
          case 1015:
            return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;
          case 951:
            return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;
          case 963:
            return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;
          case 1009:
            if (100 !== a.charCodeAt(4)) break;
          case 969:
          case 942:
            return '-webkit-' + a + a;
          case 978:
            return '-webkit-' + a + '-moz-' + a + a;
          case 1019:
          case 983:
            return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;
          case 883:
            if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
            if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
            break;
          case 932:
            if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
              case 103:
                return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;
              case 115:
                return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;
              case 98:
                return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
            }
            return '-webkit-' + a + '-ms-' + a + a;
          case 964:
            return '-webkit-' + a + '-ms-flex-' + a + a;
          case 1023:
            if (99 !== a.charCodeAt(8)) break;
            b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
            return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;
          case 1005:
            return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;
          case 1e3:
            b = a.substring(13).trim();
            c = b.indexOf('-') + 1;
            switch (b.charCodeAt(0) + b.charCodeAt(c)) {
              case 226:
                b = a.replace(G, 'tb');
                break;
              case 232:
                b = a.replace(G, 'tb-rl');
                break;
              case 220:
                b = a.replace(G, 'lr');
                break;
              default:
                return a;
            }
            return '-webkit-' + a + '-ms-' + b + a;
          case 1017:
            if (-1 === a.indexOf('sticky', 9)) break;
          case 975:
            c = (a = d).length - 10;
            b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();
            switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
              case 203:
                if (111 > b.charCodeAt(8)) break;
              case 115:
                a = a.replace(b, '-webkit-' + b) + ';' + a;
                break;
              case 207:
              case 102:
                a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
            }
            return a + ';';
          case 938:
            if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
              case 105:
                return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;
              case 115:
                return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;
              default:
                return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
            }
            break;
          case 973:
          case 989:
            if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;
          case 931:
          case 953:
            if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
            break;
          case 962:
            if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
        }
        return a;
      }
      function L(d, c) {
        var e = d.indexOf(1 === c ? ':' : '{'),
            h = d.substring(0, 3 !== c ? e : 10);
        e = d.substring(e + 1, d.length - 1);
        return R(2 !== c ? h : h.replace(na, '$1'), e, c);
      }
      function ea(d, c) {
        var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
        return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
      }
      function H(d, c, e, h, a, m, b, v, n, q) {
        for (var g = 0, x = c, w; g < A; ++g) {
          switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
            case void 0:
            case !1:
            case !0:
            case null:
              break;
            default:
              x = w;
          }
        }
        if (x !== c) return x;
      }
      function T(d) {
        switch (d) {
          case void 0:
          case null:
            A = S.length = 0;
            break;
          default:
            switch (d.constructor) {
              case Array:
                for (var c = 0, e = d.length; c < e; ++c) {
                  T(d[c]);
                }
                break;
              case Function:
                S[A++] = d;
                break;
              case Boolean:
                Y = !!d | 0;
            }
        }
        return T;
      }
      function U(d) {
        d = d.prefix;
        void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
        return U;
      }
      function B(d, c) {
        var e = d;
        33 > e.charCodeAt(0) && (e = e.trim());
        V = e;
        e = [V];
        if (0 < A) {
          var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
          void 0 !== h && 'string' === typeof h && (c = h);
        }
        var a = M(O, e, c, 0, 0);
        0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
        V = '';
        E = 0;
        z = D = 1;
        return a;
      }
      var ca = /^\0+/g,
          N = /[\0\r\f]/g,
          aa = /: */g,
          ka = /zoo|gra/,
          ma = /([,: ])(transform)/g,
          ia = /,\r+?/g,
          F = /([\t\r\n ])*\f?&/g,
          fa = /@(k\w+)\s*(\S*)\s*/,
          Q = /::(place)/g,
          ha = /:(read-only)/g,
          G = /[svh]\w+-[tblr]{2}/,
          da = /\(\s*(.*)\s*\)/g,
          oa = /([\s\S]*?);/g,
          ba = /-self|flex-/g,
          na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
          la = /stretch|:\s*\w+\-(?:conte|avail)/,
          ja = /([^-])(image-set\()/,
          z = 1,
          D = 1,
          E = 0,
          w = 1,
          O = [],
          S = [],
          A = 0,
          R = null,
          Y = 0,
          V = '';
      B.use = T;
      B.set = U;
      void 0 !== W && U(W);
      return B;
    }

    var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var stylisRuleSheet = createCommonjsModule(function (module, exports) {
    (function (factory) {
    	module['exports'] = factory();
    }(function () {
    	return function (insertRule) {
    		var delimiter = '/*|*/';
    		var needle = delimiter+'}';
    		function toSheet (block) {
    			if (block)
    				try {
    					insertRule(block + '}');
    				} catch (e) {}
    		}
    		return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
    			switch (context) {
    				case 1:
    					if (depth === 0 && content.charCodeAt(0) === 64)
    						return insertRule(content+';'), ''
    					break
    				case 2:
    					if (ns === 0)
    						return content + delimiter
    					break
    				case 3:
    					switch (ns) {
    						case 102:
    						case 112:
    							return insertRule(selectors[0]+content), ''
    						default:
    							return content + (at === 0 ? delimiter : '')
    					}
    				case -2:
    					content.split(needle).forEach(toSheet);
    			}
    		}
    	}
    }));
    });

    var hyphenateRegex = /[A-Z]|^ms/g;
    var processStyleName = memoize(function (styleName) {
      return styleName.replace(hyphenateRegex, '-$&').toLowerCase();
    });
    var processStyleValue = function processStyleValue(key, value) {
      if (value == null || typeof value === 'boolean') {
        return '';
      }
      if (unitlessKeys[key] !== 1 && key.charCodeAt(1) !== 45 &&
      !isNaN(value) && value !== 0) {
        return value + 'px';
      }
      return value;
    };
    if (process.env.NODE_ENV !== 'production') {
      var contentValuePattern = /(attr|calc|counters?|url)\(/;
      var contentValues = ['normal', 'none', 'counter', 'open-quote', 'close-quote', 'no-open-quote', 'no-close-quote', 'initial', 'inherit', 'unset'];
      var oldProcessStyleValue = processStyleValue;
      processStyleValue = function processStyleValue(key, value) {
        if (key === 'content') {
          if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
            console.error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
          }
        }
        return oldProcessStyleValue(key, value);
      };
    }
    var classnames = function classnames(args) {
      var len = args.length;
      var i = 0;
      var cls = '';
      for (; i < len; i++) {
        var arg = args[i];
        if (arg == null) continue;
        var toAdd = void 0;
        switch (typeof arg) {
          case 'boolean':
            break;
          case 'function':
            if (process.env.NODE_ENV !== 'production') {
              console.error('Passing functions to cx is deprecated and will be removed in the next major version of Emotion.\n' + 'Please call the function before passing it to cx.');
            }
            toAdd = classnames([arg()]);
            break;
          case 'object':
            {
              if (Array.isArray(arg)) {
                toAdd = classnames(arg);
              } else {
                toAdd = '';
                for (var k in arg) {
                  if (arg[k] && k) {
                    toAdd && (toAdd += ' ');
                    toAdd += k;
                  }
                }
              }
              break;
            }
          default:
            {
              toAdd = arg;
            }
        }
        if (toAdd) {
          cls && (cls += ' ');
          cls += toAdd;
        }
      }
      return cls;
    };
    var isBrowser = typeof document !== 'undefined';
    function sheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      }
      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
    function makeStyleTag(opts) {
      var tag = document.createElement('style');
      tag.setAttribute('data-emotion', opts.key || '');
      if (opts.nonce !== undefined) {
        tag.setAttribute('nonce', opts.nonce);
      }
      tag.appendChild(document.createTextNode(''))
      ;
      (opts.container !== undefined ? opts.container : document.head).appendChild(tag);
      return tag;
    }
    var StyleSheet =
    /*#__PURE__*/
    function () {
      function StyleSheet(options) {
        this.isSpeedy = process.env.NODE_ENV === 'production';
        this.tags = [];
        this.ctr = 0;
        this.opts = options;
      }
      var _proto = StyleSheet.prototype;
      _proto.inject = function inject() {
        if (this.injected) {
          throw new Error('already injected!');
        }
        this.tags[0] = makeStyleTag(this.opts);
        this.injected = true;
      };
      _proto.speedy = function speedy(bool) {
        if (this.ctr !== 0) {
          throw new Error("cannot change speedy now");
        }
        this.isSpeedy = !!bool;
      };
      _proto.insert = function insert(rule, sourceMap) {
        if (this.isSpeedy) {
          var tag = this.tags[this.tags.length - 1];
          var sheet = sheetForTag(tag);
          try {
            sheet.insertRule(rule, sheet.cssRules.length);
          } catch (e) {
            if (process.env.NODE_ENV !== 'production') {
              console.warn('illegal rule', rule);
            }
          }
        } else {
          var _tag = makeStyleTag(this.opts);
          this.tags.push(_tag);
          _tag.appendChild(document.createTextNode(rule + (sourceMap || '')));
        }
        this.ctr++;
        if (this.ctr % 65000 === 0) {
          this.tags.push(makeStyleTag(this.opts));
        }
      };
      _proto.flush = function flush() {
        this.tags.forEach(function (tag) {
          return tag.parentNode.removeChild(tag);
        });
        this.tags = [];
        this.ctr = 0;
        this.injected = false;
      };
      return StyleSheet;
    }();
    function createEmotion(context, options) {
      if (context.__SECRET_EMOTION__ !== undefined) {
        return context.__SECRET_EMOTION__;
      }
      if (options === undefined) options = {};
      var key = options.key || 'css';
      if (process.env.NODE_ENV !== 'production') {
        if (/[^a-z-]/.test(key)) {
          throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
        }
      }
      var current;
      function insertRule(rule) {
        current += rule;
        if (isBrowser) {
          sheet.insert(rule, currentSourceMap);
        }
      }
      var insertionPlugin = stylisRuleSheet(insertRule);
      var stylisOptions;
      if (options.prefix !== undefined) {
        stylisOptions = {
          prefix: options.prefix
        };
      }
      var caches = {
        registered: {},
        inserted: {},
        nonce: options.nonce,
        key: key
      };
      var sheet = new StyleSheet(options);
      if (isBrowser) {
        sheet.inject();
      }
      var stylis = new stylis_min(stylisOptions);
      stylis.use(options.stylisPlugins)(insertionPlugin);
      var currentSourceMap = '';
      function handleInterpolation(interpolation, couldBeSelectorInterpolation) {
        if (interpolation == null) {
          return '';
        }
        switch (typeof interpolation) {
          case 'boolean':
            return '';
          case 'function':
            if (interpolation.__emotion_styles !== undefined) {
              var selector = interpolation.toString();
              if (selector === 'NO_COMPONENT_SELECTOR' && process.env.NODE_ENV !== 'production') {
                throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
              }
              return selector;
            }
            if (this === undefined && process.env.NODE_ENV !== 'production') {
              console.error('Interpolating functions in css calls is deprecated and will be removed in the next major version of Emotion.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
            }
            return handleInterpolation.call(this, this === undefined ? interpolation() :
            interpolation(this.mergedProps, this.context), couldBeSelectorInterpolation);
          case 'object':
            return createStringFromObject.call(this, interpolation);
          default:
            var cached = caches.registered[interpolation];
            return couldBeSelectorInterpolation === false && cached !== undefined ? cached : interpolation;
        }
      }
      var objectToStringCache = new WeakMap();
      function createStringFromObject(obj) {
        if (objectToStringCache.has(obj)) {
          return objectToStringCache.get(obj);
        }
        var string = '';
        if (Array.isArray(obj)) {
          obj.forEach(function (interpolation) {
            string += handleInterpolation.call(this, interpolation, false);
          }, this);
        } else {
          Object.keys(obj).forEach(function (key) {
            if (typeof obj[key] !== 'object') {
              if (caches.registered[obj[key]] !== undefined) {
                string += key + "{" + caches.registered[obj[key]] + "}";
              } else {
                string += processStyleName(key) + ":" + processStyleValue(key, obj[key]) + ";";
              }
            } else {
              if (key === 'NO_COMPONENT_SELECTOR' && process.env.NODE_ENV !== 'production') {
                throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
              }
              if (Array.isArray(obj[key]) && typeof obj[key][0] === 'string' && caches.registered[obj[key][0]] === undefined) {
                obj[key].forEach(function (value) {
                  string += processStyleName(key) + ":" + processStyleValue(key, value) + ";";
                });
              } else {
                string += key + "{" + handleInterpolation.call(this, obj[key], false) + "}";
              }
            }
          }, this);
        }
        objectToStringCache.set(obj, string);
        return string;
      }
      var name;
      var stylesWithLabel;
      var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
      var createClassName = function createClassName(styles, identifierName) {
        return murmurhash2_32_gc(styles + identifierName) + identifierName;
      };
      if (process.env.NODE_ENV !== 'production') {
        var oldCreateClassName = createClassName;
        var sourceMappingUrlPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
        createClassName = function createClassName(styles, identifierName) {
          return oldCreateClassName(styles.replace(sourceMappingUrlPattern, function (sourceMap) {
            currentSourceMap = sourceMap;
            return '';
          }), identifierName);
        };
      }
      var createStyles = function createStyles(strings) {
        var stringMode = true;
        var styles = '';
        var identifierName = '';
        if (strings == null || strings.raw === undefined) {
          stringMode = false;
          styles += handleInterpolation.call(this, strings, false);
        } else {
          styles += strings[0];
        }
        for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          interpolations[_key - 1] = arguments[_key];
        }
        interpolations.forEach(function (interpolation, i) {
          styles += handleInterpolation.call(this, interpolation, styles.charCodeAt(styles.length - 1) === 46
          );
          if (stringMode === true && strings[i + 1] !== undefined) {
            styles += strings[i + 1];
          }
        }, this);
        stylesWithLabel = styles;
        styles = styles.replace(labelPattern, function (match, p1) {
          identifierName += "-" + p1;
          return '';
        });
        name = createClassName(styles, identifierName);
        return styles;
      };
      if (process.env.NODE_ENV !== 'production') {
        var oldStylis = stylis;
        stylis = function stylis(selector, styles) {
          oldStylis(selector, styles);
          currentSourceMap = '';
        };
      }
      function insert(scope, styles) {
        if (caches.inserted[name] === undefined) {
          current = '';
          stylis(scope, styles);
          caches.inserted[name] = current;
        }
      }
      var css = function css() {
        var styles = createStyles.apply(this, arguments);
        var selector = key + "-" + name;
        if (caches.registered[selector] === undefined) {
          caches.registered[selector] = stylesWithLabel;
        }
        insert("." + selector, styles);
        return selector;
      };
      var keyframes = function keyframes() {
        var styles = createStyles.apply(this, arguments);
        var animation = "animation-" + name;
        insert('', "@keyframes " + animation + "{" + styles + "}");
        return animation;
      };
      var injectGlobal = function injectGlobal() {
        var styles = createStyles.apply(this, arguments);
        insert('', styles);
      };
      function getRegisteredStyles(registeredStyles, classNames) {
        var rawClassName = '';
        classNames.split(' ').forEach(function (className) {
          if (caches.registered[className] !== undefined) {
            registeredStyles.push(className);
          } else {
            rawClassName += className + " ";
          }
        });
        return rawClassName;
      }
      function merge(className, sourceMap) {
        var registeredStyles = [];
        var rawClassName = getRegisteredStyles(registeredStyles, className);
        if (registeredStyles.length < 2) {
          return className;
        }
        return rawClassName + css(registeredStyles, sourceMap);
      }
      function cx() {
        for (var _len2 = arguments.length, classNames = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          classNames[_key2] = arguments[_key2];
        }
        return merge(classnames(classNames));
      }
      function hydrateSingleId(id) {
        caches.inserted[id] = true;
      }
      function hydrate(ids) {
        ids.forEach(hydrateSingleId);
      }
      function flush() {
        if (isBrowser) {
          sheet.flush();
          sheet.inject();
        }
        caches.inserted = {};
        caches.registered = {};
      }
      if (isBrowser) {
        var chunks = document.querySelectorAll("[data-emotion-" + key + "]");
        Array.prototype.forEach.call(chunks, function (node) {
          sheet.tags[0].parentNode.insertBefore(node, sheet.tags[0]);
          node.getAttribute("data-emotion-" + key).split(' ').forEach(hydrateSingleId);
        });
      }
      var emotion = {
        flush: flush,
        hydrate: hydrate,
        cx: cx,
        merge: merge,
        getRegisteredStyles: getRegisteredStyles,
        injectGlobal: injectGlobal,
        keyframes: keyframes,
        css: css,
        sheet: sheet,
        caches: caches
      };
      context.__SECRET_EMOTION__ = emotion;
      return emotion;
    }

    var context = typeof global !== 'undefined' ? global : {};
    var _createEmotion = createEmotion(context),
        flush = _createEmotion.flush,
        hydrate = _createEmotion.hydrate,
        cx = _createEmotion.cx,
        merge = _createEmotion.merge,
        getRegisteredStyles = _createEmotion.getRegisteredStyles,
        injectGlobal = _createEmotion.injectGlobal,
        keyframes = _createEmotion.keyframes,
        css = _createEmotion.css,
        sheet = _createEmotion.sheet,
        caches = _createEmotion.caches;

    var colors = {
      violet: {
        darker: "#4040BA",
        dark: "#5656ED",
        base: "#6161FF",
        light: "#7070FF",
        lighter: "#C0C0FF",
        lightest: "#E8E8FF"
      },
      green: {
        base: "#69C022",
        light: "#E8F6DD"
      },
      yellow: {
        base: "#F3AA07",
        light: "#FDF2DA"
      },
      blue: {
        base: "#1F69FF",
        light: "#DDE8FF"
      },
      white: {
        base: "#ffffff"
      },
      emerald: {
        darker: "#088649",
        dark: "#0E9A56",
        base: "#10AC60",
        light: "#40BD80",
        lighter: "#9DDCBE",
        lightest: "#DBF3E7"
      },
      red: {
        darker: "#A91D00",
        dark: "#BD2900",
        base: "#D32F02",
        light: "#D94C26",
        lighter: "#EFBBAD",
        lightest: "#F9E0D9"
      },
      purple: {
        base: "#9254E3",
        light: "#EFE6FB"
      },
      pink: {
        base: "#DC4276",
        light: "#FBDEE8"
      },
      teal: {
        base: "#47C1BF",
        light: "#E4F6F6"
      },
      coral: {
        base: "#ED754B",
        light: "#FDEBE4"
      },
      jade: {
        base: "#4BB952",
        light: "#E3F4E5"
      },
      gray: {
        darker: "#101721",
        dark: "#6B7785",
        base: "#9FA6B0",
        light: "#E0E0E0",
        lighter: "#EDEDED",
        lightest: "#F7F7F9"
      }
    };

    var constants = {
      borderRadius: 3,
      buttonHeight: 40,
      animationCurve: "cubic-bezier(.64,.09,.08,1)",
      padding: {
        base: 20,
        higher: 60
      },
      border: {
        base: "1px solid ".concat(colors.gray.light),
        light: "1px solid ".concat(colors.gray.lighter)
      },
      boxShadow: {
        base: "0 2px 7px 0 #F2F2F2",
        elevated: "0 4px 7px 0 ".concat(colors.gray.light),
        xElevated: "0 2px 15px 0 rgba(0,0,0,0.1)"
      }
    };

    var fontSize = {
      xs: 10,
      s: 12,
      normal: 14,
      l: 16,
      xl: 18,
      xll: 22
    };
    var typography = {
      xll: {
        regular: {
          fontWeight: 400
          ,
          color: colors.gray.darker,
          fontSize: fontSize.xll
        },
        bold: {
          fontWeight: 500
          ,
          color: colors.gray.darker,
          fontSize: fontSize.xll
        }
      },
      xl: {
        bold: {
          fontWeight: 500
          ,
          color: colors.gray.darker,
          fontSize: fontSize.xl
        }
      },
      l: {
        bold: {
          fontWeight: 500
          ,
          color: colors.gray.dark,
          fontSize: fontSize.l
        },
        light: {
          fontWeight: 400
          ,
          color: colors.gray.dark,
          fontSize: fontSize.l
        }
      },
      normal: {
        regular: {
          fontWeight: 400
          ,
          color: colors.gray.darker,
          fontSize: fontSize.normal
        },
        bold: {
          fontWeight: 500
          ,
          color: colors.gray.darker,
          fontSize: fontSize.normal
        },
        light: {
          fontWeight: 400
          ,
          color: colors.gray.dark,
          fontSize: fontSize.normal
        },
        lighter: {
          fontWeight: 400
          ,
          color: colors.gray.base,
          fontSize: fontSize.normal
        },
        link: {
          fontWeight: 400
          ,
          color: colors.violet.base,
          fontSize: fontSize.normal
        }
      },
      s: {
        regular: {
          fontWeight: 400
          ,
          color: colors.gray.darker,
          fontSize: fontSize.s
        },
        bold: {
          fontWeight: 500
          ,
          color: colors.gray.darker,
          fontSize: fontSize.s
        },
        light: {
          fontWeight: 400
          ,
          color: colors.gray.dark,
          fontSize: fontSize.s
        },
        lighter: {
          fontWeight: 400
          ,
          color: colors.gray.base,
          fontSize: fontSize.s
        },
        link: {
          fontWeight: 400
          ,
          color: colors.violet.base,
          fontSize: fontSize.s
        }
      },
      xs: {
        bold: {
          fontWeight: 500
          ,
          color: colors.gray.darker,
          fontSize: fontSize.xs
        },
        light: {
          fontWeight: 400
          ,
          color: colors.gray.dark,
          fontSize: fontSize.xs
        }
      }
    };

    var tableStyle =
    /*#__PURE__*/
    css(Object.assign({
      borderRadius: constants.borderRadius,
      border: constants.border.dark
    }, typography.s.regular, {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
      backgroundColor: colors.gray.lightest,
      "tr:last-child": {
        td: {
          border: 0
        },
        "td:first-child": {
          borderBottomLeftRadius: constants.borderRadius
        },
        "td:last-child": {
          borderBottomRightRadius: constants.borderRadius
        }
      },
      "tr:first-child": {
        "th:first-child": {
          borderLeftLeftRadius: constants.borderRadius
        },
        "th:last-child": {
          borderLeftRightRadius: constants.borderRadius
        }
      },
      th: Object.assign({
        textAlign: "left"
      }, typography.xs.bold, {
        color: colors.gray.dark
      }),
      "tbody > tr:nth-of-type(2n + 1)": {
        backgroundColor: colors.white.base
      },
      "th, td": {
        height: 50,
        padding: "10px 25px",
        borderBottom: constants.border.dark
      }
    }));
    var disableScrollY =
    /*#__PURE__*/
    css({
      overflowY: "hidden"
    });

    var styles = /*#__PURE__*/Object.freeze({
        tableStyle: tableStyle,
        disableScrollY: disableScrollY
    });

    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }

      if (info.done) {
        resolve(value);
      } else {
        Promise.resolve(value).then(_next, _throw);
      }
    }

    function _asyncToGenerator(fn) {
      return function () {
        var self = this,
            args = arguments;
        return new Promise(function (resolve, reject) {
          var gen = fn.apply(self, args);

          function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }

          function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
          }

          _next(undefined);
        });
      };
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }

      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }

    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    function _possibleConstructorReturn(self, call) {
      if (call && (typeof call === "object" || typeof call === "function")) {
        return call;
      }

      return _assertThisInitialized(self);
    }

    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }

    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

        return arr2;
      }
    }

    function _iterableToArray(iter) {
      if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
    }

    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    }

    var violet = colors.violet,
        gray = colors.gray,
        white = colors.white,
        red = colors.red,
        emerald = colors.emerald;
    var smallButtonHeight = 40;
    var commonButtonStyle =
    /*#__PURE__*/
    css({
      lineHeight: "23px",
      height: constants.buttonHeight,
      padding: "0 20px",
      display: "flex",
      alignItems: "center",
      transition: "all ease-out .2s",
      borderRadius: constants.borderRadius,
      outline: "none",
      position: "relative",
      overflow: "hidden",
      cursor: "pointer",
      whiteSpace: "nowrap",
      justifyContent: "center",
      border: 0,
      "&[disabled]": {
        cursor: "not-allowed"
      }
    });
    var mappingColorByType = {
      primary: {
        base: violet.base,
        hover: violet.light,
        active: violet.dark,
        disabled: violet.lighter
      },
      secondary: {
        textColor: gray.darker,
        base: gray.lighter,
        hover: gray.lightest,
        active: gray.base,
        disabled: gray.lighter
      },
      success: {
        base: emerald.base,
        hover: emerald.light,
        active: emerald.dark,
        disabled: emerald.lighter
      },
      alert: {
        base: red.base,
        hover: red.light,
        active: red.dark,
        disabled: red.lighter
      }
    };
    var linkStyle = {
      backgroundColor: "transparent",
      border: 0,
      color: violet.base,
      minWidth: 0,
      padding: 0,
      fontSize: 14,
      ":not([disabled]):hover": {
        textDecoration: "underline"
      },
      "&[disabled]": {
        color: violet.lighter
      }
    };
    var getStyleByType = function getStyleByType(type, filled) {
      if (type === "link") return linkStyle;
      var _color = mappingColorByType[type];
      var colorBase = _color.base,
          disabled = _color.disabled,
          hover = _color.hover,
          active = _color.active,
          textColor = _color.textColor;
      var defaultFontColor = filled ? textColor || white.base : colorBase;
      return {
        color: defaultFontColor,
        backgroundColor: filled ? colorBase : white.base,
        border: filled ? "none" : "1px solid ".concat(colorBase),
        "&:not([disabled]):hover": {
          color: textColor || white.base,
          backgroundColor: hover,
          borderColor: hover
        },
        "&:not([disabled]):active": {
          color: textColor || white.base,
          backgroundColor: active,
          borderColor: active
        },
        "&[disabled]": {
          color: textColor || white.base,
          backgroundColor: disabled,
          borderColor: disabled
        }
      };
    };
    var styleBasedOnSize = {
      "x-small": Object.assign({
        height: 25,
        minWidth: 70
      }, typography.xs.light),
      small: Object.assign({
        height: smallButtonHeight,
        minWidth: 100
      }, typography.s.regular),
      large: Object.assign({
        height: 50,
        minWidth: 140
      }, typography.normal.regular)
    };
    var getButtonStyle = function getButtonStyle(size, type, showShadow, filled) {
      return (
        /*#__PURE__*/
        css([commonButtonStyle, Object.assign({}, styleBasedOnSize[size], getStyleByType(type, filled), {
          boxShadow: showShadow ? constants.boxShadow.base : "none"
        })])
      );
    };
    var iconStyle =
    /*#__PURE__*/
    css({
      marginLeft: 15,
      fontWeight: "bold",
      fontSize: 8,
      transition: "transform ease-out .2s",
      willTransform: "transform",
      marginTop: 2,
      color: colors.gray.dark
    });
    var dropDownButtonStyle =
    /*#__PURE__*/
    css({
      border: constants.border.base,
      "&:not([disabled]):hover": {
        backgroundColor: colors.gray.lighter
      }
    });
    var dropDownButtonDefaultStyle =
    /*#__PURE__*/
    css({
      backgroundColor: colors.white.base,
      color: colors.gray.darker,
      "&:not([disabled]):hover": {
        backgroundColor: colors.gray.lighter
      }
    });

    var ink = createCommonjsModule(function (module) {
    module.exports=function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n});},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=7)}([function(t,e,o){var n=o(1),r=Math.sqrt(2),i=Math.cos,a=Math.max,u=Math.min;function s(t){return u(t.duration,Date.now()-t.mouseDown)}function c(t){return t.mouseUp>0?Date.now()-t.mouseUp:0}function l(t){var e=t.duration,o=t.radius,r=.85*n(s(t),0,o,e),u=.15*n(c(t),0,o,e),l=.02*o*i(Date.now()/e);return a(0,r+u+l)}t.exports={getMaxRadius:function(t,e,o){return u(.5*a(t,e),o)},getBlotOpacity:function(t,e){return n(c(t),e,-e,t.duration)},getBlotOuterOpacity:function(t,e){return u(this.getBlotOpacity(t,e),n(s(t),0,.3,3*t.duration))},getBlotShiftX:function(t,e,o){return u(1,l(t)/e*2/r)*(o/2-t.x)},getBlotShiftY:function(t,e,o){return u(1,l(t)/e*2/r)*(o/2-t.y)},getBlotScale:function(t){return l(t)/t.radius}};},function(t,e){t.exports=function(t,e,o,n){return o*((t=t/n-1)*t*t*t*t+1)+e};},function(t,e,o){var n=o(0),r=function(t){var e=t.mouseUp,o=t.duration;return !e||Date.now()-e<o};t.exports=function(t){var e=[],o=!1,i=void 0,a={each:function(t,o){for(var n=0,r=e.length;n<r;n++)t.call(o,e[n]);},play:function(){o||(o=!0,a.update());},stop:function(){o=!1,cancelAnimationFrame(i);},getTotalOpacity:function(t){for(var o=0,r=0,i=e.length;r<i;r++)o+=n.getBlotOuterOpacity(e[r],t);return o},update:function(){(e=e.filter(r)).length?i=requestAnimationFrame(a.update):a.stop(),t();},add:function(t){e.push(t),a.play();},release:function(t){for(var o=e.length-1;o>=0;o--)if(!e[o].mouseUp)return e[o].mouseUp=t}};return a};},function(t,e){t.exports={borderRadius:"inherit",height:"100%",left:0,position:"absolute",top:0,width:"100%"};},function(t,e){t.exports=React__default;},function(t,e){t.exports=function(t){return (window.devicePixelRatio||1)/(t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1)};},function(t,e){var o=!1;"undefined"!=typeof window&&(o="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),t.exports=o;},function(t,e,o){var n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);}return t};var r=o(6),i=0,a=o(5),u=o(4),s=o(3),c=o(2),l=2*Math.PI,p=o(0),f=function(t){function e(o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.apply(this,arguments));return n.tick=function(){var t=n.state,e=t.ctx,o=t.color,r=t.density,i=t.height,a=t.width,u=t.store;e.save(),e.scale(r,r),e.clearRect(0,0,a,i),e.fillStyle=o,n.props.background&&(e.globalAlpha=u.getTotalOpacity(n.props.opacity),e.fillRect(0,0,a,i)),u.each(n.makeBlot,n),e.restore();},n._onPress=function(t){var e=t.button,o=t.ctrlKey,r=t.clientX,a=t.clientY,u=t.changedTouches,s=Date.now();if(u)for(var c=0;c<u.length;c++){var l=u[c],p=l.clientX,f=l.clientY;n.pushBlot(s,p,f);}else e!==i||o||n.pushBlot(s,r,a);},n._onRelease=function(){n.state.store.release(Date.now());},n.state={color:"transparent",density:1,height:0,store:c(n.tick),touchEvents:n.touchEvents(),width:0},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e);}(e,t),e.prototype.touchEvents=function(){return this.props.hasTouch?{onTouchStart:this._onPress,onTouchEnd:this._onRelease,onTouchCancel:this._onRelease}:{onMouseDown:this._onPress,onMouseUp:this._onRelease,onMouseLeave:this._onRelease}},e.prototype.makeBlot=function(t){var e=this.state,o=e.ctx,n=e.height,r=e.width,i=t.x,a=t.y,u=t.radius;if(o.globalAlpha=p.getBlotOpacity(t,this.props.opacity),o.beginPath(),this.props.recenter){var s=Math.max(n,r);i+=p.getBlotShiftX(t,s,r),a+=p.getBlotShiftY(t,s,n);}o.arc(i,a,u*p.getBlotScale(t),0,l),o.closePath(),o.fill();},e.prototype.componentWillUnmount=function(){this.state.store.stop();},e.prototype.pushBlot=function(t,e,o){var n=this,r=this.canvas;r.getDOMNode&&"function"==typeof r.getDOMNode&&(r=r.getDOMNode());var i=r.getBoundingClientRect(),u=i.top,s=i.bottom,c=i.left,l=i.right,f=window.getComputedStyle(r).color,h=this.state.ctx||r.getContext("2d"),d=a(h),y=s-u,g=l-c,v=p.getMaxRadius(y,g,this.props.radius);this.setState({color:f,ctx:h,density:d,height:y,width:g},function(){n.state.store.add({duration:n.props.duration,mouseDown:t,mouseUp:0,radius:v,x:e-c,y:o-u});});},e.prototype.setCanvas=function(t){this.canvas=t;},e.prototype.render=function(){var t=this.state,e=t.className,o=t.density,r=t.height,i=t.width,a=t.touchEvents;return u.createElement("canvas",n({className:e,ref:this.setCanvas.bind(this),style:n({},s,this.props.style),height:r*o,width:i*o,onDragOver:this._onRelease},a))},e}(u.PureComponent);f.defaultProps={background:!0,className:"ink",duration:1e3,opacity:.25,radius:150,recenter:!0,hasTouch:r},t.exports=f;}]);
    });
    var Ink = unwrapExports(ink);

    var bounceDelay =
    /*#__PURE__*/
    keyframes({
      "0%, 80%, 100%": {
        transform: "scale(0)"
      },
      "40%": {
        transform: "scale(1)"
      }
    });
    var spinnerStyle =
    /*#__PURE__*/
    css(Object.assign({}, flexSpaceBetween, {
      width: 70,
      "> div": {
        width: 18,
        height: 18,
        borderRadius: "100%",
        display: "inline-block",
        animation: "".concat(bounceDelay, " 1.4s infinite ease-in-out both"),
        "&:first-of-type": {
          animationDelay: "-0.32s"
        },
        "&:nth-of-type(2n)": {
          animationDelay: "-0.16s"
        }
      }
    }));

    var Loader = function Loader(_ref) {
      var _ref$color = _ref.color,
          color = _ref$color === void 0 ? colors.gray.darker : _ref$color,
          _ref$scale = _ref.scale,
          scale = _ref$scale === void 0 ? 1 : _ref$scale,
          className = _ref.className;
      var style = {
        backgroundColor: color
      };
      return React.createElement("div", {
        className: cx(spinnerStyle, className),
        style: {
          transform: "scale(".concat(scale, ")")
        }
      }, React.createElement("div", {
        style: style
      }), React.createElement("div", {
        style: style
      }), React.createElement("div", {
        style: style
      }));
    };

    var Button = function Button(_ref) {
      var _ref$type = _ref.type,
          type = _ref$type === void 0 ? "primary" : _ref$type,
          disabled = _ref.disabled,
          children = _ref.children,
          onClick = _ref.onClick,
          width = _ref.width,
          showShadow = _ref.showShadow,
          className = _ref.className,
          _ref$showRipple = _ref.showRipple,
          showRipple = _ref$showRipple === void 0 ? true : _ref$showRipple,
          loading = _ref.loading,
          _ref$size = _ref.size,
          size = _ref$size === void 0 ? "small" : _ref$size;
      var disableAction = disabled || loading;
      var filled = size !== "x-small";
      var _className = cx(getButtonStyle(size, type, !!showShadow, filled), className);
      return React.createElement("button", {
        className: _className,
        onClick: !disableAction ? onClick : undefined,
        style: {
          width: width
        },
        disabled: disabled
      }, loading ? React.createElement(Loader, {
        color: colors.white.base,
        scale: 0.4
      }) : children, !disableAction && showRipple && type !== "link" && React.createElement(Ink, null));
    };
    var DropDownButton = function DropDownButton(_a) {
      var isOpen = _a.isOpen,
          isSelected = _a.isSelected,
          children = _a.children,
          className = _a.className,
          props = __rest(_a, ["isOpen", "isSelected", "children", "className"]);
      var _className = cx(dropDownButtonStyle, _defineProperty({}, dropDownButtonDefaultStyle, !(isOpen || isSelected)));
      return React.createElement(Button, Object.assign({}, props, {
        type: "secondary",
        className: cx(_className, className)
      }), React.createElement(React.Fragment, null, children, " ", React.createElement("i", {
        className: cx("pi pi-arrow-drop-down", iconStyle),
        style: {
          transform: isOpen ? "rotate(180deg)" : "none"
        }
      })));
    };

    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
    	if (val === null || val === undefined) {
    		throw new TypeError('Object.assign cannot be called with null or undefined');
    	}
    	return Object(val);
    }
    function shouldUseNative() {
    	try {
    		if (!Object.assign) {
    			return false;
    		}
    		var test1 = new String('abc');
    		test1[5] = 'de';
    		if (Object.getOwnPropertyNames(test1)[0] === '5') {
    			return false;
    		}
    		var test2 = {};
    		for (var i = 0; i < 10; i++) {
    			test2['_' + String.fromCharCode(i)] = i;
    		}
    		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
    			return test2[n];
    		});
    		if (order2.join('') !== '0123456789') {
    			return false;
    		}
    		var test3 = {};
    		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
    			test3[letter] = letter;
    		});
    		if (Object.keys(Object.assign({}, test3)).join('') !==
    				'abcdefghijklmnopqrst') {
    			return false;
    		}
    		return true;
    	} catch (err) {
    		return false;
    	}
    }
    var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
    	var from;
    	var to = toObject(target);
    	var symbols;
    	for (var s = 1; s < arguments.length; s++) {
    		from = Object(arguments[s]);
    		for (var key in from) {
    			if (hasOwnProperty.call(from, key)) {
    				to[key] = from[key];
    			}
    		}
    		if (getOwnPropertySymbols) {
    			symbols = getOwnPropertySymbols(from);
    			for (var i = 0; i < symbols.length; i++) {
    				if (propIsEnumerable.call(from, symbols[i])) {
    					to[symbols[i]] = from[symbols[i]];
    				}
    			}
    		}
    	}
    	return to;
    };

    var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    var ReactPropTypesSecret_1 = ReactPropTypesSecret;

    var printWarning = function() {};
    if (process.env.NODE_ENV !== 'production') {
      var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
      var loggedTypeFailures = {};
      printWarning = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {}
      };
    }
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (process.env.NODE_ENV !== 'production') {
        for (var typeSpecName in typeSpecs) {
          if (typeSpecs.hasOwnProperty(typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== 'function') {
                var err = Error(
                  (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
                  'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
                );
                err.name = 'Invariant Violation';
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || 'React class') + ': type specification of ' +
                location + ' `' + typeSpecName + '` is invalid; the type checker ' +
                'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
                'You may have forgotten to pass an argument to the type checker ' +
                'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
                'shape all require an argument).'
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : '';
              printWarning(
                'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
              );
            }
          }
        }
      }
    }
    var checkPropTypes_1 = checkPropTypes;

    var printWarning$1 = function() {};
    if (process.env.NODE_ENV !== 'production') {
      printWarning$1 = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {}
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = '@@iterator';
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
          return iteratorFn;
        }
      }
      var ANONYMOUS = '<<anonymous>>';
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker,
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message) {
        this.message = message;
        this.stack = '';
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (process.env.NODE_ENV !== 'production') {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret_1) {
            if (throwOnDirectAccess) {
              var err = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
                'Use `PropTypes.checkPropTypes()` to call them. ' +
                'Read more at http://fb.me/use-check-prop-types'
              );
              err.name = 'Invariant Violation';
              throw err;
            } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
              var cacheKey = componentName + ':' + propName;
              if (
                !manualPropTypeCallCache[cacheKey] &&
                manualPropTypeWarningCount < 3
              ) {
                printWarning$1(
                  'You are manually calling a React.PropTypes validation ' +
                  'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
                  'and will throw in the standalone `prop-types` package. ' +
                  'You may be seeing this warning due to a third-party PropTypes ' +
                  'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
              }
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== 'function') {
            return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== 'function') {
            return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
          }
          for (var key in propValue) {
            if (propValue.hasOwnProperty(key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== 'function') {
            printWarning$1(
              'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
              'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
            var checker = arrayOfTypeCheckers[i];
            if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
              return null;
            }
          }
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (!checker) {
              continue;
            }
            var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
          }
          var allKeys = objectAssign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (!checker) {
              return new PropTypeError(
                'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
                '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
                '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case 'number':
          case 'string':
          case 'undefined':
            return true;
          case 'boolean':
            return !propValue;
          case 'object':
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === 'symbol') {
          return true;
        }
        if (propValue['@@toStringTag'] === 'Symbol') {
          return true;
        }
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return 'array';
        }
        if (propValue instanceof RegExp) {
          return 'object';
        }
        if (isSymbol(propType, propValue)) {
          return 'symbol';
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
          return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
          if (propValue instanceof Date) {
            return 'date';
          } else if (propValue instanceof RegExp) {
            return 'regexp';
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case 'array':
          case 'object':
            return 'an ' + type;
          case 'boolean':
          case 'date':
          case 'regexp':
            return 'a ' + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes_1;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };

    function emptyFunction() {}
    var factoryWithThrowingShims = function() {
      function shim(props, propName, componentName, location, propFullName, secret) {
        if (secret === ReactPropTypesSecret_1) {
          return;
        }
        var err = new Error(
          'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
          'Use PropTypes.checkPropTypes() to call them. ' +
          'Read more at http://fb.me/use-check-prop-types'
        );
        err.name = 'Invariant Violation';
        throw err;
      }  shim.isRequired = shim;
      function getShim() {
        return shim;
      }  var ReactPropTypes = {
        array: shim,
        bool: shim,
        func: shim,
        number: shim,
        object: shim,
        string: shim,
        symbol: shim,
        any: shim,
        arrayOf: getShim,
        element: shim,
        instanceOf: getShim,
        node: shim,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim
      };
      ReactPropTypes.checkPropTypes = emptyFunction;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };

    var propTypes = createCommonjsModule(function (module) {
    if (process.env.NODE_ENV !== 'production') {
      var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
        Symbol.for &&
        Symbol.for('react.element')) ||
        0xeac7;
      var isValidElement = function(object) {
        return typeof object === 'object' &&
          object !== null &&
          object.$$typeof === REACT_ELEMENT_TYPE;
      };
      var throwOnDirectAccess = true;
      module.exports = factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
    } else {
      module.exports = factoryWithThrowingShims();
    }
    });

    function componentWillMount() {
      var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
      if (state !== null && state !== undefined) {
        this.setState(state);
      }
    }
    function componentWillReceiveProps(nextProps) {
      function updater(prevState) {
        var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
        return state !== null && state !== undefined ? state : null;
      }
      this.setState(updater.bind(this));
    }
    function componentWillUpdate(nextProps, nextState) {
      try {
        var prevProps = this.props;
        var prevState = this.state;
        this.props = nextProps;
        this.state = nextState;
        this.__reactInternalSnapshotFlag = true;
        this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
          prevProps,
          prevState
        );
      } finally {
        this.props = prevProps;
        this.state = prevState;
      }
    }
    componentWillMount.__suppressDeprecationWarning = true;
    componentWillReceiveProps.__suppressDeprecationWarning = true;
    componentWillUpdate.__suppressDeprecationWarning = true;
    function polyfill(Component) {
      var prototype = Component.prototype;
      if (!prototype || !prototype.isReactComponent) {
        throw new Error('Can only polyfill class components');
      }
      if (
        typeof Component.getDerivedStateFromProps !== 'function' &&
        typeof prototype.getSnapshotBeforeUpdate !== 'function'
      ) {
        return Component;
      }
      var foundWillMountName = null;
      var foundWillReceivePropsName = null;
      var foundWillUpdateName = null;
      if (typeof prototype.componentWillMount === 'function') {
        foundWillMountName = 'componentWillMount';
      } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
        foundWillMountName = 'UNSAFE_componentWillMount';
      }
      if (typeof prototype.componentWillReceiveProps === 'function') {
        foundWillReceivePropsName = 'componentWillReceiveProps';
      } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
        foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
      }
      if (typeof prototype.componentWillUpdate === 'function') {
        foundWillUpdateName = 'componentWillUpdate';
      } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
        foundWillUpdateName = 'UNSAFE_componentWillUpdate';
      }
      if (
        foundWillMountName !== null ||
        foundWillReceivePropsName !== null ||
        foundWillUpdateName !== null
      ) {
        var componentName = Component.displayName || Component.name;
        var newApiName =
          typeof Component.getDerivedStateFromProps === 'function'
            ? 'getDerivedStateFromProps()'
            : 'getSnapshotBeforeUpdate()';
        throw Error(
          'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
            componentName +
            ' uses ' +
            newApiName +
            ' but also contains the following legacy lifecycles:' +
            (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
            (foundWillReceivePropsName !== null
              ? '\n  ' + foundWillReceivePropsName
              : '') +
            (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
            '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
            'https://fb.me/react-async-component-lifecycle-hooks'
        );
      }
      if (typeof Component.getDerivedStateFromProps === 'function') {
        prototype.componentWillMount = componentWillMount;
        prototype.componentWillReceiveProps = componentWillReceiveProps;
      }
      if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
        if (typeof prototype.componentDidUpdate !== 'function') {
          throw new Error(
            'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
          );
        }
        prototype.componentWillUpdate = componentWillUpdate;
        var componentDidUpdate = prototype.componentDidUpdate;
        prototype.componentDidUpdate = function componentDidUpdatePolyfill(
          prevProps,
          prevState,
          maybeSnapshot
        ) {
          var snapshot = this.__reactInternalSnapshotFlag
            ? this.__reactInternalSnapshot
            : maybeSnapshot;
          componentDidUpdate.call(this, prevProps, prevState, snapshot);
        };
      }
      return Component;
    }

    var reactLifecyclesCompat_es = /*#__PURE__*/Object.freeze({
        polyfill: polyfill
    });

    var entry = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var mergeClassNames = function mergeClassNames() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return args.reduce(function (classList, arg) {
        return typeof arg === 'string' || arg instanceof Array ? classList.concat(arg) : classList;
      }, []).filter(function (className) {
        return className;
      }).join(' ');
    };
    exports.default = mergeClassNames;
    });
    unwrapExports(entry);

    var dates = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getISOLocalDate = exports.getISOLocalMonth = exports.isWeekend = exports.getDecadeLabel = exports.getCenturyLabel = exports.getDaysInMonth = exports.getValueRange = exports.getRange = exports.getEndPrevious2 = exports.getEndPrevious = exports.getEnd = exports.getBeginNext2 = exports.getBeginPrevious2 = exports.getBeginNext = exports.getBeginPrevious = exports.getBegin = exports.getWeekNumber = exports.getDayRange = exports.getEndOfDay = exports.getBeginOfDay = exports.getBeginOfNextMonth = exports.getEndOfPreviousMonth = exports.getBeginOfPreviousMonth = exports.getMonthRange = exports.getBeginOfWeek = exports.getEndOfMonth = exports.getBeginOfMonth = exports.getBeginOfNextYear = exports.getEndOfPreviousYear = exports.getBeginOfPreviousYear = exports.getYearRange = exports.getEndOfYear = exports.getBeginOfYear = exports.getBeginOfNextDecade = exports.getEndOfPreviousDecade = exports.getBeginOfPreviousDecade = exports.getDecadeRange = exports.getEndOfDecade = exports.getBeginOfDecade = exports.getBeginOfDecadeYear = exports.getBeginOfNextCentury = exports.getEndOfPreviousCentury = exports.getBeginOfPreviousCentury = exports.getCenturyRange = exports.getEndOfCentury = exports.getBeginOfCentury = exports.getBeginOfCenturyYear = exports.getDayOfWeek = exports.getDay = exports.getMonthIndex = exports.getMonth = exports.getYear = void 0;
    function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }
    function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }
    function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }
    function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }
    function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }
    function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }
    function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
    function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
    var _map = _toConsumableArray(Array(7)).map(function (el, index) {
      return index;
    }),
        _map2 = _slicedToArray(_map, 7),
    SUNDAY = _map2[0],
        MONDAY = _map2[1],
        TUESDAY = _map2[2],
        WEDNESDAY = _map2[3],
        THURSDAY = _map2[4],
        FRIDAY = _map2[5],
        SATURDAY = _map2[6];
    var getYear = function getYear(date) {
      if (date instanceof Date) {
        return date.getFullYear();
      }
      if (typeof date === 'number') {
        return date;
      }
      var year = parseInt(date, 10);
      if (typeof date === 'string' && !isNaN(year)) {
        return year;
      }
      throw new Error("Failed to get year from date: ".concat(date, "."));
    };
    exports.getYear = getYear;
    var getMonth = function getMonth(date) {
      return date.getMonth() + 1;
    };
    exports.getMonth = getMonth;
    var getMonthIndex = function getMonthIndex(date) {
      return date.getMonth();
    };
    exports.getMonthIndex = getMonthIndex;
    var getDay = function getDay(date) {
      return date.getDate();
    };
    exports.getDay = getDay;
    var getDayOfWeek = function getDayOfWeek(date) {
      var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ISO 8601';
      var weekday = date.getDay();
      switch (calendarType) {
        case 'ISO 8601':
          return (weekday + 6) % 7;
        case 'Arabic':
          return (weekday + 1) % 7;
        case 'Hebrew':
        case 'US':
          return weekday;
        default:
          throw new Error('Unsupported calendar type.');
      }
    };
    exports.getDayOfWeek = getDayOfWeek;
    var getBeginOfCenturyYear = function getBeginOfCenturyYear(date) {
      var year = getYear(date) - 1;
      return year + -year % 100 + 1;
    };
    exports.getBeginOfCenturyYear = getBeginOfCenturyYear;
    var getBeginOfCentury = function getBeginOfCentury(date) {
      var beginOfCenturyYear = getBeginOfCenturyYear(date);
      return new Date(beginOfCenturyYear, 0, 1);
    };
    exports.getBeginOfCentury = getBeginOfCentury;
    var getEndOfCentury = function getEndOfCentury(date) {
      var beginOfCenturyYear = getBeginOfCenturyYear(date);
      return new Date(beginOfCenturyYear + 100, 0, 1, 0, 0, 0, -1);
    };
    exports.getEndOfCentury = getEndOfCentury;
    var getCenturyRange = function getCenturyRange(date) {
      return [getBeginOfCentury(date), getEndOfCentury(date)];
    };
    exports.getCenturyRange = getCenturyRange;
    var getBeginOfPreviousCentury = function getBeginOfPreviousCentury(date) {
      var previousCenturyYear = getYear(date) - 100;
      return getBeginOfCentury(previousCenturyYear);
    };
    exports.getBeginOfPreviousCentury = getBeginOfPreviousCentury;
    var getEndOfPreviousCentury = function getEndOfPreviousCentury(date) {
      var previousCenturyYear = getYear(date) - 100;
      return getEndOfCentury(previousCenturyYear);
    };
    exports.getEndOfPreviousCentury = getEndOfPreviousCentury;
    var getBeginOfNextCentury = function getBeginOfNextCentury(date) {
      var nextCenturyYear = getYear(date) + 100;
      return getBeginOfCentury(nextCenturyYear);
    };
    exports.getBeginOfNextCentury = getBeginOfNextCentury;
    var getBeginOfDecadeYear = function getBeginOfDecadeYear(date) {
      var year = getYear(date) - 1;
      return year + -year % 10 + 1;
    };
    exports.getBeginOfDecadeYear = getBeginOfDecadeYear;
    var getBeginOfDecade = function getBeginOfDecade(date) {
      var beginOfDecadeYear = getBeginOfDecadeYear(date);
      return new Date(beginOfDecadeYear, 0, 1);
    };
    exports.getBeginOfDecade = getBeginOfDecade;
    var getEndOfDecade = function getEndOfDecade(date) {
      var beginOfDecadeYear = getBeginOfDecadeYear(date);
      return new Date(beginOfDecadeYear + 10, 0, 1, 0, 0, 0, -1);
    };
    exports.getEndOfDecade = getEndOfDecade;
    var getDecadeRange = function getDecadeRange(date) {
      return [getBeginOfDecade(date), getEndOfDecade(date)];
    };
    exports.getDecadeRange = getDecadeRange;
    var getBeginOfPreviousDecade = function getBeginOfPreviousDecade(date) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
      var previousDecadeYear = getBeginOfDecadeYear(date) - offset;
      return getBeginOfDecade(previousDecadeYear);
    };
    exports.getBeginOfPreviousDecade = getBeginOfPreviousDecade;
    var getEndOfPreviousDecade = function getEndOfPreviousDecade(date) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
      var previousDecadeYear = getBeginOfDecadeYear(date) - offset;
      return getEndOfDecade(previousDecadeYear);
    };
    exports.getEndOfPreviousDecade = getEndOfPreviousDecade;
    var getBeginOfNextDecade = function getBeginOfNextDecade(date) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
      var nextDecadeYear = getBeginOfDecadeYear(date) + offset;
      return getBeginOfDecade(nextDecadeYear);
    };
    exports.getBeginOfNextDecade = getBeginOfNextDecade;
    var getBeginOfYear = function getBeginOfYear(date) {
      var year = getYear(date);
      return new Date(year, 0, 1);
    };
    exports.getBeginOfYear = getBeginOfYear;
    var getEndOfYear = function getEndOfYear(date) {
      var year = getYear(date);
      return new Date(year + 1, 0, 1, 0, 0, 0, -1);
    };
    exports.getEndOfYear = getEndOfYear;
    var getYearRange = function getYearRange(date) {
      return [getBeginOfYear(date), getEndOfYear(date)];
    };
    exports.getYearRange = getYearRange;
    var getBeginOfPreviousYear = function getBeginOfPreviousYear(date) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var previousYear = getYear(date) - offset;
      return getBeginOfYear(previousYear);
    };
    exports.getBeginOfPreviousYear = getBeginOfPreviousYear;
    var getEndOfPreviousYear = function getEndOfPreviousYear(date) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var previousYear = getYear(date) - offset;
      return getEndOfYear(previousYear);
    };
    exports.getEndOfPreviousYear = getEndOfPreviousYear;
    var getBeginOfNextYear = function getBeginOfNextYear(date) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var nextYear = getYear(date) + offset;
      return getBeginOfYear(nextYear);
    };
    exports.getBeginOfNextYear = getBeginOfNextYear;
    var getBeginOfMonth = function getBeginOfMonth(date) {
      var year = getYear(date);
      var monthIndex = getMonthIndex(date);
      return new Date(year, monthIndex, 1);
    };
    exports.getBeginOfMonth = getBeginOfMonth;
    var getEndOfMonth = function getEndOfMonth(date) {
      var year = getYear(date);
      var monthIndex = getMonthIndex(date);
      return new Date(year, monthIndex + 1, 1, 0, 0, 0, -1);
    };
    exports.getEndOfMonth = getEndOfMonth;
    var getBeginOfWeek = function getBeginOfWeek(date) {
      var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ISO 8601';
      var year = getYear(date);
      var monthIndex = getMonthIndex(date);
      var day = date.getDate() - getDayOfWeek(date, calendarType);
      return new Date(year, monthIndex, day);
    };
    exports.getBeginOfWeek = getBeginOfWeek;
    var getMonthRange = function getMonthRange(date) {
      return [getBeginOfMonth(date), getEndOfMonth(date)];
    };
    exports.getMonthRange = getMonthRange;
    var getDifferentMonth = function getDifferentMonth(date, offset) {
      var year = getYear(date);
      var previousMonthIndex = getMonthIndex(date) + offset;
      return new Date(year, previousMonthIndex, 1);
    };
    var getBeginOfPreviousMonth = function getBeginOfPreviousMonth(date) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var previousMonth = getDifferentMonth(date, -offset);
      return getBeginOfMonth(previousMonth);
    };
    exports.getBeginOfPreviousMonth = getBeginOfPreviousMonth;
    var getEndOfPreviousMonth = function getEndOfPreviousMonth(date) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var previousMonth = getDifferentMonth(date, -offset);
      return getEndOfMonth(previousMonth);
    };
    exports.getEndOfPreviousMonth = getEndOfPreviousMonth;
    var getBeginOfNextMonth = function getBeginOfNextMonth(date) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var nextMonth = getDifferentMonth(date, offset);
      return getBeginOfMonth(nextMonth);
    };
    exports.getBeginOfNextMonth = getBeginOfNextMonth;
    var getBeginOfDay = function getBeginOfDay(date) {
      var year = getYear(date);
      var monthIndex = getMonthIndex(date);
      var day = getDay(date);
      return new Date(year, monthIndex, day);
    };
    exports.getBeginOfDay = getBeginOfDay;
    var getEndOfDay = function getEndOfDay(date) {
      var year = getYear(date);
      var monthIndex = getMonthIndex(date);
      var day = getDay(date);
      return new Date(year, monthIndex, day + 1, 0, 0, 0, -1);
    };
    exports.getEndOfDay = getEndOfDay;
    var getDayRange = function getDayRange(date) {
      return [getBeginOfDay(date), getEndOfDay(date)];
    };
    exports.getDayRange = getDayRange;
    var getWeekNumber = function getWeekNumber(date) {
      var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ISO 8601';
      var calendarTypeForWeekNumber = calendarType === 'US' ? 'US' : 'ISO 8601';
      var beginOfWeek = getBeginOfWeek(date, calendarTypeForWeekNumber);
      var year = getYear(date) + 1;
      var dayInWeekOne;
      var beginOfFirstWeek;
      do {
        dayInWeekOne = new Date(year, 0, calendarTypeForWeekNumber === 'ISO 8601' ? 4 : 1);
        beginOfFirstWeek = getBeginOfWeek(dayInWeekOne, calendarTypeForWeekNumber);
        year -= 1;
      } while (date - beginOfFirstWeek < 0);
      return Math.round((beginOfWeek - beginOfFirstWeek) / (8.64e7 * 7)) + 1;
    };
    exports.getWeekNumber = getWeekNumber;
    var getBegin = function getBegin(rangeType, date) {
      switch (rangeType) {
        case 'century':
          return getBeginOfCentury(date);
        case 'decade':
          return getBeginOfDecade(date);
        case 'year':
          return getBeginOfYear(date);
        case 'month':
          return getBeginOfMonth(date);
        case 'day':
          return getBeginOfDay(date);
        default:
          throw new Error("Invalid rangeType: ".concat(rangeType));
      }
    };
    exports.getBegin = getBegin;
    var getBeginPrevious = function getBeginPrevious(rangeType, date) {
      switch (rangeType) {
        case 'century':
          return getBeginOfPreviousCentury(date);
        case 'decade':
          return getBeginOfPreviousDecade(date);
        case 'year':
          return getBeginOfPreviousYear(date);
        case 'month':
          return getBeginOfPreviousMonth(date);
        default:
          throw new Error("Invalid rangeType: ".concat(rangeType));
      }
    };
    exports.getBeginPrevious = getBeginPrevious;
    var getBeginNext = function getBeginNext(rangeType, date) {
      switch (rangeType) {
        case 'century':
          return getBeginOfNextCentury(date);
        case 'decade':
          return getBeginOfNextDecade(date);
        case 'year':
          return getBeginOfNextYear(date);
        case 'month':
          return getBeginOfNextMonth(date);
        default:
          throw new Error("Invalid rangeType: ".concat(rangeType));
      }
    };
    exports.getBeginNext = getBeginNext;
    var getBeginPrevious2 = function getBeginPrevious2(rangeType, date) {
      switch (rangeType) {
        case 'decade':
          return getBeginOfPreviousDecade(date, 100);
        case 'year':
          return getBeginOfPreviousYear(date, 10);
        case 'month':
          return getBeginOfPreviousMonth(date, 12);
        default:
          throw new Error("Invalid rangeType: ".concat(rangeType));
      }
    };
    exports.getBeginPrevious2 = getBeginPrevious2;
    var getBeginNext2 = function getBeginNext2(rangeType, date) {
      switch (rangeType) {
        case 'decade':
          return getBeginOfNextDecade(date, 100);
        case 'year':
          return getBeginOfNextYear(date, 10);
        case 'month':
          return getBeginOfNextMonth(date, 12);
        default:
          throw new Error("Invalid rangeType: ".concat(rangeType));
      }
    };
    exports.getBeginNext2 = getBeginNext2;
    var getEnd = function getEnd(rangeType, date) {
      switch (rangeType) {
        case 'century':
          return getEndOfCentury(date);
        case 'decade':
          return getEndOfDecade(date);
        case 'year':
          return getEndOfYear(date);
        case 'month':
          return getEndOfMonth(date);
        case 'day':
          return getEndOfDay(date);
        default:
          throw new Error("Invalid rangeType: ".concat(rangeType));
      }
    };
    exports.getEnd = getEnd;
    var getEndPrevious = function getEndPrevious(rangeType, date) {
      switch (rangeType) {
        case 'century':
          return getEndOfPreviousCentury(date);
        case 'decade':
          return getEndOfPreviousDecade(date);
        case 'year':
          return getEndOfPreviousYear(date);
        case 'month':
          return getEndOfPreviousMonth(date);
        default:
          throw new Error("Invalid rangeType: ".concat(rangeType));
      }
    };
    exports.getEndPrevious = getEndPrevious;
    var getEndPrevious2 = function getEndPrevious2(rangeType, date) {
      switch (rangeType) {
        case 'decade':
          return getEndOfPreviousDecade(date, 100);
        case 'year':
          return getEndOfPreviousYear(date, 10);
        case 'month':
          return getEndOfPreviousMonth(date, 12);
        default:
          throw new Error("Invalid rangeType: ".concat(rangeType));
      }
    };
    exports.getEndPrevious2 = getEndPrevious2;
    var getRange = function getRange(rangeType, date) {
      switch (rangeType) {
        case 'century':
          return getCenturyRange(date);
        case 'decade':
          return getDecadeRange(date);
        case 'year':
          return getYearRange(date);
        case 'month':
          return getMonthRange(date);
        case 'day':
          return getDayRange(date);
        default:
          throw new Error("Invalid rangeType: ".concat(rangeType));
      }
    };
    exports.getRange = getRange;
    var getValueRange = function getValueRange(rangeType, date1, date2) {
      var rawNextValue = [date1, date2].sort(function (a, b) {
        return a - b;
      });
      return [getBegin(rangeType, rawNextValue[0]), getEnd(rangeType, rawNextValue[1])];
    };
    exports.getValueRange = getValueRange;
    var getDaysInMonth = function getDaysInMonth(date) {
      var year = getYear(date);
      var monthIndex = getMonthIndex(date);
      return new Date(year, monthIndex + 1, 0).getDate();
    };
    exports.getDaysInMonth = getDaysInMonth;
    var toYearLabel = function toYearLabel(_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          start = _ref2[0],
          end = _ref2[1];
      return "".concat(getYear(start), " \u2013 ").concat(getYear(end));
    };
    var getCenturyLabel = function getCenturyLabel(date) {
      return toYearLabel(getCenturyRange(date));
    };
    exports.getCenturyLabel = getCenturyLabel;
    var getDecadeLabel = function getDecadeLabel(date) {
      return toYearLabel(getDecadeRange(date));
    };
    exports.getDecadeLabel = getDecadeLabel;
    var isWeekend = function isWeekend(date) {
      var calendarType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ISO 8601';
      var weekday = date.getDay();
      switch (calendarType) {
        case 'Arabic':
        case 'Hebrew':
          return weekday === FRIDAY || weekday === SATURDAY;
        case 'ISO 8601':
        case 'US':
          return weekday === SATURDAY || weekday === SUNDAY;
        default:
          throw new Error('Unsupported calendar type.');
      }
    };
    exports.isWeekend = isWeekend;
    var getISOLocalMonth = function getISOLocalMonth(value) {
      if (!value) {
        return value;
      }
      var date = new Date(value);
      if (isNaN(date.getTime())) {
        throw new Error("Invalid date: ".concat(value));
      }
      var year = getYear(date);
      var month = "0".concat(getMonth(date)).slice(-2);
      return "".concat(year, "-").concat(month);
    };
    exports.getISOLocalMonth = getISOLocalMonth;
    var getISOLocalDate = function getISOLocalDate(value) {
      if (!value) {
        return value;
      }
      var date = new Date(value);
      if (isNaN(date.getTime())) {
        throw new Error("Invalid date: ".concat(value));
      }
      var year = getYear(date);
      var month = "0".concat(getMonth(date)).slice(-2);
      var day = "0".concat(getDay(date)).slice(-2);
      return "".concat(year, "-").concat(month, "-").concat(day);
    };
    exports.getISOLocalDate = getISOLocalDate;
    });
    unwrapExports(dates);
    var dates_1 = dates.getISOLocalDate;
    var dates_2 = dates.getISOLocalMonth;
    var dates_3 = dates.isWeekend;
    var dates_4 = dates.getDecadeLabel;
    var dates_5 = dates.getCenturyLabel;
    var dates_6 = dates.getDaysInMonth;
    var dates_7 = dates.getValueRange;
    var dates_8 = dates.getRange;
    var dates_9 = dates.getEndPrevious2;
    var dates_10 = dates.getEndPrevious;
    var dates_11 = dates.getEnd;
    var dates_12 = dates.getBeginNext2;
    var dates_13 = dates.getBeginPrevious2;
    var dates_14 = dates.getBeginNext;
    var dates_15 = dates.getBeginPrevious;
    var dates_16 = dates.getBegin;
    var dates_17 = dates.getWeekNumber;
    var dates_18 = dates.getDayRange;
    var dates_19 = dates.getEndOfDay;
    var dates_20 = dates.getBeginOfDay;
    var dates_21 = dates.getBeginOfNextMonth;
    var dates_22 = dates.getEndOfPreviousMonth;
    var dates_23 = dates.getBeginOfPreviousMonth;
    var dates_24 = dates.getMonthRange;
    var dates_25 = dates.getBeginOfWeek;
    var dates_26 = dates.getEndOfMonth;
    var dates_27 = dates.getBeginOfMonth;
    var dates_28 = dates.getBeginOfNextYear;
    var dates_29 = dates.getEndOfPreviousYear;
    var dates_30 = dates.getBeginOfPreviousYear;
    var dates_31 = dates.getYearRange;
    var dates_32 = dates.getEndOfYear;
    var dates_33 = dates.getBeginOfYear;
    var dates_34 = dates.getBeginOfNextDecade;
    var dates_35 = dates.getEndOfPreviousDecade;
    var dates_36 = dates.getBeginOfPreviousDecade;
    var dates_37 = dates.getDecadeRange;
    var dates_38 = dates.getEndOfDecade;
    var dates_39 = dates.getBeginOfDecade;
    var dates_40 = dates.getBeginOfDecadeYear;
    var dates_41 = dates.getBeginOfNextCentury;
    var dates_42 = dates.getEndOfPreviousCentury;
    var dates_43 = dates.getBeginOfPreviousCentury;
    var dates_44 = dates.getCenturyRange;
    var dates_45 = dates.getEndOfCentury;
    var dates_46 = dates.getBeginOfCentury;
    var dates_47 = dates.getBeginOfCenturyYear;
    var dates_48 = dates.getDayOfWeek;
    var dates_49 = dates.getDay;
    var dates_50 = dates.getMonthIndex;
    var dates_51 = dates.getMonth;
    var dates_52 = dates.getYear;

    var FUNC_ERROR_TEXT = 'Expected a function';
    var INFINITY = 1 / 0,
        MAX_INTEGER = 1.7976931348623157e+308,
        NAN = 0 / 0;
    var symbolTag = '[object Symbol]';
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    function before(n, func) {
      var result;
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      n = toInteger(n);
      return function() {
        if (--n > 0) {
          result = func.apply(this, arguments);
        }
        if (n <= 1) {
          func = undefined;
        }
        return result;
      };
    }
    function once(func) {
      return before(2, func);
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == 'object' || type == 'function');
    }
    function isObjectLike(value) {
      return !!value && typeof value == 'object';
    }
    function isSymbol(value) {
      return typeof value == 'symbol' ||
        (isObjectLike(value) && objectToString.call(value) == symbolTag);
    }
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = (value < 0 ? -1 : 1);
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }
    function toInteger(value) {
      var result = toFinite(value),
          remainder = result % 1;
      return result === result ? (remainder ? result - remainder : result) : 0;
    }
    function toNumber(value) {
      if (typeof value == 'number') {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? (other + '') : other;
      }
      if (typeof value != 'string') {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, '');
      var isBinary = reIsBinary.test(value);
      return (isBinary || reIsOctal.test(value))
        ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
        : (reIsBadHex.test(value) ? NAN : +value);
    }
    var lodash_once = once;

    var entry$1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = exports.getUserLocale = exports.getUserLocales = void 0;
    var _lodash = _interopRequireDefault(lodash_once);
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }
    function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }
    function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }
    function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }
    var filterDuplicates = function filterDuplicates(arr) {
      return arr.filter(function (el, index, self) {
        return self.indexOf(el) === index;
      });
    };
    var fixLowercaseProperties = function fixLowercaseProperties(arr) {
      return arr.map(function (el) {
        if (!el || el.indexOf('-') === -1 || el.toLowerCase() !== el) {
          return el;
        }
        var splitEl = el.split('-');
        return "".concat(splitEl[0], "-").concat(splitEl[1].toUpperCase());
      });
    };
    var getUserLocales = (0, _lodash.default)(function () {
      var languageList = [];
      if (typeof window !== 'undefined') {
        if (window.navigator.languages) {
          languageList.push.apply(languageList, _toConsumableArray(window.navigator.languages));
        }
        if (window.navigator.language) {
          languageList.push(window.navigator.language);
        }
        if (window.navigator.userLanguage) {
          languageList.push(window.navigator.userLanguage);
        }
        if (window.navigator.browserLanguage) {
          languageList.push(window.navigator.browserLanguage);
        }
        if (window.navigator.systemLanguage) {
          languageList.push(window.navigator.systemLanguage);
        }
      }
      languageList.push('en-US');
      return fixLowercaseProperties(filterDuplicates(languageList));
    });
    exports.getUserLocales = getUserLocales;
    var getUserLocale = (0, _lodash.default)(function () {
      return getUserLocales()[0];
    });
    exports.getUserLocale = getUserLocale;
    var _default = getUserLocale;
    exports.default = _default;
    });
    unwrapExports(entry$1);
    var entry_1 = entry$1.getUserLocale;
    var entry_2 = entry$1.getUserLocales;

    var dateFormatter = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.formatShortWeekday = exports.formatWeekday = exports.formatMonth = exports.formatMonthYear = exports.formatLongDate = exports.formatDate = void 0;
    var _getUserLocale = _interopRequireDefault(entry$1);
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    var formatterCache = {};
    var getFormatter = function getFormatter(locale, options) {
      if (!locale) {
        locale = (0, _getUserLocale.default)();
      }
      var stringifiedOptions = JSON.stringify(options);
      if (!formatterCache[locale]) {
        formatterCache[locale] = {};
      }
      if (!formatterCache[locale][stringifiedOptions]) {
        formatterCache[locale][stringifiedOptions] = function (n) {
          return n.toLocaleString(locale, options);
        };
      }
      return formatterCache[locale][stringifiedOptions];
    };
    var toSafeHour = function toSafeHour(date) {
      var safeDate = new Date(date);
      return new Date(safeDate.setHours(12));
    };
    var formatDate = function formatDate(locale, date) {
      return getFormatter(locale, {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
      })(toSafeHour(date));
    };
    exports.formatDate = formatDate;
    var formatLongDate = function formatLongDate(locale, date) {
      return getFormatter(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })(toSafeHour(date));
    };
    exports.formatLongDate = formatLongDate;
    var formatMonthYear = function formatMonthYear(locale, date) {
      return getFormatter(locale, {
        month: 'long',
        year: 'numeric'
      })(toSafeHour(date));
    };
    exports.formatMonthYear = formatMonthYear;
    var formatMonth = function formatMonth(locale, date) {
      return getFormatter(locale, {
        month: 'long'
      })(toSafeHour(date));
    };
    exports.formatMonth = formatMonth;
    var formatWeekday = function formatWeekday(locale, date) {
      return getFormatter(locale, {
        weekday: 'long'
      })(toSafeHour(date));
    };
    exports.formatWeekday = formatWeekday;
    var formatShortWeekday = function formatShortWeekday(locale, date) {
      return getFormatter(locale, {
        weekday: 'short'
      })(toSafeHour(date));
    };
    exports.formatShortWeekday = formatShortWeekday;
    });
    unwrapExports(dateFormatter);
    var dateFormatter_1 = dateFormatter.formatShortWeekday;
    var dateFormatter_2 = dateFormatter.formatWeekday;
    var dateFormatter_3 = dateFormatter.formatMonth;
    var dateFormatter_4 = dateFormatter.formatMonthYear;
    var dateFormatter_5 = dateFormatter.formatLongDate;
    var dateFormatter_6 = dateFormatter.formatDate;

    var propTypes$1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.tileProps = exports.tileGroupProps = exports.isView = exports.isClassName = exports.isViews = exports.isValue = exports.isMaxDate = exports.isMinDate = exports.isCalendarType = void 0;
    var _propTypes = _interopRequireDefault(propTypes);
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    var calendarTypes = ['ISO 8601', 'US', 'Arabic', 'Hebrew'];
    var allViews = ['century', 'decade', 'year', 'month'];
    var isCalendarType = _propTypes.default.oneOf(calendarTypes);
    exports.isCalendarType = isCalendarType;
    var isMinDate = function isMinDate(props, propName, componentName) {
      var minDate = props[propName];
      if (minDate) {
        if (!(minDate instanceof Date)) {
          return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(minDate), "` supplied to `").concat(componentName, "`, expected instance of `Date`."));
        }
        var maxDate = props.maxDate;
        if (maxDate && minDate > maxDate) {
          return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(minDate), "` supplied to `").concat(componentName, "`, minDate cannot be larger than maxDate."));
        }
      }
      return null;
    };
    exports.isMinDate = isMinDate;
    var isMaxDate = function isMaxDate(props, propName, componentName) {
      var maxDate = props[propName];
      if (maxDate) {
        if (!(maxDate instanceof Date)) {
          return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(maxDate), "` supplied to `").concat(componentName, "`, expected instance of `Date`."));
        }
        var minDate = props.minDate;
        if (minDate && maxDate < minDate) {
          return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(maxDate), "` supplied to `").concat(componentName, "`, maxDate cannot be smaller than minDate."));
        }
      }
      return null;
    };
    exports.isMaxDate = isMaxDate;
    var isValue = _propTypes.default.oneOfType([_propTypes.default.instanceOf(Date), _propTypes.default.arrayOf(_propTypes.default.instanceOf(Date))]);
    exports.isValue = isValue;
    var isViews = _propTypes.default.arrayOf(_propTypes.default.oneOf(allViews));
    exports.isViews = isViews;
    var isClassName = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]);
    exports.isClassName = isClassName;
    var isView = function isView(props, propName, componentName) {
      var view = props[propName];
      var views = props.views;
      var allowedViews = views || allViews;
      if (allowedViews.indexOf(view) === -1) {
        return new Error("Invalid prop `".concat(propName, "` of value `").concat(view, "` supplied to `").concat(componentName, "`, expected one of [").concat(['a', 'b', 'c', 'd', 'e'].map(function (a) {
          return "\"".concat(a, "\"");
        }).join(', '), "]."));
      }
      return null;
    };
    exports.isView = isView;
    isView.isRequired = function (props, propName, componentName) {
      var view = props[propName];
      if (!view) {
        return new Error("The prop `".concat(propName, "` is marked as required in `").concat(componentName, "`, but its value is `").concat(view, "`."));
      }
      return isView(props, propName, componentName);
    };
    var tileGroupProps = {
      activeStartDate: _propTypes.default.instanceOf(Date).isRequired,
      hover: _propTypes.default.instanceOf(Date),
      locale: _propTypes.default.string,
      maxDate: isMaxDate,
      minDate: isMinDate,
      onClick: _propTypes.default.func,
      onMouseOver: _propTypes.default.func,
      tileClassName: _propTypes.default.oneOfType([_propTypes.default.func, isClassName]),
      tileContent: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.node]),
      value: isValue,
      valueType: _propTypes.default.string
    };
    exports.tileGroupProps = tileGroupProps;
    var tileProps = {
      activeStartDate: _propTypes.default.instanceOf(Date).isRequired,
      classes: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
      date: _propTypes.default.instanceOf(Date).isRequired,
      locale: _propTypes.default.string,
      maxDate: isMaxDate,
      minDate: isMinDate,
      onClick: _propTypes.default.func,
      onMouseOver: _propTypes.default.func,
      style: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])),
      tileClassName: _propTypes.default.oneOfType([_propTypes.default.func, isClassName]),
      tileContent: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.node]),
      tileDisabled: _propTypes.default.func
    };
    exports.tileProps = tileProps;
    });
    unwrapExports(propTypes$1);
    var propTypes_1 = propTypes$1.tileProps;
    var propTypes_2 = propTypes$1.tileGroupProps;
    var propTypes_3 = propTypes$1.isView;
    var propTypes_4 = propTypes$1.isClassName;
    var propTypes_5 = propTypes$1.isViews;
    var propTypes_6 = propTypes$1.isValue;
    var propTypes_7 = propTypes$1.isMaxDate;
    var propTypes_8 = propTypes$1.isMinDate;
    var propTypes_9 = propTypes$1.isCalendarType;

    var Navigation_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireWildcard(React__default);
    var _propTypes = _interopRequireDefault(propTypes);
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }
    function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
    var Navigation =
    /*#__PURE__*/
    function (_PureComponent) {
      _inherits(Navigation, _PureComponent);
      function Navigation() {
        var _getPrototypeOf2;
        var _this;
        _classCallCheck(this, Navigation);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Navigation)).call.apply(_getPrototypeOf2, [this].concat(args)));
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickPrevious", function () {
          var _this$props = _this.props,
              date = _this$props.activeStartDate,
              view = _this$props.view,
              setActiveStartDate = _this$props.setActiveStartDate;
          setActiveStartDate((0, dates.getBeginPrevious)(view, date));
        });
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickNext", function () {
          var _this$props2 = _this.props,
              date = _this$props2.activeStartDate,
              view = _this$props2.view,
              setActiveStartDate = _this$props2.setActiveStartDate;
          setActiveStartDate((0, dates.getBeginNext)(view, date));
        });
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickPrevious2", function () {
          var _this$props3 = _this.props,
              date = _this$props3.activeStartDate,
              view = _this$props3.view,
              setActiveStartDate = _this$props3.setActiveStartDate;
          setActiveStartDate((0, dates.getBeginPrevious2)(view, date));
        });
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickNext2", function () {
          var _this$props4 = _this.props,
              date = _this$props4.activeStartDate,
              view = _this$props4.view,
              setActiveStartDate = _this$props4.setActiveStartDate;
          setActiveStartDate((0, dates.getBeginNext2)(view, date));
        });
        return _this;
      }
      _createClass(Navigation, [{
        key: "render",
        value: function render() {
          var label = this.label;
          var _this$props5 = this.props,
              date = _this$props5.activeStartDate,
              drillUp = _this$props5.drillUp,
              navigationLabel = _this$props5.navigationLabel,
              next2Label = _this$props5.next2Label,
              nextLabel = _this$props5.nextLabel,
              prev2Label = _this$props5.prev2Label,
              prevLabel = _this$props5.prevLabel,
              view = _this$props5.view;
          var className = 'react-calendar__navigation';
          return _react.default.createElement("div", {
            className: className,
            style: {
              display: 'flex'
            }
          }, prev2Label !== null && view !== 'century' && _react.default.createElement("button", {
            className: "".concat(className, "__arrow ").concat(className, "__prev2-button"),
            disabled: this.prev2ButtonDisabled,
            onClick: this.onClickPrevious2,
            type: "button"
          }, prev2Label), _react.default.createElement("button", {
            className: "".concat(className, "__arrow ").concat(className, "__prev-button"),
            disabled: this.prevButtonDisabled,
            onClick: this.onClickPrevious,
            type: "button"
          }, prevLabel), _react.default.createElement("button", {
            className: "react-calendar__navigation__label",
            onClick: drillUp,
            disabled: !this.drillUpAvailable,
            style: {
              flexGrow: 1
            },
            type: "button"
          }, navigationLabel ? navigationLabel({
            date: date,
            view: view,
            label: label
          }) : label), _react.default.createElement("button", {
            className: "".concat(className, "__arrow ").concat(className, "__next-button"),
            disabled: this.nextButtonDisabled,
            onClick: this.onClickNext,
            type: "button"
          }, nextLabel), next2Label !== null && view !== 'century' && _react.default.createElement("button", {
            className: "".concat(className, "__arrow ").concat(className, "__next2-button"),
            disabled: this.next2ButtonDisabled,
            onClick: this.onClickNext2,
            type: "button"
          }, next2Label));
        }
      }, {
        key: "drillUpAvailable",
        get: function get() {
          var _this$props6 = this.props,
              view = _this$props6.view,
              views = _this$props6.views;
          return views.indexOf(view) > 0;
        }
      }, {
        key: "prevButtonDisabled",
        get: function get() {
          var _this$props7 = this.props,
              date = _this$props7.activeStartDate,
              minDate = _this$props7.minDate,
              view = _this$props7.view;
          var previousActiveStartDate = (0, dates.getBeginPrevious)(view, date);
          if (previousActiveStartDate.getFullYear() < 1000) {
            return true;
          }
          var previousActiveEndDate = (0, dates.getEndPrevious)(view, date);
          return minDate && minDate >= previousActiveEndDate;
        }
      }, {
        key: "prev2ButtonDisabled",
        get: function get() {
          var _this$props8 = this.props,
              date = _this$props8.activeStartDate,
              minDate = _this$props8.minDate,
              view = _this$props8.view;
          var previousActiveStartDate = (0, dates.getBeginPrevious2)(view, date);
          if (previousActiveStartDate.getFullYear() < 1000) {
            return true;
          }
          var previousActiveEndDate = (0, dates.getEndPrevious2)(view, date);
          return minDate && minDate >= previousActiveEndDate;
        }
      }, {
        key: "nextButtonDisabled",
        get: function get() {
          var _this$props9 = this.props,
              date = _this$props9.activeStartDate,
              maxDate = _this$props9.maxDate,
              view = _this$props9.view;
          var nextActiveStartDate = (0, dates.getBeginNext)(view, date);
          return maxDate && maxDate <= nextActiveStartDate;
        }
      }, {
        key: "next2ButtonDisabled",
        get: function get() {
          var _this$props10 = this.props,
              date = _this$props10.activeStartDate,
              maxDate = _this$props10.maxDate,
              view = _this$props10.view;
          var nextActiveStartDate = (0, dates.getBeginNext2)(view, date);
          return maxDate && maxDate <= nextActiveStartDate;
        }
      }, {
        key: "label",
        get: function get() {
          var _this$props11 = this.props,
              date = _this$props11.activeStartDate,
              formatMonthYear = _this$props11.formatMonthYear,
              locale = _this$props11.locale,
              view = _this$props11.view;
          switch (view) {
            case 'century':
              return (0, dates.getCenturyLabel)(date);
            case 'decade':
              return (0, dates.getDecadeLabel)(date);
            case 'year':
              return (0, dates.getYear)(date);
            case 'month':
              return formatMonthYear(locale, date);
            default:
              throw new Error("Invalid view: ".concat(view, "."));
          }
        }
      }]);
      return Navigation;
    }(_react.PureComponent);
    exports.default = Navigation;
    Navigation.defaultProps = {
      formatMonthYear: dateFormatter.formatMonthYear,
      next2Label: '»',
      nextLabel: '›',
      prev2Label: '«',
      prevLabel: '‹'
    };
    Navigation.propTypes = {
      activeStartDate: _propTypes.default.instanceOf(Date).isRequired,
      drillUp: _propTypes.default.func.isRequired,
      formatMonthYear: _propTypes.default.func,
      locale: _propTypes.default.string,
      maxDate: _propTypes.default.instanceOf(Date),
      minDate: _propTypes.default.instanceOf(Date),
      next2Label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
      nextLabel: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
      navigationLabel: _propTypes.default.func,
      prev2Label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
      prevLabel: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
      setActiveStartDate: _propTypes.default.func.isRequired,
      view: propTypes$1.isView.isRequired,
      views: propTypes$1.isViews.isRequired
    };
    });
    unwrapExports(Navigation_1);

    var Flex_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireDefault(React__default);
    var _propTypes = _interopRequireDefault(propTypes);
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
    function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }
    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
    function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
    function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
    var toPercent = function toPercent(num) {
      return "".concat(num, "%");
    };
    var Flex = function Flex(_ref) {
      var children = _ref.children,
          className = _ref.className,
          direction = _ref.direction,
          count = _ref.count,
          offset = _ref.offset,
          style = _ref.style,
          wrap = _ref.wrap,
          otherProps = _objectWithoutProperties(_ref, ["children", "className", "direction", "count", "offset", "style", "wrap"]);
      return _react.default.createElement("div", _extends({
        className: className,
        style: _objectSpread({
          display: 'flex',
          flexDirection: direction,
          flexWrap: wrap ? 'wrap' : 'no-wrap'
        }, style)
      }, otherProps), _react.default.Children.map(children, function (child, index) {
        return _react.default.cloneElement(child, _objectSpread({}, child.props, {
          style: {
            flexBasis: toPercent(100 / count),
            maxWidth: toPercent(100 / count),
            overflow: 'hidden',
            marginLeft: offset && index === 0 ? toPercent(100 * offset / count) : null
          }
        }));
      }));
    };
    Flex.propTypes = {
      children: _propTypes.default.node,
      className: _propTypes.default.string,
      count: _propTypes.default.number.isRequired,
      direction: _propTypes.default.string,
      offset: _propTypes.default.number,
      style: _propTypes.default.objectOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])),
      wrap: _propTypes.default.bool
    };
    var _default = Flex;
    exports.default = _default;
    });
    unwrapExports(Flex_1);

    var utils = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getTileClasses = exports.between = exports.doRangesOverlap = exports.isRangeWithinRange = exports.isValueWithinRange = exports.callIfDefined = exports.mergeFunctions = void 0;
    var mergeFunctions = function mergeFunctions() {
      for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
        functions[_key] = arguments[_key];
      }
      return function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        return functions.filter(Boolean).forEach(function (f) {
          return f.apply(void 0, args);
        });
      };
    };
    exports.mergeFunctions = mergeFunctions;
    var callIfDefined = function callIfDefined(fn) {
      if (fn && typeof fn === 'function') {
        for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          args[_key3 - 1] = arguments[_key3];
        }
        fn.apply(void 0, args);
      }
    };
    exports.callIfDefined = callIfDefined;
    var isValueWithinRange = function isValueWithinRange(value, range) {
      return range[0] <= value && range[1] >= value;
    };
    exports.isValueWithinRange = isValueWithinRange;
    var isRangeWithinRange = function isRangeWithinRange(greaterRange, smallerRange) {
      return greaterRange[0] <= smallerRange[0] && greaterRange[1] >= smallerRange[1];
    };
    exports.isRangeWithinRange = isRangeWithinRange;
    var doRangesOverlap = function doRangesOverlap(range1, range2) {
      return isValueWithinRange(range1[0], range2) || isValueWithinRange(range1[1], range2);
    };
    exports.doRangesOverlap = doRangesOverlap;
    var between = function between(value, min, max) {
      if (min && min > value) {
        return min;
      }
      if (max && max < value) {
        return max;
      }
      return value;
    };
    exports.between = between;
    var getTileClasses = function getTileClasses() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          value = _ref.value,
          valueType = _ref.valueType,
          date = _ref.date,
          dateType = _ref.dateType,
          hover = _ref.hover;
      var className = 'react-calendar__tile';
      var classes = [className];
      if (!date) {
        return classes;
      }
      if (!(date instanceof Array) && !dateType) {
        throw new Error('getTileClasses(): Unable to get tile activity classes because one or more required arguments were not passed.');
      }
      var now = new Date();
      var dateRange = date instanceof Array ? date : (0, dates.getRange)(dateType, date);
      if (isValueWithinRange(now, dateRange)) {
        classes.push("".concat(className, "--now"));
      }
      if (!value) {
        return classes;
      }
      if (!(value instanceof Array) && !valueType) {
        throw new Error('getTileClasses(): Unable to get tile activity classes because one or more required arguments were not passed.');
      }
      var valueRange = value instanceof Array ? value : (0, dates.getRange)(valueType, value);
      if (isRangeWithinRange(valueRange, dateRange)) {
        classes.push("".concat(className, "--active"));
      } else if (doRangesOverlap(valueRange, dateRange)) {
        classes.push("".concat(className, "--hasActive"));
      } else if (hover && (
      dateRange[1] < valueRange[0] && isRangeWithinRange([hover, valueRange[0]], dateRange) ||
      dateRange[0] > valueRange[1] && isRangeWithinRange([valueRange[1], hover], dateRange))) {
        classes.push("".concat(className, "--hover"));
      }
      var isRangeStart = isValueWithinRange(valueRange[0], dateRange);
      var isRangeEnd = isValueWithinRange(valueRange[1], dateRange);
      if (isRangeStart) {
        classes.push("".concat(className, "--rangeStart"));
      }
      if (isRangeEnd) {
        classes.push("".concat(className, "--rangeEnd"));
      }
      if (isRangeStart && isRangeEnd) {
        classes.push("".concat(className, "--rangeBothEnds"));
      }
      return classes;
    };
    exports.getTileClasses = getTileClasses;
    });
    unwrapExports(utils);
    var utils_1 = utils.getTileClasses;
    var utils_2 = utils.between;
    var utils_3 = utils.doRangesOverlap;
    var utils_4 = utils.isRangeWithinRange;
    var utils_5 = utils.isValueWithinRange;
    var utils_6 = utils.callIfDefined;
    var utils_7 = utils.mergeFunctions;

    var TileGroup_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireDefault(React__default);
    var _propTypes = _interopRequireDefault(propTypes);
    var _Flex = _interopRequireDefault(Flex_1);
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }
    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
    function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
    function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
    function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
    var TileGroup = function TileGroup(_ref) {
      var className = _ref.className,
          count = _ref.count,
          dateTransform = _ref.dateTransform,
          dateType = _ref.dateType,
          end = _ref.end,
          hover = _ref.hover,
          offset = _ref.offset,
          start = _ref.start,
          step = _ref.step,
          Tile = _ref.tile,
          value = _ref.value,
          valueType = _ref.valueType,
          tileProps = _objectWithoutProperties(_ref, ["className", "count", "dateTransform", "dateType", "end", "hover", "offset", "start", "step", "tile", "value", "valueType"]);
      var tiles = [];
      for (var point = start; point <= end; point += step) {
        var date = dateTransform(point);
        tiles.push(_react.default.createElement(Tile, _extends({
          classes: (0, utils.getTileClasses)({
            value: value,
            valueType: valueType,
            date: date,
            dateType: dateType,
            hover: hover
          }),
          date: date,
          point: point,
          key: date.getTime()
        }, tileProps)));
      }
      return _react.default.createElement(_Flex.default, {
        className: className,
        count: count,
        offset: offset,
        wrap: true
      }, tiles);
    };
    TileGroup.propTypes = _objectSpread({}, propTypes$1.tileGroupProps, {
      activeStartDate: _propTypes.default.instanceOf(Date),
      count: _propTypes.default.number,
      dateTransform: _propTypes.default.func.isRequired,
      offset: _propTypes.default.number,
      tile: _propTypes.default.func.isRequired,
      step: _propTypes.default.number
    });
    TileGroup.defaultProps = {
      count: 3,
      step: 1
    };
    var _default = TileGroup;
    exports.default = _default;
    });
    unwrapExports(TileGroup_1);

    var Tile_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireWildcard(React__default);
    var _propTypes = _interopRequireDefault(propTypes);
    var _mergeClassNames = _interopRequireDefault(entry);
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }
    function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }
    function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
    var Tile =
    /*#__PURE__*/
    function (_Component) {
      _inherits(Tile, _Component);
      function Tile() {
        var _getPrototypeOf2;
        var _this;
        _classCallCheck(this, Tile);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tile)).call.apply(_getPrototypeOf2, [this].concat(args)));
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});
        return _this;
      }
      _createClass(Tile, [{
        key: "render",
        value: function render() {
          var _this$props = this.props,
              activeStartDate = _this$props.activeStartDate,
              children = _this$props.children,
              classes = _this$props.classes,
              date = _this$props.date,
              formatAbbr = _this$props.formatAbbr,
              locale = _this$props.locale,
              maxDate = _this$props.maxDate,
              maxDateTransform = _this$props.maxDateTransform,
              minDate = _this$props.minDate,
              minDateTransform = _this$props.minDateTransform,
              onClick = _this$props.onClick,
              onMouseOver = _this$props.onMouseOver,
              style = _this$props.style,
              tileDisabled = _this$props.tileDisabled,
              view = _this$props.view;
          var _this$state = this.state,
              tileClassName = _this$state.tileClassName,
              tileContent = _this$state.tileContent;
          return _react.default.createElement("button", {
            className: (0, _mergeClassNames.default)(classes, tileClassName),
            disabled: minDate && minDateTransform(minDate) > date || maxDate && maxDateTransform(maxDate) < date || tileDisabled && tileDisabled({
              activeStartDate: activeStartDate,
              date: date,
              view: view
            }),
            onClick: onClick && function () {
              return onClick(date);
            },
            onMouseOver: onMouseOver && function () {
              return onMouseOver(date);
            },
            onFocus: onMouseOver && function () {
              return onMouseOver(date);
            },
            style: style,
            type: "button"
          }, formatAbbr ? _react.default.createElement("abbr", {
            "aria-label": formatAbbr(locale, date)
          }, children) : children, tileContent);
        }
      }], [{
        key: "getDerivedStateFromProps",
        value: function getDerivedStateFromProps(nextProps, prevState) {
          var date = nextProps.date,
              tileClassName = nextProps.tileClassName,
              tileContent = nextProps.tileContent,
              view = nextProps.view;
          var nextState = {};
          if (tileClassName !== prevState.tileClassNameProps) {
            nextState.tileClassName = typeof tileClassName === 'function' ? tileClassName({
              date: date,
              view: view
            }) : tileClassName;
            nextState.tileClassNameProps = tileClassName;
          }
          if (tileContent !== prevState.tileContentProps) {
            nextState.tileContent = typeof tileContent === 'function' ? tileContent({
              date: date,
              view: view
            }) : tileContent;
            nextState.tileContentProps = tileContent;
          }
          return nextState;
        }
      }]);
      return Tile;
    }(_react.Component);
    exports.default = Tile;
    Tile.propTypes = _objectSpread({}, propTypes$1.tileProps, {
      children: _propTypes.default.node.isRequired,
      formatAbbr: _propTypes.default.func,
      maxDateTransform: _propTypes.default.func.isRequired,
      minDateTransform: _propTypes.default.func.isRequired
    });
    });
    unwrapExports(Tile_1);

    var Decade_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireDefault(React__default);
    var _propTypes = _interopRequireDefault(propTypes);
    var _Tile = _interopRequireDefault(Tile_1);
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }
    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
    function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
    function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }
    function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }
    function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }
    function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }
    function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
    function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
    var className = 'react-calendar__century-view__decades__decade';
    var Decade = function Decade(_ref) {
      var classes = _ref.classes,
          point = _ref.point,
          otherProps = _objectWithoutProperties(_ref, ["classes", "point"]);
      return _react.default.createElement(_Tile.default, _extends({}, otherProps, {
        classes: [].concat(_toConsumableArray(classes), [className]),
        maxDateTransform: dates.getEndOfDecade,
        minDateTransform: dates.getBeginOfDecade,
        view: "century"
      }), (0, dates.getDecadeLabel)(point));
    };
    Decade.propTypes = _objectSpread({}, propTypes$1.tileProps, {
      point: _propTypes.default.number.isRequired
    });
    var _default = Decade;
    exports.default = _default;
    });
    unwrapExports(Decade_1);

    var Decades_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireWildcard(React__default);
    var _TileGroup = _interopRequireDefault(TileGroup_1);
    var _Decade = _interopRequireDefault(Decade_1);
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }
    function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }
    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
    function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    var Decades =
    /*#__PURE__*/
    function (_PureComponent) {
      _inherits(Decades, _PureComponent);
      function Decades() {
        _classCallCheck(this, Decades);
        return _possibleConstructorReturn(this, _getPrototypeOf(Decades).apply(this, arguments));
      }
      _createClass(Decades, [{
        key: "render",
        value: function render() {
          return _react.default.createElement(_TileGroup.default, _extends({}, this.props, {
            className: "react-calendar__century-view__decades",
            dateTransform: dates.getBeginOfDecade,
            dateType: "decade",
            end: this.end,
            start: this.start,
            step: 10,
            tile: _Decade.default
          }));
        }
      }, {
        key: "start",
        get: function get() {
          var activeStartDate = this.props.activeStartDate;
          return (0, dates.getBeginOfCenturyYear)(activeStartDate);
        }
      }, {
        key: "end",
        get: function get() {
          return this.start + 99;
        }
      }]);
      return Decades;
    }(_react.PureComponent);
    exports.default = Decades;
    Decades.propTypes = _objectSpread({}, propTypes$1.tileGroupProps);
    });
    unwrapExports(Decades_1);

    var CenturyView_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireWildcard(React__default);
    var _propTypes = _interopRequireDefault(propTypes);
    var _Decades = _interopRequireDefault(Decades_1);
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }
    function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    var CenturyView =
    /*#__PURE__*/
    function (_PureComponent) {
      _inherits(CenturyView, _PureComponent);
      function CenturyView() {
        _classCallCheck(this, CenturyView);
        return _possibleConstructorReturn(this, _getPrototypeOf(CenturyView).apply(this, arguments));
      }
      _createClass(CenturyView, [{
        key: "renderDecades",
        value: function renderDecades() {
          return _react.default.createElement(_Decades.default, this.props);
        }
      }, {
        key: "render",
        value: function render() {
          return _react.default.createElement("div", {
            className: "react-calendar__century-view"
          }, this.renderDecades());
        }
      }]);
      return CenturyView;
    }(_react.PureComponent);
    exports.default = CenturyView;
    CenturyView.propTypes = {
      activeStartDate: _propTypes.default.instanceOf(Date).isRequired,
      locale: _propTypes.default.string,
      maxDate: propTypes$1.isMaxDate,
      minDate: propTypes$1.isMinDate,
      onChange: _propTypes.default.func,
      setActiveRange: _propTypes.default.func,
      value: propTypes$1.isValue,
      valueType: _propTypes.default.string
    };
    });
    unwrapExports(CenturyView_1);

    var Year_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireDefault(React__default);
    var _propTypes = _interopRequireDefault(propTypes);
    var _Tile = _interopRequireDefault(Tile_1);
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }
    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
    function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
    function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }
    function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }
    function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }
    function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }
    function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
    function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
    var className = 'react-calendar__decade-view__years__year';
    var Year = function Year(_ref) {
      var classes = _ref.classes,
          point = _ref.point,
          otherProps = _objectWithoutProperties(_ref, ["classes", "point"]);
      return _react.default.createElement(_Tile.default, _extends({}, otherProps, {
        classes: [].concat(_toConsumableArray(classes), [className]),
        maxDateTransform: dates.getEndOfYear,
        minDateTransform: dates.getBeginOfYear,
        view: "decade"
      }), point);
    };
    Year.propTypes = _objectSpread({}, propTypes$1.tileProps, {
      point: _propTypes.default.number.isRequired
    });
    var _default = Year;
    exports.default = _default;
    });
    unwrapExports(Year_1);

    var Years_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireWildcard(React__default);
    var _TileGroup = _interopRequireDefault(TileGroup_1);
    var _Year = _interopRequireDefault(Year_1);
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }
    function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }
    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
    function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    var Years =
    /*#__PURE__*/
    function (_PureComponent) {
      _inherits(Years, _PureComponent);
      function Years() {
        _classCallCheck(this, Years);
        return _possibleConstructorReturn(this, _getPrototypeOf(Years).apply(this, arguments));
      }
      _createClass(Years, [{
        key: "render",
        value: function render() {
          return _react.default.createElement(_TileGroup.default, _extends({}, this.props, {
            className: "react-calendar__decade-view__years",
            dateTransform: function dateTransform(year) {
              return new Date(year, 0, 1);
            },
            dateType: "year",
            end: this.end,
            start: this.start,
            tile: _Year.default
          }));
        }
      }, {
        key: "start",
        get: function get() {
          var activeStartDate = this.props.activeStartDate;
          return (0, dates.getBeginOfDecadeYear)(activeStartDate);
        }
      }, {
        key: "end",
        get: function get() {
          return this.start + 9;
        }
      }]);
      return Years;
    }(_react.PureComponent);
    exports.default = Years;
    Years.propTypes = _objectSpread({}, propTypes$1.tileGroupProps);
    });
    unwrapExports(Years_1);

    var DecadeView_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireWildcard(React__default);
    var _propTypes = _interopRequireDefault(propTypes);
    var _Years = _interopRequireDefault(Years_1);
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }
    function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    var DecadeView =
    /*#__PURE__*/
    function (_PureComponent) {
      _inherits(DecadeView, _PureComponent);
      function DecadeView() {
        _classCallCheck(this, DecadeView);
        return _possibleConstructorReturn(this, _getPrototypeOf(DecadeView).apply(this, arguments));
      }
      _createClass(DecadeView, [{
        key: "renderYears",
        value: function renderYears() {
          return _react.default.createElement(_Years.default, this.props);
        }
      }, {
        key: "render",
        value: function render() {
          return _react.default.createElement("div", {
            className: "react-calendar__decade-view"
          }, this.renderYears());
        }
      }]);
      return DecadeView;
    }(_react.PureComponent);
    exports.default = DecadeView;
    DecadeView.propTypes = {
      activeStartDate: _propTypes.default.instanceOf(Date).isRequired,
      locale: _propTypes.default.string,
      maxDate: propTypes$1.isMaxDate,
      minDate: propTypes$1.isMinDate,
      onChange: _propTypes.default.func,
      setActiveRange: _propTypes.default.func,
      value: propTypes$1.isValue,
      valueType: _propTypes.default.string
    };
    });
    unwrapExports(DecadeView_1);

    var Month_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireDefault(React__default);
    var _propTypes = _interopRequireDefault(propTypes);
    var _Tile = _interopRequireDefault(Tile_1);
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }
    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
    function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
    function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }
    function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }
    function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }
    function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }
    function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
    function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
    var className = 'react-calendar__year-view__months__month';
    var Month = function Month(_ref) {
      var classes = _ref.classes,
          date = _ref.date,
          formatMonth = _ref.formatMonth,
          locale = _ref.locale,
          otherProps = _objectWithoutProperties(_ref, ["classes", "date", "formatMonth", "locale"]);
      return _react.default.createElement(_Tile.default, _extends({}, otherProps, {
        classes: [].concat(_toConsumableArray(classes), [className]),
        date: date,
        formatAbbr: dateFormatter.formatMonthYear,
        locale: locale,
        maxDateTransform: dates.getEndOfMonth,
        minDateTransform: dates.getBeginOfMonth,
        view: "year"
      }), formatMonth(locale, date));
    };
    Month.defaultProps = {
      formatMonth: dateFormatter.formatMonth
    };
    Month.propTypes = _objectSpread({}, propTypes$1.tileProps, {
      formatMonth: _propTypes.default.func
    });
    var _default = Month;
    exports.default = _default;
    });
    unwrapExports(Month_1);

    var Months_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireWildcard(React__default);
    var _propTypes = _interopRequireDefault(propTypes);
    var _TileGroup = _interopRequireDefault(TileGroup_1);
    var _Month = _interopRequireDefault(Month_1);
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }
    function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }
    function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
    var Months =
    /*#__PURE__*/
    function (_PureComponent) {
      _inherits(Months, _PureComponent);
      function Months() {
        var _getPrototypeOf2;
        var _this;
        _classCallCheck(this, Months);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Months)).call.apply(_getPrototypeOf2, [this].concat(args)));
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "start", 0);
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "end", 11);
        return _this;
      }
      _createClass(Months, [{
        key: "render",
        value: function render() {
          var _this2 = this;
          return _react.default.createElement(_TileGroup.default, _extends({}, this.props, {
            className: "react-calendar__year-view__months",
            dateTransform: function dateTransform(monthIndex) {
              return new Date(_this2.year, monthIndex, 1);
            },
            dateType: "month",
            end: this.end,
            start: this.start,
            tile: _Month.default
          }));
        }
      }, {
        key: "year",
        get: function get() {
          var activeStartDate = this.props.activeStartDate;
          return (0, dates.getYear)(activeStartDate);
        }
      }]);
      return Months;
    }(_react.PureComponent);
    exports.default = Months;
    Months.propTypes = _objectSpread({}, propTypes$1.tileGroupProps, {
      locale: _propTypes.default.string
    });
    });
    unwrapExports(Months_1);

    var YearView_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireWildcard(React__default);
    var _propTypes = _interopRequireDefault(propTypes);
    var _Months = _interopRequireDefault(Months_1);
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }
    function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    var YearView =
    /*#__PURE__*/
    function (_PureComponent) {
      _inherits(YearView, _PureComponent);
      function YearView() {
        _classCallCheck(this, YearView);
        return _possibleConstructorReturn(this, _getPrototypeOf(YearView).apply(this, arguments));
      }
      _createClass(YearView, [{
        key: "renderMonths",
        value: function renderMonths() {
          return _react.default.createElement(_Months.default, this.props);
        }
      }, {
        key: "render",
        value: function render() {
          return _react.default.createElement("div", {
            className: "react-calendar__year-view"
          }, this.renderMonths());
        }
      }]);
      return YearView;
    }(_react.PureComponent);
    exports.default = YearView;
    YearView.propTypes = {
      activeStartDate: _propTypes.default.instanceOf(Date).isRequired,
      formatMonth: _propTypes.default.func,
      locale: _propTypes.default.string,
      maxDate: propTypes$1.isMaxDate,
      minDate: propTypes$1.isMinDate,
      onChange: _propTypes.default.func,
      setActiveRange: _propTypes.default.func,
      value: propTypes$1.isValue,
      valueType: _propTypes.default.string
    };
    });
    unwrapExports(YearView_1);

    var Day_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireDefault(React__default);
    var _propTypes = _interopRequireDefault(propTypes);
    var _Tile = _interopRequireDefault(Tile_1);
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }
    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
    function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
    function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }
    function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }
    function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }
    function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }
    function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
    function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
    var className = 'react-calendar__month-view__days__day';
    var Day = function Day(_ref) {
      var calendarType = _ref.calendarType,
          classes = _ref.classes,
          currentMonthIndex = _ref.currentMonthIndex,
          date = _ref.date,
          otherProps = _objectWithoutProperties(_ref, ["calendarType", "classes", "currentMonthIndex", "date"]);
      return _react.default.createElement(_Tile.default, _extends({}, otherProps, {
        classes: [].concat(_toConsumableArray(classes), [className, (0, dates.isWeekend)(date, calendarType) ? "".concat(className, "--weekend") : null, date.getMonth() !== currentMonthIndex ? "".concat(className, "--neighboringMonth") : null]),
        date: date,
        formatAbbr: dateFormatter.formatLongDate,
        maxDateTransform: dates.getEndOfDay,
        minDateTransform: dates.getBeginOfDay,
        view: "month"
      }), (0, dates.getDay)(date));
    };
    Day.propTypes = _objectSpread({}, propTypes$1.tileProps, {
      currentMonthIndex: _propTypes.default.number.isRequired
    });
    var _default = Day;
    exports.default = _default;
    });
    unwrapExports(Day_1);

    var Days_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireWildcard(React__default);
    var _propTypes = _interopRequireDefault(propTypes);
    var _TileGroup = _interopRequireDefault(TileGroup_1);
    var _Day = _interopRequireDefault(Day_1);
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }
    function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }
    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
    function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
    function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
    function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    var Days =
    /*#__PURE__*/
    function (_PureComponent) {
      _inherits(Days, _PureComponent);
      function Days() {
        _classCallCheck(this, Days);
        return _possibleConstructorReturn(this, _getPrototypeOf(Days).apply(this, arguments));
      }
      _createClass(Days, [{
        key: "render",
        value: function render() {
          var _this = this;
          var monthIndex = this.monthIndex;
          var _this$props = this.props,
              showFixedNumberOfWeeks = _this$props.showFixedNumberOfWeeks,
              showNeighboringMonth = _this$props.showNeighboringMonth,
              otherProps = _objectWithoutProperties(_this$props, ["showFixedNumberOfWeeks", "showNeighboringMonth"]);
          return _react.default.createElement(_TileGroup.default, _extends({}, otherProps, {
            className: "react-calendar__month-view__days",
            count: 7,
            dateTransform: function dateTransform(day) {
              return new Date(_this.year, monthIndex, day);
            },
            dateType: "day",
            end: this.end,
            offset: this.offset,
            start: this.start,
            tile: _Day.default
            ,
            currentMonthIndex: monthIndex
          }));
        }
      }, {
        key: "offset",
        get: function get() {
          var _this$props2 = this.props,
              showFixedNumberOfWeeks = _this$props2.showFixedNumberOfWeeks,
              showNeighboringMonth = _this$props2.showNeighboringMonth;
          if (showFixedNumberOfWeeks || showNeighboringMonth) {
            return 0;
          }
          var _this$props3 = this.props,
              activeStartDate = _this$props3.activeStartDate,
              calendarType = _this$props3.calendarType;
          return (0, dates.getDayOfWeek)(activeStartDate, calendarType);
        }
      }, {
        key: "start",
        get: function get() {
          var _this$props4 = this.props,
              showFixedNumberOfWeeks = _this$props4.showFixedNumberOfWeeks,
              showNeighboringMonth = _this$props4.showNeighboringMonth;
          if (showFixedNumberOfWeeks || showNeighboringMonth) {
            var _this$props5 = this.props,
                activeStartDate = _this$props5.activeStartDate,
                calendarType = _this$props5.calendarType;
            return -(0, dates.getDayOfWeek)(activeStartDate, calendarType) + 1;
          }
          return 1;
        }
      }, {
        key: "end",
        get: function get() {
          var _this$props6 = this.props,
              activeStartDate = _this$props6.activeStartDate,
              showFixedNumberOfWeeks = _this$props6.showFixedNumberOfWeeks,
              showNeighboringMonth = _this$props6.showNeighboringMonth;
          var daysInMonth = (0, dates.getDaysInMonth)(activeStartDate);
          if (showFixedNumberOfWeeks) {
            return this.start + 6 * 7 - 1;
          }
          if (showNeighboringMonth) {
            var year = this.year,
                monthIndex = this.monthIndex;
            var calendarType = this.props.calendarType;
            var activeEndDate = new Date(year, monthIndex, daysInMonth);
            return daysInMonth + (7 - (0, dates.getDayOfWeek)(activeEndDate, calendarType) - 1);
          }
          return daysInMonth;
        }
      }, {
        key: "year",
        get: function get() {
          var activeStartDate = this.props.activeStartDate;
          return (0, dates.getYear)(activeStartDate);
        }
      }, {
        key: "monthIndex",
        get: function get() {
          var activeStartDate = this.props.activeStartDate;
          return (0, dates.getMonthIndex)(activeStartDate);
        }
      }]);
      return Days;
    }(_react.PureComponent);
    exports.default = Days;
    Days.propTypes = _objectSpread({
      calendarType: propTypes$1.isCalendarType.isRequired,
      showFixedNumberOfWeeks: _propTypes.default.bool,
      showNeighboringMonth: _propTypes.default.bool
    }, propTypes$1.tileGroupProps);
    });
    unwrapExports(Days_1);

    var Weekdays_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireWildcard(React__default);
    var _propTypes = _interopRequireDefault(propTypes);
    var _Flex = _interopRequireDefault(Flex_1);
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }
    function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    var Weekdays =
    /*#__PURE__*/
    function (_Component) {
      _inherits(Weekdays, _Component);
      function Weekdays() {
        _classCallCheck(this, Weekdays);
        return _possibleConstructorReturn(this, _getPrototypeOf(Weekdays).apply(this, arguments));
      }
      _createClass(Weekdays, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nextProps) {
          var _this$props = this.props,
              calendarType = _this$props.calendarType,
              locale = _this$props.locale;
          return nextProps.calendarType !== calendarType || nextProps.locale !== locale;
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props2 = this.props,
              calendarType = _this$props2.calendarType,
              formatShortWeekday = _this$props2.formatShortWeekday,
              locale = _this$props2.locale;
          var beginOfMonth = this.beginOfMonth,
              year = this.year,
              monthIndex = this.monthIndex;
          var weekdays = [];
          for (var weekday = 1; weekday <= 7; weekday += 1) {
            var weekdayDate = new Date(year, monthIndex, weekday - (0, dates.getDayOfWeek)(beginOfMonth, calendarType));
            var abbr = (0, dateFormatter.formatWeekday)(locale, weekdayDate);
            weekdays.push(_react.default.createElement("div", {
              className: "react-calendar__month-view__weekdays__weekday",
              key: weekday,
              style: {
                flexGrow: 1
              }
            }, _react.default.createElement("abbr", {
              title: abbr,
              "aria-label": abbr
            }, formatShortWeekday(locale, weekdayDate).replace('.', ''))));
          }
          return _react.default.createElement(_Flex.default, {
            className: "react-calendar__month-view__weekdays",
            count: 7
          }, weekdays);
        }
      }, {
        key: "beginOfMonth",
        get: function get() {
          var activeStartDate = this.props.activeStartDate;
          return (0, dates.getBeginOfMonth)(activeStartDate);
        }
      }, {
        key: "year",
        get: function get() {
          var beginOfMonth = this.beginOfMonth;
          return (0, dates.getYear)(beginOfMonth);
        }
      }, {
        key: "monthIndex",
        get: function get() {
          var beginOfMonth = this.beginOfMonth;
          return (0, dates.getMonthIndex)(beginOfMonth);
        }
      }]);
      return Weekdays;
    }(_react.Component);
    exports.default = Weekdays;
    Weekdays.defaultProps = {
      formatShortWeekday: dateFormatter.formatShortWeekday
    };
    Weekdays.propTypes = {
      calendarType: propTypes$1.isCalendarType.isRequired,
      formatShortWeekday: _propTypes.default.func,
      locale: _propTypes.default.string,
      activeStartDate: _propTypes.default.instanceOf(Date).isRequired
    };
    });
    unwrapExports(Weekdays_1);

    var WeekNumber_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireDefault(React__default);
    var _propTypes = _interopRequireDefault(propTypes);
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    var WeekNumber = function WeekNumber(_ref) {
      var date = _ref.date,
          onClickWeekNumber = _ref.onClickWeekNumber,
          weekNumber = _ref.weekNumber;
      return onClickWeekNumber ? _react.default.createElement("button", {
        className: "react-calendar__tile",
        onClick: function onClick() {
          return onClickWeekNumber(weekNumber, date);
        },
        style: {
          flexGrow: 1
        },
        type: "button"
      }, _react.default.createElement("span", null, weekNumber)) : _react.default.createElement("div", {
        className: "react-calendar__tile",
        style: {
          flexGrow: 1
        }
      }, _react.default.createElement("span", null, weekNumber));
    };
    WeekNumber.propTypes = {
      date: _propTypes.default.instanceOf(Date).isRequired,
      onClickWeekNumber: _propTypes.default.func,
      weekNumber: _propTypes.default.number.isRequired
    };
    var _default = WeekNumber;
    exports.default = _default;
    });
    unwrapExports(WeekNumber_1);

    var WeekNumbers_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireWildcard(React__default);
    var _propTypes = _interopRequireDefault(propTypes);
    var _WeekNumber = _interopRequireDefault(WeekNumber_1);
    var _Flex = _interopRequireDefault(Flex_1);
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }
    function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    var WeekNumbers =
    /*#__PURE__*/
    function (_PureComponent) {
      _inherits(WeekNumbers, _PureComponent);
      function WeekNumbers() {
        _classCallCheck(this, WeekNumbers);
        return _possibleConstructorReturn(this, _getPrototypeOf(WeekNumbers).apply(this, arguments));
      }
      _createClass(WeekNumbers, [{
        key: "render",
        value: function render() {
          var dates = this.dates,
              numberOfWeeks = this.numberOfWeeks,
              weekNumbers = this.weekNumbers;
          var onClickWeekNumber = this.props.onClickWeekNumber;
          return _react.default.createElement(_Flex.default, {
            className: "react-calendar__month-view__weekNumbers",
            count: numberOfWeeks,
            direction: "column",
            style: {
              flexBasis: 'calc(100% * (1 / 8)',
              flexShrink: 0
            }
          }, weekNumbers.map(function (weekNumber, weekIndex) {
            return _react.default.createElement(_WeekNumber.default, {
              date: dates[weekIndex],
              key: weekNumber,
              onClickWeekNumber: onClickWeekNumber,
              weekNumber: weekNumber
            });
          }));
        }
      }, {
        key: "startWeekday",
        get: function get() {
          var _this$props = this.props,
              activeStartDate = _this$props.activeStartDate,
              calendarType = _this$props.calendarType;
          return (0, dates.getDayOfWeek)(activeStartDate, calendarType);
        }
      }, {
        key: "numberOfDays",
        get: function get() {
          var activeStartDate = this.props.activeStartDate;
          return (0, dates.getDaysInMonth)(activeStartDate);
        }
      }, {
        key: "numberOfWeeks",
        get: function get() {
          var showFixedNumberOfWeeks = this.props.showFixedNumberOfWeeks;
          if (showFixedNumberOfWeeks) {
            return 6;
          }
          var days = this.numberOfDays - (7 - this.startWeekday);
          return 1 + Math.ceil(days / 7);
        }
      }, {
        key: "year",
        get: function get() {
          var activeStartDate = this.props.activeStartDate;
          return (0, dates.getYear)(activeStartDate);
        }
      }, {
        key: "monthIndex",
        get: function get() {
          var activeStartDate = this.props.activeStartDate;
          return (0, dates.getMonthIndex)(activeStartDate);
        }
      }, {
        key: "day",
        get: function get() {
          var activeStartDate = this.props.activeStartDate;
          return (0, dates.getDay)(activeStartDate);
        }
      }, {
        key: "dates",
        get: function get() {
          var year = this.year,
              monthIndex = this.monthIndex,
              numberOfWeeks = this.numberOfWeeks,
              day = this.day;
          var calendarType = this.props.calendarType;
          var dates$1 = [];
          for (var index = 0; index < numberOfWeeks; index += 1) {
            dates$1.push((0, dates.getBeginOfWeek)(new Date(year, monthIndex, day + index * 7), calendarType));
          }
          return dates$1;
        }
      }, {
        key: "weekNumbers",
        get: function get() {
          var dates$1 = this.dates;
          var calendarType = this.props.calendarType;
          return dates$1.map(function (date) {
            return (0, dates.getWeekNumber)(date, calendarType);
          });
        }
      }]);
      return WeekNumbers;
    }(_react.PureComponent);
    exports.default = WeekNumbers;
    WeekNumbers.propTypes = {
      activeStartDate: _propTypes.default.instanceOf(Date).isRequired,
      calendarType: propTypes$1.isCalendarType.isRequired,
      onClickWeekNumber: _propTypes.default.func,
      showFixedNumberOfWeeks: _propTypes.default.bool
    };
    });
    unwrapExports(WeekNumbers_1);

    var MonthView_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireWildcard(React__default);
    var _propTypes = _interopRequireDefault(propTypes);
    var _Days = _interopRequireDefault(Days_1);
    var _Weekdays = _interopRequireDefault(Weekdays_1);
    var _WeekNumbers = _interopRequireDefault(WeekNumbers_1);
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }
    function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
    function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
    function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    var MonthView =
    /*#__PURE__*/
    function (_PureComponent) {
      _inherits(MonthView, _PureComponent);
      function MonthView() {
        _classCallCheck(this, MonthView);
        return _possibleConstructorReturn(this, _getPrototypeOf(MonthView).apply(this, arguments));
      }
      _createClass(MonthView, [{
        key: "renderWeekdays",
        value: function renderWeekdays() {
          var _this$props = this.props,
              activeStartDate = _this$props.activeStartDate,
              formatShortWeekday = _this$props.formatShortWeekday,
              locale = _this$props.locale;
          return _react.default.createElement(_Weekdays.default, {
            calendarType: this.calendarType,
            locale: locale,
            activeStartDate: activeStartDate,
            formatShortWeekday: formatShortWeekday
          });
        }
      }, {
        key: "renderWeekNumbers",
        value: function renderWeekNumbers() {
          var showWeekNumbers = this.props.showWeekNumbers;
          if (!showWeekNumbers) {
            return null;
          }
          var _this$props2 = this.props,
              activeStartDate = _this$props2.activeStartDate,
              onClickWeekNumber = _this$props2.onClickWeekNumber,
              showFixedNumberOfWeeks = _this$props2.showFixedNumberOfWeeks;
          return _react.default.createElement(_WeekNumbers.default, {
            activeStartDate: activeStartDate,
            calendarType: this.calendarType,
            onClickWeekNumber: onClickWeekNumber,
            showFixedNumberOfWeeks: showFixedNumberOfWeeks
          });
        }
      }, {
        key: "renderDays",
        value: function renderDays() {
          var _this$props3 = this.props,
              calendarType = _this$props3.calendarType,
              onClickWeekNumber = _this$props3.onClickWeekNumber,
              showWeekNumbers = _this$props3.showWeekNumbers,
              childProps = _objectWithoutProperties(_this$props3, ["calendarType", "onClickWeekNumber", "showWeekNumbers"]);
          return _react.default.createElement(_Days.default, _extends({
            calendarType: this.calendarType
          }, childProps));
        }
      }, {
        key: "render",
        value: function render() {
          var showWeekNumbers = this.props.showWeekNumbers;
          var className = 'react-calendar__month-view';
          return _react.default.createElement("div", {
            className: [className, showWeekNumbers ? "".concat(className, "--weekNumbers") : ''].join(' ')
          }, _react.default.createElement("div", {
            style: {
              display: 'flex',
              alignItems: 'flex-end'
            }
          }, this.renderWeekNumbers(), _react.default.createElement("div", {
            style: {
              flexGrow: 1,
              width: '100%'
            }
          }, this.renderWeekdays(), this.renderDays())));
        }
      }, {
        key: "calendarType",
        get: function get() {
          var _this$props4 = this.props,
              calendarType = _this$props4.calendarType,
              locale = _this$props4.locale;
          if (calendarType) {
            return calendarType;
          }
          switch (locale) {
            case 'en-CA':
            case 'en-US':
            case 'es-AR':
            case 'es-BO':
            case 'es-CL':
            case 'es-CO':
            case 'es-CR':
            case 'es-DO':
            case 'es-EC':
            case 'es-GT':
            case 'es-HN':
            case 'es-MX':
            case 'es-NI':
            case 'es-PA':
            case 'es-PE':
            case 'es-PR':
            case 'es-SV':
            case 'es-VE':
            case 'pt-BR':
              return 'US';
            case 'ar':
            case 'ar-AE':
            case 'ar-BH':
            case 'ar-DZ':
            case 'ar-EG':
            case 'ar-IQ':
            case 'ar-JO':
            case 'ar-KW':
            case 'ar-LY':
            case 'ar-OM':
            case 'ar-QA':
            case 'ar-SA':
            case 'ar-SD':
            case 'ar-SY':
            case 'ar-YE':
            case 'dv':
            case 'dv-MV':
            case 'ps':
            case 'ps-AR':
              return 'Arabic';
            case 'he':
            case 'he-IL':
              return 'Hebrew';
            default:
              return 'ISO 8601';
          }
        }
      }]);
      return MonthView;
    }(_react.PureComponent);
    exports.default = MonthView;
    MonthView.propTypes = {
      activeStartDate: _propTypes.default.instanceOf(Date).isRequired,
      calendarType: propTypes$1.isCalendarType,
      formatShortWeekday: _propTypes.default.func,
      locale: _propTypes.default.string,
      maxDate: propTypes$1.isMaxDate,
      minDate: propTypes$1.isMinDate,
      onChange: _propTypes.default.func,
      onClickWeekNumber: _propTypes.default.func,
      setActiveRange: _propTypes.default.func,
      showFixedNumberOfWeeks: _propTypes.default.bool,
      showNeighboringMonth: _propTypes.default.bool,
      showWeekNumbers: _propTypes.default.bool,
      value: propTypes$1.isValue,
      valueType: _propTypes.default.string
    };
    });
    unwrapExports(MonthView_1);

    var Calendar_1 = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _react = _interopRequireWildcard(React__default);
    var _propTypes = _interopRequireDefault(propTypes);
    var _mergeClassNames = _interopRequireDefault(entry);
    var _Navigation = _interopRequireDefault(Navigation_1);
    var _CenturyView = _interopRequireDefault(CenturyView_1);
    var _DecadeView = _interopRequireDefault(DecadeView_1);
    var _YearView = _interopRequireDefault(YearView_1);
    var _MonthView = _interopRequireDefault(MonthView_1);
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }
    function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
    function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
    function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
    function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
    function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
    function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
    function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
    function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }
    function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }
    function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }
    function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }
    var allViews = ['century', 'decade', 'year', 'month'];
    var allValueTypes = [].concat(_toConsumableArray(allViews.slice(1)), ['day']);
    var datesAreDifferent = function datesAreDifferent(date1, date2) {
      return date1 && !date2 || !date1 && date2 || date1 && date2 && date1.getTime() !== date2.getTime();
    };
    var getLimitedViews = function getLimitedViews(minDetail, maxDetail) {
      return allViews.slice(allViews.indexOf(minDetail), allViews.indexOf(maxDetail) + 1);
    };
    var getView = function getView(view, minDetail, maxDetail) {
      if (view && getLimitedViews(minDetail, maxDetail).indexOf(view) !== -1) {
        return view;
      }
      return getLimitedViews(minDetail, maxDetail).pop();
    };
    var isViewAllowed = function isViewAllowed(view, minDetail, maxDetail) {
      var views = getLimitedViews(minDetail, maxDetail);
      return views.indexOf(view) !== -1;
    };
    var getValueType = function getValueType(maxDetail) {
      return allValueTypes[allViews.indexOf(maxDetail)];
    };
    var getValueFrom = function getValueFrom(value) {
      if (!value) {
        return null;
      }
      var rawValueFrom = value instanceof Array && value.length === 2 ? value[0] : value;
      if (!rawValueFrom) {
        return null;
      }
      var valueFromDate = new Date(rawValueFrom);
      if (isNaN(valueFromDate.getTime())) {
        throw new Error("Invalid date: ".concat(value));
      }
      return valueFromDate;
    };
    var getDetailValueFrom = function getDetailValueFrom(value, minDate, maxDate, maxDetail) {
      var valueFrom = getValueFrom(value);
      if (!valueFrom) {
        return null;
      }
      var detailValueFrom = (0, dates.getBegin)(getValueType(maxDetail), valueFrom);
      return (0, utils.between)(detailValueFrom, minDate, maxDate);
    };
    var getValueTo = function getValueTo(value) {
      if (!value) {
        return null;
      }
      var rawValueTo = value instanceof Array && value.length === 2 ? value[1] : value;
      if (!rawValueTo) {
        return null;
      }
      var valueToDate = new Date(rawValueTo);
      if (isNaN(valueToDate.getTime())) {
        throw new Error("Invalid date: ".concat(value));
      }
      return valueToDate;
    };
    var getDetailValueTo = function getDetailValueTo(value, minDate, maxDate, maxDetail) {
      var valueTo = getValueTo(value);
      if (!valueTo) {
        return null;
      }
      var detailValueTo = (0, dates.getEnd)(getValueType(maxDetail), valueTo);
      return (0, utils.between)(detailValueTo, minDate, maxDate);
    };
    var getDetailValueArray = function getDetailValueArray(value, minDate, maxDate, maxDetail) {
      if (value instanceof Array) {
        return value;
      }
      return [getDetailValueFrom(value, minDate, maxDate, maxDetail), getDetailValueTo(value, minDate, maxDate, maxDetail)];
    };
    var getActiveStartDate = function getActiveStartDate(props) {
      var activeStartDate = props.activeStartDate,
          maxDate = props.maxDate,
          maxDetail = props.maxDetail,
          minDate = props.minDate,
          minDetail = props.minDetail,
          value = props.value,
          view = props.view;
      var rangeType = getView(view, minDetail, maxDetail);
      var valueFrom = getDetailValueFrom(value, minDate, maxDate, maxDetail) || activeStartDate || new Date();
      return (0, dates.getBegin)(rangeType, valueFrom);
    };
    var Calendar =
    /*#__PURE__*/
    function (_Component) {
      _inherits(Calendar, _Component);
      function Calendar() {
        var _getPrototypeOf2;
        var _this;
        _classCallCheck(this, Calendar);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Calendar)).call.apply(_getPrototypeOf2, [this].concat(args)));
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setActiveStartDate", function (activeStartDate) {
          var onActiveDateChange = _this.props.onActiveDateChange;
          _this.setState({
            activeStartDate: activeStartDate
          }, function () {
            var view = _this.state.view;
            (0, utils.callIfDefined)(onActiveDateChange, {
              activeStartDate: activeStartDate,
              view: view
            });
          });
        });
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "drillDown", function (activeStartDate) {
          if (!_this.drillDownAvailable) {
            return;
          }
          var _this$props = _this.props,
              maxDetail = _this$props.maxDetail,
              minDetail = _this$props.minDetail,
              onDrillDown = _this$props.onDrillDown;
          var views = getLimitedViews(minDetail, maxDetail);
          _this.setState(function (prevState) {
            var nextView = views[views.indexOf(prevState.view) + 1];
            return {
              activeStartDate: activeStartDate,
              view: nextView
            };
          }, function () {
            var view = _this.state.view;
            (0, utils.callIfDefined)(onDrillDown, {
              activeStartDate: activeStartDate,
              view: view
            });
          });
        });
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "drillUp", function () {
          if (!_this.drillUpAvailable) {
            return;
          }
          var _this$props2 = _this.props,
              maxDetail = _this$props2.maxDetail,
              minDetail = _this$props2.minDetail,
              onDrillUp = _this$props2.onDrillUp;
          var views = getLimitedViews(minDetail, maxDetail);
          _this.setState(function (prevState) {
            var nextView = views[views.indexOf(prevState.view) - 1];
            var activeStartDate = (0, dates.getBegin)(nextView, prevState.activeStartDate);
            return {
              activeStartDate: activeStartDate,
              view: nextView
            };
          }, function () {
            var _this$state = _this.state,
                activeStartDate = _this$state.activeStartDate,
                view = _this$state.view;
            (0, utils.callIfDefined)(onDrillUp, {
              activeStartDate: activeStartDate,
              view: view
            });
          });
        });
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (value) {
          var _this$props3 = _this.props,
              onChange = _this$props3.onChange,
              selectRange = _this$props3.selectRange;
          var nextValue;
          var callback;
          if (selectRange) {
            var previousValue = _this.state.value;
            if (!previousValue || [].concat(previousValue).length !== 1
            ) {
                nextValue = (0, dates.getBegin)(_this.valueType, value);
              } else {
              nextValue = (0, dates.getValueRange)(_this.valueType, previousValue, value);
              callback = function callback() {
                return (0, utils.callIfDefined)(onChange, nextValue);
              };
            }
          } else {
            nextValue = _this.getProcessedValue(value);
            callback = function callback() {
              return (0, utils.callIfDefined)(onChange, nextValue);
            };
          }
          _this.setState({
            value: nextValue
          }, callback);
        });
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseOver", function (value) {
          _this.setState({
            hover: value
          });
        });
        _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMouseOut", function () {
          _this.setState({
            hover: null
          });
        });
        return _this;
      }
      _createClass(Calendar, [{
        key: "getProcessedValue",
        value: function getProcessedValue(value) {
          var _this$props4 = this.props,
              minDate = _this$props4.minDate,
              maxDate = _this$props4.maxDate,
              maxDetail = _this$props4.maxDetail,
              returnValue = _this$props4.returnValue;
          switch (returnValue) {
            case 'start':
              return getDetailValueFrom(value, minDate, maxDate, maxDetail);
            case 'end':
              return getDetailValueTo(value, minDate, maxDate, maxDetail);
            case 'range':
              return getDetailValueArray(value, minDate, maxDate, maxDetail);
            default:
              throw new Error('Invalid returnValue.');
          }
        }
      }, {
        key: "renderContent",
        value: function renderContent() {
          var _this$props5 = this.props,
              calendarType = _this$props5.calendarType,
              locale = _this$props5.locale,
              maxDate = _this$props5.maxDate,
              minDate = _this$props5.minDate,
              renderChildren = _this$props5.renderChildren,
              selectRange = _this$props5.selectRange,
              tileClassName = _this$props5.tileClassName,
              tileContent = _this$props5.tileContent,
              tileDisabled = _this$props5.tileDisabled;
          var _this$state2 = this.state,
              activeStartDate = _this$state2.activeStartDate,
              hover = _this$state2.hover,
              value = _this$state2.value,
              view = _this$state2.view;
          var onMouseOver = this.onMouseOver,
              valueType = this.valueType;
          var commonProps = {
            activeStartDate: activeStartDate,
            hover: hover,
            locale: locale,
            maxDate: maxDate,
            minDate: minDate,
            onMouseOver: selectRange ? onMouseOver : null,
            tileClassName: tileClassName,
            tileContent: tileContent || renderChildren,
            tileDisabled: tileDisabled,
            value: value,
            valueType: valueType
          };
          var clickAction = this.drillDownAvailable ? this.drillDown : this.onChange;
          switch (view) {
            case 'century':
              {
                var onClickDecade = this.props.onClickDecade;
                return _react.default.createElement(_CenturyView.default, _extends({
                  onClick: (0, utils.mergeFunctions)(clickAction, onClickDecade)
                }, commonProps));
              }
            case 'decade':
              {
                var onClickYear = this.props.onClickYear;
                return _react.default.createElement(_DecadeView.default, _extends({
                  onClick: (0, utils.mergeFunctions)(clickAction, onClickYear)
                }, commonProps));
              }
            case 'year':
              {
                var _this$props6 = this.props,
                    formatMonth = _this$props6.formatMonth,
                    onClickMonth = _this$props6.onClickMonth;
                return _react.default.createElement(_YearView.default, _extends({
                  formatMonth: formatMonth,
                  onClick: (0, utils.mergeFunctions)(clickAction, onClickMonth)
                }, commonProps));
              }
            case 'month':
              {
                var _this$props7 = this.props,
                    formatShortWeekday = _this$props7.formatShortWeekday,
                    onClickDay = _this$props7.onClickDay,
                    onClickWeekNumber = _this$props7.onClickWeekNumber,
                    showFixedNumberOfWeeks = _this$props7.showFixedNumberOfWeeks,
                    showNeighboringMonth = _this$props7.showNeighboringMonth,
                    showWeekNumbers = _this$props7.showWeekNumbers;
                return _react.default.createElement(_MonthView.default, _extends({
                  calendarType: calendarType,
                  formatShortWeekday: formatShortWeekday,
                  onClick: (0, utils.mergeFunctions)(clickAction, onClickDay),
                  onClickWeekNumber: onClickWeekNumber,
                  showFixedNumberOfWeeks: showFixedNumberOfWeeks,
                  showNeighboringMonth: showNeighboringMonth,
                  showWeekNumbers: showWeekNumbers
                }, commonProps));
              }
            default:
              throw new Error("Invalid view: ".concat(view, "."));
          }
        }
      }, {
        key: "renderNavigation",
        value: function renderNavigation() {
          var showNavigation = this.props.showNavigation;
          if (!showNavigation) {
            return null;
          }
          var _this$props8 = this.props,
              formatMonthYear = _this$props8.formatMonthYear,
              locale = _this$props8.locale,
              maxDate = _this$props8.maxDate,
              maxDetail = _this$props8.maxDetail,
              minDate = _this$props8.minDate,
              minDetail = _this$props8.minDetail,
              next2Label = _this$props8.next2Label,
              nextLabel = _this$props8.nextLabel,
              navigationLabel = _this$props8.navigationLabel,
              prev2Label = _this$props8.prev2Label,
              prevLabel = _this$props8.prevLabel;
          var _this$state3 = this.state,
              activeRange = _this$state3.activeRange,
              activeStartDate = _this$state3.activeStartDate,
              view = _this$state3.view;
          return _react.default.createElement(_Navigation.default, {
            activeRange: activeRange,
            activeStartDate: activeStartDate,
            drillUp: this.drillUp,
            formatMonthYear: formatMonthYear,
            locale: locale,
            maxDate: maxDate,
            minDate: minDate,
            next2Label: next2Label,
            nextLabel: nextLabel,
            navigationLabel: navigationLabel,
            prev2Label: prev2Label,
            prevLabel: prevLabel,
            setActiveStartDate: this.setActiveStartDate,
            view: view,
            views: getLimitedViews(minDetail, maxDetail)
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props9 = this.props,
              className = _this$props9.className,
              selectRange = _this$props9.selectRange;
          var value = this.state.value;
          var onMouseOut = this.onMouseOut;
          var valueArray = [].concat(value);
          return _react.default.createElement("div", {
            className: (0, _mergeClassNames.default)('react-calendar', selectRange && valueArray.length === 1 && 'react-calendar--selectRange', className),
            onMouseOut: selectRange ? onMouseOut : null,
            onBlur: selectRange ? onMouseOut : null
          }, this.renderNavigation(), this.renderContent());
        }
      }, {
        key: "drillDownAvailable",
        get: function get() {
          var _this$props10 = this.props,
              maxDetail = _this$props10.maxDetail,
              minDetail = _this$props10.minDetail;
          var view = this.state.view;
          var views = getLimitedViews(minDetail, maxDetail);
          return views.indexOf(view) < views.length - 1;
        }
      }, {
        key: "drillUpAvailable",
        get: function get() {
          var _this$props11 = this.props,
              maxDetail = _this$props11.maxDetail,
              minDetail = _this$props11.minDetail;
          var view = this.state.view;
          var views = getLimitedViews(minDetail, maxDetail);
          return views.indexOf(view) > 0;
        }
      }, {
        key: "valueType",
        get: function get() {
          var maxDetail = this.props.maxDetail;
          return getValueType(maxDetail);
        }
      }], [{
        key: "getDerivedStateFromProps",
        value: function getDerivedStateFromProps(nextProps, prevState) {
          var minDate = nextProps.minDate,
              maxDate = nextProps.maxDate,
              minDetail = nextProps.minDetail,
              maxDetail = nextProps.maxDetail;
          var nextState = {};
          var nextActiveStartDate = getActiveStartDate(nextProps);
          if (datesAreDifferent(nextActiveStartDate, prevState.activeStartDateProps)) {
            nextState.activeStartDate = nextActiveStartDate;
            nextState.activeStartDateProps = nextActiveStartDate;
          }
          var nextView = getView(nextProps.view, minDetail, maxDetail);
          if (nextView !== prevState.viewProps && !isViewAllowed(prevState.view, minDetail, maxDetail)) {
            nextState.view = nextView;
            nextState.viewProps = nextView;
          }
          var values = [nextProps.value, prevState.valueProps];
          if (nextState.view
          || datesAreDifferent.apply(void 0, _toConsumableArray(values.map(function (value) {
            return getValueFrom(value, minDate, maxDate, maxDetail);
          }))) || datesAreDifferent.apply(void 0, _toConsumableArray(values.map(function (value) {
            return getValueTo(value, minDate, maxDate, maxDetail);
          })))) {
            nextState.value = nextProps.value;
            nextState.valueProps = nextProps.value;
          }
          if (!nextProps.selectRange && prevState.hover) {
            nextState.hover = null;
          }
          return nextState;
        }
      }]);
      return Calendar;
    }(_react.Component);
    exports.default = Calendar;
    Calendar.defaultProps = {
      maxDetail: 'month',
      minDetail: 'century',
      returnValue: 'start',
      showNavigation: true,
      showNeighboringMonth: true,
      view: 'month'
    };
    Calendar.propTypes = {
      activeStartDate: _propTypes.default.instanceOf(Date),
      calendarType: propTypes$1.isCalendarType,
      className: propTypes$1.isClassName,
      formatMonth: _propTypes.default.func,
      formatMonthYear: _propTypes.default.func,
      formatShortWeekday: _propTypes.default.func,
      locale: _propTypes.default.string,
      maxDate: propTypes$1.isMaxDate,
      maxDetail: _propTypes.default.oneOf(allViews),
      minDate: propTypes$1.isMinDate,
      minDetail: _propTypes.default.oneOf(allViews),
      navigationLabel: _propTypes.default.func,
      next2Label: _propTypes.default.node,
      nextLabel: _propTypes.default.node,
      onActiveDateChange: _propTypes.default.func,
      onChange: _propTypes.default.func,
      onClickDay: _propTypes.default.func,
      onClickDecade: _propTypes.default.func,
      onClickMonth: _propTypes.default.func,
      onClickWeekNumber: _propTypes.default.func,
      onClickYear: _propTypes.default.func,
      onDrillDown: _propTypes.default.func,
      onDrillUp: _propTypes.default.func,
      prev2Label: _propTypes.default.node,
      prevLabel: _propTypes.default.node,
      renderChildren: _propTypes.default.func,
      returnValue: _propTypes.default.oneOf(['start', 'end', 'range']),
      selectRange: _propTypes.default.bool,
      showFixedNumberOfWeeks: _propTypes.default.bool,
      showNavigation: _propTypes.default.bool,
      showNeighboringMonth: _propTypes.default.bool,
      showWeekNumbers: _propTypes.default.bool,
      tileClassName: _propTypes.default.oneOfType([_propTypes.default.func, propTypes$1.isClassName]),
      tileContent: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.node]),
      tileDisabled: _propTypes.default.func,
      value: _propTypes.default.oneOfType([_propTypes.default.string, propTypes$1.isValue]),
      view: _propTypes.default.oneOf(allViews)
    };
    (0, reactLifecyclesCompat_es.polyfill)(Calendar);
    });
    unwrapExports(Calendar_1);

    var entry_nostyle = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "Calendar", {
      enumerable: true,
      get: function get() {
        return _Calendar.default;
      }
    });
    Object.defineProperty(exports, "CenturyView", {
      enumerable: true,
      get: function get() {
        return _CenturyView.default;
      }
    });
    Object.defineProperty(exports, "DecadeView", {
      enumerable: true,
      get: function get() {
        return _DecadeView.default;
      }
    });
    Object.defineProperty(exports, "YearView", {
      enumerable: true,
      get: function get() {
        return _YearView.default;
      }
    });
    Object.defineProperty(exports, "MonthView", {
      enumerable: true,
      get: function get() {
        return _MonthView.default;
      }
    });
    exports.default = void 0;
    var _Calendar = _interopRequireDefault(Calendar_1);
    var _CenturyView = _interopRequireDefault(CenturyView_1);
    var _DecadeView = _interopRequireDefault(DecadeView_1);
    var _YearView = _interopRequireDefault(YearView_1);
    var _MonthView = _interopRequireDefault(MonthView_1);
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    var _default = _Calendar.default;
    exports.default = _default;
    });
    var RCalendar = unwrapExports(entry_nostyle);

    var wrapperStyle =
    /*#__PURE__*/
    css({
      backgroundColor: colors.white.base,
      borderRadius: constants.borderRadius,
      boxShadow: constants.boxShadow.xElevated,
      overflow: "hidden",
      padding: 20,
      position: "relative"
    });
    var tileStyle =
    /*#__PURE__*/
    css(Object.assign({}, typography.normal.regular, {
      height: 48,
      width: 48,
      padding: 0,
      position: "relative",
      textAlign: "center",
      cursor: "pointer",
      outline: "none",
      backgroundColor: colors.gray.lightest,
      borderRadius: constants.borderRadius,
      display: "table",
      borderCollapse: "collapse",
      border: "1px solid ".concat(colors.white.base),
      borderLeft: 0,
      borderTop: 0,
      time: {
        fontFamily: "inherit"
      },
      "&.react-calendar__tile--now": {
        color: colors.violet.base
      },
      "&:hover": {
        backgroundColor: colors.gray.lighter
      },
      "&[disabled]": {
        color: colors.gray.base,
        "&:hover": {
          backgroundColor: colors.gray.lightest,
          cursor: "not-allowed"
        }
      },
      "&.react-calendar__tile--active": {
        backgroundColor: colors.violet.lightest,
        color: colors.violet.base
      },
      "&.react-calendar__tile--rangeStart": {
        backgroundColor: colors.violet.base,
        color: "".concat(colors.white.base, " !important")
      },
      "&.react-calendar__tile--rangeEnd": {
        backgroundColor: colors.violet.base,
        color: "".concat(colors.white.base, " !important")
      },
      "&.react-calendar__tile--singleSelect": {
        backgroundColor: colors.violet.base,
        color: colors.white.base
      },
      "&.react-calendar__month-view__days__day--neighboringMonth": {
        color: colors.gray.base
      }
    }));
    var dateStyle =
    /*#__PURE__*/
    css({
      width: 356,
      margin: 10,
      position: "relative",
      ".react-calendar__month-view__weekdays__weekday": {
        color: colors.gray.dark,
        lineSpacing: "7px",
        fontSize: 12,
        textAlign: "center"
      },
      ".react-calendar__navigation__arrow": {
        border: "1px solid ".concat(colors.gray.light),
        padding: "8px 10px",
        borderRadius: constants.borderRadius,
        alignItems: "center",
        display: "flex",
        cursor: "pointer",
        outline: "none",
        height: 40,
        width: 40,
        backgroundColor: colors.white.base,
        "&.react-calendar__navigation__prev-button": {
          position: "absolute",
          right: 47
        },
        "&:disabled": {
          cursor: "not-allowed"
        }
      },
      ".react-calendar__navigation__label": Object.assign({}, typography.xl.bold, {
        textAlign: "left",
        border: 0,
        outline: "none",
        cursor: "pointer",
        backgroundColor: colors.white.base,
        paddingLeft: 5
      }),
      ".react-calendar__month-view ": {
        marginTop: 30
      },
      ".react-calendar__month-view__weekdays": {
        marginBottom: 20
      },
      ".react-calendar__decade-view__years, .react-calendar__century-view, .react-calendar__year-view": {
        marginTop: 15
      }
    });
    var dotWrapper =
    /*#__PURE__*/
    css({
      display: "flex",
      justifyContent: "center",
      position: "absolute",
      width: "100%"
    });
    var dotStyle =
    /*#__PURE__*/
    css({
      height: 4,
      width: 4,
      display: "inline-block",
      borderRadius: constants.borderRadius,
      margin: "5px 2px 0"
    });
    var buttonsWrapper =
    /*#__PURE__*/
    css(Object.assign({}, flexSpaceBetween, {
      marginTop: 20
    }));

    var MILLISECONDS_IN_MINUTE = 60000;
    var getTimezoneOffsetInMilliseconds = function getTimezoneOffsetInMilliseconds (dirtyDate) {
      var date = new Date(dirtyDate.getTime());
      var baseTimezoneOffset = date.getTimezoneOffset();
      date.setSeconds(0, 0);
      var millisecondsPartOfTimezoneOffset = date.getTime() % MILLISECONDS_IN_MINUTE;
      return baseTimezoneOffset * MILLISECONDS_IN_MINUTE + millisecondsPartOfTimezoneOffset
    };

    function isDate (argument) {
      return argument instanceof Date
    }
    var is_date = isDate;

    var MILLISECONDS_IN_HOUR = 3600000;
    var MILLISECONDS_IN_MINUTE$1 = 60000;
    var DEFAULT_ADDITIONAL_DIGITS = 2;
    var parseTokenDateTimeDelimeter = /[T ]/;
    var parseTokenPlainTime = /:/;
    var parseTokenYY = /^(\d{2})$/;
    var parseTokensYYY = [
      /^([+-]\d{2})$/,
      /^([+-]\d{3})$/,
      /^([+-]\d{4})$/
    ];
    var parseTokenYYYY = /^(\d{4})/;
    var parseTokensYYYYY = [
      /^([+-]\d{4})/,
      /^([+-]\d{5})/,
      /^([+-]\d{6})/
    ];
    var parseTokenMM = /^-(\d{2})$/;
    var parseTokenDDD = /^-?(\d{3})$/;
    var parseTokenMMDD = /^-?(\d{2})-?(\d{2})$/;
    var parseTokenWww = /^-?W(\d{2})$/;
    var parseTokenWwwD = /^-?W(\d{2})-?(\d{1})$/;
    var parseTokenHH = /^(\d{2}([.,]\d*)?)$/;
    var parseTokenHHMM = /^(\d{2}):?(\d{2}([.,]\d*)?)$/;
    var parseTokenHHMMSS = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/;
    var parseTokenTimezone = /([Z+-].*)$/;
    var parseTokenTimezoneZ = /^(Z)$/;
    var parseTokenTimezoneHH = /^([+-])(\d{2})$/;
    var parseTokenTimezoneHHMM = /^([+-])(\d{2}):?(\d{2})$/;
    function parse (argument, dirtyOptions) {
      if (is_date(argument)) {
        return new Date(argument.getTime())
      } else if (typeof argument !== 'string') {
        return new Date(argument)
      }
      var options = dirtyOptions || {};
      var additionalDigits = options.additionalDigits;
      if (additionalDigits == null) {
        additionalDigits = DEFAULT_ADDITIONAL_DIGITS;
      } else {
        additionalDigits = Number(additionalDigits);
      }
      var dateStrings = splitDateString(argument);
      var parseYearResult = parseYear(dateStrings.date, additionalDigits);
      var year = parseYearResult.year;
      var restDateString = parseYearResult.restDateString;
      var date = parseDate(restDateString, year);
      if (date) {
        var timestamp = date.getTime();
        var time = 0;
        var offset;
        if (dateStrings.time) {
          time = parseTime(dateStrings.time);
        }
        if (dateStrings.timezone) {
          offset = parseTimezone(dateStrings.timezone) * MILLISECONDS_IN_MINUTE$1;
        } else {
          var fullTime = timestamp + time;
          var fullTimeDate = new Date(fullTime);
          offset = getTimezoneOffsetInMilliseconds(fullTimeDate);
          var fullTimeDateNextDay = new Date(fullTime);
          fullTimeDateNextDay.setDate(fullTimeDate.getDate() + 1);
          var offsetDiff =
            getTimezoneOffsetInMilliseconds(fullTimeDateNextDay) -
            getTimezoneOffsetInMilliseconds(fullTimeDate);
          if (offsetDiff > 0) {
            offset += offsetDiff;
          }
        }
        return new Date(timestamp + time + offset)
      } else {
        return new Date(argument)
      }
    }
    function splitDateString (dateString) {
      var dateStrings = {};
      var array = dateString.split(parseTokenDateTimeDelimeter);
      var timeString;
      if (parseTokenPlainTime.test(array[0])) {
        dateStrings.date = null;
        timeString = array[0];
      } else {
        dateStrings.date = array[0];
        timeString = array[1];
      }
      if (timeString) {
        var token = parseTokenTimezone.exec(timeString);
        if (token) {
          dateStrings.time = timeString.replace(token[1], '');
          dateStrings.timezone = token[1];
        } else {
          dateStrings.time = timeString;
        }
      }
      return dateStrings
    }
    function parseYear (dateString, additionalDigits) {
      var parseTokenYYY = parseTokensYYY[additionalDigits];
      var parseTokenYYYYY = parseTokensYYYYY[additionalDigits];
      var token;
      token = parseTokenYYYY.exec(dateString) || parseTokenYYYYY.exec(dateString);
      if (token) {
        var yearString = token[1];
        return {
          year: parseInt(yearString, 10),
          restDateString: dateString.slice(yearString.length)
        }
      }
      token = parseTokenYY.exec(dateString) || parseTokenYYY.exec(dateString);
      if (token) {
        var centuryString = token[1];
        return {
          year: parseInt(centuryString, 10) * 100,
          restDateString: dateString.slice(centuryString.length)
        }
      }
      return {
        year: null
      }
    }
    function parseDate (dateString, year) {
      if (year === null) {
        return null
      }
      var token;
      var date;
      var month;
      var week;
      if (dateString.length === 0) {
        date = new Date(0);
        date.setUTCFullYear(year);
        return date
      }
      token = parseTokenMM.exec(dateString);
      if (token) {
        date = new Date(0);
        month = parseInt(token[1], 10) - 1;
        date.setUTCFullYear(year, month);
        return date
      }
      token = parseTokenDDD.exec(dateString);
      if (token) {
        date = new Date(0);
        var dayOfYear = parseInt(token[1], 10);
        date.setUTCFullYear(year, 0, dayOfYear);
        return date
      }
      token = parseTokenMMDD.exec(dateString);
      if (token) {
        date = new Date(0);
        month = parseInt(token[1], 10) - 1;
        var day = parseInt(token[2], 10);
        date.setUTCFullYear(year, month, day);
        return date
      }
      token = parseTokenWww.exec(dateString);
      if (token) {
        week = parseInt(token[1], 10) - 1;
        return dayOfISOYear(year, week)
      }
      token = parseTokenWwwD.exec(dateString);
      if (token) {
        week = parseInt(token[1], 10) - 1;
        var dayOfWeek = parseInt(token[2], 10) - 1;
        return dayOfISOYear(year, week, dayOfWeek)
      }
      return null
    }
    function parseTime (timeString) {
      var token;
      var hours;
      var minutes;
      token = parseTokenHH.exec(timeString);
      if (token) {
        hours = parseFloat(token[1].replace(',', '.'));
        return (hours % 24) * MILLISECONDS_IN_HOUR
      }
      token = parseTokenHHMM.exec(timeString);
      if (token) {
        hours = parseInt(token[1], 10);
        minutes = parseFloat(token[2].replace(',', '.'));
        return (hours % 24) * MILLISECONDS_IN_HOUR +
          minutes * MILLISECONDS_IN_MINUTE$1
      }
      token = parseTokenHHMMSS.exec(timeString);
      if (token) {
        hours = parseInt(token[1], 10);
        minutes = parseInt(token[2], 10);
        var seconds = parseFloat(token[3].replace(',', '.'));
        return (hours % 24) * MILLISECONDS_IN_HOUR +
          minutes * MILLISECONDS_IN_MINUTE$1 +
          seconds * 1000
      }
      return null
    }
    function parseTimezone (timezoneString) {
      var token;
      var absoluteOffset;
      token = parseTokenTimezoneZ.exec(timezoneString);
      if (token) {
        return 0
      }
      token = parseTokenTimezoneHH.exec(timezoneString);
      if (token) {
        absoluteOffset = parseInt(token[2], 10) * 60;
        return (token[1] === '+') ? -absoluteOffset : absoluteOffset
      }
      token = parseTokenTimezoneHHMM.exec(timezoneString);
      if (token) {
        absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10);
        return (token[1] === '+') ? -absoluteOffset : absoluteOffset
      }
      return 0
    }
    function dayOfISOYear (isoYear, week, day) {
      week = week || 0;
      day = day || 0;
      var date = new Date(0);
      date.setUTCFullYear(isoYear, 0, 4);
      var fourthOfJanuaryDay = date.getUTCDay() || 7;
      var diff = week * 7 + day + 1 - fourthOfJanuaryDay;
      date.setUTCDate(date.getUTCDate() + diff);
      return date
    }
    var parse_1 = parse;

    function addDays (dirtyDate, dirtyAmount) {
      var date = parse_1(dirtyDate);
      var amount = Number(dirtyAmount);
      date.setDate(date.getDate() + amount);
      return date
    }
    var add_days = addDays;

    function addMilliseconds (dirtyDate, dirtyAmount) {
      var timestamp = parse_1(dirtyDate).getTime();
      var amount = Number(dirtyAmount);
      return new Date(timestamp + amount)
    }
    var add_milliseconds = addMilliseconds;

    var MILLISECONDS_IN_HOUR$1 = 3600000;
    function addHours (dirtyDate, dirtyAmount) {
      var amount = Number(dirtyAmount);
      return add_milliseconds(dirtyDate, amount * MILLISECONDS_IN_HOUR$1)
    }
    var add_hours = addHours;

    function startOfWeek (dirtyDate, dirtyOptions) {
      var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0;
      var date = parse_1(dirtyDate);
      var day = date.getDay();
      var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
      date.setDate(date.getDate() - diff);
      date.setHours(0, 0, 0, 0);
      return date
    }
    var start_of_week = startOfWeek;

    function startOfISOWeek (dirtyDate) {
      return start_of_week(dirtyDate, {weekStartsOn: 1})
    }
    var start_of_iso_week = startOfISOWeek;

    function getISOYear (dirtyDate) {
      var date = parse_1(dirtyDate);
      var year = date.getFullYear();
      var fourthOfJanuaryOfNextYear = new Date(0);
      fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
      fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
      var startOfNextYear = start_of_iso_week(fourthOfJanuaryOfNextYear);
      var fourthOfJanuaryOfThisYear = new Date(0);
      fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
      fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
      var startOfThisYear = start_of_iso_week(fourthOfJanuaryOfThisYear);
      if (date.getTime() >= startOfNextYear.getTime()) {
        return year + 1
      } else if (date.getTime() >= startOfThisYear.getTime()) {
        return year
      } else {
        return year - 1
      }
    }
    var get_iso_year = getISOYear;

    function startOfISOYear (dirtyDate) {
      var year = get_iso_year(dirtyDate);
      var fourthOfJanuary = new Date(0);
      fourthOfJanuary.setFullYear(year, 0, 4);
      fourthOfJanuary.setHours(0, 0, 0, 0);
      var date = start_of_iso_week(fourthOfJanuary);
      return date
    }
    var start_of_iso_year = startOfISOYear;

    function startOfDay (dirtyDate) {
      var date = parse_1(dirtyDate);
      date.setHours(0, 0, 0, 0);
      return date
    }
    var start_of_day = startOfDay;

    var MILLISECONDS_IN_MINUTE$2 = 60000;
    var MILLISECONDS_IN_DAY = 86400000;
    function differenceInCalendarDays (dirtyDateLeft, dirtyDateRight) {
      var startOfDayLeft = start_of_day(dirtyDateLeft);
      var startOfDayRight = start_of_day(dirtyDateRight);
      var timestampLeft = startOfDayLeft.getTime() -
        startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE$2;
      var timestampRight = startOfDayRight.getTime() -
        startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE$2;
      return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY)
    }
    var difference_in_calendar_days = differenceInCalendarDays;

    function setISOYear (dirtyDate, dirtyISOYear) {
      var date = parse_1(dirtyDate);
      var isoYear = Number(dirtyISOYear);
      var diff = difference_in_calendar_days(date, start_of_iso_year(date));
      var fourthOfJanuary = new Date(0);
      fourthOfJanuary.setFullYear(isoYear, 0, 4);
      fourthOfJanuary.setHours(0, 0, 0, 0);
      date = start_of_iso_year(fourthOfJanuary);
      date.setDate(date.getDate() + diff);
      return date
    }
    var set_iso_year = setISOYear;

    function addISOYears (dirtyDate, dirtyAmount) {
      var amount = Number(dirtyAmount);
      return set_iso_year(dirtyDate, get_iso_year(dirtyDate) + amount)
    }
    var add_iso_years = addISOYears;

    var MILLISECONDS_IN_MINUTE$3 = 60000;
    function addMinutes (dirtyDate, dirtyAmount) {
      var amount = Number(dirtyAmount);
      return add_milliseconds(dirtyDate, amount * MILLISECONDS_IN_MINUTE$3)
    }
    var add_minutes = addMinutes;

    function getDaysInMonth (dirtyDate) {
      var date = parse_1(dirtyDate);
      var year = date.getFullYear();
      var monthIndex = date.getMonth();
      var lastDayOfMonth = new Date(0);
      lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
      lastDayOfMonth.setHours(0, 0, 0, 0);
      return lastDayOfMonth.getDate()
    }
    var get_days_in_month = getDaysInMonth;

    function addMonths (dirtyDate, dirtyAmount) {
      var date = parse_1(dirtyDate);
      var amount = Number(dirtyAmount);
      var desiredMonth = date.getMonth() + amount;
      var dateWithDesiredMonth = new Date(0);
      dateWithDesiredMonth.setFullYear(date.getFullYear(), desiredMonth, 1);
      dateWithDesiredMonth.setHours(0, 0, 0, 0);
      var daysInMonth = get_days_in_month(dateWithDesiredMonth);
      date.setMonth(desiredMonth, Math.min(daysInMonth, date.getDate()));
      return date
    }
    var add_months = addMonths;

    function addQuarters (dirtyDate, dirtyAmount) {
      var amount = Number(dirtyAmount);
      var months = amount * 3;
      return add_months(dirtyDate, months)
    }
    var add_quarters = addQuarters;

    function addSeconds (dirtyDate, dirtyAmount) {
      var amount = Number(dirtyAmount);
      return add_milliseconds(dirtyDate, amount * 1000)
    }
    var add_seconds = addSeconds;

    function addWeeks (dirtyDate, dirtyAmount) {
      var amount = Number(dirtyAmount);
      var days = amount * 7;
      return add_days(dirtyDate, days)
    }
    var add_weeks = addWeeks;

    function addYears (dirtyDate, dirtyAmount) {
      var amount = Number(dirtyAmount);
      return add_months(dirtyDate, amount * 12)
    }
    var add_years = addYears;

    function areRangesOverlapping (dirtyInitialRangeStartDate, dirtyInitialRangeEndDate, dirtyComparedRangeStartDate, dirtyComparedRangeEndDate) {
      var initialStartTime = parse_1(dirtyInitialRangeStartDate).getTime();
      var initialEndTime = parse_1(dirtyInitialRangeEndDate).getTime();
      var comparedStartTime = parse_1(dirtyComparedRangeStartDate).getTime();
      var comparedEndTime = parse_1(dirtyComparedRangeEndDate).getTime();
      if (initialStartTime > initialEndTime || comparedStartTime > comparedEndTime) {
        throw new Error('The start of the range cannot be after the end of the range')
      }
      return initialStartTime < comparedEndTime && comparedStartTime < initialEndTime
    }
    var are_ranges_overlapping = areRangesOverlapping;

    function closestIndexTo (dirtyDateToCompare, dirtyDatesArray) {
      if (!(dirtyDatesArray instanceof Array)) {
        throw new TypeError(toString.call(dirtyDatesArray) + ' is not an instance of Array')
      }
      var dateToCompare = parse_1(dirtyDateToCompare);
      var timeToCompare = dateToCompare.getTime();
      var result;
      var minDistance;
      dirtyDatesArray.forEach(function (dirtyDate, index) {
        var currentDate = parse_1(dirtyDate);
        var distance = Math.abs(timeToCompare - currentDate.getTime());
        if (result === undefined || distance < minDistance) {
          result = index;
          minDistance = distance;
        }
      });
      return result
    }
    var closest_index_to = closestIndexTo;

    function closestTo (dirtyDateToCompare, dirtyDatesArray) {
      if (!(dirtyDatesArray instanceof Array)) {
        throw new TypeError(toString.call(dirtyDatesArray) + ' is not an instance of Array')
      }
      var dateToCompare = parse_1(dirtyDateToCompare);
      var timeToCompare = dateToCompare.getTime();
      var result;
      var minDistance;
      dirtyDatesArray.forEach(function (dirtyDate) {
        var currentDate = parse_1(dirtyDate);
        var distance = Math.abs(timeToCompare - currentDate.getTime());
        if (result === undefined || distance < minDistance) {
          result = currentDate;
          minDistance = distance;
        }
      });
      return result
    }
    var closest_to = closestTo;

    function compareAsc (dirtyDateLeft, dirtyDateRight) {
      var dateLeft = parse_1(dirtyDateLeft);
      var timeLeft = dateLeft.getTime();
      var dateRight = parse_1(dirtyDateRight);
      var timeRight = dateRight.getTime();
      if (timeLeft < timeRight) {
        return -1
      } else if (timeLeft > timeRight) {
        return 1
      } else {
        return 0
      }
    }
    var compare_asc = compareAsc;

    function compareDesc (dirtyDateLeft, dirtyDateRight) {
      var dateLeft = parse_1(dirtyDateLeft);
      var timeLeft = dateLeft.getTime();
      var dateRight = parse_1(dirtyDateRight);
      var timeRight = dateRight.getTime();
      if (timeLeft > timeRight) {
        return -1
      } else if (timeLeft < timeRight) {
        return 1
      } else {
        return 0
      }
    }
    var compare_desc = compareDesc;

    var MILLISECONDS_IN_MINUTE$4 = 60000;
    var MILLISECONDS_IN_WEEK = 604800000;
    function differenceInCalendarISOWeeks (dirtyDateLeft, dirtyDateRight) {
      var startOfISOWeekLeft = start_of_iso_week(dirtyDateLeft);
      var startOfISOWeekRight = start_of_iso_week(dirtyDateRight);
      var timestampLeft = startOfISOWeekLeft.getTime() -
        startOfISOWeekLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE$4;
      var timestampRight = startOfISOWeekRight.getTime() -
        startOfISOWeekRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE$4;
      return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK)
    }
    var difference_in_calendar_iso_weeks = differenceInCalendarISOWeeks;

    function differenceInCalendarISOYears (dirtyDateLeft, dirtyDateRight) {
      return get_iso_year(dirtyDateLeft) - get_iso_year(dirtyDateRight)
    }
    var difference_in_calendar_iso_years = differenceInCalendarISOYears;

    function differenceInCalendarMonths (dirtyDateLeft, dirtyDateRight) {
      var dateLeft = parse_1(dirtyDateLeft);
      var dateRight = parse_1(dirtyDateRight);
      var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
      var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
      return yearDiff * 12 + monthDiff
    }
    var difference_in_calendar_months = differenceInCalendarMonths;

    function getQuarter (dirtyDate) {
      var date = parse_1(dirtyDate);
      var quarter = Math.floor(date.getMonth() / 3) + 1;
      return quarter
    }
    var get_quarter = getQuarter;

    function differenceInCalendarQuarters (dirtyDateLeft, dirtyDateRight) {
      var dateLeft = parse_1(dirtyDateLeft);
      var dateRight = parse_1(dirtyDateRight);
      var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
      var quarterDiff = get_quarter(dateLeft) - get_quarter(dateRight);
      return yearDiff * 4 + quarterDiff
    }
    var difference_in_calendar_quarters = differenceInCalendarQuarters;

    var MILLISECONDS_IN_MINUTE$5 = 60000;
    var MILLISECONDS_IN_WEEK$1 = 604800000;
    function differenceInCalendarWeeks (dirtyDateLeft, dirtyDateRight, dirtyOptions) {
      var startOfWeekLeft = start_of_week(dirtyDateLeft, dirtyOptions);
      var startOfWeekRight = start_of_week(dirtyDateRight, dirtyOptions);
      var timestampLeft = startOfWeekLeft.getTime() -
        startOfWeekLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE$5;
      var timestampRight = startOfWeekRight.getTime() -
        startOfWeekRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE$5;
      return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK$1)
    }
    var difference_in_calendar_weeks = differenceInCalendarWeeks;

    function differenceInCalendarYears (dirtyDateLeft, dirtyDateRight) {
      var dateLeft = parse_1(dirtyDateLeft);
      var dateRight = parse_1(dirtyDateRight);
      return dateLeft.getFullYear() - dateRight.getFullYear()
    }
    var difference_in_calendar_years = differenceInCalendarYears;

    function differenceInDays (dirtyDateLeft, dirtyDateRight) {
      var dateLeft = parse_1(dirtyDateLeft);
      var dateRight = parse_1(dirtyDateRight);
      var sign = compare_asc(dateLeft, dateRight);
      var difference = Math.abs(difference_in_calendar_days(dateLeft, dateRight));
      dateLeft.setDate(dateLeft.getDate() - sign * difference);
      var isLastDayNotFull = compare_asc(dateLeft, dateRight) === -sign;
      return sign * (difference - isLastDayNotFull)
    }
    var difference_in_days = differenceInDays;

    function differenceInMilliseconds (dirtyDateLeft, dirtyDateRight) {
      var dateLeft = parse_1(dirtyDateLeft);
      var dateRight = parse_1(dirtyDateRight);
      return dateLeft.getTime() - dateRight.getTime()
    }
    var difference_in_milliseconds = differenceInMilliseconds;

    var MILLISECONDS_IN_HOUR$2 = 3600000;
    function differenceInHours (dirtyDateLeft, dirtyDateRight) {
      var diff = difference_in_milliseconds(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_HOUR$2;
      return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
    }
    var difference_in_hours = differenceInHours;

    function subISOYears (dirtyDate, dirtyAmount) {
      var amount = Number(dirtyAmount);
      return add_iso_years(dirtyDate, -amount)
    }
    var sub_iso_years = subISOYears;

    function differenceInISOYears (dirtyDateLeft, dirtyDateRight) {
      var dateLeft = parse_1(dirtyDateLeft);
      var dateRight = parse_1(dirtyDateRight);
      var sign = compare_asc(dateLeft, dateRight);
      var difference = Math.abs(difference_in_calendar_iso_years(dateLeft, dateRight));
      dateLeft = sub_iso_years(dateLeft, sign * difference);
      var isLastISOYearNotFull = compare_asc(dateLeft, dateRight) === -sign;
      return sign * (difference - isLastISOYearNotFull)
    }
    var difference_in_iso_years = differenceInISOYears;

    var MILLISECONDS_IN_MINUTE$6 = 60000;
    function differenceInMinutes (dirtyDateLeft, dirtyDateRight) {
      var diff = difference_in_milliseconds(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_MINUTE$6;
      return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
    }
    var difference_in_minutes = differenceInMinutes;

    function differenceInMonths (dirtyDateLeft, dirtyDateRight) {
      var dateLeft = parse_1(dirtyDateLeft);
      var dateRight = parse_1(dirtyDateRight);
      var sign = compare_asc(dateLeft, dateRight);
      var difference = Math.abs(difference_in_calendar_months(dateLeft, dateRight));
      dateLeft.setMonth(dateLeft.getMonth() - sign * difference);
      var isLastMonthNotFull = compare_asc(dateLeft, dateRight) === -sign;
      return sign * (difference - isLastMonthNotFull)
    }
    var difference_in_months = differenceInMonths;

    function differenceInQuarters (dirtyDateLeft, dirtyDateRight) {
      var diff = difference_in_months(dirtyDateLeft, dirtyDateRight) / 3;
      return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
    }
    var difference_in_quarters = differenceInQuarters;

    function differenceInSeconds (dirtyDateLeft, dirtyDateRight) {
      var diff = difference_in_milliseconds(dirtyDateLeft, dirtyDateRight) / 1000;
      return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
    }
    var difference_in_seconds = differenceInSeconds;

    function differenceInWeeks (dirtyDateLeft, dirtyDateRight) {
      var diff = difference_in_days(dirtyDateLeft, dirtyDateRight) / 7;
      return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
    }
    var difference_in_weeks = differenceInWeeks;

    function differenceInYears (dirtyDateLeft, dirtyDateRight) {
      var dateLeft = parse_1(dirtyDateLeft);
      var dateRight = parse_1(dirtyDateRight);
      var sign = compare_asc(dateLeft, dateRight);
      var difference = Math.abs(difference_in_calendar_years(dateLeft, dateRight));
      dateLeft.setFullYear(dateLeft.getFullYear() - sign * difference);
      var isLastYearNotFull = compare_asc(dateLeft, dateRight) === -sign;
      return sign * (difference - isLastYearNotFull)
    }
    var difference_in_years = differenceInYears;

    function buildDistanceInWordsLocale () {
      var distanceInWordsLocale = {
        lessThanXSeconds: {
          one: 'less than a second',
          other: 'less than {{count}} seconds'
        },
        xSeconds: {
          one: '1 second',
          other: '{{count}} seconds'
        },
        halfAMinute: 'half a minute',
        lessThanXMinutes: {
          one: 'less than a minute',
          other: 'less than {{count}} minutes'
        },
        xMinutes: {
          one: '1 minute',
          other: '{{count}} minutes'
        },
        aboutXHours: {
          one: 'about 1 hour',
          other: 'about {{count}} hours'
        },
        xHours: {
          one: '1 hour',
          other: '{{count}} hours'
        },
        xDays: {
          one: '1 day',
          other: '{{count}} days'
        },
        aboutXMonths: {
          one: 'about 1 month',
          other: 'about {{count}} months'
        },
        xMonths: {
          one: '1 month',
          other: '{{count}} months'
        },
        aboutXYears: {
          one: 'about 1 year',
          other: 'about {{count}} years'
        },
        xYears: {
          one: '1 year',
          other: '{{count}} years'
        },
        overXYears: {
          one: 'over 1 year',
          other: 'over {{count}} years'
        },
        almostXYears: {
          one: 'almost 1 year',
          other: 'almost {{count}} years'
        }
      };
      function localize (token, count, options) {
        options = options || {};
        var result;
        if (typeof distanceInWordsLocale[token] === 'string') {
          result = distanceInWordsLocale[token];
        } else if (count === 1) {
          result = distanceInWordsLocale[token].one;
        } else {
          result = distanceInWordsLocale[token].other.replace('{{count}}', count);
        }
        if (options.addSuffix) {
          if (options.comparison > 0) {
            return 'in ' + result
          } else {
            return result + ' ago'
          }
        }
        return result
      }
      return {
        localize: localize
      }
    }
    var build_distance_in_words_locale = buildDistanceInWordsLocale;

    var commonFormatterKeys = [
      'M', 'MM', 'Q', 'D', 'DD', 'DDD', 'DDDD', 'd',
      'E', 'W', 'WW', 'YY', 'YYYY', 'GG', 'GGGG',
      'H', 'HH', 'h', 'hh', 'm', 'mm',
      's', 'ss', 'S', 'SS', 'SSS',
      'Z', 'ZZ', 'X', 'x'
    ];
    function buildFormattingTokensRegExp (formatters) {
      var formatterKeys = [];
      for (var key in formatters) {
        if (formatters.hasOwnProperty(key)) {
          formatterKeys.push(key);
        }
      }
      var formattingTokens = commonFormatterKeys
        .concat(formatterKeys)
        .sort()
        .reverse();
      var formattingTokensRegExp = new RegExp(
        '(\\[[^\\[]*\\])|(\\\\)?' + '(' + formattingTokens.join('|') + '|.)', 'g'
      );
      return formattingTokensRegExp
    }
    var build_formatting_tokens_reg_exp = buildFormattingTokensRegExp;

    function buildFormatLocale () {
      var months3char = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      var monthsFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      var weekdays2char = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
      var weekdays3char = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      var weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var meridiemUppercase = ['AM', 'PM'];
      var meridiemLowercase = ['am', 'pm'];
      var meridiemFull = ['a.m.', 'p.m.'];
      var formatters = {
        'MMM': function (date) {
          return months3char[date.getMonth()]
        },
        'MMMM': function (date) {
          return monthsFull[date.getMonth()]
        },
        'dd': function (date) {
          return weekdays2char[date.getDay()]
        },
        'ddd': function (date) {
          return weekdays3char[date.getDay()]
        },
        'dddd': function (date) {
          return weekdaysFull[date.getDay()]
        },
        'A': function (date) {
          return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
        },
        'a': function (date) {
          return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
        },
        'aa': function (date) {
          return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
        }
      };
      var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W'];
      ordinalFormatters.forEach(function (formatterToken) {
        formatters[formatterToken + 'o'] = function (date, formatters) {
          return ordinal(formatters[formatterToken](date))
        };
      });
      return {
        formatters: formatters,
        formattingTokensRegExp: build_formatting_tokens_reg_exp(formatters)
      }
    }
    function ordinal (number) {
      var rem100 = number % 100;
      if (rem100 > 20 || rem100 < 10) {
        switch (rem100 % 10) {
          case 1:
            return number + 'st'
          case 2:
            return number + 'nd'
          case 3:
            return number + 'rd'
        }
      }
      return number + 'th'
    }
    var build_format_locale = buildFormatLocale;

    var en = {
      distanceInWords: build_distance_in_words_locale(),
      format: build_format_locale()
    };

    var MINUTES_IN_DAY = 1440;
    var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
    var MINUTES_IN_MONTH = 43200;
    var MINUTES_IN_TWO_MONTHS = 86400;
    function distanceInWords (dirtyDateToCompare, dirtyDate, dirtyOptions) {
      var options = dirtyOptions || {};
      var comparison = compare_desc(dirtyDateToCompare, dirtyDate);
      var locale = options.locale;
      var localize = en.distanceInWords.localize;
      if (locale && locale.distanceInWords && locale.distanceInWords.localize) {
        localize = locale.distanceInWords.localize;
      }
      var localizeOptions = {
        addSuffix: Boolean(options.addSuffix),
        comparison: comparison
      };
      var dateLeft, dateRight;
      if (comparison > 0) {
        dateLeft = parse_1(dirtyDateToCompare);
        dateRight = parse_1(dirtyDate);
      } else {
        dateLeft = parse_1(dirtyDate);
        dateRight = parse_1(dirtyDateToCompare);
      }
      var seconds = difference_in_seconds(dateRight, dateLeft);
      var offset = dateRight.getTimezoneOffset() - dateLeft.getTimezoneOffset();
      var minutes = Math.round(seconds / 60) - offset;
      var months;
      if (minutes < 2) {
        if (options.includeSeconds) {
          if (seconds < 5) {
            return localize('lessThanXSeconds', 5, localizeOptions)
          } else if (seconds < 10) {
            return localize('lessThanXSeconds', 10, localizeOptions)
          } else if (seconds < 20) {
            return localize('lessThanXSeconds', 20, localizeOptions)
          } else if (seconds < 40) {
            return localize('halfAMinute', null, localizeOptions)
          } else if (seconds < 60) {
            return localize('lessThanXMinutes', 1, localizeOptions)
          } else {
            return localize('xMinutes', 1, localizeOptions)
          }
        } else {
          if (minutes === 0) {
            return localize('lessThanXMinutes', 1, localizeOptions)
          } else {
            return localize('xMinutes', minutes, localizeOptions)
          }
        }
      } else if (minutes < 45) {
        return localize('xMinutes', minutes, localizeOptions)
      } else if (minutes < 90) {
        return localize('aboutXHours', 1, localizeOptions)
      } else if (minutes < MINUTES_IN_DAY) {
        var hours = Math.round(minutes / 60);
        return localize('aboutXHours', hours, localizeOptions)
      } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
        return localize('xDays', 1, localizeOptions)
      } else if (minutes < MINUTES_IN_MONTH) {
        var days = Math.round(minutes / MINUTES_IN_DAY);
        return localize('xDays', days, localizeOptions)
      } else if (minutes < MINUTES_IN_TWO_MONTHS) {
        months = Math.round(minutes / MINUTES_IN_MONTH);
        return localize('aboutXMonths', months, localizeOptions)
      }
      months = difference_in_months(dateRight, dateLeft);
      if (months < 12) {
        var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
        return localize('xMonths', nearestMonth, localizeOptions)
      } else {
        var monthsSinceStartOfYear = months % 12;
        var years = Math.floor(months / 12);
        if (monthsSinceStartOfYear < 3) {
          return localize('aboutXYears', years, localizeOptions)
        } else if (monthsSinceStartOfYear < 9) {
          return localize('overXYears', years, localizeOptions)
        } else {
          return localize('almostXYears', years + 1, localizeOptions)
        }
      }
    }
    var distance_in_words = distanceInWords;

    var MINUTES_IN_DAY$1 = 1440;
    var MINUTES_IN_MONTH$1 = 43200;
    var MINUTES_IN_YEAR = 525600;
    function distanceInWordsStrict (dirtyDateToCompare, dirtyDate, dirtyOptions) {
      var options = dirtyOptions || {};
      var comparison = compare_desc(dirtyDateToCompare, dirtyDate);
      var locale = options.locale;
      var localize = en.distanceInWords.localize;
      if (locale && locale.distanceInWords && locale.distanceInWords.localize) {
        localize = locale.distanceInWords.localize;
      }
      var localizeOptions = {
        addSuffix: Boolean(options.addSuffix),
        comparison: comparison
      };
      var dateLeft, dateRight;
      if (comparison > 0) {
        dateLeft = parse_1(dirtyDateToCompare);
        dateRight = parse_1(dirtyDate);
      } else {
        dateLeft = parse_1(dirtyDate);
        dateRight = parse_1(dirtyDateToCompare);
      }
      var unit;
      var mathPartial = Math[options.partialMethod ? String(options.partialMethod) : 'floor'];
      var seconds = difference_in_seconds(dateRight, dateLeft);
      var offset = dateRight.getTimezoneOffset() - dateLeft.getTimezoneOffset();
      var minutes = mathPartial(seconds / 60) - offset;
      var hours, days, months, years;
      if (options.unit) {
        unit = String(options.unit);
      } else {
        if (minutes < 1) {
          unit = 's';
        } else if (minutes < 60) {
          unit = 'm';
        } else if (minutes < MINUTES_IN_DAY$1) {
          unit = 'h';
        } else if (minutes < MINUTES_IN_MONTH$1) {
          unit = 'd';
        } else if (minutes < MINUTES_IN_YEAR) {
          unit = 'M';
        } else {
          unit = 'Y';
        }
      }
      if (unit === 's') {
        return localize('xSeconds', seconds, localizeOptions)
      } else if (unit === 'm') {
        return localize('xMinutes', minutes, localizeOptions)
      } else if (unit === 'h') {
        hours = mathPartial(minutes / 60);
        return localize('xHours', hours, localizeOptions)
      } else if (unit === 'd') {
        days = mathPartial(minutes / MINUTES_IN_DAY$1);
        return localize('xDays', days, localizeOptions)
      } else if (unit === 'M') {
        months = mathPartial(minutes / MINUTES_IN_MONTH$1);
        return localize('xMonths', months, localizeOptions)
      } else if (unit === 'Y') {
        years = mathPartial(minutes / MINUTES_IN_YEAR);
        return localize('xYears', years, localizeOptions)
      }
      throw new Error('Unknown unit: ' + unit)
    }
    var distance_in_words_strict = distanceInWordsStrict;

    function distanceInWordsToNow (dirtyDate, dirtyOptions) {
      return distance_in_words(Date.now(), dirtyDate, dirtyOptions)
    }
    var distance_in_words_to_now = distanceInWordsToNow;

    function eachDay (dirtyStartDate, dirtyEndDate, dirtyStep) {
      var startDate = parse_1(dirtyStartDate);
      var endDate = parse_1(dirtyEndDate);
      var step = dirtyStep !== undefined ? dirtyStep : 1;
      var endTime = endDate.getTime();
      if (startDate.getTime() > endTime) {
        throw new Error('The first date cannot be after the second date')
      }
      var dates = [];
      var currentDate = startDate;
      currentDate.setHours(0, 0, 0, 0);
      while (currentDate.getTime() <= endTime) {
        dates.push(parse_1(currentDate));
        currentDate.setDate(currentDate.getDate() + step);
      }
      return dates
    }
    var each_day = eachDay;

    function endOfDay (dirtyDate) {
      var date = parse_1(dirtyDate);
      date.setHours(23, 59, 59, 999);
      return date
    }
    var end_of_day = endOfDay;

    function endOfHour (dirtyDate) {
      var date = parse_1(dirtyDate);
      date.setMinutes(59, 59, 999);
      return date
    }
    var end_of_hour = endOfHour;

    function endOfWeek (dirtyDate, dirtyOptions) {
      var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0;
      var date = parse_1(dirtyDate);
      var day = date.getDay();
      var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
      date.setDate(date.getDate() + diff);
      date.setHours(23, 59, 59, 999);
      return date
    }
    var end_of_week = endOfWeek;

    function endOfISOWeek (dirtyDate) {
      return end_of_week(dirtyDate, {weekStartsOn: 1})
    }
    var end_of_iso_week = endOfISOWeek;

    function endOfISOYear (dirtyDate) {
      var year = get_iso_year(dirtyDate);
      var fourthOfJanuaryOfNextYear = new Date(0);
      fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
      fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
      var date = start_of_iso_week(fourthOfJanuaryOfNextYear);
      date.setMilliseconds(date.getMilliseconds() - 1);
      return date
    }
    var end_of_iso_year = endOfISOYear;

    function endOfMinute (dirtyDate) {
      var date = parse_1(dirtyDate);
      date.setSeconds(59, 999);
      return date
    }
    var end_of_minute = endOfMinute;

    function endOfMonth (dirtyDate) {
      var date = parse_1(dirtyDate);
      var month = date.getMonth();
      date.setFullYear(date.getFullYear(), month + 1, 0);
      date.setHours(23, 59, 59, 999);
      return date
    }
    var end_of_month = endOfMonth;

    function endOfQuarter (dirtyDate) {
      var date = parse_1(dirtyDate);
      var currentMonth = date.getMonth();
      var month = currentMonth - currentMonth % 3 + 3;
      date.setMonth(month, 0);
      date.setHours(23, 59, 59, 999);
      return date
    }
    var end_of_quarter = endOfQuarter;

    function endOfSecond (dirtyDate) {
      var date = parse_1(dirtyDate);
      date.setMilliseconds(999);
      return date
    }
    var end_of_second = endOfSecond;

    function endOfToday () {
      return end_of_day(new Date())
    }
    var end_of_today = endOfToday;

    function endOfTomorrow () {
      var now = new Date();
      var year = now.getFullYear();
      var month = now.getMonth();
      var day = now.getDate();
      var date = new Date(0);
      date.setFullYear(year, month, day + 1);
      date.setHours(23, 59, 59, 999);
      return date
    }
    var end_of_tomorrow = endOfTomorrow;

    function endOfYear (dirtyDate) {
      var date = parse_1(dirtyDate);
      var year = date.getFullYear();
      date.setFullYear(year + 1, 0, 0);
      date.setHours(23, 59, 59, 999);
      return date
    }
    var end_of_year = endOfYear;

    function endOfYesterday () {
      var now = new Date();
      var year = now.getFullYear();
      var month = now.getMonth();
      var day = now.getDate();
      var date = new Date(0);
      date.setFullYear(year, month, day - 1);
      date.setHours(23, 59, 59, 999);
      return date
    }
    var end_of_yesterday = endOfYesterday;

    function startOfYear (dirtyDate) {
      var cleanDate = parse_1(dirtyDate);
      var date = new Date(0);
      date.setFullYear(cleanDate.getFullYear(), 0, 1);
      date.setHours(0, 0, 0, 0);
      return date
    }
    var start_of_year = startOfYear;

    function getDayOfYear (dirtyDate) {
      var date = parse_1(dirtyDate);
      var diff = difference_in_calendar_days(date, start_of_year(date));
      var dayOfYear = diff + 1;
      return dayOfYear
    }
    var get_day_of_year = getDayOfYear;

    var MILLISECONDS_IN_WEEK$2 = 604800000;
    function getISOWeek (dirtyDate) {
      var date = parse_1(dirtyDate);
      var diff = start_of_iso_week(date).getTime() - start_of_iso_year(date).getTime();
      return Math.round(diff / MILLISECONDS_IN_WEEK$2) + 1
    }
    var get_iso_week = getISOWeek;

    function isValid (dirtyDate) {
      if (is_date(dirtyDate)) {
        return !isNaN(dirtyDate)
      } else {
        throw new TypeError(toString.call(dirtyDate) + ' is not an instance of Date')
      }
    }
    var is_valid = isValid;

    function format (dirtyDate, dirtyFormatStr, dirtyOptions) {
      var formatStr = dirtyFormatStr ? String(dirtyFormatStr) : 'YYYY-MM-DDTHH:mm:ss.SSSZ';
      var options = dirtyOptions || {};
      var locale = options.locale;
      var localeFormatters = en.format.formatters;
      var formattingTokensRegExp = en.format.formattingTokensRegExp;
      if (locale && locale.format && locale.format.formatters) {
        localeFormatters = locale.format.formatters;
        if (locale.format.formattingTokensRegExp) {
          formattingTokensRegExp = locale.format.formattingTokensRegExp;
        }
      }
      var date = parse_1(dirtyDate);
      if (!is_valid(date)) {
        return 'Invalid Date'
      }
      var formatFn = buildFormatFn(formatStr, localeFormatters, formattingTokensRegExp);
      return formatFn(date)
    }
    var formatters = {
      'M': function (date) {
        return date.getMonth() + 1
      },
      'MM': function (date) {
        return addLeadingZeros(date.getMonth() + 1, 2)
      },
      'Q': function (date) {
        return Math.ceil((date.getMonth() + 1) / 3)
      },
      'D': function (date) {
        return date.getDate()
      },
      'DD': function (date) {
        return addLeadingZeros(date.getDate(), 2)
      },
      'DDD': function (date) {
        return get_day_of_year(date)
      },
      'DDDD': function (date) {
        return addLeadingZeros(get_day_of_year(date), 3)
      },
      'd': function (date) {
        return date.getDay()
      },
      'E': function (date) {
        return date.getDay() || 7
      },
      'W': function (date) {
        return get_iso_week(date)
      },
      'WW': function (date) {
        return addLeadingZeros(get_iso_week(date), 2)
      },
      'YY': function (date) {
        return addLeadingZeros(date.getFullYear(), 4).substr(2)
      },
      'YYYY': function (date) {
        return addLeadingZeros(date.getFullYear(), 4)
      },
      'GG': function (date) {
        return String(get_iso_year(date)).substr(2)
      },
      'GGGG': function (date) {
        return get_iso_year(date)
      },
      'H': function (date) {
        return date.getHours()
      },
      'HH': function (date) {
        return addLeadingZeros(date.getHours(), 2)
      },
      'h': function (date) {
        var hours = date.getHours();
        if (hours === 0) {
          return 12
        } else if (hours > 12) {
          return hours % 12
        } else {
          return hours
        }
      },
      'hh': function (date) {
        return addLeadingZeros(formatters['h'](date), 2)
      },
      'm': function (date) {
        return date.getMinutes()
      },
      'mm': function (date) {
        return addLeadingZeros(date.getMinutes(), 2)
      },
      's': function (date) {
        return date.getSeconds()
      },
      'ss': function (date) {
        return addLeadingZeros(date.getSeconds(), 2)
      },
      'S': function (date) {
        return Math.floor(date.getMilliseconds() / 100)
      },
      'SS': function (date) {
        return addLeadingZeros(Math.floor(date.getMilliseconds() / 10), 2)
      },
      'SSS': function (date) {
        return addLeadingZeros(date.getMilliseconds(), 3)
      },
      'Z': function (date) {
        return formatTimezone(date.getTimezoneOffset(), ':')
      },
      'ZZ': function (date) {
        return formatTimezone(date.getTimezoneOffset())
      },
      'X': function (date) {
        return Math.floor(date.getTime() / 1000)
      },
      'x': function (date) {
        return date.getTime()
      }
    };
    function buildFormatFn (formatStr, localeFormatters, formattingTokensRegExp) {
      var array = formatStr.match(formattingTokensRegExp);
      var length = array.length;
      var i;
      var formatter;
      for (i = 0; i < length; i++) {
        formatter = localeFormatters[array[i]] || formatters[array[i]];
        if (formatter) {
          array[i] = formatter;
        } else {
          array[i] = removeFormattingTokens(array[i]);
        }
      }
      return function (date) {
        var output = '';
        for (var i = 0; i < length; i++) {
          if (array[i] instanceof Function) {
            output += array[i](date, formatters);
          } else {
            output += array[i];
          }
        }
        return output
      }
    }
    function removeFormattingTokens (input) {
      if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|]$/g, '')
      }
      return input.replace(/\\/g, '')
    }
    function formatTimezone (offset, delimeter) {
      delimeter = delimeter || '';
      var sign = offset > 0 ? '-' : '+';
      var absOffset = Math.abs(offset);
      var hours = Math.floor(absOffset / 60);
      var minutes = absOffset % 60;
      return sign + addLeadingZeros(hours, 2) + delimeter + addLeadingZeros(minutes, 2)
    }
    function addLeadingZeros (number, targetLength) {
      var output = Math.abs(number).toString();
      while (output.length < targetLength) {
        output = '0' + output;
      }
      return output
    }
    var format_1 = format;

    function getDate (dirtyDate) {
      var date = parse_1(dirtyDate);
      var dayOfMonth = date.getDate();
      return dayOfMonth
    }
    var get_date = getDate;

    function getDay (dirtyDate) {
      var date = parse_1(dirtyDate);
      var day = date.getDay();
      return day
    }
    var get_day = getDay;

    function isLeapYear (dirtyDate) {
      var date = parse_1(dirtyDate);
      var year = date.getFullYear();
      return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0
    }
    var is_leap_year = isLeapYear;

    function getDaysInYear (dirtyDate) {
      return is_leap_year(dirtyDate) ? 366 : 365
    }
    var get_days_in_year = getDaysInYear;

    function getHours (dirtyDate) {
      var date = parse_1(dirtyDate);
      var hours = date.getHours();
      return hours
    }
    var get_hours = getHours;

    function getISODay (dirtyDate) {
      var date = parse_1(dirtyDate);
      var day = date.getDay();
      if (day === 0) {
        day = 7;
      }
      return day
    }
    var get_iso_day = getISODay;

    var MILLISECONDS_IN_WEEK$3 = 604800000;
    function getISOWeeksInYear (dirtyDate) {
      var thisYear = start_of_iso_year(dirtyDate);
      var nextYear = start_of_iso_year(add_weeks(thisYear, 60));
      var diff = nextYear.valueOf() - thisYear.valueOf();
      return Math.round(diff / MILLISECONDS_IN_WEEK$3)
    }
    var get_iso_weeks_in_year = getISOWeeksInYear;

    function getMilliseconds (dirtyDate) {
      var date = parse_1(dirtyDate);
      var milliseconds = date.getMilliseconds();
      return milliseconds
    }
    var get_milliseconds = getMilliseconds;

    function getMinutes (dirtyDate) {
      var date = parse_1(dirtyDate);
      var minutes = date.getMinutes();
      return minutes
    }
    var get_minutes = getMinutes;

    function getMonth (dirtyDate) {
      var date = parse_1(dirtyDate);
      var month = date.getMonth();
      return month
    }
    var get_month = getMonth;

    var MILLISECONDS_IN_DAY$1 = 24 * 60 * 60 * 1000;
    function getOverlappingDaysInRanges (dirtyInitialRangeStartDate, dirtyInitialRangeEndDate, dirtyComparedRangeStartDate, dirtyComparedRangeEndDate) {
      var initialStartTime = parse_1(dirtyInitialRangeStartDate).getTime();
      var initialEndTime = parse_1(dirtyInitialRangeEndDate).getTime();
      var comparedStartTime = parse_1(dirtyComparedRangeStartDate).getTime();
      var comparedEndTime = parse_1(dirtyComparedRangeEndDate).getTime();
      if (initialStartTime > initialEndTime || comparedStartTime > comparedEndTime) {
        throw new Error('The start of the range cannot be after the end of the range')
      }
      var isOverlapping = initialStartTime < comparedEndTime && comparedStartTime < initialEndTime;
      if (!isOverlapping) {
        return 0
      }
      var overlapStartDate = comparedStartTime < initialStartTime
        ? initialStartTime
        : comparedStartTime;
      var overlapEndDate = comparedEndTime > initialEndTime
        ? initialEndTime
        : comparedEndTime;
      var differenceInMs = overlapEndDate - overlapStartDate;
      return Math.ceil(differenceInMs / MILLISECONDS_IN_DAY$1)
    }
    var get_overlapping_days_in_ranges = getOverlappingDaysInRanges;

    function getSeconds (dirtyDate) {
      var date = parse_1(dirtyDate);
      var seconds = date.getSeconds();
      return seconds
    }
    var get_seconds = getSeconds;

    function getTime (dirtyDate) {
      var date = parse_1(dirtyDate);
      var timestamp = date.getTime();
      return timestamp
    }
    var get_time = getTime;

    function getYear (dirtyDate) {
      var date = parse_1(dirtyDate);
      var year = date.getFullYear();
      return year
    }
    var get_year = getYear;

    function isAfter (dirtyDate, dirtyDateToCompare) {
      var date = parse_1(dirtyDate);
      var dateToCompare = parse_1(dirtyDateToCompare);
      return date.getTime() > dateToCompare.getTime()
    }
    var is_after = isAfter;

    function isBefore (dirtyDate, dirtyDateToCompare) {
      var date = parse_1(dirtyDate);
      var dateToCompare = parse_1(dirtyDateToCompare);
      return date.getTime() < dateToCompare.getTime()
    }
    var is_before = isBefore;

    function isEqual (dirtyLeftDate, dirtyRightDate) {
      var dateLeft = parse_1(dirtyLeftDate);
      var dateRight = parse_1(dirtyRightDate);
      return dateLeft.getTime() === dateRight.getTime()
    }
    var is_equal = isEqual;

    function isFirstDayOfMonth (dirtyDate) {
      return parse_1(dirtyDate).getDate() === 1
    }
    var is_first_day_of_month = isFirstDayOfMonth;

    function isFriday (dirtyDate) {
      return parse_1(dirtyDate).getDay() === 5
    }
    var is_friday = isFriday;

    function isFuture (dirtyDate) {
      return parse_1(dirtyDate).getTime() > new Date().getTime()
    }
    var is_future = isFuture;

    function isLastDayOfMonth (dirtyDate) {
      var date = parse_1(dirtyDate);
      return end_of_day(date).getTime() === end_of_month(date).getTime()
    }
    var is_last_day_of_month = isLastDayOfMonth;

    function isMonday (dirtyDate) {
      return parse_1(dirtyDate).getDay() === 1
    }
    var is_monday = isMonday;

    function isPast (dirtyDate) {
      return parse_1(dirtyDate).getTime() < new Date().getTime()
    }
    var is_past = isPast;

    function isSameDay (dirtyDateLeft, dirtyDateRight) {
      var dateLeftStartOfDay = start_of_day(dirtyDateLeft);
      var dateRightStartOfDay = start_of_day(dirtyDateRight);
      return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime()
    }
    var is_same_day = isSameDay;

    function startOfHour (dirtyDate) {
      var date = parse_1(dirtyDate);
      date.setMinutes(0, 0, 0);
      return date
    }
    var start_of_hour = startOfHour;

    function isSameHour (dirtyDateLeft, dirtyDateRight) {
      var dateLeftStartOfHour = start_of_hour(dirtyDateLeft);
      var dateRightStartOfHour = start_of_hour(dirtyDateRight);
      return dateLeftStartOfHour.getTime() === dateRightStartOfHour.getTime()
    }
    var is_same_hour = isSameHour;

    function isSameWeek (dirtyDateLeft, dirtyDateRight, dirtyOptions) {
      var dateLeftStartOfWeek = start_of_week(dirtyDateLeft, dirtyOptions);
      var dateRightStartOfWeek = start_of_week(dirtyDateRight, dirtyOptions);
      return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime()
    }
    var is_same_week = isSameWeek;

    function isSameISOWeek (dirtyDateLeft, dirtyDateRight) {
      return is_same_week(dirtyDateLeft, dirtyDateRight, {weekStartsOn: 1})
    }
    var is_same_iso_week = isSameISOWeek;

    function isSameISOYear (dirtyDateLeft, dirtyDateRight) {
      var dateLeftStartOfYear = start_of_iso_year(dirtyDateLeft);
      var dateRightStartOfYear = start_of_iso_year(dirtyDateRight);
      return dateLeftStartOfYear.getTime() === dateRightStartOfYear.getTime()
    }
    var is_same_iso_year = isSameISOYear;

    function startOfMinute (dirtyDate) {
      var date = parse_1(dirtyDate);
      date.setSeconds(0, 0);
      return date
    }
    var start_of_minute = startOfMinute;

    function isSameMinute (dirtyDateLeft, dirtyDateRight) {
      var dateLeftStartOfMinute = start_of_minute(dirtyDateLeft);
      var dateRightStartOfMinute = start_of_minute(dirtyDateRight);
      return dateLeftStartOfMinute.getTime() === dateRightStartOfMinute.getTime()
    }
    var is_same_minute = isSameMinute;

    function isSameMonth (dirtyDateLeft, dirtyDateRight) {
      var dateLeft = parse_1(dirtyDateLeft);
      var dateRight = parse_1(dirtyDateRight);
      return dateLeft.getFullYear() === dateRight.getFullYear() &&
        dateLeft.getMonth() === dateRight.getMonth()
    }
    var is_same_month = isSameMonth;

    function startOfQuarter (dirtyDate) {
      var date = parse_1(dirtyDate);
      var currentMonth = date.getMonth();
      var month = currentMonth - currentMonth % 3;
      date.setMonth(month, 1);
      date.setHours(0, 0, 0, 0);
      return date
    }
    var start_of_quarter = startOfQuarter;

    function isSameQuarter (dirtyDateLeft, dirtyDateRight) {
      var dateLeftStartOfQuarter = start_of_quarter(dirtyDateLeft);
      var dateRightStartOfQuarter = start_of_quarter(dirtyDateRight);
      return dateLeftStartOfQuarter.getTime() === dateRightStartOfQuarter.getTime()
    }
    var is_same_quarter = isSameQuarter;

    function startOfSecond (dirtyDate) {
      var date = parse_1(dirtyDate);
      date.setMilliseconds(0);
      return date
    }
    var start_of_second = startOfSecond;

    function isSameSecond (dirtyDateLeft, dirtyDateRight) {
      var dateLeftStartOfSecond = start_of_second(dirtyDateLeft);
      var dateRightStartOfSecond = start_of_second(dirtyDateRight);
      return dateLeftStartOfSecond.getTime() === dateRightStartOfSecond.getTime()
    }
    var is_same_second = isSameSecond;

    function isSameYear (dirtyDateLeft, dirtyDateRight) {
      var dateLeft = parse_1(dirtyDateLeft);
      var dateRight = parse_1(dirtyDateRight);
      return dateLeft.getFullYear() === dateRight.getFullYear()
    }
    var is_same_year = isSameYear;

    function isSaturday (dirtyDate) {
      return parse_1(dirtyDate).getDay() === 6
    }
    var is_saturday = isSaturday;

    function isSunday (dirtyDate) {
      return parse_1(dirtyDate).getDay() === 0
    }
    var is_sunday = isSunday;

    function isThisHour (dirtyDate) {
      return is_same_hour(new Date(), dirtyDate)
    }
    var is_this_hour = isThisHour;

    function isThisISOWeek (dirtyDate) {
      return is_same_iso_week(new Date(), dirtyDate)
    }
    var is_this_iso_week = isThisISOWeek;

    function isThisISOYear (dirtyDate) {
      return is_same_iso_year(new Date(), dirtyDate)
    }
    var is_this_iso_year = isThisISOYear;

    function isThisMinute (dirtyDate) {
      return is_same_minute(new Date(), dirtyDate)
    }
    var is_this_minute = isThisMinute;

    function isThisMonth (dirtyDate) {
      return is_same_month(new Date(), dirtyDate)
    }
    var is_this_month = isThisMonth;

    function isThisQuarter (dirtyDate) {
      return is_same_quarter(new Date(), dirtyDate)
    }
    var is_this_quarter = isThisQuarter;

    function isThisSecond (dirtyDate) {
      return is_same_second(new Date(), dirtyDate)
    }
    var is_this_second = isThisSecond;

    function isThisWeek (dirtyDate, dirtyOptions) {
      return is_same_week(new Date(), dirtyDate, dirtyOptions)
    }
    var is_this_week = isThisWeek;

    function isThisYear (dirtyDate) {
      return is_same_year(new Date(), dirtyDate)
    }
    var is_this_year = isThisYear;

    function isThursday (dirtyDate) {
      return parse_1(dirtyDate).getDay() === 4
    }
    var is_thursday = isThursday;

    function isToday (dirtyDate) {
      return start_of_day(dirtyDate).getTime() === start_of_day(new Date()).getTime()
    }
    var is_today = isToday;

    function isTomorrow (dirtyDate) {
      var tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      return start_of_day(dirtyDate).getTime() === start_of_day(tomorrow).getTime()
    }
    var is_tomorrow = isTomorrow;

    function isTuesday (dirtyDate) {
      return parse_1(dirtyDate).getDay() === 2
    }
    var is_tuesday = isTuesday;

    function isWednesday (dirtyDate) {
      return parse_1(dirtyDate).getDay() === 3
    }
    var is_wednesday = isWednesday;

    function isWeekend (dirtyDate) {
      var date = parse_1(dirtyDate);
      var day = date.getDay();
      return day === 0 || day === 6
    }
    var is_weekend = isWeekend;

    function isWithinRange (dirtyDate, dirtyStartDate, dirtyEndDate) {
      var time = parse_1(dirtyDate).getTime();
      var startTime = parse_1(dirtyStartDate).getTime();
      var endTime = parse_1(dirtyEndDate).getTime();
      if (startTime > endTime) {
        throw new Error('The start of the range cannot be after the end of the range')
      }
      return time >= startTime && time <= endTime
    }
    var is_within_range = isWithinRange;

    function isYesterday (dirtyDate) {
      var yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      return start_of_day(dirtyDate).getTime() === start_of_day(yesterday).getTime()
    }
    var is_yesterday = isYesterday;

    function lastDayOfWeek (dirtyDate, dirtyOptions) {
      var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0;
      var date = parse_1(dirtyDate);
      var day = date.getDay();
      var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
      date.setHours(0, 0, 0, 0);
      date.setDate(date.getDate() + diff);
      return date
    }
    var last_day_of_week = lastDayOfWeek;

    function lastDayOfISOWeek (dirtyDate) {
      return last_day_of_week(dirtyDate, {weekStartsOn: 1})
    }
    var last_day_of_iso_week = lastDayOfISOWeek;

    function lastDayOfISOYear (dirtyDate) {
      var year = get_iso_year(dirtyDate);
      var fourthOfJanuary = new Date(0);
      fourthOfJanuary.setFullYear(year + 1, 0, 4);
      fourthOfJanuary.setHours(0, 0, 0, 0);
      var date = start_of_iso_week(fourthOfJanuary);
      date.setDate(date.getDate() - 1);
      return date
    }
    var last_day_of_iso_year = lastDayOfISOYear;

    function lastDayOfMonth (dirtyDate) {
      var date = parse_1(dirtyDate);
      var month = date.getMonth();
      date.setFullYear(date.getFullYear(), month + 1, 0);
      date.setHours(0, 0, 0, 0);
      return date
    }
    var last_day_of_month = lastDayOfMonth;

    function lastDayOfQuarter (dirtyDate) {
      var date = parse_1(dirtyDate);
      var currentMonth = date.getMonth();
      var month = currentMonth - currentMonth % 3 + 3;
      date.setMonth(month, 0);
      date.setHours(0, 0, 0, 0);
      return date
    }
    var last_day_of_quarter = lastDayOfQuarter;

    function lastDayOfYear (dirtyDate) {
      var date = parse_1(dirtyDate);
      var year = date.getFullYear();
      date.setFullYear(year + 1, 0, 0);
      date.setHours(0, 0, 0, 0);
      return date
    }
    var last_day_of_year = lastDayOfYear;

    function max () {
      var dirtyDates = Array.prototype.slice.call(arguments);
      var dates = dirtyDates.map(function (dirtyDate) {
        return parse_1(dirtyDate)
      });
      var latestTimestamp = Math.max.apply(null, dates);
      return new Date(latestTimestamp)
    }
    var max_1 = max;

    function min () {
      var dirtyDates = Array.prototype.slice.call(arguments);
      var dates = dirtyDates.map(function (dirtyDate) {
        return parse_1(dirtyDate)
      });
      var earliestTimestamp = Math.min.apply(null, dates);
      return new Date(earliestTimestamp)
    }
    var min_1 = min;

    function setDate (dirtyDate, dirtyDayOfMonth) {
      var date = parse_1(dirtyDate);
      var dayOfMonth = Number(dirtyDayOfMonth);
      date.setDate(dayOfMonth);
      return date
    }
    var set_date = setDate;

    function setDay (dirtyDate, dirtyDay, dirtyOptions) {
      var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0;
      var date = parse_1(dirtyDate);
      var day = Number(dirtyDay);
      var currentDay = date.getDay();
      var remainder = day % 7;
      var dayIndex = (remainder + 7) % 7;
      var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
      return add_days(date, diff)
    }
    var set_day = setDay;

    function setDayOfYear (dirtyDate, dirtyDayOfYear) {
      var date = parse_1(dirtyDate);
      var dayOfYear = Number(dirtyDayOfYear);
      date.setMonth(0);
      date.setDate(dayOfYear);
      return date
    }
    var set_day_of_year = setDayOfYear;

    function setHours (dirtyDate, dirtyHours) {
      var date = parse_1(dirtyDate);
      var hours = Number(dirtyHours);
      date.setHours(hours);
      return date
    }
    var set_hours = setHours;

    function setISODay (dirtyDate, dirtyDay) {
      var date = parse_1(dirtyDate);
      var day = Number(dirtyDay);
      var currentDay = get_iso_day(date);
      var diff = day - currentDay;
      return add_days(date, diff)
    }
    var set_iso_day = setISODay;

    function setISOWeek (dirtyDate, dirtyISOWeek) {
      var date = parse_1(dirtyDate);
      var isoWeek = Number(dirtyISOWeek);
      var diff = get_iso_week(date) - isoWeek;
      date.setDate(date.getDate() - diff * 7);
      return date
    }
    var set_iso_week = setISOWeek;

    function setMilliseconds (dirtyDate, dirtyMilliseconds) {
      var date = parse_1(dirtyDate);
      var milliseconds = Number(dirtyMilliseconds);
      date.setMilliseconds(milliseconds);
      return date
    }
    var set_milliseconds = setMilliseconds;

    function setMinutes (dirtyDate, dirtyMinutes) {
      var date = parse_1(dirtyDate);
      var minutes = Number(dirtyMinutes);
      date.setMinutes(minutes);
      return date
    }
    var set_minutes = setMinutes;

    function setMonth (dirtyDate, dirtyMonth) {
      var date = parse_1(dirtyDate);
      var month = Number(dirtyMonth);
      var year = date.getFullYear();
      var day = date.getDate();
      var dateWithDesiredMonth = new Date(0);
      dateWithDesiredMonth.setFullYear(year, month, 15);
      dateWithDesiredMonth.setHours(0, 0, 0, 0);
      var daysInMonth = get_days_in_month(dateWithDesiredMonth);
      date.setMonth(month, Math.min(day, daysInMonth));
      return date
    }
    var set_month = setMonth;

    function setQuarter (dirtyDate, dirtyQuarter) {
      var date = parse_1(dirtyDate);
      var quarter = Number(dirtyQuarter);
      var oldQuarter = Math.floor(date.getMonth() / 3) + 1;
      var diff = quarter - oldQuarter;
      return set_month(date, date.getMonth() + diff * 3)
    }
    var set_quarter = setQuarter;

    function setSeconds (dirtyDate, dirtySeconds) {
      var date = parse_1(dirtyDate);
      var seconds = Number(dirtySeconds);
      date.setSeconds(seconds);
      return date
    }
    var set_seconds = setSeconds;

    function setYear (dirtyDate, dirtyYear) {
      var date = parse_1(dirtyDate);
      var year = Number(dirtyYear);
      date.setFullYear(year);
      return date
    }
    var set_year = setYear;

    function startOfMonth (dirtyDate) {
      var date = parse_1(dirtyDate);
      date.setDate(1);
      date.setHours(0, 0, 0, 0);
      return date
    }
    var start_of_month = startOfMonth;

    function startOfToday () {
      return start_of_day(new Date())
    }
    var start_of_today = startOfToday;

    function startOfTomorrow () {
      var now = new Date();
      var year = now.getFullYear();
      var month = now.getMonth();
      var day = now.getDate();
      var date = new Date(0);
      date.setFullYear(year, month, day + 1);
      date.setHours(0, 0, 0, 0);
      return date
    }
    var start_of_tomorrow = startOfTomorrow;

    function startOfYesterday () {
      var now = new Date();
      var year = now.getFullYear();
      var month = now.getMonth();
      var day = now.getDate();
      var date = new Date(0);
      date.setFullYear(year, month, day - 1);
      date.setHours(0, 0, 0, 0);
      return date
    }
    var start_of_yesterday = startOfYesterday;

    function subDays (dirtyDate, dirtyAmount) {
      var amount = Number(dirtyAmount);
      return add_days(dirtyDate, -amount)
    }
    var sub_days = subDays;

    function subHours (dirtyDate, dirtyAmount) {
      var amount = Number(dirtyAmount);
      return add_hours(dirtyDate, -amount)
    }
    var sub_hours = subHours;

    function subMilliseconds (dirtyDate, dirtyAmount) {
      var amount = Number(dirtyAmount);
      return add_milliseconds(dirtyDate, -amount)
    }
    var sub_milliseconds = subMilliseconds;

    function subMinutes (dirtyDate, dirtyAmount) {
      var amount = Number(dirtyAmount);
      return add_minutes(dirtyDate, -amount)
    }
    var sub_minutes = subMinutes;

    function subMonths (dirtyDate, dirtyAmount) {
      var amount = Number(dirtyAmount);
      return add_months(dirtyDate, -amount)
    }
    var sub_months = subMonths;

    function subQuarters (dirtyDate, dirtyAmount) {
      var amount = Number(dirtyAmount);
      return add_quarters(dirtyDate, -amount)
    }
    var sub_quarters = subQuarters;

    function subSeconds (dirtyDate, dirtyAmount) {
      var amount = Number(dirtyAmount);
      return add_seconds(dirtyDate, -amount)
    }
    var sub_seconds = subSeconds;

    function subWeeks (dirtyDate, dirtyAmount) {
      var amount = Number(dirtyAmount);
      return add_weeks(dirtyDate, -amount)
    }
    var sub_weeks = subWeeks;

    function subYears (dirtyDate, dirtyAmount) {
      var amount = Number(dirtyAmount);
      return add_years(dirtyDate, -amount)
    }
    var sub_years = subYears;

    var dateFns = {
      addDays: add_days,
      addHours: add_hours,
      addISOYears: add_iso_years,
      addMilliseconds: add_milliseconds,
      addMinutes: add_minutes,
      addMonths: add_months,
      addQuarters: add_quarters,
      addSeconds: add_seconds,
      addWeeks: add_weeks,
      addYears: add_years,
      areRangesOverlapping: are_ranges_overlapping,
      closestIndexTo: closest_index_to,
      closestTo: closest_to,
      compareAsc: compare_asc,
      compareDesc: compare_desc,
      differenceInCalendarDays: difference_in_calendar_days,
      differenceInCalendarISOWeeks: difference_in_calendar_iso_weeks,
      differenceInCalendarISOYears: difference_in_calendar_iso_years,
      differenceInCalendarMonths: difference_in_calendar_months,
      differenceInCalendarQuarters: difference_in_calendar_quarters,
      differenceInCalendarWeeks: difference_in_calendar_weeks,
      differenceInCalendarYears: difference_in_calendar_years,
      differenceInDays: difference_in_days,
      differenceInHours: difference_in_hours,
      differenceInISOYears: difference_in_iso_years,
      differenceInMilliseconds: difference_in_milliseconds,
      differenceInMinutes: difference_in_minutes,
      differenceInMonths: difference_in_months,
      differenceInQuarters: difference_in_quarters,
      differenceInSeconds: difference_in_seconds,
      differenceInWeeks: difference_in_weeks,
      differenceInYears: difference_in_years,
      distanceInWords: distance_in_words,
      distanceInWordsStrict: distance_in_words_strict,
      distanceInWordsToNow: distance_in_words_to_now,
      eachDay: each_day,
      endOfDay: end_of_day,
      endOfHour: end_of_hour,
      endOfISOWeek: end_of_iso_week,
      endOfISOYear: end_of_iso_year,
      endOfMinute: end_of_minute,
      endOfMonth: end_of_month,
      endOfQuarter: end_of_quarter,
      endOfSecond: end_of_second,
      endOfToday: end_of_today,
      endOfTomorrow: end_of_tomorrow,
      endOfWeek: end_of_week,
      endOfYear: end_of_year,
      endOfYesterday: end_of_yesterday,
      format: format_1,
      getDate: get_date,
      getDay: get_day,
      getDayOfYear: get_day_of_year,
      getDaysInMonth: get_days_in_month,
      getDaysInYear: get_days_in_year,
      getHours: get_hours,
      getISODay: get_iso_day,
      getISOWeek: get_iso_week,
      getISOWeeksInYear: get_iso_weeks_in_year,
      getISOYear: get_iso_year,
      getMilliseconds: get_milliseconds,
      getMinutes: get_minutes,
      getMonth: get_month,
      getOverlappingDaysInRanges: get_overlapping_days_in_ranges,
      getQuarter: get_quarter,
      getSeconds: get_seconds,
      getTime: get_time,
      getYear: get_year,
      isAfter: is_after,
      isBefore: is_before,
      isDate: is_date,
      isEqual: is_equal,
      isFirstDayOfMonth: is_first_day_of_month,
      isFriday: is_friday,
      isFuture: is_future,
      isLastDayOfMonth: is_last_day_of_month,
      isLeapYear: is_leap_year,
      isMonday: is_monday,
      isPast: is_past,
      isSameDay: is_same_day,
      isSameHour: is_same_hour,
      isSameISOWeek: is_same_iso_week,
      isSameISOYear: is_same_iso_year,
      isSameMinute: is_same_minute,
      isSameMonth: is_same_month,
      isSameQuarter: is_same_quarter,
      isSameSecond: is_same_second,
      isSameWeek: is_same_week,
      isSameYear: is_same_year,
      isSaturday: is_saturday,
      isSunday: is_sunday,
      isThisHour: is_this_hour,
      isThisISOWeek: is_this_iso_week,
      isThisISOYear: is_this_iso_year,
      isThisMinute: is_this_minute,
      isThisMonth: is_this_month,
      isThisQuarter: is_this_quarter,
      isThisSecond: is_this_second,
      isThisWeek: is_this_week,
      isThisYear: is_this_year,
      isThursday: is_thursday,
      isToday: is_today,
      isTomorrow: is_tomorrow,
      isTuesday: is_tuesday,
      isValid: is_valid,
      isWednesday: is_wednesday,
      isWeekend: is_weekend,
      isWithinRange: is_within_range,
      isYesterday: is_yesterday,
      lastDayOfISOWeek: last_day_of_iso_week,
      lastDayOfISOYear: last_day_of_iso_year,
      lastDayOfMonth: last_day_of_month,
      lastDayOfQuarter: last_day_of_quarter,
      lastDayOfWeek: last_day_of_week,
      lastDayOfYear: last_day_of_year,
      max: max_1,
      min: min_1,
      parse: parse_1,
      setDate: set_date,
      setDay: set_day,
      setDayOfYear: set_day_of_year,
      setHours: set_hours,
      setISODay: set_iso_day,
      setISOWeek: set_iso_week,
      setISOYear: set_iso_year,
      setMilliseconds: set_milliseconds,
      setMinutes: set_minutes,
      setMonth: set_month,
      setQuarter: set_quarter,
      setSeconds: set_seconds,
      setYear: set_year,
      startOfDay: start_of_day,
      startOfHour: start_of_hour,
      startOfISOWeek: start_of_iso_week,
      startOfISOYear: start_of_iso_year,
      startOfMinute: start_of_minute,
      startOfMonth: start_of_month,
      startOfQuarter: start_of_quarter,
      startOfSecond: start_of_second,
      startOfToday: start_of_today,
      startOfTomorrow: start_of_tomorrow,
      startOfWeek: start_of_week,
      startOfYear: start_of_year,
      startOfYesterday: start_of_yesterday,
      subDays: sub_days,
      subHours: sub_hours,
      subISOYears: sub_iso_years,
      subMilliseconds: sub_milliseconds,
      subMinutes: sub_minutes,
      subMonths: sub_months,
      subQuarters: sub_quarters,
      subSeconds: sub_seconds,
      subWeeks: sub_weeks,
      subYears: sub_years
    };
    var dateFns_37 = dateFns.endOfDay;
    var dateFns_50 = dateFns.format;
    var dateFns_80 = dateFns.isSameDay;
    var dateFns_118 = dateFns.parse;
    var dateFns_132 = dateFns.startOfDay;

    var Calendar =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _inherits(Calendar, _React$PureComponent);
      function Calendar() {
        var _this;
        _classCallCheck(this, Calendar);
        _this = _possibleConstructorReturn(this, _getPrototypeOf(Calendar).apply(this, arguments));
        _this.state = {
          value: _this.props.selected,
          singleSelectedDate: null
        };
        _this.onChange = function (value) {
          var _assertThisInitialize = _assertThisInitialized(_this),
              props = _assertThisInitialize.props;
          if (props.range) {
            if (Array.isArray(value) && value.length === 2) {
              _this.setState({
                value: value,
                singleSelectedDate: null
              }, function () {
                return props.onChange(value);
              });
            }
          } else {
            if (!Array.isArray(value)) {
              _this.setState({
                value: value,
                singleSelectedDate: null
              }, function () {
                return props.onChange(value);
              });
            }
          }
        };
        _this.onDayClick = function (day) {
          var onClickDay = _this.props.onClickDay;
          _this.setState({
            singleSelectedDate: [dateFns_132(day), dateFns_37(day)]
          });
          if (onClickDay) onClickDay(day);
        };
        _this.getTileContent = function (_ref) {
          var date = _ref.date;
          var dot = _this.props.tileDots.find(function (datum) {
            return !!datum.timeStamp && dateFns_80(date, datum.timeStamp);
          });
          return dot ? React.createElement("div", {
            className: dotWrapper
          }, dot.colors && dot.colors.map(function (color, i) {
            return React.createElement("span", {
              key: i,
              className: dotStyle,
              style: {
                backgroundColor: color
              }
            });
          })) : null;
        };
        _this.getDisabledDays = function (_ref2) {
          var date = _ref2.date;
          var disabledDays = _this.props.disabledDays;
          return disabledDays && disabledDays.length && disabledDays.some(function (_date) {
            return dateFns_80(_date, date);
          }) || false;
        };
        _this.onApply = function () {
          var _assertThisInitialize2 = _assertThisInitialized(_this),
              props = _assertThisInitialize2.props;
          var _this$state = _this.state,
              value = _this$state.value,
              singleSelectedDate = _this$state.singleSelectedDate;
          if (props.range && props.onApply) {
            if (singleSelectedDate) {
              props.onApply(singleSelectedDate);
            } else if (Array.isArray(value)) {
              props.onApply(value);
            }
          } else if (!props.range && props.onApply && !Array.isArray(value)) {
            props.onApply(value);
          }
        };
        return _this;
      }
      _createClass(Calendar, [{
        key: "render",
        value: function render() {
          var _a = this.props,
              range = _a.range,
              selected = _a.selected,
              hideShadow = _a.hideShadow,
              className = _a.className,
              onApply = _a.onApply,
              onClear = _a.onClear,
              rest = __rest(_a, ["range", "selected", "hideShadow", "className", "onApply", "onClear"]);
          return React.createElement("div", {
            className: cx(wrapperStyle, _defineProperty({},
            /*#__PURE__*/
            /*#__PURE__*/
            css({
              boxShadow: "none"
            }), hideShadow), className)
          }, React.createElement(RCalendar, Object.assign({}, rest, {
            onChange: this.onChange,
            selectRange: range,
            view: "month",
            value: selected,
            next2Label: null,
            prev2Label: null,
            tileClassName: tileStyle,
            className: dateStyle,
            showNeighboringMonth: false,
            tileContent: this.getTileContent,
            tileDisabled: this.getDisabledDays,
            onClickDay: this.onDayClick,
            prevLabel: React.createElement("i", {
              style: {
                fontSize: 14
              },
              className: "pi pi-chevron-left"
            }),
            nextLabel: React.createElement("i", {
              style: {
                fontSize: 14
              },
              className: "pi pi-arrow-right"
            })
          })), (onClear || onApply) && React.createElement("div", {
            className: buttonsWrapper
          }, onClear && React.createElement(Button, {
            onClick: onClear,
            type: "secondary"
          }, "Clear"), onApply && React.createElement(Button, {
            onClick: this.onApply
          }, "Apply")));
        }
      }]);
      return Calendar;
    }(React.PureComponent);
    Calendar.defaultProps = {
      onChange: function onChange() {},
      tileDots: []
    };

    var wrapperStyle$1 =
    /*#__PURE__*/
    css({
      position: "relative"
    });
    var dropDownStyle =
    /*#__PURE__*/
    css({
      minWidth: 100,
      boxShadow: constants.boxShadow.xElevated,
      backgroundColor: colors.white.base,
      borderRadius: constants.borderRadius,
      position: "absolute",
      top: "100%",
      zIndex: 999,
      transformOrigin: "top left"
    });

    var OutsideClick =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _inherits(OutsideClick, _React$PureComponent);
      function OutsideClick() {
        var _this;
        _classCallCheck(this, OutsideClick);
        _this = _possibleConstructorReturn(this, _getPrototypeOf(OutsideClick).apply(this, arguments));
        _this.childRef = React.createRef();
        _this.handleClick = function (e) {
          if (_this.childRef.current && !_this.childRef.current.contains(e.target)) {
            _this.props.onOutsideClick();
          }
        };
        _this.addListener = function () {
          document.addEventListener("mousedown", _this.handleClick);
        };
        _this.removeListener = function () {
          document.removeEventListener("mousedown", _this.handleClick);
        };
        return _this;
      }
      _createClass(OutsideClick, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          if (!this.props.disabled) {
            this.addListener();
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.removeListener();
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          if (prevProps.disabled !== this.props.disabled) {
            this.props.disabled ? this.removeListener() : this.addListener();
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props = this.props,
              className = _this$props.className,
              children = _this$props.children;
          return React.createElement("div", {
            ref: this.childRef,
            className: className
          }, children);
        }
      }]);
      return OutsideClick;
    }(React.PureComponent);

    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }

    function _assertThisInitialized$1(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }

    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }
      return target;
    }

    var bugfixes = undefined;
    var applyAnimatedValues = undefined;
    var colorNames = [];
    var requestFrame = function requestFrame(cb) {
      return typeof window !== 'undefined' && window.requestAnimationFrame(cb);
    };
    var interpolation = undefined;
    var now = function now() {
      return Date.now();
    };
    var createAnimatedStyle = undefined;
    var injectApplyAnimatedValues = function injectApplyAnimatedValues(fn, transform) {
      return applyAnimatedValues = {
        fn: fn,
        transform: transform
      };
    };
    var injectColorNames = function injectColorNames(names) {
      return colorNames = names;
    };
    var injectBugfixes = function injectBugfixes(fn) {
      return bugfixes = fn;
    };
    var injectInterpolation = function injectInterpolation(cls) {
      return interpolation = cls;
    };
    var injectCreateAnimatedStyle = function injectCreateAnimatedStyle(factory) {
      return createAnimatedStyle = factory;
    };
    var Animated =
    /*#__PURE__*/
    function () {
      function Animated() {}
      var _proto = Animated.prototype;
      _proto.attach = function attach() {};
      _proto.detach = function detach() {};
      _proto.getValue = function getValue() {};
      _proto.getAnimatedValue = function getAnimatedValue() {
        return this.getValue();
      };
      _proto.addChild = function addChild(child) {};
      _proto.removeChild = function removeChild(child) {};
      _proto.getChildren = function getChildren() {
        return [];
      };
      return Animated;
    }();
    var getValues = function getValues(object) {
      return Object.keys(object).map(function (k) {
        return object[k];
      });
    };
    var AnimatedWithChildren =
    /*#__PURE__*/
    function (_Animated) {
      _inheritsLoose(AnimatedWithChildren, _Animated);
      function AnimatedWithChildren() {
        var _this;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _Animated.call.apply(_Animated, [this].concat(args)) || this;
        _this.children = [];
        _this.getChildren = function () {
          return _this.children;
        };
        _this.getPayload = function (index) {
          if (index === void 0) {
            index = undefined;
          }
          return index !== void 0 && _this.payload ? _this.payload[index] : _this.payload || _assertThisInitialized$1(_assertThisInitialized$1(_this));
        };
        return _this;
      }
      var _proto = AnimatedWithChildren.prototype;
      _proto.addChild = function addChild(child) {
        if (this.children.length === 0) this.attach();
        this.children.push(child);
      };
      _proto.removeChild = function removeChild(child) {
        var index = this.children.indexOf(child);
        this.children.splice(index, 1);
        if (this.children.length === 0) this.detach();
      };
      return AnimatedWithChildren;
    }(Animated);
    var AnimatedArrayWithChildren =
    /*#__PURE__*/
    function (_AnimatedWithChildren) {
      _inheritsLoose(AnimatedArrayWithChildren, _AnimatedWithChildren);
      function AnimatedArrayWithChildren() {
        var _this2;
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        _this2 = _AnimatedWithChildren.call.apply(_AnimatedWithChildren, [this].concat(args)) || this;
        _this2.payload = [];
        _this2.getAnimatedValue = function () {
          return _this2.getValue();
        };
        _this2.attach = function () {
          return _this2.payload.forEach(function (p) {
            return p instanceof Animated && p.addChild(_assertThisInitialized$1(_assertThisInitialized$1(_this2)));
          });
        };
        _this2.detach = function () {
          return _this2.payload.forEach(function (p) {
            return p instanceof Animated && p.removeChild(_assertThisInitialized$1(_assertThisInitialized$1(_this2)));
          });
        };
        return _this2;
      }
      return AnimatedArrayWithChildren;
    }(AnimatedWithChildren);
    var AnimatedObjectWithChildren =
    /*#__PURE__*/
    function (_AnimatedWithChildren2) {
      _inheritsLoose(AnimatedObjectWithChildren, _AnimatedWithChildren2);
      function AnimatedObjectWithChildren() {
        var _this3;
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }
        _this3 = _AnimatedWithChildren2.call.apply(_AnimatedWithChildren2, [this].concat(args)) || this;
        _this3.payload = {};
        _this3.getAnimatedValue = function () {
          return _this3.getValue(true);
        };
        _this3.attach = function () {
          return getValues(_this3.payload).forEach(function (s) {
            return s instanceof Animated && s.addChild(_assertThisInitialized$1(_assertThisInitialized$1(_this3)));
          });
        };
        _this3.detach = function () {
          return getValues(_this3.payload).forEach(function (s) {
            return s instanceof Animated && s.removeChild(_assertThisInitialized$1(_assertThisInitialized$1(_this3)));
          });
        };
        return _this3;
      }
      var _proto2 = AnimatedObjectWithChildren.prototype;
      _proto2.getValue = function getValue(animated) {
        if (animated === void 0) {
          animated = false;
        }
        var payload = {};
        for (var key in this.payload) {
          var value = this.payload[key];
          if (animated && !(value instanceof Animated)) continue;
          payload[key] = value instanceof Animated ? value[animated ? 'getAnimatedValue' : 'getValue']() : value;
        }
        return payload;
      };
      return AnimatedObjectWithChildren;
    }(AnimatedWithChildren);
    var AnimatedStyle =
    /*#__PURE__*/
    function (_AnimatedObjectWithCh) {
      _inheritsLoose(AnimatedStyle, _AnimatedObjectWithCh);
      function AnimatedStyle(style) {
        var _this;
        _this = _AnimatedObjectWithCh.call(this) || this;
        style = style || {};
        if (style.transform && !(style.transform instanceof Animated)) style = applyAnimatedValues.transform(style);
        _this.payload = style;
        return _this;
      }
      return AnimatedStyle;
    }(AnimatedObjectWithChildren);
    var colors$1 = {
      transparent: 0x00000000,
      aliceblue: 0xf0f8ffff,
      antiquewhite: 0xfaebd7ff,
      aqua: 0x00ffffff,
      aquamarine: 0x7fffd4ff,
      azure: 0xf0ffffff,
      beige: 0xf5f5dcff,
      bisque: 0xffe4c4ff,
      black: 0x000000ff,
      blanchedalmond: 0xffebcdff,
      blue: 0x0000ffff,
      blueviolet: 0x8a2be2ff,
      brown: 0xa52a2aff,
      burlywood: 0xdeb887ff,
      burntsienna: 0xea7e5dff,
      cadetblue: 0x5f9ea0ff,
      chartreuse: 0x7fff00ff,
      chocolate: 0xd2691eff,
      coral: 0xff7f50ff,
      cornflowerblue: 0x6495edff,
      cornsilk: 0xfff8dcff,
      crimson: 0xdc143cff,
      cyan: 0x00ffffff,
      darkblue: 0x00008bff,
      darkcyan: 0x008b8bff,
      darkgoldenrod: 0xb8860bff,
      darkgray: 0xa9a9a9ff,
      darkgreen: 0x006400ff,
      darkgrey: 0xa9a9a9ff,
      darkkhaki: 0xbdb76bff,
      darkmagenta: 0x8b008bff,
      darkolivegreen: 0x556b2fff,
      darkorange: 0xff8c00ff,
      darkorchid: 0x9932ccff,
      darkred: 0x8b0000ff,
      darksalmon: 0xe9967aff,
      darkseagreen: 0x8fbc8fff,
      darkslateblue: 0x483d8bff,
      darkslategray: 0x2f4f4fff,
      darkslategrey: 0x2f4f4fff,
      darkturquoise: 0x00ced1ff,
      darkviolet: 0x9400d3ff,
      deeppink: 0xff1493ff,
      deepskyblue: 0x00bfffff,
      dimgray: 0x696969ff,
      dimgrey: 0x696969ff,
      dodgerblue: 0x1e90ffff,
      firebrick: 0xb22222ff,
      floralwhite: 0xfffaf0ff,
      forestgreen: 0x228b22ff,
      fuchsia: 0xff00ffff,
      gainsboro: 0xdcdcdcff,
      ghostwhite: 0xf8f8ffff,
      gold: 0xffd700ff,
      goldenrod: 0xdaa520ff,
      gray: 0x808080ff,
      green: 0x008000ff,
      greenyellow: 0xadff2fff,
      grey: 0x808080ff,
      honeydew: 0xf0fff0ff,
      hotpink: 0xff69b4ff,
      indianred: 0xcd5c5cff,
      indigo: 0x4b0082ff,
      ivory: 0xfffff0ff,
      khaki: 0xf0e68cff,
      lavender: 0xe6e6faff,
      lavenderblush: 0xfff0f5ff,
      lawngreen: 0x7cfc00ff,
      lemonchiffon: 0xfffacdff,
      lightblue: 0xadd8e6ff,
      lightcoral: 0xf08080ff,
      lightcyan: 0xe0ffffff,
      lightgoldenrodyellow: 0xfafad2ff,
      lightgray: 0xd3d3d3ff,
      lightgreen: 0x90ee90ff,
      lightgrey: 0xd3d3d3ff,
      lightpink: 0xffb6c1ff,
      lightsalmon: 0xffa07aff,
      lightseagreen: 0x20b2aaff,
      lightskyblue: 0x87cefaff,
      lightslategray: 0x778899ff,
      lightslategrey: 0x778899ff,
      lightsteelblue: 0xb0c4deff,
      lightyellow: 0xffffe0ff,
      lime: 0x00ff00ff,
      limegreen: 0x32cd32ff,
      linen: 0xfaf0e6ff,
      magenta: 0xff00ffff,
      maroon: 0x800000ff,
      mediumaquamarine: 0x66cdaaff,
      mediumblue: 0x0000cdff,
      mediumorchid: 0xba55d3ff,
      mediumpurple: 0x9370dbff,
      mediumseagreen: 0x3cb371ff,
      mediumslateblue: 0x7b68eeff,
      mediumspringgreen: 0x00fa9aff,
      mediumturquoise: 0x48d1ccff,
      mediumvioletred: 0xc71585ff,
      midnightblue: 0x191970ff,
      mintcream: 0xf5fffaff,
      mistyrose: 0xffe4e1ff,
      moccasin: 0xffe4b5ff,
      navajowhite: 0xffdeadff,
      navy: 0x000080ff,
      oldlace: 0xfdf5e6ff,
      olive: 0x808000ff,
      olivedrab: 0x6b8e23ff,
      orange: 0xffa500ff,
      orangered: 0xff4500ff,
      orchid: 0xda70d6ff,
      palegoldenrod: 0xeee8aaff,
      palegreen: 0x98fb98ff,
      paleturquoise: 0xafeeeeff,
      palevioletred: 0xdb7093ff,
      papayawhip: 0xffefd5ff,
      peachpuff: 0xffdab9ff,
      peru: 0xcd853fff,
      pink: 0xffc0cbff,
      plum: 0xdda0ddff,
      powderblue: 0xb0e0e6ff,
      purple: 0x800080ff,
      rebeccapurple: 0x663399ff,
      red: 0xff0000ff,
      rosybrown: 0xbc8f8fff,
      royalblue: 0x4169e1ff,
      saddlebrown: 0x8b4513ff,
      salmon: 0xfa8072ff,
      sandybrown: 0xf4a460ff,
      seagreen: 0x2e8b57ff,
      seashell: 0xfff5eeff,
      sienna: 0xa0522dff,
      silver: 0xc0c0c0ff,
      skyblue: 0x87ceebff,
      slateblue: 0x6a5acdff,
      slategray: 0x708090ff,
      slategrey: 0x708090ff,
      snow: 0xfffafaff,
      springgreen: 0x00ff7fff,
      steelblue: 0x4682b4ff,
      tan: 0xd2b48cff,
      teal: 0x008080ff,
      thistle: 0xd8bfd8ff,
      tomato: 0xff6347ff,
      turquoise: 0x40e0d0ff,
      violet: 0xee82eeff,
      wheat: 0xf5deb3ff,
      white: 0xffffffff,
      whitesmoke: 0xf5f5f5ff,
      yellow: 0xffff00ff,
      yellowgreen: 0x9acd32ff
    };
    var Interpolation =
    /*#__PURE__*/
    function () {
      function Interpolation() {}
      Interpolation.create = function create(config, output, extra) {
        if (typeof config === 'function') return config;else if (interpolation && config.output && typeof config.output[0] === 'string') return interpolation(config);else if (Array.isArray(config)) return Interpolation.create({
          range: config,
          output: output,
          extrapolate: extra || 'extend'
        });
        var outputRange = config.output;
        var inputRange = config.range || [0, 1];
        var easing = config.easing || function (t) {
          return t;
        };
        var extrapolateLeft = 'extend';
        var map = config.map;
        if (config.extrapolateLeft !== undefined) extrapolateLeft = config.extrapolateLeft;else if (config.extrapolate !== undefined) extrapolateLeft = config.extrapolate;
        var extrapolateRight = 'extend';
        if (config.extrapolateRight !== undefined) extrapolateRight = config.extrapolateRight;else if (config.extrapolate !== undefined) extrapolateRight = config.extrapolate;
        return function (input) {
          var range = findRange(input, inputRange);
          return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, map);
        };
      };
      return Interpolation;
    }();
    function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
      var result = map ? map(input) : input;
      if (result < inputMin) {
        if (extrapolateLeft === 'identity') return result;else if (extrapolateLeft === 'clamp') result = inputMin;
      }
      if (result > inputMax) {
        if (extrapolateRight === 'identity') return result;else if (extrapolateRight === 'clamp') result = inputMax;
      }
      if (outputMin === outputMax) return outputMin;
      if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax;
      if (inputMin === -Infinity) result = -result;else if (inputMax === Infinity) result = result - inputMin;else result = (result - inputMin) / (inputMax - inputMin);
      result = easing(result);
      if (outputMin === -Infinity) result = -result;else if (outputMax === Infinity) result = result + outputMin;else result = result * (outputMax - outputMin) + outputMin;
      return result;
    }
    function findRange(input, inputRange) {
      for (var i = 1; i < inputRange.length - 1; ++i) {
        if (inputRange[i] >= input) break;
      }
      return i - 1;
    }
    var NUMBER = '[-+]?\\d*\\.?\\d+';
    var PERCENTAGE = NUMBER + '%';
    function call() {
      return '\\(\\s*(' + Array.prototype.slice.call(arguments).join(')\\s*,\\s*(') + ')\\s*\\)';
    }
    var rgb = new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER));
    var rgba = new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER));
    var hsl = new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE));
    var hsla = new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
    var hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
    var hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
    var hex6 = /^#([0-9a-fA-F]{6})$/;
    var hex8 = /^#([0-9a-fA-F]{8})$/;
    function normalizeColor(color) {
      var match;
      if (typeof color === 'number') {
        return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
      }
      if (match = hex6.exec(color)) return parseInt(match[1] + 'ff', 16) >>> 0;
      if (colors$1.hasOwnProperty(color)) return colors$1[color];
      if (match = rgb.exec(color)) {
        return (parse255(match[1]) << 24 |
        parse255(match[2]) << 16 |
        parse255(match[3]) << 8 |
        0x000000ff) >>>
        0;
      }
      if (match = rgba.exec(color)) {
        return (parse255(match[1]) << 24 |
        parse255(match[2]) << 16 |
        parse255(match[3]) << 8 |
        parse1(match[4])) >>>
        0;
      }
      if (match = hex3.exec(color)) {
        return parseInt(match[1] + match[1] +
        match[2] + match[2] +
        match[3] + match[3] +
        'ff',
        16) >>> 0;
      }
      if (match = hex8.exec(color)) return parseInt(match[1], 16) >>> 0;
      if (match = hex4.exec(color)) {
        return parseInt(match[1] + match[1] +
        match[2] + match[2] +
        match[3] + match[3] +
        match[4] + match[4],
        16) >>> 0;
      }
      if (match = hsl.exec(color)) {
        return (hslToRgb(parse360(match[1]),
        parsePercentage(match[2]),
        parsePercentage(match[3])
        ) | 0x000000ff) >>>
        0;
      }
      if (match = hsla.exec(color)) {
        return (hslToRgb(parse360(match[1]),
        parsePercentage(match[2]),
        parsePercentage(match[3])
        ) | parse1(match[4])) >>>
        0;
      }
      return null;
    }
    function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    }
    function hslToRgb(h, s, l) {
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      var r = hue2rgb(p, q, h + 1 / 3);
      var g = hue2rgb(p, q, h);
      var b = hue2rgb(p, q, h - 1 / 3);
      return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
    }
    function parse255(str) {
      var int = parseInt(str, 10);
      if (int < 0) return 0;
      if (int > 255) return 255;
      return int;
    }
    function parse360(str) {
      var int = parseFloat(str);
      return (int % 360 + 360) % 360 / 360;
    }
    function parse1(str) {
      var num = parseFloat(str);
      if (num < 0) return 0;
      if (num > 1) return 255;
      return Math.round(num * 255);
    }
    function parsePercentage(str) {
      var int = parseFloat(str);
      if (int < 0) return 0;
      if (int > 100) return 1;
      return int / 100;
    }
    function colorToRgba(input) {
      var int32Color = normalizeColor(input);
      if (int32Color === null) return input;
      int32Color = int32Color || 0;
      var r = (int32Color & 0xff000000) >>> 24;
      var g = (int32Color & 0x00ff0000) >>> 16;
      var b = (int32Color & 0x0000ff00) >>> 8;
      var a = (int32Color & 0x000000ff) / 255;
      return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
    }
    var stringShapeRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
    var colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
    var colorNamesRegex = new RegExp("(" + Object.keys(colors$1).join('|') + ")", 'g');
    function createInterpolation(config) {
      var outputRange = config.output.map(function (rangeValue) {
        return rangeValue.replace(colorRegex, colorToRgba);
      }).map(function (rangeValue) {
        return rangeValue.replace(colorNamesRegex, colorToRgba);
      });
      var outputRanges = outputRange[0].match(stringShapeRegex).map(function () {
        return [];
      });
      outputRange.forEach(function (value) {
        value.match(stringShapeRegex).forEach(function (number, i) {
          return outputRanges[i].push(+number);
        });
      });
      var interpolations = outputRange[0].match(stringShapeRegex).map(function (value, i) {
        return Interpolation.create(_extends({}, config, {
          output: outputRanges[i]
        }));
      });
      return function (input) {
        var i = 0;
        return outputRange[0]
        .replace(stringShapeRegex, function () {
          return interpolations[i++](input);
        })
        .replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, function (_, p1, p2, p3, p4) {
          return "rgba(" + Math.round(p1) + ", " + Math.round(p2) + ", " + Math.round(p3) + ", " + p4 + ")";
        });
      };
    }
    var AnimatedInterpolation =
    /*#__PURE__*/
    function (_AnimatedArrayWithChi) {
      _inheritsLoose(AnimatedInterpolation, _AnimatedArrayWithChi);
      function AnimatedInterpolation(parents, _config, _arg) {
        var _this;
        _this = _AnimatedArrayWithChi.call(this) || this;
        _this.getValue = function () {
          var _this2;
          return (_this2 = _this).calc.apply(_this2, _this.payload.map(function (value) {
            return value.getValue();
          }));
        };
        _this.updateConfig = function (config, arg) {
          return _this.calc = Interpolation.create(config, arg);
        };
        _this.interpolate = function (config, arg) {
          return new AnimatedInterpolation(_assertThisInitialized$1(_assertThisInitialized$1(_this)), config, arg);
        };
        _this.payload =
        parents instanceof AnimatedArrayWithChildren && !parents.updateConfig ? parents.payload : Array.isArray(parents) ? parents : [parents];
        _this.calc = Interpolation.create(_config, _arg);
        return _this;
      }
      return AnimatedInterpolation;
    }(AnimatedArrayWithChildren);
    function findAnimatedStyles(node, styles) {
      if (typeof node.update === 'function') styles.add(node);else node.getChildren().forEach(function (child) {
        return findAnimatedStyles(child, styles);
      });
    }
    var AnimatedValue =
    /*#__PURE__*/
    function (_AnimatedWithChildren) {
      _inheritsLoose(AnimatedValue, _AnimatedWithChildren);
      function AnimatedValue(_value) {
        var _this;
        _this = _AnimatedWithChildren.call(this) || this;
        _this.setValue = function (value, flush) {
          if (flush === void 0) {
            flush = true;
          }
          _this.value = value;
          if (flush) _this.flush();
        };
        _this.getValue = function () {
          return _this.value;
        };
        _this.updateStyles = function () {
          return findAnimatedStyles(_assertThisInitialized$1(_assertThisInitialized$1(_this)), _this.animatedStyles);
        };
        _this.updateValue = function (value) {
          return _this.flush(_this.value = value);
        };
        _this.interpolate = function (config, arg) {
          return new AnimatedInterpolation(_assertThisInitialized$1(_assertThisInitialized$1(_this)), config, arg);
        };
        _this.value = _value;
        _this.animatedStyles = new Set();
        _this.done = false;
        _this.startPosition = _value;
        _this.lastPosition = _value;
        _this.lastVelocity = undefined;
        _this.lastTime = undefined;
        _this.controller = undefined;
        return _this;
      }
      var _proto = AnimatedValue.prototype;
      _proto.flush = function flush() {
        if (this.animatedStyles.size === 0) this.updateStyles();
        this.animatedStyles.forEach(function (animatedStyle) {
          return animatedStyle.update();
        });
      };
      _proto.prepare = function prepare(controller) {
        if (this.controller === undefined) this.controller = controller;
        if (this.controller === controller) {
          this.startPosition = this.value;
          this.lastPosition = this.value;
          this.lastVelocity = controller.isActive ? this.lastVelocity : undefined;
          this.lastTime = controller.isActive ? this.lastTime : undefined;
          this.done = false;
          this.animatedStyles.clear();
        }
      };
      return AnimatedValue;
    }(AnimatedWithChildren);
    var AnimatedArray =
    /*#__PURE__*/
    function (_AnimatedArrayWithChi) {
      _inheritsLoose(AnimatedArray, _AnimatedArrayWithChi);
      function AnimatedArray(array) {
        var _this;
        _this = _AnimatedArrayWithChi.call(this) || this;
        _this.setValue = function (value, flush) {
          if (flush === void 0) {
            flush = true;
          }
          if (Array.isArray(value)) {
            if (value.length === _this.payload.length) value.forEach(function (v, i) {
              return _this.payload[i].setValue(v, flush);
            });
          } else _this.payload.forEach(function (v, i) {
            return _this.payload[i].setValue(value, flush);
          });
        };
        _this.getValue = function () {
          return _this.payload.map(function (v) {
            return v.getValue();
          });
        };
        _this.interpolate = function (config, arg) {
          return new AnimatedInterpolation(_assertThisInitialized$1(_assertThisInitialized$1(_this)), config, arg);
        };
        _this.payload = array.map(function (n) {
          return new AnimatedValue(n);
        });
        return _this;
      }
      return AnimatedArray;
    }(AnimatedArrayWithChildren);
    function withDefault(value, defaultValue) {
      return value === undefined || value === null ? defaultValue : value;
    }
    function toArray(a) {
      return a !== void 0 ? Array.isArray(a) ? a : [a] : [];
    }
    function shallowEqual(a, b) {
      if (typeof a !== typeof b) return false;
      if (typeof a === 'string' || typeof a === 'number') return a === b;
      var i;
      for (i in a) {
        if (!(i in b)) return false;
      }
      for (i in b) {
        if (a[i] !== b[i]) return false;
      }
      return i === void 0 ? a === b : true;
    }
    function callProp(obj) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      return typeof obj === 'function' ? obj.apply(void 0, args) : obj;
    }
    function getValues$1(object) {
      return Object.keys(object).map(function (k) {
        return object[k];
      });
    }
    function getForwardProps(props) {
      var to = props.to,
          from = props.from,
          config = props.config,
          native = props.native,
          onStart = props.onStart,
          onRest = props.onRest,
          onFrame = props.onFrame,
          children = props.children,
          reset = props.reset,
          reverse = props.reverse,
          force = props.force,
          immediate = props.immediate,
          impl = props.impl,
          inject = props.inject,
          delay = props.delay,
          attach = props.attach,
          destroyed = props.destroyed,
          interpolateTo = props.interpolateTo,
          autoStart = props.autoStart,
          ref = props.ref,
          forward = _objectWithoutPropertiesLoose(props, ["to", "from", "config", "native", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "impl", "inject", "delay", "attach", "destroyed", "interpolateTo", "autoStart", "ref"]);
      return forward;
    }
    function interpolateTo(props) {
      var forward = getForwardProps(props);
      var rest = Object.keys(props).reduce(function (a, k) {
        var _extends2;
        return forward[k] !== void 0 ? a : _extends({}, a, (_extends2 = {}, _extends2[k] = props[k], _extends2));
      }, {});
      return _extends({
        to: forward
      }, rest);
    }
    function convertToAnimatedValue(acc, _ref) {
      var _extends3;
      var name = _ref[0],
          value = _ref[1];
      return _extends({}, acc, (_extends3 = {}, _extends3[name] = new (Array.isArray(value) ? AnimatedArray : AnimatedValue)(value), _extends3));
    }
    function convertValues(props) {
      var from = props.from,
          to = props.to,
          native = props.native;
      var allProps = Object.entries(_extends({}, from, to));
      return native ? allProps.reduce(convertToAnimatedValue, {}) : _extends({}, from, to);
    }
    function handleRef(ref, forward) {
      if (forward) {
        if (typeof forward === 'function') forward(ref);else if (typeof forward === 'object') {
          forward.current = ref;
        }
      }
      return ref;
    }
    var check = function check(value) {
      return value === 'auto';
    };
    var overwrite = function overwrite(width, height) {
      return function (acc, _ref) {
        var _extends2;
        var name = _ref[0],
            value = _ref[1];
        return _extends({}, acc, (_extends2 = {}, _extends2[name] = value === 'auto' ? ~name.indexOf('height') ? height : width : value, _extends2));
      };
    };
    function fixAuto(props, callback) {
      var from = props.from,
          to = props.to,
          children = props.children;
      if (!(getValues$1(to).some(check) || getValues$1(from).some(check))) return;
      var element = children(convertValues(props));
      if (!element) return;
      if (Array.isArray(element)) element = {
        type: 'div',
        props: {
          children: element
        }
      };
      var elementStyles = element.props.style;
      return React__default.createElement(element.type, _extends({
        key: element.key ? element.key : undefined
      }, element.props, {
        style: _extends({}, elementStyles, {
          position: 'absolute',
          visibility: 'hidden'
        }),
        ref: function ref(_ref2) {
          if (_ref2) {
            var node = ReactDOM__default.findDOMNode(_ref2);
            var width, height;
            var cs = getComputedStyle(node);
            if (cs.boxSizing === 'border-box') {
              width = node.offsetWidth;
              height = node.offsetHeight;
            } else {
              var paddingX = parseFloat(cs.paddingLeft || 0) + parseFloat(cs.paddingRight || 0);
              var paddingY = parseFloat(cs.paddingTop || 0) + parseFloat(cs.paddingBottom || 0);
              var borderX = parseFloat(cs.borderLeftWidth || 0) + parseFloat(cs.borderRightWidth || 0);
              var borderY = parseFloat(cs.borderTopWidth || 0) + parseFloat(cs.borderBottomWidth || 0);
              width = node.offsetWidth - paddingX - borderX;
              height = node.offsetHeight - paddingY - borderY;
            }
            var convert = overwrite(width, height);
            callback(_extends({}, props, {
              from: Object.entries(from).reduce(convert, from),
              to: Object.entries(to).reduce(convert, to)
            }));
          }
        }
      }));
    }
    var isUnitlessNumber = {
      animationIterationCount: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    };
    var prefixKey = function prefixKey(prefix, key) {
      return prefix + key.charAt(0).toUpperCase() + key.substring(1);
    };
    var prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
    isUnitlessNumber = Object.keys(isUnitlessNumber).reduce(function (acc, prop) {
      prefixes.forEach(function (prefix) {
        return acc[prefixKey(prefix, prop)] = acc[prop];
      });
      return acc;
    }, isUnitlessNumber);
    function dangerousStyleValue(name, value, isCustomProperty) {
      if (value == null || typeof value === 'boolean' || value === '') return '';
      if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + 'px';
      return ('' + value).trim();
    }
    var attributeCache = {};
    injectCreateAnimatedStyle(function (style) {
      return new AnimatedStyle(style);
    });
    injectInterpolation(createInterpolation);
    injectColorNames(colors$1);
    injectBugfixes(fixAuto);
    injectApplyAnimatedValues(function (instance, props) {
      if (instance.nodeType && instance.setAttribute !== undefined) {
        var style = props.style,
            children = props.children,
            scrollTop = props.scrollTop,
            scrollLeft = props.scrollLeft,
            attributes = _objectWithoutPropertiesLoose(props, ["style", "children", "scrollTop", "scrollLeft"]);
        if (scrollTop !== void 0) instance.scrollTop = scrollTop;
        if (scrollLeft !== void 0) instance.scrollLeft = scrollLeft;
        if (children !== void 0) instance.textContent = children;
        for (var styleName in style) {
          if (!style.hasOwnProperty(styleName)) continue;
          var isCustomProperty = styleName.indexOf('--') === 0;
          var styleValue = dangerousStyleValue(styleName, style[styleName], isCustomProperty);
          if (styleName === 'float') styleName = 'cssFloat';
          if (isCustomProperty) instance.style.setProperty(styleName, styleValue);else instance.style[styleName] = styleValue;
        }
        for (var name in attributes) {
          var dashCase = attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, function (n) {
            return '-' + n.toLowerCase();
          }));
          if (typeof instance.getAttribute(dashCase) !== 'undefined') instance.setAttribute(dashCase, attributes[name]);
        }
      } else return false;
    }, function (style) {
      return style;
    });
    var active = false;
    var controllers = new Set();
    var frameLoop = function frameLoop() {
      var time = now();
      for (var _iterator = controllers, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;
        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }
        var controller = _ref;
        var isDone = true;
        var noChange = true;
        for (var configIdx = 0; configIdx < controller.configs.length; configIdx++) {
          var config = controller.configs[configIdx];
          var endOfAnimation = void 0,
              lastTime = void 0;
          for (var valIdx = 0; valIdx < config.animatedValues.length; valIdx++) {
            var animation = config.animatedValues[valIdx];
            if (animation.done) continue;
            var from = config.fromValues[valIdx];
            var to = config.toValues[valIdx];
            var position = animation.lastPosition;
            var isAnimated = to instanceof Animated;
            var _velocity = Array.isArray(config.initialVelocity) ? config.initialVelocity[valIdx] : config.initialVelocity;
            if (isAnimated) to = to.getValue();
            if (config.immediate || !isAnimated && !config.decay && from === to) {
              animation.updateValue(to);
              animation.done = true;
              continue;
            }
            if (config.delay && time - controller.startTime < config.delay) {
              isDone = false;
              continue;
            }
            noChange = false;
            if (typeof from === 'string' || typeof to === 'string') {
              animation.updateValue(to);
              animation.done = true;
              continue;
            }
            if (config.duration !== void 0) {
              position = from + config.easing((time - controller.startTime - config.delay) / config.duration) * (to - from);
              endOfAnimation = time >= controller.startTime + config.delay + config.duration;
            } else if (config.decay) {
              position = from + _velocity / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (time - controller.startTime)));
              endOfAnimation = Math.abs(animation.lastPosition - position) < 0.1;
              if (endOfAnimation) to = position;
            } else {
              lastTime = animation.lastTime !== void 0 ? animation.lastTime : time;
              _velocity = animation.lastVelocity !== void 0 ? animation.lastVelocity : config.initialVelocity;
              if (time > lastTime + 64) lastTime = time;
              var numSteps = Math.floor(time - lastTime);
              for (var i = 0; i < numSteps; ++i) {
                var force = -config.tension * (position - to);
                var damping = -config.friction * _velocity;
                var acceleration = (force + damping) / config.mass;
                _velocity = _velocity + acceleration * 1 / 1000;
                position = position + _velocity * 1 / 1000;
              }
              var isOvershooting = config.clamp && config.tension !== 0 ? from < to ? position > to : position < to : false;
              var isVelocity = Math.abs(_velocity) <= config.precision;
              var isDisplacement = config.tension !== 0 ? Math.abs(to - position) <= config.precision : true;
              endOfAnimation = isOvershooting || isVelocity && isDisplacement;
              animation.lastVelocity = _velocity;
              animation.lastTime = time;
            }
            if (isAnimated && !config.toValues[valIdx].done) endOfAnimation = false;
            if (endOfAnimation) {
              if (animation.value !== to) position = to;
              animation.done = true;
            } else isDone = false;
            animation.updateValue(position);
            animation.lastPosition = position;
          }
          if (controller.props.onFrame || !controller.props.native) controller.animatedProps[config.name] = config.interpolation.getValue();
        }
        if (controller.props.onFrame || !controller.props.native) {
          if (!controller.props.native && controller.onUpdate) controller.onUpdate();
          if (controller.props.onFrame) controller.props.onFrame(controller.animatedProps);
        }
        if (isDone) {
          controllers.delete(controller);
          controller.debouncedOnEnd({
            finished: true,
            noChange: noChange
          });
        }
      }
      if (controllers.size) requestFrame(frameLoop);else active = false;
    };
    var addController = function addController(controller) {
      if (!controllers.has(controller)) {
        controllers.add(controller);
        if (!active) requestFrame(frameLoop);
        active = true;
      }
    };
    var removeController = function removeController(controller) {
      if (controllers.has(controller)) {
        controllers.delete(controller);
      }
    };
    var Controller =
    /*#__PURE__*/
    function () {
      function Controller(props, config) {
        var _this = this;
        if (config === void 0) {
          config = {
            native: true,
            interpolateTo: true,
            autoStart: true
          };
        }
        this.getValues = function () {
          return _this.props.native ? _this.interpolations : _this.animatedProps;
        };
        this.dependents = new Set();
        this.isActive = false;
        this.hasChanged = false;
        this.props = {};
        this.merged = {};
        this.animations = {};
        this.interpolations = {};
        this.animatedProps = {};
        this.configs = [];
        this.frame = undefined;
        this.startTime = undefined;
        this.lastTime = undefined;
        this.update(_extends({}, props, config));
      }
      var _proto = Controller.prototype;
      _proto.update = function update(props) {
        var _this2 = this;
        this.props = _extends({}, this.props, props);
        var _ref = this.props.interpolateTo ? interpolateTo(this.props) : this.props,
            _ref$from = _ref.from,
            from = _ref$from === void 0 ? {} : _ref$from,
            _ref$to = _ref.to,
            to = _ref$to === void 0 ? {} : _ref$to,
            _ref$config = _ref.config,
            config = _ref$config === void 0 ? {} : _ref$config,
            _ref$delay = _ref.delay,
            delay = _ref$delay === void 0 ? 0 : _ref$delay,
            reverse = _ref.reverse,
            attach = _ref.attach,
            reset = _ref.reset,
            immediate = _ref.immediate,
            autoStart = _ref.autoStart,
            ref = _ref.ref;
        if (reverse) {
          var _ref2 = [to, from];
          from = _ref2[0];
          to = _ref2[1];
        }
        this.hasChanged = false;
        var target = attach && attach(this);
        var extra = reset ? {} : this.merged;
        this.merged = _extends({}, from, extra, to);
        this.animations = Object.entries(this.merged).reduce(function (acc, _ref3, i) {
          var name = _ref3[0],
              value = _ref3[1];
          var entry = !reset && acc[name] || {};
          var isNumber = typeof value === 'number';
          var isString = typeof value === 'string' && !value.startsWith('#') && !/\d/.test(value) && !colorNames[value];
          var isArray = !isNumber && !isString && Array.isArray(value);
          var fromValue = from[name] !== undefined ? from[name] : value;
          var toValue = isNumber || isArray ? value : isString ? value : 1;
          var toConfig = callProp(config, name);
          if (target) toValue = target.animations[name].parent;
          if (toConfig.decay !== void 0 || !shallowEqual(entry.changes, value)) {
            var _extends2;
            _this2.hasChanged = true;
            var parent, interpolation$$1;
            if (isNumber || isString) parent = interpolation$$1 = entry.parent || new AnimatedValue(fromValue);else if (isArray) parent = interpolation$$1 = entry.parent || new AnimatedArray(fromValue);else {
              var prev = entry.interpolation && entry.interpolation.calc(entry.parent.value);
              if (entry.parent) {
                parent = entry.parent;
                parent.setValue(0, false);
              } else parent = new AnimatedValue(0);
              var range = {
                output: [prev !== void 0 ? prev : fromValue, value]
              };
              if (entry.interpolation) {
                interpolation$$1 = entry.interpolation;
                entry.interpolation.updateConfig(range);
              } else interpolation$$1 = parent.interpolate(range);
            }
            if (callProp(immediate, name)) parent.setValue(value, false);
            var animatedValues = toArray(parent.getPayload());
            animatedValues.forEach(function (value) {
              return value.prepare(_this2);
            });
            return _extends({}, acc, (_extends2 = {}, _extends2[name] = _extends({}, entry, {
              name: name,
              parent: parent,
              interpolation: interpolation$$1,
              animatedValues: animatedValues,
              changes: value,
              fromValues: toArray(parent.getValue()),
              toValues: toArray(target ? toValue.getPayload() : toValue),
              immediate: callProp(immediate, name),
              delay: withDefault(toConfig.delay, delay || 0),
              initialVelocity: withDefault(toConfig.velocity, 0),
              clamp: withDefault(toConfig.clamp, false),
              precision: withDefault(toConfig.precision, 0.01),
              tension: withDefault(toConfig.tension, 170),
              friction: withDefault(toConfig.friction, 26),
              mass: withDefault(toConfig.mass, 1),
              duration: toConfig.duration,
              easing: withDefault(toConfig.easing, function (t) {
                return t;
              }),
              decay: toConfig.decay
            }), _extends2));
          } else return acc;
        }, this.animations);
        if (this.hasChanged) {
          this.configs = getValues$1(this.animations);
          this.animatedProps = {};
          this.interpolations = {};
          for (var key in this.animations) {
            this.interpolations[key] = this.animations[key].interpolation;
            this.animatedProps[key] = this.animations[key].interpolation.getValue();
          }
        }
        for (var _len = arguments.length, start = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          start[_key - 1] = arguments[_key];
        }
        if (!ref && (autoStart || start.length)) this.start.apply(this, start);
        var onEnd = start[0],
            onUpdate = start[1];
        this.onEnd = typeof onEnd === 'function' && onEnd;
        this.onUpdate = onUpdate;
        return this.getValues();
      };
      _proto.start = function start(onEnd, onUpdate) {
        var _this3 = this;
        this.startTime = now();
        if (this.isActive) this.stop();
        this.isActive = true;
        this.onEnd = typeof onEnd === 'function' && onEnd;
        this.onUpdate = onUpdate;
        if (this.props.onStart) this.props.onStart();
        addController(this);
        return new Promise(function (res) {
          return _this3.resolve = res;
        });
      };
      _proto.stop = function stop(finished) {
        if (finished === void 0) {
          finished = false;
        }
        if (finished) getValues$1(this.animations).forEach(function (a) {
          return a.changes = undefined;
        });
        this.debouncedOnEnd({
          finished: finished
        });
      };
      _proto.destroy = function destroy() {
        removeController(this);
        this.props = {};
        this.merged = {};
        this.animations = {};
        this.interpolations = {};
        this.animatedProps = {};
        this.configs = [];
      };
      _proto.debouncedOnEnd = function debouncedOnEnd(result) {
        removeController(this);
        this.isActive = false;
        var onEnd = this.onEnd;
        this.onEnd = null;
        if (onEnd) onEnd(result);
        if (this.resolve) this.resolve();
        this.resolve = null;
      };
      return Controller;
    }();
    var AnimatedProps =
    /*#__PURE__*/
    function (_AnimatedObjectWithCh) {
      _inheritsLoose(AnimatedProps, _AnimatedObjectWithCh);
      function AnimatedProps(props, callback) {
        var _this;
        _this = _AnimatedObjectWithCh.call(this) || this;
        if (props.style) props = _extends({}, props, {
          style: createAnimatedStyle(props.style)
        });
        _this.payload = props;
        _this.update = callback;
        _this.attach();
        return _this;
      }
      return AnimatedProps;
    }(AnimatedObjectWithChildren);
    function createAnimatedComponent(Component) {
      var AnimatedComponent =
      /*#__PURE__*/
      function (_React$Component) {
        _inheritsLoose(AnimatedComponent, _React$Component);
        function AnimatedComponent(props) {
          var _this;
          _this = _React$Component.call(this) || this;
          _this.callback = function () {
            if (_this.node) {
              var didUpdate = applyAnimatedValues.fn(_this.node, _this.propsAnimated.getAnimatedValue(), _assertThisInitialized$1(_assertThisInitialized$1(_this)));
              if (didUpdate === false) _this.forceUpdate();
            }
          };
          _this.attachProps(props);
          return _this;
        }
        var _proto = AnimatedComponent.prototype;
        _proto.componentWillUnmount = function componentWillUnmount() {
          this.propsAnimated && this.propsAnimated.detach();
        };
        _proto.setNativeProps = function setNativeProps(props) {
          var didUpdate = applyAnimatedValues.fn(this.node, props, this);
          if (didUpdate === false) this.forceUpdate();
        }
        ;
        _proto.attachProps = function attachProps(_ref) {
          var forwardRef = _ref.forwardRef,
              nextProps = _objectWithoutPropertiesLoose(_ref, ["forwardRef"]);
          var oldPropsAnimated = this.propsAnimated;
          this.propsAnimated = new AnimatedProps(nextProps, this.callback);
          oldPropsAnimated && oldPropsAnimated.detach();
        };
        _proto.shouldComponentUpdate = function shouldComponentUpdate(props) {
          var style = props.style,
              nextProps = _objectWithoutPropertiesLoose(props, ["style"]);
          var _this$props = this.props,
              currentStyle = _this$props.style,
              currentProps = _objectWithoutPropertiesLoose(_this$props, ["style"]);
          if (!shallowEqual(currentProps, nextProps) || !shallowEqual(currentStyle, style)) {
            this.attachProps(props);
            return true;
          }
          return false;
        };
        _proto.render = function render() {
          var _this2 = this;
          var _this$propsAnimated$g = this.propsAnimated.getValue(),
              scrollTop = _this$propsAnimated$g.scrollTop,
              scrollLeft = _this$propsAnimated$g.scrollLeft,
              animatedProps = _objectWithoutPropertiesLoose(_this$propsAnimated$g, ["scrollTop", "scrollLeft"]);
          return React__default.createElement(Component, _extends({}, animatedProps, {
            ref: function ref(node) {
              return _this2.node = handleRef(node, _this2.props.forwardRef);
            }
          }));
        };
        return AnimatedComponent;
      }(React__default.Component);
      return React__default.forwardRef(function (props, ref) {
        return React__default.createElement(AnimatedComponent, _extends({}, props, {
          forwardRef: ref
        }));
      });
    }
    var config = {
      default: {
        tension: 170,
        friction: 26
      },
      gentle: {
        tension: 120,
        friction: 14
      },
      wobbly: {
        tension: 180,
        friction: 12
      },
      stiff: {
        tension: 210,
        friction: 20
      },
      slow: {
        tension: 280,
        friction: 60
      },
      molasses: {
        tension: 280,
        friction: 120
      }
    };
    var Spring =
    /*#__PURE__*/
    function (_React$Component) {
      _inheritsLoose(Spring, _React$Component);
      function Spring() {
        var _this;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
        _this.state = {
          lastProps: {
            from: {},
            to: {}
          },
          propsChanged: false,
          internal: false
        };
        _this.controller = new Controller(null, null);
        _this.didUpdate = false;
        _this.didInject = false;
        _this.finished = true;
        _this.start = function () {
          _this.finished = false;
          var wasMounted = _this.mounted;
          _this.controller.start(function (props) {
            return _this.finish(_extends({}, props, {
              wasMounted: wasMounted
            }));
          }, _this.update);
        };
        _this.stop = function () {
          return _this.controller.stop(true);
        };
        _this.update = function () {
          return _this.mounted && _this.setState({
            internal: true
          });
        };
        _this.finish = function (_ref) {
          var finished = _ref.finished,
              noChange = _ref.noChange,
              wasMounted = _ref.wasMounted;
          _this.finished = true;
          if (_this.mounted && finished) {
            if (_this.props.onRest && (wasMounted || !noChange)) _this.props.onRest(_this.controller.merged);
            if (_this.mounted && _this.didInject) {
              _this.afterInject = convertValues(_this.props);
              _this.setState({
                internal: true
              });
            }
            if (_this.mounted && (_this.didInject || _this.props.after)) _this.setState({
              internal: true
            });
            _this.didInject = false;
          }
        };
        return _this;
      }
      var _proto = Spring.prototype;
      _proto.componentDidMount = function componentDidMount() {
        this.componentDidUpdate();
        this.mounted = true;
      };
      _proto.componentWillUnmount = function componentWillUnmount() {
        this.mounted = false;
        this.stop();
      };
      Spring.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref2) {
        var internal = _ref2.internal,
            lastProps = _ref2.lastProps;
        var from = props.from,
            to = props.to,
            reset = props.reset,
            force = props.force;
        var propsChanged = !shallowEqual(to, lastProps.to) || !shallowEqual(from, lastProps.from) || reset && !internal || force && !internal;
        return {
          propsChanged: propsChanged,
          lastProps: props,
          internal: false
        };
      };
      _proto.render = function render() {
        var _this2 = this;
        var children = this.props.children;
        var propsChanged = this.state.propsChanged;
        if (this.props.inject && propsChanged && !this.injectProps) {
          var frame = this.props.inject(this.props, function (injectProps) {
            _this2.injectProps = injectProps;
            _this2.setState({
              internal: true
            });
          });
          if (frame) return frame;
        }
        if (this.injectProps || propsChanged) {
          this.didInject = false;
          if (this.injectProps) {
            this.controller.update(this.injectProps);
            this.didInject = true;
          } else if (propsChanged) this.controller.update(this.props);
          this.didUpdate = true;
          this.afterInject = undefined;
          this.injectProps = undefined;
        }
        var values = _extends({}, this.controller.getValues(), this.afterInject);
        if (this.finished) values = _extends({}, values, this.props.after);
        return Object.keys(values).length ? children(values) : null;
      };
      _proto.componentDidUpdate = function componentDidUpdate() {
        if (this.didUpdate) this.start();
        this.didUpdate = false;
      };
      return Spring;
    }(React__default.Component);
    Spring.defaultProps = {
      from: {},
      to: {},
      config: config.default,
      native: false,
      immediate: false,
      reset: false,
      force: false,
      inject: bugfixes
    };
    var Trail =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _inheritsLoose(Trail, _React$PureComponent);
      function Trail() {
        var _this;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;
        _this.first = true;
        _this.instances = new Set();
        _this.hook = function (instance, index, length, reverse) {
          _this.instances.add(instance);
          if (reverse ? index === length - 1 : index === 0) return undefined;else return Array.from(_this.instances)[reverse ? index + 1 : index - 1];
        };
        return _this;
      }
      var _proto = Trail.prototype;
      _proto.render = function render() {
        var _this2 = this;
        var _this$props = this.props,
            items = _this$props.items,
            _children = _this$props.children,
            _this$props$from = _this$props.from,
            from = _this$props$from === void 0 ? {} : _this$props$from,
            initial = _this$props.initial,
            reverse = _this$props.reverse,
            keys = _this$props.keys,
            delay = _this$props.delay,
            onRest = _this$props.onRest,
            props = _objectWithoutPropertiesLoose(_this$props, ["items", "children", "from", "initial", "reverse", "keys", "delay", "onRest"]);
        var array = toArray(items);
        return toArray(array).map(function (item, i) {
          return React__default.createElement(Spring, _extends({
            onRest: i === 0 ? onRest : null,
            key: typeof keys === 'function' ? keys(item) : toArray(keys)[i],
            from: _this2.first && initial !== void 0 ? initial || {} : from
          }, props, {
            delay: i === 0 && delay || undefined,
            attach: function attach(instance) {
              return _this2.hook(instance, i, array.length, reverse);
            },
            children: function children(props) {
              var child = _children(item, i);
              return child ? child(props) : null;
            }
          }));
        });
      };
      _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
        this.first = false;
        if (prevProps.items !== this.props.items) this.instances.clear();
      };
      return Trail;
    }(React__default.PureComponent);
    Trail.defaultProps = {
      keys: function keys(item) {
        return item;
      }
    };
    var DEFAULT = '__default';
    var KeyframesImpl =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _inheritsLoose(KeyframesImpl, _React$PureComponent);
      function KeyframesImpl() {
        var _this;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;
        _this.guid = 0;
        _this.state = {
          props: {},
          resolve: function resolve() {
            return null;
          },
          last: true,
          index: 0
        };
        _this.next = function (props, last, index) {
          if (last === void 0) {
            last = true;
          }
          if (index === void 0) {
            index = 0;
          }
          _this.running = true;
          return new Promise(function (resolve) {
            _this.mounted && _this.setState(function (state) {
              return {
                props: props,
                resolve: resolve,
                last: last,
                index: index
              };
            }, function () {
              return _this.running = false;
            });
          });
        };
        return _this;
      }
      var _proto = KeyframesImpl.prototype;
      _proto.componentDidMount = function componentDidMount() {
        this.mounted = true;
        this.componentDidUpdate({});
      };
      _proto.componentWillUnmount = function componentWillUnmount() {
        this.mounted = false;
      };
      _proto.componentDidUpdate = function componentDidUpdate(previous) {
        var _this2 = this;
        var _this$props = this.props,
            states = _this$props.states,
            f = _this$props.filter,
            state = _this$props.state;
        if (previous.state !== this.props.state || this.props.reset && !this.running || !shallowEqual(states[state], previous.states[previous.state])) {
          if (states && state && states[state]) {
            (function () {
              var localId = ++_this2.guid;
              var slots = states[state];
              if (slots) {
                if (Array.isArray(slots)) {
                  var q = Promise.resolve();
                  var _loop = function _loop(i) {
                    var index = i;
                    var slot = slots[index];
                    var last = index === slots.length - 1;
                    q = q.then(function () {
                      return localId === _this2.guid && _this2.next(f(slot), last, index);
                    });
                  };
                  for (var i = 0; i < slots.length; i++) {
                    _loop(i);
                  }
                } else if (typeof slots === 'function') {
                  var index = 0;
                  slots(
                  function (props, last) {
                    if (last === void 0) {
                      last = false;
                    }
                    return localId === _this2.guid && _this2.next(f(props), last, index++);
                  },
                  function () {
                    return requestFrame(function () {
                      return _this2.instance && _this2.instance.stop();
                    });
                  },
                  _this2.props);
                } else {
                  _this2.next(f(states[state]));
                }
              }
            })();
          }
        }
      };
      _proto.render = function render() {
        var _this3 = this;
        var _this$state = this.state,
            props = _this$state.props,
            resolve = _this$state.resolve,
            last = _this$state.last,
            index = _this$state.index;
        if (!props || Object.keys(props).length === 0) return null;
        var _this$props2 = this.props,
            state = _this$props2.state,
            filter = _this$props2.filter,
            states = _this$props2.states,
            config = _this$props2.config,
            Component = _this$props2.primitive,
            _onRest = _this$props2.onRest,
            forwardRef = _this$props2.forwardRef,
            rest = _objectWithoutPropertiesLoose(_this$props2, ["state", "filter", "states", "config", "primitive", "onRest", "forwardRef"]);
        if (Array.isArray(config)) config = config[index];
        return React__default.createElement(Component, _extends({
          ref: function ref(_ref) {
            return _this3.instance = handleRef(_ref, forwardRef);
          },
          config: config
        }, rest, props, {
          onRest: function onRest(args) {
            resolve(args);
            if (_onRest && last) _onRest(args);
          }
        }));
      };
      return KeyframesImpl;
    }(React__default.PureComponent);
    KeyframesImpl.defaultProps = {
      state: DEFAULT
    };
    var Keyframes = React__default.forwardRef(function (props, ref) {
      return React__default.createElement(KeyframesImpl, _extends({}, props, {
        forwardRef: ref
      }));
    });
    Keyframes.create = function (primitive) {
      return function (states, filter) {
        var _states;
        if (filter === void 0) {
          filter = function filter(states) {
            return states;
          };
        }
        if (typeof states === 'function' || Array.isArray(states)) states = (_states = {}, _states[DEFAULT] = states, _states);
        return function (props) {
          return React__default.createElement(KeyframesImpl, _extends({
            primitive: primitive,
            states: states,
            filter: filter
          }, props));
        };
      };
    };
    Keyframes.Spring = function (states) {
      return Keyframes.create(Spring)(states, interpolateTo);
    };
    Keyframes.Trail = function (states) {
      return Keyframes.create(Trail)(states, interpolateTo);
    };
    var guid = 0;
    var get = function get(props) {
      var items = props.items,
          keys = props.keys,
          rest = _objectWithoutPropertiesLoose(props, ["items", "keys"]);
      items = toArray(items !== void 0 ? items : null);
      keys = typeof keys === 'function' ? items.map(keys) : toArray(keys);
      return _extends({
        items: items,
        keys: keys.map(function (key) {
          return String(key);
        })
      }, rest);
    };
    var Transition =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _inheritsLoose(Transition, _React$PureComponent);
      var _proto = Transition.prototype;
      _proto.componentDidMount = function componentDidMount() {
        this.mounted = true;
      };
      _proto.componentWillUnmount = function componentWillUnmount() {
        this.mounted = false;
      };
      function Transition(prevProps) {
        var _this;
        _this = _React$PureComponent.call(this, prevProps) || this;
        _this.destroyItem = function (item, key, state) {
          return function (values) {
            var _this$props = _this.props,
                onRest = _this$props.onRest,
                onDestroyed = _this$props.onDestroyed;
            if (_this.mounted) {
              onDestroyed && onDestroyed(item);
              _this.setState(function (_ref) {
                var deleted = _ref.deleted;
                return {
                  deleted: deleted.filter(function (t) {
                    return t.key !== key;
                  })
                };
              });
              onRest && onRest(item, state, values);
            }
          };
        };
        _this.state = {
          first: true,
          transitions: [],
          current: {},
          deleted: [],
          prevProps: prevProps
        };
        return _this;
      }
      Transition.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref2) {
        var first = _ref2.first,
            prevProps = _ref2.prevProps,
            state = _objectWithoutPropertiesLoose(_ref2, ["first", "prevProps"]);
        var _get = get(props),
            items = _get.items,
            keys = _get.keys,
            initial = _get.initial,
            from = _get.from,
            enter = _get.enter,
            leave = _get.leave,
            update = _get.update,
            _get$trail = _get.trail,
            trail = _get$trail === void 0 ? 0 : _get$trail,
            unique = _get.unique,
            config = _get.config;
        var _get2 = get(prevProps),
            _keys = _get2.keys,
            _items = _get2.items;
        var current = _extends({}, state.current);
        var deleted = [].concat(state.deleted);
        var currentKeys = Object.keys(current);
        var currentSet = new Set(currentKeys);
        var nextSet = new Set(keys);
        var added = keys.filter(function (item) {
          return !currentSet.has(item);
        });
        var removed = state.transitions.filter(function (item) {
          return !item.destroyed && !nextSet.has(item.originalKey);
        }).map(function (i) {
          return i.originalKey;
        });
        var updated = keys.filter(function (item) {
          return currentSet.has(item);
        });
        var delay = 0;
        added.forEach(function (key) {
          if (unique && deleted.find(function (d) {
            return d.originalKey === key;
          })) deleted = deleted.filter(function (t) {
            return t.originalKey !== key;
          });
          var keyIndex = keys.indexOf(key);
          var item = items[keyIndex];
          var state = 'enter';
          current[key] = {
            state: state,
            originalKey: key,
            key: unique ? String(key) : guid++,
            item: item,
            trail: delay = delay + trail,
            config: callProp(config, item, state),
            from: callProp(first ? initial !== void 0 ? initial || {} : from : from, item),
            to: callProp(enter, item)
          };
        });
        removed.forEach(function (key) {
          var keyIndex = _keys.indexOf(key);
          var item = _items[keyIndex];
          var state = 'leave';
          deleted.push(_extends({}, current[key], {
            state: state,
            destroyed: true,
            left: _keys[Math.max(0, keyIndex - 1)],
            right: _keys[Math.min(_keys.length, keyIndex + 1)],
            trail: delay = delay + trail,
            config: callProp(config, item, state),
            to: callProp(leave, item)
          }));
          delete current[key];
        });
        updated.forEach(function (key) {
          var keyIndex = keys.indexOf(key);
          var item = items[keyIndex];
          var state = 'update';
          current[key] = _extends({}, current[key], {
            item: item,
            state: state,
            trail: delay = delay + trail,
            config: callProp(config, item, state),
            to: callProp(update, item)
          });
        });
        var out = keys.map(function (key) {
          return current[key];
        });
        deleted.forEach(function (_ref3) {
          var left = _ref3.left,
              right = _ref3.right,
              transition = _objectWithoutPropertiesLoose(_ref3, ["left", "right"]);
          var pos;
          if ((pos = out.findIndex(function (t) {
            return t.originalKey === left;
          })) !== -1) pos += 1;
          if (pos === -1) pos = out.findIndex(function (t) {
            return t.originalKey === right;
          });
          if (pos === -1) pos = deleted.findIndex(function (t) {
            return t.originalKey === left;
          });
          if (pos === -1) pos = deleted.findIndex(function (t) {
            return t.originalKey === right;
          });
          pos = Math.max(0, pos);
          out = [].concat(out.slice(0, pos), [transition], out.slice(pos));
        });
        return {
          first: first && added.length === 0,
          transitions: out,
          current: current,
          deleted: deleted,
          prevProps: props
        };
      };
      _proto.render = function render() {
        var _this2 = this;
        var _this$props2 = this.props,
            initial = _this$props2.initial,
            _this$props2$from = _this$props2.from,
            _this$props2$enter = _this$props2.enter,
            _this$props2$leave = _this$props2.leave,
            _this$props2$update = _this$props2.update,
            onDestroyed = _this$props2.onDestroyed,
            keys = _this$props2.keys,
            items = _this$props2.items,
            onFrame = _this$props2.onFrame,
            onRest = _this$props2.onRest,
            onStart = _this$props2.onStart,
            trail = _this$props2.trail,
            config = _this$props2.config,
            _children = _this$props2.children,
            unique = _this$props2.unique,
            reset = _this$props2.reset,
            extra = _objectWithoutPropertiesLoose(_this$props2, ["initial", "from", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "trail", "config", "children", "unique", "reset"]);
        return this.state.transitions.map(function (_ref4, i) {
          var _ref5;
          var state = _ref4.state,
              key = _ref4.key,
              item = _ref4.item,
              from = _ref4.from,
              to = _ref4.to,
              trail = _ref4.trail,
              config = _ref4.config,
              destroyed = _ref4.destroyed;
          return React__default.createElement(Keyframes, _extends({
            reset: reset && state === 'enter',
            primitive: Spring,
            state: state,
            filter: interpolateTo,
            states: (_ref5 = {}, _ref5[state] = to, _ref5),
            key: key,
            onRest: destroyed ? _this2.destroyItem(item, key, state) : onRest && function (values) {
              return onRest(item, state, values);
            },
            onStart: onStart && function () {
              return onStart(item, state);
            },
            onFrame: onFrame && function (values) {
              return onFrame(item, state, values);
            },
            delay: trail,
            config: config
          }, extra, {
            from: from,
            children: function children(props) {
              var child = _children(item, state, i);
              return child ? child(props) : null;
            }
          }));
        });
      };
      return Transition;
    }(React__default.PureComponent);
    Transition.defaultProps = {
      keys: function keys(item) {
        return item;
      },
      unique: false,
      reset: false
    };
    var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',
    'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
    var extendedAnimated = domElements.reduce(function (acc, element) {
      acc[element] = createAnimatedComponent(element);
      return acc;
    }, createAnimatedComponent);

    var animationConfig = {
      from: {
        opacity: 0,
        transform: "scale(0.95)"
      },
      enter: {
        opacity: 1,
        transform: "scale(1)"
      },
      leave: {
        opacity: 0,
        transform: "scale(0.95)",
        pointerEvents: "none"
      },
      config: function config(_a, motion) {
        return motion === "leave" ? {
          duration: 0.1
        } : {
          duration: 200
        };
      }
    };

    var MountTransition = function MountTransition(props) {
      return React.createElement(Transition, Object.assign({
        items: props.visible
      }, animationConfig, props), function (show, state, index) {
        return show && function (styles) {
          return props.children(styles, state, index);
        };
      });
    };

    var DropDown =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _inherits(DropDown, _React$PureComponent);
      function DropDown() {
        var _this;
        _classCallCheck(this, DropDown);
        _this = _possibleConstructorReturn(this, _getPrototypeOf(DropDown).apply(this, arguments));
        _this.state = {
          isOpen: !!_this.props.initiallyOpen
        };
        _this.toggleDropdown = function () {
          _this.setState({
            isOpen: !_this.state.isOpen
          });
        };
        return _this;
      }
      _createClass(DropDown, [{
        key: "render",
        value: function render() {
          var _this2 = this;
          var _this$props = this.props,
              buttonLabel = _this$props.buttonLabel,
              children = _this$props.children,
              labelComponent = _this$props.labelComponent,
              padding = _this$props.padding,
              className = _this$props.className,
              dropDownClassName = _this$props.dropDownClassName,
              isSelected = _this$props.isSelected,
              disabled = _this$props.disabled,
              labelClassName = _this$props.labelClassName,
              _onOutsideClick = _this$props.onOutsideClick;
          var isOpen = this.state.isOpen;
          return React.createElement(OutsideClick, {
            className: cx(wrapperStyle$1, className),
            onOutsideClick: function onOutsideClick() {
              _this2.setState({
                isOpen: false
              });
              if (_onOutsideClick) _onOutsideClick(isOpen);
            },
            disabled: !isOpen
          }, labelComponent ? labelComponent({
            isOpen: isOpen,
            toggleDropdown: this.toggleDropdown
          }) : React.createElement(DropDownButton, {
            isSelected: !!isSelected,
            isOpen: isOpen,
            onClick: this.toggleDropdown,
            disabled: disabled,
            className: labelClassName
          }, buttonLabel), React.createElement(MountTransition, {
            visible: isOpen,
            native: true
          }, function (transitionStyles) {
            return React.createElement(extendedAnimated.div, {
              className: cx(dropDownStyle, dropDownClassName),
              style: Object.assign({
                padding: padding
              }, transitionStyles)
            }, children({
              toggle: _this2.toggleDropdown,
              isOpen: isOpen
            }));
          }));
        }
      }]);
      return DropDown;
    }(React.PureComponent);
    DropDown.defaultProps = {
      closeOnOutsideClick: true
    };

    var animation = "all 0.3s cubic-bezier(.64,.09,.08,1)";
    var inputMarginBottom = 20;
    var wrapperStyle$2 =
    /*#__PURE__*/
    css({
      position: "relative",
      display: "flex",
      backgroundColor: colors.white.base,
      width: "100%",
      flexDirection: "column",
      marginBottom: inputMarginBottom,
      height: 68,
      "&._pebble_input_wrapper_textarea": {
        height: 110
      }
    });
    var inputStyle =
    /*#__PURE__*/
    css(Object.assign({
      outline: 0,
      border: 0,
      borderBottom: "1px solid ".concat(colors.gray.lighter),
      padding: "24px 0 12px 0",
      height: 48,
      borderRadius: 0
    }, typography.normal.regular, {
      width: "100%"
    }, textEllipsis, {
      "&:disabled": {
        backgroundColor: colors.white.base
      }
    },
    /*#__PURE__*/
    getPlaceholderStyle(colors.gray.light)
    ));
    var inputReadOnlyStyle =
    /*#__PURE__*/
    css({
      color: colors.gray.dark
    });
    var inputDisabledStyle =
    /*#__PURE__*/
    css({
      cursor: "not-allowed",
      pointerEvents: "none",
      color: colors.gray.base
    });
    var inputTextAreaStyle =
    /*#__PURE__*/
    css({
      height: 88,
      padding: "0 0 52px 0",
      marginTop: 22,
      resize: "none"
    });
    var highlightStyle =
    /*#__PURE__*/
    css({
      height: 2,
      backgroundColor: colors.violet.base,
      marginTop: -2,
      position: "relative",
      width: 0,
      transition: animation,
      zIndex: 9,
      "&._pebble_input_highlight_state, &._pebble_input_highlight_focused": {
        width: "100%"
      }
    });
    var labelStyle =
    /*#__PURE__*/
    css({
      color: colors.gray.base,
      fontSize: 14,
      lineHeight: "12px",
      position: "absolute",
      transition: animation,
      transform: "translate(0, 24px)",
      pointerEvents: "none",
      "&._pebble_input_label_focused": {
        fontSize: 12,
        lineHeight: "10px",
        transform: "translate(0, 0)",
        color: colors.gray.dark
      }
    });
    var messageStyle =
    /*#__PURE__*/
    css(Object.assign({}, typography.s.regular, {
      marginTop: 10,
      lineHeight: "10px",
      textAlign: "left"
    }));
    var loadingStyle =
    /*#__PURE__*/
    css({
      right: -10,
      top: 20,
      position: "absolute"
    });

    function getColor(error, success, isUnderlineColor) {
      var color = colors.gray.dark;
      if (error) {
        color = colors.red.base;
      } else if (success) {
        color = colors.emerald.base;
      } else if (isUnderlineColor) {
        color = colors.violet.base;
      }
      return color;
    }
    var Input =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _inherits(Input, _React$PureComponent);
      function Input() {
        var _this;
        _classCallCheck(this, Input);
        _this = _possibleConstructorReturn(this, _getPrototypeOf(Input).apply(this, arguments));
        _this.state = {
          isFocused: false
        };
        _this.addFocus = function () {
          _this.setState({
            isFocused: true
          });
        };
        _this.removeFocus = function () {
          _this.setState({
            isFocused: false
          });
        };
        _this.handleChange = function (e) {
          _this.props.onChange(e.target.value || "");
        };
        return _this;
      }
      _createClass(Input, [{
        key: "render",
        value: function render() {
          var _cx;
          var _this$props = this.props,
              type = _this$props.type,
              placeholder = _this$props.placeholder,
              className = _this$props.className,
              inputClassName = _this$props.inputClassName,
              fixLabelAtTop = _this$props.fixLabelAtTop,
              value = _this$props.value,
              readOnly = _this$props.readOnly,
              disabled = _this$props.disabled,
              errorMessage = _this$props.errorMessage,
              successMessage = _this$props.successMessage,
              message = _this$props.message,
              textArea = _this$props.textArea,
              required = _this$props.required,
              onClick = _this$props.onClick,
              loading = _this$props.loading;
          var isFocused = this.state.isFocused;
          var _message = errorMessage || successMessage || message;
          var _inputClassName = cx(inputStyle, (_cx = {}, _defineProperty(_cx, inputDisabledStyle, disabled), _defineProperty(_cx, inputReadOnlyStyle, readOnly), _defineProperty(_cx, inputTextAreaStyle, textArea), _cx), inputClassName);
          var _inputProps = {
            "aria-label": placeholder,
            className: _inputClassName,
            disabled: disabled,
            onChange: this.handleChange,
            readOnly: readOnly,
            value: value || ""
          };
          var highlightClassName = cx(highlightStyle, {
            _pebble_input_highlight_focused: isFocused,
            _pebble_input_highlight_state: !!_message,
            _pebble_input_highlight_read_only: readOnly,
            _pebble_input_highlight_disabled: disabled
          });
          var labelClassName = cx(labelStyle, {
            _pebble_input_label_focused: isFocused || !!value || fixLabelAtTop
          });
          var _wrapperStyle = cx(wrapperStyle$2, {
            _pebble_input_wrapper_textarea: textArea
          }, className);
          return React.createElement("div", {
            className: _wrapperStyle,
            onFocus: this.addFocus,
            onBlur: this.removeFocus,
            onClick: onClick
          }, this.props.textArea ? React.createElement("textarea", Object.assign({}, _inputProps, this.props.inputProps)) : React.createElement("input", Object.assign({
            type: type
          }, _inputProps, this.props.inputProps)), React.createElement("label", {
            className: labelClassName
          }, placeholder, required && React.createElement("span", {
            style: {
              color: colors.red.base
            }
          }, "\xA0*")), React.createElement("div", {
            className: highlightClassName,
            style: {
              backgroundColor: getColor(errorMessage, successMessage, true)
            }
          }), loading && React.createElement(Loader, {
            color: colors.violet.base,
            scale: 0.6,
            className: loadingStyle
          }), _message && React.createElement("div", {
            className: messageStyle,
            style: {
              color: getColor(errorMessage, successMessage)
            }
          }, _message));
        }
      }]);
      return Input;
    }(React.PureComponent);
    Input.defaultProps = {
      value: "",
      readOnly: false
    };

    var modalContainer =
    /*#__PURE__*/
    css({
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: "rgba(0,0,0,0.4)",
      overflowY: "scroll",
      WebkitOverflowScrolling: "touch",
      zIndex: 99998
    });

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
    var isBrowser$1 = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document.nodeType === 9;

    var Modal =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _inherits(Modal, _React$PureComponent);
      function Modal() {
        var _this;
        _classCallCheck(this, Modal);
        _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).apply(this, arguments));
        _this.node = isBrowser$1 ? document.createElement("div") : null;
        return _this;
      }
      _createClass(Modal, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          if (this.node) {
            document.body.appendChild(this.node);
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          if (this.node) {
            document.body.removeChild(this.node);
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          if (prevProps.visible === this.props.visible) return;
          if (this.props.visible) {
            document.getElementsByTagName("body")[0].style.overflow = "hidden";
          } else {
            document.getElementsByTagName("body")[0].style.overflow = "";
          }
        }
      }, {
        key: "render",
        value: function render() {
          if (!isBrowser$1) return null;
          var _this$props = this.props,
              children = _this$props.children,
              visible = _this$props.visible,
              backDropClassName = _this$props.backDropClassName,
              modalClassName = _this$props.modalClassName;
          var node = this.node;
          return ReactDOM.createPortal(React.createElement(MountTransition, {
            visible: visible
          }, function (transitionStyles) {
            return React.createElement("div", {
              style: {
                opacity: transitionStyles.opacity
              },
              className: cx(modalContainer, backDropClassName)
            }, React.createElement("div", {
              className: cx(
              /*#__PURE__*/
              css({
                transform: transitionStyles.transform
              }), modalClassName)
            }, children));
          }), node);
        }
      }]);
      return Modal;
    }(React.PureComponent);

    var searchWrapperStyle =
    /*#__PURE__*/
    css(Object.assign({
      minWidth: "200px",
      borderRadius: constants.borderRadius,
      padding: "0 20px"
    }, flexRow, {
      alignItems: "center",
      height: 40,
      "> i": {
        marginRight: 10,
        fontSize: 12
      },
      "&.__pebble__search__small": {
        backgroundColor: colors.gray.lightest
      },
      "&.__pebble__search__large": {
        backgroundColor: colors.white.base,
        height: 76,
        padding: "0 25px",
        boxShadow: constants.boxShadow.base
      },
      "&.__pebble__search__table": {
        border: "1px solid ".concat(colors.gray.light),
        backgroundColor: colors.white.base,
        i: {
          color: colors.gray.dark
        }
      }
    }));
    var searchStyle =
    /*#__PURE__*/
    css(Object.assign({
      borderRadius: constants.borderRadius,
      outline: "none",
      border: 0,
      height: "inherit",
      flexGrow: 1
    }, textEllipsis, typography.s.regular,
    /*#__PURE__*/
    getPlaceholderStyle(colors.gray.base), {
      backgroundColor: "transparent"
    }));
    var clearContainer =
    /*#__PURE__*/
    css({
      display: "table",
      height: 16,
      width: 16,
      backgroundColor: colors.gray.light,
      fontSize: 6,
      borderRadius: 16,
      textAlign: "center",
      cursor: "pointer",
      pointerEvents: "none",
      transition: "opacity 0.3s",
      opacity: 0,
      "&.__display": {
        opacity: 1,
        pointerEvents: "unset"
      }
    });

    var Search =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _inherits(Search, _React$PureComponent);
      function Search() {
        var _this;
        _classCallCheck(this, Search);
        _this = _possibleConstructorReturn(this, _getPrototypeOf(Search).apply(this, arguments));
        _this.searchInputRef = React.createRef();
        return _this;
      }
      _createClass(Search, [{
        key: "render",
        value: function render() {
          var _this2 = this;
          var _this$props = this.props,
              type = _this$props.type,
              inputProps = _this$props.inputProps,
              _onChange = _this$props.onChange,
              placeholder = _this$props.placeholder,
              showSearchIcon = _this$props.showSearchIcon,
              className = _this$props.className,
              clearable = _this$props.clearable,
              value = _this$props.value;
          var wrapperClassName = cx(searchWrapperStyle, {
            __pebble__search__small: type === "small",
            __pebble__search__large: type === "large",
            __pebble__search__table: type === "table"
          });
          return React.createElement("div", {
            className: cx(wrapperClassName, className)
          }, type !== "large" && showSearchIcon && React.createElement("i", {
            className: "pi pi-search"
          }), React.createElement("input", Object.assign({
            className: searchStyle,
            type: "text",
            "aria-label": placeholder,
            placeholder: placeholder,
            onChange: function onChange(e) {
              _onChange(e.target.value);
            },
            ref: this.searchInputRef,
            value: value
          }, inputProps)), clearable && React.createElement("div", {
            className: cx(clearContainer, {
              __display: value && !!value.length
            }),
            onClick: function onClick() {
              if (_this2.searchInputRef.current) {
                _this2.searchInputRef.current.value = "";
              }
              _onChange("");
            }
          }, React.createElement("i", {
            className: "pi pi-close",
            style: {
              display: "table-cell",
              verticalAlign: "middle"
            }
          })));
        }
      }]);
      return Search;
    }(React.PureComponent);
    Search.defaultProps = {
      showSearchIcon: true,
      clearable: true
    };

    var selectWrapper =
    /*#__PURE__*/
    css({
      marginBottom: 20
    });
    var relativePosition =
    /*#__PURE__*/
    css({
      position: "relative"
    });
    var selectInputWrapper =
    /*#__PURE__*/
    css({
      pointerEvents: "none"
    });
    var selectInput =
    /*#__PURE__*/
    css({
      color: colors.gray.darker,
      paddingRight: 15
    });
    var dropDownClass =
    /*#__PURE__*/
    css({
      marginTop: -inputMarginBottom
    });
    var fullWidth =
    /*#__PURE__*/
    css({
      width: "100%"
    });
    var inputWrapper =
    /*#__PURE__*/
    css({
      cursor: "pointer",
      position: "relative"
    });
    var chevronStyle =
    /*#__PURE__*/
    css({
      position: "absolute",
      top: 25,
      right: 7,
      color: colors.gray.base,
      fontSize: 10,
      "&.__pebble__select__open": {
        transform: "rotate(180deg)"
      }
    });

    function getSelectedCheckboxes(changedValue, prevSelected) {
      var _selected = prevSelected || [];
      var cloned = _selected.slice(0);
      var index = _selected.findIndex(function (datum) {
        return datum === changedValue;
      });
      if (index >= 0) {
        cloned.splice(index, 1);
      } else {
        cloned.push(changedValue);
      }
      return cloned;
    }

    function isElement(el) {
      return el != null && typeof el === 'object' && el.nodeType === 1;
    }
    function canOverflow(overflow, skipOverflowHiddenElements) {
      if (skipOverflowHiddenElements && overflow === 'hidden') {
        return false;
      }
      return overflow !== 'visible' && overflow !== 'clip';
    }
    function isScrollable(el, skipOverflowHiddenElements) {
      if (el.clientHeight < el.scrollHeight || el.clientWidth < el.scrollWidth) {
        var style = getComputedStyle(el, null);
        return canOverflow(style.overflowY, skipOverflowHiddenElements) || canOverflow(style.overflowX, skipOverflowHiddenElements);
      }
      return false;
    }
    function alignNearest(scrollingEdgeStart, scrollingEdgeEnd, scrollingSize, scrollingBorderStart, scrollingBorderEnd, elementEdgeStart, elementEdgeEnd, elementSize) {
      if (elementEdgeStart < scrollingEdgeStart && elementEdgeEnd > scrollingEdgeEnd || elementEdgeStart > scrollingEdgeStart && elementEdgeEnd < scrollingEdgeEnd) {
        return 0;
      }
      if (elementEdgeStart <= scrollingEdgeStart && elementSize <= scrollingSize || elementEdgeEnd >= scrollingEdgeEnd && elementSize >= scrollingSize) {
        return elementEdgeStart - scrollingEdgeStart - scrollingBorderStart;
      }
      if (elementEdgeEnd > scrollingEdgeEnd && elementSize < scrollingSize || elementEdgeStart < scrollingEdgeStart && elementSize > scrollingSize) {
        return elementEdgeEnd - scrollingEdgeEnd + scrollingBorderEnd;
      }
      return 0;
    }
    var compute = (function (target, options) {
      var scrollMode = options.scrollMode,
          block = options.block,
          inline = options.inline,
          boundary = options.boundary,
          skipOverflowHiddenElements = options.skipOverflowHiddenElements;
      var checkBoundary = typeof boundary === 'function' ? boundary : function (node) {
        return node !== boundary;
      };
      if (!isElement(target)) {
        throw new TypeError('Invalid target');
      }
      var scrollingElement = document.scrollingElement || document.documentElement;
      var frames = [];
      var cursor = target;
      while (isElement(cursor) && checkBoundary(cursor)) {
        cursor = cursor.parentNode;
        if (cursor === scrollingElement) {
          frames.push(cursor);
          break;
        }
        if (cursor === document.body && isScrollable(cursor) && !isScrollable(document.documentElement)) {
          continue;
        }
        if (isScrollable(cursor, skipOverflowHiddenElements)) {
          frames.push(cursor);
        }
      }
      var viewportWidth = window.visualViewport ? visualViewport.width : innerWidth;
      var viewportHeight = window.visualViewport ? visualViewport.height : innerHeight;
      var viewportX = window.scrollX || pageXOffset;
      var viewportY = window.scrollY || pageYOffset;
      var _target$getBoundingCl = target.getBoundingClientRect(),
          targetHeight = _target$getBoundingCl.height,
          targetWidth = _target$getBoundingCl.width,
          targetTop = _target$getBoundingCl.top,
          targetRight = _target$getBoundingCl.right,
          targetBottom = _target$getBoundingCl.bottom,
          targetLeft = _target$getBoundingCl.left;
      var targetBlock = block === 'start' || block === 'nearest' ? targetTop : block === 'end' ? targetBottom : targetTop + targetHeight / 2;
      var targetInline = inline === 'center' ? targetLeft + targetWidth / 2 : inline === 'end' ? targetRight : targetLeft;
      var computations = [];
      for (var index = 0; index < frames.length; index++) {
        var frame = frames[index];
        var _frame$getBoundingCli = frame.getBoundingClientRect(),
            _height = _frame$getBoundingCli.height,
            _width = _frame$getBoundingCli.width,
            _top = _frame$getBoundingCli.top,
            right = _frame$getBoundingCli.right,
            bottom = _frame$getBoundingCli.bottom,
            _left = _frame$getBoundingCli.left;
        if (scrollMode === 'if-needed' && targetTop >= 0 && targetLeft >= 0 && targetBottom <= viewportHeight && targetRight <= viewportWidth && targetTop >= _top && targetBottom <= bottom && targetLeft >= _left && targetRight <= right) {
          return computations;
        }
        var frameStyle = getComputedStyle(frame);
        var borderLeft = parseInt(frameStyle.borderLeftWidth, 10);
        var borderTop = parseInt(frameStyle.borderTopWidth, 10);
        var borderRight = parseInt(frameStyle.borderRightWidth, 10);
        var borderBottom = parseInt(frameStyle.borderBottomWidth, 10);
        var blockScroll = 0;
        var inlineScroll = 0;
        var scrollbarWidth = 'offsetWidth' in frame ? frame.offsetWidth - frame.clientWidth - borderLeft - borderRight : 0;
        var scrollbarHeight = 'offsetHeight' in frame ? frame.offsetHeight - frame.clientHeight - borderTop - borderBottom : 0;
        if (scrollingElement === frame) {
          if (block === 'start') {
            blockScroll = targetBlock;
          } else if (block === 'end') {
            blockScroll = targetBlock - viewportHeight;
          } else if (block === 'nearest') {
            blockScroll = alignNearest(viewportY, viewportY + viewportHeight, viewportHeight, borderTop, borderBottom, viewportY + targetBlock, viewportY + targetBlock + targetHeight, targetHeight);
          } else {
            blockScroll = targetBlock - viewportHeight / 2;
          }
          if (inline === 'start') {
            inlineScroll = targetInline;
          } else if (inline === 'center') {
            inlineScroll = targetInline - viewportWidth / 2;
          } else if (inline === 'end') {
            inlineScroll = targetInline - viewportWidth;
          } else {
            inlineScroll = alignNearest(viewportX, viewportX + viewportWidth, viewportWidth, borderLeft, borderRight, viewportX + targetInline, viewportX + targetInline + targetWidth, targetWidth);
          }
          blockScroll = Math.max(0, blockScroll + viewportY);
          inlineScroll = Math.max(0, inlineScroll + viewportX);
        } else {
          if (block === 'start') {
            blockScroll = targetBlock - _top - borderTop;
          } else if (block === 'end') {
            blockScroll = targetBlock - bottom + borderBottom + scrollbarHeight;
          } else if (block === 'nearest') {
            blockScroll = alignNearest(_top, bottom, _height, borderTop, borderBottom + scrollbarHeight, targetBlock, targetBlock + targetHeight, targetHeight);
          } else {
            blockScroll = targetBlock - (_top + _height / 2) + scrollbarHeight / 2;
          }
          if (inline === 'start') {
            inlineScroll = targetInline - _left - borderLeft;
          } else if (inline === 'center') {
            inlineScroll = targetInline - (_left + _width / 2) + scrollbarWidth / 2;
          } else if (inline === 'end') {
            inlineScroll = targetInline - right + borderRight + scrollbarWidth;
          } else {
            inlineScroll = alignNearest(_left, right, _width, borderLeft, borderRight + scrollbarWidth, targetInline, targetInline + targetWidth, targetWidth);
          }
          var scrollLeft = frame.scrollLeft,
              scrollTop = frame.scrollTop;
          blockScroll = Math.max(0, Math.min(scrollTop + blockScroll, frame.scrollHeight - _height + scrollbarHeight));
          inlineScroll = Math.max(0, Math.min(scrollLeft + inlineScroll, frame.scrollWidth - _width + scrollbarWidth));
          targetBlock += scrollTop - blockScroll;
          targetInline += scrollLeft - inlineScroll;
        }
        computations.push({
          el: frame,
          top: blockScroll,
          left: inlineScroll
        });
      }
      return computations;
    });

    function isOptionsObject(options) {
      return options === Object(options) && Object.keys(options).length !== 0;
    }
    function defaultBehavior(actions, behavior) {
      if (behavior === void 0) {
        behavior = 'auto';
      }
      var canSmoothScroll = 'scrollBehavior' in document.body.style;
      actions.forEach(function (_ref) {
        var el = _ref.el,
            top = _ref.top,
            left = _ref.left;
        if (el.scroll && canSmoothScroll) {
          el.scroll({
            top: top,
            left: left,
            behavior: behavior
          });
        } else {
          el.scrollTop = top;
          el.scrollLeft = left;
        }
      });
    }
    function getOptions(options) {
      if (options === false) {
        return {
          block: 'end',
          inline: 'nearest'
        };
      }
      if (isOptionsObject(options)) {
        return options;
      }
      return {
        block: 'start',
        inline: 'nearest'
      };
    }
    function scrollIntoView(target, options) {
      var targetIsDetached = !target.ownerDocument.documentElement.contains(target);
      if (isOptionsObject(options) && typeof options.behavior === 'function') {
        return options.behavior(targetIsDetached ? [] : compute(target, options));
      }
      if (targetIsDetached) {
        return;
      }
      var computeOptions = getOptions(options);
      return defaultBehavior(compute(target, computeOptions), computeOptions.behavior);
    }

    var optionWrapperMaxHeight = 316;
    var searchBoxHeight = 80;
    var initialPadding = 20;
    var onScrollPadding = 10;
    var optionsWrapper =
    /*#__PURE__*/
    css({
      backgroundColor: colors.white.base,
      borderRadius: constants.borderRadius,
      position: "relative",
      width: "inherit",
      zIndex: 9,
      maxHeight: optionWrapperMaxHeight,
      minWidth: 100,
      overflowY: "auto",
      padding: "10px 1px"
    });
    var searchBoxWrapper =
    /*#__PURE__*/
    css({
      padding: initialPadding,
      boxShadow: "none",
      transition: "all 100ms linear",
      zIndex: 10,
      willChange: "padding",
      position: "absolute",
      top: 0,
      background: "white",
      width: "100%",
      boxSizing: "border-box"
    });
    var searchBoxScrolledStyle =
    /*#__PURE__*/
    css({
      boxShadow: constants.boxShadow.base,
      padding: onScrollPadding
    });

    var OptionGroup =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _inherits(OptionGroup, _React$PureComponent);
      function OptionGroup() {
        var _this;
        _classCallCheck(this, OptionGroup);
        _this = _possibleConstructorReturn(this, _getPrototypeOf(OptionGroup).apply(this, arguments));
        _this.optionRef = React.createRef();
        _this.optionsRefsSet = new Map();
        _this.state = {
          highlighted: -1,
          isScrolled: false
        };
        _this.handleKeyPress = function (e) {
          var _this$props = _this.props,
              handleChange = _this$props.handleChange,
              isSelected = _this$props.isSelected;
          var children = React.Children.toArray(_this.props.children);
          var highlighted = _this.state.highlighted;
          var which = e.which;
          if (which === 13 && children && children[highlighted]) {
            var _ref =
            children && children[highlighted] && children[highlighted].props,
                value = _ref.value;
            handleChange({
              value: value,
              checked: !isSelected(value)
            }, e);
          }
          _this.setState(function () {
            var _highlighted = highlighted;
            if (which === 40) {
              _highlighted = Math.min(_highlighted + 1, React.Children.count(children) - 1);
            }
            if (which === 38) {
              _highlighted = Math.max(_highlighted - 1, 0);
            }
            return {
              highlighted: _highlighted
            };
          }, function () {
            var currentRef = _this.optionsRefsSet.get(highlighted);
            if (_this.optionRef.current && (which === 40 || which === 38) && currentRef && currentRef.current) {
              var element = ReactDOM.findDOMNode(currentRef.current);
              if (element) {
                scrollIntoView(element, {
                  behavior: "smooth",
                  boundary: _this.optionRef.current
                });
              }
            }
          });
        };
        return _this;
      }
      _createClass(OptionGroup, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;
          this.observer = new IntersectionObserver(function (entries) {
            _this2.setState({
              isScrolled: entries[0].intersectionRatio < 0.9
            });
          }, {
            root: this.optionRef.current,
            threshold: 0.9
          });
          if (this.optionRef.current && this.optionRef.current.childNodes && this.optionRef.current.childNodes.length) {
            this.observer.observe(this.optionRef.current.childNodes[0]);
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          if (this.observer) {
            this.observer.disconnect();
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _this3 = this;
          var _this$props2 = this.props,
              searchBox = _this$props2.searchBox,
              children = _this$props2.children,
              multiSelect = _this$props2.multiSelect,
              className = _this$props2.className,
              isSelected = _this$props2.isSelected,
              handleChange = _this$props2.handleChange,
              searchBoxProps = _this$props2.searchBoxProps;
          var _this$state = this.state,
              isScrolled = _this$state.isScrolled,
              highlighted = _this$state.highlighted;
          var _children = React.Children.map(children, function (_option, i) {
            var option = _option;
            var ref = _this3.optionsRefsSet.get(i);
            if (!ref) {
              ref = React.createRef();
              _this3.optionsRefsSet.set(i, ref);
            }
            return React.cloneElement(option, {
              onChange: handleChange,
              isActive: highlighted === i,
              isSelected: isSelected(option.props.value),
              multiSelect: multiSelect,
              ref: ref
            });
          });
          var searchBoxClassName = cx(searchBoxWrapper, _defineProperty({}, searchBoxScrolledStyle, isScrolled));
          return React.createElement(React.Fragment, null, searchBox && searchBoxProps && React.createElement("div", {
            className: searchBoxClassName
          }, React.createElement(Search, Object.assign({
            type: "small"
          }, searchBoxProps, {
            inputProps: Object.assign({}, searchBoxProps && searchBoxProps.inputProps, {
              onKeyDown: this.handleKeyPress,
              autoFocus: true
            })
          }))), !!React.Children.count(children) && React.createElement("div", {
            ref: this.optionRef,
            style: {
              paddingTop: searchBox ? searchBoxHeight : undefined
            },
            className: cx(optionsWrapper, className),
            role: multiSelect ? "group" : "radiogroup",
            "data-test-id": "optiongroup"
          }, _children));
        }
      }]);
      return OptionGroup;
    }(React.PureComponent);

    var optionGroupCheckBoxButtonWrapPadding = 20;
    var optionGroupCheckBoxButtonWrapPaddingTop = 10;
    var optionGroupCheckBoxWrap =
    /*#__PURE__*/
    css({
      maxHeight: "".concat(optionWrapperMaxHeight + searchBoxHeight + 2 * (initialPadding - onScrollPadding) + optionGroupCheckBoxButtonWrapPadding + optionGroupCheckBoxButtonWrapPaddingTop + smallButtonHeight),
      position: "relative"
    });
    var optionGroupCheckBoxButtonWrap =
    /*#__PURE__*/
    css(Object.assign({}, flexSpaceBetween, {
      padding: "".concat(optionGroupCheckBoxButtonWrapPadding),
      paddingTop: "".concat(optionGroupCheckBoxButtonWrapPaddingTop),
      backgroundColor: colors.white.base
    }));

    var OptionGroupCheckBox =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _inherits(OptionGroupCheckBox, _React$PureComponent);
      function OptionGroupCheckBox() {
        var _this;
        _classCallCheck(this, OptionGroupCheckBox);
        _this = _possibleConstructorReturn(this, _getPrototypeOf(OptionGroupCheckBox).apply(this, arguments));
        _this.isSelected = function (value) {
          var selected = _this.props.selected;
          return !!selected && selected.includes(value);
        };
        _this.handleChange = function (_ref, event) {
          var value = _ref.value;
          _this.props.onChange(getSelectedCheckboxes(value, _this.props.selected), {
            props: _this.props,
            event: event
          });
        };
        _this.onApply = function () {
          var _this$props = _this.props,
              onApply = _this$props.onApply,
              selected = _this$props.selected;
          if (onApply) onApply(selected || [], _this.props);
        };
        return _this;
      }
      _createClass(OptionGroupCheckBox, [{
        key: "render",
        value: function render() {
          var _a = this.props,
              onApply = _a.onApply,
              onClear = _a.onClear,
              isSelected = _a.isSelected,
              onChange = _a.onChange,
              rest = __rest(_a, ["onApply", "onClear", "isSelected", "onChange"]);
          return React.createElement("div", {
            className: optionGroupCheckBoxWrap
          }, React.createElement(OptionGroup, Object.assign({}, rest, {
            isSelected: isSelected || this.isSelected,
            handleChange: this.handleChange,
            multiSelect: true
          })), (onApply || onClear) && React.createElement("div", {
            className: optionGroupCheckBoxButtonWrap
          }, onClear && React.createElement(Button, {
            type: "secondary",
            onClick: onClear
          }, "Clear"), onApply && React.createElement(Button, {
            onClick: this.onApply
          }, "Apply")));
        }
      }]);
      return OptionGroupCheckBox;
    }(React.PureComponent);

    var OptionGroupRadio =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _inherits(OptionGroupRadio, _React$PureComponent);
      function OptionGroupRadio() {
        var _this;
        _classCallCheck(this, OptionGroupRadio);
        _this = _possibleConstructorReturn(this, _getPrototypeOf(OptionGroupRadio).apply(this, arguments));
        _this.isSelected = function (value) {
          return _this.props.selected === value;
        };
        _this.handleChange = function (_ref, event) {
          var value = _ref.value,
              checked = _ref.checked;
          var onChange = _this.props.onChange;
          onChange(checked ? value : undefined, {
            props: _this.props,
            event: event
          });
        };
        return _this;
      }
      _createClass(OptionGroupRadio, [{
        key: "render",
        value: function render() {
          var _a = this.props,
              selected = _a.selected,
              onChange = _a.onChange,
              isSelected = _a.isSelected,
              rest = __rest(_a, ["selected", "onChange", "isSelected"]);
          return React.createElement(OptionGroup, Object.assign({}, rest, {
            isSelected: isSelected || this.isSelected,
            handleChange: this.handleChange
          }));
        }
      }]);
      return OptionGroupRadio;
    }(React.PureComponent);

    function noop() {}
    function Select(props) {
      var className = props.className,
          placeholder = props.placeholder,
          required = props.required,
          errorMessage = props.errorMessage,
          value = props.value,
          dropdownClassName = props.dropdownClassName,
          inputProps = props.inputProps,
          fullWidthDropdown = props.fullWidthDropdown,
          _props$onDropdownTogg = props.onDropdownToggle,
          onDropdownToggle = _props$onDropdownTogg === void 0 ? noop : _props$onDropdownTogg,
          disabled = props.disabled,
          isSelected = props.isSelected;
      return React.createElement("div", {
        className: cx(selectWrapper, className, _defineProperty({}, relativePosition, fullWidthDropdown))
      }, React.createElement(DropDown, {
        dropDownClassName: cx(dropDownClass, dropdownClassName, _defineProperty({}, fullWidth, fullWidthDropdown)),
        onOutsideClick: function onOutsideClick(isOpen) {
          return onDropdownToggle(isOpen);
        },
        labelComponent: function labelComponent(_ref) {
          var toggleDropdown = _ref.toggleDropdown,
              isOpen = _ref.isOpen;
          var chevron = cx(chevronStyle, "pi", "pi-arrow-drop-down", {
            __pebble__select__open: isOpen
          });
          return React.createElement("div", {
            className: inputWrapper,
            onClick: disabled ? undefined : function () {
              toggleDropdown();
              onDropdownToggle(isOpen);
            }
          }, React.createElement(Input, Object.assign({
            className: selectInputWrapper,
            inputClassName: selectInput,
            placeholder: placeholder,
            value: value || "",
            onChange: noop,
            required: required,
            message: isOpen ? " " : "",
            errorMessage: errorMessage,
            readOnly: true,
            disabled: disabled
          }, inputProps)), React.createElement("i", {
            className: chevron
          }));
        }
      }, function (_ref2) {
        var toggle = _ref2.toggle,
            isOpen = _ref2.isOpen;
        var children = props.children,
            onClear = props.onClear,
            searchBox = props.searchBox,
            searchBoxProps = props.searchBoxProps;
        var commonProps = {
          isSelected: isSelected,
          onClear: onClear && function () {
            onClear();
            onDropdownToggle(isOpen);
            toggle();
          },
          searchBox: searchBox,
          searchBoxProps: searchBoxProps
        };
        if (props.multiSelect) {
          return React.createElement(OptionGroupCheckBox, Object.assign({
            selected: props.selected,
            onChange: function onChange(_value, extras) {
              props.onChange(_value, extras);
            },
            onApply: props.onApply && function (_value) {
              if (props.onApply) props.onApply(_value, props);
              onDropdownToggle(isOpen);
              toggle();
            }
          }, commonProps), children);
        } else {
          return React.createElement(OptionGroupRadio, Object.assign({
            selected: props.selected,
            onChange: function onChange(_value, extras) {
              if (_value) props.onChange(_value, extras);
              onDropdownToggle(isOpen);
              toggle();
            }
          }, commonProps), children);
        }
      }));
    }

    var sidebarWrapperStyle =
    /*#__PURE__*/
    css({
      backgroundColor: "rgba(16,23,33,0.3)",
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 99
    });
    var closeStyle =
    /*#__PURE__*/
    css({
      backgroundColor: colors.white.base,
      borderRadius: constants.borderRadius,
      height: 40,
      width: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      marginLeft: -60,
      marginTop: 20,
      position: "absolute",
      i: {
        fontSize: 14,
        color: colors.gray.darker
      },
      "@media (max-width: 800px)": {
        left: 80,
        marginTop: -45,
        borderRadius: 0,
        display: "flex",
        justifyContent: "flex-end",
        padding: "0 20px",
        i: {
          float: "right",
          color: colors.gray.dark,
          fontSize: 14
        }
      }
    });
    var sidebarStyle =
    /*#__PURE__*/
    css({
      transition: "transform 200ms ".concat(constants.animationCurve),
      backgroundColor: colors.white.base,
      position: "fixed",
      top: 0,
      bottom: 0,
      right: 0,
      willChange: "transform",
      zIndex: 99,
      "@media (max-width: 800px)": {
        width: "100%",
        paddingTop: 50
      },
      webkitOverflowScrolling: "touch"
    });

    var transitionProps = {
      from: {
        opacity: 0
      },
      enter: {
        opacity: 1
      },
      leave: {
        opacity: 0
      }
    };
    var SideBar =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _inherits(SideBar, _React$PureComponent);
      function SideBar() {
        _classCallCheck(this, SideBar);
        return _possibleConstructorReturn(this, _getPrototypeOf(SideBar).apply(this, arguments));
      }
      _createClass(SideBar, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          if (this.props.isOpen) document.body.classList.add(disableScrollY);
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          if (this.props.isOpen) {
            document.body.classList.add(disableScrollY);
          } else {
            document.body.classList.remove(disableScrollY);
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          if (this.props.isOpen) {
            document.body.classList.remove(disableScrollY);
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props = this.props,
              width = _this$props.width,
              isOpen = _this$props.isOpen,
              children = _this$props.children,
              onClose = _this$props.onClose,
              closeOnOutsideClick = _this$props.closeOnOutsideClick;
          var _sidebarOverride =
          /*#__PURE__*/
          css({
            width: width,
            transform: isOpen ? "translateX(0)" : "translateX(".concat(width, "px)")
          });
          var _sidebarStyle = cx(_sidebarOverride, sidebarStyle,
          /*#__PURE__*/
          css({
            transform: isOpen ? "translateX(0)" : "translateX(100%)"
          }));
          return React.createElement(React.Fragment, null, React.createElement(Transition, Object.assign({
            items: isOpen
          }, transitionProps, {
            config: animationConfig.config
          }), function (show) {
            return show && function (styles) {
              return React.createElement(extendedAnimated.div, {
                style: styles,
                className: sidebarWrapperStyle
              });
            };
          }), React.createElement(OutsideClick, {
            onOutsideClick: this.props.onClose,
            disabled: !closeOnOutsideClick || !isOpen
          }, React.createElement("div", {
            className: _sidebarStyle
          }, React.createElement(Transition, Object.assign({
            items: isOpen
          }, transitionProps), function (show) {
            return show && function (styles) {
              return React.createElement(extendedAnimated.div, {
                style: styles,
                className: closeStyle,
                onClick: onClose
              }, React.createElement("i", {
                className: "pi pi-close"
              }), React.createElement(Ink, null));
            };
          }), React.createElement("div", {
            style: {
              overflowY: "scroll",
              height: "100vh"
            }
          }, children))));
        }
      }]);
      return SideBar;
    }(React.PureComponent);
    SideBar.defaultProps = {
      closeOnOutsideClick: true
    };

    var ReactPropTypesSecret$2 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    var ReactPropTypesSecret_1$1 = ReactPropTypesSecret$2;

    var printWarning$2 = function() {};
    if (process.env.NODE_ENV !== 'production') {
      var ReactPropTypesSecret$3 = ReactPropTypesSecret_1$1;
      var loggedTypeFailures$1 = {};
      printWarning$2 = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {}
      };
    }
    function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
      if (process.env.NODE_ENV !== 'production') {
        for (var typeSpecName in typeSpecs) {
          if (typeSpecs.hasOwnProperty(typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== 'function') {
                var err = Error(
                  (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
                  'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
                );
                err.name = 'Invariant Violation';
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$3);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning$2(
                (componentName || 'React class') + ': type specification of ' +
                location + ' `' + typeSpecName + '` is invalid; the type checker ' +
                'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
                'You may have forgotten to pass an argument to the type checker ' +
                'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
                'shape all require an argument).'
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures$1)) {
              loggedTypeFailures$1[error.message] = true;
              var stack = getStack ? getStack() : '';
              printWarning$2(
                'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
              );
            }
          }
        }
      }
    }
    var checkPropTypes_1$1 = checkPropTypes$1;

    var printWarning$3 = function() {};
    if (process.env.NODE_ENV !== 'production') {
      printWarning$3 = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {}
      };
    }
    function emptyFunctionThatReturnsNull$1() {
      return null;
    }
    var factoryWithTypeCheckers$1 = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = '@@iterator';
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
          return iteratorFn;
        }
      }
      var ANONYMOUS = '<<anonymous>>';
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker,
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message) {
        this.message = message;
        this.stack = '';
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (process.env.NODE_ENV !== 'production') {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret_1$1) {
            if (throwOnDirectAccess) {
              var err = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
                'Use `PropTypes.checkPropTypes()` to call them. ' +
                'Read more at http://fb.me/use-check-prop-types'
              );
              err.name = 'Invariant Violation';
              throw err;
            } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
              var cacheKey = componentName + ':' + propName;
              if (
                !manualPropTypeCallCache[cacheKey] &&
                manualPropTypeWarningCount < 3
              ) {
                printWarning$3(
                  'You are manually calling a React.PropTypes validation ' +
                  'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
                  'and will throw in the standalone `prop-types` package. ' +
                  'You may be seeing this warning due to a third-party PropTypes ' +
                  'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
              }
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull$1);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== 'function') {
            return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1$1);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          process.env.NODE_ENV !== 'production' ? printWarning$3('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
          return emptyFunctionThatReturnsNull$1;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== 'function') {
            return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
          }
          for (var key in propValue) {
            if (propValue.hasOwnProperty(key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1$1);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          process.env.NODE_ENV !== 'production' ? printWarning$3('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
          return emptyFunctionThatReturnsNull$1;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== 'function') {
            printWarning$3(
              'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
              'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
            );
            return emptyFunctionThatReturnsNull$1;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
            var checker = arrayOfTypeCheckers[i];
            if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1$1) == null) {
              return null;
            }
          }
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (!checker) {
              continue;
            }
            var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1$1);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
          }
          var allKeys = objectAssign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (!checker) {
              return new PropTypeError(
                'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
                '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
                '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1$1);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case 'number':
          case 'string':
          case 'undefined':
            return true;
          case 'boolean':
            return !propValue;
          case 'object':
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === 'symbol') {
          return true;
        }
        if (propValue['@@toStringTag'] === 'Symbol') {
          return true;
        }
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return 'array';
        }
        if (propValue instanceof RegExp) {
          return 'object';
        }
        if (isSymbol(propType, propValue)) {
          return 'symbol';
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
          return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
          if (propValue instanceof Date) {
            return 'date';
          } else if (propValue instanceof RegExp) {
            return 'regexp';
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case 'array':
          case 'object':
            return 'an ' + type;
          case 'boolean':
          case 'date':
          case 'regexp':
            return 'a ' + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes_1$1;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };

    function emptyFunction$1() {}
    var factoryWithThrowingShims$1 = function() {
      function shim(props, propName, componentName, location, propFullName, secret) {
        if (secret === ReactPropTypesSecret_1$1) {
          return;
        }
        var err = new Error(
          'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
          'Use PropTypes.checkPropTypes() to call them. ' +
          'Read more at http://fb.me/use-check-prop-types'
        );
        err.name = 'Invariant Violation';
        throw err;
      }  shim.isRequired = shim;
      function getShim() {
        return shim;
      }  var ReactPropTypes = {
        array: shim,
        bool: shim,
        func: shim,
        number: shim,
        object: shim,
        string: shim,
        symbol: shim,
        any: shim,
        arrayOf: getShim,
        element: shim,
        instanceOf: getShim,
        node: shim,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim
      };
      ReactPropTypes.checkPropTypes = emptyFunction$1;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };

    var propTypes$2 = createCommonjsModule(function (module) {
    if (process.env.NODE_ENV !== 'production') {
      var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
        Symbol.for &&
        Symbol.for('react.element')) ||
        0xeac7;
      var isValidElement = function(object) {
        return typeof object === 'object' &&
          object !== null &&
          object.$$typeof === REACT_ELEMENT_TYPE;
      };
      var throwOnDirectAccess = true;
      module.exports = factoryWithTypeCheckers$1(isValidElement, throwOnDirectAccess);
    } else {
      module.exports = factoryWithThrowingShims$1();
    }
    });

    var SliderConstants = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var KEYS = exports.KEYS = {
      DOWN: 40,
      END: 35,
      ESC: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      RIGHT: 39,
      UP: 38
    };
    var PERCENT_EMPTY = exports.PERCENT_EMPTY = 0;
    var PERCENT_FULL = exports.PERCENT_FULL = 100;
    });
    unwrapExports(SliderConstants);
    var SliderConstants_1 = SliderConstants.KEYS;
    var SliderConstants_2 = SliderConstants.PERCENT_EMPTY;
    var SliderConstants_3 = SliderConstants.PERCENT_FULL;

    var linear = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = {
      getPosition: function () {
        function getPosition(value, min, max) {
          return (value - min) / (max - min) * 100;
        }
        return getPosition;
      }(),
      getValue: function () {
        function getValue(pos, min, max) {
          var decimal = pos / 100;
          if (pos === 0) {
            return min;
          } else if (pos === 100) {
            return max;
          }
          return Math.round((max - min) * decimal + min);
        }
        return getValue;
      }()
    };
    });
    unwrapExports(linear);

    var Slider = createCommonjsModule(function (module, exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
    var _react2 = _interopRequireDefault(React__default);
    var _propTypes2 = _interopRequireDefault(propTypes$2);
    var SliderConstants$1 = _interopRequireWildcard(SliderConstants);
    var _linear2 = _interopRequireDefault(linear);
    function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
    function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
    function getClassName(props) {
      var orientation = props.orientation === 'vertical' ? 'rheostat-vertical' : 'rheostat-horizontal';
      return ['rheostat', orientation].concat(props.className.split(' ')).join(' ');
    }
    var has = Object.prototype.hasOwnProperty;
    var PropTypeArrOfNumber = _propTypes2['default'].arrayOf(_propTypes2['default'].number);
    var PropTypeReactComponent = _propTypes2['default'].oneOfType([_propTypes2['default'].func, _propTypes2['default'].string]);
    function getHandleFor(ev) {
      return Number(ev.currentTarget.getAttribute('data-handle-key'));
    }
    function killEvent(ev) {
      ev.stopPropagation();
      ev.preventDefault();
    }
    var Button = function (_React$Component) {
      _inherits(Button, _React$Component);
      function Button() {
        _classCallCheck(this, Button);
        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
      }
      _createClass(Button, [{
        key: 'render',
        value: function () {
          function render() {
            return _react2['default'].createElement('button', _extends({}, this.props, { type: 'button' }));
          }
          return render;
        }()
      }]);
      return Button;
    }(_react2['default'].Component);
    var propTypes = {
      algorithm: _propTypes2['default'].shape({
        getValue: _propTypes2['default'].func,
        getPosition: _propTypes2['default'].func
      }),
      children: _propTypes2['default'].node,
      className: _propTypes2['default'].string,
      disabled: _propTypes2['default'].bool,
      handle: PropTypeReactComponent,
      max: _propTypes2['default'].number,
      min: _propTypes2['default'].number,
      onClick: _propTypes2['default'].func,
      onChange: _propTypes2['default'].func,
      onKeyPress: _propTypes2['default'].func,
      onSliderDragEnd: _propTypes2['default'].func,
      onSliderDragMove: _propTypes2['default'].func,
      onSliderDragStart: _propTypes2['default'].func,
      onValuesUpdated: _propTypes2['default'].func,
      orientation: _propTypes2['default'].oneOf(['horizontal', 'vertical']),
      pitComponent: PropTypeReactComponent,
      pitPoints: PropTypeArrOfNumber,
      progressBar: PropTypeReactComponent,
      snap: _propTypes2['default'].bool,
      snapPoints: PropTypeArrOfNumber,
      getNextHandlePosition: _propTypes2['default'].func,
      values: PropTypeArrOfNumber
    };
    var defaultProps = {
      algorithm: _linear2['default'],
      className: '',
      children: null,
      disabled: false,
      handle: Button,
      max: SliderConstants$1.PERCENT_FULL,
      min: SliderConstants$1.PERCENT_EMPTY,
      onClick: null,
      onChange: null,
      onKeyPress: null,
      onSliderDragEnd: null,
      onSliderDragMove: null,
      onSliderDragStart: null,
      onValuesUpdated: null,
      orientation: 'horizontal',
      pitComponent: null,
      pitPoints: [],
      progressBar: 'div',
      snap: false,
      snapPoints: [],
      getNextHandlePosition: null,
      values: [SliderConstants$1.PERCENT_EMPTY]
    };
    var Rheostat = function (_React$Component2) {
      _inherits(Rheostat, _React$Component2);
      function Rheostat(props) {
        _classCallCheck(this, Rheostat);
        var _this2 = _possibleConstructorReturn(this, (Rheostat.__proto__ || Object.getPrototypeOf(Rheostat)).call(this, props));
        var _this2$props = _this2.props,
            algorithm = _this2$props.algorithm,
            max = _this2$props.max,
            min = _this2$props.min,
            values = _this2$props.values;
        _this2.state = {
          className: getClassName(_this2.props),
          handlePos: values.map(function (value) {
            return algorithm.getPosition(value, min, max);
          }),
          handleDimensions: 0,
          sliderBox: {},
          slidingIndex: null,
          values: values
        };
        _this2.getPublicState = _this2.getPublicState.bind(_this2);
        _this2.getSliderBoundingBox = _this2.getSliderBoundingBox.bind(_this2);
        _this2.getProgressStyle = _this2.getProgressStyle.bind(_this2);
        _this2.getMinValue = _this2.getMinValue.bind(_this2);
        _this2.getMaxValue = _this2.getMaxValue.bind(_this2);
        _this2.getHandleDimensions = _this2.getHandleDimensions.bind(_this2);
        _this2.getClosestSnapPoint = _this2.getClosestSnapPoint.bind(_this2);
        _this2.getSnapPosition = _this2.getSnapPosition.bind(_this2);
        _this2.getNextPositionForKey = _this2.getNextPositionForKey.bind(_this2);
        _this2.getNextState = _this2.getNextState.bind(_this2);
        _this2.handleClick = _this2.handleClick.bind(_this2);
        _this2.getClosestHandle = _this2.getClosestHandle.bind(_this2);
        _this2.setStartSlide = _this2.setStartSlide.bind(_this2);
        _this2.startMouseSlide = _this2.startMouseSlide.bind(_this2);
        _this2.startTouchSlide = _this2.startTouchSlide.bind(_this2);
        _this2.handleMouseSlide = _this2.handleMouseSlide.bind(_this2);
        _this2.handleTouchSlide = _this2.handleTouchSlide.bind(_this2);
        _this2.handleSlide = _this2.handleSlide.bind(_this2);
        _this2.endSlide = _this2.endSlide.bind(_this2);
        _this2.handleKeydown = _this2.handleKeydown.bind(_this2);
        _this2.validatePosition = _this2.validatePosition.bind(_this2);
        _this2.validateValues = _this2.validateValues.bind(_this2);
        _this2.canMove = _this2.canMove.bind(_this2);
        _this2.fireChangeEvent = _this2.fireChangeEvent.bind(_this2);
        _this2.slideTo = _this2.slideTo.bind(_this2);
        _this2.updateNewValues = _this2.updateNewValues.bind(_this2);
        _this2.setRef = _this2.setRef.bind(_this2);
        _this2.invalidatePitStyleCache = _this2.invalidatePitStyleCache.bind(_this2);
        _this2.pitStyleCache = {};
        return _this2;
      }
      _createClass(Rheostat, [{
        key: 'componentWillReceiveProps',
        value: function () {
          function componentWillReceiveProps(nextProps) {
            var _props = this.props,
                className = _props.className,
                disabled = _props.disabled,
                min = _props.min,
                max = _props.max,
                orientation = _props.orientation,
                pitPoints = _props.pitPoints,
                algorithm = _props.algorithm;
            var _state = this.state,
                values = _state.values,
                slidingIndex = _state.slidingIndex;
            var minMaxChanged = nextProps.min !== min || nextProps.max !== max;
            var valuesChanged = values.length !== nextProps.values.length || values.some(function (value, idx) {
              return nextProps.values[idx] !== value;
            });
            var orientationChanged = nextProps.className !== className || nextProps.orientation !== orientation;
            var algorithmChanged = nextProps.algorithm !== algorithm;
            var pitPointsChanged = nextProps.pitPoints !== pitPoints;
            var willBeDisabled = nextProps.disabled && !disabled;
            if (orientationChanged) {
              this.setState({
                className: getClassName(nextProps)
              });
            }
            if (minMaxChanged || valuesChanged) this.updateNewValues(nextProps);
            if (minMaxChanged || pitPointsChanged || orientationChanged || algorithmChanged) {
              this.invalidatePitStyleCache();
            }
            if (willBeDisabled && slidingIndex !== null) {
              this.endSlide();
            }
          }
          return componentWillReceiveProps;
        }()
      }, {
        key: 'getPublicState',
        value: function () {
          function getPublicState() {
            var _props2 = this.props,
                min = _props2.min,
                max = _props2.max;
            var values = this.state.values;
            return { max: max, min: min, values: values };
          }
          return getPublicState;
        }()
      }, {
        key: 'getSliderBoundingBox',
        value: function () {
          function getSliderBoundingBox() {
            var rheostat = this.rheostat;
            var node = rheostat.getDOMNode ? rheostat.getDOMNode() : rheostat;
            var rect = node.getBoundingClientRect();
            return {
              height: rect.height || node.clientHeight,
              left: rect.left,
              top: rect.top,
              width: rect.width || node.clientWidth
            };
          }
          return getSliderBoundingBox;
        }()
      }, {
        key: 'getProgressStyle',
        value: function () {
          function getProgressStyle(idx) {
            var orientation = this.props.orientation;
            var handlePos = this.state.handlePos;
            var value = handlePos[idx];
            if (idx === 0) {
              return orientation === 'vertical' ? { height: String(value) + '%', top: 0 } : { left: 0, width: String(value) + '%' };
            }
            var prevValue = handlePos[idx - 1];
            var diffValue = value - prevValue;
            return orientation === 'vertical' ? { height: diffValue + '%', top: String(prevValue) + '%' } : { left: String(prevValue) + '%', width: diffValue + '%' };
          }
          return getProgressStyle;
        }()
      }, {
        key: 'getMinValue',
        value: function () {
          function getMinValue(idx) {
            var min = this.props.min;
            var values = this.state.values;
            return values[idx - 1] ? Math.max(min, values[idx - 1]) : min;
          }
          return getMinValue;
        }()
      }, {
        key: 'getMaxValue',
        value: function () {
          function getMaxValue(idx) {
            var max = this.props.max;
            var values = this.state.values;
            return values[idx + 1] ? Math.min(max, values[idx + 1]) : max;
          }
          return getMaxValue;
        }()
      }, {
        key: 'getHandleDimensions',
        value: function () {
          function getHandleDimensions(ev, sliderBox) {
            var handleNode = ev.currentTarget || null;
            if (!handleNode) return 0;
            return this.props.orientation === 'vertical' ? handleNode.clientHeight / sliderBox.height * SliderConstants$1.PERCENT_FULL / 2 : handleNode.clientWidth / sliderBox.width * SliderConstants$1.PERCENT_FULL / 2;
          }
          return getHandleDimensions;
        }()
      }, {
        key: 'getClosestSnapPoint',
        value: function () {
          function getClosestSnapPoint(value) {
            var snapPoints = this.props.snapPoints;
            if (!snapPoints.length) return value;
            return snapPoints.reduce(function (snapTo, snap) {
              return Math.abs(snapTo - value) < Math.abs(snap - value) ? snapTo : snap;
            });
          }
          return getClosestSnapPoint;
        }()
      }, {
        key: 'getSnapPosition',
        value: function () {
          function getSnapPosition(positionPercent) {
            var _props3 = this.props,
                algorithm = _props3.algorithm,
                max = _props3.max,
                min = _props3.min,
                snap = _props3.snap;
            if (!snap) return positionPercent;
            var value = algorithm.getValue(positionPercent, min, max);
            var snapValue = this.getClosestSnapPoint(value);
            return algorithm.getPosition(snapValue, min, max);
          }
          return getSnapPosition;
        }()
      }, {
        key: 'getNextPositionForKey',
        value: function () {
          function getNextPositionForKey(idx, keyCode) {
            var _stepMultiplier;
            var _state2 = this.state,
                handlePos = _state2.handlePos,
                values = _state2.values;
            var _props4 = this.props,
                algorithm = _props4.algorithm,
                max = _props4.max,
                min = _props4.min,
                snapPoints = _props4.snapPoints,
                shouldSnap = _props4.snap;
            var proposedValue = values[idx];
            var proposedPercentage = handlePos[idx];
            var originalPercentage = proposedPercentage;
            var stepValue = 1;
            if (max >= 100) {
              proposedPercentage = Math.round(proposedPercentage);
            } else {
              stepValue = 100 / (max - min);
            }
            var currentIndex = null;
            if (shouldSnap) {
              currentIndex = snapPoints.indexOf(this.getClosestSnapPoint(values[idx]));
            }
            var stepMultiplier = (_stepMultiplier = {}, _defineProperty(_stepMultiplier, SliderConstants$1.KEYS.LEFT, function (v) {
              return v * -1;
            }), _defineProperty(_stepMultiplier, SliderConstants$1.KEYS.RIGHT, function (v) {
              return v * 1;
            }), _defineProperty(_stepMultiplier, SliderConstants$1.KEYS.UP, function (v) {
              return v * 1;
            }), _defineProperty(_stepMultiplier, SliderConstants$1.KEYS.DOWN, function (v) {
              return v * -1;
            }), _defineProperty(_stepMultiplier, SliderConstants$1.KEYS.PAGE_DOWN, function (v) {
              return v > 1 ? -v : v * -10;
            }), _defineProperty(_stepMultiplier, SliderConstants$1.KEYS.PAGE_UP, function (v) {
              return v > 1 ? v : v * 10;
            }), _stepMultiplier);
            if (has.call(stepMultiplier, keyCode)) {
              proposedPercentage += stepMultiplier[keyCode](stepValue);
              if (shouldSnap) {
                if (proposedPercentage > originalPercentage) {
                  if (currentIndex < snapPoints.length - 1) {
                    proposedValue = snapPoints[currentIndex + 1];
                  }
                } else if (currentIndex > 0) {
                  proposedValue = snapPoints[currentIndex - 1];
                }
              }
            } else if (keyCode === SliderConstants$1.KEYS.HOME) {
              proposedPercentage = SliderConstants$1.PERCENT_EMPTY;
              if (shouldSnap) {
                var _snapPoints = _slicedToArray(snapPoints, 1);
                proposedValue = _snapPoints[0];
              }
            } else if (keyCode === SliderConstants$1.KEYS.END) {
              proposedPercentage = SliderConstants$1.PERCENT_FULL;
              if (shouldSnap) {
                proposedValue = snapPoints[snapPoints.length - 1];
              }
            } else {
              return null;
            }
            return shouldSnap ? algorithm.getPosition(proposedValue, min, max) : proposedPercentage;
          }
          return getNextPositionForKey;
        }()
      }, {
        key: 'getNextState',
        value: function () {
          function getNextState(idx, proposedPosition) {
            var handlePos = this.state.handlePos;
            var _props5 = this.props,
                max = _props5.max,
                min = _props5.min,
                algorithm = _props5.algorithm;
            var actualPosition = this.validatePosition(idx, proposedPosition);
            var nextHandlePos = handlePos.map(function (pos, index) {
              return index === idx ? actualPosition : pos;
            });
            return {
              handlePos: nextHandlePos,
              values: nextHandlePos.map(function (pos) {
                return algorithm.getValue(pos, min, max);
              })
            };
          }
          return getNextState;
        }()
      }, {
        key: 'getClosestHandle',
        value: function () {
          function getClosestHandle(positionPercent) {
            var handlePos = this.state.handlePos;
            return handlePos.reduce(function (closestIdx, node, idx) {
              var challenger = Math.abs(handlePos[idx] - positionPercent);
              var current = Math.abs(handlePos[closestIdx] - positionPercent);
              return challenger < current ? idx : closestIdx;
            }, 0);
          }
          return getClosestHandle;
        }()
      }, {
        key: 'setStartSlide',
        value: function () {
          function setStartSlide(ev ) {
            var sliderBox = this.getSliderBoundingBox();
            this.setState({
              handleDimensions: this.getHandleDimensions(ev, sliderBox),
              sliderBox: sliderBox,
              slidingIndex: getHandleFor(ev)
            });
          }
          return setStartSlide;
        }()
      }, {
        key: 'setRef',
        value: function () {
          function setRef(ref) {
            this.rheostat = ref;
          }
          return setRef;
        }()
      }, {
        key: 'startMouseSlide',
        value: function () {
          function startMouseSlide(ev) {
            this.setStartSlide(ev, ev.clientX, ev.clientY);
            if (typeof document.addEventListener === 'function') {
              document.addEventListener('mousemove', this.handleMouseSlide, false);
              document.addEventListener('mouseup', this.endSlide, false);
            } else {
              document.attachEvent('onmousemove', this.handleMouseSlide);
              document.attachEvent('onmouseup', this.endSlide);
            }
            killEvent(ev);
          }
          return startMouseSlide;
        }()
      }, {
        key: 'startTouchSlide',
        value: function () {
          function startTouchSlide(ev) {
            var onSliderDragStart = this.props.onSliderDragStart;
            if (ev.changedTouches.length > 1) return;
            var touch = ev.changedTouches[0];
            this.setStartSlide(ev, touch.clientX, touch.clientY);
            document.addEventListener('touchmove', this.handleTouchSlide, false);
            document.addEventListener('touchend', this.endSlide, false);
            if (onSliderDragStart) onSliderDragStart();
            killEvent(ev);
          }
          return startTouchSlide;
        }()
      }, {
        key: 'handleMouseSlide',
        value: function () {
          function handleMouseSlide(ev) {
            var slidingIndex = this.state.slidingIndex;
            if (slidingIndex === null) return;
            this.handleSlide(ev.clientX, ev.clientY);
            killEvent(ev);
          }
          return handleMouseSlide;
        }()
      }, {
        key: 'handleTouchSlide',
        value: function () {
          function handleTouchSlide(ev) {
            var slidingIndex = this.state.slidingIndex;
            if (slidingIndex === null) return;
            if (ev.changedTouches.length > 1) {
              this.endSlide();
              return;
            }
            var touch = ev.changedTouches[0];
            this.handleSlide(touch.clientX, touch.clientY);
            killEvent(ev);
          }
          return handleTouchSlide;
        }()
      }, {
        key: 'handleSlide',
        value: function () {
          function handleSlide(x, y) {
            var _props6 = this.props,
                orientation = _props6.orientation,
                onSliderDragMove = _props6.onSliderDragMove;
            var _state3 = this.state,
                idx = _state3.slidingIndex,
                sliderBox = _state3.sliderBox;
            var positionPercent = orientation === 'vertical' ? (y - sliderBox.top) / sliderBox.height * SliderConstants$1.PERCENT_FULL : (x - sliderBox.left) / sliderBox.width * SliderConstants$1.PERCENT_FULL;
            this.slideTo(idx, positionPercent);
            if (this.canMove(idx, positionPercent)) {
              if (onSliderDragMove) onSliderDragMove();
            }
          }
          return handleSlide;
        }()
      }, {
        key: 'endSlide',
        value: function () {
          function endSlide() {
            var _this3 = this;
            var _props7 = this.props,
                onSliderDragEnd = _props7.onSliderDragEnd,
                snap = _props7.snap;
            var _state4 = this.state,
                slidingIndex = _state4.slidingIndex,
                handlePos = _state4.handlePos;
            this.setState({ slidingIndex: null });
            if (typeof document.removeEventListener === 'function') {
              document.removeEventListener('mouseup', this.endSlide, false);
              document.removeEventListener('touchend', this.endSlide, false);
              document.removeEventListener('touchmove', this.handleTouchSlide, false);
              document.removeEventListener('mousemove', this.handleMouseSlide, false);
            } else {
              document.detachEvent('onmousemove', this.handleMouseSlide);
              document.detachEvent('onmouseup', this.endSlide);
            }
            if (onSliderDragEnd) onSliderDragEnd();
            if (snap) {
              var positionPercent = this.getSnapPosition(handlePos[slidingIndex]);
              this.slideTo(slidingIndex, positionPercent, function () {
                return _this3.fireChangeEvent();
              });
            } else {
              this.fireChangeEvent();
            }
          }
          return endSlide;
        }()
      }, {
        key: 'handleClick',
        value: function () {
          function handleClick(ev) {
            var _this4 = this;
            if (ev.target.getAttribute('data-handle-key')) {
              return;
            }
            var _props8 = this.props,
                orientation = _props8.orientation,
                onClick = _props8.onClick;
            var sliderBox = this.getSliderBoundingBox();
            var positionDecimal = orientation === 'vertical' ? (ev.clientY - sliderBox.top) / sliderBox.height : (ev.clientX - sliderBox.left) / sliderBox.width;
            var positionPercent = positionDecimal * SliderConstants$1.PERCENT_FULL;
            var handleId = this.getClosestHandle(positionPercent);
            var validPositionPercent = this.getSnapPosition(positionPercent);
            this.slideTo(handleId, validPositionPercent, function () {
              return _this4.fireChangeEvent();
            });
            if (onClick) onClick();
          }
          return handleClick;
        }()
      }, {
        key: 'handleKeydown',
        value: function () {
          function handleKeydown(ev) {
            var _this5 = this;
            var idx = getHandleFor(ev);
            if (ev.keyCode === SliderConstants$1.KEYS.ESC) {
              ev.currentTarget.blur();
              return;
            }
            var proposedPercentage = this.getNextPositionForKey(idx, ev.keyCode);
            if (proposedPercentage === null) return;
            if (this.canMove(idx, proposedPercentage)) {
              this.slideTo(idx, proposedPercentage, function () {
                return _this5.fireChangeEvent();
              });
              var onKeyPress = this.props.onKeyPress;
              if (onKeyPress) onKeyPress();
            }
            killEvent(ev);
          }
          return handleKeydown;
        }()
      }, {
        key: 'userAdjustPosition',
        value: function () {
          function userAdjustPosition(idx, proposedPosition) {
            var getNextHandlePosition = this.props.getNextHandlePosition;
            var nextPosition = proposedPosition;
            if (getNextHandlePosition) {
              nextPosition = parseFloat(getNextHandlePosition(idx, proposedPosition));
              if (Number.isNaN(nextPosition) || nextPosition < SliderConstants$1.PERCENT_EMPTY || nextPosition > SliderConstants$1.PERCENT_FULL) {
                throw new TypeError('getNextHandlePosition returned invalid position. Valid positions are floats between 0 and 100');
              }
            }
            return nextPosition;
          }
          return userAdjustPosition;
        }()
      }, {
        key: 'validatePosition',
        value: function () {
          function validatePosition(idx, proposedPosition) {
            var _state5 = this.state,
                handlePos = _state5.handlePos,
                handleDimensions = _state5.handleDimensions;
            var nextPosition = this.userAdjustPosition(idx, proposedPosition);
            return Math.max(Math.min(nextPosition, handlePos[idx + 1] !== undefined ? handlePos[idx + 1] - handleDimensions : SliderConstants$1.PERCENT_FULL
            ), handlePos[idx - 1] !== undefined ? handlePos[idx - 1] + handleDimensions : SliderConstants$1.PERCENT_EMPTY
            );
          }
          return validatePosition;
        }()
      }, {
        key: 'validateValues',
        value: function () {
          function validateValues(proposedValues, props) {
            var _ref = props || this.props,
                max = _ref.max,
                min = _ref.min;
            return proposedValues.map(function (value, idx, values) {
              var realValue = Math.max(Math.min(value, max), min);
              if (values.length && realValue < values[idx - 1]) {
                return values[idx - 1];
              }
              return realValue;
            });
          }
          return validateValues;
        }()
      }, {
        key: 'canMove',
        value: function () {
          function canMove(idx, proposedPosition) {
            var _state6 = this.state,
                handlePos = _state6.handlePos,
                handleDimensions = _state6.handleDimensions;
            if (proposedPosition < SliderConstants$1.PERCENT_EMPTY) return false;
            if (proposedPosition > SliderConstants$1.PERCENT_FULL) return false;
            var nextHandlePosition = handlePos[idx + 1] !== undefined ? handlePos[idx + 1] - handleDimensions : Infinity;
            if (proposedPosition > nextHandlePosition) return false;
            var prevHandlePosition = handlePos[idx - 1] !== undefined ? handlePos[idx - 1] + handleDimensions : -Infinity;
            if (proposedPosition < prevHandlePosition) return false;
            return true;
          }
          return canMove;
        }()
      }, {
        key: 'fireChangeEvent',
        value: function () {
          function fireChangeEvent() {
            var onChange = this.props.onChange;
            if (onChange) onChange(this.getPublicState());
          }
          return fireChangeEvent;
        }()
      }, {
        key: 'slideTo',
        value: function () {
          function slideTo(idx, proposedPosition, onAfterSet) {
            var _this6 = this;
            var nextState = this.getNextState(idx, proposedPosition);
            this.setState(nextState, function () {
              var onValuesUpdated = _this6.props.onValuesUpdated;
              if (onValuesUpdated) onValuesUpdated(_this6.getPublicState());
              if (onAfterSet) onAfterSet();
            });
          }
          return slideTo;
        }()
      }, {
        key: 'updateNewValues',
        value: function () {
          function updateNewValues(nextProps) {
            var _this7 = this;
            var slidingIndex = this.state.slidingIndex;
            if (slidingIndex !== null) {
              return;
            }
            var max = nextProps.max,
                min = nextProps.min,
                values = nextProps.values;
            var algorithm = this.props.algorithm;
            var nextValues = this.validateValues(values, nextProps);
            this.setState({
              handlePos: nextValues.map(function (value) {
                return algorithm.getPosition(value, min, max);
              }),
              values: nextValues
            }, function () {
              return _this7.fireChangeEvent();
            });
          }
          return updateNewValues;
        }()
      }, {
        key: 'invalidatePitStyleCache',
        value: function () {
          function invalidatePitStyleCache() {
            this.pitStyleCache = {};
          }
          return invalidatePitStyleCache;
        }()
      }, {
        key: 'render',
        value: function () {
          function render() {
            var _this8 = this;
            var _props9 = this.props,
                algorithm = _props9.algorithm,
                children = _props9.children,
                disabled = _props9.disabled,
                Handle = _props9.handle,
                max = _props9.max,
                min = _props9.min,
                orientation = _props9.orientation,
                PitComponent = _props9.pitComponent,
                pitPoints = _props9.pitPoints,
                ProgressBar = _props9.progressBar;
            var _state7 = this.state,
                className = _state7.className,
                handlePos = _state7.handlePos,
                values = _state7.values;
            return (
              _react2['default'].createElement(
                'div',
                {
                  className: className,
                  ref: this.setRef,
                  onClick: !disabled ? this.handleClick : undefined,
                  style: { position: 'relative' }
                },
                _react2['default'].createElement('div', { className: 'rheostat-background' }),
                handlePos.map(function (pos, idx) {
                  var handleStyle = orientation === 'vertical' ? { top: String(pos) + '%', position: 'absolute' } : { left: String(pos) + '%', position: 'absolute' };
                  return _react2['default'].createElement(Handle, {
                    'aria-valuemax': _this8.getMaxValue(idx),
                    'aria-valuemin': _this8.getMinValue(idx),
                    'aria-valuenow': values[idx],
                    'aria-disabled': disabled,
                    'data-handle-key': idx,
                    className: 'rheostat-handle',
                    key: 'handle-' + String(idx),
                    onClick: _this8.killEvent,
                    onKeyDown: !disabled ? _this8.handleKeydown : undefined,
                    onMouseDown: !disabled ? _this8.startMouseSlide : undefined,
                    onTouchStart: !disabled ? _this8.startTouchSlide : undefined,
                    role: 'slider',
                    style: handleStyle,
                    tabIndex: 0
                  });
                }),
                handlePos.map(function (node, idx, arr) {
                  if (idx === 0 && arr.length > 1) {
                    return null;
                  }
                  return _react2['default'].createElement(ProgressBar, {
                    className: 'rheostat-progress',
                    key: 'progress-bar-' + String(idx),
                    style: _this8.getProgressStyle(idx)
                  });
                }),
                PitComponent && pitPoints.map(function (n) {
                  var pitStyle = _this8.pitStyleCache[n];
                  if (!pitStyle) {
                    var pos = algorithm.getPosition(n, min, max);
                    pitStyle = orientation === 'vertical' ? { top: String(pos) + '%', position: 'absolute' } : { left: String(pos) + '%', position: 'absolute' };
                    _this8.pitStyleCache[n] = pitStyle;
                  }
                  return _react2['default'].createElement(
                    PitComponent,
                    { key: 'pit-' + String(n), style: pitStyle },
                    n
                  );
                }),
                children
              )
            );
          }
          return render;
        }()
      }]);
      return Rheostat;
    }(_react2['default'].Component);
    Rheostat.propTypes = propTypes;
    Rheostat.defaultProps = defaultProps;
    exports['default'] = Rheostat;
    });
    var Rheostat = unwrapExports(Slider);

    var rheostatOverrides = "\n.rheostat {\n  overflow: visible;\n}\n\n.rheostat-background {\n  background-color: ".concat(colors.violet.lightest, ";\n  position: relative;\n  border-radius: 2px;\n  overflow: hidden;\n  height: 4px;\n  top: 0;\n  width: 100%;\n}\n\n.rheostat-progress {\n  background-color: ").concat(colors.violet.base, ";\n  position: absolute;\n  height: 4px;\n  border-radius: 2px;\n  top: 0;\n}\n\n.rheostat-handle {\n  background-color: ").concat(colors.violet.base, ";\n  border-radius: 50%;\n  height: 20px;\n  outline: none;\n  z-index: 2;\n  width: 20px;\n  margin-left: -10px;\n  top: -8px;\n  border: 0;\n  cursor: pointer;\n  box-shadow: ").concat(constants.boxShadow.xElevated, ";\n}\n\n.__pebble__slider__large .rheostat-handle {\n  width: 24px;\n  height: 24px;\n  margin-left: -12px;\n  top: -10px;\n}\n\n.rheostat-handle:hover {\n  background-color: ").concat(colors.violet.light, ";\n}\n\n.__pebble__slider__disabled .rheostat-handle {\n  background-color: ").concat(colors.violet.lighter, ";\n  cursor: inherit;\n}\n\n.rheostat-horizontal {\n  height: 4px;\n}\n");
    var sliderHeader =
    /*#__PURE__*/
    css(Object.assign({}, flexSpaceBetween, {
      marginBottom: 25,
      alignItems: "center",
      ".__pebble__slider__large &": {
        marginBottom: 35
      }
    }));

    var rheostatStylesOverriden = false;
    function overrideRheostatStyles() {
      if (rheostatStylesOverriden) return;
      injectGlobal(rheostatOverrides);
      rheostatStylesOverriden = true;
    }
    var Slider$1 = function Slider(_a) {
      var className = _a.className,
          large = _a.large,
          title = _a.title,
          disabled = _a.disabled,
          valueLabelExtractor = _a.valueLabelExtractor,
          values = _a.values,
          onValuesUpdated = _a.onValuesUpdated,
          rest = __rest(_a, ["className", "large", "title", "disabled", "valueLabelExtractor", "values", "onValuesUpdated"]);
      overrideRheostatStyles();
      var mainClass = cx(className, {
        __pebble__slider__disabled: disabled,
        __pebble__slider__large: large
      });
      var _values = Array.isArray(values) ? values.slice(0) : values || [];
      if (Array.isArray(values)) {
        if (!values[0] && rest.min) {
          _values[0] = rest.min;
        }
        if (!values[1] && rest.max) {
          _values[1] = rest.max;
        }
      }
      return React.createElement("div", {
        className: mainClass
      }, React.createElement("div", {
        className: sliderHeader
      }, React.createElement("div", {
        style: large ? typography.normal.light : typography.normal.light
      }, title), React.createElement("div", {
        style: large ? typography.l.regular : typography.normal.regular
      }, valueLabelExtractor())), React.createElement(Rheostat, Object.assign({
        "aria-valuemax": rest.max,
        "aria-valuemin": rest.min,
        disabled: disabled,
        onValuesUpdated: onValuesUpdated && function (args) {
          var min = args.min,
              max = args.max;
          if (Array.isArray(args.values) && args.values[0] === rest.min && args.values[1] === rest.max) {
            onValuesUpdated({
              min: min,
              max: max,
              values: []
            });
          } else {
            onValuesUpdated(args);
          }
        },
        values: _values
      }, rest)));
    };

    var headStyle =
    /*#__PURE__*/
    css({
      display: "flex",
      flexDirection: "row",
      position: "relative"
    });
    var headSection =
    /*#__PURE__*/
    css({
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "pointer",
      "> div": {
        fontSize: 14
      }
    });
    var headingStyle =
    /*#__PURE__*/
    css(Object.assign({}, typography.normal.regular));
    var dotStyle$1 =
    /*#__PURE__*/
    css({
      height: 20,
      width: 20,
      backgroundColor: colors.gray.base,
      borderRadius: "50%",
      border: "5px solid white",
      marginTop: 18,
      position: "relative",
      zIndex: 9
    });
    var activeDotStyle =
    /*#__PURE__*/
    css({
      backgroundColor: colors.violet.base
    });
    var contentWrapper =
    /*#__PURE__*/
    css({
      marginTop: -10
    });
    var footerStyle =
    /*#__PURE__*/
    css({
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 50
    });
    var stepperLineStyle =
    /*#__PURE__*/
    css({
      height: 2,
      bottom: 9,
      position: "absolute",
      transition: "width 100ms ease-out",
      backgroundColor: colors.violet.base
    });

    function noop$1() {}
    var Stepper =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _inherits(Stepper, _React$PureComponent);
      function Stepper() {
        var _this;
        _classCallCheck(this, Stepper);
        _this = _possibleConstructorReturn(this, _getPrototypeOf(Stepper).apply(this, arguments));
        _this.state = {
          active: _this.props.initialSelectedIndex || 0
        };
        _this.goToNextPage =
        /*#__PURE__*/
        _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var _this$props, onBeforeNext, data, allow;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this$props = _this.props, onBeforeNext = _this$props.onBeforeNext, data = _this$props.data;
                  _context.next = 3;
                  return onBeforeNext(_this.state.active);
                case 3:
                  allow = _context.sent;
                  if (allow) _this.goToPage(Math.min(data.length - 1, _this.state.active + 1));
                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        _this.goToPrevPage =
        /*#__PURE__*/
        _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2() {
          var allow;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return _this.props.onBeforePrev(_this.state.active);
                case 2:
                  allow = _context2.sent;
                  if (allow) _this.goToPage(Math.max(0, _this.state.active - 1));
                case 4:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
        _this.goToPage = function (index) {
          var prev = _this.state.active;
          _this.setState({
            active: index
          }, function () {
            return _this.props.onChange({
              prev: prev,
              current: _this.state.active
            });
          });
        };
        _this.getHeadings = function () {
          var _this$props2 = _this.props,
              headingExtractor = _this$props2.headingExtractor,
              data = _this$props2.data;
          return data.map(function (datum) {
            return headingExtractor({
              item: datum
            });
          });
        };
        _this.getLeftButtonData = function () {
          var _this$props3 = _this.props,
              cancelLabel = _this$props3.cancelLabel,
              prevLabel = _this$props3.prevLabel,
              onCancel = _this$props3.onCancel;
          return _this.state.active === 0 ? {
            label: cancelLabel,
            action: onCancel
          } : {
            label: prevLabel,
            action: _this.goToPrevPage
          };
        };
        _this.getRightButtonData = function () {
          var _this$props4 = _this.props,
              nextLabel = _this$props4.nextLabel,
              onDone = _this$props4.onDone,
              data = _this$props4.data,
              doneLabel = _this$props4.doneLabel;
          return _this.state.active === data.length - 1 ? {
            label: doneLabel,
            action: onDone
          } : {
            label: nextLabel,
            action: _this.goToNextPage
          };
        };
        return _this;
      }
      _createClass(Stepper, [{
        key: "render",
        value: function render() {
          var _this2 = this;
          var _this$props5 = this.props,
              data = _this$props5.data,
              renderContentElement = _this$props5.renderContentElement,
              keyExtractor = _this$props5.keyExtractor,
              renderFooterElement = _this$props5.renderFooterElement,
              className = _this$props5.className,
              allowSkip = _this$props5.allowSkip;
          var active = this.state.active;
          var args = {
            goToNext: this.goToNextPage,
            goToPage: this.goToPage,
            goToPrev: this.goToPrevPage,
            leftButtonData: this.getLeftButtonData(),
            rightButtonData: this.getRightButtonData()
          };
          return React.createElement("div", {
            className: className
          }, React.createElement("div", {
            className: headStyle
          }, this.getHeadings().map(function (heading, i) {
            var dotClass = cx(dotStyle$1, _defineProperty({}, activeDotStyle, i <= active));
            var headingColor = i === active ? colors.violet.base : allowSkip ? colors.gray.base : undefined;
            return React.createElement("div", {
              key: keyExtractor(data[i]),
              className: cx(headSection, _defineProperty({},
              /*#__PURE__*/
              /*#__PURE__*/
              css({
                cursor: "inherit"
              }), !allowSkip)),
              onClick: allowSkip ? function () {
                return _this2.goToPage(i);
              } : noop$1
            }, React.createElement("div", {
              className: headingStyle,
              style: {
                color: headingColor
              }
            }, heading), React.createElement("div", {
              className: dotClass
            }));
          }), React.createElement("div", {
            className: stepperLineStyle,
            style: {
              width: "".concat(100 / (2 * data.length) * 2 * active, "%"),
              marginLeft: "".concat(100 / (2 * data.length), "%")
            }
          })), React.createElement("div", {
            className: contentWrapper
          }, data.map(function (datum, i) {
            return React.createElement("div", {
              key: keyExtractor(datum),
              className: cx(_defineProperty({},
              /*#__PURE__*/
              /*#__PURE__*/
              css({
                display: "none"
              }), i !== _this2.state.active))
            }, renderContentElement(Object.assign({
              item: datum,
              isSelected: i === _this2.state.active
            }, args)));
          }), renderFooterElement(Object.assign({
            activeIndex: this.state.active
          }, args), this.props)));
        }
      }]);
      return Stepper;
    }(React.PureComponent);
    Stepper.defaultProps = {
      allowSkip: true,
      cancelLabel: "Cancel",
      nextLabel: "Next",
      prevLabel: "Prev",
      doneLabel: "Done",
      onBeforeNext: function onBeforeNext() {
        return true;
      },
      onBeforePrev: function onBeforePrev() {
        return true;
      },
      onChange: function onChange() {},
      onCancel: function onCancel() {},
      onDone: function onDone() {},
      renderFooterElement: function renderFooterElement(_ref3, props) {
        var leftButtonData = _ref3.leftButtonData,
            rightButtonData = _ref3.rightButtonData;
        return React.createElement("footer", {
          className: footerStyle
        }, React.createElement(Button, {
          size: "large",
          width: 100,
          type: "secondary",
          onClick: leftButtonData.action
        }, leftButtonData.label), React.createElement(Button, {
          size: "large",
          width: 100,
          loading: props.isRightButtonLoading,
          onClick: rightButtonData.action
        }, rightButtonData.label));
      }
    };

    var tagStyle =
    /*#__PURE__*/
    css(Object.assign({}, typography.s.bold, flexSpaceBetween, {
      borderRadius: constants.borderRadius,
      padding: "0 10px",
      height: 28,
      alignItems: "center",
      justifyContent: "center",
      display: "inline-flex",
      lineHeight: "10px",
      "&.__pebble__tag__with__close": {
        paddingRight: 0
      }
    }));
    var iconClass =
    /*#__PURE__*/
    css({
      fontSize: 7,
      marginLeft: 5,
      height: "inherit",
      padding: "10px 10px",
      cursor: "pointer",
      position: "relative",
      ":hover": {
        backgroundColor: colors.violet.lighter,
        borderTopRightRadius: constants.borderRadius,
        borderBottomRightRadius: constants.borderRadius
      }
    });

    var Tag = function Tag(_ref) {
      var label = _ref.label,
          color = _ref.color,
          onClose = _ref.onClose,
          className = _ref.className;
      var wrapperClassName = cx(tagStyle, {
        __pebble__tag__with__close: !!onClose
      });
      var _className = cx(wrapperClassName, className);
      return React.createElement("div", {
        className: _className,
        style: {
          color: colors[color].base,
          backgroundColor: colors[color].lightest || colors[color].light
        }
      }, label, " ", onClose && React.createElement("i", {
        onClick: onClose,
        className: cx("pi", "pi-close", iconClass)
      }, React.createElement(Ink, null)));
    };

    var toastWrapper =
    /*#__PURE__*/
    css(Object.assign({
      position: "fixed",
      bottom: 50,
      borderRadius: constants.borderRadius
    }, typography.normal.regular, {
      color: colors.white.base,
      height: 46,
      display: "flex",
      alignItems: "center",
      padding: 20,
      zIndex: 99999,
      left: "50%",
      "> i": {
        marginRight: 10
      }
    }));

    function mitt(all                 ) {
    	all = all || Object.create(null);
    	return {
    		on: function on(type        , handler              ) {
    			(all[type] || (all[type] = [])).push(handler);
    		},
    		off: function off(type        , handler              ) {
    			if (all[type]) {
    				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
    			}
    		},
    		emit: function emit(type        , evt     ) {
    			(all[type] || []).slice().map(function (handler) { handler(evt); });
    			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
    		}
    	};
    }

    var emitter =
    /*#__PURE__*/
    new mitt();
    var _colors = {
      success: colors.emerald.base,
      error: colors.red.base
    };
    var Toast =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _inherits(Toast, _React$PureComponent);
      function Toast() {
        var _this;
        _classCallCheck(this, Toast);
        _this = _possibleConstructorReturn(this, _getPrototypeOf(Toast).apply(this, arguments));
        _this.state = {
          text: "",
          type: "success",
          show: false
        };
        _this.show = function (_ref) {
          var text = _ref.text,
              _ref$type = _ref.type,
              type = _ref$type === void 0 ? "success" : _ref$type,
              time = _ref.time;
          _this.setState({
            text: text,
            type: type,
            show: true
          });
          if (_this.showTimer) {
            clearTimeout(_this.showTimer);
            _this.showTimer = null;
          }
          _this.showTimer = window.setTimeout(function () {
            return _this.setState({
              show: false
            });
          }, time ? time : _this.props.defaultTime || 5000);
        };
        _this.hide = function () {
          return _this.setState({
            show: false
          });
        };
        return _this;
      }
      _createClass(Toast, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          emitter.on("showToast", this.show);
          emitter.on("hideToast", this.hide);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          emitter.off("showToast", this.show);
          emitter.off("hideToast", this.hide);
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;
          var bColor = _colors[this.state.type];
          var iconClass = cx("pi", {
            "pi-radio-check-filled": this.state.type === "success",
            "pi-close-circle-filled": this.state.type === "error"
          });
          return React.createElement(Transition, {
            native: true,
            items: this.state.show,
            from: {
              opacity: 0,
              transform: "translateX(-50%) translateY(10px)"
            },
            enter: {
              opacity: 1,
              transform: "translateX(-50%) translateY(0)"
            },
            leave: {
              opacity: 0,
              transform: "translateX(-50%) translateY(10px)",
              pointerEvents: "none"
            },
            config: animationConfig.config
          }, function (show) {
            return show && function (styles) {
              return React.createElement(extendedAnimated.div, {
                className: cx(toastWrapper, _this2.props.className),
                style: Object.assign({
                  backgroundColor: bColor
                }, styles)
              }, React.createElement("i", {
                className: iconClass
              }), _this2.state.text);
            };
          });
        }
      }], [{
        key: "show",
        value: function show(text, type, time) {
          emitter.emit("showToast", {
            text: text,
            type: type,
            time: time
          });
        }
      }, {
        key: "hide",
        value: function hide() {
          emitter.emit("hideToast");
        }
      }]);
      return Toast;
    }(React.PureComponent);

    var justDebounceIt = debounce;
    function debounce(fn, wait, callFirst) {
      var timeout;
      return function() {
        if (!wait) {
          return fn.apply(this, arguments);
        }
        var context = this;
        var args = arguments;
        var callNow = callFirst && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
          timeout = null;
          if (!callNow) {
            return fn.apply(context, args);
          }
        }, wait);
        if (callNow) {
          return fn.apply(this, arguments);
        }
      };
    }

    var wrapper =
    /*#__PURE__*/
    css({
      position: "relative"
    });
    var optionsWrapper$1 =
    /*#__PURE__*/
    css({
      width: "100%",
      position: "absolute",
      marginTop: -40,
      zIndex: 999,
      boxShadow: constants.boxShadow.elevated,
      transformOrigin: "0 0"
    });

    function defaultSearchBox(_ref, props) {
      var registerChange = _ref.registerChange,
          onFocus = _ref.onFocus,
          value = _ref.value;
      return React.createElement(Input, {
        onChange: registerChange,
        placeholder: props.placeholder,
        inputProps: {
          onFocus: onFocus,
          onKeyDown: function onKeyDown(e) {
            if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
            if (e.keyCode === 8 && props.selected) {
              registerChange("");
              props.onClear();
            }
          }
        },
        value: value,
        errorMessage: props.errorMessage,
        loading: props.loading,
        required: props.required,
        disabled: props.disabled
      });
    }
    var TypeAhead =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _inherits(TypeAhead, _React$PureComponent);
      function TypeAhead() {
        var _this;
        _classCallCheck(this, TypeAhead);
        _this = _possibleConstructorReturn(this, _getPrototypeOf(TypeAhead).apply(this, arguments));
        _this.state = {
          value: _this.props.initialValue || "",
          showSuggestions: false
        };
        _this.onChange = function () {
          _this.props.onChange(_this.state.value, _this.props);
        };
        _this.debouncedChange = justDebounceIt(_this.onChange, _this.props.debounceTime);
        _this.registerChange = function (value) {
          _this.setState({
            value: value
          }, _this.debouncedChange);
        };
        _this.onFocus = function () {
          _this.setState({
            showSuggestions: true
          });
        };
        _this.onSelect = function (_value) {
          _this.props.onSelect(_value, _this.props);
          _this.setState({
            showSuggestions: false,
            value: _value && _this.props.valueExtractor(_value) || ""
          });
        };
        return _this;
      }
      _createClass(TypeAhead, [{
        key: "render",
        value: function render() {
          var _this2 = this;
          var _this$props = this.props,
              className = _this$props.className,
              _this$props$searchBox = _this$props.searchBox,
              searchBox = _this$props$searchBox === void 0 ? defaultSearchBox : _this$props$searchBox,
              dropdownClassName = _this$props.dropdownClassName,
              children = _this$props.children;
          var _this$state = this.state,
              showSuggestions = _this$state.showSuggestions,
              value = _this$state.value;
          return React.createElement(OutsideClick, {
            onOutsideClick: function onOutsideClick() {
              return _this2.setState({
                showSuggestions: false
              });
            },
            disabled: !showSuggestions,
            className: cx(wrapper, className)
          }, searchBox({
            registerChange: this.registerChange,
            onFocus: this.onFocus,
            value: value
          }, this.props), React.createElement(MountTransition, {
            visible: showSuggestions,
            native: true
          }, function (transitionStyles) {
            return React.createElement(extendedAnimated.div, {
              style: transitionStyles,
              className: cx(optionsWrapper$1, dropdownClassName)
            }, React.createElement(OptionGroupRadio, {
              onChange: _this2.onSelect
            }, children));
          }));
        }
      }]);
      return TypeAhead;
    }(React.PureComponent);
    TypeAhead.defaultProps = {
      debounceTime: 500,
      onClear: function onClear() {}
    };

    var dateClass =
    /*#__PURE__*/
    css({
      padding: 20,
      width: "100%"
    });
    var dropDownClassName =
    /*#__PURE__*/
    css({
      marginTop: -inputMarginBottom
    });

    function _inheritsLoose$1(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }

    var Rifm =
    /*#__PURE__*/
    function (_React$Component) {
      _inheritsLoose$1(Rifm, _React$Component);
      function Rifm(props) {
        var _this;
        _this = _React$Component.call(this, props) || this;
        _this._state = null;
        _this._del = false;
        _this._handleChange = function (evt) {
          if (process.env.NODE_ENV !== 'production') {
            if (evt.target.type === 'number') {
              console.error('Rifm does not support input type=number, use type=tel instead.');
              return;
            }
          }
          var stateValue = _this.state.value;
          var value = evt.target.value;
          var input = evt.target;
          var op = value.length > stateValue.length;
          var del = _this._del;
          var noOp = stateValue === _this.props.format(value);
          _this.setState({
            value: value,
            local: true
          }, function () {
            var selectionStart = input.selectionStart;
            var refuse = _this.props.refuse || /[^\d]+/g;
            var before = value.substr(0, selectionStart).replace(refuse, '');
            _this._state = {
              input: input,
              before: before,
              op: op,
              di: del && noOp,
              del: del
            };
            if (_this.props.replace && _this.props.replace(stateValue) && op && !noOp) {
              var start = -1;
              for (var i = 0; i !== before.length; ++i) {
                start = Math.max(start, value.toLowerCase().indexOf(before[i].toLowerCase(), start + 1));
              }
              var c = value.substr(start + 1).replace(refuse, '')[0];
              start = value.indexOf(c, start + 1);
              value = "" + value.substr(0, start) + value.substr(start + 1);
            }
            var fv = _this.props.format(value);
            if (stateValue === fv) {
              _this.setState({
                value: value
              });
            } else {
              _this.props.onChange(fv);
            }
          });
        };
        _this._hKD = function (evt) {
          if (evt.code === 'Delete') {
            _this._del = true;
          }
        };
        _this._hKU = function (evt) {
          if (evt.code === 'Delete') {
            _this._del = false;
          }
        };
        _this.state = {
          value: props.value,
          local: true
        };
        return _this;
      }
      Rifm.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
        return {
          value: state.local ? state.value : props.value,
          local: false
        };
      };
      var _proto = Rifm.prototype;
      _proto.render = function render() {
        var _handleChange = this._handleChange,
            value = this.state.value,
            children = this.props.children;
        return children({
          value: value,
          onChange: _handleChange
        });
      }
      ;
      _proto.componentWillUnmount = function componentWillUnmount() {
        document.removeEventListener('keydown', this._hKD);
        document.removeEventListener('keyup', this._hKU);
      }
      ;
      _proto.componentDidMount = function componentDidMount() {
        document.addEventListener('keydown', this._hKD);
        document.addEventListener('keyup', this._hKU);
      };
      _proto.componentDidUpdate = function componentDidUpdate() {
        var _state = this._state;
        if (_state) {
          var value = this.state.value;
          var start = -1;
          for (var i = 0; i !== _state.before.length; ++i) {
            start = Math.max(start, value.toLowerCase().indexOf(_state.before[i].toLowerCase(), start + 1));
          }
          if (this.props.replace && (_state.op || _state.del && !_state.di)) {
            while (value[start + 1] && (this.props.refuse || /[^\d]+/).test(value[start + 1])) {
              start += 1;
            }
          }
          _state.input.selectionStart = _state.input.selectionEnd = start + 1 + (_state.di ? 1 : 0);
        }
        this._state = null;
      };
      return Rifm;
    }(React.Component);

    var NativeDateInput =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _inherits(NativeDateInput, _React$PureComponent);
      function NativeDateInput() {
        var _this;
        _classCallCheck(this, NativeDateInput);
        _this = _possibleConstructorReturn(this, _getPrototypeOf(NativeDateInput).apply(this, arguments));
        _this.onDateInputChange = function (value) {
          var date = dateFns_118(value);
          _this.props.onChange(date && date.getTime());
        };
        return _this;
      }
      _createClass(NativeDateInput, [{
        key: "render",
        value: function render() {
          var _this$props = this.props,
              inputProps = _this$props.inputProps,
              placeholder = _this$props.placeholder,
              value = _this$props.value;
          return React.createElement(Input, Object.assign({
            onChange: this.onDateInputChange,
            type: "date"
            ,
            value: value && dateFns_50(value, "YYYY-MM-DD"),
            placeholder: placeholder,
            fixLabelAtTop: true
          }, inputProps));
        }
      }]);
      return NativeDateInput;
    }(React.PureComponent);

    var defaultContext = {
      userAgent: ""
    };
    var UserAgentInfoContext =
    /*@__PURE__*/
    React.createContext(defaultContext);
    function computeUserAgentInfo(userAgent) {
      return {
        userAgent: userAgent
      };
    }
    var UserAgentInfoProvider =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _inherits(UserAgentInfoProvider, _React$PureComponent);
      function UserAgentInfoProvider(props) {
        var _this;
        _classCallCheck(this, UserAgentInfoProvider);
        _this = _possibleConstructorReturn(this, _getPrototypeOf(UserAgentInfoProvider).call(this, props));
        if (typeof navigator !== "undefined" && navigator.userAgent) {
          _this.state = computeUserAgentInfo(navigator.userAgent);
        } else if (props.userAgent) {
          _this.state = computeUserAgentInfo(props.userAgent);
        } else {
          _this.state = defaultContext;
        }
        return _this;
      }
      _createClass(UserAgentInfoProvider, [{
        key: "render",
        value: function render() {
          return React.createElement(UserAgentInfoContext.Provider, {
            value: this.state
          }, this.props.children);
        }
      }]);
      return UserAgentInfoProvider;
    }(React.PureComponent);

    var noop$2 = function noop() {};
    function dateFormat(str) {
      var clean = str.replace(/[^\d]+/gi, "");
      var chars = clean.split("");
      return chars.reduce(function (r, v, index) {
        return "".concat(r).concat(v).concat(index === 1 || index === 3 ? "/" : "").substr(0, 10);
      }, "");
    }
    var DateInput =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _inherits(DateInput, _React$PureComponent);
      function DateInput() {
        var _this;
        _classCallCheck(this, DateInput);
        _this = _possibleConstructorReturn(this, _getPrototypeOf(DateInput).apply(this, arguments));
        _this.state = {
          stringInput: ""
        };
        _this.onCalendarDateChange = function (date) {
          _this.props.onChange(date.getTime());
        };
        _this.onInputChange = function (input) {
          _this.setState({
            stringInput: input
          });
          if (input.length === 10) {
            var date = dateFns_132(new Date());
            date.setFullYear(parseInt(input.substr(6, 4), 10), parseInt(input.substr(3, 5), 10) - 1, parseInt(input.substr(0, 2), 10));
            _this.props.onChange(date.getTime());
          }
        };
        return _this;
      }
      _createClass(DateInput, [{
        key: "render",
        value: function render() {
          var _this2 = this;
          var _this$props = this.props,
              calendarProps = _this$props.calendarProps,
              inputProps = _this$props.inputProps,
              placeholder = _this$props.placeholder,
              propsValue = _this$props.value;
          return React.createElement(DropDown, {
            dropDownClassName: dropDownClassName,
            labelComponent: function labelComponent(_ref) {
              var toggleDropdown = _ref.toggleDropdown;
              return React.createElement(Rifm, {
                value: _this2.state.stringInput,
                onChange: _this2.onInputChange,
                format: dateFormat
              }, function (_ref2) {
                var value = _ref2.value,
                    onChange = _ref2.onChange;
                return React.createElement(Input, Object.assign({
                  onChange: noop$2,
                  type: "tel",
                  value: value,
                  placeholder: "".concat(placeholder, " DD/MM/YYYY"),
                  onClick: toggleDropdown,
                  fixLabelAtTop: true
                }, inputProps, {
                  inputProps: Object.assign({
                    placeholder: "DD/MM/YYYY"
                  }, inputProps && inputProps.inputProps, {
                    onChange: onChange
                  })
                }));
              });
            }
          }, function (_ref3) {
            var toggle = _ref3.toggle;
            return React.createElement(Calendar, Object.assign({
              hideShadow: true,
              className: dateClass,
              selected: propsValue ? new Date(propsValue) : undefined
            }, calendarProps, {
              range: false,
              onChange: function onChange(date) {
                _this2.onCalendarDateChange(date);
                toggle();
              }
            }));
          });
        }
      }], [{
        key: "getDerivedStateFromProps",
        value: function getDerivedStateFromProps(props, state) {
          var newState = null;
          if (props.value && props.value !== state.propsValue) {
            newState = {
              propsValue: props.value,
              stringInput: props.value && dateFns_50(props.value, "DD/MM/YYYY") || ""
            };
          }
          return newState;
        }
      }]);
      return DateInput;
    }(React.PureComponent);
    function checkDateInputSupport() {
      try {
        var input = document.createElement("input");
        var type = "date";
        input.setAttribute("type", "date");
        input.value = "\x01";
        return input.type === type && (input.value !== "\x01" || !input.checkValidity());
      } catch (e) {
        return true;
      }
    }
    var hasDateInputSupport =
    /*@__PURE__*/
    checkDateInputSupport();
    var BrowserBasedDateInput =
    /*#__PURE__*/
    function (_React$PureComponent2) {
      _inherits(BrowserBasedDateInput, _React$PureComponent2);
      function BrowserBasedDateInput() {
        _classCallCheck(this, BrowserBasedDateInput);
        return _possibleConstructorReturn(this, _getPrototypeOf(BrowserBasedDateInput).apply(this, arguments));
      }
      _createClass(BrowserBasedDateInput, [{
        key: "render",
        value: function render() {
          var _this3 = this;
          return React.createElement(UserAgentInfoContext.Consumer, null, function (_ref4) {
            var userAgent = _ref4.userAgent;
            if (/Android|iPhone|iPad/i.test(userAgent) && hasDateInputSupport) {
              return React.createElement(NativeDateInput, _this3.props);
            }
            return React.createElement(DateInput, _this3.props);
          });
        }
      }]);
      return BrowserBasedDateInput;
    }(React.PureComponent);
    BrowserBasedDateInput.contextType = UserAgentInfoContext;

    function _objectWithoutPropertiesLoose$1(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }
      return target;
    }
    var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose$1;

    var _extends_1 = createCommonjsModule(function (module) {
    function _extends() {
      module.exports = _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    module.exports = _extends;
    });

    function _inheritsLoose$2(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }
    var inheritsLoose = _inheritsLoose$2;

    function _assertThisInitialized$2(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    var assertThisInitialized = _assertThisInitialized$2;

    function _defineProperty$1(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var defineProperty = _defineProperty$1;

    var isBrowser$2 = typeof window !== 'undefined' && typeof document !== 'undefined';
    var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
    var timeoutDuration = 0;
    for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
      if (isBrowser$2 && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
        timeoutDuration = 1;
        break;
      }
    }
    function microtaskDebounce(fn) {
      var called = false;
      return function () {
        if (called) {
          return;
        }
        called = true;
        window.Promise.resolve().then(function () {
          called = false;
          fn();
        });
      };
    }
    function taskDebounce(fn) {
      var scheduled = false;
      return function () {
        if (!scheduled) {
          scheduled = true;
          setTimeout(function () {
            scheduled = false;
            fn();
          }, timeoutDuration);
        }
      };
    }
    var supportsMicroTasks = isBrowser$2 && window.Promise;
    var debounce$1 = supportsMicroTasks ? microtaskDebounce : taskDebounce;
    function isFunction(functionToCheck) {
      var getType = {};
      return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
    }
    function getStyleComputedProperty(element, property) {
      if (element.nodeType !== 1) {
        return [];
      }
      var window = element.ownerDocument.defaultView;
      var css = window.getComputedStyle(element, null);
      return property ? css[property] : css;
    }
    function getParentNode(element) {
      if (element.nodeName === 'HTML') {
        return element;
      }
      return element.parentNode || element.host;
    }
    function getScrollParent(element) {
      if (!element) {
        return document.body;
      }
      switch (element.nodeName) {
        case 'HTML':
        case 'BODY':
          return element.ownerDocument.body;
        case '#document':
          return element.body;
      }
      var _getStyleComputedProp = getStyleComputedProperty(element),
          overflow = _getStyleComputedProp.overflow,
          overflowX = _getStyleComputedProp.overflowX,
          overflowY = _getStyleComputedProp.overflowY;
      if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
        return element;
      }
      return getScrollParent(getParentNode(element));
    }
    var isIE11 = isBrowser$2 && !!(window.MSInputMethodContext && document.documentMode);
    var isIE10 = isBrowser$2 && /MSIE 10/.test(navigator.userAgent);
    function isIE(version) {
      if (version === 11) {
        return isIE11;
      }
      if (version === 10) {
        return isIE10;
      }
      return isIE11 || isIE10;
    }
    function getOffsetParent(element) {
      if (!element) {
        return document.documentElement;
      }
      var noOffsetParent = isIE(10) ? document.body : null;
      var offsetParent = element.offsetParent || null;
      while (offsetParent === noOffsetParent && element.nextElementSibling) {
        offsetParent = (element = element.nextElementSibling).offsetParent;
      }
      var nodeName = offsetParent && offsetParent.nodeName;
      if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
        return element ? element.ownerDocument.documentElement : document.documentElement;
      }
      if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
        return getOffsetParent(offsetParent);
      }
      return offsetParent;
    }
    function isOffsetContainer(element) {
      var nodeName = element.nodeName;
      if (nodeName === 'BODY') {
        return false;
      }
      return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
    }
    function getRoot(node) {
      if (node.parentNode !== null) {
        return getRoot(node.parentNode);
      }
      return node;
    }
    function findCommonOffsetParent(element1, element2) {
      if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
        return document.documentElement;
      }
      var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
      var start = order ? element1 : element2;
      var end = order ? element2 : element1;
      var range = document.createRange();
      range.setStart(start, 0);
      range.setEnd(end, 0);
      var commonAncestorContainer = range.commonAncestorContainer;
      if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
        if (isOffsetContainer(commonAncestorContainer)) {
          return commonAncestorContainer;
        }
        return getOffsetParent(commonAncestorContainer);
      }
      var element1root = getRoot(element1);
      if (element1root.host) {
        return findCommonOffsetParent(element1root.host, element2);
      } else {
        return findCommonOffsetParent(element1, getRoot(element2).host);
      }
    }
    function getScroll(element) {
      var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
      var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
      var nodeName = element.nodeName;
      if (nodeName === 'BODY' || nodeName === 'HTML') {
        var html = element.ownerDocument.documentElement;
        var scrollingElement = element.ownerDocument.scrollingElement || html;
        return scrollingElement[upperSide];
      }
      return element[upperSide];
    }
    function includeScroll(rect, element) {
      var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      var modifier = subtract ? -1 : 1;
      rect.top += scrollTop * modifier;
      rect.bottom += scrollTop * modifier;
      rect.left += scrollLeft * modifier;
      rect.right += scrollLeft * modifier;
      return rect;
    }
    function getBordersSize(styles, axis) {
      var sideA = axis === 'x' ? 'Left' : 'Top';
      var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
      return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
    }
    function getSize(axis, body, html, computedStyle) {
      return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
    }
    function getWindowSizes(document) {
      var body = document.body;
      var html = document.documentElement;
      var computedStyle = isIE(10) && getComputedStyle(html);
      return {
        height: getSize('Height', body, html, computedStyle),
        width: getSize('Width', body, html, computedStyle)
      };
    }
    var classCallCheck = function (instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
    var createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var defineProperty$1 = function (obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    };
    var _extends$1 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    function getClientRect(offsets) {
      return _extends$1({}, offsets, {
        right: offsets.left + offsets.width,
        bottom: offsets.top + offsets.height
      });
    }
    function getBoundingClientRect(element) {
      var rect = {};
      try {
        if (isIE(10)) {
          rect = element.getBoundingClientRect();
          var scrollTop = getScroll(element, 'top');
          var scrollLeft = getScroll(element, 'left');
          rect.top += scrollTop;
          rect.left += scrollLeft;
          rect.bottom += scrollTop;
          rect.right += scrollLeft;
        } else {
          rect = element.getBoundingClientRect();
        }
      } catch (e) {}
      var result = {
        left: rect.left,
        top: rect.top,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
      };
      var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
      var width = sizes.width || element.clientWidth || result.right - result.left;
      var height = sizes.height || element.clientHeight || result.bottom - result.top;
      var horizScrollbar = element.offsetWidth - width;
      var vertScrollbar = element.offsetHeight - height;
      if (horizScrollbar || vertScrollbar) {
        var styles = getStyleComputedProperty(element);
        horizScrollbar -= getBordersSize(styles, 'x');
        vertScrollbar -= getBordersSize(styles, 'y');
        result.width -= horizScrollbar;
        result.height -= vertScrollbar;
      }
      return getClientRect(result);
    }
    function getOffsetRectRelativeToArbitraryNode(children, parent) {
      var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var isIE10 = isIE(10);
      var isHTML = parent.nodeName === 'HTML';
      var childrenRect = getBoundingClientRect(children);
      var parentRect = getBoundingClientRect(parent);
      var scrollParent = getScrollParent(children);
      var styles = getStyleComputedProperty(parent);
      var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
      var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);
      if (fixedPosition && isHTML) {
        parentRect.top = Math.max(parentRect.top, 0);
        parentRect.left = Math.max(parentRect.left, 0);
      }
      var offsets = getClientRect({
        top: childrenRect.top - parentRect.top - borderTopWidth,
        left: childrenRect.left - parentRect.left - borderLeftWidth,
        width: childrenRect.width,
        height: childrenRect.height
      });
      offsets.marginTop = 0;
      offsets.marginLeft = 0;
      if (!isIE10 && isHTML) {
        var marginTop = parseFloat(styles.marginTop, 10);
        var marginLeft = parseFloat(styles.marginLeft, 10);
        offsets.top -= borderTopWidth - marginTop;
        offsets.bottom -= borderTopWidth - marginTop;
        offsets.left -= borderLeftWidth - marginLeft;
        offsets.right -= borderLeftWidth - marginLeft;
        offsets.marginTop = marginTop;
        offsets.marginLeft = marginLeft;
      }
      if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
        offsets = includeScroll(offsets, parent);
      }
      return offsets;
    }
    function getViewportOffsetRectRelativeToArtbitraryNode(element) {
      var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var html = element.ownerDocument.documentElement;
      var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
      var width = Math.max(html.clientWidth, window.innerWidth || 0);
      var height = Math.max(html.clientHeight, window.innerHeight || 0);
      var scrollTop = !excludeScroll ? getScroll(html) : 0;
      var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
      var offset = {
        top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
        left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
        width: width,
        height: height
      };
      return getClientRect(offset);
    }
    function isFixed(element) {
      var nodeName = element.nodeName;
      if (nodeName === 'BODY' || nodeName === 'HTML') {
        return false;
      }
      if (getStyleComputedProperty(element, 'position') === 'fixed') {
        return true;
      }
      return isFixed(getParentNode(element));
    }
    function getFixedPositionOffsetParent(element) {
      if (!element || !element.parentElement || isIE()) {
        return document.documentElement;
      }
      var el = element.parentElement;
      while (el && getStyleComputedProperty(el, 'transform') === 'none') {
        el = el.parentElement;
      }
      return el || document.documentElement;
    }
    function getBoundaries(popper, reference, padding, boundariesElement) {
      var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var boundaries = { top: 0, left: 0 };
      var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
      if (boundariesElement === 'viewport') {
        boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
      } else {
        var boundariesNode = void 0;
        if (boundariesElement === 'scrollParent') {
          boundariesNode = getScrollParent(getParentNode(reference));
          if (boundariesNode.nodeName === 'BODY') {
            boundariesNode = popper.ownerDocument.documentElement;
          }
        } else if (boundariesElement === 'window') {
          boundariesNode = popper.ownerDocument.documentElement;
        } else {
          boundariesNode = boundariesElement;
        }
        var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);
        if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
          var _getWindowSizes = getWindowSizes(popper.ownerDocument),
              height = _getWindowSizes.height,
              width = _getWindowSizes.width;
          boundaries.top += offsets.top - offsets.marginTop;
          boundaries.bottom = height + offsets.top;
          boundaries.left += offsets.left - offsets.marginLeft;
          boundaries.right = width + offsets.left;
        } else {
          boundaries = offsets;
        }
      }
      padding = padding || 0;
      var isPaddingNumber = typeof padding === 'number';
      boundaries.left += isPaddingNumber ? padding : padding.left || 0;
      boundaries.top += isPaddingNumber ? padding : padding.top || 0;
      boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
      boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
      return boundaries;
    }
    function getArea(_ref) {
      var width = _ref.width,
          height = _ref.height;
      return width * height;
    }
    function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
      var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
      if (placement.indexOf('auto') === -1) {
        return placement;
      }
      var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
      var rects = {
        top: {
          width: boundaries.width,
          height: refRect.top - boundaries.top
        },
        right: {
          width: boundaries.right - refRect.right,
          height: boundaries.height
        },
        bottom: {
          width: boundaries.width,
          height: boundaries.bottom - refRect.bottom
        },
        left: {
          width: refRect.left - boundaries.left,
          height: boundaries.height
        }
      };
      var sortedAreas = Object.keys(rects).map(function (key) {
        return _extends$1({
          key: key
        }, rects[key], {
          area: getArea(rects[key])
        });
      }).sort(function (a, b) {
        return b.area - a.area;
      });
      var filteredAreas = sortedAreas.filter(function (_ref2) {
        var width = _ref2.width,
            height = _ref2.height;
        return width >= popper.clientWidth && height >= popper.clientHeight;
      });
      var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
      var variation = placement.split('-')[1];
      return computedPlacement + (variation ? '-' + variation : '');
    }
    function getReferenceOffsets(state, popper, reference) {
      var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
      return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
    }
    function getOuterSizes(element) {
      var window = element.ownerDocument.defaultView;
      var styles = window.getComputedStyle(element);
      var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
      var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
      var result = {
        width: element.offsetWidth + y,
        height: element.offsetHeight + x
      };
      return result;
    }
    function getOppositePlacement(placement) {
      var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
      return placement.replace(/left|right|bottom|top/g, function (matched) {
        return hash[matched];
      });
    }
    function getPopperOffsets(popper, referenceOffsets, placement) {
      placement = placement.split('-')[0];
      var popperRect = getOuterSizes(popper);
      var popperOffsets = {
        width: popperRect.width,
        height: popperRect.height
      };
      var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
      var mainSide = isHoriz ? 'top' : 'left';
      var secondarySide = isHoriz ? 'left' : 'top';
      var measurement = isHoriz ? 'height' : 'width';
      var secondaryMeasurement = !isHoriz ? 'height' : 'width';
      popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
      if (placement === secondarySide) {
        popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
      } else {
        popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
      }
      return popperOffsets;
    }
    function find(arr, check) {
      if (Array.prototype.find) {
        return arr.find(check);
      }
      return arr.filter(check)[0];
    }
    function findIndex(arr, prop, value) {
      if (Array.prototype.findIndex) {
        return arr.findIndex(function (cur) {
          return cur[prop] === value;
        });
      }
      var match = find(arr, function (obj) {
        return obj[prop] === value;
      });
      return arr.indexOf(match);
    }
    function runModifiers(modifiers, data, ends) {
      var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));
      modifiersToRun.forEach(function (modifier) {
        if (modifier['function']) {
          console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
        }
        var fn = modifier['function'] || modifier.fn;
        if (modifier.enabled && isFunction(fn)) {
          data.offsets.popper = getClientRect(data.offsets.popper);
          data.offsets.reference = getClientRect(data.offsets.reference);
          data = fn(data, modifier);
        }
      });
      return data;
    }
    function update() {
      if (this.state.isDestroyed) {
        return;
      }
      var data = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: false,
        offsets: {}
      };
      data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);
      data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);
      data.originalPlacement = data.placement;
      data.positionFixed = this.options.positionFixed;
      data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
      data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';
      data = runModifiers(this.modifiers, data);
      if (!this.state.isCreated) {
        this.state.isCreated = true;
        this.options.onCreate(data);
      } else {
        this.options.onUpdate(data);
      }
    }
    function isModifierEnabled(modifiers, modifierName) {
      return modifiers.some(function (_ref) {
        var name = _ref.name,
            enabled = _ref.enabled;
        return enabled && name === modifierName;
      });
    }
    function getSupportedPropertyName(property) {
      var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
      var upperProp = property.charAt(0).toUpperCase() + property.slice(1);
      for (var i = 0; i < prefixes.length; i++) {
        var prefix = prefixes[i];
        var toCheck = prefix ? '' + prefix + upperProp : property;
        if (typeof document.body.style[toCheck] !== 'undefined') {
          return toCheck;
        }
      }
      return null;
    }
    function destroy() {
      this.state.isDestroyed = true;
      if (isModifierEnabled(this.modifiers, 'applyStyle')) {
        this.popper.removeAttribute('x-placement');
        this.popper.style.position = '';
        this.popper.style.top = '';
        this.popper.style.left = '';
        this.popper.style.right = '';
        this.popper.style.bottom = '';
        this.popper.style.willChange = '';
        this.popper.style[getSupportedPropertyName('transform')] = '';
      }
      this.disableEventListeners();
      if (this.options.removeOnDestroy) {
        this.popper.parentNode.removeChild(this.popper);
      }
      return this;
    }
    function getWindow(element) {
      var ownerDocument = element.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView : window;
    }
    function attachToScrollParents(scrollParent, event, callback, scrollParents) {
      var isBody = scrollParent.nodeName === 'BODY';
      var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
      target.addEventListener(event, callback, { passive: true });
      if (!isBody) {
        attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
      }
      scrollParents.push(target);
    }
    function setupEventListeners(reference, options, state, updateBound) {
      state.updateBound = updateBound;
      getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });
      var scrollElement = getScrollParent(reference);
      attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
      state.scrollElement = scrollElement;
      state.eventsEnabled = true;
      return state;
    }
    function enableEventListeners() {
      if (!this.state.eventsEnabled) {
        this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
      }
    }
    function removeEventListeners(reference, state) {
      getWindow(reference).removeEventListener('resize', state.updateBound);
      state.scrollParents.forEach(function (target) {
        target.removeEventListener('scroll', state.updateBound);
      });
      state.updateBound = null;
      state.scrollParents = [];
      state.scrollElement = null;
      state.eventsEnabled = false;
      return state;
    }
    function disableEventListeners() {
      if (this.state.eventsEnabled) {
        cancelAnimationFrame(this.scheduleUpdate);
        this.state = removeEventListeners(this.reference, this.state);
      }
    }
    function isNumeric(n) {
      return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
    }
    function setStyles(element, styles) {
      Object.keys(styles).forEach(function (prop) {
        var unit = '';
        if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
          unit = 'px';
        }
        element.style[prop] = styles[prop] + unit;
      });
    }
    function setAttributes(element, attributes) {
      Object.keys(attributes).forEach(function (prop) {
        var value = attributes[prop];
        if (value !== false) {
          element.setAttribute(prop, attributes[prop]);
        } else {
          element.removeAttribute(prop);
        }
      });
    }
    function applyStyle(data) {
      setStyles(data.instance.popper, data.styles);
      setAttributes(data.instance.popper, data.attributes);
      if (data.arrowElement && Object.keys(data.arrowStyles).length) {
        setStyles(data.arrowElement, data.arrowStyles);
      }
      return data;
    }
    function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
      var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);
      var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
      popper.setAttribute('x-placement', placement);
      setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });
      return options;
    }
    function getRoundedOffsets(data, shouldRound) {
      var _data$offsets = data.offsets,
          popper = _data$offsets.popper,
          reference = _data$offsets.reference;
      var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
      var isVariation = data.placement.indexOf('-') !== -1;
      var sameWidthOddness = reference.width % 2 === popper.width % 2;
      var bothOddWidth = reference.width % 2 === 1 && popper.width % 2 === 1;
      var noRound = function noRound(v) {
        return v;
      };
      var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthOddness ? Math.round : Math.floor;
      var verticalToInteger = !shouldRound ? noRound : Math.round;
      return {
        left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
        top: verticalToInteger(popper.top),
        bottom: verticalToInteger(popper.bottom),
        right: horizontalToInteger(popper.right)
      };
    }
    var isFirefox = isBrowser$2 && /Firefox/i.test(navigator.userAgent);
    function computeStyle(data, options) {
      var x = options.x,
          y = options.y;
      var popper = data.offsets.popper;
      var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
        return modifier.name === 'applyStyle';
      }).gpuAcceleration;
      if (legacyGpuAccelerationOption !== undefined) {
        console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
      }
      var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
      var offsetParent = getOffsetParent(data.instance.popper);
      var offsetParentRect = getBoundingClientRect(offsetParent);
      var styles = {
        position: popper.position
      };
      var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
      var sideA = x === 'bottom' ? 'top' : 'bottom';
      var sideB = y === 'right' ? 'left' : 'right';
      var prefixedProperty = getSupportedPropertyName('transform');
      var left = void 0,
          top = void 0;
      if (sideA === 'bottom') {
        if (offsetParent.nodeName === 'HTML') {
          top = -offsetParent.clientHeight + offsets.bottom;
        } else {
          top = -offsetParentRect.height + offsets.bottom;
        }
      } else {
        top = offsets.top;
      }
      if (sideB === 'right') {
        if (offsetParent.nodeName === 'HTML') {
          left = -offsetParent.clientWidth + offsets.right;
        } else {
          left = -offsetParentRect.width + offsets.right;
        }
      } else {
        left = offsets.left;
      }
      if (gpuAcceleration && prefixedProperty) {
        styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
        styles[sideA] = 0;
        styles[sideB] = 0;
        styles.willChange = 'transform';
      } else {
        var invertTop = sideA === 'bottom' ? -1 : 1;
        var invertLeft = sideB === 'right' ? -1 : 1;
        styles[sideA] = top * invertTop;
        styles[sideB] = left * invertLeft;
        styles.willChange = sideA + ', ' + sideB;
      }
      var attributes = {
        'x-placement': data.placement
      };
      data.attributes = _extends$1({}, attributes, data.attributes);
      data.styles = _extends$1({}, styles, data.styles);
      data.arrowStyles = _extends$1({}, data.offsets.arrow, data.arrowStyles);
      return data;
    }
    function isModifierRequired(modifiers, requestingName, requestedName) {
      var requesting = find(modifiers, function (_ref) {
        var name = _ref.name;
        return name === requestingName;
      });
      var isRequired = !!requesting && modifiers.some(function (modifier) {
        return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
      });
      if (!isRequired) {
        var _requesting = '`' + requestingName + '`';
        var requested = '`' + requestedName + '`';
        console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
      }
      return isRequired;
    }
    function arrow(data, options) {
      var _data$offsets$arrow;
      if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
        return data;
      }
      var arrowElement = options.element;
      if (typeof arrowElement === 'string') {
        arrowElement = data.instance.popper.querySelector(arrowElement);
        if (!arrowElement) {
          return data;
        }
      } else {
        if (!data.instance.popper.contains(arrowElement)) {
          console.warn('WARNING: `arrow.element` must be child of its popper element!');
          return data;
        }
      }
      var placement = data.placement.split('-')[0];
      var _data$offsets = data.offsets,
          popper = _data$offsets.popper,
          reference = _data$offsets.reference;
      var isVertical = ['left', 'right'].indexOf(placement) !== -1;
      var len = isVertical ? 'height' : 'width';
      var sideCapitalized = isVertical ? 'Top' : 'Left';
      var side = sideCapitalized.toLowerCase();
      var altSide = isVertical ? 'left' : 'top';
      var opSide = isVertical ? 'bottom' : 'right';
      var arrowElementSize = getOuterSizes(arrowElement)[len];
      if (reference[opSide] - arrowElementSize < popper[side]) {
        data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
      }
      if (reference[side] + arrowElementSize > popper[opSide]) {
        data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
      }
      data.offsets.popper = getClientRect(data.offsets.popper);
      var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;
      var css = getStyleComputedProperty(data.instance.popper);
      var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
      var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
      var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;
      sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
      data.arrowElement = arrowElement;
      data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty$1(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty$1(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
      return data;
    }
    function getOppositeVariation(variation) {
      if (variation === 'end') {
        return 'start';
      } else if (variation === 'start') {
        return 'end';
      }
      return variation;
    }
    var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];
    var validPlacements = placements.slice(3);
    function clockwise(placement) {
      var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var index = validPlacements.indexOf(placement);
      var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
      return counter ? arr.reverse() : arr;
    }
    var BEHAVIORS = {
      FLIP: 'flip',
      CLOCKWISE: 'clockwise',
      COUNTERCLOCKWISE: 'counterclockwise'
    };
    function flip(data, options) {
      if (isModifierEnabled(data.instance.modifiers, 'inner')) {
        return data;
      }
      if (data.flipped && data.placement === data.originalPlacement) {
        return data;
      }
      var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
      var placement = data.placement.split('-')[0];
      var placementOpposite = getOppositePlacement(placement);
      var variation = data.placement.split('-')[1] || '';
      var flipOrder = [];
      switch (options.behavior) {
        case BEHAVIORS.FLIP:
          flipOrder = [placement, placementOpposite];
          break;
        case BEHAVIORS.CLOCKWISE:
          flipOrder = clockwise(placement);
          break;
        case BEHAVIORS.COUNTERCLOCKWISE:
          flipOrder = clockwise(placement, true);
          break;
        default:
          flipOrder = options.behavior;
      }
      flipOrder.forEach(function (step, index) {
        if (placement !== step || flipOrder.length === index + 1) {
          return data;
        }
        placement = data.placement.split('-')[0];
        placementOpposite = getOppositePlacement(placement);
        var popperOffsets = data.offsets.popper;
        var refOffsets = data.offsets.reference;
        var floor = Math.floor;
        var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);
        var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
        var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
        var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
        var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
        var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;
        var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
        var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);
        if (overlapsRef || overflowsBoundaries || flippedVariation) {
          data.flipped = true;
          if (overlapsRef || overflowsBoundaries) {
            placement = flipOrder[index + 1];
          }
          if (flippedVariation) {
            variation = getOppositeVariation(variation);
          }
          data.placement = placement + (variation ? '-' + variation : '');
          data.offsets.popper = _extends$1({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
          data = runModifiers(data.instance.modifiers, data, 'flip');
        }
      });
      return data;
    }
    function keepTogether(data) {
      var _data$offsets = data.offsets,
          popper = _data$offsets.popper,
          reference = _data$offsets.reference;
      var placement = data.placement.split('-')[0];
      var floor = Math.floor;
      var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
      var side = isVertical ? 'right' : 'bottom';
      var opSide = isVertical ? 'left' : 'top';
      var measurement = isVertical ? 'width' : 'height';
      if (popper[side] < floor(reference[opSide])) {
        data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
      }
      if (popper[opSide] > floor(reference[side])) {
        data.offsets.popper[opSide] = floor(reference[side]);
      }
      return data;
    }
    function toValue(str, measurement, popperOffsets, referenceOffsets) {
      var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
      var value = +split[1];
      var unit = split[2];
      if (!value) {
        return str;
      }
      if (unit.indexOf('%') === 0) {
        var element = void 0;
        switch (unit) {
          case '%p':
            element = popperOffsets;
            break;
          case '%':
          case '%r':
          default:
            element = referenceOffsets;
        }
        var rect = getClientRect(element);
        return rect[measurement] / 100 * value;
      } else if (unit === 'vh' || unit === 'vw') {
        var size = void 0;
        if (unit === 'vh') {
          size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        } else {
          size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        }
        return size / 100 * value;
      } else {
        return value;
      }
    }
    function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
      var offsets = [0, 0];
      var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;
      var fragments = offset.split(/(\+|\-)/).map(function (frag) {
        return frag.trim();
      });
      var divider = fragments.indexOf(find(fragments, function (frag) {
        return frag.search(/,|\s/) !== -1;
      }));
      if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
        console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
      }
      var splitRegex = /\s*,\s*|\s+/;
      var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];
      ops = ops.map(function (op, index) {
        var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
        var mergeWithPrevious = false;
        return op
        .reduce(function (a, b) {
          if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
            a[a.length - 1] = b;
            mergeWithPrevious = true;
            return a;
          } else if (mergeWithPrevious) {
            a[a.length - 1] += b;
            mergeWithPrevious = false;
            return a;
          } else {
            return a.concat(b);
          }
        }, [])
        .map(function (str) {
          return toValue(str, measurement, popperOffsets, referenceOffsets);
        });
      });
      ops.forEach(function (op, index) {
        op.forEach(function (frag, index2) {
          if (isNumeric(frag)) {
            offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
          }
        });
      });
      return offsets;
    }
    function offset(data, _ref) {
      var offset = _ref.offset;
      var placement = data.placement,
          _data$offsets = data.offsets,
          popper = _data$offsets.popper,
          reference = _data$offsets.reference;
      var basePlacement = placement.split('-')[0];
      var offsets = void 0;
      if (isNumeric(+offset)) {
        offsets = [+offset, 0];
      } else {
        offsets = parseOffset(offset, popper, reference, basePlacement);
      }
      if (basePlacement === 'left') {
        popper.top += offsets[0];
        popper.left -= offsets[1];
      } else if (basePlacement === 'right') {
        popper.top += offsets[0];
        popper.left += offsets[1];
      } else if (basePlacement === 'top') {
        popper.left += offsets[0];
        popper.top -= offsets[1];
      } else if (basePlacement === 'bottom') {
        popper.left += offsets[0];
        popper.top += offsets[1];
      }
      data.popper = popper;
      return data;
    }
    function preventOverflow(data, options) {
      var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);
      if (data.instance.reference === boundariesElement) {
        boundariesElement = getOffsetParent(boundariesElement);
      }
      var transformProp = getSupportedPropertyName('transform');
      var popperStyles = data.instance.popper.style;
      var top = popperStyles.top,
          left = popperStyles.left,
          transform = popperStyles[transformProp];
      popperStyles.top = '';
      popperStyles.left = '';
      popperStyles[transformProp] = '';
      var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);
      popperStyles.top = top;
      popperStyles.left = left;
      popperStyles[transformProp] = transform;
      options.boundaries = boundaries;
      var order = options.priority;
      var popper = data.offsets.popper;
      var check = {
        primary: function primary(placement) {
          var value = popper[placement];
          if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
            value = Math.max(popper[placement], boundaries[placement]);
          }
          return defineProperty$1({}, placement, value);
        },
        secondary: function secondary(placement) {
          var mainSide = placement === 'right' ? 'left' : 'top';
          var value = popper[mainSide];
          if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
            value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
          }
          return defineProperty$1({}, mainSide, value);
        }
      };
      order.forEach(function (placement) {
        var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
        popper = _extends$1({}, popper, check[side](placement));
      });
      data.offsets.popper = popper;
      return data;
    }
    function shift(data) {
      var placement = data.placement;
      var basePlacement = placement.split('-')[0];
      var shiftvariation = placement.split('-')[1];
      if (shiftvariation) {
        var _data$offsets = data.offsets,
            reference = _data$offsets.reference,
            popper = _data$offsets.popper;
        var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
        var side = isVertical ? 'left' : 'top';
        var measurement = isVertical ? 'width' : 'height';
        var shiftOffsets = {
          start: defineProperty$1({}, side, reference[side]),
          end: defineProperty$1({}, side, reference[side] + reference[measurement] - popper[measurement])
        };
        data.offsets.popper = _extends$1({}, popper, shiftOffsets[shiftvariation]);
      }
      return data;
    }
    function hide(data) {
      if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
        return data;
      }
      var refRect = data.offsets.reference;
      var bound = find(data.instance.modifiers, function (modifier) {
        return modifier.name === 'preventOverflow';
      }).boundaries;
      if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
        if (data.hide === true) {
          return data;
        }
        data.hide = true;
        data.attributes['x-out-of-boundaries'] = '';
      } else {
        if (data.hide === false) {
          return data;
        }
        data.hide = false;
        data.attributes['x-out-of-boundaries'] = false;
      }
      return data;
    }
    function inner(data) {
      var placement = data.placement;
      var basePlacement = placement.split('-')[0];
      var _data$offsets = data.offsets,
          popper = _data$offsets.popper,
          reference = _data$offsets.reference;
      var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;
      var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;
      popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);
      data.placement = getOppositePlacement(placement);
      data.offsets.popper = getClientRect(popper);
      return data;
    }
    var modifiers = {
      shift: {
        order: 100,
        enabled: true,
        fn: shift
      },
      offset: {
        order: 200,
        enabled: true,
        fn: offset,
        offset: 0
      },
      preventOverflow: {
        order: 300,
        enabled: true,
        fn: preventOverflow,
        priority: ['left', 'right', 'top', 'bottom'],
        padding: 5,
        boundariesElement: 'scrollParent'
      },
      keepTogether: {
        order: 400,
        enabled: true,
        fn: keepTogether
      },
      arrow: {
        order: 500,
        enabled: true,
        fn: arrow,
        element: '[x-arrow]'
      },
      flip: {
        order: 600,
        enabled: true,
        fn: flip,
        behavior: 'flip',
        padding: 5,
        boundariesElement: 'viewport'
      },
      inner: {
        order: 700,
        enabled: false,
        fn: inner
      },
      hide: {
        order: 800,
        enabled: true,
        fn: hide
      },
      computeStyle: {
        order: 850,
        enabled: true,
        fn: computeStyle,
        gpuAcceleration: true,
        x: 'bottom',
        y: 'right'
      },
      applyStyle: {
        order: 900,
        enabled: true,
        fn: applyStyle,
        onLoad: applyStyleOnLoad,
        gpuAcceleration: undefined
      }
    };
    var Defaults = {
      placement: 'bottom',
      positionFixed: false,
      eventsEnabled: true,
      removeOnDestroy: false,
      onCreate: function onCreate() {},
      onUpdate: function onUpdate() {},
      modifiers: modifiers
    };
    var Popper = function () {
      function Popper(reference, popper) {
        var _this = this;
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        classCallCheck(this, Popper);
        this.scheduleUpdate = function () {
          return requestAnimationFrame(_this.update);
        };
        this.update = debounce$1(this.update.bind(this));
        this.options = _extends$1({}, Popper.Defaults, options);
        this.state = {
          isDestroyed: false,
          isCreated: false,
          scrollParents: []
        };
        this.reference = reference && reference.jquery ? reference[0] : reference;
        this.popper = popper && popper.jquery ? popper[0] : popper;
        this.options.modifiers = {};
        Object.keys(_extends$1({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
          _this.options.modifiers[name] = _extends$1({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
        });
        this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
          return _extends$1({
            name: name
          }, _this.options.modifiers[name]);
        })
        .sort(function (a, b) {
          return a.order - b.order;
        });
        this.modifiers.forEach(function (modifierOptions) {
          if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
            modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
          }
        });
        this.update();
        var eventsEnabled = this.options.eventsEnabled;
        if (eventsEnabled) {
          this.enableEventListeners();
        }
        this.state.eventsEnabled = eventsEnabled;
      }
      createClass(Popper, [{
        key: 'update',
        value: function update$$1() {
          return update.call(this);
        }
      }, {
        key: 'destroy',
        value: function destroy$$1() {
          return destroy.call(this);
        }
      }, {
        key: 'enableEventListeners',
        value: function enableEventListeners$$1() {
          return enableEventListeners.call(this);
        }
      }, {
        key: 'disableEventListeners',
        value: function disableEventListeners$$1() {
          return disableEventListeners.call(this);
        }
      }]);
      return Popper;
    }();
    Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
    Popper.placements = placements;
    Popper.Defaults = Defaults;

    var ReactPropTypesSecret$4 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
    var ReactPropTypesSecret_1$2 = ReactPropTypesSecret$4;

    var printWarning$4 = function() {};
    if (process.env.NODE_ENV !== 'production') {
      var ReactPropTypesSecret$5 = ReactPropTypesSecret_1$2;
      var loggedTypeFailures$2 = {};
      printWarning$4 = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {}
      };
    }
    function checkPropTypes$2(typeSpecs, values, location, componentName, getStack) {
      if (process.env.NODE_ENV !== 'production') {
        for (var typeSpecName in typeSpecs) {
          if (typeSpecs.hasOwnProperty(typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== 'function') {
                var err = Error(
                  (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
                  'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
                );
                err.name = 'Invariant Violation';
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$5);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning$4(
                (componentName || 'React class') + ': type specification of ' +
                location + ' `' + typeSpecName + '` is invalid; the type checker ' +
                'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
                'You may have forgotten to pass an argument to the type checker ' +
                'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
                'shape all require an argument).'
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures$2)) {
              loggedTypeFailures$2[error.message] = true;
              var stack = getStack ? getStack() : '';
              printWarning$4(
                'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
              );
            }
          }
        }
      }
    }
    var checkPropTypes_1$2 = checkPropTypes$2;

    var printWarning$5 = function() {};
    if (process.env.NODE_ENV !== 'production') {
      printWarning$5 = function(text) {
        var message = 'Warning: ' + text;
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {}
      };
    }
    function emptyFunctionThatReturnsNull$2() {
      return null;
    }
    var factoryWithTypeCheckers$2 = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = '@@iterator';
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === 'function') {
          return iteratorFn;
        }
      }
      var ANONYMOUS = '<<anonymous>>';
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker('array'),
        bool: createPrimitiveTypeChecker('boolean'),
        func: createPrimitiveTypeChecker('function'),
        number: createPrimitiveTypeChecker('number'),
        object: createPrimitiveTypeChecker('object'),
        string: createPrimitiveTypeChecker('string'),
        symbol: createPrimitiveTypeChecker('symbol'),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker,
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message) {
        this.message = message;
        this.stack = '';
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (process.env.NODE_ENV !== 'production') {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret_1$2) {
            if (throwOnDirectAccess) {
              var err = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
                'Use `PropTypes.checkPropTypes()` to call them. ' +
                'Read more at http://fb.me/use-check-prop-types'
              );
              err.name = 'Invariant Violation';
              throw err;
            } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
              var cacheKey = componentName + ':' + propName;
              if (
                !manualPropTypeCallCache[cacheKey] &&
                manualPropTypeWarningCount < 3
              ) {
                printWarning$5(
                  'You are manually calling a React.PropTypes validation ' +
                  'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
                  'and will throw in the standalone `prop-types` package. ' +
                  'You may be seeing this warning due to a third-party PropTypes ' +
                  'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
              }
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull$2);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== 'function') {
            return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1$2);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          process.env.NODE_ENV !== 'production' ? printWarning$5('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
          return emptyFunctionThatReturnsNull$2;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== 'function') {
            return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
          }
          for (var key in propValue) {
            if (propValue.hasOwnProperty(key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1$2);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          process.env.NODE_ENV !== 'production' ? printWarning$5('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
          return emptyFunctionThatReturnsNull$2;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== 'function') {
            printWarning$5(
              'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
              'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
            );
            return emptyFunctionThatReturnsNull$2;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
            var checker = arrayOfTypeCheckers[i];
            if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1$2) == null) {
              return null;
            }
          }
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (!checker) {
              continue;
            }
            var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1$2);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== 'object') {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
          }
          var allKeys = objectAssign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (!checker) {
              return new PropTypeError(
                'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
                '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
                '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1$2);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case 'number':
          case 'string':
          case 'undefined':
            return true;
          case 'boolean':
            return !propValue;
          case 'object':
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === 'symbol') {
          return true;
        }
        if (propValue['@@toStringTag'] === 'Symbol') {
          return true;
        }
        if (typeof Symbol === 'function' && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return 'array';
        }
        if (propValue instanceof RegExp) {
          return 'object';
        }
        if (isSymbol(propType, propValue)) {
          return 'symbol';
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === 'undefined' || propValue === null) {
          return '' + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === 'object') {
          if (propValue instanceof Date) {
            return 'date';
          } else if (propValue instanceof RegExp) {
            return 'regexp';
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case 'array':
          case 'object':
            return 'an ' + type;
          case 'boolean':
          case 'date':
          case 'regexp':
            return 'a ' + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes_1$2;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };

    function emptyFunction$2() {}
    var factoryWithThrowingShims$2 = function() {
      function shim(props, propName, componentName, location, propFullName, secret) {
        if (secret === ReactPropTypesSecret_1$2) {
          return;
        }
        var err = new Error(
          'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
          'Use PropTypes.checkPropTypes() to call them. ' +
          'Read more at http://fb.me/use-check-prop-types'
        );
        err.name = 'Invariant Violation';
        throw err;
      }  shim.isRequired = shim;
      function getShim() {
        return shim;
      }  var ReactPropTypes = {
        array: shim,
        bool: shim,
        func: shim,
        number: shim,
        object: shim,
        string: shim,
        symbol: shim,
        any: shim,
        arrayOf: getShim,
        element: shim,
        instanceOf: getShim,
        node: shim,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim
      };
      ReactPropTypes.checkPropTypes = emptyFunction$2;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };

    var propTypes$3 = createCommonjsModule(function (module) {
    if (process.env.NODE_ENV !== 'production') {
      var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
        Symbol.for &&
        Symbol.for('react.element')) ||
        0xeac7;
      var isValidElement = function(object) {
        return typeof object === 'object' &&
          object !== null &&
          object.$$typeof === REACT_ELEMENT_TYPE;
      };
      var throwOnDirectAccess = true;
      module.exports = factoryWithTypeCheckers$2(isValidElement, throwOnDirectAccess);
    } else {
      module.exports = factoryWithThrowingShims$2();
    }
    });

    var key = '__global_unique_id__';
    var gud = function() {
      return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
    };

    function makeEmptyFunction(arg) {
      return function () {
        return arg;
      };
    }
    var emptyFunction$3 = function emptyFunction() {};
    emptyFunction$3.thatReturns = makeEmptyFunction;
    emptyFunction$3.thatReturnsFalse = makeEmptyFunction(false);
    emptyFunction$3.thatReturnsTrue = makeEmptyFunction(true);
    emptyFunction$3.thatReturnsNull = makeEmptyFunction(null);
    emptyFunction$3.thatReturnsThis = function () {
      return this;
    };
    emptyFunction$3.thatReturnsArgument = function (arg) {
      return arg;
    };
    var emptyFunction_1 = emptyFunction$3;

    var warning = emptyFunction_1;
    if (process.env.NODE_ENV !== 'production') {
      var printWarning$6 = function printWarning(format) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function () {
          return args[argIndex++];
        });
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {}
      };
      warning = function warning(condition, format) {
        if (format === undefined) {
          throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
        }
        if (format.indexOf('Failed Composite propType: ') === 0) {
          return;
        }
        if (!condition) {
          for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }
          printWarning$6.apply(undefined, [format].concat(args));
        }
      };
    }
    var warning_1 = warning;

    var implementation = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;
    var _react2 = _interopRequireDefault(React__default);
    var _propTypes2 = _interopRequireDefault(propTypes$3);
    var _gud2 = _interopRequireDefault(gud);
    var _warning2 = _interopRequireDefault(warning_1);
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
    function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
    function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
    var MAX_SIGNED_31_BIT_INT = 1073741823;
    function objectIs(x, y) {
      if (x === y) {
        return x !== 0 || 1 / x === 1 / y;
      } else {
        return x !== x && y !== y;
      }
    }
    function createEventEmitter(value) {
      var handlers = [];
      return {
        on: function on(handler) {
          handlers.push(handler);
        },
        off: function off(handler) {
          handlers = handlers.filter(function (h) {
            return h !== handler;
          });
        },
        get: function get() {
          return value;
        },
        set: function set(newValue, changedBits) {
          value = newValue;
          handlers.forEach(function (handler) {
            return handler(value, changedBits);
          });
        }
      };
    }
    function onlyChild(children) {
      return Array.isArray(children) ? children[0] : children;
    }
    function createReactContext(defaultValue, calculateChangedBits) {
      var _Provider$childContex, _Consumer$contextType;
      var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';
      var Provider = function (_Component) {
        _inherits(Provider, _Component);
        function Provider() {
          var _temp, _this, _ret;
          _classCallCheck(this, Provider);
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
        }
        Provider.prototype.getChildContext = function getChildContext() {
          var _ref;
          return _ref = {}, _ref[contextProp] = this.emitter, _ref;
        };
        Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
          if (this.props.value !== nextProps.value) {
            var oldValue = this.props.value;
            var newValue = nextProps.value;
            var changedBits = void 0;
            if (objectIs(oldValue, newValue)) {
              changedBits = 0;
            } else {
              changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
              if (process.env.NODE_ENV !== 'production') {
                (0, _warning2.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits);
              }
              changedBits |= 0;
              if (changedBits !== 0) {
                this.emitter.set(nextProps.value, changedBits);
              }
            }
          }
        };
        Provider.prototype.render = function render() {
          return this.props.children;
        };
        return Provider;
      }(React__default.Component);
      Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);
      var Consumer = function (_Component2) {
        _inherits(Consumer, _Component2);
        function Consumer() {
          var _temp2, _this2, _ret2;
          _classCallCheck(this, Consumer);
          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
            value: _this2.getValue()
          }, _this2.onUpdate = function (newValue, changedBits) {
            var observedBits = _this2.observedBits | 0;
            if ((observedBits & changedBits) !== 0) {
              _this2.setState({ value: _this2.getValue() });
            }
          }, _temp2), _possibleConstructorReturn(_this2, _ret2);
        }
        Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
          var observedBits = nextProps.observedBits;
          this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT
          : observedBits;
        };
        Consumer.prototype.componentDidMount = function componentDidMount() {
          if (this.context[contextProp]) {
            this.context[contextProp].on(this.onUpdate);
          }
          var observedBits = this.props.observedBits;
          this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT
          : observedBits;
        };
        Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
          if (this.context[contextProp]) {
            this.context[contextProp].off(this.onUpdate);
          }
        };
        Consumer.prototype.getValue = function getValue() {
          if (this.context[contextProp]) {
            return this.context[contextProp].get();
          } else {
            return defaultValue;
          }
        };
        Consumer.prototype.render = function render() {
          return onlyChild(this.props.children)(this.state.value);
        };
        return Consumer;
      }(React__default.Component);
      Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);
      return {
        Provider: Provider,
        Consumer: Consumer
      };
    }
    exports.default = createReactContext;
    module.exports = exports['default'];
    });
    unwrapExports(implementation);

    var lib = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;
    var _react2 = _interopRequireDefault(React__default);
    var _implementation2 = _interopRequireDefault(implementation);
    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    exports.default = _react2.default.createContext || _implementation2.default;
    module.exports = exports['default'];
    });
    var createContext = unwrapExports(lib);

    var ManagerContext = createContext({
      getReferenceRef: undefined,
      referenceNode: undefined
    });
    var Manager =
    /*#__PURE__*/
    function (_React$Component) {
      inheritsLoose(Manager, _React$Component);
      function Manager() {
        var _this;
        _this = _React$Component.call(this) || this;
        defineProperty(assertThisInitialized(assertThisInitialized(_this)), "getReferenceRef", function (referenceNode) {
          return _this.setState(function (_ref) {
            var context = _ref.context;
            return {
              context: _extends_1({}, context, {
                referenceNode: referenceNode
              })
            };
          });
        });
        _this.state = {
          context: {
            getReferenceRef: _this.getReferenceRef,
            referenceNode: undefined
          }
        };
        return _this;
      }
      var _proto = Manager.prototype;
      _proto.render = function render() {
        return React.createElement(ManagerContext.Provider, {
          value: this.state.context
        }, this.props.children);
      };
      return Manager;
    }(React.Component);

    var unwrapArray = function unwrapArray(arg) {
      return Array.isArray(arg) ? arg[0] : arg;
    };
    var safeInvoke = function safeInvoke(fn) {
      if (typeof fn === "function") {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        return fn.apply(void 0, args);
      }
    };

    var initialStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      opacity: 0,
      pointerEvents: 'none'
    };
    var initialArrowStyle = {};
    var InnerPopper =
    /*#__PURE__*/
    function (_React$Component) {
      inheritsLoose(InnerPopper, _React$Component);
      function InnerPopper() {
        var _this;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
        defineProperty(assertThisInitialized(assertThisInitialized(_this)), "state", {
          data: undefined,
          placement: undefined
        });
        defineProperty(assertThisInitialized(assertThisInitialized(_this)), "popperInstance", void 0);
        defineProperty(assertThisInitialized(assertThisInitialized(_this)), "popperNode", null);
        defineProperty(assertThisInitialized(assertThisInitialized(_this)), "arrowNode", null);
        defineProperty(assertThisInitialized(assertThisInitialized(_this)), "setPopperNode", function (popperNode) {
          if (!popperNode || _this.popperNode === popperNode) return;
          safeInvoke(_this.props.innerRef, popperNode);
          _this.popperNode = popperNode;
          _this.updatePopperInstance();
        });
        defineProperty(assertThisInitialized(assertThisInitialized(_this)), "setArrowNode", function (arrowNode) {
          _this.arrowNode = arrowNode;
        });
        defineProperty(assertThisInitialized(assertThisInitialized(_this)), "updateStateModifier", {
          enabled: true,
          order: 900,
          fn: function fn(data) {
            var placement = data.placement;
            _this.setState({
              data: data,
              placement: placement
            });
            return data;
          }
        });
        defineProperty(assertThisInitialized(assertThisInitialized(_this)), "getOptions", function () {
          return {
            placement: _this.props.placement,
            eventsEnabled: _this.props.eventsEnabled,
            positionFixed: _this.props.positionFixed,
            modifiers: _extends_1({}, _this.props.modifiers, {
              arrow: _extends_1({}, _this.props.modifiers && _this.props.modifiers.arrow, {
                enabled: !!_this.arrowNode,
                element: _this.arrowNode
              }),
              applyStyle: {
                enabled: false
              },
              updateStateModifier: _this.updateStateModifier
            })
          };
        });
        defineProperty(assertThisInitialized(assertThisInitialized(_this)), "getPopperStyle", function () {
          return !_this.popperNode || !_this.state.data ? initialStyle : _extends_1({
            position: _this.state.data.offsets.popper.position
          }, _this.state.data.styles);
        });
        defineProperty(assertThisInitialized(assertThisInitialized(_this)), "getPopperPlacement", function () {
          return !_this.state.data ? undefined : _this.state.placement;
        });
        defineProperty(assertThisInitialized(assertThisInitialized(_this)), "getArrowStyle", function () {
          return !_this.arrowNode || !_this.state.data ? initialArrowStyle : _this.state.data.arrowStyles;
        });
        defineProperty(assertThisInitialized(assertThisInitialized(_this)), "getOutOfBoundariesState", function () {
          return _this.state.data ? _this.state.data.hide : undefined;
        });
        defineProperty(assertThisInitialized(assertThisInitialized(_this)), "destroyPopperInstance", function () {
          if (!_this.popperInstance) return;
          _this.popperInstance.destroy();
          _this.popperInstance = null;
        });
        defineProperty(assertThisInitialized(assertThisInitialized(_this)), "updatePopperInstance", function () {
          _this.destroyPopperInstance();
          var _assertThisInitialize = assertThisInitialized(assertThisInitialized(_this)),
              popperNode = _assertThisInitialize.popperNode;
          var referenceElement = _this.props.referenceElement;
          if (!referenceElement || !popperNode) return;
          _this.popperInstance = new Popper(referenceElement, popperNode, _this.getOptions());
        });
        defineProperty(assertThisInitialized(assertThisInitialized(_this)), "scheduleUpdate", function () {
          if (_this.popperInstance) {
            _this.popperInstance.scheduleUpdate();
          }
        });
        return _this;
      }
      var _proto = InnerPopper.prototype;
      _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
        if (this.props.placement !== prevProps.placement || this.props.referenceElement !== prevProps.referenceElement || this.props.positionFixed !== prevProps.positionFixed) {
          this.updatePopperInstance();
        } else if (this.props.eventsEnabled !== prevProps.eventsEnabled && this.popperInstance) {
          this.props.eventsEnabled ? this.popperInstance.enableEventListeners() : this.popperInstance.disableEventListeners();
        }
        if (prevState.placement !== this.state.placement) {
          this.scheduleUpdate();
        }
      };
      _proto.componentWillUnmount = function componentWillUnmount() {
        safeInvoke(this.props.innerRef, null);
        this.destroyPopperInstance();
      };
      _proto.render = function render() {
        return unwrapArray(this.props.children)({
          ref: this.setPopperNode,
          style: this.getPopperStyle(),
          placement: this.getPopperPlacement(),
          outOfBoundaries: this.getOutOfBoundariesState(),
          scheduleUpdate: this.scheduleUpdate,
          arrowProps: {
            ref: this.setArrowNode,
            style: this.getArrowStyle()
          }
        });
      };
      return InnerPopper;
    }(React.Component);
    defineProperty(InnerPopper, "defaultProps", {
      placement: 'bottom',
      eventsEnabled: true,
      referenceElement: undefined,
      positionFixed: false
    });
    function Popper$1(_ref) {
      var referenceElement = _ref.referenceElement,
          props = objectWithoutPropertiesLoose(_ref, ["referenceElement"]);
      return React.createElement(ManagerContext.Consumer, null, function (_ref2) {
        var referenceNode = _ref2.referenceNode;
        return React.createElement(InnerPopper, _extends_1({
          referenceElement: referenceElement !== undefined ? referenceElement : referenceNode
        }, props));
      });
    }

    var __DEV__ = process.env.NODE_ENV !== 'production';
    var warning$1 = function() {};
    if (__DEV__) {
      var printWarning$7 = function printWarning(format, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for (var key = 2; key < len; key++) {
          args[key - 2] = arguments[key];
        }
        var argIndex = 0;
        var message = 'Warning: ' +
          format.replace(/%s/g, function() {
            return args[argIndex++];
          });
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {}
      };
      warning$1 = function(condition, format, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for (var key = 2; key < len; key++) {
          args[key - 2] = arguments[key];
        }
        if (format === undefined) {
          throw new Error(
              '`warning(condition, format, ...args)` requires a warning ' +
              'message argument'
          );
        }
        if (!condition) {
          printWarning$7.apply(null, [format].concat(args));
        }
      };
    }
    var warning_1$1 = warning$1;

    var InnerReference =
    /*#__PURE__*/
    function (_React$Component) {
      inheritsLoose(InnerReference, _React$Component);
      function InnerReference() {
        var _this;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
        defineProperty(assertThisInitialized(assertThisInitialized(_this)), "refHandler", function (node) {
          safeInvoke(_this.props.innerRef, node);
          safeInvoke(_this.props.getReferenceRef, node);
        });
        return _this;
      }
      var _proto = InnerReference.prototype;
      _proto.render = function render() {
        warning_1$1(this.props.getReferenceRef, '`Reference` should not be used outside of a `Manager` component.');
        return unwrapArray(this.props.children)({
          ref: this.refHandler
        });
      };
      return InnerReference;
    }(React.Component);
    function Reference(props) {
      return React.createElement(ManagerContext.Consumer, null, function (_ref) {
        var getReferenceRef = _ref.getReferenceRef;
        return React.createElement(InnerReference, _extends_1({
          getReferenceRef: getReferenceRef
        }, props));
      });
    }

    var popperStyle =
    /*#__PURE__*/
    css({
      margin: 14,
      boxShadow: constants.boxShadow.xElevated,
      borderRadius: constants.borderRadius
    });
    var arrowStyle =
    /*#__PURE__*/
    css({
      position: "absolute",
      textShadow: "1px 0 20px rgba(0,0,0,0.1)",
      "&[data-placement^='top']": {
        transform: "rotate(90deg)",
        bottom: -11
      },
      "&[data-placement^='bottom']": {
        transform: "rotate(-90deg)",
        top: -11
      },
      "&[data-placement^='right']": {
        transform: "rotate(180deg)",
        left: -11
      },
      "&[data-placement^='left']": {
        right: -11
      }
    });

    var default_1 =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _inherits(default_1, _React$PureComponent);
      function default_1() {
        var _this;
        _classCallCheck(this, default_1);
        _this = _possibleConstructorReturn(this, _getPrototypeOf(default_1).apply(this, arguments));
        _this.state = {
          isOpen: !!_this.props.isOpen
        };
        _this.toggle = function () {
          _this.setState({
            isOpen: !_this.state.isOpen
          });
        };
        return _this;
      }
      _createClass(default_1, [{
        key: "render",
        value: function render() {
          var _this2 = this;
          var _a = this.props,
              label = _a.label,
              popperBackgroundColor = _a.popperBackgroundColor,
              children = _a.children,
              controlled = _a.controlled,
              isOpen = _a.isOpen,
              popperClassName = _a.popperClassName,
              _onOutsideClick = _a.onOutsideClick,
              props = __rest(_a, ["label", "popperBackgroundColor", "children", "controlled", "isOpen", "popperClassName", "onOutsideClick"]);
          var _isPopperOpen = controlled ? !!isOpen : this.state.isOpen;
          return React.createElement(OutsideClick, {
            onOutsideClick: function onOutsideClick() {
              _this2.setState({
                isOpen: false
              });
              if (_onOutsideClick) {
                _onOutsideClick();
              }
            },
            disabled: !_isPopperOpen
          }, React.createElement(Manager, null, React.createElement(Reference, null, function (_ref) {
            var ref = _ref.ref;
            return React.createElement("div", {
              style: {
                display: "inline-block"
              },
              ref: ref
            }, typeof label === "function" ? label({
              toggle: _this2.toggle,
              isOpen: _this2.state.isOpen
            }) : label);
          }), React.createElement(MountTransition, {
            visible: _isPopperOpen
          }, function (transitionStyles) {
            return React.createElement(Popper$1, Object.assign({}, props, {
              positionFixed: true
            }), function (_ref2) {
              var ref = _ref2.ref,
                  style = _ref2.style,
                  placement = _ref2.placement,
                  arrowProps = _ref2.arrowProps;
              var wrapperStyle = Object.assign({}, style, transitionStyles, {
                backgroundColor: popperBackgroundColor,
                transform: "".concat(style.transform || "", " ").concat(transitionStyles.transform || ""),
                transformOrigin: "".concat(arrowProps.style.left || 0, "px ").concat(arrowProps.style.top || 0, "px")
              });
              return React.createElement("div", {
                className: cx(popperStyle, popperClassName),
                ref: ref,
                style: wrapperStyle,
                "data-placement": placement
              }, children({
                toggle: _this2.toggle,
                isOpen: _this2.state.isOpen
              }), React.createElement("div", {
                className: arrowStyle,
                ref: arrowProps.ref,
                style: Object.assign({}, arrowProps.style, {
                  color: popperBackgroundColor
                }),
                "data-placement": placement
              }, "\u25B6"));
            });
          })));
        }
      }]);
      return default_1;
    }(React.PureComponent);
    default_1.defaultProps = {
      placement: "bottom",
      popperBackgroundColor: colors.white.base,
      closeOnOutsideClick: true
    };

    var textStyle =
    /*#__PURE__*/
    css(Object.assign({}, typography.s.regular, {
      color: colors.white.base,
      display: "block",
      padding: "10px 16px"
    }));
    var popperStyle$1 =
    /*#__PURE__*/
    css({
      margin: 4,
      boxShadow: "none",
      maxWidth: 320
    });

    var Tooltip =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _inherits(Tooltip, _React$PureComponent);
      function Tooltip() {
        var _this;
        _classCallCheck(this, Tooltip);
        _this = _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).apply(this, arguments));
        _this.state = {
          isOpen: !!_this.props.isOpen
        };
        _this.labelRef = React.createRef();
        _this.showTooltip = function () {
          return _this.setState({
            isOpen: true
          });
        };
        _this.hideTooltip = function () {
          return _this.setState({
            isOpen: false
          });
        };
        _this.addListeners = function () {
          if (!_this.props.disabled) {
            _this.labelRef.current.addEventListener("mouseenter", _this.showTooltip);
            _this.labelRef.current.addEventListener("mouseout", _this.hideTooltip);
          }
        };
        _this.removeListeners = function () {
          _this.labelRef.current.removeEventListener("mouseenter", _this.showTooltip);
          _this.labelRef.current.removeEventListener("mouseout", _this.showTooltip);
        };
        _this.getTooltip = function () {
          return React.createElement("span", {
            className: textStyle
          }, _this.props.text);
        };
        return _this;
      }
      _createClass(Tooltip, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.addListeners();
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.removeListeners();
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          if (prevProps.disabled !== this.props.disabled) {
            this.props.disabled ? this.removeListeners() : this.addListeners();
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;
          var _this$props = this.props,
              placement = _this$props.placement,
              _label = _this$props.label,
              modifiers = _this$props.modifiers,
              isError = _this$props.isError;
          return React.createElement(default_1, {
            label: function label() {
              return _label({
                ref: _this2.labelRef
              });
            },
            placement: placement,
            positionFixed: true,
            controlled: true,
            popperBackgroundColor: isError ? colors.red.base : colors.gray.darker,
            modifiers: modifiers,
            isOpen: this.props.isOpen || this.state.isOpen,
            popperClassName: popperStyle$1,
            closeOnOutsideClick: false
          }, this.getTooltip);
        }
      }]);
      return Tooltip;
    }(React.PureComponent);

    var Logo = function Logo(_ref) {
      var _ref$height = _ref.height,
          height = _ref$height === void 0 ? 40 : _ref$height,
          _ref$color = _ref.color,
          color = _ref$color === void 0 ? "#000000" : _ref$color;
      var style =
      /*#__PURE__*/
      css({
        fill: color
      });
      return React.createElement("svg", {
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        height: height,
        viewBox: "0 0 413.31 92.91"
      }, React.createElement("defs", null, React.createElement("clipPath", {
        id: "clip-path",
        transform: "translate(-57.88 -61.39)"
      }, React.createElement("rect", {
        className: "cls-1",
        width: "529.46",
        height: "215.51"
      }))), React.createElement("g", {
        id: "Layer_2",
        "data-name": "Layer 2"
      }, React.createElement("g", {
        className: "cls-2",
        id: "Layer_1-2",
        "data-name": "Layer 1"
      }, React.createElement("polygon", {
        className: style,
        points: "7.31 91.39 3.84 82.98 2.62 82.98 6.81 92.81 7.79 92.81 11.98 82.98 10.8 82.98 7.31 91.39"
      }), React.createElement("path", {
        className: style,
        d: "M89.05 144.31l-4.45 9.82h1.13l1.16-2.57h5.31l1.14 2.57h1.18l-4.44-9.82zm-1.73 6.24l2.23-5 2.22 5z",
        transform: "translate(-57.88 -61.39)"
      }), React.createElement("polygon", {
        className: style,
        points: "54.71 82.98 53.61 82.98 53.61 92.74 60.2 92.74 60.2 91.72 54.71 91.72 54.71 82.98"
      }), React.createElement("path", {
        className: style,
        d: "M141.75 150.05c0 2.13-1.14 3.22-2.94 3.22s-3-1.18-3-3.29v-5.6h-1.1v5.67c0 2.76 1.64 4.24 4.05 4.24s4.07-1.48 4.07-4.32v-5.59h-1.1z",
        transform: "translate(-57.88 -61.39)"
      }), React.createElement("polygon", {
        className: style,
        points: "103.72 88.32 109.04 88.32 109.04 87.32 103.72 87.32 103.72 83.99 109.67 83.99 109.67 82.98 102.62 82.98 102.62 92.74 109.74 92.74 109.74 91.74 103.72 91.74 103.72 88.32"
      }), React.createElement("path", {
        className: style,
        d: "M186.15 148.73c-2.14-.46-2.65-1-2.65-1.9 0-.87.81-1.57 2.08-1.57a4.3 4.3 0 0 1 2.82 1.06l.64-.85a5.07 5.07 0 0 0-3.43-1.2c-1.85 0-3.21 1.13-3.21 2.66 0 1.6 1 2.33 3.28 2.81 2 .44 2.54.95 2.54 1.86 0 1-.87 1.65-2.18 1.65a4.63 4.63 0 0 1-3.34-1.38l-.69.81a5.69 5.69 0 0 0 4 1.56c1.94 0 3.33-1.08 3.33-2.76 0-1.49-1-2.29-3.18-2.76m44.24-4.51a5 5 0 0 0-5 5 5 5 0 1 0 10 0 4.9 4.9 0 0 0-5-5m3.82 5.07a3.83 3.83 0 0 1-3.82 4 3.88 3.88 0 0 1-3.85-4 3.83 3.83 0 0 1 3.82-4 3.88 3.88 0 0 1 3.85 4z",
        transform: "translate(-57.88 -61.39)"
      }), React.createElement("polygon", {
        className: style,
        points: "198.14 91.39 194.67 82.98 193.44 82.98 197.64 92.81 198.61 92.81 202.81 82.98 201.62 82.98 198.14 91.39"
      }), React.createElement("polygon", {
        className: style,
        points: "220.87 88.32 226.2 88.32 226.2 87.32 220.87 87.32 220.87 83.99 226.82 83.99 226.82 82.98 219.77 82.98 219.77 92.74 226.9 92.74 226.9 91.74 220.87 91.74 220.87 88.32"
      }), React.createElement("path", {
        className: style,
        d: "M309.76 147.31a2.73 2.73 0 0 0-.75-1.93 3.88 3.88 0 0 0-2.78-1H302v9.75h1.1v-3.79h2.78l2.83 3.79h1.35l-3-4a2.86 2.86 0 0 0 2.65-2.84m-6.62 2v-3.89h3c1.57 0 2.49.72 2.49 1.92 0 1.25-1 2-2.51 2z",
        transform: "translate(-57.88 -61.39)"
      }), React.createElement("polygon", {
        className: style,
        points: "292.36 91.39 288.89 82.98 287.66 82.98 291.86 92.81 292.83 92.81 297.03 82.98 295.84 82.98 292.36 91.39"
      }), React.createElement("path", {
        className: style,
        d: "M374.09 144.31l-4.44 9.82h1.13l1.15-2.57h5.31l1.15 2.57h1.18l-4.45-9.82zm-1.73 6.24l2.23-5 2.22 5z",
        transform: "translate(-57.88 -61.39)"
      }), React.createElement("polygon", {
        className: style,
        points: "339.75 82.98 338.65 82.98 338.65 92.74 345.24 92.74 345.24 91.72 339.75 91.72 339.75 82.98"
      }), React.createElement("path", {
        className: style,
        d: "M426.8 150.05c0 2.13-1.14 3.22-2.94 3.22s-3-1.18-3-3.29v-5.6h-1.11v5.67c0 2.76 1.65 4.24 4.06 4.24s4.07-1.48 4.07-4.32v-5.59h-1.1z",
        transform: "translate(-57.88 -61.39)"
      }), React.createElement("polygon", {
        className: style,
        points: "388.76 88.32 394.09 88.32 394.09 87.32 388.76 87.32 388.76 83.99 394.72 83.99 394.72 82.98 387.66 82.98 387.66 92.74 394.79 92.74 394.79 91.74 388.76 91.74 388.76 88.32"
      }), React.createElement("rect", {
        className: style,
        y: "76.12",
        width: "399.11",
        height: "0.74"
      }), React.createElement("polygon", {
        className: style,
        points: "72.54 33.07 117.31 71.74 117.31 11.02 107.61 11.03 107.61 51.1 63.42 11.18 63.42 71.06 72.54 71.06 72.54 33.07"
      }), React.createElement("path", {
        className: style,
        d: "M193.23 120.52h27.68l5.81 12h10.95l-30.41-62L177 132.5h10.44zm4.12-9.93l9.33-19.19 9.32 19.19zm-122.42 9.93h27.68l5.82 12h10.95L89 70.47l-30.29 62h10.4zm4.12-9.93l9.33-19.19 9.33 19.19zM248.39 120h2.89v13h2.81v-15.81h-8.5v13.05H242v-18.56l7.22-6.61 27.3 27.66h13.89l-26.89-26.54c5.63-.34 21.73-2.47 21.73-15.85 0-11.29-8.31-18-22.23-18h-23.71V133h9.09zm14.13-22.2H250V82.33h12.3c7.59 0 11.94 2.59 11.94 7.1.04 7.26-7.33 8.34-11.72 8.34zm55.55 34.72c18.06 0 30.67-12.37 30.67-30.09A30 30 0 0 0 340.28 81c-5.55-5.55-13.44-8.6-22.21-8.6-17.84 0-30.78 12.65-30.78 30.08s12.94 30.09 30.78 30.09m-21.41-30.1c0-13.3 8.81-22.6 21.43-22.6s21.27 9.3 21.27 22.6-8.75 22.74-21.27 22.74-21.43-9.4-21.43-22.79zm84.28 30.26c10.83 0 19-4.43 24.42-13.17l.25-.4-6.25-5.06-.31.57c-4.47 8.19-11.83 9.91-17.21 9.91-12.38 0-20.69-8.94-20.69-22.24 0-12.2 8.59-21.4 20-21.4 7.29 0 13.67 2.68 16.24 6.82l.37.6 5.77-6.15-.27-.36c-4.64-6.25-12-9.29-22.53-9.29-17.09 0-30 12.83-30 29.85 0 17.85 12.42 30.32 30.2 30.32",
        transform: "translate(-57.88 -61.39)"
      }), React.createElement("polygon", {
        className: style,
        points: "360.13 46.74 362.55 44.05 386.41 70.99 398.53 70.99 369.14 37.48 394.27 11.15 382.73 11.15 360.13 34.58 360.13 11.02 349.68 11.02 349.68 71.02 360.13 71.02 360.13 46.74"
      }), React.createElement("path", {
        className: style,
        d: "M461.59 68.58h1.6a2.58 2.58 0 0 0 1.57-.34 1.08 1.08 0 0 0 .42-.9 1.1 1.1 0 0 0-.2-.64 1.28 1.28 0 0 0-.56-.43 4.3 4.3 0 0 0-1.33-.14h-1.5zm-1.31 4.6V65h2.8a6.88 6.88 0 0 1 2.09.23 2 2 0 0 1 1 .79 2.1 2.1 0 0 1 .38 1.19 2.17 2.17 0 0 1-.64 1.56 2.53 2.53 0 0 1-1.7.74 2.27 2.27 0 0 1 .69.43 9.29 9.29 0 0 1 1.21 1.62l1 1.6h-1.6l-.73-1.29a6.64 6.64 0 0 0-1.39-1.9 1.67 1.67 0 0 0-1.05-.27h-.78v3.46zm3.33-10.53a6.55 6.55 0 0 0-3.12.82 5.89 5.89 0 0 0-2.37 2.35 6.31 6.31 0 0 0 0 6.31 5.9 5.9 0 0 0 2.35 2.35 6.33 6.33 0 0 0 6.3 0 5.88 5.88 0 0 0 2.34-2.35 6.35 6.35 0 0 0 .84-3.14 6.47 6.47 0 0 0-.85-3.17 5.89 5.89 0 0 0-2.37-2.35 6.57 6.57 0 0 0-3.12-.82zm0-1.26a7.72 7.72 0 0 1 3.73 1 7 7 0 0 1 2.84 2.8 7.82 7.82 0 0 1 1 3.81 7.63 7.63 0 0 1-1 3.77 7 7 0 0 1-2.8 2.81 7.58 7.58 0 0 1-7.56 0 7 7 0 0 1-2.82-2.82 7.64 7.64 0 0 1-1-3.76 7.72 7.72 0 0 1 1-3.81 7 7 0 0 1 2.84-2.8 7.76 7.76 0 0 1 3.77-1z",
        transform: "translate(-57.88 -61.39)"
      }))));
    };

    var modalPadding = 30;
    var modalContainer$1 =
    /*#__PURE__*/
    css({
      background: "white",
      width: "360px",
      alignSelf: "center",
      borderRadius: constants.borderRadius,
      padding: "".concat(modalPadding, "px"),
      position: "relative"
    });
    var flexCenter =
    /*#__PURE__*/
    css({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%"
    });
    var buttonsContainer =
    /*#__PURE__*/
    css(Object.assign({}, flexSpaceBetween, {
      marginTop: "40px"
    }));
    var iconCloseClassName =
    /*#__PURE__*/
    css({
      cursor: "pointer",
      position: "absolute",
      right: "".concat(modalPadding, "px"),
      top: "".concat(modalPadding, "px"),
      fontSize: "14px",
      color: colors.gray.base,
      "&:hover": {
        color: colors.gray.darker
      }
    });

    var PopUp = function PopUp(props) {
      var onClose = props.onClose,
          onApprove = props.onApprove,
          onReject = props.onReject,
          visible = props.visible,
          _props$approveButtonT = props.approveButtonText,
          approveButtonText = _props$approveButtonT === void 0 ? "Yes" : _props$approveButtonT,
          _props$rejectButtonTe = props.rejectButtonText,
          rejectButtonText = _props$rejectButtonTe === void 0 ? "No" : _props$rejectButtonTe,
          children = props.children;
      return React.createElement(Modal, {
        visible: visible,
        modalClassName: flexCenter
      }, React.createElement("div", {
        className: modalContainer$1
      }, onClose && React.createElement("i", {
        className: cx("pi", "pi-close", iconCloseClassName),
        onClick: onClose
      }), children, (onReject || onApprove) && React.createElement("div", {
        className: buttonsContainer
      }, onReject && React.createElement(Button, {
        size: "large",
        type: "secondary",
        onClick: onReject
      }, rejectButtonText), onApprove && React.createElement(Button, {
        size: "large",
        type: "primary",
        onClick: onApprove
      }, approveButtonText))));
    };

    var radioIconStyle =
    /*#__PURE__*/
    css({
      marginRight: 10,
      fontSize: 16
    });
    var controlStyle =
    /*#__PURE__*/
    css(Object.assign({
      cursor: "pointer",
      display: "flex",
      outline: "none",
      padding: "10px 0",
      position: "relative",
      alignItems: "center"
    }, typography.normal.regular, {
      "&[data-disabled='true']": _defineProperty({
        cursor: "not-allowed"
      }, ".".concat(radioIconStyle), {
        color: colors.gray.light
      })
    }));

    function Control(props) {
      var checked = props.checked,
          onChange = props.onChange,
          value = props.value,
          disabled = props.disabled,
          _props$children = props.children,
          children = _props$children === void 0 ? ControlView : _props$children,
          type = props.type,
          className = props.className;
      return React.createElement("div", {
        className: cx(controlStyle, className),
        role: type,
        "aria-disabled": disabled,
        "aria-checked": checked,
        "data-disabled": disabled,
        tabIndex: checked ? 0 : -1,
        onClick: !disabled ? function (e) {
          return onChange && onChange({
            value: value,
            checked: !checked
          }, e);
        } : undefined
      }, children(props));
    }
    var ControlView = function ControlView(_ref) {
      var checked = _ref.checked,
          label = _ref.label,
          type = _ref.type,
          disabled = _ref.disabled;
      var isRadio = type === "radio";
      var iconClass = cx(radioIconStyle, "pi", {
        "pi-radio": isRadio && !checked && !disabled,
        "pi-radio-selected": isRadio && (checked || disabled),
        "pi-checkbox-selected": !isRadio && (checked || disabled),
        "pi-checkbox-unselected": !isRadio && !checked && !disabled
      });
      var getColor = function getColor() {
        if (disabled) {
          return colors.gray.base;
        }
        if (checked) {
          return colors.violet.base;
        }
        return colors.gray.light;
      };
      return React.createElement(React.Fragment, null, React.createElement("i", {
        style: {
          color: getColor(),
          paddingTop: 2
        },
        className: iconClass
      }), " ", label);
    };

    function Radio(props) {
      return React.createElement(Control, Object.assign({}, props, {
        type: "radio"
      }));
    }

    var RadioGroup =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _inherits(RadioGroup, _React$PureComponent);
      function RadioGroup() {
        var _this;
        _classCallCheck(this, RadioGroup);
        _this = _possibleConstructorReturn(this, _getPrototypeOf(RadioGroup).apply(this, arguments));
        _this.handleChange = function (_ref, event) {
          var value = _ref.value,
              checked = _ref.checked;
          var _this$props = _this.props,
              toggle = _this$props.toggle,
              selected = _this$props.selected,
              onChange = _this$props.onChange;
          if (!toggle && value === selected) return;
          onChange(checked ? value : undefined, event);
        };
        return _this;
      }
      _createClass(RadioGroup, [{
        key: "render",
        value: function render() {
          var _this2 = this;
          var _this$props2 = this.props,
              children = _this$props2.children,
              selected = _this$props2.selected,
              className = _this$props2.className,
              name = _this$props2.name,
              disabled = _this$props2.disabled;
          var _children = React.Children.map(children, function (_radio) {
            var radio = _radio;
            return React.cloneElement(radio, {
              onChange: _this2.handleChange,
              checked: selected === radio.props.value,
              disabled: disabled
            });
          });
          return React.createElement("div", {
            role: "radiogroup",
            "aria-label": name,
            className: className
          }, _children);
        }
      }]);
      return RadioGroup;
    }(React.PureComponent);

    function Checkbox(props) {
      return React.createElement(Control, Object.assign({}, props, {
        type: "checkbox"
      }));
    }

    var CheckboxGroup =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _inherits(CheckboxGroup, _React$PureComponent);
      function CheckboxGroup() {
        var _this;
        _classCallCheck(this, CheckboxGroup);
        _this = _possibleConstructorReturn(this, _getPrototypeOf(CheckboxGroup).apply(this, arguments));
        _this.handleChange = function (_ref, event) {
          var value = _ref.value;
          var _this$props = _this.props,
              onChange = _this$props.onChange,
              selected = _this$props.selected;
          onChange(getSelectedCheckboxes(value, selected), event);
        };
        return _this;
      }
      _createClass(CheckboxGroup, [{
        key: "render",
        value: function render() {
          var _this2 = this;
          var _this$props2 = this.props,
              children = _this$props2.children,
              selected = _this$props2.selected,
              className = _this$props2.className,
              name = _this$props2.name,
              disabled = _this$props2.disabled;
          var _children = React.Children.map(children, function (_checkbox) {
            var checkbox = _checkbox;
            return React.cloneElement(checkbox, {
              onChange: _this2.handleChange,
              checked: selected.indexOf(checkbox.props.value) >= 0,
              disabled: disabled
            });
          });
          return React.createElement("div", {
            role: "checkboxgroup",
            "aria-label": name,
            className: className
          }, _children);
        }
      }]);
      return CheckboxGroup;
    }(React.PureComponent);

    var rowWrapper =
    /*#__PURE__*/
    css(Object.assign({}, typography.normal.regular, {
      cursor: "pointer",
      padding: "12px 18px",
      position: "relative",
      lineHeight: "28px",
      zIndex: 999
    }, textEllipsis, flexSpaceBetween, {
      alignItems: "center",
      display: "flex",
      "&:last-of-type": {
        border: 0
      },
      "&:hover": {
        backgroundColor: colors.gray.lightest
      }
    }));
    var labelWrap =
    /*#__PURE__*/
    css({
      userSelect: "none",
      overflow: "hidden",
      textOverflow: "ellipsis"
    });
    var activeRow =
    /*#__PURE__*/
    css({
      backgroundColor: colors.gray.lightest
    });
    var selectedRow =
    /*#__PURE__*/
    css(Object.assign({
      color: colors.violet.base
    }, typography.normal.bold));

    var defaultProps = {
      rightElement: function rightElement(_ref) {
        var isSelected = _ref.isSelected,
            multiSelect = _ref.multiSelect;
        var iconClass = cx("pi", {
          "pi-checkbox-selected": isSelected,
          "pi-checkbox-unselected": !isSelected
        },
        /*#__PURE__*/
        css({
          marginLeft: "10px",
          color: isSelected ? colors.violet.base : colors.gray.light,
          fontSize: "20px"
        }));
        return multiSelect ? React.createElement("i", {
          className: iconClass
        }) : null;
      }
    };
    var Option =
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(Option, _React$Component);
      function Option() {
        _classCallCheck(this, Option);
        return _possibleConstructorReturn(this, _getPrototypeOf(Option).apply(this, arguments));
      }
      _createClass(Option, [{
        key: "render",
        value: function render() {
          var _cx,
              _this = this;
          var _this$props = this.props,
              label = _this$props.label,
              isActive = _this$props.isActive,
              isSelected = _this$props.isSelected,
              rightElement = _this$props.rightElement,
              labelClassName = _this$props.labelClassName,
              className = _this$props.className;
          var _class = cx(rowWrapper, (_cx = {}, _defineProperty(_cx, activeRow, isActive), _defineProperty(_cx, selectedRow, isSelected), _cx), className);
          return React.createElement(Control, Object.assign({}, this.props, {
            checked: this.props.isSelected,
            type: this.props.multiSelect ? "checkbox" : "radio",
            className: _class
          }), function () {
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: cx(labelWrap, labelClassName)
            }, label), rightElement(_this.props), React.createElement(Ink, null));
          });
        }
      }]);
      return Option;
    }(React.Component);
    Option.defaultProps = defaultProps;

    var wrapper$1 =
    /*#__PURE__*/
    css({
      display: "flex"
    });
    var selectStyle =
    /*#__PURE__*/
    css({
      width: "80px",
      marginBottom: 0
    });
    var combinedLabelStyle =
    /*#__PURE__*/
    css({
      zIndex: 1
    });

    var PhoneNumberInput =
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(PhoneNumberInput, _React$Component);
      function PhoneNumberInput() {
        var _this;
        _classCallCheck(this, PhoneNumberInput);
        _this = _possibleConstructorReturn(this, _getPrototypeOf(PhoneNumberInput).apply(this, arguments));
        _this.onCountrySelect = function (countryCode) {
          _this.props.onChange({
            countryCode: countryCode,
            phone: _this.props.phone
          });
        };
        _this.onNumberChange = function (value) {
          var _value = value.replace(/\D/g, "");
          if (_value === _this.props.phone) {
            return;
          }
          _this.props.onChange({
            countryCode: _this.props.countryCode,
            phone: _value
          });
        };
        return _this;
      }
      _createClass(PhoneNumberInput, [{
        key: "render",
        value: function render() {
          var _this$props = this.props,
              phone = _this$props.phone,
              countryCode = _this$props.countryCode,
              className = _this$props.className,
              selectProps = _this$props.selectProps,
              inputProps = _this$props.inputProps,
              required = _this$props.required,
              placeholder = _this$props.placeholder;
          return React.createElement("div", {
            className: cx(wrapper$1, className)
          }, React.createElement("label", {
            className: cx(labelStyle, "_pebble_input_label_focused", combinedLabelStyle)
          }, placeholder || "Phone No.", required && React.createElement("span", {
            style: {
              color: colors.red.base
            }
          }, "\xA0*")), React.createElement(Select, Object.assign({
            placeholder: "",
            onChange: this.onCountrySelect,
            value: countryCode + "",
            selected: countryCode
          }, selectProps, {
            className: cx(selectStyle, selectProps && selectProps.className)
          }), this.props.children), React.createElement(Input, Object.assign({
            onChange: this.onNumberChange,
            placeholder: "",
            value: phone
          }, inputProps)));
        }
      }]);
      return PhoneNumberInput;
    }(React.Component);

    var timePickerWrap =
    /*#__PURE__*/
    css({
      display: "flex",
      alignItems: "center",
      border: "1px solid ".concat(colors.gray.light),
      borderRadius: "3px",
      cursor: "pointer",
      "&:not([disabled]):hover": {
        background: colors.gray.light
      }
    });
    var timePickerSelected =
    /*#__PURE__*/
    css({
      backgroundColor: colors.gray.lighter
    });
    var hourPicker =
    /*#__PURE__*/
    css({
      borderRadius: "3px 0px 0px 3px",
      borderRight: "none"
    });
    var seperator =
    /*#__PURE__*/
    css({
      color: colors.gray.dark,
      lineHeight: "40px"
    });
    var minutePicker =
    /*#__PURE__*/
    css({
      borderLeft: "none",
      borderRadius: "0px 3px 3px 0px"
    });
    var optionStyle =
    /*#__PURE__*/
    css({
      width: "100px"
    });

    var HOURS =
    /*#__PURE__*/
    _toConsumableArray(Array(12)).map(function (_, i) {
      return ("00" + (i + 1).toString(10)).slice(-2);
    });
    var MINUTES =
    /*#__PURE__*/
    _toConsumableArray(Array(4)).map(function (_, i) {
      return ("00" + (i * 15).toString(10)).slice(-2);
    });
    var iconStyle$1 =
    /*#__PURE__*/
    css({
      marginLeft: 15,
      fontWeight: "bold",
      fontSize: 8,
      transition: "transform ease-out .2s",
      willTransform: "transform",
      marginTop: 2,
      color: colors.gray.dark,
      display: "inline-block"
    });
    var buttonStyle =
    /*#__PURE__*/
    css({
      padding: "15px 20px",
      fontSize: "12px",
      color: colors.gray.darker,
      lineHeight: "9px"
    });
    var TimePicker = function TimePicker(props) {
      var _cx;
      var selectedHour = props.selectedHour,
          selectedMinute = props.selectedMinute,
          onHourChange = props.onHourChange,
          onMinuteChange = props.onMinuteChange;
      var selected = !!selectedHour || selectedMinute !== undefined;
      return React.createElement("div", {
        className: cx((_cx = {}, _defineProperty(_cx, timePickerWrap, true), _defineProperty(_cx, timePickerSelected, selected), _cx))
      }, React.createElement(DropDown, {
        labelClassName: hourPicker,
        isSelected: selected,
        labelComponent: function labelComponent(_ref) {
          var isOpen = _ref.isOpen,
              toggleDropdown = _ref.toggleDropdown;
          return React.createElement("div", {
            onClick: function onClick() {
              toggleDropdown();
            },
            className: buttonStyle,
            "data-test-id": "hour-label"
          }, React.createElement("span", {
            className:
            /*#__PURE__*/
            /*#__PURE__*/
            css({
              marginRight: "15px"
            })
          }, selectedHour ? selectedHour : "Hrs"), React.createElement("span", null, React.createElement("i", {
            className: cx("pi pi-arrow-drop-down", iconStyle$1),
            style: {
              transform: isOpen ? "rotate(180deg)" : "none"
            }
          })));
        }
      }, function (_ref2) {
        var toggle = _ref2.toggle;
        return React.createElement(OptionGroupRadio, {
          onChange: function onChange(value) {
            onHourChange(value);
            toggle();
          },
          selected: selectedHour,
          className: optionStyle
        }, HOURS.map(function (hour) {
          return React.createElement(Option, {
            key: hour,
            value: parseInt(hour, 10),
            label: hour,
            className: optionStyle
          });
        }));
      }), React.createElement("span", {
        className: seperator
      }, ":"), React.createElement(DropDown, {
        labelClassName: minutePicker,
        isSelected: selected,
        labelComponent: function labelComponent(_ref3) {
          var isOpen = _ref3.isOpen,
              toggleDropdown = _ref3.toggleDropdown;
          return React.createElement("div", {
            onClick: function onClick() {
              toggleDropdown();
            },
            className: buttonStyle,
            "data-test-id": "minute-label"
          }, React.createElement("span", {
            className:
            /*#__PURE__*/
            /*#__PURE__*/
            css({
              marginRight: "15px"
            })
          }, selectedMinute !== undefined ? selectedMinute : "mins"), React.createElement("i", {
            className: cx("pi pi-arrow-drop-down", iconStyle$1),
            style: {
              transform: isOpen ? "rotate(180deg)" : "none"
            }
          }));
        }
      }, function (_ref4) {
        var toggle = _ref4.toggle;
        return React.createElement(OptionGroupRadio, {
          onChange: function onChange(value) {
            onMinuteChange(value);
            toggle();
          },
          selected: selectedMinute,
          className: optionStyle
        }, MINUTES.map(function (min) {
          return React.createElement(Option, {
            key: min,
            value: parseInt(min, 10),
            label: min,
            className: optionStyle
          });
        }));
      }));
    };

    var Text = function Text(_ref) {
      var typography = _ref.typography,
          _ref$color = _ref.color,
          color = _ref$color === void 0 ? colors.gray.darker : _ref$color,
          children = _ref.children,
          className = _ref.className;
      var _className =
      /*#__PURE__*/
      css(Object.assign({}, typography, {
        color: color
      }));
      return React__default.createElement("span", {
        className: cx(_className, className)
      }, children);
    };

    function capitalize(str) {
      return str ? str.split(" ").map(function (s) {
        return s.charAt(0).toUpperCase() + s.slice(1);
      }).join(" ") : str;
    }

    function getShortenedNumber(num) {
      var toFixed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var formattedNum;
      if (!num && num !== 0) {
        return;
      }
      if (num >= 10000000) {
        formattedNum = (num / 10000000).toFixed(toFixed) + " Cr";
      } else if (num >= 100000) {
        formattedNum = (num / 100000).toFixed(toFixed) + " L";
      } else if (num >= 1000) {
        formattedNum = (num / 1000).toFixed(toFixed) + " K";
      } else if (num !== Math.floor(num)) {
        formattedNum = "".concat(num.toFixed(toFixed));
      } else {
        formattedNum = "".concat(num);
      }
      return formattedNum;
    }

    function initGoogleAnalytics(gaId) {
      var _arguments = arguments;
      if (isBrowser$1) {
        (function (s, o, g) {
          window.GoogleAnalyticsObject = "ga";
          window.ga = window.ga || function () {
            (window.ga.q = window.ga.q || []).push(_arguments);
          };
          window.ga.l = Date.now();
          var a = s.createElement(o);
          var m = s.getElementsByTagName(o)[0];
          a.async = true;
          a.src = g;
          if (m.parentNode) m.parentNode.insertBefore(a, m);
        })(document, "script", "https://www.google-analytics.com/analytics.js");
        window.ga("create", gaId, "auto");
        window.ga("send", "pageview");
      }
    }

    function width() {
      return isBrowser$1 && window.screen.width || 1025;
    }
    var isDesktop =
    /*@__PURE__*/
    width() >= 1024;



    var index = /*#__PURE__*/Object.freeze({
        capitalize: capitalize,
        getShortenedNumber: getShortenedNumber,
        initGoogleAnalytics: initGoogleAnalytics,
        isDesktop: isDesktop
    });

    exports.utils = index;
    exports.mixins = mixins;
    exports.styles = styles;
    exports.colors = colors;
    exports.typography = typography;
    exports.constants = constants;
    exports.Button = Button;
    exports.DropDownButton = DropDownButton;
    exports.Calendar = Calendar;
    exports.DropDown = DropDown;
    exports.Input = Input;
    exports.Modal = Modal;
    exports.Search = Search;
    exports.Select = Select;
    exports.Slider = Slider$1;
    exports.Stepper = Stepper;
    exports.Tag = Tag;
    exports.TimePicker = TimePicker;
    exports.Toast = Toast;
    exports.TypeAhead = TypeAhead;
    exports.SideBar = SideBar;
    exports.DateInput = DateInput;
    exports.BrowserBasedDateInput = BrowserBasedDateInput;
    exports.NativeDateInput = NativeDateInput;
    exports.Tooltip = Tooltip;
    exports.Logo = Logo;
    exports.Popper = default_1;
    exports.PopUp = PopUp;
    exports.Loader = Loader;
    exports.Radio = Radio;
    exports.RadioGroup = RadioGroup;
    exports.Checkbox = Checkbox;
    exports.CheckboxGroup = CheckboxGroup;
    exports.Option = Option;
    exports.OptionGroup = OptionGroup;
    exports.OptionGroupRadio = OptionGroupRadio;
    exports.OptionGroupCheckBox = OptionGroupCheckBox;
    exports.OutsideClick = OutsideClick;
    exports.PhoneNumberInput = PhoneNumberInput;
    exports.Text = Text;
    exports.UserAgentInfoContext = UserAgentInfoContext;
    exports.UserAgentInfoProvider = UserAgentInfoProvider;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=pebble.umd.js.map
