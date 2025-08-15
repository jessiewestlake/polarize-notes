(function () {
  const r = document.createElement('link').relList;
  if (r && r.supports && r.supports('modulepreload')) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) o(a);
  new MutationObserver((a) => {
    for (const s of a)
      if (s.type === 'childList')
        for (const f of s.addedNodes)
          f.tagName === 'LINK' && f.rel === 'modulepreload' && o(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(a) {
    const s = {};
    return (
      a.integrity && (s.integrity = a.integrity),
      a.referrerPolicy && (s.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === 'use-credentials'
        ? (s.credentials = 'include')
        : a.crossOrigin === 'anonymous'
          ? (s.credentials = 'omit')
          : (s.credentials = 'same-origin'),
      s
    );
  }
  function o(a) {
    if (a.ep) return;
    a.ep = !0;
    const s = l(a);
    fetch(a.href, s);
  }
})();
function Po(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default')
    ? t.default
    : t;
}
var Ea = { exports: {} },
  Ti = {},
  Ca = { exports: {} },
  Ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wd;
function jg() {
  if (wd) return Ee;
  wd = 1;
  var t = Symbol.for('react.element'),
    r = Symbol.for('react.portal'),
    l = Symbol.for('react.fragment'),
    o = Symbol.for('react.strict_mode'),
    a = Symbol.for('react.profiler'),
    s = Symbol.for('react.provider'),
    f = Symbol.for('react.context'),
    p = Symbol.for('react.forward_ref'),
    h = Symbol.for('react.suspense'),
    m = Symbol.for('react.memo'),
    g = Symbol.for('react.lazy'),
    v = Symbol.iterator;
  function x(R) {
    return R === null || typeof R != 'object'
      ? null
      : ((R = (v && R[v]) || R['@@iterator']),
        typeof R == 'function' ? R : null);
  }
  var w = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    L = Object.assign,
    T = {};
  function O(R, j, E) {
    ((this.props = R),
      (this.context = j),
      (this.refs = T),
      (this.updater = E || w));
  }
  ((O.prototype.isReactComponent = {}),
    (O.prototype.setState = function (R, j) {
      if (typeof R != 'object' && typeof R != 'function' && R != null)
        throw Error(
          'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, R, j, 'setState');
    }),
    (O.prototype.forceUpdate = function (R) {
      this.updater.enqueueForceUpdate(this, R, 'forceUpdate');
    }));
  function P() {}
  P.prototype = O.prototype;
  function U(R, j, E) {
    ((this.props = R),
      (this.context = j),
      (this.refs = T),
      (this.updater = E || w));
  }
  var M = (U.prototype = new P());
  ((M.constructor = U), L(M, O.prototype), (M.isPureReactComponent = !0));
  var W = Array.isArray,
    q = Object.prototype.hasOwnProperty,
    D = { current: null },
    G = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ue(R, j, E) {
    var pe,
      xe = {},
      de = null,
      Re = null;
    if (j != null)
      for (pe in (j.ref !== void 0 && (Re = j.ref),
      j.key !== void 0 && (de = '' + j.key),
      j))
        q.call(j, pe) && !G.hasOwnProperty(pe) && (xe[pe] = j[pe]);
    var ke = arguments.length - 2;
    if (ke === 1) xe.children = E;
    else if (1 < ke) {
      for (var Te = Array(ke), Ve = 0; Ve < ke; Ve++)
        Te[Ve] = arguments[Ve + 2];
      xe.children = Te;
    }
    if (R && R.defaultProps)
      for (pe in ((ke = R.defaultProps), ke))
        xe[pe] === void 0 && (xe[pe] = ke[pe]);
    return {
      $$typeof: t,
      type: R,
      key: de,
      ref: Re,
      props: xe,
      _owner: D.current,
    };
  }
  function se(R, j) {
    return {
      $$typeof: t,
      type: R.type,
      key: j,
      ref: R.ref,
      props: R.props,
      _owner: R._owner,
    };
  }
  function me(R) {
    return typeof R == 'object' && R !== null && R.$$typeof === t;
  }
  function te(R) {
    var j = { '=': '=0', ':': '=2' };
    return (
      '$' +
      R.replace(/[=:]/g, function (E) {
        return j[E];
      })
    );
  }
  var ne = /\/+/g;
  function Z(R, j) {
    return typeof R == 'object' && R !== null && R.key != null
      ? te('' + R.key)
      : j.toString(36);
  }
  function J(R, j, E, pe, xe) {
    var de = typeof R;
    (de === 'undefined' || de === 'boolean') && (R = null);
    var Re = !1;
    if (R === null) Re = !0;
    else
      switch (de) {
        case 'string':
        case 'number':
          Re = !0;
          break;
        case 'object':
          switch (R.$$typeof) {
            case t:
            case r:
              Re = !0;
          }
      }
    if (Re)
      return (
        (Re = R),
        (xe = xe(Re)),
        (R = pe === '' ? '.' + Z(Re, 0) : pe),
        W(xe)
          ? ((E = ''),
            R != null && (E = R.replace(ne, '$&/') + '/'),
            J(xe, j, E, '', function (Ve) {
              return Ve;
            }))
          : xe != null &&
            (me(xe) &&
              (xe = se(
                xe,
                E +
                  (!xe.key || (Re && Re.key === xe.key)
                    ? ''
                    : ('' + xe.key).replace(ne, '$&/') + '/') +
                  R,
              )),
            j.push(xe)),
        1
      );
    if (((Re = 0), (pe = pe === '' ? '.' : pe + ':'), W(R)))
      for (var ke = 0; ke < R.length; ke++) {
        de = R[ke];
        var Te = pe + Z(de, ke);
        Re += J(de, j, E, Te, xe);
      }
    else if (((Te = x(R)), typeof Te == 'function'))
      for (R = Te.call(R), ke = 0; !(de = R.next()).done; )
        ((de = de.value), (Te = pe + Z(de, ke++)), (Re += J(de, j, E, Te, xe)));
    else if (de === 'object')
      throw (
        (j = String(R)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (j === '[object Object]'
              ? 'object with keys {' + Object.keys(R).join(', ') + '}'
              : j) +
            '). If you meant to render a collection of children, use an array instead.',
        )
      );
    return Re;
  }
  function ae(R, j, E) {
    if (R == null) return R;
    var pe = [],
      xe = 0;
    return (
      J(R, pe, '', '', function (de) {
        return j.call(E, de, xe++);
      }),
      pe
    );
  }
  function Ce(R) {
    if (R._status === -1) {
      var j = R._result;
      ((j = j()),
        j.then(
          function (E) {
            (R._status === 0 || R._status === -1) &&
              ((R._status = 1), (R._result = E));
          },
          function (E) {
            (R._status === 0 || R._status === -1) &&
              ((R._status = 2), (R._result = E));
          },
        ),
        R._status === -1 && ((R._status = 0), (R._result = j)));
    }
    if (R._status === 1) return R._result.default;
    throw R._result;
  }
  var we = { current: null },
    Q = { transition: null },
    oe = {
      ReactCurrentDispatcher: we,
      ReactCurrentBatchConfig: Q,
      ReactCurrentOwner: D,
    };
  function k() {
    throw Error('act(...) is not supported in production builds of React.');
  }
  return (
    (Ee.Children = {
      map: ae,
      forEach: function (R, j, E) {
        ae(
          R,
          function () {
            j.apply(this, arguments);
          },
          E,
        );
      },
      count: function (R) {
        var j = 0;
        return (
          ae(R, function () {
            j++;
          }),
          j
        );
      },
      toArray: function (R) {
        return (
          ae(R, function (j) {
            return j;
          }) || []
        );
      },
      only: function (R) {
        if (!me(R))
          throw Error(
            'React.Children.only expected to receive a single React element child.',
          );
        return R;
      },
    }),
    (Ee.Component = O),
    (Ee.Fragment = l),
    (Ee.Profiler = a),
    (Ee.PureComponent = U),
    (Ee.StrictMode = o),
    (Ee.Suspense = h),
    (Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oe),
    (Ee.act = k),
    (Ee.cloneElement = function (R, j, E) {
      if (R == null)
        throw Error(
          'React.cloneElement(...): The argument must be a React element, but you passed ' +
            R +
            '.',
        );
      var pe = L({}, R.props),
        xe = R.key,
        de = R.ref,
        Re = R._owner;
      if (j != null) {
        if (
          (j.ref !== void 0 && ((de = j.ref), (Re = D.current)),
          j.key !== void 0 && (xe = '' + j.key),
          R.type && R.type.defaultProps)
        )
          var ke = R.type.defaultProps;
        for (Te in j)
          q.call(j, Te) &&
            !G.hasOwnProperty(Te) &&
            (pe[Te] = j[Te] === void 0 && ke !== void 0 ? ke[Te] : j[Te]);
      }
      var Te = arguments.length - 2;
      if (Te === 1) pe.children = E;
      else if (1 < Te) {
        ke = Array(Te);
        for (var Ve = 0; Ve < Te; Ve++) ke[Ve] = arguments[Ve + 2];
        pe.children = ke;
      }
      return {
        $$typeof: t,
        type: R.type,
        key: xe,
        ref: de,
        props: pe,
        _owner: Re,
      };
    }),
    (Ee.createContext = function (R) {
      return (
        (R = {
          $$typeof: f,
          _currentValue: R,
          _currentValue2: R,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (R.Provider = { $$typeof: s, _context: R }),
        (R.Consumer = R)
      );
    }),
    (Ee.createElement = ue),
    (Ee.createFactory = function (R) {
      var j = ue.bind(null, R);
      return ((j.type = R), j);
    }),
    (Ee.createRef = function () {
      return { current: null };
    }),
    (Ee.forwardRef = function (R) {
      return { $$typeof: p, render: R };
    }),
    (Ee.isValidElement = me),
    (Ee.lazy = function (R) {
      return { $$typeof: g, _payload: { _status: -1, _result: R }, _init: Ce };
    }),
    (Ee.memo = function (R, j) {
      return { $$typeof: m, type: R, compare: j === void 0 ? null : j };
    }),
    (Ee.startTransition = function (R) {
      var j = Q.transition;
      Q.transition = {};
      try {
        R();
      } finally {
        Q.transition = j;
      }
    }),
    (Ee.unstable_act = k),
    (Ee.useCallback = function (R, j) {
      return we.current.useCallback(R, j);
    }),
    (Ee.useContext = function (R) {
      return we.current.useContext(R);
    }),
    (Ee.useDebugValue = function () {}),
    (Ee.useDeferredValue = function (R) {
      return we.current.useDeferredValue(R);
    }),
    (Ee.useEffect = function (R, j) {
      return we.current.useEffect(R, j);
    }),
    (Ee.useId = function () {
      return we.current.useId();
    }),
    (Ee.useImperativeHandle = function (R, j, E) {
      return we.current.useImperativeHandle(R, j, E);
    }),
    (Ee.useInsertionEffect = function (R, j) {
      return we.current.useInsertionEffect(R, j);
    }),
    (Ee.useLayoutEffect = function (R, j) {
      return we.current.useLayoutEffect(R, j);
    }),
    (Ee.useMemo = function (R, j) {
      return we.current.useMemo(R, j);
    }),
    (Ee.useReducer = function (R, j, E) {
      return we.current.useReducer(R, j, E);
    }),
    (Ee.useRef = function (R) {
      return we.current.useRef(R);
    }),
    (Ee.useState = function (R) {
      return we.current.useState(R);
    }),
    (Ee.useSyncExternalStore = function (R, j, E) {
      return we.current.useSyncExternalStore(R, j, E);
    }),
    (Ee.useTransition = function () {
      return we.current.useTransition();
    }),
    (Ee.version = '18.3.1'),
    Ee
  );
}
var xd;
function Ro() {
  return (xd || ((xd = 1), (Ca.exports = jg())), Ca.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kd;
function Bg() {
  if (kd) return Ti;
  kd = 1;
  var t = Ro(),
    r = Symbol.for('react.element'),
    l = Symbol.for('react.fragment'),
    o = Object.prototype.hasOwnProperty,
    a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(p, h, m) {
    var g,
      v = {},
      x = null,
      w = null;
    (m !== void 0 && (x = '' + m),
      h.key !== void 0 && (x = '' + h.key),
      h.ref !== void 0 && (w = h.ref));
    for (g in h) o.call(h, g) && !s.hasOwnProperty(g) && (v[g] = h[g]);
    if (p && p.defaultProps)
      for (g in ((h = p.defaultProps), h)) v[g] === void 0 && (v[g] = h[g]);
    return {
      $$typeof: r,
      type: p,
      key: x,
      ref: w,
      props: v,
      _owner: a.current,
    };
  }
  return ((Ti.Fragment = l), (Ti.jsx = f), (Ti.jsxs = f), Ti);
}
var Sd;
function bg() {
  return (Sd || ((Sd = 1), (Ea.exports = Bg())), Ea.exports);
}
var Y = bg(),
  A = Ro();
const Ug = Po(A);
var oo = {},
  _a = { exports: {} },
  mt = {},
  Pa = { exports: {} },
  Ra = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ed;
function $g() {
  return (
    Ed ||
      ((Ed = 1),
      (function (t) {
        function r(Q, oe) {
          var k = Q.length;
          Q.push(oe);
          e: for (; 0 < k; ) {
            var R = (k - 1) >>> 1,
              j = Q[R];
            if (0 < a(j, oe)) ((Q[R] = oe), (Q[k] = j), (k = R));
            else break e;
          }
        }
        function l(Q) {
          return Q.length === 0 ? null : Q[0];
        }
        function o(Q) {
          if (Q.length === 0) return null;
          var oe = Q[0],
            k = Q.pop();
          if (k !== oe) {
            Q[0] = k;
            e: for (var R = 0, j = Q.length, E = j >>> 1; R < E; ) {
              var pe = 2 * (R + 1) - 1,
                xe = Q[pe],
                de = pe + 1,
                Re = Q[de];
              if (0 > a(xe, k))
                de < j && 0 > a(Re, xe)
                  ? ((Q[R] = Re), (Q[de] = k), (R = de))
                  : ((Q[R] = xe), (Q[pe] = k), (R = pe));
              else if (de < j && 0 > a(Re, k))
                ((Q[R] = Re), (Q[de] = k), (R = de));
              else break e;
            }
          }
          return oe;
        }
        function a(Q, oe) {
          var k = Q.sortIndex - oe.sortIndex;
          return k !== 0 ? k : Q.id - oe.id;
        }
        if (
          typeof performance == 'object' &&
          typeof performance.now == 'function'
        ) {
          var s = performance;
          t.unstable_now = function () {
            return s.now();
          };
        } else {
          var f = Date,
            p = f.now();
          t.unstable_now = function () {
            return f.now() - p;
          };
        }
        var h = [],
          m = [],
          g = 1,
          v = null,
          x = 3,
          w = !1,
          L = !1,
          T = !1,
          O = typeof setTimeout == 'function' ? setTimeout : null,
          P = typeof clearTimeout == 'function' ? clearTimeout : null,
          U = typeof setImmediate < 'u' ? setImmediate : null;
        typeof navigator < 'u' &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function M(Q) {
          for (var oe = l(m); oe !== null; ) {
            if (oe.callback === null) o(m);
            else if (oe.startTime <= Q)
              (o(m), (oe.sortIndex = oe.expirationTime), r(h, oe));
            else break;
            oe = l(m);
          }
        }
        function W(Q) {
          if (((T = !1), M(Q), !L))
            if (l(h) !== null) ((L = !0), Ce(q));
            else {
              var oe = l(m);
              oe !== null && we(W, oe.startTime - Q);
            }
        }
        function q(Q, oe) {
          ((L = !1), T && ((T = !1), P(ue), (ue = -1)), (w = !0));
          var k = x;
          try {
            for (
              M(oe), v = l(h);
              v !== null && (!(v.expirationTime > oe) || (Q && !te()));

            ) {
              var R = v.callback;
              if (typeof R == 'function') {
                ((v.callback = null), (x = v.priorityLevel));
                var j = R(v.expirationTime <= oe);
                ((oe = t.unstable_now()),
                  typeof j == 'function'
                    ? (v.callback = j)
                    : v === l(h) && o(h),
                  M(oe));
              } else o(h);
              v = l(h);
            }
            if (v !== null) var E = !0;
            else {
              var pe = l(m);
              (pe !== null && we(W, pe.startTime - oe), (E = !1));
            }
            return E;
          } finally {
            ((v = null), (x = k), (w = !1));
          }
        }
        var D = !1,
          G = null,
          ue = -1,
          se = 5,
          me = -1;
        function te() {
          return !(t.unstable_now() - me < se);
        }
        function ne() {
          if (G !== null) {
            var Q = t.unstable_now();
            me = Q;
            var oe = !0;
            try {
              oe = G(!0, Q);
            } finally {
              oe ? Z() : ((D = !1), (G = null));
            }
          } else D = !1;
        }
        var Z;
        if (typeof U == 'function')
          Z = function () {
            U(ne);
          };
        else if (typeof MessageChannel < 'u') {
          var J = new MessageChannel(),
            ae = J.port2;
          ((J.port1.onmessage = ne),
            (Z = function () {
              ae.postMessage(null);
            }));
        } else
          Z = function () {
            O(ne, 0);
          };
        function Ce(Q) {
          ((G = Q), D || ((D = !0), Z()));
        }
        function we(Q, oe) {
          ue = O(function () {
            Q(t.unstable_now());
          }, oe);
        }
        ((t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (Q) {
            Q.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            L || w || ((L = !0), Ce(q));
          }),
          (t.unstable_forceFrameRate = function (Q) {
            0 > Q || 125 < Q
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (se = 0 < Q ? Math.floor(1e3 / Q) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return x;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return l(h);
          }),
          (t.unstable_next = function (Q) {
            switch (x) {
              case 1:
              case 2:
              case 3:
                var oe = 3;
                break;
              default:
                oe = x;
            }
            var k = x;
            x = oe;
            try {
              return Q();
            } finally {
              x = k;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (Q, oe) {
            switch (Q) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                Q = 3;
            }
            var k = x;
            x = Q;
            try {
              return oe();
            } finally {
              x = k;
            }
          }),
          (t.unstable_scheduleCallback = function (Q, oe, k) {
            var R = t.unstable_now();
            switch (
              (typeof k == 'object' && k !== null
                ? ((k = k.delay),
                  (k = typeof k == 'number' && 0 < k ? R + k : R))
                : (k = R),
              Q)
            ) {
              case 1:
                var j = -1;
                break;
              case 2:
                j = 250;
                break;
              case 5:
                j = 1073741823;
                break;
              case 4:
                j = 1e4;
                break;
              default:
                j = 5e3;
            }
            return (
              (j = k + j),
              (Q = {
                id: g++,
                callback: oe,
                priorityLevel: Q,
                startTime: k,
                expirationTime: j,
                sortIndex: -1,
              }),
              k > R
                ? ((Q.sortIndex = k),
                  r(m, Q),
                  l(h) === null &&
                    Q === l(m) &&
                    (T ? (P(ue), (ue = -1)) : (T = !0), we(W, k - R)))
                : ((Q.sortIndex = j), r(h, Q), L || w || ((L = !0), Ce(q))),
              Q
            );
          }),
          (t.unstable_shouldYield = te),
          (t.unstable_wrapCallback = function (Q) {
            var oe = x;
            return function () {
              var k = x;
              x = oe;
              try {
                return Q.apply(this, arguments);
              } finally {
                x = k;
              }
            };
          }));
      })(Ra)),
    Ra
  );
}
var Cd;
function Hg() {
  return (Cd || ((Cd = 1), (Pa.exports = $g())), Pa.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _d;
function Vg() {
  if (_d) return mt;
  _d = 1;
  var t = Ro(),
    r = Hg();
  function l(e) {
    for (
      var n = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
        i = 1;
      i < arguments.length;
      i++
    )
      n += '&args[]=' + encodeURIComponent(arguments[i]);
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      n +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  var o = new Set(),
    a = {};
  function s(e, n) {
    (f(e, n), f(e + 'Capture', n));
  }
  function f(e, n) {
    for (a[e] = n, e = 0; e < n.length; e++) o.add(n[e]);
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
  function x(e) {
    return h.call(v, e)
      ? !0
      : h.call(g, e)
        ? !1
        : m.test(e)
          ? (v[e] = !0)
          : ((g[e] = !0), !1);
  }
  function w(e, n, i, u) {
    if (i !== null && i.type === 0) return !1;
    switch (typeof n) {
      case 'function':
      case 'symbol':
        return !0;
      case 'boolean':
        return u
          ? !1
          : i !== null
            ? !i.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== 'data-' && e !== 'aria-');
      default:
        return !1;
    }
  }
  function L(e, n, i, u) {
    if (n === null || typeof n > 'u' || w(e, n, i, u)) return !0;
    if (u) return !1;
    if (i !== null)
      switch (i.type) {
        case 3:
          return !n;
        case 4:
          return n === !1;
        case 5:
          return isNaN(n);
        case 6:
          return isNaN(n) || 1 > n;
      }
    return !1;
  }
  function T(e, n, i, u, c, d, y) {
    ((this.acceptsBooleans = n === 2 || n === 3 || n === 4),
      (this.attributeName = u),
      (this.attributeNamespace = c),
      (this.mustUseProperty = i),
      (this.propertyName = e),
      (this.type = n),
      (this.sanitizeURL = d),
      (this.removeEmptyString = y));
  }
  var O = {};
  ('children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
      O[e] = new T(e, 0, !1, e, null, !1, !1);
    }),
    [
      ['acceptCharset', 'accept-charset'],
      ['className', 'class'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
    ].forEach(function (e) {
      var n = e[0];
      O[n] = new T(n, 1, !1, e[1], null, !1, !1);
    }),
    ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
      function (e) {
        O[e] = new T(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      'autoReverse',
      'externalResourcesRequired',
      'focusable',
      'preserveAlpha',
    ].forEach(function (e) {
      O[e] = new T(e, 2, !1, e, null, !1, !1);
    }),
    'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
      .split(' ')
      .forEach(function (e) {
        O[e] = new T(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
      O[e] = new T(e, 3, !0, e, null, !1, !1);
    }),
    ['capture', 'download'].forEach(function (e) {
      O[e] = new T(e, 4, !1, e, null, !1, !1);
    }),
    ['cols', 'rows', 'size', 'span'].forEach(function (e) {
      O[e] = new T(e, 6, !1, e, null, !1, !1);
    }),
    ['rowSpan', 'start'].forEach(function (e) {
      O[e] = new T(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var P = /[\-:]([a-z])/g;
  function U(e) {
    return e[1].toUpperCase();
  }
  ('accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
      var n = e.replace(P, U);
      O[n] = new T(n, 1, !1, e, null, !1, !1);
    }),
    'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
      .split(' ')
      .forEach(function (e) {
        var n = e.replace(P, U);
        O[n] = new T(n, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
      }),
    ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
      var n = e.replace(P, U);
      O[n] = new T(n, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
    }),
    ['tabIndex', 'crossOrigin'].forEach(function (e) {
      O[e] = new T(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (O.xlinkHref = new T(
      'xlinkHref',
      1,
      !1,
      'xlink:href',
      'http://www.w3.org/1999/xlink',
      !0,
      !1,
    )),
    ['src', 'href', 'action', 'formAction'].forEach(function (e) {
      O[e] = new T(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function M(e, n, i, u) {
    var c = O.hasOwnProperty(n) ? O[n] : null;
    (c !== null
      ? c.type !== 0
      : u ||
        !(2 < n.length) ||
        (n[0] !== 'o' && n[0] !== 'O') ||
        (n[1] !== 'n' && n[1] !== 'N')) &&
      (L(n, i, c, u) && (i = null),
      u || c === null
        ? x(n) &&
          (i === null ? e.removeAttribute(n) : e.setAttribute(n, '' + i))
        : c.mustUseProperty
          ? (e[c.propertyName] = i === null ? (c.type === 3 ? !1 : '') : i)
          : ((n = c.attributeName),
            (u = c.attributeNamespace),
            i === null
              ? e.removeAttribute(n)
              : ((c = c.type),
                (i = c === 3 || (c === 4 && i === !0) ? '' : '' + i),
                u ? e.setAttributeNS(u, n, i) : e.setAttribute(n, i))));
  }
  var W = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    q = Symbol.for('react.element'),
    D = Symbol.for('react.portal'),
    G = Symbol.for('react.fragment'),
    ue = Symbol.for('react.strict_mode'),
    se = Symbol.for('react.profiler'),
    me = Symbol.for('react.provider'),
    te = Symbol.for('react.context'),
    ne = Symbol.for('react.forward_ref'),
    Z = Symbol.for('react.suspense'),
    J = Symbol.for('react.suspense_list'),
    ae = Symbol.for('react.memo'),
    Ce = Symbol.for('react.lazy'),
    we = Symbol.for('react.offscreen'),
    Q = Symbol.iterator;
  function oe(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (Q && e[Q]) || e['@@iterator']),
        typeof e == 'function' ? e : null);
  }
  var k = Object.assign,
    R;
  function j(e) {
    if (R === void 0)
      try {
        throw Error();
      } catch (i) {
        var n = i.stack.trim().match(/\n( *(at )?)/);
        R = (n && n[1]) || '';
      }
    return (
      `
` +
      R +
      e
    );
  }
  var E = !1;
  function pe(e, n) {
    if (!e || E) return '';
    E = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (n)
        if (
          ((n = function () {
            throw Error();
          }),
          Object.defineProperty(n.prototype, 'props', {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == 'object' && Reflect.construct)
        ) {
          try {
            Reflect.construct(n, []);
          } catch (z) {
            var u = z;
          }
          Reflect.construct(e, [], n);
        } else {
          try {
            n.call();
          } catch (z) {
            u = z;
          }
          e.call(n.prototype);
        }
      else {
        try {
          throw Error();
        } catch (z) {
          u = z;
        }
        e();
      }
    } catch (z) {
      if (z && u && typeof z.stack == 'string') {
        for (
          var c = z.stack.split(`
`),
            d = u.stack.split(`
`),
            y = c.length - 1,
            S = d.length - 1;
          1 <= y && 0 <= S && c[y] !== d[S];

        )
          S--;
        for (; 1 <= y && 0 <= S; y--, S--)
          if (c[y] !== d[S]) {
            if (y !== 1 || S !== 1)
              do
                if ((y--, S--, 0 > S || c[y] !== d[S])) {
                  var C =
                    `
` + c[y].replace(' at new ', ' at ');
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
      ((E = !1), (Error.prepareStackTrace = i));
    }
    return (e = e ? e.displayName || e.name : '') ? j(e) : '';
  }
  function xe(e) {
    switch (e.tag) {
      case 5:
        return j(e.type);
      case 16:
        return j('Lazy');
      case 13:
        return j('Suspense');
      case 19:
        return j('SuspenseList');
      case 0:
      case 2:
      case 15:
        return ((e = pe(e.type, !1)), e);
      case 11:
        return ((e = pe(e.type.render, !1)), e);
      case 1:
        return ((e = pe(e.type, !0)), e);
      default:
        return '';
    }
  }
  function de(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case G:
        return 'Fragment';
      case D:
        return 'Portal';
      case se:
        return 'Profiler';
      case ue:
        return 'StrictMode';
      case Z:
        return 'Suspense';
      case J:
        return 'SuspenseList';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case te:
          return (e.displayName || 'Context') + '.Consumer';
        case me:
          return (e._context.displayName || 'Context') + '.Provider';
        case ne:
          var n = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = n.displayName || n.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case ae:
          return (
            (n = e.displayName || null),
            n !== null ? n : de(e.type) || 'Memo'
          );
        case Ce:
          ((n = e._payload), (e = e._init));
          try {
            return de(e(n));
          } catch {}
      }
    return null;
  }
  function Re(e) {
    var n = e.type;
    switch (e.tag) {
      case 24:
        return 'Cache';
      case 9:
        return (n.displayName || 'Context') + '.Consumer';
      case 10:
        return (n._context.displayName || 'Context') + '.Provider';
      case 18:
        return 'DehydratedFragment';
      case 11:
        return (
          (e = n.render),
          (e = e.displayName || e.name || ''),
          n.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
        );
      case 7:
        return 'Fragment';
      case 5:
        return n;
      case 4:
        return 'Portal';
      case 3:
        return 'Root';
      case 6:
        return 'Text';
      case 16:
        return de(n);
      case 8:
        return n === ue ? 'StrictMode' : 'Mode';
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
        if (typeof n == 'function') return n.displayName || n.name || null;
        if (typeof n == 'string') return n;
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
  function Te(e) {
    var n = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === 'input' &&
      (n === 'checkbox' || n === 'radio')
    );
  }
  function Ve(e) {
    var n = Te(e) ? 'checked' : 'value',
      i = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
      u = '' + e[n];
    if (
      !e.hasOwnProperty(n) &&
      typeof i < 'u' &&
      typeof i.get == 'function' &&
      typeof i.set == 'function'
    ) {
      var c = i.get,
        d = i.set;
      return (
        Object.defineProperty(e, n, {
          configurable: !0,
          get: function () {
            return c.call(this);
          },
          set: function (y) {
            ((u = '' + y), d.call(this, y));
          },
        }),
        Object.defineProperty(e, n, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return u;
          },
          setValue: function (y) {
            u = '' + y;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[n]);
          },
        }
      );
    }
  }
  function nn(e) {
    e._valueTracker || (e._valueTracker = Ve(e));
  }
  function qi(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var i = n.getValue(),
      u = '';
    return (
      e && (u = Te(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = u),
      e !== i ? (n.setValue(e), !0) : !1
    );
  }
  function or(e) {
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
  function Hr(e, n) {
    var i = n.checked;
    return k({}, n, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: i ?? e._wrapperState.initialChecked,
    });
  }
  function Vr(e, n) {
    var i = n.defaultValue == null ? '' : n.defaultValue,
      u = n.checked != null ? n.checked : n.defaultChecked;
    ((i = ke(n.value != null ? n.value : i)),
      (e._wrapperState = {
        initialChecked: u,
        initialValue: i,
        controlled:
          n.type === 'checkbox' || n.type === 'radio'
            ? n.checked != null
            : n.value != null,
      }));
  }
  function Wr(e, n) {
    ((n = n.checked), n != null && M(e, 'checked', n, !1));
  }
  function ur(e, n) {
    Wr(e, n);
    var i = ke(n.value),
      u = n.type;
    if (i != null)
      u === 'number'
        ? ((i === 0 && e.value === '') || e.value != i) && (e.value = '' + i)
        : e.value !== '' + i && (e.value = '' + i);
    else if (u === 'submit' || u === 'reset') {
      e.removeAttribute('value');
      return;
    }
    (n.hasOwnProperty('value')
      ? ar(e, n.type, i)
      : n.hasOwnProperty('defaultValue') && ar(e, n.type, ke(n.defaultValue)),
      n.checked == null &&
        n.defaultChecked != null &&
        (e.defaultChecked = !!n.defaultChecked));
  }
  function Yi(e, n, i) {
    if (n.hasOwnProperty('value') || n.hasOwnProperty('defaultValue')) {
      var u = n.type;
      if (
        !(
          (u !== 'submit' && u !== 'reset') ||
          (n.value !== void 0 && n.value !== null)
        )
      )
        return;
      ((n = '' + e._wrapperState.initialValue),
        i || n === e.value || (e.value = n),
        (e.defaultValue = n));
    }
    ((i = e.name),
      i !== '' && (e.name = ''),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      i !== '' && (e.name = i));
  }
  function ar(e, n, i) {
    (n !== 'number' || or(e.ownerDocument) !== e) &&
      (i == null
        ? (e.defaultValue = '' + e._wrapperState.initialValue)
        : e.defaultValue !== '' + i && (e.defaultValue = '' + i));
  }
  var yn = Array.isArray;
  function vn(e, n, i, u) {
    if (((e = e.options), n)) {
      n = {};
      for (var c = 0; c < i.length; c++) n['$' + i[c]] = !0;
      for (i = 0; i < e.length; i++)
        ((c = n.hasOwnProperty('$' + e[i].value)),
          e[i].selected !== c && (e[i].selected = c),
          c && u && (e[i].defaultSelected = !0));
    } else {
      for (i = '' + ke(i), n = null, c = 0; c < e.length; c++) {
        if (e[c].value === i) {
          ((e[c].selected = !0), u && (e[c].defaultSelected = !0));
          return;
        }
        n !== null || e[c].disabled || (n = e[c]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Qr(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(l(91));
    return k({}, n, {
      value: void 0,
      defaultValue: void 0,
      children: '' + e._wrapperState.initialValue,
    });
  }
  function Xi(e, n) {
    var i = n.value;
    if (i == null) {
      if (((i = n.children), (n = n.defaultValue), i != null)) {
        if (n != null) throw Error(l(92));
        if (yn(i)) {
          if (1 < i.length) throw Error(l(93));
          i = i[0];
        }
        n = i;
      }
      (n == null && (n = ''), (i = n));
    }
    e._wrapperState = { initialValue: ke(i) };
  }
  function Gi(e, n) {
    var i = ke(n.value),
      u = ke(n.defaultValue);
    (i != null &&
      ((i = '' + i),
      i !== e.value && (e.value = i),
      n.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)),
      u != null && (e.defaultValue = '' + u));
  }
  function Ji(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue &&
      n !== '' &&
      n !== null &&
      (e.value = n);
  }
  function F(e) {
    switch (e) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function K(e, n) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
      ? F(n)
      : e === 'http://www.w3.org/2000/svg' && n === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e;
  }
  var he,
    Se = (function (e) {
      return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
        ? function (n, i, u, c) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(n, i, u, c);
            });
          }
        : e;
    })(function (e, n) {
      if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
        e.innerHTML = n;
      else {
        for (
          he = he || document.createElement('div'),
            he.innerHTML = '<svg>' + n.valueOf().toString() + '</svg>',
            n = he.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; n.firstChild; ) e.appendChild(n.firstChild);
      }
    });
  function _e(e, n) {
    if (n) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var Je = {
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
    rn = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(Je).forEach(function (e) {
    rn.forEach(function (n) {
      ((n = n + e.charAt(0).toUpperCase() + e.substring(1)), (Je[n] = Je[e]));
    });
  });
  function Nt(e, n, i) {
    return n == null || typeof n == 'boolean' || n === ''
      ? ''
      : i || typeof n != 'number' || n === 0 || (Je.hasOwnProperty(e) && Je[e])
        ? ('' + n).trim()
        : n + 'px';
  }
  function wn(e, n) {
    e = e.style;
    for (var i in n)
      if (n.hasOwnProperty(i)) {
        var u = i.indexOf('--') === 0,
          c = Nt(i, n[i], u);
        (i === 'float' && (i = 'cssFloat'),
          u ? e.setProperty(i, c) : (e[i] = c));
      }
  }
  var Un = k(
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
  function Ze(e, n) {
    if (n) {
      if (Un[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
        throw Error(l(137, e));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null) throw Error(l(60));
        if (
          typeof n.dangerouslySetInnerHTML != 'object' ||
          !('__html' in n.dangerouslySetInnerHTML)
        )
          throw Error(l(61));
      }
      if (n.style != null && typeof n.style != 'object') throw Error(l(62));
    }
  }
  function Vt(e, n) {
    if (e.indexOf('-') === -1) return typeof n.is == 'string';
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
  var wt = null;
  function jo(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Bo = null,
    sr = null,
    cr = null;
  function Ms(e) {
    if ((e = hi(e))) {
      if (typeof Bo != 'function') throw Error(l(280));
      var n = e.stateNode;
      n && ((n = kl(n)), Bo(e.stateNode, e.type, n));
    }
  }
  function As(e) {
    sr ? (cr ? cr.push(e) : (cr = [e])) : (sr = e);
  }
  function Fs() {
    if (sr) {
      var e = sr,
        n = cr;
      if (((cr = sr = null), Ms(e), n)) for (e = 0; e < n.length; e++) Ms(n[e]);
    }
  }
  function js(e, n) {
    return e(n);
  }
  function Bs() {}
  var bo = !1;
  function bs(e, n, i) {
    if (bo) return e(n, i);
    bo = !0;
    try {
      return js(e, n, i);
    } finally {
      ((bo = !1), (sr !== null || cr !== null) && (Bs(), Fs()));
    }
  }
  function Kr(e, n) {
    var i = e.stateNode;
    if (i === null) return null;
    var u = kl(i);
    if (u === null) return null;
    i = u[n];
    e: switch (n) {
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
    if (i && typeof i != 'function') throw Error(l(231, n, typeof i));
    return i;
  }
  var Uo = !1;
  if (p)
    try {
      var qr = {};
      (Object.defineProperty(qr, 'passive', {
        get: function () {
          Uo = !0;
        },
      }),
        window.addEventListener('test', qr, qr),
        window.removeEventListener('test', qr, qr));
    } catch {
      Uo = !1;
    }
  function Vh(e, n, i, u, c, d, y, S, C) {
    var z = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(i, z);
    } catch (b) {
      this.onError(b);
    }
  }
  var Yr = !1,
    Zi = null,
    el = !1,
    $o = null,
    Wh = {
      onError: function (e) {
        ((Yr = !0), (Zi = e));
      },
    };
  function Qh(e, n, i, u, c, d, y, S, C) {
    ((Yr = !1), (Zi = null), Vh.apply(Wh, arguments));
  }
  function Kh(e, n, i, u, c, d, y, S, C) {
    if ((Qh.apply(this, arguments), Yr)) {
      if (Yr) {
        var z = Zi;
        ((Yr = !1), (Zi = null));
      } else throw Error(l(198));
      el || ((el = !0), ($o = z));
    }
  }
  function $n(e) {
    var n = e,
      i = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do ((n = e), (n.flags & 4098) !== 0 && (i = n.return), (e = n.return));
      while (e);
    }
    return n.tag === 3 ? i : null;
  }
  function Us(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function $s(e) {
    if ($n(e) !== e) throw Error(l(188));
  }
  function qh(e) {
    var n = e.alternate;
    if (!n) {
      if (((n = $n(e)), n === null)) throw Error(l(188));
      return n !== e ? null : e;
    }
    for (var i = e, u = n; ; ) {
      var c = i.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (((u = c.return), u !== null)) {
          i = u;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === i) return ($s(c), e);
          if (d === u) return ($s(c), n);
          d = d.sibling;
        }
        throw Error(l(188));
      }
      if (i.return !== u.return) ((i = c), (u = d));
      else {
        for (var y = !1, S = c.child; S; ) {
          if (S === i) {
            ((y = !0), (i = c), (u = d));
            break;
          }
          if (S === u) {
            ((y = !0), (u = c), (i = d));
            break;
          }
          S = S.sibling;
        }
        if (!y) {
          for (S = d.child; S; ) {
            if (S === i) {
              ((y = !0), (i = d), (u = c));
              break;
            }
            if (S === u) {
              ((y = !0), (u = d), (i = c));
              break;
            }
            S = S.sibling;
          }
          if (!y) throw Error(l(189));
        }
      }
      if (i.alternate !== u) throw Error(l(190));
    }
    if (i.tag !== 3) throw Error(l(188));
    return i.stateNode.current === i ? e : n;
  }
  function Hs(e) {
    return ((e = qh(e)), e !== null ? Vs(e) : null);
  }
  function Vs(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var n = Vs(e);
      if (n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var Ws = r.unstable_scheduleCallback,
    Qs = r.unstable_cancelCallback,
    Yh = r.unstable_shouldYield,
    Xh = r.unstable_requestPaint,
    $e = r.unstable_now,
    Gh = r.unstable_getCurrentPriorityLevel,
    Ho = r.unstable_ImmediatePriority,
    Ks = r.unstable_UserBlockingPriority,
    tl = r.unstable_NormalPriority,
    Jh = r.unstable_LowPriority,
    qs = r.unstable_IdlePriority,
    nl = null,
    Wt = null;
  function Zh(e) {
    if (Wt && typeof Wt.onCommitFiberRoot == 'function')
      try {
        Wt.onCommitFiberRoot(nl, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var At = Math.clz32 ? Math.clz32 : nm,
    em = Math.log,
    tm = Math.LN2;
  function nm(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((em(e) / tm) | 0)) | 0);
  }
  var rl = 64,
    il = 4194304;
  function Xr(e) {
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
  function ll(e, n) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var u = 0,
      c = e.suspendedLanes,
      d = e.pingedLanes,
      y = i & 268435455;
    if (y !== 0) {
      var S = y & ~c;
      S !== 0 ? (u = Xr(S)) : ((d &= y), d !== 0 && (u = Xr(d)));
    } else ((y = i & ~c), y !== 0 ? (u = Xr(y)) : d !== 0 && (u = Xr(d)));
    if (u === 0) return 0;
    if (
      n !== 0 &&
      n !== u &&
      (n & c) === 0 &&
      ((c = u & -u), (d = n & -n), c >= d || (c === 16 && (d & 4194240) !== 0))
    )
      return n;
    if (((u & 4) !== 0 && (u |= i & 16), (n = e.entangledLanes), n !== 0))
      for (e = e.entanglements, n &= u; 0 < n; )
        ((i = 31 - At(n)), (c = 1 << i), (u |= e[i]), (n &= ~c));
    return u;
  }
  function rm(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return n + 250;
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
        return n + 5e3;
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
  function im(e, n) {
    for (
      var i = e.suspendedLanes,
        u = e.pingedLanes,
        c = e.expirationTimes,
        d = e.pendingLanes;
      0 < d;

    ) {
      var y = 31 - At(d),
        S = 1 << y,
        C = c[y];
      (C === -1
        ? ((S & i) === 0 || (S & u) !== 0) && (c[y] = rm(S, n))
        : C <= n && (e.expiredLanes |= S),
        (d &= ~S));
    }
  }
  function Vo(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Ys() {
    var e = rl;
    return ((rl <<= 1), (rl & 4194240) === 0 && (rl = 64), e);
  }
  function Wo(e) {
    for (var n = [], i = 0; 31 > i; i++) n.push(e);
    return n;
  }
  function Gr(e, n, i) {
    ((e.pendingLanes |= n),
      n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (n = 31 - At(n)),
      (e[n] = i));
  }
  function lm(e, n) {
    var i = e.pendingLanes & ~n;
    ((e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= n),
      (e.mutableReadLanes &= n),
      (e.entangledLanes &= n),
      (n = e.entanglements));
    var u = e.eventTimes;
    for (e = e.expirationTimes; 0 < i; ) {
      var c = 31 - At(i),
        d = 1 << c;
      ((n[c] = 0), (u[c] = -1), (e[c] = -1), (i &= ~d));
    }
  }
  function Qo(e, n) {
    var i = (e.entangledLanes |= n);
    for (e = e.entanglements; i; ) {
      var u = 31 - At(i),
        c = 1 << u;
      ((c & n) | (e[u] & n) && (e[u] |= n), (i &= ~c));
    }
  }
  var Le = 0;
  function Xs(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var Gs,
    Ko,
    Js,
    Zs,
    ec,
    qo = !1,
    ol = [],
    xn = null,
    kn = null,
    Sn = null,
    Jr = new Map(),
    Zr = new Map(),
    En = [],
    om =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' ',
      );
  function tc(e, n) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        xn = null;
        break;
      case 'dragenter':
      case 'dragleave':
        kn = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Sn = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Jr.delete(n.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Zr.delete(n.pointerId);
    }
  }
  function ei(e, n, i, u, c, d) {
    return e === null || e.nativeEvent !== d
      ? ((e = {
          blockedOn: n,
          domEventName: i,
          eventSystemFlags: u,
          nativeEvent: d,
          targetContainers: [c],
        }),
        n !== null && ((n = hi(n)), n !== null && Ko(n)),
        e)
      : ((e.eventSystemFlags |= u),
        (n = e.targetContainers),
        c !== null && n.indexOf(c) === -1 && n.push(c),
        e);
  }
  function um(e, n, i, u, c) {
    switch (n) {
      case 'focusin':
        return ((xn = ei(xn, e, n, i, u, c)), !0);
      case 'dragenter':
        return ((kn = ei(kn, e, n, i, u, c)), !0);
      case 'mouseover':
        return ((Sn = ei(Sn, e, n, i, u, c)), !0);
      case 'pointerover':
        var d = c.pointerId;
        return (Jr.set(d, ei(Jr.get(d) || null, e, n, i, u, c)), !0);
      case 'gotpointercapture':
        return (
          (d = c.pointerId),
          Zr.set(d, ei(Zr.get(d) || null, e, n, i, u, c)),
          !0
        );
    }
    return !1;
  }
  function nc(e) {
    var n = Hn(e.target);
    if (n !== null) {
      var i = $n(n);
      if (i !== null) {
        if (((n = i.tag), n === 13)) {
          if (((n = Us(i)), n !== null)) {
            ((e.blockedOn = n),
              ec(e.priority, function () {
                Js(i);
              }));
            return;
          }
        } else if (n === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function ul(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var i = Xo(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var u = new i.constructor(i.type, i);
        ((wt = u), i.target.dispatchEvent(u), (wt = null));
      } else return ((n = hi(i)), n !== null && Ko(n), (e.blockedOn = i), !1);
      n.shift();
    }
    return !0;
  }
  function rc(e, n, i) {
    ul(e) && i.delete(n);
  }
  function am() {
    ((qo = !1),
      xn !== null && ul(xn) && (xn = null),
      kn !== null && ul(kn) && (kn = null),
      Sn !== null && ul(Sn) && (Sn = null),
      Jr.forEach(rc),
      Zr.forEach(rc));
  }
  function ti(e, n) {
    e.blockedOn === n &&
      ((e.blockedOn = null),
      qo ||
        ((qo = !0),
        r.unstable_scheduleCallback(r.unstable_NormalPriority, am)));
  }
  function ni(e) {
    function n(c) {
      return ti(c, e);
    }
    if (0 < ol.length) {
      ti(ol[0], e);
      for (var i = 1; i < ol.length; i++) {
        var u = ol[i];
        u.blockedOn === e && (u.blockedOn = null);
      }
    }
    for (
      xn !== null && ti(xn, e),
        kn !== null && ti(kn, e),
        Sn !== null && ti(Sn, e),
        Jr.forEach(n),
        Zr.forEach(n),
        i = 0;
      i < En.length;
      i++
    )
      ((u = En[i]), u.blockedOn === e && (u.blockedOn = null));
    for (; 0 < En.length && ((i = En[0]), i.blockedOn === null); )
      (nc(i), i.blockedOn === null && En.shift());
  }
  var fr = W.ReactCurrentBatchConfig,
    al = !0;
  function sm(e, n, i, u) {
    var c = Le,
      d = fr.transition;
    fr.transition = null;
    try {
      ((Le = 1), Yo(e, n, i, u));
    } finally {
      ((Le = c), (fr.transition = d));
    }
  }
  function cm(e, n, i, u) {
    var c = Le,
      d = fr.transition;
    fr.transition = null;
    try {
      ((Le = 4), Yo(e, n, i, u));
    } finally {
      ((Le = c), (fr.transition = d));
    }
  }
  function Yo(e, n, i, u) {
    if (al) {
      var c = Xo(e, n, i, u);
      if (c === null) (pu(e, n, u, sl, i), tc(e, u));
      else if (um(c, e, n, i, u)) u.stopPropagation();
      else if ((tc(e, u), n & 4 && -1 < om.indexOf(e))) {
        for (; c !== null; ) {
          var d = hi(c);
          if (
            (d !== null && Gs(d),
            (d = Xo(e, n, i, u)),
            d === null && pu(e, n, u, sl, i),
            d === c)
          )
            break;
          c = d;
        }
        c !== null && u.stopPropagation();
      } else pu(e, n, u, null, i);
    }
  }
  var sl = null;
  function Xo(e, n, i, u) {
    if (((sl = null), (e = jo(u)), (e = Hn(e)), e !== null))
      if (((n = $n(e)), n === null)) e = null;
      else if (((i = n.tag), i === 13)) {
        if (((e = Us(n)), e !== null)) return e;
        e = null;
      } else if (i === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated)
          return n.tag === 3 ? n.stateNode.containerInfo : null;
        e = null;
      } else n !== e && (e = null);
    return ((sl = e), null);
  }
  function ic(e) {
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
        switch (Gh()) {
          case Ho:
            return 1;
          case Ks:
            return 4;
          case tl:
          case Jh:
            return 16;
          case qs:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Cn = null,
    Go = null,
    cl = null;
  function lc() {
    if (cl) return cl;
    var e,
      n = Go,
      i = n.length,
      u,
      c = 'value' in Cn ? Cn.value : Cn.textContent,
      d = c.length;
    for (e = 0; e < i && n[e] === c[e]; e++);
    var y = i - e;
    for (u = 1; u <= y && n[i - u] === c[d - u]; u++);
    return (cl = c.slice(e, 1 < u ? 1 - u : void 0));
  }
  function fl(e) {
    var n = e.keyCode;
    return (
      'charCode' in e
        ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
        : (e = n),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function dl() {
    return !0;
  }
  function oc() {
    return !1;
  }
  function xt(e) {
    function n(i, u, c, d, y) {
      ((this._reactName = i),
        (this._targetInst = c),
        (this.type = u),
        (this.nativeEvent = d),
        (this.target = y),
        (this.currentTarget = null));
      for (var S in e)
        e.hasOwnProperty(S) && ((i = e[S]), (this[S] = i ? i(d) : d[S]));
      return (
        (this.isDefaultPrevented = (
          d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1
        )
          ? dl
          : oc),
        (this.isPropagationStopped = oc),
        this
      );
    }
    return (
      k(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i &&
            (i.preventDefault
              ? i.preventDefault()
              : typeof i.returnValue != 'unknown' && (i.returnValue = !1),
            (this.isDefaultPrevented = dl));
        },
        stopPropagation: function () {
          var i = this.nativeEvent;
          i &&
            (i.stopPropagation
              ? i.stopPropagation()
              : typeof i.cancelBubble != 'unknown' && (i.cancelBubble = !0),
            (this.isPropagationStopped = dl));
        },
        persist: function () {},
        isPersistent: dl,
      }),
      n
    );
  }
  var dr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Jo = xt(dr),
    ri = k({}, dr, { view: 0, detail: 0 }),
    fm = xt(ri),
    Zo,
    eu,
    ii,
    pl = k({}, ri, {
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
      getModifierState: nu,
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
          : (e !== ii &&
              (ii && e.type === 'mousemove'
                ? ((Zo = e.screenX - ii.screenX), (eu = e.screenY - ii.screenY))
                : (eu = Zo = 0),
              (ii = e)),
            Zo);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : eu;
      },
    }),
    uc = xt(pl),
    dm = k({}, pl, { dataTransfer: 0 }),
    pm = xt(dm),
    hm = k({}, ri, { relatedTarget: 0 }),
    tu = xt(hm),
    mm = k({}, dr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    gm = xt(mm),
    ym = k({}, dr, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    vm = xt(ym),
    wm = k({}, dr, { data: 0 }),
    ac = xt(wm),
    xm = {
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
    km = {
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
    Sm = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function Em(e) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(e)
      : (e = Sm[e])
        ? !!n[e]
        : !1;
  }
  function nu() {
    return Em;
  }
  var Cm = k({}, ri, {
      key: function (e) {
        if (e.key) {
          var n = xm[e.key] || e.key;
          if (n !== 'Unidentified') return n;
        }
        return e.type === 'keypress'
          ? ((e = fl(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? km[e.keyCode] || 'Unidentified'
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
      getModifierState: nu,
      charCode: function (e) {
        return e.type === 'keypress' ? fl(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? fl(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    _m = xt(Cm),
    Pm = k({}, pl, {
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
    sc = xt(Pm),
    Rm = k({}, ri, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: nu,
    }),
    Nm = xt(Rm),
    Tm = k({}, dr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Im = xt(Tm),
    Lm = k({}, pl, {
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
    zm = xt(Lm),
    Om = [9, 13, 27, 32],
    ru = p && 'CompositionEvent' in window,
    li = null;
  p && 'documentMode' in document && (li = document.documentMode);
  var Dm = p && 'TextEvent' in window && !li,
    cc = p && (!ru || (li && 8 < li && 11 >= li)),
    fc = ' ',
    dc = !1;
  function pc(e, n) {
    switch (e) {
      case 'keyup':
        return Om.indexOf(n.keyCode) !== -1;
      case 'keydown':
        return n.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function hc(e) {
    return (
      (e = e.detail),
      typeof e == 'object' && 'data' in e ? e.data : null
    );
  }
  var pr = !1;
  function Mm(e, n) {
    switch (e) {
      case 'compositionend':
        return hc(n);
      case 'keypress':
        return n.which !== 32 ? null : ((dc = !0), fc);
      case 'textInput':
        return ((e = n.data), e === fc && dc ? null : e);
      default:
        return null;
    }
  }
  function Am(e, n) {
    if (pr)
      return e === 'compositionend' || (!ru && pc(e, n))
        ? ((e = lc()), (cl = Go = Cn = null), (pr = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case 'compositionend':
        return cc && n.locale !== 'ko' ? null : n.data;
      default:
        return null;
    }
  }
  var Fm = {
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
  function mc(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === 'input' ? !!Fm[e.type] : n === 'textarea';
  }
  function gc(e, n, i, u) {
    (As(u),
      (n = vl(n, 'onChange')),
      0 < n.length &&
        ((i = new Jo('onChange', 'change', null, i, u)),
        e.push({ event: i, listeners: n })));
  }
  var oi = null,
    ui = null;
  function jm(e) {
    Dc(e, 0);
  }
  function hl(e) {
    var n = vr(e);
    if (qi(n)) return e;
  }
  function Bm(e, n) {
    if (e === 'change') return n;
  }
  var yc = !1;
  if (p) {
    var iu;
    if (p) {
      var lu = 'oninput' in document;
      if (!lu) {
        var vc = document.createElement('div');
        (vc.setAttribute('oninput', 'return;'),
          (lu = typeof vc.oninput == 'function'));
      }
      iu = lu;
    } else iu = !1;
    yc = iu && (!document.documentMode || 9 < document.documentMode);
  }
  function wc() {
    oi && (oi.detachEvent('onpropertychange', xc), (ui = oi = null));
  }
  function xc(e) {
    if (e.propertyName === 'value' && hl(ui)) {
      var n = [];
      (gc(n, ui, e, jo(e)), bs(jm, n));
    }
  }
  function bm(e, n, i) {
    e === 'focusin'
      ? (wc(), (oi = n), (ui = i), oi.attachEvent('onpropertychange', xc))
      : e === 'focusout' && wc();
  }
  function Um(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return hl(ui);
  }
  function $m(e, n) {
    if (e === 'click') return hl(n);
  }
  function Hm(e, n) {
    if (e === 'input' || e === 'change') return hl(n);
  }
  function Vm(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
  }
  var Ft = typeof Object.is == 'function' ? Object.is : Vm;
  function ai(e, n) {
    if (Ft(e, n)) return !0;
    if (
      typeof e != 'object' ||
      e === null ||
      typeof n != 'object' ||
      n === null
    )
      return !1;
    var i = Object.keys(e),
      u = Object.keys(n);
    if (i.length !== u.length) return !1;
    for (u = 0; u < i.length; u++) {
      var c = i[u];
      if (!h.call(n, c) || !Ft(e[c], n[c])) return !1;
    }
    return !0;
  }
  function kc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Sc(e, n) {
    var i = kc(e);
    e = 0;
    for (var u; i; ) {
      if (i.nodeType === 3) {
        if (((u = e + i.textContent.length), e <= n && u >= n))
          return { node: i, offset: n - e };
        e = u;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = kc(i);
    }
  }
  function Ec(e, n) {
    return e && n
      ? e === n
        ? !0
        : e && e.nodeType === 3
          ? !1
          : n && n.nodeType === 3
            ? Ec(e, n.parentNode)
            : 'contains' in e
              ? e.contains(n)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(n) & 16)
                : !1
      : !1;
  }
  function Cc() {
    for (var e = window, n = or(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof n.contentWindow.location.href == 'string';
      } catch {
        i = !1;
      }
      if (i) e = n.contentWindow;
      else break;
      n = or(e.document);
    }
    return n;
  }
  function ou(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      n &&
      ((n === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        n === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  function Wm(e) {
    var n = Cc(),
      i = e.focusedElem,
      u = e.selectionRange;
    if (
      n !== i &&
      i &&
      i.ownerDocument &&
      Ec(i.ownerDocument.documentElement, i)
    ) {
      if (u !== null && ou(i)) {
        if (
          ((n = u.start),
          (e = u.end),
          e === void 0 && (e = n),
          'selectionStart' in i)
        )
          ((i.selectionStart = n),
            (i.selectionEnd = Math.min(e, i.value.length)));
        else if (
          ((e = ((n = i.ownerDocument || document) && n.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var c = i.textContent.length,
            d = Math.min(u.start, c);
          ((u = u.end === void 0 ? d : Math.min(u.end, c)),
            !e.extend && d > u && ((c = u), (u = d), (d = c)),
            (c = Sc(i, d)));
          var y = Sc(i, u);
          c &&
            y &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== c.node ||
              e.anchorOffset !== c.offset ||
              e.focusNode !== y.node ||
              e.focusOffset !== y.offset) &&
            ((n = n.createRange()),
            n.setStart(c.node, c.offset),
            e.removeAllRanges(),
            d > u
              ? (e.addRange(n), e.extend(y.node, y.offset))
              : (n.setEnd(y.node, y.offset), e.addRange(n)));
        }
      }
      for (n = [], e = i; (e = e.parentNode); )
        e.nodeType === 1 &&
          n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof i.focus == 'function' && i.focus(), i = 0; i < n.length; i++)
        ((e = n[i]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top));
    }
  }
  var Qm = p && 'documentMode' in document && 11 >= document.documentMode,
    hr = null,
    uu = null,
    si = null,
    au = !1;
  function _c(e, n, i) {
    var u =
      i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    au ||
      hr == null ||
      hr !== or(u) ||
      ((u = hr),
      'selectionStart' in u && ou(u)
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
      (si && ai(si, u)) ||
        ((si = u),
        (u = vl(uu, 'onSelect')),
        0 < u.length &&
          ((n = new Jo('onSelect', 'select', null, n, i)),
          e.push({ event: n, listeners: u }),
          (n.target = hr))));
  }
  function ml(e, n) {
    var i = {};
    return (
      (i[e.toLowerCase()] = n.toLowerCase()),
      (i['Webkit' + e] = 'webkit' + n),
      (i['Moz' + e] = 'moz' + n),
      i
    );
  }
  var mr = {
      animationend: ml('Animation', 'AnimationEnd'),
      animationiteration: ml('Animation', 'AnimationIteration'),
      animationstart: ml('Animation', 'AnimationStart'),
      transitionend: ml('Transition', 'TransitionEnd'),
    },
    su = {},
    Pc = {};
  p &&
    ((Pc = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete mr.animationend.animation,
      delete mr.animationiteration.animation,
      delete mr.animationstart.animation),
    'TransitionEvent' in window || delete mr.transitionend.transition);
  function gl(e) {
    if (su[e]) return su[e];
    if (!mr[e]) return e;
    var n = mr[e],
      i;
    for (i in n) if (n.hasOwnProperty(i) && i in Pc) return (su[e] = n[i]);
    return e;
  }
  var Rc = gl('animationend'),
    Nc = gl('animationiteration'),
    Tc = gl('animationstart'),
    Ic = gl('transitionend'),
    Lc = new Map(),
    zc =
      'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  function _n(e, n) {
    (Lc.set(e, n), s(n, [e]));
  }
  for (var cu = 0; cu < zc.length; cu++) {
    var fu = zc[cu],
      Km = fu.toLowerCase(),
      qm = fu[0].toUpperCase() + fu.slice(1);
    _n(Km, 'on' + qm);
  }
  (_n(Rc, 'onAnimationEnd'),
    _n(Nc, 'onAnimationIteration'),
    _n(Tc, 'onAnimationStart'),
    _n('dblclick', 'onDoubleClick'),
    _n('focusin', 'onFocus'),
    _n('focusout', 'onBlur'),
    _n(Ic, 'onTransitionEnd'),
    f('onMouseEnter', ['mouseout', 'mouseover']),
    f('onMouseLeave', ['mouseout', 'mouseover']),
    f('onPointerEnter', ['pointerout', 'pointerover']),
    f('onPointerLeave', ['pointerout', 'pointerover']),
    s(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' ',
      ),
    ),
    s(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
      ),
    ),
    s('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    s(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' '),
    ),
    s(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
    ),
    s(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
    ));
  var ci =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    Ym = new Set(
      'cancel close invalid load scroll toggle'.split(' ').concat(ci),
    );
  function Oc(e, n, i) {
    var u = e.type || 'unknown-event';
    ((e.currentTarget = i), Kh(u, n, void 0, e), (e.currentTarget = null));
  }
  function Dc(e, n) {
    n = (n & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var u = e[i],
        c = u.event;
      u = u.listeners;
      e: {
        var d = void 0;
        if (n)
          for (var y = u.length - 1; 0 <= y; y--) {
            var S = u[y],
              C = S.instance,
              z = S.currentTarget;
            if (((S = S.listener), C !== d && c.isPropagationStopped()))
              break e;
            (Oc(c, S, z), (d = C));
          }
        else
          for (y = 0; y < u.length; y++) {
            if (
              ((S = u[y]),
              (C = S.instance),
              (z = S.currentTarget),
              (S = S.listener),
              C !== d && c.isPropagationStopped())
            )
              break e;
            (Oc(c, S, z), (d = C));
          }
      }
    }
    if (el) throw ((e = $o), (el = !1), ($o = null), e);
  }
  function Me(e, n) {
    var i = n[wu];
    i === void 0 && (i = n[wu] = new Set());
    var u = e + '__bubble';
    i.has(u) || (Mc(n, e, 2, !1), i.add(u));
  }
  function du(e, n, i) {
    var u = 0;
    (n && (u |= 4), Mc(i, e, u, n));
  }
  var yl = '_reactListening' + Math.random().toString(36).slice(2);
  function fi(e) {
    if (!e[yl]) {
      ((e[yl] = !0),
        o.forEach(function (i) {
          i !== 'selectionchange' && (Ym.has(i) || du(i, !1, e), du(i, !0, e));
        }));
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[yl] || ((n[yl] = !0), du('selectionchange', !1, n));
    }
  }
  function Mc(e, n, i, u) {
    switch (ic(n)) {
      case 1:
        var c = sm;
        break;
      case 4:
        c = cm;
        break;
      default:
        c = Yo;
    }
    ((i = c.bind(null, n, i, e)),
      (c = void 0),
      !Uo ||
        (n !== 'touchstart' && n !== 'touchmove' && n !== 'wheel') ||
        (c = !0),
      u
        ? c !== void 0
          ? e.addEventListener(n, i, { capture: !0, passive: c })
          : e.addEventListener(n, i, !0)
        : c !== void 0
          ? e.addEventListener(n, i, { passive: c })
          : e.addEventListener(n, i, !1));
  }
  function pu(e, n, i, u, c) {
    var d = u;
    if ((n & 1) === 0 && (n & 2) === 0 && u !== null)
      e: for (;;) {
        if (u === null) return;
        var y = u.tag;
        if (y === 3 || y === 4) {
          var S = u.stateNode.containerInfo;
          if (S === c || (S.nodeType === 8 && S.parentNode === c)) break;
          if (y === 4)
            for (y = u.return; y !== null; ) {
              var C = y.tag;
              if (
                (C === 3 || C === 4) &&
                ((C = y.stateNode.containerInfo),
                C === c || (C.nodeType === 8 && C.parentNode === c))
              )
                return;
              y = y.return;
            }
          for (; S !== null; ) {
            if (((y = Hn(S)), y === null)) return;
            if (((C = y.tag), C === 5 || C === 6)) {
              u = d = y;
              continue e;
            }
            S = S.parentNode;
          }
        }
        u = u.return;
      }
    bs(function () {
      var z = d,
        b = jo(i),
        $ = [];
      e: {
        var B = Lc.get(e);
        if (B !== void 0) {
          var X = Jo,
            re = e;
          switch (e) {
            case 'keypress':
              if (fl(i) === 0) break e;
            case 'keydown':
            case 'keyup':
              X = _m;
              break;
            case 'focusin':
              ((re = 'focus'), (X = tu));
              break;
            case 'focusout':
              ((re = 'blur'), (X = tu));
              break;
            case 'beforeblur':
            case 'afterblur':
              X = tu;
              break;
            case 'click':
              if (i.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              X = uc;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              X = pm;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              X = Nm;
              break;
            case Rc:
            case Nc:
            case Tc:
              X = gm;
              break;
            case Ic:
              X = Im;
              break;
            case 'scroll':
              X = fm;
              break;
            case 'wheel':
              X = zm;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              X = vm;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              X = sc;
          }
          var ie = (n & 4) !== 0,
            He = !ie && e === 'scroll',
            N = ie ? (B !== null ? B + 'Capture' : null) : B;
          ie = [];
          for (var _ = z, I; _ !== null; ) {
            I = _;
            var V = I.stateNode;
            if (
              (I.tag === 5 &&
                V !== null &&
                ((I = V),
                N !== null &&
                  ((V = Kr(_, N)), V != null && ie.push(di(_, V, I)))),
              He)
            )
              break;
            _ = _.return;
          }
          0 < ie.length &&
            ((B = new X(B, re, null, i, b)),
            $.push({ event: B, listeners: ie }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (
            ((B = e === 'mouseover' || e === 'pointerover'),
            (X = e === 'mouseout' || e === 'pointerout'),
            B &&
              i !== wt &&
              (re = i.relatedTarget || i.fromElement) &&
              (Hn(re) || re[ln]))
          )
            break e;
          if (
            (X || B) &&
            ((B =
              b.window === b
                ? b
                : (B = b.ownerDocument)
                  ? B.defaultView || B.parentWindow
                  : window),
            X
              ? ((re = i.relatedTarget || i.toElement),
                (X = z),
                (re = re ? Hn(re) : null),
                re !== null &&
                  ((He = $n(re)),
                  re !== He || (re.tag !== 5 && re.tag !== 6)) &&
                  (re = null))
              : ((X = null), (re = z)),
            X !== re)
          ) {
            if (
              ((ie = uc),
              (V = 'onMouseLeave'),
              (N = 'onMouseEnter'),
              (_ = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((ie = sc),
                (V = 'onPointerLeave'),
                (N = 'onPointerEnter'),
                (_ = 'pointer')),
              (He = X == null ? B : vr(X)),
              (I = re == null ? B : vr(re)),
              (B = new ie(V, _ + 'leave', X, i, b)),
              (B.target = He),
              (B.relatedTarget = I),
              (V = null),
              Hn(b) === z &&
                ((ie = new ie(N, _ + 'enter', re, i, b)),
                (ie.target = I),
                (ie.relatedTarget = He),
                (V = ie)),
              (He = V),
              X && re)
            )
              t: {
                for (ie = X, N = re, _ = 0, I = ie; I; I = gr(I)) _++;
                for (I = 0, V = N; V; V = gr(V)) I++;
                for (; 0 < _ - I; ) ((ie = gr(ie)), _--);
                for (; 0 < I - _; ) ((N = gr(N)), I--);
                for (; _--; ) {
                  if (ie === N || (N !== null && ie === N.alternate)) break t;
                  ((ie = gr(ie)), (N = gr(N)));
                }
                ie = null;
              }
            else ie = null;
            (X !== null && Ac($, B, X, ie, !1),
              re !== null && He !== null && Ac($, He, re, ie, !0));
          }
        }
        e: {
          if (
            ((B = z ? vr(z) : window),
            (X = B.nodeName && B.nodeName.toLowerCase()),
            X === 'select' || (X === 'input' && B.type === 'file'))
          )
            var le = Bm;
          else if (mc(B))
            if (yc) le = Hm;
            else {
              le = Um;
              var ce = bm;
            }
          else
            (X = B.nodeName) &&
              X.toLowerCase() === 'input' &&
              (B.type === 'checkbox' || B.type === 'radio') &&
              (le = $m);
          if (le && (le = le(e, z))) {
            gc($, le, i, b);
            break e;
          }
          (ce && ce(e, B, z),
            e === 'focusout' &&
              (ce = B._wrapperState) &&
              ce.controlled &&
              B.type === 'number' &&
              ar(B, 'number', B.value));
        }
        switch (((ce = z ? vr(z) : window), e)) {
          case 'focusin':
            (mc(ce) || ce.contentEditable === 'true') &&
              ((hr = ce), (uu = z), (si = null));
            break;
          case 'focusout':
            si = uu = hr = null;
            break;
          case 'mousedown':
            au = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((au = !1), _c($, i, b));
            break;
          case 'selectionchange':
            if (Qm) break;
          case 'keydown':
          case 'keyup':
            _c($, i, b);
        }
        var fe;
        if (ru)
          e: {
            switch (e) {
              case 'compositionstart':
                var ge = 'onCompositionStart';
                break e;
              case 'compositionend':
                ge = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                ge = 'onCompositionUpdate';
                break e;
            }
            ge = void 0;
          }
        else
          pr
            ? pc(e, i) && (ge = 'onCompositionEnd')
            : e === 'keydown' &&
              i.keyCode === 229 &&
              (ge = 'onCompositionStart');
        (ge &&
          (cc &&
            i.locale !== 'ko' &&
            (pr || ge !== 'onCompositionStart'
              ? ge === 'onCompositionEnd' && pr && (fe = lc())
              : ((Cn = b),
                (Go = 'value' in Cn ? Cn.value : Cn.textContent),
                (pr = !0))),
          (ce = vl(z, ge)),
          0 < ce.length &&
            ((ge = new ac(ge, e, null, i, b)),
            $.push({ event: ge, listeners: ce }),
            fe
              ? (ge.data = fe)
              : ((fe = hc(i)), fe !== null && (ge.data = fe)))),
          (fe = Dm ? Mm(e, i) : Am(e, i)) &&
            ((z = vl(z, 'onBeforeInput')),
            0 < z.length &&
              ((b = new ac('onBeforeInput', 'beforeinput', null, i, b)),
              $.push({ event: b, listeners: z }),
              (b.data = fe))));
      }
      Dc($, n);
    });
  }
  function di(e, n, i) {
    return { instance: e, listener: n, currentTarget: i };
  }
  function vl(e, n) {
    for (var i = n + 'Capture', u = []; e !== null; ) {
      var c = e,
        d = c.stateNode;
      (c.tag === 5 &&
        d !== null &&
        ((c = d),
        (d = Kr(e, i)),
        d != null && u.unshift(di(e, d, c)),
        (d = Kr(e, n)),
        d != null && u.push(di(e, d, c))),
        (e = e.return));
    }
    return u;
  }
  function gr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ac(e, n, i, u, c) {
    for (var d = n._reactName, y = []; i !== null && i !== u; ) {
      var S = i,
        C = S.alternate,
        z = S.stateNode;
      if (C !== null && C === u) break;
      (S.tag === 5 &&
        z !== null &&
        ((S = z),
        c
          ? ((C = Kr(i, d)), C != null && y.unshift(di(i, C, S)))
          : c || ((C = Kr(i, d)), C != null && y.push(di(i, C, S)))),
        (i = i.return));
    }
    y.length !== 0 && e.push({ event: n, listeners: y });
  }
  var Xm = /\r\n?/g,
    Gm = /\u0000|\uFFFD/g;
  function Fc(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        Xm,
        `
`,
      )
      .replace(Gm, '');
  }
  function wl(e, n, i) {
    if (((n = Fc(n)), Fc(e) !== n && i)) throw Error(l(425));
  }
  function xl() {}
  var hu = null,
    mu = null;
  function gu(e, n) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof n.children == 'string' ||
      typeof n.children == 'number' ||
      (typeof n.dangerouslySetInnerHTML == 'object' &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var yu = typeof setTimeout == 'function' ? setTimeout : void 0,
    Jm = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    jc = typeof Promise == 'function' ? Promise : void 0,
    Zm =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof jc < 'u'
          ? function (e) {
              return jc.resolve(null).then(e).catch(eg);
            }
          : yu;
  function eg(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function vu(e, n) {
    var i = n,
      u = 0;
    do {
      var c = i.nextSibling;
      if ((e.removeChild(i), c && c.nodeType === 8))
        if (((i = c.data), i === '/$')) {
          if (u === 0) {
            (e.removeChild(c), ni(n));
            return;
          }
          u--;
        } else (i !== '$' && i !== '$?' && i !== '$!') || u++;
      i = c;
    } while (i);
    ni(n);
  }
  function Pn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (((n = e.data), n === '$' || n === '$!' || n === '$?')) break;
        if (n === '/$') return null;
      }
    }
    return e;
  }
  function Bc(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === '$' || i === '$!' || i === '$?') {
          if (n === 0) return e;
          n--;
        } else i === '/$' && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var yr = Math.random().toString(36).slice(2),
    Qt = '__reactFiber$' + yr,
    pi = '__reactProps$' + yr,
    ln = '__reactContainer$' + yr,
    wu = '__reactEvents$' + yr,
    tg = '__reactListeners$' + yr,
    ng = '__reactHandles$' + yr;
  function Hn(e) {
    var n = e[Qt];
    if (n) return n;
    for (var i = e.parentNode; i; ) {
      if ((n = i[ln] || i[Qt])) {
        if (
          ((i = n.alternate),
          n.child !== null || (i !== null && i.child !== null))
        )
          for (e = Bc(e); e !== null; ) {
            if ((i = e[Qt])) return i;
            e = Bc(e);
          }
        return n;
      }
      ((e = i), (i = e.parentNode));
    }
    return null;
  }
  function hi(e) {
    return (
      (e = e[Qt] || e[ln]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function vr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(l(33));
  }
  function kl(e) {
    return e[pi] || null;
  }
  var xu = [],
    wr = -1;
  function Rn(e) {
    return { current: e };
  }
  function Ae(e) {
    0 > wr || ((e.current = xu[wr]), (xu[wr] = null), wr--);
  }
  function ze(e, n) {
    (wr++, (xu[wr] = e.current), (e.current = n));
  }
  var Nn = {},
    rt = Rn(Nn),
    ct = Rn(!1),
    Vn = Nn;
  function xr(e, n) {
    var i = e.type.contextTypes;
    if (!i) return Nn;
    var u = e.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === n)
      return u.__reactInternalMemoizedMaskedChildContext;
    var c = {},
      d;
    for (d in i) c[d] = n[d];
    return (
      u &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = n),
        (e.__reactInternalMemoizedMaskedChildContext = c)),
      c
    );
  }
  function ft(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Sl() {
    (Ae(ct), Ae(rt));
  }
  function bc(e, n, i) {
    if (rt.current !== Nn) throw Error(l(168));
    (ze(rt, n), ze(ct, i));
  }
  function Uc(e, n, i) {
    var u = e.stateNode;
    if (((n = n.childContextTypes), typeof u.getChildContext != 'function'))
      return i;
    u = u.getChildContext();
    for (var c in u) if (!(c in n)) throw Error(l(108, Re(e) || 'Unknown', c));
    return k({}, i, u);
  }
  function El(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Nn),
      (Vn = rt.current),
      ze(rt, e),
      ze(ct, ct.current),
      !0
    );
  }
  function $c(e, n, i) {
    var u = e.stateNode;
    if (!u) throw Error(l(169));
    (i
      ? ((e = Uc(e, n, Vn)),
        (u.__reactInternalMemoizedMergedChildContext = e),
        Ae(ct),
        Ae(rt),
        ze(rt, e))
      : Ae(ct),
      ze(ct, i));
  }
  var on = null,
    Cl = !1,
    ku = !1;
  function Hc(e) {
    on === null ? (on = [e]) : on.push(e);
  }
  function rg(e) {
    ((Cl = !0), Hc(e));
  }
  function Tn() {
    if (!ku && on !== null) {
      ku = !0;
      var e = 0,
        n = Le;
      try {
        var i = on;
        for (Le = 1; e < i.length; e++) {
          var u = i[e];
          do u = u(!0);
          while (u !== null);
        }
        ((on = null), (Cl = !1));
      } catch (c) {
        throw (on !== null && (on = on.slice(e + 1)), Ws(Ho, Tn), c);
      } finally {
        ((Le = n), (ku = !1));
      }
    }
    return null;
  }
  var kr = [],
    Sr = 0,
    _l = null,
    Pl = 0,
    Tt = [],
    It = 0,
    Wn = null,
    un = 1,
    an = '';
  function Qn(e, n) {
    ((kr[Sr++] = Pl), (kr[Sr++] = _l), (_l = e), (Pl = n));
  }
  function Vc(e, n, i) {
    ((Tt[It++] = un), (Tt[It++] = an), (Tt[It++] = Wn), (Wn = e));
    var u = un;
    e = an;
    var c = 32 - At(u) - 1;
    ((u &= ~(1 << c)), (i += 1));
    var d = 32 - At(n) + c;
    if (30 < d) {
      var y = c - (c % 5);
      ((d = (u & ((1 << y) - 1)).toString(32)),
        (u >>= y),
        (c -= y),
        (un = (1 << (32 - At(n) + c)) | (i << c) | u),
        (an = d + e));
    } else ((un = (1 << d) | (i << c) | u), (an = e));
  }
  function Su(e) {
    e.return !== null && (Qn(e, 1), Vc(e, 1, 0));
  }
  function Eu(e) {
    for (; e === _l; )
      ((_l = kr[--Sr]), (kr[Sr] = null), (Pl = kr[--Sr]), (kr[Sr] = null));
    for (; e === Wn; )
      ((Wn = Tt[--It]),
        (Tt[It] = null),
        (an = Tt[--It]),
        (Tt[It] = null),
        (un = Tt[--It]),
        (Tt[It] = null));
  }
  var kt = null,
    St = null,
    Fe = !1,
    jt = null;
  function Wc(e, n) {
    var i = Dt(5, null, null, 0);
    ((i.elementType = 'DELETED'),
      (i.stateNode = n),
      (i.return = e),
      (n = e.deletions),
      n === null ? ((e.deletions = [i]), (e.flags |= 16)) : n.push(i));
  }
  function Qc(e, n) {
    switch (e.tag) {
      case 5:
        var i = e.type;
        return (
          (n =
            n.nodeType !== 1 || i.toLowerCase() !== n.nodeName.toLowerCase()
              ? null
              : n),
          n !== null
            ? ((e.stateNode = n), (kt = e), (St = Pn(n.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (n = e.pendingProps === '' || n.nodeType !== 3 ? null : n),
          n !== null ? ((e.stateNode = n), (kt = e), (St = null), !0) : !1
        );
      case 13:
        return (
          (n = n.nodeType !== 8 ? null : n),
          n !== null
            ? ((i = Wn !== null ? { id: un, overflow: an } : null),
              (e.memoizedState = {
                dehydrated: n,
                treeContext: i,
                retryLane: 1073741824,
              }),
              (i = Dt(18, null, null, 0)),
              (i.stateNode = n),
              (i.return = e),
              (e.child = i),
              (kt = e),
              (St = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Cu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function _u(e) {
    if (Fe) {
      var n = St;
      if (n) {
        var i = n;
        if (!Qc(e, n)) {
          if (Cu(e)) throw Error(l(418));
          n = Pn(i.nextSibling);
          var u = kt;
          n && Qc(e, n)
            ? Wc(u, i)
            : ((e.flags = (e.flags & -4097) | 2), (Fe = !1), (kt = e));
        }
      } else {
        if (Cu(e)) throw Error(l(418));
        ((e.flags = (e.flags & -4097) | 2), (Fe = !1), (kt = e));
      }
    }
  }
  function Kc(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    kt = e;
  }
  function Rl(e) {
    if (e !== kt) return !1;
    if (!Fe) return (Kc(e), (Fe = !0), !1);
    var n;
    if (
      ((n = e.tag !== 3) &&
        !(n = e.tag !== 5) &&
        ((n = e.type),
        (n = n !== 'head' && n !== 'body' && !gu(e.type, e.memoizedProps))),
      n && (n = St))
    ) {
      if (Cu(e)) throw (qc(), Error(l(418)));
      for (; n; ) (Wc(e, n), (n = Pn(n.nextSibling)));
    }
    if ((Kc(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(l(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var i = e.data;
            if (i === '/$') {
              if (n === 0) {
                St = Pn(e.nextSibling);
                break e;
              }
              n--;
            } else (i !== '$' && i !== '$!' && i !== '$?') || n++;
          }
          e = e.nextSibling;
        }
        St = null;
      }
    } else St = kt ? Pn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function qc() {
    for (var e = St; e; ) e = Pn(e.nextSibling);
  }
  function Er() {
    ((St = kt = null), (Fe = !1));
  }
  function Pu(e) {
    jt === null ? (jt = [e]) : jt.push(e);
  }
  var ig = W.ReactCurrentBatchConfig;
  function mi(e, n, i) {
    if (
      ((e = i.ref),
      e !== null && typeof e != 'function' && typeof e != 'object')
    ) {
      if (i._owner) {
        if (((i = i._owner), i)) {
          if (i.tag !== 1) throw Error(l(309));
          var u = i.stateNode;
        }
        if (!u) throw Error(l(147, e));
        var c = u,
          d = '' + e;
        return n !== null &&
          n.ref !== null &&
          typeof n.ref == 'function' &&
          n.ref._stringRef === d
          ? n.ref
          : ((n = function (y) {
              var S = c.refs;
              y === null ? delete S[d] : (S[d] = y);
            }),
            (n._stringRef = d),
            n);
      }
      if (typeof e != 'string') throw Error(l(284));
      if (!i._owner) throw Error(l(290, e));
    }
    return e;
  }
  function Nl(e, n) {
    throw (
      (e = Object.prototype.toString.call(n)),
      Error(
        l(
          31,
          e === '[object Object]'
            ? 'object with keys {' + Object.keys(n).join(', ') + '}'
            : e,
        ),
      )
    );
  }
  function Yc(e) {
    var n = e._init;
    return n(e._payload);
  }
  function Xc(e) {
    function n(N, _) {
      if (e) {
        var I = N.deletions;
        I === null ? ((N.deletions = [_]), (N.flags |= 16)) : I.push(_);
      }
    }
    function i(N, _) {
      if (!e) return null;
      for (; _ !== null; ) (n(N, _), (_ = _.sibling));
      return null;
    }
    function u(N, _) {
      for (N = new Map(); _ !== null; )
        (_.key !== null ? N.set(_.key, _) : N.set(_.index, _), (_ = _.sibling));
      return N;
    }
    function c(N, _) {
      return ((N = Fn(N, _)), (N.index = 0), (N.sibling = null), N);
    }
    function d(N, _, I) {
      return (
        (N.index = I),
        e
          ? ((I = N.alternate),
            I !== null
              ? ((I = I.index), I < _ ? ((N.flags |= 2), _) : I)
              : ((N.flags |= 2), _))
          : ((N.flags |= 1048576), _)
      );
    }
    function y(N) {
      return (e && N.alternate === null && (N.flags |= 2), N);
    }
    function S(N, _, I, V) {
      return _ === null || _.tag !== 6
        ? ((_ = ya(I, N.mode, V)), (_.return = N), _)
        : ((_ = c(_, I)), (_.return = N), _);
    }
    function C(N, _, I, V) {
      var le = I.type;
      return le === G
        ? b(N, _, I.props.children, V, I.key)
        : _ !== null &&
            (_.elementType === le ||
              (typeof le == 'object' &&
                le !== null &&
                le.$$typeof === Ce &&
                Yc(le) === _.type))
          ? ((V = c(_, I.props)), (V.ref = mi(N, _, I)), (V.return = N), V)
          : ((V = Jl(I.type, I.key, I.props, null, N.mode, V)),
            (V.ref = mi(N, _, I)),
            (V.return = N),
            V);
    }
    function z(N, _, I, V) {
      return _ === null ||
        _.tag !== 4 ||
        _.stateNode.containerInfo !== I.containerInfo ||
        _.stateNode.implementation !== I.implementation
        ? ((_ = va(I, N.mode, V)), (_.return = N), _)
        : ((_ = c(_, I.children || [])), (_.return = N), _);
    }
    function b(N, _, I, V, le) {
      return _ === null || _.tag !== 7
        ? ((_ = er(I, N.mode, V, le)), (_.return = N), _)
        : ((_ = c(_, I)), (_.return = N), _);
    }
    function $(N, _, I) {
      if ((typeof _ == 'string' && _ !== '') || typeof _ == 'number')
        return ((_ = ya('' + _, N.mode, I)), (_.return = N), _);
      if (typeof _ == 'object' && _ !== null) {
        switch (_.$$typeof) {
          case q:
            return (
              (I = Jl(_.type, _.key, _.props, null, N.mode, I)),
              (I.ref = mi(N, null, _)),
              (I.return = N),
              I
            );
          case D:
            return ((_ = va(_, N.mode, I)), (_.return = N), _);
          case Ce:
            var V = _._init;
            return $(N, V(_._payload), I);
        }
        if (yn(_) || oe(_))
          return ((_ = er(_, N.mode, I, null)), (_.return = N), _);
        Nl(N, _);
      }
      return null;
    }
    function B(N, _, I, V) {
      var le = _ !== null ? _.key : null;
      if ((typeof I == 'string' && I !== '') || typeof I == 'number')
        return le !== null ? null : S(N, _, '' + I, V);
      if (typeof I == 'object' && I !== null) {
        switch (I.$$typeof) {
          case q:
            return I.key === le ? C(N, _, I, V) : null;
          case D:
            return I.key === le ? z(N, _, I, V) : null;
          case Ce:
            return ((le = I._init), B(N, _, le(I._payload), V));
        }
        if (yn(I) || oe(I)) return le !== null ? null : b(N, _, I, V, null);
        Nl(N, I);
      }
      return null;
    }
    function X(N, _, I, V, le) {
      if ((typeof V == 'string' && V !== '') || typeof V == 'number')
        return ((N = N.get(I) || null), S(_, N, '' + V, le));
      if (typeof V == 'object' && V !== null) {
        switch (V.$$typeof) {
          case q:
            return (
              (N = N.get(V.key === null ? I : V.key) || null),
              C(_, N, V, le)
            );
          case D:
            return (
              (N = N.get(V.key === null ? I : V.key) || null),
              z(_, N, V, le)
            );
          case Ce:
            var ce = V._init;
            return X(N, _, I, ce(V._payload), le);
        }
        if (yn(V) || oe(V))
          return ((N = N.get(I) || null), b(_, N, V, le, null));
        Nl(_, V);
      }
      return null;
    }
    function re(N, _, I, V) {
      for (
        var le = null, ce = null, fe = _, ge = (_ = 0), Ge = null;
        fe !== null && ge < I.length;
        ge++
      ) {
        fe.index > ge ? ((Ge = fe), (fe = null)) : (Ge = fe.sibling);
        var Ne = B(N, fe, I[ge], V);
        if (Ne === null) {
          fe === null && (fe = Ge);
          break;
        }
        (e && fe && Ne.alternate === null && n(N, fe),
          (_ = d(Ne, _, ge)),
          ce === null ? (le = Ne) : (ce.sibling = Ne),
          (ce = Ne),
          (fe = Ge));
      }
      if (ge === I.length) return (i(N, fe), Fe && Qn(N, ge), le);
      if (fe === null) {
        for (; ge < I.length; ge++)
          ((fe = $(N, I[ge], V)),
            fe !== null &&
              ((_ = d(fe, _, ge)),
              ce === null ? (le = fe) : (ce.sibling = fe),
              (ce = fe)));
        return (Fe && Qn(N, ge), le);
      }
      for (fe = u(N, fe); ge < I.length; ge++)
        ((Ge = X(fe, N, ge, I[ge], V)),
          Ge !== null &&
            (e &&
              Ge.alternate !== null &&
              fe.delete(Ge.key === null ? ge : Ge.key),
            (_ = d(Ge, _, ge)),
            ce === null ? (le = Ge) : (ce.sibling = Ge),
            (ce = Ge)));
      return (
        e &&
          fe.forEach(function (jn) {
            return n(N, jn);
          }),
        Fe && Qn(N, ge),
        le
      );
    }
    function ie(N, _, I, V) {
      var le = oe(I);
      if (typeof le != 'function') throw Error(l(150));
      if (((I = le.call(I)), I == null)) throw Error(l(151));
      for (
        var ce = (le = null), fe = _, ge = (_ = 0), Ge = null, Ne = I.next();
        fe !== null && !Ne.done;
        ge++, Ne = I.next()
      ) {
        fe.index > ge ? ((Ge = fe), (fe = null)) : (Ge = fe.sibling);
        var jn = B(N, fe, Ne.value, V);
        if (jn === null) {
          fe === null && (fe = Ge);
          break;
        }
        (e && fe && jn.alternate === null && n(N, fe),
          (_ = d(jn, _, ge)),
          ce === null ? (le = jn) : (ce.sibling = jn),
          (ce = jn),
          (fe = Ge));
      }
      if (Ne.done) return (i(N, fe), Fe && Qn(N, ge), le);
      if (fe === null) {
        for (; !Ne.done; ge++, Ne = I.next())
          ((Ne = $(N, Ne.value, V)),
            Ne !== null &&
              ((_ = d(Ne, _, ge)),
              ce === null ? (le = Ne) : (ce.sibling = Ne),
              (ce = Ne)));
        return (Fe && Qn(N, ge), le);
      }
      for (fe = u(N, fe); !Ne.done; ge++, Ne = I.next())
        ((Ne = X(fe, N, ge, Ne.value, V)),
          Ne !== null &&
            (e &&
              Ne.alternate !== null &&
              fe.delete(Ne.key === null ? ge : Ne.key),
            (_ = d(Ne, _, ge)),
            ce === null ? (le = Ne) : (ce.sibling = Ne),
            (ce = Ne)));
      return (
        e &&
          fe.forEach(function (Fg) {
            return n(N, Fg);
          }),
        Fe && Qn(N, ge),
        le
      );
    }
    function He(N, _, I, V) {
      if (
        (typeof I == 'object' &&
          I !== null &&
          I.type === G &&
          I.key === null &&
          (I = I.props.children),
        typeof I == 'object' && I !== null)
      ) {
        switch (I.$$typeof) {
          case q:
            e: {
              for (var le = I.key, ce = _; ce !== null; ) {
                if (ce.key === le) {
                  if (((le = I.type), le === G)) {
                    if (ce.tag === 7) {
                      (i(N, ce.sibling),
                        (_ = c(ce, I.props.children)),
                        (_.return = N),
                        (N = _));
                      break e;
                    }
                  } else if (
                    ce.elementType === le ||
                    (typeof le == 'object' &&
                      le !== null &&
                      le.$$typeof === Ce &&
                      Yc(le) === ce.type)
                  ) {
                    (i(N, ce.sibling),
                      (_ = c(ce, I.props)),
                      (_.ref = mi(N, ce, I)),
                      (_.return = N),
                      (N = _));
                    break e;
                  }
                  i(N, ce);
                  break;
                } else n(N, ce);
                ce = ce.sibling;
              }
              I.type === G
                ? ((_ = er(I.props.children, N.mode, V, I.key)),
                  (_.return = N),
                  (N = _))
                : ((V = Jl(I.type, I.key, I.props, null, N.mode, V)),
                  (V.ref = mi(N, _, I)),
                  (V.return = N),
                  (N = V));
            }
            return y(N);
          case D:
            e: {
              for (ce = I.key; _ !== null; ) {
                if (_.key === ce)
                  if (
                    _.tag === 4 &&
                    _.stateNode.containerInfo === I.containerInfo &&
                    _.stateNode.implementation === I.implementation
                  ) {
                    (i(N, _.sibling),
                      (_ = c(_, I.children || [])),
                      (_.return = N),
                      (N = _));
                    break e;
                  } else {
                    i(N, _);
                    break;
                  }
                else n(N, _);
                _ = _.sibling;
              }
              ((_ = va(I, N.mode, V)), (_.return = N), (N = _));
            }
            return y(N);
          case Ce:
            return ((ce = I._init), He(N, _, ce(I._payload), V));
        }
        if (yn(I)) return re(N, _, I, V);
        if (oe(I)) return ie(N, _, I, V);
        Nl(N, I);
      }
      return (typeof I == 'string' && I !== '') || typeof I == 'number'
        ? ((I = '' + I),
          _ !== null && _.tag === 6
            ? (i(N, _.sibling), (_ = c(_, I)), (_.return = N), (N = _))
            : (i(N, _), (_ = ya(I, N.mode, V)), (_.return = N), (N = _)),
          y(N))
        : i(N, _);
    }
    return He;
  }
  var Cr = Xc(!0),
    Gc = Xc(!1),
    Tl = Rn(null),
    Il = null,
    _r = null,
    Ru = null;
  function Nu() {
    Ru = _r = Il = null;
  }
  function Tu(e) {
    var n = Tl.current;
    (Ae(Tl), (e._currentValue = n));
  }
  function Iu(e, n, i) {
    for (; e !== null; ) {
      var u = e.alternate;
      if (
        ((e.childLanes & n) !== n
          ? ((e.childLanes |= n), u !== null && (u.childLanes |= n))
          : u !== null && (u.childLanes & n) !== n && (u.childLanes |= n),
        e === i)
      )
        break;
      e = e.return;
    }
  }
  function Pr(e, n) {
    ((Il = e),
      (Ru = _r = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & n) !== 0 && (dt = !0), (e.firstContext = null)));
  }
  function Lt(e) {
    var n = e._currentValue;
    if (Ru !== e)
      if (((e = { context: e, memoizedValue: n, next: null }), _r === null)) {
        if (Il === null) throw Error(l(308));
        ((_r = e), (Il.dependencies = { lanes: 0, firstContext: e }));
      } else _r = _r.next = e;
    return n;
  }
  var Kn = null;
  function Lu(e) {
    Kn === null ? (Kn = [e]) : Kn.push(e);
  }
  function Jc(e, n, i, u) {
    var c = n.interleaved;
    return (
      c === null ? ((i.next = i), Lu(n)) : ((i.next = c.next), (c.next = i)),
      (n.interleaved = i),
      sn(e, u)
    );
  }
  function sn(e, n) {
    e.lanes |= n;
    var i = e.alternate;
    for (i !== null && (i.lanes |= n), i = e, e = e.return; e !== null; )
      ((e.childLanes |= n),
        (i = e.alternate),
        i !== null && (i.childLanes |= n),
        (i = e),
        (e = e.return));
    return i.tag === 3 ? i.stateNode : null;
  }
  var In = !1;
  function zu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Zc(e, n) {
    ((e = e.updateQueue),
      n.updateQueue === e &&
        (n.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }));
  }
  function cn(e, n) {
    return {
      eventTime: e,
      lane: n,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Ln(e, n, i) {
    var u = e.updateQueue;
    if (u === null) return null;
    if (((u = u.shared), (Pe & 2) !== 0)) {
      var c = u.pending;
      return (
        c === null ? (n.next = n) : ((n.next = c.next), (c.next = n)),
        (u.pending = n),
        sn(e, i)
      );
    }
    return (
      (c = u.interleaved),
      c === null ? ((n.next = n), Lu(u)) : ((n.next = c.next), (c.next = n)),
      (u.interleaved = n),
      sn(e, i)
    );
  }
  function Ll(e, n, i) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (i & 4194240) !== 0))
    ) {
      var u = n.lanes;
      ((u &= e.pendingLanes), (i |= u), (n.lanes = i), Qo(e, i));
    }
  }
  function ef(e, n) {
    var i = e.updateQueue,
      u = e.alternate;
    if (u !== null && ((u = u.updateQueue), i === u)) {
      var c = null,
        d = null;
      if (((i = i.firstBaseUpdate), i !== null)) {
        do {
          var y = {
            eventTime: i.eventTime,
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          };
          (d === null ? (c = d = y) : (d = d.next = y), (i = i.next));
        } while (i !== null);
        d === null ? (c = d = n) : (d = d.next = n);
      } else c = d = n;
      ((i = {
        baseState: u.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: d,
        shared: u.shared,
        effects: u.effects,
      }),
        (e.updateQueue = i));
      return;
    }
    ((e = i.lastBaseUpdate),
      e === null ? (i.firstBaseUpdate = n) : (e.next = n),
      (i.lastBaseUpdate = n));
  }
  function zl(e, n, i, u) {
    var c = e.updateQueue;
    In = !1;
    var d = c.firstBaseUpdate,
      y = c.lastBaseUpdate,
      S = c.shared.pending;
    if (S !== null) {
      c.shared.pending = null;
      var C = S,
        z = C.next;
      ((C.next = null), y === null ? (d = z) : (y.next = z), (y = C));
      var b = e.alternate;
      b !== null &&
        ((b = b.updateQueue),
        (S = b.lastBaseUpdate),
        S !== y &&
          (S === null ? (b.firstBaseUpdate = z) : (S.next = z),
          (b.lastBaseUpdate = C)));
    }
    if (d !== null) {
      var $ = c.baseState;
      ((y = 0), (b = z = C = null), (S = d));
      do {
        var B = S.lane,
          X = S.eventTime;
        if ((u & B) === B) {
          b !== null &&
            (b = b.next =
              {
                eventTime: X,
                lane: 0,
                tag: S.tag,
                payload: S.payload,
                callback: S.callback,
                next: null,
              });
          e: {
            var re = e,
              ie = S;
            switch (((B = n), (X = i), ie.tag)) {
              case 1:
                if (((re = ie.payload), typeof re == 'function')) {
                  $ = re.call(X, $, B);
                  break e;
                }
                $ = re;
                break e;
              case 3:
                re.flags = (re.flags & -65537) | 128;
              case 0:
                if (
                  ((re = ie.payload),
                  (B = typeof re == 'function' ? re.call(X, $, B) : re),
                  B == null)
                )
                  break e;
                $ = k({}, $, B);
                break e;
              case 2:
                In = !0;
            }
          }
          S.callback !== null &&
            S.lane !== 0 &&
            ((e.flags |= 64),
            (B = c.effects),
            B === null ? (c.effects = [S]) : B.push(S));
        } else
          ((X = {
            eventTime: X,
            lane: B,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null,
          }),
            b === null ? ((z = b = X), (C = $)) : (b = b.next = X),
            (y |= B));
        if (((S = S.next), S === null)) {
          if (((S = c.shared.pending), S === null)) break;
          ((B = S),
            (S = B.next),
            (B.next = null),
            (c.lastBaseUpdate = B),
            (c.shared.pending = null));
        }
      } while (!0);
      if (
        (b === null && (C = $),
        (c.baseState = C),
        (c.firstBaseUpdate = z),
        (c.lastBaseUpdate = b),
        (n = c.shared.interleaved),
        n !== null)
      ) {
        c = n;
        do ((y |= c.lane), (c = c.next));
        while (c !== n);
      } else d === null && (c.shared.lanes = 0);
      ((Xn |= y), (e.lanes = y), (e.memoizedState = $));
    }
  }
  function tf(e, n, i) {
    if (((e = n.effects), (n.effects = null), e !== null))
      for (n = 0; n < e.length; n++) {
        var u = e[n],
          c = u.callback;
        if (c !== null) {
          if (((u.callback = null), (u = i), typeof c != 'function'))
            throw Error(l(191, c));
          c.call(u);
        }
      }
  }
  var gi = {},
    Kt = Rn(gi),
    yi = Rn(gi),
    vi = Rn(gi);
  function qn(e) {
    if (e === gi) throw Error(l(174));
    return e;
  }
  function Ou(e, n) {
    switch ((ze(vi, n), ze(yi, e), ze(Kt, gi), (e = n.nodeType), e)) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : K(null, '');
        break;
      default:
        ((e = e === 8 ? n.parentNode : n),
          (n = e.namespaceURI || null),
          (e = e.tagName),
          (n = K(n, e)));
    }
    (Ae(Kt), ze(Kt, n));
  }
  function Rr() {
    (Ae(Kt), Ae(yi), Ae(vi));
  }
  function nf(e) {
    qn(vi.current);
    var n = qn(Kt.current),
      i = K(n, e.type);
    n !== i && (ze(yi, e), ze(Kt, i));
  }
  function Du(e) {
    yi.current === e && (Ae(Kt), Ae(yi));
  }
  var je = Rn(0);
  function Ol(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var i = n.memoizedState;
        if (
          i !== null &&
          ((i = i.dehydrated), i === null || i.data === '$?' || i.data === '$!')
        )
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
    return null;
  }
  var Mu = [];
  function Au() {
    for (var e = 0; e < Mu.length; e++)
      Mu[e]._workInProgressVersionPrimary = null;
    Mu.length = 0;
  }
  var Dl = W.ReactCurrentDispatcher,
    Fu = W.ReactCurrentBatchConfig,
    Yn = 0,
    Be = null,
    Ke = null,
    Ye = null,
    Ml = !1,
    wi = !1,
    xi = 0,
    lg = 0;
  function it() {
    throw Error(l(321));
  }
  function ju(e, n) {
    if (n === null) return !1;
    for (var i = 0; i < n.length && i < e.length; i++)
      if (!Ft(e[i], n[i])) return !1;
    return !0;
  }
  function Bu(e, n, i, u, c, d) {
    if (
      ((Yn = d),
      (Be = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (Dl.current = e === null || e.memoizedState === null ? sg : cg),
      (e = i(u, c)),
      wi)
    ) {
      d = 0;
      do {
        if (((wi = !1), (xi = 0), 25 <= d)) throw Error(l(301));
        ((d += 1),
          (Ye = Ke = null),
          (n.updateQueue = null),
          (Dl.current = fg),
          (e = i(u, c)));
      } while (wi);
    }
    if (
      ((Dl.current = jl),
      (n = Ke !== null && Ke.next !== null),
      (Yn = 0),
      (Ye = Ke = Be = null),
      (Ml = !1),
      n)
    )
      throw Error(l(300));
    return e;
  }
  function bu() {
    var e = xi !== 0;
    return ((xi = 0), e);
  }
  function qt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Ye === null ? (Be.memoizedState = Ye = e) : (Ye = Ye.next = e), Ye);
  }
  function zt() {
    if (Ke === null) {
      var e = Be.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ke.next;
    var n = Ye === null ? Be.memoizedState : Ye.next;
    if (n !== null) ((Ye = n), (Ke = e));
    else {
      if (e === null) throw Error(l(310));
      ((Ke = e),
        (e = {
          memoizedState: Ke.memoizedState,
          baseState: Ke.baseState,
          baseQueue: Ke.baseQueue,
          queue: Ke.queue,
          next: null,
        }),
        Ye === null ? (Be.memoizedState = Ye = e) : (Ye = Ye.next = e));
    }
    return Ye;
  }
  function ki(e, n) {
    return typeof n == 'function' ? n(e) : n;
  }
  function Uu(e) {
    var n = zt(),
      i = n.queue;
    if (i === null) throw Error(l(311));
    i.lastRenderedReducer = e;
    var u = Ke,
      c = u.baseQueue,
      d = i.pending;
    if (d !== null) {
      if (c !== null) {
        var y = c.next;
        ((c.next = d.next), (d.next = y));
      }
      ((u.baseQueue = c = d), (i.pending = null));
    }
    if (c !== null) {
      ((d = c.next), (u = u.baseState));
      var S = (y = null),
        C = null,
        z = d;
      do {
        var b = z.lane;
        if ((Yn & b) === b)
          (C !== null &&
            (C = C.next =
              {
                lane: 0,
                action: z.action,
                hasEagerState: z.hasEagerState,
                eagerState: z.eagerState,
                next: null,
              }),
            (u = z.hasEagerState ? z.eagerState : e(u, z.action)));
        else {
          var $ = {
            lane: b,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null,
          };
          (C === null ? ((S = C = $), (y = u)) : (C = C.next = $),
            (Be.lanes |= b),
            (Xn |= b));
        }
        z = z.next;
      } while (z !== null && z !== d);
      (C === null ? (y = u) : (C.next = S),
        Ft(u, n.memoizedState) || (dt = !0),
        (n.memoizedState = u),
        (n.baseState = y),
        (n.baseQueue = C),
        (i.lastRenderedState = u));
    }
    if (((e = i.interleaved), e !== null)) {
      c = e;
      do ((d = c.lane), (Be.lanes |= d), (Xn |= d), (c = c.next));
      while (c !== e);
    } else c === null && (i.lanes = 0);
    return [n.memoizedState, i.dispatch];
  }
  function $u(e) {
    var n = zt(),
      i = n.queue;
    if (i === null) throw Error(l(311));
    i.lastRenderedReducer = e;
    var u = i.dispatch,
      c = i.pending,
      d = n.memoizedState;
    if (c !== null) {
      i.pending = null;
      var y = (c = c.next);
      do ((d = e(d, y.action)), (y = y.next));
      while (y !== c);
      (Ft(d, n.memoizedState) || (dt = !0),
        (n.memoizedState = d),
        n.baseQueue === null && (n.baseState = d),
        (i.lastRenderedState = d));
    }
    return [d, u];
  }
  function rf() {}
  function lf(e, n) {
    var i = Be,
      u = zt(),
      c = n(),
      d = !Ft(u.memoizedState, c);
    if (
      (d && ((u.memoizedState = c), (dt = !0)),
      (u = u.queue),
      Hu(af.bind(null, i, u, e), [e]),
      u.getSnapshot !== n || d || (Ye !== null && Ye.memoizedState.tag & 1))
    ) {
      if (
        ((i.flags |= 2048),
        Si(9, uf.bind(null, i, u, c, n), void 0, null),
        Xe === null)
      )
        throw Error(l(349));
      (Yn & 30) !== 0 || of(i, n, c);
    }
    return c;
  }
  function of(e, n, i) {
    ((e.flags |= 16384),
      (e = { getSnapshot: n, value: i }),
      (n = Be.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (Be.updateQueue = n),
          (n.stores = [e]))
        : ((i = n.stores), i === null ? (n.stores = [e]) : i.push(e)));
  }
  function uf(e, n, i, u) {
    ((n.value = i), (n.getSnapshot = u), sf(n) && cf(e));
  }
  function af(e, n, i) {
    return i(function () {
      sf(n) && cf(e);
    });
  }
  function sf(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var i = n();
      return !Ft(e, i);
    } catch {
      return !0;
    }
  }
  function cf(e) {
    var n = sn(e, 1);
    n !== null && $t(n, e, 1, -1);
  }
  function ff(e) {
    var n = qt();
    return (
      typeof e == 'function' && (e = e()),
      (n.memoizedState = n.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ki,
        lastRenderedState: e,
      }),
      (n.queue = e),
      (e = e.dispatch = ag.bind(null, Be, e)),
      [n.memoizedState, e]
    );
  }
  function Si(e, n, i, u) {
    return (
      (e = { tag: e, create: n, destroy: i, deps: u, next: null }),
      (n = Be.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (Be.updateQueue = n),
          (n.lastEffect = e.next = e))
        : ((i = n.lastEffect),
          i === null
            ? (n.lastEffect = e.next = e)
            : ((u = i.next), (i.next = e), (e.next = u), (n.lastEffect = e))),
      e
    );
  }
  function df() {
    return zt().memoizedState;
  }
  function Al(e, n, i, u) {
    var c = qt();
    ((Be.flags |= e),
      (c.memoizedState = Si(1 | n, i, void 0, u === void 0 ? null : u)));
  }
  function Fl(e, n, i, u) {
    var c = zt();
    u = u === void 0 ? null : u;
    var d = void 0;
    if (Ke !== null) {
      var y = Ke.memoizedState;
      if (((d = y.destroy), u !== null && ju(u, y.deps))) {
        c.memoizedState = Si(n, i, d, u);
        return;
      }
    }
    ((Be.flags |= e), (c.memoizedState = Si(1 | n, i, d, u)));
  }
  function pf(e, n) {
    return Al(8390656, 8, e, n);
  }
  function Hu(e, n) {
    return Fl(2048, 8, e, n);
  }
  function hf(e, n) {
    return Fl(4, 2, e, n);
  }
  function mf(e, n) {
    return Fl(4, 4, e, n);
  }
  function gf(e, n) {
    if (typeof n == 'function')
      return (
        (e = e()),
        n(e),
        function () {
          n(null);
        }
      );
    if (n != null)
      return (
        (e = e()),
        (n.current = e),
        function () {
          n.current = null;
        }
      );
  }
  function yf(e, n, i) {
    return (
      (i = i != null ? i.concat([e]) : null),
      Fl(4, 4, gf.bind(null, n, e), i)
    );
  }
  function Vu() {}
  function vf(e, n) {
    var i = zt();
    n = n === void 0 ? null : n;
    var u = i.memoizedState;
    return u !== null && n !== null && ju(n, u[1])
      ? u[0]
      : ((i.memoizedState = [e, n]), e);
  }
  function wf(e, n) {
    var i = zt();
    n = n === void 0 ? null : n;
    var u = i.memoizedState;
    return u !== null && n !== null && ju(n, u[1])
      ? u[0]
      : ((e = e()), (i.memoizedState = [e, n]), e);
  }
  function xf(e, n, i) {
    return (Yn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (dt = !0)), (e.memoizedState = i))
      : (Ft(i, n) ||
          ((i = Ys()), (Be.lanes |= i), (Xn |= i), (e.baseState = !0)),
        n);
  }
  function og(e, n) {
    var i = Le;
    ((Le = i !== 0 && 4 > i ? i : 4), e(!0));
    var u = Fu.transition;
    Fu.transition = {};
    try {
      (e(!1), n());
    } finally {
      ((Le = i), (Fu.transition = u));
    }
  }
  function kf() {
    return zt().memoizedState;
  }
  function ug(e, n, i) {
    var u = Mn(e);
    if (
      ((i = {
        lane: u,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Sf(e))
    )
      Ef(n, i);
    else if (((i = Jc(e, n, i, u)), i !== null)) {
      var c = st();
      ($t(i, e, u, c), Cf(i, n, u));
    }
  }
  function ag(e, n, i) {
    var u = Mn(e),
      c = {
        lane: u,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Sf(e)) Ef(n, c);
    else {
      var d = e.alternate;
      if (
        e.lanes === 0 &&
        (d === null || d.lanes === 0) &&
        ((d = n.lastRenderedReducer), d !== null)
      )
        try {
          var y = n.lastRenderedState,
            S = d(y, i);
          if (((c.hasEagerState = !0), (c.eagerState = S), Ft(S, y))) {
            var C = n.interleaved;
            (C === null
              ? ((c.next = c), Lu(n))
              : ((c.next = C.next), (C.next = c)),
              (n.interleaved = c));
            return;
          }
        } catch {
        } finally {
        }
      ((i = Jc(e, n, c, u)),
        i !== null && ((c = st()), $t(i, e, u, c), Cf(i, n, u)));
    }
  }
  function Sf(e) {
    var n = e.alternate;
    return e === Be || (n !== null && n === Be);
  }
  function Ef(e, n) {
    wi = Ml = !0;
    var i = e.pending;
    (i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)),
      (e.pending = n));
  }
  function Cf(e, n, i) {
    if ((i & 4194240) !== 0) {
      var u = n.lanes;
      ((u &= e.pendingLanes), (i |= u), (n.lanes = i), Qo(e, i));
    }
  }
  var jl = {
      readContext: Lt,
      useCallback: it,
      useContext: it,
      useEffect: it,
      useImperativeHandle: it,
      useInsertionEffect: it,
      useLayoutEffect: it,
      useMemo: it,
      useReducer: it,
      useRef: it,
      useState: it,
      useDebugValue: it,
      useDeferredValue: it,
      useTransition: it,
      useMutableSource: it,
      useSyncExternalStore: it,
      useId: it,
      unstable_isNewReconciler: !1,
    },
    sg = {
      readContext: Lt,
      useCallback: function (e, n) {
        return ((qt().memoizedState = [e, n === void 0 ? null : n]), e);
      },
      useContext: Lt,
      useEffect: pf,
      useImperativeHandle: function (e, n, i) {
        return (
          (i = i != null ? i.concat([e]) : null),
          Al(4194308, 4, gf.bind(null, n, e), i)
        );
      },
      useLayoutEffect: function (e, n) {
        return Al(4194308, 4, e, n);
      },
      useInsertionEffect: function (e, n) {
        return Al(4, 2, e, n);
      },
      useMemo: function (e, n) {
        var i = qt();
        return (
          (n = n === void 0 ? null : n),
          (e = e()),
          (i.memoizedState = [e, n]),
          e
        );
      },
      useReducer: function (e, n, i) {
        var u = qt();
        return (
          (n = i !== void 0 ? i(n) : n),
          (u.memoizedState = u.baseState = n),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (u.queue = e),
          (e = e.dispatch = ug.bind(null, Be, e)),
          [u.memoizedState, e]
        );
      },
      useRef: function (e) {
        var n = qt();
        return ((e = { current: e }), (n.memoizedState = e));
      },
      useState: ff,
      useDebugValue: Vu,
      useDeferredValue: function (e) {
        return (qt().memoizedState = e);
      },
      useTransition: function () {
        var e = ff(!1),
          n = e[0];
        return ((e = og.bind(null, e[1])), (qt().memoizedState = e), [n, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, n, i) {
        var u = Be,
          c = qt();
        if (Fe) {
          if (i === void 0) throw Error(l(407));
          i = i();
        } else {
          if (((i = n()), Xe === null)) throw Error(l(349));
          (Yn & 30) !== 0 || of(u, n, i);
        }
        c.memoizedState = i;
        var d = { value: i, getSnapshot: n };
        return (
          (c.queue = d),
          pf(af.bind(null, u, d, e), [e]),
          (u.flags |= 2048),
          Si(9, uf.bind(null, u, d, i, n), void 0, null),
          i
        );
      },
      useId: function () {
        var e = qt(),
          n = Xe.identifierPrefix;
        if (Fe) {
          var i = an,
            u = un;
          ((i = (u & ~(1 << (32 - At(u) - 1))).toString(32) + i),
            (n = ':' + n + 'R' + i),
            (i = xi++),
            0 < i && (n += 'H' + i.toString(32)),
            (n += ':'));
        } else ((i = lg++), (n = ':' + n + 'r' + i.toString(32) + ':'));
        return (e.memoizedState = n);
      },
      unstable_isNewReconciler: !1,
    },
    cg = {
      readContext: Lt,
      useCallback: vf,
      useContext: Lt,
      useEffect: Hu,
      useImperativeHandle: yf,
      useInsertionEffect: hf,
      useLayoutEffect: mf,
      useMemo: wf,
      useReducer: Uu,
      useRef: df,
      useState: function () {
        return Uu(ki);
      },
      useDebugValue: Vu,
      useDeferredValue: function (e) {
        var n = zt();
        return xf(n, Ke.memoizedState, e);
      },
      useTransition: function () {
        var e = Uu(ki)[0],
          n = zt().memoizedState;
        return [e, n];
      },
      useMutableSource: rf,
      useSyncExternalStore: lf,
      useId: kf,
      unstable_isNewReconciler: !1,
    },
    fg = {
      readContext: Lt,
      useCallback: vf,
      useContext: Lt,
      useEffect: Hu,
      useImperativeHandle: yf,
      useInsertionEffect: hf,
      useLayoutEffect: mf,
      useMemo: wf,
      useReducer: $u,
      useRef: df,
      useState: function () {
        return $u(ki);
      },
      useDebugValue: Vu,
      useDeferredValue: function (e) {
        var n = zt();
        return Ke === null ? (n.memoizedState = e) : xf(n, Ke.memoizedState, e);
      },
      useTransition: function () {
        var e = $u(ki)[0],
          n = zt().memoizedState;
        return [e, n];
      },
      useMutableSource: rf,
      useSyncExternalStore: lf,
      useId: kf,
      unstable_isNewReconciler: !1,
    };
  function Bt(e, n) {
    if (e && e.defaultProps) {
      ((n = k({}, n)), (e = e.defaultProps));
      for (var i in e) n[i] === void 0 && (n[i] = e[i]);
      return n;
    }
    return n;
  }
  function Wu(e, n, i, u) {
    ((n = e.memoizedState),
      (i = i(u, n)),
      (i = i == null ? n : k({}, n, i)),
      (e.memoizedState = i),
      e.lanes === 0 && (e.updateQueue.baseState = i));
  }
  var Bl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? $n(e) === e : !1;
    },
    enqueueSetState: function (e, n, i) {
      e = e._reactInternals;
      var u = st(),
        c = Mn(e),
        d = cn(u, c);
      ((d.payload = n),
        i != null && (d.callback = i),
        (n = Ln(e, d, c)),
        n !== null && ($t(n, e, c, u), Ll(n, e, c)));
    },
    enqueueReplaceState: function (e, n, i) {
      e = e._reactInternals;
      var u = st(),
        c = Mn(e),
        d = cn(u, c);
      ((d.tag = 1),
        (d.payload = n),
        i != null && (d.callback = i),
        (n = Ln(e, d, c)),
        n !== null && ($t(n, e, c, u), Ll(n, e, c)));
    },
    enqueueForceUpdate: function (e, n) {
      e = e._reactInternals;
      var i = st(),
        u = Mn(e),
        c = cn(i, u);
      ((c.tag = 2),
        n != null && (c.callback = n),
        (n = Ln(e, c, u)),
        n !== null && ($t(n, e, u, i), Ll(n, e, u)));
    },
  };
  function _f(e, n, i, u, c, d, y) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(u, d, y)
        : n.prototype && n.prototype.isPureReactComponent
          ? !ai(i, u) || !ai(c, d)
          : !0
    );
  }
  function Pf(e, n, i) {
    var u = !1,
      c = Nn,
      d = n.contextType;
    return (
      typeof d == 'object' && d !== null
        ? (d = Lt(d))
        : ((c = ft(n) ? Vn : rt.current),
          (u = n.contextTypes),
          (d = (u = u != null) ? xr(e, c) : Nn)),
      (n = new n(i, d)),
      (e.memoizedState =
        n.state !== null && n.state !== void 0 ? n.state : null),
      (n.updater = Bl),
      (e.stateNode = n),
      (n._reactInternals = e),
      u &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = c),
        (e.__reactInternalMemoizedMaskedChildContext = d)),
      n
    );
  }
  function Rf(e, n, i, u) {
    ((e = n.state),
      typeof n.componentWillReceiveProps == 'function' &&
        n.componentWillReceiveProps(i, u),
      typeof n.UNSAFE_componentWillReceiveProps == 'function' &&
        n.UNSAFE_componentWillReceiveProps(i, u),
      n.state !== e && Bl.enqueueReplaceState(n, n.state, null));
  }
  function Qu(e, n, i, u) {
    var c = e.stateNode;
    ((c.props = i), (c.state = e.memoizedState), (c.refs = {}), zu(e));
    var d = n.contextType;
    (typeof d == 'object' && d !== null
      ? (c.context = Lt(d))
      : ((d = ft(n) ? Vn : rt.current), (c.context = xr(e, d))),
      (c.state = e.memoizedState),
      (d = n.getDerivedStateFromProps),
      typeof d == 'function' && (Wu(e, n, d, i), (c.state = e.memoizedState)),
      typeof n.getDerivedStateFromProps == 'function' ||
        typeof c.getSnapshotBeforeUpdate == 'function' ||
        (typeof c.UNSAFE_componentWillMount != 'function' &&
          typeof c.componentWillMount != 'function') ||
        ((n = c.state),
        typeof c.componentWillMount == 'function' && c.componentWillMount(),
        typeof c.UNSAFE_componentWillMount == 'function' &&
          c.UNSAFE_componentWillMount(),
        n !== c.state && Bl.enqueueReplaceState(c, c.state, null),
        zl(e, i, c, u),
        (c.state = e.memoizedState)),
      typeof c.componentDidMount == 'function' && (e.flags |= 4194308));
  }
  function Nr(e, n) {
    try {
      var i = '',
        u = n;
      do ((i += xe(u)), (u = u.return));
      while (u);
      var c = i;
    } catch (d) {
      c =
        `
Error generating stack: ` +
        d.message +
        `
` +
        d.stack;
    }
    return { value: e, source: n, stack: c, digest: null };
  }
  function Ku(e, n, i) {
    return { value: e, source: null, stack: i ?? null, digest: n ?? null };
  }
  function qu(e, n) {
    try {
      console.error(n.value);
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  var dg = typeof WeakMap == 'function' ? WeakMap : Map;
  function Nf(e, n, i) {
    ((i = cn(-1, i)), (i.tag = 3), (i.payload = { element: null }));
    var u = n.value;
    return (
      (i.callback = function () {
        (Ql || ((Ql = !0), (sa = u)), qu(e, n));
      }),
      i
    );
  }
  function Tf(e, n, i) {
    ((i = cn(-1, i)), (i.tag = 3));
    var u = e.type.getDerivedStateFromError;
    if (typeof u == 'function') {
      var c = n.value;
      ((i.payload = function () {
        return u(c);
      }),
        (i.callback = function () {
          qu(e, n);
        }));
    }
    var d = e.stateNode;
    return (
      d !== null &&
        typeof d.componentDidCatch == 'function' &&
        (i.callback = function () {
          (qu(e, n),
            typeof u != 'function' &&
              (On === null ? (On = new Set([this])) : On.add(this)));
          var y = n.stack;
          this.componentDidCatch(n.value, {
            componentStack: y !== null ? y : '',
          });
        }),
      i
    );
  }
  function If(e, n, i) {
    var u = e.pingCache;
    if (u === null) {
      u = e.pingCache = new dg();
      var c = new Set();
      u.set(n, c);
    } else ((c = u.get(n)), c === void 0 && ((c = new Set()), u.set(n, c)));
    c.has(i) || (c.add(i), (e = Pg.bind(null, e, n, i)), n.then(e, e));
  }
  function Lf(e) {
    do {
      var n;
      if (
        ((n = e.tag === 13) &&
          ((n = e.memoizedState),
          (n = n !== null ? n.dehydrated !== null : !0)),
        n)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function zf(e, n, i, u, c) {
    return (e.mode & 1) === 0
      ? (e === n
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (i.flags |= 131072),
            (i.flags &= -52805),
            i.tag === 1 &&
              (i.alternate === null
                ? (i.tag = 17)
                : ((n = cn(-1, 1)), (n.tag = 2), Ln(i, n, 1))),
            (i.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = c), e);
  }
  var pg = W.ReactCurrentOwner,
    dt = !1;
  function at(e, n, i, u) {
    n.child = e === null ? Gc(n, null, i, u) : Cr(n, e.child, i, u);
  }
  function Of(e, n, i, u, c) {
    i = i.render;
    var d = n.ref;
    return (
      Pr(n, c),
      (u = Bu(e, n, i, u, d, c)),
      (i = bu()),
      e !== null && !dt
        ? ((n.updateQueue = e.updateQueue),
          (n.flags &= -2053),
          (e.lanes &= ~c),
          fn(e, n, c))
        : (Fe && i && Su(n), (n.flags |= 1), at(e, n, u, c), n.child)
    );
  }
  function Df(e, n, i, u, c) {
    if (e === null) {
      var d = i.type;
      return typeof d == 'function' &&
        !ga(d) &&
        d.defaultProps === void 0 &&
        i.compare === null &&
        i.defaultProps === void 0
        ? ((n.tag = 15), (n.type = d), Mf(e, n, d, u, c))
        : ((e = Jl(i.type, null, u, n, n.mode, c)),
          (e.ref = n.ref),
          (e.return = n),
          (n.child = e));
    }
    if (((d = e.child), (e.lanes & c) === 0)) {
      var y = d.memoizedProps;
      if (
        ((i = i.compare), (i = i !== null ? i : ai), i(y, u) && e.ref === n.ref)
      )
        return fn(e, n, c);
    }
    return (
      (n.flags |= 1),
      (e = Fn(d, u)),
      (e.ref = n.ref),
      (e.return = n),
      (n.child = e)
    );
  }
  function Mf(e, n, i, u, c) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (ai(d, u) && e.ref === n.ref)
        if (((dt = !1), (n.pendingProps = u = d), (e.lanes & c) !== 0))
          (e.flags & 131072) !== 0 && (dt = !0);
        else return ((n.lanes = e.lanes), fn(e, n, c));
    }
    return Yu(e, n, i, u, c);
  }
  function Af(e, n, i) {
    var u = n.pendingProps,
      c = u.children,
      d = e !== null ? e.memoizedState : null;
    if (u.mode === 'hidden')
      if ((n.mode & 1) === 0)
        ((n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          ze(Ir, Et),
          (Et |= i));
      else {
        if ((i & 1073741824) === 0)
          return (
            (e = d !== null ? d.baseLanes | i : i),
            (n.lanes = n.childLanes = 1073741824),
            (n.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (n.updateQueue = null),
            ze(Ir, Et),
            (Et |= e),
            null
          );
        ((n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (u = d !== null ? d.baseLanes : i),
          ze(Ir, Et),
          (Et |= u));
      }
    else
      (d !== null ? ((u = d.baseLanes | i), (n.memoizedState = null)) : (u = i),
        ze(Ir, Et),
        (Et |= u));
    return (at(e, n, c, i), n.child);
  }
  function Ff(e, n) {
    var i = n.ref;
    ((e === null && i !== null) || (e !== null && e.ref !== i)) &&
      ((n.flags |= 512), (n.flags |= 2097152));
  }
  function Yu(e, n, i, u, c) {
    var d = ft(i) ? Vn : rt.current;
    return (
      (d = xr(n, d)),
      Pr(n, c),
      (i = Bu(e, n, i, u, d, c)),
      (u = bu()),
      e !== null && !dt
        ? ((n.updateQueue = e.updateQueue),
          (n.flags &= -2053),
          (e.lanes &= ~c),
          fn(e, n, c))
        : (Fe && u && Su(n), (n.flags |= 1), at(e, n, i, c), n.child)
    );
  }
  function jf(e, n, i, u, c) {
    if (ft(i)) {
      var d = !0;
      El(n);
    } else d = !1;
    if ((Pr(n, c), n.stateNode === null))
      (Ul(e, n), Pf(n, i, u), Qu(n, i, u, c), (u = !0));
    else if (e === null) {
      var y = n.stateNode,
        S = n.memoizedProps;
      y.props = S;
      var C = y.context,
        z = i.contextType;
      typeof z == 'object' && z !== null
        ? (z = Lt(z))
        : ((z = ft(i) ? Vn : rt.current), (z = xr(n, z)));
      var b = i.getDerivedStateFromProps,
        $ =
          typeof b == 'function' ||
          typeof y.getSnapshotBeforeUpdate == 'function';
      ($ ||
        (typeof y.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof y.componentWillReceiveProps != 'function') ||
        ((S !== u || C !== z) && Rf(n, y, u, z)),
        (In = !1));
      var B = n.memoizedState;
      ((y.state = B),
        zl(n, u, y, c),
        (C = n.memoizedState),
        S !== u || B !== C || ct.current || In
          ? (typeof b == 'function' && (Wu(n, i, b, u), (C = n.memoizedState)),
            (S = In || _f(n, i, S, u, B, C, z))
              ? ($ ||
                  (typeof y.UNSAFE_componentWillMount != 'function' &&
                    typeof y.componentWillMount != 'function') ||
                  (typeof y.componentWillMount == 'function' &&
                    y.componentWillMount(),
                  typeof y.UNSAFE_componentWillMount == 'function' &&
                    y.UNSAFE_componentWillMount()),
                typeof y.componentDidMount == 'function' &&
                  (n.flags |= 4194308))
              : (typeof y.componentDidMount == 'function' &&
                  (n.flags |= 4194308),
                (n.memoizedProps = u),
                (n.memoizedState = C)),
            (y.props = u),
            (y.state = C),
            (y.context = z),
            (u = S))
          : (typeof y.componentDidMount == 'function' && (n.flags |= 4194308),
            (u = !1)));
    } else {
      ((y = n.stateNode),
        Zc(e, n),
        (S = n.memoizedProps),
        (z = n.type === n.elementType ? S : Bt(n.type, S)),
        (y.props = z),
        ($ = n.pendingProps),
        (B = y.context),
        (C = i.contextType),
        typeof C == 'object' && C !== null
          ? (C = Lt(C))
          : ((C = ft(i) ? Vn : rt.current), (C = xr(n, C))));
      var X = i.getDerivedStateFromProps;
      ((b =
        typeof X == 'function' ||
        typeof y.getSnapshotBeforeUpdate == 'function') ||
        (typeof y.UNSAFE_componentWillReceiveProps != 'function' &&
          typeof y.componentWillReceiveProps != 'function') ||
        ((S !== $ || B !== C) && Rf(n, y, u, C)),
        (In = !1),
        (B = n.memoizedState),
        (y.state = B),
        zl(n, u, y, c));
      var re = n.memoizedState;
      S !== $ || B !== re || ct.current || In
        ? (typeof X == 'function' && (Wu(n, i, X, u), (re = n.memoizedState)),
          (z = In || _f(n, i, z, u, B, re, C) || !1)
            ? (b ||
                (typeof y.UNSAFE_componentWillUpdate != 'function' &&
                  typeof y.componentWillUpdate != 'function') ||
                (typeof y.componentWillUpdate == 'function' &&
                  y.componentWillUpdate(u, re, C),
                typeof y.UNSAFE_componentWillUpdate == 'function' &&
                  y.UNSAFE_componentWillUpdate(u, re, C)),
              typeof y.componentDidUpdate == 'function' && (n.flags |= 4),
              typeof y.getSnapshotBeforeUpdate == 'function' &&
                (n.flags |= 1024))
            : (typeof y.componentDidUpdate != 'function' ||
                (S === e.memoizedProps && B === e.memoizedState) ||
                (n.flags |= 4),
              typeof y.getSnapshotBeforeUpdate != 'function' ||
                (S === e.memoizedProps && B === e.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = u),
              (n.memoizedState = re)),
          (y.props = u),
          (y.state = re),
          (y.context = C),
          (u = z))
        : (typeof y.componentDidUpdate != 'function' ||
            (S === e.memoizedProps && B === e.memoizedState) ||
            (n.flags |= 4),
          typeof y.getSnapshotBeforeUpdate != 'function' ||
            (S === e.memoizedProps && B === e.memoizedState) ||
            (n.flags |= 1024),
          (u = !1));
    }
    return Xu(e, n, i, u, d, c);
  }
  function Xu(e, n, i, u, c, d) {
    Ff(e, n);
    var y = (n.flags & 128) !== 0;
    if (!u && !y) return (c && $c(n, i, !1), fn(e, n, d));
    ((u = n.stateNode), (pg.current = n));
    var S =
      y && typeof i.getDerivedStateFromError != 'function' ? null : u.render();
    return (
      (n.flags |= 1),
      e !== null && y
        ? ((n.child = Cr(n, e.child, null, d)), (n.child = Cr(n, null, S, d)))
        : at(e, n, S, d),
      (n.memoizedState = u.state),
      c && $c(n, i, !0),
      n.child
    );
  }
  function Bf(e) {
    var n = e.stateNode;
    (n.pendingContext
      ? bc(e, n.pendingContext, n.pendingContext !== n.context)
      : n.context && bc(e, n.context, !1),
      Ou(e, n.containerInfo));
  }
  function bf(e, n, i, u, c) {
    return (Er(), Pu(c), (n.flags |= 256), at(e, n, i, u), n.child);
  }
  var Gu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ju(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Uf(e, n, i) {
    var u = n.pendingProps,
      c = je.current,
      d = !1,
      y = (n.flags & 128) !== 0,
      S;
    if (
      ((S = y) ||
        (S = e !== null && e.memoizedState === null ? !1 : (c & 2) !== 0),
      S
        ? ((d = !0), (n.flags &= -129))
        : (e === null || e.memoizedState !== null) && (c |= 1),
      ze(je, c & 1),
      e === null)
    )
      return (
        _u(n),
        (e = n.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((n.mode & 1) === 0
              ? (n.lanes = 1)
              : e.data === '$!'
                ? (n.lanes = 8)
                : (n.lanes = 1073741824),
            null)
          : ((y = u.children),
            (e = u.fallback),
            d
              ? ((u = n.mode),
                (d = n.child),
                (y = { mode: 'hidden', children: y }),
                (u & 1) === 0 && d !== null
                  ? ((d.childLanes = 0), (d.pendingProps = y))
                  : (d = Zl(y, u, 0, null)),
                (e = er(e, u, i, null)),
                (d.return = n),
                (e.return = n),
                (d.sibling = e),
                (n.child = d),
                (n.child.memoizedState = Ju(i)),
                (n.memoizedState = Gu),
                e)
              : Zu(n, y))
      );
    if (((c = e.memoizedState), c !== null && ((S = c.dehydrated), S !== null)))
      return hg(e, n, y, u, S, c, i);
    if (d) {
      ((d = u.fallback), (y = n.mode), (c = e.child), (S = c.sibling));
      var C = { mode: 'hidden', children: u.children };
      return (
        (y & 1) === 0 && n.child !== c
          ? ((u = n.child),
            (u.childLanes = 0),
            (u.pendingProps = C),
            (n.deletions = null))
          : ((u = Fn(c, C)), (u.subtreeFlags = c.subtreeFlags & 14680064)),
        S !== null ? (d = Fn(S, d)) : ((d = er(d, y, i, null)), (d.flags |= 2)),
        (d.return = n),
        (u.return = n),
        (u.sibling = d),
        (n.child = u),
        (u = d),
        (d = n.child),
        (y = e.child.memoizedState),
        (y =
          y === null
            ? Ju(i)
            : {
                baseLanes: y.baseLanes | i,
                cachePool: null,
                transitions: y.transitions,
              }),
        (d.memoizedState = y),
        (d.childLanes = e.childLanes & ~i),
        (n.memoizedState = Gu),
        u
      );
    }
    return (
      (d = e.child),
      (e = d.sibling),
      (u = Fn(d, { mode: 'visible', children: u.children })),
      (n.mode & 1) === 0 && (u.lanes = i),
      (u.return = n),
      (u.sibling = null),
      e !== null &&
        ((i = n.deletions),
        i === null ? ((n.deletions = [e]), (n.flags |= 16)) : i.push(e)),
      (n.child = u),
      (n.memoizedState = null),
      u
    );
  }
  function Zu(e, n) {
    return (
      (n = Zl({ mode: 'visible', children: n }, e.mode, 0, null)),
      (n.return = e),
      (e.child = n)
    );
  }
  function bl(e, n, i, u) {
    return (
      u !== null && Pu(u),
      Cr(n, e.child, null, i),
      (e = Zu(n, n.pendingProps.children)),
      (e.flags |= 2),
      (n.memoizedState = null),
      e
    );
  }
  function hg(e, n, i, u, c, d, y) {
    if (i)
      return n.flags & 256
        ? ((n.flags &= -257), (u = Ku(Error(l(422)))), bl(e, n, y, u))
        : n.memoizedState !== null
          ? ((n.child = e.child), (n.flags |= 128), null)
          : ((d = u.fallback),
            (c = n.mode),
            (u = Zl({ mode: 'visible', children: u.children }, c, 0, null)),
            (d = er(d, c, y, null)),
            (d.flags |= 2),
            (u.return = n),
            (d.return = n),
            (u.sibling = d),
            (n.child = u),
            (n.mode & 1) !== 0 && Cr(n, e.child, null, y),
            (n.child.memoizedState = Ju(y)),
            (n.memoizedState = Gu),
            d);
    if ((n.mode & 1) === 0) return bl(e, n, y, null);
    if (c.data === '$!') {
      if (((u = c.nextSibling && c.nextSibling.dataset), u)) var S = u.dgst;
      return (
        (u = S),
        (d = Error(l(419))),
        (u = Ku(d, u, void 0)),
        bl(e, n, y, u)
      );
    }
    if (((S = (y & e.childLanes) !== 0), dt || S)) {
      if (((u = Xe), u !== null)) {
        switch (y & -y) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
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
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        ((c = (c & (u.suspendedLanes | y)) !== 0 ? 0 : c),
          c !== 0 &&
            c !== d.retryLane &&
            ((d.retryLane = c), sn(e, c), $t(u, e, c, -1)));
      }
      return (ma(), (u = Ku(Error(l(421)))), bl(e, n, y, u));
    }
    return c.data === '$?'
      ? ((n.flags |= 128),
        (n.child = e.child),
        (n = Rg.bind(null, e)),
        (c._reactRetry = n),
        null)
      : ((e = d.treeContext),
        (St = Pn(c.nextSibling)),
        (kt = n),
        (Fe = !0),
        (jt = null),
        e !== null &&
          ((Tt[It++] = un),
          (Tt[It++] = an),
          (Tt[It++] = Wn),
          (un = e.id),
          (an = e.overflow),
          (Wn = n)),
        (n = Zu(n, u.children)),
        (n.flags |= 4096),
        n);
  }
  function $f(e, n, i) {
    e.lanes |= n;
    var u = e.alternate;
    (u !== null && (u.lanes |= n), Iu(e.return, n, i));
  }
  function ea(e, n, i, u, c) {
    var d = e.memoizedState;
    d === null
      ? (e.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: u,
          tail: i,
          tailMode: c,
        })
      : ((d.isBackwards = n),
        (d.rendering = null),
        (d.renderingStartTime = 0),
        (d.last = u),
        (d.tail = i),
        (d.tailMode = c));
  }
  function Hf(e, n, i) {
    var u = n.pendingProps,
      c = u.revealOrder,
      d = u.tail;
    if ((at(e, n, u.children, i), (u = je.current), (u & 2) !== 0))
      ((u = (u & 1) | 2), (n.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && $f(e, i, n);
          else if (e.tag === 19) $f(e, i, n);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === n) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      u &= 1;
    }
    if ((ze(je, u), (n.mode & 1) === 0)) n.memoizedState = null;
    else
      switch (c) {
        case 'forwards':
          for (i = n.child, c = null; i !== null; )
            ((e = i.alternate),
              e !== null && Ol(e) === null && (c = i),
              (i = i.sibling));
          ((i = c),
            i === null
              ? ((c = n.child), (n.child = null))
              : ((c = i.sibling), (i.sibling = null)),
            ea(n, !1, c, i, d));
          break;
        case 'backwards':
          for (i = null, c = n.child, n.child = null; c !== null; ) {
            if (((e = c.alternate), e !== null && Ol(e) === null)) {
              n.child = c;
              break;
            }
            ((e = c.sibling), (c.sibling = i), (i = c), (c = e));
          }
          ea(n, !0, i, null, d);
          break;
        case 'together':
          ea(n, !1, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
    return n.child;
  }
  function Ul(e, n) {
    (n.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
  }
  function fn(e, n, i) {
    if (
      (e !== null && (n.dependencies = e.dependencies),
      (Xn |= n.lanes),
      (i & n.childLanes) === 0)
    )
      return null;
    if (e !== null && n.child !== e.child) throw Error(l(153));
    if (n.child !== null) {
      for (
        e = n.child, i = Fn(e, e.pendingProps), n.child = i, i.return = n;
        e.sibling !== null;

      )
        ((e = e.sibling),
          (i = i.sibling = Fn(e, e.pendingProps)),
          (i.return = n));
      i.sibling = null;
    }
    return n.child;
  }
  function mg(e, n, i) {
    switch (n.tag) {
      case 3:
        (Bf(n), Er());
        break;
      case 5:
        nf(n);
        break;
      case 1:
        ft(n.type) && El(n);
        break;
      case 4:
        Ou(n, n.stateNode.containerInfo);
        break;
      case 10:
        var u = n.type._context,
          c = n.memoizedProps.value;
        (ze(Tl, u._currentValue), (u._currentValue = c));
        break;
      case 13:
        if (((u = n.memoizedState), u !== null))
          return u.dehydrated !== null
            ? (ze(je, je.current & 1), (n.flags |= 128), null)
            : (i & n.child.childLanes) !== 0
              ? Uf(e, n, i)
              : (ze(je, je.current & 1),
                (e = fn(e, n, i)),
                e !== null ? e.sibling : null);
        ze(je, je.current & 1);
        break;
      case 19:
        if (((u = (i & n.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (u) return Hf(e, n, i);
          n.flags |= 128;
        }
        if (
          ((c = n.memoizedState),
          c !== null &&
            ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
          ze(je, je.current),
          u)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((n.lanes = 0), Af(e, n, i));
    }
    return fn(e, n, i);
  }
  var Vf, ta, Wf, Qf;
  ((Vf = function (e, n) {
    for (var i = n.child; i !== null; ) {
      if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
      else if (i.tag !== 4 && i.child !== null) {
        ((i.child.return = i), (i = i.child));
        continue;
      }
      if (i === n) break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === n) return;
        i = i.return;
      }
      ((i.sibling.return = i.return), (i = i.sibling));
    }
  }),
    (ta = function () {}),
    (Wf = function (e, n, i, u) {
      var c = e.memoizedProps;
      if (c !== u) {
        ((e = n.stateNode), qn(Kt.current));
        var d = null;
        switch (i) {
          case 'input':
            ((c = Hr(e, c)), (u = Hr(e, u)), (d = []));
            break;
          case 'select':
            ((c = k({}, c, { value: void 0 })),
              (u = k({}, u, { value: void 0 })),
              (d = []));
            break;
          case 'textarea':
            ((c = Qr(e, c)), (u = Qr(e, u)), (d = []));
            break;
          default:
            typeof c.onClick != 'function' &&
              typeof u.onClick == 'function' &&
              (e.onclick = xl);
        }
        Ze(i, u);
        var y;
        i = null;
        for (z in c)
          if (!u.hasOwnProperty(z) && c.hasOwnProperty(z) && c[z] != null)
            if (z === 'style') {
              var S = c[z];
              for (y in S) S.hasOwnProperty(y) && (i || (i = {}), (i[y] = ''));
            } else
              z !== 'dangerouslySetInnerHTML' &&
                z !== 'children' &&
                z !== 'suppressContentEditableWarning' &&
                z !== 'suppressHydrationWarning' &&
                z !== 'autoFocus' &&
                (a.hasOwnProperty(z)
                  ? d || (d = [])
                  : (d = d || []).push(z, null));
        for (z in u) {
          var C = u[z];
          if (
            ((S = c?.[z]),
            u.hasOwnProperty(z) && C !== S && (C != null || S != null))
          )
            if (z === 'style')
              if (S) {
                for (y in S)
                  !S.hasOwnProperty(y) ||
                    (C && C.hasOwnProperty(y)) ||
                    (i || (i = {}), (i[y] = ''));
                for (y in C)
                  C.hasOwnProperty(y) &&
                    S[y] !== C[y] &&
                    (i || (i = {}), (i[y] = C[y]));
              } else (i || (d || (d = []), d.push(z, i)), (i = C));
            else
              z === 'dangerouslySetInnerHTML'
                ? ((C = C ? C.__html : void 0),
                  (S = S ? S.__html : void 0),
                  C != null && S !== C && (d = d || []).push(z, C))
                : z === 'children'
                  ? (typeof C != 'string' && typeof C != 'number') ||
                    (d = d || []).push(z, '' + C)
                  : z !== 'suppressContentEditableWarning' &&
                    z !== 'suppressHydrationWarning' &&
                    (a.hasOwnProperty(z)
                      ? (C != null && z === 'onScroll' && Me('scroll', e),
                        d || S === C || (d = []))
                      : (d = d || []).push(z, C));
        }
        i && (d = d || []).push('style', i);
        var z = d;
        (n.updateQueue = z) && (n.flags |= 4);
      }
    }),
    (Qf = function (e, n, i, u) {
      i !== u && (n.flags |= 4);
    }));
  function Ei(e, n) {
    if (!Fe)
      switch (e.tailMode) {
        case 'hidden':
          n = e.tail;
          for (var i = null; n !== null; )
            (n.alternate !== null && (i = n), (n = n.sibling));
          i === null ? (e.tail = null) : (i.sibling = null);
          break;
        case 'collapsed':
          i = e.tail;
          for (var u = null; i !== null; )
            (i.alternate !== null && (u = i), (i = i.sibling));
          u === null
            ? n || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (u.sibling = null);
      }
  }
  function lt(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
      i = 0,
      u = 0;
    if (n)
      for (var c = e.child; c !== null; )
        ((i |= c.lanes | c.childLanes),
          (u |= c.subtreeFlags & 14680064),
          (u |= c.flags & 14680064),
          (c.return = e),
          (c = c.sibling));
    else
      for (c = e.child; c !== null; )
        ((i |= c.lanes | c.childLanes),
          (u |= c.subtreeFlags),
          (u |= c.flags),
          (c.return = e),
          (c = c.sibling));
    return ((e.subtreeFlags |= u), (e.childLanes = i), n);
  }
  function gg(e, n, i) {
    var u = n.pendingProps;
    switch ((Eu(n), n.tag)) {
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
        return (lt(n), null);
      case 1:
        return (ft(n.type) && Sl(), lt(n), null);
      case 3:
        return (
          (u = n.stateNode),
          Rr(),
          Ae(ct),
          Ae(rt),
          Au(),
          u.pendingContext &&
            ((u.context = u.pendingContext), (u.pendingContext = null)),
          (e === null || e.child === null) &&
            (Rl(n)
              ? (n.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (n.flags & 256) === 0) ||
                ((n.flags |= 1024), jt !== null && (da(jt), (jt = null)))),
          ta(e, n),
          lt(n),
          null
        );
      case 5:
        Du(n);
        var c = qn(vi.current);
        if (((i = n.type), e !== null && n.stateNode != null))
          (Wf(e, n, i, u, c),
            e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152)));
        else {
          if (!u) {
            if (n.stateNode === null) throw Error(l(166));
            return (lt(n), null);
          }
          if (((e = qn(Kt.current)), Rl(n))) {
            ((u = n.stateNode), (i = n.type));
            var d = n.memoizedProps;
            switch (((u[Qt] = n), (u[pi] = d), (e = (n.mode & 1) !== 0), i)) {
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
                for (c = 0; c < ci.length; c++) Me(ci[c], u);
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
                (Vr(u, d), Me('invalid', u));
                break;
              case 'select':
                ((u._wrapperState = { wasMultiple: !!d.multiple }),
                  Me('invalid', u));
                break;
              case 'textarea':
                (Xi(u, d), Me('invalid', u));
            }
            (Ze(i, d), (c = null));
            for (var y in d)
              if (d.hasOwnProperty(y)) {
                var S = d[y];
                y === 'children'
                  ? typeof S == 'string'
                    ? u.textContent !== S &&
                      (d.suppressHydrationWarning !== !0 &&
                        wl(u.textContent, S, e),
                      (c = ['children', S]))
                    : typeof S == 'number' &&
                      u.textContent !== '' + S &&
                      (d.suppressHydrationWarning !== !0 &&
                        wl(u.textContent, S, e),
                      (c = ['children', '' + S]))
                  : a.hasOwnProperty(y) &&
                    S != null &&
                    y === 'onScroll' &&
                    Me('scroll', u);
              }
            switch (i) {
              case 'input':
                (nn(u), Yi(u, d, !0));
                break;
              case 'textarea':
                (nn(u), Ji(u));
                break;
              case 'select':
              case 'option':
                break;
              default:
                typeof d.onClick == 'function' && (u.onclick = xl);
            }
            ((u = c), (n.updateQueue = u), u !== null && (n.flags |= 4));
          } else {
            ((y = c.nodeType === 9 ? c : c.ownerDocument),
              e === 'http://www.w3.org/1999/xhtml' && (e = F(i)),
              e === 'http://www.w3.org/1999/xhtml'
                ? i === 'script'
                  ? ((e = y.createElement('div')),
                    (e.innerHTML = '<script><\/script>'),
                    (e = e.removeChild(e.firstChild)))
                  : typeof u.is == 'string'
                    ? (e = y.createElement(i, { is: u.is }))
                    : ((e = y.createElement(i)),
                      i === 'select' &&
                        ((y = e),
                        u.multiple
                          ? (y.multiple = !0)
                          : u.size && (y.size = u.size)))
                : (e = y.createElementNS(e, i)),
              (e[Qt] = n),
              (e[pi] = u),
              Vf(e, n, !1, !1),
              (n.stateNode = e));
            e: {
              switch (((y = Vt(i, u)), i)) {
                case 'dialog':
                  (Me('cancel', e), Me('close', e), (c = u));
                  break;
                case 'iframe':
                case 'object':
                case 'embed':
                  (Me('load', e), (c = u));
                  break;
                case 'video':
                case 'audio':
                  for (c = 0; c < ci.length; c++) Me(ci[c], e);
                  c = u;
                  break;
                case 'source':
                  (Me('error', e), (c = u));
                  break;
                case 'img':
                case 'image':
                case 'link':
                  (Me('error', e), Me('load', e), (c = u));
                  break;
                case 'details':
                  (Me('toggle', e), (c = u));
                  break;
                case 'input':
                  (Vr(e, u), (c = Hr(e, u)), Me('invalid', e));
                  break;
                case 'option':
                  c = u;
                  break;
                case 'select':
                  ((e._wrapperState = { wasMultiple: !!u.multiple }),
                    (c = k({}, u, { value: void 0 })),
                    Me('invalid', e));
                  break;
                case 'textarea':
                  (Xi(e, u), (c = Qr(e, u)), Me('invalid', e));
                  break;
                default:
                  c = u;
              }
              (Ze(i, c), (S = c));
              for (d in S)
                if (S.hasOwnProperty(d)) {
                  var C = S[d];
                  d === 'style'
                    ? wn(e, C)
                    : d === 'dangerouslySetInnerHTML'
                      ? ((C = C ? C.__html : void 0), C != null && Se(e, C))
                      : d === 'children'
                        ? typeof C == 'string'
                          ? (i !== 'textarea' || C !== '') && _e(e, C)
                          : typeof C == 'number' && _e(e, '' + C)
                        : d !== 'suppressContentEditableWarning' &&
                          d !== 'suppressHydrationWarning' &&
                          d !== 'autoFocus' &&
                          (a.hasOwnProperty(d)
                            ? C != null && d === 'onScroll' && Me('scroll', e)
                            : C != null && M(e, d, C, y));
                }
              switch (i) {
                case 'input':
                  (nn(e), Yi(e, u, !1));
                  break;
                case 'textarea':
                  (nn(e), Ji(e));
                  break;
                case 'option':
                  u.value != null && e.setAttribute('value', '' + ke(u.value));
                  break;
                case 'select':
                  ((e.multiple = !!u.multiple),
                    (d = u.value),
                    d != null
                      ? vn(e, !!u.multiple, d, !1)
                      : u.defaultValue != null &&
                        vn(e, !!u.multiple, u.defaultValue, !0));
                  break;
                default:
                  typeof c.onClick == 'function' && (e.onclick = xl);
              }
              switch (i) {
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
            u && (n.flags |= 4);
          }
          n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
        }
        return (lt(n), null);
      case 6:
        if (e && n.stateNode != null) Qf(e, n, e.memoizedProps, u);
        else {
          if (typeof u != 'string' && n.stateNode === null) throw Error(l(166));
          if (((i = qn(vi.current)), qn(Kt.current), Rl(n))) {
            if (
              ((u = n.stateNode),
              (i = n.memoizedProps),
              (u[Qt] = n),
              (d = u.nodeValue !== i) && ((e = kt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  wl(u.nodeValue, i, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    wl(u.nodeValue, i, (e.mode & 1) !== 0);
              }
            d && (n.flags |= 4);
          } else
            ((u = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(u)),
              (u[Qt] = n),
              (n.stateNode = u));
        }
        return (lt(n), null);
      case 13:
        if (
          (Ae(je),
          (u = n.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Fe && St !== null && (n.mode & 1) !== 0 && (n.flags & 128) === 0)
            (qc(), Er(), (n.flags |= 98560), (d = !1));
          else if (((d = Rl(n)), u !== null && u.dehydrated !== null)) {
            if (e === null) {
              if (!d) throw Error(l(318));
              if (
                ((d = n.memoizedState),
                (d = d !== null ? d.dehydrated : null),
                !d)
              )
                throw Error(l(317));
              d[Qt] = n;
            } else
              (Er(),
                (n.flags & 128) === 0 && (n.memoizedState = null),
                (n.flags |= 4));
            (lt(n), (d = !1));
          } else (jt !== null && (da(jt), (jt = null)), (d = !0));
          if (!d) return n.flags & 65536 ? n : null;
        }
        return (n.flags & 128) !== 0
          ? ((n.lanes = i), n)
          : ((u = u !== null),
            u !== (e !== null && e.memoizedState !== null) &&
              u &&
              ((n.child.flags |= 8192),
              (n.mode & 1) !== 0 &&
                (e === null || (je.current & 1) !== 0
                  ? qe === 0 && (qe = 3)
                  : ma())),
            n.updateQueue !== null && (n.flags |= 4),
            lt(n),
            null);
      case 4:
        return (
          Rr(),
          ta(e, n),
          e === null && fi(n.stateNode.containerInfo),
          lt(n),
          null
        );
      case 10:
        return (Tu(n.type._context), lt(n), null);
      case 17:
        return (ft(n.type) && Sl(), lt(n), null);
      case 19:
        if ((Ae(je), (d = n.memoizedState), d === null)) return (lt(n), null);
        if (((u = (n.flags & 128) !== 0), (y = d.rendering), y === null))
          if (u) Ei(d, !1);
          else {
            if (qe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = n.child; e !== null; ) {
                if (((y = Ol(e)), y !== null)) {
                  for (
                    n.flags |= 128,
                      Ei(d, !1),
                      u = y.updateQueue,
                      u !== null && ((n.updateQueue = u), (n.flags |= 4)),
                      n.subtreeFlags = 0,
                      u = i,
                      i = n.child;
                    i !== null;

                  )
                    ((d = i),
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
                      (i = i.sibling));
                  return (ze(je, (je.current & 1) | 2), n.child);
                }
                e = e.sibling;
              }
            d.tail !== null &&
              $e() > Lr &&
              ((n.flags |= 128), (u = !0), Ei(d, !1), (n.lanes = 4194304));
          }
        else {
          if (!u)
            if (((e = Ol(y)), e !== null)) {
              if (
                ((n.flags |= 128),
                (u = !0),
                (i = e.updateQueue),
                i !== null && ((n.updateQueue = i), (n.flags |= 4)),
                Ei(d, !0),
                d.tail === null &&
                  d.tailMode === 'hidden' &&
                  !y.alternate &&
                  !Fe)
              )
                return (lt(n), null);
            } else
              2 * $e() - d.renderingStartTime > Lr &&
                i !== 1073741824 &&
                ((n.flags |= 128), (u = !0), Ei(d, !1), (n.lanes = 4194304));
          d.isBackwards
            ? ((y.sibling = n.child), (n.child = y))
            : ((i = d.last),
              i !== null ? (i.sibling = y) : (n.child = y),
              (d.last = y));
        }
        return d.tail !== null
          ? ((n = d.tail),
            (d.rendering = n),
            (d.tail = n.sibling),
            (d.renderingStartTime = $e()),
            (n.sibling = null),
            (i = je.current),
            ze(je, u ? (i & 1) | 2 : i & 1),
            n)
          : (lt(n), null);
      case 22:
      case 23:
        return (
          ha(),
          (u = n.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== u && (n.flags |= 8192),
          u && (n.mode & 1) !== 0
            ? (Et & 1073741824) !== 0 &&
              (lt(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : lt(n),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(l(156, n.tag));
  }
  function yg(e, n) {
    switch ((Eu(n), n.tag)) {
      case 1:
        return (
          ft(n.type) && Sl(),
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 3:
        return (
          Rr(),
          Ae(ct),
          Ae(rt),
          Au(),
          (e = n.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((n.flags = (e & -65537) | 128), n)
            : null
        );
      case 5:
        return (Du(n), null);
      case 13:
        if (
          (Ae(je), (e = n.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(l(340));
          Er();
        }
        return (
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 19:
        return (Ae(je), null);
      case 4:
        return (Rr(), null);
      case 10:
        return (Tu(n.type._context), null);
      case 22:
      case 23:
        return (ha(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var $l = !1,
    ot = !1,
    vg = typeof WeakSet == 'function' ? WeakSet : Set,
    ee = null;
  function Tr(e, n) {
    var i = e.ref;
    if (i !== null)
      if (typeof i == 'function')
        try {
          i(null);
        } catch (u) {
          Ue(e, n, u);
        }
      else i.current = null;
  }
  function na(e, n, i) {
    try {
      i();
    } catch (u) {
      Ue(e, n, u);
    }
  }
  var Kf = !1;
  function wg(e, n) {
    if (((hu = al), (e = Cc()), ou(e))) {
      if ('selectionStart' in e)
        var i = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          i = ((i = e.ownerDocument) && i.defaultView) || window;
          var u = i.getSelection && i.getSelection();
          if (u && u.rangeCount !== 0) {
            i = u.anchorNode;
            var c = u.anchorOffset,
              d = u.focusNode;
            u = u.focusOffset;
            try {
              (i.nodeType, d.nodeType);
            } catch {
              i = null;
              break e;
            }
            var y = 0,
              S = -1,
              C = -1,
              z = 0,
              b = 0,
              $ = e,
              B = null;
            t: for (;;) {
              for (
                var X;
                $ !== i || (c !== 0 && $.nodeType !== 3) || (S = y + c),
                  $ !== d || (u !== 0 && $.nodeType !== 3) || (C = y + u),
                  $.nodeType === 3 && (y += $.nodeValue.length),
                  (X = $.firstChild) !== null;

              )
                ((B = $), ($ = X));
              for (;;) {
                if ($ === e) break t;
                if (
                  (B === i && ++z === c && (S = y),
                  B === d && ++b === u && (C = y),
                  (X = $.nextSibling) !== null)
                )
                  break;
                (($ = B), (B = $.parentNode));
              }
              $ = X;
            }
            i = S === -1 || C === -1 ? null : { start: S, end: C };
          } else i = null;
        }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (
      mu = { focusedElem: e, selectionRange: i }, al = !1, ee = n;
      ee !== null;

    )
      if (
        ((n = ee), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = n), (ee = e));
      else
        for (; ee !== null; ) {
          n = ee;
          try {
            var re = n.alternate;
            if ((n.flags & 1024) !== 0)
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (re !== null) {
                    var ie = re.memoizedProps,
                      He = re.memoizedState,
                      N = n.stateNode,
                      _ = N.getSnapshotBeforeUpdate(
                        n.elementType === n.type ? ie : Bt(n.type, ie),
                        He,
                      );
                    N.__reactInternalSnapshotBeforeUpdate = _;
                  }
                  break;
                case 3:
                  var I = n.stateNode.containerInfo;
                  I.nodeType === 1
                    ? (I.textContent = '')
                    : I.nodeType === 9 &&
                      I.documentElement &&
                      I.removeChild(I.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(l(163));
              }
          } catch (V) {
            Ue(n, n.return, V);
          }
          if (((e = n.sibling), e !== null)) {
            ((e.return = n.return), (ee = e));
            break;
          }
          ee = n.return;
        }
    return ((re = Kf), (Kf = !1), re);
  }
  function Ci(e, n, i) {
    var u = n.updateQueue;
    if (((u = u !== null ? u.lastEffect : null), u !== null)) {
      var c = (u = u.next);
      do {
        if ((c.tag & e) === e) {
          var d = c.destroy;
          ((c.destroy = void 0), d !== void 0 && na(n, i, d));
        }
        c = c.next;
      } while (c !== u);
    }
  }
  function Hl(e, n) {
    if (
      ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
    ) {
      var i = (n = n.next);
      do {
        if ((i.tag & e) === e) {
          var u = i.create;
          i.destroy = u();
        }
        i = i.next;
      } while (i !== n);
    }
  }
  function ra(e) {
    var n = e.ref;
    if (n !== null) {
      var i = e.stateNode;
      switch (e.tag) {
        case 5:
          e = i;
          break;
        default:
          e = i;
      }
      typeof n == 'function' ? n(e) : (n.current = e);
    }
  }
  function qf(e) {
    var n = e.alternate;
    (n !== null && ((e.alternate = null), qf(n)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((n = e.stateNode),
        n !== null &&
          (delete n[Qt],
          delete n[pi],
          delete n[wu],
          delete n[tg],
          delete n[ng])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function Yf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Xf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Yf(e.return)) return null;
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
  function ia(e, n, i) {
    var u = e.tag;
    if (u === 5 || u === 6)
      ((e = e.stateNode),
        n
          ? i.nodeType === 8
            ? i.parentNode.insertBefore(e, n)
            : i.insertBefore(e, n)
          : (i.nodeType === 8
              ? ((n = i.parentNode), n.insertBefore(e, i))
              : ((n = i), n.appendChild(e)),
            (i = i._reactRootContainer),
            i != null || n.onclick !== null || (n.onclick = xl)));
    else if (u !== 4 && ((e = e.child), e !== null))
      for (ia(e, n, i), e = e.sibling; e !== null; )
        (ia(e, n, i), (e = e.sibling));
  }
  function la(e, n, i) {
    var u = e.tag;
    if (u === 5 || u === 6)
      ((e = e.stateNode), n ? i.insertBefore(e, n) : i.appendChild(e));
    else if (u !== 4 && ((e = e.child), e !== null))
      for (la(e, n, i), e = e.sibling; e !== null; )
        (la(e, n, i), (e = e.sibling));
  }
  var et = null,
    bt = !1;
  function zn(e, n, i) {
    for (i = i.child; i !== null; ) (Gf(e, n, i), (i = i.sibling));
  }
  function Gf(e, n, i) {
    if (Wt && typeof Wt.onCommitFiberUnmount == 'function')
      try {
        Wt.onCommitFiberUnmount(nl, i);
      } catch {}
    switch (i.tag) {
      case 5:
        ot || Tr(i, n);
      case 6:
        var u = et,
          c = bt;
        ((et = null),
          zn(e, n, i),
          (et = u),
          (bt = c),
          et !== null &&
            (bt
              ? ((e = et),
                (i = i.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(i)
                  : e.removeChild(i))
              : et.removeChild(i.stateNode)));
        break;
      case 18:
        et !== null &&
          (bt
            ? ((e = et),
              (i = i.stateNode),
              e.nodeType === 8
                ? vu(e.parentNode, i)
                : e.nodeType === 1 && vu(e, i),
              ni(e))
            : vu(et, i.stateNode));
        break;
      case 4:
        ((u = et),
          (c = bt),
          (et = i.stateNode.containerInfo),
          (bt = !0),
          zn(e, n, i),
          (et = u),
          (bt = c));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !ot &&
          ((u = i.updateQueue), u !== null && ((u = u.lastEffect), u !== null))
        ) {
          c = u = u.next;
          do {
            var d = c,
              y = d.destroy;
            ((d = d.tag),
              y !== void 0 && ((d & 2) !== 0 || (d & 4) !== 0) && na(i, n, y),
              (c = c.next));
          } while (c !== u);
        }
        zn(e, n, i);
        break;
      case 1:
        if (
          !ot &&
          (Tr(i, n),
          (u = i.stateNode),
          typeof u.componentWillUnmount == 'function')
        )
          try {
            ((u.props = i.memoizedProps),
              (u.state = i.memoizedState),
              u.componentWillUnmount());
          } catch (S) {
            Ue(i, n, S);
          }
        zn(e, n, i);
        break;
      case 21:
        zn(e, n, i);
        break;
      case 22:
        i.mode & 1
          ? ((ot = (u = ot) || i.memoizedState !== null), zn(e, n, i), (ot = u))
          : zn(e, n, i);
        break;
      default:
        zn(e, n, i);
    }
  }
  function Jf(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var i = e.stateNode;
      (i === null && (i = e.stateNode = new vg()),
        n.forEach(function (u) {
          var c = Ng.bind(null, e, u);
          i.has(u) || (i.add(u), u.then(c, c));
        }));
    }
  }
  function Ut(e, n) {
    var i = n.deletions;
    if (i !== null)
      for (var u = 0; u < i.length; u++) {
        var c = i[u];
        try {
          var d = e,
            y = n,
            S = y;
          e: for (; S !== null; ) {
            switch (S.tag) {
              case 5:
                ((et = S.stateNode), (bt = !1));
                break e;
              case 3:
                ((et = S.stateNode.containerInfo), (bt = !0));
                break e;
              case 4:
                ((et = S.stateNode.containerInfo), (bt = !0));
                break e;
            }
            S = S.return;
          }
          if (et === null) throw Error(l(160));
          (Gf(d, y, c), (et = null), (bt = !1));
          var C = c.alternate;
          (C !== null && (C.return = null), (c.return = null));
        } catch (z) {
          Ue(c, n, z);
        }
      }
    if (n.subtreeFlags & 12854)
      for (n = n.child; n !== null; ) (Zf(n, e), (n = n.sibling));
  }
  function Zf(e, n) {
    var i = e.alternate,
      u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Ut(n, e), Yt(e), u & 4)) {
          try {
            (Ci(3, e, e.return), Hl(3, e));
          } catch (ie) {
            Ue(e, e.return, ie);
          }
          try {
            Ci(5, e, e.return);
          } catch (ie) {
            Ue(e, e.return, ie);
          }
        }
        break;
      case 1:
        (Ut(n, e), Yt(e), u & 512 && i !== null && Tr(i, i.return));
        break;
      case 5:
        if (
          (Ut(n, e),
          Yt(e),
          u & 512 && i !== null && Tr(i, i.return),
          e.flags & 32)
        ) {
          var c = e.stateNode;
          try {
            _e(c, '');
          } catch (ie) {
            Ue(e, e.return, ie);
          }
        }
        if (u & 4 && ((c = e.stateNode), c != null)) {
          var d = e.memoizedProps,
            y = i !== null ? i.memoizedProps : d,
            S = e.type,
            C = e.updateQueue;
          if (((e.updateQueue = null), C !== null))
            try {
              (S === 'input' &&
                d.type === 'radio' &&
                d.name != null &&
                Wr(c, d),
                Vt(S, y));
              var z = Vt(S, d);
              for (y = 0; y < C.length; y += 2) {
                var b = C[y],
                  $ = C[y + 1];
                b === 'style'
                  ? wn(c, $)
                  : b === 'dangerouslySetInnerHTML'
                    ? Se(c, $)
                    : b === 'children'
                      ? _e(c, $)
                      : M(c, b, $, z);
              }
              switch (S) {
                case 'input':
                  ur(c, d);
                  break;
                case 'textarea':
                  Gi(c, d);
                  break;
                case 'select':
                  var B = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var X = d.value;
                  X != null
                    ? vn(c, !!d.multiple, X, !1)
                    : B !== !!d.multiple &&
                      (d.defaultValue != null
                        ? vn(c, !!d.multiple, d.defaultValue, !0)
                        : vn(c, !!d.multiple, d.multiple ? [] : '', !1));
              }
              c[pi] = d;
            } catch (ie) {
              Ue(e, e.return, ie);
            }
        }
        break;
      case 6:
        if ((Ut(n, e), Yt(e), u & 4)) {
          if (e.stateNode === null) throw Error(l(162));
          ((c = e.stateNode), (d = e.memoizedProps));
          try {
            c.nodeValue = d;
          } catch (ie) {
            Ue(e, e.return, ie);
          }
        }
        break;
      case 3:
        if (
          (Ut(n, e), Yt(e), u & 4 && i !== null && i.memoizedState.isDehydrated)
        )
          try {
            ni(n.containerInfo);
          } catch (ie) {
            Ue(e, e.return, ie);
          }
        break;
      case 4:
        (Ut(n, e), Yt(e));
        break;
      case 13:
        (Ut(n, e),
          Yt(e),
          (c = e.child),
          c.flags & 8192 &&
            ((d = c.memoizedState !== null),
            (c.stateNode.isHidden = d),
            !d ||
              (c.alternate !== null && c.alternate.memoizedState !== null) ||
              (aa = $e())),
          u & 4 && Jf(e));
        break;
      case 22:
        if (
          ((b = i !== null && i.memoizedState !== null),
          e.mode & 1 ? ((ot = (z = ot) || b), Ut(n, e), (ot = z)) : Ut(n, e),
          Yt(e),
          u & 8192)
        ) {
          if (
            ((z = e.memoizedState !== null),
            (e.stateNode.isHidden = z) && !b && (e.mode & 1) !== 0)
          )
            for (ee = e, b = e.child; b !== null; ) {
              for ($ = ee = b; ee !== null; ) {
                switch (((B = ee), (X = B.child), B.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ci(4, B, B.return);
                    break;
                  case 1:
                    Tr(B, B.return);
                    var re = B.stateNode;
                    if (typeof re.componentWillUnmount == 'function') {
                      ((u = B), (i = B.return));
                      try {
                        ((n = u),
                          (re.props = n.memoizedProps),
                          (re.state = n.memoizedState),
                          re.componentWillUnmount());
                      } catch (ie) {
                        Ue(u, i, ie);
                      }
                    }
                    break;
                  case 5:
                    Tr(B, B.return);
                    break;
                  case 22:
                    if (B.memoizedState !== null) {
                      nd($);
                      continue;
                    }
                }
                X !== null ? ((X.return = B), (ee = X)) : nd($);
              }
              b = b.sibling;
            }
          e: for (b = null, $ = e; ; ) {
            if ($.tag === 5) {
              if (b === null) {
                b = $;
                try {
                  ((c = $.stateNode),
                    z
                      ? ((d = c.style),
                        typeof d.setProperty == 'function'
                          ? d.setProperty('display', 'none', 'important')
                          : (d.display = 'none'))
                      : ((S = $.stateNode),
                        (C = $.memoizedProps.style),
                        (y =
                          C != null && C.hasOwnProperty('display')
                            ? C.display
                            : null),
                        (S.style.display = Nt('display', y))));
                } catch (ie) {
                  Ue(e, e.return, ie);
                }
              }
            } else if ($.tag === 6) {
              if (b === null)
                try {
                  $.stateNode.nodeValue = z ? '' : $.memoizedProps;
                } catch (ie) {
                  Ue(e, e.return, ie);
                }
            } else if (
              (($.tag !== 22 && $.tag !== 23) ||
                $.memoizedState === null ||
                $ === e) &&
              $.child !== null
            ) {
              (($.child.return = $), ($ = $.child));
              continue;
            }
            if ($ === e) break e;
            for (; $.sibling === null; ) {
              if ($.return === null || $.return === e) break e;
              (b === $ && (b = null), ($ = $.return));
            }
            (b === $ && (b = null),
              ($.sibling.return = $.return),
              ($ = $.sibling));
          }
        }
        break;
      case 19:
        (Ut(n, e), Yt(e), u & 4 && Jf(e));
        break;
      case 21:
        break;
      default:
        (Ut(n, e), Yt(e));
    }
  }
  function Yt(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        e: {
          for (var i = e.return; i !== null; ) {
            if (Yf(i)) {
              var u = i;
              break e;
            }
            i = i.return;
          }
          throw Error(l(160));
        }
        switch (u.tag) {
          case 5:
            var c = u.stateNode;
            u.flags & 32 && (_e(c, ''), (u.flags &= -33));
            var d = Xf(e);
            la(e, d, c);
            break;
          case 3:
          case 4:
            var y = u.stateNode.containerInfo,
              S = Xf(e);
            ia(e, S, y);
            break;
          default:
            throw Error(l(161));
        }
      } catch (C) {
        Ue(e, e.return, C);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function xg(e, n, i) {
    ((ee = e), ed(e));
  }
  function ed(e, n, i) {
    for (var u = (e.mode & 1) !== 0; ee !== null; ) {
      var c = ee,
        d = c.child;
      if (c.tag === 22 && u) {
        var y = c.memoizedState !== null || $l;
        if (!y) {
          var S = c.alternate,
            C = (S !== null && S.memoizedState !== null) || ot;
          S = $l;
          var z = ot;
          if ((($l = y), (ot = C) && !z))
            for (ee = c; ee !== null; )
              ((y = ee),
                (C = y.child),
                y.tag === 22 && y.memoizedState !== null
                  ? rd(c)
                  : C !== null
                    ? ((C.return = y), (ee = C))
                    : rd(c));
          for (; d !== null; ) ((ee = d), ed(d), (d = d.sibling));
          ((ee = c), ($l = S), (ot = z));
        }
        td(e);
      } else
        (c.subtreeFlags & 8772) !== 0 && d !== null
          ? ((d.return = c), (ee = d))
          : td(e);
    }
  }
  function td(e) {
    for (; ee !== null; ) {
      var n = ee;
      if ((n.flags & 8772) !== 0) {
        var i = n.alternate;
        try {
          if ((n.flags & 8772) !== 0)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                ot || Hl(5, n);
                break;
              case 1:
                var u = n.stateNode;
                if (n.flags & 4 && !ot)
                  if (i === null) u.componentDidMount();
                  else {
                    var c =
                      n.elementType === n.type
                        ? i.memoizedProps
                        : Bt(n.type, i.memoizedProps);
                    u.componentDidUpdate(
                      c,
                      i.memoizedState,
                      u.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var d = n.updateQueue;
                d !== null && tf(n, d, u);
                break;
              case 3:
                var y = n.updateQueue;
                if (y !== null) {
                  if (((i = null), n.child !== null))
                    switch (n.child.tag) {
                      case 5:
                        i = n.child.stateNode;
                        break;
                      case 1:
                        i = n.child.stateNode;
                    }
                  tf(n, y, i);
                }
                break;
              case 5:
                var S = n.stateNode;
                if (i === null && n.flags & 4) {
                  i = S;
                  var C = n.memoizedProps;
                  switch (n.type) {
                    case 'button':
                    case 'input':
                    case 'select':
                    case 'textarea':
                      C.autoFocus && i.focus();
                      break;
                    case 'img':
                      C.src && (i.src = C.src);
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
                if (n.memoizedState === null) {
                  var z = n.alternate;
                  if (z !== null) {
                    var b = z.memoizedState;
                    if (b !== null) {
                      var $ = b.dehydrated;
                      $ !== null && ni($);
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
          ot || (n.flags & 512 && ra(n));
        } catch (B) {
          Ue(n, n.return, B);
        }
      }
      if (n === e) {
        ee = null;
        break;
      }
      if (((i = n.sibling), i !== null)) {
        ((i.return = n.return), (ee = i));
        break;
      }
      ee = n.return;
    }
  }
  function nd(e) {
    for (; ee !== null; ) {
      var n = ee;
      if (n === e) {
        ee = null;
        break;
      }
      var i = n.sibling;
      if (i !== null) {
        ((i.return = n.return), (ee = i));
        break;
      }
      ee = n.return;
    }
  }
  function rd(e) {
    for (; ee !== null; ) {
      var n = ee;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var i = n.return;
            try {
              Hl(4, n);
            } catch (C) {
              Ue(n, i, C);
            }
            break;
          case 1:
            var u = n.stateNode;
            if (typeof u.componentDidMount == 'function') {
              var c = n.return;
              try {
                u.componentDidMount();
              } catch (C) {
                Ue(n, c, C);
              }
            }
            var d = n.return;
            try {
              ra(n);
            } catch (C) {
              Ue(n, d, C);
            }
            break;
          case 5:
            var y = n.return;
            try {
              ra(n);
            } catch (C) {
              Ue(n, y, C);
            }
        }
      } catch (C) {
        Ue(n, n.return, C);
      }
      if (n === e) {
        ee = null;
        break;
      }
      var S = n.sibling;
      if (S !== null) {
        ((S.return = n.return), (ee = S));
        break;
      }
      ee = n.return;
    }
  }
  var kg = Math.ceil,
    Vl = W.ReactCurrentDispatcher,
    oa = W.ReactCurrentOwner,
    Ot = W.ReactCurrentBatchConfig,
    Pe = 0,
    Xe = null,
    We = null,
    tt = 0,
    Et = 0,
    Ir = Rn(0),
    qe = 0,
    _i = null,
    Xn = 0,
    Wl = 0,
    ua = 0,
    Pi = null,
    pt = null,
    aa = 0,
    Lr = 1 / 0,
    dn = null,
    Ql = !1,
    sa = null,
    On = null,
    Kl = !1,
    Dn = null,
    ql = 0,
    Ri = 0,
    ca = null,
    Yl = -1,
    Xl = 0;
  function st() {
    return (Pe & 6) !== 0 ? $e() : Yl !== -1 ? Yl : (Yl = $e());
  }
  function Mn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (Pe & 2) !== 0 && tt !== 0
        ? tt & -tt
        : ig.transition !== null
          ? (Xl === 0 && (Xl = Ys()), Xl)
          : ((e = Le),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : ic(e.type))),
            e);
  }
  function $t(e, n, i, u) {
    if (50 < Ri) throw ((Ri = 0), (ca = null), Error(l(185)));
    (Gr(e, i, u),
      ((Pe & 2) === 0 || e !== Xe) &&
        (e === Xe && ((Pe & 2) === 0 && (Wl |= i), qe === 4 && An(e, tt)),
        ht(e, u),
        i === 1 &&
          Pe === 0 &&
          (n.mode & 1) === 0 &&
          ((Lr = $e() + 500), Cl && Tn())));
  }
  function ht(e, n) {
    var i = e.callbackNode;
    im(e, n);
    var u = ll(e, e === Xe ? tt : 0);
    if (u === 0)
      (i !== null && Qs(i), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((n = u & -u), e.callbackPriority !== n)) {
      if ((i != null && Qs(i), n === 1))
        (e.tag === 0 ? rg(ld.bind(null, e)) : Hc(ld.bind(null, e)),
          Zm(function () {
            (Pe & 6) === 0 && Tn();
          }),
          (i = null));
      else {
        switch (Xs(u)) {
          case 1:
            i = Ho;
            break;
          case 4:
            i = Ks;
            break;
          case 16:
            i = tl;
            break;
          case 536870912:
            i = qs;
            break;
          default:
            i = tl;
        }
        i = pd(i, id.bind(null, e));
      }
      ((e.callbackPriority = n), (e.callbackNode = i));
    }
  }
  function id(e, n) {
    if (((Yl = -1), (Xl = 0), (Pe & 6) !== 0)) throw Error(l(327));
    var i = e.callbackNode;
    if (zr() && e.callbackNode !== i) return null;
    var u = ll(e, e === Xe ? tt : 0);
    if (u === 0) return null;
    if ((u & 30) !== 0 || (u & e.expiredLanes) !== 0 || n) n = Gl(e, u);
    else {
      n = u;
      var c = Pe;
      Pe |= 2;
      var d = ud();
      (Xe !== e || tt !== n) && ((dn = null), (Lr = $e() + 500), Jn(e, n));
      do
        try {
          Cg();
          break;
        } catch (S) {
          od(e, S);
        }
      while (!0);
      (Nu(),
        (Vl.current = d),
        (Pe = c),
        We !== null ? (n = 0) : ((Xe = null), (tt = 0), (n = qe)));
    }
    if (n !== 0) {
      if (
        (n === 2 && ((c = Vo(e)), c !== 0 && ((u = c), (n = fa(e, c)))),
        n === 1)
      )
        throw ((i = _i), Jn(e, 0), An(e, u), ht(e, $e()), i);
      if (n === 6) An(e, u);
      else {
        if (
          ((c = e.current.alternate),
          (u & 30) === 0 &&
            !Sg(c) &&
            ((n = Gl(e, u)),
            n === 2 && ((d = Vo(e)), d !== 0 && ((u = d), (n = fa(e, d)))),
            n === 1))
        )
          throw ((i = _i), Jn(e, 0), An(e, u), ht(e, $e()), i);
        switch (((e.finishedWork = c), (e.finishedLanes = u), n)) {
          case 0:
          case 1:
            throw Error(l(345));
          case 2:
            Zn(e, pt, dn);
            break;
          case 3:
            if (
              (An(e, u),
              (u & 130023424) === u && ((n = aa + 500 - $e()), 10 < n))
            ) {
              if (ll(e, 0) !== 0) break;
              if (((c = e.suspendedLanes), (c & u) !== u)) {
                (st(), (e.pingedLanes |= e.suspendedLanes & c));
                break;
              }
              e.timeoutHandle = yu(Zn.bind(null, e, pt, dn), n);
              break;
            }
            Zn(e, pt, dn);
            break;
          case 4:
            if ((An(e, u), (u & 4194240) === u)) break;
            for (n = e.eventTimes, c = -1; 0 < u; ) {
              var y = 31 - At(u);
              ((d = 1 << y), (y = n[y]), y > c && (c = y), (u &= ~d));
            }
            if (
              ((u = c),
              (u = $e() - u),
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
                            : 1960 * kg(u / 1960)) - u),
              10 < u)
            ) {
              e.timeoutHandle = yu(Zn.bind(null, e, pt, dn), u);
              break;
            }
            Zn(e, pt, dn);
            break;
          case 5:
            Zn(e, pt, dn);
            break;
          default:
            throw Error(l(329));
        }
      }
    }
    return (ht(e, $e()), e.callbackNode === i ? id.bind(null, e) : null);
  }
  function fa(e, n) {
    var i = Pi;
    return (
      e.current.memoizedState.isDehydrated && (Jn(e, n).flags |= 256),
      (e = Gl(e, n)),
      e !== 2 && ((n = pt), (pt = i), n !== null && da(n)),
      e
    );
  }
  function da(e) {
    pt === null ? (pt = e) : pt.push.apply(pt, e);
  }
  function Sg(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var i = n.updateQueue;
        if (i !== null && ((i = i.stores), i !== null))
          for (var u = 0; u < i.length; u++) {
            var c = i[u],
              d = c.getSnapshot;
            c = c.value;
            try {
              if (!Ft(d(), c)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((i = n.child), n.subtreeFlags & 16384 && i !== null))
        ((i.return = n), (n = i));
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        ((n.sibling.return = n.return), (n = n.sibling));
      }
    }
    return !0;
  }
  function An(e, n) {
    for (
      n &= ~ua,
        n &= ~Wl,
        e.suspendedLanes |= n,
        e.pingedLanes &= ~n,
        e = e.expirationTimes;
      0 < n;

    ) {
      var i = 31 - At(n),
        u = 1 << i;
      ((e[i] = -1), (n &= ~u));
    }
  }
  function ld(e) {
    if ((Pe & 6) !== 0) throw Error(l(327));
    zr();
    var n = ll(e, 0);
    if ((n & 1) === 0) return (ht(e, $e()), null);
    var i = Gl(e, n);
    if (e.tag !== 0 && i === 2) {
      var u = Vo(e);
      u !== 0 && ((n = u), (i = fa(e, u)));
    }
    if (i === 1) throw ((i = _i), Jn(e, 0), An(e, n), ht(e, $e()), i);
    if (i === 6) throw Error(l(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = n),
      Zn(e, pt, dn),
      ht(e, $e()),
      null
    );
  }
  function pa(e, n) {
    var i = Pe;
    Pe |= 1;
    try {
      return e(n);
    } finally {
      ((Pe = i), Pe === 0 && ((Lr = $e() + 500), Cl && Tn()));
    }
  }
  function Gn(e) {
    Dn !== null && Dn.tag === 0 && (Pe & 6) === 0 && zr();
    var n = Pe;
    Pe |= 1;
    var i = Ot.transition,
      u = Le;
    try {
      if (((Ot.transition = null), (Le = 1), e)) return e();
    } finally {
      ((Le = u), (Ot.transition = i), (Pe = n), (Pe & 6) === 0 && Tn());
    }
  }
  function ha() {
    ((Et = Ir.current), Ae(Ir));
  }
  function Jn(e, n) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var i = e.timeoutHandle;
    if ((i !== -1 && ((e.timeoutHandle = -1), Jm(i)), We !== null))
      for (i = We.return; i !== null; ) {
        var u = i;
        switch ((Eu(u), u.tag)) {
          case 1:
            ((u = u.type.childContextTypes), u != null && Sl());
            break;
          case 3:
            (Rr(), Ae(ct), Ae(rt), Au());
            break;
          case 5:
            Du(u);
            break;
          case 4:
            Rr();
            break;
          case 13:
            Ae(je);
            break;
          case 19:
            Ae(je);
            break;
          case 10:
            Tu(u.type._context);
            break;
          case 22:
          case 23:
            ha();
        }
        i = i.return;
      }
    if (
      ((Xe = e),
      (We = e = Fn(e.current, null)),
      (tt = Et = n),
      (qe = 0),
      (_i = null),
      (ua = Wl = Xn = 0),
      (pt = Pi = null),
      Kn !== null)
    ) {
      for (n = 0; n < Kn.length; n++)
        if (((i = Kn[n]), (u = i.interleaved), u !== null)) {
          i.interleaved = null;
          var c = u.next,
            d = i.pending;
          if (d !== null) {
            var y = d.next;
            ((d.next = c), (u.next = y));
          }
          i.pending = u;
        }
      Kn = null;
    }
    return e;
  }
  function od(e, n) {
    do {
      var i = We;
      try {
        if ((Nu(), (Dl.current = jl), Ml)) {
          for (var u = Be.memoizedState; u !== null; ) {
            var c = u.queue;
            (c !== null && (c.pending = null), (u = u.next));
          }
          Ml = !1;
        }
        if (
          ((Yn = 0),
          (Ye = Ke = Be = null),
          (wi = !1),
          (xi = 0),
          (oa.current = null),
          i === null || i.return === null)
        ) {
          ((qe = 1), (_i = n), (We = null));
          break;
        }
        e: {
          var d = e,
            y = i.return,
            S = i,
            C = n;
          if (
            ((n = tt),
            (S.flags |= 32768),
            C !== null && typeof C == 'object' && typeof C.then == 'function')
          ) {
            var z = C,
              b = S,
              $ = b.tag;
            if ((b.mode & 1) === 0 && ($ === 0 || $ === 11 || $ === 15)) {
              var B = b.alternate;
              B
                ? ((b.updateQueue = B.updateQueue),
                  (b.memoizedState = B.memoizedState),
                  (b.lanes = B.lanes))
                : ((b.updateQueue = null), (b.memoizedState = null));
            }
            var X = Lf(y);
            if (X !== null) {
              ((X.flags &= -257),
                zf(X, y, S, d, n),
                X.mode & 1 && If(d, z, n),
                (n = X),
                (C = z));
              var re = n.updateQueue;
              if (re === null) {
                var ie = new Set();
                (ie.add(C), (n.updateQueue = ie));
              } else re.add(C);
              break e;
            } else {
              if ((n & 1) === 0) {
                (If(d, z, n), ma());
                break e;
              }
              C = Error(l(426));
            }
          } else if (Fe && S.mode & 1) {
            var He = Lf(y);
            if (He !== null) {
              ((He.flags & 65536) === 0 && (He.flags |= 256),
                zf(He, y, S, d, n),
                Pu(Nr(C, S)));
              break e;
            }
          }
          ((d = C = Nr(C, S)),
            qe !== 4 && (qe = 2),
            Pi === null ? (Pi = [d]) : Pi.push(d),
            (d = y));
          do {
            switch (d.tag) {
              case 3:
                ((d.flags |= 65536), (n &= -n), (d.lanes |= n));
                var N = Nf(d, C, n);
                ef(d, N);
                break e;
              case 1:
                S = C;
                var _ = d.type,
                  I = d.stateNode;
                if (
                  (d.flags & 128) === 0 &&
                  (typeof _.getDerivedStateFromError == 'function' ||
                    (I !== null &&
                      typeof I.componentDidCatch == 'function' &&
                      (On === null || !On.has(I))))
                ) {
                  ((d.flags |= 65536), (n &= -n), (d.lanes |= n));
                  var V = Tf(d, S, n);
                  ef(d, V);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        sd(i);
      } catch (le) {
        ((n = le), We === i && i !== null && (We = i = i.return));
        continue;
      }
      break;
    } while (!0);
  }
  function ud() {
    var e = Vl.current;
    return ((Vl.current = jl), e === null ? jl : e);
  }
  function ma() {
    ((qe === 0 || qe === 3 || qe === 2) && (qe = 4),
      Xe === null ||
        ((Xn & 268435455) === 0 && (Wl & 268435455) === 0) ||
        An(Xe, tt));
  }
  function Gl(e, n) {
    var i = Pe;
    Pe |= 2;
    var u = ud();
    (Xe !== e || tt !== n) && ((dn = null), Jn(e, n));
    do
      try {
        Eg();
        break;
      } catch (c) {
        od(e, c);
      }
    while (!0);
    if ((Nu(), (Pe = i), (Vl.current = u), We !== null)) throw Error(l(261));
    return ((Xe = null), (tt = 0), qe);
  }
  function Eg() {
    for (; We !== null; ) ad(We);
  }
  function Cg() {
    for (; We !== null && !Yh(); ) ad(We);
  }
  function ad(e) {
    var n = dd(e.alternate, e, Et);
    ((e.memoizedProps = e.pendingProps),
      n === null ? sd(e) : (We = n),
      (oa.current = null));
  }
  function sd(e) {
    var n = e;
    do {
      var i = n.alternate;
      if (((e = n.return), (n.flags & 32768) === 0)) {
        if (((i = gg(i, n, Et)), i !== null)) {
          We = i;
          return;
        }
      } else {
        if (((i = yg(i, n)), i !== null)) {
          ((i.flags &= 32767), (We = i));
          return;
        }
        if (e !== null)
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((qe = 6), (We = null));
          return;
        }
      }
      if (((n = n.sibling), n !== null)) {
        We = n;
        return;
      }
      We = n = e;
    } while (n !== null);
    qe === 0 && (qe = 5);
  }
  function Zn(e, n, i) {
    var u = Le,
      c = Ot.transition;
    try {
      ((Ot.transition = null), (Le = 1), _g(e, n, i, u));
    } finally {
      ((Ot.transition = c), (Le = u));
    }
    return null;
  }
  function _g(e, n, i, u) {
    do zr();
    while (Dn !== null);
    if ((Pe & 6) !== 0) throw Error(l(327));
    i = e.finishedWork;
    var c = e.finishedLanes;
    if (i === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), i === e.current))
      throw Error(l(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var d = i.lanes | i.childLanes;
    if (
      (lm(e, d),
      e === Xe && ((We = Xe = null), (tt = 0)),
      ((i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0) ||
        Kl ||
        ((Kl = !0),
        pd(tl, function () {
          return (zr(), null);
        })),
      (d = (i.flags & 15990) !== 0),
      (i.subtreeFlags & 15990) !== 0 || d)
    ) {
      ((d = Ot.transition), (Ot.transition = null));
      var y = Le;
      Le = 1;
      var S = Pe;
      ((Pe |= 4),
        (oa.current = null),
        wg(e, i),
        Zf(i, e),
        Wm(mu),
        (al = !!hu),
        (mu = hu = null),
        (e.current = i),
        xg(i),
        Xh(),
        (Pe = S),
        (Le = y),
        (Ot.transition = d));
    } else e.current = i;
    if (
      (Kl && ((Kl = !1), (Dn = e), (ql = c)),
      (d = e.pendingLanes),
      d === 0 && (On = null),
      Zh(i.stateNode),
      ht(e, $e()),
      n !== null)
    )
      for (u = e.onRecoverableError, i = 0; i < n.length; i++)
        ((c = n[i]), u(c.value, { componentStack: c.stack, digest: c.digest }));
    if (Ql) throw ((Ql = !1), (e = sa), (sa = null), e);
    return (
      (ql & 1) !== 0 && e.tag !== 0 && zr(),
      (d = e.pendingLanes),
      (d & 1) !== 0 ? (e === ca ? Ri++ : ((Ri = 0), (ca = e))) : (Ri = 0),
      Tn(),
      null
    );
  }
  function zr() {
    if (Dn !== null) {
      var e = Xs(ql),
        n = Ot.transition,
        i = Le;
      try {
        if (((Ot.transition = null), (Le = 16 > e ? 16 : e), Dn === null))
          var u = !1;
        else {
          if (((e = Dn), (Dn = null), (ql = 0), (Pe & 6) !== 0))
            throw Error(l(331));
          var c = Pe;
          for (Pe |= 4, ee = e.current; ee !== null; ) {
            var d = ee,
              y = d.child;
            if ((ee.flags & 16) !== 0) {
              var S = d.deletions;
              if (S !== null) {
                for (var C = 0; C < S.length; C++) {
                  var z = S[C];
                  for (ee = z; ee !== null; ) {
                    var b = ee;
                    switch (b.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ci(8, b, d);
                    }
                    var $ = b.child;
                    if ($ !== null) (($.return = b), (ee = $));
                    else
                      for (; ee !== null; ) {
                        b = ee;
                        var B = b.sibling,
                          X = b.return;
                        if ((qf(b), b === z)) {
                          ee = null;
                          break;
                        }
                        if (B !== null) {
                          ((B.return = X), (ee = B));
                          break;
                        }
                        ee = X;
                      }
                  }
                }
                var re = d.alternate;
                if (re !== null) {
                  var ie = re.child;
                  if (ie !== null) {
                    re.child = null;
                    do {
                      var He = ie.sibling;
                      ((ie.sibling = null), (ie = He));
                    } while (ie !== null);
                  }
                }
                ee = d;
              }
            }
            if ((d.subtreeFlags & 2064) !== 0 && y !== null)
              ((y.return = d), (ee = y));
            else
              e: for (; ee !== null; ) {
                if (((d = ee), (d.flags & 2048) !== 0))
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ci(9, d, d.return);
                  }
                var N = d.sibling;
                if (N !== null) {
                  ((N.return = d.return), (ee = N));
                  break e;
                }
                ee = d.return;
              }
          }
          var _ = e.current;
          for (ee = _; ee !== null; ) {
            y = ee;
            var I = y.child;
            if ((y.subtreeFlags & 2064) !== 0 && I !== null)
              ((I.return = y), (ee = I));
            else
              e: for (y = _; ee !== null; ) {
                if (((S = ee), (S.flags & 2048) !== 0))
                  try {
                    switch (S.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Hl(9, S);
                    }
                  } catch (le) {
                    Ue(S, S.return, le);
                  }
                if (S === y) {
                  ee = null;
                  break e;
                }
                var V = S.sibling;
                if (V !== null) {
                  ((V.return = S.return), (ee = V));
                  break e;
                }
                ee = S.return;
              }
          }
          if (
            ((Pe = c),
            Tn(),
            Wt && typeof Wt.onPostCommitFiberRoot == 'function')
          )
            try {
              Wt.onPostCommitFiberRoot(nl, e);
            } catch {}
          u = !0;
        }
        return u;
      } finally {
        ((Le = i), (Ot.transition = n));
      }
    }
    return !1;
  }
  function cd(e, n, i) {
    ((n = Nr(i, n)),
      (n = Nf(e, n, 1)),
      (e = Ln(e, n, 1)),
      (n = st()),
      e !== null && (Gr(e, 1, n), ht(e, n)));
  }
  function Ue(e, n, i) {
    if (e.tag === 3) cd(e, e, i);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          cd(n, e, i);
          break;
        } else if (n.tag === 1) {
          var u = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == 'function' ||
            (typeof u.componentDidCatch == 'function' &&
              (On === null || !On.has(u)))
          ) {
            ((e = Nr(i, e)),
              (e = Tf(n, e, 1)),
              (n = Ln(n, e, 1)),
              (e = st()),
              n !== null && (Gr(n, 1, e), ht(n, e)));
            break;
          }
        }
        n = n.return;
      }
  }
  function Pg(e, n, i) {
    var u = e.pingCache;
    (u !== null && u.delete(n),
      (n = st()),
      (e.pingedLanes |= e.suspendedLanes & i),
      Xe === e &&
        (tt & i) === i &&
        (qe === 4 || (qe === 3 && (tt & 130023424) === tt && 500 > $e() - aa)
          ? Jn(e, 0)
          : (ua |= i)),
      ht(e, n));
  }
  function fd(e, n) {
    n === 0 &&
      ((e.mode & 1) === 0
        ? (n = 1)
        : ((n = il), (il <<= 1), (il & 130023424) === 0 && (il = 4194304)));
    var i = st();
    ((e = sn(e, n)), e !== null && (Gr(e, n, i), ht(e, i)));
  }
  function Rg(e) {
    var n = e.memoizedState,
      i = 0;
    (n !== null && (i = n.retryLane), fd(e, i));
  }
  function Ng(e, n) {
    var i = 0;
    switch (e.tag) {
      case 13:
        var u = e.stateNode,
          c = e.memoizedState;
        c !== null && (i = c.retryLane);
        break;
      case 19:
        u = e.stateNode;
        break;
      default:
        throw Error(l(314));
    }
    (u !== null && u.delete(n), fd(e, i));
  }
  var dd;
  dd = function (e, n, i) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps || ct.current) dt = !0;
      else {
        if ((e.lanes & i) === 0 && (n.flags & 128) === 0)
          return ((dt = !1), mg(e, n, i));
        dt = (e.flags & 131072) !== 0;
      }
    else ((dt = !1), Fe && (n.flags & 1048576) !== 0 && Vc(n, Pl, n.index));
    switch (((n.lanes = 0), n.tag)) {
      case 2:
        var u = n.type;
        (Ul(e, n), (e = n.pendingProps));
        var c = xr(n, rt.current);
        (Pr(n, i), (c = Bu(null, n, u, e, c, i)));
        var d = bu();
        return (
          (n.flags |= 1),
          typeof c == 'object' &&
          c !== null &&
          typeof c.render == 'function' &&
          c.$$typeof === void 0
            ? ((n.tag = 1),
              (n.memoizedState = null),
              (n.updateQueue = null),
              ft(u) ? ((d = !0), El(n)) : (d = !1),
              (n.memoizedState =
                c.state !== null && c.state !== void 0 ? c.state : null),
              zu(n),
              (c.updater = Bl),
              (n.stateNode = c),
              (c._reactInternals = n),
              Qu(n, u, e, i),
              (n = Xu(null, n, u, !0, d, i)))
            : ((n.tag = 0), Fe && d && Su(n), at(null, n, c, i), (n = n.child)),
          n
        );
      case 16:
        u = n.elementType;
        e: {
          switch (
            (Ul(e, n),
            (e = n.pendingProps),
            (c = u._init),
            (u = c(u._payload)),
            (n.type = u),
            (c = n.tag = Ig(u)),
            (e = Bt(u, e)),
            c)
          ) {
            case 0:
              n = Yu(null, n, u, e, i);
              break e;
            case 1:
              n = jf(null, n, u, e, i);
              break e;
            case 11:
              n = Of(null, n, u, e, i);
              break e;
            case 14:
              n = Df(null, n, u, Bt(u.type, e), i);
              break e;
          }
          throw Error(l(306, u, ''));
        }
        return n;
      case 0:
        return (
          (u = n.type),
          (c = n.pendingProps),
          (c = n.elementType === u ? c : Bt(u, c)),
          Yu(e, n, u, c, i)
        );
      case 1:
        return (
          (u = n.type),
          (c = n.pendingProps),
          (c = n.elementType === u ? c : Bt(u, c)),
          jf(e, n, u, c, i)
        );
      case 3:
        e: {
          if ((Bf(n), e === null)) throw Error(l(387));
          ((u = n.pendingProps),
            (d = n.memoizedState),
            (c = d.element),
            Zc(e, n),
            zl(n, u, null, i));
          var y = n.memoizedState;
          if (((u = y.element), d.isDehydrated))
            if (
              ((d = {
                element: u,
                isDehydrated: !1,
                cache: y.cache,
                pendingSuspenseBoundaries: y.pendingSuspenseBoundaries,
                transitions: y.transitions,
              }),
              (n.updateQueue.baseState = d),
              (n.memoizedState = d),
              n.flags & 256)
            ) {
              ((c = Nr(Error(l(423)), n)), (n = bf(e, n, u, i, c)));
              break e;
            } else if (u !== c) {
              ((c = Nr(Error(l(424)), n)), (n = bf(e, n, u, i, c)));
              break e;
            } else
              for (
                St = Pn(n.stateNode.containerInfo.firstChild),
                  kt = n,
                  Fe = !0,
                  jt = null,
                  i = Gc(n, null, u, i),
                  n.child = i;
                i;

              )
                ((i.flags = (i.flags & -3) | 4096), (i = i.sibling));
          else {
            if ((Er(), u === c)) {
              n = fn(e, n, i);
              break e;
            }
            at(e, n, u, i);
          }
          n = n.child;
        }
        return n;
      case 5:
        return (
          nf(n),
          e === null && _u(n),
          (u = n.type),
          (c = n.pendingProps),
          (d = e !== null ? e.memoizedProps : null),
          (y = c.children),
          gu(u, c) ? (y = null) : d !== null && gu(u, d) && (n.flags |= 32),
          Ff(e, n),
          at(e, n, y, i),
          n.child
        );
      case 6:
        return (e === null && _u(n), null);
      case 13:
        return Uf(e, n, i);
      case 4:
        return (
          Ou(n, n.stateNode.containerInfo),
          (u = n.pendingProps),
          e === null ? (n.child = Cr(n, null, u, i)) : at(e, n, u, i),
          n.child
        );
      case 11:
        return (
          (u = n.type),
          (c = n.pendingProps),
          (c = n.elementType === u ? c : Bt(u, c)),
          Of(e, n, u, c, i)
        );
      case 7:
        return (at(e, n, n.pendingProps, i), n.child);
      case 8:
        return (at(e, n, n.pendingProps.children, i), n.child);
      case 12:
        return (at(e, n, n.pendingProps.children, i), n.child);
      case 10:
        e: {
          if (
            ((u = n.type._context),
            (c = n.pendingProps),
            (d = n.memoizedProps),
            (y = c.value),
            ze(Tl, u._currentValue),
            (u._currentValue = y),
            d !== null)
          )
            if (Ft(d.value, y)) {
              if (d.children === c.children && !ct.current) {
                n = fn(e, n, i);
                break e;
              }
            } else
              for (d = n.child, d !== null && (d.return = n); d !== null; ) {
                var S = d.dependencies;
                if (S !== null) {
                  y = d.child;
                  for (var C = S.firstContext; C !== null; ) {
                    if (C.context === u) {
                      if (d.tag === 1) {
                        ((C = cn(-1, i & -i)), (C.tag = 2));
                        var z = d.updateQueue;
                        if (z !== null) {
                          z = z.shared;
                          var b = z.pending;
                          (b === null
                            ? (C.next = C)
                            : ((C.next = b.next), (b.next = C)),
                            (z.pending = C));
                        }
                      }
                      ((d.lanes |= i),
                        (C = d.alternate),
                        C !== null && (C.lanes |= i),
                        Iu(d.return, i, n),
                        (S.lanes |= i));
                      break;
                    }
                    C = C.next;
                  }
                } else if (d.tag === 10) y = d.type === n.type ? null : d.child;
                else if (d.tag === 18) {
                  if (((y = d.return), y === null)) throw Error(l(341));
                  ((y.lanes |= i),
                    (S = y.alternate),
                    S !== null && (S.lanes |= i),
                    Iu(y, i, n),
                    (y = d.sibling));
                } else y = d.child;
                if (y !== null) y.return = d;
                else
                  for (y = d; y !== null; ) {
                    if (y === n) {
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
          (at(e, n, c.children, i), (n = n.child));
        }
        return n;
      case 9:
        return (
          (c = n.type),
          (u = n.pendingProps.children),
          Pr(n, i),
          (c = Lt(c)),
          (u = u(c)),
          (n.flags |= 1),
          at(e, n, u, i),
          n.child
        );
      case 14:
        return (
          (u = n.type),
          (c = Bt(u, n.pendingProps)),
          (c = Bt(u.type, c)),
          Df(e, n, u, c, i)
        );
      case 15:
        return Mf(e, n, n.type, n.pendingProps, i);
      case 17:
        return (
          (u = n.type),
          (c = n.pendingProps),
          (c = n.elementType === u ? c : Bt(u, c)),
          Ul(e, n),
          (n.tag = 1),
          ft(u) ? ((e = !0), El(n)) : (e = !1),
          Pr(n, i),
          Pf(n, u, c),
          Qu(n, u, c, i),
          Xu(null, n, u, !0, e, i)
        );
      case 19:
        return Hf(e, n, i);
      case 22:
        return Af(e, n, i);
    }
    throw Error(l(156, n.tag));
  };
  function pd(e, n) {
    return Ws(e, n);
  }
  function Tg(e, n, i, u) {
    ((this.tag = e),
      (this.key = i),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = n),
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
  function Dt(e, n, i, u) {
    return new Tg(e, n, i, u);
  }
  function ga(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Ig(e) {
    if (typeof e == 'function') return ga(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ne)) return 11;
      if (e === ae) return 14;
    }
    return 2;
  }
  function Fn(e, n) {
    var i = e.alternate;
    return (
      i === null
        ? ((i = Dt(e.tag, n, e.key, e.mode)),
          (i.elementType = e.elementType),
          (i.type = e.type),
          (i.stateNode = e.stateNode),
          (i.alternate = e),
          (e.alternate = i))
        : ((i.pendingProps = n),
          (i.type = e.type),
          (i.flags = 0),
          (i.subtreeFlags = 0),
          (i.deletions = null)),
      (i.flags = e.flags & 14680064),
      (i.childLanes = e.childLanes),
      (i.lanes = e.lanes),
      (i.child = e.child),
      (i.memoizedProps = e.memoizedProps),
      (i.memoizedState = e.memoizedState),
      (i.updateQueue = e.updateQueue),
      (n = e.dependencies),
      (i.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (i.sibling = e.sibling),
      (i.index = e.index),
      (i.ref = e.ref),
      i
    );
  }
  function Jl(e, n, i, u, c, d) {
    var y = 2;
    if (((u = e), typeof e == 'function')) ga(e) && (y = 1);
    else if (typeof e == 'string') y = 5;
    else
      e: switch (e) {
        case G:
          return er(i.children, c, d, n);
        case ue:
          ((y = 8), (c |= 8));
          break;
        case se:
          return (
            (e = Dt(12, i, n, c | 2)),
            (e.elementType = se),
            (e.lanes = d),
            e
          );
        case Z:
          return ((e = Dt(13, i, n, c)), (e.elementType = Z), (e.lanes = d), e);
        case J:
          return ((e = Dt(19, i, n, c)), (e.elementType = J), (e.lanes = d), e);
        case we:
          return Zl(i, c, d, n);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case me:
                y = 10;
                break e;
              case te:
                y = 9;
                break e;
              case ne:
                y = 11;
                break e;
              case ae:
                y = 14;
                break e;
              case Ce:
                ((y = 16), (u = null));
                break e;
            }
          throw Error(l(130, e == null ? e : typeof e, ''));
      }
    return (
      (n = Dt(y, i, n, c)),
      (n.elementType = e),
      (n.type = u),
      (n.lanes = d),
      n
    );
  }
  function er(e, n, i, u) {
    return ((e = Dt(7, e, u, n)), (e.lanes = i), e);
  }
  function Zl(e, n, i, u) {
    return (
      (e = Dt(22, e, u, n)),
      (e.elementType = we),
      (e.lanes = i),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function ya(e, n, i) {
    return ((e = Dt(6, e, null, n)), (e.lanes = i), e);
  }
  function va(e, n, i) {
    return (
      (n = Dt(4, e.children !== null ? e.children : [], e.key, n)),
      (n.lanes = i),
      (n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      n
    );
  }
  function Lg(e, n, i, u, c) {
    ((this.tag = n),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Wo(0)),
      (this.expirationTimes = Wo(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Wo(0)),
      (this.identifierPrefix = u),
      (this.onRecoverableError = c),
      (this.mutableSourceEagerHydrationData = null));
  }
  function wa(e, n, i, u, c, d, y, S, C) {
    return (
      (e = new Lg(e, n, i, S, C)),
      n === 1 ? ((n = 1), d === !0 && (n |= 8)) : (n = 0),
      (d = Dt(3, null, null, n)),
      (e.current = d),
      (d.stateNode = e),
      (d.memoizedState = {
        element: u,
        isDehydrated: i,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      zu(d),
      e
    );
  }
  function zg(e, n, i) {
    var u =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: D,
      key: u == null ? null : '' + u,
      children: e,
      containerInfo: n,
      implementation: i,
    };
  }
  function hd(e) {
    if (!e) return Nn;
    e = e._reactInternals;
    e: {
      if ($n(e) !== e || e.tag !== 1) throw Error(l(170));
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (ft(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(l(171));
    }
    if (e.tag === 1) {
      var i = e.type;
      if (ft(i)) return Uc(e, i, n);
    }
    return n;
  }
  function md(e, n, i, u, c, d, y, S, C) {
    return (
      (e = wa(i, u, !0, e, c, d, y, S, C)),
      (e.context = hd(null)),
      (i = e.current),
      (u = st()),
      (c = Mn(i)),
      (d = cn(u, c)),
      (d.callback = n ?? null),
      Ln(i, d, c),
      (e.current.lanes = c),
      Gr(e, c, u),
      ht(e, u),
      e
    );
  }
  function eo(e, n, i, u) {
    var c = n.current,
      d = st(),
      y = Mn(c);
    return (
      (i = hd(i)),
      n.context === null ? (n.context = i) : (n.pendingContext = i),
      (n = cn(d, y)),
      (n.payload = { element: e }),
      (u = u === void 0 ? null : u),
      u !== null && (n.callback = u),
      (e = Ln(c, n, y)),
      e !== null && ($t(e, c, y, d), Ll(e, c, y)),
      y
    );
  }
  function to(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function gd(e, n) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < n ? i : n;
    }
  }
  function xa(e, n) {
    (gd(e, n), (e = e.alternate) && gd(e, n));
  }
  function Og() {
    return null;
  }
  var yd =
    typeof reportError == 'function'
      ? reportError
      : function (e) {
          console.error(e);
        };
  function ka(e) {
    this._internalRoot = e;
  }
  ((no.prototype.render = ka.prototype.render =
    function (e) {
      var n = this._internalRoot;
      if (n === null) throw Error(l(409));
      eo(e, n, null, null);
    }),
    (no.prototype.unmount = ka.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var n = e.containerInfo;
          (Gn(function () {
            eo(null, e, null, null);
          }),
            (n[ln] = null));
        }
      }));
  function no(e) {
    this._internalRoot = e;
  }
  no.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var n = Zs();
      e = { blockedOn: null, target: e, priority: n };
      for (var i = 0; i < En.length && n !== 0 && n < En[i].priority; i++);
      (En.splice(i, 0, e), i === 0 && nc(e));
    }
  };
  function Sa(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function ro(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
    );
  }
  function vd() {}
  function Dg(e, n, i, u, c) {
    if (c) {
      if (typeof u == 'function') {
        var d = u;
        u = function () {
          var z = to(y);
          d.call(z);
        };
      }
      var y = md(n, u, e, 0, null, !1, !1, '', vd);
      return (
        (e._reactRootContainer = y),
        (e[ln] = y.current),
        fi(e.nodeType === 8 ? e.parentNode : e),
        Gn(),
        y
      );
    }
    for (; (c = e.lastChild); ) e.removeChild(c);
    if (typeof u == 'function') {
      var S = u;
      u = function () {
        var z = to(C);
        S.call(z);
      };
    }
    var C = wa(e, 0, !1, null, null, !1, !1, '', vd);
    return (
      (e._reactRootContainer = C),
      (e[ln] = C.current),
      fi(e.nodeType === 8 ? e.parentNode : e),
      Gn(function () {
        eo(n, C, i, u);
      }),
      C
    );
  }
  function io(e, n, i, u, c) {
    var d = i._reactRootContainer;
    if (d) {
      var y = d;
      if (typeof c == 'function') {
        var S = c;
        c = function () {
          var C = to(y);
          S.call(C);
        };
      }
      eo(n, y, e, c);
    } else y = Dg(i, n, e, c, u);
    return to(y);
  }
  ((Gs = function (e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var i = Xr(n.pendingLanes);
          i !== 0 &&
            (Qo(n, i | 1),
            ht(n, $e()),
            (Pe & 6) === 0 && ((Lr = $e() + 500), Tn()));
        }
        break;
      case 13:
        (Gn(function () {
          var u = sn(e, 1);
          if (u !== null) {
            var c = st();
            $t(u, e, 1, c);
          }
        }),
          xa(e, 1));
    }
  }),
    (Ko = function (e) {
      if (e.tag === 13) {
        var n = sn(e, 134217728);
        if (n !== null) {
          var i = st();
          $t(n, e, 134217728, i);
        }
        xa(e, 134217728);
      }
    }),
    (Js = function (e) {
      if (e.tag === 13) {
        var n = Mn(e),
          i = sn(e, n);
        if (i !== null) {
          var u = st();
          $t(i, e, n, u);
        }
        xa(e, n);
      }
    }),
    (Zs = function () {
      return Le;
    }),
    (ec = function (e, n) {
      var i = Le;
      try {
        return ((Le = e), n());
      } finally {
        Le = i;
      }
    }),
    (Bo = function (e, n, i) {
      switch (n) {
        case 'input':
          if ((ur(e, i), (n = i.name), i.type === 'radio' && n != null)) {
            for (i = e; i.parentNode; ) i = i.parentNode;
            for (
              i = i.querySelectorAll(
                'input[name=' + JSON.stringify('' + n) + '][type="radio"]',
              ),
                n = 0;
              n < i.length;
              n++
            ) {
              var u = i[n];
              if (u !== e && u.form === e.form) {
                var c = kl(u);
                if (!c) throw Error(l(90));
                (qi(u), ur(u, c));
              }
            }
          }
          break;
        case 'textarea':
          Gi(e, i);
          break;
        case 'select':
          ((n = i.value), n != null && vn(e, !!i.multiple, n, !1));
      }
    }),
    (js = pa),
    (Bs = Gn));
  var Mg = { usingClientEntryPoint: !1, Events: [hi, vr, kl, As, Fs, pa] },
    Ni = {
      findFiberByHostInstance: Hn,
      bundleType: 0,
      version: '18.3.1',
      rendererPackageName: 'react-dom',
    },
    Ag = {
      bundleType: Ni.bundleType,
      version: Ni.version,
      rendererPackageName: Ni.rendererPackageName,
      rendererConfig: Ni.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: W.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Hs(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: Ni.findFiberByHostInstance || Og,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var lo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!lo.isDisabled && lo.supportsFiber)
      try {
        ((nl = lo.inject(Ag)), (Wt = lo));
      } catch {}
  }
  return (
    (mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mg),
    (mt.createPortal = function (e, n) {
      var i =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Sa(n)) throw Error(l(200));
      return zg(e, n, null, i);
    }),
    (mt.createRoot = function (e, n) {
      if (!Sa(e)) throw Error(l(299));
      var i = !1,
        u = '',
        c = yd;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (c = n.onRecoverableError)),
        (n = wa(e, 1, !1, null, null, i, !1, u, c)),
        (e[ln] = n.current),
        fi(e.nodeType === 8 ? e.parentNode : e),
        new ka(n)
      );
    }),
    (mt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var n = e._reactInternals;
      if (n === void 0)
        throw typeof e.render == 'function'
          ? Error(l(188))
          : ((e = Object.keys(e).join(',')), Error(l(268, e)));
      return ((e = Hs(n)), (e = e === null ? null : e.stateNode), e);
    }),
    (mt.flushSync = function (e) {
      return Gn(e);
    }),
    (mt.hydrate = function (e, n, i) {
      if (!ro(n)) throw Error(l(200));
      return io(null, e, n, !0, i);
    }),
    (mt.hydrateRoot = function (e, n, i) {
      if (!Sa(e)) throw Error(l(405));
      var u = (i != null && i.hydratedSources) || null,
        c = !1,
        d = '',
        y = yd;
      if (
        (i != null &&
          (i.unstable_strictMode === !0 && (c = !0),
          i.identifierPrefix !== void 0 && (d = i.identifierPrefix),
          i.onRecoverableError !== void 0 && (y = i.onRecoverableError)),
        (n = md(n, null, e, 1, i ?? null, c, !1, d, y)),
        (e[ln] = n.current),
        fi(e),
        u)
      )
        for (e = 0; e < u.length; e++)
          ((i = u[e]),
            (c = i._getVersion),
            (c = c(i._source)),
            n.mutableSourceEagerHydrationData == null
              ? (n.mutableSourceEagerHydrationData = [i, c])
              : n.mutableSourceEagerHydrationData.push(i, c));
      return new no(n);
    }),
    (mt.render = function (e, n, i) {
      if (!ro(n)) throw Error(l(200));
      return io(null, e, n, !1, i);
    }),
    (mt.unmountComponentAtNode = function (e) {
      if (!ro(e)) throw Error(l(40));
      return e._reactRootContainer
        ? (Gn(function () {
            io(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[ln] = null));
            });
          }),
          !0)
        : !1;
    }),
    (mt.unstable_batchedUpdates = pa),
    (mt.unstable_renderSubtreeIntoContainer = function (e, n, i, u) {
      if (!ro(i)) throw Error(l(200));
      if (e == null || e._reactInternals === void 0) throw Error(l(38));
      return io(e, n, i, !1, u);
    }),
    (mt.version = '18.3.1-next-f1338f8080-20240426'),
    mt
  );
}
var Pd;
function Wg() {
  if (Pd) return _a.exports;
  Pd = 1;
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return (t(), (_a.exports = Vg()), _a.exports);
}
var Rd;
function Qg() {
  if (Rd) return oo;
  Rd = 1;
  var t = Wg();
  return ((oo.createRoot = t.createRoot), (oo.hydrateRoot = t.hydrateRoot), oo);
}
var Kg = Qg();
const qg = Po(Kg);
/**
 * react-router v7.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Nd = 'popstate';
function Yg(t = {}) {
  function r(o, a) {
    let { pathname: s, search: f, hash: p } = o.location;
    return qa(
      '',
      { pathname: s, search: f, hash: p },
      (a.state && a.state.usr) || null,
      (a.state && a.state.key) || 'default',
    );
  }
  function l(o, a) {
    return typeof a == 'string' ? a : Bi(a);
  }
  return Gg(r, l, null, t);
}
function be(t, r) {
  if (t === !1 || t === null || typeof t > 'u') throw new Error(r);
}
function Jt(t, r) {
  if (!t) {
    typeof console < 'u' && console.warn(r);
    try {
      throw new Error(r);
    } catch {}
  }
}
function Xg() {
  return Math.random().toString(36).substring(2, 10);
}
function Td(t, r) {
  return { usr: t.state, key: t.key, idx: r };
}
function qa(t, r, l = null, o) {
  return {
    pathname: typeof t == 'string' ? t : t.pathname,
    search: '',
    hash: '',
    ...(typeof r == 'string' ? Br(r) : r),
    state: l,
    key: (r && r.key) || o || Xg(),
  };
}
function Bi({ pathname: t = '/', search: r = '', hash: l = '' }) {
  return (
    r && r !== '?' && (t += r.charAt(0) === '?' ? r : '?' + r),
    l && l !== '#' && (t += l.charAt(0) === '#' ? l : '#' + l),
    t
  );
}
function Br(t) {
  let r = {};
  if (t) {
    let l = t.indexOf('#');
    l >= 0 && ((r.hash = t.substring(l)), (t = t.substring(0, l)));
    let o = t.indexOf('?');
    (o >= 0 && ((r.search = t.substring(o)), (t = t.substring(0, o))),
      t && (r.pathname = t));
  }
  return r;
}
function Gg(t, r, l, o = {}) {
  let { window: a = document.defaultView, v5Compat: s = !1 } = o,
    f = a.history,
    p = 'POP',
    h = null,
    m = g();
  m == null && ((m = 0), f.replaceState({ ...f.state, idx: m }, ''));
  function g() {
    return (f.state || { idx: null }).idx;
  }
  function v() {
    p = 'POP';
    let O = g(),
      P = O == null ? null : O - m;
    ((m = O), h && h({ action: p, location: T.location, delta: P }));
  }
  function x(O, P) {
    p = 'PUSH';
    let U = qa(T.location, O, P);
    m = g() + 1;
    let M = Td(U, m),
      W = T.createHref(U);
    try {
      f.pushState(M, '', W);
    } catch (q) {
      if (q instanceof DOMException && q.name === 'DataCloneError') throw q;
      a.location.assign(W);
    }
    s && h && h({ action: p, location: T.location, delta: 1 });
  }
  function w(O, P) {
    p = 'REPLACE';
    let U = qa(T.location, O, P);
    m = g();
    let M = Td(U, m),
      W = T.createHref(U);
    (f.replaceState(M, '', W),
      s && h && h({ action: p, location: T.location, delta: 0 }));
  }
  function L(O) {
    return Jg(O);
  }
  let T = {
    get action() {
      return p;
    },
    get location() {
      return t(a, f);
    },
    listen(O) {
      if (h) throw new Error('A history only accepts one active listener');
      return (
        a.addEventListener(Nd, v),
        (h = O),
        () => {
          (a.removeEventListener(Nd, v), (h = null));
        }
      );
    },
    createHref(O) {
      return r(a, O);
    },
    createURL: L,
    encodeLocation(O) {
      let P = L(O);
      return { pathname: P.pathname, search: P.search, hash: P.hash };
    },
    push: x,
    replace: w,
    go(O) {
      return f.go(O);
    },
  };
  return T;
}
function Jg(t, r = !1) {
  let l = 'http://localhost';
  (typeof window < 'u' &&
    (l =
      window.location.origin !== 'null'
        ? window.location.origin
        : window.location.href),
    be(l, 'No window.location.(origin|href) available to create URL'));
  let o = typeof t == 'string' ? t : Bi(t);
  return (
    (o = o.replace(/ $/, '%20')),
    !r && o.startsWith('//') && (o = l + o),
    new URL(o, l)
  );
}
function Ip(t, r, l = '/') {
  return Zg(t, r, l, !1);
}
function Zg(t, r, l, o) {
  let a = typeof r == 'string' ? Br(r) : r,
    s = mn(a.pathname || '/', l);
  if (s == null) return null;
  let f = Lp(t);
  ey(f);
  let p = null;
  for (let h = 0; p == null && h < f.length; ++h) {
    let m = fy(s);
    p = sy(f[h], m, o);
  }
  return p;
}
function Lp(t, r = [], l = [], o = '') {
  let a = (s, f, p) => {
    let h = {
      relativePath: p === void 0 ? s.path || '' : p,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: f,
      route: s,
    };
    h.relativePath.startsWith('/') &&
      (be(
        h.relativePath.startsWith(o),
        `Absolute route path "${h.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
      (h.relativePath = h.relativePath.slice(o.length)));
    let m = pn([o, h.relativePath]),
      g = l.concat(h);
    (s.children &&
      s.children.length > 0 &&
      (be(
        s.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${m}".`,
      ),
      Lp(s.children, r, g, m)),
      !(s.path == null && !s.index) &&
        r.push({ path: m, score: uy(m, s.index), routesMeta: g }));
  };
  return (
    t.forEach((s, f) => {
      if (s.path === '' || !s.path?.includes('?')) a(s, f);
      else for (let p of zp(s.path)) a(s, f, p);
    }),
    r
  );
}
function zp(t) {
  let r = t.split('/');
  if (r.length === 0) return [];
  let [l, ...o] = r,
    a = l.endsWith('?'),
    s = l.replace(/\?$/, '');
  if (o.length === 0) return a ? [s, ''] : [s];
  let f = zp(o.join('/')),
    p = [];
  return (
    p.push(...f.map((h) => (h === '' ? s : [s, h].join('/')))),
    a && p.push(...f),
    p.map((h) => (t.startsWith('/') && h === '' ? '/' : h))
  );
}
function ey(t) {
  t.sort((r, l) =>
    r.score !== l.score
      ? l.score - r.score
      : ay(
          r.routesMeta.map((o) => o.childrenIndex),
          l.routesMeta.map((o) => o.childrenIndex),
        ),
  );
}
var ty = /^:[\w-]+$/,
  ny = 3,
  ry = 2,
  iy = 1,
  ly = 10,
  oy = -2,
  Id = (t) => t === '*';
function uy(t, r) {
  let l = t.split('/'),
    o = l.length;
  return (
    l.some(Id) && (o += oy),
    r && (o += ry),
    l
      .filter((a) => !Id(a))
      .reduce((a, s) => a + (ty.test(s) ? ny : s === '' ? iy : ly), o)
  );
}
function ay(t, r) {
  return t.length === r.length && t.slice(0, -1).every((o, a) => o === r[a])
    ? t[t.length - 1] - r[r.length - 1]
    : 0;
}
function sy(t, r, l = !1) {
  let { routesMeta: o } = t,
    a = {},
    s = '/',
    f = [];
  for (let p = 0; p < o.length; ++p) {
    let h = o[p],
      m = p === o.length - 1,
      g = s === '/' ? r : r.slice(s.length) || '/',
      v = yo(
        { path: h.relativePath, caseSensitive: h.caseSensitive, end: m },
        g,
      ),
      x = h.route;
    if (
      (!v &&
        m &&
        l &&
        !o[o.length - 1].route.index &&
        (v = yo(
          { path: h.relativePath, caseSensitive: h.caseSensitive, end: !1 },
          g,
        )),
      !v)
    )
      return null;
    (Object.assign(a, v.params),
      f.push({
        params: a,
        pathname: pn([s, v.pathname]),
        pathnameBase: my(pn([s, v.pathnameBase])),
        route: x,
      }),
      v.pathnameBase !== '/' && (s = pn([s, v.pathnameBase])));
  }
  return f;
}
function yo(t, r) {
  typeof t == 'string' && (t = { path: t, caseSensitive: !1, end: !0 });
  let [l, o] = cy(t.path, t.caseSensitive, t.end),
    a = r.match(l);
  if (!a) return null;
  let s = a[0],
    f = s.replace(/(.)\/+$/, '$1'),
    p = a.slice(1);
  return {
    params: o.reduce((m, { paramName: g, isOptional: v }, x) => {
      if (g === '*') {
        let L = p[x] || '';
        f = s.slice(0, s.length - L.length).replace(/(.)\/+$/, '$1');
      }
      const w = p[x];
      return (
        v && !w ? (m[g] = void 0) : (m[g] = (w || '').replace(/%2F/g, '/')),
        m
      );
    }, {}),
    pathname: s,
    pathnameBase: f,
    pattern: t,
  };
}
function cy(t, r = !1, l = !0) {
  Jt(
    t === '*' || !t.endsWith('*') || t.endsWith('/*'),
    `Route path "${t}" will be treated as if it were "${t.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/, '/*')}".`,
  );
  let o = [],
    a =
      '^' +
      t
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
    t.endsWith('*')
      ? (o.push({ paramName: '*' }),
        (a += t === '*' || t === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : l
        ? (a += '\\/*$')
        : t !== '' && t !== '/' && (a += '(?:(?=\\/|$))'),
    [new RegExp(a, r ? void 0 : 'i'), o]
  );
}
function fy(t) {
  try {
    return t
      .split('/')
      .map((r) => decodeURIComponent(r).replace(/\//g, '%2F'))
      .join('/');
  } catch (r) {
    return (
      Jt(
        !1,
        `The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`,
      ),
      t
    );
  }
}
function mn(t, r) {
  if (r === '/') return t;
  if (!t.toLowerCase().startsWith(r.toLowerCase())) return null;
  let l = r.endsWith('/') ? r.length - 1 : r.length,
    o = t.charAt(l);
  return o && o !== '/' ? null : t.slice(l) || '/';
}
function dy(t, r = '/') {
  let {
    pathname: l,
    search: o = '',
    hash: a = '',
  } = typeof t == 'string' ? Br(t) : t;
  return {
    pathname: l ? (l.startsWith('/') ? l : py(l, r)) : r,
    search: gy(o),
    hash: yy(a),
  };
}
function py(t, r) {
  let l = r.replace(/\/+$/, '').split('/');
  return (
    t.split('/').forEach((a) => {
      a === '..' ? l.length > 1 && l.pop() : a !== '.' && l.push(a);
    }),
    l.length > 1 ? l.join('/') : '/'
  );
}
function Na(t, r, l, o) {
  return `Cannot include a '${t}' character in a manually specified \`to.${r}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function hy(t) {
  return t.filter(
    (r, l) => l === 0 || (r.route.path && r.route.path.length > 0),
  );
}
function Op(t) {
  let r = hy(t);
  return r.map((l, o) => (o === r.length - 1 ? l.pathname : l.pathnameBase));
}
function Dp(t, r, l, o = !1) {
  let a;
  typeof t == 'string'
    ? (a = Br(t))
    : ((a = { ...t }),
      be(
        !a.pathname || !a.pathname.includes('?'),
        Na('?', 'pathname', 'search', a),
      ),
      be(
        !a.pathname || !a.pathname.includes('#'),
        Na('#', 'pathname', 'hash', a),
      ),
      be(!a.search || !a.search.includes('#'), Na('#', 'search', 'hash', a)));
  let s = t === '' || a.pathname === '',
    f = s ? '/' : a.pathname,
    p;
  if (f == null) p = l;
  else {
    let v = r.length - 1;
    if (!o && f.startsWith('..')) {
      let x = f.split('/');
      for (; x[0] === '..'; ) (x.shift(), (v -= 1));
      a.pathname = x.join('/');
    }
    p = v >= 0 ? r[v] : '/';
  }
  let h = dy(a, p),
    m = f && f !== '/' && f.endsWith('/'),
    g = (s || f === '.') && l.endsWith('/');
  return (!h.pathname.endsWith('/') && (m || g) && (h.pathname += '/'), h);
}
var pn = (t) => t.join('/').replace(/\/\/+/g, '/'),
  my = (t) => t.replace(/\/+$/, '').replace(/^\/*/, '/'),
  gy = (t) => (!t || t === '?' ? '' : t.startsWith('?') ? t : '?' + t),
  yy = (t) => (!t || t === '#' ? '' : t.startsWith('#') ? t : '#' + t);
function vy(t) {
  return (
    t != null &&
    typeof t.status == 'number' &&
    typeof t.statusText == 'string' &&
    typeof t.internal == 'boolean' &&
    'data' in t
  );
}
var Mp = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(Mp);
var wy = ['GET', ...Mp];
new Set(wy);
var br = A.createContext(null);
br.displayName = 'DataRouter';
var No = A.createContext(null);
No.displayName = 'DataRouterState';
A.createContext(!1);
var Ap = A.createContext({ isTransitioning: !1 });
Ap.displayName = 'ViewTransition';
var xy = A.createContext(new Map());
xy.displayName = 'Fetchers';
var ky = A.createContext(null);
ky.displayName = 'Await';
var en = A.createContext(null);
en.displayName = 'Navigation';
var Hi = A.createContext(null);
Hi.displayName = 'Location';
var tn = A.createContext({ outlet: null, matches: [], isDataRoute: !1 });
tn.displayName = 'Route';
var ds = A.createContext(null);
ds.displayName = 'RouteError';
function Sy(t, { relative: r } = {}) {
  be(
    Vi(),
    'useHref() may be used only in the context of a <Router> component.',
  );
  let { basename: l, navigator: o } = A.useContext(en),
    { hash: a, pathname: s, search: f } = Wi(t, { relative: r }),
    p = s;
  return (
    l !== '/' && (p = s === '/' ? l : pn([l, s])),
    o.createHref({ pathname: p, search: f, hash: a })
  );
}
function Vi() {
  return A.useContext(Hi) != null;
}
function ir() {
  return (
    be(
      Vi(),
      'useLocation() may be used only in the context of a <Router> component.',
    ),
    A.useContext(Hi).location
  );
}
var Fp =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function jp(t) {
  A.useContext(en).static || A.useLayoutEffect(t);
}
function Ey() {
  let { isDataRoute: t } = A.useContext(tn);
  return t ? Fy() : Cy();
}
function Cy() {
  be(
    Vi(),
    'useNavigate() may be used only in the context of a <Router> component.',
  );
  let t = A.useContext(br),
    { basename: r, navigator: l } = A.useContext(en),
    { matches: o } = A.useContext(tn),
    { pathname: a } = ir(),
    s = JSON.stringify(Op(o)),
    f = A.useRef(!1);
  return (
    jp(() => {
      f.current = !0;
    }),
    A.useCallback(
      (h, m = {}) => {
        if ((Jt(f.current, Fp), !f.current)) return;
        if (typeof h == 'number') {
          l.go(h);
          return;
        }
        let g = Dp(h, JSON.parse(s), a, m.relative === 'path');
        (t == null &&
          r !== '/' &&
          (g.pathname = g.pathname === '/' ? r : pn([r, g.pathname])),
          (m.replace ? l.replace : l.push)(g, m.state, m));
      },
      [r, l, s, a, t],
    )
  );
}
A.createContext(null);
function _y() {
  let { matches: t } = A.useContext(tn),
    r = t[t.length - 1];
  return r ? r.params : {};
}
function Wi(t, { relative: r } = {}) {
  let { matches: l } = A.useContext(tn),
    { pathname: o } = ir(),
    a = JSON.stringify(Op(l));
  return A.useMemo(() => Dp(t, JSON.parse(a), o, r === 'path'), [t, a, o, r]);
}
function Py(t, r) {
  return Bp(t, r);
}
function Bp(t, r, l, o) {
  be(
    Vi(),
    'useRoutes() may be used only in the context of a <Router> component.',
  );
  let { navigator: a } = A.useContext(en),
    { matches: s } = A.useContext(tn),
    f = s[s.length - 1],
    p = f ? f.params : {},
    h = f ? f.pathname : '/',
    m = f ? f.pathnameBase : '/',
    g = f && f.route;
  {
    let P = (g && g.path) || '';
    bp(
      h,
      !g || P.endsWith('*') || P.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${P}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${P}"> to <Route path="${P === '/' ? '*' : `${P}/*`}">.`,
    );
  }
  let v = ir(),
    x;
  if (r) {
    let P = typeof r == 'string' ? Br(r) : r;
    (be(
      m === '/' || P.pathname?.startsWith(m),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${P.pathname}" was given in the \`location\` prop.`,
    ),
      (x = P));
  } else x = v;
  let w = x.pathname || '/',
    L = w;
  if (m !== '/') {
    let P = m.replace(/^\//, '').split('/');
    L = '/' + w.replace(/^\//, '').split('/').slice(P.length).join('/');
  }
  let T = Ip(t, { pathname: L });
  (Jt(
    g || T != null,
    `No routes matched location "${x.pathname}${x.search}${x.hash}" `,
  ),
    Jt(
      T == null ||
        T[T.length - 1].route.element !== void 0 ||
        T[T.length - 1].route.Component !== void 0 ||
        T[T.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let O = Ly(
    T &&
      T.map((P) =>
        Object.assign({}, P, {
          params: Object.assign({}, p, P.params),
          pathname: pn([
            m,
            a.encodeLocation
              ? a.encodeLocation(P.pathname).pathname
              : P.pathname,
          ]),
          pathnameBase:
            P.pathnameBase === '/'
              ? m
              : pn([
                  m,
                  a.encodeLocation
                    ? a.encodeLocation(P.pathnameBase).pathname
                    : P.pathnameBase,
                ]),
        }),
      ),
    s,
    l,
    o,
  );
  return r && O
    ? A.createElement(
        Hi.Provider,
        {
          value: {
            location: {
              pathname: '/',
              search: '',
              hash: '',
              state: null,
              key: 'default',
              ...x,
            },
            navigationType: 'POP',
          },
        },
        O,
      )
    : O;
}
function Ry() {
  let t = Ay(),
    r = vy(t)
      ? `${t.status} ${t.statusText}`
      : t instanceof Error
        ? t.message
        : JSON.stringify(t),
    l = t instanceof Error ? t.stack : null,
    o = 'rgba(200,200,200, 0.5)',
    a = { padding: '0.5rem', backgroundColor: o },
    s = { padding: '2px 4px', backgroundColor: o },
    f = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', t),
    (f = A.createElement(
      A.Fragment,
      null,
      A.createElement('p', null, '💿 Hey developer 👋'),
      A.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        A.createElement('code', { style: s }, 'ErrorBoundary'),
        ' or',
        ' ',
        A.createElement('code', { style: s }, 'errorElement'),
        ' prop on your route.',
      ),
    )),
    A.createElement(
      A.Fragment,
      null,
      A.createElement('h2', null, 'Unexpected Application Error!'),
      A.createElement('h3', { style: { fontStyle: 'italic' } }, r),
      l ? A.createElement('pre', { style: a }, l) : null,
      f,
    )
  );
}
var Ny = A.createElement(Ry, null),
  Ty = class extends A.Component {
    constructor(t) {
      (super(t),
        (this.state = {
          location: t.location,
          revalidation: t.revalidation,
          error: t.error,
        }));
    }
    static getDerivedStateFromError(t) {
      return { error: t };
    }
    static getDerivedStateFromProps(t, r) {
      return r.location !== t.location ||
        (r.revalidation !== 'idle' && t.revalidation === 'idle')
        ? { error: t.error, location: t.location, revalidation: t.revalidation }
        : {
            error: t.error !== void 0 ? t.error : r.error,
            location: r.location,
            revalidation: t.revalidation || r.revalidation,
          };
    }
    componentDidCatch(t, r) {
      console.error(
        'React Router caught the following error during render',
        t,
        r,
      );
    }
    render() {
      return this.state.error !== void 0
        ? A.createElement(
            tn.Provider,
            { value: this.props.routeContext },
            A.createElement(ds.Provider, {
              value: this.state.error,
              children: this.props.component,
            }),
          )
        : this.props.children;
    }
  };
function Iy({ routeContext: t, match: r, children: l }) {
  let o = A.useContext(br);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = r.route.id),
    A.createElement(tn.Provider, { value: t }, l)
  );
}
function Ly(t, r = [], l = null, o = null) {
  if (t == null) {
    if (!l) return null;
    if (l.errors) t = l.matches;
    else if (r.length === 0 && !l.initialized && l.matches.length > 0)
      t = l.matches;
    else return null;
  }
  let a = t,
    s = l?.errors;
  if (s != null) {
    let h = a.findIndex((m) => m.route.id && s?.[m.route.id] !== void 0);
    (be(
      h >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(s).join(',')}`,
    ),
      (a = a.slice(0, Math.min(a.length, h + 1))));
  }
  let f = !1,
    p = -1;
  if (l)
    for (let h = 0; h < a.length; h++) {
      let m = a[h];
      if (
        ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (p = h),
        m.route.id)
      ) {
        let { loaderData: g, errors: v } = l,
          x =
            m.route.loader &&
            !g.hasOwnProperty(m.route.id) &&
            (!v || v[m.route.id] === void 0);
        if (m.route.lazy || x) {
          ((f = !0), p >= 0 ? (a = a.slice(0, p + 1)) : (a = [a[0]]));
          break;
        }
      }
    }
  return a.reduceRight((h, m, g) => {
    let v,
      x = !1,
      w = null,
      L = null;
    l &&
      ((v = s && m.route.id ? s[m.route.id] : void 0),
      (w = m.route.errorElement || Ny),
      f &&
        (p < 0 && g === 0
          ? (bp(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration',
            ),
            (x = !0),
            (L = null))
          : p === g &&
            ((x = !0), (L = m.route.hydrateFallbackElement || null))));
    let T = r.concat(a.slice(0, g + 1)),
      O = () => {
        let P;
        return (
          v
            ? (P = w)
            : x
              ? (P = L)
              : m.route.Component
                ? (P = A.createElement(m.route.Component, null))
                : m.route.element
                  ? (P = m.route.element)
                  : (P = h),
          A.createElement(Iy, {
            match: m,
            routeContext: { outlet: h, matches: T, isDataRoute: l != null },
            children: P,
          })
        );
      };
    return l && (m.route.ErrorBoundary || m.route.errorElement || g === 0)
      ? A.createElement(Ty, {
          location: l.location,
          revalidation: l.revalidation,
          component: w,
          error: v,
          children: O(),
          routeContext: { outlet: null, matches: T, isDataRoute: !0 },
        })
      : O();
  }, null);
}
function ps(t) {
  return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function zy(t) {
  let r = A.useContext(br);
  return (be(r, ps(t)), r);
}
function Oy(t) {
  let r = A.useContext(No);
  return (be(r, ps(t)), r);
}
function Dy(t) {
  let r = A.useContext(tn);
  return (be(r, ps(t)), r);
}
function hs(t) {
  let r = Dy(t),
    l = r.matches[r.matches.length - 1];
  return (
    be(
      l.route.id,
      `${t} can only be used on routes that contain a unique "id"`,
    ),
    l.route.id
  );
}
function My() {
  return hs('useRouteId');
}
function Ay() {
  let t = A.useContext(ds),
    r = Oy('useRouteError'),
    l = hs('useRouteError');
  return t !== void 0 ? t : r.errors?.[l];
}
function Fy() {
  let { router: t } = zy('useNavigate'),
    r = hs('useNavigate'),
    l = A.useRef(!1);
  return (
    jp(() => {
      l.current = !0;
    }),
    A.useCallback(
      async (a, s = {}) => {
        (Jt(l.current, Fp),
          l.current &&
            (typeof a == 'number'
              ? t.navigate(a)
              : await t.navigate(a, { fromRouteId: r, ...s })));
      },
      [t, r],
    )
  );
}
var Ld = {};
function bp(t, r, l) {
  !r && !Ld[t] && ((Ld[t] = !0), Jt(!1, l));
}
A.memo(jy);
function jy({ routes: t, future: r, state: l }) {
  return Bp(t, void 0, l, r);
}
function Mr(t) {
  be(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.',
  );
}
function By({
  basename: t = '/',
  children: r = null,
  location: l,
  navigationType: o = 'POP',
  navigator: a,
  static: s = !1,
}) {
  be(
    !Vi(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.',
  );
  let f = t.replace(/^\/*/, '/'),
    p = A.useMemo(
      () => ({ basename: f, navigator: a, static: s, future: {} }),
      [f, a, s],
    );
  typeof l == 'string' && (l = Br(l));
  let {
      pathname: h = '/',
      search: m = '',
      hash: g = '',
      state: v = null,
      key: x = 'default',
    } = l,
    w = A.useMemo(() => {
      let L = mn(h, f);
      return L == null
        ? null
        : {
            location: { pathname: L, search: m, hash: g, state: v, key: x },
            navigationType: o,
          };
    }, [f, h, m, g, v, x, o]);
  return (
    Jt(
      w != null,
      `<Router basename="${f}"> is not able to match the URL "${h}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    w == null
      ? null
      : A.createElement(
          en.Provider,
          { value: p },
          A.createElement(Hi.Provider, { children: r, value: w }),
        )
  );
}
function by({ children: t, location: r }) {
  return Py(Ya(t), r);
}
function Ya(t, r = []) {
  let l = [];
  return (
    A.Children.forEach(t, (o, a) => {
      if (!A.isValidElement(o)) return;
      let s = [...r, a];
      if (o.type === A.Fragment) {
        l.push.apply(l, Ya(o.props.children, s));
        return;
      }
      (be(
        o.type === Mr,
        `[${typeof o.type == 'string' ? o.type : o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        be(
          !o.props.index || !o.props.children,
          'An index route cannot have child routes.',
        ));
      let f = {
        id: o.props.id || s.join('-'),
        caseSensitive: o.props.caseSensitive,
        element: o.props.element,
        Component: o.props.Component,
        index: o.props.index,
        path: o.props.path,
        loader: o.props.loader,
        action: o.props.action,
        hydrateFallbackElement: o.props.hydrateFallbackElement,
        HydrateFallback: o.props.HydrateFallback,
        errorElement: o.props.errorElement,
        ErrorBoundary: o.props.ErrorBoundary,
        hasErrorBoundary:
          o.props.hasErrorBoundary === !0 ||
          o.props.ErrorBoundary != null ||
          o.props.errorElement != null,
        shouldRevalidate: o.props.shouldRevalidate,
        handle: o.props.handle,
        lazy: o.props.lazy,
      };
      (o.props.children && (f.children = Ya(o.props.children, s)), l.push(f));
    }),
    l
  );
}
var ho = 'get',
  mo = 'application/x-www-form-urlencoded';
function To(t) {
  return t != null && typeof t.tagName == 'string';
}
function Uy(t) {
  return To(t) && t.tagName.toLowerCase() === 'button';
}
function $y(t) {
  return To(t) && t.tagName.toLowerCase() === 'form';
}
function Hy(t) {
  return To(t) && t.tagName.toLowerCase() === 'input';
}
function Vy(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
function Wy(t, r) {
  return t.button === 0 && (!r || r === '_self') && !Vy(t);
}
var uo = null;
function Qy() {
  if (uo === null)
    try {
      (new FormData(document.createElement('form'), 0), (uo = !1));
    } catch {
      uo = !0;
    }
  return uo;
}
var Ky = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function Ta(t) {
  return t != null && !Ky.has(t)
    ? (Jt(
        !1,
        `"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${mo}"`,
      ),
      null)
    : t;
}
function qy(t, r) {
  let l, o, a, s, f;
  if ($y(t)) {
    let p = t.getAttribute('action');
    ((o = p ? mn(p, r) : null),
      (l = t.getAttribute('method') || ho),
      (a = Ta(t.getAttribute('enctype')) || mo),
      (s = new FormData(t)));
  } else if (Uy(t) || (Hy(t) && (t.type === 'submit' || t.type === 'image'))) {
    let p = t.form;
    if (p == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let h = t.getAttribute('formaction') || p.getAttribute('action');
    if (
      ((o = h ? mn(h, r) : null),
      (l = t.getAttribute('formmethod') || p.getAttribute('method') || ho),
      (a =
        Ta(t.getAttribute('formenctype')) ||
        Ta(p.getAttribute('enctype')) ||
        mo),
      (s = new FormData(p, t)),
      !Qy())
    ) {
      let { name: m, type: g, value: v } = t;
      if (g === 'image') {
        let x = m ? `${m}.` : '';
        (s.append(`${x}x`, '0'), s.append(`${x}y`, '0'));
      } else m && s.append(m, v);
    }
  } else {
    if (To(t))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((l = ho), (o = null), (a = mo), (f = t));
  }
  return (
    s && a === 'text/plain' && ((f = s), (s = void 0)),
    { action: o, method: l.toLowerCase(), encType: a, formData: s, body: f }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function ms(t, r) {
  if (t === !1 || t === null || typeof t > 'u') throw new Error(r);
}
function Yy(t, r, l) {
  let o =
    typeof t == 'string'
      ? new URL(
          t,
          typeof window > 'u'
            ? 'server://singlefetch/'
            : window.location.origin,
        )
      : t;
  return (
    o.pathname === '/'
      ? (o.pathname = `_root.${l}`)
      : r && mn(o.pathname, r) === '/'
        ? (o.pathname = `${r.replace(/\/$/, '')}/_root.${l}`)
        : (o.pathname = `${o.pathname.replace(/\/$/, '')}.${l}`),
    o
  );
}
async function Xy(t, r) {
  if (t.id in r) return r[t.id];
  try {
    let l = await import(t.module);
    return ((r[t.id] = l), l);
  } catch (l) {
    return (
      console.error(
        `Error loading route module \`${t.module}\`, reloading page...`,
      ),
      console.error(l),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Gy(t) {
  return t == null
    ? !1
    : t.href == null
      ? t.rel === 'preload' &&
        typeof t.imageSrcSet == 'string' &&
        typeof t.imageSizes == 'string'
      : typeof t.rel == 'string' && typeof t.href == 'string';
}
async function Jy(t, r, l) {
  let o = await Promise.all(
    t.map(async (a) => {
      let s = r.routes[a.route.id];
      if (s) {
        let f = await Xy(s, l);
        return f.links ? f.links() : [];
      }
      return [];
    }),
  );
  return nv(
    o
      .flat(1)
      .filter(Gy)
      .filter((a) => a.rel === 'stylesheet' || a.rel === 'preload')
      .map((a) =>
        a.rel === 'stylesheet'
          ? { ...a, rel: 'prefetch', as: 'style' }
          : { ...a, rel: 'prefetch' },
      ),
  );
}
function zd(t, r, l, o, a, s) {
  let f = (h, m) => (l[m] ? h.route.id !== l[m].route.id : !0),
    p = (h, m) =>
      l[m].pathname !== h.pathname ||
      (l[m].route.path?.endsWith('*') && l[m].params['*'] !== h.params['*']);
  return s === 'assets'
    ? r.filter((h, m) => f(h, m) || p(h, m))
    : s === 'data'
      ? r.filter((h, m) => {
          let g = o.routes[h.route.id];
          if (!g || !g.hasLoader) return !1;
          if (f(h, m) || p(h, m)) return !0;
          if (h.route.shouldRevalidate) {
            let v = h.route.shouldRevalidate({
              currentUrl: new URL(
                a.pathname + a.search + a.hash,
                window.origin,
              ),
              currentParams: l[0]?.params || {},
              nextUrl: new URL(t, window.origin),
              nextParams: h.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof v == 'boolean') return v;
          }
          return !0;
        })
      : [];
}
function Zy(t, r, { includeHydrateFallback: l } = {}) {
  return ev(
    t
      .map((o) => {
        let a = r.routes[o.route.id];
        if (!a) return [];
        let s = [a.module];
        return (
          a.clientActionModule && (s = s.concat(a.clientActionModule)),
          a.clientLoaderModule && (s = s.concat(a.clientLoaderModule)),
          l &&
            a.hydrateFallbackModule &&
            (s = s.concat(a.hydrateFallbackModule)),
          a.imports && (s = s.concat(a.imports)),
          s
        );
      })
      .flat(1),
  );
}
function ev(t) {
  return [...new Set(t)];
}
function tv(t) {
  let r = {},
    l = Object.keys(t).sort();
  for (let o of l) r[o] = t[o];
  return r;
}
function nv(t, r) {
  let l = new Set();
  return (
    new Set(r),
    t.reduce((o, a) => {
      let s = JSON.stringify(tv(a));
      return (l.has(s) || (l.add(s), o.push({ key: s, link: a })), o);
    }, [])
  );
}
function Up() {
  let t = A.useContext(br);
  return (
    ms(
      t,
      'You must render this element inside a <DataRouterContext.Provider> element',
    ),
    t
  );
}
function rv() {
  let t = A.useContext(No);
  return (
    ms(
      t,
      'You must render this element inside a <DataRouterStateContext.Provider> element',
    ),
    t
  );
}
var gs = A.createContext(void 0);
gs.displayName = 'FrameworkContext';
function $p() {
  let t = A.useContext(gs);
  return (
    ms(t, 'You must render this element inside a <HydratedRouter> element'),
    t
  );
}
function iv(t, r) {
  let l = A.useContext(gs),
    [o, a] = A.useState(!1),
    [s, f] = A.useState(!1),
    {
      onFocus: p,
      onBlur: h,
      onMouseEnter: m,
      onMouseLeave: g,
      onTouchStart: v,
    } = r,
    x = A.useRef(null);
  (A.useEffect(() => {
    if ((t === 'render' && f(!0), t === 'viewport')) {
      let T = (P) => {
          P.forEach((U) => {
            f(U.isIntersecting);
          });
        },
        O = new IntersectionObserver(T, { threshold: 0.5 });
      return (
        x.current && O.observe(x.current),
        () => {
          O.disconnect();
        }
      );
    }
  }, [t]),
    A.useEffect(() => {
      if (o) {
        let T = setTimeout(() => {
          f(!0);
        }, 100);
        return () => {
          clearTimeout(T);
        };
      }
    }, [o]));
  let w = () => {
      a(!0);
    },
    L = () => {
      (a(!1), f(!1));
    };
  return l
    ? t !== 'intent'
      ? [s, x, {}]
      : [
          s,
          x,
          {
            onFocus: Ii(p, w),
            onBlur: Ii(h, L),
            onMouseEnter: Ii(m, w),
            onMouseLeave: Ii(g, L),
            onTouchStart: Ii(v, w),
          },
        ]
    : [!1, x, {}];
}
function Ii(t, r) {
  return (l) => {
    (t && t(l), l.defaultPrevented || r(l));
  };
}
function lv({ page: t, ...r }) {
  let { router: l } = Up(),
    o = A.useMemo(() => Ip(l.routes, t, l.basename), [l.routes, t, l.basename]);
  return o ? A.createElement(uv, { page: t, matches: o, ...r }) : null;
}
function ov(t) {
  let { manifest: r, routeModules: l } = $p(),
    [o, a] = A.useState([]);
  return (
    A.useEffect(() => {
      let s = !1;
      return (
        Jy(t, r, l).then((f) => {
          s || a(f);
        }),
        () => {
          s = !0;
        }
      );
    }, [t, r, l]),
    o
  );
}
function uv({ page: t, matches: r, ...l }) {
  let o = ir(),
    { manifest: a, routeModules: s } = $p(),
    { basename: f } = Up(),
    { loaderData: p, matches: h } = rv(),
    m = A.useMemo(() => zd(t, r, h, a, o, 'data'), [t, r, h, a, o]),
    g = A.useMemo(() => zd(t, r, h, a, o, 'assets'), [t, r, h, a, o]),
    v = A.useMemo(() => {
      if (t === o.pathname + o.search + o.hash) return [];
      let L = new Set(),
        T = !1;
      if (
        (r.forEach((P) => {
          let U = a.routes[P.route.id];
          !U ||
            !U.hasLoader ||
            ((!m.some((M) => M.route.id === P.route.id) &&
              P.route.id in p &&
              s[P.route.id]?.shouldRevalidate) ||
            U.hasClientLoader
              ? (T = !0)
              : L.add(P.route.id));
        }),
        L.size === 0)
      )
        return [];
      let O = Yy(t, f, 'data');
      return (
        T &&
          L.size > 0 &&
          O.searchParams.set(
            '_routes',
            r
              .filter((P) => L.has(P.route.id))
              .map((P) => P.route.id)
              .join(','),
          ),
        [O.pathname + O.search]
      );
    }, [f, p, o, a, m, r, t, s]),
    x = A.useMemo(() => Zy(g, a), [g, a]),
    w = ov(g);
  return A.createElement(
    A.Fragment,
    null,
    v.map((L) =>
      A.createElement('link', {
        key: L,
        rel: 'prefetch',
        as: 'fetch',
        href: L,
        ...l,
      }),
    ),
    x.map((L) =>
      A.createElement('link', { key: L, rel: 'modulepreload', href: L, ...l }),
    ),
    w.map(({ key: L, link: T }) =>
      A.createElement('link', { key: L, nonce: l.nonce, ...T }),
    ),
  );
}
function av(...t) {
  return (r) => {
    t.forEach((l) => {
      typeof l == 'function' ? l(r) : l != null && (l.current = r);
    });
  };
}
var Hp =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
try {
  Hp && (window.__reactRouterVersion = '7.8.0');
} catch {}
function sv({ basename: t, children: r, window: l }) {
  let o = A.useRef();
  o.current == null && (o.current = Yg({ window: l, v5Compat: !0 }));
  let a = o.current,
    [s, f] = A.useState({ action: a.action, location: a.location }),
    p = A.useCallback(
      (h) => {
        A.startTransition(() => f(h));
      },
      [f],
    );
  return (
    A.useLayoutEffect(() => a.listen(p), [a, p]),
    A.createElement(By, {
      basename: t,
      children: r,
      location: s.location,
      navigationType: s.action,
      navigator: a,
    })
  );
}
var Vp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Wp = A.forwardRef(function (
    {
      onClick: r,
      discover: l = 'render',
      prefetch: o = 'none',
      relative: a,
      reloadDocument: s,
      replace: f,
      state: p,
      target: h,
      to: m,
      preventScrollReset: g,
      viewTransition: v,
      ...x
    },
    w,
  ) {
    let { basename: L } = A.useContext(en),
      T = typeof m == 'string' && Vp.test(m),
      O,
      P = !1;
    if (typeof m == 'string' && T && ((O = m), Hp))
      try {
        let se = new URL(window.location.href),
          me = m.startsWith('//') ? new URL(se.protocol + m) : new URL(m),
          te = mn(me.pathname, L);
        me.origin === se.origin && te != null
          ? (m = te + me.search + me.hash)
          : (P = !0);
      } catch {
        Jt(
          !1,
          `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
        );
      }
    let U = Sy(m, { relative: a }),
      [M, W, q] = iv(o, x),
      D = pv(m, {
        replace: f,
        state: p,
        target: h,
        preventScrollReset: g,
        relative: a,
        viewTransition: v,
      });
    function G(se) {
      (r && r(se), se.defaultPrevented || D(se));
    }
    let ue = A.createElement('a', {
      ...x,
      ...q,
      href: O || U,
      onClick: P || s ? r : G,
      ref: av(w, W),
      target: h,
      'data-discover': !T && l === 'render' ? 'true' : void 0,
    });
    return M && !T
      ? A.createElement(A.Fragment, null, ue, A.createElement(lv, { page: U }))
      : ue;
  });
Wp.displayName = 'Link';
var cv = A.forwardRef(function (
  {
    'aria-current': r = 'page',
    caseSensitive: l = !1,
    className: o = '',
    end: a = !1,
    style: s,
    to: f,
    viewTransition: p,
    children: h,
    ...m
  },
  g,
) {
  let v = Wi(f, { relative: m.relative }),
    x = ir(),
    w = A.useContext(No),
    { navigator: L, basename: T } = A.useContext(en),
    O = w != null && vv(v) && p === !0,
    P = L.encodeLocation ? L.encodeLocation(v).pathname : v.pathname,
    U = x.pathname,
    M =
      w && w.navigation && w.navigation.location
        ? w.navigation.location.pathname
        : null;
  (l ||
    ((U = U.toLowerCase()),
    (M = M ? M.toLowerCase() : null),
    (P = P.toLowerCase())),
    M && T && (M = mn(M, T) || M));
  const W = P !== '/' && P.endsWith('/') ? P.length - 1 : P.length;
  let q = U === P || (!a && U.startsWith(P) && U.charAt(W) === '/'),
    D =
      M != null &&
      (M === P || (!a && M.startsWith(P) && M.charAt(P.length) === '/')),
    G = { isActive: q, isPending: D, isTransitioning: O },
    ue = q ? r : void 0,
    se;
  typeof o == 'function'
    ? (se = o(G))
    : (se = [
        o,
        q ? 'active' : null,
        D ? 'pending' : null,
        O ? 'transitioning' : null,
      ]
        .filter(Boolean)
        .join(' '));
  let me = typeof s == 'function' ? s(G) : s;
  return A.createElement(
    Wp,
    {
      ...m,
      'aria-current': ue,
      className: se,
      ref: g,
      style: me,
      to: f,
      viewTransition: p,
    },
    typeof h == 'function' ? h(G) : h,
  );
});
cv.displayName = 'NavLink';
var fv = A.forwardRef(
  (
    {
      discover: t = 'render',
      fetcherKey: r,
      navigate: l,
      reloadDocument: o,
      replace: a,
      state: s,
      method: f = ho,
      action: p,
      onSubmit: h,
      relative: m,
      preventScrollReset: g,
      viewTransition: v,
      ...x
    },
    w,
  ) => {
    let L = gv(),
      T = yv(p, { relative: m }),
      O = f.toLowerCase() === 'get' ? 'get' : 'post',
      P = typeof p == 'string' && Vp.test(p),
      U = (M) => {
        if ((h && h(M), M.defaultPrevented)) return;
        M.preventDefault();
        let W = M.nativeEvent.submitter,
          q = W?.getAttribute('formmethod') || f;
        L(W || M.currentTarget, {
          fetcherKey: r,
          method: q,
          navigate: l,
          replace: a,
          state: s,
          relative: m,
          preventScrollReset: g,
          viewTransition: v,
        });
      };
    return A.createElement('form', {
      ref: w,
      method: O,
      action: T,
      onSubmit: o ? h : U,
      ...x,
      'data-discover': !P && t === 'render' ? 'true' : void 0,
    });
  },
);
fv.displayName = 'Form';
function dv(t) {
  return `${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Qp(t) {
  let r = A.useContext(br);
  return (be(r, dv(t)), r);
}
function pv(
  t,
  {
    target: r,
    replace: l,
    state: o,
    preventScrollReset: a,
    relative: s,
    viewTransition: f,
  } = {},
) {
  let p = Ey(),
    h = ir(),
    m = Wi(t, { relative: s });
  return A.useCallback(
    (g) => {
      if (Wy(g, r)) {
        g.preventDefault();
        let v = l !== void 0 ? l : Bi(h) === Bi(m);
        p(t, {
          replace: v,
          state: o,
          preventScrollReset: a,
          relative: s,
          viewTransition: f,
        });
      }
    },
    [h, p, m, l, o, r, t, a, s, f],
  );
}
var hv = 0,
  mv = () => `__${String(++hv)}__`;
function gv() {
  let { router: t } = Qp('useSubmit'),
    { basename: r } = A.useContext(en),
    l = My();
  return A.useCallback(
    async (o, a = {}) => {
      let { action: s, method: f, encType: p, formData: h, body: m } = qy(o, r);
      if (a.navigate === !1) {
        let g = a.fetcherKey || mv();
        await t.fetch(g, l, a.action || s, {
          preventScrollReset: a.preventScrollReset,
          formData: h,
          body: m,
          formMethod: a.method || f,
          formEncType: a.encType || p,
          flushSync: a.flushSync,
        });
      } else
        await t.navigate(a.action || s, {
          preventScrollReset: a.preventScrollReset,
          formData: h,
          body: m,
          formMethod: a.method || f,
          formEncType: a.encType || p,
          replace: a.replace,
          state: a.state,
          fromRouteId: l,
          flushSync: a.flushSync,
          viewTransition: a.viewTransition,
        });
    },
    [t, r, l],
  );
}
function yv(t, { relative: r } = {}) {
  let { basename: l } = A.useContext(en),
    o = A.useContext(tn);
  be(o, 'useFormAction must be used inside a RouteContext');
  let [a] = o.matches.slice(-1),
    s = { ...Wi(t || '.', { relative: r }) },
    f = ir();
  if (t == null) {
    s.search = f.search;
    let p = new URLSearchParams(s.search),
      h = p.getAll('index');
    if (h.some((g) => g === '')) {
      (p.delete('index'),
        h.filter((v) => v).forEach((v) => p.append('index', v)));
      let g = p.toString();
      s.search = g ? `?${g}` : '';
    }
  }
  return (
    (!t || t === '.') &&
      a.route.index &&
      (s.search = s.search ? s.search.replace(/^\?/, '?index&') : '?index'),
    l !== '/' && (s.pathname = s.pathname === '/' ? l : pn([l, s.pathname])),
    Bi(s)
  );
}
function vv(t, { relative: r } = {}) {
  let l = A.useContext(Ap);
  be(
    l != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: o } = Qp('useViewTransitionState'),
    a = Wi(t, { relative: r });
  if (!l.isTransitioning) return !1;
  let s = mn(l.currentLocation.pathname, o) || l.currentLocation.pathname,
    f = mn(l.nextLocation.pathname, o) || l.nextLocation.pathname;
  return yo(a.pathname, f) != null || yo(a.pathname, s) != null;
}
var Ia = { exports: {} },
  La = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Od;
function wv() {
  if (Od) return La;
  Od = 1;
  var t = Ro();
  function r(h, m) {
    return (h === m && (h !== 0 || 1 / h === 1 / m)) || (h !== h && m !== m);
  }
  var l = typeof Object.is == 'function' ? Object.is : r,
    o = t.useSyncExternalStore,
    a = t.useRef,
    s = t.useEffect,
    f = t.useMemo,
    p = t.useDebugValue;
  return (
    (La.useSyncExternalStoreWithSelector = function (h, m, g, v, x) {
      var w = a(null);
      if (w.current === null) {
        var L = { hasValue: !1, value: null };
        w.current = L;
      } else L = w.current;
      w = f(
        function () {
          function O(q) {
            if (!P) {
              if (((P = !0), (U = q), (q = v(q)), x !== void 0 && L.hasValue)) {
                var D = L.value;
                if (x(D, q)) return (M = D);
              }
              return (M = q);
            }
            if (((D = M), l(U, q))) return D;
            var G = v(q);
            return x !== void 0 && x(D, G) ? ((U = q), D) : ((U = q), (M = G));
          }
          var P = !1,
            U,
            M,
            W = g === void 0 ? null : g;
          return [
            function () {
              return O(m());
            },
            W === null
              ? void 0
              : function () {
                  return O(W());
                },
          ];
        },
        [m, g, v, x],
      );
      var T = o(h, w[0], w[1]);
      return (
        s(
          function () {
            ((L.hasValue = !0), (L.value = T));
          },
          [T],
        ),
        p(T),
        T
      );
    }),
    La
  );
}
var Dd;
function xv() {
  return (Dd || ((Dd = 1), (Ia.exports = wv())), Ia.exports);
}
var kv = xv();
function Sv(t) {
  t();
}
function Ev() {
  let t = null,
    r = null;
  return {
    clear() {
      ((t = null), (r = null));
    },
    notify() {
      Sv(() => {
        let l = t;
        for (; l; ) (l.callback(), (l = l.next));
      });
    },
    get() {
      const l = [];
      let o = t;
      for (; o; ) (l.push(o), (o = o.next));
      return l;
    },
    subscribe(l) {
      let o = !0;
      const a = (r = { callback: l, next: null, prev: r });
      return (
        a.prev ? (a.prev.next = a) : (t = a),
        function () {
          !o ||
            t === null ||
            ((o = !1),
            a.next ? (a.next.prev = a.prev) : (r = a.prev),
            a.prev ? (a.prev.next = a.next) : (t = a.next));
        }
      );
    },
  };
}
var Md = { notify() {}, get: () => [] };
function Cv(t, r) {
  let l,
    o = Md,
    a = 0,
    s = !1;
  function f(T) {
    g();
    const O = o.subscribe(T);
    let P = !1;
    return () => {
      P || ((P = !0), O(), v());
    };
  }
  function p() {
    o.notify();
  }
  function h() {
    L.onStateChange && L.onStateChange();
  }
  function m() {
    return s;
  }
  function g() {
    (a++, l || ((l = t.subscribe(h)), (o = Ev())));
  }
  function v() {
    (a--, l && a === 0 && (l(), (l = void 0), o.clear(), (o = Md)));
  }
  function x() {
    s || ((s = !0), g());
  }
  function w() {
    s && ((s = !1), v());
  }
  const L = {
    addNestedSub: f,
    notifyNestedSubs: p,
    handleChangeWrapper: h,
    isSubscribed: m,
    trySubscribe: x,
    tryUnsubscribe: w,
    getListeners: () => o,
  };
  return L;
}
var _v = () =>
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  Pv = _v(),
  Rv = () => typeof navigator < 'u' && navigator.product === 'ReactNative',
  Nv = Rv(),
  Tv = () => (Pv || Nv ? A.useLayoutEffect : A.useEffect),
  Iv = Tv(),
  Lv = Symbol.for('react-redux-context'),
  zv = typeof globalThis < 'u' ? globalThis : {};
function Ov() {
  if (!A.createContext) return {};
  const t = (zv[Lv] ??= new Map());
  let r = t.get(A.createContext);
  return (r || ((r = A.createContext(null)), t.set(A.createContext, r)), r);
}
var vo = Ov();
function Dv(t) {
  const { children: r, context: l, serverState: o, store: a } = t,
    s = A.useMemo(() => {
      const h = Cv(a);
      return {
        store: a,
        subscription: h,
        getServerState: o ? () => o : void 0,
      };
    }, [a, o]),
    f = A.useMemo(() => a.getState(), [a]);
  Iv(() => {
    const { subscription: h } = s;
    return (
      (h.onStateChange = h.notifyNestedSubs),
      h.trySubscribe(),
      f !== a.getState() && h.notifyNestedSubs(),
      () => {
        (h.tryUnsubscribe(), (h.onStateChange = void 0));
      }
    );
  }, [s, f]);
  const p = l || vo;
  return A.createElement(p.Provider, { value: s }, r);
}
var Mv = Dv;
function Kp(t = vo) {
  return function () {
    return A.useContext(t);
  };
}
var Av = Kp(),
  Fv = (t, r) => t === r;
function jv(t = vo) {
  const r = t === vo ? Av : Kp(t),
    l = (o, a = {}) => {
      const { equalityFn: s = Fv } =
          typeof a == 'function' ? { equalityFn: a } : a,
        f = r(),
        { store: p, subscription: h, getServerState: m } = f;
      A.useRef(!0);
      const g = A.useCallback(
          {
            [o.name](x) {
              return o(x);
            },
          }[o.name],
          [o],
        ),
        v = kv.useSyncExternalStoreWithSelector(
          h.addNestedSub,
          p.getState,
          m || p.getState,
          g,
          s,
        );
      return (A.useDebugValue(v), v);
    };
  return (Object.assign(l, { withTypes: () => l }), l);
}
var Io = jv();
function nt(t) {
  return `Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `;
}
var Bv = (typeof Symbol == 'function' && Symbol.observable) || '@@observable',
  Ad = Bv,
  za = () => Math.random().toString(36).substring(7).split('').join('.'),
  bv = {
    INIT: `@@redux/INIT${za()}`,
    REPLACE: `@@redux/REPLACE${za()}`,
    PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${za()}`,
  },
  wo = bv;
function ys(t) {
  if (typeof t != 'object' || t === null) return !1;
  let r = t;
  for (; Object.getPrototypeOf(r) !== null; ) r = Object.getPrototypeOf(r);
  return Object.getPrototypeOf(t) === r || Object.getPrototypeOf(t) === null;
}
function qp(t, r, l) {
  if (typeof t != 'function') throw new Error(nt(2));
  if (
    (typeof r == 'function' && typeof l == 'function') ||
    (typeof l == 'function' && typeof arguments[3] == 'function')
  )
    throw new Error(nt(0));
  if (
    (typeof r == 'function' && typeof l > 'u' && ((l = r), (r = void 0)),
    typeof l < 'u')
  ) {
    if (typeof l != 'function') throw new Error(nt(1));
    return l(qp)(t, r);
  }
  let o = t,
    a = r,
    s = new Map(),
    f = s,
    p = 0,
    h = !1;
  function m() {
    f === s &&
      ((f = new Map()),
      s.forEach((O, P) => {
        f.set(P, O);
      }));
  }
  function g() {
    if (h) throw new Error(nt(3));
    return a;
  }
  function v(O) {
    if (typeof O != 'function') throw new Error(nt(4));
    if (h) throw new Error(nt(5));
    let P = !0;
    m();
    const U = p++;
    return (
      f.set(U, O),
      function () {
        if (P) {
          if (h) throw new Error(nt(6));
          ((P = !1), m(), f.delete(U), (s = null));
        }
      }
    );
  }
  function x(O) {
    if (!ys(O)) throw new Error(nt(7));
    if (typeof O.type > 'u') throw new Error(nt(8));
    if (typeof O.type != 'string') throw new Error(nt(17));
    if (h) throw new Error(nt(9));
    try {
      ((h = !0), (a = o(a, O)));
    } finally {
      h = !1;
    }
    return (
      (s = f).forEach((U) => {
        U();
      }),
      O
    );
  }
  function w(O) {
    if (typeof O != 'function') throw new Error(nt(10));
    ((o = O), x({ type: wo.REPLACE }));
  }
  function L() {
    const O = v;
    return {
      subscribe(P) {
        if (typeof P != 'object' || P === null) throw new Error(nt(11));
        function U() {
          const W = P;
          W.next && W.next(g());
        }
        return (U(), { unsubscribe: O(U) });
      },
      [Ad]() {
        return this;
      },
    };
  }
  return (
    x({ type: wo.INIT }),
    { dispatch: x, subscribe: v, getState: g, replaceReducer: w, [Ad]: L }
  );
}
function Uv(t) {
  Object.keys(t).forEach((r) => {
    const l = t[r];
    if (typeof l(void 0, { type: wo.INIT }) > 'u') throw new Error(nt(12));
    if (typeof l(void 0, { type: wo.PROBE_UNKNOWN_ACTION() }) > 'u')
      throw new Error(nt(13));
  });
}
function $v(t) {
  const r = Object.keys(t),
    l = {};
  for (let s = 0; s < r.length; s++) {
    const f = r[s];
    typeof t[f] == 'function' && (l[f] = t[f]);
  }
  const o = Object.keys(l);
  let a;
  try {
    Uv(l);
  } catch (s) {
    a = s;
  }
  return function (f = {}, p) {
    if (a) throw a;
    let h = !1;
    const m = {};
    for (let g = 0; g < o.length; g++) {
      const v = o[g],
        x = l[v],
        w = f[v],
        L = x(w, p);
      if (typeof L > 'u') throw (p && p.type, new Error(nt(14)));
      ((m[v] = L), (h = h || L !== w));
    }
    return ((h = h || o.length !== Object.keys(f).length), h ? m : f);
  };
}
function xo(...t) {
  return t.length === 0
    ? (r) => r
    : t.length === 1
      ? t[0]
      : t.reduce(
          (r, l) =>
            (...o) =>
              r(l(...o)),
        );
}
function Hv(...t) {
  return (r) => (l, o) => {
    const a = r(l, o);
    let s = () => {
      throw new Error(nt(15));
    };
    const f = { getState: a.getState, dispatch: (h, ...m) => s(h, ...m) },
      p = t.map((h) => h(f));
    return ((s = xo(...p)(a.dispatch)), { ...a, dispatch: s });
  };
}
function Vv(t) {
  return ys(t) && 'type' in t && typeof t.type == 'string';
}
var Yp = Symbol.for('immer-nothing'),
  Fd = Symbol.for('immer-draftable'),
  Pt = Symbol.for('immer-state');
function Ht(t, ...r) {
  throw new Error(
    `[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`,
  );
}
var jr = Object.getPrototypeOf;
function nr(t) {
  return !!t && !!t[Pt];
}
function gn(t) {
  return t
    ? Xp(t) ||
        Array.isArray(t) ||
        !!t[Fd] ||
        !!t.constructor?.[Fd] ||
        zo(t) ||
        Oo(t)
    : !1;
}
var Wv = Object.prototype.constructor.toString();
function Xp(t) {
  if (!t || typeof t != 'object') return !1;
  const r = jr(t);
  if (r === null) return !0;
  const l = Object.hasOwnProperty.call(r, 'constructor') && r.constructor;
  return l === Object
    ? !0
    : typeof l == 'function' && Function.toString.call(l) === Wv;
}
function ko(t, r) {
  Lo(t) === 0
    ? Reflect.ownKeys(t).forEach((l) => {
        r(l, t[l], t);
      })
    : t.forEach((l, o) => r(o, l, t));
}
function Lo(t) {
  const r = t[Pt];
  return r ? r.type_ : Array.isArray(t) ? 1 : zo(t) ? 2 : Oo(t) ? 3 : 0;
}
function Xa(t, r) {
  return Lo(t) === 2 ? t.has(r) : Object.prototype.hasOwnProperty.call(t, r);
}
function Gp(t, r, l) {
  const o = Lo(t);
  o === 2 ? t.set(r, l) : o === 3 ? t.add(l) : (t[r] = l);
}
function Qv(t, r) {
  return t === r ? t !== 0 || 1 / t === 1 / r : t !== t && r !== r;
}
function zo(t) {
  return t instanceof Map;
}
function Oo(t) {
  return t instanceof Set;
}
function tr(t) {
  return t.copy_ || t.base_;
}
function Ga(t, r) {
  if (zo(t)) return new Map(t);
  if (Oo(t)) return new Set(t);
  if (Array.isArray(t)) return Array.prototype.slice.call(t);
  const l = Xp(t);
  if (r === !0 || (r === 'class_only' && !l)) {
    const o = Object.getOwnPropertyDescriptors(t);
    delete o[Pt];
    let a = Reflect.ownKeys(o);
    for (let s = 0; s < a.length; s++) {
      const f = a[s],
        p = o[f];
      (p.writable === !1 && ((p.writable = !0), (p.configurable = !0)),
        (p.get || p.set) &&
          (o[f] = {
            configurable: !0,
            writable: !0,
            enumerable: p.enumerable,
            value: t[f],
          }));
    }
    return Object.create(jr(t), o);
  } else {
    const o = jr(t);
    if (o !== null && l) return { ...t };
    const a = Object.create(o);
    return Object.assign(a, t);
  }
}
function vs(t, r = !1) {
  return (
    Do(t) ||
      nr(t) ||
      !gn(t) ||
      (Lo(t) > 1 && (t.set = t.add = t.clear = t.delete = Kv),
      Object.freeze(t),
      r && Object.entries(t).forEach(([l, o]) => vs(o, !0))),
    t
  );
}
function Kv() {
  Ht(2);
}
function Do(t) {
  return Object.isFrozen(t);
}
var qv = {};
function rr(t) {
  const r = qv[t];
  return (r || Ht(0, t), r);
}
var bi;
function Jp() {
  return bi;
}
function Yv(t, r) {
  return {
    drafts_: [],
    parent_: t,
    immer_: r,
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0,
  };
}
function jd(t, r) {
  r &&
    (rr('Patches'),
    (t.patches_ = []),
    (t.inversePatches_ = []),
    (t.patchListener_ = r));
}
function Ja(t) {
  (Za(t), t.drafts_.forEach(Xv), (t.drafts_ = null));
}
function Za(t) {
  t === bi && (bi = t.parent_);
}
function Bd(t) {
  return (bi = Yv(bi, t));
}
function Xv(t) {
  const r = t[Pt];
  r.type_ === 0 || r.type_ === 1 ? r.revoke_() : (r.revoked_ = !0);
}
function bd(t, r) {
  r.unfinalizedDrafts_ = r.drafts_.length;
  const l = r.drafts_[0];
  return (
    t !== void 0 && t !== l
      ? (l[Pt].modified_ && (Ja(r), Ht(4)),
        gn(t) && ((t = So(r, t)), r.parent_ || Eo(r, t)),
        r.patches_ &&
          rr('Patches').generateReplacementPatches_(
            l[Pt].base_,
            t,
            r.patches_,
            r.inversePatches_,
          ))
      : (t = So(r, l, [])),
    Ja(r),
    r.patches_ && r.patchListener_(r.patches_, r.inversePatches_),
    t !== Yp ? t : void 0
  );
}
function So(t, r, l) {
  if (Do(r)) return r;
  const o = r[Pt];
  if (!o) return (ko(r, (a, s) => Ud(t, o, r, a, s, l)), r);
  if (o.scope_ !== t) return r;
  if (!o.modified_) return (Eo(t, o.base_, !0), o.base_);
  if (!o.finalized_) {
    ((o.finalized_ = !0), o.scope_.unfinalizedDrafts_--);
    const a = o.copy_;
    let s = a,
      f = !1;
    (o.type_ === 3 && ((s = new Set(a)), a.clear(), (f = !0)),
      ko(s, (p, h) => Ud(t, o, a, p, h, l, f)),
      Eo(t, a, !1),
      l &&
        t.patches_ &&
        rr('Patches').generatePatches_(o, l, t.patches_, t.inversePatches_));
  }
  return o.copy_;
}
function Ud(t, r, l, o, a, s, f) {
  if (nr(a)) {
    const p =
        s && r && r.type_ !== 3 && !Xa(r.assigned_, o) ? s.concat(o) : void 0,
      h = So(t, a, p);
    if ((Gp(l, o, h), nr(h))) t.canAutoFreeze_ = !1;
    else return;
  } else f && l.add(a);
  if (gn(a) && !Do(a)) {
    if (!t.immer_.autoFreeze_ && t.unfinalizedDrafts_ < 1) return;
    (So(t, a),
      (!r || !r.scope_.parent_) &&
        typeof o != 'symbol' &&
        Object.prototype.propertyIsEnumerable.call(l, o) &&
        Eo(t, a));
  }
}
function Eo(t, r, l = !1) {
  !t.parent_ && t.immer_.autoFreeze_ && t.canAutoFreeze_ && vs(r, l);
}
function Gv(t, r) {
  const l = Array.isArray(t),
    o = {
      type_: l ? 1 : 0,
      scope_: r ? r.scope_ : Jp(),
      modified_: !1,
      finalized_: !1,
      assigned_: {},
      parent_: r,
      base_: t,
      draft_: null,
      copy_: null,
      revoke_: null,
      isManual_: !1,
    };
  let a = o,
    s = ws;
  l && ((a = [o]), (s = Ui));
  const { revoke: f, proxy: p } = Proxy.revocable(a, s);
  return ((o.draft_ = p), (o.revoke_ = f), p);
}
var ws = {
    get(t, r) {
      if (r === Pt) return t;
      const l = tr(t);
      if (!Xa(l, r)) return Jv(t, l, r);
      const o = l[r];
      return t.finalized_ || !gn(o)
        ? o
        : o === Oa(t.base_, r)
          ? (Da(t), (t.copy_[r] = ts(o, t)))
          : o;
    },
    has(t, r) {
      return r in tr(t);
    },
    ownKeys(t) {
      return Reflect.ownKeys(tr(t));
    },
    set(t, r, l) {
      const o = Zp(tr(t), r);
      if (o?.set) return (o.set.call(t.draft_, l), !0);
      if (!t.modified_) {
        const a = Oa(tr(t), r),
          s = a?.[Pt];
        if (s && s.base_ === l)
          return ((t.copy_[r] = l), (t.assigned_[r] = !1), !0);
        if (Qv(l, a) && (l !== void 0 || Xa(t.base_, r))) return !0;
        (Da(t), es(t));
      }
      return (
        (t.copy_[r] === l && (l !== void 0 || r in t.copy_)) ||
          (Number.isNaN(l) && Number.isNaN(t.copy_[r])) ||
          ((t.copy_[r] = l), (t.assigned_[r] = !0)),
        !0
      );
    },
    deleteProperty(t, r) {
      return (
        Oa(t.base_, r) !== void 0 || r in t.base_
          ? ((t.assigned_[r] = !1), Da(t), es(t))
          : delete t.assigned_[r],
        t.copy_ && delete t.copy_[r],
        !0
      );
    },
    getOwnPropertyDescriptor(t, r) {
      const l = tr(t),
        o = Reflect.getOwnPropertyDescriptor(l, r);
      return (
        o && {
          writable: !0,
          configurable: t.type_ !== 1 || r !== 'length',
          enumerable: o.enumerable,
          value: l[r],
        }
      );
    },
    defineProperty() {
      Ht(11);
    },
    getPrototypeOf(t) {
      return jr(t.base_);
    },
    setPrototypeOf() {
      Ht(12);
    },
  },
  Ui = {};
ko(ws, (t, r) => {
  Ui[t] = function () {
    return ((arguments[0] = arguments[0][0]), r.apply(this, arguments));
  };
});
Ui.deleteProperty = function (t, r) {
  return Ui.set.call(this, t, r, void 0);
};
Ui.set = function (t, r, l) {
  return ws.set.call(this, t[0], r, l, t[0]);
};
function Oa(t, r) {
  const l = t[Pt];
  return (l ? tr(l) : t)[r];
}
function Jv(t, r, l) {
  const o = Zp(r, l);
  return o ? ('value' in o ? o.value : o.get?.call(t.draft_)) : void 0;
}
function Zp(t, r) {
  if (!(r in t)) return;
  let l = jr(t);
  for (; l; ) {
    const o = Object.getOwnPropertyDescriptor(l, r);
    if (o) return o;
    l = jr(l);
  }
}
function es(t) {
  t.modified_ || ((t.modified_ = !0), t.parent_ && es(t.parent_));
}
function Da(t) {
  t.copy_ || (t.copy_ = Ga(t.base_, t.scope_.immer_.useStrictShallowCopy_));
}
var Zv = class {
  constructor(t) {
    ((this.autoFreeze_ = !0),
      (this.useStrictShallowCopy_ = !1),
      (this.produce = (r, l, o) => {
        if (typeof r == 'function' && typeof l != 'function') {
          const s = l;
          l = r;
          const f = this;
          return function (h = s, ...m) {
            return f.produce(h, (g) => l.call(this, g, ...m));
          };
        }
        (typeof l != 'function' && Ht(6),
          o !== void 0 && typeof o != 'function' && Ht(7));
        let a;
        if (gn(r)) {
          const s = Bd(this),
            f = ts(r, void 0);
          let p = !0;
          try {
            ((a = l(f)), (p = !1));
          } finally {
            p ? Ja(s) : Za(s);
          }
          return (jd(s, o), bd(a, s));
        } else if (!r || typeof r != 'object') {
          if (
            ((a = l(r)),
            a === void 0 && (a = r),
            a === Yp && (a = void 0),
            this.autoFreeze_ && vs(a, !0),
            o)
          ) {
            const s = [],
              f = [];
            (rr('Patches').generateReplacementPatches_(r, a, s, f), o(s, f));
          }
          return a;
        } else Ht(1, r);
      }),
      (this.produceWithPatches = (r, l) => {
        if (typeof r == 'function')
          return (f, ...p) => this.produceWithPatches(f, (h) => r(h, ...p));
        let o, a;
        return [
          this.produce(r, l, (f, p) => {
            ((o = f), (a = p));
          }),
          o,
          a,
        ];
      }),
      typeof t?.autoFreeze == 'boolean' && this.setAutoFreeze(t.autoFreeze),
      typeof t?.useStrictShallowCopy == 'boolean' &&
        this.setUseStrictShallowCopy(t.useStrictShallowCopy));
  }
  createDraft(t) {
    (gn(t) || Ht(8), nr(t) && (t = e1(t)));
    const r = Bd(this),
      l = ts(t, void 0);
    return ((l[Pt].isManual_ = !0), Za(r), l);
  }
  finishDraft(t, r) {
    const l = t && t[Pt];
    (!l || !l.isManual_) && Ht(9);
    const { scope_: o } = l;
    return (jd(o, r), bd(void 0, o));
  }
  setAutoFreeze(t) {
    this.autoFreeze_ = t;
  }
  setUseStrictShallowCopy(t) {
    this.useStrictShallowCopy_ = t;
  }
  applyPatches(t, r) {
    let l;
    for (l = r.length - 1; l >= 0; l--) {
      const a = r[l];
      if (a.path.length === 0 && a.op === 'replace') {
        t = a.value;
        break;
      }
    }
    l > -1 && (r = r.slice(l + 1));
    const o = rr('Patches').applyPatches_;
    return nr(t) ? o(t, r) : this.produce(t, (a) => o(a, r));
  }
};
function ts(t, r) {
  const l = zo(t)
    ? rr('MapSet').proxyMap_(t, r)
    : Oo(t)
      ? rr('MapSet').proxySet_(t, r)
      : Gv(t, r);
  return ((r ? r.scope_ : Jp()).drafts_.push(l), l);
}
function e1(t) {
  return (nr(t) || Ht(10, t), eh(t));
}
function eh(t) {
  if (!gn(t) || Do(t)) return t;
  const r = t[Pt];
  let l;
  if (r) {
    if (!r.modified_) return r.base_;
    ((r.finalized_ = !0), (l = Ga(t, r.scope_.immer_.useStrictShallowCopy_)));
  } else l = Ga(t, !0);
  return (
    ko(l, (o, a) => {
      Gp(l, o, eh(a));
    }),
    r && (r.finalized_ = !1),
    l
  );
}
var Rt = new Zv(),
  th = Rt.produce;
Rt.produceWithPatches.bind(Rt);
Rt.setAutoFreeze.bind(Rt);
Rt.setUseStrictShallowCopy.bind(Rt);
Rt.applyPatches.bind(Rt);
Rt.createDraft.bind(Rt);
Rt.finishDraft.bind(Rt);
function nh(t) {
  return ({ dispatch: l, getState: o }) =>
    (a) =>
    (s) =>
      typeof s == 'function' ? s(l, o, t) : a(s);
}
var t1 = nh(),
  n1 = nh,
  r1 =
    typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : function () {
          if (arguments.length !== 0)
            return typeof arguments[0] == 'object'
              ? xo
              : xo.apply(null, arguments);
        };
function $d(t, r) {
  function l(...o) {
    if (r) {
      let a = r(...o);
      if (!a) throw new Error(hn(0));
      return {
        type: t,
        payload: a.payload,
        ...('meta' in a && { meta: a.meta }),
        ...('error' in a && { error: a.error }),
      };
    }
    return { type: t, payload: o[0] };
  }
  return (
    (l.toString = () => `${t}`),
    (l.type = t),
    (l.match = (o) => Vv(o) && o.type === t),
    l
  );
}
var rh = class Mi extends Array {
  constructor(...r) {
    (super(...r), Object.setPrototypeOf(this, Mi.prototype));
  }
  static get [Symbol.species]() {
    return Mi;
  }
  concat(...r) {
    return super.concat.apply(this, r);
  }
  prepend(...r) {
    return r.length === 1 && Array.isArray(r[0])
      ? new Mi(...r[0].concat(this))
      : new Mi(...r.concat(this));
  }
};
function Hd(t) {
  return gn(t) ? th(t, () => {}) : t;
}
function ao(t, r, l) {
  return t.has(r) ? t.get(r) : t.set(r, l(r)).get(r);
}
function i1(t) {
  return typeof t == 'boolean';
}
var l1 = () =>
    function (r) {
      const {
        thunk: l = !0,
        immutableCheck: o = !0,
        serializableCheck: a = !0,
        actionCreatorCheck: s = !0,
      } = r ?? {};
      let f = new rh();
      return (l && (i1(l) ? f.push(t1) : f.push(n1(l.extraArgument))), f);
    },
  o1 = 'RTK_autoBatch',
  Vd = (t) => (r) => {
    setTimeout(r, t);
  },
  u1 =
    (t = { type: 'raf' }) =>
    (r) =>
    (...l) => {
      const o = r(...l);
      let a = !0,
        s = !1,
        f = !1;
      const p = new Set(),
        h =
          t.type === 'tick'
            ? queueMicrotask
            : t.type === 'raf'
              ? typeof window < 'u' && window.requestAnimationFrame
                ? window.requestAnimationFrame
                : Vd(10)
              : t.type === 'callback'
                ? t.queueNotification
                : Vd(t.timeout),
        m = () => {
          ((f = !1), s && ((s = !1), p.forEach((g) => g())));
        };
      return Object.assign({}, o, {
        subscribe(g) {
          const v = () => a && g(),
            x = o.subscribe(v);
          return (
            p.add(g),
            () => {
              (x(), p.delete(g));
            }
          );
        },
        dispatch(g) {
          try {
            return (
              (a = !g?.meta?.[o1]),
              (s = !a),
              s && (f || ((f = !0), h(m))),
              o.dispatch(g)
            );
          } finally {
            a = !0;
          }
        },
      });
    },
  a1 = (t) =>
    function (l) {
      const { autoBatch: o = !0 } = l ?? {};
      let a = new rh(t);
      return (o && a.push(u1(typeof o == 'object' ? o : void 0)), a);
    };
function s1(t) {
  const r = l1(),
    {
      reducer: l = void 0,
      middleware: o,
      devTools: a = !0,
      preloadedState: s = void 0,
      enhancers: f = void 0,
    } = t || {};
  let p;
  if (typeof l == 'function') p = l;
  else if (ys(l)) p = $v(l);
  else throw new Error(hn(1));
  let h;
  typeof o == 'function' ? (h = o(r)) : (h = r());
  let m = xo;
  a && (m = r1({ trace: !1, ...(typeof a == 'object' && a) }));
  const g = Hv(...h),
    v = a1(g);
  let x = typeof f == 'function' ? f(v) : v();
  const w = m(...x);
  return qp(p, s, w);
}
function ih(t) {
  const r = {},
    l = [];
  let o;
  const a = {
    addCase(s, f) {
      const p = typeof s == 'string' ? s : s.type;
      if (!p) throw new Error(hn(28));
      if (p in r) throw new Error(hn(29));
      return ((r[p] = f), a);
    },
    addMatcher(s, f) {
      return (l.push({ matcher: s, reducer: f }), a);
    },
    addDefaultCase(s) {
      return ((o = s), a);
    },
  };
  return (t(a), [r, l, o]);
}
function c1(t) {
  return typeof t == 'function';
}
function f1(t, r) {
  let [l, o, a] = ih(r),
    s;
  if (c1(t)) s = () => Hd(t());
  else {
    const p = Hd(t);
    s = () => p;
  }
  function f(p = s(), h) {
    let m = [
      l[h.type],
      ...o.filter(({ matcher: g }) => g(h)).map(({ reducer: g }) => g),
    ];
    return (
      m.filter((g) => !!g).length === 0 && (m = [a]),
      m.reduce((g, v) => {
        if (v)
          if (nr(g)) {
            const w = v(g, h);
            return w === void 0 ? g : w;
          } else {
            if (gn(g)) return th(g, (x) => v(x, h));
            {
              const x = v(g, h);
              if (x === void 0) {
                if (g === null) return g;
                throw Error(
                  'A case reducer on a non-draftable value must not return undefined',
                );
              }
              return x;
            }
          }
        return g;
      }, p)
    );
  }
  return ((f.getInitialState = s), f);
}
var d1 = Symbol.for('rtk-slice-createasyncthunk');
function p1(t, r) {
  return `${t}/${r}`;
}
function h1({ creators: t } = {}) {
  const r = t?.asyncThunk?.[d1];
  return function (o) {
    const { name: a, reducerPath: s = a } = o;
    if (!a) throw new Error(hn(11));
    const f =
        (typeof o.reducers == 'function' ? o.reducers(g1()) : o.reducers) || {},
      p = Object.keys(f),
      h = {
        sliceCaseReducersByName: {},
        sliceCaseReducersByType: {},
        actionCreators: {},
        sliceMatchers: [],
      },
      m = {
        addCase(M, W) {
          const q = typeof M == 'string' ? M : M.type;
          if (!q) throw new Error(hn(12));
          if (q in h.sliceCaseReducersByType) throw new Error(hn(13));
          return ((h.sliceCaseReducersByType[q] = W), m);
        },
        addMatcher(M, W) {
          return (h.sliceMatchers.push({ matcher: M, reducer: W }), m);
        },
        exposeAction(M, W) {
          return ((h.actionCreators[M] = W), m);
        },
        exposeCaseReducer(M, W) {
          return ((h.sliceCaseReducersByName[M] = W), m);
        },
      };
    p.forEach((M) => {
      const W = f[M],
        q = {
          reducerName: M,
          type: p1(a, M),
          createNotation: typeof o.reducers == 'function',
        };
      v1(W) ? x1(q, W, m, r) : y1(q, W, m);
    });
    function g() {
      const [M = {}, W = [], q = void 0] =
          typeof o.extraReducers == 'function'
            ? ih(o.extraReducers)
            : [o.extraReducers],
        D = { ...M, ...h.sliceCaseReducersByType };
      return f1(o.initialState, (G) => {
        for (let ue in D) G.addCase(ue, D[ue]);
        for (let ue of h.sliceMatchers) G.addMatcher(ue.matcher, ue.reducer);
        for (let ue of W) G.addMatcher(ue.matcher, ue.reducer);
        q && G.addDefaultCase(q);
      });
    }
    const v = (M) => M,
      x = new Map(),
      w = new WeakMap();
    let L;
    function T(M, W) {
      return (L || (L = g()), L(M, W));
    }
    function O() {
      return (L || (L = g()), L.getInitialState());
    }
    function P(M, W = !1) {
      function q(G) {
        let ue = G[M];
        return (typeof ue > 'u' && W && (ue = ao(w, q, O)), ue);
      }
      function D(G = v) {
        const ue = ao(x, W, () => new WeakMap());
        return ao(ue, G, () => {
          const se = {};
          for (const [me, te] of Object.entries(o.selectors ?? {}))
            se[me] = m1(te, G, () => ao(w, G, O), W);
          return se;
        });
      }
      return {
        reducerPath: M,
        getSelectors: D,
        get selectors() {
          return D(q);
        },
        selectSlice: q,
      };
    }
    const U = {
      name: a,
      reducer: T,
      actions: h.actionCreators,
      caseReducers: h.sliceCaseReducersByName,
      getInitialState: O,
      ...P(s),
      injectInto(M, { reducerPath: W, ...q } = {}) {
        const D = W ?? s;
        return (
          M.inject({ reducerPath: D, reducer: T }, q),
          { ...U, ...P(D, !0) }
        );
      },
    };
    return U;
  };
}
function m1(t, r, l, o) {
  function a(s, ...f) {
    let p = r(s);
    return (typeof p > 'u' && o && (p = l()), t(p, ...f));
  }
  return ((a.unwrapped = t), a);
}
var xs = h1();
function g1() {
  function t(r, l) {
    return { _reducerDefinitionType: 'asyncThunk', payloadCreator: r, ...l };
  }
  return (
    (t.withTypes = () => t),
    {
      reducer(r) {
        return Object.assign(
          {
            [r.name](...l) {
              return r(...l);
            },
          }[r.name],
          { _reducerDefinitionType: 'reducer' },
        );
      },
      preparedReducer(r, l) {
        return {
          _reducerDefinitionType: 'reducerWithPrepare',
          prepare: r,
          reducer: l,
        };
      },
      asyncThunk: t,
    }
  );
}
function y1({ type: t, reducerName: r, createNotation: l }, o, a) {
  let s, f;
  if ('reducer' in o) {
    if (l && !w1(o)) throw new Error(hn(17));
    ((s = o.reducer), (f = o.prepare));
  } else s = o;
  a.addCase(t, s)
    .exposeCaseReducer(r, s)
    .exposeAction(r, f ? $d(t, f) : $d(t));
}
function v1(t) {
  return t._reducerDefinitionType === 'asyncThunk';
}
function w1(t) {
  return t._reducerDefinitionType === 'reducerWithPrepare';
}
function x1({ type: t, reducerName: r }, l, o, a) {
  if (!a) throw new Error(hn(18));
  const {
      payloadCreator: s,
      fulfilled: f,
      pending: p,
      rejected: h,
      settled: m,
      options: g,
    } = l,
    v = a(t, s, g);
  (o.exposeAction(r, v),
    f && o.addCase(v.fulfilled, f),
    p && o.addCase(v.pending, p),
    h && o.addCase(v.rejected, h),
    m && o.addMatcher(v.settled, m),
    o.exposeCaseReducer(r, {
      fulfilled: f || so,
      pending: p || so,
      rejected: h || so,
      settled: m || so,
    }));
}
function so() {}
function hn(t) {
  return `Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `;
}
const k1 = { items: [], loading: !1, error: null },
  lh = xs({
    name: 'notes',
    initialState: k1,
    reducers: {
      fetchNotesStart(t) {
        ((t.loading = !0), (t.error = null));
      },
      fetchNotesSuccess(t, r) {
        ((t.loading = !1), (t.items = r.payload));
      },
      fetchNotesFailure(t, r) {
        ((t.loading = !1), (t.error = r.payload));
      },
      addNote(t, r) {
        t.items.push(r.payload);
      },
      updateNote(t, r) {
        const l = t.items.findIndex((o) => o.id === r.payload.id);
        l !== -1 && (t.items[l] = r.payload);
      },
      deleteNote(t, r) {
        t.items = t.items.filter((l) => l.id !== r.payload);
      },
    },
  }),
  {
    fetchNotesStart: uS,
    fetchNotesSuccess: aS,
    fetchNotesFailure: sS,
    addNote: cS,
    updateNote: fS,
    deleteNote: dS,
  } = lh.actions,
  S1 = lh.reducer,
  E1 = { tags: [] },
  oh = xs({
    name: 'tags',
    initialState: E1,
    reducers: {
      addTag: (t, r) => {
        t.tags.push(r.payload);
      },
      removeTag: (t, r) => {
        t.tags = t.tags.filter((l) => l.id !== r.payload);
      },
      updateTag: (t, r) => {
        const l = t.tags.findIndex((o) => o.id === r.payload.id);
        l !== -1 && (t.tags[l] = r.payload);
      },
      setTags: (t, r) => {
        t.tags = r.payload;
      },
    },
  }),
  { addTag: pS, removeTag: hS, updateTag: mS, setTags: gS } = oh.actions,
  C1 = oh.reducer,
  _1 = { isSidebarOpen: !0, isModalOpen: !1 },
  uh = xs({
    name: 'ui',
    initialState: _1,
    reducers: {
      toggleSidebar(t) {
        t.isSidebarOpen = !t.isSidebarOpen;
      },
      openModal(t) {
        t.isModalOpen = !0;
      },
      closeModal(t) {
        t.isModalOpen = !1;
      },
    },
  }),
  { toggleSidebar: yS, openModal: vS, closeModal: wS } = uh.actions,
  P1 = uh.reducer,
  R1 = s1({ reducer: { notes: S1, tags: C1, ui: P1 } }),
  N1 = () => {
    const t = Io((r) => r.notes.items || []);
    return Y.jsx('div', {
      className: 'note-list',
      children:
        t.length === 0
          ? Y.jsx('p', { children: 'No notes available. Create a new note!' })
          : t.map((r) =>
              Y.jsx(
                'div',
                { className: 'p-2 border-b', children: r.title || 'Untitled' },
                r.id,
              ),
            ),
    });
  },
  T1 = ({ onSearch: t }) => {
    const [r, l] = A.useState(''),
      o = (a) => {
        const s = a.target.value;
        (l(s), t(s));
      };
    return Y.jsx('div', {
      className: 'flex items-center border-b border-gray-300 py-2',
      children: Y.jsx('input', {
        type: 'text',
        value: r,
        onChange: o,
        placeholder: 'Search notes...',
        className: 'flex-grow p-2 outline-none',
      }),
    });
  },
  ah = ({ value: t, onChange: r }) => {
    const [l, o] = A.useState(t ?? ''),
      a = (s) => {
        const f = s.target.value;
        (o(f), r?.(f));
      };
    return Y.jsx('div', {
      className: 'flex flex-col h-full',
      children: Y.jsx('textarea', {
        className: 'flex-1 p-4 border border-gray-300 rounded-md',
        placeholder: 'Write your notes here',
        name: 'noteContent',
        value: t ?? l,
        onChange: a,
      }),
    });
  },
  I1 = (t) => t.notes.items,
  L1 = (t, r) => t.notes.items.find((l) => l.id === r),
  Wd = () => {
    const t = Io(I1),
      [r, l] = A.useState(''),
      o = t.length;
    return Y.jsxs('div', {
      className: 'flex flex-col p-4 gap-4',
      children: [
        Y.jsx(T1, { onSearch: l }),
        r &&
          Y.jsxs('div', {
            className: 'text-sm text-gray-500',
            children: ['Searching for: ', r],
          }),
        Y.jsxs('div', {
          className: 'grid grid-cols-2 gap-4',
          children: [
            Y.jsx(ah, {}),
            Y.jsxs('div', {
              className: 'p-4 border rounded-lg shadow-md',
              children: [
                'Preview',
                Y.jsxs('div', {
                  className: 'text-xs text-gray-500 mt-2',
                  children: ['Total notes: ', o],
                }),
              ],
            }),
          ],
        }),
        Y.jsxs('div', {
          className: 'text-xs text-gray-500',
          children: ['Showing ', o, ' notes'],
        }),
        Y.jsx(N1, {}),
      ],
    });
  };
function z1(t, r) {
  const l = {};
  return (t[t.length - 1] === '' ? [...t, ''] : t)
    .join((l.padRight ? ' ' : '') + ',' + (l.padLeft === !1 ? '' : ' '))
    .trim();
}
const O1 = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  D1 = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,
  M1 = {};
function Qd(t, r) {
  return (M1.jsx ? D1 : O1).test(t);
}
const A1 = /[ \t\n\f\r]/g;
function F1(t) {
  return typeof t == 'object' ? (t.type === 'text' ? Kd(t.value) : !1) : Kd(t);
}
function Kd(t) {
  return t.replace(A1, '') === '';
}
class Qi {
  constructor(r, l, o) {
    ((this.normal = l), (this.property = r), o && (this.space = o));
  }
}
Qi.prototype.normal = {};
Qi.prototype.property = {};
Qi.prototype.space = void 0;
function sh(t, r) {
  const l = {},
    o = {};
  for (const a of t) (Object.assign(l, a.property), Object.assign(o, a.normal));
  return new Qi(l, o, r);
}
function ns(t) {
  return t.toLowerCase();
}
class vt {
  constructor(r, l) {
    ((this.attribute = l), (this.property = r));
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
let j1 = 0;
const ve = lr(),
  Qe = lr(),
  rs = lr(),
  H = lr(),
  Oe = lr(),
  Ar = lr(),
  Ct = lr();
function lr() {
  return 2 ** ++j1;
}
const is = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        boolean: ve,
        booleanish: Qe,
        commaOrSpaceSeparated: Ct,
        commaSeparated: Ar,
        number: H,
        overloadedBoolean: rs,
        spaceSeparated: Oe,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  ),
  Ma = Object.keys(is);
class ks extends vt {
  constructor(r, l, o, a) {
    let s = -1;
    if ((super(r, l), qd(this, 'space', a), typeof o == 'number'))
      for (; ++s < Ma.length; ) {
        const f = Ma[s];
        qd(this, Ma[s], (o & is[f]) === is[f]);
      }
  }
}
ks.prototype.defined = !0;
function qd(t, r, l) {
  l && (t[r] = l);
}
function Ur(t) {
  const r = {},
    l = {};
  for (const [o, a] of Object.entries(t.properties)) {
    const s = new ks(o, t.transform(t.attributes || {}, o), a, t.space);
    (t.mustUseProperty &&
      t.mustUseProperty.includes(o) &&
      (s.mustUseProperty = !0),
      (r[o] = s),
      (l[ns(o)] = o),
      (l[ns(s.attribute)] = o));
  }
  return new Qi(r, l, t.space);
}
const ch = Ur({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Qe,
    ariaAutoComplete: null,
    ariaBusy: Qe,
    ariaChecked: Qe,
    ariaColCount: H,
    ariaColIndex: H,
    ariaColSpan: H,
    ariaControls: Oe,
    ariaCurrent: null,
    ariaDescribedBy: Oe,
    ariaDetails: null,
    ariaDisabled: Qe,
    ariaDropEffect: Oe,
    ariaErrorMessage: null,
    ariaExpanded: Qe,
    ariaFlowTo: Oe,
    ariaGrabbed: Qe,
    ariaHasPopup: null,
    ariaHidden: Qe,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: Oe,
    ariaLevel: H,
    ariaLive: null,
    ariaModal: Qe,
    ariaMultiLine: Qe,
    ariaMultiSelectable: Qe,
    ariaOrientation: null,
    ariaOwns: Oe,
    ariaPlaceholder: null,
    ariaPosInSet: H,
    ariaPressed: Qe,
    ariaReadOnly: Qe,
    ariaRelevant: null,
    ariaRequired: Qe,
    ariaRoleDescription: Oe,
    ariaRowCount: H,
    ariaRowIndex: H,
    ariaRowSpan: H,
    ariaSelected: Qe,
    ariaSetSize: H,
    ariaSort: null,
    ariaValueMax: H,
    ariaValueMin: H,
    ariaValueNow: H,
    ariaValueText: null,
    role: null,
  },
  transform(t, r) {
    return r === 'role' ? r : 'aria-' + r.slice(4).toLowerCase();
  },
});
function fh(t, r) {
  return r in t ? t[r] : r;
}
function dh(t, r) {
  return fh(t, r.toLowerCase());
}
const B1 = Ur({
    attributes: {
      acceptcharset: 'accept-charset',
      classname: 'class',
      htmlfor: 'for',
      httpequiv: 'http-equiv',
    },
    mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
    properties: {
      abbr: null,
      accept: Ar,
      acceptCharset: Oe,
      accessKey: Oe,
      action: null,
      allow: null,
      allowFullScreen: ve,
      allowPaymentRequest: ve,
      allowUserMedia: ve,
      alt: null,
      as: null,
      async: ve,
      autoCapitalize: null,
      autoComplete: Oe,
      autoFocus: ve,
      autoPlay: ve,
      blocking: Oe,
      capture: null,
      charSet: null,
      checked: ve,
      cite: null,
      className: Oe,
      cols: H,
      colSpan: null,
      content: null,
      contentEditable: Qe,
      controls: ve,
      controlsList: Oe,
      coords: H | Ar,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: ve,
      defer: ve,
      dir: null,
      dirName: null,
      disabled: ve,
      download: rs,
      draggable: Qe,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: ve,
      formTarget: null,
      headers: Oe,
      height: H,
      hidden: rs,
      high: H,
      href: null,
      hrefLang: null,
      htmlFor: Oe,
      httpEquiv: Oe,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: ve,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: ve,
      itemId: null,
      itemProp: Oe,
      itemRef: Oe,
      itemScope: ve,
      itemType: Oe,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: ve,
      low: H,
      manifest: null,
      max: null,
      maxLength: H,
      media: null,
      method: null,
      min: null,
      minLength: H,
      multiple: ve,
      muted: ve,
      name: null,
      nonce: null,
      noModule: ve,
      noValidate: ve,
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
      open: ve,
      optimum: H,
      pattern: null,
      ping: Oe,
      placeholder: null,
      playsInline: ve,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: ve,
      referrerPolicy: null,
      rel: Oe,
      required: ve,
      reversed: ve,
      rows: H,
      rowSpan: H,
      sandbox: Oe,
      scope: null,
      scoped: ve,
      seamless: ve,
      selected: ve,
      shadowRootClonable: ve,
      shadowRootDelegatesFocus: ve,
      shadowRootMode: null,
      shape: null,
      size: H,
      sizes: null,
      slot: null,
      span: H,
      spellCheck: Qe,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: H,
      step: null,
      style: null,
      tabIndex: H,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: ve,
      useMap: null,
      value: Qe,
      width: H,
      wrap: null,
      writingSuggestions: null,
      align: null,
      aLink: null,
      archive: Oe,
      axis: null,
      background: null,
      bgColor: null,
      border: H,
      borderColor: null,
      bottomMargin: H,
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
      compact: ve,
      declare: ve,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: H,
      leftMargin: H,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: H,
      marginWidth: H,
      noResize: ve,
      noHref: ve,
      noShade: ve,
      noWrap: ve,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: H,
      rules: null,
      scheme: null,
      scrolling: Qe,
      standby: null,
      summary: null,
      text: null,
      topMargin: H,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: H,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: ve,
      disableRemotePlayback: ve,
      prefix: null,
      property: null,
      results: H,
      security: null,
      unselectable: null,
    },
    space: 'html',
    transform: dh,
  }),
  b1 = Ur({
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
      accentHeight: H,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: H,
      amplitude: H,
      arabicForm: null,
      ascent: H,
      attributeName: null,
      attributeType: null,
      azimuth: H,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: H,
      by: null,
      calcMode: null,
      capHeight: H,
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
      descent: H,
      diffuseConstant: H,
      direction: null,
      display: null,
      dur: null,
      divisor: H,
      dominantBaseline: null,
      download: ve,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: H,
      enableBackground: null,
      end: null,
      event: null,
      exponent: H,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: H,
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
      g1: Ar,
      g2: Ar,
      glyphName: Ar,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: H,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: H,
      horizOriginX: H,
      horizOriginY: H,
      id: null,
      ideographic: H,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: H,
      k: H,
      k1: H,
      k2: H,
      k3: H,
      k4: H,
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
      limitingConeAngle: H,
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
      mediaSize: H,
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
      overlinePosition: H,
      overlineThickness: H,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: H,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: Oe,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: H,
      pointsAtY: H,
      pointsAtZ: H,
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
      specularConstant: H,
      specularExponent: H,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: H,
      strikethroughThickness: H,
      string: null,
      stroke: null,
      strokeDashArray: Ct,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: H,
      strokeOpacity: H,
      strokeWidth: null,
      style: null,
      surfaceScale: H,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: Ct,
      tabIndex: H,
      tableValues: null,
      target: null,
      targetX: H,
      targetY: H,
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
      underlinePosition: H,
      underlineThickness: H,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: H,
      values: null,
      vAlphabetic: H,
      vMathematical: H,
      vectorEffect: null,
      vHanging: H,
      vIdeographic: H,
      version: null,
      vertAdvY: H,
      vertOriginX: H,
      vertOriginY: H,
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
      xHeight: H,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null,
    },
    space: 'svg',
    transform: fh,
  }),
  ph = Ur({
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
    transform(t, r) {
      return 'xlink:' + r.slice(5).toLowerCase();
    },
  }),
  hh = Ur({
    attributes: { xmlnsxlink: 'xmlns:xlink' },
    properties: { xmlnsXLink: null, xmlns: null },
    space: 'xmlns',
    transform: dh,
  }),
  mh = Ur({
    properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
    space: 'xml',
    transform(t, r) {
      return 'xml:' + r.slice(3).toLowerCase();
    },
  }),
  U1 = {
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
  $1 = /[A-Z]/g,
  Yd = /-[a-z]/g,
  H1 = /^data[-\w.:]+$/i;
function V1(t, r) {
  const l = ns(r);
  let o = r,
    a = vt;
  if (l in t.normal) return t.property[t.normal[l]];
  if (l.length > 4 && l.slice(0, 4) === 'data' && H1.test(r)) {
    if (r.charAt(4) === '-') {
      const s = r.slice(5).replace(Yd, Q1);
      o = 'data' + s.charAt(0).toUpperCase() + s.slice(1);
    } else {
      const s = r.slice(4);
      if (!Yd.test(s)) {
        let f = s.replace($1, W1);
        (f.charAt(0) !== '-' && (f = '-' + f), (r = 'data' + f));
      }
    }
    a = ks;
  }
  return new a(o, r);
}
function W1(t) {
  return '-' + t.toLowerCase();
}
function Q1(t) {
  return t.charAt(1).toUpperCase();
}
const K1 = sh([ch, B1, ph, hh, mh], 'html'),
  Ss = sh([ch, b1, ph, hh, mh], 'svg');
function q1(t) {
  return t.join(' ').trim();
}
var Or = {},
  Aa,
  Xd;
function Y1() {
  if (Xd) return Aa;
  Xd = 1;
  var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
    r = /\n/g,
    l = /^\s*/,
    o = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
    a = /^:\s*/,
    s = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
    f = /^[;\s]*/,
    p = /^\s+|\s+$/g,
    h = `
`,
    m = '/',
    g = '*',
    v = '',
    x = 'comment',
    w = 'declaration';
  Aa = function (T, O) {
    if (typeof T != 'string')
      throw new TypeError('First argument must be a string');
    if (!T) return [];
    O = O || {};
    var P = 1,
      U = 1;
    function M(Z) {
      var J = Z.match(r);
      J && (P += J.length);
      var ae = Z.lastIndexOf(h);
      U = ~ae ? Z.length - ae : U + Z.length;
    }
    function W() {
      var Z = { line: P, column: U };
      return function (J) {
        return ((J.position = new q(Z)), ue(), J);
      };
    }
    function q(Z) {
      ((this.start = Z),
        (this.end = { line: P, column: U }),
        (this.source = O.source));
    }
    q.prototype.content = T;
    function D(Z) {
      var J = new Error(O.source + ':' + P + ':' + U + ': ' + Z);
      if (
        ((J.reason = Z),
        (J.filename = O.source),
        (J.line = P),
        (J.column = U),
        (J.source = T),
        !O.silent)
      )
        throw J;
    }
    function G(Z) {
      var J = Z.exec(T);
      if (J) {
        var ae = J[0];
        return (M(ae), (T = T.slice(ae.length)), J);
      }
    }
    function ue() {
      G(l);
    }
    function se(Z) {
      var J;
      for (Z = Z || []; (J = me()); ) J !== !1 && Z.push(J);
      return Z;
    }
    function me() {
      var Z = W();
      if (!(m != T.charAt(0) || g != T.charAt(1))) {
        for (
          var J = 2;
          v != T.charAt(J) && (g != T.charAt(J) || m != T.charAt(J + 1));

        )
          ++J;
        if (((J += 2), v === T.charAt(J - 1)))
          return D('End of comment missing');
        var ae = T.slice(2, J - 2);
        return (
          (U += 2),
          M(ae),
          (T = T.slice(J)),
          (U += 2),
          Z({ type: x, comment: ae })
        );
      }
    }
    function te() {
      var Z = W(),
        J = G(o);
      if (J) {
        if ((me(), !G(a))) return D("property missing ':'");
        var ae = G(s),
          Ce = Z({
            type: w,
            property: L(J[0].replace(t, v)),
            value: ae ? L(ae[0].replace(t, v)) : v,
          });
        return (G(f), Ce);
      }
    }
    function ne() {
      var Z = [];
      se(Z);
      for (var J; (J = te()); ) J !== !1 && (Z.push(J), se(Z));
      return Z;
    }
    return (ue(), ne());
  };
  function L(T) {
    return T ? T.replace(p, v) : v;
  }
  return Aa;
}
var Gd;
function X1() {
  if (Gd) return Or;
  Gd = 1;
  var t =
    (Or && Or.__importDefault) ||
    function (o) {
      return o && o.__esModule ? o : { default: o };
    };
  (Object.defineProperty(Or, '__esModule', { value: !0 }), (Or.default = l));
  var r = t(Y1());
  function l(o, a) {
    var s = null;
    if (!o || typeof o != 'string') return s;
    var f = (0, r.default)(o),
      p = typeof a == 'function';
    return (
      f.forEach(function (h) {
        if (h.type === 'declaration') {
          var m = h.property,
            g = h.value;
          p ? a(m, g, h) : g && ((s = s || {}), (s[m] = g));
        }
      }),
      s
    );
  }
  return Or;
}
var Li = {},
  Jd;
function G1() {
  if (Jd) return Li;
  ((Jd = 1),
    Object.defineProperty(Li, '__esModule', { value: !0 }),
    (Li.camelCase = void 0));
  var t = /^--[a-zA-Z0-9_-]+$/,
    r = /-([a-z])/g,
    l = /^[^-]+$/,
    o = /^-(webkit|moz|ms|o|khtml)-/,
    a = /^-(ms)-/,
    s = function (m) {
      return !m || l.test(m) || t.test(m);
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
        s(m)
          ? m
          : ((m = m.toLowerCase()),
            g.reactCompat ? (m = m.replace(a, p)) : (m = m.replace(o, p)),
            m.replace(r, f))
      );
    };
  return ((Li.camelCase = h), Li);
}
var zi, Zd;
function J1() {
  if (Zd) return zi;
  Zd = 1;
  var t =
      (zi && zi.__importDefault) ||
      function (a) {
        return a && a.__esModule ? a : { default: a };
      },
    r = t(X1()),
    l = G1();
  function o(a, s) {
    var f = {};
    return (
      !a ||
        typeof a != 'string' ||
        (0, r.default)(a, function (p, h) {
          p && h && (f[(0, l.camelCase)(p, s)] = h);
        }),
      f
    );
  }
  return ((o.default = o), (zi = o), zi);
}
var Z1 = J1();
const ew = Po(Z1),
  gh = yh('end'),
  Es = yh('start');
function yh(t) {
  return r;
  function r(l) {
    const o = (l && l.position && l.position[t]) || {};
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
function tw(t) {
  const r = Es(t),
    l = gh(t);
  if (r && l) return { start: r, end: l };
}
function Ai(t) {
  return !t || typeof t != 'object'
    ? ''
    : 'position' in t || 'type' in t
      ? ep(t.position)
      : 'start' in t || 'end' in t
        ? ep(t)
        : 'line' in t || 'column' in t
          ? ls(t)
          : '';
}
function ls(t) {
  return tp(t && t.line) + ':' + tp(t && t.column);
}
function ep(t) {
  return ls(t && t.start) + '-' + ls(t && t.end);
}
function tp(t) {
  return t && typeof t == 'number' ? t : 1;
}
class ut extends Error {
  constructor(r, l, o) {
    (super(), typeof l == 'string' && ((o = l), (l = void 0)));
    let a = '',
      s = {},
      f = !1;
    if (
      (l &&
        ('line' in l && 'column' in l
          ? (s = { place: l })
          : 'start' in l && 'end' in l
            ? (s = { place: l })
            : 'type' in l
              ? (s = { ancestors: [l], place: l.position })
              : (s = { ...l })),
      typeof r == 'string'
        ? (a = r)
        : !s.cause && r && ((f = !0), (a = r.message), (s.cause = r)),
      !s.ruleId && !s.source && typeof o == 'string')
    ) {
      const h = o.indexOf(':');
      h === -1
        ? (s.ruleId = o)
        : ((s.source = o.slice(0, h)), (s.ruleId = o.slice(h + 1)));
    }
    if (!s.place && s.ancestors && s.ancestors) {
      const h = s.ancestors[s.ancestors.length - 1];
      h && (s.place = h.position);
    }
    const p = s.place && 'start' in s.place ? s.place.start : s.place;
    ((this.ancestors = s.ancestors || void 0),
      (this.cause = s.cause || void 0),
      (this.column = p ? p.column : void 0),
      (this.fatal = void 0),
      (this.file = ''),
      (this.message = a),
      (this.line = p ? p.line : void 0),
      (this.name = Ai(s.place) || '1:1'),
      (this.place = s.place || void 0),
      (this.reason = this.message),
      (this.ruleId = s.ruleId || void 0),
      (this.source = s.source || void 0),
      (this.stack =
        f && s.cause && typeof s.cause.stack == 'string' ? s.cause.stack : ''),
      (this.actual = void 0),
      (this.expected = void 0),
      (this.note = void 0),
      (this.url = void 0));
  }
}
ut.prototype.file = '';
ut.prototype.name = '';
ut.prototype.reason = '';
ut.prototype.message = '';
ut.prototype.stack = '';
ut.prototype.column = void 0;
ut.prototype.line = void 0;
ut.prototype.ancestors = void 0;
ut.prototype.cause = void 0;
ut.prototype.fatal = void 0;
ut.prototype.place = void 0;
ut.prototype.ruleId = void 0;
ut.prototype.source = void 0;
const Cs = {}.hasOwnProperty,
  nw = new Map(),
  rw = /[A-Z]/g,
  iw = new Set(['table', 'tbody', 'thead', 'tfoot', 'tr']),
  lw = new Set(['td', 'th']),
  vh = 'https://github.com/syntax-tree/hast-util-to-jsx-runtime';
function ow(t, r) {
  if (!r || r.Fragment === void 0)
    throw new TypeError('Expected `Fragment` in options');
  const l = r.filePath || void 0;
  let o;
  if (r.development) {
    if (typeof r.jsxDEV != 'function')
      throw new TypeError(
        'Expected `jsxDEV` in options when `development: true`',
      );
    o = hw(l, r.jsxDEV);
  } else {
    if (typeof r.jsx != 'function')
      throw new TypeError('Expected `jsx` in production options');
    if (typeof r.jsxs != 'function')
      throw new TypeError('Expected `jsxs` in production options');
    o = pw(l, r.jsx, r.jsxs);
  }
  const a = {
      Fragment: r.Fragment,
      ancestors: [],
      components: r.components || {},
      create: o,
      elementAttributeNameCase: r.elementAttributeNameCase || 'react',
      evaluater: r.createEvaluater ? r.createEvaluater() : void 0,
      filePath: l,
      ignoreInvalidStyle: r.ignoreInvalidStyle || !1,
      passKeys: r.passKeys !== !1,
      passNode: r.passNode || !1,
      schema: r.space === 'svg' ? Ss : K1,
      stylePropertyNameCase: r.stylePropertyNameCase || 'dom',
      tableCellAlignToStyle: r.tableCellAlignToStyle !== !1,
    },
    s = wh(a, t, void 0);
  return s && typeof s != 'string'
    ? s
    : a.create(t, a.Fragment, { children: s || void 0 }, void 0);
}
function wh(t, r, l) {
  if (r.type === 'element') return uw(t, r, l);
  if (r.type === 'mdxFlowExpression' || r.type === 'mdxTextExpression')
    return aw(t, r);
  if (r.type === 'mdxJsxFlowElement' || r.type === 'mdxJsxTextElement')
    return cw(t, r, l);
  if (r.type === 'mdxjsEsm') return sw(t, r);
  if (r.type === 'root') return fw(t, r, l);
  if (r.type === 'text') return dw(t, r);
}
function uw(t, r, l) {
  const o = t.schema;
  let a = o;
  (r.tagName.toLowerCase() === 'svg' &&
    o.space === 'html' &&
    ((a = Ss), (t.schema = a)),
    t.ancestors.push(r));
  const s = kh(t, r.tagName, !1),
    f = mw(t, r);
  let p = Ps(t, r);
  return (
    iw.has(r.tagName) &&
      (p = p.filter(function (h) {
        return typeof h == 'string' ? !F1(h) : !0;
      })),
    xh(t, f, s, r),
    _s(f, p),
    t.ancestors.pop(),
    (t.schema = o),
    t.create(r, s, f, l)
  );
}
function aw(t, r) {
  if (r.data && r.data.estree && t.evaluater) {
    const o = r.data.estree.body[0];
    return (o.type, t.evaluater.evaluateExpression(o.expression));
  }
  $i(t, r.position);
}
function sw(t, r) {
  if (r.data && r.data.estree && t.evaluater)
    return t.evaluater.evaluateProgram(r.data.estree);
  $i(t, r.position);
}
function cw(t, r, l) {
  const o = t.schema;
  let a = o;
  (r.name === 'svg' && o.space === 'html' && ((a = Ss), (t.schema = a)),
    t.ancestors.push(r));
  const s = r.name === null ? t.Fragment : kh(t, r.name, !0),
    f = gw(t, r),
    p = Ps(t, r);
  return (
    xh(t, f, s, r),
    _s(f, p),
    t.ancestors.pop(),
    (t.schema = o),
    t.create(r, s, f, l)
  );
}
function fw(t, r, l) {
  const o = {};
  return (_s(o, Ps(t, r)), t.create(r, t.Fragment, o, l));
}
function dw(t, r) {
  return r.value;
}
function xh(t, r, l, o) {
  typeof l != 'string' && l !== t.Fragment && t.passNode && (r.node = o);
}
function _s(t, r) {
  if (r.length > 0) {
    const l = r.length > 1 ? r : r[0];
    l && (t.children = l);
  }
}
function pw(t, r, l) {
  return o;
  function o(a, s, f, p) {
    const m = Array.isArray(f.children) ? l : r;
    return p ? m(s, f, p) : m(s, f);
  }
}
function hw(t, r) {
  return l;
  function l(o, a, s, f) {
    const p = Array.isArray(s.children),
      h = Es(o);
    return r(
      a,
      s,
      f,
      p,
      {
        columnNumber: h ? h.column - 1 : void 0,
        fileName: t,
        lineNumber: h ? h.line : void 0,
      },
      void 0,
    );
  }
}
function mw(t, r) {
  const l = {};
  let o, a;
  for (a in r.properties)
    if (a !== 'children' && Cs.call(r.properties, a)) {
      const s = yw(t, a, r.properties[a]);
      if (s) {
        const [f, p] = s;
        t.tableCellAlignToStyle &&
        f === 'align' &&
        typeof p == 'string' &&
        lw.has(r.tagName)
          ? (o = p)
          : (l[f] = p);
      }
    }
  if (o) {
    const s = l.style || (l.style = {});
    s[t.stylePropertyNameCase === 'css' ? 'text-align' : 'textAlign'] = o;
  }
  return l;
}
function gw(t, r) {
  const l = {};
  for (const o of r.attributes)
    if (o.type === 'mdxJsxExpressionAttribute')
      if (o.data && o.data.estree && t.evaluater) {
        const s = o.data.estree.body[0];
        s.type;
        const f = s.expression;
        f.type;
        const p = f.properties[0];
        (p.type, Object.assign(l, t.evaluater.evaluateExpression(p.argument)));
      } else $i(t, r.position);
    else {
      const a = o.name;
      let s;
      if (o.value && typeof o.value == 'object')
        if (o.value.data && o.value.data.estree && t.evaluater) {
          const p = o.value.data.estree.body[0];
          (p.type, (s = t.evaluater.evaluateExpression(p.expression)));
        } else $i(t, r.position);
      else s = o.value === null ? !0 : o.value;
      l[a] = s;
    }
  return l;
}
function Ps(t, r) {
  const l = [];
  let o = -1;
  const a = t.passKeys ? new Map() : nw;
  for (; ++o < r.children.length; ) {
    const s = r.children[o];
    let f;
    if (t.passKeys) {
      const h =
        s.type === 'element'
          ? s.tagName
          : s.type === 'mdxJsxFlowElement' || s.type === 'mdxJsxTextElement'
            ? s.name
            : void 0;
      if (h) {
        const m = a.get(h) || 0;
        ((f = h + '-' + m), a.set(h, m + 1));
      }
    }
    const p = wh(t, s, f);
    p !== void 0 && l.push(p);
  }
  return l;
}
function yw(t, r, l) {
  const o = V1(t.schema, r);
  if (!(l == null || (typeof l == 'number' && Number.isNaN(l)))) {
    if (
      (Array.isArray(l) && (l = o.commaSeparated ? z1(l) : q1(l)),
      o.property === 'style')
    ) {
      let a = typeof l == 'object' ? l : vw(t, String(l));
      return (t.stylePropertyNameCase === 'css' && (a = ww(a)), ['style', a]);
    }
    return [
      t.elementAttributeNameCase === 'react' && o.space
        ? U1[o.property] || o.property
        : o.attribute,
      l,
    ];
  }
}
function vw(t, r) {
  try {
    return ew(r, { reactCompat: !0 });
  } catch (l) {
    if (t.ignoreInvalidStyle) return {};
    const o = l,
      a = new ut('Cannot parse `style` attribute', {
        ancestors: t.ancestors,
        cause: o,
        ruleId: 'style',
        source: 'hast-util-to-jsx-runtime',
      });
    throw (
      (a.file = t.filePath || void 0),
      (a.url = vh + '#cannot-parse-style-attribute'),
      a
    );
  }
}
function kh(t, r, l) {
  let o;
  if (!l) o = { type: 'Literal', value: r };
  else if (r.includes('.')) {
    const a = r.split('.');
    let s = -1,
      f;
    for (; ++s < a.length; ) {
      const p = Qd(a[s])
        ? { type: 'Identifier', name: a[s] }
        : { type: 'Literal', value: a[s] };
      f = f
        ? {
            type: 'MemberExpression',
            object: f,
            property: p,
            computed: !!(s && p.type === 'Literal'),
            optional: !1,
          }
        : p;
    }
    o = f;
  } else
    o =
      Qd(r) && !/^[a-z]/.test(r)
        ? { type: 'Identifier', name: r }
        : { type: 'Literal', value: r };
  if (o.type === 'Literal') {
    const a = o.value;
    return Cs.call(t.components, a) ? t.components[a] : a;
  }
  if (t.evaluater) return t.evaluater.evaluateExpression(o);
  $i(t);
}
function $i(t, r) {
  const l = new ut('Cannot handle MDX estrees without `createEvaluater`', {
    ancestors: t.ancestors,
    place: r,
    ruleId: 'mdx-estree',
    source: 'hast-util-to-jsx-runtime',
  });
  throw (
    (l.file = t.filePath || void 0),
    (l.url = vh + '#cannot-handle-mdx-estrees-without-createevaluater'),
    l
  );
}
function ww(t) {
  const r = {};
  let l;
  for (l in t) Cs.call(t, l) && (r[xw(l)] = t[l]);
  return r;
}
function xw(t) {
  let r = t.replace(rw, kw);
  return (r.slice(0, 3) === 'ms-' && (r = '-' + r), r);
}
function kw(t) {
  return '-' + t.toLowerCase();
}
const Fa = {
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
  Sw = {};
function Ew(t, r) {
  const l = Sw,
    o = typeof l.includeImageAlt == 'boolean' ? l.includeImageAlt : !0,
    a = typeof l.includeHtml == 'boolean' ? l.includeHtml : !0;
  return Sh(t, o, a);
}
function Sh(t, r, l) {
  if (Cw(t)) {
    if ('value' in t) return t.type === 'html' && !l ? '' : t.value;
    if (r && 'alt' in t && t.alt) return t.alt;
    if ('children' in t) return np(t.children, r, l);
  }
  return Array.isArray(t) ? np(t, r, l) : '';
}
function np(t, r, l) {
  const o = [];
  let a = -1;
  for (; ++a < t.length; ) o[a] = Sh(t[a], r, l);
  return o.join('');
}
function Cw(t) {
  return !!(t && typeof t == 'object');
}
const rp = document.createElement('i');
function Rs(t) {
  const r = '&' + t + ';';
  rp.innerHTML = r;
  const l = rp.textContent;
  return (l.charCodeAt(l.length - 1) === 59 && t !== 'semi') || l === r
    ? !1
    : l;
}
function Zt(t, r, l, o) {
  const a = t.length;
  let s = 0,
    f;
  if (
    (r < 0 ? (r = -r > a ? 0 : a + r) : (r = r > a ? a : r),
    (l = l > 0 ? l : 0),
    o.length < 1e4)
  )
    ((f = Array.from(o)), f.unshift(r, l), t.splice(...f));
  else
    for (l && t.splice(r, l); s < o.length; )
      ((f = o.slice(s, s + 1e4)),
        f.unshift(r, 0),
        t.splice(...f),
        (s += 1e4),
        (r += 1e4));
}
function Mt(t, r) {
  return t.length > 0 ? (Zt(t, t.length, 0, r), t) : r;
}
const ip = {}.hasOwnProperty;
function _w(t) {
  const r = {};
  let l = -1;
  for (; ++l < t.length; ) Pw(r, t[l]);
  return r;
}
function Pw(t, r) {
  let l;
  for (l in r) {
    const a = (ip.call(t, l) ? t[l] : void 0) || (t[l] = {}),
      s = r[l];
    let f;
    if (s)
      for (f in s) {
        ip.call(a, f) || (a[f] = []);
        const p = s[f];
        Rw(a[f], Array.isArray(p) ? p : p ? [p] : []);
      }
  }
}
function Rw(t, r) {
  let l = -1;
  const o = [];
  for (; ++l < r.length; ) (r[l].add === 'after' ? t : o).push(r[l]);
  Zt(t, 0, 0, o);
}
function Eh(t, r) {
  const l = Number.parseInt(t, r);
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
function Fr(t) {
  return t
    .replace(/[\t\n\r ]+/g, ' ')
    .replace(/^ | $/g, '')
    .toLowerCase()
    .toUpperCase();
}
const Gt = bn(/[A-Za-z]/),
  _t = bn(/[\dA-Za-z]/),
  Nw = bn(/[#-'*+\--9=?A-Z^-~]/);
function os(t) {
  return t !== null && (t < 32 || t === 127);
}
const us = bn(/\d/),
  Tw = bn(/[\dA-Fa-f]/),
  Iw = bn(/[!-/:-@[-`{-~]/);
function ye(t) {
  return t !== null && t < -2;
}
function yt(t) {
  return t !== null && (t < 0 || t === 32);
}
function Ie(t) {
  return t === -2 || t === -1 || t === 32;
}
const Lw = bn(new RegExp('\\p{P}|\\p{S}', 'u')),
  zw = bn(/\s/);
function bn(t) {
  return r;
  function r(l) {
    return l !== null && l > -1 && t.test(String.fromCharCode(l));
  }
}
function $r(t) {
  const r = [];
  let l = -1,
    o = 0,
    a = 0;
  for (; ++l < t.length; ) {
    const s = t.charCodeAt(l);
    let f = '';
    if (s === 37 && _t(t.charCodeAt(l + 1)) && _t(t.charCodeAt(l + 2))) a = 2;
    else if (s < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s)) ||
        (f = String.fromCharCode(s));
    else if (s > 55295 && s < 57344) {
      const p = t.charCodeAt(l + 1);
      s < 56320 && p > 56319 && p < 57344
        ? ((f = String.fromCharCode(s, p)), (a = 1))
        : (f = '�');
    } else f = String.fromCharCode(s);
    (f &&
      (r.push(t.slice(o, l), encodeURIComponent(f)), (o = l + a + 1), (f = '')),
      a && ((l += a), (a = 0)));
  }
  return r.join('') + t.slice(o);
}
function De(t, r, l, o) {
  const a = o ? o - 1 : Number.POSITIVE_INFINITY;
  let s = 0;
  return f;
  function f(h) {
    return Ie(h) ? (t.enter(l), p(h)) : r(h);
  }
  function p(h) {
    return Ie(h) && s++ < a ? (t.consume(h), p) : (t.exit(l), r(h));
  }
}
const Ow = { tokenize: Dw };
function Dw(t) {
  const r = t.attempt(this.parser.constructs.contentInitial, o, a);
  let l;
  return r;
  function o(p) {
    if (p === null) {
      t.consume(p);
      return;
    }
    return (
      t.enter('lineEnding'),
      t.consume(p),
      t.exit('lineEnding'),
      De(t, r, 'linePrefix')
    );
  }
  function a(p) {
    return (t.enter('paragraph'), s(p));
  }
  function s(p) {
    const h = t.enter('chunkText', { contentType: 'text', previous: l });
    return (l && (l.next = h), (l = h), f(p));
  }
  function f(p) {
    if (p === null) {
      (t.exit('chunkText'), t.exit('paragraph'), t.consume(p));
      return;
    }
    return ye(p) ? (t.consume(p), t.exit('chunkText'), s) : (t.consume(p), f);
  }
}
const Mw = { tokenize: Aw },
  lp = { tokenize: Fw };
function Aw(t) {
  const r = this,
    l = [];
  let o = 0,
    a,
    s,
    f;
  return p;
  function p(M) {
    if (o < l.length) {
      const W = l[o];
      return ((r.containerState = W[1]), t.attempt(W[0].continuation, h, m)(M));
    }
    return m(M);
  }
  function h(M) {
    if ((o++, r.containerState._closeFlow)) {
      ((r.containerState._closeFlow = void 0), a && U());
      const W = r.events.length;
      let q = W,
        D;
      for (; q--; )
        if (r.events[q][0] === 'exit' && r.events[q][1].type === 'chunkFlow') {
          D = r.events[q][1].end;
          break;
        }
      P(o);
      let G = W;
      for (; G < r.events.length; ) ((r.events[G][1].end = { ...D }), G++);
      return (
        Zt(r.events, q + 1, 0, r.events.slice(W)),
        (r.events.length = G),
        m(M)
      );
    }
    return p(M);
  }
  function m(M) {
    if (o === l.length) {
      if (!a) return x(M);
      if (a.currentConstruct && a.currentConstruct.concrete) return L(M);
      r.interrupt = !!(a.currentConstruct && !a._gfmTableDynamicInterruptHack);
    }
    return ((r.containerState = {}), t.check(lp, g, v)(M));
  }
  function g(M) {
    return (a && U(), P(o), x(M));
  }
  function v(M) {
    return (
      (r.parser.lazy[r.now().line] = o !== l.length),
      (f = r.now().offset),
      L(M)
    );
  }
  function x(M) {
    return ((r.containerState = {}), t.attempt(lp, w, L)(M));
  }
  function w(M) {
    return (o++, l.push([r.currentConstruct, r.containerState]), x(M));
  }
  function L(M) {
    if (M === null) {
      (a && U(), P(0), t.consume(M));
      return;
    }
    return (
      (a = a || r.parser.flow(r.now())),
      t.enter('chunkFlow', { _tokenizer: a, contentType: 'flow', previous: s }),
      T(M)
    );
  }
  function T(M) {
    if (M === null) {
      (O(t.exit('chunkFlow'), !0), P(0), t.consume(M));
      return;
    }
    return ye(M)
      ? (t.consume(M),
        O(t.exit('chunkFlow')),
        (o = 0),
        (r.interrupt = void 0),
        p)
      : (t.consume(M), T);
  }
  function O(M, W) {
    const q = r.sliceStream(M);
    if (
      (W && q.push(null),
      (M.previous = s),
      s && (s.next = M),
      (s = M),
      a.defineSkip(M.start),
      a.write(q),
      r.parser.lazy[M.start.line])
    ) {
      let D = a.events.length;
      for (; D--; )
        if (
          a.events[D][1].start.offset < f &&
          (!a.events[D][1].end || a.events[D][1].end.offset > f)
        )
          return;
      const G = r.events.length;
      let ue = G,
        se,
        me;
      for (; ue--; )
        if (
          r.events[ue][0] === 'exit' &&
          r.events[ue][1].type === 'chunkFlow'
        ) {
          if (se) {
            me = r.events[ue][1].end;
            break;
          }
          se = !0;
        }
      for (P(o), D = G; D < r.events.length; )
        ((r.events[D][1].end = { ...me }), D++);
      (Zt(r.events, ue + 1, 0, r.events.slice(G)), (r.events.length = D));
    }
  }
  function P(M) {
    let W = l.length;
    for (; W-- > M; ) {
      const q = l[W];
      ((r.containerState = q[1]), q[0].exit.call(r, t));
    }
    l.length = M;
  }
  function U() {
    (a.write([null]),
      (s = void 0),
      (a = void 0),
      (r.containerState._closeFlow = void 0));
  }
}
function Fw(t, r, l) {
  return De(
    t,
    t.attempt(this.parser.constructs.document, r, l),
    'linePrefix',
    this.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4,
  );
}
function op(t) {
  if (t === null || yt(t) || zw(t)) return 1;
  if (Lw(t)) return 2;
}
function Ns(t, r, l) {
  const o = [];
  let a = -1;
  for (; ++a < t.length; ) {
    const s = t[a].resolveAll;
    s && !o.includes(s) && ((r = s(r, l)), o.push(s));
  }
  return r;
}
const as = { name: 'attention', resolveAll: jw, tokenize: Bw };
function jw(t, r) {
  let l = -1,
    o,
    a,
    s,
    f,
    p,
    h,
    m,
    g;
  for (; ++l < t.length; )
    if (
      t[l][0] === 'enter' &&
      t[l][1].type === 'attentionSequence' &&
      t[l][1]._close
    ) {
      for (o = l; o--; )
        if (
          t[o][0] === 'exit' &&
          t[o][1].type === 'attentionSequence' &&
          t[o][1]._open &&
          r.sliceSerialize(t[o][1]).charCodeAt(0) ===
            r.sliceSerialize(t[l][1]).charCodeAt(0)
        ) {
          if (
            (t[o][1]._close || t[l][1]._open) &&
            (t[l][1].end.offset - t[l][1].start.offset) % 3 &&
            !(
              (t[o][1].end.offset -
                t[o][1].start.offset +
                t[l][1].end.offset -
                t[l][1].start.offset) %
              3
            )
          )
            continue;
          h =
            t[o][1].end.offset - t[o][1].start.offset > 1 &&
            t[l][1].end.offset - t[l][1].start.offset > 1
              ? 2
              : 1;
          const v = { ...t[o][1].end },
            x = { ...t[l][1].start };
          (up(v, -h),
            up(x, h),
            (f = {
              type: h > 1 ? 'strongSequence' : 'emphasisSequence',
              start: v,
              end: { ...t[o][1].end },
            }),
            (p = {
              type: h > 1 ? 'strongSequence' : 'emphasisSequence',
              start: { ...t[l][1].start },
              end: x,
            }),
            (s = {
              type: h > 1 ? 'strongText' : 'emphasisText',
              start: { ...t[o][1].end },
              end: { ...t[l][1].start },
            }),
            (a = {
              type: h > 1 ? 'strong' : 'emphasis',
              start: { ...f.start },
              end: { ...p.end },
            }),
            (t[o][1].end = { ...f.start }),
            (t[l][1].start = { ...p.end }),
            (m = []),
            t[o][1].end.offset - t[o][1].start.offset &&
              (m = Mt(m, [
                ['enter', t[o][1], r],
                ['exit', t[o][1], r],
              ])),
            (m = Mt(m, [
              ['enter', a, r],
              ['enter', f, r],
              ['exit', f, r],
              ['enter', s, r],
            ])),
            (m = Mt(
              m,
              Ns(r.parser.constructs.insideSpan.null, t.slice(o + 1, l), r),
            )),
            (m = Mt(m, [
              ['exit', s, r],
              ['enter', p, r],
              ['exit', p, r],
              ['exit', a, r],
            ])),
            t[l][1].end.offset - t[l][1].start.offset
              ? ((g = 2),
                (m = Mt(m, [
                  ['enter', t[l][1], r],
                  ['exit', t[l][1], r],
                ])))
              : (g = 0),
            Zt(t, o - 1, l - o + 3, m),
            (l = o + m.length - g - 2));
          break;
        }
    }
  for (l = -1; ++l < t.length; )
    t[l][1].type === 'attentionSequence' && (t[l][1].type = 'data');
  return t;
}
function Bw(t, r) {
  const l = this.parser.constructs.attentionMarkers.null,
    o = this.previous,
    a = op(o);
  let s;
  return f;
  function f(h) {
    return ((s = h), t.enter('attentionSequence'), p(h));
  }
  function p(h) {
    if (h === s) return (t.consume(h), p);
    const m = t.exit('attentionSequence'),
      g = op(h),
      v = !g || (g === 2 && a) || l.includes(h),
      x = !a || (a === 2 && g) || l.includes(o);
    return (
      (m._open = !!(s === 42 ? v : v && (a || !x))),
      (m._close = !!(s === 42 ? x : x && (g || !v))),
      r(h)
    );
  }
}
function up(t, r) {
  ((t.column += r), (t.offset += r), (t._bufferIndex += r));
}
const bw = { name: 'autolink', tokenize: Uw };
function Uw(t, r, l) {
  let o = 0;
  return a;
  function a(w) {
    return (
      t.enter('autolink'),
      t.enter('autolinkMarker'),
      t.consume(w),
      t.exit('autolinkMarker'),
      t.enter('autolinkProtocol'),
      s
    );
  }
  function s(w) {
    return Gt(w) ? (t.consume(w), f) : w === 64 ? l(w) : m(w);
  }
  function f(w) {
    return w === 43 || w === 45 || w === 46 || _t(w) ? ((o = 1), p(w)) : m(w);
  }
  function p(w) {
    return w === 58
      ? (t.consume(w), (o = 0), h)
      : (w === 43 || w === 45 || w === 46 || _t(w)) && o++ < 32
        ? (t.consume(w), p)
        : ((o = 0), m(w));
  }
  function h(w) {
    return w === 62
      ? (t.exit('autolinkProtocol'),
        t.enter('autolinkMarker'),
        t.consume(w),
        t.exit('autolinkMarker'),
        t.exit('autolink'),
        r)
      : w === null || w === 32 || w === 60 || os(w)
        ? l(w)
        : (t.consume(w), h);
  }
  function m(w) {
    return w === 64 ? (t.consume(w), g) : Nw(w) ? (t.consume(w), m) : l(w);
  }
  function g(w) {
    return _t(w) ? v(w) : l(w);
  }
  function v(w) {
    return w === 46
      ? (t.consume(w), (o = 0), g)
      : w === 62
        ? ((t.exit('autolinkProtocol').type = 'autolinkEmail'),
          t.enter('autolinkMarker'),
          t.consume(w),
          t.exit('autolinkMarker'),
          t.exit('autolink'),
          r)
        : x(w);
  }
  function x(w) {
    if ((w === 45 || _t(w)) && o++ < 63) {
      const L = w === 45 ? x : v;
      return (t.consume(w), L);
    }
    return l(w);
  }
}
const Mo = { partial: !0, tokenize: $w };
function $w(t, r, l) {
  return o;
  function o(s) {
    return Ie(s) ? De(t, a, 'linePrefix')(s) : a(s);
  }
  function a(s) {
    return s === null || ye(s) ? r(s) : l(s);
  }
}
const Ch = {
  continuation: { tokenize: Vw },
  exit: Ww,
  name: 'blockQuote',
  tokenize: Hw,
};
function Hw(t, r, l) {
  const o = this;
  return a;
  function a(f) {
    if (f === 62) {
      const p = o.containerState;
      return (
        p.open || (t.enter('blockQuote', { _container: !0 }), (p.open = !0)),
        t.enter('blockQuotePrefix'),
        t.enter('blockQuoteMarker'),
        t.consume(f),
        t.exit('blockQuoteMarker'),
        s
      );
    }
    return l(f);
  }
  function s(f) {
    return Ie(f)
      ? (t.enter('blockQuotePrefixWhitespace'),
        t.consume(f),
        t.exit('blockQuotePrefixWhitespace'),
        t.exit('blockQuotePrefix'),
        r)
      : (t.exit('blockQuotePrefix'), r(f));
  }
}
function Vw(t, r, l) {
  const o = this;
  return a;
  function a(f) {
    return Ie(f)
      ? De(
          t,
          s,
          'linePrefix',
          o.parser.constructs.disable.null.includes('codeIndented')
            ? void 0
            : 4,
        )(f)
      : s(f);
  }
  function s(f) {
    return t.attempt(Ch, r, l)(f);
  }
}
function Ww(t) {
  t.exit('blockQuote');
}
const _h = { name: 'characterEscape', tokenize: Qw };
function Qw(t, r, l) {
  return o;
  function o(s) {
    return (
      t.enter('characterEscape'),
      t.enter('escapeMarker'),
      t.consume(s),
      t.exit('escapeMarker'),
      a
    );
  }
  function a(s) {
    return Iw(s)
      ? (t.enter('characterEscapeValue'),
        t.consume(s),
        t.exit('characterEscapeValue'),
        t.exit('characterEscape'),
        r)
      : l(s);
  }
}
const Ph = { name: 'characterReference', tokenize: Kw };
function Kw(t, r, l) {
  const o = this;
  let a = 0,
    s,
    f;
  return p;
  function p(v) {
    return (
      t.enter('characterReference'),
      t.enter('characterReferenceMarker'),
      t.consume(v),
      t.exit('characterReferenceMarker'),
      h
    );
  }
  function h(v) {
    return v === 35
      ? (t.enter('characterReferenceMarkerNumeric'),
        t.consume(v),
        t.exit('characterReferenceMarkerNumeric'),
        m)
      : (t.enter('characterReferenceValue'), (s = 31), (f = _t), g(v));
  }
  function m(v) {
    return v === 88 || v === 120
      ? (t.enter('characterReferenceMarkerHexadecimal'),
        t.consume(v),
        t.exit('characterReferenceMarkerHexadecimal'),
        t.enter('characterReferenceValue'),
        (s = 6),
        (f = Tw),
        g)
      : (t.enter('characterReferenceValue'), (s = 7), (f = us), g(v));
  }
  function g(v) {
    if (v === 59 && a) {
      const x = t.exit('characterReferenceValue');
      return f === _t && !Rs(o.sliceSerialize(x))
        ? l(v)
        : (t.enter('characterReferenceMarker'),
          t.consume(v),
          t.exit('characterReferenceMarker'),
          t.exit('characterReference'),
          r);
    }
    return f(v) && a++ < s ? (t.consume(v), g) : l(v);
  }
}
const ap = { partial: !0, tokenize: Yw },
  sp = { concrete: !0, name: 'codeFenced', tokenize: qw };
function qw(t, r, l) {
  const o = this,
    a = { partial: !0, tokenize: q };
  let s = 0,
    f = 0,
    p;
  return h;
  function h(D) {
    return m(D);
  }
  function m(D) {
    const G = o.events[o.events.length - 1];
    return (
      (s =
        G && G[1].type === 'linePrefix'
          ? G[2].sliceSerialize(G[1], !0).length
          : 0),
      (p = D),
      t.enter('codeFenced'),
      t.enter('codeFencedFence'),
      t.enter('codeFencedFenceSequence'),
      g(D)
    );
  }
  function g(D) {
    return D === p
      ? (f++, t.consume(D), g)
      : f < 3
        ? l(D)
        : (t.exit('codeFencedFenceSequence'),
          Ie(D) ? De(t, v, 'whitespace')(D) : v(D));
  }
  function v(D) {
    return D === null || ye(D)
      ? (t.exit('codeFencedFence'), o.interrupt ? r(D) : t.check(ap, T, W)(D))
      : (t.enter('codeFencedFenceInfo'),
        t.enter('chunkString', { contentType: 'string' }),
        x(D));
  }
  function x(D) {
    return D === null || ye(D)
      ? (t.exit('chunkString'), t.exit('codeFencedFenceInfo'), v(D))
      : Ie(D)
        ? (t.exit('chunkString'),
          t.exit('codeFencedFenceInfo'),
          De(t, w, 'whitespace')(D))
        : D === 96 && D === p
          ? l(D)
          : (t.consume(D), x);
  }
  function w(D) {
    return D === null || ye(D)
      ? v(D)
      : (t.enter('codeFencedFenceMeta'),
        t.enter('chunkString', { contentType: 'string' }),
        L(D));
  }
  function L(D) {
    return D === null || ye(D)
      ? (t.exit('chunkString'), t.exit('codeFencedFenceMeta'), v(D))
      : D === 96 && D === p
        ? l(D)
        : (t.consume(D), L);
  }
  function T(D) {
    return t.attempt(a, W, O)(D);
  }
  function O(D) {
    return (t.enter('lineEnding'), t.consume(D), t.exit('lineEnding'), P);
  }
  function P(D) {
    return s > 0 && Ie(D) ? De(t, U, 'linePrefix', s + 1)(D) : U(D);
  }
  function U(D) {
    return D === null || ye(D)
      ? t.check(ap, T, W)(D)
      : (t.enter('codeFlowValue'), M(D));
  }
  function M(D) {
    return D === null || ye(D)
      ? (t.exit('codeFlowValue'), U(D))
      : (t.consume(D), M);
  }
  function W(D) {
    return (t.exit('codeFenced'), r(D));
  }
  function q(D, G, ue) {
    let se = 0;
    return me;
    function me(ae) {
      return (D.enter('lineEnding'), D.consume(ae), D.exit('lineEnding'), te);
    }
    function te(ae) {
      return (
        D.enter('codeFencedFence'),
        Ie(ae)
          ? De(
              D,
              ne,
              'linePrefix',
              o.parser.constructs.disable.null.includes('codeIndented')
                ? void 0
                : 4,
            )(ae)
          : ne(ae)
      );
    }
    function ne(ae) {
      return ae === p ? (D.enter('codeFencedFenceSequence'), Z(ae)) : ue(ae);
    }
    function Z(ae) {
      return ae === p
        ? (se++, D.consume(ae), Z)
        : se >= f
          ? (D.exit('codeFencedFenceSequence'),
            Ie(ae) ? De(D, J, 'whitespace')(ae) : J(ae))
          : ue(ae);
    }
    function J(ae) {
      return ae === null || ye(ae)
        ? (D.exit('codeFencedFence'), G(ae))
        : ue(ae);
    }
  }
}
function Yw(t, r, l) {
  const o = this;
  return a;
  function a(f) {
    return f === null
      ? l(f)
      : (t.enter('lineEnding'), t.consume(f), t.exit('lineEnding'), s);
  }
  function s(f) {
    return o.parser.lazy[o.now().line] ? l(f) : r(f);
  }
}
const ja = { name: 'codeIndented', tokenize: Gw },
  Xw = { partial: !0, tokenize: Jw };
function Gw(t, r, l) {
  const o = this;
  return a;
  function a(m) {
    return (t.enter('codeIndented'), De(t, s, 'linePrefix', 5)(m));
  }
  function s(m) {
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
      : ye(m)
        ? t.attempt(Xw, f, h)(m)
        : (t.enter('codeFlowValue'), p(m));
  }
  function p(m) {
    return m === null || ye(m)
      ? (t.exit('codeFlowValue'), f(m))
      : (t.consume(m), p);
  }
  function h(m) {
    return (t.exit('codeIndented'), r(m));
  }
}
function Jw(t, r, l) {
  const o = this;
  return a;
  function a(f) {
    return o.parser.lazy[o.now().line]
      ? l(f)
      : ye(f)
        ? (t.enter('lineEnding'), t.consume(f), t.exit('lineEnding'), a)
        : De(t, s, 'linePrefix', 5)(f);
  }
  function s(f) {
    const p = o.events[o.events.length - 1];
    return p &&
      p[1].type === 'linePrefix' &&
      p[2].sliceSerialize(p[1], !0).length >= 4
      ? r(f)
      : ye(f)
        ? a(f)
        : l(f);
  }
}
const Zw = { name: 'codeText', previous: tx, resolve: ex, tokenize: nx };
function ex(t) {
  let r = t.length - 4,
    l = 3,
    o,
    a;
  if (
    (t[l][1].type === 'lineEnding' || t[l][1].type === 'space') &&
    (t[r][1].type === 'lineEnding' || t[r][1].type === 'space')
  ) {
    for (o = l; ++o < r; )
      if (t[o][1].type === 'codeTextData') {
        ((t[l][1].type = 'codeTextPadding'),
          (t[r][1].type = 'codeTextPadding'),
          (l += 2),
          (r -= 2));
        break;
      }
  }
  for (o = l - 1, r++; ++o <= r; )
    a === void 0
      ? o !== r && t[o][1].type !== 'lineEnding' && (a = o)
      : (o === r || t[o][1].type === 'lineEnding') &&
        ((t[a][1].type = 'codeTextData'),
        o !== a + 2 &&
          ((t[a][1].end = t[o - 1][1].end),
          t.splice(a + 2, o - a - 2),
          (r -= o - a - 2),
          (o = a + 2)),
        (a = void 0));
  return t;
}
function tx(t) {
  return (
    t !== 96 ||
    this.events[this.events.length - 1][1].type === 'characterEscape'
  );
}
function nx(t, r, l) {
  let o = 0,
    a,
    s;
  return f;
  function f(v) {
    return (t.enter('codeText'), t.enter('codeTextSequence'), p(v));
  }
  function p(v) {
    return v === 96
      ? (t.consume(v), o++, p)
      : (t.exit('codeTextSequence'), h(v));
  }
  function h(v) {
    return v === null
      ? l(v)
      : v === 32
        ? (t.enter('space'), t.consume(v), t.exit('space'), h)
        : v === 96
          ? ((s = t.enter('codeTextSequence')), (a = 0), g(v))
          : ye(v)
            ? (t.enter('lineEnding'), t.consume(v), t.exit('lineEnding'), h)
            : (t.enter('codeTextData'), m(v));
  }
  function m(v) {
    return v === null || v === 32 || v === 96 || ye(v)
      ? (t.exit('codeTextData'), h(v))
      : (t.consume(v), m);
  }
  function g(v) {
    return v === 96
      ? (t.consume(v), a++, g)
      : a === o
        ? (t.exit('codeTextSequence'), t.exit('codeText'), r(v))
        : ((s.type = 'codeTextData'), m(v));
  }
}
class rx {
  constructor(r) {
    ((this.left = r ? [...r] : []), (this.right = []));
  }
  get(r) {
    if (r < 0 || r >= this.left.length + this.right.length)
      throw new RangeError(
        'Cannot access index `' +
          r +
          '` in a splice buffer of size `' +
          (this.left.length + this.right.length) +
          '`',
      );
    return r < this.left.length
      ? this.left[r]
      : this.right[this.right.length - r + this.left.length - 1];
  }
  get length() {
    return this.left.length + this.right.length;
  }
  shift() {
    return (this.setCursor(0), this.right.pop());
  }
  slice(r, l) {
    const o = l ?? Number.POSITIVE_INFINITY;
    return o < this.left.length
      ? this.left.slice(r, o)
      : r > this.left.length
        ? this.right
            .slice(
              this.right.length - o + this.left.length,
              this.right.length - r + this.left.length,
            )
            .reverse()
        : this.left
            .slice(r)
            .concat(
              this.right
                .slice(this.right.length - o + this.left.length)
                .reverse(),
            );
  }
  splice(r, l, o) {
    const a = l || 0;
    this.setCursor(Math.trunc(r));
    const s = this.right.splice(
      this.right.length - a,
      Number.POSITIVE_INFINITY,
    );
    return (o && Oi(this.left, o), s.reverse());
  }
  pop() {
    return (this.setCursor(Number.POSITIVE_INFINITY), this.left.pop());
  }
  push(r) {
    (this.setCursor(Number.POSITIVE_INFINITY), this.left.push(r));
  }
  pushMany(r) {
    (this.setCursor(Number.POSITIVE_INFINITY), Oi(this.left, r));
  }
  unshift(r) {
    (this.setCursor(0), this.right.push(r));
  }
  unshiftMany(r) {
    (this.setCursor(0), Oi(this.right, r.reverse()));
  }
  setCursor(r) {
    if (
      !(
        r === this.left.length ||
        (r > this.left.length && this.right.length === 0) ||
        (r < 0 && this.left.length === 0)
      )
    )
      if (r < this.left.length) {
        const l = this.left.splice(r, Number.POSITIVE_INFINITY);
        Oi(this.right, l.reverse());
      } else {
        const l = this.right.splice(
          this.left.length + this.right.length - r,
          Number.POSITIVE_INFINITY,
        );
        Oi(this.left, l.reverse());
      }
  }
}
function Oi(t, r) {
  let l = 0;
  if (r.length < 1e4) t.push(...r);
  else for (; l < r.length; ) (t.push(...r.slice(l, l + 1e4)), (l += 1e4));
}
function Rh(t) {
  const r = {};
  let l = -1,
    o,
    a,
    s,
    f,
    p,
    h,
    m;
  const g = new rx(t);
  for (; ++l < g.length; ) {
    for (; l in r; ) l = r[l];
    if (
      ((o = g.get(l)),
      l &&
        o[1].type === 'chunkFlow' &&
        g.get(l - 1)[1].type === 'listItemPrefix' &&
        ((h = o[1]._tokenizer.events),
        (s = 0),
        s < h.length && h[s][1].type === 'lineEndingBlank' && (s += 2),
        s < h.length && h[s][1].type === 'content'))
    )
      for (; ++s < h.length && h[s][1].type !== 'content'; )
        h[s][1].type === 'chunkText' &&
          ((h[s][1]._isInFirstContentOfListItem = !0), s++);
    if (o[0] === 'enter')
      o[1].contentType && (Object.assign(r, ix(g, l)), (l = r[l]), (m = !0));
    else if (o[1]._container) {
      for (s = l, a = void 0; s--; )
        if (
          ((f = g.get(s)),
          f[1].type === 'lineEnding' || f[1].type === 'lineEndingBlank')
        )
          f[0] === 'enter' &&
            (a && (g.get(a)[1].type = 'lineEndingBlank'),
            (f[1].type = 'lineEnding'),
            (a = s));
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
  return (Zt(t, 0, Number.POSITIVE_INFINITY, g.slice(0)), !m);
}
function ix(t, r) {
  const l = t.get(r)[1],
    o = t.get(r)[2];
  let a = r - 1;
  const s = [];
  let f = l._tokenizer;
  f ||
    ((f = o.parser[l.contentType](l.start)),
    l._contentTypeTextTrailing && (f._contentTypeTextTrailing = !0));
  const p = f.events,
    h = [],
    m = {};
  let g,
    v,
    x = -1,
    w = l,
    L = 0,
    T = 0;
  const O = [T];
  for (; w; ) {
    for (; t.get(++a)[1] !== w; );
    (s.push(a),
      w._tokenizer ||
        ((g = o.sliceStream(w)),
        w.next || g.push(null),
        v && f.defineSkip(w.start),
        w._isInFirstContentOfListItem &&
          (f._gfmTasklistFirstContentOfListItem = !0),
        f.write(g),
        w._isInFirstContentOfListItem &&
          (f._gfmTasklistFirstContentOfListItem = void 0)),
      (v = w),
      (w = w.next));
  }
  for (w = l; ++x < p.length; )
    p[x][0] === 'exit' &&
      p[x - 1][0] === 'enter' &&
      p[x][1].type === p[x - 1][1].type &&
      p[x][1].start.line !== p[x][1].end.line &&
      ((T = x + 1),
      O.push(T),
      (w._tokenizer = void 0),
      (w.previous = void 0),
      (w = w.next));
  for (
    f.events = [],
      w ? ((w._tokenizer = void 0), (w.previous = void 0)) : O.pop(),
      x = O.length;
    x--;

  ) {
    const P = p.slice(O[x], O[x + 1]),
      U = s.pop();
    (h.push([U, U + P.length - 1]), t.splice(U, 2, P));
  }
  for (h.reverse(), x = -1; ++x < h.length; )
    ((m[L + h[x][0]] = L + h[x][1]), (L += h[x][1] - h[x][0] - 1));
  return m;
}
const lx = { resolve: ux, tokenize: ax },
  ox = { partial: !0, tokenize: sx };
function ux(t) {
  return (Rh(t), t);
}
function ax(t, r) {
  let l;
  return o;
  function o(p) {
    return (
      t.enter('content'),
      (l = t.enter('chunkContent', { contentType: 'content' })),
      a(p)
    );
  }
  function a(p) {
    return p === null ? s(p) : ye(p) ? t.check(ox, f, s)(p) : (t.consume(p), a);
  }
  function s(p) {
    return (t.exit('chunkContent'), t.exit('content'), r(p));
  }
  function f(p) {
    return (
      t.consume(p),
      t.exit('chunkContent'),
      (l.next = t.enter('chunkContent', {
        contentType: 'content',
        previous: l,
      })),
      (l = l.next),
      a
    );
  }
}
function sx(t, r, l) {
  const o = this;
  return a;
  function a(f) {
    return (
      t.exit('chunkContent'),
      t.enter('lineEnding'),
      t.consume(f),
      t.exit('lineEnding'),
      De(t, s, 'linePrefix')
    );
  }
  function s(f) {
    if (f === null || ye(f)) return l(f);
    const p = o.events[o.events.length - 1];
    return !o.parser.constructs.disable.null.includes('codeIndented') &&
      p &&
      p[1].type === 'linePrefix' &&
      p[2].sliceSerialize(p[1], !0).length >= 4
      ? r(f)
      : t.interrupt(o.parser.constructs.flow, l, r)(f);
  }
}
function Nh(t, r, l, o, a, s, f, p, h) {
  const m = h || Number.POSITIVE_INFINITY;
  let g = 0;
  return v;
  function v(P) {
    return P === 60
      ? (t.enter(o), t.enter(a), t.enter(s), t.consume(P), t.exit(s), x)
      : P === null || P === 32 || P === 41 || os(P)
        ? l(P)
        : (t.enter(o),
          t.enter(f),
          t.enter(p),
          t.enter('chunkString', { contentType: 'string' }),
          T(P));
  }
  function x(P) {
    return P === 62
      ? (t.enter(s), t.consume(P), t.exit(s), t.exit(a), t.exit(o), r)
      : (t.enter(p), t.enter('chunkString', { contentType: 'string' }), w(P));
  }
  function w(P) {
    return P === 62
      ? (t.exit('chunkString'), t.exit(p), x(P))
      : P === null || P === 60 || ye(P)
        ? l(P)
        : (t.consume(P), P === 92 ? L : w);
  }
  function L(P) {
    return P === 60 || P === 62 || P === 92 ? (t.consume(P), w) : w(P);
  }
  function T(P) {
    return !g && (P === null || P === 41 || yt(P))
      ? (t.exit('chunkString'), t.exit(p), t.exit(f), t.exit(o), r(P))
      : g < m && P === 40
        ? (t.consume(P), g++, T)
        : P === 41
          ? (t.consume(P), g--, T)
          : P === null || P === 32 || P === 40 || os(P)
            ? l(P)
            : (t.consume(P), P === 92 ? O : T);
  }
  function O(P) {
    return P === 40 || P === 41 || P === 92 ? (t.consume(P), T) : T(P);
  }
}
function Th(t, r, l, o, a, s) {
  const f = this;
  let p = 0,
    h;
  return m;
  function m(w) {
    return (t.enter(o), t.enter(a), t.consume(w), t.exit(a), t.enter(s), g);
  }
  function g(w) {
    return p > 999 ||
      w === null ||
      w === 91 ||
      (w === 93 && !h) ||
      (w === 94 && !p && '_hiddenFootnoteSupport' in f.parser.constructs)
      ? l(w)
      : w === 93
        ? (t.exit(s), t.enter(a), t.consume(w), t.exit(a), t.exit(o), r)
        : ye(w)
          ? (t.enter('lineEnding'), t.consume(w), t.exit('lineEnding'), g)
          : (t.enter('chunkString', { contentType: 'string' }), v(w));
  }
  function v(w) {
    return w === null || w === 91 || w === 93 || ye(w) || p++ > 999
      ? (t.exit('chunkString'), g(w))
      : (t.consume(w), h || (h = !Ie(w)), w === 92 ? x : v);
  }
  function x(w) {
    return w === 91 || w === 92 || w === 93 ? (t.consume(w), p++, v) : v(w);
  }
}
function Ih(t, r, l, o, a, s) {
  let f;
  return p;
  function p(x) {
    return x === 34 || x === 39 || x === 40
      ? (t.enter(o),
        t.enter(a),
        t.consume(x),
        t.exit(a),
        (f = x === 40 ? 41 : x),
        h)
      : l(x);
  }
  function h(x) {
    return x === f
      ? (t.enter(a), t.consume(x), t.exit(a), t.exit(o), r)
      : (t.enter(s), m(x));
  }
  function m(x) {
    return x === f
      ? (t.exit(s), h(f))
      : x === null
        ? l(x)
        : ye(x)
          ? (t.enter('lineEnding'),
            t.consume(x),
            t.exit('lineEnding'),
            De(t, m, 'linePrefix'))
          : (t.enter('chunkString', { contentType: 'string' }), g(x));
  }
  function g(x) {
    return x === f || x === null || ye(x)
      ? (t.exit('chunkString'), m(x))
      : (t.consume(x), x === 92 ? v : g);
  }
  function v(x) {
    return x === f || x === 92 ? (t.consume(x), g) : g(x);
  }
}
function Fi(t, r) {
  let l;
  return o;
  function o(a) {
    return ye(a)
      ? (t.enter('lineEnding'), t.consume(a), t.exit('lineEnding'), (l = !0), o)
      : Ie(a)
        ? De(t, o, l ? 'linePrefix' : 'lineSuffix')(a)
        : r(a);
  }
}
const cx = { name: 'definition', tokenize: dx },
  fx = { partial: !0, tokenize: px };
function dx(t, r, l) {
  const o = this;
  let a;
  return s;
  function s(w) {
    return (t.enter('definition'), f(w));
  }
  function f(w) {
    return Th.call(
      o,
      t,
      p,
      l,
      'definitionLabel',
      'definitionLabelMarker',
      'definitionLabelString',
    )(w);
  }
  function p(w) {
    return (
      (a = Fr(o.sliceSerialize(o.events[o.events.length - 1][1]).slice(1, -1))),
      w === 58
        ? (t.enter('definitionMarker'),
          t.consume(w),
          t.exit('definitionMarker'),
          h)
        : l(w)
    );
  }
  function h(w) {
    return yt(w) ? Fi(t, m)(w) : m(w);
  }
  function m(w) {
    return Nh(
      t,
      g,
      l,
      'definitionDestination',
      'definitionDestinationLiteral',
      'definitionDestinationLiteralMarker',
      'definitionDestinationRaw',
      'definitionDestinationString',
    )(w);
  }
  function g(w) {
    return t.attempt(fx, v, v)(w);
  }
  function v(w) {
    return Ie(w) ? De(t, x, 'whitespace')(w) : x(w);
  }
  function x(w) {
    return w === null || ye(w)
      ? (t.exit('definition'), o.parser.defined.push(a), r(w))
      : l(w);
  }
}
function px(t, r, l) {
  return o;
  function o(p) {
    return yt(p) ? Fi(t, a)(p) : l(p);
  }
  function a(p) {
    return Ih(
      t,
      s,
      l,
      'definitionTitle',
      'definitionTitleMarker',
      'definitionTitleString',
    )(p);
  }
  function s(p) {
    return Ie(p) ? De(t, f, 'whitespace')(p) : f(p);
  }
  function f(p) {
    return p === null || ye(p) ? r(p) : l(p);
  }
}
const hx = { name: 'hardBreakEscape', tokenize: mx };
function mx(t, r, l) {
  return o;
  function o(s) {
    return (t.enter('hardBreakEscape'), t.consume(s), a);
  }
  function a(s) {
    return ye(s) ? (t.exit('hardBreakEscape'), r(s)) : l(s);
  }
}
const gx = { name: 'headingAtx', resolve: yx, tokenize: vx };
function yx(t, r) {
  let l = t.length - 2,
    o = 3,
    a,
    s;
  return (
    t[o][1].type === 'whitespace' && (o += 2),
    l - 2 > o && t[l][1].type === 'whitespace' && (l -= 2),
    t[l][1].type === 'atxHeadingSequence' &&
      (o === l - 1 || (l - 4 > o && t[l - 2][1].type === 'whitespace')) &&
      (l -= o + 1 === l ? 2 : 4),
    l > o &&
      ((a = { type: 'atxHeadingText', start: t[o][1].start, end: t[l][1].end }),
      (s = {
        type: 'chunkText',
        start: t[o][1].start,
        end: t[l][1].end,
        contentType: 'text',
      }),
      Zt(t, o, l - o + 1, [
        ['enter', a, r],
        ['enter', s, r],
        ['exit', s, r],
        ['exit', a, r],
      ])),
    t
  );
}
function vx(t, r, l) {
  let o = 0;
  return a;
  function a(g) {
    return (t.enter('atxHeading'), s(g));
  }
  function s(g) {
    return (t.enter('atxHeadingSequence'), f(g));
  }
  function f(g) {
    return g === 35 && o++ < 6
      ? (t.consume(g), f)
      : g === null || yt(g)
        ? (t.exit('atxHeadingSequence'), p(g))
        : l(g);
  }
  function p(g) {
    return g === 35
      ? (t.enter('atxHeadingSequence'), h(g))
      : g === null || ye(g)
        ? (t.exit('atxHeading'), r(g))
        : Ie(g)
          ? De(t, p, 'whitespace')(g)
          : (t.enter('atxHeadingText'), m(g));
  }
  function h(g) {
    return g === 35 ? (t.consume(g), h) : (t.exit('atxHeadingSequence'), p(g));
  }
  function m(g) {
    return g === null || g === 35 || yt(g)
      ? (t.exit('atxHeadingText'), p(g))
      : (t.consume(g), m);
  }
}
const wx = [
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
  cp = ['pre', 'script', 'style', 'textarea'],
  xx = { concrete: !0, name: 'htmlFlow', resolveTo: Ex, tokenize: Cx },
  kx = { partial: !0, tokenize: Px },
  Sx = { partial: !0, tokenize: _x };
function Ex(t) {
  let r = t.length;
  for (; r-- && !(t[r][0] === 'enter' && t[r][1].type === 'htmlFlow'); );
  return (
    r > 1 &&
      t[r - 2][1].type === 'linePrefix' &&
      ((t[r][1].start = t[r - 2][1].start),
      (t[r + 1][1].start = t[r - 2][1].start),
      t.splice(r - 2, 2)),
    t
  );
}
function Cx(t, r, l) {
  const o = this;
  let a, s, f, p, h;
  return m;
  function m(E) {
    return g(E);
  }
  function g(E) {
    return (t.enter('htmlFlow'), t.enter('htmlFlowData'), t.consume(E), v);
  }
  function v(E) {
    return E === 33
      ? (t.consume(E), x)
      : E === 47
        ? (t.consume(E), (s = !0), T)
        : E === 63
          ? (t.consume(E), (a = 3), o.interrupt ? r : k)
          : Gt(E)
            ? (t.consume(E), (f = String.fromCharCode(E)), O)
            : l(E);
  }
  function x(E) {
    return E === 45
      ? (t.consume(E), (a = 2), w)
      : E === 91
        ? (t.consume(E), (a = 5), (p = 0), L)
        : Gt(E)
          ? (t.consume(E), (a = 4), o.interrupt ? r : k)
          : l(E);
  }
  function w(E) {
    return E === 45 ? (t.consume(E), o.interrupt ? r : k) : l(E);
  }
  function L(E) {
    const pe = 'CDATA[';
    return E === pe.charCodeAt(p++)
      ? (t.consume(E), p === pe.length ? (o.interrupt ? r : ne) : L)
      : l(E);
  }
  function T(E) {
    return Gt(E) ? (t.consume(E), (f = String.fromCharCode(E)), O) : l(E);
  }
  function O(E) {
    if (E === null || E === 47 || E === 62 || yt(E)) {
      const pe = E === 47,
        xe = f.toLowerCase();
      return !pe && !s && cp.includes(xe)
        ? ((a = 1), o.interrupt ? r(E) : ne(E))
        : wx.includes(f.toLowerCase())
          ? ((a = 6), pe ? (t.consume(E), P) : o.interrupt ? r(E) : ne(E))
          : ((a = 7),
            o.interrupt && !o.parser.lazy[o.now().line]
              ? l(E)
              : s
                ? U(E)
                : M(E));
    }
    return E === 45 || _t(E)
      ? (t.consume(E), (f += String.fromCharCode(E)), O)
      : l(E);
  }
  function P(E) {
    return E === 62 ? (t.consume(E), o.interrupt ? r : ne) : l(E);
  }
  function U(E) {
    return Ie(E) ? (t.consume(E), U) : me(E);
  }
  function M(E) {
    return E === 47
      ? (t.consume(E), me)
      : E === 58 || E === 95 || Gt(E)
        ? (t.consume(E), W)
        : Ie(E)
          ? (t.consume(E), M)
          : me(E);
  }
  function W(E) {
    return E === 45 || E === 46 || E === 58 || E === 95 || _t(E)
      ? (t.consume(E), W)
      : q(E);
  }
  function q(E) {
    return E === 61 ? (t.consume(E), D) : Ie(E) ? (t.consume(E), q) : M(E);
  }
  function D(E) {
    return E === null || E === 60 || E === 61 || E === 62 || E === 96
      ? l(E)
      : E === 34 || E === 39
        ? (t.consume(E), (h = E), G)
        : Ie(E)
          ? (t.consume(E), D)
          : ue(E);
  }
  function G(E) {
    return E === h
      ? (t.consume(E), (h = null), se)
      : E === null || ye(E)
        ? l(E)
        : (t.consume(E), G);
  }
  function ue(E) {
    return E === null ||
      E === 34 ||
      E === 39 ||
      E === 47 ||
      E === 60 ||
      E === 61 ||
      E === 62 ||
      E === 96 ||
      yt(E)
      ? q(E)
      : (t.consume(E), ue);
  }
  function se(E) {
    return E === 47 || E === 62 || Ie(E) ? M(E) : l(E);
  }
  function me(E) {
    return E === 62 ? (t.consume(E), te) : l(E);
  }
  function te(E) {
    return E === null || ye(E) ? ne(E) : Ie(E) ? (t.consume(E), te) : l(E);
  }
  function ne(E) {
    return E === 45 && a === 2
      ? (t.consume(E), Ce)
      : E === 60 && a === 1
        ? (t.consume(E), we)
        : E === 62 && a === 4
          ? (t.consume(E), R)
          : E === 63 && a === 3
            ? (t.consume(E), k)
            : E === 93 && a === 5
              ? (t.consume(E), oe)
              : ye(E) && (a === 6 || a === 7)
                ? (t.exit('htmlFlowData'), t.check(kx, j, Z)(E))
                : E === null || ye(E)
                  ? (t.exit('htmlFlowData'), Z(E))
                  : (t.consume(E), ne);
  }
  function Z(E) {
    return t.check(Sx, J, j)(E);
  }
  function J(E) {
    return (t.enter('lineEnding'), t.consume(E), t.exit('lineEnding'), ae);
  }
  function ae(E) {
    return E === null || ye(E) ? Z(E) : (t.enter('htmlFlowData'), ne(E));
  }
  function Ce(E) {
    return E === 45 ? (t.consume(E), k) : ne(E);
  }
  function we(E) {
    return E === 47 ? (t.consume(E), (f = ''), Q) : ne(E);
  }
  function Q(E) {
    if (E === 62) {
      const pe = f.toLowerCase();
      return cp.includes(pe) ? (t.consume(E), R) : ne(E);
    }
    return Gt(E) && f.length < 8
      ? (t.consume(E), (f += String.fromCharCode(E)), Q)
      : ne(E);
  }
  function oe(E) {
    return E === 93 ? (t.consume(E), k) : ne(E);
  }
  function k(E) {
    return E === 62
      ? (t.consume(E), R)
      : E === 45 && a === 2
        ? (t.consume(E), k)
        : ne(E);
  }
  function R(E) {
    return E === null || ye(E)
      ? (t.exit('htmlFlowData'), j(E))
      : (t.consume(E), R);
  }
  function j(E) {
    return (t.exit('htmlFlow'), r(E));
  }
}
function _x(t, r, l) {
  const o = this;
  return a;
  function a(f) {
    return ye(f)
      ? (t.enter('lineEnding'), t.consume(f), t.exit('lineEnding'), s)
      : l(f);
  }
  function s(f) {
    return o.parser.lazy[o.now().line] ? l(f) : r(f);
  }
}
function Px(t, r, l) {
  return o;
  function o(a) {
    return (
      t.enter('lineEnding'),
      t.consume(a),
      t.exit('lineEnding'),
      t.attempt(Mo, r, l)
    );
  }
}
const Rx = { name: 'htmlText', tokenize: Nx };
function Nx(t, r, l) {
  const o = this;
  let a, s, f;
  return p;
  function p(k) {
    return (t.enter('htmlText'), t.enter('htmlTextData'), t.consume(k), h);
  }
  function h(k) {
    return k === 33
      ? (t.consume(k), m)
      : k === 47
        ? (t.consume(k), q)
        : k === 63
          ? (t.consume(k), M)
          : Gt(k)
            ? (t.consume(k), ue)
            : l(k);
  }
  function m(k) {
    return k === 45
      ? (t.consume(k), g)
      : k === 91
        ? (t.consume(k), (s = 0), L)
        : Gt(k)
          ? (t.consume(k), U)
          : l(k);
  }
  function g(k) {
    return k === 45 ? (t.consume(k), w) : l(k);
  }
  function v(k) {
    return k === null
      ? l(k)
      : k === 45
        ? (t.consume(k), x)
        : ye(k)
          ? ((f = v), we(k))
          : (t.consume(k), v);
  }
  function x(k) {
    return k === 45 ? (t.consume(k), w) : v(k);
  }
  function w(k) {
    return k === 62 ? Ce(k) : k === 45 ? x(k) : v(k);
  }
  function L(k) {
    const R = 'CDATA[';
    return k === R.charCodeAt(s++)
      ? (t.consume(k), s === R.length ? T : L)
      : l(k);
  }
  function T(k) {
    return k === null
      ? l(k)
      : k === 93
        ? (t.consume(k), O)
        : ye(k)
          ? ((f = T), we(k))
          : (t.consume(k), T);
  }
  function O(k) {
    return k === 93 ? (t.consume(k), P) : T(k);
  }
  function P(k) {
    return k === 62 ? Ce(k) : k === 93 ? (t.consume(k), P) : T(k);
  }
  function U(k) {
    return k === null || k === 62
      ? Ce(k)
      : ye(k)
        ? ((f = U), we(k))
        : (t.consume(k), U);
  }
  function M(k) {
    return k === null
      ? l(k)
      : k === 63
        ? (t.consume(k), W)
        : ye(k)
          ? ((f = M), we(k))
          : (t.consume(k), M);
  }
  function W(k) {
    return k === 62 ? Ce(k) : M(k);
  }
  function q(k) {
    return Gt(k) ? (t.consume(k), D) : l(k);
  }
  function D(k) {
    return k === 45 || _t(k) ? (t.consume(k), D) : G(k);
  }
  function G(k) {
    return ye(k) ? ((f = G), we(k)) : Ie(k) ? (t.consume(k), G) : Ce(k);
  }
  function ue(k) {
    return k === 45 || _t(k)
      ? (t.consume(k), ue)
      : k === 47 || k === 62 || yt(k)
        ? se(k)
        : l(k);
  }
  function se(k) {
    return k === 47
      ? (t.consume(k), Ce)
      : k === 58 || k === 95 || Gt(k)
        ? (t.consume(k), me)
        : ye(k)
          ? ((f = se), we(k))
          : Ie(k)
            ? (t.consume(k), se)
            : Ce(k);
  }
  function me(k) {
    return k === 45 || k === 46 || k === 58 || k === 95 || _t(k)
      ? (t.consume(k), me)
      : te(k);
  }
  function te(k) {
    return k === 61
      ? (t.consume(k), ne)
      : ye(k)
        ? ((f = te), we(k))
        : Ie(k)
          ? (t.consume(k), te)
          : se(k);
  }
  function ne(k) {
    return k === null || k === 60 || k === 61 || k === 62 || k === 96
      ? l(k)
      : k === 34 || k === 39
        ? (t.consume(k), (a = k), Z)
        : ye(k)
          ? ((f = ne), we(k))
          : Ie(k)
            ? (t.consume(k), ne)
            : (t.consume(k), J);
  }
  function Z(k) {
    return k === a
      ? (t.consume(k), (a = void 0), ae)
      : k === null
        ? l(k)
        : ye(k)
          ? ((f = Z), we(k))
          : (t.consume(k), Z);
  }
  function J(k) {
    return k === null ||
      k === 34 ||
      k === 39 ||
      k === 60 ||
      k === 61 ||
      k === 96
      ? l(k)
      : k === 47 || k === 62 || yt(k)
        ? se(k)
        : (t.consume(k), J);
  }
  function ae(k) {
    return k === 47 || k === 62 || yt(k) ? se(k) : l(k);
  }
  function Ce(k) {
    return k === 62
      ? (t.consume(k), t.exit('htmlTextData'), t.exit('htmlText'), r)
      : l(k);
  }
  function we(k) {
    return (
      t.exit('htmlTextData'),
      t.enter('lineEnding'),
      t.consume(k),
      t.exit('lineEnding'),
      Q
    );
  }
  function Q(k) {
    return Ie(k)
      ? De(
          t,
          oe,
          'linePrefix',
          o.parser.constructs.disable.null.includes('codeIndented')
            ? void 0
            : 4,
        )(k)
      : oe(k);
  }
  function oe(k) {
    return (t.enter('htmlTextData'), f(k));
  }
}
const Ts = { name: 'labelEnd', resolveAll: zx, resolveTo: Ox, tokenize: Dx },
  Tx = { tokenize: Mx },
  Ix = { tokenize: Ax },
  Lx = { tokenize: Fx };
function zx(t) {
  let r = -1;
  const l = [];
  for (; ++r < t.length; ) {
    const o = t[r][1];
    if (
      (l.push(t[r]),
      o.type === 'labelImage' ||
        o.type === 'labelLink' ||
        o.type === 'labelEnd')
    ) {
      const a = o.type === 'labelImage' ? 4 : 2;
      ((o.type = 'data'), (r += a));
    }
  }
  return (t.length !== l.length && Zt(t, 0, t.length, l), t);
}
function Ox(t, r) {
  let l = t.length,
    o = 0,
    a,
    s,
    f,
    p;
  for (; l--; )
    if (((a = t[l][1]), s)) {
      if (a.type === 'link' || (a.type === 'labelLink' && a._inactive)) break;
      t[l][0] === 'enter' && a.type === 'labelLink' && (a._inactive = !0);
    } else if (f) {
      if (
        t[l][0] === 'enter' &&
        (a.type === 'labelImage' || a.type === 'labelLink') &&
        !a._balanced &&
        ((s = l), a.type !== 'labelLink')
      ) {
        o = 2;
        break;
      }
    } else a.type === 'labelEnd' && (f = l);
  const h = {
      type: t[s][1].type === 'labelLink' ? 'link' : 'image',
      start: { ...t[s][1].start },
      end: { ...t[t.length - 1][1].end },
    },
    m = { type: 'label', start: { ...t[s][1].start }, end: { ...t[f][1].end } },
    g = {
      type: 'labelText',
      start: { ...t[s + o + 2][1].end },
      end: { ...t[f - 2][1].start },
    };
  return (
    (p = [
      ['enter', h, r],
      ['enter', m, r],
    ]),
    (p = Mt(p, t.slice(s + 1, s + o + 3))),
    (p = Mt(p, [['enter', g, r]])),
    (p = Mt(
      p,
      Ns(r.parser.constructs.insideSpan.null, t.slice(s + o + 4, f - 3), r),
    )),
    (p = Mt(p, [['exit', g, r], t[f - 2], t[f - 1], ['exit', m, r]])),
    (p = Mt(p, t.slice(f + 1))),
    (p = Mt(p, [['exit', h, r]])),
    Zt(t, s, t.length, p),
    t
  );
}
function Dx(t, r, l) {
  const o = this;
  let a = o.events.length,
    s,
    f;
  for (; a--; )
    if (
      (o.events[a][1].type === 'labelImage' ||
        o.events[a][1].type === 'labelLink') &&
      !o.events[a][1]._balanced
    ) {
      s = o.events[a][1];
      break;
    }
  return p;
  function p(x) {
    return s
      ? s._inactive
        ? v(x)
        : ((f = o.parser.defined.includes(
            Fr(o.sliceSerialize({ start: s.end, end: o.now() })),
          )),
          t.enter('labelEnd'),
          t.enter('labelMarker'),
          t.consume(x),
          t.exit('labelMarker'),
          t.exit('labelEnd'),
          h)
      : l(x);
  }
  function h(x) {
    return x === 40
      ? t.attempt(Tx, g, f ? g : v)(x)
      : x === 91
        ? t.attempt(Ix, g, f ? m : v)(x)
        : f
          ? g(x)
          : v(x);
  }
  function m(x) {
    return t.attempt(Lx, g, v)(x);
  }
  function g(x) {
    return r(x);
  }
  function v(x) {
    return ((s._balanced = !0), l(x));
  }
}
function Mx(t, r, l) {
  return o;
  function o(v) {
    return (
      t.enter('resource'),
      t.enter('resourceMarker'),
      t.consume(v),
      t.exit('resourceMarker'),
      a
    );
  }
  function a(v) {
    return yt(v) ? Fi(t, s)(v) : s(v);
  }
  function s(v) {
    return v === 41
      ? g(v)
      : Nh(
          t,
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
    return yt(v) ? Fi(t, h)(v) : g(v);
  }
  function p(v) {
    return l(v);
  }
  function h(v) {
    return v === 34 || v === 39 || v === 40
      ? Ih(
          t,
          m,
          l,
          'resourceTitle',
          'resourceTitleMarker',
          'resourceTitleString',
        )(v)
      : g(v);
  }
  function m(v) {
    return yt(v) ? Fi(t, g)(v) : g(v);
  }
  function g(v) {
    return v === 41
      ? (t.enter('resourceMarker'),
        t.consume(v),
        t.exit('resourceMarker'),
        t.exit('resource'),
        r)
      : l(v);
  }
}
function Ax(t, r, l) {
  const o = this;
  return a;
  function a(p) {
    return Th.call(
      o,
      t,
      s,
      f,
      'reference',
      'referenceMarker',
      'referenceString',
    )(p);
  }
  function s(p) {
    return o.parser.defined.includes(
      Fr(o.sliceSerialize(o.events[o.events.length - 1][1]).slice(1, -1)),
    )
      ? r(p)
      : l(p);
  }
  function f(p) {
    return l(p);
  }
}
function Fx(t, r, l) {
  return o;
  function o(s) {
    return (
      t.enter('reference'),
      t.enter('referenceMarker'),
      t.consume(s),
      t.exit('referenceMarker'),
      a
    );
  }
  function a(s) {
    return s === 93
      ? (t.enter('referenceMarker'),
        t.consume(s),
        t.exit('referenceMarker'),
        t.exit('reference'),
        r)
      : l(s);
  }
}
const jx = { name: 'labelStartImage', resolveAll: Ts.resolveAll, tokenize: Bx };
function Bx(t, r, l) {
  const o = this;
  return a;
  function a(p) {
    return (
      t.enter('labelImage'),
      t.enter('labelImageMarker'),
      t.consume(p),
      t.exit('labelImageMarker'),
      s
    );
  }
  function s(p) {
    return p === 91
      ? (t.enter('labelMarker'),
        t.consume(p),
        t.exit('labelMarker'),
        t.exit('labelImage'),
        f)
      : l(p);
  }
  function f(p) {
    return p === 94 && '_hiddenFootnoteSupport' in o.parser.constructs
      ? l(p)
      : r(p);
  }
}
const bx = { name: 'labelStartLink', resolveAll: Ts.resolveAll, tokenize: Ux };
function Ux(t, r, l) {
  const o = this;
  return a;
  function a(f) {
    return (
      t.enter('labelLink'),
      t.enter('labelMarker'),
      t.consume(f),
      t.exit('labelMarker'),
      t.exit('labelLink'),
      s
    );
  }
  function s(f) {
    return f === 94 && '_hiddenFootnoteSupport' in o.parser.constructs
      ? l(f)
      : r(f);
  }
}
const Ba = { name: 'lineEnding', tokenize: $x };
function $x(t, r) {
  return l;
  function l(o) {
    return (
      t.enter('lineEnding'),
      t.consume(o),
      t.exit('lineEnding'),
      De(t, r, 'linePrefix')
    );
  }
}
const go = { name: 'thematicBreak', tokenize: Hx };
function Hx(t, r, l) {
  let o = 0,
    a;
  return s;
  function s(m) {
    return (t.enter('thematicBreak'), f(m));
  }
  function f(m) {
    return ((a = m), p(m));
  }
  function p(m) {
    return m === a
      ? (t.enter('thematicBreakSequence'), h(m))
      : o >= 3 && (m === null || ye(m))
        ? (t.exit('thematicBreak'), r(m))
        : l(m);
  }
  function h(m) {
    return m === a
      ? (t.consume(m), o++, h)
      : (t.exit('thematicBreakSequence'),
        Ie(m) ? De(t, p, 'whitespace')(m) : p(m));
  }
}
const gt = {
    continuation: { tokenize: Kx },
    exit: Yx,
    name: 'list',
    tokenize: Qx,
  },
  Vx = { partial: !0, tokenize: Xx },
  Wx = { partial: !0, tokenize: qx };
function Qx(t, r, l) {
  const o = this,
    a = o.events[o.events.length - 1];
  let s =
      a && a[1].type === 'linePrefix'
        ? a[2].sliceSerialize(a[1], !0).length
        : 0,
    f = 0;
  return p;
  function p(w) {
    const L =
      o.containerState.type ||
      (w === 42 || w === 43 || w === 45 ? 'listUnordered' : 'listOrdered');
    if (
      L === 'listUnordered'
        ? !o.containerState.marker || w === o.containerState.marker
        : us(w)
    ) {
      if (
        (o.containerState.type ||
          ((o.containerState.type = L), t.enter(L, { _container: !0 })),
        L === 'listUnordered')
      )
        return (
          t.enter('listItemPrefix'),
          w === 42 || w === 45 ? t.check(go, l, m)(w) : m(w)
        );
      if (!o.interrupt || w === 49)
        return (t.enter('listItemPrefix'), t.enter('listItemValue'), h(w));
    }
    return l(w);
  }
  function h(w) {
    return us(w) && ++f < 10
      ? (t.consume(w), h)
      : (!o.interrupt || f < 2) &&
          (o.containerState.marker
            ? w === o.containerState.marker
            : w === 41 || w === 46)
        ? (t.exit('listItemValue'), m(w))
        : l(w);
  }
  function m(w) {
    return (
      t.enter('listItemMarker'),
      t.consume(w),
      t.exit('listItemMarker'),
      (o.containerState.marker = o.containerState.marker || w),
      t.check(Mo, o.interrupt ? l : g, t.attempt(Vx, x, v))
    );
  }
  function g(w) {
    return ((o.containerState.initialBlankLine = !0), s++, x(w));
  }
  function v(w) {
    return Ie(w)
      ? (t.enter('listItemPrefixWhitespace'),
        t.consume(w),
        t.exit('listItemPrefixWhitespace'),
        x)
      : l(w);
  }
  function x(w) {
    return (
      (o.containerState.size =
        s + o.sliceSerialize(t.exit('listItemPrefix'), !0).length),
      r(w)
    );
  }
}
function Kx(t, r, l) {
  const o = this;
  return ((o.containerState._closeFlow = void 0), t.check(Mo, a, s));
  function a(p) {
    return (
      (o.containerState.furtherBlankLines =
        o.containerState.furtherBlankLines ||
        o.containerState.initialBlankLine),
      De(t, r, 'listItemIndent', o.containerState.size + 1)(p)
    );
  }
  function s(p) {
    return o.containerState.furtherBlankLines || !Ie(p)
      ? ((o.containerState.furtherBlankLines = void 0),
        (o.containerState.initialBlankLine = void 0),
        f(p))
      : ((o.containerState.furtherBlankLines = void 0),
        (o.containerState.initialBlankLine = void 0),
        t.attempt(Wx, r, f)(p));
  }
  function f(p) {
    return (
      (o.containerState._closeFlow = !0),
      (o.interrupt = void 0),
      De(
        t,
        t.attempt(gt, r, l),
        'linePrefix',
        o.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 4,
      )(p)
    );
  }
}
function qx(t, r, l) {
  const o = this;
  return De(t, a, 'listItemIndent', o.containerState.size + 1);
  function a(s) {
    const f = o.events[o.events.length - 1];
    return f &&
      f[1].type === 'listItemIndent' &&
      f[2].sliceSerialize(f[1], !0).length === o.containerState.size
      ? r(s)
      : l(s);
  }
}
function Yx(t) {
  t.exit(this.containerState.type);
}
function Xx(t, r, l) {
  const o = this;
  return De(
    t,
    a,
    'listItemPrefixWhitespace',
    o.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 5,
  );
  function a(s) {
    const f = o.events[o.events.length - 1];
    return !Ie(s) && f && f[1].type === 'listItemPrefixWhitespace'
      ? r(s)
      : l(s);
  }
}
const fp = { name: 'setextUnderline', resolveTo: Gx, tokenize: Jx };
function Gx(t, r) {
  let l = t.length,
    o,
    a,
    s;
  for (; l--; )
    if (t[l][0] === 'enter') {
      if (t[l][1].type === 'content') {
        o = l;
        break;
      }
      t[l][1].type === 'paragraph' && (a = l);
    } else
      (t[l][1].type === 'content' && t.splice(l, 1),
        !s && t[l][1].type === 'definition' && (s = l));
  const f = {
    type: 'setextHeading',
    start: { ...t[o][1].start },
    end: { ...t[t.length - 1][1].end },
  };
  return (
    (t[a][1].type = 'setextHeadingText'),
    s
      ? (t.splice(a, 0, ['enter', f, r]),
        t.splice(s + 1, 0, ['exit', t[o][1], r]),
        (t[o][1].end = { ...t[s][1].end }))
      : (t[o][1] = f),
    t.push(['exit', f, r]),
    t
  );
}
function Jx(t, r, l) {
  const o = this;
  let a;
  return s;
  function s(m) {
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
      ? (t.enter('setextHeadingLine'), (a = m), f(m))
      : l(m);
  }
  function f(m) {
    return (t.enter('setextHeadingLineSequence'), p(m));
  }
  function p(m) {
    return m === a
      ? (t.consume(m), p)
      : (t.exit('setextHeadingLineSequence'),
        Ie(m) ? De(t, h, 'lineSuffix')(m) : h(m));
  }
  function h(m) {
    return m === null || ye(m) ? (t.exit('setextHeadingLine'), r(m)) : l(m);
  }
}
const Zx = { tokenize: e0 };
function e0(t) {
  const r = this,
    l = t.attempt(
      Mo,
      o,
      t.attempt(
        this.parser.constructs.flowInitial,
        a,
        De(
          t,
          t.attempt(this.parser.constructs.flow, a, t.attempt(lx, a)),
          'linePrefix',
        ),
      ),
    );
  return l;
  function o(s) {
    if (s === null) {
      t.consume(s);
      return;
    }
    return (
      t.enter('lineEndingBlank'),
      t.consume(s),
      t.exit('lineEndingBlank'),
      (r.currentConstruct = void 0),
      l
    );
  }
  function a(s) {
    if (s === null) {
      t.consume(s);
      return;
    }
    return (
      t.enter('lineEnding'),
      t.consume(s),
      t.exit('lineEnding'),
      (r.currentConstruct = void 0),
      l
    );
  }
}
const t0 = { resolveAll: zh() },
  n0 = Lh('string'),
  r0 = Lh('text');
function Lh(t) {
  return { resolveAll: zh(t === 'text' ? i0 : void 0), tokenize: r };
  function r(l) {
    const o = this,
      a = this.parser.constructs[t],
      s = l.attempt(a, f, p);
    return f;
    function f(g) {
      return m(g) ? s(g) : p(g);
    }
    function p(g) {
      if (g === null) {
        l.consume(g);
        return;
      }
      return (l.enter('data'), l.consume(g), h);
    }
    function h(g) {
      return m(g) ? (l.exit('data'), s(g)) : (l.consume(g), h);
    }
    function m(g) {
      if (g === null) return !0;
      const v = a[g];
      let x = -1;
      if (v)
        for (; ++x < v.length; ) {
          const w = v[x];
          if (!w.previous || w.previous.call(o, o.previous)) return !0;
        }
      return !1;
    }
  }
}
function zh(t) {
  return r;
  function r(l, o) {
    let a = -1,
      s;
    for (; ++a <= l.length; )
      s === void 0
        ? l[a] && l[a][1].type === 'data' && ((s = a), a++)
        : (!l[a] || l[a][1].type !== 'data') &&
          (a !== s + 2 &&
            ((l[s][1].end = l[a - 1][1].end),
            l.splice(s + 2, a - s - 2),
            (a = s + 2)),
          (s = void 0));
    return t ? t(l, o) : l;
  }
}
function i0(t, r) {
  let l = 0;
  for (; ++l <= t.length; )
    if (
      (l === t.length || t[l][1].type === 'lineEnding') &&
      t[l - 1][1].type === 'data'
    ) {
      const o = t[l - 1][1],
        a = r.sliceStream(o);
      let s = a.length,
        f = -1,
        p = 0,
        h;
      for (; s--; ) {
        const m = a[s];
        if (typeof m == 'string') {
          for (f = m.length; m.charCodeAt(f - 1) === 32; ) (p++, f--);
          if (f) break;
          f = -1;
        } else if (m === -2) ((h = !0), p++);
        else if (m !== -1) {
          s++;
          break;
        }
      }
      if ((r._contentTypeTextTrailing && l === t.length && (p = 0), p)) {
        const m = {
          type:
            l === t.length || h || p < 2 ? 'lineSuffix' : 'hardBreakTrailing',
          start: {
            _bufferIndex: s ? f : o.start._bufferIndex + f,
            _index: o.start._index + s,
            line: o.end.line,
            column: o.end.column - p,
            offset: o.end.offset - p,
          },
          end: { ...o.end },
        };
        ((o.end = { ...m.start }),
          o.start.offset === o.end.offset
            ? Object.assign(o, m)
            : (t.splice(l, 0, ['enter', m, r], ['exit', m, r]), (l += 2)));
      }
      l++;
    }
  return t;
}
const l0 = {
    42: gt,
    43: gt,
    45: gt,
    48: gt,
    49: gt,
    50: gt,
    51: gt,
    52: gt,
    53: gt,
    54: gt,
    55: gt,
    56: gt,
    57: gt,
    62: Ch,
  },
  o0 = { 91: cx },
  u0 = { [-2]: ja, [-1]: ja, 32: ja },
  a0 = {
    35: gx,
    42: go,
    45: [fp, go],
    60: xx,
    61: fp,
    95: go,
    96: sp,
    126: sp,
  },
  s0 = { 38: Ph, 92: _h },
  c0 = {
    [-5]: Ba,
    [-4]: Ba,
    [-3]: Ba,
    33: jx,
    38: Ph,
    42: as,
    60: [bw, Rx],
    91: bx,
    92: [hx, _h],
    93: Ts,
    95: as,
    96: Zw,
  },
  f0 = { null: [as, t0] },
  d0 = { null: [42, 95] },
  p0 = { null: [] },
  h0 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        attentionMarkers: d0,
        contentInitial: o0,
        disable: p0,
        document: l0,
        flow: a0,
        flowInitial: u0,
        insideSpan: f0,
        string: s0,
        text: c0,
      },
      Symbol.toStringTag,
      { value: 'Module' },
    ),
  );
function m0(t, r, l) {
  let o = {
    _bufferIndex: -1,
    _index: 0,
    line: (l && l.line) || 1,
    column: (l && l.column) || 1,
    offset: (l && l.offset) || 0,
  };
  const a = {},
    s = [];
  let f = [],
    p = [];
  const h = {
      attempt: G(q),
      check: G(D),
      consume: U,
      enter: M,
      exit: W,
      interrupt: G(D, { interrupt: !0 }),
    },
    m = {
      code: null,
      containerState: {},
      defineSkip: T,
      events: [],
      now: L,
      parser: t,
      previous: null,
      sliceSerialize: x,
      sliceStream: w,
      write: v,
    };
  let g = r.tokenize.call(m, h);
  return (r.resolveAll && s.push(r), m);
  function v(te) {
    return (
      (f = Mt(f, te)),
      O(),
      f[f.length - 1] !== null
        ? []
        : (ue(r, 0), (m.events = Ns(s, m.events, m)), m.events)
    );
  }
  function x(te, ne) {
    return y0(w(te), ne);
  }
  function w(te) {
    return g0(f, te);
  }
  function L() {
    const { _bufferIndex: te, _index: ne, line: Z, column: J, offset: ae } = o;
    return { _bufferIndex: te, _index: ne, line: Z, column: J, offset: ae };
  }
  function T(te) {
    ((a[te.line] = te.column), me());
  }
  function O() {
    let te;
    for (; o._index < f.length; ) {
      const ne = f[o._index];
      if (typeof ne == 'string')
        for (
          te = o._index, o._bufferIndex < 0 && (o._bufferIndex = 0);
          o._index === te && o._bufferIndex < ne.length;

        )
          P(ne.charCodeAt(o._bufferIndex));
      else P(ne);
    }
  }
  function P(te) {
    g = g(te);
  }
  function U(te) {
    (ye(te)
      ? (o.line++, (o.column = 1), (o.offset += te === -3 ? 2 : 1), me())
      : te !== -1 && (o.column++, o.offset++),
      o._bufferIndex < 0
        ? o._index++
        : (o._bufferIndex++,
          o._bufferIndex === f[o._index].length &&
            ((o._bufferIndex = -1), o._index++)),
      (m.previous = te));
  }
  function M(te, ne) {
    const Z = ne || {};
    return (
      (Z.type = te),
      (Z.start = L()),
      m.events.push(['enter', Z, m]),
      p.push(Z),
      Z
    );
  }
  function W(te) {
    const ne = p.pop();
    return ((ne.end = L()), m.events.push(['exit', ne, m]), ne);
  }
  function q(te, ne) {
    ue(te, ne.from);
  }
  function D(te, ne) {
    ne.restore();
  }
  function G(te, ne) {
    return Z;
    function Z(J, ae, Ce) {
      let we, Q, oe, k;
      return Array.isArray(J) ? j(J) : 'tokenize' in J ? j([J]) : R(J);
      function R(de) {
        return Re;
        function Re(ke) {
          const Te = ke !== null && de[ke],
            Ve = ke !== null && de.null,
            nn = [
              ...(Array.isArray(Te) ? Te : Te ? [Te] : []),
              ...(Array.isArray(Ve) ? Ve : Ve ? [Ve] : []),
            ];
          return j(nn)(ke);
        }
      }
      function j(de) {
        return ((we = de), (Q = 0), de.length === 0 ? Ce : E(de[Q]));
      }
      function E(de) {
        return Re;
        function Re(ke) {
          return (
            (k = se()),
            (oe = de),
            de.partial || (m.currentConstruct = de),
            de.name && m.parser.constructs.disable.null.includes(de.name)
              ? xe()
              : de.tokenize.call(
                  ne ? Object.assign(Object.create(m), ne) : m,
                  h,
                  pe,
                  xe,
                )(ke)
          );
        }
      }
      function pe(de) {
        return (te(oe, k), ae);
      }
      function xe(de) {
        return (k.restore(), ++Q < we.length ? E(we[Q]) : Ce);
      }
    }
  }
  function ue(te, ne) {
    (te.resolveAll && !s.includes(te) && s.push(te),
      te.resolve &&
        Zt(
          m.events,
          ne,
          m.events.length - ne,
          te.resolve(m.events.slice(ne), m),
        ),
      te.resolveTo && (m.events = te.resolveTo(m.events, m)));
  }
  function se() {
    const te = L(),
      ne = m.previous,
      Z = m.currentConstruct,
      J = m.events.length,
      ae = Array.from(p);
    return { from: J, restore: Ce };
    function Ce() {
      ((o = te),
        (m.previous = ne),
        (m.currentConstruct = Z),
        (m.events.length = J),
        (p = ae),
        me());
    }
  }
  function me() {
    o.line in a &&
      o.column < 2 &&
      ((o.column = a[o.line]), (o.offset += a[o.line] - 1));
  }
}
function g0(t, r) {
  const l = r.start._index,
    o = r.start._bufferIndex,
    a = r.end._index,
    s = r.end._bufferIndex;
  let f;
  if (l === a) f = [t[l].slice(o, s)];
  else {
    if (((f = t.slice(l, a)), o > -1)) {
      const p = f[0];
      typeof p == 'string' ? (f[0] = p.slice(o)) : f.shift();
    }
    s > 0 && f.push(t[a].slice(0, s));
  }
  return f;
}
function y0(t, r) {
  let l = -1;
  const o = [];
  let a;
  for (; ++l < t.length; ) {
    const s = t[l];
    let f;
    if (typeof s == 'string') f = s;
    else
      switch (s) {
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
          f = r ? ' ' : '	';
          break;
        }
        case -1: {
          if (!r && a) continue;
          f = ' ';
          break;
        }
        default:
          f = String.fromCharCode(s);
      }
    ((a = s === -2), o.push(f));
  }
  return o.join('');
}
function v0(t) {
  const o = {
    constructs: _w([h0, ...((t || {}).extensions || [])]),
    content: a(Ow),
    defined: [],
    document: a(Mw),
    flow: a(Zx),
    lazy: {},
    string: a(n0),
    text: a(r0),
  };
  return o;
  function a(s) {
    return f;
    function f(p) {
      return m0(o, s, p);
    }
  }
}
function w0(t) {
  for (; !Rh(t); );
  return t;
}
const dp = /[\0\t\n\r]/g;
function x0() {
  let t = 1,
    r = '',
    l = !0,
    o;
  return a;
  function a(s, f, p) {
    const h = [];
    let m, g, v, x, w;
    for (
      s =
        r +
        (typeof s == 'string'
          ? s.toString()
          : new TextDecoder(f || void 0).decode(s)),
        v = 0,
        r = '',
        l && (s.charCodeAt(0) === 65279 && v++, (l = void 0));
      v < s.length;

    ) {
      if (
        ((dp.lastIndex = v),
        (m = dp.exec(s)),
        (x = m && m.index !== void 0 ? m.index : s.length),
        (w = s.charCodeAt(x)),
        !m)
      ) {
        r = s.slice(v);
        break;
      }
      if (w === 10 && v === x && o) (h.push(-3), (o = void 0));
      else
        switch (
          (o && (h.push(-5), (o = void 0)),
          v < x && (h.push(s.slice(v, x)), (t += x - v)),
          w)
        ) {
          case 0: {
            (h.push(65533), t++);
            break;
          }
          case 9: {
            for (g = Math.ceil(t / 4) * 4, h.push(-2); t++ < g; ) h.push(-1);
            break;
          }
          case 10: {
            (h.push(-4), (t = 1));
            break;
          }
          default:
            ((o = !0), (t = 1));
        }
      v = x + 1;
    }
    return (p && (o && h.push(-5), r && h.push(r), h.push(null)), h);
  }
}
const k0 = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function S0(t) {
  return t.replace(k0, E0);
}
function E0(t, r, l) {
  if (r) return r;
  if (l.charCodeAt(0) === 35) {
    const a = l.charCodeAt(1),
      s = a === 120 || a === 88;
    return Eh(l.slice(s ? 2 : 1), s ? 16 : 10);
  }
  return Rs(l) || t;
}
const Oh = {}.hasOwnProperty;
function C0(t, r, l) {
  return (
    typeof r != 'string' && ((l = r), (r = void 0)),
    _0(l)(
      w0(
        v0(l)
          .document()
          .write(x0()(t, r, !0)),
      ),
    )
  );
}
function _0(t) {
  const r = {
    transforms: [],
    canContainEols: ['emphasis', 'fragment', 'heading', 'paragraph', 'strong'],
    enter: {
      autolink: s(ar),
      autolinkProtocol: se,
      autolinkEmail: se,
      atxHeading: s(Vr),
      blockQuote: s(Ve),
      characterEscape: se,
      characterReference: se,
      codeFenced: s(nn),
      codeFencedFenceInfo: f,
      codeFencedFenceMeta: f,
      codeIndented: s(nn, f),
      codeText: s(qi, f),
      codeTextData: se,
      data: se,
      codeFlowValue: se,
      definition: s(or),
      definitionDestinationString: f,
      definitionLabelString: f,
      definitionTitleString: f,
      emphasis: s(Hr),
      hardBreakEscape: s(Wr),
      hardBreakTrailing: s(Wr),
      htmlFlow: s(ur, f),
      htmlFlowData: se,
      htmlText: s(ur, f),
      htmlTextData: se,
      image: s(Yi),
      label: f,
      link: s(ar),
      listItem: s(vn),
      listItemValue: x,
      listOrdered: s(yn, v),
      listUnordered: s(yn),
      paragraph: s(Qr),
      reference: E,
      referenceString: f,
      resourceDestinationString: f,
      resourceTitleString: f,
      setextHeading: s(Vr),
      strong: s(Xi),
      thematicBreak: s(Ji),
    },
    exit: {
      atxHeading: h(),
      atxHeadingSequence: q,
      autolink: h(),
      autolinkEmail: Te,
      autolinkProtocol: ke,
      blockQuote: h(),
      characterEscapeValue: me,
      characterReferenceMarkerHexadecimal: xe,
      characterReferenceMarkerNumeric: xe,
      characterReferenceValue: de,
      characterReference: Re,
      codeFenced: h(O),
      codeFencedFence: T,
      codeFencedFenceInfo: w,
      codeFencedFenceMeta: L,
      codeFlowValue: me,
      codeIndented: h(P),
      codeText: h(ae),
      codeTextData: me,
      data: me,
      definition: h(),
      definitionDestinationString: W,
      definitionLabelString: U,
      definitionTitleString: M,
      emphasis: h(),
      hardBreakEscape: h(ne),
      hardBreakTrailing: h(ne),
      htmlFlow: h(Z),
      htmlFlowData: me,
      htmlText: h(J),
      htmlTextData: me,
      image: h(we),
      label: oe,
      labelText: Q,
      lineEnding: te,
      link: h(Ce),
      listItem: h(),
      listOrdered: h(),
      listUnordered: h(),
      paragraph: h(),
      referenceString: pe,
      resourceDestinationString: k,
      resourceTitleString: R,
      resource: j,
      setextHeading: h(ue),
      setextHeadingLineSequence: G,
      setextHeadingText: D,
      strong: h(),
      thematicBreak: h(),
    },
  };
  Dh(r, (t || {}).mdastExtensions || []);
  const l = {};
  return o;
  function o(F) {
    let K = { type: 'root', children: [] };
    const he = {
        stack: [K],
        tokenStack: [],
        config: r,
        enter: p,
        exit: m,
        buffer: f,
        resume: g,
        data: l,
      },
      Se = [];
    let _e = -1;
    for (; ++_e < F.length; )
      if (F[_e][1].type === 'listOrdered' || F[_e][1].type === 'listUnordered')
        if (F[_e][0] === 'enter') Se.push(_e);
        else {
          const Je = Se.pop();
          _e = a(F, Je, _e);
        }
    for (_e = -1; ++_e < F.length; ) {
      const Je = r[F[_e][0]];
      Oh.call(Je, F[_e][1].type) &&
        Je[F[_e][1].type].call(
          Object.assign({ sliceSerialize: F[_e][2].sliceSerialize }, he),
          F[_e][1],
        );
    }
    if (he.tokenStack.length > 0) {
      const Je = he.tokenStack[he.tokenStack.length - 1];
      (Je[1] || pp).call(he, void 0, Je[0]);
    }
    for (
      K.position = {
        start: Bn(
          F.length > 0 ? F[0][1].start : { line: 1, column: 1, offset: 0 },
        ),
        end: Bn(
          F.length > 0
            ? F[F.length - 2][1].end
            : { line: 1, column: 1, offset: 0 },
        ),
      },
        _e = -1;
      ++_e < r.transforms.length;

    )
      K = r.transforms[_e](K) || K;
    return K;
  }
  function a(F, K, he) {
    let Se = K - 1,
      _e = -1,
      Je = !1,
      rn,
      Nt,
      wn,
      Un;
    for (; ++Se <= he; ) {
      const Ze = F[Se];
      switch (Ze[1].type) {
        case 'listUnordered':
        case 'listOrdered':
        case 'blockQuote': {
          (Ze[0] === 'enter' ? _e++ : _e--, (Un = void 0));
          break;
        }
        case 'lineEndingBlank': {
          Ze[0] === 'enter' &&
            (rn && !Un && !_e && !wn && (wn = Se), (Un = void 0));
          break;
        }
        case 'linePrefix':
        case 'listItemValue':
        case 'listItemMarker':
        case 'listItemPrefix':
        case 'listItemPrefixWhitespace':
          break;
        default:
          Un = void 0;
      }
      if (
        (!_e && Ze[0] === 'enter' && Ze[1].type === 'listItemPrefix') ||
        (_e === -1 &&
          Ze[0] === 'exit' &&
          (Ze[1].type === 'listUnordered' || Ze[1].type === 'listOrdered'))
      ) {
        if (rn) {
          let Vt = Se;
          for (Nt = void 0; Vt--; ) {
            const wt = F[Vt];
            if (
              wt[1].type === 'lineEnding' ||
              wt[1].type === 'lineEndingBlank'
            ) {
              if (wt[0] === 'exit') continue;
              (Nt && ((F[Nt][1].type = 'lineEndingBlank'), (Je = !0)),
                (wt[1].type = 'lineEnding'),
                (Nt = Vt));
            } else if (
              !(
                wt[1].type === 'linePrefix' ||
                wt[1].type === 'blockQuotePrefix' ||
                wt[1].type === 'blockQuotePrefixWhitespace' ||
                wt[1].type === 'blockQuoteMarker' ||
                wt[1].type === 'listItemIndent'
              )
            )
              break;
          }
          (wn && (!Nt || wn < Nt) && (rn._spread = !0),
            (rn.end = Object.assign({}, Nt ? F[Nt][1].start : Ze[1].end)),
            F.splice(Nt || Se, 0, ['exit', rn, Ze[2]]),
            Se++,
            he++);
        }
        if (Ze[1].type === 'listItemPrefix') {
          const Vt = {
            type: 'listItem',
            _spread: !1,
            start: Object.assign({}, Ze[1].start),
            end: void 0,
          };
          ((rn = Vt),
            F.splice(Se, 0, ['enter', Vt, Ze[2]]),
            Se++,
            he++,
            (wn = void 0),
            (Un = !0));
        }
      }
    }
    return ((F[K][1]._spread = Je), he);
  }
  function s(F, K) {
    return he;
    function he(Se) {
      (p.call(this, F(Se), Se), K && K.call(this, Se));
    }
  }
  function f() {
    this.stack.push({ type: 'fragment', children: [] });
  }
  function p(F, K, he) {
    (this.stack[this.stack.length - 1].children.push(F),
      this.stack.push(F),
      this.tokenStack.push([K, he || void 0]),
      (F.position = { start: Bn(K.start), end: void 0 }));
  }
  function h(F) {
    return K;
    function K(he) {
      (F && F.call(this, he), m.call(this, he));
    }
  }
  function m(F, K) {
    const he = this.stack.pop(),
      Se = this.tokenStack.pop();
    if (Se)
      Se[0].type !== F.type &&
        (K ? K.call(this, F, Se[0]) : (Se[1] || pp).call(this, F, Se[0]));
    else
      throw new Error(
        'Cannot close `' +
          F.type +
          '` (' +
          Ai({ start: F.start, end: F.end }) +
          '): it’s not open',
      );
    he.position.end = Bn(F.end);
  }
  function g() {
    return Ew(this.stack.pop());
  }
  function v() {
    this.data.expectingFirstListItemValue = !0;
  }
  function x(F) {
    if (this.data.expectingFirstListItemValue) {
      const K = this.stack[this.stack.length - 2];
      ((K.start = Number.parseInt(this.sliceSerialize(F), 10)),
        (this.data.expectingFirstListItemValue = void 0));
    }
  }
  function w() {
    const F = this.resume(),
      K = this.stack[this.stack.length - 1];
    K.lang = F;
  }
  function L() {
    const F = this.resume(),
      K = this.stack[this.stack.length - 1];
    K.meta = F;
  }
  function T() {
    this.data.flowCodeInside ||
      (this.buffer(), (this.data.flowCodeInside = !0));
  }
  function O() {
    const F = this.resume(),
      K = this.stack[this.stack.length - 1];
    ((K.value = F.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, '')),
      (this.data.flowCodeInside = void 0));
  }
  function P() {
    const F = this.resume(),
      K = this.stack[this.stack.length - 1];
    K.value = F.replace(/(\r?\n|\r)$/g, '');
  }
  function U(F) {
    const K = this.resume(),
      he = this.stack[this.stack.length - 1];
    ((he.label = K),
      (he.identifier = Fr(this.sliceSerialize(F)).toLowerCase()));
  }
  function M() {
    const F = this.resume(),
      K = this.stack[this.stack.length - 1];
    K.title = F;
  }
  function W() {
    const F = this.resume(),
      K = this.stack[this.stack.length - 1];
    K.url = F;
  }
  function q(F) {
    const K = this.stack[this.stack.length - 1];
    if (!K.depth) {
      const he = this.sliceSerialize(F).length;
      K.depth = he;
    }
  }
  function D() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function G(F) {
    const K = this.stack[this.stack.length - 1];
    K.depth = this.sliceSerialize(F).codePointAt(0) === 61 ? 1 : 2;
  }
  function ue() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function se(F) {
    const he = this.stack[this.stack.length - 1].children;
    let Se = he[he.length - 1];
    ((!Se || Se.type !== 'text') &&
      ((Se = Gi()),
      (Se.position = { start: Bn(F.start), end: void 0 }),
      he.push(Se)),
      this.stack.push(Se));
  }
  function me(F) {
    const K = this.stack.pop();
    ((K.value += this.sliceSerialize(F)), (K.position.end = Bn(F.end)));
  }
  function te(F) {
    const K = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const he = K.children[K.children.length - 1];
      ((he.position.end = Bn(F.end)), (this.data.atHardBreak = void 0));
      return;
    }
    !this.data.setextHeadingSlurpLineEnding &&
      r.canContainEols.includes(K.type) &&
      (se.call(this, F), me.call(this, F));
  }
  function ne() {
    this.data.atHardBreak = !0;
  }
  function Z() {
    const F = this.resume(),
      K = this.stack[this.stack.length - 1];
    K.value = F;
  }
  function J() {
    const F = this.resume(),
      K = this.stack[this.stack.length - 1];
    K.value = F;
  }
  function ae() {
    const F = this.resume(),
      K = this.stack[this.stack.length - 1];
    K.value = F;
  }
  function Ce() {
    const F = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const K = this.data.referenceType || 'shortcut';
      ((F.type += 'Reference'),
        (F.referenceType = K),
        delete F.url,
        delete F.title);
    } else (delete F.identifier, delete F.label);
    this.data.referenceType = void 0;
  }
  function we() {
    const F = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const K = this.data.referenceType || 'shortcut';
      ((F.type += 'Reference'),
        (F.referenceType = K),
        delete F.url,
        delete F.title);
    } else (delete F.identifier, delete F.label);
    this.data.referenceType = void 0;
  }
  function Q(F) {
    const K = this.sliceSerialize(F),
      he = this.stack[this.stack.length - 2];
    ((he.label = S0(K)), (he.identifier = Fr(K).toLowerCase()));
  }
  function oe() {
    const F = this.stack[this.stack.length - 1],
      K = this.resume(),
      he = this.stack[this.stack.length - 1];
    if (((this.data.inReference = !0), he.type === 'link')) {
      const Se = F.children;
      he.children = Se;
    } else he.alt = K;
  }
  function k() {
    const F = this.resume(),
      K = this.stack[this.stack.length - 1];
    K.url = F;
  }
  function R() {
    const F = this.resume(),
      K = this.stack[this.stack.length - 1];
    K.title = F;
  }
  function j() {
    this.data.inReference = void 0;
  }
  function E() {
    this.data.referenceType = 'collapsed';
  }
  function pe(F) {
    const K = this.resume(),
      he = this.stack[this.stack.length - 1];
    ((he.label = K),
      (he.identifier = Fr(this.sliceSerialize(F)).toLowerCase()),
      (this.data.referenceType = 'full'));
  }
  function xe(F) {
    this.data.characterReferenceType = F.type;
  }
  function de(F) {
    const K = this.sliceSerialize(F),
      he = this.data.characterReferenceType;
    let Se;
    he
      ? ((Se = Eh(K, he === 'characterReferenceMarkerNumeric' ? 10 : 16)),
        (this.data.characterReferenceType = void 0))
      : (Se = Rs(K));
    const _e = this.stack[this.stack.length - 1];
    _e.value += Se;
  }
  function Re(F) {
    const K = this.stack.pop();
    K.position.end = Bn(F.end);
  }
  function ke(F) {
    me.call(this, F);
    const K = this.stack[this.stack.length - 1];
    K.url = this.sliceSerialize(F);
  }
  function Te(F) {
    me.call(this, F);
    const K = this.stack[this.stack.length - 1];
    K.url = 'mailto:' + this.sliceSerialize(F);
  }
  function Ve() {
    return { type: 'blockquote', children: [] };
  }
  function nn() {
    return { type: 'code', lang: null, meta: null, value: '' };
  }
  function qi() {
    return { type: 'inlineCode', value: '' };
  }
  function or() {
    return {
      type: 'definition',
      identifier: '',
      label: null,
      title: null,
      url: '',
    };
  }
  function Hr() {
    return { type: 'emphasis', children: [] };
  }
  function Vr() {
    return { type: 'heading', depth: 0, children: [] };
  }
  function Wr() {
    return { type: 'break' };
  }
  function ur() {
    return { type: 'html', value: '' };
  }
  function Yi() {
    return { type: 'image', title: null, url: '', alt: null };
  }
  function ar() {
    return { type: 'link', title: null, url: '', children: [] };
  }
  function yn(F) {
    return {
      type: 'list',
      ordered: F.type === 'listOrdered',
      start: null,
      spread: F._spread,
      children: [],
    };
  }
  function vn(F) {
    return { type: 'listItem', spread: F._spread, checked: null, children: [] };
  }
  function Qr() {
    return { type: 'paragraph', children: [] };
  }
  function Xi() {
    return { type: 'strong', children: [] };
  }
  function Gi() {
    return { type: 'text', value: '' };
  }
  function Ji() {
    return { type: 'thematicBreak' };
  }
}
function Bn(t) {
  return { line: t.line, column: t.column, offset: t.offset };
}
function Dh(t, r) {
  let l = -1;
  for (; ++l < r.length; ) {
    const o = r[l];
    Array.isArray(o) ? Dh(t, o) : P0(t, o);
  }
}
function P0(t, r) {
  let l;
  for (l in r)
    if (Oh.call(r, l))
      switch (l) {
        case 'canContainEols': {
          const o = r[l];
          o && t[l].push(...o);
          break;
        }
        case 'transforms': {
          const o = r[l];
          o && t[l].push(...o);
          break;
        }
        case 'enter':
        case 'exit': {
          const o = r[l];
          o && Object.assign(t[l], o);
          break;
        }
      }
}
function pp(t, r) {
  throw t
    ? new Error(
        'Cannot close `' +
          t.type +
          '` (' +
          Ai({ start: t.start, end: t.end }) +
          '): a different token (`' +
          r.type +
          '`, ' +
          Ai({ start: r.start, end: r.end }) +
          ') is open',
      )
    : new Error(
        'Cannot close document, a token (`' +
          r.type +
          '`, ' +
          Ai({ start: r.start, end: r.end }) +
          ') is still open',
      );
}
function R0(t) {
  const r = this;
  r.parser = l;
  function l(o) {
    return C0(o, {
      ...r.data('settings'),
      ...t,
      extensions: r.data('micromarkExtensions') || [],
      mdastExtensions: r.data('fromMarkdownExtensions') || [],
    });
  }
}
function N0(t, r) {
  const l = {
    type: 'element',
    tagName: 'blockquote',
    properties: {},
    children: t.wrap(t.all(r), !0),
  };
  return (t.patch(r, l), t.applyData(r, l));
}
function T0(t, r) {
  const l = { type: 'element', tagName: 'br', properties: {}, children: [] };
  return (
    t.patch(r, l),
    [
      t.applyData(r, l),
      {
        type: 'text',
        value: `
`,
      },
    ]
  );
}
function I0(t, r) {
  const l = r.value
      ? r.value +
        `
`
      : '',
    o = {};
  r.lang && (o.className = ['language-' + r.lang]);
  let a = {
    type: 'element',
    tagName: 'code',
    properties: o,
    children: [{ type: 'text', value: l }],
  };
  return (
    r.meta && (a.data = { meta: r.meta }),
    t.patch(r, a),
    (a = t.applyData(r, a)),
    (a = { type: 'element', tagName: 'pre', properties: {}, children: [a] }),
    t.patch(r, a),
    a
  );
}
function L0(t, r) {
  const l = {
    type: 'element',
    tagName: 'del',
    properties: {},
    children: t.all(r),
  };
  return (t.patch(r, l), t.applyData(r, l));
}
function z0(t, r) {
  const l = {
    type: 'element',
    tagName: 'em',
    properties: {},
    children: t.all(r),
  };
  return (t.patch(r, l), t.applyData(r, l));
}
function O0(t, r) {
  const l =
      typeof t.options.clobberPrefix == 'string'
        ? t.options.clobberPrefix
        : 'user-content-',
    o = String(r.identifier).toUpperCase(),
    a = $r(o.toLowerCase()),
    s = t.footnoteOrder.indexOf(o);
  let f,
    p = t.footnoteCounts.get(o);
  (p === void 0
    ? ((p = 0), t.footnoteOrder.push(o), (f = t.footnoteOrder.length))
    : (f = s + 1),
    (p += 1),
    t.footnoteCounts.set(o, p));
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
  t.patch(r, h);
  const m = { type: 'element', tagName: 'sup', properties: {}, children: [h] };
  return (t.patch(r, m), t.applyData(r, m));
}
function D0(t, r) {
  const l = {
    type: 'element',
    tagName: 'h' + r.depth,
    properties: {},
    children: t.all(r),
  };
  return (t.patch(r, l), t.applyData(r, l));
}
function M0(t, r) {
  if (t.options.allowDangerousHtml) {
    const l = { type: 'raw', value: r.value };
    return (t.patch(r, l), t.applyData(r, l));
  }
}
function Mh(t, r) {
  const l = r.referenceType;
  let o = ']';
  if (
    (l === 'collapsed'
      ? (o += '[]')
      : l === 'full' && (o += '[' + (r.label || r.identifier) + ']'),
    r.type === 'imageReference')
  )
    return [{ type: 'text', value: '![' + r.alt + o }];
  const a = t.all(r),
    s = a[0];
  s && s.type === 'text'
    ? (s.value = '[' + s.value)
    : a.unshift({ type: 'text', value: '[' });
  const f = a[a.length - 1];
  return (
    f && f.type === 'text'
      ? (f.value += o)
      : a.push({ type: 'text', value: o }),
    a
  );
}
function A0(t, r) {
  const l = String(r.identifier).toUpperCase(),
    o = t.definitionById.get(l);
  if (!o) return Mh(t, r);
  const a = { src: $r(o.url || ''), alt: r.alt };
  o.title !== null && o.title !== void 0 && (a.title = o.title);
  const s = { type: 'element', tagName: 'img', properties: a, children: [] };
  return (t.patch(r, s), t.applyData(r, s));
}
function F0(t, r) {
  const l = { src: $r(r.url) };
  (r.alt !== null && r.alt !== void 0 && (l.alt = r.alt),
    r.title !== null && r.title !== void 0 && (l.title = r.title));
  const o = { type: 'element', tagName: 'img', properties: l, children: [] };
  return (t.patch(r, o), t.applyData(r, o));
}
function j0(t, r) {
  const l = { type: 'text', value: r.value.replace(/\r?\n|\r/g, ' ') };
  t.patch(r, l);
  const o = { type: 'element', tagName: 'code', properties: {}, children: [l] };
  return (t.patch(r, o), t.applyData(r, o));
}
function B0(t, r) {
  const l = String(r.identifier).toUpperCase(),
    o = t.definitionById.get(l);
  if (!o) return Mh(t, r);
  const a = { href: $r(o.url || '') };
  o.title !== null && o.title !== void 0 && (a.title = o.title);
  const s = {
    type: 'element',
    tagName: 'a',
    properties: a,
    children: t.all(r),
  };
  return (t.patch(r, s), t.applyData(r, s));
}
function b0(t, r) {
  const l = { href: $r(r.url) };
  r.title !== null && r.title !== void 0 && (l.title = r.title);
  const o = {
    type: 'element',
    tagName: 'a',
    properties: l,
    children: t.all(r),
  };
  return (t.patch(r, o), t.applyData(r, o));
}
function U0(t, r, l) {
  const o = t.all(r),
    a = l ? $0(l) : Ah(r),
    s = {},
    f = [];
  if (typeof r.checked == 'boolean') {
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
        properties: { type: 'checkbox', checked: r.checked, disabled: !0 },
        children: [],
      }),
      (s.className = ['task-list-item']));
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
  const m = { type: 'element', tagName: 'li', properties: s, children: f };
  return (t.patch(r, m), t.applyData(r, m));
}
function $0(t) {
  let r = !1;
  if (t.type === 'list') {
    r = t.spread || !1;
    const l = t.children;
    let o = -1;
    for (; !r && ++o < l.length; ) r = Ah(l[o]);
  }
  return r;
}
function Ah(t) {
  const r = t.spread;
  return r ?? t.children.length > 1;
}
function H0(t, r) {
  const l = {},
    o = t.all(r);
  let a = -1;
  for (
    typeof r.start == 'number' && r.start !== 1 && (l.start = r.start);
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
  const s = {
    type: 'element',
    tagName: r.ordered ? 'ol' : 'ul',
    properties: l,
    children: t.wrap(o, !0),
  };
  return (t.patch(r, s), t.applyData(r, s));
}
function V0(t, r) {
  const l = {
    type: 'element',
    tagName: 'p',
    properties: {},
    children: t.all(r),
  };
  return (t.patch(r, l), t.applyData(r, l));
}
function W0(t, r) {
  const l = { type: 'root', children: t.wrap(t.all(r)) };
  return (t.patch(r, l), t.applyData(r, l));
}
function Q0(t, r) {
  const l = {
    type: 'element',
    tagName: 'strong',
    properties: {},
    children: t.all(r),
  };
  return (t.patch(r, l), t.applyData(r, l));
}
function K0(t, r) {
  const l = t.all(r),
    o = l.shift(),
    a = [];
  if (o) {
    const f = {
      type: 'element',
      tagName: 'thead',
      properties: {},
      children: t.wrap([o], !0),
    };
    (t.patch(r.children[0], f), a.push(f));
  }
  if (l.length > 0) {
    const f = {
        type: 'element',
        tagName: 'tbody',
        properties: {},
        children: t.wrap(l, !0),
      },
      p = Es(r.children[1]),
      h = gh(r.children[r.children.length - 1]);
    (p && h && (f.position = { start: p, end: h }), a.push(f));
  }
  const s = {
    type: 'element',
    tagName: 'table',
    properties: {},
    children: t.wrap(a, !0),
  };
  return (t.patch(r, s), t.applyData(r, s));
}
function q0(t, r, l) {
  const o = l ? l.children : void 0,
    s = (o ? o.indexOf(r) : 1) === 0 ? 'th' : 'td',
    f = l && l.type === 'table' ? l.align : void 0,
    p = f ? f.length : r.children.length;
  let h = -1;
  const m = [];
  for (; ++h < p; ) {
    const v = r.children[h],
      x = {},
      w = f ? f[h] : void 0;
    w && (x.align = w);
    let L = { type: 'element', tagName: s, properties: x, children: [] };
    (v && ((L.children = t.all(v)), t.patch(v, L), (L = t.applyData(v, L))),
      m.push(L));
  }
  const g = {
    type: 'element',
    tagName: 'tr',
    properties: {},
    children: t.wrap(m, !0),
  };
  return (t.patch(r, g), t.applyData(r, g));
}
function Y0(t, r) {
  const l = {
    type: 'element',
    tagName: 'td',
    properties: {},
    children: t.all(r),
  };
  return (t.patch(r, l), t.applyData(r, l));
}
const hp = 9,
  mp = 32;
function X0(t) {
  const r = String(t),
    l = /\r?\n|\r/g;
  let o = l.exec(r),
    a = 0;
  const s = [];
  for (; o; )
    (s.push(gp(r.slice(a, o.index), a > 0, !0), o[0]),
      (a = o.index + o[0].length),
      (o = l.exec(r)));
  return (s.push(gp(r.slice(a), a > 0, !1)), s.join(''));
}
function gp(t, r, l) {
  let o = 0,
    a = t.length;
  if (r) {
    let s = t.codePointAt(o);
    for (; s === hp || s === mp; ) (o++, (s = t.codePointAt(o)));
  }
  if (l) {
    let s = t.codePointAt(a - 1);
    for (; s === hp || s === mp; ) (a--, (s = t.codePointAt(a - 1)));
  }
  return a > o ? t.slice(o, a) : '';
}
function G0(t, r) {
  const l = { type: 'text', value: X0(String(r.value)) };
  return (t.patch(r, l), t.applyData(r, l));
}
function J0(t, r) {
  const l = { type: 'element', tagName: 'hr', properties: {}, children: [] };
  return (t.patch(r, l), t.applyData(r, l));
}
const Z0 = {
  blockquote: N0,
  break: T0,
  code: I0,
  delete: L0,
  emphasis: z0,
  footnoteReference: O0,
  heading: D0,
  html: M0,
  imageReference: A0,
  image: F0,
  inlineCode: j0,
  linkReference: B0,
  link: b0,
  listItem: U0,
  list: H0,
  paragraph: V0,
  root: W0,
  strong: Q0,
  table: K0,
  tableCell: Y0,
  tableRow: q0,
  text: G0,
  thematicBreak: J0,
  toml: co,
  yaml: co,
  definition: co,
  footnoteDefinition: co,
};
function co() {}
const Fh = -1,
  Ao = 0,
  ji = 1,
  Co = 2,
  Is = 3,
  Ls = 4,
  zs = 5,
  Os = 6,
  jh = 7,
  Bh = 8,
  yp = typeof self == 'object' ? self : globalThis,
  ek = (t, r) => {
    const l = (a, s) => (t.set(s, a), a),
      o = (a) => {
        if (t.has(a)) return t.get(a);
        const [s, f] = r[a];
        switch (s) {
          case Ao:
          case Fh:
            return l(f, a);
          case ji: {
            const p = l([], a);
            for (const h of f) p.push(o(h));
            return p;
          }
          case Co: {
            const p = l({}, a);
            for (const [h, m] of f) p[o(h)] = o(m);
            return p;
          }
          case Is:
            return l(new Date(f), a);
          case Ls: {
            const { source: p, flags: h } = f;
            return l(new RegExp(p, h), a);
          }
          case zs: {
            const p = l(new Map(), a);
            for (const [h, m] of f) p.set(o(h), o(m));
            return p;
          }
          case Os: {
            const p = l(new Set(), a);
            for (const h of f) p.add(o(h));
            return p;
          }
          case jh: {
            const { name: p, message: h } = f;
            return l(new yp[p](h), a);
          }
          case Bh:
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
        return l(new yp[s](f), a);
      };
    return o;
  },
  vp = (t) => ek(new Map(), t)(0),
  Dr = '',
  { toString: tk } = {},
  { keys: nk } = Object,
  Di = (t) => {
    const r = typeof t;
    if (r !== 'object' || !t) return [Ao, r];
    const l = tk.call(t).slice(8, -1);
    switch (l) {
      case 'Array':
        return [ji, Dr];
      case 'Object':
        return [Co, Dr];
      case 'Date':
        return [Is, Dr];
      case 'RegExp':
        return [Ls, Dr];
      case 'Map':
        return [zs, Dr];
      case 'Set':
        return [Os, Dr];
      case 'DataView':
        return [ji, l];
    }
    return l.includes('Array')
      ? [ji, l]
      : l.includes('Error')
        ? [jh, l]
        : [Co, l];
  },
  fo = ([t, r]) => t === Ao && (r === 'function' || r === 'symbol'),
  rk = (t, r, l, o) => {
    const a = (f, p) => {
        const h = o.push(f) - 1;
        return (l.set(p, h), h);
      },
      s = (f) => {
        if (l.has(f)) return l.get(f);
        let [p, h] = Di(f);
        switch (p) {
          case Ao: {
            let g = f;
            switch (h) {
              case 'bigint':
                ((p = Bh), (g = f.toString()));
                break;
              case 'function':
              case 'symbol':
                if (t) throw new TypeError('unable to serialize ' + h);
                g = null;
                break;
              case 'undefined':
                return a([Fh], f);
            }
            return a([p, g], f);
          }
          case ji: {
            if (h) {
              let x = f;
              return (
                h === 'DataView'
                  ? (x = new Uint8Array(f.buffer))
                  : h === 'ArrayBuffer' && (x = new Uint8Array(f)),
                a([h, [...x]], f)
              );
            }
            const g = [],
              v = a([p, g], f);
            for (const x of f) g.push(s(x));
            return v;
          }
          case Co: {
            if (h)
              switch (h) {
                case 'BigInt':
                  return a([h, f.toString()], f);
                case 'Boolean':
                case 'Number':
                case 'String':
                  return a([h, f.valueOf()], f);
              }
            if (r && 'toJSON' in f) return s(f.toJSON());
            const g = [],
              v = a([p, g], f);
            for (const x of nk(f))
              (t || !fo(Di(f[x]))) && g.push([s(x), s(f[x])]);
            return v;
          }
          case Is:
            return a([p, f.toISOString()], f);
          case Ls: {
            const { source: g, flags: v } = f;
            return a([p, { source: g, flags: v }], f);
          }
          case zs: {
            const g = [],
              v = a([p, g], f);
            for (const [x, w] of f)
              (t || !(fo(Di(x)) || fo(Di(w)))) && g.push([s(x), s(w)]);
            return v;
          }
          case Os: {
            const g = [],
              v = a([p, g], f);
            for (const x of f) (t || !fo(Di(x))) && g.push(s(x));
            return v;
          }
        }
        const { message: m } = f;
        return a([p, { name: h, message: m }], f);
      };
    return s;
  },
  wp = (t, { json: r, lossy: l } = {}) => {
    const o = [];
    return (rk(!(r || l), !!r, new Map(), o)(t), o);
  },
  _o =
    typeof structuredClone == 'function'
      ? (t, r) =>
          r && ('json' in r || 'lossy' in r) ? vp(wp(t, r)) : structuredClone(t)
      : (t, r) => vp(wp(t, r));
function ik(t, r) {
  const l = [{ type: 'text', value: '↩' }];
  return (
    r > 1 &&
      l.push({
        type: 'element',
        tagName: 'sup',
        properties: {},
        children: [{ type: 'text', value: String(r) }],
      }),
    l
  );
}
function lk(t, r) {
  return 'Back to reference ' + (t + 1) + (r > 1 ? '-' + r : '');
}
function ok(t) {
  const r =
      typeof t.options.clobberPrefix == 'string'
        ? t.options.clobberPrefix
        : 'user-content-',
    l = t.options.footnoteBackContent || ik,
    o = t.options.footnoteBackLabel || lk,
    a = t.options.footnoteLabel || 'Footnotes',
    s = t.options.footnoteLabelTagName || 'h2',
    f = t.options.footnoteLabelProperties || { className: ['sr-only'] },
    p = [];
  let h = -1;
  for (; ++h < t.footnoteOrder.length; ) {
    const m = t.footnoteById.get(t.footnoteOrder[h]);
    if (!m) continue;
    const g = t.all(m),
      v = String(m.identifier).toUpperCase(),
      x = $r(v.toLowerCase());
    let w = 0;
    const L = [],
      T = t.footnoteCounts.get(v);
    for (; T !== void 0 && ++w <= T; ) {
      L.length > 0 && L.push({ type: 'text', value: ' ' });
      let U = typeof l == 'string' ? l : l(h, w);
      (typeof U == 'string' && (U = { type: 'text', value: U }),
        L.push({
          type: 'element',
          tagName: 'a',
          properties: {
            href: '#' + r + 'fnref-' + x + (w > 1 ? '-' + w : ''),
            dataFootnoteBackref: '',
            ariaLabel: typeof o == 'string' ? o : o(h, w),
            className: ['data-footnote-backref'],
          },
          children: Array.isArray(U) ? U : [U],
        }));
    }
    const O = g[g.length - 1];
    if (O && O.type === 'element' && O.tagName === 'p') {
      const U = O.children[O.children.length - 1];
      (U && U.type === 'text'
        ? (U.value += ' ')
        : O.children.push({ type: 'text', value: ' ' }),
        O.children.push(...L));
    } else g.push(...L);
    const P = {
      type: 'element',
      tagName: 'li',
      properties: { id: r + 'fn-' + x },
      children: t.wrap(g, !0),
    };
    (t.patch(m, P), p.push(P));
  }
  if (p.length !== 0)
    return {
      type: 'element',
      tagName: 'section',
      properties: { dataFootnotes: !0, className: ['footnotes'] },
      children: [
        {
          type: 'element',
          tagName: s,
          properties: { ..._o(f), id: 'footnote-label' },
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
          children: t.wrap(p, !0),
        },
        {
          type: 'text',
          value: `
`,
        },
      ],
    };
}
const bh = function (t) {
  if (t == null) return ck;
  if (typeof t == 'function') return Fo(t);
  if (typeof t == 'object') return Array.isArray(t) ? uk(t) : ak(t);
  if (typeof t == 'string') return sk(t);
  throw new Error('Expected function, string, or object as test');
};
function uk(t) {
  const r = [];
  let l = -1;
  for (; ++l < t.length; ) r[l] = bh(t[l]);
  return Fo(o);
  function o(...a) {
    let s = -1;
    for (; ++s < r.length; ) if (r[s].apply(this, a)) return !0;
    return !1;
  }
}
function ak(t) {
  const r = t;
  return Fo(l);
  function l(o) {
    const a = o;
    let s;
    for (s in t) if (a[s] !== r[s]) return !1;
    return !0;
  }
}
function sk(t) {
  return Fo(r);
  function r(l) {
    return l && l.type === t;
  }
}
function Fo(t) {
  return r;
  function r(l, o, a) {
    return !!(
      fk(l) && t.call(this, l, typeof o == 'number' ? o : void 0, a || void 0)
    );
  }
}
function ck() {
  return !0;
}
function fk(t) {
  return t !== null && typeof t == 'object' && 'type' in t;
}
const Uh = [],
  dk = !0,
  xp = !1,
  pk = 'skip';
function hk(t, r, l, o) {
  let a;
  typeof r == 'function' && typeof l != 'function'
    ? ((o = l), (l = r))
    : (a = r);
  const s = bh(a),
    f = o ? -1 : 1;
  p(t, void 0, [])();
  function p(h, m, g) {
    const v = h && typeof h == 'object' ? h : {};
    if (typeof v.type == 'string') {
      const w =
        typeof v.tagName == 'string'
          ? v.tagName
          : typeof v.name == 'string'
            ? v.name
            : void 0;
      Object.defineProperty(x, 'name', {
        value: 'node (' + (h.type + (w ? '<' + w + '>' : '')) + ')',
      });
    }
    return x;
    function x() {
      let w = Uh,
        L,
        T,
        O;
      if (
        (!r || s(h, m, g[g.length - 1] || void 0)) &&
        ((w = mk(l(h, g))), w[0] === xp)
      )
        return w;
      if ('children' in h && h.children) {
        const P = h;
        if (P.children && w[0] !== pk)
          for (
            T = (o ? P.children.length : -1) + f, O = g.concat(P);
            T > -1 && T < P.children.length;

          ) {
            const U = P.children[T];
            if (((L = p(U, T, O)()), L[0] === xp)) return L;
            T = typeof L[1] == 'number' ? L[1] : T + f;
          }
      }
      return w;
    }
  }
}
function mk(t) {
  return Array.isArray(t)
    ? t
    : typeof t == 'number'
      ? [dk, t]
      : t == null
        ? Uh
        : [t];
}
function $h(t, r, l, o) {
  let a, s, f;
  (typeof r == 'function' && typeof l != 'function'
    ? ((s = void 0), (f = r), (a = l))
    : ((s = r), (f = l), (a = o)),
    hk(t, s, p, a));
  function p(h, m) {
    const g = m[m.length - 1],
      v = g ? g.children.indexOf(h) : void 0;
    return f(h, v, g);
  }
}
const ss = {}.hasOwnProperty,
  gk = {};
function yk(t, r) {
  const l = r || gk,
    o = new Map(),
    a = new Map(),
    s = new Map(),
    f = { ...Z0, ...l.handlers },
    p = {
      all: m,
      applyData: wk,
      definitionById: o,
      footnoteById: a,
      footnoteCounts: s,
      footnoteOrder: [],
      handlers: f,
      one: h,
      options: l,
      patch: vk,
      wrap: kk,
    };
  return (
    $h(t, function (g) {
      if (g.type === 'definition' || g.type === 'footnoteDefinition') {
        const v = g.type === 'definition' ? o : a,
          x = String(g.identifier).toUpperCase();
        v.has(x) || v.set(x, g);
      }
    }),
    p
  );
  function h(g, v) {
    const x = g.type,
      w = p.handlers[x];
    if (ss.call(p.handlers, x) && w) return w(p, g, v);
    if (p.options.passThrough && p.options.passThrough.includes(x)) {
      if ('children' in g) {
        const { children: T, ...O } = g,
          P = _o(O);
        return ((P.children = p.all(g)), P);
      }
      return _o(g);
    }
    return (p.options.unknownHandler || xk)(p, g, v);
  }
  function m(g) {
    const v = [];
    if ('children' in g) {
      const x = g.children;
      let w = -1;
      for (; ++w < x.length; ) {
        const L = p.one(x[w], g);
        if (L) {
          if (
            w &&
            x[w - 1].type === 'break' &&
            (!Array.isArray(L) && L.type === 'text' && (L.value = kp(L.value)),
            !Array.isArray(L) && L.type === 'element')
          ) {
            const T = L.children[0];
            T && T.type === 'text' && (T.value = kp(T.value));
          }
          Array.isArray(L) ? v.push(...L) : v.push(L);
        }
      }
    }
    return v;
  }
}
function vk(t, r) {
  t.position && (r.position = tw(t));
}
function wk(t, r) {
  let l = r;
  if (t && t.data) {
    const o = t.data.hName,
      a = t.data.hChildren,
      s = t.data.hProperties;
    if (typeof o == 'string')
      if (l.type === 'element') l.tagName = o;
      else {
        const f = 'children' in l ? l.children : [l];
        l = { type: 'element', tagName: o, properties: {}, children: f };
      }
    (l.type === 'element' && s && Object.assign(l.properties, _o(s)),
      'children' in l &&
        l.children &&
        a !== null &&
        a !== void 0 &&
        (l.children = a));
  }
  return l;
}
function xk(t, r) {
  const l = r.data || {},
    o =
      'value' in r && !(ss.call(l, 'hProperties') || ss.call(l, 'hChildren'))
        ? { type: 'text', value: r.value }
        : {
            type: 'element',
            tagName: 'div',
            properties: {},
            children: t.all(r),
          };
  return (t.patch(r, o), t.applyData(r, o));
}
function kk(t, r) {
  const l = [];
  let o = -1;
  for (
    r &&
    l.push({
      type: 'text',
      value: `
`,
    });
    ++o < t.length;

  )
    (o &&
      l.push({
        type: 'text',
        value: `
`,
      }),
      l.push(t[o]));
  return (
    r &&
      t.length > 0 &&
      l.push({
        type: 'text',
        value: `
`,
      }),
    l
  );
}
function kp(t) {
  let r = 0,
    l = t.charCodeAt(r);
  for (; l === 9 || l === 32; ) (r++, (l = t.charCodeAt(r)));
  return t.slice(r);
}
function Sp(t, r) {
  const l = yk(t, r),
    o = l.one(t, void 0),
    a = ok(l),
    s = Array.isArray(o)
      ? { type: 'root', children: o }
      : o || { type: 'root', children: [] };
  return (
    a &&
      s.children.push(
        {
          type: 'text',
          value: `
`,
        },
        a,
      ),
    s
  );
}
function Sk(t, r) {
  return t && 'run' in t
    ? async function (l, o) {
        const a = Sp(l, { file: o, ...r });
        await t.run(a, o);
      }
    : function (l, o) {
        return Sp(l, { file: o, ...(t || r) });
      };
}
function Ep(t) {
  if (t) throw t;
}
var ba, Cp;
function Ek() {
  if (Cp) return ba;
  Cp = 1;
  var t = Object.prototype.hasOwnProperty,
    r = Object.prototype.toString,
    l = Object.defineProperty,
    o = Object.getOwnPropertyDescriptor,
    a = function (m) {
      return typeof Array.isArray == 'function'
        ? Array.isArray(m)
        : r.call(m) === '[object Array]';
    },
    s = function (m) {
      if (!m || r.call(m) !== '[object Object]') return !1;
      var g = t.call(m, 'constructor'),
        v =
          m.constructor &&
          m.constructor.prototype &&
          t.call(m.constructor.prototype, 'isPrototypeOf');
      if (m.constructor && !g && !v) return !1;
      var x;
      for (x in m);
      return typeof x > 'u' || t.call(m, x);
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
        if (t.call(m, g)) {
          if (o) return o(m, g).value;
        } else return;
      return m[g];
    };
  return (
    (ba = function h() {
      var m,
        g,
        v,
        x,
        w,
        L,
        T = arguments[0],
        O = 1,
        P = arguments.length,
        U = !1;
      for (
        typeof T == 'boolean' && ((U = T), (T = arguments[1] || {}), (O = 2)),
          (T == null || (typeof T != 'object' && typeof T != 'function')) &&
            (T = {});
        O < P;
        ++O
      )
        if (((m = arguments[O]), m != null))
          for (g in m)
            ((v = p(T, g)),
              (x = p(m, g)),
              T !== x &&
                (U && x && (s(x) || (w = a(x)))
                  ? (w
                      ? ((w = !1), (L = v && a(v) ? v : []))
                      : (L = v && s(v) ? v : {}),
                    f(T, { name: g, newValue: h(U, L, x) }))
                  : typeof x < 'u' && f(T, { name: g, newValue: x })));
      return T;
    }),
    ba
  );
}
var Ck = Ek();
const Ua = Po(Ck);
function cs(t) {
  if (typeof t != 'object' || t === null) return !1;
  const r = Object.getPrototypeOf(t);
  return (
    (r === null ||
      r === Object.prototype ||
      Object.getPrototypeOf(r) === null) &&
    !(Symbol.toStringTag in t) &&
    !(Symbol.iterator in t)
  );
}
function _k() {
  const t = [],
    r = { run: l, use: o };
  return r;
  function l(...a) {
    let s = -1;
    const f = a.pop();
    if (typeof f != 'function')
      throw new TypeError('Expected function as last argument, not ' + f);
    p(null, ...a);
    function p(h, ...m) {
      const g = t[++s];
      let v = -1;
      if (h) {
        f(h);
        return;
      }
      for (; ++v < a.length; )
        (m[v] === null || m[v] === void 0) && (m[v] = a[v]);
      ((a = m), g ? Pk(g, p)(...m) : f(null, ...m));
    }
  }
  function o(a) {
    if (typeof a != 'function')
      throw new TypeError('Expected `middelware` to be a function, not ' + a);
    return (t.push(a), r);
  }
}
function Pk(t, r) {
  let l;
  return o;
  function o(...f) {
    const p = t.length > f.length;
    let h;
    p && f.push(a);
    try {
      h = t.apply(this, f);
    } catch (m) {
      const g = m;
      if (p && l) throw g;
      return a(g);
    }
    p ||
      (h && h.then && typeof h.then == 'function'
        ? h.then(s, a)
        : h instanceof Error
          ? a(h)
          : s(h));
  }
  function a(f, ...p) {
    l || ((l = !0), r(f, ...p));
  }
  function s(f) {
    a(null, f);
  }
}
const Xt = { basename: Rk, dirname: Nk, extname: Tk, join: Ik, sep: '/' };
function Rk(t, r) {
  if (r !== void 0 && typeof r != 'string')
    throw new TypeError('"ext" argument must be a string');
  Ki(t);
  let l = 0,
    o = -1,
    a = t.length,
    s;
  if (r === void 0 || r.length === 0 || r.length > t.length) {
    for (; a--; )
      if (t.codePointAt(a) === 47) {
        if (s) {
          l = a + 1;
          break;
        }
      } else o < 0 && ((s = !0), (o = a + 1));
    return o < 0 ? '' : t.slice(l, o);
  }
  if (r === t) return '';
  let f = -1,
    p = r.length - 1;
  for (; a--; )
    if (t.codePointAt(a) === 47) {
      if (s) {
        l = a + 1;
        break;
      }
    } else
      (f < 0 && ((s = !0), (f = a + 1)),
        p > -1 &&
          (t.codePointAt(a) === r.codePointAt(p--)
            ? p < 0 && (o = a)
            : ((p = -1), (o = f))));
  return (l === o ? (o = f) : o < 0 && (o = t.length), t.slice(l, o));
}
function Nk(t) {
  if ((Ki(t), t.length === 0)) return '.';
  let r = -1,
    l = t.length,
    o;
  for (; --l; )
    if (t.codePointAt(l) === 47) {
      if (o) {
        r = l;
        break;
      }
    } else o || (o = !0);
  return r < 0
    ? t.codePointAt(0) === 47
      ? '/'
      : '.'
    : r === 1 && t.codePointAt(0) === 47
      ? '//'
      : t.slice(0, r);
}
function Tk(t) {
  Ki(t);
  let r = t.length,
    l = -1,
    o = 0,
    a = -1,
    s = 0,
    f;
  for (; r--; ) {
    const p = t.codePointAt(r);
    if (p === 47) {
      if (f) {
        o = r + 1;
        break;
      }
      continue;
    }
    (l < 0 && ((f = !0), (l = r + 1)),
      p === 46 ? (a < 0 ? (a = r) : s !== 1 && (s = 1)) : a > -1 && (s = -1));
  }
  return a < 0 || l < 0 || s === 0 || (s === 1 && a === l - 1 && a === o + 1)
    ? ''
    : t.slice(a, l);
}
function Ik(...t) {
  let r = -1,
    l;
  for (; ++r < t.length; )
    (Ki(t[r]), t[r] && (l = l === void 0 ? t[r] : l + '/' + t[r]));
  return l === void 0 ? '.' : Lk(l);
}
function Lk(t) {
  Ki(t);
  const r = t.codePointAt(0) === 47;
  let l = zk(t, !r);
  return (
    l.length === 0 && !r && (l = '.'),
    l.length > 0 && t.codePointAt(t.length - 1) === 47 && (l += '/'),
    r ? '/' + l : l
  );
}
function zk(t, r) {
  let l = '',
    o = 0,
    a = -1,
    s = 0,
    f = -1,
    p,
    h;
  for (; ++f <= t.length; ) {
    if (f < t.length) p = t.codePointAt(f);
    else {
      if (p === 47) break;
      p = 47;
    }
    if (p === 47) {
      if (!(a === f - 1 || s === 1))
        if (a !== f - 1 && s === 2) {
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
                  (s = 0));
                continue;
              }
            } else if (l.length > 0) {
              ((l = ''), (o = 0), (a = f), (s = 0));
              continue;
            }
          }
          r && ((l = l.length > 0 ? l + '/..' : '..'), (o = 2));
        } else
          (l.length > 0
            ? (l += '/' + t.slice(a + 1, f))
            : (l = t.slice(a + 1, f)),
            (o = f - a - 1));
      ((a = f), (s = 0));
    } else p === 46 && s > -1 ? s++ : (s = -1);
  }
  return l;
}
function Ki(t) {
  if (typeof t != 'string')
    throw new TypeError('Path must be a string. Received ' + JSON.stringify(t));
}
const Ok = { cwd: Dk };
function Dk() {
  return '/';
}
function fs(t) {
  return !!(
    t !== null &&
    typeof t == 'object' &&
    'href' in t &&
    t.href &&
    'protocol' in t &&
    t.protocol &&
    t.auth === void 0
  );
}
function Mk(t) {
  if (typeof t == 'string') t = new URL(t);
  else if (!fs(t)) {
    const r = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' +
        t +
        '`',
    );
    throw ((r.code = 'ERR_INVALID_ARG_TYPE'), r);
  }
  if (t.protocol !== 'file:') {
    const r = new TypeError('The URL must be of scheme file');
    throw ((r.code = 'ERR_INVALID_URL_SCHEME'), r);
  }
  return Ak(t);
}
function Ak(t) {
  if (t.hostname !== '') {
    const o = new TypeError(
      'File URL host must be "localhost" or empty on darwin',
    );
    throw ((o.code = 'ERR_INVALID_FILE_URL_HOST'), o);
  }
  const r = t.pathname;
  let l = -1;
  for (; ++l < r.length; )
    if (r.codePointAt(l) === 37 && r.codePointAt(l + 1) === 50) {
      const o = r.codePointAt(l + 2);
      if (o === 70 || o === 102) {
        const a = new TypeError(
          'File URL path must not include encoded / characters',
        );
        throw ((a.code = 'ERR_INVALID_FILE_URL_PATH'), a);
      }
    }
  return decodeURIComponent(r);
}
const $a = ['history', 'path', 'basename', 'stem', 'extname', 'dirname'];
class Hh {
  constructor(r) {
    let l;
    (r
      ? fs(r)
        ? (l = { path: r })
        : typeof r == 'string' || Fk(r)
          ? (l = { value: r })
          : (l = r)
      : (l = {}),
      (this.cwd = 'cwd' in l ? '' : Ok.cwd()),
      (this.data = {}),
      (this.history = []),
      (this.messages = []),
      this.value,
      this.map,
      this.result,
      this.stored);
    let o = -1;
    for (; ++o < $a.length; ) {
      const s = $a[o];
      s in l &&
        l[s] !== void 0 &&
        l[s] !== null &&
        (this[s] = s === 'history' ? [...l[s]] : l[s]);
    }
    let a;
    for (a in l) $a.includes(a) || (this[a] = l[a]);
  }
  get basename() {
    return typeof this.path == 'string' ? Xt.basename(this.path) : void 0;
  }
  set basename(r) {
    (Va(r, 'basename'),
      Ha(r, 'basename'),
      (this.path = Xt.join(this.dirname || '', r)));
  }
  get dirname() {
    return typeof this.path == 'string' ? Xt.dirname(this.path) : void 0;
  }
  set dirname(r) {
    (_p(this.basename, 'dirname'),
      (this.path = Xt.join(r || '', this.basename)));
  }
  get extname() {
    return typeof this.path == 'string' ? Xt.extname(this.path) : void 0;
  }
  set extname(r) {
    if ((Ha(r, 'extname'), _p(this.dirname, 'extname'), r)) {
      if (r.codePointAt(0) !== 46)
        throw new Error('`extname` must start with `.`');
      if (r.includes('.', 1))
        throw new Error('`extname` cannot contain multiple dots');
    }
    this.path = Xt.join(this.dirname, this.stem + (r || ''));
  }
  get path() {
    return this.history[this.history.length - 1];
  }
  set path(r) {
    (fs(r) && (r = Mk(r)),
      Va(r, 'path'),
      this.path !== r && this.history.push(r));
  }
  get stem() {
    return typeof this.path == 'string'
      ? Xt.basename(this.path, this.extname)
      : void 0;
  }
  set stem(r) {
    (Va(r, 'stem'),
      Ha(r, 'stem'),
      (this.path = Xt.join(this.dirname || '', r + (this.extname || ''))));
  }
  fail(r, l, o) {
    const a = this.message(r, l, o);
    throw ((a.fatal = !0), a);
  }
  info(r, l, o) {
    const a = this.message(r, l, o);
    return ((a.fatal = void 0), a);
  }
  message(r, l, o) {
    const a = new ut(r, l, o);
    return (
      this.path && ((a.name = this.path + ':' + a.name), (a.file = this.path)),
      (a.fatal = !1),
      this.messages.push(a),
      a
    );
  }
  toString(r) {
    return this.value === void 0
      ? ''
      : typeof this.value == 'string'
        ? this.value
        : new TextDecoder(r || void 0).decode(this.value);
  }
}
function Ha(t, r) {
  if (t && t.includes(Xt.sep))
    throw new Error(
      '`' + r + '` cannot be a path: did not expect `' + Xt.sep + '`',
    );
}
function Va(t, r) {
  if (!t) throw new Error('`' + r + '` cannot be empty');
}
function _p(t, r) {
  if (!t) throw new Error('Setting `' + r + '` requires `path` to be set too');
}
function Fk(t) {
  return !!(
    t &&
    typeof t == 'object' &&
    'byteLength' in t &&
    'byteOffset' in t
  );
}
const jk = function (t) {
    const o = this.constructor.prototype,
      a = o[t],
      s = function () {
        return a.apply(s, arguments);
      };
    return (Object.setPrototypeOf(s, o), s);
  },
  Bk = {}.hasOwnProperty;
class Ds extends jk {
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
      (this.transformers = _k()));
  }
  copy() {
    const r = new Ds();
    let l = -1;
    for (; ++l < this.attachers.length; ) {
      const o = this.attachers[l];
      r.use(...o);
    }
    return (r.data(Ua(!0, {}, this.namespace)), r);
  }
  data(r, l) {
    return typeof r == 'string'
      ? arguments.length === 2
        ? (Ka('data', this.frozen), (this.namespace[r] = l), this)
        : (Bk.call(this.namespace, r) && this.namespace[r]) || void 0
      : r
        ? (Ka('data', this.frozen), (this.namespace = r), this)
        : this.namespace;
  }
  freeze() {
    if (this.frozen) return this;
    const r = this;
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [l, ...o] = this.attachers[this.freezeIndex];
      if (o[0] === !1) continue;
      o[0] === !0 && (o[0] = void 0);
      const a = l.call(r, ...o);
      typeof a == 'function' && this.transformers.use(a);
    }
    return (
      (this.frozen = !0),
      (this.freezeIndex = Number.POSITIVE_INFINITY),
      this
    );
  }
  parse(r) {
    this.freeze();
    const l = po(r),
      o = this.parser || this.Parser;
    return (Wa('parse', o), o(String(l), l));
  }
  process(r, l) {
    const o = this;
    return (
      this.freeze(),
      Wa('process', this.parser || this.Parser),
      Qa('process', this.compiler || this.Compiler),
      l ? a(void 0, l) : new Promise(a)
    );
    function a(s, f) {
      const p = po(r),
        h = o.parse(p);
      o.run(h, p, function (g, v, x) {
        if (g || !v || !x) return m(g);
        const w = v,
          L = o.stringify(w, x);
        ($k(L) ? (x.value = L) : (x.result = L), m(g, x));
      });
      function m(g, v) {
        g || !v ? f(g) : s ? s(v) : l(void 0, v);
      }
    }
  }
  processSync(r) {
    let l = !1,
      o;
    return (
      this.freeze(),
      Wa('processSync', this.parser || this.Parser),
      Qa('processSync', this.compiler || this.Compiler),
      this.process(r, a),
      Rp('processSync', 'process', l),
      o
    );
    function a(s, f) {
      ((l = !0), Ep(s), (o = f));
    }
  }
  run(r, l, o) {
    (Pp(r), this.freeze());
    const a = this.transformers;
    return (
      !o && typeof l == 'function' && ((o = l), (l = void 0)),
      o ? s(void 0, o) : new Promise(s)
    );
    function s(f, p) {
      const h = po(l);
      a.run(r, h, m);
      function m(g, v, x) {
        const w = v || r;
        g ? p(g) : f ? f(w) : o(void 0, w, x);
      }
    }
  }
  runSync(r, l) {
    let o = !1,
      a;
    return (this.run(r, l, s), Rp('runSync', 'run', o), a);
    function s(f, p) {
      (Ep(f), (a = p), (o = !0));
    }
  }
  stringify(r, l) {
    this.freeze();
    const o = po(l),
      a = this.compiler || this.Compiler;
    return (Qa('stringify', a), Pp(r), a(r, o));
  }
  use(r, ...l) {
    const o = this.attachers,
      a = this.namespace;
    if ((Ka('use', this.frozen), r != null))
      if (typeof r == 'function') h(r, l);
      else if (typeof r == 'object') Array.isArray(r) ? p(r) : f(r);
      else throw new TypeError('Expected usable value, not `' + r + '`');
    return this;
    function s(m) {
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
        m.settings && (a.settings = Ua(!0, a.settings, m.settings)));
    }
    function p(m) {
      let g = -1;
      if (m != null)
        if (Array.isArray(m))
          for (; ++g < m.length; ) {
            const v = m[g];
            s(v);
          }
        else throw new TypeError('Expected a list of plugins, not `' + m + '`');
    }
    function h(m, g) {
      let v = -1,
        x = -1;
      for (; ++v < o.length; )
        if (o[v][0] === m) {
          x = v;
          break;
        }
      if (x === -1) o.push([m, ...g]);
      else if (g.length > 0) {
        let [w, ...L] = g;
        const T = o[x][1];
        (cs(T) && cs(w) && (w = Ua(!0, T, w)), (o[x] = [m, w, ...L]));
      }
    }
  }
}
const bk = new Ds().freeze();
function Wa(t, r) {
  if (typeof r != 'function')
    throw new TypeError('Cannot `' + t + '` without `parser`');
}
function Qa(t, r) {
  if (typeof r != 'function')
    throw new TypeError('Cannot `' + t + '` without `compiler`');
}
function Ka(t, r) {
  if (r)
    throw new Error(
      'Cannot call `' +
        t +
        '` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.',
    );
}
function Pp(t) {
  if (!cs(t) || typeof t.type != 'string')
    throw new TypeError('Expected node, got `' + t + '`');
}
function Rp(t, r, l) {
  if (!l)
    throw new Error('`' + t + '` finished async. Use `' + r + '` instead');
}
function po(t) {
  return Uk(t) ? t : new Hh(t);
}
function Uk(t) {
  return !!(t && typeof t == 'object' && 'message' in t && 'messages' in t);
}
function $k(t) {
  return typeof t == 'string' || Hk(t);
}
function Hk(t) {
  return !!(
    t &&
    typeof t == 'object' &&
    'byteLength' in t &&
    'byteOffset' in t
  );
}
const Vk = 'https://github.com/remarkjs/react-markdown/blob/main/changelog.md',
  Np = [],
  Tp = { allowDangerousHtml: !0 },
  Wk = /^(https?|ircs?|mailto|xmpp)$/i,
  Qk = [
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
function Kk(t) {
  const r = qk(t),
    l = Yk(t);
  return Xk(r.runSync(r.parse(l), l), t);
}
function qk(t) {
  const r = t.rehypePlugins || Np,
    l = t.remarkPlugins || Np,
    o = t.remarkRehypeOptions ? { ...t.remarkRehypeOptions, ...Tp } : Tp;
  return bk().use(R0).use(l).use(Sk, o).use(r);
}
function Yk(t) {
  const r = t.children || '',
    l = new Hh();
  return (typeof r == 'string' && (l.value = r), l);
}
function Xk(t, r) {
  const l = r.allowedElements,
    o = r.allowElement,
    a = r.components,
    s = r.disallowedElements,
    f = r.skipHtml,
    p = r.unwrapDisallowed,
    h = r.urlTransform || Gk;
  for (const g of Qk)
    Object.hasOwn(r, g.from) &&
      ('' +
        g.from +
        (g.to ? 'use `' + g.to + '` instead' : 'remove it') +
        Vk +
        g.id,
      void 0);
  return (
    r.className &&
      (t = {
        type: 'element',
        tagName: 'div',
        properties: { className: r.className },
        children: t.type === 'root' ? t.children : [t],
      }),
    $h(t, m),
    ow(t, {
      Fragment: Y.Fragment,
      components: a,
      ignoreInvalidStyle: !0,
      jsx: Y.jsx,
      jsxs: Y.jsxs,
      passKeys: !0,
      passNode: !0,
    })
  );
  function m(g, v, x) {
    if (g.type === 'raw' && x && typeof v == 'number')
      return (
        f
          ? x.children.splice(v, 1)
          : (x.children[v] = { type: 'text', value: g.value }),
        v
      );
    if (g.type === 'element') {
      let w;
      for (w in Fa)
        if (Object.hasOwn(Fa, w) && Object.hasOwn(g.properties, w)) {
          const L = g.properties[w],
            T = Fa[w];
          (T === null || T.includes(g.tagName)) &&
            (g.properties[w] = h(String(L || ''), w, g));
        }
    }
    if (g.type === 'element') {
      let w = l ? !l.includes(g.tagName) : s ? s.includes(g.tagName) : !1;
      if (
        (!w && o && typeof v == 'number' && (w = !o(g, v, x)),
        w && x && typeof v == 'number')
      )
        return (
          p && g.children
            ? x.children.splice(v, 1, ...g.children)
            : x.children.splice(v, 1),
          v
        );
    }
  }
}
function Gk(t) {
  const r = t.indexOf(':'),
    l = t.indexOf('?'),
    o = t.indexOf('#'),
    a = t.indexOf('/');
  return r === -1 ||
    (a !== -1 && r > a) ||
    (l !== -1 && r > l) ||
    (o !== -1 && r > o) ||
    Wk.test(t.slice(0, r))
    ? t
    : '';
}
const Jk = ({ content: t }) =>
    Y.jsx('div', {
      className: 'markdown-preview p-4 border rounded-lg shadow-md',
      children: Y.jsx(Kk, { children: t }),
    }),
  Zk = () => {
    const { id: t } = _y(),
      r = Io((l) => L1(l, t || ''));
    return r
      ? Y.jsxs('div', {
          className: 'flex flex-col h-full',
          children: [
            Y.jsx(ah, { value: r.content }),
            Y.jsx(Jk, { content: r.content }),
          ],
        })
      : Y.jsx('div', { children: 'Note not found' });
  },
  eS = () => {
    const t = Io((r) => r.tags.tags);
    return Y.jsxs('div', {
      className: 'tag-list',
      children: [
        Y.jsx('h2', { className: 'text-lg font-semibold', children: 'Tags' }),
        Y.jsx('ul', {
          className: 'list-disc pl-5',
          children: t.map((r) =>
            Y.jsx('li', { className: 'text-gray-700', children: r.name }, r.id),
          ),
        }),
      ],
    });
  },
  tS = () =>
    Y.jsxs('div', {
      className: 'p-4',
      children: [
        Y.jsx('h1', { className: 'text-2xl font-bold mb-4', children: 'Tags' }),
        Y.jsx(eS, {}),
      ],
    }),
  nS = () =>
    Y.jsxs('div', {
      className: 'settings-container',
      children: [
        Y.jsx('h1', { className: 'text-2xl font-bold', children: 'Settings' }),
        Y.jsxs('div', {
          className: 'settings-options',
          children: [
            Y.jsx('h2', { className: 'text-xl', children: 'General' }),
            Y.jsx('h2', { className: 'text-xl', children: 'Appearance' }),
            Y.jsx('h2', { className: 'text-xl', children: 'Account' }),
          ],
        }),
      ],
    }),
  rS = () =>
    Y.jsxs(by, {
      children: [
        Y.jsx(Mr, { path: '/', element: Y.jsx(Wd, {}) }),
        Y.jsx(Mr, { path: '/notes', element: Y.jsx(Wd, {}) }),
        Y.jsx(Mr, { path: '/notes/:id', element: Y.jsx(Zk, {}) }),
        Y.jsx(Mr, { path: '/tags', element: Y.jsx(tS, {}) }),
        Y.jsx(Mr, { path: '/settings', element: Y.jsx(nS, {}) }),
      ],
    }),
  iS = () =>
    Y.jsxs('div', {
      className: 'w-64 bg-gray-800 text-white h-full p-4',
      children: [
        Y.jsx('h2', {
          className: 'text-lg font-bold mb-4',
          children: 'Markdown Notes',
        }),
        Y.jsx('nav', {
          children: Y.jsxs('ul', {
            children: [
              Y.jsx('li', {
                className: 'mb-2',
                children: Y.jsx('a', {
                  href: '/notes',
                  className: 'hover:text-gray-400',
                  children: 'Notes',
                }),
              }),
              Y.jsx('li', {
                className: 'mb-2',
                children: Y.jsx('a', {
                  href: '/tags',
                  className: 'hover:text-gray-400',
                  children: 'Tags',
                }),
              }),
              Y.jsx('li', {
                className: 'mb-2',
                children: Y.jsx('a', {
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
  lS = () =>
    Y.jsx(Mv, {
      store: R1,
      children: Y.jsx(sv, {
        children: Y.jsxs('div', {
          className: 'h-screen flex flex-col',
          children: [
            Y.jsx('header', {
              className: 'p-4 border-b bg-white',
              children: Y.jsx('h1', { children: 'Markdown Notes Editor' }),
            }),
            Y.jsxs('div', {
              className: 'flex flex-1 overflow-hidden',
              children: [
                Y.jsx('nav', {
                  'aria-label': 'Sidebar',
                  className: 'h-full',
                  children: Y.jsx(iS, {}),
                }),
                Y.jsx('main', {
                  className: 'flex-1 overflow-auto p-4',
                  children: Y.jsx(rS, {}),
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  oS = qg.createRoot(document.getElementById('root'));
oS.render(Y.jsx(Ug.StrictMode, { children: Y.jsx(lS, {}) }));
