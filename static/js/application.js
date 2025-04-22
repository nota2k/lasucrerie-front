/*! For license information please see application-cd18cc9e172b38d9ad5f.js.LICENSE.txt */
!(function (e) {
    var t = {};
    function n(i) {
        if (t[i]) return t[i].exports;
        var r = (t[i] = { i: i, l: !1, exports: {} });
        return e[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    (n.m = e),
        (n.c = t),
        (n.d = function (e, t, i) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
        }),
        (n.r = function (e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" === typeof e && e && e.__esModule) return e;
            var i = Object.create(null);
            if ((n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var r in e)
                    n.d(
                        i,
                        r,
                        function (t) {
                            return e[t];
                        }.bind(null, r)
                    );
            return i;
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
        (n.p = "/packs/"),
        n((n.s = 12));
})([
    function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return i;
        });
        var i = function () {
            if (document.querySelector(".fulltout")) {
                document.querySelectorAll("#index-videos");
                document.querySelectorAll(".video-container-mosaic").forEach(function (e) {
                    var t = e.querySelector("#index-videos-mosaic"),
                        n = e.querySelector(".title-video-mosaic");
                    e.addEventListener("mouseover", function () {
                        t.play(), (n.style.display = "none");
                    }),
                        e.addEventListener("mouseout", function () {
                            t.pause(), (n.style.display = "flex");
                        });
                });
            }
        };
    },
    function (e, t, n) {
        var i;
        !(function (t, n) {
            "use strict";
            "object" === typeof e.exports
                ? (e.exports = t.document
                      ? n(t, !0)
                      : function (e) {
                            if (!e.document) throw new Error("jQuery requires a window with a document");
                            return n(e);
                        })
                : n(t);
        })("undefined" !== typeof window ? window : this, function (n, r) {
            "use strict";
            var o = [],
                s = Object.getPrototypeOf,
                a = o.slice,
                l = o.flat
                    ? function (e) {
                          return o.flat.call(e);
                      }
                    : function (e) {
                          return o.concat.apply([], e);
                      },
                c = o.push,
                u = o.indexOf,
                d = {},
                f = d.toString,
                h = d.hasOwnProperty,
                p = h.toString,
                m = p.call(Object),
                g = {},
                v = function (e) {
                    return "function" === typeof e && "number" !== typeof e.nodeType && "function" !== typeof e.item;
                },
                y = function (e) {
                    return null != e && e === e.window;
                },
                b = n.document,
                _ = { type: !0, src: !0, nonce: !0, noModule: !0 };
            function w(e, t, n) {
                var i,
                    r,
                    o = (n = n || b).createElement("script");
                if (((o.text = e), t)) for (i in _) (r = t[i] || (t.getAttribute && t.getAttribute(i))) && o.setAttribute(i, r);
                n.head.appendChild(o).parentNode.removeChild(o);
            }
            function x(e) {
                return null == e ? e + "" : "object" === typeof e || "function" === typeof e ? d[f.call(e)] || "object" : typeof e;
            }
            var E = "3.6.1",
                S = function (e, t) {
                    return new S.fn.init(e, t);
                };
            function T(e) {
                var t = !!e && "length" in e && e.length,
                    n = x(e);
                return !v(e) && !y(e) && ("array" === n || 0 === t || ("number" === typeof t && t > 0 && t - 1 in e));
            }
            (S.fn = S.prototype = {
                jquery: E,
                constructor: S,
                length: 0,
                toArray: function () {
                    return a.call(this);
                },
                get: function (e) {
                    return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e];
                },
                pushStack: function (e) {
                    var t = S.merge(this.constructor(), e);
                    return (t.prevObject = this), t;
                },
                each: function (e) {
                    return S.each(this, e);
                },
                map: function (e) {
                    return this.pushStack(
                        S.map(this, function (t, n) {
                            return e.call(t, n, t);
                        })
                    );
                },
                slice: function () {
                    return this.pushStack(a.apply(this, arguments));
                },
                first: function () {
                    return this.eq(0);
                },
                last: function () {
                    return this.eq(-1);
                },
                even: function () {
                    return this.pushStack(
                        S.grep(this, function (e, t) {
                            return (t + 1) % 2;
                        })
                    );
                },
                odd: function () {
                    return this.pushStack(
                        S.grep(this, function (e, t) {
                            return t % 2;
                        })
                    );
                },
                eq: function (e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
                },
                end: function () {
                    return this.prevObject || this.constructor();
                },
                push: c,
                sort: o.sort,
                splice: o.splice,
            }),
                (S.extend = S.fn.extend = function () {
                    var e,
                        t,
                        n,
                        i,
                        r,
                        o,
                        s = arguments[0] || {},
                        a = 1,
                        l = arguments.length,
                        c = !1;
                    for ("boolean" === typeof s && ((c = s), (s = arguments[a] || {}), a++), "object" === typeof s || v(s) || (s = {}), a === l && ((s = this), a--); a < l; a++)
                        if (null != (e = arguments[a]))
                            for (t in e)
                                (i = e[t]),
                                    "__proto__" !== t &&
                                        s !== i &&
                                        (c && i && (S.isPlainObject(i) || (r = Array.isArray(i)))
                                            ? ((n = s[t]), (o = r && !Array.isArray(n) ? [] : r || S.isPlainObject(n) ? n : {}), (r = !1), (s[t] = S.extend(c, o, i)))
                                            : void 0 !== i && (s[t] = i));
                    return s;
                }),
                S.extend({
                    expando: "jQuery" + (E + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function (e) {
                        throw new Error(e);
                    },
                    noop: function () {},
                    isPlainObject: function (e) {
                        var t, n;
                        return !(!e || "[object Object]" !== f.call(e)) && (!(t = s(e)) || ("function" === typeof (n = h.call(t, "constructor") && t.constructor) && p.call(n) === m));
                    },
                    isEmptyObject: function (e) {
                        var t;
                        for (t in e) return !1;
                        return !0;
                    },
                    globalEval: function (e, t, n) {
                        w(e, { nonce: t && t.nonce }, n);
                    },
                    each: function (e, t) {
                        var n,
                            i = 0;
                        if (T(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                        else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                        return e;
                    },
                    makeArray: function (e, t) {
                        var n = t || [];
                        return null != e && (T(Object(e)) ? S.merge(n, "string" === typeof e ? [e] : e) : c.call(n, e)), n;
                    },
                    inArray: function (e, t, n) {
                        return null == t ? -1 : u.call(t, e, n);
                    },
                    merge: function (e, t) {
                        for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
                        return (e.length = r), e;
                    },
                    grep: function (e, t, n) {
                        for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
                        return i;
                    },
                    map: function (e, t, n) {
                        var i,
                            r,
                            o = 0,
                            s = [];
                        if (T(e)) for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && s.push(r);
                        else for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
                        return l(s);
                    },
                    guid: 1,
                    support: g,
                }),
                "function" === typeof Symbol && (S.fn[Symbol.iterator] = o[Symbol.iterator]),
                S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                    d["[object " + t + "]"] = t.toLowerCase();
                });
            var C = (function (e) {
                var t,
                    n,
                    i,
                    r,
                    o,
                    s,
                    a,
                    l,
                    c,
                    u,
                    d,
                    f,
                    h,
                    p,
                    m,
                    g,
                    v,
                    y,
                    b,
                    _ = "sizzle" + 1 * new Date(),
                    w = e.document,
                    x = 0,
                    E = 0,
                    S = le(),
                    T = le(),
                    C = le(),
                    k = le(),
                    A = function (e, t) {
                        return e === t && (d = !0), 0;
                    },
                    L = {}.hasOwnProperty,
                    D = [],
                    j = D.pop,
                    O = D.push,
                    N = D.push,
                    q = D.slice,
                    I = function (e, t) {
                        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                        return -1;
                    },
                    M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    P = "[\\x20\\t\\r\\n\\f]",
                    H = "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                    R = "\\[[\\x20\\t\\r\\n\\f]*(" + H + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + P + "*\\]",
                    B = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
                    W = new RegExp(P + "+", "g"),
                    F = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
                    $ = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
                    U = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),
                    z = new RegExp(P + "|>"),
                    X = new RegExp(B),
                    V = new RegExp("^" + H + "$"),
                    Y = {
                        ID: new RegExp("^#(" + H + ")"),
                        CLASS: new RegExp("^\\.(" + H + ")"),
                        TAG: new RegExp("^(" + H + "|[*])"),
                        ATTR: new RegExp("^" + R),
                        PSEUDO: new RegExp("^" + B),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
                        bool: new RegExp("^(?:" + M + ")$", "i"),
                        needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i"),
                    },
                    K = /HTML$/i,
                    Q = /^(?:input|select|textarea|button)$/i,
                    G = /^h\d$/i,
                    J = /^[^{]+\{\s*\[native \w/,
                    Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ee = /[+~]/,
                    te = new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])", "g"),
                    ne = function (e, t) {
                        var n = "0x" + e.slice(1) - 65536;
                        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
                    },
                    ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    re = function (e, t) {
                        return t ? ("\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
                    },
                    oe = function () {
                        f();
                    },
                    se = _e(
                        function (e) {
                            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                        },
                        { dir: "parentNode", next: "legend" }
                    );
                try {
                    N.apply((D = q.call(w.childNodes)), w.childNodes), D[w.childNodes.length].nodeType;
                } catch (Te) {
                    N = {
                        apply: D.length
                            ? function (e, t) {
                                  O.apply(e, q.call(t));
                              }
                            : function (e, t) {
                                  for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                                  e.length = n - 1;
                              },
                    };
                }
                function ae(e, t, i, r) {
                    var o,
                        a,
                        c,
                        u,
                        d,
                        p,
                        v,
                        y = t && t.ownerDocument,
                        w = t ? t.nodeType : 9;
                    if (((i = i || []), "string" !== typeof e || !e || (1 !== w && 9 !== w && 11 !== w))) return i;
                    if (!r && (f(t), (t = t || h), m)) {
                        if (11 !== w && (d = Z.exec(e)))
                            if ((o = d[1])) {
                                if (9 === w) {
                                    if (!(c = t.getElementById(o))) return i;
                                    if (c.id === o) return i.push(c), i;
                                } else if (y && (c = y.getElementById(o)) && b(t, c) && c.id === o) return i.push(c), i;
                            } else {
                                if (d[2]) return N.apply(i, t.getElementsByTagName(e)), i;
                                if ((o = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return N.apply(i, t.getElementsByClassName(o)), i;
                            }
                        if (n.qsa && !k[e + " "] && (!g || !g.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                            if (((v = e), (y = t), 1 === w && (z.test(e) || U.test(e)))) {
                                for (((y = (ee.test(e) && ve(t.parentNode)) || t) === t && n.scope) || ((u = t.getAttribute("id")) ? (u = u.replace(ie, re)) : t.setAttribute("id", (u = _))), a = (p = s(e)).length; a--; )
                                    p[a] = (u ? "#" + u : ":scope") + " " + be(p[a]);
                                v = p.join(",");
                            }
                            try {
                                return N.apply(i, y.querySelectorAll(v)), i;
                            } catch (x) {
                                k(e, !0);
                            } finally {
                                u === _ && t.removeAttribute("id");
                            }
                        }
                    }
                    return l(e.replace(F, "$1"), t, i, r);
                }
                function le() {
                    var e = [];
                    return function t(n, r) {
                        return e.push(n + " ") > i.cacheLength && delete t[e.shift()], (t[n + " "] = r);
                    };
                }
                function ce(e) {
                    return (e[_] = !0), e;
                }
                function ue(e) {
                    var t = h.createElement("fieldset");
                    try {
                        return !!e(t);
                    } catch (Te) {
                        return !1;
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), (t = null);
                    }
                }
                function de(e, t) {
                    for (var n = e.split("|"), r = n.length; r--; ) i.attrHandle[n[r]] = t;
                }
                function fe(e, t) {
                    var n = t && e,
                        i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (i) return i;
                    if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                    return e ? 1 : -1;
                }
                function he(e) {
                    return function (t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e;
                    };
                }
                function pe(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e;
                    };
                }
                function me(e) {
                    return function (t) {
                        return "form" in t
                            ? t.parentNode && !1 === t.disabled
                                ? "label" in t
                                    ? "label" in t.parentNode
                                        ? t.parentNode.disabled === e
                                        : t.disabled === e
                                    : t.isDisabled === e || (t.isDisabled !== !e && se(t) === e)
                                : t.disabled === e
                            : "label" in t && t.disabled === e;
                    };
                }
                function ge(e) {
                    return ce(function (t) {
                        return (
                            (t = +t),
                            ce(function (n, i) {
                                for (var r, o = e([], n.length, t), s = o.length; s--; ) n[(r = o[s])] && (n[r] = !(i[r] = n[r]));
                            })
                        );
                    });
                }
                function ve(e) {
                    return e && "undefined" !== typeof e.getElementsByTagName && e;
                }
                for (t in ((n = ae.support = {}),
                (o = ae.isXML = function (e) {
                    var t = e && e.namespaceURI,
                        n = e && (e.ownerDocument || e).documentElement;
                    return !K.test(t || (n && n.nodeName) || "HTML");
                }),
                (f = ae.setDocument = function (e) {
                    var t,
                        r,
                        s = e ? e.ownerDocument || e : w;
                    return s != h && 9 === s.nodeType && s.documentElement
                        ? ((p = (h = s).documentElement),
                          (m = !o(h)),
                          w != h && (r = h.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", oe, !1) : r.attachEvent && r.attachEvent("onunload", oe)),
                          (n.scope = ue(function (e) {
                              return p.appendChild(e).appendChild(h.createElement("div")), "undefined" !== typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
                          })),
                          (n.attributes = ue(function (e) {
                              return (e.className = "i"), !e.getAttribute("className");
                          })),
                          (n.getElementsByTagName = ue(function (e) {
                              return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length;
                          })),
                          (n.getElementsByClassName = J.test(h.getElementsByClassName)),
                          (n.getById = ue(function (e) {
                              return (p.appendChild(e).id = _), !h.getElementsByName || !h.getElementsByName(_).length;
                          })),
                          n.getById
                              ? ((i.filter.ID = function (e) {
                                    var t = e.replace(te, ne);
                                    return function (e) {
                                        return e.getAttribute("id") === t;
                                    };
                                }),
                                (i.find.ID = function (e, t) {
                                    if ("undefined" !== typeof t.getElementById && m) {
                                        var n = t.getElementById(e);
                                        return n ? [n] : [];
                                    }
                                }))
                              : ((i.filter.ID = function (e) {
                                    var t = e.replace(te, ne);
                                    return function (e) {
                                        var n = "undefined" !== typeof e.getAttributeNode && e.getAttributeNode("id");
                                        return n && n.value === t;
                                    };
                                }),
                                (i.find.ID = function (e, t) {
                                    if ("undefined" !== typeof t.getElementById && m) {
                                        var n,
                                            i,
                                            r,
                                            o = t.getElementById(e);
                                        if (o) {
                                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                            for (r = t.getElementsByName(e), i = 0; (o = r[i++]); ) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                        }
                                        return [];
                                    }
                                })),
                          (i.find.TAG = n.getElementsByTagName
                              ? function (e, t) {
                                    return "undefined" !== typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                                }
                              : function (e, t) {
                                    var n,
                                        i = [],
                                        r = 0,
                                        o = t.getElementsByTagName(e);
                                    if ("*" === e) {
                                        for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                                        return i;
                                    }
                                    return o;
                                }),
                          (i.find.CLASS =
                              n.getElementsByClassName &&
                              function (e, t) {
                                  if ("undefined" !== typeof t.getElementsByClassName && m) return t.getElementsByClassName(e);
                              }),
                          (v = []),
                          (g = []),
                          (n.qsa = J.test(h.querySelectorAll)) &&
                              (ue(function (e) {
                                  var t;
                                  (p.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                      e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                                      e.querySelectorAll("[selected]").length || g.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + M + ")"),
                                      e.querySelectorAll("[id~=" + _ + "-]").length || g.push("~="),
                                      (t = h.createElement("input")).setAttribute("name", ""),
                                      e.appendChild(t),
                                      e.querySelectorAll("[name='']").length || g.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                                      e.querySelectorAll(":checked").length || g.push(":checked"),
                                      e.querySelectorAll("a#" + _ + "+*").length || g.push(".#.+[+~]"),
                                      e.querySelectorAll("\\\f"),
                                      g.push("[\\r\\n\\f]");
                              }),
                              ue(function (e) {
                                  e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                  var t = h.createElement("input");
                                  t.setAttribute("type", "hidden"),
                                      e.appendChild(t).setAttribute("name", "D"),
                                      e.querySelectorAll("[name=d]").length && g.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                                      2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"),
                                      (p.appendChild(e).disabled = !0),
                                      2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"),
                                      e.querySelectorAll("*,:x"),
                                      g.push(",.*:");
                              })),
                          (n.matchesSelector = J.test((y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector))) &&
                              ue(function (e) {
                                  (n.disconnectedMatch = y.call(e, "*")), y.call(e, "[s!='']:x"), v.push("!=", B);
                              }),
                          (g = g.length && new RegExp(g.join("|"))),
                          (v = v.length && new RegExp(v.join("|"))),
                          (t = J.test(p.compareDocumentPosition)),
                          (b =
                              t || J.test(p.contains)
                                  ? function (e, t) {
                                        var n = 9 === e.nodeType ? e.documentElement : e,
                                            i = t && t.parentNode;
                                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
                                    }
                                  : function (e, t) {
                                        if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                        return !1;
                                    }),
                          (A = t
                              ? function (e, t) {
                                    if (e === t) return (d = !0), 0;
                                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                    return (
                                        i ||
                                        (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!n.sortDetached && t.compareDocumentPosition(e) === i)
                                            ? e == h || (e.ownerDocument == w && b(w, e))
                                                ? -1
                                                : t == h || (t.ownerDocument == w && b(w, t))
                                                ? 1
                                                : u
                                                ? I(u, e) - I(u, t)
                                                : 0
                                            : 4 & i
                                            ? -1
                                            : 1)
                                    );
                                }
                              : function (e, t) {
                                    if (e === t) return (d = !0), 0;
                                    var n,
                                        i = 0,
                                        r = e.parentNode,
                                        o = t.parentNode,
                                        s = [e],
                                        a = [t];
                                    if (!r || !o) return e == h ? -1 : t == h ? 1 : r ? -1 : o ? 1 : u ? I(u, e) - I(u, t) : 0;
                                    if (r === o) return fe(e, t);
                                    for (n = e; (n = n.parentNode); ) s.unshift(n);
                                    for (n = t; (n = n.parentNode); ) a.unshift(n);
                                    for (; s[i] === a[i]; ) i++;
                                    return i ? fe(s[i], a[i]) : s[i] == w ? -1 : a[i] == w ? 1 : 0;
                                }),
                          h)
                        : h;
                }),
                (ae.matches = function (e, t) {
                    return ae(e, null, null, t);
                }),
                (ae.matchesSelector = function (e, t) {
                    if ((f(e), n.matchesSelector && m && !k[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))))
                        try {
                            var i = y.call(e, t);
                            if (i || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return i;
                        } catch (Te) {
                            k(t, !0);
                        }
                    return ae(t, h, null, [e]).length > 0;
                }),
                (ae.contains = function (e, t) {
                    return (e.ownerDocument || e) != h && f(e), b(e, t);
                }),
                (ae.attr = function (e, t) {
                    (e.ownerDocument || e) != h && f(e);
                    var r = i.attrHandle[t.toLowerCase()],
                        o = r && L.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !m) : void 0;
                    return void 0 !== o ? o : n.attributes || !m ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
                }),
                (ae.escape = function (e) {
                    return (e + "").replace(ie, re);
                }),
                (ae.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e);
                }),
                (ae.uniqueSort = function (e) {
                    var t,
                        i = [],
                        r = 0,
                        o = 0;
                    if (((d = !n.detectDuplicates), (u = !n.sortStable && e.slice(0)), e.sort(A), d)) {
                        for (; (t = e[o++]); ) t === e[o] && (r = i.push(o));
                        for (; r--; ) e.splice(i[r], 1);
                    }
                    return (u = null), e;
                }),
                (r = ae.getText = function (e) {
                    var t,
                        n = "",
                        i = 0,
                        o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" === typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
                        } else if (3 === o || 4 === o) return e.nodeValue;
                    } else for (; (t = e[i++]); ) n += r(t);
                    return n;
                }),
                (i = ae.selectors = {
                    cacheLength: 50,
                    createPseudo: ce,
                    match: Y,
                    attrHandle: {},
                    find: {},
                    relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                    preFilter: {
                        ATTR: function (e) {
                            return (e[1] = e[1].replace(te, ne)), (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                        },
                        CHILD: function (e) {
                            return (
                                (e[1] = e[1].toLowerCase()),
                                "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && ae.error(e[0]),
                                e
                            );
                        },
                        PSEUDO: function (e) {
                            var t,
                                n = !e[6] && e[2];
                            return Y.CHILD.test(e[0])
                                ? null
                                : (e[3] ? (e[2] = e[4] || e[5] || "") : n && X.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                        },
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(te, ne).toLowerCase();
                            return "*" === e
                                ? function () {
                                      return !0;
                                  }
                                : function (e) {
                                      return e.nodeName && e.nodeName.toLowerCase() === t;
                                  };
                        },
                        CLASS: function (e) {
                            var t = S[e + " "];
                            return (
                                t ||
                                ((t = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + e + "(" + P + "|$)")) &&
                                    S(e, function (e) {
                                        return t.test(("string" === typeof e.className && e.className) || ("undefined" !== typeof e.getAttribute && e.getAttribute("class")) || "");
                                    }))
                            );
                        },
                        ATTR: function (e, t, n) {
                            return function (i) {
                                var r = ae.attr(i, e);
                                return null == r
                                    ? "!=" === t
                                    : !t ||
                                          ((r += ""),
                                          "=" === t
                                              ? r === n
                                              : "!=" === t
                                              ? r !== n
                                              : "^=" === t
                                              ? n && 0 === r.indexOf(n)
                                              : "*=" === t
                                              ? n && r.indexOf(n) > -1
                                              : "$=" === t
                                              ? n && r.slice(-n.length) === n
                                              : "~=" === t
                                              ? (" " + r.replace(W, " ") + " ").indexOf(n) > -1
                                              : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"));
                            };
                        },
                        CHILD: function (e, t, n, i, r) {
                            var o = "nth" !== e.slice(0, 3),
                                s = "last" !== e.slice(-4),
                                a = "of-type" === t;
                            return 1 === i && 0 === r
                                ? function (e) {
                                      return !!e.parentNode;
                                  }
                                : function (t, n, l) {
                                      var c,
                                          u,
                                          d,
                                          f,
                                          h,
                                          p,
                                          m = o !== s ? "nextSibling" : "previousSibling",
                                          g = t.parentNode,
                                          v = a && t.nodeName.toLowerCase(),
                                          y = !l && !a,
                                          b = !1;
                                      if (g) {
                                          if (o) {
                                              for (; m; ) {
                                                  for (f = t; (f = f[m]); ) if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                                  p = m = "only" === e && !p && "nextSibling";
                                              }
                                              return !0;
                                          }
                                          if (((p = [s ? g.firstChild : g.lastChild]), s && y)) {
                                              for (
                                                  b = (h = (c = (u = (d = (f = g)[_] || (f[_] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === x && c[1]) && c[2], f = h && g.childNodes[h];
                                                  (f = (++h && f && f[m]) || (b = h = 0) || p.pop());

                                              )
                                                  if (1 === f.nodeType && ++b && f === t) {
                                                      u[e] = [x, h, b];
                                                      break;
                                                  }
                                          } else if ((y && (b = h = (c = (u = (d = (f = t)[_] || (f[_] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === x && c[1]), !1 === b))
                                              for (
                                                  ;
                                                  (f = (++h && f && f[m]) || (b = h = 0) || p.pop()) &&
                                                  ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && ((u = (d = f[_] || (f[_] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [x, b]), f !== t));

                                              );
                                          return (b -= r) === i || (b % i === 0 && b / i >= 0);
                                      }
                                  };
                        },
                        PSEUDO: function (e, t) {
                            var n,
                                r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                            return r[_]
                                ? r(t)
                                : r.length > 1
                                ? ((n = [e, e, "", t]),
                                  i.setFilters.hasOwnProperty(e.toLowerCase())
                                      ? ce(function (e, n) {
                                            for (var i, o = r(e, t), s = o.length; s--; ) e[(i = I(e, o[s]))] = !(n[i] = o[s]);
                                        })
                                      : function (e) {
                                            return r(e, 0, n);
                                        })
                                : r;
                        },
                    },
                    pseudos: {
                        not: ce(function (e) {
                            var t = [],
                                n = [],
                                i = a(e.replace(F, "$1"));
                            return i[_]
                                ? ce(function (e, t, n, r) {
                                      for (var o, s = i(e, null, r, []), a = e.length; a--; ) (o = s[a]) && (e[a] = !(t[a] = o));
                                  })
                                : function (e, r, o) {
                                      return (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop();
                                  };
                        }),
                        has: ce(function (e) {
                            return function (t) {
                                return ae(e, t).length > 0;
                            };
                        }),
                        contains: ce(function (e) {
                            return (
                                (e = e.replace(te, ne)),
                                function (t) {
                                    return (t.textContent || r(t)).indexOf(e) > -1;
                                }
                            );
                        }),
                        lang: ce(function (e) {
                            return (
                                V.test(e || "") || ae.error("unsupported lang: " + e),
                                (e = e.replace(te, ne).toLowerCase()),
                                function (t) {
                                    var n;
                                    do {
                                        if ((n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1;
                                }
                            );
                        }),
                        target: function (t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id;
                        },
                        root: function (e) {
                            return e === p;
                        },
                        focus: function (e) {
                            return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                        },
                        enabled: me(!1),
                        disabled: me(!0),
                        checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                        },
                        selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                        },
                        empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function (e) {
                            return !i.pseudos.empty(e);
                        },
                        header: function (e) {
                            return G.test(e.nodeName);
                        },
                        input: function (e) {
                            return Q.test(e.nodeName);
                        },
                        button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return ("input" === t && "button" === e.type) || "button" === t;
                        },
                        text: function (e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                        },
                        first: ge(function () {
                            return [0];
                        }),
                        last: ge(function (e, t) {
                            return [t - 1];
                        }),
                        eq: ge(function (e, t, n) {
                            return [n < 0 ? n + t : n];
                        }),
                        even: ge(function (e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e;
                        }),
                        odd: ge(function (e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e;
                        }),
                        lt: ge(function (e, t, n) {
                            for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; ) e.push(i);
                            return e;
                        }),
                        gt: ge(function (e, t, n) {
                            for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                            return e;
                        }),
                    },
                }),
                (i.pseudos.nth = i.pseudos.eq),
                { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                    i.pseudos[t] = he(t);
                for (t in { submit: !0, reset: !0 }) i.pseudos[t] = pe(t);
                function ye() {}
                function be(e) {
                    for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                    return i;
                }
                function _e(e, t, n) {
                    var i = t.dir,
                        r = t.next,
                        o = r || i,
                        s = n && "parentNode" === o,
                        a = E++;
                    return t.first
                        ? function (t, n, r) {
                              for (; (t = t[i]); ) if (1 === t.nodeType || s) return e(t, n, r);
                              return !1;
                          }
                        : function (t, n, l) {
                              var c,
                                  u,
                                  d,
                                  f = [x, a];
                              if (l) {
                                  for (; (t = t[i]); ) if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                              } else
                                  for (; (t = t[i]); )
                                      if (1 === t.nodeType || s)
                                          if (((u = (d = t[_] || (t[_] = {}))[t.uniqueID] || (d[t.uniqueID] = {})), r && r === t.nodeName.toLowerCase())) t = t[i] || t;
                                          else {
                                              if ((c = u[o]) && c[0] === x && c[1] === a) return (f[2] = c[2]);
                                              if (((u[o] = f), (f[2] = e(t, n, l)))) return !0;
                                          }
                              return !1;
                          };
                }
                function we(e) {
                    return e.length > 1
                        ? function (t, n, i) {
                              for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                              return !0;
                          }
                        : e[0];
                }
                function xe(e, t, n, i, r) {
                    for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++) (o = e[a]) && ((n && !n(o, i, r)) || (s.push(o), c && t.push(a)));
                    return s;
                }
                function Ee(e, t, n, i, r, o) {
                    return (
                        i && !i[_] && (i = Ee(i)),
                        r && !r[_] && (r = Ee(r, o)),
                        ce(function (o, s, a, l) {
                            var c,
                                u,
                                d,
                                f = [],
                                h = [],
                                p = s.length,
                                m =
                                    o ||
                                    (function (e, t, n) {
                                        for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n);
                                        return n;
                                    })(t || "*", a.nodeType ? [a] : a, []),
                                g = !e || (!o && t) ? m : xe(m, f, e, a, l),
                                v = n ? (r || (o ? e : p || i) ? [] : s) : g;
                            if ((n && n(g, v, a, l), i)) for (c = xe(v, h), i(c, [], a, l), u = c.length; u--; ) (d = c[u]) && (v[h[u]] = !(g[h[u]] = d));
                            if (o) {
                                if (r || e) {
                                    if (r) {
                                        for (c = [], u = v.length; u--; ) (d = v[u]) && c.push((g[u] = d));
                                        r(null, (v = []), c, l);
                                    }
                                    for (u = v.length; u--; ) (d = v[u]) && (c = r ? I(o, d) : f[u]) > -1 && (o[c] = !(s[c] = d));
                                }
                            } else (v = xe(v === s ? v.splice(p, v.length) : v)), r ? r(null, s, v, l) : N.apply(s, v);
                        })
                    );
                }
                function Se(e) {
                    for (
                        var t,
                            n,
                            r,
                            o = e.length,
                            s = i.relative[e[0].type],
                            a = s || i.relative[" "],
                            l = s ? 1 : 0,
                            u = _e(
                                function (e) {
                                    return e === t;
                                },
                                a,
                                !0
                            ),
                            d = _e(
                                function (e) {
                                    return I(t, e) > -1;
                                },
                                a,
                                !0
                            ),
                            f = [
                                function (e, n, i) {
                                    var r = (!s && (i || n !== c)) || ((t = n).nodeType ? u(e, n, i) : d(e, n, i));
                                    return (t = null), r;
                                },
                            ];
                        l < o;
                        l++
                    )
                        if ((n = i.relative[e[l].type])) f = [_e(we(f), n)];
                        else {
                            if ((n = i.filter[e[l].type].apply(null, e[l].matches))[_]) {
                                for (r = ++l; r < o && !i.relative[e[r].type]; r++);
                                return Ee(l > 1 && we(f), l > 1 && be(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(F, "$1"), n, l < r && Se(e.slice(l, r)), r < o && Se((e = e.slice(r))), r < o && be(e));
                            }
                            f.push(n);
                        }
                    return we(f);
                }
                return (
                    (ye.prototype = i.filters = i.pseudos),
                    (i.setFilters = new ye()),
                    (s = ae.tokenize = function (e, t) {
                        var n,
                            r,
                            o,
                            s,
                            a,
                            l,
                            c,
                            u = T[e + " "];
                        if (u) return t ? 0 : u.slice(0);
                        for (a = e, l = [], c = i.preFilter; a; ) {
                            for (s in ((n && !(r = $.exec(a))) || (r && (a = a.slice(r[0].length) || a), l.push((o = []))),
                            (n = !1),
                            (r = U.exec(a)) && ((n = r.shift()), o.push({ value: n, type: r[0].replace(F, " ") }), (a = a.slice(n.length))),
                            i.filter))
                                !(r = Y[s].exec(a)) || (c[s] && !(r = c[s](r))) || ((n = r.shift()), o.push({ value: n, type: s, matches: r }), (a = a.slice(n.length)));
                            if (!n) break;
                        }
                        return t ? a.length : a ? ae.error(e) : T(e, l).slice(0);
                    }),
                    (a = ae.compile = function (e, t) {
                        var n,
                            r = [],
                            o = [],
                            a = C[e + " "];
                        if (!a) {
                            for (t || (t = s(e)), n = t.length; n--; ) (a = Se(t[n]))[_] ? r.push(a) : o.push(a);
                            (a = C(
                                e,
                                (function (e, t) {
                                    var n = t.length > 0,
                                        r = e.length > 0,
                                        o = function (o, s, a, l, u) {
                                            var d,
                                                p,
                                                g,
                                                v = 0,
                                                y = "0",
                                                b = o && [],
                                                _ = [],
                                                w = c,
                                                E = o || (r && i.find.TAG("*", u)),
                                                S = (x += null == w ? 1 : Math.random() || 0.1),
                                                T = E.length;
                                            for (u && (c = s == h || s || u); y !== T && null != (d = E[y]); y++) {
                                                if (r && d) {
                                                    for (p = 0, s || d.ownerDocument == h || (f(d), (a = !m)); (g = e[p++]); )
                                                        if (g(d, s || h, a)) {
                                                            l.push(d);
                                                            break;
                                                        }
                                                    u && (x = S);
                                                }
                                                n && ((d = !g && d) && v--, o && b.push(d));
                                            }
                                            if (((v += y), n && y !== v)) {
                                                for (p = 0; (g = t[p++]); ) g(b, _, s, a);
                                                if (o) {
                                                    if (v > 0) for (; y--; ) b[y] || _[y] || (_[y] = j.call(l));
                                                    _ = xe(_);
                                                }
                                                N.apply(l, _), u && !o && _.length > 0 && v + t.length > 1 && ae.uniqueSort(l);
                                            }
                                            return u && ((x = S), (c = w)), b;
                                        };
                                    return n ? ce(o) : o;
                                })(o, r)
                            )),
                                (a.selector = e);
                        }
                        return a;
                    }),
                    (l = ae.select = function (e, t, n, r) {
                        var o,
                            l,
                            c,
                            u,
                            d,
                            f = "function" === typeof e && e,
                            h = !r && s((e = f.selector || e));
                        if (((n = n || []), 1 === h.length)) {
                            if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && m && i.relative[l[1].type]) {
                                if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                                f && (t = t.parentNode), (e = e.slice(l.shift().value.length));
                            }
                            for (o = Y.needsContext.test(e) ? 0 : l.length; o-- && ((c = l[o]), !i.relative[(u = c.type)]); )
                                if ((d = i.find[u]) && (r = d(c.matches[0].replace(te, ne), (ee.test(l[0].type) && ve(t.parentNode)) || t))) {
                                    if ((l.splice(o, 1), !(e = r.length && be(l)))) return N.apply(n, r), n;
                                    break;
                                }
                        }
                        return (f || a(e, h))(r, t, !m, n, !t || (ee.test(e) && ve(t.parentNode)) || t), n;
                    }),
                    (n.sortStable = _.split("").sort(A).join("") === _),
                    (n.detectDuplicates = !!d),
                    f(),
                    (n.sortDetached = ue(function (e) {
                        return 1 & e.compareDocumentPosition(h.createElement("fieldset"));
                    })),
                    ue(function (e) {
                        return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
                    }) ||
                        de("type|href|height|width", function (e, t, n) {
                            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                        }),
                    (n.attributes &&
                        ue(function (e) {
                            return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                        })) ||
                        de("value", function (e, t, n) {
                            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                        }),
                    ue(function (e) {
                        return null == e.getAttribute("disabled");
                    }) ||
                        de(M, function (e, t, n) {
                            var i;
                            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
                        }),
                    ae
                );
            })(n);
            (S.find = C), (S.expr = C.selectors), (S.expr[":"] = S.expr.pseudos), (S.uniqueSort = S.unique = C.uniqueSort), (S.text = C.getText), (S.isXMLDoc = C.isXML), (S.contains = C.contains), (S.escapeSelector = C.escape);
            var k = function (e, t, n) {
                    for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                        if (1 === e.nodeType) {
                            if (r && S(e).is(n)) break;
                            i.push(e);
                        }
                    return i;
                },
                A = function (e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n;
                },
                L = S.expr.match.needsContext;
            function D(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
            }
            var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function O(e, t, n) {
                return v(t)
                    ? S.grep(e, function (e, i) {
                          return !!t.call(e, i, e) !== n;
                      })
                    : t.nodeType
                    ? S.grep(e, function (e) {
                          return (e === t) !== n;
                      })
                    : "string" !== typeof t
                    ? S.grep(e, function (e) {
                          return u.call(t, e) > -1 !== n;
                      })
                    : S.filter(t, e, n);
            }
            (S.filter = function (e, t, n) {
                var i = t[0];
                return (
                    n && (e = ":not(" + e + ")"),
                    1 === t.length && 1 === i.nodeType
                        ? S.find.matchesSelector(i, e)
                            ? [i]
                            : []
                        : S.find.matches(
                              e,
                              S.grep(t, function (e) {
                                  return 1 === e.nodeType;
                              })
                          )
                );
            }),
                S.fn.extend({
                    find: function (e) {
                        var t,
                            n,
                            i = this.length,
                            r = this;
                        if ("string" !== typeof e)
                            return this.pushStack(
                                S(e).filter(function () {
                                    for (t = 0; t < i; t++) if (S.contains(r[t], this)) return !0;
                                })
                            );
                        for (n = this.pushStack([]), t = 0; t < i; t++) S.find(e, r[t], n);
                        return i > 1 ? S.uniqueSort(n) : n;
                    },
                    filter: function (e) {
                        return this.pushStack(O(this, e || [], !1));
                    },
                    not: function (e) {
                        return this.pushStack(O(this, e || [], !0));
                    },
                    is: function (e) {
                        return !!O(this, "string" === typeof e && L.test(e) ? S(e) : e || [], !1).length;
                    },
                });
            var N,
                q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            ((S.fn.init = function (e, t, n) {
                var i, r;
                if (!e) return this;
                if (((n = n || N), "string" === typeof e)) {
                    if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : q.exec(e)) || (!i[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (i[1]) {
                        if (((t = t instanceof S ? t[0] : t), S.merge(this, S.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), j.test(i[1]) && S.isPlainObject(t)))
                            for (i in t) v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                        return this;
                    }
                    return (r = b.getElementById(i[2])) && ((this[0] = r), (this.length = 1)), this;
                }
                return e.nodeType ? ((this[0] = e), (this.length = 1), this) : v(e) ? (void 0 !== n.ready ? n.ready(e) : e(S)) : S.makeArray(e, this);
            }).prototype = S.fn),
                (N = S(b));
            var I = /^(?:parents|prev(?:Until|All))/,
                M = { children: !0, contents: !0, next: !0, prev: !0 };
            function P(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType; );
                return e;
            }
            S.fn.extend({
                has: function (e) {
                    var t = S(e, this),
                        n = t.length;
                    return this.filter(function () {
                        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
                    });
                },
                closest: function (e, t) {
                    var n,
                        i = 0,
                        r = this.length,
                        o = [],
                        s = "string" !== typeof e && S(e);
                    if (!L.test(e))
                        for (; i < r; i++)
                            for (n = this[i]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                                    o.push(n);
                                    break;
                                }
                    return this.pushStack(o.length > 1 ? S.uniqueSort(o) : o);
                },
                index: function (e) {
                    return e ? ("string" === typeof e ? u.call(S(e), this[0]) : u.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                },
                add: function (e, t) {
                    return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
                },
                addBack: function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
                },
            }),
                S.each(
                    {
                        parent: function (e) {
                            var t = e.parentNode;
                            return t && 11 !== t.nodeType ? t : null;
                        },
                        parents: function (e) {
                            return k(e, "parentNode");
                        },
                        parentsUntil: function (e, t, n) {
                            return k(e, "parentNode", n);
                        },
                        next: function (e) {
                            return P(e, "nextSibling");
                        },
                        prev: function (e) {
                            return P(e, "previousSibling");
                        },
                        nextAll: function (e) {
                            return k(e, "nextSibling");
                        },
                        prevAll: function (e) {
                            return k(e, "previousSibling");
                        },
                        nextUntil: function (e, t, n) {
                            return k(e, "nextSibling", n);
                        },
                        prevUntil: function (e, t, n) {
                            return k(e, "previousSibling", n);
                        },
                        siblings: function (e) {
                            return A((e.parentNode || {}).firstChild, e);
                        },
                        children: function (e) {
                            return A(e.firstChild);
                        },
                        contents: function (e) {
                            return null != e.contentDocument && s(e.contentDocument) ? e.contentDocument : (D(e, "template") && (e = e.content || e), S.merge([], e.childNodes));
                        },
                    },
                    function (e, t) {
                        S.fn[e] = function (n, i) {
                            var r = S.map(this, t, n);
                            return "Until" !== e.slice(-5) && (i = n), i && "string" === typeof i && (r = S.filter(i, r)), this.length > 1 && (M[e] || S.uniqueSort(r), I.test(e) && r.reverse()), this.pushStack(r);
                        };
                    }
                );
            var H = /[^\x20\t\r\n\f]+/g;
            function R(e) {
                return e;
            }
            function B(e) {
                throw e;
            }
            function W(e, t, n, i) {
                var r;
                try {
                    e && v((r = e.promise)) ? r.call(e).done(t).fail(n) : e && v((r = e.then)) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i));
                } catch (e) {
                    n.apply(void 0, [e]);
                }
            }
            (S.Callbacks = function (e) {
                e =
                    "string" === typeof e
                        ? (function (e) {
                              var t = {};
                              return (
                                  S.each(e.match(H) || [], function (e, n) {
                                      t[n] = !0;
                                  }),
                                  t
                              );
                          })(e)
                        : S.extend({}, e);
                var t,
                    n,
                    i,
                    r,
                    o = [],
                    s = [],
                    a = -1,
                    l = function () {
                        for (r = r || e.once, i = t = !0; s.length; a = -1) for (n = s.shift(); ++a < o.length; ) !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && ((a = o.length), (n = !1));
                        e.memory || (n = !1), (t = !1), r && (o = n ? [] : "");
                    },
                    c = {
                        add: function () {
                            return (
                                o &&
                                    (n && !t && ((a = o.length - 1), s.push(n)),
                                    (function t(n) {
                                        S.each(n, function (n, i) {
                                            v(i) ? (e.unique && c.has(i)) || o.push(i) : i && i.length && "string" !== x(i) && t(i);
                                        });
                                    })(arguments),
                                    n && !t && l()),
                                this
                            );
                        },
                        remove: function () {
                            return (
                                S.each(arguments, function (e, t) {
                                    for (var n; (n = S.inArray(t, o, n)) > -1; ) o.splice(n, 1), n <= a && a--;
                                }),
                                this
                            );
                        },
                        has: function (e) {
                            return e ? S.inArray(e, o) > -1 : o.length > 0;
                        },
                        empty: function () {
                            return o && (o = []), this;
                        },
                        disable: function () {
                            return (r = s = []), (o = n = ""), this;
                        },
                        disabled: function () {
                            return !o;
                        },
                        lock: function () {
                            return (r = s = []), n || t || (o = n = ""), this;
                        },
                        locked: function () {
                            return !!r;
                        },
                        fireWith: function (e, n) {
                            return r || ((n = [e, (n = n || []).slice ? n.slice() : n]), s.push(n), t || l()), this;
                        },
                        fire: function () {
                            return c.fireWith(this, arguments), this;
                        },
                        fired: function () {
                            return !!i;
                        },
                    };
                return c;
            }),
                S.extend({
                    Deferred: function (e) {
                        var t = [
                                ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                                ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                                ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"],
                            ],
                            i = "pending",
                            r = {
                                state: function () {
                                    return i;
                                },
                                always: function () {
                                    return o.done(arguments).fail(arguments), this;
                                },
                                catch: function (e) {
                                    return r.then(null, e);
                                },
                                pipe: function () {
                                    var e = arguments;
                                    return S.Deferred(function (n) {
                                        S.each(t, function (t, i) {
                                            var r = v(e[i[4]]) && e[i[4]];
                                            o[i[1]](function () {
                                                var e = r && r.apply(this, arguments);
                                                e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [e] : arguments);
                                            });
                                        }),
                                            (e = null);
                                    }).promise();
                                },
                                then: function (e, i, r) {
                                    var o = 0;
                                    function s(e, t, i, r) {
                                        return function () {
                                            var a = this,
                                                l = arguments,
                                                c = function () {
                                                    var n, c;
                                                    if (!(e < o)) {
                                                        if ((n = i.apply(a, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                        (c = n && ("object" === typeof n || "function" === typeof n) && n.then),
                                                            v(c)
                                                                ? r
                                                                    ? c.call(n, s(o, t, R, r), s(o, t, B, r))
                                                                    : (o++, c.call(n, s(o, t, R, r), s(o, t, B, r), s(o, t, R, t.notifyWith)))
                                                                : (i !== R && ((a = void 0), (l = [n])), (r || t.resolveWith)(a, l));
                                                    }
                                                },
                                                u = r
                                                    ? c
                                                    : function () {
                                                          try {
                                                              c();
                                                          } catch (n) {
                                                              S.Deferred.exceptionHook && S.Deferred.exceptionHook(n, u.stackTrace), e + 1 >= o && (i !== B && ((a = void 0), (l = [n])), t.rejectWith(a, l));
                                                          }
                                                      };
                                            e ? u() : (S.Deferred.getStackHook && (u.stackTrace = S.Deferred.getStackHook()), n.setTimeout(u));
                                        };
                                    }
                                    return S.Deferred(function (n) {
                                        t[0][3].add(s(0, n, v(r) ? r : R, n.notifyWith)), t[1][3].add(s(0, n, v(e) ? e : R)), t[2][3].add(s(0, n, v(i) ? i : B));
                                    }).promise();
                                },
                                promise: function (e) {
                                    return null != e ? S.extend(e, r) : r;
                                },
                            },
                            o = {};
                        return (
                            S.each(t, function (e, n) {
                                var s = n[2],
                                    a = n[5];
                                (r[n[1]] = s.add),
                                    a &&
                                        s.add(
                                            function () {
                                                i = a;
                                            },
                                            t[3 - e][2].disable,
                                            t[3 - e][3].disable,
                                            t[0][2].lock,
                                            t[0][3].lock
                                        ),
                                    s.add(n[3].fire),
                                    (o[n[0]] = function () {
                                        return o[n[0] + "With"](this === o ? void 0 : this, arguments), this;
                                    }),
                                    (o[n[0] + "With"] = s.fireWith);
                            }),
                            r.promise(o),
                            e && e.call(o, o),
                            o
                        );
                    },
                    when: function (e) {
                        var t = arguments.length,
                            n = t,
                            i = Array(n),
                            r = a.call(arguments),
                            o = S.Deferred(),
                            s = function (e) {
                                return function (n) {
                                    (i[e] = this), (r[e] = arguments.length > 1 ? a.call(arguments) : n), --t || o.resolveWith(i, r);
                                };
                            };
                        if (t <= 1 && (W(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || v(r[n] && r[n].then))) return o.then();
                        for (; n--; ) W(r[n], s(n), o.reject);
                        return o.promise();
                    },
                });
            var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            (S.Deferred.exceptionHook = function (e, t) {
                n.console && n.console.warn && e && F.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
            }),
                (S.readyException = function (e) {
                    n.setTimeout(function () {
                        throw e;
                    });
                });
            var $ = S.Deferred();
            function U() {
                b.removeEventListener("DOMContentLoaded", U), n.removeEventListener("load", U), S.ready();
            }
            (S.fn.ready = function (e) {
                return (
                    $.then(e).catch(function (e) {
                        S.readyException(e);
                    }),
                    this
                );
            }),
                S.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function (e) {
                        (!0 === e ? --S.readyWait : S.isReady) || ((S.isReady = !0), (!0 !== e && --S.readyWait > 0) || $.resolveWith(b, [S]));
                    },
                }),
                (S.ready.then = $.then),
                "complete" === b.readyState || ("loading" !== b.readyState && !b.documentElement.doScroll) ? n.setTimeout(S.ready) : (b.addEventListener("DOMContentLoaded", U), n.addEventListener("load", U));
            var z = function (e, t, n, i, r, o, s) {
                    var a = 0,
                        l = e.length,
                        c = null == n;
                    if ("object" === x(n)) for (a in ((r = !0), n)) z(e, t, a, n[a], !0, o, s);
                    else if (
                        void 0 !== i &&
                        ((r = !0),
                        v(i) || (s = !0),
                        c &&
                            (s
                                ? (t.call(e, i), (t = null))
                                : ((c = t),
                                  (t = function (e, t, n) {
                                      return c.call(S(e), n);
                                  }))),
                        t)
                    )
                        for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
                    return r ? e : c ? t.call(e) : l ? t(e[0], n) : o;
                },
                X = /^-ms-/,
                V = /-([a-z])/g;
            function Y(e, t) {
                return t.toUpperCase();
            }
            function K(e) {
                return e.replace(X, "ms-").replace(V, Y);
            }
            var Q = function (e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
            };
            function G() {
                this.expando = S.expando + G.uid++;
            }
            (G.uid = 1),
                (G.prototype = {
                    cache: function (e) {
                        var t = e[this.expando];
                        return t || ((t = {}), Q(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
                    },
                    set: function (e, t, n) {
                        var i,
                            r = this.cache(e);
                        if ("string" === typeof t) r[K(t)] = n;
                        else for (i in t) r[K(i)] = t[i];
                        return r;
                    },
                    get: function (e, t) {
                        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][K(t)];
                    },
                    access: function (e, t, n) {
                        return void 0 === t || (t && "string" === typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
                    },
                    remove: function (e, t) {
                        var n,
                            i = e[this.expando];
                        if (void 0 !== i) {
                            if (void 0 !== t) {
                                n = (t = Array.isArray(t) ? t.map(K) : (t = K(t)) in i ? [t] : t.match(H) || []).length;
                                for (; n--; ) delete i[t[n]];
                            }
                            (void 0 === t || S.isEmptyObject(i)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                        }
                    },
                    hasData: function (e) {
                        var t = e[this.expando];
                        return void 0 !== t && !S.isEmptyObject(t);
                    },
                });
            var J = new G(),
                Z = new G(),
                ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                te = /[A-Z]/g;
            function ne(e, t, n) {
                var i;
                if (void 0 === n && 1 === e.nodeType)
                    if (((i = "data-" + t.replace(te, "-$&").toLowerCase()), "string" === typeof (n = e.getAttribute(i)))) {
                        try {
                            n = (function (e) {
                                return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e));
                            })(n);
                        } catch (r) {}
                        Z.set(e, t, n);
                    } else n = void 0;
                return n;
            }
            S.extend({
                hasData: function (e) {
                    return Z.hasData(e) || J.hasData(e);
                },
                data: function (e, t, n) {
                    return Z.access(e, t, n);
                },
                removeData: function (e, t) {
                    Z.remove(e, t);
                },
                _data: function (e, t, n) {
                    return J.access(e, t, n);
                },
                _removeData: function (e, t) {
                    J.remove(e, t);
                },
            }),
                S.fn.extend({
                    data: function (e, t) {
                        var n,
                            i,
                            r,
                            o = this[0],
                            s = o && o.attributes;
                        if (void 0 === e) {
                            if (this.length && ((r = Z.get(o)), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                                for (n = s.length; n--; ) s[n] && 0 === (i = s[n].name).indexOf("data-") && ((i = K(i.slice(5))), ne(o, i, r[i]));
                                J.set(o, "hasDataAttrs", !0);
                            }
                            return r;
                        }
                        return "object" === typeof e
                            ? this.each(function () {
                                  Z.set(this, e);
                              })
                            : z(
                                  this,
                                  function (t) {
                                      var n;
                                      if (o && void 0 === t) return void 0 !== (n = Z.get(o, e)) || void 0 !== (n = ne(o, e)) ? n : void 0;
                                      this.each(function () {
                                          Z.set(this, e, t);
                                      });
                                  },
                                  null,
                                  t,
                                  arguments.length > 1,
                                  null,
                                  !0
                              );
                    },
                    removeData: function (e) {
                        return this.each(function () {
                            Z.remove(this, e);
                        });
                    },
                }),
                S.extend({
                    queue: function (e, t, n) {
                        var i;
                        if (e) return (t = (t || "fx") + "queue"), (i = J.get(e, t)), n && (!i || Array.isArray(n) ? (i = J.access(e, t, S.makeArray(n))) : i.push(n)), i || [];
                    },
                    dequeue: function (e, t) {
                        t = t || "fx";
                        var n = S.queue(e, t),
                            i = n.length,
                            r = n.shift(),
                            o = S._queueHooks(e, t);
                        "inprogress" === r && ((r = n.shift()), i--),
                            r &&
                                ("fx" === t && n.unshift("inprogress"),
                                delete o.stop,
                                r.call(
                                    e,
                                    function () {
                                        S.dequeue(e, t);
                                    },
                                    o
                                )),
                            !i && o && o.empty.fire();
                    },
                    _queueHooks: function (e, t) {
                        var n = t + "queueHooks";
                        return (
                            J.get(e, n) ||
                            J.access(e, n, {
                                empty: S.Callbacks("once memory").add(function () {
                                    J.remove(e, [t + "queue", n]);
                                }),
                            })
                        );
                    },
                }),
                S.fn.extend({
                    queue: function (e, t) {
                        var n = 2;
                        return (
                            "string" !== typeof e && ((t = e), (e = "fx"), n--),
                            arguments.length < n
                                ? S.queue(this[0], e)
                                : void 0 === t
                                ? this
                                : this.each(function () {
                                      var n = S.queue(this, e, t);
                                      S._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && S.dequeue(this, e);
                                  })
                        );
                    },
                    dequeue: function (e) {
                        return this.each(function () {
                            S.dequeue(this, e);
                        });
                    },
                    clearQueue: function (e) {
                        return this.queue(e || "fx", []);
                    },
                    promise: function (e, t) {
                        var n,
                            i = 1,
                            r = S.Deferred(),
                            o = this,
                            s = this.length,
                            a = function () {
                                --i || r.resolveWith(o, [o]);
                            };
                        for ("string" !== typeof e && ((t = e), (e = void 0)), e = e || "fx"; s--; ) (n = J.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                        return a(), r.promise(t);
                    },
                });
            var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                re = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
                oe = ["Top", "Right", "Bottom", "Left"],
                se = b.documentElement,
                ae = function (e) {
                    return S.contains(e.ownerDocument, e);
                },
                le = { composed: !0 };
            se.getRootNode &&
                (ae = function (e) {
                    return S.contains(e.ownerDocument, e) || e.getRootNode(le) === e.ownerDocument;
                });
            var ce = function (e, t) {
                return "none" === (e = t || e).style.display || ("" === e.style.display && ae(e) && "none" === S.css(e, "display"));
            };
            function ue(e, t, n, i) {
                var r,
                    o,
                    s = 20,
                    a = i
                        ? function () {
                              return i.cur();
                          }
                        : function () {
                              return S.css(e, t, "");
                          },
                    l = a(),
                    c = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
                    u = e.nodeType && (S.cssNumber[t] || ("px" !== c && +l)) && re.exec(S.css(e, t));
                if (u && u[3] !== c) {
                    for (l /= 2, c = c || u[3], u = +l || 1; s--; ) S.style(e, t, u + c), (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0), (u /= o);
                    (u *= 2), S.style(e, t, u + c), (n = n || []);
                }
                return n && ((u = +u || +l || 0), (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]), i && ((i.unit = c), (i.start = u), (i.end = r))), r;
            }
            var de = {};
            function fe(e) {
                var t,
                    n = e.ownerDocument,
                    i = e.nodeName,
                    r = de[i];
                return r || ((t = n.body.appendChild(n.createElement(i))), (r = S.css(t, "display")), t.parentNode.removeChild(t), "none" === r && (r = "block"), (de[i] = r), r);
            }
            function he(e, t) {
                for (var n, i, r = [], o = 0, s = e.length; o < s; o++)
                    (i = e[o]).style &&
                        ((n = i.style.display),
                        t ? ("none" === n && ((r[o] = J.get(i, "display") || null), r[o] || (i.style.display = "")), "" === i.style.display && ce(i) && (r[o] = fe(i))) : "none" !== n && ((r[o] = "none"), J.set(i, "display", n)));
                for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
                return e;
            }
            S.fn.extend({
                show: function () {
                    return he(this, !0);
                },
                hide: function () {
                    return he(this);
                },
                toggle: function (e) {
                    return "boolean" === typeof e
                        ? e
                            ? this.show()
                            : this.hide()
                        : this.each(function () {
                              ce(this) ? S(this).show() : S(this).hide();
                          });
                },
            });
            var pe,
                me,
                ge = /^(?:checkbox|radio)$/i,
                ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                ye = /^$|^module$|\/(?:java|ecma)script/i;
            (pe = b.createDocumentFragment().appendChild(b.createElement("div"))),
                (me = b.createElement("input")).setAttribute("type", "radio"),
                me.setAttribute("checked", "checked"),
                me.setAttribute("name", "t"),
                pe.appendChild(me),
                (g.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked),
                (pe.innerHTML = "<textarea>x</textarea>"),
                (g.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue),
                (pe.innerHTML = "<option></option>"),
                (g.option = !!pe.lastChild);
            var be = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
            function _e(e, t) {
                var n;
                return (
                    (n = "undefined" !== typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" !== typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && D(e, t)) ? S.merge([e], n) : n
                );
            }
            function we(e, t) {
                for (var n = 0, i = e.length; n < i; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
            }
            (be.tbody = be.tfoot = be.colgroup = be.caption = be.thead), (be.th = be.td), g.option || (be.optgroup = be.option = [1, "<select multiple='multiple'>", "</select>"]);
            var xe = /<|&#?\w+;/;
            function Ee(e, t, n, i, r) {
                for (var o, s, a, l, c, u, d = t.createDocumentFragment(), f = [], h = 0, p = e.length; h < p; h++)
                    if ((o = e[h]) || 0 === o)
                        if ("object" === x(o)) S.merge(f, o.nodeType ? [o] : o);
                        else if (xe.test(o)) {
                            for (s = s || d.appendChild(t.createElement("div")), a = (ve.exec(o) || ["", ""])[1].toLowerCase(), l = be[a] || be._default, s.innerHTML = l[1] + S.htmlPrefilter(o) + l[2], u = l[0]; u--; ) s = s.lastChild;
                            S.merge(f, s.childNodes), ((s = d.firstChild).textContent = "");
                        } else f.push(t.createTextNode(o));
                for (d.textContent = "", h = 0; (o = f[h++]); )
                    if (i && S.inArray(o, i) > -1) r && r.push(o);
                    else if (((c = ae(o)), (s = _e(d.appendChild(o), "script")), c && we(s), n)) for (u = 0; (o = s[u++]); ) ye.test(o.type || "") && n.push(o);
                return d;
            }
            var Se = /^([^.]*)(?:\.(.+)|)/;
            function Te() {
                return !0;
            }
            function Ce() {
                return !1;
            }
            function ke(e, t) {
                return (
                    (e ===
                        (function () {
                            try {
                                return b.activeElement;
                            } catch (e) {}
                        })()) ===
                    ("focus" === t)
                );
            }
            function Ae(e, t, n, i, r, o) {
                var s, a;
                if ("object" === typeof t) {
                    for (a in ("string" !== typeof n && ((i = i || n), (n = void 0)), t)) Ae(e, a, n, i, t[a], o);
                    return e;
                }
                if ((null == i && null == r ? ((r = n), (i = n = void 0)) : null == r && ("string" === typeof n ? ((r = i), (i = void 0)) : ((r = i), (i = n), (n = void 0))), !1 === r)) r = Ce;
                else if (!r) return e;
                return (
                    1 === o &&
                        ((s = r),
                        (r = function (e) {
                            return S().off(e), s.apply(this, arguments);
                        }),
                        (r.guid = s.guid || (s.guid = S.guid++))),
                    e.each(function () {
                        S.event.add(this, t, r, i, n);
                    })
                );
            }
            function Le(e, t, n) {
                n
                    ? (J.set(e, t, !1),
                      S.event.add(e, t, {
                          namespace: !1,
                          handler: function (e) {
                              var i,
                                  r,
                                  o = J.get(this, t);
                              if (1 & e.isTrigger && this[t]) {
                                  if (o.length) (S.event.special[t] || {}).delegateType && e.stopPropagation();
                                  else if (((o = a.call(arguments)), J.set(this, t, o), (i = n(this, t)), this[t](), o !== (r = J.get(this, t)) || i ? J.set(this, t, !1) : (r = {}), o !== r))
                                      return e.stopImmediatePropagation(), e.preventDefault(), r && r.value;
                              } else o.length && (J.set(this, t, { value: S.event.trigger(S.extend(o[0], S.Event.prototype), o.slice(1), this) }), e.stopImmediatePropagation());
                          },
                      }))
                    : void 0 === J.get(e, t) && S.event.add(e, t, Te);
            }
            (S.event = {
                global: {},
                add: function (e, t, n, i, r) {
                    var o,
                        s,
                        a,
                        l,
                        c,
                        u,
                        d,
                        f,
                        h,
                        p,
                        m,
                        g = J.get(e);
                    if (Q(e))
                        for (
                            n.handler && ((n = (o = n).handler), (r = o.selector)),
                                r && S.find.matchesSelector(se, r),
                                n.guid || (n.guid = S.guid++),
                                (l = g.events) || (l = g.events = Object.create(null)),
                                (s = g.handle) ||
                                    (s = g.handle = function (t) {
                                        return "undefined" !== typeof S && S.event.triggered !== t.type ? S.event.dispatch.apply(e, arguments) : void 0;
                                    }),
                                c = (t = (t || "").match(H) || [""]).length;
                            c--;

                        )
                            (h = m = (a = Se.exec(t[c]) || [])[1]),
                                (p = (a[2] || "").split(".").sort()),
                                h &&
                                    ((d = S.event.special[h] || {}),
                                    (h = (r ? d.delegateType : d.bindType) || h),
                                    (d = S.event.special[h] || {}),
                                    (u = S.extend({ type: h, origType: m, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && S.expr.match.needsContext.test(r), namespace: p.join(".") }, o)),
                                    (f = l[h]) || (((f = l[h] = []).delegateCount = 0), (d.setup && !1 !== d.setup.call(e, i, p, s)) || (e.addEventListener && e.addEventListener(h, s))),
                                    d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)),
                                    r ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                                    (S.event.global[h] = !0));
                },
                remove: function (e, t, n, i, r) {
                    var o,
                        s,
                        a,
                        l,
                        c,
                        u,
                        d,
                        f,
                        h,
                        p,
                        m,
                        g = J.hasData(e) && J.get(e);
                    if (g && (l = g.events)) {
                        for (c = (t = (t || "").match(H) || [""]).length; c--; )
                            if (((h = m = (a = Se.exec(t[c]) || [])[1]), (p = (a[2] || "").split(".").sort()), h)) {
                                for (d = S.event.special[h] || {}, f = l[(h = (i ? d.delegateType : d.bindType) || h)] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length; o--; )
                                    (u = f[o]),
                                        (!r && m !== u.origType) ||
                                            (n && n.guid !== u.guid) ||
                                            (a && !a.test(u.namespace)) ||
                                            (i && i !== u.selector && ("**" !== i || !u.selector)) ||
                                            (f.splice(o, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
                                s && !f.length && ((d.teardown && !1 !== d.teardown.call(e, p, g.handle)) || S.removeEvent(e, h, g.handle), delete l[h]);
                            } else for (h in l) S.event.remove(e, h + t[c], n, i, !0);
                        S.isEmptyObject(l) && J.remove(e, "handle events");
                    }
                },
                dispatch: function (e) {
                    var t,
                        n,
                        i,
                        r,
                        o,
                        s,
                        a = new Array(arguments.length),
                        l = S.event.fix(e),
                        c = (J.get(this, "events") || Object.create(null))[l.type] || [],
                        u = S.event.special[l.type] || {};
                    for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
                    if (((l.delegateTarget = this), !u.preDispatch || !1 !== u.preDispatch.call(this, l))) {
                        for (s = S.event.handlers.call(this, l, c), t = 0; (r = s[t++]) && !l.isPropagationStopped(); )
                            for (l.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !l.isImmediatePropagationStopped(); )
                                (l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace)) ||
                                    ((l.handleObj = o), (l.data = o.data), void 0 !== (i = ((S.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, l), l.result;
                    }
                },
                handlers: function (e, t) {
                    var n,
                        i,
                        r,
                        o,
                        s,
                        a = [],
                        l = t.delegateCount,
                        c = e.target;
                    if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                        for (; c !== this; c = c.parentNode || this)
                            if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                                for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[(r = (i = t[n]).selector + " ")] && (s[r] = i.needsContext ? S(r, this).index(c) > -1 : S.find(r, this, null, [c]).length), s[r] && o.push(i);
                                o.length && a.push({ elem: c, handlers: o });
                            }
                    return (c = this), l < t.length && a.push({ elem: c, handlers: t.slice(l) }), a;
                },
                addProp: function (e, t) {
                    Object.defineProperty(S.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: v(t)
                            ? function () {
                                  if (this.originalEvent) return t(this.originalEvent);
                              }
                            : function () {
                                  if (this.originalEvent) return this.originalEvent[e];
                              },
                        set: function (t) {
                            Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                        },
                    });
                },
                fix: function (e) {
                    return e[S.expando] ? e : new S.Event(e);
                },
                special: {
                    load: { noBubble: !0 },
                    click: {
                        setup: function (e) {
                            var t = this || e;
                            return ge.test(t.type) && t.click && D(t, "input") && Le(t, "click", Te), !1;
                        },
                        trigger: function (e) {
                            var t = this || e;
                            return ge.test(t.type) && t.click && D(t, "input") && Le(t, "click"), !0;
                        },
                        _default: function (e) {
                            var t = e.target;
                            return (ge.test(t.type) && t.click && D(t, "input") && J.get(t, "click")) || D(t, "a");
                        },
                    },
                    beforeunload: {
                        postDispatch: function (e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                        },
                    },
                },
            }),
                (S.removeEvent = function (e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n);
                }),
                (S.Event = function (e, t) {
                    if (!(this instanceof S.Event)) return new S.Event(e, t);
                    e && e.type
                        ? ((this.originalEvent = e),
                          (this.type = e.type),
                          (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? Te : Ce),
                          (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                          (this.currentTarget = e.currentTarget),
                          (this.relatedTarget = e.relatedTarget))
                        : (this.type = e),
                        t && S.extend(this, t),
                        (this.timeStamp = (e && e.timeStamp) || Date.now()),
                        (this[S.expando] = !0);
                }),
                (S.Event.prototype = {
                    constructor: S.Event,
                    isDefaultPrevented: Ce,
                    isPropagationStopped: Ce,
                    isImmediatePropagationStopped: Ce,
                    isSimulated: !1,
                    preventDefault: function () {
                        var e = this.originalEvent;
                        (this.isDefaultPrevented = Te), e && !this.isSimulated && e.preventDefault();
                    },
                    stopPropagation: function () {
                        var e = this.originalEvent;
                        (this.isPropagationStopped = Te), e && !this.isSimulated && e.stopPropagation();
                    },
                    stopImmediatePropagation: function () {
                        var e = this.originalEvent;
                        (this.isImmediatePropagationStopped = Te), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
                    },
                }),
                S.each(
                    {
                        altKey: !0,
                        bubbles: !0,
                        cancelable: !0,
                        changedTouches: !0,
                        ctrlKey: !0,
                        detail: !0,
                        eventPhase: !0,
                        metaKey: !0,
                        pageX: !0,
                        pageY: !0,
                        shiftKey: !0,
                        view: !0,
                        char: !0,
                        code: !0,
                        charCode: !0,
                        key: !0,
                        keyCode: !0,
                        button: !0,
                        buttons: !0,
                        clientX: !0,
                        clientY: !0,
                        offsetX: !0,
                        offsetY: !0,
                        pointerId: !0,
                        pointerType: !0,
                        screenX: !0,
                        screenY: !0,
                        targetTouches: !0,
                        toElement: !0,
                        touches: !0,
                        which: !0,
                    },
                    S.event.addProp
                ),
                S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                    S.event.special[e] = {
                        setup: function () {
                            return Le(this, e, ke), !1;
                        },
                        trigger: function () {
                            return Le(this, e), !0;
                        },
                        _default: function (t) {
                            return J.get(t.target, e);
                        },
                        delegateType: t,
                    };
                }),
                S.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
                    S.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function (e) {
                            var n,
                                i = this,
                                r = e.relatedTarget,
                                o = e.handleObj;
                            return (r && (r === i || S.contains(i, r))) || ((e.type = o.origType), (n = o.handler.apply(this, arguments)), (e.type = t)), n;
                        },
                    };
                }),
                S.fn.extend({
                    on: function (e, t, n, i) {
                        return Ae(this, e, t, n, i);
                    },
                    one: function (e, t, n, i) {
                        return Ae(this, e, t, n, i, 1);
                    },
                    off: function (e, t, n) {
                        var i, r;
                        if (e && e.preventDefault && e.handleObj) return (i = e.handleObj), S(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                        if ("object" === typeof e) {
                            for (r in e) this.off(r, t, e[r]);
                            return this;
                        }
                        return (
                            (!1 !== t && "function" !== typeof t) || ((n = t), (t = void 0)),
                            !1 === n && (n = Ce),
                            this.each(function () {
                                S.event.remove(this, e, n, t);
                            })
                        );
                    },
                });
            var De = /<script|<style|<link/i,
                je = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Oe = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
            function Ne(e, t) {
                return (D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0]) || e;
            }
            function qe(e) {
                return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
            }
            function Ie(e) {
                return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
            }
            function Me(e, t) {
                var n, i, r, o, s, a;
                if (1 === t.nodeType) {
                    if (J.hasData(e) && (a = J.get(e).events)) for (r in (J.remove(t, "handle events"), a)) for (n = 0, i = a[r].length; n < i; n++) S.event.add(t, r, a[r][n]);
                    Z.hasData(e) && ((o = Z.access(e)), (s = S.extend({}, o)), Z.set(t, s));
                }
            }
            function Pe(e, t) {
                var n = t.nodeName.toLowerCase();
                "input" === n && ge.test(e.type) ? (t.checked = e.checked) : ("input" !== n && "textarea" !== n) || (t.defaultValue = e.defaultValue);
            }
            function He(e, t, n, i) {
                t = l(t);
                var r,
                    o,
                    s,
                    a,
                    c,
                    u,
                    d = 0,
                    f = e.length,
                    h = f - 1,
                    p = t[0],
                    m = v(p);
                if (m || (f > 1 && "string" === typeof p && !g.checkClone && je.test(p)))
                    return e.each(function (r) {
                        var o = e.eq(r);
                        m && (t[0] = p.call(this, r, o.html())), He(o, t, n, i);
                    });
                if (f && ((o = (r = Ee(t, e[0].ownerDocument, !1, e, i)).firstChild), 1 === r.childNodes.length && (r = o), o || i)) {
                    for (a = (s = S.map(_e(r, "script"), qe)).length; d < f; d++) (c = r), d !== h && ((c = S.clone(c, !0, !0)), a && S.merge(s, _e(c, "script"))), n.call(e[d], c, d);
                    if (a)
                        for (u = s[s.length - 1].ownerDocument, S.map(s, Ie), d = 0; d < a; d++)
                            (c = s[d]),
                                ye.test(c.type || "") &&
                                    !J.access(c, "globalEval") &&
                                    S.contains(u, c) &&
                                    (c.src && "module" !== (c.type || "").toLowerCase() ? S._evalUrl && !c.noModule && S._evalUrl(c.src, { nonce: c.nonce || c.getAttribute("nonce") }, u) : w(c.textContent.replace(Oe, ""), c, u));
                }
                return e;
            }
            function Re(e, t, n) {
                for (var i, r = t ? S.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || S.cleanData(_e(i)), i.parentNode && (n && ae(i) && we(_e(i, "script")), i.parentNode.removeChild(i));
                return e;
            }
            S.extend({
                htmlPrefilter: function (e) {
                    return e;
                },
                clone: function (e, t, n) {
                    var i,
                        r,
                        o,
                        s,
                        a = e.cloneNode(!0),
                        l = ae(e);
                    if (!g.noCloneChecked && (1 === e.nodeType || 11 === e.nodeType) && !S.isXMLDoc(e)) for (s = _e(a), i = 0, r = (o = _e(e)).length; i < r; i++) Pe(o[i], s[i]);
                    if (t)
                        if (n) for (o = o || _e(e), s = s || _e(a), i = 0, r = o.length; i < r; i++) Me(o[i], s[i]);
                        else Me(e, a);
                    return (s = _e(a, "script")).length > 0 && we(s, !l && _e(e, "script")), a;
                },
                cleanData: function (e) {
                    for (var t, n, i, r = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                        if (Q(n)) {
                            if ((t = n[J.expando])) {
                                if (t.events) for (i in t.events) r[i] ? S.event.remove(n, i) : S.removeEvent(n, i, t.handle);
                                n[J.expando] = void 0;
                            }
                            n[Z.expando] && (n[Z.expando] = void 0);
                        }
                },
            }),
                S.fn.extend({
                    detach: function (e) {
                        return Re(this, e, !0);
                    },
                    remove: function (e) {
                        return Re(this, e);
                    },
                    text: function (e) {
                        return z(
                            this,
                            function (e) {
                                return void 0 === e
                                    ? S.text(this)
                                    : this.empty().each(function () {
                                          (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                                      });
                            },
                            null,
                            e,
                            arguments.length
                        );
                    },
                    append: function () {
                        return He(this, arguments, function (e) {
                            (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Ne(this, e).appendChild(e);
                        });
                    },
                    prepend: function () {
                        return He(this, arguments, function (e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = Ne(this, e);
                                t.insertBefore(e, t.firstChild);
                            }
                        });
                    },
                    before: function () {
                        return He(this, arguments, function (e) {
                            this.parentNode && this.parentNode.insertBefore(e, this);
                        });
                    },
                    after: function () {
                        return He(this, arguments, function (e) {
                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                        });
                    },
                    empty: function () {
                        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(_e(e, !1)), (e.textContent = ""));
                        return this;
                    },
                    clone: function (e, t) {
                        return (
                            (e = null != e && e),
                            (t = null == t ? e : t),
                            this.map(function () {
                                return S.clone(this, e, t);
                            })
                        );
                    },
                    html: function (e) {
                        return z(
                            this,
                            function (e) {
                                var t = this[0] || {},
                                    n = 0,
                                    i = this.length;
                                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                                if ("string" === typeof e && !De.test(e) && !be[(ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                                    e = S.htmlPrefilter(e);
                                    try {
                                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(_e(t, !1)), (t.innerHTML = e));
                                        t = 0;
                                    } catch (r) {}
                                }
                                t && this.empty().append(e);
                            },
                            null,
                            e,
                            arguments.length
                        );
                    },
                    replaceWith: function () {
                        var e = [];
                        return He(
                            this,
                            arguments,
                            function (t) {
                                var n = this.parentNode;
                                S.inArray(this, e) < 0 && (S.cleanData(_e(this)), n && n.replaceChild(t, this));
                            },
                            e
                        );
                    },
                }),
                S.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
                    S.fn[e] = function (e) {
                        for (var n, i = [], r = S(e), o = r.length - 1, s = 0; s <= o; s++) (n = s === o ? this : this.clone(!0)), S(r[s])[t](n), c.apply(i, n.get());
                        return this.pushStack(i);
                    };
                });
            var Be = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
                We = /^--/,
                Fe = function (e) {
                    var t = e.ownerDocument.defaultView;
                    return (t && t.opener) || (t = n), t.getComputedStyle(e);
                },
                $e = function (e, t, n) {
                    var i,
                        r,
                        o = {};
                    for (r in t) (o[r] = e.style[r]), (e.style[r] = t[r]);
                    for (r in ((i = n.call(e)), t)) e.style[r] = o[r];
                    return i;
                },
                Ue = new RegExp(oe.join("|"), "i"),
                ze = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g");
            function Xe(e, t, n) {
                var i,
                    r,
                    o,
                    s,
                    a = We.test(t),
                    l = e.style;
                return (
                    (n = n || Fe(e)) &&
                        ((s = n.getPropertyValue(t) || n[t]),
                        a && (s = s.replace(ze, "$1")),
                        "" !== s || ae(e) || (s = S.style(e, t)),
                        !g.pixelBoxStyles() && Be.test(s) && Ue.test(t) && ((i = l.width), (r = l.minWidth), (o = l.maxWidth), (l.minWidth = l.maxWidth = l.width = s), (s = n.width), (l.width = i), (l.minWidth = r), (l.maxWidth = o))),
                    void 0 !== s ? s + "" : s
                );
            }
            function Ve(e, t) {
                return {
                    get: function () {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get;
                    },
                };
            }
            !(function () {
                function e() {
                    if (u) {
                        (c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                            (u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                            se.appendChild(c).appendChild(u);
                        var e = n.getComputedStyle(u);
                        (i = "1%" !== e.top),
                            (l = 12 === t(e.marginLeft)),
                            (u.style.right = "60%"),
                            (s = 36 === t(e.right)),
                            (r = 36 === t(e.width)),
                            (u.style.position = "absolute"),
                            (o = 12 === t(u.offsetWidth / 3)),
                            se.removeChild(c),
                            (u = null);
                    }
                }
                function t(e) {
                    return Math.round(parseFloat(e));
                }
                var i,
                    r,
                    o,
                    s,
                    a,
                    l,
                    c = b.createElement("div"),
                    u = b.createElement("div");
                u.style &&
                    ((u.style.backgroundClip = "content-box"),
                    (u.cloneNode(!0).style.backgroundClip = ""),
                    (g.clearCloneStyle = "content-box" === u.style.backgroundClip),
                    S.extend(g, {
                        boxSizingReliable: function () {
                            return e(), r;
                        },
                        pixelBoxStyles: function () {
                            return e(), s;
                        },
                        pixelPosition: function () {
                            return e(), i;
                        },
                        reliableMarginLeft: function () {
                            return e(), l;
                        },
                        scrollboxSize: function () {
                            return e(), o;
                        },
                        reliableTrDimensions: function () {
                            var e, t, i, r;
                            return (
                                null == a &&
                                    ((e = b.createElement("table")),
                                    (t = b.createElement("tr")),
                                    (i = b.createElement("div")),
                                    (e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate"),
                                    (t.style.cssText = "border:1px solid"),
                                    (t.style.height = "1px"),
                                    (i.style.height = "9px"),
                                    (i.style.display = "block"),
                                    se.appendChild(e).appendChild(t).appendChild(i),
                                    (r = n.getComputedStyle(t)),
                                    (a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight),
                                    se.removeChild(e)),
                                a
                            );
                        },
                    }));
            })();
            var Ye = ["Webkit", "Moz", "ms"],
                Ke = b.createElement("div").style,
                Qe = {};
            function Ge(e) {
                var t = S.cssProps[e] || Qe[e];
                return (
                    t ||
                    (e in Ke
                        ? e
                        : (Qe[e] =
                              (function (e) {
                                  for (var t = e[0].toUpperCase() + e.slice(1), n = Ye.length; n--; ) if ((e = Ye[n] + t) in Ke) return e;
                              })(e) || e))
                );
            }
            var Je = /^(none|table(?!-c[ea]).+)/,
                Ze = { position: "absolute", visibility: "hidden", display: "block" },
                et = { letterSpacing: "0", fontWeight: "400" };
            function tt(e, t, n) {
                var i = re.exec(t);
                return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
            }
            function nt(e, t, n, i, r, o) {
                var s = "width" === t ? 1 : 0,
                    a = 0,
                    l = 0;
                if (n === (i ? "border" : "content")) return 0;
                for (; s < 4; s += 2)
                    "margin" === n && (l += S.css(e, n + oe[s], !0, r)),
                        i
                            ? ("content" === n && (l -= S.css(e, "padding" + oe[s], !0, r)), "margin" !== n && (l -= S.css(e, "border" + oe[s] + "Width", !0, r)))
                            : ((l += S.css(e, "padding" + oe[s], !0, r)), "padding" !== n ? (l += S.css(e, "border" + oe[s] + "Width", !0, r)) : (a += S.css(e, "border" + oe[s] + "Width", !0, r)));
                return !i && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - 0.5)) || 0), l;
            }
            function it(e, t, n) {
                var i = Fe(e),
                    r = (!g.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, i),
                    o = r,
                    s = Xe(e, t, i),
                    a = "offset" + t[0].toUpperCase() + t.slice(1);
                if (Be.test(s)) {
                    if (!n) return s;
                    s = "auto";
                }
                return (
                    ((!g.boxSizingReliable() && r) || (!g.reliableTrDimensions() && D(e, "tr")) || "auto" === s || (!parseFloat(s) && "inline" === S.css(e, "display", !1, i))) &&
                        e.getClientRects().length &&
                        ((r = "border-box" === S.css(e, "boxSizing", !1, i)), (o = a in e) && (s = e[a])),
                    (s = parseFloat(s) || 0) + nt(e, t, n || (r ? "border" : "content"), o, i, s) + "px"
                );
            }
            function rt(e, t, n, i, r) {
                return new rt.prototype.init(e, t, n, i, r);
            }
            S.extend({
                cssHooks: {
                    opacity: {
                        get: function (e, t) {
                            if (t) {
                                var n = Xe(e, "opacity");
                                return "" === n ? "1" : n;
                            }
                        },
                    },
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0,
                },
                cssProps: {},
                style: function (e, t, n, i) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var r,
                            o,
                            s,
                            a = K(t),
                            l = We.test(t),
                            c = e.style;
                        if ((l || (t = Ge(a)), (s = S.cssHooks[t] || S.cssHooks[a]), void 0 === n)) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t];
                        "string" === (o = typeof n) && (r = re.exec(n)) && r[1] && ((n = ue(e, t, r)), (o = "number")),
                            null != n &&
                                n === n &&
                                ("number" !== o || l || (n += (r && r[3]) || (S.cssNumber[a] ? "" : "px")),
                                g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                                (s && "set" in s && void 0 === (n = s.set(e, n, i))) || (l ? c.setProperty(t, n) : (c[t] = n)));
                    }
                },
                css: function (e, t, n, i) {
                    var r,
                        o,
                        s,
                        a = K(t);
                    return (
                        We.test(t) || (t = Ge(a)),
                        (s = S.cssHooks[t] || S.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)),
                        void 0 === r && (r = Xe(e, t, i)),
                        "normal" === r && t in et && (r = et[t]),
                        "" === n || n ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r) : r
                    );
                },
            }),
                S.each(["height", "width"], function (e, t) {
                    S.cssHooks[t] = {
                        get: function (e, n, i) {
                            if (n)
                                return !Je.test(S.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                                    ? it(e, t, i)
                                    : $e(e, Ze, function () {
                                          return it(e, t, i);
                                      });
                        },
                        set: function (e, n, i) {
                            var r,
                                o = Fe(e),
                                s = !g.scrollboxSize() && "absolute" === o.position,
                                a = (s || i) && "border-box" === S.css(e, "boxSizing", !1, o),
                                l = i ? nt(e, t, i, a, o) : 0;
                            return (
                                a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - nt(e, t, "border", !1, o) - 0.5)),
                                l && (r = re.exec(n)) && "px" !== (r[3] || "px") && ((e.style[t] = n), (n = S.css(e, t))),
                                tt(0, n, l)
                            );
                        },
                    };
                }),
                (S.cssHooks.marginLeft = Ve(g.reliableMarginLeft, function (e, t) {
                    if (t)
                        return (
                            (parseFloat(Xe(e, "marginLeft")) ||
                                e.getBoundingClientRect().left -
                                    $e(e, { marginLeft: 0 }, function () {
                                        return e.getBoundingClientRect().left;
                                    })) + "px"
                        );
                })),
                S.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
                    (S.cssHooks[e + t] = {
                        expand: function (n) {
                            for (var i = 0, r = {}, o = "string" === typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + oe[i] + t] = o[i] || o[i - 2] || o[0];
                            return r;
                        },
                    }),
                        "margin" !== e && (S.cssHooks[e + t].set = tt);
                }),
                S.fn.extend({
                    css: function (e, t) {
                        return z(
                            this,
                            function (e, t, n) {
                                var i,
                                    r,
                                    o = {},
                                    s = 0;
                                if (Array.isArray(t)) {
                                    for (i = Fe(e), r = t.length; s < r; s++) o[t[s]] = S.css(e, t[s], !1, i);
                                    return o;
                                }
                                return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
                            },
                            e,
                            t,
                            arguments.length > 1
                        );
                    },
                }),
                (S.Tween = rt),
                (rt.prototype = {
                    constructor: rt,
                    init: function (e, t, n, i, r, o) {
                        (this.elem = e), (this.prop = n), (this.easing = r || S.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = i), (this.unit = o || (S.cssNumber[n] ? "" : "px"));
                    },
                    cur: function () {
                        var e = rt.propHooks[this.prop];
                        return e && e.get ? e.get(this) : rt.propHooks._default.get(this);
                    },
                    run: function (e) {
                        var t,
                            n = rt.propHooks[this.prop];
                        return (
                            this.options.duration ? (this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                            (this.now = (this.end - this.start) * t + this.start),
                            this.options.step && this.options.step.call(this.elem, this.now, this),
                            n && n.set ? n.set(this) : rt.propHooks._default.set(this),
                            this
                        );
                    },
                }),
                (rt.prototype.init.prototype = rt.prototype),
                (rt.propHooks = {
                    _default: {
                        get: function (e) {
                            var t;
                            return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                        },
                        set: function (e) {
                            S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!S.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)]) ? (e.elem[e.prop] = e.now) : S.style(e.elem, e.prop, e.now + e.unit);
                        },
                    },
                }),
                (rt.propHooks.scrollTop = rt.propHooks.scrollLeft = {
                    set: function (e) {
                        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                    },
                }),
                (S.easing = {
                    linear: function (e) {
                        return e;
                    },
                    swing: function (e) {
                        return 0.5 - Math.cos(e * Math.PI) / 2;
                    },
                    _default: "swing",
                }),
                (S.fx = rt.prototype.init),
                (S.fx.step = {});
            var ot,
                st,
                at = /^(?:toggle|show|hide)$/,
                lt = /queueHooks$/;
            function ct() {
                st && (!1 === b.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ct) : n.setTimeout(ct, S.fx.interval), S.fx.tick());
            }
            function ut() {
                return (
                    n.setTimeout(function () {
                        ot = void 0;
                    }),
                    (ot = Date.now())
                );
            }
            function dt(e, t) {
                var n,
                    i = 0,
                    r = { height: e };
                for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = oe[i])] = r["padding" + n] = e;
                return t && (r.opacity = r.width = e), r;
            }
            function ft(e, t, n) {
                for (var i, r = (ht.tweeners[t] || []).concat(ht.tweeners["*"]), o = 0, s = r.length; o < s; o++) if ((i = r[o].call(n, t, e))) return i;
            }
            function ht(e, t, n) {
                var i,
                    r,
                    o = 0,
                    s = ht.prefilters.length,
                    a = S.Deferred().always(function () {
                        delete l.elem;
                    }),
                    l = function () {
                        if (r) return !1;
                        for (var t = ot || ut(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) c.tweens[o].run(i);
                        return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1);
                    },
                    c = a.promise({
                        elem: e,
                        props: S.extend({}, t),
                        opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, n),
                        originalProperties: t,
                        originalOptions: n,
                        startTime: ot || ut(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function (t, n) {
                            var i = S.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                            return c.tweens.push(i), i;
                        },
                        stop: function (t) {
                            var n = 0,
                                i = t ? c.tweens.length : 0;
                            if (r) return this;
                            for (r = !0; n < i; n++) c.tweens[n].run(1);
                            return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this;
                        },
                    }),
                    u = c.props;
                for (
                    !(function (e, t) {
                        var n, i, r, o, s;
                        for (n in e)
                            if (((r = t[(i = K(n))]), (o = e[n]), Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])), n !== i && ((e[i] = o), delete e[n]), (s = S.cssHooks[i]) && ("expand" in s)))
                                for (n in ((o = s.expand(o)), delete e[i], o)) (n in e) || ((e[n] = o[n]), (t[n] = r));
                            else t[i] = r;
                    })(u, c.opts.specialEasing);
                    o < s;
                    o++
                )
                    if ((i = ht.prefilters[o].call(c, e, u, c.opts))) return v(i.stop) && (S._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
                return (
                    S.map(u, ft, c),
                    v(c.opts.start) && c.opts.start.call(e, c),
                    c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
                    S.fx.timer(S.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
                    c
                );
            }
            (S.Animation = S.extend(ht, {
                tweeners: {
                    "*": [
                        function (e, t) {
                            var n = this.createTween(e, t);
                            return ue(n.elem, e, re.exec(t), n), n;
                        },
                    ],
                },
                tweener: function (e, t) {
                    v(e) ? ((t = e), (e = ["*"])) : (e = e.match(H));
                    for (var n, i = 0, r = e.length; i < r; i++) (n = e[i]), (ht.tweeners[n] = ht.tweeners[n] || []), ht.tweeners[n].unshift(t);
                },
                prefilters: [
                    function (e, t, n) {
                        var i,
                            r,
                            o,
                            s,
                            a,
                            l,
                            c,
                            u,
                            d = "width" in t || "height" in t,
                            f = this,
                            h = {},
                            p = e.style,
                            m = e.nodeType && ce(e),
                            g = J.get(e, "fxshow");
                        for (i in (n.queue ||
                            (null == (s = S._queueHooks(e, "fx")).unqueued &&
                                ((s.unqueued = 0),
                                (a = s.empty.fire),
                                (s.empty.fire = function () {
                                    s.unqueued || a();
                                })),
                            s.unqueued++,
                            f.always(function () {
                                f.always(function () {
                                    s.unqueued--, S.queue(e, "fx").length || s.empty.fire();
                                });
                            })),
                        t))
                            if (((r = t[i]), at.test(r))) {
                                if ((delete t[i], (o = o || "toggle" === r), r === (m ? "hide" : "show"))) {
                                    if ("show" !== r || !g || void 0 === g[i]) continue;
                                    m = !0;
                                }
                                h[i] = (g && g[i]) || S.style(e, i);
                            }
                        if ((l = !S.isEmptyObject(t)) || !S.isEmptyObject(h))
                            for (i in (d &&
                                1 === e.nodeType &&
                                ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                                null == (c = g && g.display) && (c = J.get(e, "display")),
                                "none" === (u = S.css(e, "display")) && (c ? (u = c) : (he([e], !0), (c = e.style.display || c), (u = S.css(e, "display")), he([e]))),
                                ("inline" === u || ("inline-block" === u && null != c)) &&
                                    "none" === S.css(e, "float") &&
                                    (l ||
                                        (f.done(function () {
                                            p.display = c;
                                        }),
                                        null == c && ((u = p.display), (c = "none" === u ? "" : u))),
                                    (p.display = "inline-block"))),
                            n.overflow &&
                                ((p.overflow = "hidden"),
                                f.always(function () {
                                    (p.overflow = n.overflow[0]), (p.overflowX = n.overflow[1]), (p.overflowY = n.overflow[2]);
                                })),
                            (l = !1),
                            h))
                                l ||
                                    (g ? "hidden" in g && (m = g.hidden) : (g = J.access(e, "fxshow", { display: c })),
                                    o && (g.hidden = !m),
                                    m && he([e], !0),
                                    f.done(function () {
                                        for (i in (m || he([e]), J.remove(e, "fxshow"), h)) S.style(e, i, h[i]);
                                    })),
                                    (l = ft(m ? g[i] : 0, i, f)),
                                    i in g || ((g[i] = l.start), m && ((l.end = l.start), (l.start = 0)));
                    },
                ],
                prefilter: function (e, t) {
                    t ? ht.prefilters.unshift(e) : ht.prefilters.push(e);
                },
            })),
                (S.speed = function (e, t, n) {
                    var i = e && "object" === typeof e ? S.extend({}, e) : { complete: n || (!n && t) || (v(e) && e), duration: e, easing: (n && t) || (t && !v(t) && t) };
                    return (
                        S.fx.off ? (i.duration = 0) : "number" !== typeof i.duration && (i.duration in S.fx.speeds ? (i.duration = S.fx.speeds[i.duration]) : (i.duration = S.fx.speeds._default)),
                        (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                        (i.old = i.complete),
                        (i.complete = function () {
                            v(i.old) && i.old.call(this), i.queue && S.dequeue(this, i.queue);
                        }),
                        i
                    );
                }),
                S.fn.extend({
                    fadeTo: function (e, t, n, i) {
                        return this.filter(ce).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
                    },
                    animate: function (e, t, n, i) {
                        var r = S.isEmptyObject(e),
                            o = S.speed(t, n, i),
                            s = function () {
                                var t = ht(this, S.extend({}, e), o);
                                (r || J.get(this, "finish")) && t.stop(!0);
                            };
                        return (s.finish = s), r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
                    },
                    stop: function (e, t, n) {
                        var i = function (e) {
                            var t = e.stop;
                            delete e.stop, t(n);
                        };
                        return (
                            "string" !== typeof e && ((n = t), (t = e), (e = void 0)),
                            t && this.queue(e || "fx", []),
                            this.each(function () {
                                var t = !0,
                                    r = null != e && e + "queueHooks",
                                    o = S.timers,
                                    s = J.get(this);
                                if (r) s[r] && s[r].stop && i(s[r]);
                                else for (r in s) s[r] && s[r].stop && lt.test(r) && i(s[r]);
                                for (r = o.length; r--; ) o[r].elem !== this || (null != e && o[r].queue !== e) || (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
                                (!t && n) || S.dequeue(this, e);
                            })
                        );
                    },
                    finish: function (e) {
                        return (
                            !1 !== e && (e = e || "fx"),
                            this.each(function () {
                                var t,
                                    n = J.get(this),
                                    i = n[e + "queue"],
                                    r = n[e + "queueHooks"],
                                    o = S.timers,
                                    s = i ? i.length : 0;
                                for (n.finish = !0, S.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                                for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                                delete n.finish;
                            })
                        );
                    },
                }),
                S.each(["toggle", "show", "hide"], function (e, t) {
                    var n = S.fn[t];
                    S.fn[t] = function (e, i, r) {
                        return null == e || "boolean" === typeof e ? n.apply(this, arguments) : this.animate(dt(t, !0), e, i, r);
                    };
                }),
                S.each({ slideDown: dt("show"), slideUp: dt("hide"), slideToggle: dt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
                    S.fn[e] = function (e, n, i) {
                        return this.animate(t, e, n, i);
                    };
                }),
                (S.timers = []),
                (S.fx.tick = function () {
                    var e,
                        t = 0,
                        n = S.timers;
                    for (ot = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                    n.length || S.fx.stop(), (ot = void 0);
                }),
                (S.fx.timer = function (e) {
                    S.timers.push(e), S.fx.start();
                }),
                (S.fx.interval = 13),
                (S.fx.start = function () {
                    st || ((st = !0), ct());
                }),
                (S.fx.stop = function () {
                    st = null;
                }),
                (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
                (S.fn.delay = function (e, t) {
                    return (
                        (e = (S.fx && S.fx.speeds[e]) || e),
                        (t = t || "fx"),
                        this.queue(t, function (t, i) {
                            var r = n.setTimeout(t, e);
                            i.stop = function () {
                                n.clearTimeout(r);
                            };
                        })
                    );
                }),
                (function () {
                    var e = b.createElement("input"),
                        t = b.createElement("select").appendChild(b.createElement("option"));
                    (e.type = "checkbox"), (g.checkOn = "" !== e.value), (g.optSelected = t.selected), ((e = b.createElement("input")).value = "t"), (e.type = "radio"), (g.radioValue = "t" === e.value);
                })();
            var pt,
                mt = S.expr.attrHandle;
            S.fn.extend({
                attr: function (e, t) {
                    return z(this, S.attr, e, t, arguments.length > 1);
                },
                removeAttr: function (e) {
                    return this.each(function () {
                        S.removeAttr(this, e);
                    });
                },
            }),
                S.extend({
                    attr: function (e, t, n) {
                        var i,
                            r,
                            o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o)
                            return "undefined" === typeof e.getAttribute
                                ? S.prop(e, t, n)
                                : ((1 === o && S.isXMLDoc(e)) || (r = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)),
                                  void 0 !== n
                                      ? null === n
                                          ? void S.removeAttr(e, t)
                                          : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                                          ? i
                                          : (e.setAttribute(t, n + ""), n)
                                      : r && "get" in r && null !== (i = r.get(e, t))
                                      ? i
                                      : null == (i = S.find.attr(e, t))
                                      ? void 0
                                      : i);
                    },
                    attrHooks: {
                        type: {
                            set: function (e, t) {
                                if (!g.radioValue && "radio" === t && D(e, "input")) {
                                    var n = e.value;
                                    return e.setAttribute("type", t), n && (e.value = n), t;
                                }
                            },
                        },
                    },
                    removeAttr: function (e, t) {
                        var n,
                            i = 0,
                            r = t && t.match(H);
                        if (r && 1 === e.nodeType) for (; (n = r[i++]); ) e.removeAttribute(n);
                    },
                }),
                (pt = {
                    set: function (e, t, n) {
                        return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
                    },
                }),
                S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
                    var n = mt[t] || S.find.attr;
                    mt[t] = function (e, t, i) {
                        var r,
                            o,
                            s = t.toLowerCase();
                        return i || ((o = mt[s]), (mt[s] = r), (r = null != n(e, t, i) ? s : null), (mt[s] = o)), r;
                    };
                });
            var gt = /^(?:input|select|textarea|button)$/i,
                vt = /^(?:a|area)$/i;
            function yt(e) {
                return (e.match(H) || []).join(" ");
            }
            function bt(e) {
                return (e.getAttribute && e.getAttribute("class")) || "";
            }
            function _t(e) {
                return Array.isArray(e) ? e : ("string" === typeof e && e.match(H)) || [];
            }
            S.fn.extend({
                prop: function (e, t) {
                    return z(this, S.prop, e, t, arguments.length > 1);
                },
                removeProp: function (e) {
                    return this.each(function () {
                        delete this[S.propFix[e] || e];
                    });
                },
            }),
                S.extend({
                    prop: function (e, t, n) {
                        var i,
                            r,
                            o = e.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o)
                            return (
                                (1 === o && S.isXMLDoc(e)) || ((t = S.propFix[t] || t), (r = S.propHooks[t])),
                                void 0 !== n ? (r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e[t] = n)) : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
                            );
                    },
                    propHooks: {
                        tabIndex: {
                            get: function (e) {
                                var t = S.find.attr(e, "tabindex");
                                return t ? parseInt(t, 10) : gt.test(e.nodeName) || (vt.test(e.nodeName) && e.href) ? 0 : -1;
                            },
                        },
                    },
                    propFix: { for: "htmlFor", class: "className" },
                }),
                g.optSelected ||
                    (S.propHooks.selected = {
                        get: function (e) {
                            var t = e.parentNode;
                            return t && t.parentNode && t.parentNode.selectedIndex, null;
                        },
                        set: function (e) {
                            var t = e.parentNode;
                            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                        },
                    }),
                S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                    S.propFix[this.toLowerCase()] = this;
                }),
                S.fn.extend({
                    addClass: function (e) {
                        var t, n, i, r, o, s;
                        return v(e)
                            ? this.each(function (t) {
                                  S(this).addClass(e.call(this, t, bt(this)));
                              })
                            : (t = _t(e)).length
                            ? this.each(function () {
                                  if (((i = bt(this)), (n = 1 === this.nodeType && " " + yt(i) + " "))) {
                                      for (o = 0; o < t.length; o++) (r = t[o]), n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                                      (s = yt(n)), i !== s && this.setAttribute("class", s);
                                  }
                              })
                            : this;
                    },
                    removeClass: function (e) {
                        var t, n, i, r, o, s;
                        return v(e)
                            ? this.each(function (t) {
                                  S(this).removeClass(e.call(this, t, bt(this)));
                              })
                            : arguments.length
                            ? (t = _t(e)).length
                                ? this.each(function () {
                                      if (((i = bt(this)), (n = 1 === this.nodeType && " " + yt(i) + " "))) {
                                          for (o = 0; o < t.length; o++) for (r = t[o]; n.indexOf(" " + r + " ") > -1; ) n = n.replace(" " + r + " ", " ");
                                          (s = yt(n)), i !== s && this.setAttribute("class", s);
                                      }
                                  })
                                : this
                            : this.attr("class", "");
                    },
                    toggleClass: function (e, t) {
                        var n,
                            i,
                            r,
                            o,
                            s = typeof e,
                            a = "string" === s || Array.isArray(e);
                        return v(e)
                            ? this.each(function (n) {
                                  S(this).toggleClass(e.call(this, n, bt(this), t), t);
                              })
                            : "boolean" === typeof t && a
                            ? t
                                ? this.addClass(e)
                                : this.removeClass(e)
                            : ((n = _t(e)),
                              this.each(function () {
                                  if (a) for (o = S(this), r = 0; r < n.length; r++) (i = n[r]), o.hasClass(i) ? o.removeClass(i) : o.addClass(i);
                                  else (void 0 !== e && "boolean" !== s) || ((i = bt(this)) && J.set(this, "__className__", i), this.setAttribute && this.setAttribute("class", i || !1 === e ? "" : J.get(this, "__className__") || ""));
                              }));
                    },
                    hasClass: function (e) {
                        var t,
                            n,
                            i = 0;
                        for (t = " " + e + " "; (n = this[i++]); ) if (1 === n.nodeType && (" " + yt(bt(n)) + " ").indexOf(t) > -1) return !0;
                        return !1;
                    },
                });
            var wt = /\r/g;
            S.fn.extend({
                val: function (e) {
                    var t,
                        n,
                        i,
                        r = this[0];
                    return arguments.length
                        ? ((i = v(e)),
                          this.each(function (n) {
                              var r;
                              1 === this.nodeType &&
                                  (null == (r = i ? e.call(this, n, S(this).val()) : e)
                                      ? (r = "")
                                      : "number" === typeof r
                                      ? (r += "")
                                      : Array.isArray(r) &&
                                        (r = S.map(r, function (e) {
                                            return null == e ? "" : e + "";
                                        })),
                                  ((t = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value")) || (this.value = r));
                          }))
                        : r
                        ? (t = S.valHooks[r.type] || S.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value"))
                            ? n
                            : "string" === typeof (n = r.value)
                            ? n.replace(wt, "")
                            : null == n
                            ? ""
                            : n
                        : void 0;
                },
            }),
                S.extend({
                    valHooks: {
                        option: {
                            get: function (e) {
                                var t = S.find.attr(e, "value");
                                return null != t ? t : yt(S.text(e));
                            },
                        },
                        select: {
                            get: function (e) {
                                var t,
                                    n,
                                    i,
                                    r = e.options,
                                    o = e.selectedIndex,
                                    s = "select-one" === e.type,
                                    a = s ? null : [],
                                    l = s ? o + 1 : r.length;
                                for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                                    if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                                        if (((t = S(n).val()), s)) return t;
                                        a.push(t);
                                    }
                                return a;
                            },
                            set: function (e, t) {
                                for (var n, i, r = e.options, o = S.makeArray(t), s = r.length; s--; ) ((i = r[s]).selected = S.inArray(S.valHooks.option.get(i), o) > -1) && (n = !0);
                                return n || (e.selectedIndex = -1), o;
                            },
                        },
                    },
                }),
                S.each(["radio", "checkbox"], function () {
                    (S.valHooks[this] = {
                        set: function (e, t) {
                            if (Array.isArray(t)) return (e.checked = S.inArray(S(e).val(), t) > -1);
                        },
                    }),
                        g.checkOn ||
                            (S.valHooks[this].get = function (e) {
                                return null === e.getAttribute("value") ? "on" : e.value;
                            });
                }),
                (g.focusin = "onfocusin" in n);
            var xt = /^(?:focusinfocus|focusoutblur)$/,
                Et = function (e) {
                    e.stopPropagation();
                };
            S.extend(S.event, {
                trigger: function (e, t, i, r) {
                    var o,
                        s,
                        a,
                        l,
                        c,
                        u,
                        d,
                        f,
                        p = [i || b],
                        m = h.call(e, "type") ? e.type : e,
                        g = h.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (
                        ((s = f = a = i = i || b),
                        3 !== i.nodeType &&
                            8 !== i.nodeType &&
                            !xt.test(m + S.event.triggered) &&
                            (m.indexOf(".") > -1 && ((g = m.split(".")), (m = g.shift()), g.sort()),
                            (c = m.indexOf(":") < 0 && "on" + m),
                            ((e = e[S.expando] ? e : new S.Event(m, "object" === typeof e && e)).isTrigger = r ? 2 : 3),
                            (e.namespace = g.join(".")),
                            (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                            (e.result = void 0),
                            e.target || (e.target = i),
                            (t = null == t ? [e] : S.makeArray(t, [e])),
                            (d = S.event.special[m] || {}),
                            r || !d.trigger || !1 !== d.trigger.apply(i, t)))
                    ) {
                        if (!r && !d.noBubble && !y(i)) {
                            for (l = d.delegateType || m, xt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) p.push(s), (a = s);
                            a === (i.ownerDocument || b) && p.push(a.defaultView || a.parentWindow || n);
                        }
                        for (o = 0; (s = p[o++]) && !e.isPropagationStopped(); )
                            (f = s),
                                (e.type = o > 1 ? l : d.bindType || m),
                                (u = (J.get(s, "events") || Object.create(null))[e.type] && J.get(s, "handle")) && u.apply(s, t),
                                (u = c && s[c]) && u.apply && Q(s) && ((e.result = u.apply(s, t)), !1 === e.result && e.preventDefault());
                        return (
                            (e.type = m),
                            r ||
                                e.isDefaultPrevented() ||
                                (d._default && !1 !== d._default.apply(p.pop(), t)) ||
                                !Q(i) ||
                                (c &&
                                    v(i[m]) &&
                                    !y(i) &&
                                    ((a = i[c]) && (i[c] = null),
                                    (S.event.triggered = m),
                                    e.isPropagationStopped() && f.addEventListener(m, Et),
                                    i[m](),
                                    e.isPropagationStopped() && f.removeEventListener(m, Et),
                                    (S.event.triggered = void 0),
                                    a && (i[c] = a))),
                            e.result
                        );
                    }
                },
                simulate: function (e, t, n) {
                    var i = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
                    S.event.trigger(i, null, t);
                },
            }),
                S.fn.extend({
                    trigger: function (e, t) {
                        return this.each(function () {
                            S.event.trigger(e, t, this);
                        });
                    },
                    triggerHandler: function (e, t) {
                        var n = this[0];
                        if (n) return S.event.trigger(e, t, n, !0);
                    },
                }),
                g.focusin ||
                    S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                        var n = function (e) {
                            S.event.simulate(t, e.target, S.event.fix(e));
                        };
                        S.event.special[t] = {
                            setup: function () {
                                var i = this.ownerDocument || this.document || this,
                                    r = J.access(i, t);
                                r || i.addEventListener(e, n, !0), J.access(i, t, (r || 0) + 1);
                            },
                            teardown: function () {
                                var i = this.ownerDocument || this.document || this,
                                    r = J.access(i, t) - 1;
                                r ? J.access(i, t, r) : (i.removeEventListener(e, n, !0), J.remove(i, t));
                            },
                        };
                    });
            var St = n.location,
                Tt = { guid: Date.now() },
                Ct = /\?/;
            S.parseXML = function (e) {
                var t, i;
                if (!e || "string" !== typeof e) return null;
                try {
                    t = new n.DOMParser().parseFromString(e, "text/xml");
                } catch (r) {}
                return (
                    (i = t && t.getElementsByTagName("parsererror")[0]),
                    (t && !i) ||
                        S.error(
                            "Invalid XML: " +
                                (i
                                    ? S.map(i.childNodes, function (e) {
                                          return e.textContent;
                                      }).join("\n")
                                    : e)
                        ),
                    t
                );
            };
            var kt = /\[\]$/,
                At = /\r?\n/g,
                Lt = /^(?:submit|button|image|reset|file)$/i,
                Dt = /^(?:input|select|textarea|keygen)/i;
            function jt(e, t, n, i) {
                var r;
                if (Array.isArray(t))
                    S.each(t, function (t, r) {
                        n || kt.test(e) ? i(e, r) : jt(e + "[" + ("object" === typeof r && null != r ? t : "") + "]", r, n, i);
                    });
                else if (n || "object" !== x(t)) i(e, t);
                else for (r in t) jt(e + "[" + r + "]", t[r], n, i);
            }
            (S.param = function (e, t) {
                var n,
                    i = [],
                    r = function (e, t) {
                        var n = v(t) ? t() : t;
                        i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
                    };
                if (null == e) return "";
                if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
                    S.each(e, function () {
                        r(this.name, this.value);
                    });
                else for (n in e) jt(n, e[n], t, r);
                return i.join("&");
            }),
                S.fn.extend({
                    serialize: function () {
                        return S.param(this.serializeArray());
                    },
                    serializeArray: function () {
                        return this.map(function () {
                            var e = S.prop(this, "elements");
                            return e ? S.makeArray(e) : this;
                        })
                            .filter(function () {
                                var e = this.type;
                                return this.name && !S(this).is(":disabled") && Dt.test(this.nodeName) && !Lt.test(e) && (this.checked || !ge.test(e));
                            })
                            .map(function (e, t) {
                                var n = S(this).val();
                                return null == n
                                    ? null
                                    : Array.isArray(n)
                                    ? S.map(n, function (e) {
                                          return { name: t.name, value: e.replace(At, "\r\n") };
                                      })
                                    : { name: t.name, value: n.replace(At, "\r\n") };
                            })
                            .get();
                    },
                });
            var Ot = /%20/g,
                Nt = /#.*$/,
                qt = /([?&])_=[^&]*/,
                It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Mt = /^(?:GET|HEAD)$/,
                Pt = /^\/\//,
                Ht = {},
                Rt = {},
                Bt = "*/".concat("*"),
                Wt = b.createElement("a");
            function Ft(e) {
                return function (t, n) {
                    "string" !== typeof t && ((n = t), (t = "*"));
                    var i,
                        r = 0,
                        o = t.toLowerCase().match(H) || [];
                    if (v(n)) for (; (i = o[r++]); ) "+" === i[0] ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
                };
            }
            function $t(e, t, n, i) {
                var r = {},
                    o = e === Rt;
                function s(a) {
                    var l;
                    return (
                        (r[a] = !0),
                        S.each(e[a] || [], function (e, a) {
                            var c = a(t, n, i);
                            return "string" !== typeof c || o || r[c] ? (o ? !(l = c) : void 0) : (t.dataTypes.unshift(c), s(c), !1);
                        }),
                        l
                    );
                }
                return s(t.dataTypes[0]) || (!r["*"] && s("*"));
            }
            function Ut(e, t) {
                var n,
                    i,
                    r = S.ajaxSettings.flatOptions || {};
                for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
                return i && S.extend(!0, e, i), e;
            }
            (Wt.href = St.href),
                S.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: St.href,
                        type: "GET",
                        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(St.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: { "*": Bt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                        responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                        converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": S.parseXML },
                        flatOptions: { url: !0, context: !0 },
                    },
                    ajaxSetup: function (e, t) {
                        return t ? Ut(Ut(e, S.ajaxSettings), t) : Ut(S.ajaxSettings, e);
                    },
                    ajaxPrefilter: Ft(Ht),
                    ajaxTransport: Ft(Rt),
                    ajax: function (e, t) {
                        "object" === typeof e && ((t = e), (e = void 0)), (t = t || {});
                        var i,
                            r,
                            o,
                            s,
                            a,
                            l,
                            c,
                            u,
                            d,
                            f,
                            h = S.ajaxSetup({}, t),
                            p = h.context || h,
                            m = h.context && (p.nodeType || p.jquery) ? S(p) : S.event,
                            g = S.Deferred(),
                            v = S.Callbacks("once memory"),
                            y = h.statusCode || {},
                            _ = {},
                            w = {},
                            x = "canceled",
                            E = {
                                readyState: 0,
                                getResponseHeader: function (e) {
                                    var t;
                                    if (c) {
                                        if (!s) for (s = {}; (t = It.exec(o)); ) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                        t = s[e.toLowerCase() + " "];
                                    }
                                    return null == t ? null : t.join(", ");
                                },
                                getAllResponseHeaders: function () {
                                    return c ? o : null;
                                },
                                setRequestHeader: function (e, t) {
                                    return null == c && ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e), (_[e] = t)), this;
                                },
                                overrideMimeType: function (e) {
                                    return null == c && (h.mimeType = e), this;
                                },
                                statusCode: function (e) {
                                    var t;
                                    if (e)
                                        if (c) E.always(e[E.status]);
                                        else for (t in e) y[t] = [y[t], e[t]];
                                    return this;
                                },
                                abort: function (e) {
                                    var t = e || x;
                                    return i && i.abort(t), T(0, t), this;
                                },
                            };
                        if (
                            (g.promise(E),
                            (h.url = ((e || h.url || St.href) + "").replace(Pt, St.protocol + "//")),
                            (h.type = t.method || t.type || h.method || h.type),
                            (h.dataTypes = (h.dataType || "*").toLowerCase().match(H) || [""]),
                            null == h.crossDomain)
                        ) {
                            l = b.createElement("a");
                            try {
                                (l.href = h.url), (l.href = l.href), (h.crossDomain = Wt.protocol + "//" + Wt.host !== l.protocol + "//" + l.host);
                            } catch (C) {
                                h.crossDomain = !0;
                            }
                        }
                        if ((h.data && h.processData && "string" !== typeof h.data && (h.data = S.param(h.data, h.traditional)), $t(Ht, h, t, E), c)) return E;
                        for (d in ((u = S.event && h.global) && 0 === S.active++ && S.event.trigger("ajaxStart"),
                        (h.type = h.type.toUpperCase()),
                        (h.hasContent = !Mt.test(h.type)),
                        (r = h.url.replace(Nt, "")),
                        h.hasContent
                            ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ot, "+"))
                            : ((f = h.url.slice(r.length)),
                              h.data && (h.processData || "string" === typeof h.data) && ((r += (Ct.test(r) ? "&" : "?") + h.data), delete h.data),
                              !1 === h.cache && ((r = r.replace(qt, "$1")), (f = (Ct.test(r) ? "&" : "?") + "_=" + Tt.guid++ + f)),
                              (h.url = r + f)),
                        h.ifModified && (S.lastModified[r] && E.setRequestHeader("If-Modified-Since", S.lastModified[r]), S.etag[r] && E.setRequestHeader("If-None-Match", S.etag[r])),
                        ((h.data && h.hasContent && !1 !== h.contentType) || t.contentType) && E.setRequestHeader("Content-Type", h.contentType),
                        E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : h.accepts["*"]),
                        h.headers))
                            E.setRequestHeader(d, h.headers[d]);
                        if (h.beforeSend && (!1 === h.beforeSend.call(p, E, h) || c)) return E.abort();
                        if (((x = "abort"), v.add(h.complete), E.done(h.success), E.fail(h.error), (i = $t(Rt, h, t, E)))) {
                            if (((E.readyState = 1), u && m.trigger("ajaxSend", [E, h]), c)) return E;
                            h.async &&
                                h.timeout > 0 &&
                                (a = n.setTimeout(function () {
                                    E.abort("timeout");
                                }, h.timeout));
                            try {
                                (c = !1), i.send(_, T);
                            } catch (C) {
                                if (c) throw C;
                                T(-1, C);
                            }
                        } else T(-1, "No Transport");
                        function T(e, t, s, l) {
                            var d,
                                f,
                                b,
                                _,
                                w,
                                x = t;
                            c ||
                                ((c = !0),
                                a && n.clearTimeout(a),
                                (i = void 0),
                                (o = l || ""),
                                (E.readyState = e > 0 ? 4 : 0),
                                (d = (e >= 200 && e < 300) || 304 === e),
                                s &&
                                    (_ = (function (e, t, n) {
                                        for (var i, r, o, s, a = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                                        if (i)
                                            for (r in a)
                                                if (a[r] && a[r].test(i)) {
                                                    l.unshift(r);
                                                    break;
                                                }
                                        if (l[0] in n) o = l[0];
                                        else {
                                            for (r in n) {
                                                if (!l[0] || e.converters[r + " " + l[0]]) {
                                                    o = r;
                                                    break;
                                                }
                                                s || (s = r);
                                            }
                                            o = o || s;
                                        }
                                        if (o) return o !== l[0] && l.unshift(o), n[o];
                                    })(h, E, s)),
                                !d && S.inArray("script", h.dataTypes) > -1 && S.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function () {}),
                                (_ = (function (e, t, n, i) {
                                    var r,
                                        o,
                                        s,
                                        a,
                                        l,
                                        c = {},
                                        u = e.dataTypes.slice();
                                    if (u[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                                    for (o = u.shift(); o; )
                                        if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (l = o), (o = u.shift())))
                                            if ("*" === o) o = l;
                                            else if ("*" !== l && l !== o) {
                                                if (!(s = c[l + " " + o] || c["* " + o]))
                                                    for (r in c)
                                                        if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                                            !0 === s ? (s = c[r]) : !0 !== c[r] && ((o = a[0]), u.unshift(a[1]));
                                                            break;
                                                        }
                                                if (!0 !== s)
                                                    if (s && e.throws) t = s(t);
                                                    else
                                                        try {
                                                            t = s(t);
                                                        } catch (C) {
                                                            return { state: "parsererror", error: s ? C : "No conversion from " + l + " to " + o };
                                                        }
                                            }
                                    return { state: "success", data: t };
                                })(h, _, E, d)),
                                d
                                    ? (h.ifModified && ((w = E.getResponseHeader("Last-Modified")) && (S.lastModified[r] = w), (w = E.getResponseHeader("etag")) && (S.etag[r] = w)),
                                      204 === e || "HEAD" === h.type ? (x = "nocontent") : 304 === e ? (x = "notmodified") : ((x = _.state), (f = _.data), (d = !(b = _.error))))
                                    : ((b = x), (!e && x) || ((x = "error"), e < 0 && (e = 0))),
                                (E.status = e),
                                (E.statusText = (t || x) + ""),
                                d ? g.resolveWith(p, [f, x, E]) : g.rejectWith(p, [E, x, b]),
                                E.statusCode(y),
                                (y = void 0),
                                u && m.trigger(d ? "ajaxSuccess" : "ajaxError", [E, h, d ? f : b]),
                                v.fireWith(p, [E, x]),
                                u && (m.trigger("ajaxComplete", [E, h]), --S.active || S.event.trigger("ajaxStop")));
                        }
                        return E;
                    },
                    getJSON: function (e, t, n) {
                        return S.get(e, t, n, "json");
                    },
                    getScript: function (e, t) {
                        return S.get(e, void 0, t, "script");
                    },
                }),
                S.each(["get", "post"], function (e, t) {
                    S[t] = function (e, n, i, r) {
                        return v(n) && ((r = r || i), (i = n), (n = void 0)), S.ajax(S.extend({ url: e, type: t, dataType: r, data: n, success: i }, S.isPlainObject(e) && e));
                    };
                }),
                S.ajaxPrefilter(function (e) {
                    var t;
                    for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
                }),
                (S._evalUrl = function (e, t, n) {
                    return S.ajax({
                        url: e,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        converters: { "text script": function () {} },
                        dataFilter: function (e) {
                            S.globalEval(e, t, n);
                        },
                    });
                }),
                S.fn.extend({
                    wrapAll: function (e) {
                        var t;
                        return (
                            this[0] &&
                                (v(e) && (e = e.call(this[0])),
                                (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
                                this[0].parentNode && t.insertBefore(this[0]),
                                t
                                    .map(function () {
                                        for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                        return e;
                                    })
                                    .append(this)),
                            this
                        );
                    },
                    wrapInner: function (e) {
                        return v(e)
                            ? this.each(function (t) {
                                  S(this).wrapInner(e.call(this, t));
                              })
                            : this.each(function () {
                                  var t = S(this),
                                      n = t.contents();
                                  n.length ? n.wrapAll(e) : t.append(e);
                              });
                    },
                    wrap: function (e) {
                        var t = v(e);
                        return this.each(function (n) {
                            S(this).wrapAll(t ? e.call(this, n) : e);
                        });
                    },
                    unwrap: function (e) {
                        return (
                            this.parent(e)
                                .not("body")
                                .each(function () {
                                    S(this).replaceWith(this.childNodes);
                                }),
                            this
                        );
                    },
                }),
                (S.expr.pseudos.hidden = function (e) {
                    return !S.expr.pseudos.visible(e);
                }),
                (S.expr.pseudos.visible = function (e) {
                    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
                }),
                (S.ajaxSettings.xhr = function () {
                    try {
                        return new n.XMLHttpRequest();
                    } catch (e) {}
                });
            var zt = { 0: 200, 1223: 204 },
                Xt = S.ajaxSettings.xhr();
            (g.cors = !!Xt && "withCredentials" in Xt),
                (g.ajax = Xt = !!Xt),
                S.ajaxTransport(function (e) {
                    var t, i;
                    if (g.cors || (Xt && !e.crossDomain))
                        return {
                            send: function (r, o) {
                                var s,
                                    a = e.xhr();
                                if ((a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)) for (s in e.xhrFields) a[s] = e.xhrFields[s];
                                for (s in (e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r)) a.setRequestHeader(s, r[s]);
                                (t = function (e) {
                                    return function () {
                                        t &&
                                            ((t = i = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                                            "abort" === e
                                                ? a.abort()
                                                : "error" === e
                                                ? "number" !== typeof a.status
                                                    ? o(0, "error")
                                                    : o(a.status, a.statusText)
                                                : o(
                                                      zt[a.status] || a.status,
                                                      a.statusText,
                                                      "text" !== (a.responseType || "text") || "string" !== typeof a.responseText ? { binary: a.response } : { text: a.responseText },
                                                      a.getAllResponseHeaders()
                                                  ));
                                    };
                                }),
                                    (a.onload = t()),
                                    (i = a.onerror = a.ontimeout = t("error")),
                                    void 0 !== a.onabort
                                        ? (a.onabort = i)
                                        : (a.onreadystatechange = function () {
                                              4 === a.readyState &&
                                                  n.setTimeout(function () {
                                                      t && i();
                                                  });
                                          }),
                                    (t = t("abort"));
                                try {
                                    a.send((e.hasContent && e.data) || null);
                                } catch (l) {
                                    if (t) throw l;
                                }
                            },
                            abort: function () {
                                t && t();
                            },
                        };
                }),
                S.ajaxPrefilter(function (e) {
                    e.crossDomain && (e.contents.script = !1);
                }),
                S.ajaxSetup({
                    accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                    contents: { script: /\b(?:java|ecma)script\b/ },
                    converters: {
                        "text script": function (e) {
                            return S.globalEval(e), e;
                        },
                    },
                }),
                S.ajaxPrefilter("script", function (e) {
                    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
                }),
                S.ajaxTransport("script", function (e) {
                    var t, n;
                    if (e.crossDomain || e.scriptAttrs)
                        return {
                            send: function (i, r) {
                                (t = S("<script>")
                                    .attr(e.scriptAttrs || {})
                                    .prop({ charset: e.scriptCharset, src: e.url })
                                    .on(
                                        "load error",
                                        (n = function (e) {
                                            t.remove(), (n = null), e && r("error" === e.type ? 404 : 200, e.type);
                                        })
                                    )),
                                    b.head.appendChild(t[0]);
                            },
                            abort: function () {
                                n && n();
                            },
                        };
                });
            var Vt,
                Yt = [],
                Kt = /(=)\?(?=&|$)|\?\?/;
            S.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var e = Yt.pop() || S.expando + "_" + Tt.guid++;
                    return (this[e] = !0), e;
                },
            }),
                S.ajaxPrefilter("json jsonp", function (e, t, i) {
                    var r,
                        o,
                        s,
                        a = !1 !== e.jsonp && (Kt.test(e.url) ? "url" : "string" === typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Kt.test(e.data) && "data");
                    if (a || "jsonp" === e.dataTypes[0])
                        return (
                            (r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                            a ? (e[a] = e[a].replace(Kt, "$1" + r)) : !1 !== e.jsonp && (e.url += (Ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                            (e.converters["script json"] = function () {
                                return s || S.error(r + " was not called"), s[0];
                            }),
                            (e.dataTypes[0] = "json"),
                            (o = n[r]),
                            (n[r] = function () {
                                s = arguments;
                            }),
                            i.always(function () {
                                void 0 === o ? S(n).removeProp(r) : (n[r] = o), e[r] && ((e.jsonpCallback = t.jsonpCallback), Yt.push(r)), s && v(o) && o(s[0]), (s = o = void 0);
                            }),
                            "script"
                        );
                }),
                (g.createHTMLDocument = (((Vt = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === Vt.childNodes.length)),
                (S.parseHTML = function (e, t, n) {
                    return "string" !== typeof e
                        ? []
                        : ("boolean" === typeof t && ((n = t), (t = !1)),
                          t || (g.createHTMLDocument ? (((i = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href), t.head.appendChild(i)) : (t = b)),
                          (o = !n && []),
                          (r = j.exec(e)) ? [t.createElement(r[1])] : ((r = Ee([e], t, o)), o && o.length && S(o).remove(), S.merge([], r.childNodes)));
                    var i, r, o;
                }),
                (S.fn.load = function (e, t, n) {
                    var i,
                        r,
                        o,
                        s = this,
                        a = e.indexOf(" ");
                    return (
                        a > -1 && ((i = yt(e.slice(a))), (e = e.slice(0, a))),
                        v(t) ? ((n = t), (t = void 0)) : t && "object" === typeof t && (r = "POST"),
                        s.length > 0 &&
                            S.ajax({ url: e, type: r || "GET", dataType: "html", data: t })
                                .done(function (e) {
                                    (o = arguments), s.html(i ? S("<div>").append(S.parseHTML(e)).find(i) : e);
                                })
                                .always(
                                    n &&
                                        function (e, t) {
                                            s.each(function () {
                                                n.apply(this, o || [e.responseText, t, e]);
                                            });
                                        }
                                ),
                        this
                    );
                }),
                (S.expr.pseudos.animated = function (e) {
                    return S.grep(S.timers, function (t) {
                        return e === t.elem;
                    }).length;
                }),
                (S.offset = {
                    setOffset: function (e, t, n) {
                        var i,
                            r,
                            o,
                            s,
                            a,
                            l,
                            c = S.css(e, "position"),
                            u = S(e),
                            d = {};
                        "static" === c && (e.style.position = "relative"),
                            (a = u.offset()),
                            (o = S.css(e, "top")),
                            (l = S.css(e, "left")),
                            ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? ((s = (i = u.position()).top), (r = i.left)) : ((s = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
                            v(t) && (t = t.call(e, n, S.extend({}, a))),
                            null != t.top && (d.top = t.top - a.top + s),
                            null != t.left && (d.left = t.left - a.left + r),
                            "using" in t ? t.using.call(e, d) : u.css(d);
                    },
                }),
                S.fn.extend({
                    offset: function (e) {
                        if (arguments.length)
                            return void 0 === e
                                ? this
                                : this.each(function (t) {
                                      S.offset.setOffset(this, e, t);
                                  });
                        var t,
                            n,
                            i = this[0];
                        return i ? (i.getClientRects().length ? ((t = i.getBoundingClientRect()), (n = i.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
                    },
                    position: function () {
                        if (this[0]) {
                            var e,
                                t,
                                n,
                                i = this[0],
                                r = { top: 0, left: 0 };
                            if ("fixed" === S.css(i, "position")) t = i.getBoundingClientRect();
                            else {
                                for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position"); ) e = e.parentNode;
                                e && e !== i && 1 === e.nodeType && (((r = S(e).offset()).top += S.css(e, "borderTopWidth", !0)), (r.left += S.css(e, "borderLeftWidth", !0)));
                            }
                            return { top: t.top - r.top - S.css(i, "marginTop", !0), left: t.left - r.left - S.css(i, "marginLeft", !0) };
                        }
                    },
                    offsetParent: function () {
                        return this.map(function () {
                            for (var e = this.offsetParent; e && "static" === S.css(e, "position"); ) e = e.offsetParent;
                            return e || se;
                        });
                    },
                }),
                S.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
                    var n = "pageYOffset" === t;
                    S.fn[e] = function (i) {
                        return z(
                            this,
                            function (e, i, r) {
                                var o;
                                if ((y(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === r)) return o ? o[t] : e[i];
                                o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : (e[i] = r);
                            },
                            e,
                            i,
                            arguments.length
                        );
                    };
                }),
                S.each(["top", "left"], function (e, t) {
                    S.cssHooks[t] = Ve(g.pixelPosition, function (e, n) {
                        if (n) return (n = Xe(e, t)), Be.test(n) ? S(e).position()[t] + "px" : n;
                    });
                }),
                S.each({ Height: "height", Width: "width" }, function (e, t) {
                    S.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, i) {
                        S.fn[i] = function (r, o) {
                            var s = arguments.length && (n || "boolean" !== typeof r),
                                a = n || (!0 === r || !0 === o ? "margin" : "border");
                            return z(
                                this,
                                function (t, n, r) {
                                    var o;
                                    return y(t)
                                        ? 0 === i.indexOf("outer")
                                            ? t["inner" + e]
                                            : t.document.documentElement["client" + e]
                                        : 9 === t.nodeType
                                        ? ((o = t.documentElement), Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e]))
                                        : void 0 === r
                                        ? S.css(t, n, a)
                                        : S.style(t, n, r, a);
                                },
                                t,
                                s ? r : void 0,
                                s
                            );
                        };
                    });
                }),
                S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                    S.fn[t] = function (e) {
                        return this.on(t, e);
                    };
                }),
                S.fn.extend({
                    bind: function (e, t, n) {
                        return this.on(e, null, t, n);
                    },
                    unbind: function (e, t) {
                        return this.off(e, null, t);
                    },
                    delegate: function (e, t, n, i) {
                        return this.on(t, e, n, i);
                    },
                    undelegate: function (e, t, n) {
                        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
                    },
                    hover: function (e, t) {
                        return this.mouseenter(e).mouseleave(t || e);
                    },
                }),
                S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
                    S.fn[t] = function (e, n) {
                        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
                    };
                });
            var Qt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
            (S.proxy = function (e, t) {
                var n, i, r;
                if (("string" === typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
                    return (
                        (i = a.call(arguments, 2)),
                        (r = function () {
                            return e.apply(t || this, i.concat(a.call(arguments)));
                        }),
                        (r.guid = e.guid = e.guid || S.guid++),
                        r
                    );
            }),
                (S.holdReady = function (e) {
                    e ? S.readyWait++ : S.ready(!0);
                }),
                (S.isArray = Array.isArray),
                (S.parseJSON = JSON.parse),
                (S.nodeName = D),
                (S.isFunction = v),
                (S.isWindow = y),
                (S.camelCase = K),
                (S.type = x),
                (S.now = Date.now),
                (S.isNumeric = function (e) {
                    var t = S.type(e);
                    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
                }),
                (S.trim = function (e) {
                    return null == e ? "" : (e + "").replace(Qt, "$1");
                }),
                void 0 ===
                    (i = function () {
                        return S;
                    }.apply(t, [])) || (e.exports = i);
            var Gt = n.jQuery,
                Jt = n.$;
            return (
                (S.noConflict = function (e) {
                    return n.$ === S && (n.$ = Jt), e && n.jQuery === S && (n.jQuery = Gt), S;
                }),
                "undefined" === typeof r && (n.jQuery = n.$ = S),
                S
            );
        });
    },
    function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return i;
        });
        n(0);
        var i = function () {
            var e = document.querySelector("#sous-menu1-mosaic"),
                t = document.querySelector("#sous-menu2-mosaic"),
                n = document.querySelector("#sous-menu3-mosaic");
            console.log("mosaicVideoici"),
                e.addEventListener("click", function () {
                    var i = document.querySelectorAll(".video-container-mosaic");
                    i.forEach(function (e) {
                        e.style.display = "block";
                    }),
                        (e.style.opacity = 1),
                        (t.style.opacity = 0.5),
                        (n.style.opacity = 0.5),
                        i.forEach(function (e) {
                            "true" != e.dataset.music && (e.style.display = "none");
                        });
                }),
                t.addEventListener("click", function () {
                    var i = document.querySelectorAll(".video-container-mosaic");
                    i.forEach(function (e) {
                        e.style.display = "block";
                    }),
                        (e.style.opacity = 0.5),
                        (t.style.opacity = 1),
                        (n.style.opacity = 0.5),
                        i.forEach(function (e) {
                            "true" != e.dataset.content && (e.style.display = "none");
                        });
                }),
                n.addEventListener("click", function () {
                    var i = document.querySelectorAll(".video-container-mosaic");
                    i.forEach(function (e) {
                        e.style.display = "block";
                    }),
                        (e.style.opacity = 0.5),
                        (t.style.opacity = 0.5),
                        (n.style.opacity = 1),
                        i.forEach(function (e) {
                            "true" != e.dataset.fiction && (e.style.display = "none");
                        });
                });
        };
    },
    function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "a", function () {
                return i;
            }),
                n.d(t, "b", function () {
                    return r;
                });
            var i = function () {
                    var t = document.querySelector(".navbar_without_mosaic"),
                        n = document.querySelector(".line-navbar");
                    document.querySelector(".logo-sucrerie"), document.querySelector(".jouuue-logo");
                    window.onscroll = function () {
                        window.scrollY >= 550
                            ? ((t.style.backgroundColor = "white"),
                              t.querySelectorAll(".nav-links").forEach(function (e) {
                                  e.style.color = "black";
                              }),
                              (n.style.opacity = 1),
                              (n.style.color = "black"),
                              e(".logo-sucrerie").attr("src", "/Logo-sucrerie-horizontal-noir.png"),
                              e(".jouuue-logo").attr("src", "/Logo-LW-noir.png"),
                              document.querySelector(".overlay") && ((document.querySelector(".overlay").style.backgroundColor = "white"), e("#opening-menu").attr("src", "/BURGER-MENU-NOIR.png")),
                              (document.querySelector(".illustration-mobile").src = "/Logo-illustration-noir.png"))
                            : ((t.style.backgroundColor = "transparent"),
                              t.querySelectorAll(".nav-links").forEach(function (e) {
                                  e.style.color = "white";
                              }),
                              (n.style.color = "white"),
                              (n.style.opacity = 0.3),
                              e(".logo-sucrerie").attr("src", "/Logo-sucrerie-horizontal-blanc.png"),
                              e(".jouuue-logo").attr("src", "/Logo-LW-blanc.png"),
                              document.querySelector(".overlay") && ((document.querySelector(".overlay").style.backgroundColor = "black"), e("#opening-menu").attr("src", "/MENU-MOBILE_BLANC.png")),
                              (document.querySelector(".illustration-mobile").src = "/Logo-illustration.png"));
                    };
                },
                r = function () {
                    var e = document.querySelector(".navbar"),
                        t = document.querySelector(".under-nav-tv-mosaic");
                    (document.querySelector("#fullmosaic").style.display = "grid")
                        ? (window.onscroll = function () {
                              window.scrollY >= 50 && ((t.style.backgroundColor = "black"), (e.style.backgroundColor = "black"));
                          })
                        : ((t.style.backgroundColor = "transparent"), (e.style.backgroundColor = "transparent"));
                };
        }.call(this, n(1)));
    },
    function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "a", function () {
                return i;
            });
            var i = function () {
                document.querySelector(".list-talents") &&
                    e(document).ready(function () {
                        e(window).scroll(function () {
                            e(window).scrollTop() > 300 ? e(".navbar").css("background", "black") : e(".navbar").css("background", "transparent");
                        });
                    });
            };
        }.call(this, n(1)));
    },
    function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return i;
        });
        var i = function () {
            if (document.getElementById("js-menu")) {
                var e = document.getElementById("myNav"),
                    t = document.getElementById("js-navbar-toggle"),
                    n = document.getElementById("opening-menu"),
                    i = document.getElementById("closing-menu");
                t.addEventListener("click", function () {
                    (n.style.display = "none" === n.style.display ? "" : "none"), (i.style.display = "none" === i.style.display ? "" : "none"), (document.getElementById("myNav").style.width = "100%");
                }),
                    e.addEventListener("click", function () {
                        (i.style.display = "none"), (n.style.display = ""), (document.getElementById("myNav").style.width = "0%");
                    });
            }
        };
    },
    function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return i;
        });
        var i = function () {};
    },
    function (e, t, n) {
        "use strict";
        function i(e) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return r(e);
                })(e) ||
                (function (e) {
                    if (("undefined" !== typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
                })(e) ||
                (function (e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return r(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t);
                })(e) ||
                (function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function r(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
            return i;
        }
        var o, s;
        n.d(t, "a", function () {
            return a;
        });
        var a = function () {
            if (document.querySelectorAll(".anim-paragraphe")) {
                (o = document.querySelectorAll(".anim-paragraphe")), (s = document.querySelectorAll(".anim-title > .anim-rows"));
                var e = 15;
                o.forEach(function (e) {
                    var t = i(e.innerHTML),
                        n = 0;
                    t.forEach(function (t) {
                        0 === n && (e.innerHTML = " "), (e.innerHTML += '<span class="letter">'.concat(t, "</span>")), n++;
                    });
                }),
                    s.forEach(function (t) {
                        (t.style.top = "".concat(e, "vh")), (e += 15);
                    });
            }
        };
        setTimeout(function () {
            l();
        }, 1500);
        var l = function () {
                document.querySelectorAll(".anim-title > .anim-rows").forEach(function (e, t) {
                    0 === t && e.querySelector("span:nth-child(3)").classList.add("anim"),
                        1 === t && e.querySelector("span:nth-child(6)").classList.add("anim"),
                        2 === t && (e.querySelector("span:nth-child(2)").classList.add("anim"), e.querySelector("span:nth-child(7)").classList.add("anim"), e.querySelector("span:nth-child(11)").classList.add("anim"));
                }),
                    document.querySelectorAll("span").forEach(function (e) {
                        !e.classList.contains("anim") && (e.style.opacity = 0), e.addEventListener("transitionend", u, !1);
                    });
            },
            c = function (e) {
                (document.querySelector(".anim-family").style.opacity = 1),
                    document.querySelector(".anim-family").addEventListener(
                        "transitionend",
                        function (e) {
                            document.querySelector(".anim-logos").style.opacity = 1;
                        },
                        !1
                    ),
                    document.querySelector(".anim-logos").addEventListener(
                        "transitionend",
                        function (e) {
                            (document.querySelector(".anim-title").style.opacity = 0), (document.querySelector(".anim-title").style.height = "150vh"), (document.querySelector(".end-anim").style.opacity = 1);
                        },
                        !1
                    );
            },
            u = function () {
                s.forEach(function (e, t) {
                    0 === t && (e.style.left = "-35%"),
                        1 === t && (e.style.left = "-31%"),
                        2 === t && (e.style.left = "5%"),
                        (e.style.top = "35vh"),
                        e.addEventListener(
                            "transitionend",
                            function (e) {
                                !(function (e, t) {
                                    document.querySelectorAll(".anim").forEach(function (e) {
                                        "e" === e.innerText && 2 === t && ((e.style.position = "absolute"), (e.style.left = "41%")),
                                            "r" === e.innerText && ((e.style.position = "absolute"), (e.style.left = "33%")),
                                            e.addEventListener("transitionend", c, !1);
                                    });
                                })(0, t);
                            },
                            !1
                        );
                });
            };
    },
    function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return i;
        });
        var i = function () {
            document.querySelector(".preloader") &&
                window.addEventListener("load", function () {
                    (document.querySelector(".preloader").style.display = "none"), (document.body.style.overflow = ""), (document.body.style.position = "");
                });
        };
    },
    function (e, t, n) {
        "use strict";
        (function (e) {
            n.d(t, "a", function () {
                return i;
            });
            var i = function () {
                e(".arrow-loc").click(function () {
                    e("html, body").animate({ scrollTop: e(".arrow-loc").offset().top }, 1e3);
                }),
                    e(".arrow-talent").click(function () {
                        e("html, body").animate({ scrollTop: e(".arrow-talent").offset().top }, 1e3);
                    }),
                    e(".background-accueil").click(function () {
                        e("html, body").animate({ scrollTop: e("#projects-list").offset().top }, 1e3);
                    }),
                    e(".carousel-inner").click(function () {
                        e("html, body").animate({ scrollTop: e("#infos-loc").offset().top }, 1e3);
                    });
            };
        }.call(this, n(1)));
    },
    function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return i;
        });
        var i = function () {
            if (document.querySelector(".list-talents")) {
                var e = document.querySelector("#sous-menu4"),
                    t = document.querySelector("#sous-menu5"),
                    n = document.querySelector("#sous-menu6"),
                    i = document.querySelectorAll(".talent-name");
                e.addEventListener("mouseover", function () {
                    i.forEach(function (e) {
                        (e.style.opacity = "0.5"), "true" == e.dataset.realisateur && (e.style.opacity = "1");
                    });
                }),
                    e.addEventListener("mouseout", function () {
                        i.forEach(function (e) {
                            e.style.opacity = "0.5";
                        });
                    }),
                    t.addEventListener("mouseover", function () {
                        i.forEach(function (e) {
                            (e.style.opacity = "0.5"), "true" == e.dataset.photographe && (e.style.opacity = "1");
                        });
                    }),
                    t.addEventListener("mouseout", function () {
                        i.forEach(function (e) {
                            e.style.opacity = "0.5";
                        });
                    }),
                    n.addEventListener("mouseover", function () {
                        i.forEach(function (e) {
                            (e.style.opacity = "0.5"), "true" == e.dataset.da && (e.style.opacity = "1");
                        });
                    }),
                    n.addEventListener("mouseout", function () {
                        i.forEach(function (e) {
                            e.style.opacity = "0.5";
                        });
                    });
            }
        };
    },
    function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return i;
        });
        var i = function () {
            window.onscroll = function () {
                document.querySelectorAll(".talent-name").forEach(function (e) {
                    var t = e.getBoundingClientRect();
                    t.top <= 160 ? (console.log(t.top), (e.style.opacity = 0)) : (e.style.opacity = 1);
                });
            };
        };
    },
    function (e, t, n) {
        "use strict";
        n.r(t),
            function (e, t) {
                n(18);
                var i = n(4),
                    r = n(5),
                    o = n(2),
                    s = n(6),
                    a = n(0),
                    l = n(7),
                    c = (n(17), n(3)),
                    u = n(8),
                    d = n(9),
                    f = n(10),
                    h = n(11);
                n(13).start(),
                    n(14).start(),
                    n(15),
                    Object(f.a)(),
                    Object(i.a)(),
                    Object(d.a)(),
                    (document.querySelector(".main-talent") || document.querySelector(".location-show")) && Object(c.a)(),
                    document.querySelector("#fullmosaic") && Object(c.b)(),
                    Object(u.a)(),
                    Object(r.a)(),
                    Object(s.a)(),
                    Object(l.a)(),
                    document.querySelector("#mosaic") && document.querySelector(".under-nav-tv-mosaic") && ((document.querySelector(".jouuue-logo").style.display = "none"), Object(o.a)(), Object(a.a)()),
                    document.querySelector(".list-talents") && Object(h.a)(),
                    (function (e, t, n, i) {
                        e.fn.pagepiling = function (r) {
                            var o,
                                s = e.fn.pagepiling,
                                a = e(this),
                                l = 0,
                                c = "ontouchstart" in n || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
                                u = 0,
                                d = 0,
                                f = 0,
                                h = 0;
                            if (t.querySelector("#pagepiling"))
                                var p = e.extend(
                                    !0,
                                    {
                                        direction: "vertical",
                                        menu: null,
                                        verticalCentered: !0,
                                        sectionsColor: [],
                                        anchors: [],
                                        scrollingSpeed: 700,
                                        easing: "easeInQuart",
                                        loopBottom: !1,
                                        loopTop: !1,
                                        css3: !0,
                                        navigation: {},
                                        normalScrollElements: null,
                                        normalScrollElementTouchThreshold: 5,
                                        touchSensitivity: 5,
                                        keyboardScrolling: !0,
                                        sectionSelector: ".section",
                                        animateAnchor: !1,
                                        afterLoad: null,
                                        onLeave: null,
                                        afterRender: null,
                                    },
                                    r
                                );
                            else
                                p = e.extend(
                                    !0,
                                    {
                                        direction: "vertical",
                                        menu: null,
                                        verticalCentered: !0,
                                        sectionsColor: [],
                                        anchors: [],
                                        scrollingSpeed: 700,
                                        easing: "easeInQuart",
                                        loopBottom: !1,
                                        loopTop: !1,
                                        css3: !0,
                                        navigation: { textColor: "#000", bulletsColor: "#000", position: "right", tooltips: [] },
                                        normalScrollElements: null,
                                        normalScrollElementTouchThreshold: 5,
                                        touchSensitivity: 5,
                                        keyboardScrolling: !0,
                                        sectionSelector: ".section",
                                        animateAnchor: !1,
                                        afterLoad: null,
                                        onLeave: null,
                                        afterRender: null,
                                    },
                                    r
                                );
                            e.extend(e.easing, {
                                easeInQuart: function (e, t, n, i, r) {
                                    return i * (t /= r) * t * t * t + n;
                                },
                            }),
                                (s.setScrollingSpeed = function (e) {
                                    p.scrollingSpeed = e;
                                }),
                                (s.setMouseWheelScrolling = function (e) {
                                    e
                                        ? a.get(0).addEventListener
                                            ? (a.get(0).addEventListener("mousewheel", E, !1), a.get(0).addEventListener("wheel", E, !1))
                                            : a.get(0).attachEvent("onmousewheel", E)
                                        : a.get(0).addEventListener
                                        ? (a.get(0).removeEventListener("mousewheel", E, !1), a.get(0).removeEventListener("wheel", E, !1))
                                        : a.get(0).detachEvent("onmousewheel", E);
                                }),
                                (s.setAllowScrolling = function (e) {
                                    e
                                        ? (s.setMouseWheelScrolling(!0),
                                          (function () {
                                              if (c) {
                                                  var e = C();
                                                  a.off("touchstart " + e.down).on("touchstart " + e.down, L), a.off("touchmove " + e.move).on("touchmove " + e.move, D);
                                              }
                                          })())
                                        : (s.setMouseWheelScrolling(!1),
                                          (function () {
                                              if (c) {
                                                  var e = C();
                                                  a.off("touchstart " + e.down), a.off("touchmove " + e.move);
                                              }
                                          })());
                                }),
                                (s.setKeyboardScrolling = function (e) {
                                    p.keyboardScrolling = e;
                                }),
                                (s.moveSectionUp = function () {
                                    var t = e(".pp-section.active").prev(".pp-section");
                                    !t.length && p.loopTop && (t = e(".pp-section").last()), t.length && g(t);
                                }),
                                (s.moveSectionDown = function () {
                                    var t = e(".pp-section.active").next(".pp-section");
                                    !t.length && p.loopBottom && (t = e(".pp-section").first()), t.length && g(t);
                                }),
                                (s.moveTo = function (n) {
                                    var i = "";
                                    (i = isNaN(n) ? e(t).find('[data-anchor="' + n + '"]') : e(".pp-section").eq(n - 1)).length > 0 && g(i);
                                }),
                                e(p.sectionSelector).each(function () {
                                    e(this).addClass("pp-section");
                                }),
                                p.css3 &&
                                    (p.css3 = (function () {
                                        var e,
                                            r = t.createElement("p"),
                                            o = { webkitTransform: "-webkit-transform", OTransform: "-o-transform", msTransform: "-ms-transform", MozTransform: "-moz-transform", transform: "transform" };
                                        for (var s in (t.body.insertBefore(r, null), o)) r.style[s] !== i && ((r.style[s] = "translate3d(1px,1px,1px)"), (e = n.getComputedStyle(r).getPropertyValue(o[s])));
                                        return t.body.removeChild(r), e !== i && e.length > 0 && "none" !== e;
                                    })()),
                                e(a).css({ overflow: "hidden", "-ms-touch-action": "none", "touch-action": "none" }),
                                s.setAllowScrolling(!0),
                                e.isEmptyObject(p.navigation) ||
                                    (function () {
                                        e("body").append('<div id="pp-nav"><ul></ul></div>');
                                        var t = e("#pp-nav");
                                        t.css("color", p.navigation.textColor), t.addClass(p.navigation.position);
                                        for (var n = 0; n < e(".pp-section").length; n++) {
                                            var i = "";
                                            if ((p.anchors.length && (i = p.anchors[n]), "undefined" !== p.navigation.tooltips)) {
                                                var r = p.navigation.tooltips[n];
                                                "undefined" === typeof r && (r = "");
                                            }
                                            t.find("ul").append('<li data-tooltip="' + r + '"><a href="#' + i + '"><span></span></a></li>');
                                        }
                                        t.find("span").css("border-color", p.navigation.bulletsColor);
                                    })();
                            var m = e(".pp-section").length;
                            function g(n, i) {
                                var r,
                                    s = {
                                        destination: n,
                                        animated: i,
                                        activeSection: e(".pp-section.active"),
                                        anchorLink: n.data("anchor"),
                                        sectionIndex: n.index(".pp-section"),
                                        toMove: n,
                                        yMovement: ((r = n), e(".pp-section.active").index(".pp-section") > r.index(".pp-section") ? "up" : "down"),
                                        leavingSection: e(".pp-section.active").index(".pp-section") + 1,
                                    };
                                if (!s.activeSection.is(n)) {
                                    var a, c;
                                    "undefined" === typeof s.animated && (s.animated = !0),
                                        "undefined" !== typeof s.anchorLink && ((a = s.anchorLink), (c = s.sectionIndex), p.anchors.length ? ((location.hash = a), _(location.hash)) : _(String(c)));
                                    var u = t.querySelector(".active");
                                    u.querySelector("#my-video-id").pause(), console.log(u), s.destination.addClass("active").siblings().removeClass("active");
                                    var d,
                                        f = t.querySelector(".active");
                                    f.querySelector("#my-video-id").play(),
                                        console.log(f),
                                        (s.sectionsToMove = (function (t) {
                                            var n;
                                            n =
                                                "down" === t.yMovement
                                                    ? e(".pp-section").map(function (n) {
                                                          if (n < t.destination.index(".pp-section")) return e(this);
                                                      })
                                                    : e(".pp-section").map(function (n) {
                                                          if (n > t.destination.index(".pp-section")) return e(this);
                                                      });
                                            return n;
                                        })(s)),
                                        "down" === s.yMovement
                                            ? ((s.translate3d = O()),
                                              (s.scrolling = "-100%"),
                                              p.css3 ||
                                                  s.sectionsToMove.each(function (t) {
                                                      t != s.activeSection.index(".pp-section") && e(this).css(b(s.scrolling));
                                                  }),
                                              (s.animateSection = s.activeSection))
                                            : ((s.translate3d = "translate3d(0px, 0px, 0px)"), (s.scrolling = "0"), (s.animateSection = n)),
                                        e.isFunction(p.onLeave) && p.onLeave.call(this, s.leavingSection, s.sectionIndex + 1, s.yMovement),
                                        (function (t) {
                                            p.css3
                                                ? (x(t.animateSection, t.translate3d, t.animated),
                                                  t.sectionsToMove.each(function () {
                                                      x(e(this), t.translate3d, t.animated);
                                                  }),
                                                  setTimeout(function () {
                                                      v(t);
                                                  }, p.scrollingSpeed))
                                                : ((t.scrollOptions = b(t.scrolling)),
                                                  t.animated
                                                      ? t.animateSection.animate(t.scrollOptions, p.scrollingSpeed, p.easing, function () {
                                                            y(t), v(t);
                                                        })
                                                      : (t.animateSection.css(b(t.scrolling)),
                                                        setTimeout(function () {
                                                            y(t), v(t);
                                                        }, 400)));
                                        })(s),
                                        (d = s.anchorLink),
                                        p.menu &&
                                            (e(p.menu).find(".active").removeClass("active"),
                                            e(p.menu)
                                                .find('[data-menuanchor="' + d + '"]')
                                                .addClass("active")),
                                        (function (t, n) {
                                            p.navigation &&
                                                (e("#pp-nav").find(".active").removeClass("active"),
                                                t
                                                    ? e("#pp-nav")
                                                          .find('a[href="#' + t + '"]')
                                                          .addClass("active")
                                                    : e("#pp-nav").find("li").eq(n).find("a").addClass("active"));
                                        })(s.anchorLink, s.sectionIndex),
                                        (o = s.anchorLink);
                                    var h = new Date().getTime();
                                    l = h;
                                }
                            }
                            function v(t) {
                                e.isFunction(p.afterLoad) && p.afterLoad.call(this, t.anchorLink, t.sectionIndex + 1);
                            }
                            function y(t) {
                                "up" === t.yMovement &&
                                    t.sectionsToMove.each(function (n) {
                                        e(this).css(b(t.scrolling));
                                    });
                            }
                            function b(e) {
                                return "vertical" === p.direction ? { top: e } : { left: e };
                            }
                            function _(t) {
                                (t = t.replace("#", "")), (e("body")[0].className = e("body")[0].className.replace(/\b\s?pp-viewing-[^\s]+\b/g, "")), e("body").addClass("pp-viewing-" + t);
                            }
                            function w() {
                                return new Date().getTime() - l < 600 + p.scrollingSpeed;
                            }
                            function x(e, t, n) {
                                e.toggleClass("pp-easing", n),
                                    e.css(
                                        (function (e) {
                                            return { "-webkit-transform": e, "-moz-transform": e, "-ms-transform": e, transform: e };
                                        })(t)
                                    );
                            }
                            function E(t) {
                                if (!w()) {
                                    t = n.event || t;
                                    var i = Math.max(-1, Math.min(1, t.wheelDelta || -t.deltaY || -t.detail)),
                                        r = T(e(".pp-section.active"));
                                    return S(i < 0 ? "down" : "up", r), !1;
                                }
                            }
                            function S(e, t) {
                                var n, i;
                                if (("down" == e ? ((n = "bottom"), (i = s.moveSectionDown)) : ((n = "top"), (i = s.moveSectionUp)), t.length > 0)) {
                                    if (
                                        !(function (e, t) {
                                            if ("top" === e) return !t.scrollTop();
                                            if ("bottom" === e) return t.scrollTop() + 1 + t.innerHeight() >= t[0].scrollHeight;
                                        })(n, t)
                                    )
                                        return !0;
                                    i();
                                } else i();
                            }
                            function T(e) {
                                return e.filter(".pp-scrollable");
                            }
                            function C() {
                                return n.PointerEvent ? { down: "pointerdown", move: "pointermove", up: "pointerup" } : { down: "MSPointerDown", move: "MSPointerMove", up: "MSPointerUp" };
                            }
                            function k(e) {
                                var t = new Array();
                                return (t.y = "undefined" !== typeof e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY), (t.x = "undefined" !== typeof e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX), t;
                            }
                            function A(e) {
                                return "undefined" === typeof e.pointerType || "mouse" != e.pointerType;
                            }
                            function L(e) {
                                var t = e.originalEvent;
                                if (A(t)) {
                                    var n = k(t);
                                    (u = n.y), (d = n.x);
                                }
                            }
                            function D(t) {
                                var n = t.originalEvent;
                                if (!j(t.target) && A(n)) {
                                    var i = T(e(".pp-section.active"));
                                    if ((i.length || t.preventDefault(), !w())) {
                                        var r = k(n);
                                        (f = r.y),
                                            (h = r.x),
                                            "horizontal" === p.direction && Math.abs(d - h) > Math.abs(u - f)
                                                ? Math.abs(d - h) > (a.width() / 100) * p.touchSensitivity && (d > h ? S("down", i) : h > d && S("up", i))
                                                : Math.abs(u - f) > (a.height() / 100) * p.touchSensitivity && (u > f ? S("down", i) : f > u && S("up", i));
                                    }
                                }
                            }
                            function j(t, n) {
                                n = n || 0;
                                var i = e(t).parent();
                                return !!(n < p.normalScrollElementTouchThreshold && i.is(p.normalScrollElements)) || (n != p.normalScrollElementTouchThreshold && j(i, ++n));
                            }
                            function O() {
                                return "vertical" !== p.direction ? "translate3d(-100%, 0px, 0px)" : "translate3d(0px, -100%, 0px)";
                            }
                            e(".pp-section")
                                .each(function (t) {
                                    e(this).data("data-index", t),
                                        e(this).css("z-index", m),
                                        t || 0 !== e(".pp-section.active").length || e(this).addClass("active"),
                                        "undefined" !== typeof p.anchors[t] && e(this).attr("data-anchor", p.anchors[t]),
                                        "undefined" !== typeof p.sectionsColor[t] && e(this).css("background-color", p.sectionsColor[t]),
                                        p.verticalCentered && !e(this).hasClass("pp-scrollable") && e(this).addClass("pp-table").wrapInner('<div class="pp-tableCell" style="height:100%" />'),
                                        (m -= 1);
                                })
                                .promise()
                                .done(function () {
                                    p.navigation && (e("#pp-nav").css("margin-top", "-" + e("#pp-nav").height() / 2 + "px"), e("#pp-nav").find("li").eq(e(".pp-section.active").index(".pp-section")).find("a").addClass("active")),
                                        e(n).on("load", function () {
                                            var i, r;
                                            (i = n.location.hash.replace("#", "")), (r = e(t).find('.pp-section[data-anchor="' + i + '"]')).length > 0 && g(r, p.animateAnchor);
                                        }),
                                        e.isFunction(p.afterRender) && p.afterRender.call(this);
                                }),
                                e(n).on("hashchange", function () {
                                    var i = n.location.hash.replace("#", "").split("/")[0];
                                    if (i.length) {
                                        if (i && i !== o) g(isNaN(i) ? e(t).find('[data-anchor="' + i + '"]') : e(".pp-section").eq(i - 1));
                                    }
                                }),
                                e(t).keydown(function (t) {
                                    if (p.keyboardScrolling && !w())
                                        switch (t.which) {
                                            case 38:
                                            case 33:
                                            case 37:
                                                s.moveSectionUp();
                                                break;
                                            case 40:
                                            case 34:
                                            case 39:
                                                s.moveSectionDown();
                                                break;
                                            case 36:
                                                s.moveTo(1);
                                                break;
                                            case 35:
                                                s.moveTo(e(".pp-section").length);
                                                break;
                                            default:
                                                return;
                                        }
                                }),
                                p.normalScrollElements &&
                                    (e(t).on("mouseenter", p.normalScrollElements, function () {
                                        s.setMouseWheelScrolling(!1);
                                    }),
                                    e(t).on("mouseleave", p.normalScrollElements, function () {
                                        s.setMouseWheelScrolling(!0);
                                    })),
                                e(t).on("click touchstart", "#pp-nav a", function (t) {
                                    t.preventDefault();
                                    var n = e(this).parent().index();
                                    g(e(".pp-section").eq(n));
                                }),
                                e(t).on(
                                    {
                                        mouseenter: function () {
                                            var t = e(this).data("tooltip");
                                            e('<div class="pp-tooltip ' + p.navigation.position + '">' + t + "</div>")
                                                .hide()
                                                .appendTo(e(this))
                                                .fadeIn(200);
                                        },
                                        mouseleave: function () {
                                            e(this)
                                                .find(".pp-tooltip")
                                                .fadeOut(200, function () {
                                                    e(this).remove();
                                                });
                                        },
                                    },
                                    "#pp-nav li"
                                );
                        };
                    })(e, document, window),
                    document.querySelector("#pagepiling") &&
                        document.addEventListener("DOMContentLoaded", function (e) {
                            t("#pagepiling").pagepiling(),
                                document.querySelectorAll("video-home").forEach(function (e) {
                                    video.style.display = "unset";
                                });
                        }),
                    document.querySelector("#pagepiling-home") &&
                        document.addEventListener("DOMContentLoaded", function (e) {
                            t("#pagepiling-home").pagepiling();
                        });
            }.call(this, n(1), n(1));
    },
    function (e, t, n) {
        (function (i) {
            var r, o;
            (function () {
                (function () {
                    (function () {
                        this.Rails = {
                            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
                            buttonClickSelector: { selector: "button[data-remote]:not([form]), button[data-confirm]:not([form])", exclude: "form button" },
                            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
                            formSubmitSelector: "form",
                            formInputClickSelector:
                                "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
                            formDisableSelector:
                                "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
                            formEnableSelector:
                                "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
                            fileInputSelector: "input[name][type=file]:not([disabled])",
                            linkDisableSelector: "a[data-disable-with], a[data-disable]",
                            buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
                        };
                    }.call(this));
                }.call(this));
                var s = this.Rails;
                (function () {
                    (function () {
                        var e;
                        (e = null),
                            (s.loadCSPNonce = function () {
                                var t;
                                return (e = null != (t = document.querySelector("meta[name=csp-nonce]")) ? t.content : void 0);
                            }),
                            (s.cspNonce = function () {
                                return null != e ? e : s.loadCSPNonce();
                            });
                    }.call(this),
                        function () {
                            var e;
                            (e =
                                Element.prototype.matches ||
                                Element.prototype.matchesSelector ||
                                Element.prototype.mozMatchesSelector ||
                                Element.prototype.msMatchesSelector ||
                                Element.prototype.oMatchesSelector ||
                                Element.prototype.webkitMatchesSelector),
                                (s.matches = function (t, n) {
                                    return null != n.exclude ? e.call(t, n.selector) && !e.call(t, n.exclude) : e.call(t, n);
                                }),
                                (s.getData = function (e, t) {
                                    var n;
                                    return null != (n = e._ujsData) ? n[t] : void 0;
                                }),
                                (s.setData = function (e, t, n) {
                                    return null == e._ujsData && (e._ujsData = {}), (e._ujsData[t] = n);
                                }),
                                (s.$ = function (e) {
                                    return Array.prototype.slice.call(document.querySelectorAll(e));
                                });
                        }.call(this),
                        function () {
                            var e, t, n;
                            (e = s.$),
                                (n = s.csrfToken = function () {
                                    var e;
                                    return (e = document.querySelector("meta[name=csrf-token]")) && e.content;
                                }),
                                (t = s.csrfParam = function () {
                                    var e;
                                    return (e = document.querySelector("meta[name=csrf-param]")) && e.content;
                                }),
                                (s.CSRFProtection = function (e) {
                                    var t;
                                    if (null != (t = n())) return e.setRequestHeader("X-CSRF-Token", t);
                                }),
                                (s.refreshCSRFTokens = function () {
                                    var i, r;
                                    if (((r = n()), (i = t()), null != r && null != i))
                                        return e('form input[name="' + i + '"]').forEach(function (e) {
                                            return (e.value = r);
                                        });
                                });
                        }.call(this),
                        function () {
                            var e, t, n, i;
                            (n = s.matches),
                                "function" !== typeof (e = window.CustomEvent) &&
                                    (((e = function (e, t) {
                                        var n;
                                        return (n = document.createEvent("CustomEvent")).initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
                                    }).prototype = window.Event.prototype),
                                    (i = e.prototype.preventDefault),
                                    (e.prototype.preventDefault = function () {
                                        var e;
                                        return (
                                            (e = i.call(this)),
                                            this.cancelable &&
                                                !this.defaultPrevented &&
                                                Object.defineProperty(this, "defaultPrevented", {
                                                    get: function () {
                                                        return !0;
                                                    },
                                                }),
                                            e
                                        );
                                    })),
                                (t = s.fire = function (t, n, i) {
                                    var r;
                                    return (r = new e(n, { bubbles: !0, cancelable: !0, detail: i })), t.dispatchEvent(r), !r.defaultPrevented;
                                }),
                                (s.stopEverything = function (e) {
                                    return t(e.target, "ujs:everythingStopped"), e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
                                }),
                                (s.delegate = function (e, t, i, r) {
                                    return e.addEventListener(i, function (e) {
                                        var i;
                                        for (i = e.target; i instanceof Element && !n(i, t); ) i = i.parentNode;
                                        if (i instanceof Element && !1 === r.call(i, e)) return e.preventDefault(), e.stopPropagation();
                                    });
                                });
                        }.call(this),
                        function () {
                            var e, t, n, i, r, o;
                            (i = s.cspNonce),
                                (t = s.CSRFProtection),
                                s.fire,
                                (e = {
                                    "*": "*/*",
                                    text: "text/plain",
                                    html: "text/html",
                                    xml: "application/xml, text/xml",
                                    json: "application/json, text/javascript",
                                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
                                }),
                                (s.ajax = function (e) {
                                    var t;
                                    return (
                                        (e = r(e)),
                                        (t = n(e, function () {
                                            var n, i;
                                            return (
                                                (i = o(null != (n = t.response) ? n : t.responseText, t.getResponseHeader("Content-Type"))),
                                                2 === Math.floor(t.status / 100) ? "function" === typeof e.success && e.success(i, t.statusText, t) : "function" === typeof e.error && e.error(i, t.statusText, t),
                                                "function" === typeof e.complete ? e.complete(t, t.statusText) : void 0
                                            );
                                        })),
                                        !(null != e.beforeSend && !e.beforeSend(t, e)) && (t.readyState === XMLHttpRequest.OPENED ? t.send(e.data) : void 0)
                                    );
                                }),
                                (r = function (t) {
                                    return (
                                        (t.url = t.url || location.href),
                                        (t.type = t.type.toUpperCase()),
                                        "GET" === t.type && t.data && (t.url.indexOf("?") < 0 ? (t.url += "?" + t.data) : (t.url += "&" + t.data)),
                                        null == e[t.dataType] && (t.dataType = "*"),
                                        (t.accept = e[t.dataType]),
                                        "*" !== t.dataType && (t.accept += ", */*; q=0.01"),
                                        t
                                    );
                                }),
                                (n = function (e, n) {
                                    var i;
                                    return (
                                        (i = new XMLHttpRequest()).open(e.type, e.url, !0),
                                        i.setRequestHeader("Accept", e.accept),
                                        "string" === typeof e.data && i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"),
                                        e.crossDomain || (i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), t(i)),
                                        (i.withCredentials = !!e.withCredentials),
                                        (i.onreadystatechange = function () {
                                            if (i.readyState === XMLHttpRequest.DONE) return n(i);
                                        }),
                                        i
                                    );
                                }),
                                (o = function (e, t) {
                                    var n, r;
                                    if ("string" === typeof e && "string" === typeof t)
                                        if (t.match(/\bjson\b/))
                                            try {
                                                e = JSON.parse(e);
                                            } catch (o) {}
                                        else if (t.match(/\b(?:java|ecma)script\b/)) (r = document.createElement("script")).setAttribute("nonce", i()), (r.text = e), document.head.appendChild(r).parentNode.removeChild(r);
                                        else if (t.match(/\b(xml|html|svg)\b/)) {
                                            (n = new DOMParser()), (t = t.replace(/;.+/, ""));
                                            try {
                                                e = n.parseFromString(e, t);
                                            } catch (o) {}
                                        }
                                    return e;
                                }),
                                (s.href = function (e) {
                                    return e.href;
                                }),
                                (s.isCrossDomain = function (e) {
                                    var t, n;
                                    ((t = document.createElement("a")).href = location.href), (n = document.createElement("a"));
                                    try {
                                        return (n.href = e), !(((!n.protocol || ":" === n.protocol) && !n.host) || t.protocol + "//" + t.host === n.protocol + "//" + n.host);
                                    } catch (i) {
                                        return i, !0;
                                    }
                                });
                        }.call(this),
                        function () {
                            var e, t;
                            (e = s.matches),
                                (t = function (e) {
                                    return Array.prototype.slice.call(e);
                                }),
                                (s.serializeElement = function (n, i) {
                                    var r, o;
                                    return (
                                        (r = [n]),
                                        e(n, "form") && (r = t(n.elements)),
                                        (o = []),
                                        r.forEach(function (n) {
                                            if (n.name && !n.disabled && !e(n, "fieldset[disabled] *"))
                                                return e(n, "select")
                                                    ? t(n.options).forEach(function (e) {
                                                          if (e.selected) return o.push({ name: n.name, value: e.value });
                                                      })
                                                    : n.checked || -1 === ["radio", "checkbox", "submit"].indexOf(n.type)
                                                    ? o.push({ name: n.name, value: n.value })
                                                    : void 0;
                                        }),
                                        i && o.push(i),
                                        o
                                            .map(function (e) {
                                                return null != e.name ? encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value) : e;
                                            })
                                            .join("&")
                                    );
                                }),
                                (s.formElements = function (n, i) {
                                    return e(n, "form")
                                        ? t(n.elements).filter(function (t) {
                                              return e(t, i);
                                          })
                                        : t(n.querySelectorAll(i));
                                });
                        }.call(this),
                        function () {
                            var e, t, n;
                            (t = s.fire),
                                (n = s.stopEverything),
                                (s.handleConfirm = function (t) {
                                    if (!e(this)) return n(t);
                                }),
                                (s.confirm = function (e, t) {
                                    return confirm(e);
                                }),
                                (e = function (e) {
                                    var n, i, r;
                                    if (!(r = e.getAttribute("data-confirm"))) return !0;
                                    if (((n = !1), t(e, "confirm"))) {
                                        try {
                                            n = s.confirm(r, e);
                                        } catch (o) {}
                                        i = t(e, "confirm:complete", [n]);
                                    }
                                    return n && i;
                                });
                        }.call(this),
                        function () {
                            var e, t, n, i, r, o, a, l, c, u, d, f;
                            (u = s.matches),
                                (l = s.getData),
                                (d = s.setData),
                                (f = s.stopEverything),
                                (a = s.formElements),
                                (s.handleDisabledElement = function (e) {
                                    if ((this, this.disabled)) return f(e);
                                }),
                                (s.enableElement = function (e) {
                                    var t;
                                    if (e instanceof Event) {
                                        if (c(e)) return;
                                        t = e.target;
                                    } else t = e;
                                    return u(t, s.linkDisableSelector) ? o(t) : u(t, s.buttonDisableSelector) || u(t, s.formEnableSelector) ? i(t) : u(t, s.formSubmitSelector) ? r(t) : void 0;
                                }),
                                (s.disableElement = function (i) {
                                    var r;
                                    return (r = i instanceof Event ? i.target : i), u(r, s.linkDisableSelector) ? n(r) : u(r, s.buttonDisableSelector) || u(r, s.formDisableSelector) ? e(r) : u(r, s.formSubmitSelector) ? t(r) : void 0;
                                }),
                                (n = function (e) {
                                    var t;
                                    if (!l(e, "ujs:disabled")) return null != (t = e.getAttribute("data-disable-with")) && (d(e, "ujs:enable-with", e.innerHTML), (e.innerHTML = t)), e.addEventListener("click", f), d(e, "ujs:disabled", !0);
                                }),
                                (o = function (e) {
                                    var t;
                                    return null != (t = l(e, "ujs:enable-with")) && ((e.innerHTML = t), d(e, "ujs:enable-with", null)), e.removeEventListener("click", f), d(e, "ujs:disabled", null);
                                }),
                                (t = function (t) {
                                    return a(t, s.formDisableSelector).forEach(e);
                                }),
                                (e = function (e) {
                                    var t;
                                    if (!l(e, "ujs:disabled"))
                                        return (
                                            null != (t = e.getAttribute("data-disable-with")) && (u(e, "button") ? (d(e, "ujs:enable-with", e.innerHTML), (e.innerHTML = t)) : (d(e, "ujs:enable-with", e.value), (e.value = t))),
                                            (e.disabled = !0),
                                            d(e, "ujs:disabled", !0)
                                        );
                                }),
                                (r = function (e) {
                                    return a(e, s.formEnableSelector).forEach(i);
                                }),
                                (i = function (e) {
                                    var t;
                                    return null != (t = l(e, "ujs:enable-with")) && (u(e, "button") ? (e.innerHTML = t) : (e.value = t), d(e, "ujs:enable-with", null)), (e.disabled = !1), d(e, "ujs:disabled", null);
                                }),
                                (c = function (e) {
                                    var t, n;
                                    return null != (null != (n = null != (t = e.detail) ? t[0] : void 0) ? n.getResponseHeader("X-Xhr-Redirect") : void 0);
                                });
                        }.call(this),
                        function () {
                            var e;
                            (e = s.stopEverything),
                                (s.handleMethod = function (t) {
                                    var n, i, r, o, a, l, c;
                                    if ((c = (l = this).getAttribute("data-method")))
                                        return (
                                            (a = s.href(l)),
                                            (i = s.csrfToken()),
                                            (n = s.csrfParam()),
                                            (r = document.createElement("form")),
                                            (o = "<input name='_method' value='" + c + "' type='hidden' />"),
                                            null == n || null == i || s.isCrossDomain(a) || (o += "<input name='" + n + "' value='" + i + "' type='hidden' />"),
                                            (o += '<input type="submit" />'),
                                            (r.method = "post"),
                                            (r.action = a),
                                            (r.target = l.target),
                                            (r.innerHTML = o),
                                            (r.style.display = "none"),
                                            document.body.appendChild(r),
                                            r.querySelector('[type="submit"]').click(),
                                            e(t)
                                        );
                                });
                        }.call(this),
                        function () {
                            var e,
                                t,
                                n,
                                i,
                                r,
                                o,
                                a,
                                l,
                                c,
                                u = [].slice;
                            (o = s.matches),
                                (n = s.getData),
                                (l = s.setData),
                                (t = s.fire),
                                (c = s.stopEverything),
                                (e = s.ajax),
                                (i = s.isCrossDomain),
                                (a = s.serializeElement),
                                (r = function (e) {
                                    var t;
                                    return null != (t = e.getAttribute("data-remote")) && "false" !== t;
                                }),
                                (s.handleRemote = function (d) {
                                    var f, h, p, m, g, v, y;
                                    return (
                                        !r((m = this)) ||
                                        (t(m, "ajax:before")
                                            ? ((y = m.getAttribute("data-with-credentials")),
                                              (p = m.getAttribute("data-type") || "script"),
                                              o(m, s.formSubmitSelector)
                                                  ? ((f = n(m, "ujs:submit-button")),
                                                    (g = n(m, "ujs:submit-button-formmethod") || m.method),
                                                    (v = n(m, "ujs:submit-button-formaction") || m.getAttribute("action") || location.href),
                                                    "GET" === g.toUpperCase() && (v = v.replace(/\?.*$/, "")),
                                                    "multipart/form-data" === m.enctype ? ((h = new FormData(m)), null != f && h.append(f.name, f.value)) : (h = a(m, f)),
                                                    l(m, "ujs:submit-button", null),
                                                    l(m, "ujs:submit-button-formmethod", null),
                                                    l(m, "ujs:submit-button-formaction", null))
                                                  : o(m, s.buttonClickSelector) || o(m, s.inputChangeSelector)
                                                  ? ((g = m.getAttribute("data-method")), (v = m.getAttribute("data-url")), (h = a(m, m.getAttribute("data-params"))))
                                                  : ((g = m.getAttribute("data-method")), (v = s.href(m)), (h = m.getAttribute("data-params"))),
                                              e({
                                                  type: g || "GET",
                                                  url: v,
                                                  data: h,
                                                  dataType: p,
                                                  beforeSend: function (e, n) {
                                                      return t(m, "ajax:beforeSend", [e, n]) ? t(m, "ajax:send", [e]) : (t(m, "ajax:stopped"), !1);
                                                  },
                                                  success: function () {
                                                      var e;
                                                      return (e = 1 <= arguments.length ? u.call(arguments, 0) : []), t(m, "ajax:success", e);
                                                  },
                                                  error: function () {
                                                      var e;
                                                      return (e = 1 <= arguments.length ? u.call(arguments, 0) : []), t(m, "ajax:error", e);
                                                  },
                                                  complete: function () {
                                                      var e;
                                                      return (e = 1 <= arguments.length ? u.call(arguments, 0) : []), t(m, "ajax:complete", e);
                                                  },
                                                  crossDomain: i(v),
                                                  withCredentials: null != y && "false" !== y,
                                              }),
                                              c(d))
                                            : (t(m, "ajax:stopped"), !1))
                                    );
                                }),
                                (s.formSubmitButtonClick = function (e) {
                                    var t, n;
                                    if ((n = (t = this).form))
                                        return (
                                            t.name && l(n, "ujs:submit-button", { name: t.name, value: t.value }),
                                            l(n, "ujs:formnovalidate-button", t.formNoValidate),
                                            l(n, "ujs:submit-button-formaction", t.getAttribute("formaction")),
                                            l(n, "ujs:submit-button-formmethod", t.getAttribute("formmethod"))
                                        );
                                }),
                                (s.preventInsignificantClick = function (e) {
                                    var t, n, i;
                                    if (
                                        (this,
                                        (i = (this.getAttribute("data-method") || "GET").toUpperCase()),
                                        (t = this.getAttribute("data-params")),
                                        (n = (e.metaKey || e.ctrlKey) && "GET" === i && !t),
                                        (null != e.button && 0 !== e.button) || n)
                                    )
                                        return e.stopImmediatePropagation();
                                });
                        }.call(this),
                        function () {
                            var e, t, n, r, o, a, l, c, u, d, f, h, p, m, g;
                            if (
                                ((a = s.fire),
                                (n = s.delegate),
                                (c = s.getData),
                                (e = s.$),
                                (g = s.refreshCSRFTokens),
                                (t = s.CSRFProtection),
                                (p = s.loadCSPNonce),
                                (o = s.enableElement),
                                (r = s.disableElement),
                                (d = s.handleDisabledElement),
                                (u = s.handleConfirm),
                                (m = s.preventInsignificantClick),
                                (h = s.handleRemote),
                                (l = s.formSubmitButtonClick),
                                (f = s.handleMethod),
                                "undefined" !== typeof i && null !== i && null != i.ajax)
                            ) {
                                if (i.rails) throw new Error("If you load both jquery_ujs and rails-ujs, use rails-ujs only.");
                                (i.rails = s),
                                    i.ajaxPrefilter(function (e, n, i) {
                                        if (!e.crossDomain) return t(i);
                                    });
                            }
                            (s.start = function () {
                                if (window._rails_loaded) throw new Error("rails-ujs has already been loaded!");
                                return (
                                    window.addEventListener("pageshow", function () {
                                        return (
                                            e(s.formEnableSelector).forEach(function (e) {
                                                if (c(e, "ujs:disabled")) return o(e);
                                            }),
                                            e(s.linkDisableSelector).forEach(function (e) {
                                                if (c(e, "ujs:disabled")) return o(e);
                                            })
                                        );
                                    }),
                                    n(document, s.linkDisableSelector, "ajax:complete", o),
                                    n(document, s.linkDisableSelector, "ajax:stopped", o),
                                    n(document, s.buttonDisableSelector, "ajax:complete", o),
                                    n(document, s.buttonDisableSelector, "ajax:stopped", o),
                                    n(document, s.linkClickSelector, "click", m),
                                    n(document, s.linkClickSelector, "click", d),
                                    n(document, s.linkClickSelector, "click", u),
                                    n(document, s.linkClickSelector, "click", r),
                                    n(document, s.linkClickSelector, "click", h),
                                    n(document, s.linkClickSelector, "click", f),
                                    n(document, s.buttonClickSelector, "click", m),
                                    n(document, s.buttonClickSelector, "click", d),
                                    n(document, s.buttonClickSelector, "click", u),
                                    n(document, s.buttonClickSelector, "click", r),
                                    n(document, s.buttonClickSelector, "click", h),
                                    n(document, s.inputChangeSelector, "change", d),
                                    n(document, s.inputChangeSelector, "change", u),
                                    n(document, s.inputChangeSelector, "change", h),
                                    n(document, s.formSubmitSelector, "submit", d),
                                    n(document, s.formSubmitSelector, "submit", u),
                                    n(document, s.formSubmitSelector, "submit", h),
                                    n(document, s.formSubmitSelector, "submit", function (e) {
                                        return setTimeout(function () {
                                            return r(e);
                                        }, 13);
                                    }),
                                    n(document, s.formSubmitSelector, "ajax:send", r),
                                    n(document, s.formSubmitSelector, "ajax:complete", o),
                                    n(document, s.formInputClickSelector, "click", m),
                                    n(document, s.formInputClickSelector, "click", d),
                                    n(document, s.formInputClickSelector, "click", u),
                                    n(document, s.formInputClickSelector, "click", l),
                                    document.addEventListener("DOMContentLoaded", g),
                                    document.addEventListener("DOMContentLoaded", p),
                                    (window._rails_loaded = !0)
                                );
                            }),
                                window.Rails === s && a(document, "rails:attachBindings") && s.start();
                        }.call(this));
                }.call(this),
                    e.exports ? (e.exports = s) : void 0 === (o = "function" === typeof (r = s) ? r.call(t, n, t, e) : r) || (e.exports = o));
            }.call(this));
        }.call(this, n(1)));
    },
    function (e, t, n) {
        !(function (e) {
            "use strict";
            function t(e, t) {
                return e((t = { exports: {} }), t.exports), t.exports;
            }
            var n = t(function (e, t) {
                    !(function (t) {
                        e.exports = t();
                    })(function (e) {
                        var t = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
                        function n(e, t) {
                            var n = e[0],
                                i = e[1],
                                r = e[2],
                                o = e[3];
                            (i =
                                ((((i +=
                                    ((((r =
                                        ((((r +=
                                            ((((o = ((((o += ((((n = ((((n += (((i & r) | (~i & o)) + t[0] - 680876936) | 0) << 7) | (n >>> 25)) + i) | 0) & i) | (~n & r)) + t[1] - 389564586) | 0) << 12) | (o >>> 20)) + n) | 0) & n) |
                                                (~o & i)) +
                                                t[2] +
                                                606105819) |
                                            0) <<
                                            17) |
                                            (r >>> 15)) +
                                            o) |
                                        0) &
                                        o) |
                                        (~r & n)) +
                                        t[3] -
                                        1044525330) |
                                    0) <<
                                    22) |
                                    (i >>> 10)) +
                                    r) |
                                0),
                                (i =
                                    ((((i +=
                                        ((((r =
                                            ((((r +=
                                                ((((o = ((((o += ((((n = ((((n += (((i & r) | (~i & o)) + t[4] - 176418897) | 0) << 7) | (n >>> 25)) + i) | 0) & i) | (~n & r)) + t[5] + 1200080426) | 0) << 12) | (o >>> 20)) + n) | 0) & n) |
                                                    (~o & i)) +
                                                    t[6] -
                                                    1473231341) |
                                                0) <<
                                                17) |
                                                (r >>> 15)) +
                                                o) |
                                            0) &
                                            o) |
                                            (~r & n)) +
                                            t[7] -
                                            45705983) |
                                        0) <<
                                        22) |
                                        (i >>> 10)) +
                                        r) |
                                    0),
                                (i =
                                    ((((i +=
                                        ((((r =
                                            ((((r +=
                                                ((((o = ((((o += ((((n = ((((n += (((i & r) | (~i & o)) + t[8] + 1770035416) | 0) << 7) | (n >>> 25)) + i) | 0) & i) | (~n & r)) + t[9] - 1958414417) | 0) << 12) | (o >>> 20)) + n) | 0) & n) |
                                                    (~o & i)) +
                                                    t[10] -
                                                    42063) |
                                                0) <<
                                                17) |
                                                (r >>> 15)) +
                                                o) |
                                            0) &
                                            o) |
                                            (~r & n)) +
                                            t[11] -
                                            1990404162) |
                                        0) <<
                                        22) |
                                        (i >>> 10)) +
                                        r) |
                                    0),
                                (i =
                                    ((((i +=
                                        ((((r =
                                            ((((r +=
                                                ((((o = ((((o += ((((n = ((((n += (((i & r) | (~i & o)) + t[12] + 1804603682) | 0) << 7) | (n >>> 25)) + i) | 0) & i) | (~n & r)) + t[13] - 40341101) | 0) << 12) | (o >>> 20)) + n) | 0) & n) |
                                                    (~o & i)) +
                                                    t[14] -
                                                    1502002290) |
                                                0) <<
                                                17) |
                                                (r >>> 15)) +
                                                o) |
                                            0) &
                                            o) |
                                            (~r & n)) +
                                            t[15] +
                                            1236535329) |
                                        0) <<
                                        22) |
                                        (i >>> 10)) +
                                        r) |
                                    0),
                                (i =
                                    ((((i +=
                                        ((((r =
                                            ((((r +=
                                                ((((o = ((((o += ((((n = ((((n += (((i & o) | (r & ~o)) + t[1] - 165796510) | 0) << 5) | (n >>> 27)) + i) | 0) & r) | (i & ~r)) + t[6] - 1069501632) | 0) << 9) | (o >>> 23)) + n) | 0) & i) |
                                                    (n & ~i)) +
                                                    t[11] +
                                                    643717713) |
                                                0) <<
                                                14) |
                                                (r >>> 18)) +
                                                o) |
                                            0) &
                                            n) |
                                            (o & ~n)) +
                                            t[0] -
                                            373897302) |
                                        0) <<
                                        20) |
                                        (i >>> 12)) +
                                        r) |
                                    0),
                                (i =
                                    ((((i +=
                                        ((((r =
                                            ((((r +=
                                                ((((o = ((((o += ((((n = ((((n += (((i & o) | (r & ~o)) + t[5] - 701558691) | 0) << 5) | (n >>> 27)) + i) | 0) & r) | (i & ~r)) + t[10] + 38016083) | 0) << 9) | (o >>> 23)) + n) | 0) & i) |
                                                    (n & ~i)) +
                                                    t[15] -
                                                    660478335) |
                                                0) <<
                                                14) |
                                                (r >>> 18)) +
                                                o) |
                                            0) &
                                            n) |
                                            (o & ~n)) +
                                            t[4] -
                                            405537848) |
                                        0) <<
                                        20) |
                                        (i >>> 12)) +
                                        r) |
                                    0),
                                (i =
                                    ((((i +=
                                        ((((r =
                                            ((((r +=
                                                ((((o = ((((o += ((((n = ((((n += (((i & o) | (r & ~o)) + t[9] + 568446438) | 0) << 5) | (n >>> 27)) + i) | 0) & r) | (i & ~r)) + t[14] - 1019803690) | 0) << 9) | (o >>> 23)) + n) | 0) & i) |
                                                    (n & ~i)) +
                                                    t[3] -
                                                    187363961) |
                                                0) <<
                                                14) |
                                                (r >>> 18)) +
                                                o) |
                                            0) &
                                            n) |
                                            (o & ~n)) +
                                            t[8] +
                                            1163531501) |
                                        0) <<
                                        20) |
                                        (i >>> 12)) +
                                        r) |
                                    0),
                                (i =
                                    ((((i +=
                                        ((((r =
                                            ((((r +=
                                                ((((o = ((((o += ((((n = ((((n += (((i & o) | (r & ~o)) + t[13] - 1444681467) | 0) << 5) | (n >>> 27)) + i) | 0) & r) | (i & ~r)) + t[2] - 51403784) | 0) << 9) | (o >>> 23)) + n) | 0) & i) |
                                                    (n & ~i)) +
                                                    t[7] +
                                                    1735328473) |
                                                0) <<
                                                14) |
                                                (r >>> 18)) +
                                                o) |
                                            0) &
                                            n) |
                                            (o & ~n)) +
                                            t[12] -
                                            1926607734) |
                                        0) <<
                                        20) |
                                        (i >>> 12)) +
                                        r) |
                                    0),
                                (i =
                                    ((((i +=
                                        (((r =
                                            ((((r +=
                                                (((o = ((((o += (((n = ((((n += ((i ^ r ^ o) + t[5] - 378558) | 0) << 4) | (n >>> 28)) + i) | 0) ^ i ^ r) + t[8] - 2022574463) | 0) << 11) | (o >>> 21)) + n) | 0) ^ n ^ i) +
                                                    t[11] +
                                                    1839030562) |
                                                0) <<
                                                16) |
                                                (r >>> 16)) +
                                                o) |
                                            0) ^
                                            o ^
                                            n) +
                                            t[14] -
                                            35309556) |
                                        0) <<
                                        23) |
                                        (i >>> 9)) +
                                        r) |
                                    0),
                                (i =
                                    ((((i +=
                                        (((r =
                                            ((((r +=
                                                (((o = ((((o += (((n = ((((n += ((i ^ r ^ o) + t[1] - 1530992060) | 0) << 4) | (n >>> 28)) + i) | 0) ^ i ^ r) + t[4] + 1272893353) | 0) << 11) | (o >>> 21)) + n) | 0) ^ n ^ i) +
                                                    t[7] -
                                                    155497632) |
                                                0) <<
                                                16) |
                                                (r >>> 16)) +
                                                o) |
                                            0) ^
                                            o ^
                                            n) +
                                            t[10] -
                                            1094730640) |
                                        0) <<
                                        23) |
                                        (i >>> 9)) +
                                        r) |
                                    0),
                                (i =
                                    ((((i +=
                                        (((r =
                                            ((((r +=
                                                (((o = ((((o += (((n = ((((n += ((i ^ r ^ o) + t[13] + 681279174) | 0) << 4) | (n >>> 28)) + i) | 0) ^ i ^ r) + t[0] - 358537222) | 0) << 11) | (o >>> 21)) + n) | 0) ^ n ^ i) +
                                                    t[3] -
                                                    722521979) |
                                                0) <<
                                                16) |
                                                (r >>> 16)) +
                                                o) |
                                            0) ^
                                            o ^
                                            n) +
                                            t[6] +
                                            76029189) |
                                        0) <<
                                        23) |
                                        (i >>> 9)) +
                                        r) |
                                    0),
                                (i =
                                    ((((i +=
                                        (((r =
                                            ((((r +=
                                                (((o = ((((o += (((n = ((((n += ((i ^ r ^ o) + t[9] - 640364487) | 0) << 4) | (n >>> 28)) + i) | 0) ^ i ^ r) + t[12] - 421815835) | 0) << 11) | (o >>> 21)) + n) | 0) ^ n ^ i) +
                                                    t[15] +
                                                    530742520) |
                                                0) <<
                                                16) |
                                                (r >>> 16)) +
                                                o) |
                                            0) ^
                                            o ^
                                            n) +
                                            t[2] -
                                            995338651) |
                                        0) <<
                                        23) |
                                        (i >>> 9)) +
                                        r) |
                                    0),
                                (i =
                                    ((((i +=
                                        (((o = ((((o += ((i ^ ((n = ((((n += ((r ^ (i | ~o)) + t[0] - 198630844) | 0) << 6) | (n >>> 26)) + i) | 0) | ~r)) + t[7] + 1126891415) | 0) << 10) | (o >>> 22)) + n) | 0) ^
                                            ((r = ((((r += ((n ^ (o | ~i)) + t[14] - 1416354905) | 0) << 15) | (r >>> 17)) + o) | 0) | ~n)) +
                                            t[5] -
                                            57434055) |
                                        0) <<
                                        21) |
                                        (i >>> 11)) +
                                        r) |
                                    0),
                                (i =
                                    ((((i +=
                                        (((o = ((((o += ((i ^ ((n = ((((n += ((r ^ (i | ~o)) + t[12] + 1700485571) | 0) << 6) | (n >>> 26)) + i) | 0) | ~r)) + t[3] - 1894986606) | 0) << 10) | (o >>> 22)) + n) | 0) ^
                                            ((r = ((((r += ((n ^ (o | ~i)) + t[10] - 1051523) | 0) << 15) | (r >>> 17)) + o) | 0) | ~n)) +
                                            t[1] -
                                            2054922799) |
                                        0) <<
                                        21) |
                                        (i >>> 11)) +
                                        r) |
                                    0),
                                (i =
                                    ((((i +=
                                        (((o = ((((o += ((i ^ ((n = ((((n += ((r ^ (i | ~o)) + t[8] + 1873313359) | 0) << 6) | (n >>> 26)) + i) | 0) | ~r)) + t[15] - 30611744) | 0) << 10) | (o >>> 22)) + n) | 0) ^
                                            ((r = ((((r += ((n ^ (o | ~i)) + t[6] - 1560198380) | 0) << 15) | (r >>> 17)) + o) | 0) | ~n)) +
                                            t[13] +
                                            1309151649) |
                                        0) <<
                                        21) |
                                        (i >>> 11)) +
                                        r) |
                                    0),
                                (i =
                                    ((((i +=
                                        (((o = ((((o += ((i ^ ((n = ((((n += ((r ^ (i | ~o)) + t[4] - 145523070) | 0) << 6) | (n >>> 26)) + i) | 0) | ~r)) + t[11] - 1120210379) | 0) << 10) | (o >>> 22)) + n) | 0) ^
                                            ((r = ((((r += ((n ^ (o | ~i)) + t[2] + 718787259) | 0) << 15) | (r >>> 17)) + o) | 0) | ~n)) +
                                            t[9] -
                                            343485551) |
                                        0) <<
                                        21) |
                                        (i >>> 11)) +
                                        r) |
                                    0),
                                (e[0] = (n + e[0]) | 0),
                                (e[1] = (i + e[1]) | 0),
                                (e[2] = (r + e[2]) | 0),
                                (e[3] = (o + e[3]) | 0);
                        }
                        function i(e) {
                            var t,
                                n = [];
                            for (t = 0; t < 64; t += 4) n[t >> 2] = e.charCodeAt(t) + (e.charCodeAt(t + 1) << 8) + (e.charCodeAt(t + 2) << 16) + (e.charCodeAt(t + 3) << 24);
                            return n;
                        }
                        function r(e) {
                            var t,
                                n = [];
                            for (t = 0; t < 64; t += 4) n[t >> 2] = e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24);
                            return n;
                        }
                        function o(e) {
                            var t,
                                r,
                                o,
                                s,
                                a,
                                l,
                                c = e.length,
                                u = [1732584193, -271733879, -1732584194, 271733878];
                            for (t = 64; t <= c; t += 64) n(u, i(e.substring(t - 64, t)));
                            for (r = (e = e.substring(t - 64)).length, o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], t = 0; t < r; t += 1) o[t >> 2] |= e.charCodeAt(t) << (t % 4 << 3);
                            if (((o[t >> 2] |= 128 << (t % 4 << 3)), t > 55)) for (n(u, o), t = 0; t < 16; t += 1) o[t] = 0;
                            return (s = (s = 8 * c).toString(16).match(/(.*?)(.{0,8})$/)), (a = parseInt(s[2], 16)), (l = parseInt(s[1], 16) || 0), (o[14] = a), (o[15] = l), n(u, o), u;
                        }
                        function s(e) {
                            var t,
                                i,
                                o,
                                s,
                                a,
                                l,
                                c = e.length,
                                u = [1732584193, -271733879, -1732584194, 271733878];
                            for (t = 64; t <= c; t += 64) n(u, r(e.subarray(t - 64, t)));
                            for (i = (e = t - 64 < c ? e.subarray(t - 64) : new Uint8Array(0)).length, o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], t = 0; t < i; t += 1) o[t >> 2] |= e[t] << (t % 4 << 3);
                            if (((o[t >> 2] |= 128 << (t % 4 << 3)), t > 55)) for (n(u, o), t = 0; t < 16; t += 1) o[t] = 0;
                            return (s = (s = 8 * c).toString(16).match(/(.*?)(.{0,8})$/)), (a = parseInt(s[2], 16)), (l = parseInt(s[1], 16) || 0), (o[14] = a), (o[15] = l), n(u, o), u;
                        }
                        function a(e) {
                            var n,
                                i = "";
                            for (n = 0; n < 4; n += 1) i += t[(e >> (8 * n + 4)) & 15] + t[(e >> (8 * n)) & 15];
                            return i;
                        }
                        function l(e) {
                            var t;
                            for (t = 0; t < e.length; t += 1) e[t] = a(e[t]);
                            return e.join("");
                        }
                        function c(e) {
                            return /[\u0080-\uFFFF]/.test(e) && (e = unescape(encodeURIComponent(e))), e;
                        }
                        function u(e, t) {
                            var n,
                                i = e.length,
                                r = new ArrayBuffer(i),
                                o = new Uint8Array(r);
                            for (n = 0; n < i; n += 1) o[n] = e.charCodeAt(n);
                            return t ? o : r;
                        }
                        function d(e) {
                            return String.fromCharCode.apply(null, new Uint8Array(e));
                        }
                        function f(e, t, n) {
                            var i = new Uint8Array(e.byteLength + t.byteLength);
                            return i.set(new Uint8Array(e)), i.set(new Uint8Array(t), e.byteLength), n ? i : i.buffer;
                        }
                        function h(e) {
                            var t,
                                n = [],
                                i = e.length;
                            for (t = 0; t < i - 1; t += 2) n.push(parseInt(e.substr(t, 2), 16));
                            return String.fromCharCode.apply(String, n);
                        }
                        function p() {
                            this.reset();
                        }
                        return (
                            l(o("hello")),
                            "undefined" === typeof ArrayBuffer ||
                                ArrayBuffer.prototype.slice ||
                                (function () {
                                    function t(e, t) {
                                        return (e = 0 | e || 0) < 0 ? Math.max(e + t, 0) : Math.min(e, t);
                                    }
                                    ArrayBuffer.prototype.slice = function (n, i) {
                                        var r,
                                            o,
                                            s,
                                            a,
                                            l = this.byteLength,
                                            c = t(n, l),
                                            u = l;
                                        return i !== e && (u = t(i, l)), c > u ? new ArrayBuffer(0) : ((r = u - c), (o = new ArrayBuffer(r)), (s = new Uint8Array(o)), (a = new Uint8Array(this, c, r)), s.set(a), o);
                                    };
                                })(),
                            (p.prototype.append = function (e) {
                                return this.appendBinary(c(e)), this;
                            }),
                            (p.prototype.appendBinary = function (e) {
                                (this._buff += e), (this._length += e.length);
                                var t,
                                    r = this._buff.length;
                                for (t = 64; t <= r; t += 64) n(this._hash, i(this._buff.substring(t - 64, t)));
                                return (this._buff = this._buff.substring(t - 64)), this;
                            }),
                            (p.prototype.end = function (e) {
                                var t,
                                    n,
                                    i = this._buff,
                                    r = i.length,
                                    o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                                for (t = 0; t < r; t += 1) o[t >> 2] |= i.charCodeAt(t) << (t % 4 << 3);
                                return this._finish(o, r), (n = l(this._hash)), e && (n = h(n)), this.reset(), n;
                            }),
                            (p.prototype.reset = function () {
                                return (this._buff = ""), (this._length = 0), (this._hash = [1732584193, -271733879, -1732584194, 271733878]), this;
                            }),
                            (p.prototype.getState = function () {
                                return { buff: this._buff, length: this._length, hash: this._hash };
                            }),
                            (p.prototype.setState = function (e) {
                                return (this._buff = e.buff), (this._length = e.length), (this._hash = e.hash), this;
                            }),
                            (p.prototype.destroy = function () {
                                delete this._hash, delete this._buff, delete this._length;
                            }),
                            (p.prototype._finish = function (e, t) {
                                var i,
                                    r,
                                    o,
                                    s = t;
                                if (((e[s >> 2] |= 128 << (s % 4 << 3)), s > 55)) for (n(this._hash, e), s = 0; s < 16; s += 1) e[s] = 0;
                                (i = (i = 8 * this._length).toString(16).match(/(.*?)(.{0,8})$/)), (r = parseInt(i[2], 16)), (o = parseInt(i[1], 16) || 0), (e[14] = r), (e[15] = o), n(this._hash, e);
                            }),
                            (p.hash = function (e, t) {
                                return p.hashBinary(c(e), t);
                            }),
                            (p.hashBinary = function (e, t) {
                                var n = l(o(e));
                                return t ? h(n) : n;
                            }),
                            (p.ArrayBuffer = function () {
                                this.reset();
                            }),
                            (p.ArrayBuffer.prototype.append = function (e) {
                                var t,
                                    i = f(this._buff.buffer, e, !0),
                                    o = i.length;
                                for (this._length += e.byteLength, t = 64; t <= o; t += 64) n(this._hash, r(i.subarray(t - 64, t)));
                                return (this._buff = t - 64 < o ? new Uint8Array(i.buffer.slice(t - 64)) : new Uint8Array(0)), this;
                            }),
                            (p.ArrayBuffer.prototype.end = function (e) {
                                var t,
                                    n,
                                    i = this._buff,
                                    r = i.length,
                                    o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                                for (t = 0; t < r; t += 1) o[t >> 2] |= i[t] << (t % 4 << 3);
                                return this._finish(o, r), (n = l(this._hash)), e && (n = h(n)), this.reset(), n;
                            }),
                            (p.ArrayBuffer.prototype.reset = function () {
                                return (this._buff = new Uint8Array(0)), (this._length = 0), (this._hash = [1732584193, -271733879, -1732584194, 271733878]), this;
                            }),
                            (p.ArrayBuffer.prototype.getState = function () {
                                var e = p.prototype.getState.call(this);
                                return (e.buff = d(e.buff)), e;
                            }),
                            (p.ArrayBuffer.prototype.setState = function (e) {
                                return (e.buff = u(e.buff, !0)), p.prototype.setState.call(this, e);
                            }),
                            (p.ArrayBuffer.prototype.destroy = p.prototype.destroy),
                            (p.ArrayBuffer.prototype._finish = p.prototype._finish),
                            (p.ArrayBuffer.hash = function (e, t) {
                                var n = l(s(new Uint8Array(e)));
                                return t ? h(n) : n;
                            }),
                            p
                        );
                    });
                }),
                i = function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                },
                r = (function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t;
                    };
                })(),
                o = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice,
                s = (function () {
                    function e(t) {
                        i(this, e), (this.file = t), (this.chunkSize = 2097152), (this.chunkCount = Math.ceil(this.file.size / this.chunkSize)), (this.chunkIndex = 0);
                    }
                    return (
                        r(e, null, [
                            {
                                key: "create",
                                value: function (t, n) {
                                    new e(t).create(n);
                                },
                            },
                        ]),
                        r(e, [
                            {
                                key: "create",
                                value: function (e) {
                                    var t = this;
                                    (this.callback = e),
                                        (this.md5Buffer = new n.ArrayBuffer()),
                                        (this.fileReader = new FileReader()),
                                        this.fileReader.addEventListener("load", function (e) {
                                            return t.fileReaderDidLoad(e);
                                        }),
                                        this.fileReader.addEventListener("error", function (e) {
                                            return t.fileReaderDidError(e);
                                        }),
                                        this.readNextChunk();
                                },
                            },
                            {
                                key: "fileReaderDidLoad",
                                value: function (e) {
                                    if ((this.md5Buffer.append(e.target.result), !this.readNextChunk())) {
                                        var t = this.md5Buffer.end(!0),
                                            n = btoa(t);
                                        this.callback(null, n);
                                    }
                                },
                            },
                            {
                                key: "fileReaderDidError",
                                value: function (e) {
                                    this.callback("Error reading " + this.file.name);
                                },
                            },
                            {
                                key: "readNextChunk",
                                value: function () {
                                    if (this.chunkIndex < this.chunkCount || (0 == this.chunkIndex && 0 == this.chunkCount)) {
                                        var e = this.chunkIndex * this.chunkSize,
                                            t = Math.min(e + this.chunkSize, this.file.size),
                                            n = o.call(this.file, e, t);
                                        return this.fileReader.readAsArrayBuffer(n), this.chunkIndex++, !0;
                                    }
                                    return !1;
                                },
                            },
                        ]),
                        e
                    );
                })();
            function a(e) {
                var t = c(document.head, 'meta[name="' + e + '"]');
                if (t) return t.getAttribute("content");
            }
            function l(e, t) {
                return "string" == typeof e && ((t = e), (e = document)), d(e.querySelectorAll(t));
            }
            function c(e, t) {
                return "string" == typeof e && ((t = e), (e = document)), e.querySelector(t);
            }
            function u(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = e.disabled,
                    r = n.bubbles,
                    o = n.cancelable,
                    s = n.detail,
                    a = document.createEvent("Event");
                a.initEvent(t, r || !0, o || !0), (a.detail = s || {});
                try {
                    (e.disabled = !1), e.dispatchEvent(a);
                } finally {
                    e.disabled = i;
                }
                return a;
            }
            function d(e) {
                return Array.isArray(e) ? e : Array.from ? Array.from(e) : [].slice.call(e);
            }
            var f = (function () {
                    function e(t, n, r) {
                        var o = this;
                        i(this, e),
                            (this.file = t),
                            (this.attributes = { filename: t.name, content_type: t.type || "application/octet-stream", byte_size: t.size, checksum: n }),
                            (this.xhr = new XMLHttpRequest()),
                            this.xhr.open("POST", r, !0),
                            (this.xhr.responseType = "json"),
                            this.xhr.setRequestHeader("Content-Type", "application/json"),
                            this.xhr.setRequestHeader("Accept", "application/json"),
                            this.xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                        var s = a("csrf-token");
                        void 0 != s && this.xhr.setRequestHeader("X-CSRF-Token", s),
                            this.xhr.addEventListener("load", function (e) {
                                return o.requestDidLoad(e);
                            }),
                            this.xhr.addEventListener("error", function (e) {
                                return o.requestDidError(e);
                            });
                    }
                    return (
                        r(e, [
                            {
                                key: "create",
                                value: function (e) {
                                    (this.callback = e), this.xhr.send(JSON.stringify({ blob: this.attributes }));
                                },
                            },
                            {
                                key: "requestDidLoad",
                                value: function (e) {
                                    if (this.status >= 200 && this.status < 300) {
                                        var t = this.response,
                                            n = t.direct_upload;
                                        delete t.direct_upload, (this.attributes = t), (this.directUploadData = n), this.callback(null, this.toJSON());
                                    } else this.requestDidError(e);
                                },
                            },
                            {
                                key: "requestDidError",
                                value: function (e) {
                                    this.callback('Error creating Blob for "' + this.file.name + '". Status: ' + this.status);
                                },
                            },
                            {
                                key: "toJSON",
                                value: function () {
                                    var e = {};
                                    for (var t in this.attributes) e[t] = this.attributes[t];
                                    return e;
                                },
                            },
                            {
                                key: "status",
                                get: function () {
                                    return this.xhr.status;
                                },
                            },
                            {
                                key: "response",
                                get: function () {
                                    var e = this.xhr,
                                        t = e.responseType,
                                        n = e.response;
                                    return "json" == t ? n : JSON.parse(n);
                                },
                            },
                        ]),
                        e
                    );
                })(),
                h = (function () {
                    function e(t) {
                        var n = this;
                        i(this, e), (this.blob = t), (this.file = t.file);
                        var r = t.directUploadData,
                            o = r.url,
                            s = r.headers;
                        for (var a in ((this.xhr = new XMLHttpRequest()), this.xhr.open("PUT", o, !0), (this.xhr.responseType = "text"), s)) this.xhr.setRequestHeader(a, s[a]);
                        this.xhr.addEventListener("load", function (e) {
                            return n.requestDidLoad(e);
                        }),
                            this.xhr.addEventListener("error", function (e) {
                                return n.requestDidError(e);
                            });
                    }
                    return (
                        r(e, [
                            {
                                key: "create",
                                value: function (e) {
                                    (this.callback = e), this.xhr.send(this.file.slice());
                                },
                            },
                            {
                                key: "requestDidLoad",
                                value: function (e) {
                                    var t = this.xhr,
                                        n = t.status,
                                        i = t.response;
                                    n >= 200 && n < 300 ? this.callback(null, i) : this.requestDidError(e);
                                },
                            },
                            {
                                key: "requestDidError",
                                value: function (e) {
                                    this.callback('Error storing "' + this.file.name + '". Status: ' + this.xhr.status);
                                },
                            },
                        ]),
                        e
                    );
                })(),
                p = 0,
                m = (function () {
                    function e(t, n, r) {
                        i(this, e), (this.id = ++p), (this.file = t), (this.url = n), (this.delegate = r);
                    }
                    return (
                        r(e, [
                            {
                                key: "create",
                                value: function (e) {
                                    var t = this;
                                    s.create(this.file, function (n, i) {
                                        if (n) e(n);
                                        else {
                                            var r = new f(t.file, i, t.url);
                                            g(t.delegate, "directUploadWillCreateBlobWithXHR", r.xhr),
                                                r.create(function (n) {
                                                    if (n) e(n);
                                                    else {
                                                        var i = new h(r);
                                                        g(t.delegate, "directUploadWillStoreFileWithXHR", i.xhr),
                                                            i.create(function (t) {
                                                                t ? e(t) : e(null, r.toJSON());
                                                            });
                                                    }
                                                });
                                        }
                                    });
                                },
                            },
                        ]),
                        e
                    );
                })();
            function g(e, t) {
                if (e && "function" == typeof e[t]) {
                    for (var n = arguments.length, i = Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++) i[r - 2] = arguments[r];
                    return e[t].apply(e, i);
                }
            }
            var v = (function () {
                    function e(t, n) {
                        i(this, e), (this.input = t), (this.file = n), (this.directUpload = new m(this.file, this.url, this)), this.dispatch("initialize");
                    }
                    return (
                        r(e, [
                            {
                                key: "start",
                                value: function (e) {
                                    var t = this,
                                        n = document.createElement("input");
                                    (n.type = "hidden"),
                                        (n.name = this.input.name),
                                        this.input.insertAdjacentElement("beforebegin", n),
                                        this.dispatch("start"),
                                        this.directUpload.create(function (i, r) {
                                            i ? (n.parentNode.removeChild(n), t.dispatchError(i)) : (n.value = r.signed_id), t.dispatch("end"), e(i);
                                        });
                                },
                            },
                            {
                                key: "uploadRequestDidProgress",
                                value: function (e) {
                                    var t = (e.loaded / e.total) * 100;
                                    t && this.dispatch("progress", { progress: t });
                                },
                            },
                            {
                                key: "dispatch",
                                value: function (e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    return (t.file = this.file), (t.id = this.directUpload.id), u(this.input, "direct-upload:" + e, { detail: t });
                                },
                            },
                            {
                                key: "dispatchError",
                                value: function (e) {
                                    this.dispatch("error", { error: e }).defaultPrevented || alert(e);
                                },
                            },
                            {
                                key: "directUploadWillCreateBlobWithXHR",
                                value: function (e) {
                                    this.dispatch("before-blob-request", { xhr: e });
                                },
                            },
                            {
                                key: "directUploadWillStoreFileWithXHR",
                                value: function (e) {
                                    var t = this;
                                    this.dispatch("before-storage-request", { xhr: e }),
                                        e.upload.addEventListener("progress", function (e) {
                                            return t.uploadRequestDidProgress(e);
                                        });
                                },
                            },
                            {
                                key: "url",
                                get: function () {
                                    return this.input.getAttribute("data-direct-upload-url");
                                },
                            },
                        ]),
                        e
                    );
                })(),
                y = "input[type=file][data-direct-upload-url]:not([disabled])",
                b = (function () {
                    function e(t) {
                        i(this, e),
                            (this.form = t),
                            (this.inputs = l(t, y).filter(function (e) {
                                return e.files.length;
                            }));
                    }
                    return (
                        r(e, [
                            {
                                key: "start",
                                value: function (e) {
                                    var t = this,
                                        n = this.createDirectUploadControllers(),
                                        i = function i() {
                                            var r = n.shift();
                                            r
                                                ? r.start(function (n) {
                                                      n ? (e(n), t.dispatch("end")) : i();
                                                  })
                                                : (e(), t.dispatch("end"));
                                        };
                                    this.dispatch("start"), i();
                                },
                            },
                            {
                                key: "createDirectUploadControllers",
                                value: function () {
                                    var e = [];
                                    return (
                                        this.inputs.forEach(function (t) {
                                            d(t.files).forEach(function (n) {
                                                var i = new v(t, n);
                                                e.push(i);
                                            });
                                        }),
                                        e
                                    );
                                },
                            },
                            {
                                key: "dispatch",
                                value: function (e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    return u(this.form, "direct-uploads:" + e, { detail: t });
                                },
                            },
                        ]),
                        e
                    );
                })(),
                _ = "data-direct-uploads-processing",
                w = new WeakMap(),
                x = !1;
            function E() {
                x || ((x = !0), document.addEventListener("click", S, !0), document.addEventListener("submit", T), document.addEventListener("ajax:before", C));
            }
            function S(e) {
                var t = e.target;
                ("INPUT" != t.tagName && "BUTTON" != t.tagName) || "submit" != t.type || !t.form || w.set(t.form, t);
            }
            function T(e) {
                k(e);
            }
            function C(e) {
                "FORM" == e.target.tagName && k(e);
            }
            function k(e) {
                var t = e.target;
                if (t.hasAttribute(_)) e.preventDefault();
                else {
                    var n = new b(t),
                        i = n.inputs;
                    i.length &&
                        (e.preventDefault(),
                        t.setAttribute(_, ""),
                        i.forEach(L),
                        n.start(function (e) {
                            t.removeAttribute(_), e ? i.forEach(D) : A(t);
                        }));
                }
            }
            function A(e) {
                var t = w.get(e) || c(e, "input[type=submit], button[type=submit]");
                if (t) {
                    var n = t.disabled;
                    (t.disabled = !1), t.focus(), t.click(), (t.disabled = n);
                } else ((t = document.createElement("input")).type = "submit"), (t.style.display = "none"), e.appendChild(t), t.click(), e.removeChild(t);
                w.delete(e);
            }
            function L(e) {
                e.disabled = !0;
            }
            function D(e) {
                e.disabled = !1;
            }
            function j() {
                window.ActiveStorage && E();
            }
            setTimeout(j, 1), (e.start = E), (e.DirectUpload = m), Object.defineProperty(e, "__esModule", { value: !0 });
        })(t);
    },
    function (e, t, n) {
        var i = n(16);
        i.keys().forEach(i);
    },
    function (e, t) {
        function n(e) {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        (n.keys = function () {
            return [];
        }),
            (n.resolve = n),
            (e.exports = n),
            (n.id = 16);
    },
    function (e, t, n) {
        "use strict";
    },
    function (e, t, n) {
        "use strict";
        var i = {};
        n.r(i),
            n.d(i, "top", function () {
                return r;
            }),
            n.d(i, "bottom", function () {
                return o;
            }),
            n.d(i, "right", function () {
                return s;
            }),
            n.d(i, "left", function () {
                return a;
            }),
            n.d(i, "auto", function () {
                return l;
            }),
            n.d(i, "basePlacements", function () {
                return c;
            }),
            n.d(i, "start", function () {
                return u;
            }),
            n.d(i, "end", function () {
                return d;
            }),
            n.d(i, "clippingParents", function () {
                return f;
            }),
            n.d(i, "viewport", function () {
                return h;
            }),
            n.d(i, "popper", function () {
                return p;
            }),
            n.d(i, "reference", function () {
                return m;
            }),
            n.d(i, "variationPlacements", function () {
                return g;
            }),
            n.d(i, "placements", function () {
                return v;
            }),
            n.d(i, "beforeRead", function () {
                return y;
            }),
            n.d(i, "read", function () {
                return b;
            }),
            n.d(i, "afterRead", function () {
                return _;
            }),
            n.d(i, "beforeMain", function () {
                return w;
            }),
            n.d(i, "main", function () {
                return x;
            }),
            n.d(i, "afterMain", function () {
                return E;
            }),
            n.d(i, "beforeWrite", function () {
                return S;
            }),
            n.d(i, "write", function () {
                return T;
            }),
            n.d(i, "afterWrite", function () {
                return C;
            }),
            n.d(i, "modifierPhases", function () {
                return k;
            }),
            n.d(i, "applyStyles", function () {
                return N;
            }),
            n.d(i, "arrow", function () {
                return G;
            }),
            n.d(i, "computeStyles", function () {
                return te;
            }),
            n.d(i, "eventListeners", function () {
                return ie;
            }),
            n.d(i, "flip", function () {
                return ye;
            }),
            n.d(i, "hide", function () {
                return we;
            }),
            n.d(i, "offset", function () {
                return xe;
            }),
            n.d(i, "popperOffsets", function () {
                return Ee;
            }),
            n.d(i, "preventOverflow", function () {
                return Se;
            }),
            n.d(i, "popperGenerator", function () {
                return Le;
            }),
            n.d(i, "detectOverflow", function () {
                return ve;
            }),
            n.d(i, "createPopperBase", function () {
                return De;
            }),
            n.d(i, "createPopper", function () {
                return je;
            }),
            n.d(i, "createPopperLite", function () {
                return Oe;
            });
        var r = "top",
            o = "bottom",
            s = "right",
            a = "left",
            l = "auto",
            c = [r, o, s, a],
            u = "start",
            d = "end",
            f = "clippingParents",
            h = "viewport",
            p = "popper",
            m = "reference",
            g = c.reduce(function (e, t) {
                return e.concat([t + "-" + u, t + "-" + d]);
            }, []),
            v = [].concat(c, [l]).reduce(function (e, t) {
                return e.concat([t, t + "-" + u, t + "-" + d]);
            }, []),
            y = "beforeRead",
            b = "read",
            _ = "afterRead",
            w = "beforeMain",
            x = "main",
            E = "afterMain",
            S = "beforeWrite",
            T = "write",
            C = "afterWrite",
            k = [y, b, _, w, x, E, S, T, C];
        function A(e) {
            return e ? (e.nodeName || "").toLowerCase() : null;
        }
        function L(e) {
            if (null == e) return window;
            if ("[object Window]" !== e.toString()) {
                var t = e.ownerDocument;
                return (t && t.defaultView) || window;
            }
            return e;
        }
        function D(e) {
            return e instanceof L(e).Element || e instanceof Element;
        }
        function j(e) {
            return e instanceof L(e).HTMLElement || e instanceof HTMLElement;
        }
        function O(e) {
            return "undefined" !== typeof ShadowRoot && (e instanceof L(e).ShadowRoot || e instanceof ShadowRoot);
        }
        var N = {
            name: "applyStyles",
            enabled: !0,
            phase: "write",
            fn: function (e) {
                var t = e.state;
                Object.keys(t.elements).forEach(function (e) {
                    var n = t.styles[e] || {},
                        i = t.attributes[e] || {},
                        r = t.elements[e];
                    j(r) &&
                        A(r) &&
                        (Object.assign(r.style, n),
                        Object.keys(i).forEach(function (e) {
                            var t = i[e];
                            !1 === t ? r.removeAttribute(e) : r.setAttribute(e, !0 === t ? "" : t);
                        }));
                });
            },
            effect: function (e) {
                var t = e.state,
                    n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
                return (
                    Object.assign(t.elements.popper.style, n.popper),
                    (t.styles = n),
                    t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                    function () {
                        Object.keys(t.elements).forEach(function (e) {
                            var i = t.elements[e],
                                r = t.attributes[e] || {},
                                o = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function (e, t) {
                                    return (e[t] = ""), e;
                                }, {});
                            j(i) &&
                                A(i) &&
                                (Object.assign(i.style, o),
                                Object.keys(r).forEach(function (e) {
                                    i.removeAttribute(e);
                                }));
                        });
                    }
                );
            },
            requires: ["computeStyles"],
        };
        function q(e) {
            return e.split("-")[0];
        }
        var I = Math.max,
            M = Math.min,
            P = Math.round;
        function H(e, t) {
            void 0 === t && (t = !1);
            var n = e.getBoundingClientRect(),
                i = 1,
                r = 1;
            if (j(e) && t) {
                var o = e.offsetHeight,
                    s = e.offsetWidth;
                s > 0 && (i = P(n.width) / s || 1), o > 0 && (r = P(n.height) / o || 1);
            }
            return { width: n.width / i, height: n.height / r, top: n.top / r, right: n.right / i, bottom: n.bottom / r, left: n.left / i, x: n.left / i, y: n.top / r };
        }
        function R(e) {
            var t = H(e),
                n = e.offsetWidth,
                i = e.offsetHeight;
            return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - i) <= 1 && (i = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: i };
        }
        function B(e, t) {
            var n = t.getRootNode && t.getRootNode();
            if (e.contains(t)) return !0;
            if (n && O(n)) {
                var i = t;
                do {
                    if (i && e.isSameNode(i)) return !0;
                    i = i.parentNode || i.host;
                } while (i);
            }
            return !1;
        }
        function W(e) {
            return L(e).getComputedStyle(e);
        }
        function F(e) {
            return ["table", "td", "th"].indexOf(A(e)) >= 0;
        }
        function $(e) {
            return ((D(e) ? e.ownerDocument : e.document) || window.document).documentElement;
        }
        function U(e) {
            return "html" === A(e) ? e : e.assignedSlot || e.parentNode || (O(e) ? e.host : null) || $(e);
        }
        function z(e) {
            return j(e) && "fixed" !== W(e).position ? e.offsetParent : null;
        }
        function X(e) {
            for (var t = L(e), n = z(e); n && F(n) && "static" === W(n).position; ) n = z(n);
            return n && ("html" === A(n) || ("body" === A(n) && "static" === W(n).position))
                ? t
                : n ||
                      (function (e) {
                          var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                          if (-1 !== navigator.userAgent.indexOf("Trident") && j(e) && "fixed" === W(e).position) return null;
                          var n = U(e);
                          for (O(n) && (n = n.host); j(n) && ["html", "body"].indexOf(A(n)) < 0; ) {
                              var i = W(n);
                              if (
                                  "none" !== i.transform ||
                                  "none" !== i.perspective ||
                                  "paint" === i.contain ||
                                  -1 !== ["transform", "perspective"].indexOf(i.willChange) ||
                                  (t && "filter" === i.willChange) ||
                                  (t && i.filter && "none" !== i.filter)
                              )
                                  return n;
                              n = n.parentNode;
                          }
                          return null;
                      })(e) ||
                      t;
        }
        function V(e) {
            return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
        }
        function Y(e, t, n) {
            return I(e, M(t, n));
        }
        function K(e) {
            return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
        }
        function Q(e, t) {
            return t.reduce(function (t, n) {
                return (t[n] = e), t;
            }, {});
        }
        var G = {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function (e) {
                var t,
                    n = e.state,
                    i = e.name,
                    l = e.options,
                    u = n.elements.arrow,
                    d = n.modifiersData.popperOffsets,
                    f = q(n.placement),
                    h = V(f),
                    p = [a, s].indexOf(f) >= 0 ? "height" : "width";
                if (u && d) {
                    var m = (function (e, t) {
                            return K("number" !== typeof (e = "function" === typeof e ? e(Object.assign({}, t.rects, { placement: t.placement })) : e) ? e : Q(e, c));
                        })(l.padding, n),
                        g = R(u),
                        v = "y" === h ? r : a,
                        y = "y" === h ? o : s,
                        b = n.rects.reference[p] + n.rects.reference[h] - d[h] - n.rects.popper[p],
                        _ = d[h] - n.rects.reference[h],
                        w = X(u),
                        x = w ? ("y" === h ? w.clientHeight || 0 : w.clientWidth || 0) : 0,
                        E = b / 2 - _ / 2,
                        S = m[v],
                        T = x - g[p] - m[y],
                        C = x / 2 - g[p] / 2 + E,
                        k = Y(S, C, T),
                        A = h;
                    n.modifiersData[i] = (((t = {})[A] = k), (t.centerOffset = k - C), t);
                }
            },
            effect: function (e) {
                var t = e.state,
                    n = e.options.element,
                    i = void 0 === n ? "[data-popper-arrow]" : n;
                null != i && ("string" !== typeof i || (i = t.elements.popper.querySelector(i))) && B(t.elements.popper, i) && (t.elements.arrow = i);
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"],
        };
        function J(e) {
            return e.split("-")[1];
        }
        var Z = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
        function ee(e) {
            var t,
                n = e.popper,
                i = e.popperRect,
                l = e.placement,
                c = e.variation,
                u = e.offsets,
                f = e.position,
                h = e.gpuAcceleration,
                p = e.adaptive,
                m = e.roundOffsets,
                g = e.isFixed,
                v = u.x,
                y = void 0 === v ? 0 : v,
                b = u.y,
                _ = void 0 === b ? 0 : b,
                w = "function" === typeof m ? m({ x: y, y: _ }) : { x: y, y: _ };
            (y = w.x), (_ = w.y);
            var x = u.hasOwnProperty("x"),
                E = u.hasOwnProperty("y"),
                S = a,
                T = r,
                C = window;
            if (p) {
                var k = X(n),
                    A = "clientHeight",
                    D = "clientWidth";
                if ((k === L(n) && "static" !== W((k = $(n))).position && "absolute" === f && ((A = "scrollHeight"), (D = "scrollWidth")), l === r || ((l === a || l === s) && c === d)))
                    (T = o), (_ -= (g && k === C && C.visualViewport ? C.visualViewport.height : k[A]) - i.height), (_ *= h ? 1 : -1);
                if (l === a || ((l === r || l === o) && c === d)) (S = s), (y -= (g && k === C && C.visualViewport ? C.visualViewport.width : k[D]) - i.width), (y *= h ? 1 : -1);
            }
            var j,
                O = Object.assign({ position: f }, p && Z),
                N =
                    !0 === m
                        ? (function (e) {
                              var t = e.x,
                                  n = e.y,
                                  i = window.devicePixelRatio || 1;
                              return { x: P(t * i) / i || 0, y: P(n * i) / i || 0 };
                          })({ x: y, y: _ })
                        : { x: y, y: _ };
            return (
                (y = N.x),
                (_ = N.y),
                h
                    ? Object.assign({}, O, (((j = {})[T] = E ? "0" : ""), (j[S] = x ? "0" : ""), (j.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + _ + "px)" : "translate3d(" + y + "px, " + _ + "px, 0)"), j))
                    : Object.assign({}, O, (((t = {})[T] = E ? _ + "px" : ""), (t[S] = x ? y + "px" : ""), (t.transform = ""), t))
            );
        }
        var te = {
                name: "computeStyles",
                enabled: !0,
                phase: "beforeWrite",
                fn: function (e) {
                    var t = e.state,
                        n = e.options,
                        i = n.gpuAcceleration,
                        r = void 0 === i || i,
                        o = n.adaptive,
                        s = void 0 === o || o,
                        a = n.roundOffsets,
                        l = void 0 === a || a,
                        c = { placement: q(t.placement), variation: J(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: "fixed" === t.options.strategy };
                    null != t.modifiersData.popperOffsets &&
                        (t.styles.popper = Object.assign({}, t.styles.popper, ee(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: l })))),
                        null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, ee(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))),
                        (t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement }));
                },
                data: {},
            },
            ne = { passive: !0 };
        var ie = {
                name: "eventListeners",
                enabled: !0,
                phase: "write",
                fn: function () {},
                effect: function (e) {
                    var t = e.state,
                        n = e.instance,
                        i = e.options,
                        r = i.scroll,
                        o = void 0 === r || r,
                        s = i.resize,
                        a = void 0 === s || s,
                        l = L(t.elements.popper),
                        c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                    return (
                        o &&
                            c.forEach(function (e) {
                                e.addEventListener("scroll", n.update, ne);
                            }),
                        a && l.addEventListener("resize", n.update, ne),
                        function () {
                            o &&
                                c.forEach(function (e) {
                                    e.removeEventListener("scroll", n.update, ne);
                                }),
                                a && l.removeEventListener("resize", n.update, ne);
                        }
                    );
                },
                data: {},
            },
            re = { left: "right", right: "left", bottom: "top", top: "bottom" };
        function oe(e) {
            return e.replace(/left|right|bottom|top/g, function (e) {
                return re[e];
            });
        }
        var se = { start: "end", end: "start" };
        function ae(e) {
            return e.replace(/start|end/g, function (e) {
                return se[e];
            });
        }
        function le(e) {
            var t = L(e);
            return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
        }
        function ce(e) {
            return H($(e)).left + le(e).scrollLeft;
        }
        function ue(e) {
            var t = W(e),
                n = t.overflow,
                i = t.overflowX,
                r = t.overflowY;
            return /auto|scroll|overlay|hidden/.test(n + r + i);
        }
        function de(e) {
            return ["html", "body", "#document"].indexOf(A(e)) >= 0 ? e.ownerDocument.body : j(e) && ue(e) ? e : de(U(e));
        }
        function fe(e, t) {
            var n;
            void 0 === t && (t = []);
            var i = de(e),
                r = i === (null == (n = e.ownerDocument) ? void 0 : n.body),
                o = L(i),
                s = r ? [o].concat(o.visualViewport || [], ue(i) ? i : []) : i,
                a = t.concat(s);
            return r ? a : a.concat(fe(U(s)));
        }
        function he(e) {
            return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
        }
        function pe(e, t) {
            return t === h
                ? he(
                      (function (e) {
                          var t = L(e),
                              n = $(e),
                              i = t.visualViewport,
                              r = n.clientWidth,
                              o = n.clientHeight,
                              s = 0,
                              a = 0;
                          return i && ((r = i.width), (o = i.height), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || ((s = i.offsetLeft), (a = i.offsetTop))), { width: r, height: o, x: s + ce(e), y: a };
                      })(e)
                  )
                : D(t)
                ? (function (e) {
                      var t = H(e);
                      return (
                          (t.top = t.top + e.clientTop),
                          (t.left = t.left + e.clientLeft),
                          (t.bottom = t.top + e.clientHeight),
                          (t.right = t.left + e.clientWidth),
                          (t.width = e.clientWidth),
                          (t.height = e.clientHeight),
                          (t.x = t.left),
                          (t.y = t.top),
                          t
                      );
                  })(t)
                : he(
                      (function (e) {
                          var t,
                              n = $(e),
                              i = le(e),
                              r = null == (t = e.ownerDocument) ? void 0 : t.body,
                              o = I(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
                              s = I(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
                              a = -i.scrollLeft + ce(e),
                              l = -i.scrollTop;
                          return "rtl" === W(r || n).direction && (a += I(n.clientWidth, r ? r.clientWidth : 0) - o), { width: o, height: s, x: a, y: l };
                      })($(e))
                  );
        }
        function me(e, t, n) {
            var i =
                    "clippingParents" === t
                        ? (function (e) {
                              var t = fe(U(e)),
                                  n = ["absolute", "fixed"].indexOf(W(e).position) >= 0 && j(e) ? X(e) : e;
                              return D(n)
                                  ? t.filter(function (e) {
                                        return D(e) && B(e, n) && "body" !== A(e);
                                    })
                                  : [];
                          })(e)
                        : [].concat(t),
                r = [].concat(i, [n]),
                o = r[0],
                s = r.reduce(function (t, n) {
                    var i = pe(e, n);
                    return (t.top = I(i.top, t.top)), (t.right = M(i.right, t.right)), (t.bottom = M(i.bottom, t.bottom)), (t.left = I(i.left, t.left)), t;
                }, pe(e, o));
            return (s.width = s.right - s.left), (s.height = s.bottom - s.top), (s.x = s.left), (s.y = s.top), s;
        }
        function ge(e) {
            var t,
                n = e.reference,
                i = e.element,
                l = e.placement,
                c = l ? q(l) : null,
                f = l ? J(l) : null,
                h = n.x + n.width / 2 - i.width / 2,
                p = n.y + n.height / 2 - i.height / 2;
            switch (c) {
                case r:
                    t = { x: h, y: n.y - i.height };
                    break;
                case o:
                    t = { x: h, y: n.y + n.height };
                    break;
                case s:
                    t = { x: n.x + n.width, y: p };
                    break;
                case a:
                    t = { x: n.x - i.width, y: p };
                    break;
                default:
                    t = { x: n.x, y: n.y };
            }
            var m = c ? V(c) : null;
            if (null != m) {
                var g = "y" === m ? "height" : "width";
                switch (f) {
                    case u:
                        t[m] = t[m] - (n[g] / 2 - i[g] / 2);
                        break;
                    case d:
                        t[m] = t[m] + (n[g] / 2 - i[g] / 2);
                }
            }
            return t;
        }
        function ve(e, t) {
            void 0 === t && (t = {});
            var n = t,
                i = n.placement,
                a = void 0 === i ? e.placement : i,
                l = n.boundary,
                u = void 0 === l ? f : l,
                d = n.rootBoundary,
                g = void 0 === d ? h : d,
                v = n.elementContext,
                y = void 0 === v ? p : v,
                b = n.altBoundary,
                _ = void 0 !== b && b,
                w = n.padding,
                x = void 0 === w ? 0 : w,
                E = K("number" !== typeof x ? x : Q(x, c)),
                S = y === p ? m : p,
                T = e.rects.popper,
                C = e.elements[_ ? S : y],
                k = me(D(C) ? C : C.contextElement || $(e.elements.popper), u, g),
                A = H(e.elements.reference),
                L = ge({ reference: A, element: T, strategy: "absolute", placement: a }),
                j = he(Object.assign({}, T, L)),
                O = y === p ? j : A,
                N = { top: k.top - O.top + E.top, bottom: O.bottom - k.bottom + E.bottom, left: k.left - O.left + E.left, right: O.right - k.right + E.right },
                q = e.modifiersData.offset;
            if (y === p && q) {
                var I = q[a];
                Object.keys(N).forEach(function (e) {
                    var t = [s, o].indexOf(e) >= 0 ? 1 : -1,
                        n = [r, o].indexOf(e) >= 0 ? "y" : "x";
                    N[e] += I[n] * t;
                });
            }
            return N;
        }
        var ye = {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function (e) {
                var t = e.state,
                    n = e.options,
                    i = e.name;
                if (!t.modifiersData[i]._skip) {
                    for (
                        var d = n.mainAxis,
                            f = void 0 === d || d,
                            h = n.altAxis,
                            p = void 0 === h || h,
                            m = n.fallbackPlacements,
                            y = n.padding,
                            b = n.boundary,
                            _ = n.rootBoundary,
                            w = n.altBoundary,
                            x = n.flipVariations,
                            E = void 0 === x || x,
                            S = n.allowedAutoPlacements,
                            T = t.options.placement,
                            C = q(T),
                            k =
                                m ||
                                (C === T || !E
                                    ? [oe(T)]
                                    : (function (e) {
                                          if (q(e) === l) return [];
                                          var t = oe(e);
                                          return [ae(e), t, ae(t)];
                                      })(T)),
                            A = [T].concat(k).reduce(function (e, n) {
                                return e.concat(
                                    q(n) === l
                                        ? (function (e, t) {
                                              void 0 === t && (t = {});
                                              var n = t,
                                                  i = n.placement,
                                                  r = n.boundary,
                                                  o = n.rootBoundary,
                                                  s = n.padding,
                                                  a = n.flipVariations,
                                                  l = n.allowedAutoPlacements,
                                                  u = void 0 === l ? v : l,
                                                  d = J(i),
                                                  f = d
                                                      ? a
                                                          ? g
                                                          : g.filter(function (e) {
                                                                return J(e) === d;
                                                            })
                                                      : c,
                                                  h = f.filter(function (e) {
                                                      return u.indexOf(e) >= 0;
                                                  });
                                              0 === h.length && (h = f);
                                              var p = h.reduce(function (t, n) {
                                                  return (t[n] = ve(e, { placement: n, boundary: r, rootBoundary: o, padding: s })[q(n)]), t;
                                              }, {});
                                              return Object.keys(p).sort(function (e, t) {
                                                  return p[e] - p[t];
                                              });
                                          })(t, { placement: n, boundary: b, rootBoundary: _, padding: y, flipVariations: E, allowedAutoPlacements: S })
                                        : n
                                );
                            }, []),
                            L = t.rects.reference,
                            D = t.rects.popper,
                            j = new Map(),
                            O = !0,
                            N = A[0],
                            I = 0;
                        I < A.length;
                        I++
                    ) {
                        var M = A[I],
                            P = q(M),
                            H = J(M) === u,
                            R = [r, o].indexOf(P) >= 0,
                            B = R ? "width" : "height",
                            W = ve(t, { placement: M, boundary: b, rootBoundary: _, altBoundary: w, padding: y }),
                            F = R ? (H ? s : a) : H ? o : r;
                        L[B] > D[B] && (F = oe(F));
                        var $ = oe(F),
                            U = [];
                        if (
                            (f && U.push(W[P] <= 0),
                            p && U.push(W[F] <= 0, W[$] <= 0),
                            U.every(function (e) {
                                return e;
                            }))
                        ) {
                            (N = M), (O = !1);
                            break;
                        }
                        j.set(M, U);
                    }
                    if (O)
                        for (
                            var z = function (e) {
                                    var t = A.find(function (t) {
                                        var n = j.get(t);
                                        if (n)
                                            return n.slice(0, e).every(function (e) {
                                                return e;
                                            });
                                    });
                                    if (t) return (N = t), "break";
                                },
                                X = E ? 3 : 1;
                            X > 0;
                            X--
                        ) {
                            if ("break" === z(X)) break;
                        }
                    t.placement !== N && ((t.modifiersData[i]._skip = !0), (t.placement = N), (t.reset = !0));
                }
            },
            requiresIfExists: ["offset"],
            data: { _skip: !1 },
        };
        function be(e, t, n) {
            return void 0 === n && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
        }
        function _e(e) {
            return [r, s, o, a].some(function (t) {
                return e[t] >= 0;
            });
        }
        var we = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function (e) {
                var t = e.state,
                    n = e.name,
                    i = t.rects.reference,
                    r = t.rects.popper,
                    o = t.modifiersData.preventOverflow,
                    s = ve(t, { elementContext: "reference" }),
                    a = ve(t, { altBoundary: !0 }),
                    l = be(s, i),
                    c = be(a, r, o),
                    u = _e(l),
                    d = _e(c);
                (t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: c, isReferenceHidden: u, hasPopperEscaped: d }),
                    (t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": u, "data-popper-escaped": d }));
            },
        };
        var xe = {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function (e) {
                var t = e.state,
                    n = e.options,
                    i = e.name,
                    o = n.offset,
                    l = void 0 === o ? [0, 0] : o,
                    c = v.reduce(function (e, n) {
                        return (
                            (e[n] = (function (e, t, n) {
                                var i = q(e),
                                    o = [a, r].indexOf(i) >= 0 ? -1 : 1,
                                    l = "function" === typeof n ? n(Object.assign({}, t, { placement: e })) : n,
                                    c = l[0],
                                    u = l[1];
                                return (c = c || 0), (u = (u || 0) * o), [a, s].indexOf(i) >= 0 ? { x: u, y: c } : { x: c, y: u };
                            })(n, t.rects, l)),
                            e
                        );
                    }, {}),
                    u = c[t.placement],
                    d = u.x,
                    f = u.y;
                null != t.modifiersData.popperOffsets && ((t.modifiersData.popperOffsets.x += d), (t.modifiersData.popperOffsets.y += f)), (t.modifiersData[i] = c);
            },
        };
        var Ee = {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function (e) {
                var t = e.state,
                    n = e.name;
                t.modifiersData[n] = ge({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
            },
            data: {},
        };
        var Se = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function (e) {
                var t = e.state,
                    n = e.options,
                    i = e.name,
                    l = n.mainAxis,
                    c = void 0 === l || l,
                    d = n.altAxis,
                    f = void 0 !== d && d,
                    h = n.boundary,
                    p = n.rootBoundary,
                    m = n.altBoundary,
                    g = n.padding,
                    v = n.tether,
                    y = void 0 === v || v,
                    b = n.tetherOffset,
                    _ = void 0 === b ? 0 : b,
                    w = ve(t, { boundary: h, rootBoundary: p, padding: g, altBoundary: m }),
                    x = q(t.placement),
                    E = J(t.placement),
                    S = !E,
                    T = V(x),
                    C = "x" === T ? "y" : "x",
                    k = t.modifiersData.popperOffsets,
                    A = t.rects.reference,
                    L = t.rects.popper,
                    D = "function" === typeof _ ? _(Object.assign({}, t.rects, { placement: t.placement })) : _,
                    j = "number" === typeof D ? { mainAxis: D, altAxis: D } : Object.assign({ mainAxis: 0, altAxis: 0 }, D),
                    O = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                    N = { x: 0, y: 0 };
                if (k) {
                    if (c) {
                        var P,
                            H = "y" === T ? r : a,
                            B = "y" === T ? o : s,
                            W = "y" === T ? "height" : "width",
                            F = k[T],
                            $ = F + w[H],
                            U = F - w[B],
                            z = y ? -L[W] / 2 : 0,
                            K = E === u ? A[W] : L[W],
                            Q = E === u ? -L[W] : -A[W],
                            G = t.elements.arrow,
                            Z = y && G ? R(G) : { width: 0, height: 0 },
                            ee = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 },
                            te = ee[H],
                            ne = ee[B],
                            ie = Y(0, A[W], Z[W]),
                            re = S ? A[W] / 2 - z - ie - te - j.mainAxis : K - ie - te - j.mainAxis,
                            oe = S ? -A[W] / 2 + z + ie + ne + j.mainAxis : Q + ie + ne + j.mainAxis,
                            se = t.elements.arrow && X(t.elements.arrow),
                            ae = se ? ("y" === T ? se.clientTop || 0 : se.clientLeft || 0) : 0,
                            le = null != (P = null == O ? void 0 : O[T]) ? P : 0,
                            ce = F + oe - le,
                            ue = Y(y ? M($, F + re - le - ae) : $, F, y ? I(U, ce) : U);
                        (k[T] = ue), (N[T] = ue - F);
                    }
                    if (f) {
                        var de,
                            fe = "x" === T ? r : a,
                            he = "x" === T ? o : s,
                            pe = k[C],
                            me = "y" === C ? "height" : "width",
                            ge = pe + w[fe],
                            ye = pe - w[he],
                            be = -1 !== [r, a].indexOf(x),
                            _e = null != (de = null == O ? void 0 : O[C]) ? de : 0,
                            we = be ? ge : pe - A[me] - L[me] - _e + j.altAxis,
                            xe = be ? pe + A[me] + L[me] - _e - j.altAxis : ye,
                            Ee =
                                y && be
                                    ? (function (e, t, n) {
                                          var i = Y(e, t, n);
                                          return i > n ? n : i;
                                      })(we, pe, xe)
                                    : Y(y ? we : ge, pe, y ? xe : ye);
                        (k[C] = Ee), (N[C] = Ee - pe);
                    }
                    t.modifiersData[i] = N;
                }
            },
            requiresIfExists: ["offset"],
        };
        function Te(e, t, n) {
            void 0 === n && (n = !1);
            var i,
                r,
                o = j(t),
                s =
                    j(t) &&
                    (function (e) {
                        var t = e.getBoundingClientRect(),
                            n = P(t.width) / e.offsetWidth || 1,
                            i = P(t.height) / e.offsetHeight || 1;
                        return 1 !== n || 1 !== i;
                    })(t),
                a = $(t),
                l = H(e, s),
                c = { scrollLeft: 0, scrollTop: 0 },
                u = { x: 0, y: 0 };
            return (
                (o || (!o && !n)) &&
                    (("body" !== A(t) || ue(a)) && (c = (i = t) !== L(i) && j(i) ? { scrollLeft: (r = i).scrollLeft, scrollTop: r.scrollTop } : le(i)), j(t) ? (((u = H(t, !0)).x += t.clientLeft), (u.y += t.clientTop)) : a && (u.x = ce(a))),
                { x: l.left + c.scrollLeft - u.x, y: l.top + c.scrollTop - u.y, width: l.width, height: l.height }
            );
        }
        function Ce(e) {
            var t = new Map(),
                n = new Set(),
                i = [];
            function r(e) {
                n.add(e.name),
                    [].concat(e.requires || [], e.requiresIfExists || []).forEach(function (e) {
                        if (!n.has(e)) {
                            var i = t.get(e);
                            i && r(i);
                        }
                    }),
                    i.push(e);
            }
            return (
                e.forEach(function (e) {
                    t.set(e.name, e);
                }),
                e.forEach(function (e) {
                    n.has(e.name) || r(e);
                }),
                i
            );
        }
        var ke = { placement: "bottom", modifiers: [], strategy: "absolute" };
        function Ae() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return !t.some(function (e) {
                return !(e && "function" === typeof e.getBoundingClientRect);
            });
        }
        function Le(e) {
            void 0 === e && (e = {});
            var t = e,
                n = t.defaultModifiers,
                i = void 0 === n ? [] : n,
                r = t.defaultOptions,
                o = void 0 === r ? ke : r;
            return function (e, t, n) {
                void 0 === n && (n = o);
                var r,
                    s,
                    a = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, ke, o), modifiersData: {}, elements: { reference: e, popper: t }, attributes: {}, styles: {} },
                    l = [],
                    c = !1,
                    u = {
                        state: a,
                        setOptions: function (n) {
                            var r = "function" === typeof n ? n(a.options) : n;
                            d(), (a.options = Object.assign({}, o, a.options, r)), (a.scrollParents = { reference: D(e) ? fe(e) : e.contextElement ? fe(e.contextElement) : [], popper: fe(t) });
                            var s = (function (e) {
                                var t = Ce(e);
                                return k.reduce(function (e, n) {
                                    return e.concat(
                                        t.filter(function (e) {
                                            return e.phase === n;
                                        })
                                    );
                                }, []);
                            })(
                                (function (e) {
                                    var t = e.reduce(function (e, t) {
                                        var n = e[t.name];
                                        return (e[t.name] = n ? Object.assign({}, n, t, { options: Object.assign({}, n.options, t.options), data: Object.assign({}, n.data, t.data) }) : t), e;
                                    }, {});
                                    return Object.keys(t).map(function (e) {
                                        return t[e];
                                    });
                                })([].concat(i, a.options.modifiers))
                            );
                            return (
                                (a.orderedModifiers = s.filter(function (e) {
                                    return e.enabled;
                                })),
                                a.orderedModifiers.forEach(function (e) {
                                    var t = e.name,
                                        n = e.options,
                                        i = void 0 === n ? {} : n,
                                        r = e.effect;
                                    if ("function" === typeof r) {
                                        var o = r({ state: a, name: t, instance: u, options: i }),
                                            s = function () {};
                                        l.push(o || s);
                                    }
                                }),
                                u.update()
                            );
                        },
                        forceUpdate: function () {
                            if (!c) {
                                var e = a.elements,
                                    t = e.reference,
                                    n = e.popper;
                                if (Ae(t, n)) {
                                    (a.rects = { reference: Te(t, X(n), "fixed" === a.options.strategy), popper: R(n) }),
                                        (a.reset = !1),
                                        (a.placement = a.options.placement),
                                        a.orderedModifiers.forEach(function (e) {
                                            return (a.modifiersData[e.name] = Object.assign({}, e.data));
                                        });
                                    for (var i = 0; i < a.orderedModifiers.length; i++)
                                        if (!0 !== a.reset) {
                                            var r = a.orderedModifiers[i],
                                                o = r.fn,
                                                s = r.options,
                                                l = void 0 === s ? {} : s,
                                                d = r.name;
                                            "function" === typeof o && (a = o({ state: a, options: l, name: d, instance: u }) || a);
                                        } else (a.reset = !1), (i = -1);
                                }
                            }
                        },
                        update:
                            ((r = function () {
                                return new Promise(function (e) {
                                    u.forceUpdate(), e(a);
                                });
                            }),
                            function () {
                                return (
                                    s ||
                                        (s = new Promise(function (e) {
                                            Promise.resolve().then(function () {
                                                (s = void 0), e(r());
                                            });
                                        })),
                                    s
                                );
                            }),
                        destroy: function () {
                            d(), (c = !0);
                        },
                    };
                if (!Ae(e, t)) return u;
                function d() {
                    l.forEach(function (e) {
                        return e();
                    }),
                        (l = []);
                }
                return (
                    u.setOptions(n).then(function (e) {
                        !c && n.onFirstUpdate && n.onFirstUpdate(e);
                    }),
                    u
                );
            };
        }
        var De = Le(),
            je = Le({ defaultModifiers: [ie, Ee, te, N, xe, ye, Se, G, we] }),
            Oe = Le({ defaultModifiers: [ie, Ee, te, N] });
        const Ne = "transitionend",
            qe = (e) => {
                let t = e.getAttribute("data-bs-target");
                if (!t || "#" === t) {
                    let n = e.getAttribute("href");
                    if (!n || (!n.includes("#") && !n.startsWith("."))) return null;
                    n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`), (t = n && "#" !== n ? n.trim() : null);
                }
                return t;
            },
            Ie = (e) => {
                const t = qe(e);
                return t && document.querySelector(t) ? t : null;
            },
            Me = (e) => {
                const t = qe(e);
                return t ? document.querySelector(t) : null;
            },
            Pe = (e) => {
                e.dispatchEvent(new Event(Ne));
            },
            He = (e) => !(!e || "object" !== typeof e) && ("undefined" !== typeof e.jquery && (e = e[0]), "undefined" !== typeof e.nodeType),
            Re = (e) => (He(e) ? (e.jquery ? e[0] : e) : "string" === typeof e && e.length > 0 ? document.querySelector(e) : null),
            Be = (e, t, n) => {
                Object.keys(n).forEach((i) => {
                    const r = n[i],
                        o = t[i],
                        s =
                            o && He(o)
                                ? "element"
                                : null === (a = o) || void 0 === a
                                ? `${a}`
                                : {}.toString
                                      .call(a)
                                      .match(/\s([a-z]+)/i)[1]
                                      .toLowerCase();
                    var a;
                    if (!new RegExp(r).test(s)) throw new TypeError(`${e.toUpperCase()}: Option "${i}" provided type "${s}" but expected type "${r}".`);
                });
            },
            We = (e) => !(!He(e) || 0 === e.getClientRects().length) && "visible" === getComputedStyle(e).getPropertyValue("visibility"),
            Fe = (e) => !e || e.nodeType !== Node.ELEMENT_NODE || !!e.classList.contains("disabled") || ("undefined" !== typeof e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled")),
            $e = (e) => {
                if (!document.documentElement.attachShadow) return null;
                if ("function" === typeof e.getRootNode) {
                    const t = e.getRootNode();
                    return t instanceof ShadowRoot ? t : null;
                }
                return e instanceof ShadowRoot ? e : e.parentNode ? $e(e.parentNode) : null;
            },
            Ue = () => {},
            ze = (e) => {
                e.offsetHeight;
            },
            Xe = () => {
                const { jQuery: e } = window;
                return e && !document.body.hasAttribute("data-bs-no-jquery") ? e : null;
            },
            Ve = [],
            Ye = () => "rtl" === document.documentElement.dir,
            Ke = (e) => {
                var t;
                (t = () => {
                    const t = Xe();
                    if (t) {
                        const n = e.NAME,
                            i = t.fn[n];
                        (t.fn[n] = e.jQueryInterface), (t.fn[n].Constructor = e), (t.fn[n].noConflict = () => ((t.fn[n] = i), e.jQueryInterface));
                    }
                }),
                    "loading" === document.readyState
                        ? (Ve.length ||
                              document.addEventListener("DOMContentLoaded", () => {
                                  Ve.forEach((e) => e());
                              }),
                          Ve.push(t))
                        : t();
            },
            Qe = (e) => {
                "function" === typeof e && e();
            },
            Ge = (e, t, n = !0) => {
                if (!n) return void Qe(e);
                const i =
                    ((e) => {
                        if (!e) return 0;
                        let { transitionDuration: t, transitionDelay: n } = window.getComputedStyle(e);
                        const i = Number.parseFloat(t),
                            r = Number.parseFloat(n);
                        return i || r ? ((t = t.split(",")[0]), (n = n.split(",")[0]), 1e3 * (Number.parseFloat(t) + Number.parseFloat(n))) : 0;
                    })(t) + 5;
                let r = !1;
                const o = ({ target: n }) => {
                    n === t && ((r = !0), t.removeEventListener(Ne, o), Qe(e));
                };
                t.addEventListener(Ne, o),
                    setTimeout(() => {
                        r || Pe(t);
                    }, i);
            },
            Je = (e, t, n, i) => {
                let r = e.indexOf(t);
                if (-1 === r) return e[!n && i ? e.length - 1 : 0];
                const o = e.length;
                return (r += n ? 1 : -1), i && (r = (r + o) % o), e[Math.max(0, Math.min(r, o - 1))];
            },
            Ze = /[^.]*(?=\..*)\.|.*/,
            et = /\..*/,
            tt = /::\d+$/,
            nt = {};
        let it = 1;
        const rt = { mouseenter: "mouseover", mouseleave: "mouseout" },
            ot = /^(mouseenter|mouseleave)/i,
            st = new Set([
                "click",
                "dblclick",
                "mouseup",
                "mousedown",
                "contextmenu",
                "mousewheel",
                "DOMMouseScroll",
                "mouseover",
                "mouseout",
                "mousemove",
                "selectstart",
                "selectend",
                "keydown",
                "keypress",
                "keyup",
                "orientationchange",
                "touchstart",
                "touchmove",
                "touchend",
                "touchcancel",
                "pointerdown",
                "pointermove",
                "pointerup",
                "pointerleave",
                "pointercancel",
                "gesturestart",
                "gesturechange",
                "gestureend",
                "focus",
                "blur",
                "change",
                "reset",
                "select",
                "submit",
                "focusin",
                "focusout",
                "load",
                "unload",
                "beforeunload",
                "resize",
                "move",
                "DOMContentLoaded",
                "readystatechange",
                "error",
                "abort",
                "scroll",
            ]);
        function at(e, t) {
            return (t && `${t}::${it++}`) || e.uidEvent || it++;
        }
        function lt(e) {
            const t = at(e);
            return (e.uidEvent = t), (nt[t] = nt[t] || {}), nt[t];
        }
        function ct(e, t, n = null) {
            const i = Object.keys(e);
            for (let r = 0, o = i.length; r < o; r++) {
                const o = e[i[r]];
                if (o.originalHandler === t && o.delegationSelector === n) return o;
            }
            return null;
        }
        function ut(e, t, n) {
            const i = "string" === typeof t,
                r = i ? n : t;
            let o = ht(e);
            return st.has(o) || (o = e), [i, r, o];
        }
        function dt(e, t, n, i, r) {
            if ("string" !== typeof t || !e) return;
            if ((n || ((n = i), (i = null)), ot.test(t))) {
                const e = (e) =>
                    function (t) {
                        if (!t.relatedTarget || (t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget))) return e.call(this, t);
                    };
                i ? (i = e(i)) : (n = e(n));
            }
            const [o, s, a] = ut(t, n, i),
                l = lt(e),
                c = l[a] || (l[a] = {}),
                u = ct(c, s, o ? n : null);
            if (u) return void (u.oneOff = u.oneOff && r);
            const d = at(s, t.replace(Ze, "")),
                f = o
                    ? (function (e, t, n) {
                          return function i(r) {
                              const o = e.querySelectorAll(t);
                              for (let { target: s } = r; s && s !== this; s = s.parentNode) for (let a = o.length; a--; ) if (o[a] === s) return (r.delegateTarget = s), i.oneOff && pt.off(e, r.type, t, n), n.apply(s, [r]);
                              return null;
                          };
                      })(e, n, i)
                    : (function (e, t) {
                          return function n(i) {
                              return (i.delegateTarget = e), n.oneOff && pt.off(e, i.type, t), t.apply(e, [i]);
                          };
                      })(e, n);
            (f.delegationSelector = o ? n : null), (f.originalHandler = s), (f.oneOff = r), (f.uidEvent = d), (c[d] = f), e.addEventListener(a, f, o);
        }
        function ft(e, t, n, i, r) {
            const o = ct(t[n], i, r);
            o && (e.removeEventListener(n, o, Boolean(r)), delete t[n][o.uidEvent]);
        }
        function ht(e) {
            return (e = e.replace(et, "")), rt[e] || e;
        }
        const pt = {
                on(e, t, n, i) {
                    dt(e, t, n, i, !1);
                },
                one(e, t, n, i) {
                    dt(e, t, n, i, !0);
                },
                off(e, t, n, i) {
                    if ("string" !== typeof t || !e) return;
                    const [r, o, s] = ut(t, n, i),
                        a = s !== t,
                        l = lt(e),
                        c = t.startsWith(".");
                    if ("undefined" !== typeof o) {
                        if (!l || !l[s]) return;
                        return void ft(e, l, s, o, r ? n : null);
                    }
                    c &&
                        Object.keys(l).forEach((n) => {
                            !(function (e, t, n, i) {
                                const r = t[n] || {};
                                Object.keys(r).forEach((o) => {
                                    if (o.includes(i)) {
                                        const i = r[o];
                                        ft(e, t, n, i.originalHandler, i.delegationSelector);
                                    }
                                });
                            })(e, l, n, t.slice(1));
                        });
                    const u = l[s] || {};
                    Object.keys(u).forEach((n) => {
                        const i = n.replace(tt, "");
                        if (!a || t.includes(i)) {
                            const t = u[n];
                            ft(e, l, s, t.originalHandler, t.delegationSelector);
                        }
                    });
                },
                trigger(e, t, n) {
                    if ("string" !== typeof t || !e) return null;
                    const i = Xe(),
                        r = ht(t),
                        o = t !== r,
                        s = st.has(r);
                    let a,
                        l = !0,
                        c = !0,
                        u = !1,
                        d = null;
                    return (
                        o && i && ((a = i.Event(t, n)), i(e).trigger(a), (l = !a.isPropagationStopped()), (c = !a.isImmediatePropagationStopped()), (u = a.isDefaultPrevented())),
                        s ? ((d = document.createEvent("HTMLEvents")), d.initEvent(r, l, !0)) : (d = new CustomEvent(t, { bubbles: l, cancelable: !0 })),
                        "undefined" !== typeof n &&
                            Object.keys(n).forEach((e) => {
                                Object.defineProperty(d, e, { get: () => n[e] });
                            }),
                        u && d.preventDefault(),
                        c && e.dispatchEvent(d),
                        d.defaultPrevented && "undefined" !== typeof a && a.preventDefault(),
                        d
                    );
                },
            },
            mt = new Map(),
            gt = {
                set(e, t, n) {
                    mt.has(e) || mt.set(e, new Map());
                    const i = mt.get(e);
                    i.has(t) || 0 === i.size ? i.set(t, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);
                },
                get: (e, t) => (mt.has(e) && mt.get(e).get(t)) || null,
                remove(e, t) {
                    if (!mt.has(e)) return;
                    const n = mt.get(e);
                    n.delete(t), 0 === n.size && mt.delete(e);
                },
            };
        class vt {
            constructor(e) {
                (e = Re(e)) && ((this._element = e), gt.set(this._element, this.constructor.DATA_KEY, this));
            }
            dispose() {
                gt.remove(this._element, this.constructor.DATA_KEY),
                    pt.off(this._element, this.constructor.EVENT_KEY),
                    Object.getOwnPropertyNames(this).forEach((e) => {
                        this[e] = null;
                    });
            }
            _queueCallback(e, t, n = !0) {
                Ge(e, t, n);
            }
            static getInstance(e) {
                return gt.get(Re(e), this.DATA_KEY);
            }
            static getOrCreateInstance(e, t = {}) {
                return this.getInstance(e) || new this(e, "object" === typeof t ? t : null);
            }
            static get VERSION() {
                return "5.1.3";
            }
            static get NAME() {
                throw new Error('You have to implement the static method "NAME", for each component!');
            }
            static get DATA_KEY() {
                return `bs.${this.NAME}`;
            }
            static get EVENT_KEY() {
                return `.${this.DATA_KEY}`;
            }
        }
        const yt = (e, t = "hide") => {
            const n = `click.dismiss${e.EVENT_KEY}`,
                i = e.NAME;
            pt.on(document, n, `[data-bs-dismiss="${i}"]`, function (n) {
                if ((["A", "AREA"].includes(this.tagName) && n.preventDefault(), Fe(this))) return;
                const r = Me(this) || this.closest(`.${i}`);
                e.getOrCreateInstance(r)[t]();
            });
        };
        class bt extends vt {
            static get NAME() {
                return "alert";
            }
            close() {
                if (pt.trigger(this._element, "close.bs.alert").defaultPrevented) return;
                this._element.classList.remove("show");
                const e = this._element.classList.contains("fade");
                this._queueCallback(() => this._destroyElement(), this._element, e);
            }
            _destroyElement() {
                this._element.remove(), pt.trigger(this._element, "closed.bs.alert"), this.dispose();
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    const t = bt.getOrCreateInstance(this);
                    if ("string" === typeof e) {
                        if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                        t[e](this);
                    }
                });
            }
        }
        yt(bt, "close"), Ke(bt);
        const _t = '[data-bs-toggle="button"]';
        class wt extends vt {
            static get NAME() {
                return "button";
            }
            toggle() {
                this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    const t = wt.getOrCreateInstance(this);
                    "toggle" === e && t[e]();
                });
            }
        }
        function xt(e) {
            return "true" === e || ("false" !== e && (e === Number(e).toString() ? Number(e) : "" === e || "null" === e ? null : e));
        }
        function Et(e) {
            return e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
        }
        pt.on(document, "click.bs.button.data-api", _t, (e) => {
            e.preventDefault();
            const t = e.target.closest(_t);
            wt.getOrCreateInstance(t).toggle();
        }),
            Ke(wt);
        const St = {
                setDataAttribute(e, t, n) {
                    e.setAttribute(`data-bs-${Et(t)}`, n);
                },
                removeDataAttribute(e, t) {
                    e.removeAttribute(`data-bs-${Et(t)}`);
                },
                getDataAttributes(e) {
                    if (!e) return {};
                    const t = {};
                    return (
                        Object.keys(e.dataset)
                            .filter((e) => e.startsWith("bs"))
                            .forEach((n) => {
                                let i = n.replace(/^bs/, "");
                                (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)), (t[i] = xt(e.dataset[n]));
                            }),
                        t
                    );
                },
                getDataAttribute: (e, t) => xt(e.getAttribute(`data-bs-${Et(t)}`)),
                offset(e) {
                    const t = e.getBoundingClientRect();
                    return { top: t.top + window.pageYOffset, left: t.left + window.pageXOffset };
                },
                position: (e) => ({ top: e.offsetTop, left: e.offsetLeft }),
            },
            Tt = {
                find: (e, t = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(t, e)),
                findOne: (e, t = document.documentElement) => Element.prototype.querySelector.call(t, e),
                children: (e, t) => [].concat(...e.children).filter((e) => e.matches(t)),
                parents(e, t) {
                    const n = [];
                    let i = e.parentNode;
                    for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType; ) i.matches(t) && n.push(i), (i = i.parentNode);
                    return n;
                },
                prev(e, t) {
                    let n = e.previousElementSibling;
                    for (; n; ) {
                        if (n.matches(t)) return [n];
                        n = n.previousElementSibling;
                    }
                    return [];
                },
                next(e, t) {
                    let n = e.nextElementSibling;
                    for (; n; ) {
                        if (n.matches(t)) return [n];
                        n = n.nextElementSibling;
                    }
                    return [];
                },
                focusableChildren(e) {
                    const t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((e) => `${e}:not([tabindex^="-"])`).join(", ");
                    return this.find(t, e).filter((e) => !Fe(e) && We(e));
                },
            },
            Ct = "carousel",
            kt = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
            At = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
            Lt = "next",
            Dt = "prev",
            jt = "left",
            Ot = "right",
            Nt = { ArrowLeft: Ot, ArrowRight: jt },
            qt = "slid.bs.carousel",
            It = "active",
            Mt = ".active.carousel-item";
        class Pt extends vt {
            constructor(e, t) {
                super(e),
                    (this._items = null),
                    (this._interval = null),
                    (this._activeElement = null),
                    (this._isPaused = !1),
                    (this._isSliding = !1),
                    (this.touchTimeout = null),
                    (this.touchStartX = 0),
                    (this.touchDeltaX = 0),
                    (this._config = this._getConfig(t)),
                    (this._indicatorsElement = Tt.findOne(".carousel-indicators", this._element)),
                    (this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0),
                    (this._pointerEvent = Boolean(window.PointerEvent)),
                    this._addEventListeners();
            }
            static get Default() {
                return kt;
            }
            static get NAME() {
                return Ct;
            }
            next() {
                this._slide(Lt);
            }
            nextWhenVisible() {
                !document.hidden && We(this._element) && this.next();
            }
            prev() {
                this._slide(Dt);
            }
            pause(e) {
                e || (this._isPaused = !0), Tt.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (Pe(this._element), this.cycle(!0)), clearInterval(this._interval), (this._interval = null);
            }
            cycle(e) {
                e || (this._isPaused = !1),
                    this._interval && (clearInterval(this._interval), (this._interval = null)),
                    this._config && this._config.interval && !this._isPaused && (this._updateInterval(), (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)));
            }
            to(e) {
                this._activeElement = Tt.findOne(Mt, this._element);
                const t = this._getItemIndex(this._activeElement);
                if (e > this._items.length - 1 || e < 0) return;
                if (this._isSliding) return void pt.one(this._element, qt, () => this.to(e));
                if (t === e) return this.pause(), void this.cycle();
                const n = e > t ? Lt : Dt;
                this._slide(n, this._items[e]);
            }
            _getConfig(e) {
                return (e = { ...kt, ...St.getDataAttributes(this._element), ...("object" === typeof e ? e : {}) }), Be(Ct, e, At), e;
            }
            _handleSwipe() {
                const e = Math.abs(this.touchDeltaX);
                if (e <= 40) return;
                const t = e / this.touchDeltaX;
                (this.touchDeltaX = 0), t && this._slide(t > 0 ? Ot : jt);
            }
            _addEventListeners() {
                this._config.keyboard && pt.on(this._element, "keydown.bs.carousel", (e) => this._keydown(e)),
                    "hover" === this._config.pause && (pt.on(this._element, "mouseenter.bs.carousel", (e) => this.pause(e)), pt.on(this._element, "mouseleave.bs.carousel", (e) => this.cycle(e))),
                    this._config.touch && this._touchSupported && this._addTouchEventListeners();
            }
            _addTouchEventListeners() {
                const e = (e) => this._pointerEvent && ("pen" === e.pointerType || "touch" === e.pointerType),
                    t = (t) => {
                        e(t) ? (this.touchStartX = t.clientX) : this._pointerEvent || (this.touchStartX = t.touches[0].clientX);
                    },
                    n = (e) => {
                        this.touchDeltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this.touchStartX;
                    },
                    i = (t) => {
                        e(t) && (this.touchDeltaX = t.clientX - this.touchStartX),
                            this._handleSwipe(),
                            "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), (this.touchTimeout = setTimeout((e) => this.cycle(e), 500 + this._config.interval)));
                    };
                Tt.find(".carousel-item img", this._element).forEach((e) => {
                    pt.on(e, "dragstart.bs.carousel", (e) => e.preventDefault());
                }),
                    this._pointerEvent
                        ? (pt.on(this._element, "pointerdown.bs.carousel", (e) => t(e)), pt.on(this._element, "pointerup.bs.carousel", (e) => i(e)), this._element.classList.add("pointer-event"))
                        : (pt.on(this._element, "touchstart.bs.carousel", (e) => t(e)), pt.on(this._element, "touchmove.bs.carousel", (e) => n(e)), pt.on(this._element, "touchend.bs.carousel", (e) => i(e)));
            }
            _keydown(e) {
                if (/input|textarea/i.test(e.target.tagName)) return;
                const t = Nt[e.key];
                t && (e.preventDefault(), this._slide(t));
            }
            _getItemIndex(e) {
                return (this._items = e && e.parentNode ? Tt.find(".carousel-item", e.parentNode) : []), this._items.indexOf(e);
            }
            _getItemByOrder(e, t) {
                const n = e === Lt;
                return Je(this._items, t, n, this._config.wrap);
            }
            _triggerSlideEvent(e, t) {
                const n = this._getItemIndex(e),
                    i = this._getItemIndex(Tt.findOne(Mt, this._element));
                return pt.trigger(this._element, "slide.bs.carousel", { relatedTarget: e, direction: t, from: i, to: n });
            }
            _setActiveIndicatorElement(e) {
                if (this._indicatorsElement) {
                    const t = Tt.findOne(".active", this._indicatorsElement);
                    t.classList.remove(It), t.removeAttribute("aria-current");
                    const n = Tt.find("[data-bs-target]", this._indicatorsElement);
                    for (let i = 0; i < n.length; i++)
                        if (Number.parseInt(n[i].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(e)) {
                            n[i].classList.add(It), n[i].setAttribute("aria-current", "true");
                            break;
                        }
                }
            }
            _updateInterval() {
                const e = this._activeElement || Tt.findOne(Mt, this._element);
                if (!e) return;
                const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
                t ? ((this._config.defaultInterval = this._config.defaultInterval || this._config.interval), (this._config.interval = t)) : (this._config.interval = this._config.defaultInterval || this._config.interval);
            }
            _slide(e, t) {
                const n = this._directionToOrder(e),
                    i = Tt.findOne(Mt, this._element),
                    r = this._getItemIndex(i),
                    o = t || this._getItemByOrder(n, i),
                    s = this._getItemIndex(o),
                    a = Boolean(this._interval),
                    l = n === Lt,
                    c = l ? "carousel-item-start" : "carousel-item-end",
                    u = l ? "carousel-item-next" : "carousel-item-prev",
                    d = this._orderToDirection(n);
                if (o && o.classList.contains(It)) return void (this._isSliding = !1);
                if (this._isSliding) return;
                if (this._triggerSlideEvent(o, d).defaultPrevented) return;
                if (!i || !o) return;
                (this._isSliding = !0), a && this.pause(), this._setActiveIndicatorElement(o), (this._activeElement = o);
                const f = () => {
                    pt.trigger(this._element, qt, { relatedTarget: o, direction: d, from: r, to: s });
                };
                if (this._element.classList.contains("slide")) {
                    o.classList.add(u), ze(o), i.classList.add(c), o.classList.add(c);
                    const e = () => {
                        o.classList.remove(c, u), o.classList.add(It), i.classList.remove(It, u, c), (this._isSliding = !1), setTimeout(f, 0);
                    };
                    this._queueCallback(e, i, !0);
                } else i.classList.remove(It), o.classList.add(It), (this._isSliding = !1), f();
                a && this.cycle();
            }
            _directionToOrder(e) {
                return [Ot, jt].includes(e) ? (Ye() ? (e === jt ? Dt : Lt) : e === jt ? Lt : Dt) : e;
            }
            _orderToDirection(e) {
                return [Lt, Dt].includes(e) ? (Ye() ? (e === Dt ? jt : Ot) : e === Dt ? Ot : jt) : e;
            }
            static carouselInterface(e, t) {
                const n = Pt.getOrCreateInstance(e, t);
                let { _config: i } = n;
                "object" === typeof t && (i = { ...i, ...t });
                const r = "string" === typeof t ? t : i.slide;
                if ("number" === typeof t) n.to(t);
                else if ("string" === typeof r) {
                    if ("undefined" === typeof n[r]) throw new TypeError(`No method named "${r}"`);
                    n[r]();
                } else i.interval && i.ride && (n.pause(), n.cycle());
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    Pt.carouselInterface(this, e);
                });
            }
            static dataApiClickHandler(e) {
                const t = Me(this);
                if (!t || !t.classList.contains("carousel")) return;
                const n = { ...St.getDataAttributes(t), ...St.getDataAttributes(this) },
                    i = this.getAttribute("data-bs-slide-to");
                i && (n.interval = !1), Pt.carouselInterface(t, n), i && Pt.getInstance(t).to(i), e.preventDefault();
            }
        }
        pt.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", Pt.dataApiClickHandler),
            pt.on(window, "load.bs.carousel.data-api", () => {
                const e = Tt.find('[data-bs-ride="carousel"]');
                for (let t = 0, n = e.length; t < n; t++) Pt.carouselInterface(e[t], Pt.getInstance(e[t]));
            }),
            Ke(Pt);
        const Ht = "collapse",
            Rt = "bs.collapse",
            Bt = { toggle: !0, parent: null },
            Wt = { toggle: "boolean", parent: "(null|element)" },
            Ft = "show",
            $t = "collapse",
            Ut = "collapsing",
            zt = "collapsed",
            Xt = ":scope .collapse .collapse",
            Vt = '[data-bs-toggle="collapse"]';
        class Yt extends vt {
            constructor(e, t) {
                super(e), (this._isTransitioning = !1), (this._config = this._getConfig(t)), (this._triggerArray = []);
                const n = Tt.find(Vt);
                for (let i = 0, r = n.length; i < r; i++) {
                    const e = n[i],
                        t = Ie(e),
                        r = Tt.find(t).filter((e) => e === this._element);
                    null !== t && r.length && ((this._selector = t), this._triggerArray.push(e));
                }
                this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
            }
            static get Default() {
                return Bt;
            }
            static get NAME() {
                return Ht;
            }
            toggle() {
                this._isShown() ? this.hide() : this.show();
            }
            show() {
                if (this._isTransitioning || this._isShown()) return;
                let e,
                    t = [];
                if (this._config.parent) {
                    const e = Tt.find(Xt, this._config.parent);
                    t = Tt.find(".collapse.show, .collapse.collapsing", this._config.parent).filter((t) => !e.includes(t));
                }
                const n = Tt.findOne(this._selector);
                if (t.length) {
                    const i = t.find((e) => n !== e);
                    if (((e = i ? Yt.getInstance(i) : null), e && e._isTransitioning)) return;
                }
                if (pt.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
                t.forEach((t) => {
                    n !== t && Yt.getOrCreateInstance(t, { toggle: !1 }).hide(), e || gt.set(t, Rt, null);
                });
                const i = this._getDimension();
                this._element.classList.remove($t), this._element.classList.add(Ut), (this._element.style[i] = 0), this._addAriaAndCollapsedClass(this._triggerArray, !0), (this._isTransitioning = !0);
                const r = `scroll${i[0].toUpperCase() + i.slice(1)}`;
                this._queueCallback(
                    () => {
                        (this._isTransitioning = !1), this._element.classList.remove(Ut), this._element.classList.add($t, Ft), (this._element.style[i] = ""), pt.trigger(this._element, "shown.bs.collapse");
                    },
                    this._element,
                    !0
                ),
                    (this._element.style[i] = `${this._element[r]}px`);
            }
            hide() {
                if (this._isTransitioning || !this._isShown()) return;
                if (pt.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
                const e = this._getDimension();
                (this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`), ze(this._element), this._element.classList.add(Ut), this._element.classList.remove($t, Ft);
                const t = this._triggerArray.length;
                for (let n = 0; n < t; n++) {
                    const e = this._triggerArray[n],
                        t = Me(e);
                    t && !this._isShown(t) && this._addAriaAndCollapsedClass([e], !1);
                }
                this._isTransitioning = !0;
                (this._element.style[e] = ""),
                    this._queueCallback(
                        () => {
                            (this._isTransitioning = !1), this._element.classList.remove(Ut), this._element.classList.add($t), pt.trigger(this._element, "hidden.bs.collapse");
                        },
                        this._element,
                        !0
                    );
            }
            _isShown(e = this._element) {
                return e.classList.contains(Ft);
            }
            _getConfig(e) {
                return ((e = { ...Bt, ...St.getDataAttributes(this._element), ...e }).toggle = Boolean(e.toggle)), (e.parent = Re(e.parent)), Be(Ht, e, Wt), e;
            }
            _getDimension() {
                return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
            }
            _initializeChildren() {
                if (!this._config.parent) return;
                const e = Tt.find(Xt, this._config.parent);
                Tt.find(Vt, this._config.parent)
                    .filter((t) => !e.includes(t))
                    .forEach((e) => {
                        const t = Me(e);
                        t && this._addAriaAndCollapsedClass([e], this._isShown(t));
                    });
            }
            _addAriaAndCollapsedClass(e, t) {
                e.length &&
                    e.forEach((e) => {
                        t ? e.classList.remove(zt) : e.classList.add(zt), e.setAttribute("aria-expanded", t);
                    });
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    const t = {};
                    "string" === typeof e && /show|hide/.test(e) && (t.toggle = !1);
                    const n = Yt.getOrCreateInstance(this, t);
                    if ("string" === typeof e) {
                        if ("undefined" === typeof n[e]) throw new TypeError(`No method named "${e}"`);
                        n[e]();
                    }
                });
            }
        }
        pt.on(document, "click.bs.collapse.data-api", Vt, function (e) {
            ("A" === e.target.tagName || (e.delegateTarget && "A" === e.delegateTarget.tagName)) && e.preventDefault();
            const t = Ie(this);
            Tt.find(t).forEach((e) => {
                Yt.getOrCreateInstance(e, { toggle: !1 }).toggle();
            });
        }),
            Ke(Yt);
        const Kt = "dropdown",
            Qt = "Escape",
            Gt = "Space",
            Jt = "ArrowUp",
            Zt = "ArrowDown",
            en = new RegExp("ArrowUp|ArrowDown|Escape"),
            tn = "click.bs.dropdown.data-api",
            nn = "keydown.bs.dropdown.data-api",
            rn = "show",
            on = '[data-bs-toggle="dropdown"]',
            sn = ".dropdown-menu",
            an = Ye() ? "top-end" : "top-start",
            ln = Ye() ? "top-start" : "top-end",
            cn = Ye() ? "bottom-end" : "bottom-start",
            un = Ye() ? "bottom-start" : "bottom-end",
            dn = Ye() ? "left-start" : "right-start",
            fn = Ye() ? "right-start" : "left-start",
            hn = { offset: [0, 2], boundary: "clippingParents", reference: "toggle", display: "dynamic", popperConfig: null, autoClose: !0 },
            pn = { offset: "(array|string|function)", boundary: "(string|element)", reference: "(string|element|object)", display: "string", popperConfig: "(null|object|function)", autoClose: "(boolean|string)" };
        class mn extends vt {
            constructor(e, t) {
                super(e), (this._popper = null), (this._config = this._getConfig(t)), (this._menu = this._getMenuElement()), (this._inNavbar = this._detectNavbar());
            }
            static get Default() {
                return hn;
            }
            static get DefaultType() {
                return pn;
            }
            static get NAME() {
                return Kt;
            }
            toggle() {
                return this._isShown() ? this.hide() : this.show();
            }
            show() {
                if (Fe(this._element) || this._isShown(this._menu)) return;
                const e = { relatedTarget: this._element };
                if (pt.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) return;
                const t = mn.getParentFromElement(this._element);
                this._inNavbar ? St.setDataAttribute(this._menu, "popper", "none") : this._createPopper(t),
                    "ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && [].concat(...document.body.children).forEach((e) => pt.on(e, "mouseover", Ue)),
                    this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    this._menu.classList.add(rn),
                    this._element.classList.add(rn),
                    pt.trigger(this._element, "shown.bs.dropdown", e);
            }
            hide() {
                if (Fe(this._element) || !this._isShown(this._menu)) return;
                const e = { relatedTarget: this._element };
                this._completeHide(e);
            }
            dispose() {
                this._popper && this._popper.destroy(), super.dispose();
            }
            update() {
                (this._inNavbar = this._detectNavbar()), this._popper && this._popper.update();
            }
            _completeHide(e) {
                pt.trigger(this._element, "hide.bs.dropdown", e).defaultPrevented ||
                    ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((e) => pt.off(e, "mouseover", Ue)),
                    this._popper && this._popper.destroy(),
                    this._menu.classList.remove(rn),
                    this._element.classList.remove(rn),
                    this._element.setAttribute("aria-expanded", "false"),
                    St.removeDataAttribute(this._menu, "popper"),
                    pt.trigger(this._element, "hidden.bs.dropdown", e));
            }
            _getConfig(e) {
                if (
                    ((e = { ...this.constructor.Default, ...St.getDataAttributes(this._element), ...e }),
                    Be(Kt, e, this.constructor.DefaultType),
                    "object" === typeof e.reference && !He(e.reference) && "function" !== typeof e.reference.getBoundingClientRect)
                )
                    throw new TypeError(`${Kt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
                return e;
            }
            _createPopper(e) {
                if ("undefined" === typeof i) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                let t = this._element;
                "parent" === this._config.reference ? (t = e) : He(this._config.reference) ? (t = Re(this._config.reference)) : "object" === typeof this._config.reference && (t = this._config.reference);
                const n = this._getPopperConfig(),
                    r = n.modifiers.find((e) => "applyStyles" === e.name && !1 === e.enabled);
                (this._popper = je(t, this._menu, n)), r && St.setDataAttribute(this._menu, "popper", "static");
            }
            _isShown(e = this._element) {
                return e.classList.contains(rn);
            }
            _getMenuElement() {
                return Tt.next(this._element, sn)[0];
            }
            _getPlacement() {
                const e = this._element.parentNode;
                if (e.classList.contains("dropend")) return dn;
                if (e.classList.contains("dropstart")) return fn;
                const t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
                return e.classList.contains("dropup") ? (t ? ln : an) : t ? un : cn;
            }
            _detectNavbar() {
                return null !== this._element.closest(".navbar");
            }
            _getOffset() {
                const { offset: e } = this._config;
                return "string" === typeof e ? e.split(",").map((e) => Number.parseInt(e, 10)) : "function" === typeof e ? (t) => e(t, this._element) : e;
            }
            _getPopperConfig() {
                const e = {
                    placement: this._getPlacement(),
                    modifiers: [
                        { name: "preventOverflow", options: { boundary: this._config.boundary } },
                        { name: "offset", options: { offset: this._getOffset() } },
                    ],
                };
                return "static" === this._config.display && (e.modifiers = [{ name: "applyStyles", enabled: !1 }]), { ...e, ...("function" === typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig) };
            }
            _selectMenuItem({ key: e, target: t }) {
                const n = Tt.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(We);
                n.length && Je(n, t, e === Zt, !n.includes(t)).focus();
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    const t = mn.getOrCreateInstance(this, e);
                    if ("string" === typeof e) {
                        if ("undefined" === typeof t[e]) throw new TypeError(`No method named "${e}"`);
                        t[e]();
                    }
                });
            }
            static clearMenus(e) {
                if (e && (2 === e.button || ("keyup" === e.type && "Tab" !== e.key))) return;
                const t = Tt.find(on);
                for (let n = 0, i = t.length; n < i; n++) {
                    const i = mn.getInstance(t[n]);
                    if (!i || !1 === i._config.autoClose) continue;
                    if (!i._isShown()) continue;
                    const r = { relatedTarget: i._element };
                    if (e) {
                        const t = e.composedPath(),
                            n = t.includes(i._menu);
                        if (t.includes(i._element) || ("inside" === i._config.autoClose && !n) || ("outside" === i._config.autoClose && n)) continue;
                        if (i._menu.contains(e.target) && (("keyup" === e.type && "Tab" === e.key) || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
                        "click" === e.type && (r.clickEvent = e);
                    }
                    i._completeHide(r);
                }
            }
            static getParentFromElement(e) {
                return Me(e) || e.parentNode;
            }
            static dataApiKeydownHandler(e) {
                if (/input|textarea/i.test(e.target.tagName) ? e.key === Gt || (e.key !== Qt && ((e.key !== Zt && e.key !== Jt) || e.target.closest(sn))) : !en.test(e.key)) return;
                const t = this.classList.contains(rn);
                if (!t && e.key === Qt) return;
                if ((e.preventDefault(), e.stopPropagation(), Fe(this))) return;
                const n = this.matches(on) ? this : Tt.prev(this, on)[0],
                    i = mn.getOrCreateInstance(n);
                if (e.key !== Qt) return e.key === Jt || e.key === Zt ? (t || i.show(), void i._selectMenuItem(e)) : void ((t && e.key !== Gt) || mn.clearMenus());
                i.hide();
            }
        }
        pt.on(document, nn, on, mn.dataApiKeydownHandler),
            pt.on(document, nn, sn, mn.dataApiKeydownHandler),
            pt.on(document, tn, mn.clearMenus),
            pt.on(document, "keyup.bs.dropdown.data-api", mn.clearMenus),
            pt.on(document, tn, on, function (e) {
                e.preventDefault(), mn.getOrCreateInstance(this).toggle();
            }),
            Ke(mn);
        const gn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            vn = ".sticky-top";
        class yn {
            constructor() {
                this._element = document.body;
            }
            getWidth() {
                const e = document.documentElement.clientWidth;
                return Math.abs(window.innerWidth - e);
            }
            hide() {
                const e = this.getWidth();
                this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", (t) => t + e), this._setElementAttributes(gn, "paddingRight", (t) => t + e), this._setElementAttributes(vn, "marginRight", (t) => t - e);
            }
            _disableOverFlow() {
                this._saveInitialAttribute(this._element, "overflow"), (this._element.style.overflow = "hidden");
            }
            _setElementAttributes(e, t, n) {
                const i = this.getWidth();
                this._applyManipulationCallback(e, (e) => {
                    if (e !== this._element && window.innerWidth > e.clientWidth + i) return;
                    this._saveInitialAttribute(e, t);
                    const r = window.getComputedStyle(e)[t];
                    e.style[t] = `${n(Number.parseFloat(r))}px`;
                });
            }
            reset() {
                this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(gn, "paddingRight"), this._resetElementAttributes(vn, "marginRight");
            }
            _saveInitialAttribute(e, t) {
                const n = e.style[t];
                n && St.setDataAttribute(e, t, n);
            }
            _resetElementAttributes(e, t) {
                this._applyManipulationCallback(e, (e) => {
                    const n = St.getDataAttribute(e, t);
                    "undefined" === typeof n ? e.style.removeProperty(t) : (St.removeDataAttribute(e, t), (e.style[t] = n));
                });
            }
            _applyManipulationCallback(e, t) {
                He(e) ? t(e) : Tt.find(e, this._element).forEach(t);
            }
            isOverflowing() {
                return this.getWidth() > 0;
            }
        }
        const bn = { className: "modal-backdrop", isVisible: !0, isAnimated: !1, rootElement: "body", clickCallback: null },
            _n = { className: "string", isVisible: "boolean", isAnimated: "boolean", rootElement: "(element|string)", clickCallback: "(function|null)" },
            wn = "backdrop",
            xn = "show",
            En = "mousedown.bs.backdrop";
        class Sn {
            constructor(e) {
                (this._config = this._getConfig(e)), (this._isAppended = !1), (this._element = null);
            }
            show(e) {
                this._config.isVisible
                    ? (this._append(),
                      this._config.isAnimated && ze(this._getElement()),
                      this._getElement().classList.add(xn),
                      this._emulateAnimation(() => {
                          Qe(e);
                      }))
                    : Qe(e);
            }
            hide(e) {
                this._config.isVisible
                    ? (this._getElement().classList.remove(xn),
                      this._emulateAnimation(() => {
                          this.dispose(), Qe(e);
                      }))
                    : Qe(e);
            }
            _getElement() {
                if (!this._element) {
                    const e = document.createElement("div");
                    (e.className = this._config.className), this._config.isAnimated && e.classList.add("fade"), (this._element = e);
                }
                return this._element;
            }
            _getConfig(e) {
                return ((e = { ...bn, ...("object" === typeof e ? e : {}) }).rootElement = Re(e.rootElement)), Be(wn, e, _n), e;
            }
            _append() {
                this._isAppended ||
                    (this._config.rootElement.append(this._getElement()),
                    pt.on(this._getElement(), En, () => {
                        Qe(this._config.clickCallback);
                    }),
                    (this._isAppended = !0));
            }
            dispose() {
                this._isAppended && (pt.off(this._element, En), this._element.remove(), (this._isAppended = !1));
            }
            _emulateAnimation(e) {
                Ge(e, this._getElement(), this._config.isAnimated);
            }
        }
        const Tn = { trapElement: null, autofocus: !0 },
            Cn = { trapElement: "element", autofocus: "boolean" },
            kn = ".bs.focustrap",
            An = "backward";
        class Ln {
            constructor(e) {
                (this._config = this._getConfig(e)), (this._isActive = !1), (this._lastTabNavDirection = null);
            }
            activate() {
                const { trapElement: e, autofocus: t } = this._config;
                this._isActive ||
                    (t && e.focus(), pt.off(document, kn), pt.on(document, "focusin.bs.focustrap", (e) => this._handleFocusin(e)), pt.on(document, "keydown.tab.bs.focustrap", (e) => this._handleKeydown(e)), (this._isActive = !0));
            }
            deactivate() {
                this._isActive && ((this._isActive = !1), pt.off(document, kn));
            }
            _handleFocusin(e) {
                const { target: t } = e,
                    { trapElement: n } = this._config;
                if (t === document || t === n || n.contains(t)) return;
                const i = Tt.focusableChildren(n);
                0 === i.length ? n.focus() : this._lastTabNavDirection === An ? i[i.length - 1].focus() : i[0].focus();
            }
            _handleKeydown(e) {
                "Tab" === e.key && (this._lastTabNavDirection = e.shiftKey ? An : "forward");
            }
            _getConfig(e) {
                return (e = { ...Tn, ...("object" === typeof e ? e : {}) }), Be("focustrap", e, Cn), e;
            }
        }
        const Dn = "modal",
            jn = ".bs.modal",
            On = "Escape",
            Nn = { backdrop: !0, keyboard: !0, focus: !0 },
            qn = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean" },
            In = "hidden.bs.modal",
            Mn = "show.bs.modal",
            Pn = "resize.bs.modal",
            Hn = "click.dismiss.bs.modal",
            Rn = "keydown.dismiss.bs.modal",
            Bn = "mousedown.dismiss.bs.modal",
            Wn = "modal-open",
            Fn = "show",
            $n = "modal-static";
        class Un extends vt {
            constructor(e, t) {
                super(e),
                    (this._config = this._getConfig(t)),
                    (this._dialog = Tt.findOne(".modal-dialog", this._element)),
                    (this._backdrop = this._initializeBackDrop()),
                    (this._focustrap = this._initializeFocusTrap()),
                    (this._isShown = !1),
                    (this._ignoreBackdropClick = !1),
                    (this._isTransitioning = !1),
                    (this._scrollBar = new yn());
            }
            static get Default() {
                return Nn;
            }
            static get NAME() {
                return Dn;
            }
            toggle(e) {
                return this._isShown ? this.hide() : this.show(e);
            }
            show(e) {
                if (this._isShown || this._isTransitioning) return;
                pt.trigger(this._element, Mn, { relatedTarget: e }).defaultPrevented ||
                    ((this._isShown = !0),
                    this._isAnimated() && (this._isTransitioning = !0),
                    this._scrollBar.hide(),
                    document.body.classList.add(Wn),
                    this._adjustDialog(),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    pt.on(this._dialog, Bn, () => {
                        pt.one(this._element, "mouseup.dismiss.bs.modal", (e) => {
                            e.target === this._element && (this._ignoreBackdropClick = !0);
                        });
                    }),
                    this._showBackdrop(() => this._showElement(e)));
            }
            hide() {
                if (!this._isShown || this._isTransitioning) return;
                if (pt.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
                this._isShown = !1;
                const e = this._isAnimated();
                e && (this._isTransitioning = !0),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    this._focustrap.deactivate(),
                    this._element.classList.remove(Fn),
                    pt.off(this._element, Hn),
                    pt.off(this._dialog, Bn),
                    this._queueCallback(() => this._hideModal(), this._element, e);
            }
            dispose() {
                [window, this._dialog].forEach((e) => pt.off(e, jn)), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
            }
            handleUpdate() {
                this._adjustDialog();
            }
            _initializeBackDrop() {
                return new Sn({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() });
            }
            _initializeFocusTrap() {
                return new Ln({ trapElement: this._element });
            }
            _getConfig(e) {
                return (e = { ...Nn, ...St.getDataAttributes(this._element), ...("object" === typeof e ? e : {}) }), Be(Dn, e, qn), e;
            }
            _showElement(e) {
                const t = this._isAnimated(),
                    n = Tt.findOne(".modal-body", this._dialog);
                (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) || document.body.append(this._element),
                    (this._element.style.display = "block"),
                    this._element.removeAttribute("aria-hidden"),
                    this._element.setAttribute("aria-modal", !0),
                    this._element.setAttribute("role", "dialog"),
                    (this._element.scrollTop = 0),
                    n && (n.scrollTop = 0),
                    t && ze(this._element),
                    this._element.classList.add(Fn);
                this._queueCallback(
                    () => {
                        this._config.focus && this._focustrap.activate(), (this._isTransitioning = !1), pt.trigger(this._element, "shown.bs.modal", { relatedTarget: e });
                    },
                    this._dialog,
                    t
                );
            }
            _setEscapeEvent() {
                this._isShown
                    ? pt.on(this._element, Rn, (e) => {
                          this._config.keyboard && e.key === On ? (e.preventDefault(), this.hide()) : this._config.keyboard || e.key !== On || this._triggerBackdropTransition();
                      })
                    : pt.off(this._element, Rn);
            }
            _setResizeEvent() {
                this._isShown ? pt.on(window, Pn, () => this._adjustDialog()) : pt.off(window, Pn);
            }
            _hideModal() {
                (this._element.style.display = "none"),
                    this._element.setAttribute("aria-hidden", !0),
                    this._element.removeAttribute("aria-modal"),
                    this._element.removeAttribute("role"),
                    (this._isTransitioning = !1),
                    this._backdrop.hide(() => {
                        document.body.classList.remove(Wn), this._resetAdjustments(), this._scrollBar.reset(), pt.trigger(this._element, In);
                    });
            }
            _showBackdrop(e) {
                pt.on(this._element, Hn, (e) => {
                    this._ignoreBackdropClick ? (this._ignoreBackdropClick = !1) : e.target === e.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition());
                }),
                    this._backdrop.show(e);
            }
            _isAnimated() {
                return this._element.classList.contains("fade");
            }
            _triggerBackdropTransition() {
                if (pt.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
                const { classList: e, scrollHeight: t, style: n } = this._element,
                    i = t > document.documentElement.clientHeight;
                (!i && "hidden" === n.overflowY) ||
                    e.contains($n) ||
                    (i || (n.overflowY = "hidden"),
                    e.add($n),
                    this._queueCallback(() => {
                        e.remove($n),
                            i ||
                                this._queueCallback(() => {
                                    n.overflowY = "";
                                }, this._dialog);
                    }, this._dialog),
                    this._element.focus());
            }
            _adjustDialog() {
                const e = this._element.scrollHeight > document.documentElement.clientHeight,
                    t = this._scrollBar.getWidth(),
                    n = t > 0;
                ((!n && e && !Ye()) || (n && !e && Ye())) && (this._element.style.paddingLeft = `${t}px`), ((n && !e && !Ye()) || (!n && e && Ye())) && (this._element.style.paddingRight = `${t}px`);
            }
            _resetAdjustments() {
                (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
            }
            static jQueryInterface(e, t) {
                return this.each(function () {
                    const n = Un.getOrCreateInstance(this, e);
                    if ("string" === typeof e) {
                        if ("undefined" === typeof n[e]) throw new TypeError(`No method named "${e}"`);
                        n[e](t);
                    }
                });
            }
        }
        pt.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (e) {
            const t = Me(this);
            ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
                pt.one(t, Mn, (e) => {
                    e.defaultPrevented ||
                        pt.one(t, In, () => {
                            We(this) && this.focus();
                        });
                });
            const n = Tt.findOne(".modal.show");
            n && Un.getInstance(n).hide();
            Un.getOrCreateInstance(t).toggle(this);
        }),
            yt(Un),
            Ke(Un);
        const zn = "offcanvas",
            Xn = { backdrop: !0, keyboard: !0, scroll: !1 },
            Vn = { backdrop: "boolean", keyboard: "boolean", scroll: "boolean" },
            Yn = "show",
            Kn = ".offcanvas.show",
            Qn = "hidden.bs.offcanvas";
        class Gn extends vt {
            constructor(e, t) {
                super(e), (this._config = this._getConfig(t)), (this._isShown = !1), (this._backdrop = this._initializeBackDrop()), (this._focustrap = this._initializeFocusTrap()), this._addEventListeners();
            }
            static get NAME() {
                return zn;
            }
            static get Default() {
                return Xn;
            }
            toggle(e) {
                return this._isShown ? this.hide() : this.show(e);
            }
            show(e) {
                if (this._isShown) return;
                if (pt.trigger(this._element, "show.bs.offcanvas", { relatedTarget: e }).defaultPrevented) return;
                (this._isShown = !0),
                    (this._element.style.visibility = "visible"),
                    this._backdrop.show(),
                    this._config.scroll || new yn().hide(),
                    this._element.removeAttribute("aria-hidden"),
                    this._element.setAttribute("aria-modal", !0),
                    this._element.setAttribute("role", "dialog"),
                    this._element.classList.add(Yn);
                this._queueCallback(
                    () => {
                        this._config.scroll || this._focustrap.activate(), pt.trigger(this._element, "shown.bs.offcanvas", { relatedTarget: e });
                    },
                    this._element,
                    !0
                );
            }
            hide() {
                if (!this._isShown) return;
                if (pt.trigger(this._element, "hide.bs.offcanvas").defaultPrevented) return;
                this._focustrap.deactivate(), this._element.blur(), (this._isShown = !1), this._element.classList.remove(Yn), this._backdrop.hide();
                this._queueCallback(
                    () => {
                        this._element.setAttribute("aria-hidden", !0),
                            this._element.removeAttribute("aria-modal"),
                            this._element.removeAttribute("role"),
                            (this._element.style.visibility = "hidden"),
                            this._config.scroll || new yn().reset(),
                            pt.trigger(this._element, Qn);
                    },
                    this._element,
                    !0
                );
            }
            dispose() {
                this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
            }
            _getConfig(e) {
                return (e = { ...Xn, ...St.getDataAttributes(this._element), ...("object" === typeof e ? e : {}) }), Be(zn, e, Vn), e;
            }
            _initializeBackDrop() {
                return new Sn({ className: "offcanvas-backdrop", isVisible: this._config.backdrop, isAnimated: !0, rootElement: this._element.parentNode, clickCallback: () => this.hide() });
            }
            _initializeFocusTrap() {
                return new Ln({ trapElement: this._element });
            }
            _addEventListeners() {
                pt.on(this._element, "keydown.dismiss.bs.offcanvas", (e) => {
                    this._config.keyboard && "Escape" === e.key && this.hide();
                });
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    const t = Gn.getOrCreateInstance(this, e);
                    if ("string" === typeof e) {
                        if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                        t[e](this);
                    }
                });
            }
        }
        pt.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (e) {
            const t = Me(this);
            if ((["A", "AREA"].includes(this.tagName) && e.preventDefault(), Fe(this))) return;
            pt.one(t, Qn, () => {
                We(this) && this.focus();
            });
            const n = Tt.findOne(Kn);
            n && n !== t && Gn.getInstance(n).hide();
            Gn.getOrCreateInstance(t).toggle(this);
        }),
            pt.on(window, "load.bs.offcanvas.data-api", () => Tt.find(Kn).forEach((e) => Gn.getOrCreateInstance(e).show())),
            yt(Gn),
            Ke(Gn);
        const Jn = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
            Zn = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
            ei = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
            ti = (e, t) => {
                const n = e.nodeName.toLowerCase();
                if (t.includes(n)) return !Jn.has(n) || Boolean(Zn.test(e.nodeValue) || ei.test(e.nodeValue));
                const i = t.filter((e) => e instanceof RegExp);
                for (let r = 0, o = i.length; r < o; r++) if (i[r].test(n)) return !0;
                return !1;
            },
            ni = {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: [],
            };
        function ii(e, t, n) {
            if (!e.length) return e;
            if (n && "function" === typeof n) return n(e);
            const i = new window.DOMParser().parseFromString(e, "text/html"),
                r = [].concat(...i.body.querySelectorAll("*"));
            for (let o = 0, s = r.length; o < s; o++) {
                const e = r[o],
                    n = e.nodeName.toLowerCase();
                if (!Object.keys(t).includes(n)) {
                    e.remove();
                    continue;
                }
                const i = [].concat(...e.attributes),
                    s = [].concat(t["*"] || [], t[n] || []);
                i.forEach((t) => {
                    ti(t, s) || e.removeAttribute(t.nodeName);
                });
            }
            return i.body.innerHTML;
        }
        const ri = "tooltip",
            oi = new Set(["sanitize", "allowList", "sanitizeFn"]),
            si = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(array|string|function)",
                container: "(string|element|boolean)",
                fallbackPlacements: "array",
                boundary: "(string|element)",
                customClass: "(string|function)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                allowList: "object",
                popperConfig: "(null|object|function)",
            },
            ai = { AUTO: "auto", TOP: "top", RIGHT: Ye() ? "left" : "right", BOTTOM: "bottom", LEFT: Ye() ? "right" : "left" },
            li = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: [0, 0],
                container: !1,
                fallbackPlacements: ["top", "right", "bottom", "left"],
                boundary: "clippingParents",
                customClass: "",
                sanitize: !0,
                sanitizeFn: null,
                allowList: ni,
                popperConfig: null,
            },
            ci = {
                HIDE: "hide.bs.tooltip",
                HIDDEN: "hidden.bs.tooltip",
                SHOW: "show.bs.tooltip",
                SHOWN: "shown.bs.tooltip",
                INSERTED: "inserted.bs.tooltip",
                CLICK: "click.bs.tooltip",
                FOCUSIN: "focusin.bs.tooltip",
                FOCUSOUT: "focusout.bs.tooltip",
                MOUSEENTER: "mouseenter.bs.tooltip",
                MOUSELEAVE: "mouseleave.bs.tooltip",
            },
            ui = "fade",
            di = "show",
            fi = "show",
            hi = "out",
            pi = ".tooltip-inner",
            mi = ".modal",
            gi = "hide.bs.modal",
            vi = "hover",
            yi = "focus";
        class bi extends vt {
            constructor(e, t) {
                if ("undefined" === typeof i) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                super(e), (this._isEnabled = !0), (this._timeout = 0), (this._hoverState = ""), (this._activeTrigger = {}), (this._popper = null), (this._config = this._getConfig(t)), (this.tip = null), this._setListeners();
            }
            static get Default() {
                return li;
            }
            static get NAME() {
                return ri;
            }
            static get Event() {
                return ci;
            }
            static get DefaultType() {
                return si;
            }
            enable() {
                this._isEnabled = !0;
            }
            disable() {
                this._isEnabled = !1;
            }
            toggleEnabled() {
                this._isEnabled = !this._isEnabled;
            }
            toggle(e) {
                if (this._isEnabled)
                    if (e) {
                        const t = this._initializeOnDelegatedTarget(e);
                        (t._activeTrigger.click = !t._activeTrigger.click), t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t);
                    } else {
                        if (this.getTipElement().classList.contains(di)) return void this._leave(null, this);
                        this._enter(null, this);
                    }
            }
            dispose() {
                clearTimeout(this._timeout), pt.off(this._element.closest(mi), gi, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose();
            }
            show() {
                if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
                if (!this.isWithContent() || !this._isEnabled) return;
                const e = pt.trigger(this._element, this.constructor.Event.SHOW),
                    t = $e(this._element),
                    n = null === t ? this._element.ownerDocument.documentElement.contains(this._element) : t.contains(this._element);
                if (e.defaultPrevented || !n) return;
                "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(pi).innerHTML && (this._disposePopper(), this.tip.remove(), (this.tip = null));
                const i = this.getTipElement(),
                    r = ((e) => {
                        do {
                            e += Math.floor(1e6 * Math.random());
                        } while (document.getElementById(e));
                        return e;
                    })(this.constructor.NAME);
                i.setAttribute("id", r), this._element.setAttribute("aria-describedby", r), this._config.animation && i.classList.add(ui);
                const o = "function" === typeof this._config.placement ? this._config.placement.call(this, i, this._element) : this._config.placement,
                    s = this._getAttachment(o);
                this._addAttachmentClass(s);
                const { container: a } = this._config;
                gt.set(i, this.constructor.DATA_KEY, this),
                    this._element.ownerDocument.documentElement.contains(this.tip) || (a.append(i), pt.trigger(this._element, this.constructor.Event.INSERTED)),
                    this._popper ? this._popper.update() : (this._popper = je(this._element, i, this._getPopperConfig(s))),
                    i.classList.add(di);
                const l = this._resolvePossibleFunction(this._config.customClass);
                l && i.classList.add(...l.split(" ")),
                    "ontouchstart" in document.documentElement &&
                        [].concat(...document.body.children).forEach((e) => {
                            pt.on(e, "mouseover", Ue);
                        });
                const c = this.tip.classList.contains(ui);
                this._queueCallback(
                    () => {
                        const e = this._hoverState;
                        (this._hoverState = null), pt.trigger(this._element, this.constructor.Event.SHOWN), e === hi && this._leave(null, this);
                    },
                    this.tip,
                    c
                );
            }
            hide() {
                if (!this._popper) return;
                const e = this.getTipElement();
                if (pt.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
                e.classList.remove(di),
                    "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((e) => pt.off(e, "mouseover", Ue)),
                    (this._activeTrigger.click = !1),
                    (this._activeTrigger.focus = !1),
                    (this._activeTrigger.hover = !1);
                const t = this.tip.classList.contains(ui);
                this._queueCallback(
                    () => {
                        this._isWithActiveTrigger() ||
                            (this._hoverState !== fi && e.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), pt.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper());
                    },
                    this.tip,
                    t
                ),
                    (this._hoverState = "");
            }
            update() {
                null !== this._popper && this._popper.update();
            }
            isWithContent() {
                return Boolean(this.getTitle());
            }
            getTipElement() {
                if (this.tip) return this.tip;
                const e = document.createElement("div");
                e.innerHTML = this._config.template;
                const t = e.children[0];
                return this.setContent(t), t.classList.remove(ui, di), (this.tip = t), this.tip;
            }
            setContent(e) {
                this._sanitizeAndSetContent(e, this.getTitle(), pi);
            }
            _sanitizeAndSetContent(e, t, n) {
                const i = Tt.findOne(n, e);
                t || !i ? this.setElementContent(i, t) : i.remove();
            }
            setElementContent(e, t) {
                if (null !== e)
                    return He(t)
                        ? ((t = Re(t)), void (this._config.html ? t.parentNode !== e && ((e.innerHTML = ""), e.append(t)) : (e.textContent = t.textContent)))
                        : void (this._config.html ? (this._config.sanitize && (t = ii(t, this._config.allowList, this._config.sanitizeFn)), (e.innerHTML = t)) : (e.textContent = t));
            }
            getTitle() {
                const e = this._element.getAttribute("data-bs-original-title") || this._config.title;
                return this._resolvePossibleFunction(e);
            }
            updateAttachment(e) {
                return "right" === e ? "end" : "left" === e ? "start" : e;
            }
            _initializeOnDelegatedTarget(e, t) {
                return t || this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig());
            }
            _getOffset() {
                const { offset: e } = this._config;
                return "string" === typeof e ? e.split(",").map((e) => Number.parseInt(e, 10)) : "function" === typeof e ? (t) => e(t, this._element) : e;
            }
            _resolvePossibleFunction(e) {
                return "function" === typeof e ? e.call(this._element) : e;
            }
            _getPopperConfig(e) {
                const t = {
                    placement: e,
                    modifiers: [
                        { name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } },
                        { name: "offset", options: { offset: this._getOffset() } },
                        { name: "preventOverflow", options: { boundary: this._config.boundary } },
                        { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } },
                        { name: "onChange", enabled: !0, phase: "afterWrite", fn: (e) => this._handlePopperPlacementChange(e) },
                    ],
                    onFirstUpdate: (e) => {
                        e.options.placement !== e.placement && this._handlePopperPlacementChange(e);
                    },
                };
                return { ...t, ...("function" === typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig) };
            }
            _addAttachmentClass(e) {
                this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`);
            }
            _getAttachment(e) {
                return ai[e.toUpperCase()];
            }
            _setListeners() {
                this._config.trigger.split(" ").forEach((e) => {
                    if ("click" === e) pt.on(this._element, this.constructor.Event.CLICK, this._config.selector, (e) => this.toggle(e));
                    else if ("manual" !== e) {
                        const t = e === vi ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
                            n = e === vi ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                        pt.on(this._element, t, this._config.selector, (e) => this._enter(e)), pt.on(this._element, n, this._config.selector, (e) => this._leave(e));
                    }
                }),
                    (this._hideModalHandler = () => {
                        this._element && this.hide();
                    }),
                    pt.on(this._element.closest(mi), gi, this._hideModalHandler),
                    this._config.selector ? (this._config = { ...this._config, trigger: "manual", selector: "" }) : this._fixTitle();
            }
            _fixTitle() {
                const e = this._element.getAttribute("title"),
                    t = typeof this._element.getAttribute("data-bs-original-title");
                (e || "string" !== t) &&
                    (this._element.setAttribute("data-bs-original-title", e || ""),
                    !e || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", e),
                    this._element.setAttribute("title", ""));
            }
            _enter(e, t) {
                (t = this._initializeOnDelegatedTarget(e, t)),
                    e && (t._activeTrigger["focusin" === e.type ? yi : vi] = !0),
                    t.getTipElement().classList.contains(di) || t._hoverState === fi
                        ? (t._hoverState = fi)
                        : (clearTimeout(t._timeout),
                          (t._hoverState = fi),
                          t._config.delay && t._config.delay.show
                              ? (t._timeout = setTimeout(() => {
                                    t._hoverState === fi && t.show();
                                }, t._config.delay.show))
                              : t.show());
            }
            _leave(e, t) {
                (t = this._initializeOnDelegatedTarget(e, t)),
                    e && (t._activeTrigger["focusout" === e.type ? yi : vi] = t._element.contains(e.relatedTarget)),
                    t._isWithActiveTrigger() ||
                        (clearTimeout(t._timeout),
                        (t._hoverState = hi),
                        t._config.delay && t._config.delay.hide
                            ? (t._timeout = setTimeout(() => {
                                  t._hoverState === hi && t.hide();
                              }, t._config.delay.hide))
                            : t.hide());
            }
            _isWithActiveTrigger() {
                for (const e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
                return !1;
            }
            _getConfig(e) {
                const t = St.getDataAttributes(this._element);
                return (
                    Object.keys(t).forEach((e) => {
                        oi.has(e) && delete t[e];
                    }),
                    ((e = { ...this.constructor.Default, ...t, ...("object" === typeof e && e ? e : {}) }).container = !1 === e.container ? document.body : Re(e.container)),
                    "number" === typeof e.delay && (e.delay = { show: e.delay, hide: e.delay }),
                    "number" === typeof e.title && (e.title = e.title.toString()),
                    "number" === typeof e.content && (e.content = e.content.toString()),
                    Be(ri, e, this.constructor.DefaultType),
                    e.sanitize && (e.template = ii(e.template, e.allowList, e.sanitizeFn)),
                    e
                );
            }
            _getDelegateConfig() {
                const e = {};
                for (const t in this._config) this.constructor.Default[t] !== this._config[t] && (e[t] = this._config[t]);
                return e;
            }
            _cleanTipClass() {
                const e = this.getTipElement(),
                    t = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"),
                    n = e.getAttribute("class").match(t);
                null !== n && n.length > 0 && n.map((e) => e.trim()).forEach((t) => e.classList.remove(t));
            }
            _getBasicClassPrefix() {
                return "bs-tooltip";
            }
            _handlePopperPlacementChange(e) {
                const { state: t } = e;
                t && ((this.tip = t.elements.popper), this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(t.placement)));
            }
            _disposePopper() {
                this._popper && (this._popper.destroy(), (this._popper = null));
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    const t = bi.getOrCreateInstance(this, e);
                    if ("string" === typeof e) {
                        if ("undefined" === typeof t[e]) throw new TypeError(`No method named "${e}"`);
                        t[e]();
                    }
                });
            }
        }
        Ke(bi);
        const _i = {
                ...bi.Default,
                placement: "right",
                offset: [0, 8],
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
            },
            wi = { ...bi.DefaultType, content: "(string|element|function)" },
            xi = {
                HIDE: "hide.bs.popover",
                HIDDEN: "hidden.bs.popover",
                SHOW: "show.bs.popover",
                SHOWN: "shown.bs.popover",
                INSERTED: "inserted.bs.popover",
                CLICK: "click.bs.popover",
                FOCUSIN: "focusin.bs.popover",
                FOCUSOUT: "focusout.bs.popover",
                MOUSEENTER: "mouseenter.bs.popover",
                MOUSELEAVE: "mouseleave.bs.popover",
            };
        class Ei extends bi {
            static get Default() {
                return _i;
            }
            static get NAME() {
                return "popover";
            }
            static get Event() {
                return xi;
            }
            static get DefaultType() {
                return wi;
            }
            isWithContent() {
                return this.getTitle() || this._getContent();
            }
            setContent(e) {
                this._sanitizeAndSetContent(e, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(e, this._getContent(), ".popover-body");
            }
            _getContent() {
                return this._resolvePossibleFunction(this._config.content);
            }
            _getBasicClassPrefix() {
                return "bs-popover";
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    const t = Ei.getOrCreateInstance(this, e);
                    if ("string" === typeof e) {
                        if ("undefined" === typeof t[e]) throw new TypeError(`No method named "${e}"`);
                        t[e]();
                    }
                });
            }
        }
        Ke(Ei);
        const Si = "scrollspy",
            Ti = ".bs.scrollspy",
            Ci = { offset: 10, method: "auto", target: "" },
            ki = { offset: "number", method: "string", target: "(string|element)" },
            Ai = "dropdown-item",
            Li = "active",
            Di = ".nav-link",
            ji = ".nav-link, .list-group-item, .dropdown-item",
            Oi = "position";
        class Ni extends vt {
            constructor(e, t) {
                super(e),
                    (this._scrollElement = "BODY" === this._element.tagName ? window : this._element),
                    (this._config = this._getConfig(t)),
                    (this._offsets = []),
                    (this._targets = []),
                    (this._activeTarget = null),
                    (this._scrollHeight = 0),
                    pt.on(this._scrollElement, "scroll.bs.scrollspy", () => this._process()),
                    this.refresh(),
                    this._process();
            }
            static get Default() {
                return Ci;
            }
            static get NAME() {
                return Si;
            }
            refresh() {
                const e = this._scrollElement === this._scrollElement.window ? "offset" : Oi,
                    t = "auto" === this._config.method ? e : this._config.method,
                    n = t === Oi ? this._getScrollTop() : 0;
                (this._offsets = []), (this._targets = []), (this._scrollHeight = this._getScrollHeight());
                Tt.find(ji, this._config.target)
                    .map((e) => {
                        const i = Ie(e),
                            r = i ? Tt.findOne(i) : null;
                        if (r) {
                            const e = r.getBoundingClientRect();
                            if (e.width || e.height) return [St[t](r).top + n, i];
                        }
                        return null;
                    })
                    .filter((e) => e)
                    .sort((e, t) => e[0] - t[0])
                    .forEach((e) => {
                        this._offsets.push(e[0]), this._targets.push(e[1]);
                    });
            }
            dispose() {
                pt.off(this._scrollElement, Ti), super.dispose();
            }
            _getConfig(e) {
                return ((e = { ...Ci, ...St.getDataAttributes(this._element), ...("object" === typeof e && e ? e : {}) }).target = Re(e.target) || document.documentElement), Be(Si, e, ki), e;
            }
            _getScrollTop() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
            }
            _getScrollHeight() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
            }
            _getOffsetHeight() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
            }
            _process() {
                const e = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight();
                if ((this._scrollHeight !== t && this.refresh(), e >= n)) {
                    const e = this._targets[this._targets.length - 1];
                    this._activeTarget !== e && this._activate(e);
                } else {
                    if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return (this._activeTarget = null), void this._clear();
                    for (let t = this._offsets.length; t--; ) {
                        this._activeTarget !== this._targets[t] && e >= this._offsets[t] && ("undefined" === typeof this._offsets[t + 1] || e < this._offsets[t + 1]) && this._activate(this._targets[t]);
                    }
                }
            }
            _activate(e) {
                (this._activeTarget = e), this._clear();
                const t = ji.split(",").map((t) => `${t}[data-bs-target="${e}"],${t}[href="${e}"]`),
                    n = Tt.findOne(t.join(","), this._config.target);
                n.classList.add(Li),
                    n.classList.contains(Ai)
                        ? Tt.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add(Li)
                        : Tt.parents(n, ".nav, .list-group").forEach((e) => {
                              Tt.prev(e, ".nav-link, .list-group-item").forEach((e) => e.classList.add(Li)),
                                  Tt.prev(e, ".nav-item").forEach((e) => {
                                      Tt.children(e, Di).forEach((e) => e.classList.add(Li));
                                  });
                          }),
                    pt.trigger(this._scrollElement, "activate.bs.scrollspy", { relatedTarget: e });
            }
            _clear() {
                Tt.find(ji, this._config.target)
                    .filter((e) => e.classList.contains(Li))
                    .forEach((e) => e.classList.remove(Li));
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    const t = Ni.getOrCreateInstance(this, e);
                    if ("string" === typeof e) {
                        if ("undefined" === typeof t[e]) throw new TypeError(`No method named "${e}"`);
                        t[e]();
                    }
                });
            }
        }
        pt.on(window, "load.bs.scrollspy.data-api", () => {
            Tt.find('[data-bs-spy="scroll"]').forEach((e) => new Ni(e));
        }),
            Ke(Ni);
        const qi = "active",
            Ii = "fade",
            Mi = "show",
            Pi = ".active",
            Hi = ":scope > li > .active";
        class Ri extends vt {
            static get NAME() {
                return "tab";
            }
            show() {
                if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(qi)) return;
                let e;
                const t = Me(this._element),
                    n = this._element.closest(".nav, .list-group");
                if (n) {
                    const t = "UL" === n.nodeName || "OL" === n.nodeName ? Hi : Pi;
                    (e = Tt.find(t, n)), (e = e[e.length - 1]);
                }
                const i = e ? pt.trigger(e, "hide.bs.tab", { relatedTarget: this._element }) : null;
                if (pt.trigger(this._element, "show.bs.tab", { relatedTarget: e }).defaultPrevented || (null !== i && i.defaultPrevented)) return;
                this._activate(this._element, n);
                const r = () => {
                    pt.trigger(e, "hidden.bs.tab", { relatedTarget: this._element }), pt.trigger(this._element, "shown.bs.tab", { relatedTarget: e });
                };
                t ? this._activate(t, t.parentNode, r) : r();
            }
            _activate(e, t, n) {
                const i = (!t || ("UL" !== t.nodeName && "OL" !== t.nodeName) ? Tt.children(t, Pi) : Tt.find(Hi, t))[0],
                    r = n && i && i.classList.contains(Ii),
                    o = () => this._transitionComplete(e, i, n);
                i && r ? (i.classList.remove(Mi), this._queueCallback(o, e, !0)) : o();
            }
            _transitionComplete(e, t, n) {
                if (t) {
                    t.classList.remove(qi);
                    const e = Tt.findOne(":scope > .dropdown-menu .active", t.parentNode);
                    e && e.classList.remove(qi), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1);
                }
                e.classList.add(qi), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), ze(e), e.classList.contains(Ii) && e.classList.add(Mi);
                let i = e.parentNode;
                if ((i && "LI" === i.nodeName && (i = i.parentNode), i && i.classList.contains("dropdown-menu"))) {
                    const t = e.closest(".dropdown");
                    t && Tt.find(".dropdown-toggle", t).forEach((e) => e.classList.add(qi)), e.setAttribute("aria-expanded", !0);
                }
                n && n();
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    const t = Ri.getOrCreateInstance(this);
                    if ("string" === typeof e) {
                        if ("undefined" === typeof t[e]) throw new TypeError(`No method named "${e}"`);
                        t[e]();
                    }
                });
            }
        }
        pt.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function (e) {
            if ((["A", "AREA"].includes(this.tagName) && e.preventDefault(), Fe(this))) return;
            Ri.getOrCreateInstance(this).show();
        }),
            Ke(Ri);
        const Bi = "toast",
            Wi = "hide",
            Fi = "show",
            $i = "showing",
            Ui = { animation: "boolean", autohide: "boolean", delay: "number" },
            zi = { animation: !0, autohide: !0, delay: 5e3 };
        class Xi extends vt {
            constructor(e, t) {
                super(e), (this._config = this._getConfig(t)), (this._timeout = null), (this._hasMouseInteraction = !1), (this._hasKeyboardInteraction = !1), this._setListeners();
            }
            static get DefaultType() {
                return Ui;
            }
            static get Default() {
                return zi;
            }
            static get NAME() {
                return Bi;
            }
            show() {
                if (pt.trigger(this._element, "show.bs.toast").defaultPrevented) return;
                this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
                this._element.classList.remove(Wi),
                    ze(this._element),
                    this._element.classList.add(Fi),
                    this._element.classList.add($i),
                    this._queueCallback(
                        () => {
                            this._element.classList.remove($i), pt.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide();
                        },
                        this._element,
                        this._config.animation
                    );
            }
            hide() {
                if (!this._element.classList.contains(Fi)) return;
                if (pt.trigger(this._element, "hide.bs.toast").defaultPrevented) return;
                this._element.classList.add($i),
                    this._queueCallback(
                        () => {
                            this._element.classList.add(Wi), this._element.classList.remove($i), this._element.classList.remove(Fi), pt.trigger(this._element, "hidden.bs.toast");
                        },
                        this._element,
                        this._config.animation
                    );
            }
            dispose() {
                this._clearTimeout(), this._element.classList.contains(Fi) && this._element.classList.remove(Fi), super.dispose();
            }
            _getConfig(e) {
                return (e = { ...zi, ...St.getDataAttributes(this._element), ...("object" === typeof e && e ? e : {}) }), Be(Bi, e, this.constructor.DefaultType), e;
            }
            _maybeScheduleHide() {
                this._config.autohide &&
                    (this._hasMouseInteraction ||
                        this._hasKeyboardInteraction ||
                        (this._timeout = setTimeout(() => {
                            this.hide();
                        }, this._config.delay)));
            }
            _onInteraction(e, t) {
                switch (e.type) {
                    case "mouseover":
                    case "mouseout":
                        this._hasMouseInteraction = t;
                        break;
                    case "focusin":
                    case "focusout":
                        this._hasKeyboardInteraction = t;
                }
                if (t) return void this._clearTimeout();
                const n = e.relatedTarget;
                this._element === n || this._element.contains(n) || this._maybeScheduleHide();
            }
            _setListeners() {
                pt.on(this._element, "mouseover.bs.toast", (e) => this._onInteraction(e, !0)),
                    pt.on(this._element, "mouseout.bs.toast", (e) => this._onInteraction(e, !1)),
                    pt.on(this._element, "focusin.bs.toast", (e) => this._onInteraction(e, !0)),
                    pt.on(this._element, "focusout.bs.toast", (e) => this._onInteraction(e, !1));
            }
            _clearTimeout() {
                clearTimeout(this._timeout), (this._timeout = null);
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    const t = Xi.getOrCreateInstance(this, e);
                    if ("string" === typeof e) {
                        if ("undefined" === typeof t[e]) throw new TypeError(`No method named "${e}"`);
                        t[e](this);
                    }
                });
            }
        }
        yt(Xi), Ke(Xi);
    },
]);
//# sourceMappingURL=application-cd18cc9e172b38d9ad5f.js.map
