var bd = Object.defineProperty, _d = Object.defineProperties;
var Md = Object.getOwnPropertyDescriptors;
var In = Object.getOwnPropertySymbols;
var $s = Object.prototype.hasOwnProperty,
  Us = Object.prototype.propertyIsEnumerable;
var Hs = (e, t, n) =>
    t in e
      ? bd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : e[t] = n,
  G = (e, t) => {
    for (var n in t ||= {}) $s.call(t, n) && Hs(e, n, t[n]);
    if (In) { for (var n of In(t)) Us.call(t, n) && Hs(e, n, t[n]); }
    return e;
  },
  W = (e, t) => _d(e, Md(t));
var tD = (e, t) => {
  var n = {};
  for (var r in e) $s.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && In) {
    for (var r of In(e)) t.indexOf(r) < 0 && Us.call(e, r) && (n[r] = e[r]);
  }
  return n;
};
function co(e, t) {
  return Object.is(e, t);
}
var L = null, Ht = !1, lo = 1, B = Symbol("SIGNAL");
function _(e) {
  let t = L;
  return L = e, t;
}
function zs() {
  return L;
}
function Td() {
  return Ht;
}
var Be = {
  version: 0,
  lastCleanEpoch: 0,
  dirty: !1,
  producerNode: void 0,
  producerLastReadVersion: void 0,
  producerIndexOfThis: void 0,
  nextProducerIndex: 0,
  liveConsumerNode: void 0,
  liveConsumerIndexOfThis: void 0,
  consumerAllowSignalWrites: !1,
  consumerIsAlwaysLive: !1,
  kind: "unknown",
  producerMustRecompute: () => !1,
  producerRecomputeValue: () => {},
  consumerMarkedDirty: () => {},
  consumerOnSignalRead: () => {},
};
function Cn(e) {
  if (Ht) throw new Error("");
  if (L === null) return;
  L.consumerOnSignalRead(e);
  let t = L.nextProducerIndex++;
  if (_n(L), t < L.producerNode.length && L.producerNode[t] !== e && $t(L)) {
    let n = L.producerNode[t];
    bn(n, L.producerIndexOfThis[t]);
  }
  L.producerNode[t] !== e &&
  (L.producerNode[t] = e, L.producerIndexOfThis[t] = $t(L) ? Zs(e, L, t) : 0),
    L.producerLastReadVersion[t] = e.version;
}
function Sd() {
  lo++;
}
function fo(e) {
  if (!($t(e) && !e.dirty) && !(!e.dirty && e.lastCleanEpoch === lo)) {
    if (!e.producerMustRecompute(e) && !zt(e)) {
      ao(e);
      return;
    }
    e.producerRecomputeValue(e), ao(e);
  }
}
function Gs(e) {
  if (e.liveConsumerNode === void 0) return;
  let t = Ht;
  Ht = !0;
  try {
    for (let n of e.liveConsumerNode) n.dirty || qs(n);
  } finally {
    Ht = t;
  }
}
function Ws() {
  return L?.consumerAllowSignalWrites !== !1;
}
function qs(e) {
  e.dirty = !0, Gs(e), e.consumerMarkedDirty?.(e);
}
function ao(e) {
  e.dirty = !1, e.lastCleanEpoch = lo;
}
function gt(e) {
  return e && (e.nextProducerIndex = 0), _(e);
}
function Ut(e, t) {
  if (
    _(t),
      !(!e || e.producerNode === void 0 || e.producerIndexOfThis === void 0 ||
        e.producerLastReadVersion === void 0)
  ) {
    if ($t(e)) {
      for (let n = e.nextProducerIndex; n < e.producerNode.length; n++) {
        bn(e.producerNode[n], e.producerIndexOfThis[n]);
      }
    }
    for (; e.producerNode.length > e.nextProducerIndex;) {
      e.producerNode.pop(),
        e.producerLastReadVersion.pop(),
        e.producerIndexOfThis.pop();
    }
  }
}
function zt(e) {
  _n(e);
  for (let t = 0; t < e.producerNode.length; t++) {
    let n = e.producerNode[t], r = e.producerLastReadVersion[t];
    if (r !== n.version || (fo(n), r !== n.version)) return !0;
  }
  return !1;
}
function mt(e) {
  if (_n(e), $t(e)) {
    for (let t = 0; t < e.producerNode.length; t++) {
      bn(e.producerNode[t], e.producerIndexOfThis[t]);
    }
  }
  e.producerNode.length =
    e.producerLastReadVersion.length =
    e
      .producerIndexOfThis.length =
      0,
    e.liveConsumerNode &&
    (e.liveConsumerNode.length = e.liveConsumerIndexOfThis.length = 0);
}
function Zs(e, t, n) {
  if (Qs(e), e.liveConsumerNode.length === 0 && Ys(e)) {
    for (let r = 0; r < e.producerNode.length; r++) {
      e.producerIndexOfThis[r] = Zs(e.producerNode[r], e, r);
    }
  }
  return e.liveConsumerIndexOfThis.push(n), e.liveConsumerNode.push(t) - 1;
}
function bn(e, t) {
  if (Qs(e), e.liveConsumerNode.length === 1 && Ys(e)) {
    for (let r = 0; r < e.producerNode.length; r++) {
      bn(e.producerNode[r], e.producerIndexOfThis[r]);
    }
  }
  let n = e.liveConsumerNode.length - 1;
  if (
    e.liveConsumerNode[t] = e.liveConsumerNode[n],
      e.liveConsumerIndexOfThis[t] = e.liveConsumerIndexOfThis[n],
      e.liveConsumerNode.length--,
      e.liveConsumerIndexOfThis.length--,
      t < e.liveConsumerNode.length
  ) {
    let r = e.liveConsumerIndexOfThis[t], o = e.liveConsumerNode[t];
    _n(o), o.producerIndexOfThis[r] = t;
  }
}
function $t(e) {
  return e.consumerIsAlwaysLive || (e?.liveConsumerNode?.length ?? 0) > 0;
}
function _n(e) {
  e.producerNode ??= [],
    e.producerIndexOfThis ??= [],
    e.producerLastReadVersion ??= [];
}
function Qs(e) {
  e.liveConsumerNode ??= [], e.liveConsumerIndexOfThis ??= [];
}
function Ys(e) {
  return e.producerNode !== void 0;
}
function po(e) {
  let t = Object.create(Nd);
  t.computation = e;
  let n = () => {
    if (fo(t), Cn(t), t.value === wn) throw t.error;
    return t.value;
  };
  return n[B] = t, n;
}
var io = Symbol("UNSET"),
  so = Symbol("COMPUTING"),
  wn = Symbol("ERRORED"),
  Nd = W(G({}, Be), {
    value: io,
    dirty: !0,
    error: null,
    equal: co,
    kind: "computed",
    producerMustRecompute(e) {
      return e.value === io || e.value === so;
    },
    producerRecomputeValue(e) {
      if (e.value === so) throw new Error("Detected cycle in computations.");
      let t = e.value;
      e.value = so;
      let n = gt(e), r;
      try {
        r = e.computation();
      } catch (o) {
        r = wn, e.error = o;
      } finally {
        Ut(e, n);
      }
      if (t !== io && t !== wn && r !== wn && e.equal(t, r)) {
        e.value = t;
        return;
      }
      e.value = r, e.version++;
    },
  });
function xd() {
  throw new Error();
}
var Ks = xd;
function Js() {
  Ks();
}
function Xs(e) {
  Ks = e;
}
var Ad = null;
function ea(e) {
  let t = Object.create(ho);
  t.value = e;
  let n = () => (Cn(t), t.value);
  return n[B] = t, n;
}
function Mn(e, t) {
  Ws() || Js(), e.equal(e.value, t) || (e.value = t, Od(e));
}
function ta(e, t) {
  Ws() || Js(), Mn(e, t(e.value));
}
var ho = W(G({}, Be), { equal: co, value: void 0, kind: "signal" });
function Od(e) {
  e.version++, Sd(), Gs(e), Ad?.();
}
function na(e, t, n) {
  let r = Object.create(Rd);
  n && (r.consumerAllowSignalWrites = !0), r.fn = e, r.schedule = t;
  let o = (u) => {
    r.cleanupFn = u;
  };
  function i(u) {
    return u.fn === null && u.schedule === null;
  }
  function s(u) {
    i(u) ||
      (mt(u), u.cleanupFn(), u.fn = null, u.schedule = null, u.cleanupFn = uo);
  }
  let a = () => {
    if (r.fn === null) return;
    if (Td()) {
      throw new Error(
        "Schedulers cannot synchronously execute watches while scheduling.",
      );
    }
    if (r.dirty = !1, r.hasRun && !zt(r)) return;
    r.hasRun = !0;
    let u = gt(r);
    try {
      r.cleanupFn(), r.cleanupFn = uo, r.fn(o);
    } finally {
      Ut(r, u);
    }
  };
  return r.ref = {
    notify: () => qs(r),
    run: a,
    cleanup: () => r.cleanupFn(),
    destroy: () => s(r),
    [B]: r,
  },
    r.ref;
}
var uo = () => {},
  Rd = W(G({}, Be), {
    consumerIsAlwaysLive: !0,
    consumerAllowSignalWrites: !1,
    consumerMarkedDirty: (e) => {
      e.schedule !== null && e.schedule(e.ref);
    },
    hasRun: !1,
    cleanupFn: uo,
  });
function v(e) {
  return typeof e == "function";
}
function yt(e) {
  let n = e((r) => {
    Error.call(r), r.stack = new Error().stack;
  });
  return n.prototype = Object.create(Error.prototype),
    n.prototype.constructor = n,
    n;
}
var Tn = yt((e) =>
  function (n) {
    e(this),
      this.message = n
        ? `${n.length} errors occurred during unsubscription:
${
          n.map((r, o) => `${o + 1}) ${r.toString()}`).join(`
  `)
        }`
        : "",
      this.name = "UnsubscriptionError",
      this.errors = n;
  }
);
function He(e, t) {
  if (e) {
    let n = e.indexOf(t);
    0 <= n && e.splice(n, 1);
  }
}
var P = class e {
  constructor(t) {
    this.initialTeardown = t,
      this.closed = !1,
      this._parentage = null,
      this._finalizers = null;
  }
  unsubscribe() {
    let t;
    if (!this.closed) {
      this.closed = !0;
      let { _parentage: n } = this;
      if (n) {
        if (this._parentage = null, Array.isArray(n)) {
          for (let i of n) i.remove(this);
        } else n.remove(this);
      }
      let { initialTeardown: r } = this;
      if (v(r)) {
        try {
          r();
        } catch (i) {
          t = i instanceof Tn ? i.errors : [i];
        }
      }
      let { _finalizers: o } = this;
      if (o) {
        this._finalizers = null;
        for (let i of o) {
          try {
            ra(i);
          } catch (s) {
            t = t ?? [], s instanceof Tn ? t = [...t, ...s.errors] : t.push(s);
          }
        }
      }
      if (t) throw new Tn(t);
    }
  }
  add(t) {
    var n;
    if (t && t !== this) {
      if (this.closed) ra(t);
      else {
        if (t instanceof e) {
          if (t.closed || t._hasParent(this)) return;
          t._addParent(this);
        }
        (this._finalizers = (n = this._finalizers) !== null && n !== void 0
          ? n
          : []).push(t);
      }
    }
  }
  _hasParent(t) {
    let { _parentage: n } = this;
    return n === t || Array.isArray(n) && n.includes(t);
  }
  _addParent(t) {
    let { _parentage: n } = this;
    this._parentage = Array.isArray(n) ? (n.push(t), n) : n ? [n, t] : t;
  }
  _removeParent(t) {
    let { _parentage: n } = this;
    n === t ? this._parentage = null : Array.isArray(n) && He(n, t);
  }
  remove(t) {
    let { _finalizers: n } = this;
    n && He(n, t), t instanceof e && t._removeParent(this);
  }
};
P.EMPTY = (() => {
  let e = new P();
  return e.closed = !0, e;
})();
var go = P.EMPTY;
function Sn(e) {
  return e instanceof P ||
    e && "closed" in e && v(e.remove) && v(e.add) && v(e.unsubscribe);
}
function ra(e) {
  v(e) ? e() : e.unsubscribe();
}
var ce = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1,
};
var vt = {
  setTimeout(e, t, ...n) {
    let { delegate: r } = vt;
    return r?.setTimeout ? r.setTimeout(e, t, ...n) : setTimeout(e, t, ...n);
  },
  clearTimeout(e) {
    let { delegate: t } = vt;
    return (t?.clearTimeout || clearTimeout)(e);
  },
  delegate: void 0,
};
function Nn(e) {
  vt.setTimeout(() => {
    let { onUnhandledError: t } = ce;
    if (t) t(e);
    else throw e;
  });
}
function Gt() {}
var oa = mo("C", void 0, void 0);
function ia(e) {
  return mo("E", void 0, e);
}
function sa(e) {
  return mo("N", e, void 0);
}
function mo(e, t, n) {
  return { kind: e, value: t, error: n };
}
var $e = null;
function Dt(e) {
  if (ce.useDeprecatedSynchronousErrorHandling) {
    let t = !$e;
    if (t && ($e = { errorThrown: !1, error: null }), e(), t) {
      let { errorThrown: n, error: r } = $e;
      if ($e = null, n) throw r;
    }
  } else e();
}
function aa(e) {
  ce.useDeprecatedSynchronousErrorHandling && $e &&
    ($e.errorThrown = !0, $e.error = e);
}
var Ue = class extends P {
    constructor(t) {
      super(),
        this.isStopped = !1,
        t
          ? (this.destination = t, Sn(t) && t.add(this))
          : this.destination = Pd;
    }
    static create(t, n, r) {
      return new Ie(t, n, r);
    }
    next(t) {
      this.isStopped ? vo(sa(t), this) : this._next(t);
    }
    error(t) {
      this.isStopped ? vo(ia(t), this) : (this.isStopped = !0, this._error(t));
    }
    complete() {
      this.isStopped ? vo(oa, this) : (this.isStopped = !0, this._complete());
    }
    unsubscribe() {
      this.closed ||
        (this.isStopped = !0, super.unsubscribe(), this.destination = null);
    }
    _next(t) {
      this.destination.next(t);
    }
    _error(t) {
      try {
        this.destination.error(t);
      } finally {
        this.unsubscribe();
      }
    }
    _complete() {
      try {
        this.destination.complete();
      } finally {
        this.unsubscribe();
      }
    }
  },
  Fd = Function.prototype.bind;
function yo(e, t) {
  return Fd.call(e, t);
}
var Do = class {
    constructor(t) {
      this.partialObserver = t;
    }
    next(t) {
      let { partialObserver: n } = this;
      if (n.next) {
        try {
          n.next(t);
        } catch (r) {
          xn(r);
        }
      }
    }
    error(t) {
      let { partialObserver: n } = this;
      if (n.error) {
        try {
          n.error(t);
        } catch (r) {
          xn(r);
        }
      } else xn(t);
    }
    complete() {
      let { partialObserver: t } = this;
      if (t.complete) {
        try {
          t.complete();
        } catch (n) {
          xn(n);
        }
      }
    }
  },
  Ie = class extends Ue {
    constructor(t, n, r) {
      super();
      let o;
      if (v(t) || !t) {
        o = { next: t ?? void 0, error: n ?? void 0, complete: r ?? void 0 };
      } else {
        let i;
        this && ce.useDeprecatedNextContext
          ? (i = Object.create(t),
            i.unsubscribe = () => this.unsubscribe(),
            o = {
              next: t.next && yo(t.next, i),
              error: t.error && yo(t.error, i),
              complete: t.complete && yo(t.complete, i),
            })
          : o = t;
      }
      this.destination = new Do(o);
    }
  };
