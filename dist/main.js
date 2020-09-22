define("@jakekara/editorjs-footnotes", [], function () {
  return (function (e) {
    var t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      var o = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
      }),
      (n.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var o in e)
            n.d(
              r,
              o,
              function (t) {
                return e[t];
              }.bind(null, o)
            );
        return r;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ""),
      n((n.s = 5))
    );
  })([
    function (e, t, n) {
      var r = n(3),
        o = n(4);
      "string" == typeof (o = o.__esModule ? o.default : o) &&
        (o = [[e.i, o, ""]]);
      var i = { insert: "head", singleton: !1 };
      r(o, i);
      e.exports = o.locals || {};
    },
    function (e, t, n) {
      window,
        (e.exports = (function (e) {
          var t = {};
          function n(r) {
            if (t[r]) return t[r].exports;
            var o = (t[r] = { i: r, l: !1, exports: {} });
            return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
          }
          return (
            (n.m = e),
            (n.c = t),
            (n.d = function (e, t, r) {
              n.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: r });
            }),
            (n.r = function (e) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module",
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (n.t = function (e, t) {
              if ((1 & t && (e = n(e)), 8 & t)) return e;
              if (4 & t && "object" == typeof e && e && e.__esModule) return e;
              var r = Object.create(null);
              if (
                (n.r(r),
                Object.defineProperty(r, "default", {
                  enumerable: !0,
                  value: e,
                }),
                2 & t && "string" != typeof e)
              )
                for (var o in e)
                  n.d(
                    r,
                    o,
                    function (t) {
                      return e[t];
                    }.bind(null, o)
                  );
              return r;
            }),
            (n.n = function (e) {
              var t =
                e && e.__esModule
                  ? function () {
                      return e.default;
                    }
                  : function () {
                      return e;
                    };
              return n.d(t, "a", t), t;
            }),
            (n.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = "/"),
            n((n.s = 0))
          );
        })([
          function (e, t, n) {
            function r(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            function o(e, t, n) {
              return t && r(e.prototype, t), n && r(e, n), e;
            }
            n(1).toString();
            /**
             * Base Paragraph Block for the Editor.js.
             * Represents simple paragraph
             *
             * @author CodeX (team@codex.so)
             * @copyright CodeX 2018
             * @license The MIT License (MIT)
             */
            var i = (function () {
              function e(t) {
                var n = t.data,
                  r = t.config,
                  o = t.api;
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  (this.api = o),
                  (this._CSS = {
                    block: this.api.styles.block,
                    wrapper: "ce-paragraph",
                  }),
                  (this.onKeyUp = this.onKeyUp.bind(this)),
                  (this._placeholder = r.placeholder
                    ? r.placeholder
                    : e.DEFAULT_PLACEHOLDER),
                  (this._data = {}),
                  (this._element = this.drawView()),
                  (this._preserveBlank =
                    void 0 !== r.preserveBlank && r.preserveBlank),
                  (this.data = n);
              }
              return (
                o(e, null, [
                  {
                    key: "DEFAULT_PLACEHOLDER",
                    get: function () {
                      return "";
                    },
                  },
                ]),
                o(
                  e,
                  [
                    {
                      key: "onKeyUp",
                      value: function (e) {
                        ("Backspace" !== e.code && "Delete" !== e.code) ||
                          ("" === this._element.textContent &&
                            (this._element.innerHTML = ""));
                      },
                    },
                    {
                      key: "drawView",
                      value: function () {
                        var e = document.createElement("DIV");
                        return (
                          e.classList.add(this._CSS.wrapper, this._CSS.block),
                          (e.contentEditable = !0),
                          (e.dataset.placeholder = this._placeholder),
                          e.addEventListener("keyup", this.onKeyUp),
                          e
                        );
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        return this._element;
                      },
                    },
                    {
                      key: "merge",
                      value: function (e) {
                        var t = { text: this.data.text + e.text };
                        this.data = t;
                      },
                    },
                    {
                      key: "validate",
                      value: function (e) {
                        return !("" === e.text.trim() && !this._preserveBlank);
                      },
                    },
                    {
                      key: "save",
                      value: function (e) {
                        return { text: e.innerHTML };
                      },
                    },
                    {
                      key: "onPaste",
                      value: function (e) {
                        var t = { text: e.detail.data.innerHTML };
                        this.data = t;
                      },
                    },
                    {
                      key: "data",
                      get: function () {
                        var e = this._element.innerHTML;
                        return (this._data.text = e), this._data;
                      },
                      set: function (e) {
                        (this._data = e || {}),
                          (this._element.innerHTML = this._data.text || "");
                      },
                    },
                  ],
                  [
                    {
                      key: "conversionConfig",
                      get: function () {
                        return { export: "text", import: "text" };
                      },
                    },
                    {
                      key: "sanitize",
                      get: function () {
                        return { text: { br: !0 } };
                      },
                    },
                    {
                      key: "pasteConfig",
                      get: function () {
                        return { tags: ["P"] };
                      },
                    },
                    {
                      key: "toolbox",
                      get: function () {
                        return { icon: n(6).default, title: "Text" };
                      },
                    },
                  ]
                ),
                e
              );
            })();
            e.exports = i;
          },
          function (e, t, n) {
            var r = n(2);
            "string" == typeof r && (r = [[e.i, r, ""]]),
              n(4)(r, { hmr: !0, transform: void 0, insertInto: void 0 }),
              r.locals && (e.exports = r.locals);
          },
          function (e, t, n) {
            (e.exports = n(3)(!1)).push([
              e.i,
              ".ce-paragraph {\n    line-height: 1.6em;\n    outline: none;\n}\n\n.ce-paragraph[data-placeholder]:empty::before{\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n}\n\n/** Show placeholder at the first paragraph if Editor is empty */\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before,\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n.ce-paragraph p:first-of-type{\n    margin-top: 0;\n}\n\n.ce-paragraph p:last-of-type{\n    margin-bottom: 0;\n}\n",
              "",
            ]);
          },
          function (e, t) {
            e.exports = function (e) {
              var t = [];
              return (
                (t.toString = function () {
                  return this.map(function (t) {
                    var n = (function (e, t) {
                      var n,
                        r = e[1] || "",
                        o = e[3];
                      if (!o) return r;
                      if (t && "function" == typeof btoa) {
                        var i =
                            ((n = o),
                            "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                              btoa(
                                unescape(encodeURIComponent(JSON.stringify(n)))
                              ) +
                              " */"),
                          a = o.sources.map(function (e) {
                            return "/*# sourceURL=" + o.sourceRoot + e + " */";
                          });
                        return [r].concat(a).concat([i]).join("\n");
                      }
                      return [r].join("\n");
                    })(t, e);
                    return t[2] ? "@media " + t[2] + "{" + n + "}" : n;
                  }).join("");
                }),
                (t.i = function (e, n) {
                  "string" == typeof e && (e = [[null, e, ""]]);
                  for (var r = {}, o = 0; o < this.length; o++) {
                    var i = this[o][0];
                    "number" == typeof i && (r[i] = !0);
                  }
                  for (o = 0; o < e.length; o++) {
                    var a = e[o];
                    ("number" == typeof a[0] && r[a[0]]) ||
                      (n && !a[2]
                        ? (a[2] = n)
                        : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                      t.push(a));
                  }
                }),
                t
              );
            };
          },
          function (e, t, n) {
            var r,
              o,
              i = {},
              a =
                ((r = function () {
                  return window && document && document.all && !window.atob;
                }),
                function () {
                  return void 0 === o && (o = r.apply(this, arguments)), o;
                }),
              c = (function (e) {
                var t = {};
                return function (e) {
                  if ("function" == typeof e) return e();
                  if (void 0 === t[e]) {
                    var n = function (e) {
                      return document.querySelector(e);
                    }.call(this, e);
                    if (
                      window.HTMLIFrameElement &&
                      n instanceof window.HTMLIFrameElement
                    )
                      try {
                        n = n.contentDocument.head;
                      } catch (e) {
                        n = null;
                      }
                    t[e] = n;
                  }
                  return t[e];
                };
              })(),
              s = null,
              l = 0,
              u = [],
              d = n(5);
            function f(e, t) {
              for (var n = 0; n < e.length; n++) {
                var r = e[n],
                  o = i[r.id];
                if (o) {
                  o.refs++;
                  for (var a = 0; a < o.parts.length; a++)
                    o.parts[a](r.parts[a]);
                  for (; a < r.parts.length; a++)
                    o.parts.push(y(r.parts[a], t));
                } else {
                  var c = [];
                  for (a = 0; a < r.parts.length; a++) c.push(y(r.parts[a], t));
                  i[r.id] = { id: r.id, refs: 1, parts: c };
                }
              }
            }
            function p(e, t) {
              for (var n = [], r = {}, o = 0; o < e.length; o++) {
                var i = e[o],
                  a = t.base ? i[0] + t.base : i[0],
                  c = { css: i[1], media: i[2], sourceMap: i[3] };
                r[a]
                  ? r[a].parts.push(c)
                  : n.push((r[a] = { id: a, parts: [c] }));
              }
              return n;
            }
            function h(e, t) {
              var n = c(e.insertInto);
              if (!n)
                throw new Error(
                  "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
                );
              var r = u[u.length - 1];
              if ("top" === e.insertAt)
                r
                  ? r.nextSibling
                    ? n.insertBefore(t, r.nextSibling)
                    : n.appendChild(t)
                  : n.insertBefore(t, n.firstChild),
                  u.push(t);
              else if ("bottom" === e.insertAt) n.appendChild(t);
              else {
                if ("object" != typeof e.insertAt || !e.insertAt.before)
                  throw new Error(
                    "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
                  );
                var o = c(e.insertInto + " " + e.insertAt.before);
                n.insertBefore(t, o);
              }
            }
            function b(e) {
              if (null === e.parentNode) return !1;
              e.parentNode.removeChild(e);
              var t = u.indexOf(e);
              t >= 0 && u.splice(t, 1);
            }
            function m(e) {
              var t = document.createElement("style");
              return (
                void 0 === e.attrs.type && (e.attrs.type = "text/css"),
                v(t, e.attrs),
                h(e, t),
                t
              );
            }
            function v(e, t) {
              Object.keys(t).forEach(function (n) {
                e.setAttribute(n, t[n]);
              });
            }
            function y(e, t) {
              var n, r, o, i;
              if (t.transform && e.css) {
                if (!(i = t.transform(e.css))) return function () {};
                e.css = i;
              }
              if (t.singleton) {
                var a = l++;
                (n = s || (s = m(t))),
                  (r = C.bind(null, n, a, !1)),
                  (o = C.bind(null, n, a, !0));
              } else
                e.sourceMap &&
                "function" == typeof URL &&
                "function" == typeof URL.createObjectURL &&
                "function" == typeof URL.revokeObjectURL &&
                "function" == typeof Blob &&
                "function" == typeof btoa
                  ? ((n = (function (e) {
                      var t = document.createElement("link");
                      return (
                        void 0 === e.attrs.type && (e.attrs.type = "text/css"),
                        (e.attrs.rel = "stylesheet"),
                        v(t, e.attrs),
                        h(e, t),
                        t
                      );
                    })(t)),
                    (r = function (e, t, n) {
                      var r = n.css,
                        o = n.sourceMap,
                        i = void 0 === t.convertToAbsoluteUrls && o;
                      (t.convertToAbsoluteUrls || i) && (r = d(r)),
                        o &&
                          (r +=
                            "\n/*# sourceMappingURL=data:application/json;base64," +
                            btoa(
                              unescape(encodeURIComponent(JSON.stringify(o)))
                            ) +
                            " */");
                      var a = new Blob([r], { type: "text/css" }),
                        c = e.href;
                      (e.href = URL.createObjectURL(a)),
                        c && URL.revokeObjectURL(c);
                    }.bind(null, n, t)),
                    (o = function () {
                      b(n), n.href && URL.revokeObjectURL(n.href);
                    }))
                  : ((n = m(t)),
                    (r = function (e, t) {
                      var n = t.css,
                        r = t.media;
                      if ((r && e.setAttribute("media", r), e.styleSheet))
                        e.styleSheet.cssText = n;
                      else {
                        for (; e.firstChild; ) e.removeChild(e.firstChild);
                        e.appendChild(document.createTextNode(n));
                      }
                    }.bind(null, n)),
                    (o = function () {
                      b(n);
                    }));
              return (
                r(e),
                function (t) {
                  if (t) {
                    if (
                      t.css === e.css &&
                      t.media === e.media &&
                      t.sourceMap === e.sourceMap
                    )
                      return;
                    r((e = t));
                  } else o();
                }
              );
            }
            e.exports = function (e, t) {
              if (
                "undefined" != typeof DEBUG &&
                DEBUG &&
                "object" != typeof document
              )
                throw new Error(
                  "The style-loader cannot be used in a non-browser environment"
                );
              ((t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}),
                t.singleton ||
                  "boolean" == typeof t.singleton ||
                  (t.singleton = a()),
                t.insertInto || (t.insertInto = "head"),
                t.insertAt || (t.insertAt = "bottom");
              var n = p(e, t);
              return (
                f(n, t),
                function (e) {
                  for (var r = [], o = 0; o < n.length; o++) {
                    var a = n[o];
                    (c = i[a.id]).refs--, r.push(c);
                  }
                  for (e && f(p(e, t), t), o = 0; o < r.length; o++) {
                    var c;
                    if (0 === (c = r[o]).refs) {
                      for (var s = 0; s < c.parts.length; s++) c.parts[s]();
                      delete i[c.id];
                    }
                  }
                }
              );
            };
            var g,
              A =
                ((g = []),
                function (e, t) {
                  return (g[e] = t), g.filter(Boolean).join("\n");
                });
            function C(e, t, n, r) {
              var o = n ? "" : r.css;
              if (e.styleSheet) e.styleSheet.cssText = A(t, o);
              else {
                var i = document.createTextNode(o),
                  a = e.childNodes;
                a[t] && e.removeChild(a[t]),
                  a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
              }
            }
          },
          function (e, t) {
            e.exports = function (e) {
              var t = "undefined" != typeof window && window.location;
              if (!t) throw new Error("fixUrls requires window.location");
              if (!e || "string" != typeof e) return e;
              var n = t.protocol + "//" + t.host,
                r = n + t.pathname.replace(/\/[^\/]*$/, "/");
              return e.replace(
                /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
                function (e, t) {
                  var o,
                    i = t
                      .trim()
                      .replace(/^"(.*)"$/, function (e, t) {
                        return t;
                      })
                      .replace(/^'(.*)'$/, function (e, t) {
                        return t;
                      });
                  return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(
                    i
                  )
                    ? e
                    : ((o =
                        0 === i.indexOf("//")
                          ? i
                          : 0 === i.indexOf("/")
                          ? n + i
                          : r + i.replace(/^\.\//, "")),
                      "url(" + JSON.stringify(o) + ")");
                }
              );
            };
          },
          function (e, t, n) {
            "use strict";
            n.r(t),
              (t.default =
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0.2 -0.3 9 11.4" width="12" height="14">\n  <path d="M0 2.77V.92A1 1 0 01.2.28C.35.1.56 0 .83 0h7.66c.28.01.48.1.63.28.14.17.21.38.21.64v1.85c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26a1 1 0 01-.21-.66V1.69H5.6v7.58h.5c.25 0 .45.08.6.23.17.16.25.35.25.6s-.08.45-.24.6a.87.87 0 01-.62.22H3.21a.87.87 0 01-.61-.22.78.78 0 01-.24-.6c0-.25.08-.44.24-.6a.85.85 0 01.61-.23h.5V1.7H1.73v1.08c0 .26-.08.48-.23.66-.15.17-.37.26-.66.26-.28 0-.5-.09-.64-.26A1 1 0 010 2.77z"/>\n</svg>\n');
          },
        ]));
    },
    function (e, t, n) {
      "use strict";
      e.exports = function (e) {
        var t = [];
        return (
          (t.toString = function () {
            return this.map(function (t) {
              var n = (function (e, t) {
                var n = e[1] || "",
                  r = e[3];
                if (!r) return n;
                if (t && "function" == typeof btoa) {
                  var o =
                      ((a = r),
                      (c = btoa(
                        unescape(encodeURIComponent(JSON.stringify(a)))
                      )),
                      (s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                        c
                      )),
                      "/*# ".concat(s, " */")),
                    i = r.sources.map(function (e) {
                      return "/*# sourceURL="
                        .concat(r.sourceRoot || "")
                        .concat(e, " */");
                    });
                  return [n].concat(i).concat([o]).join("\n");
                }
                var a, c, s;
                return [n].join("\n");
              })(t, e);
              return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
            }).join("");
          }),
          (t.i = function (e, n, r) {
            "string" == typeof e && (e = [[null, e, ""]]);
            var o = {};
            if (r)
              for (var i = 0; i < this.length; i++) {
                var a = this[i][0];
                null != a && (o[a] = !0);
              }
            for (var c = 0; c < e.length; c++) {
              var s = [].concat(e[c]);
              (r && o[s[0]]) ||
                (n &&
                  (s[2]
                    ? (s[2] = "".concat(n, " and ").concat(s[2]))
                    : (s[2] = n)),
                t.push(s));
            }
          }),
          t
        );
      };
    },
    function (e, t, n) {
      "use strict";
      var r,
        o = function () {
          return (
            void 0 === r &&
              (r = Boolean(window && document && document.all && !window.atob)),
            r
          );
        },
        i = (function () {
          var e = {};
          return function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          };
        })(),
        a = [];
      function c(e) {
        for (var t = -1, n = 0; n < a.length; n++)
          if (a[n].identifier === e) {
            t = n;
            break;
          }
        return t;
      }
      function s(e, t) {
        for (var n = {}, r = [], o = 0; o < e.length; o++) {
          var i = e[o],
            s = t.base ? i[0] + t.base : i[0],
            l = n[s] || 0,
            u = "".concat(s, " ").concat(l);
          n[s] = l + 1;
          var d = c(u),
            f = { css: i[1], media: i[2], sourceMap: i[3] };
          -1 !== d
            ? (a[d].references++, a[d].updater(f))
            : a.push({ identifier: u, updater: m(f, t), references: 1 }),
            r.push(u);
        }
        return r;
      }
      function l(e) {
        var t = document.createElement("style"),
          r = e.attributes || {};
        if (void 0 === r.nonce) {
          var o = n.nc;
          o && (r.nonce = o);
        }
        if (
          (Object.keys(r).forEach(function (e) {
            t.setAttribute(e, r[e]);
          }),
          "function" == typeof e.insert)
        )
          e.insert(t);
        else {
          var a = i(e.insert || "head");
          if (!a)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          a.appendChild(t);
        }
        return t;
      }
      var u,
        d =
          ((u = []),
          function (e, t) {
            return (u[e] = t), u.filter(Boolean).join("\n");
          });
      function f(e, t, n, r) {
        var o = n
          ? ""
          : r.media
          ? "@media ".concat(r.media, " {").concat(r.css, "}")
          : r.css;
        if (e.styleSheet) e.styleSheet.cssText = d(t, o);
        else {
          var i = document.createTextNode(o),
            a = e.childNodes;
          a[t] && e.removeChild(a[t]),
            a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
        }
      }
      function p(e, t, n) {
        var r = n.css,
          o = n.media,
          i = n.sourceMap;
        if (
          (o ? e.setAttribute("media", o) : e.removeAttribute("media"),
          i &&
            btoa &&
            (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
              btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
              " */"
            )),
          e.styleSheet)
        )
          e.styleSheet.cssText = r;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(r));
        }
      }
      var h = null,
        b = 0;
      function m(e, t) {
        var n, r, o;
        if (t.singleton) {
          var i = b++;
          (n = h || (h = l(t))),
            (r = f.bind(null, n, i, !1)),
            (o = f.bind(null, n, i, !0));
        } else
          (n = l(t)),
            (r = p.bind(null, n, t)),
            (o = function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            });
        return (
          r(e),
          function (t) {
            if (t) {
              if (
                t.css === e.css &&
                t.media === e.media &&
                t.sourceMap === e.sourceMap
              )
                return;
              r((e = t));
            } else o();
          }
        );
      }
      e.exports = function (e, t) {
        (t = t || {}).singleton ||
          "boolean" == typeof t.singleton ||
          (t.singleton = o());
        var n = s((e = e || []), t);
        return function (e) {
          if (
            ((e = e || []),
            "[object Array]" === Object.prototype.toString.call(e))
          ) {
            for (var r = 0; r < n.length; r++) {
              var o = c(n[r]);
              a[o].references--;
            }
            for (var i = s(e, t), l = 0; l < n.length; l++) {
              var u = c(n[l]);
              0 === a[u].references && (a[u].updater(), a.splice(u, 1));
            }
            n = i;
          }
        };
      };
    },
    function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(2),
        o = n.n(r)()(!0);
      o.push([
        e.i,
        '._3BH7c_UBJIIMVXoa9JqgMB {\n  background-color: lightyellow;\n  box-sizing: border-box;\n  padding: 3px;\n  color: #222;\n  /* font-family: Arial, Helvetica, sans-serif; */\n  border: 2px solid white;\n}\n\n._3BH7c_UBJIIMVXoa9JqgMB .cmSXjIOIiTJDmyHwaPJ3x {\n  font-size: 9px;\n  color: gray;\n  font-family: monaco, monospace, "Courier New", Courier;\n  padding: 2px;\n  border-bottom: 1px solid #efefef;\n}\n\n._3BH7c_UBJIIMVXoa9JqgMB ._3Lt_7wqYCCXFdT1LS0GmrA[contenteditable] {\n  outline: none;\n}\n\n._3BH7c_UBJIIMVXoa9JqgMB ._3VDwmWUtW9y2sFnK5VbEN {\n  width: 100%;\n  font-size: 12px;\n  font-family: monaco, monospace, "Courier New", Courier;\n  border: #555;\n  background-color: #efefef;\n  color: #222;\n}\n\n._1yfa19Xa4vnlNDDNltrKBc .cqiQ3ep83GzD0DvNkT5FS {\n  border: none;\n}\n',
        "",
        {
          version: 3,
          sources: ["webpack://src/style.css"],
          names: [],
          mappings:
            "AAAA;EACE,6BAA6B;EAC7B,sBAAsB;EACtB,YAAY;EACZ,WAAW;EACX,+CAA+C;EAC/C,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,sDAAsD;EACtD,YAAY;EACZ,gCAAgC;AAClC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,eAAe;EACf,sDAAsD;EACtD,YAAY;EACZ,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,YAAY;AACd",
          sourcesContent: [
            '.footnoteBlock {\n  background-color: lightyellow;\n  box-sizing: border-box;\n  padding: 3px;\n  color: #222;\n  /* font-family: Arial, Helvetica, sans-serif; */\n  border: 2px solid white;\n}\n\n.footnoteBlock .metaBar {\n  font-size: 9px;\n  color: gray;\n  font-family: monaco, monospace, "Courier New", Courier;\n  padding: 2px;\n  border-bottom: 1px solid #efefef;\n}\n\n.footnoteBlock .contentArea[contenteditable] {\n  outline: none;\n}\n\n.footnoteBlock .embedCode {\n  width: 100%;\n  font-size: 12px;\n  font-family: monaco, monospace, "Courier New", Courier;\n  border: #555;\n  background-color: #efefef;\n  color: #222;\n}\n\n.footnotebBlock .embedPreview {\n  border: none;\n}\n',
          ],
          sourceRoot: "",
        },
      ]),
        (o.locals = {
          footnoteBlock: "_3BH7c_UBJIIMVXoa9JqgMB",
          metaBar: "cmSXjIOIiTJDmyHwaPJ3x",
          contentArea: "_3Lt_7wqYCCXFdT1LS0GmrA",
          embedCode: "_3VDwmWUtW9y2sFnK5VbEN",
          footnotebBlock: "_1yfa19Xa4vnlNDDNltrKBc",
          embedPreview: "cqiQ3ep83GzD0DvNkT5FS",
        }),
        (t.default = o);
    },
    function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "Footnote", function () {
          return d;
        }),
        n.d(t, "FootnoteMaker", function () {
          return a;
        });
      var r = n(1),
        o = n.n(r);
      function i(e) {
        var t = "fn-",
          n = 10;
        if (
          (e && (e.prefix || "" === e.prefix) && (t = e.prefix),
          e && (e.length || 0 === e.length) && (n = e.length),
          n < 0)
        )
          throw new Error("options.length cannot be negative");
        if (!Number.isInteger(n))
          throw new Error("options.length must be integer");
        return (
          "" +
          t +
          (function (e) {
            for (var t, n, r, o = ""; o.length < e; )
              o = o.concat(
                ((t = ((r = void 0),
                (r = 1e9),
                (8999999999 * Math.random() + r).toString(36)).toLowerCase()),
                (n = /[a-z0-9]/g),
                t.match(n).join(""))
              );
            return o.slice(0, e);
          })(n)
        );
      }
      var a = (function () {
        function e(e) {
          var t = e.api;
          (this.api = t),
            (this.state = !1),
            (this.render = this.render.bind(this)),
            (this.surround = this.surround.bind(this));
        }
        return (
          Object.defineProperty(e, "isInline", {
            get: function () {
              return !0;
            },
            enumerable: !1,
            configurable: !0,
          }),
          (e.prototype.render = function () {
            return (
              (this.button = document.createElement("button")),
              (this.button.type = "button"),
              (this.button.textContent = "M"),
              this.button.classList.add(this.api.styles.inlineToolButton),
              this.button
            );
          }),
          (e.prototype.surround = function (e) {
            if (!this.state) {
              var t = e.extractContents(),
                n = i(),
                r = document.createElement("a");
              r.href = "#" + n;
              var o = document.createElement("small");
              (o.innerHTML = " [ #" + n + " ]"),
                r.appendChild(t),
                r.appendChild(o),
                e.insertNode(r);
              this.api.blocks.insert(
                "footnoteParagraph",
                { id: n },
                void 0,
                void 0,
                !0
              );
              this.api.inlineToolbar.close();
            }
          }),
          (e.prototype.clear = function () {
            console.log("Clear called");
          }),
          (e.prototype.checkState = function (e) {
            var t = e.anchorNode;
            if (t) {
              var n = t instanceof Element ? t : t.parentElement;
              return (this.state = !!n.closest("MARK")), this.state;
            }
          }),
          e
        );
      })();
      console.log("Defined class", a);
      var c,
        s = n(0),
        l = n.n(s),
        u =
          ((c = function (e, t) {
            return (c =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              })(e, t);
          }),
          function (e, t) {
            function n() {
              this.constructor = e;
            }
            c(e, t),
              (e.prototype =
                null === t
                  ? Object.create(t)
                  : ((n.prototype = t.prototype), new n()));
          }),
        d = (function (e) {
          function t(t) {
            var n = this,
              r = t.data,
              o = t.config,
              a = t.api;
            if (
              ((n = e.call(this, { data: r, config: o, api: a }) || this),
              !r.id)
            ) {
              var c = i();
              n._data.id = c;
            }
            return (
              r.text || (n._data.text = ""),
              (n.enableEmbedCode = !1),
              (n.toggleEmbedCode = n.toggleEnableEmbedCode.bind(n)),
              (n.renderEmbedCode = n.renderEmbedCode.bind(n)),
              (n.save = n.save.bind(n)),
              (n.render = n.render.bind(n)),
              (n.renderSettings = n.renderSettings.bind(n)),
              (n.settings = [
                {
                  name: "addEmbedCode",
                  icon: "<>",
                  active: !1,
                  handleClick: n.toggleEmbedCode.bind(n),
                },
              ]),
              n
            );
          }
          return (
            u(t, e),
            (t.prototype.renderEmbedCode = function () {
              var e = this.wrapper.querySelector("." + l.a.embedPreview),
                t = this.wrapper.querySelector("." + l.a.embedCode).value;
              console.log("Rendering embed code", this.wrapper),
                this.enableEmbedCode || (e && e.remove()),
                e ||
                  ((e = document.createElement("div")).classList.add(
                    l.a.embedPreview
                  ),
                  this.wrapper.appendChild(e)),
                console.log("renderEmbedCode", e, this.data),
                (e.innerHTML = t);
            }),
            (t.prototype.toggleEnableEmbedCode = function () {
              (this.enableEmbedCode = !this.enableEmbedCode),
                console.log(
                  "toggling embed code: ",
                  this.enableEmbedCode,
                  this._data
                ),
                console.log("this.wrapper", this.wrapper);
              var e = this.wrapper.querySelector("." + l.a.embedCode);
              if (this.enableEmbedCode) {
                if (e) return;
                (e = document.createElement("textarea")).classList.add(
                  l.a.embedCode
                ),
                  this.wrapper.appendChild(e),
                  e.addEventListener("change", this.renderEmbedCode),
                  e.addEventListener("keyup", this.renderEmbedCode);
              } else e.remove();
            }),
            Object.defineProperty(t, "sanitize", {
              get: function () {
                return { id: !1, text: { i: !0, a: !0, b: !0 }, embedCode: !0 };
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.save = function (e) {
              var t = e.querySelector("." + l.a.contentArea),
                n = t ? t.innerHTML : "",
                r = e.querySelector("." + l.a.metaBar).getAttribute("data-id"),
                o = e.querySelector("." + l.a.embedCode)
                  ? e.querySelector("." + l.a.embedCode).value
                  : void 0;
              return (
                console.log("save.embedCode", o),
                { id: r, text: n, embedCode: o }
              );
            }),
            (t.prototype.renderSettings = function () {
              var e = document.createElement("div");
              return (
                this.settings.forEach(function (t) {
                  var n = document.createElement("div");
                  n.classList.add("cdx-settings-button"),
                    (n.innerHTML = t.icon),
                    e.appendChild(n),
                    t.active && n.classList.add("cdx-settings-button--active"),
                    n.addEventListener("click", t.handleClick);
                }),
                e
              );
            }),
            (t.prototype.render = function () {
              var e = document.createElement("div");
              e.classList.add(l.a.footnoteBlock);
              var t = document.createElement("div");
              t.classList.add(l.a.metaBar),
                t.setAttribute("data-id", this.data.id),
                (t.innerHTML = "[ #" + this.data.id + " ] "),
                e.appendChild(t);
              var n = document.createElement("div");
              return (
                n.classList.add(l.a.contentArea),
                n.classList.add("ce-paragraph"),
                (n.innerHTML = this.data.text),
                (n.contentEditable = "true"),
                e.appendChild(n),
                n.addEventListener("keyup", this.onKeyUp),
                (this.wrapper = e),
                e
              );
            }),
            Object.defineProperty(t, "toolbox", {
              get: function () {
                return { icon: "F", title: "Footnote" };
              },
              enumerable: !1,
              configurable: !0,
            }),
            t
          );
        })(o.a);
      console.log("Defined class", a);
    },
  ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AamFrZWthcmEvZWRpdG9yanMtZm9vdG5vdGVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BqYWtla2FyYS9lZGl0b3Jqcy1mb290bm90ZXMvLi9zcmMvc3R5bGUuY3NzP2MwZDEiLCJ3ZWJwYWNrOi8vQGpha2VrYXJhL2VkaXRvcmpzLWZvb3Rub3Rlcy8uL25vZGVfbW9kdWxlcy9AZWRpdG9yanMvcGFyYWdyYXBoL2Rpc3QvYnVuZGxlLmpzIiwid2VicGFjazovL0BqYWtla2FyYS9lZGl0b3Jqcy1mb290bm90ZXMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL0BqYWtla2FyYS9lZGl0b3Jqcy1mb290bm90ZXMvLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL0BqYWtla2FyYS9lZGl0b3Jqcy1mb290bm90ZXMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL0BqYWtla2FyYS9lZGl0b3Jqcy1mb290bm90ZXMvLi9zcmMvZ2VuZXJhdGVJRC50cyIsIndlYnBhY2s6Ly9AamFrZWthcmEvZWRpdG9yanMtZm9vdG5vdGVzLy4vc3JjL0Zvb3Rub3RlTWFrZXIudHMiLCJ3ZWJwYWNrOi8vQGpha2VrYXJhL2VkaXRvcmpzLWZvb3Rub3Rlcy8uL3NyYy9Gb290bm90ZS50cyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsImFwaSIsImNvbnRlbnQiLCJkZWZhdWx0Iiwib3B0aW9ucyIsImxvY2FscyIsIndpbmRvdyIsImUiLCJsZW5ndGgiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsInRvU3RyaW5nIiwiZGF0YSIsImNvbmZpZyIsIlR5cGVFcnJvciIsInRoaXMiLCJfQ1NTIiwiYmxvY2siLCJzdHlsZXMiLCJ3cmFwcGVyIiwib25LZXlVcCIsIl9wbGFjZWhvbGRlciIsInBsYWNlaG9sZGVyIiwiREVGQVVMVF9QTEFDRUhPTERFUiIsIl9kYXRhIiwiX2VsZW1lbnQiLCJkcmF3VmlldyIsIl9wcmVzZXJ2ZUJsYW5rIiwicHJlc2VydmVCbGFuayIsImNvZGUiLCJ0ZXh0Q29udGVudCIsImlubmVySFRNTCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImNvbnRlbnRFZGl0YWJsZSIsImRhdGFzZXQiLCJhZGRFdmVudExpc3RlbmVyIiwidGV4dCIsInRyaW0iLCJkZXRhaWwiLCJzZXQiLCJleHBvcnQiLCJpbXBvcnQiLCJiciIsInRhZ3MiLCJpY29uIiwidGl0bGUiLCJobXIiLCJ0cmFuc2Zvcm0iLCJpbnNlcnRJbnRvIiwicHVzaCIsIm1hcCIsImEiLCJidG9hIiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5Iiwic291cmNlcyIsInNvdXJjZVJvb3QiLCJjb25jYXQiLCJqb2luIiwiYWxsIiwiYXRvYiIsImFwcGx5IiwiYXJndW1lbnRzIiwicXVlcnlTZWxlY3RvciIsIkhUTUxJRnJhbWVFbGVtZW50IiwiY29udGVudERvY3VtZW50IiwiaGVhZCIsInUiLCJmIiwiaWQiLCJyZWZzIiwicGFydHMiLCJiYXNlIiwiY3NzIiwibWVkaWEiLCJzb3VyY2VNYXAiLCJoIiwiRXJyb3IiLCJpbnNlcnRBdCIsIm5leHRTaWJsaW5nIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJmaXJzdENoaWxkIiwiYmVmb3JlIiwidiIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImluZGV4T2YiLCJzcGxpY2UiLCJ5IiwiYXR0cnMiLCJ0eXBlIiwiYiIsImtleXMiLCJmb3JFYWNoIiwic2V0QXR0cmlidXRlIiwic2luZ2xldG9uIiwidyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJldm9rZU9iamVjdFVSTCIsIkJsb2IiLCJyZWwiLCJjb252ZXJ0VG9BYnNvbHV0ZVVybHMiLCJocmVmIiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJjcmVhdGVUZXh0Tm9kZSIsIkRFQlVHIiwiZyIsIngiLCJmaWx0ZXIiLCJCb29sZWFuIiwiY2hpbGROb2RlcyIsImxvY2F0aW9uIiwicHJvdG9jb2wiLCJob3N0IiwicGF0aG5hbWUiLCJyZXBsYWNlIiwidGVzdCIsInVzZVNvdXJjZU1hcCIsImxpc3QiLCJpdGVtIiwiY3NzTWFwcGluZyIsInNvdXJjZU1hcHBpbmciLCJiYXNlNjQiLCJzb3VyY2VVUkxzIiwic291cmNlIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsIm1lZGlhUXVlcnkiLCJkZWR1cGUiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwiX2kiLCJtZW1vIiwiaXNPbGRJRSIsImdldFRhcmdldCIsInRhcmdldCIsInN0eWxlVGFyZ2V0Iiwic3R5bGVzSW5Eb20iLCJnZXRJbmRleEJ5SWRlbnRpZmllciIsImlkZW50aWZpZXIiLCJyZXN1bHQiLCJtb2R1bGVzVG9Eb20iLCJpZENvdW50TWFwIiwiaWRlbnRpZmllcnMiLCJjb3VudCIsImluZGV4Iiwib2JqIiwicmVmZXJlbmNlcyIsInVwZGF0ZXIiLCJhZGRTdHlsZSIsImluc2VydFN0eWxlRWxlbWVudCIsInN0eWxlIiwiYXR0cmlidXRlcyIsIm5vbmNlIiwiaW5zZXJ0IiwidGV4dFN0b3JlIiwicmVwbGFjZVRleHQiLCJyZXBsYWNlbWVudCIsImFwcGx5VG9TaW5nbGV0b25UYWciLCJyZW1vdmUiLCJjc3NOb2RlIiwiYXBwbHlUb1RhZyIsInJlbW92ZUF0dHJpYnV0ZSIsInNpbmdsZXRvbkNvdW50ZXIiLCJ1cGRhdGUiLCJzdHlsZUluZGV4IiwicmVtb3ZlU3R5bGVFbGVtZW50IiwibmV3T2JqIiwibGFzdElkZW50aWZpZXJzIiwibmV3TGlzdCIsIm5ld0xhc3RJZGVudGlmaWVycyIsIl9pbmRleCIsIl9fX0NTU19MT0FERVJfRVhQT1JUX19fIiwiZ2VuZXJhdGVJRCIsInByZWZpeCIsIk51bWJlciIsImlzSW50ZWdlciIsImNoYXJzIiwicmVnZXgiLCJtaW4iLCJyZXQiLCJNYXRoIiwicmFuZG9tIiwidG9Mb3dlckNhc2UiLCJtYXRjaCIsInNsaWNlIiwiZ2V0Q2hhcnMiLCJhcmdzIiwic3RhdGUiLCJyZW5kZXIiLCJzdXJyb3VuZCIsImJ1dHRvbiIsImlubGluZVRvb2xCdXR0b24iLCJyYW5nZSIsInNlbGVjdGVkVGV4dCIsImV4dHJhY3RDb250ZW50cyIsIm1hcmsiLCJmb290bm90ZU51bWJlciIsImluc2VydE5vZGUiLCJibG9ja3MiLCJ1bmRlZmluZWQiLCJpbmxpbmVUb29sYmFyIiwiY2xvc2UiLCJjbGVhciIsImNvbnNvbGUiLCJsb2ciLCJjaGVja1N0YXRlIiwic2VsZWN0aW9uIiwiYW5jaG9yTm9kZSIsImFuY2hvckVsZW1lbnQiLCJFbGVtZW50IiwicGFyZW50RWxlbWVudCIsImNsb3Nlc3QiLCJvcHRzIiwiaW5pdGlhbElEIiwiZW5hYmxlRW1iZWRDb2RlIiwidG9nZ2xlRW1iZWRDb2RlIiwidG9nZ2xlRW5hYmxlRW1iZWRDb2RlIiwicmVuZGVyRW1iZWRDb2RlIiwic2F2ZSIsInJlbmRlclNldHRpbmdzIiwic2V0dGluZ3MiLCJhY3RpdmUiLCJoYW5kbGVDbGljayIsInByZXZpZXciLCJlbWJlZFByZXZpZXciLCJlbWJlZENvZGUiLCJibG9ja0NvbnRlbnQiLCJjb250ZW50QXJlYSIsIm1ldGFCYXIi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QUFpQiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvQHRlYW1zdXBlcmNlbGwvdHlwaW5ncy1mb3ItY3NzLW1vZHVsZXMtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS00LTEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNC0yIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLlBhcmFncmFwaD10KCk6ZS5QYXJhZ3JhcGg9dCgpfSh3aW5kb3csZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9e307ZnVuY3Rpb24gbihyKXtpZih0W3JdKXJldHVybiB0W3JdLmV4cG9ydHM7dmFyIG89dFtyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbcl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsbiksby5sPSEwLG8uZXhwb3J0c31yZXR1cm4gbi5tPWUsbi5jPXQsbi5kPWZ1bmN0aW9uKGUsdCxyKXtuLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6cn0pfSxuLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKGUsdCl7aWYoMSZ0JiYoZT1uKGUpKSw4JnQpcmV0dXJuIGU7aWYoNCZ0JiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciByPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKHIpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJnQmJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgbyBpbiBlKW4uZChyLG8sZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LmJpbmQobnVsbCxvKSk7cmV0dXJuIHJ9LG4ubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gbi5kKHQsXCJhXCIsdCksdH0sbi5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxuLnA9XCIvXCIsbihuLnM9MCl9KFtmdW5jdGlvbihlLHQsbil7ZnVuY3Rpb24gcihlLHQpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXt2YXIgcj10W25dO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxyLmtleSxyKX19ZnVuY3Rpb24gbyhlLHQsbil7cmV0dXJuIHQmJnIoZS5wcm90b3R5cGUsdCksbiYmcihlLG4pLGV9bigxKS50b1N0cmluZygpO1xuLyoqXG4gKiBCYXNlIFBhcmFncmFwaCBCbG9jayBmb3IgdGhlIEVkaXRvci5qcy5cbiAqIFJlcHJlc2VudHMgc2ltcGxlIHBhcmFncmFwaFxuICpcbiAqIEBhdXRob3IgQ29kZVggKHRlYW1AY29kZXguc28pXG4gKiBAY29weXJpZ2h0IENvZGVYIDIwMThcbiAqIEBsaWNlbnNlIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICovXG52YXIgaT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCl7dmFyIG49dC5kYXRhLHI9dC5jb25maWcsbz10LmFwaTshZnVuY3Rpb24oZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSh0aGlzLGUpLHRoaXMuYXBpPW8sdGhpcy5fQ1NTPXtibG9jazp0aGlzLmFwaS5zdHlsZXMuYmxvY2ssd3JhcHBlcjpcImNlLXBhcmFncmFwaFwifSx0aGlzLm9uS2V5VXA9dGhpcy5vbktleVVwLmJpbmQodGhpcyksdGhpcy5fcGxhY2Vob2xkZXI9ci5wbGFjZWhvbGRlcj9yLnBsYWNlaG9sZGVyOmUuREVGQVVMVF9QTEFDRUhPTERFUix0aGlzLl9kYXRhPXt9LHRoaXMuX2VsZW1lbnQ9dGhpcy5kcmF3VmlldygpLHRoaXMuX3ByZXNlcnZlQmxhbms9dm9pZCAwIT09ci5wcmVzZXJ2ZUJsYW5rJiZyLnByZXNlcnZlQmxhbmssdGhpcy5kYXRhPW59cmV0dXJuIG8oZSxudWxsLFt7a2V5OlwiREVGQVVMVF9QTEFDRUhPTERFUlwiLGdldDpmdW5jdGlvbigpe3JldHVyblwiXCJ9fV0pLG8oZSxbe2tleTpcIm9uS2V5VXBcIix2YWx1ZTpmdW5jdGlvbihlKXtcIkJhY2tzcGFjZVwiIT09ZS5jb2RlJiZcIkRlbGV0ZVwiIT09ZS5jb2RlfHxcIlwiPT09dGhpcy5fZWxlbWVudC50ZXh0Q29udGVudCYmKHRoaXMuX2VsZW1lbnQuaW5uZXJIVE1MPVwiXCIpfX0se2tleTpcImRyYXdWaWV3XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO3JldHVybiBlLmNsYXNzTGlzdC5hZGQodGhpcy5fQ1NTLndyYXBwZXIsdGhpcy5fQ1NTLmJsb2NrKSxlLmNvbnRlbnRFZGl0YWJsZT0hMCxlLmRhdGFzZXQucGxhY2Vob2xkZXI9dGhpcy5fcGxhY2Vob2xkZXIsZS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIix0aGlzLm9uS2V5VXApLGV9fSx7a2V5OlwicmVuZGVyXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fZWxlbWVudH19LHtrZXk6XCJtZXJnZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0PXt0ZXh0OnRoaXMuZGF0YS50ZXh0K2UudGV4dH07dGhpcy5kYXRhPXR9fSx7a2V5OlwidmFsaWRhdGVcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4hKFwiXCI9PT1lLnRleHQudHJpbSgpJiYhdGhpcy5fcHJlc2VydmVCbGFuayl9fSx7a2V5Olwic2F2ZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybnt0ZXh0OmUuaW5uZXJIVE1MfX19LHtrZXk6XCJvblBhc3RlXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9e3RleHQ6ZS5kZXRhaWwuZGF0YS5pbm5lckhUTUx9O3RoaXMuZGF0YT10fX0se2tleTpcImRhdGFcIixnZXQ6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLl9lbGVtZW50LmlubmVySFRNTDtyZXR1cm4gdGhpcy5fZGF0YS50ZXh0PWUsdGhpcy5fZGF0YX0sc2V0OmZ1bmN0aW9uKGUpe3RoaXMuX2RhdGE9ZXx8e30sdGhpcy5fZWxlbWVudC5pbm5lckhUTUw9dGhpcy5fZGF0YS50ZXh0fHxcIlwifX1dLFt7a2V5OlwiY29udmVyc2lvbkNvbmZpZ1wiLGdldDpmdW5jdGlvbigpe3JldHVybntleHBvcnQ6XCJ0ZXh0XCIsaW1wb3J0OlwidGV4dFwifX19LHtrZXk6XCJzYW5pdGl6ZVwiLGdldDpmdW5jdGlvbigpe3JldHVybnt0ZXh0OnticjohMH19fX0se2tleTpcInBhc3RlQ29uZmlnXCIsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJue3RhZ3M6W1wiUFwiXX19fSx7a2V5OlwidG9vbGJveFwiLGdldDpmdW5jdGlvbigpe3JldHVybntpY29uOm4oNikuZGVmYXVsdCx0aXRsZTpcIlRleHRcIn19fV0pLGV9KCk7ZS5leHBvcnRzPWl9LGZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1uKDIpO1wic3RyaW5nXCI9PXR5cGVvZiByJiYocj1bW2UuaSxyLFwiXCJdXSk7dmFyIG89e2htcjohMCx0cmFuc2Zvcm06dm9pZCAwLGluc2VydEludG86dm9pZCAwfTtuKDQpKHIsbyk7ci5sb2NhbHMmJihlLmV4cG9ydHM9ci5sb2NhbHMpfSxmdW5jdGlvbihlLHQsbil7KGUuZXhwb3J0cz1uKDMpKCExKSkucHVzaChbZS5pLFwiLmNlLXBhcmFncmFwaCB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjZlbTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmNlLXBhcmFncmFwaFtkYXRhLXBsYWNlaG9sZGVyXTplbXB0eTo6YmVmb3Jle1xcbiAgY29udGVudDogYXR0cihkYXRhLXBsYWNlaG9sZGVyKTtcXG4gIGNvbG9yOiAjNzA3Njg0O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi8qKiBTaG93IHBsYWNlaG9sZGVyIGF0IHRoZSBmaXJzdCBwYXJhZ3JhcGggaWYgRWRpdG9yIGlzIGVtcHR5ICovXFxuLmNvZGV4LWVkaXRvci0tZW1wdHkgLmNlLWJsb2NrOmZpcnN0LWNoaWxkIC5jZS1wYXJhZ3JhcGhbZGF0YS1wbGFjZWhvbGRlcl06ZW1wdHk6OmJlZm9yZSB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uY29kZXgtZWRpdG9yLS10b29sYm94LW9wZW5lZCAuY2UtYmxvY2s6Zmlyc3QtY2hpbGQgLmNlLXBhcmFncmFwaFtkYXRhLXBsYWNlaG9sZGVyXTplbXB0eTo6YmVmb3JlLFxcbi5jb2RleC1lZGl0b3ItLWVtcHR5IC5jZS1ibG9jazpmaXJzdC1jaGlsZCAuY2UtcGFyYWdyYXBoW2RhdGEtcGxhY2Vob2xkZXJdOmVtcHR5OmZvY3VzOjpiZWZvcmUge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmNlLXBhcmFncmFwaCBwOmZpcnN0LW9mLXR5cGV7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbi5jZS1wYXJhZ3JhcGggcDpsYXN0LW9mLXR5cGV7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblwiLFwiXCJdKX0sZnVuY3Rpb24oZSx0KXtlLmV4cG9ydHM9ZnVuY3Rpb24oZSl7dmFyIHQ9W107cmV0dXJuIHQudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24odCl7dmFyIG49ZnVuY3Rpb24oZSx0KXt2YXIgbj1lWzFdfHxcIlwiLHI9ZVszXTtpZighcilyZXR1cm4gbjtpZih0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBidG9hKXt2YXIgbz0oYT1yLFwiLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiK2J0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGEpKSkpK1wiICovXCIpLGk9ci5zb3VyY2VzLm1hcChmdW5jdGlvbihlKXtyZXR1cm5cIi8qIyBzb3VyY2VVUkw9XCIrci5zb3VyY2VSb290K2UrXCIgKi9cIn0pO3JldHVybltuXS5jb25jYXQoaSkuY29uY2F0KFtvXSkuam9pbihcIlxcblwiKX12YXIgYTtyZXR1cm5bbl0uam9pbihcIlxcblwiKX0odCxlKTtyZXR1cm4gdFsyXT9cIkBtZWRpYSBcIit0WzJdK1wie1wiK24rXCJ9XCI6bn0pLmpvaW4oXCJcIil9LHQuaT1mdW5jdGlvbihlLG4pe1wic3RyaW5nXCI9PXR5cGVvZiBlJiYoZT1bW251bGwsZSxcIlwiXV0pO2Zvcih2YXIgcj17fSxvPTA7bzx0aGlzLmxlbmd0aDtvKyspe3ZhciBpPXRoaXNbb11bMF07XCJudW1iZXJcIj09dHlwZW9mIGkmJihyW2ldPSEwKX1mb3Iobz0wO288ZS5sZW5ndGg7bysrKXt2YXIgYT1lW29dO1wibnVtYmVyXCI9PXR5cGVvZiBhWzBdJiZyW2FbMF1dfHwobiYmIWFbMl0/YVsyXT1uOm4mJihhWzJdPVwiKFwiK2FbMl0rXCIpIGFuZCAoXCIrbitcIilcIiksdC5wdXNoKGEpKX19LHR9fSxmdW5jdGlvbihlLHQsbil7dmFyIHIsbyxpPXt9LGE9KHI9ZnVuY3Rpb24oKXtyZXR1cm4gd2luZG93JiZkb2N1bWVudCYmZG9jdW1lbnQuYWxsJiYhd2luZG93LmF0b2J9LGZ1bmN0aW9uKCl7cmV0dXJuIHZvaWQgMD09PW8mJihvPXIuYXBwbHkodGhpcyxhcmd1bWVudHMpKSxvfSkscz1mdW5jdGlvbihlKXt2YXIgdD17fTtyZXR1cm4gZnVuY3Rpb24oZSl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZSlyZXR1cm4gZSgpO2lmKHZvaWQgMD09PXRbZV0pe3ZhciBuPWZ1bmN0aW9uKGUpe3JldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUpfS5jYWxsKHRoaXMsZSk7aWYod2luZG93LkhUTUxJRnJhbWVFbGVtZW50JiZuIGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KXRyeXtuPW4uY29udGVudERvY3VtZW50LmhlYWR9Y2F0Y2goZSl7bj1udWxsfXRbZV09bn1yZXR1cm4gdFtlXX19KCksYz1udWxsLHU9MCxmPVtdLGw9big1KTtmdW5jdGlvbiBwKGUsdCl7Zm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciByPWVbbl0sbz1pW3IuaWRdO2lmKG8pe28ucmVmcysrO2Zvcih2YXIgYT0wO2E8by5wYXJ0cy5sZW5ndGg7YSsrKW8ucGFydHNbYV0oci5wYXJ0c1thXSk7Zm9yKDthPHIucGFydHMubGVuZ3RoO2ErKylvLnBhcnRzLnB1c2gobShyLnBhcnRzW2FdLHQpKX1lbHNle3ZhciBzPVtdO2ZvcihhPTA7YTxyLnBhcnRzLmxlbmd0aDthKyspcy5wdXNoKG0oci5wYXJ0c1thXSx0KSk7aVtyLmlkXT17aWQ6ci5pZCxyZWZzOjEscGFydHM6c319fX1mdW5jdGlvbiBkKGUsdCl7Zm9yKHZhciBuPVtdLHI9e30sbz0wO288ZS5sZW5ndGg7bysrKXt2YXIgaT1lW29dLGE9dC5iYXNlP2lbMF0rdC5iYXNlOmlbMF0scz17Y3NzOmlbMV0sbWVkaWE6aVsyXSxzb3VyY2VNYXA6aVszXX07clthXT9yW2FdLnBhcnRzLnB1c2gocyk6bi5wdXNoKHJbYV09e2lkOmEscGFydHM6W3NdfSl9cmV0dXJuIG59ZnVuY3Rpb24gaChlLHQpe3ZhciBuPXMoZS5pbnNlcnRJbnRvKTtpZighbil0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTt2YXIgcj1mW2YubGVuZ3RoLTFdO2lmKFwidG9wXCI9PT1lLmluc2VydEF0KXI/ci5uZXh0U2libGluZz9uLmluc2VydEJlZm9yZSh0LHIubmV4dFNpYmxpbmcpOm4uYXBwZW5kQ2hpbGQodCk6bi5pbnNlcnRCZWZvcmUodCxuLmZpcnN0Q2hpbGQpLGYucHVzaCh0KTtlbHNlIGlmKFwiYm90dG9tXCI9PT1lLmluc2VydEF0KW4uYXBwZW5kQ2hpbGQodCk7ZWxzZXtpZihcIm9iamVjdFwiIT10eXBlb2YgZS5pbnNlcnRBdHx8IWUuaW5zZXJ0QXQuYmVmb3JlKXRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO3ZhciBvPXMoZS5pbnNlcnRJbnRvK1wiIFwiK2UuaW5zZXJ0QXQuYmVmb3JlKTtuLmluc2VydEJlZm9yZSh0LG8pfX1mdW5jdGlvbiB2KGUpe2lmKG51bGw9PT1lLnBhcmVudE5vZGUpcmV0dXJuITE7ZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpO3ZhciB0PWYuaW5kZXhPZihlKTt0Pj0wJiZmLnNwbGljZSh0LDEpfWZ1bmN0aW9uIHkoZSl7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO3JldHVybiB2b2lkIDA9PT1lLmF0dHJzLnR5cGUmJihlLmF0dHJzLnR5cGU9XCJ0ZXh0L2Nzc1wiKSxiKHQsZS5hdHRycyksaChlLHQpLHR9ZnVuY3Rpb24gYihlLHQpe09iamVjdC5rZXlzKHQpLmZvckVhY2goZnVuY3Rpb24obil7ZS5zZXRBdHRyaWJ1dGUobix0W25dKX0pfWZ1bmN0aW9uIG0oZSx0KXt2YXIgbixyLG8saTtpZih0LnRyYW5zZm9ybSYmZS5jc3Mpe2lmKCEoaT10LnRyYW5zZm9ybShlLmNzcykpKXJldHVybiBmdW5jdGlvbigpe307ZS5jc3M9aX1pZih0LnNpbmdsZXRvbil7dmFyIGE9dSsrO249Y3x8KGM9eSh0KSkscj13LmJpbmQobnVsbCxuLGEsITEpLG89dy5iaW5kKG51bGwsbixhLCEwKX1lbHNlIGUuc291cmNlTWFwJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBVUkwmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwmJlwiZnVuY3Rpb25cIj09dHlwZW9mIEJsb2ImJlwiZnVuY3Rpb25cIj09dHlwZW9mIGJ0b2E/KG49ZnVuY3Rpb24oZSl7dmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7cmV0dXJuIHZvaWQgMD09PWUuYXR0cnMudHlwZSYmKGUuYXR0cnMudHlwZT1cInRleHQvY3NzXCIpLGUuYXR0cnMucmVsPVwic3R5bGVzaGVldFwiLGIodCxlLmF0dHJzKSxoKGUsdCksdH0odCkscj1mdW5jdGlvbihlLHQsbil7dmFyIHI9bi5jc3Msbz1uLnNvdXJjZU1hcCxpPXZvaWQgMD09PXQuY29udmVydFRvQWJzb2x1dGVVcmxzJiZvOyh0LmNvbnZlcnRUb0Fic29sdXRlVXJsc3x8aSkmJihyPWwocikpO28mJihyKz1cIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIrYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkobykpKSkrXCIgKi9cIik7dmFyIGE9bmV3IEJsb2IoW3JdLHt0eXBlOlwidGV4dC9jc3NcIn0pLHM9ZS5ocmVmO2UuaHJlZj1VUkwuY3JlYXRlT2JqZWN0VVJMKGEpLHMmJlVSTC5yZXZva2VPYmplY3RVUkwocyl9LmJpbmQobnVsbCxuLHQpLG89ZnVuY3Rpb24oKXt2KG4pLG4uaHJlZiYmVVJMLnJldm9rZU9iamVjdFVSTChuLmhyZWYpfSk6KG49eSh0KSxyPWZ1bmN0aW9uKGUsdCl7dmFyIG49dC5jc3Mscj10Lm1lZGlhO3ImJmUuc2V0QXR0cmlidXRlKFwibWVkaWFcIixyKTtpZihlLnN0eWxlU2hlZXQpZS5zdHlsZVNoZWV0LmNzc1RleHQ9bjtlbHNle2Zvcig7ZS5maXJzdENoaWxkOyllLnJlbW92ZUNoaWxkKGUuZmlyc3RDaGlsZCk7ZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuKSl9fS5iaW5kKG51bGwsbiksbz1mdW5jdGlvbigpe3Yobil9KTtyZXR1cm4gcihlKSxmdW5jdGlvbih0KXtpZih0KXtpZih0LmNzcz09PWUuY3NzJiZ0Lm1lZGlhPT09ZS5tZWRpYSYmdC5zb3VyY2VNYXA9PT1lLnNvdXJjZU1hcClyZXR1cm47cihlPXQpfWVsc2UgbygpfX1lLmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgREVCVUcmJkRFQlVHJiZcIm9iamVjdFwiIT10eXBlb2YgZG9jdW1lbnQpdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpOyh0PXR8fHt9KS5hdHRycz1cIm9iamVjdFwiPT10eXBlb2YgdC5hdHRycz90LmF0dHJzOnt9LHQuc2luZ2xldG9ufHxcImJvb2xlYW5cIj09dHlwZW9mIHQuc2luZ2xldG9ufHwodC5zaW5nbGV0b249YSgpKSx0Lmluc2VydEludG98fCh0Lmluc2VydEludG89XCJoZWFkXCIpLHQuaW5zZXJ0QXR8fCh0Lmluc2VydEF0PVwiYm90dG9tXCIpO3ZhciBuPWQoZSx0KTtyZXR1cm4gcChuLHQpLGZ1bmN0aW9uKGUpe2Zvcih2YXIgcj1bXSxvPTA7bzxuLmxlbmd0aDtvKyspe3ZhciBhPW5bb107KHM9aVthLmlkXSkucmVmcy0tLHIucHVzaChzKX1lJiZwKGQoZSx0KSx0KTtmb3Iobz0wO288ci5sZW5ndGg7bysrKXt2YXIgcztpZigwPT09KHM9cltvXSkucmVmcyl7Zm9yKHZhciBjPTA7YzxzLnBhcnRzLmxlbmd0aDtjKyspcy5wYXJ0c1tjXSgpO2RlbGV0ZSBpW3MuaWRdfX19fTt2YXIgZyx4PShnPVtdLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGdbZV09dCxnLmZpbHRlcihCb29sZWFuKS5qb2luKFwiXFxuXCIpfSk7ZnVuY3Rpb24gdyhlLHQsbixyKXt2YXIgbz1uP1wiXCI6ci5jc3M7aWYoZS5zdHlsZVNoZWV0KWUuc3R5bGVTaGVldC5jc3NUZXh0PXgodCxvKTtlbHNle3ZhciBpPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG8pLGE9ZS5jaGlsZE5vZGVzO2FbdF0mJmUucmVtb3ZlQ2hpbGQoYVt0XSksYS5sZW5ndGg/ZS5pbnNlcnRCZWZvcmUoaSxhW3RdKTplLmFwcGVuZENoaWxkKGkpfX19LGZ1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPWZ1bmN0aW9uKGUpe3ZhciB0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJndpbmRvdy5sb2NhdGlvbjtpZighdCl0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtpZighZXx8XCJzdHJpbmdcIiE9dHlwZW9mIGUpcmV0dXJuIGU7dmFyIG49dC5wcm90b2NvbCtcIi8vXCIrdC5ob3N0LHI9bit0LnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLyxcIi9cIik7cmV0dXJuIGUucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksZnVuY3Rpb24oZSx0KXt2YXIgbyxpPXQudHJpbSgpLnJlcGxhY2UoL15cIiguKilcIiQvLGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHR9KS5yZXBsYWNlKC9eJyguKiknJC8sZnVuY3Rpb24oZSx0KXtyZXR1cm4gdH0pO3JldHVybi9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QoaSk/ZToobz0wPT09aS5pbmRleE9mKFwiLy9cIik/aTowPT09aS5pbmRleE9mKFwiL1wiKT9uK2k6citpLnJlcGxhY2UoL15cXC5cXC8vLFwiXCIpLFwidXJsKFwiK0pTT04uc3RyaW5naWZ5KG8pK1wiKVwiKX0pfX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO24ucih0KSx0LmRlZmF1bHQ9JzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwLjIgLTAuMyA5IDExLjRcIiB3aWR0aD1cIjEyXCIgaGVpZ2h0PVwiMTRcIj5cXG4gIDxwYXRoIGQ9XCJNMCAyLjc3Vi45MkExIDEgMCAwMS4yLjI4Qy4zNS4xLjU2IDAgLjgzIDBoNy42NmMuMjguMDEuNDguMS42My4yOC4xNC4xNy4yMS4zOC4yMS42NHYxLjg1YzAgLjI2LS4wOC40OC0uMjMuNjYtLjE1LjE3LS4zNy4yNi0uNjYuMjYtLjI4IDAtLjUtLjA5LS42NC0uMjZhMSAxIDAgMDEtLjIxLS42NlYxLjY5SDUuNnY3LjU4aC41Yy4yNSAwIC40NS4wOC42LjIzLjE3LjE2LjI1LjM1LjI1LjZzLS4wOC40NS0uMjQuNmEuODcuODcgMCAwMS0uNjIuMjJIMy4yMWEuODcuODcgMCAwMS0uNjEtLjIyLjc4Ljc4IDAgMDEtLjI0LS42YzAtLjI1LjA4LS40NC4yNC0uNmEuODUuODUgMCAwMS42MS0uMjNoLjVWMS43SDEuNzN2MS4wOGMwIC4yNi0uMDguNDgtLjIzLjY2LS4xNS4xNy0uMzcuMjYtLjY2LjI2LS4yOCAwLS41LS4wOS0uNjQtLjI2QTEgMSAwIDAxMCAyLjc3elwiLz5cXG48L3N2Zz5cXG4nfV0pfSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLl8zQkg3Y19VQkpJSU1WWG9hOUpxZ01CIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0eWVsbG93O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDNweDtcXG4gIGNvbG9yOiAjMjIyO1xcbiAgLyogZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7ICovXFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLl8zQkg3Y19VQkpJSU1WWG9hOUpxZ01CIC5jbVNYaklPSWlUSkRteUh3YVBKM3gge1xcbiAgZm9udC1zaXplOiA5cHg7XFxuICBjb2xvcjogZ3JheTtcXG4gIGZvbnQtZmFtaWx5OiBtb25hY28sIG1vbm9zcGFjZSwgXFxcIkNvdXJpZXIgTmV3XFxcIiwgQ291cmllcjtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZlZmVmO1xcbn1cXG5cXG4uXzNCSDdjX1VCSklJTVZYb2E5SnFnTUIgLl8zTHRfN3dxWUNDWEZkVDFMUzBHbXJBW2NvbnRlbnRlZGl0YWJsZV0ge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLl8zQkg3Y19VQkpJSU1WWG9hOUpxZ01CIC5fM1ZEd21XVXRXOXkyc0ZuSzVWYkVOIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC1mYW1pbHk6IG1vbmFjbywgbW9ub3NwYWNlLCBcXFwiQ291cmllciBOZXdcXFwiLCBDb3VyaWVyO1xcbiAgYm9yZGVyOiAjNTU1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXG4gIGNvbG9yOiAjMjIyO1xcbn1cXG5cXG4uXzF5ZmExOVhhNHZubE5ERE5sdHJLQmMgLmNxaVEzZXA4M0d6RDBEdk5rVDVGUyB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztFQUNYLCtDQUErQztFQUMvQyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLHNEQUFzRDtFQUN0RCxZQUFZO0VBQ1osZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixzREFBc0Q7RUFDdEQsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZvb3Rub3RlQmxvY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHR5ZWxsb3c7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogM3B4O1xcbiAgY29sb3I6ICMyMjI7XFxuICAvKiBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsgKi9cXG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uZm9vdG5vdGVCbG9jayAubWV0YUJhciB7XFxuICBmb250LXNpemU6IDlweDtcXG4gIGNvbG9yOiBncmF5O1xcbiAgZm9udC1mYW1pbHk6IG1vbmFjbywgbW9ub3NwYWNlLCBcXFwiQ291cmllciBOZXdcXFwiLCBDb3VyaWVyO1xcbiAgcGFkZGluZzogMnB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZmVmZWY7XFxufVxcblxcbi5mb290bm90ZUJsb2NrIC5jb250ZW50QXJlYVtjb250ZW50ZWRpdGFibGVdIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5mb290bm90ZUJsb2NrIC5lbWJlZENvZGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LWZhbWlseTogbW9uYWNvLCBtb25vc3BhY2UsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIENvdXJpZXI7XFxuICBib3JkZXI6ICM1NTU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcbiAgY29sb3I6ICMyMjI7XFxufVxcblxcbi5mb290bm90ZWJCbG9jayAuZW1iZWRQcmV2aWV3IHtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiZm9vdG5vdGVCbG9ja1wiOiBcIl8zQkg3Y19VQkpJSU1WWG9hOUpxZ01CXCIsXG5cdFwibWV0YUJhclwiOiBcImNtU1hqSU9JaVRKRG15SHdhUEozeFwiLFxuXHRcImNvbnRlbnRBcmVhXCI6IFwiXzNMdF83d3FZQ0NYRmRUMUxTMEdtckFcIixcblx0XCJlbWJlZENvZGVcIjogXCJfM1ZEd21XVXRXOXkyc0ZuSzVWYkVOXCIsXG5cdFwiZm9vdG5vdGViQmxvY2tcIjogXCJfMXlmYTE5WGE0dm5sTkRETmx0cktCY1wiLFxuXHRcImVtYmVkUHJldmlld1wiOiBcImNxaVEzZXA4M0d6RDBEdk5rVDVGU1wiXG59O1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJmdW5jdGlvbiBjbGVhbkNoYXJzKGNoYXJzOiBzdHJpbmcsIHJlZ2V4OiBSZWdFeHApIHtcbiAgcmV0dXJuIGNoYXJzLm1hdGNoKHJlZ2V4KS5qb2luKFwiXCIpO1xufVxuXG5mdW5jdGlvbiBnZXRDaGFycyhuOiBudW1iZXIpOiBzdHJpbmcge1xuICBmdW5jdGlvbiBnZXRTb21lQ2hhcnMoKSB7XG4gICAgY29uc3QgbWluID0gMTAwMCAqIDEwMDAgKiAxMDAwO1xuICAgIGNvbnN0IG1heCA9IDEwICogbWluIC0gMTtcbiAgICByZXR1cm4gKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbikudG9TdHJpbmcoMzYpO1xuICB9XG5cbiAgbGV0IHJldCA9IFwiXCI7XG4gIHdoaWxlIChyZXQubGVuZ3RoIDwgbikge1xuICAgIHJldCA9IHJldC5jb25jYXQoY2xlYW5DaGFycyhnZXRTb21lQ2hhcnMoKS50b0xvd2VyQ2FzZSgpLCAvW2EtejAtOV0vZykpO1xuICB9XG5cbiAgcmV0dXJuIHJldC5zbGljZSgwLCBuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlSUQob3B0aW9ucz86IHtcbiAgcHJlZml4Pzogc3RyaW5nO1xuICBsZW5ndGg/OiBudW1iZXI7XG59KTogc3RyaW5nIHtcbiAgbGV0IHByZWZpeCA9IFwiZm4tXCI7XG4gIGxldCBsZW5ndGggPSAxMDtcblxuICAvLyBTZXQgdXNlci1wcm92aWRlZCB2YWx1ZXNcbiAgaWYgKG9wdGlvbnMgJiYgKG9wdGlvbnMucHJlZml4IHx8IG9wdGlvbnMucHJlZml4ID09PSBcIlwiKSkge1xuICAgIHByZWZpeCA9IG9wdGlvbnMucHJlZml4O1xuICB9XG4gIGlmIChvcHRpb25zICYmIChvcHRpb25zLmxlbmd0aCB8fCBvcHRpb25zLmxlbmd0aCA9PT0gMCkpIHtcbiAgICBsZW5ndGggPSBvcHRpb25zLmxlbmd0aDtcbiAgfVxuXG4gIC8vIENoZWNrIGZvciBpbnZhbGlkIGlucHV0XG4gIGlmIChsZW5ndGggPCAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwib3B0aW9ucy5sZW5ndGggY2Fubm90IGJlIG5lZ2F0aXZlXCIpO1xuICB9XG4gIGlmICghTnVtYmVyLmlzSW50ZWdlcihsZW5ndGgpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwib3B0aW9ucy5sZW5ndGggbXVzdCBiZSBpbnRlZ2VyXCIpO1xuICB9XG4gIHJldHVybiBgJHtwcmVmaXh9JHtnZXRDaGFycyhsZW5ndGgpfWA7XG59XG4iLCJpbXBvcnQgeyBBUEksIElubGluZVRvb2wgfSBmcm9tIFwiQGVkaXRvcmpzL2VkaXRvcmpzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZUlEIH0gZnJvbSBcIi4vZ2VuZXJhdGVJRFwiO1xuXG5leHBvcnQgY2xhc3MgRm9vdG5vdGVNYWtlciBpbXBsZW1lbnRzIElubGluZVRvb2wge1xuICBhcGk6IEFQSTtcbiAgYnV0dG9uPzogSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIHN0YXRlOiBib29sZWFuO1xuXG4gIHN0YXRpYyBnZXQgaXNJbmxpbmUoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihhcmdzOiB7IGFwaTogQVBJIH0pIHtcbiAgICBjb25zdCB7IGFwaSB9ID0gYXJncztcblxuICAgIHRoaXMuYXBpID0gYXBpO1xuICAgIC8vIHRoaXMuYnV0dG9uID0gbnVsbDtcbiAgICB0aGlzLnN0YXRlID0gZmFsc2U7XG5cbiAgICB0aGlzLnJlbmRlciA9IHRoaXMucmVuZGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdXJyb3VuZCA9IHRoaXMuc3Vycm91bmQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLmJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgdGhpcy5idXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgdGhpcy5idXR0b24udGV4dENvbnRlbnQgPSBcIk1cIjtcbiAgICB0aGlzLmJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuYXBpLnN0eWxlcy5pbmxpbmVUb29sQnV0dG9uKTtcblxuICAgIHJldHVybiB0aGlzLmJ1dHRvbjtcbiAgfVxuXG4gIHN1cnJvdW5kKHJhbmdlOiBSYW5nZSkge1xuICAgIC8vIFRPRE8gLSBDaGVjayB0byBzZWUgaWYgdGhlcmUgYXJlIGFueSA8bWFyaz4gZWxlbWVudHMgaW5zaWRlXG4gICAgLy8gdGhlIHNlbGVjdGVkVGV4dC4gSWYgc28sIGRvbid0IGFsbG93IGEgZm9vdG5vdGUgdG8gYmUgY3JlYXRlZC5cbiAgICAvLyBob3dldmVyLCB0aGlzIHdpbGwgcmVxdWlyZSB1cyB0byBjcmVhdGUgYSBcImRlbGV0ZVwiIGZvb3Rub3RlXG4gICAgLy8gYnV0dG9uLiBPciB3ZSBjb3VsZCBhdXRvbWF0aWNhbGx5IGJyb2FkZW4gYSBmb290bm90ZSB3aGVuXG4gICAgLy8gdGhlIHVzZXIgc2VsZWN0cyBiZXlvbmQgZWl0aGVyIGVuZCBvZiBhIG1hcmssIG9yIHNyaGluayB0aGVcbiAgICAvLyBmb290bm90ZSB3aGVuIHRoZSB1c2VyIHNlbGVjdHMgd2l0aGluIGl0LlxuICAgIC8vIFRoZSB3YXkgbGluayBoYW5kbGVzIGl0IGlzIGlmIGFueSBwYXJ0IG9mIGFuIGV4aXN0aW5nIGxpbmsgaXNcbiAgICAvLyBzZWxlY3RlZCwgdGhlIGljb24gY2hhbmdlcyB0byBhIGRlbGV0ZSBsaW5rIGljb24uIHRoaXMgaXNcbiAgICAvLyBwcm9iYWJseSBhIGdvb2Qgc29sdXRpb24uXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2NvZGV4LXRlYW0vZWRpdG9yLmpzL2Jsb2IvbmV4dC9zcmMvY29tcG9uZW50cy9pbmxpbmUtdG9vbHMvaW5saW5lLXRvb2wtbGluay50c1xuXG4gICAgaWYgKHRoaXMuc3RhdGUpIHtcbiAgICAgIC8vIElmIGhpZ2hsaWdodHMgaXMgYWxyZWFkeSBhcHBsaWVkLCBkbyBub3RoaW5nIGZvciBub3dcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzZWxlY3RlZFRleHQgPSByYW5nZS5leHRyYWN0Q29udGVudHMoKTtcblxuICAgIC8vIENyZWF0ZSBNQVJLIGVsZW1lbnRcbiAgICBjb25zdCBpZCA9IGdlbmVyYXRlSUQoKTtcblxuICAgIGNvbnN0IG1hcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBtYXJrLmhyZWYgPSBcIiNcIiArIGlkO1xuXG4gICAgY29uc3QgZm9vdG5vdGVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic21hbGxcIik7XG4gICAgZm9vdG5vdGVOdW1iZXIuaW5uZXJIVE1MID0gXCIgWyAjXCIgKyBpZCArIFwiIF1cIjtcblxuICAgIC8vIEFwcGVuZCB0byB0aGUgTUFSSyBlbGVtZW50IHNlbGVjdGVkIFRleHROb2RlXG4gICAgbWFyay5hcHBlbmRDaGlsZChzZWxlY3RlZFRleHQpO1xuICAgIG1hcmsuYXBwZW5kQ2hpbGQoZm9vdG5vdGVOdW1iZXIpO1xuXG4gICAgLy8gSW5zZXJ0IG5ldyBlbGVtZW50XG4gICAgcmFuZ2UuaW5zZXJ0Tm9kZShtYXJrKTtcblxuICAgIC8vIGFkZCBhIGZvb3Rub3RlIGJsb2NrIG5vd1xuICAgIGNvbnN0IG5ld0Jsb2NrID0gdGhpcy5hcGkuYmxvY2tzLmluc2VydChcbiAgICAgIFwiZm9vdG5vdGVQYXJhZ3JhcGhcIixcbiAgICAgIHsgaWQgfSxcbiAgICAgIHVuZGVmaW5lZCxcbiAgICAgIHVuZGVmaW5lZCxcbiAgICAgIHRydWVcbiAgICApO1xuXG4gICAgLy8gY29uc29sZS5sb2coXG4gICAgLy8gICB0aGlzLmFwaS5ibG9ja3NcbiAgICAvLyAgICAgLmdldEJsb2NrQnlJbmRleCh0aGlzLmFwaS5ibG9ja3MuZ2V0Q3VycmVudEJsb2NrSW5kZXgoKSlcbiAgICAvLyAgICAgLnNhdmUoKVxuICAgIC8vICAgICAudGhlbigoZCkgPT4gY29uc29sZS5sb2coZCkpXG4gICAgLy8gKTtcblxuICAgIHRoaXMuYXBpLmlubGluZVRvb2xiYXIuY2xvc2UoKTtcblxuICAgIC8vIHRoaXMuYXBpLmZvY3VzKHRoaXMuYXBpLmJsb2Nrcy5nZXRDdXJyZW50QmxvY2tJbmRleCgpICsgMSlcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIGNvbnNvbGUubG9nKFwiQ2xlYXIgY2FsbGVkXCIpO1xuICB9XG5cbiAgY2hlY2tTdGF0ZShzZWxlY3Rpb246IFNlbGVjdGlvbik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHRleHQgPSBzZWxlY3Rpb24uYW5jaG9yTm9kZTtcblxuICAgIGlmICghdGV4dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFuY2hvckVsZW1lbnQgPSB0ZXh0IGluc3RhbmNlb2YgRWxlbWVudCA/IHRleHQgOiB0ZXh0LnBhcmVudEVsZW1lbnQ7XG5cbiAgICB0aGlzLnN0YXRlID0gISFhbmNob3JFbGVtZW50LmNsb3Nlc3QoXCJNQVJLXCIpO1xuXG4gICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gIH1cbn1cblxuY29uc29sZS5sb2coXCJEZWZpbmVkIGNsYXNzXCIsIEZvb3Rub3RlTWFrZXIpO1xuIiwiaW1wb3J0IFBhcmFncmFwaCBmcm9tIFwiQGVkaXRvcmpzL3BhcmFncmFwaFwiO1xuaW1wb3J0IHsgRm9vdG5vdGVNYWtlciB9IGZyb20gXCIuL0Zvb3Rub3RlTWFrZXJcIjtcbmltcG9ydCB7IGdlbmVyYXRlSUQgfSBmcm9tIFwiLi9nZW5lcmF0ZUlEXCI7XG5pbXBvcnQgeyBBUEksIEJsb2NrVG9vbERhdGEsIEVkaXRvckNvbmZpZyB9IGZyb20gXCJAZWRpdG9yanMvZWRpdG9yanNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGUuY3NzXCI7XG5cbmludGVyZmFjZSBUdW5lU2V0dGluZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWNvbjogc3RyaW5nO1xuICBhY3RpdmU6IGJvb2xlYW47XG4gIGhhbmRsZUNsaWNrOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgRm9vdG5vdGUgZXh0ZW5kcyBQYXJhZ3JhcGgge1xuICBjb25zdHJ1Y3RvcihvcHRzOiB7IGRhdGE6IEJsb2NrVG9vbERhdGE7IGNvbmZpZzogRWRpdG9yQ29uZmlnOyBhcGk6IEFQSSB9KSB7XG4gICAgY29uc3QgeyBkYXRhLCBjb25maWcsIGFwaSB9ID0gb3B0cztcbiAgICBzdXBlcih7IGRhdGEsIGNvbmZpZywgYXBpIH0pO1xuXG4gICAgLy8gaWYgbm8gSUQgaXMgc2V0LCBzZXQgb25lXG4gICAgaWYgKCFkYXRhLmlkKSB7XG4gICAgICBjb25zdCBpbml0aWFsSUQgPSBnZW5lcmF0ZUlEKCk7XG4gICAgICB0aGlzLl9kYXRhLmlkID0gaW5pdGlhbElEO1xuICAgIH1cblxuICAgIC8vIGlmIG5vdCB0ZXh0IGlzIHNldCwgc2V0IGl0XG4gICAgaWYgKCFkYXRhLnRleHQpIHtcbiAgICAgIHRoaXMuX2RhdGEudGV4dCA9IFwiXCI7XG4gICAgfVxuXG4gICAgdGhpcy5lbmFibGVFbWJlZENvZGUgPSBmYWxzZTtcblxuICAgIHRoaXMudG9nZ2xlRW1iZWRDb2RlID0gdGhpcy50b2dnbGVFbmFibGVFbWJlZENvZGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnJlbmRlckVtYmVkQ29kZSA9IHRoaXMucmVuZGVyRW1iZWRDb2RlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zYXZlID0gdGhpcy5zYXZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZW5kZXIgPSB0aGlzLnJlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMucmVuZGVyU2V0dGluZ3MgPSB0aGlzLnJlbmRlclNldHRpbmdzLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnNldHRpbmdzID0gW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcImFkZEVtYmVkQ29kZVwiLFxuICAgICAgICBpY29uOiBgPD5gLFxuICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICBoYW5kbGVDbGljazogdGhpcy50b2dnbGVFbWJlZENvZGUuYmluZCh0aGlzKSxcbiAgICAgIH0sXG4gICAgXTtcbiAgfVxuXG4gIHJlbmRlckVtYmVkQ29kZSgpIHtcbiAgICBsZXQgcHJldmlldyA9IHRoaXMud3JhcHBlci5xdWVyeVNlbGVjdG9yKFwiLlwiICsgc3R5bGVzLmVtYmVkUHJldmlldyk7XG4gICAgbGV0IGVtYmVkQ29kZSA9IHRoaXMud3JhcHBlci5xdWVyeVNlbGVjdG9yKFwiLlwiICsgc3R5bGVzLmVtYmVkQ29kZSkudmFsdWU7XG4gICAgY29uc29sZS5sb2coXCJSZW5kZXJpbmcgZW1iZWQgY29kZVwiLCB0aGlzLndyYXBwZXIpO1xuXG4gICAgaWYgKCF0aGlzLmVuYWJsZUVtYmVkQ29kZSkge1xuICAgICAgLy8gcmVtb3ZlIHByZXZpZXdcbiAgICAgIGlmIChwcmV2aWV3KSB7XG4gICAgICAgIHByZXZpZXcucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFwcmV2aWV3KSB7XG4gICAgICBwcmV2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHByZXZpZXcuY2xhc3NMaXN0LmFkZChzdHlsZXMuZW1iZWRQcmV2aWV3KTtcbiAgICAgIHRoaXMud3JhcHBlci5hcHBlbmRDaGlsZChwcmV2aWV3KTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcInJlbmRlckVtYmVkQ29kZVwiLCBwcmV2aWV3LCB0aGlzLmRhdGEpO1xuXG4gICAgcHJldmlldy5pbm5lckhUTUwgPSBlbWJlZENvZGU7XG4gIH1cblxuICB0b2dnbGVFbmFibGVFbWJlZENvZGUoKSB7XG4gICAgdGhpcy5lbmFibGVFbWJlZENvZGUgPSAhdGhpcy5lbmFibGVFbWJlZENvZGU7XG4gICAgY29uc29sZS5sb2coXCJ0b2dnbGluZyBlbWJlZCBjb2RlOiBcIiwgdGhpcy5lbmFibGVFbWJlZENvZGUsIHRoaXMuX2RhdGEpO1xuXG4gICAgY29uc29sZS5sb2coXCJ0aGlzLndyYXBwZXJcIiwgdGhpcy53cmFwcGVyKTtcbiAgICBsZXQgZW1iZWRDb2RlID0gdGhpcy53cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBzdHlsZXMuZW1iZWRDb2RlKTtcblxuICAgIGlmICh0aGlzLmVuYWJsZUVtYmVkQ29kZSkge1xuICAgICAgaWYgKGVtYmVkQ29kZSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlbWJlZENvZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICBlbWJlZENvZGUuY2xhc3NMaXN0LmFkZChzdHlsZXMuZW1iZWRDb2RlKTtcbiAgICAgIHRoaXMud3JhcHBlci5hcHBlbmRDaGlsZChlbWJlZENvZGUpO1xuICAgICAgZW1iZWRDb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdGhpcy5yZW5kZXJFbWJlZENvZGUpO1xuICAgICAgZW1iZWRDb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLnJlbmRlckVtYmVkQ29kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVtYmVkQ29kZS5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IHNhbml0aXplKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogZmFsc2UsXG4gICAgICB0ZXh0OiB7IGk6IHRydWUsIGE6IHRydWUsIGI6IHRydWUgfSxcbiAgICAgIGVtYmVkQ29kZTogdHJ1ZSxcbiAgICB9O1xuICB9XG5cbiAgc2F2ZShibG9ja0NvbnRlbnQ6IEJsb2NrVG9vbERhdGEpIHtcbiAgICBjb25zdCBjb250ZW50ID0gYmxvY2tDb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBzdHlsZXMuY29udGVudEFyZWEpO1xuICAgIGNvbnN0IHRleHQgPSBjb250ZW50ID8gY29udGVudC5pbm5lckhUTUwgOiBcIlwiO1xuXG4gICAgY29uc3QgaWQgPSBibG9ja0NvbnRlbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgc3R5bGVzLm1ldGFCYXIpXG4gICAgICAuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcblxuICAgIGNvbnN0IGVtYmVkQ29kZSA9IGJsb2NrQ29udGVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgc3R5bGVzLmVtYmVkQ29kZSlcbiAgICAgID8gYmxvY2tDb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBzdHlsZXMuZW1iZWRDb2RlKS52YWx1ZVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBjb25zb2xlLmxvZyhcInNhdmUuZW1iZWRDb2RlXCIsIGVtYmVkQ29kZSk7XG5cbiAgICBjb25zdCByZXQgPSB7XG4gICAgICBpZCxcbiAgICAgIHRleHQsXG4gICAgICBlbWJlZENvZGUsXG4gICAgfTtcblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICByZW5kZXJTZXR0aW5ncygpIHtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIHRoaXMuc2V0dGluZ3MuZm9yRWFjaCgodHVuZTogVHVuZVNldHRpbmcpID0+IHtcbiAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImNkeC1zZXR0aW5ncy1idXR0b25cIik7XG4gICAgICBidXR0b24uaW5uZXJIVE1MID0gdHVuZS5pY29uO1xuICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgICBpZiAodHVuZS5hY3RpdmUpIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjZHgtc2V0dGluZ3MtYnV0dG9uLS1hY3RpdmVcIik7XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdHVuZS5oYW5kbGVDbGljayk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gd3JhcHBlcjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoc3R5bGVzLmZvb3Rub3RlQmxvY2spO1xuXG4gICAgY29uc3QgbWV0YUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWV0YUJhci5jbGFzc0xpc3QuYWRkKHN0eWxlcy5tZXRhQmFyKTtcbiAgICBtZXRhQmFyLnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgdGhpcy5kYXRhLmlkKTtcbiAgICBtZXRhQmFyLmlubmVySFRNTCA9IFwiWyAjXCIgKyB0aGlzLmRhdGEuaWQgKyBcIiBdIFwiO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobWV0YUJhcik7XG5cbiAgICBjb25zdCBjb250ZW50QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudEFyZWEuY2xhc3NMaXN0LmFkZChzdHlsZXMuY29udGVudEFyZWEpO1xuICAgIGNvbnRlbnRBcmVhLmNsYXNzTGlzdC5hZGQoXCJjZS1wYXJhZ3JhcGhcIik7XG4gICAgY29udGVudEFyZWEuaW5uZXJIVE1MID0gdGhpcy5kYXRhLnRleHQ7XG4gICAgY29udGVudEFyZWEuY29udGVudEVkaXRhYmxlID0gXCJ0cnVlXCI7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChjb250ZW50QXJlYSk7XG5cbiAgICBjb250ZW50QXJlYS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5vbktleVVwKTtcblxuICAgIHRoaXMud3JhcHBlciA9IHdyYXBwZXI7XG5cbiAgICByZXR1cm4gd3JhcHBlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBJY29uIGFuZCB0aXRsZSBmb3IgZGlzcGxheWluZyBhdCB0aGUgVG9vbGJveFxuICAgKlxuICAgKiBAcmV0dXJuIHt7aWNvbjogc3RyaW5nLCB0aXRsZTogc3RyaW5nfX1cbiAgICovXG4gIHN0YXRpYyBnZXQgdG9vbGJveCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWNvbjogXCJGXCIsXG4gICAgICB0aXRsZTogXCJGb290bm90ZVwiLFxuICAgIH07XG4gIH1cbn1cblxuY29uc29sZS5sb2coXCJEZWZpbmVkIGNsYXNzXCIsIEZvb3Rub3RlTWFrZXIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==
