/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';
var aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
    if (a == Array.prototype || a == Object.prototype) return a;
    a[b] = c.value;
    return a
};

function ba(a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c
    }
    throw Error("Cannot find global object");
}
var ca = ba(this);

function da(a, b) {
    if (b) a: {
        var c = ca;a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e]
        }
        a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && aa(c, a, {
            configurable: !0,
            writable: !0,
            value: b
        })
    }
}
da("Object.entries", function(a) {
    return a ? a : function(b) {
        var c = [],
            d;
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && c.push([d, b[d]]);
        return c
    }
});
da("Array.prototype.includes", function(a) {
    return a ? a : function(b, c) {
        var d = this;
        d instanceof String && (d = String(d));
        var e = d.length;
        c = c || 0;
        for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
            var f = d[c];
            if (f === b || Object.is(f, b)) return !0
        }
        return !1
    }
});
da("String.prototype.matchAll", function(a) {
    return a ? a : function(b) {
        if (b instanceof RegExp && !b.global) throw new TypeError("RegExp passed into String.prototype.matchAll() must have global tag.");
        var c = new RegExp(b, b instanceof RegExp ? void 0 : "g"),
            d = this,
            e = !1,
            f = {
                next: function() {
                    if (e) return {
                        value: void 0,
                        done: !0
                    };
                    var g = c.exec(d);
                    if (!g) return e = !0, {
                        value: void 0,
                        done: !0
                    };
                    "" === g[0] && (c.lastIndex += 1);
                    return {
                        value: g,
                        done: !1
                    }
                }
            };
        f[Symbol.iterator] = function() {
            return f
        };
        return f
    }
});
da("Promise.prototype.finally", function(a) {
    return a ? a : function(b) {
        return this.then(function(c) {
            return Promise.resolve(b()).then(function() {
                return c
            })
        }, function(c) {
            return Promise.resolve(b()).then(function() {
                throw c;
            })
        })
    }
});
var q = this || self;

function t(a, b) {
    a = a.split(".");
    b = b || q;
    for (var c = 0; c < a.length; c++)
        if (b = b[a[c]], null == b) return null;
    return b
}

function ea() {}

function fa(a) {
    var b = typeof a;
    b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
    return "array" == b || "object" == b && "number" == typeof a.length
}

function ha(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
}

function ia(a, b, c) {
    return a.call.apply(a.bind, arguments)
}

function ja(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var e = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(e, d);
            return a.apply(b, e)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}

function ka(a, b, c) {
    Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ka = ia : ka = ja;
    return ka.apply(null, arguments)
}

function u(a, b) {
    a = a.split(".");
    var c = q;
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
}

function la(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.xa = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.Ca = function(d, e, f) {
        for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g)
    }
}

function na(a) {
    return a
};

function oa(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, oa);
    else {
        const c = Error().stack;
        c && (this.stack = c)
    }
    a && (this.message = String(a));
    void 0 !== b && (this.ja = b)
}
la(oa, Error);
oa.prototype.name = "CustomError";
var pa = class {
    constructor({
        url: a
    }) {
        const b = /[?&]dsh=1(&|$)/.test(a);
        this.j = !b && /[?&]ae=1(&|$)/.test(a);
        this.l = !b && /[?&]ae=2(&|$)/.test(a);
        if ((this.h = /[?&]adurl=([^&]*)/.exec(a)) && this.h[1]) {
            let c;
            try {
                c = decodeURIComponent(this.h[1])
            } catch (d) {
                c = null
            }
            this.i = c
        }
    }
};

function qa(a, b) {
    Array.prototype.forEach.call(a, b, void 0)
}

function ra(a) {
    const b = a.length;
    if (0 < b) {
        const c = Array(b);
        for (let d = 0; d < b; d++) c[d] = a[d];
        return c
    }
    return []
}

function sa(a, b) {
    for (let c = 1; c < arguments.length; c++) {
        const d = arguments[c];
        if (fa(d)) {
            const e = a.length || 0,
                f = d.length || 0;
            a.length = e + f;
            for (let g = 0; g < f; g++) a[e + g] = d[g]
        } else a.push(d)
    }
};

function ta(a, b) {
    for (const c in a) b.call(void 0, a[c], c, a)
}

function ua(a) {
    if (!a || "object" !== typeof a) return a;
    if ("function" === typeof a.clone) return a.clone();
    if ("undefined" !== typeof Map && a instanceof Map) return new Map(a);
    if ("undefined" !== typeof Set && a instanceof Set) return new Set(a);
    const b = Array.isArray(a) ? [] : "function" !== typeof ArrayBuffer || "function" !== typeof ArrayBuffer.isView || !ArrayBuffer.isView(a) || a instanceof DataView ? {} : new a.constructor(a.length);
    for (const c in a) b[c] = ua(a[c]);
    return b
}
const va = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function wa(a, b) {
    let c, d;
    for (let e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (let f = 0; f < va.length; f++) c = va[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};
var xa;

function ya(a, b) {
    this.h = a === za && b || ""
}
ya.prototype.M = !0;
ya.prototype.L = function() {
    return this.h
};

function w(a) {
    return new ya(za, a)
}
var za = {};
w("");
var Aa = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    },
    Ba = /&/g,
    Ca = /</g,
    Da = />/g,
    Ea = /"/g,
    Fa = /'/g,
    Ga = /\x00/g,
    Ha = /[\x00&<>"']/;
var y = class {
    constructor(a, b) {
        this.h = b === Ia ? a : ""
    }
};
y.prototype.M = !0;
y.prototype.L = function() {
    return this.h.toString()
};
y.prototype.j = !0;
y.prototype.i = function() {
    return 1
};
y.prototype.toString = function() {
    return this.h.toString()
};
var Ja = RegExp('^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$', "i"),
    Ka = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
    La = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
    Ia = {},
    Ma = new y("about:invalid#zClosurez", Ia);
var Na;
a: {
    const a = q.navigator;
    if (a) {
        const b = a.userAgent;
        if (b) {
            Na = b;
            break a
        }
    }
    Na = ""
}
let Oa = Na;

function z(a) {
    return -1 != Oa.indexOf(a)
};

function Pa() {
    return z("Firefox") || z("FxiOS")
}

function Qa() {
    return (z("Chrome") || z("CriOS")) && !z("Edge")
};
const Ra = {};
class Sa {
    constructor(a, b, c) {
        this.h = c === Ra ? a : "";
        this.l = b;
        this.M = this.j = !0
    }
    i() {
        return this.l
    }
    L() {
        return this.h.toString()
    }
    toString() {
        return this.h.toString()
    }
};
var Ta = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

function A(a) {
    return a ? decodeURI(a) : a
}

function B(a, b) {
    return b.match(Ta)[a] || null
}

function Ua(a, b, c) {
    if (Array.isArray(b))
        for (var d = 0; d < b.length; d++) Ua(a, String(b[d]), c);
    else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
}

function Va(a) {
    var b = [],
        c;
    for (c in a) Ua(c, a[c], b);
    return b.join("&")
}
var Wa = /#|$/;

function Xa(a, b) {
    b = String.fromCharCode.apply(null, b);
    return null == a ? b : a + b
}
let Ya;
const Za = "undefined" !== typeof TextDecoder;
Pa();
!z("Android") || Qa() || Pa();
Qa();
var $a = z("Safari") && !(Qa() || z("Coast") || z("Opera") || z("Edge") || z("Edg/") || z("OPR") || Pa() || z("Silk") || z("Android")) && !(z("iPhone") && !z("iPod") && !z("iPad") || z("iPad") || z("iPod"));
var bb = {},
    cb = null;

function db(a, b) {
    void 0 === b && (b = 0);
    eb();
    b = bb[b];
    const c = Array(Math.floor(a.length / 3)),
        d = b[64] || "";
    let e = 0,
        f = 0;
    for (; e < a.length - 2; e += 3) {
        var g = a[e],
            h = a[e + 1],
            k = a[e + 2],
            l = b[g >> 2];
        g = b[(g & 3) << 4 | h >> 4];
        h = b[(h & 15) << 2 | k >> 6];
        k = b[k & 63];
        c[f++] = "" + l + g + h + k
    }
    l = 0;
    k = d;
    switch (a.length - e) {
        case 2:
            l = a[e + 1], k = b[(l & 15) << 2] || d;
        case 1:
            a = a[e], c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
    }
    return c.join("")
}

function fb(a) {
    var b = a.length,
        c = 3 * b / 4;
    c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
    var d = new Uint8Array(c),
        e = 0;
    gb(a, function(f) {
        d[e++] = f
    });
    return d.subarray(0, e)
}

function gb(a, b) {
    function c(k) {
        for (; d < a.length;) {
            var l = a.charAt(d++),
                n = cb[l];
            if (null != n) return n;
            if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
        }
        return k
    }
    eb();
    for (var d = 0;;) {
        var e = c(-1),
            f = c(0),
            g = c(64),
            h = c(64);
        if (64 === h && -1 === e) break;
        b(e << 2 | f >> 4);
        64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
    }
}

function eb() {
    if (!cb) {
        cb = {};
        for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
            var d = a.concat(b[c].split(""));
            bb[c] = d;
            for (var e = 0; e < d.length; e++) {
                var f = d[e];
                void 0 === cb[f] && (cb[f] = e)
            }
        }
    }
};
const hb = "function" === typeof Uint8Array.prototype.slice;
let ib;

function jb(a, b, c, d) {
    if (kb.length) {
        const e = kb.pop();
        d && (e.J = d.J);
        a && lb(e, a, b, c);
        return e
    }
    return new mb(a, b, c, d)
}

function lb(a, b, c, d) {
    b = b.constructor === Uint8Array ? b : b.constructor === ArrayBuffer ? new Uint8Array(b) : b.constructor === Array ? new Uint8Array(b) : b.constructor === String ? fb(b) : b instanceof Uint8Array ? new Uint8Array(b.buffer, b.byteOffset, b.byteLength) : new Uint8Array(0);
    a.i = b;
    a.l = void 0 !== c ? c : 0;
    a.j = void 0 !== d ? a.l + d : a.i.length;
    a.h = a.l
}

function nb(a) {
    const b = a.i;
    let c = b[a.h + 0],
        d = c & 127;
    if (128 > c) return a.h += 1, d;
    c = b[a.h + 1];
    d |= (c & 127) << 7;
    if (128 > c) return a.h += 2, d;
    c = b[a.h + 2];
    d |= (c & 127) << 14;
    if (128 > c) return a.h += 3, d;
    c = b[a.h + 3];
    d |= (c & 127) << 21;
    if (128 > c) return a.h += 4, d;
    c = b[a.h + 4];
    d |= (c & 15) << 28;
    if (128 > c) return a.h += 5, d >>> 0;
    a.h += 5;
    128 <= b[a.h++] && 128 <= b[a.h++] && 128 <= b[a.h++] && 128 <= b[a.h++] && a.h++;
    return d
}
var mb = class {
        constructor(a, b, c, {
            J: d = !1
        } = {}) {
            this.i = null;
            this.h = this.j = this.l = 0;
            this.m = !1;
            this.J = d;
            a && lb(this, a, b, c)
        }
        clone() {
            return jb(this.i, this.l, this.j - this.l)
        }
        clear() {
            this.i = null;
            this.h = this.j = this.l = 0;
            this.J = this.m = !1
        }
        reset() {
            this.h = this.l
        }
        advance(a) {
            this.h += a
        }
    },
    kb = [];

function ob(a) {
    var b = a.h;
    (b = b.h == b.j) || (b = a.j) || (b = a.h, b = b.m || 0 > b.h || b.h > b.j);
    if (b) return !1;
    a.o = a.h.h;
    b = nb(a.h);
    const c = b & 7;
    if (0 != c && 5 != c && 1 != c && 2 != c && 3 != c && 4 != c) return a.j = !0, !1;
    a.m = b;
    a.l = b >>> 3;
    a.i = c;
    return !0
}

function pb(a) {
    switch (a.i) {
        case 0:
            if (0 != a.i) pb(a);
            else {
                for (a = a.h; a.i[a.h] & 128;) a.h++;
                a.h++
            }
            break;
        case 1:
            1 != a.i ? pb(a) : a.h.advance(8);
            break;
        case 2:
            if (2 != a.i) pb(a);
            else {
                var b = nb(a.h);
                a.h.advance(b)
            }
            break;
        case 5:
            5 != a.i ? pb(a) : a.h.advance(4);
            break;
        case 3:
            b = a.l;
            do {
                if (!ob(a)) {
                    a.j = !0;
                    break
                }
                if (4 == a.i) {
                    a.l != b && (a.j = !0);
                    break
                }
                pb(a)
            } while (1);
            break;
        default:
            a.j = !0
    }
}
var qb = class {
    constructor(a) {
        var {
            J: b = !1,
            ca: c = !1
        } = {};
        this.B = {
            J: b
        };
        this.ca = c;
        this.h = jb(a, void 0, void 0, this.B);
        this.o = this.h.h;
        this.i = this.m = this.l = -1;
        this.j = !1
    }
    reset() {
        this.h.reset();
        this.i = this.l = -1
    }
    advance(a) {
        this.h.advance(a)
    }
};
var rb = "function" === typeof Uint8Array;

function sb(a) {
    return null !== a && "object" == typeof a && !Array.isArray(a) && !tb(a)
}

function ub(a, b) {
    if (null != a) return Array.isArray(a) || sb(a) ? vb(a, b) : b(a)
}

function vb(a, b) {
    if (Array.isArray(a)) {
        var c = Array(a.length);
        for (var d = 0; d < a.length; d++) c[d] = ub(a[d], b);
        Array.isArray(a) && a.X && wb(c);
        return c
    }
    c = {};
    for (d in a) c[d] = ub(a[d], b);
    return c
}

function xb(a) {
    switch (typeof a) {
        case "number":
            return isFinite(a) ? a : String(a);
        case "object":
            return tb(a) ? db(a) : a;
        default:
            return a
    }
}

function yb(a) {
    return tb(a) ? new Uint8Array(a) : a
}
const zb = {
    X: {
        value: !0,
        configurable: !0
    }
};

function wb(a) {
    Array.isArray(a) && !Object.isFrozen(a) && Object.defineProperties(a, zb);
    return a
}

function tb(a) {
    return rb && null != a && a instanceof Uint8Array
};

function Ab(a) {
    a = a.h;
    const b = [];
    for (let c in a) Object.prototype.hasOwnProperty.call(a, c) && b.push(c);
    return b
}

function Bb(a, b) {
    return a.j ? (b.h || (b.h = new a.j(b.value), a.isFrozen() && null(b.h)), b.h) : b.value
}
class Cb {
    constructor(a, b) {
        this.i = a;
        this.j = b;
        this.h = {};
        this.l = !0;
        if (0 < this.i.length) {
            for (a = 0; a < this.i.length; a++) {
                b = this.i[a];
                const c = b[0];
                this.h[c.toString()] = new Db(c, b[1])
            }
            this.l = !0
        }
    }
    isFrozen() {
        return !1
    }
    toJSON() {
        const a = this.A(!1);
        return vb(a, xb)
    }
    A(a) {
        if (this.l) {
            if (this.j) {
                var b = this.h;
                for (var c in b)
                    if (Object.prototype.hasOwnProperty.call(b, c)) {
                        var d = b[c].h;
                        d && d.A(a)
                    }
            }
        } else {
            this.i.length = 0;
            b = Ab(this);
            b.sort();
            for (c = 0; c < b.length; c++) {
                d = this.h[b[c]];
                const e = d.h;
                e && e.A(a);
                this.i.push([d.key, d.value])
            }
            this.l = !0
        }
        return this.i
    }
    clear() {
        this.h = {};
        this.l = !1
    }
    entries() {
        const a = [],
            b = Ab(this);
        b.sort();
        for (let c = 0; c < b.length; c++) {
            const d = this.h[b[c]];
            a.push([d.key, Bb(this, d)])
        }
        return new Eb(a)
    }
    keys() {
        const a = [],
            b = Ab(this);
        b.sort();
        for (let c = 0; c < b.length; c++) a.push(this.h[b[c]].key);
        return new Eb(a)
    }
    values() {
        const a = [],
            b = Ab(this);
        b.sort();
        for (let c = 0; c < b.length; c++) a.push(Bb(this, this.h[b[c]]));
        return new Eb(a)
    }
    forEach(a, b) {
        const c = Ab(this);
        c.sort();
        for (let d = 0; d < c.length; d++) {
            const e = this.h[c[d]];
            a.call(b, Bb(this,
                e), e.key, this)
        }
    }
    set(a, b) {
        const c = new Db(a);
        this.j ? (c.h = b, c.value = b.A(!1)) : c.value = b;
        this.h[a.toString()] = c;
        this.l = !1;
        return this
    }
    get(a) {
        if (a = this.h[a.toString()]) return Bb(this, a)
    }
    has(a) {
        return a.toString() in this.h
    }[Symbol.iterator]() {
        return this.entries()
    }
}
class Db {
    constructor(a, b) {
        this.key = a;
        this.value = b;
        this.h = void 0
    }
}
class Eb {
    constructor(a) {
        this.i = 0;
        this.h = a
    }
    next() {
        return this.i < this.h.length ? {
            done: !1,
            value: this.h[this.i++]
        } : {
            done: !0,
            value: void 0
        }
    }[Symbol.iterator]() {
        return this
    }
};
let Fb;

function D(a, b, c) {
    var d = Fb;
    Fb = null;
    a || (a = d);
    d = this.constructor.ea;
    a || (a = d ? [d] : []);
    this.l = d ? 0 : -1;
    this.h = null;
    this.i = a;
    a: {
        d = this.i.length;a = d - 1;
        if (d && (d = this.i[a], sb(d))) {
            this.m = a - this.l;
            this.j = d;
            break a
        }
        void 0 !== b && -1 < b ? (this.m = Math.max(b, a + 1 - this.l), this.j = null) : this.m = Number.MAX_VALUE
    }
    if (c)
        for (b = 0; b < c.length; b++) a = c[b], a < this.m ? (a += this.l, (d = this.i[a]) ? wb(d) : this.i[a] = Gb) : (Hb(this), (d = this.j[a]) ? wb(d) : this.j[a] = Gb)
}
const Gb = Object.freeze(wb([]));

function Hb(a) {
    let b = a.m + a.l;
    a.i[b] || (a.j = a.i[b] = {})
}

function E(a, b, c = !1) {
    return -1 === b ? null : c || b >= a.m ? a.j ? a.j[b] : void 0 : a.i[b + a.l]
}

function Ib(a, b) {
    let c = E(a, b, !1);
    null == c && (c = Gb);
    c === Gb && (c = wb([]), Jb(a, b, c, !1));
    return c
}

function Kb(a, b, c) {
    a.h || (a.h = {});
    if (b in a.h) return a.h[b];
    let d = E(a, b);
    d || (d = wb([]), Jb(a, b, d));
    c = new Cb(d, c);
    return a.h[b] = c
}

function Jb(a, b, c, d = !1) {
    d || b >= a.m ? (Hb(a), a.j[b] = c) : a.i[b + a.l] = c
}

function Lb(a, b, c, d, e = !1) {
    if (-1 === c) return null;
    a.h || (a.h = {});
    !a.h[c] && (e = E(a, c, e), d || e) && (a.h[c] = new b(e));
    return a.h[c]
}

function Mb(a, b, c) {
    a.h || (a.h = {});
    let d = a.h[c];
    if (!d) {
        let e = Ib(a, c);
        d = [];
        for (let f = 0; f < e.length; f++) d[f] = new b(e[f]);
        a.h[c] = d
    }
    return d
}
D.prototype.toJSON = function() {
    const a = Nb(this.A(!1));
    return vb(a, xb)
};
D.prototype.A = function(a) {
    if (this.h)
        for (let b in this.h) {
            const c = this.h[b];
            if (Array.isArray(c))
                for (let d = 0; d < c.length; d++) c[d] && c[d].A(a);
            else c && c.A(a)
        }
    return this.i
};

function Nb(a) {
    let b, c = a.length,
        d = !1;
    for (let g = a.length; g--;) {
        let h = a[g];
        if (Array.isArray(h)) {
            var e = h;
            Array.isArray(h) && h.X && !h.length ? h = null : h = Nb(h);
            h != e && (d = !0)
        } else if (sb(h)) {
            a: {
                var f = h;e = {};
                let k = !1;
                for (let l in f) {
                    let n = f[l];
                    if (Array.isArray(n)) {
                        let p = n;
                        Array.isArray(n) && n.X && !n.length ? n = null : n = Nb(n);
                        n != p && (k = !0)
                    }
                    null != n ? e[l] = n : k = !0
                }
                if (k) {
                    for (let l in e) {
                        f = e;
                        break a
                    }
                    f = null
                }
            }
            f != h && (d = !0);c--;
            continue
        }
        null == h && c == g + 1 ? (d = !0, c--) : d && (b || (b = a.slice(0, c)), b[g] = h)
    }
    if (!d) return a;
    b || (b = a.slice(0, c));
    f && b.push(f);
    return b
}
D.prototype.clone = function() {
    var a = this.constructor,
        b = vb(this.A(!1), yb);
    Fb = b;
    a = new a(b);
    Fb = null;
    Ob(a, this);
    return a
};

function Ob(a, b) {
    b.o && (a.o = b.o.slice());
    const c = b.h;
    if (c) {
        b = b.j;
        for (let f in c) {
            const g = c[f];
            if (g) {
                var d = !(!b || !b[f]),
                    e = +f;
                if (Array.isArray(g)) {
                    if (g.length)
                        for (d = Mb(a, g[0].constructor, e), e = 0; e < Math.min(d.length, g.length); e++) Ob(d[e], g[e])
                } else if (g instanceof Cb) {
                    if (g.j) {
                        const h = Kb(a, e, g.j);
                        g.forEach((k, l) => Ob(h.get(l), k))
                    }
                } else(d = Lb(a, g.constructor, e, 0, d)) && Ob(d, g)
            }
        }
    }
};

function Pb(a, b) {
    if (4 == b.i) return !1;
    var c = b.o;
    pb(b);
    if (!b.ca) {
        var d = b.h.i;
        b = b.h.h;
        c = c === b ? ib || (ib = new Uint8Array(0)) : hb ? d.slice(c, b) : new Uint8Array(d.subarray(c, b));
        (d = a.o) ? d.push(c): a.o = [c]
    }
    return !0
};

function F(a, b) {
    var c = void 0;
    return new(c || (c = Promise))(function(d, e) {
        function f(k) {
            try {
                h(b.next(k))
            } catch (l) {
                e(l)
            }
        }

        function g(k) {
            try {
                h(b["throw"](k))
            } catch (l) {
                e(l)
            }
        }

        function h(k) {
            k.done ? d(k.value) : (new c(function(l) {
                l(k.value)
            })).then(f, g)
        }
        h((b = b.apply(a, void 0)).next())
    })
};
w("csi.gstatic.com");
w("googleads.g.doubleclick.net");
w("pagead2.googlesyndication.com");
w("partner.googleadservices.com");
w("pubads.g.doubleclick.net");
w("securepubads.g.doubleclick.net");
w("tpc.googlesyndication.com");
/*

 SPDX-License-Identifier: Apache-2.0
*/
function Qb(a, b) {
    ta(b, function(c, d) {
        c && "object" == typeof c && c.M && (c = c.L());
        "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Rb.hasOwnProperty(d) ? a.setAttribute(Rb[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
    })
}
var Rb = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    nonce: "nonce",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
};

