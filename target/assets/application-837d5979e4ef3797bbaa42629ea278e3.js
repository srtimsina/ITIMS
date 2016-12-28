(function (q, ia) {
    "object" === typeof module && "object" === typeof module.exports ? module.exports = q.document ? ia(q, !0) : function (q) {
        if (!q.document)throw Error("jQuery requires a window with a document");
        return ia(q)
    } : ia(q)
})("undefined" !== typeof window ? window : this, function (q, ia) {
    function Da(a) {
        var b = a.length, c = d.type(a);
        return "function" === c || d.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" === typeof b && 0 < b && b - 1 in a
    }

    function Ea(a, b, c) {
        if (d.isFunction(b))return d.grep(a, function (a, d) {
            return !!b.call(a,
                    d, a) !== c
        });
        if (b.nodeType)return d.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" === typeof b) {
            if (Zb.test(b))return d.filter(b, a, c);
            b = d.filter(b, a)
        }
        return d.grep(a, function (a) {
            return 0 <= d.inArray(a, b) !== c
        })
    }

    function Ya(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }

    function $b(a) {
        var b = Za[a] = {};
        d.each(a.match(K) || [], function (a, d) {
            b[d] = !0
        });
        return b
    }

    function $a() {
        n.addEventListener ? (n.removeEventListener("DOMContentLoaded", B, !1), q.removeEventListener("load", B, !1)) : (n.detachEvent("onreadystatechange",
            B), q.detachEvent("onload", B))
    }

    function B() {
        if (n.addEventListener || "load" === event.type || "complete" === n.readyState)$a(), d.ready()
    }

    function ab(a, b, c) {
        if (void 0 === c && 1 === a.nodeType)if (c = "data-" + b.replace(ac, "-$1").toLowerCase(), c = a.getAttribute(c), "string" === typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : bc.test(c) ? d.parseJSON(c) : c
            } catch (e) {
            }
            d.data(a, b, c)
        } else c = void 0;
        return c
    }

    function Fa(a) {
        for (var b in a)if (("data" !== b || !d.isEmptyObject(a[b])) && "toJSON" !== b)return !1;
        return !0
    }

    function bb(a, b, c, e) {
        if (d.acceptData(a)) {
            var f = d.expando, g = a.nodeType, h = g ? d.cache : a, k = g ? a[f] : a[f] && f;
            if (k && h[k] && (e || h[k].data) || void 0 !== c || "string" !== typeof b) {
                k || (k = g ? a[f] = R.pop() || d.guid++ : f);
                h[k] || (h[k] = g ? {} : {toJSON: d.noop});
                if ("object" === typeof b || "function" === typeof b)e ? h[k] = d.extend(h[k], b) : h[k].data = d.extend(h[k].data, b);
                a = h[k];
                e || (a.data || (a.data = {}), a = a.data);
                void 0 !== c && (a[d.camelCase(b)] = c);
                "string" === typeof b ? (c = a[b], null == c && (c = a[d.camelCase(b)])) : c = a;
                return c
            }
        }
    }

    function cb(a, b, c) {
        if (d.acceptData(a)) {
            var e,
                f, g = a.nodeType, h = g ? d.cache : a, k = g ? a[d.expando] : d.expando;
            if (h[k]) {
                if (b && (e = c ? h[k] : h[k].data)) {
                    d.isArray(b) ? b = b.concat(d.map(b, d.camelCase)) : b in e ? b = [b] : (b = d.camelCase(b), b = b in e ? [b] : b.split(" "));
                    for (f = b.length; f--;)delete e[b[f]];
                    if (c ? !Fa(e) : !d.isEmptyObject(e))return
                }
                if (!c && (delete h[k].data, !Fa(h[k])))return;
                g ? d.cleanData([a], !0) : p.deleteExpando || h != h.window ? delete h[k] : h[k] = null
            }
        }
    }

    function na() {
        return !0
    }

    function W() {
        return !1
    }

    function db() {
        try {
            return n.activeElement
        } catch (a) {
        }
    }

    function eb(a) {
        var b =
            fb.split("|");
        a = a.createDocumentFragment();
        if (a.createElement)for (; b.length;)a.createElement(b.pop());
        return a
    }

    function w(a, b) {
        var c, e, f = 0, g = "undefined" !== typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" !== typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!g)for (g = [], c = a.childNodes || a; null != (e = c[f]); f++)!b || d.nodeName(e, b) ? g.push(e) : d.merge(g, w(e, b));
        return void 0 === b || b && d.nodeName(a, b) ? d.merge([a], g) : g
    }

    function cc(a) {
        Ga.test(a.type) && (a.defaultChecked = a.checked)
    }

    function gb(a, b) {
        return d.nodeName(a, "table") && d.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function hb(a) {
        a.type = (null !== d.find.attr(a, "type")) + "/" + a.type;
        return a
    }

    function ib(a) {
        var b = dc.exec(a.type);
        b ? a.type = b[1] : a.removeAttribute("type");
        return a
    }

    function Ha(a, b) {
        for (var c, e = 0; null != (c = a[e]); e++)d._data(c, "globalEval", !b || d._data(b[e], "globalEval"))
    }

    function jb(a, b) {
        if (1 === b.nodeType && d.hasData(a)) {
            var c,
                e, f;
            e = d._data(a);
            var g = d._data(b, e), h = e.events;
            if (h)for (c in delete g.handle, g.events = {}, h)for (e = 0, f = h[c].length; e < f; e++)d.event.add(b, c, h[c][e]);
            g.data && (g.data = d.extend({}, g.data))
        }
    }

    function kb(a, b) {
        var c, e = d(b.createElement(a)).appendTo(b.body), f = q.getDefaultComputedStyle && (c = q.getDefaultComputedStyle(e[0])) ? c.display : d.css(e[0], "display");
        e.detach();
        return f
    }

    function oa(a) {
        var b = n, c = lb[a];
        c || (c = kb(a, b), "none" !== c && c || (ja = (ja || d("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
            b = (ja[0].contentWindow || ja[0].contentDocument).document, b.write(), b.close(), c = kb(a, b), ja.detach()), lb[a] = c);
        return c
    }

    function mb(a, b) {
        return {
            get: function () {
                var c = a();
                if (null != c)if (c)delete this.get; else return (this.get = b).apply(this, arguments)
            }
        }
    }

    function nb(a, b) {
        if (b in a)return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, f = ob.length; f--;)if (b = ob[f] + c, b in a)return b;
        return d
    }

    function pb(a, b) {
        for (var c, e, f, g = [], h = 0, k = a.length; h < k; h++)e = a[h], e.style && (g[h] = d._data(e, "olddisplay"), c = e.style.display,
            b ? (g[h] || "none" !== c || (e.style.display = ""), "" === e.style.display && ka(e) && (g[h] = d._data(e, "olddisplay", oa(e.nodeName)))) : (f = ka(e), (c && "none" !== c || !f) && d._data(e, "olddisplay", f ? c : d.css(e, "display"))));
        for (h = 0; h < k; h++)e = a[h], !e.style || b && "none" !== e.style.display && "" !== e.style.display || (e.style.display = b ? g[h] || "" : "none");
        return a
    }

    function qb(a, b, c) {
        return (a = ec.exec(b)) ? Math.max(0, a[1] - (c || 0)) + (a[2] || "px") : b
    }

    function rb(a, b, c, e, f) {
        b = c === (e ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
        for (var g = 0; 4 > b; b += 2)"margin" ===
        c && (g += d.css(a, c + M[b], !0, f)), e ? ("content" === c && (g -= d.css(a, "padding" + M[b], !0, f)), "margin" !== c && (g -= d.css(a, "border" + M[b] + "Width", !0, f))) : (g += d.css(a, "padding" + M[b], !0, f), "padding" !== c && (g += d.css(a, "border" + M[b] + "Width", !0, f)));
        return g
    }

    function sb(a, b, c) {
        var e = !0, f = "width" === b ? a.offsetWidth : a.offsetHeight, g = X(a), h = p.boxSizing && "border-box" === d.css(a, "boxSizing", !1, g);
        if (0 >= f || null == f) {
            f = Y(a, b, g);
            if (0 > f || null == f)f = a.style[b];
            if (pa.test(f))return f;
            e = h && (p.boxSizingReliable() || f === a.style[b]);
            f = parseFloat(f) ||
            0
        }
        return f + rb(a, b, c || (h ? "border" : "content"), e, g) + "px"
    }

    function F(a, b, c, d, f) {
        return new F.prototype.init(a, b, c, d, f)
    }

    function tb() {
        setTimeout(function () {
            Z = void 0
        });
        return Z = d.now()
    }

    function aa(a, b) {
        var c, d = {height: a}, f = 0;
        for (b = b ? 1 : 0; 4 > f; f += 2 - b)c = M[f], d["margin" + c] = d["padding" + c] = a;
        b && (d.opacity = d.width = a);
        return d
    }

    function ub(a, b, c) {
        for (var d, f = (la[b] || []).concat(la["*"]), g = 0, h = f.length; g < h; g++)if (d = f[g].call(c, b, a))return d
    }

    function fc(a, b) {
        var c, e, f, g, h;
        for (c in a)if (e = d.camelCase(c), f = b[e], g = a[c],
            d.isArray(g) && (f = g[1], g = a[c] = g[0]), c !== e && (a[e] = g, delete a[c]), (h = d.cssHooks[e]) && "expand"in h)for (c in g = h.expand(g), delete a[e], g)c in a || (a[c] = g[c], b[c] = f); else b[e] = f
    }

    function vb(a, b, c) {
        var e, f = 0, g = qa.length, h = d.Deferred().always(function () {
            delete k.elem
        }), k = function () {
            if (e)return !1;
            for (var b = Z || tb(), b = Math.max(0, l.startTime + l.duration - b), c = 1 - (b / l.duration || 0), d = 0, f = l.tweens.length; d < f; d++)l.tweens[d].run(c);
            h.notifyWith(a, [l, c, b]);
            if (1 > c && f)return b;
            h.resolveWith(a, [l]);
            return !1
        }, l = h.promise({
            elem: a,
            props: d.extend({}, b),
            opts: d.extend(!0, {specialEasing: {}}, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Z || tb(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c) {
                var e = d.Tween(a, l.opts, b, c, l.opts.specialEasing[b] || l.opts.easing);
                l.tweens.push(e);
                return e
            },
            stop: function (b) {
                var c = 0, d = b ? l.tweens.length : 0;
                if (e)return this;
                for (e = !0; c < d; c++)l.tweens[c].run(1);
                b ? h.resolveWith(a, [l, b]) : h.rejectWith(a, [l, b]);
                return this
            }
        });
        c = l.props;
        for (fc(c, l.opts.specialEasing); f < g; f++)if (b = qa[f].call(l, a, c, l.opts))return b;
        d.map(c, ub, l);
        d.isFunction(l.opts.start) && l.opts.start.call(a, l);
        d.fx.timer(d.extend(k, {elem: a, anim: l, queue: l.opts.queue}));
        return l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function wb(a) {
        return function (b, c) {
            "string" !== typeof b && (c = b, b = "*");
            var e, f = 0, g = b.toLowerCase().match(K) || [];
            if (d.isFunction(c))for (; e = g[f++];)"+" === e.charAt(0) ? (e = e.slice(1) || "*", (a[e] = a[e] || []).unshift(c)) : (a[e] = a[e] || []).push(c)
        }
    }

    function xb(a, b, c, e) {
        function f(k) {
            var l;
            g[k] = !0;
            d.each(a[k] || [], function (a, d) {
                var k = d(b, c, e);
                if ("string" === typeof k && !h && !g[k])return b.dataTypes.unshift(k), f(k), !1;
                if (h)return !(l = k)
            });
            return l
        }

        var g = {}, h = a === Ia;
        return f(b.dataTypes[0]) || !g["*"] && f("*")
    }

    function Ja(a, b) {
        var c, e, f = d.ajaxSettings.flatOptions || {};
        for (e in b)void 0 !== b[e] && ((f[e] ? a : c || (c = {}))[e] = b[e]);
        c && d.extend(!0, a, c);
        return a
    }

    function Ka(a, b, c, e) {
        var f;
        if (d.isArray(b))d.each(b, function (b, d) {
            c || gc.test(a) ? e(a, d) : Ka(a + "[" + ("object" === typeof d ? b : "") + "]", d, c, e)
        }); else if (c ||
            "object" !== d.type(b))e(a, b); else for (f in b)Ka(a + "[" + f + "]", b[f], c, e)
    }

    function yb() {
        try {
            return new q.XMLHttpRequest
        } catch (a) {
        }
    }

    function zb(a) {
        return d.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }

    var R = [], N = R.slice, Ab = R.concat, La = R.push, Bb = R.indexOf, sa = {}, hc = sa.toString, S = sa.hasOwnProperty, p = {}, d = function (a, b) {
        return new d.fn.init(a, b)
    }, ic = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, jc = /^-ms-/, kc = /-([\da-z])/gi, lc = function (a, b) {
        return b.toUpperCase()
    };
    d.fn = d.prototype = {
        jquery: "1.11.1", constructor: d,
        selector: "", length: 0, toArray: function () {
            return N.call(this)
        }, get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : N.call(this)
        }, pushStack: function (a) {
            a = d.merge(this.constructor(), a);
            a.prevObject = this;
            a.context = this.context;
            return a
        }, each: function (a, b) {
            return d.each(this, a, b)
        }, map: function (a) {
            return this.pushStack(d.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, slice: function () {
            return this.pushStack(N.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        },
        eq: function (a) {
            var b = this.length;
            a = +a + (0 > a ? b : 0);
            return this.pushStack(0 <= a && a < b ? [this[a]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: La, sort: R.sort, splice: R.splice
    };
    d.extend = d.fn.extend = function () {
        var a, b, c, e, f, g = arguments[0] || {}, h = 1, k = arguments.length, l = !1;
        "boolean" === typeof g && (l = g, g = arguments[h] || {}, h++);
        "object" === typeof g || d.isFunction(g) || (g = {});
        h === k && (g = this, h--);
        for (; h < k; h++)if (null != (f = arguments[h]))for (e in f)a = g[e], c = f[e], g !== c && (l && c && (d.isPlainObject(c) ||
        (b = d.isArray(c))) ? (b ? (b = !1, a = a && d.isArray(a) ? a : []) : a = a && d.isPlainObject(a) ? a : {}, g[e] = d.extend(l, a, c)) : void 0 !== c && (g[e] = c));
        return g
    };
    d.extend({
        expando: "jQuery" + ("1.11.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
            throw Error(a);
        }, noop: function () {
        }, isFunction: function (a) {
            return "function" === d.type(a)
        }, isArray: Array.isArray || function (a) {
            return "array" === d.type(a)
        }, isWindow: function (a) {
            return null != a && a == a.window
        }, isNumeric: function (a) {
            return !d.isArray(a) && 0 <= a - parseFloat(a)
        }, isEmptyObject: function (a) {
            for (var b in a)return !1;
            return !0
        }, isPlainObject: function (a) {
            var b;
            if (!a || "object" !== d.type(a) || a.nodeType || d.isWindow(a))return !1;
            try {
                if (a.constructor && !S.call(a, "constructor") && !S.call(a.constructor.prototype, "isPrototypeOf"))return !1
            } catch (c) {
                return !1
            }
            if (p.ownLast)for (b in a)return S.call(a, b);
            for (b in a);
            return void 0 === b || S.call(a, b)
        }, type: function (a) {
            return null == a ? a + "" : "object" === typeof a || "function" === typeof a ? sa[hc.call(a)] || "object" : typeof a
        }, globalEval: function (a) {
            a && d.trim(a) && (q.execScript || function (a) {
                q.eval.call(q,
                    a)
            })(a)
        }, camelCase: function (a) {
            return a.replace(jc, "ms-").replace(kc, lc)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }, each: function (a, b, c) {
            var d, f = 0, g = a.length;
            d = Da(a);
            if (c)if (d)for (; f < g && (d = b.apply(a[f], c), !1 !== d); f++); else for (f in a) {
                if (d = b.apply(a[f], c), !1 === d)break
            } else if (d)for (; f < g && (d = b.call(a[f], f, a[f]), !1 !== d); f++); else for (f in a)if (d = b.call(a[f], f, a[f]), !1 === d)break;
            return a
        }, trim: function (a) {
            return null == a ? "" : (a + "").replace(ic, "")
        }, makeArray: function (a,
                                b) {
            var c = b || [];
            null != a && (Da(Object(a)) ? d.merge(c, "string" === typeof a ? [a] : a) : La.call(c, a));
            return c
        }, inArray: function (a, b, c) {
            var d;
            if (b) {
                if (Bb)return Bb.call(b, a, c);
                d = b.length;
                for (c = c ? 0 > c ? Math.max(0, d + c) : c : 0; c < d; c++)if (c in b && b[c] === a)return c
            }
            return -1
        }, merge: function (a, b) {
            for (var c = +b.length, d = 0, f = a.length; d < c;)a[f++] = b[d++];
            if (c !== c)for (; void 0 !== b[d];)a[f++] = b[d++];
            a.length = f;
            return a
        }, grep: function (a, b, c) {
            for (var d = [], f = 0, g = a.length, h = !c; f < g; f++)c = !b(a[f], f), c !== h && d.push(a[f]);
            return d
        }, map: function (a,
                          b, c) {
            var d, f = 0, g = a.length, h = [];
            if (Da(a))for (; f < g; f++)d = b(a[f], f, c), null != d && h.push(d); else for (f in a)d = b(a[f], f, c), null != d && h.push(d);
            return Ab.apply([], h)
        }, guid: 1, proxy: function (a, b) {
            var c, e;
            "string" === typeof b && (e = a[b], b = a, a = e);
            if (d.isFunction(a))return c = N.call(arguments, 2), e = function () {
                return a.apply(b || this, c.concat(N.call(arguments)))
            }, e.guid = a.guid = a.guid || d.guid++, e
        }, now: function () {
            return +new Date
        }, support: p
    });
    d.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
        function (a, b) {
            sa["[object " + b + "]"] = b.toLowerCase()
        });
    var O = function (a) {
        function b(a, b, c, d) {
            var e, f, g, h, k;
            (b ? b.ownerDocument || b : C) !== A && ba(b);
            b = b || A;
            c = c || [];
            if (!a || "string" !== typeof a)return c;
            if (1 !== (h = b.nodeType) && 9 !== h)return [];
            if (T && !d) {
                if (e = pa.exec(a))if (g = e[1])if (9 === h)if ((f = b.getElementById(g)) && f.parentNode) {
                    if (f.id === g)return c.push(f), c
                } else return c; else {
                    if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && L(b, f) && f.id === g)return c.push(f), c
                } else {
                    if (e[2])return ca.apply(c, b.getElementsByTagName(a)),
                        c;
                    if ((g = e[3]) && u.getElementsByClassName && b.getElementsByClassName)return ca.apply(c, b.getElementsByClassName(g)), c
                }
                if (u.qsa && (!D || !D.test(a))) {
                    f = e = E;
                    g = b;
                    k = 9 === h && a;
                    if (1 === h && "object" !== b.nodeName.toLowerCase()) {
                        h = ta(a);
                        (e = b.getAttribute("id")) ? f = e.replace(qa, "\\$&") : b.setAttribute("id", f);
                        f = "[id='" + f + "'] ";
                        for (g = h.length; g--;)h[g] = f + p(h[g]);
                        g = aa.test(a) && t(b.parentNode) || b;
                        k = h.join(",")
                    }
                    if (k)try {
                        return ca.apply(c, g.querySelectorAll(k)), c
                    } catch (l) {
                    } finally {
                        e || b.removeAttribute("id")
                    }
                }
            }
            return Db(a.replace(O,
                "$1"), b, c, d)
        }

        function c() {
            function a(c, d) {
                b.push(c + " ") > s.cacheLength && delete a[b.shift()];
                return a[c + " "] = d
            }

            var b = [];
            return a
        }

        function d(a) {
            a[E] = !0;
            return a
        }

        function f(a) {
            var b = A.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b)
            }
        }

        function g(a, b) {
            for (var c = a.split("|"), d = a.length; d--;)s.attrHandle[c[d]] = b
        }

        function h(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || -2147483648) - (~a.sourceIndex || -2147483648);
            if (d)return d;
            if (c)for (; c = c.nextSibling;)if (c === b)return -1;
            return a ? 1 : -1
        }

        function k(a) {
            return function (b) {
                return "input" === b.nodeName.toLowerCase() && b.type === a
            }
        }

        function l(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function r(a) {
            return d(function (b) {
                b = +b;
                return d(function (c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function t(a) {
            return a && "undefined" !== typeof a.getElementsByTagName && a
        }

        function m() {
        }

        function p(a) {
            for (var b =
                0, c = a.length, d = ""; b < c; b++)d += a[b].value;
            return d
        }

        function n(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = R++;
            return b.first ? function (b, c, f) {
                for (; b = b[d];)if (1 === b.nodeType || e)return a(b, c, f)
            } : function (b, c, g) {
                var h, k, Ma = [H, f];
                if (g)for (; b = b[d];) {
                    if ((1 === b.nodeType || e) && a(b, c, g))return !0
                } else for (; b = b[d];)if (1 === b.nodeType || e) {
                    k = b[E] || (b[E] = {});
                    if ((h = k[d]) && h[0] === H && h[1] === f)return Ma[2] = h[2];
                    k[d] = Ma;
                    if (Ma[2] = a(b, c, g))return !0
                }
            }
        }

        function q(a) {
            return 1 < a.length ? function (b, c, d) {
                for (var e = a.length; e--;)if (!a[e](b,
                        c, d))return !1;
                return !0
            } : a[0]
        }

        function w(a, b, c, d, e) {
            for (var f, g = [], h = 0, k = a.length, l = null != b; h < k; h++)if (f = a[h])if (!c || c(f, d, e))g.push(f), l && b.push(h);
            return g
        }

        function Na(a, c, f, g, h, k) {
            g && !g[E] && (g = Na(g));
            h && !h[E] && (h = Na(h, k));
            return d(function (d, e, k, l) {
                var m, r, t = [], p = [], s = e.length, y;
                if (!(y = d)) {
                    y = c || "*";
                    for (var n = k.nodeType ? [k] : k, Cb = [], q = 0, x = n.length; q < x; q++)b(y, n[q], Cb);
                    y = Cb
                }
                y = !a || !d && c ? y : w(y, t, a, k, l);
                n = f ? h || (d ? a : s || g) ? [] : e : y;
                f && f(y, n, k, l);
                if (g)for (m = w(n, p), g(m, [], k, l), k = m.length; k--;)if (r = m[k])n[p[k]] = !(y[p[k]] = r);
                if (d) {
                    if (h || a) {
                        if (h) {
                            m = [];
                            for (k = n.length; k--;)(r = n[k]) && m.push(y[k] = r);
                            h(null, n = [], m, l)
                        }
                        for (k = n.length; k--;)(r = n[k]) && -1 < (m = h ? z.call(d, r) : t[k]) && (d[m] = !(e[m] = r))
                    }
                } else n = w(n === e ? n.splice(s, n.length) : n), h ? h(null, e, n, l) : ca.apply(e, n)
            })
        }

        function F(a) {
            var b, c, d, e = a.length, f = s.relative[a[0].type];
            c = f || s.relative[" "];
            for (var g = f ? 1 : 0, h = n(function (a) {
                return a === b
            }, c, !0), k = n(function (a) {
                return -1 < z.call(b, a)
            }, c, !0), l = [function (a, c, d) {
                return !f && (d || c !== B) || ((b = c).nodeType ? h(a, c, d) : k(a, c, d))
            }]; g <
                 e; g++)if (c = s.relative[a[g].type])l = [n(q(l), c)]; else {
                c = s.filter[a[g].type].apply(null, a[g].matches);
                if (c[E]) {
                    for (d = ++g; d < e && !s.relative[a[d].type]; d++);
                    return Na(1 < g && q(l), 1 < g && p(a.slice(0, g - 1).concat({value: " " === a[g - 2].type ? "*" : ""})).replace(O, "$1"), c, g < d && F(a.slice(g, d)), d < e && F(a = a.slice(d)), d < e && p(a))
                }
                l.push(c)
            }
            return q(l)
        }

        function I(a, c) {
            var f = 0 < c.length, g = 0 < a.length, h = function (d, e, h, k, l) {
                var m, r, t, p = 0, n = "0", y = d && [], ma = [], q = B, x = d || g && s.find.TAG("*", l), ua = H += null == q ? 1 : Math.random() || .1, v = x.length;
                for (l && (B = e !== A && e); n !== v && null != (m = x[n]); n++) {
                    if (g && m) {
                        for (r = 0; t = a[r++];)if (t(m, e, h)) {
                            k.push(m);
                            break
                        }
                        l && (H = ua)
                    }
                    f && ((m = !t && m) && p--, d && y.push(m))
                }
                p += n;
                if (f && n !== p) {
                    for (r = 0; t = c[r++];)t(y, ma, e, h);
                    if (d) {
                        if (0 < p)for (; n--;)y[n] || ma[n] || (ma[n] = Y.call(k));
                        ma = w(ma)
                    }
                    ca.apply(k, ma);
                    l && !d && 0 < ma.length && 1 < p + c.length && b.uniqueSort(k)
                }
                l && (H = ua, B = q);
                return y
            };
            return f ? d(h) : h
        }

        var J, u, s, K, ua, ta, Oa, Db, B, da, ra, ba, A, G, T, D, v, wa, L, E = "sizzle" + -new Date, C = a.document, H = 0, R = 0, N = c(), P = c(), Q = c(), M = function (a, b) {
            a === b && (ra = !0);
            return 0
        }, X = {}.hasOwnProperty, ea = [], Y = ea.pop, $ = ea.push, ca = ea.push, V = ea.slice, z = ea.indexOf || function (a) {
                for (var b = 0, c = this.length; b < c; b++)if (this[b] === a)return b;
                return -1
            }, W = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"), Z = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + W + "))|)[\\x20\\t\\r\\n\\f]*\\]", S = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
            Z + ")*)|.*)\\)|)", O = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g, ha = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, ia = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, ja = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g, ka = new RegExp(S), la = new RegExp("^" + W + "$"), U = {
            ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
            TAG: new RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + Z),
            PSEUDO: new RegExp("^" + S),
            CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
            bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
            needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
        }, na = /^(?:input|select|textarea|button)$/i, oa = /^h\d$/i, va = /^[^{]+\{\s*\[native \w/, pa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, aa = /[+~]/, qa = /'|\\/g, fa = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig, ga = function (a, b, c) {
            a = "0x" + b - 65536;
            return a !== a || c ? b : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, a & 1023 | 56320)
        };
        try {
            ca.apply(ea = V.call(C.childNodes), C.childNodes), ea[C.childNodes.length].nodeType
        } catch (sa) {
            ca = {
                apply: ea.length ? function (a, b) {
                    $.apply(a, V.call(b))
                } : function (a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        u = b.support = {};
        ua = b.isXML = function (a) {
            return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1
        };
        ba = b.setDocument = function (a) {
            var b = a ? a.ownerDocument || a : C;
            a = b.defaultView;
            if (b === A || 9 !== b.nodeType || !b.documentElement)return A;
            A = b;
            G = b.documentElement;
            T = !ua(b);
            a && a !== a.top && (a.addEventListener ? a.addEventListener("unload", function () {
                ba()
            }, !1) : a.attachEvent && a.attachEvent("onunload", function () {
                ba()
            }));
            u.attributes = f(function (a) {
                a.className = "i";
                return !a.getAttribute("className")
            });
            u.getElementsByTagName = f(function (a) {
                a.appendChild(b.createComment(""));
                return !a.getElementsByTagName("*").length
            });
            u.getElementsByClassName = va.test(b.getElementsByClassName) && f(function (a) {
                a.innerHTML =
                    "<div class='a'></div><div class='a i'></div>";
                a.firstChild.className = "i";
                return 2 === a.getElementsByClassName("i").length
            });
            u.getById = f(function (a) {
                G.appendChild(a).id = E;
                return !b.getElementsByName || !b.getElementsByName(E).length
            });
            u.getById ? (s.find.ID = function (a, b) {
                if ("undefined" !== typeof b.getElementById && T) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, s.filter.ID = function (a) {
                var b = a.replace(fa, ga);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete s.find.ID, s.filter.ID = function (a) {
                var b =
                    a.replace(fa, ga);
                return function (a) {
                    return (a = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === b
                }
            });
            s.find.TAG = u.getElementsByTagName ? function (a, b) {
                if ("undefined" !== typeof b.getElementsByTagName)return b.getElementsByTagName(a)
            } : function (a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];)1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            };
            s.find.CLASS = u.getElementsByClassName && function (a, b) {
                if ("undefined" !== typeof b.getElementsByClassName && T)return b.getElementsByClassName(a)
            };
            v = [];
            D = [];
            if (u.qsa = va.test(b.querySelectorAll))f(function (a) {
                a.innerHTML = "<select msallowclip=''><option selected=''></option></select>";
                a.querySelectorAll("[msallowclip^='']").length && D.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                a.querySelectorAll("[selected]").length || D.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                a.querySelectorAll(":checked").length || D.push(":checked")
            }), f(function (a) {
                var c =
                    b.createElement("input");
                c.setAttribute("type", "hidden");
                a.appendChild(c).setAttribute("name", "D");
                a.querySelectorAll("[name=d]").length && D.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                a.querySelectorAll(":enabled").length || D.push(":enabled", ":disabled");
                a.querySelectorAll("*,:x");
                D.push(",.*:")
            });
            (u.matchesSelector = va.test(wa = G.matches || G.webkitMatchesSelector || G.mozMatchesSelector || G.oMatchesSelector || G.msMatchesSelector)) && f(function (a) {
                u.disconnectedMatch = wa.call(a, "div");
                wa.call(a, "[s!='']:x");
                v.push("!=", S)
            });
            D = D.length && new RegExp(D.join("|"));
            v = v.length && new RegExp(v.join("|"));
            L = (a = va.test(G.compareDocumentPosition)) || va.test(G.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !!(d && 1 === d.nodeType && (c.contains ? c.contains(d) : a.compareDocumentPosition && a.compareDocumentPosition(d) & 16))
            } : function (a, b) {
                if (b)for (; b = b.parentNode;)if (b === a)return !0;
                return !1
            };
            M = a ? function (a, c) {
                if (a === c)return ra = !0, 0;
                var d = !a.compareDocumentPosition - !c.compareDocumentPosition;
                if (d)return d;
                d = (a.ownerDocument || a) === (c.ownerDocument || c) ? a.compareDocumentPosition(c) : 1;
                return d & 1 || !u.sortDetached && c.compareDocumentPosition(a) === d ? a === b || a.ownerDocument === C && L(C, a) ? -1 : c === b || c.ownerDocument === C && L(C, c) ? 1 : da ? z.call(da, a) - z.call(da, c) : 0 : d & 4 ? -1 : 1
            } : function (a, c) {
                if (a === c)return ra = !0, 0;
                var d, e = 0;
                d = a.parentNode;
                var f = c.parentNode, g = [a], k = [c];
                if (!d || !f)return a === b ? -1 : c === b ? 1 : d ? -1 : f ? 1 : da ? z.call(da, a) - z.call(da, c) : 0;
                if (d === f)return h(a, c);
                for (d = a; d = d.parentNode;)g.unshift(d);
                for (d =
                         c; d = d.parentNode;)k.unshift(d);
                for (; g[e] === k[e];)e++;
                return e ? h(g[e], k[e]) : g[e] === C ? -1 : k[e] === C ? 1 : 0
            };
            return b
        };
        b.matches = function (a, c) {
            return b(a, null, null, c)
        };
        b.matchesSelector = function (a, c) {
            (a.ownerDocument || a) !== A && ba(a);
            c = c.replace(ja, "='$1']");
            if (!(!u.matchesSelector || !T || v && v.test(c) || D && D.test(c)))try {
                var d = wa.call(a, c);
                if (d || u.disconnectedMatch || a.document && 11 !== a.document.nodeType)return d
            } catch (e) {
            }
            return 0 < b(c, A, null, [a]).length
        };
        b.contains = function (a, b) {
            (a.ownerDocument || a) !== A && ba(a);
            return L(a, b)
        };
        b.attr = function (a, b) {
            (a.ownerDocument || a) !== A && ba(a);
            var c = s.attrHandle[b.toLowerCase()], c = c && X.call(s.attrHandle, b.toLowerCase()) ? c(a, b, !T) : void 0;
            return void 0 !== c ? c : u.attributes || !T ? a.getAttribute(b) : (c = a.getAttributeNode(b)) && c.specified ? c.value : null
        };
        b.error = function (a) {
            throw Error("Syntax error, unrecognized expression: " + a);
        };
        b.uniqueSort = function (a) {
            var b, c = [], d = 0, e = 0;
            ra = !u.detectDuplicates;
            da = !u.sortStable && a.slice(0);
            a.sort(M);
            if (ra) {
                for (; b = a[e++];)b === a[e] && (d = c.push(e));
                for (; d--;)a.splice(c[d], 1)
            }
            da = null;
            return a
        };
        K = b.getText = function (a) {
            var b, c = "", d = 0;
            b = a.nodeType;
            if (!b)for (; b = a[d++];)c += K(b); else if (1 === b || 9 === b || 11 === b) {
                if ("string" === typeof a.textContent)return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling)c += K(a)
            } else if (3 === b || 4 === b)return a.nodeValue;
            return c
        };
        s = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: U,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (a) {
                    a[1] = a[1].replace(fa, ga);
                    a[3] = (a[3] || a[4] || a[5] || "").replace(fa, ga);
                    "~=" === a[2] && (a[3] = " " + a[3] + " ");
                    return a.slice(0, 4)
                }, CHILD: function (a) {
                    a[1] = a[1].toLowerCase();
                    "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]);
                    return a
                }, PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    if (U.CHILD.test(a[0]))return null;
                    a[3] ? a[2] = a[4] || a[5] || "" : c && ka.test(c) && (b = ta(c, !0)) && (b = c.indexOf(")",
                        c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b));
                    return a.slice(0, 3)
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(fa, ga).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                }, CLASS: function (a) {
                    var b = N[a + " "];
                    return b || (b = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)")) && N(a, function (a) {
                            return b.test("string" === typeof a.className && a.className || "undefined" !== typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                },
                ATTR: function (a, c, d) {
                    return function (e) {
                        e = b.attr(e, a);
                        if (null == e)return "!=" === c;
                        if (!c)return !0;
                        e += "";
                        return "=" === c ? e === d : "!=" === c ? e !== d : "^=" === c ? d && 0 === e.indexOf(d) : "*=" === c ? d && -1 < e.indexOf(d) : "$=" === c ? d && e.slice(-d.length) === d : "~=" === c ? -1 < (" " + e + " ").indexOf(d) : "|=" === c ? e === d || e.slice(0, d.length + 1) === d + "-" : !1
                    }
                }, CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, k) {
                        var l, m, r, t, p;
                        c = f !== g ? "nextSibling" :
                            "previousSibling";
                        var n = b.parentNode, y = h && b.nodeName.toLowerCase();
                        k = !k && !h;
                        if (n) {
                            if (f) {
                                for (; c;) {
                                    for (m = b; m = m[c];)if (h ? m.nodeName.toLowerCase() === y : 1 === m.nodeType)return !1;
                                    p = c = "only" === a && !p && "nextSibling"
                                }
                                return !0
                            }
                            p = [g ? n.firstChild : n.lastChild];
                            if (g && k)for (k = n[E] || (n[E] = {}), l = k[a] || [], t = l[0] === H && l[1], r = l[0] === H && l[2], m = t && n.childNodes[t]; m = ++t && m && m[c] || (r = t = 0) || p.pop();) {
                                if (1 === m.nodeType && ++r && m === b) {
                                    k[a] = [H, t, r];
                                    break
                                }
                            } else if (k && (l = (b[E] || (b[E] = {}))[a]) && l[0] === H)r = l[1]; else for (; (m = ++t && m &&
                            m[c] || (r = t = 0) || p.pop()) && ((h ? m.nodeName.toLowerCase() !== y : 1 !== m.nodeType) || !++r || (k && ((m[E] || (m[E] = {}))[a] = [H, r]), m !== b)););
                            r -= e;
                            return r === d || 0 === r % d && 0 <= r / d
                        }
                    }
                }, PSEUDO: function (a, c) {
                    var f, g = s.pseudos[a] || s.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return g[E] ? g(c) : 1 < g.length ? (f = [a, a, "", c], s.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function (a, b) {
                        for (var d, e = g(a, c), f = e.length; f--;)d = z.call(a, e[f]), a[d] = !(b[d] = e[f])
                    }) : function (a) {
                        return g(a, 0, f)
                    }) : g
                }
            },
            pseudos: {
                not: d(function (a) {
                    var b =
                        [], c = [], f = Oa(a.replace(O, "$1"));
                    return f[E] ? d(function (a, b, c, d) {
                        d = f(a, null, d, []);
                        for (var e = a.length; e--;)if (c = d[e])a[e] = !(b[e] = c)
                    }) : function (a, d, e) {
                        b[0] = a;
                        f(b, null, e, c);
                        return !c.pop()
                    }
                }), has: d(function (a) {
                    return function (c) {
                        return 0 < b(a, c).length
                    }
                }), contains: d(function (a) {
                    return function (b) {
                        return -1 < (b.textContent || b.innerText || K(b)).indexOf(a)
                    }
                }), lang: d(function (a) {
                    la.test(a || "") || b.error("unsupported lang: " + a);
                    a = a.replace(fa, ga).toLowerCase();
                    return function (b) {
                        var c;
                        do if (c = T ? b.lang : b.getAttribute("xml:lang") ||
                            b.getAttribute("lang"))return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }), target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                }, root: function (a) {
                    return a === G
                }, focus: function (a) {
                    return a === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                }, enabled: function (a) {
                    return !1 === a.disabled
                }, disabled: function (a) {
                    return !0 === a.disabled
                }, checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" ===
                        b && !!a.checked || "option" === b && !!a.selected
                }, selected: function (a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return !0 === a.selected
                }, empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)if (6 > a.nodeType)return !1;
                    return !0
                }, parent: function (a) {
                    return !s.pseudos.empty(a)
                }, header: function (a) {
                    return oa.test(a.nodeName)
                }, input: function (a) {
                    return na.test(a.nodeName)
                }, button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                }, text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() &&
                        "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                }, first: r(function () {
                    return [0]
                }), last: r(function (a, b) {
                    return [b - 1]
                }), eq: r(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }), even: r(function (a, b) {
                    for (var c = 0; c < b; c += 2)a.push(c);
                    return a
                }), odd: r(function (a, b) {
                    for (var c = 1; c < b; c += 2)a.push(c);
                    return a
                }), lt: r(function (a, b, c) {
                    for (b = 0 > c ? c + b : c; 0 <= --b;)a.push(b);
                    return a
                }), gt: r(function (a, b, c) {
                    for (c = 0 > c ? c + b : c; ++c < b;)a.push(c);
                    return a
                })
            }
        };
        s.pseudos.nth = s.pseudos.eq;
        for (J in{
            radio: !0, checkbox: !0,
            file: !0, password: !0, image: !0
        })s.pseudos[J] = k(J);
        for (J in{submit: !0, reset: !0})s.pseudos[J] = l(J);
        m.prototype = s.filters = s.pseudos;
        s.setFilters = new m;
        ta = b.tokenize = function (a, c) {
            var d, e, f, g, h, k, l;
            if (h = P[a + " "])return c ? 0 : h.slice(0);
            h = a;
            k = [];
            for (l = s.preFilter; h;) {
                if (!d || (e = ha.exec(h)))e && (h = h.slice(e[0].length) || h), k.push(f = []);
                d = !1;
                if (e = ia.exec(h))d = e.shift(), f.push({value: d, type: e[0].replace(O, " ")}), h = h.slice(d.length);
                for (g in s.filter)!(e = U[g].exec(h)) || l[g] && !(e = l[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g, matches: e
                }), h = h.slice(d.length));
                if (!d)break
            }
            return c ? h.length : h ? b.error(a) : P(a, k).slice(0)
        };
        Oa = b.compile = function (a, b) {
            var c, d = [], e = [], f = Q[a + " "];
            if (!f) {
                b || (b = ta(a));
                for (c = b.length; c--;)f = F(b[c]), f[E] ? d.push(f) : e.push(f);
                f = Q(a, I(e, d));
                f.selector = a
            }
            return f
        };
        Db = b.select = function (a, b, c, d) {
            var e, f, g, h, k = "function" === typeof a && a, l = !d && ta(a = k.selector || a);
            c = c || [];
            if (1 === l.length) {
                f = l[0] = l[0].slice(0);
                if (2 < f.length && "ID" === (g = f[0]).type && u.getById && 9 === b.nodeType && T && s.relative[f[1].type]) {
                    b = (s.find.ID(g.matches[0].replace(fa,
                        ga), b) || [])[0];
                    if (!b)return c;
                    k && (b = b.parentNode);
                    a = a.slice(f.shift().value.length)
                }
                for (e = U.needsContext.test(a) ? 0 : f.length; e--;) {
                    g = f[e];
                    if (s.relative[h = g.type])break;
                    if (h = s.find[h])if (d = h(g.matches[0].replace(fa, ga), aa.test(f[0].type) && t(b.parentNode) || b)) {
                        f.splice(e, 1);
                        a = d.length && p(f);
                        if (!a)return ca.apply(c, d), c;
                        break
                    }
                }
            }
            (k || Oa(a, l))(d, b, !T, c, aa.test(a) && t(b.parentNode) || b);
            return c
        };
        u.sortStable = E.split("").sort(M).join("") === E;
        u.detectDuplicates = !!ra;
        ba();
        u.sortDetached = f(function (a) {
            return a.compareDocumentPosition(A.createElement("div")) &
                1
        });
        f(function (a) {
            a.innerHTML = "<a href='#'></a>";
            return "#" === a.firstChild.getAttribute("href")
        }) || g("type|href|height|width", function (a, b, c) {
            if (!c)return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        });
        u.attributes && f(function (a) {
            a.innerHTML = "<input/>";
            a.firstChild.setAttribute("value", "");
            return "" === a.firstChild.getAttribute("value")
        }) || g("value", function (a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase())return a.defaultValue
        });
        f(function (a) {
            return null == a.getAttribute("disabled")
        }) || g("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            function (a, b, c) {
                var d;
                if (!c)return !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            });
        return b
    }(q);
    d.find = O;
    d.expr = O.selectors;
    d.expr[":"] = d.expr.pseudos;
    d.unique = O.uniqueSort;
    d.text = O.getText;
    d.isXMLDoc = O.isXML;
    d.contains = O.contains;
    var Eb = d.expr.match.needsContext, Fb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Zb = /^.[^:#\[\.,]*$/;
    d.filter = function (a, b, c) {
        var e = b[0];
        c && (a = ":not(" + a + ")");
        return 1 === b.length && 1 === e.nodeType ? d.find.matchesSelector(e, a) ? [e] : [] : d.find.matches(a, d.grep(b,
            function (a) {
                return 1 === a.nodeType
            }))
    };
    d.fn.extend({
        find: function (a) {
            var b, c = [], e = this, f = e.length;
            if ("string" !== typeof a)return this.pushStack(d(a).filter(function () {
                for (b = 0; b < f; b++)if (d.contains(e[b], this))return !0
            }));
            for (b = 0; b < f; b++)d.find(a, e[b], c);
            c = this.pushStack(1 < f ? d.unique(c) : c);
            c.selector = this.selector ? this.selector + " " + a : a;
            return c
        }, filter: function (a) {
            return this.pushStack(Ea(this, a || [], !1))
        }, not: function (a) {
            return this.pushStack(Ea(this, a || [], !0))
        }, is: function (a) {
            return !!Ea(this, "string" === typeof a && Eb.test(a) ? d(a) : a || [], !1).length
        }
    });
    var U, n = q.document, mc = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (d.fn.init = function (a, b) {
        var c, e;
        if (!a)return this;
        if ("string" === typeof a) {
            c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && 3 <= a.length ? [null, a, null] : mc.exec(a);
            if (!c || !c[1] && b)return !b || b.jquery ? (b || U).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof d ? b[0] : b, d.merge(this, d.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : n, !0)), Fb.test(c[1]) && d.isPlainObject(b))for (c in b)if (d.isFunction(this[c]))this[c](b[c]);
                else this.attr(c, b[c])
            } else {
                if ((e = n.getElementById(c[2])) && e.parentNode) {
                    if (e.id !== c[2])return U.find(a);
                    this.length = 1;
                    this[0] = e
                }
                this.context = n;
                this.selector = a
            }
            return this
        }
        if (a.nodeType)return this.context = this[0] = a, this.length = 1, this;
        if (d.isFunction(a))return "undefined" !== typeof U.ready ? U.ready(a) : a(d);
        void 0 !== a.selector && (this.selector = a.selector, this.context = a.context);
        return d.makeArray(a, this)
    }).prototype = d.fn;
    U = d(n);
    var nc = /^(?:parents|prev(?:Until|All))/, oc = {
        children: !0, contents: !0, next: !0,
        prev: !0
    };
    d.extend({
        dir: function (a, b, c) {
            var e = [];
            for (a = a[b]; a && 9 !== a.nodeType && (void 0 === c || 1 !== a.nodeType || !d(a).is(c));)1 === a.nodeType && e.push(a), a = a[b];
            return e
        }, sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    d.fn.extend({
        has: function (a) {
            var b, c = d(a, this), e = c.length;
            return this.filter(function () {
                for (b = 0; b < e; b++)if (d.contains(this, c[b]))return !0
            })
        }, closest: function (a, b) {
            for (var c, e = 0, f = this.length, g = [], h = Eb.test(a) || "string" !== typeof a ? d(a, b || this.context) :
                0; e < f; e++)for (c = this[e]; c && c !== b; c = c.parentNode)if (11 > c.nodeType && (h ? -1 < h.index(c) : 1 === c.nodeType && d.find.matchesSelector(c, a))) {
                g.push(c);
                break
            }
            return this.pushStack(1 < g.length ? d.unique(g) : g)
        }, index: function (a) {
            return a ? "string" === typeof a ? d.inArray(this[0], d(a)) : d.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (a, b) {
            return this.pushStack(d.unique(d.merge(this.get(), d(a, b))))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    d.each({
        parent: function (a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        }, parents: function (a) {
            return d.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return d.dir(a, "parentNode", c)
        }, next: function (a) {
            return Ya(a, "nextSibling")
        }, prev: function (a) {
            return Ya(a, "previousSibling")
        }, nextAll: function (a) {
            return d.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return d.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return d.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return d.dir(a, "previousSibling",
                c)
        }, siblings: function (a) {
            return d.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return d.sibling(a.firstChild)
        }, contents: function (a) {
            return d.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : d.merge([], a.childNodes)
        }
    }, function (a, b) {
        d.fn[a] = function (c, e) {
            var f = d.map(this, b, c);
            "Until" !== a.slice(-5) && (e = c);
            e && "string" === typeof e && (f = d.filter(e, f));
            1 < this.length && (oc[a] || (f = d.unique(f)), nc.test(a) && (f = f.reverse()));
            return this.pushStack(f)
        }
    });
    var K = /\S+/g, Za = {};
    d.Callbacks =
        function (a) {
            a = "string" === typeof a ? Za[a] || $b(a) : d.extend({}, a);
            var b, c, e, f, g, h, k = [], l = !a.once && [], r = function (d) {
                c = a.memory && d;
                e = !0;
                g = h || 0;
                h = 0;
                f = k.length;
                for (b = !0; k && g < f; g++)if (!1 === k[g].apply(d[0], d[1]) && a.stopOnFalse) {
                    c = !1;
                    break
                }
                b = !1;
                k && (l ? l.length && r(l.shift()) : c ? k = [] : t.disable())
            }, t = {
                add: function () {
                    if (k) {
                        var e = k.length;
                        (function x(b) {
                            d.each(b, function (b, c) {
                                var e = d.type(c);
                                "function" === e ? a.unique && t.has(c) || k.push(c) : c && c.length && "string" !== e && x(c)
                            })
                        })(arguments);
                        b ? f = k.length : c && (h = e, r(c))
                    }
                    return this
                },
                remove: function () {
                    k && d.each(arguments, function (a, c) {
                        for (var e; -1 < (e = d.inArray(c, k, e));)k.splice(e, 1), b && (e <= f && f--, e <= g && g--)
                    });
                    return this
                }, has: function (a) {
                    return a ? -1 < d.inArray(a, k) : !(!k || !k.length)
                }, empty: function () {
                    k = [];
                    f = 0;
                    return this
                }, disable: function () {
                    k = l = c = void 0;
                    return this
                }, disabled: function () {
                    return !k
                }, lock: function () {
                    l = void 0;
                    c || t.disable();
                    return this
                }, locked: function () {
                    return !l
                }, fireWith: function (a, c) {
                    !k || e && !l || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? l.push(c) : r(c));
                    return this
                }, fire: function () {
                    t.fireWith(this,
                        arguments);
                    return this
                }, fired: function () {
                    return !!e
                }
            };
            return t
        };
    d.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", d.Callbacks("once memory"), "resolved"], ["reject", "fail", d.Callbacks("once memory"), "rejected"], ["notify", "progress", d.Callbacks("memory")]], c = "pending", e = {
                state: function () {
                    return c
                }, always: function () {
                    f.done(arguments).fail(arguments);
                    return this
                }, then: function () {
                    var a = arguments;
                    return d.Deferred(function (c) {
                        d.each(b, function (b, l) {
                            var r = d.isFunction(a[b]) && a[b];
                            f[l[1]](function () {
                                var a =
                                    r && r.apply(this, arguments);
                                if (a && d.isFunction(a.promise))a.promise().done(c.resolve).fail(c.reject).progress(c.notify); else c[l[0] + "With"](this === e ? c.promise() : this, r ? [a] : arguments)
                            })
                        });
                        a = null
                    }).promise()
                }, promise: function (a) {
                    return null != a ? d.extend(a, e) : e
                }
            }, f = {};
            e.pipe = e.then;
            d.each(b, function (a, d) {
                var k = d[2], l = d[3];
                e[d[1]] = k.add;
                l && k.add(function () {
                    c = l
                }, b[a ^ 1][2].disable, b[2][2].lock);
                f[d[0]] = function () {
                    f[d[0] + "With"](this === f ? e : this, arguments);
                    return this
                };
                f[d[0] + "With"] = k.fireWith
            });
            e.promise(f);
            a && a.call(f, f);
            return f
        }, when: function (a) {
            var b = 0, c = N.call(arguments), e = c.length, f = 1 !== e || a && d.isFunction(a.promise) ? e : 0, g = 1 === f ? a : d.Deferred(), h = function (a, b, c) {
                return function (d) {
                    b[a] = this;
                    c[a] = 1 < arguments.length ? N.call(arguments) : d;
                    c === k ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            }, k, l, r;
            if (1 < e)for (k = Array(e), l = Array(e), r = Array(e); b < e; b++)c[b] && d.isFunction(c[b].promise) ? c[b].promise().done(h(b, r, c)).fail(g.reject).progress(h(b, l, k)) : --f;
            f || g.resolveWith(r, c);
            return g.promise()
        }
    });
    var xa;
    d.fn.ready =
        function (a) {
            d.ready.promise().done(a);
            return this
        };
    d.extend({
        isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? d.readyWait++ : d.ready(!0)
        }, ready: function (a) {
            if (!0 === a ? !--d.readyWait : !d.isReady) {
                if (!n.body)return setTimeout(d.ready);
                d.isReady = !0;
                !0 !== a && 0 < --d.readyWait || (xa.resolveWith(n, [d]), d.fn.triggerHandler && (d(n).triggerHandler("ready"), d(n).off("ready")))
            }
        }
    });
    d.ready.promise = function (a) {
        if (!xa)if (xa = d.Deferred(), "complete" === n.readyState)setTimeout(d.ready); else if (n.addEventListener)n.addEventListener("DOMContentLoaded",
            B, !1), q.addEventListener("load", B, !1); else {
            n.attachEvent("onreadystatechange", B);
            q.attachEvent("onload", B);
            var b = !1;
            try {
                b = null == q.frameElement && n.documentElement
            } catch (c) {
            }
            b && b.doScroll && function f() {
                if (!d.isReady) {
                    try {
                        b.doScroll("left")
                    } catch (a) {
                        return setTimeout(f, 50)
                    }
                    $a();
                    d.ready()
                }
            }()
        }
        return xa.promise(a)
    };
    for (var pc in d(p))break;
    p.ownLast = "0" !== pc;
    p.inlineBlockNeedsLayout = !1;
    d(function () {
        var a, b, c;
        (b = n.getElementsByTagName("body")[0]) && b.style && (a = n.createElement("div"), c = n.createElement("div"),
            c.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", b.appendChild(c).appendChild(a), "undefined" !== typeof a.style.zoom && (a.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", p.inlineBlockNeedsLayout = a = 3 === a.offsetWidth) && (b.style.zoom = 1), b.removeChild(c))
    });
    (function () {
        var a = n.createElement("div");
        if (null == p.deleteExpando) {
            p.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                p.deleteExpando = !1
            }
        }
    })();
    d.acceptData = function (a) {
        var b = d.noData[(a.nodeName +
        " ").toLowerCase()], c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || !0 !== b && a.getAttribute("classid") === b
    };
    var bc = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ac = /([A-Z])/g;
    d.extend({
        cache: {},
        noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (a) {
            a = a.nodeType ? d.cache[a[d.expando]] : a[d.expando];
            return !!a && !Fa(a)
        },
        data: function (a, b, c) {
            return bb(a, b, c)
        },
        removeData: function (a, b) {
            return cb(a, b)
        },
        _data: function (a, b, c) {
            return bb(a, b, c, !0)
        },
        _removeData: function (a, b) {
            return cb(a,
                b, !0)
        }
    });
    d.fn.extend({
        data: function (a, b) {
            var c, e, f, g = this[0], h = g && g.attributes;
            if (void 0 === a) {
                if (this.length && (f = d.data(g), 1 === g.nodeType && !d._data(g, "parsedAttrs"))) {
                    for (c = h.length; c--;)h[c] && (e = h[c].name, 0 === e.indexOf("data-") && (e = d.camelCase(e.slice(5)), ab(g, e, f[e])));
                    d._data(g, "parsedAttrs", !0)
                }
                return f
            }
            return "object" === typeof a ? this.each(function () {
                d.data(this, a)
            }) : 1 < arguments.length ? this.each(function () {
                d.data(this, a, b)
            }) : g ? ab(g, a, d.data(g, a)) : void 0
        }, removeData: function (a) {
            return this.each(function () {
                d.removeData(this,
                    a)
            })
        }
    });
    d.extend({
        queue: function (a, b, c) {
            var e;
            if (a)return b = (b || "fx") + "queue", e = d._data(a, b), c && (!e || d.isArray(c) ? e = d._data(a, b, d.makeArray(c)) : e.push(c)), e || []
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = d.queue(a, b), e = c.length, f = c.shift(), g = d._queueHooks(a, b), h = function () {
                d.dequeue(a, b)
            };
            "inprogress" === f && (f = c.shift(), e--);
            f && ("fx" === b && c.unshift("inprogress"), delete g.stop, f.call(a, h, g));
            !e && g && g.empty.fire()
        }, _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return d._data(a, c) || d._data(a, c, {
                    empty: d.Callbacks("once memory").add(function () {
                        d._removeData(a,
                            b + "queue");
                        d._removeData(a, c)
                    })
                })
        }
    });
    d.fn.extend({
        queue: function (a, b) {
            var c = 2;
            "string" !== typeof a && (b = a, a = "fx", c--);
            return arguments.length < c ? d.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = d.queue(this, a, b);
                d._queueHooks(this, a);
                "fx" === a && "inprogress" !== c[0] && d.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                d.dequeue(this, a)
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, b) {
            var c, e = 1, f = d.Deferred(), g = this, h = this.length, k = function () {
                --e ||
                f.resolveWith(g, [g])
            };
            "string" !== typeof a && (b = a, a = void 0);
            for (a = a || "fx"; h--;)(c = d._data(g[h], a + "queueHooks")) && c.empty && (e++, c.empty.add(k));
            k();
            return f.promise(b)
        }
    });
    var ya = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, M = ["Top", "Right", "Bottom", "Left"], ka = function (a, b) {
        a = b || a;
        return "none" === d.css(a, "display") || !d.contains(a.ownerDocument, a)
    }, $ = d.access = function (a, b, c, e, f, g, h) {
        var k = 0, l = a.length, r = null == c;
        if ("object" === d.type(c))for (k in f = !0, c)d.access(a, b, k, c[k], !0, g, h); else if (void 0 !== e && (f = !0,
            d.isFunction(e) || (h = !0), r && (h ? (b.call(a, e), b = null) : (r = b, b = function (a, b, c) {
                return r.call(d(a), c)
            })), b))for (; k < l; k++)b(a[k], c, h ? e : e.call(a[k], k, b(a[k], c)));
        return f ? a : r ? b.call(a) : l ? b(a[0], c) : g
    }, Ga = /^(?:checkbox|radio)$/i;
    (function () {
        var a = n.createElement("input"), b = n.createElement("div"), c = n.createDocumentFragment();
        b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        p.leadingWhitespace = 3 === b.firstChild.nodeType;
        p.tbody = !b.getElementsByTagName("tbody").length;
        p.htmlSerialize = !!b.getElementsByTagName("link").length;
        p.html5Clone = "<:nav></:nav>" !== n.createElement("nav").cloneNode(!0).outerHTML;
        a.type = "checkbox";
        a.checked = !0;
        c.appendChild(a);
        p.appendChecked = a.checked;
        b.innerHTML = "<textarea>x</textarea>";
        p.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
        c.appendChild(b);
        b.innerHTML = "<input type='radio' checked='checked' name='t'/>";
        p.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked;
        p.noCloneEvent = !0;
        b.attachEvent && (b.attachEvent("onclick", function () {
            p.noCloneEvent = !1
        }), b.cloneNode(!0).click());
        if (null == p.deleteExpando) {
            p.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                p.deleteExpando = !1
            }
        }
    })();
    (function () {
        var a, b, c = n.createElement("div");
        for (a in{
            submit: !0,
            change: !0,
            focusin: !0
        })b = "on" + a, (p[a + "Bubbles"] = b in q) || (c.setAttribute(b, "t"), p[a + "Bubbles"] = !1 === c.attributes[b].expando)
    })();
    var Pa = /^(?:input|select|textarea)$/i, qc = /^key/, rc = /^(?:mouse|pointer|contextmenu)|click/, Gb = /^(?:focusinfocus|focusoutblur)$/, Hb = /^([^.]*)(?:\.(.+)|)$/;
    d.event = {
        global: {},
        add: function (a,
                       b, c, e, f) {
            var g, h, k, l, r, p, m, n, q;
            if (k = d._data(a)) {
                c.handler && (l = c, c = l.handler, f = l.selector);
                c.guid || (c.guid = d.guid++);
                (h = k.events) || (h = k.events = {});
                (r = k.handle) || (r = k.handle = function (a) {
                    return "undefined" === typeof d || a && d.event.triggered === a.type ? void 0 : d.event.dispatch.apply(r.elem, arguments)
                }, r.elem = a);
                b = (b || "").match(K) || [""];
                for (k = b.length; k--;)g = Hb.exec(b[k]) || [], n = p = g[1], q = (g[2] || "").split(".").sort(), n && (g = d.event.special[n] || {}, n = (f ? g.delegateType : g.bindType) || n, g = d.event.special[n] || {}, p = d.extend({
                    type: n,
                    origType: p,
                    data: e,
                    handler: c,
                    guid: c.guid,
                    selector: f,
                    needsContext: f && d.expr.match.needsContext.test(f),
                    namespace: q.join(".")
                }, l), (m = h[n]) || (m = h[n] = [], m.delegateCount = 0, g.setup && !1 !== g.setup.call(a, e, q, r) || (a.addEventListener ? a.addEventListener(n, r, !1) : a.attachEvent && a.attachEvent("on" + n, r))), g.add && (g.add.call(a, p), p.handler.guid || (p.handler.guid = c.guid)), f ? m.splice(m.delegateCount++, 0, p) : m.push(p), d.event.global[n] = !0);
                a = null
            }
        },
        remove: function (a, b, c, e, f) {
            var g, h, k, l, r, n, m, p, q, w, F, z = d.hasData(a) && d._data(a);
            if (z && (n = z.events)) {
                b = (b || "").match(K) || [""];
                for (r = b.length; r--;)if (k = Hb.exec(b[r]) || [], q = F = k[1], w = (k[2] || "").split(".").sort(), q) {
                    m = d.event.special[q] || {};
                    q = (e ? m.delegateType : m.bindType) || q;
                    p = n[q] || [];
                    k = k[2] && new RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)");
                    for (l = g = p.length; g--;)h = p[g], !f && F !== h.origType || c && c.guid !== h.guid || k && !k.test(h.namespace) || e && e !== h.selector && ("**" !== e || !h.selector) || (p.splice(g, 1), h.selector && p.delegateCount--, m.remove && m.remove.call(a, h));
                    l && !p.length && (m.teardown &&
                    !1 !== m.teardown.call(a, w, z.handle) || d.removeEvent(a, q, z.handle), delete n[q])
                } else for (q in n)d.event.remove(a, q + b[r], c, e, !0);
                d.isEmptyObject(n) && (delete z.handle, d._removeData(a, "events"))
            }
        },
        trigger: function (a, b, c, e) {
            var f, g, h, k, l, r, p = [c || n], m = S.call(a, "type") ? a.type : a;
            l = S.call(a, "namespace") ? a.namespace.split(".") : [];
            h = f = c = c || n;
            if (3 !== c.nodeType && 8 !== c.nodeType && !Gb.test(m + d.event.triggered) && (0 <= m.indexOf(".") && (l = m.split("."), m = l.shift(), l.sort()), g = 0 > m.indexOf(":") && "on" + m, a = a[d.expando] ? a : new d.Event(m,
                    "object" === typeof a && a), a.isTrigger = e ? 2 : 3, a.namespace = l.join("."), a.namespace_re = a.namespace ? new RegExp("(^|\\.)" + l.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a.result = void 0, a.target || (a.target = c), b = null == b ? [a] : d.makeArray(b, [a]), l = d.event.special[m] || {}, e || !l.trigger || !1 !== l.trigger.apply(c, b))) {
                if (!e && !l.noBubble && !d.isWindow(c)) {
                    k = l.delegateType || m;
                    Gb.test(k + m) || (h = h.parentNode);
                    for (; h; h = h.parentNode)p.push(h), f = h;
                    f === (c.ownerDocument || n) && p.push(f.defaultView || f.parentWindow || q)
                }
                for (r = 0; (h = p[r++]) && !a.isPropagationStopped();)a.type = 1 < r ? k : l.bindType || m, (f = (d._data(h, "events") || {})[a.type] && d._data(h, "handle")) && f.apply(h, b), (f = g && h[g]) && f.apply && d.acceptData(h) && (a.result = f.apply(h, b), !1 === a.result && a.preventDefault());
                a.type = m;
                if (!(e || a.isDefaultPrevented() || l._default && !1 !== l._default.apply(p.pop(), b)) && d.acceptData(c) && g && c[m] && !d.isWindow(c)) {
                    (f = c[g]) && (c[g] = null);
                    d.event.triggered = m;
                    try {
                        c[m]()
                    } catch (y) {
                    }
                    d.event.triggered = void 0;
                    f && (c[g] = f)
                }
                return a.result
            }
        },
        dispatch: function (a) {
            a = d.event.fix(a);
            var b, c, e, f, g = [], h = N.call(arguments);
            b = (d._data(this, "events") || {})[a.type] || [];
            var k = d.event.special[a.type] || {};
            h[0] = a;
            a.delegateTarget = this;
            if (!k.preDispatch || !1 !== k.preDispatch.call(this, a)) {
                g = d.event.handlers.call(this, a, b);
                for (b = 0; (e = g[b++]) && !a.isPropagationStopped();)for (a.currentTarget = e.elem, f = 0; (c = e.handlers[f++]) && !a.isImmediatePropagationStopped();)if (!a.namespace_re || a.namespace_re.test(c.namespace))a.handleObj = c, a.data = c.data, c = ((d.event.special[c.origType] || {}).handle || c.handler).apply(e.elem,
                    h), void 0 !== c && !1 === (a.result = c) && (a.preventDefault(), a.stopPropagation());
                k.postDispatch && k.postDispatch.call(this, a);
                return a.result
            }
        },
        handlers: function (a, b) {
            var c, e, f, g, h = [], k = b.delegateCount, l = a.target;
            if (k && l.nodeType && (!a.button || "click" !== a.type))for (; l != this; l = l.parentNode || this)if (1 === l.nodeType && (!0 !== l.disabled || "click" !== a.type)) {
                f = [];
                for (g = 0; g < k; g++)e = b[g], c = e.selector + " ", void 0 === f[c] && (f[c] = e.needsContext ? 0 <= d(c, this).index(l) : d.find(c, this, null, [l]).length), f[c] && f.push(e);
                f.length &&
                h.push({elem: l, handlers: f})
            }
            k < b.length && h.push({elem: this, handlers: b.slice(k)});
            return h
        },
        fix: function (a) {
            if (a[d.expando])return a;
            var b, c, e;
            b = a.type;
            var f = a, g = this.fixHooks[b];
            g || (this.fixHooks[b] = g = rc.test(b) ? this.mouseHooks : qc.test(b) ? this.keyHooks : {});
            e = g.props ? this.props.concat(g.props) : this.props;
            a = new d.Event(f);
            for (b = e.length; b--;)c = e[b], a[c] = f[c];
            a.target || (a.target = f.srcElement || n);
            3 === a.target.nodeType && (a.target = a.target.parentNode);
            a.metaKey = !!a.metaKey;
            return g.filter ? g.filter(a, f) :
                a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"], filter: function (a, b) {
                null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode);
                return a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, d, f = b.button, g = b.fromElement;
                null == a.pageX && null !=
                b.clientX && (c = a.target.ownerDocument || n, d = c.documentElement, c = c.body, a.pageX = b.clientX + (d && d.scrollLeft || c && c.scrollLeft || 0) - (d && d.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || c && c.scrollTop || 0) - (d && d.clientTop || c && c.clientTop || 0));
                !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g);
                a.which || void 0 === f || (a.which = f & 1 ? 1 : f & 2 ? 3 : f & 4 ? 2 : 0);
                return a
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== db() && this.focus)try {
                        return this.focus(), !1
                    } catch (a) {
                    }
                },
                delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === db() && this.blur)return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if (d.nodeName(this, "input") && "checkbox" === this.type && this.click)return this.click(), !1
                }, _default: function (a) {
                    return d.nodeName(a.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, e) {
            a = d.extend(new d.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
            e ? d.event.trigger(a, null, b) : d.event.dispatch.call(b, a);
            a.isDefaultPrevented() && c.preventDefault()
        }
    };
    d.removeEvent = n.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        b = "on" + b;
        a.detachEvent && ("undefined" === typeof a[b] && (a[b] = null), a.detachEvent(b, c))
    };
    d.Event = function (a, b) {
        if (!(this instanceof d.Event))return new d.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented &&
        !1 === a.returnValue ? na : W) : this.type = a;
        b && d.extend(this, b);
        this.timeStamp = a && a.timeStamp || d.now();
        this[d.expando] = !0
    };
    d.Event.prototype = {
        isDefaultPrevented: W, isPropagationStopped: W, isImmediatePropagationStopped: W, preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = na;
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        }, stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = na;
            a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        }, stopImmediatePropagation: function () {
            var a =
                this.originalEvent;
            this.isImmediatePropagationStopped = na;
            a && a.stopImmediatePropagation && a.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    d.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        d.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var e, f = a.relatedTarget, g = a.handleObj;
                if (!f || f !== this && !d.contains(this, f))a.type = g.origType, e = g.handler.apply(this, arguments), a.type = b;
                return e
            }
        }
    });
    p.submitBubbles || (d.event.special.submit =
    {
        setup: function () {
            if (d.nodeName(this, "form"))return !1;
            d.event.add(this, "click._submit keypress._submit", function (a) {
                a = a.target;
                (a = d.nodeName(a, "input") || d.nodeName(a, "button") ? a.form : void 0) && !d._data(a, "submitBubbles") && (d.event.add(a, "submit._submit", function (a) {
                    a._submit_bubble = !0
                }), d._data(a, "submitBubbles", !0))
            })
        }, postDispatch: function (a) {
        a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && d.event.simulate("submit", this.parentNode, a, !0))
    }, teardown: function () {
        if (d.nodeName(this,
                "form"))return !1;
        d.event.remove(this, "._submit")
    }
    });
    p.changeBubbles || (d.event.special.change = {
        setup: function () {
            if (Pa.test(this.nodeName)) {
                if ("checkbox" === this.type || "radio" === this.type)d.event.add(this, "propertychange._change", function (a) {
                    "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
                }), d.event.add(this, "click._change", function (a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1);
                    d.event.simulate("change", this, a, !0)
                });
                return !1
            }
            d.event.add(this, "beforeactivate._change", function (a) {
                a =
                    a.target;
                Pa.test(a.nodeName) && !d._data(a, "changeBubbles") && (d.event.add(a, "change._change", function (a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || d.event.simulate("change", this.parentNode, a, !0)
                }), d._data(a, "changeBubbles", !0))
            })
        }, handle: function (a) {
            var b = a.target;
            if (this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type)return a.handleObj.handler.apply(this, arguments)
        }, teardown: function () {
            d.event.remove(this, "._change");
            return !Pa.test(this.nodeName)
        }
    });
    p.focusinBubbles || d.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        var c = function (a) {
            d.event.simulate(b, a.target, d.event.fix(a), !0)
        };
        d.event.special[b] = {
            setup: function () {
                var e = this.ownerDocument || this, f = d._data(e, b);
                f || e.addEventListener(a, c, !0);
                d._data(e, b, (f || 0) + 1)
            }, teardown: function () {
                var e = this.ownerDocument || this, f = d._data(e, b) - 1;
                f ? d._data(e, b, f) : (e.removeEventListener(a, c, !0), d._removeData(e, b))
            }
        }
    });
    d.fn.extend({
        on: function (a, b, c, e, f) {
            var g, h;
            if ("object" === typeof a) {
                "string" !== typeof b && (c = c || b, b = void 0);
                for (g in a)this.on(g,
                    b, c, a[g], f);
                return this
            }
            null == c && null == e ? (e = b, c = b = void 0) : null == e && ("string" === typeof b ? (e = c, c = void 0) : (e = c, c = b, b = void 0));
            if (!1 === e)e = W; else if (!e)return this;
            1 === f && (h = e, e = function (a) {
                d().off(a);
                return h.apply(this, arguments)
            }, e.guid = h.guid || (h.guid = d.guid++));
            return this.each(function () {
                d.event.add(this, a, e, c, b)
            })
        }, one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function (a, b, c) {
            var e;
            if (a && a.preventDefault && a.handleObj)return e = a.handleObj, d(a.delegateTarget).off(e.namespace ? e.origType + "." +
            e.namespace : e.origType, e.selector, e.handler), this;
            if ("object" === typeof a) {
                for (e in a)this.off(e, b, a[e]);
                return this
            }
            if (!1 === b || "function" === typeof b)c = b, b = void 0;
            !1 === c && (c = W);
            return this.each(function () {
                d.event.remove(this, a, c, b)
            })
        }, trigger: function (a, b) {
            return this.each(function () {
                d.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            var c = this[0];
            if (c)return d.event.trigger(a, b, c, !0)
        }
    });
    var fb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        sc = / jQuery\d+="(?:null|\d+)"/g, Ib = new RegExp("<(?:" + fb + ")[\\s/>]", "i"), Qa = /^\s+/, Jb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Kb = /<([\w:]+)/, Lb = /<tbody/i, tc = /<|&#?\w+;/, uc = /<(?:script|style|link)/i, vc = /checked\s*(?:[^=]|=\s*.checked.)/i, Mb = /^$|\/(?:java|ecma)script/i, dc = /^true\/(.*)/, wc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, I = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>",
                "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: p.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, Ra = eb(n).appendChild(n.createElement("div"));
    I.optgroup = I.option;
    I.tbody = I.tfoot = I.colgroup = I.caption = I.thead;
    I.th = I.td;
    d.extend({
        clone: function (a, b, c) {
            var e, f, g, h, k, l = d.contains(a.ownerDocument, a);
            p.html5Clone || d.isXMLDoc(a) || !Ib.test("<" +
            a.nodeName + ">") ? g = a.cloneNode(!0) : (Ra.innerHTML = a.outerHTML, Ra.removeChild(g = Ra.firstChild));
            if (!(p.noCloneEvent && p.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || d.isXMLDoc(a)))for (e = w(g), k = w(a), h = 0; null != (f = k[h]); ++h)if (e[h]) {
                var r = e[h], n = void 0, m = void 0, q = void 0;
                if (1 === r.nodeType) {
                    n = r.nodeName.toLowerCase();
                    if (!p.noCloneEvent && r[d.expando]) {
                        q = d._data(r);
                        for (m in q.events)d.removeEvent(r, m, q.handle);
                        r.removeAttribute(d.expando)
                    }
                    if ("script" === n && r.text !== f.text)hb(r).text = f.text, ib(r); else if ("object" ===
                        n)r.parentNode && (r.outerHTML = f.outerHTML), p.html5Clone && f.innerHTML && !d.trim(r.innerHTML) && (r.innerHTML = f.innerHTML); else if ("input" === n && Ga.test(f.type))r.defaultChecked = r.checked = f.checked, r.value !== f.value && (r.value = f.value); else if ("option" === n)r.defaultSelected = r.selected = f.defaultSelected; else if ("input" === n || "textarea" === n)r.defaultValue = f.defaultValue
                }
            }
            if (b)if (c)for (k = k || w(a), e = e || w(g), h = 0; null != (f = k[h]); h++)jb(f, e[h]); else jb(a, g);
            e = w(g, "script");
            0 < e.length && Ha(e, !l && w(a, "script"));
            return g
        },
        buildFragment: function (a, b, c, e) {
            for (var f, g, h, k, l, r, n = a.length, m = eb(b), q = [], x = 0; x < n; x++)if ((g = a[x]) || 0 === g)if ("object" === d.type(g))d.merge(q, g.nodeType ? [g] : g); else if (tc.test(g)) {
                h = h || m.appendChild(b.createElement("div"));
                k = (Kb.exec(g) || ["", ""])[1].toLowerCase();
                r = I[k] || I._default;
                h.innerHTML = r[1] + g.replace(Jb, "<$1></$2>") + r[2];
                for (f = r[0]; f--;)h = h.lastChild;
                !p.leadingWhitespace && Qa.test(g) && q.push(b.createTextNode(Qa.exec(g)[0]));
                if (!p.tbody)for (f = (g = "table" !== k || Lb.test(g) ? "<table>" !== r[1] || Lb.test(g) ?
                    0 : h : h.firstChild) && g.childNodes.length; f--;)d.nodeName(l = g.childNodes[f], "tbody") && !l.childNodes.length && g.removeChild(l);
                d.merge(q, h.childNodes);
                for (h.textContent = ""; h.firstChild;)h.removeChild(h.firstChild);
                h = m.lastChild
            } else q.push(b.createTextNode(g));
            h && m.removeChild(h);
            p.appendChecked || d.grep(w(q, "input"), cc);
            for (x = 0; g = q[x++];)if (!e || -1 === d.inArray(g, e))if (a = d.contains(g.ownerDocument, g), h = w(m.appendChild(g), "script"), a && Ha(h), c)for (f = 0; g = h[f++];)Mb.test(g.type || "") && c.push(g);
            return m
        }, cleanData: function (a,
                                b) {
            for (var c, e, f, g, h = 0, k = d.expando, l = d.cache, r = p.deleteExpando, n = d.event.special; null != (c = a[h]); h++)if (b || d.acceptData(c))if (g = (f = c[k]) && l[f]) {
                if (g.events)for (e in g.events)n[e] ? d.event.remove(c, e) : d.removeEvent(c, e, g.handle);
                l[f] && (delete l[f], r ? delete c[k] : "undefined" !== typeof c.removeAttribute ? c.removeAttribute(k) : c[k] = null, R.push(f))
            }
        }
    });
    d.fn.extend({
        text: function (a) {
            return $(this, function (a) {
                    return void 0 === a ? d.text(this) : this.empty().append((this[0] && this[0].ownerDocument || n).createTextNode(a))
                },
                null, a, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (a) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || gb(this, a).appendChild(a)
            })
        }, prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = gb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        }, after: function () {
            return this.domManip(arguments,
                function (a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
        }, remove: function (a, b) {
            for (var c, e = a ? d.filter(a, this) : this, f = 0; null != (c = e[f]); f++)b || 1 !== c.nodeType || d.cleanData(w(c)), c.parentNode && (b && d.contains(c.ownerDocument, c) && Ha(w(c, "script")), c.parentNode.removeChild(c));
            return this
        }, empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && d.cleanData(w(a, !1)); a.firstChild;)a.removeChild(a.firstChild);
                a.options && d.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function (a, b) {
            a = null == a ? !1 : a;
            b = null == b ? a : b;
            return this.map(function () {
                return d.clone(this, a, b)
            })
        }, html: function (a) {
            return $(this, function (a) {
                var c = this[0] || {}, e = 0, f = this.length;
                if (void 0 === a)return 1 === c.nodeType ? c.innerHTML.replace(sc, "") : void 0;
                if (!("string" !== typeof a || uc.test(a) || !p.htmlSerialize && Ib.test(a) || !p.leadingWhitespace && Qa.test(a) || I[(Kb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(Jb, "<$1></$2>");
                    try {
                        for (; e < f; e++)c = this[e] || {}, 1 === c.nodeType && (d.cleanData(w(c, !1)), c.innerHTML =
                            a);
                        c = 0
                    } catch (g) {
                    }
                }
                c && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function () {
            var a = arguments[0];
            this.domManip(arguments, function (b) {
                a = this.parentNode;
                d.cleanData(w(this));
                a && a.replaceChild(b, this)
            });
            return a && (a.length || a.nodeType) ? this : this.remove()
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, b) {
            a = Ab.apply([], a);
            var c, e, f, g, h = 0, k = this.length, l = this, r = k - 1, n = a[0], m = d.isFunction(n);
            if (m || 1 < k && "string" === typeof n && !p.checkClone && vc.test(n))return this.each(function (c) {
                var d =
                    l.eq(c);
                m && (a[0] = n.call(this, c, d.html()));
                d.domManip(a, b)
            });
            if (k && (g = d.buildFragment(a, this[0].ownerDocument, !1, this), c = g.firstChild, 1 === g.childNodes.length && (g = c), c)) {
                f = d.map(w(g, "script"), hb);
                for (e = f.length; h < k; h++)c = g, h !== r && (c = d.clone(c, !0, !0), e && d.merge(f, w(c, "script"))), b.call(this[h], c, h);
                if (e)for (g = f[f.length - 1].ownerDocument, d.map(f, ib), h = 0; h < e; h++)c = f[h], Mb.test(c.type || "") && !d._data(c, "globalEval") && d.contains(g, c) && (c.src ? d._evalUrl && d._evalUrl(c.src) : d.globalEval((c.text || c.textContent ||
                c.innerHTML || "").replace(wc, "")));
                g = c = null
            }
            return this
        }
    });
    d.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        d.fn[a] = function (a) {
            for (var e = 0, f = [], g = d(a), h = g.length - 1; e <= h; e++)a = e === h ? this : this.clone(!0), d(g[e])[b](a), La.apply(f, a.get());
            return this.pushStack(f)
        }
    });
    var ja, lb = {};
    (function () {
        var a;
        p.shrinkWrapBlocks = function () {
            if (null != a)return a;
            a = !1;
            var b, c, d;
            if ((c = n.getElementsByTagName("body")[0]) && c.style)return b = n.createElement("div"),
                d = n.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), "undefined" !== typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(n.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a
        }
    })();
    var Nb = /^margin/, pa = new RegExp("^(" + ya + ")(?!px)[a-z%]+$", "i"), X, Y,
        xc = /^(top|right|bottom|left)$/;
    q.getComputedStyle ? (X = function (a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    }, Y = function (a, b, c) {
        var e, f, g = a.style;
        f = (c = c || X(a)) ? c.getPropertyValue(b) || c[b] : void 0;
        c && ("" !== f || d.contains(a.ownerDocument, a) || (f = d.style(a, b)), pa.test(f) && Nb.test(b) && (a = g.width, b = g.minWidth, e = g.maxWidth, g.minWidth = g.maxWidth = g.width = f, f = c.width, g.width = a, g.minWidth = b, g.maxWidth = e));
        return void 0 === f ? f : f + ""
    }) : n.documentElement.currentStyle && (X = function (a) {
        return a.currentStyle
    },
        Y = function (a, b, c) {
            var d, f, g, h = a.style;
            g = (c = c || X(a)) ? c[b] : void 0;
            null == g && h && h[b] && (g = h[b]);
            if (pa.test(g) && !xc.test(b)) {
                c = h.left;
                if (f = (d = a.runtimeStyle) && d.left)d.left = a.currentStyle.left;
                h.left = "fontSize" === b ? "1em" : g;
                g = h.pixelLeft + "px";
                h.left = c;
                f && (d.left = f)
            }
            return void 0 === g ? g : g + "" || "auto"
        });
    (function () {
        function a() {
            var a, b, c, d;
            if ((b = n.getElementsByTagName("body")[0]) && b.style) {
                a = n.createElement("div");
                c = n.createElement("div");
                c.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
                b.appendChild(c).appendChild(a);
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute";
                e = f = !1;
                h = !0;
                q.getComputedStyle && (e = "1%" !== (q.getComputedStyle(a, null) || {}).top, f = "4px" === (q.getComputedStyle(a, null) || {width: "4px"}).width, d = a.appendChild(n.createElement("div")), d.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                    d.style.marginRight = d.style.width = "0", a.style.width = "1px", h = !parseFloat((q.getComputedStyle(d, null) || {}).marginRight));
                a.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
                d = a.getElementsByTagName("td");
                d[0].style.cssText = "margin:0;border:0;padding:0;display:none";
                if (g = 0 === d[0].offsetHeight)d[0].style.display = "", d[1].style.display = "none", g = 0 === d[0].offsetHeight;
                b.removeChild(c)
            }
        }

        var b, c, e, f, g, h;
        b = n.createElement("div");
        b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        if (c = (c = b.getElementsByTagName("a")[0]) && c.style)c.cssText = "float:left;opacity:.5", p.opacity = "0.5" === c.opacity, p.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === b.style.backgroundClip, p.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, d.extend(p, {
            reliableHiddenOffsets: function () {
                null == g && a();
                return g
            }, boxSizingReliable: function () {
                null == f && a();
                return f
            }, pixelPosition: function () {
                null == e && a();
                return e
            }, reliableMarginRight: function () {
                null == h && a();
                return h
            }
        })
    })();
    d.swap = function (a, b, c, d) {
        var f, g = {};
        for (f in b)g[f] = a.style[f], a.style[f] = b[f];
        c = c.apply(a, d || []);
        for (f in b)a.style[f] = g[f];
        return c
    };
    var Sa = /alpha\([^)]*\)/i, yc = /opacity\s*=\s*([^)]*)/, zc = /^(none|table(?!-c[ea]).+)/, ec = new RegExp("^(" + ya + ")(.*)$", "i"), Ac = new RegExp("^([+-])=(" + ya + ")", "i"), Bc = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Ob = {letterSpacing: "0", fontWeight: "400"}, ob = ["Webkit", "O", "Moz", "ms"];
    d.extend({
        cssHooks: {
            opacity: {
                get: function (a,
                               b) {
                    if (b) {
                        var c = Y(a, "opacity");
                        return "" === c ? "1" : c
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
        cssProps: {"float": p.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (a, b, c, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h, k = d.camelCase(b), l = a.style;
                b = d.cssProps[k] || (d.cssProps[k] = nb(l, k));
                h = d.cssHooks[b] || d.cssHooks[k];
                if (void 0 !== c) {
                    if (g = typeof c, "string" === g && (f = Ac.exec(c)) &&
                        (c = (f[1] + 1) * f[2] + parseFloat(d.css(a, b)), g = "number"), null != c && c === c && ("number" !== g || d.cssNumber[k] || (c += "px"), p.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (l[b] = "inherit"), !(h && "set"in h) || void 0 !== (c = h.set(a, c, e))))try {
                        l[b] = c
                    } catch (n) {
                    }
                } else return h && "get"in h && void 0 !== (f = h.get(a, !1, e)) ? f : l[b]
            }
        },
        css: function (a, b, c, e) {
            var f, g;
            g = d.camelCase(b);
            b = d.cssProps[g] || (d.cssProps[g] = nb(a.style, g));
            (g = d.cssHooks[b] || d.cssHooks[g]) && "get"in g && (f = g.get(a, !0, c));
            void 0 === f && (f = Y(a, b, e));
            "normal" ===
            f && b in Ob && (f = Ob[b]);
            return "" === c || c ? (a = parseFloat(f), !0 === c || d.isNumeric(a) ? a || 0 : f) : f
        }
    });
    d.each(["height", "width"], function (a, b) {
        d.cssHooks[b] = {
            get: function (a, e, f) {
                if (e)return zc.test(d.css(a, "display")) && 0 === a.offsetWidth ? d.swap(a, Bc, function () {
                    return sb(a, b, f)
                }) : sb(a, b, f)
            }, set: function (a, e, f) {
                var g = f && X(a);
                return qb(a, e, f ? rb(a, b, f, p.boxSizing && "border-box" === d.css(a, "boxSizing", !1, g), g) : 0)
            }
        }
    });
    p.opacity || (d.cssHooks.opacity = {
        get: function (a, b) {
            return yc.test((b && a.currentStyle ? a.currentStyle.filter :
                a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        }, set: function (a, b) {
            var c = a.style, e = a.currentStyle, f = d.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", g = e && e.filter || c.filter || "";
            c.zoom = 1;
            if ((1 <= b || "" === b) && "" === d.trim(g.replace(Sa, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || e && !e.filter))return;
            c.filter = Sa.test(g) ? g.replace(Sa, f) : g + " " + f
        }
    });
    d.cssHooks.marginRight = mb(p.reliableMarginRight, function (a, b) {
        if (b)return d.swap(a, {display: "inline-block"}, Y, [a, "marginRight"])
    });
    d.each({
        margin: "",
        padding: "", border: "Width"
    }, function (a, b) {
        d.cssHooks[a + b] = {
            expand: function (c) {
                var d = 0, f = {};
                for (c = "string" === typeof c ? c.split(" ") : [c]; 4 > d; d++)f[a + M[d] + b] = c[d] || c[d - 2] || c[0];
                return f
            }
        };
        Nb.test(a) || (d.cssHooks[a + b].set = qb)
    });
    d.fn.extend({
        css: function (a, b) {
            return $(this, function (a, b, f) {
                var g, h = {}, k = 0;
                if (d.isArray(b)) {
                    f = X(a);
                    for (g = b.length; k < g; k++)h[b[k]] = d.css(a, b[k], !1, f);
                    return h
                }
                return void 0 !== f ? d.style(a, b, f) : d.css(a, b)
            }, a, b, 1 < arguments.length)
        }, show: function () {
            return pb(this, !0)
        }, hide: function () {
            return pb(this)
        },
        toggle: function (a) {
            return "boolean" === typeof a ? a ? this.show() : this.hide() : this.each(function () {
                ka(this) ? d(this).show() : d(this).hide()
            })
        }
    });
    d.Tween = F;
    F.prototype = {
        constructor: F, init: function (a, b, c, e, f, g) {
            this.elem = a;
            this.prop = c;
            this.easing = f || "swing";
            this.options = b;
            this.start = this.now = this.cur();
            this.end = e;
            this.unit = g || (d.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var a = F.propHooks[this.prop];
            return a && a.get ? a.get(this) : F.propHooks._default.get(this)
        }, run: function (a) {
            var b, c = F.propHooks[this.prop];
            this.pos =
                this.options.duration ? b = d.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : b = a;
            this.now = (this.end - this.start) * b + this.start;
            this.options.step && this.options.step.call(this.elem, this.now, this);
            c && c.set ? c.set(this) : F.propHooks._default.set(this);
            return this
        }
    };
    F.prototype.init.prototype = F.prototype;
    F.propHooks = {
        _default: {
            get: function (a) {
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (a = d.css(a.elem, a.prop, "")) && "auto" !== a ? a : 0 : a.elem[a.prop]
            }, set: function (a) {
                if (d.fx.step[a.prop])d.fx.step[a.prop](a);
                else a.elem.style && (null != a.elem.style[d.cssProps[a.prop]] || d.cssHooks[a.prop]) ? d.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    };
    F.propHooks.scrollTop = F.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    };
    d.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    };
    d.fx = F.prototype.init;
    d.fx.step = {};
    var Z, za, Cc = /^(?:toggle|show|hide)$/, Pb = new RegExp("^(?:([+-])=|)(" + ya + ")([a-z%]*)$", "i"), Dc = /queueHooks$/, qa = [function (a,
                                                                                                                                               b, c) {
        var e, f, g, h, k, l, n = this, q = {}, m = a.style, y = a.nodeType && ka(a), x = d._data(a, "fxshow");
        c.queue || (h = d._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, k = h.empty.fire, h.empty.fire = function () {
            h.unqueued || k()
        }), h.unqueued++, n.always(function () {
            n.always(function () {
                h.unqueued--;
                d.queue(a, "fx").length || h.empty.fire()
            })
        }));
        1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [m.overflow, m.overflowX, m.overflowY], l = d.css(a, "display"), f = "none" === l ? d._data(a, "olddisplay") || oa(a.nodeName) : l, "inline" === f &&
        "none" === d.css(a, "float") && (p.inlineBlockNeedsLayout && "inline" !== oa(a.nodeName) ? m.zoom = 1 : m.display = "inline-block"));
        c.overflow && (m.overflow = "hidden", p.shrinkWrapBlocks() || n.always(function () {
            m.overflow = c.overflow[0];
            m.overflowX = c.overflow[1];
            m.overflowY = c.overflow[2]
        }));
        for (e in b)if (f = b[e], Cc.exec(f)) {
            delete b[e];
            g = g || "toggle" === f;
            if (f === (y ? "hide" : "show"))if ("show" === f && x && void 0 !== x[e])y = !0; else continue;
            q[e] = x && x[e] || d.style(a, e)
        } else l = void 0;
        if (d.isEmptyObject(q))"inline" === ("none" === l ? oa(a.nodeName) :
            l) && (m.display = l); else for (e in x ? "hidden"in x && (y = x.hidden) : x = d._data(a, "fxshow", {}), g && (x.hidden = !y), y ? d(a).show() : n.done(function () {
            d(a).hide()
        }), n.done(function () {
            var b;
            d._removeData(a, "fxshow");
            for (b in q)d.style(a, b, q[b])
        }), q)b = ub(y ? x[e] : 0, e, n), e in x || (x[e] = b.start, y && (b.end = b.start, b.start = "width" === e || "height" === e ? 1 : 0))
    }], la = {
        "*": [function (a, b) {
            var c = this.createTween(a, b), e = c.cur(), f = Pb.exec(b), g = f && f[3] || (d.cssNumber[a] ? "" : "px"), h = (d.cssNumber[a] || "px" !== g && +e) && Pb.exec(d.css(c.elem, a)),
                k = 1, l = 20;
            if (h && h[3] !== g) {
                g = g || h[3];
                f = f || [];
                h = +e || 1;
                do k = k || ".5", h /= k, d.style(c.elem, a, h + g); while (k !== (k = c.cur() / e) && 1 !== k && --l)
            }
            f && (h = c.start = +h || +e || 0, c.unit = g, c.end = f[1] ? h + (f[1] + 1) * f[2] : +f[2]);
            return c
        }]
    };
    d.Animation = d.extend(vb, {
        tweener: function (a, b) {
            d.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, e = 0, f = a.length; e < f; e++)c = a[e], la[c] = la[c] || [], la[c].unshift(b)
        }, prefilter: function (a, b) {
            b ? qa.unshift(a) : qa.push(a)
        }
    });
    d.speed = function (a, b, c) {
        var e = a && "object" === typeof a ? d.extend({}, a) : {
            complete: c ||
            !c && b || d.isFunction(a) && a, duration: a, easing: c && b || b && !d.isFunction(b) && b
        };
        e.duration = d.fx.off ? 0 : "number" === typeof e.duration ? e.duration : e.duration in d.fx.speeds ? d.fx.speeds[e.duration] : d.fx.speeds._default;
        if (null == e.queue || !0 === e.queue)e.queue = "fx";
        e.old = e.complete;
        e.complete = function () {
            d.isFunction(e.old) && e.old.call(this);
            e.queue && d.dequeue(this, e.queue)
        };
        return e
    };
    d.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(ka).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a,
                              b, c, e) {
            var f = d.isEmptyObject(a), g = d.speed(b, c, e);
            b = function () {
                var b = vb(this, d.extend({}, a), g);
                (f || d._data(this, "finish")) && b.stop(!0)
            };
            b.finish = b;
            return f || !1 === g.queue ? this.each(b) : this.queue(g.queue, b)
        }, stop: function (a, b, c) {
            var e = function (a) {
                var b = a.stop;
                delete a.stop;
                b(c)
            };
            "string" !== typeof a && (c = b, b = a, a = void 0);
            b && !1 !== a && this.queue(a || "fx", []);
            return this.each(function () {
                var b = !0, g = null != a && a + "queueHooks", h = d.timers, k = d._data(this);
                if (g)k[g] && k[g].stop && e(k[g]); else for (g in k)k[g] && k[g].stop &&
                Dc.test(g) && e(k[g]);
                for (g = h.length; g--;)h[g].elem !== this || null != a && h[g].queue !== a || (h[g].anim.stop(c), b = !1, h.splice(g, 1));
                !b && c || d.dequeue(this, a)
            })
        }, finish: function (a) {
            !1 !== a && (a = a || "fx");
            return this.each(function () {
                var b, c = d._data(this), e = c[a + "queue"];
                b = c[a + "queueHooks"];
                var f = d.timers, g = e ? e.length : 0;
                c.finish = !0;
                d.queue(this, a, []);
                b && b.stop && b.stop.call(this, !0);
                for (b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; b < g; b++)e[b] && e[b].finish && e[b].finish.call(this);
                delete c.finish
            })
        }
    });
    d.each(["toggle", "show", "hide"], function (a, b) {
        var c = d.fn[b];
        d.fn[b] = function (a, d, g) {
            return null == a || "boolean" === typeof a ? c.apply(this, arguments) : this.animate(aa(b, !0), a, d, g)
        }
    });
    d.each({
        slideDown: aa("show"),
        slideUp: aa("hide"),
        slideToggle: aa("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        d.fn[a] = function (a, d, f) {
            return this.animate(b, a, d, f)
        }
    });
    d.timers = [];
    d.fx.tick = function () {
        var a, b = d.timers, c = 0;
        for (Z = d.now(); c < b.length; c++)a =
            b[c], a() || b[c] !== a || b.splice(c--, 1);
        b.length || d.fx.stop();
        Z = void 0
    };
    d.fx.timer = function (a) {
        d.timers.push(a);
        a() ? d.fx.start() : d.timers.pop()
    };
    d.fx.interval = 13;
    d.fx.start = function () {
        za || (za = setInterval(d.fx.tick, d.fx.interval))
    };
    d.fx.stop = function () {
        clearInterval(za);
        za = null
    };
    d.fx.speeds = {slow: 600, fast: 200, _default: 400};
    d.fn.delay = function (a, b) {
        a = d.fx ? d.fx.speeds[a] || a : a;
        return this.queue(b || "fx", function (b, d) {
            var f = setTimeout(b, a);
            d.stop = function () {
                clearTimeout(f)
            }
        })
    };
    (function () {
        var a, b, c, d, f;
        b = n.createElement("div");
        b.setAttribute("className", "t");
        b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        d = b.getElementsByTagName("a")[0];
        c = n.createElement("select");
        f = c.appendChild(n.createElement("option"));
        a = b.getElementsByTagName("input")[0];
        d.style.cssText = "top:1px";
        p.getSetAttribute = "t" !== b.className;
        p.style = /top/.test(d.getAttribute("style"));
        p.hrefNormalized = "/a" === d.getAttribute("href");
        p.checkOn = !!a.value;
        p.optSelected = f.selected;
        p.enctype = !!n.createElement("form").enctype;
        c.disabled = !0;
        p.optDisabled = !f.disabled;
        a = n.createElement("input");
        a.setAttribute("value", "");
        p.input = "" === a.getAttribute("value");
        a.value = "t";
        a.setAttribute("type", "radio");
        p.radioValue = "t" === a.value
    })();
    var Ec = /\r/g;
    d.fn.extend({
        val: function (a) {
            var b, c, e, f = this[0];
            if (arguments.length)return e = d.isFunction(a), this.each(function (c) {
                1 === this.nodeType && (c = e ? a.call(this, c, d(this).val()) : a, null == c ? c = "" : "number" === typeof c ? c += "" : d.isArray(c) && (c = d.map(c, function (a) {
                    return null == a ? "" : a + ""
                })), b = d.valHooks[this.type] ||
                d.valHooks[this.nodeName.toLowerCase()], b && "set"in b && void 0 !== b.set(this, c, "value") || (this.value = c))
            });
            if (f) {
                if ((b = d.valHooks[f.type] || d.valHooks[f.nodeName.toLowerCase()]) && "get"in b && void 0 !== (c = b.get(f, "value")))return c;
                c = f.value;
                return "string" === typeof c ? c.replace(Ec, "") : null == c ? "" : c
            }
        }
    });
    d.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = d.find.attr(a, "value");
                    return null != b ? b : d.trim(d.text(a))
                }
            }, select: {
                get: function (a) {
                    for (var b, c = a.options, e = a.selectedIndex, f = (a = "select-one" === a.type || 0 > e) ?
                        null : [], g = a ? e + 1 : c.length, h = 0 > e ? g : a ? e : 0; h < g; h++)if (b = c[h], !(!b.selected && h !== e || (p.optDisabled ? b.disabled : null !== b.getAttribute("disabled")) || b.parentNode.disabled && d.nodeName(b.parentNode, "optgroup"))) {
                        b = d(b).val();
                        if (a)return b;
                        f.push(b)
                    }
                    return f
                }, set: function (a, b) {
                    for (var c, e, f = a.options, g = d.makeArray(b), h = f.length; h--;)if (e = f[h], 0 <= d.inArray(d.valHooks.option.get(e), g))try {
                        e.selected = c = !0
                    } catch (k) {
                        e.scrollHeight
                    } else e.selected = !1;
                    c || (a.selectedIndex = -1);
                    return f
                }
            }
        }
    });
    d.each(["radio", "checkbox"],
        function () {
            d.valHooks[this] = {
                set: function (a, b) {
                    if (d.isArray(b))return a.checked = 0 <= d.inArray(d(a).val(), b)
                }
            };
            p.checkOn || (d.valHooks[this].get = function (a) {
                return null === a.getAttribute("value") ? "on" : a.value
            })
        });
    var ha, Qb, P = d.expr.attrHandle, Ta = /^(?:checked|selected)$/i, V = p.getSetAttribute, Aa = p.input;
    d.fn.extend({
        attr: function (a, b) {
            return $(this, d.attr, a, b, 1 < arguments.length)
        }, removeAttr: function (a) {
            return this.each(function () {
                d.removeAttr(this, a)
            })
        }
    });
    d.extend({
        attr: function (a, b, c) {
            var e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) {
                if ("undefined" === typeof a.getAttribute)return d.prop(a, b, c);
                1 === g && d.isXMLDoc(a) || (b = b.toLowerCase(), e = d.attrHooks[b] || (d.expr.match.bool.test(b) ? Qb : ha));
                if (void 0 !== c)if (null === c)d.removeAttr(a, b); else {
                    if (e && "set"in e && void 0 !== (f = e.set(a, c, b)))return f;
                    a.setAttribute(b, c + "");
                    return c
                } else {
                    if (e && "get"in e && null !== (f = e.get(a, b)))return f;
                    f = d.find.attr(a, b);
                    return null == f ? void 0 : f
                }
            }
        }, removeAttr: function (a, b) {
            var c, e, f = 0, g = b && b.match(K);
            if (g && 1 === a.nodeType)for (; c = g[f++];)e =
                d.propFix[c] || c, d.expr.match.bool.test(c) ? Aa && V || !Ta.test(c) ? a[e] = !1 : a[d.camelCase("default-" + c)] = a[e] = !1 : d.attr(a, c, ""), a.removeAttribute(V ? c : e)
        }, attrHooks: {
            type: {
                set: function (a, b) {
                    if (!p.radioValue && "radio" === b && d.nodeName(a, "input")) {
                        var c = a.value;
                        a.setAttribute("type", b);
                        c && (a.value = c);
                        return b
                    }
                }
            }
        }
    });
    Qb = {
        set: function (a, b, c) {
            !1 === b ? d.removeAttr(a, c) : Aa && V || !Ta.test(c) ? a.setAttribute(!V && d.propFix[c] || c, c) : a[d.camelCase("default-" + c)] = a[c] = !0;
            return c
        }
    };
    d.each(d.expr.match.bool.source.match(/\w+/g),
        function (a, b) {
            var c = P[b] || d.find.attr;
            P[b] = Aa && V || !Ta.test(b) ? function (a, b, d) {
                var h, k;
                d || (k = P[b], P[b] = h, h = null != c(a, b, d) ? b.toLowerCase() : null, P[b] = k);
                return h
            } : function (a, b, c) {
                if (!c)return a[d.camelCase("default-" + b)] ? b.toLowerCase() : null
            }
        });
    Aa && V || (d.attrHooks.value = {
        set: function (a, b, c) {
            if (d.nodeName(a, "input"))a.defaultValue = b; else return ha && ha.set(a, b, c)
        }
    });
    V || (ha = {
        set: function (a, b, c) {
            var d = a.getAttributeNode(c);
            d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c));
            d.value = b += "";
            if ("value" ===
                c || b === a.getAttribute(c))return b
        }
    }, P.id = P.name = P.coords = function (a, b, c) {
        var d;
        if (!c)return (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, d.valHooks.button = {
        get: function (a, b) {
            var c = a.getAttributeNode(b);
            if (c && c.specified)return c.value
        }, set: ha.set
    }, d.attrHooks.contenteditable = {
        set: function (a, b, c) {
            ha.set(a, "" === b ? !1 : b, c)
        }
    }, d.each(["width", "height"], function (a, b) {
        d.attrHooks[b] = {
            set: function (a, d) {
                if ("" === d)return a.setAttribute(b, "auto"), d
            }
        }
    }));
    p.style || (d.attrHooks.style = {
        get: function (a) {
            return a.style.cssText || void 0
        }, set: function (a, b) {
            return a.style.cssText = b + ""
        }
    });
    var Fc = /^(?:input|select|textarea|button|object)$/i, Gc = /^(?:a|area)$/i;
    d.fn.extend({
        prop: function (a, b) {
            return $(this, d.prop, a, b, 1 < arguments.length)
        }, removeProp: function (a) {
            a = d.propFix[a] || a;
            return this.each(function () {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {
                }
            })
        }
    });
    d.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, c) {
            var e, f, g;
            g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) {
                if (g = 1 !== g || !d.isXMLDoc(a))b = d.propFix[b] || b, f = d.propHooks[b];
                return void 0 !== c ? f && "set"in f && void 0 !== (e = f.set(a, c, b)) ? e : a[b] = c : f && "get"in f && null !== (e = f.get(a, b)) ? e : a[b]
            }
        }, propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = d.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : Fc.test(a.nodeName) || Gc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    });
    p.hrefNormalized || d.each(["href", "src"], function (a, b) {
        d.propHooks[b] = {
            get: function (a) {
                return a.getAttribute(b, 4)
            }
        }
    });
    p.optSelected || (d.propHooks.selected = {
        get: function (a) {
            if (a = a.parentNode)a.selectedIndex, a.parentNode && a.parentNode.selectedIndex;
            return null
        }
    });
    d.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function () {
        d.propFix[this.toLowerCase()] = this
    });
    p.enctype || (d.propFix.enctype = "encoding");
    var Ua = /[\t\r\n\f]/g;
    d.fn.extend({
        addClass: function (a) {
            var b, c, e, f, g, h = 0, k = this.length;
            b = "string" === typeof a && a;
            if (d.isFunction(a))return this.each(function (b) {
                d(this).addClass(a.call(this, b, this.className))
            });
            if (b)for (b = (a || "").match(K) || []; h < k; h++)if (c = this[h], e = 1 === c.nodeType &&
                (c.className ? (" " + c.className + " ").replace(Ua, " ") : " ")) {
                for (g = 0; f = b[g++];)0 > e.indexOf(" " + f + " ") && (e += f + " ");
                e = d.trim(e);
                c.className !== e && (c.className = e)
            }
            return this
        }, removeClass: function (a) {
            var b, c, e, f, g, h = 0, k = this.length;
            b = 0 === arguments.length || "string" === typeof a && a;
            if (d.isFunction(a))return this.each(function (b) {
                d(this).removeClass(a.call(this, b, this.className))
            });
            if (b)for (b = (a || "").match(K) || []; h < k; h++)if (c = this[h], e = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Ua, " ") : "")) {
                for (g =
                         0; f = b[g++];)for (; 0 <= e.indexOf(" " + f + " ");)e = e.replace(" " + f + " ", " ");
                e = a ? d.trim(e) : "";
                c.className !== e && (c.className = e)
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" === typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : d.isFunction(a) ? this.each(function (c) {
                d(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function () {
                if ("string" === c)for (var b, f = 0, g = d(this), h = a.match(K) || []; b = h[f++];)g.hasClass(b) ? g.removeClass(b) : g.addClass(b); else if ("undefined" ===
                    c || "boolean" === c)this.className && d._data(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : d._data(this, "__className__") || ""
            })
        }, hasClass: function (a) {
            a = " " + a + " ";
            for (var b = 0, c = this.length; b < c; b++)if (1 === this[b].nodeType && 0 <= (" " + this[b].className + " ").replace(Ua, " ").indexOf(a))return !0;
            return !1
        }
    });
    d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
        function (a, b) {
            d.fn[b] = function (a, d) {
                return 0 < arguments.length ? this.on(b, null, a, d) : this.trigger(b)
            }
        });
    d.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }, bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var Va = d.now(), Wa = /\?/, Hc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    d.parseJSON = function (a) {
        if (q.JSON && q.JSON.parse)return q.JSON.parse(a + "");
        var b, c = null, e = d.trim(a + "");
        return e && !d.trim(e.replace(Hc, function (a, d, e, k) {
            b && d && (c = 0);
            if (0 === c)return a;
            b = e || d;
            c += !k - !e;
            return ""
        })) ? Function("return " + e)() : d.error("Invalid JSON: " + a)
    };
    d.parseXML = function (a) {
        var b, c;
        if (!a || "string" !== typeof a)return null;
        try {
            q.DOMParser ? (c = new DOMParser, b = c.parseFromString(a, "text/xml")) : (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a))
        } catch (e) {
            b = void 0
        }
        b && b.documentElement && !b.getElementsByTagName("parsererror").length || d.error("Invalid XML: " + a);
        return b
    };
    var z, Q, Ic = /#.*$/, Rb = /([?&])_=[^&]*/, Jc = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, Kc = /^(?:GET|HEAD)$/, Lc = /^\/\//, Sb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Tb = {}, Ia = {}, Ub = "*/".concat("*");
    try {
        Q = location.href
    } catch (Sc) {
        Q = n.createElement("a"), Q.href = "", Q = Q.href
    }
    z = Sb.exec(Q.toLowerCase()) || [];
    d.extend({
        active: 0, lastModified: {}, etag: {}, ajaxSettings: {
            url: Q,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(z[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ub,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": d.parseJSON, "text xml": d.parseXML},
            flatOptions: {url: !0, context: !0}
        }, ajaxSetup: function (a, b) {
            return b ? Ja(Ja(a,
                d.ajaxSettings), b) : Ja(d.ajaxSettings, a)
        }, ajaxPrefilter: wb(Tb), ajaxTransport: wb(Ia), ajax: function (a, b) {
            function c(a, b, c, e) {
                var f, p, t, u;
                u = b;
                if (2 !== J) {
                    J = 2;
                    k && clearTimeout(k);
                    n = void 0;
                    h = e || "";
                    s.readyState = 0 < a ? 4 : 0;
                    e = 200 <= a && 300 > a || 304 === a;
                    if (c) {
                        t = m;
                        for (var A = s, G, z, D, v, B = t.contents, L = t.dataTypes; "*" === L[0];)L.shift(), void 0 === z && (z = t.mimeType || A.getResponseHeader("Content-Type"));
                        if (z)for (v in B)if (B[v] && B[v].test(z)) {
                            L.unshift(v);
                            break
                        }
                        if (L[0]in c)D = L[0]; else {
                            for (v in c) {
                                if (!L[0] || t.converters[v + " " + L[0]]) {
                                    D =
                                        v;
                                    break
                                }
                                G || (G = v)
                            }
                            D = D || G
                        }
                        D ? (D !== L[0] && L.unshift(D), t = c[D]) : t = void 0
                    }
                    a:{
                        c = m;
                        G = t;
                        z = s;
                        D = e;
                        var E, C, H, A = {}, B = c.dataTypes.slice();
                        if (B[1])for (C in c.converters)A[C.toLowerCase()] = c.converters[C];
                        for (v = B.shift(); v;)if (c.responseFields[v] && (z[c.responseFields[v]] = G), !H && D && c.dataFilter && (G = c.dataFilter(G, c.dataType)), H = v, v = B.shift())if ("*" === v)v = H; else if ("*" !== H && H !== v) {
                            C = A[H + " " + v] || A["* " + v];
                            if (!C)for (E in A)if (t = E.split(" "), t[1] === v && (C = A[H + " " + t[0]] || A["* " + t[0]])) {
                                !0 === C ? C = A[E] : !0 !== A[E] && (v = t[0], B.unshift(t[1]));
                                break
                            }
                            if (!0 !== C)if (C && c["throws"])G = C(G); else try {
                                G = C(G)
                            } catch (K) {
                                t = {state: "parsererror", error: C ? K : "No conversion from " + H + " to " + v};
                                break a
                            }
                        }
                        t = {state: "success", data: G}
                    }
                    if (e)m.ifModified && ((u = s.getResponseHeader("Last-Modified")) && (d.lastModified[g] = u), (u = s.getResponseHeader("etag")) && (d.etag[g] = u)), 204 === a || "HEAD" === m.type ? u = "nocontent" : 304 === a ? u = "notmodified" : (u = t.state, f = t.data, p = t.error, e = !p); else if (p = u, a || !u)u = "error", 0 > a && (a = 0);
                    s.status = a;
                    s.statusText = (b || u) + "";
                    e ? w.resolveWith(q, [f, u, s]) : w.rejectWith(q,
                        [s, u, p]);
                    s.statusCode(I);
                    I = void 0;
                    l && x.trigger(e ? "ajaxSuccess" : "ajaxError", [s, m, e ? f : p]);
                    F.fireWith(q, [s, u]);
                    l && (x.trigger("ajaxComplete", [s, m]), --d.active || d.event.trigger("ajaxStop"))
                }
            }

            "object" === typeof a && (b = a, a = void 0);
            b = b || {};
            var e, f, g, h, k, l, n, p, m = d.ajaxSetup({}, b), q = m.context || m, x = m.context && (q.nodeType || q.jquery) ? d(q) : d.event, w = d.Deferred(), F = d.Callbacks("once memory"), I = m.statusCode || {}, B = {}, M = {}, J = 0, u = "canceled", s = {
                readyState: 0, getResponseHeader: function (a) {
                    var b;
                    if (2 === J) {
                        if (!p)for (p = {}; b =
                            Jc.exec(h);)p[b[1].toLowerCase()] = b[2];
                        b = p[a.toLowerCase()]
                    }
                    return null == b ? null : b
                }, getAllResponseHeaders: function () {
                    return 2 === J ? h : null
                }, setRequestHeader: function (a, b) {
                    var c = a.toLowerCase();
                    J || (a = M[c] = M[c] || a, B[a] = b);
                    return this
                }, overrideMimeType: function (a) {
                    J || (m.mimeType = a);
                    return this
                }, statusCode: function (a) {
                    var b;
                    if (a)if (2 > J)for (b in a)I[b] = [I[b], a[b]]; else s.always(a[s.status]);
                    return this
                }, abort: function (a) {
                    a = a || u;
                    n && n.abort(a);
                    c(0, a);
                    return this
                }
            };
            w.promise(s).complete = F.add;
            s.success = s.done;
            s.error = s.fail;
            m.url = ((a || m.url || Q) + "").replace(Ic, "").replace(Lc, z[1] + "//");
            m.type = b.method || b.type || m.method || m.type;
            m.dataTypes = d.trim(m.dataType || "*").toLowerCase().match(K) || [""];
            null == m.crossDomain && (e = Sb.exec(m.url.toLowerCase()), m.crossDomain = !(!e || e[1] === z[1] && e[2] === z[2] && (e[3] || ("http:" === e[1] ? "80" : "443")) === (z[3] || ("http:" === z[1] ? "80" : "443"))));
            m.data && m.processData && "string" !== typeof m.data && (m.data = d.param(m.data, m.traditional));
            xb(Tb, m, b, s);
            if (2 === J)return s;
            (l = m.global) && 0 === d.active++ &&
            d.event.trigger("ajaxStart");
            m.type = m.type.toUpperCase();
            m.hasContent = !Kc.test(m.type);
            g = m.url;
            m.hasContent || (m.data && (g = m.url += (Wa.test(g) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = Rb.test(g) ? g.replace(Rb, "$1_=" + Va++) : g + (Wa.test(g) ? "&" : "?") + "_=" + Va++));
            m.ifModified && (d.lastModified[g] && s.setRequestHeader("If-Modified-Since", d.lastModified[g]), d.etag[g] && s.setRequestHeader("If-None-Match", d.etag[g]));
            (m.data && m.hasContent && !1 !== m.contentType || b.contentType) && s.setRequestHeader("Content-Type",
                m.contentType);
            s.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Ub + "; q=0.01" : "") : m.accepts["*"]);
            for (f in m.headers)s.setRequestHeader(f, m.headers[f]);
            if (m.beforeSend && (!1 === m.beforeSend.call(q, s, m) || 2 === J))return s.abort();
            u = "abort";
            for (f in{success: 1, error: 1, complete: 1})s[f](m[f]);
            if (n = xb(Ia, m, b, s)) {
                s.readyState = 1;
                l && x.trigger("ajaxSend", [s, m]);
                m.async && 0 < m.timeout && (k = setTimeout(function () {
                    s.abort("timeout")
                }, m.timeout));
                try {
                    J = 1, n.send(B, c)
                } catch (N) {
                    if (2 > J)c(-1, N); else throw N;
                }
            } else c(-1, "No Transport");
            return s
        }, getJSON: function (a, b, c) {
            return d.get(a, b, c, "json")
        }, getScript: function (a, b) {
            return d.get(a, void 0, b, "script")
        }
    });
    d.each(["get", "post"], function (a, b) {
        d[b] = function (a, e, f, g) {
            d.isFunction(e) && (g = g || f, f = e, e = void 0);
            return d.ajax({url: a, type: b, dataType: g, data: e, success: f})
        }
    });
    d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        d.fn[b] = function (a) {
            return this.on(b,
                a)
        }
    });
    d._evalUrl = function (a) {
        return d.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    };
    d.fn.extend({
        wrapAll: function (a) {
            if (d.isFunction(a))return this.each(function (b) {
                d(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = d(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]);
                b.map(function () {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;)a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        }, wrapInner: function (a) {
            return d.isFunction(a) ?
                this.each(function (b) {
                    d(this).wrapInner(a.call(this, b))
                }) : this.each(function () {
                var b = d(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = d.isFunction(a);
            return this.each(function (c) {
                d(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                d.nodeName(this, "body") || d(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    d.expr.filters.hidden = function (a) {
        return 0 >= a.offsetWidth && 0 >= a.offsetHeight || !p.reliableHiddenOffsets() && "none" === (a.style &&
            a.style.display || d.css(a, "display"))
    };
    d.expr.filters.visible = function (a) {
        return !d.expr.filters.hidden(a)
    };
    var Mc = /%20/g, gc = /\[\]$/, Vb = /\r?\n/g, Nc = /^(?:submit|button|image|reset|file)$/i, Oc = /^(?:input|select|textarea|keygen)/i;
    d.param = function (a, b) {
        var c, e = [], f = function (a, b) {
            b = d.isFunction(b) ? b() : null == b ? "" : b;
            e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        void 0 === b && (b = d.ajaxSettings && d.ajaxSettings.traditional);
        if (d.isArray(a) || a.jquery && !d.isPlainObject(a))d.each(a, function () {
            f(this.name,
                this.value)
        }); else for (c in a)Ka(c, a[c], b, f);
        return e.join("&").replace(Mc, "+")
    };
    d.fn.extend({
        serialize: function () {
            return d.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var a = d.prop(this, "elements");
                return a ? d.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !d(this).is(":disabled") && Oc.test(this.nodeName) && !Nc.test(a) && (this.checked || !Ga.test(a))
            }).map(function (a, b) {
                var c = d(this).val();
                return null == c ? null : d.isArray(c) ? d.map(c, function (a) {
                    return {
                        name: b.name,
                        value: a.replace(Vb, "\r\n")
                    }
                }) : {name: b.name, value: c.replace(Vb, "\r\n")}
            }).get()
        }
    });
    d.ajaxSettings.xhr = void 0 !== q.ActiveXObject ? function () {
        var a;
        if (!(a = !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && yb()))a:{
            try {
                a = new q.ActiveXObject("Microsoft.XMLHTTP");
                break a
            } catch (b) {
            }
            a = void 0
        }
        return a
    } : yb;
    var Pc = 0, Ba = {}, Ca = d.ajaxSettings.xhr();
    if (q.ActiveXObject)d(q).on("unload", function () {
        for (var a in Ba)Ba[a](void 0, !0)
    });
    p.cors = !!Ca && "withCredentials"in Ca;
    (Ca = p.ajax = !!Ca) && d.ajaxTransport(function (a) {
        if (!a.crossDomain ||
            p.cors) {
            var b;
            return {
                send: function (c, e) {
                    var f, g = a.xhr(), h = ++Pc;
                    g.open(a.type, a.url, a.async, a.username, a.password);
                    if (a.xhrFields)for (f in a.xhrFields)g[f] = a.xhrFields[f];
                    a.mimeType && g.overrideMimeType && g.overrideMimeType(a.mimeType);
                    a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (f in c)void 0 !== c[f] && g.setRequestHeader(f, c[f] + "");
                    g.send(a.hasContent && a.data || null);
                    b = function (c, f) {
                        var n, p, m;
                        if (b && (f || 4 === g.readyState))if (delete Ba[h], b = void 0, g.onreadystatechange =
                                d.noop, f)4 !== g.readyState && g.abort(); else {
                            m = {};
                            n = g.status;
                            "string" === typeof g.responseText && (m.text = g.responseText);
                            try {
                                p = g.statusText
                            } catch (q) {
                                p = ""
                            }
                            n || !a.isLocal || a.crossDomain ? 1223 === n && (n = 204) : n = m.text ? 200 : 404
                        }
                        m && e(n, p, m, g.getAllResponseHeaders())
                    };
                    a.async ? 4 === g.readyState ? setTimeout(b) : g.onreadystatechange = Ba[h] = b : b()
                }, abort: function () {
                    b && b(void 0, !0)
                }
            }
        }
    });
    d.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (a) {
                d.globalEval(a);
                return a
            }
        }
    });
    d.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1);
        a.crossDomain && (a.type = "GET", a.global = !1)
    });
    d.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c = n.head || d("head")[0] || n.documentElement;
            return {
                send: function (d, f) {
                    b = n.createElement("script");
                    b.async = !0;
                    a.scriptCharset && (b.charset = a.scriptCharset);
                    b.src = a.url;
                    b.onload = b.onreadystatechange = function (a, c) {
                        if (c || !b.readyState || /loaded|complete/.test(b.readyState))b.onload =
                            b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success")
                    };
                    c.insertBefore(b, c.firstChild)
                }, abort: function () {
                    if (b)b.onload(void 0, !0)
                }
            }
        }
    });
    var Wb = [], Xa = /(=)\?(?=&|$)|\?\?/;
    d.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = Wb.pop() || d.expando + "_" + Va++;
            this[a] = !0;
            return a
        }
    });
    d.ajaxPrefilter("json jsonp", function (a, b, c) {
        var e, f, g, h = !1 !== a.jsonp && (Xa.test(a.url) ? "url" : "string" === typeof a.data && !(a.contentType || "").indexOf("application/x-www-form-urlencoded") &&
            Xa.test(a.data) && "data");
        if (h || "jsonp" === a.dataTypes[0])return e = a.jsonpCallback = d.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, h ? a[h] = a[h].replace(Xa, "$1" + e) : !1 !== a.jsonp && (a.url += (Wa.test(a.url) ? "&" : "?") + a.jsonp + "=" + e), a.converters["script json"] = function () {
            g || d.error(e + " was not called");
            return g[0]
        }, a.dataTypes[0] = "json", f = q[e], q[e] = function () {
            g = arguments
        }, c.always(function () {
            q[e] = f;
            a[e] && (a.jsonpCallback = b.jsonpCallback, Wb.push(e));
            g && d.isFunction(f) && f(g[0]);
            g = f = void 0
        }), "script"
    });
    d.parseHTML = function (a, b, c) {
        if (!a || "string" !== typeof a)return null;
        "boolean" === typeof b && (c = b, b = !1);
        b = b || n;
        var e = Fb.exec(a);
        c = !c && [];
        if (e)return [b.createElement(e[1])];
        e = d.buildFragment([a], b, c);
        c && c.length && d(c).remove();
        return d.merge([], e.childNodes)
    };
    var Xb = d.fn.load;
    d.fn.load = function (a, b, c) {
        if ("string" !== typeof a && Xb)return Xb.apply(this, arguments);
        var e, f, g, h = this, k = a.indexOf(" ");
        0 <= k && (e = d.trim(a.slice(k, a.length)), a = a.slice(0, k));
        d.isFunction(b) ? (c = b, b = void 0) : b && "object" === typeof b && (g =
            "POST");
        0 < h.length && d.ajax({url: a, type: g, dataType: "html", data: b}).done(function (a) {
            f = arguments;
            h.html(e ? d("<div>").append(d.parseHTML(a)).find(e) : a)
        }).complete(c && function (a, b) {
            h.each(c, f || [a.responseText, b, a])
        });
        return this
    };
    d.expr.filters.animated = function (a) {
        return d.grep(d.timers, function (b) {
            return a === b.elem
        }).length
    };
    var Yb = q.document.documentElement;
    d.offset = {
        setOffset: function (a, b, c) {
            var e, f, g, h = d.css(a, "position"), k = d(a), l = {};
            "static" === h && (a.style.position = "relative");
            g = k.offset();
            f = d.css(a,
                "top");
            e = d.css(a, "left");
            ("absolute" === h || "fixed" === h) && -1 < d.inArray("auto", [f, e]) ? (e = k.position(), f = e.top, e = e.left) : (f = parseFloat(f) || 0, e = parseFloat(e) || 0);
            d.isFunction(b) && (b = b.call(a, c, g));
            null != b.top && (l.top = b.top - g.top + f);
            null != b.left && (l.left = b.left - g.left + e);
            "using"in b ? b.using.call(a, l) : k.css(l)
        }
    };
    d.fn.extend({
        offset: function (a) {
            if (arguments.length)return void 0 === a ? this : this.each(function (b) {
                d.offset.setOffset(this, a, b)
            });
            var b, c, e = {top: 0, left: 0}, f = (c = this[0]) && c.ownerDocument;
            if (f) {
                b = f.documentElement;
                if (!d.contains(b, c))return e;
                "undefined" !== typeof c.getBoundingClientRect && (e = c.getBoundingClientRect());
                c = zb(f);
                return {
                    top: e.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: e.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }
            }
        }, position: function () {
            if (this[0]) {
                var a, b, c = {top: 0, left: 0}, e = this[0];
                "fixed" === d.css(e, "position") ? b = e.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), d.nodeName(a[0], "html") || (c = a.offset()), c.top += d.css(a[0], "borderTopWidth", !0), c.left += d.css(a[0],
                    "borderLeftWidth", !0));
                return {
                    top: b.top - c.top - d.css(e, "marginTop", !0),
                    left: b.left - c.left - d.css(e, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var a = this.offsetParent || Yb; a && !d.nodeName(a, "html") && "static" === d.css(a, "position");)a = a.offsetParent;
                return a || Yb
            })
        }
    });
    d.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, b) {
        var c = /Y/.test(b);
        d.fn[a] = function (e) {
            return $(this, function (a, e, h) {
                var k = zb(a);
                if (void 0 === h)return k ? b in k ? k[b] : k.document.documentElement[e] :
                    a[e];
                k ? k.scrollTo(c ? d(k).scrollLeft() : h, c ? h : d(k).scrollTop()) : a[e] = h
            }, a, e, arguments.length, null)
        }
    });
    d.each(["top", "left"], function (a, b) {
        d.cssHooks[b] = mb(p.pixelPosition, function (a, e) {
            if (e)return e = Y(a, b), pa.test(e) ? d(a).position()[b] + "px" : e
        })
    });
    d.each({Height: "height", Width: "width"}, function (a, b) {
        d.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, e) {
            d.fn[e] = function (e, g) {
                var h = arguments.length && (c || "boolean" !== typeof e), k = c || (!0 === e || !0 === g ? "margin" : "border");
                return $(this, function (b, c,
                                         e) {
                    return d.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (c = b.documentElement, Math.max(b.body["scroll" + a], c["scroll" + a], b.body["offset" + a], c["offset" + a], c["client" + a])) : void 0 === e ? d.css(b, c, k) : d.style(b, c, e, k)
                }, b, h ? e : void 0, h, null)
            }
        })
    });
    d.fn.size = function () {
        return this.length
    };
    d.fn.andSelf = d.fn.addBack;
    "function" === typeof define && define.amd && define("jquery", [], function () {
        return d
    });
    var Qc = q.jQuery, Rc = q.$;
    d.noConflict = function (a) {
        q.$ === d && (q.$ = Rc);
        a && q.jQuery === d && (q.jQuery = Qc);
        return d
    };
    "undefined" === typeof ia && (q.jQuery = q.$ = d);
    return d
});
"undefined" !== typeof jQuery && function (q) {
    q("#spinner").ajaxStart(function () {
        q(this).fadeIn()
    }).ajaxStop(function () {
        q(this).fadeOut()
    })
}(jQuery);