function xn(e) {
  ce.useDeprecatedSynchronousErrorHandling ? aa(e) : Nn(e);
}
function kd(e) {
  throw e;
}
function vo(e, t) {
  let { onStoppedNotification: n } = ce;
  n && vt.setTimeout(() => n(e, t));
}
var Pd = { closed: !0, next: Gt, error: kd, complete: Gt };
var Et = typeof Symbol == "function" && Symbol.observable || "@@observable";
function $(e) {
  return e;
}
function Ld(...e) {
  return Eo(e);
}
function Eo(e) {
  return e.length === 0 ? $ : e.length === 1 ? e[0] : function (n) {
    return e.reduce((r, o) => o(r), n);
  };
}
var T = (() => {
  class e {
    constructor(n) {
      n && (this._subscribe = n);
    }
    lift(n) {
      let r = new e();
      return r.source = this, r.operator = n, r;
    }
    subscribe(n, r, o) {
      let i = jd(n) ? n : new Ie(n, r, o);
      return Dt(() => {
        let { operator: s, source: a } = this;
        i.add(
          s ? s.call(i, a) : a ? this._subscribe(i) : this._trySubscribe(i),
        );
      }),
        i;
    }
    _trySubscribe(n) {
      try {
        return this._subscribe(n);
      } catch (r) {
        n.error(r);
      }
    }
    forEach(n, r) {
      return r = ua(r),
        new r((o, i) => {
          let s = new Ie({
            next: (a) => {
              try {
                n(a);
              } catch (u) {
                i(u), s.unsubscribe();
              }
            },
            error: i,
            complete: o,
          });
          this.subscribe(s);
        });
    }
    _subscribe(n) {
      var r;
      return (r = this.source) === null || r === void 0
        ? void 0
        : r.subscribe(n);
    }
    [Et]() {
      return this;
    }
    pipe(...n) {
      return Eo(n)(this);
    }
    toPromise(n) {
      return n = ua(n),
        new n((r, o) => {
          let i;
          this.subscribe((s) => i = s, (s) => o(s), () => r(i));
        });
    }
  }
  return e.create = (t) => new e(t), e;
})();
function ua(e) {
  var t;
  return (t = e ?? ce.Promise) !== null && t !== void 0 ? t : Promise;
}
function Vd(e) {
  return e && v(e.next) && v(e.error) && v(e.complete);
}
function jd(e) {
  return e && e instanceof Ue || Vd(e) && Sn(e);
}
function Io(e) {
  return v(e?.lift);
}
function y(e) {
  return (t) => {
    if (Io(t)) {
      return t.lift(function (n) {
        try {
          return e(n, this);
        } catch (r) {
          this.error(r);
        }
      });
    }
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function m(e, t, n, r, o) {
  return new wo(e, t, n, r, o);
}
var wo = class extends Ue {
  constructor(t, n, r, o, i, s) {
    super(t),
      this.onFinalize = i,
      this.shouldUnsubscribe = s,
      this._next = n
        ? function (a) {
          try {
            n(a);
          } catch (u) {
            t.error(u);
          }
        }
        : super._next,
      this._error = o
        ? function (a) {
          try {
            o(a);
          } catch (u) {
            t.error(u);
          } finally {
            this.unsubscribe();
          }
        }
        : super._error,
      this._complete = r
        ? function () {
          try {
            r();
          } catch (a) {
            t.error(a);
          } finally {
            this.unsubscribe();
          }
        }
        : super._complete;
  }
  unsubscribe() {
    var t;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      let { closed: n } = this;
      super.unsubscribe(),
        !n && ((t = this.onFinalize) === null || t === void 0 || t.call(this));
    }
  }
};
function Co() {
  return y((e, t) => {
    let n = null;
    e._refCount++;
    let r = m(t, void 0, void 0, void 0, () => {
      if (!e || e._refCount <= 0 || 0 < --e._refCount) {
        n = null;
        return;
      }
      let o = e._connection, i = n;
      n = null, o && (!i || o === i) && o.unsubscribe(), t.unsubscribe();
    });
    e.subscribe(r), r.closed || (n = e.connect());
  });
}
var bo = class extends T {
  constructor(t, n) {
    super(),
      this.source = t,
      this.subjectFactory = n,
      this._subject = null,
      this._refCount = 0,
      this._connection = null,
      Io(t) && (this.lift = t.lift);
  }
  _subscribe(t) {
    return this.getSubject().subscribe(t);
  }
  getSubject() {
    let t = this._subject;
    return (!t || t.isStopped) && (this._subject = this.subjectFactory()),
      this._subject;
  }
  _teardown() {
    this._refCount = 0;
    let { _connection: t } = this;
    this._subject = this._connection = null, t?.unsubscribe();
  }
  connect() {
    let t = this._connection;
    if (!t) {
      t = this._connection = new P();
      let n = this.getSubject();
      t.add(this.source.subscribe(m(n, void 0, () => {
        this._teardown(), n.complete();
      }, (r) => {
        this._teardown(), n.error(r);
      }, () => this._teardown()))),
        t.closed && (this._connection = null, t = P.EMPTY);
    }
    return t;
  }
  refCount() {
    return Co()(this);
  }
};
var ca = yt((e) =>
  function () {
    e(this),
      this.name = "ObjectUnsubscribedError",
      this.message = "object unsubscribed";
  }
);
var q = (() => {
    class e extends T {
      constructor() {
        super(),
          this.closed = !1,
          this.currentObservers = null,
          this.observers = [],
          this.isStopped = !1,
          this.hasError = !1,
          this.thrownError = null;
      }
      lift(n) {
        let r = new An(this, this);
        return r.operator = n, r;
      }
      _throwIfClosed() {
        if (this.closed) throw new ca();
      }
      next(n) {
        Dt(() => {
          if (this._throwIfClosed(), !this.isStopped) {
            this.currentObservers ||
              (this.currentObservers = Array.from(this.observers));
            for (let r of this.currentObservers) r.next(n);
          }
        });
      }
      error(n) {
        Dt(() => {
          if (this._throwIfClosed(), !this.isStopped) {
            this.hasError = this.isStopped = !0, this.thrownError = n;
            let { observers: r } = this;
            for (; r.length;) r.shift().error(n);
          }
        });
      }
      complete() {
        Dt(() => {
          if (this._throwIfClosed(), !this.isStopped) {
            this.isStopped = !0;
            let { observers: n } = this;
            for (; n.length;) n.shift().complete();
          }
        });
      }
      unsubscribe() {
        this.isStopped = this.closed = !0,
          this.observers = this.currentObservers = null;
      }
      get observed() {
        var n;
        return ((n = this.observers) === null || n === void 0
          ? void 0
          : n.length) > 0;
      }
      _trySubscribe(n) {
        return this._throwIfClosed(), super._trySubscribe(n);
      }
      _subscribe(n) {
        return this._throwIfClosed(),
          this._checkFinalizedStatuses(n),
          this._innerSubscribe(n);
      }
      _innerSubscribe(n) {
        let { hasError: r, isStopped: o, observers: i } = this;
        return r || o
          ? go
          : (this.currentObservers = null,
            i.push(n),
            new P(() => {
              this.currentObservers = null, He(i, n);
            }));
      }
      _checkFinalizedStatuses(n) {
        let { hasError: r, thrownError: o, isStopped: i } = this;
        r ? n.error(o) : i && n.complete();
      }
      asObservable() {
        let n = new T();
        return n.source = this, n;
      }
    }
    return e.create = (t, n) => new An(t, n), e;
  })(),
  An = class extends q {
    constructor(t, n) {
      super(), this.destination = t, this.source = n;
    }
    next(t) {
      var n, r;
      (r = (n = this.destination) === null || n === void 0
            ? void 0
            : n.next) === null || r === void 0 || r.call(n, t);
    }
    error(t) {
      var n, r;
      (r = (n = this.destination) === null || n === void 0
            ? void 0
            : n.error) === null || r === void 0 || r.call(n, t);
    }
    complete() {
      var t, n;
      (n = (t = this.destination) === null || t === void 0
            ? void 0
            : t.complete) === null || n === void 0 || n.call(t);
    }
    _subscribe(t) {
      var n, r;
      return (r = (n = this.source) === null || n === void 0
              ? void 0
              : n.subscribe(t)) !== null && r !== void 0
        ? r
        : go;
    }
  };
var Wt = class extends q {
  constructor(t) {
    super(), this._value = t;
  }
  get value() {
    return this.getValue();
  }
  _subscribe(t) {
    let n = super._subscribe(t);
    return !n.closed && t.next(this._value), n;
  }
  getValue() {
    let { hasError: t, thrownError: n, _value: r } = this;
    if (t) throw n;
    return this._throwIfClosed(), r;
  }
  next(t) {
    super.next(this._value = t);
  }
};
var qt = {
  now() {
    return (qt.delegate || Date).now();
  },
  delegate: void 0,
};
var On = class extends q {
  constructor(t = 1 / 0, n = 1 / 0, r = qt) {
    super(),
      this._bufferSize = t,
      this._windowTime = n,
      this._timestampProvider = r,
      this._buffer = [],
      this._infiniteTimeWindow = !0,
      this._infiniteTimeWindow = n === 1 / 0,
      this._bufferSize = Math.max(1, t),
      this._windowTime = Math.max(1, n);
  }
  next(t) {
    let {
      isStopped: n,
      _buffer: r,
      _infiniteTimeWindow: o,
      _timestampProvider: i,
      _windowTime: s,
    } = this;
    n || (r.push(t), !o && r.push(i.now() + s)),
      this._trimBuffer(),
      super.next(t);
  }
  _subscribe(t) {
    this._throwIfClosed(), this._trimBuffer();
    let n = this._innerSubscribe(t),
      { _infiniteTimeWindow: r, _buffer: o } = this,
      i = o.slice();
    for (let s = 0; s < i.length && !t.closed; s += r ? 1 : 2) t.next(i[s]);
    return this._checkFinalizedStatuses(t), n;
  }
  _trimBuffer() {
    let {
        _bufferSize: t,
        _timestampProvider: n,
        _buffer: r,
        _infiniteTimeWindow: o,
      } = this,
      i = (o ? 1 : 2) * t;
    if (t < 1 / 0 && i < r.length && r.splice(0, r.length - i), !o) {
      let s = n.now(), a = 0;
      for (let u = 1; u < r.length && r[u] <= s; u += 2) a = u;
      a && r.splice(0, a + 1);
    }
  }
};
var Rn = class extends P {
  constructor(t, n) {
    super();
  }
  schedule(t, n = 0) {
    return this;
  }
};
var Zt = {
  setInterval(e, t, ...n) {
    let { delegate: r } = Zt;
    return r?.setInterval ? r.setInterval(e, t, ...n) : setInterval(e, t, ...n);
  },
  clearInterval(e) {
    let { delegate: t } = Zt;
    return (t?.clearInterval || clearInterval)(e);
  },
  delegate: void 0,
};
var Fn = class extends Rn {
  constructor(t, n) {
    super(t, n), this.scheduler = t, this.work = n, this.pending = !1;
  }
  schedule(t, n = 0) {
    var r;
    if (this.closed) return this;
    this.state = t;
    let o = this.id, i = this.scheduler;
    return o != null && (this.id = this.recycleAsyncId(i, o, n)),
      this.pending = !0,
      this.delay = n,
      this.id = (r = this.id) !== null && r !== void 0
        ? r
        : this.requestAsyncId(i, this.id, n),
      this;
  }
  requestAsyncId(t, n, r = 0) {
    return Zt.setInterval(t.flush.bind(t, this), r);
  }
  recycleAsyncId(t, n, r = 0) {
    if (r != null && this.delay === r && this.pending === !1) return n;
    n != null && Zt.clearInterval(n);
  }
  execute(t, n) {
    if (this.closed) return new Error("executing a cancelled action");
    this.pending = !1;
    let r = this._execute(t, n);
    if (r) return r;
    this.pending === !1 && this.id != null &&
      (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }
  _execute(t, n) {
    let r = !1, o;
    try {
      this.work(t);
    } catch (i) {
      r = !0, o = i || new Error("Scheduled action threw falsy error");
    }
    if (r) return this.unsubscribe(), o;
  }
  unsubscribe() {
    if (!this.closed) {
      let { id: t, scheduler: n } = this, { actions: r } = n;
      this.work = this.state = this.scheduler = null,
        this.pending = !1,
        He(r, this),
        t != null && (this.id = this.recycleAsyncId(n, t, null)),
        this.delay = null,
        super.unsubscribe();
    }
  }
};
var It = class e {
  constructor(t, n = e.now) {
    this.schedulerActionCtor = t, this.now = n;
  }
  schedule(t, n = 0, r) {
    return new this.schedulerActionCtor(this, t).schedule(r, n);
  }
};
It.now = qt.now;
var kn = class extends It {
  constructor(t, n = It.now) {
    super(t, n), this.actions = [], this._active = !1;
  }
  flush(t) {
    let { actions: n } = this;
    if (this._active) {
      n.push(t);
      return;
    }
    let r;
    this._active = !0;
    do if (r = t.execute(t.state, t.delay)) break; while (t = n.shift());
    if (this._active = !1, r) {
      for (; t = n.shift();) t.unsubscribe();
      throw r;
    }
  }
};
var Qt = new kn(Fn), la = Qt;
var ze = new T((e) => e.complete());
function Pn(e) {
  return e && v(e.schedule);
}
function _o(e) {
  return e[e.length - 1];
}
function Ln(e) {
  return v(_o(e)) ? e.pop() : void 0;
}
function pe(e) {
  return Pn(_o(e)) ? e.pop() : void 0;
}
function da(e, t) {
  return typeof _o(e) == "number" ? e.pop() : t;
}
function pa(e, t, n, r) {
  function o(i) {
    return i instanceof n ? i : new n(function (s) {
      s(i);
    });
  }
  return new (n || (n = Promise))(function (i, s) {
    function a(l) {
      try {
        c(r.next(l));
      } catch (d) {
        s(d);
      }
    }
    function u(l) {
      try {
        c(r.throw(l));
      } catch (d) {
        s(d);
      }
    }
    function c(l) {
      l.done ? i(l.value) : o(l.value).then(a, u);
    }
    c((r = r.apply(e, t || [])).next());
  });
}
function fa(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number") {
    return {
      next: function () {
        return e && r >= e.length && (e = void 0),
          { value: e && e[r++], done: !e };
      },
    };
  }
  throw new TypeError(
    t ? "Object is not iterable." : "Symbol.iterator is not defined.",
  );
}
function Ge(e) {
  return this instanceof Ge ? (this.v = e, this) : new Ge(e);
}
function ha(e, t, n) {
  if (!Symbol.asyncIterator) {
    throw new TypeError("Symbol.asyncIterator is not defined.");
  }
  var r = n.apply(e, t || []), o, i = [];
  return o = Object.create(
    (typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype,
  ),
    a("next"),
    a("throw"),
    a("return", s),
    o[Symbol.asyncIterator] = function () {
      return this;
    },
    o;
  function s(f) {
    return function (h) {
      return Promise.resolve(h).then(f, d);
    };
  }
  function a(f, h) {
    r[f] && (o[f] = function (w) {
      return new Promise(function (F, S) {
        i.push([f, w, F, S]) > 1 || u(f, w);
      });
    },
      h && (o[f] = h(o[f])));
  }
  function u(f, h) {
    try {
      c(r[f](h));
    } catch (w) {
      p(i[0][3], w);
    }
  }
  function c(f) {
    f.value instanceof Ge
      ? Promise.resolve(f.value.v).then(l, d)
      : p(i[0][2], f);
  }
  function l(f) {
    u("next", f);
  }
  function d(f) {
    u("throw", f);
  }
  function p(f, h) {
    f(h), i.shift(), i.length && u(i[0][0], i[0][1]);
  }
}
function ga(e) {
  if (!Symbol.asyncIterator) {
    throw new TypeError("Symbol.asyncIterator is not defined.");
  }
  var t = e[Symbol.asyncIterator], n;
  return t
    ? t.call(e)
    : (e = typeof fa == "function" ? fa(e) : e[Symbol.iterator](),
      n = {},
      r("next"),
      r("throw"),
      r("return"),
      n[Symbol.asyncIterator] = function () {
        return this;
      },
      n);
  function r(i) {
    n[i] = e[i] && function (s) {
      return new Promise(function (a, u) {
        s = e[i](s), o(a, u, s.done, s.value);
      });
    };
  }
  function o(i, s, a, u) {
    Promise.resolve(u).then(function (c) {
      i({ value: c, done: a });
    }, s);
  }
}
var Vn = (e) => e && typeof e.length == "number" && typeof e != "function";
function jn(e) {
  return v(e?.then);
}
function Bn(e) {
  return v(e[Et]);
}
function Hn(e) {
  return Symbol.asyncIterator && v(e?.[Symbol.asyncIterator]);
}
function $n(e) {
  return new TypeError(
    `You provided ${
      e !== null && typeof e == "object" ? "an invalid object" : `'${e}'`
    } where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`,
  );
}
function Bd() {
  return typeof Symbol != "function" || !Symbol.iterator
    ? "@@iterator"
    : Symbol.iterator;
}
var Un = Bd();
function zn(e) {
  return v(e?.[Un]);
}
function Gn(e) {
  return ha(this, arguments, function* () {
    let n = e.getReader();
    try {
      for (;;) {
        let { value: r, done: o } = yield Ge(n.read());
        if (o) return yield Ge(void 0);
        yield yield Ge(r);
      }
    } finally {
      n.releaseLock();
    }
  });
}
function Wn(e) {
  return v(e?.getReader);
}
function x(e) {
  if (e instanceof T) return e;
  if (e != null) {
    if (Bn(e)) return Hd(e);
    if (Vn(e)) return $d(e);
    if (jn(e)) return Ud(e);
    if (Hn(e)) return ma(e);
    if (zn(e)) return zd(e);
    if (Wn(e)) return Gd(e);
  }
  throw $n(e);
}
function Hd(e) {
  return new T((t) => {
    let n = e[Et]();
    if (v(n.subscribe)) return n.subscribe(t);
    throw new TypeError(
      "Provided object does not correctly implement Symbol.observable",
    );
  });
}
function $d(e) {
  return new T((t) => {
    for (let n = 0; n < e.length && !t.closed; n++) t.next(e[n]);
    t.complete();
  });
}
function Ud(e) {
  return new T((t) => {
    e.then((n) => {
      t.closed || (t.next(n), t.complete());
    }, (n) => t.error(n)).then(null, Nn);
  });
}
function zd(e) {
  return new T((t) => {
    for (let n of e) if (t.next(n), t.closed) return;
    t.complete();
  });
}
function ma(e) {
  return new T((t) => {
    Wd(e, t).catch((n) => t.error(n));
  });
}
function Gd(e) {
  return ma(Gn(e));
}
function Wd(e, t) {
  var n, r, o, i;
  return pa(this, void 0, void 0, function* () {
    try {
      for (n = ga(e); r = yield n.next(), !r.done;) {
        let s = r.value;
        if (t.next(s), t.closed) return;
      }
    } catch (s) {
      o = { error: s };
    } finally {
      try {
        r && !r.done && (i = n.return) && (yield i.call(n));
      } finally {
        if (o) throw o.error;
      }
    }
    t.complete();
  });
}
function Z(e, t, n, r = 0, o = !1) {
  let i = t.schedule(function () {
    n(), o ? e.add(this.schedule(null, r)) : this.unsubscribe();
  }, r);
  if (e.add(i), !o) return i;
}
function qn(e, t = 0) {
  return y((n, r) => {
    n.subscribe(
      m(
        r,
        (o) => Z(r, e, () => r.next(o), t),
        () => Z(r, e, () => r.complete(), t),
        (o) => Z(r, e, () => r.error(o), t),
      ),
    );
  });
}
function Zn(e, t = 0) {
  return y((n, r) => {
    r.add(e.schedule(() => n.subscribe(r), t));
  });
}
function ya(e, t) {
  return x(e).pipe(Zn(t), qn(t));
}
function va(e, t) {
  return x(e).pipe(Zn(t), qn(t));
}
function Da(e, t) {
  return new T((n) => {
    let r = 0;
    return t.schedule(function () {
      r === e.length
        ? n.complete()
        : (n.next(e[r++]), n.closed || this.schedule());
    });
  });
}
function Ea(e, t) {
  return new T((n) => {
    let r;
    return Z(n, t, () => {
      r = e[Un](),
        Z(
          n,
          t,
          () => {
            let o, i;
            try {
              ({ value: o, done: i } = r.next());
            } catch (s) {
              n.error(s);
              return;
            }
            i ? n.complete() : n.next(o);
          },
          0,
          !0,
        );
    }),
      () => v(r?.return) && r.return();
  });
}
function Qn(e, t) {
  if (!e) throw new Error("Iterable cannot be null");
  return new T((n) => {
    Z(n, t, () => {
      let r = e[Symbol.asyncIterator]();
      Z(
        n,
        t,
        () => {
          r.next().then((o) => {
            o.done ? n.complete() : n.next(o.value);
          });
        },
        0,
        !0,
      );
    });
  });
}
function Ia(e, t) {
  return Qn(Gn(e), t);
}
function wa(e, t) {
  if (e != null) {
    if (Bn(e)) return ya(e, t);
    if (Vn(e)) return Da(e, t);
    if (jn(e)) return va(e, t);
    if (Hn(e)) return Qn(e, t);
    if (zn(e)) return Ea(e, t);
    if (Wn(e)) return Ia(e, t);
  }
  throw $n(e);
}
function he(e, t) {
  return t ? wa(e, t) : x(e);
}
function qd(...e) {
  let t = pe(e);
  return he(e, t);
}
function Zd(e, t) {
  let n = v(e) ? e : () => e, r = (o) => o.error(n());
  return new T(t ? (o) => t.schedule(r, 0, o) : r);
}
function Qd(e) {
  return !!e && (e instanceof T || v(e.lift) && v(e.subscribe));
}
var We = yt((e) =>
  function () {
    e(this), this.name = "EmptyError", this.message = "no elements in sequence";
  }
);
function Ca(e) {
  return e instanceof Date && !isNaN(e);
}
function qe(e, t) {
  return y((n, r) => {
    let o = 0;
    n.subscribe(m(r, (i) => {
      r.next(e.call(t, i, o++));
    }));
  });
}
var { isArray: Yd } = Array;
function Kd(e, t) {
  return Yd(t) ? e(...t) : e(t);
}
function Yn(e) {
  return qe((t) => Kd(e, t));
}
var { isArray: Jd } = Array,
  { getPrototypeOf: Xd, prototype: ef, keys: tf } = Object;
function Kn(e) {
  if (e.length === 1) {
    let t = e[0];
    if (Jd(t)) return { args: t, keys: null };
    if (nf(t)) {
      let n = tf(t);
      return { args: n.map((r) => t[r]), keys: n };
    }
  }
  return { args: e, keys: null };
}
function nf(e) {
  return e && typeof e == "object" && Xd(e) === ef;
}
function Jn(e, t) {
  return e.reduce((n, r, o) => (n[r] = t[o], n), {});
}
function rf(...e) {
  let t = pe(e), n = Ln(e), { args: r, keys: o } = Kn(e);
  if (r.length === 0) return he([], t);
  let i = new T(of(r, t, o ? (s) => Jn(o, s) : $));
  return n ? i.pipe(Yn(n)) : i;
}
function of(e, t, n = $) {
  return (r) => {
    ba(t, () => {
      let { length: o } = e, i = new Array(o), s = o, a = o;
      for (let u = 0; u < o; u++) {
        ba(t, () => {
          let c = he(e[u], t), l = !1;
          c.subscribe(m(r, (d) => {
            i[u] = d, l || (l = !0, a--), a || r.next(n(i.slice()));
          }, () => {
            --s || r.complete();
          }));
        }, r);
      }
    }, r);
  };
}
function ba(e, t, n) {
  e ? Z(n, e, t) : t();
}
function _a(e, t, n, r, o, i, s, a) {
  let u = [],
    c = 0,
    l = 0,
    d = !1,
    p = () => {
      d && !u.length && !c && t.complete();
    },
    f = (w) => c < r ? h(w) : u.push(w),
    h = (w) => {
      i && t.next(w), c++;
      let F = !1;
      x(n(w, l++)).subscribe(m(
        t,
        (S) => {
          o?.(S), i ? f(S) : t.next(S);
        },
        () => {
          F = !0;
        },
        void 0,
        () => {
          if (F) {
            try {
              for (c--; u.length && c < r;) {
                let S = u.shift();
                s ? Z(t, s, () => h(S)) : h(S);
              }
              p();
            } catch (S) {
              t.error(S);
            }
          }
        },
      ));
    };
  return e.subscribe(m(t, f, () => {
    d = !0, p();
  })),
    () => {
      a?.();
    };
}
function Ze(e, t, n = 1 / 0) {
  return v(t)
    ? Ze((r, o) => qe((i, s) => t(r, i, o, s))(x(e(r, o))), n)
    : (typeof t == "number" && (n = t), y((r, o) => _a(r, o, e, n)));
}
function Xn(e = 1 / 0) {
  return Ze($, e);
}
function Ma() {
  return Xn(1);
}
function er(...e) {
  return Ma()(he(e, pe(e)));
}
function sf(e) {
  return new T((t) => {
    x(e()).subscribe(t);
  });
}
function af(...e) {
  let t = Ln(e),
    { args: n, keys: r } = Kn(e),
    o = new T((i) => {
      let { length: s } = n;
      if (!s) {
        i.complete();
        return;
      }
      let a = new Array(s), u = s, c = s;
      for (let l = 0; l < s; l++) {
        let d = !1;
        x(n[l]).subscribe(m(
          i,
          (p) => {
            d || (d = !0, c--), a[l] = p;
          },
          () => u--,
          void 0,
          () => {
            (!u || !d) && (c || i.next(r ? Jn(r, a) : a), i.complete());
          },
        ));
      }
    });
  return t ? o.pipe(Yn(t)) : o;
}
function Ta(e = 0, t, n = la) {
  let r = -1;
  return t != null && (Pn(t) ? n = t : r = t),
    new T((o) => {
      let i = Ca(e) ? +e - n.now() : e;
      i < 0 && (i = 0);
      let s = 0;
      return n.schedule(function () {
        o.closed ||
          (o.next(s++), 0 <= r ? this.schedule(void 0, r) : o.complete());
      }, i);
    });
}
function uf(...e) {
  let t = pe(e), n = da(e, 1 / 0), r = e;
  return r.length ? r.length === 1 ? x(r[0]) : Xn(n)(he(r, t)) : ze;
}
function Qe(e, t) {
  return y((n, r) => {
    let o = 0;
    n.subscribe(m(r, (i) => e.call(t, i, o++) && r.next(i)));
  });
}
function Sa(e) {
  return y((t, n) => {
    let r = !1,
      o = null,
      i = null,
      s = !1,
      a = () => {
        if (i?.unsubscribe(), i = null, r) {
          r = !1;
          let c = o;
          o = null, n.next(c);
        }
        s && n.complete();
      },
      u = () => {
        i = null, s && n.complete();
      };
    t.subscribe(m(n, (c) => {
      r = !0, o = c, i || x(e(c)).subscribe(i = m(n, a, u));
    }, () => {
      s = !0, (!r || !i || i.closed) && n.complete();
    }));
  });
}
function cf(e, t = Qt) {
  return Sa(() => Ta(e, t));
}
function Na(e) {
  return y((t, n) => {
    let r = null, o = !1, i;
    r = t.subscribe(m(n, void 0, void 0, (s) => {
      i = x(e(s, Na(e)(t))),
        r ? (r.unsubscribe(), r = null, i.subscribe(n)) : o = !0;
    })), o && (r.unsubscribe(), r = null, i.subscribe(n));
  });
}
function xa(e, t, n, r, o) {
  return (i, s) => {
    let a = n, u = t, c = 0;
    i.subscribe(m(
      s,
      (l) => {
        let d = c++;
        u = a ? e(u, l, d) : (a = !0, l), r && s.next(u);
      },
      o && (() => {
        a && s.next(u), s.complete();
      }),
    ));
  };
}
function lf(e, t) {
  return v(t) ? Ze(e, t, 1) : Ze(e, 1);
}
function df(e, t = Qt) {
  return y((n, r) => {
    let o = null,
      i = null,
      s = null,
      a = () => {
        if (o) {
          o.unsubscribe(), o = null;
          let c = i;
          i = null, r.next(c);
        }
      };
    function u() {
      let c = s + e, l = t.now();
      if (l < c) {
        o = this.schedule(void 0, c - l), r.add(o);
        return;
      }
      a();
    }
    n.subscribe(m(
      r,
      (c) => {
        i = c, s = t.now(), o || (o = t.schedule(u, e), r.add(o));
      },
      () => {
        a(), r.complete();
      },
      void 0,
      () => {
        i = o = null;
      },
    ));
  });
}
function Yt(e) {
  return y((t, n) => {
    let r = !1;
    t.subscribe(m(n, (o) => {
      r = !0, n.next(o);
    }, () => {
      r || n.next(e), n.complete();
    }));
  });
}
function Mo(e) {
  return e <= 0 ? () => ze : y((t, n) => {
    let r = 0;
    t.subscribe(m(n, (o) => {
      ++r <= e && (n.next(o), e <= r && n.complete());
    }));
  });
}
function ff(e, t = $) {
  return e = e ?? pf,
    y((n, r) => {
      let o, i = !0;
      n.subscribe(m(r, (s) => {
        let a = t(s);
        (i || !e(o, a)) && (i = !1, o = a, r.next(s));
      }));
    });
}
function pf(e, t) {
  return e === t;
}
function tr(e = hf) {
  return y((t, n) => {
    let r = !1;
    t.subscribe(m(n, (o) => {
      r = !0, n.next(o);
    }, () => r ? n.complete() : n.error(e())));
  });
}
function hf() {
  return new We();
}
function gf(e) {
  return y((t, n) => {
    try {
      t.subscribe(n);
    } finally {
      n.add(e);
    }
  });
}
function mf(e, t) {
  let n = arguments.length >= 2;
  return (r) =>
    r.pipe(
      e ? Qe((o, i) => e(o, i, r)) : $,
      Mo(1),
      n ? Yt(t) : tr(() => new We()),
    );
}
function To(e) {
  return e <= 0 ? () => ze : y((t, n) => {
    let r = [];
    t.subscribe(m(
      n,
      (o) => {
        r.push(o), e < r.length && r.shift();
      },
      () => {
        for (let o of r) n.next(o);
        n.complete();
      },
      void 0,
      () => {
        r = null;
      },
    ));
  });
}
function yf(e, t) {
  let n = arguments.length >= 2;
  return (r) =>
    r.pipe(
      e ? Qe((o, i) => e(o, i, r)) : $,
      To(1),
      n ? Yt(t) : tr(() => new We()),
    );
}
function vf() {
  return y((e, t) => {
    let n, r = !1;
    e.subscribe(m(t, (o) => {
      let i = n;
      n = o, r && t.next([i, o]), r = !0;
    }));
  });
}
function Df(e, t) {
  return y(xa(e, t, arguments.length >= 2, !0));
}
function No(e = {}) {
  let {
    connector: t = () => new q(),
    resetOnError: n = !0,
    resetOnComplete: r = !0,
    resetOnRefCountZero: o = !0,
  } = e;
  return (i) => {
    let s,
      a,
      u,
      c = 0,
      l = !1,
      d = !1,
      p = () => {
        a?.unsubscribe(), a = void 0;
      },
      f = () => {
        p(), s = u = void 0, l = d = !1;
      },
      h = () => {
        let w = s;
        f(), w?.unsubscribe();
      };
    return y((w, F) => {
      c++, !d && !l && p();
      let S = u = u ?? t();
      F.add(() => {
        c--, c === 0 && !d && !l && (a = So(h, o));
      }),
        S.subscribe(F),
        !s && c > 0 && (s = new Ie({
          next: (j) => S.next(j),
          error: (j) => {
            d = !0, p(), a = So(f, n, j), S.error(j);
          },
          complete: () => {
            l = !0, p(), a = So(f, r), S.complete();
          },
        }),
          x(w).subscribe(s));
    })(i);
  };
}
function So(e, t, ...n) {
  if (t === !0) {
    e();
    return;
  }
  if (t === !1) return;
  let r = new Ie({
    next: () => {
      r.unsubscribe(), e();
    },
  });
  return x(t(...n)).subscribe(r);
}
function Ef(e, t, n) {
  let r, o = !1;
  return e && typeof e == "object"
    ? {
      bufferSize: r = 1 / 0,
      windowTime: t = 1 / 0,
      refCount: o = !1,
      scheduler: n,
    } = e
    : r = e ?? 1 / 0,
    No({
      connector: () => new On(r, t, n),
      resetOnError: !0,
      resetOnComplete: !1,
      resetOnRefCountZero: o,
    });
}
function If(e) {
  return Qe((t, n) => e <= n);
}
function wf(...e) {
  let t = pe(e);
  return y((n, r) => {
    (t ? er(e, n, t) : er(e, n)).subscribe(r);
  });
}
function Cf(e, t) {
  return y((n, r) => {
    let o = null, i = 0, s = !1, a = () => s && !o && r.complete();
    n.subscribe(m(r, (u) => {
      o?.unsubscribe();
      let c = 0, l = i++;
      x(e(u, l)).subscribe(
        o = m(r, (d) => r.next(t ? t(u, d, l, c++) : d), () => {
          o = null, a();
        }),
      );
    }, () => {
      s = !0, a();
    }));
  });
}
function bf(e) {
  return y((t, n) => {
    x(e).subscribe(m(n, () => n.complete(), Gt)), !n.closed && t.subscribe(n);
  });
}
function _f(e, t, n) {
  let r = v(e) || t || n ? { next: e, error: t, complete: n } : e;
  return r
    ? y((o, i) => {
      var s;
      (s = r.subscribe) === null || s === void 0 || s.call(r);
      let a = !0;
      o.subscribe(m(i, (u) => {
        var c;
        (c = r.next) === null || c === void 0 || c.call(r, u), i.next(u);
      }, () => {
        var u;
        a = !1,
          (u = r.complete) === null || u === void 0 || u.call(r),
          i.complete();
      }, (u) => {
        var c;
        a = !1,
          (c = r.error) === null || c === void 0 || c.call(r, u),
          i.error(u);
      }, () => {
        var u, c;
        a && ((u = r.unsubscribe) === null || u === void 0 || u.call(r)),
          (c = r.finalize) === null || c === void 0 || c.call(r);
      }));
    })
    : $;
}
var Du = "https://g.co/ng/security#xss",
  M = class extends Error {
    code;
    constructor(t, n) {
      super(Eu(t, n)), this.code = t;
    }
  };
function Eu(e, t) {
  return `${`NG0${Math.abs(e)}`}${t ? ": " + t : ""}`;
}
var Iu = Symbol("InputSignalNode#UNSET"),
  Tf = W(G({}, ho), {
    transformFn: void 0,
    applyValueToInputSignal(e, t) {
      Mn(e, t);
    },
  });
function wu(e, t) {
  let n = Object.create(Tf);
  n.value = e, n.transformFn = t?.transform;
  function r() {
    if (Cn(n), n.value === Iu) throw new M(-950, !1);
    return n.value;
  }
  return r[B] = n, r;
}
function dn(e) {
  return { toString: e }.toString();
}
var nr = "__parameters__";
function Sf(e) {
  return function (...n) {
    if (e) {
      let r = e(...n);
      for (let o in r) this[o] = r[o];
    }
  };
}
function Cu(e, t, n) {
  return dn(() => {
    let r = Sf(t);
    function o(...i) {
      if (this instanceof o) return r.apply(this, i), this;
      let s = new o(...i);
      return a.annotation = s, a;
      function a(u, c, l) {
        let d = u.hasOwnProperty(nr)
          ? u[nr]
          : Object.defineProperty(u, nr, { value: [] })[nr];
        for (; d.length <= l;) d.push(null);
        return (d[l] = d[l] || []).push(s), u;
      }
    }
    return n && (o.prototype = Object.create(n.prototype)),
      o.prototype.ngMetadataName = e,
      o.annotationCls = o,
      o;
  });
}
var Aa = globalThis;
function A(e) {
  for (let t in e) if (e[t] === A) return t;
  throw Error("Could not find renamed property on target object.");
}
function Nf(e, t) {
  for (let n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
}
function Q(e) {
  if (typeof e == "string") return e;
  if (Array.isArray(e)) return "[" + e.map(Q).join(", ") + "]";
  if (e == null) return "" + e;
  if (e.overriddenName) return `${e.overriddenName}`;
  if (e.name) return `${e.name}`;
  let t = e.toString();
  if (t == null) return "" + t;
  let n = t.indexOf(`
`);
  return n === -1 ? t : t.substring(0, n);
}
function Ho(e, t) {
  return e == null || e === ""
    ? t === null ? "" : t
    : t == null || t === ""
    ? e
    : e + " " + t;
}
var xf = A({ __forward_ref__: A });
function bu(e) {
  return e.__forward_ref__ = bu,
    e.toString = function () {
      return Q(this());
    },
    e;
}
function U(e) {
  return _u(e) ? e() : e;
}
function _u(e) {
  return typeof e == "function" && e.hasOwnProperty(xf) &&
    e.__forward_ref__ === bu;
}
function O(e) {
  return {
    token: e.token,
    providedIn: e.providedIn || null,
    factory: e.factory,
    value: void 0,
  };
}
function Mu(e) {
  return { providers: e.providers || [], imports: e.imports || [] };
}
function Ur(e) {
  return Oa(e, Tu) || Oa(e, Su);
}
function eM(e) {
  return Ur(e) !== null;
}
function Oa(e, t) {
  return e.hasOwnProperty(t) ? e[t] : null;
}
function Af(e) {
  let t = e && (e[Tu] || e[Su]);
  return t || null;
}
function Ra(e) {
  return e && (e.hasOwnProperty(Fa) || e.hasOwnProperty(Of)) ? e[Fa] : null;
}
var Tu = A({ ɵprov: A }),
  Fa = A({ ɵinj: A }),
  Su = A({ ngInjectableDef: A }),
  Of = A({ ngInjectorDef: A }),
  N = class {
    _desc;
    ngMetadataName = "InjectionToken";
    ɵprov;
    constructor(t, n) {
      this._desc = t,
        this.ɵprov = void 0,
        typeof n == "number" ? this.__NG_ELEMENT_ID__ = n : n !== void 0 &&
          (this.ɵprov = O({
            token: this,
            providedIn: n.providedIn || "root",
            factory: n.factory,
          }));
    }
    get multi() {
      return this;
    }
    toString() {
      return `InjectionToken ${this._desc}`;
    }
  };
function Nu(e) {
  return e && !!e.ɵproviders;
}
var Rf = A({ ɵcmp: A }),
  Ff = A({ ɵdir: A }),
  kf = A({ ɵpipe: A }),
  Pf = A({ ɵmod: A }),
  hr = A({ ɵfac: A }),
  en = A({ __NG_ELEMENT_ID__: A }),
  ka = A({ __NG_ENV_ID__: A });
function Zi(e) {
  return typeof e == "string" ? e : e == null ? "" : String(e);
}
function Lf(e) {
  return typeof e == "function"
    ? e.name || e.toString()
    : typeof e == "object" && e != null && typeof e.type == "function"
    ? e.type.name || e.type.toString()
    : Zi(e);
}
function Vf(e, t) {
  let n = t ? `. Dependency path: ${t.join(" > ")} > ${e}` : "";
  throw new M(-200, e);
}
function Qi(e, t) {
  throw new M(-201, !1);
}
var b = function (e) {
    return e[e.Default = 0] = "Default",
      e[e.Host = 1] = "Host",
      e[e.Self = 2] = "Self",
      e[e.SkipSelf = 4] = "SkipSelf",
      e[e.Optional = 8] = "Optional",
      e;
  }(b || {}),
  $o;
function xu() {
  return $o;
}
function re(e) {
  let t = $o;
  return $o = e, t;
}
function Au(e, t, n) {
  let r = Ur(e);
  if (r && r.providedIn == "root") {
    return r.value === void 0 ? r.value = r.factory() : r.value;
  }
  if (n & b.Optional) return null;
  if (t !== void 0) return t;
  Qi(e, "Injector");
}
var jf = {},
  tn = jf,
  Uo = "__NG_DI_FLAG__",
  gr = "ngTempTokenPath",
  Bf = "ngTokenPath",
  Hf = /\n/gm,
  $f = "\u0275",
  Pa = "__source",
  Mt;
function Uf() {
  return Mt;
}
function Ne(e) {
  let t = Mt;
  return Mt = e, t;
}
function zf(e, t = b.Default) {
  if (Mt === void 0) throw new M(-203, !1);
  return Mt === null
    ? Au(e, void 0, t)
    : Mt.get(e, t & b.Optional ? null : void 0, t);
}
function K(e, t = b.Default) {
  return (xu() || zf)(U(e), t);
}
function D(e, t = b.Default) {
  return K(e, zr(t));
}
function zr(e) {
  return typeof e > "u" || typeof e == "number"
    ? e
    : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4);
}
function zo(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let r = U(e[n]);
    if (Array.isArray(r)) {
      if (r.length === 0) throw new M(900, !1);
      let o, i = b.Default;
      for (let s = 0; s < r.length; s++) {
        let a = r[s], u = Gf(a);
        typeof u == "number" ? u === -1 ? o = a.token : i |= u : o = a;
      }
      t.push(K(o, i));
    } else t.push(K(r));
  }
  return t;
}
function Ou(e, t) {
  return e[Uo] = t, e.prototype[Uo] = t, e;
}
function Gf(e) {
  return e[Uo];
}
function Wf(e, t, n, r) {
  let o = e[gr];
  throw t[Pa] && o.unshift(t[Pa]),
    e.message = qf(
      `
` + e.message,
      o,
      n,
      r,
    ),
    e[Bf] = o,
    e[gr] = null,
    e;
}
function qf(e, t, n, r = null) {
  e = e && e.charAt(0) === `
` &&
      e.charAt(1) == $f
    ? e.slice(2)
    : e;
  let o = Q(t);
  if (Array.isArray(t)) o = t.map(Q).join(" -> ");
  else if (typeof t == "object") {
    let i = [];
    for (let s in t) {
      if (t.hasOwnProperty(s)) {
        let a = t[s];
        i.push(s + ":" + (typeof a == "string" ? JSON.stringify(a) : Q(a)));
      }
    }
    o = `{${i.join(", ")}}`;
  }
  return `${n}${r ? "(" + r + ")" : ""}[${o}]: ${
    e.replace(
      Hf,
      `
  `,
    )
  }`;
}
var Zf = Ou(Cu("Optional"), 8);
var Qf = Ou(Cu("SkipSelf"), 4);
function St(e, t) {
  let n = e.hasOwnProperty(hr);
  return n ? e[hr] : null;
}
function Yf(e, t, n) {
  if (e.length !== t.length) return !1;
  for (let r = 0; r < e.length; r++) {
    let o = e[r], i = t[r];
    if (n && (o = n(o), i = n(i)), i !== o) return !1;
  }
  return !0;
}
function Kf(e) {
  return e.flat(Number.POSITIVE_INFINITY);
}
function Yi(e, t) {
  e.forEach((n) => Array.isArray(n) ? Yi(n, t) : t(n));
}
function Ru(e, t, n) {
  t >= e.length ? e.push(n) : e.splice(t, 0, n);
}
function mr(e, t) {
  return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
}
function Jf(e, t) {
  let n = [];
  for (let r = 0; r < e; r++) n.push(t);
  return n;
}
function Xf(e, t, n, r) {
  let o = e.length;
  if (o == t) e.push(n, r);
  else if (o === 1) e.push(r, e[0]), e[0] = n;
  else {
    for (o--, e.push(e[o - 1], e[o]); o > t;) {
      let i = o - 2;
      e[o] = e[i], o--;
    }
    e[t] = n, e[t + 1] = r;
  }
}
function Ki(e, t, n) {
  let r = fn(e, t);
  return r >= 0 ? e[r | 1] = n : (r = ~r, Xf(e, r, t, n)), r;
}
function xo(e, t) {
  let n = fn(e, t);
  if (n >= 0) return e[n | 1];
}
function fn(e, t) {
  return ep(e, t, 1);
}
function ep(e, t, n) {
  let r = 0, o = e.length >> n;
  for (; o !== r;) {
    let i = r + (o - r >> 1), s = e[i << n];
    if (t === s) return i << n;
    s > t ? o = i : r = i + 1;
  }
  return ~(o << n);
}
var Nt = {},
  z = [],
  yr = new N(""),
  Fu = new N("", -1),
  ku = new N(""),
  vr = class {
    get(t, n = tn) {
      if (n === tn) {
        let r = new Error(`NullInjectorError: No provider for ${Q(t)}!`);
        throw r.name = "NullInjectorError", r;
      }
      return n;
    }
  };
function Pu(e, t) {
  let n = e[Pf] || null;
  if (!n && t === !0) {
    throw new Error(`Type ${Q(e)} does not have '\u0275mod' property.`);
  }
  return n;
}
function Re(e) {
  return e[Rf] || null;
}
function Lu(e) {
  return e[Ff] || null;
}
function Vu(e) {
  return e[kf] || null;
}
function tp(e) {
  let t = Re(e) || Lu(e) || Vu(e);
  return t !== null && t.standalone;
}
function np(e) {
  return { ɵproviders: e };
}
function rp(...e) {
  return { ɵproviders: ju(!0, e), ɵfromNgModule: !0 };
}
function ju(e, ...t) {
  let n = [],
    r = new Set(),
    o,
    i = (s) => {
      n.push(s);
    };
  return Yi(t, (s) => {
    let a = s;
    Go(a, i, [], r) && (o ||= [], o.push(a));
  }),
    o !== void 0 && Bu(o, i),
    n;
}
function Bu(e, t) {
  for (let n = 0; n < e.length; n++) {
    let { ngModule: r, providers: o } = e[n];
    Ji(o, (i) => {
      t(i, r);
    });
  }
}
function Go(e, t, n, r) {
  if (e = U(e), !e) return !1;
  let o = null, i = Ra(e), s = !i && Re(e);
  if (!i && !s) {
    let u = e.ngModule;
    if (i = Ra(u), i) o = u;
    else return !1;
  } else {
    if (s && !s.standalone) return !1;
    o = e;
  }
  let a = r.has(o);
  if (s) {
    if (a) return !1;
    if (r.add(o), s.dependencies) {
      let u = typeof s.dependencies == "function"
        ? s.dependencies()
        : s.dependencies;
      for (let c of u) Go(c, t, n, r);
    }
  } else if (i) {
    if (i.imports != null && !a) {
      r.add(o);
      let c;
      try {
        Yi(i.imports, (l) => {
          Go(l, t, n, r) && (c ||= [], c.push(l));
        });
      } finally {
      }
      c !== void 0 && Bu(c, t);
    }
    if (!a) {
      let c = St(o) || (() => new o());
      t({ provide: o, useFactory: c, deps: z }, o),
        t({ provide: ku, useValue: o, multi: !0 }, o),
        t({ provide: yr, useValue: () => K(o), multi: !0 }, o);
    }
    let u = i.providers;
    if (u != null && !a) {
      let c = e;
      Ji(u, (l) => {
        t(l, c);
      });
    }
  } else return !1;
  return o !== e && e.providers !== void 0;
}
function Ji(e, t) {
  for (let n of e) {
    Nu(n) && (n = n.ɵproviders), Array.isArray(n) ? Ji(n, t) : t(n);
  }
}
var op = A({ provide: String, useValue: A });
function Hu(e) {
  return e !== null && typeof e == "object" && op in e;
}
function ip(e) {
  return !!(e && e.useExisting);
}
function sp(e) {
  return !!(e && e.useFactory);
}
function xt(e) {
  return typeof e == "function";
}
function ap(e) {
  return !!e.useClass;
}
var $u = new N(""), ar = {}, up = {}, Ao;
function Gr() {
  return Ao === void 0 && (Ao = new vr()), Ao;
}
var Fe = class {},
  nn = class extends Fe {
    parent;
    source;
    scopes;
    records = new Map();
    _ngOnDestroyHooks = new Set();
    _onDestroyHooks = [];
    get destroyed() {
      return this._destroyed;
    }
    _destroyed = !1;
    injectorDefTypes;
    constructor(t, n, r, o) {
      super(),
        this.parent = n,
        this.source = r,
        this.scopes = o,
        qo(t, (s) => this.processProvider(s)),
        this.records.set(Fu, wt(void 0, this)),
        o.has("environment") && this.records.set(Fe, wt(void 0, this));
      let i = this.records.get($u);
      i != null && typeof i.value == "string" && this.scopes.add(i.value),
        this.injectorDefTypes = new Set(this.get(ku, z, b.Self));
    }
    destroy() {
      Jt(this), this._destroyed = !0;
      let t = _(null);
      try {
        for (let r of this._ngOnDestroyHooks) r.ngOnDestroy();
        let n = this._onDestroyHooks;
        this._onDestroyHooks = [];
        for (let r of n) r();
      } finally {
        this.records.clear(),
          this._ngOnDestroyHooks.clear(),
          this.injectorDefTypes.clear(),
          _(t);
      }
    }
    onDestroy(t) {
      return Jt(this),
        this._onDestroyHooks.push(t),
        () => this.removeOnDestroy(t);
    }
    runInContext(t) {
      Jt(this);
      let n = Ne(this), r = re(void 0), o;
      try {
        return t();
      } finally {
        Ne(n), re(r);
      }
    }
    get(t, n = tn, r = b.Default) {
      if (Jt(this), t.hasOwnProperty(ka)) return t[ka](this);
      r = zr(r);
      let o, i = Ne(this), s = re(void 0);
      try {
        if (!(r & b.SkipSelf)) {
          let u = this.records.get(t);
          if (u === void 0) {
            let c = pp(t) && Ur(t);
            c && this.injectableDefInScope(c) ? u = wt(Wo(t), ar) : u = null,
              this.records.set(t, u);
          }
          if (u != null) return this.hydrate(t, u);
        }
        let a = r & b.Self ? Gr() : this.parent;
        return n = r & b.Optional && n === tn ? null : n, a.get(t, n);
      } catch (a) {
        if (a.name === "NullInjectorError") {
          if ((a[gr] = a[gr] || []).unshift(Q(t)), i) throw a;
          return Wf(a, t, "R3InjectorError", this.source);
        } else throw a;
      } finally {
        re(s), Ne(i);
      }
    }
    resolveInjectorInitializers() {
      let t = _(null), n = Ne(this), r = re(void 0), o;
      try {
        let i = this.get(yr, z, b.Self);
        for (let s of i) s();
      } finally {
        Ne(n), re(r), _(t);
      }
    }
    toString() {
      let t = [], n = this.records;
      for (let r of n.keys()) t.push(Q(r));
      return `R3Injector[${t.join(", ")}]`;
    }
    processProvider(t) {
      t = U(t);
      let n = xt(t) ? t : U(t && t.provide), r = lp(t);
      if (!xt(t) && t.multi === !0) {
        let o = this.records.get(n);
        o ||
        (o = wt(void 0, ar, !0),
          o.factory = () => zo(o.multi),
          this.records.set(n, o)),
          n = t,
          o.multi.push(t);
      }
      this.records.set(n, r);
    }
    hydrate(t, n) {
      let r = _(null);
      try {
        return n.value === ar && (n.value = up, n.value = n.factory()),
          typeof n.value == "object" && n.value && fp(n.value) &&
          this._ngOnDestroyHooks.add(n.value),
          n.value;
      } finally {
        _(r);
      }
    }
    injectableDefInScope(t) {
      if (!t.providedIn) return !1;
      let n = U(t.providedIn);
      return typeof n == "string"
        ? n === "any" || this.scopes.has(n)
        : this.injectorDefTypes.has(n);
    }
    removeOnDestroy(t) {
      let n = this._onDestroyHooks.indexOf(t);
      n !== -1 && this._onDestroyHooks.splice(n, 1);
    }
  };
function Wo(e) {
  let t = Ur(e), n = t !== null ? t.factory : St(e);
  if (n !== null) return n;
  if (e instanceof N) throw new M(204, !1);
  if (e instanceof Function) return cp(e);
  throw new M(204, !1);
}
function cp(e) {
  if (e.length > 0) throw new M(204, !1);
  let n = Af(e);
  return n !== null ? () => n.factory(e) : () => new e();
}
function lp(e) {
  if (Hu(e)) return wt(void 0, e.useValue);
  {
    let t = Uu(e);
    return wt(t, ar);
  }
}
function Uu(e, t, n) {
  let r;
  if (xt(e)) {
    let o = U(e);
    return St(o) || Wo(o);
  } else if (Hu(e)) r = () => U(e.useValue);
  else if (sp(e)) r = () => e.useFactory(...zo(e.deps || []));
  else if (ip(e)) r = () => K(U(e.useExisting));
  else {
    let o = U(e && (e.useClass || e.provide));
    if (dp(e)) r = () => new o(...zo(e.deps));
    else return St(o) || Wo(o);
  }
  return r;
}
function Jt(e) {
  if (e.destroyed) throw new M(205, !1);
}
function wt(e, t, n = !1) {
  return { factory: e, value: t, multi: n ? [] : void 0 };
}
function dp(e) {
  return !!e.deps;
}
function fp(e) {
  return e !== null && typeof e == "object" &&
    typeof e.ngOnDestroy == "function";
}
function pp(e) {
  return typeof e == "function" || typeof e == "object" && e instanceof N;
}
function qo(e, t) {
  for (let n of e) {
    Array.isArray(n) ? qo(n, t) : n && Nu(n) ? qo(n.ɵproviders, t) : t(n);
  }
}
function zu(e, t) {
  e instanceof nn && Jt(e);
  let n, r = Ne(e), o = re(void 0);
  try {
    return t();
  } finally {
    Ne(r), re(o);
  }
}
function Gu() {
  return xu() !== void 0 || Uf() != null;
}
function Wr(e) {
  if (!Gu()) throw new M(-203, !1);
}
function hp(e) {
  return typeof e == "function";
}
var ve = 0,
  E = 1,
  g = 2,
  H = 3,
  fe = 4,
  J = 5,
  rn = 6,
  Dr = 7,
  ie = 8,
  At = 9,
  ke = 10,
  R = 11,
  on = 12,
  La = 13,
  Lt = 14,
  se = 15,
  Ke = 16,
  Ct = 17,
  we = 18,
  qr = 19,
  Wu = 20,
  Ae = 21,
  ur = 22,
  Je = 23,
  ee = 24,
  ne = 25,
  Xi = 1;
var Xe = 7, Er = 8, Ot = 9, Y = 10;
function Oe(e) {
  return Array.isArray(e) && typeof e[Xi] == "object";
}
function _e(e) {
  return Array.isArray(e) && e[Xi] === !0;
}
function qu(e) {
  return (e.flags & 4) !== 0;
}
function Zr(e) {
  return e.componentOffset > -1;
}
function es(e) {
  return (e.flags & 1) === 1;
}
function Ce(e) {
  return !!e.template;
}
function Zo(e) {
  return (e[g] & 512) !== 0;
}
function pn(e) {
  return (e[g] & 256) === 256;
}
var Qo = class {
  previousValue;
  currentValue;
  firstChange;
  constructor(t, n, r) {
    this.previousValue = t, this.currentValue = n, this.firstChange = r;
  }
  isFirstChange() {
    return this.firstChange;
  }
};
function Zu(e, t, n, r) {
  t !== null ? t.applyValueToInputSignal(t, r) : e[n] = r;
}
var Qu = (() => {
  let e = () => Yu;
  return e.ngInherit = !0, e;
})();
function Yu(e) {
  return e.type.prototype.ngOnChanges && (e.setInput = mp), gp;
}
function gp() {
  let e = Ju(this), t = e?.current;
  if (t) {
    let n = e.previous;
    if (n === Nt) e.previous = t;
    else for (let r in t) n[r] = t[r];
    e.current = null, this.ngOnChanges(t);
  }
}
function mp(e, t, n, r, o) {
  let i = this.declaredInputs[r],
    s = Ju(e) || yp(e, { previous: Nt, current: null }),
    a = s.current || (s.current = {}),
    u = s.previous,
    c = u[i];
  a[i] = new Qo(c && c.currentValue, n, u === Nt), Zu(e, t, o, n);
}
var Ku = "__ngSimpleChanges__";
function Ju(e) {
  return e[Ku] || null;
}
function yp(e, t) {
  return e[Ku] = t;
}
var Va = null;
var oe = function (e, t, n) {
    Va?.(e, t, n);
  },
  Xu = "svg",
  vp = "math";
function me(e) {
  for (; Array.isArray(e);) e = e[ve];
  return e;
}
function Dp(e) {
  for (; Array.isArray(e);) {
    if (typeof e[Xi] == "object") return e;
    e = e[ve];
  }
  return null;
}
function ec(e, t) {
  return me(t[e]);
}
function ae(e, t) {
  return me(t[e.index]);
}
function ts(e, t) {
  return e.data[t];
}
function Ep(e, t) {
  return e[t];
}
function Ve(e, t) {
  let n = t[e];
  return Oe(n) ? n : n[ve];
}
function Ip(e) {
  return (e[g] & 4) === 4;
}
function ns(e) {
  return (e[g] & 128) === 128;
}
function wp(e) {
  return _e(e[H]);
}
function Ir(e, t) {
  return t == null ? null : e[t];
}
function tc(e) {
  e[Ct] = 0;
}
function rs(e) {
  e[g] & 1024 || (e[g] |= 1024, ns(e) && hn(e));
}
function Cp(e, t) {
  for (; e > 0;) t = t[Lt], e--;
  return t;
}
function Qr(e) {
  return !!(e[g] & 9216 || e[ee]?.dirty);
}
function Yo(e) {
  e[ke].changeDetectionScheduler?.notify(9),
    e[g] & 64 && (e[g] |= 1024),
    Qr(e) && hn(e);
}
function hn(e) {
  e[ke].changeDetectionScheduler?.notify(0);
  let t = et(e);
  for (; t !== null && !(t[g] & 8192 || (t[g] |= 8192, !ns(t)));) t = et(t);
}
function nc(e, t) {
  if (pn(e)) throw new M(911, !1);
  e[Ae] === null && (e[Ae] = []), e[Ae].push(t);
}
function bp(e, t) {
  if (e[Ae] === null) return;
  let n = e[Ae].indexOf(t);
  n !== -1 && e[Ae].splice(n, 1);
}
function et(e) {
  let t = e[H];
  return _e(t) ? t[H] : t;
}
function rc(e) {
  return e[Dr] ??= [];
}
function oc(e) {
  return e.cleanup ??= [];
}
function _p(e, t, n, r) {
  let o = rc(t);
  o.push(n), e.firstCreatePass && oc(e).push(r, o.length - 1);
}
var I = { lFrame: hc(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
var Ko = !1;
function Mp() {
  return I.lFrame.elementDepthCount;
}
function Tp() {
  I.lFrame.elementDepthCount++;
}
function Sp() {
  I.lFrame.elementDepthCount--;
}
function ic() {
  return I.bindingsEnabled;
}
function sc() {
  return I.skipHydrationRootTNode !== null;
}
function Np(e) {
  return I.skipHydrationRootTNode === e;
}
function xp() {
  I.skipHydrationRootTNode = null;
}
function C() {
  return I.lFrame.lView;
}
function k() {
  return I.lFrame.tView;
}
function tM(e) {
  return I.lFrame.contextLView = e, e[ie];
}
function nM(e) {
  return I.lFrame.contextLView = null, e;
}
function V() {
  let e = ac();
  for (; e !== null && e.type === 64;) e = e.parent;
  return e;
}
function ac() {
  return I.lFrame.currentTNode;
}
function Ap() {
  let e = I.lFrame, t = e.currentTNode;
  return e.isParent ? t : t.parent;
}
function gn(e, t) {
  let n = I.lFrame;
  n.currentTNode = e, n.isParent = t;
}
function uc() {
  return I.lFrame.isParent;
}
function cc() {
  I.lFrame.isParent = !1;
}
function Op() {
  return I.lFrame.contextLView;
}
function lc() {
  return Ko;
}
function wr(e) {
  let t = Ko;
  return Ko = e, t;
}
function Rp(e) {
  return I.lFrame.bindingIndex = e;
}
function ct() {
  return I.lFrame.bindingIndex++;
}
function dc(e) {
  let t = I.lFrame, n = t.bindingIndex;
  return t.bindingIndex = t.bindingIndex + e, n;
}
function Fp() {
  return I.lFrame.inI18n;
}
function kp(e, t) {
  let n = I.lFrame;
  n.bindingIndex = n.bindingRootIndex = e, Jo(t);
}
function Pp() {
  return I.lFrame.currentDirectiveIndex;
}
function Jo(e) {
  I.lFrame.currentDirectiveIndex = e;
}
function os(e) {
  let t = I.lFrame.currentDirectiveIndex;
  return t === -1 ? null : e[t];
}
function is() {
  return I.lFrame.currentQueryIndex;
}
function Yr(e) {
  I.lFrame.currentQueryIndex = e;
}
function Lp(e) {
  let t = e[E];
  return t.type === 2 ? t.declTNode : t.type === 1 ? e[J] : null;
}
function fc(e, t, n) {
  if (n & b.SkipSelf) {
    let o = t, i = e;
    for (; o = o.parent, o === null && !(n & b.Host);) {
      if (o = Lp(i), o === null || (i = i[Lt], o.type & 10)) break;
    }
    if (o === null) return !1;
    t = o, e = i;
  }
  let r = I.lFrame = pc();
  return r.currentTNode = t, r.lView = e, !0;
}
function ss(e) {
  let t = pc(), n = e[E];
  I.lFrame = t,
    t.currentTNode = n.firstChild,
    t.lView = e,
    t.tView = n,
    t.contextLView = e,
    t.bindingIndex = n.bindingStartIndex,
    t.inI18n = !1;
}
function pc() {
  let e = I.lFrame, t = e === null ? null : e.child;
  return t === null ? hc(e) : t;
}
function hc(e) {
  let t = {
    currentTNode: null,
    isParent: !0,
    lView: null,
    tView: null,
    selectedIndex: -1,
    contextLView: null,
    elementDepthCount: 0,
    currentNamespace: null,
    currentDirectiveIndex: -1,
    bindingRootIndex: -1,
    bindingIndex: -1,
    currentQueryIndex: 0,
    parent: e,
    child: null,
    inI18n: !1,
  };
  return e !== null && (e.child = t), t;
}
function gc() {
  let e = I.lFrame;
  return I.lFrame = e.parent, e.currentTNode = null, e.lView = null, e;
}
var mc = gc;
function as() {
  let e = gc();
  e.isParent = !0,
    e.tView = null,
    e.selectedIndex = -1,
    e.contextLView = null,
    e.elementDepthCount = 0,
    e.currentDirectiveIndex = -1,
    e.currentNamespace = null,
    e.bindingRootIndex = -1,
    e.bindingIndex = -1,
    e.currentQueryIndex = 0;
}
function Vp(e) {
  return (I.lFrame.contextLView = Cp(e, I.lFrame.contextLView))[ie];
}
function lt() {
  return I.lFrame.selectedIndex;
}
function tt(e) {
  I.lFrame.selectedIndex = e;
}
function mn() {
  let e = I.lFrame;
  return ts(e.tView, e.selectedIndex);
}
function rM() {
  I.lFrame.currentNamespace = Xu;
}
function oM() {
  jp();
}
function jp() {
  I.lFrame.currentNamespace = null;
}
function Bp() {
  return I.lFrame.currentNamespace;
}
var yc = !0;
function us() {
  return yc;
}
function cs(e) {
  yc = e;
}
function Hp(e, t, n) {
  let { ngOnChanges: r, ngOnInit: o, ngDoCheck: i } = t.type.prototype;
  if (r) {
    let s = Yu(t);
    (n.preOrderHooks ??= []).push(e, s),
      (n.preOrderCheckHooks ??= []).push(e, s);
  }
  o && (n.preOrderHooks ??= []).push(0 - e, o),
    i &&
    ((n.preOrderHooks ??= []).push(e, i),
      (n.preOrderCheckHooks ??= []).push(e, i));
}
function ls(e, t) {
  for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
    let i = e.data[n].type.prototype,
      {
        ngAfterContentInit: s,
        ngAfterContentChecked: a,
        ngAfterViewInit: u,
        ngAfterViewChecked: c,
        ngOnDestroy: l,
      } = i;
    s && (e.contentHooks ??= []).push(-n, s),
      a &&
      ((e.contentHooks ??= []).push(n, a),
        (e.contentCheckHooks ??= []).push(n, a)),
      u && (e.viewHooks ??= []).push(-n, u),
      c &&
      ((e.viewHooks ??= []).push(n, c), (e.viewCheckHooks ??= []).push(n, c)),
      l != null && (e.destroyHooks ??= []).push(n, l);
  }
}
function cr(e, t, n) {
  vc(e, t, 3, n);
}
function lr(e, t, n, r) {
  (e[g] & 3) === n && vc(e, t, n, r);
}
function Oo(e, t) {
  let n = e[g];
  (n & 3) === t && (n &= 16383, n += 1, e[g] = n);
}
function vc(e, t, n, r) {
  let o = r !== void 0 ? e[Ct] & 65535 : 0,
    i = r ?? -1,
    s = t.length - 1,
    a = 0;
  for (let u = o; u < s; u++) {
    if (typeof t[u + 1] == "number") {
      if (a = t[u], r != null && a >= r) break;
    } else {t[u] < 0 && (e[Ct] += 65536),
        (a < i || i == -1) &&
        ($p(e, n, t, u), e[Ct] = (e[Ct] & 4294901760) + u + 2),
        u++;}
  }
}
function ja(e, t) {
  oe(4, e, t);
  let n = _(null);
  try {
    t.call(e);
  } finally {
    _(n), oe(5, e, t);
  }
}
function $p(e, t, n, r) {
  let o = n[r] < 0, i = n[r + 1], s = o ? -n[r] : n[r], a = e[s];
  o
    ? e[g] >> 14 < e[Ct] >> 16 && (e[g] & 3) === t && (e[g] += 16384, ja(a, i))
    : ja(a, i);
}
var Tt = -1,
  nt = class {
    factory;
    injectImpl;
    resolving = !1;
    canSeeViewProviders;
    multi;
    componentProviders;
    index;
    providerFactory;
    constructor(t, n, r) {
      this.factory = t, this.canSeeViewProviders = n, this.injectImpl = r;
    }
  };
function Up(e) {
  return e instanceof nt;
}
function zp(e) {
  return (e.flags & 8) !== 0;
}
function Gp(e) {
  return (e.flags & 16) !== 0;
}
function Xo(e, t, n) {
  let r = 0;
  for (; r < n.length;) {
    let o = n[r];
    if (typeof o == "number") {
      if (o !== 0) break;
      r++;
      let i = n[r++], s = n[r++], a = n[r++];
      e.setAttribute(t, s, a, i);
    } else {
      let i = o, s = n[++r];
      Wp(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), r++;
    }
  }
  return r;
}
function Dc(e) {
  return e === 3 || e === 4 || e === 6;
}
function Wp(e) {
  return e.charCodeAt(0) === 64;
}
function sn(e, t) {
  if (!(t === null || t.length === 0)) {
    if (e === null || e.length === 0) e = t.slice();
    else {
      let n = -1;
      for (let r = 0; r < t.length; r++) {
        let o = t[r];
        typeof o == "number"
          ? n = o
          : n === 0 || (n === -1 || n === 2
            ? Ba(e, n, o, null, t[++r])
            : Ba(e, n, o, null, null));
      }
    }
  }
  return e;
}
function Ba(e, t, n, r, o) {
  let i = 0, s = e.length;
  if (t === -1) s = -1;
  else {for (; i < e.length;) {
      let a = e[i++];
      if (typeof a == "number") {
        if (a === t) {
          s = -1;
          break;
        } else if (a > t) {
          s = i - 1;
          break;
        }
      }
    }}
  for (; i < e.length;) {
    let a = e[i];
    if (typeof a == "number") break;
    if (a === n) {
      if (r === null) {
        o !== null && (e[i + 1] = o);
        return;
      } else if (r === e[i + 1]) {
        e[i + 2] = o;
        return;
      }
    }
    i++, r !== null && i++, o !== null && i++;
  }
  s !== -1 && (e.splice(s, 0, t), i = s + 1),
    e.splice(i++, 0, n),
    r !== null && e.splice(i++, 0, r),
    o !== null && e.splice(i++, 0, o);
}
var Ro = {},
  ei = class {
    injector;
    parentInjector;
    constructor(t, n) {
      this.injector = t, this.parentInjector = n;
    }
    get(t, n, r) {
      r = zr(r);
      let o = this.injector.get(t, Ro, r);
      return o !== Ro || n === Ro ? o : this.parentInjector.get(t, n, r);
    }
  };
function Ec(e) {
  return e !== Tt;
}
function Cr(e) {
  return e & 32767;
}
function qp(e) {
  return e >> 16;
}
function br(e, t) {
  let n = qp(e), r = t;
  for (; n > 0;) r = r[Lt], n--;
  return r;
}
var ti = !0;
function Ha(e) {
  let t = ti;
  return ti = e, t;
}
var Zp = 256, Ic = Zp - 1, wc = 5, Qp = 0, ge = {};
function Yp(e, t, n) {
  let r;
  typeof n == "string"
    ? r = n.charCodeAt(0) || 0
    : n.hasOwnProperty(en) && (r = n[en]), r == null && (r = n[en] = Qp++);
  let o = r & Ic, i = 1 << o;
  t.data[e + (o >> wc)] |= i;
}
function _r(e, t) {
  let n = Cc(e, t);
  if (n !== -1) return n;
  let r = t[E];
  r.firstCreatePass &&
    (e.injectorIndex = t.length,
      Fo(r.data, e),
      Fo(t, null),
      Fo(r.blueprint, null));
  let o = ds(e, t), i = e.injectorIndex;
  if (Ec(o)) {
    let s = Cr(o), a = br(o, t), u = a[E].data;
    for (let c = 0; c < 8; c++) t[i + c] = a[s + c] | u[s + c];
  }
  return t[i + 8] = o, i;
}
function Fo(e, t) {
  e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
}
function Cc(e, t) {
  return e.injectorIndex === -1 ||
      e.parent && e.parent.injectorIndex === e.injectorIndex ||
      t[e.injectorIndex + 8] === null
    ? -1
    : e.injectorIndex;
}
function ds(e, t) {
  if (e.parent && e.parent.injectorIndex !== -1) return e.parent.injectorIndex;
  let n = 0, r = null, o = t;
  for (; o !== null;) {
    if (r = Sc(o), r === null) return Tt;
    if (n++, o = o[Lt], r.injectorIndex !== -1) {
      return r.injectorIndex | n << 16;
    }
  }
  return Tt;
}
function ni(e, t, n) {
  Yp(e, t, n);
}
function Kp(e, t) {
  if (t === "class") return e.classes;
  if (t === "style") return e.styles;
  let n = e.attrs;
  if (n) {
    let r = n.length, o = 0;
    for (; o < r;) {
      let i = n[o];
      if (Dc(i)) break;
      if (i === 0) o = o + 2;
      else if (typeof i == "number") {
        for (o++; o < r && typeof n[o] == "string";) {
          o++;
        }
      } else {
        if (i === t) return n[o + 1];
        o = o + 2;
      }
    }
  }
  return null;
}
function bc(e, t, n) {
  if (n & b.Optional || e !== void 0) return e;
  Qi(t, "NodeInjector");
}
function _c(e, t, n, r) {
  if (n & b.Optional && r === void 0 && (r = null), !(n & (b.Self | b.Host))) {
    let o = e[At], i = re(void 0);
    try {
      return o ? o.get(t, r, n & b.Optional) : Au(t, r, n & b.Optional);
    } finally {
      re(i);
    }
  }
  return bc(r, t, n);
}
function Mc(e, t, n, r = b.Default, o) {
  if (e !== null) {
    if (t[g] & 2048 && !(r & b.Self)) {
      let s = th(e, t, n, r, ge);
      if (s !== ge) return s;
    }
    let i = Tc(e, t, n, r, ge);
    if (i !== ge) return i;
  }
  return _c(t, n, r, o);
}
function Tc(e, t, n, r, o) {
  let i = Xp(n);
  if (typeof i == "function") {
    if (!fc(t, e, r)) return r & b.Host ? bc(o, n, r) : _c(t, n, r, o);
    try {
      let s;
      if (s = i(r), s == null && !(r & b.Optional)) Qi(n);
      else return s;
    } finally {
      mc();
    }
  } else if (typeof i == "number") {
    let s = null, a = Cc(e, t), u = Tt, c = r & b.Host ? t[se][J] : null;
    for (
      (a === -1 || r & b.SkipSelf) &&
      (u = a === -1 ? ds(e, t) : t[a + 8],
        u === Tt || !Ua(r, !1) ? a = -1 : (s = t[E], a = Cr(u), t = br(u, t)));
      a !== -1;
    ) {
      let l = t[E];
      if ($a(i, a, l.data)) {
        let d = Jp(a, t, n, s, r, c);
        if (d !== ge) return d;
      }
      u = t[a + 8],
        u !== Tt && Ua(r, t[E].data[a + 8] === c) && $a(i, a, t)
          ? (s = l, a = Cr(u), t = br(u, t))
          : a = -1;
    }
  }
  return o;
}
function Jp(e, t, n, r, o, i) {
  let s = t[E],
    a = s.data[e + 8],
    u = r == null ? Zr(a) && ti : r != s && (a.type & 3) !== 0,
    c = o & b.Host && i === a,
    l = dr(a, s, n, u, c);
  return l !== null ? rt(t, s, l, a) : ge;
}
function dr(e, t, n, r, o) {
  let i = e.providerIndexes,
    s = t.data,
    a = i & 1048575,
    u = e.directiveStart,
    c = e.directiveEnd,
    l = i >> 20,
    d = r ? a : a + l,
    p = o ? a + l : c;
  for (let f = d; f < p; f++) {
    let h = s[f];
    if (f < u && n === h || f >= u && h.type === n) return f;
  }
  if (o) {
    let f = s[u];
    if (f && Ce(f) && f.type === n) return u;
  }
  return null;
}
function rt(e, t, n, r) {
  let o = e[n], i = t.data;
  if (Up(o)) {
    let s = o;
    s.resolving && Vf(Lf(i[n]));
    let a = Ha(s.canSeeViewProviders);
    s.resolving = !0;
    let u, c = s.injectImpl ? re(s.injectImpl) : null, l = fc(e, r, b.Default);
    try {
      o = e[n] = s.factory(void 0, i, e, r),
        t.firstCreatePass && n >= r.directiveStart && Hp(n, i[n], t);
    } finally {
      c !== null && re(c), Ha(a), s.resolving = !1, mc();
    }
  }
  return o;
}
function Xp(e) {
  if (typeof e == "string") return e.charCodeAt(0) || 0;
  let t = e.hasOwnProperty(en) ? e[en] : void 0;
  return typeof t == "number" ? t >= 0 ? t & Ic : eh : t;
}
function $a(e, t, n) {
  let r = 1 << e;
  return !!(n[t + (e >> wc)] & r);
}
function Ua(e, t) {
  return !(e & b.Self) && !(e & b.Host && t);
}
var Ye = class {
  _tNode;
  _lView;
  constructor(t, n) {
    this._tNode = t, this._lView = n;
  }
  get(t, n, r) {
    return Mc(this._tNode, this._lView, t, zr(r), n);
  }
};
function eh() {
  return new Ye(V(), C());
}
function iM(e) {
  return dn(() => {
    let t = e.prototype.constructor,
      n = t[hr] || ri(t),
      r = Object.prototype,
      o = Object.getPrototypeOf(e.prototype).constructor;
    for (; o && o !== r;) {
      let i = o[hr] || ri(o);
      if (i && i !== n) return i;
      o = Object.getPrototypeOf(o);
    }
    return (i) => new i();
  });
}
function ri(e) {
  return _u(e)
    ? () => {
      let t = ri(U(e));
      return t && t();
    }
    : St(e);
}
function th(e, t, n, r, o) {
  let i = e, s = t;
  for (; i !== null && s !== null && s[g] & 2048 && !(s[g] & 512);) {
    let a = Tc(i, s, n, r | b.Self, ge);
    if (a !== ge) return a;
    let u = i.parent;
    if (!u) {
      let c = s[Wu];
      if (c) {
        let l = c.get(n, ge, r);
        if (l !== ge) return l;
      }
      u = Sc(s), s = s[Lt];
    }
    i = u;
  }
  return o;
}
function Sc(e) {
  let t = e[E], n = t.type;
  return n === 2 ? t.declTNode : n === 1 ? e[J] : null;
}
function Nc(e) {
  return Kp(V(), e);
}
function za(e, t = null, n = null, r) {
  let o = xc(e, t, n, r);
  return o.resolveInjectorInitializers(), o;
}
function xc(e, t = null, n = null, r, o = new Set()) {
  let i = [n || z, rp(e)];
  return r = r || (typeof e == "object" ? void 0 : Q(e)),
    new nn(i, t || Gr(), r || null, o);
}
var ye = class e {
  static THROW_IF_NOT_FOUND = tn;
  static NULL = new vr();
  static create(t, n) {
    if (Array.isArray(t)) return za({ name: "" }, n, t, "");
    {
      let r = t.name ?? "";
      return za({ name: r }, t.parent, t.providers, r);
    }
  }
  static ɵprov = O({ token: e, providedIn: "any", factory: () => K(Fu) });
  static __NG_ELEMENT_ID__ = -1;
};
var Ga = class {
    attributeName;
    constructor(t) {
      this.attributeName = t;
    }
    __NG_ELEMENT_ID__ = () => Nc(this.attributeName);
    toString() {
      return `HostAttributeToken ${this.attributeName}`;
    }
  },
  nh = new N("");
nh.__NG_ELEMENT_ID__ = (e) => {
  let t = V();
  if (t === null) throw new M(204, !1);
  if (t.type & 2) return t.value;
  if (e & b.Optional) return null;
  throw new M(204, !1);
};
var Ac = !1,
  yn = (() => {
    class e {
      static __NG_ELEMENT_ID__ = rh;
      static __NG_ENV_ID__ = (n) => n;
    }
    return e;
  })(),
  Mr = class extends yn {
    _lView;
    constructor(t) {
      super(), this._lView = t;
    }
    onDestroy(t) {
      return nc(this._lView, t), () => bp(this._lView, t);
    }
  };
function rh() {
  return new Mr(C());
}
var ot = class {}, fs = new N("", { providedIn: "root", factory: () => !1 });
var Oc = new N(""),
  Rc = new N(""),
  vn = (() => {
    class e {
      taskId = 0;
      pendingTasks = new Set();
      get _hasPendingTasks() {
        return this.hasPendingTasks.value;
      }
      hasPendingTasks = new Wt(!1);
      add() {
        this._hasPendingTasks || this.hasPendingTasks.next(!0);
        let n = this.taskId++;
        return this.pendingTasks.add(n), n;
      }
      has(n) {
        return this.pendingTasks.has(n);
      }
      remove(n) {
        this.pendingTasks.delete(n),
          this.pendingTasks.size === 0 && this._hasPendingTasks &&
          this.hasPendingTasks.next(!1);
      }
      ngOnDestroy() {
        this.pendingTasks.clear(),
          this._hasPendingTasks && this.hasPendingTasks.next(!1);
      }
      static ɵprov = O({
        token: e,
        providedIn: "root",
        factory: () => new e(),
      });
    }
    return e;
  })();
var oi = class extends q {
    __isAsync;
    destroyRef = void 0;
    pendingTasks = void 0;
    constructor(t = !1) {
      super(),
        this.__isAsync = t,
        Gu() &&
        (this.destroyRef = D(yn, { optional: !0 }) ?? void 0,
          this.pendingTasks = D(vn, { optional: !0 }) ?? void 0);
    }
    emit(t) {
      let n = _(null);
      try {
        super.next(t);
      } finally {
        _(n);
      }
    }
    subscribe(t, n, r) {
      let o = t, i = n || (() => null), s = r;
      if (t && typeof t == "object") {
        let u = t;
        o = u.next?.bind(u), i = u.error?.bind(u), s = u.complete?.bind(u);
      }
      this.__isAsync &&
        (i = this.wrapInTimeout(i),
          o && (o = this.wrapInTimeout(o)),
          s && (s = this.wrapInTimeout(s)));
      let a = super.subscribe({ next: o, error: i, complete: s });
      return t instanceof P && t.add(a), a;
    }
    wrapInTimeout(t) {
      return (n) => {
        let r = this.pendingTasks?.add();
        setTimeout(() => {
          t(n), r !== void 0 && this.pendingTasks?.remove(r);
        });
      };
    }
  },
  xe = oi;
function an(...e) {}
function Fc(e) {
  let t, n;
  function r() {
    e = an;
    try {
      n !== void 0 && typeof cancelAnimationFrame == "function" &&
      cancelAnimationFrame(n), t !== void 0 && clearTimeout(t);
    } catch {}
  }
  return t = setTimeout(() => {
    e(), r();
  }),
    typeof requestAnimationFrame == "function" &&
    (n = requestAnimationFrame(() => {
      e(), r();
    })),
    () => r();
}
function Wa(e) {
  return queueMicrotask(() => e()), () => {
    e = an;
  };
}
var ps = "isAngularZone",
  Tr = ps + "_ID",
  oh = 0,
  te = class e {
    hasPendingMacrotasks = !1;
    hasPendingMicrotasks = !1;
    isStable = !0;
    onUnstable = new xe(!1);
    onMicrotaskEmpty = new xe(!1);
    onStable = new xe(!1);
    onError = new xe(!1);
    constructor(t) {
      let {
        enableLongStackTrace: n = !1,
        shouldCoalesceEventChangeDetection: r = !1,
        shouldCoalesceRunChangeDetection: o = !1,
        scheduleInRootZone: i = Ac,
      } = t;
      if (typeof Zone > "u") throw new M(908, !1);
      Zone.assertZonePatched();
      let s = this;
      s._nesting = 0,
        s._outer = s._inner = Zone.current,
        Zone.TaskTrackingZoneSpec &&
        (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec())),
        n && Zone.longStackTraceZoneSpec &&
        (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)),
        s.shouldCoalesceEventChangeDetection = !o && r,
        s.shouldCoalesceRunChangeDetection = o,
        s.callbackScheduled = !1,
        s.scheduleInRootZone = i,
        ah(s);
    }
    static isInAngularZone() {
      return typeof Zone < "u" && Zone.current.get(ps) === !0;
    }
    static assertInAngularZone() {
      if (!e.isInAngularZone()) throw new M(909, !1);
    }
    static assertNotInAngularZone() {
      if (e.isInAngularZone()) throw new M(909, !1);
    }
    run(t, n, r) {
      return this._inner.run(t, n, r);
    }
    runTask(t, n, r, o) {
      let i = this._inner,
        s = i.scheduleEventTask("NgZoneEvent: " + o, t, ih, an, an);
      try {
        return i.runTask(s, n, r);
      } finally {
        i.cancelTask(s);
      }
    }
    runGuarded(t, n, r) {
      return this._inner.runGuarded(t, n, r);
    }
    runOutsideAngular(t) {
      return this._outer.run(t);
    }
  },
  ih = {};
