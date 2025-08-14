function yg(n, i) {
  for (var l = 0; l < i.length; l++) {
    const o = i[l];
    if (typeof o != 'string' && !Array.isArray(o)) {
      for (const a in o)
        if (a !== 'default' && !(a in n)) {
          const c = Object.getOwnPropertyDescriptor(o, a);
          c &&
            Object.defineProperty(
              n,
              a,
              c.get ? c : { enumerable: !0, get: () => o[a] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }),
  );
}
(function () {
  const i = document.createElement('link').relList;
  if (i && i.supports && i.supports('modulepreload')) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) o(a);
  new MutationObserver((a) => {
    for (const c of a)
      if (c.type === 'childList')
        for (const f of c.addedNodes)
          f.tagName === 'LINK' && f.rel === 'modulepreload' && o(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(a) {
    const c = {};
    return (
      a.integrity && (c.integrity = a.integrity),
      a.referrerPolicy && (c.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === 'use-credentials'
        ? (c.credentials = 'include')
        : a.crossOrigin === 'anonymous'
          ? (c.credentials = 'omit')
          : (c.credentials = 'same-origin'),
      c
    );
  }
  function o(a) {
    if (a.ep) return;
    a.ep = !0;
    const c = l(a);
    fetch(a.href, c);
  }
})();
function ho(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, 'default')
    ? n.default
    : n;
}
var fa = { exports: {} },
  Ei = {},
  da = { exports: {} },
  Ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var td;
function vg() {
  if (td) return Ee;
  td = 1;
  var n = Symbol.for('react.element'),
    i = Symbol.for('react.portal'),
    l = Symbol.for('react.fragment'),
    o = Symbol.for('react.strict_mode'),
    a = Symbol.for('react.profiler'),
    c = Symbol.for('react.provider'),
    f = Symbol.for('react.context'),
    p = Symbol.for('react.forward_ref'),
    h = Symbol.for('react.suspense'),
    m = Symbol.for('react.memo'),
    g = Symbol.for('react.lazy'),
    v = Symbol.iterator;
  function k(P) {
    return P === null || typeof P != 'object'
      ? null
      : ((P = (v && P[v]) || P['@@iterator']),
        typeof P == 'function' ? P : null);
  }
  var x = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    O = Object.assign,
    z = {};
  function R(P, F, E) {
    ((this.props = P),
      (this.context = F),
      (this.refs = z),
      (this.updater = E || x));
  }
  ((R.prototype.isReactComponent = {}),
    (R.prototype.setState = function (P, F) {
      if (typeof P != 'object' && typeof P != 'function' && P != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, P, F, 'setState');
    }),
    (R.prototype.forceUpdate = function (P) {
      this.updater.enqueueForceUpdate(this, P, 'forceUpdate');
    }));
  function L() {}
  L.prototype = R.prototype;
  function V(P, F, E) {
    ((this.props = P),
      (this.context = F),
      (this.refs = z),
      (this.updater = E || x));
  }
  var A = (V.prototype = new L());
  ((A.constructor = V), O(A, R.prototype), (A.isPureReactComponent = !0));
  var Q = Array.isArray,
    Y = Object.prototype.hasOwnProperty,
    D = { current: null },
    te = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ce(P, F, E) {
    var de,
      we = {},
      fe = null,
      Te = null;
    if (F != null)
      for (de in (F.ref !== void 0 && (Te = F.ref),
      F.key !== void 0 && (fe = '' + F.key),
      F))
        Y.call(F, de) && !te.hasOwnProperty(de) && (we[de] = F[de]);
    var ke = arguments.length - 2;
    if (ke === 1) we.children = E;
    else if (1 < ke) {
      for (var Ie = Array(ke), He = 0; He < ke; He++)
        Ie[He] = arguments[He + 2];
      we.children = Ie;
    }
    if (P && P.defaultProps)
      for (de in ((ke = P.defaultProps), ke))
        we[de] === void 0 && (we[de] = ke[de]);
    return {
      $$typeof: n,
      type: P,
      key: fe,
      ref: Te,
      props: we,
      _owner: D.current,
    };
  }
  function ge(P, F) {
    return {
      $$typeof: n,
      type: P.type,
      key: F,
      ref: P.ref,
      props: P.props,
      _owner: P._owner,
    };
  }
  function ve(P) {
    return typeof P == 'object' && P !== null && P.$$typeof === n;
  }
  function re(P) {
    var F = { '=': '=0', ':': '=2' };
    return (
      '$' +
      P.replace(/[=:]/g, function (E) {
        return F[E];
      })
    );
  }
  var Z = /\/+/g;
  function G(P, F) {
    return typeof P == 'object' && P !== null && P.key != null
      ? re('' + P.key)
      : F.toString(36);
  }
  function X(P, F, E, de, we) {
    var fe = typeof P;
    (fe === 'undefined' || fe === 'boolean') && (P = null);
    var Te = !1;
    if (P === null) Te = !0;
    else
      switch (fe) {
        case 'string':
        case 'number':
          Te = !0;
          break;
        case 'object':
          switch (P.$$typeof) {
            case n:
            case i:
              Te = !0;
          }
      }
    if (Te)
      return (
        (Te = P),
        (we = we(Te)),
        (P = de === '' ? '.' + G(Te, 0) : de),
        Q(we)
          ? ((E = ''),
            P != null && (E = P.replace(Z, '$&/') + '/'),
            X(we, F, E, '', function (He) {
              return He;
            }))
          : we != null &&
            (ve(we) &&
              (we = ge(
                we,
                E +
                  (!we.key || (Te && Te.key === we.key)
                    ? ''
                    : ('' + we.key).replace(Z, '$&/') + '/') +
                  P,
              )),
            F.push(we)),
        1
      );
    if (((Te = 0), (de = de === '' ? '.' : de + ':'), Q(P)))
      for (var ke = 0; ke < P.length; ke++) {
        fe = P[ke];
        var Ie = de + G(fe, ke);
        Te += X(fe, F, E, Ie, we);
      }
    else if (((Ie = k(P)), typeof Ie == 'function'))
      for (P = Ie.call(P), ke = 0; !(fe = P.next()).done; )
        ((fe = fe.value), (Ie = de + G(fe, ke++)), (Te += X(fe, F, E, Ie, we)));
    else if (fe === 'object')
      throw (
        (F = String(P)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (F === '[object Object]'
              ? 'object with keys {' + Object.keys(P).join(', ') + '}'
              : F) +
            '). If you meant to render a collection of children, use an array instead.',
        )
      );
    return Te;
  }
  function ue(P, F, E) {
    if (P == null) return P;
    var de = [],
      we = 0;
    return (
      X(P, de, '', '', function (fe) {
        return F.call(E, fe, we++);
      }),
      de
    );
  }
  function Ce(P) {
    if (P._status === -1) {
      var F = P._result;
      ((F = F()),
        F.then(
          function (E) {
            (P._status === 0 || P._status === -1) &&
              ((P._status = 1), (P._result = E));
          },
          function (E) {
            (P._status === 0 || P._status === -1) &&
              ((P._status = 2), (P._result = E));
          },
        ),
        P._status === -1 && ((P._status = 0), (P._result = F)));
    }
    if (P._status === 1) return P._result.default;
    throw P._result;
  }
  var xe = { current: null },
    $ = { transition: null },
    oe = {
      ReactCurrentDispatcher: xe,
      ReactCurrentBatchConfig: $,
      ReactCurrentOwner: D,
    };
  function w() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (Ee.Children = {
      map: ue,
      forEach: function (P, F, E) {
        ue(
          P,
          function () {
            F.apply(this, arguments);
          },
          E,
        );
      },
      count: function (P) {
        var F = 0;
        return (
          ue(P, function () {
            F++;
          }),
          F
        );
      },
      toArray: function (P) {
        return (
          ue(P, function (F) {
            return F;
          }) || []
        );
      },
      only: function (P) {
        if (!ve(P))
          throw Error(
            'React.Children.only expected to receive a single React element child.',
          );
        return P;
      },
    }),
    (Ee.Component = R),
    (Ee.Fragment = l),
    (Ee.Profiler = a),
    (Ee.PureComponent = V),
    (Ee.StrictMode = o),
    (Ee.Suspense = h),
    (Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oe),
    (Ee.act = w),
    (Ee.cloneElement = function (P, F, E) {
      if (P == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' +
            P +
            '.',
        );
      var de = O({}, P.props),
        we = P.key,
        fe = P.ref,
        Te = P._owner;
      if (F != null) {
        if (
          (F.ref !== void 0 && ((fe = F.ref), (Te = D.current)),
          F.key !== void 0 && (we = '' + F.key),
          P.type && P.type.defaultProps)
        )
          var ke = P.type.defaultProps;
        for (Ie in F)
          Y.call(F, Ie) &&
            !te.hasOwnProperty(Ie) &&
            (de[Ie] = F[Ie] === void 0 && ke !== void 0 ? ke[Ie] : F[Ie]);
      }
      var Ie = arguments.length - 2;
      if (Ie === 1) de.children = E;
      else if (1 < Ie) {
        ke = Array(Ie);
        for (var He = 0; He < Ie; He++) ke[He] = arguments[He + 2];
        de.children = ke;
      }
      return {
        $$typeof: n,
        type: P.type,
        key: we,
        ref: fe,
        props: de,
        _owner: Te,
      };
    }),
    (Ee.createContext = function (P) {
      return (
        (P = {
          $$typeof: f,
          _currentValue: P,
          _currentValue2: P,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (P.Provider = { $$typeof: c, _context: P }),
        (P.Consumer = P)
      );
    }),
    (Ee.createElement = ce),
    (Ee.createFactory = function (P) {
      var F = ce.bind(null, P);
      return ((F.type = P), F);
    }),
    (Ee.createRef = function () {
      return { current: null };
    }),
    (Ee.forwardRef = function (P) {
      return { $$typeof: p, render: P };
    }),
    (Ee.isValidElement = ve),
    (Ee.lazy = function (P) {
      return { $$typeof: g, _payload: { _status: -1, _result: P }, _init: Ce };
    }),
    (Ee.memo = function (P, F) {
      return { $$typeof: m, type: P, compare: F === void 0 ? null : F };
    }),
    (Ee.startTransition = function (P) {
      var F = $.transition;
      $.transition = {};
      try {
        P();
      } finally {
        $.transition = F;
      }
    }),
    (Ee.unstable_act = w),
    (Ee.useCallback = function (P, F) {
      return xe.current.useCallback(P, F);
    }),
    (Ee.useContext = function (P) {
      return xe.current.useContext(P);
    }),
    (Ee.useDebugValue = function () {}),
    (Ee.useDeferredValue = function (P) {
      return xe.current.useDeferredValue(P);
    }),
    (Ee.useEffect = function (P, F) {
      return xe.current.useEffect(P, F);
    }),
    (Ee.useId = function () {
      return xe.current.useId();
    }),
    (Ee.useImperativeHandle = function (P, F, E) {
      return xe.current.useImperativeHandle(P, F, E);
    }),
    (Ee.useInsertionEffect = function (P, F) {
      return xe.current.useInsertionEffect(P, F);
    }),
    (Ee.useLayoutEffect = function (P, F) {
      return xe.current.useLayoutEffect(P, F);
    }),
    (Ee.useMemo = function (P, F) {
      return xe.current.useMemo(P, F);
    }),
    (Ee.useReducer = function (P, F, E) {
      return xe.current.useReducer(P, F, E);
    }),
    (Ee.useRef = function (P) {
      return xe.current.useRef(P);
    }),
    (Ee.useState = function (P) {
      return xe.current.useState(P);
    }),
    (Ee.useSyncExternalStore = function (P, F, E) {
      return xe.current.useSyncExternalStore(P, F, E);
    }),
    (Ee.useTransition = function () {
      return xe.current.useTransition();
    }),
    (Ee.version = '18.3.1'),
    Ee
  );
}
var nd;
function mo() {
  return (nd || ((nd = 1), (da.exports = vg())), da.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var rd;
function xg() {
  if (rd) return Ei;
  rd = 1;
  var n = mo(),
    i = Symbol.for('react.element'),
    l = Symbol.for('react.fragment'),
    o = Object.prototype.hasOwnProperty,
    a = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(p, h, m) {
    var g,
      v = {},
      k = null,
      x = null;
    (m !== void 0 && (k = '' + m),
      h.key !== void 0 && (k = '' + h.key),
      h.ref !== void 0 && (x = h.ref));
    for (g in h) o.call(h, g) && !c.hasOwnProperty(g) && (v[g] = h[g]);
    if (p && p.defaultProps)
      for (g in ((h = p.defaultProps), h)) v[g] === void 0 && (v[g] = h[g]);
    return {
      $$typeof: i,
      type: p,
      key: k,
      ref: x,
      props: v,
      _owner: a.current,
    };
  }
  return ((Ei.Fragment = l), (Ei.jsx = f), (Ei.jsxs = f), Ei);
}
var id;
function wg() {
  return (id || ((id = 1), (fa.exports = xg())), fa.exports);
}
var q = wg(),
  le = mo();
const mp = ho(le),
  kg = yg({ __proto__: null, default: mp }, [le]);
var Yl = {},
  pa = { exports: {} },
  ht = {},
  ha = { exports: {} },
  ma = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ld;
function Sg() {
  return (
    ld ||
      ((ld = 1),
      (function (n) {
        function i($, oe) {
          var w = $.length;
          $.push(oe);
          e: for (; 0 < w; ) {
            var P = (w - 1) >>> 1,
              F = $[P];
            if (0 < a(F, oe)) (($[P] = oe), ($[w] = F), (w = P));
            else break e;
          }
        }
        function l($) {
          return $.length === 0 ? null : $[0];
        }
        function o($) {
          if ($.length === 0) return null;
          var oe = $[0],
            w = $.pop();
          if (w !== oe) {
            $[0] = w;
            e: for (var P = 0, F = $.length, E = F >>> 1; P < E; ) {
              var de = 2 * (P + 1) - 1,
                we = $[de],
                fe = de + 1,
                Te = $[fe];
              if (0 > a(we, w))
                fe < F && 0 > a(Te, we)
                  ? (($[P] = Te), ($[fe] = w), (P = fe))
                  : (($[P] = we), ($[de] = w), (P = de));
              else if (fe < F && 0 > a(Te, w))
                (($[P] = Te), ($[fe] = w), (P = fe));
              else break e;
            }
          }
          return oe;
        }
        function a($, oe) {
          var w = $.sortIndex - oe.sortIndex;
          return w !== 0 ? w : $.id - oe.id;
        }
        if (
          typeof performance == 'object' &&
          typeof performance.now == 'function'
        ) {
          var c = performance;
          n.unstable_now = function () {
            return c.now();
          };
        } else {
          var f = Date,
            p = f.now();
          n.unstable_now = function () {
            return f.now() - p;
          };
        }
        var h = [],
          m = [],
          g = 1,
          v = null,
          k = 3,
          x = !1,
          O = !1,
          z = !1,
          R = typeof setTimeout == 'function' ? setTimeout : null,
          L = typeof clearTimeout == 'function' ? clearTimeout : null,
          V = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function A($) {
          for (var oe = l(m); oe !== null; ) {
            if (oe.callback === null) o(m);
            else if (oe.startTime <= $)
              (o(m), (oe.sortIndex = oe.expirationTime), i(h, oe));
            else break;
            oe = l(m);
          }
        }
        function Q($) {
          if (((z = !1), A($), !O))
            if (l(h) !== null) ((O = !0), Ce(Y));
            else {
              var oe = l(m);
              oe !== null && xe(Q, oe.startTime - $);
            }
        }
        function Y($, oe) {
          ((O = !1), z && ((z = !1), L(ce), (ce = -1)), (x = !0));
          var w = k;
          try {
            for (
              A(oe), v = l(h);
              v !== null && (!(v.expirationTime > oe) || ($ && !re()));

            ) {
              var P = v.callback;
              if (typeof P == 'function') {
                ((v.callback = null), (k = v.priorityLevel));
                var F = P(v.expirationTime <= oe);
                ((oe = n.unstable_now()),
                  typeof F == 'function'
                    ? (v.callback = F)
                    : v === l(h) && o(h),
                  A(oe));
              } else o(h);
              v = l(h);
            }
            if (v !== null) var E = !0;
            else {
              var de = l(m);
              (de !== null && xe(Q, de.startTime - oe), (E = !1));
            }
            return E;
          } finally {
            ((v = null), (k = w), (x = !1));
          }
        }
        var D = !1,
          te = null,
          ce = -1,
          ge = 5,
          ve = -1;
        function re() {
          return !(n.unstable_now() - ve < ge);
        }
        function Z() {
          if (te !== null) {
            var $ = n.unstable_now();
            ve = $;
            var oe = !0;
            try {
              oe = te(!0, $);
            } finally {
              oe ? G() : ((D = !1), (te = null));
            }
          } else D = !1;
        }
        var G;
        if (typeof V == 'function')
          G = function () {
            V(Z);
          };
        else if (typeof MessageChannel < 'u') {
          var X = new MessageChannel(),
            ue = X.port2;
          ((X.port1.onmessage = Z),
            (G = function () {
              ue.postMessage(null);
            }));
        } else
          G = function () {
            R(Z, 0);
          };
        function Ce($) {
          ((te = $), D || ((D = !0), G()));
        }
        function xe($, oe) {
          ce = R(function () {
            $(n.unstable_now());
          }, oe);
        }
        ((n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function ($) {
            $.callback = null;
          }),
          (n.unstable_continueExecution = function () {
            O || x || ((O = !0), Ce(Y));
          }),
          (n.unstable_forceFrameRate = function ($) {
            0 > $ || 125 < $
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (ge = 0 < $ ? Math.floor(1e3 / $) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return k;
          }),
          (n.unstable_getFirstCallbackNode = function () {
            return l(h);
          }),
          (n.unstable_next = function ($) {
            switch (k) {
              case 1:
              case 2:
              case 3:
                var oe = 3;
                break;
              default:
                oe = k;
            }
            var w = k;
            k = oe;
            try {
              return $();
            } finally {
              k = w;
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function ($, oe) {
            switch ($) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                $ = 3;
            }
            var w = k;
            k = $;
            try {
              return oe();
            } finally {
              k = w;
            }
          }),
          (n.unstable_scheduleCallback = function ($, oe, w) {
            var P = n.unstable_now();
            switch (
              (typeof w == 'object' && w !== null
                ? ((w = w.delay),
                  (w = typeof w == 'number' && 0 < w ? P + w : P))
                : (w = P),
              $)
            ) {
              case 1:
                var F = -1;
                break;
              case 2:
                F = 250;
                break;
              case 5:
                F = 1073741823;
                break;
              case 4:
                F = 1e4;
                break;
              default:
                F = 5e3;
            }
            return (
              (F = w + F),
              ($ = {
                id: g++,
                callback: oe,
                priorityLevel: $,
                startTime: w,
                expirationTime: F,
                sortIndex: -1,
              }),
              w > P
                ? (($.sortIndex = w),
                  i(m, $),
                  l(h) === null &&
                    $ === l(m) &&
                    (z ? (L(ce), (ce = -1)) : (z = !0), xe(Q, w - P)))
                : (($.sortIndex = F), i(h, $), O || x || ((O = !0), Ce(Y))),
              $
            );
          }),
          (n.unstable_shouldYield = re),
          (n.unstable_wrapCallback = function ($) {
            var oe = k;
            return function () {
              var w = k;
              k = oe;
              try {
                return $.apply(this, arguments);
              } finally {
                k = w;
              }
            };
          }));
      })(ma)),
    ma
  );
}
var od;
function Eg() {
  return (od || ((od = 1), (ha.exports = Sg())), ha.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ud;
function Cg() {
  if (ud) return ht;
  ud = 1;
  var n = mo(),
    i = Eg();
  function l(e) {
    for (
      var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
        r = 1;
      r < arguments.length;
      r++
    )
      t += '&args[]=' + encodeURIComponent(arguments[r]);
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  var o = new Set(),
    a = {};
  function c(e, t) {
    (f(e, t), f(e + 'Capture', t));
  }
  function f(e, t) {
    for (a[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
  }
  var p = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    h = Object.prototype.hasOwnProperty,
    m =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    g = {},
    v = {};
  function k(e) {
    return h.call(v, e)
      ? !0
      : h.call(g, e)
        ? !1
        : m.test(e)
          ? (v[e] = !0)
          : ((g[e] = !0), !1);
  }
  function x(e, t, r, u) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
      case 'function':
      case 'symbol':
        return !0;
      case 'boolean':
        return u
          ? !1
          : r !== null
            ? !r.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== 'data-' && e !== 'aria-');
      default:
        return !1;
    }
  }
  function O(e, t, r, u) {
    if (t === null || typeof t > 'u' || x(e, t, r, u)) return !0;
    if (u) return !1;
    if (r !== null)
      switch (r.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function z(e, t, r, u, s, d, y) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = u),
      (this.attributeNamespace = s),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = d),
      (this.removeEmptyString = y));
  }
  var R = {};
  ('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      R[e] = new z(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var t = e[0];
      R[t] = new z(t, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
      function (e) {
        R[e] = new z(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      'autoReverse',
      'externalResourcesRequired',
      'focusable',
      'preserveAlpha',
    ].forEach(function (e) {
      R[e] = new z(e, 2, !1, e, null, !1, !1);
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        R[e] = new z(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      R[e] = new z(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      R[e] = new z(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      R[e] = new z(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      R[e] = new z(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var L = /[\-:]([a-z])/g;
  function V(e) {
    return e[1].toUpperCase();
  }
  ('accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var t = e.replace(L, V);
      R[t] = new z(t, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(L, V);
        R[t] = new z(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var t = e.replace(L, V);
      R[t] = new z(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      R[e] = new z(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (R.xlinkHref = new z(
      'xlinkHref',
      1,
      !1,
      'xlink:href',
      'http://www.w3.org/1999/xlink',
      !0,
      !1,
    )),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      R[e] = new z(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function A(e, t, r, u) {
    var s = R.hasOwnProperty(t) ? R[t] : null;
    (s !== null
      ? s.type !== 0
      : u ||
        !(2 < t.length) ||
        (t[0] !== 'o' && t[0] !== 'O') ||
        (t[1] !== 'n' && t[1] !== 'N')) &&
      (O(t, r, s, u) && (r = null),
      u || s === null
        ? k(t) &&
          (r === null ? e.removeAttribute(t) : e.setAttribute(t, '' + r))
        : s.mustUseProperty
          ? (e[s.propertyName] = r === null ? (s.type === 3 ? !1 : '') : r)
          : ((t = s.attributeName),
            (u = s.attributeNamespace),
            r === null
              ? e.removeAttribute(t)
              : ((s = s.type),
                (r = s === 3 || (s === 4 && r === !0) ? '' : '' + r),
                u ? e.setAttributeNS(u, t, r) : e.setAttribute(t, r))));
  }
  var Q = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Y = Symbol.for('react.element'),
    D = Symbol.for('react.portal'),
    te = Symbol.for('react.fragment'),
    ce = Symbol.for('react.strict_mode'),
    ge = Symbol.for('react.profiler'),
    ve = Symbol.for('react.provider'),
    re = Symbol.for('react.context'),
    Z = Symbol.for('react.forward_ref'),
    G = Symbol.for('react.suspense'),
    X = Symbol.for('react.suspense_list'),
    ue = Symbol.for('react.memo'),
    Ce = Symbol.for('react.lazy'),
    xe = Symbol.for('react.offscreen'),
    $ = Symbol.iterator;
  function oe(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = ($ && e[$]) || e['@@iterator']),
        typeof e == 'function' ? e : null);
  }
  var w = Object.assign,
    P;
  function F(e) {
    if (P === void 0)
      try {
        throw Error();
      } catch (r) {
        var t = r.stack.trim().match(/\n( *(at )?)/);
        P = (t && t[1]) || '';
      }
    return (
      `
` +
      P +
      e
    );
  }
  var E = !1;
  function de(e, t) {
    if (!e || E) return '';
    E = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, 'props', {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (I) {
            var u = I;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (I) {
            u = I;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (I) {
          u = I;
        }
        e();
      }
    } catch (I) {
      if (I && u && typeof I.stack == 'string') {
        for (
          var s = I.stack.split(`
`),
            d = u.stack.split(`
`),
            y = s.length - 1,
            S = d.length - 1;
          1 <= y && 0 <= S && s[y] !== d[S];

        )
          S--;
        for (; 1 <= y && 0 <= S; y--, S--)
          if (s[y] !== d[S]) {
            if (y !== 1 || S !== 1)
              do
                if ((y--, S--, 0 > S || s[y] !== d[S])) {
                  var C =
                    `
` + s[y].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      C.includes('<anonymous>') &&
                      (C = C.replace('<anonymous>', e.displayName)),
                    C
                  );
                }
              while (1 <= y && 0 <= S);
            break;
          }
      }
    } finally {
      ((E = !1), (Error.prepareStackTrace = r));
    }
    return (e = e ? e.displayName || e.name : '') ? F(e) : '';
  }
  function we(e) {
    switch (e.tag) {
      case 5:
        return F(e.type);
      case 16:
        return F('Lazy');
      case 13:
        return F('Suspense');
      case 19:
        return F('SuspenseList');
      case 0:
      case 2:
      case 15:
        return ((e = de(e.type, !1)), e);
      case 11:
        return ((e = de(e.type.render, !1)), e);
      case 1:
        return ((e = de(e.type, !0)), e);
      default:
        return '';
    }
  }
  function fe(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case te:
        return 'Fragment';
      case D:
        return 'Portal';
      case ge:
        return 'Profiler';
      case ce:
        return 'StrictMode';
      case G:
        return 'Suspense';
      case X:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case re:
          return (e.displayName || 'Context') + '.Consumer';
        case ve:
          return (e._context.displayName || 'Context') + '.Provider';
        case Z:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case ue:
          return (
            (t = e.displayName || null),
            t !== null ? t : fe(e.type) || 'Memo'
          );
        case Ce:
          ((t = e._payload), (e = e._init));
          try {
            return fe(e(t));
          } catch {}
      }
    return null;
  }
  function Te(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return 'Cache';
      case 9:
        return (t.displayName || 'Context') + '.Consumer';
      case 10:
        return (t._context.displayName || 'Context') + '.Provider';
      case 18:
        return 'DehydratedFragment';
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ''),
          t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
        );
      case 7:
        return 'Fragment';
      case 5:
        return t;
      case 4:
        return 'Portal';
      case 3:
        return 'Root';
      case 6:
        return 'Text';
      case 16:
        return fe(t);
      case 8:
        return t === ce ? 'StrictMode' : 'Mode';
      case 22:
        return 'Offscreen';
      case 12:
        return 'Profiler';
      case 21:
        return 'Scope';
      case 13:
        return 'Suspense';
      case 19:
        return 'SuspenseList';
      case 25:
        return 'TracingMarker';
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == 'function') return t.displayName || t.name || null;
        if (typeof t == 'string') return t;
    }
    return null;
  }
  function ke(e) {
    switch (typeof e) {
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function Ie(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === 'input' &&
      (t === 'checkbox' || t === 'radio')
    );
  }
  function He(e) {
    var t = Ie(e) ? 'checked' : 'value',
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      u = '' + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof r < 'u' &&
      typeof r.get == 'function' &&
      typeof r.set == 'function'
    ) {
      var s = r.get,
        d = r.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (y) {
            ((u = '' + y), d.call(this, y));
          },
        }),
        Object.defineProperty(e, t, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return u;
          },
          setValue: function (y) {
            u = '' + y;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Zt(e) {
    e._valueTracker || (e._valueTracker = He(e));
  }
  function ji(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(),
      u = '';
    return (
      e && (u = Ie(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = u),
      e !== r ? (t.setValue(e), !0) : !1
    );
  }
  function tr(e) {
    if (
      ((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Fr(e, t) {
    var r = t.checked;
    return w({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked,
    });
  }
  function jr(e, t) {
    var r = t.defaultValue == null ? '' : t.defaultValue,
      u = t.checked != null ? t.checked : t.defaultChecked;
    ((r = ke(t.value != null ? t.value : r)),
      (e._wrapperState = {
        initialChecked: u,
        initialValue: r,
        controlled:
          t.type === 'checkbox' || t.type === 'radio'
            ? t.checked != null
            : t.value != null,
      }));
  }
  function Br(e, t) {
    ((t = t.checked), t != null && A(e, 'checked', t, !1));
  }
  function nr(e, t) {
    Br(e, t);
    var r = ke(t.value),
      u = t.type;
    if (r != null)
      u === 'number'
        ? ((r === 0 && e.value === '') || e.value != r) && (e.value = '' + r)
        : e.value !== '' + r && (e.value = '' + r);
    else if (u === 'submit' || u === 'reset') {
      e.removeAttribute('value');
      return;
    }
    (t.hasOwnProperty('value')
      ? rr(e, t.type, r)
      : t.hasOwnProperty('defaultValue') && rr(e, t.type, ke(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked));
  }
  function Bi(e, t, r) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
      var u = t.type;
      if (
        !(
          (u !== 'submit' && u !== 'reset') ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      ((t = '' + e._wrapperState.initialValue),
        r || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((r = e.name),
      r !== '' && (e.name = ''),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      r !== '' && (e.name = r));
  }
  function rr(e, t, r) {
    (t !== 'number' || tr(e.ownerDocument) !== e) &&
      (r == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + r && (e.defaultValue = '' + r));
  }
  var dn = Array.isArray;
  function pn(e, t, r, u) {
    if (((e = e.options), t)) {
      t = {};
      for (var s = 0; s < r.length; s++) t['$' + r[s]] = !0;
      for (r = 0; r < e.length; r++)
        ((s = t.hasOwnProperty('$' + e[r].value)),
          e[r].selected !== s && (e[r].selected = s),
          s && u && (e[r].defaultSelected = !0));
    } else {
      for (r = '' + ke(r), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === r) {
          ((e[s].selected = !0), u && (e[s].defaultSelected = !0));
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ur(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(l(91));
    return w({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function Ui(e, t) {
    var r = t.value;
    if (r == null) {
      if (((r = t.children), (t = t.defaultValue), r != null)) {
        if (t != null) throw Error(l(92));
        if (dn(r)) {
          if (1 < r.length) throw Error(l(93));
          r = r[0];
        }
        t = r;
      }
      (t == null && (t = ''), (r = t));
    }
    e._wrapperState = { initialValue: ke(r) };
  }
  function bi(e, t) {
    var r = ke(t.value),
      u = ke(t.defaultValue);
    (r != null &&
      ((r = '' + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      u != null && (e.defaultValue = '' + u));
  }
  function Vi(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== '' &&
      t !== null &&
      (e.value = t);
  }
  function M(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function W(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? M(t)
      : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var pe,
    Se = (function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (t, r, u, s) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, r, u, s);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
        e.innerHTML = t;
      else {
        for (
          pe = pe || document.createElement('div'),
            pe.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
            t = pe.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function _e(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Ge = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    en = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(Ge).forEach(function (e) {
    en.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ge[t] = Ge[e]));
    });
  });
  function Nt(e, t, r) {
    return t == null || typeof t == 'boolean' || t === ''
      ? ''
      : r || typeof t != 'number' || t === 0 || (Ge.hasOwnProperty(e) && Ge[e])
        ? ('' + t).trim()
        : t + 'px';
  }
  function hn(e, t) {
    e = e.style;
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var u = r.indexOf('--') === 0,
          s = Nt(r, t[r], u);
        (r === 'float' && (r = 'cssFloat'),
          u ? e.setProperty(r, s) : (e[r] = s));
      }
  }
  var Fn = w(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function Je(e, t) {
    if (t) {
      if (Fn[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(l(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(l(60));
        if (
          typeof t.dangerouslySetInnerHTML != 'object' ||
          !('__html' in t.dangerouslySetInnerHTML)
        )
          throw Error(l(61));
      }
      if (t.style != null && typeof t.style != 'object') throw Error(l(62));
    }
  }
  function $t(e, t) {
    if (e.indexOf('-') === -1) return typeof t.is == 'string';
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var xt = null;
  function Po(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var To = null,
    ir = null,
    lr = null;
  function ys(e) {
    if ((e = ai(e))) {
      if (typeof To != 'function') throw Error(l(280));
      var t = e.stateNode;
      t && ((t = fl(t)), To(e.stateNode, e.type, t));
    }
  }
  function vs(e) {
    ir ? (lr ? lr.push(e) : (lr = [e])) : (ir = e);
  }
  function xs() {
    if (ir) {
      var e = ir,
        t = lr;
      if (((lr = ir = null), ys(e), t)) for (e = 0; e < t.length; e++) ys(t[e]);
    }
  }
  function ws(e, t) {
    return e(t);
  }
  function ks() {}
  var No = !1;
  function Ss(e, t, r) {
    if (No) return e(t, r);
    No = !0;
    try {
      return ws(e, t, r);
    } finally {
      ((No = !1), (ir !== null || lr !== null) && (ks(), xs()));
    }
  }
  function br(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var u = fl(r);
    if (u === null) return null;
    r = u[t];
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ((u = !u.disabled) ||
          ((e = e.type),
          (u = !(
            e === 'button' ||
            e === 'input' ||
            e === 'select' ||
            e === 'textarea'
          ))),
          (e = !u));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != 'function') throw Error(l(231, t, typeof r));
    return r;
  }
  var Io = !1;
  if (p)
    try {
      var Vr = {};
      (Object.defineProperty(Vr, 'passive', {
        get: function () {
          Io = !0;
        },
      }),
        window.addEventListener('test', Vr, Vr),
        window.removeEventListener('test', Vr, Vr));
    } catch {
      Io = !1;
    }
  function Eh(e, t, r, u, s, d, y, S, C) {
    var I = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, I);
    } catch (B) {
      this.onError(B);
    }
  }
  var Hr = !1,
    Hi = null,
    $i = !1,
    zo = null,
    Ch = {
      onError: function (e) {
        ((Hr = !0), (Hi = e));
      },
    };
  function _h(e, t, r, u, s, d, y, S, C) {
    ((Hr = !1), (Hi = null), Eh.apply(Ch, arguments));
  }
  function Ph(e, t, r, u, s, d, y, S, C) {
    if ((_h.apply(this, arguments), Hr)) {
      if (Hr) {
        var I = Hi;
        ((Hr = !1), (Hi = null));
      } else throw Error(l(198));
      $i || (($i = !0), (zo = I));
    }
  }
  function jn(e) {
    var t = e,
      r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (r = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function Es(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Cs(e) {
    if (jn(e) !== e) throw Error(l(188));
  }
  function Th(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = jn(e)), t === null)) throw Error(l(188));
      return t !== e ? null : e;
    }
    for (var r = e, u = t; ; ) {
      var s = r.return;
      if (s === null) break;
      var d = s.alternate;
      if (d === null) {
        if (((u = s.return), u !== null)) {
          r = u;
          continue;
        }
        break;
      }
      if (s.child === d.child) {
        for (d = s.child; d; ) {
          if (d === r) return (Cs(s), e);
          if (d === u) return (Cs(s), t);
          d = d.sibling;
        }
        throw Error(l(188));
      }
      if (r.return !== u.return) ((r = s), (u = d));
      else {
        for (var y = !1, S = s.child; S; ) {
          if (S === r) {
            ((y = !0), (r = s), (u = d));
            break;
          }
          if (S === u) {
            ((y = !0), (u = s), (r = d));
            break;
          }
          S = S.sibling;
        }
        if (!y) {
          for (S = d.child; S; ) {
            if (S === r) {
              ((y = !0), (r = d), (u = s));
              break;
            }
            if (S === u) {
              ((y = !0), (u = d), (r = s));
              break;
            }
            S = S.sibling;
          }
          if (!y) throw Error(l(189));
        }
      }
      if (r.alternate !== u) throw Error(l(190));
    }
    if (r.tag !== 3) throw Error(l(188));
    return r.stateNode.current === r ? e : t;
  }
  function _s(e) {
    return ((e = Th(e)), e !== null ? Ps(e) : null);
  }
  function Ps(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Ps(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ts = i.unstable_scheduleCallback,
    Ns = i.unstable_cancelCallback,
    Nh = i.unstable_shouldYield,
    Ih = i.unstable_requestPaint,
    be = i.unstable_now,
    zh = i.unstable_getCurrentPriorityLevel,
    Ro = i.unstable_ImmediatePriority,
    Is = i.unstable_UserBlockingPriority,
    Wi = i.unstable_NormalPriority,
    Rh = i.unstable_LowPriority,
    zs = i.unstable_IdlePriority,
    Qi = null,
    Wt = null;
  function Lh(e) {
    if (Wt && typeof Wt.onCommitFiberRoot == 'function')
      try {
        Wt.onCommitFiberRoot(Qi, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var At = Math.clz32 ? Math.clz32 : Mh,
    Oh = Math.log,
    Dh = Math.LN2;
  function Mh(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Oh(e) / Dh) | 0)) | 0);
  }
  var qi = 64,
    Ki = 4194304;
  function $r(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Xi(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var u = 0,
      s = e.suspendedLanes,
      d = e.pingedLanes,
      y = r & 268435455;
    if (y !== 0) {
      var S = y & ~s;
      S !== 0 ? (u = $r(S)) : ((d &= y), d !== 0 && (u = $r(d)));
    } else ((y = r & ~s), y !== 0 ? (u = $r(y)) : d !== 0 && (u = $r(d)));
    if (u === 0) return 0;
    if (
      t !== 0 &&
      t !== u &&
      (t & s) === 0 &&
      ((s = u & -u), (d = t & -t), s >= d || (s === 16 && (d & 4194240) !== 0))
    )
      return t;
    if (((u & 4) !== 0 && (u |= r & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= u; 0 < t; )
        ((r = 31 - At(t)), (s = 1 << r), (u |= e[r]), (t &= ~s));
    return u;
  }
  function Ah(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Fh(e, t) {
    for (
      var r = e.suspendedLanes,
        u = e.pingedLanes,
        s = e.expirationTimes,
        d = e.pendingLanes;
      0 < d;

    ) {
      var y = 31 - At(d),
        S = 1 << y,
        C = s[y];
      (C === -1
        ? ((S & r) === 0 || (S & u) !== 0) && (s[y] = Ah(S, t))
        : C <= t && (e.expiredLanes |= S),
        (d &= ~S));
    }
  }
  function Lo(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Rs() {
    var e = qi;
    return ((qi <<= 1), (qi & 4194240) === 0 && (qi = 64), e);
  }
  function Oo(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function Wr(e, t, r) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - At(t)),
      (e[t] = r));
  }
  function jh(e, t) {
    var r = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var u = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
      var s = 31 - At(r),
        d = 1 << s;
      ((t[s] = 0), (u[s] = -1), (e[s] = -1), (r &= ~d));
    }
  }
  function Do(e, t) {
    var r = (e.entangledLanes |= t);
    for (e = e.entanglements; r; ) {
      var u = 31 - At(r),
        s = 1 << u;
      ((s & t) | (e[u] & t) && (e[u] |= t), (r &= ~s));
    }
  }
  var Re = 0;
  function Ls(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var Os,
    Mo,
    Ds,
    Ms,
    As,
    Ao = !1,
    Yi = [],
    mn = null,
    gn = null,
    yn = null,
    Qr = new Map(),
    qr = new Map(),
    vn = [],
    Bh =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' ',
      );
  function Fs(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        mn = null;
        break;
      case 'dragenter':
      case 'dragleave':
        gn = null;
        break;
      case 'mouseover':
      case 'mouseout':
        yn = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Qr.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        qr.delete(t.pointerId);
    }
  }
  function Kr(e, t, r, u, s, d) {
    return e === null || e.nativeEvent !== d
      ? ((e = {
          blockedOn: t,
          domEventName: r,
          eventSystemFlags: u,
          nativeEvent: d,
          targetContainers: [s],
        }),
        t !== null && ((t = ai(t)), t !== null && Mo(t)),
        e)
      : ((e.eventSystemFlags |= u),
        (t = e.targetContainers),
        s !== null && t.indexOf(s) === -1 && t.push(s),
        e);
  }
  function Uh(e, t, r, u, s) {
    switch (t) {
      case 'focusin':
        return ((mn = Kr(mn, e, t, r, u, s)), !0);
      case 'dragenter':
        return ((gn = Kr(gn, e, t, r, u, s)), !0);
      case 'mouseover':
        return ((yn = Kr(yn, e, t, r, u, s)), !0);
      case 'pointerover':
        var d = s.pointerId;
        return (Qr.set(d, Kr(Qr.get(d) || null, e, t, r, u, s)), !0);
      case 'gotpointercapture':
        return (
          (d = s.pointerId),
          qr.set(d, Kr(qr.get(d) || null, e, t, r, u, s)),
          !0
        );
    }
    return !1;
  }
  function js(e) {
    var t = Bn(e.target);
    if (t !== null) {
      var r = jn(t);
      if (r !== null) {
        if (((t = r.tag), t === 13)) {
          if (((t = Es(r)), t !== null)) {
            ((e.blockedOn = t),
              As(e.priority, function () {
                Ds(r);
              }));
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Gi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = jo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var u = new r.constructor(r.type, r);
        ((xt = u), r.target.dispatchEvent(u), (xt = null));
      } else return ((t = ai(r)), t !== null && Mo(t), (e.blockedOn = r), !1);
      t.shift();
    }
    return !0;
  }
  function Bs(e, t, r) {
    Gi(e) && r.delete(t);
  }
  function bh() {
    ((Ao = !1),
      mn !== null && Gi(mn) && (mn = null),
      gn !== null && Gi(gn) && (gn = null),
      yn !== null && Gi(yn) && (yn = null),
      Qr.forEach(Bs),
      qr.forEach(Bs));
  }
  function Xr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Ao ||
        ((Ao = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, bh)));
  }
  function Yr(e) {
    function t(s) {
      return Xr(s, e);
    }
    if (0 < Yi.length) {
      Xr(Yi[0], e);
      for (var r = 1; r < Yi.length; r++) {
        var u = Yi[r];
        u.blockedOn === e && (u.blockedOn = null);
      }
    }
    for (
      mn !== null && Xr(mn, e),
        gn !== null && Xr(gn, e),
        yn !== null && Xr(yn, e),
        Qr.forEach(t),
        qr.forEach(t),
        r = 0;
      r < vn.length;
      r++
    )
      ((u = vn[r]), u.blockedOn === e && (u.blockedOn = null));
    for (; 0 < vn.length && ((r = vn[0]), r.blockedOn === null); )
      (js(r), r.blockedOn === null && vn.shift());
  }
  var or = Q.ReactCurrentBatchConfig,
    Ji = !0;
  function Vh(e, t, r, u) {
    var s = Re,
      d = or.transition;
    or.transition = null;
    try {
      ((Re = 1), Fo(e, t, r, u));
    } finally {
      ((Re = s), (or.transition = d));
    }
  }
  function Hh(e, t, r, u) {
    var s = Re,
      d = or.transition;
    or.transition = null;
    try {
      ((Re = 4), Fo(e, t, r, u));
    } finally {
      ((Re = s), (or.transition = d));
    }
  }
  function Fo(e, t, r, u) {
    if (Ji) {
      var s = jo(e, t, r, u);
      if (s === null) (tu(e, t, u, Zi, r), Fs(e, u));
      else if (Uh(s, e, t, r, u)) u.stopPropagation();
      else if ((Fs(e, u), t & 4 && -1 < Bh.indexOf(e))) {
        for (; s !== null; ) {
          var d = ai(s);
          if (
            (d !== null && Os(d),
            (d = jo(e, t, r, u)),
            d === null && tu(e, t, u, Zi, r),
            d === s)
          )
            break;
          s = d;
        }
        s !== null && u.stopPropagation();
      } else tu(e, t, u, null, r);
    }
  }
  var Zi = null;
  function jo(e, t, r, u) {
    if (((Zi = null), (e = Po(u)), (e = Bn(e)), e !== null))
      if (((t = jn(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
        if (((e = Es(t)), e !== null)) return e;
        e = null;
      } else if (r === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Zi = e), null);
  }
  function Us(e) {
    switch (e) {
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 1;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'toggle':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 4;
      case 'message':
        switch (zh()) {
          case Ro:
            return 1;
          case Is:
            return 4;
          case Wi:
          case Rh:
            return 16;
          case zs:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var xn = null,
    Bo = null,
    el = null;
  function bs() {
    if (el) return el;
    var e,
      t = Bo,
      r = t.length,
      u,
      s = 'value' in xn ? xn.value : xn.textContent,
      d = s.length;
    for (e = 0; e < r && t[e] === s[e]; e++);
    var y = r - e;
    for (u = 1; u <= y && t[r - u] === s[d - u]; u++);
    return (el = s.slice(e, 1 < u ? 1 - u : void 0));
  }
  function tl(e) {
    var t = e.keyCode;
    return (
      'charCode' in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function nl() {
    return !0;
  }
  function Vs() {
    return !1;
  }
  function wt(e) {
    function t(r, u, s, d, y) {
      ((this._reactName = r),
        (this._targetInst = s),
        (this.type = u),
        (this.nativeEvent = d),
        (this.target = y),
        (this.currentTarget = null));
      for (var S in e)
        e.hasOwnProperty(S) && ((r = e[S]), (this[S] = r ? r(d) : d[S]));
      return (
        (this.isDefaultPrevented = (
          d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1
        )
          ? nl
          : Vs),
        (this.isPropagationStopped = Vs),
        this
      );
    }
    return (
      w(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != 'unknown' && (r.returnValue = !1),
            (this.isDefaultPrevented = nl));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != 'unknown' && (r.cancelBubble = !0),
            (this.isPropagationStopped = nl));
        },
        persist: function () {},
        isPersistent: nl,
      }),
      t
    );
  }
  var ur = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Uo = wt(ur),
    Gr = w({}, ur, { view: 0, detail: 0 }),
    $h = wt(Gr),
    bo,
    Vo,
    Jr,
    rl = w({}, Gr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: $o,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== Jr &&
              (Jr && e.type === 'mousemove'
                ? ((bo = e.screenX - Jr.screenX), (Vo = e.screenY - Jr.screenY))
                : (Vo = bo = 0),
              (Jr = e)),
            bo);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Vo;
      },
    }),
    Hs = wt(rl),
    Wh = w({}, rl, { dataTransfer: 0 }),
    Qh = wt(Wh),
    qh = w({}, Gr, { relatedTarget: 0 }),
    Ho = wt(qh),
    Kh = w({}, ur, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Xh = wt(Kh),
    Yh = w({}, ur, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Gh = wt(Yh),
    Jh = w({}, ur, { data: 0 }),
    $s = wt(Jh),
    Zh = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    em = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    tm = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function nm(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = tm[e])
        ? !!t[e]
        : !1;
  }
  function $o() {
    return nm;
  }
  var rm = w({}, Gr, {
      key: function (e) {
        if (e.key) {
          var t = Zh[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = tl(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? em[e.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: $o,
      charCode: function (e) {
        return e.type === 'keypress' ? tl(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? tl(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    im = wt(rm),
    lm = w({}, rl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Ws = wt(lm),
    om = w({}, Gr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: $o,
    }),
    um = wt(om),
    am = w({}, ur, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    sm = wt(am),
    cm = w({}, rl, {
      deltaX: function (e) {
        return 'deltaX' in e
          ? e.deltaX
          : 'wheelDeltaX' in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    fm = wt(cm),
    dm = [9, 13, 27, 32],
    Wo = p && 'CompositionEvent' in window,
    Zr = null;
  p && 'documentMode' in document && (Zr = document.documentMode);
  var pm = p && 'TextEvent' in window && !Zr,
    Qs = p && (!Wo || (Zr && 8 < Zr && 11 >= Zr)),
    qs = ' ',
    Ks = !1;
  function Xs(e, t) {
    switch (e) {
      case 'keyup':
        return dm.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function Ys(e) {
    return (
      (e = e.detail),
      typeof e == 'object' && 'data' in e ? e.data : null
    );
  }
  var ar = !1;
  function hm(e, t) {
    switch (e) {
      case 'compositionend':
        return Ys(t);
      case 'keypress':
        return t.which !== 32 ? null : ((Ks = !0), qs);
      case 'textInput':
        return ((e = t.data), e === qs && Ks ? null : e);
      default:
        return null;
    }
  }
  function mm(e, t) {
    if (ar)
      return e === 'compositionend' || (!Wo && Xs(e, t))
        ? ((e = bs()), (el = Bo = xn = null), (ar = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return Qs && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var gm = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Gs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!gm[e.type] : t === 'textarea';
  }
  function Js(e, t, r, u) {
    (vs(u),
      (t = al(t, 'onChange')),
      0 < t.length &&
        ((r = new Uo('onChange', 'change', null, r, u)),
        e.push({ event: r, listeners: t })));
  }
  var ei = null,
    ti = null;
  function ym(e) {
    gc(e, 0);
  }
  function il(e) {
    var t = pr(e);
    if (ji(t)) return e;
  }
  function vm(e, t) {
    if (e === 'change') return t;
  }
  var Zs = !1;
  if (p) {
    var Qo;
    if (p) {
      var qo = 'oninput' in document;
      if (!qo) {
        var ec = document.createElement('div');
        (ec.setAttribute('oninput', 'return;'),
          (qo = typeof ec.oninput == 'function'));
      }
      Qo = qo;
    } else Qo = !1;
    Zs = Qo && (!document.documentMode || 9 < document.documentMode);
  }
  function tc() {
    ei && (ei.detachEvent('onpropertychange', nc), (ti = ei = null));
  }
  function nc(e) {
    if (e.propertyName === 'value' && il(ti)) {
      var t = [];
      (Js(t, ti, e, Po(e)), Ss(ym, t));
    }
  }
  function xm(e, t, r) {
    e === 'focusin'
      ? (tc(), (ei = t), (ti = r), ei.attachEvent('onpropertychange', nc))
      : e === 'focusout' && tc();
  }
  function wm(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return il(ti);
  }
  function km(e, t) {
    if (e === 'click') return il(t);
  }
  function Sm(e, t) {
    if (e === 'input' || e === 'change') return il(t);
  }
  function Em(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Ft = typeof Object.is == 'function' ? Object.is : Em;
  function ni(e, t) {
    if (Ft(e, t)) return !0;
    if (
      typeof e != 'object' ||
      e === null ||
      typeof t != 'object' ||
      t === null
    )
      return !1;
    var r = Object.keys(e),
      u = Object.keys(t);
    if (r.length !== u.length) return !1;
    for (u = 0; u < r.length; u++) {
      var s = r[u];
      if (!h.call(t, s) || !Ft(e[s], t[s])) return !1;
    }
    return !0;
  }
  function rc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ic(e, t) {
    var r = rc(e);
    e = 0;
    for (var u; r; ) {
      if (r.nodeType === 3) {
        if (((u = e + r.textContent.length), e <= t && u >= t))
          return { node: r, offset: t - e };
        e = u;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = rc(r);
    }
  }
  function lc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? lc(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function oc() {
    for (var e = window, t = tr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == 'string';
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = tr(e.document);
    }
    return t;
  }
  function Ko(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  function Cm(e) {
    var t = oc(),
      r = e.focusedElem,
      u = e.selectionRange;
    if (
      t !== r &&
      r &&
      r.ownerDocument &&
      lc(r.ownerDocument.documentElement, r)
    ) {
      if (u !== null && Ko(r)) {
        if (
          ((t = u.start),
          (e = u.end),
          e === void 0 && (e = t),
          'selectionStart' in r)
        )
          ((r.selectionStart = t),
            (r.selectionEnd = Math.min(e, r.value.length)));
        else if (
          ((e = ((t = r.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var s = r.textContent.length,
            d = Math.min(u.start, s);
          ((u = u.end === void 0 ? d : Math.min(u.end, s)),
            !e.extend && d > u && ((s = u), (u = d), (d = s)),
            (s = ic(r, d)));
          var y = ic(r, u);
          s &&
            y &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== s.node ||
              e.anchorOffset !== s.offset ||
              e.focusNode !== y.node ||
              e.focusOffset !== y.offset) &&
            ((t = t.createRange()),
            t.setStart(s.node, s.offset),
            e.removeAllRanges(),
            d > u
              ? (e.addRange(t), e.extend(y.node, y.offset))
              : (t.setEnd(y.node, y.offset), e.addRange(t)));
        }
      }
      for (t = [], e = r; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof r.focus == 'function' && r.focus(), r = 0; r < t.length; r++)
        ((e = t[r]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top));
    }
  }
  var _m = p && 'documentMode' in document && 11 >= document.documentMode,
    sr = null,
    Xo = null,
    ri = null,
    Yo = !1;
  function uc(e, t, r) {
    var u =
      r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    Yo ||
      sr == null ||
      sr !== tr(u) ||
      ((u = sr),
      'selectionStart' in u && Ko(u)
        ? (u = { start: u.selectionStart, end: u.selectionEnd })
        : ((u = (
            (u.ownerDocument && u.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset,
          })),
      (ri && ni(ri, u)) ||
        ((ri = u),
        (u = al(Xo, 'onSelect')),
        0 < u.length &&
          ((t = new Uo('onSelect', 'select', null, t, r)),
          e.push({ event: t, listeners: u }),
          (t.target = sr))));
  }
  function ll(e, t) {
    var r = {};
    return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r['Webkit' + e] = 'webkit' + t),
      (r['Moz' + e] = 'moz' + t),
      r
    );
  }
  var cr = {
      animationend: ll('Animation', 'AnimationEnd'),
      animationiteration: ll('Animation', 'AnimationIteration'),
      animationstart: ll('Animation', 'AnimationStart'),
      transitionend: ll('Transition', 'TransitionEnd'),
    },
    Go = {},
    ac = {};
  p &&
    ((ac = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete cr.animationend.animation,
      delete cr.animationiteration.animation,
      delete cr.animationstart.animation),
    'TransitionEvent' in window || delete cr.transitionend.transition);
  function ol(e) {
    if (Go[e]) return Go[e];
    if (!cr[e]) return e;
    var t = cr[e],
      r;
    for (r in t) if (t.hasOwnProperty(r) && r in ac) return (Go[e] = t[r]);
    return e;
  }
  var sc = ol('animationend'),
    cc = ol('animationiteration'),
    fc = ol('animationstart'),
    dc = ol('transitionend'),
    pc = new Map(),
    hc =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  function wn(e, t) {
    (pc.set(e, t), c(t, [e]));
  }
  for (var Jo = 0; Jo < hc.length; Jo++) {
    var Zo = hc[Jo],
      Pm = Zo.toLowerCase(),
      Tm = Zo[0].toUpperCase() + Zo.slice(1);
    wn(Pm, 'on' + Tm);
  }
  (wn(sc, 'onAnimationEnd'),
    wn(cc, 'onAnimationIteration'),
    wn(fc, 'onAnimationStart'),
    wn('dblclick', 'onDoubleClick'),
    wn('focusin', 'onFocus'),
    wn('focusout', 'onBlur'),
    wn(dc, 'onTransitionEnd'),
    f('onMouseEnter', ['mouseout', 'mouseover']),
    f('onMouseLeave', ['mouseout', 'mouseover']),
    f('onPointerEnter', ['pointerout', 'pointerover']),
    f('onPointerLeave', ['pointerout', 'pointerover']),
    c(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' ',
      ),
    ),
    c(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
      ),
    ),
    c('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    c(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' '),
    ),
    c(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
    ),
    c(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
    ));
  var ii =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    Nm = new Set(
      'cancel close invalid load scroll toggle'.split(' ').concat(ii),
    );
  function mc(e, t, r) {
    var u = e.type || 'unknown-event';
    ((e.currentTarget = r), Ph(u, t, void 0, e), (e.currentTarget = null));
  }
  function gc(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var u = e[r],
        s = u.event;
      u = u.listeners;
      e: {
        var d = void 0;
        if (t)
          for (var y = u.length - 1; 0 <= y; y--) {
            var S = u[y],
              C = S.instance,
              I = S.currentTarget;
            if (((S = S.listener), C !== d && s.isPropagationStopped()))
              break e;
            (mc(s, S, I), (d = C));
          }
        else
          for (y = 0; y < u.length; y++) {
            if (
              ((S = u[y]),
              (C = S.instance),
              (I = S.currentTarget),
              (S = S.listener),
              C !== d && s.isPropagationStopped())
            )
              break e;
            (mc(s, S, I), (d = C));
          }
      }
    }
    if ($i) throw ((e = zo), ($i = !1), (zo = null), e);
  }
  function Me(e, t) {
    var r = t[uu];
    r === void 0 && (r = t[uu] = new Set());
    var u = e + '__bubble';
    r.has(u) || (yc(t, e, 2, !1), r.add(u));
  }
  function eu(e, t, r) {
    var u = 0;
    (t && (u |= 4), yc(r, e, u, t));
  }
  var ul = '_reactListening' + Math.random().toString(36).slice(2);
  function li(e) {
    if (!e[ul]) {
      ((e[ul] = !0),
        o.forEach(function (r) {
          r !== 'selectionchange' && (Nm.has(r) || eu(r, !1, e), eu(r, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ul] || ((t[ul] = !0), eu('selectionchange', !1, t));
    }
  }
  function yc(e, t, r, u) {
    switch (Us(t)) {
      case 1:
        var s = Vh;
        break;
      case 4:
        s = Hh;
        break;
      default:
        s = Fo;
    }
    ((r = s.bind(null, t, r, e)),
      (s = void 0),
      !Io ||
        (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
        (s = !0),
      u
        ? s !== void 0
          ? e.addEventListener(t, r, { capture: !0, passive: s })
          : e.addEventListener(t, r, !0)
        : s !== void 0
          ? e.addEventListener(t, r, { passive: s })
          : e.addEventListener(t, r, !1));
  }
  function tu(e, t, r, u, s) {
    var d = u;
    if ((t & 1) === 0 && (t & 2) === 0 && u !== null)
      e: for (;;) {
        if (u === null) return;
        var y = u.tag;
        if (y === 3 || y === 4) {
          var S = u.stateNode.containerInfo;
          if (S === s || (S.nodeType === 8 && S.parentNode === s)) break;
          if (y === 4)
            for (y = u.return; y !== null; ) {
              var C = y.tag;
              if (
                (C === 3 || C === 4) &&
                ((C = y.stateNode.containerInfo),
                C === s || (C.nodeType === 8 && C.parentNode === s))
              )
                return;
              y = y.return;
            }
          for (; S !== null; ) {
            if (((y = Bn(S)), y === null)) return;
            if (((C = y.tag), C === 5 || C === 6)) {
              u = d = y;
              continue e;
            }
            S = S.parentNode;
          }
        }
        u = u.return;
      }
    Ss(function () {
      var I = d,
        B = Po(r),
        U = [];
      e: {
        var j = pc.get(e);
        if (j !== void 0) {
          var K = Uo,
            ee = e;
          switch (e) {
            case 'keypress':
              if (tl(r) === 0) break e;
            case 'keydown':
            case 'keyup':
              K = im;
              break;
            case 'focusin':
              ((ee = 'focus'), (K = Ho));
              break;
            case 'focusout':
              ((ee = 'blur'), (K = Ho));
              break;
            case 'beforeblur':
            case 'afterblur':
              K = Ho;
              break;
            case 'click':
              if (r.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              K = Hs;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              K = Qh;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              K = um;
              break;
            case sc:
            case cc:
            case fc:
              K = Xh;
              break;
            case dc:
              K = sm;
              break;
            case 'scroll':
              K = $h;
              break;
            case 'wheel':
              K = fm;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              K = Gh;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              K = Ws;
          }
          var ne = (t & 4) !== 0,
            Ve = !ne && e === 'scroll',
            T = ne ? (j !== null ? j + 'Capture' : null) : j;
          ne = [];
          for (var _ = I, N; _ !== null; ) {
            N = _;
            var H = N.stateNode;
            if (
              (N.tag === 5 &&
                H !== null &&
                ((N = H),
                T !== null &&
                  ((H = br(_, T)), H != null && ne.push(oi(_, H, N)))),
              Ve)
            )
              break;
            _ = _.return;
          }
          0 < ne.length &&
            ((j = new K(j, ee, null, r, B)),
            U.push({ event: j, listeners: ne }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((j = e === 'mouseover' || e === 'pointerover'),
            (K = e === 'mouseout' || e === 'pointerout'),
            j &&
              r !== xt &&
              (ee = r.relatedTarget || r.fromElement) &&
              (Bn(ee) || ee[tn]))
          )
            break e;
          if (
            (K || j) &&
            ((j =
              B.window === B
                ? B
                : (j = B.ownerDocument)
                  ? j.defaultView || j.parentWindow
                  : window),
            K
              ? ((ee = r.relatedTarget || r.toElement),
                (K = I),
                (ee = ee ? Bn(ee) : null),
                ee !== null &&
                  ((Ve = jn(ee)),
                  ee !== Ve || (ee.tag !== 5 && ee.tag !== 6)) &&
                  (ee = null))
              : ((K = null), (ee = I)),
            K !== ee)
          ) {
            if (
              ((ne = Hs),
              (H = 'onMouseLeave'),
              (T = 'onMouseEnter'),
              (_ = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((ne = Ws),
                (H = 'onPointerLeave'),
                (T = 'onPointerEnter'),
                (_ = 'pointer')),
              (Ve = K == null ? j : pr(K)),
              (N = ee == null ? j : pr(ee)),
              (j = new ne(H, _ + 'leave', K, r, B)),
              (j.target = Ve),
              (j.relatedTarget = N),
              (H = null),
              Bn(B) === I &&
                ((ne = new ne(T, _ + 'enter', ee, r, B)),
                (ne.target = N),
                (ne.relatedTarget = Ve),
                (H = ne)),
              (Ve = H),
              K && ee)
            )
              t: {
                for (ne = K, T = ee, _ = 0, N = ne; N; N = fr(N)) _++;
                for (N = 0, H = T; H; H = fr(H)) N++;
                for (; 0 < _ - N; ) ((ne = fr(ne)), _--);
                for (; 0 < N - _; ) ((T = fr(T)), N--);
                for (; _--; ) {
                  if (ne === T || (T !== null && ne === T.alternate)) break t;
                  ((ne = fr(ne)), (T = fr(T)));
                }
                ne = null;
              }
            else ne = null;
            (K !== null && vc(U, j, K, ne, !1),
              ee !== null && Ve !== null && vc(U, Ve, ee, ne, !0));
          }
        }
        e: {
          if (
            ((j = I ? pr(I) : window),
            (K = j.nodeName && j.nodeName.toLowerCase()),
            K === 'select' || (K === 'input' && j.type === 'file'))
          )
            var ie = vm;
          else if (Gs(j))
            if (Zs) ie = Sm;
            else {
              ie = wm;
              var ae = xm;
            }
          else
            (K = j.nodeName) &&
              K.toLowerCase() === 'input' &&
              (j.type === 'checkbox' || j.type === 'radio') &&
              (ie = km);
          if (ie && (ie = ie(e, I))) {
            Js(U, ie, r, B);
            break e;
          }
          (ae && ae(e, j, I),
            e === 'focusout' &&
              (ae = j._wrapperState) &&
              ae.controlled &&
              j.type === 'number' &&
              rr(j, 'number', j.value));
        }
        switch (((ae = I ? pr(I) : window), e)) {
          case 'focusin':
            (Gs(ae) || ae.contentEditable === 'true') &&
              ((sr = ae), (Xo = I), (ri = null));
            break;
          case 'focusout':
            ri = Xo = sr = null;
            break;
          case 'mousedown':
            Yo = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Yo = !1), uc(U, r, B));
            break;
          case 'selectionchange':
            if (_m) break;
          case 'keydown':
          case 'keyup':
            uc(U, r, B);
        }
        var se;
        if (Wo)
          e: {
            switch (e) {
              case 'compositionstart':
                var he = 'onCompositionStart';
                break e;
              case 'compositionend':
                he = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                he = 'onCompositionUpdate';
                break e;
            }
            he = void 0;
          }
        else
          ar
            ? Xs(e, r) && (he = 'onCompositionEnd')
            : e === 'keydown' &&
              r.keyCode === 229 &&
              (he = 'onCompositionStart');
        (he &&
          (Qs &&
            r.locale !== 'ko' &&
            (ar || he !== 'onCompositionStart'
              ? he === 'onCompositionEnd' && ar && (se = bs())
              : ((xn = B),
                (Bo = 'value' in xn ? xn.value : xn.textContent),
                (ar = !0))),
          (ae = al(I, he)),
          0 < ae.length &&
            ((he = new $s(he, e, null, r, B)),
            U.push({ event: he, listeners: ae }),
            se
              ? (he.data = se)
              : ((se = Ys(r)), se !== null && (he.data = se)))),
          (se = pm ? hm(e, r) : mm(e, r)) &&
            ((I = al(I, 'onBeforeInput')),
            0 < I.length &&
              ((B = new $s('onBeforeInput', 'beforeinput', null, r, B)),
              U.push({ event: B, listeners: I }),
              (B.data = se))));
      }
      gc(U, t);
    });
  }
  function oi(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function al(e, t) {
    for (var r = t + 'Capture', u = []; e !== null; ) {
      var s = e,
        d = s.stateNode;
      (s.tag === 5 &&
        d !== null &&
        ((s = d),
        (d = br(e, r)),
        d != null && u.unshift(oi(e, d, s)),
        (d = br(e, t)),
        d != null && u.push(oi(e, d, s))),
        (e = e.return));
    }
    return u;
  }
  function fr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function vc(e, t, r, u, s) {
    for (var d = t._reactName, y = []; r !== null && r !== u; ) {
      var S = r,
        C = S.alternate,
        I = S.stateNode;
      if (C !== null && C === u) break;
      (S.tag === 5 &&
        I !== null &&
        ((S = I),
        s
          ? ((C = br(r, d)), C != null && y.unshift(oi(r, C, S)))
          : s || ((C = br(r, d)), C != null && y.push(oi(r, C, S)))),
        (r = r.return));
    }
    y.length !== 0 && e.push({ event: t, listeners: y });
  }
  var Im = /\r\n?/g,
    zm = /\u0000|\uFFFD/g;
  function xc(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Im,
        `
`,
      )
      .replace(zm, '');
  }
  function sl(e, t, r) {
    if (((t = xc(t)), xc(e) !== t && r)) throw Error(l(425));
  }
  function cl() {}
  var nu = null,
    ru = null;
  function iu(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var lu = typeof setTimeout == 'function' ? setTimeout : void 0,
    Rm = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    wc = typeof Promise == 'function' ? Promise : void 0,
    Lm =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof wc < 'u'
          ? function (e) {
              return wc.resolve(null).then(e).catch(Om);
            }
          : lu;
  function Om(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function ou(e, t) {
    var r = t,
      u = 0;
    do {
      var s = r.nextSibling;
      if ((e.removeChild(r), s && s.nodeType === 8))
        if (((r = s.data), r === '/$')) {
          if (u === 0) {
            (e.removeChild(s), Yr(t));
            return;
          }
          u--;
        } else (r !== '$' && r !== '$?' && r !== '$!') || u++;
      r = s;
    } while (r);
    Yr(t);
  }
  function kn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
        if (t === '/$') return null;
      }
    }
    return e;
  }
  function kc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === '$' || r === '$!' || r === '$?') {
          if (t === 0) return e;
          t--;
        } else r === '/$' && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var dr = Math.random().toString(36).slice(2),
    Qt = '__reactFiber$' + dr,
    ui = '__reactProps$' + dr,
    tn = '__reactContainer$' + dr,
    uu = '__reactEvents$' + dr,
    Dm = '__reactListeners$' + dr,
    Mm = '__reactHandles$' + dr;
  function Bn(e) {
    var t = e[Qt];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if ((t = r[tn] || r[Qt])) {
        if (
          ((r = t.alternate),
          t.child !== null || (r !== null && r.child !== null))
        )
          for (e = kc(e); e !== null; ) {
            if ((r = e[Qt])) return r;
            e = kc(e);
          }
        return t;
      }
      ((e = r), (r = e.parentNode));
    }
    return null;
  }
  function ai(e) {
    return (
      (e = e[Qt] || e[tn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function pr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(l(33));
  }
  function fl(e) {
    return e[ui] || null;
  }
  var au = [],
    hr = -1;
  function Sn(e) {
    return { current: e };
  }
  function Ae(e) {
    0 > hr || ((e.current = au[hr]), (au[hr] = null), hr--);
  }
  function Le(e, t) {
    (hr++, (au[hr] = e.current), (e.current = t));
  }
  var En = {},
    nt = Sn(En),
    st = Sn(!1),
    Un = En;
  function mr(e, t) {
    var r = e.type.contextTypes;
    if (!r) return En;
    var u = e.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
      return u.__reactInternalMemoizedMaskedChildContext;
    var s = {},
      d;
    for (d in r) s[d] = t[d];
    return (
      u &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = s)),
      s
    );
  }
  function ct(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function dl() {
    (Ae(st), Ae(nt));
  }
  function Sc(e, t, r) {
    if (nt.current !== En) throw Error(l(168));
    (Le(nt, t), Le(st, r));
  }
  function Ec(e, t, r) {
    var u = e.stateNode;
    if (((t = t.childContextTypes), typeof u.getChildContext != 'function'))
      return r;
    u = u.getChildContext();
    for (var s in u) if (!(s in t)) throw Error(l(108, Te(e) || 'Unknown', s));
    return w({}, r, u);
  }
  function pl(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        En),
      (Un = nt.current),
      Le(nt, e),
      Le(st, st.current),
      !0
    );
  }
  function Cc(e, t, r) {
    var u = e.stateNode;
    if (!u) throw Error(l(169));
    (r
      ? ((e = Ec(e, t, Un)),
        (u.__reactInternalMemoizedMergedChildContext = e),
        Ae(st),
        Ae(nt),
        Le(nt, e))
      : Ae(st),
      Le(st, r));
  }
  var nn = null,
    hl = !1,
    su = !1;
  function _c(e) {
    nn === null ? (nn = [e]) : nn.push(e);
  }
  function Am(e) {
    ((hl = !0), _c(e));
  }
  function Cn() {
    if (!su && nn !== null) {
      su = !0;
      var e = 0,
        t = Re;
      try {
        var r = nn;
        for (Re = 1; e < r.length; e++) {
          var u = r[e];
          do u = u(!0);
          while (u !== null);
        }
        ((nn = null), (hl = !1));
      } catch (s) {
        throw (nn !== null && (nn = nn.slice(e + 1)), Ts(Ro, Cn), s);
      } finally {
        ((Re = t), (su = !1));
      }
    }
    return null;
  }
  var gr = [],
    yr = 0,
    ml = null,
    gl = 0,
    It = [],
    zt = 0,
    bn = null,
    rn = 1,
    ln = '';
  function Vn(e, t) {
    ((gr[yr++] = gl), (gr[yr++] = ml), (ml = e), (gl = t));
  }
  function Pc(e, t, r) {
    ((It[zt++] = rn), (It[zt++] = ln), (It[zt++] = bn), (bn = e));
    var u = rn;
    e = ln;
    var s = 32 - At(u) - 1;
    ((u &= ~(1 << s)), (r += 1));
    var d = 32 - At(t) + s;
    if (30 < d) {
      var y = s - (s % 5);
      ((d = (u & ((1 << y) - 1)).toString(32)),
        (u >>= y),
        (s -= y),
        (rn = (1 << (32 - At(t) + s)) | (r << s) | u),
        (ln = d + e));
    } else ((rn = (1 << d) | (r << s) | u), (ln = e));
  }
  function cu(e) {
    e.return !== null && (Vn(e, 1), Pc(e, 1, 0));
  }
  function fu(e) {
    for (; e === ml; )
      ((ml = gr[--yr]), (gr[yr] = null), (gl = gr[--yr]), (gr[yr] = null));
    for (; e === bn; )
      ((bn = It[--zt]),
        (It[zt] = null),
        (ln = It[--zt]),
        (It[zt] = null),
        (rn = It[--zt]),
        (It[zt] = null));
  }
  var kt = null,
    St = null,
    Fe = !1,
    jt = null;
  function Tc(e, t) {
    var r = Dt(5, null, null, 0);
    ((r.elementType = 'DELETED'),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r));
  }
  function Nc(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return (
          (t =
            t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (kt = e), (St = kn(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (kt = e), (St = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((r = bn !== null ? { id: rn, overflow: ln } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: r,
                retryLane: 1073741824,
              }),
              (r = Dt(18, null, null, 0)),
              (r.stateNode = t),
              (r.return = e),
              (e.child = r),
              (kt = e),
              (St = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function du(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function pu(e) {
    if (Fe) {
      var t = St;
      if (t) {
        var r = t;
        if (!Nc(e, t)) {
          if (du(e)) throw Error(l(418));
          t = kn(r.nextSibling);
          var u = kt;
          t && Nc(e, t)
            ? Tc(u, r)
            : ((e.flags = (e.flags & -4097) | 2), (Fe = !1), (kt = e));
        }
      } else {
        if (du(e)) throw Error(l(418));
        ((e.flags = (e.flags & -4097) | 2), (Fe = !1), (kt = e));
      }
    }
  }
  function Ic(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    kt = e;
  }
  function yl(e) {
    if (e !== kt) return !1;
    if (!Fe) return (Ic(e), (Fe = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== 'head' && t !== 'body' && !iu(e.type, e.memoizedProps))),
      t && (t = St))
    ) {
      if (du(e)) throw (zc(), Error(l(418)));
      for (; t; ) (Tc(e, t), (t = kn(t.nextSibling)));
    }
    if ((Ic(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(l(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === '/$') {
              if (t === 0) {
                St = kn(e.nextSibling);
                break e;
              }
              t--;
            } else (r !== '$' && r !== '$!' && r !== '$?') || t++;
          }
          e = e.nextSibling;
        }
        St = null;
      }
    } else St = kt ? kn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function zc() {
    for (var e = St; e; ) e = kn(e.nextSibling);
  }
  function vr() {
    ((St = kt = null), (Fe = !1));
  }
  function hu(e) {
    jt === null ? (jt = [e]) : jt.push(e);
  }
  var Fm = Q.ReactCurrentBatchConfig;
  function si(e, t, r) {
    if (
      ((e = r.ref),
      e !== null && typeof e != 'function' && typeof e != 'object')
    ) {
      if (r._owner) {
        if (((r = r._owner), r)) {
          if (r.tag !== 1) throw Error(l(309));
          var u = r.stateNode;
        }
        if (!u) throw Error(l(147, e));
        var s = u,
          d = '' + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == 'function' &&
          t.ref._stringRef === d
          ? t.ref
          : ((t = function (y) {
              var S = s.refs;
              y === null ? delete S[d] : (S[d] = y);
            }),
            (t._stringRef = d),
            t);
      }
      if (typeof e != 'string') throw Error(l(284));
      if (!r._owner) throw Error(l(290, e));
    }
    return e;
  }
  function vl(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        l(
          31,
          e === '[object Object]'
            ? 'object with keys {' + Object.keys(t).join(', ') + '}'
            : e,
        ),
      )
    );
  }
  function Rc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Lc(e) {
    function t(T, _) {
      if (e) {
        var N = T.deletions;
        N === null ? ((T.deletions = [_]), (T.flags |= 16)) : N.push(_);
      }
    }
    function r(T, _) {
      if (!e) return null;
      for (; _ !== null; ) (t(T, _), (_ = _.sibling));
      return null;
    }
    function u(T, _) {
      for (T = new Map(); _ !== null; )
        (_.key !== null ? T.set(_.key, _) : T.set(_.index, _), (_ = _.sibling));
      return T;
    }
    function s(T, _) {
      return ((T = Ln(T, _)), (T.index = 0), (T.sibling = null), T);
    }
    function d(T, _, N) {
      return (
        (T.index = N),
        e
          ? ((N = T.alternate),
            N !== null
              ? ((N = N.index), N < _ ? ((T.flags |= 2), _) : N)
              : ((T.flags |= 2), _))
          : ((T.flags |= 1048576), _)
      );
    }
    function y(T) {
      return (e && T.alternate === null && (T.flags |= 2), T);
    }
    function S(T, _, N, H) {
      return _ === null || _.tag !== 6
        ? ((_ = la(N, T.mode, H)), (_.return = T), _)
        : ((_ = s(_, N)), (_.return = T), _);
    }
    function C(T, _, N, H) {
      var ie = N.type;
      return ie === te
        ? B(T, _, N.props.children, H, N.key)
        : _ !== null &&
            (_.elementType === ie ||
              (typeof ie == 'object' &&
                ie !== null &&
                ie.$$typeof === Ce &&
                Rc(ie) === _.type))
          ? ((H = s(_, N.props)), (H.ref = si(T, _, N)), (H.return = T), H)
          : ((H = Vl(N.type, N.key, N.props, null, T.mode, H)),
            (H.ref = si(T, _, N)),
            (H.return = T),
            H);
    }
    function I(T, _, N, H) {
      return _ === null ||
        _.tag !== 4 ||
        _.stateNode.containerInfo !== N.containerInfo ||
        _.stateNode.implementation !== N.implementation
        ? ((_ = oa(N, T.mode, H)), (_.return = T), _)
        : ((_ = s(_, N.children || [])), (_.return = T), _);
    }
    function B(T, _, N, H, ie) {
      return _ === null || _.tag !== 7
        ? ((_ = Yn(N, T.mode, H, ie)), (_.return = T), _)
        : ((_ = s(_, N)), (_.return = T), _);
    }
    function U(T, _, N) {
      if ((typeof _ == 'string' && _ !== '') || typeof _ == 'number')
        return ((_ = la('' + _, T.mode, N)), (_.return = T), _);
      if (typeof _ == 'object' && _ !== null) {
        switch (_.$$typeof) {
          case Y:
            return (
              (N = Vl(_.type, _.key, _.props, null, T.mode, N)),
              (N.ref = si(T, null, _)),
              (N.return = T),
              N
            );
          case D:
            return ((_ = oa(_, T.mode, N)), (_.return = T), _);
          case Ce:
            var H = _._init;
            return U(T, H(_._payload), N);
        }
        if (dn(_) || oe(_))
          return ((_ = Yn(_, T.mode, N, null)), (_.return = T), _);
        vl(T, _);
      }
      return null;
    }
    function j(T, _, N, H) {
      var ie = _ !== null ? _.key : null;
      if ((typeof N == 'string' && N !== '') || typeof N == 'number')
        return ie !== null ? null : S(T, _, '' + N, H);
      if (typeof N == 'object' && N !== null) {
        switch (N.$$typeof) {
          case Y:
            return N.key === ie ? C(T, _, N, H) : null;
          case D:
            return N.key === ie ? I(T, _, N, H) : null;
          case Ce:
            return ((ie = N._init), j(T, _, ie(N._payload), H));
        }
        if (dn(N) || oe(N)) return ie !== null ? null : B(T, _, N, H, null);
        vl(T, N);
      }
      return null;
    }
    function K(T, _, N, H, ie) {
      if ((typeof H == 'string' && H !== '') || typeof H == 'number')
        return ((T = T.get(N) || null), S(_, T, '' + H, ie));
      if (typeof H == 'object' && H !== null) {
        switch (H.$$typeof) {
          case Y:
            return (
              (T = T.get(H.key === null ? N : H.key) || null),
              C(_, T, H, ie)
            );
          case D:
            return (
              (T = T.get(H.key === null ? N : H.key) || null),
              I(_, T, H, ie)
            );
          case Ce:
            var ae = H._init;
            return K(T, _, N, ae(H._payload), ie);
        }
        if (dn(H) || oe(H))
          return ((T = T.get(N) || null), B(_, T, H, ie, null));
        vl(_, H);
      }
      return null;
    }
    function ee(T, _, N, H) {
      for (
        var ie = null, ae = null, se = _, he = (_ = 0), Ye = null;
        se !== null && he < N.length;
        he++
      ) {
        se.index > he ? ((Ye = se), (se = null)) : (Ye = se.sibling);
        var Ne = j(T, se, N[he], H);
        if (Ne === null) {
          se === null && (se = Ye);
          break;
        }
        (e && se && Ne.alternate === null && t(T, se),
          (_ = d(Ne, _, he)),
          ae === null ? (ie = Ne) : (ae.sibling = Ne),
          (ae = Ne),
          (se = Ye));
      }
      if (he === N.length) return (r(T, se), Fe && Vn(T, he), ie);
      if (se === null) {
        for (; he < N.length; he++)
          ((se = U(T, N[he], H)),
            se !== null &&
              ((_ = d(se, _, he)),
              ae === null ? (ie = se) : (ae.sibling = se),
              (ae = se)));
        return (Fe && Vn(T, he), ie);
      }
      for (se = u(T, se); he < N.length; he++)
        ((Ye = K(se, T, he, N[he], H)),
          Ye !== null &&
            (e &&
              Ye.alternate !== null &&
              se.delete(Ye.key === null ? he : Ye.key),
            (_ = d(Ye, _, he)),
            ae === null ? (ie = Ye) : (ae.sibling = Ye),
            (ae = Ye)));
      return (
        e &&
          se.forEach(function (On) {
            return t(T, On);
          }),
        Fe && Vn(T, he),
        ie
      );
    }
    function ne(T, _, N, H) {
      var ie = oe(N);
      if (typeof ie != 'function') throw Error(l(150));
      if (((N = ie.call(N)), N == null)) throw Error(l(151));
      for (
        var ae = (ie = null), se = _, he = (_ = 0), Ye = null, Ne = N.next();
        se !== null && !Ne.done;
        he++, Ne = N.next()
      ) {
        se.index > he ? ((Ye = se), (se = null)) : (Ye = se.sibling);
        var On = j(T, se, Ne.value, H);
        if (On === null) {
          se === null && (se = Ye);
          break;
        }
        (e && se && On.alternate === null && t(T, se),
          (_ = d(On, _, he)),
          ae === null ? (ie = On) : (ae.sibling = On),
          (ae = On),
          (se = Ye));
      }
      if (Ne.done) return (r(T, se), Fe && Vn(T, he), ie);
      if (se === null) {
        for (; !Ne.done; he++, Ne = N.next())
          ((Ne = U(T, Ne.value, H)),
            Ne !== null &&
              ((_ = d(Ne, _, he)),
              ae === null ? (ie = Ne) : (ae.sibling = Ne),
              (ae = Ne)));
        return (Fe && Vn(T, he), ie);
      }
      for (se = u(T, se); !Ne.done; he++, Ne = N.next())
        ((Ne = K(se, T, he, Ne.value, H)),
          Ne !== null &&
            (e &&
              Ne.alternate !== null &&
              se.delete(Ne.key === null ? he : Ne.key),
            (_ = d(Ne, _, he)),
            ae === null ? (ie = Ne) : (ae.sibling = Ne),
            (ae = Ne)));
      return (
        e &&
          se.forEach(function (gg) {
            return t(T, gg);
          }),
        Fe && Vn(T, he),
        ie
      );
    }
    function Ve(T, _, N, H) {
      if (
        (typeof N == 'object' &&
          N !== null &&
          N.type === te &&
          N.key === null &&
          (N = N.props.children),
        typeof N == 'object' && N !== null)
      ) {
        switch (N.$$typeof) {
          case Y:
            e: {
              for (var ie = N.key, ae = _; ae !== null; ) {
                if (ae.key === ie) {
                  if (((ie = N.type), ie === te)) {
                    if (ae.tag === 7) {
                      (r(T, ae.sibling),
                        (_ = s(ae, N.props.children)),
                        (_.return = T),
                        (T = _));
                      break e;
                    }
                  } else if (
                    ae.elementType === ie ||
                    (typeof ie == 'object' &&
                      ie !== null &&
                      ie.$$typeof === Ce &&
                      Rc(ie) === ae.type)
                  ) {
                    (r(T, ae.sibling),
                      (_ = s(ae, N.props)),
                      (_.ref = si(T, ae, N)),
                      (_.return = T),
                      (T = _));
                    break e;
                  }
                  r(T, ae);
                  break;
                } else t(T, ae);
                ae = ae.sibling;
              }
              N.type === te
                ? ((_ = Yn(N.props.children, T.mode, H, N.key)),
                  (_.return = T),
                  (T = _))
                : ((H = Vl(N.type, N.key, N.props, null, T.mode, H)),
                  (H.ref = si(T, _, N)),
                  (H.return = T),
                  (T = H));
            }
            return y(T);
          case D:
            e: {
              for (ae = N.key; _ !== null; ) {
                if (_.key === ae)
                  if (
                    _.tag === 4 &&
                    _.stateNode.containerInfo === N.containerInfo &&
                    _.stateNode.implementation === N.implementation
                  ) {
                    (r(T, _.sibling),
                      (_ = s(_, N.children || [])),
                      (_.return = T),
                      (T = _));
                    break e;
                  } else {
                    r(T, _);
                    break;
                  }
                else t(T, _);
                _ = _.sibling;
              }
              ((_ = oa(N, T.mode, H)), (_.return = T), (T = _));
            }
            return y(T);
          case Ce:
            return ((ae = N._init), Ve(T, _, ae(N._payload), H));
        }
        if (dn(N)) return ee(T, _, N, H);
        if (oe(N)) return ne(T, _, N, H);
        vl(T, N);
      }
      return (typeof N == 'string' && N !== '') || typeof N == 'number'
        ? ((N = '' + N),
          _ !== null && _.tag === 6
            ? (r(T, _.sibling), (_ = s(_, N)), (_.return = T), (T = _))
            : (r(T, _), (_ = la(N, T.mode, H)), (_.return = T), (T = _)),
          y(T))
        : r(T, _);
    }
    return Ve;
  }
  var xr = Lc(!0),
    Oc = Lc(!1),
    xl = Sn(null),
    wl = null,
    wr = null,
    mu = null;
  function gu() {
    mu = wr = wl = null;
  }
  function yu(e) {
    var t = xl.current;
    (Ae(xl), (e._currentValue = t));
  }
  function vu(e, t, r) {
    for (; e !== null; ) {
      var u = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), u !== null && (u.childLanes |= t))
          : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t),
        e === r)
      )
        break;
      e = e.return;
    }
  }
  function kr(e, t) {
    ((wl = e),
      (mu = wr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (ft = !0), (e.firstContext = null)));
  }
  function Rt(e) {
    var t = e._currentValue;
    if (mu !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), wr === null)) {
        if (wl === null) throw Error(l(308));
        ((wr = e), (wl.dependencies = { lanes: 0, firstContext: e }));
      } else wr = wr.next = e;
    return t;
  }
  var Hn = null;
  function xu(e) {
    Hn === null ? (Hn = [e]) : Hn.push(e);
  }
  function Dc(e, t, r, u) {
    var s = t.interleaved;
    return (
      s === null ? ((r.next = r), xu(t)) : ((r.next = s.next), (s.next = r)),
      (t.interleaved = r),
      on(e, u)
    );
  }
  function on(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
      ((e.childLanes |= t),
        (r = e.alternate),
        r !== null && (r.childLanes |= t),
        (r = e),
        (e = e.return));
    return r.tag === 3 ? r.stateNode : null;
  }
  var _n = !1;
  function wu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Mc(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }));
  }
  function un(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Pn(e, t, r) {
    var u = e.updateQueue;
    if (u === null) return null;
    if (((u = u.shared), (Pe & 2) !== 0)) {
      var s = u.pending;
      return (
        s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
        (u.pending = t),
        on(e, r)
      );
    }
    return (
      (s = u.interleaved),
      s === null ? ((t.next = t), xu(u)) : ((t.next = s.next), (s.next = t)),
      (u.interleaved = t),
      on(e, r)
    );
  }
  function kl(e, t, r) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
    ) {
      var u = t.lanes;
      ((u &= e.pendingLanes), (r |= u), (t.lanes = r), Do(e, r));
    }
  }
  function Ac(e, t) {
    var r = e.updateQueue,
      u = e.alternate;
    if (u !== null && ((u = u.updateQueue), r === u)) {
      var s = null,
        d = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var y = {
            eventTime: r.eventTime,
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          };
          (d === null ? (s = d = y) : (d = d.next = y), (r = r.next));
        } while (r !== null);
        d === null ? (s = d = t) : (d = d.next = t);
      } else s = d = t;
      ((r = {
        baseState: u.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: d,
        shared: u.shared,
        effects: u.effects,
      }),
        (e.updateQueue = r));
      return;
    }
    ((e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = t) : (e.next = t),
      (r.lastBaseUpdate = t));
  }
  function Sl(e, t, r, u) {
    var s = e.updateQueue;
    _n = !1;
    var d = s.firstBaseUpdate,
      y = s.lastBaseUpdate,
      S = s.shared.pending;
    if (S !== null) {
      s.shared.pending = null;
      var C = S,
        I = C.next;
      ((C.next = null), y === null ? (d = I) : (y.next = I), (y = C));
      var B = e.alternate;
      B !== null &&
        ((B = B.updateQueue),
        (S = B.lastBaseUpdate),
        S !== y &&
          (S === null ? (B.firstBaseUpdate = I) : (S.next = I),
          (B.lastBaseUpdate = C)));
    }
    if (d !== null) {
      var U = s.baseState;
      ((y = 0), (B = I = C = null), (S = d));
      do {
        var j = S.lane,
          K = S.eventTime;
        if ((u & j) === j) {
          B !== null &&
            (B = B.next =
              {
                eventTime: K,
                lane: 0,
                tag: S.tag,
                payload: S.payload,
                callback: S.callback,
                next: null,
              });
          e: {
            var ee = e,
              ne = S;
            switch (((j = t), (K = r), ne.tag)) {
              case 1:
                if (((ee = ne.payload), typeof ee == 'function')) {
                  U = ee.call(K, U, j);
                  break e;
                }
                U = ee;
                break e;
              case 3:
                ee.flags = (ee.flags & -65537) | 128;
              case 0:
                if (
                  ((ee = ne.payload),
                  (j = typeof ee == 'function' ? ee.call(K, U, j) : ee),
                  j == null)
                )
                  break e;
                U = w({}, U, j);
                break e;
              case 2:
                _n = !0;
            }
          }
          S.callback !== null &&
            S.lane !== 0 &&
            ((e.flags |= 64),
            (j = s.effects),
            j === null ? (s.effects = [S]) : j.push(S));
        } else
          ((K = {
            eventTime: K,
            lane: j,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null,
          }),
            B === null ? ((I = B = K), (C = U)) : (B = B.next = K),
            (y |= j));
        if (((S = S.next), S === null)) {
          if (((S = s.shared.pending), S === null)) break;
          ((j = S),
            (S = j.next),
            (j.next = null),
            (s.lastBaseUpdate = j),
            (s.shared.pending = null));
        }
      } while (!0);
      if (
        (B === null && (C = U),
        (s.baseState = C),
        (s.firstBaseUpdate = I),
        (s.lastBaseUpdate = B),
        (t = s.shared.interleaved),
        t !== null)
      ) {
        s = t;
        do ((y |= s.lane), (s = s.next));
        while (s !== t);
      } else d === null && (s.shared.lanes = 0);
      ((Qn |= y), (e.lanes = y), (e.memoizedState = U));
    }
  }
  function Fc(e, t, r) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var u = e[t],
          s = u.callback;
        if (s !== null) {
          if (((u.callback = null), (u = r), typeof s != 'function'))
            throw Error(l(191, s));
          s.call(u);
        }
      }
  }
  var ci = {},
    qt = Sn(ci),
    fi = Sn(ci),
    di = Sn(ci);
  function $n(e) {
    if (e === ci) throw Error(l(174));
    return e;
  }
  function ku(e, t) {
    switch ((Le(di, t), Le(fi, e), Le(qt, ci), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : W(null, '');
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = W(t, e)));
    }
    (Ae(qt), Le(qt, t));
  }
  function Sr() {
    (Ae(qt), Ae(fi), Ae(di));
  }
  function jc(e) {
    $n(di.current);
    var t = $n(qt.current),
      r = W(t, e.type);
    t !== r && (Le(fi, e), Le(qt, r));
  }
  function Su(e) {
    fi.current === e && (Ae(qt), Ae(fi));
  }
  var je = Sn(0);
  function El(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (
          r !== null &&
          ((r = r.dehydrated), r === null || r.data === '$?' || r.data === '$!')
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Eu = [];
  function Cu() {
    for (var e = 0; e < Eu.length; e++)
      Eu[e]._workInProgressVersionPrimary = null;
    Eu.length = 0;
  }
  var Cl = Q.ReactCurrentDispatcher,
    _u = Q.ReactCurrentBatchConfig,
    Wn = 0,
    Be = null,
    Qe = null,
    Ke = null,
    _l = !1,
    pi = !1,
    hi = 0,
    jm = 0;
  function rt() {
    throw Error(l(321));
  }
  function Pu(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++)
      if (!Ft(e[r], t[r])) return !1;
    return !0;
  }
  function Tu(e, t, r, u, s, d) {
    if (
      ((Wn = d),
      (Be = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Cl.current = e === null || e.memoizedState === null ? Vm : Hm),
      (e = r(u, s)),
      pi)
    ) {
      d = 0;
      do {
        if (((pi = !1), (hi = 0), 25 <= d)) throw Error(l(301));
        ((d += 1),
          (Ke = Qe = null),
          (t.updateQueue = null),
          (Cl.current = $m),
          (e = r(u, s)));
      } while (pi);
    }
    if (
      ((Cl.current = Nl),
      (t = Qe !== null && Qe.next !== null),
      (Wn = 0),
      (Ke = Qe = Be = null),
      (_l = !1),
      t)
    )
      throw Error(l(300));
    return e;
  }
  function Nu() {
    var e = hi !== 0;
    return ((hi = 0), e);
  }
  function Kt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Ke === null ? (Be.memoizedState = Ke = e) : (Ke = Ke.next = e), Ke);
  }
  function Lt() {
    if (Qe === null) {
      var e = Be.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Qe.next;
    var t = Ke === null ? Be.memoizedState : Ke.next;
    if (t !== null) ((Ke = t), (Qe = e));
    else {
      if (e === null) throw Error(l(310));
      ((Qe = e),
        (e = {
          memoizedState: Qe.memoizedState,
          baseState: Qe.baseState,
          baseQueue: Qe.baseQueue,
          queue: Qe.queue,
          next: null,
        }),
        Ke === null ? (Be.memoizedState = Ke = e) : (Ke = Ke.next = e));
    }
    return Ke;
  }
  function mi(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Iu(e) {
    var t = Lt(),
      r = t.queue;
    if (r === null) throw Error(l(311));
    r.lastRenderedReducer = e;
    var u = Qe,
      s = u.baseQueue,
      d = r.pending;
    if (d !== null) {
      if (s !== null) {
        var y = s.next;
        ((s.next = d.next), (d.next = y));
      }
      ((u.baseQueue = s = d), (r.pending = null));
    }
    if (s !== null) {
      ((d = s.next), (u = u.baseState));
      var S = (y = null),
        C = null,
        I = d;
      do {
        var B = I.lane;
        if ((Wn & B) === B)
          (C !== null &&
            (C = C.next =
              {
                lane: 0,
                action: I.action,
                hasEagerState: I.hasEagerState,
                eagerState: I.eagerState,
                next: null,
              }),
            (u = I.hasEagerState ? I.eagerState : e(u, I.action)));
        else {
          var U = {
            lane: B,
            action: I.action,
            hasEagerState: I.hasEagerState,
            eagerState: I.eagerState,
            next: null,
          };
          (C === null ? ((S = C = U), (y = u)) : (C = C.next = U),
            (Be.lanes |= B),
            (Qn |= B));
        }
        I = I.next;
      } while (I !== null && I !== d);
      (C === null ? (y = u) : (C.next = S),
        Ft(u, t.memoizedState) || (ft = !0),
        (t.memoizedState = u),
        (t.baseState = y),
        (t.baseQueue = C),
        (r.lastRenderedState = u));
    }
    if (((e = r.interleaved), e !== null)) {
      s = e;
      do ((d = s.lane), (Be.lanes |= d), (Qn |= d), (s = s.next));
      while (s !== e);
    } else s === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function zu(e) {
    var t = Lt(),
      r = t.queue;
    if (r === null) throw Error(l(311));
    r.lastRenderedReducer = e;
    var u = r.dispatch,
      s = r.pending,
      d = t.memoizedState;
    if (s !== null) {
      r.pending = null;
      var y = (s = s.next);
      do ((d = e(d, y.action)), (y = y.next));
      while (y !== s);
      (Ft(d, t.memoizedState) || (ft = !0),
        (t.memoizedState = d),
        t.baseQueue === null && (t.baseState = d),
        (r.lastRenderedState = d));
    }
    return [d, u];
  }
  function Bc() {}
  function Uc(e, t) {
    var r = Be,
      u = Lt(),
      s = t(),
      d = !Ft(u.memoizedState, s);
    if (
      (d && ((u.memoizedState = s), (ft = !0)),
      (u = u.queue),
      Ru(Hc.bind(null, r, u, e), [e]),
      u.getSnapshot !== t || d || (Ke !== null && Ke.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        gi(9, Vc.bind(null, r, u, s, t), void 0, null),
        Xe === null)
      )
        throw Error(l(349));
      (Wn & 30) !== 0 || bc(r, t, s);
    }
    return s;
  }
  function bc(e, t, r) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = Be.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Be.updateQueue = t),
          (t.stores = [e]))
        : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e)));
  }
  function Vc(e, t, r, u) {
    ((t.value = r), (t.getSnapshot = u), $c(t) && Wc(e));
  }
  function Hc(e, t, r) {
    return r(function () {
      $c(t) && Wc(e);
    });
  }
  function $c(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !Ft(e, r);
    } catch {
      return !0;
    }
  }
  function Wc(e) {
    var t = on(e, 1);
    t !== null && Vt(t, e, 1, -1);
  }
  function Qc(e) {
    var t = Kt();
    return (
      typeof e == 'function' && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: mi,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = bm.bind(null, Be, e)),
      [t.memoizedState, e]
    );
  }
  function gi(e, t, r, u) {
    return (
      (e = { tag: e, create: t, destroy: r, deps: u, next: null }),
      (t = Be.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Be.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((r = t.lastEffect),
          r === null
            ? (t.lastEffect = e.next = e)
            : ((u = r.next), (r.next = e), (e.next = u), (t.lastEffect = e))),
      e
    );
  }
  function qc() {
    return Lt().memoizedState;
  }
  function Pl(e, t, r, u) {
    var s = Kt();
    ((Be.flags |= e),
      (s.memoizedState = gi(1 | t, r, void 0, u === void 0 ? null : u)));
  }
  function Tl(e, t, r, u) {
    var s = Lt();
    u = u === void 0 ? null : u;
    var d = void 0;
    if (Qe !== null) {
      var y = Qe.memoizedState;
      if (((d = y.destroy), u !== null && Pu(u, y.deps))) {
        s.memoizedState = gi(t, r, d, u);
        return;
      }
    }
    ((Be.flags |= e), (s.memoizedState = gi(1 | t, r, d, u)));
  }
  function Kc(e, t) {
    return Pl(8390656, 8, e, t);
  }
  function Ru(e, t) {
    return Tl(2048, 8, e, t);
  }
  function Xc(e, t) {
    return Tl(4, 2, e, t);
  }
  function Yc(e, t) {
    return Tl(4, 4, e, t);
  }
  function Gc(e, t) {
    if (typeof t == 'function')
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Jc(e, t, r) {
    return (
      (r = r != null ? r.concat([e]) : null),
      Tl(4, 4, Gc.bind(null, t, e), r)
    );
  }
  function Lu() {}
  function Zc(e, t) {
    var r = Lt();
    t = t === void 0 ? null : t;
    var u = r.memoizedState;
    return u !== null && t !== null && Pu(t, u[1])
      ? u[0]
      : ((r.memoizedState = [e, t]), e);
  }
  function ef(e, t) {
    var r = Lt();
    t = t === void 0 ? null : t;
    var u = r.memoizedState;
    return u !== null && t !== null && Pu(t, u[1])
      ? u[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
  }
  function tf(e, t, r) {
    return (Wn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (ft = !0)), (e.memoizedState = r))
      : (Ft(r, t) ||
          ((r = Rs()), (Be.lanes |= r), (Qn |= r), (e.baseState = !0)),
        t);
  }
  function Bm(e, t) {
    var r = Re;
    ((Re = r !== 0 && 4 > r ? r : 4), e(!0));
    var u = _u.transition;
    _u.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((Re = r), (_u.transition = u));
    }
  }
  function nf() {
    return Lt().memoizedState;
  }
  function Um(e, t, r) {
    var u = zn(e);
    if (
      ((r = {
        lane: u,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      rf(e))
    )
      lf(t, r);
    else if (((r = Dc(e, t, r, u)), r !== null)) {
      var s = at();
      (Vt(r, e, u, s), of(r, t, u));
    }
  }
  function bm(e, t, r) {
    var u = zn(e),
      s = {
        lane: u,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (rf(e)) lf(t, s);
    else {
      var d = e.alternate;
      if (
        e.lanes === 0 &&
        (d === null || d.lanes === 0) &&
        ((d = t.lastRenderedReducer), d !== null)
      )
        try {
          var y = t.lastRenderedState,
            S = d(y, r);
          if (((s.hasEagerState = !0), (s.eagerState = S), Ft(S, y))) {
            var C = t.interleaved;
            (C === null
              ? ((s.next = s), xu(t))
              : ((s.next = C.next), (C.next = s)),
              (t.interleaved = s));
            return;
          }
        } catch {
        } finally {
        }
      ((r = Dc(e, t, s, u)),
        r !== null && ((s = at()), Vt(r, e, u, s), of(r, t, u)));
    }
  }
  function rf(e) {
    var t = e.alternate;
    return e === Be || (t !== null && t === Be);
  }
  function lf(e, t) {
    pi = _l = !0;
    var r = e.pending;
    (r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (e.pending = t));
  }
  function of(e, t, r) {
    if ((r & 4194240) !== 0) {
      var u = t.lanes;
      ((u &= e.pendingLanes), (r |= u), (t.lanes = r), Do(e, r));
    }
  }
  var Nl = {
      readContext: Rt,
      useCallback: rt,
      useContext: rt,
      useEffect: rt,
      useImperativeHandle: rt,
      useInsertionEffect: rt,
      useLayoutEffect: rt,
      useMemo: rt,
      useReducer: rt,
      useRef: rt,
      useState: rt,
      useDebugValue: rt,
      useDeferredValue: rt,
      useTransition: rt,
      useMutableSource: rt,
      useSyncExternalStore: rt,
      useId: rt,
      unstable_isNewReconciler: !1,
    },
    Vm = {
      readContext: Rt,
      useCallback: function (e, t) {
        return ((Kt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Rt,
      useEffect: Kc,
      useImperativeHandle: function (e, t, r) {
        return (
          (r = r != null ? r.concat([e]) : null),
          Pl(4194308, 4, Gc.bind(null, t, e), r)
        );
      },
      useLayoutEffect: function (e, t) {
        return Pl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Pl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var r = Kt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (r.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, r) {
        var u = Kt();
        return (
          (t = r !== void 0 ? r(t) : t),
          (u.memoizedState = u.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (u.queue = e),
          (e = e.dispatch = Um.bind(null, Be, e)),
          [u.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Kt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: Qc,
      useDebugValue: Lu,
      useDeferredValue: function (e) {
        return (Kt().memoizedState = e);
      },
      useTransition: function () {
        var e = Qc(!1),
          t = e[0];
        return ((e = Bm.bind(null, e[1])), (Kt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
        var u = Be,
          s = Kt();
        if (Fe) {
          if (r === void 0) throw Error(l(407));
          r = r();
        } else {
          if (((r = t()), Xe === null)) throw Error(l(349));
          (Wn & 30) !== 0 || bc(u, t, r);
        }
        s.memoizedState = r;
        var d = { value: r, getSnapshot: t };
        return (
          (s.queue = d),
          Kc(Hc.bind(null, u, d, e), [e]),
          (u.flags |= 2048),
          gi(9, Vc.bind(null, u, d, r, t), void 0, null),
          r
        );
      },
      useId: function () {
        var e = Kt(),
          t = Xe.identifierPrefix;
        if (Fe) {
          var r = ln,
            u = rn;
          ((r = (u & ~(1 << (32 - At(u) - 1))).toString(32) + r),
            (t = ':' + t + 'R' + r),
            (r = hi++),
            0 < r && (t += 'H' + r.toString(32)),
            (t += ':'));
        } else ((r = jm++), (t = ':' + t + 'r' + r.toString(32) + ':'));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    Hm = {
      readContext: Rt,
      useCallback: Zc,
      useContext: Rt,
      useEffect: Ru,
      useImperativeHandle: Jc,
      useInsertionEffect: Xc,
      useLayoutEffect: Yc,
      useMemo: ef,
      useReducer: Iu,
      useRef: qc,
      useState: function () {
        return Iu(mi);
      },
      useDebugValue: Lu,
      useDeferredValue: function (e) {
        var t = Lt();
        return tf(t, Qe.memoizedState, e);
      },
      useTransition: function () {
        var e = Iu(mi)[0],
          t = Lt().memoizedState;
        return [e, t];
      },
      useMutableSource: Bc,
      useSyncExternalStore: Uc,
      useId: nf,
      unstable_isNewReconciler: !1,
    },
    $m = {
      readContext: Rt,
      useCallback: Zc,
      useContext: Rt,
      useEffect: Ru,
      useImperativeHandle: Jc,
      useInsertionEffect: Xc,
      useLayoutEffect: Yc,
      useMemo: ef,
      useReducer: zu,
      useRef: qc,
      useState: function () {
        return zu(mi);
      },
      useDebugValue: Lu,
      useDeferredValue: function (e) {
        var t = Lt();
        return Qe === null ? (t.memoizedState = e) : tf(t, Qe.memoizedState, e);
      },
      useTransition: function () {
        var e = zu(mi)[0],
          t = Lt().memoizedState;
        return [e, t];
      },
      useMutableSource: Bc,
      useSyncExternalStore: Uc,
      useId: nf,
      unstable_isNewReconciler: !1,
    };
  function Bt(e, t) {
    if (e && e.defaultProps) {
      ((t = w({}, t)), (e = e.defaultProps));
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function Ou(e, t, r, u) {
    ((t = e.memoizedState),
      (r = r(u, t)),
      (r = r == null ? t : w({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r));
  }
  var Il = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? jn(e) === e : !1;
    },
    enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var u = at(),
        s = zn(e),
        d = un(u, s);
      ((d.payload = t),
        r != null && (d.callback = r),
        (t = Pn(e, d, s)),
        t !== null && (Vt(t, e, s, u), kl(t, e, s)));
    },
    enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var u = at(),
        s = zn(e),
        d = un(u, s);
      ((d.tag = 1),
        (d.payload = t),
        r != null && (d.callback = r),
        (t = Pn(e, d, s)),
        t !== null && (Vt(t, e, s, u), kl(t, e, s)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = at(),
        u = zn(e),
        s = un(r, u);
      ((s.tag = 2),
        t != null && (s.callback = t),
        (t = Pn(e, s, u)),
        t !== null && (Vt(t, e, u, r), kl(t, e, u)));
    },
  };
  function uf(e, t, r, u, s, d, y) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(u, d, y)
        : t.prototype && t.prototype.isPureReactComponent
          ? !ni(r, u) || !ni(s, d)
          : !0
    );
  }
  function af(e, t, r) {
    var u = !1,
      s = En,
      d = t.contextType;
    return (
      typeof d == 'object' && d !== null
        ? (d = Rt(d))
        : ((s = ct(t) ? Un : nt.current),
          (u = t.contextTypes),
          (d = (u = u != null) ? mr(e, s) : En)),
      (t = new t(r, d)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Il),
      (e.stateNode = t),
      (t._reactInternals = e),
      u &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = s),
        (e.__reactInternalMemoizedMaskedChildContext = d)),
      t
    );
  }
  function sf(e, t, r, u) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps(r, u),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(r, u),
      t.state !== e && Il.enqueueReplaceState(t, t.state, null));
  }
  function Du(e, t, r, u) {
    var s = e.stateNode;
    ((s.props = r), (s.state = e.memoizedState), (s.refs = {}), wu(e));
    var d = t.contextType;
    (typeof d == 'object' && d !== null
      ? (s.context = Rt(d))
      : ((d = ct(t) ? Un : nt.current), (s.context = mr(e, d))),
      (s.state = e.memoizedState),
      (d = t.getDerivedStateFromProps),
      typeof d == 'function' && (Ou(e, t, d, r), (s.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == 'function' ||
        typeof s.getSnapshotBeforeUpdate == 'function' ||
        (typeof s.UNSAFE_componentWillMount != 'function' &&
          typeof s.componentWillMount != 'function') ||
        ((t = s.state),
        typeof s.componentWillMount == 'function' && s.componentWillMount(),
        typeof s.UNSAFE_componentWillMount == 'function' &&
          s.UNSAFE_componentWillMount(),
        t !== s.state && Il.enqueueReplaceState(s, s.state, null),
        Sl(e, r, s, u),
        (s.state = e.memoizedState)),
      typeof s.componentDidMount == 'function' && (e.flags |= 4194308));
  }
  function Er(e, t) {
    try {
      var r = '',
        u = t;
      do ((r += we(u)), (u = u.return));
      while (u);
      var s = r;
    } catch (d) {
      s =
        `
Error generating stack: ` +
        d.message +
        `
` +
        d.stack;
    }
    return { value: e, source: t, stack: s, digest: null };
  }
  function Mu(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function Au(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  var Wm = typeof WeakMap == 'function' ? WeakMap : Map;
  function cf(e, t, r) {
    ((r = un(-1, r)), (r.tag = 3), (r.payload = { element: null }));
    var u = t.value;
    return (
      (r.callback = function () {
        (Al || ((Al = !0), (Gu = u)), Au(e, t));
      }),
      r
    );
  }
  function ff(e, t, r) {
    ((r = un(-1, r)), (r.tag = 3));
    var u = e.type.getDerivedStateFromError;
    if (typeof u == 'function') {
      var s = t.value;
      ((r.payload = function () {
        return u(s);
      }),
        (r.callback = function () {
          Au(e, t);
        }));
    }
    var d = e.stateNode;
    return (
      d !== null &&
        typeof d.componentDidCatch == 'function' &&
        (r.callback = function () {
          (Au(e, t),
            typeof u != 'function' &&
              (Nn === null ? (Nn = new Set([this])) : Nn.add(this)));
          var y = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: y !== null ? y : '',
          });
        }),
      r
    );
  }
  function df(e, t, r) {
    var u = e.pingCache;
    if (u === null) {
      u = e.pingCache = new Wm();
      var s = new Set();
      u.set(t, s);
    } else ((s = u.get(t)), s === void 0 && ((s = new Set()), u.set(t, s)));
    s.has(r) || (s.add(r), (e = lg.bind(null, e, t, r)), t.then(e, e));
  }
  function pf(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function hf(e, t, r, u, s) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (r.flags |= 131072),
            (r.flags &= -52805),
            r.tag === 1 &&
              (r.alternate === null
                ? (r.tag = 17)
                : ((t = un(-1, 1)), (t.tag = 2), Pn(r, t, 1))),
            (r.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = s), e);
  }
  var Qm = Q.ReactCurrentOwner,
    ft = !1;
  function ut(e, t, r, u) {
    t.child = e === null ? Oc(t, null, r, u) : xr(t, e.child, r, u);
  }
  function mf(e, t, r, u, s) {
    r = r.render;
    var d = t.ref;
    return (
      kr(t, s),
      (u = Tu(e, t, r, u, d, s)),
      (r = Nu()),
      e !== null && !ft
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~s),
          an(e, t, s))
        : (Fe && r && cu(t), (t.flags |= 1), ut(e, t, u, s), t.child)
    );
  }
  function gf(e, t, r, u, s) {
    if (e === null) {
      var d = r.type;
      return typeof d == 'function' &&
        !ia(d) &&
        d.defaultProps === void 0 &&
        r.compare === null &&
        r.defaultProps === void 0
        ? ((t.tag = 15), (t.type = d), yf(e, t, d, u, s))
        : ((e = Vl(r.type, null, u, t, t.mode, s)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((d = e.child), (e.lanes & s) === 0)) {
      var y = d.memoizedProps;
      if (
        ((r = r.compare), (r = r !== null ? r : ni), r(y, u) && e.ref === t.ref)
      )
        return an(e, t, s);
    }
    return (
      (t.flags |= 1),
      (e = Ln(d, u)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function yf(e, t, r, u, s) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (ni(d, u) && e.ref === t.ref)
        if (((ft = !1), (t.pendingProps = u = d), (e.lanes & s) !== 0))
          (e.flags & 131072) !== 0 && (ft = !0);
        else return ((t.lanes = e.lanes), an(e, t, s));
    }
    return Fu(e, t, r, u, s);
  }
  function vf(e, t, r) {
    var u = t.pendingProps,
      s = u.children,
      d = e !== null ? e.memoizedState : null;
    if (u.mode === 'hidden')
      if ((t.mode & 1) === 0)
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Le(_r, Et),
          (Et |= r));
      else {
        if ((r & 1073741824) === 0)
          return (
            (e = d !== null ? d.baseLanes | r : r),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Le(_r, Et),
            (Et |= e),
            null
          );
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (u = d !== null ? d.baseLanes : r),
          Le(_r, Et),
          (Et |= u));
      }
    else
      (d !== null ? ((u = d.baseLanes | r), (t.memoizedState = null)) : (u = r),
        Le(_r, Et),
        (Et |= u));
    return (ut(e, t, s, r), t.child);
  }
  function xf(e, t) {
    var r = t.ref;
    ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Fu(e, t, r, u, s) {
    var d = ct(r) ? Un : nt.current;
    return (
      (d = mr(t, d)),
      kr(t, s),
      (r = Tu(e, t, r, u, d, s)),
      (u = Nu()),
      e !== null && !ft
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~s),
          an(e, t, s))
        : (Fe && u && cu(t), (t.flags |= 1), ut(e, t, r, s), t.child)
    );
  }
  function wf(e, t, r, u, s) {
    if (ct(r)) {
      var d = !0;
      pl(t);
    } else d = !1;
    if ((kr(t, s), t.stateNode === null))
      (Rl(e, t), af(t, r, u), Du(t, r, u, s), (u = !0));
    else if (e === null) {
      var y = t.stateNode,
        S = t.memoizedProps;
      y.props = S;
      var C = y.context,
        I = r.contextType;
      typeof I == 'object' && I !== null
        ? (I = Rt(I))
        : ((I = ct(r) ? Un : nt.current), (I = mr(t, I)));
      var B = r.getDerivedStateFromProps,
        U =
          typeof B == 'function' ||
          typeof y.getSnapshotBeforeUpdate == 'function';
      (U ||
        (typeof y.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof y.componentWillReceiveProps != 'function') ||
        ((S !== u || C !== I) && sf(t, y, u, I)),
        (_n = !1));
      var j = t.memoizedState;
      ((y.state = j),
        Sl(t, u, y, s),
        (C = t.memoizedState),
        S !== u || j !== C || st.current || _n
          ? (typeof B == 'function' && (Ou(t, r, B, u), (C = t.memoizedState)),
            (S = _n || uf(t, r, S, u, j, C, I))
              ? (U ||
                  (typeof y.UNSAFE_componentWillMount != 'function' &&
                    typeof y.componentWillMount != 'function') ||
                  (typeof y.componentWillMount == 'function' &&
                    y.componentWillMount(),
                  typeof y.UNSAFE_componentWillMount == 'function' &&
                    y.UNSAFE_componentWillMount()),
                typeof y.componentDidMount == 'function' &&
                  (t.flags |= 4194308))
              : (typeof y.componentDidMount == 'function' &&
                  (t.flags |= 4194308),
                (t.memoizedProps = u),
                (t.memoizedState = C)),
            (y.props = u),
            (y.state = C),
            (y.context = I),
            (u = S))
          : (typeof y.componentDidMount == 'function' && (t.flags |= 4194308),
            (u = !1)));
    } else {
      ((y = t.stateNode),
        Mc(e, t),
        (S = t.memoizedProps),
        (I = t.type === t.elementType ? S : Bt(t.type, S)),
        (y.props = I),
        (U = t.pendingProps),
        (j = y.context),
        (C = r.contextType),
        typeof C == 'object' && C !== null
          ? (C = Rt(C))
          : ((C = ct(r) ? Un : nt.current), (C = mr(t, C))));
      var K = r.getDerivedStateFromProps;
      ((B =
        typeof K == 'function' ||
        typeof y.getSnapshotBeforeUpdate == 'function') ||
        (typeof y.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof y.componentWillReceiveProps != 'function') ||
        ((S !== U || j !== C) && sf(t, y, u, C)),
        (_n = !1),
        (j = t.memoizedState),
        (y.state = j),
        Sl(t, u, y, s));
      var ee = t.memoizedState;
      S !== U || j !== ee || st.current || _n
        ? (typeof K == 'function' && (Ou(t, r, K, u), (ee = t.memoizedState)),
          (I = _n || uf(t, r, I, u, j, ee, C) || !1)
            ? (B ||
                (typeof y.UNSAFE_componentWillUpdate != 'function' &&
                  typeof y.componentWillUpdate != 'function') ||
                (typeof y.componentWillUpdate == 'function' &&
                  y.componentWillUpdate(u, ee, C),
                typeof y.UNSAFE_componentWillUpdate == 'function' &&
                  y.UNSAFE_componentWillUpdate(u, ee, C)),
              typeof y.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof y.getSnapshotBeforeUpdate == 'function' &&
                (t.flags |= 1024))
            : (typeof y.componentDidUpdate != 'function' ||
                (S === e.memoizedProps && j === e.memoizedState) ||
                (t.flags |= 4),
              typeof y.getSnapshotBeforeUpdate != 'function' ||
                (S === e.memoizedProps && j === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = u),
              (t.memoizedState = ee)),
          (y.props = u),
          (y.state = ee),
          (y.context = C),
          (u = I))
        : (typeof y.componentDidUpdate != 'function' ||
            (S === e.memoizedProps && j === e.memoizedState) ||
            (t.flags |= 4),
          typeof y.getSnapshotBeforeUpdate != 'function' ||
            (S === e.memoizedProps && j === e.memoizedState) ||
            (t.flags |= 1024),
          (u = !1));
    }
    return ju(e, t, r, u, d, s);
  }
  function ju(e, t, r, u, s, d) {
    xf(e, t);
    var y = (t.flags & 128) !== 0;
    if (!u && !y) return (s && Cc(t, r, !1), an(e, t, d));
    ((u = t.stateNode), (Qm.current = t));
    var S =
      y && typeof r.getDerivedStateFromError != 'function' ? null : u.render();
    return (
      (t.flags |= 1),
      e !== null && y
        ? ((t.child = xr(t, e.child, null, d)), (t.child = xr(t, null, S, d)))
        : ut(e, t, S, d),
      (t.memoizedState = u.state),
      s && Cc(t, r, !0),
      t.child
    );
  }
  function kf(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? Sc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Sc(e, t.context, !1),
      ku(e, t.containerInfo));
  }
  function Sf(e, t, r, u, s) {
    return (vr(), hu(s), (t.flags |= 256), ut(e, t, r, u), t.child);
  }
  var Bu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Uu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ef(e, t, r) {
    var u = t.pendingProps,
      s = je.current,
      d = !1,
      y = (t.flags & 128) !== 0,
      S;
    if (
      ((S = y) ||
        (S = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
      S
        ? ((d = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (s |= 1),
      Le(je, s & 1),
      e === null)
    )
      return (
        pu(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === '$!'
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((y = u.children),
            (e = u.fallback),
            d
              ? ((u = t.mode),
                (d = t.child),
                (y = { mode: 'hidden', children: y }),
                (u & 1) === 0 && d !== null
                  ? ((d.childLanes = 0), (d.pendingProps = y))
                  : (d = Hl(y, u, 0, null)),
                (e = Yn(e, u, r, null)),
                (d.return = t),
                (e.return = t),
                (d.sibling = e),
                (t.child = d),
                (t.child.memoizedState = Uu(r)),
                (t.memoizedState = Bu),
                e)
              : bu(t, y))
      );
    if (((s = e.memoizedState), s !== null && ((S = s.dehydrated), S !== null)))
      return qm(e, t, y, u, S, s, r);
    if (d) {
      ((d = u.fallback), (y = t.mode), (s = e.child), (S = s.sibling));
      var C = { mode: 'hidden', children: u.children };
      return (
        (y & 1) === 0 && t.child !== s
          ? ((u = t.child),
            (u.childLanes = 0),
            (u.pendingProps = C),
            (t.deletions = null))
          : ((u = Ln(s, C)), (u.subtreeFlags = s.subtreeFlags & 14680064)),
        S !== null ? (d = Ln(S, d)) : ((d = Yn(d, y, r, null)), (d.flags |= 2)),
        (d.return = t),
        (u.return = t),
        (u.sibling = d),
        (t.child = u),
        (u = d),
        (d = t.child),
        (y = e.child.memoizedState),
        (y =
          y === null
            ? Uu(r)
            : {
                baseLanes: y.baseLanes | r,
                cachePool: null,
                transitions: y.transitions,
              }),
        (d.memoizedState = y),
        (d.childLanes = e.childLanes & ~r),
        (t.memoizedState = Bu),
        u
      );
    }
    return (
      (d = e.child),
      (e = d.sibling),
      (u = Ln(d, { mode: 'visible', children: u.children })),
      (t.mode & 1) === 0 && (u.lanes = r),
      (u.return = t),
      (u.sibling = null),
      e !== null &&
        ((r = t.deletions),
        r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
      (t.child = u),
      (t.memoizedState = null),
      u
    );
  }
  function bu(e, t) {
    return (
      (t = Hl({ mode: 'visible', children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function zl(e, t, r, u) {
    return (
      u !== null && hu(u),
      xr(t, e.child, null, r),
      (e = bu(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function qm(e, t, r, u, s, d, y) {
    if (r)
      return t.flags & 256
        ? ((t.flags &= -257), (u = Mu(Error(l(422)))), zl(e, t, y, u))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((d = u.fallback),
            (s = t.mode),
            (u = Hl({ mode: 'visible', children: u.children }, s, 0, null)),
            (d = Yn(d, s, y, null)),
            (d.flags |= 2),
            (u.return = t),
            (d.return = t),
            (u.sibling = d),
            (t.child = u),
            (t.mode & 1) !== 0 && xr(t, e.child, null, y),
            (t.child.memoizedState = Uu(y)),
            (t.memoizedState = Bu),
            d);
    if ((t.mode & 1) === 0) return zl(e, t, y, null);
    if (s.data === '$!') {
      if (((u = s.nextSibling && s.nextSibling.dataset), u)) var S = u.dgst;
      return (
        (u = S),
        (d = Error(l(419))),
        (u = Mu(d, u, void 0)),
        zl(e, t, y, u)
      );
    }
    if (((S = (y & e.childLanes) !== 0), ft || S)) {
      if (((u = Xe), u !== null)) {
        switch (y & -y) {
          case 4:
            s = 2;
            break;
          case 16:
            s = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            s = 32;
            break;
          case 536870912:
            s = 268435456;
            break;
          default:
            s = 0;
        }
        ((s = (s & (u.suspendedLanes | y)) !== 0 ? 0 : s),
          s !== 0 &&
            s !== d.retryLane &&
            ((d.retryLane = s), on(e, s), Vt(u, e, s, -1)));
      }
      return (ra(), (u = Mu(Error(l(421)))), zl(e, t, y, u));
    }
    return s.data === '$?'
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = og.bind(null, e)),
        (s._reactRetry = t),
        null)
      : ((e = d.treeContext),
        (St = kn(s.nextSibling)),
        (kt = t),
        (Fe = !0),
        (jt = null),
        e !== null &&
          ((It[zt++] = rn),
          (It[zt++] = ln),
          (It[zt++] = bn),
          (rn = e.id),
          (ln = e.overflow),
          (bn = t)),
        (t = bu(t, u.children)),
        (t.flags |= 4096),
        t);
  }
  function Cf(e, t, r) {
    e.lanes |= t;
    var u = e.alternate;
    (u !== null && (u.lanes |= t), vu(e.return, t, r));
  }
  function Vu(e, t, r, u, s) {
    var d = e.memoizedState;
    d === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: u,
          tail: r,
          tailMode: s,
        })
      : ((d.isBackwards = t),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = u),
        (d.tail = r),
        (d.tailMode = s));
  }
  function _f(e, t, r) {
    var u = t.pendingProps,
      s = u.revealOrder,
      d = u.tail;
    if ((ut(e, t, u.children, r), (u = je.current), (u & 2) !== 0))
      ((u = (u & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Cf(e, r, t);
          else if (e.tag === 19) Cf(e, r, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      u &= 1;
    }
    if ((Le(je, u), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (s) {
        case 'forwards':
          for (r = t.child, s = null; r !== null; )
            ((e = r.alternate),
              e !== null && El(e) === null && (s = r),
              (r = r.sibling));
          ((r = s),
            r === null
              ? ((s = t.child), (t.child = null))
              : ((s = r.sibling), (r.sibling = null)),
            Vu(t, !1, s, r, d));
          break;
        case 'backwards':
          for (r = null, s = t.child, t.child = null; s !== null; ) {
            if (((e = s.alternate), e !== null && El(e) === null)) {
              t.child = s;
              break;
            }
            ((e = s.sibling), (s.sibling = r), (r = s), (s = e));
          }
          Vu(t, !0, r, null, d);
          break;
        case 'together':
          Vu(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Rl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function an(e, t, r) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Qn |= t.lanes),
      (r & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(l(153));
    if (t.child !== null) {
      for (
        e = t.child, r = Ln(e, e.pendingProps), t.child = r, r.return = t;
        e.sibling !== null;

      )
        ((e = e.sibling),
          (r = r.sibling = Ln(e, e.pendingProps)),
          (r.return = t));
      r.sibling = null;
    }
    return t.child;
  }
  function Km(e, t, r) {
    switch (t.tag) {
      case 3:
        (kf(t), vr());
        break;
      case 5:
        jc(t);
        break;
      case 1:
        ct(t.type) && pl(t);
        break;
      case 4:
        ku(t, t.stateNode.containerInfo);
        break;
      case 10:
        var u = t.type._context,
          s = t.memoizedProps.value;
        (Le(xl, u._currentValue), (u._currentValue = s));
        break;
      case 13:
        if (((u = t.memoizedState), u !== null))
          return u.dehydrated !== null
            ? (Le(je, je.current & 1), (t.flags |= 128), null)
            : (r & t.child.childLanes) !== 0
              ? Ef(e, t, r)
              : (Le(je, je.current & 1),
                (e = an(e, t, r)),
                e !== null ? e.sibling : null);
        Le(je, je.current & 1);
        break;
      case 19:
        if (((u = (r & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (u) return _f(e, t, r);
          t.flags |= 128;
        }
        if (
          ((s = t.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          Le(je, je.current),
          u)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), vf(e, t, r));
    }
    return an(e, t, r);
  }
  var Pf, Hu, Tf, Nf;
  ((Pf = function (e, t) {
    for (var r = t.child; r !== null; ) {
      if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
      else if (r.tag !== 4 && r.child !== null) {
        ((r.child.return = r), (r = r.child));
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return;
        r = r.return;
      }
      ((r.sibling.return = r.return), (r = r.sibling));
    }
  }),
    (Hu = function () {}),
    (Tf = function (e, t, r, u) {
      var s = e.memoizedProps;
      if (s !== u) {
        ((e = t.stateNode), $n(qt.current));
        var d = null;
        switch (r) {
          case 'input':
            ((s = Fr(e, s)), (u = Fr(e, u)), (d = []));
            break;
          case 'select':
            ((s = w({}, s, { value: void 0 })),
              (u = w({}, u, { value: void 0 })),
              (d = []));
            break;
          case 'textarea':
            ((s = Ur(e, s)), (u = Ur(e, u)), (d = []));
            break;
          default:
            typeof s.onClick != 'function' &&
              typeof u.onClick == 'function' &&
              (e.onclick = cl);
        }
        Je(r, u);
        var y;
        r = null;
        for (I in s)
          if (!u.hasOwnProperty(I) && s.hasOwnProperty(I) && s[I] != null)
            if (I === 'style') {
              var S = s[I];
              for (y in S) S.hasOwnProperty(y) && (r || (r = {}), (r[y] = ''));
            } else
              I !== 'dangerouslySetInnerHTML' &&
                I !== 'children' &&
                I !== 'suppressContentEditableWarning' &&
                I !== 'suppressHydrationWarning' &&
                I !== 'autoFocus' &&
                (a.hasOwnProperty(I)
                  ? d || (d = [])
                  : (d = d || []).push(I, null));
        for (I in u) {
          var C = u[I];
          if (
            ((S = s?.[I]),
            u.hasOwnProperty(I) && C !== S && (C != null || S != null))
          )
            if (I === 'style')
              if (S) {
                for (y in S)
                  !S.hasOwnProperty(y) ||
                    (C && C.hasOwnProperty(y)) ||
                    (r || (r = {}), (r[y] = ''));
                for (y in C)
                  C.hasOwnProperty(y) &&
                    S[y] !== C[y] &&
                    (r || (r = {}), (r[y] = C[y]));
              } else (r || (d || (d = []), d.push(I, r)), (r = C));
            else
              I === 'dangerouslySetInnerHTML'
                ? ((C = C ? C.__html : void 0),
                  (S = S ? S.__html : void 0),
                  C != null && S !== C && (d = d || []).push(I, C))
                : I === 'children'
                  ? (typeof C != 'string' && typeof C != 'number') ||
                    (d = d || []).push(I, '' + C)
                  : I !== 'suppressContentEditableWarning' &&
                    I !== 'suppressHydrationWarning' &&
                    (a.hasOwnProperty(I)
                      ? (C != null && I === 'onScroll' && Me('scroll', e),
                        d || S === C || (d = []))
                      : (d = d || []).push(I, C));
        }
        r && (d = d || []).push('style', r);
        var I = d;
        (t.updateQueue = I) && (t.flags |= 4);
      }
    }),
    (Nf = function (e, t, r, u) {
      r !== u && (t.flags |= 4);
    }));
  function yi(e, t) {
    if (!Fe)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var r = null; t !== null; )
            (t.alternate !== null && (r = t), (t = t.sibling));
          r === null ? (e.tail = null) : (r.sibling = null);
          break;
        case 'collapsed':
          r = e.tail;
          for (var u = null; r !== null; )
            (r.alternate !== null && (u = r), (r = r.sibling));
          u === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (u.sibling = null);
      }
  }
  function it(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      u = 0;
    if (t)
      for (var s = e.child; s !== null; )
        ((r |= s.lanes | s.childLanes),
          (u |= s.subtreeFlags & 14680064),
          (u |= s.flags & 14680064),
          (s.return = e),
          (s = s.sibling));
    else
      for (s = e.child; s !== null; )
        ((r |= s.lanes | s.childLanes),
          (u |= s.subtreeFlags),
          (u |= s.flags),
          (s.return = e),
          (s = s.sibling));
    return ((e.subtreeFlags |= u), (e.childLanes = r), t);
  }
  function Xm(e, t, r) {
    var u = t.pendingProps;
    switch ((fu(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (it(t), null);
      case 1:
        return (ct(t.type) && dl(), it(t), null);
      case 3:
        return (
          (u = t.stateNode),
          Sr(),
          Ae(st),
          Ae(nt),
          Cu(),
          u.pendingContext &&
            ((u.context = u.pendingContext), (u.pendingContext = null)),
          (e === null || e.child === null) &&
            (yl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), jt !== null && (ea(jt), (jt = null)))),
          Hu(e, t),
          it(t),
          null
        );
      case 5:
        Su(t);
        var s = $n(di.current);
        if (((r = t.type), e !== null && t.stateNode != null))
          (Tf(e, t, r, u, s),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(l(166));
            return (it(t), null);
          }
          if (((e = $n(qt.current)), yl(t))) {
            ((u = t.stateNode), (r = t.type));
            var d = t.memoizedProps;
            switch (((u[Qt] = t), (u[ui] = d), (e = (t.mode & 1) !== 0), r)) {
              case 'dialog':
                (Me('cancel', u), Me('close', u));
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                Me('load', u);
                break;
              case 'video':
              case 'audio':
                for (s = 0; s < ii.length; s++) Me(ii[s], u);
                break;
              case 'source':
                Me('error', u);
                break;
              case 'img':
              case 'image':
              case 'link':
                (Me('error', u), Me('load', u));
                break;
              case 'details':
                Me('toggle', u);
                break;
              case 'input':
                (jr(u, d), Me('invalid', u));
                break;
              case 'select':
                ((u._wrapperState = { wasMultiple: !!d.multiple }),
                  Me('invalid', u));
                break;
              case 'textarea':
                (Ui(u, d), Me('invalid', u));
            }
            (Je(r, d), (s = null));
            for (var y in d)
              if (d.hasOwnProperty(y)) {
                var S = d[y];
                y === 'children'
                  ? typeof S == 'string'
                    ? u.textContent !== S &&
                      (d.suppressHydrationWarning !== !0 &&
                        sl(u.textContent, S, e),
                      (s = ['children', S]))
                    : typeof S == 'number' &&
                      u.textContent !== '' + S &&
                      (d.suppressHydrationWarning !== !0 &&
                        sl(u.textContent, S, e),
                      (s = ['children', '' + S]))
                  : a.hasOwnProperty(y) &&
                    S != null &&
                    y === 'onScroll' &&
                    Me('scroll', u);
              }
            switch (r) {
              case 'input':
                (Zt(u), Bi(u, d, !0));
                break;
              case 'textarea':
                (Zt(u), Vi(u));
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof d.onClick == 'function' && (u.onclick = cl);
            }
            ((u = s), (t.updateQueue = u), u !== null && (t.flags |= 4));
          } else {
            ((y = s.nodeType === 9 ? s : s.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = M(r)),
              e === 'http://www.w3.org/1999/xhtml'
                ? r === 'script'
                  ? ((e = y.createElement('div')),
                    (e.innerHTML = '<script><\/script>'),
                    (e = e.removeChild(e.firstChild)))
                  : typeof u.is == 'string'
                    ? (e = y.createElement(r, { is: u.is }))
                    : ((e = y.createElement(r)),
                      r === 'select' &&
                        ((y = e),
                        u.multiple
                          ? (y.multiple = !0)
                          : u.size && (y.size = u.size)))
                : (e = y.createElementNS(e, r)),
              (e[Qt] = t),
              (e[ui] = u),
              Pf(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((y = $t(r, u)), r)) {
                case 'dialog':
                  (Me('cancel', e), Me('close', e), (s = u));
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  (Me('load', e), (s = u));
                  break;
                case 'video':
                case 'audio':
                  for (s = 0; s < ii.length; s++) Me(ii[s], e);
                  s = u;
                  break;
                case 'source':
                  (Me('error', e), (s = u));
                  break;
                case 'img':
                case 'image':
                case 'link':
                  (Me('error', e), Me('load', e), (s = u));
                  break;
                case 'details':
                  (Me('toggle', e), (s = u));
                  break;
                case 'input':
                  (jr(e, u), (s = Fr(e, u)), Me('invalid', e));
                  break;
                case 'option':
                  s = u;
                  break;
                case 'select':
                  ((e._wrapperState = { wasMultiple: !!u.multiple }),
                    (s = w({}, u, { value: void 0 })),
                    Me('invalid', e));
                  break;
                case 'textarea':
                  (Ui(e, u), (s = Ur(e, u)), Me('invalid', e));
                  break;
                default:
                  s = u;
              }
              (Je(r, s), (S = s));
              for (d in S)
                if (S.hasOwnProperty(d)) {
                  var C = S[d];
                  d === 'style'
                    ? hn(e, C)
                    : d === 'dangerouslySetInnerHTML'
                      ? ((C = C ? C.__html : void 0), C != null && Se(e, C))
                      : d === 'children'
                        ? typeof C == 'string'
                          ? (r !== 'textarea' || C !== '') && _e(e, C)
                          : typeof C == 'number' && _e(e, '' + C)
                        : d !== 'suppressContentEditableWarning' &&
                          d !== 'suppressHydrationWarning' &&
                          d !== 'autoFocus' &&
                          (a.hasOwnProperty(d)
                            ? C != null && d === 'onScroll' && Me('scroll', e)
                            : C != null && A(e, d, C, y));
                }
              switch (r) {
                case 'input':
                  (Zt(e), Bi(e, u, !1));
                  break;
                case 'textarea':
                  (Zt(e), Vi(e));
                  break;
                case 'option':
                  u.value != null && e.setAttribute('value', '' + ke(u.value));
                  break;
                case 'select':
                  ((e.multiple = !!u.multiple),
                    (d = u.value),
                    d != null
                      ? pn(e, !!u.multiple, d, !1)
                      : u.defaultValue != null &&
                        pn(e, !!u.multiple, u.defaultValue, !0));
                  break;
                default:
                  typeof s.onClick == 'function' && (e.onclick = cl);
              }
              switch (r) {
                case 'button':
                case 'input':
                case 'select':
                case 'textarea':
                  u = !!u.autoFocus;
                  break e;
                case 'img':
                  u = !0;
                  break e;
                default:
                  u = !1;
              }
            }
            u && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (it(t), null);
      case 6:
        if (e && t.stateNode != null) Nf(e, t, e.memoizedProps, u);
        else {
          if (typeof u != 'string' && t.stateNode === null) throw Error(l(166));
          if (((r = $n(di.current)), $n(qt.current), yl(t))) {
            if (
              ((u = t.stateNode),
              (r = t.memoizedProps),
              (u[Qt] = t),
              (d = u.nodeValue !== r) && ((e = kt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  sl(u.nodeValue, r, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    sl(u.nodeValue, r, (e.mode & 1) !== 0);
              }
            d && (t.flags |= 4);
          } else
            ((u = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(u)),
              (u[Qt] = t),
              (t.stateNode = u));
        }
        return (it(t), null);
      case 13:
        if (
          (Ae(je),
          (u = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Fe && St !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (zc(), vr(), (t.flags |= 98560), (d = !1));
          else if (((d = yl(t)), u !== null && u.dehydrated !== null)) {
            if (e === null) {
              if (!d) throw Error(l(318));
              if (
                ((d = t.memoizedState),
                (d = d !== null ? d.dehydrated : null),
                !d)
              )
                throw Error(l(317));
              d[Qt] = t;
            } else
              (vr(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (it(t), (d = !1));
          } else (jt !== null && (ea(jt), (jt = null)), (d = !0));
          if (!d) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = r), t)
          : ((u = u !== null),
            u !== (e !== null && e.memoizedState !== null) &&
              u &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (je.current & 1) !== 0
                  ? qe === 0 && (qe = 3)
                  : ra())),
            t.updateQueue !== null && (t.flags |= 4),
            it(t),
            null);
      case 4:
        return (
          Sr(),
          Hu(e, t),
          e === null && li(t.stateNode.containerInfo),
          it(t),
          null
        );
      case 10:
        return (yu(t.type._context), it(t), null);
      case 17:
        return (ct(t.type) && dl(), it(t), null);
      case 19:
        if ((Ae(je), (d = t.memoizedState), d === null)) return (it(t), null);
        if (((u = (t.flags & 128) !== 0), (y = d.rendering), y === null))
          if (u) yi(d, !1);
          else {
            if (qe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((y = El(e)), y !== null)) {
                  for (
                    t.flags |= 128,
                      yi(d, !1),
                      u = y.updateQueue,
                      u !== null && ((t.updateQueue = u), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      u = r,
                      r = t.child;
                    r !== null;

                  )
                    ((d = r),
                      (e = u),
                      (d.flags &= 14680066),
                      (y = d.alternate),
                      y === null
                        ? ((d.childLanes = 0),
                          (d.lanes = e),
                          (d.child = null),
                          (d.subtreeFlags = 0),
                          (d.memoizedProps = null),
                          (d.memoizedState = null),
                          (d.updateQueue = null),
                          (d.dependencies = null),
                          (d.stateNode = null))
                        : ((d.childLanes = y.childLanes),
                          (d.lanes = y.lanes),
                          (d.child = y.child),
                          (d.subtreeFlags = 0),
                          (d.deletions = null),
                          (d.memoizedProps = y.memoizedProps),
                          (d.memoizedState = y.memoizedState),
                          (d.updateQueue = y.updateQueue),
                          (d.type = y.type),
                          (e = y.dependencies),
                          (d.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (r = r.sibling));
                  return (Le(je, (je.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            d.tail !== null &&
              be() > Pr &&
              ((t.flags |= 128), (u = !0), yi(d, !1), (t.lanes = 4194304));
          }
        else {
          if (!u)
            if (((e = El(y)), e !== null)) {
              if (
                ((t.flags |= 128),
                (u = !0),
                (r = e.updateQueue),
                r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                yi(d, !0),
                d.tail === null &&
                  d.tailMode === 'hidden' &&
                  !y.alternate &&
                  !Fe)
              )
                return (it(t), null);
            } else
              2 * be() - d.renderingStartTime > Pr &&
                r !== 1073741824 &&
                ((t.flags |= 128), (u = !0), yi(d, !1), (t.lanes = 4194304));
          d.isBackwards
            ? ((y.sibling = t.child), (t.child = y))
            : ((r = d.last),
              r !== null ? (r.sibling = y) : (t.child = y),
              (d.last = y));
        }
        return d.tail !== null
          ? ((t = d.tail),
            (d.rendering = t),
            (d.tail = t.sibling),
            (d.renderingStartTime = be()),
            (t.sibling = null),
            (r = je.current),
            Le(je, u ? (r & 1) | 2 : r & 1),
            t)
          : (it(t), null);
      case 22:
      case 23:
        return (
          na(),
          (u = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== u && (t.flags |= 8192),
          u && (t.mode & 1) !== 0
            ? (Et & 1073741824) !== 0 &&
              (it(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : it(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(l(156, t.tag));
  }
  function Ym(e, t) {
    switch ((fu(t), t.tag)) {
      case 1:
        return (
          ct(t.type) && dl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Sr(),
          Ae(st),
          Ae(nt),
          Cu(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return (Su(t), null);
      case 13:
        if (
          (Ae(je), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(l(340));
          vr();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (Ae(je), null);
      case 4:
        return (Sr(), null);
      case 10:
        return (yu(t.type._context), null);
      case 22:
      case 23:
        return (na(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ll = !1,
    lt = !1,
    Gm = typeof WeakSet == 'function' ? WeakSet : Set,
    J = null;
  function Cr(e, t) {
    var r = e.ref;
    if (r !== null)
      if (typeof r == 'function')
        try {
          r(null);
        } catch (u) {
          Ue(e, t, u);
        }
      else r.current = null;
  }
  function $u(e, t, r) {
    try {
      r();
    } catch (u) {
      Ue(e, t, u);
    }
  }
  var If = !1;
  function Jm(e, t) {
    if (((nu = Ji), (e = oc()), Ko(e))) {
      if ('selectionStart' in e)
        var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var u = r.getSelection && r.getSelection();
          if (u && u.rangeCount !== 0) {
            r = u.anchorNode;
            var s = u.anchorOffset,
              d = u.focusNode;
            u = u.focusOffset;
            try {
              (r.nodeType, d.nodeType);
            } catch {
              r = null;
              break e;
            }
            var y = 0,
              S = -1,
              C = -1,
              I = 0,
              B = 0,
              U = e,
              j = null;
            t: for (;;) {
              for (
                var K;
                U !== r || (s !== 0 && U.nodeType !== 3) || (S = y + s),
                  U !== d || (u !== 0 && U.nodeType !== 3) || (C = y + u),
                  U.nodeType === 3 && (y += U.nodeValue.length),
                  (K = U.firstChild) !== null;

              )
                ((j = U), (U = K));
              for (;;) {
                if (U === e) break t;
                if (
                  (j === r && ++I === s && (S = y),
                  j === d && ++B === u && (C = y),
                  (K = U.nextSibling) !== null)
                )
                  break;
                ((U = j), (j = U.parentNode));
              }
              U = K;
            }
            r = S === -1 || C === -1 ? null : { start: S, end: C };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (
      ru = { focusedElem: e, selectionRange: r }, Ji = !1, J = t;
      J !== null;

    )
      if (((t = J), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (J = e));
      else
        for (; J !== null; ) {
          t = J;
          try {
            var ee = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (ee !== null) {
                    var ne = ee.memoizedProps,
                      Ve = ee.memoizedState,
                      T = t.stateNode,
                      _ = T.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? ne : Bt(t.type, ne),
                        Ve,
                      );
                    T.__reactInternalSnapshotBeforeUpdate = _;
                  }
                  break;
                case 3:
                  var N = t.stateNode.containerInfo;
                  N.nodeType === 1
                    ? (N.textContent = '')
                    : N.nodeType === 9 &&
                      N.documentElement &&
                      N.removeChild(N.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(l(163));
              }
          } catch (H) {
            Ue(t, t.return, H);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (J = e));
            break;
          }
          J = t.return;
        }
    return ((ee = If), (If = !1), ee);
  }
  function vi(e, t, r) {
    var u = t.updateQueue;
    if (((u = u !== null ? u.lastEffect : null), u !== null)) {
      var s = (u = u.next);
      do {
        if ((s.tag & e) === e) {
          var d = s.destroy;
          ((s.destroy = void 0), d !== void 0 && $u(t, r, d));
        }
        s = s.next;
      } while (s !== u);
    }
  }
  function Ol(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var r = (t = t.next);
      do {
        if ((r.tag & e) === e) {
          var u = r.create;
          r.destroy = u();
        }
        r = r.next;
      } while (r !== t);
    }
  }
  function Wu(e) {
    var t = e.ref;
    if (t !== null) {
      var r = e.stateNode;
      switch (e.tag) {
        case 5:
          e = r;
          break;
        default:
          e = r;
      }
      typeof t == 'function' ? t(e) : (t.current = e);
    }
  }
  function zf(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), zf(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Qt],
          delete t[ui],
          delete t[uu],
          delete t[Dm],
          delete t[Mm])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function Rf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Lf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Rf(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Qu(e, t, r) {
    var u = e.tag;
    if (u === 5 || u === 6)
      ((e = e.stateNode),
        t
          ? r.nodeType === 8
            ? r.parentNode.insertBefore(e, t)
            : r.insertBefore(e, t)
          : (r.nodeType === 8
              ? ((t = r.parentNode), t.insertBefore(e, r))
              : ((t = r), t.appendChild(e)),
            (r = r._reactRootContainer),
            r != null || t.onclick !== null || (t.onclick = cl)));
    else if (u !== 4 && ((e = e.child), e !== null))
      for (Qu(e, t, r), e = e.sibling; e !== null; )
        (Qu(e, t, r), (e = e.sibling));
  }
  function qu(e, t, r) {
    var u = e.tag;
    if (u === 5 || u === 6)
      ((e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e));
    else if (u !== 4 && ((e = e.child), e !== null))
      for (qu(e, t, r), e = e.sibling; e !== null; )
        (qu(e, t, r), (e = e.sibling));
  }
  var Ze = null,
    Ut = !1;
  function Tn(e, t, r) {
    for (r = r.child; r !== null; ) (Of(e, t, r), (r = r.sibling));
  }
  function Of(e, t, r) {
    if (Wt && typeof Wt.onCommitFiberUnmount == 'function')
      try {
        Wt.onCommitFiberUnmount(Qi, r);
      } catch {}
    switch (r.tag) {
      case 5:
        lt || Cr(r, t);
      case 6:
        var u = Ze,
          s = Ut;
        ((Ze = null),
          Tn(e, t, r),
          (Ze = u),
          (Ut = s),
          Ze !== null &&
            (Ut
              ? ((e = Ze),
                (r = r.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(r)
                  : e.removeChild(r))
              : Ze.removeChild(r.stateNode)));
        break;
      case 18:
        Ze !== null &&
          (Ut
            ? ((e = Ze),
              (r = r.stateNode),
              e.nodeType === 8
                ? ou(e.parentNode, r)
                : e.nodeType === 1 && ou(e, r),
              Yr(e))
            : ou(Ze, r.stateNode));
        break;
      case 4:
        ((u = Ze),
          (s = Ut),
          (Ze = r.stateNode.containerInfo),
          (Ut = !0),
          Tn(e, t, r),
          (Ze = u),
          (Ut = s));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !lt &&
          ((u = r.updateQueue), u !== null && ((u = u.lastEffect), u !== null))
        ) {
          s = u = u.next;
          do {
            var d = s,
              y = d.destroy;
            ((d = d.tag),
              y !== void 0 && ((d & 2) !== 0 || (d & 4) !== 0) && $u(r, t, y),
              (s = s.next));
          } while (s !== u);
        }
        Tn(e, t, r);
        break;
      case 1:
        if (
          !lt &&
          (Cr(r, t),
          (u = r.stateNode),
          typeof u.componentWillUnmount == 'function')
        )
          try {
            ((u.props = r.memoizedProps),
              (u.state = r.memoizedState),
              u.componentWillUnmount());
          } catch (S) {
            Ue(r, t, S);
          }
        Tn(e, t, r);
        break;
      case 21:
        Tn(e, t, r);
        break;
      case 22:
        r.mode & 1
          ? ((lt = (u = lt) || r.memoizedState !== null), Tn(e, t, r), (lt = u))
          : Tn(e, t, r);
        break;
      default:
        Tn(e, t, r);
    }
  }
  function Df(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      (r === null && (r = e.stateNode = new Gm()),
        t.forEach(function (u) {
          var s = ug.bind(null, e, u);
          r.has(u) || (r.add(u), u.then(s, s));
        }));
    }
  }
  function bt(e, t) {
    var r = t.deletions;
    if (r !== null)
      for (var u = 0; u < r.length; u++) {
        var s = r[u];
        try {
          var d = e,
            y = t,
            S = y;
          e: for (; S !== null; ) {
            switch (S.tag) {
              case 5:
                ((Ze = S.stateNode), (Ut = !1));
                break e;
              case 3:
                ((Ze = S.stateNode.containerInfo), (Ut = !0));
                break e;
              case 4:
                ((Ze = S.stateNode.containerInfo), (Ut = !0));
                break e;
            }
            S = S.return;
          }
          if (Ze === null) throw Error(l(160));
          (Of(d, y, s), (Ze = null), (Ut = !1));
          var C = s.alternate;
          (C !== null && (C.return = null), (s.return = null));
        } catch (I) {
          Ue(s, t, I);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) (Mf(t, e), (t = t.sibling));
  }
  function Mf(e, t) {
    var r = e.alternate,
      u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((bt(t, e), Xt(e), u & 4)) {
          try {
            (vi(3, e, e.return), Ol(3, e));
          } catch (ne) {
            Ue(e, e.return, ne);
          }
          try {
            vi(5, e, e.return);
          } catch (ne) {
            Ue(e, e.return, ne);
          }
        }
        break;
      case 1:
        (bt(t, e), Xt(e), u & 512 && r !== null && Cr(r, r.return));
        break;
      case 5:
        if (
          (bt(t, e),
          Xt(e),
          u & 512 && r !== null && Cr(r, r.return),
          e.flags & 32)
        ) {
          var s = e.stateNode;
          try {
            _e(s, '');
          } catch (ne) {
            Ue(e, e.return, ne);
          }
        }
        if (u & 4 && ((s = e.stateNode), s != null)) {
          var d = e.memoizedProps,
            y = r !== null ? r.memoizedProps : d,
            S = e.type,
            C = e.updateQueue;
          if (((e.updateQueue = null), C !== null))
            try {
              (S === 'input' &&
                d.type === 'radio' &&
                d.name != null &&
                Br(s, d),
                $t(S, y));
              var I = $t(S, d);
              for (y = 0; y < C.length; y += 2) {
                var B = C[y],
                  U = C[y + 1];
                B === 'style'
                  ? hn(s, U)
                  : B === 'dangerouslySetInnerHTML'
                    ? Se(s, U)
                    : B === 'children'
                      ? _e(s, U)
                      : A(s, B, U, I);
              }
              switch (S) {
                case 'input':
                  nr(s, d);
                  break;
                case 'textarea':
                  bi(s, d);
                  break;
                case 'select':
                  var j = s._wrapperState.wasMultiple;
                  s._wrapperState.wasMultiple = !!d.multiple;
                  var K = d.value;
                  K != null
                    ? pn(s, !!d.multiple, K, !1)
                    : j !== !!d.multiple &&
                      (d.defaultValue != null
                        ? pn(s, !!d.multiple, d.defaultValue, !0)
                        : pn(s, !!d.multiple, d.multiple ? [] : '', !1));
              }
              s[ui] = d;
            } catch (ne) {
              Ue(e, e.return, ne);
            }
        }
        break;
      case 6:
        if ((bt(t, e), Xt(e), u & 4)) {
          if (e.stateNode === null) throw Error(l(162));
          ((s = e.stateNode), (d = e.memoizedProps));
          try {
            s.nodeValue = d;
          } catch (ne) {
            Ue(e, e.return, ne);
          }
        }
        break;
      case 3:
        if (
          (bt(t, e), Xt(e), u & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            Yr(t.containerInfo);
          } catch (ne) {
            Ue(e, e.return, ne);
          }
        break;
      case 4:
        (bt(t, e), Xt(e));
        break;
      case 13:
        (bt(t, e),
          Xt(e),
          (s = e.child),
          s.flags & 8192 &&
            ((d = s.memoizedState !== null),
            (s.stateNode.isHidden = d),
            !d ||
              (s.alternate !== null && s.alternate.memoizedState !== null) ||
              (Yu = be())),
          u & 4 && Df(e));
        break;
      case 22:
        if (
          ((B = r !== null && r.memoizedState !== null),
          e.mode & 1 ? ((lt = (I = lt) || B), bt(t, e), (lt = I)) : bt(t, e),
          Xt(e),
          u & 8192)
        ) {
          if (
            ((I = e.memoizedState !== null),
            (e.stateNode.isHidden = I) && !B && (e.mode & 1) !== 0)
          )
            for (J = e, B = e.child; B !== null; ) {
              for (U = J = B; J !== null; ) {
                switch (((j = J), (K = j.child), j.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    vi(4, j, j.return);
                    break;
                  case 1:
                    Cr(j, j.return);
                    var ee = j.stateNode;
                    if (typeof ee.componentWillUnmount == 'function') {
                      ((u = j), (r = j.return));
                      try {
                        ((t = u),
                          (ee.props = t.memoizedProps),
                          (ee.state = t.memoizedState),
                          ee.componentWillUnmount());
                      } catch (ne) {
                        Ue(u, r, ne);
                      }
                    }
                    break;
                  case 5:
                    Cr(j, j.return);
                    break;
                  case 22:
                    if (j.memoizedState !== null) {
                      jf(U);
                      continue;
                    }
                }
                K !== null ? ((K.return = j), (J = K)) : jf(U);
              }
              B = B.sibling;
            }
          e: for (B = null, U = e; ; ) {
            if (U.tag === 5) {
              if (B === null) {
                B = U;
                try {
                  ((s = U.stateNode),
                    I
                      ? ((d = s.style),
                        typeof d.setProperty == 'function'
                          ? d.setProperty('display', 'none', 'important')
                          : (d.display = 'none'))
                      : ((S = U.stateNode),
                        (C = U.memoizedProps.style),
                        (y =
                          C != null && C.hasOwnProperty('display')
                            ? C.display
                            : null),
                        (S.style.display = Nt('display', y))));
                } catch (ne) {
                  Ue(e, e.return, ne);
                }
              }
            } else if (U.tag === 6) {
              if (B === null)
                try {
                  U.stateNode.nodeValue = I ? '' : U.memoizedProps;
                } catch (ne) {
                  Ue(e, e.return, ne);
                }
            } else if (
              ((U.tag !== 22 && U.tag !== 23) ||
                U.memoizedState === null ||
                U === e) &&
              U.child !== null
            ) {
              ((U.child.return = U), (U = U.child));
              continue;
            }
            if (U === e) break e;
            for (; U.sibling === null; ) {
              if (U.return === null || U.return === e) break e;
              (B === U && (B = null), (U = U.return));
            }
            (B === U && (B = null),
              (U.sibling.return = U.return),
              (U = U.sibling));
          }
        }
        break;
      case 19:
        (bt(t, e), Xt(e), u & 4 && Df(e));
        break;
      case 21:
        break;
      default:
        (bt(t, e), Xt(e));
    }
  }
  function Xt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (Rf(r)) {
              var u = r;
              break e;
            }
            r = r.return;
          }
          throw Error(l(160));
        }
        switch (u.tag) {
          case 5:
            var s = u.stateNode;
            u.flags & 32 && (_e(s, ''), (u.flags &= -33));
            var d = Lf(e);
            qu(e, d, s);
            break;
          case 3:
          case 4:
            var y = u.stateNode.containerInfo,
              S = Lf(e);
            Qu(e, S, y);
            break;
          default:
            throw Error(l(161));
        }
      } catch (C) {
        Ue(e, e.return, C);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Zm(e, t, r) {
    ((J = e), Af(e));
  }
  function Af(e, t, r) {
    for (var u = (e.mode & 1) !== 0; J !== null; ) {
      var s = J,
        d = s.child;
      if (s.tag === 22 && u) {
        var y = s.memoizedState !== null || Ll;
        if (!y) {
          var S = s.alternate,
            C = (S !== null && S.memoizedState !== null) || lt;
          S = Ll;
          var I = lt;
          if (((Ll = y), (lt = C) && !I))
            for (J = s; J !== null; )
              ((y = J),
                (C = y.child),
                y.tag === 22 && y.memoizedState !== null
                  ? Bf(s)
                  : C !== null
                    ? ((C.return = y), (J = C))
                    : Bf(s));
          for (; d !== null; ) ((J = d), Af(d), (d = d.sibling));
          ((J = s), (Ll = S), (lt = I));
        }
        Ff(e);
      } else
        (s.subtreeFlags & 8772) !== 0 && d !== null
          ? ((d.return = s), (J = d))
          : Ff(e);
    }
  }
  function Ff(e) {
    for (; J !== null; ) {
      var t = J;
      if ((t.flags & 8772) !== 0) {
        var r = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                lt || Ol(5, t);
                break;
              case 1:
                var u = t.stateNode;
                if (t.flags & 4 && !lt)
                  if (r === null) u.componentDidMount();
                  else {
                    var s =
                      t.elementType === t.type
                        ? r.memoizedProps
                        : Bt(t.type, r.memoizedProps);
                    u.componentDidUpdate(
                      s,
                      r.memoizedState,
                      u.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var d = t.updateQueue;
                d !== null && Fc(t, d, u);
                break;
              case 3:
                var y = t.updateQueue;
                if (y !== null) {
                  if (((r = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        r = t.child.stateNode;
                        break;
                      case 1:
                        r = t.child.stateNode;
                    }
                  Fc(t, y, r);
                }
                break;
              case 5:
                var S = t.stateNode;
                if (r === null && t.flags & 4) {
                  r = S;
                  var C = t.memoizedProps;
                  switch (t.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      C.autoFocus && r.focus();
                      break;
                    case 'img':
                      C.src && (r.src = C.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var I = t.alternate;
                  if (I !== null) {
                    var B = I.memoizedState;
                    if (B !== null) {
                      var U = B.dehydrated;
                      U !== null && Yr(U);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(l(163));
            }
          lt || (t.flags & 512 && Wu(t));
        } catch (j) {
          Ue(t, t.return, j);
        }
      }
      if (t === e) {
        J = null;
        break;
      }
      if (((r = t.sibling), r !== null)) {
        ((r.return = t.return), (J = r));
        break;
      }
      J = t.return;
    }
  }
  function jf(e) {
    for (; J !== null; ) {
      var t = J;
      if (t === e) {
        J = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        ((r.return = t.return), (J = r));
        break;
      }
      J = t.return;
    }
  }
  function Bf(e) {
    for (; J !== null; ) {
      var t = J;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              Ol(4, t);
            } catch (C) {
              Ue(t, r, C);
            }
            break;
          case 1:
            var u = t.stateNode;
            if (typeof u.componentDidMount == 'function') {
              var s = t.return;
              try {
                u.componentDidMount();
              } catch (C) {
                Ue(t, s, C);
              }
            }
            var d = t.return;
            try {
              Wu(t);
            } catch (C) {
              Ue(t, d, C);
            }
            break;
          case 5:
            var y = t.return;
            try {
              Wu(t);
            } catch (C) {
              Ue(t, y, C);
            }
        }
      } catch (C) {
        Ue(t, t.return, C);
      }
      if (t === e) {
        J = null;
        break;
      }
      var S = t.sibling;
      if (S !== null) {
        ((S.return = t.return), (J = S));
        break;
      }
      J = t.return;
    }
  }
  var eg = Math.ceil,
    Dl = Q.ReactCurrentDispatcher,
    Ku = Q.ReactCurrentOwner,
    Ot = Q.ReactCurrentBatchConfig,
    Pe = 0,
    Xe = null,
    $e = null,
    et = 0,
    Et = 0,
    _r = Sn(0),
    qe = 0,
    xi = null,
    Qn = 0,
    Ml = 0,
    Xu = 0,
    wi = null,
    dt = null,
    Yu = 0,
    Pr = 1 / 0,
    sn = null,
    Al = !1,
    Gu = null,
    Nn = null,
    Fl = !1,
    In = null,
    jl = 0,
    ki = 0,
    Ju = null,
    Bl = -1,
    Ul = 0;
  function at() {
    return (Pe & 6) !== 0 ? be() : Bl !== -1 ? Bl : (Bl = be());
  }
  function zn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (Pe & 2) !== 0 && et !== 0
        ? et & -et
        : Fm.transition !== null
          ? (Ul === 0 && (Ul = Rs()), Ul)
          : ((e = Re),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : Us(e.type))),
            e);
  }
  function Vt(e, t, r, u) {
    if (50 < ki) throw ((ki = 0), (Ju = null), Error(l(185)));
    (Wr(e, r, u),
      ((Pe & 2) === 0 || e !== Xe) &&
        (e === Xe && ((Pe & 2) === 0 && (Ml |= r), qe === 4 && Rn(e, et)),
        pt(e, u),
        r === 1 &&
          Pe === 0 &&
          (t.mode & 1) === 0 &&
          ((Pr = be() + 500), hl && Cn())));
  }
  function pt(e, t) {
    var r = e.callbackNode;
    Fh(e, t);
    var u = Xi(e, e === Xe ? et : 0);
    if (u === 0)
      (r !== null && Ns(r), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = u & -u), e.callbackPriority !== t)) {
      if ((r != null && Ns(r), t === 1))
        (e.tag === 0 ? Am(bf.bind(null, e)) : _c(bf.bind(null, e)),
          Lm(function () {
            (Pe & 6) === 0 && Cn();
          }),
          (r = null));
      else {
        switch (Ls(u)) {
          case 1:
            r = Ro;
            break;
          case 4:
            r = Is;
            break;
          case 16:
            r = Wi;
            break;
          case 536870912:
            r = zs;
            break;
          default:
            r = Wi;
        }
        r = Xf(r, Uf.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = r));
    }
  }
  function Uf(e, t) {
    if (((Bl = -1), (Ul = 0), (Pe & 6) !== 0)) throw Error(l(327));
    var r = e.callbackNode;
    if (Tr() && e.callbackNode !== r) return null;
    var u = Xi(e, e === Xe ? et : 0);
    if (u === 0) return null;
    if ((u & 30) !== 0 || (u & e.expiredLanes) !== 0 || t) t = bl(e, u);
    else {
      t = u;
      var s = Pe;
      Pe |= 2;
      var d = Hf();
      (Xe !== e || et !== t) && ((sn = null), (Pr = be() + 500), Kn(e, t));
      do
        try {
          rg();
          break;
        } catch (S) {
          Vf(e, S);
        }
      while (!0);
      (gu(),
        (Dl.current = d),
        (Pe = s),
        $e !== null ? (t = 0) : ((Xe = null), (et = 0), (t = qe)));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((s = Lo(e)), s !== 0 && ((u = s), (t = Zu(e, s)))),
        t === 1)
      )
        throw ((r = xi), Kn(e, 0), Rn(e, u), pt(e, be()), r);
      if (t === 6) Rn(e, u);
      else {
        if (
          ((s = e.current.alternate),
          (u & 30) === 0 &&
            !tg(s) &&
            ((t = bl(e, u)),
            t === 2 && ((d = Lo(e)), d !== 0 && ((u = d), (t = Zu(e, d)))),
            t === 1))
        )
          throw ((r = xi), Kn(e, 0), Rn(e, u), pt(e, be()), r);
        switch (((e.finishedWork = s), (e.finishedLanes = u), t)) {
          case 0:
          case 1:
            throw Error(l(345));
          case 2:
            Xn(e, dt, sn);
            break;
          case 3:
            if (
              (Rn(e, u),
              (u & 130023424) === u && ((t = Yu + 500 - be()), 10 < t))
            ) {
              if (Xi(e, 0) !== 0) break;
              if (((s = e.suspendedLanes), (s & u) !== u)) {
                (at(), (e.pingedLanes |= e.suspendedLanes & s));
                break;
              }
              e.timeoutHandle = lu(Xn.bind(null, e, dt, sn), t);
              break;
            }
            Xn(e, dt, sn);
            break;
          case 4:
            if ((Rn(e, u), (u & 4194240) === u)) break;
            for (t = e.eventTimes, s = -1; 0 < u; ) {
              var y = 31 - At(u);
              ((d = 1 << y), (y = t[y]), y > s && (s = y), (u &= ~d));
            }
            if (
              ((u = s),
              (u = be() - u),
              (u =
                (120 > u
                  ? 120
                  : 480 > u
                    ? 480
                    : 1080 > u
                      ? 1080
                      : 1920 > u
                        ? 1920
                        : 3e3 > u
                          ? 3e3
                          : 4320 > u
                            ? 4320
                            : 1960 * eg(u / 1960)) - u),
              10 < u)
            ) {
              e.timeoutHandle = lu(Xn.bind(null, e, dt, sn), u);
              break;
            }
            Xn(e, dt, sn);
            break;
          case 5:
            Xn(e, dt, sn);
            break;
          default:
            throw Error(l(329));
        }
      }
    }
    return (pt(e, be()), e.callbackNode === r ? Uf.bind(null, e) : null);
  }
  function Zu(e, t) {
    var r = wi;
    return (
      e.current.memoizedState.isDehydrated && (Kn(e, t).flags |= 256),
      (e = bl(e, t)),
      e !== 2 && ((t = dt), (dt = r), t !== null && ea(t)),
      e
    );
  }
  function ea(e) {
    dt === null ? (dt = e) : dt.push.apply(dt, e);
  }
  function tg(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && ((r = r.stores), r !== null))
          for (var u = 0; u < r.length; u++) {
            var s = r[u],
              d = s.getSnapshot;
            s = s.value;
            try {
              if (!Ft(d(), s)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
        ((r.return = t), (t = r));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Rn(e, t) {
    for (
      t &= ~Xu,
        t &= ~Ml,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var r = 31 - At(t),
        u = 1 << r;
      ((e[r] = -1), (t &= ~u));
    }
  }
  function bf(e) {
    if ((Pe & 6) !== 0) throw Error(l(327));
    Tr();
    var t = Xi(e, 0);
    if ((t & 1) === 0) return (pt(e, be()), null);
    var r = bl(e, t);
    if (e.tag !== 0 && r === 2) {
      var u = Lo(e);
      u !== 0 && ((t = u), (r = Zu(e, u)));
    }
    if (r === 1) throw ((r = xi), Kn(e, 0), Rn(e, t), pt(e, be()), r);
    if (r === 6) throw Error(l(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Xn(e, dt, sn),
      pt(e, be()),
      null
    );
  }
  function ta(e, t) {
    var r = Pe;
    Pe |= 1;
    try {
      return e(t);
    } finally {
      ((Pe = r), Pe === 0 && ((Pr = be() + 500), hl && Cn()));
    }
  }
  function qn(e) {
    In !== null && In.tag === 0 && (Pe & 6) === 0 && Tr();
    var t = Pe;
    Pe |= 1;
    var r = Ot.transition,
      u = Re;
    try {
      if (((Ot.transition = null), (Re = 1), e)) return e();
    } finally {
      ((Re = u), (Ot.transition = r), (Pe = t), (Pe & 6) === 0 && Cn());
    }
  }
  function na() {
    ((Et = _r.current), Ae(_r));
  }
  function Kn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var r = e.timeoutHandle;
    if ((r !== -1 && ((e.timeoutHandle = -1), Rm(r)), $e !== null))
      for (r = $e.return; r !== null; ) {
        var u = r;
        switch ((fu(u), u.tag)) {
          case 1:
            ((u = u.type.childContextTypes), u != null && dl());
            break;
          case 3:
            (Sr(), Ae(st), Ae(nt), Cu());
            break;
          case 5:
            Su(u);
            break;
          case 4:
            Sr();
            break;
          case 13:
            Ae(je);
            break;
          case 19:
            Ae(je);
            break;
          case 10:
            yu(u.type._context);
            break;
          case 22:
          case 23:
            na();
        }
        r = r.return;
      }
    if (
      ((Xe = e),
      ($e = e = Ln(e.current, null)),
      (et = Et = t),
      (qe = 0),
      (xi = null),
      (Xu = Ml = Qn = 0),
      (dt = wi = null),
      Hn !== null)
    ) {
      for (t = 0; t < Hn.length; t++)
        if (((r = Hn[t]), (u = r.interleaved), u !== null)) {
          r.interleaved = null;
          var s = u.next,
            d = r.pending;
          if (d !== null) {
            var y = d.next;
            ((d.next = s), (u.next = y));
          }
          r.pending = u;
        }
      Hn = null;
    }
    return e;
  }
  function Vf(e, t) {
    do {
      var r = $e;
      try {
        if ((gu(), (Cl.current = Nl), _l)) {
          for (var u = Be.memoizedState; u !== null; ) {
            var s = u.queue;
            (s !== null && (s.pending = null), (u = u.next));
          }
          _l = !1;
        }
        if (
          ((Wn = 0),
          (Ke = Qe = Be = null),
          (pi = !1),
          (hi = 0),
          (Ku.current = null),
          r === null || r.return === null)
        ) {
          ((qe = 1), (xi = t), ($e = null));
          break;
        }
        e: {
          var d = e,
            y = r.return,
            S = r,
            C = t;
          if (
            ((t = et),
            (S.flags |= 32768),
            C !== null && typeof C == 'object' && typeof C.then == 'function')
          ) {
            var I = C,
              B = S,
              U = B.tag;
            if ((B.mode & 1) === 0 && (U === 0 || U === 11 || U === 15)) {
              var j = B.alternate;
              j
                ? ((B.updateQueue = j.updateQueue),
                  (B.memoizedState = j.memoizedState),
                  (B.lanes = j.lanes))
                : ((B.updateQueue = null), (B.memoizedState = null));
            }
            var K = pf(y);
            if (K !== null) {
              ((K.flags &= -257),
                hf(K, y, S, d, t),
                K.mode & 1 && df(d, I, t),
                (t = K),
                (C = I));
              var ee = t.updateQueue;
              if (ee === null) {
                var ne = new Set();
                (ne.add(C), (t.updateQueue = ne));
              } else ee.add(C);
              break e;
            } else {
              if ((t & 1) === 0) {
                (df(d, I, t), ra());
                break e;
              }
              C = Error(l(426));
            }
          } else if (Fe && S.mode & 1) {
            var Ve = pf(y);
            if (Ve !== null) {
              ((Ve.flags & 65536) === 0 && (Ve.flags |= 256),
                hf(Ve, y, S, d, t),
                hu(Er(C, S)));
              break e;
            }
          }
          ((d = C = Er(C, S)),
            qe !== 4 && (qe = 2),
            wi === null ? (wi = [d]) : wi.push(d),
            (d = y));
          do {
            switch (d.tag) {
              case 3:
                ((d.flags |= 65536), (t &= -t), (d.lanes |= t));
                var T = cf(d, C, t);
                Ac(d, T);
                break e;
              case 1:
                S = C;
                var _ = d.type,
                  N = d.stateNode;
                if (
                  (d.flags & 128) === 0 &&
                  (typeof _.getDerivedStateFromError == 'function' ||
                    (N !== null &&
                      typeof N.componentDidCatch == 'function' &&
                      (Nn === null || !Nn.has(N))))
                ) {
                  ((d.flags |= 65536), (t &= -t), (d.lanes |= t));
                  var H = ff(d, S, t);
                  Ac(d, H);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Wf(r);
      } catch (ie) {
        ((t = ie), $e === r && r !== null && ($e = r = r.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Hf() {
    var e = Dl.current;
    return ((Dl.current = Nl), e === null ? Nl : e);
  }
  function ra() {
    ((qe === 0 || qe === 3 || qe === 2) && (qe = 4),
      Xe === null ||
        ((Qn & 268435455) === 0 && (Ml & 268435455) === 0) ||
        Rn(Xe, et));
  }
  function bl(e, t) {
    var r = Pe;
    Pe |= 2;
    var u = Hf();
    (Xe !== e || et !== t) && ((sn = null), Kn(e, t));
    do
      try {
        ng();
        break;
      } catch (s) {
        Vf(e, s);
      }
    while (!0);
    if ((gu(), (Pe = r), (Dl.current = u), $e !== null)) throw Error(l(261));
    return ((Xe = null), (et = 0), qe);
  }
  function ng() {
    for (; $e !== null; ) $f($e);
  }
  function rg() {
    for (; $e !== null && !Nh(); ) $f($e);
  }
  function $f(e) {
    var t = Kf(e.alternate, e, Et);
    ((e.memoizedProps = e.pendingProps),
      t === null ? Wf(e) : ($e = t),
      (Ku.current = null));
  }
  function Wf(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((r = Xm(r, t, Et)), r !== null)) {
          $e = r;
          return;
        }
      } else {
        if (((r = Ym(r, t)), r !== null)) {
          ((r.flags &= 32767), ($e = r));
          return;
        }
        if (e !== null)
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((qe = 6), ($e = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        $e = t;
        return;
      }
      $e = t = e;
    } while (t !== null);
    qe === 0 && (qe = 5);
  }
  function Xn(e, t, r) {
    var u = Re,
      s = Ot.transition;
    try {
      ((Ot.transition = null), (Re = 1), ig(e, t, r, u));
    } finally {
      ((Ot.transition = s), (Re = u));
    }
    return null;
  }
  function ig(e, t, r, u) {
    do Tr();
    while (In !== null);
    if ((Pe & 6) !== 0) throw Error(l(327));
    r = e.finishedWork;
    var s = e.finishedLanes;
    if (r === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
      throw Error(l(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var d = r.lanes | r.childLanes;
    if (
      (jh(e, d),
      e === Xe && (($e = Xe = null), (et = 0)),
      ((r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0) ||
        Fl ||
        ((Fl = !0),
        Xf(Wi, function () {
          return (Tr(), null);
        })),
      (d = (r.flags & 15990) !== 0),
      (r.subtreeFlags & 15990) !== 0 || d)
    ) {
      ((d = Ot.transition), (Ot.transition = null));
      var y = Re;
      Re = 1;
      var S = Pe;
      ((Pe |= 4),
        (Ku.current = null),
        Jm(e, r),
        Mf(r, e),
        Cm(ru),
        (Ji = !!nu),
        (ru = nu = null),
        (e.current = r),
        Zm(r),
        Ih(),
        (Pe = S),
        (Re = y),
        (Ot.transition = d));
    } else e.current = r;
    if (
      (Fl && ((Fl = !1), (In = e), (jl = s)),
      (d = e.pendingLanes),
      d === 0 && (Nn = null),
      Lh(r.stateNode),
      pt(e, be()),
      t !== null)
    )
      for (u = e.onRecoverableError, r = 0; r < t.length; r++)
        ((s = t[r]), u(s.value, { componentStack: s.stack, digest: s.digest }));
    if (Al) throw ((Al = !1), (e = Gu), (Gu = null), e);
    return (
      (jl & 1) !== 0 && e.tag !== 0 && Tr(),
      (d = e.pendingLanes),
      (d & 1) !== 0 ? (e === Ju ? ki++ : ((ki = 0), (Ju = e))) : (ki = 0),
      Cn(),
      null
    );
  }
  function Tr() {
    if (In !== null) {
      var e = Ls(jl),
        t = Ot.transition,
        r = Re;
      try {
        if (((Ot.transition = null), (Re = 16 > e ? 16 : e), In === null))
          var u = !1;
        else {
          if (((e = In), (In = null), (jl = 0), (Pe & 6) !== 0))
            throw Error(l(331));
          var s = Pe;
          for (Pe |= 4, J = e.current; J !== null; ) {
            var d = J,
              y = d.child;
            if ((J.flags & 16) !== 0) {
              var S = d.deletions;
              if (S !== null) {
                for (var C = 0; C < S.length; C++) {
                  var I = S[C];
                  for (J = I; J !== null; ) {
                    var B = J;
                    switch (B.tag) {
                      case 0:
                      case 11:
                      case 15:
                        vi(8, B, d);
                    }
                    var U = B.child;
                    if (U !== null) ((U.return = B), (J = U));
                    else
                      for (; J !== null; ) {
                        B = J;
                        var j = B.sibling,
                          K = B.return;
                        if ((zf(B), B === I)) {
                          J = null;
                          break;
                        }
                        if (j !== null) {
                          ((j.return = K), (J = j));
                          break;
                        }
                        J = K;
                      }
                  }
                }
                var ee = d.alternate;
                if (ee !== null) {
                  var ne = ee.child;
                  if (ne !== null) {
                    ee.child = null;
                    do {
                      var Ve = ne.sibling;
                      ((ne.sibling = null), (ne = Ve));
                    } while (ne !== null);
                  }
                }
                J = d;
              }
            }
            if ((d.subtreeFlags & 2064) !== 0 && y !== null)
              ((y.return = d), (J = y));
            else
              e: for (; J !== null; ) {
                if (((d = J), (d.flags & 2048) !== 0))
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vi(9, d, d.return);
                  }
                var T = d.sibling;
                if (T !== null) {
                  ((T.return = d.return), (J = T));
                  break e;
                }
                J = d.return;
              }
          }
          var _ = e.current;
          for (J = _; J !== null; ) {
            y = J;
            var N = y.child;
            if ((y.subtreeFlags & 2064) !== 0 && N !== null)
              ((N.return = y), (J = N));
            else
              e: for (y = _; J !== null; ) {
                if (((S = J), (S.flags & 2048) !== 0))
                  try {
                    switch (S.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ol(9, S);
                    }
                  } catch (ie) {
                    Ue(S, S.return, ie);
                  }
                if (S === y) {
                  J = null;
                  break e;
                }
                var H = S.sibling;
                if (H !== null) {
                  ((H.return = S.return), (J = H));
                  break e;
                }
                J = S.return;
              }
          }
          if (
            ((Pe = s),
            Cn(),
            Wt && typeof Wt.onPostCommitFiberRoot == 'function')
          )
            try {
              Wt.onPostCommitFiberRoot(Qi, e);
            } catch {}
          u = !0;
        }
        return u;
      } finally {
        ((Re = r), (Ot.transition = t));
      }
    }
    return !1;
  }
  function Qf(e, t, r) {
    ((t = Er(r, t)),
      (t = cf(e, t, 1)),
      (e = Pn(e, t, 1)),
      (t = at()),
      e !== null && (Wr(e, 1, t), pt(e, t)));
  }
  function Ue(e, t, r) {
    if (e.tag === 3) Qf(e, e, r);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Qf(t, e, r);
          break;
        } else if (t.tag === 1) {
          var u = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof u.componentDidCatch == 'function' &&
              (Nn === null || !Nn.has(u)))
          ) {
            ((e = Er(r, e)),
              (e = ff(t, e, 1)),
              (t = Pn(t, e, 1)),
              (e = at()),
              t !== null && (Wr(t, 1, e), pt(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function lg(e, t, r) {
    var u = e.pingCache;
    (u !== null && u.delete(t),
      (t = at()),
      (e.pingedLanes |= e.suspendedLanes & r),
      Xe === e &&
        (et & r) === r &&
        (qe === 4 || (qe === 3 && (et & 130023424) === et && 500 > be() - Yu)
          ? Kn(e, 0)
          : (Xu |= r)),
      pt(e, t));
  }
  function qf(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Ki), (Ki <<= 1), (Ki & 130023424) === 0 && (Ki = 4194304)));
    var r = at();
    ((e = on(e, t)), e !== null && (Wr(e, t, r), pt(e, r)));
  }
  function og(e) {
    var t = e.memoizedState,
      r = 0;
    (t !== null && (r = t.retryLane), qf(e, r));
  }
  function ug(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var u = e.stateNode,
          s = e.memoizedState;
        s !== null && (r = s.retryLane);
        break;
      case 19:
        u = e.stateNode;
        break;
      default:
        throw Error(l(314));
    }
    (u !== null && u.delete(t), qf(e, r));
  }
  var Kf;
  Kf = function (e, t, r) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || st.current) ft = !0;
      else {
        if ((e.lanes & r) === 0 && (t.flags & 128) === 0)
          return ((ft = !1), Km(e, t, r));
        ft = (e.flags & 131072) !== 0;
      }
    else ((ft = !1), Fe && (t.flags & 1048576) !== 0 && Pc(t, gl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var u = t.type;
        (Rl(e, t), (e = t.pendingProps));
        var s = mr(t, nt.current);
        (kr(t, r), (s = Tu(null, t, u, e, s, r)));
        var d = Nu();
        return (
          (t.flags |= 1),
          typeof s == 'object' &&
          s !== null &&
          typeof s.render == 'function' &&
          s.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              ct(u) ? ((d = !0), pl(t)) : (d = !1),
              (t.memoizedState =
                s.state !== null && s.state !== void 0 ? s.state : null),
              wu(t),
              (s.updater = Il),
              (t.stateNode = s),
              (s._reactInternals = t),
              Du(t, u, e, r),
              (t = ju(null, t, u, !0, d, r)))
            : ((t.tag = 0), Fe && d && cu(t), ut(null, t, s, r), (t = t.child)),
          t
        );
      case 16:
        u = t.elementType;
        e: {
          switch (
            (Rl(e, t),
            (e = t.pendingProps),
            (s = u._init),
            (u = s(u._payload)),
            (t.type = u),
            (s = t.tag = sg(u)),
            (e = Bt(u, e)),
            s)
          ) {
            case 0:
              t = Fu(null, t, u, e, r);
              break e;
            case 1:
              t = wf(null, t, u, e, r);
              break e;
            case 11:
              t = mf(null, t, u, e, r);
              break e;
            case 14:
              t = gf(null, t, u, Bt(u.type, e), r);
              break e;
          }
          throw Error(l(306, u, ''));
        }
        return t;
      case 0:
        return (
          (u = t.type),
          (s = t.pendingProps),
          (s = t.elementType === u ? s : Bt(u, s)),
          Fu(e, t, u, s, r)
        );
      case 1:
        return (
          (u = t.type),
          (s = t.pendingProps),
          (s = t.elementType === u ? s : Bt(u, s)),
          wf(e, t, u, s, r)
        );
      case 3:
        e: {
          if ((kf(t), e === null)) throw Error(l(387));
          ((u = t.pendingProps),
            (d = t.memoizedState),
            (s = d.element),
            Mc(e, t),
            Sl(t, u, null, r));
          var y = t.memoizedState;
          if (((u = y.element), d.isDehydrated))
            if (
              ((d = {
                element: u,
                isDehydrated: !1,
                cache: y.cache,
                pendingSuspenseBoundaries: y.pendingSuspenseBoundaries,
                transitions: y.transitions,
              }),
              (t.updateQueue.baseState = d),
              (t.memoizedState = d),
              t.flags & 256)
            ) {
              ((s = Er(Error(l(423)), t)), (t = Sf(e, t, u, r, s)));
              break e;
            } else if (u !== s) {
              ((s = Er(Error(l(424)), t)), (t = Sf(e, t, u, r, s)));
              break e;
            } else
              for (
                St = kn(t.stateNode.containerInfo.firstChild),
                  kt = t,
                  Fe = !0,
                  jt = null,
                  r = Oc(t, null, u, r),
                  t.child = r;
                r;

              )
                ((r.flags = (r.flags & -3) | 4096), (r = r.sibling));
          else {
            if ((vr(), u === s)) {
              t = an(e, t, r);
              break e;
            }
            ut(e, t, u, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          jc(t),
          e === null && pu(t),
          (u = t.type),
          (s = t.pendingProps),
          (d = e !== null ? e.memoizedProps : null),
          (y = s.children),
          iu(u, s) ? (y = null) : d !== null && iu(u, d) && (t.flags |= 32),
          xf(e, t),
          ut(e, t, y, r),
          t.child
        );
      case 6:
        return (e === null && pu(t), null);
      case 13:
        return Ef(e, t, r);
      case 4:
        return (
          ku(t, t.stateNode.containerInfo),
          (u = t.pendingProps),
          e === null ? (t.child = xr(t, null, u, r)) : ut(e, t, u, r),
          t.child
        );
      case 11:
        return (
          (u = t.type),
          (s = t.pendingProps),
          (s = t.elementType === u ? s : Bt(u, s)),
          mf(e, t, u, s, r)
        );
      case 7:
        return (ut(e, t, t.pendingProps, r), t.child);
      case 8:
        return (ut(e, t, t.pendingProps.children, r), t.child);
      case 12:
        return (ut(e, t, t.pendingProps.children, r), t.child);
      case 10:
        e: {
          if (
            ((u = t.type._context),
            (s = t.pendingProps),
            (d = t.memoizedProps),
            (y = s.value),
            Le(xl, u._currentValue),
            (u._currentValue = y),
            d !== null)
          )
            if (Ft(d.value, y)) {
              if (d.children === s.children && !st.current) {
                t = an(e, t, r);
                break e;
              }
            } else
              for (d = t.child, d !== null && (d.return = t); d !== null; ) {
                var S = d.dependencies;
                if (S !== null) {
                  y = d.child;
                  for (var C = S.firstContext; C !== null; ) {
                    if (C.context === u) {
                      if (d.tag === 1) {
                        ((C = un(-1, r & -r)), (C.tag = 2));
                        var I = d.updateQueue;
                        if (I !== null) {
                          I = I.shared;
                          var B = I.pending;
                          (B === null
                            ? (C.next = C)
                            : ((C.next = B.next), (B.next = C)),
                            (I.pending = C));
                        }
                      }
                      ((d.lanes |= r),
                        (C = d.alternate),
                        C !== null && (C.lanes |= r),
                        vu(d.return, r, t),
                        (S.lanes |= r));
                      break;
                    }
                    C = C.next;
                  }
                } else if (d.tag === 10) y = d.type === t.type ? null : d.child;
                else if (d.tag === 18) {
                  if (((y = d.return), y === null)) throw Error(l(341));
                  ((y.lanes |= r),
                    (S = y.alternate),
                    S !== null && (S.lanes |= r),
                    vu(y, r, t),
                    (y = d.sibling));
                } else y = d.child;
                if (y !== null) y.return = d;
                else
                  for (y = d; y !== null; ) {
                    if (y === t) {
                      y = null;
                      break;
                    }
                    if (((d = y.sibling), d !== null)) {
                      ((d.return = y.return), (y = d));
                      break;
                    }
                    y = y.return;
                  }
                d = y;
              }
          (ut(e, t, s.children, r), (t = t.child));
        }
        return t;
      case 9:
        return (
          (s = t.type),
          (u = t.pendingProps.children),
          kr(t, r),
          (s = Rt(s)),
          (u = u(s)),
          (t.flags |= 1),
          ut(e, t, u, r),
          t.child
        );
      case 14:
        return (
          (u = t.type),
          (s = Bt(u, t.pendingProps)),
          (s = Bt(u.type, s)),
          gf(e, t, u, s, r)
        );
      case 15:
        return yf(e, t, t.type, t.pendingProps, r);
      case 17:
        return (
          (u = t.type),
          (s = t.pendingProps),
          (s = t.elementType === u ? s : Bt(u, s)),
          Rl(e, t),
          (t.tag = 1),
          ct(u) ? ((e = !0), pl(t)) : (e = !1),
          kr(t, r),
          af(t, u, s),
          Du(t, u, s, r),
          ju(null, t, u, !0, e, r)
        );
      case 19:
        return _f(e, t, r);
      case 22:
        return vf(e, t, r);
    }
    throw Error(l(156, t.tag));
  };
  function Xf(e, t) {
    return Ts(e, t);
  }
  function ag(e, t, r, u) {
    ((this.tag = e),
      (this.key = r),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = u),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Dt(e, t, r, u) {
    return new ag(e, t, r, u);
  }
  function ia(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function sg(e) {
    if (typeof e == 'function') return ia(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Z)) return 11;
      if (e === ue) return 14;
    }
    return 2;
  }
  function Ln(e, t) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = Dt(e.tag, t, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = t),
          (r.type = e.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = e.flags & 14680064),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (r.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      r
    );
  }
  function Vl(e, t, r, u, s, d) {
    var y = 2;
    if (((u = e), typeof e == 'function')) ia(e) && (y = 1);
    else if (typeof e == 'string') y = 5;
    else
      e: switch (e) {
        case te:
          return Yn(r.children, s, d, t);
        case ce:
          ((y = 8), (s |= 8));
          break;
        case ge:
          return (
            (e = Dt(12, r, t, s | 2)),
            (e.elementType = ge),
            (e.lanes = d),
            e
          );
        case G:
          return ((e = Dt(13, r, t, s)), (e.elementType = G), (e.lanes = d), e);
        case X:
          return ((e = Dt(19, r, t, s)), (e.elementType = X), (e.lanes = d), e);
        case xe:
          return Hl(r, s, d, t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case ve:
                y = 10;
                break e;
              case re:
                y = 9;
                break e;
              case Z:
                y = 11;
                break e;
              case ue:
                y = 14;
                break e;
              case Ce:
                ((y = 16), (u = null));
                break e;
            }
          throw Error(l(130, e == null ? e : typeof e, ''));
      }
    return (
      (t = Dt(y, r, t, s)),
      (t.elementType = e),
      (t.type = u),
      (t.lanes = d),
      t
    );
  }
  function Yn(e, t, r, u) {
    return ((e = Dt(7, e, u, t)), (e.lanes = r), e);
  }
  function Hl(e, t, r, u) {
    return (
      (e = Dt(22, e, u, t)),
      (e.elementType = xe),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function la(e, t, r) {
    return ((e = Dt(6, e, null, t)), (e.lanes = r), e);
  }
  function oa(e, t, r) {
    return (
      (t = Dt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function cg(e, t, r, u, s) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Oo(0)),
      (this.expirationTimes = Oo(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Oo(0)),
      (this.identifierPrefix = u),
      (this.onRecoverableError = s),
      (this.mutableSourceEagerHydrationData = null));
  }
  function ua(e, t, r, u, s, d, y, S, C) {
    return (
      (e = new cg(e, t, r, S, C)),
      t === 1 ? ((t = 1), d === !0 && (t |= 8)) : (t = 0),
      (d = Dt(3, null, null, t)),
      (e.current = d),
      (d.stateNode = e),
      (d.memoizedState = {
        element: u,
        isDehydrated: r,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      wu(d),
      e
    );
  }
  function fg(e, t, r) {
    var u =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: D,
      key: u == null ? null : '' + u,
      children: e,
      containerInfo: t,
      implementation: r,
    };
  }
  function Yf(e) {
    if (!e) return En;
    e = e._reactInternals;
    e: {
      if (jn(e) !== e || e.tag !== 1) throw Error(l(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (ct(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(l(171));
    }
    if (e.tag === 1) {
      var r = e.type;
      if (ct(r)) return Ec(e, r, t);
    }
    return t;
  }
  function Gf(e, t, r, u, s, d, y, S, C) {
    return (
      (e = ua(r, u, !0, e, s, d, y, S, C)),
      (e.context = Yf(null)),
      (r = e.current),
      (u = at()),
      (s = zn(r)),
      (d = un(u, s)),
      (d.callback = t ?? null),
      Pn(r, d, s),
      (e.current.lanes = s),
      Wr(e, s, u),
      pt(e, u),
      e
    );
  }
  function $l(e, t, r, u) {
    var s = t.current,
      d = at(),
      y = zn(s);
    return (
      (r = Yf(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = un(d, y)),
      (t.payload = { element: e }),
      (u = u === void 0 ? null : u),
      u !== null && (t.callback = u),
      (e = Pn(s, t, y)),
      e !== null && (Vt(e, s, y, d), kl(e, s, y)),
      y
    );
  }
  function Wl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Jf(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function aa(e, t) {
    (Jf(e, t), (e = e.alternate) && Jf(e, t));
  }
  function dg() {
    return null;
  }
  var Zf =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function sa(e) {
    this._internalRoot = e;
  }
  ((Ql.prototype.render = sa.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(l(409));
      $l(e, t, null, null);
    }),
    (Ql.prototype.unmount = sa.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (qn(function () {
            $l(null, e, null, null);
          }),
            (t[tn] = null));
        }
      }));
  function Ql(e) {
    this._internalRoot = e;
  }
  Ql.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Ms();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < vn.length && t !== 0 && t < vn[r].priority; r++);
      (vn.splice(r, 0, e), r === 0 && js(e));
    }
  };
  function ca(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function ql(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function ed() {}
  function pg(e, t, r, u, s) {
    if (s) {
      if (typeof u == 'function') {
        var d = u;
        u = function () {
          var I = Wl(y);
          d.call(I);
        };
      }
      var y = Gf(t, u, e, 0, null, !1, !1, '', ed);
      return (
        (e._reactRootContainer = y),
        (e[tn] = y.current),
        li(e.nodeType === 8 ? e.parentNode : e),
        qn(),
        y
      );
    }
    for (; (s = e.lastChild); ) e.removeChild(s);
    if (typeof u == 'function') {
      var S = u;
      u = function () {
        var I = Wl(C);
        S.call(I);
      };
    }
    var C = ua(e, 0, !1, null, null, !1, !1, '', ed);
    return (
      (e._reactRootContainer = C),
      (e[tn] = C.current),
      li(e.nodeType === 8 ? e.parentNode : e),
      qn(function () {
        $l(t, C, r, u);
      }),
      C
    );
  }
  function Kl(e, t, r, u, s) {
    var d = r._reactRootContainer;
    if (d) {
      var y = d;
      if (typeof s == 'function') {
        var S = s;
        s = function () {
          var C = Wl(y);
          S.call(C);
        };
      }
      $l(t, y, e, s);
    } else y = pg(r, t, e, s, u);
    return Wl(y);
  }
  ((Os = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = $r(t.pendingLanes);
          r !== 0 &&
            (Do(t, r | 1),
            pt(t, be()),
            (Pe & 6) === 0 && ((Pr = be() + 500), Cn()));
        }
        break;
      case 13:
        (qn(function () {
          var u = on(e, 1);
          if (u !== null) {
            var s = at();
            Vt(u, e, 1, s);
          }
        }),
          aa(e, 1));
    }
  }),
    (Mo = function (e) {
      if (e.tag === 13) {
        var t = on(e, 134217728);
        if (t !== null) {
          var r = at();
          Vt(t, e, 134217728, r);
        }
        aa(e, 134217728);
      }
    }),
    (Ds = function (e) {
      if (e.tag === 13) {
        var t = zn(e),
          r = on(e, t);
        if (r !== null) {
          var u = at();
          Vt(r, e, t, u);
        }
        aa(e, t);
      }
    }),
    (Ms = function () {
      return Re;
    }),
    (As = function (e, t) {
      var r = Re;
      try {
        return ((Re = e), t());
      } finally {
        Re = r;
      }
    }),
    (To = function (e, t, r) {
      switch (t) {
        case 'input':
          if ((nr(e, r), (t = r.name), r.type === 'radio' && t != null)) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll(
                'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
              ),
                t = 0;
              t < r.length;
              t++
            ) {
              var u = r[t];
              if (u !== e && u.form === e.form) {
                var s = fl(u);
                if (!s) throw Error(l(90));
                (ji(u), nr(u, s));
              }
            }
          }
          break;
        case 'textarea':
          bi(e, r);
          break;
        case 'select':
          ((t = r.value), t != null && pn(e, !!r.multiple, t, !1));
      }
    }),
    (ws = ta),
    (ks = qn));
  var hg = { usingClientEntryPoint: !1, Events: [ai, pr, fl, vs, xs, ta] },
    Si = {
      findFiberByHostInstance: Bn,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    mg = {
      bundleType: Si.bundleType,
      version: Si.version,
      rendererPackageName: Si.rendererPackageName,
      rendererConfig: Si.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Q.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = _s(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Si.findFiberByHostInstance || dg,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Xl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xl.isDisabled && Xl.supportsFiber)
      try {
        ((Qi = Xl.inject(mg)), (Wt = Xl));
      } catch {}
  }
  return (
    (ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hg),
    (ht.createPortal = function (e, t) {
      var r =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ca(t)) throw Error(l(200));
      return fg(e, t, null, r);
    }),
    (ht.createRoot = function (e, t) {
      if (!ca(e)) throw Error(l(299));
      var r = !1,
        u = '',
        s = Zf;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
        (t = ua(e, 1, !1, null, null, r, !1, u, s)),
        (e[tn] = t.current),
        li(e.nodeType === 8 ? e.parentNode : e),
        new sa(t)
      );
    }),
    (ht.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function'
          ? Error(l(188))
          : ((e = Object.keys(e).join(',')), Error(l(268, e)));
      return ((e = _s(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (ht.flushSync = function (e) {
      return qn(e);
    }),
    (ht.hydrate = function (e, t, r) {
      if (!ql(t)) throw Error(l(200));
      return Kl(null, e, t, !0, r);
    }),
    (ht.hydrateRoot = function (e, t, r) {
      if (!ca(e)) throw Error(l(405));
      var u = (r != null && r.hydratedSources) || null,
        s = !1,
        d = '',
        y = Zf;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (s = !0),
          r.identifierPrefix !== void 0 && (d = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (y = r.onRecoverableError)),
        (t = Gf(t, null, e, 1, r ?? null, s, !1, d, y)),
        (e[tn] = t.current),
        li(e),
        u)
      )
        for (e = 0; e < u.length; e++)
          ((r = u[e]),
            (s = r._getVersion),
            (s = s(r._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [r, s])
              : t.mutableSourceEagerHydrationData.push(r, s));
      return new Ql(t);
    }),
    (ht.render = function (e, t, r) {
      if (!ql(t)) throw Error(l(200));
      return Kl(null, e, t, !1, r);
    }),
    (ht.unmountComponentAtNode = function (e) {
      if (!ql(e)) throw Error(l(40));
      return e._reactRootContainer
        ? (qn(function () {
            Kl(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[tn] = null));
            });
          }),
          !0)
        : !1;
    }),
    (ht.unstable_batchedUpdates = ta),
    (ht.unstable_renderSubtreeIntoContainer = function (e, t, r, u) {
      if (!ql(r)) throw Error(l(200));
      if (e == null || e._reactInternals === void 0) throw Error(l(38));
      return Kl(e, t, r, !1, u);
    }),
    (ht.version = '18.3.1-next-f1338f8080-20240426'),
    ht
  );
}
var ad;
function gp() {
  if (ad) return pa.exports;
  ad = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return (n(), (pa.exports = Cg()), pa.exports);
}
var sd;
function _g() {
  if (sd) return Yl;
  sd = 1;
  var n = gp();
  return ((Yl.createRoot = n.createRoot), (Yl.hydrateRoot = n.hydrateRoot), Yl);
}
var Pg = _g();
const Tg = ho(Pg);
gp();
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ro() {
  return (
    (ro = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var i = 1; i < arguments.length; i++) {
            var l = arguments[i];
            for (var o in l)
              Object.prototype.hasOwnProperty.call(l, o) && (n[o] = l[o]);
          }
          return n;
        }),
    ro.apply(this, arguments)
  );
}
var Mn;
(function (n) {
  ((n.Pop = 'POP'), (n.Push = 'PUSH'), (n.Replace = 'REPLACE'));
})(Mn || (Mn = {}));
const cd = 'popstate';
function Ng(n) {
  n === void 0 && (n = {});
  function i(o, a) {
    let { pathname: c, search: f, hash: p } = o.location;
    return Da(
      '',
      { pathname: c, search: f, hash: p },
      (a.state && a.state.usr) || null,
      (a.state && a.state.key) || 'default',
    );
  }
  function l(o, a) {
    return typeof a == 'string' ? a : vp(a);
  }
  return zg(i, l, null, n);
}
function yt(n, i) {
  if (n === !1 || n === null || typeof n > 'u') throw new Error(i);
}
function yp(n, i) {
  if (!n) {
    typeof console < 'u' && console.warn(i);
    try {
      throw new Error(i);
    } catch {}
  }
}
function Ig() {
  return Math.random().toString(36).substr(2, 8);
}
function fd(n, i) {
  return { usr: n.state, key: n.key, idx: i };
}
function Da(n, i, l, o) {
  return (
    l === void 0 && (l = null),
    ro(
      { pathname: typeof n == 'string' ? n : n.pathname, search: '', hash: '' },
      typeof i == 'string' ? go(i) : i,
      { state: l, key: (i && i.key) || o || Ig() },
    )
  );
}
function vp(n) {
  let { pathname: i = '/', search: l = '', hash: o = '' } = n;
  return (
    l && l !== '?' && (i += l.charAt(0) === '?' ? l : '?' + l),
    o && o !== '#' && (i += o.charAt(0) === '#' ? o : '#' + o),
    i
  );
}
function go(n) {
  let i = {};
  if (n) {
    let l = n.indexOf('#');
    l >= 0 && ((i.hash = n.substr(l)), (n = n.substr(0, l)));
    let o = n.indexOf('?');
    (o >= 0 && ((i.search = n.substr(o)), (n = n.substr(0, o))),
      n && (i.pathname = n));
  }
  return i;
}
function zg(n, i, l, o) {
  o === void 0 && (o = {});
  let { window: a = document.defaultView, v5Compat: c = !1 } = o,
    f = a.history,
    p = Mn.Pop,
    h = null,
    m = g();
  m == null && ((m = 0), f.replaceState(ro({}, f.state, { idx: m }), ''));
  function g() {
    return (f.state || { idx: null }).idx;
  }
  function v() {
    p = Mn.Pop;
    let R = g(),
      L = R == null ? null : R - m;
    ((m = R), h && h({ action: p, location: z.location, delta: L }));
  }
  function k(R, L) {
    p = Mn.Push;
    let V = Da(z.location, R, L);
    m = g() + 1;
    let A = fd(V, m),
      Q = z.createHref(V);
    try {
      f.pushState(A, '', Q);
    } catch (Y) {
      if (Y instanceof DOMException && Y.name === 'DataCloneError') throw Y;
      a.location.assign(Q);
    }
    c && h && h({ action: p, location: z.location, delta: 1 });
  }
  function x(R, L) {
    p = Mn.Replace;
    let V = Da(z.location, R, L);
    m = g();
    let A = fd(V, m),
      Q = z.createHref(V);
    (f.replaceState(A, '', Q),
      c && h && h({ action: p, location: z.location, delta: 0 }));
  }
  function O(R) {
    let L = a.location.origin !== 'null' ? a.location.origin : a.location.href,
      V = typeof R == 'string' ? R : vp(R);
    return (
      (V = V.replace(/ $/, '%20')),
      yt(
        L,
        'No window.location.(origin|href) available to create URL for href: ' +
          V,
      ),
      new URL(V, L)
    );
  }
  let z = {
    get action() {
      return p;
    },
    get location() {
      return n(a, f);
    },
    listen(R) {
      if (h) throw new Error('A history only accepts one active listener');
      return (
        a.addEventListener(cd, v),
        (h = R),
        () => {
          (a.removeEventListener(cd, v), (h = null));
        }
      );
    },
    createHref(R) {
      return i(a, R);
    },
    createURL: O,
    encodeLocation(R) {
      let L = O(R);
      return { pathname: L.pathname, search: L.search, hash: L.hash };
    },
    push: k,
    replace: x,
    go(R) {
      return f.go(R);
    },
  };
  return z;
}
var dd;
(function (n) {
  ((n.data = 'data'),
    (n.deferred = 'deferred'),
    (n.redirect = 'redirect'),
    (n.error = 'error'));
})(dd || (dd = {}));
function Rg(n, i, l) {
  return (l === void 0 && (l = '/'), Lg(n, i, l));
}
function Lg(n, i, l, o) {
  let a = typeof i == 'string' ? go(i) : i,
    c = kp(a.pathname || '/', l);
  if (c == null) return null;
  let f = xp(n);
  Og(f);
  let p = null;
  for (let h = 0; p == null && h < f.length; ++h) {
    let m = Wg(c);
    p = Vg(f[h], m);
  }
  return p;
}
function xp(n, i, l, o) {
  (i === void 0 && (i = []),
    l === void 0 && (l = []),
    o === void 0 && (o = ''));
  let a = (c, f, p) => {
    let h = {
      relativePath: p === void 0 ? c.path || '' : p,
      caseSensitive: c.caseSensitive === !0,
      childrenIndex: f,
      route: c,
    };
    h.relativePath.startsWith('/') &&
      (yt(
        h.relativePath.startsWith(o),
        'Absolute route path "' +
          h.relativePath +
          '" nested under path ' +
          ('"' + o + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.',
      ),
      (h.relativePath = h.relativePath.slice(o.length)));
    let m = Rr([o, h.relativePath]),
      g = l.concat(h);
    (c.children &&
      c.children.length > 0 &&
      (yt(
        c.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + m + '".'),
      ),
      xp(c.children, i, g, m)),
      !(c.path == null && !c.index) &&
        i.push({ path: m, score: Ug(m, c.index), routesMeta: g }));
  };
  return (
    n.forEach((c, f) => {
      var p;
      if (c.path === '' || !((p = c.path) != null && p.includes('?'))) a(c, f);
      else for (let h of wp(c.path)) a(c, f, h);
    }),
    i
  );
}
function wp(n) {
  let i = n.split('/');
  if (i.length === 0) return [];
  let [l, ...o] = i,
    a = l.endsWith('?'),
    c = l.replace(/\?$/, '');
  if (o.length === 0) return a ? [c, ''] : [c];
  let f = wp(o.join('/')),
    p = [];
  return (
    p.push(...f.map((h) => (h === '' ? c : [c, h].join('/')))),
    a && p.push(...f),
    p.map((h) => (n.startsWith('/') && h === '' ? '/' : h))
  );
}
function Og(n) {
  n.sort((i, l) =>
    i.score !== l.score
      ? l.score - i.score
      : bg(
          i.routesMeta.map((o) => o.childrenIndex),
          l.routesMeta.map((o) => o.childrenIndex),
        ),
  );
}
const Dg = /^:[\w-]+$/,
  Mg = 3,
  Ag = 2,
  Fg = 1,
  jg = 10,
  Bg = -2,
  pd = (n) => n === '*';
function Ug(n, i) {
  let l = n.split('/'),
    o = l.length;
  return (
    l.some(pd) && (o += Bg),
    i && (o += Ag),
    l
      .filter((a) => !pd(a))
      .reduce((a, c) => a + (Dg.test(c) ? Mg : c === '' ? Fg : jg), o)
  );
}
function bg(n, i) {
  return n.length === i.length && n.slice(0, -1).every((o, a) => o === i[a])
    ? n[n.length - 1] - i[i.length - 1]
    : 0;
}
function Vg(n, i, l) {
  let { routesMeta: o } = n,
    a = {},
    c = '/',
    f = [];
  for (let p = 0; p < o.length; ++p) {
    let h = o[p],
      m = p === o.length - 1,
      g = c === '/' ? i : i.slice(c.length) || '/',
      v = Hg(
        { path: h.relativePath, caseSensitive: h.caseSensitive, end: m },
        g,
      ),
      k = h.route;
    if (!v) return null;
    (Object.assign(a, v.params),
      f.push({
        params: a,
        pathname: Rr([c, v.pathname]),
        pathnameBase: Qg(Rr([c, v.pathnameBase])),
        route: k,
      }),
      v.pathnameBase !== '/' && (c = Rr([c, v.pathnameBase])));
  }
  return f;
}
function Hg(n, i) {
  typeof n == 'string' && (n = { path: n, caseSensitive: !1, end: !0 });
  let [l, o] = $g(n.path, n.caseSensitive, n.end),
    a = i.match(l);
  if (!a) return null;
  let c = a[0],
    f = c.replace(/(.)\/+$/, '$1'),
    p = a.slice(1);
  return {
    params: o.reduce((m, g, v) => {
      let { paramName: k, isOptional: x } = g;
      if (k === '*') {
        let z = p[v] || '';
        f = c.slice(0, c.length - z.length).replace(/(.)\/+$/, '$1');
      }
      const O = p[v];
      return (
        x && !O ? (m[k] = void 0) : (m[k] = (O || '').replace(/%2F/g, '/')),
        m
      );
    }, {}),
    pathname: c,
    pathnameBase: f,
    pattern: n,
  };
}
function $g(n, i, l) {
  (i === void 0 && (i = !1),
    l === void 0 && (l = !0),
    yp(
      n === '*' || !n.endsWith('*') || n.endsWith('/*'),
      'Route path "' +
        n +
        '" will be treated as if it were ' +
        ('"' + n.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + n.replace(/\*$/, '/*') + '".'),
    ));
  let o = [],
    a =
      '^' +
      n
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (f, p, h) => (
            o.push({ paramName: p, isOptional: h != null }),
            h ? '/?([^\\/]+)?' : '/([^\\/]+)'
          ),
        );
  return (
    n.endsWith('*')
      ? (o.push({ paramName: '*' }),
        (a += n === '*' || n === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : l
        ? (a += '\\/*$')
        : n !== '' && n !== '/' && (a += '(?:(?=\\/|$))'),
    [new RegExp(a, i ? void 0 : 'i'), o]
  );
}
function Wg(n) {
  try {
    return n
      .split('/')
      .map((i) => decodeURIComponent(i).replace(/\//g, '%2F'))
      .join('/');
  } catch (i) {
    return (
      yp(
        !1,
        'The URL path "' +
          n +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + i + ').'),
      ),
      n
    );
  }
}
function kp(n, i) {
  if (i === '/') return n;
  if (!n.toLowerCase().startsWith(i.toLowerCase())) return null;
  let l = i.endsWith('/') ? i.length - 1 : i.length,
    o = n.charAt(l);
  return o && o !== '/' ? null : n.slice(l) || '/';
}
const Rr = (n) => n.join('/').replace(/\/\/+/g, '/'),
  Qg = (n) => n.replace(/\/+$/, '').replace(/^\/*/, '/');
function qg(n) {
  return (
    n != null &&
    typeof n.status == 'number' &&
    typeof n.statusText == 'string' &&
    typeof n.internal == 'boolean' &&
    'data' in n
  );
}
const Sp = ['post', 'put', 'patch', 'delete'];
new Set(Sp);
const Kg = ['get', ...Sp];
new Set(Kg);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function io() {
  return (
    (io = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var i = 1; i < arguments.length; i++) {
            var l = arguments[i];
            for (var o in l)
              Object.prototype.hasOwnProperty.call(l, o) && (n[o] = l[o]);
          }
          return n;
        }),
    io.apply(this, arguments)
  );
}
const Xg = le.createContext(null),
  Yg = le.createContext(null),
  Ep = le.createContext(null),
  yo = le.createContext(null),
  Mi = le.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Cp = le.createContext(null);
function Ja() {
  return le.useContext(yo) != null;
}
function Gg() {
  return (Ja() || yt(!1), le.useContext(yo).location);
}
function Jg() {
  let { matches: n } = le.useContext(Mi),
    i = n[n.length - 1];
  return i ? i.params : {};
}
function Zg(n, i) {
  return ey(n, i);
}
function ey(n, i, l, o) {
  Ja() || yt(!1);
  let { navigator: a } = le.useContext(Ep),
    { matches: c } = le.useContext(Mi),
    f = c[c.length - 1],
    p = f ? f.params : {};
  f && f.pathname;
  let h = f ? f.pathnameBase : '/';
  f && f.route;
  let m = Gg(),
    g;
  if (i) {
    var v;
    let R = typeof i == 'string' ? go(i) : i;
    (h === '/' || ((v = R.pathname) != null && v.startsWith(h)) || yt(!1),
      (g = R));
  } else g = m;
  let k = g.pathname || '/',
    x = k;
  if (h !== '/') {
    let R = h.replace(/^\//, '').split('/');
    x = '/' + k.replace(/^\//, '').split('/').slice(R.length).join('/');
  }
  let O = Rg(n, { pathname: x }),
    z = ly(
      O &&
        O.map((R) =>
          Object.assign({}, R, {
            params: Object.assign({}, p, R.params),
            pathname: Rr([
              h,
              a.encodeLocation
                ? a.encodeLocation(R.pathname).pathname
                : R.pathname,
            ]),
            pathnameBase:
              R.pathnameBase === '/'
                ? h
                : Rr([
                    h,
                    a.encodeLocation
                      ? a.encodeLocation(R.pathnameBase).pathname
                      : R.pathnameBase,
                  ]),
          }),
        ),
      c,
      l,
      o,
    );
  return i && z
    ? le.createElement(
        yo.Provider,
        {
          value: {
            location: io(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              g,
            ),
            navigationType: Mn.Pop,
          },
        },
        z,
      )
    : z;
}
function ty() {
  let n = sy(),
    i = qg(n)
      ? n.status + ' ' + n.statusText
      : n instanceof Error
        ? n.message
        : JSON.stringify(n),
    l = n instanceof Error ? n.stack : null,
    a = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return le.createElement(
    le.Fragment,
    null,
    le.createElement('h2', null, 'Unexpected Application Error!'),
    le.createElement('h3', { style: { fontStyle: 'italic' } }, i),
    l ? le.createElement('pre', { style: a }, l) : null,
    null,
  );
}
const ny = le.createElement(ty, null);
class ry extends le.Component {
  constructor(i) {
    (super(i),
      (this.state = {
        location: i.location,
        revalidation: i.revalidation,
        error: i.error,
      }));
  }
  static getDerivedStateFromError(i) {
    return { error: i };
  }
  static getDerivedStateFromProps(i, l) {
    return l.location !== i.location ||
      (l.revalidation !== 'idle' && i.revalidation === 'idle')
      ? { error: i.error, location: i.location, revalidation: i.revalidation }
      : {
          error: i.error !== void 0 ? i.error : l.error,
          location: l.location,
          revalidation: i.revalidation || l.revalidation,
        };
  }
  componentDidCatch(i, l) {
    console.error(
      'React Router caught the following error during render',
      i,
      l,
    );
  }
  render() {
    return this.state.error !== void 0
      ? le.createElement(
          Mi.Provider,
          { value: this.props.routeContext },
          le.createElement(Cp.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function iy(n) {
  let { routeContext: i, match: l, children: o } = n,
    a = le.useContext(Xg);
  return (
    a &&
      a.static &&
      a.staticContext &&
      (l.route.errorElement || l.route.ErrorBoundary) &&
      (a.staticContext._deepestRenderedBoundaryId = l.route.id),
    le.createElement(Mi.Provider, { value: i }, o)
  );
}
function ly(n, i, l, o) {
  var a;
  if (
    (i === void 0 && (i = []),
    l === void 0 && (l = null),
    o === void 0 && (o = null),
    n == null)
  ) {
    var c;
    if (!l) return null;
    if (l.errors) n = l.matches;
    else if (
      (c = o) != null &&
      c.v7_partialHydration &&
      i.length === 0 &&
      !l.initialized &&
      l.matches.length > 0
    )
      n = l.matches;
    else return null;
  }
  let f = n,
    p = (a = l) == null ? void 0 : a.errors;
  if (p != null) {
    let g = f.findIndex((v) => v.route.id && p?.[v.route.id] !== void 0);
    (g >= 0 || yt(!1), (f = f.slice(0, Math.min(f.length, g + 1))));
  }
  let h = !1,
    m = -1;
  if (l && o && o.v7_partialHydration)
    for (let g = 0; g < f.length; g++) {
      let v = f[g];
      if (
        ((v.route.HydrateFallback || v.route.hydrateFallbackElement) && (m = g),
        v.route.id)
      ) {
        let { loaderData: k, errors: x } = l,
          O =
            v.route.loader &&
            k[v.route.id] === void 0 &&
            (!x || x[v.route.id] === void 0);
        if (v.route.lazy || O) {
          ((h = !0), m >= 0 ? (f = f.slice(0, m + 1)) : (f = [f[0]]));
          break;
        }
      }
    }
  return f.reduceRight((g, v, k) => {
    let x,
      O = !1,
      z = null,
      R = null;
    l &&
      ((x = p && v.route.id ? p[v.route.id] : void 0),
      (z = v.route.errorElement || ny),
      h &&
        (m < 0 && k === 0
          ? (cy('route-fallback'), (O = !0), (R = null))
          : m === k &&
            ((O = !0), (R = v.route.hydrateFallbackElement || null))));
    let L = i.concat(f.slice(0, k + 1)),
      V = () => {
        let A;
        return (
          x
            ? (A = z)
            : O
              ? (A = R)
              : v.route.Component
                ? (A = le.createElement(v.route.Component, null))
                : v.route.element
                  ? (A = v.route.element)
                  : (A = g),
          le.createElement(iy, {
            match: v,
            routeContext: { outlet: g, matches: L, isDataRoute: l != null },
            children: A,
          })
        );
      };
    return l && (v.route.ErrorBoundary || v.route.errorElement || k === 0)
      ? le.createElement(ry, {
          location: l.location,
          revalidation: l.revalidation,
          component: z,
          error: x,
          children: V(),
          routeContext: { outlet: null, matches: L, isDataRoute: !0 },
        })
      : V();
  }, null);
}
var _p = (function (n) {
  return (
    (n.UseBlocker = 'useBlocker'),
    (n.UseLoaderData = 'useLoaderData'),
    (n.UseActionData = 'useActionData'),
    (n.UseRouteError = 'useRouteError'),
    (n.UseNavigation = 'useNavigation'),
    (n.UseRouteLoaderData = 'useRouteLoaderData'),
    (n.UseMatches = 'useMatches'),
    (n.UseRevalidator = 'useRevalidator'),
    (n.UseNavigateStable = 'useNavigate'),
    (n.UseRouteId = 'useRouteId'),
    n
  );
})(_p || {});
function oy(n) {
  let i = le.useContext(Yg);
  return (i || yt(!1), i);
}
function uy(n) {
  let i = le.useContext(Mi);
  return (i || yt(!1), i);
}
function ay(n) {
  let i = uy(),
    l = i.matches[i.matches.length - 1];
  return (l.route.id || yt(!1), l.route.id);
}
function sy() {
  var n;
  let i = le.useContext(Cp),
    l = oy(_p.UseRouteError),
    o = ay();
  return i !== void 0 ? i : (n = l.errors) == null ? void 0 : n[o];
}
const hd = {};
function cy(n, i, l) {
  hd[n] || (hd[n] = !0);
}
function fy(n, i) {
  (n?.v7_startTransition, n?.v7_relativeSplatPath);
}
function zr(n) {
  yt(!1);
}
function dy(n) {
  let {
    basename: i = '/',
    children: l = null,
    location: o,
    navigationType: a = Mn.Pop,
    navigator: c,
    static: f = !1,
    future: p,
  } = n;
  Ja() && yt(!1);
  let h = i.replace(/^\/*/, '/'),
    m = le.useMemo(
      () => ({
        basename: h,
        navigator: c,
        static: f,
        future: io({ v7_relativeSplatPath: !1 }, p),
      }),
      [h, p, c, f],
    );
  typeof o == 'string' && (o = go(o));
  let {
      pathname: g = '/',
      search: v = '',
      hash: k = '',
      state: x = null,
      key: O = 'default',
    } = o,
    z = le.useMemo(() => {
      let R = kp(g, h);
      return R == null
        ? null
        : {
            location: { pathname: R, search: v, hash: k, state: x, key: O },
            navigationType: a,
          };
    }, [h, g, v, k, x, O, a]);
  return z == null
    ? null
    : le.createElement(
        Ep.Provider,
        { value: m },
        le.createElement(yo.Provider, { children: l, value: z }),
      );
}
function py(n) {
  let { children: i, location: l } = n;
  return Zg(Ma(i), l);
}
new Promise(() => {});
function Ma(n, i) {
  i === void 0 && (i = []);
  let l = [];
  return (
    le.Children.forEach(n, (o, a) => {
      if (!le.isValidElement(o)) return;
      let c = [...i, a];
      if (o.type === le.Fragment) {
        l.push.apply(l, Ma(o.props.children, c));
        return;
      }
      (o.type !== zr && yt(!1), !o.props.index || !o.props.children || yt(!1));
      let f = {
        id: o.props.id || c.join('-'),
        caseSensitive: o.props.caseSensitive,
        element: o.props.element,
        Component: o.props.Component,
        index: o.props.index,
        path: o.props.path,
        loader: o.props.loader,
        action: o.props.action,
        errorElement: o.props.errorElement,
        ErrorBoundary: o.props.ErrorBoundary,
        hasErrorBoundary:
          o.props.ErrorBoundary != null || o.props.errorElement != null,
        shouldRevalidate: o.props.shouldRevalidate,
        handle: o.props.handle,
        lazy: o.props.lazy,
      };
      (o.props.children && (f.children = Ma(o.props.children, c)), l.push(f));
    }),
    l
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const hy = '6';
try {
  window.__reactRouterVersion = hy;
} catch {}
const my = 'startTransition',
  md = kg[my];
function gy(n) {
  let { basename: i, children: l, future: o, window: a } = n,
    c = le.useRef();
  c.current == null && (c.current = Ng({ window: a, v5Compat: !0 }));
  let f = c.current,
    [p, h] = le.useState({ action: f.action, location: f.location }),
    { v7_startTransition: m } = o || {},
    g = le.useCallback(
      (v) => {
        m && md ? md(() => h(v)) : h(v);
      },
      [h, m],
    );
  return (
    le.useLayoutEffect(() => f.listen(g), [f, g]),
    le.useEffect(() => fy(o), [o]),
    le.createElement(dy, {
      basename: i,
      children: l,
      location: p.location,
      navigationType: p.action,
      navigator: f,
      future: o,
    })
  );
}
var gd;
(function (n) {
  ((n.UseScrollRestoration = 'useScrollRestoration'),
    (n.UseSubmit = 'useSubmit'),
    (n.UseSubmitFetcher = 'useSubmitFetcher'),
    (n.UseFetcher = 'useFetcher'),
    (n.useViewTransitionState = 'useViewTransitionState'));
})(gd || (gd = {}));
var yd;
(function (n) {
  ((n.UseFetcher = 'useFetcher'),
    (n.UseFetchers = 'useFetchers'),
    (n.UseScrollRestoration = 'useScrollRestoration'));
})(yd || (yd = {}));
var ga = { exports: {} },
  ya = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vd;
function yy() {
  if (vd) return ya;
  vd = 1;
  var n = mo();
  function i(h, m) {
    return (h === m && (h !== 0 || 1 / h === 1 / m)) || (h !== h && m !== m);
  }
  var l = typeof Object.is == 'function' ? Object.is : i,
    o = n.useSyncExternalStore,
    a = n.useRef,
    c = n.useEffect,
    f = n.useMemo,
    p = n.useDebugValue;
  return (
    (ya.useSyncExternalStoreWithSelector = function (h, m, g, v, k) {
      var x = a(null);
      if (x.current === null) {
        var O = { hasValue: !1, value: null };
        x.current = O;
      } else O = x.current;
      x = f(
        function () {
          function R(Y) {
            if (!L) {
              if (((L = !0), (V = Y), (Y = v(Y)), k !== void 0 && O.hasValue)) {
                var D = O.value;
                if (k(D, Y)) return (A = D);
              }
              return (A = Y);
            }
            if (((D = A), l(V, Y))) return D;
            var te = v(Y);
            return k !== void 0 && k(D, te)
              ? ((V = Y), D)
              : ((V = Y), (A = te));
          }
          var L = !1,
            V,
            A,
            Q = g === void 0 ? null : g;
          return [
            function () {
              return R(m());
            },
            Q === null
              ? void 0
              : function () {
                  return R(Q());
                },
          ];
        },
        [m, g, v, k],
      );
      var z = o(h, x[0], x[1]);
      return (
        c(
          function () {
            ((O.hasValue = !0), (O.value = z));
          },
          [z],
        ),
        p(z),
        z
      );
    }),
    ya
  );
}
var xd;
function vy() {
  return (xd || ((xd = 1), (ga.exports = yy())), ga.exports);
}
var xy = vy();
function wy(n) {
  n();
}
function ky() {
  let n = null,
    i = null;
  return {
    clear() {
      ((n = null), (i = null));
    },
    notify() {
      wy(() => {
        let l = n;
        for (; l; ) (l.callback(), (l = l.next));
      });
    },
    get() {
      const l = [];
      let o = n;
      for (; o; ) (l.push(o), (o = o.next));
      return l;
    },
    subscribe(l) {
      let o = !0;
      const a = (i = { callback: l, next: null, prev: i });
      return (
        a.prev ? (a.prev.next = a) : (n = a),
        function () {
          !o ||
            n === null ||
            ((o = !1),
            a.next ? (a.next.prev = a.prev) : (i = a.prev),
            a.prev ? (a.prev.next = a.next) : (n = a.next));
        }
      );
    },
  };
}
var wd = { notify() {}, get: () => [] };
function Sy(n, i) {
  let l,
    o = wd,
    a = 0,
    c = !1;
  function f(z) {
    g();
    const R = o.subscribe(z);
    let L = !1;
    return () => {
      L || ((L = !0), R(), v());
    };
  }
  function p() {
    o.notify();
  }
  function h() {
    O.onStateChange && O.onStateChange();
  }
  function m() {
    return c;
  }
  function g() {
    (a++, l || ((l = n.subscribe(h)), (o = ky())));
  }
  function v() {
    (a--, l && a === 0 && (l(), (l = void 0), o.clear(), (o = wd)));
  }
  function k() {
    c || ((c = !0), g());
  }
  function x() {
    c && ((c = !1), v());
  }
  const O = {
    addNestedSub: f,
    notifyNestedSubs: p,
    handleChangeWrapper: h,
    isSubscribed: m,
    trySubscribe: k,
    tryUnsubscribe: x,
    getListeners: () => o,
  };
  return O;
}
var Ey = () =>
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Cy = Ey(),
  _y = () => typeof navigator < 'u' && navigator.product === 'ReactNative',
  Py = _y(),
  Ty = () => (Cy || Py ? le.useLayoutEffect : le.useEffect),
  Ny = Ty(),
  Iy = Symbol.for('react-redux-context'),
  zy = typeof globalThis < 'u' ? globalThis : {};
function Ry() {
  if (!le.createContext) return {};
  const n = (zy[Iy] ??= new Map());
  let i = n.get(le.createContext);
  return (i || ((i = le.createContext(null)), n.set(le.createContext, i)), i);
}
var lo = Ry();
function Ly(n) {
  const { children: i, context: l, serverState: o, store: a } = n,
    c = le.useMemo(() => {
      const h = Sy(a);
      return {
        store: a,
        subscription: h,
        getServerState: o ? () => o : void 0,
      };
    }, [a, o]),
    f = le.useMemo(() => a.getState(), [a]);
  Ny(() => {
    const { subscription: h } = c;
    return (
      (h.onStateChange = h.notifyNestedSubs),
      h.trySubscribe(),
      f !== a.getState() && h.notifyNestedSubs(),
      () => {
        (h.tryUnsubscribe(), (h.onStateChange = void 0));
      }
    );
  }, [c, f]);
  const p = l || lo;
  return le.createElement(p.Provider, { value: c }, i);
}
var Oy = Ly;
function Pp(n = lo) {
  return function () {
    return le.useContext(n);
  };
}
var Dy = Pp(),
  My = (n, i) => n === i;
function Ay(n = lo) {
  const i = n === lo ? Dy : Pp(n),
    l = (o, a = {}) => {
      const { equalityFn: c = My } =
          typeof a == 'function' ? { equalityFn: a } : a,
        f = i(),
        { store: p, subscription: h, getServerState: m } = f;
      le.useRef(!0);
      const g = le.useCallback(
          {
            [o.name](k) {
              return o(k);
            },
          }[o.name],
          [o],
        ),
        v = xy.useSyncExternalStoreWithSelector(
          h.addNestedSub,
          p.getState,
          m || p.getState,
          g,
          c,
        );
      return (le.useDebugValue(v), v);
    };
  return (Object.assign(l, { withTypes: () => l }), l);
}
var vo = Ay();
function tt(n) {
  return `Minified Redux error #${n}; visit https://redux.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `;
}
var Fy = (typeof Symbol == 'function' && Symbol.observable) || '@@observable',
  kd = Fy,
  va = () => Math.random().toString(36).substring(7).split('').join('.'),
  jy = {
    INIT: `@@redux/INIT${va()}`,
    REPLACE: `@@redux/REPLACE${va()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${va()}`,
  },
  oo = jy;
function Za(n) {
  if (typeof n != 'object' || n === null) return !1;
  let i = n;
  for (; Object.getPrototypeOf(i) !== null; ) i = Object.getPrototypeOf(i);
  return Object.getPrototypeOf(n) === i || Object.getPrototypeOf(n) === null;
}
function Tp(n, i, l) {
  if (typeof n != 'function') throw new Error(tt(2));
  if (
    (typeof i == 'function' && typeof l == 'function') ||
    (typeof l == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(tt(0));
  if (
    (typeof i == 'function' && typeof l > 'u' && ((l = i), (i = void 0)),
    typeof l < 'u')
  ) {
    if (typeof l != 'function') throw new Error(tt(1));
    return l(Tp)(n, i);
  }
  let o = n,
    a = i,
    c = new Map(),
    f = c,
    p = 0,
    h = !1;
  function m() {
    f === c &&
      ((f = new Map()),
      c.forEach((R, L) => {
        f.set(L, R);
      }));
  }
  function g() {
    if (h) throw new Error(tt(3));
    return a;
  }
  function v(R) {
    if (typeof R != 'function') throw new Error(tt(4));
    if (h) throw new Error(tt(5));
    let L = !0;
    m();
    const V = p++;
    return (
      f.set(V, R),
      function () {
        if (L) {
          if (h) throw new Error(tt(6));
          ((L = !1), m(), f.delete(V), (c = null));
        }
      }
    );
  }
  function k(R) {
    if (!Za(R)) throw new Error(tt(7));
    if (typeof R.type > 'u') throw new Error(tt(8));
    if (typeof R.type != 'string') throw new Error(tt(17));
    if (h) throw new Error(tt(9));
    try {
      ((h = !0), (a = o(a, R)));
    } finally {
      h = !1;
    }
    return (
      (c = f).forEach((V) => {
        V();
      }),
      R
    );
  }
  function x(R) {
    if (typeof R != 'function') throw new Error(tt(10));
    ((o = R), k({ type: oo.REPLACE }));
  }
  function O() {
    const R = v;
    return {
      subscribe(L) {
        if (typeof L != 'object' || L === null) throw new Error(tt(11));
        function V() {
          const Q = L;
          Q.next && Q.next(g());
        }
        return (V(), { unsubscribe: R(V) });
      },
      [kd]() {
        return this;
      },
    };
  }
  return (
    k({ type: oo.INIT }),
    { dispatch: k, subscribe: v, getState: g, replaceReducer: x, [kd]: O }
  );
}
function By(n) {
  Object.keys(n).forEach((i) => {
    const l = n[i];
    if (typeof l(void 0, { type: oo.INIT }) > 'u') throw new Error(tt(12));
    if (typeof l(void 0, { type: oo.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error(tt(13));
  });
}
function Uy(n) {
  const i = Object.keys(n),
    l = {};
  for (let c = 0; c < i.length; c++) {
    const f = i[c];
    typeof n[f] == 'function' && (l[f] = n[f]);
  }
  const o = Object.keys(l);
  let a;
  try {
    By(l);
  } catch (c) {
    a = c;
  }
  return function (f = {}, p) {
    if (a) throw a;
    let h = !1;
    const m = {};
    for (let g = 0; g < o.length; g++) {
      const v = o[g],
        k = l[v],
        x = f[v],
        O = k(x, p);
      if (typeof O > 'u') throw (p && p.type, new Error(tt(14)));
      ((m[v] = O), (h = h || O !== x));
    }
    return ((h = h || o.length !== Object.keys(f).length), h ? m : f);
  };
}
function uo(...n) {
  return n.length === 0
    ? (i) => i
    : n.length === 1
      ? n[0]
      : n.reduce(
          (i, l) =>
            (...o) =>
              i(l(...o)),
        );
}
function by(...n) {
  return (i) => (l, o) => {
    const a = i(l, o);
    let c = () => {
      throw new Error(tt(15));
    };
    const f = { getState: a.getState, dispatch: (h, ...m) => c(h, ...m) },
      p = n.map((h) => h(f));
    return ((c = uo(...p)(a.dispatch)), { ...a, dispatch: c });
  };
}
function Vy(n) {
  return Za(n) && 'type' in n && typeof n.type == 'string';
}
var Np = Symbol.for('immer-nothing'),
  Sd = Symbol.for('immer-draftable'),
  Pt = Symbol.for('immer-state');
function Ht(n, ...i) {
  throw new Error(
    `[Immer] minified error nr: ${n}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var Dr = Object.getPrototypeOf;
function Jn(n) {
  return !!n && !!n[Pt];
}
function fn(n) {
  return n
    ? Ip(n) ||
        Array.isArray(n) ||
        !!n[Sd] ||
        !!n.constructor?.[Sd] ||
        wo(n) ||
        ko(n)
    : !1;
}
var Hy = Object.prototype.constructor.toString();
function Ip(n) {
  if (!n || typeof n != 'object') return !1;
  const i = Dr(n);
  if (i === null) return !0;
  const l = Object.hasOwnProperty.call(i, 'constructor') && i.constructor;
  return l === Object
    ? !0
    : typeof l == 'function' && Function.toString.call(l) === Hy;
}
function ao(n, i) {
  xo(n) === 0
    ? Reflect.ownKeys(n).forEach((l) => {
        i(l, n[l], n);
      })
    : n.forEach((l, o) => i(o, l, n));
}
function xo(n) {
  const i = n[Pt];
  return i ? i.type_ : Array.isArray(n) ? 1 : wo(n) ? 2 : ko(n) ? 3 : 0;
}
function Aa(n, i) {
  return xo(n) === 2 ? n.has(i) : Object.prototype.hasOwnProperty.call(n, i);
}
function zp(n, i, l) {
  const o = xo(n);
  o === 2 ? n.set(i, l) : o === 3 ? n.add(l) : (n[i] = l);
}
function $y(n, i) {
  return n === i ? n !== 0 || 1 / n === 1 / i : n !== n && i !== i;
}
function wo(n) {
  return n instanceof Map;
}
function ko(n) {
  return n instanceof Set;
}
function Gn(n) {
  return n.copy_ || n.base_;
}
function Fa(n, i) {
  if (wo(n)) return new Map(n);
  if (ko(n)) return new Set(n);
  if (Array.isArray(n)) return Array.prototype.slice.call(n);
  const l = Ip(n);
  if (i === !0 || (i === 'class_only' && !l)) {
    const o = Object.getOwnPropertyDescriptors(n);
    delete o[Pt];
    let a = Reflect.ownKeys(o);
    for (let c = 0; c < a.length; c++) {
      const f = a[c],
        p = o[f];
      (p.writable === !1 && ((p.writable = !0), (p.configurable = !0)),
        (p.get || p.set) &&
          (o[f] = {
            configurable: !0,
            writable: !0,
            enumerable: p.enumerable,
            value: n[f],
          }));
    }
    return Object.create(Dr(n), o);
  } else {
    const o = Dr(n);
    if (o !== null && l) return { ...n };
    const a = Object.create(o);
    return Object.assign(a, n);
  }
}
function es(n, i = !1) {
  return (
    So(n) ||
      Jn(n) ||
      !fn(n) ||
      (xo(n) > 1 && (n.set = n.add = n.clear = n.delete = Wy),
      Object.freeze(n),
      i && Object.entries(n).forEach(([l, o]) => es(o, !0))),
    n
  );
}
function Wy() {
  Ht(2);
}
function So(n) {
  return Object.isFrozen(n);
}
var Qy = {};
function Zn(n) {
  const i = Qy[n];
  return (i || Ht(0, n), i);
}
var Li;
function Rp() {
  return Li;
}
function qy(n, i) {
  return {
    drafts_: [],
    parent_: n,
    immer_: i,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function Ed(n, i) {
  i &&
    (Zn('Patches'),
    (n.patches_ = []),
    (n.inversePatches_ = []),
    (n.patchListener_ = i));
}
function ja(n) {
  (Ba(n), n.drafts_.forEach(Ky), (n.drafts_ = null));
}
function Ba(n) {
  n === Li && (Li = n.parent_);
}
function Cd(n) {
  return (Li = qy(Li, n));
}
function Ky(n) {
  const i = n[Pt];
  i.type_ === 0 || i.type_ === 1 ? i.revoke_() : (i.revoked_ = !0);
}
function _d(n, i) {
  i.unfinalizedDrafts_ = i.drafts_.length;
  const l = i.drafts_[0];
  return (
    n !== void 0 && n !== l
      ? (l[Pt].modified_ && (ja(i), Ht(4)),
        fn(n) && ((n = so(i, n)), i.parent_ || co(i, n)),
        i.patches_ &&
          Zn('Patches').generateReplacementPatches_(
            l[Pt].base_,
            n,
            i.patches_,
            i.inversePatches_,
          ))
      : (n = so(i, l, [])),
    ja(i),
    i.patches_ && i.patchListener_(i.patches_, i.inversePatches_),
    n !== Np ? n : void 0
  );
}
function so(n, i, l) {
  if (So(i)) return i;
  const o = i[Pt];
  if (!o) return (ao(i, (a, c) => Pd(n, o, i, a, c, l)), i);
  if (o.scope_ !== n) return i;
  if (!o.modified_) return (co(n, o.base_, !0), o.base_);
  if (!o.finalized_) {
    ((o.finalized_ = !0), o.scope_.unfinalizedDrafts_--);
    const a = o.copy_;
    let c = a,
      f = !1;
    (o.type_ === 3 && ((c = new Set(a)), a.clear(), (f = !0)),
      ao(c, (p, h) => Pd(n, o, a, p, h, l, f)),
      co(n, a, !1),
      l &&
        n.patches_ &&
        Zn('Patches').generatePatches_(o, l, n.patches_, n.inversePatches_));
  }
  return o.copy_;
}
function Pd(n, i, l, o, a, c, f) {
  if (Jn(a)) {
    const p =
        c && i && i.type_ !== 3 && !Aa(i.assigned_, o) ? c.concat(o) : void 0,
      h = so(n, a, p);
    if ((zp(l, o, h), Jn(h))) n.canAutoFreeze_ = !1;
    else return;
  } else f && l.add(a);
  if (fn(a) && !So(a)) {
    if (!n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1) return;
    (so(n, a),
      (!i || !i.scope_.parent_) &&
        typeof o != 'symbol' &&
        Object.prototype.propertyIsEnumerable.call(l, o) &&
        co(n, a));
  }
}
function co(n, i, l = !1) {
  !n.parent_ && n.immer_.autoFreeze_ && n.canAutoFreeze_ && es(i, l);
}
function Xy(n, i) {
  const l = Array.isArray(n),
    o = {
      type_: l ? 1 : 0,
      scope_: i ? i.scope_ : Rp(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: i,
      base_: n,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let a = o,
    c = ts;
  l && ((a = [o]), (c = Oi));
  const { revoke: f, proxy: p } = Proxy.revocable(a, c);
  return ((o.draft_ = p), (o.revoke_ = f), p);
}
var ts = {
    get(n, i) {
      if (i === Pt) return n;
      const l = Gn(n);
      if (!Aa(l, i)) return Yy(n, l, i);
      const o = l[i];
      return n.finalized_ || !fn(o)
        ? o
        : o === xa(n.base_, i)
          ? (wa(n), (n.copy_[i] = ba(o, n)))
          : o;
    },
    has(n, i) {
      return i in Gn(n);
    },
    ownKeys(n) {
      return Reflect.ownKeys(Gn(n));
    },
    set(n, i, l) {
      const o = Lp(Gn(n), i);
      if (o?.set) return (o.set.call(n.draft_, l), !0);
      if (!n.modified_) {
        const a = xa(Gn(n), i),
          c = a?.[Pt];
        if (c && c.base_ === l)
          return ((n.copy_[i] = l), (n.assigned_[i] = !1), !0);
        if ($y(l, a) && (l !== void 0 || Aa(n.base_, i))) return !0;
        (wa(n), Ua(n));
      }
      return (
        (n.copy_[i] === l && (l !== void 0 || i in n.copy_)) ||
          (Number.isNaN(l) && Number.isNaN(n.copy_[i])) ||
          ((n.copy_[i] = l), (n.assigned_[i] = !0)),
        !0
      );
    },
    deleteProperty(n, i) {
      return (
        xa(n.base_, i) !== void 0 || i in n.base_
          ? ((n.assigned_[i] = !1), wa(n), Ua(n))
          : delete n.assigned_[i],
        n.copy_ && delete n.copy_[i],
        !0
      );
    },
    getOwnPropertyDescriptor(n, i) {
      const l = Gn(n),
        o = Reflect.getOwnPropertyDescriptor(l, i);
      return (
        o && {
          writable: !0,
          configurable: n.type_ !== 1 || i !== 'length',
          enumerable: o.enumerable,
          value: l[i],
        }
      );
    },
    defineProperty() {
      Ht(11);
    },
    getPrototypeOf(n) {
      return Dr(n.base_);
    },
    setPrototypeOf() {
      Ht(12);
    },
  },
  Oi = {};
ao(ts, (n, i) => {
  Oi[n] = function () {
    return ((arguments[0] = arguments[0][0]), i.apply(this, arguments));
  };
});
Oi.deleteProperty = function (n, i) {
  return Oi.set.call(this, n, i, void 0);
};
Oi.set = function (n, i, l) {
  return ts.set.call(this, n[0], i, l, n[0]);
};
function xa(n, i) {
  const l = n[Pt];
  return (l ? Gn(l) : n)[i];
}
function Yy(n, i, l) {
  const o = Lp(i, l);
  return o ? ('value' in o ? o.value : o.get?.call(n.draft_)) : void 0;
}
function Lp(n, i) {
  if (!(i in n)) return;
  let l = Dr(n);
  for (; l; ) {
    const o = Object.getOwnPropertyDescriptor(l, i);
    if (o) return o;
    l = Dr(l);
  }
}
function Ua(n) {
  n.modified_ || ((n.modified_ = !0), n.parent_ && Ua(n.parent_));
}
function wa(n) {
  n.copy_ || (n.copy_ = Fa(n.base_, n.scope_.immer_.useStrictShallowCopy_));
}
var Gy = class {
  constructor(n) {
    ((this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (i, l, o) => {
        if (typeof i == 'function' && typeof l != 'function') {
          const c = l;
          l = i;
          const f = this;
          return function (h = c, ...m) {
            return f.produce(h, (g) => l.call(this, g, ...m));
          };
        }
        (typeof l != 'function' && Ht(6),
          o !== void 0 && typeof o != 'function' && Ht(7));
        let a;
        if (fn(i)) {
          const c = Cd(this),
            f = ba(i, void 0);
          let p = !0;
          try {
            ((a = l(f)), (p = !1));
          } finally {
            p ? ja(c) : Ba(c);
          }
          return (Ed(c, o), _d(a, c));
        } else if (!i || typeof i != 'object') {
          if (
            ((a = l(i)),
            a === void 0 && (a = i),
            a === Np && (a = void 0),
            this.autoFreeze_ && es(a, !0),
            o)
          ) {
            const c = [],
              f = [];
            (Zn('Patches').generateReplacementPatches_(i, a, c, f), o(c, f));
          }
          return a;
        } else Ht(1, i);
      }),
      (this.produceWithPatches = (i, l) => {
        if (typeof i == 'function')
          return (f, ...p) => this.produceWithPatches(f, (h) => i(h, ...p));
        let o, a;
        return [
          this.produce(i, l, (f, p) => {
            ((o = f), (a = p));
          }),
          o,
          a,
        ];
      }),
      typeof n?.autoFreeze == 'boolean' && this.setAutoFreeze(n.autoFreeze),
      typeof n?.useStrictShallowCopy == 'boolean' &&
        this.setUseStrictShallowCopy(n.useStrictShallowCopy));
  }
  createDraft(n) {
    (fn(n) || Ht(8), Jn(n) && (n = Jy(n)));
    const i = Cd(this),
      l = ba(n, void 0);
    return ((l[Pt].isManual_ = !0), Ba(i), l);
  }
  finishDraft(n, i) {
    const l = n && n[Pt];
    (!l || !l.isManual_) && Ht(9);
    const { scope_: o } = l;
    return (Ed(o, i), _d(void 0, o));
  }
  setAutoFreeze(n) {
    this.autoFreeze_ = n;
  }
  setUseStrictShallowCopy(n) {
    this.useStrictShallowCopy_ = n;
  }
  applyPatches(n, i) {
    let l;
    for (l = i.length - 1; l >= 0; l--) {
      const a = i[l];
      if (a.path.length === 0 && a.op === 'replace') {
        n = a.value;
        break;
      }
    }
    l > -1 && (i = i.slice(l + 1));
    const o = Zn('Patches').applyPatches_;
    return Jn(n) ? o(n, i) : this.produce(n, (a) => o(a, i));
  }
};
function ba(n, i) {
  const l = wo(n)
    ? Zn('MapSet').proxyMap_(n, i)
    : ko(n)
      ? Zn('MapSet').proxySet_(n, i)
      : Xy(n, i);
  return ((i ? i.scope_ : Rp()).drafts_.push(l), l);
}
function Jy(n) {
  return (Jn(n) || Ht(10, n), Op(n));
}
function Op(n) {
  if (!fn(n) || So(n)) return n;
  const i = n[Pt];
  let l;
  if (i) {
    if (!i.modified_) return i.base_;
    ((i.finalized_ = !0), (l = Fa(n, i.scope_.immer_.useStrictShallowCopy_)));
  } else l = Fa(n, !0);
  return (
    ao(l, (o, a) => {
      zp(l, o, Op(a));
    }),
    i && (i.finalized_ = !1),
    l
  );
}
var Tt = new Gy(),
  Dp = Tt.produce;
Tt.produceWithPatches.bind(Tt);
Tt.setAutoFreeze.bind(Tt);
Tt.setUseStrictShallowCopy.bind(Tt);
Tt.applyPatches.bind(Tt);
Tt.createDraft.bind(Tt);
Tt.finishDraft.bind(Tt);
function Mp(n) {
  return ({ dispatch: l, getState: o }) =>
    (a) =>
    (c) =>
      typeof c == 'function' ? c(l, o, n) : a(c);
}
var Zy = Mp(),
  ev = Mp,
  tv =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object'
              ? uo
              : uo.apply(null, arguments);
        };
function Td(n, i) {
  function l(...o) {
    if (i) {
      let a = i(...o);
      if (!a) throw new Error(cn(0));
      return {
        type: n,
        payload: a.payload,
        ...('meta' in a && { meta: a.meta }),
        ...('error' in a && { error: a.error }),
      };
    }
    return { type: n, payload: o[0] };
  }
  return (
    (l.toString = () => `${n}`),
    (l.type = n),
    (l.match = (o) => Vy(o) && o.type === n),
    l
  );
}
var Ap = class Ni extends Array {
  constructor(...i) {
    (super(...i), Object.setPrototypeOf(this, Ni.prototype));
  }
  static get [Symbol.species]() {
    return Ni;
  }
  concat(...i) {
    return super.concat.apply(this, i);
  }
  prepend(...i) {
    return i.length === 1 && Array.isArray(i[0])
      ? new Ni(...i[0].concat(this))
      : new Ni(...i.concat(this));
  }
};
function Nd(n) {
  return fn(n) ? Dp(n, () => {}) : n;
}
function Gl(n, i, l) {
  return n.has(i) ? n.get(i) : n.set(i, l(i)).get(i);
}
function nv(n) {
  return typeof n == 'boolean';
}
var rv = () =>
    function (i) {
      const {
        thunk: l = !0,
        immutableCheck: o = !0,
        serializableCheck: a = !0,
        actionCreatorCheck: c = !0,
      } = i ?? {};
      let f = new Ap();
      return (l && (nv(l) ? f.push(Zy) : f.push(ev(l.extraArgument))), f);
    },
  iv = 'RTK_autoBatch',
  Id = (n) => (i) => {
    setTimeout(i, n);
  },
  lv =
    (n = { type: 'raf' }) =>
    (i) =>
    (...l) => {
      const o = i(...l);
      let a = !0,
        c = !1,
        f = !1;
      const p = new Set(),
        h =
          n.type === 'tick'
            ? queueMicrotask
            : n.type === 'raf'
              ? typeof window < 'u' && window.requestAnimationFrame
                ? window.requestAnimationFrame
                : Id(10)
              : n.type === 'callback'
                ? n.queueNotification
                : Id(n.timeout),
        m = () => {
          ((f = !1), c && ((c = !1), p.forEach((g) => g())));
        };
      return Object.assign({}, o, {
        subscribe(g) {
          const v = () => a && g(),
            k = o.subscribe(v);
          return (
            p.add(g),
            () => {
              (k(), p.delete(g));
            }
          );
        },
        dispatch(g) {
          try {
            return (
              (a = !g?.meta?.[iv]),
              (c = !a),
              c && (f || ((f = !0), h(m))),
              o.dispatch(g)
            );
          } finally {
            a = !0;
          }
        },
      });
    },
  ov = (n) =>
    function (l) {
      const { autoBatch: o = !0 } = l ?? {};
      let a = new Ap(n);
      return (o && a.push(lv(typeof o == 'object' ? o : void 0)), a);
    };
function uv(n) {
  const i = rv(),
    {
      reducer: l = void 0,
      middleware: o,
      devTools: a = !0,
      preloadedState: c = void 0,
      enhancers: f = void 0,
    } = n || {};
  let p;
  if (typeof l == 'function') p = l;
  else if (Za(l)) p = Uy(l);
  else throw new Error(cn(1));
  let h;
  typeof o == 'function' ? (h = o(i)) : (h = i());
  let m = uo;
  a && (m = tv({ trace: !1, ...(typeof a == 'object' && a) }));
  const g = by(...h),
    v = ov(g);
  let k = typeof f == 'function' ? f(v) : v();
  const x = m(...k);
  return Tp(p, c, x);
}
function Fp(n) {
  const i = {},
    l = [];
  let o;
  const a = {
    addCase(c, f) {
      const p = typeof c == 'string' ? c : c.type;
      if (!p) throw new Error(cn(28));
      if (p in i) throw new Error(cn(29));
      return ((i[p] = f), a);
    },
    addMatcher(c, f) {
      return (l.push({ matcher: c, reducer: f }), a);
    },
    addDefaultCase(c) {
      return ((o = c), a);
    },
  };
  return (n(a), [i, l, o]);
}
function av(n) {
  return typeof n == 'function';
}
function sv(n, i) {
  let [l, o, a] = Fp(i),
    c;
  if (av(n)) c = () => Nd(n());
  else {
    const p = Nd(n);
    c = () => p;
  }
  function f(p = c(), h) {
    let m = [
      l[h.type],
      ...o.filter(({ matcher: g }) => g(h)).map(({ reducer: g }) => g),
    ];
    return (
      m.filter((g) => !!g).length === 0 && (m = [a]),
      m.reduce((g, v) => {
        if (v)
          if (Jn(g)) {
            const x = v(g, h);
            return x === void 0 ? g : x;
          } else {
            if (fn(g)) return Dp(g, (k) => v(k, h));
            {
              const k = v(g, h);
              if (k === void 0) {
                if (g === null) return g;
                throw Error(
                  'A case reducer on a non-draftable value must not return undefined',
                );
              }
              return k;
            }
          }
        return g;
      }, p)
    );
  }
  return ((f.getInitialState = c), f);
}
var cv = Symbol.for('rtk-slice-createasyncthunk');
function fv(n, i) {
  return `${n}/${i}`;
}
function dv({ creators: n } = {}) {
  const i = n?.asyncThunk?.[cv];
  return function (o) {
    const { name: a, reducerPath: c = a } = o;
    if (!a) throw new Error(cn(11));
    const f =
        (typeof o.reducers == 'function' ? o.reducers(hv()) : o.reducers) || {},
      p = Object.keys(f),
      h = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      m = {
        addCase(A, Q) {
          const Y = typeof A == 'string' ? A : A.type;
          if (!Y) throw new Error(cn(12));
          if (Y in h.sliceCaseReducersByType) throw new Error(cn(13));
          return ((h.sliceCaseReducersByType[Y] = Q), m);
        },
        addMatcher(A, Q) {
          return (h.sliceMatchers.push({ matcher: A, reducer: Q }), m);
        },
        exposeAction(A, Q) {
          return ((h.actionCreators[A] = Q), m);
        },
        exposeCaseReducer(A, Q) {
          return ((h.sliceCaseReducersByName[A] = Q), m);
        },
      };
    p.forEach((A) => {
      const Q = f[A],
        Y = {
          reducerName: A,
          type: fv(a, A),
          createNotation: typeof o.reducers == 'function',
        };
      gv(Q) ? vv(Y, Q, m, i) : mv(Y, Q, m);
    });
    function g() {
      const [A = {}, Q = [], Y = void 0] =
          typeof o.extraReducers == 'function'
            ? Fp(o.extraReducers)
            : [o.extraReducers],
        D = { ...A, ...h.sliceCaseReducersByType };
      return sv(o.initialState, (te) => {
        for (let ce in D) te.addCase(ce, D[ce]);
        for (let ce of h.sliceMatchers) te.addMatcher(ce.matcher, ce.reducer);
        for (let ce of Q) te.addMatcher(ce.matcher, ce.reducer);
        Y && te.addDefaultCase(Y);
      });
    }
    const v = (A) => A,
      k = new Map(),
      x = new WeakMap();
    let O;
    function z(A, Q) {
      return (O || (O = g()), O(A, Q));
    }
    function R() {
      return (O || (O = g()), O.getInitialState());
    }
    function L(A, Q = !1) {
      function Y(te) {
        let ce = te[A];
        return (typeof ce > 'u' && Q && (ce = Gl(x, Y, R)), ce);
      }
      function D(te = v) {
        const ce = Gl(k, Q, () => new WeakMap());
        return Gl(ce, te, () => {
          const ge = {};
          for (const [ve, re] of Object.entries(o.selectors ?? {}))
            ge[ve] = pv(re, te, () => Gl(x, te, R), Q);
          return ge;
        });
      }
      return {
        reducerPath: A,
        getSelectors: D,
        get selectors() {
          return D(Y);
        },
        selectSlice: Y,
      };
    }
    const V = {
      name: a,
      reducer: z,
      actions: h.actionCreators,
      caseReducers: h.sliceCaseReducersByName,
      getInitialState: R,
      ...L(c),
      injectInto(A, { reducerPath: Q, ...Y } = {}) {
        const D = Q ?? c;
        return (
          A.inject({ reducerPath: D, reducer: z }, Y),
          { ...V, ...L(D, !0) }
        );
      },
    };
    return V;
  };
}
function pv(n, i, l, o) {
  function a(c, ...f) {
    let p = i(c);
    return (typeof p > 'u' && o && (p = l()), n(p, ...f));
  }
  return ((a.unwrapped = n), a);
}
var ns = dv();
function hv() {
  function n(i, l) {
    return { _reducerDefinitionType: 'asyncThunk', payloadCreator: i, ...l };
  }
  return (
    (n.withTypes = () => n),
    {
      reducer(i) {
        return Object.assign(
          {
            [i.name](...l) {
              return i(...l);
            },
          }[i.name],
          { _reducerDefinitionType: 'reducer' },
        );
      },
      preparedReducer(i, l) {
        return {
          _reducerDefinitionType: 'reducerWithPrepare',
          prepare: i,
          reducer: l,
        };
      },
      asyncThunk: n,
    }
  );
}
function mv({ type: n, reducerName: i, createNotation: l }, o, a) {
  let c, f;
  if ('reducer' in o) {
    if (l && !yv(o)) throw new Error(cn(17));
    ((c = o.reducer), (f = o.prepare));
  } else c = o;
  a.addCase(n, c)
    .exposeCaseReducer(i, c)
    .exposeAction(i, f ? Td(n, f) : Td(n));
}
function gv(n) {
  return n._reducerDefinitionType === 'asyncThunk';
}
function yv(n) {
  return n._reducerDefinitionType === 'reducerWithPrepare';
}
function vv({ type: n, reducerName: i }, l, o, a) {
  if (!a) throw new Error(cn(18));
  const {
      payloadCreator: c,
      fulfilled: f,
      pending: p,
      rejected: h,
      settled: m,
      options: g,
    } = l,
    v = a(n, c, g);
  (o.exposeAction(i, v),
    f && o.addCase(v.fulfilled, f),
    p && o.addCase(v.pending, p),
    h && o.addCase(v.rejected, h),
    m && o.addMatcher(v.settled, m),
    o.exposeCaseReducer(i, {
      fulfilled: f || Jl,
      pending: p || Jl,
      rejected: h || Jl,
      settled: m || Jl,
    }));
}
function Jl() {}
function cn(n) {
  return `Minified Redux Toolkit error #${n}; visit https://redux-toolkit.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `;
}
const xv = { items: [], loading: !1, error: null },
  jp = ns({
    name: 'notes',
    initialState: xv,
    reducers: {
      fetchNotesStart(n) {
        ((n.loading = !0), (n.error = null));
      },
      fetchNotesSuccess(n, i) {
        ((n.loading = !1), (n.items = i.payload));
      },
      fetchNotesFailure(n, i) {
        ((n.loading = !1), (n.error = i.payload));
      },
      addNote(n, i) {
        n.items.push(i.payload);
      },
      updateNote(n, i) {
        const l = n.items.findIndex((o) => o.id === i.payload.id);
        l !== -1 && (n.items[l] = i.payload);
      },
      deleteNote(n, i) {
        n.items = n.items.filter((l) => l.id !== i.payload);
      },
    },
  }),
  {
    fetchNotesStart: lk,
    fetchNotesSuccess: ok,
    fetchNotesFailure: uk,
    addNote: ak,
    updateNote: sk,
    deleteNote: ck,
  } = jp.actions,
  wv = jp.reducer,
  kv = { tags: [] },
  Bp = ns({
    name: 'tags',
    initialState: kv,
    reducers: {
      addTag: (n, i) => {
        n.tags.push(i.payload);
      },
      removeTag: (n, i) => {
        n.tags = n.tags.filter((l) => l.id !== i.payload);
      },
      updateTag: (n, i) => {
        const l = n.tags.findIndex((o) => o.id === i.payload.id);
        l !== -1 && (n.tags[l] = i.payload);
      },
      setTags: (n, i) => {
        n.tags = i.payload;
      },
    },
  }),
  { addTag: fk, removeTag: dk, updateTag: pk, setTags: hk } = Bp.actions,
  Sv = Bp.reducer,
  Ev = { isSidebarOpen: !0, isModalOpen: !1 },
  Up = ns({
    name: 'ui',
    initialState: Ev,
    reducers: {
      toggleSidebar(n) {
        n.isSidebarOpen = !n.isSidebarOpen;
      },
      openModal(n) {
        n.isModalOpen = !0;
      },
      closeModal(n) {
        n.isModalOpen = !1;
      },
    },
  }),
  { toggleSidebar: mk, openModal: gk, closeModal: yk } = Up.actions,
  Cv = Up.reducer,
  _v = uv({ reducer: { notes: wv, tags: Sv, ui: Cv } }),
  Pv = () => {
    const n = vo((i) => i.notes.items || []);
    return q.jsx('div', {
      className: 'note-list',
      children:
        n.length === 0
          ? q.jsx('p', { children: 'No notes available. Create a new note!' })
          : n.map((i) =>
              q.jsx(
                'div',
                { className: 'p-2 border-b', children: i.title || 'Untitled' },
                i.id,
              ),
            ),
    });
  },
  Tv = ({ onSearch: n }) => {
    const [i, l] = le.useState(''),
      o = (a) => {
        const c = a.target.value;
        (l(c), n(c));
      };
    return q.jsx('div', {
      className: 'flex items-center border-b border-gray-300 py-2',
      children: q.jsx('input', {
        type: 'text',
        value: i,
        onChange: o,
        placeholder: 'Search notes...',
        className: 'flex-grow p-2 outline-none',
      }),
    });
  },
  bp = ({ value: n, onChange: i }) => {
    const [l, o] = le.useState(n ?? ''),
      a = (c) => {
        const f = c.target.value;
        (o(f), i?.(f));
      };
    return q.jsx('div', {
      className: 'flex flex-col h-full',
      children: q.jsx('textarea', {
        className: 'flex-1 p-4 border border-gray-300 rounded-md',
        placeholder: 'Write your notes here',
        name: 'noteContent',
        value: n ?? l,
        onChange: a,
      }),
    });
  },
  Nv = (n) => n.notes.items,
  Iv = (n, i) => n.notes.items.find((l) => l.id === i),
  zd = () => {
    const n = vo(Nv),
      [i, l] = le.useState(''),
      o = n.length;
    return q.jsxs('div', {
      className: 'flex flex-col p-4 gap-4',
      children: [
        q.jsx(Tv, { onSearch: l }),
        i &&
          q.jsxs('div', {
            className: 'text-sm text-gray-500',
            children: ['Searching for: ', i],
          }),
        q.jsxs('div', {
          className: 'grid grid-cols-2 gap-4',
          children: [
            q.jsx(bp, {}),
            q.jsxs('div', {
              className: 'p-4 border rounded-lg shadow-md',
              children: [
                'Preview',
                q.jsxs('div', {
                  className: 'text-xs text-gray-500 mt-2',
                  children: ['Total notes: ', o],
                }),
              ],
            }),
          ],
        }),
        q.jsxs('div', {
          className: 'text-xs text-gray-500',
          children: ['Showing ', o, ' notes'],
        }),
        q.jsx(Pv, {}),
      ],
    });
  };
function zv(n, i) {
  const l = {};
  return (n[n.length - 1] === '' ? [...n, ''] : n)
    .join((l.padRight ? ' ' : '') + ',' + (l.padLeft === !1 ? '' : ' '))
    .trim();
}
const Rv = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  Lv = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  Ov = {};
function Rd(n, i) {
  return (Ov.jsx ? Lv : Rv).test(n);
}
const Dv = /[ \t\n\f\r]/g;
function Mv(n) {
  return typeof n == 'object' ? (n.type === 'text' ? Ld(n.value) : !1) : Ld(n);
}
function Ld(n) {
  return n.replace(Dv, '') === '';
}
class Ai {
  constructor(i, l, o) {
    ((this.normal = l), (this.property = i), o && (this.space = o));
  }
}
Ai.prototype.normal = {};
Ai.prototype.property = {};
Ai.prototype.space = void 0;
function Vp(n, i) {
  const l = {},
    o = {};
  for (const a of n) (Object.assign(l, a.property), Object.assign(o, a.normal));
  return new Ai(l, o, i);
}
function Va(n) {
  return n.toLowerCase();
}
class vt {
  constructor(i, l) {
    ((this.attribute = l), (this.property = i));
  }
}
vt.prototype.attribute = '';
vt.prototype.booleanish = !1;
vt.prototype.boolean = !1;
vt.prototype.commaOrSpaceSeparated = !1;
vt.prototype.commaSeparated = !1;
vt.prototype.defined = !1;
vt.prototype.mustUseProperty = !1;
vt.prototype.number = !1;
vt.prototype.overloadedBoolean = !1;
vt.prototype.property = '';
vt.prototype.spaceSeparated = !1;
vt.prototype.space = void 0;
let Av = 0;
const ye = er(),
  We = er(),
  Ha = er(),
  b = er(),
  Oe = er(),
  Lr = er(),
  Ct = er();
function er() {
  return 2 ** ++Av;
}
const $a = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        boolean: ye,
        booleanish: We,
        commaOrSpaceSeparated: Ct,
        commaSeparated: Lr,
        number: b,
        overloadedBoolean: Ha,
        spaceSeparated: Oe,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  ka = Object.keys($a);
class rs extends vt {
  constructor(i, l, o, a) {
    let c = -1;
    if ((super(i, l), Od(this, 'space', a), typeof o == 'number'))
      for (; ++c < ka.length; ) {
        const f = ka[c];
        Od(this, ka[c], (o & $a[f]) === $a[f]);
      }
  }
}
rs.prototype.defined = !0;
function Od(n, i, l) {
  l && (n[i] = l);
}
function Mr(n) {
  const i = {},
    l = {};
  for (const [o, a] of Object.entries(n.properties)) {
    const c = new rs(o, n.transform(n.attributes || {}, o), a, n.space);
    (n.mustUseProperty &&
      n.mustUseProperty.includes(o) &&
      (c.mustUseProperty = !0),
      (i[o] = c),
      (l[Va(o)] = o),
      (l[Va(c.attribute)] = o));
  }
  return new Ai(i, l, n.space);
}
const Hp = Mr({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: We,
    ariaAutoComplete: null,
    ariaBusy: We,
    ariaChecked: We,
    ariaColCount: b,
    ariaColIndex: b,
    ariaColSpan: b,
    ariaControls: Oe,
    ariaCurrent: null,
    ariaDescribedBy: Oe,
    ariaDetails: null,
    ariaDisabled: We,
    ariaDropEffect: Oe,
    ariaErrorMessage: null,
    ariaExpanded: We,
    ariaFlowTo: Oe,
    ariaGrabbed: We,
    ariaHasPopup: null,
    ariaHidden: We,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: Oe,
    ariaLevel: b,
    ariaLive: null,
    ariaModal: We,
    ariaMultiLine: We,
    ariaMultiSelectable: We,
    ariaOrientation: null,
    ariaOwns: Oe,
    ariaPlaceholder: null,
    ariaPosInSet: b,
    ariaPressed: We,
    ariaReadOnly: We,
    ariaRelevant: null,
    ariaRequired: We,
    ariaRoleDescription: Oe,
    ariaRowCount: b,
    ariaRowIndex: b,
    ariaRowSpan: b,
    ariaSelected: We,
    ariaSetSize: b,
    ariaSort: null,
    ariaValueMax: b,
    ariaValueMin: b,
    ariaValueNow: b,
    ariaValueText: null,
    role: null,
  },
  transform(n, i) {
    return i === 'role' ? i : 'aria-' + i.slice(4).toLowerCase();
  },
});
function $p(n, i) {
  return i in n ? n[i] : i;
}
function Wp(n, i) {
  return $p(n, i.toLowerCase());
}
const Fv = Mr({
    attributes: {
      acceptcharset: 'accept-charset',
      classname: 'class',
      htmlfor: 'for',
      httpequiv: 'http-equiv',
    },
    mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
    properties: {
      abbr: null,
      accept: Lr,
      acceptCharset: Oe,
      accessKey: Oe,
      action: null,
      allow: null,
      allowFullScreen: ye,
      allowPaymentRequest: ye,
      allowUserMedia: ye,
      alt: null,
      as: null,
      async: ye,
      autoCapitalize: null,
      autoComplete: Oe,
      autoFocus: ye,
      autoPlay: ye,
      blocking: Oe,
      capture: null,
      charSet: null,
      checked: ye,
      cite: null,
      className: Oe,
      cols: b,
      colSpan: null,
      content: null,
      contentEditable: We,
      controls: ye,
      controlsList: Oe,
      coords: b | Lr,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: ye,
      defer: ye,
      dir: null,
      dirName: null,
      disabled: ye,
      download: Ha,
      draggable: We,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: ye,
      formTarget: null,
      headers: Oe,
      height: b,
      hidden: Ha,
      high: b,
      href: null,
      hrefLang: null,
      htmlFor: Oe,
      httpEquiv: Oe,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: ye,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: ye,
      itemId: null,
      itemProp: Oe,
      itemRef: Oe,
      itemScope: ye,
      itemType: Oe,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: ye,
      low: b,
      manifest: null,
      max: null,
      maxLength: b,
      media: null,
      method: null,
      min: null,
      minLength: b,
      multiple: ye,
      muted: ye,
      name: null,
      nonce: null,
      noModule: ye,
      noValidate: ye,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforeMatch: null,
      onBeforePrint: null,
      onBeforeToggle: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextLost: null,
      onContextMenu: null,
      onContextRestored: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onScrollEnd: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: ye,
      optimum: b,
      pattern: null,
      ping: Oe,
      placeholder: null,
      playsInline: ye,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: ye,
      referrerPolicy: null,
      rel: Oe,
      required: ye,
      reversed: ye,
      rows: b,
      rowSpan: b,
      sandbox: Oe,
      scope: null,
      scoped: ye,
      seamless: ye,
      selected: ye,
      shadowRootClonable: ye,
      shadowRootDelegatesFocus: ye,
      shadowRootMode: null,
      shape: null,
      size: b,
      sizes: null,
      slot: null,
      span: b,
      spellCheck: We,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: b,
      step: null,
      style: null,
      tabIndex: b,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: ye,
      useMap: null,
      value: We,
      width: b,
      wrap: null,
      writingSuggestions: null,
      align: null,
      aLink: null,
      archive: Oe,
      axis: null,
      background: null,
      bgColor: null,
      border: b,
      borderColor: null,
      bottomMargin: b,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: ye,
      declare: ye,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: b,
      leftMargin: b,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: b,
      marginWidth: b,
      noResize: ye,
      noHref: ye,
      noShade: ye,
      noWrap: ye,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: b,
      rules: null,
      scheme: null,
      scrolling: We,
      standby: null,
      summary: null,
      text: null,
      topMargin: b,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: b,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: ye,
      disableRemotePlayback: ye,
      prefix: null,
      property: null,
      results: b,
      security: null,
      unselectable: null,
    },
    space: 'html',
    transform: Wp,
  }),
  jv = Mr({
    attributes: {
      accentHeight: 'accent-height',
      alignmentBaseline: 'alignment-baseline',
      arabicForm: 'arabic-form',
      baselineShift: 'baseline-shift',
      capHeight: 'cap-height',
      className: 'class',
      clipPath: 'clip-path',
      clipRule: 'clip-rule',
      colorInterpolation: 'color-interpolation',
      colorInterpolationFilters: 'color-interpolation-filters',
      colorProfile: 'color-profile',
      colorRendering: 'color-rendering',
      crossOrigin: 'crossorigin',
      dataType: 'datatype',
      dominantBaseline: 'dominant-baseline',
      enableBackground: 'enable-background',
      fillOpacity: 'fill-opacity',
      fillRule: 'fill-rule',
      floodColor: 'flood-color',
      floodOpacity: 'flood-opacity',
      fontFamily: 'font-family',
      fontSize: 'font-size',
      fontSizeAdjust: 'font-size-adjust',
      fontStretch: 'font-stretch',
      fontStyle: 'font-style',
      fontVariant: 'font-variant',
      fontWeight: 'font-weight',
      glyphName: 'glyph-name',
      glyphOrientationHorizontal: 'glyph-orientation-horizontal',
      glyphOrientationVertical: 'glyph-orientation-vertical',
      hrefLang: 'hreflang',
      horizAdvX: 'horiz-adv-x',
      horizOriginX: 'horiz-origin-x',
      horizOriginY: 'horiz-origin-y',
      imageRendering: 'image-rendering',
      letterSpacing: 'letter-spacing',
      lightingColor: 'lighting-color',
      markerEnd: 'marker-end',
      markerMid: 'marker-mid',
      markerStart: 'marker-start',
      navDown: 'nav-down',
      navDownLeft: 'nav-down-left',
      navDownRight: 'nav-down-right',
      navLeft: 'nav-left',
      navNext: 'nav-next',
      navPrev: 'nav-prev',
      navRight: 'nav-right',
      navUp: 'nav-up',
      navUpLeft: 'nav-up-left',
      navUpRight: 'nav-up-right',
      onAbort: 'onabort',
      onActivate: 'onactivate',
      onAfterPrint: 'onafterprint',
      onBeforePrint: 'onbeforeprint',
      onBegin: 'onbegin',
      onCancel: 'oncancel',
      onCanPlay: 'oncanplay',
      onCanPlayThrough: 'oncanplaythrough',
      onChange: 'onchange',
      onClick: 'onclick',
      onClose: 'onclose',
      onCopy: 'oncopy',
      onCueChange: 'oncuechange',
      onCut: 'oncut',
      onDblClick: 'ondblclick',
      onDrag: 'ondrag',
      onDragEnd: 'ondragend',
      onDragEnter: 'ondragenter',
      onDragExit: 'ondragexit',
      onDragLeave: 'ondragleave',
      onDragOver: 'ondragover',
      onDragStart: 'ondragstart',
      onDrop: 'ondrop',
      onDurationChange: 'ondurationchange',
      onEmptied: 'onemptied',
      onEnd: 'onend',
      onEnded: 'onended',
      onError: 'onerror',
      onFocus: 'onfocus',
      onFocusIn: 'onfocusin',
      onFocusOut: 'onfocusout',
      onHashChange: 'onhashchange',
      onInput: 'oninput',
      onInvalid: 'oninvalid',
      onKeyDown: 'onkeydown',
      onKeyPress: 'onkeypress',
      onKeyUp: 'onkeyup',
      onLoad: 'onload',
      onLoadedData: 'onloadeddata',
      onLoadedMetadata: 'onloadedmetadata',
      onLoadStart: 'onloadstart',
      onMessage: 'onmessage',
      onMouseDown: 'onmousedown',
      onMouseEnter: 'onmouseenter',
      onMouseLeave: 'onmouseleave',
      onMouseMove: 'onmousemove',
      onMouseOut: 'onmouseout',
      onMouseOver: 'onmouseover',
      onMouseUp: 'onmouseup',
      onMouseWheel: 'onmousewheel',
      onOffline: 'onoffline',
      onOnline: 'ononline',
      onPageHide: 'onpagehide',
      onPageShow: 'onpageshow',
      onPaste: 'onpaste',
      onPause: 'onpause',
      onPlay: 'onplay',
      onPlaying: 'onplaying',
      onPopState: 'onpopstate',
      onProgress: 'onprogress',
      onRateChange: 'onratechange',
      onRepeat: 'onrepeat',
      onReset: 'onreset',
      onResize: 'onresize',
      onScroll: 'onscroll',
      onSeeked: 'onseeked',
      onSeeking: 'onseeking',
      onSelect: 'onselect',
      onShow: 'onshow',
      onStalled: 'onstalled',
      onStorage: 'onstorage',
      onSubmit: 'onsubmit',
      onSuspend: 'onsuspend',
      onTimeUpdate: 'ontimeupdate',
      onToggle: 'ontoggle',
      onUnload: 'onunload',
      onVolumeChange: 'onvolumechange',
      onWaiting: 'onwaiting',
      onZoom: 'onzoom',
      overlinePosition: 'overline-position',
      overlineThickness: 'overline-thickness',
      paintOrder: 'paint-order',
      panose1: 'panose-1',
      pointerEvents: 'pointer-events',
      referrerPolicy: 'referrerpolicy',
      renderingIntent: 'rendering-intent',
      shapeRendering: 'shape-rendering',
      stopColor: 'stop-color',
      stopOpacity: 'stop-opacity',
      strikethroughPosition: 'strikethrough-position',
      strikethroughThickness: 'strikethrough-thickness',
      strokeDashArray: 'stroke-dasharray',
      strokeDashOffset: 'stroke-dashoffset',
      strokeLineCap: 'stroke-linecap',
      strokeLineJoin: 'stroke-linejoin',
      strokeMiterLimit: 'stroke-miterlimit',
      strokeOpacity: 'stroke-opacity',
      strokeWidth: 'stroke-width',
      tabIndex: 'tabindex',
      textAnchor: 'text-anchor',
      textDecoration: 'text-decoration',
      textRendering: 'text-rendering',
      transformOrigin: 'transform-origin',
      typeOf: 'typeof',
      underlinePosition: 'underline-position',
      underlineThickness: 'underline-thickness',
      unicodeBidi: 'unicode-bidi',
      unicodeRange: 'unicode-range',
      unitsPerEm: 'units-per-em',
      vAlphabetic: 'v-alphabetic',
      vHanging: 'v-hanging',
      vIdeographic: 'v-ideographic',
      vMathematical: 'v-mathematical',
      vectorEffect: 'vector-effect',
      vertAdvY: 'vert-adv-y',
      vertOriginX: 'vert-origin-x',
      vertOriginY: 'vert-origin-y',
      wordSpacing: 'word-spacing',
      writingMode: 'writing-mode',
      xHeight: 'x-height',
      playbackOrder: 'playbackorder',
      timelineBegin: 'timelinebegin',
    },
    properties: {
      about: Ct,
      accentHeight: b,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: b,
      amplitude: b,
      arabicForm: null,
      ascent: b,
      attributeName: null,
      attributeType: null,
      azimuth: b,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: b,
      by: null,
      calcMode: null,
      capHeight: b,
      className: Oe,
      clip: null,
      clipPath: null,
      clipPathUnits: null,
      clipRule: null,
      color: null,
      colorInterpolation: null,
      colorInterpolationFilters: null,
      colorProfile: null,
      colorRendering: null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      crossOrigin: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      dataType: null,
      defaultAction: null,
      descent: b,
      diffuseConstant: b,
      direction: null,
      display: null,
      dur: null,
      divisor: b,
      dominantBaseline: null,
      download: ye,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: b,
      enableBackground: null,
      end: null,
      event: null,
      exponent: b,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: b,
      fillRule: null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      floodColor: null,
      floodOpacity: null,
      focusable: null,
      focusHighlight: null,
      fontFamily: null,
      fontSize: null,
      fontSizeAdjust: null,
      fontStretch: null,
      fontStyle: null,
      fontVariant: null,
      fontWeight: null,
      format: null,
      fr: null,
      from: null,
      fx: null,
      fy: null,
      g1: Lr,
      g2: Lr,
      glyphName: Lr,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: b,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: b,
      horizOriginX: b,
      horizOriginY: b,
      id: null,
      ideographic: b,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: b,
      k: b,
      k1: b,
      k2: b,
      k3: b,
      k4: b,
      kernelMatrix: Ct,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: b,
      local: null,
      markerEnd: null,
      markerMid: null,
      markerStart: null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: b,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      navDown: null,
      navDownLeft: null,
      navDownRight: null,
      navLeft: null,
      navNext: null,
      navPrev: null,
      navRight: null,
      navUp: null,
      navUpLeft: null,
      navUpRight: null,
      numOctaves: null,
      observer: null,
      offset: null,
      onAbort: null,
      onActivate: null,
      onAfterPrint: null,
      onBeforePrint: null,
      onBegin: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnd: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFocusIn: null,
      onFocusOut: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadStart: null,
      onMessage: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onMouseWheel: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRepeat: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onShow: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onZoom: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      overlinePosition: b,
      overlineThickness: b,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: b,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: Oe,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: b,
      pointsAtY: b,
      pointsAtZ: b,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: Ct,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: Ct,
      rev: Ct,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: Ct,
      requiredFeatures: Ct,
      requiredFonts: Ct,
      requiredFormats: Ct,
      resource: null,
      restart: null,
      result: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      shapeRendering: null,
      side: null,
      slope: null,
      snapshotTime: null,
      specularConstant: b,
      specularExponent: b,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: b,
      strikethroughThickness: b,
      string: null,
      stroke: null,
      strokeDashArray: Ct,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: b,
      strokeOpacity: b,
      strokeWidth: null,
      style: null,
      surfaceScale: b,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: Ct,
      tabIndex: b,
      tableValues: null,
      target: null,
      targetX: b,
      targetY: b,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: Ct,
      to: null,
      transform: null,
      transformOrigin: null,
      u1: null,
      u2: null,
      underlinePosition: b,
      underlineThickness: b,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: b,
      values: null,
      vAlphabetic: b,
      vMathematical: b,
      vectorEffect: null,
      vHanging: b,
      vIdeographic: b,
      version: null,
      vertAdvY: b,
      vertOriginX: b,
      vertOriginY: b,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      wordSpacing: null,
      writingMode: null,
      x: null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      xHeight: b,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null,
    },
    space: 'svg',
    transform: $p,
  }),
  Qp = Mr({
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null,
    },
    space: 'xlink',
    transform(n, i) {
      return 'xlink:' + i.slice(5).toLowerCase();
    },
  }),
  qp = Mr({
    attributes: { xmlnsxlink: 'xmlns:xlink' },
    properties: { xmlnsXLink: null, xmlns: null },
    space: 'xmlns',
    transform: Wp,
  }),
  Kp = Mr({
    properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
    space: 'xml',
    transform(n, i) {
      return 'xml:' + i.slice(3).toLowerCase();
    },
  }),
  Bv = {
    classId: 'classID',
    dataType: 'datatype',
    itemId: 'itemID',
    strokeDashArray: 'strokeDasharray',
    strokeDashOffset: 'strokeDashoffset',
    strokeLineCap: 'strokeLinecap',
    strokeLineJoin: 'strokeLinejoin',
    strokeMiterLimit: 'strokeMiterlimit',
    typeOf: 'typeof',
    xLinkActuate: 'xlinkActuate',
    xLinkArcRole: 'xlinkArcrole',
    xLinkHref: 'xlinkHref',
    xLinkRole: 'xlinkRole',
    xLinkShow: 'xlinkShow',
    xLinkTitle: 'xlinkTitle',
    xLinkType: 'xlinkType',
    xmlnsXLink: 'xmlnsXlink',
  },
  Uv = /[A-Z]/g,
  Dd = /-[a-z]/g,
  bv = /^data[-\w.:]+$/i;
function Vv(n, i) {
  const l = Va(i);
  let o = i,
    a = vt;
  if (l in n.normal) return n.property[n.normal[l]];
  if (l.length > 4 && l.slice(0, 4) === 'data' && bv.test(i)) {
    if (i.charAt(4) === '-') {
      const c = i.slice(5).replace(Dd, $v);
      o = 'data' + c.charAt(0).toUpperCase() + c.slice(1);
    } else {
      const c = i.slice(4);
      if (!Dd.test(c)) {
        let f = c.replace(Uv, Hv);
        (f.charAt(0) !== '-' && (f = '-' + f), (i = 'data' + f));
      }
    }
    a = rs;
  }
  return new a(o, i);
}
function Hv(n) {
  return '-' + n.toLowerCase();
}
function $v(n) {
  return n.charAt(1).toUpperCase();
}
const Wv = Vp([Hp, Fv, Qp, qp, Kp], 'html'),
  is = Vp([Hp, jv, Qp, qp, Kp], 'svg');
function Qv(n) {
  return n.join(' ').trim();
}
var Nr = {},
  Sa,
  Md;
function qv() {
  if (Md) return Sa;
  Md = 1;
  var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
    i = /\n/g,
    l = /^\s*/,
    o = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
    a = /^:\s*/,
    c = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
    f = /^[;\s]*/,
    p = /^\s+|\s+$/g,
    h = `
`,
    m = '/',
    g = '*',
    v = '',
    k = 'comment',
    x = 'declaration';
  Sa = function (z, R) {
    if (typeof z != 'string')
      throw new TypeError('First argument must be a string');
    if (!z) return [];
    R = R || {};
    var L = 1,
      V = 1;
    function A(G) {
      var X = G.match(i);
      X && (L += X.length);
      var ue = G.lastIndexOf(h);
      V = ~ue ? G.length - ue : V + G.length;
    }
    function Q() {
      var G = { line: L, column: V };
      return function (X) {
        return ((X.position = new Y(G)), ce(), X);
      };
    }
    function Y(G) {
      ((this.start = G),
        (this.end = { line: L, column: V }),
        (this.source = R.source));
    }
    Y.prototype.content = z;
    function D(G) {
      var X = new Error(R.source + ':' + L + ':' + V + ': ' + G);
      if (
        ((X.reason = G),
        (X.filename = R.source),
        (X.line = L),
        (X.column = V),
        (X.source = z),
        !R.silent)
      )
        throw X;
    }
    function te(G) {
      var X = G.exec(z);
      if (X) {
        var ue = X[0];
        return (A(ue), (z = z.slice(ue.length)), X);
      }
    }
    function ce() {
      te(l);
    }
    function ge(G) {
      var X;
      for (G = G || []; (X = ve()); ) X !== !1 && G.push(X);
      return G;
    }
    function ve() {
      var G = Q();
      if (!(m != z.charAt(0) || g != z.charAt(1))) {
        for (
          var X = 2;
          v != z.charAt(X) && (g != z.charAt(X) || m != z.charAt(X + 1));

        )
          ++X;
        if (((X += 2), v === z.charAt(X - 1)))
          return D('End of comment missing');
        var ue = z.slice(2, X - 2);
        return (
          (V += 2),
          A(ue),
          (z = z.slice(X)),
          (V += 2),
          G({ type: k, comment: ue })
        );
      }
    }
    function re() {
      var G = Q(),
        X = te(o);
      if (X) {
        if ((ve(), !te(a))) return D("property missing ':'");
        var ue = te(c),
          Ce = G({
            type: x,
            property: O(X[0].replace(n, v)),
            value: ue ? O(ue[0].replace(n, v)) : v,
          });
        return (te(f), Ce);
      }
    }
    function Z() {
      var G = [];
      ge(G);
      for (var X; (X = re()); ) X !== !1 && (G.push(X), ge(G));
      return G;
    }
    return (ce(), Z());
  };
  function O(z) {
    return z ? z.replace(p, v) : v;
  }
  return Sa;
}
var Ad;
function Kv() {
  if (Ad) return Nr;
  Ad = 1;
  var n =
    (Nr && Nr.__importDefault) ||
    function (o) {
      return o && o.__esModule ? o : { default: o };
    };
  (Object.defineProperty(Nr, '__esModule', { value: !0 }), (Nr.default = l));
  var i = n(qv());
  function l(o, a) {
    var c = null;
    if (!o || typeof o != 'string') return c;
    var f = (0, i.default)(o),
      p = typeof a == 'function';
    return (
      f.forEach(function (h) {
        if (h.type === 'declaration') {
          var m = h.property,
            g = h.value;
          p ? a(m, g, h) : g && ((c = c || {}), (c[m] = g));
        }
      }),
      c
    );
  }
  return Nr;
}
var Ci = {},
  Fd;
function Xv() {
  if (Fd) return Ci;
  ((Fd = 1),
    Object.defineProperty(Ci, '__esModule', { value: !0 }),
    (Ci.camelCase = void 0));
  var n = /^--[a-zA-Z0-9_-]+$/,
    i = /-([a-z])/g,
    l = /^[^-]+$/,
    o = /^-(webkit|moz|ms|o|khtml)-/,
    a = /^-(ms)-/,
    c = function (m) {
      return !m || l.test(m) || n.test(m);
    },
    f = function (m, g) {
      return g.toUpperCase();
    },
    p = function (m, g) {
      return ''.concat(g, '-');
    },
    h = function (m, g) {
      return (
        g === void 0 && (g = {}),
        c(m)
          ? m
          : ((m = m.toLowerCase()),
            g.reactCompat ? (m = m.replace(a, p)) : (m = m.replace(o, p)),
            m.replace(i, f))
      );
    };
  return ((Ci.camelCase = h), Ci);
}
var _i, jd;
function Yv() {
  if (jd) return _i;
  jd = 1;
  var n =
      (_i && _i.__importDefault) ||
      function (a) {
        return a && a.__esModule ? a : { default: a };
      },
    i = n(Kv()),
    l = Xv();
  function o(a, c) {
    var f = {};
    return (
      !a ||
        typeof a != 'string' ||
        (0, i.default)(a, function (p, h) {
          p && h && (f[(0, l.camelCase)(p, c)] = h);
        }),
      f
    );
  }
  return ((o.default = o), (_i = o), _i);
}
var Gv = Yv();
const Jv = ho(Gv),
  Xp = Yp('end'),
  ls = Yp('start');
function Yp(n) {
  return i;
  function i(l) {
    const o = (l && l.position && l.position[n]) || {};
    if (
      typeof o.line == 'number' &&
      o.line > 0 &&
      typeof o.column == 'number' &&
      o.column > 0
    )
      return {
        line: o.line,
        column: o.column,
        offset:
          typeof o.offset == 'number' && o.offset > -1 ? o.offset : void 0,
      };
  }
}
function Zv(n) {
  const i = ls(n),
    l = Xp(n);
  if (i && l) return { start: i, end: l };
}
function Ii(n) {
  return !n || typeof n != 'object'
    ? ''
    : 'position' in n || 'type' in n
      ? Bd(n.position)
      : 'start' in n || 'end' in n
        ? Bd(n)
        : 'line' in n || 'column' in n
          ? Wa(n)
          : '';
}
function Wa(n) {
  return Ud(n && n.line) + ':' + Ud(n && n.column);
}
function Bd(n) {
  return Wa(n && n.start) + '-' + Wa(n && n.end);
}
function Ud(n) {
  return n && typeof n == 'number' ? n : 1;
}
class ot extends Error {
  constructor(i, l, o) {
    (super(), typeof l == 'string' && ((o = l), (l = void 0)));
    let a = '',
      c = {},
      f = !1;
    if (
      (l &&
        ('line' in l && 'column' in l
          ? (c = { place: l })
          : 'start' in l && 'end' in l
            ? (c = { place: l })
            : 'type' in l
              ? (c = { ancestors: [l], place: l.position })
              : (c = { ...l })),
      typeof i == 'string'
        ? (a = i)
        : !c.cause && i && ((f = !0), (a = i.message), (c.cause = i)),
      !c.ruleId && !c.source && typeof o == 'string')
    ) {
      const h = o.indexOf(':');
      h === -1
        ? (c.ruleId = o)
        : ((c.source = o.slice(0, h)), (c.ruleId = o.slice(h + 1)));
    }
    if (!c.place && c.ancestors && c.ancestors) {
      const h = c.ancestors[c.ancestors.length - 1];
      h && (c.place = h.position);
    }
    const p = c.place && 'start' in c.place ? c.place.start : c.place;
    ((this.ancestors = c.ancestors || void 0),
      (this.cause = c.cause || void 0),
      (this.column = p ? p.column : void 0),
      (this.fatal = void 0),
      (this.file = ''),
      (this.message = a),
      (this.line = p ? p.line : void 0),
      (this.name = Ii(c.place) || '1:1'),
      (this.place = c.place || void 0),
      (this.reason = this.message),
      (this.ruleId = c.ruleId || void 0),
      (this.source = c.source || void 0),
      (this.stack =
        f && c.cause && typeof c.cause.stack == 'string' ? c.cause.stack : ''),
      (this.actual = void 0),
      (this.expected = void 0),
      (this.note = void 0),
      (this.url = void 0));
  }
}
ot.prototype.file = '';
ot.prototype.name = '';
ot.prototype.reason = '';
ot.prototype.message = '';
ot.prototype.stack = '';
ot.prototype.column = void 0;
ot.prototype.line = void 0;
ot.prototype.ancestors = void 0;
ot.prototype.cause = void 0;
ot.prototype.fatal = void 0;
ot.prototype.place = void 0;
ot.prototype.ruleId = void 0;
ot.prototype.source = void 0;
const os = {}.hasOwnProperty,
  e1 = new Map(),
  t1 = /[A-Z]/g,
  n1 = new Set(['table', 'tbody', 'thead', 'tfoot', 'tr']),
  r1 = new Set(['td', 'th']),
  Gp = 'https://github.com/syntax-tree/hast-util-to-jsx-runtime';
function i1(n, i) {
  if (!i || i.Fragment === void 0)
    throw new TypeError('Expected `Fragment` in options');
  const l = i.filePath || void 0;
  let o;
  if (i.development) {
    if (typeof i.jsxDEV != 'function')
      throw new TypeError(
        'Expected `jsxDEV` in options when `development: true`',
      );
    o = d1(l, i.jsxDEV);
  } else {
    if (typeof i.jsx != 'function')
      throw new TypeError('Expected `jsx` in production options');
    if (typeof i.jsxs != 'function')
      throw new TypeError('Expected `jsxs` in production options');
    o = f1(l, i.jsx, i.jsxs);
  }
  const a = {
      Fragment: i.Fragment,
      ancestors: [],
      components: i.components || {},
      create: o,
      elementAttributeNameCase: i.elementAttributeNameCase || 'react',
      evaluater: i.createEvaluater ? i.createEvaluater() : void 0,
      filePath: l,
      ignoreInvalidStyle: i.ignoreInvalidStyle || !1,
      passKeys: i.passKeys !== !1,
      passNode: i.passNode || !1,
      schema: i.space === 'svg' ? is : Wv,
      stylePropertyNameCase: i.stylePropertyNameCase || 'dom',
      tableCellAlignToStyle: i.tableCellAlignToStyle !== !1,
    },
    c = Jp(a, n, void 0);
  return c && typeof c != 'string'
    ? c
    : a.create(n, a.Fragment, { children: c || void 0 }, void 0);
}
function Jp(n, i, l) {
  if (i.type === 'element') return l1(n, i, l);
  if (i.type === 'mdxFlowExpression' || i.type === 'mdxTextExpression')
    return o1(n, i);
  if (i.type === 'mdxJsxFlowElement' || i.type === 'mdxJsxTextElement')
    return a1(n, i, l);
  if (i.type === 'mdxjsEsm') return u1(n, i);
  if (i.type === 'root') return s1(n, i, l);
  if (i.type === 'text') return c1(n, i);
}
function l1(n, i, l) {
  const o = n.schema;
  let a = o;
  (i.tagName.toLowerCase() === 'svg' &&
    o.space === 'html' &&
    ((a = is), (n.schema = a)),
    n.ancestors.push(i));
  const c = eh(n, i.tagName, !1),
    f = p1(n, i);
  let p = as(n, i);
  return (
    n1.has(i.tagName) &&
      (p = p.filter(function (h) {
        return typeof h == 'string' ? !Mv(h) : !0;
      })),
    Zp(n, f, c, i),
    us(f, p),
    n.ancestors.pop(),
    (n.schema = o),
    n.create(i, c, f, l)
  );
}
function o1(n, i) {
  if (i.data && i.data.estree && n.evaluater) {
    const o = i.data.estree.body[0];
    return (o.type, n.evaluater.evaluateExpression(o.expression));
  }
  Di(n, i.position);
}
function u1(n, i) {
  if (i.data && i.data.estree && n.evaluater)
    return n.evaluater.evaluateProgram(i.data.estree);
  Di(n, i.position);
}
function a1(n, i, l) {
  const o = n.schema;
  let a = o;
  (i.name === 'svg' && o.space === 'html' && ((a = is), (n.schema = a)),
    n.ancestors.push(i));
  const c = i.name === null ? n.Fragment : eh(n, i.name, !0),
    f = h1(n, i),
    p = as(n, i);
  return (
    Zp(n, f, c, i),
    us(f, p),
    n.ancestors.pop(),
    (n.schema = o),
    n.create(i, c, f, l)
  );
}
function s1(n, i, l) {
  const o = {};
  return (us(o, as(n, i)), n.create(i, n.Fragment, o, l));
}
function c1(n, i) {
  return i.value;
}
function Zp(n, i, l, o) {
  typeof l != 'string' && l !== n.Fragment && n.passNode && (i.node = o);
}
function us(n, i) {
  if (i.length > 0) {
    const l = i.length > 1 ? i : i[0];
    l && (n.children = l);
  }
}
function f1(n, i, l) {
  return o;
  function o(a, c, f, p) {
    const m = Array.isArray(f.children) ? l : i;
    return p ? m(c, f, p) : m(c, f);
  }
}
function d1(n, i) {
  return l;
  function l(o, a, c, f) {
    const p = Array.isArray(c.children),
      h = ls(o);
    return i(
      a,
      c,
      f,
      p,
      {
        columnNumber: h ? h.column - 1 : void 0,
        fileName: n,
        lineNumber: h ? h.line : void 0,
      },
      void 0,
    );
  }
}
function p1(n, i) {
  const l = {};
  let o, a;
  for (a in i.properties)
    if (a !== 'children' && os.call(i.properties, a)) {
      const c = m1(n, a, i.properties[a]);
      if (c) {
        const [f, p] = c;
        n.tableCellAlignToStyle &&
        f === 'align' &&
        typeof p == 'string' &&
        r1.has(i.tagName)
          ? (o = p)
          : (l[f] = p);
      }
    }
  if (o) {
    const c = l.style || (l.style = {});
    c[n.stylePropertyNameCase === 'css' ? 'text-align' : 'textAlign'] = o;
  }
  return l;
}
function h1(n, i) {
  const l = {};
  for (const o of i.attributes)
    if (o.type === 'mdxJsxExpressionAttribute')
      if (o.data && o.data.estree && n.evaluater) {
        const c = o.data.estree.body[0];
        c.type;
        const f = c.expression;
        f.type;
        const p = f.properties[0];
        (p.type, Object.assign(l, n.evaluater.evaluateExpression(p.argument)));
      } else Di(n, i.position);
    else {
      const a = o.name;
      let c;
      if (o.value && typeof o.value == 'object')
        if (o.value.data && o.value.data.estree && n.evaluater) {
          const p = o.value.data.estree.body[0];
          (p.type, (c = n.evaluater.evaluateExpression(p.expression)));
        } else Di(n, i.position);
      else c = o.value === null ? !0 : o.value;
      l[a] = c;
    }
  return l;
}
function as(n, i) {
  const l = [];
  let o = -1;
  const a = n.passKeys ? new Map() : e1;
  for (; ++o < i.children.length; ) {
    const c = i.children[o];
    let f;
    if (n.passKeys) {
      const h =
        c.type === 'element'
          ? c.tagName
          : c.type === 'mdxJsxFlowElement' || c.type === 'mdxJsxTextElement'
            ? c.name
            : void 0;
      if (h) {
        const m = a.get(h) || 0;
        ((f = h + '-' + m), a.set(h, m + 1));
      }
    }
    const p = Jp(n, c, f);
    p !== void 0 && l.push(p);
  }
  return l;
}
function m1(n, i, l) {
  const o = Vv(n.schema, i);
  if (!(l == null || (typeof l == 'number' && Number.isNaN(l)))) {
    if (
      (Array.isArray(l) && (l = o.commaSeparated ? zv(l) : Qv(l)),
      o.property === 'style')
    ) {
      let a = typeof l == 'object' ? l : g1(n, String(l));
      return (n.stylePropertyNameCase === 'css' && (a = y1(a)), ['style', a]);
    }
    return [
      n.elementAttributeNameCase === 'react' && o.space
        ? Bv[o.property] || o.property
        : o.attribute,
      l,
    ];
  }
}
function g1(n, i) {
  try {
    return Jv(i, { reactCompat: !0 });
  } catch (l) {
    if (n.ignoreInvalidStyle) return {};
    const o = l,
      a = new ot('Cannot parse `style` attribute', {
        ancestors: n.ancestors,
        cause: o,
        ruleId: 'style',
        source: 'hast-util-to-jsx-runtime',
      });
    throw (
      (a.file = n.filePath || void 0),
      (a.url = Gp + '#cannot-parse-style-attribute'),
      a
    );
  }
}
function eh(n, i, l) {
  let o;
  if (!l) o = { type: 'Literal', value: i };
  else if (i.includes('.')) {
    const a = i.split('.');
    let c = -1,
      f;
    for (; ++c < a.length; ) {
      const p = Rd(a[c])
        ? { type: 'Identifier', name: a[c] }
        : { type: 'Literal', value: a[c] };
      f = f
        ? {
            type: 'MemberExpression',
            object: f,
            property: p,
            computed: !!(c && p.type === 'Literal'),
            optional: !1,
          }
        : p;
    }
    o = f;
  } else
    o =
      Rd(i) && !/^[a-z]/.test(i)
        ? { type: 'Identifier', name: i }
        : { type: 'Literal', value: i };
  if (o.type === 'Literal') {
    const a = o.value;
    return os.call(n.components, a) ? n.components[a] : a;
  }
  if (n.evaluater) return n.evaluater.evaluateExpression(o);
  Di(n);
}
function Di(n, i) {
  const l = new ot('Cannot handle MDX estrees without `createEvaluater`', {
    ancestors: n.ancestors,
    place: i,
    ruleId: 'mdx-estree',
    source: 'hast-util-to-jsx-runtime',
  });
  throw (
    (l.file = n.filePath || void 0),
    (l.url = Gp + '#cannot-handle-mdx-estrees-without-createevaluater'),
    l
  );
}
function y1(n) {
  const i = {};
  let l;
  for (l in n) os.call(n, l) && (i[v1(l)] = n[l]);
  return i;
}
function v1(n) {
  let i = n.replace(t1, x1);
  return (i.slice(0, 3) === 'ms-' && (i = '-' + i), i);
}
function x1(n) {
  return '-' + n.toLowerCase();
}
const Ea = {
    action: ['form'],
    cite: ['blockquote', 'del', 'ins', 'q'],
    data: ['object'],
    formAction: ['button', 'input'],
    href: ['a', 'area', 'base', 'link'],
    icon: ['menuitem'],
    itemId: null,
    manifest: ['html'],
    ping: ['a', 'area'],
    poster: ['video'],
    src: [
      'audio',
      'embed',
      'iframe',
      'img',
      'input',
      'script',
      'source',
      'track',
      'video',
    ],
  },
  w1 = {};
function k1(n, i) {
  const l = w1,
    o = typeof l.includeImageAlt == 'boolean' ? l.includeImageAlt : !0,
    a = typeof l.includeHtml == 'boolean' ? l.includeHtml : !0;
  return th(n, o, a);
}
function th(n, i, l) {
  if (S1(n)) {
    if ('value' in n) return n.type === 'html' && !l ? '' : n.value;
    if (i && 'alt' in n && n.alt) return n.alt;
    if ('children' in n) return bd(n.children, i, l);
  }
  return Array.isArray(n) ? bd(n, i, l) : '';
}
function bd(n, i, l) {
  const o = [];
  let a = -1;
  for (; ++a < n.length; ) o[a] = th(n[a], i, l);
  return o.join('');
}
function S1(n) {
  return !!(n && typeof n == 'object');
}
const Vd = document.createElement('i');
function ss(n) {
  const i = '&' + n + ';';
  Vd.innerHTML = i;
  const l = Vd.textContent;
  return (l.charCodeAt(l.length - 1) === 59 && n !== 'semi') || l === i
    ? !1
    : l;
}
function Jt(n, i, l, o) {
  const a = n.length;
  let c = 0,
    f;
  if (
    (i < 0 ? (i = -i > a ? 0 : a + i) : (i = i > a ? a : i),
    (l = l > 0 ? l : 0),
    o.length < 1e4)
  )
    ((f = Array.from(o)), f.unshift(i, l), n.splice(...f));
  else
    for (l && n.splice(i, l); c < o.length; )
      ((f = o.slice(c, c + 1e4)),
        f.unshift(i, 0),
        n.splice(...f),
        (c += 1e4),
        (i += 1e4));
}
function Mt(n, i) {
  return n.length > 0 ? (Jt(n, n.length, 0, i), n) : i;
}
const Hd = {}.hasOwnProperty;
function E1(n) {
  const i = {};
  let l = -1;
  for (; ++l < n.length; ) C1(i, n[l]);
  return i;
}
function C1(n, i) {
  let l;
  for (l in i) {
    const a = (Hd.call(n, l) ? n[l] : void 0) || (n[l] = {}),
      c = i[l];
    let f;
    if (c)
      for (f in c) {
        Hd.call(a, f) || (a[f] = []);
        const p = c[f];
        _1(a[f], Array.isArray(p) ? p : p ? [p] : []);
      }
  }
}
function _1(n, i) {
  let l = -1;
  const o = [];
  for (; ++l < i.length; ) (i[l].add === 'after' ? n : o).push(i[l]);
  Jt(n, 0, 0, o);
}
function nh(n, i) {
  const l = Number.parseInt(n, i);
  return l < 9 ||
    l === 11 ||
    (l > 13 && l < 32) ||
    (l > 126 && l < 160) ||
    (l > 55295 && l < 57344) ||
    (l > 64975 && l < 65008) ||
    (l & 65535) === 65535 ||
    (l & 65535) === 65534 ||
    l > 1114111
    ? '�'
    : String.fromCodePoint(l);
}
function Or(n) {
  return n
    .replace(/[\t\n\r ]+/g, ' ')
    .replace(/^ | $/g, '')
    .toLowerCase()
    .toUpperCase();
}
const Gt = An(/[A-Za-z]/),
  _t = An(/[\dA-Za-z]/),
  P1 = An(/[#-'*+\--9=?A-Z^-~]/);
function Qa(n) {
  return n !== null && (n < 32 || n === 127);
}
const qa = An(/\d/),
  T1 = An(/[\dA-Fa-f]/),
  N1 = An(/[!-/:-@[-`{-~]/);
function me(n) {
  return n !== null && n < -2;
}
function gt(n) {
  return n !== null && (n < 0 || n === 32);
}
function ze(n) {
  return n === -2 || n === -1 || n === 32;
}
const I1 = An(new RegExp('\\p{P}|\\p{S}', 'u')),
  z1 = An(/\s/);
function An(n) {
  return i;
  function i(l) {
    return l !== null && l > -1 && n.test(String.fromCharCode(l));
  }
}
function Ar(n) {
  const i = [];
  let l = -1,
    o = 0,
    a = 0;
  for (; ++l < n.length; ) {
    const c = n.charCodeAt(l);
    let f = '';
    if (c === 37 && _t(n.charCodeAt(l + 1)) && _t(n.charCodeAt(l + 2))) a = 2;
    else if (c < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(c)) ||
        (f = String.fromCharCode(c));
    else if (c > 55295 && c < 57344) {
      const p = n.charCodeAt(l + 1);
      c < 56320 && p > 56319 && p < 57344
        ? ((f = String.fromCharCode(c, p)), (a = 1))
        : (f = '�');
    } else f = String.fromCharCode(c);
    (f &&
      (i.push(n.slice(o, l), encodeURIComponent(f)), (o = l + a + 1), (f = '')),
      a && ((l += a), (a = 0)));
  }
  return i.join('') + n.slice(o);
}
function De(n, i, l, o) {
  const a = o ? o - 1 : Number.POSITIVE_INFINITY;
  let c = 0;
  return f;
  function f(h) {
    return ze(h) ? (n.enter(l), p(h)) : i(h);
  }
  function p(h) {
    return ze(h) && c++ < a ? (n.consume(h), p) : (n.exit(l), i(h));
  }
}
const R1 = { tokenize: L1 };
function L1(n) {
  const i = n.attempt(this.parser.constructs.contentInitial, o, a);
  let l;
  return i;
  function o(p) {
    if (p === null) {
      n.consume(p);
      return;
    }
    return (
      n.enter('lineEnding'),
      n.consume(p),
      n.exit('lineEnding'),
      De(n, i, 'linePrefix')
    );
  }
  function a(p) {
    return (n.enter('paragraph'), c(p));
  }
  function c(p) {
    const h = n.enter('chunkText', { contentType: 'text', previous: l });
    return (l && (l.next = h), (l = h), f(p));
  }
  function f(p) {
    if (p === null) {
      (n.exit('chunkText'), n.exit('paragraph'), n.consume(p));
      return;
    }
    return me(p) ? (n.consume(p), n.exit('chunkText'), c) : (n.consume(p), f);
  }
}
const O1 = { tokenize: D1 },
  $d = { tokenize: M1 };
function D1(n) {
  const i = this,
    l = [];
  let o = 0,
    a,
    c,
    f;
  return p;
  function p(A) {
    if (o < l.length) {
      const Q = l[o];
      return ((i.containerState = Q[1]), n.attempt(Q[0].continuation, h, m)(A));
    }
    return m(A);
  }
  function h(A) {
    if ((o++, i.containerState._closeFlow)) {
      ((i.containerState._closeFlow = void 0), a && V());
      const Q = i.events.length;
      let Y = Q,
        D;
      for (; Y--; )
        if (i.events[Y][0] === 'exit' && i.events[Y][1].type === 'chunkFlow') {
          D = i.events[Y][1].end;
          break;
        }
      L(o);
      let te = Q;
      for (; te < i.events.length; ) ((i.events[te][1].end = { ...D }), te++);
      return (
        Jt(i.events, Y + 1, 0, i.events.slice(Q)),
        (i.events.length = te),
        m(A)
      );
    }
    return p(A);
  }
  function m(A) {
    if (o === l.length) {
      if (!a) return k(A);
      if (a.currentConstruct && a.currentConstruct.concrete) return O(A);
      i.interrupt = !!(a.currentConstruct && !a._gfmTableDynamicInterruptHack);
    }
    return ((i.containerState = {}), n.check($d, g, v)(A));
  }
  function g(A) {
    return (a && V(), L(o), k(A));
  }
  function v(A) {
    return (
      (i.parser.lazy[i.now().line] = o !== l.length),
      (f = i.now().offset),
      O(A)
    );
  }
  function k(A) {
    return ((i.containerState = {}), n.attempt($d, x, O)(A));
  }
  function x(A) {
    return (o++, l.push([i.currentConstruct, i.containerState]), k(A));
  }
  function O(A) {
    if (A === null) {
      (a && V(), L(0), n.consume(A));
      return;
    }
    return (
      (a = a || i.parser.flow(i.now())),
      n.enter('chunkFlow', { _tokenizer: a, contentType: 'flow', previous: c }),
      z(A)
    );
  }
  function z(A) {
    if (A === null) {
      (R(n.exit('chunkFlow'), !0), L(0), n.consume(A));
      return;
    }
    return me(A)
      ? (n.consume(A),
        R(n.exit('chunkFlow')),
        (o = 0),
        (i.interrupt = void 0),
        p)
      : (n.consume(A), z);
  }
  function R(A, Q) {
    const Y = i.sliceStream(A);
    if (
      (Q && Y.push(null),
      (A.previous = c),
      c && (c.next = A),
      (c = A),
      a.defineSkip(A.start),
      a.write(Y),
      i.parser.lazy[A.start.line])
    ) {
      let D = a.events.length;
      for (; D--; )
        if (
          a.events[D][1].start.offset < f &&
          (!a.events[D][1].end || a.events[D][1].end.offset > f)
        )
          return;
      const te = i.events.length;
      let ce = te,
        ge,
        ve;
      for (; ce--; )
        if (
          i.events[ce][0] === 'exit' &&
          i.events[ce][1].type === 'chunkFlow'
        ) {
          if (ge) {
            ve = i.events[ce][1].end;
            break;
          }
          ge = !0;
        }
      for (L(o), D = te; D < i.events.length; )
        ((i.events[D][1].end = { ...ve }), D++);
      (Jt(i.events, ce + 1, 0, i.events.slice(te)), (i.events.length = D));
    }
  }
  function L(A) {
    let Q = l.length;
    for (; Q-- > A; ) {
      const Y = l[Q];
      ((i.containerState = Y[1]), Y[0].exit.call(i, n));
    }
    l.length = A;
  }
  function V() {
    (a.write([null]),
      (c = void 0),
      (a = void 0),
      (i.containerState._closeFlow = void 0));
  }
}
function M1(n, i, l) {
  return De(
    n,
    n.attempt(this.parser.constructs.document, i, l),
    'linePrefix',
    this.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4,
  );
}
function Wd(n) {
  if (n === null || gt(n) || z1(n)) return 1;
  if (I1(n)) return 2;
}
function cs(n, i, l) {
  const o = [];
  let a = -1;
  for (; ++a < n.length; ) {
    const c = n[a].resolveAll;
    c && !o.includes(c) && ((i = c(i, l)), o.push(c));
  }
  return i;
}
const Ka = { name: 'attention', resolveAll: A1, tokenize: F1 };
function A1(n, i) {
  let l = -1,
    o,
    a,
    c,
    f,
    p,
    h,
    m,
    g;
  for (; ++l < n.length; )
    if (
      n[l][0] === 'enter' &&
      n[l][1].type === 'attentionSequence' &&
      n[l][1]._close
    ) {
      for (o = l; o--; )
        if (
          n[o][0] === 'exit' &&
          n[o][1].type === 'attentionSequence' &&
          n[o][1]._open &&
          i.sliceSerialize(n[o][1]).charCodeAt(0) ===
            i.sliceSerialize(n[l][1]).charCodeAt(0)
        ) {
          if (
            (n[o][1]._close || n[l][1]._open) &&
            (n[l][1].end.offset - n[l][1].start.offset) % 3 &&
            !(
              (n[o][1].end.offset -
                n[o][1].start.offset +
                n[l][1].end.offset -
                n[l][1].start.offset) %
              3
            )
          )
            continue;
          h =
            n[o][1].end.offset - n[o][1].start.offset > 1 &&
            n[l][1].end.offset - n[l][1].start.offset > 1
              ? 2
              : 1;
          const v = { ...n[o][1].end },
            k = { ...n[l][1].start };
          (Qd(v, -h),
            Qd(k, h),
            (f = {
              type: h > 1 ? 'strongSequence' : 'emphasisSequence',
              start: v,
              end: { ...n[o][1].end },
            }),
            (p = {
              type: h > 1 ? 'strongSequence' : 'emphasisSequence',
              start: { ...n[l][1].start },
              end: k,
            }),
            (c = {
              type: h > 1 ? 'strongText' : 'emphasisText',
              start: { ...n[o][1].end },
              end: { ...n[l][1].start },
            }),
            (a = {
              type: h > 1 ? 'strong' : 'emphasis',
              start: { ...f.start },
              end: { ...p.end },
            }),
            (n[o][1].end = { ...f.start }),
            (n[l][1].start = { ...p.end }),
            (m = []),
            n[o][1].end.offset - n[o][1].start.offset &&
              (m = Mt(m, [
                ['enter', n[o][1], i],
                ['exit', n[o][1], i],
              ])),
            (m = Mt(m, [
              ['enter', a, i],
              ['enter', f, i],
              ['exit', f, i],
              ['enter', c, i],
            ])),
            (m = Mt(
              m,
              cs(i.parser.constructs.insideSpan.null, n.slice(o + 1, l), i),
            )),
            (m = Mt(m, [
              ['exit', c, i],
              ['enter', p, i],
              ['exit', p, i],
              ['exit', a, i],
            ])),
            n[l][1].end.offset - n[l][1].start.offset
              ? ((g = 2),
                (m = Mt(m, [
                  ['enter', n[l][1], i],
                  ['exit', n[l][1], i],
                ])))
              : (g = 0),
            Jt(n, o - 1, l - o + 3, m),
            (l = o + m.length - g - 2));
          break;
        }
    }
  for (l = -1; ++l < n.length; )
    n[l][1].type === 'attentionSequence' && (n[l][1].type = 'data');
  return n;
}
function F1(n, i) {
  const l = this.parser.constructs.attentionMarkers.null,
    o = this.previous,
    a = Wd(o);
  let c;
  return f;
  function f(h) {
    return ((c = h), n.enter('attentionSequence'), p(h));
  }
  function p(h) {
    if (h === c) return (n.consume(h), p);
    const m = n.exit('attentionSequence'),
      g = Wd(h),
      v = !g || (g === 2 && a) || l.includes(h),
      k = !a || (a === 2 && g) || l.includes(o);
    return (
      (m._open = !!(c === 42 ? v : v && (a || !k))),
      (m._close = !!(c === 42 ? k : k && (g || !v))),
      i(h)
    );
  }
}
function Qd(n, i) {
  ((n.column += i), (n.offset += i), (n._bufferIndex += i));
}
const j1 = { name: 'autolink', tokenize: B1 };
function B1(n, i, l) {
  let o = 0;
  return a;
  function a(x) {
    return (
      n.enter('autolink'),
      n.enter('autolinkMarker'),
      n.consume(x),
      n.exit('autolinkMarker'),
      n.enter('autolinkProtocol'),
      c
    );
  }
  function c(x) {
    return Gt(x) ? (n.consume(x), f) : x === 64 ? l(x) : m(x);
  }
  function f(x) {
    return x === 43 || x === 45 || x === 46 || _t(x) ? ((o = 1), p(x)) : m(x);
  }
  function p(x) {
    return x === 58
      ? (n.consume(x), (o = 0), h)
      : (x === 43 || x === 45 || x === 46 || _t(x)) && o++ < 32
        ? (n.consume(x), p)
        : ((o = 0), m(x));
  }
  function h(x) {
    return x === 62
      ? (n.exit('autolinkProtocol'),
        n.enter('autolinkMarker'),
        n.consume(x),
        n.exit('autolinkMarker'),
        n.exit('autolink'),
        i)
      : x === null || x === 32 || x === 60 || Qa(x)
        ? l(x)
        : (n.consume(x), h);
  }
  function m(x) {
    return x === 64 ? (n.consume(x), g) : P1(x) ? (n.consume(x), m) : l(x);
  }
  function g(x) {
    return _t(x) ? v(x) : l(x);
  }
  function v(x) {
    return x === 46
      ? (n.consume(x), (o = 0), g)
      : x === 62
        ? ((n.exit('autolinkProtocol').type = 'autolinkEmail'),
          n.enter('autolinkMarker'),
          n.consume(x),
          n.exit('autolinkMarker'),
          n.exit('autolink'),
          i)
        : k(x);
  }
  function k(x) {
    if ((x === 45 || _t(x)) && o++ < 63) {
      const O = x === 45 ? k : v;
      return (n.consume(x), O);
    }
    return l(x);
  }
}
const Eo = { partial: !0, tokenize: U1 };
function U1(n, i, l) {
  return o;
  function o(c) {
    return ze(c) ? De(n, a, 'linePrefix')(c) : a(c);
  }
  function a(c) {
    return c === null || me(c) ? i(c) : l(c);
  }
}
const rh = {
  continuation: { tokenize: V1 },
  exit: H1,
  name: 'blockQuote',
  tokenize: b1,
};
function b1(n, i, l) {
  const o = this;
  return a;
  function a(f) {
    if (f === 62) {
      const p = o.containerState;
      return (
        p.open || (n.enter('blockQuote', { _container: !0 }), (p.open = !0)),
        n.enter('blockQuotePrefix'),
        n.enter('blockQuoteMarker'),
        n.consume(f),
        n.exit('blockQuoteMarker'),
        c
      );
    }
    return l(f);
  }
  function c(f) {
    return ze(f)
      ? (n.enter('blockQuotePrefixWhitespace'),
        n.consume(f),
        n.exit('blockQuotePrefixWhitespace'),
        n.exit('blockQuotePrefix'),
        i)
      : (n.exit('blockQuotePrefix'), i(f));
  }
}
function V1(n, i, l) {
  const o = this;
  return a;
  function a(f) {
    return ze(f)
      ? De(
          n,
          c,
          'linePrefix',
          o.parser.constructs.disable.null.includes('codeIndented')
            ? void 0
            : 4,
        )(f)
      : c(f);
  }
  function c(f) {
    return n.attempt(rh, i, l)(f);
  }
}
function H1(n) {
  n.exit('blockQuote');
}
const ih = { name: 'characterEscape', tokenize: $1 };
function $1(n, i, l) {
  return o;
  function o(c) {
    return (
      n.enter('characterEscape'),
      n.enter('escapeMarker'),
      n.consume(c),
      n.exit('escapeMarker'),
      a
    );
  }
  function a(c) {
    return N1(c)
      ? (n.enter('characterEscapeValue'),
        n.consume(c),
        n.exit('characterEscapeValue'),
        n.exit('characterEscape'),
        i)
      : l(c);
  }
}
const lh = { name: 'characterReference', tokenize: W1 };
function W1(n, i, l) {
  const o = this;
  let a = 0,
    c,
    f;
  return p;
  function p(v) {
    return (
      n.enter('characterReference'),
      n.enter('characterReferenceMarker'),
      n.consume(v),
      n.exit('characterReferenceMarker'),
      h
    );
  }
  function h(v) {
    return v === 35
      ? (n.enter('characterReferenceMarkerNumeric'),
        n.consume(v),
        n.exit('characterReferenceMarkerNumeric'),
        m)
      : (n.enter('characterReferenceValue'), (c = 31), (f = _t), g(v));
  }
  function m(v) {
    return v === 88 || v === 120
      ? (n.enter('characterReferenceMarkerHexadecimal'),
        n.consume(v),
        n.exit('characterReferenceMarkerHexadecimal'),
        n.enter('characterReferenceValue'),
        (c = 6),
        (f = T1),
        g)
      : (n.enter('characterReferenceValue'), (c = 7), (f = qa), g(v));
  }
  function g(v) {
    if (v === 59 && a) {
      const k = n.exit('characterReferenceValue');
      return f === _t && !ss(o.sliceSerialize(k))
        ? l(v)
        : (n.enter('characterReferenceMarker'),
          n.consume(v),
          n.exit('characterReferenceMarker'),
          n.exit('characterReference'),
          i);
    }
    return f(v) && a++ < c ? (n.consume(v), g) : l(v);
  }
}
const qd = { partial: !0, tokenize: q1 },
  Kd = { concrete: !0, name: 'codeFenced', tokenize: Q1 };
function Q1(n, i, l) {
  const o = this,
    a = { partial: !0, tokenize: Y };
  let c = 0,
    f = 0,
    p;
  return h;
  function h(D) {
    return m(D);
  }
  function m(D) {
    const te = o.events[o.events.length - 1];
    return (
      (c =
        te && te[1].type === 'linePrefix'
          ? te[2].sliceSerialize(te[1], !0).length
          : 0),
      (p = D),
      n.enter('codeFenced'),
      n.enter('codeFencedFence'),
      n.enter('codeFencedFenceSequence'),
      g(D)
    );
  }
  function g(D) {
    return D === p
      ? (f++, n.consume(D), g)
      : f < 3
        ? l(D)
        : (n.exit('codeFencedFenceSequence'),
          ze(D) ? De(n, v, 'whitespace')(D) : v(D));
  }
  function v(D) {
    return D === null || me(D)
      ? (n.exit('codeFencedFence'), o.interrupt ? i(D) : n.check(qd, z, Q)(D))
      : (n.enter('codeFencedFenceInfo'),
        n.enter('chunkString', { contentType: 'string' }),
        k(D));
  }
  function k(D) {
    return D === null || me(D)
      ? (n.exit('chunkString'), n.exit('codeFencedFenceInfo'), v(D))
      : ze(D)
        ? (n.exit('chunkString'),
          n.exit('codeFencedFenceInfo'),
          De(n, x, 'whitespace')(D))
        : D === 96 && D === p
          ? l(D)
          : (n.consume(D), k);
  }
  function x(D) {
    return D === null || me(D)
      ? v(D)
      : (n.enter('codeFencedFenceMeta'),
        n.enter('chunkString', { contentType: 'string' }),
        O(D));
  }
  function O(D) {
    return D === null || me(D)
      ? (n.exit('chunkString'), n.exit('codeFencedFenceMeta'), v(D))
      : D === 96 && D === p
        ? l(D)
        : (n.consume(D), O);
  }
  function z(D) {
    return n.attempt(a, Q, R)(D);
  }
  function R(D) {
    return (n.enter('lineEnding'), n.consume(D), n.exit('lineEnding'), L);
  }
  function L(D) {
    return c > 0 && ze(D) ? De(n, V, 'linePrefix', c + 1)(D) : V(D);
  }
  function V(D) {
    return D === null || me(D)
      ? n.check(qd, z, Q)(D)
      : (n.enter('codeFlowValue'), A(D));
  }
  function A(D) {
    return D === null || me(D)
      ? (n.exit('codeFlowValue'), V(D))
      : (n.consume(D), A);
  }
  function Q(D) {
    return (n.exit('codeFenced'), i(D));
  }
  function Y(D, te, ce) {
    let ge = 0;
    return ve;
    function ve(ue) {
      return (D.enter('lineEnding'), D.consume(ue), D.exit('lineEnding'), re);
    }
    function re(ue) {
      return (
        D.enter('codeFencedFence'),
        ze(ue)
          ? De(
              D,
              Z,
              'linePrefix',
              o.parser.constructs.disable.null.includes('codeIndented')
                ? void 0
                : 4,
            )(ue)
          : Z(ue)
      );
    }
    function Z(ue) {
      return ue === p ? (D.enter('codeFencedFenceSequence'), G(ue)) : ce(ue);
    }
    function G(ue) {
      return ue === p
        ? (ge++, D.consume(ue), G)
        : ge >= f
          ? (D.exit('codeFencedFenceSequence'),
            ze(ue) ? De(D, X, 'whitespace')(ue) : X(ue))
          : ce(ue);
    }
    function X(ue) {
      return ue === null || me(ue)
        ? (D.exit('codeFencedFence'), te(ue))
        : ce(ue);
    }
  }
}
function q1(n, i, l) {
  const o = this;
  return a;
  function a(f) {
    return f === null
      ? l(f)
      : (n.enter('lineEnding'), n.consume(f), n.exit('lineEnding'), c);
  }
  function c(f) {
    return o.parser.lazy[o.now().line] ? l(f) : i(f);
  }
}
const Ca = { name: 'codeIndented', tokenize: X1 },
  K1 = { partial: !0, tokenize: Y1 };
function X1(n, i, l) {
  const o = this;
  return a;
  function a(m) {
    return (n.enter('codeIndented'), De(n, c, 'linePrefix', 5)(m));
  }
  function c(m) {
    const g = o.events[o.events.length - 1];
    return g &&
      g[1].type === 'linePrefix' &&
      g[2].sliceSerialize(g[1], !0).length >= 4
      ? f(m)
      : l(m);
  }
  function f(m) {
    return m === null
      ? h(m)
      : me(m)
        ? n.attempt(K1, f, h)(m)
        : (n.enter('codeFlowValue'), p(m));
  }
  function p(m) {
    return m === null || me(m)
      ? (n.exit('codeFlowValue'), f(m))
      : (n.consume(m), p);
  }
  function h(m) {
    return (n.exit('codeIndented'), i(m));
  }
}
function Y1(n, i, l) {
  const o = this;
  return a;
  function a(f) {
    return o.parser.lazy[o.now().line]
      ? l(f)
      : me(f)
        ? (n.enter('lineEnding'), n.consume(f), n.exit('lineEnding'), a)
        : De(n, c, 'linePrefix', 5)(f);
  }
  function c(f) {
    const p = o.events[o.events.length - 1];
    return p &&
      p[1].type === 'linePrefix' &&
      p[2].sliceSerialize(p[1], !0).length >= 4
      ? i(f)
      : me(f)
        ? a(f)
        : l(f);
  }
}
const G1 = { name: 'codeText', previous: Z1, resolve: J1, tokenize: e0 };
function J1(n) {
  let i = n.length - 4,
    l = 3,
    o,
    a;
  if (
    (n[l][1].type === 'lineEnding' || n[l][1].type === 'space') &&
    (n[i][1].type === 'lineEnding' || n[i][1].type === 'space')
  ) {
    for (o = l; ++o < i; )
      if (n[o][1].type === 'codeTextData') {
        ((n[l][1].type = 'codeTextPadding'),
          (n[i][1].type = 'codeTextPadding'),
          (l += 2),
          (i -= 2));
        break;
      }
  }
  for (o = l - 1, i++; ++o <= i; )
    a === void 0
      ? o !== i && n[o][1].type !== 'lineEnding' && (a = o)
      : (o === i || n[o][1].type === 'lineEnding') &&
        ((n[a][1].type = 'codeTextData'),
        o !== a + 2 &&
          ((n[a][1].end = n[o - 1][1].end),
          n.splice(a + 2, o - a - 2),
          (i -= o - a - 2),
          (o = a + 2)),
        (a = void 0));
  return n;
}
function Z1(n) {
  return (
    n !== 96 ||
    this.events[this.events.length - 1][1].type === 'characterEscape'
  );
}
function e0(n, i, l) {
  let o = 0,
    a,
    c;
  return f;
  function f(v) {
    return (n.enter('codeText'), n.enter('codeTextSequence'), p(v));
  }
  function p(v) {
    return v === 96
      ? (n.consume(v), o++, p)
      : (n.exit('codeTextSequence'), h(v));
  }
  function h(v) {
    return v === null
      ? l(v)
      : v === 32
        ? (n.enter('space'), n.consume(v), n.exit('space'), h)
        : v === 96
          ? ((c = n.enter('codeTextSequence')), (a = 0), g(v))
          : me(v)
            ? (n.enter('lineEnding'), n.consume(v), n.exit('lineEnding'), h)
            : (n.enter('codeTextData'), m(v));
  }
  function m(v) {
    return v === null || v === 32 || v === 96 || me(v)
      ? (n.exit('codeTextData'), h(v))
      : (n.consume(v), m);
  }
  function g(v) {
    return v === 96
      ? (n.consume(v), a++, g)
      : a === o
        ? (n.exit('codeTextSequence'), n.exit('codeText'), i(v))
        : ((c.type = 'codeTextData'), m(v));
  }
}
class t0 {
  constructor(i) {
    ((this.left = i ? [...i] : []), (this.right = []));
  }
  get(i) {
    if (i < 0 || i >= this.left.length + this.right.length)
      throw new RangeError(
        'Cannot access index `' +
          i +
          '` in a splice buffer of size `' +
          (this.left.length + this.right.length) +
          '`',
      );
    return i < this.left.length
      ? this.left[i]
      : this.right[this.right.length - i + this.left.length - 1];
  }
  get length() {
    return this.left.length + this.right.length;
  }
  shift() {
    return (this.setCursor(0), this.right.pop());
  }
  slice(i, l) {
    const o = l ?? Number.POSITIVE_INFINITY;
    return o < this.left.length
      ? this.left.slice(i, o)
      : i > this.left.length
        ? this.right
            .slice(
              this.right.length - o + this.left.length,
              this.right.length - i + this.left.length,
            )
            .reverse()
        : this.left
            .slice(i)
            .concat(
              this.right
                .slice(this.right.length - o + this.left.length)
                .reverse(),
            );
  }
  splice(i, l, o) {
    const a = l || 0;
    this.setCursor(Math.trunc(i));
    const c = this.right.splice(
      this.right.length - a,
      Number.POSITIVE_INFINITY,
    );
    return (o && Pi(this.left, o), c.reverse());
  }
  pop() {
    return (this.setCursor(Number.POSITIVE_INFINITY), this.left.pop());
  }
  push(i) {
    (this.setCursor(Number.POSITIVE_INFINITY), this.left.push(i));
  }
  pushMany(i) {
    (this.setCursor(Number.POSITIVE_INFINITY), Pi(this.left, i));
  }
  unshift(i) {
    (this.setCursor(0), this.right.push(i));
  }
  unshiftMany(i) {
    (this.setCursor(0), Pi(this.right, i.reverse()));
  }
  setCursor(i) {
    if (
      !(
        i === this.left.length ||
        (i > this.left.length && this.right.length === 0) ||
        (i < 0 && this.left.length === 0)
      )
    )
      if (i < this.left.length) {
        const l = this.left.splice(i, Number.POSITIVE_INFINITY);
        Pi(this.right, l.reverse());
      } else {
        const l = this.right.splice(
          this.left.length + this.right.length - i,
          Number.POSITIVE_INFINITY,
        );
        Pi(this.left, l.reverse());
      }
  }
}
function Pi(n, i) {
  let l = 0;
  if (i.length < 1e4) n.push(...i);
  else for (; l < i.length; ) (n.push(...i.slice(l, l + 1e4)), (l += 1e4));
}
function oh(n) {
  const i = {};
  let l = -1,
    o,
    a,
    c,
    f,
    p,
    h,
    m;
  const g = new t0(n);
  for (; ++l < g.length; ) {
    for (; l in i; ) l = i[l];
    if (
      ((o = g.get(l)),
      l &&
        o[1].type === 'chunkFlow' &&
        g.get(l - 1)[1].type === 'listItemPrefix' &&
        ((h = o[1]._tokenizer.events),
        (c = 0),
        c < h.length && h[c][1].type === 'lineEndingBlank' && (c += 2),
        c < h.length && h[c][1].type === 'content'))
    )
      for (; ++c < h.length && h[c][1].type !== 'content'; )
        h[c][1].type === 'chunkText' &&
          ((h[c][1]._isInFirstContentOfListItem = !0), c++);
    if (o[0] === 'enter')
      o[1].contentType && (Object.assign(i, n0(g, l)), (l = i[l]), (m = !0));
    else if (o[1]._container) {
      for (c = l, a = void 0; c--; )
        if (
          ((f = g.get(c)),
          f[1].type === 'lineEnding' || f[1].type === 'lineEndingBlank')
        )
          f[0] === 'enter' &&
            (a && (g.get(a)[1].type = 'lineEndingBlank'),
            (f[1].type = 'lineEnding'),
            (a = c));
        else if (
          !(f[1].type === 'linePrefix' || f[1].type === 'listItemIndent')
        )
          break;
      a &&
        ((o[1].end = { ...g.get(a)[1].start }),
        (p = g.slice(a, l)),
        p.unshift(o),
        g.splice(a, l - a + 1, p));
    }
  }
  return (Jt(n, 0, Number.POSITIVE_INFINITY, g.slice(0)), !m);
}
function n0(n, i) {
  const l = n.get(i)[1],
    o = n.get(i)[2];
  let a = i - 1;
  const c = [];
  let f = l._tokenizer;
  f ||
    ((f = o.parser[l.contentType](l.start)),
    l._contentTypeTextTrailing && (f._contentTypeTextTrailing = !0));
  const p = f.events,
    h = [],
    m = {};
  let g,
    v,
    k = -1,
    x = l,
    O = 0,
    z = 0;
  const R = [z];
  for (; x; ) {
    for (; n.get(++a)[1] !== x; );
    (c.push(a),
      x._tokenizer ||
        ((g = o.sliceStream(x)),
        x.next || g.push(null),
        v && f.defineSkip(x.start),
        x._isInFirstContentOfListItem &&
          (f._gfmTasklistFirstContentOfListItem = !0),
        f.write(g),
        x._isInFirstContentOfListItem &&
          (f._gfmTasklistFirstContentOfListItem = void 0)),
      (v = x),
      (x = x.next));
  }
  for (x = l; ++k < p.length; )
    p[k][0] === 'exit' &&
      p[k - 1][0] === 'enter' &&
      p[k][1].type === p[k - 1][1].type &&
      p[k][1].start.line !== p[k][1].end.line &&
      ((z = k + 1),
      R.push(z),
      (x._tokenizer = void 0),
      (x.previous = void 0),
      (x = x.next));
  for (
    f.events = [],
      x ? ((x._tokenizer = void 0), (x.previous = void 0)) : R.pop(),
      k = R.length;
    k--;

  ) {
    const L = p.slice(R[k], R[k + 1]),
      V = c.pop();
    (h.push([V, V + L.length - 1]), n.splice(V, 2, L));
  }
  for (h.reverse(), k = -1; ++k < h.length; )
    ((m[O + h[k][0]] = O + h[k][1]), (O += h[k][1] - h[k][0] - 1));
  return m;
}
const r0 = { resolve: l0, tokenize: o0 },
  i0 = { partial: !0, tokenize: u0 };
function l0(n) {
  return (oh(n), n);
}
function o0(n, i) {
  let l;
  return o;
  function o(p) {
    return (
      n.enter('content'),
      (l = n.enter('chunkContent', { contentType: 'content' })),
      a(p)
    );
  }
  function a(p) {
    return p === null ? c(p) : me(p) ? n.check(i0, f, c)(p) : (n.consume(p), a);
  }
  function c(p) {
    return (n.exit('chunkContent'), n.exit('content'), i(p));
  }
  function f(p) {
    return (
      n.consume(p),
      n.exit('chunkContent'),
      (l.next = n.enter('chunkContent', {
        contentType: 'content',
        previous: l,
      })),
      (l = l.next),
      a
    );
  }
}
function u0(n, i, l) {
  const o = this;
  return a;
  function a(f) {
    return (
      n.exit('chunkContent'),
      n.enter('lineEnding'),
      n.consume(f),
      n.exit('lineEnding'),
      De(n, c, 'linePrefix')
    );
  }
  function c(f) {
    if (f === null || me(f)) return l(f);
    const p = o.events[o.events.length - 1];
    return !o.parser.constructs.disable.null.includes('codeIndented') &&
      p &&
      p[1].type === 'linePrefix' &&
      p[2].sliceSerialize(p[1], !0).length >= 4
      ? i(f)
      : n.interrupt(o.parser.constructs.flow, l, i)(f);
  }
}
function uh(n, i, l, o, a, c, f, p, h) {
  const m = h || Number.POSITIVE_INFINITY;
  let g = 0;
  return v;
  function v(L) {
    return L === 60
      ? (n.enter(o), n.enter(a), n.enter(c), n.consume(L), n.exit(c), k)
      : L === null || L === 32 || L === 41 || Qa(L)
        ? l(L)
        : (n.enter(o),
          n.enter(f),
          n.enter(p),
          n.enter('chunkString', { contentType: 'string' }),
          z(L));
  }
  function k(L) {
    return L === 62
      ? (n.enter(c), n.consume(L), n.exit(c), n.exit(a), n.exit(o), i)
      : (n.enter(p), n.enter('chunkString', { contentType: 'string' }), x(L));
  }
  function x(L) {
    return L === 62
      ? (n.exit('chunkString'), n.exit(p), k(L))
      : L === null || L === 60 || me(L)
        ? l(L)
        : (n.consume(L), L === 92 ? O : x);
  }
  function O(L) {
    return L === 60 || L === 62 || L === 92 ? (n.consume(L), x) : x(L);
  }
  function z(L) {
    return !g && (L === null || L === 41 || gt(L))
      ? (n.exit('chunkString'), n.exit(p), n.exit(f), n.exit(o), i(L))
      : g < m && L === 40
        ? (n.consume(L), g++, z)
        : L === 41
          ? (n.consume(L), g--, z)
          : L === null || L === 32 || L === 40 || Qa(L)
            ? l(L)
            : (n.consume(L), L === 92 ? R : z);
  }
  function R(L) {
    return L === 40 || L === 41 || L === 92 ? (n.consume(L), z) : z(L);
  }
}
function ah(n, i, l, o, a, c) {
  const f = this;
  let p = 0,
    h;
  return m;
  function m(x) {
    return (n.enter(o), n.enter(a), n.consume(x), n.exit(a), n.enter(c), g);
  }
  function g(x) {
    return p > 999 ||
      x === null ||
      x === 91 ||
      (x === 93 && !h) ||
      (x === 94 && !p && '_hiddenFootnoteSupport' in f.parser.constructs)
      ? l(x)
      : x === 93
        ? (n.exit(c), n.enter(a), n.consume(x), n.exit(a), n.exit(o), i)
        : me(x)
          ? (n.enter('lineEnding'), n.consume(x), n.exit('lineEnding'), g)
          : (n.enter('chunkString', { contentType: 'string' }), v(x));
  }
  function v(x) {
    return x === null || x === 91 || x === 93 || me(x) || p++ > 999
      ? (n.exit('chunkString'), g(x))
      : (n.consume(x), h || (h = !ze(x)), x === 92 ? k : v);
  }
  function k(x) {
    return x === 91 || x === 92 || x === 93 ? (n.consume(x), p++, v) : v(x);
  }
}
function sh(n, i, l, o, a, c) {
  let f;
  return p;
  function p(k) {
    return k === 34 || k === 39 || k === 40
      ? (n.enter(o),
        n.enter(a),
        n.consume(k),
        n.exit(a),
        (f = k === 40 ? 41 : k),
        h)
      : l(k);
  }
  function h(k) {
    return k === f
      ? (n.enter(a), n.consume(k), n.exit(a), n.exit(o), i)
      : (n.enter(c), m(k));
  }
  function m(k) {
    return k === f
      ? (n.exit(c), h(f))
      : k === null
        ? l(k)
        : me(k)
          ? (n.enter('lineEnding'),
            n.consume(k),
            n.exit('lineEnding'),
            De(n, m, 'linePrefix'))
          : (n.enter('chunkString', { contentType: 'string' }), g(k));
  }
  function g(k) {
    return k === f || k === null || me(k)
      ? (n.exit('chunkString'), m(k))
      : (n.consume(k), k === 92 ? v : g);
  }
  function v(k) {
    return k === f || k === 92 ? (n.consume(k), g) : g(k);
  }
}
function zi(n, i) {
  let l;
  return o;
  function o(a) {
    return me(a)
      ? (n.enter('lineEnding'), n.consume(a), n.exit('lineEnding'), (l = !0), o)
      : ze(a)
        ? De(n, o, l ? 'linePrefix' : 'lineSuffix')(a)
        : i(a);
  }
}
const a0 = { name: 'definition', tokenize: c0 },
  s0 = { partial: !0, tokenize: f0 };
function c0(n, i, l) {
  const o = this;
  let a;
  return c;
  function c(x) {
    return (n.enter('definition'), f(x));
  }
  function f(x) {
    return ah.call(
      o,
      n,
      p,
      l,
      'definitionLabel',
      'definitionLabelMarker',
      'definitionLabelString',
    )(x);
  }
  function p(x) {
    return (
      (a = Or(o.sliceSerialize(o.events[o.events.length - 1][1]).slice(1, -1))),
      x === 58
        ? (n.enter('definitionMarker'),
          n.consume(x),
          n.exit('definitionMarker'),
          h)
        : l(x)
    );
  }
  function h(x) {
    return gt(x) ? zi(n, m)(x) : m(x);
  }
  function m(x) {
    return uh(
      n,
      g,
      l,
      'definitionDestination',
      'definitionDestinationLiteral',
      'definitionDestinationLiteralMarker',
      'definitionDestinationRaw',
      'definitionDestinationString',
    )(x);
  }
  function g(x) {
    return n.attempt(s0, v, v)(x);
  }
  function v(x) {
    return ze(x) ? De(n, k, 'whitespace')(x) : k(x);
  }
  function k(x) {
    return x === null || me(x)
      ? (n.exit('definition'), o.parser.defined.push(a), i(x))
      : l(x);
  }
}
function f0(n, i, l) {
  return o;
  function o(p) {
    return gt(p) ? zi(n, a)(p) : l(p);
  }
  function a(p) {
    return sh(
      n,
      c,
      l,
      'definitionTitle',
      'definitionTitleMarker',
      'definitionTitleString',
    )(p);
  }
  function c(p) {
    return ze(p) ? De(n, f, 'whitespace')(p) : f(p);
  }
  function f(p) {
    return p === null || me(p) ? i(p) : l(p);
  }
}
const d0 = { name: 'hardBreakEscape', tokenize: p0 };
function p0(n, i, l) {
  return o;
  function o(c) {
    return (n.enter('hardBreakEscape'), n.consume(c), a);
  }
  function a(c) {
    return me(c) ? (n.exit('hardBreakEscape'), i(c)) : l(c);
  }
}
const h0 = { name: 'headingAtx', resolve: m0, tokenize: g0 };
function m0(n, i) {
  let l = n.length - 2,
    o = 3,
    a,
    c;
  return (
    n[o][1].type === 'whitespace' && (o += 2),
    l - 2 > o && n[l][1].type === 'whitespace' && (l -= 2),
    n[l][1].type === 'atxHeadingSequence' &&
      (o === l - 1 || (l - 4 > o && n[l - 2][1].type === 'whitespace')) &&
      (l -= o + 1 === l ? 2 : 4),
    l > o &&
      ((a = { type: 'atxHeadingText', start: n[o][1].start, end: n[l][1].end }),
      (c = {
        type: 'chunkText',
        start: n[o][1].start,
        end: n[l][1].end,
        contentType: 'text',
      }),
      Jt(n, o, l - o + 1, [
        ['enter', a, i],
        ['enter', c, i],
        ['exit', c, i],
        ['exit', a, i],
      ])),
    n
  );
}
function g0(n, i, l) {
  let o = 0;
  return a;
  function a(g) {
    return (n.enter('atxHeading'), c(g));
  }
  function c(g) {
    return (n.enter('atxHeadingSequence'), f(g));
  }
  function f(g) {
    return g === 35 && o++ < 6
      ? (n.consume(g), f)
      : g === null || gt(g)
        ? (n.exit('atxHeadingSequence'), p(g))
        : l(g);
  }
  function p(g) {
    return g === 35
      ? (n.enter('atxHeadingSequence'), h(g))
      : g === null || me(g)
        ? (n.exit('atxHeading'), i(g))
        : ze(g)
          ? De(n, p, 'whitespace')(g)
          : (n.enter('atxHeadingText'), m(g));
  }
  function h(g) {
    return g === 35 ? (n.consume(g), h) : (n.exit('atxHeadingSequence'), p(g));
  }
  function m(g) {
    return g === null || g === 35 || gt(g)
      ? (n.exit('atxHeadingText'), p(g))
      : (n.consume(g), m);
  }
}
const y0 = [
    'address',
    'article',
    'aside',
    'base',
    'basefont',
    'blockquote',
    'body',
    'caption',
    'center',
    'col',
    'colgroup',
    'dd',
    'details',
    'dialog',
    'dir',
    'div',
    'dl',
    'dt',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'frame',
    'frameset',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hr',
    'html',
    'iframe',
    'legend',
    'li',
    'link',
    'main',
    'menu',
    'menuitem',
    'nav',
    'noframes',
    'ol',
    'optgroup',
    'option',
    'p',
    'param',
    'search',
    'section',
    'summary',
    'table',
    'tbody',
    'td',
    'tfoot',
    'th',
    'thead',
    'title',
    'tr',
    'track',
    'ul',
  ],
  Xd = ['pre', 'script', 'style', 'textarea'],
  v0 = { concrete: !0, name: 'htmlFlow', resolveTo: k0, tokenize: S0 },
  x0 = { partial: !0, tokenize: C0 },
  w0 = { partial: !0, tokenize: E0 };
function k0(n) {
  let i = n.length;
  for (; i-- && !(n[i][0] === 'enter' && n[i][1].type === 'htmlFlow'); );
  return (
    i > 1 &&
      n[i - 2][1].type === 'linePrefix' &&
      ((n[i][1].start = n[i - 2][1].start),
      (n[i + 1][1].start = n[i - 2][1].start),
      n.splice(i - 2, 2)),
    n
  );
}
function S0(n, i, l) {
  const o = this;
  let a, c, f, p, h;
  return m;
  function m(E) {
    return g(E);
  }
  function g(E) {
    return (n.enter('htmlFlow'), n.enter('htmlFlowData'), n.consume(E), v);
  }
  function v(E) {
    return E === 33
      ? (n.consume(E), k)
      : E === 47
        ? (n.consume(E), (c = !0), z)
        : E === 63
          ? (n.consume(E), (a = 3), o.interrupt ? i : w)
          : Gt(E)
            ? (n.consume(E), (f = String.fromCharCode(E)), R)
            : l(E);
  }
  function k(E) {
    return E === 45
      ? (n.consume(E), (a = 2), x)
      : E === 91
        ? (n.consume(E), (a = 5), (p = 0), O)
        : Gt(E)
          ? (n.consume(E), (a = 4), o.interrupt ? i : w)
          : l(E);
  }
  function x(E) {
    return E === 45 ? (n.consume(E), o.interrupt ? i : w) : l(E);
  }
  function O(E) {
    const de = 'CDATA[';
    return E === de.charCodeAt(p++)
      ? (n.consume(E), p === de.length ? (o.interrupt ? i : Z) : O)
      : l(E);
  }
  function z(E) {
    return Gt(E) ? (n.consume(E), (f = String.fromCharCode(E)), R) : l(E);
  }
  function R(E) {
    if (E === null || E === 47 || E === 62 || gt(E)) {
      const de = E === 47,
        we = f.toLowerCase();
      return !de && !c && Xd.includes(we)
        ? ((a = 1), o.interrupt ? i(E) : Z(E))
        : y0.includes(f.toLowerCase())
          ? ((a = 6), de ? (n.consume(E), L) : o.interrupt ? i(E) : Z(E))
          : ((a = 7),
            o.interrupt && !o.parser.lazy[o.now().line]
              ? l(E)
              : c
                ? V(E)
                : A(E));
    }
    return E === 45 || _t(E)
      ? (n.consume(E), (f += String.fromCharCode(E)), R)
      : l(E);
  }
  function L(E) {
    return E === 62 ? (n.consume(E), o.interrupt ? i : Z) : l(E);
  }
  function V(E) {
    return ze(E) ? (n.consume(E), V) : ve(E);
  }
  function A(E) {
    return E === 47
      ? (n.consume(E), ve)
      : E === 58 || E === 95 || Gt(E)
        ? (n.consume(E), Q)
        : ze(E)
          ? (n.consume(E), A)
          : ve(E);
  }
  function Q(E) {
    return E === 45 || E === 46 || E === 58 || E === 95 || _t(E)
      ? (n.consume(E), Q)
      : Y(E);
  }
  function Y(E) {
    return E === 61 ? (n.consume(E), D) : ze(E) ? (n.consume(E), Y) : A(E);
  }
  function D(E) {
    return E === null || E === 60 || E === 61 || E === 62 || E === 96
      ? l(E)
      : E === 34 || E === 39
        ? (n.consume(E), (h = E), te)
        : ze(E)
          ? (n.consume(E), D)
          : ce(E);
  }
  function te(E) {
    return E === h
      ? (n.consume(E), (h = null), ge)
      : E === null || me(E)
        ? l(E)
        : (n.consume(E), te);
  }
  function ce(E) {
    return E === null ||
      E === 34 ||
      E === 39 ||
      E === 47 ||
      E === 60 ||
      E === 61 ||
      E === 62 ||
      E === 96 ||
      gt(E)
      ? Y(E)
      : (n.consume(E), ce);
  }
  function ge(E) {
    return E === 47 || E === 62 || ze(E) ? A(E) : l(E);
  }
  function ve(E) {
    return E === 62 ? (n.consume(E), re) : l(E);
  }
  function re(E) {
    return E === null || me(E) ? Z(E) : ze(E) ? (n.consume(E), re) : l(E);
  }
  function Z(E) {
    return E === 45 && a === 2
      ? (n.consume(E), Ce)
      : E === 60 && a === 1
        ? (n.consume(E), xe)
        : E === 62 && a === 4
          ? (n.consume(E), P)
          : E === 63 && a === 3
            ? (n.consume(E), w)
            : E === 93 && a === 5
              ? (n.consume(E), oe)
              : me(E) && (a === 6 || a === 7)
                ? (n.exit('htmlFlowData'), n.check(x0, F, G)(E))
                : E === null || me(E)
                  ? (n.exit('htmlFlowData'), G(E))
                  : (n.consume(E), Z);
  }
  function G(E) {
    return n.check(w0, X, F)(E);
  }
  function X(E) {
    return (n.enter('lineEnding'), n.consume(E), n.exit('lineEnding'), ue);
  }
  function ue(E) {
    return E === null || me(E) ? G(E) : (n.enter('htmlFlowData'), Z(E));
  }
  function Ce(E) {
    return E === 45 ? (n.consume(E), w) : Z(E);
  }
  function xe(E) {
    return E === 47 ? (n.consume(E), (f = ''), $) : Z(E);
  }
  function $(E) {
    if (E === 62) {
      const de = f.toLowerCase();
      return Xd.includes(de) ? (n.consume(E), P) : Z(E);
    }
    return Gt(E) && f.length < 8
      ? (n.consume(E), (f += String.fromCharCode(E)), $)
      : Z(E);
  }
  function oe(E) {
    return E === 93 ? (n.consume(E), w) : Z(E);
  }
  function w(E) {
    return E === 62
      ? (n.consume(E), P)
      : E === 45 && a === 2
        ? (n.consume(E), w)
        : Z(E);
  }
  function P(E) {
    return E === null || me(E)
      ? (n.exit('htmlFlowData'), F(E))
      : (n.consume(E), P);
  }
  function F(E) {
    return (n.exit('htmlFlow'), i(E));
  }
}
function E0(n, i, l) {
  const o = this;
  return a;
  function a(f) {
    return me(f)
      ? (n.enter('lineEnding'), n.consume(f), n.exit('lineEnding'), c)
      : l(f);
  }
  function c(f) {
    return o.parser.lazy[o.now().line] ? l(f) : i(f);
  }
}
function C0(n, i, l) {
  return o;
  function o(a) {
    return (
      n.enter('lineEnding'),
      n.consume(a),
      n.exit('lineEnding'),
      n.attempt(Eo, i, l)
    );
  }
}
const _0 = { name: 'htmlText', tokenize: P0 };
function P0(n, i, l) {
  const o = this;
  let a, c, f;
  return p;
  function p(w) {
    return (n.enter('htmlText'), n.enter('htmlTextData'), n.consume(w), h);
  }
  function h(w) {
    return w === 33
      ? (n.consume(w), m)
      : w === 47
        ? (n.consume(w), Y)
        : w === 63
          ? (n.consume(w), A)
          : Gt(w)
            ? (n.consume(w), ce)
            : l(w);
  }
  function m(w) {
    return w === 45
      ? (n.consume(w), g)
      : w === 91
        ? (n.consume(w), (c = 0), O)
        : Gt(w)
          ? (n.consume(w), V)
          : l(w);
  }
  function g(w) {
    return w === 45 ? (n.consume(w), x) : l(w);
  }
  function v(w) {
    return w === null
      ? l(w)
      : w === 45
        ? (n.consume(w), k)
        : me(w)
          ? ((f = v), xe(w))
          : (n.consume(w), v);
  }
  function k(w) {
    return w === 45 ? (n.consume(w), x) : v(w);
  }
  function x(w) {
    return w === 62 ? Ce(w) : w === 45 ? k(w) : v(w);
  }
  function O(w) {
    const P = 'CDATA[';
    return w === P.charCodeAt(c++)
      ? (n.consume(w), c === P.length ? z : O)
      : l(w);
  }
  function z(w) {
    return w === null
      ? l(w)
      : w === 93
        ? (n.consume(w), R)
        : me(w)
          ? ((f = z), xe(w))
          : (n.consume(w), z);
  }
  function R(w) {
    return w === 93 ? (n.consume(w), L) : z(w);
  }
  function L(w) {
    return w === 62 ? Ce(w) : w === 93 ? (n.consume(w), L) : z(w);
  }
  function V(w) {
    return w === null || w === 62
      ? Ce(w)
      : me(w)
        ? ((f = V), xe(w))
        : (n.consume(w), V);
  }
  function A(w) {
    return w === null
      ? l(w)
      : w === 63
        ? (n.consume(w), Q)
        : me(w)
          ? ((f = A), xe(w))
          : (n.consume(w), A);
  }
  function Q(w) {
    return w === 62 ? Ce(w) : A(w);
  }
  function Y(w) {
    return Gt(w) ? (n.consume(w), D) : l(w);
  }
  function D(w) {
    return w === 45 || _t(w) ? (n.consume(w), D) : te(w);
  }
  function te(w) {
    return me(w) ? ((f = te), xe(w)) : ze(w) ? (n.consume(w), te) : Ce(w);
  }
  function ce(w) {
    return w === 45 || _t(w)
      ? (n.consume(w), ce)
      : w === 47 || w === 62 || gt(w)
        ? ge(w)
        : l(w);
  }
  function ge(w) {
    return w === 47
      ? (n.consume(w), Ce)
      : w === 58 || w === 95 || Gt(w)
        ? (n.consume(w), ve)
        : me(w)
          ? ((f = ge), xe(w))
          : ze(w)
            ? (n.consume(w), ge)
            : Ce(w);
  }
  function ve(w) {
    return w === 45 || w === 46 || w === 58 || w === 95 || _t(w)
      ? (n.consume(w), ve)
      : re(w);
  }
  function re(w) {
    return w === 61
      ? (n.consume(w), Z)
      : me(w)
        ? ((f = re), xe(w))
        : ze(w)
          ? (n.consume(w), re)
          : ge(w);
  }
  function Z(w) {
    return w === null || w === 60 || w === 61 || w === 62 || w === 96
      ? l(w)
      : w === 34 || w === 39
        ? (n.consume(w), (a = w), G)
        : me(w)
          ? ((f = Z), xe(w))
          : ze(w)
            ? (n.consume(w), Z)
            : (n.consume(w), X);
  }
  function G(w) {
    return w === a
      ? (n.consume(w), (a = void 0), ue)
      : w === null
        ? l(w)
        : me(w)
          ? ((f = G), xe(w))
          : (n.consume(w), G);
  }
  function X(w) {
    return w === null ||
      w === 34 ||
      w === 39 ||
      w === 60 ||
      w === 61 ||
      w === 96
      ? l(w)
      : w === 47 || w === 62 || gt(w)
        ? ge(w)
        : (n.consume(w), X);
  }
  function ue(w) {
    return w === 47 || w === 62 || gt(w) ? ge(w) : l(w);
  }
  function Ce(w) {
    return w === 62
      ? (n.consume(w), n.exit('htmlTextData'), n.exit('htmlText'), i)
      : l(w);
  }
  function xe(w) {
    return (
      n.exit('htmlTextData'),
      n.enter('lineEnding'),
      n.consume(w),
      n.exit('lineEnding'),
      $
    );
  }
  function $(w) {
    return ze(w)
      ? De(
          n,
          oe,
          'linePrefix',
          o.parser.constructs.disable.null.includes('codeIndented')
            ? void 0
            : 4,
        )(w)
      : oe(w);
  }
  function oe(w) {
    return (n.enter('htmlTextData'), f(w));
  }
}
const fs = { name: 'labelEnd', resolveAll: z0, resolveTo: R0, tokenize: L0 },
  T0 = { tokenize: O0 },
  N0 = { tokenize: D0 },
  I0 = { tokenize: M0 };
function z0(n) {
  let i = -1;
  const l = [];
  for (; ++i < n.length; ) {
    const o = n[i][1];
    if (
      (l.push(n[i]),
      o.type === 'labelImage' ||
        o.type === 'labelLink' ||
        o.type === 'labelEnd')
    ) {
      const a = o.type === 'labelImage' ? 4 : 2;
      ((o.type = 'data'), (i += a));
    }
  }
  return (n.length !== l.length && Jt(n, 0, n.length, l), n);
}
function R0(n, i) {
  let l = n.length,
    o = 0,
    a,
    c,
    f,
    p;
  for (; l--; )
    if (((a = n[l][1]), c)) {
      if (a.type === 'link' || (a.type === 'labelLink' && a._inactive)) break;
      n[l][0] === 'enter' && a.type === 'labelLink' && (a._inactive = !0);
    } else if (f) {
      if (
        n[l][0] === 'enter' &&
        (a.type === 'labelImage' || a.type === 'labelLink') &&
        !a._balanced &&
        ((c = l), a.type !== 'labelLink')
      ) {
        o = 2;
        break;
      }
    } else a.type === 'labelEnd' && (f = l);
  const h = {
      type: n[c][1].type === 'labelLink' ? 'link' : 'image',
      start: { ...n[c][1].start },
      end: { ...n[n.length - 1][1].end },
    },
    m = { type: 'label', start: { ...n[c][1].start }, end: { ...n[f][1].end } },
    g = {
      type: 'labelText',
      start: { ...n[c + o + 2][1].end },
      end: { ...n[f - 2][1].start },
    };
  return (
    (p = [
      ['enter', h, i],
      ['enter', m, i],
    ]),
    (p = Mt(p, n.slice(c + 1, c + o + 3))),
    (p = Mt(p, [['enter', g, i]])),
    (p = Mt(
      p,
      cs(i.parser.constructs.insideSpan.null, n.slice(c + o + 4, f - 3), i),
    )),
    (p = Mt(p, [['exit', g, i], n[f - 2], n[f - 1], ['exit', m, i]])),
    (p = Mt(p, n.slice(f + 1))),
    (p = Mt(p, [['exit', h, i]])),
    Jt(n, c, n.length, p),
    n
  );
}
function L0(n, i, l) {
  const o = this;
  let a = o.events.length,
    c,
    f;
  for (; a--; )
    if (
      (o.events[a][1].type === 'labelImage' ||
        o.events[a][1].type === 'labelLink') &&
      !o.events[a][1]._balanced
    ) {
      c = o.events[a][1];
      break;
    }
  return p;
  function p(k) {
    return c
      ? c._inactive
        ? v(k)
        : ((f = o.parser.defined.includes(
            Or(o.sliceSerialize({ start: c.end, end: o.now() })),
          )),
          n.enter('labelEnd'),
          n.enter('labelMarker'),
          n.consume(k),
          n.exit('labelMarker'),
          n.exit('labelEnd'),
          h)
      : l(k);
  }
  function h(k) {
    return k === 40
      ? n.attempt(T0, g, f ? g : v)(k)
      : k === 91
        ? n.attempt(N0, g, f ? m : v)(k)
        : f
          ? g(k)
          : v(k);
  }
  function m(k) {
    return n.attempt(I0, g, v)(k);
  }
  function g(k) {
    return i(k);
  }
  function v(k) {
    return ((c._balanced = !0), l(k));
  }
}
function O0(n, i, l) {
  return o;
  function o(v) {
    return (
      n.enter('resource'),
      n.enter('resourceMarker'),
      n.consume(v),
      n.exit('resourceMarker'),
      a
    );
  }
  function a(v) {
    return gt(v) ? zi(n, c)(v) : c(v);
  }
  function c(v) {
    return v === 41
      ? g(v)
      : uh(
          n,
          f,
          p,
          'resourceDestination',
          'resourceDestinationLiteral',
          'resourceDestinationLiteralMarker',
          'resourceDestinationRaw',
          'resourceDestinationString',
          32,
        )(v);
  }
  function f(v) {
    return gt(v) ? zi(n, h)(v) : g(v);
  }
  function p(v) {
    return l(v);
  }
  function h(v) {
    return v === 34 || v === 39 || v === 40
      ? sh(
          n,
          m,
          l,
          'resourceTitle',
          'resourceTitleMarker',
          'resourceTitleString',
        )(v)
      : g(v);
  }
  function m(v) {
    return gt(v) ? zi(n, g)(v) : g(v);
  }
  function g(v) {
    return v === 41
      ? (n.enter('resourceMarker'),
        n.consume(v),
        n.exit('resourceMarker'),
        n.exit('resource'),
        i)
      : l(v);
  }
}
function D0(n, i, l) {
  const o = this;
  return a;
  function a(p) {
    return ah.call(
      o,
      n,
      c,
      f,
      'reference',
      'referenceMarker',
      'referenceString',
    )(p);
  }
  function c(p) {
    return o.parser.defined.includes(
      Or(o.sliceSerialize(o.events[o.events.length - 1][1]).slice(1, -1)),
    )
      ? i(p)
      : l(p);
  }
  function f(p) {
    return l(p);
  }
}
function M0(n, i, l) {
  return o;
  function o(c) {
    return (
      n.enter('reference'),
      n.enter('referenceMarker'),
      n.consume(c),
      n.exit('referenceMarker'),
      a
    );
  }
  function a(c) {
    return c === 93
      ? (n.enter('referenceMarker'),
        n.consume(c),
        n.exit('referenceMarker'),
        n.exit('reference'),
        i)
      : l(c);
  }
}
const A0 = { name: 'labelStartImage', resolveAll: fs.resolveAll, tokenize: F0 };
function F0(n, i, l) {
  const o = this;
  return a;
  function a(p) {
    return (
      n.enter('labelImage'),
      n.enter('labelImageMarker'),
      n.consume(p),
      n.exit('labelImageMarker'),
      c
    );
  }
  function c(p) {
    return p === 91
      ? (n.enter('labelMarker'),
        n.consume(p),
        n.exit('labelMarker'),
        n.exit('labelImage'),
        f)
      : l(p);
  }
  function f(p) {
    return p === 94 && '_hiddenFootnoteSupport' in o.parser.constructs
      ? l(p)
      : i(p);
  }
}
const j0 = { name: 'labelStartLink', resolveAll: fs.resolveAll, tokenize: B0 };
function B0(n, i, l) {
  const o = this;
  return a;
  function a(f) {
    return (
      n.enter('labelLink'),
      n.enter('labelMarker'),
      n.consume(f),
      n.exit('labelMarker'),
      n.exit('labelLink'),
      c
    );
  }
  function c(f) {
    return f === 94 && '_hiddenFootnoteSupport' in o.parser.constructs
      ? l(f)
      : i(f);
  }
}
const _a = { name: 'lineEnding', tokenize: U0 };
function U0(n, i) {
  return l;
  function l(o) {
    return (
      n.enter('lineEnding'),
      n.consume(o),
      n.exit('lineEnding'),
      De(n, i, 'linePrefix')
    );
  }
}
const no = { name: 'thematicBreak', tokenize: b0 };
function b0(n, i, l) {
  let o = 0,
    a;
  return c;
  function c(m) {
    return (n.enter('thematicBreak'), f(m));
  }
  function f(m) {
    return ((a = m), p(m));
  }
  function p(m) {
    return m === a
      ? (n.enter('thematicBreakSequence'), h(m))
      : o >= 3 && (m === null || me(m))
        ? (n.exit('thematicBreak'), i(m))
        : l(m);
  }
  function h(m) {
    return m === a
      ? (n.consume(m), o++, h)
      : (n.exit('thematicBreakSequence'),
        ze(m) ? De(n, p, 'whitespace')(m) : p(m));
  }
}
const mt = {
    continuation: { tokenize: W0 },
    exit: q0,
    name: 'list',
    tokenize: $0,
  },
  V0 = { partial: !0, tokenize: K0 },
  H0 = { partial: !0, tokenize: Q0 };
function $0(n, i, l) {
  const o = this,
    a = o.events[o.events.length - 1];
  let c =
      a && a[1].type === 'linePrefix'
        ? a[2].sliceSerialize(a[1], !0).length
        : 0,
    f = 0;
  return p;
  function p(x) {
    const O =
      o.containerState.type ||
      (x === 42 || x === 43 || x === 45 ? 'listUnordered' : 'listOrdered');
    if (
      O === 'listUnordered'
        ? !o.containerState.marker || x === o.containerState.marker
        : qa(x)
    ) {
      if (
        (o.containerState.type ||
          ((o.containerState.type = O), n.enter(O, { _container: !0 })),
        O === 'listUnordered')
      )
        return (
          n.enter('listItemPrefix'),
          x === 42 || x === 45 ? n.check(no, l, m)(x) : m(x)
        );
      if (!o.interrupt || x === 49)
        return (n.enter('listItemPrefix'), n.enter('listItemValue'), h(x));
    }
    return l(x);
  }
  function h(x) {
    return qa(x) && ++f < 10
      ? (n.consume(x), h)
      : (!o.interrupt || f < 2) &&
          (o.containerState.marker
            ? x === o.containerState.marker
            : x === 41 || x === 46)
        ? (n.exit('listItemValue'), m(x))
        : l(x);
  }
  function m(x) {
    return (
      n.enter('listItemMarker'),
      n.consume(x),
      n.exit('listItemMarker'),
      (o.containerState.marker = o.containerState.marker || x),
      n.check(Eo, o.interrupt ? l : g, n.attempt(V0, k, v))
    );
  }
  function g(x) {
    return ((o.containerState.initialBlankLine = !0), c++, k(x));
  }
  function v(x) {
    return ze(x)
      ? (n.enter('listItemPrefixWhitespace'),
        n.consume(x),
        n.exit('listItemPrefixWhitespace'),
        k)
      : l(x);
  }
  function k(x) {
    return (
      (o.containerState.size =
        c + o.sliceSerialize(n.exit('listItemPrefix'), !0).length),
      i(x)
    );
  }
}
function W0(n, i, l) {
  const o = this;
  return ((o.containerState._closeFlow = void 0), n.check(Eo, a, c));
  function a(p) {
    return (
      (o.containerState.furtherBlankLines =
        o.containerState.furtherBlankLines ||
        o.containerState.initialBlankLine),
      De(n, i, 'listItemIndent', o.containerState.size + 1)(p)
    );
  }
  function c(p) {
    return o.containerState.furtherBlankLines || !ze(p)
      ? ((o.containerState.furtherBlankLines = void 0),
        (o.containerState.initialBlankLine = void 0),
        f(p))
      : ((o.containerState.furtherBlankLines = void 0),
        (o.containerState.initialBlankLine = void 0),
        n.attempt(H0, i, f)(p));
  }
  function f(p) {
    return (
      (o.containerState._closeFlow = !0),
      (o.interrupt = void 0),
      De(
        n,
        n.attempt(mt, i, l),
        'linePrefix',
        o.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4,
      )(p)
    );
  }
}
function Q0(n, i, l) {
  const o = this;
  return De(n, a, 'listItemIndent', o.containerState.size + 1);
  function a(c) {
    const f = o.events[o.events.length - 1];
    return f &&
      f[1].type === 'listItemIndent' &&
      f[2].sliceSerialize(f[1], !0).length === o.containerState.size
      ? i(c)
      : l(c);
  }
}
function q0(n) {
  n.exit(this.containerState.type);
}
function K0(n, i, l) {
  const o = this;
  return De(
    n,
    a,
    'listItemPrefixWhitespace',
    o.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 5,
  );
  function a(c) {
    const f = o.events[o.events.length - 1];
    return !ze(c) && f && f[1].type === 'listItemPrefixWhitespace'
      ? i(c)
      : l(c);
  }
}
const Yd = { name: 'setextUnderline', resolveTo: X0, tokenize: Y0 };
function X0(n, i) {
  let l = n.length,
    o,
    a,
    c;
  for (; l--; )
    if (n[l][0] === 'enter') {
      if (n[l][1].type === 'content') {
        o = l;
        break;
      }
      n[l][1].type === 'paragraph' && (a = l);
    } else
      (n[l][1].type === 'content' && n.splice(l, 1),
        !c && n[l][1].type === 'definition' && (c = l));
  const f = {
    type: 'setextHeading',
    start: { ...n[o][1].start },
    end: { ...n[n.length - 1][1].end },
  };
  return (
    (n[a][1].type = 'setextHeadingText'),
    c
      ? (n.splice(a, 0, ['enter', f, i]),
        n.splice(c + 1, 0, ['exit', n[o][1], i]),
        (n[o][1].end = { ...n[c][1].end }))
      : (n[o][1] = f),
    n.push(['exit', f, i]),
    n
  );
}
function Y0(n, i, l) {
  const o = this;
  let a;
  return c;
  function c(m) {
    let g = o.events.length,
      v;
    for (; g--; )
      if (
        o.events[g][1].type !== 'lineEnding' &&
        o.events[g][1].type !== 'linePrefix' &&
        o.events[g][1].type !== 'content'
      ) {
        v = o.events[g][1].type === 'paragraph';
        break;
      }
    return !o.parser.lazy[o.now().line] && (o.interrupt || v)
      ? (n.enter('setextHeadingLine'), (a = m), f(m))
      : l(m);
  }
  function f(m) {
    return (n.enter('setextHeadingLineSequence'), p(m));
  }
  function p(m) {
    return m === a
      ? (n.consume(m), p)
      : (n.exit('setextHeadingLineSequence'),
        ze(m) ? De(n, h, 'lineSuffix')(m) : h(m));
  }
  function h(m) {
    return m === null || me(m) ? (n.exit('setextHeadingLine'), i(m)) : l(m);
  }
}
const G0 = { tokenize: J0 };
function J0(n) {
  const i = this,
    l = n.attempt(
      Eo,
      o,
      n.attempt(
        this.parser.constructs.flowInitial,
        a,
        De(
          n,
          n.attempt(this.parser.constructs.flow, a, n.attempt(r0, a)),
          'linePrefix',
        ),
      ),
    );
  return l;
  function o(c) {
    if (c === null) {
      n.consume(c);
      return;
    }
    return (
      n.enter('lineEndingBlank'),
      n.consume(c),
      n.exit('lineEndingBlank'),
      (i.currentConstruct = void 0),
      l
    );
  }
  function a(c) {
    if (c === null) {
      n.consume(c);
      return;
    }
    return (
      n.enter('lineEnding'),
      n.consume(c),
      n.exit('lineEnding'),
      (i.currentConstruct = void 0),
      l
    );
  }
}
const Z0 = { resolveAll: fh() },
  ex = ch('string'),
  tx = ch('text');
function ch(n) {
  return { resolveAll: fh(n === 'text' ? nx : void 0), tokenize: i };
  function i(l) {
    const o = this,
      a = this.parser.constructs[n],
      c = l.attempt(a, f, p);
    return f;
    function f(g) {
      return m(g) ? c(g) : p(g);
    }
    function p(g) {
      if (g === null) {
        l.consume(g);
        return;
      }
      return (l.enter('data'), l.consume(g), h);
    }
    function h(g) {
      return m(g) ? (l.exit('data'), c(g)) : (l.consume(g), h);
    }
    function m(g) {
      if (g === null) return !0;
      const v = a[g];
      let k = -1;
      if (v)
        for (; ++k < v.length; ) {
          const x = v[k];
          if (!x.previous || x.previous.call(o, o.previous)) return !0;
        }
      return !1;
    }
  }
}
function fh(n) {
  return i;
  function i(l, o) {
    let a = -1,
      c;
    for (; ++a <= l.length; )
      c === void 0
        ? l[a] && l[a][1].type === 'data' && ((c = a), a++)
        : (!l[a] || l[a][1].type !== 'data') &&
          (a !== c + 2 &&
            ((l[c][1].end = l[a - 1][1].end),
            l.splice(c + 2, a - c - 2),
            (a = c + 2)),
          (c = void 0));
    return n ? n(l, o) : l;
  }
}
function nx(n, i) {
  let l = 0;
  for (; ++l <= n.length; )
    if (
      (l === n.length || n[l][1].type === 'lineEnding') &&
      n[l - 1][1].type === 'data'
    ) {
      const o = n[l - 1][1],
        a = i.sliceStream(o);
      let c = a.length,
        f = -1,
        p = 0,
        h;
      for (; c--; ) {
        const m = a[c];
        if (typeof m == 'string') {
          for (f = m.length; m.charCodeAt(f - 1) === 32; ) (p++, f--);
          if (f) break;
          f = -1;
        } else if (m === -2) ((h = !0), p++);
        else if (m !== -1) {
          c++;
          break;
        }
      }
      if ((i._contentTypeTextTrailing && l === n.length && (p = 0), p)) {
        const m = {
          type:
            l === n.length || h || p < 2 ? 'lineSuffix' : 'hardBreakTrailing',
          start: {
            _bufferIndex: c ? f : o.start._bufferIndex + f,
            _index: o.start._index + c,
            line: o.end.line,
            column: o.end.column - p,
            offset: o.end.offset - p,
          },
          end: { ...o.end },
        };
        ((o.end = { ...m.start }),
          o.start.offset === o.end.offset
            ? Object.assign(o, m)
            : (n.splice(l, 0, ['enter', m, i], ['exit', m, i]), (l += 2)));
      }
      l++;
    }
  return n;
}
const rx = {
    42: mt,
    43: mt,
    45: mt,
    48: mt,
    49: mt,
    50: mt,
    51: mt,
    52: mt,
    53: mt,
    54: mt,
    55: mt,
    56: mt,
    57: mt,
    62: rh,
  },
  ix = { 91: a0 },
  lx = { [-2]: Ca, [-1]: Ca, 32: Ca },
  ox = {
    35: h0,
    42: no,
    45: [Yd, no],
    60: v0,
    61: Yd,
    95: no,
    96: Kd,
    126: Kd,
  },
  ux = { 38: lh, 92: ih },
  ax = {
    [-5]: _a,
    [-4]: _a,
    [-3]: _a,
    33: A0,
    38: lh,
    42: Ka,
    60: [j1, _0],
    91: j0,
    92: [d0, ih],
    93: fs,
    95: Ka,
    96: G1,
  },
  sx = { null: [Ka, Z0] },
  cx = { null: [42, 95] },
  fx = { null: [] },
  dx = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        attentionMarkers: cx,
        contentInitial: ix,
        disable: fx,
        document: rx,
        flow: ox,
        flowInitial: lx,
        insideSpan: sx,
        string: ux,
        text: ax,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
function px(n, i, l) {
  let o = {
    _bufferIndex: -1,
    _index: 0,
    line: (l && l.line) || 1,
    column: (l && l.column) || 1,
    offset: (l && l.offset) || 0,
  };
  const a = {},
    c = [];
  let f = [],
    p = [];
  const h = {
      attempt: te(Y),
      check: te(D),
      consume: V,
      enter: A,
      exit: Q,
      interrupt: te(D, { interrupt: !0 }),
    },
    m = {
      code: null,
      containerState: {},
      defineSkip: z,
      events: [],
      now: O,
      parser: n,
      previous: null,
      sliceSerialize: k,
      sliceStream: x,
      write: v,
    };
  let g = i.tokenize.call(m, h);
  return (i.resolveAll && c.push(i), m);
  function v(re) {
    return (
      (f = Mt(f, re)),
      R(),
      f[f.length - 1] !== null
        ? []
        : (ce(i, 0), (m.events = cs(c, m.events, m)), m.events)
    );
  }
  function k(re, Z) {
    return mx(x(re), Z);
  }
  function x(re) {
    return hx(f, re);
  }
  function O() {
    const { _bufferIndex: re, _index: Z, line: G, column: X, offset: ue } = o;
    return { _bufferIndex: re, _index: Z, line: G, column: X, offset: ue };
  }
  function z(re) {
    ((a[re.line] = re.column), ve());
  }
  function R() {
    let re;
    for (; o._index < f.length; ) {
      const Z = f[o._index];
      if (typeof Z == 'string')
        for (
          re = o._index, o._bufferIndex < 0 && (o._bufferIndex = 0);
          o._index === re && o._bufferIndex < Z.length;

        )
          L(Z.charCodeAt(o._bufferIndex));
      else L(Z);
    }
  }
  function L(re) {
    g = g(re);
  }
  function V(re) {
    (me(re)
      ? (o.line++, (o.column = 1), (o.offset += re === -3 ? 2 : 1), ve())
      : re !== -1 && (o.column++, o.offset++),
      o._bufferIndex < 0
        ? o._index++
        : (o._bufferIndex++,
          o._bufferIndex === f[o._index].length &&
            ((o._bufferIndex = -1), o._index++)),
      (m.previous = re));
  }
  function A(re, Z) {
    const G = Z || {};
    return (
      (G.type = re),
      (G.start = O()),
      m.events.push(['enter', G, m]),
      p.push(G),
      G
    );
  }
  function Q(re) {
    const Z = p.pop();
    return ((Z.end = O()), m.events.push(['exit', Z, m]), Z);
  }
  function Y(re, Z) {
    ce(re, Z.from);
  }
  function D(re, Z) {
    Z.restore();
  }
  function te(re, Z) {
    return G;
    function G(X, ue, Ce) {
      let xe, $, oe, w;
      return Array.isArray(X) ? F(X) : 'tokenize' in X ? F([X]) : P(X);
      function P(fe) {
        return Te;
        function Te(ke) {
          const Ie = ke !== null && fe[ke],
            He = ke !== null && fe.null,
            Zt = [
              ...(Array.isArray(Ie) ? Ie : Ie ? [Ie] : []),
              ...(Array.isArray(He) ? He : He ? [He] : []),
            ];
          return F(Zt)(ke);
        }
      }
      function F(fe) {
        return ((xe = fe), ($ = 0), fe.length === 0 ? Ce : E(fe[$]));
      }
      function E(fe) {
        return Te;
        function Te(ke) {
          return (
            (w = ge()),
            (oe = fe),
            fe.partial || (m.currentConstruct = fe),
            fe.name && m.parser.constructs.disable.null.includes(fe.name)
              ? we()
              : fe.tokenize.call(
                  Z ? Object.assign(Object.create(m), Z) : m,
                  h,
                  de,
                  we,
                )(ke)
          );
        }
      }
      function de(fe) {
        return (re(oe, w), ue);
      }
      function we(fe) {
        return (w.restore(), ++$ < xe.length ? E(xe[$]) : Ce);
      }
    }
  }
  function ce(re, Z) {
    (re.resolveAll && !c.includes(re) && c.push(re),
      re.resolve &&
        Jt(m.events, Z, m.events.length - Z, re.resolve(m.events.slice(Z), m)),
      re.resolveTo && (m.events = re.resolveTo(m.events, m)));
  }
  function ge() {
    const re = O(),
      Z = m.previous,
      G = m.currentConstruct,
      X = m.events.length,
      ue = Array.from(p);
    return { from: X, restore: Ce };
    function Ce() {
      ((o = re),
        (m.previous = Z),
        (m.currentConstruct = G),
        (m.events.length = X),
        (p = ue),
        ve());
    }
  }
  function ve() {
    o.line in a &&
      o.column < 2 &&
      ((o.column = a[o.line]), (o.offset += a[o.line] - 1));
  }
}
function hx(n, i) {
  const l = i.start._index,
    o = i.start._bufferIndex,
    a = i.end._index,
    c = i.end._bufferIndex;
  let f;
  if (l === a) f = [n[l].slice(o, c)];
  else {
    if (((f = n.slice(l, a)), o > -1)) {
      const p = f[0];
      typeof p == 'string' ? (f[0] = p.slice(o)) : f.shift();
    }
    c > 0 && f.push(n[a].slice(0, c));
  }
  return f;
}
function mx(n, i) {
  let l = -1;
  const o = [];
  let a;
  for (; ++l < n.length; ) {
    const c = n[l];
    let f;
    if (typeof c == 'string') f = c;
    else
      switch (c) {
        case -5: {
          f = '\r';
          break;
        }
        case -4: {
          f = `
`;
          break;
        }
        case -3: {
          f = `\r
`;
          break;
        }
        case -2: {
          f = i ? ' ' : '	';
          break;
        }
        case -1: {
          if (!i && a) continue;
          f = ' ';
          break;
        }
        default:
          f = String.fromCharCode(c);
      }
    ((a = c === -2), o.push(f));
  }
  return o.join('');
}
function gx(n) {
  const o = {
    constructs: E1([dx, ...((n || {}).extensions || [])]),
    content: a(R1),
    defined: [],
    document: a(O1),
    flow: a(G0),
    lazy: {},
    string: a(ex),
    text: a(tx),
  };
  return o;
  function a(c) {
    return f;
    function f(p) {
      return px(o, c, p);
    }
  }
}
function yx(n) {
  for (; !oh(n); );
  return n;
}
const Gd = /[\0\t\n\r]/g;
function vx() {
  let n = 1,
    i = '',
    l = !0,
    o;
  return a;
  function a(c, f, p) {
    const h = [];
    let m, g, v, k, x;
    for (
      c =
        i +
        (typeof c == 'string'
          ? c.toString()
          : new TextDecoder(f || void 0).decode(c)),
        v = 0,
        i = '',
        l && (c.charCodeAt(0) === 65279 && v++, (l = void 0));
      v < c.length;

    ) {
      if (
        ((Gd.lastIndex = v),
        (m = Gd.exec(c)),
        (k = m && m.index !== void 0 ? m.index : c.length),
        (x = c.charCodeAt(k)),
        !m)
      ) {
        i = c.slice(v);
        break;
      }
      if (x === 10 && v === k && o) (h.push(-3), (o = void 0));
      else
        switch (
          (o && (h.push(-5), (o = void 0)),
          v < k && (h.push(c.slice(v, k)), (n += k - v)),
          x)
        ) {
          case 0: {
            (h.push(65533), n++);
            break;
          }
          case 9: {
            for (g = Math.ceil(n / 4) * 4, h.push(-2); n++ < g; ) h.push(-1);
            break;
          }
          case 10: {
            (h.push(-4), (n = 1));
            break;
          }
          default:
            ((o = !0), (n = 1));
        }
      v = k + 1;
    }
    return (p && (o && h.push(-5), i && h.push(i), h.push(null)), h);
  }
}
const xx = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function wx(n) {
  return n.replace(xx, kx);
}
function kx(n, i, l) {
  if (i) return i;
  if (l.charCodeAt(0) === 35) {
    const a = l.charCodeAt(1),
      c = a === 120 || a === 88;
    return nh(l.slice(c ? 2 : 1), c ? 16 : 10);
  }
  return ss(l) || n;
}
const dh = {}.hasOwnProperty;
function Sx(n, i, l) {
  return (
    typeof i != 'string' && ((l = i), (i = void 0)),
    Ex(l)(
      yx(
        gx(l)
          .document()
          .write(vx()(n, i, !0)),
      ),
    )
  );
}
function Ex(n) {
  const i = {
    transforms: [],
    canContainEols: ['emphasis', 'fragment', 'heading', 'paragraph', 'strong'],
    enter: {
      autolink: c(rr),
      autolinkProtocol: ge,
      autolinkEmail: ge,
      atxHeading: c(jr),
      blockQuote: c(He),
      characterEscape: ge,
      characterReference: ge,
      codeFenced: c(Zt),
      codeFencedFenceInfo: f,
      codeFencedFenceMeta: f,
      codeIndented: c(Zt, f),
      codeText: c(ji, f),
      codeTextData: ge,
      data: ge,
      codeFlowValue: ge,
      definition: c(tr),
      definitionDestinationString: f,
      definitionLabelString: f,
      definitionTitleString: f,
      emphasis: c(Fr),
      hardBreakEscape: c(Br),
      hardBreakTrailing: c(Br),
      htmlFlow: c(nr, f),
      htmlFlowData: ge,
      htmlText: c(nr, f),
      htmlTextData: ge,
      image: c(Bi),
      label: f,
      link: c(rr),
      listItem: c(pn),
      listItemValue: k,
      listOrdered: c(dn, v),
      listUnordered: c(dn),
      paragraph: c(Ur),
      reference: E,
      referenceString: f,
      resourceDestinationString: f,
      resourceTitleString: f,
      setextHeading: c(jr),
      strong: c(Ui),
      thematicBreak: c(Vi),
    },
    exit: {
      atxHeading: h(),
      atxHeadingSequence: Y,
      autolink: h(),
      autolinkEmail: Ie,
      autolinkProtocol: ke,
      blockQuote: h(),
      characterEscapeValue: ve,
      characterReferenceMarkerHexadecimal: we,
      characterReferenceMarkerNumeric: we,
      characterReferenceValue: fe,
      characterReference: Te,
      codeFenced: h(R),
      codeFencedFence: z,
      codeFencedFenceInfo: x,
      codeFencedFenceMeta: O,
      codeFlowValue: ve,
      codeIndented: h(L),
      codeText: h(ue),
      codeTextData: ve,
      data: ve,
      definition: h(),
      definitionDestinationString: Q,
      definitionLabelString: V,
      definitionTitleString: A,
      emphasis: h(),
      hardBreakEscape: h(Z),
      hardBreakTrailing: h(Z),
      htmlFlow: h(G),
      htmlFlowData: ve,
      htmlText: h(X),
      htmlTextData: ve,
      image: h(xe),
      label: oe,
      labelText: $,
      lineEnding: re,
      link: h(Ce),
      listItem: h(),
      listOrdered: h(),
      listUnordered: h(),
      paragraph: h(),
      referenceString: de,
      resourceDestinationString: w,
      resourceTitleString: P,
      resource: F,
      setextHeading: h(ce),
      setextHeadingLineSequence: te,
      setextHeadingText: D,
      strong: h(),
      thematicBreak: h(),
    },
  };
  ph(i, (n || {}).mdastExtensions || []);
  const l = {};
  return o;
  function o(M) {
    let W = { type: 'root', children: [] };
    const pe = {
        stack: [W],
        tokenStack: [],
        config: i,
        enter: p,
        exit: m,
        buffer: f,
        resume: g,
        data: l,
      },
      Se = [];
    let _e = -1;
    for (; ++_e < M.length; )
      if (M[_e][1].type === 'listOrdered' || M[_e][1].type === 'listUnordered')
        if (M[_e][0] === 'enter') Se.push(_e);
        else {
          const Ge = Se.pop();
          _e = a(M, Ge, _e);
        }
    for (_e = -1; ++_e < M.length; ) {
      const Ge = i[M[_e][0]];
      dh.call(Ge, M[_e][1].type) &&
        Ge[M[_e][1].type].call(
          Object.assign({ sliceSerialize: M[_e][2].sliceSerialize }, pe),
          M[_e][1],
        );
    }
    if (pe.tokenStack.length > 0) {
      const Ge = pe.tokenStack[pe.tokenStack.length - 1];
      (Ge[1] || Jd).call(pe, void 0, Ge[0]);
    }
    for (
      W.position = {
        start: Dn(
          M.length > 0 ? M[0][1].start : { line: 1, column: 1, offset: 0 },
        ),
        end: Dn(
          M.length > 0
            ? M[M.length - 2][1].end
            : { line: 1, column: 1, offset: 0 },
        ),
      },
        _e = -1;
      ++_e < i.transforms.length;

    )
      W = i.transforms[_e](W) || W;
    return W;
  }
  function a(M, W, pe) {
    let Se = W - 1,
      _e = -1,
      Ge = !1,
      en,
      Nt,
      hn,
      Fn;
    for (; ++Se <= pe; ) {
      const Je = M[Se];
      switch (Je[1].type) {
        case 'listUnordered':
        case 'listOrdered':
        case 'blockQuote': {
          (Je[0] === 'enter' ? _e++ : _e--, (Fn = void 0));
          break;
        }
        case 'lineEndingBlank': {
          Je[0] === 'enter' &&
            (en && !Fn && !_e && !hn && (hn = Se), (Fn = void 0));
          break;
        }
        case 'linePrefix':
        case 'listItemValue':
        case 'listItemMarker':
        case 'listItemPrefix':
        case 'listItemPrefixWhitespace':
          break;
        default:
          Fn = void 0;
      }
      if (
        (!_e && Je[0] === 'enter' && Je[1].type === 'listItemPrefix') ||
        (_e === -1 &&
          Je[0] === 'exit' &&
          (Je[1].type === 'listUnordered' || Je[1].type === 'listOrdered'))
      ) {
        if (en) {
          let $t = Se;
          for (Nt = void 0; $t--; ) {
            const xt = M[$t];
            if (
              xt[1].type === 'lineEnding' ||
              xt[1].type === 'lineEndingBlank'
            ) {
              if (xt[0] === 'exit') continue;
              (Nt && ((M[Nt][1].type = 'lineEndingBlank'), (Ge = !0)),
                (xt[1].type = 'lineEnding'),
                (Nt = $t));
            } else if (
              !(
                xt[1].type === 'linePrefix' ||
                xt[1].type === 'blockQuotePrefix' ||
                xt[1].type === 'blockQuotePrefixWhitespace' ||
                xt[1].type === 'blockQuoteMarker' ||
                xt[1].type === 'listItemIndent'
              )
            )
              break;
          }
          (hn && (!Nt || hn < Nt) && (en._spread = !0),
            (en.end = Object.assign({}, Nt ? M[Nt][1].start : Je[1].end)),
            M.splice(Nt || Se, 0, ['exit', en, Je[2]]),
            Se++,
            pe++);
        }
        if (Je[1].type === 'listItemPrefix') {
          const $t = {
            type: 'listItem',
            _spread: !1,
            start: Object.assign({}, Je[1].start),
            end: void 0,
          };
          ((en = $t),
            M.splice(Se, 0, ['enter', $t, Je[2]]),
            Se++,
            pe++,
            (hn = void 0),
            (Fn = !0));
        }
      }
    }
    return ((M[W][1]._spread = Ge), pe);
  }
  function c(M, W) {
    return pe;
    function pe(Se) {
      (p.call(this, M(Se), Se), W && W.call(this, Se));
    }
  }
  function f() {
    this.stack.push({ type: 'fragment', children: [] });
  }
  function p(M, W, pe) {
    (this.stack[this.stack.length - 1].children.push(M),
      this.stack.push(M),
      this.tokenStack.push([W, pe || void 0]),
      (M.position = { start: Dn(W.start), end: void 0 }));
  }
  function h(M) {
    return W;
    function W(pe) {
      (M && M.call(this, pe), m.call(this, pe));
    }
  }
  function m(M, W) {
    const pe = this.stack.pop(),
      Se = this.tokenStack.pop();
    if (Se)
      Se[0].type !== M.type &&
        (W ? W.call(this, M, Se[0]) : (Se[1] || Jd).call(this, M, Se[0]));
    else
      throw new Error(
        'Cannot close `' +
          M.type +
          '` (' +
          Ii({ start: M.start, end: M.end }) +
          '): it’s not open',
      );
    pe.position.end = Dn(M.end);
  }
  function g() {
    return k1(this.stack.pop());
  }
  function v() {
    this.data.expectingFirstListItemValue = !0;
  }
  function k(M) {
    if (this.data.expectingFirstListItemValue) {
      const W = this.stack[this.stack.length - 2];
      ((W.start = Number.parseInt(this.sliceSerialize(M), 10)),
        (this.data.expectingFirstListItemValue = void 0));
    }
  }
  function x() {
    const M = this.resume(),
      W = this.stack[this.stack.length - 1];
    W.lang = M;
  }
  function O() {
    const M = this.resume(),
      W = this.stack[this.stack.length - 1];
    W.meta = M;
  }
  function z() {
    this.data.flowCodeInside ||
      (this.buffer(), (this.data.flowCodeInside = !0));
  }
  function R() {
    const M = this.resume(),
      W = this.stack[this.stack.length - 1];
    ((W.value = M.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, '')),
      (this.data.flowCodeInside = void 0));
  }
  function L() {
    const M = this.resume(),
      W = this.stack[this.stack.length - 1];
    W.value = M.replace(/(\r?\n|\r)$/g, '');
  }
  function V(M) {
    const W = this.resume(),
      pe = this.stack[this.stack.length - 1];
    ((pe.label = W),
      (pe.identifier = Or(this.sliceSerialize(M)).toLowerCase()));
  }
  function A() {
    const M = this.resume(),
      W = this.stack[this.stack.length - 1];
    W.title = M;
  }
  function Q() {
    const M = this.resume(),
      W = this.stack[this.stack.length - 1];
    W.url = M;
  }
  function Y(M) {
    const W = this.stack[this.stack.length - 1];
    if (!W.depth) {
      const pe = this.sliceSerialize(M).length;
      W.depth = pe;
    }
  }
  function D() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function te(M) {
    const W = this.stack[this.stack.length - 1];
    W.depth = this.sliceSerialize(M).codePointAt(0) === 61 ? 1 : 2;
  }
  function ce() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function ge(M) {
    const pe = this.stack[this.stack.length - 1].children;
    let Se = pe[pe.length - 1];
    ((!Se || Se.type !== 'text') &&
      ((Se = bi()),
      (Se.position = { start: Dn(M.start), end: void 0 }),
      pe.push(Se)),
      this.stack.push(Se));
  }
  function ve(M) {
    const W = this.stack.pop();
    ((W.value += this.sliceSerialize(M)), (W.position.end = Dn(M.end)));
  }
  function re(M) {
    const W = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const pe = W.children[W.children.length - 1];
      ((pe.position.end = Dn(M.end)), (this.data.atHardBreak = void 0));
      return;
    }
    !this.data.setextHeadingSlurpLineEnding &&
      i.canContainEols.includes(W.type) &&
      (ge.call(this, M), ve.call(this, M));
  }
  function Z() {
    this.data.atHardBreak = !0;
  }
  function G() {
    const M = this.resume(),
      W = this.stack[this.stack.length - 1];
    W.value = M;
  }
  function X() {
    const M = this.resume(),
      W = this.stack[this.stack.length - 1];
    W.value = M;
  }
  function ue() {
    const M = this.resume(),
      W = this.stack[this.stack.length - 1];
    W.value = M;
  }
  function Ce() {
    const M = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const W = this.data.referenceType || 'shortcut';
      ((M.type += 'Reference'),
        (M.referenceType = W),
        delete M.url,
        delete M.title);
    } else (delete M.identifier, delete M.label);
    this.data.referenceType = void 0;
  }
  function xe() {
    const M = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const W = this.data.referenceType || 'shortcut';
      ((M.type += 'Reference'),
        (M.referenceType = W),
        delete M.url,
        delete M.title);
    } else (delete M.identifier, delete M.label);
    this.data.referenceType = void 0;
  }
  function $(M) {
    const W = this.sliceSerialize(M),
      pe = this.stack[this.stack.length - 2];
    ((pe.label = wx(W)), (pe.identifier = Or(W).toLowerCase()));
  }
  function oe() {
    const M = this.stack[this.stack.length - 1],
      W = this.resume(),
      pe = this.stack[this.stack.length - 1];
    if (((this.data.inReference = !0), pe.type === 'link')) {
      const Se = M.children;
      pe.children = Se;
    } else pe.alt = W;
  }
  function w() {
    const M = this.resume(),
      W = this.stack[this.stack.length - 1];
    W.url = M;
  }
  function P() {
    const M = this.resume(),
      W = this.stack[this.stack.length - 1];
    W.title = M;
  }
  function F() {
    this.data.inReference = void 0;
  }
  function E() {
    this.data.referenceType = 'collapsed';
  }
  function de(M) {
    const W = this.resume(),
      pe = this.stack[this.stack.length - 1];
    ((pe.label = W),
      (pe.identifier = Or(this.sliceSerialize(M)).toLowerCase()),
      (this.data.referenceType = 'full'));
  }
  function we(M) {
    this.data.characterReferenceType = M.type;
  }
  function fe(M) {
    const W = this.sliceSerialize(M),
      pe = this.data.characterReferenceType;
    let Se;
    pe
      ? ((Se = nh(W, pe === 'characterReferenceMarkerNumeric' ? 10 : 16)),
        (this.data.characterReferenceType = void 0))
      : (Se = ss(W));
    const _e = this.stack[this.stack.length - 1];
    _e.value += Se;
  }
  function Te(M) {
    const W = this.stack.pop();
    W.position.end = Dn(M.end);
  }
  function ke(M) {
    ve.call(this, M);
    const W = this.stack[this.stack.length - 1];
    W.url = this.sliceSerialize(M);
  }
  function Ie(M) {
    ve.call(this, M);
    const W = this.stack[this.stack.length - 1];
    W.url = 'mailto:' + this.sliceSerialize(M);
  }
  function He() {
    return { type: 'blockquote', children: [] };
  }
  function Zt() {
    return { type: 'code', lang: null, meta: null, value: '' };
  }
  function ji() {
    return { type: 'inlineCode', value: '' };
  }
  function tr() {
    return {
      type: 'definition',
      identifier: '',
      label: null,
      title: null,
      url: '',
    };
  }
  function Fr() {
    return { type: 'emphasis', children: [] };
  }
  function jr() {
    return { type: 'heading', depth: 0, children: [] };
  }
  function Br() {
    return { type: 'break' };
  }
  function nr() {
    return { type: 'html', value: '' };
  }
  function Bi() {
    return { type: 'image', title: null, url: '', alt: null };
  }
  function rr() {
    return { type: 'link', title: null, url: '', children: [] };
  }
  function dn(M) {
    return {
      type: 'list',
      ordered: M.type === 'listOrdered',
      start: null,
      spread: M._spread,
      children: [],
    };
  }
  function pn(M) {
    return { type: 'listItem', spread: M._spread, checked: null, children: [] };
  }
  function Ur() {
    return { type: 'paragraph', children: [] };
  }
  function Ui() {
    return { type: 'strong', children: [] };
  }
  function bi() {
    return { type: 'text', value: '' };
  }
  function Vi() {
    return { type: 'thematicBreak' };
  }
}
function Dn(n) {
  return { line: n.line, column: n.column, offset: n.offset };
}
function ph(n, i) {
  let l = -1;
  for (; ++l < i.length; ) {
    const o = i[l];
    Array.isArray(o) ? ph(n, o) : Cx(n, o);
  }
}
function Cx(n, i) {
  let l;
  for (l in i)
    if (dh.call(i, l))
      switch (l) {
        case 'canContainEols': {
          const o = i[l];
          o && n[l].push(...o);
          break;
        }
        case 'transforms': {
          const o = i[l];
          o && n[l].push(...o);
          break;
        }
        case 'enter':
        case 'exit': {
          const o = i[l];
          o && Object.assign(n[l], o);
          break;
        }
      }
}
function Jd(n, i) {
  throw n
    ? new Error(
        'Cannot close `' +
          n.type +
          '` (' +
          Ii({ start: n.start, end: n.end }) +
          '): a different token (`' +
          i.type +
          '`, ' +
          Ii({ start: i.start, end: i.end }) +
          ') is open',
      )
    : new Error(
        'Cannot close document, a token (`' +
          i.type +
          '`, ' +
          Ii({ start: i.start, end: i.end }) +
          ') is still open',
      );
}
function _x(n) {
  const i = this;
  i.parser = l;
  function l(o) {
    return Sx(o, {
      ...i.data('settings'),
      ...n,
      extensions: i.data('micromarkExtensions') || [],
      mdastExtensions: i.data('fromMarkdownExtensions') || [],
    });
  }
}
function Px(n, i) {
  const l = {
    type: 'element',
    tagName: 'blockquote',
    properties: {},
    children: n.wrap(n.all(i), !0),
  };
  return (n.patch(i, l), n.applyData(i, l));
}
function Tx(n, i) {
  const l = { type: 'element', tagName: 'br', properties: {}, children: [] };
  return (
    n.patch(i, l),
    [
      n.applyData(i, l),
      {
        type: 'text',
        value: `
`,
      },
    ]
  );
}
function Nx(n, i) {
  const l = i.value
      ? i.value +
        `
`
      : '',
    o = {};
  i.lang && (o.className = ['language-' + i.lang]);
  let a = {
    type: 'element',
    tagName: 'code',
    properties: o,
    children: [{ type: 'text', value: l }],
  };
  return (
    i.meta && (a.data = { meta: i.meta }),
    n.patch(i, a),
    (a = n.applyData(i, a)),
    (a = { type: 'element', tagName: 'pre', properties: {}, children: [a] }),
    n.patch(i, a),
    a
  );
}
function Ix(n, i) {
  const l = {
    type: 'element',
    tagName: 'del',
    properties: {},
    children: n.all(i),
  };
  return (n.patch(i, l), n.applyData(i, l));
}
function zx(n, i) {
  const l = {
    type: 'element',
    tagName: 'em',
    properties: {},
    children: n.all(i),
  };
  return (n.patch(i, l), n.applyData(i, l));
}
function Rx(n, i) {
  const l =
      typeof n.options.clobberPrefix == 'string'
        ? n.options.clobberPrefix
        : 'user-content-',
    o = String(i.identifier).toUpperCase(),
    a = Ar(o.toLowerCase()),
    c = n.footnoteOrder.indexOf(o);
  let f,
    p = n.footnoteCounts.get(o);
  (p === void 0
    ? ((p = 0), n.footnoteOrder.push(o), (f = n.footnoteOrder.length))
    : (f = c + 1),
    (p += 1),
    n.footnoteCounts.set(o, p));
  const h = {
    type: 'element',
    tagName: 'a',
    properties: {
      href: '#' + l + 'fn-' + a,
      id: l + 'fnref-' + a + (p > 1 ? '-' + p : ''),
      dataFootnoteRef: !0,
      ariaDescribedBy: ['footnote-label'],
    },
    children: [{ type: 'text', value: String(f) }],
  };
  n.patch(i, h);
  const m = { type: 'element', tagName: 'sup', properties: {}, children: [h] };
  return (n.patch(i, m), n.applyData(i, m));
}
function Lx(n, i) {
  const l = {
    type: 'element',
    tagName: 'h' + i.depth,
    properties: {},
    children: n.all(i),
  };
  return (n.patch(i, l), n.applyData(i, l));
}
function Ox(n, i) {
  if (n.options.allowDangerousHtml) {
    const l = { type: 'raw', value: i.value };
    return (n.patch(i, l), n.applyData(i, l));
  }
}
function hh(n, i) {
  const l = i.referenceType;
  let o = ']';
  if (
    (l === 'collapsed'
      ? (o += '[]')
      : l === 'full' && (o += '[' + (i.label || i.identifier) + ']'),
    i.type === 'imageReference')
  )
    return [{ type: 'text', value: '![' + i.alt + o }];
  const a = n.all(i),
    c = a[0];
  c && c.type === 'text'
    ? (c.value = '[' + c.value)
    : a.unshift({ type: 'text', value: '[' });
  const f = a[a.length - 1];
  return (
    f && f.type === 'text'
      ? (f.value += o)
      : a.push({ type: 'text', value: o }),
    a
  );
}
function Dx(n, i) {
  const l = String(i.identifier).toUpperCase(),
    o = n.definitionById.get(l);
  if (!o) return hh(n, i);
  const a = { src: Ar(o.url || ''), alt: i.alt };
  o.title !== null && o.title !== void 0 && (a.title = o.title);
  const c = { type: 'element', tagName: 'img', properties: a, children: [] };
  return (n.patch(i, c), n.applyData(i, c));
}
function Mx(n, i) {
  const l = { src: Ar(i.url) };
  (i.alt !== null && i.alt !== void 0 && (l.alt = i.alt),
    i.title !== null && i.title !== void 0 && (l.title = i.title));
  const o = { type: 'element', tagName: 'img', properties: l, children: [] };
  return (n.patch(i, o), n.applyData(i, o));
}
function Ax(n, i) {
  const l = { type: 'text', value: i.value.replace(/\r?\n|\r/g, ' ') };
  n.patch(i, l);
  const o = { type: 'element', tagName: 'code', properties: {}, children: [l] };
  return (n.patch(i, o), n.applyData(i, o));
}
function Fx(n, i) {
  const l = String(i.identifier).toUpperCase(),
    o = n.definitionById.get(l);
  if (!o) return hh(n, i);
  const a = { href: Ar(o.url || '') };
  o.title !== null && o.title !== void 0 && (a.title = o.title);
  const c = {
    type: 'element',
    tagName: 'a',
    properties: a,
    children: n.all(i),
  };
  return (n.patch(i, c), n.applyData(i, c));
}
function jx(n, i) {
  const l = { href: Ar(i.url) };
  i.title !== null && i.title !== void 0 && (l.title = i.title);
  const o = {
    type: 'element',
    tagName: 'a',
    properties: l,
    children: n.all(i),
  };
  return (n.patch(i, o), n.applyData(i, o));
}
function Bx(n, i, l) {
  const o = n.all(i),
    a = l ? Ux(l) : mh(i),
    c = {},
    f = [];
  if (typeof i.checked == 'boolean') {
    const g = o[0];
    let v;
    (g && g.type === 'element' && g.tagName === 'p'
      ? (v = g)
      : ((v = { type: 'element', tagName: 'p', properties: {}, children: [] }),
        o.unshift(v)),
      v.children.length > 0 && v.children.unshift({ type: 'text', value: ' ' }),
      v.children.unshift({
        type: 'element',
        tagName: 'input',
        properties: { type: 'checkbox', checked: i.checked, disabled: !0 },
        children: [],
      }),
      (c.className = ['task-list-item']));
  }
  let p = -1;
  for (; ++p < o.length; ) {
    const g = o[p];
    ((a || p !== 0 || g.type !== 'element' || g.tagName !== 'p') &&
      f.push({
        type: 'text',
        value: `
`,
      }),
      g.type === 'element' && g.tagName === 'p' && !a
        ? f.push(...g.children)
        : f.push(g));
  }
  const h = o[o.length - 1];
  h &&
    (a || h.type !== 'element' || h.tagName !== 'p') &&
    f.push({
      type: 'text',
      value: `
`,
    });
  const m = { type: 'element', tagName: 'li', properties: c, children: f };
  return (n.patch(i, m), n.applyData(i, m));
}
function Ux(n) {
  let i = !1;
  if (n.type === 'list') {
    i = n.spread || !1;
    const l = n.children;
    let o = -1;
    for (; !i && ++o < l.length; ) i = mh(l[o]);
  }
  return i;
}
function mh(n) {
  const i = n.spread;
  return i ?? n.children.length > 1;
}
function bx(n, i) {
  const l = {},
    o = n.all(i);
  let a = -1;
  for (
    typeof i.start == 'number' && i.start !== 1 && (l.start = i.start);
    ++a < o.length;

  ) {
    const f = o[a];
    if (
      f.type === 'element' &&
      f.tagName === 'li' &&
      f.properties &&
      Array.isArray(f.properties.className) &&
      f.properties.className.includes('task-list-item')
    ) {
      l.className = ['contains-task-list'];
      break;
    }
  }
  const c = {
    type: 'element',
    tagName: i.ordered ? 'ol' : 'ul',
    properties: l,
    children: n.wrap(o, !0),
  };
  return (n.patch(i, c), n.applyData(i, c));
}
function Vx(n, i) {
  const l = {
    type: 'element',
    tagName: 'p',
    properties: {},
    children: n.all(i),
  };
  return (n.patch(i, l), n.applyData(i, l));
}
function Hx(n, i) {
  const l = { type: 'root', children: n.wrap(n.all(i)) };
  return (n.patch(i, l), n.applyData(i, l));
}
function $x(n, i) {
  const l = {
    type: 'element',
    tagName: 'strong',
    properties: {},
    children: n.all(i),
  };
  return (n.patch(i, l), n.applyData(i, l));
}
function Wx(n, i) {
  const l = n.all(i),
    o = l.shift(),
    a = [];
  if (o) {
    const f = {
      type: 'element',
      tagName: 'thead',
      properties: {},
      children: n.wrap([o], !0),
    };
    (n.patch(i.children[0], f), a.push(f));
  }
  if (l.length > 0) {
    const f = {
        type: 'element',
        tagName: 'tbody',
        properties: {},
        children: n.wrap(l, !0),
      },
      p = ls(i.children[1]),
      h = Xp(i.children[i.children.length - 1]);
    (p && h && (f.position = { start: p, end: h }), a.push(f));
  }
  const c = {
    type: 'element',
    tagName: 'table',
    properties: {},
    children: n.wrap(a, !0),
  };
  return (n.patch(i, c), n.applyData(i, c));
}
function Qx(n, i, l) {
  const o = l ? l.children : void 0,
    c = (o ? o.indexOf(i) : 1) === 0 ? 'th' : 'td',
    f = l && l.type === 'table' ? l.align : void 0,
    p = f ? f.length : i.children.length;
  let h = -1;
  const m = [];
  for (; ++h < p; ) {
    const v = i.children[h],
      k = {},
      x = f ? f[h] : void 0;
    x && (k.align = x);
    let O = { type: 'element', tagName: c, properties: k, children: [] };
    (v && ((O.children = n.all(v)), n.patch(v, O), (O = n.applyData(v, O))),
      m.push(O));
  }
  const g = {
    type: 'element',
    tagName: 'tr',
    properties: {},
    children: n.wrap(m, !0),
  };
  return (n.patch(i, g), n.applyData(i, g));
}
function qx(n, i) {
  const l = {
    type: 'element',
    tagName: 'td',
    properties: {},
    children: n.all(i),
  };
  return (n.patch(i, l), n.applyData(i, l));
}
const Zd = 9,
  ep = 32;
function Kx(n) {
  const i = String(n),
    l = /\r?\n|\r/g;
  let o = l.exec(i),
    a = 0;
  const c = [];
  for (; o; )
    (c.push(tp(i.slice(a, o.index), a > 0, !0), o[0]),
      (a = o.index + o[0].length),
      (o = l.exec(i)));
  return (c.push(tp(i.slice(a), a > 0, !1)), c.join(''));
}
function tp(n, i, l) {
  let o = 0,
    a = n.length;
  if (i) {
    let c = n.codePointAt(o);
    for (; c === Zd || c === ep; ) (o++, (c = n.codePointAt(o)));
  }
  if (l) {
    let c = n.codePointAt(a - 1);
    for (; c === Zd || c === ep; ) (a--, (c = n.codePointAt(a - 1)));
  }
  return a > o ? n.slice(o, a) : '';
}
function Xx(n, i) {
  const l = { type: 'text', value: Kx(String(i.value)) };
  return (n.patch(i, l), n.applyData(i, l));
}
function Yx(n, i) {
  const l = { type: 'element', tagName: 'hr', properties: {}, children: [] };
  return (n.patch(i, l), n.applyData(i, l));
}
const Gx = {
  blockquote: Px,
  break: Tx,
  code: Nx,
  delete: Ix,
  emphasis: zx,
  footnoteReference: Rx,
  heading: Lx,
  html: Ox,
  imageReference: Dx,
  image: Mx,
  inlineCode: Ax,
  linkReference: Fx,
  link: jx,
  listItem: Bx,
  list: bx,
  paragraph: Vx,
  root: Hx,
  strong: $x,
  table: Wx,
  tableCell: qx,
  tableRow: Qx,
  text: Xx,
  thematicBreak: Yx,
  toml: Zl,
  yaml: Zl,
  definition: Zl,
  footnoteDefinition: Zl,
};
function Zl() {}
const gh = -1,
  Co = 0,
  Ri = 1,
  fo = 2,
  ds = 3,
  ps = 4,
  hs = 5,
  ms = 6,
  yh = 7,
  vh = 8,
  np = typeof self == 'object' ? self : globalThis,
  Jx = (n, i) => {
    const l = (a, c) => (n.set(c, a), a),
      o = (a) => {
        if (n.has(a)) return n.get(a);
        const [c, f] = i[a];
        switch (c) {
          case Co:
          case gh:
            return l(f, a);
          case Ri: {
            const p = l([], a);
            for (const h of f) p.push(o(h));
            return p;
          }
          case fo: {
            const p = l({}, a);
            for (const [h, m] of f) p[o(h)] = o(m);
            return p;
          }
          case ds:
            return l(new Date(f), a);
          case ps: {
            const { source: p, flags: h } = f;
            return l(new RegExp(p, h), a);
          }
          case hs: {
            const p = l(new Map(), a);
            for (const [h, m] of f) p.set(o(h), o(m));
            return p;
          }
          case ms: {
            const p = l(new Set(), a);
            for (const h of f) p.add(o(h));
            return p;
          }
          case yh: {
            const { name: p, message: h } = f;
            return l(new np[p](h), a);
          }
          case vh:
            return l(BigInt(f), a);
          case 'BigInt':
            return l(Object(BigInt(f)), a);
          case 'ArrayBuffer':
            return l(new Uint8Array(f).buffer, f);
          case 'DataView': {
            const { buffer: p } = new Uint8Array(f);
            return l(new DataView(p), f);
          }
        }
        return l(new np[c](f), a);
      };
    return o;
  },
  rp = (n) => Jx(new Map(), n)(0),
  Ir = '',
  { toString: Zx } = {},
  { keys: ew } = Object,
  Ti = (n) => {
    const i = typeof n;
    if (i !== 'object' || !n) return [Co, i];
    const l = Zx.call(n).slice(8, -1);
    switch (l) {
      case 'Array':
        return [Ri, Ir];
      case 'Object':
        return [fo, Ir];
      case 'Date':
        return [ds, Ir];
      case 'RegExp':
        return [ps, Ir];
      case 'Map':
        return [hs, Ir];
      case 'Set':
        return [ms, Ir];
      case 'DataView':
        return [Ri, l];
    }
    return l.includes('Array')
      ? [Ri, l]
      : l.includes('Error')
        ? [yh, l]
        : [fo, l];
  },
  eo = ([n, i]) => n === Co && (i === 'function' || i === 'symbol'),
  tw = (n, i, l, o) => {
    const a = (f, p) => {
        const h = o.push(f) - 1;
        return (l.set(p, h), h);
      },
      c = (f) => {
        if (l.has(f)) return l.get(f);
        let [p, h] = Ti(f);
        switch (p) {
          case Co: {
            let g = f;
            switch (h) {
              case 'bigint':
                ((p = vh), (g = f.toString()));
                break;
              case 'function':
              case 'symbol':
                if (n) throw new TypeError('unable to serialize ' + h);
                g = null;
                break;
              case 'undefined':
                return a([gh], f);
            }
            return a([p, g], f);
          }
          case Ri: {
            if (h) {
              let k = f;
              return (
                h === 'DataView'
                  ? (k = new Uint8Array(f.buffer))
                  : h === 'ArrayBuffer' && (k = new Uint8Array(f)),
                a([h, [...k]], f)
              );
            }
            const g = [],
              v = a([p, g], f);
            for (const k of f) g.push(c(k));
            return v;
          }
          case fo: {
            if (h)
              switch (h) {
                case 'BigInt':
                  return a([h, f.toString()], f);
                case 'Boolean':
                case 'Number':
                case 'String':
                  return a([h, f.valueOf()], f);
              }
            if (i && 'toJSON' in f) return c(f.toJSON());
            const g = [],
              v = a([p, g], f);
            for (const k of ew(f))
              (n || !eo(Ti(f[k]))) && g.push([c(k), c(f[k])]);
            return v;
          }
          case ds:
            return a([p, f.toISOString()], f);
          case ps: {
            const { source: g, flags: v } = f;
            return a([p, { source: g, flags: v }], f);
          }
          case hs: {
            const g = [],
              v = a([p, g], f);
            for (const [k, x] of f)
              (n || !(eo(Ti(k)) || eo(Ti(x)))) && g.push([c(k), c(x)]);
            return v;
          }
          case ms: {
            const g = [],
              v = a([p, g], f);
            for (const k of f) (n || !eo(Ti(k))) && g.push(c(k));
            return v;
          }
        }
        const { message: m } = f;
        return a([p, { name: h, message: m }], f);
      };
    return c;
  },
  ip = (n, { json: i, lossy: l } = {}) => {
    const o = [];
    return (tw(!(i || l), !!i, new Map(), o)(n), o);
  },
  po =
    typeof structuredClone == 'function'
      ? (n, i) =>
          i && ('json' in i || 'lossy' in i) ? rp(ip(n, i)) : structuredClone(n)
      : (n, i) => rp(ip(n, i));
function nw(n, i) {
  const l = [{ type: 'text', value: '↩' }];
  return (
    i > 1 &&
      l.push({
        type: 'element',
        tagName: 'sup',
        properties: {},
        children: [{ type: 'text', value: String(i) }],
      }),
    l
  );
}
function rw(n, i) {
  return 'Back to reference ' + (n + 1) + (i > 1 ? '-' + i : '');
}
function iw(n) {
  const i =
      typeof n.options.clobberPrefix == 'string'
        ? n.options.clobberPrefix
        : 'user-content-',
    l = n.options.footnoteBackContent || nw,
    o = n.options.footnoteBackLabel || rw,
    a = n.options.footnoteLabel || 'Footnotes',
    c = n.options.footnoteLabelTagName || 'h2',
    f = n.options.footnoteLabelProperties || { className: ['sr-only'] },
    p = [];
  let h = -1;
  for (; ++h < n.footnoteOrder.length; ) {
    const m = n.footnoteById.get(n.footnoteOrder[h]);
    if (!m) continue;
    const g = n.all(m),
      v = String(m.identifier).toUpperCase(),
      k = Ar(v.toLowerCase());
    let x = 0;
    const O = [],
      z = n.footnoteCounts.get(v);
    for (; z !== void 0 && ++x <= z; ) {
      O.length > 0 && O.push({ type: 'text', value: ' ' });
      let V = typeof l == 'string' ? l : l(h, x);
      (typeof V == 'string' && (V = { type: 'text', value: V }),
        O.push({
          type: 'element',
          tagName: 'a',
          properties: {
            href: '#' + i + 'fnref-' + k + (x > 1 ? '-' + x : ''),
            dataFootnoteBackref: '',
            ariaLabel: typeof o == 'string' ? o : o(h, x),
            className: ['data-footnote-backref'],
          },
          children: Array.isArray(V) ? V : [V],
        }));
    }
    const R = g[g.length - 1];
    if (R && R.type === 'element' && R.tagName === 'p') {
      const V = R.children[R.children.length - 1];
      (V && V.type === 'text'
        ? (V.value += ' ')
        : R.children.push({ type: 'text', value: ' ' }),
        R.children.push(...O));
    } else g.push(...O);
    const L = {
      type: 'element',
      tagName: 'li',
      properties: { id: i + 'fn-' + k },
      children: n.wrap(g, !0),
    };
    (n.patch(m, L), p.push(L));
  }
  if (p.length !== 0)
    return {
      type: 'element',
      tagName: 'section',
      properties: { dataFootnotes: !0, className: ['footnotes'] },
      children: [
        {
          type: 'element',
          tagName: c,
          properties: { ...po(f), id: 'footnote-label' },
          children: [{ type: 'text', value: a }],
        },
        {
          type: 'text',
          value: `
`,
        },
        {
          type: 'element',
          tagName: 'ol',
          properties: {},
          children: n.wrap(p, !0),
        },
        {
          type: 'text',
          value: `
`,
        },
      ],
    };
}
const xh = function (n) {
  if (n == null) return aw;
  if (typeof n == 'function') return _o(n);
  if (typeof n == 'object') return Array.isArray(n) ? lw(n) : ow(n);
  if (typeof n == 'string') return uw(n);
  throw new Error('Expected function, string, or object as test');
};
function lw(n) {
  const i = [];
  let l = -1;
  for (; ++l < n.length; ) i[l] = xh(n[l]);
  return _o(o);
  function o(...a) {
    let c = -1;
    for (; ++c < i.length; ) if (i[c].apply(this, a)) return !0;
    return !1;
  }
}
function ow(n) {
  const i = n;
  return _o(l);
  function l(o) {
    const a = o;
    let c;
    for (c in n) if (a[c] !== i[c]) return !1;
    return !0;
  }
}
function uw(n) {
  return _o(i);
  function i(l) {
    return l && l.type === n;
  }
}
function _o(n) {
  return i;
  function i(l, o, a) {
    return !!(
      sw(l) && n.call(this, l, typeof o == 'number' ? o : void 0, a || void 0)
    );
  }
}
function aw() {
  return !0;
}
function sw(n) {
  return n !== null && typeof n == 'object' && 'type' in n;
}
const wh = [],
  cw = !0,
  lp = !1,
  fw = 'skip';
function dw(n, i, l, o) {
  let a;
  typeof i == 'function' && typeof l != 'function'
    ? ((o = l), (l = i))
    : (a = i);
  const c = xh(a),
    f = o ? -1 : 1;
  p(n, void 0, [])();
  function p(h, m, g) {
    const v = h && typeof h == 'object' ? h : {};
    if (typeof v.type == 'string') {
      const x =
        typeof v.tagName == 'string'
          ? v.tagName
          : typeof v.name == 'string'
            ? v.name
            : void 0;
      Object.defineProperty(k, 'name', {
        value: 'node (' + (h.type + (x ? '<' + x + '>' : '')) + ')',
      });
    }
    return k;
    function k() {
      let x = wh,
        O,
        z,
        R;
      if (
        (!i || c(h, m, g[g.length - 1] || void 0)) &&
        ((x = pw(l(h, g))), x[0] === lp)
      )
        return x;
      if ('children' in h && h.children) {
        const L = h;
        if (L.children && x[0] !== fw)
          for (
            z = (o ? L.children.length : -1) + f, R = g.concat(L);
            z > -1 && z < L.children.length;

          ) {
            const V = L.children[z];
            if (((O = p(V, z, R)()), O[0] === lp)) return O;
            z = typeof O[1] == 'number' ? O[1] : z + f;
          }
      }
      return x;
    }
  }
}
function pw(n) {
  return Array.isArray(n)
    ? n
    : typeof n == 'number'
      ? [cw, n]
      : n == null
        ? wh
        : [n];
}
function kh(n, i, l, o) {
  let a, c, f;
  (typeof i == 'function' && typeof l != 'function'
    ? ((c = void 0), (f = i), (a = l))
    : ((c = i), (f = l), (a = o)),
    dw(n, c, p, a));
  function p(h, m) {
    const g = m[m.length - 1],
      v = g ? g.children.indexOf(h) : void 0;
    return f(h, v, g);
  }
}
const Xa = {}.hasOwnProperty,
  hw = {};
function mw(n, i) {
  const l = i || hw,
    o = new Map(),
    a = new Map(),
    c = new Map(),
    f = { ...Gx, ...l.handlers },
    p = {
      all: m,
      applyData: yw,
      definitionById: o,
      footnoteById: a,
      footnoteCounts: c,
      footnoteOrder: [],
      handlers: f,
      one: h,
      options: l,
      patch: gw,
      wrap: xw,
    };
  return (
    kh(n, function (g) {
      if (g.type === 'definition' || g.type === 'footnoteDefinition') {
        const v = g.type === 'definition' ? o : a,
          k = String(g.identifier).toUpperCase();
        v.has(k) || v.set(k, g);
      }
    }),
    p
  );
  function h(g, v) {
    const k = g.type,
      x = p.handlers[k];
    if (Xa.call(p.handlers, k) && x) return x(p, g, v);
    if (p.options.passThrough && p.options.passThrough.includes(k)) {
      if ('children' in g) {
        const { children: z, ...R } = g,
          L = po(R);
        return ((L.children = p.all(g)), L);
      }
      return po(g);
    }
    return (p.options.unknownHandler || vw)(p, g, v);
  }
  function m(g) {
    const v = [];
    if ('children' in g) {
      const k = g.children;
      let x = -1;
      for (; ++x < k.length; ) {
        const O = p.one(k[x], g);
        if (O) {
          if (
            x &&
            k[x - 1].type === 'break' &&
            (!Array.isArray(O) && O.type === 'text' && (O.value = op(O.value)),
            !Array.isArray(O) && O.type === 'element')
          ) {
            const z = O.children[0];
            z && z.type === 'text' && (z.value = op(z.value));
          }
          Array.isArray(O) ? v.push(...O) : v.push(O);
        }
      }
    }
    return v;
  }
}
function gw(n, i) {
  n.position && (i.position = Zv(n));
}
function yw(n, i) {
  let l = i;
  if (n && n.data) {
    const o = n.data.hName,
      a = n.data.hChildren,
      c = n.data.hProperties;
    if (typeof o == 'string')
      if (l.type === 'element') l.tagName = o;
      else {
        const f = 'children' in l ? l.children : [l];
        l = { type: 'element', tagName: o, properties: {}, children: f };
      }
    (l.type === 'element' && c && Object.assign(l.properties, po(c)),
      'children' in l &&
        l.children &&
        a !== null &&
        a !== void 0 &&
        (l.children = a));
  }
  return l;
}
function vw(n, i) {
  const l = i.data || {},
    o =
      'value' in i && !(Xa.call(l, 'hProperties') || Xa.call(l, 'hChildren'))
        ? { type: 'text', value: i.value }
        : {
            type: 'element',
            tagName: 'div',
            properties: {},
            children: n.all(i),
          };
  return (n.patch(i, o), n.applyData(i, o));
}
function xw(n, i) {
  const l = [];
  let o = -1;
  for (
    i &&
    l.push({
      type: 'text',
      value: `
`,
    });
    ++o < n.length;

  )
    (o &&
      l.push({
        type: 'text',
        value: `
`,
      }),
      l.push(n[o]));
  return (
    i &&
      n.length > 0 &&
      l.push({
        type: 'text',
        value: `
`,
      }),
    l
  );
}
function op(n) {
  let i = 0,
    l = n.charCodeAt(i);
  for (; l === 9 || l === 32; ) (i++, (l = n.charCodeAt(i)));
  return n.slice(i);
}
function up(n, i) {
  const l = mw(n, i),
    o = l.one(n, void 0),
    a = iw(l),
    c = Array.isArray(o)
      ? { type: 'root', children: o }
      : o || { type: 'root', children: [] };
  return (
    a &&
      c.children.push(
        {
          type: 'text',
          value: `
`,
        },
        a,
      ),
    c
  );
}
function ww(n, i) {
  return n && 'run' in n
    ? async function (l, o) {
        const a = up(l, { file: o, ...i });
        await n.run(a, o);
      }
    : function (l, o) {
        return up(l, { file: o, ...(n || i) });
      };
}
function ap(n) {
  if (n) throw n;
}
var Pa, sp;
function kw() {
  if (sp) return Pa;
  sp = 1;
  var n = Object.prototype.hasOwnProperty,
    i = Object.prototype.toString,
    l = Object.defineProperty,
    o = Object.getOwnPropertyDescriptor,
    a = function (m) {
      return typeof Array.isArray == 'function'
        ? Array.isArray(m)
        : i.call(m) === '[object Array]';
    },
    c = function (m) {
      if (!m || i.call(m) !== '[object Object]') return !1;
      var g = n.call(m, 'constructor'),
        v =
          m.constructor &&
          m.constructor.prototype &&
          n.call(m.constructor.prototype, 'isPrototypeOf');
      if (m.constructor && !g && !v) return !1;
      var k;
      for (k in m);
      return typeof k > 'u' || n.call(m, k);
    },
    f = function (m, g) {
      l && g.name === '__proto__'
        ? l(m, g.name, {
            enumerable: !0,
            configurable: !0,
            value: g.newValue,
            writable: !0,
          })
        : (m[g.name] = g.newValue);
    },
    p = function (m, g) {
      if (g === '__proto__')
        if (n.call(m, g)) {
          if (o) return o(m, g).value;
        } else return;
      return m[g];
    };
  return (
    (Pa = function h() {
      var m,
        g,
        v,
        k,
        x,
        O,
        z = arguments[0],
        R = 1,
        L = arguments.length,
        V = !1;
      for (
        typeof z == 'boolean' && ((V = z), (z = arguments[1] || {}), (R = 2)),
          (z == null || (typeof z != 'object' && typeof z != 'function')) &&
            (z = {});
        R < L;
        ++R
      )
        if (((m = arguments[R]), m != null))
          for (g in m)
            ((v = p(z, g)),
              (k = p(m, g)),
              z !== k &&
                (V && k && (c(k) || (x = a(k)))
                  ? (x
                      ? ((x = !1), (O = v && a(v) ? v : []))
                      : (O = v && c(v) ? v : {}),
                    f(z, { name: g, newValue: h(V, O, k) }))
                  : typeof k < 'u' && f(z, { name: g, newValue: k })));
      return z;
    }),
    Pa
  );
}
var Sw = kw();
const Ta = ho(Sw);
function Ya(n) {
  if (typeof n != 'object' || n === null) return !1;
  const i = Object.getPrototypeOf(n);
  return (
    (i === null ||
      i === Object.prototype ||
      Object.getPrototypeOf(i) === null) &&
    !(Symbol.toStringTag in n) &&
    !(Symbol.iterator in n)
  );
}
function Ew() {
  const n = [],
    i = { run: l, use: o };
  return i;
  function l(...a) {
    let c = -1;
    const f = a.pop();
    if (typeof f != 'function')
      throw new TypeError('Expected function as last argument, not ' + f);
    p(null, ...a);
    function p(h, ...m) {
      const g = n[++c];
      let v = -1;
      if (h) {
        f(h);
        return;
      }
      for (; ++v < a.length; )
        (m[v] === null || m[v] === void 0) && (m[v] = a[v]);
      ((a = m), g ? Cw(g, p)(...m) : f(null, ...m));
    }
  }
  function o(a) {
    if (typeof a != 'function')
      throw new TypeError('Expected `middelware` to be a function, not ' + a);
    return (n.push(a), i);
  }
}
function Cw(n, i) {
  let l;
  return o;
  function o(...f) {
    const p = n.length > f.length;
    let h;
    p && f.push(a);
    try {
      h = n.apply(this, f);
    } catch (m) {
      const g = m;
      if (p && l) throw g;
      return a(g);
    }
    p ||
      (h && h.then && typeof h.then == 'function'
        ? h.then(c, a)
        : h instanceof Error
          ? a(h)
          : c(h));
  }
  function a(f, ...p) {
    l || ((l = !0), i(f, ...p));
  }
  function c(f) {
    a(null, f);
  }
}
const Yt = { basename: _w, dirname: Pw, extname: Tw, join: Nw, sep: '/' };
function _w(n, i) {
  if (i !== void 0 && typeof i != 'string')
    throw new TypeError('"ext" argument must be a string');
  Fi(n);
  let l = 0,
    o = -1,
    a = n.length,
    c;
  if (i === void 0 || i.length === 0 || i.length > n.length) {
    for (; a--; )
      if (n.codePointAt(a) === 47) {
        if (c) {
          l = a + 1;
          break;
        }
      } else o < 0 && ((c = !0), (o = a + 1));
    return o < 0 ? '' : n.slice(l, o);
  }
  if (i === n) return '';
  let f = -1,
    p = i.length - 1;
  for (; a--; )
    if (n.codePointAt(a) === 47) {
      if (c) {
        l = a + 1;
        break;
      }
    } else
      (f < 0 && ((c = !0), (f = a + 1)),
        p > -1 &&
          (n.codePointAt(a) === i.codePointAt(p--)
            ? p < 0 && (o = a)
            : ((p = -1), (o = f))));
  return (l === o ? (o = f) : o < 0 && (o = n.length), n.slice(l, o));
}
function Pw(n) {
  if ((Fi(n), n.length === 0)) return '.';
  let i = -1,
    l = n.length,
    o;
  for (; --l; )
    if (n.codePointAt(l) === 47) {
      if (o) {
        i = l;
        break;
      }
    } else o || (o = !0);
  return i < 0
    ? n.codePointAt(0) === 47
      ? '/'
      : '.'
    : i === 1 && n.codePointAt(0) === 47
      ? '//'
      : n.slice(0, i);
}
function Tw(n) {
  Fi(n);
  let i = n.length,
    l = -1,
    o = 0,
    a = -1,
    c = 0,
    f;
  for (; i--; ) {
    const p = n.codePointAt(i);
    if (p === 47) {
      if (f) {
        o = i + 1;
        break;
      }
      continue;
    }
    (l < 0 && ((f = !0), (l = i + 1)),
      p === 46 ? (a < 0 ? (a = i) : c !== 1 && (c = 1)) : a > -1 && (c = -1));
  }
  return a < 0 || l < 0 || c === 0 || (c === 1 && a === l - 1 && a === o + 1)
    ? ''
    : n.slice(a, l);
}
function Nw(...n) {
  let i = -1,
    l;
  for (; ++i < n.length; )
    (Fi(n[i]), n[i] && (l = l === void 0 ? n[i] : l + '/' + n[i]));
  return l === void 0 ? '.' : Iw(l);
}
function Iw(n) {
  Fi(n);
  const i = n.codePointAt(0) === 47;
  let l = zw(n, !i);
  return (
    l.length === 0 && !i && (l = '.'),
    l.length > 0 && n.codePointAt(n.length - 1) === 47 && (l += '/'),
    i ? '/' + l : l
  );
}
function zw(n, i) {
  let l = '',
    o = 0,
    a = -1,
    c = 0,
    f = -1,
    p,
    h;
  for (; ++f <= n.length; ) {
    if (f < n.length) p = n.codePointAt(f);
    else {
      if (p === 47) break;
      p = 47;
    }
    if (p === 47) {
      if (!(a === f - 1 || c === 1))
        if (a !== f - 1 && c === 2) {
          if (
            l.length < 2 ||
            o !== 2 ||
            l.codePointAt(l.length - 1) !== 46 ||
            l.codePointAt(l.length - 2) !== 46
          ) {
            if (l.length > 2) {
              if (((h = l.lastIndexOf('/')), h !== l.length - 1)) {
                (h < 0
                  ? ((l = ''), (o = 0))
                  : ((l = l.slice(0, h)),
                    (o = l.length - 1 - l.lastIndexOf('/'))),
                  (a = f),
                  (c = 0));
                continue;
              }
            } else if (l.length > 0) {
              ((l = ''), (o = 0), (a = f), (c = 0));
              continue;
            }
          }
          i && ((l = l.length > 0 ? l + '/..' : '..'), (o = 2));
        } else
          (l.length > 0
            ? (l += '/' + n.slice(a + 1, f))
            : (l = n.slice(a + 1, f)),
            (o = f - a - 1));
      ((a = f), (c = 0));
    } else p === 46 && c > -1 ? c++ : (c = -1);
  }
  return l;
}
function Fi(n) {
  if (typeof n != 'string')
    throw new TypeError('Path must be a string. Received ' + JSON.stringify(n));
}
const Rw = { cwd: Lw };
function Lw() {
  return '/';
}
function Ga(n) {
  return !!(
    n !== null &&
    typeof n == 'object' &&
    'href' in n &&
    n.href &&
    'protocol' in n &&
    n.protocol &&
    n.auth === void 0
  );
}
function Ow(n) {
  if (typeof n == 'string') n = new URL(n);
  else if (!Ga(n)) {
    const i = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' +
        n +
        '`',
    );
    throw ((i.code = 'ERR_INVALID_ARG_TYPE'), i);
  }
  if (n.protocol !== 'file:') {
    const i = new TypeError('The URL must be of scheme file');
    throw ((i.code = 'ERR_INVALID_URL_SCHEME'), i);
  }
  return Dw(n);
}
function Dw(n) {
  if (n.hostname !== '') {
    const o = new TypeError(
      'File URL host must be "localhost" or empty on darwin',
    );
    throw ((o.code = 'ERR_INVALID_FILE_URL_HOST'), o);
  }
  const i = n.pathname;
  let l = -1;
  for (; ++l < i.length; )
    if (i.codePointAt(l) === 37 && i.codePointAt(l + 1) === 50) {
      const o = i.codePointAt(l + 2);
      if (o === 70 || o === 102) {
        const a = new TypeError(
          'File URL path must not include encoded / characters',
        );
        throw ((a.code = 'ERR_INVALID_FILE_URL_PATH'), a);
      }
    }
  return decodeURIComponent(i);
}
const Na = ['history', 'path', 'basename', 'stem', 'extname', 'dirname'];
class Sh {
  constructor(i) {
    let l;
    (i
      ? Ga(i)
        ? (l = { path: i })
        : typeof i == 'string' || Mw(i)
          ? (l = { value: i })
          : (l = i)
      : (l = {}),
      (this.cwd = 'cwd' in l ? '' : Rw.cwd()),
      (this.data = {}),
      (this.history = []),
      (this.messages = []),
      this.value,
      this.map,
      this.result,
      this.stored);
    let o = -1;
    for (; ++o < Na.length; ) {
      const c = Na[o];
      c in l &&
        l[c] !== void 0 &&
        l[c] !== null &&
        (this[c] = c === 'history' ? [...l[c]] : l[c]);
    }
    let a;
    for (a in l) Na.includes(a) || (this[a] = l[a]);
  }
  get basename() {
    return typeof this.path == 'string' ? Yt.basename(this.path) : void 0;
  }
  set basename(i) {
    (za(i, 'basename'),
      Ia(i, 'basename'),
      (this.path = Yt.join(this.dirname || '', i)));
  }
  get dirname() {
    return typeof this.path == 'string' ? Yt.dirname(this.path) : void 0;
  }
  set dirname(i) {
    (cp(this.basename, 'dirname'),
      (this.path = Yt.join(i || '', this.basename)));
  }
  get extname() {
    return typeof this.path == 'string' ? Yt.extname(this.path) : void 0;
  }
  set extname(i) {
    if ((Ia(i, 'extname'), cp(this.dirname, 'extname'), i)) {
      if (i.codePointAt(0) !== 46)
        throw new Error('`extname` must start with `.`');
      if (i.includes('.', 1))
        throw new Error('`extname` cannot contain multiple dots');
    }
    this.path = Yt.join(this.dirname, this.stem + (i || ''));
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(i) {
    (Ga(i) && (i = Ow(i)),
      za(i, 'path'),
      this.path !== i && this.history.push(i));
  }
  get stem() {
    return typeof this.path == 'string'
      ? Yt.basename(this.path, this.extname)
      : void 0;
  }
  set stem(i) {
    (za(i, 'stem'),
      Ia(i, 'stem'),
      (this.path = Yt.join(this.dirname || '', i + (this.extname || ''))));
  }
  fail(i, l, o) {
    const a = this.message(i, l, o);
    throw ((a.fatal = !0), a);
  }
  info(i, l, o) {
    const a = this.message(i, l, o);
    return ((a.fatal = void 0), a);
  }
  message(i, l, o) {
    const a = new ot(i, l, o);
    return (
      this.path && ((a.name = this.path + ':' + a.name), (a.file = this.path)),
      (a.fatal = !1),
      this.messages.push(a),
      a
    );
  }
  toString(i) {
    return this.value === void 0
      ? ''
      : typeof this.value == 'string'
        ? this.value
        : new TextDecoder(i || void 0).decode(this.value);
  }
}
function Ia(n, i) {
  if (n && n.includes(Yt.sep))
    throw new Error(
      '`' + i + '` cannot be a path: did not expect `' + Yt.sep + '`',
    );
}
function za(n, i) {
  if (!n) throw new Error('`' + i + '` cannot be empty');
}
function cp(n, i) {
  if (!n) throw new Error('Setting `' + i + '` requires `path` to be set too');
}
function Mw(n) {
  return !!(
    n &&
    typeof n == 'object' &&
    'byteLength' in n &&
    'byteOffset' in n
  );
}
const Aw = function (n) {
    const o = this.constructor.prototype,
      a = o[n],
      c = function () {
        return a.apply(c, arguments);
      };
    return (Object.setPrototypeOf(c, o), c);
  },
  Fw = {}.hasOwnProperty;
class gs extends Aw {
  constructor() {
    (super('copy'),
      (this.Compiler = void 0),
      (this.Parser = void 0),
      (this.attachers = []),
      (this.compiler = void 0),
      (this.freezeIndex = -1),
      (this.frozen = void 0),
      (this.namespace = {}),
      (this.parser = void 0),
      (this.transformers = Ew()));
  }
  copy() {
    const i = new gs();
    let l = -1;
    for (; ++l < this.attachers.length; ) {
      const o = this.attachers[l];
      i.use(...o);
    }
    return (i.data(Ta(!0, {}, this.namespace)), i);
  }
  data(i, l) {
    return typeof i == 'string'
      ? arguments.length === 2
        ? (Oa('data', this.frozen), (this.namespace[i] = l), this)
        : (Fw.call(this.namespace, i) && this.namespace[i]) || void 0
      : i
        ? (Oa('data', this.frozen), (this.namespace = i), this)
        : this.namespace;
  }
  freeze() {
    if (this.frozen) return this;
    const i = this;
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [l, ...o] = this.attachers[this.freezeIndex];
      if (o[0] === !1) continue;
      o[0] === !0 && (o[0] = void 0);
      const a = l.call(i, ...o);
      typeof a == 'function' && this.transformers.use(a);
    }
    return (
      (this.frozen = !0),
      (this.freezeIndex = Number.POSITIVE_INFINITY),
      this
    );
  }
  parse(i) {
    this.freeze();
    const l = to(i),
      o = this.parser || this.Parser;
    return (Ra('parse', o), o(String(l), l));
  }
  process(i, l) {
    const o = this;
    return (
      this.freeze(),
      Ra('process', this.parser || this.Parser),
      La('process', this.compiler || this.Compiler),
      l ? a(void 0, l) : new Promise(a)
    );
    function a(c, f) {
      const p = to(i),
        h = o.parse(p);
      o.run(h, p, function (g, v, k) {
        if (g || !v || !k) return m(g);
        const x = v,
          O = o.stringify(x, k);
        (Uw(O) ? (k.value = O) : (k.result = O), m(g, k));
      });
      function m(g, v) {
        g || !v ? f(g) : c ? c(v) : l(void 0, v);
      }
    }
  }
  processSync(i) {
    let l = !1,
      o;
    return (
      this.freeze(),
      Ra('processSync', this.parser || this.Parser),
      La('processSync', this.compiler || this.Compiler),
      this.process(i, a),
      dp('processSync', 'process', l),
      o
    );
    function a(c, f) {
      ((l = !0), ap(c), (o = f));
    }
  }
  run(i, l, o) {
    (fp(i), this.freeze());
    const a = this.transformers;
    return (
      !o && typeof l == 'function' && ((o = l), (l = void 0)),
      o ? c(void 0, o) : new Promise(c)
    );
    function c(f, p) {
      const h = to(l);
      a.run(i, h, m);
      function m(g, v, k) {
        const x = v || i;
        g ? p(g) : f ? f(x) : o(void 0, x, k);
      }
    }
  }
  runSync(i, l) {
    let o = !1,
      a;
    return (this.run(i, l, c), dp('runSync', 'run', o), a);
    function c(f, p) {
      (ap(f), (a = p), (o = !0));
    }
  }
  stringify(i, l) {
    this.freeze();
    const o = to(l),
      a = this.compiler || this.Compiler;
    return (La('stringify', a), fp(i), a(i, o));
  }
  use(i, ...l) {
    const o = this.attachers,
      a = this.namespace;
    if ((Oa('use', this.frozen), i != null))
      if (typeof i == 'function') h(i, l);
      else if (typeof i == 'object') Array.isArray(i) ? p(i) : f(i);
      else throw new TypeError('Expected usable value, not `' + i + '`');
    return this;
    function c(m) {
      if (typeof m == 'function') h(m, []);
      else if (typeof m == 'object')
        if (Array.isArray(m)) {
          const [g, ...v] = m;
          h(g, v);
        } else f(m);
      else throw new TypeError('Expected usable value, not `' + m + '`');
    }
    function f(m) {
      if (!('plugins' in m) && !('settings' in m))
        throw new Error(
          'Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither',
        );
      (p(m.plugins),
        m.settings && (a.settings = Ta(!0, a.settings, m.settings)));
    }
    function p(m) {
      let g = -1;
      if (m != null)
        if (Array.isArray(m))
          for (; ++g < m.length; ) {
            const v = m[g];
            c(v);
          }
        else throw new TypeError('Expected a list of plugins, not `' + m + '`');
    }
    function h(m, g) {
      let v = -1,
        k = -1;
      for (; ++v < o.length; )
        if (o[v][0] === m) {
          k = v;
          break;
        }
      if (k === -1) o.push([m, ...g]);
      else if (g.length > 0) {
        let [x, ...O] = g;
        const z = o[k][1];
        (Ya(z) && Ya(x) && (x = Ta(!0, z, x)), (o[k] = [m, x, ...O]));
      }
    }
  }
}
const jw = new gs().freeze();
function Ra(n, i) {
  if (typeof i != 'function')
    throw new TypeError('Cannot `' + n + '` without `parser`');
}
function La(n, i) {
  if (typeof i != 'function')
    throw new TypeError('Cannot `' + n + '` without `compiler`');
}
function Oa(n, i) {
  if (i)
    throw new Error(
      'Cannot call `' +
        n +
        '` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.',
    );
}
function fp(n) {
  if (!Ya(n) || typeof n.type != 'string')
    throw new TypeError('Expected node, got `' + n + '`');
}
function dp(n, i, l) {
  if (!l)
    throw new Error('`' + n + '` finished async. Use `' + i + '` instead');
}
function to(n) {
  return Bw(n) ? n : new Sh(n);
}
function Bw(n) {
  return !!(n && typeof n == 'object' && 'message' in n && 'messages' in n);
}
function Uw(n) {
  return typeof n == 'string' || bw(n);
}
function bw(n) {
  return !!(
    n &&
    typeof n == 'object' &&
    'byteLength' in n &&
    'byteOffset' in n
  );
}
const Vw = 'https://github.com/remarkjs/react-markdown/blob/main/changelog.md',
  pp = [],
  hp = { allowDangerousHtml: !0 },
  Hw = /^(https?|ircs?|mailto|xmpp)$/i,
  $w = [
    { from: 'astPlugins', id: 'remove-buggy-html-in-markdown-parser' },
    { from: 'allowDangerousHtml', id: 'remove-buggy-html-in-markdown-parser' },
    {
      from: 'allowNode',
      id: 'replace-allownode-allowedtypes-and-disallowedtypes',
      to: 'allowElement',
    },
    {
      from: 'allowedTypes',
      id: 'replace-allownode-allowedtypes-and-disallowedtypes',
      to: 'allowedElements',
    },
    {
      from: 'disallowedTypes',
      id: 'replace-allownode-allowedtypes-and-disallowedtypes',
      to: 'disallowedElements',
    },
    { from: 'escapeHtml', id: 'remove-buggy-html-in-markdown-parser' },
    { from: 'includeElementIndex', id: '#remove-includeelementindex' },
    {
      from: 'includeNodeIndex',
      id: 'change-includenodeindex-to-includeelementindex',
    },
    { from: 'linkTarget', id: 'remove-linktarget' },
    {
      from: 'plugins',
      id: 'change-plugins-to-remarkplugins',
      to: 'remarkPlugins',
    },
    { from: 'rawSourcePos', id: '#remove-rawsourcepos' },
    {
      from: 'renderers',
      id: 'change-renderers-to-components',
      to: 'components',
    },
    { from: 'source', id: 'change-source-to-children', to: 'children' },
    { from: 'sourcePos', id: '#remove-sourcepos' },
    { from: 'transformImageUri', id: '#add-urltransform', to: 'urlTransform' },
    { from: 'transformLinkUri', id: '#add-urltransform', to: 'urlTransform' },
  ];
function Ww(n) {
  const i = Qw(n),
    l = qw(n);
  return Kw(i.runSync(i.parse(l), l), n);
}
function Qw(n) {
  const i = n.rehypePlugins || pp,
    l = n.remarkPlugins || pp,
    o = n.remarkRehypeOptions ? { ...n.remarkRehypeOptions, ...hp } : hp;
  return jw().use(_x).use(l).use(ww, o).use(i);
}
function qw(n) {
  const i = n.children || '',
    l = new Sh();
  return (typeof i == 'string' && (l.value = i), l);
}
function Kw(n, i) {
  const l = i.allowedElements,
    o = i.allowElement,
    a = i.components,
    c = i.disallowedElements,
    f = i.skipHtml,
    p = i.unwrapDisallowed,
    h = i.urlTransform || Xw;
  for (const g of $w)
    Object.hasOwn(i, g.from) &&
      ('' +
        g.from +
        (g.to ? 'use `' + g.to + '` instead' : 'remove it') +
        Vw +
        g.id,
      void 0);
  return (
    i.className &&
      (n = {
        type: 'element',
        tagName: 'div',
        properties: { className: i.className },
        children: n.type === 'root' ? n.children : [n],
      }),
    kh(n, m),
    i1(n, {
      Fragment: q.Fragment,
      components: a,
      ignoreInvalidStyle: !0,
      jsx: q.jsx,
      jsxs: q.jsxs,
      passKeys: !0,
      passNode: !0,
    })
  );
  function m(g, v, k) {
    if (g.type === 'raw' && k && typeof v == 'number')
      return (
        f
          ? k.children.splice(v, 1)
          : (k.children[v] = { type: 'text', value: g.value }),
        v
      );
    if (g.type === 'element') {
      let x;
      for (x in Ea)
        if (Object.hasOwn(Ea, x) && Object.hasOwn(g.properties, x)) {
          const O = g.properties[x],
            z = Ea[x];
          (z === null || z.includes(g.tagName)) &&
            (g.properties[x] = h(String(O || ''), x, g));
        }
    }
    if (g.type === 'element') {
      let x = l ? !l.includes(g.tagName) : c ? c.includes(g.tagName) : !1;
      if (
        (!x && o && typeof v == 'number' && (x = !o(g, v, k)),
        x && k && typeof v == 'number')
      )
        return (
          p && g.children
            ? k.children.splice(v, 1, ...g.children)
            : k.children.splice(v, 1),
          v
        );
    }
  }
}
function Xw(n) {
  const i = n.indexOf(':'),
    l = n.indexOf('?'),
    o = n.indexOf('#'),
    a = n.indexOf('/');
  return i === -1 ||
    (a !== -1 && i > a) ||
    (l !== -1 && i > l) ||
    (o !== -1 && i > o) ||
    Hw.test(n.slice(0, i))
    ? n
    : '';
}
const Yw = ({ content: n }) =>
    q.jsx('div', {
      className: 'markdown-preview p-4 border rounded-lg shadow-md',
      children: q.jsx(Ww, { children: n }),
    }),
  Gw = () => {
    const { id: n } = Jg(),
      i = vo((l) => Iv(l, n || ''));
    return i
      ? q.jsxs('div', {
          className: 'flex flex-col h-full',
          children: [
            q.jsx(bp, { value: i.content }),
            q.jsx(Yw, { content: i.content }),
          ],
        })
      : q.jsx('div', { children: 'Note not found' });
  },
  Jw = () => {
    const n = vo((i) => i.tags.tags);
    return q.jsxs('div', {
      className: 'tag-list',
      children: [
        q.jsx('h2', { className: 'text-lg font-semibold', children: 'Tags' }),
        q.jsx('ul', {
          className: 'list-disc pl-5',
          children: n.map((i) =>
            q.jsx('li', { className: 'text-gray-700', children: i.name }, i.id),
          ),
        }),
      ],
    });
  },
  Zw = () =>
    q.jsxs('div', {
      className: 'p-4',
      children: [
        q.jsx('h1', { className: 'text-2xl font-bold mb-4', children: 'Tags' }),
        q.jsx(Jw, {}),
      ],
    }),
  ek = () =>
    q.jsxs('div', {
      className: 'settings-container',
      children: [
        q.jsx('h1', { className: 'text-2xl font-bold', children: 'Settings' }),
        q.jsxs('div', {
          className: 'settings-options',
          children: [
            q.jsx('h2', { className: 'text-xl', children: 'General' }),
            q.jsx('h2', { className: 'text-xl', children: 'Appearance' }),
            q.jsx('h2', { className: 'text-xl', children: 'Account' }),
          ],
        }),
      ],
    }),
  tk = () =>
    q.jsxs(py, {
      children: [
        q.jsx(zr, { path: '/', element: q.jsx(zd, {}) }),
        q.jsx(zr, { path: '/notes', element: q.jsx(zd, {}) }),
        q.jsx(zr, { path: '/notes/:id', element: q.jsx(Gw, {}) }),
        q.jsx(zr, { path: '/tags', element: q.jsx(Zw, {}) }),
        q.jsx(zr, { path: '/settings', element: q.jsx(ek, {}) }),
      ],
    }),
  nk = () =>
    q.jsxs('div', {
      className: 'w-64 bg-gray-800 text-white h-full p-4',
      children: [
        q.jsx('h2', {
          className: 'text-lg font-bold mb-4',
          children: 'Markdown Notes',
        }),
        q.jsx('nav', {
          children: q.jsxs('ul', {
            children: [
              q.jsx('li', {
                className: 'mb-2',
                children: q.jsx('a', {
                  href: '/notes',
                  className: 'hover:text-gray-400',
                  children: 'Notes',
                }),
              }),
              q.jsx('li', {
                className: 'mb-2',
                children: q.jsx('a', {
                  href: '/tags',
                  className: 'hover:text-gray-400',
                  children: 'Tags',
                }),
              }),
              q.jsx('li', {
                className: 'mb-2',
                children: q.jsx('a', {
                  href: '/settings',
                  className: 'hover:text-gray-400',
                  children: 'Settings',
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  rk = () =>
    q.jsx(Oy, {
      store: _v,
      children: q.jsx(gy, {
        children: q.jsxs('div', {
          className: 'h-screen flex flex-col',
          children: [
            q.jsx('header', {
              className: 'p-4 border-b bg-white',
              children: q.jsx('h1', { children: 'Markdown Notes Editor' }),
            }),
            q.jsxs('div', {
              className: 'flex flex-1 overflow-hidden',
              children: [
                q.jsx('nav', {
                  'aria-label': 'Sidebar',
                  className: 'h-full',
                  children: q.jsx(nk, {}),
                }),
                q.jsx('main', {
                  className: 'flex-1 overflow-auto p-4',
                  children: q.jsx(tk, {}),
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  ik = Tg.createRoot(document.getElementById('root'));
ik.render(q.jsx(mp.StrictMode, { children: q.jsx(rk, {}) }));