function Sb(a, b, c) {
    var d = arguments,
        e = document,
        f = d[1];
    var g = String(d[0]);
    g = String(g);
    "application/xhtml+xml" === e.contentType && (g = g.toLowerCase());
    g = e.createElement(g);
    f && ("string" === typeof f ? g.className = f : Array.isArray(f) ? g.className = f.join(" ") : Qb(g, f));
    2 < d.length && Tb(e, g, d);
    return g
}

function Tb(a, b, c) {
    function d(h) {
        h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
    }
    for (var e = 2; e < c.length; e++) {
        var f = c[e];
        if (!fa(f) || ha(f) && 0 < f.nodeType) d(f);
        else {
            a: {
                if (f && "number" == typeof f.length) {
                    if (ha(f)) {
                        var g = "function" == typeof f.item || "string" == typeof f.item;
                        break a
                    }
                    if ("function" === typeof f) {
                        g = "function" == typeof f.item;
                        break a
                    }
                }
                g = !1
            }
            qa(g ? ra(f) : f, d)
        }
    }
};

function Ub(a) {
    if (!a) return "";
    a = a.split("#")[0].split("?")[0];
    a = a.toLowerCase();
    0 == a.indexOf("//") && (a = window.location.protocol + a);
    /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
    var b = a.substring(a.indexOf("://") + 3),
        c = b.indexOf("/"); - 1 != c && (b = b.substring(0, c));
    c = a.substring(0, a.indexOf("://"));
    if (!c) throw Error("URI is missing protocol: " + a);
    if ("http" !== c && "https" !== c && "chrome-extension" !== c && "moz-extension" !== c && "file" !== c && "android-app" !== c && "chrome-search" !== c && "chrome-untrusted" !== c && "chrome" !==
        c && "app" !== c && "devtools" !== c) throw Error("Invalid URI scheme in origin: " + c);
    a = "";
    var d = b.indexOf(":");
    if (-1 != d) {
        var e = b.substring(d + 1);
        b = b.substring(0, d);
        if ("http" === c && "80" !== e || "https" === c && "443" !== e) a = ":" + e
    }
    return c + "://" + b + a
};
var Vb = "client_dev_mss_url client_dev_regex_map client_dev_root_url expflag jsfeat jsmode client_rollout_override".split(" ");

function Wb() {
    function a() {
        e[0] = 1732584193;
        e[1] = 4023233417;
        e[2] = 2562383102;
        e[3] = 271733878;
        e[4] = 3285377520;
        n = l = 0
    }

    function b(p) {
        for (var r = g, m = 0; 64 > m; m += 4) r[m / 4] = p[m] << 24 | p[m + 1] << 16 | p[m + 2] << 8 | p[m + 3];
        for (m = 16; 80 > m; m++) p = r[m - 3] ^ r[m - 8] ^ r[m - 14] ^ r[m - 16], r[m] = (p << 1 | p >>> 31) & 4294967295;
        p = e[0];
        var v = e[1],
            x = e[2],
            C = e[3],
            ma = e[4];
        for (m = 0; 80 > m; m++) {
            if (40 > m)
                if (20 > m) {
                    var P = C ^ v & (x ^ C);
                    var ab = 1518500249
                } else P = v ^ x ^ C, ab = 1859775393;
            else 60 > m ? (P = v & x | C & (v | x), ab = 2400959708) : (P = v ^ x ^ C, ab = 3395469782);
            P = ((p << 5 | p >>> 27) & 4294967295) + P + ma + ab + r[m] & 4294967295;
            ma = C;
            C = x;
            x = (v << 30 | v >>> 2) & 4294967295;
            v = p;
            p = P
        }
        e[0] = e[0] + p & 4294967295;
        e[1] = e[1] + v & 4294967295;
        e[2] = e[2] + x & 4294967295;
        e[3] = e[3] + C & 4294967295;
        e[4] = e[4] + ma & 4294967295
    }

    function c(p, r) {
        if ("string" === typeof p) {
            p = unescape(encodeURIComponent(p));
            for (var m = [], v = 0, x = p.length; v < x; ++v) m.push(p.charCodeAt(v));
            p = m
        }
        r || (r = p.length);
        m = 0;
        if (0 == l)
            for (; m + 64 < r;) b(p.slice(m, m + 64)), m += 64, n += 64;
        for (; m < r;)
            if (f[l++] = p[m++], n++, 64 == l)
                for (l = 0, b(f); m + 64 < r;) b(p.slice(m, m + 64)), m += 64, n += 64
    }

    function d() {
        var p = [],
            r = 8 * n;
        56 > l ? c(h, 56 - l) : c(h, 64 - (l - 56));
        for (var m = 63; 56 <= m; m--) f[m] = r & 255, r >>>= 8;
        b(f);
        for (m = r = 0; 5 > m; m++)
            for (var v = 24; 0 <= v; v -= 8) p[r++] = e[m] >> v & 255;
        return p
    }
    for (var e = [], f = [], g = [], h = [128], k = 1; 64 > k; ++k) h[k] = 0;
    var l, n;
    a();
    return {
        reset: a,
        update: c,
        digest: d,
        ka: function() {
            for (var p = d(), r = "", m = 0; m < p.length; m++) r += "0123456789ABCDEF".charAt(Math.floor(p[m] / 16)) + "0123456789ABCDEF".charAt(p[m] % 16);
            return r
        }
    }
};

function Xb(a, b, c) {
    var d = String(q.location.href);
    return d && a && b ? [b, Yb(Ub(d), a, c || null)].join(" ") : null
}

function Yb(a, b, c) {
    var d = [],
        e = [];
    if (1 == (Array.isArray(c) ? 2 : 1)) return e = [b, a], qa(d, function(h) {
        e.push(h)
    }), Zb(e.join(" "));
    var f = [],
        g = [];
    qa(c, function(h) {
        g.push(h.key);
        f.push(h.value)
    });
    c = Math.floor((new Date).getTime() / 1E3);
    e = 0 == f.length ? [c, b, a] : [f.join(":"), c, b, a];
    qa(d, function(h) {
        e.push(h)
    });
    a = Zb(e.join(" "));
    a = [c, a];
    0 == g.length || a.push(g.join(""));
    return a.join("_")
}

function Zb(a) {
    var b = Wb();
    b.update(a);
    return b.ka().toLowerCase()
};
const $b = {};