function hs(e) {
  if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable) {
    try {
      e._nesting++, e.onMicrotaskEmpty.emit(null);
    } finally {
      if (e._nesting--, !e.hasPendingMicrotasks) {
        try {
          e.runOutsideAngular(() => e.onStable.emit(null));
        } finally {
          e.isStable = !0;
        }
      }
    }
  }
}
function sh(e) {
  if (e.isCheckStableRunning || e.callbackScheduled) return;
  e.callbackScheduled = !0;
  function t() {
    Fc(() => {
      e.callbackScheduled = !1,
        ii(e),
        e.isCheckStableRunning = !0,
        hs(e),
        e.isCheckStableRunning = !1;
    });
  }
  e.scheduleInRootZone
    ? Zone.root.run(() => {
      t();
    })
    : e._outer.run(() => {
      t();
    }), ii(e);
}
function ah(e) {
  let t = () => {
      sh(e);
    },
    n = oh++;
  e._inner = e._inner.fork({
    name: "angular",
    properties: { [ps]: !0, [Tr]: n, [Tr + n]: !0 },
    onInvokeTask: (r, o, i, s, a, u) => {
      if (uh(u)) return r.invokeTask(i, s, a, u);
      try {
        return qa(e), r.invokeTask(i, s, a, u);
      } finally {
        (e.shouldCoalesceEventChangeDetection && s.type === "eventTask" ||
          e.shouldCoalesceRunChangeDetection) && t(), Za(e);
      }
    },
    onInvoke: (r, o, i, s, a, u, c) => {
      try {
        return qa(e), r.invoke(i, s, a, u, c);
      } finally {
        e.shouldCoalesceRunChangeDetection && !e.callbackScheduled && !ch(u) &&
        t(), Za(e);
      }
    },
    onHasTask: (r, o, i, s) => {
      r.hasTask(i, s),
        o === i &&
        (s.change == "microTask"
          ? (e._hasPendingMicrotasks = s.microTask, ii(e), hs(e))
          : s.change == "macroTask" && (e.hasPendingMacrotasks = s.macroTask));
    },
    onHandleError: (
      r,
      o,
      i,
      s,
    ) => (r.handleError(i, s),
      e.runOutsideAngular(() => e.onError.emit(s)),
      !1),
  });
}
function ii(e) {
  e._hasPendingMicrotasks ||
    (e.shouldCoalesceEventChangeDetection ||
        e.shouldCoalesceRunChangeDetection) && e.callbackScheduled === !0
    ? e.hasPendingMicrotasks = !0
    : e.hasPendingMicrotasks = !1;
}
function qa(e) {
  e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null));
}
function Za(e) {
  e._nesting--, hs(e);
}
var si = class {
  hasPendingMicrotasks = !1;
  hasPendingMacrotasks = !1;
  isStable = !0;
  onUnstable = new xe();
  onMicrotaskEmpty = new xe();
  onStable = new xe();
  onError = new xe();
  run(t, n, r) {
    return t.apply(n, r);
  }
  runGuarded(t, n, r) {
    return t.apply(n, r);
  }
  runOutsideAngular(t) {
    return t();
  }
  runTask(t, n, r, o) {
    return t.apply(n, r);
  }
};
function uh(e) {
  return kc(e, "__ignore_ng_zone__");
}
function ch(e) {
  return kc(e, "__scheduler_tick__");
}
function kc(e, t) {
  return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[t] === !0;
}
var it = class {
    _console = console;
    handleError(t) {
      this._console.error("ERROR", t);
    }
  },
  lh = new N("", {
    providedIn: "root",
    factory: () => {
      let e = D(te), t = D(it);
      return (n) => e.runOutsideAngular(() => t.handleError(n));
    },
  });
