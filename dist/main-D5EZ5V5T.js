import {
  $ as ft,
  $a as F,
  $b as A,
  _ as l,
  _a as cs,
  _b as vs,
  A as mt,
  a as m,
  Aa as li,
  aa as Wa,
  Ab as ne,
  ab as M,
  ac as Lt,
  B as Mr,
  b as V,
  Ba as Qa,
  ba as He,
  Bb as W,
  bb as T,
  bc as mn,
  C as Ir,
  Ca as ln,
  ca as Ne,
  Cb as G,
  cb as ce,
  cc as _s,
  D as Pe,
  d as Fe,
  Da as di,
  da as Me,
  Db as us,
  db as pe,
  dc as ys,
  E as Sr,
  e as ja,
  Ea as ui,
  ea as ve,
  Eb as ms,
  eb as te,
  ec as Wr,
  F as Ge,
  f as Je,
  Fa as Tt,
  fa as _e,
  Fb as fi,
  fb as Lr,
  fc as xs,
  G as tt,
  g as Cr,
  Ga as Ot,
  ga as Ga,
  Gb as Ve,
  gb as dn,
  gc as ws,
  H as Ar,
  h as kr,
  Ha as Ja,
  ha as qa,
  Hb as hs,
  hb as Vr,
  hc as Gr,
  I as za,
  i as w,
  Ia as es,
  ia as Ie,
  Ib as Pt,
  ib as nt,
  ic as hn,
  J as Rr,
  j as be,
  Ja as ts,
  ja as $,
  Jb as jr,
  jb as ie,
  K as Ua,
  k as Ue,
  Ka as is,
  ka as ai,
  Kb as Br,
  kb as le,
  L as Ha,
  l as fe,
  La as ns,
  la as Ya,
  Lb as zr,
  lb as j,
  lc as fn,
  M as Tr,
  m as g,
  Ma as rs,
  ma as si,
  Mb as ge,
  mb as bt,
  mc as pi,
  N as sn,
  n as ut,
  Na as os,
  na as Q,
  Nb as fs,
  nb as oe,
  O as ht,
  o as nn,
  Oa as we,
  oa as x,
  Ob as Ur,
  ob as C,
  oc as yt,
  P as ye,
  p as Ba,
  Pa as mi,
  pa as pt,
  Pb as ps,
  pb as I,
  pc as gi,
  Q as se,
  q as _,
  Qa as O,
  qa as Xa,
  Qb as Ce,
  qb as U,
  qc as bi,
  R as K,
  r as oi,
  Ra as Y,
  ra as N,
  Rb as gs,
  rb as rt,
  S as P,
  s as De,
  Sa as Pr,
  sa as Fr,
  Sb as H,
  sb as vt,
  T as it,
  t as rn,
  Ta as hi,
  ta as cn,
  Tb as Hr,
  tb as ls,
  U as f,
  u as Er,
  Ua as $e,
  ua as gt,
  Ub as Ye,
  ub as J,
  V as D,
  v as on,
  Va as Le,
  va as Za,
  Vb as je,
  vb as ds,
  W as $a,
  w as an,
  Wa as Ft,
  wa as ci,
  Wb as $r,
  wb as de,
  X as p,
  x as re,
  Xa as as,
  xa as Ka,
  Xb as un,
  xb as ue,
  Y as Or,
  y as Dr,
  Ya as Nr,
  ya as qe,
  Yb as Nt,
  yb as B,
  Z as S,
  z as et,
  Za as ss,
  za as xe,
  Zb as bs,
  zb as _t,
} from "./chunk-KCQIMPKX.js";
var _i = class {},
  gn = class {},
  xt = class n {
    headers;
    normalizedNames = new Map();
    lazyInit;
    lazyUpdate = null;
    constructor(i) {
      i
        ? typeof i == "string"
          ? this.lazyInit = () => {
            this.headers = new Map(),
              i.split(`
`).forEach((e) => {
                let t = e.indexOf(":");
                if (t > 0) {
                  let r = e.slice(0, t), o = e.slice(t + 1).trim();
                  this.addHeaderEntry(r, o);
                }
              });
          }
          : typeof Headers < "u" && i instanceof Headers
          ? (this.headers = new Map(),
            i.forEach((e, t) => {
              this.addHeaderEntry(t, e);
            }))
          : this.lazyInit = () => {
            this.headers = new Map(),
              Object.entries(i).forEach(([e, t]) => {
                this.setHeaderEntries(e, t);
              });
          }
        : this.headers = new Map();
    }
    has(i) {
      return this.init(), this.headers.has(i.toLowerCase());
    }
    get(i) {
      this.init();
      let e = this.headers.get(i.toLowerCase());
      return e && e.length > 0 ? e[0] : null;
    }
    keys() {
      return this.init(), Array.from(this.normalizedNames.values());
    }
    getAll(i) {
      return this.init(), this.headers.get(i.toLowerCase()) || null;
    }
    append(i, e) {
      return this.clone({ name: i, value: e, op: "a" });
    }
    set(i, e) {
      return this.clone({ name: i, value: e, op: "s" });
    }
    delete(i, e) {
      return this.clone({ name: i, value: e, op: "d" });
    }
    maybeSetNormalizedName(i, e) {
      this.normalizedNames.has(e) || this.normalizedNames.set(e, i);
    }
    init() {
      this.lazyInit &&
        (this.lazyInit instanceof n
          ? this.copyFrom(this.lazyInit)
          : this.lazyInit(),
          this.lazyInit = null,
          this.lazyUpdate &&
          (this.lazyUpdate.forEach((i) => this.applyUpdate(i)),
            this.lazyUpdate = null));
    }
    copyFrom(i) {
      i.init(),
        Array.from(i.headers.keys()).forEach((e) => {
          this.headers.set(e, i.headers.get(e)),
            this.normalizedNames.set(e, i.normalizedNames.get(e));
        });
    }
    clone(i) {
      let e = new n();
      return e.lazyInit = this.lazyInit && this.lazyInit instanceof n
        ? this.lazyInit
        : this,
        e.lazyUpdate = (this.lazyUpdate || []).concat([i]),
        e;
    }
    applyUpdate(i) {
      let e = i.name.toLowerCase();
      switch (i.op) {
        case "a":
        case "s":
          let t = i.value;
          if (typeof t == "string" && (t = [t]), t.length === 0) return;
          this.maybeSetNormalizedName(i.name, e);
          let r = (i.op === "a" ? this.headers.get(e) : void 0) || [];
          r.push(...t), this.headers.set(e, r);
          break;
        case "d":
          let o = i.value;
          if (!o) this.headers.delete(e), this.normalizedNames.delete(e);
          else {
            let a = this.headers.get(e);
            if (!a) return;
            a = a.filter((s) => o.indexOf(s) === -1),
              a.length === 0
                ? (this.headers.delete(e), this.normalizedNames.delete(e))
                : this.headers.set(e, a);
          }
          break;
      }
    }
    addHeaderEntry(i, e) {
      let t = i.toLowerCase();
      this.maybeSetNormalizedName(i, t),
        this.headers.has(t)
          ? this.headers.get(t).push(e)
          : this.headers.set(t, [e]);
    }
    setHeaderEntries(i, e) {
      let t = (Array.isArray(e) ? e : [e]).map((o) => o.toString()),
        r = i.toLowerCase();
      this.headers.set(r, t), this.maybeSetNormalizedName(i, r);
    }
    forEach(i) {
      this.init(),
        Array.from(this.normalizedNames.keys()).forEach((e) =>
          i(this.normalizedNames.get(e), this.headers.get(e))
        );
    }
  };
var Yr = class {
  encodeKey(i) {
    return Cs(i);
  }
  encodeValue(i) {
    return Cs(i);
  }
  decodeKey(i) {
    return decodeURIComponent(i);
  }
  decodeValue(i) {
    return decodeURIComponent(i);
  }
};
function Od(n, i) {
  let e = new Map();
  return n.length > 0 && n.replace(/^\?/, "").split("&").forEach((r) => {
    let o = r.indexOf("="),
      [a, s] = o == -1
        ? [i.decodeKey(r), ""]
        : [i.decodeKey(r.slice(0, o)), i.decodeValue(r.slice(o + 1))],
      c = e.get(a) || [];
    c.push(s), e.set(a, c);
  }),
    e;
}
var Fd = /%(\d[a-f0-9])/gi,
  Pd = {
    40: "@",
    "3A": ":",
    24: "$",
    "2C": ",",
    "3B": ";",
    "3D": "=",
    "3F": "?",
    "2F": "/",
  };
function Cs(n) {
  return encodeURIComponent(n).replace(Fd, (i, e) => Pd[e] ?? i);
}
function pn(n) {
  return `${n}`;
}
var ot = class n {
  map;
  encoder;
  updates = null;
  cloneFrom = null;
  constructor(i = {}) {
    if (this.encoder = i.encoder || new Yr(), i.fromString) {
      if (i.fromObject) throw new P(2805, !1);
      this.map = Od(i.fromString, this.encoder);
    } else {i.fromObject
        ? (this.map = new Map(),
          Object.keys(i.fromObject).forEach((e) => {
            let t = i.fromObject[e], r = Array.isArray(t) ? t.map(pn) : [pn(t)];
            this.map.set(e, r);
          }))
        : this.map = null;}
  }
  has(i) {
    return this.init(), this.map.has(i);
  }
  get(i) {
    this.init();
    let e = this.map.get(i);
    return e ? e[0] : null;
  }
  getAll(i) {
    return this.init(), this.map.get(i) || null;
  }
  keys() {
    return this.init(), Array.from(this.map.keys());
  }
  append(i, e) {
    return this.clone({ param: i, value: e, op: "a" });
  }
  appendAll(i) {
    let e = [];
    return Object.keys(i).forEach((t) => {
      let r = i[t];
      Array.isArray(r)
        ? r.forEach((o) => {
          e.push({ param: t, value: o, op: "a" });
        })
        : e.push({ param: t, value: r, op: "a" });
    }),
      this.clone(e);
  }
  set(i, e) {
    return this.clone({ param: i, value: e, op: "s" });
  }
  delete(i, e) {
    return this.clone({ param: i, value: e, op: "d" });
  }
  toString() {
    return this.init(),
      this.keys().map((i) => {
        let e = this.encoder.encodeKey(i);
        return this.map.get(i).map((t) => e + "=" + this.encoder.encodeValue(t))
          .join("&");
      }).filter((i) => i !== "").join("&");
  }
  clone(i) {
    let e = new n({ encoder: this.encoder });
    return e.cloneFrom = this.cloneFrom || this,
      e.updates = (this.updates || []).concat(i),
      e;
  }
  init() {
    this.map === null && (this.map = new Map()),
      this.cloneFrom !== null &&
      (this.cloneFrom.init(),
        this.cloneFrom.keys().forEach((i) =>
          this.map.set(i, this.cloneFrom.map.get(i))
        ),
        this.updates.forEach((i) => {
          switch (i.op) {
            case "a":
            case "s":
              let e = (i.op === "a" ? this.map.get(i.param) : void 0) || [];
              e.push(pn(i.value)), this.map.set(i.param, e);
              break;
            case "d":
              if (i.value !== void 0) {
                let t = this.map.get(i.param) || [], r = t.indexOf(pn(i.value));
                r !== -1 && t.splice(r, 1),
                  t.length > 0
                    ? this.map.set(i.param, t)
                    : this.map.delete(i.param);
              } else {
                this.map.delete(i.param);
                break;
              }
          }
        }),
        this.cloneFrom = this.updates = null);
  }
};
var Xr = class {
  map = new Map();
  set(i, e) {
    return this.map.set(i, e), this;
  }
  get(i) {
    return this.map.has(i) || this.map.set(i, i.defaultValue()),
      this.map.get(i);
  }
  delete(i) {
    return this.map.delete(i), this;
  }
  has(i) {
    return this.map.has(i);
  }
  keys() {
    return this.map.keys();
  }
};
function Nd(n) {
  switch (n) {
    case "DELETE":
    case "GET":
    case "HEAD":
    case "OPTIONS":
    case "JSONP":
      return !1;
    default:
      return !0;
  }
}
function ks(n) {
  return typeof ArrayBuffer < "u" && n instanceof ArrayBuffer;
}
function Es(n) {
  return typeof Blob < "u" && n instanceof Blob;
}
function Ds(n) {
  return typeof FormData < "u" && n instanceof FormData;
}
function Ld(n) {
  return typeof URLSearchParams < "u" && n instanceof URLSearchParams;
}
var Ms = "Content-Type",
  Rs = "X-Request-URL",
  Ts = "text/plain",
  Os = "application/json",
  Vd = `${Os}, ${Ts}, */*`,
  vi = class n {
    url;
    body = null;
    headers;
    context;
    reportProgress = !1;
    withCredentials = !1;
    responseType = "json";
    method;
    params;
    urlWithParams;
    transferCache;
    constructor(i, e, t, r) {
      this.url = e, this.method = i.toUpperCase();
      let o;
      if (
        Nd(this.method) || r
          ? (this.body = t !== void 0 ? t : null, o = r)
          : o = t,
          o &&
          (this.reportProgress = !!o.reportProgress,
            this.withCredentials = !!o.withCredentials,
            o.responseType && (this.responseType = o.responseType),
            o.headers && (this.headers = o.headers),
            o.context && (this.context = o.context),
            o.params && (this.params = o.params),
            this.transferCache = o.transferCache),
          this.headers ??= new xt(),
          this.context ??= new Xr(),
          !this.params
      ) this.params = new ot(), this.urlWithParams = e;
      else {
        let a = this.params.toString();
        if (a.length === 0) this.urlWithParams = e;
        else {
          let s = e.indexOf("?"),
            c = s === -1 ? "?" : s < e.length - 1 ? "&" : "";
          this.urlWithParams = e + c + a;
        }
      }
    }
    serializeBody() {
      return this.body === null
        ? null
        : typeof this.body == "string" || ks(this.body) || Es(this.body) ||
            Ds(this.body) || Ld(this.body)
        ? this.body
        : this.body instanceof ot
        ? this.body.toString()
        : typeof this.body == "object" || typeof this.body == "boolean" ||
            Array.isArray(this.body)
        ? JSON.stringify(this.body)
        : this.body.toString();
    }
    detectContentTypeHeader() {
      return this.body === null || Ds(this.body)
        ? null
        : Es(this.body)
        ? this.body.type || null
        : ks(this.body)
        ? null
        : typeof this.body == "string"
        ? Ts
        : this.body instanceof ot
        ? "application/x-www-form-urlencoded;charset=UTF-8"
        : typeof this.body == "object" || typeof this.body == "number" ||
            typeof this.body == "boolean"
        ? Os
        : null;
    }
    clone(i = {}) {
      let e = i.method || this.method,
        t = i.url || this.url,
        r = i.responseType || this.responseType,
        o = i.transferCache ?? this.transferCache,
        a = i.body !== void 0 ? i.body : this.body,
        s = i.withCredentials ?? this.withCredentials,
        c = i.reportProgress ?? this.reportProgress,
        d = i.headers || this.headers,
        u = i.params || this.params,
        h = i.context ?? this.context;
      return i.setHeaders !== void 0 &&
        (d = Object.keys(i.setHeaders).reduce(
          (v, y) => v.set(y, i.setHeaders[y]),
          d,
        )),
        i.setParams &&
        (u = Object.keys(i.setParams).reduce(
          (v, y) => v.set(y, i.setParams[y]),
          u,
        )),
        new n(e, t, a, {
          params: u,
          headers: d,
          context: h,
          reportProgress: c,
          responseType: r,
          withCredentials: s,
          transferCache: o,
        });
    }
  },
  Vt = function (n) {
    return n[n.Sent = 0] = "Sent",
      n[n.UploadProgress = 1] = "UploadProgress",
      n[n.ResponseHeader = 2] = "ResponseHeader",
      n[n.DownloadProgress = 3] = "DownloadProgress",
      n[n.Response = 4] = "Response",
      n[n.User = 5] = "User",
      n;
  }(Vt || {}),
  yi = class {
    headers;
    status;
    statusText;
    url;
    ok;
    type;
    constructor(i, e = 200, t = "OK") {
      this.headers = i.headers || new xt(),
        this.status = i.status !== void 0 ? i.status : e,
        this.statusText = i.statusText || t,
        this.url = i.url || null,
        this.ok = this.status >= 200 && this.status < 300;
    }
  },
  Zr = class n extends yi {
    constructor(i = {}) {
      super(i);
    }
    type = Vt.ResponseHeader;
    clone(i = {}) {
      return new n({
        headers: i.headers || this.headers,
        status: i.status !== void 0 ? i.status : this.status,
        statusText: i.statusText || this.statusText,
        url: i.url || this.url || void 0,
      });
    }
  },
  bn = class n extends yi {
    body;
    constructor(i = {}) {
      super(i), this.body = i.body !== void 0 ? i.body : null;
    }
    type = Vt.Response;
    clone(i = {}) {
      return new n({
        body: i.body !== void 0 ? i.body : this.body,
        headers: i.headers || this.headers,
        status: i.status !== void 0 ? i.status : this.status,
        statusText: i.statusText || this.statusText,
        url: i.url || this.url || void 0,
      });
    }
  },
  vn = class extends yi {
    name = "HttpErrorResponse";
    message;
    error;
    ok = !1;
    constructor(i) {
      super(i, 0, "Unknown Error"),
        this.status >= 200 && this.status < 300
          ? this.message = `Http failure during parsing for ${
            i.url || "(unknown url)"
          }`
          : this.message = `Http failure response for ${
            i.url || "(unknown url)"
          }: ${i.status} ${i.statusText}`,
        this.error = i.error || null;
    }
  },
  jd = 200,
  Bd = 204;
function qr(n, i) {
  return {
    body: i,
    headers: n.headers,
    context: n.context,
    observe: n.observe,
    params: n.params,
    reportProgress: n.reportProgress,
    responseType: n.responseType,
    withCredentials: n.withCredentials,
    transferCache: n.transferCache,
  };
}
var xi = (() => {
  class n {
    handler;
    constructor(e) {
      this.handler = e;
    }
    request(e, t, r = {}) {
      let o;
      if (e instanceof vi) o = e;
      else {
        let c;
        r.headers instanceof xt ? c = r.headers : c = new xt(r.headers);
        let d;
        r.params &&
        (r.params instanceof ot
          ? d = r.params
          : d = new ot({ fromObject: r.params })),
          o = new vi(e, t, r.body !== void 0 ? r.body : null, {
            headers: c,
            context: r.context,
            params: d,
            reportProgress: r.reportProgress,
            responseType: r.responseType || "json",
            withCredentials: r.withCredentials,
            transferCache: r.transferCache,
          });
      }
      let a = g(o).pipe(mt((c) => this.handler.handle(c)));
      if (e instanceof vi || r.observe === "events") return a;
      let s = a.pipe(re((c) => c instanceof bn));
      switch (r.observe || "body") {
        case "body":
          switch (o.responseType) {
            case "arraybuffer":
              return s.pipe(_((c) => {
                if (c.body !== null && !(c.body instanceof ArrayBuffer)) {
                  throw new Error("Response is not an ArrayBuffer.");
                }
                return c.body;
              }));
            case "blob":
              return s.pipe(_((c) => {
                if (c.body !== null && !(c.body instanceof Blob)) {
                  throw new Error("Response is not a Blob.");
                }
                return c.body;
              }));
            case "text":
              return s.pipe(_((c) => {
                if (c.body !== null && typeof c.body != "string") {
                  throw new Error("Response is not a string.");
                }
                return c.body;
              }));
            case "json":
            default:
              return s.pipe(_((c) => c.body));
          }
        case "response":
          return s;
        default:
          throw new Error(`Unreachable: unhandled observe type ${r.observe}}`);
      }
    }
    delete(e, t = {}) {
      return this.request("DELETE", e, t);
    }
    get(e, t = {}) {
      return this.request("GET", e, t);
    }
    head(e, t = {}) {
      return this.request("HEAD", e, t);
    }
    jsonp(e, t) {
      return this.request("JSONP", e, {
        params: new ot().append(t, "JSONP_CALLBACK"),
        observe: "body",
        responseType: "json",
      });
    }
    options(e, t = {}) {
      return this.request("OPTIONS", e, t);
    }
    patch(e, t, r = {}) {
      return this.request("PATCH", e, qr(r, t));
    }
    post(e, t, r = {}) {
      return this.request("POST", e, qr(r, t));
    }
    put(e, t, r = {}) {
      return this.request("PUT", e, qr(r, t));
    }
    static ɵfac = function (t) {
      return new (t || n)(S(_i));
    };
    static ɵprov = f({ token: n, factory: n.ɵfac });
  }
  return n;
})();
var zd = new p("");
function Fs(n, i) {
  return i(n);
}
function Ud(n, i) {
  return (e, t) => i.intercept(e, { handle: (r) => n(r, t) });
}
function Hd(n, i, e) {
  return (t, r) => Ne(e, () => i(t, (o) => n(o, r)));
}
var $d = new p(""),
  Kr = new p(""),
  Wd = new p(""),
  Ps = new p("", { providedIn: "root", factory: () => !0 });
function Gd() {
  let n = null;
  return (i, e) => {
    n === null && (n = (l($d, { optional: !0 }) ?? []).reduceRight(Ud, Fs));
    let t = l(si);
    if (l(Ps)) {
      let o = t.add();
      return n(i, e).pipe(Ge(() => t.remove(o)));
    } else return n(i, e);
  };
}
var Is = (() => {
  class n extends _i {
    backend;
    injector;
    chain = null;
    pendingTasks = l(si);
    contributeToStability = l(Ps);
    constructor(e, t) {
      super(), this.backend = e, this.injector = t;
    }
    handle(e) {
      if (this.chain === null) {
        let t = Array.from(
          new Set([...this.injector.get(Kr), ...this.injector.get(Wd, [])]),
        );
        this.chain = t.reduceRight((r, o) => Hd(r, o, this.injector), Fs);
      }
      if (this.contributeToStability) {
        let t = this.pendingTasks.add();
        return this.chain(e, (r) => this.backend.handle(r)).pipe(
          Ge(() => this.pendingTasks.remove(t)),
        );
      } else return this.chain(e, (t) => this.backend.handle(t));
    }
    static ɵfac = function (t) {
      return new (t || n)(S(gn), S(He));
    };
    static ɵprov = f({ token: n, factory: n.ɵfac });
  }
  return n;
})();
var qd = /^\)\]\}',?\n/, Yd = RegExp(`^${Rs}:`, "m");
function Xd(n) {
  return "responseURL" in n && n.responseURL
    ? n.responseURL
    : Yd.test(n.getAllResponseHeaders())
    ? n.getResponseHeader(Rs)
    : null;
}
var Ss = (() => {
    class n {
      xhrFactory;
      constructor(e) {
        this.xhrFactory = e;
      }
      handle(e) {
        if (e.method === "JSONP") throw new P(-2800, !1);
        let t = this.xhrFactory;
        return (t.ɵloadImpl ? fe(t.ɵloadImpl()) : g(null)).pipe(
          ye(() =>
            new Je((o) => {
              let a = t.build();
              if (
                a.open(e.method, e.urlWithParams),
                  e.withCredentials && (a.withCredentials = !0),
                  e.headers.forEach((b, E) =>
                    a.setRequestHeader(b, E.join(","))
                  ),
                  e.headers.has("Accept") || a.setRequestHeader("Accept", Vd),
                  !e.headers.has(Ms)
              ) {
                let b = e.detectContentTypeHeader();
                b !== null && a.setRequestHeader(Ms, b);
              }
              if (e.responseType) {
                let b = e.responseType.toLowerCase();
                a.responseType = b !== "json" ? b : "text";
              }
              let s = e.serializeBody(),
                c = null,
                d = () => {
                  if (c !== null) return c;
                  let b = a.statusText || "OK",
                    E = new xt(a.getAllResponseHeaders()),
                    he = Xd(a) || e.url;
                  return c = new Zr({
                    headers: E,
                    status: a.status,
                    statusText: b,
                    url: he,
                  }),
                    c;
                },
                u = () => {
                  let { headers: b, status: E, statusText: he, url: Qe } = d(),
                    Z = null;
                  E !== Bd &&
                  (Z = typeof a.response > "u" ? a.responseText : a.response),
                    E === 0 && (E = Z ? jd : 0);
                  let wr = E >= 200 && E < 300;
                  if (e.responseType === "json" && typeof Z == "string") {
                    let Sd = Z;
                    Z = Z.replace(qd, "");
                    try {
                      Z = Z !== "" ? JSON.parse(Z) : null;
                    } catch (Ad) {
                      Z = Sd, wr && (wr = !1, Z = { error: Ad, text: Z });
                    }
                  }
                  wr
                    ? (o.next(
                      new bn({
                        body: Z,
                        headers: b,
                        status: E,
                        statusText: he,
                        url: Qe || void 0,
                      }),
                    ),
                      o.complete())
                    : o.error(
                      new vn({
                        error: Z,
                        headers: b,
                        status: E,
                        statusText: he,
                        url: Qe || void 0,
                      }),
                    );
                },
                h = (b) => {
                  let { url: E } = d(),
                    he = new vn({
                      error: b,
                      status: a.status || 0,
                      statusText: a.statusText || "Unknown Error",
                      url: E || void 0,
                    });
                  o.error(he);
                },
                v = !1,
                y = (b) => {
                  v || (o.next(d()), v = !0);
                  let E = { type: Vt.DownloadProgress, loaded: b.loaded };
                  b.lengthComputable && (E.total = b.total),
                    e.responseType === "text" && a.responseText &&
                    (E.partialText = a.responseText),
                    o.next(E);
                },
                R = (b) => {
                  let E = { type: Vt.UploadProgress, loaded: b.loaded };
                  b.lengthComputable && (E.total = b.total), o.next(E);
                };
              return a.addEventListener("load", u),
                a.addEventListener("error", h),
                a.addEventListener("timeout", h),
                a.addEventListener("abort", h),
                e.reportProgress &&
                (a.addEventListener("progress", y),
                  s !== null && a.upload &&
                  a.upload.addEventListener("progress", R)),
                a.send(s),
                o.next({ type: Vt.Sent }),
                () => {
                  a.removeEventListener("error", h),
                    a.removeEventListener("abort", h),
                    a.removeEventListener("load", u),
                    a.removeEventListener("timeout", h),
                    e.reportProgress &&
                    (a.removeEventListener("progress", y),
                      s !== null && a.upload &&
                      a.upload.removeEventListener("progress", R)),
                    a.readyState !== a.DONE && a.abort();
                };
            })
          ),
        );
      }
      static ɵfac = function (t) {
        return new (t || n)(S(hn));
      };
      static ɵprov = f({ token: n, factory: n.ɵfac });
    }
    return n;
  })(),
  Ns = new p(""),
  Zd = "XSRF-TOKEN",
  Kd = new p("", { providedIn: "root", factory: () => Zd }),
  Qd = "X-XSRF-TOKEN",
  Jd = new p("", { providedIn: "root", factory: () => Qd }),
  _n = class {},
  eu = (() => {
    class n {
      doc;
      platform;
      cookieName;
      lastCookieString = "";
      lastToken = null;
      parseCount = 0;
      constructor(e, t, r) {
        this.doc = e, this.platform = t, this.cookieName = r;
      }
      getToken() {
        if (this.platform === "server") return null;
        let e = this.doc.cookie || "";
        return e !== this.lastCookieString &&
          (this.parseCount++,
            this.lastToken = mn(e, this.cookieName),
            this.lastCookieString = e),
          this.lastToken;
      }
      static ɵfac = function (t) {
        return new (t || n)(S(A), S(qe), S(Kd));
      };
      static ɵprov = f({ token: n, factory: n.ɵfac });
    }
    return n;
  })();
function tu(n, i) {
  let e = n.url.toLowerCase();
  if (
    !l(Ns) || n.method === "GET" || n.method === "HEAD" ||
    e.startsWith("http://") || e.startsWith("https://")
  ) return i(n);
  let t = l(_n).getToken(), r = l(Jd);
  return t != null && !n.headers.has(r) &&
    (n = n.clone({ headers: n.headers.set(r, t) })),
    i(n);
}
var Ls = function (n) {
  return n[n.Interceptors = 0] = "Interceptors",
    n[n.LegacyInterceptors = 1] = "LegacyInterceptors",
    n[n.CustomXsrfConfiguration = 2] = "CustomXsrfConfiguration",
    n[n.NoXsrfProtection = 3] = "NoXsrfProtection",
    n[n.JsonpSupport = 4] = "JsonpSupport",
    n[n.RequestsMadeViaParent = 5] = "RequestsMadeViaParent",
    n[n.Fetch = 6] = "Fetch",
    n;
}(Ls || {});
function iu(n, i) {
  return { ɵkind: n, ɵproviders: i };
}
function Qr(...n) {
  let i = [
    xi,
    Ss,
    Is,
    { provide: _i, useExisting: Is },
    { provide: gn, useFactory: () => l(zd, { optional: !0 }) ?? l(Ss) },
    { provide: Kr, useValue: tu, multi: !0 },
    { provide: Ns, useValue: !0 },
    { provide: _n, useClass: eu },
  ];
  for (let e of n) i.push(...e.ɵproviders);
  return ft(i);
}
var As = new p("");
function nu() {
  return iu(Ls.LegacyInterceptors, [{ provide: As, useFactory: Gd }, {
    provide: Kr,
    useExisting: As,
    multi: !0,
  }]);
}
var yn = (() => {
  class n {
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵmod = M({ type: n });
    static ɵinj = D({ providers: [Qr(nu())] });
  }
  return n;
})();
var eo = class extends vs {
    supportsDOMEvents = !0;
  },
  to = class n extends eo {
    static makeCurrent() {
      bs(new n());
    }
    onAndCancel(i, e, t, r) {
      return i.addEventListener(e, t, r), () => {
        i.removeEventListener(e, t, r);
      };
    }
    dispatchEvent(i, e) {
      i.dispatchEvent(e);
    }
    remove(i) {
      i.remove();
    }
    createElement(i, e) {
      return e = e || this.getDefaultDocument(), e.createElement(i);
    }
    createHtmlDocument() {
      return document.implementation.createHTMLDocument("fakeTitle");
    }
    getDefaultDocument() {
      return document;
    }
    isElementNode(i) {
      return i.nodeType === Node.ELEMENT_NODE;
    }
    isShadowRoot(i) {
      return i instanceof DocumentFragment;
    }
    getGlobalEventTarget(i, e) {
      return e === "window"
        ? window
        : e === "document"
        ? i
        : e === "body"
        ? i.body
        : null;
    }
    getBaseHref(i) {
      let e = ou();
      return e == null ? null : au(e);
    }
    resetBaseElement() {
      wi = null;
    }
    getUserAgent() {
      return window.navigator.userAgent;
    }
    getCookie(i) {
      return mn(document.cookie, i);
    }
  },
  wi = null;
function ou() {
  return wi = wi || document.querySelector("base"),
    wi ? wi.getAttribute("href") : null;
}
function au(n) {
  return new URL(n, document.baseURI).pathname;
}
var su = (() => {
    class n {
      build() {
        return new XMLHttpRequest();
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = f({ token: n, factory: n.ɵfac });
    }
    return n;
  })(),
  io = new p(""),
  Hs = (() => {
    class n {
      _zone;
      _plugins;
      _eventNameToPlugin = new Map();
      constructor(e, t) {
        this._zone = t,
          e.forEach((r) => {
            r.manager = this;
          }),
          this._plugins = e.slice().reverse();
      }
      addEventListener(e, t, r, o) {
        return this._findPluginFor(t).addEventListener(e, t, r, o);
      }
      getZone() {
        return this._zone;
      }
      _findPluginFor(e) {
        let t = this._eventNameToPlugin.get(e);
        if (t) return t;
        if (t = this._plugins.find((o) => o.supports(e)), !t) {
          throw new P(5101, !1);
        }
        return this._eventNameToPlugin.set(e, t), t;
      }
      static ɵfac = function (t) {
        return new (t || n)(S(io), S(x));
      };
      static ɵprov = f({ token: n, factory: n.ɵfac });
    }
    return n;
  })(),
  wn = class {
    _doc;
    constructor(i) {
      this._doc = i;
    }
    manager;
  },
  xn = "ng-app-id";
function js(n) {
  for (let i of n) i.remove();
}
function Bs(n, i) {
  let e = i.createElement("style");
  return e.textContent = n, e;
}
function cu(n, i, e, t) {
  let r = n.head?.querySelectorAll(`style[${xn}="${i}"],link[${xn}="${i}"]`);
  if (r) {
    for (let o of r) {
      o.removeAttribute(xn),
        o instanceof HTMLLinkElement
          ? t.set(o.href.slice(o.href.lastIndexOf("/") + 1), {
            usage: 0,
            elements: [o],
          })
          : o.textContent && e.set(o.textContent, { usage: 0, elements: [o] });
    }
  }
}
function no(n, i) {
  let e = i.createElement("link");
  return e.setAttribute("rel", "stylesheet"), e.setAttribute("href", n), e;
}
var $s = (() => {
    class n {
      doc;
      appId;
      nonce;
      inline = new Map();
      external = new Map();
      hosts = new Set();
      isServer;
      constructor(e, t, r, o = {}) {
        this.doc = e,
          this.appId = t,
          this.nonce = r,
          this.isServer = Gr(o),
          cu(e, t, this.inline, this.external),
          this.hosts.add(e.head);
      }
      addStyles(e, t) {
        for (let r of e) this.addUsage(r, this.inline, Bs);
        t?.forEach((r) => this.addUsage(r, this.external, no));
      }
      removeStyles(e, t) {
        for (let r of e) this.removeUsage(r, this.inline);
        t?.forEach((r) => this.removeUsage(r, this.external));
      }
      addUsage(e, t, r) {
        let o = t.get(e);
        o ? o.usage++ : t.set(e, {
          usage: 1,
          elements: [...this.hosts].map((a) =>
            this.addElement(a, r(e, this.doc))
          ),
        });
      }
      removeUsage(e, t) {
        let r = t.get(e);
        r && (r.usage--, r.usage <= 0 && (js(r.elements), t.delete(e)));
      }
      ngOnDestroy() {
        for (let [, { elements: e }] of [...this.inline, ...this.external]) {
          js(e);
        }
        this.hosts.clear();
      }
      addHost(e) {
        this.hosts.add(e);
        for (let [t, { elements: r }] of this.inline) {
          r.push(this.addElement(e, Bs(t, this.doc)));
        }
        for (let [t, { elements: r }] of this.external) {
          r.push(this.addElement(e, no(t, this.doc)));
        }
      }
      removeHost(e) {
        this.hosts.delete(e);
      }
      addElement(e, t) {
        return this.nonce && t.setAttribute("nonce", this.nonce),
          this.isServer && t.setAttribute(xn, this.appId),
          e.appendChild(t);
      }
      static ɵfac = function (t) {
        return new (t || n)(S(A), S(ci), S(li, 8), S(qe));
      };
      static ɵprov = f({ token: n, factory: n.ɵfac });
    }
    return n;
  })(),
  Jr = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: "http://www.w3.org/1999/xhtml",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/",
    math: "http://www.w3.org/1998/Math/MathML",
  },
  so = /%COMP%/g,
  Ws = "%COMP%",
  lu = `_nghost-${Ws}`,
  du = `_ngcontent-${Ws}`,
  uu = !0,
  mu = new p("", { providedIn: "root", factory: () => uu });
function hu(n) {
  return du.replace(so, n);
}
function fu(n) {
  return lu.replace(so, n);
}
function Gs(n, i) {
  return i.map((e) => e.replace(so, n));
}
var Cn = (() => {
    class n {
      eventManager;
      sharedStylesHost;
      appId;
      removeStylesOnCompDestroy;
      doc;
      platformId;
      ngZone;
      nonce;
      tracingService;
      rendererByCompId = new Map();
      defaultRenderer;
      platformIsServer;
      constructor(e, t, r, o, a, s, c, d = null, u = null) {
        this.eventManager = e,
          this.sharedStylesHost = t,
          this.appId = r,
          this.removeStylesOnCompDestroy = o,
          this.doc = a,
          this.platformId = s,
          this.ngZone = c,
          this.nonce = d,
          this.tracingService = u,
          this.platformIsServer = Gr(s),
          this.defaultRenderer = new Ci(
            e,
            a,
            c,
            this.platformIsServer,
            this.tracingService,
          );
      }
      createRenderer(e, t) {
        if (!e || !t) return this.defaultRenderer;
        this.platformIsServer && t.encapsulation === ui.ShadowDom &&
          (t = V(m({}, t), { encapsulation: ui.Emulated }));
        let r = this.getOrCreateRenderer(e, t);
        return r instanceof kn
          ? r.applyToHost(e)
          : r instanceof ki && r.applyStyles(),
          r;
      }
      getOrCreateRenderer(e, t) {
        let r = this.rendererByCompId, o = r.get(t.id);
        if (!o) {
          let a = this.doc,
            s = this.ngZone,
            c = this.eventManager,
            d = this.sharedStylesHost,
            u = this.removeStylesOnCompDestroy,
            h = this.platformIsServer;
          switch (t.encapsulation) {
            case ui.Emulated:
              o = new kn(c, d, t, this.appId, u, a, s, h, this.tracingService);
              break;
            case ui.ShadowDom:
              return new ro(
                c,
                d,
                e,
                t,
                a,
                s,
                this.nonce,
                h,
                this.tracingService,
              );
            default:
              o = new ki(c, d, t, u, a, s, h, this.tracingService);
              break;
          }
          r.set(t.id, o);
        }
        return o;
      }
      ngOnDestroy() {
        this.rendererByCompId.clear();
      }
      componentReplaced(e) {
        this.rendererByCompId.delete(e);
      }
      static ɵfac = function (t) {
        return new (t || n)(
          S(Hs),
          S($s),
          S(ci),
          S(mu),
          S(A),
          S(qe),
          S(x),
          S(li),
          S(Qa, 8),
        );
      };
      static ɵprov = f({ token: n, factory: n.ɵfac });
    }
    return n;
  })(),
  Ci = class {
    eventManager;
    doc;
    ngZone;
    platformIsServer;
    tracingService;
    data = Object.create(null);
    throwOnSyntheticProps = !0;
    constructor(i, e, t, r, o) {
      this.eventManager = i,
        this.doc = e,
        this.ngZone = t,
        this.platformIsServer = r,
        this.tracingService = o;
    }
    destroy() {}
    destroyNode = null;
    createElement(i, e) {
      return e
        ? this.doc.createElementNS(Jr[e] || e, i)
        : this.doc.createElement(i);
    }
    createComment(i) {
      return this.doc.createComment(i);
    }
    createText(i) {
      return this.doc.createTextNode(i);
    }
    appendChild(i, e) {
      (zs(i) ? i.content : i).appendChild(e);
    }
    insertBefore(i, e, t) {
      i && (zs(i) ? i.content : i).insertBefore(e, t);
    }
    removeChild(i, e) {
      e.remove();
    }
    selectRootElement(i, e) {
      let t = typeof i == "string" ? this.doc.querySelector(i) : i;
      if (!t) throw new P(-5104, !1);
      return e || (t.textContent = ""), t;
    }
    parentNode(i) {
      return i.parentNode;
    }
    nextSibling(i) {
      return i.nextSibling;
    }
    setAttribute(i, e, t, r) {
      if (r) {
        e = r + ":" + e;
        let o = Jr[r];
        o ? i.setAttributeNS(o, e, t) : i.setAttribute(e, t);
      } else i.setAttribute(e, t);
    }
    removeAttribute(i, e, t) {
      if (t) {
        let r = Jr[t];
        r ? i.removeAttributeNS(r, e) : i.removeAttribute(`${t}:${e}`);
      } else i.removeAttribute(e);
    }
    addClass(i, e) {
      i.classList.add(e);
    }
    removeClass(i, e) {
      i.classList.remove(e);
    }
    setStyle(i, e, t, r) {
      r & (mi.DashCase | mi.Important)
        ? i.style.setProperty(e, t, r & mi.Important ? "important" : "")
        : i.style[e] = t;
    }
    removeStyle(i, e, t) {
      t & mi.DashCase ? i.style.removeProperty(e) : i.style[e] = "";
    }
    setProperty(i, e, t) {
      i != null && (i[e] = t);
    }
    setValue(i, e) {
      i.nodeValue = e;
    }
    listen(i, e, t, r) {
      if (
        typeof i == "string" && (i = Nt().getGlobalEventTarget(this.doc, i), !i)
      ) throw new Error(`Unsupported event target ${i} for event ${e}`);
      let o = this.decoratePreventDefault(t);
      return this.tracingService !== null &&
        this.tracingService.wrapEventListener &&
        (o = this.tracingService.wrapEventListener(i, e, o)),
        this.eventManager.addEventListener(i, e, o, r);
    }
    decoratePreventDefault(i) {
      return (e) => {
        if (e === "__ngUnwrap__") return i;
        (this.platformIsServer ? this.ngZone.runGuarded(() => i(e)) : i(e)) ===
            !1 && e.preventDefault();
      };
    }
  };
function zs(n) {
  return n.tagName === "TEMPLATE" && n.content !== void 0;
}
var ro = class extends Ci {
    sharedStylesHost;
    hostEl;
    shadowRoot;
    constructor(i, e, t, r, o, a, s, c, d) {
      super(i, o, a, c, d),
        this.sharedStylesHost = e,
        this.hostEl = t,
        this.shadowRoot = t.attachShadow({ mode: "open" }),
        this.sharedStylesHost.addHost(this.shadowRoot);
      let u = Gs(r.id, r.styles);
      for (let v of u) {
        let y = document.createElement("style");
        s && y.setAttribute("nonce", s),
          y.textContent = v,
          this.shadowRoot.appendChild(y);
      }
      let h = r.getExternalStyles?.();
      if (h) {
        for (let v of h) {
          let y = no(v, o);
          s && y.setAttribute("nonce", s), this.shadowRoot.appendChild(y);
        }
      }
    }
    nodeOrShadowRoot(i) {
      return i === this.hostEl ? this.shadowRoot : i;
    }
    appendChild(i, e) {
      return super.appendChild(this.nodeOrShadowRoot(i), e);
    }
    insertBefore(i, e, t) {
      return super.insertBefore(this.nodeOrShadowRoot(i), e, t);
    }
    removeChild(i, e) {
      return super.removeChild(null, e);
    }
    parentNode(i) {
      return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)));
    }
    destroy() {
      this.sharedStylesHost.removeHost(this.shadowRoot);
    }
  },
  ki = class extends Ci {
    sharedStylesHost;
    removeStylesOnCompDestroy;
    styles;
    styleUrls;
    constructor(i, e, t, r, o, a, s, c, d) {
      super(i, o, a, s, c),
        this.sharedStylesHost = e,
        this.removeStylesOnCompDestroy = r,
        this.styles = d ? Gs(d, t.styles) : t.styles,
        this.styleUrls = t.getExternalStyles?.(d);
    }
    applyStyles() {
      this.sharedStylesHost.addStyles(this.styles, this.styleUrls);
    }
    destroy() {
      this.removeStylesOnCompDestroy &&
        this.sharedStylesHost.removeStyles(this.styles, this.styleUrls);
    }
  },
  kn = class extends ki {
    contentAttr;
    hostAttr;
    constructor(i, e, t, r, o, a, s, c, d) {
      let u = r + "-" + t.id;
      super(i, e, t, o, a, s, c, d, u),
        this.contentAttr = hu(u),
        this.hostAttr = fu(u);
    }
    applyToHost(i) {
      this.applyStyles(), this.setAttribute(i, this.hostAttr, "");
    }
    createElement(i, e) {
      let t = super.createElement(i, e);
      return super.setAttribute(t, this.contentAttr, ""), t;
    }
  },
  pu = (() => {
    class n extends wn {
      constructor(e) {
        super(e);
      }
      supports(e) {
        return !0;
      }
      addEventListener(e, t, r, o) {
        return e.addEventListener(t, r, o),
          () => this.removeEventListener(e, t, r, o);
      }
      removeEventListener(e, t, r, o) {
        return e.removeEventListener(t, r, o);
      }
      static ɵfac = function (t) {
        return new (t || n)(S(A));
      };
      static ɵprov = f({ token: n, factory: n.ɵfac });
    }
    return n;
  })(),
  Us = ["alt", "control", "meta", "shift"],
  gu = {
    "\b": "Backspace",
    "	": "Tab",
    "\x7F": "Delete",
    "\x1B": "Escape",
    Del: "Delete",
    Esc: "Escape",
    Left: "ArrowLeft",
    Right: "ArrowRight",
    Up: "ArrowUp",
    Down: "ArrowDown",
    Menu: "ContextMenu",
    Scroll: "ScrollLock",
    Win: "OS",
  },
  bu = {
    alt: (n) => n.altKey,
    control: (n) => n.ctrlKey,
    meta: (n) => n.metaKey,
    shift: (n) => n.shiftKey,
  },
  vu = (() => {
    class n extends wn {
      constructor(e) {
        super(e);
      }
      supports(e) {
        return n.parseEventName(e) != null;
      }
      addEventListener(e, t, r, o) {
        let a = n.parseEventName(t),
          s = n.eventCallback(a.fullKey, r, this.manager.getZone());
        return this.manager.getZone().runOutsideAngular(() =>
          Nt().onAndCancel(e, a.domEventName, s, o)
        );
      }
      static parseEventName(e) {
        let t = e.toLowerCase().split("."), r = t.shift();
        if (t.length === 0 || !(r === "keydown" || r === "keyup")) return null;
        let o = n._normalizeKey(t.pop()), a = "", s = t.indexOf("code");
        if (
          s > -1 && (t.splice(s, 1), a = "code."),
            Us.forEach((d) => {
              let u = t.indexOf(d);
              u > -1 && (t.splice(u, 1), a += d + ".");
            }),
            a += o,
            t.length != 0 || o.length === 0
        ) return null;
        let c = {};
        return c.domEventName = r, c.fullKey = a, c;
      }
      static matchEventFullKeyCode(e, t) {
        let r = gu[e.key] || e.key, o = "";
        return t.indexOf("code.") > -1 && (r = e.code, o = "code."),
          r == null || !r
            ? !1
            : (r = r.toLowerCase(),
              r === " " ? r = "space" : r === "." && (r = "dot"),
              Us.forEach((a) => {
                if (a !== r) {
                  let s = bu[a];
                  s(e) && (o += a + ".");
                }
              }),
              o += r,
              o === t);
      }
      static eventCallback(e, t, r) {
        return (o) => {
          n.matchEventFullKeyCode(o, e) && r.runGuarded(() => t(o));
        };
      }
      static _normalizeKey(e) {
        return e === "esc" ? "escape" : e;
      }
      static ɵfac = function (t) {
        return new (t || n)(S(A));
      };
      static ɵprov = f({ token: n, factory: n.ɵfac });
    }
    return n;
  })();
function qs(n, i) {
  return gs(m({ rootComponent: n }, _u(i)));
}
function _u(n) {
  return {
    appProviders: [...ku, ...n?.providers ?? []],
    platformProviders: Cu,
  };
}
function yu() {
  to.makeCurrent();
}
function xu() {
  return new pt();
}
function wu() {
  return Za(document), document;
}
var Cu = [{ provide: qe, useValue: xs }, {
  provide: Ka,
  useValue: yu,
  multi: !0,
}, { provide: A, useFactory: wu, deps: [] }];
var ku = [
  { provide: Wa, useValue: "root" },
  { provide: pt, useFactory: xu, deps: [] },
  { provide: io, useClass: pu, multi: !0, deps: [A, x, qe] },
  { provide: io, useClass: vu, multi: !0, deps: [A] },
  Cn,
  $s,
  Hs,
  { provide: $e, useExisting: Cn },
  { provide: hn, useClass: su, deps: [] },
  [],
];
var Ys = (() => {
  class n {
    _doc;
    constructor(e) {
      this._doc = e;
    }
    getTitle() {
      return this._doc.title;
    }
    setTitle(e) {
      this._doc.title = e || "";
    }
    static ɵfac = function (t) {
      return new (t || n)(S(A));
    };
    static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
  }
  return n;
})();
var co = (() => {
    class n {
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = f({
        token: n,
        factory: function (t) {
          let r = null;
          return t ? r = new (t || n)() : r = S(Eu), r;
        },
        providedIn: "root",
      });
    }
    return n;
  })(),
  Eu = (() => {
    class n extends co {
      _doc;
      constructor(e) {
        super(), this._doc = e;
      }
      sanitize(e, t) {
        if (t == null) return null;
        switch (e) {
          case we.NONE:
            return t;
          case we.HTML:
            return Ot(t, "HTML") ? Tt(t) : os(this._doc, String(t)).toString();
          case we.STYLE:
            return Ot(t, "Style") ? Tt(t) : t;
          case we.SCRIPT:
            if (Ot(t, "Script")) return Tt(t);
            throw new P(5200, !1);
          case we.URL:
            return Ot(t, "URL") ? Tt(t) : rs(String(t));
          case we.RESOURCE_URL:
            if (Ot(t, "ResourceURL")) return Tt(t);
            throw new P(5201, !1);
          default:
            throw new P(5202, !1);
        }
      }
      bypassSecurityTrustHtml(e) {
        return Ja(e);
      }
      bypassSecurityTrustStyle(e) {
        return es(e);
      }
      bypassSecurityTrustScript(e) {
        return ts(e);
      }
      bypassSecurityTrustUrl(e) {
        return is(e);
      }
      bypassSecurityTrustResourceUrl(e) {
        return ns(e);
      }
      static ɵfac = function (t) {
        return new (t || n)(S(A));
      };
      static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
    return n;
  })();
var k = "primary",
  Bi = Symbol("RouteTitle"),
  fo = class {
    params;
    constructor(i) {
      this.params = i || {};
    }
    has(i) {
      return Object.prototype.hasOwnProperty.call(this.params, i);
    }
    get(i) {
      if (this.has(i)) {
        let e = this.params[i];
        return Array.isArray(e) ? e[0] : e;
      }
      return null;
    }
    getAll(i) {
      if (this.has(i)) {
        let e = this.params[i];
        return Array.isArray(e) ? e : [e];
      }
      return [];
    }
    get keys() {
      return Object.keys(this.params);
    }
  };
function $t(n) {
  return new fo(n);
}
function Mu(n, i, e) {
  let t = e.path.split("/");
  if (
    t.length > n.length ||
    e.pathMatch === "full" && (i.hasChildren() || t.length < n.length)
  ) return null;
  let r = {};
  for (let o = 0; o < t.length; o++) {
    let a = t[o], s = n[o];
    if (a[0] === ":") r[a.substring(1)] = s;
    else if (a !== s.path) return null;
  }
  return { consumed: n.slice(0, t.length), posParams: r };
}
function Iu(n, i) {
  if (n.length !== i.length) return !1;
  for (let e = 0; e < n.length; ++e) if (!We(n[e], i[e])) return !1;
  return !0;
}
function We(n, i) {
  let e = n ? po(n) : void 0, t = i ? po(i) : void 0;
  if (!e || !t || e.length != t.length) return !1;
  let r;
  for (let o = 0; o < e.length; o++) if (r = e[o], !nc(n[r], i[r])) return !1;
  return !0;
}
function po(n) {
  return [...Object.keys(n), ...Object.getOwnPropertySymbols(n)];
}
function nc(n, i) {
  if (Array.isArray(n) && Array.isArray(i)) {
    if (n.length !== i.length) return !1;
    let e = [...n].sort(), t = [...i].sort();
    return e.every((r, o) => t[o] === r);
  } else return n === i;
}
function rc(n) {
  return n.length > 0 ? n[n.length - 1] : null;
}
function at(n) {
  return nn(n) ? n : dn(n) ? fe(Promise.resolve(n)) : g(n);
}
var Su = { exact: ac, subset: sc },
  oc = { exact: Au, subset: Ru, ignored: () => !0 };
function Zs(n, i, e) {
  return Su[e.paths](n.root, i.root, e.matrixParams) &&
    oc[e.queryParams](n.queryParams, i.queryParams) &&
    !(e.fragment === "exact" && n.fragment !== i.fragment);
}
function Au(n, i) {
  return We(n, i);
}
function ac(n, i, e) {
  if (
    !Ct(n.segments, i.segments) || !Mn(n.segments, i.segments, e) ||
    n.numberOfChildren !== i.numberOfChildren
  ) return !1;
  for (let t in i.children) {
    if (!n.children[t] || !ac(n.children[t], i.children[t], e)) return !1;
  }
  return !0;
}
function Ru(n, i) {
  return Object.keys(i).length <= Object.keys(n).length &&
    Object.keys(i).every((e) => nc(n[e], i[e]));
}
function sc(n, i, e) {
  return cc(n, i, i.segments, e);
}
function cc(n, i, e, t) {
  if (n.segments.length > e.length) {
    let r = n.segments.slice(0, e.length);
    return !(!Ct(r, e) || i.hasChildren() || !Mn(r, e, t));
  } else if (n.segments.length === e.length) {
    if (!Ct(n.segments, e) || !Mn(n.segments, e, t)) return !1;
    for (let r in i.children) {
      if (!n.children[r] || !sc(n.children[r], i.children[r], t)) return !1;
    }
    return !0;
  } else {
    let r = e.slice(0, n.segments.length), o = e.slice(n.segments.length);
    return !Ct(n.segments, r) || !Mn(n.segments, r, t) || !n.children[k]
      ? !1
      : cc(n.children[k], i, o, t);
  }
}
function Mn(n, i, e) {
  return i.every((t, r) => oc[e](n[r].parameters, t.parameters));
}
var Ze = class {
    root;
    queryParams;
    fragment;
    _queryParamMap;
    constructor(i = new L([], {}), e = {}, t = null) {
      this.root = i, this.queryParams = e, this.fragment = t;
    }
    get queryParamMap() {
      return this._queryParamMap ??= $t(this.queryParams), this._queryParamMap;
    }
    toString() {
      return Fu.serialize(this);
    }
  },
  L = class {
    segments;
    children;
    parent = null;
    constructor(i, e) {
      this.segments = i,
        this.children = e,
        Object.values(e).forEach((t) => t.parent = this);
    }
    hasChildren() {
      return this.numberOfChildren > 0;
    }
    get numberOfChildren() {
      return Object.keys(this.children).length;
    }
    toString() {
      return In(this);
    }
  },
  wt = class {
    path;
    parameters;
    _parameterMap;
    constructor(i, e) {
      this.path = i, this.parameters = e;
    }
    get parameterMap() {
      return this._parameterMap ??= $t(this.parameters), this._parameterMap;
    }
    toString() {
      return dc(this);
    }
  };
function Tu(n, i) {
  return Ct(n, i) && n.every((e, t) => We(e.parameters, i[t].parameters));
}
function Ct(n, i) {
  return n.length !== i.length ? !1 : n.every((e, t) => e.path === i[t].path);
}
function Ou(n, i) {
  let e = [];
  return Object.entries(n.children).forEach(([t, r]) => {
    t === k && (e = e.concat(i(r, t)));
  }),
    Object.entries(n.children).forEach(([t, r]) => {
      t !== k && (e = e.concat(i(r, t)));
    }),
    e;
}
var zo = (() => {
    class n {
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = f({
        token: n,
        factory: () => new Ai(),
        providedIn: "root",
      });
    }
    return n;
  })(),
  Ai = class {
    parse(i) {
      let e = new bo(i);
      return new Ze(
        e.parseRootSegment(),
        e.parseQueryParams(),
        e.parseFragment(),
      );
    }
    serialize(i) {
      let e = `/${Ei(i.root, !0)}`,
        t = Lu(i.queryParams),
        r = typeof i.fragment == "string" ? `#${Pu(i.fragment)}` : "";
      return `${e}${t}${r}`;
    }
  },
  Fu = new Ai();
function In(n) {
  return n.segments.map((i) => dc(i)).join("/");
}
function Ei(n, i) {
  if (!n.hasChildren()) return In(n);
  if (i) {
    let e = n.children[k] ? Ei(n.children[k], !1) : "", t = [];
    return Object.entries(n.children).forEach(([r, o]) => {
      r !== k && t.push(`${r}:${Ei(o, !1)}`);
    }),
      t.length > 0 ? `${e}(${t.join("//")})` : e;
  } else {
    let e = Ou(
      n,
      (t, r) => r === k ? [Ei(n.children[k], !1)] : [`${r}:${Ei(t, !1)}`],
    );
    return Object.keys(n.children).length === 1 && n.children[k] != null
      ? `${In(n)}/${e[0]}`
      : `${In(n)}/(${e.join("//")})`;
  }
}
function lc(n) {
  return encodeURIComponent(n).replace(/%40/g, "@").replace(/%3A/gi, ":")
    .replace(/%24/g, "$").replace(/%2C/gi, ",");
}
function En(n) {
  return lc(n).replace(/%3B/gi, ";");
}
function Pu(n) {
  return encodeURI(n);
}
function go(n) {
  return lc(n).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(
    /%26/gi,
    "&",
  );
}
function Sn(n) {
  return decodeURIComponent(n);
}
function Ks(n) {
  return Sn(n.replace(/\+/g, "%20"));
}
function dc(n) {
  return `${go(n.path)}${Nu(n.parameters)}`;
}
function Nu(n) {
  return Object.entries(n).map(([i, e]) => `;${go(i)}=${go(e)}`).join("");
}
function Lu(n) {
  let i = Object.entries(n).map(([e, t]) =>
    Array.isArray(t)
      ? t.map((r) => `${En(e)}=${En(r)}`).join("&")
      : `${En(e)}=${En(t)}`
  ).filter((e) => e);
  return i.length ? `?${i.join("&")}` : "";
}
var Vu = /^[^\/()?;#]+/;
function lo(n) {
  let i = n.match(Vu);
  return i ? i[0] : "";
}
var ju = /^[^\/()?;=#]+/;
function Bu(n) {
  let i = n.match(ju);
  return i ? i[0] : "";
}
var zu = /^[^=?&#]+/;
function Uu(n) {
  let i = n.match(zu);
  return i ? i[0] : "";
}
var Hu = /^[^&#]+/;
function $u(n) {
  let i = n.match(Hu);
  return i ? i[0] : "";
}
var bo = class {
  url;
  remaining;
  constructor(i) {
    this.url = i, this.remaining = i;
  }
  parseRootSegment() {
    return this.consumeOptional("/"),
      this.remaining === "" || this.peekStartsWith("?") ||
        this.peekStartsWith("#")
        ? new L([], {})
        : new L([], this.parseChildren());
  }
  parseQueryParams() {
    let i = {};
    if (this.consumeOptional("?")) {
      do this.parseQueryParam(i); while (this.consumeOptional("&"));
    }
    return i;
  }
  parseFragment() {
    return this.consumeOptional("#")
      ? decodeURIComponent(this.remaining)
      : null;
  }
  parseChildren() {
    if (this.remaining === "") return {};
    this.consumeOptional("/");
    let i = [];
    for (
      this.peekStartsWith("(") || i.push(this.parseSegment());
      this.peekStartsWith("/") && !this.peekStartsWith("//") &&
      !this.peekStartsWith("/(");
    ) this.capture("/"), i.push(this.parseSegment());
    let e = {};
    this.peekStartsWith("/(") && (this.capture("/"), e = this.parseParens(!0));
    let t = {};
    return this.peekStartsWith("(") && (t = this.parseParens(!1)),
      (i.length > 0 || Object.keys(e).length > 0) && (t[k] = new L(i, e)),
      t;
  }
  parseSegment() {
    let i = lo(this.remaining);
    if (i === "" && this.peekStartsWith(";")) throw new P(4009, !1);
    return this.capture(i), new wt(Sn(i), this.parseMatrixParams());
  }
  parseMatrixParams() {
    let i = {};
    for (; this.consumeOptional(";");) this.parseParam(i);
    return i;
  }
  parseParam(i) {
    let e = Bu(this.remaining);
    if (!e) return;
    this.capture(e);
    let t = "";
    if (this.consumeOptional("=")) {
      let r = lo(this.remaining);
      r && (t = r, this.capture(t));
    }
    i[Sn(e)] = Sn(t);
  }
  parseQueryParam(i) {
    let e = Uu(this.remaining);
    if (!e) return;
    this.capture(e);
    let t = "";
    if (this.consumeOptional("=")) {
      let a = $u(this.remaining);
      a && (t = a, this.capture(t));
    }
    let r = Ks(e), o = Ks(t);
    if (i.hasOwnProperty(r)) {
      let a = i[r];
      Array.isArray(a) || (a = [a], i[r] = a), a.push(o);
    } else i[r] = o;
  }
  parseParens(i) {
    let e = {};
    for (
      this.capture("(");
      !this.consumeOptional(")") && this.remaining.length > 0;
    ) {
      let t = lo(this.remaining), r = this.remaining[t.length];
      if (r !== "/" && r !== ")" && r !== ";") throw new P(4010, !1);
      let o;
      t.indexOf(":") > -1
        ? (o = t.slice(0, t.indexOf(":")), this.capture(o), this.capture(":"))
        : i && (o = k);
      let a = this.parseChildren();
      e[o] = Object.keys(a).length === 1 ? a[k] : new L([], a),
        this.consumeOptional("//");
    }
    return e;
  }
  peekStartsWith(i) {
    return this.remaining.startsWith(i);
  }
  consumeOptional(i) {
    return this.peekStartsWith(i)
      ? (this.remaining = this.remaining.substring(i.length), !0)
      : !1;
  }
  capture(i) {
    if (!this.consumeOptional(i)) throw new P(4011, !1);
  }
};
function uc(n) {
  return n.segments.length > 0 ? new L([], { [k]: n }) : n;
}
function mc(n) {
  let i = {};
  for (let [t, r] of Object.entries(n.children)) {
    let o = mc(r);
    if (t === k && o.segments.length === 0 && o.hasChildren()) {
      for (let [a, s] of Object.entries(o.children)) {
        i[a] = s;
      }
    } else (o.segments.length > 0 || o.hasChildren()) && (i[t] = o);
  }
  let e = new L(n.segments, i);
  return Wu(e);
}
function Wu(n) {
  if (n.numberOfChildren === 1 && n.children[k]) {
    let i = n.children[k];
    return new L(n.segments.concat(i.segments), i.children);
  }
  return n;
}
function Ri(n) {
  return n instanceof Ze;
}
function Gu(n, i, e = null, t = null) {
  let r = hc(n);
  return fc(r, i, e, t);
}
function hc(n) {
  let i;
  function e(o) {
    let a = {};
    for (let c of o.children) {
      let d = e(c);
      a[c.outlet] = d;
    }
    let s = new L(o.url, a);
    return o === n && (i = s), s;
  }
  let t = e(n.root), r = uc(t);
  return i ?? r;
}
function fc(n, i, e, t) {
  let r = n;
  for (; r.parent;) r = r.parent;
  if (i.length === 0) return uo(r, r, r, e, t);
  let o = qu(i);
  if (o.toRoot()) return uo(r, r, new L([], {}), e, t);
  let a = Yu(o, r, n),
    s = a.processChildren
      ? Mi(a.segmentGroup, a.index, o.commands)
      : gc(a.segmentGroup, a.index, o.commands);
  return uo(r, a.segmentGroup, s, e, t);
}
function An(n) {
  return typeof n == "object" && n != null && !n.outlets && !n.segmentPath;
}
function Ti(n) {
  return typeof n == "object" && n != null && n.outlets;
}
function uo(n, i, e, t, r) {
  let o = {};
  t && Object.entries(t).forEach(([c, d]) => {
    o[c] = Array.isArray(d) ? d.map((u) => `${u}`) : `${d}`;
  });
  let a;
  n === i ? a = e : a = pc(n, i, e);
  let s = uc(mc(a));
  return new Ze(s, o, r);
}
function pc(n, i, e) {
  let t = {};
  return Object.entries(n.children).forEach(([r, o]) => {
    o === i ? t[r] = e : t[r] = pc(o, i, e);
  }),
    new L(n.segments, t);
}
var Rn = class {
  isAbsolute;
  numberOfDoubleDots;
  commands;
  constructor(i, e, t) {
    if (
      this.isAbsolute = i,
        this.numberOfDoubleDots = e,
        this.commands = t,
        i && t.length > 0 && An(t[0])
    ) throw new P(4003, !1);
    let r = t.find(Ti);
    if (r && r !== rc(t)) throw new P(4004, !1);
  }
  toRoot() {
    return this.isAbsolute && this.commands.length === 1 &&
      this.commands[0] == "/";
  }
};
function qu(n) {
  if (typeof n[0] == "string" && n.length === 1 && n[0] === "/") {
    return new Rn(!0, 0, n);
  }
  let i = 0,
    e = !1,
    t = n.reduce((r, o, a) => {
      if (typeof o == "object" && o != null) {
        if (o.outlets) {
          let s = {};
          return Object.entries(o.outlets).forEach(([c, d]) => {
            s[c] = typeof d == "string" ? d.split("/") : d;
          }),
            [...r, { outlets: s }];
        }
        if (o.segmentPath) return [...r, o.segmentPath];
      }
      return typeof o != "string"
        ? [...r, o]
        : a === 0
        ? (o.split("/").forEach((s, c) => {
          c == 0 && s === "." || (c == 0 && s === ""
            ? e = !0
            : s === ".."
            ? i++
            : s != "" && r.push(s));
        }),
          r)
        : [...r, o];
    }, []);
  return new Rn(e, i, t);
}
var zt = class {
  segmentGroup;
  processChildren;
  index;
  constructor(i, e, t) {
    this.segmentGroup = i, this.processChildren = e, this.index = t;
  }
};
function Yu(n, i, e) {
  if (n.isAbsolute) return new zt(i, !0, 0);
  if (!e) return new zt(i, !1, NaN);
  if (e.parent === null) return new zt(e, !0, 0);
  let t = An(n.commands[0]) ? 0 : 1, r = e.segments.length - 1 + t;
  return Xu(e, r, n.numberOfDoubleDots);
}
function Xu(n, i, e) {
  let t = n, r = i, o = e;
  for (; o > r;) {
    if (o -= r, t = t.parent, !t) throw new P(4005, !1);
    r = t.segments.length;
  }
  return new zt(t, !1, r - o);
}
function Zu(n) {
  return Ti(n[0]) ? n[0].outlets : { [k]: n };
}
function gc(n, i, e) {
  if (n ??= new L([], {}), n.segments.length === 0 && n.hasChildren()) {
    return Mi(n, i, e);
  }
  let t = Ku(n, i, e), r = e.slice(t.commandIndex);
  if (t.match && t.pathIndex < n.segments.length) {
    let o = new L(n.segments.slice(0, t.pathIndex), {});
    return o.children[k] = new L(n.segments.slice(t.pathIndex), n.children),
      Mi(o, 0, r);
  } else {return t.match && r.length === 0
      ? new L(n.segments, {})
      : t.match && !n.hasChildren()
      ? vo(n, i, e)
      : t.match
      ? Mi(n, 0, r)
      : vo(n, i, e);}
}
function Mi(n, i, e) {
  if (e.length === 0) return new L(n.segments, {});
  {
    let t = Zu(e), r = {};
    if (
      Object.keys(t).some((o) => o !== k) && n.children[k] &&
      n.numberOfChildren === 1 && n.children[k].segments.length === 0
    ) {
      let o = Mi(n.children[k], i, e);
      return new L(n.segments, o.children);
    }
    return Object.entries(t).forEach(([o, a]) => {
      typeof a == "string" && (a = [a]),
        a !== null && (r[o] = gc(n.children[o], i, a));
    }),
      Object.entries(n.children).forEach(([o, a]) => {
        t[o] === void 0 && (r[o] = a);
      }),
      new L(n.segments, r);
  }
}
function Ku(n, i, e) {
  let t = 0, r = i, o = { match: !1, pathIndex: 0, commandIndex: 0 };
  for (; r < n.segments.length;) {
    if (t >= e.length) return o;
    let a = n.segments[r], s = e[t];
    if (Ti(s)) break;
    let c = `${s}`, d = t < e.length - 1 ? e[t + 1] : null;
    if (r > 0 && c === void 0) break;
    if (c && d && typeof d == "object" && d.outlets === void 0) {
      if (!Js(c, d, a)) return o;
      t += 2;
    } else {
      if (!Js(c, {}, a)) return o;
      t++;
    }
    r++;
  }
  return { match: !0, pathIndex: r, commandIndex: t };
}
function vo(n, i, e) {
  let t = n.segments.slice(0, i), r = 0;
  for (; r < e.length;) {
    let o = e[r];
    if (Ti(o)) {
      let c = Qu(o.outlets);
      return new L(t, c);
    }
    if (r === 0 && An(e[0])) {
      let c = n.segments[i];
      t.push(new wt(c.path, Qs(e[0]))), r++;
      continue;
    }
    let a = Ti(o) ? o.outlets[k] : `${o}`,
      s = r < e.length - 1 ? e[r + 1] : null;
    a && s && An(s)
      ? (t.push(new wt(a, Qs(s))), r += 2)
      : (t.push(new wt(a, {})), r++);
  }
  return new L(t, {});
}
function Qu(n) {
  let i = {};
  return Object.entries(n).forEach(([e, t]) => {
    typeof t == "string" && (t = [t]),
      t !== null && (i[e] = vo(new L([], {}), 0, t));
  }),
    i;
}
function Qs(n) {
  let i = {};
  return Object.entries(n).forEach(([e, t]) => i[e] = `${t}`), i;
}
function Js(n, i, e) {
  return n == e.path && We(i, e.parameters);
}
var Ii = "imperative",
  ae = function (n) {
    return n[n.NavigationStart = 0] = "NavigationStart",
      n[n.NavigationEnd = 1] = "NavigationEnd",
      n[n.NavigationCancel = 2] = "NavigationCancel",
      n[n.NavigationError = 3] = "NavigationError",
      n[n.RoutesRecognized = 4] = "RoutesRecognized",
      n[n.ResolveStart = 5] = "ResolveStart",
      n[n.ResolveEnd = 6] = "ResolveEnd",
      n[n.GuardsCheckStart = 7] = "GuardsCheckStart",
      n[n.GuardsCheckEnd = 8] = "GuardsCheckEnd",
      n[n.RouteConfigLoadStart = 9] = "RouteConfigLoadStart",
      n[n.RouteConfigLoadEnd = 10] = "RouteConfigLoadEnd",
      n[n.ChildActivationStart = 11] = "ChildActivationStart",
      n[n.ChildActivationEnd = 12] = "ChildActivationEnd",
      n[n.ActivationStart = 13] = "ActivationStart",
      n[n.ActivationEnd = 14] = "ActivationEnd",
      n[n.Scroll = 15] = "Scroll",
      n[n.NavigationSkipped = 16] = "NavigationSkipped",
      n;
  }(ae || {}),
  Se = class {
    id;
    url;
    constructor(i, e) {
      this.id = i, this.url = e;
    }
  },
  Oi = class extends Se {
    type = ae.NavigationStart;
    navigationTrigger;
    restoredState;
    constructor(i, e, t = "imperative", r = null) {
      super(i, e), this.navigationTrigger = t, this.restoredState = r;
    }
    toString() {
      return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
    }
  },
  kt = class extends Se {
    urlAfterRedirects;
    type = ae.NavigationEnd;
    constructor(i, e, t) {
      super(i, e), this.urlAfterRedirects = t;
    }
    toString() {
      return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
    }
  },
  Ee = function (n) {
    return n[n.Redirect = 0] = "Redirect",
      n[n.SupersededByNewNavigation = 1] = "SupersededByNewNavigation",
      n[n.NoDataFromResolver = 2] = "NoDataFromResolver",
      n[n.GuardRejected = 3] = "GuardRejected",
      n;
  }(Ee || {}),
  _o = function (n) {
    return n[n.IgnoredSameUrlNavigation = 0] = "IgnoredSameUrlNavigation",
      n[n.IgnoredByUrlHandlingStrategy = 1] = "IgnoredByUrlHandlingStrategy",
      n;
  }(_o || {}),
  Xe = class extends Se {
    reason;
    code;
    type = ae.NavigationCancel;
    constructor(i, e, t, r) {
      super(i, e), this.reason = t, this.code = r;
    }
    toString() {
      return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
    }
  },
  Et = class extends Se {
    reason;
    code;
    type = ae.NavigationSkipped;
    constructor(i, e, t, r) {
      super(i, e), this.reason = t, this.code = r;
    }
  },
  Fi = class extends Se {
    error;
    target;
    type = ae.NavigationError;
    constructor(i, e, t, r) {
      super(i, e), this.error = t, this.target = r;
    }
    toString() {
      return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
    }
  },
  Tn = class extends Se {
    urlAfterRedirects;
    state;
    type = ae.RoutesRecognized;
    constructor(i, e, t, r) {
      super(i, e), this.urlAfterRedirects = t, this.state = r;
    }
    toString() {
      return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  yo = class extends Se {
    urlAfterRedirects;
    state;
    type = ae.GuardsCheckStart;
    constructor(i, e, t, r) {
      super(i, e), this.urlAfterRedirects = t, this.state = r;
    }
    toString() {
      return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  xo = class extends Se {
    urlAfterRedirects;
    state;
    shouldActivate;
    type = ae.GuardsCheckEnd;
    constructor(i, e, t, r, o) {
      super(i, e),
        this.urlAfterRedirects = t,
        this.state = r,
        this.shouldActivate = o;
    }
    toString() {
      return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
    }
  },
  wo = class extends Se {
    urlAfterRedirects;
    state;
    type = ae.ResolveStart;
    constructor(i, e, t, r) {
      super(i, e), this.urlAfterRedirects = t, this.state = r;
    }
    toString() {
      return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  Co = class extends Se {
    urlAfterRedirects;
    state;
    type = ae.ResolveEnd;
    constructor(i, e, t, r) {
      super(i, e), this.urlAfterRedirects = t, this.state = r;
    }
    toString() {
      return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
    }
  },
  ko = class {
    route;
    type = ae.RouteConfigLoadStart;
    constructor(i) {
      this.route = i;
    }
    toString() {
      return `RouteConfigLoadStart(path: ${this.route.path})`;
    }
  },
  Eo = class {
    route;
    type = ae.RouteConfigLoadEnd;
    constructor(i) {
      this.route = i;
    }
    toString() {
      return `RouteConfigLoadEnd(path: ${this.route.path})`;
    }
  },
  Do = class {
    snapshot;
    type = ae.ChildActivationStart;
    constructor(i) {
      this.snapshot = i;
    }
    toString() {
      return `ChildActivationStart(path: '${
        this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""
      }')`;
    }
  },
  Mo = class {
    snapshot;
    type = ae.ChildActivationEnd;
    constructor(i) {
      this.snapshot = i;
    }
    toString() {
      return `ChildActivationEnd(path: '${
        this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""
      }')`;
    }
  },
  Io = class {
    snapshot;
    type = ae.ActivationStart;
    constructor(i) {
      this.snapshot = i;
    }
    toString() {
      return `ActivationStart(path: '${
        this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""
      }')`;
    }
  },
  So = class {
    snapshot;
    type = ae.ActivationEnd;
    constructor(i) {
      this.snapshot = i;
    }
    toString() {
      return `ActivationEnd(path: '${
        this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""
      }')`;
    }
  };
var Pi = class {},
  Wt = class {
    url;
    navigationBehaviorOptions;
    constructor(i, e) {
      this.url = i, this.navigationBehaviorOptions = e;
    }
  };
function Ju(n, i) {
  return n.providers && !n._injector &&
    (n._injector = cs(n.providers, i, `Route: ${n.path}`)),
    n._injector ?? i;
}
function Be(n) {
  return n.outlet || k;
}
function em(n, i) {
  let e = n.filter((t) => Be(t) === i);
  return e.push(...n.filter((t) => Be(t) !== i)), e;
}
function zi(n) {
  if (!n) return null;
  if (n.routeConfig?._injector) return n.routeConfig._injector;
  for (let i = n.parent; i; i = i.parent) {
    let e = i.routeConfig;
    if (e?._loadedInjector) return e._loadedInjector;
    if (e?._injector) return e._injector;
  }
  return null;
}
var Ao = class {
    rootInjector;
    outlet = null;
    route = null;
    children;
    attachRef = null;
    get injector() {
      return zi(this.route?.snapshot) ?? this.rootInjector;
    }
    constructor(i) {
      this.rootInjector = i, this.children = new jn(this.rootInjector);
    }
  },
  jn = (() => {
    class n {
      rootInjector;
      contexts = new Map();
      constructor(e) {
        this.rootInjector = e;
      }
      onChildOutletCreated(e, t) {
        let r = this.getOrCreateContext(e);
        r.outlet = t, this.contexts.set(e, r);
      }
      onChildOutletDestroyed(e) {
        let t = this.getContext(e);
        t && (t.outlet = null, t.attachRef = null);
      }
      onOutletDeactivated() {
        let e = this.contexts;
        return this.contexts = new Map(), e;
      }
      onOutletReAttached(e) {
        this.contexts = e;
      }
      getOrCreateContext(e) {
        let t = this.getContext(e);
        return t || (t = new Ao(this.rootInjector), this.contexts.set(e, t)), t;
      }
      getContext(e) {
        return this.contexts.get(e) || null;
      }
      static ɵfac = function (t) {
        return new (t || n)(S(He));
      };
      static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
    return n;
  })(),
  On = class {
    _root;
    constructor(i) {
      this._root = i;
    }
    get root() {
      return this._root.value;
    }
    parent(i) {
      let e = this.pathFromRoot(i);
      return e.length > 1 ? e[e.length - 2] : null;
    }
    children(i) {
      let e = Ro(i, this._root);
      return e ? e.children.map((t) => t.value) : [];
    }
    firstChild(i) {
      let e = Ro(i, this._root);
      return e && e.children.length > 0 ? e.children[0].value : null;
    }
    siblings(i) {
      let e = To(i, this._root);
      return e.length < 2
        ? []
        : e[e.length - 2].children.map((r) => r.value).filter((r) => r !== i);
    }
    pathFromRoot(i) {
      return To(i, this._root).map((e) => e.value);
    }
  };
function Ro(n, i) {
  if (n === i.value) return i;
  for (let e of i.children) {
    let t = Ro(n, e);
    if (t) return t;
  }
  return null;
}
function To(n, i) {
  if (n === i.value) return [i];
  for (let e of i.children) {
    let t = To(n, e);
    if (t.length) return t.unshift(i), t;
  }
  return [];
}
var ke = class {
  value;
  children;
  constructor(i, e) {
    this.value = i, this.children = e;
  }
  toString() {
    return `TreeNode(${this.value})`;
  }
};
function Bt(n) {
  let i = {};
  return n && n.children.forEach((e) => i[e.value.outlet] = e), i;
}
var Fn = class extends On {
  snapshot;
  constructor(i, e) {
    super(i), this.snapshot = e, Uo(this, i);
  }
  toString() {
    return this.snapshot.toString();
  }
};
function bc(n) {
  let i = tm(n),
    e = new be([new wt("", {})]),
    t = new be({}),
    r = new be({}),
    o = new be({}),
    a = new be(""),
    s = new Gt(e, t, o, a, r, k, n, i.root);
  return s.snapshot = i.root, new Fn(new ke(s, []), i);
}
function tm(n) {
  let i = {},
    e = {},
    t = {},
    r = "",
    o = new Ut([], i, t, r, e, k, n, null, {});
  return new Nn("", new ke(o, []));
}
var Gt = class {
  urlSubject;
  paramsSubject;
  queryParamsSubject;
  fragmentSubject;
  dataSubject;
  outlet;
  component;
  snapshot;
  _futureSnapshot;
  _routerState;
  _paramMap;
  _queryParamMap;
  title;
  url;
  params;
  queryParams;
  fragment;
  data;
  constructor(i, e, t, r, o, a, s, c) {
    this.urlSubject = i,
      this.paramsSubject = e,
      this.queryParamsSubject = t,
      this.fragmentSubject = r,
      this.dataSubject = o,
      this.outlet = a,
      this.component = s,
      this._futureSnapshot = c,
      this.title = this.dataSubject?.pipe(_((d) => d[Bi])) ?? g(void 0),
      this.url = i,
      this.params = e,
      this.queryParams = t,
      this.fragment = r,
      this.data = o;
  }
  get routeConfig() {
    return this._futureSnapshot.routeConfig;
  }
  get root() {
    return this._routerState.root;
  }
  get parent() {
    return this._routerState.parent(this);
  }
  get firstChild() {
    return this._routerState.firstChild(this);
  }
  get children() {
    return this._routerState.children(this);
  }
  get pathFromRoot() {
    return this._routerState.pathFromRoot(this);
  }
  get paramMap() {
    return this._paramMap ??= this.params.pipe(_((i) => $t(i))), this._paramMap;
  }
  get queryParamMap() {
    return this._queryParamMap ??= this.queryParams.pipe(_((i) => $t(i))),
      this._queryParamMap;
  }
  toString() {
    return this.snapshot
      ? this.snapshot.toString()
      : `Future(${this._futureSnapshot})`;
  }
};
function Pn(n, i, e = "emptyOnly") {
  let t, { routeConfig: r } = n;
  return i !== null &&
      (e === "always" || r?.path === "" ||
        !i.component && !i.routeConfig?.loadComponent)
    ? t = {
      params: m(m({}, i.params), n.params),
      data: m(m({}, i.data), n.data),
      resolve: m(m(m(m({}, n.data), i.data), r?.data), n._resolvedData),
    }
    : t = {
      params: m({}, n.params),
      data: m({}, n.data),
      resolve: m(m({}, n.data), n._resolvedData ?? {}),
    },
    r && _c(r) && (t.resolve[Bi] = r.title),
    t;
}
var Ut = class {
    url;
    params;
    queryParams;
    fragment;
    data;
    outlet;
    component;
    routeConfig;
    _resolve;
    _resolvedData;
    _routerState;
    _paramMap;
    _queryParamMap;
    get title() {
      return this.data?.[Bi];
    }
    constructor(i, e, t, r, o, a, s, c, d) {
      this.url = i,
        this.params = e,
        this.queryParams = t,
        this.fragment = r,
        this.data = o,
        this.outlet = a,
        this.component = s,
        this.routeConfig = c,
        this._resolve = d;
    }
    get root() {
      return this._routerState.root;
    }
    get parent() {
      return this._routerState.parent(this);
    }
    get firstChild() {
      return this._routerState.firstChild(this);
    }
    get children() {
      return this._routerState.children(this);
    }
    get pathFromRoot() {
      return this._routerState.pathFromRoot(this);
    }
    get paramMap() {
      return this._paramMap ??= $t(this.params), this._paramMap;
    }
    get queryParamMap() {
      return this._queryParamMap ??= $t(this.queryParams), this._queryParamMap;
    }
    toString() {
      let i = this.url.map((t) => t.toString()).join("/"),
        e = this.routeConfig ? this.routeConfig.path : "";
      return `Route(url:'${i}', path:'${e}')`;
    }
  },
  Nn = class extends On {
    url;
    constructor(i, e) {
      super(e), this.url = i, Uo(this, e);
    }
    toString() {
      return vc(this._root);
    }
  };
function Uo(n, i) {
  i.value._routerState = n, i.children.forEach((e) => Uo(n, e));
}
function vc(n) {
  let i = n.children.length > 0 ? ` { ${n.children.map(vc).join(", ")} } ` : "";
  return `${n.value}${i}`;
}
function mo(n) {
  if (n.snapshot) {
    let i = n.snapshot, e = n._futureSnapshot;
    n.snapshot = e,
      We(i.queryParams, e.queryParams) ||
      n.queryParamsSubject.next(e.queryParams),
      i.fragment !== e.fragment && n.fragmentSubject.next(e.fragment),
      We(i.params, e.params) || n.paramsSubject.next(e.params),
      Iu(i.url, e.url) || n.urlSubject.next(e.url),
      We(i.data, e.data) || n.dataSubject.next(e.data);
  } else {n.snapshot = n._futureSnapshot,
      n.dataSubject.next(n._futureSnapshot.data);}
}
function Oo(n, i) {
  let e = We(n.params, i.params) && Tu(n.url, i.url),
    t = !n.parent != !i.parent;
  return e && !t && (!n.parent || Oo(n.parent, i.parent));
}
function _c(n) {
  return typeof n.title == "string" || n.title === null;
}
var im = new p(""),
  Ho = (() => {
    class n {
      activated = null;
      get activatedComponentRef() {
        return this.activated;
      }
      _activatedRoute = null;
      name = k;
      activateEvents = new Q();
      deactivateEvents = new Q();
      attachEvents = new Q();
      detachEvents = new Q();
      routerOutletData = Xa(void 0);
      parentContexts = l(jn);
      location = l(Ft);
      changeDetector = l(Ce);
      inputBinder = l($o, { optional: !0 });
      supportsBindingToComponentInputs = !0;
      ngOnChanges(e) {
        if (e.name) {
          let { firstChange: t, previousValue: r } = e.name;
          if (t) return;
          this.isTrackedInParentContexts(r) &&
          (this.deactivate(), this.parentContexts.onChildOutletDestroyed(r)),
            this.initializeOutletWithName();
        }
      }
      ngOnDestroy() {
        this.isTrackedInParentContexts(this.name) &&
        this.parentContexts.onChildOutletDestroyed(this.name),
          this.inputBinder?.unsubscribeFromRouteData(this);
      }
      isTrackedInParentContexts(e) {
        return this.parentContexts.getContext(e)?.outlet === this;
      }
      ngOnInit() {
        this.initializeOutletWithName();
      }
      initializeOutletWithName() {
        if (
          this.parentContexts.onChildOutletCreated(this.name, this),
            this.activated
        ) return;
        let e = this.parentContexts.getContext(this.name);
        e?.route &&
          (e.attachRef
            ? this.attach(e.attachRef, e.route)
            : this.activateWith(e.route, e.injector));
      }
      get isActivated() {
        return !!this.activated;
      }
      get component() {
        if (!this.activated) throw new P(4012, !1);
        return this.activated.instance;
      }
      get activatedRoute() {
        if (!this.activated) throw new P(4012, !1);
        return this._activatedRoute;
      }
      get activatedRouteData() {
        return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
      }
      detach() {
        if (!this.activated) throw new P(4012, !1);
        this.location.detach();
        let e = this.activated;
        return this.activated = null,
          this._activatedRoute = null,
          this.detachEvents.emit(e.instance),
          e;
      }
      attach(e, t) {
        this.activated = e,
          this._activatedRoute = t,
          this.location.insert(e.hostView),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.attachEvents.emit(e.instance);
      }
      deactivate() {
        if (this.activated) {
          let e = this.component;
          this.activated.destroy(),
            this.activated = null,
            this._activatedRoute = null,
            this.deactivateEvents.emit(e);
        }
      }
      activateWith(e, t) {
        if (this.isActivated) throw new P(4013, !1);
        this._activatedRoute = e;
        let r = this.location,
          a = e.snapshot.component,
          s = this.parentContexts.getOrCreateContext(this.name).children,
          c = new Fo(e, s, r.injector, this.routerOutletData);
        this.activated = r.createComponent(a, {
          index: r.length,
          injector: c,
          environmentInjector: t,
        }),
          this.changeDetector.markForCheck(),
          this.inputBinder?.bindActivatedRouteToOutletComponent(this),
          this.activateEvents.emit(this.activated.instance);
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵdir = T({
        type: n,
        selectors: [["router-outlet"]],
        inputs: { name: "name", routerOutletData: [1, "routerOutletData"] },
        outputs: {
          activateEvents: "activate",
          deactivateEvents: "deactivate",
          attachEvents: "attach",
          detachEvents: "detach",
        },
        exportAs: ["outlet"],
        features: [Me],
      });
    }
    return n;
  })(),
  Fo = class n {
    route;
    childContexts;
    parent;
    outletData;
    __ngOutletInjector(i) {
      return new n(this.route, this.childContexts, i, this.outletData);
    }
    constructor(i, e, t, r) {
      this.route = i,
        this.childContexts = e,
        this.parent = t,
        this.outletData = r;
    }
    get(i, e) {
      return i === Gt
        ? this.route
        : i === jn
        ? this.childContexts
        : i === im
        ? this.outletData
        : this.parent.get(i, e);
    }
  },
  $o = new p("");
function nm(n, i, e) {
  let t = Ni(n, i._root, e ? e._root : void 0);
  return new Fn(t, i);
}
function Ni(n, i, e) {
  if (e && n.shouldReuseRoute(i.value, e.value.snapshot)) {
    let t = e.value;
    t._futureSnapshot = i.value;
    let r = rm(n, i, e);
    return new ke(t, r);
  } else {
    if (n.shouldAttach(i.value)) {
      let o = n.retrieve(i.value);
      if (o !== null) {
        let a = o.route;
        return a.value._futureSnapshot = i.value,
          a.children = i.children.map((s) => Ni(n, s)),
          a;
      }
    }
    let t = om(i.value), r = i.children.map((o) => Ni(n, o));
    return new ke(t, r);
  }
}
function rm(n, i, e) {
  return i.children.map((t) => {
    for (let r of e.children) {
      if (n.shouldReuseRoute(t.value, r.value.snapshot)) return Ni(n, t, r);
    }
    return Ni(n, t);
  });
}
function om(n) {
  return new Gt(
    new be(n.url),
    new be(n.params),
    new be(n.queryParams),
    new be(n.fragment),
    new be(n.data),
    n.outlet,
    n.component,
    n,
  );
}
var Li = class {
    redirectTo;
    navigationBehaviorOptions;
    constructor(i, e) {
      this.redirectTo = i, this.navigationBehaviorOptions = e;
    }
  },
  yc = "ngNavigationCancelingError";
function Ln(n, i) {
  let { redirectTo: e, navigationBehaviorOptions: t } = Ri(i)
      ? { redirectTo: i, navigationBehaviorOptions: void 0 }
      : i,
    r = xc(!1, Ee.Redirect);
  return r.url = e, r.navigationBehaviorOptions = t, r;
}
function xc(n, i) {
  let e = new Error(`NavigationCancelingError: ${n || ""}`);
  return e[yc] = !0, e.cancellationCode = i, e;
}
function am(n) {
  return wc(n) && Ri(n.url);
}
function wc(n) {
  return !!n && n[yc];
}
var sm = (n, i, e, t) =>
    _(
      (r) => (new Po(i, r.targetRouterState, r.currentRouterState, e, t)
        .activate(n),
        r),
    ),
  Po = class {
    routeReuseStrategy;
    futureState;
    currState;
    forwardEvent;
    inputBindingEnabled;
    constructor(i, e, t, r, o) {
      this.routeReuseStrategy = i,
        this.futureState = e,
        this.currState = t,
        this.forwardEvent = r,
        this.inputBindingEnabled = o;
    }
    activate(i) {
      let e = this.futureState._root,
        t = this.currState ? this.currState._root : null;
      this.deactivateChildRoutes(e, t, i),
        mo(this.futureState.root),
        this.activateChildRoutes(e, t, i);
    }
    deactivateChildRoutes(i, e, t) {
      let r = Bt(e);
      i.children.forEach((o) => {
        let a = o.value.outlet;
        this.deactivateRoutes(o, r[a], t), delete r[a];
      }),
        Object.values(r).forEach((o) => {
          this.deactivateRouteAndItsChildren(o, t);
        });
    }
    deactivateRoutes(i, e, t) {
      let r = i.value, o = e ? e.value : null;
      if (r === o) {
        if (r.component) {
          let a = t.getContext(r.outlet);
          a && this.deactivateChildRoutes(i, e, a.children);
        } else this.deactivateChildRoutes(i, e, t);
      } else o && this.deactivateRouteAndItsChildren(e, t);
    }
    deactivateRouteAndItsChildren(i, e) {
      i.value.component &&
        this.routeReuseStrategy.shouldDetach(i.value.snapshot)
        ? this.detachAndStoreRouteSubtree(i, e)
        : this.deactivateRouteAndOutlet(i, e);
    }
    detachAndStoreRouteSubtree(i, e) {
      let t = e.getContext(i.value.outlet),
        r = t && i.value.component ? t.children : e,
        o = Bt(i);
      for (let a of Object.values(o)) this.deactivateRouteAndItsChildren(a, r);
      if (t && t.outlet) {
        let a = t.outlet.detach(), s = t.children.onOutletDeactivated();
        this.routeReuseStrategy.store(i.value.snapshot, {
          componentRef: a,
          route: i,
          contexts: s,
        });
      }
    }
    deactivateRouteAndOutlet(i, e) {
      let t = e.getContext(i.value.outlet),
        r = t && i.value.component ? t.children : e,
        o = Bt(i);
      for (let a of Object.values(o)) this.deactivateRouteAndItsChildren(a, r);
      t &&
        (t.outlet && (t.outlet.deactivate(), t.children.onOutletDeactivated()),
          t.attachRef = null,
          t.route = null);
    }
    activateChildRoutes(i, e, t) {
      let r = Bt(e);
      i.children.forEach((o) => {
        this.activateRoutes(o, r[o.value.outlet], t),
          this.forwardEvent(new So(o.value.snapshot));
      }), i.children.length && this.forwardEvent(new Mo(i.value.snapshot));
    }
    activateRoutes(i, e, t) {
      let r = i.value, o = e ? e.value : null;
      if (mo(r), r === o) {
        if (r.component) {
          let a = t.getOrCreateContext(r.outlet);
          this.activateChildRoutes(i, e, a.children);
        } else this.activateChildRoutes(i, e, t);
      } else if (r.component) {
        let a = t.getOrCreateContext(r.outlet);
        if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
          let s = this.routeReuseStrategy.retrieve(r.snapshot);
          this.routeReuseStrategy.store(r.snapshot, null),
            a.children.onOutletReAttached(s.contexts),
            a.attachRef = s.componentRef,
            a.route = s.route.value,
            a.outlet && a.outlet.attach(s.componentRef, s.route.value),
            mo(s.route.value),
            this.activateChildRoutes(i, null, a.children);
        } else {a.attachRef = null,
            a.route = r,
            a.outlet && a.outlet.activateWith(r, a.injector),
            this.activateChildRoutes(i, null, a.children);}
      } else this.activateChildRoutes(i, null, t);
    }
  },
  Vn = class {
    path;
    route;
    constructor(i) {
      this.path = i, this.route = this.path[this.path.length - 1];
    }
  },
  Ht = class {
    component;
    route;
    constructor(i, e) {
      this.component = i, this.route = e;
    }
  };
function cm(n, i, e) {
  let t = n._root, r = i ? i._root : null;
  return Di(t, r, e, [t.value]);
}
function lm(n) {
  let i = n.routeConfig ? n.routeConfig.canActivateChild : null;
  return !i || i.length === 0 ? null : { node: n, guards: i };
}
function Yt(n, i) {
  let e = Symbol(), t = i.get(n, e);
  return t === e ? typeof n == "function" && !$a(n) ? n : i.get(n) : t;
}
function Di(
  n,
  i,
  e,
  t,
  r = { canDeactivateChecks: [], canActivateChecks: [] },
) {
  let o = Bt(i);
  return n.children.forEach((a) => {
    dm(a, o[a.value.outlet], e, t.concat([a.value]), r),
      delete o[a.value.outlet];
  }),
    Object.entries(o).forEach(([a, s]) => Si(s, e.getContext(a), r)),
    r;
}
function dm(
  n,
  i,
  e,
  t,
  r = { canDeactivateChecks: [], canActivateChecks: [] },
) {
  let o = n.value,
    a = i ? i.value : null,
    s = e ? e.getContext(n.value.outlet) : null;
  if (a && o.routeConfig === a.routeConfig) {
    let c = um(a, o, o.routeConfig.runGuardsAndResolvers);
    c
      ? r.canActivateChecks.push(new Vn(t))
      : (o.data = a.data, o._resolvedData = a._resolvedData),
      o.component ? Di(n, i, s ? s.children : null, t, r) : Di(n, i, e, t, r),
      c && s && s.outlet && s.outlet.isActivated &&
      r.canDeactivateChecks.push(new Ht(s.outlet.component, a));
  } else {a && Si(i, s, r),
      r.canActivateChecks.push(new Vn(t)),
      o.component
        ? Di(n, null, s ? s.children : null, t, r)
        : Di(n, null, e, t, r);}
  return r;
}
function um(n, i, e) {
  if (typeof e == "function") return e(n, i);
  switch (e) {
    case "pathParamsChange":
      return !Ct(n.url, i.url);
    case "pathParamsOrQueryParamsChange":
      return !Ct(n.url, i.url) || !We(n.queryParams, i.queryParams);
    case "always":
      return !0;
    case "paramsOrQueryParamsChange":
      return !Oo(n, i) || !We(n.queryParams, i.queryParams);
    case "paramsChange":
    default:
      return !Oo(n, i);
  }
}
function Si(n, i, e) {
  let t = Bt(n), r = n.value;
  Object.entries(t).forEach(([o, a]) => {
    r.component
      ? i ? Si(a, i.children.getContext(o), e) : Si(a, null, e)
      : Si(a, i, e);
  }),
    r.component
      ? i && i.outlet && i.outlet.isActivated
        ? e.canDeactivateChecks.push(new Ht(i.outlet.component, r))
        : e.canDeactivateChecks.push(new Ht(null, r))
      : e.canDeactivateChecks.push(new Ht(null, r));
}
function Ui(n) {
  return typeof n == "function";
}
function mm(n) {
  return typeof n == "boolean";
}
function hm(n) {
  return n && Ui(n.canLoad);
}
function fm(n) {
  return n && Ui(n.canActivate);
}
function pm(n) {
  return n && Ui(n.canActivateChild);
}
function gm(n) {
  return n && Ui(n.canDeactivate);
}
function bm(n) {
  return n && Ui(n.canMatch);
}
function Cc(n) {
  return n instanceof Ba || n?.name === "EmptyError";
}
var Dn = Symbol("INITIAL_VALUE");
function qt() {
  return ye((n) =>
    oi(n.map((i) => i.pipe(Pe(1), ht(Dn)))).pipe(
      _((i) => {
        for (let e of i) {
          if (e !== !0) {
            if (e === Dn) return Dn;
            if (e === !1 || vm(e)) return e;
          }
        }
        return !0;
      }),
      re((i) => i !== Dn),
      Pe(1),
    )
  );
}
function vm(n) {
  return Ri(n) || n instanceof Li;
}
function _m(n, i) {
  return De((e) => {
    let {
      targetSnapshot: t,
      currentSnapshot: r,
      guards: { canActivateChecks: o, canDeactivateChecks: a },
    } = e;
    return a.length === 0 && o.length === 0
      ? g(V(m({}, e), { guardsResult: !0 }))
      : ym(a, t, r, n).pipe(
        De((s) => s && mm(s) ? xm(t, o, n, i) : g(s)),
        _((s) => V(m({}, e), { guardsResult: s })),
      );
  });
}
function ym(n, i, e, t) {
  return fe(n).pipe(
    De((r) => Dm(r.component, r.route, e, i, t)),
    tt((r) => r !== !0, !0),
  );
}
function xm(n, i, e, t) {
  return fe(i).pipe(
    mt((r) =>
      rn(
        Cm(r.route.parent, t),
        wm(r.route, t),
        Em(n, r.path, e),
        km(n, r.route, e),
      )
    ),
    tt((r) => r !== !0, !0),
  );
}
function wm(n, i) {
  return n !== null && i && i(new Io(n)), g(!0);
}
function Cm(n, i) {
  return n !== null && i && i(new Do(n)), g(!0);
}
function km(n, i, e) {
  let t = i.routeConfig ? i.routeConfig.canActivate : null;
  if (!t || t.length === 0) return g(!0);
  let r = t.map((o) =>
    Er(() => {
      let a = zi(i) ?? e,
        s = Yt(o, a),
        c = fm(s) ? s.canActivate(i, n) : Ne(a, () => s(i, n));
      return at(c).pipe(tt());
    })
  );
  return g(r).pipe(qt());
}
function Em(n, i, e) {
  let t = i[i.length - 1],
    o = i.slice(0, i.length - 1).reverse().map((a) => lm(a)).filter((a) =>
      a !== null
    ).map((a) =>
      Er(() => {
        let s = a.guards.map((c) => {
          let d = zi(a.node) ?? e,
            u = Yt(c, d),
            h = pm(u) ? u.canActivateChild(t, n) : Ne(d, () => u(t, n));
          return at(h).pipe(tt());
        });
        return g(s).pipe(qt());
      })
    );
  return g(o).pipe(qt());
}
function Dm(n, i, e, t, r) {
  let o = i && i.routeConfig ? i.routeConfig.canDeactivate : null;
  if (!o || o.length === 0) return g(!0);
  let a = o.map((s) => {
    let c = zi(i) ?? r,
      d = Yt(s, c),
      u = gm(d) ? d.canDeactivate(n, i, e, t) : Ne(c, () => d(n, i, e, t));
    return at(u).pipe(tt());
  });
  return g(a).pipe(qt());
}
function Mm(n, i, e, t) {
  let r = i.canLoad;
  if (r === void 0 || r.length === 0) return g(!0);
  let o = r.map((a) => {
    let s = Yt(a, n), c = hm(s) ? s.canLoad(i, e) : Ne(n, () => s(i, e));
    return at(c);
  });
  return g(o).pipe(qt(), kc(t));
}
function kc(n) {
  return ja(
    K((i) => {
      if (typeof i != "boolean") throw Ln(n, i);
    }),
    _((i) => i === !0),
  );
}
function Im(n, i, e, t) {
  let r = i.canMatch;
  if (!r || r.length === 0) return g(!0);
  let o = r.map((a) => {
    let s = Yt(a, n), c = bm(s) ? s.canMatch(i, e) : Ne(n, () => s(i, e));
    return at(c);
  });
  return g(o).pipe(qt(), kc(t));
}
var Vi = class {
    segmentGroup;
    constructor(i) {
      this.segmentGroup = i || null;
    }
  },
  ji = class extends Error {
    urlTree;
    constructor(i) {
      super(), this.urlTree = i;
    }
  };
function jt(n) {
  return ut(new Vi(n));
}
function Sm(n) {
  return ut(new P(4e3, !1));
}
function Am(n) {
  return ut(xc(!1, Ee.GuardRejected));
}
var No = class {
    urlSerializer;
    urlTree;
    constructor(i, e) {
      this.urlSerializer = i, this.urlTree = e;
    }
    lineralizeSegments(i, e) {
      let t = [], r = e.root;
      for (;;) {
        if (t = t.concat(r.segments), r.numberOfChildren === 0) return g(t);
        if (r.numberOfChildren > 1 || !r.children[k]) {
          return Sm(`${i.redirectTo}`);
        }
        r = r.children[k];
      }
    }
    applyRedirectCommands(i, e, t, r, o) {
      if (typeof e != "string") {
        let s = e,
          {
            queryParams: c,
            fragment: d,
            routeConfig: u,
            url: h,
            outlet: v,
            params: y,
            data: R,
            title: b,
          } = r,
          E = Ne(
            o,
            () =>
              s({
                params: y,
                data: R,
                queryParams: c,
                fragment: d,
                routeConfig: u,
                url: h,
                outlet: v,
                title: b,
              }),
          );
        if (E instanceof Ze) throw new ji(E);
        e = E;
      }
      let a = this.applyRedirectCreateUrlTree(
        e,
        this.urlSerializer.parse(e),
        i,
        t,
      );
      if (e[0] === "/") throw new ji(a);
      return a;
    }
    applyRedirectCreateUrlTree(i, e, t, r) {
      let o = this.createSegmentGroup(i, e.root, t, r);
      return new Ze(
        o,
        this.createQueryParams(e.queryParams, this.urlTree.queryParams),
        e.fragment,
      );
    }
    createQueryParams(i, e) {
      let t = {};
      return Object.entries(i).forEach(([r, o]) => {
        if (typeof o == "string" && o[0] === ":") {
          let s = o.substring(1);
          t[r] = e[s];
        } else t[r] = o;
      }),
        t;
    }
    createSegmentGroup(i, e, t, r) {
      let o = this.createSegments(i, e.segments, t, r), a = {};
      return Object.entries(e.children).forEach(([s, c]) => {
        a[s] = this.createSegmentGroup(i, c, t, r);
      }),
        new L(o, a);
    }
    createSegments(i, e, t, r) {
      return e.map((o) =>
        o.path[0] === ":" ? this.findPosParam(i, o, r) : this.findOrReturn(o, t)
      );
    }
    findPosParam(i, e, t) {
      let r = t[e.path.substring(1)];
      if (!r) throw new P(4001, !1);
      return r;
    }
    findOrReturn(i, e) {
      let t = 0;
      for (let r of e) {
        if (r.path === i.path) return e.splice(t), r;
        t++;
      }
      return i;
    }
  },
  Lo = {
    matched: !1,
    consumedSegments: [],
    remainingSegments: [],
    parameters: {},
    positionalParamSegments: {},
  };
function Rm(n, i, e, t, r) {
  let o = Ec(n, i, e);
  return o.matched
    ? (t = Ju(i, t), Im(t, i, e, r).pipe(_((a) => a === !0 ? o : m({}, Lo))))
    : g(o);
}
function Ec(n, i, e) {
  if (i.path === "**") return Tm(e);
  if (i.path === "") {
    return i.pathMatch === "full" && (n.hasChildren() || e.length > 0)
      ? m({}, Lo)
      : {
        matched: !0,
        consumedSegments: [],
        remainingSegments: e,
        parameters: {},
        positionalParamSegments: {},
      };
  }
  let r = (i.matcher || Mu)(e, n, i);
  if (!r) return m({}, Lo);
  let o = {};
  Object.entries(r.posParams ?? {}).forEach(([s, c]) => {
    o[s] = c.path;
  });
  let a = r.consumed.length > 0
    ? m(m({}, o), r.consumed[r.consumed.length - 1].parameters)
    : o;
  return {
    matched: !0,
    consumedSegments: r.consumed,
    remainingSegments: e.slice(r.consumed.length),
    parameters: a,
    positionalParamSegments: r.posParams ?? {},
  };
}
function Tm(n) {
  return {
    matched: !0,
    parameters: n.length > 0 ? rc(n).parameters : {},
    consumedSegments: n,
    remainingSegments: [],
    positionalParamSegments: {},
  };
}
function ec(n, i, e, t) {
  return e.length > 0 && Pm(n, e, t)
    ? {
      segmentGroup: new L(i, Fm(t, new L(e, n.children))),
      slicedSegments: [],
    }
    : e.length === 0 && Nm(n, e, t)
    ? {
      segmentGroup: new L(n.segments, Om(n, e, t, n.children)),
      slicedSegments: e,
    }
    : { segmentGroup: new L(n.segments, n.children), slicedSegments: e };
}
function Om(n, i, e, t) {
  let r = {};
  for (let o of e) {
    if (Bn(n, i, o) && !t[Be(o)]) {
      let a = new L([], {});
      r[Be(o)] = a;
    }
  }
  return m(m({}, t), r);
}
function Fm(n, i) {
  let e = {};
  e[k] = i;
  for (let t of n) {
    if (t.path === "" && Be(t) !== k) {
      let r = new L([], {});
      e[Be(t)] = r;
    }
  }
  return e;
}
function Pm(n, i, e) {
  return e.some((t) => Bn(n, i, t) && Be(t) !== k);
}
function Nm(n, i, e) {
  return e.some((t) => Bn(n, i, t));
}
function Bn(n, i, e) {
  return (n.hasChildren() || i.length > 0) && e.pathMatch === "full"
    ? !1
    : e.path === "";
}
function Lm(n, i, e) {
  return i.length === 0 && !n.children[e];
}
var Vo = class {};
function Vm(n, i, e, t, r, o, a = "emptyOnly") {
  return new jo(n, i, e, t, r, a, o).recognize();
}
var jm = 31,
  jo = class {
    injector;
    configLoader;
    rootComponentType;
    config;
    urlTree;
    paramsInheritanceStrategy;
    urlSerializer;
    applyRedirects;
    absoluteRedirectCount = 0;
    allowRedirects = !0;
    constructor(i, e, t, r, o, a, s) {
      this.injector = i,
        this.configLoader = e,
        this.rootComponentType = t,
        this.config = r,
        this.urlTree = o,
        this.paramsInheritanceStrategy = a,
        this.urlSerializer = s,
        this.applyRedirects = new No(this.urlSerializer, this.urlTree);
    }
    noMatchError(i) {
      return new P(4002, `'${i.segmentGroup}'`);
    }
    recognize() {
      let i = ec(this.urlTree.root, [], [], this.config).segmentGroup;
      return this.match(i).pipe(_(({ children: e, rootSnapshot: t }) => {
        let r = new ke(t, e),
          o = new Nn("", r),
          a = Gu(t, [], this.urlTree.queryParams, this.urlTree.fragment);
        return a.queryParams = this.urlTree.queryParams,
          o.url = this.urlSerializer.serialize(a),
          { state: o, tree: a };
      }));
    }
    match(i) {
      let e = new Ut(
        [],
        Object.freeze({}),
        Object.freeze(m({}, this.urlTree.queryParams)),
        this.urlTree.fragment,
        Object.freeze({}),
        k,
        this.rootComponentType,
        null,
        {},
      );
      return this.processSegmentGroup(this.injector, this.config, i, k, e).pipe(
        _((t) => ({ children: t, rootSnapshot: e })),
        et((t) => {
          if (t instanceof ji) {
            return this.urlTree = t.urlTree, this.match(t.urlTree.root);
          }
          throw t instanceof Vi ? this.noMatchError(t) : t;
        }),
      );
    }
    processSegmentGroup(i, e, t, r, o) {
      return t.segments.length === 0 && t.hasChildren()
        ? this.processChildren(i, e, t, o)
        : this.processSegment(i, e, t, t.segments, r, !0, o).pipe(
          _((a) => a instanceof ke ? [a] : []),
        );
    }
    processChildren(i, e, t, r) {
      let o = [];
      for (let a of Object.keys(t.children)) {
        a === "primary" ? o.unshift(a) : o.push(a);
      }
      return fe(o).pipe(
        mt((a) => {
          let s = t.children[a], c = em(e, a);
          return this.processSegmentGroup(i, c, s, a, r);
        }),
        Ua((a, s) => (a.push(...s), a)),
        Ir(null),
        za(),
        De((a) => {
          if (a === null) return jt(t);
          let s = Dc(a);
          return Bm(s), g(s);
        }),
      );
    }
    processSegment(i, e, t, r, o, a, s) {
      return fe(e).pipe(
        mt((c) =>
          this.processSegmentAgainstRoute(c._injector ?? i, e, c, t, r, o, a, s)
            .pipe(et((d) => {
              if (d instanceof Vi) return g(null);
              throw d;
            }))
        ),
        tt((c) => !!c),
        et((c) => {
          if (Cc(c)) return Lm(t, r, o) ? g(new Vo()) : jt(t);
          throw c;
        }),
      );
    }
    processSegmentAgainstRoute(i, e, t, r, o, a, s, c) {
      return Be(t) !== a && (a === k || !Bn(r, o, t))
        ? jt(r)
        : t.redirectTo === void 0
        ? this.matchSegmentAgainstRoute(i, r, t, o, a, c)
        : this.allowRedirects && s
        ? this.expandSegmentAgainstRouteUsingRedirect(i, r, e, t, o, a, c)
        : jt(r);
    }
    expandSegmentAgainstRouteUsingRedirect(i, e, t, r, o, a, s) {
      let {
        matched: c,
        parameters: d,
        consumedSegments: u,
        positionalParamSegments: h,
        remainingSegments: v,
      } = Ec(e, r, o);
      if (!c) return jt(e);
      typeof r.redirectTo == "string" && r.redirectTo[0] === "/" &&
        (this.absoluteRedirectCount++,
          this.absoluteRedirectCount > jm && (this.allowRedirects = !1));
      let y = new Ut(
          o,
          d,
          Object.freeze(m({}, this.urlTree.queryParams)),
          this.urlTree.fragment,
          tc(r),
          Be(r),
          r.component ?? r._loadedComponent ?? null,
          r,
          ic(r),
        ),
        R = Pn(y, s, this.paramsInheritanceStrategy);
      y.params = Object.freeze(R.params), y.data = Object.freeze(R.data);
      let b = this.applyRedirects.applyRedirectCommands(
        u,
        r.redirectTo,
        h,
        y,
        i,
      );
      return this.applyRedirects.lineralizeSegments(r, b).pipe(
        De((E) => this.processSegment(i, t, e, E.concat(v), a, !1, s)),
      );
    }
    matchSegmentAgainstRoute(i, e, t, r, o, a) {
      let s = Rm(e, t, r, i, this.urlSerializer);
      return t.path === "**" && (e.children = {}),
        s.pipe(
          ye((c) =>
            c.matched
              ? (i = t._injector ?? i,
                this.getChildConfig(i, t, r).pipe(ye(({ routes: d }) => {
                  let u = t._loadedInjector ?? i,
                    {
                      parameters: h,
                      consumedSegments: v,
                      remainingSegments: y,
                    } = c,
                    R = new Ut(
                      v,
                      h,
                      Object.freeze(m({}, this.urlTree.queryParams)),
                      this.urlTree.fragment,
                      tc(t),
                      Be(t),
                      t.component ?? t._loadedComponent ?? null,
                      t,
                      ic(t),
                    ),
                    b = Pn(R, a, this.paramsInheritanceStrategy);
                  R.params = Object.freeze(b.params),
                    R.data = Object.freeze(b.data);
                  let { segmentGroup: E, slicedSegments: he } = ec(e, v, y, d);
                  if (he.length === 0 && E.hasChildren()) {
                    return this.processChildren(u, d, E, R).pipe(
                      _((Z) => new ke(R, Z)),
                    );
                  }
                  if (d.length === 0 && he.length === 0) {
                    return g(new ke(R, []));
                  }
                  let Qe = Be(t) === o;
                  return this.processSegment(u, d, E, he, Qe ? k : o, !0, R)
                    .pipe(
                      _((Z) => new ke(R, Z instanceof ke ? [Z] : [])),
                    );
                })))
              : jt(e)
          ),
        );
    }
    getChildConfig(i, e, t) {
      return e.children
        ? g({ routes: e.children, injector: i })
        : e.loadChildren
        ? e._loadedRoutes !== void 0
          ? g({ routes: e._loadedRoutes, injector: e._loadedInjector })
          : Mm(i, e, t, this.urlSerializer).pipe(De((r) =>
            r
              ? this.configLoader.loadChildren(i, e).pipe(K((o) => {
                e._loadedRoutes = o.routes, e._loadedInjector = o.injector;
              }))
              : Am(e)
          ))
        : g({ routes: [], injector: i });
    }
  };
function Bm(n) {
  n.sort((i, e) =>
    i.value.outlet === k
      ? -1
      : e.value.outlet === k
      ? 1
      : i.value.outlet.localeCompare(e.value.outlet)
  );
}
function zm(n) {
  let i = n.value.routeConfig;
  return i && i.path === "";
}
function Dc(n) {
  let i = [], e = new Set();
  for (let t of n) {
    if (!zm(t)) {
      i.push(t);
      continue;
    }
    let r = i.find((o) => t.value.routeConfig === o.value.routeConfig);
    r !== void 0 ? (r.children.push(...t.children), e.add(r)) : i.push(t);
  }
  for (let t of e) {
    let r = Dc(t.children);
    i.push(new ke(t.value, r));
  }
  return i.filter((t) => !e.has(t));
}
function tc(n) {
  return n.data || {};
}
function ic(n) {
  return n.resolve || {};
}
function Um(n, i, e, t, r, o) {
  return De((a) =>
    Vm(n, i, e, t, a.extractedUrl, r, o).pipe(
      _(({ state: s, tree: c }) =>
        V(m({}, a), { targetSnapshot: s, urlAfterRedirects: c })
      ),
    )
  );
}
function Hm(n, i) {
  return De((e) => {
    let { targetSnapshot: t, guards: { canActivateChecks: r } } = e;
    if (!r.length) return g(e);
    let o = new Set(r.map((c) => c.route)), a = new Set();
    for (let c of o) if (!a.has(c)) { for (let d of Mc(c)) a.add(d); }
    let s = 0;
    return fe(a).pipe(
      mt((c) =>
        o.has(c)
          ? $m(c, t, n, i)
          : (c.data = Pn(c, c.parent, n).resolve, g(void 0))
      ),
      K(() => s++),
      Ar(1),
      De((c) => s === a.size ? g(e) : Ue),
    );
  });
}
function Mc(n) {
  let i = n.children.map((e) => Mc(e)).flat();
  return [n, ...i];
}
function $m(n, i, e, t) {
  let r = n.routeConfig, o = n._resolve;
  return r?.title !== void 0 && !_c(r) && (o[Bi] = r.title),
    Wm(o, n, i, t).pipe(
      _(
        (a) => (n._resolvedData = a, n.data = Pn(n, n.parent, e).resolve, null),
      ),
    );
}
function Wm(n, i, e, t) {
  let r = po(n);
  if (r.length === 0) return g({});
  let o = {};
  return fe(r).pipe(
    De((a) =>
      Gm(n[a], i, e, t).pipe(
        tt(),
        K((s) => {
          if (s instanceof Li) throw Ln(new Ai(), s);
          o[a] = s;
        }),
      )
    ),
    Ar(1),
    _(() => o),
    et((a) => Cc(a) ? Ue : ut(a)),
  );
}
function Gm(n, i, e, t) {
  let r = zi(i) ?? t,
    o = Yt(n, r),
    a = o.resolve ? o.resolve(i, e) : Ne(r, () => o(i, e));
  return at(a);
}
function ho(n) {
  return ye((i) => {
    let e = n(i);
    return e ? fe(e).pipe(_(() => i)) : g(i);
  });
}
var Ic = (() => {
    class n {
      buildTitle(e) {
        let t, r = e.root;
        for (; r !== void 0;) {
          t = this.getResolvedTitleForRoute(r) ?? t,
            r = r.children.find((o) => o.outlet === k);
        }
        return t;
      }
      getResolvedTitleForRoute(e) {
        return e.data[Bi];
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = f({ token: n, factory: () => l(qm), providedIn: "root" });
    }
    return n;
  })(),
  qm = (() => {
    class n extends Ic {
      title;
      constructor(e) {
        super(), this.title = e;
      }
      updateTitle(e) {
        let t = this.buildTitle(e);
        t !== void 0 && this.title.setTitle(t);
      }
      static ɵfac = function (t) {
        return new (t || n)(S(Ys));
      };
      static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
    return n;
  })(),
  Wo = new p("", { providedIn: "root", factory: () => ({}) }),
  Ym = (() => {
    class n {
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵcmp = F({
        type: n,
        selectors: [["ng-component"]],
        exportAs: ["emptyRouterOutlet"],
        decls: 1,
        vars: 0,
        template: function (t, r) {
          t & 1 && U(0, "router-outlet");
        },
        dependencies: [Ho],
        encapsulation: 2,
      });
    }
    return n;
  })();
function Go(n) {
  let i = n.children && n.children.map(Go),
    e = i ? V(m({}, n), { children: i }) : m({}, n);
  return !e.component && !e.loadComponent && (i || e.loadChildren) &&
    e.outlet && e.outlet !== k && (e.component = Ym),
    e;
}
var qo = new p(""),
  Xm = (() => {
    class n {
      componentLoaders = new WeakMap();
      childrenLoaders = new WeakMap();
      onLoadStartListener;
      onLoadEndListener;
      compiler = l(Ur);
      loadComponent(e) {
        if (this.componentLoaders.get(e)) return this.componentLoaders.get(e);
        if (e._loadedComponent) return g(e._loadedComponent);
        this.onLoadStartListener && this.onLoadStartListener(e);
        let t = at(e.loadComponent()).pipe(
            _(Sc),
            K((o) => {
              this.onLoadEndListener && this.onLoadEndListener(e),
                e._loadedComponent = o;
            }),
            Ge(() => {
              this.componentLoaders.delete(e);
            }),
          ),
          r = new kr(t, () => new w()).pipe(Cr());
        return this.componentLoaders.set(e, r), r;
      }
      loadChildren(e, t) {
        if (this.childrenLoaders.get(t)) return this.childrenLoaders.get(t);
        if (t._loadedRoutes) {
          return g({ routes: t._loadedRoutes, injector: t._loadedInjector });
        }
        this.onLoadStartListener && this.onLoadStartListener(t);
        let o = Zm(t, this.compiler, e, this.onLoadEndListener).pipe(Ge(() => {
            this.childrenLoaders.delete(t);
          })),
          a = new kr(o, () => new w()).pipe(Cr());
        return this.childrenLoaders.set(t, a), a;
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
    return n;
  })();
function Zm(n, i, e, t) {
  return at(n.loadChildren()).pipe(
    _(Sc),
    De((r) =>
      r instanceof ss || Array.isArray(r) ? g(r) : fe(i.compileModuleAsync(r))
    ),
    _((r) => {
      t && t(n);
      let o, a, s = !1;
      return Array.isArray(r)
        ? (a = r, s = !0)
        : (o = r.create(e).injector,
          a = o.get(qo, [], { optional: !0, self: !0 }).flat()),
        { routes: a.map(Go), injector: o };
    }),
  );
}
function Km(n) {
  return n && typeof n == "object" && "default" in n;
}
function Sc(n) {
  return Km(n) ? n.default : n;
}
var Yo = (() => {
    class n {
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = f({ token: n, factory: () => l(Qm), providedIn: "root" });
    }
    return n;
  })(),
  Qm = (() => {
    class n {
      shouldProcessUrl(e) {
        return !0;
      }
      extract(e) {
        return e;
      }
      merge(e, t) {
        return e;
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
    return n;
  })(),
  Jm = new p("");
var eh = new p(""),
  th = (() => {
    class n {
      currentNavigation = null;
      currentTransition = null;
      lastSuccessfulNavigation = null;
      events = new w();
      transitionAbortSubject = new w();
      configLoader = l(Xm);
      environmentInjector = l(He);
      urlSerializer = l(zo);
      rootContexts = l(jn);
      location = l(Lt);
      inputBindingEnabled = l($o, { optional: !0 }) !== null;
      titleStrategy = l(Ic);
      options = l(Wo, { optional: !0 }) || {};
      paramsInheritanceStrategy = this.options.paramsInheritanceStrategy ||
        "emptyOnly";
      urlHandlingStrategy = l(Yo);
      createViewTransition = l(Jm, { optional: !0 });
      navigationErrorHandler = l(eh, { optional: !0 });
      navigationId = 0;
      get hasRequestedNavigation() {
        return this.navigationId !== 0;
      }
      transitions;
      afterPreactivation = () => g(void 0);
      rootComponentType = null;
      constructor() {
        let e = (r) => this.events.next(new ko(r)),
          t = (r) => this.events.next(new Eo(r));
        this.configLoader.onLoadEndListener = t,
          this.configLoader.onLoadStartListener = e;
      }
      complete() {
        this.transitions?.complete();
      }
      handleNavigationRequest(e) {
        let t = ++this.navigationId;
        this.transitions?.next(
          V(m(m({}, this.transitions.value), e), { id: t }),
        );
      }
      setupNavigations(e, t, r) {
        return this.transitions = new be({
          id: 0,
          currentUrlTree: t,
          currentRawUrl: t,
          extractedUrl: this.urlHandlingStrategy.extract(t),
          urlAfterRedirects: this.urlHandlingStrategy.extract(t),
          rawUrl: t,
          extras: {},
          resolve: () => {},
          reject: () => {},
          promise: Promise.resolve(!0),
          source: Ii,
          restoredState: null,
          currentSnapshot: r.snapshot,
          targetSnapshot: null,
          currentRouterState: r,
          targetRouterState: null,
          guards: { canActivateChecks: [], canDeactivateChecks: [] },
          guardsResult: null,
        }),
          this.transitions.pipe(
            re((o) => o.id !== 0),
            _((o) =>
              V(m({}, o), {
                extractedUrl: this.urlHandlingStrategy.extract(o.rawUrl),
              })
            ),
            ye((o) => {
              let a = !1, s = !1;
              return g(o).pipe(
                ye((c) => {
                  if (this.navigationId > o.id) {
                    return this.cancelNavigationTransition(
                      o,
                      "",
                      Ee.SupersededByNewNavigation,
                    ),
                      Ue;
                  }
                  this.currentTransition = o,
                    this.currentNavigation = {
                      id: c.id,
                      initialUrl: c.rawUrl,
                      extractedUrl: c.extractedUrl,
                      targetBrowserUrl: typeof c.extras.browserUrl == "string"
                        ? this.urlSerializer.parse(c.extras.browserUrl)
                        : c.extras.browserUrl,
                      trigger: c.source,
                      extras: c.extras,
                      previousNavigation: this.lastSuccessfulNavigation
                        ? V(m({}, this.lastSuccessfulNavigation), {
                          previousNavigation: null,
                        })
                        : null,
                    };
                  let d = !e.navigated || this.isUpdatingInternalState() ||
                      this.isUpdatedBrowserUrl(),
                    u = c.extras.onSameUrlNavigation ?? e.onSameUrlNavigation;
                  if (!d && u !== "reload") {
                    let h = "";
                    return this.events.next(
                      new Et(
                        c.id,
                        this.urlSerializer.serialize(c.rawUrl),
                        h,
                        _o.IgnoredSameUrlNavigation,
                      ),
                    ),
                      c.resolve(!1),
                      Ue;
                  }
                  if (this.urlHandlingStrategy.shouldProcessUrl(c.rawUrl)) {
                    return g(c).pipe(
                      ye((h) => {
                        let v = this.transitions?.getValue();
                        return this.events.next(
                          new Oi(
                            h.id,
                            this.urlSerializer.serialize(h.extractedUrl),
                            h.source,
                            h.restoredState,
                          ),
                        ),
                          v !== this.transitions?.getValue()
                            ? Ue
                            : Promise.resolve(h);
                      }),
                      Um(
                        this.environmentInjector,
                        this.configLoader,
                        this.rootComponentType,
                        e.config,
                        this.urlSerializer,
                        this.paramsInheritanceStrategy,
                      ),
                      K((h) => {
                        o.targetSnapshot = h.targetSnapshot,
                          o.urlAfterRedirects = h.urlAfterRedirects,
                          this.currentNavigation = V(
                            m({}, this.currentNavigation),
                            { finalUrl: h.urlAfterRedirects },
                          );
                        let v = new Tn(
                          h.id,
                          this.urlSerializer.serialize(h.extractedUrl),
                          this.urlSerializer.serialize(h.urlAfterRedirects),
                          h.targetSnapshot,
                        );
                        this.events.next(v);
                      }),
                    );
                  }
                  if (
                    d &&
                    this.urlHandlingStrategy.shouldProcessUrl(c.currentRawUrl)
                  ) {
                    let {
                        id: h,
                        extractedUrl: v,
                        source: y,
                        restoredState: R,
                        extras: b,
                      } = c,
                      E = new Oi(h, this.urlSerializer.serialize(v), y, R);
                    this.events.next(E);
                    let he = bc(this.rootComponentType).snapshot;
                    return this.currentTransition = o = V(m({}, c), {
                      targetSnapshot: he,
                      urlAfterRedirects: v,
                      extras: V(m({}, b), {
                        skipLocationChange: !1,
                        replaceUrl: !1,
                      }),
                    }),
                      this.currentNavigation.finalUrl = v,
                      g(o);
                  } else {
                    let h = "";
                    return this.events.next(
                      new Et(
                        c.id,
                        this.urlSerializer.serialize(c.extractedUrl),
                        h,
                        _o.IgnoredByUrlHandlingStrategy,
                      ),
                    ),
                      c.resolve(!1),
                      Ue;
                  }
                }),
                K((c) => {
                  let d = new yo(
                    c.id,
                    this.urlSerializer.serialize(c.extractedUrl),
                    this.urlSerializer.serialize(c.urlAfterRedirects),
                    c.targetSnapshot,
                  );
                  this.events.next(d);
                }),
                _(
                  (c) => (this.currentTransition = o = V(m({}, c), {
                    guards: cm(
                      c.targetSnapshot,
                      c.currentSnapshot,
                      this.rootContexts,
                    ),
                  }),
                    o),
                ),
                _m(this.environmentInjector, (c) => this.events.next(c)),
                K((c) => {
                  if (
                    o.guardsResult = c.guardsResult,
                      c.guardsResult && typeof c.guardsResult != "boolean"
                  ) throw Ln(this.urlSerializer, c.guardsResult);
                  let d = new xo(
                    c.id,
                    this.urlSerializer.serialize(c.extractedUrl),
                    this.urlSerializer.serialize(c.urlAfterRedirects),
                    c.targetSnapshot,
                    !!c.guardsResult,
                  );
                  this.events.next(d);
                }),
                re((c) =>
                  c.guardsResult
                    ? !0
                    : (this.cancelNavigationTransition(c, "", Ee.GuardRejected),
                      !1)
                ),
                ho((c) => {
                  if (c.guards.canActivateChecks.length) {
                    return g(c).pipe(
                      K((d) => {
                        let u = new wo(
                          d.id,
                          this.urlSerializer.serialize(d.extractedUrl),
                          this.urlSerializer.serialize(d.urlAfterRedirects),
                          d.targetSnapshot,
                        );
                        this.events.next(u);
                      }),
                      ye((d) => {
                        let u = !1;
                        return g(d).pipe(
                          Hm(
                            this.paramsInheritanceStrategy,
                            this.environmentInjector,
                          ),
                          K({
                            next: () => u = !0,
                            complete: () => {
                              u ||
                                this.cancelNavigationTransition(
                                  d,
                                  "",
                                  Ee.NoDataFromResolver,
                                );
                            },
                          }),
                        );
                      }),
                      K((d) => {
                        let u = new Co(
                          d.id,
                          this.urlSerializer.serialize(d.extractedUrl),
                          this.urlSerializer.serialize(d.urlAfterRedirects),
                          d.targetSnapshot,
                        );
                        this.events.next(u);
                      }),
                    );
                  }
                }),
                ho((c) => {
                  let d = (u) => {
                    let h = [];
                    u.routeConfig?.loadComponent &&
                      !u.routeConfig._loadedComponent &&
                      h.push(
                        this.configLoader.loadComponent(u.routeConfig).pipe(
                          K((v) => {
                            u.component = v;
                          }),
                          _(() => {}),
                        ),
                      );
                    for (let v of u.children) h.push(...d(v));
                    return h;
                  };
                  return oi(d(c.targetSnapshot.root)).pipe(Ir(null), Pe(1));
                }),
                ho(() => this.afterPreactivation()),
                ye(() => {
                  let { currentSnapshot: c, targetSnapshot: d } = o,
                    u = this.createViewTransition?.(
                      this.environmentInjector,
                      c.root,
                      d.root,
                    );
                  return u ? fe(u).pipe(_(() => o)) : g(o);
                }),
                _((c) => {
                  let d = nm(
                    e.routeReuseStrategy,
                    c.targetSnapshot,
                    c.currentRouterState,
                  );
                  return this.currentTransition = o = V(m({}, c), {
                    targetRouterState: d,
                  }),
                    this.currentNavigation.targetRouterState = d,
                    o;
                }),
                K(() => {
                  this.events.next(new Pi());
                }),
                sm(
                  this.rootContexts,
                  e.routeReuseStrategy,
                  (c) => this.events.next(c),
                  this.inputBindingEnabled,
                ),
                Pe(1),
                K({
                  next: (c) => {
                    a = !0,
                      this.lastSuccessfulNavigation = this.currentNavigation,
                      this.events.next(
                        new kt(
                          c.id,
                          this.urlSerializer.serialize(c.extractedUrl),
                          this.urlSerializer.serialize(c.urlAfterRedirects),
                        ),
                      ),
                      this.titleStrategy?.updateTitle(
                        c.targetRouterState.snapshot,
                      ),
                      c.resolve(!0);
                  },
                  complete: () => {
                    a = !0;
                  },
                }),
                se(this.transitionAbortSubject.pipe(K((c) => {
                  throw c;
                }))),
                Ge(() => {
                  !a && !s &&
                  this.cancelNavigationTransition(
                    o,
                    "",
                    Ee.SupersededByNewNavigation,
                  ),
                    this.currentTransition?.id === o.id &&
                    (this.currentNavigation = null,
                      this.currentTransition = null);
                }),
                et((c) => {
                  if (s = !0, wc(c)) {
                    this.events.next(
                      new Xe(
                        o.id,
                        this.urlSerializer.serialize(o.extractedUrl),
                        c.message,
                        c.cancellationCode,
                      ),
                    ),
                      am(c)
                        ? this.events.next(
                          new Wt(c.url, c.navigationBehaviorOptions),
                        )
                        : o.resolve(!1);
                  } else {
                    let d = new Fi(
                      o.id,
                      this.urlSerializer.serialize(o.extractedUrl),
                      c,
                      o.targetSnapshot ?? void 0,
                    );
                    try {
                      let u = Ne(
                        this.environmentInjector,
                        () => this.navigationErrorHandler?.(d),
                      );
                      if (u instanceof Li) {
                        let { message: h, cancellationCode: v } = Ln(
                          this.urlSerializer,
                          u,
                        );
                        this.events.next(
                          new Xe(
                            o.id,
                            this.urlSerializer.serialize(o.extractedUrl),
                            h,
                            v,
                          ),
                        ),
                          this.events.next(
                            new Wt(u.redirectTo, u.navigationBehaviorOptions),
                          );
                      } else throw this.events.next(d), c;
                    } catch (u) {
                      this.options.resolveNavigationPromiseOnError
                        ? o.resolve(!1)
                        : o.reject(u);
                    }
                  }
                  return Ue;
                }),
              );
            }),
          );
      }
      cancelNavigationTransition(e, t, r) {
        let o = new Xe(
          e.id,
          this.urlSerializer.serialize(e.extractedUrl),
          t,
          r,
        );
        this.events.next(o), e.resolve(!1);
      }
      isUpdatingInternalState() {
        return this.currentTransition?.extractedUrl.toString() !==
          this.currentTransition?.currentUrlTree.toString();
      }
      isUpdatedBrowserUrl() {
        let e = this.urlHandlingStrategy.extract(
            this.urlSerializer.parse(this.location.path(!0)),
          ),
          t = this.currentNavigation?.targetBrowserUrl ??
            this.currentNavigation?.extractedUrl;
        return e.toString() !== t?.toString() &&
          !this.currentNavigation?.extras.skipLocationChange;
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
    return n;
  })();
function ih(n) {
  return n !== Ii;
}
var nh = (() => {
    class n {
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = f({ token: n, factory: () => l(rh), providedIn: "root" });
    }
    return n;
  })(),
  Bo = class {
    shouldDetach(i) {
      return !1;
    }
    store(i, e) {}
    shouldAttach(i) {
      return !1;
    }
    retrieve(i) {
      return null;
    }
    shouldReuseRoute(i, e) {
      return i.routeConfig === e.routeConfig;
    }
  },
  rh = (() => {
    class n extends Bo {
      static ɵfac = (() => {
        let e;
        return function (r) {
          return (e || (e = Ie(n)))(r || n);
        };
      })();
      static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
    return n;
  })(),
  Ac = (() => {
    class n {
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = f({ token: n, factory: () => l(oh), providedIn: "root" });
    }
    return n;
  })(),
  oh = (() => {
    class n extends Ac {
      location = l(Lt);
      urlSerializer = l(zo);
      options = l(Wo, { optional: !0 }) || {};
      canceledNavigationResolution =
        this.options.canceledNavigationResolution || "replace";
      urlHandlingStrategy = l(Yo);
      urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
      currentUrlTree = new Ze();
      getCurrentUrlTree() {
        return this.currentUrlTree;
      }
      rawUrlTree = this.currentUrlTree;
      getRawUrlTree() {
        return this.rawUrlTree;
      }
      currentPageId = 0;
      lastSuccessfulId = -1;
      restoredState() {
        return this.location.getState();
      }
      get browserPageId() {
        return this.canceledNavigationResolution !== "computed"
          ? this.currentPageId
          : this.restoredState()?.ɵrouterPageId ?? this.currentPageId;
      }
      routerState = bc(null);
      getRouterState() {
        return this.routerState;
      }
      stateMemento = this.createStateMemento();
      createStateMemento() {
        return {
          rawUrlTree: this.rawUrlTree,
          currentUrlTree: this.currentUrlTree,
          routerState: this.routerState,
        };
      }
      registerNonRouterCurrentEntryChangeListener(e) {
        return this.location.subscribe((t) => {
          t.type === "popstate" && e(t.url, t.state);
        });
      }
      handleRouterEvent(e, t) {
        if (e instanceof Oi) this.stateMemento = this.createStateMemento();
        else if (e instanceof Et) this.rawUrlTree = t.initialUrl;
        else if (e instanceof Tn) {
          if (
            this.urlUpdateStrategy === "eager" && !t.extras.skipLocationChange
          ) {
            let r = this.urlHandlingStrategy.merge(t.finalUrl, t.initialUrl);
            this.setBrowserUrl(t.targetBrowserUrl ?? r, t);
          }
        } else {e instanceof Pi
            ? (this.currentUrlTree = t.finalUrl,
              this.rawUrlTree = this.urlHandlingStrategy.merge(
                t.finalUrl,
                t.initialUrl,
              ),
              this.routerState = t.targetRouterState,
              this.urlUpdateStrategy === "deferred" &&
              !t.extras.skipLocationChange &&
              this.setBrowserUrl(t.targetBrowserUrl ?? this.rawUrlTree, t))
            : e instanceof Xe &&
                (e.code === Ee.GuardRejected ||
                  e.code === Ee.NoDataFromResolver)
            ? this.restoreHistory(t)
            : e instanceof Fi
            ? this.restoreHistory(t, !0)
            : e instanceof kt &&
              (this.lastSuccessfulId = e.id,
                this.currentPageId = this.browserPageId);}
      }
      setBrowserUrl(e, t) {
        let r = e instanceof Ze ? this.urlSerializer.serialize(e) : e;
        if (this.location.isCurrentPathEqualTo(r) || t.extras.replaceUrl) {
          let o = this.browserPageId,
            a = m(m({}, t.extras.state), this.generateNgRouterState(t.id, o));
          this.location.replaceState(r, "", a);
        } else {
          let o = m(
            m({}, t.extras.state),
            this.generateNgRouterState(t.id, this.browserPageId + 1),
          );
          this.location.go(r, "", o);
        }
      }
      restoreHistory(e, t = !1) {
        if (this.canceledNavigationResolution === "computed") {
          let r = this.browserPageId, o = this.currentPageId - r;
          o !== 0
            ? this.location.historyGo(o)
            : this.currentUrlTree === e.finalUrl && o === 0 &&
              (this.resetState(e), this.resetUrlToCurrentUrlTree());
        } else {this.canceledNavigationResolution === "replace" &&
            (t && this.resetState(e), this.resetUrlToCurrentUrlTree());}
      }
      resetState(e) {
        this.routerState = this.stateMemento.routerState,
          this.currentUrlTree = this.stateMemento.currentUrlTree,
          this.rawUrlTree = this.urlHandlingStrategy.merge(
            this.currentUrlTree,
            e.finalUrl ?? this.rawUrlTree,
          );
      }
      resetUrlToCurrentUrlTree() {
        this.location.replaceState(
          this.urlSerializer.serialize(this.rawUrlTree),
          "",
          this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId),
        );
      }
      generateNgRouterState(e, t) {
        return this.canceledNavigationResolution === "computed"
          ? { navigationId: e, ɵrouterPageId: t }
          : { navigationId: e };
      }
      static ɵfac = (() => {
        let e;
        return function (r) {
          return (e || (e = Ie(n)))(r || n);
        };
      })();
      static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
    return n;
  })();
function ah(n, i) {
  n.events.pipe(
    re((e) =>
      e instanceof kt || e instanceof Xe || e instanceof Fi || e instanceof Et
    ),
    _((e) =>
      e instanceof kt || e instanceof Et
        ? 0
        : (e instanceof Xe
            ? e.code === Ee.Redirect || e.code === Ee.SupersededByNewNavigation
            : !1)
        ? 2
        : 1
    ),
    re((e) => e !== 2),
    Pe(1),
  ).subscribe(() => {
    i();
  });
}
var sh = {
    paths: "exact",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "exact",
  },
  ch = {
    paths: "subset",
    fragment: "ignored",
    matrixParams: "ignored",
    queryParams: "subset",
  },
  Rc = (() => {
    class n {
      get currentUrlTree() {
        return this.stateManager.getCurrentUrlTree();
      }
      get rawUrlTree() {
        return this.stateManager.getRawUrlTree();
      }
      disposed = !1;
      nonRouterCurrentEntryChangeSubscription;
      console = l(Lr);
      stateManager = l(Ac);
      options = l(Wo, { optional: !0 }) || {};
      pendingTasks = l(si);
      urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred";
      navigationTransitions = l(th);
      urlSerializer = l(zo);
      location = l(Lt);
      urlHandlingStrategy = l(Yo);
      _events = new w();
      get events() {
        return this._events;
      }
      get routerState() {
        return this.stateManager.getRouterState();
      }
      navigated = !1;
      routeReuseStrategy = l(nh);
      onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore";
      config = l(qo, { optional: !0 })?.flat() ?? [];
      componentInputBindingEnabled = !!l($o, { optional: !0 });
      constructor() {
        this.resetConfig(this.config),
          this.navigationTransitions.setupNavigations(
            this,
            this.currentUrlTree,
            this.routerState,
          ).subscribe({
            error: (e) => {
              this.console.warn(e);
            },
          }),
          this.subscribeToNavigationEvents();
      }
      eventsSubscription = new Fe();
      subscribeToNavigationEvents() {
        let e = this.navigationTransitions.events.subscribe((t) => {
          try {
            let r = this.navigationTransitions.currentTransition,
              o = this.navigationTransitions.currentNavigation;
            if (r !== null && o !== null) {
              if (
                this.stateManager.handleRouterEvent(t, o),
                  t instanceof Xe && t.code !== Ee.Redirect &&
                  t.code !== Ee.SupersededByNewNavigation
              ) this.navigated = !0;
              else if (t instanceof kt) this.navigated = !0;
              else if (t instanceof Wt) {
                let a = t.navigationBehaviorOptions,
                  s = this.urlHandlingStrategy.merge(t.url, r.currentRawUrl),
                  c = m({
                    browserUrl: r.extras.browserUrl,
                    info: r.extras.info,
                    skipLocationChange: r.extras.skipLocationChange,
                    replaceUrl: r.extras.replaceUrl ||
                      this.urlUpdateStrategy === "eager" || ih(r.source),
                  }, a);
                this.scheduleNavigation(s, Ii, null, c, {
                  resolve: r.resolve,
                  reject: r.reject,
                  promise: r.promise,
                });
              }
            }
            dh(t) && this._events.next(t);
          } catch (r) {
            this.navigationTransitions.transitionAbortSubject.next(r);
          }
        });
        this.eventsSubscription.add(e);
      }
      resetRootComponentType(e) {
        this.routerState.root.component = e,
          this.navigationTransitions.rootComponentType = e;
      }
      initialNavigation() {
        this.setUpLocationChangeListener(),
          this.navigationTransitions.hasRequestedNavigation ||
          this.navigateToSyncWithBrowser(
            this.location.path(!0),
            Ii,
            this.stateManager.restoredState(),
          );
      }
      setUpLocationChangeListener() {
        this.nonRouterCurrentEntryChangeSubscription ??= this.stateManager
          .registerNonRouterCurrentEntryChangeListener((e, t) => {
            setTimeout(() => {
              this.navigateToSyncWithBrowser(e, "popstate", t);
            }, 0);
          });
      }
      navigateToSyncWithBrowser(e, t, r) {
        let o = { replaceUrl: !0 }, a = r?.navigationId ? r : null;
        if (r) {
          let c = m({}, r);
          delete c.navigationId,
            delete c.ɵrouterPageId,
            Object.keys(c).length !== 0 && (o.state = c);
        }
        let s = this.parseUrl(e);
        this.scheduleNavigation(s, t, a, o);
      }
      get url() {
        return this.serializeUrl(this.currentUrlTree);
      }
      getCurrentNavigation() {
        return this.navigationTransitions.currentNavigation;
      }
      get lastSuccessfulNavigation() {
        return this.navigationTransitions.lastSuccessfulNavigation;
      }
      resetConfig(e) {
        this.config = e.map(Go), this.navigated = !1;
      }
      ngOnDestroy() {
        this.dispose();
      }
      dispose() {
        this._events.unsubscribe(),
          this.navigationTransitions.complete(),
          this.nonRouterCurrentEntryChangeSubscription &&
          (this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),
            this.nonRouterCurrentEntryChangeSubscription = void 0),
          this.disposed = !0,
          this.eventsSubscription.unsubscribe();
      }
      createUrlTree(e, t = {}) {
        let {
            relativeTo: r,
            queryParams: o,
            fragment: a,
            queryParamsHandling: s,
            preserveFragment: c,
          } = t,
          d = c ? this.currentUrlTree.fragment : a,
          u = null;
        switch (s ?? this.options.defaultQueryParamsHandling) {
          case "merge":
            u = m(m({}, this.currentUrlTree.queryParams), o);
            break;
          case "preserve":
            u = this.currentUrlTree.queryParams;
            break;
          default:
            u = o || null;
        }
        u !== null && (u = this.removeEmptyProps(u));
        let h;
        try {
          let v = r ? r.snapshot : this.routerState.snapshot.root;
          h = hc(v);
        } catch {
          (typeof e[0] != "string" || e[0][0] !== "/") && (e = []),
            h = this.currentUrlTree.root;
        }
        return fc(h, e, u, d ?? null);
      }
      navigateByUrl(e, t = { skipLocationChange: !1 }) {
        let r = Ri(e) ? e : this.parseUrl(e),
          o = this.urlHandlingStrategy.merge(r, this.rawUrlTree);
        return this.scheduleNavigation(o, Ii, null, t);
      }
      navigate(e, t = { skipLocationChange: !1 }) {
        return lh(e), this.navigateByUrl(this.createUrlTree(e, t), t);
      }
      serializeUrl(e) {
        return this.urlSerializer.serialize(e);
      }
      parseUrl(e) {
        try {
          return this.urlSerializer.parse(e);
        } catch {
          return this.urlSerializer.parse("/");
        }
      }
      isActive(e, t) {
        let r;
        if (
          t === !0 ? r = m({}, sh) : t === !1 ? r = m({}, ch) : r = t, Ri(e)
        ) return Zs(this.currentUrlTree, e, r);
        let o = this.parseUrl(e);
        return Zs(this.currentUrlTree, o, r);
      }
      removeEmptyProps(e) {
        return Object.entries(e).reduce(
          (t, [r, o]) => (o != null && (t[r] = o), t),
          {},
        );
      }
      scheduleNavigation(e, t, r, o, a) {
        if (this.disposed) return Promise.resolve(!1);
        let s, c, d;
        a
          ? (s = a.resolve, c = a.reject, d = a.promise)
          : d = new Promise((h, v) => {
            s = h, c = v;
          });
        let u = this.pendingTasks.add();
        return ah(this, () => {
          queueMicrotask(() => this.pendingTasks.remove(u));
        }),
          this.navigationTransitions.handleNavigationRequest({
            source: t,
            restoredState: r,
            currentUrlTree: this.currentUrlTree,
            currentRawUrl: this.currentUrlTree,
            rawUrl: e,
            extras: o,
            resolve: s,
            reject: c,
            promise: d,
            currentSnapshot: this.routerState.snapshot,
            currentRouterState: this.routerState,
          }),
          d.catch((h) => Promise.reject(h));
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
    return n;
  })();
function lh(n) {
  for (let i = 0; i < n.length; i++) if (n[i] == null) throw new P(4008, !1);
}
function dh(n) {
  return !(n instanceof Pi) && !(n instanceof Wt);
}
var uh = new p("");
function Tc(n, ...i) {
  return ft([
    { provide: qo, multi: !0, useValue: n },
    [],
    { provide: Gt, useFactory: mh, deps: [Rc] },
    { provide: Vr, multi: !0, useFactory: hh },
    i.map((e) => e.ɵproviders),
  ]);
}
function mh(n) {
  return n.routerState.root;
}
function hh() {
  let n = l($);
  return (i) => {
    let e = n.get(nt);
    if (i !== e.components[0]) return;
    let t = n.get(Rc), r = n.get(fh);
    n.get(ph) === 1 && t.initialNavigation(),
      n.get(gh, null, Or.Optional)?.setUpPreloading(),
      n.get(uh, null, Or.Optional)?.init(),
      t.resetRootComponentType(e.componentTypes[0]),
      r.closed || (r.next(), r.complete(), r.unsubscribe());
  };
}
var fh = new p("", { factory: () => new w() }),
  ph = new p("", { providedIn: "root", factory: () => 1 });
var gh = new p("");
var Oc = [];
var bh = "@",
  vh = (() => {
    class n {
      doc;
      delegate;
      zone;
      animationType;
      moduleImpl;
      _rendererFactoryPromise = null;
      scheduler = null;
      injector = l($);
      loadingSchedulerFn = l(_h, { optional: !0 });
      _engine;
      constructor(e, t, r, o, a) {
        this.doc = e,
          this.delegate = t,
          this.zone = r,
          this.animationType = o,
          this.moduleImpl = a;
      }
      ngOnDestroy() {
        this._engine?.flush();
      }
      loadImpl() {
        let e = () =>
            this.moduleImpl ?? import("./chunk-Y4KM45WH.js").then((r) => r),
          t;
        return this.loadingSchedulerFn
          ? t = this.loadingSchedulerFn(e)
          : t = e(),
          t.catch((r) => {
            throw new P(5300, !1);
          }).then(({ ɵcreateEngine: r, ɵAnimationRendererFactory: o }) => {
            this._engine = r(this.animationType, this.doc);
            let a = new o(this.delegate, this._engine, this.zone);
            return this.delegate = a, a;
          });
      }
      createRenderer(e, t) {
        let r = this.delegate.createRenderer(e, t);
        if (r.ɵtype === 0) return r;
        typeof r.throwOnSyntheticProps == "boolean" &&
          (r.throwOnSyntheticProps = !1);
        let o = new Xo(r);
        return t?.data?.animation && !this._rendererFactoryPromise &&
          (this._rendererFactoryPromise = this.loadImpl()),
          this._rendererFactoryPromise?.then((a) => {
            let s = a.createRenderer(e, t);
            o.use(s),
              this.scheduler ??= this.injector.get(Ya, null, { optional: !0 }),
              this.scheduler?.notify(11);
          }).catch((a) => {
            o.use(r);
          }),
          o;
      }
      begin() {
        this.delegate.begin?.();
      }
      end() {
        this.delegate.end?.();
      }
      whenRenderingDone() {
        return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
      }
      static ɵfac = function (t) {
        Pr();
      };
      static ɵprov = f({ token: n, factory: n.ɵfac });
    }
    return n;
  })(),
  Xo = class {
    delegate;
    replay = [];
    ɵtype = 1;
    constructor(i) {
      this.delegate = i;
    }
    use(i) {
      if (this.delegate = i, this.replay !== null) {
        for (let e of this.replay) e(i);
        this.replay = null;
      }
    }
    get data() {
      return this.delegate.data;
    }
    destroy() {
      this.replay = null, this.delegate.destroy();
    }
    createElement(i, e) {
      return this.delegate.createElement(i, e);
    }
    createComment(i) {
      return this.delegate.createComment(i);
    }
    createText(i) {
      return this.delegate.createText(i);
    }
    get destroyNode() {
      return this.delegate.destroyNode;
    }
    appendChild(i, e) {
      this.delegate.appendChild(i, e);
    }
    insertBefore(i, e, t, r) {
      this.delegate.insertBefore(i, e, t, r);
    }
    removeChild(i, e, t) {
      this.delegate.removeChild(i, e, t);
    }
    selectRootElement(i, e) {
      return this.delegate.selectRootElement(i, e);
    }
    parentNode(i) {
      return this.delegate.parentNode(i);
    }
    nextSibling(i) {
      return this.delegate.nextSibling(i);
    }
    setAttribute(i, e, t, r) {
      this.delegate.setAttribute(i, e, t, r);
    }
    removeAttribute(i, e, t) {
      this.delegate.removeAttribute(i, e, t);
    }
    addClass(i, e) {
      this.delegate.addClass(i, e);
    }
    removeClass(i, e) {
      this.delegate.removeClass(i, e);
    }
    setStyle(i, e, t, r) {
      this.delegate.setStyle(i, e, t, r);
    }
    removeStyle(i, e, t) {
      this.delegate.removeStyle(i, e, t);
    }
    setProperty(i, e, t) {
      this.shouldReplay(e) && this.replay.push((r) => r.setProperty(i, e, t)),
        this.delegate.setProperty(i, e, t);
    }
    setValue(i, e) {
      this.delegate.setValue(i, e);
    }
    listen(i, e, t, r) {
      return this.shouldReplay(e) &&
        this.replay.push((o) => o.listen(i, e, t, r)),
        this.delegate.listen(i, e, t, r);
    }
    shouldReplay(i) {
      return this.replay !== null && i.startsWith(bh);
    }
  },
  _h = new p("");
function Fc(n = "animations") {
  return Fr("NgAsyncAnimations"),
    ft([{
      provide: $e,
      useFactory: (i, e, t) => new vh(i, e, t, n),
      deps: [A, Cn, x],
    }, {
      provide: xe,
      useValue: n === "noop" ? "NoopAnimations" : "BrowserAnimations",
    }]);
}
var Pc = { providers: [ps({ eventCoalescing: !0 }), Tc(Oc), Qr(), Fc()] };
var Hc = (() => {
    class n {
      _renderer;
      _elementRef;
      onChange = (e) => {};
      onTouched = () => {};
      constructor(e, t) {
        this._renderer = e, this._elementRef = t;
      }
      setProperty(e, t) {
        this._renderer.setProperty(this._elementRef.nativeElement, e, t);
      }
      registerOnTouched(e) {
        this.onTouched = e;
      }
      registerOnChange(e) {
        this.onChange = e;
      }
      setDisabledState(e) {
        this.setProperty("disabled", e);
      }
      static ɵfac = function (t) {
        return new (t || n)(Y(Le), Y(N));
      };
      static ɵdir = T({ type: n });
    }
    return n;
  })(),
  yh = (() => {
    class n extends Hc {
      static ɵfac = (() => {
        let e;
        return function (r) {
          return (e || (e = Ie(n)))(r || n);
        };
      })();
      static ɵdir = T({ type: n, features: [ce] });
    }
    return n;
  })(),
  Kn = new p("");
var xh = { provide: Kn, useExisting: it(() => Qn), multi: !0 };
function wh() {
  let n = Nt() ? Nt().getUserAgent() : "";
  return /android (\d+)/.test(n.toLowerCase());
}
var Ch = new p(""),
  Qn = (() => {
    class n extends Hc {
      _compositionMode;
      _composing = !1;
      constructor(e, t, r) {
        super(e, t),
          this._compositionMode = r,
          this._compositionMode == null && (this._compositionMode = !wh());
      }
      writeValue(e) {
        let t = e ?? "";
        this.setProperty("value", t);
      }
      _handleInput(e) {
        (!this._compositionMode || this._compositionMode && !this._composing) &&
          this.onChange(e);
      }
      _compositionStart() {
        this._composing = !0;
      }
      _compositionEnd(e) {
        this._composing = !1, this._compositionMode && this.onChange(e);
      }
      static ɵfac = function (t) {
        return new (t || n)(Y(Le), Y(N), Y(Ch, 8));
      };
      static ɵdir = T({
        type: n,
        selectors: [
          ["input", "formControlName", "", 3, "type", "checkbox"],
          ["textarea", "formControlName", ""],
          ["input", "formControl", "", 3, "type", "checkbox"],
          ["textarea", "formControl", ""],
          ["input", "ngModel", "", 3, "type", "checkbox"],
          ["textarea", "ngModel", ""],
          ["", "ngDefaultControl", ""],
        ],
        hostBindings: function (t, r) {
          t & 1 && J("input", function (a) {
            return r._handleInput(a.target.value);
          })("blur", function () {
            return r.onTouched();
          })("compositionstart", function () {
            return r._compositionStart();
          })("compositionend", function (a) {
            return r._compositionEnd(a.target.value);
          });
        },
        standalone: !1,
        features: [ge([xh]), ce],
      });
    }
    return n;
  })();
function st(n) {
  return n == null ||
    (typeof n == "string" || Array.isArray(n)) && n.length === 0;
}
function $c(n) {
  return n != null && typeof n.length == "number";
}
var Yi = new p(""),
  ea = new p(""),
  kh =
    /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  Un = class {
    static min(i) {
      return Eh(i);
    }
    static max(i) {
      return Dh(i);
    }
    static required(i) {
      return Mh(i);
    }
    static requiredTrue(i) {
      return Ih(i);
    }
    static email(i) {
      return Sh(i);
    }
    static minLength(i) {
      return Ah(i);
    }
    static maxLength(i) {
      return Rh(i);
    }
    static pattern(i) {
      return Th(i);
    }
    static nullValidator(i) {
      return Wc(i);
    }
    static compose(i) {
      return Kc(i);
    }
    static composeAsync(i) {
      return Qc(i);
    }
  };
function Eh(n) {
  return (i) => {
    if (st(i.value) || st(n)) return null;
    let e = parseFloat(i.value);
    return !isNaN(e) && e < n ? { min: { min: n, actual: i.value } } : null;
  };
}
function Dh(n) {
  return (i) => {
    if (st(i.value) || st(n)) return null;
    let e = parseFloat(i.value);
    return !isNaN(e) && e > n ? { max: { max: n, actual: i.value } } : null;
  };
}
function Mh(n) {
  return st(n.value) ? { required: !0 } : null;
}
function Ih(n) {
  return n.value === !0 ? null : { required: !0 };
}
function Sh(n) {
  return st(n.value) || kh.test(n.value) ? null : { email: !0 };
}
function Ah(n) {
  return (i) =>
    st(i.value) || !$c(i.value)
      ? null
      : i.value.length < n
      ? { minlength: { requiredLength: n, actualLength: i.value.length } }
      : null;
}
function Rh(n) {
  return (i) =>
    $c(i.value) && i.value.length > n
      ? { maxlength: { requiredLength: n, actualLength: i.value.length } }
      : null;
}
function Th(n) {
  if (!n) return Wc;
  let i, e;
  return typeof n == "string"
    ? (e = "",
      n.charAt(0) !== "^" && (e += "^"),
      e += n,
      n.charAt(n.length - 1) !== "$" && (e += "$"),
      i = new RegExp(e))
    : (e = n.toString(), i = n),
    (t) => {
      if (st(t.value)) return null;
      let r = t.value;
      return i.test(r)
        ? null
        : { pattern: { requiredPattern: e, actualValue: r } };
    };
}
function Wc(n) {
  return null;
}
function Gc(n) {
  return n != null;
}
function qc(n) {
  return dn(n) ? fe(n) : n;
}
function Yc(n) {
  let i = {};
  return n.forEach((e) => {
    i = e != null ? m(m({}, i), e) : i;
  }),
    Object.keys(i).length === 0 ? null : i;
}
function Xc(n, i) {
  return i.map((e) => e(n));
}
function Oh(n) {
  return !n.validate;
}
function Zc(n) {
  return n.map((i) => Oh(i) ? i : (e) => i.validate(e));
}
function Kc(n) {
  if (!n) return null;
  let i = n.filter(Gc);
  return i.length == 0 ? null : function (e) {
    return Yc(Xc(e, i));
  };
}
function ta(n) {
  return n != null ? Kc(Zc(n)) : null;
}
function Qc(n) {
  if (!n) return null;
  let i = n.filter(Gc);
  return i.length == 0 ? null : function (e) {
    let t = Xc(e, i).map(qc);
    return on(t).pipe(_(Yc));
  };
}
function ia(n) {
  return n != null ? Qc(Zc(n)) : null;
}
function Nc(n, i) {
  return n === null ? [i] : Array.isArray(n) ? [...n, i] : [n, i];
}
function Jc(n) {
  return n._rawValidators;
}
function el(n) {
  return n._rawAsyncValidators;
}
function Zo(n) {
  return n ? Array.isArray(n) ? n : [n] : [];
}
function Hn(n, i) {
  return Array.isArray(n) ? n.includes(i) : n === i;
}
function Lc(n, i) {
  let e = Zo(i);
  return Zo(n).forEach((r) => {
    Hn(e, r) || e.push(r);
  }),
    e;
}
function Vc(n, i) {
  return Zo(i).filter((e) => !Hn(n, e));
}
var $n = class {
    get value() {
      return this.control ? this.control.value : null;
    }
    get valid() {
      return this.control ? this.control.valid : null;
    }
    get invalid() {
      return this.control ? this.control.invalid : null;
    }
    get pending() {
      return this.control ? this.control.pending : null;
    }
    get disabled() {
      return this.control ? this.control.disabled : null;
    }
    get enabled() {
      return this.control ? this.control.enabled : null;
    }
    get errors() {
      return this.control ? this.control.errors : null;
    }
    get pristine() {
      return this.control ? this.control.pristine : null;
    }
    get dirty() {
      return this.control ? this.control.dirty : null;
    }
    get touched() {
      return this.control ? this.control.touched : null;
    }
    get status() {
      return this.control ? this.control.status : null;
    }
    get untouched() {
      return this.control ? this.control.untouched : null;
    }
    get statusChanges() {
      return this.control ? this.control.statusChanges : null;
    }
    get valueChanges() {
      return this.control ? this.control.valueChanges : null;
    }
    get path() {
      return null;
    }
    _composedValidatorFn;
    _composedAsyncValidatorFn;
    _rawValidators = [];
    _rawAsyncValidators = [];
    _setValidators(i) {
      this._rawValidators = i || [],
        this._composedValidatorFn = ta(this._rawValidators);
    }
    _setAsyncValidators(i) {
      this._rawAsyncValidators = i || [],
        this._composedAsyncValidatorFn = ia(this._rawAsyncValidators);
    }
    get validator() {
      return this._composedValidatorFn || null;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn || null;
    }
    _onDestroyCallbacks = [];
    _registerOnDestroy(i) {
      this._onDestroyCallbacks.push(i);
    }
    _invokeOnDestroyCallbacks() {
      this._onDestroyCallbacks.forEach((i) => i()),
        this._onDestroyCallbacks = [];
    }
    reset(i = void 0) {
      this.control && this.control.reset(i);
    }
    hasError(i, e) {
      return this.control ? this.control.hasError(i, e) : !1;
    }
    getError(i, e) {
      return this.control ? this.control.getError(i, e) : null;
    }
  },
  Dt = class extends $n {
    name;
    get formDirective() {
      return null;
    }
    get path() {
      return null;
    }
  },
  Mt = class extends $n {
    _parent = null;
    name = null;
    valueAccessor = null;
  },
  Ko = class {
    _cd;
    constructor(i) {
      this._cd = i;
    }
    get isTouched() {
      return this._cd?.control?._touched?.(), !!this._cd?.control?.touched;
    }
    get isUntouched() {
      return !!this._cd?.control?.untouched;
    }
    get isPristine() {
      return this._cd?.control?._pristine?.(), !!this._cd?.control?.pristine;
    }
    get isDirty() {
      return !!this._cd?.control?.dirty;
    }
    get isValid() {
      return this._cd?.control?._status?.(), !!this._cd?.control?.valid;
    }
    get isInvalid() {
      return !!this._cd?.control?.invalid;
    }
    get isPending() {
      return !!this._cd?.control?.pending;
    }
    get isSubmitted() {
      return this._cd?._submitted?.(), !!this._cd?.submitted;
    }
  },
  Fh = {
    "[class.ng-untouched]": "isUntouched",
    "[class.ng-touched]": "isTouched",
    "[class.ng-pristine]": "isPristine",
    "[class.ng-dirty]": "isDirty",
    "[class.ng-valid]": "isValid",
    "[class.ng-invalid]": "isInvalid",
    "[class.ng-pending]": "isPending",
  },
  iv = V(m({}, Fh), { "[class.ng-submitted]": "isSubmitted" }),
  tl = (() => {
    class n extends Ko {
      constructor(e) {
        super(e);
      }
      static ɵfac = function (t) {
        return new (t || n)(Y(Mt, 2));
      };
      static ɵdir = T({
        type: n,
        selectors: [["", "formControlName", ""], ["", "ngModel", ""], [
          "",
          "formControl",
          "",
        ]],
        hostVars: 14,
        hostBindings: function (t, r) {
          t & 2 &&
            j("ng-untouched", r.isUntouched)("ng-touched", r.isTouched)(
              "ng-pristine",
              r.isPristine,
            )("ng-dirty", r.isDirty)("ng-valid", r.isValid)(
              "ng-invalid",
              r.isInvalid,
            )("ng-pending", r.isPending);
        },
        standalone: !1,
        features: [ce],
      });
    }
    return n;
  })();
var Hi = "VALID",
  zn = "INVALID",
  Xt = "PENDING",
  $i = "DISABLED",
  ct = class {},
  Wn = class extends ct {
    value;
    source;
    constructor(i, e) {
      super(), this.value = i, this.source = e;
    }
  },
  Gi = class extends ct {
    pristine;
    source;
    constructor(i, e) {
      super(), this.pristine = i, this.source = e;
    }
  },
  qi = class extends ct {
    touched;
    source;
    constructor(i, e) {
      super(), this.touched = i, this.source = e;
    }
  },
  Zt = class extends ct {
    status;
    source;
    constructor(i, e) {
      super(), this.status = i, this.source = e;
    }
  },
  Qo = class extends ct {
    source;
    constructor(i) {
      super(), this.source = i;
    }
  },
  Jo = class extends ct {
    source;
    constructor(i) {
      super(), this.source = i;
    }
  };
function il(n) {
  return (Jn(n) ? n.validators : n) || null;
}
function Ph(n) {
  return Array.isArray(n) ? ta(n) : n || null;
}
function nl(n, i) {
  return (Jn(i) ? i.asyncValidators : n) || null;
}
function Nh(n) {
  return Array.isArray(n) ? ia(n) : n || null;
}
function Jn(n) {
  return n != null && !Array.isArray(n) && typeof n == "object";
}
function Lh(n, i, e) {
  let t = n.controls;
  if (!(i ? Object.keys(t) : t).length) throw new P(1e3, "");
  if (!t[e]) throw new P(1001, "");
}
function Vh(n, i, e) {
  n._forEachChild((t, r) => {
    if (e[r] === void 0) throw new P(1002, "");
  });
}
var Gn = class {
    _pendingDirty = !1;
    _hasOwnPendingAsyncValidator = null;
    _pendingTouched = !1;
    _onCollectionChange = () => {};
    _updateOn;
    _parent = null;
    _asyncValidationSubscription;
    _composedValidatorFn;
    _composedAsyncValidatorFn;
    _rawValidators;
    _rawAsyncValidators;
    value;
    constructor(i, e) {
      this._assignValidators(i), this._assignAsyncValidators(e);
    }
    get validator() {
      return this._composedValidatorFn;
    }
    set validator(i) {
      this._rawValidators = this._composedValidatorFn = i;
    }
    get asyncValidator() {
      return this._composedAsyncValidatorFn;
    }
    set asyncValidator(i) {
      this._rawAsyncValidators = this._composedAsyncValidatorFn = i;
    }
    get parent() {
      return this._parent;
    }
    get status() {
      return je(this.statusReactive);
    }
    set status(i) {
      je(() => this.statusReactive.set(i));
    }
    _status = Ye(() => this.statusReactive());
    statusReactive = gt(void 0);
    get valid() {
      return this.status === Hi;
    }
    get invalid() {
      return this.status === zn;
    }
    get pending() {
      return this.status == Xt;
    }
    get disabled() {
      return this.status === $i;
    }
    get enabled() {
      return this.status !== $i;
    }
    errors;
    get pristine() {
      return je(this.pristineReactive);
    }
    set pristine(i) {
      je(() => this.pristineReactive.set(i));
    }
    _pristine = Ye(() => this.pristineReactive());
    pristineReactive = gt(!0);
    get dirty() {
      return !this.pristine;
    }
    get touched() {
      return je(this.touchedReactive);
    }
    set touched(i) {
      je(() => this.touchedReactive.set(i));
    }
    _touched = Ye(() => this.touchedReactive());
    touchedReactive = gt(!1);
    get untouched() {
      return !this.touched;
    }
    _events = new w();
    events = this._events.asObservable();
    valueChanges;
    statusChanges;
    get updateOn() {
      return this._updateOn
        ? this._updateOn
        : this.parent
        ? this.parent.updateOn
        : "change";
    }
    setValidators(i) {
      this._assignValidators(i);
    }
    setAsyncValidators(i) {
      this._assignAsyncValidators(i);
    }
    addValidators(i) {
      this.setValidators(Lc(i, this._rawValidators));
    }
    addAsyncValidators(i) {
      this.setAsyncValidators(Lc(i, this._rawAsyncValidators));
    }
    removeValidators(i) {
      this.setValidators(Vc(i, this._rawValidators));
    }
    removeAsyncValidators(i) {
      this.setAsyncValidators(Vc(i, this._rawAsyncValidators));
    }
    hasValidator(i) {
      return Hn(this._rawValidators, i);
    }
    hasAsyncValidator(i) {
      return Hn(this._rawAsyncValidators, i);
    }
    clearValidators() {
      this.validator = null;
    }
    clearAsyncValidators() {
      this.asyncValidator = null;
    }
    markAsTouched(i = {}) {
      let e = this.touched === !1;
      this.touched = !0;
      let t = i.sourceControl ?? this;
      this._parent && !i.onlySelf &&
      this._parent.markAsTouched(V(m({}, i), { sourceControl: t })),
        e && i.emitEvent !== !1 && this._events.next(new qi(!0, t));
    }
    markAllAsTouched(i = {}) {
      this.markAsTouched({
        onlySelf: !0,
        emitEvent: i.emitEvent,
        sourceControl: this,
      }), this._forEachChild((e) => e.markAllAsTouched(i));
    }
    markAsUntouched(i = {}) {
      let e = this.touched === !0;
      this.touched = !1, this._pendingTouched = !1;
      let t = i.sourceControl ?? this;
      this._forEachChild((r) => {
        r.markAsUntouched({
          onlySelf: !0,
          emitEvent: i.emitEvent,
          sourceControl: t,
        });
      }),
        this._parent && !i.onlySelf && this._parent._updateTouched(i, t),
        e && i.emitEvent !== !1 && this._events.next(new qi(!1, t));
    }
    markAsDirty(i = {}) {
      let e = this.pristine === !0;
      this.pristine = !1;
      let t = i.sourceControl ?? this;
      this._parent && !i.onlySelf &&
      this._parent.markAsDirty(V(m({}, i), { sourceControl: t })),
        e && i.emitEvent !== !1 && this._events.next(new Gi(!1, t));
    }
    markAsPristine(i = {}) {
      let e = this.pristine === !1;
      this.pristine = !0, this._pendingDirty = !1;
      let t = i.sourceControl ?? this;
      this._forEachChild((r) => {
        r.markAsPristine({ onlySelf: !0, emitEvent: i.emitEvent });
      }),
        this._parent && !i.onlySelf && this._parent._updatePristine(i, t),
        e && i.emitEvent !== !1 && this._events.next(new Gi(!0, t));
    }
    markAsPending(i = {}) {
      this.status = Xt;
      let e = i.sourceControl ?? this;
      i.emitEvent !== !1 &&
      (this._events.next(new Zt(this.status, e)),
        this.statusChanges.emit(this.status)),
        this._parent && !i.onlySelf &&
        this._parent.markAsPending(V(m({}, i), { sourceControl: e }));
    }
    disable(i = {}) {
      let e = this._parentMarkedDirty(i.onlySelf);
      this.status = $i,
        this.errors = null,
        this._forEachChild((r) => {
          r.disable(V(m({}, i), { onlySelf: !0 }));
        }),
        this._updateValue();
      let t = i.sourceControl ?? this;
      i.emitEvent !== !1 &&
      (this._events.next(new Wn(this.value, t)),
        this._events.next(new Zt(this.status, t)),
        this.valueChanges.emit(this.value),
        this.statusChanges.emit(this.status)),
        this._updateAncestors(V(m({}, i), { skipPristineCheck: e }), this),
        this._onDisabledChange.forEach((r) => r(!0));
    }
    enable(i = {}) {
      let e = this._parentMarkedDirty(i.onlySelf);
      this.status = Hi,
        this._forEachChild((t) => {
          t.enable(V(m({}, i), { onlySelf: !0 }));
        }),
        this.updateValueAndValidity({ onlySelf: !0, emitEvent: i.emitEvent }),
        this._updateAncestors(V(m({}, i), { skipPristineCheck: e }), this),
        this._onDisabledChange.forEach((t) => t(!1));
    }
    _updateAncestors(i, e) {
      this._parent && !i.onlySelf &&
        (this._parent.updateValueAndValidity(i),
          i.skipPristineCheck || this._parent._updatePristine({}, e),
          this._parent._updateTouched({}, e));
    }
    setParent(i) {
      this._parent = i;
    }
    getRawValue() {
      return this.value;
    }
    updateValueAndValidity(i = {}) {
      if (this._setInitialStatus(), this._updateValue(), this.enabled) {
        let t = this._cancelExistingSubscription();
        this.errors = this._runValidator(),
          this.status = this._calculateStatus(),
          (this.status === Hi || this.status === Xt) &&
          this._runAsyncValidator(t, i.emitEvent);
      }
      let e = i.sourceControl ?? this;
      i.emitEvent !== !1 &&
      (this._events.next(new Wn(this.value, e)),
        this._events.next(new Zt(this.status, e)),
        this.valueChanges.emit(this.value),
        this.statusChanges.emit(this.status)),
        this._parent && !i.onlySelf &&
        this._parent.updateValueAndValidity(V(m({}, i), { sourceControl: e }));
    }
    _updateTreeValidity(i = { emitEvent: !0 }) {
      this._forEachChild((e) => e._updateTreeValidity(i)),
        this.updateValueAndValidity({ onlySelf: !0, emitEvent: i.emitEvent });
    }
    _setInitialStatus() {
      this.status = this._allControlsDisabled() ? $i : Hi;
    }
    _runValidator() {
      return this.validator ? this.validator(this) : null;
    }
    _runAsyncValidator(i, e) {
      if (this.asyncValidator) {
        this.status = Xt,
          this._hasOwnPendingAsyncValidator = { emitEvent: e !== !1 };
        let t = qc(this.asyncValidator(this));
        this._asyncValidationSubscription = t.subscribe((r) => {
          this._hasOwnPendingAsyncValidator = null,
            this.setErrors(r, { emitEvent: e, shouldHaveEmitted: i });
        });
      }
    }
    _cancelExistingSubscription() {
      if (this._asyncValidationSubscription) {
        this._asyncValidationSubscription.unsubscribe();
        let i = this._hasOwnPendingAsyncValidator?.emitEvent ?? !1;
        return this._hasOwnPendingAsyncValidator = null, i;
      }
      return !1;
    }
    setErrors(i, e = {}) {
      this.errors = i,
        this._updateControlsErrors(
          e.emitEvent !== !1,
          this,
          e.shouldHaveEmitted,
        );
    }
    get(i) {
      let e = i;
      return e == null ||
          (Array.isArray(e) || (e = e.split(".")), e.length === 0)
        ? null
        : e.reduce((t, r) => t && t._find(r), this);
    }
    getError(i, e) {
      let t = e ? this.get(e) : this;
      return t && t.errors ? t.errors[i] : null;
    }
    hasError(i, e) {
      return !!this.getError(i, e);
    }
    get root() {
      let i = this;
      for (; i._parent;) i = i._parent;
      return i;
    }
    _updateControlsErrors(i, e, t) {
      this.status = this._calculateStatus(),
        i && this.statusChanges.emit(this.status),
        (i || t) && this._events.next(new Zt(this.status, e)),
        this._parent && this._parent._updateControlsErrors(i, e, t);
    }
    _initObservables() {
      this.valueChanges = new Q(), this.statusChanges = new Q();
    }
    _calculateStatus() {
      return this._allControlsDisabled()
        ? $i
        : this.errors
        ? zn
        : this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(Xt)
        ? Xt
        : this._anyControlsHaveStatus(zn)
        ? zn
        : Hi;
    }
    _anyControlsHaveStatus(i) {
      return this._anyControls((e) => e.status === i);
    }
    _anyControlsDirty() {
      return this._anyControls((i) => i.dirty);
    }
    _anyControlsTouched() {
      return this._anyControls((i) => i.touched);
    }
    _updatePristine(i, e) {
      let t = !this._anyControlsDirty(), r = this.pristine !== t;
      this.pristine = t,
        this._parent && !i.onlySelf && this._parent._updatePristine(i, e),
        r && this._events.next(new Gi(this.pristine, e));
    }
    _updateTouched(i = {}, e) {
      this.touched = this._anyControlsTouched(),
        this._events.next(new qi(this.touched, e)),
        this._parent && !i.onlySelf && this._parent._updateTouched(i, e);
    }
    _onDisabledChange = [];
    _registerOnCollectionChange(i) {
      this._onCollectionChange = i;
    }
    _setUpdateStrategy(i) {
      Jn(i) && i.updateOn != null && (this._updateOn = i.updateOn);
    }
    _parentMarkedDirty(i) {
      let e = this._parent && this._parent.dirty;
      return !i && !!e && !this._parent._anyControlsDirty();
    }
    _find(i) {
      return null;
    }
    _assignValidators(i) {
      this._rawValidators = Array.isArray(i) ? i.slice() : i,
        this._composedValidatorFn = Ph(this._rawValidators);
    }
    _assignAsyncValidators(i) {
      this._rawAsyncValidators = Array.isArray(i) ? i.slice() : i,
        this._composedAsyncValidatorFn = Nh(this._rawAsyncValidators);
    }
  },
  qn = class extends Gn {
    constructor(i, e, t) {
      super(il(e), nl(t, e)),
        this.controls = i,
        this._initObservables(),
        this._setUpdateStrategy(e),
        this._setUpControls(),
        this.updateValueAndValidity({
          onlySelf: !0,
          emitEvent: !!this.asyncValidator,
        });
    }
    controls;
    registerControl(i, e) {
      return this.controls[i]
        ? this.controls[i]
        : (this.controls[i] = e,
          e.setParent(this),
          e._registerOnCollectionChange(this._onCollectionChange),
          e);
    }
    addControl(i, e, t = {}) {
      this.registerControl(i, e),
        this.updateValueAndValidity({ emitEvent: t.emitEvent }),
        this._onCollectionChange();
    }
    removeControl(i, e = {}) {
      this.controls[i] &&
      this.controls[i]._registerOnCollectionChange(() => {}),
        delete this.controls[i],
        this.updateValueAndValidity({ emitEvent: e.emitEvent }),
        this._onCollectionChange();
    }
    setControl(i, e, t = {}) {
      this.controls[i] &&
      this.controls[i]._registerOnCollectionChange(() => {}),
        delete this.controls[i],
        e && this.registerControl(i, e),
        this.updateValueAndValidity({ emitEvent: t.emitEvent }),
        this._onCollectionChange();
    }
    contains(i) {
      return this.controls.hasOwnProperty(i) && this.controls[i].enabled;
    }
    setValue(i, e = {}) {
      Vh(this, !0, i),
        Object.keys(i).forEach((t) => {
          Lh(this, !0, t),
            this.controls[t].setValue(i[t], {
              onlySelf: !0,
              emitEvent: e.emitEvent,
            });
        }),
        this.updateValueAndValidity(e);
    }
    patchValue(i, e = {}) {
      i != null && (Object.keys(i).forEach((t) => {
        let r = this.controls[t];
        r && r.patchValue(i[t], { onlySelf: !0, emitEvent: e.emitEvent });
      }),
        this.updateValueAndValidity(e));
    }
    reset(i = {}, e = {}) {
      this._forEachChild((t, r) => {
        t.reset(i ? i[r] : null, { onlySelf: !0, emitEvent: e.emitEvent });
      }),
        this._updatePristine(e, this),
        this._updateTouched(e, this),
        this.updateValueAndValidity(e);
    }
    getRawValue() {
      return this._reduceChildren({}, (i, e, t) => (i[t] = e.getRawValue(), i));
    }
    _syncPendingControls() {
      let i = this._reduceChildren(
        !1,
        (e, t) => t._syncPendingControls() ? !0 : e,
      );
      return i && this.updateValueAndValidity({ onlySelf: !0 }), i;
    }
    _forEachChild(i) {
      Object.keys(this.controls).forEach((e) => {
        let t = this.controls[e];
        t && i(t, e);
      });
    }
    _setUpControls() {
      this._forEachChild((i) => {
        i.setParent(this),
          i._registerOnCollectionChange(this._onCollectionChange);
      });
    }
    _updateValue() {
      this.value = this._reduceValue();
    }
    _anyControls(i) {
      for (let [e, t] of Object.entries(this.controls)) {
        if (this.contains(e) && i(t)) return !0;
      }
      return !1;
    }
    _reduceValue() {
      let i = {};
      return this._reduceChildren(
        i,
        (e, t, r) => ((t.enabled || this.disabled) && (e[r] = t.value), e),
      );
    }
    _reduceChildren(i, e) {
      let t = i;
      return this._forEachChild((r, o) => {
        t = e(t, r, o);
      }),
        t;
    }
    _allControlsDisabled() {
      for (let i of Object.keys(this.controls)) {
        if (this.controls[i].enabled) return !1;
      }
      return Object.keys(this.controls).length > 0 || this.disabled;
    }
    _find(i) {
      return this.controls.hasOwnProperty(i) ? this.controls[i] : null;
    }
  };
var er = new p("", { providedIn: "root", factory: () => na }), na = "always";
function jh(n, i) {
  return [...i.path, n];
}
function Yn(n, i, e = na) {
  ra(n, i),
    i.valueAccessor.writeValue(n.value),
    (n.disabled || e === "always") &&
    i.valueAccessor.setDisabledState?.(n.disabled),
    zh(n, i),
    Hh(n, i),
    Uh(n, i),
    Bh(n, i);
}
function jc(n, i, e = !0) {
  let t = () => {};
  i.valueAccessor &&
  (i.valueAccessor.registerOnChange(t), i.valueAccessor.registerOnTouched(t)),
    Zn(n, i),
    n &&
    (i._invokeOnDestroyCallbacks(), n._registerOnCollectionChange(() => {}));
}
function Xn(n, i) {
  n.forEach((e) => {
    e.registerOnValidatorChange && e.registerOnValidatorChange(i);
  });
}
function Bh(n, i) {
  if (i.valueAccessor.setDisabledState) {
    let e = (t) => {
      i.valueAccessor.setDisabledState(t);
    };
    n.registerOnDisabledChange(e),
      i._registerOnDestroy(() => {
        n._unregisterOnDisabledChange(e);
      });
  }
}
function ra(n, i) {
  let e = Jc(n);
  i.validator !== null
    ? n.setValidators(Nc(e, i.validator))
    : typeof e == "function" && n.setValidators([e]);
  let t = el(n);
  i.asyncValidator !== null
    ? n.setAsyncValidators(Nc(t, i.asyncValidator))
    : typeof t == "function" && n.setAsyncValidators([t]);
  let r = () => n.updateValueAndValidity();
  Xn(i._rawValidators, r), Xn(i._rawAsyncValidators, r);
}
function Zn(n, i) {
  let e = !1;
  if (n !== null) {
    if (i.validator !== null) {
      let r = Jc(n);
      if (Array.isArray(r) && r.length > 0) {
        let o = r.filter((a) => a !== i.validator);
        o.length !== r.length && (e = !0, n.setValidators(o));
      }
    }
    if (i.asyncValidator !== null) {
      let r = el(n);
      if (Array.isArray(r) && r.length > 0) {
        let o = r.filter((a) => a !== i.asyncValidator);
        o.length !== r.length && (e = !0, n.setAsyncValidators(o));
      }
    }
  }
  let t = () => {};
  return Xn(i._rawValidators, t), Xn(i._rawAsyncValidators, t), e;
}
function zh(n, i) {
  i.valueAccessor.registerOnChange((e) => {
    n._pendingValue = e,
      n._pendingChange = !0,
      n._pendingDirty = !0,
      n.updateOn === "change" && rl(n, i);
  });
}
function Uh(n, i) {
  i.valueAccessor.registerOnTouched(() => {
    n._pendingTouched = !0,
      n.updateOn === "blur" && n._pendingChange && rl(n, i),
      n.updateOn !== "submit" && n.markAsTouched();
  });
}
function rl(n, i) {
  n._pendingDirty && n.markAsDirty(),
    n.setValue(n._pendingValue, { emitModelToViewChange: !1 }),
    i.viewToModelUpdate(n._pendingValue),
    n._pendingChange = !1;
}
function Hh(n, i) {
  let e = (t, r) => {
    i.valueAccessor.writeValue(t), r && i.viewToModelUpdate(t);
  };
  n.registerOnChange(e),
    i._registerOnDestroy(() => {
      n._unregisterOnChange(e);
    });
}
function ol(n, i) {
  n == null, ra(n, i);
}
function $h(n, i) {
  return Zn(n, i);
}
function Wh(n, i) {
  if (!n.hasOwnProperty("model")) return !1;
  let e = n.model;
  return e.isFirstChange() ? !0 : !Object.is(i, e.currentValue);
}
function Gh(n) {
  return Object.getPrototypeOf(n.constructor) === yh;
}
function al(n, i) {
  n._syncPendingControls(),
    i.forEach((e) => {
      let t = e.control;
      t.updateOn === "submit" && t._pendingChange &&
        (e.viewToModelUpdate(t._pendingValue), t._pendingChange = !1);
    });
}
function qh(n, i) {
  if (!i) return null;
  Array.isArray(i);
  let e, t, r;
  return i.forEach((o) => {
    o.constructor === Qn ? e = o : Gh(o) ? t = o : r = o;
  }),
    r || t || e || null;
}
function Yh(n, i) {
  let e = n.indexOf(i);
  e > -1 && n.splice(e, 1);
}
var Xh = { provide: Dt, useExisting: it(() => oa) },
  Wi = Promise.resolve(),
  oa = (() => {
    class n extends Dt {
      callSetDisabledState;
      get submitted() {
        return je(this.submittedReactive);
      }
      _submitted = Ye(() => this.submittedReactive());
      submittedReactive = gt(!1);
      _directives = new Set();
      form;
      ngSubmit = new Q();
      options;
      constructor(e, t, r) {
        super(),
          this.callSetDisabledState = r,
          this.form = new qn({}, ta(e), ia(t));
      }
      ngAfterViewInit() {
        this._setUpdateStrategy();
      }
      get formDirective() {
        return this;
      }
      get control() {
        return this.form;
      }
      get path() {
        return [];
      }
      get controls() {
        return this.form.controls;
      }
      addControl(e) {
        Wi.then(() => {
          let t = this._findContainer(e.path);
          e.control = t.registerControl(e.name, e.control),
            Yn(e.control, e, this.callSetDisabledState),
            e.control.updateValueAndValidity({ emitEvent: !1 }),
            this._directives.add(e);
        });
      }
      getControl(e) {
        return this.form.get(e.path);
      }
      removeControl(e) {
        Wi.then(() => {
          let t = this._findContainer(e.path);
          t && t.removeControl(e.name), this._directives.delete(e);
        });
      }
      addFormGroup(e) {
        Wi.then(() => {
          let t = this._findContainer(e.path), r = new qn({});
          ol(r, e),
            t.registerControl(e.name, r),
            r.updateValueAndValidity({ emitEvent: !1 });
        });
      }
      removeFormGroup(e) {
        Wi.then(() => {
          let t = this._findContainer(e.path);
          t && t.removeControl(e.name);
        });
      }
      getFormGroup(e) {
        return this.form.get(e.path);
      }
      updateModel(e, t) {
        Wi.then(() => {
          this.form.get(e.path).setValue(t);
        });
      }
      setValue(e) {
        this.control.setValue(e);
      }
      onSubmit(e) {
        return this.submittedReactive.set(!0),
          al(this.form, this._directives),
          this.ngSubmit.emit(e),
          e?.target?.method === "dialog";
      }
      onReset() {
        this.resetForm();
      }
      resetForm(e = void 0) {
        this.form.reset(e), this.submittedReactive.set(!1);
      }
      _setUpdateStrategy() {
        this.options && this.options.updateOn != null &&
          (this.form._updateOn = this.options.updateOn);
      }
      _findContainer(e) {
        return e.pop(), e.length ? this.form.get(e) : this.form;
      }
      static ɵfac = function (t) {
        return new (t || n)(Y(Yi, 10), Y(ea, 10), Y(er, 8));
      };
      static ɵdir = T({
        type: n,
        selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", ""], [
          "ng-form",
        ], ["", "ngForm", ""]],
        hostBindings: function (t, r) {
          t & 1 && J("submit", function (a) {
            return r.onSubmit(a);
          })("reset", function () {
            return r.onReset();
          });
        },
        inputs: { options: [0, "ngFormOptions", "options"] },
        outputs: { ngSubmit: "ngSubmit" },
        exportAs: ["ngForm"],
        standalone: !1,
        features: [ge([Xh]), ce],
      });
    }
    return n;
  })();
function Bc(n, i) {
  let e = n.indexOf(i);
  e > -1 && n.splice(e, 1);
}
function zc(n) {
  return typeof n == "object" && n !== null && Object.keys(n).length === 2 &&
    "value" in n && "disabled" in n;
}
var sl = class extends Gn {
  defaultValue = null;
  _onChange = [];
  _pendingValue;
  _pendingChange = !1;
  constructor(i = null, e, t) {
    super(il(e), nl(t, e)),
      this._applyFormState(i),
      this._setUpdateStrategy(e),
      this._initObservables(),
      this.updateValueAndValidity({
        onlySelf: !0,
        emitEvent: !!this.asyncValidator,
      }),
      Jn(e) && (e.nonNullable || e.initialValueIsDefault) &&
      (zc(i) ? this.defaultValue = i.value : this.defaultValue = i);
  }
  setValue(i, e = {}) {
    this.value = this._pendingValue = i,
      this._onChange.length && e.emitModelToViewChange !== !1 &&
      this._onChange.forEach((t) =>
        t(this.value, e.emitViewToModelChange !== !1)
      ),
      this.updateValueAndValidity(e);
  }
  patchValue(i, e = {}) {
    this.setValue(i, e);
  }
  reset(i = this.defaultValue, e = {}) {
    this._applyFormState(i),
      this.markAsPristine(e),
      this.markAsUntouched(e),
      this.setValue(this.value, e),
      this._pendingChange = !1;
  }
  _updateValue() {}
  _anyControls(i) {
    return !1;
  }
  _allControlsDisabled() {
    return this.disabled;
  }
  registerOnChange(i) {
    this._onChange.push(i);
  }
  _unregisterOnChange(i) {
    Bc(this._onChange, i);
  }
  registerOnDisabledChange(i) {
    this._onDisabledChange.push(i);
  }
  _unregisterOnDisabledChange(i) {
    Bc(this._onDisabledChange, i);
  }
  _forEachChild(i) {}
  _syncPendingControls() {
    return this.updateOn === "submit" &&
        (this._pendingDirty && this.markAsDirty(),
          this._pendingTouched && this.markAsTouched(),
          this._pendingChange)
      ? (this.setValue(this._pendingValue, {
        onlySelf: !0,
        emitModelToViewChange: !1,
      }),
        !0)
      : !1;
  }
  _applyFormState(i) {
    zc(i)
      ? (this.value = this._pendingValue = i.value,
        i.disabled
          ? this.disable({ onlySelf: !0, emitEvent: !1 })
          : this.enable({ onlySelf: !0, emitEvent: !1 }))
      : this.value = this._pendingValue = i;
  }
};
var Zh = (n) => n instanceof sl;
var Kh = { provide: Mt, useExisting: it(() => aa) },
  Uc = Promise.resolve(),
  aa = (() => {
    class n extends Mt {
      _changeDetectorRef;
      callSetDisabledState;
      control = new sl();
      static ngAcceptInputType_isDisabled;
      _registered = !1;
      viewModel;
      name = "";
      isDisabled;
      model;
      options;
      update = new Q();
      constructor(e, t, r, o, a, s) {
        super(),
          this._changeDetectorRef = a,
          this.callSetDisabledState = s,
          this._parent = e,
          this._setValidators(t),
          this._setAsyncValidators(r),
          this.valueAccessor = qh(this, o);
      }
      ngOnChanges(e) {
        if (this._checkForErrors(), !this._registered || "name" in e) {
          if (this._registered && (this._checkName(), this.formDirective)) {
            let t = e.name.previousValue;
            this.formDirective.removeControl({
              name: t,
              path: this._getPath(t),
            });
          }
          this._setUpControl();
        }
        "isDisabled" in e && this._updateDisabled(e),
          Wh(e, this.viewModel) &&
          (this._updateValue(this.model), this.viewModel = this.model);
      }
      ngOnDestroy() {
        this.formDirective && this.formDirective.removeControl(this);
      }
      get path() {
        return this._getPath(this.name);
      }
      get formDirective() {
        return this._parent ? this._parent.formDirective : null;
      }
      viewToModelUpdate(e) {
        this.viewModel = e, this.update.emit(e);
      }
      _setUpControl() {
        this._setUpdateStrategy(),
          this._isStandalone()
            ? this._setUpStandalone()
            : this.formDirective.addControl(this),
          this._registered = !0;
      }
      _setUpdateStrategy() {
        this.options && this.options.updateOn != null &&
          (this.control._updateOn = this.options.updateOn);
      }
      _isStandalone() {
        return !this._parent || !!(this.options && this.options.standalone);
      }
      _setUpStandalone() {
        Yn(this.control, this, this.callSetDisabledState),
          this.control.updateValueAndValidity({ emitEvent: !1 });
      }
      _checkForErrors() {
        this._isStandalone() || this._checkParentType(), this._checkName();
      }
      _checkParentType() {}
      _checkName() {
        this.options && this.options.name && (this.name = this.options.name),
          !this._isStandalone() && this.name;
      }
      _updateValue(e) {
        Uc.then(() => {
          this.control.setValue(e, { emitViewToModelChange: !1 }),
            this._changeDetectorRef?.markForCheck();
        });
      }
      _updateDisabled(e) {
        let t = e.isDisabled.currentValue, r = t !== 0 && H(t);
        Uc.then(() => {
          r && !this.control.disabled
            ? this.control.disable()
            : !r && this.control.disabled && this.control.enable(),
            this._changeDetectorRef?.markForCheck();
        });
      }
      _getPath(e) {
        return this._parent ? jh(e, this._parent) : [e];
      }
      static ɵfac = function (t) {
        return new (t || n)(
          Y(Dt, 9),
          Y(Yi, 10),
          Y(ea, 10),
          Y(Kn, 10),
          Y(Ce, 8),
          Y(er, 8),
        );
      };
      static ɵdir = T({
        type: n,
        selectors: [[
          "",
          "ngModel",
          "",
          3,
          "formControlName",
          "",
          3,
          "formControl",
          "",
        ]],
        inputs: {
          name: "name",
          isDisabled: [0, "disabled", "isDisabled"],
          model: [0, "ngModel", "model"],
          options: [0, "ngModelOptions", "options"],
        },
        outputs: { update: "ngModelChange" },
        exportAs: ["ngModel"],
        standalone: !1,
        features: [ge([Kh]), ce, Me],
      });
    }
    return n;
  })();
var Qh = { provide: Dt, useExisting: it(() => sa) },
  sa = (() => {
    class n extends Dt {
      callSetDisabledState;
      get submitted() {
        return je(this._submittedReactive);
      }
      set submitted(e) {
        this._submittedReactive.set(e);
      }
      _submitted = Ye(() => this._submittedReactive());
      _submittedReactive = gt(!1);
      _oldForm;
      _onCollectionChange = () => this._updateDomValue();
      directives = [];
      form = null;
      ngSubmit = new Q();
      constructor(e, t, r) {
        super(),
          this.callSetDisabledState = r,
          this._setValidators(e),
          this._setAsyncValidators(t);
      }
      ngOnChanges(e) {
        this._checkFormPresent(),
          e.hasOwnProperty("form") &&
          (this._updateValidators(),
            this._updateDomValue(),
            this._updateRegistrations(),
            this._oldForm = this.form);
      }
      ngOnDestroy() {
        this.form &&
          (Zn(this.form, this),
            this.form._onCollectionChange === this._onCollectionChange &&
            this.form._registerOnCollectionChange(() => {}));
      }
      get formDirective() {
        return this;
      }
      get control() {
        return this.form;
      }
      get path() {
        return [];
      }
      addControl(e) {
        let t = this.form.get(e.path);
        return Yn(t, e, this.callSetDisabledState),
          t.updateValueAndValidity({ emitEvent: !1 }),
          this.directives.push(e),
          t;
      }
      getControl(e) {
        return this.form.get(e.path);
      }
      removeControl(e) {
        jc(e.control || null, e, !1), Yh(this.directives, e);
      }
      addFormGroup(e) {
        this._setUpFormContainer(e);
      }
      removeFormGroup(e) {
        this._cleanUpFormContainer(e);
      }
      getFormGroup(e) {
        return this.form.get(e.path);
      }
      addFormArray(e) {
        this._setUpFormContainer(e);
      }
      removeFormArray(e) {
        this._cleanUpFormContainer(e);
      }
      getFormArray(e) {
        return this.form.get(e.path);
      }
      updateModel(e, t) {
        this.form.get(e.path).setValue(t);
      }
      onSubmit(e) {
        return this._submittedReactive.set(!0),
          al(this.form, this.directives),
          this.ngSubmit.emit(e),
          this.form._events.next(new Qo(this.control)),
          e?.target?.method === "dialog";
      }
      onReset() {
        this.resetForm();
      }
      resetForm(e = void 0) {
        this.form.reset(e),
          this._submittedReactive.set(!1),
          this.form._events.next(new Jo(this.form));
      }
      _updateDomValue() {
        this.directives.forEach((e) => {
          let t = e.control, r = this.form.get(e.path);
          t !== r &&
            (jc(t || null, e),
              Zh(r) && (Yn(r, e, this.callSetDisabledState), e.control = r));
        }), this.form._updateTreeValidity({ emitEvent: !1 });
      }
      _setUpFormContainer(e) {
        let t = this.form.get(e.path);
        ol(t, e), t.updateValueAndValidity({ emitEvent: !1 });
      }
      _cleanUpFormContainer(e) {
        if (this.form) {
          let t = this.form.get(e.path);
          t && $h(t, e) && t.updateValueAndValidity({ emitEvent: !1 });
        }
      }
      _updateRegistrations() {
        this.form._registerOnCollectionChange(this._onCollectionChange),
          this._oldForm && this._oldForm._registerOnCollectionChange(() => {});
      }
      _updateValidators() {
        ra(this.form, this), this._oldForm && Zn(this._oldForm, this);
      }
      _checkFormPresent() {
        this.form;
      }
      static ɵfac = function (t) {
        return new (t || n)(Y(Yi, 10), Y(ea, 10), Y(er, 8));
      };
      static ɵdir = T({
        type: n,
        selectors: [["", "formGroup", ""]],
        hostBindings: function (t, r) {
          t & 1 && J("submit", function (a) {
            return r.onSubmit(a);
          })("reset", function () {
            return r.onReset();
          });
        },
        inputs: { form: [0, "formGroup", "form"] },
        outputs: { ngSubmit: "ngSubmit" },
        exportAs: ["ngForm"],
        standalone: !1,
        features: [ge([Qh]), ce, Me],
      });
    }
    return n;
  })();
var Jh = (() => {
  class n {
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵmod = M({ type: n });
    static ɵinj = D({});
  }
  return n;
})();
var cl = (() => {
  class n {
    static withConfig(e) {
      return {
        ngModule: n,
        providers: [{ provide: er, useValue: e.callSetDisabledState ?? na }],
      };
    }
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵmod = M({ type: n });
    static ɵinj = D({ imports: [Jh] });
  }
  return n;
})();
var la;
try {
  la = typeof Intl < "u" && Intl.v8BreakIterator;
} catch {
  la = !1;
}
var q = (() => {
  class n {
    _platformId = l(qe);
    isBrowser = this._platformId
      ? ws(this._platformId)
      : typeof document == "object" && !!document;
    EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
    TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
    BLINK = this.isBrowser && !!(window.chrome || la) && typeof CSS < "u" &&
      !this.EDGE && !this.TRIDENT;
    WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) &&
      !this.BLINK && !this.EDGE && !this.TRIDENT;
    IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) &&
      !("MSStream" in window);
    FIREFOX = this.isBrowser &&
      /(firefox|minefield)/i.test(navigator.userAgent);
    ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) &&
      !this.TRIDENT;
    SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) &&
      this.WEBKIT;
    constructor() {}
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
  }
  return n;
})();
var Kt,
  ll = [
    "color",
    "button",
    "checkbox",
    "date",
    "datetime-local",
    "email",
    "file",
    "hidden",
    "image",
    "month",
    "number",
    "password",
    "radio",
    "range",
    "reset",
    "search",
    "submit",
    "tel",
    "text",
    "time",
    "url",
    "week",
  ];
function da() {
  if (Kt) return Kt;
  if (typeof document != "object" || !document) return Kt = new Set(ll), Kt;
  let n = document.createElement("input");
  return Kt = new Set(
    ll.filter((i) => (n.setAttribute("type", i), n.type === i)),
  ),
    Kt;
}
var Xi;
function tf() {
  if (Xi == null && typeof window < "u") {
    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", { get: () => Xi = !0 }),
      );
    } finally {
      Xi = Xi || !1;
    }
  }
  return Xi;
}
function lt(n) {
  return tf() ? n : !!n.capture;
}
var It;
function ua() {
  if (It == null) {
    if (
      typeof document != "object" || !document ||
      typeof Element != "function" || !Element
    ) return It = !1, It;
    if ("scrollBehavior" in document.documentElement.style) It = !0;
    else {
      let n = Element.prototype.scrollTo;
      n ? It = !/\{\s*\[native code\]\s*\}/.test(n.toString()) : It = !1;
    }
  }
  return It;
}
var ca;
function nf() {
  if (ca == null) {
    let n = typeof document < "u" ? document.head : null;
    ca = !!(n && (n.createShadowRoot || n.attachShadow));
  }
  return ca;
}
function dl(n) {
  if (nf()) {
    let i = n.getRootNode ? n.getRootNode() : null;
    if (typeof ShadowRoot < "u" && ShadowRoot && i instanceof ShadowRoot) {
      return i;
    }
  }
  return null;
}
function Ae(n) {
  return n.composedPath ? n.composedPath()[0] : n.target;
}
function ma() {
  return typeof __karma__ < "u" && !!__karma__ ||
    typeof jasmine < "u" && !!jasmine || typeof jest < "u" && !!jest ||
    typeof Mocha < "u" && !!Mocha;
}
var tr = new WeakMap(),
  ze = (() => {
    class n {
      _appRef;
      _injector = l($);
      _environmentInjector = l(He);
      load(e) {
        let t = this._appRef = this._appRef || this._injector.get(nt),
          r = tr.get(t);
        r ||
        (r = { loaders: new Set(), refs: [] },
          tr.set(t, r),
          t.onDestroy(() => {
            tr.get(t)?.refs.forEach((o) => o.destroy()), tr.delete(t);
          })),
          r.loaders.has(e) ||
          (r.loaders.add(e),
            r.refs.push(
              un(e, { environmentInjector: this._environmentInjector }),
            ));
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
    return n;
  })();
function Qt(n) {
  return n != null && `${n}` != "false";
}
function Jt(n) {
  return Array.isArray(n) ? n : [n];
}
function ee(n) {
  return n == null ? "" : typeof n == "string" ? n : `${n}px`;
}
function Re(n) {
  return n instanceof N ? n.nativeElement : n;
}
var rf = (() => {
  class n {
    create(e) {
      return typeof MutationObserver > "u" ? null : new MutationObserver(e);
    }
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
  }
  return n;
})();
var ul = (() => {
  class n {
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵmod = M({ type: n });
    static ɵinj = D({ providers: [rf] });
  }
  return n;
})();
var ml = new Set(),
  St,
  of = (() => {
    class n {
      _platform = l(q);
      _nonce = l(li, { optional: !0 });
      _matchMedia;
      constructor() {
        this._matchMedia = this._platform.isBrowser && window.matchMedia
          ? window.matchMedia.bind(window)
          : sf;
      }
      matchMedia(e) {
        return (this._platform.WEBKIT || this._platform.BLINK) &&
          af(e, this._nonce),
          this._matchMedia(e);
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
    return n;
  })();
function af(n, i) {
  if (!ml.has(n)) {
    try {
      St ||
      (St = document.createElement("style"),
        i && St.setAttribute("nonce", i),
        St.setAttribute("type", "text/css"),
        document.head.appendChild(St)),
        St.sheet &&
        (St.sheet.insertRule(`@media ${n} {body{ }}`, 0), ml.add(n));
    } catch (e) {
      console.error(e);
    }
  }
}
function sf(n) {
  return {
    matches: n === "all" || n === "",
    media: n,
    addListener: () => {},
    removeListener: () => {},
  };
}
var ir = (() => {
  class n {
    _mediaMatcher = l(of);
    _zone = l(x);
    _queries = new Map();
    _destroySubject = new w();
    constructor() {}
    ngOnDestroy() {
      this._destroySubject.next(), this._destroySubject.complete();
    }
    isMatched(e) {
      return hl(Jt(e)).some((r) => this._registerQuery(r).mql.matches);
    }
    observe(e) {
      let r = hl(Jt(e)).map((a) => this._registerQuery(a).observable),
        o = oi(r);
      return o = rn(o.pipe(Pe(1)), o.pipe(sn(1), Mr(0))),
        o.pipe(_((a) => {
          let s = { matches: !1, breakpoints: {} };
          return a.forEach(({ matches: c, query: d }) => {
            s.matches = s.matches || c, s.breakpoints[d] = c;
          }),
            s;
        }));
    }
    _registerQuery(e) {
      if (this._queries.has(e)) return this._queries.get(e);
      let t = this._mediaMatcher.matchMedia(e),
        o = {
          observable: new Je((a) => {
            let s = (c) => this._zone.run(() => a.next(c));
            return t.addListener(s), () => {
              t.removeListener(s);
            };
          }).pipe(
            ht(t),
            _(({ matches: a }) => ({ query: e, matches: a })),
            se(this._destroySubject),
          ),
          mql: t,
        };
      return this._queries.set(e, o), o;
    }
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
  }
  return n;
})();
function hl(n) {
  return n.map((i) => i.split(",")).reduce((i, e) => i.concat(e)).map((i) =>
    i.trim()
  );
}
var fl = {
  XSmall: "(max-width: 599.98px)",
  Small: "(min-width: 600px) and (max-width: 959.98px)",
  Medium: "(min-width: 960px) and (max-width: 1279.98px)",
  Large: "(min-width: 1280px) and (max-width: 1919.98px)",
  XLarge: "(min-width: 1920px)",
  Handset:
    "(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",
  Tablet:
    "(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",
  Web:
    "(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",
  HandsetPortrait: "(max-width: 599.98px) and (orientation: portrait)",
  TabletPortrait:
    "(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",
  WebPortrait: "(min-width: 840px) and (orientation: portrait)",
  HandsetLandscape: "(max-width: 959.98px) and (orientation: landscape)",
  TabletLandscape:
    "(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",
  WebLandscape: "(min-width: 1280px) and (orientation: landscape)",
};
function pa(n) {
  return n.buttons === 0 || n.detail === 0;
}
function ga(n) {
  let i = n.touches && n.touches[0] || n.changedTouches && n.changedTouches[0];
  return !!i && i.identifier === -1 && (i.radiusX == null || i.radiusX === 1) &&
    (i.radiusY == null || i.radiusY === 1);
}
var cf = new p("cdk-input-modality-detector-options"),
  lf = { ignoreKeys: [18, 17, 224, 91, 16] },
  bl = 650,
  ei = lt({ passive: !0, capture: !0 }),
  df = (() => {
    class n {
      _platform = l(q);
      modalityDetected;
      modalityChanged;
      get mostRecentModality() {
        return this._modality.value;
      }
      _mostRecentTarget = null;
      _modality = new be(null);
      _options;
      _lastTouchMs = 0;
      _onKeydown = (e) => {
        this._options?.ignoreKeys?.some((t) => t === e.keyCode) ||
          (this._modality.next("keyboard"), this._mostRecentTarget = Ae(e));
      };
      _onMousedown = (e) => {
        Date.now() - this._lastTouchMs < bl ||
          (this._modality.next(pa(e) ? "keyboard" : "mouse"),
            this._mostRecentTarget = Ae(e));
      };
      _onTouchstart = (e) => {
        if (ga(e)) {
          this._modality.next("keyboard");
          return;
        }
        this._lastTouchMs = Date.now(),
          this._modality.next("touch"),
          this._mostRecentTarget = Ae(e);
      };
      constructor() {
        let e = l(x), t = l(A), r = l(cf, { optional: !0 });
        this._options = m(m({}, lf), r),
          this.modalityDetected = this._modality.pipe(sn(1)),
          this.modalityChanged = this.modalityDetected.pipe(Sr()),
          this._platform.isBrowser && e.runOutsideAngular(() => {
            t.addEventListener("keydown", this._onKeydown, ei),
              t.addEventListener("mousedown", this._onMousedown, ei),
              t.addEventListener("touchstart", this._onTouchstart, ei);
          });
      }
      ngOnDestroy() {
        this._modality.complete(),
          this._platform.isBrowser &&
          (document.removeEventListener("keydown", this._onKeydown, ei),
            document.removeEventListener("mousedown", this._onMousedown, ei),
            document.removeEventListener("touchstart", this._onTouchstart, ei));
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
    return n;
  })(),
  uf = new p("liveAnnouncerElement", { providedIn: "root", factory: mf });
function mf() {
  return null;
}
var hf = new p("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),
  ff = 0,
  vl = (() => {
    class n {
      _ngZone = l(x);
      _defaultOptions = l(hf, { optional: !0 });
      _liveElement;
      _document = l(A);
      _previousTimeout;
      _currentPromise;
      _currentResolve;
      constructor() {
        let e = l(uf, { optional: !0 });
        this._liveElement = e || this._createLiveElement();
      }
      announce(e, ...t) {
        let r = this._defaultOptions, o, a;
        return t.length === 1 && typeof t[0] == "number"
          ? a = t[0]
          : [o, a] = t,
          this.clear(),
          clearTimeout(this._previousTimeout),
          o || (o = r && r.politeness ? r.politeness : "polite"),
          a == null && r && (a = r.duration),
          this._liveElement.setAttribute("aria-live", o),
          this._liveElement.id &&
          this._exposeAnnouncerToModals(this._liveElement.id),
          this._ngZone.runOutsideAngular(
            () => (this._currentPromise ||
              (this._currentPromise = new Promise((s) =>
                this._currentResolve = s
              )),
              clearTimeout(this._previousTimeout),
              this._previousTimeout = setTimeout(() => {
                this._liveElement.textContent = e,
                  typeof a == "number" &&
                  (this._previousTimeout = setTimeout(() => this.clear(), a)),
                  this._currentResolve?.(),
                  this._currentPromise = this._currentResolve = void 0;
              }, 100),
              this._currentPromise),
          );
      }
      clear() {
        this._liveElement && (this._liveElement.textContent = "");
      }
      ngOnDestroy() {
        clearTimeout(this._previousTimeout),
          this._liveElement?.remove(),
          this._liveElement = null,
          this._currentResolve?.(),
          this._currentPromise = this._currentResolve = void 0;
      }
      _createLiveElement() {
        let e = "cdk-live-announcer-element",
          t = this._document.getElementsByClassName(e),
          r = this._document.createElement("div");
        for (let o = 0; o < t.length; o++) t[o].remove();
        return r.classList.add(e),
          r.classList.add("cdk-visually-hidden"),
          r.setAttribute("aria-atomic", "true"),
          r.setAttribute("aria-live", "polite"),
          r.id = `cdk-live-announcer-${ff++}`,
          this._document.body.appendChild(r),
          r;
      }
      _exposeAnnouncerToModals(e) {
        let t = this._document.querySelectorAll(
          'body > .cdk-overlay-container [aria-modal="true"]',
        );
        for (let r = 0; r < t.length; r++) {
          let o = t[r], a = o.getAttribute("aria-owns");
          a
            ? a.indexOf(e) === -1 && o.setAttribute("aria-owns", a + " " + e)
            : o.setAttribute("aria-owns", e);
        }
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
    return n;
  })();
var rr = function (n) {
    return n[n.IMMEDIATE = 0] = "IMMEDIATE", n[n.EVENTUAL = 1] = "EVENTUAL", n;
  }(rr || {}),
  pf = new p("cdk-focus-monitor-default-options"),
  nr = lt({ passive: !0, capture: !0 }),
  _l = (() => {
    class n {
      _ngZone = l(x);
      _platform = l(q);
      _inputModalityDetector = l(df);
      _origin = null;
      _lastFocusOrigin;
      _windowFocused = !1;
      _windowFocusTimeoutId;
      _originTimeoutId;
      _originFromTouchInteraction = !1;
      _elementInfo = new Map();
      _monitoredElementCount = 0;
      _rootNodeFocusListenerCount = new Map();
      _detectionMode;
      _windowFocusListener = () => {
        this._windowFocused = !0,
          this._windowFocusTimeoutId = setTimeout(() =>
            this._windowFocused = !1
          );
      };
      _document = l(A, { optional: !0 });
      _stopInputModalityDetector = new w();
      constructor() {
        let e = l(pf, { optional: !0 });
        this._detectionMode = e?.detectionMode || rr.IMMEDIATE;
      }
      _rootNodeFocusAndBlurListener = (e) => {
        let t = Ae(e);
        for (let r = t; r; r = r.parentElement) {
          e.type === "focus" ? this._onFocus(e, r) : this._onBlur(e, r);
        }
      };
      monitor(e, t = !1) {
        let r = Re(e);
        if (!this._platform.isBrowser || r.nodeType !== 1) return g();
        let o = dl(r) || this._getDocument(), a = this._elementInfo.get(r);
        if (a) return t && (a.checkChildren = !0), a.subject;
        let s = { checkChildren: t, subject: new w(), rootNode: o };
        return this._elementInfo.set(r, s),
          this._registerGlobalListeners(s),
          s.subject;
      }
      stopMonitoring(e) {
        let t = Re(e), r = this._elementInfo.get(t);
        r &&
          (r.subject.complete(),
            this._setClasses(t),
            this._elementInfo.delete(t),
            this._removeGlobalListeners(r));
      }
      focusVia(e, t, r) {
        let o = Re(e), a = this._getDocument().activeElement;
        o === a
          ? this._getClosestElementsInfo(o).forEach(([s, c]) =>
            this._originChanged(s, t, c)
          )
          : (this._setOrigin(t), typeof o.focus == "function" && o.focus(r));
      }
      ngOnDestroy() {
        this._elementInfo.forEach((e, t) => this.stopMonitoring(t));
      }
      _getDocument() {
        return this._document || document;
      }
      _getWindow() {
        return this._getDocument().defaultView || window;
      }
      _getFocusOrigin(e) {
        return this._origin
          ? this._originFromTouchInteraction
            ? this._shouldBeAttributedToTouch(e) ? "touch" : "program"
            : this._origin
          : this._windowFocused && this._lastFocusOrigin
          ? this._lastFocusOrigin
          : e && this._isLastInteractionFromInputLabel(e)
          ? "mouse"
          : "program";
      }
      _shouldBeAttributedToTouch(e) {
        return this._detectionMode === rr.EVENTUAL ||
          !!e?.contains(this._inputModalityDetector._mostRecentTarget);
      }
      _setClasses(e, t) {
        e.classList.toggle("cdk-focused", !!t),
          e.classList.toggle("cdk-touch-focused", t === "touch"),
          e.classList.toggle("cdk-keyboard-focused", t === "keyboard"),
          e.classList.toggle("cdk-mouse-focused", t === "mouse"),
          e.classList.toggle("cdk-program-focused", t === "program");
      }
      _setOrigin(e, t = !1) {
        this._ngZone.runOutsideAngular(() => {
          if (
            this._origin = e,
              this._originFromTouchInteraction = e === "touch" && t,
              this._detectionMode === rr.IMMEDIATE
          ) {
            clearTimeout(this._originTimeoutId);
            let r = this._originFromTouchInteraction ? bl : 1;
            this._originTimeoutId = setTimeout(() => this._origin = null, r);
          }
        });
      }
      _onFocus(e, t) {
        let r = this._elementInfo.get(t), o = Ae(e);
        !r || !r.checkChildren && t !== o ||
          this._originChanged(t, this._getFocusOrigin(o), r);
      }
      _onBlur(e, t) {
        let r = this._elementInfo.get(t);
        !r ||
          r.checkChildren && e.relatedTarget instanceof Node &&
            t.contains(e.relatedTarget) ||
          (this._setClasses(t), this._emitOrigin(r, null));
      }
      _emitOrigin(e, t) {
        e.subject.observers.length && this._ngZone.run(() => e.subject.next(t));
      }
      _registerGlobalListeners(e) {
        if (!this._platform.isBrowser) return;
        let t = e.rootNode, r = this._rootNodeFocusListenerCount.get(t) || 0;
        r || this._ngZone.runOutsideAngular(() => {
          t.addEventListener("focus", this._rootNodeFocusAndBlurListener, nr),
            t.addEventListener("blur", this._rootNodeFocusAndBlurListener, nr);
        }),
          this._rootNodeFocusListenerCount.set(t, r + 1),
          ++this._monitoredElementCount === 1 &&
          (this._ngZone.runOutsideAngular(() => {
            this._getWindow().addEventListener(
              "focus",
              this._windowFocusListener,
            );
          }),
            this._inputModalityDetector.modalityDetected.pipe(
              se(this._stopInputModalityDetector),
            ).subscribe((o) => {
              this._setOrigin(o, !0);
            }));
      }
      _removeGlobalListeners(e) {
        let t = e.rootNode;
        if (this._rootNodeFocusListenerCount.has(t)) {
          let r = this._rootNodeFocusListenerCount.get(t);
          r > 1
            ? this._rootNodeFocusListenerCount.set(t, r - 1)
            : (t.removeEventListener(
              "focus",
              this._rootNodeFocusAndBlurListener,
              nr,
            ),
              t.removeEventListener(
                "blur",
                this._rootNodeFocusAndBlurListener,
                nr,
              ),
              this._rootNodeFocusListenerCount.delete(t));
        }
        --this._monitoredElementCount ||
          (this._getWindow().removeEventListener(
            "focus",
            this._windowFocusListener,
          ),
            this._stopInputModalityDetector.next(),
            clearTimeout(this._windowFocusTimeoutId),
            clearTimeout(this._originTimeoutId));
      }
      _originChanged(e, t, r) {
        this._setClasses(e, t),
          this._emitOrigin(r, t),
          this._lastFocusOrigin = t;
      }
      _getClosestElementsInfo(e) {
        let t = [];
        return this._elementInfo.forEach((r, o) => {
          (o === e || r.checkChildren && o.contains(e)) && t.push([o, r]);
        }),
          t;
      }
      _isLastInteractionFromInputLabel(e) {
        let { _mostRecentTarget: t, mostRecentModality: r } =
          this._inputModalityDetector;
        if (
          r !== "mouse" || !t || t === e ||
          e.nodeName !== "INPUT" && e.nodeName !== "TEXTAREA" || e.disabled
        ) return !1;
        let o = e.labels;
        if (o) {
          for (let a = 0; a < o.length; a++) if (o[a].contains(t)) return !0;
        }
        return !1;
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
    return n;
  })();
var At = function (n) {
    return n[n.NONE = 0] = "NONE",
      n[n.BLACK_ON_WHITE = 1] = "BLACK_ON_WHITE",
      n[n.WHITE_ON_BLACK = 2] = "WHITE_ON_BLACK",
      n;
  }(At || {}),
  pl = "cdk-high-contrast-black-on-white",
  gl = "cdk-high-contrast-white-on-black",
  ha = "cdk-high-contrast-active",
  yl = (() => {
    class n {
      _platform = l(q);
      _hasCheckedHighContrastMode;
      _document = l(A);
      _breakpointSubscription;
      constructor() {
        this._breakpointSubscription = l(ir).observe("(forced-colors: active)")
          .subscribe(() => {
            this._hasCheckedHighContrastMode &&
              (this._hasCheckedHighContrastMode = !1,
                this._applyBodyHighContrastModeCssClasses());
          });
      }
      getHighContrastMode() {
        if (!this._platform.isBrowser) return At.NONE;
        let e = this._document.createElement("div");
        e.style.backgroundColor = "rgb(1,2,3)",
          e.style.position = "absolute",
          this._document.body.appendChild(e);
        let t = this._document.defaultView || window,
          r = t && t.getComputedStyle ? t.getComputedStyle(e) : null,
          o = (r && r.backgroundColor || "").replace(/ /g, "");
        switch (e.remove(), o) {
          case "rgb(0,0,0)":
          case "rgb(45,50,54)":
          case "rgb(32,32,32)":
            return At.WHITE_ON_BLACK;
          case "rgb(255,255,255)":
          case "rgb(255,250,239)":
            return At.BLACK_ON_WHITE;
        }
        return At.NONE;
      }
      ngOnDestroy() {
        this._breakpointSubscription.unsubscribe();
      }
      _applyBodyHighContrastModeCssClasses() {
        if (
          !this._hasCheckedHighContrastMode && this._platform.isBrowser &&
          this._document.body
        ) {
          let e = this._document.body.classList;
          e.remove(ha, pl, gl), this._hasCheckedHighContrastMode = !0;
          let t = this.getHighContrastMode();
          t === At.BLACK_ON_WHITE
            ? e.add(ha, pl)
            : t === At.WHITE_ON_BLACK && e.add(ha, gl);
        }
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
    return n;
  })();
var fa = {},
  Te = (() => {
    class n {
      _appId = l(ci);
      getId(e) {
        return this._appId !== "ng" && (e += this._appId),
          fa.hasOwnProperty(e) || (fa[e] = 0),
          `${e}${fa[e]++}`;
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
    return n;
  })();
var gf = new p("cdk-dir-doc", { providedIn: "root", factory: bf });
function bf() {
  return l(A);
}
var vf =
  /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function _f(n) {
  let i = n?.toLowerCase() || "";
  return i === "auto" && typeof navigator < "u" && navigator?.language
    ? vf.test(navigator.language) ? "rtl" : "ltr"
    : i === "rtl"
    ? "rtl"
    : "ltr";
}
var Zi = (() => {
  class n {
    value = "ltr";
    change = new Q();
    constructor() {
      let e = l(gf, { optional: !0 });
      if (e) {
        let t = e.body ? e.body.dir : null,
          r = e.documentElement ? e.documentElement.dir : null;
        this.value = _f(t || r || "ltr");
      }
    }
    ngOnDestroy() {
      this.change.complete();
    }
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
  }
  return n;
})();
var dt = (() => {
  class n {
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵmod = M({ type: n });
    static ɵinj = D({});
  }
  return n;
})();
var yf = ["mat-internal-form-field", ""], xf = ["*"];
var X = (() => {
    class n {
      constructor() {
        l(yl)._applyBodyHighContrastModeCssClasses();
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵmod = M({ type: n });
      static ɵinj = D({ imports: [dt, dt] });
    }
    return n;
  })(),
  ar = class {
    _defaultMatcher;
    ngControl;
    _parentFormGroup;
    _parentForm;
    _stateChanges;
    errorState = !1;
    matcher;
    constructor(i, e, t, r, o) {
      this._defaultMatcher = i,
        this.ngControl = e,
        this._parentFormGroup = t,
        this._parentForm = r,
        this._stateChanges = o;
    }
    updateErrorState() {
      let i = this.errorState,
        e = this._parentFormGroup || this._parentForm,
        t = this.matcher || this._defaultMatcher,
        r = this.ngControl ? this.ngControl.control : null,
        o = t?.isErrorState(r, e) ?? !1;
      o !== i && (this.errorState = o, this._stateChanges.next());
    }
  };
var Il = (() => {
    class n {
      isErrorState(e, t) {
        return !!(e && e.invalid && (e.touched || t && t.submitted));
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
    return n;
  })(),
  lr = (() => {
    class n {
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵcmp = F({
        type: n,
        selectors: [["structural-styles"]],
        decls: 0,
        vars: 0,
        template: function (t, r) {},
        styles: [
          '.mat-focus-indicator{position:relative}.mat-focus-indicator::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-focus-indicator-display, none);border-width:var(--mat-focus-indicator-border-width, 3px);border-style:var(--mat-focus-indicator-border-style, solid);border-color:var(--mat-focus-indicator-border-color, transparent);border-radius:var(--mat-focus-indicator-border-radius, 4px)}.mat-focus-indicator:focus::before{content:""}@media(forced-colors: active){html{--mat-focus-indicator-display: block}}',
        ],
        encapsulation: 2,
        changeDetection: 0,
      });
    }
    return n;
  })();
var Oe = function (n) {
    return n[n.FADING_IN = 0] = "FADING_IN",
      n[n.VISIBLE = 1] = "VISIBLE",
      n[n.FADING_OUT = 2] = "FADING_OUT",
      n[n.HIDDEN = 3] = "HIDDEN",
      n;
  }(Oe || {}),
  _a = class {
    _renderer;
    element;
    config;
    _animationForciblyDisabledThroughCss;
    state = Oe.HIDDEN;
    constructor(i, e, t, r = !1) {
      this._renderer = i,
        this.element = e,
        this.config = t,
        this._animationForciblyDisabledThroughCss = r;
    }
    fadeOut() {
      this._renderer.fadeOutRipple(this);
    }
  },
  xl = lt({ passive: !0, capture: !0 }),
  ya = class {
    _events = new Map();
    addHandler(i, e, t, r) {
      let o = this._events.get(e);
      if (o) {
        let a = o.get(t);
        a ? a.add(r) : o.set(t, new Set([r]));
      } else {this._events.set(e, new Map([[t, new Set([r])]])),
          i.runOutsideAngular(() => {
            document.addEventListener(e, this._delegateEventHandler, xl);
          });}
    }
    removeHandler(i, e, t) {
      let r = this._events.get(i);
      if (!r) return;
      let o = r.get(e);
      o &&
        (o.delete(t),
          o.size === 0 && r.delete(e),
          r.size === 0 &&
          (this._events.delete(i),
            document.removeEventListener(i, this._delegateEventHandler, xl)));
    }
    _delegateEventHandler = (i) => {
      let e = Ae(i);
      e && this._events.get(i.type)?.forEach((t, r) => {
        (r === e || r.contains(e)) && t.forEach((o) => o.handleEvent(i));
      });
    };
  },
  sr = { enterDuration: 225, exitDuration: 150 },
  wf = 800,
  wl = lt({ passive: !0, capture: !0 }),
  Cl = ["mousedown", "touchstart"],
  kl = ["mouseup", "mouseleave", "touchend", "touchcancel"],
  Cf = (() => {
    class n {
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵcmp = F({
        type: n,
        selectors: [["ng-component"]],
        hostAttrs: ["mat-ripple-style-loader", ""],
        decls: 0,
        vars: 0,
        template: function (t, r) {},
        styles: [
          ".mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale3d(0, 0, 0);background-color:var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent))}@media(forced-colors: active){.mat-ripple-element{display:none}}.cdk-drag-preview .mat-ripple-element,.cdk-drag-placeholder .mat-ripple-element{display:none}",
        ],
        encapsulation: 2,
        changeDetection: 0,
      });
    }
    return n;
  })(),
  cr = class n {
    _target;
    _ngZone;
    _platform;
    _containerElement;
    _triggerElement;
    _isPointerDown = !1;
    _activeRipples = new Map();
    _mostRecentTransientRipple;
    _lastTouchStartEvent;
    _pointerUpEventsRegistered = !1;
    _containerRect;
    static _eventManager = new ya();
    constructor(i, e, t, r, o) {
      this._target = i,
        this._ngZone = e,
        this._platform = r,
        r.isBrowser && (this._containerElement = Re(t)),
        o && o.get(ze).load(Cf);
    }
    fadeInRipple(i, e, t = {}) {
      let r = this._containerRect = this._containerRect ||
          this._containerElement.getBoundingClientRect(),
        o = m(m({}, sr), t.animation);
      t.centered && (i = r.left + r.width / 2, e = r.top + r.height / 2);
      let a = t.radius || kf(i, e, r),
        s = i - r.left,
        c = e - r.top,
        d = o.enterDuration,
        u = document.createElement("div");
      u.classList.add("mat-ripple-element"),
        u.style.left = `${s - a}px`,
        u.style.top = `${c - a}px`,
        u.style.height = `${a * 2}px`,
        u.style.width = `${a * 2}px`,
        t.color != null && (u.style.backgroundColor = t.color),
        u.style.transitionDuration = `${d}ms`,
        this._containerElement.appendChild(u);
      let h = window.getComputedStyle(u),
        v = h.transitionProperty,
        y = h.transitionDuration,
        R = v === "none" || y === "0s" || y === "0s, 0s" ||
          r.width === 0 && r.height === 0,
        b = new _a(this, u, t, R);
      u.style.transform = "scale3d(1, 1, 1)",
        b.state = Oe.FADING_IN,
        t.persistent || (this._mostRecentTransientRipple = b);
      let E = null;
      return !R && (d || o.exitDuration) &&
        this._ngZone.runOutsideAngular(() => {
          let he = () => {
              E && (E.fallbackTimer = null),
                clearTimeout(Z),
                this._finishRippleTransition(b);
            },
            Qe = () => this._destroyRipple(b),
            Z = setTimeout(Qe, d + 100);
          u.addEventListener("transitionend", he),
            u.addEventListener("transitioncancel", Qe),
            E = {
              onTransitionEnd: he,
              onTransitionCancel: Qe,
              fallbackTimer: Z,
            };
        }),
        this._activeRipples.set(b, E),
        (R || !d) && this._finishRippleTransition(b),
        b;
    }
    fadeOutRipple(i) {
      if (i.state === Oe.FADING_OUT || i.state === Oe.HIDDEN) return;
      let e = i.element, t = m(m({}, sr), i.config.animation);
      e.style.transitionDuration = `${t.exitDuration}ms`,
        e.style.opacity = "0",
        i.state = Oe.FADING_OUT,
        (i._animationForciblyDisabledThroughCss || !t.exitDuration) &&
        this._finishRippleTransition(i);
    }
    fadeOutAll() {
      this._getActiveRipples().forEach((i) => i.fadeOut());
    }
    fadeOutAllNonPersistent() {
      this._getActiveRipples().forEach((i) => {
        i.config.persistent || i.fadeOut();
      });
    }
    setupTriggerEvents(i) {
      let e = Re(i);
      !this._platform.isBrowser || !e || e === this._triggerElement ||
        (this._removeTriggerEvents(),
          this._triggerElement = e,
          Cl.forEach((t) => {
            n._eventManager.addHandler(this._ngZone, t, e, this);
          }));
    }
    handleEvent(i) {
      i.type === "mousedown"
        ? this._onMousedown(i)
        : i.type === "touchstart"
        ? this._onTouchStart(i)
        : this._onPointerUp(),
        this._pointerUpEventsRegistered ||
        (this._ngZone.runOutsideAngular(() => {
          kl.forEach((e) => {
            this._triggerElement.addEventListener(e, this, wl);
          });
        }),
          this._pointerUpEventsRegistered = !0);
    }
    _finishRippleTransition(i) {
      i.state === Oe.FADING_IN
        ? this._startFadeOutTransition(i)
        : i.state === Oe.FADING_OUT && this._destroyRipple(i);
    }
    _startFadeOutTransition(i) {
      let e = i === this._mostRecentTransientRipple,
        { persistent: t } = i.config;
      i.state = Oe.VISIBLE, !t && (!e || !this._isPointerDown) && i.fadeOut();
    }
    _destroyRipple(i) {
      let e = this._activeRipples.get(i) ?? null;
      this._activeRipples.delete(i),
        this._activeRipples.size || (this._containerRect = null),
        i === this._mostRecentTransientRipple &&
        (this._mostRecentTransientRipple = null),
        i.state = Oe.HIDDEN,
        e !== null &&
        (i.element.removeEventListener("transitionend", e.onTransitionEnd),
          i.element.removeEventListener(
            "transitioncancel",
            e.onTransitionCancel,
          ),
          e.fallbackTimer !== null && clearTimeout(e.fallbackTimer)),
        i.element.remove();
    }
    _onMousedown(i) {
      let e = pa(i),
        t = this._lastTouchStartEvent &&
          Date.now() < this._lastTouchStartEvent + wf;
      !this._target.rippleDisabled && !e && !t &&
        (this._isPointerDown = !0,
          this.fadeInRipple(i.clientX, i.clientY, this._target.rippleConfig));
    }
    _onTouchStart(i) {
      if (!this._target.rippleDisabled && !ga(i)) {
        this._lastTouchStartEvent = Date.now(), this._isPointerDown = !0;
        let e = i.changedTouches;
        if (e) {
          for (let t = 0; t < e.length; t++) {
            this.fadeInRipple(
              e[t].clientX,
              e[t].clientY,
              this._target.rippleConfig,
            );
          }
        }
      }
    }
    _onPointerUp() {
      this._isPointerDown &&
        (this._isPointerDown = !1,
          this._getActiveRipples().forEach((i) => {
            let e = i.state === Oe.VISIBLE ||
              i.config.terminateOnPointerUp && i.state === Oe.FADING_IN;
            !i.config.persistent && e && i.fadeOut();
          }));
    }
    _getActiveRipples() {
      return Array.from(this._activeRipples.keys());
    }
    _removeTriggerEvents() {
      let i = this._triggerElement;
      i &&
        (Cl.forEach((e) => n._eventManager.removeHandler(e, i, this)),
          this._pointerUpEventsRegistered &&
          (kl.forEach((e) => i.removeEventListener(e, this, wl)),
            this._pointerUpEventsRegistered = !1));
    }
  };
function kf(n, i, e) {
  let t = Math.max(Math.abs(n - e.left), Math.abs(n - e.right)),
    r = Math.max(Math.abs(i - e.top), Math.abs(i - e.bottom));
  return Math.sqrt(t * t + r * r);
}
var Sl = new p("mat-ripple-global-options"),
  Al = (() => {
    class n {
      _elementRef = l(N);
      _animationMode = l(xe, { optional: !0 });
      color;
      unbounded;
      centered;
      radius = 0;
      animation;
      get disabled() {
        return this._disabled;
      }
      set disabled(e) {
        e && this.fadeOutAllNonPersistent(),
          this._disabled = e,
          this._setupTriggerEventsIfEnabled();
      }
      _disabled = !1;
      get trigger() {
        return this._trigger || this._elementRef.nativeElement;
      }
      set trigger(e) {
        this._trigger = e, this._setupTriggerEventsIfEnabled();
      }
      _trigger;
      _rippleRenderer;
      _globalOptions;
      _isInitialized = !1;
      constructor() {
        let e = l(x), t = l(q), r = l(Sl, { optional: !0 }), o = l($);
        this._globalOptions = r || {},
          this._rippleRenderer = new cr(this, e, this._elementRef, t, o);
      }
      ngOnInit() {
        this._isInitialized = !0, this._setupTriggerEventsIfEnabled();
      }
      ngOnDestroy() {
        this._rippleRenderer._removeTriggerEvents();
      }
      fadeOutAll() {
        this._rippleRenderer.fadeOutAll();
      }
      fadeOutAllNonPersistent() {
        this._rippleRenderer.fadeOutAllNonPersistent();
      }
      get rippleConfig() {
        return {
          centered: this.centered,
          radius: this.radius,
          color: this.color,
          animation: m(
            m(
              m({}, this._globalOptions.animation),
              this._animationMode === "NoopAnimations"
                ? { enterDuration: 0, exitDuration: 0 }
                : {},
            ),
            this.animation,
          ),
          terminateOnPointerUp: this._globalOptions.terminateOnPointerUp,
        };
      }
      get rippleDisabled() {
        return this.disabled || !!this._globalOptions.disabled;
      }
      _setupTriggerEventsIfEnabled() {
        !this.disabled && this._isInitialized &&
          this._rippleRenderer.setupTriggerEvents(this.trigger);
      }
      launch(e, t = 0, r) {
        return typeof e == "number"
          ? this._rippleRenderer.fadeInRipple(
            e,
            t,
            m(m({}, this.rippleConfig), r),
          )
          : this._rippleRenderer.fadeInRipple(
            0,
            0,
            m(m({}, this.rippleConfig), e),
          );
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵdir = T({
        type: n,
        selectors: [["", "mat-ripple", ""], ["", "matRipple", ""]],
        hostAttrs: [1, "mat-ripple"],
        hostVars: 2,
        hostBindings: function (t, r) {
          t & 2 && j("mat-ripple-unbounded", r.unbounded);
        },
        inputs: {
          color: [0, "matRippleColor", "color"],
          unbounded: [0, "matRippleUnbounded", "unbounded"],
          centered: [0, "matRippleCentered", "centered"],
          radius: [0, "matRippleRadius", "radius"],
          animation: [0, "matRippleAnimation", "animation"],
          disabled: [0, "matRippleDisabled", "disabled"],
          trigger: [0, "matRippleTrigger", "trigger"],
        },
        exportAs: ["matRipple"],
      });
    }
    return n;
  })(),
  Rl = (() => {
    class n {
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵmod = M({ type: n });
      static ɵinj = D({ imports: [X, X] });
    }
    return n;
  })();
var El = { capture: !0 },
  Dl = ["focus", "mousedown", "mouseenter", "touchstart"],
  ba = "mat-ripple-loader-uninitialized",
  va = "mat-ripple-loader-class-name",
  Ml = "mat-ripple-loader-centered",
  or = "mat-ripple-loader-disabled",
  Tl = (() => {
    class n {
      _document = l(A, { optional: !0 });
      _animationMode = l(xe, { optional: !0 });
      _globalRippleOptions = l(Sl, { optional: !0 });
      _platform = l(q);
      _ngZone = l(x);
      _injector = l($);
      _hosts = new Map();
      constructor() {
        this._ngZone.runOutsideAngular(() => {
          for (let e of Dl) {
            this._document?.addEventListener(e, this._onInteraction, El);
          }
        });
      }
      ngOnDestroy() {
        let e = this._hosts.keys();
        for (let t of e) this.destroyRipple(t);
        for (let t of Dl) {
          this._document?.removeEventListener(t, this._onInteraction, El);
        }
      }
      configureRipple(e, t) {
        e.setAttribute(ba, this._globalRippleOptions?.namespace ?? ""),
          (t.className || !e.hasAttribute(va)) &&
          e.setAttribute(va, t.className || ""),
          t.centered && e.setAttribute(Ml, ""),
          t.disabled && e.setAttribute(or, "");
      }
      setDisabled(e, t) {
        let r = this._hosts.get(e);
        r
          ? (r.target.rippleDisabled = t,
            !t && !r.hasSetUpEvents &&
            (r.hasSetUpEvents = !0, r.renderer.setupTriggerEvents(e)))
          : t
          ? e.setAttribute(or, "")
          : e.removeAttribute(or);
      }
      _onInteraction = (e) => {
        let t = Ae(e);
        if (t instanceof HTMLElement) {
          let r = t.closest(
            `[${ba}="${this._globalRippleOptions?.namespace ?? ""}"]`,
          );
          r && this._createRipple(r);
        }
      };
      _createRipple(e) {
        if (!this._document || this._hosts.has(e)) return;
        e.querySelector(".mat-ripple")?.remove();
        let t = this._document.createElement("span");
        t.classList.add("mat-ripple", e.getAttribute(va)), e.append(t);
        let r = this._animationMode === "NoopAnimations",
          o = this._globalRippleOptions,
          a = r ? 0 : o?.animation?.enterDuration ?? sr.enterDuration,
          s = r ? 0 : o?.animation?.exitDuration ?? sr.exitDuration,
          c = {
            rippleDisabled: r || o?.disabled || e.hasAttribute(or),
            rippleConfig: {
              centered: e.hasAttribute(Ml),
              terminateOnPointerUp: o?.terminateOnPointerUp,
              animation: { enterDuration: a, exitDuration: s },
            },
          },
          d = new cr(c, this._ngZone, t, this._platform, this._injector),
          u = !c.rippleDisabled;
        u && d.setupTriggerEvents(e),
          this._hosts.set(e, { target: c, renderer: d, hasSetUpEvents: u }),
          e.removeAttribute(ba);
      }
      destroyRipple(e) {
        let t = this._hosts.get(e);
        t && (t.renderer._removeTriggerEvents(), this._hosts.delete(e));
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
    return n;
  })(),
  Ol = (() => {
    class n {
      labelPosition;
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵcmp = F({
        type: n,
        selectors: [["div", "mat-internal-form-field", ""]],
        hostAttrs: [1, "mdc-form-field", "mat-internal-form-field"],
        hostVars: 2,
        hostBindings: function (t, r) {
          t & 2 && j("mdc-form-field--align-end", r.labelPosition === "before");
        },
        inputs: { labelPosition: "labelPosition" },
        attrs: yf,
        ngContentSelectors: xf,
        decls: 1,
        vars: 0,
        template: function (t, r) {
          t & 1 && (ue(), B(0));
        },
        styles: [
          ".mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-flex;align-items:center;vertical-align:middle}.mat-internal-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mat-internal-form-field>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0}",
        ],
        encapsulation: 2,
        changeDetection: 0,
      });
    }
    return n;
  })();
var Ef = ["*"];
var Df = [[["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]], [
    ["mat-card-title"],
    ["mat-card-subtitle"],
    ["", "mat-card-title", ""],
    ["", "mat-card-subtitle", ""],
    ["", "matCardTitle", ""],
    ["", "matCardSubtitle", ""],
  ], "*"],
  Mf = [
    "[mat-card-avatar], [matCardAvatar]",
    `mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,
    "*",
  ],
  If = new p("MAT_CARD_CONFIG"),
  Fl = (() => {
    class n {
      appearance;
      constructor() {
        let e = l(If, { optional: !0 });
        this.appearance = e?.appearance || "raised";
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵcmp = F({
        type: n,
        selectors: [["mat-card"]],
        hostAttrs: [1, "mat-mdc-card", "mdc-card"],
        hostVars: 4,
        hostBindings: function (t, r) {
          t & 2 &&
            j("mat-mdc-card-outlined", r.appearance === "outlined")(
              "mdc-card--outlined",
              r.appearance === "outlined",
            );
        },
        inputs: { appearance: "appearance" },
        exportAs: ["matCard"],
        ngContentSelectors: Ef,
        decls: 1,
        vars: 0,
        template: function (t, r) {
          t & 1 && (ue(), B(0));
        },
        styles: [
          '.mat-mdc-card{display:flex;flex-direction:column;box-sizing:border-box;position:relative;border-style:solid;border-width:0;background-color:var(--mdc-elevated-card-container-color, var(--mat-sys-surface-container-low));border-color:var(--mdc-elevated-card-container-color, var(--mat-sys-surface-container-low));border-radius:var(--mdc-elevated-card-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mdc-elevated-card-container-elevation, var(--mat-sys-level1))}.mat-mdc-card::after{position:absolute;top:0;left:0;width:100%;height:100%;border:solid 1px rgba(0,0,0,0);content:"";display:block;pointer-events:none;box-sizing:border-box;border-radius:var(--mdc-elevated-card-container-shape, var(--mat-sys-corner-medium))}.mat-mdc-card-outlined{background-color:var(--mdc-outlined-card-container-color, var(--mat-sys-surface));border-radius:var(--mdc-outlined-card-container-shape, var(--mat-sys-corner-medium));border-width:var(--mdc-outlined-card-outline-width, 1px);border-color:var(--mdc-outlined-card-outline-color, var(--mat-sys-outline-variant));box-shadow:var(--mdc-outlined-card-container-elevation, var(--mat-sys-level0))}.mat-mdc-card-outlined::after{border:none}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mat-mdc-card-actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font, var(--mat-sys-title-large-font));line-height:var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));font-size:var(--mat-card-title-text-size, var(--mat-sys-title-large-size));letter-spacing:var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));font-weight:var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight))}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));font-family:var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));line-height:var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));font-size:var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));letter-spacing:var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));font-weight:var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight))}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}',
        ],
        encapsulation: 2,
        changeDetection: 0,
      });
    }
    return n;
  })(),
  Pl = (() => {
    class n {
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵdir = T({
        type: n,
        selectors: [["mat-card-title"], ["", "mat-card-title", ""], [
          "",
          "matCardTitle",
          "",
        ]],
        hostAttrs: [1, "mat-mdc-card-title"],
      });
    }
    return n;
  })();
var Nl = (() => {
  class n {
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵdir = T({
      type: n,
      selectors: [["mat-card-content"]],
      hostAttrs: [1, "mat-mdc-card-content"],
    });
  }
  return n;
})();
var Ll = (() => {
  class n {
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵcmp = F({
      type: n,
      selectors: [["mat-card-header"]],
      hostAttrs: [1, "mat-mdc-card-header"],
      ngContentSelectors: Mf,
      decls: 4,
      vars: 0,
      consts: [[1, "mat-mdc-card-header-text"]],
      template: function (t, r) {
        t & 1 && (ue(Df), B(0), C(1, "div", 0), B(2, 1), I(), B(3, 2));
      },
      encapsulation: 2,
      changeDetection: 0,
    });
  }
  return n;
})();
var Vl = (() => {
  class n {
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵmod = M({ type: n });
    static ɵinj = D({ imports: [X, X] });
  }
  return n;
})();
var Rf = (() => {
    class n {
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵcmp = F({
        type: n,
        selectors: [["ng-component"]],
        hostAttrs: ["cdk-text-field-style-loader", ""],
        decls: 0,
        vars: 0,
        template: function (t, r) {},
        styles: [
          "textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{padding:2px 0 !important;box-sizing:content-box !important;height:auto !important;overflow:hidden !important}textarea.cdk-textarea-autosize-measuring-firefox{padding:2px 0 !important;box-sizing:content-box !important;height:0 !important}@keyframes cdk-text-field-autofill-start{/*!*/}@keyframes cdk-text-field-autofill-end{/*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}",
        ],
        encapsulation: 2,
        changeDetection: 0,
      });
    }
    return n;
  })(),
  jl = lt({ passive: !0 }),
  Bl = (() => {
    class n {
      _platform = l(q);
      _ngZone = l(x);
      _styleLoader = l(ze);
      _monitoredElements = new Map();
      constructor() {}
      monitor(e) {
        if (!this._platform.isBrowser) return Ue;
        this._styleLoader.load(Rf);
        let t = Re(e), r = this._monitoredElements.get(t);
        if (r) return r.subject;
        let o = new w(),
          a = "cdk-text-field-autofilled",
          s = (c) => {
            c.animationName === "cdk-text-field-autofill-start" &&
              !t.classList.contains(a)
              ? (t.classList.add(a),
                this._ngZone.run(() =>
                  o.next({ target: c.target, isAutofilled: !0 })
                ))
              : c.animationName === "cdk-text-field-autofill-end" &&
                t.classList.contains(a) &&
                (t.classList.remove(a),
                  this._ngZone.run(() =>
                    o.next({ target: c.target, isAutofilled: !1 })
                  ));
          };
        return this._ngZone.runOutsideAngular(() => {
          t.addEventListener("animationstart", s, jl),
            t.classList.add("cdk-text-field-autofill-monitored");
        }),
          this._monitoredElements.set(t, {
            subject: o,
            unlisten: () => {
              t.removeEventListener("animationstart", s, jl);
            },
          }),
          o;
      }
      stopMonitoring(e) {
        let t = Re(e), r = this._monitoredElements.get(t);
        r &&
          (r.unlisten(),
            r.subject.complete(),
            t.classList.remove("cdk-text-field-autofill-monitored"),
            t.classList.remove("cdk-text-field-autofilled"),
            this._monitoredElements.delete(t));
      }
      ngOnDestroy() {
        this._monitoredElements.forEach((e, t) => this.stopMonitoring(t));
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
    return n;
  })();
var zl = (() => {
  class n {
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵmod = M({ type: n });
    static ɵinj = D({});
  }
  return n;
})();
var xa = class {
    _box;
    _destroyed = new w();
    _resizeSubject = new w();
    _resizeObserver;
    _elementObservables = new Map();
    constructor(i) {
      this._box = i,
        typeof ResizeObserver < "u" &&
        (this._resizeObserver = new ResizeObserver((e) =>
          this._resizeSubject.next(e)
        ));
    }
    observe(i) {
      return this._elementObservables.has(i) ||
        this._elementObservables.set(
          i,
          new Je((e) => {
            let t = this._resizeSubject.subscribe(e);
            return this._resizeObserver?.observe(i, { box: this._box }), () => {
              this._resizeObserver?.unobserve(i),
                t.unsubscribe(),
                this._elementObservables.delete(i);
            };
          }).pipe(
            re((e) => e.some((t) => t.target === i)),
            Tr({ bufferSize: 1, refCount: !0 }),
            se(this._destroyed),
          ),
        ),
        this._elementObservables.get(i);
    }
    destroy() {
      this._destroyed.next(),
        this._destroyed.complete(),
        this._resizeSubject.complete(),
        this._elementObservables.clear();
    }
  },
  Ul = (() => {
    class n {
      _cleanupErrorListener;
      _observers = new Map();
      _ngZone = l(x);
      constructor() {
        typeof ResizeObserver < "u";
      }
      ngOnDestroy() {
        for (let [, e] of this._observers) e.destroy();
        this._observers.clear(), this._cleanupErrorListener?.();
      }
      observe(e, t) {
        let r = t?.box || "content-box";
        return this._observers.has(r) || this._observers.set(r, new xa(r)),
          this._observers.get(r).observe(e);
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
    return n;
  })();
var Tf = ["notch"],
  Of = ["matFormFieldNotchedOutline", ""],
  Ff = ["*"],
  Pf = ["textField"],
  Nf = ["iconPrefixContainer"],
  Lf = ["textPrefixContainer"],
  Vf = ["iconSuffixContainer"],
  jf = ["textSuffixContainer"],
  Bf = [
    "*",
    [["mat-label"]],
    [["", "matPrefix", ""], ["", "matIconPrefix", ""]],
    [["", "matTextPrefix", ""]],
    [["", "matTextSuffix", ""]],
    [["", "matSuffix", ""], ["", "matIconSuffix", ""]],
    [["mat-error"], ["", "matError", ""]],
    [["mat-hint", 3, "align", "end"]],
    [["mat-hint", "align", "end"]],
  ],
  zf = [
    "*",
    "mat-label",
    "[matPrefix], [matIconPrefix]",
    "[matTextPrefix]",
    "[matTextSuffix]",
    "[matSuffix], [matIconSuffix]",
    "mat-error, [matError]",
    "mat-hint:not([align='end'])",
    "mat-hint[align='end']",
  ];
function Uf(n, i) {
  n & 1 && U(0, "span", 21);
}
function Hf(n, i) {
  if (
    n & 1 && (C(0, "label", 20), B(1, 1), te(2, Uf, 1, 0, "span", 21), I()),
      n & 2
  ) {
    let e = de(2);
    le("floating", e._shouldLabelFloat())("monitorResize", e._hasOutline())(
      "id",
      e._labelId,
    ),
      ie("for", e._control.disableAutomaticLabeling ? null : e._control.id),
      O(2),
      oe(!e.hideRequiredMarker && e._control.required ? 2 : -1);
  }
}
function $f(n, i) {
  if (n & 1 && te(0, Hf, 3, 5, "label", 20), n & 2) {
    let e = de();
    oe(e._hasFloatingLabel() ? 0 : -1);
  }
}
function Wf(n, i) {
  n & 1 && U(0, "div", 7);
}
function Gf(n, i) {}
function qf(n, i) {
  if (n & 1 && te(0, Gf, 0, 0, "ng-template", 13), n & 2) {
    de(2);
    let e = fi(1);
    le("ngTemplateOutlet", e);
  }
}
function Yf(n, i) {
  if (n & 1 && (C(0, "div", 9), te(1, qf, 1, 1, null, 13), I()), n & 2) {
    let e = de();
    le("matFormFieldNotchedOutlineOpen", e._shouldLabelFloat()),
      O(),
      oe(e._forceDisplayInfixLabel() ? -1 : 1);
  }
}
function Xf(n, i) {
  n & 1 && (C(0, "div", 10, 2), B(2, 2), I());
}
function Zf(n, i) {
  n & 1 && (C(0, "div", 11, 3), B(2, 3), I());
}
function Kf(n, i) {}
function Qf(n, i) {
  if (n & 1 && te(0, Kf, 0, 0, "ng-template", 13), n & 2) {
    de();
    let e = fi(1);
    le("ngTemplateOutlet", e);
  }
}
function Jf(n, i) {
  n & 1 && (C(0, "div", 14, 4), B(2, 4), I());
}
function ep(n, i) {
  n & 1 && (C(0, "div", 15, 5), B(2, 5), I());
}
function tp(n, i) {
  n & 1 && U(0, "div", 16);
}
function ip(n, i) {
  if (n & 1 && (C(0, "div", 18), B(1, 6), I()), n & 2) {
    let e = de();
    le("@transitionMessages", e._subscriptAnimationState);
  }
}
function np(n, i) {
  if (n & 1 && (C(0, "mat-hint", 22), Ve(1), I()), n & 2) {
    let e = de(2);
    le("id", e._hintLabelId), O(), hs(e.hintLabel);
  }
}
function rp(n, i) {
  if (
    n & 1 &&
    (C(0, "div", 19),
      te(1, np, 2, 2, "mat-hint", 22),
      B(2, 7),
      U(3, "div", 23),
      B(4, 8),
      I()), n & 2
  ) {
    let e = de();
    le("@transitionMessages", e._subscriptAnimationState),
      O(),
      oe(e.hintLabel ? 1 : -1);
  }
}
var Hl = (() => {
    class n {
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵdir = T({ type: n, selectors: [["mat-label"]] });
    }
    return n;
  })(),
  op = new p("MatError");
var $l = (() => {
    class n {
      align = "start";
      id = l(Te).getId("mat-mdc-hint-");
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵdir = T({
        type: n,
        selectors: [["mat-hint"]],
        hostAttrs: [
          1,
          "mat-mdc-form-field-hint",
          "mat-mdc-form-field-bottom-align",
        ],
        hostVars: 4,
        hostBindings: function (t, r) {
          t & 2 &&
            (vt("id", r.id),
              ie("align", null),
              j("mat-mdc-form-field-hint-end", r.align === "end"));
        },
        inputs: { align: "align", id: "id" },
      });
    }
    return n;
  })(),
  ap = new p("MatPrefix");
var sp = new p("MatSuffix");
var Kl = new p("FloatingLabelParent"),
  Wl = (() => {
    class n {
      _elementRef = l(N);
      get floating() {
        return this._floating;
      }
      set floating(e) {
        this._floating = e, this.monitorResize && this._handleResize();
      }
      _floating = !1;
      get monitorResize() {
        return this._monitorResize;
      }
      set monitorResize(e) {
        this._monitorResize = e,
          this._monitorResize
            ? this._subscribeToResize()
            : this._resizeSubscription.unsubscribe();
      }
      _monitorResize = !1;
      _resizeObserver = l(Ul);
      _ngZone = l(x);
      _parent = l(Kl);
      _resizeSubscription = new Fe();
      constructor() {}
      ngOnDestroy() {
        this._resizeSubscription.unsubscribe();
      }
      getWidth() {
        return cp(this._elementRef.nativeElement);
      }
      get element() {
        return this._elementRef.nativeElement;
      }
      _handleResize() {
        setTimeout(() => this._parent._handleLabelResized());
      }
      _subscribeToResize() {
        this._resizeSubscription.unsubscribe(),
          this._ngZone.runOutsideAngular(() => {
            this._resizeSubscription = this._resizeObserver.observe(
              this._elementRef.nativeElement,
              { box: "border-box" },
            ).subscribe(() => this._handleResize());
          });
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵdir = T({
        type: n,
        selectors: [["label", "matFormFieldFloatingLabel", ""]],
        hostAttrs: [1, "mdc-floating-label", "mat-mdc-floating-label"],
        hostVars: 2,
        hostBindings: function (t, r) {
          t & 2 && j("mdc-floating-label--float-above", r.floating);
        },
        inputs: { floating: "floating", monitorResize: "monitorResize" },
      });
    }
    return n;
  })();
function cp(n) {
  let i = n;
  if (i.offsetParent !== null) return i.scrollWidth;
  let e = i.cloneNode(!0);
  e.style.setProperty("position", "absolute"),
    e.style.setProperty("transform", "translate(-9999px, -9999px)"),
    document.documentElement.appendChild(e);
  let t = e.scrollWidth;
  return e.remove(), t;
}
var Gl = "mdc-line-ripple--active",
  dr = "mdc-line-ripple--deactivating",
  ql = (() => {
    class n {
      _elementRef = l(N);
      _cleanupTransitionEnd;
      constructor() {
        let e = l(x), t = l(Le);
        e.runOutsideAngular(() => {
          this._cleanupTransitionEnd = t.listen(
            this._elementRef.nativeElement,
            "transitionend",
            this._handleTransitionEnd,
          );
        });
      }
      activate() {
        let e = this._elementRef.nativeElement.classList;
        e.remove(dr), e.add(Gl);
      }
      deactivate() {
        this._elementRef.nativeElement.classList.add(dr);
      }
      _handleTransitionEnd = (e) => {
        let t = this._elementRef.nativeElement.classList, r = t.contains(dr);
        e.propertyName === "opacity" && r && t.remove(Gl, dr);
      };
      ngOnDestroy() {
        this._cleanupTransitionEnd();
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵdir = T({
        type: n,
        selectors: [["div", "matFormFieldLineRipple", ""]],
        hostAttrs: [1, "mdc-line-ripple"],
      });
    }
    return n;
  })(),
  Yl = (() => {
    class n {
      _elementRef = l(N);
      _ngZone = l(x);
      open = !1;
      _notch;
      constructor() {}
      ngAfterViewInit() {
        let e = this._elementRef.nativeElement.querySelector(
          ".mdc-floating-label",
        );
        e
          ? (this._elementRef.nativeElement.classList.add(
            "mdc-notched-outline--upgraded",
          ),
            typeof requestAnimationFrame == "function" &&
            (e.style.transitionDuration = "0s",
              this._ngZone.runOutsideAngular(() => {
                requestAnimationFrame(() => e.style.transitionDuration = "");
              })))
          : this._elementRef.nativeElement.classList.add(
            "mdc-notched-outline--no-label",
          );
      }
      _setNotchWidth(e) {
        !this.open || !e
          ? this._notch.nativeElement.style.width = ""
          : this._notch.nativeElement.style.width =
            `calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`;
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵcmp = F({
        type: n,
        selectors: [["div", "matFormFieldNotchedOutline", ""]],
        viewQuery: function (t, r) {
          if (t & 1 && ne(Tf, 5), t & 2) {
            let o;
            W(o = G()) && (r._notch = o.first);
          }
        },
        hostAttrs: [1, "mdc-notched-outline"],
        hostVars: 2,
        hostBindings: function (t, r) {
          t & 2 && j("mdc-notched-outline--notched", r.open);
        },
        inputs: { open: [0, "matFormFieldNotchedOutlineOpen", "open"] },
        attrs: Of,
        ngContentSelectors: Ff,
        decls: 5,
        vars: 0,
        consts: [
          ["notch", ""],
          [1, "mat-mdc-notch-piece", "mdc-notched-outline__leading"],
          [1, "mat-mdc-notch-piece", "mdc-notched-outline__notch"],
          [1, "mat-mdc-notch-piece", "mdc-notched-outline__trailing"],
        ],
        template: function (t, r) {
          t & 1 &&
            (ue(),
              U(0, "div", 1),
              C(1, "div", 2, 0),
              B(3),
              I(),
              U(4, "div", 3));
        },
        encapsulation: 2,
        changeDetection: 0,
      });
    }
    return n;
  })(),
  lp = {
    transitionMessages: fn("transitionMessages", [
      gi("enter", yt({ opacity: 1, transform: "translateY(0%)" })),
      bi("void => enter", [
        yt({ opacity: 0, transform: "translateY(-5px)" }),
        pi("300ms cubic-bezier(0.55, 0, 0.55, 0.2)"),
      ]),
    ]),
  },
  wa = (() => {
    class n {
      value;
      stateChanges;
      id;
      placeholder;
      ngControl;
      focused;
      empty;
      shouldLabelFloat;
      required;
      disabled;
      errorState;
      controlType;
      autofilled;
      userAriaDescribedBy;
      disableAutomaticLabeling;
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵdir = T({ type: n });
    }
    return n;
  })();
var Ca = new p("MatFormField"),
  dp = new p("MAT_FORM_FIELD_DEFAULT_OPTIONS"),
  Xl = "fill",
  up = "auto",
  Zl = "fixed",
  mp = "translateY(-50%)",
  Ql = (() => {
    class n {
      _elementRef = l(N);
      _changeDetectorRef = l(Ce);
      _dir = l(Zi);
      _platform = l(q);
      _idGenerator = l(Te);
      _defaults = l(dp, { optional: !0 });
      _animationMode = l(xe, { optional: !0 });
      _textField;
      _iconPrefixContainer;
      _textPrefixContainer;
      _iconSuffixContainer;
      _textSuffixContainer;
      _floatingLabel;
      _notchedOutline;
      _lineRipple;
      _formFieldControl;
      _prefixChildren;
      _suffixChildren;
      _errorChildren;
      _hintChildren;
      _labelChild = as(Hl);
      get hideRequiredMarker() {
        return this._hideRequiredMarker;
      }
      set hideRequiredMarker(e) {
        this._hideRequiredMarker = Qt(e);
      }
      _hideRequiredMarker = !1;
      color = "primary";
      get floatLabel() {
        return this._floatLabel || this._defaults?.floatLabel || up;
      }
      set floatLabel(e) {
        e !== this._floatLabel &&
          (this._floatLabel = e, this._changeDetectorRef.markForCheck());
      }
      _floatLabel;
      get appearance() {
        return this._appearance;
      }
      set appearance(e) {
        let t = this._appearance, r = e || this._defaults?.appearance || Xl;
        this._appearance = r,
          this._appearance === "outline" && this._appearance !== t &&
          (this._needsOutlineLabelOffsetUpdate = !0);
      }
      _appearance = Xl;
      get subscriptSizing() {
        return this._subscriptSizing || this._defaults?.subscriptSizing || Zl;
      }
      set subscriptSizing(e) {
        this._subscriptSizing = e || this._defaults?.subscriptSizing || Zl;
      }
      _subscriptSizing = null;
      get hintLabel() {
        return this._hintLabel;
      }
      set hintLabel(e) {
        this._hintLabel = e, this._processHints();
      }
      _hintLabel = "";
      _hasIconPrefix = !1;
      _hasTextPrefix = !1;
      _hasIconSuffix = !1;
      _hasTextSuffix = !1;
      _labelId = this._idGenerator.getId("mat-mdc-form-field-label-");
      _hintLabelId = this._idGenerator.getId("mat-mdc-hint-");
      _subscriptAnimationState = "";
      get _control() {
        return this._explicitFormFieldControl || this._formFieldControl;
      }
      set _control(e) {
        this._explicitFormFieldControl = e;
      }
      _destroyed = new w();
      _isFocused = null;
      _explicitFormFieldControl;
      _needsOutlineLabelOffsetUpdate = !1;
      _previousControl = null;
      _stateChanges;
      _valueChanges;
      _describedByChanges;
      _injector = l($);
      constructor() {
        let e = this._defaults;
        e &&
          (e.appearance && (this.appearance = e.appearance),
            this._hideRequiredMarker = !!e?.hideRequiredMarker,
            e.color && (this.color = e.color));
      }
      ngAfterViewInit() {
        this._updateFocusState(),
          this._subscriptAnimationState = "enter",
          this._changeDetectorRef.detectChanges();
      }
      ngAfterContentInit() {
        this._assertFormFieldControl(),
          this._initializeSubscript(),
          this._initializePrefixAndSuffix(),
          this._initializeOutlineLabelOffsetSubscriptions();
      }
      ngAfterContentChecked() {
        this._assertFormFieldControl(),
          this._control !== this._previousControl &&
          (this._initializeControl(this._previousControl),
            this._previousControl = this._control);
      }
      ngOnDestroy() {
        this._stateChanges?.unsubscribe(),
          this._valueChanges?.unsubscribe(),
          this._describedByChanges?.unsubscribe(),
          this._destroyed.next(),
          this._destroyed.complete();
      }
      getLabelId = Ye(() => this._hasFloatingLabel() ? this._labelId : null);
      getConnectedOverlayOrigin() {
        return this._textField || this._elementRef;
      }
      _animateAndLockLabel() {
        this._hasFloatingLabel() && (this.floatLabel = "always");
      }
      _initializeControl(e) {
        let t = this._control, r = "mat-mdc-form-field-type-";
        e && this._elementRef.nativeElement.classList.remove(r + e.controlType),
          t.controlType &&
          this._elementRef.nativeElement.classList.add(r + t.controlType),
          this._stateChanges?.unsubscribe(),
          this._stateChanges = t.stateChanges.subscribe(() => {
            this._updateFocusState(), this._changeDetectorRef.markForCheck();
          }),
          this._describedByChanges?.unsubscribe(),
          this._describedByChanges = t.stateChanges.pipe(
            ht([void 0, void 0]),
            _(() => [t.errorState, t.userAriaDescribedBy]),
            Rr(),
            re(([[o, a], [s, c]]) => o !== s || a !== c),
          ).subscribe(() => this._syncDescribedByIds()),
          this._valueChanges?.unsubscribe(),
          t.ngControl && t.ngControl.valueChanges &&
          (this._valueChanges = t.ngControl.valueChanges.pipe(
            se(this._destroyed),
          ).subscribe(() => this._changeDetectorRef.markForCheck()));
      }
      _checkPrefixAndSuffixTypes() {
        this._hasIconPrefix = !!this._prefixChildren.find((e) => !e._isText),
          this._hasTextPrefix = !!this._prefixChildren.find((e) => e._isText),
          this._hasIconSuffix = !!this._suffixChildren.find((e) => !e._isText),
          this._hasTextSuffix = !!this._suffixChildren.find((e) => e._isText);
      }
      _initializePrefixAndSuffix() {
        this._checkPrefixAndSuffixTypes(),
          an(this._prefixChildren.changes, this._suffixChildren.changes)
            .subscribe(() => {
              this._checkPrefixAndSuffixTypes(),
                this._changeDetectorRef.markForCheck();
            });
      }
      _initializeSubscript() {
        this._hintChildren.changes.subscribe(() => {
          this._processHints(), this._changeDetectorRef.markForCheck();
        }),
          this._errorChildren.changes.subscribe(() => {
            this._syncDescribedByIds(), this._changeDetectorRef.markForCheck();
          }),
          this._validateHints(),
          this._syncDescribedByIds();
      }
      _assertFormFieldControl() {
        this._control;
      }
      _updateFocusState() {
        this._control.focused && !this._isFocused
          ? (this._isFocused = !0, this._lineRipple?.activate())
          : !this._control.focused &&
            (this._isFocused || this._isFocused === null) &&
            (this._isFocused = !1, this._lineRipple?.deactivate()),
          this._textField?.nativeElement.classList.toggle(
            "mdc-text-field--focused",
            this._control.focused,
          );
      }
      _initializeOutlineLabelOffsetSubscriptions() {
        this._prefixChildren.changes.subscribe(() =>
          this._needsOutlineLabelOffsetUpdate = !0
        ),
          ln(() => {
            this._needsOutlineLabelOffsetUpdate &&
              (this._needsOutlineLabelOffsetUpdate = !1,
                this._updateOutlineLabelOffset());
          }, { injector: this._injector }),
          this._dir.change.pipe(se(this._destroyed)).subscribe(() =>
            this._needsOutlineLabelOffsetUpdate = !0
          );
      }
      _shouldAlwaysFloat() {
        return this.floatLabel === "always";
      }
      _hasOutline() {
        return this.appearance === "outline";
      }
      _forceDisplayInfixLabel() {
        return !this._platform.isBrowser && this._prefixChildren.length &&
          !this._shouldLabelFloat();
      }
      _hasFloatingLabel = Ye(() => !!this._labelChild());
      _shouldLabelFloat() {
        return this._hasFloatingLabel()
          ? this._control.shouldLabelFloat || this._shouldAlwaysFloat()
          : !1;
      }
      _shouldForward(e) {
        let t = this._control ? this._control.ngControl : null;
        return t && t[e];
      }
      _getDisplayedMessages() {
        return this._errorChildren && this._errorChildren.length > 0 &&
            this._control.errorState
          ? "error"
          : "hint";
      }
      _handleLabelResized() {
        this._refreshOutlineNotchWidth();
      }
      _refreshOutlineNotchWidth() {
        !this._hasOutline() || !this._floatingLabel || !this._shouldLabelFloat()
          ? this._notchedOutline?._setNotchWidth(0)
          : this._notchedOutline?._setNotchWidth(
            this._floatingLabel.getWidth(),
          );
      }
      _processHints() {
        this._validateHints(), this._syncDescribedByIds();
      }
      _validateHints() {
        this._hintChildren;
      }
      _syncDescribedByIds() {
        if (this._control) {
          let e = [];
          if (
            this._control.userAriaDescribedBy &&
            typeof this._control.userAriaDescribedBy == "string" &&
            e.push(...this._control.userAriaDescribedBy.split(" ")),
              this._getDisplayedMessages() === "hint"
          ) {
            let t = this._hintChildren
                ? this._hintChildren.find((o) => o.align === "start")
                : null,
              r = this._hintChildren
                ? this._hintChildren.find((o) => o.align === "end")
                : null;
            t ? e.push(t.id) : this._hintLabel && e.push(this._hintLabelId),
              r && e.push(r.id);
          } else {this._errorChildren &&
              e.push(...this._errorChildren.map((t) => t.id));}
          this._control.setDescribedByIds(e);
        }
      }
      _updateOutlineLabelOffset() {
        if (!this._hasOutline() || !this._floatingLabel) return;
        let e = this._floatingLabel.element;
        if (!(this._iconPrefixContainer || this._textPrefixContainer)) {
          e.style.transform = "";
          return;
        }
        if (!this._isAttachedToDom()) {
          this._needsOutlineLabelOffsetUpdate = !0;
          return;
        }
        let t = this._iconPrefixContainer?.nativeElement,
          r = this._textPrefixContainer?.nativeElement,
          o = this._iconSuffixContainer?.nativeElement,
          a = this._textSuffixContainer?.nativeElement,
          s = t?.getBoundingClientRect().width ?? 0,
          c = r?.getBoundingClientRect().width ?? 0,
          d = o?.getBoundingClientRect().width ?? 0,
          u = a?.getBoundingClientRect().width ?? 0,
          h = this._dir.value === "rtl" ? "-1" : "1",
          v = `${s + c}px`,
          R =
            `calc(${h} * (${v} + var(--mat-mdc-form-field-label-offset-x, 0px)))`;
        e.style.transform = `var(
        --mat-mdc-form-field-label-transform,
        ${mp} translateX(${R})
    )`;
        let b = s + c + d + u;
        this._elementRef.nativeElement.style.setProperty(
          "--mat-form-field-notch-max-width",
          `calc(100% - ${b}px)`,
        );
      }
      _isAttachedToDom() {
        let e = this._elementRef.nativeElement;
        if (e.getRootNode) {
          let t = e.getRootNode();
          return t && t !== e;
        }
        return document.documentElement.contains(e);
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵcmp = F({
        type: n,
        selectors: [["mat-form-field"]],
        contentQueries: function (t, r, o) {
          if (
            t & 1 &&
            (us(o, r._labelChild, Hl, 5),
              _t(o, wa, 5),
              _t(o, ap, 5),
              _t(o, sp, 5),
              _t(o, op, 5),
              _t(o, $l, 5)), t & 2
          ) {
            ms();
            let a;
            W(a = G()) && (r._formFieldControl = a.first),
              W(a = G()) && (r._prefixChildren = a),
              W(a = G()) && (r._suffixChildren = a),
              W(a = G()) && (r._errorChildren = a),
              W(a = G()) && (r._hintChildren = a);
          }
        },
        viewQuery: function (t, r) {
          if (
            t & 1 &&
            (ne(Pf, 5),
              ne(Nf, 5),
              ne(Lf, 5),
              ne(Vf, 5),
              ne(jf, 5),
              ne(Wl, 5),
              ne(Yl, 5),
              ne(ql, 5)), t & 2
          ) {
            let o;
            W(o = G()) && (r._textField = o.first),
              W(o = G()) && (r._iconPrefixContainer = o.first),
              W(o = G()) && (r._textPrefixContainer = o.first),
              W(o = G()) && (r._iconSuffixContainer = o.first),
              W(o = G()) && (r._textSuffixContainer = o.first),
              W(o = G()) && (r._floatingLabel = o.first),
              W(o = G()) && (r._notchedOutline = o.first),
              W(o = G()) && (r._lineRipple = o.first);
          }
        },
        hostAttrs: [1, "mat-mdc-form-field"],
        hostVars: 42,
        hostBindings: function (t, r) {
          t & 2 &&
            j("mat-mdc-form-field-label-always-float", r._shouldAlwaysFloat())(
              "mat-mdc-form-field-has-icon-prefix",
              r._hasIconPrefix,
            )("mat-mdc-form-field-has-icon-suffix", r._hasIconSuffix)(
              "mat-form-field-invalid",
              r._control.errorState,
            )("mat-form-field-disabled", r._control.disabled)(
              "mat-form-field-autofilled",
              r._control.autofilled,
            )(
              "mat-form-field-no-animations",
              r._animationMode === "NoopAnimations",
            )("mat-form-field-appearance-fill", r.appearance == "fill")(
              "mat-form-field-appearance-outline",
              r.appearance == "outline",
            )(
              "mat-form-field-hide-placeholder",
              r._hasFloatingLabel() && !r._shouldLabelFloat(),
            )("mat-focused", r._control.focused)(
              "mat-primary",
              r.color !== "accent" && r.color !== "warn",
            )("mat-accent", r.color === "accent")(
              "mat-warn",
              r.color === "warn",
            )("ng-untouched", r._shouldForward("untouched"))(
              "ng-touched",
              r._shouldForward("touched"),
            )("ng-pristine", r._shouldForward("pristine"))(
              "ng-dirty",
              r._shouldForward("dirty"),
            )("ng-valid", r._shouldForward("valid"))(
              "ng-invalid",
              r._shouldForward("invalid"),
            )("ng-pending", r._shouldForward("pending"));
        },
        inputs: {
          hideRequiredMarker: "hideRequiredMarker",
          color: "color",
          floatLabel: "floatLabel",
          appearance: "appearance",
          subscriptSizing: "subscriptSizing",
          hintLabel: "hintLabel",
        },
        exportAs: ["matFormField"],
        features: [
          ge([{ provide: Ca, useExisting: n }, {
            provide: Kl,
            useExisting: n,
          }]),
        ],
        ngContentSelectors: zf,
        decls: 18,
        vars: 21,
        consts: [
          ["labelTemplate", ""],
          ["textField", ""],
          ["iconPrefixContainer", ""],
          ["textPrefixContainer", ""],
          ["textSuffixContainer", ""],
          ["iconSuffixContainer", ""],
          [1, "mat-mdc-text-field-wrapper", "mdc-text-field", 3, "click"],
          [1, "mat-mdc-form-field-focus-overlay"],
          [1, "mat-mdc-form-field-flex"],
          [
            "matFormFieldNotchedOutline",
            "",
            3,
            "matFormFieldNotchedOutlineOpen",
          ],
          [1, "mat-mdc-form-field-icon-prefix"],
          [1, "mat-mdc-form-field-text-prefix"],
          [1, "mat-mdc-form-field-infix"],
          [3, "ngTemplateOutlet"],
          [1, "mat-mdc-form-field-text-suffix"],
          [1, "mat-mdc-form-field-icon-suffix"],
          ["matFormFieldLineRipple", ""],
          [
            1,
            "mat-mdc-form-field-subscript-wrapper",
            "mat-mdc-form-field-bottom-align",
          ],
          [1, "mat-mdc-form-field-error-wrapper"],
          [1, "mat-mdc-form-field-hint-wrapper"],
          [
            "matFormFieldFloatingLabel",
            "",
            3,
            "floating",
            "monitorResize",
            "id",
          ],
          [
            "aria-hidden",
            "true",
            1,
            "mat-mdc-form-field-required-marker",
            "mdc-floating-label--required",
          ],
          [3, "id"],
          [1, "mat-mdc-form-field-hint-spacer"],
        ],
        template: function (t, r) {
          if (t & 1) {
            let o = rt();
            ue(Bf),
              te(0, $f, 1, 1, "ng-template", null, 0, fs),
              C(2, "div", 6, 1),
              J("click", function (s) {
                return ve(o), _e(r._control.onContainerClick(s));
              }),
              te(4, Wf, 1, 0, "div", 7),
              C(5, "div", 8),
              te(6, Yf, 2, 2, "div", 9)(7, Xf, 3, 0, "div", 10)(
                8,
                Zf,
                3,
                0,
                "div",
                11,
              ),
              C(9, "div", 12),
              te(10, Qf, 1, 1, null, 13),
              B(11),
              I(),
              te(12, Jf, 3, 0, "div", 14)(13, ep, 3, 0, "div", 15),
              I(),
              te(14, tp, 1, 0, "div", 16),
              I(),
              C(15, "div", 17),
              te(16, ip, 2, 1, "div", 18)(17, rp, 5, 2, "div", 19),
              I();
          }
          if (t & 2) {
            let o;
            O(2),
              j("mdc-text-field--filled", !r._hasOutline())(
                "mdc-text-field--outlined",
                r._hasOutline(),
              )("mdc-text-field--no-label", !r._hasFloatingLabel())(
                "mdc-text-field--disabled",
                r._control.disabled,
              )("mdc-text-field--invalid", r._control.errorState),
              O(2),
              oe(!r._hasOutline() && !r._control.disabled ? 4 : -1),
              O(2),
              oe(r._hasOutline() ? 6 : -1),
              O(),
              oe(r._hasIconPrefix ? 7 : -1),
              O(),
              oe(r._hasTextPrefix ? 8 : -1),
              O(2),
              oe(!r._hasOutline() || r._forceDisplayInfixLabel() ? 10 : -1),
              O(2),
              oe(r._hasTextSuffix ? 12 : -1),
              O(),
              oe(r._hasIconSuffix ? 13 : -1),
              O(),
              oe(r._hasOutline() ? -1 : 14),
              O(),
              j(
                "mat-mdc-form-field-subscript-dynamic-size",
                r.subscriptSizing === "dynamic",
              ),
              O(),
              oe(
                (o = r._getDisplayedMessages()) === "error"
                  ? 16
                  : o === "hint"
                  ? 17
                  : -1,
              );
          }
        },
        dependencies: [Wl, Yl, ys, ql, $l],
        styles: [
          '.mdc-text-field{display:inline-flex;align-items:baseline;padding:0 16px;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-text-field__input{width:100%;min-width:0;border:none;border-radius:0;background:none;padding:0;-moz-appearance:none;-webkit-appearance:none;height:28px}.mdc-text-field__input::-webkit-calendar-picker-indicator{display:none}.mdc-text-field__input::-ms-clear{display:none}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}.mdc-text-field__input::placeholder{opacity:0}.mdc-text-field__input::-moz-placeholder{opacity:0}.mdc-text-field__input::-webkit-input-placeholder{opacity:0}.mdc-text-field__input:-ms-input-placeholder{opacity:0}.mdc-text-field--no-label .mdc-text-field__input::placeholder,.mdc-text-field--focused .mdc-text-field__input::placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder,.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder,.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder{opacity:1}.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{opacity:1}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder{opacity:0}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder{opacity:0}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder{opacity:0}.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder{opacity:0}.mdc-text-field--outlined .mdc-text-field__input,.mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input{height:100%}.mdc-text-field--outlined .mdc-text-field__input{display:flex;border:none !important;background-color:rgba(0,0,0,0)}.mdc-text-field--disabled .mdc-text-field__input{pointer-events:auto}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mdc-filled-text-field-input-text-color, var(--mat-sys-on-surface));caret-color:var(--mdc-filled-text-field-caret-color, var(--mat-sys-primary))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mdc-filled-text-field-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-filled-text-field-error-caret-color)}.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input{color:var(--mdc-filled-text-field-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input{color:var(--mdc-outlined-text-field-input-text-color, var(--mat-sys-on-surface));caret-color:var(--mdc-outlined-text-field-caret-color, var(--mat-sys-primary))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:var(--mdc-outlined-text-field-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder{color:var(--mdc-outlined-text-field-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder{color:var(--mdc-outlined-text-field-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder{color:var(--mdc-outlined-text-field-input-text-placeholder-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input{caret-color:var(--mdc-outlined-text-field-error-caret-color)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input{color:var(--mdc-outlined-text-field-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mdc-text-field--disabled .mdc-text-field__input{background-color:Window}}.mdc-text-field--filled{height:56px;border-bottom-right-radius:0;border-bottom-left-radius:0;border-top-left-radius:var(--mdc-filled-text-field-container-shape, var(--mat-sys-corner-extra-small));border-top-right-radius:var(--mdc-filled-text-field-container-shape, var(--mat-sys-corner-extra-small))}.mdc-text-field--filled:not(.mdc-text-field--disabled){background-color:var(--mdc-filled-text-field-container-color, var(--mat-sys-surface-variant))}.mdc-text-field--filled.mdc-text-field--disabled{background-color:var(--mdc-filled-text-field-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent))}.mdc-text-field--outlined{height:56px;overflow:visible;padding-right:max(16px,var(--mdc-outlined-text-field-container-shape, var(--mat-sys-corner-extra-small)));padding-left:max(16px,var(--mdc-outlined-text-field-container-shape, var(--mat-sys-corner-extra-small)) + 4px)}[dir=rtl] .mdc-text-field--outlined{padding-right:max(16px,var(--mdc-outlined-text-field-container-shape, var(--mat-sys-corner-extra-small)) + 4px);padding-left:max(16px,var(--mdc-outlined-text-field-container-shape, var(--mat-sys-corner-extra-small)))}.mdc-floating-label{position:absolute;left:0;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform}[dir=rtl] .mdc-floating-label{right:0;left:auto;transform-origin:right top;text-align:right}.mdc-text-field .mdc-floating-label{top:50%;transform:translateY(-50%);pointer-events:none}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:auto}[dir=rtl] .mdc-text-field--outlined .mdc-floating-label{left:auto;right:4px}.mdc-text-field--filled .mdc-floating-label{left:16px;right:auto}[dir=rtl] .mdc-text-field--filled .mdc-floating-label{left:auto;right:16px}.mdc-text-field--disabled .mdc-floating-label{cursor:default}@media(forced-colors: active){.mdc-text-field--disabled .mdc-floating-label{z-index:1}}.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label{display:none}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label{color:var(--mdc-filled-text-field-label-text-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label{color:var(--mdc-filled-text-field-focus-label-text-color, var(--mat-sys-primary))}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label{color:var(--mdc-filled-text-field-hover-label-text-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label{color:var(--mdc-filled-text-field-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label{color:var(--mdc-filled-text-field-error-label-text-color, var(--mat-sys-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label{color:var(--mdc-filled-text-field-error-focus-label-text-color, var(--mat-sys-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label{color:var(--mdc-filled-text-field-error-hover-label-text-color, var(--mat-sys-on-error-container))}.mdc-text-field--filled .mdc-floating-label{font-family:var(--mdc-filled-text-field-label-text-font, var(--mat-sys-body-large-font));font-size:var(--mdc-filled-text-field-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mdc-filled-text-field-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mdc-filled-text-field-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label{color:var(--mdc-outlined-text-field-label-text-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label{color:var(--mdc-outlined-text-field-focus-label-text-color, var(--mat-sys-primary))}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label{color:var(--mdc-outlined-text-field-hover-label-text-color, var(--mat-sys-on-surface))}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label{color:var(--mdc-outlined-text-field-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label{color:var(--mdc-outlined-text-field-error-label-text-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label{color:var(--mdc-outlined-text-field-error-focus-label-text-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label{color:var(--mdc-outlined-text-field-error-hover-label-text-color, var(--mat-sys-on-error-container))}.mdc-text-field--outlined .mdc-floating-label{font-family:var(--mdc-outlined-text-field-label-text-font, var(--mat-sys-body-large-font));font-size:var(--mdc-outlined-text-field-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mdc-outlined-text-field-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mdc-outlined-text-field-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-floating-label--float-above{cursor:auto;transform:translateY(-106%) scale(0.75)}.mdc-text-field--filled .mdc-floating-label--float-above{transform:translateY(-106%) scale(0.75)}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1);font-size:.75rem}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:133.3333333333%}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(0.75)}.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:1px;margin-right:0;content:"*"}[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after{margin-left:0;margin-right:1px}.mdc-notched-outline{display:flex;position:absolute;top:0;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline{text-align:right}.mdc-text-field--outlined .mdc-notched-outline{z-index:1}.mat-mdc-notch-piece{box-sizing:border-box;height:100%;pointer-events:none;border-top:1px solid;border-bottom:1px solid}.mdc-text-field--focused .mat-mdc-notch-piece{border-width:2px}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece{border-color:var(--mdc-outlined-text-field-outline-color, var(--mat-sys-outline));border-width:var(--mdc-outlined-text-field-outline-width, 1px)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece{border-color:var(--mdc-outlined-text-field-hover-outline-color, var(--mat-sys-on-surface))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece{border-color:var(--mdc-outlined-text-field-focus-outline-color, var(--mat-sys-primary))}.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece{border-color:var(--mdc-outlined-text-field-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece{border-color:var(--mdc-outlined-text-field-error-outline-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece{border-color:var(--mdc-outlined-text-field-error-hover-outline-color, var(--mat-sys-on-error-container))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece{border-color:var(--mdc-outlined-text-field-error-focus-outline-color, var(--mat-sys-error))}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece{border-width:var(--mdc-outlined-text-field-focus-outline-width, 2px)}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;border-top-left-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-sys-corner-extra-small));border-bottom-left-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-sys-corner-extra-small))}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{width:max(12px,var(--mdc-outlined-text-field-container-shape, var(--mat-sys-corner-extra-small)))}[dir=rtl] .mdc-notched-outline__leading{border-left:none;border-right:1px solid;border-bottom-left-radius:0;border-top-left-radius:0;border-top-right-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-sys-corner-extra-small));border-bottom-right-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-sys-corner-extra-small))}.mdc-notched-outline__trailing{flex-grow:1;border-left:none;border-right:1px solid;border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-sys-corner-extra-small));border-bottom-right-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-sys-corner-extra-small))}[dir=rtl] .mdc-notched-outline__trailing{border-left:1px solid;border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;border-top-left-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-sys-corner-extra-small));border-bottom-left-radius:var(--mdc-outlined-text-field-container-shape, var(--mat-sys-corner-extra-small))}.mdc-notched-outline__notch{flex:0 0 auto;width:auto}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch{max-width:min(var(--mat-form-field-notch-max-width, 100%),100% - max(12px,var(--mdc-outlined-text-field-container-shape, var(--mat-sys-corner-extra-small)))*2)}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none;--mat-form-field-notch-max-width: 100%}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{display:none}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:""}.mdc-line-ripple::before{z-index:1;border-bottom-width:var(--mdc-filled-text-field-active-indicator-height, 1px)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-active-indicator-color, var(--mat-sys-on-surface-variant))}.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-hover-active-indicator-color, var(--mat-sys-on-surface))}.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-error-active-indicator-color, var(--mat-sys-error))}.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before{border-bottom-color:var(--mdc-filled-text-field-error-hover-active-indicator-color, var(--mat-sys-on-error-container))}.mdc-line-ripple::after{transform:scaleX(0);opacity:0;z-index:2}.mdc-text-field--filled .mdc-line-ripple::after{border-bottom-width:var(--mdc-filled-text-field-focus-active-indicator-height, 2px)}.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mdc-filled-text-field-focus-active-indicator-color, var(--mat-sys-primary))}.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after{border-bottom-color:var(--mdc-filled-text-field-error-focus-active-indicator-color, var(--mat-sys-error))}.mdc-line-ripple--active::after{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-text-field--disabled{pointer-events:none}.mat-mdc-form-field-textarea-control{vertical-align:middle;resize:vertical;box-sizing:border-box;height:auto;margin:0;padding:0;border:none;overflow:auto}.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font:inherit;letter-spacing:inherit;text-decoration:inherit;text-transform:inherit;border:none}.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;line-height:normal;pointer-events:all;will-change:auto}.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label{cursor:inherit}.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control{height:auto}.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color]{height:23px}.mat-mdc-text-field-wrapper{height:auto;flex:auto;will-change:auto}.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-left:0;--mat-mdc-form-field-label-offset-x: -16px}.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-right:0}[dir=rtl] .mat-mdc-text-field-wrapper{padding-left:16px;padding-right:16px}[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper{padding-left:0}[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper{padding-right:0}.mat-form-field-disabled .mdc-text-field__input::placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder{color:var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label{left:auto;right:auto}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input{display:inline-block}.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch{padding-top:0}.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:1px solid rgba(0,0,0,0)}[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch{border-left:none;border-right:1px solid rgba(0,0,0,0)}.mat-mdc-form-field-infix{min-height:var(--mat-form-field-container-height, 56px);padding-top:var(--mat-form-field-filled-with-label-container-padding-top, 24px);padding-bottom:var(--mat-form-field-filled-with-label-container-padding-bottom, 8px)}.mdc-text-field--outlined .mat-mdc-form-field-infix,.mdc-text-field--no-label .mat-mdc-form-field-infix{padding-top:var(--mat-form-field-container-vertical-padding, 16px);padding-bottom:var(--mat-form-field-container-vertical-padding, 16px)}.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label{top:calc(var(--mat-form-field-container-height, 56px)/2)}.mdc-text-field--filled .mat-mdc-floating-label{display:var(--mat-form-field-filled-label-display, block)}.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{--mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1)) scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));transform:var(--mat-mdc-form-field-label-transform)}.mat-mdc-form-field-subscript-wrapper{box-sizing:border-box;width:100%;position:relative}.mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-error-wrapper{position:absolute;top:0;left:0;right:0;padding:0 16px}.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper{position:static}.mat-mdc-form-field-bottom-align::before{content:"";display:inline-block;height:16px}.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before{content:unset}.mat-mdc-form-field-hint-end{order:1}.mat-mdc-form-field-hint-wrapper{display:flex}.mat-mdc-form-field-hint-spacer{flex:1 0 1em}.mat-mdc-form-field-error{display:block;color:var(--mat-form-field-error-text-color, var(--mat-sys-error))}.mat-mdc-form-field-subscript-wrapper,.mat-mdc-form-field-bottom-align::before{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));line-height:var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));font-size:var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));letter-spacing:var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));font-weight:var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight))}.mat-mdc-form-field-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;opacity:0;pointer-events:none;background-color:var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface))}.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay{opacity:var(--mat-form-field-focus-state-layer-opacity, 0)}select.mat-mdc-form-field-input-control{-moz-appearance:none;-webkit-appearance:none;background-color:rgba(0,0,0,0);display:inline-flex;box-sizing:border-box}select.mat-mdc-form-field-input-control:not(:disabled){cursor:pointer}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option{color:var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10))}select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled{color:var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent))}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{content:"";width:0;height:0;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-top:5px solid;position:absolute;right:0;top:50%;margin-top:-2.5px;pointer-events:none;color:var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant))}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after{right:auto;left:0}.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after{color:var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary))}.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after{color:var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:15px}[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control{padding-right:0;padding-left:15px}@media(forced-colors: active){.mat-form-field-appearance-fill .mat-mdc-text-field-wrapper{outline:solid 1px}}@media(forced-colors: active){.mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper{outline-color:GrayText}}@media(forced-colors: active){.mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper{outline:dashed 3px}}@media(forced-colors: active){.mat-mdc-form-field.mat-focused .mdc-notched-outline{border:dashed 3px}}.mat-mdc-form-field-input-control[type=date],.mat-mdc-form-field-input-control[type=datetime],.mat-mdc-form-field-input-control[type=datetime-local],.mat-mdc-form-field-input-control[type=month],.mat-mdc-form-field-input-control[type=week],.mat-mdc-form-field-input-control[type=time]{line-height:1}.mat-mdc-form-field-input-control::-webkit-datetime-edit{line-height:1;padding:0;margin-bottom:-2px}.mat-mdc-form-field{--mat-mdc-form-field-floating-label-scale: 0.75;display:inline-flex;flex-direction:column;min-width:0;text-align:left;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));letter-spacing:var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));font-weight:var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight))}.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above{font-size:calc(var(--mat-form-field-outlined-label-text-populated-size)*var(--mat-mdc-form-field-floating-label-scale))}.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:var(--mat-form-field-outlined-label-text-populated-size)}[dir=rtl] .mat-mdc-form-field{text-align:right}.mat-mdc-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-mdc-text-field-wrapper{width:100%;z-index:0}.mat-mdc-form-field-icon-prefix,.mat-mdc-form-field-icon-suffix{align-self:center;line-height:0;pointer-events:auto;position:relative;z-index:1}.mat-mdc-form-field-icon-prefix>.mat-icon,.mat-mdc-form-field-icon-suffix>.mat-icon{padding:0 12px;box-sizing:content-box}.mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant))}.mat-form-field-disabled .mat-mdc-form-field-icon-prefix{color:var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant))}.mat-form-field-disabled .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-form-field-invalid .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error))}.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container))}.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix{color:var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error))}.mat-mdc-form-field-icon-prefix,[dir=rtl] .mat-mdc-form-field-icon-suffix{padding:0 4px 0 0}.mat-mdc-form-field-icon-suffix,[dir=rtl] .mat-mdc-form-field-icon-prefix{padding:0 0 0 4px}.mat-mdc-form-field-subscript-wrapper .mat-icon,.mat-mdc-form-field label .mat-icon{width:1em;height:1em;font-size:inherit}.mat-mdc-form-field-infix{flex:auto;min-width:0;width:180px;position:relative;box-sizing:border-box}.mat-mdc-form-field-infix:has(textarea[cols]){width:auto}.mat-mdc-form-field .mdc-notched-outline__notch{margin-left:-1px;-webkit-clip-path:inset(-9em -999em -9em 1px);clip-path:inset(-9em -999em -9em 1px)}[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch{margin-left:0;margin-right:-1px;-webkit-clip-path:inset(-9em 1px -9em -999em);clip-path:inset(-9em 1px -9em -999em)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-floating-label{transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input{transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::-moz-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input::-webkit-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field__input:-ms-input-placeholder{transition:opacity 67ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-mdc-form-field:not(.mat-form-field-no-animations).mdc-text-field--no-label .mdc-text-field__input::placeholder,.mat-mdc-form-field:not(.mat-form-field-no-animations).mdc-text-field--focused .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field:not(.mat-form-field-no-animations).mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder,.mat-mdc-form-field:not(.mat-form-field-no-animations).mdc-text-field--focused .mdc-text-field__input::-moz-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field:not(.mat-form-field-no-animations).mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder,.mat-mdc-form-field:not(.mat-form-field-no-animations).mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field:not(.mat-form-field-no-animations).mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder,.mat-mdc-form-field:not(.mat-form-field-no-animations).mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder{transition-delay:40ms;transition-duration:110ms}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before{transition-duration:75ms}.mat-mdc-form-field:not(.mat-form-field-no-animations) .mdc-line-ripple::after{transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-notched-outline .mdc-floating-label{max-width:calc(100% + 1px)}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(133.3333333333% + 1px)}',
        ],
        encapsulation: 2,
        data: { animation: [lp.transitionMessages] },
        changeDetection: 0,
      });
    }
    return n;
  })(),
  ka = (() => {
    class n {
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵmod = M({ type: n });
      static ɵinj = D({ imports: [X, ul, X] });
    }
    return n;
  })();
var fp = new p("MAT_INPUT_VALUE_ACCESSOR"),
  pp = [
    "button",
    "checkbox",
    "file",
    "hidden",
    "image",
    "radio",
    "range",
    "reset",
    "submit",
  ],
  gp = new p("MAT_INPUT_CONFIG"),
  Jl = (() => {
    class n {
      _elementRef = l(N);
      _platform = l(q);
      ngControl = l(Mt, { optional: !0, self: !0 });
      _autofillMonitor = l(Bl);
      _ngZone = l(x);
      _formField = l(Ca, { optional: !0 });
      _renderer = l(Le);
      _uid = l(Te).getId("mat-input-");
      _previousNativeValue;
      _inputValueAccessor;
      _signalBasedValueAccessor;
      _previousPlaceholder;
      _errorStateTracker;
      _config = l(gp, { optional: !0 });
      _cleanupIosKeyup;
      _cleanupWebkitWheel;
      _formFieldDescribedBy;
      _isServer;
      _isNativeSelect;
      _isTextarea;
      _isInFormField;
      focused = !1;
      stateChanges = new w();
      controlType = "mat-input";
      autofilled = !1;
      get disabled() {
        return this._disabled;
      }
      set disabled(e) {
        this._disabled = Qt(e),
          this.focused && (this.focused = !1, this.stateChanges.next());
      }
      _disabled = !1;
      get id() {
        return this._id;
      }
      set id(e) {
        this._id = e || this._uid;
      }
      _id;
      placeholder;
      name;
      get required() {
        return this._required ??
          this.ngControl?.control?.hasValidator(Un.required) ?? !1;
      }
      set required(e) {
        this._required = Qt(e);
      }
      _required;
      get type() {
        return this._type;
      }
      set type(e) {
        let t = this._type;
        this._type = e || "text",
          this._validateType(),
          !this._isTextarea && da().has(this._type) &&
          (this._elementRef.nativeElement.type = this._type),
          this._type !== t && this._ensureWheelDefaultBehavior();
      }
      _type = "text";
      get errorStateMatcher() {
        return this._errorStateTracker.matcher;
      }
      set errorStateMatcher(e) {
        this._errorStateTracker.matcher = e;
      }
      userAriaDescribedBy;
      get value() {
        return this._signalBasedValueAccessor
          ? this._signalBasedValueAccessor.value()
          : this._inputValueAccessor.value;
      }
      set value(e) {
        e !== this.value &&
          (this._signalBasedValueAccessor
            ? this._signalBasedValueAccessor.value.set(e)
            : this._inputValueAccessor.value = e,
            this.stateChanges.next());
      }
      get readonly() {
        return this._readonly;
      }
      set readonly(e) {
        this._readonly = Qt(e);
      }
      _readonly = !1;
      disabledInteractive;
      get errorState() {
        return this._errorStateTracker.errorState;
      }
      set errorState(e) {
        this._errorStateTracker.errorState = e;
      }
      _neverEmptyInputTypes = [
        "date",
        "datetime",
        "datetime-local",
        "month",
        "time",
        "week",
      ].filter((e) => da().has(e));
      constructor() {
        let e = l(oa, { optional: !0 }),
          t = l(sa, { optional: !0 }),
          r = l(Il),
          o = l(fp, { optional: !0, self: !0 }),
          a = this._elementRef.nativeElement,
          s = a.nodeName.toLowerCase();
        o
          ? cn(o.value)
            ? this._signalBasedValueAccessor = o
            : this._inputValueAccessor = o
          : this._inputValueAccessor = a,
          this._previousNativeValue = this.value,
          this.id = this.id,
          this._platform.IOS && this._ngZone.runOutsideAngular(() => {
            this._cleanupIosKeyup = this._renderer.listen(
              a,
              "keyup",
              this._iOSKeyupListener,
            );
          }),
          this._errorStateTracker = new ar(
            r,
            this.ngControl,
            t,
            e,
            this.stateChanges,
          ),
          this._isServer = !this._platform.isBrowser,
          this._isNativeSelect = s === "select",
          this._isTextarea = s === "textarea",
          this._isInFormField = !!this._formField,
          this.disabledInteractive = this._config?.disabledInteractive || !1,
          this._isNativeSelect &&
          (this.controlType = a.multiple
            ? "mat-native-select-multiple"
            : "mat-native-select"),
          this._signalBasedValueAccessor && $r(() => {
            this._signalBasedValueAccessor.value(), this.stateChanges.next();
          });
      }
      ngAfterViewInit() {
        this._platform.isBrowser &&
          this._autofillMonitor.monitor(this._elementRef.nativeElement)
            .subscribe((e) => {
              this.autofilled = e.isAutofilled, this.stateChanges.next();
            });
      }
      ngOnChanges() {
        this.stateChanges.next();
      }
      ngOnDestroy() {
        this.stateChanges.complete(),
          this._platform.isBrowser &&
          this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),
          this._cleanupIosKeyup?.(),
          this._cleanupWebkitWheel?.();
      }
      ngDoCheck() {
        this.ngControl &&
        (this.updateErrorState(),
          this.ngControl.disabled !== null &&
          this.ngControl.disabled !== this.disabled &&
          (this.disabled = this.ngControl.disabled, this.stateChanges.next())),
          this._dirtyCheckNativeValue(),
          this._dirtyCheckPlaceholder();
      }
      focus(e) {
        this._elementRef.nativeElement.focus(e);
      }
      updateErrorState() {
        this._errorStateTracker.updateErrorState();
      }
      _focusChanged(e) {
        if (e !== this.focused) {
          if (
            !this._isNativeSelect && e && this.disabled &&
            this.disabledInteractive
          ) {
            let t = this._elementRef.nativeElement;
            t.type === "number"
              ? (t.type = "text", t.setSelectionRange(0, 0), t.type = "number")
              : t.setSelectionRange(0, 0);
          }
          this.focused = e, this.stateChanges.next();
        }
      }
      _onInput() {}
      _dirtyCheckNativeValue() {
        let e = this._elementRef.nativeElement.value;
        this._previousNativeValue !== e &&
          (this._previousNativeValue = e, this.stateChanges.next());
      }
      _dirtyCheckPlaceholder() {
        let e = this._getPlaceholder();
        if (e !== this._previousPlaceholder) {
          let t = this._elementRef.nativeElement;
          this._previousPlaceholder = e,
            e
              ? t.setAttribute("placeholder", e)
              : t.removeAttribute("placeholder");
        }
      }
      _getPlaceholder() {
        return this.placeholder || null;
      }
      _validateType() {
        pp.indexOf(this._type) > -1;
      }
      _isNeverEmpty() {
        return this._neverEmptyInputTypes.indexOf(this._type) > -1;
      }
      _isBadInput() {
        let e = this._elementRef.nativeElement.validity;
        return e && e.badInput;
      }
      get empty() {
        return !this._isNeverEmpty() && !this._elementRef.nativeElement.value &&
          !this._isBadInput() && !this.autofilled;
      }
      get shouldLabelFloat() {
        if (this._isNativeSelect) {
          let e = this._elementRef.nativeElement, t = e.options[0];
          return this.focused || e.multiple || !this.empty ||
            !!(e.selectedIndex > -1 && t && t.label);
        } else return this.focused && !this.disabled || !this.empty;
      }
      setDescribedByIds(e) {
        let t = this._elementRef.nativeElement,
          r = t.getAttribute("aria-describedby"),
          o;
        if (r) {
          let a = this._formFieldDescribedBy || e;
          o = e.concat(r.split(" ").filter((s) => s && !a.includes(s)));
        } else o = e;
        this._formFieldDescribedBy = e,
          o.length
            ? t.setAttribute("aria-describedby", o.join(" "))
            : t.removeAttribute("aria-describedby");
      }
      onContainerClick() {
        this.focused || this.focus();
      }
      _isInlineSelect() {
        let e = this._elementRef.nativeElement;
        return this._isNativeSelect && (e.multiple || e.size > 1);
      }
      _iOSKeyupListener = (e) => {
        let t = e.target;
        !t.value && t.selectionStart === 0 && t.selectionEnd === 0 &&
          (t.setSelectionRange(1, 1), t.setSelectionRange(0, 0));
      };
      _webkitBlinkWheelListener = () => {};
      _ensureWheelDefaultBehavior() {
        this._cleanupWebkitWheel?.(),
          this._type === "number" &&
          (this._platform.BLINK || this._platform.WEBKIT) &&
          (this._cleanupWebkitWheel = this._renderer.listen(
            this._elementRef.nativeElement,
            "wheel",
            this._webkitBlinkWheelListener,
          ));
      }
      _getReadonlyAttribute() {
        return this._isNativeSelect
          ? null
          : this.readonly || this.disabled && this.disabledInteractive
          ? "true"
          : null;
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵdir = T({
        type: n,
        selectors: [
          ["input", "matInput", ""],
          ["textarea", "matInput", ""],
          ["select", "matNativeControl", ""],
          ["input", "matNativeControl", ""],
          ["textarea", "matNativeControl", ""],
        ],
        hostAttrs: [1, "mat-mdc-input-element"],
        hostVars: 21,
        hostBindings: function (t, r) {
          t & 1 && J("focus", function () {
            return r._focusChanged(!0);
          })("blur", function () {
            return r._focusChanged(!1);
          })("input", function () {
            return r._onInput();
          }),
            t & 2 &&
            (vt("id", r.id)("disabled", r.disabled && !r.disabledInteractive)(
              "required",
              r.required,
            ),
              ie("name", r.name || null)("readonly", r._getReadonlyAttribute())(
                "aria-disabled",
                r.disabled && r.disabledInteractive ? "true" : null,
              )("aria-invalid", r.empty && r.required ? null : r.errorState)(
                "aria-required",
                r.required,
              )("id", r.id),
              j("mat-input-server", r._isServer)(
                "mat-mdc-form-field-textarea-control",
                r._isInFormField && r._isTextarea,
              )("mat-mdc-form-field-input-control", r._isInFormField)(
                "mat-mdc-input-disabled-interactive",
                r.disabledInteractive,
              )("mdc-text-field__input", r._isInFormField)(
                "mat-mdc-native-select-inline",
                r._isInlineSelect(),
              ));
        },
        inputs: {
          disabled: "disabled",
          id: "id",
          placeholder: "placeholder",
          name: "name",
          required: "required",
          type: "type",
          errorStateMatcher: "errorStateMatcher",
          userAriaDescribedBy: [0, "aria-describedby", "userAriaDescribedBy"],
          value: "value",
          readonly: "readonly",
          disabledInteractive: [
            2,
            "disabledInteractive",
            "disabledInteractive",
            H,
          ],
        },
        exportAs: ["matInput"],
        features: [ge([{ provide: wa, useExisting: n }]), pe, Me],
      });
    }
    return n;
  })(),
  ed = (() => {
    class n {
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵmod = M({ type: n });
      static ɵinj = D({ imports: [X, ka, ka, zl, X] });
    }
    return n;
  })();
var vp = ["mat-button", ""],
  _p = [
    [["", 8, "material-icons", 3, "iconPositionEnd", ""], [
      "mat-icon",
      3,
      "iconPositionEnd",
      "",
    ], ["", "matButtonIcon", "", 3, "iconPositionEnd", ""]],
    "*",
    [["", "iconPositionEnd", "", 8, "material-icons"], [
      "mat-icon",
      "iconPositionEnd",
      "",
    ], ["", "matButtonIcon", "", "iconPositionEnd", ""]],
  ],
  yp = [
    ".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])",
    "*",
    ".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]",
  ];
var xp =
  "@media(forced-colors: active){.mat-mdc-button:not(.mdc-button--outlined),.mat-mdc-unelevated-button:not(.mdc-button--outlined),.mat-mdc-raised-button:not(.mdc-button--outlined),.mat-mdc-outlined-button:not(.mdc-button--outlined),.mat-mdc-icon-button.mat-mdc-icon-button{outline:solid 1px}}";
var wp = ["mat-icon-button", ""], Cp = ["*"];
var kp = new p("MAT_BUTTON_CONFIG");
var Ep = [{
    attribute: "mat-button",
    mdcClasses: ["mdc-button", "mat-mdc-button"],
  }, {
    attribute: "mat-flat-button",
    mdcClasses: [
      "mdc-button",
      "mdc-button--unelevated",
      "mat-mdc-unelevated-button",
    ],
  }, {
    attribute: "mat-raised-button",
    mdcClasses: ["mdc-button", "mdc-button--raised", "mat-mdc-raised-button"],
  }, {
    attribute: "mat-stroked-button",
    mdcClasses: [
      "mdc-button",
      "mdc-button--outlined",
      "mat-mdc-outlined-button",
    ],
  }, {
    attribute: "mat-fab",
    mdcClasses: ["mdc-fab", "mat-mdc-fab-base", "mat-mdc-fab"],
  }, {
    attribute: "mat-mini-fab",
    mdcClasses: [
      "mdc-fab",
      "mat-mdc-fab-base",
      "mdc-fab--mini",
      "mat-mdc-mini-fab",
    ],
  }, {
    attribute: "mat-icon-button",
    mdcClasses: ["mdc-icon-button", "mat-mdc-icon-button"],
  }],
  td = (() => {
    class n {
      _elementRef = l(N);
      _ngZone = l(x);
      _animationMode = l(xe, { optional: !0 });
      _focusMonitor = l(_l);
      _rippleLoader = l(Tl);
      _isFab = !1;
      color;
      get disableRipple() {
        return this._disableRipple;
      }
      set disableRipple(e) {
        this._disableRipple = e, this._updateRippleDisabled();
      }
      _disableRipple = !1;
      get disabled() {
        return this._disabled;
      }
      set disabled(e) {
        this._disabled = e, this._updateRippleDisabled();
      }
      _disabled = !1;
      ariaDisabled;
      disabledInteractive;
      constructor() {
        l(ze).load(lr);
        let e = l(kp, { optional: !0 }),
          t = this._elementRef.nativeElement,
          r = t.classList;
        this.disabledInteractive = e?.disabledInteractive ?? !1,
          this.color = e?.color ?? null,
          this._rippleLoader?.configureRipple(t, {
            className: "mat-mdc-button-ripple",
          });
        for (let { attribute: o, mdcClasses: a } of Ep) {
          t.hasAttribute(o) && r.add(...a);
        }
      }
      ngAfterViewInit() {
        this._focusMonitor.monitor(this._elementRef, !0);
      }
      ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef),
          this._rippleLoader?.destroyRipple(this._elementRef.nativeElement);
      }
      focus(e = "program", t) {
        e
          ? this._focusMonitor.focusVia(this._elementRef.nativeElement, e, t)
          : this._elementRef.nativeElement.focus(t);
      }
      _getAriaDisabled() {
        return this.ariaDisabled != null
          ? this.ariaDisabled
          : this.disabled && this.disabledInteractive
          ? !0
          : null;
      }
      _getDisabledAttribute() {
        return this.disabledInteractive || !this.disabled ? null : !0;
      }
      _updateRippleDisabled() {
        this._rippleLoader?.setDisabled(
          this._elementRef.nativeElement,
          this.disableRipple || this.disabled,
        );
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵdir = T({
        type: n,
        inputs: {
          color: "color",
          disableRipple: [2, "disableRipple", "disableRipple", H],
          disabled: [2, "disabled", "disabled", H],
          ariaDisabled: [2, "aria-disabled", "ariaDisabled", H],
          disabledInteractive: [
            2,
            "disabledInteractive",
            "disabledInteractive",
            H,
          ],
        },
        features: [pe],
      });
    }
    return n;
  })();
var ur = (() => {
  class n extends td {
    static ɵfac = (() => {
      let e;
      return function (r) {
        return (e || (e = Ie(n)))(r || n);
      };
    })();
    static ɵcmp = F({
      type: n,
      selectors: [
        ["button", "mat-button", ""],
        ["button", "mat-raised-button", ""],
        ["button", "mat-flat-button", ""],
        ["button", "mat-stroked-button", ""],
      ],
      hostVars: 14,
      hostBindings: function (t, r) {
        t & 2 &&
          (ie("disabled", r._getDisabledAttribute())(
            "aria-disabled",
            r._getAriaDisabled(),
          ),
            bt(r.color ? "mat-" + r.color : ""),
            j("mat-mdc-button-disabled", r.disabled)(
              "mat-mdc-button-disabled-interactive",
              r.disabledInteractive,
            )("_mat-animation-noopable", r._animationMode === "NoopAnimations")(
              "mat-unthemed",
              !r.color,
            )("mat-mdc-button-base", !0));
      },
      exportAs: ["matButton"],
      features: [ce],
      attrs: vp,
      ngContentSelectors: yp,
      decls: 7,
      vars: 4,
      consts: [
        [1, "mat-mdc-button-persistent-ripple"],
        [1, "mdc-button__label"],
        [1, "mat-focus-indicator"],
        [1, "mat-mdc-button-touch-target"],
      ],
      template: function (t, r) {
        t & 1 &&
        (ue(_p),
          U(0, "span", 0),
          B(1),
          C(2, "span", 1),
          B(3, 1),
          I(),
          B(4, 2),
          U(5, "span", 2)(6, "span", 3)),
          t & 2 &&
          j("mdc-button__ripple", !r._isFab)("mdc-fab__ripple", r._isFab);
      },
      styles: [
        '.mat-mdc-button-base{text-decoration:none}.mdc-button{-webkit-user-select:none;user-select:none;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:rgba(0,0,0,0);padding:0 8px}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button[hidden]{display:none}.mdc-button .mdc-button__label{position:relative}.mat-mdc-button{padding:0 var(--mat-text-button-horizontal-padding, 12px);height:var(--mdc-text-button-container-height, 40px);font-family:var(--mdc-text-button-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mdc-text-button-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mdc-text-button-label-text-tracking, var(--mat-sys-label-large-tracking));text-transform:var(--mdc-text-button-label-text-transform);font-weight:var(--mdc-text-button-label-text-weight, var(--mat-sys-label-large-weight))}.mat-mdc-button,.mat-mdc-button .mdc-button__ripple{border-radius:var(--mdc-text-button-container-shape, var(--mat-sys-corner-full))}.mat-mdc-button:not(:disabled){color:var(--mdc-text-button-label-text-color, var(--mat-sys-primary))}.mat-mdc-button[disabled],.mat-mdc-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-text-button-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-button:has(.material-icons,mat-icon,[matButtonIcon]){padding:0 var(--mat-text-button-with-icon-horizontal-padding, 16px)}.mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, -4px)}[dir=rtl] .mat-mdc-button>.mat-icon{margin-right:var(--mat-text-button-icon-offset, -4px);margin-left:var(--mat-text-button-icon-spacing, 8px)}.mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-offset, -4px);margin-left:var(--mat-text-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-button .mdc-button__label+.mat-icon{margin-right:var(--mat-text-button-icon-spacing, 8px);margin-left:var(--mat-text-button-icon-offset, -4px)}.mat-mdc-button .mat-ripple-element{background-color:var(--mat-text-button-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-state-layer-color, var(--mat-sys-primary))}.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-text-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-text-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-text-button-touch-target-display, block)}.mat-mdc-unelevated-button{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mdc-filled-button-container-height, 40px);font-family:var(--mdc-filled-button-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mdc-filled-button-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mdc-filled-button-label-text-tracking, var(--mat-sys-label-large-tracking));text-transform:var(--mdc-filled-button-label-text-transform);font-weight:var(--mdc-filled-button-label-text-weight, var(--mat-sys-label-large-weight));padding:0 var(--mat-filled-button-horizontal-padding, 24px)}.mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -8px)}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -8px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}.mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-offset, -8px);margin-left:var(--mat-filled-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label+.mat-icon{margin-right:var(--mat-filled-button-icon-spacing, 8px);margin-left:var(--mat-filled-button-icon-offset, -8px)}.mat-mdc-unelevated-button .mat-ripple-element{background-color:var(--mat-filled-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-state-layer-color, var(--mat-sys-on-primary))}.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-filled-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-unelevated-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-unelevated-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-unelevated-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-filled-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-unelevated-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-filled-button-touch-target-display, block)}.mat-mdc-unelevated-button:not(:disabled){color:var(--mdc-filled-button-label-text-color, var(--mat-sys-on-primary));background-color:var(--mdc-filled-button-container-color, var(--mat-sys-primary))}.mat-mdc-unelevated-button,.mat-mdc-unelevated-button .mdc-button__ripple{border-radius:var(--mdc-filled-button-container-shape, var(--mat-sys-corner-full))}.mat-mdc-unelevated-button[disabled],.mat-mdc-unelevated-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-filled-button-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mdc-filled-button-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-raised-button{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);box-shadow:var(--mdc-protected-button-container-elevation-shadow, var(--mat-sys-level1));height:var(--mdc-protected-button-container-height, 40px);font-family:var(--mdc-protected-button-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mdc-protected-button-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mdc-protected-button-label-text-tracking, var(--mat-sys-label-large-tracking));text-transform:var(--mdc-protected-button-label-text-transform);font-weight:var(--mdc-protected-button-label-text-weight, var(--mat-sys-label-large-weight));padding:0 var(--mat-protected-button-horizontal-padding, 24px)}.mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -8px)}[dir=rtl] .mat-mdc-raised-button>.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -8px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}.mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-offset, -8px);margin-left:var(--mat-protected-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-raised-button .mdc-button__label+.mat-icon{margin-right:var(--mat-protected-button-icon-spacing, 8px);margin-left:var(--mat-protected-button-icon-offset, -8px)}.mat-mdc-raised-button .mat-ripple-element{background-color:var(--mat-protected-button-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-state-layer-color, var(--mat-sys-primary))}.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-protected-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-raised-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-raised-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-raised-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-protected-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-raised-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-protected-button-touch-target-display, block)}.mat-mdc-raised-button:not(:disabled){color:var(--mdc-protected-button-label-text-color, var(--mat-sys-primary));background-color:var(--mdc-protected-button-container-color, var(--mat-sys-surface))}.mat-mdc-raised-button,.mat-mdc-raised-button .mdc-button__ripple{border-radius:var(--mdc-protected-button-container-shape, var(--mat-sys-corner-full))}.mat-mdc-raised-button:hover{box-shadow:var(--mdc-protected-button-hover-container-elevation-shadow, var(--mat-sys-level2))}.mat-mdc-raised-button:focus{box-shadow:var(--mdc-protected-button-focus-container-elevation-shadow, var(--mat-sys-level1))}.mat-mdc-raised-button:active,.mat-mdc-raised-button:focus:active{box-shadow:var(--mdc-protected-button-pressed-container-elevation-shadow, var(--mat-sys-level1))}.mat-mdc-raised-button[disabled],.mat-mdc-raised-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-protected-button-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mdc-protected-button-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-raised-button[disabled].mat-mdc-button-disabled,.mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled{box-shadow:var(--mdc-protected-button-disabled-container-elevation-shadow, var(--mat-sys-level0))}.mat-mdc-raised-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mdc-outlined-button-container-height, 40px);font-family:var(--mdc-outlined-button-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mdc-outlined-button-label-text-size, var(--mat-sys-label-large-size));letter-spacing:var(--mdc-outlined-button-label-text-tracking, var(--mat-sys-label-large-tracking));text-transform:var(--mdc-outlined-button-label-text-transform);font-weight:var(--mdc-outlined-button-label-text-weight, var(--mat-sys-label-large-weight));border-radius:var(--mdc-outlined-button-container-shape, var(--mat-sys-corner-full));border-width:var(--mdc-outlined-button-outline-width, 1px);padding:0 var(--mat-outlined-button-horizontal-padding, 24px)}.mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -8px)}[dir=rtl] .mat-mdc-outlined-button>.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -8px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}.mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-offset, -8px);margin-left:var(--mat-outlined-button-icon-spacing, 8px)}[dir=rtl] .mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-right:var(--mat-outlined-button-icon-spacing, 8px);margin-left:var(--mat-outlined-button-icon-offset, -8px)}.mat-mdc-outlined-button .mat-ripple-element{background-color:var(--mat-outlined-button-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-state-layer-color, var(--mat-sys-primary))}.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-outlined-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-outlined-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-outlined-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-outlined-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-outlined-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-outlined-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%);display:var(--mat-outlined-button-touch-target-display, block)}.mat-mdc-outlined-button:not(:disabled){color:var(--mdc-outlined-button-label-text-color, var(--mat-sys-primary));border-color:var(--mdc-outlined-button-outline-color, var(--mat-sys-outline))}.mat-mdc-outlined-button[disabled],.mat-mdc-outlined-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-outlined-button-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:var(--mdc-outlined-button-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-outlined-button .mdc-button__ripple{border-width:var(--mdc-outlined-button-outline-width, 1px);border-style:solid;border-color:rgba(0,0,0,0)}.mat-mdc-button,.mat-mdc-unelevated-button,.mat-mdc-raised-button,.mat-mdc-outlined-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-button .mdc-button__label,.mat-mdc-button .mat-icon,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-unelevated-button .mat-icon,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-raised-button .mat-icon,.mat-mdc-outlined-button .mdc-button__label,.mat-mdc-outlined-button .mat-icon{z-index:1;position:relative}.mat-mdc-button .mat-focus-indicator,.mat-mdc-unelevated-button .mat-focus-indicator,.mat-mdc-raised-button .mat-focus-indicator,.mat-mdc-outlined-button .mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-button:focus .mat-focus-indicator::before,.mat-mdc-unelevated-button:focus .mat-focus-indicator::before,.mat-mdc-raised-button:focus .mat-focus-indicator::before,.mat-mdc-outlined-button:focus .mat-focus-indicator::before{content:""}.mat-mdc-button._mat-animation-noopable,.mat-mdc-unelevated-button._mat-animation-noopable,.mat-mdc-raised-button._mat-animation-noopable,.mat-mdc-outlined-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon,.mat-mdc-raised-button>.mat-icon,.mat-mdc-outlined-button>.mat-icon{display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px}.mat-mdc-unelevated-button .mat-focus-indicator::before,.mat-mdc-raised-button .mat-focus-indicator::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px)*-1)}.mat-mdc-outlined-button .mat-focus-indicator::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px)*-1)}',
        "@media(forced-colors: active){.mat-mdc-button:not(.mdc-button--outlined),.mat-mdc-unelevated-button:not(.mdc-button--outlined),.mat-mdc-raised-button:not(.mdc-button--outlined),.mat-mdc-outlined-button:not(.mdc-button--outlined),.mat-mdc-icon-button.mat-mdc-icon-button{outline:solid 1px}}",
      ],
      encapsulation: 2,
      changeDetection: 0,
    });
  }
  return n;
})();
var id = (() => {
  class n extends td {
    constructor() {
      super(),
        this._rippleLoader.configureRipple(this._elementRef.nativeElement, {
          centered: !0,
        });
    }
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵcmp = F({
      type: n,
      selectors: [["button", "mat-icon-button", ""]],
      hostVars: 14,
      hostBindings: function (t, r) {
        t & 2 &&
          (ie("disabled", r._getDisabledAttribute())(
            "aria-disabled",
            r._getAriaDisabled(),
          ),
            bt(r.color ? "mat-" + r.color : ""),
            j("mat-mdc-button-disabled", r.disabled)(
              "mat-mdc-button-disabled-interactive",
              r.disabledInteractive,
            )("_mat-animation-noopable", r._animationMode === "NoopAnimations")(
              "mat-unthemed",
              !r.color,
            )("mat-mdc-button-base", !0));
      },
      exportAs: ["matButton"],
      features: [ce],
      attrs: wp,
      ngContentSelectors: Cp,
      decls: 4,
      vars: 0,
      consts: [
        [1, "mat-mdc-button-persistent-ripple", "mdc-icon-button__ripple"],
        [1, "mat-focus-indicator"],
        [1, "mat-mdc-button-touch-target"],
      ],
      template: function (t, r) {
        t & 1 && (ue(), U(0, "span", 0), B(1), U(2, "span", 1)(3, "span", 2));
      },
      styles: [
        '.mat-mdc-icon-button{-webkit-user-select:none;user-select:none;display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:rgba(0,0,0,0);fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;z-index:0;overflow:visible;border-radius:50%;flex-shrink:0;text-align:center;width:var(--mdc-icon-button-state-layer-size, 40px);height:var(--mdc-icon-button-state-layer-size, 40px);padding:calc(calc(var(--mdc-icon-button-state-layer-size, 40px) - var(--mdc-icon-button-icon-size, 24px)) / 2);font-size:var(--mdc-icon-button-icon-size, 24px);color:var(--mdc-icon-button-icon-color, var(--mat-sys-on-surface-variant));-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-icon-button .mat-mdc-button-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-icon-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0}.mat-mdc-icon-button .mdc-button__label,.mat-mdc-icon-button .mat-icon{z-index:1;position:relative}.mat-mdc-icon-button .mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-icon-button:focus .mat-focus-indicator::before{content:""}.mat-mdc-icon-button .mat-ripple-element{background-color:var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent))}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before{background-color:var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant))}.mat-mdc-icon-button:hover .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-mdc-icon-button.cdk-program-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.cdk-keyboard-focused .mat-mdc-button-persistent-ripple::before,.mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mat-mdc-icon-button:active .mat-mdc-button-persistent-ripple::before{opacity:var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity))}.mat-mdc-icon-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%);display:var(--mat-icon-button-touch-target-display, block)}.mat-mdc-icon-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-icon-button[disabled],.mat-mdc-icon-button.mat-mdc-button-disabled{cursor:default;pointer-events:none;color:var(--mdc-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-icon-button.mat-mdc-button-disabled-interactive{pointer-events:auto}.mat-mdc-icon-button img,.mat-mdc-icon-button svg{width:var(--mdc-icon-button-icon-size, 24px);height:var(--mdc-icon-button-icon-size, 24px);vertical-align:baseline}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple{border-radius:50%}.mat-mdc-icon-button[hidden]{display:none}.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before{background:rgba(0,0,0,0);opacity:1}',
        xp,
      ],
      encapsulation: 2,
      changeDetection: 0,
    });
  }
  return n;
})();
var mr = (() => {
  class n {
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵmod = M({ type: n });
    static ɵinj = D({ imports: [X, Rl, X] });
  }
  return n;
})();
var Mp = ["input"],
  Ip = ["label"],
  Sp = ["*"],
  Ap = new p("mat-checkbox-default-options", {
    providedIn: "root",
    factory: rd,
  });
function rd() {
  return {
    color: "accent",
    clickAction: "check-indeterminate",
    disabledInteractive: !1,
  };
}
var me = function (n) {
    return n[n.Init = 0] = "Init",
      n[n.Checked = 1] = "Checked",
      n[n.Unchecked = 2] = "Unchecked",
      n[n.Indeterminate = 3] = "Indeterminate",
      n;
  }(me || {}),
  Rp = { provide: Kn, useExisting: it(() => hr), multi: !0 },
  Ea = class {
    source;
    checked;
  },
  nd = rd(),
  hr = (() => {
    class n {
      _elementRef = l(N);
      _changeDetectorRef = l(Ce);
      _ngZone = l(x);
      _animationMode = l(xe, { optional: !0 });
      _options = l(Ap, { optional: !0 });
      focus() {
        this._inputElement.nativeElement.focus();
      }
      _createChangeEvent(e) {
        let t = new Ea();
        return t.source = this, t.checked = e, t;
      }
      _getAnimationTargetElement() {
        return this._inputElement?.nativeElement;
      }
      _animationClasses = {
        uncheckedToChecked: "mdc-checkbox--anim-unchecked-checked",
        uncheckedToIndeterminate: "mdc-checkbox--anim-unchecked-indeterminate",
        checkedToUnchecked: "mdc-checkbox--anim-checked-unchecked",
        checkedToIndeterminate: "mdc-checkbox--anim-checked-indeterminate",
        indeterminateToChecked: "mdc-checkbox--anim-indeterminate-checked",
        indeterminateToUnchecked: "mdc-checkbox--anim-indeterminate-unchecked",
      };
      ariaLabel = "";
      ariaLabelledby = null;
      ariaDescribedby;
      ariaExpanded;
      ariaControls;
      ariaOwns;
      _uniqueId;
      id;
      get inputId() {
        return `${this.id || this._uniqueId}-input`;
      }
      required;
      labelPosition = "after";
      name = null;
      change = new Q();
      indeterminateChange = new Q();
      value;
      disableRipple;
      _inputElement;
      _labelElement;
      tabIndex;
      color;
      disabledInteractive;
      _onTouched = () => {};
      _currentAnimationClass = "";
      _currentCheckState = me.Init;
      _controlValueAccessorChangeFn = () => {};
      _validatorChangeFn = () => {};
      constructor() {
        l(ze).load(lr);
        let e = l(new ai("tabindex"), { optional: !0 });
        this._options = this._options || nd,
          this.color = this._options.color || nd.color,
          this.tabIndex = e == null ? 0 : parseInt(e) || 0,
          this.id = this._uniqueId = l(Te).getId("mat-mdc-checkbox-"),
          this.disabledInteractive = this._options?.disabledInteractive ?? !1;
      }
      ngOnChanges(e) {
        e.required && this._validatorChangeFn();
      }
      ngAfterViewInit() {
        this._syncIndeterminate(this._indeterminate);
      }
      get checked() {
        return this._checked;
      }
      set checked(e) {
        e != this.checked &&
          (this._checked = e, this._changeDetectorRef.markForCheck());
      }
      _checked = !1;
      get disabled() {
        return this._disabled;
      }
      set disabled(e) {
        e !== this.disabled &&
          (this._disabled = e, this._changeDetectorRef.markForCheck());
      }
      _disabled = !1;
      get indeterminate() {
        return this._indeterminate;
      }
      set indeterminate(e) {
        let t = e != this._indeterminate;
        this._indeterminate = e,
          t &&
          (this._indeterminate
            ? this._transitionCheckState(me.Indeterminate)
            : this._transitionCheckState(
              this.checked ? me.Checked : me.Unchecked,
            ),
            this.indeterminateChange.emit(this._indeterminate)),
          this._syncIndeterminate(this._indeterminate);
      }
      _indeterminate = !1;
      _isRippleDisabled() {
        return this.disableRipple || this.disabled;
      }
      _onLabelTextChange() {
        this._changeDetectorRef.detectChanges();
      }
      writeValue(e) {
        this.checked = !!e;
      }
      registerOnChange(e) {
        this._controlValueAccessorChangeFn = e;
      }
      registerOnTouched(e) {
        this._onTouched = e;
      }
      setDisabledState(e) {
        this.disabled = e;
      }
      validate(e) {
        return this.required && e.value !== !0 ? { required: !0 } : null;
      }
      registerOnValidatorChange(e) {
        this._validatorChangeFn = e;
      }
      _transitionCheckState(e) {
        let t = this._currentCheckState, r = this._getAnimationTargetElement();
        if (
          !(t === e || !r) &&
          (this._currentAnimationClass &&
            r.classList.remove(this._currentAnimationClass),
            this._currentAnimationClass = this
              ._getAnimationClassForCheckStateTransition(t, e),
            this._currentCheckState = e,
            this._currentAnimationClass.length > 0)
        ) {
          r.classList.add(this._currentAnimationClass);
          let o = this._currentAnimationClass;
          this._ngZone.runOutsideAngular(() => {
            setTimeout(() => {
              r.classList.remove(o);
            }, 1e3);
          });
        }
      }
      _emitChangeEvent() {
        this._controlValueAccessorChangeFn(this.checked),
          this.change.emit(this._createChangeEvent(this.checked)),
          this._inputElement &&
          (this._inputElement.nativeElement.checked = this.checked);
      }
      toggle() {
        this.checked = !this.checked,
          this._controlValueAccessorChangeFn(this.checked);
      }
      _handleInputClick() {
        let e = this._options?.clickAction;
        !this.disabled && e !== "noop"
          ? (this.indeterminate && e !== "check" &&
            Promise.resolve().then(() => {
              this._indeterminate = !1,
                this.indeterminateChange.emit(this._indeterminate);
            }),
            this._checked = !this._checked,
            this._transitionCheckState(
              this._checked ? me.Checked : me.Unchecked,
            ),
            this._emitChangeEvent())
          : (this.disabled && this.disabledInteractive ||
            !this.disabled && e === "noop") &&
            (this._inputElement.nativeElement.checked = this.checked,
              this._inputElement.nativeElement.indeterminate =
                this.indeterminate);
      }
      _onInteractionEvent(e) {
        e.stopPropagation();
      }
      _onBlur() {
        Promise.resolve().then(() => {
          this._onTouched(), this._changeDetectorRef.markForCheck();
        });
      }
      _getAnimationClassForCheckStateTransition(e, t) {
        if (this._animationMode === "NoopAnimations") return "";
        switch (e) {
          case me.Init:
            if (t === me.Checked) {
              return this._animationClasses.uncheckedToChecked;
            }
            if (t == me.Indeterminate) {
              return this._checked
                ? this._animationClasses.checkedToIndeterminate
                : this._animationClasses.uncheckedToIndeterminate;
            }
            break;
          case me.Unchecked:
            return t === me.Checked
              ? this._animationClasses.uncheckedToChecked
              : this._animationClasses.uncheckedToIndeterminate;
          case me.Checked:
            return t === me.Unchecked
              ? this._animationClasses.checkedToUnchecked
              : this._animationClasses.checkedToIndeterminate;
          case me.Indeterminate:
            return t === me.Checked
              ? this._animationClasses.indeterminateToChecked
              : this._animationClasses.indeterminateToUnchecked;
        }
        return "";
      }
      _syncIndeterminate(e) {
        let t = this._inputElement;
        t && (t.nativeElement.indeterminate = e);
      }
      _onInputClick() {
        this._handleInputClick();
      }
      _onTouchTargetClick() {
        this._handleInputClick(),
          this.disabled || this._inputElement.nativeElement.focus();
      }
      _preventBubblingFromLabel(e) {
        e.target && this._labelElement.nativeElement.contains(e.target) &&
          e.stopPropagation();
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵcmp = F({
        type: n,
        selectors: [["mat-checkbox"]],
        viewQuery: function (t, r) {
          if (t & 1 && (ne(Mp, 5), ne(Ip, 5)), t & 2) {
            let o;
            W(o = G()) && (r._inputElement = o.first),
              W(o = G()) && (r._labelElement = o.first);
          }
        },
        hostAttrs: [1, "mat-mdc-checkbox"],
        hostVars: 16,
        hostBindings: function (t, r) {
          t & 2 &&
            (vt("id", r.id),
              ie("tabindex", null)("aria-label", null)("aria-labelledby", null),
              bt(r.color ? "mat-" + r.color : "mat-accent"),
              j(
                "_mat-animation-noopable",
                r._animationMode === "NoopAnimations",
              )(
                "mdc-checkbox--disabled",
                r.disabled,
              )("mat-mdc-checkbox-disabled", r.disabled)(
                "mat-mdc-checkbox-checked",
                r.checked,
              )(
                "mat-mdc-checkbox-disabled-interactive",
                r.disabledInteractive,
              ));
        },
        inputs: {
          ariaLabel: [0, "aria-label", "ariaLabel"],
          ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
          ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
          ariaExpanded: [2, "aria-expanded", "ariaExpanded", H],
          ariaControls: [0, "aria-controls", "ariaControls"],
          ariaOwns: [0, "aria-owns", "ariaOwns"],
          id: "id",
          required: [2, "required", "required", H],
          labelPosition: "labelPosition",
          name: "name",
          value: "value",
          disableRipple: [2, "disableRipple", "disableRipple", H],
          tabIndex: [
            2,
            "tabIndex",
            "tabIndex",
            (e) => e == null ? void 0 : Hr(e),
          ],
          color: "color",
          disabledInteractive: [
            2,
            "disabledInteractive",
            "disabledInteractive",
            H,
          ],
          checked: [2, "checked", "checked", H],
          disabled: [2, "disabled", "disabled", H],
          indeterminate: [2, "indeterminate", "indeterminate", H],
        },
        outputs: {
          change: "change",
          indeterminateChange: "indeterminateChange",
        },
        exportAs: ["matCheckbox"],
        features: [
          ge([Rp, { provide: Yi, useExisting: n, multi: !0 }]),
          pe,
          Me,
        ],
        ngContentSelectors: Sp,
        decls: 15,
        vars: 23,
        consts: [
          ["checkbox", ""],
          ["input", ""],
          ["label", ""],
          ["mat-internal-form-field", "", 3, "click", "labelPosition"],
          [1, "mdc-checkbox"],
          [1, "mat-mdc-checkbox-touch-target", 3, "click"],
          [
            "type",
            "checkbox",
            1,
            "mdc-checkbox__native-control",
            3,
            "blur",
            "click",
            "change",
            "checked",
            "indeterminate",
            "disabled",
            "id",
            "required",
            "tabIndex",
          ],
          [1, "mdc-checkbox__ripple"],
          [1, "mdc-checkbox__background"],
          [
            "focusable",
            "false",
            "viewBox",
            "0 0 24 24",
            "aria-hidden",
            "true",
            1,
            "mdc-checkbox__checkmark",
          ],
          [
            "fill",
            "none",
            "d",
            "M1.73,12.91 8.1,19.28 22.79,4.59",
            1,
            "mdc-checkbox__checkmark-path",
          ],
          [1, "mdc-checkbox__mixedmark"],
          [
            "mat-ripple",
            "",
            1,
            "mat-mdc-checkbox-ripple",
            "mat-focus-indicator",
            3,
            "matRippleTrigger",
            "matRippleDisabled",
            "matRippleCentered",
          ],
          [1, "mdc-label", 3, "for"],
        ],
        template: function (t, r) {
          if (t & 1) {
            let o = rt();
            ue(),
              C(0, "div", 3),
              J("click", function (s) {
                return ve(o), _e(r._preventBubblingFromLabel(s));
              }),
              C(1, "div", 4, 0)(3, "div", 5),
              J("click", function () {
                return ve(o), _e(r._onTouchTargetClick());
              }),
              I(),
              C(4, "input", 6, 1),
              J("blur", function () {
                return ve(o), _e(r._onBlur());
              })("click", function () {
                return ve(o), _e(r._onInputClick());
              })("change", function (s) {
                return ve(o), _e(r._onInteractionEvent(s));
              }),
              I(),
              U(6, "div", 7),
              C(7, "div", 8),
              Ga(),
              C(8, "svg", 9),
              U(9, "path", 10),
              I(),
              qa(),
              U(10, "div", 11),
              I(),
              U(11, "div", 12),
              I(),
              C(12, "label", 13, 2),
              B(14),
              I()();
          }
          if (t & 2) {
            let o = fi(2);
            le("labelPosition", r.labelPosition),
              O(4),
              j("mdc-checkbox--selected", r.checked),
              le("checked", r.checked)("indeterminate", r.indeterminate)(
                "disabled",
                r.disabled && !r.disabledInteractive,
              )("id", r.inputId)("required", r.required)(
                "tabIndex",
                r.disabled && !r.disabledInteractive ? -1 : r.tabIndex,
              ),
              ie("aria-label", r.ariaLabel || null)(
                "aria-labelledby",
                r.ariaLabelledby,
              )("aria-describedby", r.ariaDescribedby)(
                "aria-checked",
                r.indeterminate ? "mixed" : null,
              )("aria-controls", r.ariaControls)(
                "aria-disabled",
                r.disabled && r.disabledInteractive ? !0 : null,
              )("aria-expanded", r.ariaExpanded)("aria-owns", r.ariaOwns)(
                "name",
                r.name,
              )("value", r.value),
              O(7),
              le("matRippleTrigger", o)(
                "matRippleDisabled",
                r.disableRipple || r.disabled,
              )("matRippleCentered", !0),
              O(),
              le("for", r.inputId);
          }
        },
        dependencies: [Al, Ol],
        styles: [
          '.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover .mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:hover .mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active .mdc-checkbox__native-control~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mdc-checkbox__ripple{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;width:var(--mdc-checkbox-state-layer-size, 40px);height:var(--mdc-checkbox-state-layer-size, 40px);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}@media(forced-colors: active){.mdc-checkbox--disabled{opacity:.5}}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mdc-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));top:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-icon-color, var(--mat-sys-primary));background-color:var(--mdc-checkbox-selected-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox:hover .mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-sys-primary));background-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-sys-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-sys-primary));background-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover .mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable .mdc-checkbox *,.mat-mdc-checkbox._mat-animation-noopable .mdc-checkbox *::before{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox .mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display, block)}.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-focus-indicator::before{content:""}',
        ],
        encapsulation: 2,
        changeDetection: 0,
      });
    }
    return n;
  })();
var od = (() => {
  class n {
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵmod = M({ type: n });
    static ɵinj = D({ imports: [hr, X, X] });
  }
  return n;
})();
var Op = ["*"], fr;
function Fp() {
  if (fr === void 0 && (fr = null, typeof window < "u")) {
    let n = window;
    n.trustedTypes !== void 0 &&
      (fr = n.trustedTypes.createPolicy("angular#components", {
        createHTML: (i) => i,
      }));
  }
  return fr;
}
function Ki(n) {
  return Fp()?.createHTML(n) || n;
}
function ad(n) {
  return Error(`Unable to find icon with the name "${n}"`);
}
function Pp() {
  return Error(
    "Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.",
  );
}
function sd(n) {
  return Error(
    `The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${n}".`,
  );
}
function cd(n) {
  return Error(
    `The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${n}".`,
  );
}
var Ke = class {
    url;
    svgText;
    options;
    svgElement;
    constructor(i, e, t) {
      this.url = i, this.svgText = e, this.options = t;
    }
  },
  Np = (() => {
    class n {
      _httpClient;
      _sanitizer;
      _errorHandler;
      _document;
      _svgIconConfigs = new Map();
      _iconSetConfigs = new Map();
      _cachedIconsByUrl = new Map();
      _inProgressUrlFetches = new Map();
      _fontCssClassesByAlias = new Map();
      _resolvers = [];
      _defaultFontSetClass = ["material-icons", "mat-ligature-font"];
      constructor(e, t, r, o) {
        this._httpClient = e,
          this._sanitizer = t,
          this._errorHandler = o,
          this._document = r;
      }
      addSvgIcon(e, t, r) {
        return this.addSvgIconInNamespace("", e, t, r);
      }
      addSvgIconLiteral(e, t, r) {
        return this.addSvgIconLiteralInNamespace("", e, t, r);
      }
      addSvgIconInNamespace(e, t, r, o) {
        return this._addSvgIconConfig(e, t, new Ke(r, null, o));
      }
      addSvgIconResolver(e) {
        return this._resolvers.push(e), this;
      }
      addSvgIconLiteralInNamespace(e, t, r, o) {
        let a = this._sanitizer.sanitize(we.HTML, r);
        if (!a) throw cd(r);
        let s = Ki(a);
        return this._addSvgIconConfig(e, t, new Ke("", s, o));
      }
      addSvgIconSet(e, t) {
        return this.addSvgIconSetInNamespace("", e, t);
      }
      addSvgIconSetLiteral(e, t) {
        return this.addSvgIconSetLiteralInNamespace("", e, t);
      }
      addSvgIconSetInNamespace(e, t, r) {
        return this._addSvgIconSetConfig(e, new Ke(t, null, r));
      }
      addSvgIconSetLiteralInNamespace(e, t, r) {
        let o = this._sanitizer.sanitize(we.HTML, t);
        if (!o) throw cd(t);
        let a = Ki(o);
        return this._addSvgIconSetConfig(e, new Ke("", a, r));
      }
      registerFontClassAlias(e, t = e) {
        return this._fontCssClassesByAlias.set(e, t), this;
      }
      classNameForFontAlias(e) {
        return this._fontCssClassesByAlias.get(e) || e;
      }
      setDefaultFontSetClass(...e) {
        return this._defaultFontSetClass = e, this;
      }
      getDefaultFontSetClass() {
        return this._defaultFontSetClass;
      }
      getSvgIconFromUrl(e) {
        let t = this._sanitizer.sanitize(we.RESOURCE_URL, e);
        if (!t) throw sd(e);
        let r = this._cachedIconsByUrl.get(t);
        return r ? g(pr(r)) : this._loadSvgIconFromConfig(new Ke(e, null)).pipe(
          K((o) => this._cachedIconsByUrl.set(t, o)),
          _((o) => pr(o)),
        );
      }
      getNamedSvgIcon(e, t = "") {
        let r = ld(t, e), o = this._svgIconConfigs.get(r);
        if (o) return this._getSvgFromConfig(o);
        if (o = this._getIconConfigFromResolvers(t, e), o) {
          return this._svgIconConfigs.set(r, o), this._getSvgFromConfig(o);
        }
        let a = this._iconSetConfigs.get(t);
        return a ? this._getSvgFromIconSetConfigs(e, a) : ut(ad(r));
      }
      ngOnDestroy() {
        this._resolvers = [],
          this._svgIconConfigs.clear(),
          this._iconSetConfigs.clear(),
          this._cachedIconsByUrl.clear();
      }
      _getSvgFromConfig(e) {
        return e.svgText
          ? g(pr(this._svgElementFromConfig(e)))
          : this._loadSvgIconFromConfig(e).pipe(_((t) => pr(t)));
      }
      _getSvgFromIconSetConfigs(e, t) {
        let r = this._extractIconWithNameFromAnySet(e, t);
        if (r) return g(r);
        let o = t.filter((a) => !a.svgText).map((a) =>
          this._loadSvgIconSetFromConfig(a).pipe(et((s) => {
            let d = `Loading icon set URL: ${
              this._sanitizer.sanitize(we.RESOURCE_URL, a.url)
            } failed: ${s.message}`;
            return this._errorHandler.handleError(new Error(d)), g(null);
          }))
        );
        return on(o).pipe(_(() => {
          let a = this._extractIconWithNameFromAnySet(e, t);
          if (!a) throw ad(e);
          return a;
        }));
      }
      _extractIconWithNameFromAnySet(e, t) {
        for (let r = t.length - 1; r >= 0; r--) {
          let o = t[r];
          if (o.svgText && o.svgText.toString().indexOf(e) > -1) {
            let a = this._svgElementFromConfig(o),
              s = this._extractSvgIconFromSet(a, e, o.options);
            if (s) return s;
          }
        }
        return null;
      }
      _loadSvgIconFromConfig(e) {
        return this._fetchIcon(e).pipe(
          K((t) => e.svgText = t),
          _(() => this._svgElementFromConfig(e)),
        );
      }
      _loadSvgIconSetFromConfig(e) {
        return e.svgText
          ? g(null)
          : this._fetchIcon(e).pipe(K((t) => e.svgText = t));
      }
      _extractSvgIconFromSet(e, t, r) {
        let o = e.querySelector(`[id="${t}"]`);
        if (!o) return null;
        let a = o.cloneNode(!0);
        if (a.removeAttribute("id"), a.nodeName.toLowerCase() === "svg") {
          return this._setSvgAttributes(a, r);
        }
        if (a.nodeName.toLowerCase() === "symbol") {
          return this._setSvgAttributes(this._toSvgElement(a), r);
        }
        let s = this._svgElementFromString(Ki("<svg></svg>"));
        return s.appendChild(a), this._setSvgAttributes(s, r);
      }
      _svgElementFromString(e) {
        let t = this._document.createElement("DIV");
        t.innerHTML = e;
        let r = t.querySelector("svg");
        if (!r) throw Error("<svg> tag not found");
        return r;
      }
      _toSvgElement(e) {
        let t = this._svgElementFromString(Ki("<svg></svg>")), r = e.attributes;
        for (let o = 0; o < r.length; o++) {
          let { name: a, value: s } = r[o];
          a !== "id" && t.setAttribute(a, s);
        }
        for (let o = 0; o < e.childNodes.length; o++) {
          e.childNodes[o].nodeType === this._document.ELEMENT_NODE &&
            t.appendChild(e.childNodes[o].cloneNode(!0));
        }
        return t;
      }
      _setSvgAttributes(e, t) {
        return e.setAttribute("fit", ""),
          e.setAttribute("height", "100%"),
          e.setAttribute("width", "100%"),
          e.setAttribute("preserveAspectRatio", "xMidYMid meet"),
          e.setAttribute("focusable", "false"),
          t && t.viewBox && e.setAttribute("viewBox", t.viewBox),
          e;
      }
      _fetchIcon(e) {
        let { url: t, options: r } = e, o = r?.withCredentials ?? !1;
        if (!this._httpClient) throw Pp();
        if (t == null) throw Error(`Cannot fetch icon from URL "${t}".`);
        let a = this._sanitizer.sanitize(we.RESOURCE_URL, t);
        if (!a) throw sd(t);
        let s = this._inProgressUrlFetches.get(a);
        if (s) return s;
        let c = this._httpClient.get(a, {
          responseType: "text",
          withCredentials: o,
        }).pipe(
          _((d) => Ki(d)),
          Ge(() => this._inProgressUrlFetches.delete(a)),
          Ha(),
        );
        return this._inProgressUrlFetches.set(a, c), c;
      }
      _addSvgIconConfig(e, t, r) {
        return this._svgIconConfigs.set(ld(e, t), r), this;
      }
      _addSvgIconSetConfig(e, t) {
        let r = this._iconSetConfigs.get(e);
        return r ? r.push(t) : this._iconSetConfigs.set(e, [t]), this;
      }
      _svgElementFromConfig(e) {
        if (!e.svgElement) {
          let t = this._svgElementFromString(e.svgText);
          this._setSvgAttributes(t, e.options), e.svgElement = t;
        }
        return e.svgElement;
      }
      _getIconConfigFromResolvers(e, t) {
        for (let r = 0; r < this._resolvers.length; r++) {
          let o = this._resolvers[r](t, e);
          if (o) {
            return Lp(o) ? new Ke(o.url, null, o.options) : new Ke(o, null);
          }
        }
      }
      static ɵfac = function (t) {
        return new (t || n)(S(xi, 8), S(co), S(A, 8), S(pt));
      };
      static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
    return n;
  })();
function pr(n) {
  return n.cloneNode(!0);
}
function ld(n, i) {
  return n + ":" + i;
}
function Lp(n) {
  return !!(n.url && n.options);
}
var Vp = new p("MAT_ICON_DEFAULT_OPTIONS"),
  jp = new p("mat-icon-location", { providedIn: "root", factory: Bp });
function Bp() {
  let n = l(A), i = n ? n.location : null;
  return { getPathname: () => i ? i.pathname + i.search : "" };
}
var dd = [
    "clip-path",
    "color-profile",
    "src",
    "cursor",
    "fill",
    "filter",
    "marker",
    "marker-start",
    "marker-mid",
    "marker-end",
    "mask",
    "stroke",
  ],
  zp = dd.map((n) => `[${n}]`).join(", "),
  Up = /^url\(['"]?#(.*?)['"]?\)$/,
  ud = (() => {
    class n {
      _elementRef = l(N);
      _iconRegistry = l(Np);
      _location = l(jp);
      _errorHandler = l(pt);
      _defaultColor;
      get color() {
        return this._color || this._defaultColor;
      }
      set color(e) {
        this._color = e;
      }
      _color;
      inline = !1;
      get svgIcon() {
        return this._svgIcon;
      }
      set svgIcon(e) {
        e !== this._svgIcon &&
          (e
            ? this._updateSvgIcon(e)
            : this._svgIcon && this._clearSvgElement(),
            this._svgIcon = e);
      }
      _svgIcon;
      get fontSet() {
        return this._fontSet;
      }
      set fontSet(e) {
        let t = this._cleanupFontValue(e);
        t !== this._fontSet &&
          (this._fontSet = t, this._updateFontIconClasses());
      }
      _fontSet;
      get fontIcon() {
        return this._fontIcon;
      }
      set fontIcon(e) {
        let t = this._cleanupFontValue(e);
        t !== this._fontIcon &&
          (this._fontIcon = t, this._updateFontIconClasses());
      }
      _fontIcon;
      _previousFontSetClass = [];
      _previousFontIconClass;
      _svgName;
      _svgNamespace;
      _previousPath;
      _elementsWithExternalReferences;
      _currentIconFetch = Fe.EMPTY;
      constructor() {
        let e = l(new ai("aria-hidden"), { optional: !0 }),
          t = l(Vp, { optional: !0 });
        t &&
        (t.color && (this.color = this._defaultColor = t.color),
          t.fontSet && (this.fontSet = t.fontSet)),
          e ||
          this._elementRef.nativeElement.setAttribute("aria-hidden", "true");
      }
      _splitIconName(e) {
        if (!e) return ["", ""];
        let t = e.split(":");
        switch (t.length) {
          case 1:
            return ["", t[0]];
          case 2:
            return t;
          default:
            throw Error(`Invalid icon name: "${e}"`);
        }
      }
      ngOnInit() {
        this._updateFontIconClasses();
      }
      ngAfterViewChecked() {
        let e = this._elementsWithExternalReferences;
        if (e && e.size) {
          let t = this._location.getPathname();
          t !== this._previousPath &&
            (this._previousPath = t, this._prependPathToReferences(t));
        }
      }
      ngOnDestroy() {
        this._currentIconFetch.unsubscribe(),
          this._elementsWithExternalReferences &&
          this._elementsWithExternalReferences.clear();
      }
      _usingFontIcon() {
        return !this.svgIcon;
      }
      _setSvgElement(e) {
        this._clearSvgElement();
        let t = this._location.getPathname();
        this._previousPath = t,
          this._cacheChildrenWithExternalReferences(e),
          this._prependPathToReferences(t),
          this._elementRef.nativeElement.appendChild(e);
      }
      _clearSvgElement() {
        let e = this._elementRef.nativeElement, t = e.childNodes.length;
        for (
          this._elementsWithExternalReferences &&
          this._elementsWithExternalReferences.clear();
          t--;
        ) {
          let r = e.childNodes[t];
          (r.nodeType !== 1 || r.nodeName.toLowerCase() === "svg") &&
            r.remove();
        }
      }
      _updateFontIconClasses() {
        if (!this._usingFontIcon()) return;
        let e = this._elementRef.nativeElement,
          t =
            (this.fontSet
              ? this._iconRegistry.classNameForFontAlias(this.fontSet).split(
                / +/,
              )
              : this._iconRegistry.getDefaultFontSetClass()).filter((r) =>
                r.length > 0
              );
        this._previousFontSetClass.forEach((r) => e.classList.remove(r)),
          t.forEach((r) => e.classList.add(r)),
          this._previousFontSetClass = t,
          this.fontIcon !== this._previousFontIconClass &&
          !t.includes("mat-ligature-font") &&
          (this._previousFontIconClass &&
            e.classList.remove(this._previousFontIconClass),
            this.fontIcon && e.classList.add(this.fontIcon),
            this._previousFontIconClass = this.fontIcon);
      }
      _cleanupFontValue(e) {
        return typeof e == "string" ? e.trim().split(" ")[0] : e;
      }
      _prependPathToReferences(e) {
        let t = this._elementsWithExternalReferences;
        t && t.forEach((r, o) => {
          r.forEach((a) => {
            o.setAttribute(a.name, `url('${e}#${a.value}')`);
          });
        });
      }
      _cacheChildrenWithExternalReferences(e) {
        let t = e.querySelectorAll(zp),
          r = this._elementsWithExternalReferences =
            this._elementsWithExternalReferences || new Map();
        for (let o = 0; o < t.length; o++) {
          dd.forEach((a) => {
            let s = t[o], c = s.getAttribute(a), d = c ? c.match(Up) : null;
            if (d) {
              let u = r.get(s);
              u || (u = [], r.set(s, u)), u.push({ name: a, value: d[1] });
            }
          });
        }
      }
      _updateSvgIcon(e) {
        if (
          this._svgNamespace = null,
            this._svgName = null,
            this._currentIconFetch.unsubscribe(),
            e
        ) {
          let [t, r] = this._splitIconName(e);
          t && (this._svgNamespace = t),
            r && (this._svgName = r),
            this._currentIconFetch = this._iconRegistry.getNamedSvgIcon(r, t)
              .pipe(Pe(1)).subscribe((o) => this._setSvgElement(o), (o) => {
                let a = `Error retrieving icon ${t}:${r}! ${o.message}`;
                this._errorHandler.handleError(new Error(a));
              });
        }
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵcmp = F({
        type: n,
        selectors: [["mat-icon"]],
        hostAttrs: ["role", "img", 1, "mat-icon", "notranslate"],
        hostVars: 10,
        hostBindings: function (t, r) {
          t & 2 &&
            (ie("data-mat-icon-type", r._usingFontIcon() ? "font" : "svg")(
              "data-mat-icon-name",
              r._svgName || r.fontIcon,
            )("data-mat-icon-namespace", r._svgNamespace || r.fontSet)(
              "fontIcon",
              r._usingFontIcon() ? r.fontIcon : null,
            ),
              bt(r.color ? "mat-" + r.color : ""),
              j("mat-icon-inline", r.inline)(
                "mat-icon-no-color",
                r.color !== "primary" && r.color !== "accent" &&
                  r.color !== "warn",
              ));
        },
        inputs: {
          color: "color",
          inline: [2, "inline", "inline", H],
          svgIcon: "svgIcon",
          fontSet: "fontSet",
          fontIcon: "fontIcon",
        },
        exportAs: ["matIcon"],
        features: [pe],
        ngContentSelectors: Op,
        decls: 1,
        vars: 0,
        template: function (t, r) {
          t & 1 && (ue(), B(0));
        },
        styles: [
          "mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color, inherit)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}",
        ],
        encapsulation: 2,
        changeDetection: 0,
      });
    }
    return n;
  })(),
  md = (() => {
    class n {
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵmod = M({ type: n });
      static ɵinj = D({ imports: [X, X] });
    }
    return n;
  })();
var Qi = class {
    _attachedHost;
    attach(i) {
      return this._attachedHost = i, i.attach(this);
    }
    detach() {
      let i = this._attachedHost;
      i != null && (this._attachedHost = null, i.detach());
    }
    get isAttached() {
      return this._attachedHost != null;
    }
    setAttachedHost(i) {
      this._attachedHost = i;
    }
  },
  ti = class extends Qi {
    component;
    viewContainerRef;
    injector;
    componentFactoryResolver;
    projectableNodes;
    constructor(i, e, t, r, o) {
      super(),
        this.component = i,
        this.viewContainerRef = e,
        this.injector = t,
        this.projectableNodes = o;
    }
  },
  ii = class extends Qi {
    templateRef;
    viewContainerRef;
    context;
    injector;
    constructor(i, e, t, r) {
      super(),
        this.templateRef = i,
        this.viewContainerRef = e,
        this.context = t,
        this.injector = r;
    }
    get origin() {
      return this.templateRef.elementRef;
    }
    attach(i, e = this.context) {
      return this.context = e, super.attach(i);
    }
    detach() {
      return this.context = void 0, super.detach();
    }
  },
  Da = class extends Qi {
    element;
    constructor(i) {
      super(), this.element = i instanceof N ? i.nativeElement : i;
    }
  },
  ni = class {
    _attachedPortal;
    _disposeFn;
    _isDisposed = !1;
    hasAttached() {
      return !!this._attachedPortal;
    }
    attach(i) {
      if (i instanceof ti) {
        return this._attachedPortal = i, this.attachComponentPortal(i);
      }
      if (i instanceof ii) {
        return this._attachedPortal = i, this.attachTemplatePortal(i);
      }
      if (this.attachDomPortal && i instanceof Da) {
        return this._attachedPortal = i, this.attachDomPortal(i);
      }
    }
    attachDomPortal = null;
    detach() {
      this._attachedPortal &&
      (this._attachedPortal.setAttachedHost(null), this._attachedPortal = null),
        this._invokeDisposeFn();
    }
    dispose() {
      this.hasAttached() && this.detach(),
        this._invokeDisposeFn(),
        this._isDisposed = !0;
    }
    setDisposeFn(i) {
      this._disposeFn = i;
    }
    _invokeDisposeFn() {
      this._disposeFn && (this._disposeFn(), this._disposeFn = null);
    }
  };
var gr = class extends ni {
  outletElement;
  _appRef;
  _defaultInjector;
  _document;
  constructor(i, e, t, r, o) {
    super(),
      this.outletElement = i,
      this._appRef = t,
      this._defaultInjector = r,
      this._document = o;
  }
  attachComponentPortal(i) {
    let e;
    if (i.viewContainerRef) {
      let t = i.injector || i.viewContainerRef.injector,
        r = t.get(Nr, null, { optional: !0 }) || void 0;
      e = i.viewContainerRef.createComponent(i.component, {
        index: i.viewContainerRef.length,
        injector: t,
        ngModuleRef: r,
        projectableNodes: i.projectableNodes || void 0,
      }), this.setDisposeFn(() => e.destroy());
    } else {e = un(i.component, {
        elementInjector: i.injector || this._defaultInjector || $.NULL,
        environmentInjector: this._appRef.injector,
        projectableNodes: i.projectableNodes || void 0,
      }),
        this._appRef.attachView(e.hostView),
        this.setDisposeFn(() => {
          this._appRef.viewCount > 0 && this._appRef.detachView(e.hostView),
            e.destroy();
        });}
    return this.outletElement.appendChild(this._getComponentRootNode(e)),
      this._attachedPortal = i,
      e;
  }
  attachTemplatePortal(i) {
    let e = i.viewContainerRef,
      t = e.createEmbeddedView(i.templateRef, i.context, {
        injector: i.injector,
      });
    return t.rootNodes.forEach((r) => this.outletElement.appendChild(r)),
      t.detectChanges(),
      this.setDisposeFn(() => {
        let r = e.indexOf(t);
        r !== -1 && e.remove(r);
      }),
      this._attachedPortal = i,
      t;
  }
  attachDomPortal = (i) => {
    let e = i.element;
    e.parentNode;
    let t = this._document.createComment("dom-portal");
    e.parentNode.insertBefore(t, e),
      this.outletElement.appendChild(e),
      this._attachedPortal = i,
      super.setDisposeFn(() => {
        t.parentNode && t.parentNode.replaceChild(e, t);
      });
  };
  dispose() {
    super.dispose(), this.outletElement.remove();
  }
  _getComponentRootNode(i) {
    return i.hostView.rootNodes[0];
  }
};
var Ma = (() => {
  class n extends ni {
    _moduleRef = l(Nr, { optional: !0 });
    _document = l(A);
    _viewContainerRef = l(Ft);
    _isInitialized = !1;
    _attachedRef;
    constructor() {
      super();
    }
    get portal() {
      return this._attachedPortal;
    }
    set portal(e) {
      this.hasAttached() && !e && !this._isInitialized ||
        (this.hasAttached() && super.detach(),
          e && super.attach(e),
          this._attachedPortal = e || null);
    }
    attached = new Q();
    get attachedRef() {
      return this._attachedRef;
    }
    ngOnInit() {
      this._isInitialized = !0;
    }
    ngOnDestroy() {
      super.dispose(), this._attachedRef = this._attachedPortal = null;
    }
    attachComponentPortal(e) {
      e.setAttachedHost(this);
      let t = e.viewContainerRef != null
          ? e.viewContainerRef
          : this._viewContainerRef,
        r = t.createComponent(e.component, {
          index: t.length,
          injector: e.injector || t.injector,
          projectableNodes: e.projectableNodes || void 0,
          ngModuleRef: this._moduleRef || void 0,
        });
      return t !== this._viewContainerRef &&
        this._getRootNode().appendChild(r.hostView.rootNodes[0]),
        super.setDisposeFn(() => r.destroy()),
        this._attachedPortal = e,
        this._attachedRef = r,
        this.attached.emit(r),
        r;
    }
    attachTemplatePortal(e) {
      e.setAttachedHost(this);
      let t = this._viewContainerRef.createEmbeddedView(
        e.templateRef,
        e.context,
        { injector: e.injector },
      );
      return super.setDisposeFn(() => this._viewContainerRef.clear()),
        this._attachedPortal = e,
        this._attachedRef = t,
        this.attached.emit(t),
        t;
    }
    attachDomPortal = (e) => {
      let t = e.element;
      t.parentNode;
      let r = this._document.createComment("dom-portal");
      e.setAttachedHost(this),
        t.parentNode.insertBefore(r, t),
        this._getRootNode().appendChild(t),
        this._attachedPortal = e,
        super.setDisposeFn(() => {
          r.parentNode && r.parentNode.replaceChild(t, r);
        });
    };
    _getRootNode() {
      let e = this._viewContainerRef.element.nativeElement;
      return e.nodeType === e.ELEMENT_NODE ? e : e.parentNode;
    }
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵdir = T({
      type: n,
      selectors: [["", "cdkPortalOutlet", ""]],
      inputs: { portal: [0, "cdkPortalOutlet", "portal"] },
      outputs: { attached: "attached" },
      exportAs: ["cdkPortalOutlet"],
      features: [ce],
    });
  }
  return n;
})();
var br = (() => {
  class n {
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵmod = M({ type: n });
    static ɵinj = D({});
  }
  return n;
})();
var $p = 20,
  fd = (() => {
    class n {
      _ngZone = l(x);
      _platform = l(q);
      _renderer = l($e).createRenderer(null, null);
      _cleanupGlobalListener;
      constructor() {}
      _scrolled = new w();
      _scrolledCount = 0;
      scrollContainers = new Map();
      register(e) {
        this.scrollContainers.has(e) ||
          this.scrollContainers.set(
            e,
            e.elementScrolled().subscribe(() => this._scrolled.next(e)),
          );
      }
      deregister(e) {
        let t = this.scrollContainers.get(e);
        t && (t.unsubscribe(), this.scrollContainers.delete(e));
      }
      scrolled(e = $p) {
        return this._platform.isBrowser
          ? new Je((t) => {
            this._cleanupGlobalListener ||
              (this._cleanupGlobalListener = this._ngZone.runOutsideAngular(
                () =>
                  this._renderer.listen("document", "scroll", () =>
                    this._scrolled.next()),
              ));
            let r = e > 0
              ? this._scrolled.pipe(Dr(e)).subscribe(t)
              : this._scrolled.subscribe(t);
            return this._scrolledCount++, () => {
              r.unsubscribe(),
                this._scrolledCount--,
                this._scrolledCount ||
                (this._cleanupGlobalListener?.(),
                  this._cleanupGlobalListener = void 0);
            };
          })
          : g();
      }
      ngOnDestroy() {
        this._cleanupGlobalListener?.(),
          this._cleanupGlobalListener = void 0,
          this.scrollContainers.forEach((e, t) => this.deregister(t)),
          this._scrolled.complete();
      }
      ancestorScrolled(e, t) {
        let r = this.getAncestorScrollContainers(e);
        return this.scrolled(t).pipe(re((o) => !o || r.indexOf(o) > -1));
      }
      getAncestorScrollContainers(e) {
        let t = [];
        return this.scrollContainers.forEach((r, o) => {
          this._scrollableContainsElement(o, e) && t.push(o);
        }),
          t;
      }
      _scrollableContainsElement(e, t) {
        let r = Re(t), o = e.getElementRef().nativeElement;
        do if (r == o) return !0; while (r = r.parentElement);
        return !1;
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
    return n;
  })();
var Wp = 20,
  Ia = (() => {
    class n {
      _platform = l(q);
      _listeners;
      _viewportSize;
      _change = new w();
      _document = l(A, { optional: !0 });
      constructor() {
        let e = l(x), t = l($e).createRenderer(null, null);
        e.runOutsideAngular(() => {
          if (this._platform.isBrowser) {
            let r = (o) => this._change.next(o);
            this._listeners = [
              t.listen("window", "resize", r),
              t.listen("window", "orientationchange", r),
            ];
          }
          this.change().subscribe(() => this._viewportSize = null);
        });
      }
      ngOnDestroy() {
        this._listeners?.forEach((e) => e()), this._change.complete();
      }
      getViewportSize() {
        this._viewportSize || this._updateViewportSize();
        let e = {
          width: this._viewportSize.width,
          height: this._viewportSize.height,
        };
        return this._platform.isBrowser || (this._viewportSize = null), e;
      }
      getViewportRect() {
        let e = this.getViewportScrollPosition(),
          { width: t, height: r } = this.getViewportSize();
        return {
          top: e.top,
          left: e.left,
          bottom: e.top + r,
          right: e.left + t,
          height: r,
          width: t,
        };
      }
      getViewportScrollPosition() {
        if (!this._platform.isBrowser) return { top: 0, left: 0 };
        let e = this._document,
          t = this._getWindow(),
          r = e.documentElement,
          o = r.getBoundingClientRect(),
          a = -o.top || e.body.scrollTop || t.scrollY || r.scrollTop || 0,
          s = -o.left || e.body.scrollLeft || t.scrollX || r.scrollLeft || 0;
        return { top: a, left: s };
      }
      change(e = Wp) {
        return e > 0 ? this._change.pipe(Dr(e)) : this._change;
      }
      _getWindow() {
        return this._document.defaultView || window;
      }
      _updateViewportSize() {
        let e = this._getWindow();
        this._viewportSize = this._platform.isBrowser
          ? { width: e.innerWidth, height: e.innerHeight }
          : { width: 0, height: 0 };
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
    return n;
  })();
var hd = (() => {
    class n {
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵmod = M({ type: n });
      static ɵinj = D({});
    }
    return n;
  })(),
  Sa = (() => {
    class n {
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵmod = M({ type: n });
      static ɵinj = D({ imports: [dt, hd, dt, hd] });
    }
    return n;
  })();
var pd = ua(),
  Aa = class {
    _viewportRuler;
    _previousHTMLStyles = { top: "", left: "" };
    _previousScrollPosition;
    _isEnabled = !1;
    _document;
    constructor(i, e) {
      this._viewportRuler = i, this._document = e;
    }
    attach() {}
    enable() {
      if (this._canBeEnabled()) {
        let i = this._document.documentElement;
        this._previousScrollPosition = this._viewportRuler
          .getViewportScrollPosition(),
          this._previousHTMLStyles.left = i.style.left || "",
          this._previousHTMLStyles.top = i.style.top || "",
          i.style.left = ee(-this._previousScrollPosition.left),
          i.style.top = ee(-this._previousScrollPosition.top),
          i.classList.add("cdk-global-scrollblock"),
          this._isEnabled = !0;
      }
    }
    disable() {
      if (this._isEnabled) {
        let i = this._document.documentElement,
          e = this._document.body,
          t = i.style,
          r = e.style,
          o = t.scrollBehavior || "",
          a = r.scrollBehavior || "";
        this._isEnabled = !1,
          t.left = this._previousHTMLStyles.left,
          t.top = this._previousHTMLStyles.top,
          i.classList.remove("cdk-global-scrollblock"),
          pd && (t.scrollBehavior = r.scrollBehavior = "auto"),
          window.scroll(
            this._previousScrollPosition.left,
            this._previousScrollPosition.top,
          ),
          pd && (t.scrollBehavior = o, r.scrollBehavior = a);
      }
    }
    _canBeEnabled() {
      if (
        this._document.documentElement.classList.contains(
          "cdk-global-scrollblock",
        ) || this._isEnabled
      ) return !1;
      let e = this._document.body, t = this._viewportRuler.getViewportSize();
      return e.scrollHeight > t.height || e.scrollWidth > t.width;
    }
  };
var Ra = class {
    _scrollDispatcher;
    _ngZone;
    _viewportRuler;
    _config;
    _scrollSubscription = null;
    _overlayRef;
    _initialScrollPosition;
    constructor(i, e, t, r) {
      this._scrollDispatcher = i,
        this._ngZone = e,
        this._viewportRuler = t,
        this._config = r;
    }
    attach(i) {
      this._overlayRef, this._overlayRef = i;
    }
    enable() {
      if (this._scrollSubscription) return;
      let i = this._scrollDispatcher.scrolled(0).pipe(
        re((e) =>
          !e ||
          !this._overlayRef.overlayElement.contains(
            e.getElementRef().nativeElement,
          )
        ),
      );
      this._config && this._config.threshold && this._config.threshold > 1
        ? (this._initialScrollPosition =
          this._viewportRuler.getViewportScrollPosition().top,
          this._scrollSubscription = i.subscribe(() => {
            let e = this._viewportRuler.getViewportScrollPosition().top;
            Math.abs(e - this._initialScrollPosition) > this._config.threshold
              ? this._detach()
              : this._overlayRef.updatePosition();
          }))
        : this._scrollSubscription = i.subscribe(this._detach);
    }
    disable() {
      this._scrollSubscription &&
        (this._scrollSubscription.unsubscribe(),
          this._scrollSubscription = null);
    }
    detach() {
      this.disable(), this._overlayRef = null;
    }
    _detach = () => {
      this.disable(),
        this._overlayRef.hasAttached() &&
        this._ngZone.run(() => this._overlayRef.detach());
    };
  },
  vr = class {
    enable() {}
    disable() {}
    attach() {}
  };
function Ta(n, i) {
  return i.some((e) => {
    let t = n.bottom < e.top,
      r = n.top > e.bottom,
      o = n.right < e.left,
      a = n.left > e.right;
    return t || r || o || a;
  });
}
function gd(n, i) {
  return i.some((e) => {
    let t = n.top < e.top,
      r = n.bottom > e.bottom,
      o = n.left < e.left,
      a = n.right > e.right;
    return t || r || o || a;
  });
}
var Oa = class {
    _scrollDispatcher;
    _viewportRuler;
    _ngZone;
    _config;
    _scrollSubscription = null;
    _overlayRef;
    constructor(i, e, t, r) {
      this._scrollDispatcher = i,
        this._viewportRuler = e,
        this._ngZone = t,
        this._config = r;
    }
    attach(i) {
      this._overlayRef, this._overlayRef = i;
    }
    enable() {
      if (!this._scrollSubscription) {
        let i = this._config ? this._config.scrollThrottle : 0;
        this._scrollSubscription = this._scrollDispatcher.scrolled(i).subscribe(
          () => {
            if (
              this._overlayRef.updatePosition(),
                this._config && this._config.autoClose
            ) {
              let e = this._overlayRef.overlayElement.getBoundingClientRect(),
                { width: t, height: r } = this._viewportRuler.getViewportSize();
              Ta(e, [{
                width: t,
                height: r,
                bottom: r,
                right: t,
                top: 0,
                left: 0,
              }]) && (this.disable(),
                this._ngZone.run(() => this._overlayRef.detach()));
            }
          },
        );
      }
    }
    disable() {
      this._scrollSubscription &&
        (this._scrollSubscription.unsubscribe(),
          this._scrollSubscription = null);
    }
    detach() {
      this.disable(), this._overlayRef = null;
    }
  },
  Gp = (() => {
    class n {
      _scrollDispatcher = l(fd);
      _viewportRuler = l(Ia);
      _ngZone = l(x);
      _document = l(A);
      constructor() {}
      noop = () => new vr();
      close = (e) =>
        new Ra(this._scrollDispatcher, this._ngZone, this._viewportRuler, e);
      block = () => new Aa(this._viewportRuler, this._document);
      reposition = (e) =>
        new Oa(this._scrollDispatcher, this._viewportRuler, this._ngZone, e);
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
    return n;
  })(),
  Ji = class {
    positionStrategy;
    scrollStrategy = new vr();
    panelClass = "";
    hasBackdrop = !1;
    backdropClass = "cdk-overlay-dark-backdrop";
    width;
    height;
    minWidth;
    minHeight;
    maxWidth;
    maxHeight;
    direction;
    disposeOnNavigation = !1;
    constructor(i) {
      if (i) {
        let e = Object.keys(i);
        for (let t of e) i[t] !== void 0 && (this[t] = i[t]);
      }
    }
  };
var Fa = class {
  connectionPair;
  scrollableViewProperties;
  constructor(i, e) {
    this.connectionPair = i, this.scrollableViewProperties = e;
  }
};
var wd = (() => {
    class n {
      _attachedOverlays = [];
      _document = l(A);
      _isAttached;
      constructor() {}
      ngOnDestroy() {
        this.detach();
      }
      add(e) {
        this.remove(e), this._attachedOverlays.push(e);
      }
      remove(e) {
        let t = this._attachedOverlays.indexOf(e);
        t > -1 && this._attachedOverlays.splice(t, 1),
          this._attachedOverlays.length === 0 && this.detach();
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
    return n;
  })(),
  qp = (() => {
    class n extends wd {
      _ngZone = l(x);
      _renderer = l($e).createRenderer(null, null);
      _cleanupKeydown;
      add(e) {
        super.add(e),
          this._isAttached || (this._ngZone.runOutsideAngular(() => {
            this._cleanupKeydown = this._renderer.listen(
              "body",
              "keydown",
              this._keydownListener,
            );
          }),
            this._isAttached = !0);
      }
      detach() {
        this._isAttached && (this._cleanupKeydown?.(), this._isAttached = !1);
      }
      _keydownListener = (e) => {
        let t = this._attachedOverlays;
        for (let r = t.length - 1; r > -1; r--) {
          if (t[r]._keydownEvents.observers.length > 0) {
            this._ngZone.run(() => t[r]._keydownEvents.next(e));
            break;
          }
        }
      };
      static ɵfac = (() => {
        let e;
        return function (r) {
          return (e || (e = Ie(n)))(r || n);
        };
      })();
      static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
    return n;
  })(),
  Yp = (() => {
    class n extends wd {
      _platform = l(q);
      _ngZone = l(x, { optional: !0 });
      _cursorOriginalValue;
      _cursorStyleIsSet = !1;
      _pointerDownEventTarget;
      add(e) {
        if (super.add(e), !this._isAttached) {
          let t = this._document.body;
          this._ngZone
            ? this._ngZone.runOutsideAngular(() => this._addEventListeners(t))
            : this._addEventListeners(t),
            this._platform.IOS && !this._cursorStyleIsSet &&
            (this._cursorOriginalValue = t.style.cursor,
              t.style.cursor = "pointer",
              this._cursorStyleIsSet = !0),
            this._isAttached = !0;
        }
      }
      detach() {
        if (this._isAttached) {
          let e = this._document.body;
          e.removeEventListener("pointerdown", this._pointerDownListener, !0),
            e.removeEventListener("click", this._clickListener, !0),
            e.removeEventListener("auxclick", this._clickListener, !0),
            e.removeEventListener("contextmenu", this._clickListener, !0),
            this._platform.IOS && this._cursorStyleIsSet &&
            (e.style.cursor = this._cursorOriginalValue,
              this._cursorStyleIsSet = !1),
            this._isAttached = !1;
        }
      }
      _addEventListeners(e) {
        e.addEventListener("pointerdown", this._pointerDownListener, !0),
          e.addEventListener("click", this._clickListener, !0),
          e.addEventListener("auxclick", this._clickListener, !0),
          e.addEventListener("contextmenu", this._clickListener, !0);
      }
      _pointerDownListener = (e) => {
        this._pointerDownEventTarget = Ae(e);
      };
      _clickListener = (e) => {
        let t = Ae(e),
          r = e.type === "click" && this._pointerDownEventTarget
            ? this._pointerDownEventTarget
            : t;
        this._pointerDownEventTarget = null;
        let o = this._attachedOverlays.slice();
        for (let a = o.length - 1; a > -1; a--) {
          let s = o[a];
          if (
            s._outsidePointerEvents.observers.length < 1 || !s.hasAttached()
          ) continue;
          if (bd(s.overlayElement, t) || bd(s.overlayElement, r)) break;
          let c = s._outsidePointerEvents;
          this._ngZone ? this._ngZone.run(() => c.next(e)) : c.next(e);
        }
      };
      static ɵfac = (() => {
        let e;
        return function (r) {
          return (e || (e = Ie(n)))(r || n);
        };
      })();
      static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
    return n;
  })();
function bd(n, i) {
  let e = typeof ShadowRoot < "u" && ShadowRoot, t = i;
  for (; t;) {
    if (t === n) return !0;
    t = e && t instanceof ShadowRoot ? t.host : t.parentNode;
  }
  return !1;
}
var Cd = (() => {
    class n {
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵcmp = F({
        type: n,
        selectors: [["ng-component"]],
        hostAttrs: ["cdk-overlay-style-loader", ""],
        decls: 0,
        vars: 0,
        template: function (t, r) {},
        styles: [
          ".cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed}@layer cdk-overlay{.cdk-overlay-container{z-index:1000}}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute}@layer cdk-overlay{.cdk-global-overlay-wrapper{z-index:1000}}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;display:flex;max-width:100%;max-height:100%}@layer cdk-overlay{.cdk-overlay-pane{z-index:1000}}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;pointer-events:auto;-webkit-tap-highlight-color:rgba(0,0,0,0);opacity:0}@layer cdk-overlay{.cdk-overlay-backdrop{z-index:1000;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}}.cdk-overlay-backdrop-showing{opacity:1}@media(forced-colors: active){.cdk-overlay-backdrop-showing{opacity:.6}}@layer cdk-overlay{.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}}.cdk-overlay-transparent-backdrop{transition:visibility 1ms linear,opacity 1ms linear;visibility:hidden;opacity:1}.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing,.cdk-high-contrast-active .cdk-overlay-transparent-backdrop{opacity:0;visibility:visible}.cdk-overlay-backdrop-noop-animation{transition:none}.cdk-overlay-connected-position-bounding-box{position:absolute;display:flex;flex-direction:column;min-width:1px;min-height:1px}@layer cdk-overlay{.cdk-overlay-connected-position-bounding-box{z-index:1000}}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}",
        ],
        encapsulation: 2,
        changeDetection: 0,
      });
    }
    return n;
  })(),
  kd = (() => {
    class n {
      _platform = l(q);
      _containerElement;
      _document = l(A);
      _styleLoader = l(ze);
      constructor() {}
      ngOnDestroy() {
        this._containerElement?.remove();
      }
      getContainerElement() {
        return this._loadStyles(),
          this._containerElement || this._createContainer(),
          this._containerElement;
      }
      _createContainer() {
        let e = "cdk-overlay-container";
        if (this._platform.isBrowser || ma()) {
          let r = this._document.querySelectorAll(
            `.${e}[platform="server"], .${e}[platform="test"]`,
          );
          for (let o = 0; o < r.length; o++) r[o].remove();
        }
        let t = this._document.createElement("div");
        t.classList.add(e),
          ma()
            ? t.setAttribute("platform", "test")
            : this._platform.isBrowser || t.setAttribute("platform", "server"),
          this._document.body.appendChild(t),
          this._containerElement = t;
      }
      _loadStyles() {
        this._styleLoader.load(Cd);
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
    return n;
  })(),
  Pa = class {
    _portalOutlet;
    _host;
    _pane;
    _config;
    _ngZone;
    _keyboardDispatcher;
    _document;
    _location;
    _outsideClickDispatcher;
    _animationsDisabled;
    _injector;
    _renderer;
    _backdropElement = null;
    _backdropTimeout;
    _backdropClick = new w();
    _attachments = new w();
    _detachments = new w();
    _positionStrategy;
    _scrollStrategy;
    _locationChanges = Fe.EMPTY;
    _cleanupBackdropClick;
    _cleanupBackdropTransitionEnd;
    _previousHostParent;
    _keydownEvents = new w();
    _outsidePointerEvents = new w();
    _renders = new w();
    _afterRenderRef;
    _afterNextRenderRef;
    constructor(i, e, t, r, o, a, s, c, d, u = !1, h, v) {
      this._portalOutlet = i,
        this._host = e,
        this._pane = t,
        this._config = r,
        this._ngZone = o,
        this._keyboardDispatcher = a,
        this._document = s,
        this._location = c,
        this._outsideClickDispatcher = d,
        this._animationsDisabled = u,
        this._injector = h,
        this._renderer = v,
        r.scrollStrategy &&
        (this._scrollStrategy = r.scrollStrategy,
          this._scrollStrategy.attach(this)),
        this._positionStrategy = r.positionStrategy,
        this._afterRenderRef = je(() => ln(() => {
          this._renders.next();
        }, { injector: this._injector }));
    }
    get overlayElement() {
      return this._pane;
    }
    get backdropElement() {
      return this._backdropElement;
    }
    get hostElement() {
      return this._host;
    }
    attach(i) {
      !this._host.parentElement && this._previousHostParent &&
        this._previousHostParent.appendChild(this._host);
      let e = this._portalOutlet.attach(i);
      return this._positionStrategy && this._positionStrategy.attach(this),
        this._updateStackingOrder(),
        this._updateElementSize(),
        this._updateElementDirection(),
        this._scrollStrategy && this._scrollStrategy.enable(),
        this._afterNextRenderRef?.destroy(),
        this._afterNextRenderRef = di(() => {
          this.hasAttached() && this.updatePosition();
        }, { injector: this._injector }),
        this._togglePointerEvents(!0),
        this._config.hasBackdrop && this._attachBackdrop(),
        this._config.panelClass &&
        this._toggleClasses(this._pane, this._config.panelClass, !0),
        this._attachments.next(),
        this._keyboardDispatcher.add(this),
        this._config.disposeOnNavigation &&
        (this._locationChanges = this._location.subscribe(() =>
          this.dispose()
        )),
        this._outsideClickDispatcher.add(this),
        typeof e?.onDestroy == "function" && e.onDestroy(() => {
          this.hasAttached() &&
            this._ngZone.runOutsideAngular(() =>
              Promise.resolve().then(() => this.detach())
            );
        }),
        e;
    }
    detach() {
      if (!this.hasAttached()) return;
      this.detachBackdrop(),
        this._togglePointerEvents(!1),
        this._positionStrategy && this._positionStrategy.detach &&
        this._positionStrategy.detach(),
        this._scrollStrategy && this._scrollStrategy.disable();
      let i = this._portalOutlet.detach();
      return this._detachments.next(),
        this._keyboardDispatcher.remove(this),
        this._detachContentWhenEmpty(),
        this._locationChanges.unsubscribe(),
        this._outsideClickDispatcher.remove(this),
        i;
    }
    dispose() {
      let i = this.hasAttached();
      this._positionStrategy && this._positionStrategy.dispose(),
        this._disposeScrollStrategy(),
        this._disposeBackdrop(this._backdropElement),
        this._locationChanges.unsubscribe(),
        this._keyboardDispatcher.remove(this),
        this._portalOutlet.dispose(),
        this._attachments.complete(),
        this._backdropClick.complete(),
        this._keydownEvents.complete(),
        this._outsidePointerEvents.complete(),
        this._outsideClickDispatcher.remove(this),
        this._host?.remove(),
        this._afterNextRenderRef?.destroy(),
        this._previousHostParent = this._pane = this._host = null,
        i && this._detachments.next(),
        this._detachments.complete(),
        this._afterRenderRef.destroy(),
        this._renders.complete();
    }
    hasAttached() {
      return this._portalOutlet.hasAttached();
    }
    backdropClick() {
      return this._backdropClick;
    }
    attachments() {
      return this._attachments;
    }
    detachments() {
      return this._detachments;
    }
    keydownEvents() {
      return this._keydownEvents;
    }
    outsidePointerEvents() {
      return this._outsidePointerEvents;
    }
    getConfig() {
      return this._config;
    }
    updatePosition() {
      this._positionStrategy && this._positionStrategy.apply();
    }
    updatePositionStrategy(i) {
      i !== this._positionStrategy &&
        (this._positionStrategy && this._positionStrategy.dispose(),
          this._positionStrategy = i,
          this.hasAttached() && (i.attach(this), this.updatePosition()));
    }
    updateSize(i) {
      this._config = m(m({}, this._config), i), this._updateElementSize();
    }
    setDirection(i) {
      this._config = V(m({}, this._config), { direction: i }),
        this._updateElementDirection();
    }
    addPanelClass(i) {
      this._pane && this._toggleClasses(this._pane, i, !0);
    }
    removePanelClass(i) {
      this._pane && this._toggleClasses(this._pane, i, !1);
    }
    getDirection() {
      let i = this._config.direction;
      return i ? typeof i == "string" ? i : i.value : "ltr";
    }
    updateScrollStrategy(i) {
      i !== this._scrollStrategy &&
        (this._disposeScrollStrategy(),
          this._scrollStrategy = i,
          this.hasAttached() && (i.attach(this), i.enable()));
    }
    _updateElementDirection() {
      this._host.setAttribute("dir", this.getDirection());
    }
    _updateElementSize() {
      if (!this._pane) return;
      let i = this._pane.style;
      i.width = ee(this._config.width),
        i.height = ee(this._config.height),
        i.minWidth = ee(this._config.minWidth),
        i.minHeight = ee(this._config.minHeight),
        i.maxWidth = ee(this._config.maxWidth),
        i.maxHeight = ee(this._config.maxHeight);
    }
    _togglePointerEvents(i) {
      this._pane.style.pointerEvents = i ? "" : "none";
    }
    _attachBackdrop() {
      let i = "cdk-overlay-backdrop-showing";
      this._backdropElement = this._document.createElement("div"),
        this._backdropElement.classList.add("cdk-overlay-backdrop"),
        this._animationsDisabled &&
        this._backdropElement.classList.add(
          "cdk-overlay-backdrop-noop-animation",
        ),
        this._config.backdropClass &&
        this._toggleClasses(
          this._backdropElement,
          this._config.backdropClass,
          !0,
        ),
        this._host.parentElement.insertBefore(
          this._backdropElement,
          this._host,
        ),
        this._cleanupBackdropClick?.(),
        this._cleanupBackdropClick = this._renderer.listen(
          this._backdropElement,
          "click",
          (e) => this._backdropClick.next(e),
        ),
        !this._animationsDisabled && typeof requestAnimationFrame < "u"
          ? this._ngZone.runOutsideAngular(() => {
            requestAnimationFrame(() => {
              this._backdropElement && this._backdropElement.classList.add(i);
            });
          })
          : this._backdropElement.classList.add(i);
    }
    _updateStackingOrder() {
      this._host.nextSibling && this._host.parentNode.appendChild(this._host);
    }
    detachBackdrop() {
      let i = this._backdropElement;
      if (i) {
        if (this._animationsDisabled) {
          this._disposeBackdrop(i);
          return;
        }
        i.classList.remove("cdk-overlay-backdrop-showing"),
          this._ngZone.runOutsideAngular(() => {
            this._cleanupBackdropTransitionEnd?.(),
              this._cleanupBackdropTransitionEnd = this._renderer.listen(
                i,
                "transitionend",
                (e) => {
                  this._disposeBackdrop(e.target);
                },
              );
          }),
          i.style.pointerEvents = "none",
          this._backdropTimeout = this._ngZone.runOutsideAngular(() =>
            setTimeout(() => {
              this._disposeBackdrop(i);
            }, 500)
          );
      }
    }
    _toggleClasses(i, e, t) {
      let r = Jt(e || []).filter((o) => !!o);
      r.length && (t ? i.classList.add(...r) : i.classList.remove(...r));
    }
    _detachContentWhenEmpty() {
      this._ngZone.runOutsideAngular(() => {
        let i = this._renders.pipe(se(an(this._attachments, this._detachments)))
          .subscribe(() => {
            (!this._pane || !this._host || this._pane.children.length === 0) &&
              (this._pane && this._config.panelClass &&
                this._toggleClasses(this._pane, this._config.panelClass, !1),
                this._host && this._host.parentElement &&
                (this._previousHostParent = this._host.parentElement,
                  this._host.remove()),
                i.unsubscribe());
          });
      });
    }
    _disposeScrollStrategy() {
      let i = this._scrollStrategy;
      i && (i.disable(), i.detach && i.detach());
    }
    _disposeBackdrop(i) {
      this._cleanupBackdropClick?.(),
        this._cleanupBackdropTransitionEnd?.(),
        i &&
        (i.remove(),
          this._backdropElement === i && (this._backdropElement = null)),
        this._backdropTimeout &&
        (clearTimeout(this._backdropTimeout), this._backdropTimeout = void 0);
    }
  },
  vd = "cdk-overlay-connected-position-bounding-box",
  Xp = /([A-Za-z%]+)$/,
  Na = class {
    _viewportRuler;
    _document;
    _platform;
    _overlayContainer;
    _overlayRef;
    _isInitialRender;
    _lastBoundingBoxSize = { width: 0, height: 0 };
    _isPushed = !1;
    _canPush = !0;
    _growAfterOpen = !1;
    _hasFlexibleDimensions = !0;
    _positionLocked = !1;
    _originRect;
    _overlayRect;
    _viewportRect;
    _containerRect;
    _viewportMargin = 0;
    _scrollables = [];
    _preferredPositions = [];
    _origin;
    _pane;
    _isDisposed;
    _boundingBox;
    _lastPosition;
    _lastScrollVisibility;
    _positionChanges = new w();
    _resizeSubscription = Fe.EMPTY;
    _offsetX = 0;
    _offsetY = 0;
    _transformOriginSelector;
    _appliedPanelClasses = [];
    _previousPushAmount;
    positionChanges = this._positionChanges;
    get positions() {
      return this._preferredPositions;
    }
    constructor(i, e, t, r, o) {
      this._viewportRuler = e,
        this._document = t,
        this._platform = r,
        this._overlayContainer = o,
        this.setOrigin(i);
    }
    attach(i) {
      this._overlayRef && this._overlayRef,
        this._validatePositions(),
        i.hostElement.classList.add(vd),
        this._overlayRef = i,
        this._boundingBox = i.hostElement,
        this._pane = i.overlayElement,
        this._isDisposed = !1,
        this._isInitialRender = !0,
        this._lastPosition = null,
        this._resizeSubscription.unsubscribe(),
        this._resizeSubscription = this._viewportRuler.change().subscribe(
          () => {
            this._isInitialRender = !0, this.apply();
          },
        );
    }
    apply() {
      if (this._isDisposed || !this._platform.isBrowser) return;
      if (
        !this._isInitialRender && this._positionLocked && this._lastPosition
      ) {
        this.reapplyLastPosition();
        return;
      }
      this._clearPanelClasses(),
        this._resetOverlayElementStyles(),
        this._resetBoundingBoxStyles(),
        this._viewportRect = this._getNarrowedViewportRect(),
        this._originRect = this._getOriginRect(),
        this._overlayRect = this._pane.getBoundingClientRect(),
        this._containerRect = this._overlayContainer.getContainerElement()
          .getBoundingClientRect();
      let i = this._originRect,
        e = this._overlayRect,
        t = this._viewportRect,
        r = this._containerRect,
        o = [],
        a;
      for (let s of this._preferredPositions) {
        let c = this._getOriginPoint(i, r, s),
          d = this._getOverlayPoint(c, e, s),
          u = this._getOverlayFit(d, e, t, s);
        if (u.isCompletelyWithinViewport) {
          this._isPushed = !1, this._applyPosition(s, c);
          return;
        }
        if (this._canFitWithFlexibleDimensions(u, d, t)) {
          o.push({
            position: s,
            origin: c,
            overlayRect: e,
            boundingBoxRect: this._calculateBoundingBoxRect(c, s),
          });
          continue;
        }
        (!a || a.overlayFit.visibleArea < u.visibleArea) &&
          (a = {
            overlayFit: u,
            overlayPoint: d,
            originPoint: c,
            position: s,
            overlayRect: e,
          });
      }
      if (o.length) {
        let s = null, c = -1;
        for (let d of o) {
          let u = d.boundingBoxRect.width * d.boundingBoxRect.height *
            (d.position.weight || 1);
          u > c && (c = u, s = d);
        }
        this._isPushed = !1, this._applyPosition(s.position, s.origin);
        return;
      }
      if (this._canPush) {
        this._isPushed = !0, this._applyPosition(a.position, a.originPoint);
        return;
      }
      this._applyPosition(a.position, a.originPoint);
    }
    detach() {
      this._clearPanelClasses(),
        this._lastPosition = null,
        this._previousPushAmount = null,
        this._resizeSubscription.unsubscribe();
    }
    dispose() {
      this._isDisposed ||
        (this._boundingBox &&
          Rt(this._boundingBox.style, {
            top: "",
            left: "",
            right: "",
            bottom: "",
            height: "",
            width: "",
            alignItems: "",
            justifyContent: "",
          }),
          this._pane && this._resetOverlayElementStyles(),
          this._overlayRef && this._overlayRef.hostElement.classList.remove(vd),
          this.detach(),
          this._positionChanges.complete(),
          this._overlayRef = this._boundingBox = null,
          this._isDisposed = !0);
    }
    reapplyLastPosition() {
      if (this._isDisposed || !this._platform.isBrowser) return;
      let i = this._lastPosition;
      if (i) {
        this._originRect = this._getOriginRect(),
          this._overlayRect = this._pane.getBoundingClientRect(),
          this._viewportRect = this._getNarrowedViewportRect(),
          this._containerRect = this._overlayContainer.getContainerElement()
            .getBoundingClientRect();
        let e = this._getOriginPoint(this._originRect, this._containerRect, i);
        this._applyPosition(i, e);
      } else this.apply();
    }
    withScrollableContainers(i) {
      return this._scrollables = i, this;
    }
    withPositions(i) {
      return this._preferredPositions = i,
        i.indexOf(this._lastPosition) === -1 && (this._lastPosition = null),
        this._validatePositions(),
        this;
    }
    withViewportMargin(i) {
      return this._viewportMargin = i, this;
    }
    withFlexibleDimensions(i = !0) {
      return this._hasFlexibleDimensions = i, this;
    }
    withGrowAfterOpen(i = !0) {
      return this._growAfterOpen = i, this;
    }
    withPush(i = !0) {
      return this._canPush = i, this;
    }
    withLockedPosition(i = !0) {
      return this._positionLocked = i, this;
    }
    setOrigin(i) {
      return this._origin = i, this;
    }
    withDefaultOffsetX(i) {
      return this._offsetX = i, this;
    }
    withDefaultOffsetY(i) {
      return this._offsetY = i, this;
    }
    withTransformOriginOn(i) {
      return this._transformOriginSelector = i, this;
    }
    _getOriginPoint(i, e, t) {
      let r;
      if (t.originX == "center") r = i.left + i.width / 2;
      else {
        let a = this._isRtl() ? i.right : i.left,
          s = this._isRtl() ? i.left : i.right;
        r = t.originX == "start" ? a : s;
      }
      e.left < 0 && (r -= e.left);
      let o;
      return t.originY == "center"
        ? o = i.top + i.height / 2
        : o = t.originY == "top" ? i.top : i.bottom,
        e.top < 0 && (o -= e.top),
        { x: r, y: o };
    }
    _getOverlayPoint(i, e, t) {
      let r;
      t.overlayX == "center"
        ? r = -e.width / 2
        : t.overlayX === "start"
        ? r = this._isRtl() ? -e.width : 0
        : r = this._isRtl() ? 0 : -e.width;
      let o;
      return t.overlayY == "center"
        ? o = -e.height / 2
        : o = t.overlayY == "top" ? 0 : -e.height,
        { x: i.x + r, y: i.y + o };
    }
    _getOverlayFit(i, e, t, r) {
      let o = yd(e),
        { x: a, y: s } = i,
        c = this._getOffset(r, "x"),
        d = this._getOffset(r, "y");
      c && (a += c), d && (s += d);
      let u = 0 - a,
        h = a + o.width - t.width,
        v = 0 - s,
        y = s + o.height - t.height,
        R = this._subtractOverflows(o.width, u, h),
        b = this._subtractOverflows(o.height, v, y),
        E = R * b;
      return {
        visibleArea: E,
        isCompletelyWithinViewport: o.width * o.height === E,
        fitsInViewportVertically: b === o.height,
        fitsInViewportHorizontally: R == o.width,
      };
    }
    _canFitWithFlexibleDimensions(i, e, t) {
      if (this._hasFlexibleDimensions) {
        let r = t.bottom - e.y,
          o = t.right - e.x,
          a = _d(this._overlayRef.getConfig().minHeight),
          s = _d(this._overlayRef.getConfig().minWidth),
          c = i.fitsInViewportVertically || a != null && a <= r,
          d = i.fitsInViewportHorizontally || s != null && s <= o;
        return c && d;
      }
      return !1;
    }
    _pushOverlayOnScreen(i, e, t) {
      if (this._previousPushAmount && this._positionLocked) {
        return {
          x: i.x + this._previousPushAmount.x,
          y: i.y + this._previousPushAmount.y,
        };
      }
      let r = yd(e),
        o = this._viewportRect,
        a = Math.max(i.x + r.width - o.width, 0),
        s = Math.max(i.y + r.height - o.height, 0),
        c = Math.max(o.top - t.top - i.y, 0),
        d = Math.max(o.left - t.left - i.x, 0),
        u = 0,
        h = 0;
      return r.width <= o.width
        ? u = d || -a
        : u = i.x < this._viewportMargin ? o.left - t.left - i.x : 0,
        r.height <= o.height
          ? h = c || -s
          : h = i.y < this._viewportMargin ? o.top - t.top - i.y : 0,
        this._previousPushAmount = { x: u, y: h },
        { x: i.x + u, y: i.y + h };
    }
    _applyPosition(i, e) {
      if (
        this._setTransformOrigin(i),
          this._setOverlayElementStyles(e, i),
          this._setBoundingBoxStyles(e, i),
          i.panelClass && this._addPanelClasses(i.panelClass),
          this._positionChanges.observers.length
      ) {
        let t = this._getScrollVisibility();
        if (
          i !== this._lastPosition || !this._lastScrollVisibility ||
          !Zp(this._lastScrollVisibility, t)
        ) {
          let r = new Fa(i, t);
          this._positionChanges.next(r);
        }
        this._lastScrollVisibility = t;
      }
      this._lastPosition = i, this._isInitialRender = !1;
    }
    _setTransformOrigin(i) {
      if (!this._transformOriginSelector) return;
      let e = this._boundingBox.querySelectorAll(this._transformOriginSelector),
        t,
        r = i.overlayY;
      i.overlayX === "center"
        ? t = "center"
        : this._isRtl()
        ? t = i.overlayX === "start" ? "right" : "left"
        : t = i.overlayX === "start" ? "left" : "right";
      for (let o = 0; o < e.length; o++) {
        e[o].style.transformOrigin = `${t} ${r}`;
      }
    }
    _calculateBoundingBoxRect(i, e) {
      let t = this._viewportRect, r = this._isRtl(), o, a, s;
      if (e.overlayY === "top") {
        a = i.y, o = t.height - a + this._viewportMargin;
      } else if (e.overlayY === "bottom") {
        s = t.height - i.y + this._viewportMargin * 2,
          o = t.height - s + this._viewportMargin;
      } else {
        let y = Math.min(t.bottom - i.y + t.top, i.y),
          R = this._lastBoundingBoxSize.height;
        o = y * 2,
          a = i.y - y,
          o > R && !this._isInitialRender && !this._growAfterOpen &&
          (a = i.y - R / 2);
      }
      let c = e.overlayX === "start" && !r || e.overlayX === "end" && r,
        d = e.overlayX === "end" && !r || e.overlayX === "start" && r,
        u,
        h,
        v;
      if (d) {
        v = t.width - i.x + this._viewportMargin * 2,
          u = i.x - this._viewportMargin;
      } else if (c) h = i.x, u = t.right - i.x;
      else {
        let y = Math.min(t.right - i.x + t.left, i.x),
          R = this._lastBoundingBoxSize.width;
        u = y * 2,
          h = i.x - y,
          u > R && !this._isInitialRender && !this._growAfterOpen &&
          (h = i.x - R / 2);
      }
      return { top: a, left: h, bottom: s, right: v, width: u, height: o };
    }
    _setBoundingBoxStyles(i, e) {
      let t = this._calculateBoundingBoxRect(i, e);
      !this._isInitialRender && !this._growAfterOpen &&
        (t.height = Math.min(t.height, this._lastBoundingBoxSize.height),
          t.width = Math.min(t.width, this._lastBoundingBoxSize.width));
      let r = {};
      if (this._hasExactPosition()) {
        r.top = r.left = "0",
          r.bottom =
            r.right =
            r.maxHeight =
            r.maxWidth =
              "",
          r.width = r.height = "100%";
      } else {
        let o = this._overlayRef.getConfig().maxHeight,
          a = this._overlayRef.getConfig().maxWidth;
        r.height = ee(t.height),
          r.top = ee(t.top),
          r.bottom = ee(t.bottom),
          r.width = ee(t.width),
          r.left = ee(t.left),
          r.right = ee(t.right),
          e.overlayX === "center"
            ? r.alignItems = "center"
            : r.alignItems = e.overlayX === "end" ? "flex-end" : "flex-start",
          e.overlayY === "center"
            ? r.justifyContent = "center"
            : r.justifyContent = e.overlayY === "bottom"
              ? "flex-end"
              : "flex-start",
          o && (r.maxHeight = ee(o)),
          a && (r.maxWidth = ee(a));
      }
      this._lastBoundingBoxSize = t, Rt(this._boundingBox.style, r);
    }
    _resetBoundingBoxStyles() {
      Rt(this._boundingBox.style, {
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        height: "",
        width: "",
        alignItems: "",
        justifyContent: "",
      });
    }
    _resetOverlayElementStyles() {
      Rt(this._pane.style, {
        top: "",
        left: "",
        bottom: "",
        right: "",
        position: "",
        transform: "",
      });
    }
    _setOverlayElementStyles(i, e) {
      let t = {},
        r = this._hasExactPosition(),
        o = this._hasFlexibleDimensions,
        a = this._overlayRef.getConfig();
      if (r) {
        let u = this._viewportRuler.getViewportScrollPosition();
        Rt(t, this._getExactOverlayY(e, i, u)),
          Rt(t, this._getExactOverlayX(e, i, u));
      } else t.position = "static";
      let s = "", c = this._getOffset(e, "x"), d = this._getOffset(e, "y");
      c && (s += `translateX(${c}px) `),
        d && (s += `translateY(${d}px)`),
        t.transform = s.trim(),
        a.maxHeight &&
        (r ? t.maxHeight = ee(a.maxHeight) : o && (t.maxHeight = "")),
        a.maxWidth &&
        (r ? t.maxWidth = ee(a.maxWidth) : o && (t.maxWidth = "")),
        Rt(this._pane.style, t);
    }
    _getExactOverlayY(i, e, t) {
      let r = { top: "", bottom: "" },
        o = this._getOverlayPoint(e, this._overlayRect, i);
      if (
        this._isPushed &&
        (o = this._pushOverlayOnScreen(o, this._overlayRect, t)),
          i.overlayY === "bottom"
      ) {
        let a = this._document.documentElement.clientHeight;
        r.bottom = `${a - (o.y + this._overlayRect.height)}px`;
      } else r.top = ee(o.y);
      return r;
    }
    _getExactOverlayX(i, e, t) {
      let r = { left: "", right: "" },
        o = this._getOverlayPoint(e, this._overlayRect, i);
      this._isPushed &&
        (o = this._pushOverlayOnScreen(o, this._overlayRect, t));
      let a;
      if (
        this._isRtl()
          ? a = i.overlayX === "end" ? "left" : "right"
          : a = i.overlayX === "end" ? "right" : "left", a === "right"
      ) {
        let s = this._document.documentElement.clientWidth;
        r.right = `${s - (o.x + this._overlayRect.width)}px`;
      } else r.left = ee(o.x);
      return r;
    }
    _getScrollVisibility() {
      let i = this._getOriginRect(),
        e = this._pane.getBoundingClientRect(),
        t = this._scrollables.map((r) =>
          r.getElementRef().nativeElement.getBoundingClientRect()
        );
      return {
        isOriginClipped: gd(i, t),
        isOriginOutsideView: Ta(i, t),
        isOverlayClipped: gd(e, t),
        isOverlayOutsideView: Ta(e, t),
      };
    }
    _subtractOverflows(i, ...e) {
      return e.reduce((t, r) => t - Math.max(r, 0), i);
    }
    _getNarrowedViewportRect() {
      let i = this._document.documentElement.clientWidth,
        e = this._document.documentElement.clientHeight,
        t = this._viewportRuler.getViewportScrollPosition();
      return {
        top: t.top + this._viewportMargin,
        left: t.left + this._viewportMargin,
        right: t.left + i - this._viewportMargin,
        bottom: t.top + e - this._viewportMargin,
        width: i - 2 * this._viewportMargin,
        height: e - 2 * this._viewportMargin,
      };
    }
    _isRtl() {
      return this._overlayRef.getDirection() === "rtl";
    }
    _hasExactPosition() {
      return !this._hasFlexibleDimensions || this._isPushed;
    }
    _getOffset(i, e) {
      return e === "x"
        ? i.offsetX == null ? this._offsetX : i.offsetX
        : i.offsetY == null
        ? this._offsetY
        : i.offsetY;
    }
    _validatePositions() {}
    _addPanelClasses(i) {
      this._pane && Jt(i).forEach((e) => {
        e !== "" && this._appliedPanelClasses.indexOf(e) === -1 &&
          (this._appliedPanelClasses.push(e), this._pane.classList.add(e));
      });
    }
    _clearPanelClasses() {
      this._pane && (this._appliedPanelClasses.forEach((i) => {
        this._pane.classList.remove(i);
      }),
        this._appliedPanelClasses = []);
    }
    _getOriginRect() {
      let i = this._origin;
      if (i instanceof N) return i.nativeElement.getBoundingClientRect();
      if (i instanceof Element) return i.getBoundingClientRect();
      let e = i.width || 0, t = i.height || 0;
      return {
        top: i.y,
        bottom: i.y + t,
        left: i.x,
        right: i.x + e,
        height: t,
        width: e,
      };
    }
  };
function Rt(n, i) {
  for (let e in i) i.hasOwnProperty(e) && (n[e] = i[e]);
  return n;
}
function _d(n) {
  if (typeof n != "number" && n != null) {
    let [i, e] = n.split(Xp);
    return !e || e === "px" ? parseFloat(i) : null;
  }
  return n || null;
}
function yd(n) {
  return {
    top: Math.floor(n.top),
    right: Math.floor(n.right),
    bottom: Math.floor(n.bottom),
    left: Math.floor(n.left),
    width: Math.floor(n.width),
    height: Math.floor(n.height),
  };
}
function Zp(n, i) {
  return n === i ? !0 : n.isOriginClipped === i.isOriginClipped &&
    n.isOriginOutsideView === i.isOriginOutsideView &&
    n.isOverlayClipped === i.isOverlayClipped &&
    n.isOverlayOutsideView === i.isOverlayOutsideView;
}
var xd = "cdk-global-overlay-wrapper",
  La = class {
    _overlayRef;
    _cssPosition = "static";
    _topOffset = "";
    _bottomOffset = "";
    _alignItems = "";
    _xPosition = "";
    _xOffset = "";
    _width = "";
    _height = "";
    _isDisposed = !1;
    attach(i) {
      let e = i.getConfig();
      this._overlayRef = i,
        this._width && !e.width && i.updateSize({ width: this._width }),
        this._height && !e.height && i.updateSize({ height: this._height }),
        i.hostElement.classList.add(xd),
        this._isDisposed = !1;
    }
    top(i = "") {
      return this._bottomOffset = "",
        this._topOffset = i,
        this._alignItems = "flex-start",
        this;
    }
    left(i = "") {
      return this._xOffset = i, this._xPosition = "left", this;
    }
    bottom(i = "") {
      return this._topOffset = "",
        this._bottomOffset = i,
        this._alignItems = "flex-end",
        this;
    }
    right(i = "") {
      return this._xOffset = i, this._xPosition = "right", this;
    }
    start(i = "") {
      return this._xOffset = i, this._xPosition = "start", this;
    }
    end(i = "") {
      return this._xOffset = i, this._xPosition = "end", this;
    }
    width(i = "") {
      return this._overlayRef
        ? this._overlayRef.updateSize({ width: i })
        : this._width = i,
        this;
    }
    height(i = "") {
      return this._overlayRef
        ? this._overlayRef.updateSize({ height: i })
        : this._height = i,
        this;
    }
    centerHorizontally(i = "") {
      return this.left(i), this._xPosition = "center", this;
    }
    centerVertically(i = "") {
      return this.top(i), this._alignItems = "center", this;
    }
    apply() {
      if (!this._overlayRef || !this._overlayRef.hasAttached()) return;
      let i = this._overlayRef.overlayElement.style,
        e = this._overlayRef.hostElement.style,
        t = this._overlayRef.getConfig(),
        { width: r, height: o, maxWidth: a, maxHeight: s } = t,
        c = (r === "100%" || r === "100vw") &&
          (!a || a === "100%" || a === "100vw"),
        d = (o === "100%" || o === "100vh") &&
          (!s || s === "100%" || s === "100vh"),
        u = this._xPosition,
        h = this._xOffset,
        v = this._overlayRef.getConfig().direction === "rtl",
        y = "",
        R = "",
        b = "";
      c
        ? b = "flex-start"
        : u === "center"
        ? (b = "center", v ? R = h : y = h)
        : v
        ? u === "left" || u === "end"
          ? (b = "flex-end", y = h)
          : (u === "right" || u === "start") && (b = "flex-start", R = h)
        : u === "left" || u === "start"
        ? (b = "flex-start", y = h)
        : (u === "right" || u === "end") && (b = "flex-end", R = h),
        i.position = this._cssPosition,
        i.marginLeft = c ? "0" : y,
        i.marginTop = d ? "0" : this._topOffset,
        i.marginBottom = this._bottomOffset,
        i.marginRight = c ? "0" : R,
        e.justifyContent = b,
        e.alignItems = d ? "flex-start" : this._alignItems;
    }
    dispose() {
      if (this._isDisposed || !this._overlayRef) return;
      let i = this._overlayRef.overlayElement.style,
        e = this._overlayRef.hostElement,
        t = e.style;
      e.classList.remove(xd),
        t.justifyContent =
          t.alignItems =
          i.marginTop =
          i.marginBottom =
          i.marginLeft =
          i.marginRight =
          i.position =
            "",
        this._overlayRef = null,
        this._isDisposed = !0;
    }
  },
  Kp = (() => {
    class n {
      _viewportRuler = l(Ia);
      _document = l(A);
      _platform = l(q);
      _overlayContainer = l(kd);
      constructor() {}
      global() {
        return new La();
      }
      flexibleConnectedTo(e) {
        return new Na(
          e,
          this._viewportRuler,
          this._document,
          this._platform,
          this._overlayContainer,
        );
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
    return n;
  })(),
  en = (() => {
    class n {
      scrollStrategies = l(Gp);
      _overlayContainer = l(kd);
      _positionBuilder = l(Kp);
      _keyboardDispatcher = l(qp);
      _injector = l($);
      _ngZone = l(x);
      _document = l(A);
      _directionality = l(Zi);
      _location = l(Lt);
      _outsideClickDispatcher = l(Yp);
      _animationsModuleType = l(xe, { optional: !0 });
      _idGenerator = l(Te);
      _renderer = l($e).createRenderer(null, null);
      _appRef;
      _styleLoader = l(ze);
      constructor() {}
      create(e) {
        this._styleLoader.load(Cd);
        let t = this._createHostElement(),
          r = this._createPaneElement(t),
          o = this._createPortalOutlet(r),
          a = new Ji(e);
        return a.direction = a.direction || this._directionality.value,
          new Pa(
            o,
            t,
            r,
            a,
            this._ngZone,
            this._keyboardDispatcher,
            this._document,
            this._location,
            this._outsideClickDispatcher,
            this._animationsModuleType === "NoopAnimations",
            this._injector.get(He),
            this._renderer,
          );
      }
      position() {
        return this._positionBuilder;
      }
      _createPaneElement(e) {
        let t = this._document.createElement("div");
        return t.id = this._idGenerator.getId("cdk-overlay-"),
          t.classList.add("cdk-overlay-pane"),
          e.appendChild(t),
          t;
      }
      _createHostElement() {
        let e = this._document.createElement("div");
        return this._overlayContainer.getContainerElement().appendChild(e), e;
      }
      _createPortalOutlet(e) {
        return this._appRef || (this._appRef = this._injector.get(nt)),
          new gr(e, null, this._appRef, this._injector, this._document);
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
    return n;
  })();
var Qp = new p("cdk-connected-overlay-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    let n = l(en);
    return () => n.scrollStrategies.reposition();
  },
});
function Jp(n) {
  return () => n.scrollStrategies.reposition();
}
var eg = { provide: Qp, deps: [en], useFactory: Jp },
  Ed = (() => {
    class n {
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵmod = M({ type: n });
      static ɵinj = D({ providers: [en, eg], imports: [dt, br, Sa, Sa] });
    }
    return n;
  })();
function tg(n, i) {
  if (n & 1) {
    let e = rt();
    C(0, "div", 1)(1, "button", 2),
      J("click", function () {
        ve(e);
        let r = de();
        return _e(r.action());
      }),
      Ve(2),
      I()();
  }
  if (n & 2) {
    let e = de();
    O(2), Pt(" ", e.data.action, " ");
  }
}
var ig = ["label"];
function ng(n, i) {}
var rg = Math.pow(2, 31) - 1,
  tn = class {
    _overlayRef;
    instance;
    containerInstance;
    _afterDismissed = new w();
    _afterOpened = new w();
    _onAction = new w();
    _durationTimeoutId;
    _dismissedByAction = !1;
    constructor(i, e) {
      this._overlayRef = e,
        this.containerInstance = i,
        i._onExit.subscribe(() => this._finishDismiss());
    }
    dismiss() {
      this._afterDismissed.closed || this.containerInstance.exit(),
        clearTimeout(this._durationTimeoutId);
    }
    dismissWithAction() {
      this._onAction.closed ||
      (this._dismissedByAction = !0,
        this._onAction.next(),
        this._onAction.complete(),
        this.dismiss()), clearTimeout(this._durationTimeoutId);
    }
    closeWithAction() {
      this.dismissWithAction();
    }
    _dismissAfter(i) {
      this._durationTimeoutId = setTimeout(
        () => this.dismiss(),
        Math.min(i, rg),
      );
    }
    _open() {
      this._afterOpened.closed ||
        (this._afterOpened.next(), this._afterOpened.complete());
    }
    _finishDismiss() {
      this._overlayRef.dispose(),
        this._onAction.closed || this._onAction.complete(),
        this._afterDismissed.next({
          dismissedByAction: this._dismissedByAction,
        }),
        this._afterDismissed.complete(),
        this._dismissedByAction = !1;
    }
    afterDismissed() {
      return this._afterDismissed;
    }
    afterOpened() {
      return this.containerInstance._onEnter;
    }
    onAction() {
      return this._onAction;
    }
  },
  Dd = new p("MatSnackBarData"),
  ri = class {
    politeness = "assertive";
    announcementMessage = "";
    viewContainerRef;
    duration = 0;
    panelClass;
    direction;
    data = null;
    horizontalPosition = "center";
    verticalPosition = "bottom";
  },
  og = (() => {
    class n {
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵdir = T({
        type: n,
        selectors: [["", "matSnackBarLabel", ""]],
        hostAttrs: [1, "mat-mdc-snack-bar-label", "mdc-snackbar__label"],
      });
    }
    return n;
  })(),
  ag = (() => {
    class n {
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵdir = T({
        type: n,
        selectors: [["", "matSnackBarActions", ""]],
        hostAttrs: [1, "mat-mdc-snack-bar-actions", "mdc-snackbar__actions"],
      });
    }
    return n;
  })(),
  sg = (() => {
    class n {
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵdir = T({
        type: n,
        selectors: [["", "matSnackBarAction", ""]],
        hostAttrs: [1, "mat-mdc-snack-bar-action", "mdc-snackbar__action"],
      });
    }
    return n;
  })(),
  Md = (() => {
    class n {
      snackBarRef = l(tn);
      data = l(Dd);
      constructor() {}
      action() {
        this.snackBarRef.dismissWithAction();
      }
      get hasAction() {
        return !!this.data.action;
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵcmp = F({
        type: n,
        selectors: [["simple-snack-bar"]],
        hostAttrs: [1, "mat-mdc-simple-snack-bar"],
        exportAs: ["matSnackBar"],
        decls: 3,
        vars: 2,
        consts: [["matSnackBarLabel", ""], ["matSnackBarActions", ""], [
          "mat-button",
          "",
          "matSnackBarAction",
          "",
          3,
          "click",
        ]],
        template: function (t, r) {
          t & 1 && (C(0, "div", 0), Ve(1), I(), te(2, tg, 3, 1, "div", 1)),
            t & 2 && (O(),
              Pt(
                " ",
                r.data.message,
                `
`,
              ),
              O(),
              oe(r.hasAction ? 2 : -1));
        },
        dependencies: [ur, og, ag, sg],
        styles: [".mat-mdc-simple-snack-bar{display:flex}"],
        encapsulation: 2,
        changeDetection: 0,
      });
    }
    return n;
  })(),
  cg = {
    snackBarState: fn("state", [
      gi("void, hidden", yt({ transform: "scale(0.8)", opacity: 0 })),
      gi("visible", yt({ transform: "scale(1)", opacity: 1 })),
      bi("* => visible", pi("150ms cubic-bezier(0, 0, 0.2, 1)")),
      bi(
        "* => void, * => hidden",
        pi("75ms cubic-bezier(0.4, 0.0, 1, 1)", yt({ opacity: 0 })),
      ),
    ]),
  },
  lg = (() => {
    class n extends ni {
      _ngZone = l(x);
      _elementRef = l(N);
      _changeDetectorRef = l(Ce);
      _platform = l(q);
      snackBarConfig = l(ri);
      _document = l(A);
      _trackedModals = new Set();
      _announceDelay = 150;
      _announceTimeoutId;
      _destroyed = !1;
      _portalOutlet;
      _onAnnounce = new w();
      _onExit = new w();
      _onEnter = new w();
      _animationState = "void";
      _live;
      _label;
      _role;
      _liveElementId = l(Te).getId("mat-snack-bar-container-live-");
      constructor() {
        super();
        let e = this.snackBarConfig;
        e.politeness === "assertive" && !e.announcementMessage
          ? this._live = "assertive"
          : e.politeness === "off"
          ? this._live = "off"
          : this._live = "polite",
          this._platform.FIREFOX &&
          (this._live === "polite" && (this._role = "status"),
            this._live === "assertive" && (this._role = "alert"));
      }
      attachComponentPortal(e) {
        this._assertNotAttached();
        let t = this._portalOutlet.attachComponentPortal(e);
        return this._afterPortalAttached(), t;
      }
      attachTemplatePortal(e) {
        this._assertNotAttached();
        let t = this._portalOutlet.attachTemplatePortal(e);
        return this._afterPortalAttached(), t;
      }
      attachDomPortal = (e) => {
        this._assertNotAttached();
        let t = this._portalOutlet.attachDomPortal(e);
        return this._afterPortalAttached(), t;
      };
      onAnimationEnd(e) {
        let { fromState: t, toState: r } = e;
        if (
          (r === "void" && t !== "void" || r === "hidden") &&
          this._completeExit(), r === "visible"
        ) {
          let o = this._onEnter;
          this._ngZone.run(() => {
            o.next(), o.complete();
          });
        }
      }
      enter() {
        this._destroyed ||
          (this._animationState = "visible",
            this._changeDetectorRef.markForCheck(),
            this._changeDetectorRef.detectChanges(),
            this._screenReaderAnnounce());
      }
      exit() {
        return this._ngZone.run(() => {
          this._animationState = "hidden",
            this._changeDetectorRef.markForCheck(),
            this._elementRef.nativeElement.setAttribute("mat-exit", ""),
            clearTimeout(this._announceTimeoutId);
        }),
          this._onExit;
      }
      ngOnDestroy() {
        this._destroyed = !0, this._clearFromModals(), this._completeExit();
      }
      _completeExit() {
        queueMicrotask(() => {
          this._onExit.next(), this._onExit.complete();
        });
      }
      _afterPortalAttached() {
        let e = this._elementRef.nativeElement,
          t = this.snackBarConfig.panelClass;
        t &&
        (Array.isArray(t)
          ? t.forEach((a) => e.classList.add(a))
          : e.classList.add(t)), this._exposeToModals();
        let r = this._label.nativeElement, o = "mdc-snackbar__label";
        r.classList.toggle(o, !r.querySelector(`.${o}`));
      }
      _exposeToModals() {
        let e = this._liveElementId,
          t = this._document.querySelectorAll(
            'body > .cdk-overlay-container [aria-modal="true"]',
          );
        for (let r = 0; r < t.length; r++) {
          let o = t[r], a = o.getAttribute("aria-owns");
          this._trackedModals.add(o),
            a
              ? a.indexOf(e) === -1 && o.setAttribute("aria-owns", a + " " + e)
              : o.setAttribute("aria-owns", e);
        }
      }
      _clearFromModals() {
        this._trackedModals.forEach((e) => {
          let t = e.getAttribute("aria-owns");
          if (t) {
            let r = t.replace(this._liveElementId, "").trim();
            r.length > 0
              ? e.setAttribute("aria-owns", r)
              : e.removeAttribute("aria-owns");
          }
        }), this._trackedModals.clear();
      }
      _assertNotAttached() {
        this._portalOutlet.hasAttached();
      }
      _screenReaderAnnounce() {
        this._announceTimeoutId || this._ngZone.runOutsideAngular(() => {
          this._announceTimeoutId = setTimeout(() => {
            let e = this._elementRef.nativeElement.querySelector(
                "[aria-hidden]",
              ),
              t = this._elementRef.nativeElement.querySelector("[aria-live]");
            if (e && t) {
              let r = null;
              this._platform.isBrowser &&
              document.activeElement instanceof HTMLElement &&
              e.contains(document.activeElement) &&
              (r = document.activeElement),
                e.removeAttribute("aria-hidden"),
                t.appendChild(e),
                r?.focus(),
                this._onAnnounce.next(),
                this._onAnnounce.complete();
            }
          }, this._announceDelay);
        });
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵcmp = F({
        type: n,
        selectors: [["mat-snack-bar-container"]],
        viewQuery: function (t, r) {
          if (t & 1 && (ne(Ma, 7), ne(ig, 7)), t & 2) {
            let o;
            W(o = G()) && (r._portalOutlet = o.first),
              W(o = G()) && (r._label = o.first);
          }
        },
        hostAttrs: [1, "mdc-snackbar", "mat-mdc-snack-bar-container"],
        hostVars: 1,
        hostBindings: function (t, r) {
          t & 1 && ds("@state.done", function (a) {
            return r.onAnimationEnd(a);
          }), t & 2 && ls("@state", r._animationState);
        },
        features: [ce],
        decls: 6,
        vars: 3,
        consts: [
          ["label", ""],
          [1, "mdc-snackbar__surface", "mat-mdc-snackbar-surface"],
          [1, "mat-mdc-snack-bar-label"],
          ["aria-hidden", "true"],
          ["cdkPortalOutlet", ""],
        ],
        template: function (t, r) {
          t & 1 &&
          (C(0, "div", 1)(1, "div", 2, 0)(3, "div", 3),
            te(4, ng, 0, 0, "ng-template", 4),
            I(),
            U(5, "div"),
            I()()),
            t & 2 &&
            (O(5),
              ie("aria-live", r._live)("role", r._role)(
                "id",
                r._liveElementId,
              ));
        },
        dependencies: [Ma],
        styles: [
          ".mat-mdc-snack-bar-container{display:flex;align-items:center;justify-content:center;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);margin:8px}.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container{width:100vw}.mat-mdc-snackbar-surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;padding-left:0;padding-right:8px}[dir=rtl] .mat-mdc-snackbar-surface{padding-right:0;padding-left:8px}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{min-width:344px;max-width:672px}.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface{width:100%;min-width:0}@media(forced-colors: active){.mat-mdc-snackbar-surface{outline:solid 1px}}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{color:var(--mdc-snackbar-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mdc-snackbar-container-shape, var(--mat-sys-corner-extra-small));background-color:var(--mdc-snackbar-container-color, var(--mat-sys-inverse-surface))}.mdc-snackbar__label{width:100%;flex-grow:1;box-sizing:border-box;margin:0;padding:14px 8px 14px 16px}[dir=rtl] .mdc-snackbar__label{padding-left:8px;padding-right:16px}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-family:var(--mdc-snackbar-supporting-text-font, var(--mat-sys-body-medium-font));font-size:var(--mdc-snackbar-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mdc-snackbar-supporting-text-weight, var(--mat-sys-body-medium-weight));line-height:var(--mdc-snackbar-supporting-text-line-height, var(--mat-sys-body-medium-line-height))}.mat-mdc-snack-bar-actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed{color:var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary))}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){--mat-text-button-state-layer-color:currentColor;--mat-text-button-ripple-color:currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}",
        ],
        encapsulation: 2,
        data: { animation: [cg.snackBarState] },
      });
    }
    return n;
  })();
function dg() {
  return new ri();
}
var ug = new p("mat-snack-bar-default-options", {
    providedIn: "root",
    factory: dg,
  }),
  Va = (() => {
    class n {
      _overlay = l(en);
      _live = l(vl);
      _injector = l($);
      _breakpointObserver = l(ir);
      _parentSnackBar = l(n, { optional: !0, skipSelf: !0 });
      _defaultConfig = l(ug);
      _snackBarRefAtThisLevel = null;
      simpleSnackBarComponent = Md;
      snackBarContainerComponent = lg;
      handsetCssClass = "mat-mdc-snack-bar-handset";
      get _openedSnackBarRef() {
        let e = this._parentSnackBar;
        return e ? e._openedSnackBarRef : this._snackBarRefAtThisLevel;
      }
      set _openedSnackBarRef(e) {
        this._parentSnackBar
          ? this._parentSnackBar._openedSnackBarRef = e
          : this._snackBarRefAtThisLevel = e;
      }
      constructor() {}
      openFromComponent(e, t) {
        return this._attach(e, t);
      }
      openFromTemplate(e, t) {
        return this._attach(e, t);
      }
      open(e, t = "", r) {
        let o = m(m({}, this._defaultConfig), r);
        return o.data = { message: e, action: t },
          o.announcementMessage === e && (o.announcementMessage = void 0),
          this.openFromComponent(this.simpleSnackBarComponent, o);
      }
      dismiss() {
        this._openedSnackBarRef && this._openedSnackBarRef.dismiss();
      }
      ngOnDestroy() {
        this._snackBarRefAtThisLevel && this._snackBarRefAtThisLevel.dismiss();
      }
      _attachSnackBarContainer(e, t) {
        let r = t && t.viewContainerRef && t.viewContainerRef.injector,
          o = $.create({
            parent: r || this._injector,
            providers: [{ provide: ri, useValue: t }],
          }),
          a = new ti(this.snackBarContainerComponent, t.viewContainerRef, o),
          s = e.attach(a);
        return s.instance.snackBarConfig = t, s.instance;
      }
      _attach(e, t) {
        let r = m(m(m({}, new ri()), this._defaultConfig), t),
          o = this._createOverlay(r),
          a = this._attachSnackBarContainer(o, r),
          s = new tn(a, o);
        if (e instanceof hi) {
          let c = new ii(e, null, { $implicit: r.data, snackBarRef: s });
          s.instance = a.attachTemplatePortal(c);
        } else {
          let c = this._createInjector(r, s),
            d = new ti(e, void 0, c),
            u = a.attachComponentPortal(d);
          s.instance = u.instance;
        }
        return this._breakpointObserver.observe(fl.HandsetPortrait).pipe(
          se(o.detachments()),
        ).subscribe((c) => {
          o.overlayElement.classList.toggle(this.handsetCssClass, c.matches);
        }),
          r.announcementMessage && a._onAnnounce.subscribe(() => {
            this._live.announce(r.announcementMessage, r.politeness);
          }),
          this._animateSnackBar(s, r),
          this._openedSnackBarRef = s,
          this._openedSnackBarRef;
      }
      _animateSnackBar(e, t) {
        e.afterDismissed().subscribe(() => {
          this._openedSnackBarRef == e && (this._openedSnackBarRef = null),
            t.announcementMessage && this._live.clear();
        }),
          this._openedSnackBarRef
            ? (this._openedSnackBarRef.afterDismissed().subscribe(() => {
              e.containerInstance.enter();
            }),
              this._openedSnackBarRef.dismiss())
            : e.containerInstance.enter(),
          t.duration && t.duration > 0 &&
          e.afterOpened().subscribe(() => e._dismissAfter(t.duration));
      }
      _createOverlay(e) {
        let t = new Ji();
        t.direction = e.direction;
        let r = this._overlay.position().global(),
          o = e.direction === "rtl",
          a = e.horizontalPosition === "left" ||
            e.horizontalPosition === "start" && !o ||
            e.horizontalPosition === "end" && o,
          s = !a && e.horizontalPosition !== "center";
        return a ? r.left("0") : s ? r.right("0") : r.centerHorizontally(),
          e.verticalPosition === "top" ? r.top("0") : r.bottom("0"),
          t.positionStrategy = r,
          this._overlay.create(t);
      }
      _createInjector(e, t) {
        let r = e && e.viewContainerRef && e.viewContainerRef.injector;
        return $.create({
          parent: r || this._injector,
          providers: [{ provide: tn, useValue: t }, {
            provide: Dd,
            useValue: e.data,
          }],
        });
      }
      static ɵfac = function (t) {
        return new (t || n)();
      };
      static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
    }
    return n;
  })();
var Id = (() => {
  class n {
    static ɵfac = function (t) {
      return new (t || n)();
    };
    static ɵmod = M({ type: n });
    static ɵinj = D({ providers: [Va], imports: [Ed, br, mr, X, Md, X] });
  }
  return n;
})();
var _r = class n {
  constructor(i) {
    this.http = i;
  }
  apiUrl = "/api/todos";
  getTodos() {
    return this.http.get(this.apiUrl);
  }
  addTodo(i) {
    return this.http.post(this.apiUrl, i);
  }
  updateTodo(i) {
    return this.http.put(`${this.apiUrl}/${i.id}`, i);
  }
  deleteTodo(i) {
    return this.http.delete(`${this.apiUrl}/${i}`);
  }
  static ɵfac = function (e) {
    return new (e || n)(S(xi));
  };
  static ɵprov = f({ token: n, factory: n.ɵfac, providedIn: "root" });
};
function pg(n, i) {
  if (n & 1) {
    let e = rt();
    C(0, "div", 6)(1, "mat-checkbox", 7),
      zr("ngModelChange", function (r) {
        let o = ve(e).$implicit;
        return Br(o.completed, r) || (o.completed = r), _e(r);
      }),
      J("change", function () {
        let r = ve(e).$implicit, o = de();
        return _e(o.updateTodo(r));
      }),
      C(2, "span"),
      Ve(3),
      I()(),
      C(4, "button", 8),
      J("click", function () {
        let r = ve(e).$implicit, o = de();
        return _e(o.deleteTodo(r.id));
      }),
      C(5, "mat-icon"),
      Ve(6, "delete"),
      I()()();
  }
  if (n & 2) {
    let e = i.$implicit;
    O(),
      jr("ngModel", e.completed),
      O(),
      j("completed", e.completed),
      O(),
      Pt(" ", e.item, " ");
  }
}
var yr = class n {
  constructor(i, e) {
    this.todoService = i;
    this.snackBar = e;
  }
  todos = [];
  newTodoTitle = "";
  ngOnInit() {
    this.loadTodos();
  }
  loadTodos() {
    console.log("Loading todos"),
      this.todoService.getTodos().subscribe({
        next: (i) => {
          this.todos = i, console.log(`Loaded ${i.length} todos`);
        },
        error: (i) => {
          this.showError("Failed to load todos");
        },
      });
  }
  addTodo() {
    if (!this.newTodoTitle.trim()) return;
    let i = { item: this.newTodoTitle, completed: !1 };
    this.todoService.addTodo(i).subscribe({
      next: (e) => {
        this.todos.push(e),
          this.newTodoTitle = "",
          this.showSuccess("Todo added successfully");
      },
      error: (e) => {
        this.showError("Failed to add todo");
      },
    });
  }
  updateTodo(i) {
    this.todoService.updateTodo(i).subscribe({
      next: () => {
        this.showSuccess("Todo updated successfully");
      },
      error: (e) => {
        this.showError("Failed to update todo");
      },
    });
  }
  deleteTodo(i) {
    this.todoService.deleteTodo(i).subscribe({
      next: () => {
        this.todos = this.todos.filter((e) => e.id !== i),
          this.showSuccess("Todo deleted successfully");
      },
      error: (e) => {
        this.showError("Failed to delete todo");
      },
    });
  }
  showSuccess(i) {
    this.snackBar.open(i, "Close", {
      duration: 3e3,
      horizontalPosition: "end",
      verticalPosition: "top",
    });
  }
  showError(i) {
    this.snackBar.open(i, "Close", {
      duration: 3e3,
      horizontalPosition: "end",
      verticalPosition: "top",
      panelClass: ["error-snackbar"],
    });
  }
  static ɵfac = function (e) {
    return new (e || n)(Y(_r), Y(Va));
  };
  static ɵcmp = F({
    type: n,
    selectors: [["app-todo"]],
    decls: 13,
    vars: 2,
    consts: [
      [1, "todo-container"],
      [1, "add-todo"],
      [
        "matInput",
        "",
        "placeholder",
        "Add new todo",
        3,
        "ngModelChange",
        "keyup.enter",
        "ngModel",
      ],
      ["mat-raised-button", "", "color", "primary", 3, "click"],
      [1, "todo-list"],
      ["class", "todo-item", 4, "ngFor", "ngForOf"],
      [1, "todo-item"],
      [3, "ngModelChange", "change", "ngModel"],
      ["mat-icon-button", "", "color", "warn", 3, "click"],
    ],
    template: function (e, t) {
      e & 1 &&
      (C(0, "div", 0)(1, "mat-card")(2, "mat-card-header")(3, "mat-card-title"),
        Ve(4, "Todo List"),
        I()(),
        C(5, "mat-card-content")(6, "div", 1)(7, "mat-form-field")(
          8,
          "input",
          2,
        ),
        zr("ngModelChange", function (o) {
          return Br(t.newTodoTitle, o) || (t.newTodoTitle = o), o;
        }),
        J("keyup.enter", function () {
          return t.addTodo();
        }),
        I()(),
        C(9, "button", 3),
        J("click", function () {
          return t.addTodo();
        }),
        Ve(10, " Add "),
        I()(),
        C(11, "div", 4),
        te(12, pg, 7, 4, "div", 5),
        I()()()()),
        e & 2 &&
        (O(8), jr("ngModel", t.newTodoTitle), O(4), le("ngForOf", t.todos));
    },
    dependencies: [
      Wr,
      _s,
      cl,
      Qn,
      tl,
      aa,
      Vl,
      Fl,
      Nl,
      Ll,
      Pl,
      yn,
      ed,
      Jl,
      Ql,
      mr,
      ur,
      id,
      od,
      hr,
      md,
      ud,
      Id,
    ],
    styles: [
      ".todo-container[_ngcontent-%COMP%]{max-width:800px;margin:2rem auto;padding:0 1rem}.todo-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{margin-bottom:1rem}.todo-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .add-todo[_ngcontent-%COMP%]{display:flex;gap:1rem;align-items:center;margin-bottom:2rem}.todo-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .add-todo[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{flex:1}.todo-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .todo-list[_ngcontent-%COMP%]   .todo-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:.5rem 0;border-bottom:1px solid rgba(0,0,0,.12)}.todo-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .todo-list[_ngcontent-%COMP%]   .todo-item[_ngcontent-%COMP%]:last-child{border-bottom:none}.todo-container[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .todo-list[_ngcontent-%COMP%]   .todo-item[_ngcontent-%COMP%]   .completed[_ngcontent-%COMP%]{text-decoration:line-through;color:#0000008a}",
    ],
  });
};
var xr = class n {
  title = "angular_todo";
  static ɵfac = function (e) {
    return new (e || n)();
  };
  static ɵcmp = F({
    type: n,
    selectors: [["app-root"]],
    decls: 2,
    vars: 0,
    template: function (e, t) {
      e & 1 && U(0, "app-todo")(1, "router-outlet");
    },
    dependencies: [Ho, yn, yr],
    encapsulation: 2,
  });
};
qs(xr, Pc).catch((n) => console.error(n));