function G() {
    this.h = document || {
        cookie: ""
    }
}
G.prototype.isEnabled = function() {
    if (!q.navigator.cookieEnabled) return !1;
    if (!this.isEmpty()) return !0;
    this.set("TESTCOOKIESENABLED", "1", {
        da: 60
    });
    if ("1" !== this.get("TESTCOOKIESENABLED")) return !1;
    this.remove("TESTCOOKIESENABLED");
    return !0
};
G.prototype.set = function(a, b, c) {
    let d, e, f, g = !1,
        h;
    "object" === typeof c && (h = c.Ka, g = c.La || !1, f = c.domain || void 0, e = c.path || void 0, d = c.da);
    if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
    if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
    void 0 === d && (d = -1);
    this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
};
G.prototype.get = function(a, b) {
    const c = a + "=",
        d = (this.h.cookie || "").split(";");
    for (let e = 0, f; e < d.length; e++) {
        f = Aa(d[e]);
        if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
        if (f == a) return ""
    }
    return b
};
G.prototype.remove = function(a, b, c) {
    const d = void 0 !== this.get(a);
    this.set(a, "", {
        da: 0,
        path: b,
        domain: c
    });
    return d
};
G.prototype.isEmpty = function() {
    return !this.h.cookie
};
G.prototype.clear = function() {
    var a = (this.h.cookie || "").split(";");
    const b = [],
        c = [];
    let d, e;
    for (let f = 0; f < a.length; f++) e = Aa(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    for (a = b.length - 1; 0 <= a; a--) this.remove(b[a])
};

function ac() {
    return !!$b.FPA_SAMESITE_PHASE2_MOD || !1
}

function bc(a, b, c, d) {
    (a = q[a]) || (a = (new G).get(b));
    return a ? Xb(a, c, d) : null
}

function cc() {
    var a = [],
        b = Ub(String(q.location.href));
    const c = [];
    var d = q.__SAPISID || q.__APISID || q.__3PSAPISID || q.__OVERRIDE_SID;
    ac() && (d = d || q.__1PSAPISID);
    if (d) var e = !0;
    else e = new G, d = e.get("SAPISID") || e.get("APISID") || e.get("__Secure-3PAPISID") || e.get("SID"), ac() && (d = d || e.get("__Secure-1PAPISID")), e = !!d;
    e && (d = (e = b = 0 == b.indexOf("https:") || 0 == b.indexOf("chrome-extension:") || 0 == b.indexOf("moz-extension:")) ? q.__SAPISID : q.__APISID, d || (d = new G, d = d.get(e ? "SAPISID" : "APISID") || d.get("__Secure-3PAPISID")),
        (e = d ? Xb(d, e ? "SAPISIDHASH" : "APISIDHASH", a) : null) && c.push(e), b && ac() && ((b = bc("__1PSAPISID", "__Secure-1PAPISID", "SAPISID1PHASH", a)) && c.push(b), (a = bc("__3PSAPISID", "__Secure-3PAPISID", "SAPISID3PHASH", a)) && c.push(a)));
    return 0 == c.length ? null : c.join(" ")
};
var dc = class {
    constructor(a, b) {
        this.j = a;
        this.l = b;
        this.i = 0;
        this.h = null
    }
    get() {
        let a;
        0 < this.i ? (this.i--, a = this.h, this.h = a.next, a.next = null) : a = this.j();
        return a
    }
    put(a) {
        this.l(a);
        100 > this.i && (this.i++, a.next = this.h, this.h = a)
    }
};

function ec(a) {
    q.setTimeout(() => {
        throw a;
    }, 0)
};
class fc {
    constructor() {
        this.i = this.h = null
    }
    add(a, b) {
        const c = gc.get();
        c.set(a, b);
        this.i ? this.i.next = c : this.h = c;
        this.i = c
    }
    remove() {
        let a = null;
        this.h && (a = this.h, this.h = this.h.next, this.h || (this.i = null), a.next = null);
        return a
    }
}
var gc = new dc(() => new hc, a => a.reset());
class hc {
    constructor() {
        this.next = this.scope = this.h = null
    }
    set(a, b) {
        this.h = a;
        this.scope = b;
        this.next = null
    }
    reset() {
        this.next = this.scope = this.h = null
    }
};

function ic(a, b) {
    jc || kc();
    lc || (jc(), lc = !0);
    mc.add(a, b)
}
var jc;

function kc() {
    var a = q.Promise.resolve(void 0);
    jc = function() {
        a.then(nc)
    }
}
var lc = !1,
    mc = new fc;

function nc() {
    for (var a; a = mc.remove();) {
        try {
            a.h.call(a.scope)
        } catch (b) {
            ec(b)
        }
        gc.put(a)
    }
    lc = !1
};

function oc(a) {
    var b = t("window.location.href");
    null == a && (a = 'Unknown Error of type "null/undefined"');
    if ("string" === typeof a) return {
        message: a,
        name: "Unknown error",
        lineNumber: "Not available",
        fileName: b,
        stack: "Not available"
    };
    var c = !1;
    try {
        var d = a.lineNumber || a.line || "Not available"
    } catch (g) {
        d = "Not available", c = !0
    }
    try {
        var e = a.fileName || a.filename || a.sourceURL || q.$googDebugFname || b
    } catch (g) {
        e = "Not available", c = !0
    }
    b = pc(a);
    if (!(!c && a.lineNumber && a.fileName && a.stack && a.message && a.name)) {
        c = a.message;
        if (null ==
            c) {
            if (a.constructor && a.constructor instanceof Function) {
                if (a.constructor.name) c = a.constructor.name;
                else if (c = a.constructor, qc[c]) c = qc[c];
                else {
                    c = String(c);
                    if (!qc[c]) {
                        var f = /function\s+([^\(]+)/m.exec(c);
                        qc[c] = f ? f[1] : "[Anonymous]"
                    }
                    c = qc[c]
                }
                c = 'Unknown Error of type "' + c + '"'
            } else c = "Unknown Error of unknown type";
            "function" === typeof a.toString && Object.prototype.toString !== a.toString && (c += ": " + a.toString())
        }
        return {
            message: c,
            name: a.name || "UnknownError",
            lineNumber: d,
            fileName: e,
            stack: b || "Not available"
        }
    }
    a.stack =
        b;
    return {
        message: a.message,
        name: a.name,
        lineNumber: a.lineNumber,
        fileName: a.fileName,
        stack: a.stack
    }
}

function pc(a, b) {
    b || (b = {});
    b[rc(a)] = !0;
    var c = a.stack || "";
    (a = a.ja) && !b[rc(a)] && (c += "\nCaused by: ", a.stack && 0 == a.stack.indexOf(a.toString()) || (c += "string" === typeof a ? a : a.message + "\n"), c += pc(a, b));
    return c
}

function rc(a) {
    var b = "";
    "function" === typeof a.toString && (b = "" + a);
    return b + a.stack
}
var qc = {};

function sc() {
    this.j = this.j;
    this.l = this.l
}
sc.prototype.j = !1;
sc.prototype.dispose = function() {
    this.j || (this.j = !0, this.B())
};
sc.prototype.B = function() {
    if (this.l)
        for (; this.l.length;) this.l.shift()()
};
var tc = q.JSON.stringify;
class uc {
    constructor() {
        this.promise = new Promise((a, b) => {
            this.reject = b
        })
    }
};

function H(a) {
    this.h = 0;
    this.B = void 0;
    this.l = this.i = this.j = null;
    this.m = this.o = !1;
    if (a != ea) try {
        var b = this;
        a.call(void 0, function(c) {
            vc(b, 2, c)
        }, function(c) {
            vc(b, 3, c)
        })
    } catch (c) {
        vc(this, 3, c)
    }
}

function wc() {
    this.next = this.context = this.onRejected = this.i = this.h = null;
    this.j = !1
}
wc.prototype.reset = function() {
    this.context = this.onRejected = this.i = this.h = null;
    this.j = !1
};
var xc = new dc(function() {
    return new wc
}, function(a) {
    a.reset()
});

function yc(a, b, c) {
    var d = xc.get();
    d.i = a;
    d.onRejected = b;
    d.context = c;
    return d
}

function zc(a) {
    if (a instanceof H) return a;
    var b = new H(ea);
    vc(b, 2, a);
    return b
}
H.prototype.then = function(a, b, c) {
    return Ac(this, "function" === typeof a ? a : null, "function" === typeof b ? b : null, c)
};
H.prototype.$goog_Thenable = !0;
H.prototype.cancel = function(a) {
    if (0 == this.h) {
        var b = new Bc(a);
        ic(function() {
            Cc(this, b)
        }, this)
    }
};

function Cc(a, b) {
    if (0 == a.h)
        if (a.j) {
            var c = a.j;
            if (c.i) {
                for (var d = 0, e = null, f = null, g = c.i; g && (g.j || (d++, g.h == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);
                e && (0 == c.h && 1 == d ? Cc(c, b) : (f ? (d = f, d.next == c.l && (c.l = d), d.next = d.next.next) : Dc(c), Ec(c, e, 3, b)))
            }
            a.j = null
        } else vc(a, 3, b)
}

function Fc(a, b) {
    a.i || 2 != a.h && 3 != a.h || Gc(a);
    a.l ? a.l.next = b : a.i = b;
    a.l = b
}

function Ac(a, b, c, d) {
    var e = yc(null, null, null);
    e.h = new H(function(f, g) {
        e.i = b ? function(h) {
            try {
                var k = b.call(d, h);
                f(k)
            } catch (l) {
                g(l)
            }
        } : f;
        e.onRejected = c ? function(h) {
            try {
                var k = c.call(d, h);
                void 0 === k && h instanceof Bc ? g(h) : f(k)
            } catch (l) {
                g(l)
            }
        } : g
    });
    e.h.j = a;
    Fc(a, e);
    return e.h
}
H.prototype.K = function(a) {
    this.h = 0;
    vc(this, 2, a)
};
H.prototype.N = function(a) {
    this.h = 0;
    vc(this, 3, a)
};

function vc(a, b, c) {
    if (0 == a.h) {
        a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
        a.h = 1;
        a: {
            var d = c,
                e = a.K,
                f = a.N;
            if (d instanceof H) {
                Fc(d, yc(e || ea, f || null, a));
                var g = !0
            } else {
                if (d) try {
                    var h = !!d.$goog_Thenable
                } catch (l) {
                    h = !1
                } else h = !1;
                if (h) d.then(e, f, a), g = !0;
                else {
                    if (ha(d)) try {
                        var k = d.then;
                        if ("function" === typeof k) {
                            Hc(d, k, e, f, a);
                            g = !0;
                            break a
                        }
                    } catch (l) {
                        f.call(a, l);
                        g = !0;
                        break a
                    }
                    g = !1
                }
            }
        }
        g || (a.B = c, a.h = b, a.j = null, Gc(a), 3 != b || c instanceof Bc || Ic(a, c))
    }
}

function Hc(a, b, c, d, e) {
    function f(k) {
        h || (h = !0, d.call(e, k))
    }

    function g(k) {
        h || (h = !0, c.call(e, k))
    }
    var h = !1;
    try {
        b.call(a, g, f)
    } catch (k) {
        f(k)
    }
}

function Gc(a) {
    a.o || (a.o = !0, ic(a.H, a))
}

function Dc(a) {
    var b = null;
    a.i && (b = a.i, a.i = b.next, b.next = null);
    a.i || (a.l = null);
    return b
}
H.prototype.H = function() {
    for (var a; a = Dc(this);) Ec(this, a, this.h, this.B);
    this.o = !1
};

function Ec(a, b, c, d) {
    if (3 == c && b.onRejected && !b.j)
        for (; a && a.m; a = a.j) a.m = !1;
    if (b.h) b.h.j = null, Jc(b, c, d);
    else try {
        b.j ? b.i.call(b.context) : Jc(b, c, d)
    } catch (e) {
        Kc.call(null, e)
    }
    xc.put(b)
}

function Jc(a, b, c) {
    2 == b ? a.i.call(a.context, c) : a.onRejected && a.onRejected.call(a.context, c)
}

function Ic(a, b) {
    a.m = !0;
    ic(function() {
        a.m && Kc.call(null, b)
    })
}
var Kc = ec;

function Bc(a) {
    oa.call(this, a)
}
la(Bc, oa);
Bc.prototype.name = "cancel";

function I(a) {
    sc.call(this);
    this.N = 1;
    this.m = [];
    this.o = 0;
    this.h = [];
    this.i = {};
    this.ha = !!a
}
la(I, sc);
I.prototype.subscribe = function(a, b, c) {
    var d = this.i[a];
    d || (d = this.i[a] = []);
    var e = this.N;
    this.h[e] = a;
    this.h[e + 1] = b;
    this.h[e + 2] = c;
    this.N = e + 3;
    d.push(e);
    return e
};
I.prototype.K = function(a) {
    var b = this.h[a];
    if (b) {
        var c = this.i[b];
        if (0 != this.o) this.m.push(a), this.h[a + 1] = ea;
        else {
            if (c) {
                const d = Array.prototype.indexOf.call(c, a, void 0);
                0 <= d && Array.prototype.splice.call(c, d, 1)
            }
            delete this.h[a];
            delete this.h[a + 1];
            delete this.h[a + 2]
        }
    }
    return !!b
};
I.prototype.H = function(a, b) {
    var c = this.i[a];
    if (c) {
        for (var d = Array(arguments.length - 1), e = 1, f = arguments.length; e < f; e++) d[e - 1] = arguments[e];
        if (this.ha)
            for (e = 0; e < c.length; e++) {
                var g = c[e];
                Lc(this.h[g + 1], this.h[g + 2], d)
            } else {
                this.o++;
                try {
                    for (e = 0, f = c.length; e < f && !this.j; e++) g = c[e], this.h[g + 1].apply(this.h[g + 2], d)
                } finally {
                    if (this.o--, 0 < this.m.length && 0 == this.o)
                        for (; c = this.m.pop();) this.K(c)
                }
            }
        return 0 != e
    }
    return !1
};

function Lc(a, b, c) {
    ic(function() {
        a.apply(b, c)
    })
}
I.prototype.clear = function(a) {
    if (a) {
        var b = this.i[a];
        b && (b.forEach(this.K, this), delete this.i[a])
    } else this.h.length = 0, this.i = {}
};
I.prototype.B = function() {
    I.xa.B.call(this);
    this.clear();
    this.m.length = 0
};
/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var Mc = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
var Nc = ["notification/convert_endpoint_to_url"],
    Oc = ["notification/record_interactions"],
    Pc = ["notification_registration/set_registration"];
var Qc = a => self.btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(a)))).replace(/\+/g, "-").replace(/\//g, "_");
var Rc = ["notifications_register", "notifications_check_registration"];
var J = class extends Error {
    constructor(a, ...b) {
        super(a);
        this.args = [...b]
    }
};
let Sc = null;

function K(a, b) {
    const c = {};
    c.key = a;
    c.value = b;
    return Tc().then(d => new Promise((e, f) => {
        try {
            const g = d.transaction("swpushnotificationsstore", "readwrite").objectStore("swpushnotificationsstore").put(c);
            g.onsuccess = () => {
                e()
            };
            g.onerror = () => {
                f()
            }
        } catch (g) {
            f(g)
        }
    }))
}

function Uc() {
    return K("IndexedDBCheck", "testing IndexedDB").then(() => L("IndexedDBCheck")).then(a => "testing IndexedDB" === a ? Promise.resolve() : Promise.reject()).then(() => !0).catch(() => !1)
}

function L(a) {
    const b = new J("Error accessing DB");
    return Tc().then(c => new Promise((d, e) => {
        try {
            const f = c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);
            f.onsuccess = () => {
                const g = f.result;
                d(g ? g.value : null)
            };
            f.onerror = () => {
                b.params = {
                    key: a,
                    source: "onerror"
                };
                e(b)
            }
        } catch (f) {
            b.params = {
                key: a,
                thrownError: String(f)
            }, e(b)
        }
    }), () => null)
}

function Tc() {
    return Sc ? Promise.resolve(Sc) : new Promise((a, b) => {
        const c = self.indexedDB.open("swpushnotificationsdb");
        c.onerror = b;
        c.onsuccess = () => {
            const d = c.result;
            if (d.objectStoreNames.contains("swpushnotificationsstore")) Sc = d, a(Sc);
            else return self.indexedDB.deleteDatabase("swpushnotificationsdb"), Tc()
        };
        c.onupgradeneeded = Vc
    })
}

function Vc(a) {
    a = a.target.result;
    a.objectStoreNames.contains("swpushnotificationsstore") && a.deleteObjectStore("swpushnotificationsstore");
    a.createObjectStore("swpushnotificationsstore", {
        keyPath: "key"
    })
};
const Wc = {
    ["WEB_UNPLUGGED"]: "^unplugged/",
    ["WEB_UNPLUGGED_ONBOARDING"]: "^unplugged/",
    ["WEB_UNPLUGGED_OPS"]: "^unplugged/",
    ["WEB_UNPLUGGED_PUBLIC"]: "^unplugged/",
    ["WEB_CREATOR"]: "^creator/",
    ["WEB_KIDS"]: "^kids/",
    ["WEB_EXPERIMENTS"]: "^experiments/",
    ["WEB_MUSIC"]: "^music/",
    ["WEB_REMIX"]: "^music/",
    ["WEB_MUSIC_EMBEDDED_PLAYER"]: "^music/",
    ["WEB_MUSIC_EMBEDDED_PLAYER"]: "^main_app/|^sfv/"
};

function Xc(a) {
    if (1 === a.length) return a[0];
    var b = Wc.UNKNOWN_INTERFACE;
    if (b) {
        b = new RegExp(b);
        for (var c of a)
            if (b.exec(c)) return c
    }
    const d = [];
    Object.entries(Wc).forEach(([e, f]) => {
        "UNKNOWN_INTERFACE" !== e && d.push(f)
    });
    c = new RegExp(d.join("|"));
    a.sort((e, f) => e.length - f.length);
    for (const e of a)
        if (!c.exec(e)) return e;
    return a[0]
}

function Yc(a) {
    return `/youtubei/v1/${Xc(a)}`
};
var Zc = class extends D {
    constructor(a) {
        super(a)
    }
};
var $c = class extends D {
    constructor(a) {
        super(a)
    }
};
$c.ea = "yt.sw.adr";
var cd = class extends D {
        constructor() {
            super(ad, 92, bd)
        }
    },
    bd = [82];
var dd, ed, fd;
const M = q.window,
    N = (null === (dd = null === M || void 0 === M ? void 0 : M.yt) || void 0 === dd ? void 0 : dd.config_) || (null === (ed = null === M || void 0 === M ? void 0 : M.ytcfg) || void 0 === ed ? void 0 : ed.data_) || {},
    ad = (null === (fd = null === M || void 0 === M ? void 0 : M.ytcfg) || void 0 === fd ? void 0 : fd.obfuscatedData_) || [];
new cd;
u("yt.config_", N);
u("yt.configJspb_", ad);

function O(...a) {
    a = arguments;
    1 < a.length ? N[a[0]] = a[1] : 1 === a.length && Object.assign(N, a[0])
}

function Q(a, b) {
    return a in N ? N[a] : b
};

function R(a) {
    a = gd(a);
    return "string" === typeof a && "false" === a ? !1 : !!a
}

function hd(a, b) {
    a = gd(a);
    return void 0 === a && void 0 !== b ? b : Number(a || 0)
}

function gd(a) {
    const b = Q("EXPERIMENTS_FORCED_FLAGS", {});
    return void 0 !== b[a] ? b[a] : Q("EXPERIMENT_FLAGS", {})[a]
};
var id = {
        appSettingsCaptured: !0,
        foregroundHeartbeat: !0,
        foregroundHeartbeatScreenAssociated: !0,
        screenCreated: !0,
        visualElementAttached: !0,
        visualElementGestured: !0,
        visualElementHidden: !0,
        visualElementShown: !0,
        flowEvent: !0,
        visualElementStateChanged: !0,
        playbackAssociated: !0,
        youThere: !0,
        accountStateChangeSignedIn: !0,
        accountStateChangeSignedOut: !0
    },
    jd = {
        latencyActionBaselined: !0,
        latencyActionInfo: !0,
        latencyActionTicked: !0,
        bedrockRepetitiveActionTimed: !0,
        adsClientStateChange: !0,
        streamzIncremented: !0,
        mdxDialAdditionalDataUpdateEvent: !0,
        tvhtml5WatchKeyEvent: !0,
        tvhtml5VideoSeek: !0,
        tokenRefreshEvent: !0,
        adNotify: !0,
        adNotifyFilled: !0,
        tvhtml5LaunchUrlComponentChanged: !0,
        bedrockResourceConsumptionSnapshot: !0,
        deviceStartupMetrics: !0,
        mdxSignIn: !0,
        tvhtml5KeyboardLogging: !0,
        tvhtml5StartupSoundEvent: !0,
        tvhtml5LiveChatStatus: !0,
        tvhtml5DeviceStorageStatus: !0,
        tvhtml5LocalStorage: !0,
        directSignInEvent: !0,
        finalPayload: !0,
        tvhtml5SearchCompleted: !0,
        tvhtml5KeyboardPerformance: !0,
        adNotifyFailure: !0,
        latencyActionSpan: !0,
        tvhtml5AccountDialogOpened: !0,
        tvhtml5ApiTest: !0
    };
let kd = 0;
u("ytDomDomGetNextId", t("ytDomDomGetNextId") || (() => ++kd));
const ld = [];

function md(a) {
    ld.forEach(b => b(a))
}

function nd(a) {
    return a && window.yterr ? function() {
        try {
            return a.apply(this, arguments)
        } catch (b) {
            od(b)
        }
    } : a
}

function od(a) {
    var b = t("yt.logging.errors.log");
    b ? b(a, "ERROR", void 0, void 0, void 0) : (b = Q("ERRORS", []), b.push([a, "ERROR", void 0, void 0, void 0]), O("ERRORS", b));
    md(a)
}

function pd(a) {
    var b = t("yt.logging.errors.log");
    b ? b(a, "WARNING", void 0, void 0, void 0) : (b = Q("ERRORS", []), b.push([a, "WARNING", void 0, void 0, void 0]), O("ERRORS", b))
};
u("ytEventsEventsListeners", q.ytEventsEventsListeners || {});
u("ytEventsEventsCounter", q.ytEventsEventsCounter || {
    count: 0
});

function qd(a, b) {
    "function" === typeof a && (a = nd(a));
    return window.setTimeout(a, b)
};

function rd(a) {
    {
        var b = 5E3;
        void 0 !== b && Number.isNaN(Number(b)) && (b = void 0);
        const c = t("yt.scheduler.instance.addJob");
        c ? a = c(a, 0, b) : void 0 === b ? (a(), a = NaN) : a = qd(a, b || 0)
    }
    return a
}
var sd = class {};
var td = class extends sd {
    start() {
        const a = t("yt.scheduler.instance.start");
        a && a()
    }
};
td.h || (td.h = new td);
const ud = /^[\w.]*$/,
    vd = {
        q: !0,
        search_query: !0
    };

function wd(a, b) {
    b = a.split(b);
    const c = {};
    for (let f = 0, g = b.length; f < g; f++) {
        const h = b[f].split("=");
        if (1 == h.length && h[0] || 2 == h.length) try {
            const k = xd(h[0] || ""),
                l = xd(h[1] || "");
            k in c ? Array.isArray(c[k]) ? sa(c[k], l) : c[k] = [c[k], l] : c[k] = l
        } catch (k) {
            var d = k,
                e = h[0];
            const l = String(wd);
            d.args = [{
                key: e,
                value: h[1],
                query: a,
                method: yd == l ? "unchanged" : l
            }];
            vd.hasOwnProperty(e) || pd(d)
        }
    }
    return c
}
const yd = String(wd);

function zd(a) {
    "?" == a.charAt(0) && (a = a.substr(1));
    return wd(a, "&")
}

function Ad(a, b, c) {
    var d = a.split("#", 2);
    a = d[0];
    d = 1 < d.length ? "#" + d[1] : "";
    var e = a.split("?", 2);
    a = e[0];
    e = zd(e[1] || "");
    for (var f in b) !c && null !== e && f in e || (e[f] = b[f]);
    b = a;
    a = Va(e);
    a ? (c = b.indexOf("#"), 0 > c && (c = b.length), f = b.indexOf("?"), 0 > f || f > c ? (f = c, e = "") : e = b.substring(f + 1, c), b = [b.substr(0, f), e, b.substr(c)], c = b[1], b[1] = a ? c ? c + "&" + a : a : c, a = b[0] + (b[1] ? "?" + b[1] : "") + b[2]) : a = b;
    return a + d
}

function Bd(a) {
    if (!b) var b = window.location.href;
    const c = B(1, a),
        d = A(B(3, a));
    c && d ? (a = a.match(Ta), b = b.match(Ta), a = a[3] == b[3] && a[1] == b[1] && a[4] == b[4]) : a = d ? A(B(3, b)) == d && (Number(B(4, b)) || null) == (Number(B(4, a)) || null) : !0;
    return a
}

function xd(a) {
    return a && a.match(ud) ? a : decodeURIComponent(a.replace(/\+/g, " "))
};
const Cd = "XMLHttpRequest" in q ? () => new XMLHttpRequest : null;

function Dd() {
    if (!Cd) return null;
    const a = Cd();
    return "open" in a ? a : null
};
const Ed = {
        Authorization: "AUTHORIZATION",
        "X-Goog-Visitor-Id": "SANDBOXED_VISITOR_ID",
        "X-Youtube-Domain-Admin-State": "DOMAIN_ADMIN_STATE",
        "X-Youtube-Chrome-Connected": "CHROME_CONNECTED_HEADER",
        "X-YouTube-Client-Name": "INNERTUBE_CONTEXT_CLIENT_NAME",
        "X-YouTube-Client-Version": "INNERTUBE_CONTEXT_CLIENT_VERSION",
        "X-YouTube-Delegation-Context": "INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT",
        "X-YouTube-Device": "DEVICE",
        "X-Youtube-Identity-Token": "ID_TOKEN",
        "X-YouTube-Page-CL": "PAGE_CL",
        "X-YouTube-Page-Label": "PAGE_BUILD_LABEL",
        "X-YouTube-Variants-Checksum": "VARIANTS_CHECKSUM"
    },
    Fd = ["app", "debugcss", "debugjs", "expflag", "force_ad_params", "force_ad_encrypted", "force_viral_ad_response_params", "forced_experiments", "innertube_snapshots", "innertube_goldens", "internalcountrycode", "internalipoverride", "absolute_experiments", "conditional_experiments", "sbb", "sr_bns_address", ...Vb];
let Gd = !1;

function Hd(a, b) {
    b = void 0 === b ? {} : b;
    const c = Bd(a),
        d = R("web_ajax_ignore_global_headers_if_set");
    for (let e in Ed) {
        const f = Q(Ed[e]);
        !f || !c && A(B(3, a)) || d && void 0 !== b[e] || (b[e] = f)
    }
    if (c || !A(B(3, a))) b["X-YouTube-Utc-Offset"] = String(-(new Date).getTimezoneOffset());
    if (c || !A(B(3, a))) {
        let e;
        try {
            e = (new Intl.DateTimeFormat).resolvedOptions().timeZone
        } catch (f) {}
        e && (b["X-YouTube-Time-Zone"] = e)
    }
    return b
}

function Id(a) {
    var b = window.location.search,
        c = A(B(3, a));
    R("debug_handle_relative_url_for_query_forward_killswitch") || c || !Bd(a) || (c = document.location.hostname);
    var d = A(B(5, a));
    d = (c = c && (c.endsWith("youtube.com") || c.endsWith("youtube-nocookie.com"))) && d && d.startsWith("/api/");
    if (!c || d) return a;
    const e = zd(b),
        f = {};
    qa(Fd, g => {
        e[g] && (f[g] = e[g])
    });
    return Ad(a, f || {}, !1)
}

function Jd(a, b) {
    const c = {
        method: b.method || "GET",
        credentials: "same-origin"
    };
    b.headers && (c.headers = b.headers);
    a = Kd(a, b);
    const d = Ld(a, b);
    d && (c.body = d);
    b.withCredentials && (c.credentials = "include");
    const e = b.context || q;
    let f = !1,
        g;
    fetch(a, c).then(h => {
        if (!f) {
            f = !0;
            g && window.clearTimeout(g);
            var k = h.ok,
                l = n => {
                    n = n || {};
                    k ? b.onSuccess && b.onSuccess.call(e, n, h) : b.onError && b.onError.call(e, n, h);
                    b.onFinish && b.onFinish.call(e, n, h)
                };
            "JSON" == (b.format || "JSON") && (k || 400 <= h.status && 500 > h.status) ? h.json().then(l, function() {
                l(null)
            }): l(null)
        }
    }).catch(() => {
        b.onError && b.onError.call(e, {}, {})
    });
    b.onFetchTimeout && 0 < b.timeout && (g = qd(() => {
        f || (f = !0, window.clearTimeout(g), b.onFetchTimeout.call(b.context || q))
    }, b.timeout))
}

function Kd(a, b) {
    b.includeDomain && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
    const c = Q("XSRF_FIELD_NAME", void 0);
    if (b = b.urlParams) b[c] && delete b[c], a = Ad(a, b || {}, !0);
    return a
}

function Ld(a, b) {
    const c = Q("XSRF_FIELD_NAME", void 0),
        d = Q("XSRF_TOKEN", void 0);
    var e = b.postBody || "",
        f = b.postParams;
    const g = Q("XSRF_FIELD_NAME", void 0);
    let h;
    b.headers && (h = b.headers["Content-Type"]);
    b.excludeXsrf || A(B(3, a)) && !b.withCredentials && A(B(3, a)) != document.location.hostname || "POST" != b.method || h && "application/x-www-form-urlencoded" != h || b.postParams && b.postParams[g] || (f || (f = {}), f[c] = d);
    f && "string" === typeof e && (e = zd(e), wa(e, f), e = b.postBodyFormat && "JSON" == b.postBodyFormat ? JSON.stringify(e) : Va(e));
    if (!(a = e) && (a = f)) {
        a: {
            for (const k in f) {
                f = !1;
                break a
            }
            f = !0
        }
        a = !f
    }!Gd && a && "POST" != b.method && (Gd = !0, od(Error("AJAX request with postData should use POST")));
    return e
}

function Md(a, b, c, d, e) {
    c = void 0 === c ? "GET" : c;
    d = void 0 === d ? "" : d;
    const f = Dd();
    if (f) {
        var g = () => {
            4 == (f && "readyState" in f ? f.readyState : 0) && b && nd(b)(f)
        };
        "onloadend" in f ? f.addEventListener("loadend", g, !1) : f.onreadystatechange = g;
        R("debug_forward_web_query_parameters") && (a = Id(a));
        f.open(c, a, !0);
        c = "POST" == c && (void 0 === window.FormData || !(d instanceof FormData));
        if (e = Hd(a, e))
            for (let h in e) f.setRequestHeader(h, e[h]), "content-type" == h.toLowerCase() && (c = !1);
        c && f.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        f.send(d)
    }
};
const Nd = {};
let Od = 0;

function Pd(a, b, c, d, e = "") {
    if (a)
        if (!c || Oa && 0 <= Oa.toLowerCase().indexOf("cobalt"))
            if (e) Md(a, b, "POST", e, d);
            else if (Q("USE_NET_AJAX_FOR_PING_TRANSPORT", !1) || d) Md(a, b, "GET", "", d);
    else {
        b: {
            try {
                var f = new pa({
                    url: a
                });
                if (f.j && f.i || f.l) {
                    const v = A(B(5, a));
                    var g;
                    if (!(g = !v || !v.endsWith("/aclk"))) {
                        var h = a.search(Wa);
                        d: {
                            for (c = 0; 0 <= (c = a.indexOf("ri", c)) && c < h;) {
                                var k = a.charCodeAt(c - 1);
                                if (38 == k || 63 == k) {
                                    var l = a.charCodeAt(c + 2);
                                    if (!l || 61 == l || 38 == l || 35 == l) {
                                        var n = c;
                                        break d
                                    }
                                }
                                c += 3
                            }
                            n = -1
                        }
                        if (0 > n) var p = null;
                        else {
                            var r = a.indexOf("&",
                                n);
                            if (0 > r || r > h) r = h;
                            n += 3;
                            p = decodeURIComponent(a.substr(n, r - n).replace(/\+/g, " "))
                        }
                        g = "1" !== p
                    }
                    var m = !g;
                    break b
                }
            } catch (v) {}
            m = !1
        }
        m ? Qd(a) ? (b && b(), m = !0) : m = !1 : m = !1;m || Rd(a, b)
    }
    else if (a) {
        a instanceof y || (a = "object" == typeof a && a.M ? a.L() : String(a), La.test(a) ? a = new y(a, Ia) : (a = String(a), a = a.replace(/(%0A|%0D)/g, ""), a = (b = a.match(Ka)) && Ja.test(b[1]) ? new y(a, Ia) : null));
        a = a || Ma;
        a = a instanceof y && a.constructor === y ? a.h : "type_error:SafeUrl";
        if ("about:invalid#zClosurez" === a || a.startsWith("data")) a = "";
        else {
            if (!(a instanceof Sa)) {
                m = "object" == typeof a;
                b = null;
                m && a.j && (b = a.i());
                a = m && a.M ? a.L() : String(a);
                Ha.test(a) && (-1 != a.indexOf("&") && (a = a.replace(Ba, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(Ca, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(Da, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(Ea, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(Fa, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(Ga, "&#0;")));
                if (void 0 === xa)
                    if (m = null, (g = q.trustedTypes) && g.createPolicy) {
                        try {
                            m = g.createPolicy("goog#html", {
                                createHTML: na,
                                createScript: na,
                                createScriptURL: na
                            })
                        } catch (v) {
                            q.console &&
                                q.console.error(v.message)
                        }
                        xa = m
                    } else xa = m;
                a = (m = xa) ? m.createHTML(a) : a;
                a = new Sa(a, b, Ra)
            }
            a = encodeURIComponent(String(tc((a instanceof Sa && a.constructor === Sa ? a.h : "type_error:SafeHtml").toString())))
        }
        /^[\s\xa0]*$/.test(a) || (a = Sb("IFRAME", {
            src: `javascript:"<body><img src=\\""+${a}+"\\"></body>"`,
            style: "display:none"
        }), (9 == a.nodeType ? a : a.ownerDocument || a.document).body.appendChild(a))
    }
}

function Qd(a, b = "") {
    try {
        if (window.navigator && window.navigator.sendBeacon && window.navigator.sendBeacon(a, b)) return !0
    } catch (c) {}
    return !1
}

function Rd(a, b) {
    const c = new Image,
        d = "" + Od++;
    Nd[d] = c;
    c.onload = c.onerror = () => {
        b && Nd[d] && b();
        delete Nd[d]
    };
    c.src = a
};
q.ytPubsubPubsubInstance || new I;
const S = window;
var T = S.ytcsi && S.ytcsi.now ? S.ytcsi.now : S.performance && S.performance.timing && S.performance.now && S.performance.timing.navigationStart ? () => S.performance.timing.navigationStart + S.performance.now() : () => (new Date).getTime();
const Sd = hd("initial_gel_batch_timeout", 2E3),
    Td = Math.pow(2, 16) - 1;
let Ud = void 0,
    Vd = 0,
    Wd = 0,
    Xd = 0,
    Yd = !0;
const Zd = q.ytLoggingTransportGELQueue_ || new Map,
    $d = q.ytLoggingTransportTokensToCttTargetIds_ || {};

function ae(a, b) {
    if ("log_event" === a.endpoint) {
        var c = "";
        a.S ? c = "visitorOnlyApprovedKey" : a.cttAuthInfo && ($d[a.cttAuthInfo.token] = be(a.cttAuthInfo), c = a.cttAuthInfo.token);
        var d = Zd.get(c) || [];
        Zd.set(c, d);
        d.push(a.payload);
        b && (Ud = new b);
        a = hd("tvhtml5_logging_max_batch") || hd("web_logging_max_batch") || 100;
        b = T();
        d.length >= a ? ce({
            writeThenSend: !0
        }, R("flush_only_full_queue") ? c : void 0) : 10 <= b - Xd && (de(), Xd = b)
    }
}

function ee(a, b) {
    if ("log_event" === a.endpoint) {
        var c = "";
        a.S ? c = "visitorOnlyApprovedKey" : a.cttAuthInfo && ($d[a.cttAuthInfo.token] = be(a.cttAuthInfo), c = a.cttAuthInfo.token);
        var d = new Map;
        d.set(c, [a.payload]);
        b && (Ud = new b);
        return new H(e => {
            Ud && Ud.isReady() ? fe(d, e, {
                bypassNetworkless: !0
            }, !0) : e()
        })
    }
}

function ce(a = {}, b) {
    new H(c => {
        window.clearTimeout(Vd);
        window.clearTimeout(Wd);
        Wd = 0;
        if (Ud && Ud.isReady())
            if (void 0 !== b) {
                const d = new Map,
                    e = Zd.get(b) || [];
                d.set(b, e);
                fe(d, c, a);
                Zd.delete(b)
            } else fe(Zd, c, a), Zd.clear();
        else de(), c()
    })
}

function de() {
    R("web_gel_timeout_cap") && !Wd && (Wd = qd(() => {
        ce({
            writeThenSend: !0
        })
    }, 6E4));
    window.clearTimeout(Vd);
    let a = Q("LOGGING_BATCH_TIMEOUT", hd("web_gel_debounce_ms", 1E4));
    R("shorten_initial_gel_batch_timeout") && Yd && (a = Sd);
    Vd = qd(() => {
        ce({
            writeThenSend: !0
        })
    }, a)
}

function fe(a, b, c = {}, d) {
    var e = Ud;
    const f = Math.round(T());
    let g = a.size;
    for (const [l, n] of a) {
        var h = l,
            k = n;
        a = ua({
            context: ge(e.config_ || he())
        });
        a.events = k;
        (k = $d[h]) && ie(a, h, k);
        delete $d[h];
        h = "visitorOnlyApprovedKey" === h;
        je(a, f, h);
        R("always_send_and_write") && (c.writeThenSend = !1);
        ke(e, a, {
            retry: !0,
            onSuccess: () => {
                g--;
                g || b()
            },
            onError: () => {
                g--;
                g || b()
            },
            Ga: c,
            S: h,
            Da: !!d
        });
        Yd = !1
    }
}

function je(a, b, c) {
    a.requestTimeMs = String(b);
    R("unsplit_gel_payloads_in_logs") && (a.unsplitGelPayloadsInLogs = !0);
    !c && (b = Q("EVENT_ID", void 0)) && ((c = Q("BATCH_CLIENT_COUNTER", void 0) || 0) || (c = Math.floor(Math.random() * Td / 2)), c++, c > Td && (c = 1), O("BATCH_CLIENT_COUNTER", c), a.serializedClientEventId = {
        serializedEventId: b,
        clientCounter: String(c)
    })
}

function ie(a, b, c) {
    let d;
    if (c.videoId) d = "VIDEO";
    else if (c.playlistId) d = "PLAYLIST";
    else return;
    a.credentialTransferTokenTargetId = c;
    a.context = a.context || {};
    a.context.user = a.context.user || {};
    a.context.user.credentialTransferTokens = [{
        token: b,
        scope: d
    }]
}

function be(a) {
    const b = {};
    a.videoId ? b.videoId = a.videoId : a.playlistId && (b.playlistId = a.playlistId);
    return b
};
const le = q.ytLoggingGelSequenceIdObj_ || {};

function me(a, b, c, d = {}) {
    if (R("lr_drop_other_and_business_payloads")) {
        if (jd[a] || id[a]) return
    } else if (R("lr_drop_other_payloads") && jd[a]) return;
    const e = {},
        f = Math.round(d.timestamp || T());
    e.eventTimeMs = f < Number.MAX_SAFE_INTEGER ? f : 0;
    e[a] = b;
    a = t("_lact", window);
    a = null == a ? -1 : Math.max(Date.now() - a, 0);
    e.context = {
        lastActivityMs: String(d.timestamp || !isFinite(a) ? -1 : a)
    };
    R("log_sequence_info_on_gel_web") && d.ga && (a = e.context, b = d.ga, le[b] = b in le ? le[b] + 1 : 0, a.sequence = {
        index: le[b],
        groupKey: b
    }, d.Fa && delete le[d.ga]);
    (d.Ma ? ee : ae)({
        endpoint: "log_event",
        payload: e,
        cttAuthInfo: d.cttAuthInfo,
        S: d.S
    }, c)
};

function ne() {
    if (!q.matchMedia) return "WEB_DISPLAY_MODE_UNKNOWN";
    try {
        return q.matchMedia("(display-mode: standalone)").matches ? "WEB_DISPLAY_MODE_STANDALONE" : q.matchMedia("(display-mode: minimal-ui)").matches ? "WEB_DISPLAY_MODE_MINIMAL_UI" : q.matchMedia("(display-mode: fullscreen)").matches ? "WEB_DISPLAY_MODE_FULLSCREEN" : q.matchMedia("(display-mode: browser)").matches ? "WEB_DISPLAY_MODE_BROWSER" : "WEB_DISPLAY_MODE_UNKNOWN"
    } catch (a) {
        return "WEB_DISPLAY_MODE_UNKNOWN"
    }
};
u("ytglobal.prefsUserPrefsPrefs_", t("ytglobal.prefsUserPrefsPrefs_") || {});
const oe = {
        bluetooth: "CONN_DISCO",
        cellular: "CONN_CELLULAR_UNKNOWN",
        ethernet: "CONN_WIFI",
        none: "CONN_NONE",
        wifi: "CONN_WIFI",
        wimax: "CONN_CELLULAR_4G",
        other: "CONN_UNKNOWN",
        unknown: "CONN_UNKNOWN",
        "slow-2g": "CONN_CELLULAR_2G",
        "2g": "CONN_CELLULAR_2G",
        "3g": "CONN_CELLULAR_3G",
        "4g": "CONN_CELLULAR_4G"
    },
    pe = {
        "slow-2g": "EFFECTIVE_CONNECTION_TYPE_SLOW_2G",
        "2g": "EFFECTIVE_CONNECTION_TYPE_2G",
        "3g": "EFFECTIVE_CONNECTION_TYPE_3G",
        "4g": "EFFECTIVE_CONNECTION_TYPE_4G"
    };

function qe() {
    const a = q.navigator;
    return a ? a.connection : void 0
};

function re() {
    return "INNERTUBE_API_KEY" in N && "INNERTUBE_API_VERSION" in N
}

function he() {
    return {
        innertubeApiKey: Q("INNERTUBE_API_KEY", void 0),
        innertubeApiVersion: Q("INNERTUBE_API_VERSION", void 0),
        la: Q("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),
        ma: Q("INNERTUBE_CONTEXT_CLIENT_NAME", "WEB"),
        innertubeContextClientVersion: Q("INNERTUBE_CONTEXT_CLIENT_VERSION", void 0),
        oa: Q("INNERTUBE_CONTEXT_HL", void 0),
        na: Q("INNERTUBE_CONTEXT_GL", void 0),
        pa: Q("INNERTUBE_HOST_OVERRIDE", void 0) || "",
        ra: !!Q("INNERTUBE_USE_THIRD_PARTY_AUTH", !1),
        qa: !!Q("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT", !1),
        appInstallData: Q("SERIALIZED_CLIENT_CONFIG_DATA", void 0)
    }
}

function ge(a) {
    const b = {
        client: {
            hl: a.oa,
            gl: a.na,
            clientName: a.ma,
            clientVersion: a.innertubeContextClientVersion,
            configInfo: a.la
        }
    };
    navigator.userAgent && (b.client.userAgent = String(navigator.userAgent));
    var c = q.devicePixelRatio;
    c && 1 != c && (b.client.screenDensityFloat = String(c));
    c = Q("EXPERIMENTS_TOKEN", "");
    "" !== c && (b.client.experimentsToken = c);
    c = [];
    const d = Q("EXPERIMENTS_FORCED_FLAGS", {});
    for (var e in d) c.push({
        key: e,
        value: String(d[e])
    });
    e = Q("EXPERIMENT_FLAGS", {});
    for (var f in e) f.startsWith("force_") && void 0 ===
        d[f] && c.push({
            key: f,
            value: String(e[f])
        });
    0 < c.length && (b.request = {
        internalExperimentFlags: c
    });
    f = b.client.clientName;
    if ("WEB" === f || "MWEB" === f || 1 === f || 2 === f) {
        if (!R("web_include_display_mode_killswitch")) {
            var g;
            b.client.mainAppWebInfo = null != (g = b.client.mainAppWebInfo) ? g : {};
            b.client.mainAppWebInfo.webDisplayMode = ne()
        }
    } else if (g = b.client.clientName, ("WEB_REMIX" === g || 76 === g) && !R("music_web_display_mode_killswitch")) {
        var h;
        b.client.fa = null != (h = b.client.fa) ? h : {};
        b.client.fa.webDisplayMode = ne()
    }
    a.appInstallData &&
        (b.client.configInfo = b.client.configInfo || {}, b.client.configInfo.appInstallData = a.appInstallData);
    Q("DELEGATED_SESSION_ID") && !R("pageid_as_header_web") && (b.user = {
        onBehalfOfUser: Q("DELEGATED_SESSION_ID")
    });
    a: {
        if (h = qe()) {
            a = oe[h.type || "unknown"] || "CONN_UNKNOWN";
            h = oe[h.effectiveType || "unknown"] || "CONN_UNKNOWN";
            "CONN_CELLULAR_UNKNOWN" === a && "CONN_UNKNOWN" !== h && (a = h);
            if ("CONN_UNKNOWN" !== a) break a;
            if ("CONN_UNKNOWN" !== h) {
                a = h;
                break a
            }
        }
        a = void 0
    }
    a && (b.client.connectionType = a);
    R("web_log_effective_connection_type") &&
        (a = qe(), a = null !== a && void 0 !== a && a.effectiveType ? pe.hasOwnProperty(a.effectiveType) ? pe[a.effectiveType] : "EFFECTIVE_CONNECTION_TYPE_UNKNOWN" : void 0, a && (b.client.effectiveConnectionType = a));
    a = Object;
    h = a.assign;
    g = b.client;
    e = Q("DEVICE", "");
    f = {};
    for (const [k, l] of Object.entries(zd(e))) e = k, c = l, "cbrand" === e ? f.deviceMake = c : "cmodel" === e ? f.deviceModel = c : "cbr" === e ? f.browserName = c : "cbrver" === e ? f.browserVersion = c : "cos" === e ? f.osName = c : "cosver" === e ? f.osVersion = c : "cplatform" === e && (f.platform = c);
    b.client = h.call(a,
        g, f);
    return b
}

function se(a, b, c) {
    c = void 0 === c ? {} : c;
    const d = {
        "X-Goog-Visitor-Id": c.visitorData || Q("VISITOR_DATA", "")
    };
    if (b && b.includes("www.youtube-nocookie.com")) return d;
    (b = c.Ba || Q("AUTHORIZATION")) || (a ? b = `Bearer ${t("gapi.auth.getToken")().Aa}` : b = cc());
    b && (d.Authorization = b, d["X-Goog-AuthUser"] = Q("SESSION_INDEX", 0), R("pageid_as_header_web") && (d["X-Goog-PageId"] = Q("DELEGATED_SESSION_ID")));
    return d
};
const U = [];
let te, ue = !1;

function ve(a) {
    ue || (te ? te.handleError(a) : (U.push({
        type: "ERROR",
        payload: a
    }), 10 < U.length && U.shift()))
}

function we(a, b) {
    ue || (te ? te.T(a, b) : (U.push({
        type: "EVENT",
        eventType: a,
        payload: b
    }), 10 < U.length && U.shift()))
};

function xe() {
    if (void 0 !== Q("DATASYNC_ID", void 0)) return Q("DATASYNC_ID", void 0);
    throw new J("Datasync ID not set", "unknown");
};

function ye(a) {
    if (0 <= a.indexOf(":")) throw Error("Database name cannot contain ':'");
}

function ze(a) {
    return a.substr(0, a.indexOf(":")) || a
};
const Ae = {
        ["AUTH_INVALID"]: "No user identifier specified.",
        ["EXPLICIT_ABORT"]: "Transaction was explicitly aborted.",
        ["IDB_NOT_SUPPORTED"]: "IndexedDB is not supported.",
        ["MISSING_INDEX"]: "Index not created.",
        ["MISSING_OBJECT_STORE"]: "Object store not created.",
        ["DB_DELETED_BY_MISSING_OBJECT_STORE"]: "Database is deleted because an expected object store was not created.",
        ["UNKNOWN_ABORT"]: "Transaction was aborted for unknown reasons.",
        ["QUOTA_EXCEEDED"]: "The current transaction exceeded its quota limitations.",
        ["QUOTA_MAYBE_EXCEEDED"]: "The current transaction may have failed because of exceeding quota limitations.",
        ["EXECUTE_TRANSACTION_ON_CLOSED_DB"]: "Can't start a transaction on a closed database",
        ["INCOMPATIBLE_DB_VERSION"]: "The binary is incompatible with the database version"
    },
    Be = {
        ["AUTH_INVALID"]: "ERROR",
        ["EXECUTE_TRANSACTION_ON_CLOSED_DB"]: "WARNING",
        ["EXPLICIT_ABORT"]: "IGNORED",
        ["IDB_NOT_SUPPORTED"]: "ERROR",
        ["MISSING_INDEX"]: "WARNING",
        ["MISSING_OBJECT_STORE"]: "ERROR",
        ["DB_DELETED_BY_MISSING_OBJECT_STORE"]: "WARNING",
        ["QUOTA_EXCEEDED"]: "WARNING",
        ["QUOTA_MAYBE_EXCEEDED"]: "WARNING",
        ["UNKNOWN_ABORT"]: "WARNING",
        ["INCOMPATIBLE_DB_VERSION"]: "WARNING"
    },
    Ce = {
        ["AUTH_INVALID"]: !1,
        ["EXECUTE_TRANSACTION_ON_CLOSED_DB"]: !1,
        ["EXPLICIT_ABORT"]: !1,
        ["IDB_NOT_SUPPORTED"]: !1,
        ["MISSING_INDEX"]: !1,
        ["MISSING_OBJECT_STORE"]: !1,
        ["DB_DELETED_BY_MISSING_OBJECT_STORE"]: !1,
        ["QUOTA_EXCEEDED"]: !1,
        ["QUOTA_MAYBE_EXCEEDED"]: !0,
        ["UNKNOWN_ABORT"]: !0,
        ["INCOMPATIBLE_DB_VERSION"]: !1
    };
var V = class extends J {
        constructor(a, b = {}, c = Ae[a], d = Be[a], e = Ce[a]) {
            super(c, Object.assign({
                name: "YtIdbKnownError",
                isSw: void 0 === self.document,
                isIframe: self !== self.top,
                type: a
            }, b));
            this.type = a;
            this.message = c;
            this.level = d;
            this.h = e;
            Object.setPrototypeOf(this, V.prototype)
        }
    },
    De = class extends V {
        constructor(a) {
            super("MISSING_OBJECT_STORE", {
                ta: a
            }, Ae.MISSING_OBJECT_STORE);
            Object.setPrototypeOf(this, De.prototype)
        }
    },
    Ee = class extends Error {
        constructor(a, b) {
            super();
            this.index = a;
            this.objectStore = b;
            Object.setPrototypeOf(this,
                Ee.prototype)
        }
    };
const Fe = ["The database connection is closing", "Can't start a transaction on a closed database", "A mutation operation was attempted on a database that did not allow mutations"];

function Ge(a, b, c, d) {
    b = ze(b);
    let e;
    e = a instanceof Error ? a : Error(`Unexpected error: ${a}`);
    if (e instanceof V) return e;
    a = {
        objectStoreNames: c,
        dbName: b,
        dbVersion: d
    };
    if ("QuotaExceededError" === e.name) return new V("QUOTA_EXCEEDED", a);
    if ($a && "UnknownError" === e.name) return new V("QUOTA_MAYBE_EXCEEDED", a);
    if (e instanceof Ee) return new V("MISSING_INDEX", Object.assign(Object.assign({}, a), {
        objectStore: e.objectStore,
        index: e.index
    }));
    if ("InvalidStateError" === e.name && Fe.some(f => e.message.includes(f))) return new V("EXECUTE_TRANSACTION_ON_CLOSED_DB",
        a);
    if ("AbortError" === e.name) return new V("UNKNOWN_ABORT", a, e.message);
    e.args = [Object.assign(Object.assign({}, a), {
        name: "IdbError",
        Ha: e.name
    })];
    e.level = "WARNING";
    return e
}

function He(a, b, c) {
    return new V("IDB_NOT_SUPPORTED", {
        context: {
            caller: a,
            publicName: b,
            version: c,
            hasSucceededOnce: void 0
        }
    })
};

function Ie(a) {
    if (!a) throw Error();
    throw a;
}

function Je(a) {
    return a
}
var Ke = class {
    constructor(a) {
        this.h = a
    }
};

function Le(a) {
    return new W(new Ke((b, c) => {
        a instanceof W ? a.then(b, c) : b(a)
    }))
}

function Me(a, b, c, d, e) {
    try {
        if ("FULFILLED" !== a.state.status) throw Error("calling handleResolve before the promise is fulfilled.");
        const f = c(a.state.value);
        f instanceof W ? Ne(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}

function Oe(a, b, c, d, e) {
    try {
        if ("REJECTED" !== a.state.status) throw Error("calling handleReject before the promise is rejected.");
        const f = c(a.state.reason);
        f instanceof W ? Ne(a, b, f, d, e) : d(f)
    } catch (f) {
        e(f)
    }
}

function Ne(a, b, c, d, e) {
    b === c ? e(new TypeError("Circular promise chain detected.")) : c.then(f => {
        f instanceof W ? Ne(a, b, f, d, e) : d(f)
    }, f => {
        e(f)
    })
}
var W = class {
    constructor(a) {
        this.state = {
            status: "PENDING"
        };
        this.h = [];
        this.onRejected = [];
        a = a.h;
        const b = d => {
                if ("PENDING" === this.state.status) {
                    this.state = {
                        status: "FULFILLED",
                        value: d
                    };
                    for (const e of this.h) e()
                }
            },
            c = d => {
                if ("PENDING" === this.state.status) {
                    this.state = {
                        status: "REJECTED",
                        reason: d
                    };
                    for (const e of this.onRejected) e()
                }
            };
        try {
            a(b, c)
        } catch (d) {
            c(d)
        }
    }
    static all(a) {
        return new W(new Ke((b, c) => {
            const d = [];
            let e = a.length;
            0 === e && b(d);
            for (let f = 0; f < a.length; ++f) Le(a[f]).then(g => {
                d[f] = g;
                e--;
                0 === e && b(d)
            }).catch(g => {
                c(g)
            })
        }))
    }
    static reject(a) {
        return new W(new Ke((b, c) => {
            c(a)
        }))
    }
    then(a, b) {
        const c = null !== a && void 0 !== a ? a : Je,
            d = null !== b && void 0 !== b ? b : Ie;
        return new W(new Ke((e, f) => {
            "PENDING" === this.state.status ? (this.h.push(() => {
                Me(this, this, c, e, f)
            }), this.onRejected.push(() => {
                Oe(this, this, d, e, f)
            })) : "FULFILLED" === this.state.status ? Me(this, this, c, e, f) : "REJECTED" === this.state.status && Oe(this, this, d, e, f)
        }))
    } catch (a) {
        return this.then(void 0, a)
    }
};

function Pe(a, b, c) {
    const d = () => {
            try {
                a.removeEventListener("success", e), a.removeEventListener("error", f)
            } catch (g) {}
        },
        e = () => {
            b(a.result);
            d()
        },
        f = () => {
            c(a.error);
            d()
        };
    a.addEventListener("success", e);
    a.addEventListener("error", f)
}

function Qe(a) {
    return new Promise((b, c) => {
        Pe(a, b, c)
    })
}

function X(a) {
    return new W(new Ke((b, c) => {
        Pe(a, b, c)
    }))
};

function Re(a, b) {
    return new W(new Ke((c, d) => {
        const e = () => {
            const f = a ? b(a) : null;
            f ? f.then(g => {
                a = g;
                e()
            }, d) : c()
        };
        e()
    }))
};

function Y(a, b, c, d) {
    return F(a, function*() {
        const e = {
            mode: "readonly",
            G: !1,
            tag: "IDB_TRANSACTION_TAG_UNKNOWN"
        };
        "string" === typeof c ? e.mode = c : Object.assign(e, c);
        this.transactionCount++;
        const f = e.G ? 3 : 1;
        let g = 0,
            h;
        for (; !h;) {
            g++;
            const l = Math.round(T());
            try {
                const n = this.h.transaction(b, e.mode);
                var k = d;
                const p = new Se(n),
                    r = yield Te(p, k), m = Math.round(T());
                Ue(this, l, m, g, void 0, b.join(), e);
                return r
            } catch (n) {
                k = Math.round(T());
                const p = Ge(n, this.h.name, b.join(), this.h.version);
                if (p instanceof V && !p.h || g >= f) Ue(this,
                    l, k, g, p, b.join(), e), h = p
            }
        }
        return Promise.reject(h)
    })
}

function Ve(a, b, c) {
    a = a.h.createObjectStore(b, c);
    return new We(a)
}

function Ue(a, b, c, d, e, f, g) {
    b = c - b;
    e ? (e instanceof V && ("QUOTA_EXCEEDED" === e.type || "QUOTA_MAYBE_EXCEEDED" === e.type) && we("QUOTA_EXCEEDED", {
        dbName: ze(a.h.name),
        objectStoreNames: f,
        transactionCount: a.transactionCount,
        transactionMode: g.mode
    }), e instanceof V && "UNKNOWN_ABORT" === e.type && (c -= a.j, 0 > c && c >= Math.pow(2, 31) && (c = 0), we("TRANSACTION_UNEXPECTEDLY_ABORTED", {
        objectStoreNames: f,
        transactionDuration: b,
        transactionCount: a.transactionCount,
        dbDuration: c
    }), a.i = !0), Xe(a, !1, d, f, b, g.tag), ve(e)) : Xe(a, !0, d, f, b, g.tag)
}

function Xe(a, b, c, d, e, f = "IDB_TRANSACTION_TAG_UNKNOWN") {
    we("TRANSACTION_ENDED", {
        objectStoreNames: d,
        connectionHasUnknownAbortedTransaction: a.i,
        duration: e,
        isSuccessful: b,
        tryCount: c,
        tag: f
    })
}
var Ye = class {
    constructor(a, b) {
        this.h = a;
        this.options = b;
        this.transactionCount = 0;
        this.j = Math.round(T());
        this.i = !1
    }
    add(a, b, c) {
        return Y(this, [a], {
            mode: "readwrite",
            G: !0
        }, d => d.objectStore(a).add(b, c))
    }
    clear(a) {
        return Y(this, [a], {
            mode: "readwrite",
            G: !0
        }, b => b.objectStore(a).clear())
    }
    close() {
        var a;
        this.h.close();
        (null === (a = this.options) || void 0 === a ? 0 : a.closed) && this.options.closed()
    }
    count(a, b) {
        return Y(this, [a], {
            mode: "readonly",
            G: !0
        }, c => c.objectStore(a).count(b))
    }
    delete(a, b) {
        return Y(this, [a], {
            mode: "readwrite",
            G: !0
        }, c => c.objectStore(a).delete(b))
    }
    get(a, b) {
        return Y(this, [a], {
            mode: "readonly",
            G: !0
        }, c => c.objectStore(a).get(b))
    }
    put(a, b, c) {
        return Y(this, [a], {
            mode: "readwrite",
            G: !0
        }, d => d.objectStore(a).put(b, c))
    }
    objectStoreNames() {
        return Array.from(this.h.objectStoreNames)
    }
    getName() {
        return this.h.name
    }
};

function Ze(a, b, c) {
    a = a.h.openCursor(b.query, b.direction);
    return $e(a).then(d => Re(d, c))
}

function af(a, b) {
    return Ze(a, {
        query: b
    }, c => c.delete().then(() => c.continue())).then(() => {})
}
var We = class {
    constructor(a) {
        this.h = a
    }
    add(a, b) {
        return X(this.h.add(a, b))
    }
    autoIncrement() {
        return this.h.autoIncrement
    }
    clear() {
        return X(this.h.clear()).then(() => {})
    }
    count(a) {
        return X(this.h.count(a))
    }
    delete(a) {
        return a instanceof IDBKeyRange ? af(this, a) : X(this.h.delete(a))
    }
    get(a) {
        return X(this.h.get(a))
    }
    index(a) {
        try {
            return new bf(this.h.index(a))
        } catch (b) {
            if (b instanceof Error && "NotFoundError" === b.name) throw new Ee(a, this.h.name);
            throw b;
        }
    }
    getName() {
        return this.h.name
    }
    keyPath() {
        return this.h.keyPath
    }
    put(a, b) {
        return X(this.h.put(a, b))
    }
};

function Te(a, b) {
    const c = new Promise((d, e) => {
        try {
            b(a).then(f => {
                d(f)
            }).catch(e)
        } catch (f) {
            e(f), a.abort()
        }
    });
    return Promise.all([c, a.done]).then(([d]) => d)
}
var Se = class {
    constructor(a) {
        this.h = a;
        this.j = new Map;
        this.i = !1;
        this.done = new Promise((b, c) => {
            this.h.addEventListener("complete", () => {
                b()
            });
            this.h.addEventListener("error", d => {
                d.currentTarget === d.target && c(this.h.error)
            });
            this.h.addEventListener("abort", () => {
                var d = this.h.error;
                if (d) c(d);
                else if (!this.i) {
                    d = V;
                    var e = this.h.objectStoreNames;
                    const f = [];
                    for (let g = 0; g < e.length; g++) {
                        const h = e.item(g);
                        if (null === h) throw Error("Invariant: item in DOMStringList is null");
                        f.push(h)
                    }
                    d = new d("UNKNOWN_ABORT", {
                        objectStoreNames: f.join(),
                        dbName: this.h.db.name,
                        mode: this.h.mode
                    });
                    c(d)
                }
            })
        })
    }
    abort() {
        this.h.abort();
        this.i = !0;
        throw new V("EXPLICIT_ABORT");
    }
    objectStore(a) {
        a = this.h.objectStore(a);
        let b = this.j.get(a);
        b || (b = new We(a), this.j.set(a, b));
        return b
    }
};

function cf(a, b, c) {
    const {
        query: d = null,
        direction: e = "next"
    } = b;
    a = a.h.openCursor(d, e);
    return $e(a).then(f => Re(f, c))
}
var bf = class {
    constructor(a) {
        this.h = a
    }
    count(a) {
        return X(this.h.count(a))
    }
    delete(a) {
        return cf(this, {
            query: a
        }, b => b.delete().then(() => b.continue()))
    }
    get(a) {
        return X(this.h.get(a))
    }
    getKey(a) {
        return X(this.h.getKey(a))
    }
    keyPath() {
        return this.h.keyPath
    }
    unique() {
        return this.h.unique
    }
};

function $e(a) {
    return X(a).then(b => b ? new df(a, b) : null)
}
var df = class {
    constructor(a, b) {
        this.request = a;
        this.cursor = b
    }
    advance(a) {
        this.cursor.advance(a);
        return $e(this.request)
    }
    continue (a) {
        this.cursor.continue(a);
        return $e(this.request)
    }
    delete() {
        return X(this.cursor.delete()).then(() => {})
    }
    getKey() {
        return this.cursor.key
    }
    update(a) {
        return X(this.cursor.update(a))
    }
};

function ef(a, b, c) {
    return new Promise((d, e) => {
        let f;
        f = void 0 !== b ? self.indexedDB.open(a, b) : self.indexedDB.open(a);
        const g = c.blocked,
            h = c.blocking,
            k = c.za,
            l = c.upgrade,
            n = c.closed;
        let p;
        const r = () => {
            p || (p = new Ye(f.result, {
                closed: n
            }));
            return p
        };
        f.addEventListener("upgradeneeded", m => {
            try {
                if (null === m.newVersion) throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");
                if (null === f.transaction) throw Error("Invariant: transaction on IDbOpenDbRequest is null");
                m.dataLoss && "none" !== m.dataLoss && we("IDB_DATA_CORRUPTED", {
                    reason: m.dataLossMessage || "unknown reason",
                    dbName: ze(a)
                });
                const v = r(),
                    x = new Se(f.transaction);
                l && l(v, C => m.oldVersion < C && m.newVersion >= C, x);
                x.done.catch(C => {
                    e(C)
                })
            } catch (v) {
                e(v)
            }
        });
        f.addEventListener("success", () => {
            const m = f.result;
            h && m.addEventListener("versionchange", () => {
                h(r())
            });
            m.addEventListener("close", () => {
                we("IDB_UNEXPECTEDLY_CLOSED", {
                    dbName: ze(a),
                    dbVersion: m.version
                });
                k && k()
            });
            d(r())
        });
        f.addEventListener("error", () => {
            e(f.error)
        });
        g && f.addEventListener("blocked", () => {
            g()
        })
    })
}

function ff(a, b, c = {}) {
    return ef(a, b, c)
}

function gf(a, b = {}) {
    return F(this, function*() {
        const c = self.indexedDB.deleteDatabase(a),
            d = b.blocked;
        d && c.addEventListener("blocked", () => {
            d()
        });
        yield Qe(c)
    })
};

function hf(a, b) {
    return new V("INCOMPATIBLE_DB_VERSION", {
        dbName: a.name,
        oldVersion: a.options.version,
        newVersion: b
    })
}

function jf(a, b) {
    if (!b) throw He("openWithToken", ze(a.name));
    return a.open()
}
var kf = class {
    constructor(a, b) {
        this.name = a;
        this.options = b;
        this.l = !0;
        this.j = !1
    }
    i(a, b, c = {}) {
        return ff(a, b, c)
    }
    delete(a = {}) {
        return gf(this.name, a)
    }
    open() {
        if (!this.l) throw hf(this);
        if (this.h) return this.h;
        let a;
        const b = () => {
                this.h === a && (this.h = void 0)
            },
            c = {
                blocking: e => {
                    e.close()
                },
                closed: b,
                za: b,
                upgrade: this.options.upgrade
            },
            d = () => F(this, function*() {
                var e, f, g = null !== (e = Error().stack) && void 0 !== e ? e : "";
                try {
                    var h = yield this.i(this.name, this.options.version, c);
                    a: {
                        var k = h,
                            l = this.options;
                        for (const p of Object.keys(l.U)) {
                            const {
                                O: r,
                                Ja: m = Number.MAX_VALUE
                            } = l.U[p];
                            if (k.h.version >= r && !(k.h.version >= m) && !k.h.objectStoreNames.contains(p)) {
                                var n = p;
                                break a
                            }
                        }
                        n = void 0
                    }
                    if (void 0 !== n) {
                        if (!this.j) return this.j = !0, yield this.delete(), ve(new V("DB_DELETED_BY_MISSING_OBJECT_STORE", {
                            dbName: this.name,
                            ta: n
                        })), d();
                        throw new De(n);
                    }
                    return h
                } catch (p) {
                    if (p instanceof DOMException ? "VersionError" === p.name : "DOMError" in self && p instanceof DOMError ? "VersionError" === p.name : p instanceof Object && "message" in p && "An attempt was made to open a database using a lower version than the existing version." === p.message) {
                        g = yield this.i(this.name, void 0, Object.assign(Object.assign({}, c), {
                            upgrade: void 0
                        }));
                        h = g.h.version;
                        if (void 0 !== this.options.version && h > this.options.version + 1) throw g.close(), this.l = !1, hf(this, h);
                        return g
                    }
                    b();
                    p instanceof Error && !R("ytidb_async_stack_killswitch") && (p.stack = `${p.stack}\n${g.substring(g.indexOf("\n")+1)}`);
                    throw Ge(p, this.name, "", null !== (f = this.options.version) && void 0 !== f ? f : -1);
                }
            });
        return this.h = a = d()
    }
};
const lf = new kf("YtIdbMeta", {
    U: {
        databases: {
            O: 1
        }
    },
    upgrade(a, b) {
        b(1) && Ve(a, "databases", {
            keyPath: "actualName"
        })
    }
});

function mf(a, b) {
    return F(this, function*() {
        return Y(yield jf(lf, b), ["databases"], {
            G: !0,
            mode: "readwrite"
        }, c => {
            const d = c.objectStore("databases");
            return d.get(a.actualName).then(e => {
                if (e ? a.actualName !== e.actualName || a.publicName !== e.publicName || a.userIdentifier !== e.userIdentifier : 1) return d.put(a).then(() => {})
            })
        })
    })
}

function nf(a, b) {
    return F(this, function*() {
        if (a) return (yield jf(lf, b)).delete("databases", a)
    })
};
let of ;
const pf = new class {
    constructor() {}
}(new class {
    constructor() {}
});

function qf() {
    return F(this, function*() {
        return !0
    })
}

function rf() {
    if (void 0 !== of ) return of;
    ue = !0;
    return of = qf().then(a => {
        ue = !1;
        return a
    })
}

function sf() {
    return rf().then(a => a ? pf : void 0)
};
new uc;

function tf(a) {
    try {
        xe();
        var b = !0
    } catch (c) {
        b = !1
    }
    if (!b) throw a = new V("AUTH_INVALID", {
        dbName: a
    }), ve(a), a;
    b = xe();
    return {
        actualName: `${a}:${b}`,
        publicName: a,
        userIdentifier: b
    }
}

function uf(a, b, c, d) {
    var e;
    return F(this, function*() {
        var f = null !== (e = Error().stack) && void 0 !== e ? e : "",
            g = yield sf();
        if (!g) throw g = He("openDbImpl", a, b), R("ytidb_async_stack_killswitch") || (g.stack = `${g.stack}\n${f.substring(f.indexOf("\n")+1)}`), ve(g), g;
        ye(a);
        f = c ? {
            actualName: a,
            publicName: a,
            userIdentifier: void 0
        } : tf(a);
        try {
            return yield mf(f, g), yield ff(f.actualName, b, d)
        } catch (h) {
            try {
                yield nf(f.actualName, g)
            } catch (k) {}
            throw h;
        }
    })
}

function vf(a, b, c = {}) {
    return uf(a, b, !1, c)
}

function wf(a, b, c = {}) {
    return uf(a, b, !0, c)
}

function xf(a, b = {}) {
    return F(this, function*() {
        const c = yield sf();
        if (c) {
            ye(a);
            var d = tf(a);
            yield gf(d.actualName, b);
            yield nf(d.actualName, c)
        }
    })
}

function yf(a, b = {}) {
    return F(this, function*() {
        const c = yield sf();
        c && (ye(a), yield gf(a, b), yield nf(a, c))
    })
};

function zf(a) {
    this.version = 1;
    this.args = a
};

function Af(a) {
    this.topic = a
}
Af.prototype.toString = function() {
    return this.topic
};
const Bf = t("ytPubsub2Pubsub2Instance") || new I;
I.prototype.subscribe = I.prototype.subscribe;
I.prototype.unsubscribeByKey = I.prototype.K;
I.prototype.publish = I.prototype.H;
I.prototype.clear = I.prototype.clear;
u("ytPubsub2Pubsub2Instance", Bf);
u("ytPubsub2Pubsub2SubscribedKeys", t("ytPubsub2Pubsub2SubscribedKeys") || {});
u("ytPubsub2Pubsub2TopicToKeys", t("ytPubsub2Pubsub2TopicToKeys") || {});
u("ytPubsub2Pubsub2IsAsync", t("ytPubsub2Pubsub2IsAsync") || {});
u("ytPubsub2Pubsub2SkipSubKey", null);

function Cf(a, b) {
    const c = t("ytPubsub2Pubsub2Instance");
    c && c.publish.call(c, a.toString(), a, b)
};

function Df(a, b) {
    let c;
    return () => {
        c || (c = new Ef(a, b));
        return c
    }
}
var Ef = class extends kf {
    constructor(a, b) {
        super(a, b);
        this.options = b;
        ye(a)
    }
    i(a, b, c = {}) {
        return (this.options.Z ? wf : vf)(a, b, Object.assign({}, c))
    }
    delete(a = {}) {
        return (this.options.Z ? yf : xf)(this.name, a)
    }
};
const Ff = ["client.name", "client.version"];

function Gf(a) {
    if (!a.errorMetadata || !a.errorMetadata.kvPairs) return a;
    a.errorMetadata.kvPairs = a.errorMetadata.kvPairs.filter(b => b.key ? Ff.includes(b.key) : !1);
    return a
};
var Hf;
Hf = Df("ServiceWorkerLogsDatabase", {
    U: {
        ["SWHealthLog"]: {
            O: 1
        }
    },
    Z: !0,
    upgrade: (a, b) => {
        b(1) && Ve(a, "SWHealthLog", {
            keyPath: "id",
            autoIncrement: !0
        }).h.createIndex("swHealthNewRequest", ["interface", "timestamp"], {
            unique: !1
        })
    },
    version: 1
});

function If(a, b) {
    return F(this, function*() {
        var c = yield jf(Hf(), b), d = c.put, e = Q("INNERTUBE_CONTEXT_CLIENT_NAME", 0);
        const f = Object.assign({}, a);
        f.clientError && (f.clientError = Gf(f.clientError));
        f.interface = e;
        return d.call(c, "SWHealthLog", f)
    })
};
const Jf = q.ytNetworklessLoggingInitializationOptions || {
    isNwlInitialized: !1,
    databaseToken: void 0,
    potentialEsfErrorCounter: 0,
    isIdbSupported: !1
};
u("ytNetworklessLoggingInitializationOptions", Jf);

function ke(a, b, c) {
    !Q("VISITOR_DATA") && .01 > Math.random() && pd(new J("Missing VISITOR_DATA when sending innertube request.", "log_event", b, c));
    if (!a.isReady()) throw a = new J("innertube xhrclient not ready", "log_event", b, c), od(a), a;
    const d = {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        postParams: b,
        postBodyFormat: "JSON",
        onTimeout: () => {
            c.onTimeout()
        },
        onFetchTimeout: c.onTimeout,
        onSuccess: (n, p) => {
            if (c.onSuccess) c.onSuccess(p)
        },
        onFetchSuccess: n => {
            if (c.onSuccess) c.onSuccess(n)
        },
        onError: (n, p) => {
            if (c.onError) c.onError(p)
        },
        onFetchError: n => {
            if (c.onError) c.onError(n)
        },
        timeout: c.timeout,
        withCredentials: !0
    };
    b = "";
    var e = a.config_.pa;
    e && (b = e);
    e = se(a.config_.ra || !1, b, c);
    Object.assign(d.headers, e);
    (e = d.headers.Authorization) && !b && (d.headers["x-origin"] = window.location.origin);
    const f = `/${"youtubei"}/${a.config_.innertubeApiVersion}/${"log_event"}`;
    let g = {
            alt: "json"
        },
        h = a.config_.qa && e;
    R("omit_innertube_api_key_for_Bearer_auth_header") && (h = h && e.startsWith("Bearer"));
    h || (g.key = a.config_.innertubeApiKey);
    const k = Ad(`${b}${f}`, g || {}, !0),
        l = () => {
            try {
                Jd(k, d)
            } catch (n) {
                if ("InvalidAccessError" ==
                    n.name) pd(Error("An extension is blocking network request."));
                else throw n;
            }
        };
    R("use_new_nwl") || t("ytNetworklessLoggingInitializationOptions") && Jf.isNwlInitialized ? rf().then(n => {
        l(n)
    }) : l(!1)
}
class Kf {
    constructor(a) {
        this.config_ = null;
        a ? this.config_ = a : re() && (this.config_ = he())
    }
    isReady() {
        !this.config_ && re() && (this.config_ = he());
        return !!this.config_
    }
};
let Lf = Kf;

function Z(a, b, c = {}) {
    let d = Lf;
    Q("ytLoggingEventsDefaultDisabled", !1) && Lf == Kf && (d = null);
    me(a, b, d, c)
};
const Mf = [{
    Y: a => `Cannot read property '${a.key}'`,
    V: {
        Error: [{
            u: /(Permission denied) to access property "([^']+)"/,
            groups: ["reason", "key"]
        }],
        TypeError: [{
            u: /Cannot read property '([^']+)' of (null|undefined)/,
            groups: ["key", "value"]
        }, {
            u: /\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,
            groups: ["value", "key"]
        }, {
            u: /\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
            groups: ["value", "key"]
        }, {
            u: /No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
            groups: ["key"]
        }, {
            u: /Unable to get property '([^']+)' of (undefined or null) reference/,
            groups: ["key", "value"]
        }, {
            u: /(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,
            groups: ["value", "base", "key"]
        }]
    }
}, {
    Y: a => `Cannot call '${a.key}'`,
    V: {
        TypeError: [{
            u: /(?:([^ ]+)?\.)?([^ ]+) is not a function/,
            groups: ["base", "key"]
        }, {
            u: /([^ ]+) called on (null or undefined)/,
            groups: ["key", "value"]
        }, {
            u: /Object (.*) has no method '([^ ]+)'/,
            groups: ["base", "key"]
        }, {
            u: /Object doesn't support property or method '([^ ]+)'/,
            groups: ["key"]
        }, {
            u: /\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
            groups: ["key"]
        }, {
            u: /\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
            groups: ["key"]
        }]
    }
}, {
    Y: a => `${a.key} is not defined`,
    V: {
        ReferenceError: [{
            u: /(.*) is not defined/,
            groups: ["key"]
        }, {
            u: /Can't find variable: (.*)/,
            groups: ["key"]
        }]
    }
}];
var Of = {
    D: [],
    C: [{
        ia: Nf,
        weight: 500
    }]
};

function Nf(a) {
    if ("JavaException" === a.name) return !0;
    a = a.stack;
    return a.includes("chrome://") || a.includes("chrome-extension://") || a.includes("moz-extension://")
};

function Pf() {
    if (!Qf) {
        var a = Qf = new Rf;
        a.D.length = 0;
        a.C.length = 0;
        Sf(a, Of)
    }
    return Qf
}

function Sf(a, b) {
    b.D && a.D.push.apply(a.D, b.D);
    b.C && a.C.push.apply(a.C, b.C)
}
var Rf = class {
        constructor() {
            this.C = [];
            this.D = []
        }
    },
    Qf;
const Tf = new I;

function Uf(a) {
    const b = a.length;
    let c = 0;
    const d = () => a.charCodeAt(c++);
    do {
        var e = Vf(d);
        if (Infinity === e) break;
        const f = e >> 3;
        switch (e & 7) {
            case 0:
                e = Vf(d);
                if (2 === f) return e;
                break;
            case 1:
                if (2 === f) return;
                c += 8;
                break;
            case 2:
                e = Vf(d);
                if (2 === f) return a.substr(c, e);
                c += e;
                break;
            case 5:
                if (2 === f) return;
                c += 4;
                break;
            default:
                return
        }
    } while (c < b)
}

function Vf(a) {
    let b = a(),
        c = b & 127;
    if (128 > b) return c;
    b = a();
    c |= (b & 127) << 7;
    if (128 > b) return c;
    b = a();
    c |= (b & 127) << 14;
    if (128 > b) return c;
    b = a();
    return 128 > b ? c | (b & 127) << 21 : Infinity
};

function Wf(a, b, c, d) {
    if (a)
        if (Array.isArray(a)) {
            var e = d;
            for (d = 0; d < a.length && !(a[d] && (e += Xf(d, a[d], b, c), 500 < e)); d++);
            d = e
        } else if ("object" === typeof a)
        for (e in a) {
            if (a[e]) {
                var f = e;
                var g = a[e],
                    h = b,
                    k = c;
                f = "string" !== typeof g || "clickTrackingParams" !== f && "trackingParams" !== f ? 0 : (g = Uf(atob(g.replace(/-/g, "+").replace(/_/g, "/")))) ? Xf(`${f}.ve`, g, h, k) : 0;
                d += f;
                d += Xf(e, a[e], b, c);
                if (500 < d) break
            }
        } else c[b] = Yf(a), d += c[b].length;
    else c[b] = Yf(a), d += c[b].length;
    return d
}

function Xf(a, b, c, d) {
    c += `.${a}`;
    a = Yf(b);
    d[c] = a;
    return c.length + a.length
}

function Yf(a) {
    return ("string" === typeof a ? a : String(JSON.stringify(a))).substr(0, 500)
};
var Zf = new Set,
    $f = 0,
    ag = 0,
    bg = 0,
    cg = [];
const dg = ["PhantomJS", "Googlebot", "TO STOP THIS SECURITY SCAN go/scan"];

function eg(a) {
    fg(a)
}

function fg(a, b = "ERROR") {
    var c = {};
    c.name = Q("INNERTUBE_CONTEXT_CLIENT_NAME", 1);
    c.version = Q("INNERTUBE_CONTEXT_CLIENT_VERSION", void 0);
    gg(a, c || {}, b)
}

function gg(a, b, c = "ERROR") {
    if (a) {
        a.hasOwnProperty("level") && a.level && (c = a.level);
        if (R("console_log_js_exceptions")) {
            var d = [];
            d.push(`Name: ${a.name}`);
            d.push(`Message: ${a.message}`);
            a.hasOwnProperty("params") && d.push(`Error Params: ${JSON.stringify(a.params)}`);
            a.hasOwnProperty("args") && d.push(`Error args: ${JSON.stringify(a.args)}`);
            d.push(`File name: ${a.fileName}`);
            d.push(`Stacktrace: ${a.stack}`);
            window.console.log(d.join("\n"), a)
        }
        if (!(5 <= $f)) {
            var e = oc(a);
            d = e.message || "Unknown Error";
            const v =
                e.name || "UnknownError";
            var f = e.stack || a.i || "Not available";
            if (f.startsWith(`${v}: ${d}`)) {
                var g = f.split("\n");
                g.shift();
                f = g.join("\n")
            }
            g = e.lineNumber || "Not available";
            e = e.fileName || "Not available";
            let x = 0;
            if (a.hasOwnProperty("args") && a.args && a.args.length)
                for (var h = 0; h < a.args.length && !(x = Wf(a.args[h], `params.${h}`, b, x), 500 <= x); h++);
            else if (a.hasOwnProperty("params") && a.params) {
                const C = a.params;
                if ("object" === typeof a.params)
                    for (h in C) {
                        if (!C[h]) continue;
                        const ma = `params.${h}`,
                            P = Yf(C[h]);
                        b[ma] = P;
                        x +=
                            ma.length + P.length;
                        if (500 < x) break
                    } else b.params = Yf(C)
            }
            if (cg.length)
                for (h = 0; h < cg.length && !(x = Wf(cg[h], `params.context.${h}`, b, x), 500 <= x); h++);
            navigator.vendor && !b.hasOwnProperty("vendor") && (b["device.vendor"] = navigator.vendor);
            b = {
                message: d,
                name: v,
                lineNumber: g,
                fileName: e,
                stack: f,
                params: b,
                sampleWeight: 1
            };
            d = Number(a.columnNumber);
            isNaN(d) || (b.lineNumber = `${b.lineNumber}:${d}`);
            if ("IGNORED" === a.level) var k = 0;
            else a: {
                a = Pf();d = b;
                for (k of a.D)
                    if (d.message && d.message.match(k.sa)) {
                        k = k.weight;
                        break a
                    }
                for (var l of a.C)
                    if (l.ia(d)) {
                        k =
                            l.weight;
                        break a
                    }
                k = 1
            }
            b.sampleWeight = k;
            k = b;
            for (var n of Mf)
                if (n.V[k.name]) {
                    l = n.V[k.name];
                    for (var p of l)
                        if (l = k.message.match(p.u)) {
                            k.params["params.error.original"] = l[0];
                            a = p.groups;
                            b = {};
                            for (d = 0; d < a.length; d++) b[a[d]] = l[d + 1], k.params[`params.error.${a[d]}`] = l[d + 1];
                            k.message = n.Y(b);
                            break
                        }
                }
            k.params || (k.params = {});
            n = Pf();
            k.params["params.errorServiceSignature"] = `msg=${n.D.length}&cb=${n.C.length}`;
            k.params["params.serviceWorker"] = "true";
            q.document && q.document.querySelectorAll && (k.params["params.fscripts"] =
                String(document.querySelectorAll("script:not([nonce])").length));
            w("sample").constructor !== ya && (k.params["params.fconst"] = "true");
            window.yterr && "function" === typeof window.yterr && window.yterr(k);
            if (0 !== k.sampleWeight && !Zf.has(k.message)) {
                "ERROR" === c ? (Tf.H("handleError", k), R("record_app_crashed_web") && 0 === bg && 1 === k.sampleWeight && (bg++, Z("appCrashed", {
                    appCrashType: "APP_CRASH_TYPE_BREAKPAD"
                })), ag++) : "WARNING" === c && Tf.H("handleWarning", k);
                b: {
                    for (r of dg)
                        if (Oa && 0 <= Oa.toLowerCase().indexOf(r.toLowerCase())) {
                            var r = !0;
                            break b
                        }
                    r = !1
                }
                if (r) var m = void 0;
                else {
                    n = {
                        stackTrace: k.stack
                    };
                    k.fileName && (n.filename = k.fileName);
                    r = k.lineNumber && k.lineNumber.split ? k.lineNumber.split(":") : [];
                    0 !== r.length && (1 !== r.length || isNaN(Number(r[0])) ? 2 !== r.length || isNaN(Number(r[0])) || isNaN(Number(r[1])) || (n.lineNumber = Number(r[0]), n.columnNumber = Number(r[1])) : n.lineNumber = Number(r[0]));
                    r = {
                        level: "ERROR_LEVEL_UNKNOWN",
                        message: k.message,
                        errorClassName: k.name,
                        sampleWeight: k.sampleWeight
                    };
                    "ERROR" === c ? r.level = "ERROR_LEVEL_ERROR" : "WARNING" === c &&
                        (r.level = "ERROR_LEVEL_WARNNING");
                    n = {
                        isObfuscated: !0,
                        browserStackInfo: n
                    };
                    p = {
                        pageUrl: window.location.href,
                        kvPairs: []
                    };
                    Q("FEXP_EXPERIMENTS") && (p.experimentIds = Q("FEXP_EXPERIMENTS"));
                    if (l = k.params)
                        for (m of Object.keys(l)) p.kvPairs.push({
                            key: `client.${m}`,
                            value: String(l[m])
                        });
                    m = Q("SERVER_NAME", void 0);
                    l = Q("SERVER_VERSION", void 0);
                    m && l && (p.kvPairs.push({
                        key: "server.name",
                        value: m
                    }), p.kvPairs.push({
                        key: "server.version",
                        value: l
                    }));
                    m = {
                        errorMetadata: p,
                        stackTrace: n,
                        logMessage: r
                    }
                }
                m && (Z("clientError", m), ("ERROR" ===
                    c || R("errors_flush_gel_always_killswitch")) && ce());
                try {
                    Zf.add(k.message)
                } catch (C) {}
                $f++
            }
        }
    }
};

function hg(a) {
    return F(a, function*() {
        var b = yield q.fetch(this.i);
        if (200 !== b.status) return Promise.reject("Server error when retrieving AmbientData");
        b = yield b.text();
        if (!b.startsWith(")]}'\n")) return Promise.reject("Incorrect JSPB formatting");
        a: {
            b = JSON.parse(b.substring(5));
            for (let c = 0; c < b.length; c++)
                if (b[c][0] === (new $c).constructor.ea) {
                    b = new $c(b[c]);
                    break a
                }
            b = null
        }
        return b ? b : Promise.reject("AmbientData missing from response")
    })
}

function ig(a = !1) {
    return F(jg.h, function*() {
        if (a || !this.h) this.h = hg(this).then(this.j).catch(b => {
            delete this.h;
            fg(b)
        });
        return this.h
    })
}
var jg = class {
    constructor(a) {
        this.i = a
    }
    j(a) {
        const b = Lb(a, Zc, 2);
        if (b) {
            const c = E(b, 5);
            c && (q.__SAPISID = c);
            null != E(b, 7) && O("VISITOR_DATA", E(b, 7));
            null != E(b, 4) && O("SESSION_INDEX", String(E(b, 4)));
            null != E(b, 8) && O("DELEGATED_SESSION_ID", E(b, 8))
        }
        return a
    }
};

function kg(a) {
    const b = {};
    var c = cc();
    c && (b.Authorization = c, c = a = null === a || void 0 === a ? void 0 : a.sessionIndex, void 0 === c && (c = Number(Q("SESSION_INDEX", 0)), c = isNaN(c) ? 0 : c), b["X-Goog-AuthUser"] = c, "INNERTUBE_HOST_OVERRIDE" in N || (b["X-Origin"] = window.location.origin), void 0 === a && "DELEGATED_SESSION_ID" in N && (b["X-Goog-PageId"] = Q("DELEGATED_SESSION_ID")));
    return b
}
var lg = class {
    constructor() {
        this.ya = !0
    }
};
var mg = {
    identityType: "UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"
};
let ng = Date.now().toString();

function og() {
    a: {
        if (window.crypto && window.crypto.getRandomValues) try {
            var a = Array(16),
                b = new Uint8Array(16);
            window.crypto.getRandomValues(b);
            for (var c = 0; c < a.length; c++) a[c] = b[c];
            var d = a;
            break a
        } catch (e) {}
        d = Array(16);
        for (a = 0; 16 > a; a++) {
            b = Date.now();
            for (c = 0; c < b % 23; c++) d[a] = Math.random();
            d[a] = Math.floor(256 * Math.random())
        }
        if (ng)
            for (a = 1, b = 0; b < ng.length; b++) d[a % 16] = d[a % 16] ^ d[(a - 1) % 16] / 4 ^ ng.charCodeAt(b), a++
    }
    a = [];
    for (b = 0; b < d.length; b++) a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b] & 63));
    return a.join("")
};
let pg = q.ytLoggingDocDocumentNonce_;
pg || (pg = og());

function qg(a, b) {
    b.encryptedTokenJarContents && (a.h[b.encryptedTokenJarContents] = b, "string" === typeof b.expirationSeconds && setTimeout(() => {
        delete a.h[b.encryptedTokenJarContents]
    }, 1E3 * Number(b.expirationSeconds)))
}
var rg = class {
    constructor() {
        this.h = {}
    }
    handleResponse(a, b) {
        var c, d, e;
        b = (null === (d = null === (c = b.I.context) || void 0 === c ? void 0 : c.request) || void 0 === d ? void 0 : d.consistencyTokenJars) || [];
        if (a = null === (e = a.responseContext) || void 0 === e ? void 0 : e.consistencyTokenJar) {
            for (const f of b) delete this.h[f.encryptedTokenJarContents];
            qg(this, a)
        }
    }
};

function sg() {
    var a = Q("INNERTUBE_CONTEXT");
    if (!a) return fg(Error("Error: No InnerTubeContext shell provided in ytconfig.")), {};
    a = ua(a);
    R("web_no_tracking_params_in_shell_killswitch") || delete a.clickTracking;
    a.client || (a.client = {});
    var b = a.client;
    b.utcOffsetMinutes = -Math.floor((new Date).getTimezoneOffset());
    var c = Q("EXPERIMENTS_TOKEN", "");
    c ? b.experimentsToken = c : delete b.experimentsToken;
    rg.h || (rg.h = new rg);
    b = rg.h.h;
    c = [];
    let d = 0;
    for (const e in b) c[d++] = b[e];
    a.request = Object.assign(Object.assign({},
        a.request), {
        consistencyTokenJars: c
    });
    a.user = Object.assign({}, a.user);
    return a
};

function tg(a) {
    var b = a;
    if (a = Q("INNERTUBE_HOST_OVERRIDE")) {
        a = String(a);
        var c = String,
            d = b.match(Ta);
        b = d[5];
        var e = d[6];
        d = d[7];
        var f = "";
        b && (f += b);
        e && (f += "?" + e);
        d && (f += "#" + d);
        b = a + c(f)
    }
    return b
};
var ug = class {};
const vg = {
    ["GET_DATASYNC_IDS"]: class extends ug {}
};

function wg(a, ...b) {
    if (!xg(a) || b.some(c => !xg(c))) throw Error("Only objects may be merged.");
    for (const c of b) yg(a, c);
    return a
}

function yg(a, b) {
    for (const c in b)
        if (xg(b[c])) {
            if (c in a && !xg(a[c])) throw Error("Cannot merge an object into a non-object.");
            c in a || (a[c] = {});
            yg(a[c], b[c])
        } else if (zg(b[c])) {
        if (c in a && !zg(a[c])) throw Error("Cannot merge an array into a non-array.");
        c in a || (a[c] = []);
        Ag(a[c], b[c])
    } else a[c] = b[c];
    return a
}

function Ag(a, b) {
    for (const c of b) xg(c) ? a.push(yg({}, c)) : zg(c) ? a.push(Ag([], c)) : a.push(c);
    return a
}

function xg(a) {
    return "object" === typeof a && !Array.isArray(a)
}

function zg(a) {
    return "object" === typeof a && Array.isArray(a)
};
var Bg = class extends zf {
        constructor(a, b) {
            super(arguments)
        }
    },
    Cg = class extends zf {
        constructor(a, b) {
            super(arguments)
        }
    },
    Dg = new Af("aft-recorded"),
    Eg = new Af("timing-sent");
const Fg = window;
class Gg {
    constructor() {
        this.timing = {};
        this.clearResourceTimings = () => {};
        this.webkitClearResourceTimings = () => {};
        this.mozClearResourceTimings = () => {};
        this.msClearResourceTimings = () => {};
        this.oClearResourceTimings = () => {}
    }
}
var Hg = Fg.performance || Fg.mozPerformance || Fg.msPerformance || Fg.webkitPerformance || new Gg;
let Ig = !1;
ka(Hg.clearResourceTimings || Hg.webkitClearResourceTimings || Hg.mozClearResourceTimings || Hg.msClearResourceTimings || Hg.oClearResourceTimings || ea, Hg);

function Jg(a) {
    const b = Kg(a);
    if (b.aft) return b.aft;
    a = Q((a || "") + "TIMING_AFT_KEYS", ["ol"]);
    const c = a.length;
    for (let d = 0; d < c; d++) {
        const e = b[a[d]];
        if (e) return e
    }
    return NaN
}

function Lg(a) {
    var b;
    (b = t("ytcsi." + (a || "") + "data_")) || (b = {
        tick: {},
        info: {}
    }, u("ytcsi." + (a || "") + "data_", b));
    return b
}

function Mg(a) {
    a = Lg(a);
    a.info || (a.info = {});
    return a.info
}

function Kg(a) {
    a = Lg(a);
    a.tick || (a.tick = {});
    return a.tick
}

function Ng(a) {
    let b = Lg(a).nonce;
    b || (b = og(), Lg(a).nonce = b);
    return b
}

function Og(a) {
    const b = Kg(a || ""),
        c = Jg(a);
    c && !Ig && (Cf(Dg, new Bg(Math.round(c - b._start), a)), Ig = !0)
};

function Pg() {
    let a = t("ytcsi.debug");
    a || (a = [], u("ytcsi.debug", a), u("ytcsi.reference", {}));
    return a
}

function Qg(a) {
    a = a || "";
    var b = t("ytcsi.reference");
    b || (Pg(), b = t("ytcsi.reference"));
    if (b[a]) return b[a];
    const c = Pg(),
        d = {
            timerName: a,
            info: {},
            tick: {},
            span: {}
        };
    c.push(d);
    return b[a] = d
};
const Rg = q.ytLoggingLatencyUsageStats_ || {};
u("ytLoggingLatencyUsageStats_", Rg);

function Sg() {
    Tg.h || (Tg.h = new Tg);
    return Tg.h
}

function Ug(a, b) {
    Rg[b] = Rg[b] || {
        count: 0
    };
    var c = Rg[b];
    c.count++;
    c.time = T();
    a.h || (a.h = rd(() => {
        const d = T();
        for (const e in Rg) Rg[e] && 6E4 < d - Rg[e].time && delete Rg[e];
        a && (a.h = 0)
    }));
    return 5 < c.count ? (6 === c.count && 1 > 1E5 * Math.random() && (c = new J("CSI data exceeded logging limit with key", b.split("_")), 0 <= b.indexOf("plev") || fg(c, "WARNING")), !0) : !1
}
var Tg = class {
    constructor() {
        this.h = 0
    }
    tick(a, b, c, d) {
        Ug(this, `tick_${a}_${b}`) || Z("latencyActionTicked", {
            tickName: a,
            clientActionNonce: b
        }, {
            timestamp: c,
            cttAuthInfo: d
        })
    }
    info(a, b, c) {
        const d = Object.keys(a).join("");
        Ug(this, `info_${d}_${b}`) || (a = Object.assign({}, a), a.clientActionNonce = b, Z("latencyActionInfo", a, {
            cttAuthInfo: c
        }))
    }
    span(a, b, c) {
        const d = Object.keys(a).join("");
        Ug(this, `span_${d}_${b}`) || (a.clientActionNonce = b, Z("latencyActionSpan", a, {
            cttAuthInfo: c
        }))
    }
};
var Vg = {
        ["ad_allowed"]: "adTypesAllowed",
        ["yt_abt"]: "adBreakType",
        ["ad_cpn"]: "adClientPlaybackNonce",
        ["ad_docid"]: "adVideoId",
        ["yt_ad_an"]: "adNetworks",
        ["ad_at"]: "adType",
        ["aida"]: "appInstallDataAgeMs",
        ["browse_id"]: "browseId",
        ["p"]: "httpProtocol",
        ["t"]: "transportProtocol",
        ["cs"]: "commandSource",
        ["cpn"]: "clientPlaybackNonce",
        ["ccs"]: "creatorInfo.creatorCanaryState",
        ["ctop"]: "creatorInfo.topEntityType",
        ["csn"]: "clientScreenNonce",
        ["docid"]: "videoId",
        ["GetHome_rid"]: "requestIds",
        ["GetSearch_rid"]: "requestIds",
        ["GetPlayer_rid"]: "requestIds",
        ["GetWatchNext_rid"]: "requestIds",
        ["GetBrowse_rid"]: "requestIds",
        ["GetLibrary_rid"]: "requestIds",
        ["is_continuation"]: "isContinuation",
        ["is_nav"]: "isNavigation",
        ["b_p"]: "kabukiInfo.browseParams",
        ["is_prefetch"]: "kabukiInfo.isPrefetch",
        ["is_secondary_nav"]: "kabukiInfo.isSecondaryNav",
        ["nav_type"]: "kabukiInfo.navigationType",
        ["prev_browse_id"]: "kabukiInfo.prevBrowseId",
        ["query_source"]: "kabukiInfo.querySource",
        ["voz_type"]: "kabukiInfo.vozType",
        ["yt_lt"]: "loadType",
        ["mver"]: "creatorInfo.measurementVersion",
        ["yt_ad"]: "isMonetized",
        ["nr"]: "webInfo.navigationReason",
        ["nrsu"]: "navigationRequestedSameUrl",
        ["ncnp"]: "webInfo.nonPreloadedNodeCount",
        ["pnt"]: "performanceNavigationTiming",
        ["prt"]: "playbackRequiresTap",
        ["plt"]: "playerInfo.playbackType",
        ["pis"]: "playerInfo.playerInitializedState",
        ["paused"]: "playerInfo.isPausedOnLoad",
        ["yt_pt"]: "playerType",
        ["fmt"]: "playerInfo.itag",
        ["yt_pl"]: "watchInfo.isPlaylist",
        ["yt_pre"]: "playerInfo.preloadType",
        ["yt_ad_pr"]: "prerollAllowed",
        ["pa"]: "previousAction",
        ["yt_red"]: "isRedSubscriber",
        ["rce"]: "mwebInfo.responseContentEncoding",
        ["rc"]: "resourceInfo.resourceCache",
        ["scrh"]: "screenHeight",
        ["scrw"]: "screenWidth",
        ["st"]: "serverTimeMs",
        ["ssdm"]: "shellStartupDurationMs",
        ["br_trs"]: "tvInfo.bedrockTriggerState",
        ["kebqat"]: "kabukiInfo.earlyBrowseRequestInfo.abandonmentType",
        ["kebqa"]: "kabukiInfo.earlyBrowseRequestInfo.adopted",
        ["label"]: "tvInfo.label",
        ["is_mdx"]: "tvInfo.isMdx",
        ["preloaded"]: "tvInfo.isPreloaded",
        ["aac_type"]: "tvInfo.authAccessCredentialType",
        ["upg_player_vis"]: "playerInfo.visibilityState",
        ["query"]: "unpluggedInfo.query",
        ["upg_chip_ids_string"]: "unpluggedInfo.upgChipIdsString",
        ["yt_vst"]: "videoStreamType",
        ["vph"]: "viewportHeight",
        ["vpw"]: "viewportWidth",
        ["yt_vis"]: "isVisible",
        ["rcl"]: "mwebInfo.responseContentLength",
        ["GetSettings_rid"]: "requestIds",
        ["GetTrending_rid"]: "requestIds",
        ["GetMusicSearchSuggestions_rid"]: "requestIds",
        REQUEST_ID: "requestIds"
    },
    Wg = "isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),
    Xg = {
        ["ccs"]: "CANARY_STATE_",
        ["mver"]: "MEASUREMENT_VERSION_",
        ["pis"]: "PLAYER_INITIALIZED_STATE_",
        ["yt_pt"]: "LATENCY_PLAYER_",
        ["pa"]: "LATENCY_ACTION_",
        ["ctop"]: "TOP_ENTITY_TYPE_",
        ["yt_vst"]: "VIDEO_STREAM_TYPE_"
    },
    Yg = "all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");

function Zg(a) {
    return !!Q("FORCE_CSI_ON_GEL", !1) || R("csi_on_gel") || R("enable_csi_on_gel") || R("unplugged_tvhtml5_csi_on_gel") || !!Lg(a).useGel
}

function $g(a) {
    a = Lg(a);
    if (a.gel) {
        const b = a.gel;
        b.gelInfos || (b.gelInfos = {});
        b.gelTicks || (b.gelTicks = {})
    } else a.gel = {
        gelTicks: {},
        gelInfos: {}
    };
    return a.gel
};

function ah(a, b, c) {
    if (null !== b)
        if (Mg(c)[a] = b, Zg(c)) {
            var d = b;
            b = $g(c);
            b.gelInfos ? b.gelInfos["info_" + a] = !0 : b.gelInfos = {
                ["info_" + a]: !0
            };
            if (a.match("_rid")) {
                var e = a.split("_rid")[0];
                a = "REQUEST_ID"
            }
            if (a in Vg) {
                b = Vg[a];
                0 <= Array.prototype.indexOf.call(Wg, b, void 0) && (d = !!d);
                a in Xg && "string" === typeof d && (d = Xg[a] + d.toUpperCase());
                a = d;
                d = b.split(".");
                const f = {};
                let g = f;
                for (let h = 0; h < d.length - 1; h++) {
                    const k = d[h];
                    g[k] = {};
                    g = g[k]
                }
                g[d[d.length - 1]] = "requestIds" === b ? [{
                    id: a,
                    endpoint: e
                }] : a;
                b = wg({}, f)
            } else 0 <= Array.prototype.indexOf.call(Yg,
                a, void 0) || fg(new J("Unknown label logged with GEL CSI", a), "WARNING"), b = void 0;
            b && Zg(c) && (a = Qg(c || ""), wg(a.info, b), a = $g(c), a.gelInfos || (a.gelInfos = {}), wg(a.gelInfos, b), a = Ng(c), c = Lg(c).cttAuthInfo, Sg().info(b, a, c))
        } else Qg(c || "").info[a] = b
}

function bh(a, b, c) {
    const d = Kg(c);
    if (!b && "_" !== a[0]) {
        var e = a;
        Hg.mark && (0 == e.lastIndexOf("mark_", 0) || (e = "mark_" + e), c && (e += ` (${c})`), Hg.mark(e))
    }
    e = b || T();
    d[a] = e;
    e = $g(c);
    e.gelTicks && (e.gelTicks["tick_" + a] = !0);
    c || b || T();
    if (Zg(c)) {
        Qg(c || "").tick[a] = b || T();
        var f = Ng(c),
            g = Lg(c).cttAuthInfo;
        "_start" === a ? (e = Sg(), Ug(e, `baseline_${f}`) || Z("latencyActionBaselined", {
            clientActionNonce: f
        }, {
            timestamp: b,
            cttAuthInfo: g
        })) : Sg().tick(a, f, b, g);
        Og(c);
        e = !0
    } else e = !1;
    if (!e && !c) {
        if (!t("yt.timing.pingSent_") && (e = Q("TIMING_ACTION",
                void 0), c = Kg(), t("ytglobal.timingready_") && e && "_start" in Kg(void 0) && Jg())) {
            Og();
            e = !0;
            f = Q("TIMING_WAIT", []);
            if (f.length)
                for (let v = 0, x = f.length; v < x; ++v)
                    if (!(f[v] in c)) {
                        e = !1;
                        break
                    }
            if (e && !Zg()) {
                f = Kg();
                g = Mg();
                var h = f._start,
                    k = Q("CSI_SERVICE_NAME", "youtube");
                e = {
                    v: 2,
                    s: k,
                    action: Q("TIMING_ACTION", void 0)
                };
                c = g.srt;
                void 0 !== f.srt && delete g.srt;
                f.aft = Jg();
                var l = Kg(void 0),
                    n = l.pbr;
                const v = l.vc;
                l = l.pbs;
                n && v && l && n < v && v < l && Mg(void 0).yt_pvis && "youtube" === k && (ah("yt_lt", "hot_bg"), k = f.vc, n = f.pbs, delete f.aft, g.aft =
                    Math.round(n - k));
                for (var p in g) "_" !== p.charAt(0) && (e[p] = g[p]);
                f.ps = T();
                p = {};
                k = [];
                for (var r in f) "_" !== r.charAt(0) && (n = Math.round(f[r] - h), p[r] = n, k.push(`${r}.${n}`));
                e.rt = k.join(",");
                r = !!g.ap;
                f = "";
                for (var m in e) e.hasOwnProperty(m) && (f += `&${m}=${e[m]}`);
                m = "/csi_204?" + f.substring(1);
                window.navigator && r ? Qd(m, "") || Pd(m, void 0, void 0, void 0, "") : Pd(m);
                u("yt.timing.pingSent_", !0);
                Cf(Eg, new Cg(p.aft + (Number(c) || 0)))
            }
        }
        Qg("").tick[a] = b || T()
    }
    return d[a]
}
const ch = window;
ch.ytcsi && (ch.ytcsi.info = ah, ch.ytcsi.tick = bh);

function dh(a) {
    var b = {
        Ea: {}
    };
    lg.h || (lg.h = new lg);
    var c = lg.h;
    if (void 0 !== eh.h) {
        const d = eh.h;
        a = [b !== d.l, a !== d.j, c !== d.i, !1, !1, void 0 !== d.h];
        if (a.some(e => e)) throw new J("InnerTubeTransportService is already initialized", a);
    } else eh.h = new eh(b, a, c)
}

function fh(a, b, c) {
    return F(a, function*() {
        var d;
        if (this.i.ya) {
            const e = null === (d = null === b || void 0 === b ? void 0 : b.ba) || void 0 === d ? void 0 : d.sessionIndex;
            d = kg({
                sessionIndex: e
            });
            d = Object.assign(Object.assign({}, gh(c)), d)
        } else d = hh(this, b, c);
        return d
    })
}

function ih(a, b, c) {
    var d, e, f, g;
    return F(a, function*() {
        for (var h of []) h.Ia(b.I.context);
        if (null === (d = this.h) || void 0 === d ? 0 : d.l(b.input, b.I)) return this.h.j(b.input, b.I);
        h = JSON.stringify(b.I);
        b.W = Object.assign(Object.assign({}, b.W), {
            headers: c
        });
        let k = Object.assign({}, b.W);
        "POST" === b.W.method && (k = Object.assign(Object.assign({}, k), {
            body: h
        }));
        (null === (e = b.config) || void 0 === e ? 0 : e.va) && bh(b.config.va);
        h = yield this.j.fetch(b.input, k, b.config);
        (null === (f = b.config) || void 0 === f ? 0 : f.wa) && bh(b.config.wa);
        !h &&
            (null === (g = this.h) || void 0 === g ? 0 : g.h(b.input, b.I)) && (h = yield this.h.i(b.input, b.I));
        return h
    })
}

function jh(a, b, c) {
    var d = {
        ba: {
            identity: mg
        }
    };
    b.context || (b.context = sg());
    return new H(e => F(a, function*() {
        var f = tg(c);
        f = Bd(f) ? "same-origin" : "cors";
        f = yield fh(this, d, f);
        var g = tg(c);
        Q("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT") && (null === f || void 0 === f ? 0 : f.Authorization) || (g = Ad(g, {
            key: Q("INNERTUBE_API_KEY")
        }, !1));
        var h = {
            method: "POST",
            mode: Bd(g) ? "same-origin" : "cors",
            credentials: Bd(g) ? "same-origin" : "include"
        };
        e(ih(this, {
            input: g,
            W: h,
            I: b,
            config: d
        }, f))
    }))
}

function hh(a, b, c) {
    var d;
    return F(a, function*() {
        var e = {
            sessionIndex: null === (d = null === b || void 0 === b ? void 0 : b.ba) || void 0 === d ? void 0 : d.sessionIndex
        };
        e = yield zc(kg(e));
        return Promise.resolve(Object.assign(Object.assign({}, gh(c)), e))
    })
}

function gh(a) {
    const b = {
            "Content-Type": "application/json"
        },
        c = Q("VISITOR_DATA");
    c && (b["X-Goog-Visitor-Id"] = c);
    "cors" !== a && ((a = Q("INNERTUBE_CONTEXT_CLIENT_NAME")) && (b["X-Youtube-Client-Name"] = a), (a = Q("INNERTUBE_CONTEXT_CLIENT_VERSION")) && (b["X-Youtube-Client-Version"] = a), (a = Q("CHROME_CONNECTED_HEADER")) && (b["X-Youtube-Chrome-Connected"] = a), R("forward_domain_admin_state_on_embeds") && (a = Q("DOMAIN_ADMIN_STATE")) && (b["X-Youtube-Domain-Admin-State"] = a));
    return b
}
var eh = class {
    constructor(a, b, c) {
        this.l = a;
        this.j = b;
        this.i = c;
        this.h = void 0;
        a.aa || (a.aa = {});
        a.aa = Object.assign(Object.assign({}, vg), a.aa)
    }
};
let kh;

function lh() {
    kh || (dh({
        fetch: (a, b) => zc(fetch(new Request(a, b)))
    }), kh = eh.h);
    return kh
};

function mh(a) {
    return F(this, function*() {
        yield nh();
        fg(a, "WARNING")
    })
}

function oh(a) {
    F(this, function*() {
        var b = yield sf();
        R("nwl_sw_health_payloads") && b ? yield If(a, b): (yield ig(), b = {
            timestamp: a.timestamp
        }, b = a.appShellAssetLoadReport ? {
            payloadName: "appShellAssetLoadReport",
            payload: a.appShellAssetLoadReport,
            options: b
        } : a.clientError ? {
            payloadName: "clientError",
            payload: a.clientError,
            options: b
        } : void 0, b && Z(b.payloadName, b.payload))
    })
}

function nh() {
    return F(this, function*() {
        try {
            yield ig()
        } catch (a) {}
    })
};
const ph = {
    granted: "GRANTED",
    denied: "DENIED",
    unknown: "UNKNOWN"
};

function qh(a) {
    var b = a.data;
    a = b.type;
    b = b.data;
    "notifications_register" === a ? (K("IDToken", b), rh()) : "notifications_check_registration" === a && sh(b)
}

function th() {
    return self.clients.matchAll({
        type: "window",
        includeUncontrolled: !0
    }).then(a => {
        if (a)
            for (const b of a) b.postMessage({
                type: "update_unseen_notifications_count_signal"
            })
    })
}

function uh(a) {
    const b = [];
    a.forEach(c => {
        b.push({
            key: c.key,
            value: c.value
        })
    });
    return b
}

function vh(a) {
    return F(this, function*() {
        const b = uh(a.payload.chrome.extraUrlParams),
            c = {
                recipientId: a.recipientId,
                endpoint: a.payload.chrome.endpoint,
                extraUrlParams: b
            },
            d = Yc(Nc);
        return wh().then(e => jh(e, c, d).then(f => {
            f.json().then(g => {
                if (!g || !g.endpointUrl) return Promise.resolve();
                a.payload.chrome.postedEndpoint && xh(a.payload.chrome.postedEndpoint);
                return yh(a, g.endpointUrl)
            })
        }))
    })
}

function yh(a, b) {
    a.deviceId && K("DeviceId", a.deviceId);
    a.timestampSec && K("TimestampLowerBound", a.timestampSec);
    const c = a.payload.chrome;
    return self.registration.showNotification(c.title, {
        body: c.body,
        icon: c.iconUrl,
        data: {
            nav: b,
            id: c.notificationId,
            attributionTag: c.attributionTag,
            clickEndpoint: c.clickEndpoint
        },
        tag: c.notificationTag || c.title + c.body + c.iconUrl,
        requireInteraction: !0
    }).then(() => {
        zh(a.displayCap)
    }).catch(() => {})
}

function xh(a) {
    if (!a.recordNotificationInteractionsEndpoint) return Promise.reject();
    const b = {
            serializedRecordNotificationInteractionsRequest: a.recordNotificationInteractionsEndpoint.serializedInteractionsRequest
        },
        c = Yc(Oc);
    return wh().then(d => jh(d, b, c))
}

function zh(a) {
    -1 !== a && self.registration.getNotifications().then(b => {
        for (let c = 0; c < b.length - a; c++) b[c].close()
    })
}

function sh(a) {
    const b = [Ah(a), L("RegistrationTimestamp").then(Bh), Ch(), Dh(), Eh()];
    Promise.all(b).catch(() => {
        K("IDToken", a);
        rh();
        return Promise.resolve()
    })
}

function Bh(a) {
    return 9E7 >= Date.now() - (a || 0) ? Promise.resolve() : Promise.reject()
}

function Ah(a) {
    return L("IDToken").then(b => a === b ? Promise.resolve() : Promise.reject())
}

function Ch() {
    return L("Permission").then(a => Notification.permission === a ? Promise.resolve() : Promise.reject())
}

function Dh() {
    return L("Endpoint").then(a => Fh().then(b => a === b ? Promise.resolve() : Promise.reject()))
}

function Eh() {
    return L("application_server_key").then(a => Gh().then(b => a === b ? Promise.resolve() : Promise.reject()))
}

function Hh() {
    var a = Notification.permission;
    if (ph[a]) return ph[a]
}

function rh() {
    K("RegistrationTimestamp", 0);
    Promise.all([Fh(), Ih(), Jh(), Gh()]).then(([a, b, c, d]) => {
        b = b ? Qc(b) : null;
        c = c ? Qc(c) : null;
        d = d ? db(new Uint8Array(d), 4) : null;
        Kh(a, b, c, d)
    }).catch(() => {
        Kh()
    })
}

function Kh(a = null, b = null, c = null, d = null) {
    Uc().then(e => {
        e && (K("Endpoint", a), K("P256dhKey", b), K("AuthKey", c), K("application_server_key", d), K("Permission", Notification.permission), Promise.all([L("DeviceId"), L("NotificationsDisabled")]).then(([f, g]) => {
            if (null !== f && void 0 !== f) var h = f;
            else {
                f = [];
                var k;
                h = h || Mc.length;
                for (k = 0; 256 > k; k++) f[k] = Mc[0 | Math.random() * h];
                h = f.join("")
            }
            Lh(h, null !== a && void 0 !== a ? a : void 0, null !== b && void 0 !== b ? b : void 0, null !== c && void 0 !== c ? c : void 0, null !== d && void 0 !== d ? d : void 0, null !==
                g && void 0 !== g ? g : void 0)
        }))
    })
}

function Lh(a, b, c, d, e, f) {
    F(this, function*() {
        const g = {
                notificationRegistration: {
                    chromeRegistration: {
                        deviceId: a,
                        pushParams: {
                            applicationServerKey: e,
                            authKey: d,
                            p256dhKey: c,
                            browserEndpoint: b
                        },
                        notificationsDisabledInApp: f,
                        permission: Hh()
                    }
                }
            },
            h = Yc(Pc);
        return wh().then(k => jh(k, g, h).then(() => {
            K("DeviceId", a);
            K("RegistrationTimestamp", Date.now());
            K("TimestampLowerBound", Date.now())
        }, l => {
            mh(l)
        }))
    })
}

function Fh() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.endpoint) : Promise.resolve(null))
}