function Qa(e, t) {
  return wu(e, t);
}
function dh(e) {
  return wu(Iu, e);
}
var sM = (Qa.required = dh, Qa);
function fh() {
  return Vt(V(), C());
}
function Vt(e, t) {
  return new jt(ae(e, t));
}
var jt = (() => {
  class e {
    nativeElement;
    constructor(n) {
      this.nativeElement = n;
    }
    static __NG_ELEMENT_ID__ = fh;
  }
  return e;
})();
function Pc(e) {
  return e instanceof jt ? e.nativeElement : e;
}
var Ya = new Set();
function De(e) {
  Ya.has(e) ||
    (Ya.add(e),
      performance?.mark?.("mark_feature_usage", { detail: { feature: e } }));
}
function ph(e) {
  return typeof e == "function" && e[B] !== void 0;
}
function hh(e, t) {
  De("NgSignals");
  let n = ea(e), r = n[B];
  return t?.equal && (r.equal = t.equal),
    n.set = (o) => Mn(r, o),
    n.update = (o) => ta(r, o),
    n.asReadonly = gh.bind(n),
    n;
}
function gh() {
  let e = this[B];
  if (e.readonlyFn === void 0) {
    let t = () => this();
    t[B] = e, e.readonlyFn = t;
  }
  return e.readonlyFn;
}
function Lc(e) {
  return ph(e) && typeof e.set == "function";
}
function mh() {
  return this._results[Symbol.iterator]();
}
var ai = class {
  _emitDistinctChangesOnly;
  dirty = !0;
  _onDirty = void 0;
  _results = [];
  _changesDetected = !1;
  _changes = void 0;
  length = 0;
  first = void 0;
  last = void 0;
  get changes() {
    return this._changes ??= new q();
  }
  constructor(t = !1) {
    this._emitDistinctChangesOnly = t;
  }
  get(t) {
    return this._results[t];
  }
  map(t) {
    return this._results.map(t);
  }
  filter(t) {
    return this._results.filter(t);
  }
  find(t) {
    return this._results.find(t);
  }
  reduce(t, n) {
    return this._results.reduce(t, n);
  }
  forEach(t) {
    this._results.forEach(t);
  }
  some(t) {
    return this._results.some(t);
  }
  toArray() {
    return this._results.slice();
  }
  toString() {
    return this._results.toString();
  }
  reset(t, n) {
    this.dirty = !1;
    let r = Kf(t);
    (this._changesDetected = !Yf(this._results, r, n)) &&
      (this._results = r,
        this.length = r.length,
        this.last = r[this.length - 1],
        this.first = r[0]);
  }
  notifyOnChanges() {
    this._changes !== void 0 &&
      (this._changesDetected || !this._emitDistinctChangesOnly) &&
      this._changes.next(this);
  }
  onDirty(t) {
    this._onDirty = t;
  }
  setDirty() {
    this.dirty = !0, this._onDirty?.();
  }
  destroy() {
    this._changes !== void 0 &&
      (this._changes.complete(), this._changes.unsubscribe());
  }
  [Symbol.iterator] = mh;
};
function Vc(e) {
  return (e.flags & 128) === 128;
}
var jc = function (e) {
    return e[e.OnPush = 0] = "OnPush", e[e.Default = 1] = "Default", e;
  }(jc || {}),
  Bc = new Map(),
  yh = 0;
function vh() {
  return yh++;
}
function Dh(e) {
  Bc.set(e[qr], e);
}
function ui(e) {
  Bc.delete(e[qr]);
}
var Ka = "__ngContext__";
function st(e, t) {
  Oe(t) ? (e[Ka] = t[qr], Dh(t)) : e[Ka] = t;
}
function Hc(e) {
  return Uc(e[on]);
}
function $c(e) {
  return Uc(e[fe]);
}
function Uc(e) {
  for (; e !== null && !_e(e);) e = e[fe];
  return e;
}
var ci;
function aM(e) {
  ci = e;
}
function Eh() {
  if (ci !== void 0) return ci;
  if (typeof document < "u") return document;
  throw new M(210, !1);
}
var uM = new N("", { providedIn: "root", factory: () => Ih }),
  Ih = "ng",
  wh = new N(""),
  Ch = new N("", { providedIn: "platform", factory: () => "unknown" });
var cM = new N(""),
  lM = new N("", {
    providedIn: "root",
    factory: () =>
      Eh().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") ||
      null,
  });
var bh = "h", _h = "b";
var zc = !1, Mh = new N("", { providedIn: "root", factory: () => zc });
var gs = function (e) {
    return e[e.CHANGE_DETECTION = 0] = "CHANGE_DETECTION",
      e[e.AFTER_NEXT_RENDER = 1] = "AFTER_NEXT_RENDER",
      e;
  }(gs || {}),
  Kr = new N("");
var bt = function (e) {
    return e[e.EarlyRead = 0] = "EarlyRead",
      e[e.Write = 1] = "Write",
      e[e.MixedReadWrite = 2] = "MixedReadWrite",
      e[e.Read = 3] = "Read",
      e;
  }(bt || {}),
  Gc = (() => {
    class e {
      impl = null;
      execute() {
        this.impl?.execute();
      }
      static ɵprov = O({
        token: e,
        providedIn: "root",
        factory: () => new e(),
      });
    }
    return e;
  })(),
  Th = [bt.EarlyRead, bt.Write, bt.MixedReadWrite, bt.Read],
  Sh = (() => {
    class e {
      ngZone = D(te);
      scheduler = D(ot);
      errorHandler = D(it, { optional: !0 });
      sequences = new Set();
      deferredRegistrations = new Set();
      executing = !1;
      constructor() {
        D(Kr, { optional: !0 });
      }
      execute() {
        this.executing = !0;
        for (let n of Th) {
          for (let r of this.sequences) {
            if (!(r.erroredOrDestroyed || !r.hooks[n])) {
              try {
                r.pipelinedValue = this.ngZone.runOutsideAngular(() =>
                  this.maybeTrace(
                    () => r.hooks[n](r.pipelinedValue),
                    r.snapshot,
                  )
                );
              } catch (o) {
                r.erroredOrDestroyed = !0, this.errorHandler?.handleError(o);
              }
            }
          }
        }
        this.executing = !1;
        for (let n of this.sequences) {
          n.afterRun(), n.once && (this.sequences.delete(n), n.destroy());
        }
        for (let n of this.deferredRegistrations) this.sequences.add(n);
        this.deferredRegistrations.size > 0 && this.scheduler.notify(8),
          this.deferredRegistrations.clear();
      }
      register(n) {
        this.executing
          ? this.deferredRegistrations.add(n)
          : (this.sequences.add(n), this.scheduler.notify(7));
      }
      unregister(n) {
        this.executing && this.sequences.has(n)
          ? (n.erroredOrDestroyed = !0, n.pipelinedValue = void 0, n.once = !0)
          : (this.sequences.delete(n), this.deferredRegistrations.delete(n));
      }
      maybeTrace(n, r) {
        return r ? r.run(gs.AFTER_NEXT_RENDER, n) : n();
      }
      static ɵprov = O({
        token: e,
        providedIn: "root",
        factory: () => new e(),
      });
    }
    return e;
  })(),
  li = class {
    impl;
    hooks;
    once;
    snapshot;
    erroredOrDestroyed = !1;
    pipelinedValue = void 0;
    unregisterOnDestroy;
    constructor(t, n, r, o, i = null) {
      this.impl = t,
        this.hooks = n,
        this.once = r,
        this.snapshot = i,
        this.unregisterOnDestroy = o?.onDestroy(() => this.destroy());
    }
    afterRun() {
      this.erroredOrDestroyed = !1,
        this.pipelinedValue = void 0,
        this.snapshot?.dispose(),
        this.snapshot = null;
    }
    destroy() {
      this.impl.unregister(this), this.unregisterOnDestroy?.();
    }
  };
function Nh(e, t) {
  !t?.injector && Wr(Nh);
  let n = t?.injector ?? D(ye);
  return De("NgAfterRender"), Wc(e, n, t, !1);
}
function xh(e, t) {
  !t?.injector && Wr(xh);
  let n = t?.injector ?? D(ye);
  return De("NgAfterNextRender"), Wc(e, n, t, !0);
}
function Ah(e, t) {
  if (e instanceof Function) {
    let n = [void 0, void 0, void 0, void 0];
    return n[t] = e, n;
  } else return [e.earlyRead, e.write, e.mixedReadWrite, e.read];
}
function Wc(e, t, n, r) {
  let o = t.get(Gc);
  o.impl ??= t.get(Sh);
  let i = t.get(Kr, null, { optional: !0 }),
    s = n?.phase ?? bt.MixedReadWrite,
    a = n?.manualCleanup !== !0 ? t.get(yn) : null,
    u = new li(o.impl, Ah(e, s), r, a, i?.snapshot(null));
  return o.impl.register(u), u;
}
var Oh = () => null;
function ms(e, t, n = !1) {
  return Oh(e, t, n);
}
function qc(e, t) {
  let n = e.contentQueries;
  if (n !== null) {
    let r = _(null);
    try {
      for (let o = 0; o < n.length; o += 2) {
        let i = n[o], s = n[o + 1];
        if (s !== -1) {
          let a = e.data[s];
          Yr(i), a.contentQueries(2, t[s], s);
        }
      }
    } finally {
      _(r);
    }
  }
}
function di(e, t, n) {
  Yr(0);
  let r = _(null);
  try {
    t(e, n);
  } finally {
    _(r);
  }
}
function Zc(e, t, n) {
  if (qu(t)) {
    let r = _(null);
    try {
      let o = t.directiveStart, i = t.directiveEnd;
      for (let s = o; s < i; s++) {
        let a = e.data[s];
        if (a.contentQueries) {
          let u = n[s];
          a.contentQueries(1, u, s);
        }
      }
    } finally {
      _(r);
    }
  }
}
var un = function (e) {
    return e[e.Emulated = 0] = "Emulated",
      e[e.None = 2] = "None",
      e[e.ShadowDom = 3] = "ShadowDom",
      e;
  }(un || {}),
  rr;
