/*!
 * jQuery JavaScript Library v1.12.0
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-01-08T19:56Z
 */
/*!
 * Bootstrap v3.2.0 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if (function(t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        function n(t) {
            var e = !! t && "length" in t && t.length,
                n = dt.type(t);
            return "function" === n || dt.isWindow(t) ? !1 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
        }
        function i(t, e, n) {
            if (dt.isFunction(e)) return dt.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            });
            if (e.nodeType) return dt.grep(t, function(t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (Ct.test(e)) return dt.filter(e, t, n);
                e = dt.filter(e, t)
            }
            return dt.grep(t, function(t) {
                return dt.inArray(t, e) > -1 !== n
            })
        }
        function r(t, e) {
            do t = t[e];
            while (t && 1 !== t.nodeType);
            return t
        }
        function o(t) {
            var e = {};
            return dt.each(t.match(Pt) || [], function(t, n) {
                e[n] = !0
            }), e
        }
        function s() {
            it.addEventListener ? (it.removeEventListener("DOMContentLoaded", a), t.removeEventListener("load", a)) : (it.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
        }
        function a() {
            (it.addEventListener || "load" === t.event.type || "complete" === it.readyState) && (s(), dt.ready())
        }
        function l(t, e, n) {
            if (void 0 === n && 1 === t.nodeType) {
                var i = "data-" + e.replace(It, "-$1").toLowerCase();
                if (n = t.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Nt.test(n) ? dt.parseJSON(n) : n
                    } catch (r) {}
                    dt.data(t, e, n)
                } else n = void 0
            }
            return n
        }
        function u(t) {
            var e;
            for (e in t) if (("data" !== e || !dt.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
            return !0
        }
        function c(t, e, n, i) {
            if (jt(t)) {
                var r, o, s = dt.expando,
                    a = t.nodeType,
                    l = a ? dt.cache : t,
                    u = a ? t[s] : t[s] && s;
                if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof e) return u || (u = a ? t[s] = nt.pop() || dt.guid++ : s), l[u] || (l[u] = a ? {} : {
                    toJSON: dt.noop
                }), ("object" == typeof e || "function" == typeof e) && (i ? l[u] = dt.extend(l[u], e) : l[u].data = dt.extend(l[u].data, e)), o = l[u], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[dt.camelCase(e)] = n), "string" == typeof e ? (r = o[e], null == r && (r = o[dt.camelCase(e)])) : r = o, r
            }
        }
        function h(t, e, n) {
            if (jt(t)) {
                var i, r, o = t.nodeType,
                    s = o ? dt.cache : t,
                    a = o ? t[dt.expando] : dt.expando;
                if (s[a]) {
                    if (e && (i = n ? s[a] : s[a].data)) {
                        dt.isArray(e) ? e = e.concat(dt.map(e, dt.camelCase)) : e in i ? e = [e] : (e = dt.camelCase(e), e = e in i ? [e] : e.split(" ")), r = e.length;
                        for (; r--;) delete i[e[r]];
                        if (n ? !u(i) : !dt.isEmptyObject(i)) return
                    }(n || (delete s[a].data, u(s[a]))) && (o ? dt.cleanData([t], !0) : ht.deleteExpando || s != s.window ? delete s[a] : s[a] = void 0)
                }
            }
        }
        function f(t, e, n, i) {
            var r, o = 1,
                s = 20,
                a = i ?
                    function() {
                        return i.cur()
                    } : function() {
                    return dt.css(t, e, "")
                }, l = a(), u = n && n[3] || (dt.cssNumber[e] ? "" : "px"), c = (dt.cssNumber[e] || "px" !== u && +l) && qt.exec(dt.css(t, e));
            if (c && c[3] !== u) {
                u = u || c[3], n = n || [], c = +l || 1;
                do o = o || ".5", c /= o, dt.style(t, e, c + u);
                while (o !== (o = a() / l) && 1 !== o && --s)
            }
            return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
        }
        function d(t) {
            var e = Wt.split("|"),
                n = t.createDocumentFragment();
            if (n.createElement) for (; e.length;) n.createElement(e.pop());
            return n
        }
        function p(t, e) {
            var n, i, r = 0,
                o = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : void 0;
            if (!o) for (o = [], n = t.childNodes || t; null != (i = n[r]); r++)!e || dt.nodeName(i, e) ? o.push(i) : dt.merge(o, p(i, e));
            return void 0 === e || e && dt.nodeName(t, e) ? dt.merge([t], o) : o
        }
        function m(t, e) {
            for (var n, i = 0; null != (n = t[i]); i++) dt._data(n, "globalEval", !e || dt._data(e[i], "globalEval"))
        }
        function g(t) {
            Lt.test(t.type) && (t.defaultChecked = t.checked)
        }
        function v(t, e, n, i, r) {
            for (var o, s, a, l, u, c, h, f = t.length, v = d(e), y = [], b = 0; f > b; b++) if (s = t[b], s || 0 === s) if ("object" === dt.type(s)) dt.merge(y, s.nodeType ? [s] : s);
            else if (Vt.test(s)) {
                for (l = l || v.appendChild(e.createElement("div")), u = (Bt.exec(s) || ["", ""])[1].toLowerCase(), h = zt[u] || zt._default, l.innerHTML = h[1] + dt.htmlPrefilter(s) + h[2], o = h[0]; o--;) l = l.lastChild;
                if (!ht.leadingWhitespace && Ht.test(s) && y.push(e.createTextNode(Ht.exec(s)[0])), !ht.tbody) for (s = "table" !== u || Gt.test(s) ? "<table>" !== h[1] || Gt.test(s) ? 0 : l : l.firstChild, o = s && s.childNodes.length; o--;) dt.nodeName(c = s.childNodes[o], "tbody") && !c.childNodes.length && s.removeChild(c);
                for (dt.merge(y, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
                l = v.lastChild
            } else y.push(e.createTextNode(s));
            for (l && v.removeChild(l), ht.appendChecked || dt.grep(p(y, "input"), g), b = 0; s = y[b++];) if (i && dt.inArray(s, i) > -1) r && r.push(s);
            else if (a = dt.contains(s.ownerDocument, s), l = p(v.appendChild(s), "script"), a && m(l), n) for (o = 0; s = l[o++];) Ut.test(s.type || "") && n.push(s);
            return l = null, v
        }
        function y() {
            return !0
        }
        function b() {
            return !1
        }
        function x() {
            try {
                return it.activeElement
            } catch (t) {}
        }
        function w(t, e, n, i, r, o) {
            var s, a;
            if ("object" == typeof e) {
                "string" != typeof n && (i = i || n, n = void 0);
                for (a in e) w(t, a, n, i, e[a], o);
                return t
            }
            if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = b;
            else if (!r) return t;
            return 1 === o && (s = r, r = function(t) {
                return dt().off(t), s.apply(this, arguments)
            }, r.guid = s.guid || (s.guid = dt.guid++)), t.each(function() {
                dt.event.add(this, e, r, i, n)
            })
        }
        function _(t, e) {
            return dt.nodeName(t, "table") && dt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }
        function C(t) {
            return t.type = (null !== dt.find.attr(t, "type")) + "/" + t.type, t
        }
        function k(t) {
            var e = re.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }
        function T(t, e) {
            if (1 === e.nodeType && dt.hasData(t)) {
                var n, i, r, o = dt._data(t),
                    s = dt._data(e, o),
                    a = o.events;
                if (a) {
                    delete s.handle, s.events = {};
                    for (n in a) for (i = 0, r = a[n].length; r > i; i++) dt.event.add(e, n, a[n][i])
                }
                s.data && (s.data = dt.extend({}, s.data))
            }
        }
        function E(t, e) {
            var n, i, r;
            if (1 === e.nodeType) {
                if (n = e.nodeName.toLowerCase(), !ht.noCloneEvent && e[dt.expando]) {
                    r = dt._data(e);
                    for (i in r.events) dt.removeEvent(e, i, r.handle);
                    e.removeAttribute(dt.expando)
                }
                "script" === n && e.text !== t.text ? (C(e).text = t.text, k(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ht.html5Clone && t.innerHTML && !dt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Lt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
            }
        }
        function S(t, e, n, i) {
            e = ot.apply([], e);
            var r, o, s, a, l, u, c = 0,
                h = t.length,
                f = h - 1,
                d = e[0],
                m = dt.isFunction(d);
            if (m || h > 1 && "string" == typeof d && !ht.checkClone && ie.test(d)) return t.each(function(r) {
                var o = t.eq(r);
                m && (e[0] = d.call(this, r, o.html())), S(o, e, n, i)
            });
            if (h && (u = v(e, t[0].ownerDocument, !1, t, i), r = u.firstChild, 1 === u.childNodes.length && (u = r), r || i)) {
                for (a = dt.map(p(u, "script"), C), s = a.length; h > c; c++) o = u, c !== f && (o = dt.clone(o, !0, !0), s && dt.merge(a, p(o, "script"))), n.call(t[c], o, c);
                if (s) for (l = a[a.length - 1].ownerDocument, dt.map(a, k), c = 0; s > c; c++) o = a[c], Ut.test(o.type || "") && !dt._data(o, "globalEval") && dt.contains(l, o) && (o.src ? dt._evalUrl && dt._evalUrl(o.src) : dt.globalEval((o.text || o.textContent || o.innerHTML || "").replace(oe, "")));
                u = r = null
            }
            return t
        }
        function A(t, e, n) {
            for (var i, r = e ? dt.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || dt.cleanData(p(i)), i.parentNode && (n && dt.contains(i.ownerDocument, i) && m(p(i, "script")), i.parentNode.removeChild(i));
            return t
        }
        function P(t, e) {
            var n = dt(e.createElement(t)).appendTo(e.body),
                i = dt.css(n[0], "display");
            return n.detach(), i
        }
        function $(t) {
            var e = it,
                n = ue[t];
            return n || (n = P(t, e), "none" !== n && n || (le = (le || dt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (le[0].contentWindow || le[0].contentDocument).document, e.write(), e.close(), n = P(t, e), le.detach()), ue[t] = n), n
        }
        function M(t, e) {
            return {
                get: function() {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }
        function j(t) {
            if (t in ke) return t;
            for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = Ce.length; n--;) if (t = Ce[n] + e, t in ke) return t
        }
        function N(t, e) {
            for (var n, i, r, o = [], s = 0, a = t.length; a > s; s++) i = t[s], i.style && (o[s] = dt._data(i, "olddisplay"), n = i.style.display, e ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ot(i) && (o[s] = dt._data(i, "olddisplay", $(i.nodeName)))) : (r = Ot(i), (n && "none" !== n || !r) && dt._data(i, "olddisplay", r ? n : dt.css(i, "display"))));
            for (s = 0; a > s; s++) i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
            return t
        }
        function I(t, e, n) {
            var i = xe.exec(e);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
        }
        function F(t, e, n, i, r) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2)"margin" === n && (s += dt.css(t, n + Dt[o], !0, r)), i ? ("content" === n && (s -= dt.css(t, "padding" + Dt[o], !0, r)), "margin" !== n && (s -= dt.css(t, "border" + Dt[o] + "Width", !0, r))) : (s += dt.css(t, "padding" + Dt[o], !0, r), "padding" !== n && (s += dt.css(t, "border" + Dt[o] + "Width", !0, r)));
            return s
        }
        function q(e, n, i) {
            var r = !0,
                o = "width" === n ? e.offsetWidth : e.offsetHeight,
                s = pe(e),
                a = ht.boxSizing && "border-box" === dt.css(e, "boxSizing", !1, s);
            if (it.msFullscreenElement && t.top !== t && e.getClientRects().length && (o = Math.round(100 * e.getBoundingClientRect()[n])), 0 >= o || null == o) {
                if (o = me(e, n, s), (0 > o || null == o) && (o = e.style[n]), he.test(o)) return o;
                r = a && (ht.boxSizingReliable() || o === e.style[n]), o = parseFloat(o) || 0
            }
            return o + F(e, n, i || (a ? "border" : "content"), r, s) + "px"
        }
        function D(t, e, n, i, r) {
            return new D.prototype.init(t, e, n, i, r)
        }
        function O() {
            return t.setTimeout(function() {
                Te = void 0
            }), Te = dt.now()
        }
        function R(t, e) {
            var n, i = {
                    height: t
                },
                r = 0;
            for (e = e ? 1 : 0; 4 > r; r += 2 - e) n = Dt[r], i["margin" + n] = i["padding" + n] = t;
            return e && (i.opacity = i.width = t), i
        }
        function L(t, e, n) {
            for (var i, r = (H.tweeners[e] || []).concat(H.tweeners["*"]), o = 0, s = r.length; s > o; o++) if (i = r[o].call(n, e, t)) return i
        }
        function B(t, e, n) {
            var i, r, o, s, a, l, u, c, h = this,
                f = {},
                d = t.style,
                p = t.nodeType && Ot(t),
                m = dt._data(t, "fxshow");
            n.queue || (a = dt._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                a.unqueued || l()
            }), a.unqueued++, h.always(function() {
                h.always(function() {
                    a.unqueued--, dt.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], u = dt.css(t, "display"), c = "none" === u ? dt._data(t, "olddisplay") || $(t.nodeName) : u, "inline" === c && "none" === dt.css(t, "float") && (ht.inlineBlockNeedsLayout && "inline" !== $(t.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", ht.shrinkWrapBlocks() || h.always(function() {
                d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
            }));
            for (i in e) if (r = e[i], Se.exec(r)) {
                if (delete e[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[i]) continue;
                    p = !0
                }
                f[i] = m && m[i] || dt.style(t, i)
            } else u = void 0;
            if (dt.isEmptyObject(f))"inline" === ("none" === u ? $(t.nodeName) : u) && (d.display = u);
            else {
                m ? "hidden" in m && (p = m.hidden) : m = dt._data(t, "fxshow", {}), o && (m.hidden = !p), p ? dt(t).show() : h.done(function() {
                    dt(t).hide()
                }), h.done(function() {
                    var e;
                    dt._removeData(t, "fxshow");
                    for (e in f) dt.style(t, e, f[e])
                });
                for (i in f) s = L(p ? m[i] : 0, i, h), i in m || (m[i] = s.start, p && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
            }
        }
        function U(t, e) {
            var n, i, r, o, s;
            for (n in t) if (i = dt.camelCase(n), r = e[i], o = t[n], dt.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), s = dt.cssHooks[i], s && "expand" in s) {
                o = s.expand(o), delete t[i];
                for (n in o) n in t || (t[n] = o[n], e[n] = r)
            } else e[i] = r
        }
        function H(t, e, n) {
            var i, r, o = 0,
                s = H.prefilters.length,
                a = dt.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var e = Te || O(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, o = 1 - i, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(o);
                    return a.notifyWith(t, [u, o, n]), 1 > o && l ? n : (a.resolveWith(t, [u]), !1)
                },
                u = a.promise({
                    elem: t,
                    props: dt.extend({}, e),
                    opts: dt.extend(!0, {
                        specialEasing: {},
                        easing: dt.easing._default
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: Te || O(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var i = dt.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function(e) {
                        var n = 0,
                            i = e ? u.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; i > n; n++) u.tweens[n].run(1);
                        return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
                    }
                }),
                c = u.props;
            for (U(c, u.opts.specialEasing); s > o; o++) if (i = H.prefilters[o].call(u, t, c, u.opts)) return dt.isFunction(i.stop) && (dt._queueHooks(u.elem, u.opts.queue).stop = dt.proxy(i.stop, i)), i;
            return dt.map(c, L, u), dt.isFunction(u.opts.start) && u.opts.start.call(t, u), dt.fx.timer(dt.extend(l, {
                elem: t,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }
        function W(t) {
            return dt.attr(t, "class") || ""
        }
        function z(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, r = 0,
                    o = e.toLowerCase().match(Pt) || [];
                if (dt.isFunction(n)) for (; i = o[r++];)"+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }
        function V(t, e, n, i) {
            function r(a) {
                var l;
                return o[a] = !0, dt.each(t[a] || [], function(t, a) {
                    var u = a(e, n, i);
                    return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1)
                }), l
            }
            var o = {},
                s = t === Je;
            return r(e.dataTypes[0]) || !o["*"] && r("*")
        }
        function G(t, e) {
            var n, i, r = dt.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
            return n && dt.extend(!0, t, n), t
        }
        function X(t, e, n) {
            for (var i, r, o, s, a = t.contents, l = t.dataTypes;
                 "*" === l[0];) l.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
            if (r) for (s in a) if (a[s] && a[s].test(r)) {
                l.unshift(s);
                break
            }
            if (l[0] in n) o = l[0];
            else {
                for (s in n) {
                    if (!l[0] || t.converters[s + " " + l[0]]) {
                        o = s;
                        break
                    }
                    i || (i = s)
                }
                o = o || i
            }
            return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
        }
        function Q(t, e, n, i) {
            var r, o, s, a, l, u = {},
                c = t.dataTypes.slice();
            if (c[1]) for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
            for (o = c.shift(); o;) if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift()) if ("*" === o) o = l;
            else if ("*" !== l && l !== o) {
                if (s = u[l + " " + o] || u["* " + o], !s) for (r in u) if (a = r.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                    s === !0 ? s = u[r] : u[r] !== !0 && (o = a[0], c.unshift(a[1]));
                    break
                }
                if (s !== !0) if (s && t["throws"]) e = s(e);
                else try {
                        e = s(e)
                    } catch (h) {
                        return {
                            state: "parsererror",
                            error: s ? h : "No conversion from " + l + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }
        function Y(t) {
            return t.style && t.style.display || dt.css(t, "display")
        }
        function J(t) {
            for (; t && 1 === t.nodeType;) {
                if ("none" === Y(t) || "hidden" === t.type) return !0;
                t = t.parentNode
            }
            return !1
        }
        function K(t, e, n, i) {
            var r;
            if (dt.isArray(e)) dt.each(e, function(e, r) {
                n || nn.test(t) ? i(t, r) : K(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
            });
            else if (n || "object" !== dt.type(e)) i(t, e);
            else for (r in e) K(t + "[" + r + "]", e[r], n, i)
        }
        function Z() {
            try {
                return new t.XMLHttpRequest
            } catch (e) {}
        }
        function tt() {
            try {
                return new t.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }
        function et(t) {
            return dt.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
        }
        var nt = [],
            it = t.document,
            rt = nt.slice,
            ot = nt.concat,
            st = nt.push,
            at = nt.indexOf,
            lt = {},
            ut = lt.toString,
            ct = lt.hasOwnProperty,
            ht = {},
            ft = "1.12.0",
            dt = function(t, e) {
                return new dt.fn.init(t, e)
            },
            pt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            mt = /^-ms-/,
            gt = /-([\da-z])/gi,
            vt = function(t, e) {
                return e.toUpperCase()
            };
        dt.fn = dt.prototype = {
            jquery: ft,
            constructor: dt,
            selector: "",
            length: 0,
            toArray: function() {
                return rt.call(this)
            },
            get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : rt.call(this)
            },
            pushStack: function(t) {
                var e = dt.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t) {
                return dt.each(this, t)
            },
            map: function(t) {
                return this.pushStack(dt.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return this.pushStack(rt.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    n = +t + (0 > t ? e : 0);
                return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: st,
            sort: nt.sort,
            splice: nt.splice
        }, dt.extend = dt.fn.extend = function() {
            var t, e, n, i, r, o, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || dt.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++) if (null != (r = arguments[a])) for (i in r) t = s[i], n = r[i], s !== n && (u && n && (dt.isPlainObject(n) || (e = dt.isArray(n))) ? (e ? (e = !1, o = t && dt.isArray(t) ? t : []) : o = t && dt.isPlainObject(t) ? t : {}, s[i] = dt.extend(u, o, n)) : void 0 !== n && (s[i] = n));
            return s
        }, dt.extend({
            expando: "jQuery" + (ft + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === dt.type(t)
            },
            isArray: Array.isArray ||
            function(t) {
                return "array" === dt.type(t)
            },
            isWindow: function(t) {
                return null != t && t == t.window
            },
            isNumeric: function(t) {
                var e = t && t.toString();
                return !dt.isArray(t) && e - parseFloat(e) + 1 >= 0
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            isPlainObject: function(t) {
                var e;
                if (!t || "object" !== dt.type(t) || t.nodeType || dt.isWindow(t)) return !1;
                try {
                    if (t.constructor && !ct.call(t, "constructor") && !ct.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                if (!ht.ownFirst) for (e in t) return ct.call(t, e);
                for (e in t);
                return void 0 === e || ct.call(t, e)
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? lt[ut.call(t)] || "object" : typeof t
            },
            globalEval: function(e) {
                e && dt.trim(e) && (t.execScript ||
                function(e) {
                    t.eval.call(t, e)
                })(e)
            },
            camelCase: function(t) {
                return t.replace(mt, "ms-").replace(gt, vt)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e) {
                var i, r = 0;
                if (n(t)) for (i = t.length; i > r && e.call(t[r], r, t[r]) !== !1; r++);
                else for (r in t) if (e.call(t[r], r, t[r]) === !1) break;
                return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(pt, "")
            },
            makeArray: function(t, e) {
                var i = e || [];
                return null != t && (n(Object(t)) ? dt.merge(i, "string" == typeof t ? [t] : t) : st.call(i, t)), i
            },
            inArray: function(t, e, n) {
                var i;
                if (e) {
                    if (at) return at.call(e, t, n);
                    for (i = e.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++) if (n in e && e[n] === t) return n
                }
                return -1
            },
            merge: function(t, e) {
                for (var n = +e.length, i = 0, r = t.length; n > i;) t[r++] = e[i++];
                if (n !== n) for (; void 0 !== e[i];) t[r++] = e[i++];
                return t.length = r, t
            },
            grep: function(t, e, n) {
                for (var i, r = [], o = 0, s = t.length, a = !n; s > o; o++) i = !e(t[o], o), i !== a && r.push(t[o]);
                return r
            },
            map: function(t, e, i) {
                var r, o, s = 0,
                    a = [];
                if (n(t)) for (r = t.length; r > s; s++) o = e(t[s], s, i), null != o && a.push(o);
                else for (s in t) o = e(t[s], s, i), null != o && a.push(o);
                return ot.apply([], a)
            },
            guid: 1,
            proxy: function(t, e) {
                var n, i, r;
                return "string" == typeof e && (r = t[e], e = t, t = r), dt.isFunction(t) ? (n = rt.call(arguments, 2), i = function() {
                    return t.apply(e || this, n.concat(rt.call(arguments)))
                }, i.guid = t.guid = t.guid || dt.guid++, i) : void 0
            },
            now: function() {
                return +new Date
            },
            support: ht
        }), "function" == typeof Symbol && (dt.fn[Symbol.iterator] = nt[Symbol.iterator]), dt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            lt["[object " + e + "]"] = e.toLowerCase()
        });
        var yt =
            /*!
             * Sizzle CSS Selector Engine v2.2.1
             * http://sizzlejs.com/
             *
             * Copyright jQuery Foundation and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             *
             * Date: 2015-10-17
             */

            function(t) {
                function e(t, e, n, i) {
                    var r, o, s, a, l, u, h, d, p = e && e.ownerDocument,
                        m = e ? e.nodeType : 9;
                    if (n = n || [], "string" != typeof t || !t || 1 !== m && 9 !== m && 11 !== m) return n;
                    if (!i && ((e ? e.ownerDocument || e : L) !== j && M(e), e = e || j, I)) {
                        if (11 !== m && (u = vt.exec(t))) if (r = u[1]) {
                            if (9 === m) {
                                if (!(s = e.getElementById(r))) return n;
                                if (s.id === r) return n.push(s), n
                            } else if (p && (s = p.getElementById(r)) && O(e, s) && s.id === r) return n.push(s), n
                        } else {
                            if (u[2]) return K.apply(n, e.getElementsByTagName(t)), n;
                            if ((r = u[3]) && w.getElementsByClassName && e.getElementsByClassName) return K.apply(n, e.getElementsByClassName(r)), n
                        }
                        if (w.qsa && !z[t + " "] && (!F || !F.test(t))) {
                            if (1 !== m) p = e, d = t;
                            else if ("object" !== e.nodeName.toLowerCase()) {
                                for ((a = e.getAttribute("id")) ? a = a.replace(bt, "\\$&") : e.setAttribute("id", a = R), h = T(t), o = h.length, l = ft.test(a) ? "#" + a : "[id='" + a + "']"; o--;) h[o] = l + " " + f(h[o]);
                                d = h.join(","), p = yt.test(t) && c(e.parentNode) || e
                            }
                            if (d) try {
                                return K.apply(n, p.querySelectorAll(d)), n
                            } catch (g) {} finally {
                                a === R && e.removeAttribute("id")
                            }
                        }
                    }
                    return S(t.replace(at, "$1"), e, n, i)
                }
                function n() {
                    function t(n, i) {
                        return e.push(n + " ") > _.cacheLength && delete t[e.shift()], t[n + " "] = i
                    }
                    var e = [];
                    return t
                }
                function i(t) {
                    return t[R] = !0, t
                }
                function r(t) {
                    var e = j.createElement("div");
                    try {
                        return !!t(e)
                    } catch (n) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }
                function o(t, e) {
                    for (var n = t.split("|"), i = n.length; i--;) _.attrHandle[n[i]] = e
                }
                function s(t, e) {
                    var n = e && t,
                        i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || G) - (~t.sourceIndex || G);
                    if (i) return i;
                    if (n) for (; n = n.nextSibling;) if (n === e) return -1;
                    return t ? 1 : -1
                }
                function a(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return "input" === n && e.type === t
                    }
                }
                function l(t) {
                    return function(e) {
                        var n = e.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && e.type === t
                    }
                }
                function u(t) {
                    return i(function(e) {
                        return e = +e, i(function(n, i) {
                            for (var r, o = t([], n.length, e), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                        })
                    })
                }
                function c(t) {
                    return t && "undefined" != typeof t.getElementsByTagName && t
                }
                function h() {}
                function f(t) {
                    for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
                    return i
                }
                function d(t, e, n) {
                    var i = e.dir,
                        r = n && "parentNode" === i,
                        o = U++;
                    return e.first ?
                        function(e, n, o) {
                            for (; e = e[i];) if (1 === e.nodeType || r) return t(e, n, o)
                        } : function(e, n, s) {
                        var a, l, u, c = [B, o];
                        if (s) {
                            for (; e = e[i];) if ((1 === e.nodeType || r) && t(e, n, s)) return !0
                        } else for (; e = e[i];) if (1 === e.nodeType || r) {
                            if (u = e[R] || (e[R] = {}), l = u[e.uniqueID] || (u[e.uniqueID] = {}), (a = l[i]) && a[0] === B && a[1] === o) return c[2] = a[2];
                            if (l[i] = c, c[2] = t(e, n, s)) return !0
                        }
                    }
                }
                function p(t) {
                    return t.length > 1 ?
                        function(e, n, i) {
                            for (var r = t.length; r--;) if (!t[r](e, n, i)) return !1;
                            return !0
                        } : t[0]
                }
                function m(t, n, i) {
                    for (var r = 0, o = n.length; o > r; r++) e(t, n[r], i);
                    return i
                }
                function g(t, e, n, i, r) {
                    for (var o, s = [], a = 0, l = t.length, u = null != e; l > a; a++)(o = t[a]) && (!n || n(o, i, r)) && (s.push(o), u && e.push(a));
                    return s
                }
                function v(t, e, n, r, o, s) {
                    return r && !r[R] && (r = v(r)), o && !o[R] && (o = v(o, s)), i(function(i, s, a, l) {
                        var u, c, h, f = [],
                            d = [],
                            p = s.length,
                            v = i || m(e || "*", a.nodeType ? [a] : a, []),
                            y = !t || !i && e ? v : g(v, f, t, a, l),
                            b = n ? o || (i ? t : p || r) ? [] : s : y;
                        if (n && n(y, b, a, l), r) for (u = g(b, d), r(u, [], a, l), c = u.length; c--;)(h = u[c]) && (b[d[c]] = !(y[d[c]] = h));
                        if (i) {
                            if (o || t) {
                                if (o) {
                                    for (u = [], c = b.length; c--;)(h = b[c]) && u.push(y[c] = h);
                                    o(null, b = [], u, l)
                                }
                                for (c = b.length; c--;)(h = b[c]) && (u = o ? tt(i, h) : f[c]) > -1 && (i[u] = !(s[u] = h))
                            }
                        } else b = g(b === s ? b.splice(p, b.length) : b), o ? o(null, s, b, l) : K.apply(s, b)
                    })
                }
                function y(t) {
                    for (var e, n, i, r = t.length, o = _.relative[t[0].type], s = o || _.relative[" "], a = o ? 1 : 0, l = d(function(t) {
                        return t === e
                    }, s, !0), u = d(function(t) {
                        return tt(e, t) > -1
                    }, s, !0), c = [function(t, n, i) {
                        var r = !o && (i || n !== A) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i));
                        return e = null, r
                    }]; r > a; a++) if (n = _.relative[t[a].type]) c = [d(p(c), n)];
                    else {
                        if (n = _.filter[t[a].type].apply(null, t[a].matches), n[R]) {
                            for (i = ++a; r > i && !_.relative[t[i].type]; i++);
                            return v(a > 1 && p(c), a > 1 && f(t.slice(0, a - 1).concat({
                                    value: " " === t[a - 2].type ? "*" : ""
                                })).replace(at, "$1"), n, i > a && y(t.slice(a, i)), r > i && y(t = t.slice(i)), r > i && f(t))
                        }
                        c.push(n)
                    }
                    return p(c)
                }
                function b(t, n) {
                    var r = n.length > 0,
                        o = t.length > 0,
                        s = function(i, s, a, l, u) {
                            var c, h, f, d = 0,
                                p = "0",
                                m = i && [],
                                v = [],
                                y = A,
                                b = i || o && _.find.TAG("*", u),
                                x = B += null == y ? 1 : Math.random() || .1,
                                w = b.length;
                            for (u && (A = s === j || s || u); p !== w && null != (c = b[p]); p++) {
                                if (o && c) {
                                    for (h = 0, s || c.ownerDocument === j || (M(c), a = !I); f = t[h++];) if (f(c, s || j, a)) {
                                        l.push(c);
                                        break
                                    }
                                    u && (B = x)
                                }
                                r && ((c = !f && c) && d--, i && m.push(c))
                            }
                            if (d += p, r && p !== d) {
                                for (h = 0; f = n[h++];) f(m, v, s, a);
                                if (i) {
                                    if (d > 0) for (; p--;) m[p] || v[p] || (v[p] = Y.call(l));
                                    v = g(v)
                                }
                                K.apply(l, v), u && !i && v.length > 0 && d + n.length > 1 && e.uniqueSort(l)
                            }
                            return u && (B = x, A = y), m
                        };
                    return r ? i(s) : s
                }
                var x, w, _, C, k, T, E, S, A, P, $, M, j, N, I, F, q, D, O, R = "sizzle" + 1 * new Date,
                    L = t.document,
                    B = 0,
                    U = 0,
                    H = n(),
                    W = n(),
                    z = n(),
                    V = function(t, e) {
                        return t === e && ($ = !0), 0
                    },
                    G = 1 << 31,
                    X = {}.hasOwnProperty,
                    Q = [],
                    Y = Q.pop,
                    J = Q.push,
                    K = Q.push,
                    Z = Q.slice,
                    tt = function(t, e) {
                        for (var n = 0, i = t.length; i > n; n++) if (t[n] === e) return n;
                        return -1
                    },
                    et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    nt = "[\\x20\\t\\r\\n\\f]",
                    it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    rt = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
                    ot = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
                    st = new RegExp(nt + "+", "g"),
                    at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
                    lt = new RegExp("^" + nt + "*," + nt + "*"),
                    ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
                    ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
                    ht = new RegExp(ot),
                    ft = new RegExp("^" + it + "$"),
                    dt = {
                        ID: new RegExp("^#(" + it + ")"),
                        CLASS: new RegExp("^\\.(" + it + ")"),
                        TAG: new RegExp("^(" + it + "|[*])"),
                        ATTR: new RegExp("^" + rt),
                        PSEUDO: new RegExp("^" + ot),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + et + ")$", "i"),
                        needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
                    },
                    pt = /^(?:input|select|textarea|button)$/i,
                    mt = /^h\d$/i,
                    gt = /^[^{]+\{\s*\[native \w/,
                    vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    yt = /[+~]/,
                    bt = /'|\\/g,
                    xt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
                    wt = function(t, e, n) {
                        var i = "0x" + e - 65536;
                        return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                    },
                    _t = function() {
                        M()
                    };
                try {
                    K.apply(Q = Z.call(L.childNodes), L.childNodes), Q[L.childNodes.length].nodeType
                } catch (Ct) {
                    K = {
                        apply: Q.length ?
                            function(t, e) {
                                J.apply(t, Z.call(e))
                            } : function(t, e) {
                            for (var n = t.length, i = 0; t[n++] = e[i++];);
                            t.length = n - 1
                        }
                    }
                }
                w = e.support = {}, k = e.isXML = function(t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return e ? "HTML" !== e.nodeName : !1
                }, M = e.setDocument = function(t) {
                    var e, n, i = t ? t.ownerDocument || t : L;
                    return i !== j && 9 === i.nodeType && i.documentElement ? (j = i, N = j.documentElement, I = !k(j), (n = j.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", _t, !1) : n.attachEvent && n.attachEvent("onunload", _t)), w.attributes = r(function(t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), w.getElementsByTagName = r(function(t) {
                        return t.appendChild(j.createComment("")), !t.getElementsByTagName("*").length
                    }), w.getElementsByClassName = gt.test(j.getElementsByClassName), w.getById = r(function(t) {
                        return N.appendChild(t).id = R, !j.getElementsByName || !j.getElementsByName(R).length
                    }), w.getById ? (_.find.ID = function(t, e) {
                        if ("undefined" != typeof e.getElementById && I) {
                            var n = e.getElementById(t);
                            return n ? [n] : []
                        }
                    }, _.filter.ID = function(t) {
                        var e = t.replace(xt, wt);
                        return function(t) {
                            return t.getAttribute("id") === e
                        }
                    }) : (delete _.find.ID, _.filter.ID = function(t) {
                        var e = t.replace(xt, wt);
                        return function(t) {
                            var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                            return n && n.value === e
                        }
                    }), _.find.TAG = w.getElementsByTagName ?
                        function(t, e) {
                            return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
                        } : function(t, e) {
                        var n, i = [],
                            r = 0,
                            o = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                            return i
                        }
                        return o
                    }, _.find.CLASS = w.getElementsByClassName &&
                        function(t, e) {
                            return "undefined" != typeof e.getElementsByClassName && I ? e.getElementsByClassName(t) : void 0
                        }, q = [], F = [], (w.qsa = gt.test(j.querySelectorAll)) && (r(function(t) {
                        N.appendChild(t).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || F.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + R + "-]").length || F.push("~="), t.querySelectorAll(":checked").length || F.push(":checked"), t.querySelectorAll("a#" + R + "+*").length || F.push(".#.+[+~]")
                    }), r(function(t) {
                        var e = j.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && F.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), F.push(",.*:")
                    })), (w.matchesSelector = gt.test(D = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && r(function(t) {
                        w.disconnectedMatch = D.call(t, "div"), D.call(t, "[s!='']:x"), q.push("!=", ot)
                    }), F = F.length && new RegExp(F.join("|")), q = q.length && new RegExp(q.join("|")), e = gt.test(N.compareDocumentPosition), O = e || gt.test(N.contains) ?
                        function(t, e) {
                            var n = 9 === t.nodeType ? t.documentElement : t,
                                i = e && e.parentNode;
                            return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                        } : function(t, e) {
                        if (e) for (; e = e.parentNode;) if (e === t) return !0;
                        return !1
                    }, V = e ?
                        function(t, e) {
                            if (t === e) return $ = !0, 0;
                            var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                            return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === j || t.ownerDocument === L && O(L, t) ? -1 : e === j || e.ownerDocument === L && O(L, e) ? 1 : P ? tt(P, t) - tt(P, e) : 0 : 4 & n ? -1 : 1)
                        } : function(t, e) {
                        if (t === e) return $ = !0, 0;
                        var n, i = 0,
                            r = t.parentNode,
                            o = e.parentNode,
                            a = [t],
                            l = [e];
                        if (!r || !o) return t === j ? -1 : e === j ? 1 : r ? -1 : o ? 1 : P ? tt(P, t) - tt(P, e) : 0;
                        if (r === o) return s(t, e);
                        for (n = t; n = n.parentNode;) a.unshift(n);
                        for (n = e; n = n.parentNode;) l.unshift(n);
                        for (; a[i] === l[i];) i++;
                        return i ? s(a[i], l[i]) : a[i] === L ? -1 : l[i] === L ? 1 : 0
                    }, j) : j
                }, e.matches = function(t, n) {
                    return e(t, null, null, n)
                }, e.matchesSelector = function(t, n) {
                    if ((t.ownerDocument || t) !== j && M(t), n = n.replace(ct, "='$1']"), w.matchesSelector && I && !z[n + " "] && (!q || !q.test(n)) && (!F || !F.test(n))) try {
                        var i = D.call(t, n);
                        if (i || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                    } catch (r) {}
                    return e(n, j, null, [t]).length > 0
                }, e.contains = function(t, e) {
                    return (t.ownerDocument || t) !== j && M(t), O(t, e)
                }, e.attr = function(t, e) {
                    (t.ownerDocument || t) !== j && M(t);
                    var n = _.attrHandle[e.toLowerCase()],
                        i = n && X.call(_.attrHandle, e.toLowerCase()) ? n(t, e, !I) : void 0;
                    return void 0 !== i ? i : w.attributes || !I ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                }, e.error = function(t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, e.uniqueSort = function(t) {
                    var e, n = [],
                        i = 0,
                        r = 0;
                    if ($ = !w.detectDuplicates, P = !w.sortStable && t.slice(0), t.sort(V), $) {
                        for (; e = t[r++];) e === t[r] && (i = n.push(r));
                        for (; i--;) t.splice(n[i], 1)
                    }
                    return P = null, t
                }, C = e.getText = function(t) {
                    var e, n = "",
                        i = 0,
                        r = t.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) n += C(t)
                        } else if (3 === r || 4 === r) return t.nodeValue
                    } else for (; e = t[i++];) n += C(e);
                    return n
                }, _ = e.selectors = {
                    cacheLength: 50,
                    createPseudo: i,
                    match: dt,
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
                            return t[1] = t[1].replace(xt, wt), t[3] = (t[3] || t[4] || t[5] || "").replace(xt, wt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                        },
                        PSEUDO: function(t) {
                            var e, n = !t[6] && t[2];
                            return dt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ht.test(n) && (e = T(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            var e = t.replace(xt, wt).toLowerCase();
                            return "*" === t ?
                                function() {
                                    return !0
                                } : function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function(t) {
                            var e = H[t + " "];
                            return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && H(t, function(t) {
                                    return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                                })
                        },
                        ATTR: function(t, n, i) {
                            return function(r) {
                                var o = e.attr(r, t);
                                return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(st, " ") + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                            }
                        },
                        CHILD: function(t, e, n, i, r) {
                            var o = "nth" !== t.slice(0, 3),
                                s = "last" !== t.slice(-4),
                                a = "of-type" === e;
                            return 1 === i && 0 === r ?
                                function(t) {
                                    return !!t.parentNode
                                } : function(e, n, l) {
                                var u, c, h, f, d, p, m = o !== s ? "nextSibling" : "previousSibling",
                                    g = e.parentNode,
                                    v = a && e.nodeName.toLowerCase(),
                                    y = !l && !a,
                                    b = !1;
                                if (g) {
                                    if (o) {
                                        for (; m;) {
                                            for (f = e; f = f[m];) if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                            p = m = "only" === t && !p && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (p = [s ? g.firstChild : g.lastChild], s && y) {
                                        for (f = g, h = f[R] || (f[R] = {}), c = h[f.uniqueID] || (h[f.uniqueID] = {}), u = c[t] || [], d = u[0] === B && u[1], b = d && u[2], f = d && g.childNodes[d]; f = ++d && f && f[m] || (b = d = 0) || p.pop();) if (1 === f.nodeType && ++b && f === e) {
                                            c[t] = [B, d, b];
                                            break
                                        }
                                    } else if (y && (f = e, h = f[R] || (f[R] = {}), c = h[f.uniqueID] || (h[f.uniqueID] = {}), u = c[t] || [], d = u[0] === B && u[1], b = d), b === !1) for (;
                                        (f = ++d && f && f[m] || (b = d = 0) || p.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++b || (y && (h = f[R] || (f[R] = {}), c = h[f.uniqueID] || (h[f.uniqueID] = {}), c[t] = [B, b]), f !== e)););
                                    return b -= r, b === i || b % i === 0 && b / i >= 0
                                }
                            }
                        },
                        PSEUDO: function(t, n) {
                            var r, o = _.pseudos[t] || _.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                            return o[R] ? o(n) : o.length > 1 ? (r = [t, t, "", n], _.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                                for (var i, r = o(t, n), s = r.length; s--;) i = tt(t, r[s]), t[i] = !(e[i] = r[s])
                            }) : function(t) {
                                return o(t, 0, r)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: i(function(t) {
                            var e = [],
                                n = [],
                                r = E(t.replace(at, "$1"));
                            return r[R] ? i(function(t, e, n, i) {
                                for (var o, s = r(t, null, i, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                            }) : function(t, i, o) {
                                return e[0] = t, r(e, null, o, n), e[0] = null, !n.pop()
                            }
                        }),
                        has: i(function(t) {
                            return function(n) {
                                return e(t, n).length > 0
                            }
                        }),
                        contains: i(function(t) {
                            return t = t.replace(xt, wt), function(e) {
                                return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                            }
                        }),
                        lang: i(function(t) {
                            return ft.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xt, wt).toLowerCase(), function(e) {
                                var n;
                                do
                                    if (n = I ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                        }),
                        target: function(e) {
                            var n = t.location && t.location.hash;
                            return n && n.slice(1) === e.id
                        },
                        root: function(t) {
                            return t === N
                        },
                        focus: function(t) {
                            return t === j.activeElement && (!j.hasFocus || j.hasFocus()) && !! (t.type || t.href || ~t.tabIndex)
                        },
                        enabled: function(t) {
                            return t.disabled === !1
                        },
                        disabled: function(t) {
                            return t.disabled === !0
                        },
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !! t.checked || "option" === e && !! t.selected
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(t) {
                            return !_.pseudos.empty(t)
                        },
                        header: function(t) {
                            return mt.test(t.nodeName)
                        },
                        input: function(t) {
                            return pt.test(t.nodeName)
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function(t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        },
                        first: u(function() {
                            return [0]
                        }),
                        last: u(function(t, e) {
                            return [e - 1]
                        }),
                        eq: u(function(t, e, n) {
                            return [0 > n ? n + e : n]
                        }),
                        even: u(function(t, e) {
                            for (var n = 0; e > n; n += 2) t.push(n);
                            return t
                        }),
                        odd: u(function(t, e) {
                            for (var n = 1; e > n; n += 2) t.push(n);
                            return t
                        }),
                        lt: u(function(t, e, n) {
                            for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                            return t
                        }),
                        gt: u(function(t, e, n) {
                            for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                            return t
                        })
                    }
                }, _.pseudos.nth = _.pseudos.eq;
                for (x in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) _.pseudos[x] = a(x);
                for (x in {
                    submit: !0,
                    reset: !0
                }) _.pseudos[x] = l(x);
                return h.prototype = _.filters = _.pseudos, _.setFilters = new h, T = e.tokenize = function(t, n) {
                    var i, r, o, s, a, l, u, c = W[t + " "];
                    if (c) return n ? 0 : c.slice(0);
                    for (a = t, l = [], u = _.preFilter; a;) {
                        (!i || (r = lt.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = ut.exec(a)) && (i = r.shift(), o.push({
                            value: i,
                            type: r[0].replace(at, " ")
                        }), a = a.slice(i.length));
                        for (s in _.filter)!(r = dt[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(), o.push({
                            value: i,
                            type: s,
                            matches: r
                        }), a = a.slice(i.length));
                        if (!i) break
                    }
                    return n ? a.length : a ? e.error(t) : W(t, l).slice(0)
                }, E = e.compile = function(t, e) {
                    var n, i = [],
                        r = [],
                        o = z[t + " "];
                    if (!o) {
                        for (e || (e = T(t)), n = e.length; n--;) o = y(e[n]), o[R] ? i.push(o) : r.push(o);
                        o = z(t, b(r, i)), o.selector = t
                    }
                    return o
                }, S = e.select = function(t, e, n, i) {
                    var r, o, s, a, l, u = "function" == typeof t && t,
                        h = !i && T(t = u.selector || t);
                    if (n = n || [], 1 === h.length) {
                        if (o = h[0] = h[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === e.nodeType && I && _.relative[o[1].type]) {
                            if (e = (_.find.ID(s.matches[0].replace(xt, wt), e) || [])[0], !e) return n;
                            u && (e = e.parentNode), t = t.slice(o.shift().value.length)
                        }
                        for (r = dt.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !_.relative[a = s.type]);) if ((l = _.find[a]) && (i = l(s.matches[0].replace(xt, wt), yt.test(o[0].type) && c(e.parentNode) || e))) {
                            if (o.splice(r, 1), t = i.length && f(o), !t) return K.apply(n, i), n;
                            break
                        }
                    }
                    return (u || E(t, h))(i, e, !I, n, !e || yt.test(t) && c(e.parentNode) || e), n
                }, w.sortStable = R.split("").sort(V).join("") === R, w.detectDuplicates = !! $, M(), w.sortDetached = r(function(t) {
                    return 1 & t.compareDocumentPosition(j.createElement("div"))
                }), r(function(t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                }) || o("type|href|height|width", function(t, e, n) {
                    return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                }), w.attributes && r(function(t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                }) || o("value", function(t, e, n) {
                    return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
                }), r(function(t) {
                    return null == t.getAttribute("disabled")
                }) || o(et, function(t, e, n) {
                    var i;
                    return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                }), e
            }(t);
        dt.find = yt, dt.expr = yt.selectors, dt.expr[":"] = dt.expr.pseudos, dt.uniqueSort = dt.unique = yt.uniqueSort, dt.text = yt.getText, dt.isXMLDoc = yt.isXML, dt.contains = yt.contains;
        var bt = function(t, e, n) {
                for (var i = [], r = void 0 !== n;
                     (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
                    if (r && dt(t).is(n)) break;
                    i.push(t)
                }
                return i
            },
            xt = function(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            },
            wt = dt.expr.match.needsContext,
            _t = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            Ct = /^.[^:#\[\.,]*$/;
        dt.filter = function(t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? dt.find.matchesSelector(i, t) ? [i] : [] : dt.find.matches(t, dt.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, dt.fn.extend({
            find: function(t) {
                var e, n = [],
                    i = this,
                    r = i.length;
                if ("string" != typeof t) return this.pushStack(dt(t).filter(function() {
                    for (e = 0; r > e; e++) if (dt.contains(i[e], this)) return !0
                }));
                for (e = 0; r > e; e++) dt.find(t, i[e], n);
                return n = this.pushStack(r > 1 ? dt.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
            },
            filter: function(t) {
                return this.pushStack(i(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(i(this, t || [], !0))
            },
            is: function(t) {
                return !!i(this, "string" == typeof t && wt.test(t) ? dt(t) : t || [], !1).length
            }
        });
        var kt, Tt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            Et = dt.fn.init = function(t, e, n) {
                var i, r;
                if (!t) return this;
                if (n = n || kt, "string" == typeof t) {
                    if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : Tt.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                    if (i[1]) {
                        if (e = e instanceof dt ? e[0] : e, dt.merge(this, dt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : it, !0)), _t.test(i[1]) && dt.isPlainObject(e)) for (i in e) dt.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                        return this
                    }
                    if (r = it.getElementById(i[2]), r && r.parentNode) {
                        if (r.id !== i[2]) return kt.find(t);
                        this.length = 1, this[0] = r
                    }
                    return this.context = it, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : dt.isFunction(t) ? "undefined" != typeof n.ready ? n.ready(t) : t(dt) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), dt.makeArray(t, this))
            };
        Et.prototype = dt.fn, kt = dt(it);
        var St = /^(?:parents|prev(?:Until|All))/,
            At = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        dt.fn.extend({
            has: function(t) {
                var e, n = dt(t, this),
                    i = n.length;
                return this.filter(function() {
                    for (e = 0; i > e; e++) if (dt.contains(this, n[e])) return !0
                })
            },
            closest: function(t, e) {
                for (var n, i = 0, r = this.length, o = [], s = wt.test(t) || "string" != typeof t ? dt(t, e || this.context) : 0; r > i; i++) for (n = this[i]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && dt.find.matchesSelector(n, t))) {
                    o.push(n);
                    break
                }
                return this.pushStack(o.length > 1 ? dt.uniqueSort(o) : o)
            },
            index: function(t) {
                return t ? "string" == typeof t ? dt.inArray(this[0], dt(t)) : dt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(dt.uniqueSort(dt.merge(this.get(), dt(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), dt.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return bt(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return bt(t, "parentNode", n)
            },
            next: function(t) {
                return r(t, "nextSibling")
            },
            prev: function(t) {
                return r(t, "previousSibling")
            },
            nextAll: function(t) {
                return bt(t, "nextSibling")
            },
            prevAll: function(t) {
                return bt(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return bt(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return bt(t, "previousSibling", n)
            },
            siblings: function(t) {
                return xt((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return xt(t.firstChild)
            },
            contents: function(t) {
                return dt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : dt.merge([], t.childNodes)
            }
        }, function(t, e) {
            dt.fn[t] = function(n, i) {
                var r = dt.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = dt.filter(i, r)), this.length > 1 && (At[t] || (r = dt.uniqueSort(r)), St.test(t) && (r = r.reverse())), this.pushStack(r)
            }
        });
        var Pt = /\S+/g;
        dt.Callbacks = function(t) {
            t = "string" == typeof t ? o(t) : dt.extend({}, t);
            var e, n, i, r, s = [],
                a = [],
                l = -1,
                u = function() {
                    for (r = t.once, i = e = !0; a.length; l = -1) for (n = a.shift(); ++l < s.length;) s[l].apply(n[0], n[1]) === !1 && t.stopOnFalse && (l = s.length, n = !1);
                    t.memory || (n = !1), e = !1, r && (s = n ? [] : "")
                },
                c = {
                    add: function() {
                        return s && (n && !e && (l = s.length - 1, a.push(n)), function i(e) {
                            dt.each(e, function(e, n) {
                                dt.isFunction(n) ? t.unique && c.has(n) || s.push(n) : n && n.length && "string" !== dt.type(n) && i(n)
                            })
                        }(arguments), n && !e && u()), this
                    },
                    remove: function() {
                        return dt.each(arguments, function(t, e) {
                            for (var n;
                                 (n = dt.inArray(e, s, n)) > -1;) s.splice(n, 1), l >= n && l--
                        }), this
                    },
                    has: function(t) {
                        return t ? dt.inArray(t, s) > -1 : s.length > 0
                    },
                    empty: function() {
                        return s && (s = []), this
                    },
                    disable: function() {
                        return r = a = [], s = n = "", this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return r = !0, n || c.disable(), this
                    },
                    locked: function() {
                        return !!r
                    },
                    fireWith: function(t, n) {
                        return r || (n = n || [], n = [t, n.slice ? n.slice() : n], a.push(n), e || u()), this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return c
        }, dt.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", dt.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", dt.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", dt.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return dt.Deferred(function(n) {
                                dt.each(e, function(e, o) {
                                    var s = dt.isFunction(t[e]) && t[e];
                                    r[o[1]](function() {
                                        var t = s && s.apply(this, arguments);
                                        t && dt.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? dt.extend(t, i) : i
                        }
                    },
                    r = {};
                return i.pipe = i.then, dt.each(e, function(t, o) {
                    var s = o[2],
                        a = o[3];
                    i[o[1]] = s.add, a && s.add(function() {
                        n = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function() {
                        return r[o[0] + "With"](this === r ? i : this, arguments), this
                    }, r[o[0] + "With"] = s.fireWith
                }), i.promise(r), t && t.call(r, r), r
            },
            when: function(t) {
                var e, n, i, r = 0,
                    o = rt.call(arguments),
                    s = o.length,
                    a = 1 !== s || t && dt.isFunction(t.promise) ? s : 0,
                    l = 1 === a ? t : dt.Deferred(),
                    u = function(t, n, i) {
                        return function(r) {
                            n[t] = this, i[t] = arguments.length > 1 ? rt.call(arguments) : r, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                        }
                    };
                if (s > 1) for (e = new Array(s), n = new Array(s), i = new Array(s); s > r; r++) o[r] && dt.isFunction(o[r].promise) ? o[r].promise().progress(u(r, n, e)).done(u(r, i, o)).fail(l.reject) : --a;
                return a || l.resolveWith(i, o), l.promise()
            }
        });
        var $t;
        dt.fn.ready = function(t) {
            return dt.ready.promise().done(t), this
        }, dt.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? dt.readyWait++ : dt.ready(!0)
            },
            ready: function(t) {
                (t === !0 ? --dt.readyWait : dt.isReady) || (dt.isReady = !0, t !== !0 && --dt.readyWait > 0 || ($t.resolveWith(it, [dt]), dt.fn.triggerHandler && (dt(it).triggerHandler("ready"), dt(it).off("ready"))))
            }
        }), dt.ready.promise = function(e) {
            if (!$t) if ($t = dt.Deferred(), "complete" === it.readyState) t.setTimeout(dt.ready);
            else if (it.addEventListener) it.addEventListener("DOMContentLoaded", a), t.addEventListener("load", a);
            else {
                it.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
                var n = !1;
                try {
                    n = null == t.frameElement && it.documentElement
                } catch (i) {}
                n && n.doScroll && !
                    function r() {
                        if (!dt.isReady) {
                            try {
                                n.doScroll("left")
                            } catch (e) {
                                return t.setTimeout(r, 50)
                            }
                            s(), dt.ready()
                        }
                    }()
            }
            return $t.promise(e)
        }, dt.ready.promise();
        var Mt;
        for (Mt in dt(ht)) break;
        ht.ownFirst = "0" === Mt, ht.inlineBlockNeedsLayout = !1, dt(function() {
            var t, e, n, i;
            n = it.getElementsByTagName("body")[0], n && n.style && (e = it.createElement("div"), i = it.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ht.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
        }), function() {
            var t = it.createElement("div");
            ht.deleteExpando = !0;
            try {
                delete t.test
            } catch (e) {
                ht.deleteExpando = !1
            }
            t = null
        }();
        var jt = function(t) {
                var e = dt.noData[(t.nodeName + " ").toLowerCase()],
                    n = +t.nodeType || 1;
                return 1 !== n && 9 !== n ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
            },
            Nt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            It = /([A-Z])/g;
        dt.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(t) {
                return t = t.nodeType ? dt.cache[t[dt.expando]] : t[dt.expando], !! t && !u(t)
            },
            data: function(t, e, n) {
                return c(t, e, n)
            },
            removeData: function(t, e) {
                return h(t, e)
            },
            _data: function(t, e, n) {
                return c(t, e, n, !0)
            },
            _removeData: function(t, e) {
                return h(t, e, !0)
            }
        }), dt.fn.extend({
            data: function(t, e) {
                var n, i, r, o = this[0],
                    s = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (r = dt.data(o), 1 === o.nodeType && !dt._data(o, "parsedAttrs"))) {
                        for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = dt.camelCase(i.slice(5)), l(o, i, r[i])));
                        dt._data(o, "parsedAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function() {
                    dt.data(this, t)
                }) : arguments.length > 1 ? this.each(function() {
                    dt.data(this, t, e)
                }) : o ? l(o, t, dt.data(o, t)) : void 0
            },
            removeData: function(t) {
                return this.each(function() {
                    dt.removeData(this, t)
                })
            }
        }), dt.extend({
            queue: function(t, e, n) {
                var i;
                return t ? (e = (e || "fx") + "queue", i = dt._data(t, e), n && (!i || dt.isArray(n) ? i = dt._data(t, e, dt.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = dt.queue(t, e),
                    i = n.length,
                    r = n.shift(),
                    o = dt._queueHooks(t, e),
                    s = function() {
                        dt.dequeue(t, e)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return dt._data(t, n) || dt._data(t, n, {
                        empty: dt.Callbacks("once memory").add(function() {
                            dt._removeData(t, e + "queue"), dt._removeData(t, n)
                        })
                    })
            }
        }), dt.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? dt.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = dt.queue(this, t, e);
                    dt._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && dt.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    dt.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, i = 1,
                    r = dt.Deferred(),
                    o = this,
                    s = this.length,
                    a = function() {
                        --i || r.resolveWith(o, [o])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) n = dt._data(o[s], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
                return a(), r.promise(e)
            }
        }), function() {
            var t;
            ht.shrinkWrapBlocks = function() {
                if (null != t) return t;
                t = !1;
                var e, n, i;
                return n = it.getElementsByTagName("body")[0], n && n.style ? (e = it.createElement("div"), i = it.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(it.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
            }
        }();
        var Ft = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            qt = new RegExp("^(?:([+-])=|)(" + Ft + ")([a-z%]*)$", "i"),
            Dt = ["Top", "Right", "Bottom", "Left"],
            Ot = function(t, e) {
                return t = e || t, "none" === dt.css(t, "display") || !dt.contains(t.ownerDocument, t)
            },
            Rt = function(t, e, n, i, r, o, s) {
                var a = 0,
                    l = t.length,
                    u = null == n;
                if ("object" === dt.type(n)) {
                    r = !0;
                    for (a in n) Rt(t, e, a, n[a], !0, o, s)
                } else if (void 0 !== i && (r = !0, dt.isFunction(i) || (s = !0), u && (s ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) {
                        return u.call(dt(t), n)
                    })), e)) for (; l > a; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
                return r ? t : u ? e.call(t) : l ? e(t[0], n) : o
            },
            Lt = /^(?:checkbox|radio)$/i,
            Bt = /<([\w:-]+)/,
            Ut = /^$|\/(?:java|ecma)script/i,
            Ht = /^\s+/,
            Wt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
        !
            function() {
                var t = it.createElement("div"),
                    e = it.createDocumentFragment(),
                    n = it.createElement("input");
                t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ht.leadingWhitespace = 3 === t.firstChild.nodeType, ht.tbody = !t.getElementsByTagName("tbody").length, ht.htmlSerialize = !! t.getElementsByTagName("link").length, ht.html5Clone = "<:nav></:nav>" !== it.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, e.appendChild(n), ht.appendChecked = n.checked, t.innerHTML = "<textarea>x</textarea>", ht.noCloneChecked = !! t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), n = it.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ht.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ht.noCloneEvent = !! t.addEventListener, t[dt.expando] = 1, ht.attributes = !t.getAttribute(dt.expando)
            }();
        var zt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: ht.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        };
        zt.optgroup = zt.option, zt.tbody = zt.tfoot = zt.colgroup = zt.caption = zt.thead, zt.th = zt.td;
        var Vt = /<|&#?\w+;/,
            Gt = /<tbody/i;
        !
            function() {
                var e, n, i = it.createElement("div");
                for (e in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) n = "on" + e, (ht[e] = n in t) || (i.setAttribute(n, "t"), ht[e] = i.attributes[n].expando === !1);
                i = null
            }();
        var Xt = /^(?:input|select|textarea)$/i,
            Qt = /^key/,
            Yt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Jt = /^(?:focusinfocus|focusoutblur)$/,
            Kt = /^([^.]*)(?:\.(.+)|)/;
        dt.event = {
            global: {},
            add: function(t, e, n, i, r) {
                var o, s, a, l, u, c, h, f, d, p, m, g = dt._data(t);
                if (g) {
                    for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = dt.guid++), (s = g.events) || (s = g.events = {}), (c = g.handle) || (c = g.handle = function(t) {
                        return "undefined" == typeof dt || t && dt.event.triggered === t.type ? void 0 : dt.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = t), e = (e || "").match(Pt) || [""], a = e.length; a--;) o = Kt.exec(e[a]) || [], d = m = o[1], p = (o[2] || "").split(".").sort(), d && (u = dt.event.special[d] || {}, d = (r ? u.delegateType : u.bindType) || d, u = dt.event.special[d] || {}, h = dt.extend({
                        type: d,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && dt.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, l), (f = s[d]) || (f = s[d] = [], f.delegateCount = 0, u.setup && u.setup.call(t, i, p, c) !== !1 || (t.addEventListener ? t.addEventListener(d, c, !1) : t.attachEvent && t.attachEvent("on" + d, c))), u.add && (u.add.call(t, h), h.handler.guid || (h.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, h) : f.push(h), dt.event.global[d] = !0);
                    t = null
                }
            },
            remove: function(t, e, n, i, r) {
                var o, s, a, l, u, c, h, f, d, p, m, g = dt.hasData(t) && dt._data(t);
                if (g && (c = g.events)) {
                    for (e = (e || "").match(Pt) || [""], u = e.length; u--;) if (a = Kt.exec(e[u]) || [], d = m = a[1], p = (a[2] || "").split(".").sort(), d) {
                        for (h = dt.event.special[d] || {}, d = (i ? h.delegateType : h.bindType) || d, f = c[d] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) s = f[o], !r && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (f.splice(o, 1), s.selector && f.delegateCount--, h.remove && h.remove.call(t, s));
                        l && !f.length && (h.teardown && h.teardown.call(t, p, g.handle) !== !1 || dt.removeEvent(t, d, g.handle), delete c[d])
                    } else for (d in c) dt.event.remove(t, d + e[u], n, i, !0);
                    dt.isEmptyObject(c) && (delete g.handle, dt._removeData(t, "events"))
                }
            },
            trigger: function(e, n, i, r) {
                var o, s, a, l, u, c, h, f = [i || it],
                    d = ct.call(e, "type") ? e.type : e,
                    p = ct.call(e, "namespace") ? e.namespace.split(".") : [];
                if (a = c = i = i || it, 3 !== i.nodeType && 8 !== i.nodeType && !Jt.test(d + dt.event.triggered) && (d.indexOf(".") > -1 && (p = d.split("."), d = p.shift(), p.sort()), s = d.indexOf(":") < 0 && "on" + d, e = e[dt.expando] ? e : new dt.Event(d, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : dt.makeArray(n, [e]), u = dt.event.special[d] || {}, r || !u.trigger || u.trigger.apply(i, n) !== !1)) {
                    if (!r && !u.noBubble && !dt.isWindow(i)) {
                        for (l = u.delegateType || d, Jt.test(l + d) || (a = a.parentNode); a; a = a.parentNode) f.push(a), c = a;
                        c === (i.ownerDocument || it) && f.push(c.defaultView || c.parentWindow || t)
                    }
                    for (h = 0;
                         (a = f[h++]) && !e.isPropagationStopped();) e.type = h > 1 ? l : u.bindType || d, o = (dt._data(a, "events") || {})[e.type] && dt._data(a, "handle"), o && o.apply(a, n), o = s && a[s], o && o.apply && jt(a) && (e.result = o.apply(a, n), e.result === !1 && e.preventDefault());
                    if (e.type = d, !r && !e.isDefaultPrevented() && (!u._default || u._default.apply(f.pop(), n) === !1) && jt(i) && s && i[d] && !dt.isWindow(i)) {
                        c = i[s], c && (i[s] = null), dt.event.triggered = d;
                        try {
                            i[d]()
                        } catch (m) {}
                        dt.event.triggered = void 0, c && (i[s] = c)
                    }
                    return e.result
                }
            },
            dispatch: function(t) {
                t = dt.event.fix(t);
                var e, n, i, r, o, s = [],
                    a = rt.call(arguments),
                    l = (dt._data(this, "events") || {})[t.type] || [],
                    u = dt.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
                    for (s = dt.event.handlers.call(this, t, l), e = 0;
                         (r = s[e++]) && !t.isPropagationStopped();) for (t.currentTarget = r.elem, n = 0;
                                                                          (o = r.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.rnamespace || t.rnamespace.test(o.namespace)) && (t.handleObj = o, t.data = o.data, i = ((dt.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var n, i, r, o, s = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                    for (i = [], n = 0; a > n; n++) o = e[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? dt(r, this).index(l) > -1 : dt.find(r, this, null, [l]).length), i[r] && i.push(o);
                    i.length && s.push({
                        elem: l,
                        handlers: i
                    })
                }
                return a < e.length && s.push({
                    elem: this,
                    handlers: e.slice(a)
                }), s
            },
            fix: function(t) {
                if (t[dt.expando]) return t;
                var e, n, i, r = t.type,
                    o = t,
                    s = this.fixHooks[r];
                for (s || (this.fixHooks[r] = s = Yt.test(r) ? this.mouseHooks : Qt.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new dt.Event(o), e = i.length; e--;) n = i[e], t[n] = o[n];
                return t.target || (t.target = o.srcElement || it), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !! t.metaKey, s.filter ? s.filter(t, o) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var n, i, r, o = e.button,
                        s = e.fromElement;
                    return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || it, r = i.documentElement, n = i.body, t.pageX = e.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== x() && this.focus) try {
                            return this.focus(), !1
                        } catch (t) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === x() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return dt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(t) {
                        return dt.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function(t, e, n) {
                var i = dt.extend(new dt.Event, n, {
                    type: t,
                    isSimulated: !0
                });
                dt.event.trigger(i, null, e), i.isDefaultPrevented() && n.preventDefault()
            }
        }, dt.removeEvent = it.removeEventListener ?
            function(t, e, n) {
                t.removeEventListener && t.removeEventListener(e, n)
            } : function(t, e, n) {
            var i = "on" + e;
            t.detachEvent && ("undefined" == typeof t[i] && (t[i] = null), t.detachEvent(i, n))
        }, dt.Event = function(t, e) {
            return this instanceof dt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? y : b) : this.type = t, e && dt.extend(this, e), this.timeStamp = t && t.timeStamp || dt.now(), void(this[dt.expando] = !0)) : new dt.Event(t, e)
        }, dt.Event.prototype = {
            constructor: dt.Event,
            isDefaultPrevented: b,
            isPropagationStopped: b,
            isImmediatePropagationStopped: b,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = y, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = y, t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = y, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, dt.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            dt.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = this,
                        r = t.relatedTarget,
                        o = t.handleObj;
                    return (!r || r !== i && !dt.contains(i, r)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), ht.submit || (dt.event.special.submit = {
            setup: function() {
                return dt.nodeName(this, "form") ? !1 : void dt.event.add(this, "click._submit keypress._submit", function(t) {
                    var e = t.target,
                        n = dt.nodeName(e, "input") || dt.nodeName(e, "button") ? dt.prop(e, "form") : void 0;
                    n && !dt._data(n, "submit") && (dt.event.add(n, "submit._submit", function(t) {
                        t._submitBubble = !0
                    }), dt._data(n, "submit", !0))
                })
            },
            postDispatch: function(t) {
                t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && dt.event.simulate("submit", this.parentNode, t))
            },
            teardown: function() {
                return dt.nodeName(this, "form") ? !1 : void dt.event.remove(this, "._submit")
            }
        }), ht.change || (dt.event.special.change = {
            setup: function() {
                return Xt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (dt.event.add(this, "propertychange._change", function(t) {
                    "checked" === t.originalEvent.propertyName && (this._justChanged = !0)
                }), dt.event.add(this, "click._change", function(t) {
                    this._justChanged && !t.isTrigger && (this._justChanged = !1), dt.event.simulate("change", this, t)
                })), !1) : void dt.event.add(this, "beforeactivate._change", function(t) {
                    var e = t.target;
                    Xt.test(e.nodeName) && !dt._data(e, "change") && (dt.event.add(e, "change._change", function(t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || dt.event.simulate("change", this.parentNode, t)
                    }), dt._data(e, "change", !0))
                })
            },
            handle: function(t) {
                var e = t.target;
                return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return dt.event.remove(this, "._change"), !Xt.test(this.nodeName)
            }
        }), ht.focusin || dt.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = function(t) {
                dt.event.simulate(e, t.target, dt.event.fix(t))
            };
            dt.event.special[e] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        r = dt._data(i, e);
                    r || i.addEventListener(t, n, !0), dt._data(i, e, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        r = dt._data(i, e) - 1;
                    r ? dt._data(i, e, r) : (i.removeEventListener(t, n, !0), dt._removeData(i, e))
                }
            }
        }), dt.fn.extend({
            on: function(t, e, n, i) {
                return w(this, t, e, n, i)
            },
            one: function(t, e, n, i) {
                return w(this, t, e, n, i, 1)
            },
            off: function(t, e, n) {
                var i, r;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, dt(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (r in t) this.off(r, e, t[r]);
                    return this
                }
                return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = b), this.each(function() {
                    dt.event.remove(this, t, n, e)
                })
            },
            trigger: function(t, e) {
                return this.each(function() {
                    dt.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                return n ? dt.event.trigger(t, e, n, !0) : void 0
            }
        });
        var Zt = / jQuery\d+="(?:null|\d+)"/g,
            te = new RegExp("<(?:" + Wt + ")[\\s/>]", "i"),
            ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            ne = /<script|<style|<link/i,
            ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
            re = /^true\/(.*)/,
            oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            se = d(it),
            ae = se.appendChild(it.createElement("div"));
        dt.extend({
            htmlPrefilter: function(t) {
                return t.replace(ee, "<$1></$2>")
            },
            clone: function(t, e, n) {
                var i, r, o, s, a, l = dt.contains(t.ownerDocument, t);
                if (ht.html5Clone || dt.isXMLDoc(t) || !te.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (ae.innerHTML = t.outerHTML, ae.removeChild(o = ae.firstChild)), !(ht.noCloneEvent && ht.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || dt.isXMLDoc(t))) for (i = p(o), a = p(t), s = 0; null != (r = a[s]); ++s) i[s] && E(r, i[s]);
                if (e) if (n) for (a = a || p(t), i = i || p(o), s = 0; null != (r = a[s]); s++) T(r, i[s]);
                else T(t, o);
                return i = p(o, "script"), i.length > 0 && m(i, !l && p(t, "script")), i = a = r = null, o
            },
            cleanData: function(t, e) {
                for (var n, i, r, o, s = 0, a = dt.expando, l = dt.cache, u = ht.attributes, c = dt.event.special; null != (n = t[s]); s++) if ((e || jt(n)) && (r = n[a], o = r && l[r])) {
                    if (o.events) for (i in o.events) c[i] ? dt.event.remove(n, i) : dt.removeEvent(n, i, o.handle);
                    l[r] && (delete l[r], u || "undefined" == typeof n.removeAttribute ? n[a] = void 0 : n.removeAttribute(a), nt.push(r))
                }
            }
        }), dt.fn.extend({
            domManip: S,
            detach: function(t) {
                return A(this, t, !0)
            },
            remove: function(t) {
                return A(this, t)
            },
            text: function(t) {
                return Rt(this, function(t) {
                    return void 0 === t ? dt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || it).createTextNode(t))
                }, null, t, arguments.length)
            },
            append: function() {
                return S(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = _(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return S(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = _(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return S(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return S(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && dt.cleanData(p(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                    t.options && dt.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            },
            clone: function(t, e) {
                return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                    return dt.clone(this, t, e)
                })
            },
            html: function(t) {
                return Rt(this, function(t) {
                    var e = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Zt, "") : void 0;
                    if ("string" == typeof t && !ne.test(t) && (ht.htmlSerialize || !te.test(t)) && (ht.leadingWhitespace || !Ht.test(t)) && !zt[(Bt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = dt.htmlPrefilter(t);
                        try {
                            for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (dt.cleanData(p(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (r) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return S(this, arguments, function(e) {
                    var n = this.parentNode;
                    dt.inArray(this, t) < 0 && (dt.cleanData(p(this)), n && n.replaceChild(e, this))
                }, t)
            }
        }), dt.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            dt.fn[t] = function(t) {
                for (var n, i = 0, r = [], o = dt(t), s = o.length - 1; s >= i; i++) n = i === s ? this : this.clone(!0), dt(o[i])[e](n), st.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var le, ue = {
                HTML: "block",
                BODY: "block"
            },
            ce = /^margin/,
            he = new RegExp("^(" + Ft + ")(?!px)[a-z%]+$", "i"),
            fe = function(t, e, n, i) {
                var r, o, s = {};
                for (o in e) s[o] = t.style[o], t.style[o] = e[o];
                r = n.apply(t, i || []);
                for (o in e) t.style[o] = s[o];
                return r
            },
            de = it.documentElement;
        !
            function() {
                function e() {
                    var e, c, h = it.documentElement;
                    h.appendChild(l), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = r = a = !1, i = s = !0, t.getComputedStyle && (c = t.getComputedStyle(u), n = "1%" !== (c || {}).top, a = "2px" === (c || {}).marginLeft, r = "4px" === (c || {
                            width: "4px"
                        }).width, u.style.marginRight = "50%", i = "4px" === (c || {
                            marginRight: "4px"
                        }).marginRight, e = u.appendChild(it.createElement("div")), e.style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", u.style.width = "1px", s = !parseFloat((t.getComputedStyle(e) || {}).marginRight), u.removeChild(e)), u.style.display = "none", o = 0 === u.getClientRects().length, o && (u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = u.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", o = 0 === e[0].offsetHeight, o && (e[0].style.display = "", e[1].style.display = "none", o = 0 === e[0].offsetHeight)), h.removeChild(l)
                }
                var n, i, r, o, s, a, l = it.createElement("div"),
                    u = it.createElement("div");
                u.style && (u.style.cssText = "float:left;opacity:.5", ht.opacity = "0.5" === u.style.opacity, ht.cssFloat = !! u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", ht.clearCloneStyle = "content-box" === u.style.backgroundClip, l = it.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", l.appendChild(u), ht.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, dt.extend(ht, {
                    reliableHiddenOffsets: function() {
                        return null == n && e(), o
                    },
                    boxSizingReliable: function() {
                        return null == n && e(), r
                    },
                    pixelMarginRight: function() {
                        return null == n && e(), i
                    },
                    pixelPosition: function() {
                        return null == n && e(), n
                    },
                    reliableMarginRight: function() {
                        return null == n && e(), s
                    },
                    reliableMarginLeft: function() {
                        return null == n && e(), a
                    }
                }))
            }();
        var pe, me, ge = /^(top|right|bottom|left)$/;
        t.getComputedStyle ? (pe = function(e) {
            var n = e.ownerDocument.defaultView;
            return n.opener || (n = t), n.getComputedStyle(e)
        }, me = function(t, e, n) {
            var i, r, o, s, a = t.style;
            return n = n || pe(t), s = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== s || dt.contains(t.ownerDocument, t) || (s = dt.style(t, e)), !ht.pixelMarginRight() && he.test(s) && ce.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 === s ? s : s + ""
        }) : de.currentStyle && (pe = function(t) {
            return t.currentStyle
        }, me = function(t, e, n) {
            var i, r, o, s, a = t.style;
            return n = n || pe(t), s = n ? n[e] : void 0, null == s && a && a[e] && (s = a[e]), he.test(s) && !ge.test(e) && (i = a.left, r = t.runtimeStyle, o = r && r.left, o && (r.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : s, s = a.pixelLeft + "px", a.left = i, o && (r.left = o)), void 0 === s ? s : s + "" || "auto"
        });
        var ve = /alpha\([^)]*\)/i,
            ye = /opacity\s*=\s*([^)]*)/i,
            be = /^(none|table(?!-c[ea]).+)/,
            xe = new RegExp("^(" + Ft + ")(.*)$", "i"),
            we = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            _e = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Ce = ["Webkit", "O", "Moz", "ms"],
            ke = it.createElement("div").style;
        dt.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = me(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
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
                "float": ht.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, o, s, a = dt.camelCase(e),
                        l = t.style;
                    if (e = dt.cssProps[a] || (dt.cssProps[a] = j(a) || a), s = dt.cssHooks[e] || dt.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : l[e];
                    if (o = typeof n, "string" === o && (r = qt.exec(n)) && r[1] && (n = f(t, e, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (dt.cssNumber[a] ? "" : "px")), ht.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(t, n, i))))) try {
                        l[e] = n
                    } catch (u) {}
                }
            },
            css: function(t, e, n, i) {
                var r, o, s, a = dt.camelCase(e);
                return e = dt.cssProps[a] || (dt.cssProps[a] = j(a) || a), s = dt.cssHooks[e] || dt.cssHooks[a], s && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = me(t, e, i)), "normal" === o && e in _e && (o = _e[e]), "" === n || n ? (r = parseFloat(o), n === !0 || isFinite(r) ? r || 0 : o) : o
            }
        }), dt.each(["height", "width"], function(t, e) {
            dt.cssHooks[e] = {
                get: function(t, n, i) {
                    return n ? be.test(dt.css(t, "display")) && 0 === t.offsetWidth ? fe(t, we, function() {
                        return q(t, e, i)
                    }) : q(t, e, i) : void 0
                },
                set: function(t, n, i) {
                    var r = i && pe(t);
                    return I(t, n, i ? F(t, e, i, ht.boxSizing && "border-box" === dt.css(t, "boxSizing", !1, r), r) : 0)
                }
            }
        }), ht.opacity || (dt.cssHooks.opacity = {
            get: function(t, e) {
                return ye.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            },
            set: function(t, e) {
                var n = t.style,
                    i = t.currentStyle,
                    r = dt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                    o = i && i.filter || n.filter || "";
                n.zoom = 1, (e >= 1 || "" === e) && "" === dt.trim(o.replace(ve, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = ve.test(o) ? o.replace(ve, r) : o + " " + r)
            }
        }), dt.cssHooks.marginRight = M(ht.reliableMarginRight, function(t, e) {
            return e ? fe(t, {
                display: "inline-block"
            }, me, [t, "marginRight"]) : void 0
        }), dt.cssHooks.marginLeft = M(ht.reliableMarginLeft, function(t, e) {
            return e ? (parseFloat(me(t, "marginLeft")) || (dt.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - fe(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            }) : 0)) + "px" : void 0
        }), dt.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            dt.cssHooks[t + e] = {
                expand: function(n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[t + Dt[i] + e] = o[i] || o[i - 2] || o[0];
                    return r
                }
            }, ce.test(t) || (dt.cssHooks[t + e].set = I)
        }), dt.fn.extend({
            css: function(t, e) {
                return Rt(this, function(t, e, n) {
                    var i, r, o = {},
                        s = 0;
                    if (dt.isArray(e)) {
                        for (i = pe(t), r = e.length; r > s; s++) o[e[s]] = dt.css(t, e[s], !1, i);
                        return o
                    }
                    return void 0 !== n ? dt.style(t, e, n) : dt.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return N(this, !0)
            },
            hide: function() {
                return N(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    Ot(this) ? dt(this).show() : dt(this).hide()
                })
            }
        }), dt.Tween = D, D.prototype = {
            constructor: D,
            init: function(t, e, n, i, r, o) {
                this.elem = t, this.prop = n, this.easing = r || dt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (dt.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = D.propHooks[this.prop];
                return t && t.get ? t.get(this) : D.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = D.propHooks[this.prop];
                return this.options.duration ? this.pos = e = dt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : D.propHooks._default.set(this), this
            }
        }, D.prototype.init.prototype = D.prototype, D.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = dt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
                },
                set: function(t) {
                    dt.fx.step[t.prop] ? dt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[dt.cssProps[t.prop]] && !dt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : dt.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, D.propHooks.scrollTop = D.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, dt.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, dt.fx = D.prototype.init, dt.fx.step = {};
        var Te, Ee, Se = /^(?:toggle|show|hide)$/,
            Ae = /queueHooks$/;
        dt.Animation = dt.extend(H, {
            tweeners: {
                "*": [function(t, e) {
                    var n = this.createTween(t, e);
                    return f(n.elem, t, qt.exec(e), n), n
                }]
            },
            tweener: function(t, e) {
                dt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Pt);
                for (var n, i = 0, r = t.length; r > i; i++) n = t[i], H.tweeners[n] = H.tweeners[n] || [], H.tweeners[n].unshift(e)
            },
            prefilters: [B],
            prefilter: function(t, e) {
                e ? H.prefilters.unshift(t) : H.prefilters.push(t)
            }
        }), dt.speed = function(t, e, n) {
            var i = t && "object" == typeof t ? dt.extend({}, t) : {
                complete: n || !n && e || dt.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !dt.isFunction(e) && e
            };
            return i.duration = dt.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in dt.fx.speeds ? dt.fx.speeds[i.duration] : dt.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                dt.isFunction(i.old) && i.old.call(this), i.queue && dt.dequeue(this, i.queue)
            }, i
        }, dt.fn.extend({
            fadeTo: function(t, e, n, i) {
                return this.filter(Ot).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function(t, e, n, i) {
                var r = dt.isEmptyObject(t),
                    o = dt.speed(e, n, i),
                    s = function() {
                        var e = H(this, dt.extend({}, t), o);
                        (r || dt._data(this, "finish")) && e.stop(!0)
                    };
                return s.finish = s, r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(t, e, n) {
                var i = function(t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        r = null != t && t + "queueHooks",
                        o = dt.timers,
                        s = dt._data(this);
                    if (r) s[r] && s[r].stop && i(s[r]);
                    else for (r in s) s[r] && s[r].stop && Ae.test(r) && i(s[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                    (e || !n) && dt.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, n = dt._data(this),
                        i = n[t + "queue"],
                        r = n[t + "queueHooks"],
                        o = dt.timers,
                        s = i ? i.length : 0;
                    for (n.finish = !0, dt.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), dt.each(["toggle", "show", "hide"], function(t, e) {
            var n = dt.fn[e];
            dt.fn[e] = function(t, i, r) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(R(e, !0), t, i, r)
            }
        }), dt.each({
            slideDown: R("show"),
            slideUp: R("hide"),
            slideToggle: R("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            dt.fn[t] = function(t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), dt.timers = [], dt.fx.tick = function() {
            var t, e = dt.timers,
                n = 0;
            for (Te = dt.now(); n < e.length; n++) t = e[n], t() || e[n] !== t || e.splice(n--, 1);
            e.length || dt.fx.stop(), Te = void 0
        }, dt.fx.timer = function(t) {
            dt.timers.push(t), t() ? dt.fx.start() : dt.timers.pop()
        }, dt.fx.interval = 13, dt.fx.start = function() {
            Ee || (Ee = t.setInterval(dt.fx.tick, dt.fx.interval))
        }, dt.fx.stop = function() {
            t.clearInterval(Ee), Ee = null
        }, dt.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, dt.fn.delay = function(e, n) {
            return e = dt.fx ? dt.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function(n, i) {
                var r = t.setTimeout(n, e);
                i.stop = function() {
                    t.clearTimeout(r)
                }
            })
        }, function() {
            var t, e = it.createElement("input"),
                n = it.createElement("div"),
                i = it.createElement("select"),
                r = i.appendChild(it.createElement("option"));
            n = it.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = n.getElementsByTagName("a")[0], e.setAttribute("type", "checkbox"), n.appendChild(e), t = n.getElementsByTagName("a")[0], t.style.cssText = "top:1px", ht.getSetAttribute = "t" !== n.className, ht.style = /top/.test(t.getAttribute("style")), ht.hrefNormalized = "/a" === t.getAttribute("href"), ht.checkOn = !! e.value, ht.optSelected = r.selected, ht.enctype = !! it.createElement("form").enctype, i.disabled = !0, ht.optDisabled = !r.disabled, e = it.createElement("input"), e.setAttribute("value", ""), ht.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), ht.radioValue = "t" === e.value
        }();
        var Pe = /\r/g;
        dt.fn.extend({
            val: function(t) {
                var e, n, i, r = this[0]; {
                    if (arguments.length) return i = dt.isFunction(t), this.each(function(n) {
                        var r;
                        1 === this.nodeType && (r = i ? t.call(this, n, dt(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : dt.isArray(r) && (r = dt.map(r, function(t) {
                            return null == t ? "" : t + ""
                        })), e = dt.valHooks[this.type] || dt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                    });
                    if (r) return e = dt.valHooks[r.type] || dt.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(Pe, "") : null == n ? "" : n)
                }
            }
        }), dt.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = dt.find.attr(t, "value");
                        return null != e ? e : dt.trim(dt.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, l = 0 > r ? a : o ? r : 0; a > l; l++) if (n = i[l], (n.selected || l === r) && (ht.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !dt.nodeName(n.parentNode, "optgroup"))) {
                            if (e = dt(n).val(), o) return e;
                            s.push(e)
                        }
                        return s
                    },
                    set: function(t, e) {
                        for (var n, i, r = t.options, o = dt.makeArray(e), s = r.length; s--;) if (i = r[s], dt.inArray(dt.valHooks.option.get(i), o) >= 0) try {
                            i.selected = n = !0
                        } catch (a) {
                            i.scrollHeight
                        } else i.selected = !1;
                        return n || (t.selectedIndex = -1), r
                    }
                }
            }
        }), dt.each(["radio", "checkbox"], function() {
            dt.valHooks[this] = {
                set: function(t, e) {
                    return dt.isArray(e) ? t.checked = dt.inArray(dt(t).val(), e) > -1 : void 0
                }
            }, ht.checkOn || (dt.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var $e, Me, je = dt.expr.attrHandle,
            Ne = /^(?:checked|selected)$/i,
            Ie = ht.getSetAttribute,
            Fe = ht.input;
        dt.fn.extend({
            attr: function(t, e) {
                return Rt(this, dt.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    dt.removeAttr(this, t)
                })
            }
        }), dt.extend({
            attr: function(t, e, n) {
                var i, r, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof t.getAttribute ? dt.prop(t, e, n) : (1 === o && dt.isXMLDoc(t) || (e = e.toLowerCase(), r = dt.attrHooks[e] || (dt.expr.match.bool.test(e) ? Me : $e)), void 0 !== n ? null === n ? void dt.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = dt.find.attr(t, e), null == i ? void 0 : i))
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!ht.radioValue && "radio" === e && dt.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var n, i, r = 0,
                    o = e && e.match(Pt);
                if (o && 1 === t.nodeType) for (; n = o[r++];) i = dt.propFix[n] || n, dt.expr.match.bool.test(n) ? Fe && Ie || !Ne.test(n) ? t[i] = !1 : t[dt.camelCase("default-" + n)] = t[i] = !1 : dt.attr(t, n, ""), t.removeAttribute(Ie ? n : i)
            }
        }), Me = {
            set: function(t, e, n) {
                return e === !1 ? dt.removeAttr(t, n) : Fe && Ie || !Ne.test(n) ? t.setAttribute(!Ie && dt.propFix[n] || n, n) : t[dt.camelCase("default-" + n)] = t[n] = !0, n
            }
        }, dt.each(dt.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = je[e] || dt.find.attr;
            Fe && Ie || !Ne.test(e) ? je[e] = function(t, e, i) {
                var r, o;
                return i || (o = je[e], je[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, je[e] = o), r
            } : je[e] = function(t, e, n) {
                return n ? void 0 : t[dt.camelCase("default-" + e)] ? e.toLowerCase() : null
            }
        }), Fe && Ie || (dt.attrHooks.value = {
            set: function(t, e, n) {
                return dt.nodeName(t, "input") ? void(t.defaultValue = e) : $e && $e.set(t, e, n)
            }
        }), Ie || ($e = {
            set: function(t, e, n) {
                var i = t.getAttributeNode(n);
                return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
            }
        }, je.id = je.name = je.coords = function(t, e, n) {
            var i;
            return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
        }, dt.valHooks.button = {
            get: function(t, e) {
                var n = t.getAttributeNode(e);
                return n && n.specified ? n.value : void 0
            },
            set: $e.set
        }, dt.attrHooks.contenteditable = {
            set: function(t, e, n) {
                $e.set(t, "" === e ? !1 : e, n)
            }
        }, dt.each(["width", "height"], function(t, e) {
            dt.attrHooks[e] = {
                set: function(t, n) {
                    return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
                }
            }
        })), ht.style || (dt.attrHooks.style = {
            get: function(t) {
                return t.style.cssText || void 0
            },
            set: function(t, e) {
                return t.style.cssText = e + ""
            }
        });
        var qe = /^(?:input|select|textarea|button|object)$/i,
            De = /^(?:a|area)$/i;
        dt.fn.extend({
            prop: function(t, e) {
                return Rt(this, dt.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return t = dt.propFix[t] || t, this.each(function() {
                    try {
                        this[t] = void 0, delete this[t]
                    } catch (e) {}
                })
            }
        }), dt.extend({
            prop: function(t, e, n) {
                var i, r, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && dt.isXMLDoc(t) || (e = dt.propFix[e] || e, r = dt.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = dt.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : qe.test(t.nodeName) || De.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }), ht.hrefNormalized || dt.each(["href", "src"], function(t, e) {
            dt.propHooks[e] = {
                get: function(t) {
                    return t.getAttribute(e, 4)
                }
            }
        }), ht.optSelected || (dt.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
            }
        }), dt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            dt.propFix[this.toLowerCase()] = this
        }), ht.enctype || (dt.propFix.enctype = "encoding");
        var Oe = /[\t\r\n\f]/g;
        dt.fn.extend({
            addClass: function(t) {
                var e, n, i, r, o, s, a, l = 0;
                if (dt.isFunction(t)) return this.each(function(e) {
                    dt(this).addClass(t.call(this, e, W(this)))
                });
                if ("string" == typeof t && t) for (e = t.match(Pt) || []; n = this[l++];) if (r = W(n), i = 1 === n.nodeType && (" " + r + " ").replace(Oe, " ")) {
                    for (s = 0; o = e[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                    a = dt.trim(i), r !== a && dt.attr(n, "class", a)
                }
                return this
            },
            removeClass: function(t) {
                var e, n, i, r, o, s, a, l = 0;
                if (dt.isFunction(t)) return this.each(function(e) {
                    dt(this).removeClass(t.call(this, e, W(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t) for (e = t.match(Pt) || []; n = this[l++];) if (r = W(n), i = 1 === n.nodeType && (" " + r + " ").replace(Oe, " ")) {
                    for (s = 0; o = e[s++];) for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                    a = dt.trim(i), r !== a && dt.attr(n, "class", a)
                }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : dt.isFunction(t) ? this.each(function(n) {
                    dt(this).toggleClass(t.call(this, n, W(this), e), e)
                }) : this.each(function() {
                    var e, i, r, o;
                    if ("string" === n) for (i = 0, r = dt(this), o = t.match(Pt) || []; e = o[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                    else(void 0 === t || "boolean" === n) && (e = W(this), e && dt._data(this, "__className__", e), dt.attr(this, "class", e || t === !1 ? "" : dt._data(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, n, i = 0;
                for (e = " " + t + " "; n = this[i++];) if (1 === n.nodeType && (" " + W(n) + " ").replace(Oe, " ").indexOf(e) > -1) return !0;
                return !1
            }
        }), dt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            dt.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), dt.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        });
        var Re = t.location,
            Le = dt.now(),
            Be = /\?/,
            Ue = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        dt.parseJSON = function(e) {
            if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
            var n, i = null,
                r = dt.trim(e + "");
            return r && !dt.trim(r.replace(Ue, function(t, e, r, o) {
                return n && e && (i = 0), 0 === i ? t : (n = r || e, i += !o - !r, "")
            })) ? Function("return " + r)() : dt.error("Invalid JSON: " + e)
        }, dt.parseXML = function(e) {
            var n, i;
            if (!e || "string" != typeof e) return null;
            try {
                t.DOMParser ? (i = new t.DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new t.ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
            } catch (r) {
                n = void 0
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || dt.error("Invalid XML: " + e), n
        };
        var He = /#.*$/,
            We = /([?&])_=[^&]*/,
            ze = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Ve = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Ge = /^(?:GET|HEAD)$/,
            Xe = /^\/\//,
            Qe = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Ye = {},
            Je = {},
            Ke = "*/".concat("*"),
            Ze = Re.href,
            tn = Qe.exec(Ze.toLowerCase()) || [];
        dt.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ze,
                type: "GET",
                isLocal: Ve.test(tn[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ke,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": dt.parseJSON,
                    "text xml": dt.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? G(G(t, dt.ajaxSettings), e) : G(dt.ajaxSettings, t)
            },
            ajaxPrefilter: z(Ye),
            ajaxTransport: z(Je),
            ajax: function(e, n) {
                function i(e, n, i, r) {
                    var o, h, y, b, w, C = n;
                    2 !== x && (x = 2, l && t.clearTimeout(l), c = void 0, a = r || "", _.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, i && (b = X(f, _, i)), b = Q(f, b, _, o), o ? (f.ifModified && (w = _.getResponseHeader("Last-Modified"), w && (dt.lastModified[s] = w), w = _.getResponseHeader("etag"), w && (dt.etag[s] = w)), 204 === e || "HEAD" === f.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, h = b.data, y = b.error, o = !y)) : (y = C, (e || !C) && (C = "error", 0 > e && (e = 0))), _.status = e, _.statusText = (n || C) + "", o ? m.resolveWith(d, [h, C, _]) : m.rejectWith(d, [_, C, y]), _.statusCode(v), v = void 0, u && p.trigger(o ? "ajaxSuccess" : "ajaxError", [_, f, o ? h : y]), g.fireWith(d, [_, C]), u && (p.trigger("ajaxComplete", [_, f]), --dt.active || dt.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (n = e, e = void 0), n = n || {};
                var r, o, s, a, l, u, c, h, f = dt.ajaxSetup({}, n),
                    d = f.context || f,
                    p = f.context && (d.nodeType || d.jquery) ? dt(d) : dt.event,
                    m = dt.Deferred(),
                    g = dt.Callbacks("once memory"),
                    v = f.statusCode || {},
                    y = {},
                    b = {},
                    x = 0,
                    w = "canceled",
                    _ = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === x) {
                                if (!h) for (h = {}; e = ze.exec(a);) h[e[1].toLowerCase()] = e[2];
                                e = h[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === x ? a : null
                        },
                        setRequestHeader: function(t, e) {
                            var n = t.toLowerCase();
                            return x || (t = b[n] = b[n] || t, y[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return x || (f.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t) if (2 > x) for (e in t) v[e] = [v[e], t[e]];
                            else _.always(t[_.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || w;
                            return c && c.abort(e), i(0, e), this
                        }
                    };
                if (m.promise(_).complete = g.add, _.success = _.done, _.error = _.fail, f.url = ((e || f.url || Ze) + "").replace(He, "").replace(Xe, tn[1] + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = dt.trim(f.dataType || "*").toLowerCase().match(Pt) || [""], null == f.crossDomain && (r = Qe.exec(f.url.toLowerCase()), f.crossDomain = !(!r || r[1] === tn[1] && r[2] === tn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (tn[3] || ("http:" === tn[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = dt.param(f.data, f.traditional)), V(Ye, f, n, _), 2 === x) return _;
                u = dt.event && f.global, u && 0 === dt.active++ && dt.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Ge.test(f.type), s = f.url, f.hasContent || (f.data && (s = f.url += (Be.test(s) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = We.test(s) ? s.replace(We, "$1_=" + Le++) : s + (Be.test(s) ? "&" : "?") + "_=" + Le++)), f.ifModified && (dt.lastModified[s] && _.setRequestHeader("If-Modified-Since", dt.lastModified[s]), dt.etag[s] && _.setRequestHeader("If-None-Match", dt.etag[s])), (f.data && f.hasContent && f.contentType !== !1 || n.contentType) && _.setRequestHeader("Content-Type", f.contentType), _.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ke + "; q=0.01" : "") : f.accepts["*"]);
                for (o in f.headers) _.setRequestHeader(o, f.headers[o]);
                if (f.beforeSend && (f.beforeSend.call(d, _, f) === !1 || 2 === x)) return _.abort();
                w = "abort";
                for (o in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) _[o](f[o]);
                if (c = V(Je, f, n, _)) {
                    if (_.readyState = 1, u && p.trigger("ajaxSend", [_, f]), 2 === x) return _;
                    f.async && f.timeout > 0 && (l = t.setTimeout(function() {
                        _.abort("timeout")
                    }, f.timeout));
                    try {
                        x = 1, c.send(y, i)
                    } catch (C) {
                        if (!(2 > x)) throw C;
                        i(-1, C)
                    }
                } else i(-1, "No Transport");
                return _
            },
            getJSON: function(t, e, n) {
                return dt.get(t, e, n, "json")
            },
            getScript: function(t, e) {
                return dt.get(t, void 0, e, "script")
            }
        }), dt.each(["get", "post"], function(t, e) {
            dt[e] = function(t, n, i, r) {
                return dt.isFunction(n) && (r = r || i, i = n, n = void 0), dt.ajax(dt.extend({
                    url: t,
                    type: e,
                    dataType: r,
                    data: n,
                    success: i
                }, dt.isPlainObject(t) && t))
            }
        }), dt._evalUrl = function(t) {
            return dt.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                "throws": !0
            })
        }, dt.fn.extend({
            wrapAll: function(t) {
                if (dt.isFunction(t)) return this.each(function(e) {
                    dt(this).wrapAll(t.call(this, e))
                });
                if (this[0]) {
                    var e = dt(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                        return t
                    }).append(this)
                }
                return this
            },
            wrapInner: function(t) {
                return dt.isFunction(t) ? this.each(function(e) {
                    dt(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = dt(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = dt.isFunction(t);
                return this.each(function(n) {
                    dt(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    dt.nodeName(this, "body") || dt(this).replaceWith(this.childNodes)
                }).end()
            }
        }), dt.expr.filters.hidden = function(t) {
            return ht.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : J(t)
        }, dt.expr.filters.visible = function(t) {
            return !dt.expr.filters.hidden(t)
        };
        var en = /%20/g,
            nn = /\[\]$/,
            rn = /\r?\n/g,
            on = /^(?:submit|button|image|reset|file)$/i,
            sn = /^(?:input|select|textarea|keygen)/i;
        dt.param = function(t, e) {
            var n, i = [],
                r = function(t, e) {
                    e = dt.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = dt.ajaxSettings && dt.ajaxSettings.traditional), dt.isArray(t) || t.jquery && !dt.isPlainObject(t)) dt.each(t, function() {
                r(this.name, this.value)
            });
            else for (n in t) K(n, t[n], e, r);
            return i.join("&").replace(en, "+")
        }, dt.fn.extend({
            serialize: function() {
                return dt.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = dt.prop(this, "elements");
                    return t ? dt.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !dt(this).is(":disabled") && sn.test(this.nodeName) && !on.test(t) && (this.checked || !Lt.test(t))
                }).map(function(t, e) {
                    var n = dt(this).val();
                    return null == n ? null : dt.isArray(n) ? dt.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(rn, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(rn, "\r\n")
                    }
                }).get()
            }
        }), dt.ajaxSettings.xhr = void 0 !== t.ActiveXObject ?
            function() {
                return this.isLocal ? tt() : it.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || tt()
            } : Z;
        var an = 0,
            ln = {},
            un = dt.ajaxSettings.xhr();
        t.attachEvent && t.attachEvent("onunload", function() {
            for (var t in ln) ln[t](void 0, !0)
        }), ht.cors = !! un && "withCredentials" in un, un = ht.ajax = !! un, un && dt.ajaxTransport(function(e) {
            if (!e.crossDomain || ht.cors) {
                var n;
                return {
                    send: function(i, r) {
                        var o, s = e.xhr(),
                            a = ++an;
                        if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (o in e.xhrFields) s[o] = e.xhrFields[o];
                        e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        for (o in i) void 0 !== i[o] && s.setRequestHeader(o, i[o] + "");
                        s.send(e.hasContent && e.data || null), n = function(t, i) {
                            var o, l, u;
                            if (n && (i || 4 === s.readyState)) if (delete ln[a], n = void 0, s.onreadystatechange = dt.noop, i) 4 !== s.readyState && s.abort();
                            else {
                                u = {}, o = s.status, "string" == typeof s.responseText && (u.text = s.responseText);
                                try {
                                    l = s.statusText
                                } catch (c) {
                                    l = ""
                                }
                                o || !e.isLocal || e.crossDomain ? 1223 === o && (o = 204) : o = u.text ? 200 : 404
                            }
                            u && r(o, l, u, s.getAllResponseHeaders())
                        }, e.async ? 4 === s.readyState ? t.setTimeout(n) : s.onreadystatechange = ln[a] = n : n()
                    },
                    abort: function() {
                        n && n(void 0, !0)
                    }
                }
            }
        }), dt.ajaxPrefilter(function(t) {
            t.crossDomain && (t.contents.script = !1)
        }), dt.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return dt.globalEval(t), t
                }
            }
        }), dt.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
        }), dt.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, n = it.head || dt("head")[0] || it.documentElement;
                return {
                    send: function(i, r) {
                        e = it.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, n) {
                            (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || r(200, "success"))
                        }, n.insertBefore(e, n.firstChild)
                    },
                    abort: function() {
                        e && e.onload(void 0, !0)
                    }
                }
            }
        });
        var cn = [],
            hn = /(=)\?(?=&|$)|\?\?/;
        dt.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = cn.pop() || dt.expando + "_" + Le++;
                return this[t] = !0, t
            }
        }), dt.ajaxPrefilter("json jsonp", function(e, n, i) {
            var r, o, s, a = e.jsonp !== !1 && (hn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && hn.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = dt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(hn, "$1" + r) : e.jsonp !== !1 && (e.url += (Be.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                return s || dt.error(r + " was not called"), s[0]
            }, e.dataTypes[0] = "json", o = t[r], t[r] = function() {
                s = arguments
            }, i.always(function() {
                void 0 === o ? dt(t).removeProp(r) : t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, cn.push(r)), s && dt.isFunction(o) && o(s[0]), s = o = void 0
            }), "script") : void 0
        }), ht.createHTMLDocument = function() {
            if (!it.implementation.createHTMLDocument) return !1;
            var t = it.implementation.createHTMLDocument("");
            return t.body.innerHTML = "<form></form><form></form>", 2 === t.body.childNodes.length
        }(), dt.parseHTML = function(t, e, n) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || (ht.createHTMLDocument ? it.implementation.createHTMLDocument("") : it);
            var i = _t.exec(t),
                r = !n && [];
            return i ? [e.createElement(i[1])] : (i = v([t], e, r), r && r.length && dt(r).remove(), dt.merge([], i.childNodes))
        };
        var fn = dt.fn.load;
        dt.fn.load = function(t, e, n) {
            if ("string" != typeof t && fn) return fn.apply(this, arguments);
            var i, r, o, s = this,
                a = t.indexOf(" ");
            return a > -1 && (i = dt.trim(t.slice(a, t.length)), t = t.slice(0, a)), dt.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && dt.ajax({
                url: t,
                type: r || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                o = arguments, s.html(i ? dt("<div>").append(dt.parseHTML(t)).find(i) : t)
            }).always(n &&
                function(t, e) {
                    s.each(function() {
                        n.apply(s, o || [t.responseText, e, t])
                    })
                }), this
        }, dt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            dt.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), dt.expr.filters.animated = function(t) {
            return dt.grep(dt.timers, function(e) {
                return t === e.elem
            }).length
        }, dt.offset = {
            setOffset: function(t, e, n) {
                var i, r, o, s, a, l, u, c = dt.css(t, "position"),
                    h = dt(t),
                    f = {};
                "static" === c && (t.style.position = "relative"), a = h.offset(), o = dt.css(t, "top"), l = dt.css(t, "left"), u = ("absolute" === c || "fixed" === c) && dt.inArray("auto", [o, l]) > -1, u ? (i = h.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), dt.isFunction(e) && (e = e.call(t, n, dt.extend({}, a))), null != e.top && (f.top = e.top - a.top + s), null != e.left && (f.left = e.left - a.left + r), "using" in e ? e.using.call(t, f) : h.css(f)
            }
        }, dt.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    dt.offset.setOffset(this, t, e)
                });
                var e, n, i = {
                        top: 0,
                        left: 0
                    },
                    r = this[0],
                    o = r && r.ownerDocument;
                if (o) return e = o.documentElement, dt.contains(e, r) ? ("undefined" != typeof r.getBoundingClientRect && (i = r.getBoundingClientRect()), n = et(o), {
                    top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                    left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                }) : i
            },
            position: function() {
                if (this[0]) {
                    var t, e, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === dt.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), dt.nodeName(t[0], "html") || (n = t.offset()), n.top += dt.css(t[0], "borderTopWidth", !0) - t.scrollTop(), n.left += dt.css(t[0], "borderLeftWidth", !0) - t.scrollLeft()), {
                        top: e.top - n.top - dt.css(i, "marginTop", !0),
                        left: e.left - n.left - dt.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && !dt.nodeName(t, "html") && "static" === dt.css(t, "position");) t = t.offsetParent;
                    return t || de
                })
            }
        }), dt.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var n = /Y/.test(e);
            dt.fn[t] = function(i) {
                return Rt(this, function(t, i, r) {
                    var o = et(t);
                    return void 0 === r ? o ? e in o ? o[e] : o.document.documentElement[i] : t[i] : void(o ? o.scrollTo(n ? dt(o).scrollLeft() : r, n ? r : dt(o).scrollTop()) : t[i] = r)
                }, t, i, arguments.length, null)
            }
        }), dt.each(["top", "left"], function(t, e) {
            dt.cssHooks[e] = M(ht.pixelPosition, function(t, n) {
                return n ? (n = me(t, e), he.test(n) ? dt(t).position()[e] + "px" : n) : void 0
            })
        }), dt.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            dt.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(n, i) {
                dt.fn[i] = function(i, r) {
                    var o = arguments.length && (n || "boolean" != typeof i),
                        s = n || (i === !0 || r === !0 ? "margin" : "border");
                    return Rt(this, function(e, n, i) {
                        var r;
                        return dt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? dt.css(e, n, s) : dt.style(e, n, i, s)
                    }, e, o ? i : void 0, o, null)
                }
            })
        }), dt.fn.extend({
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        }), dt.fn.size = function() {
            return this.length
        }, dt.fn.andSelf = dt.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return dt
        });
        var dn = t.jQuery,
            pn = t.$;
        return dt.noConflict = function(e) {
            return t.$ === dt && (t.$ = pn), e && t.jQuery === dt && (t.jQuery = dn), dt
        }, e || (t.jQuery = t.$ = dt), dt
    }),
        /*!
         * Modernizr v2.6.1
         * www.modernizr.com
         *
         * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
         * Available under the BSD and MIT licenses: www.modernizr.com/license/
         */
        window.Modernizr = function(t, e, n) {
            function i(t) {
                b.cssText = t
            }
            function r(t, e) {
                return i(C.join(t + ";") + (e || ""))
            }
            function o(t, e) {
                return typeof t === e
            }
            function s(t, e) {
                return !!~ ("" + t).indexOf(e)
            }
            function a(t, e) {
                for (var i in t) {
                    var r = t[i];
                    if (!s(r, "-") && b[r] !== n) return "pfx" == e ? r : !0
                }
                return !1
            }
            function l(t, e, i) {
                for (var r in t) {
                    var s = e[t[r]];
                    if (s !== n) return i === !1 ? t[r] : o(s, "function") ? s.bind(i || e) : s
                }
                return !1
            }
            function u(t, e, n) {
                var i = t.charAt(0).toUpperCase() + t.slice(1),
                    r = (t + " " + T.join(i + " ") + i).split(" ");
                return o(e, "string") || o(e, "undefined") ? a(r, e) : (r = (t + " " + E.join(i + " ") + i).split(" "), l(r, e, n))
            }
            function c() {
                p.input = function(n) {
                    for (var i = 0, r = n.length; r > i; i++) $[n[i]] = !! (n[i] in x);
                    return $.list && ($.list = !(!e.createElement("datalist") || !t.HTMLDataListElement)), $
                }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), p.inputtypes = function(t) {
                    for (var i, r, o, s = 0, a = t.length; a > s; s++) x.setAttribute("type", r = t[s]), i = "text" !== x.type, i && (x.value = w, x.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(r) && x.style.WebkitAppearance !== n ? (g.appendChild(x), o = e.defaultView, i = o.getComputedStyle && "textfield" !== o.getComputedStyle(x, null).WebkitAppearance && 0 !== x.offsetHeight, g.removeChild(x)) : /^(search|tel)$/.test(r) || (i = /^(url|email)$/.test(r) ? x.checkValidity && x.checkValidity() === !1 : x.value != w)), P[t[s]] = !! i;
                    return P
                }("search tel url email datetime date month week time datetime-local number range color".split(" "))
            }
            var h, f, d = "2.6.1",
                p = {},
                m = !0,
                g = e.documentElement,
                v = "modernizr",
                y = e.createElement(v),
                b = y.style,
                x = e.createElement("input"),
                w = ":)",
                _ = {}.toString,
                C = " -webkit- -moz- -o- -ms- ".split(" "),
                k = "Webkit Moz O ms",
                T = k.split(" "),
                E = k.toLowerCase().split(" "),
                S = {
                    svg: "http://www.w3.org/2000/svg"
                },
                A = {},
                P = {},
                $ = {},
                M = [],
                j = M.slice,
                N = function(t, n, i, r) {
                    var o, s, a, l = e.createElement("div"),
                        u = e.body,
                        c = u ? u : e.createElement("body");
                    if (parseInt(i, 10)) for (; i--;) a = e.createElement("div"), a.id = r ? r[i] : v + (i + 1), l.appendChild(a);
                    return o = ["&#173;", '<style id="s', v, '">', t, "</style>"].join(""), l.id = v, (u ? l : c).innerHTML += o, c.appendChild(l), u || (c.style.background = "", g.appendChild(c)), s = n(l, t), u ? l.parentNode.removeChild(l) : c.parentNode.removeChild(c), !! s
                },
                I = function(e) {
                    var n = t.matchMedia || t.msMatchMedia;
                    if (n) return n(e).matches;
                    var i;
                    return N("@media " + e + " { #" + v + " { position: absolute; } }", function(e) {
                        i = "absolute" == (t.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).position
                    }), i
                },
                F = function() {
                    function t(t, r) {
                        r = r || e.createElement(i[t] || "div"), t = "on" + t;
                        var s = t in r;
                        return s || (r.setAttribute || (r = e.createElement("div")), r.setAttribute && r.removeAttribute && (r.setAttribute(t, ""), s = o(r[t], "function"), o(r[t], "undefined") || (r[t] = n), r.removeAttribute(t))), r = null, s
                    }
                    var i = {
                        select: "input",
                        change: "input",
                        submit: "form",
                        reset: "form",
                        error: "img",
                        load: "img",
                        abort: "img"
                    };
                    return t
                }(),
                q = {}.hasOwnProperty;
            f = o(q, "undefined") || o(q.call, "undefined") ?
                function(t, e) {
                    return e in t && o(t.constructor.prototype[e], "undefined")
                } : function(t, e) {
                return q.call(t, e)
            }, Function.prototype.bind || (Function.prototype.bind = function(t) {
                var e = this;
                if ("function" != typeof e) throw new TypeError;
                var n = j.call(arguments, 1),
                    i = function() {
                        if (this instanceof i) {
                            var r = function() {};
                            r.prototype = e.prototype;
                            var o = new r,
                                s = e.apply(o, n.concat(j.call(arguments)));
                            return Object(s) === s ? s : o
                        }
                        return e.apply(t, n.concat(j.call(arguments)))
                    };
                return i
            }), A.flexbox = function() {
                return u("flexWrap")
            }, A.flexboxlegacy = function() {
                return u("boxDirection")
            }, A.canvas = function() {
                var t = e.createElement("canvas");
                return !(!t.getContext || !t.getContext("2d"))
            }, A.canvastext = function() {
                return !(!p.canvas || !o(e.createElement("canvas").getContext("2d").fillText, "function"))
            }, A.webgl = function() {
                return !!t.WebGLRenderingContext
            }, A.touch = function() {
                var n;
                return "ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch ? n = !0 : N(["@media (", C.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(t) {
                    n = 9 === t.offsetTop
                }), n
            }, A.geolocation = function() {
                return "geolocation" in navigator
            }, A.postmessage = function() {
                return !!t.postMessage
            }, A.websqldatabase = function() {
                return !!t.openDatabase
            }, A.indexedDB = function() {
                return !!u("indexedDB", t)
            }, A.hashchange = function() {
                return F("hashchange", t) && (e.documentMode === n || e.documentMode > 7)
            }, A.history = function() {
                return !(!t.history || !history.pushState)
            }, A.draganddrop = function() {
                var t = e.createElement("div");
                return "draggable" in t || "ondragstart" in t && "ondrop" in t
            }, A.websockets = function() {
                return "WebSocket" in t || "MozWebSocket" in t
            }, A.rgba = function() {
                return i("background-color:rgba(150,255,150,.5)"), s(b.backgroundColor, "rgba")
            }, A.hsla = function() {
                return i("background-color:hsla(120,40%,100%,.5)"), s(b.backgroundColor, "rgba") || s(b.backgroundColor, "hsla")
            }, A.multiplebgs = function() {
                return i("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(b.background)
            }, A.backgroundsize = function() {
                return u("backgroundSize")
            }, A.borderimage = function() {
                return u("borderImage")
            }, A.borderradius = function() {
                return u("borderRadius")
            }, A.boxshadow = function() {
                return u("boxShadow")
            }, A.textshadow = function() {
                return "" === e.createElement("div").style.textShadow
            }, A.opacity = function() {
                return r("opacity:.55"), /^0.55$/.test(b.opacity)
            }, A.cssanimations = function() {
                return u("animationName")
            }, A.csscolumns = function() {
                return u("columnCount")
            }, A.cssgradients = function() {
                var t = "background-image:",
                    e = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                    n = "linear-gradient(left top,#9f9, white);";
                return i((t + "-webkit- ".split(" ").join(e + t) + C.join(n + t)).slice(0, -t.length)), s(b.backgroundImage, "gradient")
            }, A.cssreflections = function() {
                return u("boxReflect")
            }, A.csstransforms = function() {
                return !!u("transform")
            }, A.csstransforms3d = function() {
                var t = !! u("perspective");
                return t && "webkitPerspective" in g.style && N("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(e, n) {
                    t = 9 === e.offsetLeft && 3 === e.offsetHeight
                }), t
            }, A.csstransitions = function() {
                return u("transition")
            }, A.fontface = function() {
                var t;
                return N('@font-face {font-family:"font";src:url("https://")}', function(n, i) {
                    var r = e.getElementById("smodernizr"),
                        o = r.sheet || r.styleSheet,
                        s = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "";
                    t = /src/i.test(s) && 0 === s.indexOf(i.split(" ")[0])
                }), t
            }, A.generatedcontent = function() {
                var t;
                return N(['#modernizr:after{content:"', w, '";visibility:hidden}'].join(""), function(e) {
                    t = e.offsetHeight >= 1
                }), t
            }, A.video = function() {
                var t = e.createElement("video"),
                    n = !1;
                try {
                    (n = !! t.canPlayType) && (n = new Boolean(n), n.ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
                } catch (i) {}
                return n
            }, A.audio = function() {
                var t = e.createElement("audio"),
                    n = !1;
                try {
                    (n = !! t.canPlayType) && (n = new Boolean(n), n.ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""))
                } catch (i) {}
                return n
            }, A.localstorage = function() {
                try {
                    return localStorage.setItem(v, v), localStorage.removeItem(v), !0
                } catch (t) {
                    return !1
                }
            }, A.sessionstorage = function() {
                try {
                    return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0
                } catch (t) {
                    return !1
                }
            }, A.webworkers = function() {
                return !!t.Worker
            }, A.applicationcache = function() {
                return !!t.applicationCache
            }, A.svg = function() {
                return !!e.createElementNS && !! e.createElementNS(S.svg, "svg").createSVGRect
            }, A.inlinesvg = function() {
                var t = e.createElement("div");
                return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) == S.svg
            }, A.smil = function() {
                return !!e.createElementNS && /SVGAnimate/.test(_.call(e.createElementNS(S.svg, "animate")))
            }, A.svgclippaths = function() {
                return !!e.createElementNS && /SVGClipPath/.test(_.call(e.createElementNS(S.svg, "clipPath")))
            };
            for (var D in A) f(A, D) && (h = D.toLowerCase(), p[h] = A[D](), M.push((p[h] ? "" : "no-") + h));
            return p.input || c(), p.addTest = function(t, e) {
                if ("object" == typeof t) for (var i in t) f(t, i) && p.addTest(i, t[i]);
                else {
                    if (t = t.toLowerCase(), p[t] !== n) return p;
                    e = "function" == typeof e ? e() : e, m && (g.className += " " + (e ? "" : "no-") + t), p[t] = e
                }
                return p
            }, i(""), y = x = null, function(t, e) {
                function n(t, e) {
                    var n = t.createElement("p"),
                        i = t.getElementsByTagName("head")[0] || t.documentElement;
                    return n.innerHTML = "x<style>" + e + "</style>", i.insertBefore(n.lastChild, i.firstChild)
                }
                function i() {
                    var t = v.elements;
                    return "string" == typeof t ? t.split(" ") : t
                }
                function r(t) {
                    var e = g[t[p]];
                    return e || (e = {}, m++, t[p] = m, g[m] = e), e
                }
                function o(t, n, i) {
                    if (n || (n = e), c) return n.createElement(t);
                    i || (i = r(n));
                    var o;
                    return o = i.cache[t] ? i.cache[t].cloneNode() : d.test(t) ? (i.cache[t] = i.createElem(t)).cloneNode() : i.createElem(t), o.canHaveChildren && !f.test(t) ? i.frag.appendChild(o) : o
                }
                function s(t, n) {
                    if (t || (t = e), c) return t.createDocumentFragment();
                    n = n || r(t);
                    for (var o = n.frag.cloneNode(), s = 0, a = i(), l = a.length; l > s; s++) o.createElement(a[s]);
                    return o
                }
                function a(t, e) {
                    e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function(n) {
                        return v.shivMethods ? o(n, t, e) : e.createElem(n)
                    }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/\w+/g, function(t) {
                            return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
                        }) + ");return n}")(v, e.frag)
                }
                function l(t) {
                    t || (t = e);
                    var i = r(t);
                    return !v.shivCSS || u || i.hasCSS || (i.hasCSS = !! n(t, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), c || a(t, i), t
                }
                var u, c, h = t.html5 || {},
                    f = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    d = /^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,
                    p = "_html5shiv",
                    m = 0,
                    g = {};
                !
                    function() {
                        try {
                            var t = e.createElement("a");
                            t.innerHTML = "<xyz></xyz>", u = "hidden" in t, c = 1 == t.childNodes.length ||
                                function() {
                                    e.createElement("a");
                                    var t = e.createDocumentFragment();
                                    return "undefined" == typeof t.cloneNode || "undefined" == typeof t.createDocumentFragment || "undefined" == typeof t.createElement
                                }()
                        } catch (n) {
                            u = !0, c = !0
                        }
                    }();
                var v = {
                    elements: h.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: h.shivCSS !== !1,
                    supportsUnknownElements: c,
                    shivMethods: h.shivMethods !== !1,
                    type: "default",
                    shivDocument: l,
                    createElement: o,
                    createDocumentFragment: s
                };
                t.html5 = v, l(e)
            }(this, e), p._version = d, p._prefixes = C, p._domPrefixes = E, p._cssomPrefixes = T, p.mq = I, p.hasEvent = F, p.testProp = function(t) {
                return a([t])
            }, p.testAllProps = u, p.testStyles = N, p.prefixed = function(t, e, n) {
                return e ? u(t, e, n) : u(t, "pfx")
            }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + M.join(" ") : ""), p
        }(this, this.document), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
/* ========================================================================
 * Bootstrap: transition.js v3.2.0
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+
    function(t) {
        "use strict";

        function e() {
            var t = document.createElement("bootstrap"),
                e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var n in e) if (void 0 !== t.style[n]) return {
                end: e[n]
            };
            return !1
        }
        t.fn.emulateTransitionEnd = function(e) {
            var n = !1,
                i = this;
            t(this).one("bsTransitionEnd", function() {
                n = !0
            });
            var r = function() {
                n || t(i).trigger(t.support.transition.end)
            };
            return setTimeout(r, e), this
        }, t(function() {
            t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
                bindType: t.support.transition.end,
                delegateType: t.support.transition.end,
                handle: function(e) {
                    return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
                }
            })
        })
    }(jQuery),
    /* ========================================================================
     * Bootstrap: alert.js v3.2.0
     * http://getbootstrap.com/javascript/#alerts
     * ========================================================================
     * Copyright 2011-2014 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */
    +
        function(t) {
            "use strict";

            function e(e) {
                return this.each(function() {
                    var n = t(this),
                        r = n.data("bs.alert");
                    r || n.data("bs.alert", r = new i(this)), "string" == typeof e && r[e].call(n)
                })
            }
            var n = '[data-dismiss="alert"]',
                i = function(e) {
                    t(e).on("click", n, this.close)
                };
            i.VERSION = "3.2.0", i.prototype.close = function(e) {
                function n() {
                    o.detach().trigger("closed.bs.alert").remove()
                }
                var i = t(this),
                    r = i.attr("data-target");
                r || (r = i.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
                var o = t(r);
                e && e.preventDefault(), o.length || (o = i.hasClass("alert") ? i : i.parent()), o.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", n).emulateTransitionEnd(150) : n())
            };
            var r = t.fn.alert;
            t.fn.alert = e, t.fn.alert.Constructor = i, t.fn.alert.noConflict = function() {
                return t.fn.alert = r, this
            }, t(document).on("click.bs.alert.data-api", n, i.prototype.close)
        }(jQuery),
    /* ========================================================================
     * Bootstrap: button.js v3.2.0
     * http://getbootstrap.com/javascript/#buttons
     * ========================================================================
     * Copyright 2011-2014 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */
    +
        function(t) {
            "use strict";

            function e(e) {
                return this.each(function() {
                    var i = t(this),
                        r = i.data("bs.button"),
                        o = "object" == typeof e && e;
                    r || i.data("bs.button", r = new n(this, o)), "toggle" == e ? r.toggle() : e && r.setState(e)
                })
            }
            var n = function(e, i) {
                this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.isLoading = !1
            };
            n.VERSION = "3.2.0", n.DEFAULTS = {
                loadingText: "loading..."
            }, n.prototype.setState = function(e) {
                var n = "disabled",
                    i = this.$element,
                    r = i.is("input") ? "val" : "html",
                    o = i.data();
                e += "Text", null == o.resetText && i.data("resetText", i[r]()), i[r](null == o[e] ? this.options[e] : o[e]), setTimeout(t.proxy(function() {
                    "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
                }, this), 0)
            }, n.prototype.toggle = function() {
                var t = !0,
                    e = this.$element.closest('[data-toggle="buttons"]');
                if (e.length) {
                    var n = this.$element.find("input");
                    "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
                }
                t && this.$element.toggleClass("active")
            };
            var i = t.fn.button;
            t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function() {
                return t.fn.button = i, this
            }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
                var i = t(n.target);
                i.hasClass("btn") || (i = i.closest(".btn")), e.call(i, "toggle"), n.preventDefault()
            })
        }(jQuery),
    /* ========================================================================
     * Bootstrap: carousel.js v3.2.0
     * http://getbootstrap.com/javascript/#carousel
     * ========================================================================
     * Copyright 2011-2014 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */
    +
        function(t) {
            "use strict";

            function e(e) {
                return this.each(function() {
                    var i = t(this),
                        r = i.data("bs.carousel"),
                        o = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e),
                        s = "string" == typeof e ? e : o.slide;
                    r || i.data("bs.carousel", r = new n(this, o)), "number" == typeof e ? r.to(e) : s ? r[s]() : o.interval && r.pause().cycle()
                })
            }
            var n = function(e, n) {
                this.$element = t(e).on("keydown.bs.carousel", t.proxy(this.keydown, this)), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
            };
            n.VERSION = "3.2.0", n.DEFAULTS = {
                interval: 5e3,
                pause: "hover",
                wrap: !0
            }, n.prototype.keydown = function(t) {
                switch (t.which) {
                    case 37:
                        this.prev();
                        break;
                    case 39:
                        this.next();
                        break;
                    default:
                        return
                }
                t.preventDefault()
            }, n.prototype.cycle = function(e) {
                return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
            }, n.prototype.getItemIndex = function(t) {
                return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
            }, n.prototype.to = function(e) {
                var n = this,
                    i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
                return e > this.$items.length - 1 || 0 > e ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
                    n.to(e)
                }) : i == e ? this.pause().cycle() : this.slide(e > i ? "next" : "prev", t(this.$items[e]))
            }, n.prototype.pause = function(e) {
                return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
            }, n.prototype.next = function() {
                return this.sliding ? void 0 : this.slide("next")
            }, n.prototype.prev = function() {
                return this.sliding ? void 0 : this.slide("prev")
            }, n.prototype.slide = function(e, n) {
                var i = this.$element.find(".item.active"),
                    r = n || i[e](),
                    o = this.interval,
                    s = "next" == e ? "left" : "right",
                    a = "next" == e ? "first" : "last",
                    l = this;
                if (!r.length) {
                    if (!this.options.wrap) return;
                    r = this.$element.find(".item")[a]()
                }
                if (r.hasClass("active")) return this.sliding = !1;
                var u = r[0],
                    c = t.Event("slide.bs.carousel", {
                        relatedTarget: u,
                        direction: s
                    });
                if (this.$element.trigger(c), !c.isDefaultPrevented()) {
                    if (this.sliding = !0, o && this.pause(), this.$indicators.length) {
                        this.$indicators.find(".active").removeClass("active");
                        var h = t(this.$indicators.children()[this.getItemIndex(r)]);
                        h && h.addClass("active")
                    }
                    var f = t.Event("slid.bs.carousel", {
                        relatedTarget: u,
                        direction: s
                    });
                    return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, i.addClass(s), r.addClass(s), i.one("bsTransitionEnd", function() {
                        r.removeClass([e, s].join(" ")).addClass("active"), i.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function() {
                            l.$element.trigger(f)
                        }, 0)
                    }).emulateTransitionEnd(1e3 * i.css("transition-duration").slice(0, -1))) : (i.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(f)), o && this.cycle(), this
                }
            };
            var i = t.fn.carousel;
            t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function() {
                return t.fn.carousel = i, this
            }, t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(n) {
                var i, r = t(this),
                    o = t(r.attr("data-target") || (i = r.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
                if (o.hasClass("carousel")) {
                    var s = t.extend({}, o.data(), r.data()),
                        a = r.attr("data-slide-to");
                    a && (s.interval = !1), e.call(o, s), a && o.data("bs.carousel").to(a), n.preventDefault()
                }
            }), t(window).on("load", function() {
                t('[data-ride="carousel"]').each(function() {
                    var n = t(this);
                    e.call(n, n.data())
                })
            })
        }(jQuery),
    /* ========================================================================
     * Bootstrap: collapse.js v3.2.0
     * http://getbootstrap.com/javascript/#collapse
     * ========================================================================
     * Copyright 2011-2014 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */
    +
        function(t) {
            "use strict";

            function e(e) {
                return this.each(function() {
                    var i = t(this),
                        r = i.data("bs.collapse"),
                        o = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
                    !r && o.toggle && "show" == e && (e = !e), r || i.data("bs.collapse", r = new n(this, o)), "string" == typeof e && r[e]()
                })
            }
            var n = function(e, i) {
                this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.transitioning = null, this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle()
            };
            n.VERSION = "3.2.0", n.DEFAULTS = {
                toggle: !0
            }, n.prototype.dimension = function() {
                var t = this.$element.hasClass("width");
                return t ? "width" : "height"
            }, n.prototype.show = function() {
                if (!this.transitioning && !this.$element.hasClass("in")) {
                    var n = t.Event("show.bs.collapse");
                    if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                        var i = this.$parent && this.$parent.find("> .panel > .in");
                        if (i && i.length) {
                            var r = i.data("bs.collapse");
                            if (r && r.transitioning) return;
                            e.call(i, "hide"), r || i.data("bs.collapse", null)
                        }
                        var o = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[o](0), this.transitioning = 1;
                        var s = function() {
                            this.$element.removeClass("collapsing").addClass("collapse in")[o](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                        };
                        if (!t.support.transition) return s.call(this);
                        var a = t.camelCase(["scroll", o].join("-"));
                        this.$element.one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(350)[o](this.$element[0][a])
                    }
                }
            }, n.prototype.hide = function() {
                if (!this.transitioning && this.$element.hasClass("in")) {
                    var e = t.Event("hide.bs.collapse");
                    if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                        var n = this.dimension();
                        this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                        var i = function() {
                            this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                        };
                        return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(i, this)).emulateTransitionEnd(350) : i.call(this)
                    }
                }
            }, n.prototype.toggle = function() {
                this[this.$element.hasClass("in") ? "hide" : "show"]()
            };
            var i = t.fn.collapse;
            t.fn.collapse = e, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() {
                return t.fn.collapse = i, this
            }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
                var i, r = t(this),
                    o = r.attr("data-target") || n.preventDefault() || (i = r.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""),
                    s = t(o),
                    a = s.data("bs.collapse"),
                    l = a ? "toggle" : r.data(),
                    u = r.attr("data-parent"),
                    c = u && t(u);
                a && a.transitioning || (c && c.find('[data-toggle="collapse"][data-parent="' + u + '"]').not(r).addClass("collapsed"), r[s.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), e.call(s, l)
            })
        }(jQuery),
    /* ========================================================================
     * Bootstrap: dropdown.js v3.2.0
     * http://getbootstrap.com/javascript/#dropdowns
     * ========================================================================
     * Copyright 2011-2014 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */
    +
        function(t) {
            "use strict";

            function e(e) {
                e && 3 === e.which || (t(r).remove(), t(o).each(function() {
                    var i = n(t(this)),
                        r = {
                            relatedTarget: this
                        };
                    i.hasClass("open") && (i.trigger(e = t.Event("hide.bs.dropdown", r)), e.isDefaultPrevented() || i.removeClass("open").trigger("hidden.bs.dropdown", r))
                }))
            }
            function n(e) {
                var n = e.attr("data-target");
                n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
                var i = n && t(n);
                return i && i.length ? i : e.parent()
            }
            function i(e) {
                return this.each(function() {
                    var n = t(this),
                        i = n.data("bs.dropdown");
                    i || n.data("bs.dropdown", i = new s(this)), "string" == typeof e && i[e].call(n)
                })
            }
            var r = ".dropdown-backdrop",
                o = '[data-toggle="dropdown"]',
                s = function(e) {
                    t(e).on("click.bs.dropdown", this.toggle)
                };
            s.VERSION = "3.2.0", s.prototype.toggle = function(i) {
                var r = t(this);
                if (!r.is(".disabled, :disabled")) {
                    var o = n(r),
                        s = o.hasClass("open");
                    if (e(), !s) {
                        "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                        var a = {
                            relatedTarget: this
                        };
                        if (o.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented()) return;
                        r.trigger("focus"), o.toggleClass("open").trigger("shown.bs.dropdown", a)
                    }
                    return !1
                }
            }, s.prototype.keydown = function(e) {
                if (/(38|40|27)/.test(e.keyCode)) {
                    var i = t(this);
                    if (e.preventDefault(), e.stopPropagation(), !i.is(".disabled, :disabled")) {
                        var r = n(i),
                            s = r.hasClass("open");
                        if (!s || s && 27 == e.keyCode) return 27 == e.which && r.find(o).trigger("focus"), i.trigger("click");
                        var a = " li:not(.divider):visible a",
                            l = r.find('[role="menu"]' + a + ', [role="listbox"]' + a);
                        if (l.length) {
                            var u = l.index(l.filter(":focus"));
                            38 == e.keyCode && u > 0 && u--, 40 == e.keyCode && u < l.length - 1 && u++, ~u || (u = 0), l.eq(u).trigger("focus")
                        }
                    }
                }
            };
            var a = t.fn.dropdown;
            t.fn.dropdown = i, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function() {
                return t.fn.dropdown = a, this
            }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
                t.stopPropagation()
            }).on("click.bs.dropdown.data-api", o, s.prototype.toggle).on("keydown.bs.dropdown.data-api", o + ', [role="menu"], [role="listbox"]', s.prototype.keydown)
        }(jQuery),
    /* ========================================================================
     * Bootstrap: modal.js v3.2.0
     * http://getbootstrap.com/javascript/#modals
     * ========================================================================
     * Copyright 2011-2014 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */
    +
        function(t) {
            "use strict";

            function e(e, i) {
                return this.each(function() {
                    var r = t(this),
                        o = r.data("bs.modal"),
                        s = t.extend({}, n.DEFAULTS, r.data(), "object" == typeof e && e);
                    o || r.data("bs.modal", o = new n(this, s)), "string" == typeof e ? o[e](i) : s.show && o.show(i)
                })
            }
            var n = function(e, n) {
                this.options = n, this.$body = t(document.body), this.$element = t(e), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
                    this.$element.trigger("loaded.bs.modal")
                }, this))
            };
            n.VERSION = "3.2.0", n.DEFAULTS = {
                backdrop: !0,
                keyboard: !0,
                show: !0
            }, n.prototype.toggle = function(t) {
                return this.isShown ? this.hide() : this.show(t)
            }, n.prototype.show = function(e) {
                var n = this,
                    i = t.Event("show.bs.modal", {
                        relatedTarget: e
                    });
                this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function() {
                    var i = t.support.transition && n.$element.hasClass("fade");
                    n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), i && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
                    var r = t.Event("shown.bs.modal", {
                        relatedTarget: e
                    });
                    i ? n.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
                        n.$element.trigger("focus").trigger(r)
                    }).emulateTransitionEnd(300) : n.$element.trigger("focus").trigger(r)
                }))
            }, n.prototype.hide = function(e) {
                e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
            }, n.prototype.enforceFocus = function() {
                t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
                    this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
                }, this))
            }, n.prototype.escape = function() {
                this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", t.proxy(function(t) {
                    27 == t.which && this.hide()
                }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
            }, n.prototype.hideModal = function() {
                var t = this;
                this.$element.hide(), this.backdrop(function() {
                    t.$element.trigger("hidden.bs.modal")
                })
            }, n.prototype.removeBackdrop = function() {
                this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
            }, n.prototype.backdrop = function(e) {
                var n = this,
                    i = this.$element.hasClass("fade") ? "fade" : "";
                if (this.isShown && this.options.backdrop) {
                    var r = t.support.transition && i;
                    if (this.$backdrop = t('<div class="modal-backdrop ' + i + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                            t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                        }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
                    r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e()
                } else if (!this.isShown && this.$backdrop) {
                    this.$backdrop.removeClass("in");
                    var o = function() {
                        n.removeBackdrop(), e && e()
                    };
                    t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(150) : o()
                } else e && e()
            }, n.prototype.checkScrollbar = function() {
                document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
            }, n.prototype.setScrollbar = function() {
                var t = parseInt(this.$body.css("padding-right") || 0, 10);
                this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth)
            }, n.prototype.resetScrollbar = function() {
                this.$body.css("padding-right", "")
            }, n.prototype.measureScrollbar = function() {
                var t = document.createElement("div");
                t.className = "modal-scrollbar-measure", this.$body.append(t);
                var e = t.offsetWidth - t.clientWidth;
                return this.$body[0].removeChild(t), e
            };
            var i = t.fn.modal;
            t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function() {
                return t.fn.modal = i, this
            }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
                var i = t(this),
                    r = i.attr("href"),
                    o = t(i.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
                    s = o.data("bs.modal") ? "toggle" : t.extend({
                        remote: !/#/.test(r) && r
                    }, o.data(), i.data());
                i.is("a") && n.preventDefault(), o.one("show.bs.modal", function(t) {
                    t.isDefaultPrevented() || o.one("hidden.bs.modal", function() {
                        i.is(":visible") && i.trigger("focus")
                    })
                }), e.call(o, s, this)
            })
        }(jQuery),
    /* ========================================================================
     * Bootstrap: tooltip.js v3.2.0
     * http://getbootstrap.com/javascript/#tooltip
     * Inspired by the original jQuery.tipsy by Jason Frame
     * ========================================================================
     * Copyright 2011-2014 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */
    +
        function(t) {
            "use strict";

            function e(e) {
                return this.each(function() {
                    var i = t(this),
                        r = i.data("bs.tooltip"),
                        o = "object" == typeof e && e;
                    (r || "destroy" != e) && (r || i.data("bs.tooltip", r = new n(this, o)), "string" == typeof e && r[e]())
                })
            }
            var n = function(t, e) {
                this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
            };
            n.VERSION = "3.2.0", n.DEFAULTS = {
                animation: !0,
                placement: "top",
                selector: !1,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                container: !1,
                viewport: {
                    selector: "body",
                    padding: 0
                }
            }, n.prototype.init = function(e, n, i) {
                this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport);
                for (var r = this.options.trigger.split(" "), o = r.length; o--;) {
                    var s = r[o];
                    if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
                    else if ("manual" != s) {
                        var a = "hover" == s ? "mouseenter" : "focusin",
                            l = "hover" == s ? "mouseleave" : "focusout";
                        this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
                    }
                }
                this.options.selector ? this._options = t.extend({}, this.options, {
                    trigger: "manual",
                    selector: ""
                }) : this.fixTitle()
            }, n.prototype.getDefaults = function() {
                return n.DEFAULTS
            }, n.prototype.getOptions = function(e) {
                return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), e
            }, n.prototype.getDelegateOptions = function() {
                var e = {},
                    n = this.getDefaults();
                return this._options && t.each(this._options, function(t, i) {
                    n[t] != i && (e[t] = i)
                }), e
            }, n.prototype.enter = function(e) {
                var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
                return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
                    "in" == n.hoverState && n.show()
                }, n.options.delay.show)) : n.show()
            }, n.prototype.leave = function(e) {
                var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
                return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function() {
                    "out" == n.hoverState && n.hide()
                }, n.options.delay.hide)) : n.hide()
            }, n.prototype.show = function() {
                var e = t.Event("show.bs." + this.type);
                if (this.hasContent() && this.enabled) {
                    this.$element.trigger(e);
                    var n = t.contains(document.documentElement, this.$element[0]);
                    if (e.isDefaultPrevented() || !n) return;
                    var i = this,
                        r = this.tip(),
                        o = this.getUID(this.type);
                    this.setContent(), r.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && r.addClass("fade");
                    var s = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                        a = /\s?auto?\s?/i,
                        l = a.test(s);
                    l && (s = s.replace(a, "") || "top"), r.detach().css({
                        top: 0,
                        left: 0,
                        display: "block"
                    }).addClass(s).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
                    var u = this.getPosition(),
                        c = r[0].offsetWidth,
                        h = r[0].offsetHeight;
                    if (l) {
                        var f = s,
                            d = this.$element.parent(),
                            p = this.getPosition(d);
                        s = "bottom" == s && u.top + u.height + h - p.scroll > p.height ? "top" : "top" == s && u.top - p.scroll - h < 0 ? "bottom" : "right" == s && u.right + c > p.width ? "left" : "left" == s && u.left - c < p.left ? "right" : s, r.removeClass(f).addClass(s)
                    }
                    var m = this.getCalculatedOffset(s, u, c, h);
                    this.applyPlacement(m, s);
                    var g = function() {
                        i.$element.trigger("shown.bs." + i.type), i.hoverState = null
                    };
                    t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", g).emulateTransitionEnd(150) : g()
                }
            }, n.prototype.applyPlacement = function(e, n) {
                var i = this.tip(),
                    r = i[0].offsetWidth,
                    o = i[0].offsetHeight,
                    s = parseInt(i.css("margin-top"), 10),
                    a = parseInt(i.css("margin-left"), 10);
                isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top = e.top + s, e.left = e.left + a, t.offset.setOffset(i[0], t.extend({
                    using: function(t) {
                        i.css({
                            top: Math.round(t.top),
                            left: Math.round(t.left)
                        })
                    }
                }, e), 0), i.addClass("in");
                var l = i[0].offsetWidth,
                    u = i[0].offsetHeight;
                "top" == n && u != o && (e.top = e.top + o - u);
                var c = this.getViewportAdjustedDelta(n, e, l, u);
                c.left ? e.left += c.left : e.top += c.top;
                var h = c.left ? 2 * c.left - r + l : 2 * c.top - o + u,
                    f = c.left ? "left" : "top",
                    d = c.left ? "offsetWidth" : "offsetHeight";
                i.offset(e), this.replaceArrow(h, i[0][d], f)
            }, n.prototype.replaceArrow = function(t, e, n) {
                this.arrow().css(n, t ? 50 * (1 - t / e) + "%" : "")
            }, n.prototype.setContent = function() {
                var t = this.tip(),
                    e = this.getTitle();
                t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
            }, n.prototype.hide = function() {
                function e() {
                    "in" != n.hoverState && i.detach(), n.$element.trigger("hidden.bs." + n.type)
                }
                var n = this,
                    i = this.tip(),
                    r = t.Event("hide.bs." + this.type);
                return this.$element.removeAttr("aria-describedby"), this.$element.trigger(r), r.isDefaultPrevented() ? void 0 : (i.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", e).emulateTransitionEnd(150) : e(), this.hoverState = null, this)
            }, n.prototype.fixTitle = function() {
                var t = this.$element;
                (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
            }, n.prototype.hasContent = function() {
                return this.getTitle()
            }, n.prototype.getPosition = function(e) {
                e = e || this.$element;
                var n = e[0],
                    i = "BODY" == n.tagName;
                return t.extend({}, "function" == typeof n.getBoundingClientRect ? n.getBoundingClientRect() : null, {
                    scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop(),
                    width: i ? t(window).width() : e.outerWidth(),
                    height: i ? t(window).height() : e.outerHeight()
                }, i ? {
                    top: 0,
                    left: 0
                } : e.offset())
            }, n.prototype.getCalculatedOffset = function(t, e, n, i) {
                return "bottom" == t ? {
                    top: e.top + e.height,
                    left: e.left + e.width / 2 - n / 2
                } : "top" == t ? {
                    top: e.top - i,
                    left: e.left + e.width / 2 - n / 2
                } : "left" == t ? {
                    top: e.top + e.height / 2 - i / 2,
                    left: e.left - n
                } : {
                    top: e.top + e.height / 2 - i / 2,
                    left: e.left + e.width
                }
            }, n.prototype.getViewportAdjustedDelta = function(t, e, n, i) {
                var r = {
                    top: 0,
                    left: 0
                };
                if (!this.$viewport) return r;
                var o = this.options.viewport && this.options.viewport.padding || 0,
                    s = this.getPosition(this.$viewport);
                if (/right|left/.test(t)) {
                    var a = e.top - o - s.scroll,
                        l = e.top + o - s.scroll + i;
                    a < s.top ? r.top = s.top - a : l > s.top + s.height && (r.top = s.top + s.height - l)
                } else {
                    var u = e.left - o,
                        c = e.left + o + n;
                    u < s.left ? r.left = s.left - u : c > s.width && (r.left = s.left + s.width - c)
                }
                return r
            }, n.prototype.getTitle = function() {
                var t, e = this.$element,
                    n = this.options;
                return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
            }, n.prototype.getUID = function(t) {
                do t += ~~ (1e6 * Math.random());
                while (document.getElementById(t));
                return t
            }, n.prototype.tip = function() {
                return this.$tip = this.$tip || t(this.options.template)
            }, n.prototype.arrow = function() {
                return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
            }, n.prototype.validate = function() {
                this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
            }, n.prototype.enable = function() {
                this.enabled = !0
            }, n.prototype.disable = function() {
                this.enabled = !1
            }, n.prototype.toggleEnabled = function() {
                this.enabled = !this.enabled
            }, n.prototype.toggle = function(e) {
                var n = this;
                e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
            }, n.prototype.destroy = function() {
                clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
            };
            var i = t.fn.tooltip;
            t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function() {
                return t.fn.tooltip = i, this
            }
        }(jQuery),
    /* ========================================================================
     * Bootstrap: popover.js v3.2.0
     * http://getbootstrap.com/javascript/#popovers
     * ========================================================================
     * Copyright 2011-2014 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */
    +
        function(t) {
            "use strict";

            function e(e) {
                return this.each(function() {
                    var i = t(this),
                        r = i.data("bs.popover"),
                        o = "object" == typeof e && e;
                    (r || "destroy" != e) && (r || i.data("bs.popover", r = new n(this, o)), "string" == typeof e && r[e]())
                })
            }
            var n = function(t, e) {
                this.init("popover", t, e)
            };
            if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
            n.VERSION = "3.2.0", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
            }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
                return n.DEFAULTS
            }, n.prototype.setContent = function() {
                var t = this.tip(),
                    e = this.getTitle(),
                    n = this.getContent();
                t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").empty()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
            }, n.prototype.hasContent = function() {
                return this.getTitle() || this.getContent()
            }, n.prototype.getContent = function() {
                var t = this.$element,
                    e = this.options;
                return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
            }, n.prototype.arrow = function() {
                return this.$arrow = this.$arrow || this.tip().find(".arrow")
            }, n.prototype.tip = function() {
                return this.$tip || (this.$tip = t(this.options.template)), this.$tip
            };
            var i = t.fn.popover;
            t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function() {
                return t.fn.popover = i, this
            }
        }(jQuery),
    /* ========================================================================
     * Bootstrap: scrollspy.js v3.2.0
     * http://getbootstrap.com/javascript/#scrollspy
     * ========================================================================
     * Copyright 2011-2014 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */
    +
        function(t) {
            "use strict";

            function e(n, i) {
                var r = t.proxy(this.process, this);
                this.$body = t("body"), this.$scrollElement = t(t(n).is("body") ? window : n), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", r), this.refresh(), this.process()
            }
            function n(n) {
                return this.each(function() {
                    var i = t(this),
                        r = i.data("bs.scrollspy"),
                        o = "object" == typeof n && n;
                    r || i.data("bs.scrollspy", r = new e(this, o)), "string" == typeof n && r[n]()
                })
            }
            e.VERSION = "3.2.0", e.DEFAULTS = {
                offset: 10
            }, e.prototype.getScrollHeight = function() {
                return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
            }, e.prototype.refresh = function() {
                var e = "offset",
                    n = 0;
                t.isWindow(this.$scrollElement[0]) || (e = "position", n = this.$scrollElement.scrollTop()), this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight();
                var i = this;
                this.$body.find(this.selector).map(function() {
                    var i = t(this),
                        r = i.data("target") || i.attr("href"),
                        o = /^#./.test(r) && t(r);
                    return o && o.length && o.is(":visible") && [
                            [o[e]().top + n, r]
                        ] || null
                }).sort(function(t, e) {
                    return t[0] - e[0]
                }).each(function() {
                    i.offsets.push(this[0]), i.targets.push(this[1])
                })
            }, e.prototype.process = function() {
                var t, e = this.$scrollElement.scrollTop() + this.options.offset,
                    n = this.getScrollHeight(),
                    i = this.options.offset + n - this.$scrollElement.height(),
                    r = this.offsets,
                    o = this.targets,
                    s = this.activeTarget;
                if (this.scrollHeight != n && this.refresh(), e >= i) return s != (t = o[o.length - 1]) && this.activate(t);
                if (s && e <= r[0]) return s != (t = o[0]) && this.activate(t);
                for (t = r.length; t--;) s != o[t] && e >= r[t] && (!r[t + 1] || e <= r[t + 1]) && this.activate(o[t])
            }, e.prototype.activate = function(e) {
                this.activeTarget = e, t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
                var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                    i = t(n).parents("li").addClass("active");
                i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
            };
            var i = t.fn.scrollspy;
            t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
                return t.fn.scrollspy = i, this
            }, t(window).on("load.bs.scrollspy.data-api", function() {
                t('[data-spy="scroll"]').each(function() {
                    var e = t(this);
                    n.call(e, e.data())
                })
            })
        }(jQuery),
    /* ========================================================================
     * Bootstrap: tab.js v3.2.0
     * http://getbootstrap.com/javascript/#tabs
     * ========================================================================
     * Copyright 2011-2014 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */
    +
        function(t) {
            "use strict";

            function e(e) {
                return this.each(function() {
                    var i = t(this),
                        r = i.data("bs.tab");
                    r || i.data("bs.tab", r = new n(this)), "string" == typeof e && r[e]()
                })
            }
            var n = function(e) {
                this.element = t(e)
            };
            n.VERSION = "3.2.0", n.prototype.show = function() {
                var e = this.element,
                    n = e.closest("ul:not(.dropdown-menu)"),
                    i = e.data("target");
                if (i || (i = e.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
                    var r = n.find(".active:last a")[0],
                        o = t.Event("show.bs.tab", {
                            relatedTarget: r
                        });
                    if (e.trigger(o), !o.isDefaultPrevented()) {
                        var s = t(i);
                        this.activate(e.closest("li"), n), this.activate(s, s.parent(), function() {
                            e.trigger({
                                type: "shown.bs.tab",
                                relatedTarget: r
                            })
                        })
                    }
                }
            }, n.prototype.activate = function(e, n, i) {
                function r() {
                    o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), i && i()
                }
                var o = n.find("> .active"),
                    s = i && t.support.transition && o.hasClass("fade");
                s ? o.one("bsTransitionEnd", r).emulateTransitionEnd(150) : r(), o.removeClass("in")
            };
            var i = t.fn.tab;
            t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function() {
                return t.fn.tab = i, this
            }, t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(n) {
                n.preventDefault(), e.call(t(this), "show")
            })
        }(jQuery),
    /* ========================================================================
     * Bootstrap: affix.js v3.2.0
     * http://getbootstrap.com/javascript/#affix
     * ========================================================================
     * Copyright 2011-2014 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     * ======================================================================== */
    +
        function(t) {
            "use strict";

            function e(e) {
                return this.each(function() {
                    var i = t(this),
                        r = i.data("bs.affix"),
                        o = "object" == typeof e && e;
                    r || i.data("bs.affix", r = new n(this, o)), "string" == typeof e && r[e]()
                })
            }
            var n = function(e, i) {
                this.options = t.extend({}, n.DEFAULTS, i), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
            };
            n.VERSION = "3.2.0", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
                offset: 0,
                target: window
            }, n.prototype.getPinnedOffset = function() {
                if (this.pinnedOffset) return this.pinnedOffset;
                this.$element.removeClass(n.RESET).addClass("affix");
                var t = this.$target.scrollTop(),
                    e = this.$element.offset();
                return this.pinnedOffset = e.top - t
            }, n.prototype.checkPositionWithEventLoop = function() {
                setTimeout(t.proxy(this.checkPosition, this), 1)
            }, n.prototype.checkPosition = function() {
                if (this.$element.is(":visible")) {
                    var e = t(document).height(),
                        i = this.$target.scrollTop(),
                        r = this.$element.offset(),
                        o = this.options.offset,
                        s = o.top,
                        a = o.bottom;
                    "object" != typeof o && (a = s = o), "function" == typeof s && (s = o.top(this.$element)), "function" == typeof a && (a = o.bottom(this.$element));
                    var l = null != this.unpin && i + this.unpin <= r.top ? !1 : null != a && r.top + this.$element.height() >= e - a ? "bottom" : null != s && s >= i ? "top" : !1;
                    if (this.affixed !== l) {
                        null != this.unpin && this.$element.css("top", "");
                        var u = "affix" + (l ? "-" + l : ""),
                            c = t.Event(u + ".bs.affix");
                        this.$element.trigger(c), c.isDefaultPrevented() || (this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(u).trigger(t.Event(u.replace("affix", "affixed"))), "bottom" == l && this.$element.offset({
                            top: e - this.$element.height() - a
                        }))
                    }
                }
            };
            var i = t.fn.affix;
            t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function() {
                return t.fn.affix = i, this
            }, t(window).on("load", function() {
                t('[data-spy="affix"]').each(function() {
                    var n = t(this),
                        i = n.data();
                    i.offset = i.offset || {}, i.offsetBottom && (i.offset.bottom = i.offsetBottom), i.offsetTop && (i.offset.top = i.offsetTop), e.call(n, i)
                })
            })
        }(jQuery),
    /*
     *  jQuery OwlCarousel v1.3.3
     *
     *  Copyright (c) 2013 Bartosz Wojciechowski
     *  http://www.owlgraphic.com/owlcarousel/
     *
     *  Licensed under MIT
     *
     */
"function" != typeof Object.create && (Object.create = function(t) {
    function e() {}
    return e.prototype = t, new e
}), function(t, e, n) {
    var i = {
        init: function(e, n) {
            var i = this;
            i.$elem = t(n), i.options = t.extend({}, t.fn.owlCarousel.options, i.$elem.data(), e), i.userOptions = e, i.loadContent()
        },
        loadContent: function() {
            function e(t) {
                var e, n = "";
                if ("function" == typeof i.options.jsonSuccess) i.options.jsonSuccess.apply(this, [t]);
                else {
                    for (e in t.owl) t.owl.hasOwnProperty(e) && (n += t.owl[e].item);
                    i.$elem.html(n)
                }
                i.logIn()
            }
            var n, i = this;
            "function" == typeof i.options.beforeInit && i.options.beforeInit.apply(this, [i.$elem]), "string" == typeof i.options.jsonPath ? (n = i.options.jsonPath, t.getJSON(n, e)) : i.logIn()
        },
        logIn: function() {
            var t = this;
            t.$elem.data({
                "owl-originalStyles": t.$elem.attr("style"),
                "owl-originalClasses": t.$elem.attr("class")
            }), t.$elem.css({
                opacity: 0
            }), t.orignalItems = t.options.items, t.checkBrowser(), t.wrapperWidth = 0, t.checkVisible = null, t.setVars()
        },
        setVars: function() {
            var t = this;
            return 0 === t.$elem.children().length ? !1 : (t.baseClass(), t.eventTypes(), t.$userItems = t.$elem.children(), t.itemsAmount = t.$userItems.length, t.wrapItems(), t.$owlItems = t.$elem.find(".owl-item"), t.$owlWrapper = t.$elem.find(".owl-wrapper"), t.playDirection = "next", t.prevItem = 0, t.prevArr = [0], t.currentItem = 0, t.customEvents(), void t.onStartup())
        },
        onStartup: function() {
            var t = this;
            t.updateItems(), t.calculateAll(), t.buildControls(), t.updateControls(), t.response(), t.moveEvents(), t.stopOnHover(), t.owlStatus(), t.options.transitionStyle !== !1 && t.transitionTypes(t.options.transitionStyle), t.options.autoPlay === !0 && (t.options.autoPlay = 5e3), t.play(), t.$elem.find(".owl-wrapper").css("display", "block"), t.$elem.is(":visible") ? t.$elem.css("opacity", 1) : t.watchVisibility(), t.onstartup = !1, t.eachMoveUpdate(), "function" == typeof t.options.afterInit && t.options.afterInit.apply(this, [t.$elem])
        },
        eachMoveUpdate: function() {
            var t = this;
            t.options.lazyLoad === !0 && t.lazyLoad(), t.options.autoHeight === !0 && t.autoHeight(), t.onVisibleItems(), "function" == typeof t.options.afterAction && t.options.afterAction.apply(this, [t.$elem])
        },
        updateVars: function() {
            var t = this;
            "function" == typeof t.options.beforeUpdate && t.options.beforeUpdate.apply(this, [t.$elem]), t.watchVisibility(), t.updateItems(), t.calculateAll(), t.updatePosition(), t.updateControls(), t.eachMoveUpdate(), "function" == typeof t.options.afterUpdate && t.options.afterUpdate.apply(this, [t.$elem])
        },
        reload: function() {
            var t = this;
            e.setTimeout(function() {
                t.updateVars()
            }, 0)
        },
        watchVisibility: function() {
            var t = this;
            return t.$elem.is(":visible") !== !1 ? !1 : (t.$elem.css({
                opacity: 0
            }), e.clearInterval(t.autoPlayInterval), e.clearInterval(t.checkVisible), void(t.checkVisible = e.setInterval(function() {
                t.$elem.is(":visible") && (t.reload(), t.$elem.animate({
                    opacity: 1
                }, 200), e.clearInterval(t.checkVisible))
            }, 500)))
        },
        wrapItems: function() {
            var t = this;
            t.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'), t.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'), t.wrapperOuter = t.$elem.find(".owl-wrapper-outer"), t.$elem.css("display", "block")
        },
        baseClass: function() {
            var t = this,
                e = t.$elem.hasClass(t.options.baseClass),
                n = t.$elem.hasClass(t.options.theme);
            e || t.$elem.addClass(t.options.baseClass), n || t.$elem.addClass(t.options.theme)
        },
        updateItems: function() {
            var e, n, i = this;
            if (i.options.responsive === !1) return !1;
            if (i.options.singleItem === !0) return i.options.items = i.orignalItems = 1, i.options.itemsCustom = !1, i.options.itemsDesktop = !1, i.options.itemsDesktopSmall = !1, i.options.itemsTablet = !1, i.options.itemsTabletSmall = !1, i.options.itemsMobile = !1, !1;
            if (e = t(i.options.responsiveBaseWidth).width(), e > (i.options.itemsDesktop[0] || i.orignalItems) && (i.options.items = i.orignalItems), i.options.itemsCustom !== !1) for (i.options.itemsCustom.sort(function(t, e) {
                return t[0] - e[0]
            }), n = 0; n < i.options.itemsCustom.length; n += 1) i.options.itemsCustom[n][0] <= e && (i.options.items = i.options.itemsCustom[n][1]);
            else e <= i.options.itemsDesktop[0] && i.options.itemsDesktop !== !1 && (i.options.items = i.options.itemsDesktop[1]), e <= i.options.itemsDesktopSmall[0] && i.options.itemsDesktopSmall !== !1 && (i.options.items = i.options.itemsDesktopSmall[1]), e <= i.options.itemsTablet[0] && i.options.itemsTablet !== !1 && (i.options.items = i.options.itemsTablet[1]), e <= i.options.itemsTabletSmall[0] && i.options.itemsTabletSmall !== !1 && (i.options.items = i.options.itemsTabletSmall[1]), e <= i.options.itemsMobile[0] && i.options.itemsMobile !== !1 && (i.options.items = i.options.itemsMobile[1]);
            i.options.items > i.itemsAmount && i.options.itemsScaleUp === !0 && (i.options.items = i.itemsAmount)
        },
        response: function() {
            var n, i, r = this;
            return r.options.responsive !== !0 ? !1 : (i = t(e).width(), r.resizer = function() {
                t(e).width() !== i && (r.options.autoPlay !== !1 && e.clearInterval(r.autoPlayInterval), e.clearTimeout(n), n = e.setTimeout(function() {
                    i = t(e).width(), r.updateVars()
                }, r.options.responsiveRefreshRate))
            }, void t(e).resize(r.resizer))
        },
        updatePosition: function() {
            var t = this;
            t.jumpTo(t.currentItem), t.options.autoPlay !== !1 && t.checkAp()
        },
        appendItemsSizes: function() {
            var e = this,
                n = 0,
                i = e.itemsAmount - e.options.items;
            e.$owlItems.each(function(r) {
                var o = t(this);
                o.css({
                    width: e.itemWidth
                }).data("owl-item", Number(r)), (r % e.options.items === 0 || r === i) && (r > i || (n += 1)), o.data("owl-roundPages", n)
            })
        },
        appendWrapperSizes: function() {
            var t = this,
                e = t.$owlItems.length * t.itemWidth;
            t.$owlWrapper.css({
                width: 2 * e,
                left: 0
            }), t.appendItemsSizes()
        },
        calculateAll: function() {
            var t = this;
            t.calculateWidth(), t.appendWrapperSizes(), t.loops(), t.max()
        },
        calculateWidth: function() {
            var t = this;
            t.itemWidth = Math.round(t.$elem.width() / t.options.items)
        },
        max: function() {
            var t = this,
                e = -1 * (t.itemsAmount * t.itemWidth - t.options.items * t.itemWidth);
            return t.options.items > t.itemsAmount ? (t.maximumItem = 0, e = 0, t.maximumPixels = 0) : (t.maximumItem = t.itemsAmount - t.options.items, t.maximumPixels = e), e
        },
        min: function() {
            return 0
        },
        loops: function() {
            var e, n, i, r = this,
                o = 0,
                s = 0;
            for (r.positionsInArray = [0], r.pagesInArray = [], e = 0; e < r.itemsAmount; e += 1) s += r.itemWidth, r.positionsInArray.push(-s), r.options.scrollPerPage === !0 && (n = t(r.$owlItems[e]), i = n.data("owl-roundPages"), i !== o && (r.pagesInArray[o] = r.positionsInArray[e], o = i))
        },
        buildControls: function() {
            var e = this;
            (e.options.navigation === !0 || e.options.pagination === !0) && (e.owlControls = t('<div class="owl-controls"/>').toggleClass("clickable", !e.browser.isTouch).appendTo(e.$elem)), e.options.pagination === !0 && e.buildPagination(), e.options.navigation === !0 && e.buildButtons()
        },
        buildButtons: function() {
            var e = this,
                n = t('<div class="owl-buttons"/>');
            e.owlControls.append(n), e.buttonPrev = t("<div/>", {
                "class": "owl-prev",
                html: e.options.navigationText[0] || ""
            }), e.buttonNext = t("<div/>", {
                "class": "owl-next",
                html: e.options.navigationText[1] || ""
            }), n.append(e.buttonPrev).append(e.buttonNext), n.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(t) {
                t.preventDefault()
            }), n.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(n) {
                n.preventDefault(), t(this).hasClass("owl-next") ? e.next() : e.prev()
            })
        },
        buildPagination: function() {
            var e = this;
            e.paginationWrapper = t('<div class="owl-pagination"/>'), e.owlControls.append(e.paginationWrapper), e.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(n) {
                n.preventDefault(), Number(t(this).data("owl-page")) !== e.currentItem && e.goTo(Number(t(this).data("owl-page")), !0)
            })
        },
        updatePagination: function() {
            var e, n, i, r, o, s, a = this;
            if (a.options.pagination === !1) return !1;
            for (a.paginationWrapper.html(""), e = 0, n = a.itemsAmount - a.itemsAmount % a.options.items, r = 0; r < a.itemsAmount; r += 1) r % a.options.items === 0 && (e += 1, n === r && (i = a.itemsAmount - a.options.items), o = t("<div/>", {
                "class": "owl-page"
            }), s = t("<span></span>", {
                text: a.options.paginationNumbers === !0 ? e : "",
                "class": a.options.paginationNumbers === !0 ? "owl-numbers" : ""
            }), o.append(s), o.data("owl-page", n === r ? i : r), o.data("owl-roundPages", e), a.paginationWrapper.append(o));
            a.checkPagination()
        },
        checkPagination: function() {
            var e = this;
            return e.options.pagination === !1 ? !1 : void e.paginationWrapper.find(".owl-page").each(function() {
                t(this).data("owl-roundPages") === t(e.$owlItems[e.currentItem]).data("owl-roundPages") && (e.paginationWrapper.find(".owl-page").removeClass("active"), t(this).addClass("active"))
            })
        },
        checkNavigation: function() {
            var t = this;
            return t.options.navigation === !1 ? !1 : void(t.options.rewindNav === !1 && (0 === t.currentItem && 0 === t.maximumItem ? (t.buttonPrev.addClass("disabled"), t.buttonNext.addClass("disabled")) : 0 === t.currentItem && 0 !== t.maximumItem ? (t.buttonPrev.addClass("disabled"), t.buttonNext.removeClass("disabled")) : t.currentItem === t.maximumItem ? (t.buttonPrev.removeClass("disabled"), t.buttonNext.addClass("disabled")) : 0 !== t.currentItem && t.currentItem !== t.maximumItem && (t.buttonPrev.removeClass("disabled"), t.buttonNext.removeClass("disabled"))))
        },
        updateControls: function() {
            var t = this;
            t.updatePagination(), t.checkNavigation(), t.owlControls && (t.options.items >= t.itemsAmount ? t.owlControls.hide() : t.owlControls.show())
        },
        destroyControls: function() {
            var t = this;
            t.owlControls && t.owlControls.remove()
        },
        next: function(t) {
            var e = this;
            if (e.isTransition) return !1;
            if (e.currentItem += e.options.scrollPerPage === !0 ? e.options.items : 1, e.currentItem > e.maximumItem + (e.options.scrollPerPage === !0 ? e.options.items - 1 : 0)) {
                if (e.options.rewindNav !== !0) return e.currentItem = e.maximumItem, !1;
                e.currentItem = 0, t = "rewind"
            }
            e.goTo(e.currentItem, t)
        },
        prev: function(t) {
            var e = this;
            if (e.isTransition) return !1;
            if (e.options.scrollPerPage === !0 && e.currentItem > 0 && e.currentItem < e.options.items ? e.currentItem = 0 : e.currentItem -= e.options.scrollPerPage === !0 ? e.options.items : 1, e.currentItem < 0) {
                if (e.options.rewindNav !== !0) return e.currentItem = 0, !1;
                e.currentItem = e.maximumItem, t = "rewind"
            }
            e.goTo(e.currentItem, t)
        },
        goTo: function(t, n, i) {
            var r, o = this;
            return o.isTransition ? !1 : ("function" == typeof o.options.beforeMove && o.options.beforeMove.apply(this, [o.$elem]), t >= o.maximumItem ? t = o.maximumItem : 0 >= t && (t = 0), o.currentItem = o.owl.currentItem = t, o.options.transitionStyle !== !1 && "drag" !== i && 1 === o.options.items && o.browser.support3d === !0 ? (o.swapSpeed(0), o.browser.support3d === !0 ? o.transition3d(o.positionsInArray[t]) : o.css2slide(o.positionsInArray[t], 1), o.afterGo(), o.singleItemTransition(), !1) : (r = o.positionsInArray[t], o.browser.support3d === !0 ? (o.isCss3Finish = !1, n === !0 ? (o.swapSpeed("paginationSpeed"), e.setTimeout(function() {
                o.isCss3Finish = !0
            }, o.options.paginationSpeed)) : "rewind" === n ? (o.swapSpeed(o.options.rewindSpeed), e.setTimeout(function() {
                o.isCss3Finish = !0
            }, o.options.rewindSpeed)) : (o.swapSpeed("slideSpeed"), e.setTimeout(function() {
                o.isCss3Finish = !0
            }, o.options.slideSpeed)), o.transition3d(r)) : n === !0 ? o.css2slide(r, o.options.paginationSpeed) : "rewind" === n ? o.css2slide(r, o.options.rewindSpeed) : o.css2slide(r, o.options.slideSpeed), void o.afterGo()))
        },
        jumpTo: function(t) {
            var e = this;
            "function" == typeof e.options.beforeMove && e.options.beforeMove.apply(this, [e.$elem]), t >= e.maximumItem || -1 === t ? t = e.maximumItem : 0 >= t && (t = 0), e.swapSpeed(0), e.browser.support3d === !0 ? e.transition3d(e.positionsInArray[t]) : e.css2slide(e.positionsInArray[t], 1), e.currentItem = e.owl.currentItem = t, e.afterGo()
        },
        afterGo: function() {
            var t = this;
            t.prevArr.push(t.currentItem), t.prevItem = t.owl.prevItem = t.prevArr[t.prevArr.length - 2], t.prevArr.shift(0), t.prevItem !== t.currentItem && (t.checkPagination(), t.checkNavigation(), t.eachMoveUpdate(), t.options.autoPlay !== !1 && t.checkAp()), "function" == typeof t.options.afterMove && t.prevItem !== t.currentItem && t.options.afterMove.apply(this, [t.$elem])
        },
        stop: function() {
            var t = this;
            t.apStatus = "stop", e.clearInterval(t.autoPlayInterval)
        },
        checkAp: function() {
            var t = this;
            "stop" !== t.apStatus && t.play()
        },
        play: function() {
            var t = this;
            return t.apStatus = "play", t.options.autoPlay === !1 ? !1 : (e.clearInterval(t.autoPlayInterval), void(t.autoPlayInterval = e.setInterval(function() {
                t.next(!0)
            }, t.options.autoPlay)))
        },
        swapSpeed: function(t) {
            var e = this;
            "slideSpeed" === t ? e.$owlWrapper.css(e.addCssSpeed(e.options.slideSpeed)) : "paginationSpeed" === t ? e.$owlWrapper.css(e.addCssSpeed(e.options.paginationSpeed)) : "string" != typeof t && e.$owlWrapper.css(e.addCssSpeed(t))
        },
        addCssSpeed: function(t) {
            return {
                "-webkit-transition": "all " + t + "ms ease",
                "-moz-transition": "all " + t + "ms ease",
                "-o-transition": "all " + t + "ms ease",
                transition: "all " + t + "ms ease"
            }
        },
        removeTransition: function() {
            return {
                "-webkit-transition": "",
                "-moz-transition": "",
                "-o-transition": "",
                transition: ""
            }
        },
        doTranslate: function(t) {
            return {
                "-webkit-transform": "translate3d(" + t + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + t + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + t + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" + t + "px, 0px, 0px)",
                transform: "translate3d(" + t + "px, 0px,0px)"
            }
        },
        transition3d: function(t) {
            var e = this;
            e.$owlWrapper.css(e.doTranslate(t))
        },
        css2move: function(t) {
            var e = this;
            e.$owlWrapper.css({
                left: t
            })
        },
        css2slide: function(t, e) {
            var n = this;
            n.isCssFinish = !1, n.$owlWrapper.stop(!0, !0).animate({
                left: t
            }, {
                duration: e || n.options.slideSpeed,
                complete: function() {
                    n.isCssFinish = !0
                }
            })
        },
        checkBrowser: function() {
            var t, i, r, o, s = this,
                a = "translate3d(0px, 0px, 0px)",
                l = n.createElement("div"),
                u = n.documentElement.style;
            l.style.cssText = "  -moz-transform:" + a + "; -ms-transform:" + a + "; -o-transform:" + a + "; -webkit-transform:" + a + "; transform:" + a, t = /translate3d\(0px, 0px, 0px\)/g, i = l.style.cssText.match(t), r = void 0 !== u.webkitTransition || void 0 !== u.MozTransition || void 0 !== u.OTransition || void 0 !== u.transition, o = "ontouchstart" in e || e.navigator.msMaxTouchPoints, s.browser = {
                support3d: r,
                isTouch: o
            }
        },
        moveEvents: function() {
            var t = this;
            (t.options.mouseDrag !== !1 || t.options.touchDrag !== !1) && (t.gestures(), t.disabledEvents())
        },
        eventTypes: function() {
            var t = this,
                e = ["s", "e", "x"];
            t.ev_types = {}, t.options.mouseDrag === !0 && t.options.touchDrag === !0 ? e = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : t.options.mouseDrag === !1 && t.options.touchDrag === !0 ? e = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : t.options.mouseDrag === !0 && t.options.touchDrag === !1 && (e = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]), t.ev_types.start = e[0], t.ev_types.move = e[1], t.ev_types.end = e[2]
        },
        disabledEvents: function() {
            var e = this;
            e.$elem.on("dragstart.owl", function(t) {
                t.preventDefault()
            }), e.$elem.on("mousedown.disableTextSelect", function(e) {
                return t(e.target).is("input, textarea, select, option")
            })
        },
        gestures: function() {
            function i(t) {
                if (void 0 !== t.touches) return {
                    x: t.touches[0].pageX,
                    y: t.touches[0].pageY
                };
                if (void 0 === t.touches) {
                    if (void 0 !== t.pageX) return {
                        x: t.pageX,
                        y: t.pageY
                    };
                    if (void 0 === t.pageX) return {
                        x: t.clientX,
                        y: t.clientY
                    }
                }
            }
            function r(e) {
                "on" === e ? (t(n).on(l.ev_types.move, s), t(n).on(l.ev_types.end, a)) : "off" === e && (t(n).off(l.ev_types.move), t(n).off(l.ev_types.end))
            }
            function o(n) {
                var o, s = n.originalEvent || n || e.event;
                if (3 === s.which) return !1;
                if (!(l.itemsAmount <= l.options.items)) {
                    if (l.isCssFinish === !1 && !l.options.dragBeforeAnimFinish) return !1;
                    if (l.isCss3Finish === !1 && !l.options.dragBeforeAnimFinish) return !1;
                    l.options.autoPlay !== !1 && e.clearInterval(l.autoPlayInterval), l.browser.isTouch === !0 || l.$owlWrapper.hasClass("grabbing") || l.$owlWrapper.addClass("grabbing"), l.newPosX = 0, l.newRelativeX = 0, t(this).css(l.removeTransition()), o = t(this).position(), u.relativePos = o.left, u.offsetX = i(s).x - o.left, u.offsetY = i(s).y - o.top, r("on"), u.sliding = !1, u.targetElement = s.target || s.srcElement
                }
            }
            function s(r) {
                var o, s, a = r.originalEvent || r || e.event;
                l.newPosX = i(a).x - u.offsetX, l.newPosY = i(a).y - u.offsetY, l.newRelativeX = l.newPosX - u.relativePos, "function" == typeof l.options.startDragging && u.dragging !== !0 && 0 !== l.newRelativeX && (u.dragging = !0, l.options.startDragging.apply(l, [l.$elem])), (l.newRelativeX > 8 || l.newRelativeX < -8) && l.browser.isTouch === !0 && (void 0 !== a.preventDefault ? a.preventDefault() : a.returnValue = !1, u.sliding = !0), (l.newPosY > 10 || l.newPosY < -10) && u.sliding === !1 && t(n).off("touchmove.owl"), o = function() {
                    return l.newRelativeX / 5
                }, s = function() {
                    return l.maximumPixels + l.newRelativeX / 5
                }, l.newPosX = Math.max(Math.min(l.newPosX, o()), s()), l.browser.support3d === !0 ? l.transition3d(l.newPosX) : l.css2move(l.newPosX)
            }
            function a(n) {
                var i, o, s, a = n.originalEvent || n || e.event;
                a.target = a.target || a.srcElement, u.dragging = !1, l.browser.isTouch !== !0 && l.$owlWrapper.removeClass("grabbing"), l.newRelativeX < 0 ? l.dragDirection = l.owl.dragDirection = "left" : l.dragDirection = l.owl.dragDirection = "right", 0 !== l.newRelativeX && (i = l.getNewPosition(), l.goTo(i, !1, "drag"), u.targetElement === a.target && l.browser.isTouch !== !0 && (t(a.target).on("click.disable", function(e) {
                    e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault(), t(e.target).off("click.disable")
                }), o = t._data(a.target, "events").click, s = o.pop(), o.splice(0, 0, s))), r("off")
            }
            var l = this,
                u = {
                    offsetX: 0,
                    offsetY: 0,
                    baseElWidth: 0,
                    relativePos: 0,
                    position: null,
                    minSwipe: null,
                    maxSwipe: null,
                    sliding: null,
                    dargging: null,
                    targetElement: null
                };
            l.isCssFinish = !0, l.$elem.on(l.ev_types.start, ".owl-wrapper", o)
        },
        getNewPosition: function() {
            var t = this,
                e = t.closestItem();
            return e > t.maximumItem ? (t.currentItem = t.maximumItem, e = t.maximumItem) : t.newPosX >= 0 && (e = 0, t.currentItem = 0), e
        },
        closestItem: function() {
            var e = this,
                n = e.options.scrollPerPage === !0 ? e.pagesInArray : e.positionsInArray,
                i = e.newPosX,
                r = null;
            return t.each(n, function(o, s) {
                i - e.itemWidth / 20 > n[o + 1] && i - e.itemWidth / 20 < s && "left" === e.moveDirection() ? (r = s, e.options.scrollPerPage === !0 ? e.currentItem = t.inArray(r, e.positionsInArray) : e.currentItem = o) : i + e.itemWidth / 20 < s && i + e.itemWidth / 20 > (n[o + 1] || n[o] - e.itemWidth) && "right" === e.moveDirection() && (e.options.scrollPerPage === !0 ? (r = n[o + 1] || n[n.length - 1], e.currentItem = t.inArray(r, e.positionsInArray)) : (r = n[o + 1], e.currentItem = o + 1))
            }), e.currentItem
        },
        moveDirection: function() {
            var t, e = this;
            return e.newRelativeX < 0 ? (t = "right", e.playDirection = "next") : (t = "left", e.playDirection = "prev"), t
        },
        customEvents: function() {
            var t = this;
            t.$elem.on("owl.next", function() {
                t.next()
            }), t.$elem.on("owl.prev", function() {
                t.prev()
            }), t.$elem.on("owl.play", function(e, n) {
                t.options.autoPlay = n, t.play(), t.hoverStatus = "play"
            }), t.$elem.on("owl.stop", function() {
                t.stop(), t.hoverStatus = "stop"
            }), t.$elem.on("owl.goTo", function(e, n) {
                t.goTo(n)
            }), t.$elem.on("owl.jumpTo", function(e, n) {
                t.jumpTo(n)
            })
        },
        stopOnHover: function() {
            var t = this;
            t.options.stopOnHover === !0 && t.browser.isTouch !== !0 && t.options.autoPlay !== !1 && (t.$elem.on("mouseover", function() {
                t.stop()
            }), t.$elem.on("mouseout", function() {
                "stop" !== t.hoverStatus && t.play()
            }))
        },
        lazyLoad: function() {
            var e, n, i, r, o, s = this;
            if (s.options.lazyLoad === !1) return !1;
            for (e = 0; e < s.itemsAmount; e += 1) n = t(s.$owlItems[e]), "loaded" !== n.data("owl-loaded") && (i = n.data("owl-item"), r = n.find(".lazyOwl"), "string" == typeof r.data("src") ? (void 0 === n.data("owl-loaded") && (r.hide(), n.addClass("loading").data("owl-loaded", "checked")), o = s.options.lazyFollow === !0 ? i >= s.currentItem : !0, o && i < s.currentItem + s.options.items && r.length && r.each(function() {
                s.lazyPreload(n, t(this))
            })) : n.data("owl-loaded", "loaded"))
        },
        lazyPreload: function(t, n) {
            function i() {
                t.data("owl-loaded", "loaded").removeClass("loading"), n.removeAttr("data-src"), "fade" === s.options.lazyEffect ? n.fadeIn(400) : n.show(), "function" == typeof s.options.afterLazyLoad && s.options.afterLazyLoad.apply(this, [s.$elem])
            }
            function r() {
                a += 1, s.completeImg(n.get(0)) || o === !0 ? i() : 100 >= a ? e.setTimeout(r, 100) : i()
            }
            var o, s = this,
                a = 0;
            "DIV" === n.prop("tagName") ? (n.css("background-image", "url(" + n.data("src") + ")"), o = !0) : n[0].src = n.data("src"), r()
        },
        autoHeight: function() {
            function n() {
                var n = t(o.$owlItems[o.currentItem]).height();
                o.wrapperOuter.css("height", n + "px"), o.wrapperOuter.hasClass("autoHeight") || e.setTimeout(function() {
                    o.wrapperOuter.addClass("autoHeight")
                }, 0)
            }
            function i() {
                r += 1, o.completeImg(s.get(0)) ? n() : 100 >= r ? e.setTimeout(i, 100) : o.wrapperOuter.css("height", "")
            }
            var r, o = this,
                s = t(o.$owlItems[o.currentItem]).find("img");
            void 0 !== s.get(0) ? (r = 0, i()) : n()
        },
        completeImg: function(t) {
            var e;
            return t.complete ? (e = typeof t.naturalWidth, "undefined" !== e && 0 === t.naturalWidth ? !1 : !0) : !1
        },
        onVisibleItems: function() {
            var e, n = this;
            for (n.options.addClassActive === !0 && n.$owlItems.removeClass("active"), n.visibleItems = [], e = n.currentItem; e < n.currentItem + n.options.items; e += 1) n.visibleItems.push(e), n.options.addClassActive === !0 && t(n.$owlItems[e]).addClass("active");
            n.owl.visibleItems = n.visibleItems
        },
        transitionTypes: function(t) {
            var e = this;
            e.outClass = "owl-" + t + "-out", e.inClass = "owl-" + t + "-in"
        },
        singleItemTransition: function() {
            function t(t) {
                return {
                    position: "relative",
                    left: t + "px"
                }
            }
            var e = this,
                n = e.outClass,
                i = e.inClass,
                r = e.$owlItems.eq(e.currentItem),
                o = e.$owlItems.eq(e.prevItem),
                s = Math.abs(e.positionsInArray[e.currentItem]) + e.positionsInArray[e.prevItem],
                a = Math.abs(e.positionsInArray[e.currentItem]) + e.itemWidth / 2,
                l = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
            e.isTransition = !0, e.$owlWrapper.addClass("owl-origin").css({
                "-webkit-transform-origin": a + "px",
                "-moz-perspective-origin": a + "px",
                "perspective-origin": a + "px"
            }), o.css(t(s, 10)).addClass(n).on(l, function() {
                e.endPrev = !0, o.off(l), e.clearTransStyle(o, n)
            }), r.addClass(i).on(l, function() {
                e.endCurrent = !0, r.off(l), e.clearTransStyle(r, i)
            })
        },
        clearTransStyle: function(t, e) {
            var n = this;
            t.css({
                position: "",
                left: ""
            }).removeClass(e), n.endPrev && n.endCurrent && (n.$owlWrapper.removeClass("owl-origin"), n.endPrev = !1, n.endCurrent = !1, n.isTransition = !1)
        },
        owlStatus: function() {
            var t = this;
            t.owl = {
                userOptions: t.userOptions,
                baseElement: t.$elem,
                userItems: t.$userItems,
                owlItems: t.$owlItems,
                currentItem: t.currentItem,
                prevItem: t.prevItem,
                visibleItems: t.visibleItems,
                isTouch: t.browser.isTouch,
                browser: t.browser,
                dragDirection: t.dragDirection
            }
        },
        clearEvents: function() {
            var i = this;
            i.$elem.off(".owl owl mousedown.disableTextSelect"), t(n).off(".owl owl"), t(e).off("resize", i.resizer)
        },
        unWrap: function() {
            var t = this;
            0 !== t.$elem.children().length && (t.$owlWrapper.unwrap(), t.$userItems.unwrap().unwrap(), t.owlControls && t.owlControls.remove()), t.clearEvents(), t.$elem.attr({
                style: t.$elem.data("owl-originalStyles") || "",
                "class": t.$elem.data("owl-originalClasses")
            })
        },
        destroy: function() {
            var t = this;
            t.stop(), e.clearInterval(t.checkVisible), t.unWrap(), t.$elem.removeData()
        },
        reinit: function(e) {
            var n = this,
                i = t.extend({}, n.userOptions, e);
            n.unWrap(), n.init(i, n.$elem)
        },
        addItem: function(t, e) {
            var n, i = this;
            return t ? 0 === i.$elem.children().length ? (i.$elem.append(t), i.setVars(), !1) : (i.unWrap(), n = void 0 === e || -1 === e ? -1 : e, n >= i.$userItems.length || -1 === n ? i.$userItems.eq(-1).after(t) : i.$userItems.eq(n).before(t), void i.setVars()) : !1
        },
        removeItem: function(t) {
            var e, n = this;
            return 0 === n.$elem.children().length ? !1 : (e = void 0 === t || -1 === t ? -1 : t, n.unWrap(), n.$userItems.eq(e).remove(), void n.setVars())
        }
    };
    t.fn.owlCarousel = function(e) {
        return this.each(function() {
            if (t(this).data("owl-init") === !0) return !1;
            t(this).data("owl-init", !0);
            var n = Object.create(i);
            n.init(e, this), t.data(this, "owlCarousel", n)
        })
    }, t.fn.owlCarousel.options = {
        items: 5,
        itemsCustom: !1,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: !1,
        itemsMobile: [479, 1],
        singleItem: !1,
        itemsScaleUp: !1,
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1e3,
        autoPlay: !1,
        stopOnHover: !1,
        navigation: !1,
        navigationText: ["prev", "next"],
        rewindNav: !0,
        scrollPerPage: !1,
        pagination: !0,
        paginationNumbers: !1,
        responsive: !0,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: e,
        baseClass: "owl-carousel",
        theme: "owl-theme",
        lazyLoad: !1,
        lazyFollow: !0,
        lazyEffect: "fade",
        autoHeight: !1,
        jsonPath: !1,
        jsonSuccess: !1,
        dragBeforeAnimFinish: !0,
        mouseDrag: !0,
        touchDrag: !0,
        addClassActive: !1,
        transitionStyle: !1,
        beforeUpdate: !1,
        afterUpdate: !1,
        beforeInit: !1,
        afterInit: !1,
        beforeMove: !1,
        afterMove: !1,
        afterAction: !1,
        startDragging: !1,
        afterLazyLoad: !1
    }
}(jQuery, window, document),
    /*!
     *
     * Copyright 2009-2016 Kris Kowal under the terms of the MIT
     * license found at https://github.com/kriskowal/q/blob/v1/LICENSE
     *
     * With parts by Tyler Close
     * Copyright 2007-2009 Tyler Close under the terms of the MIT X license found
     * at http://www.opensource.org/licenses/mit-license.html
     * Forked at ref_send.js version: 2009-05-11
     *
     * With parts by Mark Miller
     * Copyright (C) 2011 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     *
     */

    function(t) {
        "use strict";
        if ("function" == typeof bootstrap) bootstrap("promise", t);
        else if ("object" == typeof exports && "object" == typeof module) module.exports = t();
        else if ("function" == typeof define && define.amd) define(t);
        else if ("undefined" != typeof ses) {
            if (!ses.ok()) return;
            ses.makeQ = t
        } else {
            if ("undefined" == typeof window && "undefined" == typeof self) throw new Error("This environment was not anticipated by Q. Please file a bug.");
            var e = "undefined" != typeof window ? window : self,
                n = e.Q;
            e.Q = t(), e.Q.noConflict = function() {
                return e.Q = n, this
            }
        }
    }(function() {
        "use strict";

        function t(t) {
            return function() {
                return X.apply(t, arguments)
            }
        }
        function e(t) {
            return t === Object(t)
        }
        function n(t) {
            return "[object StopIteration]" === nt(t) || t instanceof W
        }
        function i(t, e) {
            if (B && e.stack && "object" == typeof t && null !== t && t.stack && -1 === t.stack.indexOf(it)) {
                for (var n = [], i = e; i; i = i.source) i.stack && n.unshift(i.stack);
                n.unshift(t.stack);
                var o = n.join("\n" + it + "\n");
                t.stack = r(o)
            }
        }
        function r(t) {
            for (var e = t.split("\n"), n = [], i = 0; i < e.length; ++i) {
                var r = e[i];
                a(r) || o(r) || !r || n.push(r)
            }
            return n.join("\n")
        }
        function o(t) {
            return -1 !== t.indexOf("(module.js:") || -1 !== t.indexOf("(node.js:")
        }
        function s(t) {
            var e = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(t);
            if (e) return [e[1], Number(e[2])];
            var n = /at ([^ ]+):(\d+):(?:\d+)$/.exec(t);
            if (n) return [n[1], Number(n[2])];
            var i = /.*@(.+):(\d+)$/.exec(t);
            return i ? [i[1], Number(i[2])] : void 0
        }
        function a(t) {
            var e = s(t);
            if (!e) return !1;
            var n = e[0],
                i = e[1];
            return n === H && i >= z && lt >= i
        }
        function l() {
            if (B) try {
                throw new Error
            } catch (t) {
                var e = t.stack.split("\n"),
                    n = e[0].indexOf("@") > 0 ? e[1] : e[2],
                    i = s(n);
                if (!i) return;
                return H = i[0], i[1]
            }
        }
        function u(t, e, n) {
            return function() {
                return "undefined" != typeof console && "function" == typeof console.warn && console.warn(e + " is deprecated, use " + n + " instead.", new Error("").stack), t.apply(t, arguments)
            }
        }
        function c(t) {
            return t instanceof p ? t : y(t) ? S(t) : E(t)
        }
        function h() {
            function t(t) {
                e = t, c.longStackSupport && B && (o.source = t), Y(n, function(e, n) {
                    c.nextTick(function() {
                        t.promiseDispatch.apply(t, n)
                    })
                }, void 0), n = void 0, i = void 0
            }
            var e, n = [],
                i = [],
                r = Z(h.prototype),
                o = Z(p.prototype);
            if (o.promiseDispatch = function(t, r, o) {
                    var s = Q(arguments);
                    n ? (n.push(s), "when" === r && o[1] && i.push(o[1])) : c.nextTick(function() {
                        e.promiseDispatch.apply(e, s)
                    })
                }, o.valueOf = function() {
                    if (n) return o;
                    var t = g(e);
                    return v(t) && (e = t), t
                }, o.inspect = function() {
                    return e ? e.inspect() : {
                        state: "pending"
                    }
                }, c.longStackSupport && B) try {
                throw new Error
            } catch (s) {
                o.stack = s.stack.substring(s.stack.indexOf("\n") + 1)
            }
            return r.promise = o, r.resolve = function(n) {
                e || t(c(n))
            }, r.fulfill = function(n) {
                e || t(E(n))
            }, r.reject = function(n) {
                e || t(T(n))
            }, r.notify = function(t) {
                e || Y(i, function(e, n) {
                    c.nextTick(function() {
                        n(t)
                    })
                }, void 0)
            }, r
        }
        function f(t) {
            if ("function" != typeof t) throw new TypeError("resolver must be a function.");
            var e = h();
            try {
                t(e.resolve, e.reject, e.notify)
            } catch (n) {
                e.reject(n)
            }
            return e.promise
        }
        function d(t) {
            return f(function(e, n) {
                for (var i = 0, r = t.length; r > i; i++) c(t[i]).then(e, n)
            })
        }
        function p(t, e, n) {
            void 0 === e && (e = function(t) {
                return T(new Error("Promise does not support operation: " + t))
            }), void 0 === n && (n = function() {
                return {
                    state: "unknown"
                }
            });
            var i = Z(p.prototype);
            if (i.promiseDispatch = function(n, r, o) {
                    var s;
                    try {
                        s = t[r] ? t[r].apply(i, o) : e.call(i, r, o)
                    } catch (a) {
                        s = T(a)
                    }
                    n && n(s)
                }, i.inspect = n, n) {
                var r = n();
                "rejected" === r.state && (i.exception = r.reason), i.valueOf = function() {
                    var t = n();
                    return "pending" === t.state || "rejected" === t.state ? i : t.value
                }
            }
            return i
        }
        function m(t, e, n, i) {
            return c(t).then(e, n, i)
        }
        function g(t) {
            if (v(t)) {
                var e = t.inspect();
                if ("fulfilled" === e.state) return e.value
            }
            return t
        }
        function v(t) {
            return t instanceof p
        }
        function y(t) {
            return e(t) && "function" == typeof t.then
        }
        function b(t) {
            return v(t) && "pending" === t.inspect().state
        }
        function x(t) {
            return !v(t) || "fulfilled" === t.inspect().state
        }
        function w(t) {
            return v(t) && "rejected" === t.inspect().state
        }
        function _() {
            rt.length = 0, ot.length = 0, at || (at = !0)
        }
        function C(t, e) {
            at && ("object" == typeof process && "function" == typeof process.emit && c.nextTick.runAfter(function() {
                -1 !== J(ot, t) && (process.emit("unhandledRejection", e, t), st.push(t))
            }), ot.push(t), e && "undefined" != typeof e.stack ? rt.push(e.stack) : rt.push("(no stack) " + e))
        }
        function k(t) {
            if (at) {
                var e = J(ot, t); - 1 !== e && ("object" == typeof process && "function" == typeof process.emit && c.nextTick.runAfter(function() {
                    var n = J(st, t); - 1 !== n && (process.emit("rejectionHandled", rt[e], t), st.splice(n, 1))
                }), ot.splice(e, 1), rt.splice(e, 1))
            }
        }
        function T(t) {
            var e = p({
                when: function(e) {
                    return e && k(this), e ? e(t) : this
                }
            }, function() {
                return this
            }, function() {
                return {
                    state: "rejected",
                    reason: t
                }
            });
            return C(e, t), e
        }
        function E(t) {
            return p({
                when: function() {
                    return t
                },
                get: function(e) {
                    return t[e]
                },
                set: function(e, n) {
                    t[e] = n
                },
                "delete": function(e) {
                    delete t[e]
                },
                post: function(e, n) {
                    return null === e || void 0 === e ? t.apply(void 0, n) : t[e].apply(t, n)
                },
                apply: function(e, n) {
                    return t.apply(e, n)
                },
                keys: function() {
                    return et(t)
                }
            }, void 0, function() {
                return {
                    state: "fulfilled",
                    value: t
                }
            })
        }
        function S(t) {
            var e = h();
            return c.nextTick(function() {
                try {
                    t.then(e.resolve, e.reject, e.notify)
                } catch (n) {
                    e.reject(n)
                }
            }), e.promise
        }
        function A(t) {
            return p({
                isDef: function() {}
            }, function(e, n) {
                return I(t, e, n)
            }, function() {
                return c(t).inspect()
            })
        }
        function P(t, e, n) {
            return c(t).spread(e, n)
        }
        function $(t) {
            return function() {
                function e(t, e) {
                    var s;
                    if ("undefined" == typeof StopIteration) {
                        try {
                            s = i[t](e)
                        } catch (a) {
                            return T(a)
                        }
                        return s.done ? c(s.value) : m(s.value, r, o)
                    }
                    try {
                        s = i[t](e)
                    } catch (a) {
                        return n(a) ? c(a.value) : T(a)
                    }
                    return m(s, r, o)
                }
                var i = t.apply(this, arguments),
                    r = e.bind(e, "next"),
                    o = e.bind(e, "throw");
                return r()
            }
        }
        function M(t) {
            c.done(c.async(t)())
        }
        function j(t) {
            throw new W(t)
        }
        function N(t) {
            return function() {
                return P([this, F(arguments)], function(e, n) {
                    return t.apply(e, n)
                })
            }
        }
        function I(t, e, n) {
            return c(t).dispatch(e, n)
        }
        function F(t) {
            return m(t, function(t) {
                var e = 0,
                    n = h();
                return Y(t, function(i, r, o) {
                    var s;
                    v(r) && "fulfilled" === (s = r.inspect()).state ? t[o] = s.value : (++e, m(r, function(i) {
                        t[o] = i, 0 === --e && n.resolve(t)
                    }, n.reject, function(t) {
                        n.notify({
                            index: o,
                            value: t
                        })
                    }))
                }, void 0), 0 === e && n.resolve(t), n.promise
            })
        }
        function q(t) {
            if (0 === t.length) return c.resolve();
            var e = c.defer(),
                n = 0;
            return Y(t, function(i, r, o) {
                function s(t) {
                    e.resolve(t)
                }
                function a(t) {
                    n--, 0 === n && (t.message = "Q can't get fulfillment value from any promise, all promises were rejected. Last error message: " + t.message, e.reject(t))
                }
                function l(t) {
                    e.notify({
                        index: o,
                        value: t
                    })
                }
                var u = t[o];
                n++, m(u, s, a, l)
            }, void 0), e.promise
        }
        function D(t) {
            return m(t, function(t) {
                return t = K(t, c), m(F(K(t, function(t) {
                    return m(t, V, V)
                })), function() {
                    return t
                })
            })
        }
        function O(t) {
            return c(t).allSettled()
        }
        function R(t, e) {
            return c(t).then(void 0, void 0, e)
        }
        function L(t, e) {
            return c(t).nodeify(e)
        }
        var B = !1;
        try {
            throw new Error
        } catch (U) {
            B = !! U.stack
        }
        var H, W, z = l(),
            V = function() {},
            G = function() {
                function t() {
                    for (var t, i; n.next;) n = n.next, t = n.task, n.task = void 0, i = n.domain, i && (n.domain = void 0, i.enter()), e(t, i);
                    for (; a.length;) t = a.pop(), e(t);
                    r = !1
                }
                function e(e, n) {
                    try {
                        e()
                    } catch (i) {
                        if (s) throw n && n.exit(), setTimeout(t, 0), n && n.enter(), i;
                        setTimeout(function() {
                            throw i
                        }, 0)
                    }
                    n && n.exit()
                }
                var n = {
                        task: void 0,
                        next: null
                    },
                    i = n,
                    r = !1,
                    o = void 0,
                    s = !1,
                    a = [];
                if (G = function(t) {
                        i = i.next = {
                            task: t,
                            domain: s && process.domain,
                            next: null
                        }, r || (r = !0, o())
                    }, "object" == typeof process && "[object process]" === process.toString() && process.nextTick) s = !0, o = function() {
                    process.nextTick(t)
                };
                else if ("function" == typeof setImmediate) o = "undefined" != typeof window ? setImmediate.bind(window, t) : function() {
                    setImmediate(t)
                };
                else if ("undefined" != typeof MessageChannel) {
                    var l = new MessageChannel;
                    l.port1.onmessage = function() {
                        o = u, l.port1.onmessage = t, t()
                    };
                    var u = function() {
                        l.port2.postMessage(0)
                    };
                    o = function() {
                        setTimeout(t, 0), u()
                    }
                } else o = function() {
                    setTimeout(t, 0)
                };
                return G.runAfter = function(t) {
                    a.push(t), r || (r = !0, o())
                }, G
            }(),
            X = Function.call,
            Q = t(Array.prototype.slice),
            Y = t(Array.prototype.reduce ||
                function(t, e) {
                    var n = 0,
                        i = this.length;
                    if (1 === arguments.length) for (;;) {
                        if (n in this) {
                            e = this[n++];
                            break
                        }
                        if (++n >= i) throw new TypeError
                    }
                    for (; i > n; n++) n in this && (e = t(e, this[n], n));
                    return e
                }),
            J = t(Array.prototype.indexOf ||
                function(t) {
                    for (var e = 0; e < this.length; e++) if (this[e] === t) return e;
                    return -1
                }),
            K = t(Array.prototype.map ||
                function(t, e) {
                    var n = this,
                        i = [];
                    return Y(n, function(r, o, s) {
                        i.push(t.call(e, o, s, n))
                    }, void 0), i
                }),
            Z = Object.create ||
                function(t) {
                    function e() {}
                    return e.prototype = t, new e
                }, tt = t(Object.prototype.hasOwnProperty), et = Object.keys ||
                function(t) {
                    var e = [];
                    for (var n in t) tt(t, n) && e.push(n);
                    return e
                }, nt = t(Object.prototype.toString);
        W = "undefined" != typeof ReturnValue ? ReturnValue : function(t) {
            this.value = t
        };
        var it = "From previous event:";
        c.resolve = c, c.nextTick = G, c.longStackSupport = !1, "object" == typeof process && process && process.env && process.env.Q_DEBUG && (c.longStackSupport = !0), c.defer = h, h.prototype.makeNodeResolver = function() {
            var t = this;
            return function(e, n) {
                e ? t.reject(e) : arguments.length > 2 ? t.resolve(Q(arguments, 1)) : t.resolve(n)
            }
        }, c.Promise = f, c.promise = f, f.race = d, f.all = F, f.reject = T, f.resolve = c, c.passByCopy = function(t) {
            return t
        }, p.prototype.passByCopy = function() {
            return this
        }, c.join = function(t, e) {
            return c(t).join(e)
        }, p.prototype.join = function(t) {
            return c([this, t]).spread(function(t, e) {
                if (t === e) return t;
                throw new Error("Q can't join: not the same: " + t + " " + e)
            })
        }, c.race = d, p.prototype.race = function() {
            return this.then(c.race)
        }, c.makePromise = p, p.prototype.toString = function() {
            return "[object Promise]"
        }, p.prototype.then = function(t, e, n) {
            function r(e) {
                try {
                    return "function" == typeof t ? t(e) : e
                } catch (n) {
                    return T(n)
                }
            }
            function o(t) {
                if ("function" == typeof e) {
                    i(t, a);
                    try {
                        return e(t)
                    } catch (n) {
                        return T(n)
                    }
                }
                return T(t)
            }
            function s(t) {
                return "function" == typeof n ? n(t) : t
            }
            var a = this,
                l = h(),
                u = !1;
            return c.nextTick(function() {
                a.promiseDispatch(function(t) {
                    u || (u = !0, l.resolve(r(t)))
                }, "when", [function(t) {
                    u || (u = !0, l.resolve(o(t)))
                }])
            }), a.promiseDispatch(void 0, "when", [void 0, function(t) {
                var e, n = !1;
                try {
                    e = s(t)
                } catch (i) {
                    if (n = !0, !c.onerror) throw i;
                    c.onerror(i)
                }
                n || l.notify(e)
            }]), l.promise
        }, c.tap = function(t, e) {
            return c(t).tap(e)
        }, p.prototype.tap = function(t) {
            return t = c(t), this.then(function(e) {
                return t.fcall(e).thenResolve(e)
            })
        }, c.when = m, p.prototype.thenResolve = function(t) {
            return this.then(function() {
                return t
            })
        }, c.thenResolve = function(t, e) {
            return c(t).thenResolve(e)
        }, p.prototype.thenReject = function(t) {
            return this.then(function() {
                throw t
            })
        }, c.thenReject = function(t, e) {
            return c(t).thenReject(e)
        }, c.nearer = g, c.isPromise = v, c.isPromiseAlike = y, c.isPending = b, p.prototype.isPending = function() {
            return "pending" === this.inspect().state
        }, c.isFulfilled = x, p.prototype.isFulfilled = function() {
            return "fulfilled" === this.inspect().state
        }, c.isRejected = w, p.prototype.isRejected = function() {
            return "rejected" === this.inspect().state
        };
        var rt = [],
            ot = [],
            st = [],
            at = !0;
        c.resetUnhandledRejections = _, c.getUnhandledReasons = function() {
            return rt.slice()
        }, c.stopUnhandledRejectionTracking = function() {
            _(), at = !1
        }, _(), c.reject = T, c.fulfill = E, c.master = A, c.spread = P, p.prototype.spread = function(t, e) {
            return this.all().then(function(e) {
                return t.apply(void 0, e)
            }, e)
        }, c.async = $, c.spawn = M, c["return"] = j, c.promised = N, c.dispatch = I, p.prototype.dispatch = function(t, e) {
            var n = this,
                i = h();
            return c.nextTick(function() {
                n.promiseDispatch(i.resolve, t, e)
            }), i.promise
        }, c.get = function(t, e) {
            return c(t).dispatch("get", [e])
        }, p.prototype.get = function(t) {
            return this.dispatch("get", [t])
        }, c.set = function(t, e, n) {
            return c(t).dispatch("set", [e, n])
        }, p.prototype.set = function(t, e) {
            return this.dispatch("set", [t, e])
        }, c.del = c["delete"] = function(t, e) {
            return c(t).dispatch("delete", [e])
        }, p.prototype.del = p.prototype["delete"] = function(t) {
            return this.dispatch("delete", [t])
        }, c.mapply = c.post = function(t, e, n) {
            return c(t).dispatch("post", [e, n])
        }, p.prototype.mapply = p.prototype.post = function(t, e) {
            return this.dispatch("post", [t, e])
        }, c.send = c.mcall = c.invoke = function(t, e) {
            return c(t).dispatch("post", [e, Q(arguments, 2)])
        }, p.prototype.send = p.prototype.mcall = p.prototype.invoke = function(t) {
            return this.dispatch("post", [t, Q(arguments, 1)])
        }, c.fapply = function(t, e) {
            return c(t).dispatch("apply", [void 0, e])
        }, p.prototype.fapply = function(t) {
            return this.dispatch("apply", [void 0, t])
        }, c["try"] = c.fcall = function(t) {
            return c(t).dispatch("apply", [void 0, Q(arguments, 1)])
        }, p.prototype.fcall = function() {
            return this.dispatch("apply", [void 0, Q(arguments)])
        }, c.fbind = function(t) {
            var e = c(t),
                n = Q(arguments, 1);
            return function() {
                return e.dispatch("apply", [this, n.concat(Q(arguments))])
            }
        }, p.prototype.fbind = function() {
            var t = this,
                e = Q(arguments);
            return function() {
                return t.dispatch("apply", [this, e.concat(Q(arguments))])
            }
        }, c.keys = function(t) {
            return c(t).dispatch("keys", [])
        }, p.prototype.keys = function() {
            return this.dispatch("keys", [])
        }, c.all = F, p.prototype.all = function() {
            return F(this)
        }, c.any = q, p.prototype.any = function() {
            return q(this)
        }, c.allResolved = u(D, "allResolved", "allSettled"), p.prototype.allResolved = function() {
            return D(this)
        }, c.allSettled = O, p.prototype.allSettled = function() {
            return this.then(function(t) {
                return F(K(t, function(t) {
                    function e() {
                        return t.inspect()
                    }
                    return t = c(t), t.then(e, e)
                }))
            })
        }, c.fail = c["catch"] = function(t, e) {
            return c(t).then(void 0, e)
        }, p.prototype.fail = p.prototype["catch"] = function(t) {
            return this.then(void 0, t)
        }, c.progress = R, p.prototype.progress = function(t) {
            return this.then(void 0, void 0, t)
        }, c.fin = c["finally"] = function(t, e) {
            return c(t)["finally"](e)
        }, p.prototype.fin = p.prototype["finally"] = function(t) {
            if (!t || "function" != typeof t.apply) throw new Error("Q can't apply finally callback");
            return t = c(t), this.then(function(e) {
                return t.fcall().then(function() {
                    return e
                })
            }, function(e) {
                return t.fcall().then(function() {
                    throw e
                })
            })
        }, c.done = function(t, e, n, i) {
            return c(t).done(e, n, i)
        }, p.prototype.done = function(t, e, n) {
            var r = function(t) {
                    c.nextTick(function() {
                        if (i(t, o), !c.onerror) throw t;
                        c.onerror(t)
                    })
                },
                o = t || e || n ? this.then(t, e, n) : this;
            "object" == typeof process && process && process.domain && (r = process.domain.bind(r)), o.then(void 0, r)
        }, c.timeout = function(t, e, n) {
            return c(t).timeout(e, n)
        }, p.prototype.timeout = function(t, e) {
            var n = h(),
                i = setTimeout(function() {
                    e && "string" != typeof e || (e = new Error(e || "Timed out after " + t + " ms"), e.code = "ETIMEDOUT"), n.reject(e)
                }, t);
            return this.then(function(t) {
                clearTimeout(i), n.resolve(t)
            }, function(t) {
                clearTimeout(i), n.reject(t)
            }, n.notify), n.promise
        }, c.delay = function(t, e) {
            return void 0 === e && (e = t, t = void 0), c(t).delay(e)
        }, p.prototype.delay = function(t) {
            return this.then(function(e) {
                var n = h();
                return setTimeout(function() {
                    n.resolve(e)
                }, t), n.promise
            })
        }, c.nfapply = function(t, e) {
            return c(t).nfapply(e)
        }, p.prototype.nfapply = function(t) {
            var e = h(),
                n = Q(t);
            return n.push(e.makeNodeResolver()), this.fapply(n).fail(e.reject), e.promise
        }, c.nfcall = function(t) {
            var e = Q(arguments, 1);
            return c(t).nfapply(e)
        }, p.prototype.nfcall = function() {
            var t = Q(arguments),
                e = h();
            return t.push(e.makeNodeResolver()), this.fapply(t).fail(e.reject), e.promise
        }, c.nfbind = c.denodeify = function(t) {
            if (void 0 === t) throw new Error("Q can't wrap an undefined function");
            var e = Q(arguments, 1);
            return function() {
                var n = e.concat(Q(arguments)),
                    i = h();
                return n.push(i.makeNodeResolver()), c(t).fapply(n).fail(i.reject), i.promise
            }
        }, p.prototype.nfbind = p.prototype.denodeify = function() {
            var t = Q(arguments);
            return t.unshift(this), c.denodeify.apply(void 0, t)
        }, c.nbind = function(t, e) {
            var n = Q(arguments, 2);
            return function() {
                function i() {
                    return t.apply(e, arguments)
                }
                var r = n.concat(Q(arguments)),
                    o = h();
                return r.push(o.makeNodeResolver()), c(i).fapply(r).fail(o.reject), o.promise
            }
        }, p.prototype.nbind = function() {
            var t = Q(arguments, 0);
            return t.unshift(this), c.nbind.apply(void 0, t)
        }, c.nmapply = c.npost = function(t, e, n) {
            return c(t).npost(e, n)
        }, p.prototype.nmapply = p.prototype.npost = function(t, e) {
            var n = Q(e || []),
                i = h();
            return n.push(i.makeNodeResolver()), this.dispatch("post", [t, n]).fail(i.reject), i.promise
        }, c.nsend = c.nmcall = c.ninvoke = function(t, e) {
            var n = Q(arguments, 2),
                i = h();
            return n.push(i.makeNodeResolver()), c(t).dispatch("post", [e, n]).fail(i.reject), i.promise
        }, p.prototype.nsend = p.prototype.nmcall = p.prototype.ninvoke = function(t) {
            var e = Q(arguments, 1),
                n = h();
            return e.push(n.makeNodeResolver()), this.dispatch("post", [t, e]).fail(n.reject), n.promise
        }, c.nodeify = L, p.prototype.nodeify = function(t) {
            return t ? void this.then(function(e) {
                c.nextTick(function() {
                    t(null, e)
                })
            }, function(e) {
                c.nextTick(function() {
                    t(e)
                })
            }) : this
        }, c.noConflict = function() {
            throw new Error("Q.noConflict only works when Q is used as a global")
        };
        var lt = l();
        return c
    }),
/**
 * two.js
 * a two-dimensional drawing api meant for modern browsers. It is renderer
 * agnostic enabling the same api for rendering in multiple contexts: webgl,
 * canvas2d, and svg.
 *
 * Copyright (c) 2012 - 2013 jonobr1 / http://jonobr1.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

    function() {
        var t = this,
            e = t._,
            n = {},
            i = Array.prototype,
            r = Object.prototype,
            o = Function.prototype,
            s = i.push,
            a = i.slice,
            l = i.concat,
            u = r.toString,
            c = r.hasOwnProperty,
            h = i.forEach,
            f = i.map,
            d = i.reduce,
            p = i.reduceRight,
            m = i.filter,
            g = i.every,
            v = i.some,
            y = i.indexOf,
            b = i.lastIndexOf,
            x = Array.isArray,
            w = Object.keys,
            _ = o.bind,
            C = function(t) {
                return t instanceof C ? t : this instanceof C ? void(this._wrapped = t) : new C(t)
            };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = C), exports._ = C) : t._ = C, C.VERSION = "1.5.1";
        var k = C.each = C.forEach = function(t, e, i) {
            if (null != t) if (h && t.forEach === h) t.forEach(e, i);
            else if (t.length === +t.length) {
                for (var r = 0, o = t.length; o > r; r++) if (e.call(i, t[r], r, t) === n) return
            } else for (var s in t) if (C.has(t, s) && e.call(i, t[s], s, t) === n) return
        };
        C.map = C.collect = function(t, e, n) {
            var i = [];
            return null == t ? i : f && t.map === f ? t.map(e, n) : (k(t, function(t, r, o) {
                i.push(e.call(n, t, r, o))
            }), i)
        };
        var T = "Reduce of empty array with no initial value";
        C.reduce = C.foldl = C.inject = function(t, e, n, i) {
            var r = arguments.length > 2;
            if (null == t && (t = []), d && t.reduce === d) return i && (e = C.bind(e, i)), r ? t.reduce(e, n) : t.reduce(e);
            if (k(t, function(t, o, s) {
                    r ? n = e.call(i, n, t, o, s) : (n = t, r = !0)
                }), !r) throw new TypeError(T);
            return n
        }, C.reduceRight = C.foldr = function(t, e, n, i) {
            var r = arguments.length > 2;
            if (null == t && (t = []), p && t.reduceRight === p) return i && (e = C.bind(e, i)), r ? t.reduceRight(e, n) : t.reduceRight(e);
            var o = t.length;
            if (o !== +o) {
                var s = C.keys(t);
                o = s.length
            }
            if (k(t, function(a, l, u) {
                    l = s ? s[--o] : --o, r ? n = e.call(i, n, t[l], l, u) : (n = t[l], r = !0)
                }), !r) throw new TypeError(T);
            return n
        }, C.find = C.detect = function(t, e, n) {
            var i;
            return E(t, function(t, r, o) {
                return e.call(n, t, r, o) ? (i = t, !0) : void 0
            }), i
        }, C.filter = C.select = function(t, e, n) {
            var i = [];
            return null == t ? i : m && t.filter === m ? t.filter(e, n) : (k(t, function(t, r, o) {
                e.call(n, t, r, o) && i.push(t)
            }), i)
        }, C.reject = function(t, e, n) {
            return C.filter(t, function(t, i, r) {
                return !e.call(n, t, i, r)
            }, n)
        }, C.every = C.all = function(t, e, i) {
            e || (e = C.identity);
            var r = !0;
            return null == t ? r : g && t.every === g ? t.every(e, i) : (k(t, function(t, o, s) {
                return (r = r && e.call(i, t, o, s)) ? void 0 : n
            }), !! r)
        };
        var E = C.some = C.any = function(t, e, i) {
            e || (e = C.identity);
            var r = !1;
            return null == t ? r : v && t.some === v ? t.some(e, i) : (k(t, function(t, o, s) {
                return r || (r = e.call(i, t, o, s)) ? n : void 0
            }), !! r)
        };
        C.contains = C.include = function(t, e) {
            return null == t ? !1 : y && t.indexOf === y ? -1 != t.indexOf(e) : E(t, function(t) {
                return t === e
            })
        }, C.invoke = function(t, e) {
            var n = a.call(arguments, 2),
                i = C.isFunction(e);
            return C.map(t, function(t) {
                return (i ? e : t[e]).apply(t, n)
            })
        }, C.pluck = function(t, e) {
            return C.map(t, function(t) {
                return t[e]
            })
        }, C.where = function(t, e, n) {
            return C.isEmpty(e) ? n ? void 0 : [] : C[n ? "find" : "filter"](t, function(t) {
                for (var n in e) if (e[n] !== t[n]) return !1;
                return !0
            })
        }, C.findWhere = function(t, e) {
            return C.where(t, e, !0)
        }, C.max = function(t, e, n) {
            if (!e && C.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.max.apply(Math, t);
            if (!e && C.isEmpty(t)) return -(1 / 0);
            var i = {
                computed: -(1 / 0),
                value: -(1 / 0)
            };
            return k(t, function(t, r, o) {
                var s = e ? e.call(n, t, r, o) : t;
                s > i.computed && (i = {
                    value: t,
                    computed: s
                })
            }), i.value
        }, C.min = function(t, e, n) {
            if (!e && C.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.min.apply(Math, t);
            if (!e && C.isEmpty(t)) return 1 / 0;
            var i = {
                computed: 1 / 0,
                value: 1 / 0
            };
            return k(t, function(t, r, o) {
                var s = e ? e.call(n, t, r, o) : t;
                s < i.computed && (i = {
                    value: t,
                    computed: s
                })
            }), i.value
        }, C.shuffle = function(t) {
            var e, n = 0,
                i = [];
            return k(t, function(t) {
                e = C.random(n++), i[n - 1] = i[e], i[e] = t
            }), i
        };
        var S = function(t) {
            return C.isFunction(t) ? t : function(e) {
                return e[t]
            }
        };
        C.sortBy = function(t, e, n) {
            var i = S(e);
            return C.pluck(C.map(t, function(t, e, r) {
                return {
                    value: t,
                    index: e,
                    criteria: i.call(n, t, e, r)
                }
            }).sort(function(t, e) {
                var n = t.criteria,
                    i = e.criteria;
                if (n !== i) {
                    if (n > i || void 0 === n) return 1;
                    if (i > n || void 0 === i) return -1
                }
                return t.index < e.index ? -1 : 1
            }), "value")
        };
        var A = function(t, e, n, i) {
            var r = {},
                o = S(null == e ? C.identity : e);
            return k(t, function(e, s) {
                var a = o.call(n, e, s, t);
                i(r, a, e)
            }), r
        };
        C.groupBy = function(t, e, n) {
            return A(t, e, n, function(t, e, n) {
                (C.has(t, e) ? t[e] : t[e] = []).push(n)
            })
        }, C.countBy = function(t, e, n) {
            return A(t, e, n, function(t, e) {
                C.has(t, e) || (t[e] = 0), t[e]++
            })
        }, C.sortedIndex = function(t, e, n, i) {
            n = null == n ? C.identity : S(n);
            for (var r = n.call(i, e), o = 0, s = t.length; s > o;) {
                var a = o + s >>> 1;
                n.call(i, t[a]) < r ? o = a + 1 : s = a
            }
            return o
        }, C.toArray = function(t) {
            return t ? C.isArray(t) ? a.call(t) : t.length === +t.length ? C.map(t, C.identity) : C.values(t) : []
        }, C.size = function(t) {
            return null == t ? 0 : t.length === +t.length ? t.length : C.keys(t).length
        }, C.first = C.head = C.take = function(t, e, n) {
            return null == t ? void 0 : null == e || n ? t[0] : a.call(t, 0, e)
        }, C.initial = function(t, e, n) {
            return a.call(t, 0, t.length - (null == e || n ? 1 : e))
        }, C.last = function(t, e, n) {
            return null == t ? void 0 : null == e || n ? t[t.length - 1] : a.call(t, Math.max(t.length - e, 0))
        }, C.rest = C.tail = C.drop = function(t, e, n) {
            return a.call(t, null == e || n ? 1 : e)
        }, C.compact = function(t) {
            return C.filter(t, C.identity)
        };
        var P = function(t, e, n) {
            return e && C.every(t, C.isArray) ? l.apply(n, t) : (k(t, function(t) {
                C.isArray(t) || C.isArguments(t) ? e ? s.apply(n, t) : P(t, e, n) : n.push(t)
            }), n)
        };
        C.flatten = function(t, e) {
            return P(t, e, [])
        }, C.without = function(t) {
            return C.difference(t, a.call(arguments, 1))
        }, C.uniq = C.unique = function(t, e, n, i) {
            C.isFunction(e) && (i = n, n = e, e = !1);
            var r = n ? C.map(t, n, i) : t,
                o = [],
                s = [];
            return k(r, function(n, i) {
                (e ? i && s[s.length - 1] === n : C.contains(s, n)) || (s.push(n), o.push(t[i]))
            }), o
        }, C.union = function() {
            return C.uniq(C.flatten(arguments, !0))
        }, C.intersection = function(t) {
            var e = a.call(arguments, 1);
            return C.filter(C.uniq(t), function(t) {
                return C.every(e, function(e) {
                    return C.indexOf(e, t) >= 0
                })
            })
        }, C.difference = function(t) {
            var e = l.apply(i, a.call(arguments, 1));
            return C.filter(t, function(t) {
                return !C.contains(e, t)
            })
        }, C.zip = function() {
            for (var t = C.max(C.pluck(arguments, "length").concat(0)), e = new Array(t), n = 0; t > n; n++) e[n] = C.pluck(arguments, "" + n);
            return e
        }, C.object = function(t, e) {
            if (null == t) return {};
            for (var n = {}, i = 0, r = t.length; r > i; i++) e ? n[t[i]] = e[i] : n[t[i][0]] = t[i][1];
            return n
        }, C.indexOf = function(t, e, n) {
            if (null == t) return -1;
            var i = 0,
                r = t.length;
            if (n) {
                if ("number" != typeof n) return i = C.sortedIndex(t, e), t[i] === e ? i : -1;
                i = 0 > n ? Math.max(0, r + n) : n
            }
            if (y && t.indexOf === y) return t.indexOf(e, n);
            for (; r > i; i++) if (t[i] === e) return i;
            return -1
        }, C.lastIndexOf = function(t, e, n) {
            if (null == t) return -1;
            var i = null != n;
            if (b && t.lastIndexOf === b) return i ? t.lastIndexOf(e, n) : t.lastIndexOf(e);
            for (var r = i ? n : t.length; r--;) if (t[r] === e) return r;
            return -1
        }, C.range = function(t, e, n) {
            arguments.length <= 1 && (e = t || 0, t = 0), n = arguments[2] || 1;
            for (var i = Math.max(Math.ceil((e - t) / n), 0), r = 0, o = new Array(i); i > r;) o[r++] = t, t += n;
            return o
        };
        var $ = function() {};
        C.bind = function(t, e) {
            var n, i;
            if (_ && t.bind === _) return _.apply(t, a.call(arguments, 1));
            if (!C.isFunction(t)) throw new TypeError;
            return n = a.call(arguments, 2), i = function() {
                if (!(this instanceof i)) return t.apply(e, n.concat(a.call(arguments)));
                $.prototype = t.prototype;
                var r = new $;
                $.prototype = null;
                var o = t.apply(r, n.concat(a.call(arguments)));
                return Object(o) === o ? o : r
            }
        }, C.partial = function(t) {
            var e = a.call(arguments, 1);
            return function() {
                return t.apply(this, e.concat(a.call(arguments)))
            }
        }, C.bindAll = function(t) {
            var e = a.call(arguments, 1);
            if (0 === e.length) throw new Error("bindAll must be passed function names");
            return k(e, function(e) {
                t[e] = C.bind(t[e], t)
            }), t
        }, C.memoize = function(t, e) {
            var n = {};
            return e || (e = C.identity), function() {
                var i = e.apply(this, arguments);
                return C.has(n, i) ? n[i] : n[i] = t.apply(this, arguments)
            }
        }, C.delay = function(t, e) {
            var n = a.call(arguments, 2);
            return setTimeout(function() {
                return t.apply(null, n)
            }, e)
        }, C.defer = function(t) {
            return C.delay.apply(C, [t, 1].concat(a.call(arguments, 1)))
        }, C.throttle = function(t, e, n) {
            var i, r, o, s = null,
                a = 0;
            n || (n = {});
            var l = function() {
                a = n.leading === !1 ? 0 : new Date, s = null, o = t.apply(i, r)
            };
            return function() {
                var u = new Date;
                a || n.leading !== !1 || (a = u);
                var c = e - (u - a);
                return i = this, r = arguments, 0 >= c ? (clearTimeout(s), s = null, a = u, o = t.apply(i, r)) : s || n.trailing === !1 || (s = setTimeout(l, c)), o
            }
        }, C.debounce = function(t, e, n) {
            var i, r = null;
            return function() {
                var o = this,
                    s = arguments,
                    a = function() {
                        r = null, n || (i = t.apply(o, s))
                    },
                    l = n && !r;
                return clearTimeout(r), r = setTimeout(a, e), l && (i = t.apply(o, s)), i
            }
        }, C.once = function(t) {
            var e, n = !1;
            return function() {
                return n ? e : (n = !0, e = t.apply(this, arguments), t = null, e)
            }
        }, C.wrap = function(t, e) {
            return function() {
                var n = [t];
                return s.apply(n, arguments), e.apply(this, n)
            }
        }, C.compose = function() {
            var t = arguments;
            return function() {
                for (var e = arguments, n = t.length - 1; n >= 0; n--) e = [t[n].apply(this, e)];
                return e[0]
            }
        }, C.after = function(t, e) {
            return function() {
                return --t < 1 ? e.apply(this, arguments) : void 0
            }
        }, C.keys = w ||
            function(t) {
                if (t !== Object(t)) throw new TypeError("Invalid object");
                var e = [];
                for (var n in t) C.has(t, n) && e.push(n);
                return e
            }, C.values = function(t) {
            var e = [];
            for (var n in t) C.has(t, n) && e.push(t[n]);
            return e
        }, C.pairs = function(t) {
            var e = [];
            for (var n in t) C.has(t, n) && e.push([n, t[n]]);
            return e
        }, C.invert = function(t) {
            var e = {};
            for (var n in t) C.has(t, n) && (e[t[n]] = n);
            return e
        }, C.functions = C.methods = function(t) {
            var e = [];
            for (var n in t) C.isFunction(t[n]) && e.push(n);
            return e.sort()
        }, C.extend = function(t) {
            return k(a.call(arguments, 1), function(e) {
                if (e) for (var n in e) t[n] = e[n]
            }), t
        }, C.pick = function(t) {
            var e = {},
                n = l.apply(i, a.call(arguments, 1));
            return k(n, function(n) {
                n in t && (e[n] = t[n])
            }), e
        }, C.omit = function(t) {
            var e = {},
                n = l.apply(i, a.call(arguments, 1));
            for (var r in t) C.contains(n, r) || (e[r] = t[r]);
            return e
        }, C.defaults = function(t) {
            return k(a.call(arguments, 1), function(e) {
                if (e) for (var n in e) void 0 === t[n] && (t[n] = e[n])
            }), t
        }, C.clone = function(t) {
            return C.isObject(t) ? C.isArray(t) ? t.slice() : C.extend({}, t) : t
        }, C.tap = function(t, e) {
            return e(t), t
        };
        var M = function(t, e, n, i) {
            if (t === e) return 0 !== t || 1 / t == 1 / e;
            if (null == t || null == e) return t === e;
            t instanceof C && (t = t._wrapped), e instanceof C && (e = e._wrapped);
            var r = u.call(t);
            if (r != u.call(e)) return !1;
            switch (r) {
                case "[object String]":
                    return t == String(e);
                case "[object Number]":
                    return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
                case "[object Date]":
                case "[object Boolean]":
                    return +t == +e;
                case "[object RegExp]":
                    return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase
            }
            if ("object" != typeof t || "object" != typeof e) return !1;
            for (var o = n.length; o--;) if (n[o] == t) return i[o] == e;
            var s = t.constructor,
                a = e.constructor;
            if (s !== a && !(C.isFunction(s) && s instanceof s && C.isFunction(a) && a instanceof a)) return !1;
            n.push(t), i.push(e);
            var l = 0,
                c = !0;
            if ("[object Array]" == r) {
                if (l = t.length, c = l == e.length) for (; l-- && (c = M(t[l], e[l], n, i)););
            } else {
                for (var h in t) if (C.has(t, h) && (l++, !(c = C.has(e, h) && M(t[h], e[h], n, i)))) break;
                if (c) {
                    for (h in e) if (C.has(e, h) && !l--) break;
                    c = !l
                }
            }
            return n.pop(), i.pop(), c
        };
        C.isEqual = function(t, e) {
            return M(t, e, [], [])
        }, C.isEmpty = function(t) {
            if (null == t) return !0;
            if (C.isArray(t) || C.isString(t)) return 0 === t.length;
            for (var e in t) if (C.has(t, e)) return !1;
            return !0
        }, C.isElement = function(t) {
            return !(!t || 1 !== t.nodeType)
        }, C.isArray = x ||
            function(t) {
                return "[object Array]" == u.call(t)
            }, C.isObject = function(t) {
            return t === Object(t)
        }, k(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(t) {
            C["is" + t] = function(e) {
                return u.call(e) == "[object " + t + "]"
            }
        }), C.isArguments(arguments) || (C.isArguments = function(t) {
            return !(!t || !C.has(t, "callee"))
        }), "function" != typeof / . / && (C.isFunction = function(t) {
            return "function" == typeof t
        }), C.isFinite = function(t) {
            return isFinite(t) && !isNaN(parseFloat(t))
        }, C.isNaN = function(t) {
            return C.isNumber(t) && t != +t
        }, C.isBoolean = function(t) {
            return t === !0 || t === !1 || "[object Boolean]" == u.call(t)
        }, C.isNull = function(t) {
            return null === t
        }, C.isUndefined = function(t) {
            return void 0 === t
        }, C.has = function(t, e) {
            return c.call(t, e)
        }, C.noConflict = function() {
            return t._ = e, this
        }, C.identity = function(t) {
            return t
        }, C.times = function(t, e, n) {
            for (var i = Array(Math.max(0, t)), r = 0; t > r; r++) i[r] = e.call(n, r);
            return i
        }, C.random = function(t, e) {
            return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
        };
        var j = {
            escape: {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "/": "&#x2F;"
            }
        };
        j.unescape = C.invert(j.escape);
        var N = {
            escape: new RegExp("[" + C.keys(j.escape).join("") + "]", "g"),
            unescape: new RegExp("(" + C.keys(j.unescape).join("|") + ")", "g")
        };
        C.each(["escape", "unescape"], function(t) {
            C[t] = function(e) {
                return null == e ? "" : ("" + e).replace(N[t], function(e) {
                    return j[t][e]
                })
            }
        }), C.result = function(t, e) {
            if (null == t) return void 0;
            var n = t[e];
            return C.isFunction(n) ? n.call(t) : n
        }, C.mixin = function(t) {
            k(C.functions(t), function(e) {
                var n = C[e] = t[e];
                C.prototype[e] = function() {
                    var t = [this._wrapped];
                    return s.apply(t, arguments), O.call(this, n.apply(C, t))
                }
            })
        };
        var I = 0;
        C.uniqueId = function(t) {
            var e = ++I + "";
            return t ? t + e : e
        }, C.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var F = /(.)^/,
            q = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "	": "t",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            D = /\\|'|\r|\n|\t|\u2028|\u2029/g;
        C.template = function(t, e, n) {
            var i;
            n = C.defaults({}, n, C.templateSettings);
            var r = new RegExp([(n.escape || F).source, (n.interpolate || F).source, (n.evaluate || F).source].join("|") + "|$", "g"),
                o = 0,
                s = "__p+='";
            t.replace(r, function(e, n, i, r, a) {
                return s += t.slice(o, a).replace(D, function(t) {
                    return "\\" + q[t]
                }), n && (s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), i && (s += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"), r && (s += "';\n" + r + "\n__p+='"), o = a + e.length, e
            }), s += "';\n", n.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
            try {
                i = new Function(n.variable || "obj", "_", s)
            } catch (a) {
                throw a.source = s, a
            }
            if (e) return i(e, C);
            var l = function(t) {
                return i.call(this, t, C)
            };
            return l.source = "function(" + (n.variable || "obj") + "){\n" + s + "}", l
        }, C.chain = function(t) {
            return C(t).chain()
        };
        var O = function(t) {
            return this._chain ? C(t).chain() : t
        };
        C.mixin(C), k(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
            var e = i[t];
            C.prototype[t] = function() {
                var n = this._wrapped;
                return e.apply(n, arguments), "shift" != t && "splice" != t || 0 !== n.length || delete n[0], O.call(this, n)
            }
        }), k(["concat", "join", "slice"], function(t) {
            var e = i[t];
            C.prototype[t] = function() {
                return O.call(this, e.apply(this._wrapped, arguments))
            }
        }), C.extend(C.prototype, {
            chain: function() {
                return this._chain = !0, this
            },
            value: function() {
                return this._wrapped
            }
        })
    }.call(this);
var Backbone = Backbone || {};
!
    function() {
        var t = [],
            e = t.slice,
            n = function(t, e, n) {
                var i, r = -1,
                    o = e.length;
                switch (n.length) {
                    case 0:
                        for (; ++r < o;)(i = e[r]).callback.call(i.ctx);
                        return;
                    case 1:
                        for (; ++r < o;)(i = e[r]).callback.call(i.ctx, n[0]);
                        return;
                    case 2:
                        for (; ++r < o;)(i = e[r]).callback.call(i.ctx, n[0], n[1]);
                        return;
                    case 3:
                        for (; ++r < o;)(i = e[r]).callback.call(i.ctx, n[0], n[1], n[2]);
                        return;
                    default:
                        for (; ++r < o;)(i = e[r]).callback.apply(i.ctx, n)
                }
            },
            i = Backbone.Events = {
                on: function(t, e, n) {
                    this._events || (this._events = {});
                    var i = this._events[t] || (this._events[t] = []);
                    return i.push({
                        callback: e,
                        context: n,
                        ctx: n || this
                    }), this
                },
                once: function(t, e, n) {
                    var i = this,
                        r = _.once(function() {
                            i.off(t, r), e.apply(this, arguments)
                        });
                    return r._callback = e, this.on(t, r, n), this
                },
                off: function(t, e, n) {
                    var i, r, o, s, a, l, u, c;
                    if (!this._events) return this;
                    if (!t && !e && !n) return this._events = {}, this;
                    for (s = t ? [t] : _.keys(this._events), a = 0, l = s.length; l > a; a++) if (t = s[a], i = this._events[t]) {
                        if (o = [], e || n) for (u = 0, c = i.length; c > u; u++) r = i[u], (e && e !== (r.callback._callback || r.callback) || n && n !== r.context) && o.push(r);
                        this._events[t] = o
                    }
                    return this
                },
                trigger: function(t) {
                    if (!this._events) return this;
                    var i = e.call(arguments, 1),
                        r = this._events[t],
                        o = this._events.all;
                    return r && n(this, r, i), o && n(this, o, arguments), this
                },
                listenTo: function(t, e, n) {
                    var i = this._listeners || (this._listeners = {}),
                        r = t._listenerId || (t._listenerId = _.uniqueId("l"));
                    return i[r] = t, t.on(e, n || this, this), this
                },
                stopListening: function(t, e, n) {
                    var i = this._listeners;
                    if (i) {
                        if (t) t.off(e, n, this), e || n || delete i[t._listenerId];
                        else {
                            for (var r in i) i[r].off(null, null, this);
                            this._listeners = {}
                        }
                        return this
                    }
                }
            };
        i.bind = i.on, i.unbind = i.off, "undefined" != typeof exports && ("undefined" != typeof module && module.exports && (exports = module.exports = i), exports.Backbone = exports.Backbone || Backbone)
    }(), function() {
    function t(t, i) {
        var r = (new Date).getTime(),
            o = Math.max(0, 16 - (r - n)),
            s = e.setTimeout(function() {
                t(r + o)
            }, o);
        return n = r + o, s
    }
    var e = this,
        n = 0,
        i = ["ms", "moz", "webkit", "o"];
    if ("undefined" != typeof exports) return "undefined" != typeof module && module.exports && (exports = module.exports = t), void(exports.requestAnimationFrame = t);
    for (var r = 0; r < i.length && !e.requestAnimationFrame; ++r) e.requestAnimationFrame = e[i[r] + "RequestAnimationFrame"], e.cancelAnimationFrame = e[i[r] + "CancelAnimationFrame"] || e[i[r] + "CancelRequestAnimationFrame"];
    e.requestAnimationFrame || (e.requestAnimationFrame = t), e.cancelAnimationFrame || (e.cancelAnimationFrame = function(t) {
        clearTimeout(t)
    })
}(), function(t, e, n, i) {
    function r() {
        var t = document.body.getBoundingClientRect(),
            e = this.width = t.width,
            n = this.height = t.height;
        this.renderer.setSize(e, n, this.ratio), this.trigger(b.Events.resize, e, n)
    }
    function o() {
        return (s.performance && s.performance.now ? s.performance : Date).now()
    }
    var s = this,
        a = Math.sin,
        l = Math.cos,
        u = Math.atan2,
        c = Math.sqrt,
        h = (Math.round, Math.abs, Math.PI),
        f = 2 * h,
        d = h / 2,
        p = Math.pow,
        m = Math.min,
        g = Math.max,
        v = 0,
        y = {
            temp: document.createElement("div"),
            hasEventListeners: e.isFunction(s.addEventListener),
            bind: function(t, e, n, i) {
                return this.hasEventListeners ? t.addEventListener(e, n, !! i) : t.attachEvent("on" + e, n), this
            },
            unbind: function(t, e, n, i) {
                return this.hasEventListeners ? t.removeEventListeners(e, n, !! i) : t.detachEvent("on" + e, n), this
            }
        },
        b = s.Two = function(t) {
            var n = e.defaults(t || {}, {
                fullscreen: !1,
                width: 640,
                height: 480,
                type: b.Types.svg,
                autostart: !1
            });
            if (e.each(n, function(t, e) {
                    "fullscreen" !== e && "width" !== e && "height" !== e && "autostart" !== e && (this[e] = t)
                }, this), e.isElement(n.domElement) && (this.type = b.Types[n.domElement.tagName.toLowerCase()]), this.renderer = new b[this.type](this), b.Utils.setPlaying.call(this, n.autostart), this.frameCount = 0, n.fullscreen) {
                var i = e.bind(r, this);
                e.extend(document.body.style, {
                    overflow: "hidden",
                    margin: 0,
                    padding: 0,
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    position: "fixed"
                }), e.extend(this.renderer.domElement.style, {
                    display: "block",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    position: "fixed"
                }), y.bind(s, "resize", i), i()
            } else e.isElement(n.domElement) || (this.renderer.setSize(n.width, n.height, this.ratio), this.width = n.width, this.height = n.height);
            this.scene = this.renderer.scene, b.Instances.push(this)
        };
    e.extend(b, {
        Array: s.Float32Array || Array,
        Types: {
            webgl: "WebGLRenderer",
            svg: "SVGRenderer",
            canvas: "CanvasRenderer"
        },
        Version: "v0.5.0",
        Identifier: "two_",
        Properties: {
            hierarchy: "hierarchy",
            demotion: "demotion"
        },
        Events: {
            play: "play",
            pause: "pause",
            update: "update",
            render: "render",
            resize: "resize",
            change: "change",
            remove: "remove",
            insert: "insert",
            order: "order"
        },
        Commands: {
            move: "M",
            line: "L",
            curve: "C",
            close: "Z"
        },
        Resolution: 8,
        Instances: [],
        noConflict: function() {
            return s.Two = t, this
        },
        uniqueId: function() {
            var t = v;
            return v++, t
        },
        Utils: {
            defineProperty: function(t) {
                var e = this,
                    n = "_" + t,
                    i = "_flag" + t.charAt(0).toUpperCase() + t.slice(1);
                Object.defineProperty(e, t, {
                    get: function() {
                        return this[n]
                    },
                    set: function(t) {
                        this[n] = t, this[i] = !0
                    }
                })
            },
            release: function(t) {
                e.isObject(t) && (e.isFunction(t.unbind) && t.unbind(), t.vertices && (e.isFunction(t.vertices.unbind) && t.vertices.unbind(), e.each(t.vertices, function(t) {
                    e.isFunction(t.unbind) && t.unbind()
                })), t.children && e.each(t.children, function(t) {
                    b.Utils.release(t)
                }))
            },
            xhr: function(t, e) {
                var n = new XMLHttpRequest;
                return n.open("GET", t), n.onreadystatechange = function() {
                    4 === n.readyState && 200 === n.status && e(n.responseText)
                }, n.send(), n
            },
            Curve: {
                CollinearityEpsilon: p(10, -30),
                RecursionLimit: 16,
                CuspLimit: 0,
                Tolerance: {
                    distance: .25,
                    angle: 0,
                    epsilon: .01
                },
                abscissas: [
                    [.5773502691896257],
                    [0, .7745966692414834],
                    [.33998104358485626, .8611363115940526],
                    [0, .5384693101056831, .906179845938664],
                    [.2386191860831969, .6612093864662645, .932469514203152],
                    [0, .4058451513773972, .7415311855993945, .9491079123427585],
                    [.1834346424956498, .525532409916329, .7966664774136267, .9602898564975363],
                    [0, .3242534234038089, .6133714327005904, .8360311073266358, .9681602395076261],
                    [.14887433898163122, .4333953941292472, .6794095682990244, .8650633666889845, .9739065285171717],
                    [0, .26954315595234496, .5190961292068118, .7301520055740494, .8870625997680953, .978228658146057],
                    [.1252334085114689, .3678314989981802, .5873179542866175, .7699026741943047, .9041172563704749, .9815606342467192],
                    [0, .2304583159551348, .44849275103644687, .6423493394403402, .8015780907333099, .9175983992229779, .9841830547185881],
                    [.10805494870734367, .31911236892788974, .5152486363581541, .6872929048116855, .827201315069765, .9284348836635735, .9862838086968123],
                    [0, .20119409399743451, .3941513470775634, .5709721726085388, .7244177313601701, .8482065834104272, .937273392400706, .9879925180204854],
                    [.09501250983763744, .2816035507792589, .45801677765722737, .6178762444026438, .755404408355003, .8656312023878318, .9445750230732326, .9894009349916499]
                ],
                weights: [
                    [1],
                    [.8888888888888888, .5555555555555556],
                    [.6521451548625461, .34785484513745385],
                    [.5688888888888889, .47862867049936647, .23692688505618908],
                    [.46791393457269104, .3607615730481386, .17132449237917036],
                    [.4179591836734694, .3818300505051189, .27970539148927664, .1294849661688697],
                    [.362683783378362, .31370664587788727, .22238103445337448, .10122853629037626],
                    [.3302393550012598, .31234707704000286, .26061069640293544, .1806481606948574, .08127438836157441],
                    [.29552422471475287, .26926671930999635, .21908636251598204, .1494513491505806, .06667134430868814],
                    [.2729250867779006, .26280454451024665, .23319376459199048, .18629021092773426, .1255803694649046, .05566856711617366],
                    [.24914704581340277, .2334925365383548, .20316742672306592, .16007832854334622, .10693932599531843, .04717533638651183],
                    [.2325515532308739, .22628318026289723, .2078160475368885, .17814598076194574, .13887351021978725, .09212149983772845, .04048400476531588],
                    [.2152638534631578, .2051984637212956, .18553839747793782, .15720316715819355, .12151857068790319, .08015808715976021, .03511946033175186],
                    [.2025782419255613, .19843148532711158, .1861610000155622, .16626920581699392, .13957067792615432, .10715922046717194, .07036604748810812, .03075324199611727],
                    [.1894506104550685, .18260341504492358, .16915651939500254, .14959598881657674, .12462897125553388, .09515851168249279, .062253523938647894, .027152459411754096]
                ]
            },
            devicePixelRatio: s.devicePixelRatio || 1,
            getBackingStoreRatio: function(t) {
                return t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1
            },
            getRatio: function(t) {
                return b.Utils.devicePixelRatio / T(t)
            },
            setPlaying: function(t) {
                return this.playing = !! t, this
            },
            getComputedMatrix: function(t, n) {
                n = n && n.identity() || new b.Matrix;
                for (var i = t, r = []; i && i._matrix;) r.push(i._matrix), i = i.parent;
                return r.reverse(), e.each(r, function(t) {
                    var e = t.elements;
                    n.multiply(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9])
                }), n
            },
            deltaTransformPoint: function(t, e, n) {
                var i = e * t.a + n * t.c + 0,
                    r = e * t.b + n * t.d + 0;
                return new b.Vector(i, r)
            },
            decomposeMatrix: function(t) {
                var e = b.Utils.deltaTransformPoint(t, 0, 1),
                    n = b.Utils.deltaTransformPoint(t, 1, 0),
                    i = 180 / Math.PI * Math.atan2(e.y, e.x) - 90,
                    r = 180 / Math.PI * Math.atan2(n.y, n.x);
                return {
                    translateX: t.e,
                    translateY: t.f,
                    scaleX: Math.sqrt(t.a * t.a + t.b * t.b),
                    scaleY: Math.sqrt(t.c * t.c + t.d * t.d),
                    skewX: i,
                    skewY: r,
                    rotation: i
                }
            },
            applySvgAttributes: function(t, n) {
                var i, r, o, s, a = {},
                    l = {};
                if (getComputedStyle) {
                    var u = getComputedStyle(t);
                    for (i = u.length; i--;) r = u[i], o = u[r], void 0 !== o && (l[r] = o)
                }
                for (i = t.attributes.length; i--;) s = t.attributes[i], a[s.nodeName] = s.value;
                e.isUndefined(l.opacity) || (l["stroke-opacity"] = l.opacity, l["fill-opacity"] = l.opacity), e.extend(l, a), l.visible = !(e.isUndefined(l.display) && "none" === l.display) || e.isUndefined(l.visibility) && "hidden" === l.visibility;
                for (r in l) switch (o = l[r], r) {
                    case "transform":
                        if ("none" === o) break;
                        var c = t.getCTM();
                        if (null === c) break;
                        var h = b.Utils.decomposeMatrix(t.getCTM());
                        n.translation.set(h.translateX, h.translateY), n.rotation = h.rotation, n.scale = h.scaleX, l.x && (n.translation.x = l.x), l.y && (n.translation.y = l.y);
                        break;
                    case "visible":
                        n.visible = o;
                        break;
                    case "stroke-linecap":
                        n.cap = o;
                        break;
                    case "stroke-linejoin":
                        n.join = o;
                        break;
                    case "stroke-miterlimit":
                        n.miter = o;
                        break;
                    case "stroke-width":
                        n.linewidth = parseFloat(o);
                        break;
                    case "stroke-opacity":
                    case "fill-opacity":
                    case "opacity":
                        n.opacity = parseFloat(o);
                        break;
                    case "fill":
                    case "stroke":
                        /url\(\#.*\)/i.test(o) ? n[r] = this.getById(o.replace(/url\(\#(.*)\)/i, "$1")) : n[r] = "none" === o ? "transparent" : o;
                        break;
                    case "id":
                        n.id = o;
                        break;
                    case "class":
                        n.classList = o.split(" ")
                }
                return n
            },
            read: {
                svg: function() {
                    return b.Utils.read.g.apply(this, arguments)
                },
                g: function(t) {
                    var e = new b.Group;
                    b.Utils.applySvgAttributes.call(this, t, e);
                    for (var n = 0, i = t.childNodes.length; i > n; n++) {
                        var r = t.childNodes[n],
                            o = r.nodeName;
                        if (!o) return;
                        var s = o.replace(/svg\:/gi, "").toLowerCase();
                        if (s in b.Utils.read) {
                            var a = b.Utils.read[s].call(e, r);
                            e.add(a)
                        }
                    }
                    return e
                },
                polygon: function(t, e) {
                    var n = t.getAttribute("points"),
                        i = [];
                    n.replace(/(-?[\d\.?]+),(-?[\d\.?]+)/g, function(t, e, n) {
                        i.push(new b.Anchor(parseFloat(e), parseFloat(n)))
                    });
                    var r = new b.Path(i, !e).noStroke();
                    return r.fill = "black", b.Utils.applySvgAttributes.call(this, t, r)
                },
                polyline: function(t) {
                    return b.Utils.read.polygon.call(this, t, !0)
                },
                path: function(t) {
                    var n, i, r = t.getAttribute("d"),
                        o = new b.Anchor,
                        s = !1,
                        a = !1,
                        l = r.match(/[a-df-z][^a-df-z]*/gi),
                        u = l.length - 1;
                    e.each(l.slice(0), function(t, e) {
                        var n, i = t[0],
                            r = i.toLowerCase(),
                            o = t.slice(1).trim().split(/[\s,]+|(?=\s?[+\-])/),
                            s = [];
                        switch (0 >= e && (l = []), r) {
                            case "h":
                            case "v":
                                o.length > 1 && (n = 1);
                                break;
                            case "m":
                            case "l":
                            case "t":
                                o.length > 2 && (n = 2);
                                break;
                            case "s":
                            case "q":
                                o.length > 4 && (n = 4);
                                break;
                            case "c":
                                o.length > 6 && (n = 6);
                                break;
                            case "a":
                        }
                        if (n) {
                            for (var a = 0, u = o.length, c = 0; u > a; a += n) {
                                var h = i;
                                if (c > 0) switch (i) {
                                    case "m":
                                        h = "l";
                                        break;
                                    case "M":
                                        h = "L"
                                }
                                s.push([h].concat(o.slice(a, a + n)).join(" ")), c++
                            }
                            l = Array.prototype.concat.apply(l, s)
                        } else l.push(t)
                    });
                    var c = e.flatten(e.map(l, function(t, r) {
                        var l, c, h, f = t[0],
                            d = f.toLowerCase();
                        i = t.slice(1).trim(), i = i.replace(/(-?\d+(?:\.\d*)?)[eE]([+\-]?\d+)/g, function(t, e, n) {
                            return parseFloat(e) * p(10, n)
                        }), i = i.split(/[\s,]+|(?=\s?[+\-])/), a = f === d;
                        var m, g, v, y, x, w, _, C, T;
                        switch (d) {
                            case "z":
                                r >= u ? s = !0 : (c = o.x, h = o.y, l = new b.Anchor(c, h, void 0, void 0, void 0, void 0, b.Commands.close));
                                break;
                            case "m":
                            case "l":
                                c = parseFloat(i[0]), h = parseFloat(i[1]), l = new b.Anchor(c, h, void 0, void 0, void 0, void 0, "m" === d ? b.Commands.move : b.Commands.line), a && l.addSelf(o), o = l;
                                break;
                            case "h":
                            case "v":
                                var E = "h" === d ? "x" : "y",
                                    S = "x" === E ? "y" : "x";
                                l = new b.Anchor(void 0, void 0, void 0, void 0, void 0, void 0, b.Commands.line), l[E] = parseFloat(i[0]), l[S] = o[S], a && (l[E] += o[E]), o = l;
                                break;
                            case "c":
                            case "s":
                                m = o.x, g = o.y, n || (n = new b.Vector), "c" === d ? (v = parseFloat(i[0]), y = parseFloat(i[1]), x = parseFloat(i[2]), w = parseFloat(i[3]), _ = parseFloat(i[4]), C = parseFloat(i[5])) : (T = A(o, n, a), v = T.x, y = T.y, x = parseFloat(i[0]), w = parseFloat(i[1]), _ = parseFloat(i[2]), C = parseFloat(i[3])), a && (v += m, y += g, x += m, w += g, _ += m, C += g), e.isObject(o.controls) || b.Anchor.AppendCurveProperties(o), o.controls.right.set(v - o.x, y - o.y), l = new b.Anchor(_, C, x - _, w - C, void 0, void 0, b.Commands.curve), o = l, n = l.controls.left;
                                break;
                            case "t":
                            case "q":
                                m = o.x, g = o.y, n || (n = new b.Vector), n.isZero() ? (v = m, y = g) : (v = n.x, g = n.y), "q" === d ? (x = parseFloat(i[0]), w = parseFloat(i[1]), _ = parseFloat(i[1]), C = parseFloat(i[2])) : (T = A(o, n, a), x = T.x, w = T.y, _ = parseFloat(i[0]), C = parseFloat(i[1])), a && (v += m, y += g, x += m, w += g, _ += m, C += g), e.isObject(o.controls) || b.Anchor.AppendCurveProperties(o), o.controls.right.set(v - o.x, y - o.y), l = new b.Anchor(_, C, x - _, w - C, void 0, void 0, b.Commands.curve), o = l, n = l.controls.left;
                                break;
                            case "a":
                                m = o.x, g = o.y;
                                var P = parseFloat(i[0]),
                                    $ = parseFloat(i[1]),
                                    M = parseFloat(i[2]) * Math.PI / 180,
                                    j = parseFloat(i[3]),
                                    N = parseFloat(i[4]);
                                _ = parseFloat(i[5]), C = parseFloat(i[6]), a && (_ += m, C += g);
                                var I = (_ - m) / 2,
                                    F = (C - g) / 2,
                                    q = I * Math.cos(M) + F * Math.sin(M),
                                    D = -I * Math.sin(M) + F * Math.cos(M),
                                    O = P * P,
                                    R = $ * $,
                                    L = q * q,
                                    B = D * D,
                                    U = L / O + B / R;
                                U > 1 && (P *= Math.sqrt(U), $ *= Math.sqrt(U));
                                var H = Math.sqrt((O * R - O * B - R * L) / (O * B + R * L));
                                e.isNaN(H) ? H = 0 : j != N && H > 0 && (H *= -1);
                                var W = H * P * D / $,
                                    z = -H * $ * q / P,
                                    V = W * Math.cos(M) - z * Math.sin(M) + (m + _) / 2,
                                    G = W * Math.sin(M) + z * Math.cos(M) + (g + C) / 2,
                                    X = function(t) {
                                        return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2))
                                    },
                                    Q = function(t, e) {
                                        return (t[0] * e[0] + t[1] * e[1]) / (X(t) * X(e))
                                    },
                                    E = function(t, e) {
                                        return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(Q(t, e))
                                    },
                                    Y = E([1, 0], [(q - W) / P, (D - z) / $]),
                                    J = [(q - W) / P, (D - z) / $],
                                    K = [(-q - W) / P, (-D - z) / $],
                                    Z = E(J, K);
                                Q(J, K) <= -1 && (Z = Math.PI), Q(J, K) >= 1 && (Z = 0), j && (Z = k(Z, 2 * Math.PI)), N && Z > 0 && (Z -= 2 * Math.PI);
                                var tt = b.Resolution,
                                    et = (new b.Matrix).translate(V, G).rotate(M);
                                l = e.map(e.range(tt), function(t) {
                                    var e = 1 - t / (tt - 1),
                                        n = e * Z + Y,
                                        i = P * Math.cos(n),
                                        r = $ * Math.sin(n),
                                        o = et.multiply(i, r, 1);
                                    return new b.Anchor(o.x, o.y, !1, !1, !1, !1, b.Commands.line)
                                }), l.push(new b.Anchor(_, C, !1, !1, !1, !1, b.Commands.line)), o = l[l.length - 1], n = o.controls.left
                        }
                        return l
                    }));
                    if (!(c.length <= 1)) {
                        c = e.compact(c);
                        var h = new b.Path(c, s, void 0, !0).noStroke();
                        return h.fill = "black", b.Utils.applySvgAttributes.call(this, t, h)
                    }
                },
                circle: function(t) {
                    var n = parseFloat(t.getAttribute("cx")),
                        i = parseFloat(t.getAttribute("cy")),
                        r = parseFloat(t.getAttribute("r")),
                        o = b.Resolution,
                        s = e.map(e.range(o), function(t) {
                            var e = t / o,
                                n = e * f,
                                i = r * l(n),
                                s = r * a(n);
                            return new b.Anchor(i, s)
                        }),
                        u = new b.Path(s, !0, !0).noStroke();
                    return u.translation.set(n, i), u.fill = "black", b.Utils.applySvgAttributes.call(this, t, u)
                },
                ellipse: function(t) {
                    var n = parseFloat(t.getAttribute("cx")),
                        i = parseFloat(t.getAttribute("cy")),
                        r = parseFloat(t.getAttribute("rx")),
                        o = parseFloat(t.getAttribute("ry")),
                        s = b.Resolution,
                        u = e.map(e.range(s), function(t) {
                            var e = t / s,
                                n = e * f,
                                i = r * l(n),
                                u = o * a(n);
                            return new b.Anchor(i, u)
                        }),
                        c = new b.Path(u, !0, !0).noStroke();
                    return c.translation.set(n, i), c.fill = "black", b.Utils.applySvgAttributes.call(this, t, c)
                },
                rect: function(t) {
                    var e = parseFloat(t.getAttribute("x")) || 0,
                        n = parseFloat(t.getAttribute("y")) || 0,
                        i = parseFloat(t.getAttribute("width")),
                        r = parseFloat(t.getAttribute("height")),
                        o = i / 2,
                        s = r / 2,
                        a = [new b.Anchor(o, s), new b.Anchor(-o, s), new b.Anchor(-o, -s), new b.Anchor(o, -s)],
                        l = new b.Path(a, !0).noStroke();
                    return l.translation.set(e + o, n + s), l.fill = "black", b.Utils.applySvgAttributes.call(this, t, l)
                },
                line: function(t) {
                    var e = parseFloat(t.getAttribute("x1")),
                        n = parseFloat(t.getAttribute("y1")),
                        i = parseFloat(t.getAttribute("x2")),
                        r = parseFloat(t.getAttribute("y2")),
                        o = i - e,
                        s = r - n,
                        a = o / 2,
                        l = s / 2,
                        u = [new b.Anchor(-a, -l), new b.Anchor(a, l)],
                        c = new b.Path(u).noFill();
                    return c.translation.set(e + a, n + l), b.Utils.applySvgAttributes.call(this, t, c)
                },
                lineargradient: function(t) {
                    for (var n = parseFloat(t.getAttribute("x1")), i = parseFloat(t.getAttribute("y1")), r = parseFloat(t.getAttribute("x2")), o = parseFloat(t.getAttribute("y2")), s = (r + n) / 2, a = (o + i) / 2, l = [], u = 0; u < t.children.length; u++) {
                        var c = t.children[u],
                            h = parseFloat(c.getAttribute("offset")),
                            f = c.getAttribute("stop-color"),
                            d = c.getAttribute("stop-opacity"),
                            p = c.getAttribute("style");
                        if (e.isNull(f)) {
                            var m = p.match(/stop\-color\:\s?([\#a-fA-F0-9]*)/);
                            f = m && m.length > 1 ? m[1] : void 0
                        }
                        if (e.isNull(d)) {
                            var m = p.match(/stop\-opacity\:\s?([0-1\.\-]*)/);
                            d = m && m.length > 1 ? parseFloat(m[1]) : 1
                        }
                        l.push(new b.Gradient.Stop(h, f, d))
                    }
                    var g = new b.LinearGradient(n - s, i - a, r - s, o - a, l);
                    return b.Utils.applySvgAttributes.call(this, t, g)
                },
                radialgradient: function(t) {
                    var n = parseFloat(t.getAttribute("cx")) || 0,
                        i = parseFloat(t.getAttribute("cy")) || 0,
                        r = parseFloat(t.getAttribute("r")),
                        o = parseFloat(t.getAttribute("fx")),
                        s = parseFloat(t.getAttribute("fy"));
                    e.isNaN(o) && (o = n), e.isNaN(s) && (s = i);
                    for (var a = Math.abs(n + o) / 2, l = Math.abs(i + s) / 2, u = [], c = 0; c < t.children.length; c++) {
                        var h = t.children[c],
                            f = parseFloat(h.getAttribute("offset")),
                            d = h.getAttribute("stop-color"),
                            p = h.getAttribute("stop-opacity"),
                            m = h.getAttribute("style");
                        if (e.isNull(d)) {
                            var g = m.match(/stop\-color\:\s?([\#a-fA-F0-9]*)/);
                            d = g && g.length > 1 ? g[1] : void 0
                        }
                        if (e.isNull(p)) {
                            var g = m.match(/stop\-opacity\:\s?([0-1\.\-]*)/);
                            p = g && g.length > 1 ? parseFloat(g[1]) : 1
                        }
                        u.push(new b.Gradient.Stop(f, d, p))
                    }
                    var v = new b.RadialGradient(n - a, i - l, r, u, o - a, s - l);
                    return b.Utils.applySvgAttributes.call(this, t, v)
                }
            },
            subdivide: function(t, n, i, r, o, s, a, l, u) {
                u = u || b.Utils.Curve.RecursionLimit;
                var c = u + 1;
                return t === a && n === l ? [new b.Anchor(a, l)] : e.map(e.range(0, c), function(e) {
                    var u = e / c,
                        h = E(u, t, i, o, a),
                        f = E(u, n, r, s, l);
                    return new b.Anchor(h, f)
                })
            },
            getPointOnCubicBezier: function(t, e, n, i, r) {
                var o = 1 - t;
                return o * o * o * e + 3 * o * o * t * n + 3 * o * t * t * i + t * t * t * r
            },
            getCurveLength: function(t, e, n, i, r, o, s, a, l) {
                if (t === n && e === i && r === s && o === a) {
                    var u = s - t,
                        h = a - e;
                    return c(u * u + h * h)
                }
                var f = 9 * (n - r) + 3 * (s - t),
                    d = 6 * (t + r) - 12 * n,
                    p = 3 * (n - t),
                    m = 9 * (i - o) + 3 * (a - e),
                    g = 6 * (e + o) - 12 * i,
                    v = 3 * (i - e),
                    y = function(t) {
                        var e = (f * t + d) * t + p,
                            n = (m * t + g) * t + v;
                        return c(e * e + n * n)
                    };
                return S(y, 0, 1, l || b.Utils.Curve.RecursionLimit)
            },
            integrate: function(t, e, n, i) {
                for (var r = b.Utils.Curve.abscissas[i - 2], o = b.Utils.Curve.weights[i - 2], s = .5 * (n - e), a = s + e, l = 0, u = i + 1 >> 1, c = 1 & i ? o[l++] * t(a) : 0; u > l;) {
                    var h = s * r[l];
                    c += o[l++] * (t(a + h) + t(a - h))
                }
                return s * c
            },
            getCurveFromPoints: function(t, n) {
                for (var i = t.length, r = i - 1, o = 0; i > o; o++) {
                    var s = t[o];
                    e.isObject(s.controls) || b.Anchor.AppendCurveProperties(s);
                    var a = n ? k(o - 1, i) : g(o - 1, 0),
                        l = n ? k(o + 1, i) : m(o + 1, r),
                        u = t[a],
                        c = s,
                        h = t[l];
                    C(u, c, h), c._command = 0 === o ? b.Commands.move : b.Commands.curve, c.controls.left.x = e.isNumber(c.controls.left.x) ? c.controls.left.x : c.x, c.controls.left.y = e.isNumber(c.controls.left.y) ? c.controls.left.y : c.y, c.controls.right.x = e.isNumber(c.controls.right.x) ? c.controls.right.x : c.x, c.controls.right.y = e.isNumber(c.controls.right.y) ? c.controls.right.y : c.y
                }
            },
            getControlPoints: function(t, n, i) {
                var r = _(t, n),
                    o = _(i, n),
                    s = x(t, n),
                    u = x(i, n),
                    c = (r + o) / 2;
                return n.u = e.isObject(n.controls.left) ? n.controls.left : new b.Vector(0, 0), n.v = e.isObject(n.controls.right) ? n.controls.right : new b.Vector(0, 0), 1e-4 > s || 1e-4 > u ? (n._relative || (n.controls.left.copy(n), n.controls.right.copy(n)), n) : (s *= .33, u *= .33, r > o ? c += d : c -= d, n.controls.left.x = l(c) * s, n.controls.left.y = a(c) * s, c -= h, n.controls.right.x = l(c) * u, n.controls.right.y = a(c) * u, n._relative || (n.controls.left.x += n.x, n.controls.left.y += n.y, n.controls.right.x += n.x, n.controls.right.y += n.y), n)
            },
            getReflection: function(t, e, n) {
                return new b.Vector(2 * t.x - (e.x + t.x) - (n ? t.x : 0), 2 * t.y - (e.y + t.y) - (n ? t.y : 0))
            },
            getAnchorsFromArcData: function(t, n, i, r, o, s, a) {
                var l = ((new b.Matrix).translate(t.x, t.y).rotate(n), b.Resolution);
                return e.map(e.range(l), function(t) {
                    var e = (t + 1) / l;
                    a && (e = 1 - e);
                    var n = e * s + o,
                        u = i * Math.cos(n),
                        c = r * Math.sin(n),
                        h = new b.Anchor(u, c);
                    return b.Anchor.AppendCurveProperties(h), h.command = b.Commands.line, h
                })
            },
            ratioBetween: function(t, e) {
                return (t.x * e.x + t.y * e.y) / (t.length() * e.length())
            },
            angleBetween: function(t, e) {
                var n, i;
                return arguments.length >= 4 ? (n = arguments[0] - arguments[2], i = arguments[1] - arguments[3], u(i, n)) : (n = t.x - e.x, i = t.y - e.y, u(i, n))
            },
            distanceBetweenSquared: function(t, e) {
                var n = t.x - e.x,
                    i = t.y - e.y;
                return n * n + i * i
            },
            distanceBetween: function(t, e) {
                return c(w(t, e))
            },
            toFixed: function(t) {
                return Math.floor(1e3 * t) / 1e3
            },
            mod: function(t, e) {
                for (; 0 > t;) t += e;
                return t % e
            },
            Collection: function() {
                Array.call(this), arguments.length > 1 ? Array.prototype.push.apply(this, arguments) : arguments[0] && Array.isArray(arguments[0]) && Array.prototype.push.apply(this, arguments[0])
            },
            Error: function(t) {
                this.name = "two.js", this.message = t
            }
        }
    }), b.Utils.Error.prototype = new Error, b.Utils.Error.prototype.constructor = b.Utils.Error, b.Utils.Collection.prototype = new Array, b.Utils.Collection.constructor = b.Utils.Collection, e.extend(b.Utils.Collection.prototype, n.Events, {
        pop: function() {
            var t = Array.prototype.pop.apply(this, arguments);
            return this.trigger(b.Events.remove, [t]), t
        },
        shift: function() {
            var t = Array.prototype.shift.apply(this, arguments);
            return this.trigger(b.Events.remove, [t]), t
        },
        push: function() {
            var t = Array.prototype.push.apply(this, arguments);
            return this.trigger(b.Events.insert, arguments), t
        },
        unshift: function() {
            var t = Array.prototype.unshift.apply(this, arguments);
            return this.trigger(b.Events.insert, arguments), t
        },
        splice: function() {
            var t, e = Array.prototype.splice.apply(this, arguments);
            return this.trigger(b.Events.remove, e), arguments.length > 2 && (t = this.slice(arguments[0], arguments.length - 2), this.trigger(b.Events.insert, t), this.trigger(b.Events.order)), e
        },
        sort: function() {
            return Array.prototype.sort.apply(this, arguments), this.trigger(b.Events.order), this
        },
        reverse: function() {
            return Array.prototype.reverse.apply(this, arguments), this.trigger(b.Events.order), this
        }
    });
    var x = b.Utils.distanceBetween,
        w = (b.Utils.getAnchorsFromArcData, b.Utils.distanceBetweenSquared),
        _ = (b.Utils.ratioBetween, b.Utils.angleBetween),
        C = b.Utils.getControlPoints,
        k = (b.Utils.getCurveFromPoints, b.Utils.solveSegmentIntersection, b.Utils.decoupleShapes, b.Utils.mod),
        T = b.Utils.getBackingStoreRatio,
        E = b.Utils.getPointOnCubicBezier,
        S = (b.Utils.getCurveLength, b.Utils.integrate),
        A = b.Utils.getReflection;
    e.extend(b.prototype, n.Events, {
        appendTo: function(t) {
            return t.appendChild(this.renderer.domElement), this
        },
        play: function() {
            return b.Utils.setPlaying.call(this, !0), this.trigger(b.Events.play)
        },
        pause: function() {
            return this.playing = !1, this.trigger(b.Events.pause)
        },
        update: function() {
            var t = !! this._lastFrame,
                e = o();
            this.frameCount++, t && (this.timeDelta = parseFloat((e - this._lastFrame).toFixed(3))), this._lastFrame = e;
            var n = this.width,
                i = this.height,
                r = this.renderer;
            return (n !== r.width || i !== r.height) && r.setSize(n, i, this.ratio), this.trigger(b.Events.update, this.frameCount, this.timeDelta), this.render()
        },
        render: function() {
            return this.renderer.render(), this.trigger(b.Events.render, this.frameCount)
        },
        add: function(t) {
            var n = t;
            return n instanceof Array || (n = e.toArray(arguments)), this.scene.add(n), this
        },
        remove: function(t) {
            var n = t;
            return n instanceof Array || (n = e.toArray(arguments)), this.scene.remove(n), this
        },
        clear: function() {
            return this.scene.remove(e.toArray(this.scene.children)), this
        },
        makeLine: function(t, e, n, i) {
            var r = new b.Line(t, e, n, i);
            return this.scene.add(r), r
        },
        makeRectangle: function(t, e, n, i) {
            var r = new b.Rectangle(t, e, n, i);
            return this.scene.add(r), r
        },
        makeRoundedRectangle: function(t, e, n, i, r) {
            var o = new b.RoundedRectangle(t, e, n, i, r);
            return this.scene.add(o), o
        },
        makeCircle: function(t, e, n) {
            return this.makeEllipse(t, e, n, n)
        },
        makeEllipse: function(t, e, n, i) {
            var r = new b.Ellipse(t, e, n, i);
            return this.scene.add(r), r
        },
        makeStar: function(t, e, n, i, r) {
            var o = new b.Star(t, e, n, i, r);
            return this.scene.add(o), o
        },
        makeCurve: function(t) {
            var n = arguments.length,
                i = t;
            if (!e.isArray(t)) {
                i = [];
                for (var r = 0; n > r; r += 2) {
                    var o = arguments[r];
                    if (!e.isNumber(o)) break;
                    var s = arguments[r + 1];
                    i.push(new b.Anchor(o, s))
                }
            }
            var a = arguments[n - 1],
                l = new b.Path(i, !(e.isBoolean(a) ? a : void 0), !0),
                u = l.getBoundingClientRect();
            return l.center().translation.set(u.left + u.width / 2, u.top + u.height / 2), this.scene.add(l), l
        },
        makePolygon: function(t, e, n, i) {
            var r = new b.Polygon(t, e, n, i);
            return this.scene.add(r), r
        },
        makeArcSegment: function(t, e, n, i, r, o, s) {
            var a = new b.ArcSegment(t, e, n, i, r, o, s);
            return this.scene.add(a), a
        },
        makePath: function(t) {
            var n = arguments.length,
                i = t;
            if (!e.isArray(t)) {
                i = [];
                for (var r = 0; n > r; r += 2) {
                    var o = arguments[r];
                    if (!e.isNumber(o)) break;
                    var s = arguments[r + 1];
                    i.push(new b.Anchor(o, s))
                }
            }
            var a = arguments[n - 1],
                l = new b.Path(i, !(e.isBoolean(a) ? a : void 0)),
                u = l.getBoundingClientRect();
            return l.center().translation.set(u.left + u.width / 2, u.top + u.height / 2), this.scene.add(l), l
        },
        makeLinearGradient: function(t, e, n, i) {
            var r = Array.prototype.slice.call(arguments, 4),
                o = new b.LinearGradient(t, e, n, i, r);
            return this.add(o), o
        },
        makeRadialGradient: function(t, e, n) {
            var i = Array.prototype.slice.call(arguments, 3),
                r = new b.RadialGradient(t, e, n, i);
            return this.add(r), r
        },
        makeGroup: function(t) {
            var n = t;
            n instanceof Array || (n = e.toArray(arguments));
            var i = new b.Group;
            return this.scene.add(i), i.add(n), i
        },
        interpret: function(t, e) {
            var n = t.tagName.toLowerCase();
            if (!(n in b.Utils.read)) return null;
            var i = b.Utils.read[n].call(this, t);
            return e && i instanceof b.Group ? this.add(i.children) : this.add(i), i
        },
        load: function(t, n) {
            var i, r, o = [];
            if (/.*\.svg/gi.test(t)) return b.Utils.xhr(t, e.bind(function(t) {
                for (y.temp.innerHTML = t, r = 0; r < y.temp.children.length; r++) i = y.temp.children[r], o.push(this.interpret(i));
                n(o.length <= 1 ? o[0] : o, y.temp.children.length <= 1 ? y.temp.children[0] : y.temp.children)
            }, this)), this;
            for (y.temp.innerHTML = t, r = 0; r < y.temp.children.length; r++) i = y.temp.children[r], o.push(this.interpret(i));
            return n(o.length <= 1 ? o[0] : o, y.temp.children.length <= 1 ? y.temp.children[0] : y.temp.children), this
        }
    }), function() {
        i(arguments.callee), b.Instances.forEach(function(t) {
            t.playing && t.update()
        })
    }(), "function" == typeof define && define.amd ? define(function() {
        return b
    }) : "undefined" != typeof module && module.exports && (module.exports = b)
}(this.Two || {}, "function" == typeof require ? require("underscore") : this._, "function" == typeof require ? require("backbone") : this.Backbone, "function" == typeof require ? require("requestAnimationFrame") : this.requestAnimationFrame), function(t, e, n, i) {
    var r = t.Vector = function(t, e) {
        this.x = t || 0, this.y = e || 0
    };
    e.extend(r, {
        zero: new t.Vector
    }), e.extend(r.prototype, n.Events, {
        set: function(t, e) {
            return this.x = t, this.y = e, this
        },
        copy: function(t) {
            return this.x = t.x, this.y = t.y, this
        },
        clear: function() {
            return this.x = 0, this.y = 0, this
        },
        clone: function() {
            return new r(this.x, this.y)
        },
        add: function(t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this
        },
        addSelf: function(t) {
            return this.x += t.x, this.y += t.y, this
        },
        sub: function(t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this
        },
        subSelf: function(t) {
            return this.x -= t.x, this.y -= t.y, this
        },
        multiplySelf: function(t) {
            return this.x *= t.x, this.y *= t.y, this
        },
        multiplyScalar: function(t) {
            return this.x *= t, this.y *= t, this
        },
        divideScalar: function(t) {
            return t ? (this.x /= t, this.y /= t) : this.set(0, 0), this
        },
        negate: function() {
            return this.multiplyScalar(-1)
        },
        dot: function(t) {
            return this.x * t.x + this.y * t.y
        },
        lengthSquared: function() {
            return this.x * this.x + this.y * this.y
        },
        length: function() {
            return Math.sqrt(this.lengthSquared())
        },
        normalize: function() {
            return this.divideScalar(this.length())
        },
        distanceTo: function(t) {
            return Math.sqrt(this.distanceToSquared(t))
        },
        distanceToSquared: function(t) {
            var e = this.x - t.x,
                n = this.y - t.y;
            return e * e + n * n
        },
        setLength: function(t) {
            return this.normalize().multiplyScalar(t)
        },
        equals: function(t, e) {
            return e = "undefined" == typeof e ? 1e-4 : e, this.distanceTo(t) < e
        },
        lerp: function(t, e) {
            var n = (t.x - this.x) * e + this.x,
                i = (t.y - this.y) * e + this.y;
            return this.set(n, i)
        },
        isZero: function(t) {
            return t = "undefined" == typeof t ? 1e-4 : t, this.length() < t
        },
        toString: function() {
            return this.x + "," + this.y
        },
        toObject: function() {
            return {
                x: this.x,
                y: this.y
            }
        }
    });
    var o = {
            set: function(e, n) {
                return this._x = e, this._y = n, this.trigger(t.Events.change)
            },
            copy: function(e) {
                return this._x = e.x, this._y = e.y, this.trigger(t.Events.change)
            },
            clear: function() {
                return this._x = 0, this._y = 0, this.trigger(t.Events.change)
            },
            clone: function() {
                return new r(this._x, this._y)
            },
            add: function(e, n) {
                return this._x = e.x + n.x, this._y = e.y + n.y, this.trigger(t.Events.change)
            },
            addSelf: function(e) {
                return this._x += e.x, this._y += e.y, this.trigger(t.Events.change)
            },
            sub: function(e, n) {
                return this._x = e.x - n.x, this._y = e.y - n.y, this.trigger(t.Events.change)
            },
            subSelf: function(e) {
                return this._x -= e.x, this._y -= e.y, this.trigger(t.Events.change)
            },
            multiplySelf: function(e) {
                return this._x *= e.x, this._y *= e.y, this.trigger(t.Events.change)
            },
            multiplyScalar: function(e) {
                return this._x *= e, this._y *= e, this.trigger(t.Events.change)
            },
            divideScalar: function(e) {
                return e ? (this._x /= e, this._y /= e, this.trigger(t.Events.change)) : this.clear()
            },
            negate: function() {
                return this.multiplyScalar(-1)
            },
            dot: function(t) {
                return this._x * t.x + this._y * t.y
            },
            lengthSquared: function() {
                return this._x * this._x + this._y * this._y
            },
            length: function() {
                return Math.sqrt(this.lengthSquared())
            },
            normalize: function() {
                return this.divideScalar(this.length())
            },
            distanceTo: function(t) {
                return Math.sqrt(this.distanceToSquared(t))
            },
            distanceToSquared: function(t) {
                var e = this._x - t.x,
                    n = this._y - t.y;
                return e * e + n * n
            },
            setLength: function(t) {
                return this.normalize().multiplyScalar(t)
            },
            equals: function(t, e) {
                return e = "undefined" == typeof e ? 1e-4 : e, this.distanceTo(t) < e
            },
            lerp: function(t, e) {
                var n = (t.x - this._x) * e + this._x,
                    i = (t.y - this._y) * e + this._y;
                return this.set(n, i)
            },
            isZero: function(t) {
                return t = "undefined" == typeof t ? 1e-4 : t, this.length() < t
            },
            toString: function() {
                return this._x + "," + this._y
            },
            toObject: function() {
                return {
                    x: this._x,
                    y: this._y
                }
            }
        },
        s = {
            get: function() {
                return this._x
            },
            set: function(e) {
                this._x = e, this.trigger(t.Events.change, "x")
            }
        },
        a = {
            get: function() {
                return this._y
            },
            set: function(e) {
                this._y = e, this.trigger(t.Events.change, "y")
            }
        };
    t.Vector.prototype.bind = t.Vector.prototype.on = function() {
        return this._bound || (this._x = this.x, this._y = this.y, Object.defineProperty(this, "x", s), Object.defineProperty(this, "y", a), e.extend(this, o), this._bound = !0), n.Events.bind.apply(this, arguments), this
    }
}(this.Two || {}, "function" == typeof require ? require("underscore") : this._, "function" == typeof require ? require("backbone") : this.Backbone, "function" == typeof require ? require("requestAnimationFrame") : this.requestAnimationFrame), function(t, e, n, i) {
    var r = t.Commands,
        o = t.Anchor = function(n, i, s, a, l, u, c) {
            return t.Vector.call(this, n, i), this._broadcast = e.bind(function() {
                this.trigger(t.Events.change)
            }, this), this._command = c || r.move, this._relative = !0, c ? (o.AppendCurveProperties(this), e.isNumber(s) && (this.controls.left.x = s), e.isNumber(a) && (this.controls.left.y = a), e.isNumber(l) && (this.controls.right.x = l), void(e.isNumber(u) && (this.controls.right.y = u))) : this
        };
    e.extend(o, {
        AppendCurveProperties: function(e) {
            e.controls = {
                left: new t.Vector(0, 0),
                right: new t.Vector(0, 0)
            }
        }
    });
    var s = {
        listen: function() {
            return e.isObject(this.controls) || o.AppendCurveProperties(this), this.controls.left.bind(t.Events.change, this._broadcast), this.controls.right.bind(t.Events.change, this._broadcast), this
        },
        ignore: function() {
            return this.controls.left.unbind(t.Events.change, this._broadcast), this.controls.right.unbind(t.Events.change, this._broadcast), this
        },
        clone: function() {
            var e = this.controls,
                n = new t.Anchor(this.x, this.y, e && e.left.x, e && e.left.y, e && e.right.x, e && e.right.y, this.command);
            return n.relative = this._relative, n
        },
        toObject: function() {
            var t = {
                x: this.x,
                y: this.y
            };
            return this._command && (t.command = this._command), this._relative && (t.relative = this._relative), this.controls && (t.controls = {
                left: this.controls.left.toObject(),
                right: this.controls.right.toObject()
            }), t
        }
    };
    Object.defineProperty(o.prototype, "command", {
        get: function() {
            return this._command
        },
        set: function(n) {
            return this._command = n, this._command !== r.curve || e.isObject(this.controls) || o.AppendCurveProperties(this), this.trigger(t.Events.change)
        }
    }), Object.defineProperty(o.prototype, "relative", {
        get: function() {
            return this._relative
        },
        set: function(e) {
            return this._relative == e ? this : (this._relative = !! e, this.trigger(t.Events.change))
        }
    }), e.extend(o.prototype, t.Vector.prototype, s), t.Anchor.prototype.bind = t.Anchor.prototype.on = function() {
        t.Vector.prototype.bind.apply(this, arguments), e.extend(this, s)
    }, t.Anchor.prototype.unbind = t.Anchor.prototype.off = function() {
        t.Vector.prototype.unbind.apply(this, arguments), e.extend(this, s)
    }
}(this.Two || {}, "function" == typeof require ? require("underscore") : this._, "function" == typeof require ? require("backbone") : this.Backbone, "function" == typeof require ? require("requestAnimationFrame") : this.requestAnimationFrame), function(t, e, n, i) {
    var r = Math.cos,
        o = Math.sin,
        s = Math.tan,
        a = t.Matrix = function(n, i, r, o, s, a) {
            this.elements = new t.Array(9);
            var l = n;
            e.isArray(l) || (l = e.toArray(arguments)), this.identity().set(l)
        };
    e.extend(a, {
        Identity: [1, 0, 0, 0, 1, 0, 0, 0, 1],
        Multiply: function(e, n, i) {
            if (n.length <= 3) {
                var r, o, s, a = e,
                    l = n[0] || 0,
                    u = n[1] || 0,
                    c = n[2] || 0;
                return r = a[0] * l + a[1] * u + a[2] * c, o = a[3] * l + a[4] * u + a[5] * c, s = a[6] * l + a[7] * u + a[8] * c, {
                    x: r,
                    y: o,
                    z: s
                }
            }
            var h = e[0],
                f = e[1],
                d = e[2],
                p = e[3],
                m = e[4],
                g = e[5],
                v = e[6],
                y = e[7],
                b = e[8],
                x = n[0],
                w = n[1],
                _ = n[2],
                C = n[3],
                k = n[4],
                T = n[5],
                E = n[6],
                S = n[7],
                A = n[8];
            return i = i || new t.Array(9), i[0] = h * x + f * C + d * E, i[1] = h * w + f * k + d * S, i[2] = h * _ + f * T + d * A, i[3] = p * x + m * C + g * E, i[4] = p * w + m * k + g * S, i[5] = p * _ + m * T + g * A, i[6] = v * x + y * C + b * E, i[7] = v * w + y * k + b * S, i[8] = v * _ + y * T + b * A, i
        }
    }), e.extend(a.prototype, n.Events, {
        set: function(n) {
            var i = n;
            return e.isArray(i) || (i = e.toArray(arguments)), e.extend(this.elements, i), this.trigger(t.Events.change)
        },
        identity: function() {
            return this.set(a.Identity), this
        },
        multiply: function(n, i, r, o, s, a, l, u, c) {
            var h = arguments,
                f = h.length;
            if (1 >= f) return e.each(this.elements, function(t, e) {
                this.elements[e] = t * n
            }, this), this.trigger(t.Events.change);
            if (3 >= f) {
                var d, p, m;
                return n = n || 0, i = i || 0, r = r || 0, s = this.elements, d = s[0] * n + s[1] * i + s[2] * r, p = s[3] * n + s[4] * i + s[5] * r, m = s[6] * n + s[7] * i + s[8] * r, {
                    x: d,
                    y: p,
                    z: m
                }
            }
            var g = this.elements,
                v = h,
                y = g[0],
                b = g[1],
                x = g[2],
                w = g[3],
                _ = g[4],
                C = g[5],
                k = g[6],
                T = g[7],
                E = g[8],
                S = v[0],
                A = v[1],
                P = v[2],
                $ = v[3],
                M = v[4],
                j = v[5],
                N = v[6],
                I = v[7],
                F = v[8];
            return this.elements[0] = y * S + b * $ + x * N, this.elements[1] = y * A + b * M + x * I, this.elements[2] = y * P + b * j + x * F, this.elements[3] = w * S + _ * $ + C * N, this.elements[4] = w * A + _ * M + C * I, this.elements[5] = w * P + _ * j + C * F, this.elements[6] = k * S + T * $ + E * N, this.elements[7] = k * A + T * M + E * I, this.elements[8] = k * P + T * j + E * F, this.trigger(t.Events.change)
        },
        inverse: function(e) {
            var n = this.elements;
            e = e || new t.Matrix;
            var i = n[0],
                r = n[1],
                o = n[2],
                s = n[3],
                a = n[4],
                l = n[5],
                u = n[6],
                c = n[7],
                h = n[8],
                f = h * a - l * c,
                d = -h * s + l * u,
                p = c * s - a * u,
                m = i * f + r * d + o * p;
            return m ? (m = 1 / m, e.elements[0] = f * m, e.elements[1] = (-h * r + o * c) * m, e.elements[2] = (l * r - o * a) * m, e.elements[3] = d * m, e.elements[4] = (h * i - o * u) * m, e.elements[5] = (-l * i + o * s) * m, e.elements[6] = p * m, e.elements[7] = (-c * i + r * u) * m, e.elements[8] = (a * i - r * s) * m, e) : null
        },
        scale: function(t, e) {
            var n = arguments.length;
            return 1 >= n && (e = t), this.multiply(t, 0, 0, 0, e, 0, 0, 0, 1)
        },
        rotate: function(t) {
            var e = r(t),
                n = o(t);
            return this.multiply(e, -n, 0, n, e, 0, 0, 0, 1)
        },
        translate: function(t, e) {
            return this.multiply(1, 0, t, 0, 1, e, 0, 0, 1)
        },
        skewX: function(t) {
            var e = s(t);
            return this.multiply(1, e, 0, 0, 1, 0, 0, 0, 1)
        },
        skewY: function(t) {
            var e = s(t);
            return this.multiply(1, 0, 0, e, 1, 0, 0, 0, 1)
        },
        toString: function(t) {
            var e = [];
            return this.toArray(t, e), e.join(" ")
        },
        toArray: function(t, e) {
            var n = this.elements,
                i = !! e,
                r = parseFloat(n[0].toFixed(3)),
                o = parseFloat(n[1].toFixed(3)),
                s = parseFloat(n[2].toFixed(3)),
                a = parseFloat(n[3].toFixed(3)),
                l = parseFloat(n[4].toFixed(3)),
                u = parseFloat(n[5].toFixed(3));
            if (t) {
                var c = parseFloat(n[6].toFixed(3)),
                    h = parseFloat(n[7].toFixed(3)),
                    f = parseFloat(n[8].toFixed(3));
                return i ? (e[0] = r, e[1] = a, e[2] = c, e[3] = o, e[4] = l, e[5] = h, e[6] = s, e[7] = u, void(e[8] = f)) : [r, a, c, o, l, h, s, u, f]
            }
            return i ? (e[0] = r, e[1] = a, e[2] = o, e[3] = l, e[4] = s, void(e[5] = u)) : [r, a, o, l, s, u]
        },
        clone: function() {
            var e, n, i, r, o, s, a, l, u;
            return e = this.elements[0], n = this.elements[1], i = this.elements[2], r = this.elements[3], o = this.elements[4], s = this.elements[5], a = this.elements[6], l = this.elements[7], u = this.elements[8], new t.Matrix(e, n, i, r, o, s, a, l, u)
        }
    })
}(this.Two || {}, "function" == typeof require ? require("underscore") : this._, "function" == typeof require ? require("backbone") : this.Backbone, "function" == typeof require ? require("requestAnimationFrame") : this.requestAnimationFrame), function(t, e, n, i) {
    var r = t.Utils.mod,
        o = t.Utils.toFixed,
        s = {
            version: 1.1,
            ns: "http://www.w3.org/2000/svg",
            xlink: "http://www.w3.org/1999/xlink",
            createElement: function(t, n) {
                var i = t,
                    r = document.createElementNS(this.ns, i);
                return "svg" === i && (n = e.defaults(n || {}, {
                    version: this.version
                })), e.isEmpty(n) || s.setAttributes(r, n), r
            },
            setAttributes: function(t, e) {
                for (var n = Object.keys(e), i = 0; i < n.length; i++) t.setAttribute(n[i], e[n[i]]);
                return this
            },
            removeAttributes: function(t, e) {
                for (var n in e) t.removeAttribute(n);
                return this
            },
            toString: function(e, n) {
                for (var i, s = e.length, a = s - 1, l = "", u = 0; s > u; u++) {
                    var c, h, f, d, p, m, g, v, y, b = e[u],
                        x = n ? r(u - 1, s) : Math.max(u - 1, 0),
                        w = n ? r(u + 1, s) : Math.min(u + 1, a),
                        _ = e[x],
                        C = e[w],
                        k = o(b._x),
                        T = o(b._y);
                    switch (b._command) {
                        case t.Commands.close:
                            c = t.Commands.close;
                            break;
                        case t.Commands.curve:
                            m = _.controls && _.controls.right || _, g = b.controls && b.controls.left || b, _._relative ? (h = o(m.x + _.x), f = o(m.y + _.y)) : (h = o(m.x), f = o(m.y)), b._relative ? (d = o(g.x + b.x), p = o(g.y + b.y)) : (d = o(g.x), p = o(g.y)), c = (0 === u ? t.Commands.move : t.Commands.curve) + " " + h + " " + f + " " + d + " " + p + " " + k + " " + T;
                            break;
                        case t.Commands.move:
                            i = b, c = t.Commands.move + " " + k + " " + T;
                            break;
                        default:
                            c = b._command + " " + k + " " + T
                    }
                    u >= a && n && (b._command === t.Commands.curve && (C = i, v = b.controls && b.controls.right || b, y = C.controls && C.controls.left || C, b._relative ? (h = o(v.x + b.x), f = o(v.y + b.y)) : (h = o(v.x), f = o(v.y)), C._relative ? (d = o(y.x + C.x), p = o(y.y + C.y)) : (d = o(y.x), p = o(y.y)), k = o(C.x), T = o(C.y), c += " C " + h + " " + f + " " + d + " " + p + " " + k + " " + T), c += " Z"), l += c + " "
                }
                return l
            },
            getClip: function(t) {
                var e = t._renderer.clip;
                if (!e) {
                    for (var n = t; n.parent;) n = n.parent;
                    e = t._renderer.clip = s.createElement("clipPath"), n.defs.appendChild(e)
                }
                return e
            },
            group: {
                appendChild: function(t) {
                    var e = t._renderer.elem;
                    if (e) {
                        var n = e.nodeName;
                        !n || /(radial|linear)gradient/i.test(n) || t._clip || this.elem.appendChild(e)
                    }
                },
                removeChild: function(t) {
                    var e = t._renderer.elem;
                    if (e && e.parentNode == this.elem) {
                        var n = e.nodeName;
                        n && (t._clip || this.elem.removeChild(e))
                    }
                },
                orderChild: function(t) {
                    this.elem.appendChild(t._renderer.elem)
                },
                renderChild: function(t) {
                    s[t._renderer.type].render.call(t, this)
                },
                render: function(t) {
                    if (this._update(), 0 === this._opacity && !this._flagOpacity) return this;
                    this._renderer.elem || (this._renderer.elem = s.createElement("g", {
                        id: this.id
                    }), t.appendChild(this._renderer.elem));
                    var e = this._matrix.manual || this._flagMatrix,
                        n = {
                            domElement: t,
                            elem: this._renderer.elem
                        };
                    e && this._renderer.elem.setAttribute("transform", "matrix(" + this._matrix.toString() + ")");
                    for (var i = 0; i < this.children.length; i++) {
                        var r = this.children[i];
                        s[r._renderer.type].render.call(r, t)
                    }
                    return this._flagOpacity && this._renderer.elem.setAttribute("opacity", this._opacity), this._flagAdditions && this.additions.forEach(s.group.appendChild, n), this._flagSubtractions && this.subtractions.forEach(s.group.removeChild, n), this._flagOrder && this.children.forEach(s.group.orderChild, n), this._flagMask && (this._mask ? this._renderer.elem.setAttribute("clip-path", "url(#" + this._mask.id + ")") : this._renderer.elem.removeAttribute("clip-path")), this.flagReset()
                }
            },
            path: {
                render: function(t) {
                    if (this._update(), 0 === this._opacity && !this._flagOpacity) return this;
                    var e = {},
                        n = this._matrix.manual || this._flagMatrix;
                    if (n && (e.transform = "matrix(" + this._matrix.toString() + ")"), this._flagVertices) {
                        var i = s.toString(this._vertices, this._closed);
                        e.d = i
                    }
                    if (this._flagFill && (e.fill = this._fill && this._fill.id ? "url(#" + this._fill.id + ")" : this._fill), this._flagStroke && (e.stroke = this._stroke), this._flagLinewidth && (e["stroke-width"] = this._linewidth), this._flagOpacity && (e["stroke-opacity"] = this._opacity, e["fill-opacity"] = this._opacity), this._flagVisible && (e.visibility = this._visible ? "visible" : "hidden"), this._flagCap && (e["stroke-linecap"] = this._cap), this._flagJoin && (e["stroke-linejoin"] = this._join), this._flagMiter && (e["stroke-miterlimit"] = this._miter), this._renderer.elem ? s.setAttributes(this._renderer.elem, e) : (e.id = this.id, this._renderer.elem = s.createElement("path", e), t.appendChild(this._renderer.elem)), this._flagClip) {
                        var r = s.getClip(this),
                            o = this._renderer.elem;
                        this._clip ? (o.removeAttribute("id"), r.setAttribute("id", this.id), r.appendChild(o)) : (r.removeAttribute("id"), o.setAttribute("id", this.id), this.parent._renderer.elem.appendChild(o))
                    }
                    return this.flagReset()
                }
            },
            "linear-gradient": {
                render: function(t) {
                    this._update();
                    var e = {};
                    if (this._flagEndPoints && (e.x1 = this.left._x, e.y1 = this.left._y, e.x2 = this.right._x, e.y2 = this.right._y), this._flagSpread && (e.spreadMethod = this._spread), this._renderer.elem ? s.setAttributes(this._renderer.elem, e) : (e.id = this.id, e.gradientUnits = "userSpaceOnUse", this._renderer.elem = s.createElement("linearGradient", e), t.defs.appendChild(this._renderer.elem)), this._flagStops) {
                        this._renderer.elem.childNodes.length = 0;
                        for (var n = 0; n < this.stops.length; n++) {
                            var i = this.stops[n],
                                r = {};
                            i._flagOffset && (r.offset = 100 * i._offset + "%"), i._flagColor && (r["stop-color"] = i._color), i._flagOpacity && (r["stop-opacity"] = i._opacity), i._renderer.elem ? s.setAttributes(i._renderer.elem, r) : i._renderer.elem = s.createElement("stop", r), this._renderer.elem.appendChild(i._renderer.elem), i.flagReset()
                        }
                    }
                    return this.flagReset()
                }
            },
            "radial-gradient": {
                render: function(t) {
                    this._update();
                    var e = {};
                    if (this._flagCenter && (e.cx = this.center._x, e.cy = this.center._y), this._flagFocal && (e.fx = this.focal._x, e.fy = this.focal._y), this._flagRadius && (e.r = this._radius), this._flagSpread && (e.spreadMethod = this._spread), this._renderer.elem ? s.setAttributes(this._renderer.elem, e) : (e.id = this.id, e.gradientUnits = "userSpaceOnUse", this._renderer.elem = s.createElement("radialGradient", e), t.defs.appendChild(this._renderer.elem)), this._flagStops) {
                        this._renderer.elem.childNodes.length = 0;
                        for (var n = 0; n < this.stops.length; n++) {
                            var i = this.stops[n],
                                r = {};
                            i._flagOffset && (r.offset = 100 * i._offset + "%"), i._flagColor && (r["stop-color"] = i._color), i._flagOpacity && (r["stop-opacity"] = i._opacity), i._renderer.elem ? s.setAttributes(i._renderer.elem, r) : i._renderer.elem = s.createElement("stop", r), this._renderer.elem.appendChild(i._renderer.elem), i.flagReset()
                        }
                    }
                    return this.flagReset()
                }
            }
        },
        a = t[t.Types.svg] = function(e) {
            this.domElement = e.domElement || s.createElement("svg"), this.scene = new t.Group, this.scene.parent = this, this.defs = s.createElement("defs"), this.domElement.appendChild(this.defs), this.domElement.defs = this.defs, this.domElement.style.overflow = "hidden"
        };
    e.extend(a, {
        Utils: s
    }), e.extend(a.prototype, n.Events, {
        setSize: function(t, e) {
            return this.width = t, this.height = e, s.setAttributes(this.domElement, {
                width: t,
                height: e
            }), this
        },
        render: function() {
            return s.group.render.call(this.scene, this.domElement), this
        }
    })
}(this.Two || {}, "function" == typeof require ? require("underscore") : this._, "function" == typeof require ? require("backbone") : this.Backbone, "function" == typeof require ? require("requestAnimationFrame") : this.requestAnimationFrame), function(t, e, n, i) {
    var r = t.Utils.mod,
        o = t.Utils.toFixed,
        s = t.Utils.getRatio,
        a = function(t) {
            return 1 == t[0] && 0 == t[3] && 0 == t[1] && 1 == t[4] && 0 == t[2] && 0 == t[5]
        },
        l = {
            isHidden: /(none|transparent)/i,
            group: {
                renderChild: function(t) {
                    l[t._renderer.type].render.call(t, this.ctx, !0, this.clip)
                },
                render: function(t) {
                    this._update();
                    var e = this._matrix.elements,
                        n = this.parent;
                    this._renderer.opacity = this._opacity * (n && n._renderer ? n._renderer.opacity : 1);
                    var i = a(e),
                        r = this._mask;
                    this._renderer.context || (this._renderer.context = {}), this._renderer.context.ctx = t, i || (t.save(), t.transform(e[0], e[3], e[1], e[4], e[2], e[5])), r && l[r._renderer.type].render.call(r, t, !0);
                    for (var o = 0; o < this.children.length; o++) {
                        var s = this.children[o];
                        l[s._renderer.type].render.call(s, t)
                    }
                    return i || t.restore(), this.flagReset()
                }
            },
            path: {
                render: function(n, i, s) {
                    var u, c, h, f, d, p, m, g, v, y, b, x, w, _, C, k, T, E, S, A, P, $, M, j, N, I, F, q, D, O, R;
                    if (this._update(), u = this._matrix.elements, c = this._stroke, h = this._linewidth, f = this._fill, d = this._opacity * this.parent._renderer.opacity, p = this._visible, m = this._cap, g = this._join, v = this._miter, y = this._closed, b = this._vertices, x = b.length, w = x - 1, R = a(u), O = this._clip, !i && (!p || O)) return this;
                    R || (n.save(), n.transform(u[0], u[3], u[1], u[4], u[2], u[5])), f && (e.isString(f) ? n.fillStyle = f : (l[f._renderer.type].render.call(f, n), n.fillStyle = f._renderer.gradient)), c && (e.isString(c) ? n.strokeStyle = c : (l[c._renderer.type].render.call(c, n), n.strokeStyle = c._renderer.gradient)), h && (n.lineWidth = h), v && (n.miterLimit = v), g && (n.lineJoin = g), m && (n.lineCap = m), e.isNumber(d) && (n.globalAlpha = d), n.beginPath();
                    for (var L = 0; L < b.length; L++) switch (T = b[L], q = o(T._x), D = o(T._y), T._command) {
                        case t.Commands.close:
                            n.closePath();
                            break;
                        case t.Commands.curve:
                            C = y ? r(L - 1, x) : Math.max(L - 1, 0), _ = y ? r(L + 1, x) : Math.min(L + 1, w), k = b[C], E = b[_], j = k.controls && k.controls.right || k, N = T.controls && T.controls.left || T, k._relative ? ($ = j.x + o(k._x), M = j.y + o(k._y)) : ($ = o(j.x), M = o(j.y)), T._relative ? (A = N.x + o(T._x), P = N.y + o(T._y)) : (A = o(N.x), P = o(N.y)), n.bezierCurveTo($, M, A, P, q, D), L >= w && y && (E = S, I = T.controls && T.controls.right || T, F = E.controls && E.controls.left || E, T._relative ? ($ = I.x + o(T._x), M = I.y + o(T._y)) : ($ = o(I.x), M = o(I.y)), E._relative ? (A = F.x + o(E._x), P = F.y + o(E._y)) : (A = o(F.x), P = o(F.y)), q = o(E._x), D = o(E._y), n.bezierCurveTo($, M, A, P, q, D));
                            break;
                        case t.Commands.line:
                            n.lineTo(q, D);
                            break;
                        case t.Commands.move:
                            S = T, n.moveTo(q, D)
                    }
                    return y && n.closePath(), O || s || (l.isHidden.test(f) || n.fill(), l.isHidden.test(c) || n.stroke()), R || n.restore(), O && !s && n.clip(), this.flagReset()
                }
            },
            "linear-gradient": {
                render: function(t) {
                    if (this._update(), !this._renderer.gradient || this._flagEndPoints || this._flagStops) {
                        this._renderer.gradient = t.createLinearGradient(this.left._x, this.left._y, this.right._x, this.right._y);
                        for (var e = 0; e < this.stops.length; e++) {
                            var n = this.stops[e];
                            this._renderer.gradient.addColorStop(n._offset, n._color)
                        }
                    }
                    return this.flagReset()
                }
            },
            "radial-gradient": {
                render: function(t) {
                    if (this._update(), !this._renderer.gradient || this._flagCenter || this._flagFocal || this._flagRadius || this._flagStops) {
                        this._renderer.gradient = t.createRadialGradient(this.center._x, this.center._y, 0, this.focal._x, this.focal._y, this._radius);
                        for (var e = 0; e < this.stops.length; e++) {
                            var n = this.stops[e];
                            this._renderer.gradient.addColorStop(n._offset, n._color)
                        }
                    }
                    return this.flagReset()
                }
            }
        },
        u = t[t.Types.canvas] = function(e) {
            var n = e.smoothing !== !1;
            this.domElement = e.domElement || document.createElement("canvas"), this.ctx = this.domElement.getContext("2d"), this.overdraw = e.overdraw || !1, this.ctx.imageSmoothingEnabled = n, this.ctx.mozImageSmoothingEnabled = n, this.ctx.oImageSmoothingEnabled = n, this.ctx.webkitImageSmoothingEnabled = n, this.ctx.imageSmoothingEnabled = n, this.scene = new t.Group, this.scene.parent = this
        };
    e.extend(u, {
        Utils: l
    }), e.extend(u.prototype, n.Events, {
        setSize: function(t, n, i) {
            return this.width = t, this.height = n, this.ratio = e.isUndefined(i) ? s(this.ctx) : i, this.domElement.width = t * this.ratio, this.domElement.height = n * this.ratio, e.extend(this.domElement.style, {
                width: t + "px",
                height: n + "px"
            }), this
        },
        render: function() {
            var t = 1 === this.ratio;
            return t || (this.ctx.save(), this.ctx.scale(this.ratio, this.ratio)), this.overdraw || this.ctx.clearRect(0, 0, this.width, this.height), l.group.render.call(this.scene, this.ctx), t || this.ctx.restore(), this
        }
    })
}(this.Two || {}, "function" == typeof require ? require("underscore") : this._, "function" == typeof require ? require("backbone") : this.Backbone, "function" == typeof require ? require("requestAnimationFrame") : this.requestAnimationFrame), function(t, e, n, i) {
    var r = t.Matrix.Multiply,
        o = t.Utils.mod,
        s = [1, 0, 0, 0, 1, 0, 0, 0, 1],
        a = new t.Array(9),
        l = t.Utils.getRatio,
        u = (t.Utils.getComputedMatrix, t.Utils.toFixed),
        c = {
            isHidden: /(none|transparent)/i,
            canvas: document.createElement("canvas"),
            matrix: new t.Matrix,
            uv: new t.Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]),
            group: {
                removeChild: function(t, e) {
                    if (t.children) for (var n = 0; n < t.children.length; n++) c.group.removeChild(t.children[n], e);
                    else e.deleteTexture(t._renderer.texture), delete t._renderer.texture
                },
                renderChild: function(t) {
                    c[t._renderer.type].render.call(t, this.gl, this.program)
                },
                render: function(e, n) {
                    this._update();
                    var i = this.parent,
                        o = i._matrix && i._matrix.manual || i._flagMatrix,
                        s = this._matrix.manual || this._flagMatrix;
                    if ((o || s) && (this._renderer.matrix || (this._renderer.matrix = new t.Array(9)), this._matrix.toArray(!0, a), r(a, i._renderer.matrix, this._renderer.matrix), this._renderer.scale = this._scale * i._renderer.scale, o && (this._flagMatrix = !0)), this._mask && (e.enable(e.STENCIL_TEST), e.stencilFunc(e.ALWAYS, 1, 1), e.colorMask(!1, !1, !1, !0), e.stencilOp(e.KEEP, e.KEEP, e.INCR), c[this._mask._renderer.type].render.call(this._mask, e, n, this), e.colorMask(!0, !0, !0, !0), e.stencilFunc(e.NOTEQUAL, 0, 1), e.stencilOp(e.KEEP, e.KEEP, e.KEEP)), this._flagOpacity = i._flagOpacity || this._flagOpacity, this._renderer.opacity = this._opacity * (i && i._renderer ? i._renderer.opacity : 1), this._flagSubtractions) for (var l = 0; l < this.subtractions.length; l++) c.group.removeChild(this.subtractions[l], e);
                    return this.children.forEach(c.group.renderChild, {
                        gl: e,
                        program: n
                    }), this._mask && (e.colorMask(!1, !1, !1, !1), e.stencilOp(e.KEEP, e.KEEP, e.DECR), c[this._mask._renderer.type].render.call(this._mask, e, n, this), e.colorMask(!0, !0, !0, !0), e.stencilFunc(e.NOTEQUAL, 0, 1), e.stencilOp(e.KEEP, e.KEEP, e.KEEP), e.disable(e.STENCIL_TEST)), this.flagReset()
                }
            },
            path: {
                render: function(e, n, i) {
                    if (!this._visible || !this._opacity) return this;
                    var o = this.parent,
                        s = o._matrix.manual || o._flagMatrix,
                        l = this._matrix.manual || this._flagMatrix,
                        u = this._flagVertices || this._flagFill || this._fill instanceof t.LinearGradient && (this._fill._flagSpread || this._fill._flagStops || this._fill._flagEndPoints) || this._fill instanceof t.RadialGradient && (this._fill._flagSpread || this._fill._flagStops || this._fill._flagRadius || this._fill._flagCenter || this._fill._flagFocal) || this._stroke instanceof t.LinearGradient && (this._stroke._flagSpread || this._stroke._flagStops || this._stroke._flagEndPoints) || this._stroke instanceof t.RadialGradient && (this._stroke._flagSpread || this._stroke._flagStops || this._stroke._flagRadius || this._stroke._flagCenter || this._stroke._flagFocal) || this._flagStroke || this._flagLinewidth || this._flagOpacity || o._flagOpacity || this._flagVisible || this._flagCap || this._flagJoin || this._flagMiter || this._flagScale || !this._renderer.texture;
                    return this._update(), (s || l) && (this._renderer.matrix || (this._renderer.matrix = new t.Array(9)), this._matrix.toArray(!0, a), r(a, o._renderer.matrix, this._renderer.matrix), this._renderer.scale = this._scale * o._renderer.scale), u && (this._renderer.rect || (this._renderer.rect = {}), this._renderer.triangles || (this._renderer.triangles = new t.Array(12)), this._renderer.opacity = this._opacity * o._renderer.opacity, c.getBoundingClientRect(this._vertices, this._linewidth, this._renderer.rect), c.getTriangles(this._renderer.rect, this._renderer.triangles), c.updateBuffer(e, this, n), c.updateTexture(e, this)), !this._clip || i ? (e.bindBuffer(e.ARRAY_BUFFER, this._renderer.textureCoordsBuffer), e.vertexAttribPointer(n.textureCoords, 2, e.FLOAT, !1, 0, 0), e.bindTexture(e.TEXTURE_2D, this._renderer.texture), e.uniformMatrix3fv(n.matrix, !1, this._renderer.matrix), e.bindBuffer(e.ARRAY_BUFFER, this._renderer.buffer), e.vertexAttribPointer(n.position, 2, e.FLOAT, !1, 0, 0), e.drawArrays(e.TRIANGLES, 0, 6), this.flagReset()) : void 0
                }
            },
            "linear-gradient": {
                render: function(t, e) {
                    if (t.canvas.getContext("2d")) {
                        if (this._update(), !this._renderer.gradient || this._flagEndPoints || this._flagStops) {
                            var n = t.canvas.width / 2,
                                i = t.canvas.height / 2,
                                r = e._renderer.scale;
                            this._renderer.gradient = t.createLinearGradient(this.left._x * r + n, this.left._y * r + i, this.right._x * r + n, this.right._y * r + i);
                            for (var o = 0; o < this.stops.length; o++) {
                                var s = this.stops[o];
                                this._renderer.gradient.addColorStop(s._offset, s._color)
                            }
                        }
                        return this.flagReset()
                    }
                }
            },
            "radial-gradient": {
                render: function(t, e) {
                    if (t.canvas.getContext("2d")) {
                        if (this._update(), !this._renderer.gradient || this._flagCenter || this._flagFocal || this._flagRadius || this._flagStops) {
                            var n = t.canvas.width / 2,
                                i = t.canvas.height / 2;
                            this._renderer.gradient = t.createRadialGradient(this.center._x + n, this.center._y + i, 0, this.focal._x + n, this.focal._y + i, this._radius * e._renderer.scale);
                            for (var r = 0; r < this.stops.length; r++) {
                                var o = this.stops[r];
                                this._renderer.gradient.addColorStop(o._offset, o._color)
                            }
                        }
                        return this.flagReset()
                    }
                }
            },
            getBoundingClientRect: function(t, n, i) {
                var r, o, s = 1 / 0,
                    a = -(1 / 0),
                    l = 1 / 0,
                    u = -(1 / 0);
                t.forEach(function(t) {
                    var e, n, i, r, o, c, h = t.x,
                        f = t.y,
                        d = t.controls;
                    l = Math.min(f, l), s = Math.min(h, s), a = Math.max(h, a), u = Math.max(f, u), t.controls && (o = d.left, c = d.right, o && c && (e = t._relative ? o.x + h : o.x, n = t._relative ? o.y + f : o.y, i = t._relative ? c.x + h : c.x, r = t._relative ? c.y + f : c.y, e && n && i && r && (l = Math.min(n, r, l), s = Math.min(e, i, s), a = Math.max(e, i, a), u = Math.max(n, r, u))))
                }), e.isNumber(n) && (l -= n, s -= n, a += n, u += n), r = a - s, o = u - l, i.top = l, i.left = s, i.right = a, i.bottom = u, i.width = r, i.height = o, i.centroid || (i.centroid = {}), i.centroid.x = -s, i.centroid.y = -l
            },
            getTriangles: function(t, e) {
                var n = t.top,
                    i = t.left,
                    r = t.right,
                    o = t.bottom;
                e[0] = i, e[1] = n, e[2] = r, e[3] = n, e[4] = i, e[5] = o, e[6] = i, e[7] = o, e[8] = r, e[9] = n, e[10] = r, e[11] = o
            },
            updateCanvas: function(n) {
                var i, r, s, a, l, h, f, d, p, m, g, v, y, x, w = n._vertices,
                    _ = this.canvas,
                    C = this.ctx,
                    k = n._renderer.scale,
                    T = n._stroke,
                    E = n._linewidth * k,
                    S = n._fill,
                    A = n._renderer.opacity || n._opacity,
                    P = n._cap,
                    $ = n._join,
                    M = n._miter,
                    j = n._closed,
                    N = w.length,
                    I = N - 1;
                _.width = Math.max(Math.ceil(n._renderer.rect.width * k), 1), _.height = Math.max(Math.ceil(n._renderer.rect.height * k), 1);
                var F = n._renderer.rect.centroid,
                    q = F.x * k,
                    D = F.y * k;
                C.clearRect(0, 0, _.width, _.height), S && (e.isString(S) ? C.fillStyle = S : (c[S._renderer.type].render.call(S, C, n), C.fillStyle = S._renderer.gradient)), T && (e.isString(T) ? C.strokeStyle = T : (c[T._renderer.type].render.call(T, C, n), C.strokeStyle = T._renderer.gradient)), E && (C.lineWidth = E), M && (C.miterLimit = M), $ && (C.lineJoin = $), P && (C.lineCap = P), e.isNumber(A) && (C.globalAlpha = A);
                var O;
                C.beginPath();
                for (var R = 0; R < w.length; R++) switch (b = w[R], y = u(b._x * k + q), x = u(b._y * k + D), b._command) {
                    case t.Commands.close:
                        C.closePath();
                        break;
                    case t.Commands.curve:
                        r = j ? o(R - 1, N) : Math.max(R - 1, 0), i = j ? o(R + 1, N) : Math.min(R + 1, I), s = w[r], a = w[i], p = s.controls && s.controls.right || s, m = b.controls && b.controls.left || b, s._relative ? (f = u((p.x + s._x) * k + q), d = u((p.y + s._y) * k + D)) : (f = u(p.x * k + q), d = u(p.y * k + D)), b._relative ? (l = u((m.x + b._x) * k + q), h = u((m.y + b._y) * k + D)) : (l = u(m.x * k + q), h = u(m.y * k + D)), C.bezierCurveTo(f, d, l, h, y, x), R >= I && j && (a = O, g = b.controls && b.controls.right || b, v = a.controls && a.controls.left || a, b._relative ? (f = u((g.x + b._x) * k + q), d = u((g.y + b._y) * k + D)) : (f = u(g.x * k + q), d = u(g.y * k + D)), a._relative ? (l = u((v.x + a._x) * k + q), h = u((v.y + a._y) * k + D)) : (l = u(v.x * k + q), h = u(v.y * k + D)), y = u(a._x * k + q), x = u(a._y * k + D), C.bezierCurveTo(f, d, l, h, y, x));
                        break;
                    case t.Commands.line:
                        C.lineTo(y, x);
                        break;
                    case t.Commands.move:
                        O = b, C.moveTo(y, x)
                }
                j && C.closePath(), c.isHidden.test(S) || C.fill(), c.isHidden.test(T) || C.stroke()
            },
            updateTexture: function(t, e) {
                this.updateCanvas(e), e._renderer.texture && t.deleteTexture(e._renderer.texture), t.bindBuffer(t.ARRAY_BUFFER, e._renderer.textureCoordsBuffer), e._renderer.texture = t.createTexture(), t.bindTexture(t.TEXTURE_2D, e._renderer.texture), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), this.canvas.width <= 0 || this.canvas.height <= 0 || t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, this.canvas)
            },
            updateBuffer: function(t, n, i) {
                e.isObject(n._renderer.buffer) && t.deleteBuffer(n._renderer.buffer), n._renderer.buffer = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, n._renderer.buffer), t.enableVertexAttribArray(i.position), t.bufferData(t.ARRAY_BUFFER, n._renderer.triangles, t.STATIC_DRAW), e.isObject(n._renderer.textureCoordsBuffer) && t.deleteBuffer(n._renderer.textureCoordsBuffer), n._renderer.textureCoordsBuffer = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, n._renderer.textureCoordsBuffer), t.enableVertexAttribArray(i.textureCoords), t.bufferData(t.ARRAY_BUFFER, this.uv, t.STATIC_DRAW)
            },
            program: {
                create: function(n, i) {
                    var r, o, s;
                    if (r = n.createProgram(), e.each(i, function(t) {
                            n.attachShader(r, t)
                        }), n.linkProgram(r), o = n.getProgramParameter(r, n.LINK_STATUS), !o) throw s = n.getProgramInfoLog(r), n.deleteProgram(r), new t.Utils.Error("unable to link program: " + s);
                    return r
                }
            },
            shaders: {
                create: function(e, n, i) {
                    var r, o, s;
                    if (r = e.createShader(e[i]), e.shaderSource(r, n), e.compileShader(r), o = e.getShaderParameter(r, e.COMPILE_STATUS), !o) throw s = e.getShaderInfoLog(r), e.deleteShader(r), new t.Utils.Error("unable to compile shader " + r + ": " + s);
                    return r
                },
                types: {
                    vertex: "VERTEX_SHADER",
                    fragment: "FRAGMENT_SHADER"
                },
                vertex: ["attribute vec2 a_position;", "attribute vec2 a_textureCoords;", "", "uniform mat3 u_matrix;", "uniform vec2 u_resolution;", "", "varying vec2 v_textureCoords;", "", "void main() {", "   vec2 projected = (u_matrix * vec3(a_position, 1.0)).xy;", "   vec2 normal = projected / u_resolution;", "   vec2 clipspace = (normal * 2.0) - 1.0;", "", "   gl_Position = vec4(clipspace * vec2(1.0, -1.0), 0.0, 1.0);", "   v_textureCoords = a_textureCoords;", "}"].join("\n"),
                fragment: ["precision mediump float;", "", "uniform sampler2D u_image;", "varying vec2 v_textureCoords;", "", "void main() {", "  gl_FragColor = texture2D(u_image, v_textureCoords);", "}"].join("\n")
            }
        };
    c.ctx = c.canvas.getContext("2d");
    var h = t[t.Types.webgl] = function(n) {
        var i, r, o, a;
        if (this.domElement = n.domElement || document.createElement("canvas"), this.scene = new t.Group, this.scene.parent = this, this._renderer = {
                matrix: new t.Array(s),
                scale: 1,
                opacity: 1
            }, this._flagMatrix = !0, i = e.defaults(n || {}, {
                antialias: !1,
                alpha: !0,
                premultipliedAlpha: !0,
                stencil: !0,
                preserveDrawingBuffer: !0,
                overdraw: !1
            }), this.overdraw = i.overdraw, r = this.ctx = this.domElement.getContext("webgl", i) || this.domElement.getContext("experimental-webgl", i), !this.ctx) throw new t.Utils.Error("unable to create a webgl context. Try using another renderer.");
        o = c.shaders.create(r, c.shaders.vertex, c.shaders.types.vertex), a = c.shaders.create(r, c.shaders.fragment, c.shaders.types.fragment), this.program = c.program.create(r, [o, a]), r.useProgram(this.program), this.program.position = r.getAttribLocation(this.program, "a_position"), this.program.matrix = r.getUniformLocation(this.program, "u_matrix"), this.program.textureCoords = r.getAttribLocation(this.program, "a_textureCoords"), r.disable(r.DEPTH_TEST), r.enable(r.BLEND), r.blendEquationSeparate(r.FUNC_ADD, r.FUNC_ADD), r.blendFuncSeparate(r.SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA)
    };
    e.extend(h.prototype, n.Events, {
        setSize: function(t, n, i) {
            this.width = t, this.height = n, this.ratio = e.isUndefined(i) ? l(this.ctx) : i, this.domElement.width = t * this.ratio, this.domElement.height = n * this.ratio, e.extend(this.domElement.style, {
                width: t + "px",
                height: n + "px"
            }), t *= this.ratio, n *= this.ratio, this._renderer.matrix[0] = this._renderer.matrix[4] = this._renderer.scale = this.ratio, this._flagMatrix = !0, this.ctx.viewport(0, 0, t, n);
            var r = this.ctx.getUniformLocation(this.program, "u_resolution");
            return this.ctx.uniform2f(r, t, n), this
        },
        render: function() {
            var t = this.ctx;
            return this.overdraw || t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT), c.group.render.call(this.scene, t, this.program), this._flagMatrix = !1, this
        }
    })
}(this.Two || {}, "function" == typeof require ? require("underscore") : this._, "function" == typeof require ? require("backbone") : this.Backbone, "function" == typeof require ? require("requestAnimationFrame") : this.requestAnimationFrame), function(t, e, n, i) {
    var r = t.Shape = function() {
        this._renderer = {}, this.id = t.Identifier + t.uniqueId(), this.classList = [], this._matrix = new t.Matrix, this.translation = new t.Vector, this.translation.bind(t.Events.change, e.bind(r.FlagMatrix, this)), this.rotation = 0, this.scale = 1
    };
    e.extend(r, n.Events, {
        FlagMatrix: function() {
            this._flagMatrix = !0
        },
        MakeObservable: function(t) {
            Object.defineProperty(t, "rotation", {
                get: function() {
                    return this._rotation
                },
                set: function(t) {
                    this._rotation = t, this._flagMatrix = !0
                }
            }), Object.defineProperty(t, "scale", {
                get: function() {
                    return this._scale
                },
                set: function(t) {
                    this._scale = t, this._flagMatrix = !0, this._flagScale = !0
                }
            })
        }
    }), e.extend(r.prototype, {
        _flagMatrix: !0,
        _rotation: 0,
        _scale: 1,
        addTo: function(t) {
            return t.add(this), this
        },
        clone: function() {
            var t = new r;
            return t.translation.copy(this.translation), t.rotation = this.rotation, t.scale = this.scale, e.each(r.Properties, function(e) {
                t[e] = this[e]
            }, this), t._update()
        },
        _update: function(t) {
            return !this._matrix.manual && this._flagMatrix && this._matrix.identity().translate(this.translation.x, this.translation.y).scale(this.scale).rotate(this.rotation), t && this.parent && this.parent._update && this.parent._update(), this
        },
        flagReset: function() {
            return this._flagMatrix = this._flagScale = !1, this
        }
    }), r.MakeObservable(r.prototype)
}(this.Two || {}, "function" == typeof require ? require("underscore") : this._, "function" == typeof require ? require("backbone") : this.Backbone, "function" == typeof require ? require("requestAnimationFrame") : this.requestAnimationFrame), function(t, e, n, i) {
    function r(e, n, i) {
        var r, o, s, a, l, u, c, h, f = n.controls && n.controls.right,
            d = e.controls && e.controls.left;
        return r = n.x, l = n.y, o = (f || n).x, u = (f || n).y, s = (d || e).x, c = (d || e).y, a = e.x, h = e.y, f && n._relative && (o += n.x, u += n.y), d && e._relative && (s += e.x, c += e.y), t.Utils.getCurveLength(r, l, o, u, s, c, a, h, i)
    }
    function o(e, n, i) {
        var r, o, s, a, l, u, c, h, f = n.controls && n.controls.right,
            d = e.controls && e.controls.left;
        return r = n.x, l = n.y, o = (f || n).x, u = (f || n).y, s = (d || e).x, c = (d || e).y, a = e.x, h = e.y, f && n._relative && (o += n.x, u += n.y), d && e._relative && (s += e.x, c += e.y), t.Utils.subdivide(r, l, o, u, s, c, a, h, i)
    }
    var s = Math.min,
        a = Math.max,
        l = Math.round,
        u = t.Utils.getComputedMatrix,
        c = {};
    e.each(t.Commands, function(t, e) {
        c[e] = new RegExp(t)
    });
    var h = t.Path = function(e, n, i, r) {
        t.Shape.call(this), this._renderer.type = "path", this._closed = !! n, this._curved = !! i, this.beginning = 0, this.ending = 1, this.fill = "#fff", this.stroke = "#000", this.linewidth = 1, this.opacity = 1, this.visible = !0, this.cap = "butt", this.join = "miter", this.miter = 4, this._vertices = [], this.vertices = e, this.automatic = !r
    };
    e.extend(h, {
        Properties: ["fill", "stroke", "linewidth", "opacity", "visible", "cap", "join", "miter", "closed", "curved", "automatic", "beginning", "ending"],
        FlagVertices: function() {
            this._flagVertices = !0, this._flagLength = !0
        },
        MakeObservable: function(n) {
            t.Shape.MakeObservable(n), e.each(h.Properties.slice(0, 8), function(t) {
                var e = "_" + t,
                    i = "_flag" + t.charAt(0).toUpperCase() + t.slice(1);
                Object.defineProperty(n, t, {
                    get: function() {
                        return this[e]
                    },
                    set: function(t) {
                        this[e] = t, this[i] = !0
                    }
                })
            }), Object.defineProperty(n, "length", {
                get: function() {
                    return this._flagLength && this._updateLength(), this._length
                }
            }), Object.defineProperty(n, "closed", {
                get: function() {
                    return this._closed
                },
                set: function(t) {
                    this._closed = !! t, this._flagVertices = !0
                }
            }), Object.defineProperty(n, "curved", {
                get: function() {
                    return this._curved
                },
                set: function(t) {
                    this._curved = !! t, this._flagVertices = !0
                }
            }), Object.defineProperty(n, "automatic", {
                get: function() {
                    return this._automatic
                },
                set: function(t) {
                    if (t !== this._automatic) {
                        this._automatic = !! t;
                        var n = this._automatic ? "ignore" : "listen";
                        e.each(this.vertices, function(t) {
                            t[n]()
                        })
                    }
                }
            }), Object.defineProperty(n, "beginning", {
                get: function() {
                    return this._beginning
                },
                set: function(t) {
                    this._beginning = s(a(t, 0), this._ending), this._flagVertices = !0
                }
            }), Object.defineProperty(n, "ending", {
                get: function() {
                    return this._ending
                },
                set: function(t) {
                    this._ending = s(a(t, this._beginning), 1), this._flagVertices = !0
                }
            }), Object.defineProperty(n, "vertices", {
                get: function() {
                    return this._collection
                },
                set: function(n) {
                    var i = e.bind(h.FlagVertices, this),
                        r = e.bind(function(e) {
                            for (var n = e.length; n--;) e[n].bind(t.Events.change, i);
                            i()
                        }, this),
                        o = e.bind(function(n) {
                            e.each(n, function(e) {
                                e.unbind(t.Events.change, i)
                            }, this), i()
                        }, this);
                    this._collection && this._collection.unbind(), this._collection = new t.Utils.Collection((n || []).slice(0)), this._collection.bind(t.Events.insert, r), this._collection.bind(t.Events.remove, o), r(this._collection)
                }
            }), Object.defineProperty(n, "clip", {
                get: function() {
                    return this._clip
                },
                set: function(t) {
                    this._clip = t, this._flagClip = !0
                }
            })
        }
    }), e.extend(h.prototype, t.Shape.prototype, {
        _flagVertices: !0,
        _flagLength: !0,
        _flagFill: !0,
        _flagStroke: !0,
        _flagLinewidth: !0,
        _flagOpacity: !0,
        _flagVisible: !0,
        _flagCap: !0,
        _flagJoin: !0,
        _flagMiter: !0,
        _flagClip: !1,
        _length: 0,
        _fill: "#fff",
        _stroke: "#000",
        _linewidth: 1,
        _opacity: 1,
        _visible: !0,
        _cap: "round",
        _join: "round",
        _miter: 4,
        _closed: !0,
        _curved: !1,
        _automatic: !0,
        _beginning: 0,
        _ending: 1,
        _clip: !1,
        clone: function(n) {
            n = n || this.parent;
            var i = e.map(this.vertices, function(t) {
                    return t.clone()
                }),
                r = new h(i, this.closed, this.curved, !this.automatic);
            return e.each(t.Path.Properties, function(t) {
                r[t] = this[t]
            }, this), r.translation.copy(this.translation), r.rotation = this.rotation, r.scale = this.scale, n.add(r), r
        },
        toObject: function() {
            var n = {
                vertices: e.map(this.vertices, function(t) {
                    return t.toObject()
                })
            };
            return e.each(t.Shape.Properties, function(t) {
                n[t] = this[t]
            }, this), n.translation = this.translation.toObject, n.rotation = this.rotation, n.scale = this.scale, n
        },
        noFill: function() {
            return this.fill = "transparent", this
        },
        noStroke: function() {
            return this.stroke = "transparent", this
        },
        corner: function() {
            var t = this.getBoundingClientRect(!0);
            return t.centroid = {
                x: t.left + t.width / 2,
                y: t.top + t.height / 2
            }, e.each(this.vertices, function(e) {
                e.addSelf(t.centroid)
            }), this
        },
        center: function() {
            var t = this.getBoundingClientRect(!0);
            return t.centroid = {
                x: t.left + t.width / 2,
                y: t.top + t.height / 2
            }, e.each(this.vertices, function(e) {
                e.subSelf(t.centroid)
            }), this
        },
        remove: function() {
            return this.parent ? (this.parent.remove(this), this) : this
        },
        getBoundingClientRect: function(t) {
            var e, n, i, r, o, l, c, h = 1 / 0,
                f = -(1 / 0),
                d = 1 / 0,
                p = -(1 / 0);
            for (this._update(!0), e = t ? this._matrix : u(this), n = this.linewidth / 2, i = this._vertices.length, l = 0; i > l; l++) c = this._vertices[l], r = c.x, o = c.y, c = e.multiply(r, o, 1), d = s(c.y - n, d), h = s(c.x - n, h), f = a(c.x + n, f), p = a(c.y + n, p);
            return {
                top: d,
                left: h,
                right: f,
                bottom: p,
                width: f - h,
                height: p - d
            }
        },
        getPointAt: function(n, i) {
            for (var r, o, s, a, l, u, c, h, f, d, p, m, g = this.length * Math.min(Math.max(n, 0), 1), v = this.vertices.length, y = v - 1, b = null, x = null, w = 0, _ = this._lengths.length, C = 0; _ > w; w++) {
                if (C + this._lengths[w] > g) {
                    b = this.vertices[this.closed ? t.Utils.mod(w, v) : w], x = this.vertices[Math.min(Math.max(w - 1, 0), y)], g -= C, n = g / this._lengths[w];
                    break
                }
                C += this._lengths[w]
            }
            return e.isNull(b) || e.isNull(x) ? null : (m = x.controls && x.controls.right, p = b.controls && b.controls.left, o = x.x, c = x.y, s = (m || x).x, h = (m || x).y, a = (p || b).x, f = (p || b).y, l = b.x, d = b.y, m && x._relative && (s += x.x, h += x.y), p && b._relative && (a += b.x, f += b.y), r = t.Utils.getPointOnCubicBezier(n, o, s, a, l), u = t.Utils.getPointOnCubicBezier(n, c, h, f, d), e.isObject(i) ? (i.x = r, i.y = u, i) : new t.Vector(r, u))
        },
        plot: function() {
            if (this.curved) return t.Utils.getCurveFromPoints(this._vertices, this.closed), this;
            for (var e = 0; e < this._vertices.length; e++) this._vertices[e]._command = 0 === e ? t.Commands.move : t.Commands.line;
            return this
        },
        subdivide: function(n) {
            this._update();
            var i = this.vertices.length - 1,
                r = this.vertices[i],
                s = this._closed || this.vertices[i]._command === t.Commands.close,
                a = [];
            return e.each(this.vertices, function(l, u) {
                if (0 >= u && !s) return void(r = l);
                if (l.command === t.Commands.move) return a.push(new t.Anchor(r.x, r.y)), u > 0 && (a[a.length - 1].command = t.Commands.line), void(r = l);
                var c = o(l, r, n);
                a = a.concat(c), e.each(c, function(e, n) {
                    0 >= n && r.command === t.Commands.move ? e.command = t.Commands.move : e.command = t.Commands.line
                }), u >= i && (this._closed && this._automatic ? (r = l, c = o(l, r, n), a = a.concat(c), e.each(c, function(e, n) {
                    0 >= n && r.command === t.Commands.move ? e.command = t.Commands.move : e.command = t.Commands.line
                })) : s && a.push(new t.Anchor(l.x, l.y)), a[a.length - 1].command = s ? t.Commands.close : t.Commands.line), r = l
            }, this), this._automatic = !1, this._curved = !1, this.vertices = a, this
        },
        _updateLength: function(n) {
            this._update();
            var i = this.vertices.length - 1,
                o = this.vertices[i],
                s = this._closed || this.vertices[i]._command === t.Commands.close,
                a = 0;
            return e.isUndefined(this._lengths) && (this._lengths = []), e.each(this.vertices, function(e, l) {
                return 0 >= l && !s || e.command === t.Commands.move ? (o = e, void(this._lengths[l] = 0)) : (this._lengths[l] = r(e, o, n), a += this._lengths[l], l >= i && s && (o = e, this._lengths[l + 1] = r(e, o, n), a += this._lengths[l + 1]), void(o = e))
            }, this), this._length = a, this
        },
        _update: function() {
            if (this._flagVertices) {
                var e, n = this.vertices.length,
                    i = n - 1,
                    r = l(this._beginning * i),
                    o = l(this._ending * i);
                this._vertices.length = 0;
                for (var s = r; o + 1 > s; s++) e = this.vertices[s], this._vertices.push(e);
                this._automatic && this.plot()
            }
            return t.Shape.prototype._update.apply(this, arguments), this
        },
        flagReset: function() {
            return this._flagVertices = this._flagFill = this._flagStroke = this._flagLinewidth = this._flagOpacity = this._flagVisible = this._flagCap = this._flagJoin = this._flagMiter = this._flagClip = !1, t.Shape.prototype.flagReset.call(this), this
        }
    }), h.MakeObservable(h.prototype)
}(this.Two || {}, "function" == typeof require ? require("underscore") : this._, "function" == typeof require ? require("backbone") : this.Backbone, "function" == typeof require ? require("requestAnimationFrame") : this.requestAnimationFrame), function(t, e, n, i) {
    var r = t.Path,
        o = t.Line = function(e, n, i, o) {
            var s = i - e,
                a = o - n,
                l = s / 2,
                u = a / 2;
            r.call(this, [new t.Anchor(-l, -u), new t.Anchor(l, u)]), this.translation.set(e + l, n + u)
        };
    e.extend(o.prototype, r.prototype), r.MakeObservable(o.prototype)
}(this.Two || {}, "function" == typeof require ? require("underscore") : this._, "function" == typeof require ? require("backbone") : this.Backbone, "function" == typeof require ? require("requestAnimationFrame") : this.requestAnimationFrame), function(t, e, n, i) {
    var r = t.Path,
        o = t.Rectangle = function(e, n, i, o) {
            var s = i / 2,
                a = o / 2;
            r.call(this, [new t.Anchor(-s, -a), new t.Anchor(s, -a), new t.Anchor(s, a), new t.Anchor(-s, a)], !0), this.translation.set(e, n)
        };
    e.extend(o.prototype, r.prototype), r.MakeObservable(o.prototype)
}(this.Two || {}, "function" == typeof require ? require("underscore") : this._, "function" == typeof require ? require("backbone") : this.Backbone, "function" == typeof require ? require("requestAnimationFrame") : this.requestAnimationFrame), function(t, e, n, i) {
    var r = t.Path,
        o = 2 * Math.PI,
        s = Math.cos,
        a = Math.sin,
        l = t.Ellipse = function(n, i, l, u) {
            e.isNumber(u) || (u = l);
            var c = t.Resolution,
                h = e.map(e.range(c), function(e) {
                    var n = e / c,
                        i = n * o,
                        r = l * s(i),
                        h = u * a(i);
                    return new t.Anchor(r, h)
                }, this);
            r.call(this, h, !0, !0), this.translation.set(n, i)
        };
    e.extend(l.prototype, r.prototype), r.MakeObservable(l.prototype)
}(this.Two || {}, "function" == typeof require ? require("underscore") : this._, "function" == typeof require ? require("backbone") : this.Backbone, "function" == typeof require ? require("requestAnimationFrame") : this.requestAnimationFrame), function(t, e, n, i) {
    var r = t.Path,
        o = 2 * Math.PI,
        s = Math.cos,
        a = Math.sin,
        l = t.Polygon = function(n, i, l, u) {
            u = Math.max(u || 0, 3);
            var c = e.map(e.range(u), function(e) {
                var n = (e + .5) / u,
                    i = o * n + Math.PI / 2,
                    r = l * s(i),
                    c = l * a(i);
                return new t.Anchor(r, c)
            });
            r.call(this, c, !0), this.translation.set(n, i)
        };
    e.extend(l.prototype, r.prototype), r.MakeObservable(l.prototype)
}(this.Two || {}, "function" == typeof require ? require("underscore") : this._, "function" == typeof require ? require("backbone") : this.Backbone, "function" == typeof require ? require("requestAnimationFrame") : this.requestAnimationFrame), function(t, e, n, i) {
    var r = t.Path,
        o = Math.PI,
        s = (2 * Math.PI, Math.PI / 2),
        a = Math.cos,
        l = Math.sin,
        u = (Math.abs, t.ArcSegment = function(e, n, i, u, c, h, f) {
            c > h && (h += 2 * Math.PI), f = f || 8;
            var d = h - c,
                p = d / f,
                m = t.Commands.move,
                g = [];
            g.push(new t.Anchor(Math.sin(0) * u, Math.cos(0) * u, 0, 0, 0, 0, m));
            var v, y, b, x, w, _, C;
            m = t.Commands.curve;
            for (var k = 0; f + 1 > k; k++) v = k * p, y = l(v) * u, b = a(v) * u, x = l(v - s) * (p / o) * u, w = a(v - s) * (p / o) * u, _ = l(v + s) * (p / o) * u, C = a(v + s) * (p / o) * u, 0 === k && (x = w = 0), k === f && (_ = C = 0), g.push(new t.Anchor(y, b, x, w, _, C, m));
            for (var T = 0; f + 1 > T; T++) v = d - p * T, y = l(v) * i, b = a(v) * i, x = l(v - 1.5 * o) * (p / o) * i, w = a(v - 1.5 * o) * (p / o) * i, _ = l(v + 1.5 * o) * (p / o) * i, C = a(v + 1.5 * o) * (p / o) * i, 0 === T && (x = w = 0), T === f && (_ = C = 0), g.push(new t.Anchor(y, b, x, w, _, C, m));
            m = t.Commands.close, g.push(new t.Anchor(Math.sin(0) * u, Math.cos(0) * u, 0, 0, 0, 0, m)), r.call(this, g, !0, !1, !0), this.rotation = c, this.translation.set(e, n)
        });
    e.extend(u.prototype, r.prototype), r.MakeObservable(u.prototype)
}(this.Two || {}, "function" == typeof require ? require("underscore") : this._, "function" == typeof require ? require("backbone") : this.Backbone, "function" == typeof require ? require("requestAnimationFrame") : this.requestAnimationFrame), function(t, e, n, i) {
    var r = t.Path,
        o = Math.PI,
        s = (2 * Math.PI, Math.cos),
        a = Math.sin,
        l = (Math.abs, t.SineRing = function(e, n, i, l, u, c) {
            var h = 2 * l + 1,
                f = Math.PI / l,
                d = o * i / l / 2;
            c = c || 1;
            var p, m, g, v, y, b, x = [],
                w = o;
            x.push(new t.Anchor(a(w) * (i + u / 2), s(w) * (i + u / 2), 0, 0, 0, 0, t.Commands.move));
            for (var _ = 0; h > _; _++) w = f * _ + o, _ % 2 === 0 ? (p = Math.sin(w) * (i + u / 2), m = Math.cos(w) * (i + u / 2)) : (p = Math.sin(w) * (i - u / 2), m = Math.cos(w) * (i - u / 2)), g = Math.sin(w - Math.PI / 2) * d * c, v = Math.cos(w - Math.PI / 2) * d * c, y = Math.sin(w + Math.PI / 2) * d * c, b = Math.cos(w + Math.PI / 2) * d * c, 0 === _ && (g = v = 0), _ === h - 1 && (y = b = 0), x.push(new t.Anchor(p, m, g, v, y, b, t.Commands.curve));
            r.call(this, x, !0, !1, !0), this.translation.set(e, n)
        });
    e.extend(l.prototype, r.prototype), r.MakeObservable(l.prototype)
}(this.Two || {}, "function" == typeof require ? require("underscore") : this._, "function" == typeof require ? require("backbone") : this.Backbone, "function" == typeof require ? require("requestAnimationFrame") : this.requestAnimationFrame), function(t, e, n, i) {
    var r = t.Path,
        o = 2 * Math.PI,
        s = Math.cos,
        a = Math.sin,
        l = t.Star = function(n, i, l, u, c) {
            e.isNumber(u) || (u = l / 2), (!e.isNumber(c) || 0 >= c) && (c = 5);
            var h = 2 * c,
                f = e.map(e.range(h), function(e) {
                    var n = (e - .5) / h,
                        i = n * o,
                        r = e % 2 ? u : l,
                        c = r * s(i),
                        f = r * a(i);
                    return new t.Anchor(c, f)
                });
            r.call(this, f, !0), this.translation.set(n, i)
        };
    e.extend(l.prototype, r.prototype), r.MakeObservable(l.prototype)
}(this.Two || {}, "function" == typeof require ? require("underscore") : this._, "function" == typeof require ? require("backbone") : this.Backbone, "function" == typeof require ? require("requestAnimationFrame") : this.requestAnimationFrame), function(t, e, n, i) {
    function r(n, i, r, s, a) {
        var l = 0,
            u = 0,
            c = t.Resolution,
            h = (n[n.length - 1], new t.Anchor(i, r), 0 > i ? -s : s),
            f = 0 > r ? -s : s;
        switch (a) {
            case 1:
                l = -Math.PI / 2, u = 0;
                break;
            case 2:
                l = -Math.PI, u = -Math.PI / 2;
                break;
            case 3:
                l = 1.5 * -Math.PI, u = -Math.PI;
                break;
            case 4:
                l = 0, u = Math.PI / 2
        }
        var d = e.map(e.range(c), function(e) {
            var n = o(c - e, 0, c, l, u),
                a = s * Math.cos(n) + i - h,
                d = s * Math.sin(n) + r - f,
                p = new t.Anchor(a, d);
            return p
        }).reverse();
        return n.concat(d)
    }
    function o(t, e, n, i, r) {
        return i + (r - i) * ((t - e) / (n - e))
    }
    var s = t.Path,
        a = t.RoundedRectangle = function(n, i, o, a, l) {
            var u, c, h = o / 2,
                f = a / 2;
            e.isNumber(l) || (l = Math.floor(Math.min(o, a) / 12));
            var d = [new t.Anchor(-h + l, -f), new t.Anchor(h - l, -f)];
            u = h, c = -f, d = r(d, u, c, l, 1), d.push(new t.Anchor(h, f - l)), u = h, c = f, d = r(d, u, c, l, 4), d.push(new t.Anchor(-h + l, f)), u = -h, c = f, d = r(d, u, c, l, 3), d.push(new t.Anchor(-h, -f + l)), u = -h, c = -f, d = r(d, u, c, l, 2), d.pop(), s.call(this, d, !0), this.translation.set(n, i)
        };
    e.extend(a.prototype, s.prototype), s.MakeObservable(a.prototype)
}(this.Two || {}, "function" == typeof require ? require("underscore") : this._, "function" == typeof require ? require("backbone") : this.Backbone, "function" == typeof require ? require("requestAnimationFrame") : this.requestAnimationFrame), function(t, e, n, i) {
    var r = t.Stop = function(t, n, i) {
        this._renderer = {}, this.offset = e.isNumber(t) ? t : r.Index <= 0 ? 0 : 1, this.opacity = e.isNumber(i) ? i : 1, this.color = e.isString(n) ? n : r.Index <= 0 ? "#fff" : "#000", r.Index = (r.Index + 1) % 2
    };
    e.extend(r, {
        Index: 0,
        Properties: ["offset", "opacity", "color"],
        MakeObservable: function(n) {
            e.each(r.Properties, function(e) {
                var i = "_" + e,
                    r = "_flag" + e.charAt(0).toUpperCase() + e.slice(1);
                Object.defineProperty(n, e, {
                    get: function() {
                        return this[i]
                    },
                    set: function(e) {
                        this[i] = e, this[r] = !0, this.trigger(t.Events.change)
                    }
                })
            })
        }
    }), e.extend(r.prototype, n.Events, {
        clone: function() {
            var t = new r;
            return e.each(r.Properties, function(e) {
                t[e] = this[e]
            }, this), t
        },
        toObject: function() {
            var t = {};
            return e.each(r.Properties, function(e) {
                t[e] = this[e]
            }, this), t
        },
        flagReset: function() {
            return this._flagOffset = this._flagColor = this._flagOpacity = !1, this
        }
    }), r.MakeObservable(r.prototype);
    var o = t.Gradient = function(e) {
        t.Shape.call(this), this._renderer.type = "gradient", this.spread = "pad", this.stops = e
    };
    e.extend(o, {
        Stop: r,
        Properties: ["spread"],
        MakeObservable: function(n) {
            t.Shape.MakeObservable(n), e.each(o.Properties, t.Utils.defineProperty, n), Object.defineProperty(n, "stops", {
                get: function() {
                    return this._stops
                },
                set: function(n) {
                    var i = e.bind(o.FlagStops, this),
                        r = e.bind(function(e) {
                            for (var n = e.length; n--;) e[n].bind(t.Events.change, i);
                            i()
                        }, this),
                        s = e.bind(function(n) {
                            e.each(n, function(e) {
                                e.unbind(t.Events.change, i)
                            }, this), i()
                        }, this);
                    this._stops && this._stops.unbind(), this._stops = new t.Utils.Collection((n || []).slice(0)), this._stops.bind(t.Events.insert, r), this._stops.bind(t.Events.remove, s), r(this._stops)
                }
            })
        },
        FlagStops: function() {
            this._flagStops = !0
        }
    }), e.extend(o.prototype, t.Shape.prototype, {
        clone: function(n) {
            n = n || this.parent;
            var i = e.map(this.stops, function(t) {
                    return t.clone()
                }),
                r = new o(i);
            return e.each(t.Gradient.Properties, function(t) {
                r[t] = this[t]
            }, this), r.translation.copy(this.translation), r.rotation = this.rotation, r.scale = this.scale, n.add(r), r
        },
        toObject: function() {
            var t = {
                stops: e.map(this.stops, function(t) {
                    return t.toObject()
                })
            };
            return e.each(o.Properties, function(e) {
                t[e] = this[e]
            }, this), t
        },
        flagReset: function() {
            return this._flagSpread = this._flagStops = !1, t.Shape.prototype.flagReset.call(this), this
        }
    }), o.MakeObservable(o.prototype)
}(this.Two || {}, "function" == typeof require ? require("underscore") : this._, "function" == typeof require ? require("backbone") : this.Backbone, "function" == typeof require ? require("requestAnimationFrame") : this.requestAnimationFrame), function(t, e, n, i) {
    var r = t.LinearGradient = function(n, i, o, s, a) {
        t.Gradient.call(this, a), this._renderer.type = "linear-gradient";
        var l = e.bind(r.FlagEndPoints, this);
        this.left = (new t.Vector).bind(t.Events.change, l), this.right = (new t.Vector).bind(t.Events.change, l), e.isNumber(n) && (this.left.x = n), e.isNumber(i) && (this.left.y = i), e.isNumber(o) && (this.right.x = o), e.isNumber(s) && (this.right.y = s)
    };
    e.extend(r, {
        Stop: t.Gradient.Stop,
        MakeObservable: function(e) {
            t.Gradient.MakeObservable(e)
        },
        FlagEndPoints: function() {
            this._flagEndPoints = !0
        }
    }), e.extend(r.prototype, t.Gradient.prototype, {
        _flagEndPoints: !1,
        clone: function(n) {
            n = n || this.parent;
            var i = e.map(this.stops, function(t) {
                    return t.clone()
                }),
                o = new r(this.left._x, this.left._y, this.right._x, this.right._y, i);
            return e.each(t.Gradient.Properties, function(t) {
                o[t] = this[t]
            }, this), n.add(o), o
        },
        toObject: function() {
            var e = t.Gradient.prototype.toObject.call(this);
            return e.left = this.left.toObject(), e.right = this.right.toObject(), e
        },
        flagReset: function() {
            return this._flagEndPoints = !1, t.Gradient.prototype.flagReset.call(this), this
        }
    }), r.MakeObservable(r.prototype)
}(this.Two || {}, "function" == typeof require ? require("underscore") : this._, "function" == typeof require ? require("backbone") : this.Backbone, "function" == typeof require ? require("requestAnimationFrame") : this.requestAnimationFrame), function(t, e, n, i) {
    var r = t.RadialGradient = function(n, i, r, o, s, a) {
        t.Gradient.call(this, o), this._renderer.type = "radial-gradient", this.center = (new t.Vector).bind(t.Events.change, e.bind(function() {
            this._flagCenter = !0
        }, this)), this.radius = e.isNumber(r) ? r : 20, this.focal = (new t.Vector).bind(t.Events.change, e.bind(function() {
            this._flagFocal = !0
        }, this)), e.isNumber(n) && (this.center.x = n), e.isNumber(i) && (this.center.y = i), this.focal.copy(this.center), e.isNumber(s) && (this.focal.x = s), e.isNumber(a) && (this.focal.y = a)
    };
    e.extend(r, {
        Stop: t.Gradient.Stop,
        Properties: ["radius"],
        MakeObservable: function(n) {
            t.Gradient.MakeObservable(n), e.each(r.Properties, t.Utils.defineProperty, n)
        }
    }), e.extend(r.prototype, t.Gradient.prototype, {
        _flagEndPoints: !1,
        clone: function(n) {
            n = n || this.parent;
            var i = e.map(this.stops, function(t) {
                    return t.clone()
                }),
                o = new r(this.center._x, this.center._y, this._radius, i, this.focal._x, this.focal._y);
            return e.each(t.Gradient.Properties.concat(r.Properties), function(t) {
                o[t] = this[t]
            }, this), n.add(o), o
        },
        toObject: function() {
            var n = t.Gradient.prototype.toObject.call(this);
            return e.each(r.Properties, function(t) {
                n[t] = this[t]
            }, this), n.center = this.center.toObject(), n.focal = this.focal.toObject(), n
        },
        flagReset: function() {
            return this._flagRadius = this._flagCenter = this._flagFocal = !1, t.Gradient.prototype.flagReset.call(this), this
        }
    }), r.MakeObservable(r.prototype)
}(this.Two || {}, "function" == typeof require ? require("underscore") : this._, "function" == typeof require ? require("backbone") : this.Backbone, "function" == typeof require ? require("requestAnimationFrame") : this.requestAnimationFrame), function(t, e, n, i) {
    function r(t, n) {
        var i, r = t.parent;
        return r && r.children.ids[t.id] && (i = e.indexOf(r.children, t), r.children.splice(i, 1), i = e.indexOf(r.additions, t), i >= 0 ? r.additions.splice(i, 1) : (r.subtractions.push(t), r._flagSubtractions = !0)), n ? (t.parent = n, this.additions.push(t), void(this._flagAdditions = !0)) : (i = e.indexOf(this.additions, t), i >= 0 ? this.additions.splice(i, 1) : (this.subtractions.push(t), this._flagSubtractions = !0), void delete t.parent)
    }
    var o = Math.min,
        s = Math.max,
        a = function() {
            t.Utils.Collection.apply(this, arguments), Object.defineProperty(this, "_events", {
                value: {},
                enumerable: !1
            }), this.ids = {}, this.on(t.Events.insert, this.attach), this.on(t.Events.remove, this.detach), a.prototype.attach.apply(this, arguments)
        };
    a.prototype = new t.Utils.Collection, a.constructor = a, e.extend(a.prototype, {
        attach: function(t) {
            for (var e = 0; e < t.length; e++) this.ids[t[e].id] = t[e];
            return this
        },
        detach: function(t) {
            for (var e = 0; e < t.length; e++) delete this.ids[t[e].id];
            return this
        }
    });
    var l = t.Group = function() {
        t.Shape.call(this, !0), this._renderer.type = "group", this.additions = [], this.subtractions = [], this._children = [], this.children = arguments
    };
    e.extend(l, {
        Children: a,
        InsertChildren: function(t) {
            for (var e = 0; e < t.length; e++) r.call(this, t[e], this)
        },
        RemoveChildren: function(t) {
            for (var e = 0; e < t.length; e++) r.call(this, t[e])
        },
        OrderChildren: function(t) {
            this._flagOrder = !0
        },
        MakeObservable: function(n) {
            var i = t.Path.Properties.slice(0),
                r = e.indexOf(i, "opacity");
            r >= 0 && (i.splice(r, 1), Object.defineProperty(n, "opacity", {
                get: function() {
                    return this._opacity
                },
                set: function(t) {
                    this._flagOpacity = this._opacity != t, this._opacity = t
                }
            })), t.Shape.MakeObservable(n), l.MakeGetterSetters(n, i), Object.defineProperty(n, "children", {
                get: function() {
                    return this._collection
                },
                set: function(n) {
                    var i = e.bind(l.InsertChildren, this),
                        r = e.bind(l.RemoveChildren, this),
                        o = e.bind(l.OrderChildren, this);
                    this._collection && this._collection.unbind(), this._collection = new a(n), this._collection.bind(t.Events.insert, i), this._collection.bind(t.Events.remove, r), this._collection.bind(t.Events.order, o)
                }
            }), Object.defineProperty(n, "mask", {
                get: function() {
                    return this._mask
                },
                set: function(t) {
                    this._mask = t, this._flagMask = !0, t.clip || (t.clip = !0)
                }
            })
        },
        MakeGetterSetters: function(t, n) {
            e.isArray(n) || (n = [n]), e.each(n, function(e) {
                l.MakeGetterSetter(t, e)
            })
        },
        MakeGetterSetter: function(t, n) {
            var i = "_" + n;
            Object.defineProperty(t, n, {
                get: function() {
                    return this[i]
                },
                set: function(t) {
                    this[i] = t, e.each(this.children, function(e) {
                        e[n] = t
                    })
                }
            })
        }
    }), e.extend(l.prototype, t.Shape.prototype, {
        _flagAdditions: !1,
        _flagSubtractions: !1,
        _flagOrder: !1,
        _flagOpacity: !0,
        _flagMask: !1,
        _fill: "#fff",
        _stroke: "#000",
        _linewidth: 1,
        _opacity: 1,
        _visible: !0,
        _cap: "round",
        _join: "round",
        _miter: 4,
        _closed: !0,
        _curved: !1,
        _automatic: !0,
        _beginning: 0,
        _ending: 1,
        _mask: null,
        clone: function(t) {
            t = t || this.parent;
            var n = new l;
            t.add(n);
            e.map(this.children, function(t) {
                return t.clone(n)
            });
            return n.translation.copy(this.translation), n.rotation = this.rotation, n.scale = this.scale, n
        },
        toObject: function() {
            var t = {
                children: {},
                translation: this.translation.toObject(),
                rotation: this.rotation,
                scale: this.scale
            };
            return e.each(this.children, function(e, n) {
                t.children[n] = e.toObject()
            }, this), t
        },
        corner: function() {
            var t = this.getBoundingClientRect(!0),
                e = {
                    x: t.left,
                    y: t.top
                };
            return this.children.forEach(function(t) {
                t.translation.subSelf(e)
            }), this
        },
        center: function() {
            var t = this.getBoundingClientRect(!0);
            return t.centroid = {
                x: t.left + t.width / 2,
                y: t.top + t.height / 2
            }, this.children.forEach(function(e) {
                e.translation.subSelf(t.centroid)
            }), this
        },
        getById: function(t) {
            var e = function(t, n) {
                if (t.id === n) return t;
                if (t.children) for (var i = t.children.length; i--;) {
                    var r = e(t.children[i], n);
                    if (r) return r
                }
            };
            return e(this, t) || null
        },
        getByClassName: function(t) {
            var e = [],
                n = function(t, i) {
                    return -1 != t.classList.indexOf(i) ? e.push(t) : t.children && t.children.forEach(function(t) {
                        n(t, i)
                    }), e
                };
            return n(this, t)
        },
        getByType: function(e) {
            var n = [],
                i = function(e, r) {
                    for (var o in e.children) e.children[o] instanceof r ? n.push(e.children[o]) : e.children[o] instanceof t.Group && i(e.children[o], r);
                    return n
                };
            return i(this, e)
        },
        add: function(t) {
            t = t instanceof Array ? t.slice() : e.toArray(arguments);
            for (var n = 0; n < t.length; n++) t[n] && t[n].id && this.children.push(t[n]);
            return this
        },
        remove: function(t) {
            var n = arguments.length,
                i = this.parent;
            if (0 >= n && i) return i.remove(this), this;
            t = t instanceof Array ? t.slice() : e.toArray(arguments);
            for (var r = 0; r < t.length; r++) t[r] && this.children.ids[t[r].id] && this.children.splice(e.indexOf(this.children, t[r]), 1);
            return this
        },
        getBoundingClientRect: function(t) {
            var n;
            this._update(!0);
            var i = 1 / 0,
                r = -(1 / 0),
                a = 1 / 0,
                l = -(1 / 0);
            return this.children.forEach(function(u) {
                /(linear-gradient|radial-gradient|gradient)/.test(u._renderer.type) || (n = u.getBoundingClientRect(t), e.isNumber(n.top) && e.isNumber(n.left) && e.isNumber(n.right) && e.isNumber(n.bottom) && (a = o(n.top, a), i = o(n.left, i), r = s(n.right, r), l = s(n.bottom, l)))
            }, this), {
                top: a,
                left: i,
                right: r,
                bottom: l,
                width: r - i,
                height: l - a
            }
        },
        noFill: function() {
            return this.children.forEach(function(t) {
                t.noFill()
            }), this
        },
        noStroke: function() {
            return this.children.forEach(function(t) {
                t.noStroke()
            }), this
        },
        subdivide: function() {
            var t = arguments;
            return this.children.forEach(function(e) {
                e.subdivide.apply(e, t)
            }), this
        },
        flagReset: function() {
            return this._flagAdditions && (this.additions.length = 0, this._flagAdditions = !1), this._flagSubtractions && (this.subtractions.length = 0, this._flagSubtractions = !1), this._flagOrder = this._flagMask = this._flagOpacity = !1, t.Shape.prototype.flagReset.call(this), this
        }
    }), l.MakeObservable(l.prototype)
}(this.Two || {}, "function" == typeof require ? require("underscore") : this._, "function" == typeof require ? require("backbone") : this.Backbone, "function" == typeof require ? require("requestAnimationFrame") : this.requestAnimationFrame),
// Typed.js | Copyright (c) 2014 Matt Boldt | www.mattboldt.com
// The above copyright notice and this permission notice shall be included in
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    !
        function(t) {
            "use strict";
            var e = function(e, n) {
                this.el = t(e), this.options = t.extend({}, t.fn.typed.defaults, n), this.isInput = this.el.is("input"), this.attr = this.options.attr, this.showCursor = this.isInput ? !1 : this.options.showCursor, this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text(), this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, this.stringsElement = this.options.stringsElement, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.shuffle = this.options.shuffle, this.sequence = [], this.build()
            };
            e.prototype = {
                constructor: e,
                init: function() {
                    var t = this;
                    t.timeout = setTimeout(function() {
                        for (var e = 0; e < t.strings.length; ++e) t.sequence[e] = e;
                        t.shuffle && (t.sequence = t.shuffleArray(t.sequence)), t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
                    }, t.startDelay)
                },
                build: function() {
                    var e = this;
                    if (this.showCursor === !0 && (this.cursor = t('<span class="typed-cursor">' + this.cursorChar + "</span>"), this.el.after(this.cursor)), this.stringsElement) {
                        e.strings = [], this.stringsElement.hide();
                        var n = this.stringsElement.find("p");
                        t.each(n, function(n, i) {
                            e.strings.push(t(i).html())
                        })
                    }
                    this.init()
                },
                typewrite: function(t, e) {
                    if (this.stop !== !0) {
                        var n = Math.round(70 * Math.random()) + this.typeSpeed,
                            i = this;
                        i.timeout = setTimeout(function() {
                            var n = 0,
                                r = t.substr(e);
                            if ("^" === r.charAt(0)) {
                                var o = 1;
                                /^\^\d+/.test(r) && (r = /\d+/.exec(r)[0], o += r.length, n = parseInt(r)), t = t.substring(0, e) + t.substring(e + o)
                            }
                            if ("html" === i.contentType) {
                                var s = t.substr(e).charAt(0);
                                if ("<" === s || "&" === s) {
                                    var a = "",
                                        l = "";
                                    for (l = "<" === s ? ">" : ";"; t.substr(e).charAt(0) !== l;) a += t.substr(e).charAt(0), e++;
                                    e++, a += l
                                }
                            }
                            i.timeout = setTimeout(function() {
                                if (e === t.length) {
                                    if (i.options.onStringTyped(i.arrayPos), i.arrayPos === i.strings.length - 1 && (i.options.callback(), i.curLoop++, i.loop === !1 || i.curLoop === i.loopCount)) return;
                                    i.timeout = setTimeout(function() {
                                        i.backspace(t, e)
                                    }, i.backDelay)
                                } else {
                                    0 === e && i.options.preStringTyped(i.arrayPos);
                                    var n = t.substr(0, e + 1);
                                    i.attr ? i.el.attr(i.attr, n) : i.isInput ? i.el.val(n) : "html" === i.contentType ? i.el.html(n) : i.el.text(n), e++, i.typewrite(t, e)
                                }
                            }, n)
                        }, n)
                    }
                },
                backspace: function(t, e) {
                    if (this.stop !== !0) {
                        var n = Math.round(70 * Math.random()) + this.backSpeed,
                            i = this;
                        i.timeout = setTimeout(function() {
                            if ("html" === i.contentType && ">" === t.substr(e).charAt(0)) {
                                for (var n = "";
                                     "<" !== t.substr(e).charAt(0);) n -= t.substr(e).charAt(0), e--;
                                e--, n += "<"
                            }
                            var r = t.substr(0, e);
                            i.attr ? i.el.attr(i.attr, r) : i.isInput ? i.el.val(r) : "html" === i.contentType ? i.el.html(r) : i.el.text(r), e > i.stopNum ? (e--, i.backspace(t, e)) : e <= i.stopNum && (i.arrayPos++, i.arrayPos === i.strings.length ? (i.arrayPos = 0, i.shuffle && (i.sequence = i.shuffleArray(i.sequence)), i.init()) : i.typewrite(i.strings[i.sequence[i.arrayPos]], e))
                        }, n)
                    }
                },
                shuffleArray: function(t) {
                    var e, n, i = t.length;
                    if (i) for (; --i;) n = Math.floor(Math.random() * (i + 1)), e = t[n], t[n] = t[i], t[i] = e;
                    return t
                },
                reset: function() {
                    var t = this;
                    clearInterval(t.timeout);
                    var e = this.el.attr("id");
                    this.el.after('<span id="' + e + '"/>'), this.el.remove(), "undefined" != typeof this.cursor && this.cursor.remove(), t.options.resetCallback()
                }
            }, t.fn.typed = function(n) {
                return this.each(function() {
                    var i = t(this),
                        r = i.data("typed"),
                        o = "object" == typeof n && n;
                    r || i.data("typed", r = new e(this, o)), "string" == typeof n && r[n]()
                })
            }, t.fn.typed.defaults = {
                strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
                stringsElement: null,
                typeSpeed: 0,
                startDelay: 0,
                backSpeed: 0,
                shuffle: !1,
                backDelay: 500,
                loop: !1,
                loopCount: !1,
                showCursor: !0,
                cursorChar: "|",
                attr: null,
                contentType: "html",
                callback: function() {},
                preStringTyped: function() {},
                onStringTyped: function() {},
                resetCallback: function() {}
            }
        }(window.jQuery), function(t, e, n) {
    "undefined" != typeof module ? module.exports = n() : "undefined" != typeof define && "object" == typeof define.amd ? define(n) : e[t] = n()
}("Base", this, function() {
    var t = function() {};
    return t.extend = function(e, n) {
        var i = t.prototype.extend;
        t._prototyping = !0;
        var r = new this;
        i.call(r, e), r.base = function() {}, delete t._prototyping;
        var o = r.constructor,
            s = r.constructor = function() {
                if (!t._prototyping) if (this._constructing || this.constructor === s) this._constructing = !0, o.apply(this, arguments), delete this._constructing;
                else if (null !== arguments[0]) return (arguments[0].extend || i).call(arguments[0], r)
            };
        return s.ancestor = this, s.extend = this.extend, s.forEach = this.forEach, s.implement = this.implement, s.prototype = r, s.toString = this.toString, s.valueOf = function(t) {
            return "object" === t ? s : o.valueOf()
        }, i.call(s, n), "function" == typeof s.init && s.init(), s
    }, t.prototype = {
        extend: function(e, n) {
            if (arguments.length > 1) {
                var i = this[e];
                if (i && "function" == typeof n && (!i.valueOf || i.valueOf() !== n.valueOf()) && /\bbase\b/.test(n)) {
                    var r = n.valueOf();
                    n = function() {
                        var e = this.base || t.prototype.base;
                        this.base = i;
                        var n = r.apply(this, arguments);
                        return this.base = e, n
                    }, n.valueOf = function(t) {
                        return "object" === t ? n : r
                    }, n.toString = t.toString
                }
                this[e] = n
            } else if (e) {
                var o = t.prototype.extend;
                t._prototyping || "function" == typeof this || (o = this.extend || o);
                for (var s = {
                    toSource: null
                }, a = ["constructor", "toString", "valueOf"], l = t._prototyping ? 0 : 1; l < a.length; l++) {
                    var u = a[l];
                    e[u] !== s[u] && o.call(this, u, e[u])
                }
                for (var c in e) s[c] || o.call(this, c, e[c])
            }
            return this
        }
    }, t = t.extend({
        constructor: function() {
            this.extend(arguments[0])
        }
    }, {
        ancestor: Object,
        version: "1.1",
        forEach: function(t, e, n) {
            for (var i in t) void 0 === this.prototype[i] && e.call(n, t[i], i, t)
        },
        implement: function() {
            for (var t = 0; t < arguments.length; t++)"function" == typeof arguments[t] ? arguments[t](this.prototype) : this.prototype.extend(arguments[t]);
            return this
        },
        toString: function() {
            return String(this.valueOf())
        }
    })
}), function() {
    Sidebar = Base.extend({
        $body: null,
        $overlay: null,
        $sidebar: null,
        $sidebarHeader: null,
        $sidebarImg: null,
        $toggleButton: null,
        constructor: function() {
            this.$body = $("body"), this.$overlay = $(".sidebar-overlay"), this.$sidebar = $("#sidebar"), this.$links = $(".main", this.$sidebar), this.$sidebarHeader = $("#sidebar .sidebar-header"), this.$toggleButton = $(".navbar-toggle"), this.sidebarImg = this.$sidebarHeader.css("background-image"), this.addEventListeners()
        },
        addEventListeners: function() {
            var t = this;
            t.$toggleButton.on("click", function() {
                return t.$sidebar.toggleClass("open"), (t.$sidebar.hasClass("sidebar-fixed-left") || t.$sidebar.hasClass("sidebar-fixed-right")) && t.$sidebar.hasClass("open") ? (t.$overlay.addClass("active"), t.$body.css("overflow", "hidden")) : (t.$overlay.removeClass("active"), t.$body.css("overflow", "auto")), !1
            }), t.$links.on("click", function() {
                setTimeout(t.closeSidebar.bind(t), 250)
            }), t.$overlay.on("click", function() {
                t.closeSidebar()
            })
        },
        closeSidebar: function() {
            var t = this;
            t.$overlay.removeClass("active"), t.$body.css("overflow", "auto"), t.$sidebar.removeClass("open")
        }
    }), window.Sidebar = Sidebar
}(), function() {
    TwoAnimate = Base.extend({
        cellSize: 20,
        cellOffset: 60,
        baseOffset: 60,
        cellSubdivide: 32,
        adjustment: 60,
        strokewidth: 1,
        strokeColor: "#4A5D71",
        rows: 5,
        cols: 4,
        groupCollection: [],
        hexCollection: [],
        completeFlag: !1,
        constructor: function() {
            this.cellCenter = this.cellSize / 2, this.numCubes = 1, this.hexArray = this.createHexPointArray(0, 0, this.cellCenter, 6, this.adjustment), this.two = new Two({
                type: Two.Types.canvas,
                width: 200,
                height: 200
            }).appendTo($(".TwoAnimate")[0])
        },
        init: function() {
            var t = this,
                e = 0,
                n = (new Two.Group, .5),
                i = this.two.makePath(this.hexArray, !0);
            i.subdivide(this.cellSubdivide), i.noFill(), i.stroke = this.strokeColor, i.linewidth = this.strokewidth, i.translation.set(this.baseOffset, this.baseOffset);
            var r = this.two.makePath(this.hexArray, !0);
            r.subdivide(this.cellSubdivide), r.noFill(), r.stroke = this.strokeColor, r.linewidth = this.strokewidth, r.translation.set(this.baseOffset, this.baseOffset);
            var o = this.createCheck();
            return this.two.add(o), o.subdivide(this.cellSubdivide), o.noFill(), o.stroke = this.strokeColor, o.linewidth = this.strokewidth, o.translation.set(48, 49), o.ending = 0, t.two.bind("update", function() {
                if (t.completeFlag) {
                    t.two.unbind();
                    var s = e - n;
                    t.two.bind("update", function() {
                        e > 1 ? t.two.unbind() : e += .00625, o.ending = e, i.beginning = s - e, i.ending = e
                    })
                }.9999 > e ? e += .00625 : e = 0, n > e && (r.beginning = 1 - (n - e), r.ending = 1), i.beginning = e - n, i.ending = e
            }).play(), this
        },
        createHexPointArray: function(t, e, n, i, r) {
            var o = this.polygonPointArray(i, t, e, n, r),
                s = (o[5], [new Two.Anchor(o[0].x, o[0].y), new Two.Anchor(o[1].x, o[1].y), new Two.Anchor(o[2].x, o[2].y), new Two.Anchor(o[3].x, o[3].y), new Two.Anchor(o[4].x, o[4].y), new Two.Anchor(o[5].x, o[5].y), new Two.Anchor(o[0].x, o[0].y)]);
            return s
        },
        createCheck: function(t, e) {
            var n = new Two.Path([new Two.Anchor(8, 12), new Two.Anchor(11, 14), new Two.Anchor(15, 8)]);
            return n
        },
        degree2radian: function(t) {
            var e = Math.PI * t / 180;
            return e
        },
        polygonPointArray: function(t, e, n, i, r) {
            for (var o = this.degree2radian(360 / t), s = e, a = n, l = i, u = t, c = [], h = t; c.length <= t; h++) {
                var f = s - l * Math.cos(o * u + this.degree2radian(r)),
                    d = a - l * Math.sin(o * u + this.degree2radian(r));
                c.push({
                    x: f,
                    y: d
                }), u--
            }
            return c
        },
        stop: function() {
            this.completeFlag = !0
        }
    }), window.TwoAnimate = TwoAnimate
}(), function() {
    var t = "==> Starting Nomad agent... \n";
    t += "==> Nomad agent configuration: ^500 \n", t += "^200 \n";
    var e = ["                   Atlas: <disabled>", "                  Client: true", "               Log Level: DEBUG", "                  Region: global (DC: dc1)", "                  Server: false"],
        n = "==> Nomad agent started! Log data will stream in below: \n";
    n += "^200 \n";
    var i = ["      2016/03/14 17:34:26 [DEBUG] client: available drivers [raw_exec java qemu docker exec] \n", "      2016/03/14 17:34:26 [INFO] client: setting server address list: [127.0.0.1:4647] \n", "      2016/03/14 17:34:26 [DEBUG] client: periodically checking for node changes at duration 5s \n", "      2016/03/14 17:34:27 [DEBUG] client: node registration complete \n", "      2016/03/14 17:34:28 [DEBUG] client: state updated to ready \n", "      2016/03/14 17:35:05 [DEBUG] client: updated allocations at index 8 (pulled 1) (filtered 0) \n", "      2016/03/14 17:35:05 [DEBUG] client: allocs: (added 1) (removed 0) (updated 0) (ignore 0) \n", "      2016/03/14 17:35:05 [DEBUG] client: starting task runners for alloc '76cb4259-a20f-1581-877f-1a2a87065d8a' \n", "      2016/03/14 17:35:05 [DEBUG] client: starting task context for 'redis' (alloc '76cb4259-a20f-1581-877f-1a2a87065d8a') \n", "      2016/03/14 17:35:05 [DEBUG] client: updated allocations at index 14 (pulled 2) (filtered 0) \n", "      2016/03/14 17:35:05 [DEBUG] client: allocs: (added 1) (removed 0) (updated 1) (ignore 0) \n", "      2016/03/14 17:35:05 [DEBUG] client: starting task runners for alloc 'a9d647e5-99f8-9755-8b99-9409b81bb7de' \n", "      2016/03/14 17:35:05 [DEBUG] client: starting task context for 'redis' (alloc 'a9d647e5-99f8-9755-8b99-9409b81bb7de') \n"];
    C1m = Base.extend({
        ROWS: 5,
        PADDING: 64,
        zIndexCounter: 9999,
        machineTemplate: "",
        previousRowLeft: 0,
        previousRowTop: 0,
        codeString1: t,
        codeString2: n,
        output1: e,
        output2: i,
        constructor: function() {
            this.$machineSelector = ".Machine", this.$stage = $("#jsC1MStage"), this.$topStack = $(".jsCluster"), this.$terminal1 = $(".jsTerminal-1"), this.$terminal2 = $(".jsTerminal-2"), this.machineTemplate += '<div class="Machine">', this.machineTemplate += '<span class="Machine-face Machine-face--top"></span>', this.machineTemplate += '<span class="Machine-face Machine-face--left"></span>', this.machineTemplate += '<span class="Machine-face Machine-face--right"></span>', this.machineTemplate += "</div>", this.init()
        },
        init: function() {
            var t = this;
            this.hexAnimation = (new TwoAnimate).init(), this.startTyped(1).then(function() {
                return t.startCodeOutput(1)
            }).delay(1600).then(function() {
                return t.startTyped(2)
            }).then(function() {
                t.startCodeOutput(2)
            }).delay(1e3).done(function() {
                t.hexAnimation.stop()
            }), this.startClusterPreCompiled().done(function() {
                t.showStacks()
            })
        },
        startTyped: function(t) {
            var e = this,
                n = Q.defer(),
                i = this["codeString" + t],
                r = this["$terminal" + t];
            return 2 == t && (e.$terminal1.addClass("u-hidden"), e.$terminal2.removeClass("u-hidden")), r.typed({
                showCursor: !1,
                strings: [i],
                typeSpeed: 0,
                callback: function() {
                    r.addClass("Terminal-type--hideCursor"), n.resolve()
                }
            }), n.promise
        },
        startCodeOutput: function(t) {
            for (var e = Q.defer(), n = this, i = n["output" + t], r = 0; r < i.length; r++)!
                function(r) {
                    setTimeout(function() {
                        var o = $("<div>").text(i[r]);
                        n["$terminal" + t].append(o), r === i.length - 1 && e.resolve()
                    }, 200 * r)
                }(r);
            return e.promise
        },
        startClusterPreCompiled: function() {
            for (var t = Q.defer(), e = $(this.$machineSelector), n = 24, i = 0; i < e.length; i++)!
                function(i) {
                    setTimeout(function() {
                        var r = $(e[i]);
                        r.addClass("in"), i === n && r.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function(e) {
                            t.resolve()
                        })
                    }, 150 * i)
                }(i);
            return t.promise
        },
        showStacks: function() {
            var t = this,
                e = this.$topStack.clone(),
                n = this.$topStack.clone(),
                i = this.$topStack.clone(),
                r = this.$topStack.clone();
            e.addClass("Cluster--1"), n.addClass("Cluster--2"), i.addClass("Cluster--3"), r.addClass("Cluster--4"), t.$stage.prepend(e), t.$stage.prepend(n), t.$stage.prepend(i), t.$stage.prepend(r), setTimeout(function() {
                e.addClass("Cluster--animated in")
            }, 100), setTimeout(function() {
                n.addClass("Cluster--animated in")
            }, 400), setTimeout(function() {
                i.addClass("Cluster--animated in")
            }, 700), setTimeout(function() {
                r.addClass("Cluster--animated in")
            }, 1e3)
        },
        getRadiansForAngle: function(t) {
            return t * (Math.PI / 180)
        }
    }), window.C1m = C1m
}(), function(t, e) {
    var n = e.HSH || {};
    n.Utils = function() {
        return {
            isMobile: function() {
                return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ? !0 : !1
            }()
        }
    }(), n.Hero = function() {
        return {
            ui: null,
            init: function() {
                var e = this;
                this.ui = {
                    $doc: t(window),
                    $hero: t(".hero"),
                    $heroContent: t(".hero-content")
                }, e.ui.$hero.css("webkitTransform", "translate(0, 0rem)"), e.addEventListeners(), e.handleScroll()
            },
            addEventListeners: function() {
                var t = this;
                t.ui.$doc.scroll(t.handleScroll.bind(this))
            },
            handleScroll: function() {
                var t = this,
                    e = t.ui.$doc.scrollTop();
                t.ui.$hero.css("webkitTransform", "translate(0, " + -(.0315 * e) + "rem)"), t.ui.$heroContent.css("webkitTransform", "translate(0, " + -(e * -.005) + "rem)"), t.ui.$heroContent.css("opacity", 1 - .00175 * e)
            }
        }
    }(), n.Slider = function() {
        return {
            ui: null,
            prevSlideClass: null,
            init: function() {
                var e = this;
                this.ui = {
                    $doc: t(window),
                    $slider: t(".slider"),
                    $productsDisplay: t("#tools-display"),
                    $productsNav: t("#tools-nav li")
                }, this.owlProps = {
                    stopOnHover: !0,
                    slideSpeed: 600,
                    pagination: !1,
                    goToFirstSpeed: 2e3,
                    singleItem: !0,
                    autoHeight: !0,
                    afterInit: function() {
                        e.prevSlideClass = e.ui.$productsNav[this.currentItem].getAttribute("data-prod")
                    },
                    afterAction: function(t, n) {
                        e.handleSliderUpdate(this.currentItem)
                    }
                }, e.initSlider(), e.addEventListeners()
            },
            addEventListeners: function() {
                var e = this;
                this.ui.$productsNav.click(function() {
                    var n = t(this).index();
                    return e.ui.$slider.data("owlCarousel").goTo(n), !1
                })
            },
            initSlider: function() {
                var t = this;
                this.ui.$slider.owlCarousel(t.owlProps)
            },
            handleSliderUpdate: function(e) {
                var n = this,
                    i = this.ui.$productsNav[e],
                    r = i.getAttribute("data-prod");
                this.ui.$productsDisplay.removeClass(n.prevSlideClass).addClass(r), n.prevSlideClass = r, this.ui.$productsNav.removeClass("active"), t(i).addClass("active")
            }
        }
    }(), n.Positions = function() {
        return {
            init: function() {
                var e = this;
                this.panels = t("#jobs .panel-body").hide(), t("#jobs .trigger").click(function() {
                    var n = t(this);
                    return e.panels.slideUp(), n.hasClass("active") ? (n.removeClass("active"), t(".job").removeClass("active")) : (t("#jobs .trigger").removeClass("active"), t(".job").removeClass("active"), n.addClass("active"), n.closest(".job").addClass("active"), n.parent().find(".panel-body").slideDown()), !1
                })
            }
        }
    }(), t(document).ready(function() {
        t(".hero-mask").length > 0 && n.Hero.init(), t(".index").length > 0 && n.Slider.init(), t("#jobs").length > 0 && n.Positions.init(), t("#timeline").length > 0 && n.Timeline.init(), t(".page-c1m").length > 0 && new C1m, new Sidebar
    })
}(jQuery, this), Function.prototype.bind || (Function.prototype.bind = function(t) {
    if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    var e = Array.prototype.slice.call(arguments, 1),
        n = this,
        i = function() {},
        r = function() {
            return n.apply(this instanceof i && t ? this : t, e.concat(Array.prototype.slice.call(arguments)))
        };
    return i.prototype = this.prototype, r.prototype = new i, r
});