function Ih() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("p256dh")) : Promise.resolve(null))
}

function Jh() {
    return self.registration.pushManager.getSubscription().then(a => a && a.getKey ? Promise.resolve(a.getKey("auth")) : Promise.resolve(null))
}

function Gh() {
    return self.registration.pushManager.getSubscription().then(a => a ? Promise.resolve(a.options.applicationServerKey) : Promise.resolve(null))
}

function wh() {
    return F(this, function*() {
        try {
            return yield ig(!0), lh()
        } catch (a) {
            return yield mh(a), Promise.reject(a)
        }
    })
};
let Mh = void 0;

function Nh(a) {
    return F(this, function*() {
        Mh || (Mh = yield a.open("yt-appshell-assets"));
        return Mh
    })
}

function Oh(a, b) {
    return F(this, function*() {
        const c = yield Nh(a), d = b.map(e => Ph(c, e));
        return Promise.all(d)
    })
}

function Qh(a, b) {
    return F(this, function*() {
        let c;
        try {
            c = yield a.match(b, {
                cacheName: "yt-appshell-assets"
            })
        } catch (d) {}
        return c
    })
}

function Rh(a, b) {
    return F(this, function*() {
        const c = yield Nh(a), d = (yield c.keys()).filter(e => !b.includes(e.url)).map(e => c.delete(e));
        return Promise.all(d)
    })
}

