! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(h, t) {
    function a(t) {
        var e = t.length,
            n = Z.type(t);
        return "function" !== n && !Z.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t))
    }

    function e(t, n, r) {
        if (Z.isFunction(n)) return Z.grep(t, function(t, e) {
            return !!n.call(t, e, t) !== r
        });
        if (n.nodeType) return Z.grep(t, function(t) {
            return t === n !== r
        });
        if ("string" == typeof n) {
            if (at.test(n)) return Z.filter(n, t, r);
            n = Z.filter(n, t)
        }
        return Z.grep(t, function(t) {
            return 0 <= U.call(n, t) !== r
        })
    }

    function n(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function p(t) {
        var n = ht[t] = {};
        return Z.each(t.match(ft) || [], function(t, e) {
            n[e] = !0
        }), n
    }

    function r() {
        G.removeEventListener("DOMContentLoaded", r, !1), h.removeEventListener("load", r, !1), Z.ready()
    }

    function i() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = Z.expando + Math.random()
    }

    function u(t, e, n) {
        var r;
        if (void 0 === n && 1 === t.nodeType)
            if (r = "data-" + e.replace(bt, "-$1").toLowerCase(), "string" == typeof(n = t.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : yt.test(n) ? Z.parseJSON(n) : n)
                } catch (z) {}
                vt.set(t, e, n)
            } else n = void 0;
        return n
    }

    function o() {
        return !0
    }

    function l() {
        return !1
    }

    function s() {
        try {
            return G.activeElement
        } catch (h) {}
    }

    function c(t, e) {
        return Z.nodeName(t, "table") && Z.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function m(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function g(t) {
        var e = It.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function v(t, e) {
        for (var n = 0, r = t.length; n < r; n++) gt.set(t[n], "globalEval", !e || gt.get(e[n], "globalEval"))
    }

    function d(t, e) {
        var n, r, i, o, s, a, u, l;
        if (1 === e.nodeType) {
            if (gt.hasData(t) && (o = gt.access(t), s = gt.set(e, o), l = o.events))
                for (i in delete s.handle, s.events = {}, l)
                    for (n = 0, r = l[i].length; n < r; n++) Z.event.add(e, i, l[i][n]);
            vt.hasData(t) && (a = vt.access(t), u = Z.extend({}, a), vt.set(e, u))
        }
    }

    function y(t, e) {
        var n = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && Z.nodeName(t, e) ? Z.merge([t], n) : n
    }

    function f(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && Et.test(t.type) ? e.checked = t.checked : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
    }

    function b(t, e) {
        var n, r = Z(e.createElement(t)).appendTo(e.body),
            i = h.getDefaultComputedStyle && (n = h.getDefaultComputedStyle(r[0])) ? n.display : Z.css(r[0], "display");
        return r.detach(), i
    }

    function w(t) {
        var e = G,
            n = Mt[t];
        return n || ("none" !== (n = b(t, e)) && n || ((e = (Bt = (Bt || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentDocument).write(), e.close(), n = b(t, e), Bt.detach()), Mt[t] = n), n
    }

    function x(t, e, n) {
        var r, i, o, s, a = t.style;
        return (n = n || zt(t)) && (s = n.getPropertyValue(e) || n[e]), n && ("" !== s || Z.contains(t.ownerDocument, t) || (s = Z.style(t, e)), Wt.test(s) && Ot.test(e) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), void 0 !== s ? s + "" : s
    }

    function S(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function C(t, e) {
        if (e in t) return e;
        for (var n = e[0].toUpperCase() + e.slice(1), r = e, i = Yt.length; i--;)
            if ((e = Yt[i] + n) in t) return e;
        return r
    }

    function T(t, e, n) {
        var r = Ut.exec(e);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : e
    }

    function E(t, e, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += Z.css(t, n + Ct[o], !0, i)), r ? ("content" === n && (s -= Z.css(t, "padding" + Ct[o], !0, i)), "margin" !== n && (s -= Z.css(t, "border" + Ct[o] + "Width", !0, i))) : (s += Z.css(t, "padding" + Ct[o], !0, i), "padding" !== n && (s += Z.css(t, "border" + Ct[o] + "Width", !0, i)));
        return s
    }

    function k(t, e, n) {
        var r = !0,
            i = "width" === e ? t.offsetWidth : t.offsetHeight,
            o = zt(t),
            s = "border-box" === Z.css(t, "boxSizing", !1, o);
        if (i <= 0 || null == i) {
            if (((i = x(t, e, o)) < 0 || null == i) && (i = t.style[e]), Wt.test(i)) return i;
            r = s && (Y.boxSizingReliable() || i === t.style[e]), i = parseFloat(i) || 0
        }
        return i + E(t, e, n || (s ? "border" : "content"), r, o) + "px"
    }

    function j(t, e) {
        for (var n, r, i, o = [], s = 0, a = t.length; s < a; s++)(r = t[s]).style && (o[s] = gt.get(r, "olddisplay"), n = r.style.display, e ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && Tt(r) && (o[s] = gt.access(r, "olddisplay", w(r.nodeName)))) : (i = Tt(r), "none" === n && i || gt.set(r, "olddisplay", i ? n : Z.css(r, "display"))));
        for (s = 0; s < a; s++)(r = t[s]).style && (e && "none" !== r.style.display && "" !== r.style.display || (r.style.display = e ? o[s] || "" : "none"));
        return t
    }

    function L(t, e, n, r, i) {
        return new L.prototype.init(t, e, n, r, i)
    }

    function A() {
        return setTimeout(function() {
            Gt = void 0
        }), Gt = Z.now()
    }

    function N(t, e) {
        var n, r = 0,
            i = {
                height: t
            };
        for (e = e ? 1 : 0; r < 4; r += 2 - e) i["margin" + (n = Ct[r])] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }

    function D(t, e, n) {
        for (var r, i = (se[e] || []).concat(se["*"]), o = 0, s = i.length; o < s; o++)
            if (r = i[o].call(n, e, t)) return r
    }

    function P(e, t, n) {
        var r, i, o, s, a, u, l, c = this,
            d = {},
            p = e.style,
            f = e.nodeType && Tt(e),
            h = gt.get(e, "fxshow");
        for (r in n.queue || (null == (a = Z._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
                a.unqueued || u()
            }), a.unqueued++, c.always(function() {
                c.always(function() {
                    a.unqueued--, Z.queue(e, "fx").length || a.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ("none" === (l = Z.css(e, "display")) ? gt.get(e, "olddisplay") || w(e.nodeName) : l) && "none" === Z.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", c.always(function() {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            })), t)
            if (i = t[r], ne.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) {
                    if ("show" !== i || !h || void 0 === h[r]) continue;
                    f = !0
                }
                d[r] = h && h[r] || Z.style(e, r)
            } else l = void 0;
        if (Z.isEmptyObject(d)) "inline" === ("none" === l ? w(e.nodeName) : l) && (p.display = l);
        else
            for (r in h ? "hidden" in h && (f = h.hidden) : h = gt.access(e, "fxshow", {}), o && (h.hidden = !f), f ? Z(e).show() : c.done(function() {
                    Z(e).hide()
                }), c.done(function() {
                    var t;
                    for (t in gt.remove(e, "fxshow"), d) Z.style(e, t, d[t])
                }), d) s = D(f ? h[r] : 0, r, c), r in h || (h[r] = s.start, f && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
    }

    function _(t, e) {
        var n, r, i, o, s;
        for (n in t)
            if (i = e[r = Z.camelCase(n)], o = t[n], Z.isArray(o) && (i = o[1], o = t[n] = o[0]), n !== r && (t[r] = o, delete t[n]), (s = Z.cssHooks[r]) && "expand" in s)
                for (n in o = s.expand(o), delete t[r], o) n in t || (t[n] = o[n], e[n] = i);
            else e[r] = i
    }

    function R(o, t, e) {
        var n, s, r = 0,
            i = oe.length,
            a = Z.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (s) return !1;
                for (var t = Gt || A(), e = Math.max(0, l.startTime + l.duration - t), n = 1 - (e / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return a.notifyWith(o, [l, n, e]), n < 1 && i ? e : (a.resolveWith(o, [l]), !1)
            },
            l = a.promise({
                elem: o,
                props: Z.extend({}, t),
                opts: Z.extend(!0, {
                    specialEasing: {}
                }, e),
                originalProperties: t,
                originalOptions: e,
                startTime: Gt || A(),
                duration: e.duration,
                tweens: [],
                createTween: function(t, e) {
                    var n = Z.Tween(o, l.opts, t, e, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function(t) {
                    var e = 0,
                        n = t ? l.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; e < n; e++) l.tweens[e].run(1);
                    return t ? a.resolveWith(o, [l, t]) : a.rejectWith(o, [l, t]), this
                }
            }),
            c = l.props;
        for (_(c, l.opts.specialEasing); r < i; r++)
            if (n = oe[r].call(l, o, c, l.opts)) return n;
        return Z.map(c, D, l), Z.isFunction(l.opts.start) && l.opts.start.call(o, l), Z.fx.timer(Z.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function q(o) {
        return function(t, e) {
            "string" != typeof t && (e = t, t = "*");
            var n, r = 0,
                i = t.toLowerCase().match(ft) || [];
            if (Z.isFunction(e))
                for (; n = i[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(e)) : (o[n] = o[n] || []).push(e)
        }
    }

    function $(e, i, o, s) {
        function a(t) {
            var r;
            return u[t] = !0, Z.each(e[t] || [], function(t, e) {
                var n = e(i, o, s);
                return "string" != typeof n || l || u[n] ? l ? !(r = n) : void 0 : (i.dataTypes.unshift(n), a(n), !1)
            }), r
        }
        var u = {},
            l = e === Ee;
        return a(i.dataTypes[0]) || !u["*"] && a("*")
    }

    function I(t, e) {
        var n, r, i = Z.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n]);
        return r && Z.extend(!0, t, r), t
    }

    function H(t, e, n) {
        for (var r, i, o, s, a = t.contents, u = t.dataTypes;
            "*" === u[0];) u.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
        if (r)
            for (i in a)
                if (a[i] && a[i].test(r)) {
                    u.unshift(i);
                    break
                } if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || t.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
    }

    function F(t, e, n, r) {
        var i, o, s, a, u, l = {},
            c = t.dataTypes.slice();
        if (c[1])
            for (s in t.converters) l[s.toLowerCase()] = t.converters[s];
        for (o = c.shift(); o;)
            if (t.responseFields[o] && (n[t.responseFields[o]] = e), !u && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), u = o, o = c.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (!(s = l[u + " " + o] || l["* " + o]))
                for (i in l)
                    if ((a = i.split(" "))[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                        !0 === s ? s = l[i] : !0 !== l[i] && (o = a[0], c.unshift(a[1]));
                        break
                    } if (!0 !== s)
                if (s && t["throws"]) e = s(e);
                else try {
                    e = s(e)
                } catch (G) {
                    return {
                        state: "parsererror",
                        error: s ? G : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function B(n, t, r, i) {
        var e;
        if (Z.isArray(t)) Z.each(t, function(t, e) {
            r || Le.test(n) ? i(n, e) : B(n + "[" + ("object" == typeof e ? t : "") + "]", e, r, i)
        });
        else if (r || "object" !== Z.type(t)) i(n, t);
        else
            for (e in t) B(n + "[" + e + "]", t[e], r, i)
    }

    function M(t) {
        return Z.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var O = [],
        W = O.slice,
        z = O.concat,
        V = O.push,
        U = O.indexOf,
        X = {},
        K = X.toString,
        J = X.hasOwnProperty,
        Y = {},
        G = h.document,
        Q = "2.1.1",
        Z = function(t, e) {
            return new Z.fn.init(t, e)
        },
        tt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        et = /^-ms-/,
        nt = /-([\da-z])/gi,
        rt = function(t, e) {
            return e.toUpperCase()
        };
    Z.fn = Z.prototype = {
        jquery: Q,
        constructor: Z,
        selector: "",
        length: 0,
        toArray: function() {
            return W.call(this)
        },
        get: function(t) {
            return null != t ? t < 0 ? this[t + this.length] : this[t] : W.call(this)
        },
        pushStack: function(t) {
            var e = Z.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return Z.each(this, t, e)
        },
        map: function(n) {
            return this.pushStack(Z.map(this, function(t, e) {
                return n.call(t, e, t)
            }))
        },
        slice: function() {
            return this.pushStack(W.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (t < 0 ? e : 0);
            return this.pushStack(0 <= n && n < e ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: V,
        sort: O.sort,
        splice: O.splice
    }, Z.extend = Z.fn.extend = function(t) {
        var e, n, r, i, o, s, a = t || {},
            u = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[u] || {}, u++), "object" == typeof a || Z.isFunction(a) || (a = {}), u === l && (a = this, u--); u < l; u++)
            if (null != (e = arguments[u]))
                for (n in e) r = a[n], a !== (i = e[n]) && (c && i && (Z.isPlainObject(i) || (o = Z.isArray(i))) ? (o ? (o = !1, s = r && Z.isArray(r) ? r : []) : s = r && Z.isPlainObject(r) ? r : {}, a[n] = Z.extend(c, s, i)) : void 0 !== i && (a[n] = i));
        return a
    }, Z.extend({
        expando: "jQuery" + (Q + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === Z.type(t)
        },
        isArray: Array.isArray,
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            return !Z.isArray(t) && 0 <= t - parseFloat(t)
        },
        isPlainObject: function(t) {
            return "object" === Z.type(t) && !t.nodeType && !Z.isWindow(t) && !(t.constructor && !J.call(t.constructor.prototype, "isPrototypeOf"))
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? X[K.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            var e, n = eval;
            (t = Z.trim(t)) && (1 === t.indexOf("use strict") ? ((e = G.createElement("script")).text = t, G.head.appendChild(e).parentNode.removeChild(e)) : n(t))
        },
        camelCase: function(t) {
            return t.replace(et, "ms-").replace(nt, rt)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, n) {
            var r = 0,
                i = t.length,
                o = a(t);
            if (n) {
                if (o)
                    for (; r < i && !1 !== e.apply(t[r], n); r++);
                else
                    for (r in t)
                        if (!1 === e.apply(t[r], n)) break
            } else if (o)
                for (; r < i && !1 !== e.call(t[r], r, t[r]); r++);
            else
                for (r in t)
                    if (!1 === e.call(t[r], r, t[r])) break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(tt, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (a(Object(t)) ? Z.merge(n, "string" == typeof t ? [t] : t) : V.call(n, t)), n
        },
        inArray: function(t, e, n) {
            return null == e ? -1 : U.call(e, t, n)
        },
        merge: function(t, e) {
            for (var n = +e.length, r = 0, i = t.length; r < n; r++) t[i++] = e[r];
            return t.length = i, t
        },
        grep: function(t, e, n) {
            for (var r = [], i = 0, o = t.length, s = !n; i < o; i++) !e(t[i], i) !== s && r.push(t[i]);
            return r
        },
        map: function(t, e, n) {
            var r, i = 0,
                o = t.length,
                s = [];
            if (a(t))
                for (; i < o; i++) null != (r = e(t[i], i, n)) && s.push(r);
            else
                for (i in t) null != (r = e(t[i], i, n)) && s.push(r);
            return z.apply([], s)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, r, i;
            return "string" == typeof e && (n = t[e], e = t, t = n), Z.isFunction(t) ? (r = W.call(arguments, 2), (i = function() {
                return t.apply(e || this, r.concat(W.call(arguments)))
            }).guid = t.guid = t.guid || Z.guid++, i) : void 0
        },
        now: Date.now,
        support: Y
    }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        X["[object " + e + "]"] = e.toLowerCase()
    });
    var it = function(n) {
        function w(t, e, n, r) {
            var i, o, s, a, u, l, c, d, p, f;
            if ((e ? e.ownerDocument || e : B) !== P && D(e), n = n || [], !t || "string" != typeof t) return n;
            if (1 !== (a = (e = e || P).nodeType) && 9 !== a) return [];
            if (R && !r) {
                if (i = yt.exec(t))
                    if (s = i[1]) {
                        if (9 === a) {
                            if (!(o = e.getElementById(s)) || !o.parentNode) return n;
                            if (o.id === s) return n.push(o), n
                        } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(s)) && H(e, o) && o.id === s) return n.push(o), n
                    } else {
                        if (i[2]) return Z.apply(n, e.getElementsByTagName(t)), n;
                        if ((s = i[3]) && v.getElementsByClassName && e.getElementsByClassName) return Z.apply(n, e.getElementsByClassName(s)), n
                    } if (v.qsa && (!q || !q.test(t))) {
                    if (d = c = F, p = e, f = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (l = E(t), (c = e.getAttribute("id")) ? d = c.replace(wt, "\\$&") : e.setAttribute("id", d), d = "[id='" + d + "'] ", u = l.length; u--;) l[u] = d + m(l[u]);
                        p = bt.test(t) && h(e.parentNode) || e, f = l.join(",")
                    }
                    if (f) try {
                        return Z.apply(n, p.querySelectorAll(f)), n
                    } catch (W) {} finally {
                        c || e.removeAttribute("id")
                    }
                }
            }
            return j(t.replace(ut, "$1"), e, n, r)
        }

        function t() {
            function n(t, e) {
                return r.push(t + " ") > S.cacheLength && delete n[r.shift()], n[t + " "] = e
            }
            var r = [];
            return n
        }

        function u(t) {
            return t[F] = !0, t
        }

        function r(t) {
            var e = P.createElement("div");
            try {
                return !!t(e)
            } catch (v) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function e(t, e) {
            for (var n = t.split("|"), r = t.length; r--;) S.attrHandle[n[r]] = e
        }

        function l(t, e) {
            var n = e && t,
                r = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || K) - (~t.sourceIndex || K);
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function i(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function o(n) {
            return function(t) {
                var e = t.nodeName.toLowerCase();
                return ("input" === e || "button" === e) && t.type === n
            }
        }

        function s(s) {
            return u(function(o) {
                return o = +o, u(function(t, e) {
                    for (var n, r = s([], t.length, o), i = r.length; i--;) t[n = r[i]] && (t[n] = !(e[n] = t[n]))
                })
            })
        }

        function h(t) {
            return t && typeof t.getElementsByTagName !== X && t
        }

        function a() {}

        function m(t) {
            for (var e = 0, n = t.length, r = ""; e < n; e++) r += t[e].value;
            return r
        }

        function d(s, t, e) {
            var a = t.dir,
                u = e && "parentNode" === a,
                l = O++;
            return t.first ? function(t, e, n) {
                for (; t = t[a];)
                    if (1 === t.nodeType || u) return s(t, e, n)
            } : function(t, e, n) {
                var r, i, o = [M, l];
                if (n) {
                    for (; t = t[a];)
                        if ((1 === t.nodeType || u) && s(t, e, n)) return !0
                } else
                    for (; t = t[a];)
                        if (1 === t.nodeType || u) {
                            if ((r = (i = t[F] || (t[F] = {}))[a]) && r[0] === M && r[1] === l) return o[2] = r[2];
                            if ((i[a] = o)[2] = s(t, e, n)) return !0
                        }
            }
        }

        function p(i) {
            return 1 < i.length ? function(t, e, n) {
                for (var r = i.length; r--;)
                    if (!i[r](t, e, n)) return !1;
                return !0
            } : i[0]
        }

        function y(t, e, n) {
            for (var r = 0, i = e.length; r < i; r++) w(t, e[r], n);
            return n
        }

        function x(t, e, n, r, i) {
            for (var o, s = [], a = 0, u = t.length, l = null != e; a < u; a++)(o = t[a]) && (!n || n(o, r, i)) && (s.push(o), l && e.push(a));
            return s
        }

        function b(f, h, m, g, v, t) {
            return g && !g[F] && (g = b(g)), v && !v[F] && (v = b(v, t)), u(function(t, e, n, r) {
                var i, o, s, a = [],
                    u = [],
                    l = e.length,
                    c = t || y(h || "*", n.nodeType ? [n] : n, []),
                    d = !f || !t && h ? c : x(c, a, f, n, r),
                    p = m ? v || (t ? f : l || g) ? [] : e : d;
                if (m && m(d, p, n, r), g)
                    for (i = x(p, u), g(i, [], n, r), o = i.length; o--;)(s = i[o]) && (p[u[o]] = !(d[u[o]] = s));
                if (t) {
                    if (v || f) {
                        if (v) {
                            for (i = [], o = p.length; o--;)(s = p[o]) && i.push(d[o] = s);
                            v(null, p = [], i, r)
                        }
                        for (o = p.length; o--;)(s = p[o]) && -1 < (i = v ? et.call(t, s) : a[o]) && (t[i] = !(e[i] = s))
                    }
                } else p = x(p === e ? p.splice(l, p.length) : p), v ? v(null, e, p, r) : Z.apply(e, p)
            })
        }

        function f(t) {
            for (var r, e, n, i = t.length, o = S.relative[t[0].type], s = o || S.relative[" "], a = o ? 1 : 0, u = d(function(t) {
                    return t === r
                }, s, !0), l = d(function(t) {
                    return -1 < et.call(r, t)
                }, s, !0), c = [function(t, e, n) {
                    return !o && (n || e !== L) || ((r = e).nodeType ? u(t, e, n) : l(t, e, n))
                }]; a < i; a++)
                if (e = S.relative[t[a].type]) c = [d(p(c), e)];
                else {
                    if ((e = S.filter[t[a].type].apply(null, t[a].matches))[F]) {
                        for (n = ++a; n < i && !S.relative[t[n].type]; n++);
                        return b(1 < a && p(c), 1 < a && m(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(ut, "$1"), e, a < n && f(t.slice(a, n)), n < i && f(t = t.slice(n)), n < i && m(t))
                    }
                    c.push(e)
                } return p(c)
        }

        function c(g, v) {
            var y = 0 < v.length,
                b = 0 < g.length,
                t = function(t, e, n, r, i) {
                    var o, s, a, u = 0,
                        l = "0",
                        c = t && [],
                        d = [],
                        p = L,
                        f = t || b && S.find.TAG("*", i),
                        h = M += null == p ? 1 : Math.random() || .1,
                        m = f.length;
                    for (i && (L = e !== P && e); l !== m && null != (o = f[l]); l++) {
                        if (b && o) {
                            for (s = 0; a = g[s++];)
                                if (a(o, e, n)) {
                                    r.push(o);
                                    break
                                } i && (M = h)
                        }
                        y && ((o = !a && o) && u--, t && c.push(o))
                    }
                    if (u += l, y && l !== u) {
                        for (s = 0; a = v[s++];) a(c, d, e, n);
                        if (t) {
                            if (0 < u)
                                for (; l--;) c[l] || d[l] || (d[l] = G.call(r));
                            d = x(d)
                        }
                        Z.apply(r, d), i && !t && 0 < d.length && 1 < u + v.length && w.uniqueSort(r)
                    }
                    return i && (M = h, L = p), c
                };
            return y ? u(t) : t
        }
        var g, v, S, C, T, E, k, j, L, A, N, D, P, _, R, q, $, I, H, F = "sizzle" + -new Date,
            B = n.document,
            M = 0,
            O = 0,
            W = t(),
            z = t(),
            V = t(),
            U = function(t, e) {
                return t === e && (N = !0), 0
            },
            X = "undefined",
            K = 1 << 31,
            J = {}.hasOwnProperty,
            Y = [],
            G = Y.pop,
            Q = Y.push,
            Z = Y.push,
            tt = Y.slice,
            et = Y.indexOf || function(t) {
                for (var e = 0, n = this.length; e < n; e++)
                    if (this[e] === t) return e;
                return -1
            },
            nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            rt = "[\\x20\\t\\r\\n\\f]",
            it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ot = it.replace("w", "w#"),
            st = "\\[" + rt + "*(" + it + ")(?:" + rt + "*([*^$|!~]?=)" + rt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + rt + "*\\]",
            at = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + st + ")*)|.*)\\)|)",
            ut = new RegExp("^" + rt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + rt + "+$", "g"),
            lt = new RegExp("^" + rt + "*," + rt + "*"),
            ct = new RegExp("^" + rt + "*([>+~]|" + rt + ")" + rt + "*"),
            dt = new RegExp("=" + rt + "*([^\\]'\"]*?)" + rt + "*\\]", "g"),
            pt = new RegExp(at),
            ft = new RegExp("^" + ot + "$"),
            ht = {
                ID: new RegExp("^#(" + it + ")"),
                CLASS: new RegExp("^\\.(" + it + ")"),
                TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + st),
                PSEUDO: new RegExp("^" + at),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + rt + "*(even|odd|(([+-]|)(\\d*)n|)" + rt + "*(?:([+-]|)" + rt + "*(\\d+)|))" + rt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + nt + ")$", "i"),
                needsContext: new RegExp("^" + rt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + rt + "*((?:-\\d)?\\d*)" + rt + "*\\)|)(?=[^-]|$)", "i")
            },
            mt = /^(?:input|select|textarea|button)$/i,
            gt = /^h\d$/i,
            vt = /^[^{]+\{\s*\[native \w/,
            yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            bt = /[+~]/,
            wt = /'|\\/g,
            xt = new RegExp("\\\\([\\da-f]{1,6}" + rt + "?|(" + rt + ")|.)", "ig"),
            St = function(t, e, n) {
                var r = "0x" + e - 65536;
                return r != r || n ? e : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            };
        try {
            Z.apply(Y = tt.call(B.childNodes), B.childNodes), Y[B.childNodes.length].nodeType
        } catch (qt) {
            Z = {
                apply: Y.length ? function(t, e) {
                    Q.apply(t, tt.call(e))
                } : function(t, e) {
                    for (var n = t.length, r = 0; t[n++] = e[r++];);
                    t.length = n - 1
                }
            }
        }
        for (g in v = w.support = {}, T = w.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, D = w.setDocument = function(t) {
                var e, u = t ? t.ownerDocument || t : B,
                    n = u.defaultView;
                return u !== P && 9 === u.nodeType && u.documentElement ? (_ = (P = u).documentElement, R = !T(u), n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", function() {
                    D()
                }, !1) : n.attachEvent && n.attachEvent("onunload", function() {
                    D()
                })), v.attributes = r(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), v.getElementsByTagName = r(function(t) {
                    return t.appendChild(u.createComment("")), !t.getElementsByTagName("*").length
                }), v.getElementsByClassName = vt.test(u.getElementsByClassName) && r(function(t) {
                    return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
                }), v.getById = r(function(t) {
                    return _.appendChild(t).id = F, !u.getElementsByName || !u.getElementsByName(F).length
                }), v.getById ? (S.find.ID = function(t, e) {
                    if (typeof e.getElementById !== X && R) {
                        var n = e.getElementById(t);
                        return n && n.parentNode ? [n] : []
                    }
                }, S.filter.ID = function(t) {
                    var e = t.replace(xt, St);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete S.find.ID, S.filter.ID = function(t) {
                    var n = t.replace(xt, St);
                    return function(t) {
                        var e = typeof t.getAttributeNode !== X && t.getAttributeNode("id");
                        return e && e.value === n
                    }
                }), S.find.TAG = v.getElementsByTagName ? function(t, e) {
                    return typeof e.getElementsByTagName !== X ? e.getElementsByTagName(t) : void 0
                } : function(t, e) {
                    var n, r = [],
                        i = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" !== t) return o;
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }, S.find.CLASS = v.getElementsByClassName && function(t, e) {
                    return typeof e.getElementsByClassName !== X && R ? e.getElementsByClassName(t) : void 0
                }, $ = [], q = [], (v.qsa = vt.test(u.querySelectorAll)) && (r(function(t) {
                    t.innerHTML = "<select msallowclip=''><option selected=''></option></select>", t.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + rt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || q.push("\\[" + rt + "*(?:value|" + nt + ")"), t.querySelectorAll(":checked").length || q.push(":checked")
                }), r(function(t) {
                    var e = u.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && q.push("name" + rt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), q.push(",.*:")
                })), (v.matchesSelector = vt.test(I = _.matches || _.webkitMatchesSelector || _.mozMatchesSelector || _.oMatchesSelector || _.msMatchesSelector)) && r(function(t) {
                    v.disconnectedMatch = I.call(t, "div"), I.call(t, "[s!='']:x"), $.push("!=", at)
                }), q = q.length && new RegExp(q.join("|")), $ = $.length && new RegExp($.join("|")), e = vt.test(_.compareDocumentPosition), H = e || vt.test(_.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        r = e && e.parentNode;
                    return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, U = e ? function(t, e) {
                    if (t === e) return N = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !v.sortDetached && e.compareDocumentPosition(t) === n ? t === u || t.ownerDocument === B && H(B, t) ? -1 : e === u || e.ownerDocument === B && H(B, e) ? 1 : A ? et.call(A, t) - et.call(A, e) : 0 : 4 & n ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return N = !0, 0;
                    var n, r = 0,
                        i = t.parentNode,
                        o = e.parentNode,
                        s = [t],
                        a = [e];
                    if (!i || !o) return t === u ? -1 : e === u ? 1 : i ? -1 : o ? 1 : A ? et.call(A, t) - et.call(A, e) : 0;
                    if (i === o) return l(t, e);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (; s[r] === a[r];) r++;
                    return r ? l(s[r], a[r]) : s[r] === B ? -1 : a[r] === B ? 1 : 0
                }, u) : P
            }, w.matches = function(t, e) {
                return w(t, null, null, e)
            }, w.matchesSelector = function(t, e) {
                if ((t.ownerDocument || t) !== P && D(t), e = e.replace(dt, "='$1']"), !(!v.matchesSelector || !R || $ && $.test(e) || q && q.test(e))) try {
                    var n = I.call(t, e);
                    if (n || v.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                } catch (C) {}
                return 0 < w(e, P, null, [t]).length
            }, w.contains = function(t, e) {
                return (t.ownerDocument || t) !== P && D(t), H(t, e)
            }, w.attr = function(t, e) {
                (t.ownerDocument || t) !== P && D(t);
                var n = S.attrHandle[e.toLowerCase()],
                    r = n && J.call(S.attrHandle, e.toLowerCase()) ? n(t, e, !R) : void 0;
                return void 0 !== r ? r : v.attributes || !R ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
            }, w.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, w.uniqueSort = function(t) {
                var e, n = [],
                    r = 0,
                    i = 0;
                if (N = !v.detectDuplicates, A = !v.sortStable && t.slice(0), t.sort(U), N) {
                    for (; e = t[i++];) e === t[i] && (r = n.push(i));
                    for (; r--;) t.splice(n[r], 1)
                }
                return A = null, t
            }, C = w.getText = function(t) {
                var e, n = "",
                    r = 0,
                    i = t.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += C(t)
                    } else if (3 === i || 4 === i) return t.nodeValue
                } else
                    for (; e = t[r++];) n += C(e);
                return n
            }, (S = w.selectors = {
                cacheLength: 50,
                createPseudo: u,
                match: ht,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(xt, St), t[3] = (t[3] || t[4] || t[5] || "").replace(xt, St), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || w.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && w.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return ht.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && pt.test(n) && (e = E(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(xt, St).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = W[t + " "];
                        return e || (e = new RegExp("(^|" + rt + ")" + t + "(" + rt + "|$)")) && W(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== X && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(t) {
                            var e = w.attr(t, n);
                            return null == e ? "!=" === r : !r || (e += "", "=" === r ? e === i : "!=" === r ? e !== i : "^=" === r ? i && 0 === e.indexOf(i) : "*=" === r ? i && -1 < e.indexOf(i) : "$=" === r ? i && e.slice(-i.length) === i : "~=" === r ? -1 < (" " + e + " ").indexOf(i) : "|=" === r && (e === i || e.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(f, t, e, h, m) {
                        var g = "nth" !== f.slice(0, 3),
                            v = "last" !== f.slice(-4),
                            y = "of-type" === t;
                        return 1 === h && 0 === m ? function(t) {
                            return !!t.parentNode
                        } : function(t, e, n) {
                            var r, i, o, s, a, u, l = g !== v ? "nextSibling" : "previousSibling",
                                c = t.parentNode,
                                d = y && t.nodeName.toLowerCase(),
                                p = !n && !y;
                            if (c) {
                                if (g) {
                                    for (; l;) {
                                        for (o = t; o = o[l];)
                                            if (y ? o.nodeName.toLowerCase() === d : 1 === o.nodeType) return !1;
                                        u = l = "only" === f && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [v ? c.firstChild : c.lastChild], v && p) {
                                    for (a = (r = (i = c[F] || (c[F] = {}))[f] || [])[0] === M && r[1], s = r[0] === M && r[2], o = a && c.childNodes[a]; o = ++a && o && o[l] || (s = a = 0) || u.pop();)
                                        if (1 === o.nodeType && ++s && o === t) {
                                            i[f] = [M, a, s];
                                            break
                                        }
                                } else if (p && (r = (t[F] || (t[F] = {}))[f]) && r[0] === M) s = r[1];
                                else
                                    for (;
                                        (o = ++a && o && o[l] || (s = a = 0) || u.pop()) && ((y ? o.nodeName.toLowerCase() !== d : 1 !== o.nodeType) || !++s || (p && ((o[F] || (o[F] = {}))[f] = [M, s]), o !== t)););
                                return (s -= m) === h || s % h == 0 && 0 <= s / h
                            }
                        }
                    },
                    PSEUDO: function(t, o) {
                        var e, s = S.pseudos[t] || S.setFilters[t.toLowerCase()] || w.error("unsupported pseudo: " + t);
                        return s[F] ? s(o) : 1 < s.length ? (e = [t, t, "", o], S.setFilters.hasOwnProperty(t.toLowerCase()) ? u(function(t, e) {
                            for (var n, r = s(t, o), i = r.length; i--;) t[n = et.call(t, r[i])] = !(e[n] = r[i])
                        }) : function(t) {
                            return s(t, 0, e)
                        }) : s
                    }
                },
                pseudos: {
                    not: u(function(t) {
                        var r = [],
                            i = [],
                            a = k(t.replace(ut, "$1"));
                        return a[F] ? u(function(t, e, n, r) {
                            for (var i, o = a(t, null, r, []), s = t.length; s--;)(i = o[s]) && (t[s] = !(e[s] = i))
                        }) : function(t, e, n) {
                            return r[0] = t, a(r, null, n, i), !i.pop()
                        }
                    }),
                    has: u(function(e) {
                        return function(t) {
                            return 0 < w(e, t).length
                        }
                    }),
                    contains: u(function(e) {
                        return function(t) {
                            return -1 < (t.textContent || t.innerText || C(t)).indexOf(e)
                        }
                    }),
                    lang: u(function(n) {
                        return ft.test(n || "") || w.error("unsupported lang: " + n), n = n.replace(xt, St).toLowerCase(),
                            function(t) {
                                var e;
                                do {
                                    if (e = R ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var e = n.location && n.location.hash;
                        return e && e.slice(1) === t.id
                    },
                    root: function(t) {
                        return t === _
                    },
                    focus: function(t) {
                        return t === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return !1 === t.disabled
                    },
                    disabled: function(t) {
                        return !0 === t.disabled
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !S.pseudos.empty(t)
                    },
                    header: function(t) {
                        return gt.test(t.nodeName)
                    },
                    input: function(t) {
                        return mt.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: s(function() {
                        return [0]
                    }),
                    last: s(function(t, e) {
                        return [e - 1]
                    }),
                    eq: s(function(t, e, n) {
                        return [n < 0 ? n + e : n]
                    }),
                    even: s(function(t, e) {
                        for (var n = 0; n < e; n += 2) t.push(n);
                        return t
                    }),
                    odd: s(function(t, e) {
                        for (var n = 1; n < e; n += 2) t.push(n);
                        return t
                    }),
                    lt: s(function(t, e, n) {
                        for (var r = n < 0 ? n + e : n; 0 <= --r;) t.push(r);
                        return t
                    }),
                    gt: s(function(t, e, n) {
                        for (var r = n < 0 ? n + e : n; ++r < e;) t.push(r);
                        return t
                    })
                }
            }).pseudos.nth = S.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) S.pseudos[g] = i(g);
        for (g in {
                submit: !0,
                reset: !0
            }) S.pseudos[g] = o(g);
        return a.prototype = S.filters = S.pseudos, S.setFilters = new a, E = w.tokenize = function(t, e) {
            var n, r, i, o, s, a, u, l = z[t + " "];
            if (l) return e ? 0 : l.slice(0);
            for (s = t, a = [], u = S.preFilter; s;) {
                for (o in (!n || (r = lt.exec(s))) && (r && (s = s.slice(r[0].length) || s), a.push(i = [])), n = !1, (r = ct.exec(s)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(ut, " ")
                    }), s = s.slice(n.length)), S.filter) !(r = ht[o].exec(s)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), s = s.slice(n.length));
                if (!n) break
            }
            return e ? s.length : s ? w.error(t) : z(t, a).slice(0)
        }, k = w.compile = function(t, e) {
            var n, r = [],
                i = [],
                o = V[t + " "];
            if (!o) {
                for (e || (e = E(t)), n = e.length; n--;)(o = f(e[n]))[F] ? r.push(o) : i.push(o);
                (o = V(t, c(i, r))).selector = t
            }
            return o
        }, j = w.select = function(t, e, n, r) {
            var i, o, s, a, u, l = "function" == typeof t && t,
                c = !r && E(t = l.selector || t);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (s = o[0]).type && v.getById && 9 === e.nodeType && R && S.relative[o[1].type]) {
                    if (!(e = (S.find.ID(s.matches[0].replace(xt, St), e) || [])[0])) return n;
                    l && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (i = ht.needsContext.test(t) ? 0 : o.length; i-- && (s = o[i], !S.relative[a = s.type]);)
                    if ((u = S.find[a]) && (r = u(s.matches[0].replace(xt, St), bt.test(o[0].type) && h(e.parentNode) || e))) {
                        if (o.splice(i, 1), !(t = r.length && m(o))) return Z.apply(n, r), n;
                        break
                    }
            }
            return (l || k(t, c))(r, e, !R, n, bt.test(t) && h(e.parentNode) || e), n
        }, v.sortStable = F.split("").sort(U).join("") === F, v.detectDuplicates = !!N, D(), v.sortDetached = r(function(t) {
            return 1 & t.compareDocumentPosition(P.createElement("div"))
        }), r(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || e("type|href|height|width", function(t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), v.attributes && r(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || e("value", function(t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), r(function(t) {
            return null == t.getAttribute("disabled")
        }) || e(nt, function(t, e, n) {
            var r;
            return n ? void 0 : !0 === t[e] ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
        }), w
    }(h);
    Z.find = it, Z.expr = it.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = it.uniqueSort, Z.text = it.getText, Z.isXMLDoc = it.isXML, Z.contains = it.contains;
    var ot = Z.expr.match.needsContext,
        st = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        at = /^.[^:#\[\.,]*$/;
    Z.filter = function(t, e, n) {
        var r = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? Z.find.matchesSelector(r, t) ? [r] : [] : Z.find.matches(t, Z.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, Z.fn.extend({
        find: function(t) {
            var e, n = this.length,
                r = [],
                i = this;
            if ("string" != typeof t) return this.pushStack(Z(t).filter(function() {
                for (e = 0; e < n; e++)
                    if (Z.contains(i[e], this)) return !0
            }));
            for (e = 0; e < n; e++) Z.find(t, i[e], r);
            return (r = this.pushStack(1 < n ? Z.unique(r) : r)).selector = this.selector ? this.selector + " " + t : t, r
        },
        filter: function(t) {
            return this.pushStack(e(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(e(this, t || [], !0))
        },
        is: function(t) {
            return !!e(this, "string" == typeof t && ot.test(t) ? Z(t) : t || [], !1).length
        }
    });
    var ut, lt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (Z.fn.init = function(t, e) {
        var n, r;
        if (!t) return this;
        if ("string" != typeof t) return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : Z.isFunction(t) ? "undefined" != typeof ut.ready ? ut.ready(t) : t(Z) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), Z.makeArray(t, this));
        if (!(n = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : lt.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || ut).find(t) : this.constructor(e).find(t);
        if (n[1]) {
            if (e = e instanceof Z ? e[0] : e, Z.merge(this, Z.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : G, !0)), st.test(n[1]) && Z.isPlainObject(e))
                for (n in e) Z.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
            return this
        }
        return (r = G.getElementById(n[2])) && r.parentNode && (this.length = 1, this[0] = r), this.context = G, this.selector = t, this
    }).prototype = Z.fn, ut = Z(G);
    var ct = /^(?:parents|prev(?:Until|All))/,
        dt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    Z.extend({
        dir: function(t, e, n) {
            for (var r = [], i = void 0 !== n;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (i && Z(t).is(n)) break;
                    r.push(t)
                } return r
        },
        sibling: function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    }), Z.fn.extend({
        has: function(t) {
            var e = Z(t, this),
                n = e.length;
            return this.filter(function() {
                for (var t = 0; t < n; t++)
                    if (Z.contains(this, e[t])) return !0
            })
        },
        closest: function(t, e) {
            for (var n, r = 0, i = this.length, o = [], s = ot.test(t) || "string" != typeof t ? Z(t, e || this.context) : 0; r < i; r++)
                for (n = this[r]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && Z.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    } return this.pushStack(1 < o.length ? Z.unique(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? U.call(Z(t), this[0]) : U.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(Z.unique(Z.merge(this.get(), Z(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), Z.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return Z.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return Z.dir(t, "parentNode", n)
        },
        next: function(t) {
            return n(t, "nextSibling")
        },
        prev: function(t) {
            return n(t, "previousSibling")
        },
        nextAll: function(t) {
            return Z.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return Z.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return Z.dir(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return Z.dir(t, "previousSibling", n)
        },
        siblings: function(t) {
            return Z.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return Z.sibling(t.firstChild)
        },
        contents: function(t) {
            return t.contentDocument || Z.merge([], t.childNodes)
        }
    }, function(r, i) {
        Z.fn[r] = function(t, e) {
            var n = Z.map(this, i, t);
            return "Until" !== r.slice(-5) && (e = t), e && "string" == typeof e && (n = Z.filter(e, n)), 1 < this.length && (dt[r] || Z.unique(n), ct.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var pt, ft = /\S+/g,
        ht = {};
    Z.Callbacks = function(i) {
        i = "string" == typeof i ? ht[i] || p(i) : Z.extend({}, i);
        var e, n, o, s, a, r, u = [],
            l = !i.once && [],
            c = function(t) {
                for (e = i.memory && t, n = !0, r = s || 0, s = 0, a = u.length, o = !0; u && r < a; r++)
                    if (!1 === u[r].apply(t[0], t[1]) && i.stopOnFalse) {
                        e = !1;
                        break
                    } o = !1, u && (l ? l.length && c(l.shift()) : e ? u = [] : d.disable())
            },
            d = {
                add: function() {
                    if (u) {
                        var t = u.length;
                        ! function r(t) {
                            Z.each(t, function(t, e) {
                                var n = Z.type(e);
                                "function" === n ? i.unique && d.has(e) || u.push(e) : e && e.length && "string" !== n && r(e)
                            })
                        }(arguments), o ? a = u.length : e && (s = t, c(e))
                    }
                    return this
                },
                remove: function() {
                    return u && Z.each(arguments, function(t, e) {
                        for (var n; - 1 < (n = Z.inArray(e, u, n));) u.splice(n, 1), o && (n <= a && a--, n <= r && r--)
                    }), this
                },
                has: function(t) {
                    return t ? -1 < Z.inArray(t, u) : !(!u || !u.length)
                },
                empty: function() {
                    return u = [], a = 0, this
                },
                disable: function() {
                    return u = l = e = void 0, this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return l = void 0, e || d.disable(), this
                },
                locked: function() {
                    return !l
                },
                fireWith: function(t, e) {
                    return !u || n && !l || (e = [t, (e = e || []).slice ? e.slice() : e], o ? l.push(e) : c(e)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!n
                }
            };
        return d
    }, Z.extend({
        Deferred: function(t) {
            var o = [
                    ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", Z.Callbacks("memory")]
                ],
                i = "pending",
                s = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var i = arguments;
                        return Z.Deferred(function(r) {
                            Z.each(o, function(t, e) {
                                var n = Z.isFunction(i[t]) && i[t];
                                a[e[1]](function() {
                                    var t = n && n.apply(this, arguments);
                                    t && Z.isFunction(t.promise) ? t.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[e[0] + "With"](this === s ? r.promise() : this, n ? [t] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? Z.extend(t, s) : s
                    }
                },
                a = {};
            return s.pipe = s.then, Z.each(o, function(t, e) {
                var n = e[2],
                    r = e[3];
                s[e[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[1 ^ t][2].disable, o[2][2].lock), a[e[0]] = function() {
                    return a[e[0] + "With"](this === a ? s : this, arguments), this
                }, a[e[0] + "With"] = n.fireWith
            }), s.promise(a), t && t.call(a, a), a
        },
        when: function(t) {
            var i, e, n, r = 0,
                o = W.call(arguments),
                s = o.length,
                a = 1 !== s || t && Z.isFunction(t.promise) ? s : 0,
                u = 1 === a ? t : Z.Deferred(),
                l = function(e, n, r) {
                    return function(t) {
                        n[e] = this, r[e] = 1 < arguments.length ? W.call(arguments) : t, r === i ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                    }
                };
            if (1 < s)
                for (i = new Array(s), e = new Array(s), n = new Array(s); r < s; r++) o[r] && Z.isFunction(o[r].promise) ? o[r].promise().done(l(r, n, o)).fail(u.reject).progress(l(r, e, i)) : --a;
            return a || u.resolveWith(n, o), u.promise()
        }
    }), Z.fn.ready = function(t) {
        return Z.ready.promise().done(t), this
    }, Z.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? Z.readyWait++ : Z.ready(!0)
        },
        ready: function(t) {
            (!0 === t ? --Z.readyWait : Z.isReady) || ((Z.isReady = !0) !== t && 0 < --Z.readyWait || (pt.resolveWith(G, [Z]), Z.fn.triggerHandler && (Z(G).triggerHandler("ready"), Z(G).off("ready"))))
        }
    }), Z.ready.promise = function(t) {
        return pt || (pt = Z.Deferred(), "complete" === G.readyState ? setTimeout(Z.ready) : (G.addEventListener("DOMContentLoaded", r, !1), h.addEventListener("load", r, !1))), pt.promise(t)
    }, Z.ready.promise();
    var mt = Z.access = function(t, e, n, r, i, o, s) {
        var a = 0,
            u = t.length,
            l = null == n;
        if ("object" === Z.type(n))
            for (a in i = !0, n) Z.access(t, e, a, n[a], !0, o, s);
        else if (void 0 !== r && (i = !0, Z.isFunction(r) || (s = !0), l && (s ? (e.call(t, r), e = null) : (l = e, e = function(t, e, n) {
                return l.call(Z(t), n)
            })), e))
            for (; a < u; a++) e(t[a], n, s ? r : r.call(t[a], a, e(t[a], n)));
        return i ? t : l ? e.call(t) : u ? e(t[0], n) : o
    };
    Z.acceptData = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    }, i.uid = 1, i.accepts = Z.acceptData, i.prototype = {
        key: function(t) {
            if (!i.accepts(t)) return 0;
            var e = {},
                n = t[this.expando];
            if (!n) {
                n = i.uid++;
                try {
                    e[this.expando] = {
                        value: n
                    }, Object.defineProperties(t, e)
                } catch (W) {
                    e[this.expando] = n, Z.extend(t, e)
                }
            }
            return this.cache[n] || (this.cache[n] = {}), n
        },
        set: function(t, e, n) {
            var r, i = this.key(t),
                o = this.cache[i];
            if ("string" == typeof e) o[e] = n;
            else if (Z.isEmptyObject(o)) Z.extend(this.cache[i], e);
            else
                for (r in e) o[r] = e[r];
            return o
        },
        get: function(t, e) {
            var n = this.cache[this.key(t)];
            return void 0 === e ? n : n[e]
        },
        access: function(t, e, n) {
            var r;
            return void 0 === e || e && "string" == typeof e && void 0 === n ? void 0 !== (r = this.get(t, e)) ? r : this.get(t, Z.camelCase(e)) : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove: function(t, e) {
            var n, r, i, o = this.key(t),
                s = this.cache[o];
            if (void 0 === e) this.cache[o] = {};
            else {
                Z.isArray(e) ? r = e.concat(e.map(Z.camelCase)) : (i = Z.camelCase(e), e in s ? r = [e, i] : r = (r = i) in s ? [r] : r.match(ft) || []), n = r.length;
                for (; n--;) delete s[r[n]]
            }
        },
        hasData: function(t) {
            return !Z.isEmptyObject(this.cache[t[this.expando]] || {})
        },
        discard: function(t) {
            t[this.expando] && delete this.cache[t[this.expando]]
        }
    };
    var gt = new i,
        vt = new i,
        yt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        bt = /([A-Z])/g;
    Z.extend({
        hasData: function(t) {
            return vt.hasData(t) || gt.hasData(t)
        },
        data: function(t, e, n) {
            return vt.access(t, e, n)
        },
        removeData: function(t, e) {
            vt.remove(t, e)
        },
        _data: function(t, e, n) {
            return gt.access(t, e, n)
        },
        _removeData: function(t, e) {
            gt.remove(t, e)
        }
    }), Z.fn.extend({
        data: function(r, t) {
            var e, n, i, o = this[0],
                s = o && o.attributes;
            if (void 0 !== r) return "object" == typeof r ? this.each(function() {
                vt.set(this, r)
            }) : mt(this, function(e) {
                var t, n = Z.camelCase(r);
                if (o && void 0 === e) {
                    if (void 0 !== (t = vt.get(o, r))) return t;
                    if (void 0 !== (t = vt.get(o, n))) return t;
                    if (void 0 !== (t = u(o, n, void 0))) return t
                } else this.each(function() {
                    var t = vt.get(this, n);
                    vt.set(this, n, e), -1 !== r.indexOf("-") && void 0 !== t && vt.set(this, r, e)
                })
            }, null, t, 1 < arguments.length, null, !0);
            if (this.length && (i = vt.get(o), 1 === o.nodeType && !gt.get(o, "hasDataAttrs"))) {
                for (e = s.length; e--;) s[e] && (0 === (n = s[e].name).indexOf("data-") && (n = Z.camelCase(n.slice(5)), u(o, n, i[n])));
                gt.set(o, "hasDataAttrs", !0)
            }
            return i
        },
        removeData: function(t) {
            return this.each(function() {
                vt.remove(this, t)
            })
        }
    }), Z.extend({
        queue: function(t, e, n) {
            var r;
            return t ? (e = (e || "fx") + "queue", r = gt.get(t, e), n && (!r || Z.isArray(n) ? r = gt.access(t, e, Z.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = Z.queue(t, e),
                r = n.length,
                i = n.shift(),
                o = Z._queueHooks(t, e),
                s = function() {
                    Z.dequeue(t, e)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === e && n.unshift("inprogress"), delete o.stop, i.call(t, s, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return gt.get(t, n) || gt.access(t, n, {
                empty: Z.Callbacks("once memory").add(function() {
                    gt.remove(t, [e + "queue", n])
                })
            })
        }
    }), Z.fn.extend({
        queue: function(e, n) {
            var t = 2;
            return "string" != typeof e && (n = e, e = "fx", t--), arguments.length < t ? Z.queue(this[0], e) : void 0 === n ? this : this.each(function() {
                var t = Z.queue(this, e, n);
                Z._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && Z.dequeue(this, e)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                Z.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, r = 1,
                i = Z.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(n = gt.get(o[s], t + "queueHooks")) && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(e)
        }
    });
    var wt, xt, St = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ct = ["Top", "Right", "Bottom", "Left"],
        Tt = function(t, e) {
            return t = e || t, "none" === Z.css(t, "display") || !Z.contains(t.ownerDocument, t)
        },
        Et = /^(?:checkbox|radio)$/i;
    wt = G.createDocumentFragment().appendChild(G.createElement("div")), (xt = G.createElement("input")).setAttribute("type", "radio"), xt.setAttribute("checked", "checked"), xt.setAttribute("name", "t"), wt.appendChild(xt), Y.checkClone = wt.cloneNode(!0).cloneNode(!0).lastChild.checked, wt.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!wt.cloneNode(!0).lastChild.defaultValue;
    var kt = "undefined";
    Y.focusinBubbles = "onfocusin" in h;
    var jt = /^key/,
        Lt = /^(?:mouse|pointer|contextmenu)|click/,
        At = /^(?:focusinfocus|focusoutblur)$/,
        Nt = /^([^.]*)(?:\.(.+)|)$/;
    Z.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, s, a, u, l, c, d, p, f, h, m, g = gt.get(e);
            if (g)
                for (n.handler && (n = (o = n).handler, i = o.selector), n.guid || (n.guid = Z.guid++), (u = g.events) || (u = g.events = {}), (s = g.handle) || (s = g.handle = function(t) {
                        return typeof Z !== kt && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
                    }), l = (t = (t || "").match(ft) || [""]).length; l--;) f = m = (a = Nt.exec(t[l]) || [])[1], h = (a[2] || "").split(".").sort(), f && (d = Z.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, d = Z.event.special[f] || {}, c = Z.extend({
                    type: f,
                    origType: m,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && Z.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[f]) || ((p = u[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, r, h, s) || e.addEventListener && e.addEventListener(f, s, !1)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), Z.event.global[f] = !0)
        },
        remove: function(t, e, n, r, i) {
            var o, s, a, u, l, c, d, p, f, h, m, g = gt.hasData(t) && gt.get(t);
            if (g && (u = g.events)) {
                for (l = (e = (e || "").match(ft) || [""]).length; l--;)
                    if (f = m = (a = Nt.exec(e[l]) || [])[1], h = (a[2] || "").split(".").sort(), f) {
                        for (d = Z.event.special[f] || {}, p = u[f = (r ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = p.length; o--;) c = p[o], !i && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, d.remove && d.remove.call(t, c));
                        s && !p.length && (d.teardown && !1 !== d.teardown.call(t, h, g.handle) || Z.removeEvent(t, f, g.handle), delete u[f])
                    } else
                        for (f in u) Z.event.remove(t, f + e[l], n, r, !0);
                Z.isEmptyObject(u) && (delete g.handle, gt.remove(t, "events"))
            }
        },
        trigger: function(t, e, n, r) {
            var i, o, s, a, u, l, c, d = [n || G],
                p = J.call(t, "type") ? t.type : t,
                f = J.call(t, "namespace") ? t.namespace.split(".") : [];
            if (o = s = n = n || G, 3 !== n.nodeType && 8 !== n.nodeType && !At.test(p + Z.event.triggered) && (0 <= p.indexOf(".") && (p = (f = p.split(".")).shift(), f.sort()), u = p.indexOf(":") < 0 && "on" + p, (t = t[Z.expando] ? t : new Z.Event(p, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = f.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), e = null == e ? [t] : Z.makeArray(e, [t]), c = Z.event.special[p] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, e))) {
                if (!r && !c.noBubble && !Z.isWindow(n)) {
                    for (a = c.delegateType || p, At.test(a + p) || (o = o.parentNode); o; o = o.parentNode) d.push(o), s = o;
                    s === (n.ownerDocument || G) && d.push(s.defaultView || s.parentWindow || h)
                }
                for (i = 0;
                    (o = d[i++]) && !t.isPropagationStopped();) t.type = 1 < i ? a : c.bindType || p, (l = (gt.get(o, "events") || {})[t.type] && gt.get(o, "handle")) && l.apply(o, e), (l = u && o[u]) && l.apply && Z.acceptData(o) && (t.result = l.apply(o, e), !1 === t.result && t.preventDefault());
                return t.type = p, r || t.isDefaultPrevented() || c._default && !1 !== c._default.apply(d.pop(), e) || !Z.acceptData(n) || u && Z.isFunction(n[p]) && !Z.isWindow(n) && ((s = n[u]) && (n[u] = null), n[Z.event.triggered = p](), Z.event.triggered = void 0, s && (n[u] = s)), t.result
            }
        },
        dispatch: function(t) {
            t = Z.event.fix(t);
            var e, n, r, i, o, s = [],
                a = W.call(arguments),
                u = (gt.get(this, "events") || {})[t.type] || [],
                l = Z.event.special[t.type] || {};
            if ((a[0] = t).delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, t)) {
                for (s = Z.event.handlers.call(this, t, u), e = 0;
                    (i = s[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(o.namespace)) && (t.handleObj = o, t.data = o.data, void 0 !== (r = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) && !1 === (t.result = r) && (t.preventDefault(), t.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var n, r, i, o, s = [],
                a = e.delegateCount,
                u = t.target;
            if (a && u.nodeType && (!t.button || "click" !== t.type))
                for (; u !== this; u = u.parentNode || this)
                    if (!0 !== u.disabled || "click" !== t.type) {
                        for (r = [], n = 0; n < a; n++) void 0 === r[i = (o = e[n]).selector + " "] && (r[i] = o.needsContext ? 0 <= Z(i, this).index(u) : Z.find(i, this, null, [u]).length), r[i] && r.push(o);
                        r.length && s.push({
                            elem: u,
                            handlers: r
                        })
                    } return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }), s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, r, i, o = e.button;
                return null == t.pageX && null != e.clientX && (r = (n = t.target.ownerDocument || G).documentElement, i = n.body, t.pageX = e.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        fix: function(t) {
            if (t[Z.expando]) return t;
            var e, n, r, i = t.type,
                o = t,
                s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = Lt.test(i) ? this.mouseHooks : jt.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, t = new Z.Event(o), e = r.length; e--;) t[n = r[e]] = o[n];
            return t.target || (t.target = G), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, o) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== s() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === s() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return Z.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n, r) {
            var i = Z.extend(new Z.Event, n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? Z.event.trigger(i, null, e) : Z.event.dispatch.call(e, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, Z.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n, !1)
    }, Z.Event = function(t, e) {
        return this instanceof Z.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? o : l) : this.type = t, e && Z.extend(this, e), this.timeStamp = t && t.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(t, e)
    }, Z.Event.prototype = {
        isDefaultPrevented: l,
        isPropagationStopped: l,
        isImmediatePropagationStopped: l,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = o, t && t.preventDefault && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = o, t && t.stopPropagation && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = o, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Z.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, o) {
        Z.event.special[t] = {
            delegateType: o,
            bindType: o,
            handle: function(t) {
                var e, n = this,
                    r = t.relatedTarget,
                    i = t.handleObj;
                return (!r || r !== n && !Z.contains(n, r)) && (t.type = i.origType, e = i.handler.apply(this, arguments), t.type = o), e
            }
        }
    }), Y.focusinBubbles || Z.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(t) {
            Z.event.simulate(r, t.target, Z.event.fix(t), !0)
        };
        Z.event.special[r] = {
            setup: function() {
                var t = this.ownerDocument || this,
                    e = gt.access(t, r);
                e || t.addEventListener(n, i, !0), gt.access(t, r, (e || 0) + 1)
            },
            teardown: function() {
                var t = this.ownerDocument || this,
                    e = gt.access(t, r) - 1;
                e ? gt.access(t, r, e) : (t.removeEventListener(n, i, !0), gt.remove(t, r))
            }
        }
    }), Z.fn.extend({
        on: function(t, e, n, r, i) {
            var o, s;
            if ("object" == typeof t) {
                for (s in "string" != typeof e && (n = n || e, e = void 0), t) this.on(s, e, n, t[s], i);
                return this
            }
            if (null == n && null == r ? (r = e, n = e = void 0) : null == r && ("string" == typeof e ? (r = n, n = void 0) : (r = n, n = e, e = void 0)), !1 === r) r = l;
            else if (!r) return this;
            return 1 === i && (o = r, (r = function(t) {
                return Z().off(t), o.apply(this, arguments)
            }).guid = o.guid || (o.guid = Z.guid++)), this.each(function() {
                Z.event.add(this, t, r, n, e)
            })
        },
        one: function(t, e, n, r) {
            return this.on(t, e, n, r, 1)
        },
        off: function(t, e, n) {
            var r, i;
            if (t && t.preventDefault && t.handleObj) return r = t.handleObj, Z(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" != typeof t) return (!1 === e || "function" == typeof e) && (n = e, e = void 0), !1 === n && (n = l), this.each(function() {
                Z.event.remove(this, t, n, e)
            });
            for (i in t) this.off(i, e, t[i]);
            return this
        },
        trigger: function(t, e) {
            return this.each(function() {
                Z.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? Z.event.trigger(t, e, n, !0) : void 0
        }
    });
    var Dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Pt = /<([\w:]+)/,
        _t = /<|&#?\w+;/,
        Rt = /<(?:script|style|link)/i,
        qt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        $t = /^$|\/(?:java|ecma)script/i,
        It = /^true\/(.*)/,
        Ht = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ft = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ft.optgroup = Ft.option, Ft.tbody = Ft.tfoot = Ft.colgroup = Ft.caption = Ft.thead, Ft.th = Ft.td, Z.extend({
        clone: function(t, e, n) {
            var r, i, o, s, a = t.cloneNode(!0),
                u = Z.contains(t.ownerDocument, t);
            if (!(Y.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || Z.isXMLDoc(t)))
                for (s = y(a), r = 0, i = (o = y(t)).length; r < i; r++) f(o[r], s[r]);
            if (e)
                if (n)
                    for (o = o || y(t), s = s || y(a), r = 0, i = o.length; r < i; r++) d(o[r], s[r]);
                else d(t, a);
            return 0 < (s = y(a, "script")).length && v(s, !u && y(t, "script")), a
        },
        buildFragment: function(t, e, n, r) {
            for (var i, o, s, a, u, l, c = e.createDocumentFragment(), d = [], p = 0, f = t.length; p < f; p++)
                if ((i = t[p]) || 0 === i)
                    if ("object" === Z.type(i)) Z.merge(d, i.nodeType ? [i] : i);
                    else if (_t.test(i)) {
                for (o = o || c.appendChild(e.createElement("div")), s = (Pt.exec(i) || ["", ""])[1].toLowerCase(), a = Ft[s] || Ft._default, o.innerHTML = a[1] + i.replace(Dt, "<$1></$2>") + a[2], l = a[0]; l--;) o = o.lastChild;
                Z.merge(d, o.childNodes), (o = c.firstChild).textContent = ""
            } else d.push(e.createTextNode(i));
            for (c.textContent = "", p = 0; i = d[p++];)
                if ((!r || -1 === Z.inArray(i, r)) && (u = Z.contains(i.ownerDocument, i), o = y(c.appendChild(i), "script"), u && v(o), n))
                    for (l = 0; i = o[l++];) $t.test(i.type || "") && n.push(i);
            return c
        },
        cleanData: function(t) {
            for (var e, n, r, i, o = Z.event.special, s = 0; void 0 !== (n = t[s]); s++) {
                if (Z.acceptData(n) && ((i = n[gt.expando]) && (e = gt.cache[i]))) {
                    if (e.events)
                        for (r in e.events) o[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, e.handle);
                    gt.cache[i] && delete gt.cache[i]
                }
                delete vt.cache[n[vt.expando]]
            }
        }
    }), Z.fn.extend({
        text: function(t) {
            return mt(this, function(t) {
                return void 0 === t ? Z.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || c(this, t).appendChild(t)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = c(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var n, r = t ? Z.filter(t, this) : this, i = 0; null != (n = r[i]); i++) e || 1 !== n.nodeType || Z.cleanData(y(n)), n.parentNode && (e && Z.contains(n.ownerDocument, n) && v(y(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (Z.cleanData(y(t, !1)), t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return Z.clone(this, t, e)
            })
        },
        html: function(t) {
            return mt(this, function(t) {
                var e = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Rt.test(t) && !Ft[(Pt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = t.replace(Dt, "<$1></$2>");
                    try {
                        for (; n < r; n++) 1 === (e = this[n] || {}).nodeType && (Z.cleanData(y(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (z) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function(t) {
            var e = t;
            return this.domManip(arguments, function(t) {
                e = this.parentNode, Z.cleanData(y(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(n, r) {
            n = z.apply([], n);
            var t, e, i, o, s, a, u = 0,
                l = this.length,
                c = this,
                d = l - 1,
                p = n[0],
                f = Z.isFunction(p);
            if (f || 1 < l && "string" == typeof p && !Y.checkClone && qt.test(p)) return this.each(function(t) {
                var e = c.eq(t);
                f && (n[0] = p.call(this, t, e.html())), e.domManip(n, r)
            });
            if (l && (e = (t = Z.buildFragment(n, this[0].ownerDocument, !1, this)).firstChild, 1 === t.childNodes.length && (t = e), e)) {
                for (o = (i = Z.map(y(t, "script"), m)).length; u < l; u++) s = t, u !== d && (s = Z.clone(s, !0, !0), o && Z.merge(i, y(s, "script"))), r.call(this[u], s, u);
                if (o)
                    for (a = i[i.length - 1].ownerDocument, Z.map(i, g), u = 0; u < o; u++) s = i[u], $t.test(s.type || "") && !gt.access(s, "globalEval") && Z.contains(a, s) && (s.src ? Z._evalUrl && Z._evalUrl(s.src) : Z.globalEval(s.textContent.replace(Ht, "")))
            }
            return this
        }
    }), Z.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, s) {
        Z.fn[t] = function(t) {
            for (var e, n = [], r = Z(t), i = r.length - 1, o = 0; o <= i; o++) e = o === i ? this : this.clone(!0), Z(r[o])[s](e), V.apply(n, e.get());
            return this.pushStack(n)
        }
    });
    var Bt, Mt = {},
        Ot = /^margin/,
        Wt = new RegExp("^(" + St + ")(?!px)[a-z%]+$", "i"),
        zt = function(t) {
            return t.ownerDocument.defaultView.getComputedStyle(t, null)
        };
    ! function() {
        function t() {
            o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o.innerHTML = "", r.appendChild(i);
            var t = h.getComputedStyle(o, null);
            e = "1%" !== t.top, n = "4px" === t.width, r.removeChild(i)
        }
        var e, n, r = G.documentElement,
            i = G.createElement("div"),
            o = G.createElement("div");
        o.style && (o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === o.style.backgroundClip, i.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", i.appendChild(o), h.getComputedStyle && Z.extend(Y, {
            pixelPosition: function() {
                return t(), e
            },
            boxSizingReliable: function() {
                return null == n && t(), n
            },
            reliableMarginRight: function() {
                var t, e = o.appendChild(G.createElement("div"));
                return e.style.cssText = o.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", o.style.width = "1px", r.appendChild(i), t = !parseFloat(h.getComputedStyle(e, null).marginRight), r.removeChild(i), t
            }
        }))
    }(), Z.swap = function(t, e, n, r) {
        var i, o, s = {};
        for (o in e) s[o] = t.style[o], t.style[o] = e[o];
        for (o in i = n.apply(t, r || []), e) t.style[o] = s[o];
        return i
    };
    var Vt = /^(none|table(?!-c[ea]).+)/,
        Ut = new RegExp("^(" + St + ")(.*)$", "i"),
        Xt = new RegExp("^([+-])=(" + St + ")", "i"),
        Kt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Jt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Yt = ["Webkit", "O", "Moz", "ms"];
    Z.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = x(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(t, e, n, r) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var i, o, s, a = Z.camelCase(e),
                    u = t.style;
                return e = Z.cssProps[a] || (Z.cssProps[a] = C(u, a)), s = Z.cssHooks[e] || Z.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (i = s.get(t, !1, r)) ? i : u[e] : ("string" === (o = typeof n) && (i = Xt.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Z.css(t, e)), o = "number"), void(null != n && n == n && ("number" !== o || Z.cssNumber[a] || (n += "px"), Y.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, r)) || (u[e] = n))))
            }
        },
        css: function(t, e, n, r) {
            var i, o, s, a = Z.camelCase(e);
            return e = Z.cssProps[a] || (Z.cssProps[a] = C(t.style, a)), (s = Z.cssHooks[e] || Z.cssHooks[a]) && "get" in s && (i = s.get(t, !0, n)), void 0 === i && (i = x(t, e, r)), "normal" === i && e in Jt && (i = Jt[e]), "" === n || n ? (o = parseFloat(i), !0 === n || Z.isNumeric(o) ? o || 0 : i) : i
        }
    }), Z.each(["height", "width"], function(t, i) {
        Z.cssHooks[i] = {
            get: function(t, e, n) {
                return e ? Vt.test(Z.css(t, "display")) && 0 === t.offsetWidth ? Z.swap(t, Kt, function() {
                    return k(t, i, n)
                }) : k(t, i, n) : void 0
            },
            set: function(t, e, n) {
                var r = n && zt(t);
                return T(t, e, n ? E(t, i, n, "border-box" === Z.css(t, "boxSizing", !1, r), r) : 0)
            }
        }
    }), Z.cssHooks.marginRight = S(Y.reliableMarginRight, function(t, e) {
        return e ? Z.swap(t, {
            display: "inline-block"
        }, x, [t, "marginRight"]) : void 0
    }), Z.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        Z.cssHooks[i + o] = {
            expand: function(t) {
                for (var e = 0, n = {}, r = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) n[i + Ct[e] + o] = r[e] || r[e - 2] || r[0];
                return n
            }
        }, Ot.test(i) || (Z.cssHooks[i + o].set = T)
    }), Z.fn.extend({
        css: function(t, e) {
            return mt(this, function(t, e, n) {
                var r, i, o = {},
                    s = 0;
                if (Z.isArray(e)) {
                    for (r = zt(t), i = e.length; s < i; s++) o[e[s]] = Z.css(t, e[s], !1, r);
                    return o
                }
                return void 0 !== n ? Z.style(t, e, n) : Z.css(t, e)
            }, t, e, 1 < arguments.length)
        },
        show: function() {
            return j(this, !0)
        },
        hide: function() {
            return j(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                Tt(this) ? Z(this).show() : Z(this).hide()
            })
        }
    }), (Z.Tween = L).prototype = {
        constructor: L,
        init: function(t, e, n, r, i, o) {
            this.elem = t, this.prop = n, this.easing = i || "swing", this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Z.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = L.propHooks[this.prop];
            return t && t.get ? t.get(this) : L.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = L.propHooks[this.prop];
            return this.pos = e = this.options.duration ? Z.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : L.propHooks._default.set(this), this
        }
    }, L.prototype.init.prototype = L.prototype, L.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = Z.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0 : t.elem[t.prop]
            },
            set: function(t) {
                Z.fx.step[t.prop] ? Z.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[Z.cssProps[t.prop]] || Z.cssHooks[t.prop]) ? Z.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }, L.propHooks.scrollTop = L.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, Z.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, Z.fx = L.prototype.init, Z.fx.step = {};
    var Gt, Qt, Zt, te, ee, ne = /^(?:toggle|show|hide)$/,
        re = new RegExp("^(?:([+-])=|)(" + St + ")([a-z%]*)$", "i"),
        ie = /queueHooks$/,
        oe = [P],
        se = {
            "*": [function(t, e) {
                var n = this.createTween(t, e),
                    r = n.cur(),
                    i = re.exec(e),
                    o = i && i[3] || (Z.cssNumber[t] ? "" : "px"),
                    s = (Z.cssNumber[t] || "px" !== o && +r) && re.exec(Z.css(n.elem, t)),
                    a = 1,
                    u = 20;
                if (s && s[3] !== o)
                    for (o = o || s[3], i = i || [], s = +r || 1; s /= a = a || ".5", Z.style(n.elem, t, s + o), a !== (a = n.cur() / r) && 1 !== a && --u;);
                return i && (s = n.start = +s || +r || 0, n.unit = o, n.end = i[1] ? s + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };
    Z.Animation = Z.extend(R, {
        tweener: function(t, e) {
            Z.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var n, r = 0, i = t.length; r < i; r++) n = t[r], se[n] = se[n] || [], se[n].unshift(e)
        },
        prefilter: function(t, e) {
            e ? oe.unshift(t) : oe.push(t)
        }
    }), Z.speed = function(t, e, n) {
        var r = t && "object" == typeof t ? Z.extend({}, t) : {
            complete: n || !n && e || Z.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !Z.isFunction(e) && e
        };
        return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default, (null == r.queue || !0 === r.queue) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            Z.isFunction(r.old) && r.old.call(this), r.queue && Z.dequeue(this, r.queue)
        }, r
    }, Z.fn.extend({
        fadeTo: function(t, e, n, r) {
            return this.filter(Tt).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, r)
        },
        animate: function(e, t, n, r) {
            var i = Z.isEmptyObject(e),
                o = Z.speed(t, n, r),
                s = function() {
                    var t = R(this, Z.extend({}, e), o);
                    (i || gt.get(this, "finish")) && t.stop(!0)
                };
            return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(i, t, o) {
            var s = function(t) {
                var e = t.stop;
                delete t.stop, e(o)
            };
            return "string" != typeof i && (o = t, t = i, i = void 0), t && !1 !== i && this.queue(i || "fx", []), this.each(function() {
                var t = !0,
                    e = null != i && i + "queueHooks",
                    n = Z.timers,
                    r = gt.get(this);
                if (e) r[e] && r[e].stop && s(r[e]);
                else
                    for (e in r) r[e] && r[e].stop && ie.test(e) && s(r[e]);
                for (e = n.length; e--;) n[e].elem !== this || null != i && n[e].queue !== i || (n[e].anim.stop(o), t = !1, n.splice(e, 1));
                (t || !o) && Z.dequeue(this, i)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"), this.each(function() {
                var t, e = gt.get(this),
                    n = e[s + "queue"],
                    r = e[s + "queueHooks"],
                    i = Z.timers,
                    o = n ? n.length : 0;
                for (e.finish = !0, Z.queue(this, s, []), r && r.stop && r.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === s && (i[t].anim.stop(!0), i.splice(t, 1));
                for (t = 0; t < o; t++) n[t] && n[t].finish && n[t].finish.call(this);
                delete e.finish
            })
        }
    }), Z.each(["toggle", "show", "hide"], function(t, r) {
        var i = Z.fn[r];
        Z.fn[r] = function(t, e, n) {
            return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(N(r, !0), t, e, n)
        }
    }), Z.each({
        slideDown: N("show"),
        slideUp: N("hide"),
        slideToggle: N("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, r) {
        Z.fn[t] = function(t, e, n) {
            return this.animate(r, t, e, n)
        }
    }), Z.timers = [], Z.fx.tick = function() {
        var t, e = 0,
            n = Z.timers;
        for (Gt = Z.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
        n.length || Z.fx.stop(), Gt = void 0
    }, Z.fx.timer = function(t) {
        Z.timers.push(t), t() ? Z.fx.start() : Z.timers.pop()
    }, Z.fx.interval = 13, Z.fx.start = function() {
        Qt || (Qt = setInterval(Z.fx.tick, Z.fx.interval))
    }, Z.fx.stop = function() {
        clearInterval(Qt), Qt = null
    }, Z.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, Z.fn.delay = function(r, t) {
        return r = Z.fx && Z.fx.speeds[r] || r, t = t || "fx", this.queue(t, function(t, e) {
            var n = setTimeout(t, r);
            e.stop = function() {
                clearTimeout(n)
            }
        })
    }, Zt = G.createElement("input"), te = G.createElement("select"), ee = te.appendChild(G.createElement("option")), Zt.type = "checkbox", Y.checkOn = "" !== Zt.value, Y.optSelected = ee.selected, te.disabled = !0, Y.optDisabled = !ee.disabled, (Zt = G.createElement("input")).value = "t", Zt.type = "radio", Y.radioValue = "t" === Zt.value;
    var ae, ue, le = Z.expr.attrHandle;
    Z.fn.extend({
        attr: function(t, e) {
            return mt(this, Z.attr, t, e, 1 < arguments.length)
        },
        removeAttr: function(t) {
            return this.each(function() {
                Z.removeAttr(this, t)
            })
        }
    }), Z.extend({
        attr: function(t, e, n) {
            var r, i, o = t.nodeType;
            if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === kt ? Z.prop(t, e, n) : (1 === o && Z.isXMLDoc(t) || (e = e.toLowerCase(),
                r = Z.attrHooks[e] || (Z.expr.match.bool.test(e) ? ue : ae)), void 0 === n ? r && "get" in r && null !== (i = r.get(t, e)) ? i : null == (i = Z.find.attr(t, e)) ? void 0 : i : null !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : void Z.removeAttr(t, e))
        },
        removeAttr: function(t, e) {
            var n, r, i = 0,
                o = e && e.match(ft);
            if (o && 1 === t.nodeType)
                for (; n = o[i++];) r = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (t[r] = !1), t.removeAttribute(n)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!Y.radioValue && "radio" === e && Z.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        }
    }), ue = {
        set: function(t, e, n) {
            return !1 === e ? Z.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var o = le[e] || Z.find.attr;
        le[e] = function(t, e, n) {
            var r, i;
            return n || (i = le[e], le[e] = r, r = null != o(t, e, n) ? e.toLowerCase() : null, le[e] = i), r
        }
    });
    var ce = /^(?:input|select|textarea|button)$/i;
    Z.fn.extend({
        prop: function(t, e) {
            return mt(this, Z.prop, t, e, 1 < arguments.length)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[Z.propFix[t] || t]
            })
        }
    }), Z.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(t, e, n) {
            var r, i, o = t.nodeType;
            if (t && 3 !== o && 8 !== o && 2 !== o) return (1 !== o || !Z.isXMLDoc(t)) && (e = Z.propFix[e] || e, i = Z.propHooks[e]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get" in i && null !== (r = i.get(t, e)) ? r : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    return t.hasAttribute("tabindex") || ce.test(t.nodeName) || t.href ? t.tabIndex : -1
                }
            }
        }
    }), Y.optSelected || (Z.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        }
    }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        Z.propFix[this.toLowerCase()] = this
    });
    var de = /[\t\r\n\f]/g;
    Z.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, s, a = "string" == typeof e && e,
                u = 0,
                l = this.length;
            if (Z.isFunction(e)) return this.each(function(t) {
                Z(this).addClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(ft) || []; u < l; u++)
                    if (r = 1 === (n = this[u]).nodeType && (n.className ? (" " + n.className + " ").replace(de, " ") : " ")) {
                        for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        s = Z.trim(r), n.className !== s && (n.className = s)
                    } return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, s, a = 0 === arguments.length || "string" == typeof e && e,
                u = 0,
                l = this.length;
            if (Z.isFunction(e)) return this.each(function(t) {
                Z(this).removeClass(e.call(this, t, this.className))
            });
            if (a)
                for (t = (e || "").match(ft) || []; u < l; u++)
                    if (r = 1 === (n = this[u]).nodeType && (n.className ? (" " + n.className + " ").replace(de, " ") : "")) {
                        for (o = 0; i = t[o++];)
                            for (; 0 <= r.indexOf(" " + i + " ");) r = r.replace(" " + i + " ", " ");
                        s = e ? Z.trim(r) : "", n.className !== s && (n.className = s)
                    } return this
        },
        toggleClass: function(i, e) {
            var o = typeof i;
            return "boolean" == typeof e && "string" === o ? e ? this.addClass(i) : this.removeClass(i) : this.each(Z.isFunction(i) ? function(t) {
                Z(this).toggleClass(i.call(this, t, this.className, e), e)
            } : function() {
                if ("string" === o)
                    for (var t, e = 0, n = Z(this), r = i.match(ft) || []; t = r[e++];) n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
                else(o === kt || "boolean" === o) && (this.className && gt.set(this, "__className__", this.className), this.className = this.className || !1 === i ? "" : gt.get(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", n = 0, r = this.length; n < r; n++)
                if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(de, " ").indexOf(e)) return !0;
            return !1
        }
    });
    var pe = /\r/g;
    Z.fn.extend({
        val: function(n) {
            var r, t, i, e = this[0];
            return arguments.length ? (i = Z.isFunction(n), this.each(function(t) {
                var e;
                1 === this.nodeType && (null == (e = i ? n.call(this, t, Z(this).val()) : n) ? e = "" : "number" == typeof e ? e += "" : Z.isArray(e) && (e = Z.map(e, function(t) {
                    return null == t ? "" : t + ""
                })), (r = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, e, "value") || (this.value = e))
            })) : e ? (r = Z.valHooks[e.type] || Z.valHooks[e.nodeName.toLowerCase()]) && "get" in r && void 0 !== (t = r.get(e, "value")) ? t : "string" == typeof(t = e.value) ? t.replace(pe, "") : null == t ? "" : t : void 0
        }
    }), Z.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = Z.find.attr(t, "value");
                    return null != e ? e : Z.trim(Z.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, r = t.options, i = t.selectedIndex, o = "select-one" === t.type || i < 0, s = o ? null : [], a = o ? i + 1 : r.length, u = i < 0 ? a : o ? i : 0; u < a; u++)
                        if (!(!(n = r[u]).selected && u !== i || (Y.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
                            if (e = Z(n).val(), o) return e;
                            s.push(e)
                        } return s
                },
                set: function(t, e) {
                    for (var n, r, i = t.options, o = Z.makeArray(e), s = i.length; s--;)((r = i[s]).selected = 0 <= Z.inArray(r.value, o)) && (n = !0);
                    return n || (t.selectedIndex = -1), o
                }
            }
        }
    }), Z.each(["radio", "checkbox"], function() {
        Z.valHooks[this] = {
            set: function(t, e) {
                return Z.isArray(e) ? t.checked = 0 <= Z.inArray(Z(t).val(), e) : void 0
            }
        }, Y.checkOn || (Z.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, n) {
        Z.fn[n] = function(t, e) {
            return 0 < arguments.length ? this.on(n, null, t, e) : this.trigger(n)
        }
    }), Z.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        },
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, r) {
            return this.on(e, t, n, r)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    });
    var fe = Z.now(),
        he = /\?/;
    Z.parseJSON = function(t) {
        return JSON.parse(t + "")
    }, Z.parseXML = function(t) {
        var e;
        if (!t || "string" != typeof t) return null;
        try {
            e = (new DOMParser).parseFromString(t, "text/xml")
        } catch (W) {
            e = void 0
        }
        return (!e || e.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + t), e
    };
    var me, ge, ve = /#.*$/,
        ye = /([?&])_=[^&]*/,
        be = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        we = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        xe = /^(?:GET|HEAD)$/,
        Se = /^\/\//,
        Ce = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Te = {},
        Ee = {},
        ke = "*/".concat("*");
    try {
        ge = location.href
    } catch (Oe) {
        (ge = G.createElement("a")).href = "", ge = ge.href
    }
    me = Ce.exec(ge.toLowerCase()) || [], Z.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ge,
            type: "GET",
            isLocal: we.test(me[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ke,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": Z.parseJSON,
                "text xml": Z.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? I(I(t, Z.ajaxSettings), e) : I(Z.ajaxSettings, t)
        },
        ajaxPrefilter: q(Te),
        ajaxTransport: q(Ee),
        ajax: function(t, e) {
            function n(t, e, n, r) {
                var i, o, s, a, u, l = e;
                2 !== x && (x = 2, f && clearTimeout(f), c = void 0, p = r || "", S.readyState = 0 < t ? 4 : 0, i = 200 <= t && t < 300 || 304 === t, n && (a = H(m, S, n)), a = F(m, a, S, i), i ? (m.ifModified && ((u = S.getResponseHeader("Last-Modified")) && (Z.lastModified[d] = u), (u = S.getResponseHeader("etag")) && (Z.etag[d] = u)), 204 === t || "HEAD" === m.type ? l = "nocontent" : 304 === t ? l = "notmodified" : (l = a.state, o = a.data, i = !(s = a.error))) : (s = l, (t || !l) && (l = "error", t < 0 && (t = 0))), S.status = t, S.statusText = (e || l) + "", i ? y.resolveWith(g, [o, l, S]) : y.rejectWith(g, [S, l, s]), S.statusCode(w), w = void 0, h && v.trigger(i ? "ajaxSuccess" : "ajaxError", [S, m, i ? o : s]), b.fireWith(g, [S, l]), h && (v.trigger("ajaxComplete", [S, m]), --Z.active || Z.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var c, d, p, r, f, i, h, o, m = Z.ajaxSetup({}, e),
                g = m.context || m,
                v = m.context && (g.nodeType || g.jquery) ? Z(g) : Z.event,
                y = Z.Deferred(),
                b = Z.Callbacks("once memory"),
                w = m.statusCode || {},
                s = {},
                a = {},
                x = 0,
                u = "canceled",
                S = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === x) {
                            if (!r)
                                for (r = {}; e = be.exec(p);) r[e[1].toLowerCase()] = e[2];
                            e = r[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? p : null
                    },
                    setRequestHeader: function(t, e) {
                        var n = t.toLowerCase();
                        return x || (t = a[n] = a[n] || t, s[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return x || (m.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (x < 2)
                                for (e in t) w[e] = [w[e], t[e]];
                            else S.always(t[S.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || u;
                        return c && c.abort(e), n(0, e), this
                    }
                };
            if (y.promise(S).complete = b.add, S.success = S.done, S.error = S.fail, m.url = ((t || m.url || ge) + "").replace(ve, "").replace(Se, me[1] + "//"), m.type = e.method || e.type || m.method || m.type, m.dataTypes = Z.trim(m.dataType || "*").toLowerCase().match(ft) || [""], null == m.crossDomain && (i = Ce.exec(m.url.toLowerCase()), m.crossDomain = !(!i || i[1] === me[1] && i[2] === me[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (me[3] || ("http:" === me[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = Z.param(m.data, m.traditional)), $(Te, m, e, S), 2 === x) return S;
            for (o in (h = m.global) && 0 == Z.active++ && Z.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !xe.test(m.type), d = m.url, m.hasContent || (m.data && (d = m.url += (he.test(d) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = ye.test(d) ? d.replace(ye, "$1_=" + fe++) : d + (he.test(d) ? "&" : "?") + "_=" + fe++)), m.ifModified && (Z.lastModified[d] && S.setRequestHeader("If-Modified-Since", Z.lastModified[d]), Z.etag[d] && S.setRequestHeader("If-None-Match", Z.etag[d])), (m.data && m.hasContent && !1 !== m.contentType || e.contentType) && S.setRequestHeader("Content-Type", m.contentType), S.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ke + "; q=0.01" : "") : m.accepts["*"]), m.headers) S.setRequestHeader(o, m.headers[o]);
            if (m.beforeSend && (!1 === m.beforeSend.call(g, S, m) || 2 === x)) return S.abort();
            for (o in u = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) S[o](m[o]);
            if (c = $(Ee, m, e, S)) {
                S.readyState = 1, h && v.trigger("ajaxSend", [S, m]), m.async && 0 < m.timeout && (f = setTimeout(function() {
                    S.abort("timeout")
                }, m.timeout));
                try {
                    x = 1, c.send(s, n)
                } catch (at) {
                    if (!(x < 2)) throw at;
                    n(-1, at)
                }
            } else n(-1, "No Transport");
            return S
        },
        getJSON: function(t, e, n) {
            return Z.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return Z.get(t, void 0, e, "script")
        }
    }), Z.each(["get", "post"], function(t, i) {
        Z[i] = function(t, e, n, r) {
            return Z.isFunction(e) && (r = r || n, n = e, e = void 0), Z.ajax({
                url: t,
                type: i,
                dataType: r,
                data: e,
                success: n
            })
        }
    }), Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        Z.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), Z._evalUrl = function(t) {
        return Z.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, Z.fn.extend({
        wrapAll: function(e) {
            var t;
            return Z.isFunction(e) ? this.each(function(t) {
                Z(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this)
        },
        wrapInner: function(n) {
            return this.each(Z.isFunction(n) ? function(t) {
                Z(this).wrapInner(n.call(this, t))
            } : function() {
                var t = Z(this),
                    e = t.contents();
                e.length ? e.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(e) {
            var n = Z.isFunction(e);
            return this.each(function(t) {
                Z(this).wrapAll(n ? e.call(this, t) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
            }).end()
        }
    }), Z.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0
    }, Z.expr.filters.visible = function(t) {
        return !Z.expr.filters.hidden(t)
    };
    var je = /%20/g,
        Le = /\[\]$/,
        Ae = /\r?\n/g,
        Ne = /^(?:submit|button|image|reset|file)$/i,
        De = /^(?:input|select|textarea|keygen)/i;
    Z.param = function(t, e) {
        var n, r = [],
            i = function(t, e) {
                e = Z.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(t) || t.jquery && !Z.isPlainObject(t)) Z.each(t, function() {
            i(this.name, this.value)
        });
        else
            for (n in t) B(n, t[n], e, i);
        return r.join("&").replace(je, "+")
    }, Z.fn.extend({
        serialize: function() {
            return Z.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = Z.prop(this, "elements");
                return t ? Z.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !Z(this).is(":disabled") && De.test(this.nodeName) && !Ne.test(t) && (this.checked || !Et.test(t))
            }).map(function(t, e) {
                var n = Z(this).val();
                return null == n ? null : Z.isArray(n) ? Z.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Ae, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Ae, "\r\n")
                }
            }).get()
        }
    }), Z.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (h) {}
    };
    var Pe = 0,
        _e = {},
        Re = {
            0: 200,
            1223: 204
        },
        qe = Z.ajaxSettings.xhr();
    h.ActiveXObject && Z(h).on("unload", function() {
        for (var t in _e) _e[t]()
    }), Y.cors = !!qe && "withCredentials" in qe, Y.ajax = qe = !!qe, Z.ajaxTransport(function(o) {
        var s;
        return Y.cors || qe && !o.crossDomain ? {
            send: function(t, e) {
                var n, r = o.xhr(),
                    i = ++Pe;
                if (r.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
                    for (n in o.xhrFields) r[n] = o.xhrFields[n];
                for (n in o.mimeType && r.overrideMimeType && r.overrideMimeType(o.mimeType), o.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) r.setRequestHeader(n, t[n]);
                s = function(t) {
                    return function() {
                        s && (delete _e[i], s = r.onload = r.onerror = null, "abort" === t ? r.abort() : "error" === t ? e(r.status, r.statusText) : e(Re[r.status] || r.status, r.statusText, "string" == typeof r.responseText ? {
                            text: r.responseText
                        } : void 0, r.getAllResponseHeaders()))
                    }
                }, r.onload = s(), r.onerror = s("error"), s = _e[i] = s("abort");
                try {
                    r.send(o.hasContent && o.data || null)
                } catch (X) {
                    if (s) throw X
                }
            },
            abort: function() {
                s && s()
            }
        } : void 0
    }), Z.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return Z.globalEval(t), t
            }
        }
    }), Z.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), Z.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain) return {
            send: function(t, e) {
                r = Z("<script>").prop({
                    async: !0,
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(t) {
                    r.remove(), i = null, t && e("error" === t.type ? 404 : 200, t.type)
                }), G.head.appendChild(r[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var $e = [],
        Ie = /(=)\?(?=&|$)|\?\?/;
    Z.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = $e.pop() || Z.expando + "_" + fe++;
            return this[t] = !0, t
        }
    }), Z.ajaxPrefilter("json jsonp", function(t, e, n) {
        var r, i, o, s = !1 !== t.jsonp && (Ie.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ie.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Ie, "$1" + r) : !1 !== t.jsonp && (t.url += (he.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return o || Z.error(r + " was not called"), o[0]
        }, t.dataTypes[0] = "json", i = h[r], h[r] = function() {
            o = arguments
        }, n.always(function() {
            h[r] = i, t[r] && (t.jsonpCallback = e.jsonpCallback, $e.push(r)), o && Z.isFunction(i) && i(o[0]), o = i = void 0
        }), "script") : void 0
    }), Z.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || G;
        var r = st.exec(t),
            i = !n && [];
        return r ? [e.createElement(r[1])] : (r = Z.buildFragment([t], e, i), i && i.length && Z(i).remove(), Z.merge([], r.childNodes))
    };
    var He = Z.fn.load;
    Z.fn.load = function(t, e, n) {
        if ("string" != typeof t && He) return He.apply(this, arguments);
        var r, i, o, s = this,
            a = t.indexOf(" ");
        return 0 <= a && (r = Z.trim(t.slice(a)), t = t.slice(0, a)), Z.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (i = "POST"), 0 < s.length && Z.ajax({
            url: t,
            type: i,
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments, s.html(r ? Z("<div>").append(Z.parseHTML(t)).find(r) : t)
        }).complete(n && function(t, e) {
            s.each(n, o || [t.responseText, e, t])
        }), this
    }, Z.expr.filters.animated = function(e) {
        return Z.grep(Z.timers, function(t) {
            return e === t.elem
        }).length
    };
    var Fe = h.document.documentElement;
    Z.offset = {
        setOffset: function(t, e, n) {
            var r, i, o, s, a, u, l = Z.css(t, "position"),
                c = Z(t),
                d = {};
            "static" === l && (t.style.position = "relative"), a = c.offset(), o = Z.css(t, "top"), u = Z.css(t, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (s = (r = c.position()).top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), Z.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + i), "using" in e ? e.using.call(t, d) : c.css(d)
        }
    }, Z.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                Z.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0],
                i = {
                    top: 0,
                    left: 0
                },
                o = r && r.ownerDocument;
            return o ? (t = o.documentElement, Z.contains(t, r) ? (typeof r.getBoundingClientRect !== kt && (i = r.getBoundingClientRect()), n = M(o), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === Z.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), Z.nodeName(t[0], "html") || (r = t.offset()), r.top += Z.css(t[0], "borderTopWidth", !0), r.left += Z.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - r.top - Z.css(n, "marginTop", !0),
                    left: e.left - r.left - Z.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || Fe; t && !Z.nodeName(t, "html") && "static" === Z.css(t, "position");) t = t.offsetParent;
                return t || Fe
            })
        }
    }), Z.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, i) {
        var o = "pageYOffset" === i;
        Z.fn[e] = function(t) {
            return mt(this, function(t, e, n) {
                var r = M(t);
                return void 0 === n ? r ? r[i] : t[e] : void(r ? r.scrollTo(o ? h.pageXOffset : n, o ? n : h.pageYOffset) : t[e] = n)
            }, e, t, arguments.length, null)
        }
    }), Z.each(["top", "left"], function(t, n) {
        Z.cssHooks[n] = S(Y.pixelPosition, function(t, e) {
            return e ? (e = x(t, n), Wt.test(e) ? Z(t).position()[n] + "px" : e) : void 0
        })
    }), Z.each({
        Height: "height",
        Width: "width"
    }, function(o, s) {
        Z.each({
            padding: "inner" + o,
            content: s,
            "": "outer" + o
        }, function(r, t) {
            Z.fn[t] = function(t, e) {
                var n = arguments.length && (r || "boolean" != typeof t),
                    i = r || (!0 === t || !0 === e ? "margin" : "border");
                return mt(this, function(t, e, n) {
                    var r;
                    return Z.isWindow(t) ? t.document.documentElement["client" + o] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + o], r["scroll" + o], t.body["offset" + o], r["offset" + o], r["client" + o])) : void 0 === n ? Z.css(t, e, i) : Z.style(t, e, n, i)
                }, s, n ? t : void 0, n, null)
            }
        })
    }), Z.fn.size = function() {
        return this.length
    }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return Z
    });
    var Be = h.jQuery,
        Me = h.$;
    return Z.noConflict = function(t) {
        return h.$ === Z && (h.$ = Me), t && h.jQuery === Z && (h.jQuery = Be), Z
    }, typeof t === kt && (h.jQuery = h.$ = Z), Z
}),
function(c, u) {
    "use strict";
    var l;
    c.rails !== u && c.error("jquery-ujs has already been loaded!");
    var t = c(document);
    c.rails = l = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
        buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
        disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
        fileInputSelector: "input[name][type=file]:not([disabled])",
        linkDisableSelector: "a[data-disable-with], a[data-disable]",
        buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
        csrfToken: function() {
            return c("meta[name=csrf-token]").attr("content")
        },
        csrfParam: function() {
            return c("meta[name=csrf-param]").attr("content")
        },
        CSRFProtection: function(t) {
            var e = l.csrfToken();
            e && t.setRequestHeader("X-CSRF-Token", e)
        },
        refreshCSRFTokens: function() {
            c('form input[name="' + l.csrfParam() + '"]').val(l.csrfToken())
        },
        fire: function(t, e, n) {
            var r = c.Event(e);
            return t.trigger(r, n), !1 !== r.result
        },
        confirm: function(t) {
            return confirm(t)
        },
        ajax: function(t) {
            return c.ajax(t)
        },
        href: function(t) {
            return t[0].href
        },
        isRemote: function(t) {
            return t.data("remote") !== u && !1 !== t.data("remote")
        },
        handleRemote: function(r) {
            var t, e, n, i, o, s;
            if (l.fire(r, "ajax:before")) {
                if (i = r.data("with-credentials") || null, o = r.data("type") || c.ajaxSettings && c.ajaxSettings.dataType, r.is("form")) {
                    t = r.data("ujs:submit-button-formmethod") || r.attr("method"), e = r.data("ujs:submit-button-formaction") || r.attr("action"), n = c(r[0]).serializeArray();
                    var a = r.data("ujs:submit-button");
                    a && (n.push(a), r.data("ujs:submit-button", null)), r.data("ujs:submit-button-formmethod", null), r.data("ujs:submit-button-formaction", null)
                } else r.is(l.inputChangeSelector) ? (t = r.data("method"), e = r.data("url"), n = r.serialize(), r.data("params") && (n = n + "&" + r.data("params"))) : r.is(l.buttonClickSelector) ? (t = r.data("method") || "get", e = r.data("url"), n = r.serialize(), r.data("params") && (n = n + "&" + r.data("params"))) : (t = r.data("method"), e = l.href(r), n = r.data("params") || null);
                return s = {
                    type: t || "GET",
                    data: n,
                    dataType: o,
                    beforeSend: function(t, e) {
                        if (e.dataType === u && t.setRequestHeader("accept", "*/*;q=0.5, " + e.accepts.script), !l.fire(r, "ajax:beforeSend", [t, e])) return !1;
                        r.trigger("ajax:send", t)
                    },
                    success: function(t, e, n) {
                        r.trigger("ajax:success", [t, e, n])
                    },
                    complete: function(t, e) {
                        r.trigger("ajax:complete", [t, e])
                    },
                    error: function(t, e, n) {
                        r.trigger("ajax:error", [t, e, n])
                    },
                    crossDomain: l.isCrossDomain(e)
                }, i && (s.xhrFields = {
                    withCredentials: i
                }), e && (s.url = e), l.ajax(s)
            }
            return !1
        },
        isCrossDomain: function(t) {
            var e = document.createElement("a");
            e.href = location.href;
            var n = document.createElement("a");
            try {
                return n.href = t, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || e.protocol + "//" + e.host == n.protocol + "//" + n.host)
            } catch (r) {
                return !0
            }
        },
        handleMethod: function(t) {
            var e = l.href(t),
                n = t.data("method"),
                r = t.attr("target"),
                i = l.csrfToken(),
                o = l.csrfParam(),
                s = c('<form method="post" action="' + e + '"></form>'),
                a = '<input name="_method" value="' + n + '" type="hidden" />';
            o === u || i === u || l.isCrossDomain(e) || (a += '<input name="' + o + '" value="' + i + '" type="hidden" />'), r && s.attr("target", r), s.hide().append(a).appendTo("body"), s.submit()
        },
        formElements: function(t, e) {
            return t.is("form") ? c(t[0].elements).filter(e) : t.find(e)
        },
        disableFormElements: function(t) {
            l.formElements(t, l.disableSelector).each(function() {
                l.disableFormElement(c(this))
            })
        },
        disableFormElement: function(t) {
            var e, n;
            e = t.is("button") ? "html" : "val", (n = t.data("disable-with")) !== u && (t.data("ujs:enable-with", t[e]()), t[e](n)), t.prop("disabled", !0), t.data("ujs:disabled", !0)
        },
        enableFormElements: function(t) {
            l.formElements(t, l.enableSelector).each(function() {
                l.enableFormElement(c(this))
            })
        },
        enableFormElement: function(t) {
            var e = t.is("button") ? "html" : "val";
            t.data("ujs:enable-with") !== u && (t[e](t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.prop("disabled", !1), t.removeData("ujs:disabled")
        },
        allowAction: function(t) {
            var e, n = t.data("confirm"),
                r = !1;
            if (!n) return !0;
            if (l.fire(t, "confirm")) {
                try {
                    r = l.confirm(n)
                } catch (i) {
                    (console.error || console.log).call(console, i.stack || i)
                }
                e = l.fire(t, "confirm:complete", [r])
            }
            return r && e
        },
        blankInputs: function(t, e, n) {
            var r, i, o, s = c(),
                a = e || "input,textarea",
                u = t.find(a),
                l = {};
            return u.each(function() {
                (r = c(this)).is("input[type=radio]") ? (o = r.attr("name"), l[o] || (0 === t.find('input[type=radio]:checked[name="' + o + '"]').length && (i = t.find('input[type=radio][name="' + o + '"]'), s = s.add(i)), l[o] = o)) : (r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : !!r.val()) === n && (s = s.add(r))
            }), !!s.length && s
        },
        nonBlankInputs: function(t, e) {
            return l.blankInputs(t, e, !0)
        },
        stopEverything: function(t) {
            return c(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        disableElement: function(t) {
            var e = t.data("disable-with");
            e !== u && (t.data("ujs:enable-with", t.html()), t.html(e)), t.bind("click.railsDisable", function(t) {
                return l.stopEverything(t)
            }), t.data("ujs:disabled", !0)
        },
        enableElement: function(t) {
            t.data("ujs:enable-with") !== u && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable"), t.removeData("ujs:disabled")
        }
    }, l.fire(t, "rails:attachBindings") && (c.ajaxPrefilter(function(t, e, n) {
        t.crossDomain || l.CSRFProtection(n)
    }), c(window).on("pageshow.rails", function() {
        c(c.rails.enableSelector).each(function() {
            var t = c(this);
            t.data("ujs:disabled") && c.rails.enableFormElement(t)
        }), c(c.rails.linkDisableSelector).each(function() {
            var t = c(this);
            t.data("ujs:disabled") && c.rails.enableElement(t)
        })
    }), t.on("ajax:complete", l.linkDisableSelector, function() {
        l.enableElement(c(this))
    }), t.on("ajax:complete", l.buttonDisableSelector, function() {
        l.enableFormElement(c(this))
    }), t.on("click.rails", l.linkClickSelector, function(t) {
        var e = c(this),
            n = e.data("method"),
            r = e.data("params"),
            i = t.metaKey || t.ctrlKey;
        if (!l.allowAction(e)) return l.stopEverything(t);
        if (!i && e.is(l.linkDisableSelector) && l.disableElement(e), l.isRemote(e)) {
            if (i && (!n || "GET" === n) && !r) return !0;
            var o = l.handleRemote(e);
            return !1 === o ? l.enableElement(e) : o.fail(function() {
                l.enableElement(e)
            }), !1
        }
        return n ? (l.handleMethod(e), !1) : void 0
    }), t.on("click.rails", l.buttonClickSelector, function(t) {
        var e = c(this);
        if (!l.allowAction(e) || !l.isRemote(e)) return l.stopEverything(t);
        e.is(l.buttonDisableSelector) && l.disableFormElement(e);
        var n = l.handleRemote(e);
        return !1 === n ? l.enableFormElement(e) : n.fail(function() {
            l.enableFormElement(e)
        }), !1
    }), t.on("change.rails", l.inputChangeSelector, function(t) {
        var e = c(this);
        return l.allowAction(e) && l.isRemote(e) ? (l.handleRemote(e), !1) : l.stopEverything(t)
    }), t.on("submit.rails", l.formSubmitSelector, function(t) {
        var e, n, r = c(this),
            i = l.isRemote(r);
        if (!l.allowAction(r)) return l.stopEverything(t);
        if (r.attr("novalidate") === u)
            if (r.data("ujs:formnovalidate-button") === u) {
                if ((e = l.blankInputs(r, l.requiredInputSelector, !1)) && l.fire(r, "ajax:aborted:required", [e])) return l.stopEverything(t)
            } else r.data("ujs:formnovalidate-button", u);
        if (i) {
            if (n = l.nonBlankInputs(r, l.fileInputSelector)) {
                setTimeout(function() {
                    l.disableFormElements(r)
                }, 13);
                var o = l.fire(r, "ajax:aborted:file", [n]);
                return o || setTimeout(function() {
                    l.enableFormElements(r)
                }, 13), o
            }
            return l.handleRemote(r), !1
        }
        setTimeout(function() {
            l.disableFormElements(r)
        }, 13)
    }), t.on("click.rails", l.formInputClickSelector, function(t) {
        var e = c(this);
        if (!l.allowAction(e)) return l.stopEverything(t);
        var n = e.attr("name"),
            r = n ? {
                name: n,
                value: e.val()
            } : null,
            i = e.closest("form");
        0 === i.length && (i = c("#" + e.attr("form"))), i.data("ujs:submit-button", r), i.data("ujs:formnovalidate-button", e.attr("formnovalidate")), i.data("ujs:submit-button-formaction", e.attr("formaction")), i.data("ujs:submit-button-formmethod", e.attr("formmethod"))
    }), t.on("ajax:send.rails", l.formSubmitSelector, function(t) {
        this === t.target && l.disableFormElements(c(this))
    }), t.on("ajax:complete.rails", l.formSubmitSelector, function(t) {
        this === t.target && l.enableFormElements(c(this))
    }), c(function() {
        l.refreshCSRFTokens()
    }))
}(jQuery),
function() {
    function t() {
        var t = !1;
        if ("localStorage" in window) try {
            window.localStorage.setItem("_tmptest", "tmpval"), t = !0, window.localStorage.removeItem("_tmptest")
        } catch (n) {}
        if (t) try {
            window.localStorage && (x = window.localStorage, T = "localStorage", j = x.jStorage_update)
        } catch (r) {} else if ("globalStorage" in window) try {
            window.globalStorage && (x = "localhost" == window.location.hostname ? window.globalStorage["localhost.localdomain"] : window.globalStorage[window.location.hostname], T = "globalStorage", j = x.jStorage_update)
        } catch (i) {} else {
            if (!(S = document.createElement("link")).addBehavior) return void(S = null);
            S.style.behavior = "url(#default#userData)", document.getElementsByTagName("head")[0].appendChild(S);
            try {
                S.load("jStorage")
            } catch (o) {
                S.setAttribute("jStorage", "{}"), S.save("jStorage"), S.load("jStorage")
            }
            var e = "{}";
            try {
                e = S.getAttribute("jStorage")
            } catch (s) {}
            try {
                j = S.getAttribute("jStorage_update")
            } catch (a) {}
            x.jStorage = e, T = "userDataBehavior"
        }
        d(), f(), u(), h(), "addEventListener" in window && window.addEventListener("pageshow", function(t) {
            t.persisted && l()
        }, !1)
    }

    function o() {
        var t = "{}";
        if ("userDataBehavior" == T) {
            S.load("jStorage");
            try {
                t = S.getAttribute("jStorage")
            } catch (e) {}
            try {
                j = S.getAttribute("jStorage_update")
            } catch (n) {}
            x.jStorage = t
        }
        d(), f(), h()
    }

    function u() {
        "localStorage" == T || "globalStorage" == T ? "addEventListener" in window ? window.addEventListener("storage", l, !1) : document.attachEvent("onstorage", l) : "userDataBehavior" == T && setInterval(l, 1e3)
    }

    function l() {
        var e;
        clearTimeout(k), k = setTimeout(function() {
            if ("localStorage" == T || "globalStorage" == T) e = x.jStorage_update;
            else if ("userDataBehavior" == T) {
                S.load("jStorage");
                try {
                    e = S.getAttribute("jStorage_update")
                } catch (t) {}
            }
            e && e != j && (j = e, n())
        }, 25)
    }

    function n() {
        var t, e = y.parse(y.stringify(w.__jstorage_meta.CRC32));
        o(), t = y.parse(y.stringify(w.__jstorage_meta.CRC32));
        var n, r = [],
            i = [];
        for (n in e)
            if (e.hasOwnProperty(n)) {
                if (!t[n]) {
                    i.push(n);
                    continue
                }
                e[n] != t[n] && "2." == String(e[n]).substr(0, 2) && r.push(n)
            } for (n in t) t.hasOwnProperty(n) && (e[n] || r.push(n));
        a(r, "updated"), a(i, "deleted")
    }

    function a(t, e) {
        if (t = [].concat(t || []), "flushed" == e) {
            for (var n in t = [], E) E.hasOwnProperty(n) && t.push(n);
            e = "deleted"
        }
        for (var r = 0, i = t.length; r < i; r++) {
            if (E[t[r]])
                for (var o = 0, s = E[t[r]].length; o < s; o++) E[t[r]][o](t[r], e);
            if (E["*"])
                for (o = 0, s = E["*"].length; o < s; o++) E["*"][o](t[r], e)
        }
    }

    function c() {
        var t = (+new Date).toString();
        "localStorage" == T || "globalStorage" == T ? x.jStorage_update = t : "userDataBehavior" == T && (S.setAttribute("jStorage_update", t), S.save("jStorage")), l()
    }

    function d() {
        if (x.jStorage) try {
            w = y.parse(String(x.jStorage))
        } catch (t) {
            x.jStorage = "{}"
        } else x.jStorage = "{}";
        C = x.jStorage ? String(x.jStorage).length : 0, w.__jstorage_meta || (w.__jstorage_meta = {}), w.__jstorage_meta.CRC32 || (w.__jstorage_meta.CRC32 = {})
    }

    function p() {
        e();
        try {
            x.jStorage = y.stringify(w), S && (S.setAttribute("jStorage", x.jStorage), S.save("jStorage")), C = x.jStorage ? String(x.jStorage).length : 0
        } catch (t) {}
    }

    function r(t) {
        if (!t || "string" != typeof t && "number" != typeof t) throw new TypeError("Key name must be string or numeric");
        if ("__jstorage_meta" == t) throw new TypeError("Reserved key name");
        return !0
    }

    function f() {
        var t, e, n, r, i = Infinity,
            o = !1,
            s = [];
        if (clearTimeout(b), w.__jstorage_meta && "object" == typeof w.__jstorage_meta.TTL) {
            for (e in t = +new Date, n = w.__jstorage_meta.TTL, r = w.__jstorage_meta.CRC32, n) n.hasOwnProperty(e) && (n[e] <= t ? (delete n[e], delete r[e], delete w[e], o = !0, s.push(e)) : n[e] < i && (i = n[e]));
            i != Infinity && (b = setTimeout(f, i - t)), o && (p(), c(), a(s, "deleted"))
        }
    }

    function h() {
        var t;
        if (w.__jstorage_meta.PubSub) {
            var e, n = A;
            for (t = w.__jstorage_meta.PubSub.length - 1; 0 <= t; t--)(e = w.__jstorage_meta.PubSub[t])[0] > A && (n = e[0], i(e[1], e[2]));
            A = n
        }
    }

    function i(t, e) {
        if (L[t])
            for (var n = 0, r = L[t].length; n < r; n++) L[t][n](t, y.parse(y.stringify(e)))
    }

    function e() {
        if (w.__jstorage_meta.PubSub) {
            for (var t = +new Date - 2e3, e = 0, n = w.__jstorage_meta.PubSub.length; e < n; e++)
                if (w.__jstorage_meta.PubSub[e][0] <= t) {
                    w.__jstorage_meta.PubSub.splice(e, w.__jstorage_meta.PubSub.length - e);
                    break
                } w.__jstorage_meta.PubSub.length || delete w.__jstorage_meta.PubSub
        }
    }

    function s(t, e) {
        w.__jstorage_meta || (w.__jstorage_meta = {}), w.__jstorage_meta.PubSub || (w.__jstorage_meta.PubSub = []), w.__jstorage_meta.PubSub.unshift([+new Date, t, e]), p(), c()
    }

    function m(t, e) {
        for (var n, r = t.length, i = e ^ r, o = 0; 4 <= r;) n = 1540483477 * (65535 & (n = 255 & t.charCodeAt(o) | (255 & t.charCodeAt(++o)) << 8 | (255 & t.charCodeAt(++o)) << 16 | (255 & t.charCodeAt(++o)) << 24)) + ((1540483477 * (n >>> 16) & 65535) << 16), i = 1540483477 * (65535 & i) + ((1540483477 * (i >>> 16) & 65535) << 16) ^ (n = 1540483477 * (65535 & (n ^= n >>> 24)) + ((1540483477 * (n >>> 16) & 65535) << 16)), r -= 4, ++o;
        switch (r) {
            case 3:
                i ^= (255 & t.charCodeAt(o + 2)) << 16;
            case 2:
                i ^= (255 & t.charCodeAt(o + 1)) << 8;
            case 1:
                i = 1540483477 * (65535 & (i ^= 255 & t.charCodeAt(o))) + ((1540483477 * (i >>> 16) & 65535) << 16)
        }
        return i = 1540483477 * (65535 & (i ^= i >>> 13)) + ((1540483477 * (i >>> 16) & 65535) << 16), (i ^= i >>> 15) >>> 0
    }
    var g = "0.4.3",
        v = window.jQuery || window.$ || (window.$ = {}),
        y = {
            parse: window.JSON && (window.JSON.parse || window.JSON.decode) || String.prototype.evalJSON && function(t) {
                return String(t).evalJSON()
            } || v.parseJSON || v.evalJSON,
            stringify: Object.toJSON || window.JSON && (window.JSON.stringify || window.JSON.encode) || v.toJSON
        };
    if (!y.parse || !y.stringify) throw new Error("No JSON support found, include //cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js to page");
    var b, w = {
            __jstorage_meta: {
                CRC32: {}
            }
        },
        x = {
            jStorage: "{}"
        },
        S = null,
        C = 0,
        T = !1,
        E = {},
        k = !1,
        j = 0,
        L = {},
        A = +new Date,
        N = {
            isXML: function(t) {
                var e = (t ? t.ownerDocument || t : 0).documentElement;
                return !!e && "HTML" !== e.nodeName
            },
            encode: function(t) {
                if (!this.isXML(t)) return !1;
                try {
                    return (new XMLSerializer).serializeToString(t)
                } catch (e) {
                    try {
                        return t.xml
                    } catch (n) {}
                }
                return !1
            },
            decode: function(t) {
                var e, n = "DOMParser" in window && (new DOMParser).parseFromString || window.ActiveXObject && function(t) {
                    var e = new ActiveXObject("Microsoft.XMLDOM");
                    return e.async = "false", e.loadXML(t), e
                };
                return !!n && (e = n.call("DOMParser" in window && new DOMParser || window, t, "text/xml"), !!this.isXML(e) && e)
            }
        };
    v.jStorage = {
        version: g,
        set: function(t, e, n) {
            if (r(t), n = n || {}, void 0 === e) return this.deleteKey(t), e;
            if (N.isXML(e)) e = {
                _is_xml: !0,
                xml: N.encode(e)
            };
            else {
                if ("function" == typeof e) return undefined;
                e && "object" == typeof e && (e = y.parse(y.stringify(e)))
            }
            return w[t] = e, w.__jstorage_meta.CRC32[t] = "2." + m(y.stringify(e), 2538058380), this.setTTL(t, n.TTL || 0), a(t, "updated"), e
        },
        get: function(t, e) {
            return r(t), t in w ? w[t] && "object" == typeof w[t] && w[t]._is_xml ? N.decode(w[t].xml) : w[t] : void 0 === e ? null : e
        },
        deleteKey: function(t) {
            return r(t), t in w && (delete w[t], "object" == typeof w.__jstorage_meta.TTL && t in w.__jstorage_meta.TTL && delete w.__jstorage_meta.TTL[t], delete w.__jstorage_meta.CRC32[t], p(), c(), a(t, "deleted"), !0)
        },
        setTTL: function(t, e) {
            var n = +new Date;
            return r(t), e = Number(e) || 0, t in w && (w.__jstorage_meta.TTL || (w.__jstorage_meta.TTL = {}), 0 < e ? w.__jstorage_meta.TTL[t] = n + e : delete w.__jstorage_meta.TTL[t], p(), f(), c(), !0)
        },
        getTTL: function(t) {
            var e = +new Date;
            return r(t), t in w && w.__jstorage_meta.TTL && w.__jstorage_meta.TTL[t] && w.__jstorage_meta.TTL[t] - e || 0
        },
        flush: function() {
            return w = {
                __jstorage_meta: {
                    CRC32: {}
                }
            }, p(), c(), a(null, "flushed"), !0
        },
        storageObj: function() {
            function t() {}
            return t.prototype = w, new t
        },
        index: function() {
            var t, e = [];
            for (t in w) w.hasOwnProperty(t) && "__jstorage_meta" != t && e.push(t);
            return e
        },
        storageSize: function() {
            return C
        },
        currentBackend: function() {
            return T
        },
        storageAvailable: function() {
            return !!T
        },
        listenKeyChange: function(t, e) {
            r(t), E[t] || (E[t] = []), E[t].push(e)
        },
        stopListening: function(t, e) {
            if (r(t), E[t])
                if (e)
                    for (var n = E[t].length - 1; 0 <= n; n--) E[t][n] == e && E[t].splice(n, 1);
                else delete E[t]
        },
        subscribe: function(t, e) {
            if (!(t = (t || "").toString())) throw new TypeError("Channel not defined");
            L[t] || (L[t] = []), L[t].push(e)
        },
        publish: function(t, e) {
            if (!(t = (t || "").toString())) throw new TypeError("Channel not defined");
            s(t, e)
        },
        reInit: function() {
            o()
        }
    }, t()
}(),
function(t, e) {
    "object" == typeof exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Spinner = e()
}(this, function() {
    "use strict";

    function m(t, e) {
        var n, r = document.createElement(t || "div");
        for (n in e) r[n] = e[n];
        return r
    }

    function c(t) {
        for (var e = 1, n = arguments.length; e < n; e++) t.appendChild(arguments[e]);
        return t
    }

    function s(t, e, n, r) {
        var i = ["opacity", e, ~~(100 * t), n, r].join("-"),
            o = .01 + n / r * 100,
            s = Math.max(1 - (1 - t) / e * (100 - o), t),
            a = y.substring(0, y.indexOf("Animation")).toLowerCase(),
            u = a && "-" + a + "-" || "";
        return l[i] || (d.insertRule("@" + u + "keyframes " + i + "{0%{opacity:" + s + "}" + o + "%{opacity:" + t + "}" + (o + .01) + "%{opacity:1}" + (o + e) % 100 + "%{opacity:" + t + "}100%{opacity:" + s + "}}", d.cssRules.length), l[i] = 1), i
    }

    function r(t, e) {
        var n, r, i = t.style;
        if (i[e] !== undefined) return e;
        for (e = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < o.length; r++)
            if (i[n = o[r] + e] !== undefined) return n
    }

    function g(t, e) {
        for (var n in e) t.style[r(t, n) || n] = e[n];
        return t
    }

    function e(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) t[r] === undefined && (t[r] = n[r])
        }
        return t
    }

    function v(t) {
        for (var e = {
                x: t.offsetLeft,
                y: t.offsetTop
            }; t = t.offsetParent;) e.x += t.offsetLeft, e.y += t.offsetTop;
        return e
    }

    function n(t) {
        if (void 0 === this) return new n(t);
        this.opts = e(t || {}, n.defaults, a)
    }

    function t() {
        function l(t, e) {
            return m("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', e)
        }
        d.addRule(".spin-vml", "behavior:url(#default#VML)"), n.prototype.lines = function(t, r) {
            function i() {
                return g(l("group", {
                    coordsize: s + " " + s,
                    coordorigin: -o + " " + -o
                }), {
                    width: s,
                    height: s
                })
            }

            function e(t, e, n) {
                c(u, c(g(i(), {
                    rotation: 360 / r.lines * t + "deg",
                    left: ~~e
                }), c(g(l("roundrect", {
                    arcsize: r.corners
                }), {
                    width: o,
                    height: r.width,
                    left: r.radius,
                    top: -r.width >> 1,
                    filter: n
                }), l("fill", {
                    color: r.color,
                    opacity: r.opacity
                }), l("stroke", {
                    opacity: 0
                }))))
            }
            var n, o = r.length + r.width,
                s = 2 * o,
                a = 2 * -(r.width + r.length) + "px",
                u = g(i(), {
                    position: "absolute",
                    top: a,
                    left: a
                });
            if (r.shadow)
                for (n = 1; n <= r.lines; n++) e(n, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
            for (n = 1; n <= r.lines; n++) e(n);
            return c(t, u)
        }, n.prototype.opacity = function(t, e, n, r) {
            var i = t.firstChild;
            r = r.shadow && r.lines || 0, i && e + r < i.childNodes.length && (i = (i = (i = i.childNodes[e + r]) && i.firstChild) && i.firstChild) && (i.opacity = n)
        }
    }
    var y, i, o = ["webkit", "Moz", "ms", "O"],
        l = {},
        d = (i = m("style", {
            type: "text/css"
        }), c(document.getElementsByTagName("head")[0], i), i.sheet || i.styleSheet),
        a = {
            lines: 12,
            length: 7,
            width: 5,
            radius: 10,
            rotate: 0,
            corners: 1,
            color: "#000",
            direction: 1,
            speed: 1,
            trail: 100,
            opacity: .25,
            fps: 20,
            zIndex: 2e9,
            className: "spinner",
            top: "auto",
            left: "auto",
            position: "relative"
        };
    n.defaults = {}, e(n.prototype, {
        spin: function(t) {
            this.stop();
            var e, n, r = this,
                i = r.opts,
                o = r.el = g(m(0, {
                    className: i.className
                }), {
                    position: i.position,
                    width: 0,
                    zIndex: i.zIndex
                }),
                s = i.radius + i.length + i.width;
            if (t && (t.insertBefore(o, t.firstChild || null), n = v(t), e = v(o), g(o, {
                    left: ("auto" == i.left ? n.x - e.x + (t.offsetWidth >> 1) : parseInt(i.left, 10) + s) + "px",
                    top: ("auto" == i.top ? n.y - e.y + (t.offsetHeight >> 1) : parseInt(i.top, 10) + s) + "px"
                })), o.setAttribute("role", "progressbar"), r.lines(o, r.opts), !y) {
                var a, u = 0,
                    l = (i.lines - 1) * (1 - i.direction) / 2,
                    c = i.fps,
                    d = c / i.speed,
                    p = (1 - i.opacity) / (d * i.trail / 100),
                    f = d / i.lines;
                ! function h() {
                    u++;
                    for (var t = 0; t < i.lines; t++) a = Math.max(1 - (u + (i.lines - t) * f) % d * p, i.opacity), r.opacity(o, t * i.direction + l, a, i);
                    r.timeout = r.el && setTimeout(h, ~~(1e3 / c))
                }()
            }
            return r
        },
        stop: function() {
            var t = this.el;
            return t && (clearTimeout(this.timeout), t.parentNode && t.parentNode.removeChild(t), this.el = undefined), this
        },
        lines: function(t, n) {
            function e(t, e) {
                return g(m(), {
                    position: "absolute",
                    width: n.length + n.width + "px",
                    height: n.width + "px",
                    background: t,
                    boxShadow: e,
                    transformOrigin: "left",
                    transform: "rotate(" + ~~(360 / n.lines * i + n.rotate) + "deg) translate(" + n.radius + "px,0)",
                    borderRadius: (n.corners * n.width >> 1) + "px"
                })
            }
            for (var r, i = 0, o = (n.lines - 1) * (1 - n.direction) / 2; i < n.lines; i++) r = g(m(), {
                position: "absolute",
                top: 1 + ~(n.width / 2) + "px",
                transform: n.hwaccel ? "translate3d(0,0,0)" : "",
                opacity: n.opacity,
                animation: y && s(n.opacity, n.trail, o + i * n.direction, n.lines) + " " + 1 / n.speed + "s linear infinite"
            }), n.shadow && c(r, g(e("#000", "0 0 4px #000"), {
                top: "2px"
            })), c(t, c(r, e(n.color, "0 0 1px rgba(0,0,0,.1)")));
            return t
        },
        opacity: function(t, e, n) {
            e < t.childNodes.length && (t.childNodes[e].style.opacity = n)
        }
    });
    var u = g(m("group"), {
        behavior: "url(#default#VML)"
    });
    return !r(u, "transform") && u.adj ? t() : y = r(u, "animation"), n
}),
function(t) {
    if ("object" == typeof exports) t(require("jquery"), require("spin"));
    else if ("function" == typeof define && define.amd) define(["jquery", "spin"], t);
    else {
        if (!window.Spinner) throw new Error("Spin.js not present");
        t(window.jQuery, window.Spinner)
    }
}(function(i, o) {
    i.fn.spin = function(n, r) {
        return this.each(function() {
            var t = i(this),
                e = t.data();
            e.spinner && (e.spinner.stop(), delete e.spinner), !1 !== n && (n = i.extend({
                color: r || t.css("color")
            }, i.fn.spin.presets[n] || n), e.spinner = new o(n).spin(this))
        })
    }, i.fn.spin.presets = {
        tiny: {
            lines: 8,
            length: 2,
            width: 2,
            radius: 3
        },
        small: {
            lines: 8,
            length: 4,
            width: 3,
            radius: 5
        },
        large: {
            lines: 10,
            length: 8,
            width: 4,
            radius: 8
        }
    }
}), $.fn.spin.presets.fetch_loader = {
        lines: 12,
        length: 4,
        width: 2,
        radius: 5,
        corners: 1,
        rotate: 0,
        direction: 1,
        speed: 1.4,
        trail: 56,
        shadow: !1,
        hwaccel: !0,
        className: "fetcher",
        top: 0,
        left: 0
    }, $.fn.spin.presets.loader = {
        lines: 12,
        length: 4,
        width: 2,
        radius: 5,
        corners: 1,
        rotate: 0,
        direction: 1,
        speed: 1.4,
        trail: 56,
        shadow: !1,
        hwaccel: !0,
        className: "spinner",
        top: "auto",
        left: "auto"
    },
    function() {
        window.delay = function(t, e) {
            return setTimeout(e, t)
        }, window.startApplication = function() {
            var t;
            if (!t) return null
        }
    }.call(this),
    function() {
        window.startMenu = function() {
            var t, e, n, r;
            return delay(100, function() {
                return $("body").addClass("loaded")
            }), e || (e = null), r || (r = null), t = function(t) {
                return null == t && (t = 300), clearTimeout(r), e = setTimeout(function() {
                    return $("body").removeClass("overlord_active").removeClass("overlord_opened")
                }, t)
            }, n = function(t) {
                return null == t && (t = 0), clearTimeout(e), r = setTimeout(function() {
                    return $("body").addClass("overlord_active"), setTimeout(function() {
                        return $("body").addClass("overlord_done")
                    }, 20), setTimeout(function() {
                        return $("body").addClass("overlord_opened")
                    }, 500)
                }, t)
            }, $("div#whiteout").on("click", function() {
                return t(0), !1
            }), $("ul#dropdown li a").on("click", function() {
                return t(0)
            }), $("#hamburger").on("click touchend", function() {
                return $("body").hasClass("overlord_opened") ? (t(0), $("body").removeClass("overlord_opened")) : n(0), !1
            }), $("#hamburger, ul#dropdown").on("mouseenter", function() {
                return n(200)
            }).on("mouseleave", function() {
                return t(600)
            }), !1
        }
    }.call(this),
    function() {
        var t, n, e, r, i, o, s, a;
        n || (n = null), r || (r = null), o || (o = null), i || (i = null), a || (a = null), e || (e = null), t || (t = null), s || (s = null), window.isActive = !0, window.onfocus = function() {
            return window.isActive = !0
        }, window.onblur = function() {
            return window.isActive = !1
        }, window.startCode = function() {
            return $("code").addClass("prettyprint"), "undefined" == typeof hljs || null === hljs ? $.getScript("https://lightning.svbtle.com/cargo/highlight.pack-992964f594b4fb135627393ac167fc2eaf77142f6b5dab7d009200ac06cb25d5.js").done(function() {
                return $("pre code").each(function(t, e) {
                    return hljs.highlightBlock(e)
                })
            }) : $("pre code").each(function(t, e) {
                return hljs.highlightBlock(e)
            })
        }, window.startTweets = function() {
            return $.getScript("//platform.twitter.com/widgets.js", function() {
                return twttr.events.bind("loaded", function() {
                    return $("article .twitter-tweet").css({
                        width: "100%",
                        "max-width": "500px",
                        margin: "0 auto"
                    })
                })
            })
        }, window.updateKudos = function() {
            return $("figure.kudo").each(function() {
                var t;
                if (t = $(this).closest("article").attr("id"), $.jStorage.get(String(t))) return $("#" + t + " figure.kudo").removeClass("able").addClass("complete")
            })
        }, window.getKudos = function() {
            var t, e, n;
            return t = $("article").first().attr("id"), n = parseInt($("span.page.current").text()), isNaN(n) && (n = 1), e = 1 === $("article").length ? "/" + t + "/kudos" : "/page/" + n + "/kudos", t && $.get(e, function(t, e, n) {
                var r;
                return r = n.getResponseHeader("X-SvbKey-r"), $('meta[name="csrf-token"]').attr("content", r), $.each(t, function(t, e) {
                    var n, r, i;
                    if (n = $("#" + e.extid).find("div.num"), r = e.kudos, isNaN(r) && (r = 9e6), i = n.first().text().replace(/,/g, ""), isNaN(i) && (i = 0), 0 <= r - i) return r = (r = r.toString()).replace(/\B(?=(\d{3})+(?!\d))/g, ","), n.html(r)
                })
            }), !0
        }, window.makeBigParagraph = function() {
            return $("article").each(function() {
                var t;
                if (t = $(this).children("p").first(), "" === $.trim(t.text())) return t.next("p").addClass("bigtext")
            })
        }, window.checkMessages = function() {
            var t;
            if (0 <= (t = window.location.search).indexOf("not_found") && (history.pushState(null, null, "/"), $('<div id ="notice"><span>:(</span><br/><br/>Not found.</div>').insertBefore("header#begin")), 0 <= t.indexOf("udate")) return $("article").css({
                opacity: .1
            }), setTimeout(function() {
                return history.pushState(null, null, window.location.pathname), window.location.reload(!0)
            }, 700)
        }, window.bleedImages = function() {
            return $("article img").not(".no-resize").each(function() {
                var t;
                if ($(this).parent("a").hasClass("small-left"));
                else if (400 < getImageWidth(this)) return (t = $(this).not(".no-resize")).addClass("bleed"), t.closest("p").addClass("bleed_image")
            })
        }, window.getImageWidth = function(t) {
            var e;
            return (e = new Image).src = !!t.getAttribute && t.getAttribute("src") || t.src, e.width
        }, window.bootstrapKudo = function(t) {
            return t.addClass("activated"), t.find(".num").hide(), t.find(".txt").html("Don&rsquo;t move"), n = setTimeout(function() {
                return clearTimeout(n), fireKudo(t), t.find(".txt").fadeOut(), t.addClass("complete"), t.siblings("figure.kudo").addClass("complete").removeClass("able"), setTimeout(function() {
                    return t.removeClass("activated").removeClass("able"), t.find(".num").fadeIn(), t.find(".txt").html("Kudos").fadeIn()
                }, 600)
            }, 1e3)
        }, window.fireKudo = function(t) {
            var e, n, r;
            return e = t.closest("article").attr("id"), r = t.closest("article").find("a.title").text(), $.post("/kudos", {
                article: e
            }, function() {
                if ($.jStorage.set(String(e), !0), ga("userTracker.send", "event", "Articles", "Kudos", window.location.pathname, {
                        page: window.location.pathname,
                        title: window.document.title
                    }), ga("send", "event", "Articles", "Kudos", window.location.pathname, {
                        page: window.location.pathname,
                        title: window.document.title
                    }), null != window._gaq) return _gaq.push(["_trackEvent", "Articles", "Kudos", r])
            }), n = parseInt(t.find("div.num").text().replace(/,/g, "")) + 1, t.find("div.num").text(n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")), t.siblings("figure.kudo").find("div.num").text(n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
        }, window.sizeUp = function() {
            var t;
            return a = $(window).width(), t = parseInt($("article p").css("max-width")) - 1, $("article img").not(".no-resize").each(function() {
                return a <= 650 && 530 < a ? ($(this).not(".no-resize").removeAttr("height"), $(this).not(".no-resize").css("width", $(window).width() + "px"), $(this).not(".no-resize").css("margin-left", "-" + ($(window).width() - t) / 2 + "px")) : a < 530 ? ($(this).not(".no-resize").removeAttr("height"), $(this).not(".no-resize").css("width", $(window).width() + "px"), $(this).not(".no-resize").css("margin-left", "0px")) : ($(this).not(".no-resize").removeAttr("height"), $(this).not(".no-resize").css("width", ""), $(this).not(".no-resize").css("margin-left", ""))
            })
        }, window.checkImages = function() {
            return a = $(window).width(), $("article img").each(function() {
                var n, r;
                return (n = new Image).src = $(this).attr("src"), r = $(this), n.onload = function() {
                    var t, e;
                    if (e = /(svbtleusercontent|img|gif|jpg|jpeg|png)/gi, null == (t = r.parent("a").attr("href")) || -1 !== t.search(e) || r.addClass("link-direct"), n.width < 400) return r.addClass("no-resize")
                }
            })
        }, window.setupImages = function() {
            return $("article img").each(function() {
                var t;
                return t = $(this).attr("src").replace("_small", "_retina"), $(this).attr("data-rjs", t), retinajs()
            })
        }, window.subscribeSuccess = function() {
            return t = $("#blog_extid").text(), $.jStorage.set(String(t + "_subscribed"), !0)
        }, window.subscribeCheck = function() {
            if (t = $("#blog_extid").text(), $.jStorage.get(String(t + "_subscribed"))) return $("section#subscribe").remove()
        }, window.startBlog = function() {
            return setTimeout(function() {
                return $("#user_logo").addClass("active")
            }, 100), $("article.post").height() < 700 && $("figure.kudo.side").hide(), $(window).scrollTop(), $("article iframe").each(function() {
                var t;
                return $(this).css("width", ""), t = $(this).attr("src"), /youtube/i.test(t) ? $(this).wrap('<p class="objected youtube"></p>') : $(this).wrap('<p class="objected"></p>')
            }), $("h1.article_title").on({
                mouseenter: function() {
                    return clearTimeout(i), $(".article_time").addClass("active")
                },
                mouseleave: function() {
                    return i = setTimeout(function() {
                        return $(".article_time").removeClass("active")
                    }, 200)
                }
            }), $(window).scroll(function() {
                var t, e;
                if (0 < $("figure.side").length) return t = $("figure.postend").offset().top, e = $(window).height(), t + 50 < $(window).scrollTop() + e ? $("figure.kudo.side").addClass("bottom") : $("figure.kudo.side").removeClass("bottom")
            }), sizeUp(), subscribeCheck(), $("article p img").on({
                click: function() {
                    return !!$(this).closest("article").hasClass("user_show") || (!!$(this).hasClass("link-direct") || (!!$(this).hasClass("clicked-no-resize") || ($(this).hasClass("no-resize") ? ($(this).addClass("clicked-no-resize"), !1) : !!$(this).closest("p").hasClass("image_expand") || ($(this).closest("p").addClass("image_expand"), !1))))
                }
            }), $("section#subscribe input.pane_input").on({
                focus: function() {
                    return $("a.buttonize.submit_subscribe").addClass("active")
                },
                blur: function() {
                    return setTimeout(function() {
                        return $("a.buttonize.submit_subscribe").removeClass("active")
                    }, 500)
                }
            }), $("a.buttonize.submit_subscribe").on({
                click: function() {
                    return $(this).hide(), $(this).closest("form").submit(), !1
                }
            }), $(window).load(function() {
                return setupImages(), checkImages(), bleedImages()
            }), $(document).on("turbolinks:load", function() {
                return setupImages(), checkImages(), bleedImages()
            }), $(window).resize(function() {
                if (sizeUp(), $(window).width() < 600) return bleedImages
            }), checkMessages(), bleedImages(), 0 < $(".user_post").length && getKudos(), updateKudos(), makeBigParagraph(), 0 < $("code, pre").length && startCode(), 0 < $(".twitter-tweet").length && startTweets(), $("a#nudge_user").on({
                click: function() {
                    return $(this).closest("form").submit(), !1
                }
            }), $("figure.kudo a").on({
                click: function(t) {
                    return t.preventDefault(), !1
                },
                mouseenter: function() {
                    var t;
                    if ((t = $(this).parent()).is(".able")) return bootstrapKudo(t)
                },
                mouseleave: function() {
                    var t;
                    return (t = $(this).parent()).find(".num").show(), t.find(".txt").html("Kudos"), t.removeClass("activated"), clearTimeout(n)
                }
            }), $("figure.kudo a").on("touchstart", function(t) {
                var e;
                return (e = $(this).parent()).is(".able") && bootstrapKudo(e), t.preventDefault(), !1
            }), $("figure.kudo a").on("touchend", function(t) {
                var e;
                return clearTimeout(n), (e = $(this).parent()).find(".num").show(), e.find(".txt").html("Kudos"), e.removeClass("activated"), t.preventDefault()
            }), window.saveError = function() {
                var t;
                return $("#lights").show().removeClass().addClass("error"), t = setInterval(function() {
                    return $("#lights").toggleClass("active")
                }, 300), setTimeout(function() {
                    return clearInterval(t), $("#lights").hide().removeClass("error")
                }, 1400), !0
            }, window.saveSuccess = function() {
                var t;
                return $("#floater").fadeOut(), $("#lights").show().removeClass().addClass("success"), t = setInterval(function() {
                    return $("#lights").toggleClass("active")
                }, 300), setTimeout(function() {
                    return clearInterval(t), $("#lights").hide().removeClass("success")
                }, 1400), !0
            }
        }
    }.call(this),
    function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.retinajs = e()
    }(this, function() {
        "use strict";

        function e(t) {
            return Array.prototype.slice.call(t)
        }

        function i(t) {
            var e = parseInt(t, 10);
            return c < e ? c : e
        }

        function o(t) {
            return t.hasAttribute("data-no-resize") || 0 === t.offsetWidth && t.offsetHeight, t
        }

        function s(t, e) {
            var n = t.nodeName.toLowerCase(),
                r = document.createElement("img");
            r.addEventListener("load", function() {
                "img" === n ? o(t).setAttribute("src", e) : t.style.backgroundImage = "url(" + e + ")"
            }), r.setAttribute("src", e), t.setAttribute(h, !0)
        }

        function a(t, e, n) {
            var r = i(2 < arguments.length && n !== undefined ? arguments[2] : 1);
            e && 1 < r && s(t, e.replace(d, "@" + r + "x$1"))
        }

        function u(t, e, n) {
            1 < c && s(t, n)
        }

        function n(t) {
            return t ? "function" == typeof t.forEach ? t : e(t) : "undefined" != typeof document ? e(document.querySelectorAll(f)) : []
        }

        function l(t) {
            return t.style.backgroundImage.replace(p, "$2")
        }

        function t(t) {
            n(t).forEach(function(t) {
                if (!t.getAttribute(h)) {
                    var e = "img" === t.nodeName.toLowerCase() ? t.getAttribute("src") : l(t),
                        n = t.getAttribute("data-rjs"),
                        r = !isNaN(parseInt(n, 10));
                    if (null === n) return;
                    r ? a(t, e, n) : u(t, e, n)
                }
            })
        }
        var r = "undefined" != typeof window,
            c = Math.round(r && window.devicePixelRatio || 1),
            d = /(\.[A-z]{3,4}\/?(\?.*)?)$/,
            p = /url\(('|")?([^)'"]+)('|")?\)/i,
            f = "[data-rjs]",
            h = "data-rjs-processed";
        return r && (window.addEventListener("load", function() {
            t()
        }), window.retinajs = t), t
    }),
    function() {
        var t = this;
        (function() {
            (function() {
                this.Turbolinks = {
                    supported: null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener,
                    visit: function(t, e) {
                        return c.controller.visit(t, e)
                    },
                    clearCache: function() {
                        return c.controller.clearCache()
                    },
                    setProgressBarDelay: function(t) {
                        return c.controller.setProgressBarDelay(t)
                    }
                }
            }).call(this)
        }).call(t);
        var c = t.Turbolinks;
        (function() {
            (function() {
                var n, r, u, t, e, i, o, s, a, l = [].slice;
                c.copyObject = function(t) {
                    var e, n, r;
                    for (e in n = {}, t) r = t[e], n[e] = r;
                    return n
                }, c.closest = function(t, e) {
                    return n.call(t, e)
                }, n = null != (a = document.documentElement.closest) ? a : function(t) {
                    var e;
                    for (e = this; e;) {
                        if (e.nodeType === Node.ELEMENT_NODE && r.call(e, t)) return e;
                        e = e.parentNode
                    }
                }, c.defer = function(t) {
                    return setTimeout(t, 1)
                }, c.throttle = function(n) {
                    var r;
                    return r = null,
                        function() {
                            var t, e;
                            return t = 1 <= arguments.length ? l.call(arguments, 0) : [], null != r ? r : r = requestAnimationFrame((e = this, function() {
                                return r = null, n.apply(e, t)
                            }))
                        }
                }, c.dispatch = function(t, e) {
                    var n, r, i, o, s, a;
                    return a = (s = null != e ? e : {}).target, n = s.cancelable, r = s.data, (i = document.createEvent("Events")).initEvent(t, !0, !0 === n), i.data = null != r ? r : {}, i.cancelable && !u && (o = i.preventDefault, i.preventDefault = function() {
                        return this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", {
                            get: function() {
                                return !0
                            }
                        }), o.call(this)
                    }), (null != a ? a : document).dispatchEvent(i), i
                }, (s = document.createEvent("Events")).initEvent("test", !0, !0), s.preventDefault(), u = s.defaultPrevented, c.match = function(t, e) {
                    return r.call(t, e)
                }, r = null != (e = null != (i = null != (o = (t = document.documentElement).matchesSelector) ? o : t.webkitMatchesSelector) ? i : t.msMatchesSelector) ? e : t.mozMatchesSelector, c.uuid = function() {
                    var t, e, n;
                    for (n = "", t = e = 1; e <= 36; t = ++e) n += 9 === t || 14 === t || 19 === t || 24 === t ? "-" : 15 === t ? "4" : 20 === t ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
                    return n
                }
            }).call(this),
                function() {
                    c.Location = function() {
                        function t(t) {
                            var e, n;
                            null == t && (t = ""), (n = document.createElement("a")).href = t.toString(), this.absoluteURL = n.href, (e = n.hash.length) < 2 ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -e), this.anchor = n.hash.slice(1))
                        }
                        var e, n, r, i;
                        return t.wrap = function(t) {
                            return t instanceof this ? t : new this(t)
                        }, t.prototype.getOrigin = function() {
                            return this.absoluteURL.split("/", 3).join("/")
                        }, t.prototype.getPath = function() {
                            var t, e;
                            return null != (t = null != (e = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? e[1] : void 0) ? t : "/"
                        }, t.prototype.getPathComponents = function() {
                            return this.getPath().split("/").slice(1)
                        }, t.prototype.getLastPathComponent = function() {
                            return this.getPathComponents().slice(-1)[0]
                        }, t.prototype.getExtension = function() {
                            var t, e;
                            return null != (t = null != (e = this.getLastPathComponent().match(/\.[^.]*$/)) ? e[0] : void 0) ? t : ""
                        }, t.prototype.isHTML = function() {
                            return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/)
                        }, t.prototype.isPrefixedBy = function(t) {
                            var e;
                            return e = n(t), this.isEqualTo(t) || i(this.absoluteURL, e)
                        }, t.prototype.isEqualTo = function(t) {
                            return this.absoluteURL === (null != t ? t.absoluteURL : void 0)
                        }, t.prototype.toCacheKey = function() {
                            return this.requestURL
                        }, t.prototype.toJSON = function() {
                            return this.absoluteURL
                        }, t.prototype.toString = function() {
                            return this.absoluteURL
                        }, t.prototype.valueOf = function() {
                            return this.absoluteURL
                        }, n = function(t) {
                            return e(t.getOrigin() + t.getPath())
                        }, e = function(t) {
                            return r(t, "/") ? t : t + "/"
                        }, i = function(t, e) {
                            return t.slice(0, e.length) === e
                        }, r = function(t, e) {
                            return t.slice(-e.length) === e
                        }, t
                    }()
                }.call(this),
                function() {
                    var r = function(t, e) {
                        return function() {
                            return t.apply(e, arguments)
                        }
                    };
                    c.HttpRequest = function() {
                        function t(t, e, n) {
                            this.delegate = t, this.requestCanceled = r(this.requestCanceled, this), this.requestTimedOut = r(this.requestTimedOut, this), this.requestFailed = r(this.requestFailed, this), this.requestLoaded = r(this.requestLoaded, this), this.requestProgressed = r(this.requestProgressed, this), this.url = c.Location.wrap(e).requestURL, this.referrer = c.Location.wrap(n).absoluteURL, this.createXHR()
                        }
                        return t.NETWORK_FAILURE = 0, t.TIMEOUT_FAILURE = -1, t.timeout = 60, t.prototype.send = function() {
                            var t;
                            return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, "function" == typeof(t = this.delegate).requestStarted ? t.requestStarted() : void 0) : void 0
                        }, t.prototype.cancel = function() {
                            return this.xhr && this.sent ? this.xhr.abort() : void 0
                        }, t.prototype.requestProgressed = function(t) {
                            return t.lengthComputable ? this.setProgress(t.loaded / t.total) : void 0
                        }, t.prototype.requestLoaded = function() {
                            return this.endRequest((e = this, function() {
                                var t;
                                return 200 <= (t = e.xhr.status) && t < 300 ? e.delegate.requestCompletedWithResponse(e.xhr.responseText, e.xhr.getResponseHeader("Turbolinks-Location")) : (e.failed = !0, e.delegate.requestFailedWithStatusCode(e.xhr.status, e.xhr.responseText))
                            }));
                            var e
                        }, t.prototype.requestFailed = function() {
                            return this.endRequest((t = this, function() {
                                return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE)
                            }));
                            var t
                        }, t.prototype.requestTimedOut = function() {
                            return this.endRequest((t = this, function() {
                                return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE)
                            }));
                            var t
                        }, t.prototype.requestCanceled = function() {
                            return this.endRequest()
                        }, t.prototype.notifyApplicationBeforeRequestStart = function() {
                            return c.dispatch("turbolinks:request-start", {
                                data: {
                                    url: this.url,
                                    xhr: this.xhr
                                }
                            })
                        }, t.prototype.notifyApplicationAfterRequestEnd = function() {
                            return c.dispatch("turbolinks:request-end", {
                                data: {
                                    url: this.url,
                                    xhr: this.xhr
                                }
                            })
                        }, t.prototype.createXHR = function() {
                            return this.xhr = new XMLHttpRequest, this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled
                        }, t.prototype.endRequest = function(t) {
                            return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != t && t.call(this), this.destroy()) : void 0
                        }, t.prototype.setProgress = function(t) {
                            var e;
                            return this.progress = t, "function" == typeof(e = this.delegate).requestProgressed ? e.requestProgressed(this.progress) : void 0
                        }, t.prototype.destroy = function() {
                            var t;
                            return this.setProgress(1), "function" == typeof(t = this.delegate).requestFinished && t.requestFinished(), this.delegate = null, this.xhr = null
                        }, t
                    }()
                }.call(this),
                function() {
                    var n = function(t, e) {
                        return function() {
                            return t.apply(e, arguments)
                        }
                    };
                    c.ProgressBar = function() {
                        function t() {
                            this.trickle = n(this.trickle, this), this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement()
                        }
                        var e;
                        return e = 300, t.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + e + "ms ease-out, opacity " + e / 2 + "ms " + e / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}", t.prototype.show = function() {
                            return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling())
                        }, t.prototype.hide = function() {
                            return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement((t = this, function() {
                                return t.uninstallProgressElement(), t.stopTrickling(), t.visible = !1, t.hiding = !1
                            }))) : void 0;
                            var t
                        }, t.prototype.setValue = function(t) {
                            return this.value = t, this.refresh()
                        }, t.prototype.installStylesheetElement = function() {
                            return document.head.insertBefore(this.stylesheetElement, document.head.firstChild)
                        }, t.prototype.installProgressElement = function() {
                            return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh()
                        }, t.prototype.fadeProgressElement = function(t) {
                            return this.progressElement.style.opacity = 0, setTimeout(t, 1.5 * e)
                        }, t.prototype.uninstallProgressElement = function() {
                            return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0
                        }, t.prototype.startTrickling = function() {
                            return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, e)
                        }, t.prototype.stopTrickling = function() {
                            return clearInterval(this.trickleInterval), this.trickleInterval = null
                        }, t.prototype.trickle = function() {
                            return this.setValue(this.value + Math.random() / 100)
                        }, t.prototype.refresh = function() {
                            return requestAnimationFrame((t = this, function() {
                                return t.progressElement.style.width = 10 + 90 * t.value + "%"
                            }));
                            var t
                        }, t.prototype.createStylesheetElement = function() {
                            var t;
                            return (t = document.createElement("style")).type = "text/css", t.textContent = this.constructor.defaultCSS, t
                        }, t.prototype.createProgressElement = function() {
                            var t;
                            return (t = document.createElement("div")).className = "turbolinks-progress-bar", t
                        }, t
                    }()
                }.call(this),
                function() {
                    var i = function(t, e) {
                        return function() {
                            return t.apply(e, arguments)
                        }
                    };
                    c.BrowserAdapter = function() {
                        function t(t) {
                            this.controller = t, this.showProgressBar = i(this.showProgressBar, this), this.progressBar = new c.ProgressBar
                        }
                        var n, r, e;
                        return e = c.HttpRequest, n = e.NETWORK_FAILURE, r = e.TIMEOUT_FAILURE, t.prototype.visitProposedToLocationWithAction = function(t, e) {
                            return this.controller.startVisitToLocationWithAction(t, e)
                        }, t.prototype.visitStarted = function(t) {
                            return t.issueRequest(), t.changeHistory(), t.loadCachedSnapshot()
                        }, t.prototype.visitRequestStarted = function(t) {
                            return this.progressBar.setValue(0), t.hasCachedSnapshot() || "restore" !== t.action ? this.showProgressBarAfterDelay() : this.showProgressBar()
                        }, t.prototype.visitRequestProgressed = function(t) {
                            return this.progressBar.setValue(t.progress)
                        }, t.prototype.visitRequestCompleted = function(t) {
                            return t.loadResponse()
                        }, t.prototype.visitRequestFailedWithStatusCode = function(t, e) {
                            switch (e) {
                                case n:
                                case r:
                                    return this.reload();
                                default:
                                    return t.loadResponse()
                            }
                        }, t.prototype.visitRequestFinished = function() {
                            return this.hideProgressBar()
                        }, t.prototype.visitCompleted = function(t) {
                            return t.followRedirect()
                        }, t.prototype.pageInvalidated = function() {
                            return this.reload()
                        }, t.prototype.showProgressBarAfterDelay = function() {
                            return this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay)
                        }, t.prototype.showProgressBar = function() {
                            return this.progressBar.show()
                        }, t.prototype.hideProgressBar = function() {
                            return this.progressBar.hide(), clearTimeout(this.progressBarTimeout)
                        }, t.prototype.reload = function() {
                            return window.location.reload()
                        }, t
                    }()
                }.call(this),
                function() {
                    var e = function(t, e) {
                        return function() {
                            return t.apply(e, arguments)
                        }
                    };
                    c.History = function() {
                        function t(t) {
                            this.delegate = t, this.onPageLoad = e(this.onPageLoad, this), this.onPopState = e(this.onPopState, this)
                        }
                        return t.prototype.start = function() {
                            return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), addEventListener("load", this.onPageLoad, !1), this.started = !0)
                        }, t.prototype.stop = function() {
                            return this.started ? (removeEventListener("popstate", this.onPopState, !1), removeEventListener("load", this.onPageLoad, !1), this.started = !1) : void 0
                        }, t.prototype.push = function(t, e) {
                            return t = c.Location.wrap(t), this.update("push", t, e)
                        }, t.prototype.replace = function(t, e) {
                            return t = c.Location.wrap(t), this.update("replace", t, e)
                        }, t.prototype.onPopState = function(t) {
                            var e, n, r, i;
                            return this.shouldHandlePopState() && (i = null != (n = t.state) ? n.turbolinks : void 0) ? (e = c.Location.wrap(window.location), r = i.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(e, r)) : void 0
                        }, t.prototype.onPageLoad = function() {
                            return c.defer((t = this, function() {
                                return t.pageLoaded = !0
                            }));
                            var t
                        }, t.prototype.shouldHandlePopState = function() {
                            return this.pageIsLoaded()
                        }, t.prototype.pageIsLoaded = function() {
                            return this.pageLoaded || "complete" === document.readyState
                        }, t.prototype.update = function(t, e, n) {
                            var r;
                            return r = {
                                turbolinks: {
                                    restorationIdentifier: n
                                }
                            }, history[t + "State"](r, null, e)
                        }, t
                    }()
                }.call(this),
                function() {
                    c.HeadDetails = function() {
                        function t(t) {
                            var e, n, r, i, o;
                            for (this.elements = {}, n = 0, i = t.length; n < i; n++)(o = t[n]).nodeType === Node.ELEMENT_NODE && (r = o.outerHTML, (null != (e = this.elements)[r] ? e[r] : e[r] = {
                                type: a(o),
                                tracked: s(o),
                                elements: []
                            }).elements.push(o))
                        }
                        var o, e, n, s, a;
                        return t.fromHeadElement = function(t) {
                            var e;
                            return new this(null != (e = null != t ? t.childNodes : void 0) ? e : [])
                        }, t.prototype.hasElementWithKey = function(t) {
                            return t in this.elements
                        }, t.prototype.getTrackedElementSignature = function() {
                            var n;
                            return function() {
                                var t, e;
                                for (n in e = [], t = this.elements) t[n].tracked && e.push(n);
                                return e
                            }.call(this).join("")
                        }, t.prototype.getScriptElementsNotInDetails = function(t) {
                            return this.getElementsMatchingTypeNotInDetails("script", t)
                        }, t.prototype.getStylesheetElementsNotInDetails = function(t) {
                            return this.getElementsMatchingTypeNotInDetails("stylesheet", t)
                        }, t.prototype.getElementsMatchingTypeNotInDetails = function(t, e) {
                            var n, r, i, o, s, a;
                            for (r in s = [], i = this.elements) a = (o = i[r]).type, n = o.elements, a !== t || e.hasElementWithKey(r) || s.push(n[0]);
                            return s
                        }, t.prototype.getProvisionalElements = function() {
                            var t, e, n, r, i, o, s;
                            for (e in n = [], r = this.elements) s = (i = r[e]).type, o = i.tracked, t = i.elements, null != s || o ? 1 < t.length && n.push.apply(n, t.slice(1)) : n.push.apply(n, t);
                            return n
                        }, t.prototype.getMetaValue = function(t) {
                            var e;
                            return null != (e = this.findMetaElementByName(t)) ? e.getAttribute("content") : void 0
                        }, t.prototype.findMetaElementByName = function(t) {
                            var e, n, r, i;
                            for (r in e = void 0, i = this.elements) n = i[r].elements, o(n[0], t) && (e = n[0]);
                            return e
                        }, a = function(t) {
                            return e(t) ? "script" : n(t) ? "stylesheet" : void 0
                        }, s = function(t) {
                            return "reload" === t.getAttribute("data-turbolinks-track")
                        }, e = function(t) {
                            return "script" === t.tagName.toLowerCase()
                        }, n = function(t) {
                            var e;
                            return "style" === (e = t.tagName.toLowerCase()) || "link" === e && "stylesheet" === t.getAttribute("rel")
                        }, o = function(t, e) {
                            return "meta" === t.tagName.toLowerCase() && t.getAttribute("name") === e
                        }, t
                    }()
                }.call(this),
                function() {
                    c.Snapshot = function() {
                        function t(t, e) {
                            this.headDetails = t, this.bodyElement = e
                        }
                        return t.wrap = function(t) {
                            return t instanceof this ? t : "string" == typeof t ? this.fromHTMLString(t) : this.fromHTMLElement(t)
                        }, t.fromHTMLString = function(t) {
                            var e;
                            return (e = document.createElement("html")).innerHTML = t, this.fromHTMLElement(e)
                        }, t.fromHTMLElement = function(t) {
                            var e, n, r;
                            return n = t.querySelector("head"), e = null != (r = t.querySelector("body")) ? r : document.createElement("body"), new this(c.HeadDetails.fromHeadElement(n), e)
                        }, t.prototype.clone = function() {
                            return new this.constructor(this.headDetails, this.bodyElement.cloneNode(!0))
                        }, t.prototype.getRootLocation = function() {
                            var t, e;
                            return e = null != (t = this.getSetting("root")) ? t : "/", new c.Location(e)
                        }, t.prototype.getCacheControlValue = function() {
                            return this.getSetting("cache-control")
                        }, t.prototype.getElementForAnchor = function(t) {
                            try {
                                return this.bodyElement.querySelector("[id='" + t + "'], a[name='" + t + "']")
                            } catch (c) {}
                        }, t.prototype.getPermanentElements = function() {
                            return this.bodyElement.querySelectorAll("[id][data-turbolinks-permanent]")
                        }, t.prototype.getPermanentElementById = function(t) {
                            return this.bodyElement.querySelector("#" + t + "[data-turbolinks-permanent]")
                        }, t.prototype.getPermanentElementsPresentInSnapshot = function(t) {
                            var e, n, r, i, o;
                            for (o = [], n = 0, r = (i = this.getPermanentElements()).length; n < r; n++) e = i[n], t.getPermanentElementById(e.id) && o.push(e);
                            return o
                        }, t.prototype.findFirstAutofocusableElement = function() {
                            return this.bodyElement.querySelector("[autofocus]")
                        }, t.prototype.hasAnchor = function(t) {
                            return null != this.getElementForAnchor(t)
                        }, t.prototype.isPreviewable = function() {
                            return "no-preview" !== this.getCacheControlValue()
                        }, t.prototype.isCacheable = function() {
                            return "no-cache" !== this.getCacheControlValue()
                        }, t.prototype.isVisitable = function() {
                            return "reload" !== this.getSetting("visit-control")
                        }, t.prototype.getSetting = function(t) {
                            return this.headDetails.getMetaValue("turbolinks-" + t)
                        }, t
                    }()
                }.call(this),
                function() {
                    var o = [].slice;
                    c.Renderer = function() {
                        function t() {}
                        var n;
                        return t.render = function(t, e) {
                            var n, r, i;
                            return r = t, n = e, (i = function(t, e, n) {
                                n.prototype = t.prototype;
                                var r = new n,
                                    i = t.apply(r, e);
                                return Object(i) === i ? i : r
                            }(this, 3 <= arguments.length ? o.call(arguments, 2) : [], function() {})).delegate = r, i.render(n), i
                        }, t.prototype.renderView = function(t) {
                            return this.delegate.viewWillRender(this.newBody), t(), this.delegate.viewRendered(this.newBody)
                        }, t.prototype.invalidateView = function() {
                            return this.delegate.viewInvalidated()
                        }, t.prototype.createScriptElement = function(t) {
                            var e;
                            return "false" === t.getAttribute("data-turbolinks-eval") ? t : ((e = document.createElement("script")).textContent = t.textContent, e.async = !1, n(e, t), e)
                        }, n = function(t, e) {
                            var n, r, i, o, s, a, u;
                            for (a = [], n = 0, r = (o = e.attributes).length; n < r; n++) i = (s = o[n]).name, u = s.value, a.push(t.setAttribute(i, u));
                            return a
                        }, t
                    }()
                }.call(this),
                function() {
                    var a, u, n = function(t, e) {
                            function n() {
                                this.constructor = t
                            }
                            for (var r in e) i.call(e, r) && (t[r] = e[r]);
                            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                        },
                        i = {}.hasOwnProperty;
                    c.SnapshotRenderer = function(t) {
                        function e(t, e, n) {
                            this.currentSnapshot = t, this.newSnapshot = e, this.isPreview = n, this.currentHeadDetails = this.currentSnapshot.headDetails, this.newHeadDetails = this.newSnapshot.headDetails, this.currentBody = this.currentSnapshot.bodyElement, this.newBody = this.newSnapshot.bodyElement
                        }
                        return n(e, t), e.prototype.render = function(t) {
                            return this.shouldRender() ? (this.mergeHead(), this.renderView((e = this, function() {
                                return e.replaceBody(), e.isPreview || e.focusFirstAutofocusableElement(), t()
                            }))) : this.invalidateView();
                            var e
                        }, e.prototype.mergeHead = function() {
                            return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements()
                        }, e.prototype.replaceBody = function() {
                            var t;
                            return t = this.relocateCurrentBodyPermanentElements(), this.activateNewBodyScriptElements(), this.assignNewBody(), this.replacePlaceholderElementsWithClonedPermanentElements(t)
                        }, e.prototype.shouldRender = function() {
                            return this.newSnapshot.isVisitable() && this.trackedElementsAreIdentical()
                        }, e.prototype.trackedElementsAreIdentical = function() {
                            return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature()
                        }, e.prototype.copyNewHeadStylesheetElements = function() {
                            var t, e, n, r, i;
                            for (i = [], e = 0, n = (r = this.getNewHeadStylesheetElements()).length; e < n; e++) t = r[e], i.push(document.head.appendChild(t));
                            return i
                        }, e.prototype.copyNewHeadScriptElements = function() {
                            var t, e, n, r, i;
                            for (i = [], e = 0, n = (r = this.getNewHeadScriptElements()).length; e < n; e++) t = r[e], i.push(document.head.appendChild(this.createScriptElement(t)));
                            return i
                        }, e.prototype.removeCurrentHeadProvisionalElements = function() {
                            var t, e, n, r, i;
                            for (i = [], e = 0, n = (r = this.getCurrentHeadProvisionalElements()).length; e < n; e++) t = r[e], i.push(document.head.removeChild(t));
                            return i
                        }, e.prototype.copyNewHeadProvisionalElements = function() {
                            var t, e, n, r, i;
                            for (i = [], e = 0, n = (r = this.getNewHeadProvisionalElements()).length; e < n; e++) t = r[e], i.push(document.head.appendChild(t));
                            return i
                        }, e.prototype.relocateCurrentBodyPermanentElements = function() {
                            var t, e, n, r, i, o, s;
                            for (s = [], t = 0, e = (o = this.getCurrentBodyPermanentElements()).length; t < e; t++) r = o[t], i = a(r), n = this.newSnapshot.getPermanentElementById(r.id), u(r, i.element), u(n, r), s.push(i);
                            return s
                        }, e.prototype.replacePlaceholderElementsWithClonedPermanentElements = function(t) {
                            var e, n, r, i, o, s;
                            for (s = [], r = 0, i = t.length; r < i; r++) n = (o = t[r]).element, e = o.permanentElement.cloneNode(!0), s.push(u(n, e));
                            return s
                        }, e.prototype.activateNewBodyScriptElements = function() {
                            var t, e, n, r, i, o;
                            for (o = [], e = 0, r = (i = this.getNewBodyScriptElements()).length; e < r; e++) n = i[e], t = this.createScriptElement(n), o.push(u(n, t));
                            return o
                        }, e.prototype.assignNewBody = function() {
                            return document.body = this.newBody
                        }, e.prototype.focusFirstAutofocusableElement = function() {
                            var t;
                            return null != (t = this.newSnapshot.findFirstAutofocusableElement()) ? t.focus() : void 0
                        }, e.prototype.getNewHeadStylesheetElements = function() {
                            return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails)
                        }, e.prototype.getNewHeadScriptElements = function() {
                            return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails)
                        }, e.prototype.getCurrentHeadProvisionalElements = function() {
                            return this.currentHeadDetails.getProvisionalElements()
                        }, e.prototype.getNewHeadProvisionalElements = function() {
                            return this.newHeadDetails.getProvisionalElements()
                        }, e.prototype.getCurrentBodyPermanentElements = function() {
                            return this.currentSnapshot.getPermanentElementsPresentInSnapshot(this.newSnapshot)
                        }, e.prototype.getNewBodyScriptElements = function() {
                            return this.newBody.querySelectorAll("script")
                        }, e
                    }(c.Renderer), a = function(t) {
                        var e;
                        return (e = document.createElement("meta")).setAttribute("name", "turbolinks-permanent-placeholder"), e.setAttribute("content", t.id), {
                            element: e,
                            permanentElement: t
                        }
                    }, u = function(t, e) {
                        var n;
                        return (n = t.parentNode) ? n.replaceChild(e, t) : void 0
                    }
                }.call(this),
                function() {
                    var n = function(t, e) {
                            function n() {
                                this.constructor = t
                            }
                            for (var r in e) i.call(e, r) && (t[r] = e[r]);
                            return n.prototype = e.prototype, t.prototype = new n, t.__super__ = e.prototype, t
                        },
                        i = {}.hasOwnProperty;
                    c.ErrorRenderer = function(t) {
                        function e(t) {
                            var e;
                            (e = document.createElement("html")).innerHTML = t, this.newHead = e.querySelector("head"), this.newBody = e.querySelector("body")
                        }
                        return n(e, t), e.prototype.render = function(t) {
                            return this.renderView((e = this, function() {
                                return e.replaceHeadAndBody(), e.activateBodyScriptElements(), t()
                            }));
                            var e
                        }, e.prototype.replaceHeadAndBody = function() {
                            var t, e;
                            return e = document.head, t = document.body, e.parentNode.replaceChild(this.newHead, e), t.parentNode.replaceChild(this.newBody, t)
                        }, e.prototype.activateBodyScriptElements = function() {
                            var t, e, n, r, i, o;
                            for (o = [], e = 0, n = (r = this.getScriptElements()).length; e < n; e++) i = r[e], t = this.createScriptElement(i), o.push(i.parentNode.replaceChild(t, i));
                            return o
                        }, e.prototype.getScriptElements = function() {
                            return document.documentElement.querySelectorAll("script")
                        }, e
                    }(c.Renderer)
                }.call(this),
                function() {
                    c.View = function() {
                        function t(t) {
                            this.delegate = t, this.htmlElement = document.documentElement
                        }
                        return t.prototype.getRootLocation = function() {
                            return this.getSnapshot().getRootLocation()
                        }, t.prototype.getElementForAnchor = function(t) {
                            return this.getSnapshot().getElementForAnchor(t)
                        }, t.prototype.getSnapshot = function() {
                            return c.Snapshot.fromHTMLElement(this.htmlElement)
                        }, t.prototype.render = function(t, e) {
                            var n, r, i;
                            return i = t.snapshot, n = t.error, r = t.isPreview, this.markAsPreview(r), null != i ? this.renderSnapshot(i, r, e) : this.renderError(n, e)
                        }, t.prototype.markAsPreview = function(t) {
                            return t ? this.htmlElement.setAttribute("data-turbolinks-preview", "") : this.htmlElement.removeAttribute("data-turbolinks-preview")
                        }, t.prototype.renderSnapshot = function(t, e, n) {
                            return c.SnapshotRenderer.render(this.delegate, n, this.getSnapshot(), c.Snapshot.wrap(t), e)
                        }, t.prototype.renderError = function(t, e) {
                            return c.ErrorRenderer.render(this.delegate, e, t)
                        }, t
                    }()
                }.call(this),
                function() {
                    var e = function(t, e) {
                        return function() {
                            return t.apply(e, arguments)
                        }
                    };
                    c.ScrollManager = function() {
                        function t(t) {
                            this.delegate = t, this.onScroll = e(this.onScroll, this), this.onScroll = c.throttle(this.onScroll)
                        }
                        return t.prototype.start = function() {
                            return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0)
                        }, t.prototype.stop = function() {
                            return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0
                        }, t.prototype.scrollToElement = function(t) {
                            return t.scrollIntoView()
                        }, t.prototype.scrollToPosition = function(t) {
                            var e, n;
                            return e = t.x, n = t.y, window.scrollTo(e, n)
                        }, t.prototype.onScroll = function() {
                            return this.updatePosition({
                                x: window.pageXOffset,
                                y: window.pageYOffset
                            })
                        }, t.prototype.updatePosition = function(t) {
                            var e;
                            return this.position = t, null != (e = this.delegate) ? e.scrollPositionChanged(this.position) : void 0
                        }, t
                    }()
                }.call(this),
                function() {
                    c.SnapshotCache = function() {
                        function t(t) {
                            this.size = t, this.keys = [], this.snapshots = {}
                        }
                        var r;
                        return t.prototype.has = function(t) {
                            return r(t) in this.snapshots
                        }, t.prototype.get = function(t) {
                            var e;
                            if (this.has(t)) return e = this.read(t), this.touch(t), e
                        }, t.prototype.put = function(t, e) {
                            return this.write(t, e), this.touch(t), e
                        }, t.prototype.read = function(t) {
                            var e;
                            return e = r(t), this.snapshots[e]
                        }, t.prototype.write = function(t, e) {
                            var n;
                            return n = r(t), this.snapshots[n] = e
                        }, t.prototype.touch = function(t) {
                            var e, n;
                            return n = r(t), -1 < (e = this.keys.indexOf(n)) && this.keys.splice(e, 1), this.keys.unshift(n), this.trim()
                        }, t.prototype.trim = function() {
                            var t, e, n, r, i;
                            for (i = [], t = 0, n = (r = this.keys.splice(this.size)).length; t < n; t++) e = r[t], i.push(delete this.snapshots[e]);
                            return i
                        }, r = function(t) {
                            return c.Location.wrap(t).toCacheKey()
                        }, t
                    }()
                }.call(this),
                function() {
                    var r = function(t, e) {
                        return function() {
                            return t.apply(e, arguments)
                        }
                    };
                    c.Visit = function() {
                        function t(t, e, n) {
                            this.controller = t, this.action = n, this.performScroll = r(this.performScroll, this), this.identifier = c.uuid(), this.location = c.Location.wrap(e), this.adapter = this.controller.adapter, this.state = "initialized", this.timingMetrics = {}
                        }
                        var n;
                        return t.prototype.start = function() {
                            return "initialized" === this.state ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0
                        }, t.prototype.cancel = function() {
                            var t;
                            return "started" === this.state ? (null != (t = this.request) && t.cancel(), this.cancelRender(), this.state = "canceled") : void 0
                        }, t.prototype.complete = function() {
                            var t;
                            return "started" === this.state ? (this.recordTimingMetric("visitEnd"), this.state = "completed", "function" == typeof(t = this.adapter).visitCompleted && t.visitCompleted(this), this.controller.visitCompleted(this)) : void 0
                        }, t.prototype.fail = function() {
                            var t;
                            return "started" === this.state ? (this.state = "failed", "function" == typeof(t = this.adapter).visitFailed ? t.visitFailed(this) : void 0) : void 0
                        }, t.prototype.changeHistory = function() {
                            var t, e;
                            return this.historyChanged ? void 0 : (t = this.location.isEqualTo(this.referrer) ? "replace" : this.action, e = n(t), this.controller[e](this.location, this.restorationIdentifier), this.historyChanged = !0)
                        }, t.prototype.issueRequest = function() {
                            return this.shouldIssueRequest() && null == this.request ? (this.progress = 0, this.request = new c.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0
                        }, t.prototype.getCachedSnapshot = function() {
                            var t;
                            return !(t = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !t.hasAnchor(this.location.anchor) || "restore" !== this.action && !t.isPreviewable() ? void 0 : t
                        }, t.prototype.hasCachedSnapshot = function() {
                            return null != this.getCachedSnapshot()
                        }, t.prototype.loadCachedSnapshot = function() {
                            var e, n;
                            return (n = this.getCachedSnapshot()) ? (e = this.shouldIssueRequest(), this.render(function() {
                                var t;
                                return this.cacheSnapshot(), this.controller.render({
                                    snapshot: n,
                                    isPreview: e
                                }, this.performScroll), "function" == typeof(t = this.adapter).visitRendered && t.visitRendered(this), e ? void 0 : this.complete()
                            })) : void 0
                        }, t.prototype.loadResponse = function() {
                            return null != this.response ? this.render(function() {
                                var t, e;
                                return this.cacheSnapshot(), this.request.failed ? (this.controller.render({
                                    error: this.response
                                }, this.performScroll), "function" == typeof(t = this.adapter).visitRendered && t.visitRendered(this), this.fail()) : (this.controller.render({
                                    snapshot: this.response
                                }, this.performScroll), "function" == typeof(e = this.adapter).visitRendered && e.visitRendered(this), this.complete())
                            }) : void 0
                        }, t.prototype.followRedirect = function() {
                            return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect = !0) : void 0
                        }, t.prototype.requestStarted = function() {
                            var t;
                            return this.recordTimingMetric("requestStart"), "function" == typeof(t = this.adapter).visitRequestStarted ? t.visitRequestStarted(this) : void 0
                        }, t.prototype.requestProgressed = function(t) {
                            var e;
                            return this.progress = t, "function" == typeof(e = this.adapter).visitRequestProgressed ? e.visitRequestProgressed(this) : void 0
                        }, t.prototype.requestCompletedWithResponse = function(t, e) {
                            return this.response = t, null != e && (this.redirectedToLocation = c.Location.wrap(e)), this.adapter.visitRequestCompleted(this)
                        }, t.prototype.requestFailedWithStatusCode = function(t, e) {
                            return this.response = e, this.adapter.visitRequestFailedWithStatusCode(this, t)
                        }, t.prototype.requestFinished = function() {
                            var t;
                            return this.recordTimingMetric("requestEnd"), "function" == typeof(t = this.adapter).visitRequestFinished ? t.visitRequestFinished(this) : void 0
                        }, t.prototype.performScroll = function() {
                            return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled = !0)
                        }, t.prototype.scrollToRestoredPosition = function() {
                            var t, e;
                            return null != (t = null != (e = this.restorationData) ? e.scrollPosition : void 0) ? (this.controller.scrollToPosition(t), !0) : void 0
                        }, t.prototype.scrollToAnchor = function() {
                            return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0
                        }, t.prototype.scrollToTop = function() {
                            return this.controller.scrollToPosition({
                                x: 0,
                                y: 0
                            })
                        }, t.prototype.recordTimingMetric = function(t) {
                            var e;
                            return null != (e = this.timingMetrics)[t] ? e[t] : e[t] = (new Date).getTime()
                        }, t.prototype.getTimingMetrics = function() {
                            return c.copyObject(this.timingMetrics)
                        }, n = function(t) {
                            switch (t) {
                                case "replace":
                                    return "replaceHistoryWithLocationAndRestorationIdentifier";
                                case "advance":
                                case "restore":
                                    return "pushHistoryWithLocationAndRestorationIdentifier"
                            }
                        }, t.prototype.shouldIssueRequest = function() {
                            return "restore" !== this.action || !this.hasCachedSnapshot()
                        }, t.prototype.cacheSnapshot = function() {
                            return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached = !0)
                        }, t.prototype.render = function(t) {
                            return this.cancelRender(), this.frame = requestAnimationFrame((e = this, function() {
                                return e.frame = null, t.call(e)
                            }));
                            var e
                        }, t.prototype.cancelRender = function() {
                            return this.frame ? cancelAnimationFrame(this.frame) : void 0
                        }, t
                    }()
                }.call(this),
                function() {
                    var e = function(t, e) {
                        return function() {
                            return t.apply(e, arguments)
                        }
                    };
                    c.Controller = function() {
                        function t() {
                            this.clickBubbled = e(this.clickBubbled, this), this.clickCaptured = e(this.clickCaptured, this), this.pageLoaded = e(this.pageLoaded, this), this.history = new c.History(this), this.view = new c.View(this), this.scrollManager = new c.ScrollManager(this), this.restorationData = {}, this.clearCache(), this.setProgressBarDelay(500)
                        }
                        return t.prototype.start = function() {
                            return c.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0
                        }, t.prototype.disable = function() {
                            return this.enabled = !1
                        }, t.prototype.stop = function() {
                            return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0
                        }, t.prototype.clearCache = function() {
                            return this.cache = new c.SnapshotCache(10)
                        }, t.prototype.visit = function(t, e) {
                            var n, r;
                            return null == e && (e = {}), t = c.Location.wrap(t), this.applicationAllowsVisitingLocation(t) ? this.locationIsVisitable(t) ? (n = null != (r = e.action) ? r : "advance", this.adapter.visitProposedToLocationWithAction(t, n)) : window.location = t : void 0
                        }, t.prototype.startVisitToLocationWithAction = function(t, e, n) {
                            var r;
                            return c.supported ? (r = this.getRestorationDataForIdentifier(n), this.startVisit(t, e, {
                                restorationData: r
                            })) : window.location = t
                        }, t.prototype.setProgressBarDelay = function(t) {
                            return this.progressBarDelay = t
                        }, t.prototype.startHistory = function() {
                            return this.location = c.Location.wrap(window.location), this.restorationIdentifier = c.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier)
                        }, t.prototype.stopHistory = function() {
                            return this.history.stop()
                        }, t.prototype.pushHistoryWithLocationAndRestorationIdentifier = function(t, e) {
                            return this.restorationIdentifier = e, this.location = c.Location.wrap(t), this.history.push(this.location, this.restorationIdentifier)
                        }, t.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function(t, e) {
                            return this.restorationIdentifier = e, this.location = c.Location.wrap(t), this.history.replace(this.location, this.restorationIdentifier)
                        }, t.prototype.historyPoppedToLocationWithRestorationIdentifier = function(t, e) {
                            var n;
                            return this.restorationIdentifier = e, this.enabled ? (n = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(t, "restore", {
                                restorationIdentifier: this.restorationIdentifier,
                                restorationData: n,
                                historyChanged: !0
                            }), this.location = c.Location.wrap(t)) : this.adapter.pageInvalidated()
                        }, t.prototype.getCachedSnapshotForLocation = function(t) {
                            var e;
                            return null != (e = this.cache.get(t)) ? e.clone() : void 0
                        }, t.prototype.shouldCacheSnapshot = function() {
                            return this.view.getSnapshot().isCacheable()
                        }, t.prototype.cacheSnapshot = function() {
                            var t, e, n;
                            return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), e = this.view.getSnapshot(), t = this.lastRenderedLocation, c.defer((n = this, function() {
                                return n.cache.put(t, e.clone())
                            }))) : void 0
                        }, t.prototype.scrollToAnchor = function(t) {
                            var e;
                            return (e = this.view.getElementForAnchor(t)) ? this.scrollToElement(e) : this.scrollToPosition({
                                x: 0,
                                y: 0
                            })
                        }, t.prototype.scrollToElement = function(t) {
                            return this.scrollManager.scrollToElement(t)
                        }, t.prototype.scrollToPosition = function(t) {
                            return this.scrollManager.scrollToPosition(t)
                        }, t.prototype.scrollPositionChanged = function(t) {
                            return this.getCurrentRestorationData().scrollPosition = t
                        }, t.prototype.render = function(t, e) {
                            return this.view.render(t, e)
                        }, t.prototype.viewInvalidated = function() {
                            return this.adapter.pageInvalidated()
                        }, t.prototype.viewWillRender = function(t) {
                            return this.notifyApplicationBeforeRender(t)
                        }, t.prototype.viewRendered = function() {
                            return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender()
                        }, t.prototype.pageLoaded = function() {
                            return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad()
                        }, t.prototype.clickCaptured = function() {
                            return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1)
                        }, t.prototype.clickBubbled = function(t) {
                            var e, n, r;
                            return this.enabled && this.clickEventIsSignificant(t) && (n = this.getVisitableLinkForNode(t.target)) && (r = this.getVisitableLocationForLink(n)) && this.applicationAllowsFollowingLinkToLocation(n, r) ? (t.preventDefault(), e = this.getActionForLink(n), this.visit(r, {
                                action: e
                            })) : void 0
                        }, t.prototype.applicationAllowsFollowingLinkToLocation = function(t, e) {
                            return !this.notifyApplicationAfterClickingLinkToLocation(t, e).defaultPrevented
                        }, t.prototype.applicationAllowsVisitingLocation = function(t) {
                            return !this.notifyApplicationBeforeVisitingLocation(t).defaultPrevented
                        }, t.prototype.notifyApplicationAfterClickingLinkToLocation = function(t, e) {
                            return c.dispatch("turbolinks:click", {
                                target: t,
                                data: {
                                    url: e.absoluteURL
                                },
                                cancelable: !0
                            })
                        }, t.prototype.notifyApplicationBeforeVisitingLocation = function(t) {
                            return c.dispatch("turbolinks:before-visit", {
                                data: {
                                    url: t.absoluteURL
                                },
                                cancelable: !0
                            })
                        }, t.prototype.notifyApplicationAfterVisitingLocation = function(t) {
                            return c.dispatch("turbolinks:visit", {
                                data: {
                                    url: t.absoluteURL
                                }
                            })
                        }, t.prototype.notifyApplicationBeforeCachingSnapshot = function() {
                            return c.dispatch("turbolinks:before-cache")
                        }, t.prototype.notifyApplicationBeforeRender = function(t) {
                            return c.dispatch("turbolinks:before-render", {
                                data: {
                                    newBody: t
                                }
                            })
                        }, t.prototype.notifyApplicationAfterRender = function() {
                            return c.dispatch("turbolinks:render")
                        }, t.prototype.notifyApplicationAfterPageLoad = function(t) {
                            return null == t && (t = {}), c.dispatch("turbolinks:load", {
                                data: {
                                    url: this.location.absoluteURL,
                                    timing: t
                                }
                            })
                        }, t.prototype.startVisit = function(t, e, n) {
                            var r;
                            return null != (r = this.currentVisit) && r.cancel(), this.currentVisit = this.createVisit(t, e, n), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(t)
                        }, t.prototype.createVisit = function(t, e, n) {
                            var r, i, o, s, a;
                            return s = (i = null != n ? n : {}).restorationIdentifier, o = i.restorationData, r = i.historyChanged, (a = new c.Visit(this, t, e)).restorationIdentifier = null != s ? s : c.uuid(), a.restorationData = c.copyObject(o), a.historyChanged = r, a.referrer = this.location, a
                        }, t.prototype.visitCompleted = function(t) {
                            return this.notifyApplicationAfterPageLoad(t.getTimingMetrics())
                        }, t.prototype.clickEventIsSignificant = function(t) {
                            return !(t.defaultPrevented || t.target.isContentEditable || 1 < t.which || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey)
                        }, t.prototype.getVisitableLinkForNode = function(t) {
                            return this.nodeIsVisitable(t) ? c.closest(t, "a[href]:not([target]):not([download])") : void 0
                        }, t.prototype.getVisitableLocationForLink = function(t) {
                            var e;
                            return e = new c.Location(t.getAttribute("href")), this.locationIsVisitable(e) ? e : void 0
                        }, t.prototype.getActionForLink = function(t) {
                            var e;
                            return null != (e = t.getAttribute("data-turbolinks-action")) ? e : "advance"
                        }, t.prototype.nodeIsVisitable = function(t) {
                            var e;
                            return !(e = c.closest(t, "[data-turbolinks]")) || "false" !== e.getAttribute("data-turbolinks")
                        }, t.prototype.locationIsVisitable = function(t) {
                            return t.isPrefixedBy(this.view.getRootLocation()) && t.isHTML()
                        }, t.prototype.getCurrentRestorationData = function() {
                            return this.getRestorationDataForIdentifier(this.restorationIdentifier)
                        }, t.prototype.getRestorationDataForIdentifier = function(t) {
                            var e;
                            return null != (e = this.restorationData)[t] ? e[t] : e[t] = {}
                        }, t
                    }()
                }.call(this),
                function() {
                    ! function() {
                        var t, e;
                        if ((t = e = document.currentScript) && !e.hasAttribute("data-turbolinks-suppress-warning"))
                            for (; t = t.parentNode;)
                                if (t === document.body) return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s", e.outerHTML)
                    }()
                }.call(this),
                function() {
                    var t, e, n;
                    c.start = function() {
                        return e() ? (null == c.controller && (c.controller = t()), c.controller.start()) : void 0
                    }, e = function() {
                        return null == window.Turbolinks && (window.Turbolinks = c), n()
                    }, t = function() {
                        var t;
                        return (t = new c.Controller).adapter = new c.BrowserAdapter(t), t
                    }, (n = function() {
                        return window.Turbolinks === c
                    })() && c.start()
                }.call(this)
        }).call(this), "object" == typeof module && module.exports ? module.exports = c : "function" == typeof define && define.amd && define(c)
    }.call(this),
    function() {
        var t, e;
        e = function() {
            return startMenu(), startBlog(), startApplication()
        }, t = function() {
            var t, e, n;
            return t = window.location.protocol + "//" + window.location.hostname + window.location.pathname + window.location.search, e = window.location.pathname, n = window.document.title, ga("send", "pageview", {
                page: e,
                title: n,
                location: t
            }), ga("userTracker.send", "pageview", {
                page: e,
                title: n,
                location: t
            }), null != window._gaq ? (_gaq.push(["_trackPageview"]), _gaq.push(["b._trackPageview"])) : null != window.pageTracker ? pageTracker._trackPageview() : void 0
        }, $(function() {}), $(document).on("turbolinks:request-start", function() {
            return $("body").removeClass("loaded"), $("#logo_top").addClass("loading"), $("#loading").spin("loader", "black")
        }), $(document).on("turbolinks:click", function() {
            if ("#" === event.target.getAttribute("href").charAt(0)) return event.preventDefault()
        }), $(document).on("turbolinks:load", function() {
            return e(), t(), $("#logo_top").removeClass(loading), $("#loading").spin(!1), $(".spinner").remove()
        })
    }.call(this);