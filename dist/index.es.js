import Ae, { useState as te } from "react";
import L from "prop-types";
import Oe from "dayjs";
var ne = { exports: {} }, V = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function pr() {
  if (Se) return V;
  Se = 1;
  var $ = Ae, j = Symbol.for("react.element"), F = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, P = $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(_, h, w) {
    var g, R = {}, C = null, k = null;
    w !== void 0 && (C = "" + w), h.key !== void 0 && (C = "" + h.key), h.ref !== void 0 && (k = h.ref);
    for (g in h) c.call(h, g) && !T.hasOwnProperty(g) && (R[g] = h[g]);
    if (_ && _.defaultProps) for (g in h = _.defaultProps, h) R[g] === void 0 && (R[g] = h[g]);
    return { $$typeof: j, type: _, key: C, ref: k, props: R, _owner: P.current };
  }
  return V.Fragment = F, V.jsx = O, V.jsxs = O, V;
}
var U = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function mr() {
  return ke || (ke = 1, process.env.NODE_ENV !== "production" && function() {
    var $ = Ae, j = Symbol.for("react.element"), F = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), _ = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), u = Symbol.iterator, m = "@@iterator";
    function l(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = u && e[u] || e[m];
      return typeof r == "function" ? r : null;
    }
    var x = $.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        I("error", e, t);
      }
    }
    function I(e, r, t) {
      {
        var n = x.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var $e = !1, Fe = !1, Me = !1, Ne = !1, Ie = !1, ae;
    ae = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === T || Ie || e === P || e === w || e === g || Ne || e === k || $e || Fe || Me || typeof e == "object" && e !== null && (e.$$typeof === C || e.$$typeof === R || e.$$typeof === O || e.$$typeof === _ || e.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function oe(e) {
      return e.displayName || "Context";
    }
    function S(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case c:
          return "Fragment";
        case F:
          return "Portal";
        case T:
          return "Profiler";
        case P:
          return "StrictMode";
        case w:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return oe(r) + ".Consumer";
          case O:
            var t = e;
            return oe(t._context) + ".Provider";
          case h:
            return Ye(e, e.render, "ForwardRef");
          case R:
            var n = e.displayName || null;
            return n !== null ? n : S(e.type) || "Memo";
          case C: {
            var i = e, s = i._payload, o = i._init;
            try {
              return S(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, W = 0, ie, se, ue, le, ce, fe, de;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function Le() {
      {
        if (W === 0) {
          ie = console.log, se = console.info, ue = console.warn, le = console.error, ce = console.group, fe = console.groupCollapsed, de = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ve,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        W++;
      }
    }
    function Ve() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, e, {
              value: ie
            }),
            info: A({}, e, {
              value: se
            }),
            warn: A({}, e, {
              value: ue
            }),
            error: A({}, e, {
              value: le
            }),
            group: A({}, e, {
              value: ce
            }),
            groupCollapsed: A({}, e, {
              value: fe
            }),
            groupEnd: A({}, e, {
              value: de
            })
          });
        }
        W < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = x.ReactCurrentDispatcher, H;
    function q(e, r, t) {
      {
        if (H === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            H = n && n[1] || "";
          }
        return `
` + H + e;
      }
    }
    var G = !1, B;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      B = new Ue();
    }
    function pe(e, r) {
      if (!e || G)
        return "";
      {
        var t = B.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      G = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = z.current, z.current = null, Le();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (b) {
              n = b;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (b) {
              n = b;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (b) {
            n = b;
          }
          e();
        }
      } catch (b) {
        if (b && n && typeof b.stack == "string") {
          for (var a = b.stack.split(`
`), y = n.stack.split(`
`), v = a.length - 1, p = y.length - 1; v >= 1 && p >= 0 && a[v] !== y[p]; )
            p--;
          for (; v >= 1 && p >= 0; v--, p--)
            if (a[v] !== y[p]) {
              if (v !== 1 || p !== 1)
                do
                  if (v--, p--, p < 0 || a[v] !== y[p]) {
                    var E = `
` + a[v].replace(" at new ", " at ");
                    return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, E), E;
                  }
                while (v >= 1 && p >= 0);
              break;
            }
        }
      } finally {
        G = !1, z.current = s, Ve(), Error.prepareStackTrace = i;
      }
      var N = e ? e.displayName || e.name : "", D = N ? q(N) : "";
      return typeof e == "function" && B.set(e, D), D;
    }
    function qe(e, r, t) {
      return pe(e, !1);
    }
    function Be(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function J(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return pe(e, Be(e));
      if (typeof e == "string")
        return q(e);
      switch (e) {
        case w:
          return q("Suspense");
        case g:
          return q("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            return qe(e.render);
          case R:
            return J(e.type, r, t);
          case C: {
            var n = e, i = n._payload, s = n._init;
            try {
              return J(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var Y = Object.prototype.hasOwnProperty, me = {}, he = x.ReactDebugCurrentFrame;
    function K(e) {
      if (e) {
        var r = e._owner, t = J(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    function Je(e, r, t, n, i) {
      {
        var s = Function.call.bind(Y);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var y = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              a = v;
            }
            a && !(a instanceof Error) && (K(i), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), K(null)), a instanceof Error && !(a.message in me) && (me[a.message] = !0, K(i), f("Failed %s type: %s", t, a.message), K(null));
          }
      }
    }
    var Ke = Array.isArray;
    function X(e) {
      return Ke(e);
    }
    function ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function He(e) {
      try {
        return ge(e), !1;
      } catch {
        return !0;
      }
    }
    function ge(e) {
      return "" + e;
    }
    function ye(e) {
      if (He(e))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), ge(e);
    }
    var be = x.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, _e;
    function Xe(e) {
      if (Y.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (Y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      typeof e.ref == "string" && be.current;
    }
    function er(e, r) {
      {
        var t = function() {
          Ee || (Ee = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          _e || (_e = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, n, i, s, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: j,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function nr(e, r, t, n, i) {
      {
        var s, o = {}, a = null, y = null;
        t !== void 0 && (ye(t), a = "" + t), Ze(r) && (ye(r.key), a = "" + r.key), Xe(r) && (y = r.ref, Qe(r, i));
        for (s in r)
          Y.call(r, s) && !Ge.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (s in v)
            o[s] === void 0 && (o[s] = v[s]);
        }
        if (a || y) {
          var p = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && er(o, p), y && rr(o, p);
        }
        return tr(e, a, y, i, n, be.current, o);
      }
    }
    var Z = x.ReactCurrentOwner, Re = x.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = J(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === j;
    }
    function xe() {
      {
        if (Z.current) {
          var e = S(Z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      return "";
    }
    var je = {};
    function or(e) {
      {
        var r = xe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Te(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = or(r);
        if (je[t])
          return;
        je[t] = !0;
        var n = "";
        e && e._owner && e._owner !== Z.current && (n = " It was passed a child from " + S(e._owner.type) + "."), M(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), M(null);
      }
    }
    function we(e, r) {
      {
        if (typeof e != "object")
          return;
        if (X(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ee(n) && Te(n, r);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = l(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              ee(o.value) && Te(o.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === R))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = S(r);
          Je(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Q) {
          Q = !0;
          var i = S(r);
          f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            M(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), M(null);
            break;
          }
        }
        e.ref !== null && (M(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), M(null));
      }
    }
    var Ce = {};
    function Pe(e, r, t, n, i, s) {
      {
        var o = We(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var y = ar();
          y ? a += y : a += xe();
          var v;
          e === null ? v = "null" : X(e) ? v = "array" : e !== void 0 && e.$$typeof === j ? (v = "<" + (S(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, a);
        }
        var p = nr(e, r, t, i, s);
        if (p == null)
          return p;
        if (o) {
          var E = r.children;
          if (E !== void 0)
            if (n)
              if (X(E)) {
                for (var N = 0; N < E.length; N++)
                  we(E[N], e);
                Object.freeze && Object.freeze(E);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              we(E, e);
        }
        if (Y.call(r, "key")) {
          var D = S(e), b = Object.keys(r).filter(function(vr) {
            return vr !== "key";
          }), re = b.length > 0 ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ce[D + re]) {
            var dr = b.length > 0 ? "{" + b.join(": ..., ") + ": ...}" : "{}";
            f(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, re, D, dr, D), Ce[D + re] = !0;
          }
        }
        return e === c ? sr(p) : ir(p), p;
      }
    }
    function ur(e, r, t) {
      return Pe(e, r, t, !0);
    }
    function lr(e, r, t) {
      return Pe(e, r, t, !1);
    }
    var cr = lr, fr = ur;
    U.Fragment = c, U.jsx = cr, U.jsxs = fr;
  }()), U;
}
process.env.NODE_ENV === "production" ? ne.exports = pr() : ne.exports = mr();
var d = ne.exports;
const De = ({ initialTime: $, onTimeChange: j, onClose: F }) => {
  const [c, P] = te(
    $ ? Oe($) : Oe()
  ), [T, O] = te("hour"), [_, h] = te(c.format("A")), w = (u, m, l) => {
    const f = (u * (360 / m) - 90) * Math.PI / 180;
    return {
      x: Math.cos(f) * l,
      y: Math.sin(f) * l
    };
  }, g = (u) => {
    const m = _ === "PM" && u < 12 ? u + 12 : _ === "AM" && u === 12 ? 0 : u;
    P(c.hour(m)), O("minute"), j(c.hour(m));
  }, R = (u) => {
    P(c.minute(u)), j(c.minute(u));
  }, C = (u) => {
    h(u);
    const m = c.hour();
    let l;
    u === "AM" && m >= 12 ? l = m - 12 : u === "PM" && m < 12 ? l = m + 12 : l = m, P(c.hour(l)), j(c.hour(l));
  }, k = (u) => {
    O(u);
  };
  return /* @__PURE__ */ d.jsx("div", { className: "time-picker-container", children: /* @__PURE__ */ d.jsxs("div", { className: "bg-white rounded-lg shadow-lg overflow-hidden w-80", children: [
    /* @__PURE__ */ d.jsxs("div", { className: "time-picker-header", children: [
      /* @__PURE__ */ d.jsxs("div", { className: "time-display", children: [
        /* @__PURE__ */ d.jsx(
          "span",
          {
            className: `cursor-pointer ${T === "hour" ? "opacity-100" : "opacity-70"}`,
            onClick: () => k("hour"),
            children: c.format("h")
          }
        ),
        /* @__PURE__ */ d.jsx("span", { children: ":" }),
        /* @__PURE__ */ d.jsx(
          "span",
          {
            className: `cursor-pointer ${T === "minute" ? "opacity-100" : "opacity-70"}`,
            onClick: () => k("minute"),
            children: c.format("mm")
          }
        )
      ] }),
      /* @__PURE__ */ d.jsx("div", { className: "ampm-buttons", children: ["AM", "PM"].map((u) => /* @__PURE__ */ d.jsx(
        "button",
        {
          onClick: () => C(u),
          className: `ampm-button ${_ === u ? "ampm-button-active" : ""}`,
          children: u
        },
        u
      )) })
    ] }),
    /* @__PURE__ */ d.jsx("div", { className: "p-4", children: /* @__PURE__ */ d.jsxs("div", { className: "clock-face", children: [
      /* @__PURE__ */ d.jsx("div", { className: "clock-background" }),
      /* @__PURE__ */ d.jsx(
        "div",
        {
          className: `absolute top-1/2 left-1/2 h-1 w-20 bg-orange-500 rounded-full origin-left z-10 transition-transform ${T !== "hour" ? "opacity-40" : ""}`,
          style: {
            transform: `rotate(${c.hour() % 12 * 30 - 90}deg)`
          },
          children: /* @__PURE__ */ d.jsx("div", { className: "absolute right-0 -top-1.5 w-4 h-4 rounded-full bg-orange-500" })
        }
      ),
      /* @__PURE__ */ d.jsx(
        "div",
        {
          className: `absolute top-1/2 left-1/2 h-0.5 w-24 bg-orange-500 rounded-full origin-left z-10 transition-transform ${T !== "minute" ? "opacity-40" : ""}`,
          style: {
            transform: `rotate(${c.minute() * 6 - 90}deg)`
          },
          children: /* @__PURE__ */ d.jsx("div", { className: "absolute right-0 -top-1 w-3 h-3 rounded-full bg-orange-500" })
        }
      ),
      /* @__PURE__ */ d.jsx("div", { className: "absolute top-1/2 left-1/2 w-2 h-2 -ml-1 -mt-1 rounded-full bg-orange-500 z-20" }),
      T === "hour" ? (
        /* Hour numbers */
        [...Array(12)].map((u, m) => {
          const l = m === 0 ? 12 : m, { x, y: f } = w(l, 12, 110), I = c.hour() % 12 === l % 12 || l === 12 && c.hour() % 12 === 0;
          return /* @__PURE__ */ d.jsx(
            "div",
            {
              className: `absolute w-8 h-8 flex items-center justify-center text-lg font-medium cursor-pointer
                                ${I ? "text-white bg-orange-500 rounded-full" : "hover:text-orange-500"}`,
              style: {
                left: `calc(50% + ${x}px - 16px)`,
                top: `calc(50% + ${f}px - 16px)`
              },
              onClick: () => g(l === 12 ? 0 : l),
              children: l
            },
            l
          );
        })
      ) : (
        /* Minute numbers (show 5-minute intervals) */
        [...Array(12)].map((u, m) => {
          const l = m * 5, { x, y: f } = w(m, 12, 110), I = Math.abs(c.minute() - l) < 2.5 || l === 0 && c.minute() > 57.5;
          return /* @__PURE__ */ d.jsx(
            "div",
            {
              className: `absolute w-8 h-8 flex items-center justify-center text-lg font-medium cursor-pointer
                                ${I ? "text-white bg-orange-500 rounded-full" : "hover:text-orange-500"}`,
              style: {
                left: `calc(50% + ${x}px - 16px)`,
                top: `calc(50% + ${f}px - 16px)`
              },
              onClick: () => R(l),
              children: l === 0 ? "00" : l
            },
            l
          );
        })
      )
    ] }) }),
    /* @__PURE__ */ d.jsxs("div", { className: "px-4 py-3 border-t flex justify-between items-center", children: [
      /* @__PURE__ */ d.jsx(
        "button",
        {
          className: "uppercase text-gray-700 font-medium",
          onClick: F,
          children: "CANCEL"
        }
      ),
      /* @__PURE__ */ d.jsx(
        "button",
        {
          className: "uppercase text-orange-500 font-medium",
          onClick: () => {
            j(c.toDate()), F();
          },
          children: "OK"
        }
      )
    ] })
  ] }) });
};
De.propTypes = {
  initialTime: L.oneOfType([
    L.string,
    L.instanceOf(Date)
  ]),
  onTimeChange: L.func.isRequired,
  onClose: L.func.isRequired
};
De.defaultProps = {
  initialTime: null
};
export {
  De as TimePickerClock
};
//# sourceMappingURL=index.es.js.map