function Sh(a, b, c) {
    return F(this, function*() {
        yield(yield Nh(a)).put(b, c)
    })
}

function Th(a, b) {
    F(this, function*() {
        yield(yield Nh(a)).delete(b)
    })
}

function Ph(a, b) {
    return F(this, function*() {
        return (yield a.match(b)) ? Promise.resolve() : a.add(b)
    })
};
var Uh;
Uh = Df("yt-serviceworker-metadata", {
    U: {
        ["auth"]: {
            O: 1
        },
        ["resource-manifest-assets"]: {
            O: 2
        }
    },
    Z: !0,
    upgrade(a, b) {
        b(1) && Ve(a, "resource-manifest-assets");
        b(2) && Ve(a, "auth")
    },
    version: 2
});
let Vh = null;

function Wh(a) {
    return jf(Uh(), a)
}

function Xh() {
    return F(Yh, function*() {
        const a = yield sf();
        if (a) return Yh.h || (Yh.h = new Yh(a)), Yh.h
    })
}

function Zh(a, b) {
    return F(a, function*() {
        yield Y(yield Wh(this.token), ["resource-manifest-assets"], "readwrite", c => {
            const d = c.objectStore("resource-manifest-assets"),
                e = Date.now();
            return d.put(b, e).then(() => {
                Vh = e;
                let f = !0;
                return Ze(d, {
                    query: IDBKeyRange.bound(0, Date.now()),
                    direction: "prev"
                }, g => f ? (f = !1, g.advance(5)) : d.delete(g.getKey()).then(() => g.continue()))
            })
        })
    })
}

