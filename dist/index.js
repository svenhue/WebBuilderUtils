import { defineStore as fe, getActivePinia as be } from "pinia";
import { ref as Ce, computed as Y, inject as z, toValue as Oe, markRaw as Mt, h as Ke, defineComponent as Nt, createApp as Dt, getCurrentScope as jt, onScopeDispose as Rt, unref as Gt, watch as Bt } from "vue";
import $t from "axios";
import { injectable as M, inject as L, Container as ct } from "inversify";
import { get as Ae, set as Vt } from "lodash-es";
import { createRouter as kt, createWebHistory as Wt } from "vue-router";
import { Platform as Ht, Quasar as qt } from "quasar";
var et = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var tt;
(function(t) {
  (function(e) {
    var n = typeof et == "object" ? et : typeof self == "object" ? self : typeof this == "object" ? this : Function("return this;")(), r = i(t);
    typeof n.Reflect > "u" ? n.Reflect = t : r = i(n.Reflect, r), e(r);
    function i(s, o) {
      return function(p, d) {
        typeof s[p] != "function" && Object.defineProperty(s, p, { configurable: !0, writable: !0, value: d }), o && o(p, d);
      };
    }
  })(function(e) {
    var n = Object.prototype.hasOwnProperty, r = typeof Symbol == "function", i = r && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", s = r && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", o = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, d = !o && !p, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: o ? function() {
        return xe(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return xe({ __proto__: null });
      } : function() {
        return xe({});
      },
      has: d ? function(a, c) {
        return n.call(a, c);
      } : function(a, c) {
        return c in a;
      },
      get: d ? function(a, c) {
        return n.call(a, c) ? a[c] : void 0;
      } : function(a, c) {
        return a[c];
      }
    }, _ = Object.getPrototypeOf(Function), T = typeof process == "object" && process.env && process.env.REFLECT_METADATA_USE_MAP_POLYFILL === "true", E = !T && typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Pt(), P = !T && typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : It(), I = !T && typeof WeakMap == "function" ? WeakMap : Tt(), D = new I();
    function F(a, c, l, u) {
      if (N(l)) {
        if (!Qe(a))
          throw new TypeError();
        if (!Ye(c))
          throw new TypeError();
        return V(a, c);
      } else {
        if (!Qe(a))
          throw new TypeError();
        if (!j(c))
          throw new TypeError();
        if (!j(u) && !N(u) && !oe(u))
          throw new TypeError();
        return oe(u) && (u = void 0), l = Z(l), $(a, c, l, u);
      }
    }
    e("decorate", F);
    function U(a, c) {
      function l(u, v) {
        if (!j(u))
          throw new TypeError();
        if (!N(v) && !xt(v))
          throw new TypeError();
        ve(a, c, u, v);
      }
      return l;
    }
    e("metadata", U);
    function B(a, c, l, u) {
      if (!j(l))
        throw new TypeError();
      return N(u) || (u = Z(u)), ve(a, c, l, u);
    }
    e("defineMetadata", B);
    function pe(a, c, l) {
      if (!j(c))
        throw new TypeError();
      return N(l) || (l = Z(l)), k(a, c, l);
    }
    e("hasMetadata", pe);
    function ee(a, c, l) {
      if (!j(c))
        throw new TypeError();
      return N(l) || (l = Z(l)), J(a, c, l);
    }
    e("hasOwnMetadata", ee);
    function f(a, c, l) {
      if (!j(c))
        throw new TypeError();
      return N(l) || (l = Z(l)), te(a, c, l);
    }
    e("getMetadata", f);
    function g(a, c, l) {
      if (!j(c))
        throw new TypeError();
      return N(l) || (l = Z(l)), q(a, c, l);
    }
    e("getOwnMetadata", g);
    function y(a, c) {
      if (!j(a))
        throw new TypeError();
      return N(c) || (c = Z(c)), se(a, c);
    }
    e("getMetadataKeys", y);
    function S(a, c) {
      if (!j(a))
        throw new TypeError();
      return N(c) || (c = Z(c)), Ue(a, c);
    }
    e("getOwnMetadataKeys", S);
    function x(a, c, l) {
      if (!j(c))
        throw new TypeError();
      N(l) || (l = Z(l));
      var u = H(
        c,
        l,
        /*Create*/
        !1
      );
      if (N(u) || !u.delete(a))
        return !1;
      if (u.size > 0)
        return !0;
      var v = D.get(c);
      return v.delete(l), v.size > 0 || D.delete(c), !0;
    }
    e("deleteMetadata", x);
    function V(a, c) {
      for (var l = a.length - 1; l >= 0; --l) {
        var u = a[l], v = u(c);
        if (!N(v) && !oe(v)) {
          if (!Ye(v))
            throw new TypeError();
          c = v;
        }
      }
      return c;
    }
    function $(a, c, l, u) {
      for (var v = a.length - 1; v >= 0; --v) {
        var R = a[v], b = R(c, l, u);
        if (!N(b) && !oe(b)) {
          if (!j(b))
            throw new TypeError();
          u = b;
        }
      }
      return u;
    }
    function H(a, c, l) {
      var u = D.get(a);
      if (N(u)) {
        if (!l)
          return;
        u = new E(), D.set(a, u);
      }
      var v = u.get(c);
      if (N(v)) {
        if (!l)
          return;
        v = new E(), u.set(c, v);
      }
      return v;
    }
    function k(a, c, l) {
      var u = J(a, c, l);
      if (u)
        return !0;
      var v = Se(c);
      return oe(v) ? !1 : k(a, v, l);
    }
    function J(a, c, l) {
      var u = H(
        c,
        l,
        /*Create*/
        !1
      );
      return N(u) ? !1 : wt(u.has(a));
    }
    function te(a, c, l) {
      var u = J(a, c, l);
      if (u)
        return q(a, c, l);
      var v = Se(c);
      if (!oe(v))
        return te(a, v, l);
    }
    function q(a, c, l) {
      var u = H(
        c,
        l,
        /*Create*/
        !1
      );
      if (!N(u))
        return u.get(a);
    }
    function ve(a, c, l, u) {
      var v = H(
        l,
        u,
        /*Create*/
        !0
      );
      v.set(a, c);
    }
    function se(a, c) {
      var l = Ue(a, c), u = Se(a);
      if (u === null)
        return l;
      var v = se(u, c);
      if (v.length <= 0)
        return l;
      if (l.length <= 0)
        return v;
      for (var R = new P(), b = [], C = 0, m = l; C < m.length; C++) {
        var A = m[C], O = R.has(A);
        O || (R.add(A), b.push(A));
      }
      for (var X = 0, Xe = v; X < Xe.length; X++) {
        var A = Xe[X], O = R.has(A);
        O || (R.add(A), b.push(A));
      }
      return b;
    }
    function Ue(a, c) {
      var l = [], u = H(
        a,
        c,
        /*Create*/
        !1
      );
      if (N(u))
        return l;
      for (var v = u.keys(), R = At(v), b = 0; ; ) {
        var C = _t(R);
        if (!C)
          return l.length = b, l;
        var m = Ot(C);
        try {
          l[b] = m;
        } catch (A) {
          try {
            Et(R);
          } finally {
            throw A;
          }
        }
        b++;
      }
    }
    function Je(a) {
      if (a === null)
        return 1;
      switch (typeof a) {
        case "undefined":
          return 0;
        case "boolean":
          return 2;
        case "string":
          return 3;
        case "symbol":
          return 4;
        case "number":
          return 5;
        case "object":
          return a === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function N(a) {
      return a === void 0;
    }
    function oe(a) {
      return a === null;
    }
    function yt(a) {
      return typeof a == "symbol";
    }
    function j(a) {
      return typeof a == "object" ? a !== null : typeof a == "function";
    }
    function bt(a, c) {
      switch (Je(a)) {
        case 0:
          return a;
        case 1:
          return a;
        case 2:
          return a;
        case 3:
          return a;
        case 4:
          return a;
        case 5:
          return a;
      }
      var l = c === 3 ? "string" : c === 5 ? "number" : "default", u = Ze(a, i);
      if (u !== void 0) {
        var v = u.call(a, l);
        if (j(v))
          throw new TypeError();
        return v;
      }
      return Ct(a, l === "default" ? "number" : l);
    }
    function Ct(a, c) {
      if (c === "string") {
        var l = a.toString;
        if (ae(l)) {
          var u = l.call(a);
          if (!j(u))
            return u;
        }
        var v = a.valueOf;
        if (ae(v)) {
          var u = v.call(a);
          if (!j(u))
            return u;
        }
      } else {
        var v = a.valueOf;
        if (ae(v)) {
          var u = v.call(a);
          if (!j(u))
            return u;
        }
        var R = a.toString;
        if (ae(R)) {
          var u = R.call(a);
          if (!j(u))
            return u;
        }
      }
      throw new TypeError();
    }
    function wt(a) {
      return !!a;
    }
    function St(a) {
      return "" + a;
    }
    function Z(a) {
      var c = bt(
        a,
        3
        /* String */
      );
      return yt(c) ? c : St(c);
    }
    function Qe(a) {
      return Array.isArray ? Array.isArray(a) : a instanceof Object ? a instanceof Array : Object.prototype.toString.call(a) === "[object Array]";
    }
    function ae(a) {
      return typeof a == "function";
    }
    function Ye(a) {
      return typeof a == "function";
    }
    function xt(a) {
      switch (Je(a)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function Ze(a, c) {
      var l = a[c];
      if (l != null) {
        if (!ae(l))
          throw new TypeError();
        return l;
      }
    }
    function At(a) {
      var c = Ze(a, s);
      if (!ae(c))
        throw new TypeError();
      var l = c.call(a);
      if (!j(l))
        throw new TypeError();
      return l;
    }
    function Ot(a) {
      return a.value;
    }
    function _t(a) {
      var c = a.next();
      return c.done ? !1 : c;
    }
    function Et(a) {
      var c = a.return;
      c && c.call(a);
    }
    function Se(a) {
      var c = Object.getPrototypeOf(a);
      if (typeof a != "function" || a === _ || c !== _)
        return c;
      var l = a.prototype, u = l && Object.getPrototypeOf(l);
      if (u == null || u === Object.prototype)
        return c;
      var v = u.constructor;
      return typeof v != "function" || v === a ? c : v;
    }
    function Pt() {
      var a = {}, c = [], l = (
        /** @class */
        function() {
          function b(C, m, A) {
            this._index = 0, this._keys = C, this._values = m, this._selector = A;
          }
          return b.prototype["@@iterator"] = function() {
            return this;
          }, b.prototype[s] = function() {
            return this;
          }, b.prototype.next = function() {
            var C = this._index;
            if (C >= 0 && C < this._keys.length) {
              var m = this._selector(this._keys[C], this._values[C]);
              return C + 1 >= this._keys.length ? (this._index = -1, this._keys = c, this._values = c) : this._index++, { value: m, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, b.prototype.throw = function(C) {
            throw this._index >= 0 && (this._index = -1, this._keys = c, this._values = c), C;
          }, b.prototype.return = function(C) {
            return this._index >= 0 && (this._index = -1, this._keys = c, this._values = c), { value: C, done: !0 };
          }, b;
        }()
      );
      return (
        /** @class */
        function() {
          function b() {
            this._keys = [], this._values = [], this._cacheKey = a, this._cacheIndex = -2;
          }
          return Object.defineProperty(b.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), b.prototype.has = function(C) {
            return this._find(
              C,
              /*insert*/
              !1
            ) >= 0;
          }, b.prototype.get = function(C) {
            var m = this._find(
              C,
              /*insert*/
              !1
            );
            return m >= 0 ? this._values[m] : void 0;
          }, b.prototype.set = function(C, m) {
            var A = this._find(
              C,
              /*insert*/
              !0
            );
            return this._values[A] = m, this;
          }, b.prototype.delete = function(C) {
            var m = this._find(
              C,
              /*insert*/
              !1
            );
            if (m >= 0) {
              for (var A = this._keys.length, O = m + 1; O < A; O++)
                this._keys[O - 1] = this._keys[O], this._values[O - 1] = this._values[O];
              return this._keys.length--, this._values.length--, C === this._cacheKey && (this._cacheKey = a, this._cacheIndex = -2), !0;
            }
            return !1;
          }, b.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = a, this._cacheIndex = -2;
          }, b.prototype.keys = function() {
            return new l(this._keys, this._values, u);
          }, b.prototype.values = function() {
            return new l(this._keys, this._values, v);
          }, b.prototype.entries = function() {
            return new l(this._keys, this._values, R);
          }, b.prototype["@@iterator"] = function() {
            return this.entries();
          }, b.prototype[s] = function() {
            return this.entries();
          }, b.prototype._find = function(C, m) {
            return this._cacheKey !== C && (this._cacheIndex = this._keys.indexOf(this._cacheKey = C)), this._cacheIndex < 0 && m && (this._cacheIndex = this._keys.length, this._keys.push(C), this._values.push(void 0)), this._cacheIndex;
          }, b;
        }()
      );
      function u(b, C) {
        return b;
      }
      function v(b, C) {
        return C;
      }
      function R(b, C) {
        return [b, C];
      }
    }
    function It() {
      return (
        /** @class */
        function() {
          function a() {
            this._map = new E();
          }
          return Object.defineProperty(a.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), a.prototype.has = function(c) {
            return this._map.has(c);
          }, a.prototype.add = function(c) {
            return this._map.set(c, c), this;
          }, a.prototype.delete = function(c) {
            return this._map.delete(c);
          }, a.prototype.clear = function() {
            this._map.clear();
          }, a.prototype.keys = function() {
            return this._map.keys();
          }, a.prototype.values = function() {
            return this._map.values();
          }, a.prototype.entries = function() {
            return this._map.entries();
          }, a.prototype["@@iterator"] = function() {
            return this.keys();
          }, a.prototype[s] = function() {
            return this.keys();
          }, a;
        }()
      );
    }
    function Tt() {
      var a = 16, c = w.create(), l = u();
      return (
        /** @class */
        function() {
          function m() {
            this._key = u();
          }
          return m.prototype.has = function(A) {
            var O = v(
              A,
              /*create*/
              !1
            );
            return O !== void 0 ? w.has(O, this._key) : !1;
          }, m.prototype.get = function(A) {
            var O = v(
              A,
              /*create*/
              !1
            );
            return O !== void 0 ? w.get(O, this._key) : void 0;
          }, m.prototype.set = function(A, O) {
            var X = v(
              A,
              /*create*/
              !0
            );
            return X[this._key] = O, this;
          }, m.prototype.delete = function(A) {
            var O = v(
              A,
              /*create*/
              !1
            );
            return O !== void 0 ? delete O[this._key] : !1;
          }, m.prototype.clear = function() {
            this._key = u();
          }, m;
        }()
      );
      function u() {
        var m;
        do
          m = "@@WeakMap@@" + C();
        while (w.has(c, m));
        return c[m] = !0, m;
      }
      function v(m, A) {
        if (!n.call(m, l)) {
          if (!A)
            return;
          Object.defineProperty(m, l, { value: w.create() });
        }
        return m[l];
      }
      function R(m, A) {
        for (var O = 0; O < A; ++O)
          m[O] = Math.random() * 255 | 0;
        return m;
      }
      function b(m) {
        return typeof Uint8Array == "function" ? typeof crypto < "u" ? crypto.getRandomValues(new Uint8Array(m)) : typeof msCrypto < "u" ? msCrypto.getRandomValues(new Uint8Array(m)) : R(new Uint8Array(m), m) : R(new Array(m), m);
      }
      function C() {
        var m = b(a);
        m[6] = m[6] & 79 | 64, m[8] = m[8] & 191 | 128;
        for (var A = "", O = 0; O < a; ++O) {
          var X = m[O];
          (O === 4 || O === 6 || O === 8) && (A += "-"), X < 16 && (A += "0"), A += X.toString(16).toLowerCase();
        }
        return A;
      }
    }
    function xe(a) {
      return a.__ = void 0, delete a.__, a;
    }
  });
})(tt || (tt = {}));
class kr {
  constructor() {
    this.name = "UtilityModule", this.ressources = [];
  }
  InitializeServices() {
  }
}
var Lt = /* @__PURE__ */ ((t) => (t["Connect Data"] = "Connect Data", t["Use Javascript"] = "Use Javascript", t["Use Array"] = "Use Array", t["Demo Data"] = "Demo Data", t))(Lt || {});
class Ft {
  constructor(e, n) {
    this.key = e, this.value = n;
  }
}
class lt {
  constructor(e) {
    this.keyValuePairs = e ?? new Array();
  }
  add(e, n) {
    this.keyValuePairs.push(new Ft(e, n));
  }
  get(e) {
    let n = null;
    return this.keyValuePairs.forEach((r) => {
      r.key == e && (n = r.value);
    }), n;
  }
  setValue(e, n) {
    const r = this.keyValuePairs.find((i) => i.key == e);
    r ? r.value = n : this.add(e, n);
  }
  remove(e) {
    this.keyValuePairs.forEach((n, r) => {
      n.key == e && this.keyValuePairs.splice(r, 1);
    });
  }
  toObject() {
    const e = {};
    return this.keyValuePairs.forEach((n) => {
      e[n.key] = n.value;
    }), e;
  }
}
function zt(t) {
  let e = 0;
  const n = t.map((r) => r);
  return n.length == 0 ? e = 0 : e = Math.max(...n) + 1, e;
}
function Ut(t, e, n) {
  for (var r = t.length, i = -1; n-- && i++ < r && (i = t.indexOf(e, i), !(i < 0)); )
    ;
  return i;
}
const _e = fe("creator", {
  state: () => ({
    creations: Array(),
    avaiblecreationtypes: [
      {
        name: "diagram",
        subtypes: [
          {
            name: "Dont specify notation",
            suffix: "diagram"
          },
          {
            name: "Business Process Modelling Notation (bpmn)",
            suffix: "bpmn"
          },
          {
            name: "Unified Modelling Language (uml)",
            suffix: "uml"
          },
          {
            name: "Entity Relationship Diagram (erm)",
            suffix: "erm"
          },
          {
            name: "Decision Model (dmn)",
            suffix: "dmn"
          }
        ]
      }
    ],
    avaiblenotations: [
      { name: "bpmn" }
    ]
  }),
  getters: {
    getSubTypeNames: (t) => t.avaiblecreationtypes.map((e) => e.subtypes.map((n) => n.name)).flat(),
    getallCreations: (t) => t.creations,
    getActiveCreations: (t) => t.creations.filter((e) => e.active),
    getSolutionByContext: (t) => (e) => t.creations.find((n) => n.sessioncontextid == e)
  },
  actions: {
    addCreation(t) {
      this.creations.push(t);
    }
  }
}), nt = fe("modellingstore", {
  state: () => ({
    focussedElements: [],
    registeredmodellingcontexts: [],
    currentcontext: -1,
    currentAction: ""
  }),
  getters: {
    getScopedSolution() {
      return _e(be()).getSolutionByContext(this.currentcontext);
    },
    getSolutionModel() {
      var e;
      const t = this.getScopedSolution;
      return (e = Q().getContextWebNodes(t == null ? void 0 : t.sessioncontextid).value) == null ? void 0 : e.filter((n) => n.type.includes(t.type));
    },
    getcurrentcontextid: (t) => t.currentcontext,
    getcurrentcontext: (t) => Q().webnodecontexts.find((e) => e.contextid === t.currentcontext),
    getavaibleNotations() {
      const t = [];
      return this.getall.map(
        (e) => {
          var n;
          if (e.type != null) {
            const r = (n = e.type) == null ? void 0 : n.indexOf(":");
            t.includes(e.type.slice(0, r)) || t.push(e.type.slice(0, r));
          }
        }
      ), t;
    },
    getsubtypes() {
      return (t) => {
        const e = [];
        return this.getavaibleModellingElements.map(
          (n) => {
            if (n.type != null && n.type.includes(t)) {
              let r = n.type.replace(t + ":", "");
              const i = r.indexOf(":");
              i != -1 && (r = r.slice(0, i)), e.includes(r) || e.push(r);
            }
          }
        ), e;
      };
    },
    getmodell: () => (t) => {
      var r;
      const n = _e(be()).$state.avaiblenotations;
      return (r = Q().getContextWebNodes(t).value) == null ? void 0 : r.filter((i) => {
        if (typeof i.type == "string") {
          for (const s of n)
            if (i.type.includes(s.name))
              return !0;
        }
        return !1;
      });
    },
    getFirstFocussedElement: (t) => (e) => {
      var n;
      return Q().byId(e, (n = t.focussedElements.find((r) => r.contextid == e)) == null ? void 0 : n.elements[0]);
    },
    getfocussedElementsIds: (t) => (e) => {
      var n;
      return (n = t.focussedElements.find((r) => r.contextid == e)) == null ? void 0 : n.elements;
    },
    getfocussedElements: (t) => (e) => {
      var r, i;
      const n = (r = t.focussedElements.find((s) => s.contextid == e)) == null ? void 0 : r.elements;
      return (i = Q().getContextWebNodes(e).value) == null ? void 0 : i.filter((s) => n == null ? void 0 : n.includes(s.id));
    },
    getTypeRelatedElements() {
      return (t, e) => this.getavaibleModellingElements.filter((n) => {
        var r;
        return (r = n.type) == null ? void 0 : r.includes(t.substring(0, Ut(t, ":", e)));
      });
    }
  },
  actions: {}
});
function ut(t, e, n, r, i) {
  const s = Array.isArray(r) ? r : [r];
  let o = [];
  for (let p = 0; p < (t == null ? void 0 : t.length); p++) {
    const d = t[p];
    if (s.includes(d[n]) && o.push(d), Array.isArray(d[e])) {
      const w = ut(d[e], e, n, s);
      w != null && (o = o.concat(w));
    }
  }
  return o.length === 0 ? null : o.length === 1 && (i == null ? void 0 : i.array) != !0 ? o[0] : o;
}
const Q = fe("webnodecontext", () => {
  const t = Ce(Array()), e = Ce(Array());
  function n(f, g) {
    return Y(() => {
      var y, S;
      return g ? (y = t.value.find((x) => x.optionaluniquename == g)) == null ? void 0 : y.webnodes : (S = t.value.find((x) => x.contextid == f)) == null ? void 0 : S.webnodes;
    });
  }
  function r(f, g, y) {
    return Y(() => i(f, g).value.webnodes.filter((x) => y.includes(x.type)));
  }
  function i(f, g) {
    return Y(() => f != null ? t.value.find((y) => y.contextid == f) : t.value.find((y) => y.optionaluniquename == g));
  }
  function s(f, g) {
    return Y(() => f == null ? void 0 : f.nodetree.find((y) => y.id === g));
  }
  function o(f, g) {
    return Y(() => {
      var S, x, V;
      const y = (x = (S = t.value.find(($) => $.contextid == f)) == null ? void 0 : S.webnodes) == null ? void 0 : x.find(($) => $.id == g);
      return y ?? ut(
        (V = t.value.find(($) => $.contextid == f)) == null ? void 0 : V.webnodes,
        "children",
        "id",
        g
      );
    });
  }
  function p(f, g, y) {
    return Y(() => {
      var S;
      return (S = t.value.find((x) => x.contextid == f)) == null ? void 0 : S.webnodes.find((x) => x[g] == y);
    });
  }
  function d(f, g) {
    return Y(() => {
      var y;
      return (y = t.value.find((S) => S.contextid == f)) == null ? void 0 : y.webnodes.filter((S) => S.parent == g);
    });
  }
  function w(f, g) {
    return Y(() => f == null ? void 0 : f.webnodes.filter((y) => y.parentId = y.id));
  }
  function _(f) {
    const g = zt(
      t.value.map((S) => S.contextid)
    ), y = new WebNodeContextContainer(g);
    return y.optionaluniquename = f, t.value.push(y), g;
  }
  function T(f) {
    const g = t.value.findIndex(
      (S) => S.contextid == f
    );
    let y = t.value[g].contextid;
    try {
      t.value.splice(g, 1);
    } catch (S) {
      y = S;
    }
    return y;
  }
  function E(f, g, y, S) {
    const x = o(f, g);
    U(y, x);
    const V = U, $ = I, H = o;
    function k(J) {
      var te, q;
      if (((te = J.children) == null ? void 0 : te.length) >= 0)
        for (const ve of J.children) {
          const se = H(f, ve);
          V(y, se, J.id), $(f, ve), ((q = se.children) == null ? void 0 : q.length) >= 0 && k(se);
        }
    }
    k(x), I(f, g);
  }
  function P() {
    const f = Math.max(...e.value);
    if (f === -1 / 0)
      return e.value.push(0), 0;
    if (f >= 0)
      return e.value.push(f + 1), f + 1;
  }
  const I = function(f, g, y, S = !1) {
    var V, $, H;
    const x = nt();
    (V = x.focussedElements.find((k) => k.contextid == f)) != null && V.elements.includes(g.id) && (($ = x.focussedElements.find((k) => k.contextid == f)) == null || $.elements.splice(x.focussedElements.indexOf(g.id), 1)), (H = n(f).value) == null || H.findIndex(
      (k) => k.id == g.id
    );
  }, D = function(f, g, y, S = !1) {
    var V, $, H, k;
    const x = nt();
    for (const J of g) {
      (V = x.focussedElements.find((q) => q.contextid == f)) != null && V.elements.includes(J.id) && (($ = x.focussedElements.find((q) => q.contextid == f)) == null || $.elements.splice(x.focussedElements.indexOf(J.id), 1));
      const te = (H = n(f).value) == null ? void 0 : H.findIndex(
        (q) => q.id == J.id
      );
      (k = t.value.find((q) => q.contextid == f)) == null || k.webnodes.splice(te, 1);
    }
  }, F = function(f, g, y, S = !1) {
    for (const x of g)
      U(f, x);
  }, U = function(f, g, y, S = !1) {
    return g.id = P(), t.value.find(
      (V) => V.contextid == f
    ).webnodes.push(g), g;
  }, B = function(f, g, y, S = !1) {
    typeof g == "number" ? o(f, g).value : o(f, g.id).value;
    for (const x of y)
      ;
    return {
      success: !1,
      message: ""
    };
  }, pe = function(f, g, y = void 0, S = !1) {
    for (const x of g)
      B(f, x.elementid, x.values);
    return {
      success: !1,
      message: ""
    };
  };
  function ee(f, g) {
    if (Array.isArray(g)) {
      for (const S of g)
        if (y(S) == !1)
          return !1;
    } else
      y(g);
    function y(S) {
      if (S.type.includes("environment") || S.type.includes("env"))
        return !1;
    }
    return !0;
  }
  return {
    GetChildren: d,
    validateStateManagementRestrictions: ee,
    deleteElements: D,
    createElements: F,
    createElement: U,
    updateElement: B,
    updateElements: pe,
    webnodecontexts: t,
    registerednodeids: e,
    getContextWebNodesbyType: r,
    getChildren: w,
    getContext: i,
    getContextWebNodes: n,
    getTreeLevel: s,
    byId: o,
    byKey: p,
    addWebNodeContext: _,
    deleteWebNodeContext: T,
    changeNodeContext: E,
    createIdentifier: P,
    deleteElement: I
  };
});
class Wr {
  constructor(e, n, r, i, s) {
    this.name = e, this.type = n, this.guui = r, this.value = i, this.sessioncontextid = s;
  }
  GetType() {
    return this.type;
  }
  finalizeSolution() {
    var e;
    if (this.sessioncontextid != null && (this.value = JSON.parse(JSON.stringify(Q().getContextWebNodes(this.sessioncontextid).value))), (e = this.type) != null && e.includes("diagram")) {
      const n = this.value.findIndex((r) => r.type.includes("env"));
      n != -1 && this.value.splice(n, 1);
    }
  }
  getValue() {
    return this.value;
  }
}
class Jt {
  constructor(e) {
    this.config = e, this.setup(e);
  }
  setup(e) {
    this.instance = $t.create({
      baseURL: e.url,
      headers: e == null ? void 0 : e.headers,
      data: e.data
    });
  }
  Get(e, n, r) {
    var i;
    return (i = this.instance) == null ? void 0 : i.get(e + n.url, n).then((s) => {
      r != null && r(s);
    }).catch((s) => s).finally(() => {
    });
  }
  Post(e, n) {
    var r;
    return (r = this.instance) == null ? void 0 : r.post(e, n.data, n);
  }
  Put(e, n) {
    var r;
    return (r = this.instance) == null ? void 0 : r.put(e, n);
  }
  Delete(e, n) {
    var r;
    return (r = this.instance) == null ? void 0 : r.delete(e, n);
  }
  createAxiosConfig(e) {
    return {
      url: e.url,
      method: e.method,
      headers: e.headers
    };
  }
  sendRequest(e, n) {
    const r = this.createAxiosConfig(e);
    switch (e.method) {
      case "GET":
        return this.Get(this.config.url, r, n);
      case "POST":
        return this.Post(this.config.url + e.url, r);
      case "PUT":
        return this.Put(this.config.url, r);
      case "DELETE":
        return this.Delete(this.config.url, r);
    }
  }
}
var Qt = Object.defineProperty, Yt = Object.getOwnPropertyDescriptor, Zt = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? Yt(e, n) : e, s = t.length - 1, o; s >= 0; s--)
    (o = t[s]) && (i = (r ? o(e, n, i) : o(i)) || i);
  return r && i && Qt(e, n, i), i;
};
let Ee = class {
  constructor() {
    this.clients = Array(), this.networks = Array();
  }
  createClient(t) {
    this.clients.push(new Jt(t));
  }
  GetOrCreateClient(t) {
    let e = this.clients.find((n) => n.config.name == t.networkname);
    if (e == null) {
      const n = this.networks.find((r) => r.name == t.networkname);
      if (n == null)
        throw new Error("No network found with name: " + t.networkname);
      e = this.createClient(n), this.clients.push(e);
    }
    return e;
  }
  async sendRequest(t) {
    const n = await this.GetOrCreateClient(t).sendRequest(t);
    console.log(n);
  }
  Create(t, e) {
    return this.GetOrCreateClient({ networkname: e, method: "POST" }).sendRequest({ url: "", method: "POST", data: t, networkname: e });
  }
};
Ee = Zt([
  M()
], Ee);
class Hr {
}
class Xt {
  constructor(e, n) {
    this.targetBOIC = new Array(), this.id = "transaction_" + e, this.nvc = new lt(), n && n.forEach((r) => {
      this.nvc.add(r.key, r.value);
    });
  }
}
var dt = /* @__PURE__ */ ((t) => (t.fillIn = "fillIn", t.check = "check", t.execute = "execute", t))(dt || {}), Kt = Object.defineProperty, en = Object.getOwnPropertyDescriptor, tn = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? en(e, n) : e, s = t.length - 1, o; s >= 0; s--)
    (o = t[s]) && (i = (r ? o(e, n, i) : o(i)) || i);
  return r && i && Kt(e, n, i), i;
};
let Pe = class {
  constructor() {
    this.bindings = new Array();
  }
  BeginTransaction(t) {
    this.transaction = new Xt(t);
    for (const e of Object.values(dt))
      this.transaction.callMode = e, this.OnTransactionBegin();
    return this.transaction;
  }
  OnTransactionBegin() {
    for (const t of this.bindings)
      t(this.transaction);
  }
  Commit() {
  }
  UpdateNVC(t) {
    if (this.transaction != null)
      for (const e of t)
        this.transaction.nvc.setValue(e.key, e.value);
  }
  BindOnTransactionBegin(t) {
    this.bindings.push(t);
  }
};
Pe = tn([
  M()
], Pe);
var nn = Object.defineProperty, rn = Object.getOwnPropertyDescriptor, sn = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? rn(e, n) : e, s = t.length - 1, o; s >= 0; s--)
    (o = t[s]) && (i = (r ? o(e, n, i) : o(i)) || i);
  return r && i && nn(e, n, i), i;
};
let re = class {
  constructor(t) {
    this.contextid = t;
  }
  GetService(t, e) {
    return this.container == null && (e != null ? this.container = z("iotcontainer_" + e, void 0) : this.container = z("iotcontainer_" + this.contextid, void 0)), this.container == null ? re.GetContainer(e ?? this.contextid).get(t) : this.container.get(t);
  }
  static Service(t) {
    return z("iotcontainer_0", void 0).get(t);
  }
  static ServiceWithContext(t, e) {
    let n = z("iotcontainer_" + e, void 0);
    return n == null && (n = re.GetContainer(e)), n.get(t);
  }
  static GetContainer(t) {
    let e = z("iotcontainer_" + t, void 0);
    if (e == null) {
      for (let n = t; n <= t; n--)
        if (e = z("iotcontainer_" + n, void 0), e != null)
          return e;
    }
    return e;
  }
  static ServiceWithAppContext(t, e) {
    let n = z("iotcontainer_" + e, void 0);
    if (n == null) {
      for (let r = e; r <= e; r--)
        if (n = z("iotcontainer_" + r, void 0), n != null)
          return { service: n.get(t), contextid: r };
    }
    return { service: n.get(t), contextid: e };
  }
};
re = sn([
  M()
], re);
class on extends re {
  constructor(e) {
    var r;
    super((r = Oe(e)) == null ? void 0 : r.contextid), this.config = e;
    const n = this.GetConfiguration();
    if (n.id == null)
      throw new Error("ViewConfiguration id is undefined");
    if (n.contextid == null)
      throw new Error("ViewConfiguration contextid is undefined");
  }
  GetConfiguration() {
    return Oe(this.config);
  }
  getTemplateRef() {
    return this.templateRef;
  }
}
class ye {
  //todo validate expression
  static ValidateExpression(e) {
    return e == null || e == "" || e == null || typeof e != "string" ? !1 : e.match(/{{.*}}/) != null;
  }
}
function an(t, e, n) {
  if (ye.ValidateExpression(n) === !1)
    throw new Error("Invalid expression");
  const r = n.indexOf("{{"), i = n.lastIndexOf("}}");
  return n = n.substring(r + 2, i).trim(), Y(() => {
    const { components: o, variables: p } = t.GetContext(e), d = s(n, o, p);
    try {
      return new Function("components", "variables", "return " + d)(o, p);
    } catch {
      return d;
    }
  });
  function s(o, p, d) {
    var T, E;
    const w = new RegExp("(?<=variables\\.)[\\w-]+(?=(\\.|$|\\s))", "g"), _ = new RegExp("(?<=components\\.)[\\w-]+(?=(\\.|$|\\s))", "g");
    return (T = o.match(w)) == null || T.forEach((P) => {
      const I = d[P];
      let D;
      if (ye.ValidateExpression(I)) {
        const F = I.indexOf("{{"), U = I.lastIndexOf("}}");
        D = I.substring(F + 2, U).trim(), D = new Function("variables", "components", "return " + D)(d, d), ye.ValidateExpression(D) && (D = s(D, p, d));
      } else
        D = I;
      o = o.replace("variables." + P, D);
    }), (E = o.match(_)) == null || E.forEach((P) => {
      const I = o.indexOf(P) + P.length;
      let F = Function("components", "variables", "return components." + P)(p, d), U = "";
      for (let B = I; B < o.length; B++)
        if (o[B] === ".") {
          const pe = o.indexOf(".", B + 1) != -1 ? o.indexOf(".", B + 1) : o.indexOf(" ", B + 1) != -1 ? o.indexOf(" ", B + 1) : o.indexOf(")", B + 1) != -1 ? o.indexOf(")", B + 1) : o.length, ee = o.substring(B + 1, pe);
          F[ee] === void 0 || (U += "." + ee, F = F[ee]);
        }
      o = o.replace("components." + P + U, F);
    }), o;
  }
}
function ft(t, e, n) {
  return ye.ValidateExpression(n) == !0 ? an(t, e, n).value : n;
}
class cn extends on {
  constructor(e) {
    super(e), this.isRegisteredInGlobalScope = !1, this.actionFactory = this.GetService("UIActionFactory");
  }
  handleEvent(e, n) {
    console.log("handle event", n, e), this.CreateAction(n.action).execute();
  }
  bind() {
    var r;
    const e = this.GetConfiguration();
    if (e == null)
      throw new Error("ViewElement configuration is undefined");
    if (e.interaction == null)
      return;
    const n = this.GetService("EventBus");
    if (e.interaction.events != null)
      for (const i of (r = e.interaction) == null ? void 0 : r.events)
        n.on(i, this);
  }
  unbind() {
    console.log("unbind", this);
    const e = this.GetConfiguration();
    if (e == null)
      throw new Error("ViewElement configuration is undefined");
    if (e.interaction == null)
      return;
    const n = this.GetService("EventBus");
    for (const r of e.interaction.events)
      n.off(r, this);
  }
  RegisterMethodsInGlobalScope(e) {
    const n = this.GetService("GlobalStateProvider");
    if (n == null)
      throw new Error("GlobalStateProvider service not found");
    n.AddViewContext({
      viewId: this.GetConfiguration().publicIdentifier,
      localActions: e
    }), this.isRegisteredInGlobalScope = !0;
  }
  CreateAction(e) {
    return this.actionFactory == null && (this.actionFactory = this.GetService("UIActionFactory")), this.actionFactory.create(e);
  }
  GetActions() {
    return this.GetConfiguration().interaction.actions;
  }
  ProvideContext() {
    return this.viewContextProvider == null && (this.viewContextProvider = this.GetService("ExecutionContextProvider")), { contextProvider: this.viewContextProvider, contextid: this.GetConfiguration().contextid };
  }
  ResolveTemplateProperty(e) {
    return this.viewContextProvider == null && (this.viewContextProvider = this.GetService("ExecutionContextProvider")), ft(this.viewContextProvider, this.GetConfiguration().contextid, e);
  }
}
var W = /* @__PURE__ */ ((t) => (t.create = "create", t.update = "update", t.delete = "delete", t.updatePartial = "updatePartial", t))(W || {}), Ie = /* @__PURE__ */ ((t) => (t.none = "none", t.immediate = "immediate", t.manual = "manual", t))(Ie || {}), ht = /* @__PURE__ */ ((t) => (t.BODataAdapter = "BODataAdapter", t.BORepository = "BORepository", t))(ht || {}), ln = Object.defineProperty, un = Object.getOwnPropertyDescriptor, dn = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? un(e, n) : e, s = t.length - 1, o; s >= 0; s--)
    (o = t[s]) && (i = (r ? o(e, n, i) : o(i)) || i);
  return r && i && ln(e, n, i), i;
};
let de = class {
  constructor(t, e, n) {
    this.ownsIds = [], this.contextid = e, this.options = t;
    const r = n ?? re.GetContainer(t.contextId ?? e);
    if (r == null)
      throw new Error("No iot container found for appcontext: " + this.options.contextId);
    this.repository = r.get(ht.BORepository), this.options.subscribe != null && this.Subscribe(), this.boService = r.get("BOService"), t.persistGlobalStorage == !0 && (this.httpService = r.get("HTTPClientService"));
  }
  Dispose() {
    this.Unsubscribe();
  }
  Unsubscribe() {
    this.repository.Unsubscribe(this);
  }
  SetStateChangeHandler(t) {
    this.stateChangeHandler = t;
  }
  HandleStateChange(t, e, n, r) {
    this.stateChangeHandler != null && this.stateChangeHandler(t, e, n, r);
  }
  SetBeforeStateChangeHandler(t) {
    this.beforeStateChangeHandler = t;
  }
  HandleBeforeStateChange(t, e, n) {
    this.beforeStateChangeHandler != null && this.beforeStateChangeHandler(t, e, n);
  }
  Subscribe() {
    this.repository.Subscribe(this);
  }
  Create(t, e) {
    return t.id == null && this.boService.NewId(t), e != null ? t.contextid = e : t.contextid == null && t.contextid == null && (t.contextid = this.options.contextId), this.SetBoType(t), this.options.persistGlobalStorage == !0 && this.httpService.sendRequest(t, this.options.contextId), this.ownsIds.push(t.id), this.repository.Create(t, this.options.persistLocalStorage, e);
  }
  Find(t, e) {
    return this.repository.Get(t, e)[0];
  }
  Get(t) {
    return this.repository.Get(this.options.boType.name, t, this.options.contextId);
  }
  Update(t, e, n, r) {
    return this.SetBoType(e), this.repository.Update(t, e, this.options.persistLocalStorage, n, r);
  }
  Delete(t, e) {
    return this.repository.Delete(t, this.options.persistLocalStorage, e);
  }
  UpdatePartial(t, e, n, r, i) {
    return this.repository.UpdatePartial(t, e, this.options.persistLocalStorage, n, r, i);
  }
  SetBoType(t) {
    var e;
    if (t.boName == null) {
      if (((e = this.options.boType) == null ? void 0 : e.name) == null)
        throw new Error("No BO with id " + t.id + " cant be created because no BO Type is defined");
      t.boName = this.options.boType.name;
    }
  }
};
de = dn([
  M()
], de);
class qr {
  constructor(e, n) {
    this.syncStateMode = n, this.sessioncontextid = e;
    const r = new re().GetService("BOService", e);
    this.boService = r, this.CreateBOAdapter({ boType: { name: "ViewConfiguration" }, contextId: e }, e);
  }
  Id(e) {
    return this.boService.NewId(e);
  }
  CreateAndReturnBOAdapter(e, n) {
    return new de(e, n);
  }
  CreateBOAdapter(e, n) {
    this.dataAdapter = new de(e, n), console.log(this.dataAdapter);
  }
  PatchStateUpdate(e, n, r = !1) {
    if (!(this.config == null || this.config.syncStateMode == null) && (this.config.syncStateMode == Ie.immediate || this.config.syncStateMode == Ie.manual && r == !0))
      switch (n) {
        case W.create:
          this.dataAdapter.Create(e);
          break;
        case W.update:
          this.dataAdapter.Update(e.id, e);
          break;
        case W.delete:
          this.dataAdapter.Delete(e);
          break;
      }
  }
  UseService(e) {
    return this.container.get(e);
  }
  Subscribe(e) {
    this.dataAdapter.SetStateChangeHandler(e);
  }
  PartialUpdate(e, n) {
    this.dataAdapter.UpdatePartial(e.id, new lt([n]), this.sessioncontextid);
  }
  Dispose() {
    var e;
    (e = this.dataAdapter) == null || e.Unsubscribe();
  }
}
class ge {
  constructor(e) {
    this.name = e.name, this.propertys = e.propertys;
  }
  static UnkownBO(e) {
    return new ge({
      name: e
    });
  }
}
class Te {
  constructor() {
    this.boTypes = [];
  }
  AddBOType(e) {
    this.boTypes.push(e);
  }
  AddBOTypes(e) {
    this.boTypes = e;
  }
  CreateBOType(e, n) {
    const r = new ge();
    r.name = e, r.propertys = n, this.boTypes.push(r);
  }
}
const ze = fe("app", {
  state: () => ({
    user: {},
    boDeclarations: new Te(),
    dataContexts: Array()
  }),
  getters: {},
  actions: {
    createDataContext() {
      if (this.dataContexts.length === 0)
        return this.dataContexts.push(1), 1;
      {
        const t = this.dataContexts[this.dataContexts.length - 1] + 1;
        return this.dataContexts.push(t), t;
      }
    }
  }
}), Lr = fe("webnodetemplates", {
  state: () => ({
    avaiblenodetemplates: Mt([])
  }),
  getters: {
    getall() {
      return this.avaiblenodetemplates;
    }
  },
  actions: {
    addTemplates(t) {
      this.avaiblenodetemplates.push(...t);
    }
  }
});
class fn {
  constructor(e) {
    this.stateHistory = new Array(), this.store = e, this.validateStore() == !0 && this.store.$onAction((n) => {
      n.name.startsWith("deleteElements") ? this.validateActionRestriction(n.args) == !0 && this.saveDeletedStateChanges(n) : n.name.startsWith("createElements") ? this.validateActionRestriction(n.args) == !0 && this.saveCreatedStateChanges(n) : n.name.startsWith("createElement") ? this.validateActionRestriction(n.args) == !0 && this.saveCreatedStateChange(n) : n.name == "updateElements" ? this.validateActionRestriction(n.args) == !0 && this.saveUpdatedStateChanges(n) : n.name.startsWith("updateElement") ? this.validateActionRestriction(n.args) == !0 && this.saveUpdatedStateChange(n) : n.name.startsWith("deleteElement") && this.validateActionRestriction(n.args) == !0 && this.saveDeletedStateChange(n);
    });
  }
  simulateUpdateOneAction(e, n, r) {
    const i = this.stateHistory.find((s) => s.contextid == e);
    if (i != null) {
      const s = {
        calledActionName: "updateElement",
        calledActionInput: this.getUpdateOneAcionCalledInput(e, n, r),
        reverseActionName: "updateElement",
        reverseActionInput: [e, n, r, !0]
      };
      i.stateChanges.splice(i.currentTrackingStateIndex, 0, s), i.currentTrackingStateIndex += 1;
    }
  }
  validateStore() {
    return !(this.store.createElement == null || this.store.deleteElement == null || this.store.updateElement == null || this.store.updateElements == null || this.store.deleteElements == null);
  }
  isUndoAble(e) {
    return e.currentTrackingStateIndex > 0;
  }
  isRedoAble(e) {
    if (e.currentTrackingStateIndex < e.stateChanges.length)
      return !0;
  }
  undo(e) {
    const n = this.stateHistory.find((r) => r.contextid == e);
    if (n != null && this.isUndoAble(n) == !0) {
      if ((n == null ? void 0 : n.currentTrackingStateIndex) < 0)
        return;
      const r = n == null ? void 0 : n.stateChanges[n.currentTrackingStateIndex - 1];
      this.validateManagerActionRestriction(r.calledActionInput) == !0 && (this.callReverseAction(r), n.currentTrackingStateIndex -= 1);
      return;
    }
  }
  redo(e) {
    const n = this.stateHistory.find((r) => r.contextid == e);
    if (n != null && this.isRedoAble(n) == !0) {
      if ((n == null ? void 0 : n.currentTrackingStateIndex) >= n.stateChanges.length)
        return;
      const r = n == null ? void 0 : n.stateChanges[n.currentTrackingStateIndex];
      this.callAction(r), n.currentTrackingStateIndex += 1, console.log(r, n.currentTrackingStateIndex, n == null ? void 0 : n.stateChanges);
      return;
    }
  }
  validateManagerActionRestriction(e) {
    return this.store.validateStateManagementRestrictions != null ? this.store.validateStateManagementRestrictions(e[0], e[1]) : !1;
  }
  validateActionRestriction(e) {
    return this.store.validateStateManagementRestrictions != null && e[3] == !0 ? this.store.validateStateManagementRestrictions(e[0], e[1]) : !1;
  }
  callAction(e) {
    e.calledActionName == "updateElements" ? this.callUpdateMobjectAction(e.calledActionInput) : e.calledActionName == "updateElement" ? this.callUpdateAction(e.calledActionInput) : e.calledActionName == "createElement" ? this.callCreateAction(e.calledActionInput) : e.calledActionName == "deleteElement" ? this.callDeleteAction(e.calledActionInput) : e.calledActionName == "deleteElements" && this.callDeleteMobjectAction(e.calledActionInput);
  }
  callReverseAction(e) {
    e.reverseActionName == "updateElements" ? this.callUpdateMobjectAction(e.reverseActionInput) : e.reverseActionName == "updateElement" ? this.callUpdateAction(e.reverseActionInput) : e.reverseActionName == "createElement" ? this.callCreateAction(e.reverseActionInput) : e.reverseActionName == "deleteElement" ? this.callDeleteAction(e.reverseActionInput) : e.reverseActionName == "deleteElements" ? this.callDeleteMobjectAction(e.reverseActionInput) : e.reverseActionName == "createElements" && this.callCreateMobjectAction(e.reverseActionInput);
  }
  callUpdateAction(e) {
    this.store.updateElement(e[0], e[1], e[2], !1);
  }
  callCreateAction(e) {
    this.store.createElement(e[0], e[1], e[2], !1);
  }
  callCreateMobjectAction(e) {
    this.store.createElements(e[0], e[1], void 0, !1);
  }
  callUpdateMobjectAction(e) {
    this.store.updateElements(e[0], e[1], void 0, !1);
  }
  callDeleteAction(e) {
    this.store.deleteElement(e[0], e[1], e[2], !1);
  }
  callDeleteMobjectAction(e) {
    this.store.deleteElements(e[0], e[1], void 0, !1);
  }
  registerContextStateIfNotExists(e) {
    this.stateHistory.find((n) => n.contextid == e) == null && this.stateHistory.push({
      contextid: e,
      stateChanges: new Array(),
      currentTrackingStateIndex: 0
    });
  }
  saveCreatedStateChanges(e) {
    if (e.name != "createElements")
      throw new Error('saveCreatedStateChange: name your create action "createElements"');
    let n = this.stateHistory.find((r) => r.contextid == e.args[0]);
    if (this.registerContextStateIfNotExists(e.args[0]), n == null && (n = this.stateHistory.find((r) => r.contextid == e.args[0])), n != null) {
      if (this.store.deleteElements == null)
        throw new Error('saveCreatedStateChange: name your delete action "deleteElements", otherwise your statechanges triggerd by "createElement" will not be reversible');
      const r = {
        calledActionName: e.name,
        reverseActionName: "deleteElement",
        calledActionInput: e.args,
        reverseActionInput: e.args
      };
      r.calledActionInput[3] = !1, r.reverseActionInput[3] = !1, console.log(r), n.stateChanges.splice(n.currentTrackingStateIndex, 0, r), n.currentTrackingStateIndex += 1;
    }
  }
  saveCreatedStateChange(e) {
    if (e.name != "createElement")
      throw new Error('saveCreatedStateChange: name your create action "createElement"');
    let n = this.stateHistory.find((r) => r.contextid == e.args[0]);
    if (this.registerContextStateIfNotExists(e.args[0]), n == null && (n = this.stateHistory.find((r) => r.contextid == e.args[0])), n != null) {
      if (this.store.deleteElement == null)
        throw new Error('saveCreatedStateChange: name your delete action "deleteElement", otherwise your statechanges triggerd by "createElement" will not be reversible');
      const r = {
        calledActionName: e.name,
        reverseActionName: "deleteElement",
        calledActionInput: e.args,
        reverseActionInput: e.args
      };
      r.calledActionInput[3] = !1, r.reverseActionInput[3] = !1, n.stateChanges.splice(n.currentTrackingStateIndex, 0, r), n.currentTrackingStateIndex += 1;
    }
  }
  saveDeletedStateChanges(e) {
    if (e.name != "deleteElements")
      throw new Error('saveDeletedStateChange: name your delete action "deleteElement"');
    let n = this.stateHistory.find((r) => r.contextid == e.args[0]);
    if (this.registerContextStateIfNotExists(e.args[0]), n == null && (n = this.stateHistory.find((r) => r.contextid == e.args[0])), n != null) {
      const r = {
        calledActionName: e.name,
        reverseActionName: "createElements",
        calledActionInput: e.args,
        reverseActionInput: e.args
      };
      r.calledActionInput[3] = !1, r.reverseActionInput[3] = !1, n.stateChanges.splice(n.currentTrackingStateIndex, 0, r), n.currentTrackingStateIndex += 1;
    }
  }
  saveDeletedStateChange(e) {
    if (e.name != "deleteElement")
      throw new Error('saveDeletedStateChange: name your delete action "deleteElement"');
    let n = this.stateHistory.find((r) => r.contextid == e.args[0]);
    if (this.registerContextStateIfNotExists(e.args[0]), n == null && (n = this.stateHistory.find((r) => r.contextid == e.args[0])), n != null) {
      const r = {
        calledActionName: e.name,
        reverseActionName: "createElement",
        calledActionInput: e.args,
        reverseActionInput: e.args
      };
      r.calledActionInput[3] = !1, r.reverseActionInput[3] = !1, n.stateChanges.splice(n.currentTrackingStateIndex, 0, r), n.currentTrackingStateIndex += 1;
    }
  }
  saveUpdatedStateChange(e) {
    if (e.name != "updateElement")
      throw new Error('saveUpdatedStateChange: name your update action "updateElement"');
    let n = this.stateHistory.find((r) => r.contextid == e.args[0]);
    if (this.registerContextStateIfNotExists(e.args[0]), n == null && (n = this.stateHistory.find((r) => r.contextid == e.args[0])), n != null) {
      const r = {
        calledActionName: e.name,
        reverseActionName: e.name,
        calledActionInput: e.args,
        reverseActionInput: this.getUpdateOneAcionReverseInput(e)
      };
      n.stateChanges.splice(n.currentTrackingStateIndex, 0, r), n.currentTrackingStateIndex += 1;
    }
  }
  saveUpdatedStateChanges(e) {
    if (e.name != "updateElements")
      throw new Error('saveUpdatedStateChange: name your update action "updateElements"');
    let n = this.stateHistory.find((r) => r.contextid == e.args[0]);
    if (this.registerContextStateIfNotExists(e.args[0]), n == null && (n = this.stateHistory.find((r) => r.contextid == e.args[0])), n != null) {
      const r = {
        calledActionName: e.name,
        reverseActionName: e.name,
        calledActionInput: e.args,
        reverseActionInput: this.getUpdateMobjectAcionReverseInput(e)
      };
      n.stateChanges.splice(n.currentTrackingStateIndex, 0, r), n.currentTrackingStateIndex += 1;
    }
  }
  getUpdateOneAcionCalledInput(e, n, r) {
    const i = this.store.byId(e, n.id), s = [
      e,
      i.value,
      Array(),
      !0
    ];
    for (const o of r)
      s[2].push({
        key: o.key,
        value: Ae(i.value, o.key)
      });
    return s;
  }
  getUpdateOneAcionReverseInput(e) {
    const n = this.store.byId(e.args[0], e.args[1]), r = [
      e.args[0],
      n.id,
      Array(),
      !0
    ];
    for (const i of e.args[2])
      r[2].push({
        key: i.key,
        value: Ae(n.value, i.key)
      });
    return r;
  }
  getUpdateMobjectAcionReverseInput(e) {
    const n = this.store.byId(e.args[0], e.args[1]), r = [
      e.args[0],
      n.id,
      Array(),
      !1
    ];
    for (const i of e.args[2]) {
      const s = {
        elementid: i.elementid,
        value: Array()
      };
      for (const o of i.value)
        s.value.push({
          key: o.key,
          value: Ae(n, o.key)
        });
      r[2].push(s);
    }
    return r;
  }
}
function Fr(t) {
  if (t.store.$id.includes("webnodecontext"))
    return {
      stateManager: new fn(t.store)
    };
}
var hn = /* @__PURE__ */ ((t) => (t.click = "click", t.change = "change", t.focus = "focus", t.blur = "blur", t.submit = "submit", t.reset = "reset", t.select = "select", t.keydown = "keydown", t.keypress = "keypress", t.keyup = "keyup", t.load = "load", t.unload = "unload", t.abort = "abort", t.error = "error", t.resize = "resize", t.scroll = "scroll", t.ctextmenu = "ctextmenu", t.dblclick = "dblclick", t.mousedown = "mousedown", t.mousemove = "mousemove", t.mouseout = "mouseout", t.mouseover = "mouseover", t.mouseup = "mouseup", t.mousewheel = "mousewheel", t.wheel = "wheel", t.copy = "copy", t.cut = "cut", t.paste = "paste", t.drag = "drag", t.dragend = "dragend", t.dragenter = "dragenter", t.dragleave = "dragleave", t.dragover = "dragover", t.dragstart = "dragstart", t.drop = "drop", t.input = "input", t.invalid = "invalid", t.search = "search", t.animatiend = "animatiend", t.animatiiterati = "animatiiterati", t.animatistart = "animatistart", t.transitiend = "transitiend", t))(hn || {}), Me = /* @__PURE__ */ ((t) => (t["dom Event"] = "dom Event", t["custom Event"] = "custom Event", t))(Me || {}), le = /* @__PURE__ */ ((t) => (t.SetValueAction = "SetValueAction", t.SetValuesAction = "SetValuesAction", t.SendRequestAction = "SendRequestAction", t.CallLocalMethodAction = "CallLocalMethodAction", t))(le || {}), pn = Object.defineProperty, vn = Object.getOwnPropertyDescriptor, mn = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? vn(e, n) : e, s = t.length - 1, o; s >= 0; s--)
    (o = t[s]) && (i = (r ? o(e, n, i) : o(i)) || i);
  return r && i && pn(e, n, i), i;
};
let ie = class {
  constructor(t) {
    this.config = t;
  }
  execute() {
  }
};
ie = mn([
  M()
], ie);
var gn = /* @__PURE__ */ ((t) => (t.viewModel = "viewModel", t.view = "view", t.model = "model", t.globalVariable = "globalVariable", t))(gn || {}), yn = Object.defineProperty, bn = Object.getOwnPropertyDescriptor, he = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? bn(e, n) : e, s = t.length - 1, o; s >= 0; s--)
    (o = t[s]) && (i = (r ? o(e, n, i) : o(i)) || i);
  return r && i && yn(e, n, i), i;
}, rt = (t, e) => (n, r) => e(n, r, t);
let K = class {
  constructor(t, e) {
    this.globalStateProvider = e, this.httpService = t, this.globalStateProvider = e;
  }
  create(t) {
    switch (t.type) {
      case le.SendRequestAction:
        return new this.sendRequestAction(this.httpService, view, t);
      case le.SetValueAction:
        return new this.setValueAction(view, t);
      case le.SetValuesAction:
        return new this.setValuesAction(view, t);
      case le.CallLocalMethodAction:
        return (e, n) => new this.callLocalMethodAction(e, n);
      case le.ControlComponentAction:
        return new this.controlComponentAction(this.globalStateProvider, t);
    }
  }
};
he([
  L("SendRequestActionConstructor")
], K.prototype, "sendRequestAction", 2);
he([
  L("SetValueActionConstructor")
], K.prototype, "setValueAction", 2);
he([
  L("SetValuesActionConstructor")
], K.prototype, "setValuesAction", 2);
he([
  L("CallLocalMethodActionConstructor")
], K.prototype, "callLocalMethodAction", 2);
he([
  L("ControlComponentActionConstructor")
], K.prototype, "controlComponentAction", 2);
K = he([
  M(),
  rt(0, L("HTTPClientService")),
  rt(1, L("GlobalStateProvider"))
], K);
var Cn = /* @__PURE__ */ ((t) => (t["Control component"] = "Control component", t["Trigger event"] = "Trigger event", t["Run script"] = "Run script", t["Set local variable"] = "Set local variable", t["Start client workflow"] = "Start client workflow", t["Queue process"] = "Queue process", t["Go to url"] = "Go to url", t))(Cn || {}), wn = /* @__PURE__ */ ((t) => (t.viewModel = "viewModel", t.view = "view", t.model = "model", t.globalVariable = "globalVariable", t))(wn || {}), Sn = /* @__PURE__ */ ((t) => (t.GET = "GET", t.POST = "POST", t.PUT = "PUT", t.DELETE = "DELETE", t.PATCH = "PATCH", t))(Sn || {}), xn = Object.defineProperty, An = Object.getOwnPropertyDescriptor, On = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? An(e, n) : e, s = t.length - 1, o; s >= 0; s--)
    (o = t[s]) && (i = (r ? o(e, n, i) : o(i)) || i);
  return r && i && xn(e, n, i), i;
};
let Ne = class extends ie {
  constructor(t) {
    super(), console.log(t);
  }
  execute() {
  }
};
Ne = On([
  M()
], Ne);
class _n extends ie {
  constructor(e) {
    super(), this.options = definition.options, console.log(e);
  }
  execute() {
  }
}
var En = Object.defineProperty, Pn = Object.getOwnPropertyDescriptor, In = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? Pn(e, n) : e, s = t.length - 1, o; s >= 0; s--)
    (o = t[s]) && (i = (r ? o(e, n, i) : o(i)) || i);
  return r && i && En(e, n, i), i;
};
let De = class extends ie {
  constructor(t, e) {
    super(t, e);
    const n = z("iotcontainer");
    this.service = n.get("HTTPClientService"), this.options = t;
  }
  execute(t) {
    this.options.request.data = t.nvc.toObject(), this.service.sendRequest(this.options.request);
  }
};
De = In([
  M()
], De);
function Tn(t, e, n) {
  let r = {};
  for (let i in t)
    r[i] = t[i];
  for (let i in e)
    Array.isArray(e[i]) ? r[i] = e[i] : typeof e[i] == "object" && e[i] !== null ? r[i] = Tn(t[i] || {}, e[i]) : t[i] === void 0 ? r[i] = e[i] : r[i] = t[i];
  return r;
}
function pt(t) {
  return new Promise((e) => {
    if (document.querySelector(t))
      return e(document.querySelector(t));
    const n = new MutationObserver((r) => {
      if (document.querySelector(t))
        return e(document.querySelector(t)), n.disconnect(), r;
    });
    n.observe(document.body, {
      childList: !0,
      subtree: !0
    });
  });
}
var Mn = Object.defineProperty, Nn = Object.getOwnPropertyDescriptor, Dn = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? Nn(e, n) : e, s = t.length - 1, o; s >= 0; s--)
    (o = t[s]) && (i = (r ? o(e, n, i) : o(i)) || i);
  return r && i && Mn(e, n, i), i;
};
let je = class {
  constructor() {
    this.tabs = Ce([]);
  }
  AddAndOpenTab(t) {
    this.AddTab(t), this.OpenTab(t);
  }
  AddTab(t) {
    this.tabs.value.push(t);
  }
  OpenTab(t) {
    this.navigationHandler(t);
  }
  GetTabs() {
    return Y(() => this.tabs.value);
  }
  SetNavigationHandler(t) {
    this.navigationHandler = t;
  }
};
je = Dn([
  M()
], je);
function zr() {
  function t(e) {
    const n = Q(be()).addWebNodeContext("environment");
    return e.sessioncontextid = n, _e().addCreation(e), n;
  }
  return {
    create: t
  };
}
class Ur {
}
class Jr {
}
class jn {
  constructor(e, n) {
    this.controller = e, this.component = n;
  }
  initialize(e, n) {
    if (this.controller != null || n == null) {
      const r = Q().addWebNodeContext(this.viewidentifier);
      e.viewcontextid = r, this.contextid = r;
    } else
      this.contextid = n, e.viewcontextid = this.contextid;
    return (e == null ? void 0 : e.id) == null ? this.viewidentifier = Oe(Q().createElement(this.contextid, e)).id : this.viewidentifier = e.id, this.contextid;
  }
  dispose() {
    Q().deleteElement(this.contextid, this.viewidentifier), this.contextid && Q().deleteWebNodeContext(this.contextid);
  }
  render() {
    const e = this.dispose;
    return this.controller ? Ke(this.controller, {
      contextid: this.contextid,
      viewIdentifier: this.viewidentifier,
      dispose: e
    }) : Ke(this.component, {
      contextid: this.contextid,
      viewidentifier: this.viewidentifier,
      dispose: e
    });
  }
}
var we = /* @__PURE__ */ ((t) => (t.standalone = "standalone", t.extension = "extension", t.shadow = "shadow", t))(we || {});
const vt = fe("data", () => {
  var o;
  const t = Ce(new Array()), e = (o = ze(be()).boDeclarations) == null ? void 0 : o.boTypes;
  function n(p) {
    let d = 1;
    t.value.length > 0 && (d = t.value.map((w) => w.id).reduce((w, _) => w > _ ? w : _) + 1), p.id = d, t.value.push(p);
  }
  function r(p, d) {
    var w;
    return (w = t.value.find((_) => _.contextid === d && _.boType.name == p)) == null ? void 0 : w.value;
  }
  function i(p, d, w, _) {
    var P;
    const E = ((P = t.value.find((I) => I.contextid === d && I.boType.name == p)) == null ? void 0 : P.value).find((I) => I[w] === _);
    return E == null ? [] : Object.entries(E);
  }
  function s(p, d, w, _) {
    var T;
    return (T = t.value.find((E) => E.contextid === d && E.boType.name == p)) == null ? void 0 : T.value.find((E) => E[w] === _);
  }
  return {
    containers: t,
    boTypes: e,
    AddContainer: n,
    GetBosByContext: r,
    GetBoInstancePropertysByField: i,
    FindByField: s
  };
});
class Rn {
  constructor(e, n) {
    this.value = n, this.boType = e;
  }
  GetValueType() {
    return typeof this.value;
  }
}
var Gn = Object.defineProperty, Bn = Object.getOwnPropertyDescriptor, $n = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? Bn(e, n) : e, s = t.length - 1, o; s >= 0; s--)
    (o = t[s]) && (i = (r ? o(e, n, i) : o(i)) || i);
  return r && i && Gn(e, n, i), i;
}, it = (t, e) => (n, r) => e(n, r, t);
let Re = class {
  constructor(t, e) {
    this.subscribers = [], this.BOIds = [], this.contextManager = t, this.pinia = e, this.store = vt(e);
  }
  Create(t, e = !1, n = null) {
    var r;
    if (this.Publish(t.id, t, W.create, n, void 0, void 0, !0), n == null) {
      const i = this.contextManager.NewContext();
      t.contextid = i.contextid;
    }
    if (e == !0) {
      let i = (r = this.store.containers.find((s) => {
        var o;
        return ((o = s.boType) == null ? void 0 : o.name) == t.boName;
      })) == null ? void 0 : r.id;
      i == null && (i = this.CreateContainer(t, n)), this.store.$patch((s) => {
        s.containers.find((o) => o.id == i).value.push(t);
      });
    }
    return this.Publish(t.id, t, W.create, n, void 0, void 0, !1), t;
  }
  Get(t, e, n = null) {
    let r;
    return n == null ? r = this.store.containers.find((i) => i.boType.name == t) : r = this.store.containers.find((i) => i.boType.name == t && i.contextid == n), r == null ? [] : e == null ? r.value : r.value.filter(e);
  }
  Update(t, e, n = !1, r = null, i) {
    var s, o;
    if (n == !1 && this.Publish(t, e, W.update, r, void 0, i, !0), n == !0) {
      const p = (o = (s = this.store.containers.find((d) => d.boType.name == e.boName)) == null ? void 0 : s.value) == null ? void 0 : o.findIndex((d) => d.id == t);
      if (p == null)
        throw new Error("No BO with id " + t + " found");
      i == null && (i = this.store.$state.containers.find((d) => d.boType.name == e.boName).value[p]), this.Publish(t, e, W.update, r, void 0, i, !0), this.store.$patch((d) => {
        d.containers.find((w) => w.boType.name == e.boName).value[p] = e;
      });
    }
    return this.Publish(t, e, W.update, r, void 0, i, !1), e;
  }
  Delete(t, e = !1, n = null) {
    if (this.Publish(t.id, t, W.delete, n, void 0, void 0, !0), e == !0) {
      const r = this.store.containers.findIndex((i) => i.value.findIndex((s) => s.id == t.id) != -1);
      if (r == -1)
        throw new Error("No BO with id " + t.id + " found");
      this.store.$patch((i) => {
        i.containers[r].value.splice(i.containers[r].value.findIndex((s) => s.id == t.id), 1);
      });
    }
    this.Publish(t.id, t, W.delete, n, void 0, void 0, !1);
  }
  UpdatePartial(t, e, n = !1, r = null, i, s) {
    if (n == !1 && this.Publish(t, e, W.updatePartial, r, i, s, !0), n == !0) {
      const o = this.store.containers.findIndex((d) => d.value.findIndex((w) => w.id == t) != -1), p = this.store.containers[o].value.find((d) => d.id == t);
      if (o == -1)
        throw new Error("No BO with id " + t + " found");
      s == null && (s = this.store.$state.containers.find((d) => d.boType.name == p.boName).value[o]), this.Publish(t, e, W.updatePartial, r, i, s, !0), this.store.$patch(() => {
        for (const d of e.keyValuePairs)
          Vt(p, d.key, d.value);
      });
    }
    this.Publish(t, e, W.updatePartial, r, i, s, !1);
  }
  async Publish(t, e, n, r = null, i, s, o = !1) {
    for (const p of this.subscribers)
      r == null ? (e.boName == p.options.boType.name || i == p.options.boType.name) && !this.AdapterIsBOOwner(p, e) && this.NotifySubscriber(p, t, e, n, s, o) : r == p.contextid && (e.boName == p.options.boType.name || e.boName == null) && !this.AdapterIsBOOwner(p, e) && this.NotifySubscriber(p, t, e, n, s, o);
  }
  AdapterIsBOOwner(t, e) {
    return !!t.ownsIds.includes(e.id);
  }
  async NotifySubscriber(t, e, n, r, i, s) {
    if (s == !0) {
      t == null || t.HandleBeforeStateChange(e, n, r, i);
      return;
    } else
      t == null || t.HandleStateChange(e, n, r, i);
  }
  Subscribe(t) {
    t.id = this.subscribers.length + 1, this.subscribers.push(t);
  }
  Unsubscribe(t) {
    this.subscribers = this.subscribers.filter((e) => e.id == t.id);
  }
  CreateContainer(t, e) {
    let n;
    t.boType == null && t.boName != null ? n = new ge({
      name: t.boName,
      propertys: []
    }) : t.boType != null && (n = t.boType);
    const r = new Rn(n, []);
    return r.contextid = e, this.store.AddContainer(r), r.id;
  }
};
Re = $n([
  M(),
  it(0, L("DataContextManager")),
  it(1, L("Pinia"))
], Re);
var Vn = Object.defineProperty, kn = Object.getOwnPropertyDescriptor, Wn = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? kn(e, n) : e, s = t.length - 1, o; s >= 0; s--)
    (o = t[s]) && (i = (r ? o(e, n, i) : o(i)) || i);
  return r && i && Vn(e, n, i), i;
};
let Ge = class {
  constructor() {
    this.boIds = [];
  }
  NewId(t) {
    const e = this.boIds.length > 0 ? Math.max(...this.boIds) + 1 : 1;
    return this.boIds.push(e), t.id = e, t;
  }
};
Ge = Wn([
  M()
], Ge);
var Hn = Object.defineProperty, qn = Object.getOwnPropertyDescriptor, Ln = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? qn(e, n) : e, s = t.length - 1, o; s >= 0; s--)
    (o = t[s]) && (i = (r ? o(e, n, i) : o(i)) || i);
  return r && i && Hn(e, n, i), i;
};
let Be = class {
  constructor() {
    this.quasarPlatformDetect = Ht, this.subscribers = [], this.screenWidth = document.documentElement.clientWidth, this.screenHeight = document.documentElement.clientHeight, (!this.screenWidth || !this.screenHeight) && this.SetScreenSize(), window.addEventListener("resize", () => {
      this.SetScreenSize();
    });
  }
  ChangeScreenSize(t, e) {
    console.log(e, t), this.screenWidth = t, this.screenHeight = e, this.NotifyScreenChanged();
  }
  GetScreenSize() {
    return {
      screenWidth: this.screenWidth,
      screenHeight: this.screenHeight
    };
  }
  Subscribe(t) {
    this.subscribers.push(t);
  }
  NotifyScreenChanged() {
    this.subscribers.forEach((t) => {
      t(this.screenWidth, this.screenHeight);
    });
  }
  SetScreenSize() {
    this.screenWidth = window.innerWidth, this.screenHeight = window.innerHeight, this.NotifyScreenChanged();
  }
};
Be = Ln([
  M()
], Be);
var ne = /* @__PURE__ */ ((t) => (t[t.Application = 0] = "Application", t[t.State = 1] = "State", t))(ne || {}), Fn = Object.defineProperty, zn = Object.getOwnPropertyDescriptor, Un = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? zn(e, n) : e, s = t.length - 1, o; s >= 0; s--)
    (o = t[s]) && (i = (r ? o(e, n, i) : o(i)) || i);
  return r && i && Fn(e, n, i), i;
};
let $e = class {
  constructor() {
    this.Ids = [], this.hasParentManager = !1;
  }
  UpgradeContextLevel(t, e, n) {
    const r = n.findContextById(t);
    if (r == null)
      throw new Error("No context found with id: " + t);
    return r.contextLevel = e, this.rootContext = r, this.parentManager = n, r;
  }
  NewContext(t, e) {
    const n = this.hasParentManager == !0 ? this.parentManager.AddChildManagerContext() + 1 : this.Ids.length == 0 ? 0 : this.Ids[this.Ids.length - 1] + 1, r = this.findContextById(t), i = {
      contextid: n,
      parentId: r != null ? r.contextid : 0,
      children: [],
      contextLevel: e ?? ne.State
    };
    return this.Ids.push(n), r != null ? r.children.push(i) : this.rootContext == null ? this.rootContext = i : this.rootContext.children.push(i), i;
  }
  GetParentContext(t) {
    return this.findContextById(t.parentId);
  }
  getApplicationContext(t) {
    const e = this.findContextById(t);
    return e.contextLevel != null && e.contextLevel == ne.Application || e.parentId == null && e.contextLevel == ne.Application ? e : e.parentId == null && e.contextLevel != ne.Application ? void 0 : this.getApplicationContext(e.parentId);
  }
  findContextById(t) {
    if (t != null && this.rootContext != null)
      return this.traverseTree(this.rootContext, t);
  }
  traverseTree(t, e) {
    if (t.contextid === e)
      return t;
    for (const n of t.children) {
      const r = this.traverseTree(n, e);
      if (r)
        return r;
    }
    return null;
  }
  findClosestContextById(t) {
    let e = null, n = 1 / 0;
    return this.traverseTreeC(this.rootContext, t, (r) => {
      if (r.contextLevel != null && r.contextLevel === 0) {
        const i = Math.abs(r.contextid - t);
        i < n && (n = i, e = r);
      }
    }), e;
  }
  traverseTreeC(t, e, n) {
    n(t), t.children.sort((r, i) => r.contextid - i.contextid);
    for (const r of t.children)
      this.traverseTreeC(r, e, n);
  }
  AddChildManagerContext() {
    const t = Math.max(...this.Ids) + 1;
    return this.Ids.push(t), t;
  }
};
$e = Un([
  M()
], $e);
class Jn {
  constructor() {
    this.adapters = [];
  }
  AddAdapter(e) {
    this.adapters.push(e);
  }
  GetBOData(e) {
    console.log(e);
  }
}
var Qn = Object.defineProperty, Yn = Object.getOwnPropertyDescriptor, Zn = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? Yn(e, n) : e, s = t.length - 1, o; s >= 0; s--)
    (o = t[s]) && (i = (r ? o(e, n, i) : o(i)) || i);
  return r && i && Qn(e, n, i), i;
};
let Ve = class {
  Create(t, e, n, r, i) {
    return new gr(t, e, n, r, i);
  }
};
Ve = Zn([
  M()
], Ve);
var Xn = Object.defineProperty, Kn = Object.getOwnPropertyDescriptor, er = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? Kn(e, n) : e, s = t.length - 1, o; s >= 0; s--)
    (o = t[s]) && (i = (r ? o(e, n, i) : o(i)) || i);
  return r && i && Xn(e, n, i), i;
};
let ke = class {
  constructor() {
    this.events = new Array();
  }
  on(t, e, n) {
    const r = this.events.find((s) => s.event.id === t.id);
    console.log("register", t, r);
    let i;
    r == null && (i = {
      event: t,
      handler: e,
      args: n
    }, this.events.push(i)), t.type == Me["dom Event"] && i != null && this.RegisterDOMEvent(i, n);
  }
  off(t) {
    const e = this.events.find((n) => n.event.id === t.id);
    console.log("unregister", t, e), e != null && (t.type == Me["dom Event"] && this.DeleteDOMEvent(e), this.events.splice(this.events.indexOf(e), 1));
  }
  emit(t, e, n) {
    const r = this.events.find((i) => i.event === e);
    if (r)
      r.handler.handleEvent(t, e, n);
    else
      throw new Error("Event not registered");
  }
  RegisterDOMEvent(t, e) {
    console.log("register dom element", t), pt(`[data-element='element_${t.event.targetElementId}']`).then((n) => {
      console.log("element found", t);
      const r = new AbortController();
      n.addEventListener(t.event.identifier, (i) => {
        this.emit(i, t.event, e);
      }, {
        signal: r.signal
      }), t.abortController = r;
    });
  }
  DeleteDOMEvent(t) {
    t.abortController != null && t.abortController.abort();
  }
};
ke = er([
  M()
], ke);
var tr = Object.defineProperty, nr = Object.getOwnPropertyDescriptor, rr = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? nr(e, n) : e, s = t.length - 1, o; s >= 0; s--)
    (o = t[s]) && (i = (r ? o(e, n, i) : o(i)) || i);
  return r && i && tr(e, n, i), i;
};
let We = class {
  constructor() {
    this.viewContexts = [];
  }
  AddViewContext(t) {
    this.viewContexts.push(t);
  }
  RemoveViewContext(t) {
    const e = this.viewContexts.findIndex((n) => n.viewId == t);
    e >= 0 && this.viewContexts.splice(e, 1);
  }
};
We = rr([
  M()
], We);
var ir = Object.defineProperty, sr = Object.getOwnPropertyDescriptor, or = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? sr(e, n) : e, s = t.length - 1, o; s >= 0; s--)
    (o = t[s]) && (i = (r ? o(e, n, i) : o(i)) || i);
  return r && i && ir(e, n, i), i;
};
let He = class extends ie {
  constructor(t, e) {
    super(e), this.stateProvider = t;
  }
  execute() {
    var n;
    const t = this.stateProvider.viewContexts.find((r) => r.viewId == this.config.component);
    if (t == null)
      throw new Error(`Component ${this.config.component} not found`);
    const e = (n = t.localActions) == null ? void 0 : n.find((r) => r.methodName == this.config.methodName);
    if (e == null)
      throw new Error(`Method ${this.config.methodName} not found`);
    e.function();
  }
};
He = or([
  M()
], He);
var ar = Object.defineProperty, cr = Object.getOwnPropertyDescriptor, lr = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? cr(e, n) : e, s = t.length - 1, o; s >= 0; s--)
    (o = t[s]) && (i = (r ? o(e, n, i) : o(i)) || i);
  return r && i && ar(e, n, i), i;
};
let qe = class extends ie {
  constructor(t) {
    super(t);
  }
  execute(t, e) {
    if (typeof t[this.config.methodName] == "function")
      t[this.config.methodName](e);
    else
      throw new Error(`Method ${this.config.methodName} does not exist on ${t.constructor.name}`);
  }
};
qe = lr([
  M()
], qe);
var ur = Object.defineProperty, dr = Object.getOwnPropertyDescriptor, fr = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? dr(e, n) : e, s = t.length - 1, o; s >= 0; s--)
    (o = t[s]) && (i = (r ? o(e, n, i) : o(i)) || i);
  return r && i && ur(e, n, i), i;
}, st = (t, e) => (n, r) => e(n, r, t);
let Le = class {
  constructor(t, e) {
    this.store = ze(e), this.service = t;
  }
  async Login(t, e) {
    return (await this.service.sendRequest(
      {
        url: this.store.apiBase + "/connect/token",
        method: "POST",
        data: new FormData(
          {
            grant_type: "password",
            username: t,
            password: e
          }
        )
      }
    )).data;
  }
};
Le = fr([
  M(),
  st(0, L("HTTPClientService")),
  st(1, L("Pinia"))
], Le);
var hr = Object.defineProperty, pr = Object.getOwnPropertyDescriptor, vr = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? pr(e, n) : e, s = t.length - 1, o; s >= 0; s--)
    (o = t[s]) && (i = (r ? o(e, n, i) : o(i)) || i);
  return r && i && hr(e, n, i), i;
}, ot = (t, e) => (n, r) => e(n, r, t);
let Fe = class {
  constructor(t, e) {
    this.contextManager = t, this.store = vt(e);
  }
  GetContext(t) {
    var i, s;
    if (t == null)
      throw new Error("contextid is undefined");
    const e = {}, n = this.contextManager.findClosestContextById(t);
    this.store.GetBosByContext("ViewConfiguration", t).forEach((o) => {
      e[o.publicidentifier] = o;
    });
    const r = {};
    return (s = (i = this.store.GetBosByContext("GlobalVariable", n.contextid)[0]) == null ? void 0 : i.keyValuePairs) == null || s.forEach((o) => r[o.key] = o.value), {
      components: e,
      variables: r
    };
  }
};
Fe = vr([
  M(),
  ot(0, L("DataContextManager")),
  ot(1, L("Pinia"))
], Fe);
class mr {
  InitializeServices(e, n, r) {
    var i;
    if (e.bind("ApplicationConfiguration").toConstantValue(n), e.bind("TransactionService").to(Pe).inSingletonScope(), e.bind("DataAdapter").toConstructor(de), e.bind("DataAdapterConstructor").toConstructor(de), e.bind("DataFederation").toConstructor(Jn), e.bind("DataContextManager").to($e).inSingletonScope(), e.bind("Pinia").toConstantValue(r), e.bind("BORepository").to(Re).inSingletonScope(), n.mode == we.shadow) {
      const s = (i = z("iotcontainer_0", void 0)) == null ? void 0 : i.get("BOService");
      e.bind("BOService").toConstantValue(s);
    } else
      e.bind("BOService").to(Ge).inSingletonScope();
    e.bind("Screen").to(Be).inSingletonScope(), e.bind("ApplicationFactory").to(Ve).inSingletonScope(), e.bind("TabService").to(je).inSingletonScope(), e.bind("EventBus").to(ke).inSingletonScope(), e.bind("GlobalStateProvider").to(We).inSingletonScope(), e.bind("UIActionFactory").to(K).inSingletonScope(), e.bind("HTTPClientService").to(Ee).inSingletonScope(), e.bind("SendRequestActionConstructor").toConstructor(De), e.bind("SetValueActionConstructor").toConstructor(Ne), e.bind("SetValuesActionConstructor").toConstructor(_n), e.bind("ControlComponentActionConstructor").toConstructor(He), e.bind("CallLocalMethodActionConstructor").toConstructor(qe), e.bind("AuthenticationService").to(Le).inSingletonScope(), e.bind("ExecutionContextProvider").to(Fe).inSingletonScope();
  }
}
class gr {
  constructor(e, n, r, i, s, o) {
    this.startups = [], this.networkConfigs = [], this.config = e, this.factory = n, this.settings = s, this.pinia = o, r != null && (this.rootApp = r), i != null && (this.vueRouter = i);
  }
  RegisterModule(e) {
    if (e.components != null && e.components != null && e.components.length > 0)
      for (const n of e.components)
        this.AddComponent(n);
    if (e.middleware != null && e.middleware != null && e.middleware.length > 0)
      for (const n of e.middleware)
        this.AddMiddleware(n);
    if (typeof e.InitializeServices == "function" && e.InitializeServices(this.container), typeof e.register == "function" && (console.log(444, this.pinia), e.register(this, this.pinia)), e.networkConfigs != null && e.networkConfigs != null && e.networkConfigs.length > 0)
      for (const n of e.networkConfigs)
        this.networkConfigs.push(n);
  }
  AddComponent(e) {
    var n;
    if (e.component = this.factory.create(e), this.AddRoute(e), e.children != null || e.children != null || ((n = e.children) == null ? void 0 : n.length) > 0)
      for (const r of e.children)
        this.AddComponent(r);
  }
  AddMiddleware(e) {
    e.register(this.vueRouter);
  }
  AddBODeclarations(e) {
    this.boDeclarations = e;
    const n = new Te();
    return n.AddBOTypes(e), ze(this.pinia).boDeclarations = n, this;
  }
  CreateDIContainer() {
    let e;
    if (this.config.mode == we.shadow && (e = z("iotcontainer_0")), e != null)
      return this.container = e.createChild(), this;
    this.container = new ct(), this.container.bind("ApplicationComponentFactory").toConstantValue(this.factory);
    const n = new Te();
    return n.AddBOTypes(this.boDeclarations), this.container.bind("BODeclarationContainer").toConstantValue(n), this.container.bind("ApplicationSettings").toConstantValue(this.settings), this;
  }
  setup() {
    if (this.CreateDIContainer(), new mr().InitializeServices(this.container, this.config), this.config.mode == we.standalone && this.setupStandalone(), this.config.middleware != null && this.config.middleware != null && this.config.middleware.length > 0)
      for (const n of this.config.middleware)
        this.AddMiddleware(n);
    if (this.config.modules != null && this.config.modules != null && this.config.modules.length > 0)
      for (const n of this.config.modules)
        this.RegisterModule(n);
    return this;
  }
  useStartup(e) {
    return this.startups.push(e), this;
  }
  SetupRoutes() {
    var e;
    if (this.config.standalone == !0) {
      const n = {
        history: this.CreateVueWebHistory()
      }, r = [];
      this.config.components != null && this.config.components != null && this.config.components.length > 0 && this.config.components.forEach((i) => {
        r.push(this.CreateRoute(i));
      }), n.routes = r, this.vueRouter = kt(n), (e = this.rootApp) == null || e.use(this.vueRouter);
    }
  }
  CreateVueWebHistory() {
    return Wt();
  }
  AddRoute(e) {
    var n, r, i, s, o;
    ((n = e.route) == null ? void 0 : n.parent) != null ? this.vueRouter.addRoute(e.route.parent, {
      path: (r = e.route) == null ? void 0 : r.path,
      name: (i = e.route) == null ? void 0 : i.name,
      component: e.component.render()
    }) : this.vueRouter.addRoute({
      path: (s = e.route) == null ? void 0 : s.path,
      name: (o = e.route) == null ? void 0 : o.name,
      component: e.component.render()
    });
  }
  CreateRoute(e) {
    var n;
    return {
      path: e.route.path,
      component: e.component.render(),
      name: e.route.name,
      children: (n = e.children) == null ? void 0 : n.map((r) => this.CreateRoute(r))
    };
  }
  mount() {
    this.config.selector != null && pt(this.config.selector).then(() => {
      var e;
      (e = this.rootApp) == null || e.mount(this.config.selector);
    });
  }
  createComponent(e, n = void 0) {
    const r = this.factory.create(e);
    return r.initialize(e, n), r;
  }
  setupStandalone() {
    const e = this.createComponent(this.config.rootComponent), n = Nt({
      name: "TestComponent",
      props: {
        rootComponent: {
          type: jn,
          required: !0
        }
      },
      setup(i) {
        return () => i.rootComponent.render();
      }
    }), r = Dt(n, {
      rootComponent: e
    });
    qt.install(r, {}), r.use(this.vueRouter), this.rootApp = r;
  }
  build() {
    var s, o;
    const e = this.container.get("DataContextManager");
    if (e == null)
      throw new Error("DataContextManager not found");
    const n = (o = (s = this.container) == null ? void 0 : s.parent) == null ? void 0 : o.get("DataContextManager");
    let r;
    this.config.mode == "shadow" ? (r = e.UpgradeContextLevel(this.config.contextid, ne.Application, n).contextid, e.hasParentManager = !0) : r = e.NewContext(void 0, ne.Application).contextid, this.rootApp.provide("iotcontainer_" + r, this.container);
    const i = this.container.get("HTTPClientService");
    for (const p of this.networkConfigs)
      i.networks.push(p);
    if (this.startups != null)
      for (const p of this.startups)
        p.InitializeServices(this.container, this.config, this.store);
    return this;
  }
}
var G = /* @__PURE__ */ ((t) => (t.string = "string", t.number = "number", t.boolean = "boolean", t.date = "date", t.datetime = "datetime", t.time = "time", t))(G || {});
class ce {
  constructor(e) {
    this.dataType = e.dataType, this.name = e.name, this.value = e.value;
  }
  GetValue() {
    return this.value;
  }
}
class Qr extends ge {
  constructor(e) {
    super({
      propertys: [
        new ce({
          name: "id",
          type: G.number
        }),
        new ce({
          name: "rootComponent",
          type: G.object
        }),
        new ce({
          name: "components",
          type: G.array
        }),
        new ce({
          name: "selector",
          type: G.string
        }),
        new ce({
          name: "mode",
          type: G.number
        }),
        new ce({
          name: "modules",
          type: G.array
        })
      ],
      name: "ApplicationConfiguration"
    }), this.selector = "#app", Object.assign(this, e);
  }
}
function Yr(t, e) {
  const n = z("viewGetter_" + t);
  if (n == null)
    throw new Error("ViewGetter not found");
  return n(e);
}
var yr = /* @__PURE__ */ ((t) => (t.Container = "Container", t.Component = "Component", t))(yr || {});
class Zr {
}
var br = /* @__PURE__ */ ((t) => (t.spassr = "spassr", t.spaclient = "spaclient", t.mpahybrid = "mpahybrid", t.mpassr = "mpassr", t.electron = "electron", t.cordova = "cordova", t))(br || {}), Cr = /* @__PURE__ */ ((t) => (t.global = "global", t.local = "local", t.none = "none", t))(Cr || {});
class Xr {
  constructor(e) {
    Object.assign(this, e);
  }
}
class Kr {
  constructor() {
    this.value = {};
  }
  GetParameter(e, n = this.value) {
    if (n.hasOwnProperty(e))
      return n[e];
    for (const r in n)
      if (typeof n[r] == "object") {
        const i = this.GetParameter(e, n[r]);
        if (i)
          return i;
      }
  }
}
class ei {
  constructor(e) {
    this.config = e;
  }
  ProvideCreateDIContainer(e) {
    const n = new ct();
    e.InitializeServices(n, this.config), this.container = n;
  }
}
class ti {
  constructor(e, n) {
    this.config = e, this.templateRef = n;
  }
  setup() {
  }
}
class mt {
  static Download(e, n) {
    const r = "data:text/json;charset=utf-8," + JSON.stringify(e), i = mt.SetFileName("export", n);
    e = encodeURI(r);
    const s = document.createElement("a");
    s.setAttribute("href", e), s.setAttribute("download", i), s.click();
  }
  static SetFileName(e) {
    return e + ".csv";
  }
}
var wr = /* @__PURE__ */ ((t) => (t.json = "json", t.csv = "csv", t.xml = "xml", t.yaml = "yaml", t))(wr || {}), h = /* @__PURE__ */ ((t) => (t.Equal = "Equal", t.NotEqual = "NotEqual", t.Contains = "Contains", t.Between = "Between", t.Greater = "Greater", t.GreaterOrEqual = "GreaterOrEqual", t.Less = "Less", t.LessOrEqual = "LessOrEqual", t.StartsWith = "StartsWith", t.EndsWith = "EndsWith", t.IsNull = "IsNull", t.In = "In", t.NotIn = "NotIn", t))(h || {});
class ue {
  constructor(e) {
    Object.assign(this, e), this.type == null && (this.type = G.string);
  }
  SetClearValue() {
    switch (this.type) {
      case G.string:
        this.value = "";
        break;
      case G.number:
        this.value = 0;
        break;
      case G.boolean:
        this.value = !1;
        break;
      case G.array:
        this.value = [];
        break;
      case G.object:
        this.value = {};
        break;
      case G.date:
        this.value = "";
        break;
      case G.datetime:
        this.value = "";
        break;
      case G.time:
        this.value = "";
        break;
    }
  }
  ChangeOperator(e) {
    switch (e) {
      case h.Contains:
        this.operator = h.Contains, (Array.isArray(this.value) || typeof this.value == "object") && this.SetClearValue();
        break;
      case h.Equal:
        this.operator = h.Equal, (Array.isArray(this.value) || typeof this.value == "object") && this.SetClearValue();
        break;
      case h.Greater:
        this.operator = h.Greater, (Array.isArray(this.value) || typeof this.value == "object") && this.SetClearValue();
        break;
      case h.GreaterOrEqual:
        this.operator = h.GreaterOrEqual, (Array.isArray(this.value) || typeof this.value == "object") && this.SetClearValue();
        break;
      case h.Less:
        this.operator = h.Less, (Array.isArray(this.value) || typeof this.value == "object") && this.SetClearValue();
        break;
      case h.LessOrEqual:
        this.operator = h.LessOrEqual, (Array.isArray(this.value) || typeof this.value == "object") && this.SetClearValue();
        break;
      case h.NotEqual:
        this.operator = h.NotEqual, (Array.isArray(this.value) || typeof this.value == "object") && this.SetClearValue();
        break;
      case h.StartsWith:
        this.operator = h.StartsWith, (Array.isArray(this.value) || typeof this.value == "object") && this.SetClearValue();
        break;
      case h.EndsWith:
        this.operator = h.EndsWith, (Array.isArray(this.value) || typeof this.value == "object") && this.SetClearValue();
        break;
      case h.IsNull:
        this.operator = h.IsNull, (Array.isArray(this.value) || typeof this.value == "object" || typeof this.value != "boolean") && this.SetClearValue();
        break;
      case h.In:
        this.operator = h.In, Array.isArray(this.value) || this.SetClearValue();
        break;
      case h.NotIn:
        this.operator = h.NotIn, Array.isArray(this.value) || this.SetClearValue();
        break;
      case h.Between:
        this.operator = h.Between, this.value = { from: "", to: "" };
        break;
      default:
        this.operator = h.Contains;
        break;
    }
  }
  Update(e) {
    this.value = e.value, (e.field != this.field || e.operator != this.operator || e.type != this.type || e.jsCode != this.jsCode) && (this.field = e.field, this.operator = e.operator, this.type = e.type, this.jsCode = e.jsCode, this.BuildExpression());
  }
  static FromString(e, n, r = { operator: h.Contains }) {
    let [i, s] = ue.GetOperatorAndValueFromString(e);
    if (i == null || s == null) {
      if (r.operator == null)
        throw new Error("Operator cant be found");
      i = r.operator, s = e;
    }
    const o = ue.ConvertValueToType(s);
    return new ue({
      value: o,
      operator: i,
      field: n,
      type: typeof o
    });
  }
  static ConvertValueToType(e) {
    return e == "true" ? !0 : e == "false" ? !1 : isNaN(Number(e)) ? e : Number(e);
  }
  static CountOperators(e) {
    return e;
  }
  static CheckStringIsValid(e) {
    return ue.CountOperators(e);
  }
  static GetFiltersFromString(e) {
    return e;
  }
  static GetOperatorAndValueFromString(e) {
    const n = /Equals\("?([^"]+)"?\)/g, r = /NotEquals\("([^"]+)"\)/g, i = /Greater\("([^"]+)"\)/g, s = /GreaterOrEqual\("([^"]+)"\)/g, o = /Less\("([^"]+)"\)/g, p = /LessOrEqual\("([^"]+)"\)/g, d = /StartsWith\("([^"]+)"\)/g, w = /EndsWith\("([^"]+)"\)/g, _ = /Contains\("([^"]+)"\)/g, T = /In\("([^"]+)"\)/g, E = /NotIn\("([^"]+)"\)/g, P = /Between\("([^"]+)"\)/g, I = /IsNull\(\)/g, D = /IsNotNull\(\)/g;
    if (n.test(e) == !0) {
      const F = e.replace("Equals(", "").replace(")", "");
      return [h.Equal, F];
    } else {
      if (r.test(e))
        return h.NotEqual;
      if (i.test(e))
        return h.Greater;
      if (s.test(e))
        return h.GreaterOrEqual;
      if (o.test(e))
        return h.Less;
      if (p.test(e))
        return h.LessOrEqual;
      if (d.test(e))
        return h.StartsWith;
      if (w.test(e))
        return h.EndsWith;
      if (_.test(e))
        return h.Contains;
      if (T.test(e))
        return h.In;
      if (E.test(e))
        return h.NotIn;
      if (P.test(e))
        return h.Between;
      if (I.test(e))
        return h.IsNull;
      if (D.test(e))
        return h.IsNotNull;
    }
    return [void 0, void 0];
  }
  BuildExpression() {
    if (this.jsCode)
      this.expression = this.jsCode;
    else
      switch (this.operator) {
        case h.Contains:
          this.expression = function(e) {
            return e[this.field].includes(this.value);
          };
        case h.Equal:
          this.expression = function(e) {
            return e[this.field] == this.value;
          };
        case h.Greater:
          this.expression = function(e) {
            return e[this.field] > this.value;
          };
        case h.GreaterOrEqual:
          this.expression = function(e) {
            return e[this.field] >= this.value;
          };
        case h.Less:
          this.expression = function(e) {
            return e[this.field] < this.value;
          };
        case h.LessOrEqual:
          this.expression = function(e) {
            return e[this.field] <= this.value;
          };
        case h.NotEqual:
          this.expression = function(e) {
            return e[this.field] != this.value;
          };
        case h.StartsWith:
          this.expression = function(e) {
            return e[this.field].startsWith(this.value);
          };
        case h.EndsWith:
          this.expression = function(e) {
            return e[this.field].endsWith(this.value);
          };
        case h.IsNull:
          this.expression = function(e) {
            return e[this.field] == null;
          };
        case h.In:
          this.expression = function(e) {
            return e[this.field].includes(this.value);
          };
        case h.NotIn:
          this.expression = function(e) {
            return !e[this.field].includes(this.value);
          };
        case h.Between:
          this.expression = function(e) {
            return e[this.field] >= this.value && e[this.field] <= this.value;
          };
        default:
          this.expression = function() {
            return !0;
          };
      }
  }
  Run(e) {
    return this.expression || this.BuildExpression(), this.expression(e);
  }
}
class me {
  constructor(e, n) {
    if (this.and = e, (n == null ? void 0 : n.length) > 0)
      for (const r of n)
        this.addFilter(r);
  }
  addFilter(e) {
    this.filters == null && (this.filters = []), e.key == null && this.SetFilterKey(e), this.filters.push(e);
  }
  SetFilterKey(e) {
    const n = this.filters.map((r) => r.key);
    n.length == 0 ? e.key = 0 : e.key = Math.max(...n.map((r) => Number(r))) + 1;
  }
  SetChainKey(e) {
    const n = this.subChains.map((r) => r.key);
    n.length == 0 ? e.key = 0 : e.key = Math.max(...n.map((r) => Number(r))) + 1;
  }
  removeFilter(e) {
    this.filters = this.filters.splice(this.filters.indexOf(e), 1);
  }
  static CountAndAndOr(e) {
    const n = e.indexOf("&&"), r = e.indexOf("||");
    return n != -1 && r != -1;
  }
  static CheckStringIsValid() {
  }
  static FromString(e, n = { and: !0 }) {
    const r = new me();
    r.and = n.and;
    const i = /\{\((.*?)\)\}/g;
    (!e.startsWith("{(") || !e.endsWith(")}")) && (e = "{(" + e + ")}");
    const s = e.indexOf("{("), o = e.lastIndexOf(")}");
    e = e.substring(s + 2, o);
    const p = new me(), d = e.match(i);
    if (d != null && (d == null ? void 0 : d.length) > 0 && typeof d[Symbol.iterator] == "function")
      for (const w of d) {
        const _ = me.FromString(w);
        r.addChild(_);
      }
    for (const w of splitFiltersByAndOrOr) {
      const _ = ue.FromString(w);
      p.addFilter(_);
    }
    return r.addChild(p), console.log(r), r;
  }
  static RemoveChainStringCrumps(e) {
    const n = e.indexOf("{("), r = e.lastIndexOf(")}");
    return n == -1 || r == -1 ? e : e.substring(n + 2, r);
  }
  addChild(e) {
    this.subChains == null && (this.subChains = []), this.SetChainKey(e), this.subChains.push(e);
  }
  Run(e) {
    if (this.and == !0) {
      for (const n of this.filters)
        if (n.Run(e) == !1)
          return !1;
      for (const n of this.subChains)
        if (n.Run(e) == !1)
          return !1;
    } else if (this.and == !1) {
      for (const n of this.filters)
        if (n.Run(e) == !0)
          return !0;
      for (const n of this.subChains)
        if (n.Run(e) == !0)
          return !0;
    }
    return this.filters[0].Run(e);
  }
}
class ni {
  constructor() {
  }
  AddChain(e, n = !0) {
    if (this.filterChain == null) {
      this.filterChain = new me(n);
      return;
    }
    this.filterChain.addChild(e);
  }
  Get(e) {
    return this.filterChain == null ? e : e.filter((n) => this.filterChain.Run(n));
  }
}
function ri(t, e) {
  return new URL(t + e, import.meta.url).href;
}
function Sr(t) {
  return jt() ? (Rt(t), !0) : !1;
}
function gt(t) {
  return typeof t == "function" ? t() : Gt(t);
}
const xr = typeof window < "u" && typeof document < "u", Ar = Object.prototype.toString, Or = (t) => Ar.call(t) === "[object Object]", _r = () => {
};
function Er(t) {
  var e;
  const n = gt(t);
  return (e = n == null ? void 0 : n.$el) != null ? e : n;
}
const Pr = xr ? window : void 0;
function ii(...t) {
  let e, n, r, i;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([n, r, i] = t, e = Pr) : [e, n, r, i] = t, !e)
    return _r;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const s = [], o = () => {
    s.forEach((_) => _()), s.length = 0;
  }, p = (_, T, E, P) => (_.addEventListener(T, E, P), () => _.removeEventListener(T, E, P)), d = Bt(
    () => [Er(e), gt(i)],
    ([_, T]) => {
      if (o(), !_)
        return;
      const E = Or(T) ? { ...T } : T;
      s.push(
        ...n.flatMap((P) => r.map((I) => p(_, P, I, E)))
      );
    },
    { immediate: !0, flush: "post" }
  ), w = () => {
    d(), o();
  };
  return Sr(w), w;
}
function si(t) {
  if (typeof t == "string" && t != "") {
    const e = t.match(/^([-.\d]+(?:\.\d+)?)(.*)$/);
    return e == null ? { value: t, unit: "" } : { value: e[1].trim(), unit: e[2].trim() };
  } else
    return { value: t, unit: "" };
}
function Ir(t, e, n) {
  return n == null || n.length == 0 ? [] : n.map((r) => () => ft(t, e, r.rule) || r.errorMessage);
}
class oi extends cn {
  constructor(e) {
    super(e);
  }
  ValidateRules() {
    const { contextProvider: e, contextid: n } = this.ProvideContext();
    return Ir(e, n, this.GetConfiguration().properties.rules);
  }
}
var Tr = Object.defineProperty, Mr = Object.getOwnPropertyDescriptor, Nr = (t, e, n, r) => {
  for (var i = r > 1 ? void 0 : r ? Mr(e, n) : e, s = t.length - 1, o; s >= 0; s--)
    (o = t[s]) && (i = (r ? o(e, n, i) : o(i)) || i);
  return r && i && Tr(e, n, i), i;
};
let at = class {
  ProvideThemeAsCSSElement(t, e) {
    let n = "";
    for (const s of t == null ? void 0 : t.colors)
      n += `.text-${s.key} { color: ${s.value}; }`, n += `.bg-${s.key} { background: ${s.value}; }`;
    const r = document.getElementById("alpha-theme");
    r != null && r.remove();
    const i = this.CreateCSSElement(n);
    e != null ? e.appendChild(i) : document.body.appendChild(i);
  }
  CreateCSSElement(t) {
    const e = document.createElement("style");
    return e.id = "alpha-theme", e.innerHTML = t, e;
  }
};
at = Nr([
  M()
], at);
export {
  ei as Application,
  Qr as ApplicationConfiguration,
  br as ApplicationDeploymentModes,
  Ve as ApplicationFactory,
  we as ApplicationModes,
  Zr as ApplicationModule,
  Kr as ApplicationSettings,
  Jt as AxiosWrapper,
  Re as BORepository,
  Ge as BOService,
  re as BaseServiceProvider,
  on as BaseView,
  qr as BaseViewModel,
  mt as BrowserDownload,
  ge as BusinessObject,
  at as CSSProvider,
  qe as CallLocalMethodAction,
  Fe as CodeContextProvider,
  ne as ContextLevel,
  He as ControlComponentAction,
  de as DataAdapter,
  Xr as DataAdapterOptions,
  $e as DataContextManager,
  Lt as DataSources,
  G as DataTypes,
  mr as DefaultApplicationServiceCollection,
  ke as EventBus,
  ye as ExpressionValidator,
  wr as FileTypes,
  ue as Filter,
  me as FilterChain,
  h as FilterOperators,
  We as GlobalStateProvider,
  Ee as HTTPClientService,
  Ft as KeyValuePair,
  Hr as LoggingService,
  fn as ModellingContextStateManager,
  ti as Page,
  Cr as PublishScopes,
  ni as Query,
  Sn as RequestMethods,
  Be as Screen,
  De as SendRequestAction,
  Ne as SetValueAction,
  _n as SetValuesAction,
  wn as SetterActionTargetTypes,
  lt as SimpleNameValueCollection,
  Wr as SolutionObject,
  si as SplitStyle,
  W as StateChangeTypes,
  Ie as SyncStateModes,
  je as TabService,
  Xt as Transaction,
  Pe as TransactionService,
  ie as UIAction,
  Jr as UIActionEvent,
  K as UIActionFactory,
  gn as UIActionTargetTypes,
  Cn as UIActionTypes,
  le as UIActionsEnum,
  Me as UIEventTypes,
  hn as UIEvents,
  kr as UtilityModule,
  ft as ValueResolver,
  oi as ValueValidationViewElement,
  Ur as ViewConfiguration,
  cn as ViewElement,
  yr as ViewRoles,
  gr as VueApplication,
  jn as VueApplicationComponent,
  zt as createUniqueClientIdInContext,
  Tn as deepcopy,
  Ut as nthIndex,
  ut as searchObjectInNestedArray,
  ze as useApplicationStore,
  _e as useCreatorStore,
  vt as useDataStore,
  ii as useEventListener,
  ri as useGetFile,
  Fr as useModellingStateManagementPlugin,
  nt as useModellingStore,
  zr as useSolutionService,
  Yr as useViewConfiguration,
  Q as useWebNodeStore,
  Lr as useWebNodeTemplateStore,
  Ir as validateRules,
  pt as waitForElm
};