function Rh() {
  if (rr === void 0 && (rr = null, Aa.trustedTypes)) {
    try {
      rr = Aa.trustedTypes.createPolicy("angular", {
        createHTML: (e) => e,
        createScript: (e) => e,
        createScriptURL: (e) => e,
      });
    } catch {}
  }
  return rr;
}
function Jr(e) {
  return Rh()?.createHTML(e) || e;
}
var be = class {
    changingThisBreaksApplicationSecurity;
    constructor(t) {
      this.changingThisBreaksApplicationSecurity = t;
    }
    toString() {
      return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Du})`;
    }
  },
  fi = class extends be {
    getTypeName() {
      return "HTML";
    }
  },
  pi = class extends be {
    getTypeName() {
      return "Style";
    }
  },
  hi = class extends be {
    getTypeName() {
      return "Script";
    }
  },
  gi = class extends be {
    getTypeName() {
      return "URL";
    }
  },
  mi = class extends be {
    getTypeName() {
      return "ResourceURL";
    }
  };
function ys(e) {
  return e instanceof be ? e.changingThisBreaksApplicationSecurity : e;
}
function dM(e, t) {
  let n = Fh(e);
  if (n != null && n !== t) {
    if (n === "ResourceURL" && t === "URL") return !0;
    throw new Error(`Required a safe ${t}, got a ${n} (see ${Du})`);
  }
  return n === t;
}
function Fh(e) {
  return e instanceof be && e.getTypeName() || null;
}
function fM(e) {
  return new fi(e);
}
function pM(e) {
  return new pi(e);
}
function hM(e) {
  return new hi(e);
}
function gM(e) {
  return new gi(e);
}
function mM(e) {
  return new mi(e);
}
function kh(e) {
  let t = new vi(e);
  return Ph() ? new yi(t) : t;
}
var yi = class {
    inertDocumentHelper;
    constructor(t) {
      this.inertDocumentHelper = t;
    }
    getInertBodyElement(t) {
      t = "<body><remove></remove>" + t;
      try {
        let n = new window.DOMParser().parseFromString(Jr(t), "text/html").body;
        return n === null
          ? this.inertDocumentHelper.getInertBodyElement(t)
          : (n.firstChild?.remove(), n);
      } catch {
        return null;
      }
    }
  },
  vi = class {
    defaultDoc;
    inertDocument;
    constructor(t) {
      this.defaultDoc = t,
        this.inertDocument = this.defaultDoc.implementation.createHTMLDocument(
          "sanitization-inert",
        );
    }
    getInertBodyElement(t) {
      let n = this.inertDocument.createElement("template");
      return n.innerHTML = Jr(t), n;
    }
  };
function Ph() {
  try {
    return !!new window.DOMParser().parseFromString(Jr(""), "text/html");
  } catch {
    return !1;
  }
}
var Lh = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function Vh(e) {
  return e = String(e), e.match(Lh) ? e : "unsafe:" + e;
}
function Me(e) {
  let t = {};
  for (let n of e.split(",")) t[n] = !0;
  return t;
}
function Dn(...e) {
  let t = {};
  for (let n of e) for (let r in n) n.hasOwnProperty(r) && (t[r] = !0);
  return t;
}
var Qc = Me("area,br,col,hr,img,wbr"),
  Yc = Me("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
  Kc = Me("rp,rt"),
  jh = Dn(Kc, Yc),
  Bh = Dn(
    Yc,
    Me(
      "address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul",
    ),
  ),
  Hh = Dn(
    Kc,
    Me(
      "a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video",
    ),
  ),
  Ja = Dn(Qc, Bh, Hh, jh),
  Jc = Me("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
  $h = Me(
    "abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width",
  ),
  Uh = Me(
    "aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext",
  ),
  zh = Dn(Jc, $h, Uh),
  Gh = Me("script,style,template"),
  Di = class {
    sanitizedSomething = !1;
    buf = [];
    sanitizeChildren(t) {
      let n = t.firstChild, r = !0, o = [];
      for (; n;) {
        if (
          n.nodeType === Node.ELEMENT_NODE
            ? r = this.startElement(n)
            : n.nodeType === Node.TEXT_NODE
            ? this.chars(n.nodeValue)
            : this.sanitizedSomething = !0, r && n.firstChild
        ) {
          o.push(n), n = Zh(n);
          continue;
        }
        for (; n;) {
          n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
          let i = qh(n);
          if (i) {
            n = i;
            break;
          }
          n = o.pop();
        }
      }
      return this.buf.join("");
    }
    startElement(t) {
      let n = Xa(t).toLowerCase();
      if (!Ja.hasOwnProperty(n)) {
        return this.sanitizedSomething = !0, !Gh.hasOwnProperty(n);
      }
      this.buf.push("<"), this.buf.push(n);
      let r = t.attributes;
      for (let o = 0; o < r.length; o++) {
        let i = r.item(o), s = i.name, a = s.toLowerCase();
        if (!zh.hasOwnProperty(a)) {
          this.sanitizedSomething = !0;
          continue;
        }
        let u = i.value;
        Jc[a] && (u = Vh(u)), this.buf.push(" ", s, '="', eu(u), '"');
      }
      return this.buf.push(">"), !0;
    }
    endElement(t) {
      let n = Xa(t).toLowerCase();
      Ja.hasOwnProperty(n) && !Qc.hasOwnProperty(n) &&
        (this.buf.push("</"), this.buf.push(n), this.buf.push(">"));
    }
    chars(t) {
      this.buf.push(eu(t));
    }
  };
function Wh(e, t) {
  return (e.compareDocumentPosition(t) &
    Node.DOCUMENT_POSITION_CONTAINED_BY) !==
    Node.DOCUMENT_POSITION_CONTAINED_BY;
}
function qh(e) {
  let t = e.nextSibling;
  if (t && e !== t.previousSibling) throw Xc(t);
  return t;
}
function Zh(e) {
  let t = e.firstChild;
  if (t && Wh(e, t)) throw Xc(t);
  return t;
}
function Xa(e) {
  let t = e.nodeName;
  return typeof t == "string" ? t : "FORM";
}
function Xc(e) {
  return new Error(
    `Failed to sanitize html because the element is clobbered: ${e.outerHTML}`,
  );
}
var Qh = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, Yh = /([^\#-~ |!])/g;
function eu(e) {
  return e.replace(/&/g, "&amp;").replace(Qh, function (t) {
    let n = t.charCodeAt(0), r = t.charCodeAt(1);
    return "&#" + ((n - 55296) * 1024 + (r - 56320) + 65536) + ";";
  }).replace(Yh, function (t) {
    return "&#" + t.charCodeAt(0) + ";";
  }).replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
var or;
function yM(e, t) {
  let n = null;
  try {
    or = or || kh(e);
    let r = t ? String(t) : "";
    n = or.getInertBodyElement(r);
    let o = 5, i = r;
    do {
      if (o === 0) {
        throw new Error(
          "Failed to sanitize html because the input is unstable",
        );
      }
      o--, r = i, i = n.innerHTML, n = or.getInertBodyElement(r);
    } while (r !== i);
    let a = new Di().sanitizeChildren(tu(n) || n);
    return Jr(a);
  } finally {
    if (n) {
      let r = tu(n) || n;
      for (; r.firstChild;) r.firstChild.remove();
    }
  }
}
function tu(e) {
  return "content" in e && Kh(e) ? e.content : null;
}
function Kh(e) {
  return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE";
}
var Jh = function (e) {
  return e[e.NONE = 0] = "NONE",
    e[e.HTML = 1] = "HTML",
    e[e.STYLE = 2] = "STYLE",
    e[e.SCRIPT = 3] = "SCRIPT",
    e[e.URL = 4] = "URL",
    e[e.RESOURCE_URL = 5] = "RESOURCE_URL",
    e;
}(Jh || {});
function el(e) {
  return e instanceof Function ? e() : e;
}
var Pe = function (e) {
    return e[e.None = 0] = "None",
      e[e.SignalBased = 1] = "SignalBased",
      e[e.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform",
      e;
  }(Pe || {}),
  Sr = function (e) {
    return e[e.Important = 1] = "Important", e[e.DashCase = 2] = "DashCase", e;
  }(Sr || {}),
  Xh;
function vs(e, t) {
  return Xh(e, t);
}
function _t(e, t, n, r, o) {
  if (r != null) {
    let i, s = !1;
    _e(r) ? i = r : Oe(r) && (s = !0, r = r[ve]);
    let a = me(r);
    e === 0 && n !== null
      ? o == null ? il(t, n, a) : xr(t, n, a, o || null, !0)
      : e === 1 && n !== null
      ? xr(t, n, a, o || null, !0)
      : e === 2
      ? fg(t, a, s)
      : e === 3 && t.destroyNode(a), i != null && hg(t, e, i, n, o);
  }
}
function eg(e, t) {
  return e.createText(t);
}
function tg(e, t, n) {
  e.setValue(t, n);
}
function tl(e, t, n) {
  return e.createElement(t, n);
}
function ng(e, t) {
  nl(e, t), t[ve] = null, t[J] = null;
}
function rg(e, t, n, r, o, i) {
  r[ve] = o, r[J] = t, Xr(e, r, n, 1, o, i);
}
function nl(e, t) {
  t[ke].changeDetectionScheduler?.notify(10), Xr(e, t, t[R], 2, null, null);
}
function og(e) {
  let t = e[on];
  if (!t) return ko(e[E], e);
  for (; t;) {
    let n = null;
    if (Oe(t)) n = t[on];
    else {
      let r = t[Y];
      r && (n = r);
    }
    if (!n) {
      for (; t && !t[fe] && t !== e;) Oe(t) && ko(t[E], t), t = t[H];
      t === null && (t = e), Oe(t) && ko(t[E], t), n = t && t[fe];
    }
    t = n;
  }
}
function ig(e, t, n, r) {
  let o = Y + r, i = n.length;
  r > 0 && (n[o - 1][fe] = t),
    r < i - Y ? (t[fe] = n[o], Ru(n, Y + r, t)) : (n.push(t), t[fe] = null),
    t[H] = n;
  let s = t[Ke];
  s !== null && n !== s && rl(s, t);
  let a = t[we];
  a !== null && a.insertView(e), Yo(t), t[g] |= 128;
}
function rl(e, t) {
  let n = e[Ot], r = t[H];
  if (Oe(r)) e[g] |= 2;
  else {
    let o = r[H][se];
    t[se] !== o && (e[g] |= 2);
  }
  n === null ? e[Ot] = [t] : n.push(t);
}
function Ds(e, t) {
  let n = e[Ot], r = n.indexOf(t);
  n.splice(r, 1);
}
function Nr(e, t) {
  if (e.length <= Y) return;
  let n = Y + t, r = e[n];
  if (r) {
    let o = r[Ke];
    o !== null && o !== e && Ds(o, r), t > 0 && (e[n - 1][fe] = r[fe]);
    let i = mr(e, Y + t);
    ng(r[E], r);
    let s = i[we];
    s !== null && s.detachView(i[E]), r[H] = null, r[fe] = null, r[g] &= -129;
  }
  return r;
}
function Es(e, t) {
  if (pn(t)) return;
  let n = t[R];
  n.destroyNode && Xr(e, t, n, 3, null, null), og(t);
}
function ko(e, t) {
  if (pn(t)) return;
  let n = _(null);
  try {
    t[g] &= -129,
      t[g] |= 256,
      t[ee] && mt(t[ee]),
      ag(e, t),
      sg(e, t),
      t[E].type === 1 && t[R].destroy();
    let r = t[Ke];
    if (r !== null && _e(t[H])) {
      r !== t[H] && Ds(r, t);
      let o = t[we];
      o !== null && o.detachView(e);
    }
    ui(t);
  } finally {
    _(n);
  }
}
function sg(e, t) {
  let n = e.cleanup, r = t[Dr];
  if (n !== null) {
    for (let s = 0; s < n.length - 1; s += 2) {
      if (typeof n[s] == "string") {
        let a = n[s + 3];
        a >= 0 ? r[a]() : r[-a].unsubscribe(), s += 2;
      } else {
        let a = r[n[s + 1]];
        n[s].call(a);
      }
    }
  }
  r !== null && (t[Dr] = null);
  let o = t[Ae];
  if (o !== null) {
    t[Ae] = null;
    for (let s = 0; s < o.length; s++) {
      let a = o[s];
      a();
    }
  }
  let i = t[Je];
  if (i !== null) {
    t[Je] = null;
    for (let s of i) s.destroy();
  }
}
function ag(e, t) {
  let n;
  if (e != null && (n = e.destroyHooks) != null) {
    for (let r = 0; r < n.length; r += 2) {
      let o = t[n[r]];
      if (!(o instanceof nt)) {
        let i = n[r + 1];
        if (Array.isArray(i)) {
          for (let s = 0; s < i.length; s += 2) {
            let a = o[i[s]], u = i[s + 1];
            oe(4, a, u);
            try {
              u.call(a);
            } finally {
              oe(5, a, u);
            }
          }
        } else {
          oe(4, o, i);
          try {
            i.call(o);
          } finally {
            oe(5, o, i);
          }
        }
      }
    }
  }
}
function ol(e, t, n) {
  return ug(e, t.parent, n);
}
function ug(e, t, n) {
  let r = t;
  for (; r !== null && r.type & 168;) t = r, r = t.parent;
  if (r === null) return n[ve];
  {
    let { componentOffset: o } = r;
    if (o > -1) {
      let { encapsulation: i } = e.data[r.directiveStart + o];
      if (i === un.None || i === un.Emulated) return null;
    }
    return ae(r, n);
  }
}
function xr(e, t, n, r, o) {
  e.insertBefore(t, n, r, o);
}
function il(e, t, n) {
  e.appendChild(t, n);
}
function nu(e, t, n, r, o) {
  r !== null ? xr(e, t, n, r, o) : il(e, t, n);
}
function sl(e, t) {
  return e.parentNode(t);
}
function cg(e, t) {
  return e.nextSibling(t);
}
function al(e, t, n) {
  return dg(e, t, n);
}
function lg(e, t, n) {
  return e.type & 40 ? ae(e, n) : null;
}
var dg = lg, ru;
function Is(e, t, n, r) {
  let o = ol(e, r, t), i = t[R], s = r.parent || t[J], a = al(s, r, t);
  if (o != null) {
    if (Array.isArray(n)) {
      for (let u = 0; u < n.length; u++) nu(i, o, n[u], a, !1);
    } else nu(i, o, n, a, !1);
  }
  ru !== void 0 && ru(i, r, t, n, o);
}
function Xt(e, t) {
  if (t !== null) {
    let n = t.type;
    if (n & 3) return ae(t, e);
    if (n & 4) return Ei(-1, e[t.index]);
    if (n & 8) {
      let r = t.child;
      if (r !== null) return Xt(e, r);
      {
        let o = e[t.index];
        return _e(o) ? Ei(-1, o) : me(o);
      }
    } else {
      if (n & 128) return Xt(e, t.next);
      if (n & 32) return vs(t, e)() || me(e[t.index]);
      {
        let r = ul(e, t);
        if (r !== null) {
          if (Array.isArray(r)) return r[0];
          let o = et(e[se]);
          return Xt(o, r);
        } else return Xt(e, t.next);
      }
    }
  }
  return null;
}
function ul(e, t) {
  if (t !== null) {
    let r = e[se][J], o = t.projection;
    return r.projection[o];
  }
  return null;
}
function Ei(e, t) {
  let n = Y + e + 1;
  if (n < t.length) {
    let r = t[n], o = r[E].firstChild;
    if (o !== null) return Xt(r, o);
  }
  return t[Xe];
}
function fg(e, t, n) {
  e.removeChild(null, t, n);
}
function ws(e, t, n, r, o, i, s) {
  for (; n != null;) {
    if (n.type === 128) {
      n = n.next;
      continue;
    }
    let a = r[n.index], u = n.type;
    if (
      s && t === 0 && (a && st(me(a), r), n.flags |= 2), (n.flags & 32) !== 32
    ) {
      if (u & 8) ws(e, t, n.child, r, o, i, !1), _t(t, e, o, a, i);
      else if (u & 32) {
        let c = vs(n, r), l;
        for (; l = c();) _t(t, e, o, l, i);
        _t(t, e, o, a, i);
      } else u & 16 ? cl(e, t, r, n, o, i) : _t(t, e, o, a, i);
    }
    n = s ? n.projectionNext : n.next;
  }
}
function Xr(e, t, n, r, o, i) {
  ws(n, r, e.firstChild, t, o, i, !1);
}
function pg(e, t, n) {
  let r = t[R], o = ol(e, n, t), i = n.parent || t[J], s = al(i, n, t);
  cl(r, 0, t, n, o, s);
}
function cl(e, t, n, r, o, i) {
  let s = n[se], u = s[J].projection[r.projection];
  if (Array.isArray(u)) {
    for (let c = 0; c < u.length; c++) {
      let l = u[c];
      _t(t, e, o, l, i);
    }
  } else {
    let c = u, l = s[H];
    Vc(r) && (c.flags |= 128), ws(e, t, c, l, o, i, !0);
  }
}
function hg(e, t, n, r, o) {
  let i = n[Xe], s = me(n);
  i !== s && _t(t, e, r, i, o);
  for (let a = Y; a < n.length; a++) {
    let u = n[a];
    Xr(u[E], u, e, t, r, i);
  }
}
function gg(e, t, n, r, o) {
  if (t) o ? e.addClass(n, r) : e.removeClass(n, r);
  else {
    let i = r.indexOf("-") === -1 ? void 0 : Sr.DashCase;
    o == null
      ? e.removeStyle(n, r, i)
      : (typeof o == "string" && o.endsWith("!important") &&
        (o = o.slice(0, -10), i |= Sr.Important),
        e.setStyle(n, r, o, i));
  }
}
function mg(e, t, n) {
  e.setAttribute(t, "style", n);
}
function ll(e, t, n) {
  n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n);
}
function dl(e, t, n) {
  let { mergedAttrs: r, classes: o, styles: i } = n;
  r !== null && Xo(e, t, r),
    o !== null && ll(e, t, o),
    i !== null && mg(e, t, i);
}
function yg(e, t, n) {
  let r = e.length;
  for (;;) {
    let o = e.indexOf(t, n);
    if (o === -1) return o;
    if (o === 0 || e.charCodeAt(o - 1) <= 32) {
      let i = t.length;
      if (o + i === r || e.charCodeAt(o + i) <= 32) return o;
    }
    n = o + 1;
  }
}
var fl = "ng-template";
function vg(e, t, n, r) {
  let o = 0;
  if (r) {
    for (; o < t.length && typeof t[o] == "string"; o += 2) {
      if (
        t[o] === "class" && yg(t[o + 1].toLowerCase(), n, 0) !== -1
      ) return !0;
    }
  } else if (Cs(e)) return !1;
  if (o = t.indexOf(1, o), o > -1) {
    let i;
    for (; ++o < t.length && typeof (i = t[o]) == "string";) {
      if (i.toLowerCase() === n) return !0;
    }
  }
  return !1;
}
function Cs(e) {
  return e.type === 4 && e.value !== fl;
}
function Dg(e, t, n) {
  let r = e.type === 4 && !n ? fl : e.value;
  return t === r;
}
function Eg(e, t, n) {
  let r = 4, o = e.attrs, i = o !== null ? Cg(o) : 0, s = !1;
  for (let a = 0; a < t.length; a++) {
    let u = t[a];
    if (typeof u == "number") {
      if (!s && !le(r) && !le(u)) return !1;
      if (s && le(u)) continue;
      s = !1, r = u | r & 1;
      continue;
    }
    if (!s) {
      if (r & 4) {
        if (
          r = 2 | r & 1, u !== "" && !Dg(e, u, n) || u === "" && t.length === 1
        ) {
          if (le(r)) return !1;
          s = !0;
        }
      } else if (r & 8) {
        if (o === null || !vg(e, o, u, n)) {
          if (le(r)) return !1;
          s = !0;
        }
      } else {
        let c = t[++a], l = Ig(u, o, Cs(e), n);
        if (l === -1) {
          if (le(r)) return !1;
          s = !0;
          continue;
        }
        if (c !== "") {
          let d;
          if (l > i ? d = "" : d = o[l + 1].toLowerCase(), r & 2 && c !== d) {
            if (le(r)) return !1;
            s = !0;
          }
        }
      }
    }
  }
  return le(r) || s;
}
function le(e) {
  return (e & 1) === 0;
}
function Ig(e, t, n, r) {
  if (t === null) return -1;
  let o = 0;
  if (r || !n) {
    let i = !1;
    for (; o < t.length;) {
      let s = t[o];
      if (s === e) return o;
      if (s === 3 || s === 6) i = !0;
      else if (s === 1 || s === 2) {
        let a = t[++o];
        for (; typeof a == "string";) a = t[++o];
        continue;
      } else {
        if (s === 4) break;
        if (s === 0) {
          o += 4;
          continue;
        }
      }
      o += i ? 1 : 2;
    }
    return -1;
  } else return bg(t, e);
}
function pl(e, t, n = !1) {
  for (let r = 0; r < t.length; r++) if (Eg(e, t[r], n)) return !0;
  return !1;
}
function wg(e) {
  let t = e.attrs;
  if (t != null) {
    let n = t.indexOf(5);
    if (!(n & 1)) return t[n + 1];
  }
  return null;
}
function Cg(e) {
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (Dc(n)) return t;
  }
  return e.length;
}
function bg(e, t) {
  let n = e.indexOf(4);
  if (n > -1) {
    for (n++; n < e.length;) {
      let r = e[n];
      if (typeof r == "number") return -1;
      if (r === t) return n;
      n++;
    }
  }
  return -1;
}
function _g(e, t) {
  e: for (let n = 0; n < t.length; n++) {
    let r = t[n];
    if (e.length === r.length) {
      for (let o = 0; o < e.length; o++) if (e[o] !== r[o]) continue e;
      return !0;
    }
  }
  return !1;
}
function ou(e, t) {
  return e ? ":not(" + t.trim() + ")" : t;
}
function Mg(e) {
  let t = e[0], n = 1, r = 2, o = "", i = !1;
  for (; n < e.length;) {
    let s = e[n];
    if (typeof s == "string") {
      if (r & 2) {
        let a = e[++n];
        o += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
      } else r & 8 ? o += "." + s : r & 4 && (o += " " + s);
    } else {o !== "" && !le(s) && (t += ou(i, o), o = ""),
        r = s,
        i = i || !le(r);}
    n++;
  }
  return o !== "" && (t += ou(i, o)), t;
}
function Tg(e) {
  return e.map(Mg).join(",");
}
function Sg(e) {
  let t = [], n = [], r = 1, o = 2;
  for (; r < e.length;) {
    let i = e[r];
    if (typeof i == "string") {
      o === 2 ? i !== "" && t.push(i, e[++r]) : o === 8 && n.push(i);
    } else {
      if (!le(o)) break;
      o = i;
    }
    r++;
  }
  return { attrs: t, classes: n };
}
var Te = {};
function vM(e = 1) {
  hl(k(), C(), lt() + e, !1);
}
function hl(e, t, n, r) {
  if (!r) {
    if ((t[g] & 3) === 3) {
      let i = e.preOrderCheckHooks;
      i !== null && cr(t, i, n);
    } else {
      let i = e.preOrderHooks;
      i !== null && lr(t, i, 0, n);
    }
  }
  tt(n);
}
function je(e, t = b.Default) {
  let n = C();
  if (n === null) return K(e, t);
  let r = V();
  return Mc(r, n, U(e), t);
}
function DM() {
  let e = "invalid";
  throw new Error(e);
}
function gl(e, t, n, r, o, i) {
  let s = _(null);
  try {
    let a = null;
    o & Pe.SignalBased && (a = t[r][B]),
      a !== null && a.transformFn !== void 0 && (i = a.transformFn(i)),
      o & Pe.HasDecoratorInputTransform &&
      (i = e.inputTransforms[r].call(t, i)),
      e.setInput !== null ? e.setInput(t, a, i, n, r) : Zu(t, a, r, i);
  } finally {
    _(s);
  }
}
function eo(e, t, n, r, o, i, s, a, u, c, l) {
  let d = t.blueprint.slice();
  return d[ve] = o,
    d[g] = r | 4 | 128 | 8 | 64 | 1024,
    (c !== null || e && e[g] & 2048) && (d[g] |= 2048),
    tc(d),
    d[H] = d[Lt] = e,
    d[ie] = n,
    d[ke] = s || e && e[ke],
    d[R] = a || e && e[R],
    d[At] = u || e && e[At] || null,
    d[J] = i,
    d[qr] = vh(),
    d[rn] = l,
    d[Wu] = c,
    d[se] = t.type == 2 ? e[se] : d,
    d;
}
function En(e, t, n, r, o) {
  let i = e.data[t];
  if (i === null) i = Ng(e, t, n, r, o), Fp() && (i.flags |= 32);
  else if (i.type & 64) {
    i.type = n, i.value = r, i.attrs = o;
    let s = Ap();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
  }
  return gn(i, !0), i;
}
function Ng(e, t, n, r, o) {
  let i = ac(),
    s = uc(),
    a = s ? i : i && i.parent,
    u = e.data[t] = Fg(e, a, n, t, r, o);
  return e.firstChild === null && (e.firstChild = u),
    i !== null &&
    (s
      ? i.child == null && u.parent !== null && (i.child = u)
      : i.next === null && (i.next = u, u.prev = i)),
    u;
}
function ml(e, t, n, r) {
  if (n === 0) return -1;
  let o = t.length;
  for (let i = 0; i < n; i++) t.push(r), e.blueprint.push(r), e.data.push(null);
  return o;
}
function yl(e, t, n, r, o) {
  let i = lt(), s = r & 2;
  try {
    tt(-1), s && t.length > ne && hl(e, t, ne, !1), oe(s ? 2 : 0, o), n(r, o);
  } finally {
    tt(i), oe(s ? 3 : 1, o);
  }
}
function vl(e, t, n) {
  ic() && (Bg(e, t, n, ae(n, t)), (n.flags & 64) === 64 && Cl(e, t, n));
}
function Dl(e, t, n = ae) {
  let r = t.localNames;
  if (r !== null) {
    let o = t.index + 1;
    for (let i = 0; i < r.length; i += 2) {
      let s = r[i + 1], a = s === -1 ? n(t, e) : e[s];
      e[o++] = a;
    }
  }
}
function El(e) {
  let t = e.tView;
  return t === null || t.incompleteFirstPass
    ? e.tView = bs(
      1,
      null,
      e.template,
      e.decls,
      e.vars,
      e.directiveDefs,
      e.pipeDefs,
      e.viewQuery,
      e.schemas,
      e.consts,
      e.id,
    )
    : t;
}
function bs(e, t, n, r, o, i, s, a, u, c, l) {
  let d = ne + r, p = d + o, f = xg(d, p), h = typeof c == "function" ? c() : c;
  return f[E] = {
    type: e,
    blueprint: f,
    template: n,
    queries: null,
    viewQuery: a,
    declTNode: t,
    data: f.slice().fill(null, d),
    bindingStartIndex: d,
    expandoStartIndex: p,
    hostBindingOpCodes: null,
    firstCreatePass: !0,
    firstUpdatePass: !0,
    staticViewQueries: !1,
    staticContentQueries: !1,
    preOrderHooks: null,
    preOrderCheckHooks: null,
    contentHooks: null,
    contentCheckHooks: null,
    viewHooks: null,
    viewCheckHooks: null,
    destroyHooks: null,
    cleanup: null,
    contentQueries: null,
    components: null,
    directiveRegistry: typeof i == "function" ? i() : i,
    pipeRegistry: typeof s == "function" ? s() : s,
    firstChild: null,
    schemas: u,
    consts: h,
    incompleteFirstPass: !1,
    ssrId: l,
  };
}
function xg(e, t) {
  let n = [];
  for (let r = 0; r < t; r++) n.push(r < e ? null : Te);
  return n;
}
function Ag(e, t, n, r) {
  let i = r.get(Mh, zc) || n === un.ShadowDom, s = e.selectRootElement(t, i);
  return Og(s), s;
}
function Og(e) {
  Rg(e);
}
var Rg = () => null;
function Fg(e, t, n, r, o, i) {
  let s = t ? t.injectorIndex : -1, a = 0;
  return sc() && (a |= 128), {
    type: n,
    index: r,
    insertBeforeIndex: null,
    injectorIndex: s,
    directiveStart: -1,
    directiveEnd: -1,
    directiveStylingLast: -1,
    componentOffset: -1,
    propertyBindings: null,
    flags: a,
    providerIndexes: 0,
    value: o,
    attrs: i,
    mergedAttrs: null,
    localNames: null,
    initialInputs: void 0,
    inputs: null,
    outputs: null,
    tView: null,
    next: null,
    prev: null,
    projectionNext: null,
    child: null,
    parent: t,
    projection: null,
    styles: null,
    stylesWithoutHost: null,
    residualStyles: void 0,
    classes: null,
    classesWithoutHost: null,
    residualClasses: void 0,
    classBindings: 0,
    styleBindings: 0,
  };
}
function iu(e, t, n, r, o) {
  for (let i in t) {
    if (!t.hasOwnProperty(i)) continue;
    let s = t[i];
    if (s === void 0) continue;
    r ??= {};
    let a, u = Pe.None;
    Array.isArray(s) ? (a = s[0], u = s[1]) : a = s;
    let c = i;
    if (o !== null) {
      if (!o.hasOwnProperty(i)) continue;
      c = o[i];
    }
    e === 0 ? su(r, n, c, a, u) : su(r, n, c, a);
  }
  return r;
}
function su(e, t, n, r, o) {
  let i;
  e.hasOwnProperty(n) ? (i = e[n]).push(t, r) : i = e[n] = [t, r],
    o !== void 0 && i.push(o);
}
function kg(e, t, n) {
  let r = t.directiveStart,
    o = t.directiveEnd,
    i = e.data,
    s = t.attrs,
    a = [],
    u = null,
    c = null;
  for (let l = r; l < o; l++) {
    let d = i[l],
      p = n ? n.get(d) : null,
      f = p ? p.inputs : null,
      h = p ? p.outputs : null;
    u = iu(0, d.inputs, l, u, f), c = iu(1, d.outputs, l, c, h);
    let w = u !== null && s !== null && !Cs(t) ? Kg(u, l, s) : null;
    a.push(w);
  }
  u !== null &&
  (u.hasOwnProperty("class") && (t.flags |= 8),
    u.hasOwnProperty("style") && (t.flags |= 16)),
    t.initialInputs = a,
    t.inputs = u,
    t.outputs = c;
}
function Pg(e) {
  return e === "class"
    ? "className"
    : e === "for"
    ? "htmlFor"
    : e === "formaction"
    ? "formAction"
    : e === "innerHtml"
    ? "innerHTML"
    : e === "readonly"
    ? "readOnly"
    : e === "tabindex"
    ? "tabIndex"
    : e;
}
function to(e, t, n, r, o, i, s, a) {
  let u = ae(t, n), c = t.inputs, l;
  !a && c != null && (l = c[r])
    ? (_s(e, n, l, r, o), Zr(t) && Lg(n, t.index))
    : t.type & 3
    ? (r = Pg(r),
      o = s != null ? s(o, t.value || "", r) : o,
      i.setProperty(u, r, o))
    : t.type & 12;
}
function Lg(e, t) {
  let n = Ve(t, e);
  n[g] & 16 || (n[g] |= 64);
}
function Il(e, t, n, r) {
  if (ic()) {
    let o = r === null ? null : { "": -1 }, i = $g(e, n), s, a;
    i === null ? s = a = null : [s, a] = i,
      s !== null && wl(e, t, n, s, o, a),
      o && Ug(n, r, o);
  }
  n.mergedAttrs = sn(n.mergedAttrs, n.attrs);
}
function wl(e, t, n, r, o, i) {
  for (let c = 0; c < r.length; c++) ni(_r(n, t), e, r[c].type);
  Gg(n, e.data.length, r.length);
  for (let c = 0; c < r.length; c++) {
    let l = r[c];
    l.providersResolver && l.providersResolver(l);
  }
  let s = !1, a = !1, u = ml(e, t, r.length, null);
  for (let c = 0; c < r.length; c++) {
    let l = r[c];
    n.mergedAttrs = sn(n.mergedAttrs, l.hostAttrs),
      Wg(e, n, t, u, l),
      zg(u, l, o),
      l.contentQueries !== null && (n.flags |= 4),
      (l.hostBindings !== null || l.hostAttrs !== null || l.hostVars !== 0) &&
      (n.flags |= 64);
    let d = l.type.prototype;
    !s && (d.ngOnChanges || d.ngOnInit || d.ngDoCheck) &&
    ((e.preOrderHooks ??= []).push(n.index), s = !0),
      !a && (d.ngOnChanges || d.ngDoCheck) &&
      ((e.preOrderCheckHooks ??= []).push(n.index), a = !0),
      u++;
  }
  kg(e, n, i);
}
function Vg(e, t, n, r, o) {
  let i = o.hostBindings;
  if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    jg(s) != a && s.push(a), s.push(n, r, i);
  }
}
function jg(e) {
  let t = e.length;
  for (; t > 0;) {
    let n = e[--t];
    if (typeof n == "number" && n < 0) return n;
  }
  return 0;
}
function Bg(e, t, n, r) {
  let o = n.directiveStart, i = n.directiveEnd;
  Zr(n) && qg(t, n, e.data[o + n.componentOffset]),
    e.firstCreatePass || _r(n, t),
    st(r, t);
  let s = n.initialInputs;
  for (let a = o; a < i; a++) {
    let u = e.data[a], c = rt(t, e, a, n);
    if (st(c, t), s !== null && Yg(t, a - o, c, u, n, s), Ce(u)) {
      let l = Ve(n.index, t);
      l[ie] = rt(t, e, a, n);
    }
  }
}
function Cl(e, t, n) {
  let r = n.directiveStart, o = n.directiveEnd, i = n.index, s = Pp();
  try {
    tt(i);
    for (let a = r; a < o; a++) {
      let u = e.data[a], c = t[a];
      Jo(a),
        (u.hostBindings !== null || u.hostVars !== 0 || u.hostAttrs !== null) &&
        Hg(u, c);
    }
  } finally {
    tt(-1), Jo(s);
  }
}
function Hg(e, t) {
  e.hostBindings !== null && e.hostBindings(1, t);
}
function $g(e, t) {
  let n = e.directiveRegistry, r = null, o = null;
  if (n) {
    for (let i = 0; i < n.length; i++) {
      let s = n[i];
      if (pl(t, s.selectors, !1)) {
        if (r || (r = []), Ce(s)) {
          if (s.findHostDirectiveDefs !== null) {
            let a = [];
            o = o || new Map(),
              s.findHostDirectiveDefs(s, a, o),
              r.unshift(...a, s);
            let u = a.length;
            Ii(e, t, u);
          } else r.unshift(s), Ii(e, t, 0);
        } else {o = o || new Map(),
            s.findHostDirectiveDefs?.(s, r, o),
            r.push(s);}
      }
    }
  }
  return r === null ? null : [r, o];
}
function Ii(e, t, n) {
  t.componentOffset = n, (e.components ??= []).push(t.index);
}
function Ug(e, t, n) {
  if (t) {
    let r = e.localNames = [];
    for (let o = 0; o < t.length; o += 2) {
      let i = n[t[o + 1]];
      if (i == null) throw new M(-301, !1);
      r.push(t[o], i);
    }
  }
}
function zg(e, t, n) {
  if (n) {
    if (t.exportAs) {
      for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
    }
    Ce(t) && (n[""] = e);
  }
}
function Gg(e, t, n) {
  e.flags |= 1,
    e.directiveStart = t,
    e.directiveEnd = t + n,
    e.providerIndexes = t;
}
function Wg(e, t, n, r, o) {
  e.data[r] = o;
  let i = o.factory || (o.factory = St(o.type, !0)), s = new nt(i, Ce(o), je);
  e.blueprint[r] = s, n[r] = s, Vg(e, t, r, ml(e, n, o.hostVars, Te), o);
}
function bl(e) {
  let t = 16;
  return e.signals ? t = 4096 : e.onPush && (t = 64), t;
}
function qg(e, t, n) {
  let r = ae(t, e),
    o = El(n),
    i = e[ke].rendererFactory,
    s = no(
      e,
      eo(
        e,
        o,
        null,
        bl(n),
        r,
        t,
        null,
        i.createRenderer(r, n),
        null,
        null,
        null,
      ),
    );
  e[t.index] = s;
}
function Zg(e, t, n, r, o, i) {
  let s = ae(e, t);
  Qg(t[R], s, i, e.value, n, r, o);
}
function Qg(e, t, n, r, o, i, s) {
  if (i == null) e.removeAttribute(t, o, n);
  else {
    let a = s == null ? Zi(i) : s(i, r || "", o);
    e.setAttribute(t, o, a, n);
  }
}
function Yg(e, t, n, r, o, i) {
  let s = i[t];
  if (s !== null) {
    for (let a = 0; a < s.length;) {
      let u = s[a++], c = s[a++], l = s[a++], d = s[a++];
      gl(r, n, u, c, l, d);
    }
  }
}
function Kg(e, t, n) {
  let r = null, o = 0;
  for (; o < n.length;) {
    let i = n[o];
    if (i === 0) {
      o += 4;
      continue;
    } else if (i === 5) {
      o += 2;
      continue;
    }
    if (typeof i == "number") break;
    if (e.hasOwnProperty(i)) {
      r === null && (r = []);
      let s = e[i];
      for (let a = 0; a < s.length; a += 3) {
        if (s[a] === t) {
          r.push(i, s[a + 1], s[a + 2], n[o + 1]);
          break;
        }
      }
    }
    o += 2;
  }
  return r;
}
function _l(e, t, n, r) {
  return [e, !0, 0, t, null, r, null, n, null, null];
}
function no(e, t) {
  return e[on] ? e[La][fe] = t : e[on] = t, e[La] = t, t;
}
function Ml(e, t, n) {
  return (e === null || Ce(e)) && (n = Dp(n[t.index])), n[R];
}
function Tl(e, t) {
  let n = e[At], r = n ? n.get(it, null) : null;
  r && r.handleError(t);
}
function _s(e, t, n, r, o) {
  for (let i = 0; i < n.length;) {
    let s = n[i++], a = n[i++], u = n[i++], c = t[s], l = e.data[s];
    gl(l, c, r, a, u, o);
  }
}
function Jg(e, t) {
  let n = Ve(t, e), r = n[E];
  Xg(r, n);
  let o = n[ve];
  o !== null && n[rn] === null && (n[rn] = ms(o, n[At])), Ms(r, n, n[ie]);
}
function Xg(e, t) {
  for (let n = t.length; n < e.blueprint.length; n++) t.push(e.blueprint[n]);
}
function Ms(e, t, n) {
  ss(t);
  try {
    let r = e.viewQuery;
    r !== null && di(1, r, n);
    let o = e.template;
    o !== null && yl(e, t, o, 1, n),
      e.firstCreatePass && (e.firstCreatePass = !1),
      t[we]?.finishViewCreation(e),
      e.staticContentQueries && qc(e, t),
      e.staticViewQueries && di(2, e.viewQuery, n);
    let i = e.components;
    i !== null && em(t, i);
  } catch (r) {
    throw e.firstCreatePass &&
      (e.incompleteFirstPass = !0, e.firstCreatePass = !1),
      r;
  } finally {
    t[g] &= -5, as();
  }
}
function em(e, t) {
  for (let n = 0; n < t.length; n++) Jg(e, t[n]);
}
function Ts(e, t, n, r) {
  let o = _(null);
  try {
    let i = t.tView,
      a = e[g] & 4096 ? 4096 : 16,
      u = eo(
        e,
        i,
        n,
        a,
        null,
        t,
        null,
        null,
        r?.injector ?? null,
        r?.embeddedViewInjector ?? null,
        r?.dehydratedView ?? null,
      ),
      c = e[t.index];
    u[Ke] = c;
    let l = e[we];
    return l !== null && (u[we] = l.createEmbeddedView(i)), Ms(i, u, n), u;
  } finally {
    _(o);
  }
}
function tm(e, t) {
  let n = Y + t;
  if (n < e.length) return e[n];
}
function Ar(e, t) {
  return !t || t.firstChild === null || Vc(e);
}
function Ss(e, t, n, r = !0) {
  let o = t[E];
  if (ig(o, t, e, n), r) {
    let s = Ei(n, e), a = t[R], u = sl(a, e[Xe]);
    u !== null && rg(o, e[J], a, t, u, s);
  }
  let i = t[rn];
  i !== null && i.firstChild !== null && (i.firstChild = null);
}
function nm(e, t) {
  let n = Nr(e, t);
  return n !== void 0 && Es(n[E], n), n;
}
function Or(e, t, n, r, o = !1) {
  for (; n !== null;) {
    if (n.type === 128) {
      n = o ? n.projectionNext : n.next;
      continue;
    }
    let i = t[n.index];
    i !== null && r.push(me(i)), _e(i) && rm(i, r);
    let s = n.type;
    if (s & 8) Or(e, t, n.child, r);
    else if (s & 32) {
      let a = vs(n, t), u;
      for (; u = a();) r.push(u);
    } else if (s & 16) {
      let a = ul(t, n);
      if (Array.isArray(a)) r.push(...a);
      else {
        let u = et(t[se]);
        Or(u[E], u, a, r, !0);
      }
    }
    n = o ? n.projectionNext : n.next;
  }
  return r;
}
function rm(e, t) {
  for (let n = Y; n < e.length; n++) {
    let r = e[n], o = r[E].firstChild;
    o !== null && Or(r[E], r, o, t);
  }
  e[Xe] !== e[ve] && t.push(e[Xe]);
}
var Sl = [];
function om(e) {
  return e[ee] ?? im(e);
}
function im(e) {
  let t = Sl.pop() ?? Object.create(am);
  return t.lView = e, t;
}
function sm(e) {
  e.lView[ee] !== e && (e.lView = null, Sl.push(e));
}
var am = W(G({}, Be), {
  consumerIsAlwaysLive: !0,
  kind: "template",
  consumerMarkedDirty: (e) => {
    hn(e.lView);
  },
  consumerOnSignalRead() {
    this.lView[ee] = this;
  },
});
function um(e) {
  let t = e[ee] ?? Object.create(cm);
  return t.lView = e, t;
}
var cm = W(G({}, Be), {
  consumerIsAlwaysLive: !0,
  kind: "template",
  consumerMarkedDirty: (e) => {
    let t = et(e.lView);
    for (; t && !Nl(t[E]);) t = et(t);
    t && rs(t);
  },
  consumerOnSignalRead() {
    this.lView[ee] = this;
  },
});
function Nl(e) {
  return e.type !== 2;
}
function xl(e) {
  if (e[Je] === null) return;
  let t = !0;
  for (; t;) {
    let n = !1;
    for (let r of e[Je]) {
      r.dirty &&
        (n = !0,
          r.zone === null || Zone.current === r.zone
            ? r.run()
            : r.zone.run(() => r.run()));
    }
    t = n && !!(e[g] & 8192);
  }
}
var lm = 100;
function Al(e, t = !0, n = 0) {
  let o = e[ke].rendererFactory, i = !1;
  i || o.begin?.();
  try {
    dm(e, n);
  } catch (s) {
    throw t && Tl(e, s), s;
  } finally {
    i || o.end?.();
  }
}
function dm(e, t) {
  let n = lc();
  try {
    wr(!0), wi(e, t);
    let r = 0;
    for (; Qr(e);) {
      if (r === lm) throw new M(103, !1);
      r++, wi(e, 1);
    }
  } finally {
    wr(n);
  }
}
function fm(e, t, n, r) {
  if (pn(t)) return;
  let o = t[g], i = !1, s = !1;
  ss(t);
  let a = !0, u = null, c = null;
  i ||
    (Nl(e)
      ? (c = om(t), u = gt(c))
      : zs() === null
      ? (a = !1, c = um(t), u = gt(c))
      : t[ee] && (mt(t[ee]), t[ee] = null));
  try {
    tc(t), Rp(e.bindingStartIndex), n !== null && yl(e, t, n, 2, r);
    let l = (o & 3) === 3;
    if (!i) {
      if (l) {
        let f = e.preOrderCheckHooks;
        f !== null && cr(t, f, null);
      } else {
        let f = e.preOrderHooks;
        f !== null && lr(t, f, 0, null), Oo(t, 0);
      }
    }
    if (
      s || pm(t), xl(t), Ol(t, 0), e.contentQueries !== null && qc(e, t), !i
    ) {
      if (l) {
        let f = e.contentCheckHooks;
        f !== null && cr(t, f);
      } else {
        let f = e.contentHooks;
        f !== null && lr(t, f, 1), Oo(t, 1);
      }
    }
    gm(e, t);
    let d = e.components;
    d !== null && Fl(t, d, 0);
    let p = e.viewQuery;
    if (p !== null && di(2, p, r), !i) {
      if (l) {
        let f = e.viewCheckHooks;
        f !== null && cr(t, f);
      } else {
        let f = e.viewHooks;
        f !== null && lr(t, f, 2), Oo(t, 2);
      }
    }
    if (e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[ur]) {
      for (let f of t[ur]) f();
      t[ur] = null;
    }
    i || (t[g] &= -73);
  } catch (l) {
    throw i || hn(t), l;
  } finally {
    c !== null && (Ut(c, u), a && sm(c)), as();
  }
}
function Ol(e, t) {
  for (let n = Hc(e); n !== null; n = $c(n)) {
    for (let r = Y; r < n.length; r++) {
      let o = n[r];
      Rl(o, t);
    }
  }
}
function pm(e) {
  for (let t = Hc(e); t !== null; t = $c(t)) {
    if (!(t[g] & 2)) continue;
    let n = t[Ot];
    for (let r = 0; r < n.length; r++) {
      let o = n[r];
      rs(o);
    }
  }
}
function hm(e, t, n) {
  let r = Ve(t, e);
  Rl(r, n);
}
function Rl(e, t) {
  ns(e) && wi(e, t);
}
function wi(e, t) {
  let r = e[E], o = e[g], i = e[ee], s = !!(t === 0 && o & 16);
  if (
    s ||= !!(o & 64 && t === 0),
      s ||= !!(o & 1024),
      s ||= !!(i?.dirty && zt(i)),
      s ||= !1,
      i && (i.dirty = !1),
      e[g] &= -9217,
      s
  ) fm(r, e, r.template, e[ie]);
  else if (o & 8192) {
    xl(e), Ol(e, 1);
    let a = r.components;
    a !== null && Fl(e, a, 1);
  }
}
function Fl(e, t, n) {
  for (let r = 0; r < t.length; r++) hm(e, t[r], n);
}
function gm(e, t) {
  let n = e.hostBindingOpCodes;
  if (n !== null) {
    try {
      for (let r = 0; r < n.length; r++) {
        let o = n[r];
        if (o < 0) tt(~o);
        else {
          let i = o, s = n[++r], a = n[++r];
          kp(s, i);
          let u = t[i];
          oe(24, u), a(2, u), oe(25, u);
        }
      }
    } finally {
      tt(-1);
    }
  }
}
function Ns(e, t) {
  let n = lc() ? 64 : 1088;
  for (e[ke].changeDetectionScheduler?.notify(t); e;) {
    e[g] |= n;
    let r = et(e);
    if (Zo(e) && !r) return e;
    e = r;
  }
  return null;
}
var at = class {
    _lView;
    _cdRefInjectingView;
    notifyErrorHandler;
    _appRef = null;
    _attachedToViewContainer = !1;
    get rootNodes() {
      let t = this._lView, n = t[E];
      return Or(n, t, n.firstChild, []);
    }
    constructor(t, n, r = !0) {
      this._lView = t,
        this._cdRefInjectingView = n,
        this.notifyErrorHandler = r;
    }
    get context() {
      return this._lView[ie];
    }
    get dirty() {
      return !!(this._lView[g] & 9280) || !!this._lView[ee]?.dirty;
    }
    set context(t) {
      this._lView[ie] = t;
    }
    get destroyed() {
      return pn(this._lView);
    }
    destroy() {
      if (this._appRef) this._appRef.detachView(this);
      else if (this._attachedToViewContainer) {
        let t = this._lView[H];
        if (_e(t)) {
          let n = t[Er], r = n ? n.indexOf(this) : -1;
          r > -1 && (Nr(t, r), mr(n, r));
        }
        this._attachedToViewContainer = !1;
      }
      Es(this._lView[E], this._lView);
    }
    onDestroy(t) {
      nc(this._lView, t);
    }
    markForCheck() {
      Ns(this._cdRefInjectingView || this._lView, 4);
    }
    markForRefresh() {
      rs(this._cdRefInjectingView || this._lView);
    }
    detach() {
      this._lView[g] &= -129;
    }
    reattach() {
      Yo(this._lView), this._lView[g] |= 128;
    }
    detectChanges() {
      this._lView[g] |= 1024, Al(this._lView, this.notifyErrorHandler);
    }
    checkNoChanges() {}
    attachToViewContainerRef() {
      if (this._appRef) throw new M(902, !1);
      this._attachedToViewContainer = !0;
    }
    detachFromAppRef() {
      this._appRef = null;
      let t = Zo(this._lView), n = this._lView[Ke];
      n !== null && !t && Ds(n, this._lView), nl(this._lView[E], this._lView);
    }
    attachToAppRef(t) {
      if (this._attachedToViewContainer) throw new M(902, !1);
      this._appRef = t;
      let n = Zo(this._lView), r = this._lView[Ke];
      r !== null && !n && rl(r, this._lView), Yo(this._lView);
    }
  },
  Rt = (() => {
    class e {
      static __NG_ELEMENT_ID__ = vm;
    }
    return e;
  })(),
  mm = Rt,
  ym = class extends mm {
    _declarationLView;
    _declarationTContainer;
    elementRef;
    constructor(t, n, r) {
      super(),
        this._declarationLView = t,
        this._declarationTContainer = n,
        this.elementRef = r;
    }
    get ssrId() {
      return this._declarationTContainer.tView?.ssrId || null;
    }
    createEmbeddedView(t, n) {
      return this.createEmbeddedViewImpl(t, n);
    }
    createEmbeddedViewImpl(t, n, r) {
      let o = Ts(this._declarationLView, this._declarationTContainer, t, {
        embeddedViewInjector: n,
        dehydratedView: r,
      });
      return new at(o);
    }
  };
function vm() {
  return ro(V(), C());
}
function ro(e, t) {
  return e.type & 4 ? new ym(t, e, Vt(e, t)) : null;
}
var IM = new RegExp(`^(\\d+)*(${_h}|${bh})*(.*)`);
var Dm = () => null;
function Rr(e, t) {
  return Dm(e, t);
}
var Ci = class {},
  Fr = class {},
  bi = class {
    resolveComponentFactory(t) {
      throw Error(`No component factory found for ${Q(t)}.`);
    }
  },
  Ft = class {
    static NULL = new bi();
  },
  kr = class {},
  kl = (() => {
    class e {
      destroyNode = null;
      static __NG_ELEMENT_ID__ = () => Em();
    }
    return e;
  })();
function Em() {
  let e = C(), t = V(), n = Ve(t.index, e);
  return (Oe(n) ? n : e)[R];
}
var Im = (() => {
  class e {
    static ɵprov = O({ token: e, providedIn: "root", factory: () => null });
  }
  return e;
})();
function _i(e, t, n) {
  let r = n ? e.styles : null, o = n ? e.classes : null, i = 0;
  if (t !== null) {
    for (let s = 0; s < t.length; s++) {
      let a = t[s];
      if (typeof a == "number") i = a;
      else if (i == 1) o = Ho(o, a);
      else if (i == 2) {
        let u = a, c = t[++s];
        r = Ho(r, u + ": " + c + ";");
      }
    }
  }
  n ? e.styles = r : e.stylesWithoutHost = r,
    n ? e.classes = o : e.classesWithoutHost = o;
}
var Pr = class extends Ft {
  ngModule;
  constructor(t) {
    super(), this.ngModule = t;
  }
  resolveComponentFactory(t) {
    let n = Re(t);
    return new kt(n, this.ngModule);
  }
};
function au(e, t) {
  let n = [];
  for (let r in e) {
    if (!e.hasOwnProperty(r)) continue;
    let o = e[r];
    if (o === void 0) continue;
    let i = Array.isArray(o), s = i ? o[0] : o, a = i ? o[1] : Pe.None;
    t
      ? n.push({
        propName: s,
        templateName: r,
        isSignal: (a & Pe.SignalBased) !== 0,
      })
      : n.push({ propName: s, templateName: r });
  }
  return n;
}
function wm(e) {
  let t = e.toLowerCase();
  return t === "svg" ? Xu : t === "math" ? vp : null;
}
var kt = class extends Fr {
    componentDef;
    ngModule;
    selector;
    componentType;
    ngContentSelectors;
    isBoundToModule;
    get inputs() {
      let t = this.componentDef, n = t.inputTransforms, r = au(t.inputs, !0);
      if (n !== null) {
        for (let o of r) {
          n.hasOwnProperty(o.propName) && (o.transform = n[o.propName]);
        }
      }
      return r;
    }
    get outputs() {
      return au(this.componentDef.outputs, !1);
    }
    constructor(t, n) {
      super(),
        this.componentDef = t,
        this.ngModule = n,
        this.componentType = t.type,
        this.selector = Tg(t.selectors),
        this.ngContentSelectors = t.ngContentSelectors
          ? t.ngContentSelectors
          : [],
        this.isBoundToModule = !!n;
    }
    create(t, n, r, o) {
      let i = _(null);
      try {
        o = o || this.ngModule;
        let s = o instanceof Fe ? o : o?.injector;
        s && this.componentDef.getStandaloneInjector !== null &&
          (s = this.componentDef.getStandaloneInjector(s) || s);
        let a = s ? new ei(t, s) : t, u = a.get(kr, null);
        if (u === null) throw new M(407, !1);
        let c = a.get(Im, null),
          l = a.get(ot, null),
          d = { rendererFactory: u, sanitizer: c, changeDetectionScheduler: l },
          p = u.createRenderer(null, this.componentDef),
          f = this.componentDef.selectors[0][0] || "div",
          h = r
            ? Ag(p, r, this.componentDef.encapsulation, a)
            : tl(p, f, wm(f)),
          w = 512;
        this.componentDef.signals
          ? w |= 4096
          : this.componentDef.onPush || (w |= 16);
        let F = null;
        h !== null && (F = ms(h, a, !0));
        let S = bs(0, null, null, 1, 0, null, null, null, null, null, null),
          j = eo(null, S, null, w, null, null, d, p, a, null, F);
        ss(j);
        let Ee, ue, pt = null;
        try {
          let X = this.componentDef, ht, oo = null;
          X.findHostDirectiveDefs
            ? (ht = [],
              oo = new Map(),
              X.findHostDirectiveDefs(X, ht, oo),
              ht.push(X))
            : ht = [X];
          let Cd = Cm(j, h);
          pt = bm(Cd, h, X, ht, j, d, p),
            ue = ts(S, ne),
            h && Tm(p, X, h, r),
            n !== void 0 && Sm(ue, this.ngContentSelectors, n),
            Ee = Mm(pt, X, ht, oo, j, [Nm]),
            Ms(S, j, null);
        } catch (X) {
          throw pt !== null && ui(pt), ui(j), X;
        } finally {
          as();
        }
        return new Mi(this.componentType, Ee, Vt(ue, j), j, ue);
      } finally {
        _(i);
      }
    }
  },
  Mi = class extends Ci {
    location;
    _rootLView;
    _tNode;
    instance;
    hostView;
    changeDetectorRef;
    componentType;
    previousInputValues = null;
    constructor(t, n, r, o, i) {
      super(),
        this.location = r,
        this._rootLView = o,
        this._tNode = i,
        this.instance = n,
        this.hostView = this.changeDetectorRef = new at(o, void 0, !1),
        this.componentType = t;
    }
    setInput(t, n) {
      let r = this._tNode.inputs, o;
      if (r !== null && (o = r[t])) {
        if (
          this.previousInputValues ??= new Map(),
            this.previousInputValues.has(t) &&
            Object.is(this.previousInputValues.get(t), n)
        ) return;
        let i = this._rootLView;
        _s(i[E], i, o, t, n), this.previousInputValues.set(t, n);
        let s = Ve(this._tNode.index, i);
        Ns(s, 1);
      }
    }
    get injector() {
      return new Ye(this._tNode, this._rootLView);
    }
    destroy() {
      this.hostView.destroy();
    }
    onDestroy(t) {
      this.hostView.onDestroy(t);
    }
  };
function Cm(e, t) {
  let n = e[E], r = ne;
  return e[r] = t, En(n, r, 2, "#host", null);
}
function bm(e, t, n, r, o, i, s) {
  let a = o[E];
  _m(r, e, t, s);
  let u = null;
  t !== null && (u = ms(t, o[At]));
  let c = i.rendererFactory.createRenderer(t, n),
    l = eo(o, El(n), null, bl(n), o[e.index], e, i, c, null, null, u);
  return a.firstCreatePass && Ii(a, e, r.length - 1), no(o, l), o[e.index] = l;
}
function _m(e, t, n, r) {
  for (let o of e) t.mergedAttrs = sn(t.mergedAttrs, o.hostAttrs);
  t.mergedAttrs !== null &&
    (_i(t, t.mergedAttrs, !0), n !== null && dl(r, n, t));
}
function Mm(e, t, n, r, o, i) {
  let s = V(), a = o[E], u = ae(s, o);
  wl(a, o, s, n, null, r);
  for (let l = 0; l < n.length; l++) {
    let d = s.directiveStart + l, p = rt(o, a, d, s);
    st(p, o);
  }
  Cl(a, o, s), u && st(u, o);
  let c = rt(o, a, s.directiveStart + s.componentOffset, s);
  if (e[ie] = o[ie] = c, i !== null) { for (let l of i) l(c, t); }
  return Zc(a, s, o), c;
}
function Tm(e, t, n, r) {
  if (r) Xo(e, n, ["ng-version", "19.1.1"]);
  else {
    let { attrs: o, classes: i } = Sg(t.selectors[0]);
    o && Xo(e, n, o), i && i.length > 0 && ll(e, n, i.join(" "));
  }
}
function Sm(e, t, n) {
  let r = e.projection = [];
  for (let o = 0; o < t.length; o++) {
    let i = n[o];
    r.push(i != null && i.length ? Array.from(i) : null);
  }
}
function Nm() {
  let e = V();
  ls(C()[E], e);
}
var Bt = (() => {
  class e {
    static __NG_ELEMENT_ID__ = xm;
  }
  return e;
})();
function xm() {
  let e = V();
  return Ll(e, C());
}
var Am = Bt,
  Pl = class extends Am {
    _lContainer;
    _hostTNode;
    _hostLView;
    constructor(t, n, r) {
      super(), this._lContainer = t, this._hostTNode = n, this._hostLView = r;
    }
    get element() {
      return Vt(this._hostTNode, this._hostLView);
    }
    get injector() {
      return new Ye(this._hostTNode, this._hostLView);
    }
    get parentInjector() {
      let t = ds(this._hostTNode, this._hostLView);
      if (Ec(t)) {
        let n = br(t, this._hostLView), r = Cr(t), o = n[E].data[r + 8];
        return new Ye(o, n);
      } else return new Ye(null, this._hostLView);
    }
    clear() {
      for (; this.length > 0;) this.remove(this.length - 1);
    }
    get(t) {
      let n = uu(this._lContainer);
      return n !== null && n[t] || null;
    }
    get length() {
      return this._lContainer.length - Y;
    }
    createEmbeddedView(t, n, r) {
      let o, i;
      typeof r == "number" ? o = r : r != null && (o = r.index, i = r.injector);
      let s = Rr(this._lContainer, t.ssrId),
        a = t.createEmbeddedViewImpl(n || {}, i, s);
      return this.insertImpl(a, o, Ar(this._hostTNode, s)), a;
    }
    createComponent(t, n, r, o, i) {
      let s = t && !hp(t), a;
      if (s) a = n;
      else {
        let h = n || {};
        a = h.index,
          r = h.injector,
          o = h.projectableNodes,
          i = h.environmentInjector || h.ngModuleRef;
      }
      let u = s ? t : new kt(Re(t)), c = r || this.parentInjector;
      if (!i && u.ngModule == null) {
        let w = (s ? c : this.parentInjector).get(Fe, null);
        w && (i = w);
      }
      let l = Re(u.componentType ?? {}),
        d = Rr(this._lContainer, l?.id ?? null),
        p = d?.firstChild ?? null,
        f = u.create(c, o, p, i);
      return this.insertImpl(f.hostView, a, Ar(this._hostTNode, d)), f;
    }
    insert(t, n) {
      return this.insertImpl(t, n, !0);
    }
    insertImpl(t, n, r) {
      let o = t._lView;
      if (wp(o)) {
        let a = this.indexOf(t);
        if (a !== -1) this.detach(a);
        else {
          let u = o[H], c = new Pl(u, u[J], u[H]);
          c.detach(c.indexOf(t));
        }
      }
      let i = this._adjustIndex(n), s = this._lContainer;
      return Ss(s, o, i, r), t.attachToViewContainerRef(), Ru(Po(s), i, t), t;
    }
    move(t, n) {
      return this.insert(t, n);
    }
    indexOf(t) {
      let n = uu(this._lContainer);
      return n !== null ? n.indexOf(t) : -1;
    }
    remove(t) {
      let n = this._adjustIndex(t, -1), r = Nr(this._lContainer, n);
      r && (mr(Po(this._lContainer), n), Es(r[E], r));
    }
    detach(t) {
      let n = this._adjustIndex(t, -1), r = Nr(this._lContainer, n);
      return r && mr(Po(this._lContainer), n) != null ? new at(r) : null;
    }
    _adjustIndex(t, n = 0) {
      return t ?? this.length + n;
    }
  };
function uu(e) {
  return e[Er];
}
function Po(e) {
  return e[Er] || (e[Er] = []);
}
function Ll(e, t) {
  let n, r = t[e.index];
  return _e(r) ? n = r : (n = _l(r, t, null, e), t[e.index] = n, no(t, n)),
    Rm(n, t, e, r),
    new Pl(n, e, t);
}
function Om(e, t) {
  let n = e[R], r = n.createComment(""), o = ae(t, e), i = sl(n, o);
  return xr(n, i, r, cg(n, o), !1), r;
}
var Rm = Pm, Fm = () => !1;
function km(e, t, n) {
  return Fm(e, t, n);
}
function Pm(e, t, n, r) {
  if (e[Xe]) return;
  let o;
  n.type & 8 ? o = me(r) : o = Om(t, n), e[Xe] = o;
}
var Ti = class e {
    queryList;
    matches = null;
    constructor(t) {
      this.queryList = t;
    }
    clone() {
      return new e(this.queryList);
    }
    setDirty() {
      this.queryList.setDirty();
    }
  },
  Si = class e {
    queries;
    constructor(t = []) {
      this.queries = t;
    }
    createEmbeddedView(t) {
      let n = t.queries;
      if (n !== null) {
        let r = t.contentQueries !== null ? t.contentQueries[0] : n.length,
          o = [];
        for (let i = 0; i < r; i++) {
          let s = n.getByIndex(i), a = this.queries[s.indexInDeclarationView];
          o.push(a.clone());
        }
        return new e(o);
      }
      return null;
    }
    insertView(t) {
      this.dirtyQueriesWithMatches(t);
    }
    detachView(t) {
      this.dirtyQueriesWithMatches(t);
    }
    finishViewCreation(t) {
      this.dirtyQueriesWithMatches(t);
    }
    dirtyQueriesWithMatches(t) {
      for (let n = 0; n < this.queries.length; n++) {
        As(t, n).matches !== null && this.queries[n].setDirty();
      }
    }
  },
  Lr = class {
    flags;
    read;
    predicate;
    constructor(t, n, r = null) {
      this.flags = n,
        this.read = r,
        typeof t == "string" ? this.predicate = $m(t) : this.predicate = t;
    }
  },
  Ni = class e {
    queries;
    constructor(t = []) {
      this.queries = t;
    }
    elementStart(t, n) {
      for (let r = 0; r < this.queries.length; r++) {
        this.queries[r].elementStart(t, n);
      }
    }
    elementEnd(t) {
      for (let n = 0; n < this.queries.length; n++) {
        this.queries[n].elementEnd(t);
      }
    }
    embeddedTView(t) {
      let n = null;
      for (let r = 0; r < this.length; r++) {
        let o = n !== null ? n.length : 0,
          i = this.getByIndex(r).embeddedTView(t, o);
        i && (i.indexInDeclarationView = r, n !== null ? n.push(i) : n = [i]);
      }
      return n !== null ? new e(n) : null;
    }
    template(t, n) {
      for (let r = 0; r < this.queries.length; r++) {
        this.queries[r].template(t, n);
      }
    }
    getByIndex(t) {
      return this.queries[t];
    }
    get length() {
      return this.queries.length;
    }
    track(t) {
      this.queries.push(t);
    }
  },
  xi = class e {
    metadata;
    matches = null;
    indexInDeclarationView = -1;
    crossesNgTemplate = !1;
    _declarationNodeIndex;
    _appliesToNextNode = !0;
    constructor(t, n = -1) {
      this.metadata = t, this._declarationNodeIndex = n;
    }
    elementStart(t, n) {
      this.isApplyingToNode(n) && this.matchTNode(t, n);
    }
    elementEnd(t) {
      this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1);
    }
    template(t, n) {
      this.elementStart(t, n);
    }
    embeddedTView(t, n) {
      return this.isApplyingToNode(t)
        ? (this.crossesNgTemplate = !0,
          this.addMatch(-t.index, n),
          new e(this.metadata))
        : null;
    }
    isApplyingToNode(t) {
      if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
        let n = this._declarationNodeIndex, r = t.parent;
        for (; r !== null && r.type & 8 && r.index !== n;) r = r.parent;
        return n === (r !== null ? r.index : -1);
      }
      return this._appliesToNextNode;
    }
    matchTNode(t, n) {
      let r = this.metadata.predicate;
      if (Array.isArray(r)) {
        for (let o = 0; o < r.length; o++) {
          let i = r[o];
          this.matchTNodeWithReadOption(t, n, Lm(n, i)),
            this.matchTNodeWithReadOption(t, n, dr(n, t, i, !1, !1));
        }
      } else {r === Rt
          ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1)
          : this.matchTNodeWithReadOption(t, n, dr(n, t, r, !1, !1));}
    }
    matchTNodeWithReadOption(t, n, r) {
      if (r !== null) {
        let o = this.metadata.read;
        if (o !== null) {
          if (o === jt || o === Bt || o === Rt && n.type & 4) {
            this.addMatch(n.index, -2);
          } else {
            let i = dr(n, t, o, !1, !1);
            i !== null && this.addMatch(n.index, i);
          }
        } else this.addMatch(n.index, r);
      }
    }
    addMatch(t, n) {
      this.matches === null ? this.matches = [t, n] : this.matches.push(t, n);
    }
  };
function Lm(e, t) {
  let n = e.localNames;
  if (n !== null) {
    for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
  }
  return null;
}
function Vm(e, t) {
  return e.type & 11 ? Vt(e, t) : e.type & 4 ? ro(e, t) : null;
}
function jm(e, t, n, r) {
  return n === -1 ? Vm(t, e) : n === -2 ? Bm(e, t, r) : rt(e, e[E], n, t);
}
function Bm(e, t, n) {
  if (n === jt) return Vt(t, e);
  if (n === Rt) return ro(t, e);
  if (n === Bt) return Ll(t, e);
}
function Vl(e, t, n, r) {
  let o = t[we].queries[r];
  if (o.matches === null) {
    let i = e.data, s = n.matches, a = [];
    for (let u = 0; s !== null && u < s.length; u += 2) {
      let c = s[u];
      if (c < 0) a.push(null);
      else {
        let l = i[c];
        a.push(jm(t, l, s[u + 1], n.metadata.read));
      }
    }
    o.matches = a;
  }
  return o.matches;
}
function Ai(e, t, n, r) {
  let o = e.queries.getByIndex(n), i = o.matches;
  if (i !== null) {
    let s = Vl(e, t, o, n);
    for (let a = 0; a < i.length; a += 2) {
      let u = i[a];
      if (u > 0) r.push(s[a / 2]);
      else {
        let c = i[a + 1], l = t[-u];
        for (let d = Y; d < l.length; d++) {
          let p = l[d];
          p[Ke] === p[H] && Ai(p[E], p, c, r);
        }
        if (l[Ot] !== null) {
          let d = l[Ot];
          for (let p = 0; p < d.length; p++) {
            let f = d[p];
            Ai(f[E], f, c, r);
          }
        }
      }
    }
  }
  return r;
}
function xs(e, t) {
  return e[we].queries[t].queryList;
}
function jl(e, t, n) {
  let r = new ai((n & 4) === 4);
  return _p(e, t, r, r.destroy),
    (t[we] ??= new Si()).queries.push(new Ti(r)) - 1;
}
function Hm(e, t, n) {
  let r = k();
  return r.firstCreatePass &&
    (Hl(r, new Lr(e, t, n), -1), (t & 2) === 2 && (r.staticViewQueries = !0)),
    jl(r, C(), t);
}
function Bl(e, t, n, r) {
  let o = k();
  if (o.firstCreatePass) {
    let i = V();
    Hl(o, new Lr(t, n, r), i.index),
      Um(o, e),
      (n & 2) === 2 && (o.staticContentQueries = !0);
  }
  return jl(o, C(), n);
}
function $m(e) {
  return e.split(",").map((t) => t.trim());
}
function Hl(e, t, n) {
  e.queries === null && (e.queries = new Ni()), e.queries.track(new xi(t, n));
}
function Um(e, t) {
  let n = e.contentQueries || (e.contentQueries = []),
    r = n.length ? n[n.length - 1] : -1;
  t !== r && n.push(e.queries.length - 1, t);
}
function As(e, t) {
  return e.queries.getByIndex(t);
}
function $l(e, t) {
  let n = e[E], r = As(n, t);
  return r.crossesNgTemplate ? Ai(n, e, t, []) : Vl(n, e, r, t);
}
function Ul(e, t, n) {
  let r,
    o = po(() => {
      r._dirtyCounter();
      let i = qm(r, e);
      if (t && i === void 0) throw new M(-951, !1);
      return i;
    });
  return r = o[B], r._dirtyCounter = hh(0), r._flatValue = void 0, o;
}
function zm(e) {
  return Ul(!0, !1, e);
}
function Gm(e) {
  return Ul(!0, !0, e);
}
function Wm(e, t) {
  let n = e[B];
  n._lView = C(),
    n._queryIndex = t,
    n._queryList = xs(n._lView, t),
    n._queryList.onDirty(() => n._dirtyCounter.update((r) => r + 1));
}
function qm(e, t) {
  let n = e._lView, r = e._queryIndex;
  if (n === void 0 || r === void 0 || n[g] & 4) return t ? void 0 : z;
  let o = xs(n, r), i = $l(n, r);
  return o.reset(i, Pc),
    t
      ? o.first
      : o._changesDetected || e._flatValue === void 0
      ? e._flatValue = o.toArray()
      : e._flatValue;
}
function cu(e, t) {
  return zm(t);
}
function Zm(e, t) {
  return Gm(t);
}
var CM = (cu.required = Zm, cu);
var Le = class {}, Oi = class {};
var Ri = class extends Le {
    ngModuleType;
    _parent;
    _bootstrapComponents = [];
    _r3Injector;
    instance;
    destroyCbs = [];
    componentFactoryResolver = new Pr(this);
    constructor(t, n, r, o = !0) {
      super(), this.ngModuleType = t, this._parent = n;
      let i = Pu(t);
      this._bootstrapComponents = el(i.bootstrap),
        this._r3Injector = xc(
          t,
          n,
          [{ provide: Le, useValue: this }, {
            provide: Ft,
            useValue: this.componentFactoryResolver,
          }, ...r],
          Q(t),
          new Set(["environment"]),
        ),
        o && this.resolveInjectorInitializers();
    }
    resolveInjectorInitializers() {
      this._r3Injector.resolveInjectorInitializers(),
        this.instance = this._r3Injector.get(this.ngModuleType);
    }
    get injector() {
      return this._r3Injector;
    }
    destroy() {
      let t = this._r3Injector;
      !t.destroyed && t.destroy(),
        this.destroyCbs.forEach((n) => n()),
        this.destroyCbs = null;
    }
    onDestroy(t) {
      this.destroyCbs.push(t);
    }
  },
  Fi = class extends Oi {
    moduleType;
    constructor(t) {
      super(), this.moduleType = t;
    }
    create(t) {
      return new Ri(this.moduleType, t, []);
    }
  };
var Vr = class extends Le {
  injector;
  componentFactoryResolver = new Pr(this);
  instance = null;
  constructor(t) {
    super();
    let n = new nn(
      [...t.providers, { provide: Le, useValue: this }, {
        provide: Ft,
        useValue: this.componentFactoryResolver,
      }],
      t.parent || Gr(),
      t.debugName,
      new Set(["environment"]),
    );
    this.injector = n,
      t.runEnvironmentInitializers && n.resolveInjectorInitializers();
  }
  destroy() {
    this.injector.destroy();
  }
  onDestroy(t) {
    this.injector.onDestroy(t);
  }
};
function Qm(e, t, n = null) {
  return new Vr({
    providers: e,
    parent: t,
    debugName: n,
    runEnvironmentInitializers: !0,
  }).injector;
}
var Ym = (() => {
  class e {
    _injector;
    cachedInjectors = new Map();
    constructor(n) {
      this._injector = n;
    }
    getOrCreateStandaloneInjector(n) {
      if (!n.standalone) return null;
      if (!this.cachedInjectors.has(n)) {
        let r = ju(!1, n.type),
          o = r.length > 0
            ? Qm([r], this._injector, `Standalone[${n.type.name}]`)
            : null;
        this.cachedInjectors.set(n, o);
      }
      return this.cachedInjectors.get(n);
    }
    ngOnDestroy() {
      try {
        for (let n of this.cachedInjectors.values()) n !== null && n.destroy();
      } finally {
        this.cachedInjectors.clear();
      }
    }
    static ɵprov = O({
      token: e,
      providedIn: "environment",
      factory: () => new e(K(Fe)),
    });
  }
  return e;
})();
function bM(e) {
  return dn(() => {
    let t = Gl(e),
      n = W(G({}, t), {
        decls: e.decls,
        vars: e.vars,
        template: e.template,
        consts: e.consts || null,
        ngContentSelectors: e.ngContentSelectors,
        onPush: e.changeDetection === jc.OnPush,
        directiveDefs: null,
        pipeDefs: null,
        dependencies: t.standalone && e.dependencies || null,
        getStandaloneInjector: t.standalone
          ? (o) => o.get(Ym).getOrCreateStandaloneInjector(n)
          : null,
        getExternalStyles: null,
        signals: e.signals ?? !1,
        data: e.data || {},
        encapsulation: e.encapsulation || un.Emulated,
        styles: e.styles || z,
        _: null,
        schemas: e.schemas || null,
        tView: null,
        id: "",
      });
    t.standalone && De("NgStandalone"), Wl(n);
    let r = e.dependencies;
    return n.directiveDefs = du(r, !1), n.pipeDefs = du(r, !0), n.id = Xm(n), n;
  });
}
function Km(e) {
  return Re(e) || Lu(e);
}
function Jm(e) {
  return e !== null;
}
function zl(e) {
  return dn(() => ({
    type: e.type,
    bootstrap: e.bootstrap || z,
    declarations: e.declarations || z,
    imports: e.imports || z,
    exports: e.exports || z,
    transitiveCompileScopes: null,
    schemas: e.schemas || null,
    id: e.id || null,
  }));
}
function lu(e, t) {
  if (e == null) return Nt;
  let n = {};
  for (let r in e) {
    if (e.hasOwnProperty(r)) {
      let o = e[r], i, s, a = Pe.None;
      Array.isArray(o) ? (a = o[0], i = o[1], s = o[2] ?? i) : (i = o, s = o),
        t ? (n[i] = a !== Pe.None ? [r, a] : r, t[i] = s) : n[i] = r;
    }
  }
  return n;
}
function Os(e) {
  return dn(() => {
    let t = Gl(e);
    return Wl(t), t;
  });
}
function Gl(e) {
  let t = {};
  return {
    type: e.type,
    providersResolver: null,
    factory: null,
    hostBindings: e.hostBindings || null,
    hostVars: e.hostVars || 0,
    hostAttrs: e.hostAttrs || null,
    contentQueries: e.contentQueries || null,
    declaredInputs: t,
    inputTransforms: null,
    inputConfig: e.inputs || Nt,
    exportAs: e.exportAs || null,
    standalone: e.standalone ?? !0,
    signals: e.signals === !0,
    selectors: e.selectors || z,
    viewQuery: e.viewQuery || null,
    features: e.features || null,
    setInput: null,
    findHostDirectiveDefs: null,
    hostDirectives: null,
    inputs: lu(e.inputs, t),
    outputs: lu(e.outputs),
    debugInfo: null,
  };
}
function Wl(e) {
  e.features?.forEach((t) => t(e));
}
function du(e, t) {
  if (!e) return null;
  let n = t ? Vu : Km;
  return () => (typeof e == "function" ? e() : e).map((r) => n(r)).filter(Jm);
}
function Xm(e) {
  let t = 0,
    n = typeof e.consts == "function" ? "" : e.consts,
    r = [
      e.selectors,
      e.ngContentSelectors,
      e.hostVars,
      e.hostAttrs,
      n,
      e.vars,
      e.decls,
      e.encapsulation,
      e.standalone,
      e.signals,
      e.exportAs,
      JSON.stringify(e.inputs),
      JSON.stringify(e.outputs),
      Object.getOwnPropertyNames(e.type.prototype),
      !!e.contentQueries,
      !!e.viewQuery,
    ];
  for (let i of r.join("|")) t = Math.imul(31, t) + i.charCodeAt(0) << 0;
  return t += 2147483648, "c" + t;
}
function ey(e) {
  return Object.getPrototypeOf(e.prototype).constructor;
}
function ty(e) {
  let t = ey(e.type), n = !0, r = [e];
  for (; t;) {
    let o;
    if (Ce(e)) o = t.ɵcmp || t.ɵdir;
    else {
      if (t.ɵcmp) throw new M(903, !1);
      o = t.ɵdir;
    }
    if (o) {
      if (n) {
        r.push(o);
        let s = e;
        s.inputs = ir(e.inputs),
          s.inputTransforms = ir(e.inputTransforms),
          s.declaredInputs = ir(e.declaredInputs),
          s.outputs = ir(e.outputs);
        let a = o.hostBindings;
        a && sy(e, a);
        let u = o.viewQuery, c = o.contentQueries;
        if (
          u && oy(e, u),
            c && iy(e, c),
            ny(e, o),
            Nf(e.outputs, o.outputs),
            Ce(o) && o.data.animation
        ) {
          let l = e.data;
          l.animation = (l.animation || []).concat(o.data.animation);
        }
      }
      let i = o.features;
      if (i) {
        for (let s = 0; s < i.length; s++) {
          let a = i[s];
          a && a.ngInherit && a(e), a === ty && (n = !1);
        }
      }
    }
    t = Object.getPrototypeOf(t);
  }
  ry(r);
}
function ny(e, t) {
  for (let n in t.inputs) {
    if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n)) continue;
    let r = t.inputs[n];
    if (
      r !== void 0 &&
      (e.inputs[n] = r,
        e.declaredInputs[n] = t.declaredInputs[n],
        t.inputTransforms !== null)
    ) {
      let o = Array.isArray(r) ? r[0] : r;
      if (!t.inputTransforms.hasOwnProperty(o)) continue;
      e.inputTransforms ??= {}, e.inputTransforms[o] = t.inputTransforms[o];
    }
  }
}
function ry(e) {
  let t = 0, n = null;
  for (let r = e.length - 1; r >= 0; r--) {
    let o = e[r];
    o.hostVars = t += o.hostVars,
      o.hostAttrs = sn(o.hostAttrs, n = sn(n, o.hostAttrs));
  }
}
function ir(e) {
  return e === Nt ? {} : e === z ? [] : e;
}
function oy(e, t) {
  let n = e.viewQuery;
  n
    ? e.viewQuery = (r, o) => {
      t(r, o), n(r, o);
    }
    : e.viewQuery = t;
}
function iy(e, t) {
  let n = e.contentQueries;
  n
    ? e.contentQueries = (r, o, i) => {
      t(r, o, i), n(r, o, i);
    }
    : e.contentQueries = t;
}
function sy(e, t) {
  let n = e.hostBindings;
  n
    ? e.hostBindings = (r, o) => {
      t(r, o), n(r, o);
    }
    : e.hostBindings = t;
}
function ay(e) {
  let t = e.inputConfig, n = {};
  for (let r in t) {
    if (t.hasOwnProperty(r)) {
      let o = t[r];
      Array.isArray(o) && o[3] && (n[r] = o[3]);
    }
  }
  e.inputTransforms = n;
}
function ql(e) {
  return cy(e)
    ? Array.isArray(e) || !(e instanceof Map) && Symbol.iterator in e
    : !1;
}
function uy(e, t) {
  if (Array.isArray(e)) { for (let n = 0; n < e.length; n++) t(e[n]); }
  else {
    let n = e[Symbol.iterator](), r;
    for (; !(r = n.next()).done;) t(r.value);
  }
}
function cy(e) {
  return e !== null && (typeof e == "function" || typeof e == "object");
}
function Se(e, t, n) {
  let r = e[t];
  return Object.is(r, n) ? !1 : (e[t] = n, !0);
}
function ly(e) {
  return (e.flags & 32) === 32;
}
function dy(e, t, n, r, o, i, s, a, u) {
  let c = t.consts, l = En(t, e, 4, s || null, a || null);
  Il(t, n, l, Ir(c, u)), ls(t, l);
  let d = l.tView = bs(
    2,
    l,
    r,
    o,
    i,
    t.directiveRegistry,
    t.pipeRegistry,
    null,
    t.schemas,
    c,
    null,
  );
  return t.queries !== null &&
    (t.queries.template(t, l), d.queries = t.queries.embeddedTView(l)),
    l;
}
function Zl(e, t, n, r, o, i, s, a, u, c) {
  let l = n + ne,
    d = t.firstCreatePass ? dy(l, t, e, r, o, i, s, a, u) : t.data[l];
  gn(d, !1);
  let p = py(t, e, d, n);
  us() && Is(t, e, p, d), st(p, e);
  let f = _l(p, e, p, d);
  return e[l] = f,
    no(e, f),
    km(f, d, e),
    es(d) && vl(t, e, d),
    u != null && Dl(e, d, c),
    d;
}
function fy(e, t, n, r, o, i, s, a) {
  let u = C(), c = k(), l = Ir(c.consts, i);
  return Zl(u, c, e, t, n, r, o, l, s, a), fy;
}
var py = hy;
function hy(e, t, n, r) {
  return cs(!0), t[R].createComment("");
}
var _M = (() => {
  class e {
    log(n) {
      console.log(n);
    }
    warn(n) {
      console.warn(n);
    }
    static ɵfac = function (r) {
      return new (r || e)();
    };
    static ɵprov = O({ token: e, factory: e.ɵfac, providedIn: "platform" });
  }
  return e;
})();
var gy = new N("");
function Rs(e) {
  return !!e && typeof e.then == "function";
}
function Ql(e) {
  return !!e && typeof e.subscribe == "function";
}
var my = new N("");
var Yl = (() => {
    class e {
      resolve;
      reject;
      initialized = !1;
      done = !1;
      donePromise = new Promise((n, r) => {
        this.resolve = n, this.reject = r;
      });
      appInits = D(my, { optional: !0 }) ?? [];
      injector = D(ye);
      constructor() {}
      runInitializers() {
        if (this.initialized) return;
        let n = [];
        for (let o of this.appInits) {
          let i = zu(this.injector, o);
          if (Rs(i)) n.push(i);
          else if (Ql(i)) {
            let s = new Promise((a, u) => {
              i.subscribe({ complete: a, error: u });
            });
            n.push(s);
          }
        }
        let r = () => {
          this.done = !0, this.resolve();
        };
        Promise.all(n).then(() => {
          r();
        }).catch((o) => {
          this.reject(o);
        }),
          n.length === 0 && r(),
          this.initialized = !0;
      }
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = O({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
    return e;
  })(),
  Kl = (() => {
    class e {
      static ɵprov = O({
        token: e,
        providedIn: "root",
        factory: () => new jr(),
      });
    }
    return e;
  })(),
  jr = class {
    queuedEffectCount = 0;
    queues = new Map();
    schedule(t) {
      this.enqueue(t);
    }
    remove(t) {
      let n = t.zone, r = this.queues.get(n);
      r.has(t) && (r.delete(t), this.queuedEffectCount--);
    }
    enqueue(t) {
      let n = t.zone;
      this.queues.has(n) || this.queues.set(n, new Set());
      let r = this.queues.get(n);
      r.has(t) || (this.queuedEffectCount++, r.add(t));
    }
    flush() {
      for (; this.queuedEffectCount > 0;) {
        for (let [t, n] of this.queues) {
          t === null ? this.flushQueue(n) : t.run(() => this.flushQueue(n));
        }
      }
    }
    flushQueue(t) {
      for (let n of t) t.delete(n), this.queuedEffectCount--, n.run();
    }
  },
  yy = new N("");
function vy() {
  Xs(() => {
    throw new M(600, !1);
  });
}
function Dy(e) {
  return e.isBoundToModule;
}
var Ey = 10;
function Iy(e, t, n) {
  try {
    let r = n();
    return Rs(r)
      ? r.catch((o) => {
        throw t.runOutsideAngular(() => e.handleError(o)), o;
      })
      : r;
  } catch (r) {
    throw t.runOutsideAngular(() => e.handleError(r)), r;
  }
}
var cn = (() => {
  class e {
    _runningTick = !1;
    _destroyed = !1;
    _destroyListeners = [];
    _views = [];
    internalErrorHandler = D(lh);
    afterRenderManager = D(Gc);
    zonelessEnabled = D(fs);
    rootEffectScheduler = D(Kl);
    dirtyFlags = 0;
    deferredDirtyFlags = 0;
    tracingSnapshot = null;
    externalTestViews = new Set();
    afterTick = new q();
    get allViews() {
      return [...this.externalTestViews.keys(), ...this._views];
    }
    get destroyed() {
      return this._destroyed;
    }
    componentTypes = [];
    components = [];
    isStable = D(vn).hasPendingTasks.pipe(qe((n) => !n));
    constructor() {
      D(Kr, { optional: !0 });
    }
    whenStable() {
      let n;
      return new Promise((r) => {
        n = this.isStable.subscribe({
          next: (o) => {
            o && r();
          },
        });
      }).finally(() => {
        n.unsubscribe();
      });
    }
    _injector = D(Fe);
    _rendererFactory = null;
    get injector() {
      return this._injector;
    }
    bootstrap(n, r) {
      let o = n instanceof Fr;
      if (!this._injector.get(Yl).done) {
        let p = !o && tp(n), f = !1;
        throw new M(405, f);
      }
      let s;
      o ? s = n : s = this._injector.get(Ft).resolveComponentFactory(n),
        this.componentTypes.push(s.componentType);
      let a = Dy(s) ? void 0 : this._injector.get(Le),
        u = r || s.selector,
        c = s.create(ye.NULL, [], u, a),
        l = c.location.nativeElement,
        d = c.injector.get(gy, null);
      return d?.registerApplication(l),
        c.onDestroy(() => {
          this.detachView(c.hostView),
            fr(this.components, c),
            d?.unregisterApplication(l);
        }),
        this._loadComponent(c),
        c;
    }
    tick() {
      this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick();
    }
    _tick = () => {
      if (this.tracingSnapshot !== null) {
        let r = this.tracingSnapshot;
        this.tracingSnapshot = null,
          r.run(gs.CHANGE_DETECTION, this._tick),
          r.dispose();
        return;
      }
      if (this._runningTick) throw new M(101, !1);
      let n = _(null);
      try {
        this._runningTick = !0, this.synchronize();
      } catch (r) {
        this.internalErrorHandler(r);
      } finally {
        this._runningTick = !1, _(n), this.afterTick.next();
      }
    };
    synchronize() {
      this._rendererFactory === null && !this._injector.destroyed &&
      (this._rendererFactory = this._injector.get(kr, null, { optional: !0 })),
        this.dirtyFlags |= this.deferredDirtyFlags,
        this.deferredDirtyFlags = 0;
      let n = 0;
      for (; this.dirtyFlags !== 0 && n++ < Ey;) this.synchronizeOnce();
    }
    synchronizeOnce() {
      if (
        this.dirtyFlags |= this.deferredDirtyFlags,
          this.deferredDirtyFlags = 0,
          this.dirtyFlags & 16 &&
          (this.dirtyFlags &= -17, this.rootEffectScheduler.flush()),
          this.dirtyFlags & 7
      ) {
        let n = !!(this.dirtyFlags & 1);
        this.dirtyFlags &= -8, this.dirtyFlags |= 8;
        for (let { _lView: r, notifyErrorHandler: o } of this.allViews) {
          wy(r, o, n, this.zonelessEnabled);
        }
        if (
          this.dirtyFlags &= -5,
            this.syncDirtyFlagsWithViews(),
            this.dirtyFlags & 23
        ) return;
      } else this._rendererFactory?.begin?.(), this._rendererFactory?.end?.();
      this.dirtyFlags & 8 &&
      (this.dirtyFlags &= -9, this.afterRenderManager.execute()),
        this.syncDirtyFlagsWithViews();
    }
    syncDirtyFlagsWithViews() {
      if (this.allViews.some(({ _lView: n }) => Qr(n))) {
        this.dirtyFlags |= 2;
        return;
      } else this.dirtyFlags &= -8;
    }
    attachView(n) {
      let r = n;
      this._views.push(r), r.attachToAppRef(this);
    }
    detachView(n) {
      let r = n;
      fr(this._views, r), r.detachFromAppRef();
    }
    _loadComponent(n) {
      this.attachView(n.hostView),
        this.tick(),
        this.components.push(n),
        this._injector.get(yy, []).forEach((o) => o(n));
    }
    ngOnDestroy() {
      if (!this._destroyed) {
        try {
          this._destroyListeners.forEach((n) => n()),
            this._views.slice().forEach((n) => n.destroy());
        } finally {
          this._destroyed = !0, this._views = [], this._destroyListeners = [];
        }
      }
    }
    onDestroy(n) {
      return this._destroyListeners.push(n),
        () => fr(this._destroyListeners, n);
    }
    destroy() {
      if (this._destroyed) throw new M(406, !1);
      let n = this._injector;
      n.destroy && !n.destroyed && n.destroy();
    }
    get viewCount() {
      return this._views.length;
    }
    static ɵfac = function (r) {
      return new (r || e)();
    };
    static ɵprov = O({ token: e, factory: e.ɵfac, providedIn: "root" });
  }
  return e;
})();
function fr(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function wy(e, t, n, r) {
  if (!n && !Qr(e)) return;
  Al(e, t, n && !r ? 0 : 1);
}
function Cy(e, t, n, r) {
  let o = C(), i = ct();
  if (Se(o, i, t)) {
    let s = k(), a = mn();
    Zg(a, o, e, t, n, r);
  }
  return Cy;
}
function by(e, t, n, r) {
  return Se(e, ct(), n) ? t + Zi(n) + r : Te;
}
function sr(e, t) {
  return e << 17 | t << 2;
}
function ut(e) {
  return e >> 17 & 32767;
}
function _y(e) {
  return (e & 2) == 2;
}
function My(e, t) {
  return e & 131071 | t << 17;
}
function ki(e) {
  return e | 2;
}
function Pt(e) {
  return (e & 131068) >> 2;
}
function Lo(e, t) {
  return e & -131069 | t << 2;
}
function Ty(e) {
  return (e & 1) === 1;
}
function Pi(e) {
  return e | 1;
}
function Sy(e, t, n, r, o, i) {
  let s = i ? t.classBindings : t.styleBindings, a = ut(s), u = Pt(s);
  e[r] = n;
  let c = !1, l;
  if (Array.isArray(n)) {
    let d = n;
    l = d[1], (l === null || fn(d, l) > 0) && (c = !0);
  } else l = n;
  if (o) {
    if (u !== 0) {
      let p = ut(e[a + 1]);
      e[r + 1] = sr(p, a),
        p !== 0 && (e[p + 1] = Lo(e[p + 1], r)),
        e[a + 1] = My(e[a + 1], r);
    } else e[r + 1] = sr(a, 0), a !== 0 && (e[a + 1] = Lo(e[a + 1], r)), a = r;
  } else {e[r + 1] = sr(u, 0),
      a === 0 ? a = r : e[u + 1] = Lo(e[u + 1], r),
      u = r;}
  c && (e[r + 1] = ki(e[r + 1])),
    fu(e, l, r, !0),
    fu(e, l, r, !1),
    Ny(t, l, e, r, i),
    s = sr(a, u),
    i ? t.classBindings = s : t.styleBindings = s;
}
function Ny(e, t, n, r, o) {
  let i = o ? e.residualClasses : e.residualStyles;
  i != null && typeof t == "string" && fn(i, t) >= 0 &&
    (n[r + 1] = Pi(n[r + 1]));
}
function fu(e, t, n, r) {
  let o = e[n + 1], i = t === null, s = r ? ut(o) : Pt(o), a = !1;
  for (; s !== 0 && (a === !1 || i);) {
    let u = e[s], c = e[s + 1];
    xy(u, t) && (a = !0, e[s + 1] = r ? Pi(c) : ki(c)), s = r ? ut(c) : Pt(c);
  }
  a && (e[n + 1] = r ? ki(o) : Pi(o));
}
function xy(e, t) {
  return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t
    ? !0
    : Array.isArray(e) && typeof t == "string"
    ? fn(e, t) >= 0
    : !1;
}
var de = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function Ay(e) {
  return e.substring(de.key, de.keyEnd);
}
function Oy(e) {
  return Ry(e), Jl(e, Xl(e, 0, de.textEnd));
}
function Jl(e, t) {
  let n = de.textEnd;
  return n === t ? -1 : (t = de.keyEnd = Fy(e, de.key = t, n), Xl(e, t, n));
}
function Ry(e) {
  de.key = 0,
    de.keyEnd = 0,
    de.value = 0,
    de.valueEnd = 0,
    de.textEnd = e.length;
}
function Xl(e, t, n) {
  for (; t < n && e.charCodeAt(t) <= 32;) t++;
  return t;
}
function Fy(e, t, n) {
  for (; t < n && e.charCodeAt(t) > 32;) t++;
  return t;
}
function ky(e, t, n) {
  let r = C(), o = ct();
  if (Se(r, o, t)) {
    let i = k(), s = mn();
    to(i, s, r, e, t, r[R], n, !1);
  }
  return ky;
}
function Li(e, t, n, r, o) {
  let i = t.inputs, s = o ? "class" : "style";
  _s(e, n, i[s], s, r);
}
function Py(e, t) {
  return Vy(e, t, null, !0), Py;
}
function MM(e) {
  jy(Gy, Ly, e, !0);
}
function Ly(e, t) {
  for (let n = Oy(t); n >= 0; n = Jl(t, n)) Ki(e, Ay(t), !0);
}
function Vy(e, t, n, r) {
  let o = C(), i = k(), s = dc(2);
  if (i.firstUpdatePass && td(i, e, s, r), t !== Te && Se(o, s, t)) {
    let a = i.data[lt()];
    nd(i, a, o, o[R], e, o[s + 1] = qy(t, n), r, s);
  }
}
function jy(e, t, n, r) {
  let o = k(), i = dc(2);
  o.firstUpdatePass && td(o, null, i, r);
  let s = C();
  if (n !== Te && Se(s, i, n)) {
    let a = o.data[lt()];
    if (rd(a, r) && !ed(o, i)) {
      let u = r ? a.classesWithoutHost : a.stylesWithoutHost;
      u !== null && (n = Ho(u, n || "")), Li(o, a, s, n, r);
    } else Wy(o, a, s, s[R], s[i + 1], s[i + 1] = zy(e, t, n), r, i);
  }
}
function ed(e, t) {
  return t >= e.expandoStartIndex;
}
function td(e, t, n, r) {
  let o = e.data;
  if (o[n + 1] === null) {
    let i = o[lt()], s = ed(e, n);
    rd(i, r) && t === null && !s && (t = !1),
      t = By(o, i, t, r),
      Sy(o, i, t, n, s, r);
  }
}
function By(e, t, n, r) {
  let o = os(e), i = r ? t.residualClasses : t.residualStyles;
  if (o === null) {
    (r ? t.classBindings : t.styleBindings) === 0 &&
      (n = Vo(null, e, t, n, r), n = ln(n, t.attrs, r), i = null);
  } else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== o) {
      if (n = Vo(o, e, t, n, r), i === null) {
        let u = Hy(e, t, r);
        u !== void 0 && Array.isArray(u) &&
          (u = Vo(null, e, t, u[1], r), u = ln(u, t.attrs, r), $y(e, t, r, u));
      } else i = Uy(e, t, r);
    }
  }
  return i !== void 0 && (r ? t.residualClasses = i : t.residualStyles = i), n;
}
function Hy(e, t, n) {
  let r = n ? t.classBindings : t.styleBindings;
  if (Pt(r) !== 0) return e[ut(r)];
}
function $y(e, t, n, r) {
  let o = n ? t.classBindings : t.styleBindings;
  e[ut(o)] = r;
}
function Uy(e, t, n) {
  let r, o = t.directiveEnd;
  for (let i = 1 + t.directiveStylingLast; i < o; i++) {
    let s = e[i].hostAttrs;
    r = ln(r, s, n);
  }
  return ln(r, t.attrs, n);
}
function Vo(e, t, n, r, o) {
  let i = null, s = n.directiveEnd, a = n.directiveStylingLast;
  for (
    a === -1 ? a = n.directiveStart : a++;
    a < s && (i = t[a], r = ln(r, i.hostAttrs, o), i !== e);
  ) a++;
  return e !== null && (n.directiveStylingLast = a), r;
}
function ln(e, t, n) {
  let r = n ? 1 : 2, o = -1;
  if (t !== null) {
    for (let i = 0; i < t.length; i++) {
      let s = t[i];
      typeof s == "number" ? o = s : o === r &&
        (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]),
          Ki(e, s, n ? !0 : t[++i]));
    }
  }
  return e === void 0 ? null : e;
}
function zy(e, t, n) {
  if (n == null || n === "") return z;
  let r = [], o = ys(n);
  if (Array.isArray(o)) { for (let i = 0; i < o.length; i++) e(r, o[i], !0); }
  else if (typeof o == "object") {
    for (let i in o) o.hasOwnProperty(i) && e(r, i, o[i]);
  } else typeof o == "string" && t(r, o);
  return r;
}
function Gy(e, t, n) {
  let r = String(t);
  r !== "" && !r.includes(" ") && Ki(e, r, n);
}
function Wy(e, t, n, r, o, i, s, a) {
  o === Te && (o = z);
  let u = 0,
    c = 0,
    l = 0 < o.length ? o[0] : null,
    d = 0 < i.length ? i[0] : null;
  for (; l !== null || d !== null;) {
    let p = u < o.length ? o[u + 1] : void 0,
      f = c < i.length ? i[c + 1] : void 0,
      h = null,
      w;
    l === d
      ? (u += 2, c += 2, p !== f && (h = d, w = f))
      : d === null || l !== null && l < d
      ? (u += 2, h = l)
      : (c += 2, h = d, w = f),
      h !== null && nd(e, t, n, r, h, w, s, a),
      l = u < o.length ? o[u] : null,
      d = c < i.length ? i[c] : null;
  }
}
function nd(e, t, n, r, o, i, s, a) {
  if (!(t.type & 3)) return;
  let u = e.data, c = u[a + 1], l = Ty(c) ? pu(u, t, n, o, Pt(c), s) : void 0;
  if (!Br(l)) {
    Br(i) || _y(c) && (i = pu(u, null, n, o, a, s));
    let d = ec(lt(), n);
    gg(r, s, d, o, i);
  }
}
function pu(e, t, n, r, o, i) {
  let s = t === null, a;
  for (; o > 0;) {
    let u = e[o],
      c = Array.isArray(u),
      l = c ? u[1] : u,
      d = l === null,
      p = n[o + 1];
    p === Te && (p = d ? z : void 0);
    let f = d ? xo(p, r) : l === r ? p : void 0;
    if (c && !Br(f) && (f = xo(u, r)), Br(f) && (a = f, s)) return a;
    let h = e[o + 1];
    o = s ? ut(h) : Pt(h);
  }
  if (t !== null) {
    let u = i ? t.residualClasses : t.residualStyles;
    u != null && (a = xo(u, r));
  }
  return a;
}
function Br(e) {
  return e !== void 0;
}
function qy(e, t) {
  return e == null || e === "" ||
    (typeof t == "string" ? e = e + t : typeof e == "object" && (e = Q(ys(e)))),
    e;
}
function rd(e, t) {
  return (e.flags & (t ? 8 : 16)) !== 0;
}
function TM(e, t) {
  De("NgControlFlow");
  let n = C(),
    r = ct(),
    o = n[r] !== Te ? n[r] : -1,
    i = o !== -1 ? hu(n, ne + o) : void 0,
    s = 0;
  if (Se(n, r, e)) {
    let a = _(null);
    try {
      if (i !== void 0 && nm(i, s), e !== -1) {
        let u = ne + e,
          c = hu(n, u),
          l = Zy(n[E], u),
          d = Rr(c, l.tView.ssrId),
          p = Ts(n, l, t, { dehydratedView: d });
        Ss(c, p, s, Ar(l, d));
      }
    } finally {
      _(a);
    }
  } else if (i !== void 0) {
    let a = tm(i, s);
    a !== void 0 && (a[ie] = t);
  }
}
function hu(e, t) {
  return e[t];
}
function Zy(e, t) {
  return ts(e, t);
}
function Qy(e, t, n, r, o, i) {
  let s = t.consts, a = Ir(s, o), u = En(t, e, 2, r, a);
  return Il(t, n, u, Ir(s, i)),
    u.attrs !== null && _i(u, u.attrs, !1),
    u.mergedAttrs !== null && _i(u, u.mergedAttrs, !0),
    t.queries !== null && t.queries.elementStart(t, u),
    u;
}
function od(e, t, n, r) {
  let o = C(),
    i = k(),
    s = ne + e,
    a = o[R],
    u = i.firstCreatePass ? Qy(s, i, o, t, n, r) : i.data[s],
    c = Ky(i, o, u, a, t, e);
  o[s] = c;
  let l = es(u);
  return gn(u, !0),
    dl(a, c, u),
    !ly(u) && us() && Is(i, o, c, u),
    Mp() === 0 && st(c, o),
    Tp(),
    l && (vl(i, o, u), Zc(i, u, o)),
    r !== null && Dl(o, u),
    od;
}
function id() {
  let e = V();
  uc() ? cc() : (e = e.parent, gn(e, !1));
  let t = e;
  Np(t) && xp(), Sp();
  let n = k();
  return n.firstCreatePass && (ls(n, e), qu(e) && n.queries.elementEnd(e)),
    t.classesWithoutHost != null && zp(t) &&
    Li(n, t, C(), t.classesWithoutHost, !0),
    t.stylesWithoutHost != null && Gp(t) &&
    Li(n, t, C(), t.stylesWithoutHost, !1),
    id;
}
function Yy(e, t, n, r) {
  return od(e, t, n, r), id(), Yy;
}
var Ky = (e, t, n, r, o, i) => (cs(!0), tl(r, o, Bp()));
function SM() {
  return C();
}
function Jy(e, t, n) {
  let r = C(), o = ct();
  if (Se(r, o, t)) {
    let i = k(), s = mn();
    to(i, s, r, e, t, r[R], n, !0);
  }
  return Jy;
}
function Xy(e, t, n) {
  let r = C(), o = ct();
  if (Se(r, o, t)) {
    let i = k(), s = mn(), a = os(i.data), u = Ml(a, s, r);
    to(i, s, r, e, t, u, n, !0);
  }
  return Xy;
}
var Hr = "en-US";
var ev = Hr;
function tv(e) {
  typeof e == "string" && (ev = e.toLowerCase().replace(/_/g, "-"));
}
var nv = (e, t, n) => {};
function rv(e, t, n, r) {
  let o = C(), i = k(), s = V();
  return Fs(i, o, o[R], s, e, t, r), rv;
}
function ov(e, t) {
  let n = V(), r = C(), o = k(), i = os(o.data), s = Ml(i, n, r);
  return Fs(o, r, s, n, e, t), ov;
}
function iv(e, t, n, r) {
  let o = e.cleanup;
  if (o != null) {
    for (let i = 0; i < o.length - 1; i += 2) {
      let s = o[i];
      if (s === n && o[i + 1] === r) {
        let a = t[Dr], u = o[i + 2];
        return a.length > u ? a[u] : null;
      }
      typeof s == "string" && (i += 2);
    }
  }
  return null;
}
function Fs(e, t, n, r, o, i, s) {
  let a = es(r), c = e.firstCreatePass && oc(e), l = t[ie], d = rc(t), p = !0;
  if (r.type & 3 || s) {
    let w = ae(r, t),
      F = s ? s(w) : w,
      S = d.length,
      j = s ? (ue) => s(me(ue[r.index])) : r.index,
      Ee = null;
    if (!s && a && (Ee = iv(e, t, o, r.index)), Ee !== null) {
      let ue = Ee.__ngLastListenerFn__ || Ee;
      ue.__ngNextListenerFn__ = i, Ee.__ngLastListenerFn__ = i, p = !1;
    } else {
      i = mu(r, t, l, i), nv(w, o, i);
      let ue = n.listen(F, o, i);
      d.push(i, ue), c && c.push(o, j, S, S + 1);
    }
  } else i = mu(r, t, l, i);
  let f = r.outputs, h;
  if (p && f !== null && (h = f[o])) {
    let w = h.length;
    if (w) {
      for (let F = 0; F < w; F += 2) {
        let S = h[F], j = h[F + 1], pt = t[S][j].subscribe(i), X = d.length;
        d.push(i, pt), c && c.push(o, r.index, X, -(X + 1));
      }
    }
  }
}
function gu(e, t, n, r) {
  let o = _(null);
  try {
    return oe(6, t, n), n(r) !== !1;
  } catch (i) {
    return Tl(e, i), !1;
  } finally {
    oe(7, t, n), _(o);
  }
}
function mu(e, t, n, r) {
  return function o(i) {
    if (i === Function) return r;
    let s = e.componentOffset > -1 ? Ve(e.index, t) : t;
    Ns(s, 5);
    let a = gu(t, n, r, i), u = o.__ngNextListenerFn__;
    for (; u;) a = gu(t, n, u, i) && a, u = u.__ngNextListenerFn__;
    return a;
  };
}
function NM(e = 1) {
  return Vp(e);
}
function sv(e, t) {
  let n = null, r = wg(e);
  for (let o = 0; o < t.length; o++) {
    let i = t[o];
    if (i === "*") {
      n = o;
      continue;
    }
    if (r === null ? pl(e, i, !0) : _g(r, i)) return o;
  }
  return n;
}
function xM(e) {
  let t = C()[se][J];
  if (!t.projection) {
    let n = e ? e.length : 1,
      r = t.projection = Jf(n, null),
      o = r.slice(),
      i = t.child;
    for (; i !== null;) {
      if (i.type !== 128) {
        let s = e ? sv(i, e) : 0;
        s !== null && (o[s] ? o[s].projectionNext = i : r[s] = i, o[s] = i);
      }
      i = i.next;
    }
  }
}
function AM(e, t = 0, n, r, o, i) {
  let s = C(), a = k(), u = r ? e + 1 : null;
  u !== null && Zl(s, a, u, r, o, i, null, n);
  let c = En(a, ne + e, 16, null, n || null);
  c.projection === null && (c.projection = t), cc();
  let d = !s[rn] || sc();
  s[se][J].projection[c.projection] === null && u !== null
    ? av(s, a, u)
    : d && (c.flags & 32) !== 32 && pg(a, s, c);
}
function av(e, t, n) {
  let r = ne + n,
    o = t.data[r],
    i = e[r],
    s = Rr(i, o.tView.ssrId),
    a = Ts(e, o, void 0, { dehydratedView: s });
  Ss(i, a, 0, Ar(o, s));
}
function OM(e, t, n, r) {
  Bl(e, t, n, r);
}
function RM(e, t, n) {
  Hm(e, t, n);
}
function FM(e) {
  let t = C(), n = k(), r = is();
  Yr(r + 1);
  let o = As(n, r);
  if (e.dirty && Ip(t) === ((o.metadata.flags & 2) === 2)) {
    if (o.matches === null) e.reset([]);
    else {
      let i = $l(t, r);
      e.reset(i, Pc), e.notifyOnChanges();
    }
    return !0;
  }
  return !1;
}
function kM() {
  return xs(C(), is());
}
function PM(e, t, n, r, o) {
  Wm(t, Bl(e, n, r, o));
}
function LM(e = 1) {
  Yr(is() + e);
}
function VM(e) {
  let t = Op();
  return Ep(t, ne + e);
}
function jM(e, t = "") {
  let n = C(),
    r = k(),
    o = e + ne,
    i = r.firstCreatePass ? En(r, o, 1, t, null) : r.data[o],
    s = uv(r, n, i, t, e);
  n[o] = s, us() && Is(r, n, s, i), gn(i, !1);
}
var uv = (e, t, n, r, o) => (cs(!0), eg(t[R], r));
function cv(e) {
  return sd("", e, ""), cv;
}
function sd(e, t, n) {
  let r = C(), o = by(r, e, t, n);
  return o !== Te && lv(r, lt(), o), sd;
}
function lv(e, t, n) {
  let r = ec(t, e);
  tg(e[R], r, n);
}
function dv(e, t, n) {
  Lc(t) && (t = t());
  let r = C(), o = ct();
  if (Se(r, o, t)) {
    let i = k(), s = mn();
    to(i, s, r, e, t, r[R], n, !1);
  }
  return dv;
}
function BM(e, t) {
  let n = Lc(e);
  return n && e.set(t), n;
}
function fv(e, t) {
  let n = C(), r = k(), o = V();
  return Fs(r, n, n[R], o, e, t), fv;
}
function pv(e, t, n) {
  let r = k();
  if (r.firstCreatePass) {
    let o = Ce(e);
    Vi(n, r.data, r.blueprint, o, !0), Vi(t, r.data, r.blueprint, o, !1);
  }
}
function Vi(e, t, n, r, o) {
  if (e = U(e), Array.isArray(e)) {
    for (let i = 0; i < e.length; i++) Vi(e[i], t, n, r, o);
  } else {
    let i = k(),
      s = C(),
      a = V(),
      u = xt(e) ? e : U(e.provide),
      c = Uu(e),
      l = a.providerIndexes & 1048575,
      d = a.directiveStart,
      p = a.providerIndexes >> 20;
    if (xt(e) || !e.multi) {
      let f = new nt(c, o, je), h = Bo(u, t, o ? l : l + p, d);
      h === -1
        ? (ni(_r(a, s), i, u),
          jo(i, e, t.length),
          t.push(u),
          a.directiveStart++,
          a.directiveEnd++,
          o && (a.providerIndexes += 1048576),
          n.push(f),
          s.push(f))
        : (n[h] = f, s[h] = f);
    } else {
      let f = Bo(u, t, l + p, d),
        h = Bo(u, t, l, l + p),
        w = f >= 0 && n[f],
        F = h >= 0 && n[h];
      if (o && !F || !o && !w) {
        ni(_r(a, s), i, u);
        let S = mv(o ? gv : hv, n.length, o, r, c);
        !o && F && (n[h].providerFactory = S),
          jo(i, e, t.length, 0),
          t.push(u),
          a.directiveStart++,
          a.directiveEnd++,
          o && (a.providerIndexes += 1048576),
          n.push(S),
          s.push(S);
      } else {
        let S = ad(n[o ? h : f], c, !o && r);
        jo(i, e, f > -1 ? f : h, S);
      }
      !o && r && F && n[h].componentProviders++;
    }
  }
}
function jo(e, t, n, r) {
  let o = xt(t), i = ap(t);
  if (o || i) {
    let u = (i ? U(t.useClass) : t).prototype.ngOnDestroy;
    if (u) {
      let c = e.destroyHooks || (e.destroyHooks = []);
      if (!o && t.multi) {
        let l = c.indexOf(n);
        l === -1 ? c.push(n, [r, u]) : c[l + 1].push(r, u);
      } else c.push(n, u);
    }
  }
}
function ad(e, t, n) {
  return n && e.componentProviders++, e.multi.push(t) - 1;
}
function Bo(e, t, n, r) {
  for (let o = n; o < r; o++) if (t[o] === e) return o;
  return -1;
}
function hv(e, t, n, r) {
  return ji(this.multi, []);
}
function gv(e, t, n, r) {
  let o = this.multi, i;
  if (this.providerFactory) {
    let s = this.providerFactory.componentProviders,
      a = rt(n, n[E], this.providerFactory.index, r);
    i = a.slice(0, s), ji(o, i);
    for (let u = s; u < a.length; u++) i.push(a[u]);
  } else i = [], ji(o, i);
  return i;
}
function ji(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    t.push(r());
  }
  return t;
}
function mv(e, t, n, r, o) {
  let i = new nt(e, n, je);
  return i.multi = [],
    i.index = t,
    i.componentProviders = 0,
    ad(i, o, r && !n),
    i;
}
function HM(e, t = []) {
  return (n) => {
    n.providersResolver = (r, o) => pv(r, o ? o(e) : e, t);
  };
}
function $M(e, t) {
  return ro(e, t);
}
var Bi = class {
    ngModuleFactory;
    componentFactories;
    constructor(t, n) {
      this.ngModuleFactory = t, this.componentFactories = n;
    }
  },
  UM = (() => {
    class e {
      compileModuleSync(n) {
        return new Fi(n);
      }
      compileModuleAsync(n) {
        return Promise.resolve(this.compileModuleSync(n));
      }
      compileModuleAndAllComponentsSync(n) {
        let r = this.compileModuleSync(n),
          o = Pu(n),
          i = el(o.declarations).reduce((s, a) => {
            let u = Re(a);
            return u && s.push(new kt(u)), s;
          }, []);
        return new Bi(r, i);
      }
      compileModuleAndAllComponentsAsync(n) {
        return Promise.resolve(this.compileModuleAndAllComponentsSync(n));
      }
      clearCache() {}
      clearCacheFor(n) {}
      getModuleId(n) {}
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = O({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
    return e;
  })();
var yv = (() => {
    class e {
      zone = D(te);
      changeDetectionScheduler = D(ot);
      applicationRef = D(cn);
      _onMicrotaskEmptySubscription;
      initialize() {
        this._onMicrotaskEmptySubscription ||
          (this._onMicrotaskEmptySubscription = this.zone.onMicrotaskEmpty
            .subscribe({
              next: () => {
                this.changeDetectionScheduler.runningTick ||
                  this.zone.run(() => {
                    this.applicationRef.tick();
                  });
              },
            }));
      }
      ngOnDestroy() {
        this._onMicrotaskEmptySubscription?.unsubscribe();
      }
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = O({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
    return e;
  })(),
  vv = new N("", { factory: () => !1 });
function ud(
  { ngZoneFactory: e, ignoreChangesOutsideZone: t, scheduleInRootZone: n },
) {
  return e ??= () => new te(W(G({}, cd()), { scheduleInRootZone: n })), [
    { provide: te, useFactory: e },
    {
      provide: yr,
      multi: !0,
      useFactory: () => {
        let r = D(yv, { optional: !0 });
        return () => r.initialize();
      },
    },
    {
      provide: yr,
      multi: !0,
      useFactory: () => {
        let r = D(Dv);
        return () => {
          r.initialize();
        };
      },
    },
    t === !0 ? { provide: Oc, useValue: !0 } : [],
    { provide: Rc, useValue: n ?? Ac },
  ];
}
function zM(e) {
  let t = e?.ignoreChangesOutsideZone,
    n = e?.scheduleInRootZone,
    r = ud({
      ngZoneFactory: () => {
        let o = cd(e);
        return o.scheduleInRootZone = n,
          o.shouldCoalesceEventChangeDetection && De("NgZone_CoalesceEvent"),
          new te(o);
      },
      ignoreChangesOutsideZone: t,
      scheduleInRootZone: n,
    });
  return np([{ provide: vv, useValue: !0 }, { provide: fs, useValue: !1 }, r]);
}
function cd(e) {
  return {
    enableLongStackTrace: !1,
    shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1,
    shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1,
  };
}
var Dv = (() => {
  class e {
    subscription = new P();
    initialized = !1;
    zone = D(te);
    pendingTasks = D(vn);
    initialize() {
      if (this.initialized) return;
      this.initialized = !0;
      let n = null;
      !this.zone.isStable && !this.zone.hasPendingMacrotasks &&
      !this.zone.hasPendingMicrotasks && (n = this.pendingTasks.add()),
        this.zone.runOutsideAngular(() => {
          this.subscription.add(this.zone.onStable.subscribe(() => {
            te.assertNotInAngularZone(),
              queueMicrotask(() => {
                n !== null && !this.zone.hasPendingMacrotasks &&
                  !this.zone.hasPendingMicrotasks &&
                  (this.pendingTasks.remove(n), n = null);
              });
          }));
        }),
        this.subscription.add(this.zone.onUnstable.subscribe(() => {
          te.assertInAngularZone(), n ??= this.pendingTasks.add();
        }));
    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
    static ɵfac = function (r) {
      return new (r || e)();
    };
    static ɵprov = O({ token: e, factory: e.ɵfac, providedIn: "root" });
  }
  return e;
})();
var Ev = (() => {
  class e {
    appRef = D(cn);
    taskService = D(vn);
    ngZone = D(te);
    zonelessEnabled = D(fs);
    tracing = D(Kr, { optional: !0 });
    disableScheduling = D(Oc, { optional: !0 }) ?? !1;
    zoneIsDefined = typeof Zone < "u" && !!Zone.root.run;
    schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }];
    subscriptions = new P();
    angularZoneId = this.zoneIsDefined ? this.ngZone._inner?.get(Tr) : null;
    scheduleInRootZone = !this.zonelessEnabled && this.zoneIsDefined &&
      (D(Rc, { optional: !0 }) ?? !1);
    cancelScheduledCallback = null;
    useMicrotaskScheduler = !1;
    runningTick = !1;
    pendingRenderTaskId = null;
    constructor() {
      this.subscriptions.add(this.appRef.afterTick.subscribe(() => {
        this.runningTick || this.cleanup();
      })),
        this.subscriptions.add(this.ngZone.onUnstable.subscribe(() => {
          this.runningTick || this.cleanup();
        })),
        this.disableScheduling ||= !this.zonelessEnabled &&
          (this.ngZone instanceof si || !this.zoneIsDefined);
    }
    notify(n) {
      if (!this.zonelessEnabled && n === 5) return;
      let r = !1;
      switch (n) {
        case 0: {
          this.appRef.dirtyFlags |= 2;
          break;
        }
        case 3:
        case 2:
        case 4:
        case 5:
        case 1: {
          this.appRef.dirtyFlags |= 4;
          break;
        }
        case 8: {
          this.appRef.deferredDirtyFlags |= 8;
          break;
        }
        case 6: {
          this.appRef.dirtyFlags |= 2, r = !0;
          break;
        }
        case 13: {
          this.appRef.dirtyFlags |= 16, r = !0;
          break;
        }
        case 14: {
          this.appRef.dirtyFlags |= 2, r = !0;
          break;
        }
        case 12: {
          r = !0;
          break;
        }
        case 10:
        case 9:
        case 7:
        case 11:
        default:
          this.appRef.dirtyFlags |= 8;
      }
      if (
        this.appRef.tracingSnapshot =
          this.tracing?.snapshot(this.appRef.tracingSnapshot) ?? null,
          !this.shouldScheduleTick(r)
      ) return;
      let o = this.useMicrotaskScheduler ? Wa : Fc;
      this.pendingRenderTaskId = this.taskService.add(),
        this.scheduleInRootZone
          ? this.cancelScheduledCallback = Zone.root.run(() =>
            o(() => this.tick())
          )
          : this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() =>
            o(() => this.tick())
          );
    }
    shouldScheduleTick(n) {
      return !(this.disableScheduling && !n || this.appRef.destroyed ||
        this.pendingRenderTaskId !== null || this.runningTick ||
        this.appRef._runningTick ||
        !this.zonelessEnabled && this.zoneIsDefined &&
          Zone.current.get(Tr + this.angularZoneId));
    }
    tick() {
      if (this.runningTick || this.appRef.destroyed) return;
      if (this.appRef.dirtyFlags === 0) {
        this.cleanup();
        return;
      }
      !this.zonelessEnabled && this.appRef.dirtyFlags & 7 &&
        (this.appRef.dirtyFlags |= 1);
      let n = this.taskService.add();
      try {
        this.ngZone.run(
          () => {
            this.runningTick = !0, this.appRef._tick();
          },
          void 0,
          this.schedulerTickApplyArgs,
        );
      } catch (r) {
        throw this.taskService.remove(n), r;
      } finally {
        this.cleanup();
      }
      this.useMicrotaskScheduler = !0,
        Wa(() => {
          this.useMicrotaskScheduler = !1, this.taskService.remove(n);
        });
    }
    ngOnDestroy() {
      this.subscriptions.unsubscribe(), this.cleanup();
    }
    cleanup() {
      if (
        this.runningTick = !1,
          this.cancelScheduledCallback?.(),
          this.cancelScheduledCallback = null,
          this.pendingRenderTaskId !== null
      ) {
        let n = this.pendingRenderTaskId;
        this.pendingRenderTaskId = null, this.taskService.remove(n);
      }
    }
    static ɵfac = function (r) {
      return new (r || e)();
    };
    static ɵprov = O({ token: e, factory: e.ɵfac, providedIn: "root" });
  }
  return e;
})();
function Iv() {
  return typeof $localize < "u" && $localize.locale || Hr;
}
var ks = new N("", {
  providedIn: "root",
  factory: () => D(ks, b.Optional | b.SkipSelf) || Iv(),
});
var Hi = new N(""), wv = new N("");
function Kt(e) {
  return !e.moduleRef;
}
function Cv(e) {
  let t = Kt(e) ? e.r3Injector : e.moduleRef.injector, n = t.get(te);
  return n.run(() => {
    Kt(e)
      ? e.r3Injector.resolveInjectorInitializers()
      : e.moduleRef.resolveInjectorInitializers();
    let r = t.get(it, null), o;
    if (
      n.runOutsideAngular(() => {
        o = n.onError.subscribe({
          next: (i) => {
            r.handleError(i);
          },
        });
      }), Kt(e)
    ) {
      let i = () => t.destroy(), s = e.platformInjector.get(Hi);
      s.add(i),
        t.onDestroy(() => {
          o.unsubscribe(), s.delete(i);
        });
    } else {
      let i = () => e.moduleRef.destroy(), s = e.platformInjector.get(Hi);
      s.add(i),
        e.moduleRef.onDestroy(() => {
          fr(e.allPlatformModules, e.moduleRef), o.unsubscribe(), s.delete(i);
        });
    }
    return Iy(r, n, () => {
      let i = t.get(Yl);
      return i.runInitializers(),
        i.donePromise.then(() => {
          let s = t.get(ks, Hr);
          if (tv(s || Hr), !t.get(wv, !0)) {
            return Kt(e)
              ? t.get(cn)
              : (e.allPlatformModules.push(e.moduleRef), e.moduleRef);
          }
          if (Kt(e)) {
            let u = t.get(cn);
            return e.rootComponent !== void 0 && u.bootstrap(e.rootComponent),
              u;
          } else return bv(e.moduleRef, e.allPlatformModules), e.moduleRef;
        });
    });
  });
}
function bv(e, t) {
  let n = e.injector.get(cn);
  if (e._bootstrapComponents.length > 0) {
    e._bootstrapComponents.forEach((r) => n.bootstrap(r));
  } else if (e.instance.ngDoBootstrap) e.instance.ngDoBootstrap(n);
  else throw new M(-403, !1);
  t.push(e);
}
var pr = null;
function _v(e = [], t) {
  return ye.create({
    name: t,
    providers: [{ provide: $u, useValue: "platform" }, {
      provide: Hi,
      useValue: new Set([() => pr = null]),
    }, ...e],
  });
}
function Mv(e = []) {
  if (pr) return pr;
  let t = _v(e);
  return pr = t, vy(), Tv(t), t;
}
function Tv(e) {
  let t = e.get(wh, null);
  zu(e, () => {
    t?.forEach((n) => n());
  });
}
var Ps = (() => {
  class e {
    static __NG_ELEMENT_ID__ = Sv;
  }
  return e;
})();
function Sv(e) {
  return Nv(V(), C(), (e & 16) === 16);
}
function Nv(e, t, n) {
  if (Zr(e) && !n) {
    let r = Ve(e.index, t);
    return new at(r, r);
  } else if (e.type & 175) {
    let r = t[se];
    return new at(r, t);
  }
  return null;
}
var $i = class {
    constructor() {}
    supports(t) {
      return ql(t);
    }
    create(t) {
      return new Ui(t);
    }
  },
  xv = (e, t) => t,
  Ui = class {
    length = 0;
    collection;
    _linkedRecords = null;
    _unlinkedRecords = null;
    _previousItHead = null;
    _itHead = null;
    _itTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _movesHead = null;
    _movesTail = null;
    _removalsHead = null;
    _removalsTail = null;
    _identityChangesHead = null;
    _identityChangesTail = null;
    _trackByFn;
    constructor(t) {
      this._trackByFn = t || xv;
    }
    forEachItem(t) {
      let n;
      for (n = this._itHead; n !== null; n = n._next) t(n);
    }
    forEachOperation(t) {
      let n = this._itHead, r = this._removalsHead, o = 0, i = null;
      for (; n || r;) {
        let s = !r || n && n.currentIndex < yu(r, o, i) ? n : r,
          a = yu(s, o, i),
          u = s.currentIndex;
        if (s === r) o--, r = r._nextRemoved;
        else if (n = n._next, s.previousIndex == null) o++;
        else {
          i || (i = []);
          let c = a - o, l = u - o;
          if (c != l) {
            for (let p = 0; p < c; p++) {
              let f = p < i.length ? i[p] : i[p] = 0, h = f + p;
              l <= h && h < c && (i[p] = f + 1);
            }
            let d = s.previousIndex;
            i[d] = l - c;
          }
        }
        a !== u && t(s, a, u);
      }
    }
    forEachPreviousItem(t) {
      let n;
      for (n = this._previousItHead; n !== null; n = n._nextPrevious) t(n);
    }
    forEachAddedItem(t) {
      let n;
      for (n = this._additionsHead; n !== null; n = n._nextAdded) t(n);
    }
    forEachMovedItem(t) {
      let n;
      for (n = this._movesHead; n !== null; n = n._nextMoved) t(n);
    }
    forEachRemovedItem(t) {
      let n;
      for (n = this._removalsHead; n !== null; n = n._nextRemoved) t(n);
    }
    forEachIdentityChange(t) {
      let n;
      for (
        n = this._identityChangesHead;
        n !== null;
        n = n._nextIdentityChange
      ) t(n);
    }
    diff(t) {
      if (t == null && (t = []), !ql(t)) throw new M(900, !1);
      return this.check(t) ? this : null;
    }
    onDestroy() {}
    check(t) {
      this._reset();
      let n = this._itHead, r = !1, o, i, s;
      if (Array.isArray(t)) {
        this.length = t.length;
        for (let a = 0; a < this.length; a++) {
          i = t[a],
            s = this._trackByFn(a, i),
            n === null || !Object.is(n.trackById, s)
              ? (n = this._mismatch(n, i, s, a), r = !0)
              : (r && (n = this._verifyReinsertion(n, i, s, a)),
                Object.is(n.item, i) || this._addIdentityChange(n, i)),
            n = n._next;
        }
      } else {o = 0,
          uy(t, (a) => {
            s = this._trackByFn(o, a),
              n === null || !Object.is(n.trackById, s)
                ? (n = this._mismatch(n, a, s, o), r = !0)
                : (r && (n = this._verifyReinsertion(n, a, s, o)),
                  Object.is(n.item, a) || this._addIdentityChange(n, a)),
              n = n._next,
              o++;
          }),
          this.length = o;}
      return this._truncate(n), this.collection = t, this.isDirty;
    }
    get isDirty() {
      return this._additionsHead !== null || this._movesHead !== null ||
        this._removalsHead !== null || this._identityChangesHead !== null;
    }
    _reset() {
      if (this.isDirty) {
        let t;
        for (t = this._previousItHead = this._itHead; t !== null; t = t._next) {
          t._nextPrevious = t._next;
        }
        for (t = this._additionsHead; t !== null; t = t._nextAdded) {
          t.previousIndex = t.currentIndex;
        }
        for (
          this._additionsHead = this._additionsTail = null, t = this._movesHead;
          t !== null;
          t = t._nextMoved
        ) t.previousIndex = t.currentIndex;
        this._movesHead = this._movesTail = null,
          this._removalsHead = this._removalsTail = null,
          this._identityChangesHead = this._identityChangesTail = null;
      }
    }
    _mismatch(t, n, r, o) {
      let i;
      return t === null ? i = this._itTail : (i = t._prev, this._remove(t)),
        t = this._unlinkedRecords === null
          ? null
          : this._unlinkedRecords.get(r, null),
        t !== null
          ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
            this._reinsertAfter(t, i, o))
          : (t = this._linkedRecords === null
            ? null
            : this._linkedRecords.get(r, o),
            t !== null
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._moveAfter(t, i, o))
              : t = this._addAfter(new zi(n, r), i, o)),
        t;
    }
    _verifyReinsertion(t, n, r, o) {
      let i = this._unlinkedRecords === null
        ? null
        : this._unlinkedRecords.get(r, null);
      return i !== null
        ? t = this._reinsertAfter(i, t._prev, o)
        : t.currentIndex != o && (t.currentIndex = o, this._addToMoves(t, o)),
        t;
    }
    _truncate(t) {
      for (; t !== null;) {
        let n = t._next;
        this._addToRemovals(this._unlink(t)), t = n;
      }
      this._unlinkedRecords !== null && this._unlinkedRecords.clear(),
        this._additionsTail !== null && (this._additionsTail._nextAdded = null),
        this._movesTail !== null && (this._movesTail._nextMoved = null),
        this._itTail !== null && (this._itTail._next = null),
        this._removalsTail !== null && (this._removalsTail._nextRemoved = null),
        this._identityChangesTail !== null &&
        (this._identityChangesTail._nextIdentityChange = null);
    }
    _reinsertAfter(t, n, r) {
      this._unlinkedRecords !== null && this._unlinkedRecords.remove(t);
      let o = t._prevRemoved, i = t._nextRemoved;
      return o === null ? this._removalsHead = i : o._nextRemoved = i,
        i === null ? this._removalsTail = o : i._prevRemoved = o,
        this._insertAfter(t, n, r),
        this._addToMoves(t, r),
        t;
    }
    _moveAfter(t, n, r) {
      return this._unlink(t),
        this._insertAfter(t, n, r),
        this._addToMoves(t, r),
        t;
    }
    _addAfter(t, n, r) {
      return this._insertAfter(t, n, r),
        this._additionsTail === null
          ? this._additionsTail = this._additionsHead = t
          : this._additionsTail = this._additionsTail._nextAdded = t,
        t;
    }
    _insertAfter(t, n, r) {
      let o = n === null ? this._itHead : n._next;
      return t._next = o,
        t._prev = n,
        o === null ? this._itTail = t : o._prev = t,
        n === null ? this._itHead = t : n._next = t,
        this._linkedRecords === null && (this._linkedRecords = new $r()),
        this._linkedRecords.put(t),
        t.currentIndex = r,
        t;
    }
    _remove(t) {
      return this._addToRemovals(this._unlink(t));
    }
    _unlink(t) {
      this._linkedRecords !== null && this._linkedRecords.remove(t);
      let n = t._prev, r = t._next;
      return n === null ? this._itHead = r : n._next = r,
        r === null ? this._itTail = n : r._prev = n,
        t;
    }
    _addToMoves(t, n) {
      return t.previousIndex === n ||
        (this._movesTail === null
          ? this._movesTail = this._movesHead = t
          : this._movesTail = this._movesTail._nextMoved = t),
        t;
    }
    _addToRemovals(t) {
      return this._unlinkedRecords === null &&
        (this._unlinkedRecords = new $r()),
        this._unlinkedRecords.put(t),
        t.currentIndex = null,
        t._nextRemoved = null,
        this._removalsTail === null
          ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null)
          : (t._prevRemoved = this._removalsTail,
            this._removalsTail = this._removalsTail._nextRemoved = t),
        t;
    }
    _addIdentityChange(t, n) {
      return t.item = n,
        this._identityChangesTail === null
          ? this._identityChangesTail = this._identityChangesHead = t
          : this._identityChangesTail =
            this._identityChangesTail
              ._nextIdentityChange =
              t,
        t;
    }
  },
  zi = class {
    item;
    trackById;
    currentIndex = null;
    previousIndex = null;
    _nextPrevious = null;
    _prev = null;
    _next = null;
    _prevDup = null;
    _nextDup = null;
    _prevRemoved = null;
    _nextRemoved = null;
    _nextAdded = null;
    _nextMoved = null;
    _nextIdentityChange = null;
    constructor(t, n) {
      this.item = t, this.trackById = n;
    }
  },
  Gi = class {
    _head = null;
    _tail = null;
    add(t) {
      this._head === null
        ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null)
        : (this._tail._nextDup = t,
          t._prevDup = this._tail,
          t._nextDup = null,
          this._tail = t);
    }
    get(t, n) {
      let r;
      for (r = this._head; r !== null; r = r._nextDup) {
        if ((n === null || n <= r.currentIndex) && Object.is(r.trackById, t)) {
          return r;
        }
      }
      return null;
    }
    remove(t) {
      let n = t._prevDup, r = t._nextDup;
      return n === null ? this._head = r : n._nextDup = r,
        r === null ? this._tail = n : r._prevDup = n,
        this._head === null;
    }
  },
  $r = class {
    map = new Map();
    put(t) {
      let n = t.trackById, r = this.map.get(n);
      r || (r = new Gi(), this.map.set(n, r)), r.add(t);
    }
    get(t, n) {
      let r = t, o = this.map.get(r);
      return o ? o.get(t, n) : null;
    }
    remove(t) {
      let n = t.trackById;
      return this.map.get(n).remove(t) && this.map.delete(n), t;
    }
    get isEmpty() {
      return this.map.size === 0;
    }
    clear() {
      this.map.clear();
    }
  };
function yu(e, t, n) {
  let r = e.previousIndex;
  if (r === null) return r;
  let o = 0;
  return n && r < n.length && (o = n[r]), r + t + o;
}
function vu() {
  return new Ls([new $i()]);
}
var Ls = (() => {
  class e {
    factories;
    static ɵprov = O({ token: e, providedIn: "root", factory: vu });
    constructor(n) {
      this.factories = n;
    }
    static create(n, r) {
      if (r != null) {
        let o = r.factories.slice();
        n = n.concat(o);
      }
      return new e(n);
    }
    static extend(n) {
      return {
        provide: e,
        useFactory: (r) => e.create(n, r || vu()),
        deps: [[e, new Qf(), new Zf()]],
      };
    }
    find(n) {
      let r = this.factories.find((o) => o.supports(n));
      if (r != null) return r;
      throw new M(901, !1);
    }
  }
  return e;
})();
function GM(e) {
  try {
    let { rootComponent: t, appProviders: n, platformProviders: r } = e,
      o = Mv(r),
      i = [ud({}), { provide: ot, useExisting: Ev }, ...n || []],
      s = new Vr({
        providers: i,
        parent: o,
        debugName: "",
        runEnvironmentInitializers: !1,
      });
    return Cv({
      r3Injector: s.injector,
      platformInjector: o,
      rootComponent: t,
    });
  } catch (t) {
    return Promise.reject(t);
  }
}
function Av(e) {
  return typeof e == "boolean" ? e : e != null && e !== "false";
}
function Ov(e, t = NaN) {
  return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t;
}
function WM(e, t) {
  De("NgSignals");
  let n = po(e);
  return t?.equal && (n[B].equal = t.equal), n;
}
function Rv(e) {
  let t = _(null);
  try {
    return e();
  } finally {
    _(t);
  }
}
var ld = (() => {
  class e {
    view;
    node;
    constructor(n, r) {
      this.view = n, this.node = r;
    }
    static __NG_ELEMENT_ID__ = Fv;
  }
  return e;
})();
function Fv() {
  return new ld(C(), V());
}
var kv = !1,
  Pv = (() => {
    class e extends jr {
      pendingTasks = D(vn);
      taskId = null;
      schedule(n) {
        super.schedule(n),
          this.taskId === null &&
          (this.taskId = this.pendingTasks.add(),
            queueMicrotask(() => this.flush()));
      }
      flush() {
        try {
          super.flush();
        } finally {
          this.taskId !== null &&
            (this.pendingTasks.remove(this.taskId), this.taskId = null);
        }
      }
      static ɵprov = O({
        token: e,
        providedIn: "root",
        factory: () => new e(),
      });
    }
    return e;
  })(),
  Wi = class {
    scheduler;
    effectFn;
    zone;
    injector;
    unregisterOnDestroy;
    watcher;
    constructor(t, n, r, o, i, s) {
      this.scheduler = t,
        this.effectFn = n,
        this.zone = r,
        this.injector = i,
        this.watcher = na((a) => this.runEffect(a), () => this.schedule(), s),
        this.unregisterOnDestroy = o?.onDestroy(() => this.destroy());
    }
    runEffect(t) {
      try {
        this.effectFn(t);
      } catch (n) {
        this.injector.get(it, null, { optional: !0 })?.handleError(n);
      }
    }
    run() {
      this.watcher.run();
    }
    schedule() {
      this.scheduler.schedule(this);
    }
    destroy() {
      this.watcher.destroy(), this.unregisterOnDestroy?.();
    }
  };
function Lv() {}
function Vv(e, t) {
  De("NgSignals"), !t?.injector && Wr(Lv);
  let n = t?.injector ?? D(ye),
    r = t?.manualCleanup !== !0 ? n.get(yn) : null,
    o = new Wi(
      n.get(Pv),
      e,
      typeof Zone > "u" ? null : Zone.current,
      r,
      n,
      t?.allowSignalWrites ?? !1,
    ),
    i = n.get(Ps, null, { optional: !0 });
  return !i || !(i._lView[g] & 8)
    ? o.watcher.notify()
    : (i._lView[ur] ??= []).push(o.watcher.notify),
    o;
}
var jv = kv;
var qi = class {
  [B];
  constructor(t) {
    this[B] = t;
  }
  destroy() {
    this[B].destroy();
  }
};
function Bv(e, t) {
  if (jv) return Vv(e, t);
  De("NgSignals"), !t?.injector && Wr(Bv);
  let n = t?.injector ?? D(ye),
    r = t?.manualCleanup !== !0 ? n.get(yn) : null,
    o,
    i = n.get(ld, null, { optional: !0 }),
    s = n.get(ot);
  return i !== null && !t?.forceRoot
    ? (o = Uv(i.view, s, e),
      r instanceof Mr && r._lView === i.view && (r = null))
    : o = zv(e, n.get(Kl), s),
    o.injector = n,
    r !== null && (o.onDestroyFn = r.onDestroy(() => o.destroy())),
    new qi(o);
}
var dd = W(G({}, Be), {
    consumerIsAlwaysLive: !0,
    consumerAllowSignalWrites: !0,
    dirty: !0,
    hasRun: !1,
    cleanupFns: void 0,
    zone: null,
    kind: "effect",
    onDestroyFn: an,
    run() {
      if (this.dirty = !1, this.hasRun && !zt(this)) return;
      this.hasRun = !0;
      let e = (r) => (this.cleanupFns ??= []).push(r), t = gt(this), n = wr(!1);
      try {
        this.maybeCleanup(), this.fn(e);
      } finally {
        wr(n), Ut(this, t);
      }
    },
    maybeCleanup() {
      if (this.cleanupFns?.length) {
        try {
          for (; this.cleanupFns.length;) this.cleanupFns.pop()();
        } finally {
          this.cleanupFns = [];
        }
      }
    },
  }),
  Hv = W(G({}, dd), {
    consumerMarkedDirty() {
      this.scheduler.schedule(this), this.notifier.notify(13);
    },
    destroy() {
      mt(this),
        this.onDestroyFn(),
        this.maybeCleanup(),
        this.scheduler.remove(this);
    },
  }),
  $v = W(G({}, dd), {
    consumerMarkedDirty() {
      this.view[g] |= 8192, hn(this.view), this.notifier.notify(14);
    },
    destroy() {
      mt(this),
        this.onDestroyFn(),
        this.maybeCleanup(),
        this.view[Je]?.delete(this);
    },
  });
function Uv(e, t, n) {
  let r = Object.create($v);
  return r.view = e,
    r.zone = typeof Zone < "u" ? Zone.current : null,
    r.notifier = t,
    r.fn = n,
    e[Je] ??= new Set(),
    e[Je].add(r),
    r.consumerMarkedDirty(r),
    r;
}
function zv(e, t, n) {
  let r = Object.create(Hv);
  return r.fn = e,
    r.scheduler = t,
    r.notifier = n,
    r.zone = typeof Zone < "u" ? Zone.current : null,
    r.scheduler.schedule(r),
    r.notifier.notify(13),
    r;
}
function qM(e, t) {
  let n = Re(e), r = t.elementInjector || Gr();
  return new kt(n).create(
    r,
    t.projectableNodes,
    t.hostElement,
    t.environmentInjector,
  );
}
var yd = null;
function Vs() {
  return yd;
}
function wT(e) {
  yd ??= e;
}
var fd = class {};
var vd = new N(""),
  Dd = (() => {
    class e {
      historyGo(n) {
        throw new Error("");
      }
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = O({
        token: e,
        factory: () => D(Wv),
        providedIn: "platform",
      });
    }
    return e;
  })();
var Wv = (() => {
  class e extends Dd {
    _location;
    _history;
    _doc = D(vd);
    constructor() {
      super(), this._location = window.location, this._history = window.history;
    }
    getBaseHrefFromDOM() {
      return Vs().getBaseHref(this._doc);
    }
    onPopState(n) {
      let r = Vs().getGlobalEventTarget(this._doc, "window");
      return r.addEventListener("popstate", n, !1),
        () => r.removeEventListener("popstate", n);
    }
    onHashChange(n) {
      let r = Vs().getGlobalEventTarget(this._doc, "window");
      return r.addEventListener("hashchange", n, !1),
        () => r.removeEventListener("hashchange", n);
    }
    get href() {
      return this._location.href;
    }
    get protocol() {
      return this._location.protocol;
    }
    get hostname() {
      return this._location.hostname;
    }
    get port() {
      return this._location.port;
    }
    get pathname() {
      return this._location.pathname;
    }
    get search() {
      return this._location.search;
    }
    get hash() {
      return this._location.hash;
    }
    set pathname(n) {
      this._location.pathname = n;
    }
    pushState(n, r, o) {
      this._history.pushState(n, r, o);
    }
    replaceState(n, r, o) {
      this._history.replaceState(n, r, o);
    }
    forward() {
      this._history.forward();
    }
    back() {
      this._history.back();
    }
    historyGo(n = 0) {
      this._history.go(n);
    }
    getState() {
      return this._history.state;
    }
    static ɵfac = function (r) {
      return new (r || e)();
    };
    static ɵprov = O({
      token: e,
      factory: () => new e(),
      providedIn: "platform",
    });
  }
  return e;
})();
function Ed(e, t) {
  if (e.length == 0) return t;
  if (t.length == 0) return e;
  let n = 0;
  return e.endsWith("/") && n++,
    t.startsWith("/") && n++,
    n == 2 ? e + t.substring(1) : n == 1 ? e + t : e + "/" + t;
}
function pd(e) {
  let t = e.match(/#|\?|$/),
    n = t && t.index || e.length,
    r = n - (e[n - 1] === "/" ? 1 : 0);
  return e.slice(0, r) + e.slice(n);
}
function dt(e) {
  return e && e[0] !== "?" ? "?" + e : e;
}
var Bs = (() => {
    class e {
      historyGo(n) {
        throw new Error("");
      }
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵprov = O({ token: e, factory: () => D(Zv), providedIn: "root" });
    }
    return e;
  })(),
  qv = new N(""),
  Zv = (() => {
    class e extends Bs {
      _platformLocation;
      _baseHref;
      _removeListenerFns = [];
      constructor(n, r) {
        super(),
          this._platformLocation = n,
          this._baseHref = r ?? this._platformLocation.getBaseHrefFromDOM() ??
            D(vd).location?.origin ?? "";
      }
      ngOnDestroy() {
        for (; this._removeListenerFns.length;) this._removeListenerFns.pop()();
      }
      onPopState(n) {
        this._removeListenerFns.push(
          this._platformLocation.onPopState(n),
          this._platformLocation.onHashChange(n),
        );
      }
      getBaseHref() {
        return this._baseHref;
      }
      prepareExternalUrl(n) {
        return Ed(this._baseHref, n);
      }
      path(n = !1) {
        let r = this._platformLocation.pathname +
            dt(this._platformLocation.search),
          o = this._platformLocation.hash;
        return o && n ? `${r}${o}` : r;
      }
      pushState(n, r, o, i) {
        let s = this.prepareExternalUrl(o + dt(i));
        this._platformLocation.pushState(n, r, s);
      }
      replaceState(n, r, o, i) {
        let s = this.prepareExternalUrl(o + dt(i));
        this._platformLocation.replaceState(n, r, s);
      }
      forward() {
        this._platformLocation.forward();
      }
      back() {
        this._platformLocation.back();
      }
      getState() {
        return this._platformLocation.getState();
      }
      historyGo(n = 0) {
        this._platformLocation.historyGo?.(n);
      }
      static ɵfac = function (r) {
        return new (r || e)(K(Dd), K(qv, 8));
      };
      static ɵprov = O({ token: e, factory: e.ɵfac, providedIn: "root" });
    }
    return e;
  })();
var Qv = (() => {
  class e {
    _subject = new q();
    _basePath;
    _locationStrategy;
    _urlChangeListeners = [];
    _urlChangeSubscription = null;
    constructor(n) {
      this._locationStrategy = n;
      let r = this._locationStrategy.getBaseHref();
      this._basePath = Jv(pd(hd(r))),
        this._locationStrategy.onPopState((o) => {
          this._subject.next({
            url: this.path(!0),
            pop: !0,
            state: o.state,
            type: o.type,
          });
        });
    }
    ngOnDestroy() {
      this._urlChangeSubscription?.unsubscribe(), this._urlChangeListeners = [];
    }
    path(n = !1) {
      return this.normalize(this._locationStrategy.path(n));
    }
    getState() {
      return this._locationStrategy.getState();
    }
    isCurrentPathEqualTo(n, r = "") {
      return this.path() == this.normalize(n + dt(r));
    }
    normalize(n) {
      return e.stripTrailingSlash(Kv(this._basePath, hd(n)));
    }
    prepareExternalUrl(n) {
      return n && n[0] !== "/" && (n = "/" + n),
        this._locationStrategy.prepareExternalUrl(n);
    }
    go(n, r = "", o = null) {
      this._locationStrategy.pushState(o, "", n, r),
        this._notifyUrlChangeListeners(this.prepareExternalUrl(n + dt(r)), o);
    }
    replaceState(n, r = "", o = null) {
      this._locationStrategy.replaceState(o, "", n, r),
        this._notifyUrlChangeListeners(this.prepareExternalUrl(n + dt(r)), o);
    }
    forward() {
      this._locationStrategy.forward();
    }
    back() {
      this._locationStrategy.back();
    }
    historyGo(n = 0) {
      this._locationStrategy.historyGo?.(n);
    }
    onUrlChange(n) {
      return this._urlChangeListeners.push(n),
        this._urlChangeSubscription ??= this.subscribe((r) => {
          this._notifyUrlChangeListeners(r.url, r.state);
        }),
        () => {
          let r = this._urlChangeListeners.indexOf(n);
          this._urlChangeListeners.splice(r, 1),
            this._urlChangeListeners.length === 0 &&
            (this._urlChangeSubscription?.unsubscribe(),
              this._urlChangeSubscription = null);
        };
    }
    _notifyUrlChangeListeners(n = "", r) {
      this._urlChangeListeners.forEach((o) => o(n, r));
    }
    subscribe(n, r, o) {
      return this._subject.subscribe({
        next: n,
        error: r ?? void 0,
        complete: o ?? void 0,
      });
    }
    static normalizeQueryParams = dt;
    static joinWithSlash = Ed;
    static stripTrailingSlash = pd;
    static ɵfac = function (r) {
      return new (r || e)(K(Bs));
    };
    static ɵprov = O({ token: e, factory: () => Yv(), providedIn: "root" });
  }
  return e;
})();
function Yv() {
  return new Qv(K(Bs));
}
function Kv(e, t) {
  if (!e || !t.startsWith(e)) return t;
  let n = t.substring(e.length);
  return n === "" || ["/", ";", "?", "#"].includes(n[0]) ? n : t;
}
function hd(e) {
  return e.replace(/\/index.html$/, "");
}
function Jv(e) {
  if (new RegExp("^(https?:)?//").test(e)) {
    let [, n] = e.split(/\/\/[^\/]+/);
    return n;
  }
  return e;
}
function CT(e, t) {
  t = encodeURIComponent(t);
  for (let n of e.split(";")) {
    let r = n.indexOf("="),
      [o, i] = r == -1 ? [n, ""] : [n.slice(0, r), n.slice(r + 1)];
    if (o.trim() === t) return decodeURIComponent(i);
  }
  return null;
}
var js = class {
    $implicit;
    ngForOf;
    index;
    count;
    constructor(t, n, r, o) {
      this.$implicit = t, this.ngForOf = n, this.index = r, this.count = o;
    }
    get first() {
      return this.index === 0;
    }
    get last() {
      return this.index === this.count - 1;
    }
    get even() {
      return this.index % 2 === 0;
    }
    get odd() {
      return !this.even;
    }
  },
  bT = (() => {
    class e {
      _viewContainer;
      _template;
      _differs;
      set ngForOf(n) {
        this._ngForOf = n, this._ngForOfDirty = !0;
      }
      set ngForTrackBy(n) {
        this._trackByFn = n;
      }
      get ngForTrackBy() {
        return this._trackByFn;
      }
      _ngForOf = null;
      _ngForOfDirty = !0;
      _differ = null;
      _trackByFn;
      constructor(n, r, o) {
        this._viewContainer = n, this._template = r, this._differs = o;
      }
      set ngForTemplate(n) {
        n && (this._template = n);
      }
      ngDoCheck() {
        if (this._ngForOfDirty) {
          this._ngForOfDirty = !1;
          let n = this._ngForOf;
          !this._differ && n &&
            (this._differ = this._differs.find(n).create(this.ngForTrackBy));
        }
        if (this._differ) {
          let n = this._differ.diff(this._ngForOf);
          n && this._applyChanges(n);
        }
      }
      _applyChanges(n) {
        let r = this._viewContainer;
        n.forEachOperation((o, i, s) => {
          if (o.previousIndex == null) {
            r.createEmbeddedView(
              this._template,
              new js(o.item, this._ngForOf, -1, -1),
              s === null ? void 0 : s,
            );
          } else if (s == null) r.remove(i === null ? void 0 : i);
          else if (i !== null) {
            let a = r.get(i);
            r.move(a, s), gd(a, o);
          }
        });
        for (let o = 0, i = r.length; o < i; o++) {
          let a = r.get(o).context;
          a.index = o, a.count = i, a.ngForOf = this._ngForOf;
        }
        n.forEachIdentityChange((o) => {
          let i = r.get(o.currentIndex);
          gd(i, o);
        });
      }
      static ngTemplateContextGuard(n, r) {
        return !0;
      }
      static ɵfac = function (r) {
        return new (r || e)(je(Bt), je(Rt), je(Ls));
      };
      static ɵdir = Os({
        type: e,
        selectors: [["", "ngFor", "", "ngForOf", ""]],
        inputs: {
          ngForOf: "ngForOf",
          ngForTrackBy: "ngForTrackBy",
          ngForTemplate: "ngForTemplate",
        },
      });
    }
    return e;
  })();
function gd(e, t) {
  e.context.$implicit = t.item;
}
var _T = (() => {
  class e {
    _viewContainerRef;
    _viewRef = null;
    ngTemplateOutletContext = null;
    ngTemplateOutlet = null;
    ngTemplateOutletInjector = null;
    constructor(n) {
      this._viewContainerRef = n;
    }
    ngOnChanges(n) {
      if (this._shouldRecreateView(n)) {
        let r = this._viewContainerRef;
        if (
          this._viewRef && r.remove(r.indexOf(this._viewRef)),
            !this.ngTemplateOutlet
        ) {
          this._viewRef = null;
          return;
        }
        let o = this._createContextForwardProxy();
        this._viewRef = r.createEmbeddedView(this.ngTemplateOutlet, o, {
          injector: this.ngTemplateOutletInjector ?? void 0,
        });
      }
    }
    _shouldRecreateView(n) {
      return !!n.ngTemplateOutlet || !!n.ngTemplateOutletInjector;
    }
    _createContextForwardProxy() {
      return new Proxy({}, {
        set: (n, r, o) =>
          this.ngTemplateOutletContext
            ? Reflect.set(this.ngTemplateOutletContext, r, o)
            : !1,
        get: (n, r, o) => {
          if (this.ngTemplateOutletContext) {
            return Reflect.get(this.ngTemplateOutletContext, r, o);
          }
        },
      });
    }
    static ɵfac = function (r) {
      return new (r || e)(je(Bt));
    };
    static ɵdir = Os({
      type: e,
      selectors: [["", "ngTemplateOutlet", ""]],
      inputs: {
        ngTemplateOutletContext: "ngTemplateOutletContext",
        ngTemplateOutlet: "ngTemplateOutlet",
        ngTemplateOutletInjector: "ngTemplateOutletInjector",
      },
      features: [Qu],
    });
  }
  return e;
})();
var MT = (() => {
    class e {
      static ɵfac = function (r) {
        return new (r || e)();
      };
      static ɵmod = zl({ type: e });
      static ɵinj = Mu({});
    }
    return e;
  })(),
  Xv = "browser",
  eD = "server";
function TT(e) {
  return e === Xv;
}
function ST(e) {
  return e === eD;
}
var md = class {};
var ft = function (e) {
    return e[e.State = 0] = "State",
      e[e.Transition = 1] = "Transition",
      e[e.Sequence = 2] = "Sequence",
      e[e.Group = 3] = "Group",
      e[e.Animate = 4] = "Animate",
      e[e.Keyframes = 5] = "Keyframes",
      e[e.Style = 6] = "Style",
      e[e.Trigger = 7] = "Trigger",
      e[e.Reference = 8] = "Reference",
      e[e.AnimateChild = 9] = "AnimateChild",
      e[e.AnimateRef = 10] = "AnimateRef",
      e[e.Query = 11] = "Query",
      e[e.Stagger = 12] = "Stagger",
      e;
  }(ft || {}),
  AT = "*";
function OT(e, t) {
  return { type: ft.Trigger, name: e, definitions: t, options: {} };
}
function RT(e, t = null) {
  return { type: ft.Animate, styles: t, timings: e };
}
function FT(e, t = null) {
  return { type: ft.Sequence, steps: e, options: t };
}
function kT(e) {
  return { type: ft.Style, styles: e, offset: null };
}
function PT(e, t, n) {
  return { type: ft.State, name: e, styles: t, options: n };
}
function LT(e, t, n = null) {
  return { type: ft.Transition, expr: e, animation: t, options: n };
}
var Id = class {
    _onDoneFns = [];
    _onStartFns = [];
    _onDestroyFns = [];
    _originalOnDoneFns = [];
    _originalOnStartFns = [];
    _started = !1;
    _destroyed = !1;
    _finished = !1;
    _position = 0;
    parentPlayer = null;
    totalTime;
    constructor(t = 0, n = 0) {
      this.totalTime = t + n;
    }
    _onFinish() {
      this._finished ||
        (this._finished = !0,
          this._onDoneFns.forEach((t) => t()),
          this._onDoneFns = []);
    }
    onStart(t) {
      this._originalOnStartFns.push(t), this._onStartFns.push(t);
    }
    onDone(t) {
      this._originalOnDoneFns.push(t), this._onDoneFns.push(t);
    }
    onDestroy(t) {
      this._onDestroyFns.push(t);
    }
    hasStarted() {
      return this._started;
    }
    init() {}
    play() {
      this.hasStarted() || (this._onStart(), this.triggerMicrotask()),
        this._started = !0;
    }
    triggerMicrotask() {
      queueMicrotask(() => this._onFinish());
    }
    _onStart() {
      this._onStartFns.forEach((t) => t()), this._onStartFns = [];
    }
    pause() {}
    restart() {}
    finish() {
      this._onFinish();
    }
    destroy() {
      this._destroyed ||
        (this._destroyed = !0,
          this.hasStarted() || this._onStart(),
          this.finish(),
          this._onDestroyFns.forEach((t) => t()),
          this._onDestroyFns = []);
    }
    reset() {
      this._started = !1,
        this._finished = !1,
        this._onStartFns = this._originalOnStartFns,
        this._onDoneFns = this._originalOnDoneFns;
    }
    setPosition(t) {
      this._position = this.totalTime ? t * this.totalTime : 1;
    }
    getPosition() {
      return this.totalTime ? this._position / this.totalTime : 1;
    }
    triggerCallback(t) {
      let n = t == "start" ? this._onStartFns : this._onDoneFns;
      n.forEach((r) => r()), n.length = 0;
    }
  },
  wd = class {
    _onDoneFns = [];
    _onStartFns = [];
    _finished = !1;
    _started = !1;
    _destroyed = !1;
    _onDestroyFns = [];
    parentPlayer = null;
    totalTime = 0;
    players;
    constructor(t) {
      this.players = t;
      let n = 0, r = 0, o = 0, i = this.players.length;
      i == 0
        ? queueMicrotask(() => this._onFinish())
        : this.players.forEach((s) => {
          s.onDone(() => {
            ++n == i && this._onFinish();
          }),
            s.onDestroy(() => {
              ++r == i && this._onDestroy();
            }),
            s.onStart(() => {
              ++o == i && this._onStart();
            });
        }),
        this.totalTime = this.players.reduce(
          (s, a) => Math.max(s, a.totalTime),
          0,
        );
    }
    _onFinish() {
      this._finished ||
        (this._finished = !0,
          this._onDoneFns.forEach((t) => t()),
          this._onDoneFns = []);
    }
    init() {
      this.players.forEach((t) => t.init());
    }
    onStart(t) {
      this._onStartFns.push(t);
    }
    _onStart() {
      this.hasStarted() ||
        (this._started = !0,
          this._onStartFns.forEach((t) => t()),
          this._onStartFns = []);
    }
    onDone(t) {
      this._onDoneFns.push(t);
    }
    onDestroy(t) {
      this._onDestroyFns.push(t);
    }
    hasStarted() {
      return this._started;
    }
    play() {
      this.parentPlayer || this.init(),
        this._onStart(),
        this.players.forEach((t) => t.play());
    }
    pause() {
      this.players.forEach((t) => t.pause());
    }
    restart() {
      this.players.forEach((t) => t.restart());
    }
    finish() {
      this._onFinish(), this.players.forEach((t) => t.finish());
    }
    destroy() {
      this._onDestroy();
    }
    _onDestroy() {
      this._destroyed ||
        (this._destroyed = !0,
          this._onFinish(),
          this.players.forEach((t) => t.destroy()),
          this._onDestroyFns.forEach((t) => t()),
          this._onDestroyFns = []);
    }
    reset() {
      this.players.forEach((t) => t.reset()),
        this._destroyed = !1,
        this._finished = !1,
        this._started = !1;
    }
    setPosition(t) {
      let n = t * this.totalTime;
      this.players.forEach((r) => {
        let o = r.totalTime ? Math.min(1, n / r.totalTime) : 1;
        r.setPosition(o);
      });
    }
    getPosition() {
      let t = this.players.reduce(
        (n, r) => n === null || r.totalTime > n.totalTime ? r : n,
        null,
      );
      return t != null ? t.getPosition() : 0;
    }
    beforeDestroy() {
      this.players.forEach((t) => {
        t.beforeDestroy && t.beforeDestroy();
      });
    }
    triggerCallback(t) {
      let n = t == "start" ? this._onStartFns : this._onDoneFns;
      n.forEach((r) => r()), n.length = 0;
    }
  },
  VT = "!";
export {
  $M as Nb,
  $u as aa,
  _f as R,
  _M as fb,
  _T as dc,
  af as v,
  AM as yb,
  aM as va,
  AT as kc,
  Av as Sb,
  ay as db,
  b as Y,
  bf as Q,
  BM as Kb,
  bM as $a,
  bo as h,
  Bt as Wa,
  bT as cc,
  bu as T,
  Bv as Wb,
  Cf as P,
  cf as y,
  Ch as ya,
  CM as Xa,
  cM as za,
  cn as ib,
  Co as g,
  CT as bc,
  cv as Hb,
  Cy as jb,
  D as _,
  De as sa,
  Df as K,
  df as B,
  DM as Sa,
  dM as Ga,
  dv as Jb,
  Ef as M,
  eM as W,
  er as t,
  fd as _b,
  Fe as ba,
  ff as E,
  FM as Bb,
  fM as Ha,
  FT as nc,
  ft as jc,
  fv as Lb,
  fy as eb,
  G as a,
  Ga as ka,
  gf as F,
  GM as Rb,
  gM as Ka,
  he as l,
  hh as ua,
  HM as Mb,
  hM as Ja,
  Id as rc,
  id as pb,
  If as N,
  iM as ia,
  it as pa,
  je as Ra,
  Jh as Oa,
  jM as Gb,
  jt as ra,
  Jy as sb,
  K as Z,
  kl as Va,
  kM as Cb,
  Kr as Ba,
  kr as Ua,
  kT as oc,
  ky as kb,
  Ld as e,
  Le as Ya,
  lf as A,
  LM as Eb,
  lM as Aa,
  LT as qc,
  M as S,
  md as ic,
  mf as G,
  MM as mb,
  mM as La,
  Mo as D,
  MT as ec,
  Mu as V,
  N as X,
  Na as z,
  Nh as Ca,
  NM as wb,
  nM as fa,
  No as L,
  np as $,
  O as U,
  od as ob,
  Oi as Za,
  OM as zb,
  oM as ha,
  Os as bb,
  OT as lc,
  ot as la,
  Ov as Tb,
  ov as vb,
  P as d,
  ph as ta,
  PM as Db,
  pM as Ia,
  Ps as Qb,
  PT as pc,
  Py as lb,
  q as i,
  Qd as o,
  qd as m,
  Qe as x,
  qe as q,
  Qm as _a,
  qM as Xb,
  Qu as da,
  Qv as ac,
  rf as r,
  RM as Ab,
  rM as ga,
  Rs as gb,
  RT as mc,
  Rt as Ta,
  Rv as Vb,
  rv as ub,
  sd as Ib,
  sf as u,
  SM as rb,
  sM as qa,
  Sr as Pa,
  ST as hc,
  T as f,
  tD as c,
  te as oa,
  TM as nb,
  tM as ea,
  To as H,
  TT as gc,
  ty as cb,
  uf as w,
  UM as Ob,
  uM as wa,
  un as Ea,
  vd as $b,
  vf as J,
  Vh as Ma,
  VM as Fb,
  vM as Qa,
  vn as ma,
  Vs as Yb,
  VT as tc,
  W as b,
  wd as sc,
  We as p,
  wf as O,
  wh as xa,
  WM as Ub,
  Wt as j,
  wT as Zb,
  xe as na,
  xh as Da,
  xM as xb,
  Xv as fc,
  Xy as tb,
  ye as ja,
  yf as I,
  yM as Na,
  ys as Fa,
  Yt as C,
  Yy as qb,
  yy as hb,
  Zd as n,
  Ze as s,
  ze as k,
  zl as ab,
  zM as Pb,
  zu as ca,
};