function $h(a, b) {
    return F(a, function*() {
        let c = !1,
            d = 0;
        yield Y(yield Wh(this.token), ["resource-manifest-assets"], "readonly", e => Ze(e.objectStore("resource-manifest-assets"), {
            query: IDBKeyRange.bound(0, Date.now()),
            direction: "prev"
        }, f => {
            if (f.cursor.value.includes(b)) c = !0;
            else return d += 1, f.continue()
        }));
        return c ? d : -1
    })
}

function ai(a) {
    return F(a, function*() {
        Vh || (yield Y(yield Wh(this.token), ["resource-manifest-assets"], "readonly", b => Ze(b.objectStore("resource-manifest-assets"), {
            query: IDBKeyRange.bound(0, Date.now()),
            direction: "prev"
        }, c => {
            Vh = c.getKey()
        })));
        return Vh
    })
}
var Yh = class {
    constructor(a) {
        this.token = a
    }
};

function bi() {
    return F(ci, function*() {
        const a = yield sf();
        if (a) return ci.h || (ci.h = new ci(a)), ci.h
    })
}

function di(a, b) {
    return F(a, function*() {
        yield(yield Wh(this.token)).put("auth", b, "shell_identifier_key")
    })
}

function ei(a) {
    return F(a, function*() {
        return (yield(yield Wh(this.token)).get("auth", "shell_identifier_key")) || ""
    })
}

function fi(a) {
    return F(a, function*() {
        yield(yield Wh(this.token)).clear("auth")
    })
}
var ci = class {
    constructor(a) {
        this.token = a
    }
};

function gi() {
    F(this, function*() {
        const a = yield bi();
        a && (yield fi(a))
    })
};

function hi(a, b) {
    for (; ob(b);) switch (b.m) {
        case 10:
            var c = b,
                d = nb(c.h);
            c = c.h;
            var e = c.h;
            c.h += d;
            var f = c.i,
                g = d;
            if (Za) d = f, c = e, f = g, (e = Ya) || (e = Ya = new TextDecoder("utf-8", {
                fatal: !1
            })), d = e.decode(d.subarray(c, c + f));
            else {
                var h = c = d = void 0;
                let k;
                g = e + g;
                const l = [];
                let n = null;
                for (; e < g;) k = f[e++], 128 > k ? l.push(k) : 224 > k ? e >= g ? l.push(65533) : (h = f[e++], 194 > k || 128 !== (h & 192) ? (e--, l.push(65533)) : l.push((k & 31) << 6 | h & 63)) : 240 > k ? e >= g - 1 ? l.push(65533) : (h = f[e++], 128 !== (h & 192) || 224 === k && 160 > h || 237 === k && 160 <= h || 128 !== ((c = f[e++]) & 192) ?
                    (e--, l.push(65533)) : l.push((k & 15) << 12 | (h & 63) << 6 | c & 63)) : 244 >= k ? e >= g - 2 ? l.push(65533) : (h = f[e++], 128 !== (h & 192) || 0 !== (k << 28) + (h - 144) >> 30 || 128 !== ((c = f[e++]) & 192) || 128 !== ((d = f[e++]) & 192) ? (e--, l.push(65533)) : (h = (k & 7) << 18 | (h & 63) << 12 | (c & 63) << 6 | d & 63, h -= 65536, l.push((h >> 10 & 1023) + 55296, (h & 1023) + 56320))) : l.push(65533), 8192 <= l.length && (n = Xa(n, l), l.length = 0);
                d = Xa(n, l)
            }
            Jb(a, 1, d);
            break;
        default:
            if (!Pb(a, b)) return a
    }
    return a
}
var ii = class extends D {
    constructor(a) {
        super(a)
    }
};

function ji(a) {
    a: {
        var b = new ki;
        for (a = new qb(a); ob(a);) switch (a.m) {
            case 10:
                var c = b,
                    d = a,
                    e = new ii,
                    f = hi,
                    g = d.h.j;
                const h = nb(d.h),
                    k = d.h.h + h;
                d.h.j = k;
                f(e, d);
                f = k - d.h.h;
                if (0 !== f) throw Error("Message parsing ended unexpectedly. Expected to read " + h + " bytes, instead read " + (h - f) + " bytes, either the data ended unexpectedly or the message misreported its own length");
                d.h.h = k;
                d.h.j = g;
                d = e;
                g = ii;
                e = Mb(c, g, 1);
                d = d ? d : new g;
                c = Ib(c, 1);
                e.push(d);
                c.push(d.A(!1));
                break;
            default:
                if (!Pb(b, a)) break a
        }
    }
    return b
}
var ki = class extends D {
        constructor() {
            super(void 0, -1, li)
        }
    },
    li = [1];

function mi(a) {
    return F(this, function*() {
        const b = a.headers.get("X-Resource-Manifest");
        return b ? Promise.resolve(ni(b)) : Promise.reject(Error("No resource manifest header"))
    })
}

function ni(a) {
    return Mb(ji(decodeURIComponent(a)), ii, 1).reduce((b, c) => {
        (c = E(c, 1)) && b.push(c);
        return b
    }, [])
};

function oi(a) {
    return F(a, function*() {
        const b = yield ig();
        if (b && null != E(b, 3)) {
            var c = yield bi();
            c && (c = yield ei(c), E(b, 3) !== c && (Th(this.h, this.i), gi()))
        }
    })
}

function pi(a) {
    return F(a, function*() {
        let b, c;
        try {
            c = yield qi(this, this.j), b = yield mi(c), yield Oh(this.h, b)
        } catch (d) {
            return Promise.reject(d)
        }
        try {
            yield ri(this), yield Sh(this.h, this.i, c)
        } catch (d) {
            return Promise.reject(d)
        }
        if (b) try {
            yield si(this, b, this.i)
        } catch (d) {}
        return Promise.resolve()
    })
}

function ti(a) {
    return F(a, function*() {
        yield oi(this);
        return pi(this)
    })
}

function qi(a, b) {
    return F(a, function*() {
        try {
            return yield q.fetch(new Request(b))
        } catch (c) {
            return Promise.reject(c)
        }
    })
}

function ri(a) {
    return F(a, function*() {
        var b = yield ig();
        let c;
        b && null != E(b, 3) && (c = E(b, 3));
        return c ? (b = yield bi()) ? Promise.resolve(di(b, c)) : Promise.reject(Error("Could not get AuthMonitor instance")) : Promise.reject(Error("Could not get datasync ID"))
    })
}

function si(a, b, c) {
    return F(a, function*() {
        const d = yield Xh();
        if (d) try {
            yield Zh(d, b)
        } catch (e) {
            yield mh(e)
        }
        b.push(c);
        try {
            yield Rh(this.h, b)
        } catch (e) {
            yield mh(e)
        }
        return Promise.resolve()
    })
}

function ui(a, b) {
    return F(a, function*() {
        return Qh(this.h, b)
    })
}

function vi(a) {
    return F(a, function*() {
        return Qh(this.h, this.i)
    })
}
var wi = class {
    constructor() {
        var a = self.location.origin + "/app_shell",
            b = self.location.origin + "/app_shell_home";
        this.h = self.caches;
        this.j = a;
        this.i = b
    }
};

function xi(a, b) {
    return F(a, function*() {
        const c = b.request,
            d = yield ui(this.h, c.url);
        if (d) return oh({
            appShellAssetLoadReport: {
                assetPath: c.url,
                cacheHit: !0
            },
            timestamp: T()
        }), d;
        yi(c);
        return zi(b)
    })
}

function Ai(a, b) {
    return F(a, function*() {
        const c = yield Bi(this, b);
        if (c.response && (c.response.ok || "opaqueredirect" === c.response.type || 429 === c.response.status || 303 === c.response.status || 300 <= c.response.status && 400 > c.response.status)) return c.response;
        const d = yield vi(this.h);
        if (d) return Ci(this), d;
        Di(this);
        return c.response ? c.response : Promise.reject(c.error)
    })
}

function Ei(a, b) {
    b = new URL(b);
    if (!a.i.includes(b.pathname)) return !1;
    if (!b.search) return !0;
    for (const c of a.l)
        if (a = b.searchParams.get(c.key), void 0 === c.value || a === c.value)
            if (b.searchParams.delete(c.key), !b.search) return !0;
    return !1
}

function Fi(a, b) {
    return F(a, function*() {
        const c = yield vi(this.h);
        if (!c) return Di(this), zi(b);
        Ci(this);
        var d;
        a: {
            if (c.headers && (d = c.headers.get("date")) && (d = Date.parse(d), !isNaN(d))) {
                d = Math.round(T() - d);
                break a
            }
            d = -1
        }
        if (!(-1 < d && 7 <= d / 864E5)) return c;
        d = yield Bi(this, b);
        return d.response && d.response.ok ? d.response : c
    })
}

function zi(a) {
    return Promise.resolve(a.preloadResponse).then(b => b || q.fetch(a.request))
}

function yi(a) {
    const b = {
        assetPath: a.url,
        cacheHit: !1
    };
    Xh().then(c => {
        if (c) {
            var d = ai(c).then(e => {
                e && (b.currentAppBundleTimestampSec = String(Math.floor(e / 1E3)))
            });
            c = $h(c, a.url).then(e => {
                b.appBundleVersionDiffCount = e
            });
            Promise.all([d, c]).catch(e => {
                mh(e)
            }).finally(() => {
                oh({
                    appShellAssetLoadReport: b,
                    timestamp: T()
                })
            })
        } else oh({
            appShellAssetLoadReport: b,
            timestamp: T()
        })
    })
}

function Ci(a) {
    oh({
        appShellAssetLoadReport: {
            assetPath: a.h.i,
            cacheHit: !0
        },
        timestamp: T()
    })
}

function Di(a) {
    oh({
        appShellAssetLoadReport: {
            assetPath: a.h.i,
            cacheHit: !1
        },
        timestamp: T()
    })
}

function Bi(a, b) {
    return F(a, function*() {
        try {
            return {
                response: yield zi(b)
            }
        } catch (c) {
            return {
                error: c
            }
        }
    })
}
var Li = class {
    constructor() {
        var a = Gi,
            b = Hi,
            c = Ii,
            d = Ji;
        const e = [];
        e.push({
            key: "feature",
            value: "ytca"
        });
        for (var f of Vb) e.push({
            key: f
        });
        f = Ki();
        this.h = a;
        this.m = b;
        this.o = c;
        this.i = d;
        this.l = e;
        this.j = f
    }
};
var Ji = ["/", "/feed/downloads"];
const Mi = [/^\/$/, /^\/feed\/downloads$/],
    Ni = [/^\/$/, /^\/feed\/\w*/, /^\/results$/, /^\/playlist$/, /^\/watch$/, /^\/channel\/\w*/];

function Ki() {
    return new RegExp((R("kevlar_sw_app_wide_fallback") ? Ni : Mi).map(a => a.source).join("|"))
}
var Hi = /^https:\/\/[\w-]*\.?youtube\.com.*(\.css$|\.js$|\.ico$|\/ytmweb\/_\/js\/|\/ytmweb\/_\/ss\/)/,
    Ii = /^https:\/\/[\w-]*\.?youtube\.com.*(purge_shell=1|\/signin|\/logout)/;
var Oi = class {
    constructor() {
        var a = Gi,
            b = new Li;
        this.h = self;
        this.i = a;
        this.m = b;
        this.H = Rc
    }
    init() {
        this.h.oninstall = this.o.bind(this);
        this.h.onactivate = this.j.bind(this);
        this.h.onfetch = this.l.bind(this);
        this.h.onmessage = this.B.bind(this)
    }
    o(a) {
        this.h.skipWaiting();
        const b = ti(this.i).catch(c => {
            mh(c);
            return Promise.resolve()
        });
        a.waitUntil(b)
    }
    j(a) {
        const b = [this.h.clients.claim()];
        this.h.registration.navigationPreload && b.push(this.h.registration.navigationPreload.enable());
        a.waitUntil(Promise.all(b))
    }
    l(a) {
        return F(this, function*() {
            var b = this.m,
                c = !!this.h.registration.navigationPreload;
            const d = a.request;
            if (b.o.test(d.url)) jg.h && (delete jg.h.h, q.__SAPISID = void 0, O("VISITOR_DATA", void 0), O("SESSION_INDEX", void 0), O("DELEGATED_SESSION_ID", void 0)), c = a.respondWith, b = b.h, Th(b.h, b.i), gi(), b = zi(a), c.call(a, b);
            else if (b.m.test(d.url)) a.respondWith(xi(b,
                a));
            else if ("navigate" === d.mode) {
                if (R("sw_nav_request_network_first")) {
                    var e = new URL(d.url);
                    e = b.j.test(e.pathname)
                } else e = !1;
                e ? a.respondWith(Ai(b, a)) : Ei(b, d.url) ? a.respondWith(Fi(b, a)) : c && a.respondWith(zi(a))
            }
        })
    }
    B(a) {
        const b = a.data;
        this.H.includes(b.type) ? qh(a) : "refresh_shell" === b.type && pi(this.i).catch(c => {
            mh(c)
        })
    }
};

function Pi() {
    let a = t("ytglobal.storage_");
    a || (a = new Qi, u("ytglobal.storage_", a));
    return a
}
var Qi = class {
    estimate() {
        var a, b;
        return F(this, function*() {
            const c = navigator;
            if (null === (a = c.storage) || void 0 === a ? 0 : a.estimate) return c.storage.estimate();
            if (null === (b = c.webkitTemporaryStorage) || void 0 === b ? 0 : b.queryUsageAndQuota) return Ri()
        })
    }
};

function Ri() {
    const a = navigator;
    return new Promise((b, c) => {
        var d;
        null !== (d = a.webkitTemporaryStorage) && void 0 !== d && d.queryUsageAndQuota ? a.webkitTemporaryStorage.queryUsageAndQuota((e, f) => {
            b({
                usage: e,
                quota: f
            })
        }, e => {
            c(e)
        }) : c(Error("webkitTemporaryStorage is not supported."))
    })
}
u("ytglobal.storageClass_", Qi);

function Si(a, b) {
    Pi().estimate().then(c => {
        c = Object.assign(Object.assign({}, b), {
            isSw: void 0 === self.document,
            isIframe: self !== self.top,
            deviceStorageUsageMbytes: Ti(null === c || void 0 === c ? void 0 : c.usage),
            deviceStorageQuotaMbytes: Ti(null === c || void 0 === c ? void 0 : c.quota)
        });
        a.h("idbQuotaExceeded", c)
    })
}
class Ui {
    constructor() {
        var a = Vi;
        this.handleError = Wi;
        this.h = a;
        this.i = !1;
        void 0 === self.document || self.addEventListener("beforeunload", () => {
            this.i = !0
        });
        this.j = Math.random() <= hd("ytidb_transaction_ended_event_rate_limit", .02)
    }
    T(a, b) {
        switch (a) {
            case "IDB_DATA_CORRUPTED":
                R("idb_data_corrupted_killswitch") || this.h("idbDataCorrupted", b);
                break;
            case "IDB_UNEXPECTEDLY_CLOSED":
                this.h("idbUnexpectedlyClosed", b);
                break;
            case "IS_SUPPORTED_COMPLETED":
                R("idb_is_supported_completed_killswitch") || this.h("idbIsSupportedCompleted", b);
                break;
            case "QUOTA_EXCEEDED":
                Si(this, b);
                break;
            case "TRANSACTION_ENDED":
                this.j && this.h("idbTransactionEnded", b);
                break;
            case "TRANSACTION_UNEXPECTEDLY_ABORTED":
                a =
                    Object.assign(Object.assign({}, b), {
                        hasWindowUnloaded: this.i
                    }), this.h("idbTransactionAborted", a)
        }
    }
}

function Ti(a) {
    return "undefined" === typeof a ? "-1" : String(Math.ceil(a / 1048576))
};
Sf(Pf(), {
    D: [{
        sa: /Failed to fetch/,
        weight: 500
    }],
    C: []
});
var {
    handleError: Wi = eg,
    T: Vi = Z
} = {
    handleError: function(a) {
        return F(this, function*() {
            yield nh();
            fg(a)
        })
    },
    T: function(a, b) {
        return F(this, function*() {
            yield nh();
            Z(a, b)
        })
    }
};
for (te = new Ui; 0 < U.length;) {
    const a = U.shift();
    switch (a.type) {
        case "ERROR":
            te.handleError(a.payload);
            break;
        case "EVENT":
            te.T(a.eventType, a.payload)
    }
}
jg.h = new jg(`${self.location.origin}/sw.js_data`);
self.onnotificationclick = function(a) {
    a.notification.close();
    const b = a.notification.data,
        c = self.clients.matchAll({
            type: "window",
            includeUncontrolled: !0
        });
    c.then(d => {
        a: {
            var e = b.nav;
            for (const f of d)
                if (f.url === e) {
                    f.focus();
                    break a
                }
            self.clients.openWindow(e)
        }
    });
    a.waitUntil(c);
    a.waitUntil(xh(b.clickEndpoint))
};
self.onpush = function(a) {
    a.waitUntil(L("NotificationsDisabled").then(b => {
        if (b) return Promise.resolve();
        if (a.data && a.data.text().length) try {
            return vh(a.data.json())
        } catch (c) {
            return Promise.resolve(c.message)
        }
        return Promise.resolve()
    }));
    a.waitUntil(th())
};
self.onpushsubscriptionchange = function() {
    rh()
};
const Gi = new wi;
(new Oi).init();