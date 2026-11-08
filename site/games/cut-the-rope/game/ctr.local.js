/**
 * @format
 * @Author: 49.Jz
 * @Date: 2026-08-24 11:28:07
 * @Last Modified by:   49.Jz
 * @Last Modified time: 2026-08-24 16:10:03
 */

/** @format */

(function (si, ab) {
  function Oi() {
    return Ya.eo(this, "");
  }
  function Zb() {
    return (w.box - 1) * 25 + w.level;
  }
  function Pi(a) {
    function b(c, d, e, f) {
      return c | (d << 8) | (e << 16) | (f << 24);
    }
    switch (a) {
      case 0:
        return b(68, 88, 84, 49);
      case 1:
        return b(68, 88, 84, 51);
      case 2:
        return b(68, 88, 84, 53);
      case 3:
        return b(67, 67, 120, 89);
      case 4:
        return b(120, 71, 120, 82);
      case 5:
        return b(120, 71, 66, 82);
      case 6:
        return b(65, 71, 66, 82);
      case 7:
        return b(65, 50, 88, 89);
      case 8:
        return b(65, 84, 73, 50);
      case 9:
        return b(65, 84, 73, 49);
      case 10:
        return b(69, 84, 67, 49);
      default:
        return 0;
    }
  }
  function Qi(a) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
        return 8;
      case 0:
      case 9:
      case 10:
        return 4;
      default:
        return 0;
    }
  }
  function Ri(a) {
    a = new $b(Ha.Xg(a));
    let b = new ah();
    b.QD = (a.N() << 8) | a.N();
    if (b.QD != 18552) return null;
    b.XR = (a.N() << 8) | a.N();
    b.WR = (a.N() << 8) | a.N();
    b.Hs = (a.N() << 24) | (a.N() << 16) | (a.N() << 8) | a.N();
    b.UR = (a.N() << 8) | a.N();
    b.Lk = (a.N() << 8) | a.N();
    b.Hk = (a.N() << 8) | a.N();
    b.pf = a.N();
    b.Qe = a.N();
    b.ue = a.N();
    b.VR = (a.N() << 8) | a.N();
    b.ZR = (a.N() << 24) | (a.N() << 16) | (a.N() << 8) | a.N();
    b.Js = (a.N() << 24) | (a.N() << 16) | (a.N() << 8) | a.N();
    b.Ks = (a.N() << 24) | (a.N() << 16) | (a.N() << 8) | a.N();
    var c = new Pb();
    c.Ik = (a.N() << 16) | (a.N() << 8) | a.N();
    c.Kk = (a.N() << 16) | (a.N() << 8) | a.N();
    c.Cd = (a.N() << 8) | a.N();
    b.te = c;
    c = new Pb();
    c.Ik = (a.N() << 16) | (a.N() << 8) | a.N();
    c.Kk = (a.N() << 16) | (a.N() << 8) | a.N();
    c.Cd = (a.N() << 8) | a.N();
    b.be = c;
    c = new Pb();
    c.Ik = (a.N() << 16) | (a.N() << 8) | a.N();
    c.Kk = (a.N() << 16) | (a.N() << 8) | a.N();
    c.Cd = (a.N() << 8) | a.N();
    b.pd = c;
    c = new Pb();
    c.Ik = (a.N() << 16) | (a.N() << 8) | a.N();
    c.Kk = (a.N() << 16) | (a.N() << 8) | a.N();
    c.Cd = (a.N() << 8) | a.N();
    b.ec = c;
    b.bS = (a.N() << 8) | a.N();
    b.aS = (a.N() << 16) | (a.N() << 8) | a.N();
    b.qx[0] = (a.N() << 24) | (a.N() << 16) | (a.N() << 8) | a.N();
    return b;
  }
  function yj() {
    function a(d, e) {
      bh.J[d] = e;
    }
    bh = new lc();
    a("Space", 32);
    a("Space", 32);
    a("Quote", 39);
    a("Comma", 44);
    a("Minus", 45);
    a("Period", 46);
    a("Slash", 47);
    for (var b = 0; b < 10; ) {
      var c = b++;
      a("Digit" + String.fromCodePoint(48 + c), 48 + c);
    }
    a("Semicolon", 59);
    a("Equal", 61);
    a("BracketLeft", 91);
    a("Backslash", 92);
    a("BracketRight", 93);
    a("Backquote", 96);
    for (b = 0; b < 26; )
      ((c = b++), a("Key" + String.fromCodePoint(65 + c), 97 + c));
    for (b = 0; b < 12; ) ((c = b++), a("F" + (c + 1), 121 + c));
    a("ArrowUp", 133);
    a("ArrowLeft", 134);
    a("ArrowRight", 135);
    a("ArrowDown", 136);
    for (b = 0; b < 10; ) ((c = b++), a("EKeyNumpad" + c, 137 + c));
    a("NumpadAdd", 147);
    a("NumpadDecimal", 148);
    a("NumpadMultiply", 149);
    a("NumpadSubtract", 150);
    a("NumpadEqual", 151);
    a("NumpadComma", 152);
    a("NumpadEnter", 153);
    a("NumpadDivide", 154);
    a("NumLock", 155);
    a("Escape", 156);
    a("Backspace", 157);
    a("Tab", 158);
    a("Enter", 159);
    a("ControlLeft", 160);
    a("ControlRight", 161);
    a("ShiftLeft", 162);
    a("ShiftRight", 163);
    a("AltLeft", 164);
    a("AltRight", 165);
    a("PageUp", 166);
    a("PageDown", 167);
    a("Insert", 168);
    a("Delete", 169);
    a("Home", 170);
    a("End", 171);
    a("CapsLock", 172);
    a("Pause", 173);
    a("ScrollLock", 174);
    a("PrintScreen", 175);
  }
  function $c(a, b) {
    return a > 0 ? a < b : -a < b;
  }
  function Wa(a, b, c, d, e) {
    return d + ((a - b) / (c - b)) * (e - d);
  }
  function He(a) {
    return a instanceof Array ? new ad(a) : a.iterator();
  }
  function M(a, b) {
    if (b == null) return null;
    b.Ff == null && (b.Ff = ab.wu++);
    var c;
    a.Pw == null ? (a.Pw = {}) : (c = a.Pw[b.Ff]);
    c == null && ((c = b.bind(a)), (a.Pw[b.Ff] = c));
    return c;
  }
  si.CTR = si.CTR || {};
  var ch = ch || {},
    mc;
  class Si {
    static dS(a) {
      new Ie(a);
    }
  }
  si.CTR.main = Si.dS;
  Si.i = !0;
  class oa {
    constructor(a, b) {
      this.r = new RegExp(a, b.split("u").join(""));
    }
    match(a) {
      this.r.global && (this.r.lastIndex = 0);
      this.r.re = this.r.exec(a);
      this.r.s = a;
      return this.r.re != null;
    }
    Xb(a) {
      if (this.r.re != null && a >= 0 && a < this.r.re.length)
        return this.r.re[a];
      throw 0;
    }
    kS() {
      if (this.r.re == null) throw 1;
      let a = this.r.re.index + this.r.re[0].length;
      return qa.substr(this.r.s, a, this.r.s.length - a);
    }
    jS() {
      if (this.r.re == null) throw 2;
      return { g: this.r.re.index, Qg: this.r.re[0].length };
    }
    iS(a, b) {
      var c;
      c == null && (c = -1);
      if (this.r.global) {
        this.r.lastIndex = b;
        this.r.re = this.r.exec(c < 0 ? a : qa.substr(a, 0, b + c));
        if ((b = this.r.re != null)) this.r.s = a;
        return b;
      }
      if ((c = this.match(c < 0 ? qa.substr(a, b, null) : qa.substr(a, b, c))))
        ((this.r.s = a), (this.r.re.index += b));
      return c;
    }
    map(a, b) {
      let c = 0,
        d = "";
      do {
        if (c >= a.length) break;
        else if (!this.iS(a, c)) {
          d += ra.Ec(qa.substr(a, c, null));
          break;
        }
        let e = this.jS();
        d += ra.Ec(qa.substr(a, c, e.g - c));
        d += ra.Ec(b(this));
        e.Qg == 0
          ? ((d += ra.Ec(qa.substr(a, e.g, 1))), (c = e.g + 1))
          : (c = e.g + e.Qg);
      } while (this.r.global);
      !this.r.global &&
        c > 0 &&
        c < a.length &&
        (d += ra.Ec(qa.substr(a, c, null)));
      return d;
    }
  }
  oa.i = !0;
  Object.assign(oa.prototype, { j: oa });
  class k {
    static HE(a) {
      return bd.SR(a == null ? "null" : "" + a);
    }
    static Nj(a, b) {
      return a + k.HE(b);
    }
    static Ta(a, b, c, d) {
      return ib.create((a == null ? "" : a + ",") + b + "-" + c + "@" + d);
    }
  }
  k.i = !0;
  class ua {
    constructor() {
      this.Os = this.Hx = 0;
      this.CS = !1;
      this.vV = null;
      this.pC = [];
      this.Rw = [];
      this.gy = [];
      this.images = new jb();
      this.uE = null;
      this.zP = new dh();
      this.save = null;
      this.Ap = new cd();
      this.ca = null;
      this.ab = new Je();
      this.window = this.W = null;
      this.CV = new Qb();
      this.zf = new eh();
      ua.instance = this;
    }
    init(a, b) {
      this.config = a;
      this.uE = b;
      ab.console.info(
        "%c" + a.title.toUpperCase() + " %c" + Kd.vI,
        "font-weight:bold;",
        null,
      );
      a.SC &&
        (window.addEventListener("error", M(this, this.Te)),
        window.addEventListener("unhandledrejection", M(this, this.Te)));
      this.Ck = this.yV();
      this.zd = window.navigator.userAgent.indexOf("Web0S") != -1;
      m.Ly(a.kD);
      a.language = m.ai(a.language);
      this.zf.bh = M(this, this.eS);
      this.window = new Ke(a.Av);
      a.kp && this.window.LQ(a.by) && (this.W = new Db());
      this.W == null &&
        (this.window.FQ(a.by), (this.W = new Le()), (a.kp = !1));
      if (this.W != null) {
        this.W.oq(this.window);
        this.window.bg(2, M(this, this.Nx));
        this.window.bg(1, M(this, this.CE));
        this.window.update();
        this.lD();
        this.Ap.version = Kd.VERSION.toString();
        this.Ap.Up = a.Up;
        this.ca = new Dc(this);
        this.Vy();
        this.save = this.Cw();
        var c = this;
        this.rV()
          .then(function (d) {
            d && m.xU();
          })
          .then(function () {
            c.preload();
          });
      }
    }
    BD() {
      let a = window.navigator.userAgent.toLowerCase();
      return new oa(
        "(WebView|(iPhone|iPod|iPad)(?!.*Safari)|Android.*(;wv)|Linux; U; Android)",
        "ig",
      ).match(a);
    }
    preload() {
      function a(f, g, h) {
        let l = b.oO();
        l.name = m.Vi(f);
        b.images.J.hasOwnProperty(f) && b.gy.push(b.images.J[f]);
        b.images.J[f] = l;
        l.load(g, function () {
          if (m.SP().includes(f)) {
            let n = new FileReader();
            n.onload = function (q) {
              m.EU(f, new Ld(q.target.result));
              h(l.data);
            };
            n.onerror = function () {
              throw 3;
            };
            n.readAsArrayBuffer(g);
          } else h(l.data);
        });
      }
      let b = this;
      for (var c = 0; c < m.MAX; ) {
        var d = c++;
        m.XQ(d) && m.$A(d, a);
      }
      m.LC().length > 0 ? this.load(m.LC(), null, M(this, this.yE)) : this.yE();
      if (this.config.uG) {
        let f = window.document.querySelectorAll("meta[data-hash]").item(0)
          .dataset.hash;
        c = window.document.querySelectorAll("script[src]");
        d = null;
        let g = 0,
          h = c.length;
        for (
          ;
          g < h &&
          ((d = c.item(g++)), !new oa(this.config.title, "i").match(d.src));
        );
        if (d != null) {
          var e = new XMLHttpRequest();
          e.open("GET", d.src);
          e.responseType = "arraybuffer";
          e.onreadystatechange = function () {
            if (e.readyState == 4 && e.status == 200)
              try {
                window.crypto.subtle
                  .digest("SHA-256", e.response)
                  .then(function (l) {
                    l = btoa(
                      String.fromCharCode.apply(null, new Uint8Array(l)),
                    );
                    b.vV = l != f;
                  })
                  .catch(function () {});
              } catch (l) {}
          };
          e.send();
        }
      }
    }
    yE() {
      let a = this;
      nc.delay(function () {
        a.zf.start();
        a.uE(a);
      }, 1);
    }
    Hm(a) {
      a = Object.create(a.prototype);
      a.system = this;
      a.caller = a;
      return this.load(a.qc(), null, void 0);
    }
    load(a, b, c) {
      let d = [],
        e = [],
        f = 0,
        g = 0;
      for (; g < a.length; ) {
        var h = a[g];
        ++g;
        if (m.Tw(h) && (m.Tr() == null || m.tC() == null)) continue;
        f += 1;
        m.GS(h, function (l) {
          --f;
          b != null && b(l);
          c != null && f == 0 && c();
        });
        h = m.Vi(h);
        this.Ap.load(h) && e.push(h);
      }
      for (; d.length > 0; ) this.Ap.JT(d.pop());
      return new fh(this.Ap, e);
    }
    GC(a) {
      return this.images.J[a];
    }
    oO() {
      return new Me(this.config.jD, this.config.kp);
    }
    HO(a) {
      this.GC(a).mz();
      this.images.remove(a);
      m.rt(a);
    }
    IO() {
      let a = 0,
        b = this.gy;
      for (; a < b.length; ) b[a++].mz();
      this.gy = [];
    }
    createTexture(a, b, c) {
      function d(n) {
        if (n.b[0] == 84 && n.b[1] == 80 && n.b[2] == 83)
          return ((n = new Md().aF(n)), new oc(gh.om(n), n.Sm.scale));
        if (n.b[0] == 66 && n.b[1] == 77 && n.b[2] == 70)
          return ((n = new Ne().mn(n)), new oc(Oe.om(n), 1, Oe.yC(n)));
        throw 4;
      }
      c == null && (c = !1);
      b == null && (b = 0);
      for (var e = m.Vi(a), f = 0, g = this.W.kQ(); f < g.length; ) {
        var h = g[f];
        ++f;
        if (h.name == e) return h;
      }
      f = this.GC(a);
      g = m.XP(a);
      let l = null;
      g == null &&
        ((h = m.pm(a, "dat")),
        h != -1
          ? ((g = new Ld(m.data.J[h])), g.data == null && (g = null))
          : ((h = m.pm(a, "dat", !0)), h != -1 && (g = new Ld(m.data.J[h]))));
      if (g == null) {
        h = m.pm(a, "tps");
        if (h != -1)
          try {
            l = d(m.Si(h));
          } catch (n) {}
        l == null &&
          ((h = m.pm(a, "json")),
          h != -1 &&
            ((h = m.Ab(h)),
            (h = new Md().RT(h)),
            (l = new oc(gh.om(h), h.Sm.scale))));
        l == null &&
          ((h = m.pm(a, "dat")),
          h != -1 &&
            ((h = m.Si(h)),
            (h = new Md().aF(h)),
            (l = new oc(gh.om(h), h.Sm.scale))));
        l == null &&
          ((h = m.pm(a, "fnt")),
          h != -1 &&
            ((h = m.Si(h)),
            (h = new Ne().mn(h)),
            (l = new oc(Oe.om(h), 1, Oe.yC(h)))));
      }
      h = null;
      if (g == null) h = this.W.createTexture(f, b, l, e);
      else if (
        ((g = g.dr),
        g.length == 1 ||
          Ma.lk(g, function (n) {
            return n.name != null;
          }))
      )
        for (
          h = this.W.createTexture(f, b, d(g[0].data), e), b = 1, e = g.length;
          b < e;
        )
          ((f = b++), this.W.QB(h, d(g[f].data), g[f].name));
      else
        for (
          h = this.W.createTexture(f, b, null, e), b = 0, e = g.length;
          b < e;
        )
          this.W.QB(h, d(g[b++].data), null);
      c && (h.vf = 1 / m.TP(a));
      return h;
    }
    eS(a) {
      this.window.update();
      if (this.config.lC) {
        let b = this.CV,
          c = M(this, this.update);
        b.elapsedTime += a;
        b.xi += a * b.fz;
        b.xi > 0.25 && (b.xi = 0.25);
        for (; b.xi >= Qb.zl; ) (c(Qb.zl), (b.xi -= Qb.zl));
        this.jd(b.xi / Qb.zl);
      } else (this.update(a), this.jd(1));
      for (this.zP.update(a); this.pC.length > 0; ) this.pC.pop()();
    }
    update(a) {
      let b = 0,
        c = this.Rw;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        d != null && d.state.update(a);
      }
      this.W.kj();
      this.W.pn();
      this.qR();
      this.ca.update(a);
      this.W.Ki();
    }
    jd(a) {
      this.W.kj() &&
        (this.W.pn(), this.W.clear(), this.ca.jd(a), this.W.pn(), this.W.Ki());
    }
    qR() {
      if (this.config.KD) {
        var a = this.window;
        a = a.Qc.x / a.Qc.y;
        var b = this.window.Qc,
          c = b.x;
        b = b.y;
        a > 2.5
          ? ((a = (b / c) * 2.5), (c = (1 - a) / 2), this.W.il(c, 0, c + a, 1))
          : a < 0.4 &&
            ((a = c / b / 0.4), (c = (1 - a) / 2), this.W.il(0, c, 1, c + a));
      }
    }
    lD() {
      if (this.config.audio && Q.tD())
        if (this.ab != null && this.ab instanceof dd) {
          var a = this.ab.uh,
            b = this.ab.names;
          this.ab.G();
          Q.init();
          this.ab = new dd();
          this.ab.uh = a;
          this.ab.names = b;
        } else {
          a = this.config.kB;
          var c = a != null ? a : Q.FO();
          Ma.lk(m.Tr(), function (f) {
            return f == c;
          }) && m.tU(c);
          b = m.dQ();
          a = [];
          for (var d = 0; d < b.length; ) {
            let f = b[d];
            ++d;
            new oa("audio", "").match(f) && a.push(f);
          }
          if (a.length != 0) {
            Q.init();
            Q.tD() && (this.ab = new dd());
            var e = this;
            b = function (f, g, h) {
              Pe.ZC(g)
                ? ((f = Pe.IP(g)), (g = Pe.XT(g)), e.ab.ot(f, g, h))
                : e.ab.nt(f, g, m.Og(f), h);
            };
            for (d = 0; d < a.length; ) m.$A(m.Lg(a[d++]), b);
          }
        }
    }
    Cw() {
      return new Qe();
    }
    uw(a) {
      return this.Rw[a];
    }
    gv(a) {
      return (this.Rw[a.sw()] = a);
    }
    rQ() {
      let a = this.uw(1);
      return a != null ? a : this.gv(new Re(this.window.canvas));
    }
    sQ() {
      return this.rQ().state;
    }
    qQ() {
      let a = this.uw(0);
      return a != null ? a : this.gv(new Se());
    }
    Rf() {
      return this.qQ().state;
    }
    Gw() {
      let a = this.uw(3);
      return a != null ? a : this.gv(new Te(this.window.canvas));
    }
    Yd() {
      return this.Gw().state;
    }
    PB(a) {
      return new Nd(a);
    }
    Vy() {
      let a = window.document.createElement("div");
      window.document.body.appendChild(a);
      a.innerText = "v" + Kd.VERSION.toString();
      let b = a.style;
      b.fontFamily = "monospace";
      b.fontSize = "1.25em";
      b.color = "#fff";
      b.position = "fixed";
      b.bottom = "1em";
      b.left = "1em";
      b.whiteSpace = "pre";
      b.textShadow = "1px 1px 1px #000";
      b.userSelect = "none";
      b.setProperty("-webkit-user-select", "none");
      setTimeout(function () {
        window.document.body.removeChild(a);
      }, 1e4);
    }
    CE() {
      this.ab.zj(1, 0);
    }
    Nx() {
      this.ab.zj(0, 0);
    }
    yV() {
      try {
        return navigator.userAgentData.mobile;
      } catch (a) {
        return new oa(
          "Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini",
          "i",
        ).match(ab.navigator.userAgent) ||
          typeof window.orientation !== "undefined" ||
          "onTouchstart" in window ||
          navigator.maxTouchPoints > 0
          ? !0
          : window.matchMedia("(any-pointer:coarse)").matches;
      }
    }
    rm() {
      let a = new lc();
      new oa("[?&]+([^=&]+)=?([^&]*)", "gi").map(
        ab.location.href,
        function (b) {
          let c = b.Xb(1);
          b = b.Xb(2);
          a.J[c] = b;
          return null;
        },
      );
      return a;
    }
    reload() {
      window.location.reload();
    }
    rV() {
      return this.config.lB
        ? new Promise(function (a) {
            let b = new Image();
            b.onerror = function () {
              b.onload = null;
              b.onerror = null;
              a(!1);
            };
            b.onload = function () {
              b.onload = null;
              b.onerror = null;
              a(!0);
            };
            b.src =
              "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=";
          })
        : Promise.resolve(!1);
    }
    UP() {
      return ab.navigator.language;
    }
    showNotification(a) {
      let b = this;
      if (this.CS)
        window.document.visibilityState == "visible" &&
          new Notification(this.config.title, { body: a });
      else {
        let c = window.document.createElement("div");
        c.setAttribute(
          "style",
          "position:fixed;top:" +
            this.Os +
            "px;right:0;background-color:white;z-index:1000",
        );
        this.Os += 20;
        this.Hx++;
        c.innerHTML = a;
        window.setTimeout(function () {
          c.parentNode.removeChild(c);
          b.Hx--;
          b.Hx == 0 && (b.Os = 0);
        }, 3e3);
        window.document.body.appendChild(c);
      }
    }
    Te(a) {
      a.type != "unhandledrejection" &&
        (a != null ? a.error : null) != null &&
        a.error.stack != null &&
        ra.Ec(a.error.stack);
      this.zf != null && this.zf.stop();
      ab.console.log("" + this.config.title + " CRASHED \ud83d\udc80");
      window.removeEventListener("error", M(this, this.Te));
      window.removeEventListener("unhandledrejection", M(this, this.Te));
    }
  }
  ua.i = !0;
  Object.assign(ua.prototype, { j: ua });
  class H extends ua {
    constructor(a) {
      super();
      a = new hh(
        "CTR",
        !0,
        a != null ? a : "en",
        null,
        null,
        null,
        null,
        { alpha: !1, depth: !1, antialias: !0, stencil: !0 },
        !1,
        null,
        !0,
        null,
        null,
        null,
        null,
        !1,
        null,
        null,
        null,
        null,
        !1,
        null,
      );
      let b = this.rm();
      Object.prototype.hasOwnProperty.call(b.J, "xmas") && (H.td = !0);
      this.init(a, M(this, this.bh));
    }
    Te(a) {
      super.Te(a);
      this.zd && this.reload();
    }
    Cw() {
      return new z(this.PB(this.config.title));
    }
    preload() {
      super.preload();
      H.gt = !this.BD() && !this.zd;
      m.Ly(2);
      this.Ck && this.window.xk() <= 2 && this.window.Qc.x < 1e3 && m.Ly(1);
    }
    eQ() {
      return this.zd
        ? this.window.Qc.x > 5e3
          ? 4
          : this.window.Qc.x > 3e3
            ? 2
            : 1
        : this.Ck && this.window.xk() > 2
          ? 2
          : 1;
    }
    bh() {
      m.BF("dds");
      window.document.body.addEventListener(
        "touchcancel",
        function (b) {
          b.preventDefault();
        },
        { passive: !1 },
      );
      window.document.body.addEventListener(
        "touchend",
        function (b) {
          b.preventDefault();
        },
        { passive: !1 },
      );
      window.document.body.addEventListener(
        "touchstart",
        function (b) {
          b.preventDefault();
        },
        { passive: !1 },
      );
      this.W.wU(new F(0, 0, 0, 1));
      Qb.zl = 0.016;
      this.W.GO();
      this.window.KU(this.eQ());
      this.Gw().LF(5);
      this.config.kp
        ? (this.W.sd(new ed()),
          this.W.sd(new Ue()),
          this.W.sd(new Ve()),
          this.W.sd(new We()),
          this.W.sd(new Xe()),
          this.W.sd(new Ye()),
          this.W.sd(new Ze()),
          this.W.sd(new $e()))
        : (this.W.sd(new af()),
          this.W.sd(new bf()),
          this.W.sd(new cf()),
          this.W.sd(new df()),
          this.W.sd(new ef()),
          this.W.sd(new ff()),
          this.W.sd(new gf()),
          this.W.sd(new hf()),
          this.W.sd(new jf()));
      H.Zf = H.td ? m.oH : m.nH;
      H.km = H.td ? m.mH : m.lH;
      let a = this;
      this.save.load(function () {
        if (z.language == null && (z.ei(a.config.language), a.zd)) {
          let b = qa.substr(a.UP().toLowerCase(), 0, 2);
          new oa("(" + kf.join("|") + ")", "").match(b) && z.ei(b);
        }
        a.ai(z.language);
        a.iG();
      });
    }
    ai(a) {
      m.ai(a);
    }
    iG() {
      var a = fd;
      this.ca.Ka.sceneToLoad = db;
      Q.bg("EContextBroken", M(this, this.lD));
      this.Lv = -1;
      let b = this;
      Q.bg("EContextResumed", function () {
        b.ab.Mc(b.Lv) || b.ab.play(b.Lv, !0, !0);
      });
      var c = this.rm();
      this.gC = Object.prototype.hasOwnProperty.call(c.J, "fast");
      c = this.rm().J.lang;
      c != null && (z.ei(c), m.ai(z.language));
      var d = this.rm().J.unlock;
      if (d != null) {
        c = !1;
        d == "" && ((d = "17-25"), (c = !0));
        var e = new oa("(\\d+)-(\\d+)", "");
        if (
          e.match(d) &&
          ((d = ra.parseInt(e.Xb(1))),
          (e = ra.parseInt(e.Xb(2))),
          d >= 1 && d <= 17 && e >= 1 && e <= 25)
        ) {
          this.save.reset();
          z.flush();
          let f = 0;
          for (; f < d; ) {
            let g = f++;
            z.locked[g] = !1;
            let h = 0,
              l = e;
            for (; h < l; ) {
              let n = h++;
              z.nf[g][n] = 3;
              z.ae[g][n] = !0;
            }
            z.nf[g][e - 1] = 2;
          }
          c && (z.Ri = !0);
          z.flush();
          this.showNotification("Unlocked!");
          ab.location.href =
            "" +
            ab.location.protocol +
            "//" +
            ab.location.host +
            ab.location.pathname;
        }
      }
      c = this.rm().J.warp;
      c != null
        ? ((a = new oa("(\\d+)-(\\d+)", "")),
          a.match(c) &&
            ((c = ra.parseInt(a.Xb(1))),
            (a = ra.parseInt(a.Xb(2))),
            c >= 1 &&
              c <= 17 &&
              a >= 1 &&
              a <= 25 &&
              (w.jg(c),
              w.bi(a),
              a <= 5 ? w.Jd(1) : a > 5 && a < 10 ? w.Jd(2) : w.Jd(3),
              this.ca.rh(ja))))
        : (this.gC && (a = db), this.ca.rh(a));
    }
  }
  H.i = !0;
  H.u = ua;
  Object.assign(H.prototype, { j: H });
  class Ie extends H {
    constructor() {
      N.init();
      super(N.OP());
      H.Dj = N.hasFeature("pause");
      H.Bn = N.hasFeature("home");
      H.Cj = N.hasFeature("audio");
      H.bG = N.hasFeature("score");
      H.td = N.hasFeature("xmas") == 1;
      H.qf = N.ly;
      H.Ye = N.ly;
    }
    Cw() {
      let a = new z(new Od(ua.instance.config.title));
      N.hasFeature("force_english") && z.ei("en");
      return a;
    }
    bh(a) {
      N.TS(M(this, this.$V));
      let b = this;
      N.US(function (c) {
        c ? b.zf.stop() : b.zf.start();
      });
      N.SS(function (c) {
        b.ab.zj(c ? 0 : 1);
        c && ((c = b.ca), (c = c.Nr(gd, c)), c != null && c.wS());
      });
      N.Yw && this.ab.zj(0);
      N.KS(M(this, this.tP));
      N.MS(M(this, this.vP));
      N.LS(M(this, this.uP));
      N.XS(M(this, this.wP));
      N.JS(M(this, this.sP));
      N.YS(M(this, this.xP));
      super.bh(a);
    }
    ai(a) {
      // The site selector takes precedence over the language stored in CTR.
      a = N.OP();
      N.hasFeature("force_english")
        ? (z.ei("en"), super.ai("en"))
        : (z.ei(a), super.ai(a));
    }
    iG() {
      this.ca.Ka.sceneToLoad = ac;
      this.ca.rh(lf);
    }
    CE() {
      N.hasFeature("visibilitychange") &&
        (N.Qh() || this.ab.zj(1), N.bR() || this.zf.start());
    }
    Nx() {
      N.hasFeature("visibilitychange") && (super.Nx(), this.zf.stop());
    }
    Vy() {
      N.hasFeature("version") && super.Vy();
    }
    $V(a) {
      let b = this.window.canvas.style;
      b.top = "" + a.t + "px";
      b.left = "" + a.ED + "px";
      b.width = "calc(100% - " + (a.r + a.ED) + "px)";
      b.height = "calc(100% - " + (a.b + a.t) + "px)";
    }
    tP() {
      this.ca.clear();
      this.ca.rh(ac);
    }
    vP() {
      z.py = !1;
      if (w.level != 25 || w.box != 17) {
        var a = w.box - 1,
          b = w.level - 1;
        z.ae[a][b] || w.KF(0, !0);
        w.Pl()
          ? (p.ul(w.box),
            w.box == 5 ? w.Jd(2) : w.box == 10 ? w.Jd(3) : w.Jd(1),
            w.jg(w.box + 1),
            w.ym(w.box) && w.nz(w.box),
            w.bi(1))
          : w.UF();
        b = w.level - 1;
        b < 25 && (z.ae[a][b] = !0);
        this.ca.clear();
        this.ca.rh(ja);
      }
    }
    uP(a) {
      z.py = !1;
      var b = w.vC(a);
      a = b[0];
      b = b[1];
      w.box != a &&
        (p.ul(w.box),
        w.jg(a),
        w.ym(w.box) && w.nz(w.box),
        w.box == 5 ? w.Jd(2) : w.box == 10 ? w.Jd(3) : w.Jd(1));
      w.bi(b);
      z.ae[w.box - 1][w.level - 1] = !0;
      this.ca.clear();
      this.ca.rh(ja);
    }
    wP() {
      var a = this.ca;
      a = a.aw(function (b) {
        return b instanceof Rb;
      }, a);
      a != null && this.ca.rh(wb, a, !1);
    }
    sP() {
      var a = this.ca;
      a = a.aw(function (b) {
        return b instanceof Rb;
      }, a);
      a != null && a.T != null && (a.T.gw = !0);
    }
    xP() {
      var a = this.ca;
      a = a.aw(function (b) {
        return b instanceof Rb;
      }, a);
      a != null && a.uf();
    }
  }
  Ie.i = !0;
  Ie.u = H;
  Object.assign(Ie.prototype, { j: Ie });
  class ih {}
  ih.i = !0;
  ih.bf = !0;
  class hd {}
  hd.i = !0;
  hd.bf = !0;
  hd.Lb = [ih];
  class jh {}
  jh.i = !0;
  jh.bf = !0;
  jh.Lb = [hd];
  class xb {
    constructor(a, b, c) {
      a == null && (a = 2);
      this.Ad = null;
      this.da = 0;
      this.rn = !1;
      this.yk = -2;
      this.Mm = 2 > a ? 2 : a;
      b != null && b.length > 0
        ? ((this.da = b.length),
          (this.P = b.slice(0, b.length)),
          (this.hb = this.da))
        : ((this.hb = this.Mm), (this.P = Array(this.hb)));
      c && (this.yk = 0);
    }
    Vx(a) {
      this.da == this.hb && this.grow();
      this.P[this.da++] = a;
    }
    Fa() {
      return this.P[0];
    }
    uV(a) {
      let b = this.P;
      b[a] = b[--this.da];
    }
    trim(a) {
      this.da = a;
      return this;
    }
    indexOf(a) {
      if (this.da == 0) return -1;
      let b = 0,
        c = -1,
        d = this.da - 1,
        e = this.P;
      do
        if (e[b] == a) {
          c = b;
          break;
        }
      while (b++ < d);
      return c;
    }
    gg(a) {
      a > this.hb && ((this.hb = a), this.xj(a));
    }
    init(a, b) {
      this.gg(a);
      this.da = a;
      let c = this.P,
        d = 0;
      for (; d < a; ) c[d++] = b;
      return this;
    }
    hT() {
      if (this.hb > this.Mm) {
        var a = this.Mm,
          b = this.da;
        this.hb = a > b ? a : b;
        this.xj(this.hb);
      } else {
        a = this.P;
        b = this.da;
        let c = this.hb;
        for (; b < c; ) a[b++] = null;
      }
    }
    grow() {
      this.hb = kh.Io(this.yk, this.hb);
      this.xj(this.hb);
    }
    xj(a) {
      a = Array(a);
      Sb.vo(this.P, 0, a, this.da);
      this.P = a;
    }
    jw() {
      Sb.Qs(this.P);
      this.P = null;
      this.Ad != null && (this.Ad.jw(), (this.Ad = null));
    }
    clear(a) {
      a == null && (a = !1);
      a && Sb.Qs(this.P);
      this.da = 0;
    }
    iterator() {
      if (this.rn) {
        if (this.Ad == null) this.Ad = new Pd(this);
        else {
          let a = this.Ad;
          a.P = a.Pe.P;
          a.Sg = a.Pe.da;
          a.Oe = 0;
        }
        return this.Ad;
      }
      return new Pd(this);
    }
  }
  xb.i = !0;
  xb.Lb = [jh];
  Object.assign(xb.prototype, { j: xb });
  class ma {
    constructor() {
      this.system = ua.instance;
      this.listener = null;
      this.rz = !1;
      this.parent = this.He = this.$ = null;
      this.lE = this.kE = !1;
      this.name = null;
      this.time = 0;
      ma.Kx.Vx(this);
    }
    pa() {
      if (this.system != null) {
        for (var a = this.He; a != null; ) {
          var b = a.$;
          a.pa();
          a = b;
        }
        this.parent != null && this.remove();
        for (a = this.listener; a != null; )
          ((b = a.next), (a.Or = null), (a.next = null), (a = b));
        this.system = this.listener = null;
        ma.Kx.uV(ma.Kx.indexOf(this));
      }
    }
    remove() {
      this.parent != null && ma.removeChild(this);
    }
    iterator() {
      return new lh(this);
    }
    ra(a) {
      return this.appendChild(a);
    }
    add(a) {
      return this.appendChild(ti.OB(a));
    }
    update(a) {
      if (this.system != null) {
        this.rz = !0;
        for (var b = this.He, c; b != null; )
          ((c = b.$),
            b.lE || b.system == null || (b.update(a), b.Zq(a), (b.time += a)),
            (b = c));
        this.time += a;
      }
    }
    Zq() {}
    jd(a) {
      if (this.system != null && this.rz != 0)
        for (var b = this.He, c; b != null; )
          ((c = b.$), b.kE || b.system == null || b.jd(a), (b = c));
    }
    Ss() {}
    lb(a) {
      return Math.min(1, this.time / a);
    }
    aw(a, b) {
      for (var c = this.parent; c != null; ) {
        if (a(c)) return c;
        c = c.parent;
      }
      c = 1;
      let d = [this];
      for (; c > 0; ) {
        let e = d[--c],
          f = e.He;
        for (; f != null; ) ((d[c++] = f), (f = f.$));
        if (e != b && a(e)) return e;
      }
      return null;
    }
    Nr(a, b) {
      for (var c = this.parent; c != null; ) {
        if (Ya.Uu(c, a)) return c;
        c = c.parent;
      }
      c = 1;
      let d = [this];
      for (; c > 0; ) {
        let e = d[--c],
          f = e.He;
        for (; f != null; ) ((d[c++] = f), (f = f.$));
        if (e != b && Ya.Uu(e, a)) return e;
      }
      return null;
    }
    appendChild(a) {
      a.parent = this;
      var b = this.He;
      if (b != null) {
        for (; b.$ != null; ) b = b.$;
        b.$ = a;
      } else this.He = a;
      a.Ss();
      return a;
    }
    static removeChild(a) {
      if (a == null || a.parent == null) return !1;
      var b = a.parent;
      if (a == b.He) b.He = a.$;
      else
        for (b = b.He; b != null; ) {
          if (b.$ == a) {
            b.$ = a.$;
            break;
          }
          b = b.$;
        }
      a.parent = a.$ = null;
      return !0;
    }
  }
  ma.i = !0;
  Object.assign(ma.prototype, { j: ma });
  class Ec extends ma {
    constructor() {
      super();
      this.name = this.Ea();
      this.Ka = {};
      this.caller = null;
      this.We = "New";
      this.zb("New");
      this.node = new rb();
      this.node.ef = 1;
      this.Ed = null;
    }
    pQ() {
      return this.We == "Running";
    }
    Z(a) {
      this.ca.rh(a, this, !1);
    }
    eg(a) {
      this.ca.rh(a, this, !0);
    }
    cg(a) {
      let b = this;
      if (a != null) {
        let c = this.iterator();
        for (; c.top > 0; ) {
          let d = c.stack[--c.top];
          c.push(d);
          Ya.Uu(d, a) && (b = d);
        }
      }
      this.ca.cg(b);
    }
    Ph() {
      return !0;
    }
    qc() {
      return [];
    }
    KC() {
      let a = [],
        b = 0,
        c = this.qc();
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        (m.Tw(d) && m.tC() == null) || m.qb(d) || a.push(d);
      }
      return a;
    }
    zw(a) {
      return new id(this, a);
    }
    wk() {
      return 0;
    }
    dc() {
      return 0;
    }
    pa() {
      super.pa();
      this.zb("Destroyed");
      this.node != null && this.node.G();
      this.node = null;
    }
    update(a) {
      super.update(a);
      this.node.ki(a);
    }
    jd(a) {
      super.jd(a);
      this.node.Pd();
      this.node.Kn();
      this.system.W.zr(this.node);
    }
    ua() {}
    an() {}
    bb() {}
    Xc() {}
    sb() {}
    ee(a) {
      this.Kt(za.dg()(a));
    }
    hd(a) {
      this.Kt(1 - a);
    }
    zb(a) {
      switch (a) {
        case "Created":
          this.node.ef = 0;
          this.Kt(0);
          break;
        case "Stopped":
          this.node.ef = 1;
      }
      this.We = a;
    }
    Kt(a) {
      this.Ui().yf(a);
    }
    Ui() {
      let a = this.node.Ti(5);
      a == null && (a = new pc(0));
      this.node.$h(a);
      return a;
    }
    cQ() {
      return this.Ed.parent instanceof Dc ? null : this.Ed.parent.hg;
    }
    Ea() {
      return "Scene";
    }
  }
  Ec.i = !0;
  Ec.u = ma;
  Object.assign(Ec.prototype, { j: Ec });
  class ea extends Ec {
    constructor() {
      super();
      this.buttons = [null];
      this.Lc = new mh();
      this.kd = this.Dh = this.yd = this.Fh = this.ta = null;
    }
    createTexture(a) {
      if (p.Lm[a] != null) return p.Lm[a];
      let b = this.system.createTexture(a, 8);
      return (p.Lm[a] = b);
    }
    Hl() {
      let a = Aa.create(null, k.iM, k.jM);
      this.node.R(a.l.B);
      this.buttons[0] = a;
    }
    cf(a, b) {
      this.yd = new F(a, b, 0, 1);
      this.ta = new V("fix");
      this.node.R(this.ta.B);
    }
    Yj() {
      p.kd == null && (p.kd = this.createTexture(m.pi));
      this.kd = new C(null, p.kd);
      this.node.R(this.kd.B);
      this.kd.na(fa.Wo(0, 360));
    }
    qh() {
      this.Ha = new C(null, p.Ha);
      this.node.R(this.Ha.B);
    }
    Vd() {
      if (m.qb(m.ie)) {
        p.Pi = this.createTexture(m.ie);
        var a = p.tw(z.language, z.language);
        p.oc = p.Pi.children[a];
        p.Oi = p.Pi.children[a + 1];
      }
      m.qb(m.Cu) && (p.Im = this.createTexture(m.Cu));
      a = H.td ? m.cA : m.oi;
      m.qb(a) && (p.Ha = this.createTexture(a));
      m.qb(m.Ef) && (p.Za = this.createTexture(m.Ef));
      m.qb(m.Lq) && (p.Hc = this.createTexture(m.Lq));
    }
    zw(a) {
      return ua.instance.gC ? super.zw(a) : new mf(this, a);
    }
    ua() {
      this.Vd();
      ea.Wu == null &&
        ((ea.Wu = new bc(null, new F(0, 0, 0, 1))), this.ca.Fa.R(ea.Wu.B));
      this.Dh = ea.Wu;
    }
    an() {
      super.an();
      this.sb();
    }
    sb() {
      var a = this.ca.ha(),
        b = this.ca.la();
      let c = this.ca.sm();
      if (this.yd != null) {
        this.Fh = c.Mi(this.yd.x / this.yd.y);
        this.ta.m(this.Fh.A);
        this.ta.o(this.Fh.F);
        var d = this.Fh;
        this.ta.I((d.C - d.A) / this.yd.x);
      }
      this.ag != null &&
        (this.ag.m(this.ca.ha() - this.ag.ha()),
        this.ag.o(this.ca.la() - this.ag.la()));
      d = this.buttons[0];
      if (d != null) {
        var e = c.Mi(this.yd.x / this.yd.y);
        d.l.I(((e.C - e.A) * 0.2) / d.lc.x);
        d.m(10);
        d.o(this.ca.la() - d.l.la() - 10);
      }
      this.Ha != null &&
        ((e = p.Ha.size),
        (d = a / e.x),
        (e = b / e.y),
        (this.oP = d > e),
        this.Ha.I(Math.max(d, e)),
        this.Ha.m(this.ca.ha() / 2),
        (d = this.Ha),
        d.m(d.ya() - this.Ha.ha() / 2),
        this.Ha.o(0));
      this.kd != null &&
        (this.kd.D(),
        this.kd.bV(new F((c.A + c.C) / 2, (c.F + c.H) / 2, 0, 1)),
        this.kd.I((c.C - c.A) / 260),
        (a = Math.max(a, b) / 2),
        (a = (2 * Math.sqrt(2 * a * a)) / p.kd.size.x),
        this.kd.Wa < a && this.kd.I(a),
        (a = 1 / this.ca.jf()),
        a < 1 && ((b = this.kd), b.I(b.Wa * a)),
        (a = this.kd),
        a.I(a.Wa * 2));
    }
    update(a) {
      super.update(a);
      if (this.pQ()) {
        this.Lc.kj();
        this.AU();
        this.Xd(a);
        this.Lc.Ki();
        let b = 0,
          c = this.buttons;
        for (; b < c.length; ) {
          let d = c[b];
          ++b;
          d != null && d.update(a);
        }
      }
      this.kd != null && ((a = this.kd), a.na(a.je + 0.1));
    }
    dc(a) {
      return a == null ? 0 : 0.5;
    }
    ee(a) {
      this.Dh.X(1 - a);
    }
    hd(a) {
      this.Dh.X(a);
    }
    AU() {
      var a = this.system.Yd();
      this.Lc.pressed = a.Cb(0);
      this.Lc.released = a.Ee(0);
      a = a.position[0];
      var b = a.x,
        c = a.y;
      a = this.system.W.Db;
      let d = this.system.window.hp();
      b = -1 + (2 * (b - d.x)) / d.w;
      c = -1 + (2 * (d.y - c)) / d.J;
      a = a.Sw;
      a = new F(
        a.m11 * b + a.m12 * c + a.m14,
        a.m21 * b + a.m22 * c + a.m24,
        0,
        1,
      );
      a != null && ((b = this.Lc.g), (b.x = a.x), (b.y = a.y));
    }
    tm() {
      let a = 0,
        b = this.buttons;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        c != null && c.l.M(!1);
      }
    }
    dV() {
      let a = 0,
        b = this.buttons;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        c != null && c.l.M(!0);
      }
    }
    Xd() {}
    kb(a) {
      let b = this.buttons[a];
      if (b == null || this.We != "Running" || b.hR || !b.Sf()) return !1;
      let c = !1;
      if (a == 0) {
        var d = this.system.zd ? 461 : -1;
        d = this.system.Rf().Cb(d);
      } else d = !1;
      if (this.Lc.UN(a, b) || d) (b.select(), (c = !0));
      b.By(this.Lc.wD(a));
      b.setActive(this.Lc.isActive(a));
      c && x.play(x.ri);
      return c;
    }
    Kt() {}
    Ab(a, ...b) {
      return Eb.get(a, b.length > 0 ? b.slice() : null);
    }
    Zr(...a) {
      let b = [],
        c = 0;
      for (; c < a.length; ) b.push(Eb.get(a[c++]));
      return b;
    }
    fn() {
      this.system.ab.stop(H.km);
      this.LE(H.Zf);
    }
    oT() {
      this.system.ab.stop(H.Zf);
      this.LE(H.km);
    }
    LE(a) {
      let b = this.system.ab;
      b.xf(z.Nc ? 1 : 0);
      b.Mc(a) || (b.play(a, !0), (this.system.Lv = a));
    }
    Mr() {
      let a = this.system.ab;
      a.Mc(H.Zf) && a.Xo(H.Zf, 0.5, !0);
      a.Mc(H.km) && a.Xo(H.km, 0.5, !0);
    }
    vF() {
      let a = this;
      Q.jp() &&
        !ea.wF &&
        m.qb(m.Mq) &&
        ((this.ag = new C(null, this.createTexture(m.Mq), "0000")),
        this.ag.I(this.system.window.$p),
        this.system.Ck || this.ag.I(this.system.window.xk()),
        this.ca.Fa.R(this.ag.B),
        this.ag
          .sa()
          .play(k.Ta(null, 0, 53, 30))
          .Ue(function () {
            a.ag.G();
            a.ag = null;
            p.ka(m.Mq);
          }),
        x.play(x.EL),
        (ea.wF = !0),
        this.sb());
    }
    Ea() {
      return "AbstractScene";
    }
  }
  ea.i = !0;
  ea.u = Ec;
  Object.assign(ea.prototype, { j: ea });
  class fd extends ea {
    constructor() {
      super();
    }
    ua() {
      super.ua();
      this.Rh = new C(null, this.createTexture(m.Zz));
      this.node.R(this.Rh.B);
      this.cf(750, 750);
      var a = "logo";
      m.ww() == "ru" && (a = "logo_ru");
      this.Ne = new C(this.ta, p.Im.children[0], a);
      this.Ne.D();
      this.Ne.m(375);
      this.Ne.o(200);
      this.ea = new V();
      this.ea.m(375);
      this.ea.o(400);
      this.ta.appendChild(this.ea);
      a = new C(this.ea, p.Im.children[0], "bubble");
      a.D();
      this.text = new ta(this.ea, p.Im.children[1]);
      this.text.Va("100%");
      this.text.tb(a.Y.x, a.Y.y);
      this.text.Hb(0, 0);
      this.text.og(!1);
      this.text.Va("0%");
      this.text.m(-a.Y.x / 2);
      this.text.o(-a.Y.y / 2);
      this.text.tc(this.text.Wr() * 0.7);
      this.Jm = this.system.Hm(this.ca.Ka.sceneToLoad);
      this.Gk = this.percent = 0;
      this.Zj = Math.random() * Fb * 2;
      this.$j = Math.random() * Fb * 2;
      this.ll = Math.random() * 0.1 - 0.05;
      this.ml = Math.random() * 0.1 - 0.05;
    }
    sb() {
      super.sb();
      this.ca.jf() > 1
        ? (this.Rh.na(0),
          this.Rh.m(0),
          this.Rh.Ry(this.ca.ha()),
          this.Rh.Py(this.ca.la()))
        : (this.Rh.na(90),
          this.Rh.m(this.ca.ha()),
          this.Rh.Ry(this.ca.la()),
          this.Rh.Py(this.ca.ha()));
    }
    pa() {
      p.ka(m.Zz);
      super.pa();
    }
    update(a) {
      super.update(a);
      this.sb();
      this.ea.m(375);
      this.ea.o(400);
      var b = Math.cos(this.Zj) * 50;
      a = Math.sin(this.$j) * 50;
      this.Zj += this.ll;
      this.$j += this.ml;
      let c = this.ea;
      c.m(c.ya() + b);
      b = this.ea;
      b.o(b.Xa() + a);
      switch (this.Gk) {
        case 0:
          this.percent < this.Jm.bs() &&
            ((this.percent += 5),
            this.percent > 100 && (this.percent = 100),
            this.OF(this.percent));
          this.text.Va("" + this.percent + "%");
          this.Jm.Fw() && this.percent == 100 && (this.Gk++, (this.time = 0));
          break;
        case 1:
          this.time < 0.5
            ? ((this.ll *= 0.95), (this.ml *= 0.95))
            : (this.Gk++, this.Qk());
      }
    }
    OF() {}
    Qk() {
      this.Z(this.ca.Ka.sceneToLoad);
    }
    dc(a) {
      return a == null ? 0 : 0.5;
    }
    Ea() {
      return "LoadingScene";
    }
  }
  fd.i = !0;
  fd.u = ea;
  Object.assign(fd.prototype, { j: fd });
  class lf extends fd {
    constructor() {
      super();
    }
    OF(a) {
      N.qU(a);
    }
    Ea() {
      return "FamobiLoadingScene";
    }
  }
  lf.i = !0;
  lf.u = fd;
  Object.assign(lf.prototype, { j: lf });
  class db extends ea {
    constructor() {
      super();
    }
    qc() {
      let a = [m.tg, m.ie, m.pi, m.Ef, m.kh, m.si, m.jh, m.Mq, m.qI, H.Zf];
      H.td ? (a.push(m.cA), a.push(m.bA)) : (a.push(m.oi), a.push(m.Du));
      w.gp() == 0 && a.push(this.system.window.Zo() > 1 ? m.Su : m.Tu);
      return a;
    }
    dc(a) {
      return a instanceof qc ? 0 : super.dc(a);
    }
    ee(a, b) {
      b == null ? this.Dh.X(1 - a) : super.ee(a, b);
    }
    qh() {
      super.qh();
      this.rc = new C(null, p.qB);
      this.node.R(this.rc.B);
    }
    Vd() {
      super.Vd();
      let a = H.td ? m.bA : m.Du;
      m.qb(a) && (p.qB = this.createTexture(a));
    }
    ua() {
      super.ua();
      this.qh();
      this.Yj();
      this.cf(600, 900);
      this.Bf = new C(null, p.Za, k.iN);
      this.Ke = new C(null, p.Za, k.AM);
      this.node.R(this.Bf.B);
      this.node.R(this.Ke.B);
      this.Ne = new V(null, this.ta);
      this.Ne.m(303);
      this.Ne.o(220);
      this.Ne.I(0.9);
      if (H.td) {
        var a = new C(this.Ne, p.Za, k.gN);
        a.m(-230);
        a.o(-275);
      }
      new C(this.Ne, p.Za, m.ww() == "ru" ? k.LM : k.KM).D();
      H.td && ((a = new C(this.Ne, p.Za, k.hN)), a.m(-230), a.o(-275));
      this.K = new C(this.ta, p.Za);
      this.K.m(378);
      this.K.o(364);
      this.WG();
      this.K.D();
      this.kr = 0;
      a = Tb.Wl(this.Ab("PLAY"));
      a.m(65);
      a.o(500);
      this.ta.appendChild(a.l);
      this.buttons.push(a);
      this.ra(a);
      a.focus();
      a = Aa.create(null, k.Bl, k.Cl, k.BM);
      a.m(309);
      a.o(617);
      this.ta.appendChild(a.l);
      this.buttons.push(a);
      this.ra(a);
      a = new Qd();
      a.m(129);
      a.o(617);
      this.ta.appendChild(a.l);
      this.buttons.push(a);
      this.ra(a);
      let b = this;
      Q.once("EContextResumed", function () {
        b.system.ab.Mc(H.Zf) || b.fn();
      });
    }
    bb() {
      super.bb();
      db.pk = !1;
      this.fn();
      this.RE();
      z.hint == 1 &&
        fa.ln() &&
        w.gp() > 3 &&
        this.time > 3 &&
        this.ra(new Rd());
      p.ka([154, 151, 148, 145, 142][z.Ae]);
      p.K = null;
      this.vF();
      this.resize();
    }
    resize() {
      var a = 0;
      this.yd.y = 900;
      var b = 0.9,
        c = this.ca.jf();
      c > 1 &&
        (c > 2 && (c = 2),
        (this.yd.y = Wa(c, 1, 2, 900, 650)),
        (a = Wa(c, 1, 2, 0, -80)),
        (b = Wa(c, 1, 2, 0.9, 0.8)));
      super.sb();
      this.buttons[1].o(500 + a);
      this.buttons[2].o(617 + a);
      this.buttons[3].o(617 + a);
      this.Ne.I(b);
      H.td
        ? (this.K.m(378),
          this.K.o(370),
          c > 1.1 &&
            ((a = Wa(c, 1.1, 2, 0, 1)),
            (b = this.K),
            b.m(b.ya() - a * 10),
            (b = this.K),
            b.o(b.Xa() - a * 15)),
          c > 0.6 && ((a = this.K), a.m(a.ya() - 8)))
        : (this.K.m(378),
          this.K.o(370),
          m.ww() != "ru" &&
            ((a = this.K), a.m(a.ya() + 3), (a = this.K), a.o(a.Xa() + 6)),
          c > 1.1 &&
            ((a = Wa(c, 1.1, 2, 0, 1)),
            (b = this.K),
            b.m(b.ya() - a * 8),
            (b = this.K),
            b.o(b.Xa() - a * 7)));
      H.td && c > 0.6 && ((c = this.Ne), c.I(c.Wa * 0.85));
      b = this.ca.sm();
      c = this.Ha.ha() / this.rc.Y.x;
      this.rc.I(c);
      this.rc.m((b.A + b.C) / 2);
      c = this.rc;
      c.m(c.ya() - this.rc.ha() / 2);
      this.rc.o(this.Ha.la() - this.rc.la());
      this.oP &&
        (this.rc.o(b.H - b.F - this.rc.la()),
        (c = this.rc),
        c.o(c.Xa() + this.ca.jf() * this.rc.la() * 0.3));
      c = (b.C - b.A) / 2;
      a = 0.2;
      var d = this.ca.jf();
      d > 1 && ((a = 0.2 + (d - 1)), a > 0.3 && (a = 0.3));
      a = new ia(0, 0, c, (b.H - b.F) * a);
      b = b.H;
      let e = a.H - a.F;
      a.H = b;
      a.F = b - e;
      this.lx = a.Mi(1);
      b = d > 1 ? 0.6 : 0.4;
      d = this.lx;
      this.Bf.I(((d.C - d.A) * b) / this.Bf.Y.x);
      d = this.lx;
      this.Bf.m((d.A + d.C) / 2 - this.Bf.ha() / 2);
      this.Bf.o(this.lx.H - this.Bf.la() * 1.1);
      this.Bf.X(0.5);
      d = a.C - a.A;
      a.A = c;
      a.C = c + d;
      c = this.mx = a.Mi(1);
      this.Ke.I(((c.C - c.A) * b) / this.Ke.Y.x);
      c = this.mx;
      this.Ke.m((c.A + c.C) / 2 - this.Ke.ha() / 2);
      this.Ke.o(this.mx.H - this.Ke.la() * 1.1);
      this.Ke.X(0.5);
    }
    update(a) {
      super.update(a);
      this.resize();
      this.Nr(Rd, this) == null &&
        ((this.kr -= a),
        this.kr <= 0 &&
          this.system.Yd().Cb(0) &&
          this.K.Yb(this.Lc.g) &&
          ((z.Ae = this.yS()),
          (z.hint = 0),
          this.WG(),
          this.TD(),
          x.play(x.ri),
          z.flush(),
          (this.kr = 0.25)));
    }
    jd(a) {
      super.jd(a);
    }
    Xd() {
      if (this.system.Rf().Cb(461))
        try {
          Ti.back();
        } catch (a) {}
      this.kb(1) && this.play();
      this.kb(2) && this.fG();
      this.kb(3) && this.qq();
    }
    play() {
      w.gp() == 0 ? (this.Cn() ? this.Z(qc) : this.Z(ja)) : this.Z(rc);
    }
    Cn() {
      return !this.system.BD();
    }
    fG() {
      this.Z(Fc);
    }
    qq() {
      this.Z(Gc);
    }
    WG() {
      this.K.Ib(k.Nj(k.zM, z.Ae));
      switch (z.Ae) {
        case 0:
        case 1:
          this.K.Ft();
          break;
        case 2:
          this.K.xn();
      }
    }
    yS() {
      let a = z.Ae;
      if (H.td)
        switch (a) {
          case 3:
            a = 4;
            break;
          case 4:
            a = 3;
        }
      else
        switch (a) {
          case 0:
            a = 1;
            break;
          case 1:
            a = 2;
            break;
          case 2:
            a = 0;
        }
      return a;
    }
    TD() {
      this.K.I(0.95);
      this.K.Vb().oV();
      this.K.Vb().scale(1, 1, za.Xv(0.1, 0.5));
    }
    RE() {
      z.nf[0][0] == 0
        ? this.Cn() && H.gt && this.system.Hm(qc)
        : this.system.Hm(rc);
    }
    Ea() {
      return "MenuScene";
    }
  }
  db.i = !0;
  db.u = ea;
  Object.assign(db.prototype, { j: db });
  class ac extends db {
    constructor() {
      super();
    }
    ua() {
      super.ua();
      N.hasFeature("credits") || this.Bf.M(!1);
      N.hasFeature("copyright") || this.Ke.M(!1);
    }
    resize() {
      super.resize();
      if (this.Ke.Sf()) {
        if (!this.Bf.Sf()) {
          var a = this.Ke,
            b = this.ca.sm();
          a.m((b.A + b.C) / 2 - this.Ke.ha() / 2);
        }
      } else
        this.Bf.Sf() &&
          ((a = this.Bf),
          (b = this.ca.sm()),
          a.m((b.A + b.C) / 2 - this.Ke.ha() / 2));
    }
    bb() {
      super.bb();
      N.EP();
    }
    play() {
      let a = this;
      N.ng("button:home:start", function () {
        if (w.gp() == 0)
          if (a.Cn()) a.Z(gd);
          else {
            let b = Rb;
            N.Qi(Zb(), function () {
              a.Z(b);
            });
          }
        else a.Z(sc);
      });
    }
    fG() {
      this.Z(Sd);
    }
    RE() {
      z.nf[0][0] == 0
        ? this.Cn() && H.gt && this.system.Hm(gd)
        : this.system.Hm(sc);
    }
    qq() {
      this.Z(Td);
    }
    Cn() {
      return N.hasFeature("intro") ? super.Cn() : !1;
    }
    Ea() {
      return "FamobiMenuScene";
    }
  }
  ac.i = !0;
  ac.u = db;
  Object.assign(ac.prototype, { j: ac });
  class Fc extends ea {
    constructor() {
      super();
    }
    qc() {
      return [m.tg, m.ie, m.oi, m.pi, m.Ef, m.kh, m.si, m.jh, H.Zf];
    }
    ua() {
      super.ua();
      this.qh();
      this.Yj();
      this.cf(600, 900);
      this.Hl();
      var a = Aa.create(null, k.Ou, k.Pu, k.dN);
      a.m(65);
      a.o(303);
      this.ta.appendChild(a.l);
      this.buttons.push(a);
      this.ra(a);
      a = Aa.create(null, k.Ou, k.Pu, k.RM);
      a.m(311.5);
      a.o(303);
      this.ta.appendChild(a.l);
      this.buttons.push(a);
      this.ra(a);
      this.x = [];
      this.x[1] = new C(this.ta, p.Za, k.NA);
      this.x[1].m(65);
      this.x[1].o(303);
      this.x[1].M(!1);
      this.x[2] = new C(this.ta, p.Za, k.NA);
      this.x[2].m(311.5);
      this.x[2].o(303);
      this.x[2].M(!1);
      this.du(1, z.Ld);
      this.du(2, z.Nc);
      a = Tb.Wl(this.Ab("LANGUAGE"));
      a.m(65);
      a.o(420);
      this.ta.appendChild(a.l);
      this.buttons.push(a);
      this.ra(a);
      a.focus();
      a = Tb.Wl(this.Ab("RESET"));
      a.m(65);
      a.o(537);
      this.ta.appendChild(a.l);
      this.buttons.push(a);
      this.ra(a);
    }
    bb() {
      super.bb();
      this.fn();
      this.tr = z.language;
      this.ix = kf.indexOf(this.tr);
    }
    sb() {
      let a = this.ca.jf(),
        b = 0;
      this.yd.y = 900;
      a > 1.25 &&
        ((this.yd.y = 650), (b = (1 / a) * -350), this.system.zd && (b *= 2));
      super.sb();
      this.ta.o(this.Fh.F + b);
    }
    Xc() {
      super.Xc();
      if (this.tr != z.language) {
        this.system.W.ka(p.Pi);
        p.Lm[m.ie] = null;
        p.Pi = this.createTexture(m.ie);
        let a = p.tw(z.language, z.language);
        p.oc = p.Pi.children[a];
        p.Oi = p.Pi.children[a + 1];
        this.system.IO();
      }
    }
    Xd() {
      this.kb(0) && (z.flush(), this.Zb());
      this.kb(1) && this.tl();
      this.kb(2) && this.sl();
      if (this.kb(3)) {
        // Share the site's two-language selector, including its safe canvas restart.
        if (typeof window.GameInterface.toggleLanguage === "function") {
          window.GameInterface.toggleLanguage();
          return;
        }
        var a = this.ix + 1;
        let b = kf.length;
        a %= b;
        a < 0 && (a += b);
        this.ix = a;
        z.ei(kf[this.ix]);
        m.ai(z.language);
        a = p.tw(this.tr, z.language);
        p.oc = p.Pi.children[a];
        p.Oi = p.Pi.children[a + 1];
        this.buttons[3].XG();
        this.buttons[4].XG();
        this.buttons[3].Kd(!1);
        this.buttons[3].ye = 0;
        this.buttons[3].JF(this.Ab("LANGUAGE"));
        this.buttons[4].JF(this.Ab("RESET"));
      }
      this.kb(4) && this.gG();
    }
    Z(a) {
      this.tr != z.language && (m.rt(m.ie), m.rt(m.tg));
      super.Z(a);
    }
    gG() {
      this.Z(jd);
    }
    tl() {
      z.Ld = !z.Ld;
      this.du(1, z.Ld);
      this.buttons[1].Kd(!1);
      this.buttons[1].ye = 0;
      z.flush();
    }
    sl() {
      z.Nc = !z.Nc;
      z.Nc ? this.system.ab.xf(1) : this.system.ab.xf(0);
      this.du(2, z.Nc);
      this.buttons[2].Kd(!1);
      this.buttons[2].ye = 0;
      z.flush();
    }
    Zb() {
      this.Z(db);
    }
    du(a, b) {
      let c = this.buttons[a],
        d = c.icon;
      b ? d.lq(null) : d.lq(new tc().wy(-0.5));
      c.icon.X(b ? 1 : 0.5);
      this.x[a].M(!b);
    }
    Ea() {
      return "OptionsScene";
    }
  }
  Fc.i = !0;
  Fc.u = ea;
  Object.assign(Fc.prototype, { j: Fc });
  class Sd extends Fc {
    constructor() {
      super();
    }
    ua() {
      super.ua();
      N.hasFeature("audio") || (this.buttons[1].M(!1), this.buttons[2].M(!1));
      if (N.hasFeature("force_english")) {
        this.buttons[3].M(!1);
        let a = this.buttons[4].l;
        a.o(a.Xa() - 117);
      }
      N.hasFeature("reset") || this.buttons[4].M(!1);
    }
    Zb() {
      this.Z(ac);
    }
    gG() {
      this.Z(nf);
    }
    tl() {
      super.tl();
      N.Sr(!z.Nc && !z.Ld);
    }
    sl() {
      super.sl();
      N.Sr(!z.Nc && !z.Ld);
    }
    Ea() {
      return "FamobiOptionsScene";
    }
  }
  Sd.i = !0;
  Sd.u = Fc;
  Object.assign(Sd.prototype, { j: Sd });
  class jd extends ea {
    constructor() {
      super();
    }
    qc() {
      return [m.tg, m.ie, m.oi, m.pi, m.Ef, m.kh, m.si, m.jh];
    }
    ua() {
      super.ua();
      this.qh();
      this.Yj();
      this.cf(600, 900);
      this.Hl();
      var a = new ta(this.ta, p.oc);
      a.m(20);
      a.o(100);
      a.tc(50);
      a.lg(!0);
      a.Hb(0);
      a.tb(560, 200);
      a.Va(this.Ab("RESET_TEXT"));
      a = new ta(this.ta, p.Oi);
      a.Va(this.Ab("RESET_HOLD_TEXT"));
      a.tc(40);
      a.lg(!0);
      a.Hb(0);
      a.tb(560, 100);
      a.m(20);
      a.o(225);
      a = Tb.Wl(this.Ab("YES"));
      a.m(65);
      a.o(383);
      this.ta.appendChild(a.l);
      this.buttons.push(a);
      this.ra(a);
      a.focus();
      a = Tb.Wl(this.Ab("NO"));
      a.m(65);
      a.o(500);
      this.ta.appendChild(a.l);
      this.buttons.push(a);
      this.ra(a);
      this.blink = this.state = 0;
    }
    sb() {
      let a = this.ca.jf(),
        b = 0;
      this.yd.y = 900;
      a > 1.25 && ((this.yd.y = 650), (b = (1 / a) * -100));
      super.sb();
      this.ta.o(this.Fh.F + b);
    }
    update(a) {
      super.update(a);
      this.system.Rf();
      if (this.state == 2)
        this.time < 0.1 ||
          (this.buttons[1].By((this.blink & 1) == 0),
          this.blink++,
          (this.time = 0),
          this.blink == 10 && ((this.state = 3), this.mv()));
      else if (this.Lc.wD(1) && this.system.Yd().up(0))
        switch (this.state) {
          case 0:
            this.time = 0;
            this.state = 1;
            break;
          case 1:
            this.time > 3 &&
              ((a = z.language),
              z.instance.reset(),
              z.ei(a),
              z.flush(),
              w.reset(),
              (this.state = 2),
              (this.blink = this.time = 0),
              this.buttons[1].blur());
        }
    }
    Xd() {
      this.kb(0) && this.mv();
      this.state != 2 &&
        this.kb(1) &&
        ((this.time = this.state = 0),
        this.buttons[1].Kd(!1),
        (this.buttons[1].ye = 0));
      this.kb(2) && this.Zb();
    }
    mv() {
      this.Z(db);
    }
    Zb() {
      this.Z(Fc);
    }
    Ea() {
      return "ResetScene";
    }
  }
  jd.i = !0;
  jd.u = ea;
  Object.assign(jd.prototype, { j: jd });
  class nf extends jd {
    constructor() {
      super();
    }
    Zb() {
      this.Z(Sd);
    }
    mv() {
      this.Z(ac);
    }
    Ea() {
      return "FamobiResetScene";
    }
  }
  nf.i = !0;
  nf.u = jd;
  Object.assign(nf.prototype, { j: nf });
  class Hc extends ea {
    constructor() {
      super();
      this.qp = new oa("(iPad|iPhone)", "g").match(ab.navigator.platform);
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent) &&
        (this.qp = !0);
    }
    dc() {
      return 0;
    }
    bb() {
      super.bb();
      this.system.window.canvas.style.visibility = "hidden";
      this.system.ab.xf(0);
      this.container = window.document.createElement("div");
      this.container.style.display = "flex";
      this.container.style.position = "fixed";
      this.container.style.left = "0px";
      this.container.style.top = "0px";
      this.container.style.width = "100%";
      this.container.style.height = "100%";
      this.container.style.justifyContent = "center";
      this.container.style.alignItems = "center";
      window.document.body.appendChild(this.container);
      try {
        ((this.video = window.document.createElement("video")),
          this.container.appendChild(this.video),
          (this.video.muted = this.Zw()),
          (this.video.autoplay = !0),
          (this.video.controls = !1),
          (this.video.poster =
            "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"),
          (this.video.playsInline = !0),
          this.video.addEventListener("ended", M(this, this.ended)),
          this.video.addEventListener("mousedown", M(this, this.Ns)),
          this.video.addEventListener("touchend", M(this, this.MG)),
          (this.url = H.gt
            ? URL.createObjectURL(this.getData())
            : m.Vi(this.qc()[0])),
          (this.video.src = this.url),
          (this.video.style.width = "100%"),
          (this.video.style.height = "100%"),
          (this.video.style.bottom = "0"),
          (this.video.style.left = "0"),
          (this.video.style.objectFit = "contain"),
          (this.video.style.background = "black"));
      } catch (b) {
        this.ended();
      }
      let a = this;
      this.TV = this.system.window.bg(1, function () {
        try {
          a.Qh() || (a.video.muted = !1);
        } catch (b) {}
      });
      this.SV = this.system.window.bg(2, function () {
        try {
          a.video.muted = !0;
        } catch (b) {}
      });
    }
    Xc() {
      super.Xc();
      this.SV();
      this.TV();
    }
    Ns() {
      this.Qh() || (this.video.muted = !1);
    }
    MG() {
      this.Qh() || (this.video.muted = !1);
    }
    ended() {
      this.container.removeChild(this.video);
      window.document.body.removeChild(this.container);
      this.system.window.canvas.style.visibility = "";
      this.video.removeEventListener("ended", M(this, this.ended));
      this.video.removeEventListener("mousedown", M(this, this.Ns));
      this.video.removeEventListener("touchend", M(this, this.MG));
      URL.revokeObjectURL(this.url);
      this.xE();
    }
    Qh() {
      return z.Nc == 0;
    }
    Zw() {
      return this.qp ? !0 : this.Qh();
    }
    Ea() {
      return "VideoScene";
    }
  }
  Hc.i = !0;
  Hc.u = ea;
  Object.assign(Hc.prototype, { j: Hc });
  class qc extends Hc {
    constructor() {
      super();
    }
    qc() {
      return [ua.instance.window.Zo() > 1 ? m.Su : m.Tu];
    }
    getData() {
      let a = m.data.J[m.Tu];
      return a != null ? a : m.data.J[m.Su];
    }
    xE() {
      w.Jd(1);
      w.jg(1);
      w.bi(1);
      this.Qk();
    }
    Qk() {
      this.Z(ja);
    }
    ua() {
      super.ua();
      this.Mr();
    }
    bb() {
      super.bb();
      this.system.Hm(ja);
    }
    Ea() {
      return "IntroVideoScene";
    }
  }
  qc.i = !0;
  qc.u = Hc;
  Object.assign(qc.prototype, { j: qc });
  class gd extends qc {
    constructor() {
      super();
    }
    wS() {
      try {
        this.video.muted = !0;
      } catch (a) {}
    }
    Qk() {
      let a = this,
        b = Rb;
      N.Qi(Zb(), function () {
        a.Z(b);
      });
    }
    Zw() {
      return super.Zw() ? !0 : Ui;
    }
    Qh() {
      return super.Qh() ? !0 : Ui;
    }
    Ea() {
      return "FamobiIntroVideoScene";
    }
  }
  gd.i = !0;
  gd.u = qc;
  Object.assign(gd.prototype, { j: gd });
  class rc extends ea {
    constructor() {
      super();
    }
    qc() {
      return [m.tg, m.ie, m.oi, m.pi, m.Ef, m.kh, m.si, m.jh, m.Hu, m.uI, H.Zf];
    }
    ua() {
      super.ua();
      p.ka(m.Eu);
      p.ka(m.Fu);
      p.ka(m.Gu);
      p.VG();
      this.qh();
      this.cf(600, 900);
      this.Yj();
      this.Hl();
      p.dh = this.createTexture(m.Hu);
      this.oB = 750 / p.dh.nc.Qf(k.Mu).lc.x;
      this.offsetY = 150;
      this.rG = p.dh.nc.Qf(k.Mu).lc.y * 0.7;
      this.dh = [];
      let a = 0;
      for (; a < 3; ) {
        var b = a++;
        let c = new V(null, this.ta);
        new C(c, p.dh, k.Mu);
        new C(c, p.dh, [k.gL, k.hL, k.iL][b]);
        c.D();
        c.I(this.oB);
        c.m(300);
        c.o(this.offsetY + b * this.rG);
        this.dh.push(c);
        let d = new ta(c, p.oc);
        d.m(312);
        d.o(140);
        d.tc(70);
        d.Hb(0);
        d.tb(400, 100);
        d.Va(this.Ab("SEASON_NO", ra.Ec(b + 1)));
        b = Aa.create(p.dh, k.jL, k.kL);
        b.m(512);
        b.o(285);
        b.l.D();
        c.appendChild(b.l);
        this.buttons.push(b);
        this.ra(b);
      }
      this.buttons[1].focus();
    }
    bb() {
      super.bb();
      this.fn();
      this.vF();
    }
    sb() {
      super.sb();
      let a = Math.min(Math.max(0, this.system.window.Zo() - 1), 0.2),
        b = 0;
      for (; b < 3; ) {
        let c = b++;
        this.dh[c].I(this.oB + a);
        this.dh[c].o(this.offsetY + c * (this.rG + a * 150));
      }
    }
    Xc() {
      super.Xc();
      p.dh = null;
      p.ka(m.Hu);
    }
    Xd() {
      if (this.kb(0)) (z.flush(), p.ul(w.box), this.Zb());
      else
        for (var a = 1; a < 4; ) {
          let b = a++;
          this.kb(b) && this.hP(b);
        }
    }
    hP(a) {
      a != w.Oa && (p.ka([69, 66, 63][w.Oa - 1]), (p.bc = null));
      w.Jd(a);
      p.ul(w.box);
      switch (a) {
        case 1:
          w.jg(1);
          break;
        case 2:
          w.jg(6);
          break;
        case 3:
          w.jg(11);
      }
      this.Z(this.NC()[a - 1]);
    }
    NC() {
      return [Gb, yb, Hb];
    }
    Zb() {
      this.Z(db);
    }
    Ea() {
      return "SelectSeasonScene";
    }
  }
  rc.i = !0;
  rc.u = ea;
  Object.assign(rc.prototype, { j: rc });
  class sc extends rc {
    constructor() {
      super();
    }
    NC() {
      return [uc, cc, dc];
    }
    Zb() {
      this.Z(ac);
    }
    Ea() {
      return "FamobiSelectSeasonScene";
    }
  }
  sc.i = !0;
  sc.u = rc;
  Object.assign(sc.prototype, { j: sc });
  class zb extends ea {
    constructor() {
      super();
    }
    qc() {
      return [m.tg, m.ie, m.oi, m.pi, m.Ef, m.kh, m.jh, m.si, H.Zf];
    }
    ua() {
      super.ua();
      this.wb = w.box;
      this.wb > 10 ? (this.wb -= 10) : this.wb > 5 && (this.wb -= 5);
      this.state = 0;
      this.qh();
      this.Yj();
      this.cf(650, 650);
      this.bc = new V(null, this.ta);
      this.bc.m(75);
      this.bc.o(75);
      this.offsetX = this.bc.ya();
      this.advance = 500;
      var a = this.pw(),
        b = this.ow();
      switch (w.Oa) {
        case 2:
          var c = 5;
          break;
        case 3:
          c = 7;
          break;
        default:
          c = 5;
      }
      this.Ql = c;
      this.rB = [];
      for (var d = (c = 0), e = this.Ql; d < e; ) {
        ++d;
        var f = new C(this.bc);
        f.setColor(
          new F(
            0.17647058823529413,
            0.17647058823529413,
            0.20784313725490197,
            1,
          ),
          300,
          300,
        );
        f.m(100 + c);
        f.o(150);
        this.rB.push(f);
        c += this.advance;
      }
      this.Na = new C(this.bc, p.bc, k.PK);
      this.clipPath = new ia(0, 0, 177, 182);
      this.zo = [];
      e = this.Ql;
      this.en = e += w.Oa < 3 ? 1 : 0;
      for (d = c = 0; d < e; ) {
        f = d++;
        var g = this.Fs(f);
        let q = new V(null, this.bc);
        this.zo.push(q);
        let r = f == this.Ql;
        q.m(c);
        var h = null;
        if (r && w.Oa < 3) ((h = new V(null, q)), new C(h, p.bc, b[f]));
        else {
          new C(q, p.bc, b[f]);
          var l = new C(q, p.bc, b[f]);
          l.wf(l.Y.x, 0);
          l.qa(-1);
        }
        if (!r && w.ym(g)) {
          l = new V(null, q);
          l.Qy("lock");
          new C(l, p.bc, k.Lu);
          var n = new C(l, p.bc, k.Lu);
          n.wf(n.Y.x, 0);
          n.qa(-1);
          l.D();
          n = p.bc.nc.Qf(k.Lu).lc;
          l.m(l.ya() + n.x);
          l.o(l.Xa() + n.y / 2);
          w.Aw(g) > 0 &&
            ((l = new C(q, p.Za, k.Qu)),
            l.m(260),
            l.o(320),
            l.I(0.7),
            (n = new ta(q, p.oc)),
            n.tb(80, l.la()),
            n.Hb(1, 0),
            n.My(-3),
            n.Va(ra.Ec(Vi[g - 1])),
            n.tc((l.la() | 0) * 1.2),
            n.m(l.ya() - 80),
            n.o(l.Xa()));
          w.Oa == 3 &&
            f == this.Ql - 1 &&
            (new C(q, p.bc, k.fL),
            (l = new ta(q, p.oc)),
            l.Va(this.Ab("MECH_HARDEST")),
            l.tb(184, 60),
            l.tc(36),
            l.Hb(0),
            l.m(253),
            l.o(425),
            l.na(-16));
        }
        r || w.wC(g) != 75 || new C(q, p.bc, k.TK);
        r && w.Oa < 3
          ? ((g = new ta(h, p.oc)),
            g.tb(300, 100),
            g.m(100),
            g.o(206),
            g.Va(a[f]),
            g.tc(60),
            g.lg(!0),
            g.It(-40),
            g.Hb(0, 0),
            h.Sl(),
            h.na(15))
          : ((h = new ta(q, p.oc)),
            h.tb(400, 200),
            h.m(56),
            h.Va(a[f]),
            h.tc(70),
            h.lg(!0),
            h.Hb(0),
            h.It(-30),
            h.shape(),
            h.o(h.Bw() == 1 ? 110 : 90));
        c += this.advance;
      }
      this.Yc = [];
      for (a = 0; a < 2; )
        (++a,
          (b = new C(null, p.Za, k.KA)),
          b.D(),
          this.ta.appendChild(b),
          this.Yc.push(b));
      this.Hl();
      this.xb = this.add(Ic);
      a = w.Dw();
      this.xb.Va(a == null ? "null" : "" + a);
      this.QN = new of(this.ta.node, new ia(145, 145, 505, 505));
      this.mu();
      this.ar = !0;
      this.qv = !1;
      this.jC = !0;
    }
    Ir() {
      this.Z(Ib);
    }
    mu() {
      this.wb > 1
        ? (this.Yc[0].Ib(k.KA), this.Yc[0].ge(1))
        : (this.Yc[0].Ib(k.UM), this.Yc[0].ge(2));
      this.wb == this.en
        ? (this.Yc[1].Ib(k.SM), this.Yc[1].ge(2))
        : (this.Yc[1].Ib(k.TM), this.Yc[1].ge(1));
      this.Yc[0].I(1);
      this.Yc[1].I(1);
    }
    Uy() {
      this.Dt = -1;
      this.ev();
      this.ba(1);
      this.$e = -(this.wb - 1) * this.advance;
      this.x1 = this.$e - this.advance * this.Dt;
      this.$e += this.offsetX;
      this.x1 += this.offsetX;
      this.ar = this.wb != this.en || w.Oa == 3;
      this.wb--;
      this.mu();
      this.Yc[0].I(0.9);
    }
    Pt() {
      this.Dt = 1;
      this.ev();
      this.ba(1);
      this.$e = -(this.wb - 1) * this.advance;
      this.x1 = this.$e - this.advance * this.Dt;
      this.$e += this.offsetX;
      this.x1 += this.offsetX;
      this.ar = this.wb != this.Ql;
      this.wb++;
      this.mu();
      this.Yc[1].I(0.9);
    }
    update(a) {
      super.update(a);
      if (this.We == "Running") {
        var b = this.system.Yd().Cb(0);
        a = this.system.Yd().Ee(0);
        switch (this.state) {
          case 0:
            this.time > (this.jC ? 1 : 0) &&
              !this.qv &&
              ((this.qv = !0), (this.jC = !1), this.sB());
            if (this.yr) {
              var c = this.system.Yd().position[0];
              this.Gg = c.x - this.ZB.x;
              Math.abs(c.y - this.ZB.y) < 50 &&
                (this.Gg < -100 &&
                  this.wb < this.en &&
                  ((this.yr = !1), this.Pt()),
                this.Gg > 100 && this.wb > 1 && ((this.yr = !1), this.Uy()));
            }
            c = this.QN.Yb(this.Lc.g);
            var d = this.Yc[0].Yb(this.Lc.g);
            let e = this.Yc[1].Yb(this.Lc.g);
            b &&
              (this.buttons[0].blur(),
              (this.aq = this.wb > 1 && d),
              (this.Rp = this.wb < this.en && e),
              (this.RN = this.wb <= this.en && c),
              (this.yr = !0),
              (b = this.Lc.g),
              (this.ZB = new F(b.x, b.y, 0, 1)),
              (this.Gg = 0));
            a &&
              (this.aq && d && (this.Uy(), x.play(x.ri)),
              this.Rp && e && (this.Pt(), x.play(x.ri)),
              (this.yr = this.Rp = this.aq = !1),
              this.RN &&
                c &&
                Math.abs(this.Gg) < 10 &&
                (x.play(x.ri),
                this.wb > this.Ql
                  ? this.Xp() && this.ba(4)
                  : ((a = this.Fs(this.wb - 1)),
                    w.ym(a)
                      ? ((this.Ka.starCount = w.Aw(a)), this.eg(Ud))
                      : (w.box != a && p.ul(w.box),
                        w.jg(a),
                        this.Ir(),
                        this.ba(4)))));
            break;
          case 1:
            c = this.Fs(this.wb - 1);
            (c <= 17 && w.ym(c) && w.FB(c)) ||
              ((c = this.Yc[0].Yb(this.Lc.g)),
              (d = this.Yc[1].Yb(this.Lc.g)),
              b &&
                ((this.aq = this.wb > 1 && c),
                (this.Rp = this.wb < this.en && d)),
              a &&
                (this.aq &&
                  c &&
                  (this.Na.m(-(this.x1 - this.offsetX)),
                  this.Uy(),
                  x.play(x.ri)),
                this.Rp &&
                  d &&
                  (this.Na.m(-(this.x1 - this.offsetX)),
                  this.Pt(),
                  x.play(x.ri)),
                (this.Rp = this.aq = !1)));
            a = this.lb(0.2);
            b = this.$e;
            this.bc.m(b + (this.x1 - b) * za.dg()(a));
            b = -(this.bc.ya() - this.offsetX);
            this.ar
              ? (this.Na.m(b),
                (b = b + this.$e - this.offsetX),
                this.Dt > 0
                  ? b > this.advance / 2
                    ? ((c = this.clipPath),
                      (b = this.advance - b),
                      (d = c.C - c.A),
                      (c.A = b),
                      (c.C = b + d))
                    : ((c = this.clipPath),
                      (b = -b),
                      (d = c.C - c.A),
                      (c.A = b),
                      (c.C = b + d))
                  : ((b = -b),
                    b > this.advance / 2
                      ? ((c = this.clipPath),
                        (b = -this.advance + b),
                        (d = c.C - c.A),
                        (c.A = b),
                        (c.C = b + d))
                      : ((c = this.clipPath),
                        (d = c.C - c.A),
                        (c.A = b),
                        (c.C = b + d))),
                this.Na.YF(this.clipPath))
              : this.Na.YF(null);
            a == 1 && ((this.qv = !1), this.ba(2), this.mu());
            break;
          case 2:
            a = this.Fs(this.wb - 1);
            w.ym(a) && w.FB(a)
              ? (this.sB(),
                this.ba(3),
                this.zo[this.wb - 1].ap("lock").xn(),
                x.play(x.OL),
                (b = new pf()),
                (c = this.Fh),
                b.l.m((c.A + c.C) / 2),
                (d = c = this.Fh),
                b.l.o((c.F + c.H) / 2 + (d.H - d.F) * 0.15),
                this.ra(b),
                this.node.R(b.l.B),
                w.nz(a))
              : this.ba(0);
            break;
          case 3:
            ((a = this.zo[this.wb - 1].ap("lock")),
              (b = this.lb(1.5)),
              a.I(1 + b * 0.5),
              a.X(1 - b),
              a.lq(new tc().wy(-b * 0.5)),
              b == 1 && this.ba(0));
        }
      }
    }
    ba(a) {
      this.state = a;
      this.time = 0;
    }
    sB() {
      this.sv = this.ra(new kd(this.zo[this.wb - 1]));
      this.sE = this.ra(new kd(this.Na));
    }
    ev() {
      this.sv != null &&
        (this.sv.pa(), this.sE.pa(), (this.sE = this.sv = null));
    }
    Fs(a) {
      a += 1;
      w.Oa == 2 && (a += 5);
      w.Oa == 3 && (a += 10);
      return a;
    }
    Xp() {
      return !1;
    }
    dc(a) {
      return a != null && a instanceof Ud ? 1.5 : super.dc(a);
    }
    bb() {
      super.bb();
      this.fn();
      p.ka(m.Du);
      p.Ne = null;
      p.qB = null;
      this.caller != null &&
        this.caller.Ka.boxComplete &&
        w.box != 17 &&
        this.Pt();
    }
    sb() {
      super.sb();
      this.ev();
      this.advance = 500;
      let a = this.ca.jf();
      a < 0.6 || (this.advance *= Math.min(1.5, Wa(a, 0.6, 2, 1, 1.2)));
      for (var b = 0, c = 0, d = this.rB; c < d.length; ) {
        let e = d[c];
        ++c;
        e.m(100 + b);
        e.X(0.5);
        b += this.advance;
      }
      c = b = 0;
      for (d = this.zo; c < d.length; ) (d[c++].m(b), (b += this.advance));
      this.bc.m(-(this.wb - 1) * this.advance + this.offsetX);
      this.ar && (this.Na.m(-(this.bc.ya() - this.offsetX)), this.ba(0));
      b = this.Yc[0];
      c = this.Yc[1];
      a > 0.7
        ? (b.m(50), b.o(325), c.m(600), c.o(325))
        : (b.m(250), b.o(650), c.m(400), c.o(650));
      this.Nr(Ic, this).layout();
    }
    Xd() {
      this.kb(0) && this.Zb();
    }
    Zb() {
      this.Z(rc);
    }
    Ea() {
      return "SelectBoxScene";
    }
  }
  zb.i = !0;
  zb.u = ea;
  Object.assign(zb.prototype, { j: zb });
  class Gb extends zb {
    constructor() {
      super();
    }
    qc() {
      return super.qc().concat([m.Eu, m.rI]);
    }
    Vd() {
      super.Vd();
      p.bc = this.createTexture(m.Eu);
    }
    Xp() {
      this.Z(yb);
      return !0;
    }
    pw() {
      let a = this.Zr(
          "BOX1_LABEL",
          "BOX2_LABEL",
          "BOX3_LABEL",
          "BOX4_LABEL",
          "BOX5_LABEL",
          "NEXT_SEASON",
        ),
        b = 0;
      for (; b < 5; ) {
        let c = b++;
        a[c] = c + 1 + ". " + a[c];
      }
      return a;
    }
    ow() {
      return [k.KK, k.LK, k.MK, k.NK, k.OK, k.uA];
    }
    Ea() {
      return "Season1Scene";
    }
  }
  Gb.i = !0;
  Gb.u = zb;
  Object.assign(Gb.prototype, { j: Gb });
  class uc extends Gb {
    constructor() {
      super();
    }
    Xp() {
      this.Z(cc);
      return !0;
    }
    Zb() {
      this.Z(sc);
    }
    Ir() {
      this.Z(wb);
    }
    Ea() {
      return "FamobiSeason1Scene";
    }
  }
  uc.i = !0;
  uc.u = Gb;
  Object.assign(uc.prototype, { j: uc });
  class yb extends zb {
    constructor() {
      super();
    }
    qc() {
      return super.qc().concat([m.Fu, m.sI]);
    }
    ua() {
      this.caller != null &&
        this.caller instanceof Gb &&
        (w.Jd(2), p.ul(w.box), w.jg(6));
      super.ua();
    }
    bb() {
      super.bb();
      p.ka(69);
    }
    Vd() {
      super.Vd();
      p.bc = this.createTexture(m.Fu);
    }
    Xp() {
      this.Z(Hb);
      return !0;
    }
    pw() {
      let a = this.Zr(
          "BOX6_LABEL",
          "BOX7_LABEL",
          "BOX8_LABEL",
          "BOX9_LABEL",
          "BOX10_LABEL",
          "NEXT_SEASON",
        ),
        b = 0;
      for (; b < 5; ) {
        let c = b++;
        a[c] = c + 1 + 5 + ". " + a[c];
      }
      return a;
    }
    ow() {
      return [k.VK, k.WK, k.XK, k.YK, k.UK, k.uA];
    }
    Ea() {
      return "Season2Scene";
    }
  }
  yb.i = !0;
  yb.u = zb;
  Object.assign(yb.prototype, { j: yb });
  class cc extends yb {
    constructor() {
      super();
    }
    Xp() {
      this.Z(dc);
      return !0;
    }
    Zb() {
      this.Z(sc);
    }
    Ir() {
      this.Z(wb);
    }
    Ea() {
      return "FamobiSeason2Scene";
    }
  }
  cc.i = !0;
  cc.u = yb;
  Object.assign(cc.prototype, { j: cc });
  class Hb extends zb {
    constructor() {
      super();
    }
    qc() {
      return super.qc().concat([m.Gu, m.tI]);
    }
    ua() {
      this.caller != null &&
        this.caller instanceof yb &&
        (w.Jd(3), p.ul(w.box), w.jg(11));
      super.ua();
    }
    bb() {
      super.bb();
      p.ka(66);
    }
    Vd() {
      super.Vd();
      p.bc = this.createTexture(m.Gu);
    }
    pw() {
      let a = this.Zr(
          "BOX11_LABEL",
          "BOX12_LABEL",
          "BOX13_LABEL",
          "BOX14_LABEL",
          "BOX15_LABEL",
          "BOX16_LABEL",
          "BOX17_LABEL",
        ),
        b = 0;
      for (; b < 7; ) {
        let c = b++;
        a[c] = c + 1 + 10 + ". " + a[c];
      }
      return a.slice(0, 7);
    }
    ow() {
      return [k.ZK, k.$K, k.aL, k.bL, k.cL, k.dL, k.eL].slice(0, 7);
    }
    Ea() {
      return "Season3Scene";
    }
  }
  Hb.i = !0;
  Hb.u = zb;
  Object.assign(Hb.prototype, { j: Hb });
  class dc extends Hb {
    constructor() {
      super();
    }
    Zb() {
      this.Z(sc);
    }
    Ir() {
      this.Z(wb);
    }
    Ea() {
      return "FamobiSeason3Scene";
    }
  }
  dc.i = !0;
  dc.u = Hb;
  Object.assign(dc.prototype, { j: dc });
  class Ib extends ea {
    constructor() {
      super();
    }
    qc() {
      let a = [
          m.tg,
          m.ie,
          m.pi,
          m.Ef,
          m.kh,
          m.Lq,
          m.dA,
          m.pi,
          m.jh,
          m.si,
          H.Zf,
        ],
        b = w.box - 1;
      a.push(
        [
          309, 301, 293, 285, 277, 269, 261, 251, 243, 235, 227, 219, 211, 203,
          195, 187, 179,
        ][b],
      );
      a.push(
        [
          311, 303, 295, 287, 279, 271, 263, 255, 245, 237, 229, 221, 213, 205,
          197, 189, 181,
        ][b],
      );
      a.push(
        [
          312, 304, 296, 288, 280, 272, 264, 256, 246, 238, 230, 222, 214, 206,
          198, 190, 182,
        ][b],
      );
      return a;
    }
    qF(a) {
      this.BE(a);
    }
    BE(a) {
      w.bi(a);
      x.play(x.ri);
      this.state = 1;
      this.time = 0;
    }
    ua() {
      super.ua();
      this.Dh.M(!0);
      Sa.instance != null && Sa.instance.pa();
      this.wa = this.add(Sa);
      this.ca.back.R(this.wa.node);
      this.state = 0;
      this.Yj();
      this.Hl();
      var a = 20;
      w.$C() && (a = 0);
      this.rp = new V();
      var b = p.Za.nc.Qf(k.Sq).lc;
      let c = b.x - a,
        d = b.y,
        e = 1;
      this.$i = new Vd(5, 5);
      let f = this;
      this.$i.forEach(function (g, h, l) {
        e += 1;
        g = new Jc(e - 1);
        f.rp.appendChild(g.l);
        g.l.m(h * c);
        g.l.o(l * d);
        return g;
      });
      this.rp.m(-5);
      this.size = new Na(5 * c, 5 * d);
      this.cf(this.size.x, this.size.y);
      this.ta.appendChild(this.rp);
      for (a = this.$i.iterator(); a.ib(); )
        ((b = a.next()), w.ZQ(b.fj) && b.LU(w.yw(b.fj), w.$C(b.fj)));
      for (a = this.$i.iterator(); a.ib(); )
        if (((b = a.next()), w.yw(b.fj) < 3)) {
          b.focus();
          this.Gh = b;
          break;
        }
      this.Gh == null && ((a = this.$i), (this.Gh = a.P[0 * a.Wb]));
      this.Gh.focus();
      this.xb = this.add(Ic);
      a = w.wC();
      this.xb.Va(ra.Ec(a == 0 ? 0 : a));
      this.fn();
    }
    bb() {
      super.bb();
      this.system.ab.xf(z.Nc ? 1 : 0);
    }
    pa() {
      super.pa();
      this.wa = null;
    }
    Vd() {
      super.Vd();
      p.ck = this.createTexture(
        [
          311, 303, 295, 287, 279, 271, 263, 255, 245, 237, 229, 221, 213, 205,
          197, 189, 181,
        ][w.box - 1],
      );
    }
    update(a) {
      super.update(a);
      switch (this.state) {
        case 0:
          if (this.system.Yd().dH(0))
            for (var b = this.$i.iterator(); b.ib(); )
              if (((a = b.next()), a.Yb(this.Lc.g))) {
                b = this.Gh;
                b != null && b.blur();
                this.Gh = a;
                this.Gh.focus();
                break;
              }
          if (this.system.Yd().Cb(0))
            for (a = this.$i.iterator(); a.ib(); )
              if (((b = a.next()), b.Yb(this.Lc.g))) {
                this.Ow = b;
                break;
              }
          this.system.Yd().Ee(0) &&
            this.Ow != null &&
            this.Ow.Yb(this.Lc.g) &&
            this.qF(this.Ow.fj);
          if (this.Gh != null) {
            a = new nh();
            b = this.$i;
            var c = this.Gh.fj - 1;
            a.y = (c / b.Wb) | 0;
            a.x = c % b.Wb;
            b = this.$i;
            c = this.Gh.fj - 1;
            a.y = (c / b.Wb) | 0;
            a.x = c % b.Wb;
          }
          break;
        case 1:
          a = this.lb(0.3);
          this.Ui().yf(1 - a);
          a == 1 && (this.Mr(), this.wa.sO(), (this.state = 2));
          break;
        case 2:
          this.wa.state == 0 && ((this.state = 3), this.wa.remove(), this.Qk());
      }
    }
    hd(a, b) {
      b instanceof ja
        ? a == 0 &&
          (this.ca.back.removeChild(this.wa.node), this.ca.Fa.R(this.wa.node))
        : (super.hd(a, b), a == 1 && b instanceof zb && this.wa.pa());
    }
    sb() {
      this.yd.y = this.size.y;
      this.rp.o(0);
      let a = this.ca.jf();
      !this.system.Ck && a > 0.7 && ((this.yd.y += 400), this.rp.o(200));
      super.sb();
      this.wa.layout();
      this.Nr(Ic, this).layout();
    }
    Xd() {
      this.kb(0) && this.Zb();
    }
    Zb() {
      switch (w.Oa) {
        case 1:
          this.Z(Gb);
          break;
        case 2:
          this.Z(yb);
          break;
        case 3:
          this.Z(Hb);
      }
    }
    Qk() {
      this.Z(ja);
    }
    Ea() {
      return "SelectLevelScene";
    }
  }
  Ib.i = !0;
  Ib.u = ea;
  Object.assign(Ib.prototype, { j: Ib });
  class wb extends Ib {
    constructor() {
      super();
    }
    qF(a) {
      w.bi(a);
      let b = this;
      N.ng("button:levelselection:level", function () {
        N.Qi(Zb(), function () {
          b.BE(a);
        });
      });
    }
    Qk() {
      this.Z(Rb);
    }
    Zb() {
      switch (w.Oa) {
        case 1:
          this.Z(uc);
          break;
        case 2:
          this.Z(cc);
          break;
        case 3:
          this.Z(dc);
      }
    }
    Ea() {
      return "FamobiSelectLevelScene";
    }
  }
  wb.i = !0;
  wb.u = Ib;
  Object.assign(wb.prototype, { j: wb });
  class ja extends ea {
    constructor() {
      super();
    }
    qc() {
      function a(d) {
        return (Wi[c] & d) > 0;
      }
      let b = [
        m.tg,
        m.ie,
        m.Ef,
        m.kh,
        m.Lq,
        m.dA,
        m.jh,
        m.si,
        m.Uz,
        m.RH,
        m.Vz,
        m.SH,
        m.Wz,
        m.bI,
        m.Xz,
        m.jI,
        m.Yz,
        m.nI,
        H.km,
      ];
      b.push([154, 151, 148, 145, 142][z.Ae]);
      b.push([155, 152, 149, 146, 143][z.Ae]);
      let c = w.box - 1;
      a(1) && (b.push(m.Rn), b.push(m.XH));
      a(2) && (b.push(m.Yn), b.push(m.hI));
      a(4) && (b.push(m.Vn), b.push(m.eI));
      a(8) && (b.push(m.Xn), b.push(m.gI));
      a(64) && (b.push(m.Sn), b.push(m.YH));
      a(128) && (b.push(m.Wn), b.push(m.fI));
      a(512) && (b.push(m.Qn), b.push(m.WH));
      a(2048) && (b.push(m.Oj), b.push(m.aI));
      a(4096) && (b.push(m.yu), b.push(m.VH));
      a(8192) && (b.push(m.xu), b.push(m.UH));
      a(16384) && (b.push(m.ao), b.push(m.mI));
      a(32768) && (b.push(m.zu), b.push(m.$H));
      a(65536) && (b.push(m.Zn), b.push(m.kI));
      a(131072) && (b.push(m.Un), b.push(m.cI));
      a(262144) && (b.push(m.Tn), b.push(m.ZH));
      if (a(524288) || H.Ye)
        (b.push(m.Pj), b.push(m.dI), b.push(m.Pn), b.push(m.TH));
      a(1048576) && (b.push(m.$n), b.push(m.lI));
      H.Ye && (b.push(m.Au), b.push(m.iI));
      b.push(
        [
          308, 300, 292, 284, 276, 268, 260, 250, 242, 234, 226, 218, 210, 202,
          194, 186, 178,
        ][c],
      );
      b.push(
        [
          309, 301, 293, 285, 277, 269, 261, 251, 243, 235, 227, 219, 211, 203,
          195, 187, 179,
        ][c],
      );
      b.push(
        [
          311, 303, 295, 287, 279, 271, 263, 255, 245, 237, 229, 221, 213, 205,
          197, 189, 181,
        ][c],
      );
      b.push(
        [
          312, 304, 296, 288, 280, 272, 264, 256, 246, 238, 230, 222, 214, 206,
          198, 190, 182,
        ][c],
      );
      b.push(
        [
          314, 306, 298, 290, 282, 274, 266, 258, 248, 240, 232, 224, 216, 208,
          200, 192, 184,
        ][c],
      );
      w.box == 8 && b.push(m.Fz);
      return b;
    }
    wk() {
      return ja.pk ? 1 : 0;
    }
    ua() {
      super.ua();
      ja.gs = -1;
      ja.fs = !1;
      ja.lw = !1;
      this.Bp = 0;
      this.In = this.system.zd && this.system.window.Qc.x == 1920;
      this.Dh.M(!1);
      this.kq = new bc(null, new F(1, 1, 1, 1));
      this.T = new xa(this);
      var a = H.Dj ? Aa.create(null, k.rM, k.sM) : Aa.create(null, k.nM, k.oM);
      this.buttons.push(a);
      this.node.R(a.l.B);
      a = Aa.create(null, k.tM, k.uM);
      this.buttons.push(a);
      this.node.R(a.l.B);
      H.Cj &&
        ((a = Aa.create(null, k.qM, k.pM, k.CA)),
        a.icon.M(!z.Nc),
        this.buttons.push(a),
        this.node.R(a.l.B),
        (a = Aa.create(null, k.wM, k.vM, k.CA)),
        a.icon.M(!z.Ld),
        this.buttons.push(a),
        this.node.R(a.l.B));
      H.qf && this.GQ();
      H.Ye && this.JQ();
      this.Je(!1);
      a = this.system.rm();
      Object.prototype.hasOwnProperty.call(a.J, "warp") && this.Je(!0);
      this.xb = new V();
      H.bG && this.node.R(this.xb.B);
      for (a = 0; a < 3; ) (++a, new C(this.xb, p.Za, ui).D());
      a = this.xb.pb(0).ha();
      var b = this.xb.pb(0);
      b.m(b.ya() - a);
      b = this.xb.pb(2);
      b.m(b.ya() + a);
      a = this.system.zd ? (this.In ? 40 : 80) : 60;
      this.oe = new V();
      b = new ta(this.oe, p.oc);
      b.tb(200, a);
      b.Va(this.Ab("LEVEL"));
      b.og();
      b = new ta(this.oe, p.oc);
      b.o(a * 0.9);
      b.tb(200, a);
      this.oz();
      this.node.R(this.oe.B);
      this.Tp = this.state = this.RB = this.Zi = this.op = 0;
      this.Vk = this.Ag = !1;
    }
    Xc() {
      super.Xc();
      this.wa != null && this.wa.remove();
      let a = 0,
        b = [
          47, 45, 43, 41, 39, 37, 35, 33, 31, 29, 27, 25, 23, 21, 19, 17, 15,
          13, 11, 9,
        ];
      for (; a < b.length; ) p.ka(b[a++]);
    }
    Vd() {
      super.Vd();
      let a = w.box - 1;
      p.K == null &&
        ((p.K = this.createTexture([154, 151, 148, 145, 142][z.Ae])),
        (p.Dv = this.createTexture(m.Uz)),
        (p.YN = this.createTexture(m.Vz)),
        (p.JV = this.createTexture(m.Yz)),
        (p.Sa = this.createTexture(m.Xz)),
        (p.Lh = this.createTexture(m.Wz)));
      p.ea == null && m.qb(m.Rn) && (p.ea = this.createTexture(m.Rn));
      p.Nd == null && m.qb(m.Yn) && (p.Nd = this.createTexture(m.Yn));
      p.jn == null && m.qb(m.Vn) && (p.jn = this.createTexture(m.Vn));
      p.uc == null && m.qb(m.Xn) && (p.uc = this.createTexture(m.Xn));
      p.me == null && m.qb(m.Sn) && (p.me = this.createTexture(m.Sn));
      p.kl == null && m.qb(m.Wn) && (p.kl = this.createTexture(m.Wn));
      p.nd == null && m.qb(m.Qn) && (p.nd = this.createTexture(m.Qn));
      p.Nb == null &&
        m.qb(m.Oj) &&
        ((p.Nb = this.createTexture(m.Oj)),
        w.box == 8 && (p.Vo = this.createTexture(m.Fz)));
      p.Ol == null && m.qb(m.yu) && (p.Ol = this.createTexture(m.yu));
      p.Td == null && m.qb(m.xu) && (p.Td = this.createTexture(m.xu));
      p.ad == null && m.qb(m.ao) && (p.ad = this.createTexture(m.ao));
      p.ne == null && m.qb(m.zu) && (p.ne = this.createTexture(m.zu));
      p.rl == null && m.qb(m.Zn) && (p.rl = this.createTexture(m.Zn));
      p.dj == null && m.qb(m.Un) && (p.dj = this.createTexture(m.Un));
      p.gap == null && m.qb(m.Tn) && (p.gap = this.createTexture(m.Tn));
      p.Xf == null && m.qb(m.Pj) && (p.Xf = this.createTexture(m.Pj));
      p.Zc == null && m.qb(m.$n) && (p.Zc = this.createTexture(m.$n));
      p.Sd == null && m.qb(m.Au) && (p.Sd = this.createTexture(m.Au));
      p.Ul == null && m.qb(m.Pn) && (p.Ul = this.createTexture(m.Pn));
      p.mr == null &&
        ((p.mr = this.createTexture(
          [
            308, 300, 292, 284, 276, 268, 260, 250, 242, 234, 226, 218, 210,
            202, 194, 186, 178,
          ][a],
        )),
        (p.ck = this.createTexture(
          [
            311, 303, 295, 287, 279, 271, 263, 255, 245, 237, 229, 221, 213,
            205, 197, 189, 181,
          ][a],
        )),
        (p.rv = this.createTexture(
          [
            314, 306, 298, 290, 282, 274, 266, 258, 248, 240, 232, 224, 216,
            208, 200, 192, 184,
          ][a],
        )));
    }
    bb() {
      super.bb();
      ja.pk = !1;
      let a = this;
      switch (this.state) {
        case 0:
          this.oT();
          this.T.show();
          this.wa = Sa.instance;
          if (this.wa == null) {
            this.Je(!0);
            this.ba(1);
            break;
          }
          this.ra(this.wa);
          this.wa.UG(function () {
            a.wa.pa();
            a.Je(!0);
          });
          this.iy();
          this.ba(1);
          break;
        case 4:
          this.Cy(!0);
          if (this.caller.Ka.skip) {
            this.Vs();
            break;
          }
          this.ba(1);
          this.buttons[1].Kd(!1);
          break;
        case 9:
          (this.T.pa(),
            (this.T = new xa(this)),
            this.T.show(),
            this.T.update(0.016666666666666666),
            this.wa.UG(function () {
              a.wa.pa();
              a.Je(!0);
            }),
            this.ba(1),
            this.Je(!1),
            this.iy(),
            this.oz(),
            this.dG());
      }
    }
    Ox(a) {
      this.xb
        .pb(a - 1)
        .sa()
        .play(Xi);
      this.Tp++;
    }
    Lx() {
      this.Ag = !0;
      new C(this.xb, p.Za, ui).D();
      let a = this.xb.pb(0).ha(),
        b = -1.5 * a,
        c = 0;
      for (; c < 4; ) (this.xb.pb(c++).m(b), (b += a));
      this.xb.pb(3).sa().play(Xi);
    }
    Vs() {
      this.Je(!1);
      this.on();
      this.Vk = !1;
    }
    OS() {
      w.KF(Math.max(w.yw(), this.Tp), this.Ag);
      x.Xo(x.af);
      this.ba(5);
      this.rk();
    }
    NS() {
      this.Je(!1);
      this.on();
      this.Vk = !1;
    }
    vE() {
      if (this.state == 1) {
        if (ja.Km != -1 && (this.Bp++, this.Bp == ja.Km)) {
          this.Bp = 0;
          let a = 1,
            b = this.buttons.length;
          for (; a < b; ) this.buttons[a++].Kd(!0);
          this.ba(6);
          this.rk();
          return;
        }
        this.pF();
      }
    }
    rk() {
      this.wa = this.add(Sa);
      this.wa.Ky();
      this.node.R(this.wa.node);
      this.wa.fw();
    }
    GQ() {
      this.Dd = new Ub();
      this.buttons.push(this.Dd);
      this.node.R(this.Dd.l.B);
    }
    JQ() {
      this.Be = new Vb();
      this.buttons.push(this.Be);
      this.node.R(this.Be.l.B);
    }
    on() {
      H.qf && this.Dd.reset();
      H.Ye && this.Be.reset();
    }
    Je(a) {
      let b = 1,
        c = this.buttons.length;
      for (; b < c; ) this.buttons[b++].Kd(a ? !1 : !0);
    }
    pF() {
      this.uf();
    }
    uf() {
      this.state != 1 ||
        this.T.qn ||
        ((this.T.qn = !0),
        this.iy(),
        this.node.R(this.kq.B),
        this.kq.X(0),
        this.Je(!1),
        this.on(),
        this.ba(2));
    }
    Ty() {
      this.eg(Kc);
    }
    ba(a) {
      this.state = a;
      this.time = 0;
      a == 1 && ((this.Vk = !0), (this.wt = 0));
    }
    iy() {
      this.Ag = !1;
      this.Tp = 0;
      this.xb.vk() == 4 && this.xb.pb(3).G();
      var a = this.xb.pb(0).ha();
      this.xb.pb(0).m(-a);
      this.xb.pb(1).m(0);
      this.xb.pb(2).m(a);
      for (a = 0; a < 3; ) this.xb.pb(a++).Ib(ui);
    }
    dG() {
      this.Zi = this.op = 0;
      this.oe.M(!0);
    }
    oz() {
      let a = this.oe.pb(1);
      a.tc(100);
      a.Va("" + w.box + " - " + w.level);
      a.og();
    }
    Cy(a) {
      this.xb.M(a);
      this.buttons[1].M(a);
      this.buttons[2].M(a);
      !a || H.Dj || H.Bn || this.buttons[1].M(a);
      H.Cj && (this.buttons[3].M(a), this.buttons[4].M(a));
      H.qf && this.Dd.M(a);
      H.Ye && this.Be.M(a);
    }
    update(a) {
      super.update(a);
      if (this.system.Rf().Cb(110)) {
        a = zj[w.box - 1];
        var b = 0;
        let c = 0;
        for (; b <= w.level && !((b = a[++this.RB]), c++ > 1e4); );
        this.RB != a.length &&
          (new Nd("tut").save(b == null ? "null" : "" + b),
          w.bi(b),
          this.oz(),
          this.uf());
      } else if (this.system.Rf().Cb(119)) this.T.Ri();
      else {
        this.Zi += a;
        switch (this.op) {
          case 0:
            b = Math.min(this.Zi / 0.5, 1);
            b == 1 && ((this.op = 1), (this.Zi = 0));
            this.oe.X(za.dg()(b));
            break;
          case 1:
            this.Zi > 1 && ((this.op = 2), (this.Zi = 0));
            break;
          case 2:
            ((b = Math.min(this.Zi / 0.5, 1)),
              b == 1 && ((this.op = 3), this.oe.M(!1)),
              this.oe.X(za.dg()(1 - b)));
        }
        ja.Mc = this.state == 1;
        switch (this.state) {
          case 1:
            this.YC();
            this.T.update(a);
            this.ET(a);
            ja.gs != -1 &&
              (x.stop(x.af),
              (this.Vk = !1),
              this.on(),
              this.Je(!1),
              (a = w.vC(ja.gs)),
              (this.Ka.box = a[0]),
              (this.Ka.level = a[1]),
              (ja.gs = -1),
              this.sF(),
              (this.state = 9));
            ja.fs &&
              ((ja.fs = !1),
              x.stop(x.af),
              (this.Vk = !1),
              this.on(),
              this.Je(!1),
              this.rk(),
              this.ba(8));
            ja.lw &&
              ((ja.lw = !1),
              (a = ja.Km),
              (ja.Km = 1),
              (this.Bp = 0),
              this.vE(),
              (ja.Km = a));
            break;
          case 2:
            a = this.lb(0.15);
            this.kq.X(a);
            a == 1 &&
              (this.T.pa(), (this.T = new xa(this)), this.T.show(), this.ba(3));
            break;
          case 3:
            this.T.update(a);
            a = this.lb(0.2);
            this.kq.X(1 - a);
            a == 1 &&
              (this.node.removeChild(this.kq.B),
              this.ba(1),
              this.Je(!0),
              this.dG());
            break;
          case 4:
            this.T.update(0);
            break;
          case 5:
            this.T.update(a);
            this.wa != null && this.wa.state == 7 &&
              ((this.wa.state = 0), (this.state = 9), this.cG());
            break;
          case 6:
            this.T.update(a);
            this.wa.state == 7 &&
              ((this.state = 9), (this.Ka.count = this.Bp), this.eG());
            break;
          case 7:
            this.T.update(a);
            break;
          case 8:
            this.T.update(a);
            this.wa.state == 7 &&
              ((this.wa.state = 0), (this.state = 9), this.Z(db));
            break;
          case 10:
            this.wa.state == 7 &&
              ((this.wa.state = 0), this.wa.ko(), (this.state = 11));
            break;
          case 11:
            this.wa.state == 0 && ((this.state = 9), this.nB());
        }
      }
    }
    Zq(a) {
      super.Zq(a);
      this.resize();
    }
    Xd() {
      if (this.state != 7) {
        var a = this.system.Rf().Cb(112);
        if (this.system.Rf().Cb(173) || this.system.Rf().Cb(461)) a = !0;
        if ((H.Dj || H.Bn) && (this.kb(1) || a)) {
          if (this.state != 1) {
            this.buttons[1].Kd(!1);
            return;
          }
          x.Aj(x.af, 0);
          this.T.wm();
          this.YC();
          if (!H.Dj) {
            x.stop(x.af);
            this.Vk = ja.fs = !1;
            this.on();
            this.Je(!1);
            this.rk();
            this.state = 10;
            return;
          }
          this.Cy(!1);
          this.ba(4);
          this.mF();
        }
        this.kb(2) && this.oF();
        H.Cj &&
          (this.kb(3) && this.sl(this.buttons[3]),
          this.kb(4) && this.tl(this.buttons[4]));
        this.T.Bm ||
          this.T.mf ||
          (H.qf &&
            this.kb(H.Cj ? 5 : 3) &&
            (Ub.fg == 0
              ? this.lF()
              : (this.Dd.use(),
                H.Ye && (this.Be.cn = !0),
                this.T.xN(),
                z.Fp ||
                  ((z.Fp = !0),
                  z.flush(),
                  (a = new Wd(Eb.get("MAGNET_TIP"))),
                  this.node.R(a.l.B),
                  this.ra(a)))),
          H.Ye &&
            this.kb(H.Cj ? 6 : 4) &&
            (Vb.fg == 0
              ? this.rF()
              : (this.Be.use(),
                H.qf && (this.Dd.cn = !0),
                this.T.yN(),
                z.wq ||
                  ((z.wq = !0),
                  z.flush(),
                  (a = new Wd(Eb.get("ANTIMAGNET_TIP"))),
                  this.node.R(a.l.B),
                  this.ra(a)))));
      }
    }
    hd(a, b) {
      b instanceof zb &&
        (this.Dh.M(!0), a == 1 && b instanceof zb && Sa.instance.pa());
      b instanceof db &&
        (this.Dh.M(!0), a == 1 && b instanceof db && Sa.instance.pa());
      b instanceof Lc && this.Dh.M(!0);
      super.hd(a, b);
    }
    dc(a) {
      return a instanceof Kc ? 0 : super.dc(a);
    }
    jd(a) {
      if (this.state != 0) {
        let b = this.T;
        b != null && b.jd(a);
      }
      super.jd(a);
    }
    nB() {
      this.Z(Ib);
    }
    ET(a) {
      !this.Vk ||
        (!H.qf && !H.Ye) ||
        this.T.Bm ||
        this.T.mf ||
        ((this.wt += a),
        this.wt >= 1 &&
          ((this.wt = 0),
          H.qf && this.Dd.zF(this.aD()),
          H.Ye && this.Be.zF(this.bD())));
    }
    aD() {
      return !0;
    }
    bD() {
      return !0;
    }
    resize() {
      var a = this.system.window.hp(),
        b = window.devicePixelRatio,
        c = b < 1 ? 1 : b > 2 ? 2 : b,
        d = this.system.window.$p,
        e = this.ca.jf();
      b = e > 1;
      c = c <= 1 ? 0.05 : c <= 1.25 ? 0.06 : 0.07;
      this.system.Ck &&
        (c = (c =
          Math.min(a.w, a.J) <= 800 && Math.max(a.w, a.J) <= 1280 && d <= 2)
          ? 0.08
          : 0.04);
      this.system.zd && (c = 0.04);
      c = Math.max(a.w, a.J) * c * d;
      this.system.Ck || (c < 70 && (c = 70));
      b && (c *= 0.9);
      let f = 30;
      var g = 0;
      this.system.zd && ((g = 25 * d), (f = 60));
      this.xb.I(c / 150);
      var h = 0;
      this.system.zd && (h = 20);
      this.xb.m(a.w / 2);
      var l = this.system.zd ? (this.In ? 0.75 : 1.4) : 1,
        n = this.buttons[1];
      H.Dj || H.Bn
        ? (n.l.I((c / n.lc.y) * l), n.pq(a.w - h - g), n.o(0))
        : n.M(!1);
      d = this.buttons[2];
      d.l.I((c / d.lc.y) * l);
      H.Dj || H.Bn ? d.pq(n.ya() - h) : d.pq(a.w - h);
      d.o(0);
      n = null;
      if (H.Cj) {
        var q = this.buttons[3];
        q.l.I((c / q.lc.y) * l);
        q.pq(d.ya() - h);
        q.o(0);
        n = this.buttons[4];
        n.l.I((c / n.lc.y) * l);
        n.pq(q.ya() - h);
        n.o(0);
      }
      H.qf && ((q = (c / this.Dd.lc.y) * l), this.Dd.m(g), this.Dd.l.I(q));
      H.Ye &&
        (this.Be.l.I((c / this.Dd.lc.y) * l),
        H.qf ? this.Be.m(this.Dd.ya() + this.Dd.ha() + h) : this.Be.m(g));
      h = 1;
      for (l = this.buttons.length; h < l; ) this.buttons[h++].l.o(g);
      this.xb.o(d.Xa() + d.la() / 2);
      e < 0.8 &&
        ((e =
          H.qf && H.Ye
            ? this.Be.Hw()
            : H.qf
              ? this.Dd.Hw()
              : H.Ye
                ? this.Be.Hw()
                : 0),
        (g = H.Cj ? n.ya() : d.ya()),
        this.xb.m(e + (g - e) / 2),
        g - e < this.xb.ha() &&
          ((e = this.xb), e.o(e.Xa() + this.xb.la() * 1.25)));
      this.oe.I(c / 100);
      this.oe.m(f);
      this.oe.o(a.J - this.oe.la() * 1.1 - f);
      this.system.Ck &&
        b &&
        ((a = this.oe), a.m(a.ya() + 20), (a = this.oe), a.o(a.Xa() - 20));
    }
    lF() {
      this.ba(7);
      nc.delay(M(this, this.wE), 1e3);
    }
    wE() {
      this.Dd.fill(H.cS);
      x.play(x.xA);
      this.T.wm();
      this.ba(1);
    }
    RS() {
      this.T.wm();
      this.Dd.reject();
      this.ba(1);
    }
    rF() {
      this.ba(7);
      nc.delay(M(this, this.DE), 1e3);
    }
    DE() {
      this.Be.fill(H.wV);
      x.play(x.xA);
      this.T.wm();
      this.ba(1);
    }
    aT() {
      this.T.wm();
      this.Be.reject();
      this.ba(1);
    }
    mF() {
      this.Ty();
    }
    sF() {
      this.Z(Lc);
    }
    sl(a) {
      z.Nc = !z.Nc;
      z.flush();
      a.icon.M(!z.Nc);
      a.Kd(!1);
      a.ye = 0;
      this.system.ab.xf(z.Nc ? 1 : 0);
    }
    tl(a) {
      z.Ld = !z.Ld;
      z.flush();
      a.icon.M(!z.Ld);
      a.Kd(!1);
      a.ye = 0;
    }
    oF() {
      this.uf();
    }
    YC() {
      let a = this.system.Yd(),
        b = this.system.Gw(),
        c = 0,
        d = Aj;
      for (; c < d.length; ) {
        let f = d[c];
        ++c;
        var e = a.position[f];
        e = new Na(e.x, e.y);
        let g = b.mQ(f);
        a.Cb(f) && this.T.EV(e, g);
        a.dH(f) && this.T.FV(e, g);
        a.Ee(f) && this.T.GV(e, g);
      }
    }
    cG() {
      this.Ka.stars = this.Tp;
      this.Ka.blueStar = this.Ag;
      this.eg(ld);
    }
    eG() {
      this.eg(md);
    }
    Ea() {
      return "LevelScene";
    }
  }
  ja.i = !0;
  ja.u = ea;
  Object.assign(ja.prototype, { j: ja });
  class Rb extends ja {
    constructor() {
      super();
      ja.Km = 1;
      this.lz = !1;
    }
    nB() {
      this.Z(wb);
    }
    aD() {
      return N.zD("button:powerup:magnet");
    }
    bD() {
      return N.zD("button:powerup:telekinesis");
    }
    lF() {
      this.ba(7);
      let a = this;
      N.hG("button:powerup:magnet", function (b) {
        b ? a.wE() : a.RS();
      });
    }
    rF() {
      this.ba(7);
      let a = this;
      N.hG("button:powerup:telekinesis", function (b) {
        b ? a.DE() : a.aT();
      });
    }
    Vs() {
      w.level == 25 &&
        z.ae[w.box - 1][w.level] == null &&
        Eb.get(
          "BOX1_LABEL BOX2_LABEL BOX3_LABEL BOX4_LABEL BOX5_LABEL BOX6_LABEL BOX7_LABEL BOX8_LABEL BOX9_LABEL BOX10_LABEL BOX11_LABEL BOX12_LABEL BOX13_LABEL BOX14_LABEL BOX15_LABEL BOX16_LABEL BOX17_LABEL".split(
            " ",
          )[w.box - 1],
        );
      this.lz = !0;
      super.Vs();
    }
    tl(a) {
      super.tl(a);
      N.Sr(!z.Nc && !z.Ld);
    }
    sl(a) {
      super.sl(a);
      N.Sr(!z.Nc && !z.Ld);
    }
    mF() {
      if (H.Dj) N.DP(M(this, this.Ty));
      else {
        var a = this,
          b = qf;
        N.rC(function () {
          a.eg(b);
        });
      }
    }
    Ty() {
      this.eg(rf);
    }
    oF() {
      let a = this;
      N.ng("button:game:restart", function () {
        N.Qi(Zb(), function () {
          a.Cy(!0);
          a.uf();
        });
      });
    }
    pF() {
      N.Qi(Zb(), M(this, this.uf));
    }
    sF() {
      this.Z(sf);
    }
    Ox(a) {
      super.Ox(a);
      N.pU(a, Zb());
    }
    cG() {
      this.Ka.stars = this.Tp;
      this.Ka.blueStar = this.Ag;
      this.eg(tf);
    }
    rk() {
      let a = this;
      this.state == 5 && this.lz
        ? (N.rU(w.gp(), Zb()),
          N.BP(function () {
            a.lz = !1;
            a.rk();
          }))
        : super.rk();
    }
    eG() {
      let a = this,
        b = uf;
      N.CP(function () {
        a.eg(b);
      });
    }
    Ea() {
      return "FamobiLevelScene";
    }
  }
  Rb.i = !0;
  Rb.u = ja;
  Object.assign(Rb.prototype, { j: Rb });
  class ld extends ea {
    constructor() {
      super();
    }
    qc() {
      return [m.tg, m.ie, m.oi, m.Ef, m.kh, m.jh];
    }
    Ph() {
      return !1;
    }
    ua() {
      super.ua();
      this.cf(600, 900);
      var a = this.caller.Ka.stars;
      this.Rc = this.caller.Ka.blueStar;
      var b = this.Zr(
          "LEVEL_CLEARED1",
          "LEVEL_CLEARED2",
          "LEVEL_CLEARED3",
          "LEVEL_CLEARED4",
        )[a],
        c = new ta(this.ta, p.oc);
      c.tb(600, 60);
      c.Va(b);
      c.Hb(0);
      c.og();
      c.o(140);
      b = [];
      for (c = 0; c < 4; ) (++c, b.push(new C(this.ta, p.Za, k.fN)));
      this.eb = b;
      b = 0;
      for (c = this.eb; b < c.length; ) c[b++].D();
      this.Rc
        ? ((this.xG = [0.9, 1, 1, 0.9]),
          this.eb[0].m(142),
          this.eb[0].o(337),
          this.eb[1].m(244),
          this.eb[1].o(316),
          this.eb[2].m(360),
          this.eb[2].o(316),
          this.eb[3].m(461),
          this.eb[3].o(337))
        : ((this.xG = [0.9, 1, 0.9]),
          this.eb[0].m(180),
          this.eb[0].o(291),
          this.eb[1].m(300),
          this.eb[1].o(273),
          this.eb[2].m(420),
          this.eb[2].o(291));
      for (b = 0; b < 4; ) ((c = b++), this.eb[c].X(0), this.eb[c].I(0));
      for (b = 0; b < a; ) this.eb[b++].Ib(k.eN);
      this.Rc && this.eb[3].Ib(k.eM);
      a = new C(this.ta, p.Za, k.NM);
      a.m(190);
      a.o(400);
      this.hw = w.zQ();
      a = new Qd();
      a.m(59);
      a.o(640);
      this.ta.appendChild(a.l);
      this.buttons.push(a);
      this.ra(a);
      a = Aa.create(null, k.Bl, k.Cl, k.JA);
      a.m(219);
      a.o(640);
      this.ta.appendChild(a.l);
      this.buttons.push(a);
      this.ra(a);
      a = Aa.create(null, k.Bl, k.Cl, k.MA);
      a.m(379);
      a.o(640);
      this.ta.appendChild(a.l);
      this.buttons.push(a);
      this.ra(a);
      a = Aa.create(null, k.Ou, k.Pu, k.VM);
      a.m(188.5);
      a.o(750);
      this.ta.appendChild(a.l);
      this.buttons.push(a);
      this.ra(a);
      a.focus();
      w.box == 17 && w.level == 25 && a.M(!1);
      this.hw ? this.ba(0) : this.ba(1);
    }
    bb() {
      super.bb();
      if (
        this.caller instanceof ja &&
        (x.play(x.XL), w.HN() && w.box == 17 && w.level == 25)
      ) {
        z.Ri = !0;
        z.flush();
        this.ba(7);
        return;
      }
      this.caller instanceof Xd
        ? ((z.Ri = !0), z.flush(), this.ba(7))
        : this.caller instanceof nd
          ? this.ba(1)
          : this.hw &&
            ((this.hw = !1),
            (this.Ka.pictureIndex = null),
            (this.Ka.available = !0),
            (this.Ka.ui = !0),
            this.eg(nd));
    }
    sb() {
      super.sb();
      let a = Sa.instance;
      a != null && a.layout();
    }
    update(a) {
      super.update(a);
      switch (this.state) {
        case 1:
          this.time > 0.25 && (this.Qt(1), this.ba(2));
          break;
        case 2:
          this.time > 0.25 && (this.ba(3), this.Qt(2));
          break;
        case 3:
          this.time > 0.25 && (this.ba(4), this.Qt(3));
          break;
        case 4:
          this.time > 0.25 && (this.Rc ? (this.ba(5), this.Qt(4)) : this.ba(6));
          break;
        case 5:
          this.time > 0.25 && this.ba(6);
          break;
        case 6:
          if (this.time < 1) break;
          this.ra(new kd(this.buttons[4].l, 2));
          this.ba(7);
          break;
        case 8:
          a = this.lb(0.3);
          this.Ui().yf(1 - a);
          a == 1 && (this.Mr(), Sa.instance.ko(), this.ba(9));
          break;
        case 9:
          Sa.instance.state == 0 && (this.ba(10), this.Zb());
      }
    }
    ee(a) {
      this.Ui().yf(a);
    }
    hd(a) {
      this.Ui().yf(1 - a);
    }
    Xd() {
      this.state == 0 ||
        this.state > 7 ||
        (this.kb(1) && this.qq(),
        this.kb(2) && this.gq(),
        this.kb(3) && this.hq(),
        this.kb(4) &&
          (w.Pl()
            ? ((this.Ka.boxComplete = !0), this.gE())
            : (w.UF(), this.iE())));
    }
    qq() {
      this.Z(Gc);
    }
    Qt(a) {
      --a;
      this.eb[a].Vb().alpha(1, 0.3);
      this.eb[a].Vb().scale(this.xG[a], 0.3, za.lv(0.1));
    }
    gE() {
      w.Oa == 1 ? this.Z(Gb) : w.Oa == 2 ? this.Z(yb) : w.Oa == 3 && this.Z(Hb);
    }
    iE() {
      this.cg();
    }
    hq() {
      this.uf();
    }
    gq() {
      this.bq();
    }
    bq() {
      this.ba(8);
    }
    uf() {
      this.Ka.restart = !0;
      this.cg();
    }
    ba(a) {
      this.state = a;
      this.time = 0;
    }
    Zb() {
      w.Pl()
        ? ((this.Ka.boxComplete = !0),
          w.Oa == 1
            ? this.Z(Gb)
            : w.Oa == 2
              ? this.Z(yb)
              : w.Oa == 3 && this.Z(Hb))
        : this.Z(Ib);
    }
    Ea() {
      return "LevelClearedOverlay";
    }
  }
  ld.i = !0;
  ld.u = ea;
  Object.assign(ld.prototype, { j: ld });
  class tf extends ld {
    constructor() {
      super();
    }
    ua() {
      super.ua();
      this.tm();
    }
    ba(a) {
      super.ba(a);
      let b = this;
      a == 6 &&
        nc.delay(function () {
          N.ng("break:result", M(b, b.dV));
        }, 1e3);
    }
    hq() {
      this.tm();
      let a = this;
      N.ng("button:pass:restart", function () {
        N.Qi(Zb(), M(a, a.uf));
      });
    }
    gE() {
      w.Oa == 1 ? this.Z(uc) : w.Oa == 2 ? this.Z(cc) : w.Oa == 3 && this.Z(dc);
    }
    iE() {
      this.tm();
      let a = this;
      N.ng("button:pass:next", function () {
        N.Qi(Zb(), function () {
          a.cg(null);
        });
      });
    }
    gq() {
      this.tm();
      N.ng("button:pass:quit", M(this, this.bq));
    }
    Zb() {
      w.Pl()
        ? ((this.Ka.boxComplete = !0),
          w.Oa == 1
            ? this.Z(uc)
            : w.Oa == 2
              ? this.Z(cc)
              : w.Oa == 3 && this.Z(dc))
        : this.Z(wb);
    }
    qq() {
      this.Z(Td);
    }
    Ea() {
      return "FamobiLevelClearedOverlay";
    }
  }
  tf.i = !0;
  tf.u = ld;
  Object.assign(tf.prototype, { j: tf });
  class md extends ea {
    constructor() {
      super();
    }
    qc() {
      return [m.tg, m.ie, m.oi, m.Ef, m.kh, m.jh];
    }
    Ph() {
      return !1;
    }
    ua() {
      super.ua();
      this.cf(600, 900);
      var a = this.Ab("LEVEL_FAILED"),
        b = new ta(this.ta, p.oc);
      b.tb(600, 160);
      b.lg(!0);
      b.tc(60);
      b.Va(a);
      b.Hb(0);
      b.o(140);
      a = this.caller.Ka.count;
      b = 0;
      a > 3 && (b = 1);
      a > 5 && (b = 2);
      a = new C(this.ta, p.Za, [k.OM, k.PM, k.QM][b]);
      a.m(190);
      a.o(320);
      a = Aa.create(null, k.Bl, k.Cl, k.JA);
      a.m(139);
      a.o(560);
      this.ta.appendChild(a.l);
      this.buttons.push(a);
      this.ra(a);
      a = Aa.create(null, k.Bl, k.Cl, k.MA);
      a.m(299);
      a.o(560);
      this.ta.appendChild(a.l);
      this.buttons.push(a);
      this.ra(a);
      a.focus();
      this.state = 0;
    }
    sb() {
      super.sb();
      let a = Sa.instance;
      a != null && a.layout();
    }
    update(a) {
      super.update(a);
      switch (this.state) {
        case 1:
          a = this.lb(0.3);
          this.Ui().yf(1 - a);
          a == 1 && (this.Mr(), Sa.instance.ko(), this.ba(2));
          break;
        case 2:
          Sa.instance.state == 0 && (this.ba(3), this.Zb());
      }
    }
    ee(a) {
      this.Ui().yf(a);
    }
    hd(a) {
      this.Ui().yf(1 - a);
    }
    Xd() {
      this.state > 0 || (this.kb(1) && this.gq(), this.kb(2) && this.hq());
    }
    hq() {
      this.uf();
    }
    gq() {
      this.bq();
    }
    bq() {
      this.ba(1);
      this.time = 0;
    }
    uf() {
      this.Ka.restart = !0;
      this.cg();
    }
    ba(a) {
      this.state = a;
    }
    Zb() {
      w.Pl()
        ? ((this.Ka.boxComplete = !0),
          w.Oa == 1
            ? this.Z(Gb)
            : w.Oa == 2
              ? this.Z(yb)
              : w.Oa == 3 && this.Z(Hb))
        : this.Z(Ib);
    }
    Ea() {
      return "LevelLostOverlay";
    }
  }
  md.i = !0;
  md.u = ea;
  Object.assign(md.prototype, { j: md });
  class uf extends md {
    constructor() {
      super();
    }
    hq() {
      this.tm();
      let a = this;
      N.ng("button:fail:restart", function () {
        N.Qi(Zb(), M(a, a.uf));
      });
    }
    gq() {
      this.tm();
      N.ng("button:fail:quit", M(this, this.bq));
    }
    Zb() {
      w.Pl()
        ? ((this.Ka.boxComplete = !0),
          w.Oa == 1
            ? this.Z(uc)
            : w.Oa == 2
              ? this.Z(cc)
              : w.Oa == 3 && this.Z(dc))
        : this.Z(wb);
    }
    Ea() {
      return "FamobiLevelLostOverlay";
    }
  }
  uf.i = !0;
  uf.u = md;
  Object.assign(uf.prototype, { j: uf });
  class Kc extends ea {
    constructor() {
      super();
    }
    ua() {
      super.ua();
      this.rc = new bc(null, new F(0, 0, 0, 1));
      this.rc.X(0.5);
      this.node.R(this.rc.B);
      this.cf(550, 550);
      var a = Aa.create(null, k.FA, k.GA, k.MM);
      this.buttons.push(a);
      a.m(133.5);
      a.o(200);
      this.ta.appendChild(a.l);
      this.ra(a);
      a = Aa.create(null, k.FA, k.GA, k.WM);
      this.buttons.push(a);
      a.m(293.5);
      a.o(200);
      this.ta.appendChild(a.l);
      this.ra(a);
      a.focus();
      H.Bn ||
        (this.buttons[1].M(!1),
        this.buttons[2].m(275 - this.buttons[2].ha() / 2));
      this.state = 0;
      this.system.ab.xf(0);
      x.stop(x.Rj);
      x.stop(x.af);
    }
    hd() {}
    dc(a) {
      return a instanceof Ib ? super.dc(a) : 0;
    }
    Xd() {
      if (this.state == 0) {
        this.kb(1) && this.nF();
        var a = !1;
        this.system.Rf().Cb(415) && (a = !0);
        this.system.Rf().Cb(461) ? this.hy() : (this.kb(2) || a) && this.hy();
      }
    }
    nF() {
      this.YE();
    }
    hy() {
      this.tF();
    }
    tF() {
      this.system.ab.xf(z.Nc ? 1 : 0);
      x.Aj(x.af, 1);
      this.cg();
    }
    YE() {
      x.stop(x.af);
      this.wa = this.add(Sa);
      this.node.R(this.wa.node);
      this.wa.Ky();
      this.wa.fw();
      this.state = 1;
    }
    jG() {
      this.Z(Ib);
    }
    update(a) {
      super.update(a);
      switch (this.state) {
        case 1:
          this.wa.state == 7 &&
            ((this.wa.state = 0), this.wa.ko(), (this.state = 2));
          break;
        case 2:
          this.wa.state == 0 && ((this.state = 3), this.jG());
      }
    }
    Ph() {
      return !1;
    }
    Ea() {
      return "PauseOverlay";
    }
  }
  Kc.i = !0;
  Kc.u = ea;
  Object.assign(Kc.prototype, { j: Kc });
  class rf extends Kc {
    constructor() {
      super();
    }
    hy() {
      let a = this;
      N.ng("button:pause:resume", function () {
        N.FP(M(a, a.tF));
      });
    }
    nF() {
      let a = this;
      N.ng("button:pause:quit", function () {
        N.rC(M(a, a.YE));
      });
    }
    jG() {
      this.Z(wb);
    }
    Ea() {
      return "FamobiPauseOverlay";
    }
  }
  rf.i = !0;
  rf.u = Kc;
  Object.assign(rf.prototype, { j: rf });
  class Gc extends ea {
    constructor() {
      super();
    }
    qc() {
      return [m.Ku, m.IK, H.td ? m.qA : m.Iu];
    }
    qh() {
      this.Ha = new C(null, this.createTexture(H.td ? m.qA : m.Iu));
      this.node.R(this.Ha.B);
    }
    Vd() {
      super.Vd();
      this.FG = this.createTexture(m.Ku);
    }
    ua() {
      super.ua();
      z.Tk = 0;
      z.flush();
      this.qh();
      this.cf(600, 900);
      this.FN();
      this.Yj();
      var a = new ta(this.ta, p.oc);
      a.tb(600, 60);
      a.Va(this.Ab("OMNOM_DRAWINGS"));
      a.Hb(0);
      a.og();
      a.o(20);
      a = new ta(this.ta, p.Oi);
      a.tb(600, 40);
      a.Va(this.Ab("DRAWINGS_TOTAL", ra.Ec(w.bQ())));
      a.Hb(0);
      a.og();
      a.o(80);
      this.Hl();
      this.If = new C(null, this.FG, "artist");
      this.scroll = new vf(this.Gj, 0, 600, 0);
      this.scroll.offsetX = this.GG / 2;
      this.time = this.state = 0;
    }
    bb() {
      super.bb();
      this.If.B.parent == null && this.ca.Fa.R(this.If.B);
    }
    sb() {
      super.sb();
      let a = this.kd;
      a.I(a.Wa * 1.1);
    }
    Xc() {
      super.Xc();
      p.ka(m.Ku);
      p.ka(m.Iu);
    }
    FN() {
      this.Gj = new V("thumbs", this.ta);
      this.Gj.o(0);
      for (
        var a = [
            0.77, -2.45, 470, 695, 0.85, 0.2, 854, 627, 0.86, 0.2, 1260, 647,
            0.78, 1, 1630, 663, 0.86, 4.7, 2057, 642, 0.8, -2, 2477, 722, 0.8,
            -5, 2924, 602, 0.77, 0, 459, 1161, 0.85, -0.48, 854, 1147, 0.78,
            5.11, 1253, 1137, 0.82, 0.11, 1680, 1147, 0.7, 0, 2121, 1188, 0.75,
            1, 2526, 1264, 0.75, -2, 2933, 1162, 0.71, -3, 700, 1635, 0.66,
            -0.31, 1091, 1611, 0.66, 0.51, 1481, 1606, 0.7, 6.66, 1832, 1665,
            0.66, 0, 2172, 1627, 0.65, -5, 2586, 1680, 0.75, -2, 2855, 1624,
          ],
          b = 0;
        b < a.length;
      ) {
        var c = a[b++] * 0.8 * 1.5;
        let e = a[b++],
          f = (a[b++] * 0.8) / 2 - 90,
          g = (a[b++] * 0.8) / 2,
          h = b >> 2;
        var d = void 0;
        w.yD(h)
          ? ((d = "pics/"), h < 10 && (d = "pics/0"), (d += h))
          : (d = "missing");
        d = new C(this.Gj, this.FG, d);
        d.Qy(h == null ? "null" : "" + h);
        d.D();
        d.I(c);
        d.na(e);
        d.m(f);
        d.o(g);
      }
      a = this.Gj.getBounds();
      this.GG = a.C - a.A;
      a = this.Gj.ha();
      for (b = this.Gj.iterator(); b.ib(); )
        ((c = b.next()), c.m(c.ya() - a / 2));
    }
    update(a) {
      super.update(a);
      this.ca.ha() / this.ta.Wa - this.GG < -50
        ? this.scroll.update(a)
        : this.Gj.m(300);
      this.If.m(this.ca.ha() - this.If.ha());
      switch (this.state) {
        case 0:
          a = this.lb(0.2);
          this.If.o(this.ca.la() - this.If.la() * a);
          a == 1 && (this.state = 1);
          break;
        case 1:
          this.If.o(this.ca.la() - this.If.la());
          break;
        case 2:
          ((a = this.lb(0.2)),
            this.If.o(this.ca.la() - this.If.la() * (1 - a)),
            a == 1 && (this.If.M(!1), (this.state = 3), this.Zb()));
      }
      this.We == "Running" &&
        ((a = this.system.Yd()),
        a.Cb(0) && (this.Pv = a.position[0].x),
        !a.Ee(0) ||
          Math.abs(a.position[0].x - this.Pv) > 5 ||
          ((a = new oh()),
          this.Gj.Yb(this.Lc.g, a) &&
            ((a = ra.parseInt(a.get(0).name)),
            (this.Ka.pictureIndex = a),
            (this.Ka.available = w.yD(a)),
            (this.Ka.ui = !1),
            this.eg(nd))));
    }
    Xd() {
      this.kb(0) && ((this.state = 2), (this.time = 0));
    }
    Zb() {
      this.Z(db);
    }
    Ea() {
      return "PicturesScene";
    }
  }
  Gc.i = !0;
  Gc.u = ea;
  Object.assign(Gc.prototype, { j: Gc });
  class Td extends Gc {
    constructor() {
      super();
    }
    Zb() {
      this.Z(ac);
    }
    Ea() {
      return "FamobiPicturesScene";
    }
  }
  Td.i = !0;
  Td.u = Gc;
  Object.assign(Td.prototype, { j: Td });
  class Lc extends ea {
    constructor() {
      super();
    }
    bb() {
      super.bb();
      var a = this.caller.Ka.box;
      a != w.box && p.VG();
      w.jg(a);
      a = this.caller.Ka.level;
      w.bi(a);
      a <= 5 ? w.Jd(1) : a > 5 && a < 10 ? w.Jd(2) : w.Jd(3);
      this.kF();
    }
    kF() {
      this.Z(ja);
    }
    Ea() {
      return "WarpScene";
    }
  }
  Lc.i = !0;
  Lc.u = ea;
  Object.assign(Lc.prototype, { j: Lc });
  class sf extends Lc {
    constructor() {
      super();
    }
    kF() {
      this.Z(Rb);
    }
    Ea() {
      return "FamobiWarpScene";
    }
  }
  sf.i = !0;
  sf.u = Lc;
  Object.assign(sf.prototype, { j: sf });
  class qf extends ea {
    constructor() {
      super();
    }
    ua() {
      super.ua();
      this.rc = new bc(null, new F(0, 0, 0, 1));
      this.rc.X(0.5);
      this.node.R(this.rc.B);
      this.state = 0;
      this.system.ab.xf(0);
      x.stop(x.Rj);
      x.stop(x.af);
      this.wa = this.add(Sa);
      this.node.R(this.wa.node);
      this.wa.Ky();
      this.wa.fw();
      this.state = 1;
    }
    update(a) {
      super.update(a);
      switch (this.state) {
        case 1:
          this.wa.state == 7 &&
            ((this.wa.state = 0), this.wa.ko(), (this.state = 2));
          break;
        case 2:
          this.wa.state == 0 && ((this.state = 3), this.Z(wb));
      }
    }
    dc() {
      return 0;
    }
    Ph() {
      return !1;
    }
    Ea() {
      return "QuitOverlay";
    }
  }
  qf.i = !0;
  qf.u = ea;
  Object.assign(qf.prototype, { j: qf });
  class ph {
    constructor() {}
  }
  ph.i = !0;
  Object.assign(ph.prototype, { j: ph });
  class N {
    static init() {
      N.Qh() && (N.Yw = !0);
      N.ly = N.hasFeature("rewarded");
    }
    static hasFeature(a) {
      return window.GameInterface.hasFeature(a);
    }
    static Qh() {
      return window.GameInterface.isMuted();
    }
    static PB(a) {
      return new Od(a);
    }
    static qU(a) {
      window.GameInterface.sendPreloadProgress(a);
    }
    static pU(a, b) {
      b != null
        ? window.GameInterface.sendScore(a, { level: b })
        : window.GameInterface.sendScore(a);
    }
    static rU(a, b) {
      window.GameInterface.sendScore(a, { type: "level", level: b });
    }
    static EP() {
      N.cH || (window.GameInterface.gameReady(), (N.cH = !0));
    }
    static Qi(a, b) {
      window.GameInterface.gameStart(a).then(b);
    }
    static BP(a) {
      window.GameInterface.gameComplete().then(a);
    }
    static CP(a) {
      window.GameInterface.gameOver().then(a);
    }
    static DP(a) {
      window.GameInterface.gamePause().then(a, a);
    }
    static FP(a) {
      window.GameInterface.gameResume().then(a, a);
    }
    static rC(a) {
      window.GameInterface.gameQuit().then(a, a);
    }
    static Sr(a) {
      window.GameInterface.gameMuted(a);
    }
    static OP() {
      return window.GameInterface.getCurrentLanguage();
    }
    static US(a) {
      window.GameInterface.onPauseStateChange(function (b) {
        a(b);
      });
    }
    static SS(a) {
      window.GameInterface.onMuteStateChange(function (b) {
        N.Yw = b;
        a(b);
      });
    }
    static KS(a) {
      window.GameInterface.onGoToHome(a);
    }
    static MS(a) {
      window.GameInterface.onGoToNextLevel(a);
    }
    static LS(a) {
      window.GameInterface.onGoToLevel(a);
    }
    static YS(a) {
      window.GameInterface.onRestartGame(a);
    }
    static XS(a) {
      window.GameInterface.onQuitGame(a);
    }
    static JS(a) {
      window.GameInterface.onGameOver(a);
    }
    static bR() {
      return window.GameInterface.isPaused();
    }
    static ng(a, b) {
      window.GameInterface.showInterstitialAd(a).then(() => b());
    }
    static hG(a, b) {
      window.GameInterface.showRewardedAd(a).then((c) => b(c.isRewardGranted));
    }
    static zD(a) {
      return window.GameInterface.isRewardedAdAvailable(a);
    }
    static TS(a) {
      window.GameInterface.onOffsetChange(function () {
        let b = window.GameInterface.getOffsets();
        a(
          new qh(
            Jb.Ig(b, "left"),
            Jb.Ig(b, "right"),
            Jb.Ig(b, "top"),
            Jb.Ig(b, "bottom"),
          ),
        );
      });
    }
  }
  N.i = !0;
  class Yd {}
  Yd.i = !0;
  Yd.bf = !0;
  Object.assign(Yd.prototype, { j: Yd });
  class Od {
    constructor(a) {
      this.key = a;
    }
    load(a) {
      let b = window.GameInterface.storage.getItem(this.key);
      a != null && a(b);
      return b;
    }
    save(a, b) {
      window.GameInterface.storage.setItem(this.key, a);
      b != null && b(!0);
    }
    remove() {
      window.GameInterface.storage.removeItem(this.key);
    }
  }
  Od.i = !0;
  Od.Lb = [Yd];
  Object.assign(Od.prototype, { j: Od });
  class qh {
    constructor(a, b, c, d) {
      this.ED = a;
      this.r = b;
      this.t = c;
      this.b = d;
    }
  }
  qh.i = !0;
  Object.assign(qh.prototype, { j: qh });
  class mh {
    constructor() {
      this.az = -1;
      this.g = new F(0, 0, 0, 1);
      this.np = this.Vj = -1;
      this.pressed = this.released = !1;
    }
    kj() {
      this.np = -1;
    }
    Ki() {}
    UN(a, b) {
      b = b.Yb(this.g);
      this.Vj < 0 &&
        (this.pressed && (this.az = b ? a : -1),
        b && ((this.np = a), this.pressed && (this.Vj = a)));
      if (this.Vj == a && (b && (this.np = a), this.released)) {
        b = this.az != a;
        this.az = -1;
        if (b) return ((this.Vj = -1), (this.pressed = this.released = !1));
        if (a == this.np)
          return ((this.Vj = -1), (this.pressed = this.released = !1), !0);
        this.Vj = -1;
      }
      return !1;
    }
    wD(a) {
      return a == this.np;
    }
    isActive(a) {
      return a == this.Vj;
    }
  }
  mh.i = !0;
  Object.assign(mh.prototype, { j: mh });
  class qa {
    static Cv(a, b) {
      a = a.charCodeAt(b);
      if (a == a) return a;
    }
    static substr(a, b, c) {
      if (c == null) c = a.length;
      else if (c < 0)
        if (b == 0) c = a.length + c;
        else return "";
      return a.substr(b, c);
    }
    static remove(a, b) {
      b = a.indexOf(b);
      if (b == -1) return !1;
      a.splice(b, 1);
      return !0;
    }
    static now() {
      return Date.now();
    }
  }
  qa.i = !0;
  class vi {
    constructor(a, b) {
      this.min = a;
      this.max = b;
    }
    ib() {
      return this.min < this.max;
    }
    next() {
      return this.min++;
    }
  }
  vi.i = !0;
  Object.assign(vi.prototype, { j: vi });
  class Ma {
    static lk(a, b) {
      for (a = He(a); a.ib(); ) if (b(a.next())) return !0;
      return !1;
    }
    static cj(a, b) {
      for (a = He(a); a.ib(); ) b(a.next());
    }
    static count(a, b) {
      let c = 0;
      if (b == null) for (b = He(a); b.ib(); ) (b.next(), ++c);
      else for (a = He(a); a.ib(); ) b(a.next()) && ++c;
      return c;
    }
    static find(a, b) {
      for (a = He(a); a.ib(); ) {
        let c = a.next();
        if (b(c)) return c;
      }
      return null;
    }
  }
  Ma.i = !0;
  Math.i = !0;
  class od {
    static uC(a) {
      return a <= 17 ? 1 : 2;
    }
    static xw(a) {
      switch (a) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 3:
          return 3;
        case 4:
          return 4;
        case 5:
          return 5;
        case 6:
          return 6;
        case 7:
          return 7;
        case 8:
          return 8;
        case 9:
          return 9;
        case 10:
          return 10;
        case 11:
          return 12;
        case 12:
          return 14;
        case 13:
          return 15;
        case 14:
          return 17;
        case 15:
          return 20;
        case 16:
          return 23;
        case 17:
          return 25;
        case 18:
          return 1;
        case 19:
          return 4;
        case 20:
          return 7;
        case 21:
          return 10;
        default:
          return -1;
      }
    }
    static Yr(a, b) {
      switch (a) {
        case 1:
          switch (b) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 3:
              return 3;
            case 4:
              return 4;
            case 5:
              return 5;
            case 6:
              return 6;
            case 7:
              return 7;
            case 8:
              return 8;
            case 9:
              return 9;
            case 10:
              return 10;
            case 12:
              return 11;
            case 14:
              return 12;
            case 15:
              return 13;
            case 17:
              return 14;
            case 20:
              return 15;
            case 23:
              return 16;
            case 25:
              return 17;
            default:
              return -1;
          }
        case 2:
          switch (b) {
            case 1:
              return 18;
            case 4:
              return 19;
            case 7:
              return 20;
            case 10:
              return 21;
            default:
              return -1;
          }
        default:
          return -1;
      }
    }
  }
  od.i = !0;
  class w {
    static reset() {
      w.Oa = 1;
      w.box = 1;
      w.level = 1;
    }
    static vC(a) {
      return [1 + (((a - 1) / 25) | 0), ((a - 1) % 25) + 1];
    }
    static Jd(a) {
      w.Oa = a;
      window.document.title =
        "" +
        ua.instance.config.title +
        " " +
        w.Oa +
        "-" +
        w.box +
        "-" +
        w.level;
    }
    static jg(a) {
      w.box = a;
      window.document.title =
        "" +
        ua.instance.config.title +
        " " +
        w.Oa +
        "-" +
        w.box +
        "-" +
        w.level;
    }
    static bi(a) {
      w.level = a;
      window.document.title =
        "" +
        ua.instance.config.title +
        " " +
        w.Oa +
        "-" +
        w.box +
        "-" +
        w.level;
    }
    static KF(a, b) {
      let c = w.box - 1,
        d = w.level - 1;
      z.nf[c][d] = a;
      z.Bg[c][d] = b ? 1 : 0;
      d < 25 && (z.ae[c][d + 1] = !0);
      z.flush();
    }
    static bQ() {
      return z.qj.length;
    }
    static yD(a) {
      return z.qj.includes("" + od.uC(a) + "-" + od.xw(a));
    }
    static cR() {
      switch (w.box) {
        case 1:
          return (
            [
              -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0,
              0, 1, 0, 1,
            ][w.level] == 1
          );
        case 2:
          return (
            [
              -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0,
            ][w.level] == 1
          );
        default:
          return !1;
      }
    }
    static zQ() {
      if (!w.cR() || z.qj.includes("" + w.box + "-" + w.level)) return !1;
      z.qj.push("" + w.box + "-" + w.level);
      z.Tk++;
      z.flush();
      return !0;
    }
    static ZQ(a) {
      return z.ae[w.box - 1][a - 1];
    }
    static ym(a) {
      return z.locked[a - 1];
    }
    static FB(a) {
      return w.Aw(a) <= 0;
    }
    static nz(a) {
      z.locked[a - 1] = !1;
      z.ae[a - 1][0] = !0;
      z.flush();
    }
    static Aw(a) {
      --a;
      return Vi[a] - w.Dw();
    }
    static Pl() {
      return w.level == 25;
    }
    static UF() {
      w.bi(w.level + 1);
    }
    static gp() {
      let a = 0,
        b = w.Oa,
        c = 0;
      for (; c < 3; ) ((w.Oa = c++ + 1), (a += w.Dw()));
      w.Oa = b;
      return a;
    }
    static Dw() {
      var a = 0,
        b = 0;
      let c = 0;
      switch (w.Oa) {
        case 1:
          a = 0;
          b = 5;
          break;
        case 2:
          a = 5;
          b = 10;
          break;
        case 3:
          ((a = 10), (b = 17));
      }
      for (; a < b; ) {
        let d = a++,
          e = 0;
        for (; e < 25; ) {
          let f = e++;
          c += z.nf[d][f];
          c += z.Bg[d][f];
        }
      }
      return c;
    }
    static HN() {
      let a = 0;
      for (; a < 17; ) {
        let b = a++,
          c = 0;
        for (; c < 25; ) if (!z.ae[b][c++]) return !1;
      }
      return !0;
    }
    static wC(a) {
      a == null && (a = w.box);
      let b = 0,
        c = 0;
      for (; c < 25; ) {
        let d = c++;
        b += z.nf[a - 1][d];
        b += z.Bg[a - 1][d];
      }
      return b;
    }
    static yw(a) {
      a == null && (a = w.level);
      return z.nf[w.box - 1][a - 1];
    }
    static $C(a) {
      a == null && (a = w.level);
      return z.Bg[w.box - 1][a - 1] > 0;
    }
  }
  w.i = !0;
  class Jb {
    static Ig(a, b) {
      try {
        return a[b];
      } catch (c) {
        return null;
      }
    }
    static kP(a) {
      let b = [];
      if (a != null) {
        let d = Object.prototype.hasOwnProperty;
        for (var c in a)
          c != "__id__" && c != "hx__closures__" && d.call(a, c) && b.push(c);
      }
      return b;
    }
  }
  Jb.i = !0;
  class Zd {}
  Zd.i = !0;
  class pd {
    constructor(a) {
      this.storage = a;
      this.lU = this.AD = !1;
      this.version = this.bp();
      this.reset();
    }
    load(a) {
      let b = this;
      this.storage.load(function (c) {
        let d = !1;
        try {
          if (c != null) {
            b.parse(c);
            if (b.version > b.bp()) throw 5;
            for (c = !1; b.version < b.bp(); )
              (b.ct(b.version + 1), b.version++, (c = !0));
            if (c) {
              b.save(a);
              return;
            }
          } else d = !0;
        } catch (e) {
          d = !0;
        }
        d ? (b.reset(), b.save(a)) : a();
      });
    }
    save(a) {
      this.AD = !0;
      let b = this;
      this.storage.save(this.stringify(), function (c) {
        b.AD = !1;
        b.lU = c == 0;
        a();
      });
    }
  }
  pd.i = !0;
  Object.assign(pd.prototype, { j: pd });
  class z extends pd {
    constructor(a) {
      super(a);
      z.instance = this;
      this.reset();
    }
    reset() {
      this.version = this.bp();
      z.Nc = !0;
      z.Ld = !0;
      z.ei(null);
      z.Ae = H.td ? 3 : 0;
      z.hint = 1;
      z.Ri = !1;
      z.nf = [];
      z.Bg = [];
      z.ae = [];
      z.locked = [];
      z.Fp = !1;
      z.wq = !1;
      z.qj = [];
      z.Tk = 0;
      let a = 1;
      for (; a <= 17; ) (this.mD(a, a != 1 && a != 6 && a != 11), ++a);
    }
    parse(a) {
      a = JSON.parse(a);
      this.version = a.v;
      z.Nc = a.music;
      z.Ld = a.sound;
      z.ei(a.language);
      z.nf = a.levelStars;
      z.ae = a.levelCleared;
      z.locked =a.locked;
      this.version >= 2 &&
        ((z.hint = a.hint), (z.Ae = a.skin), (z.Ri = a.gameWon));
      z.Ae = H.td ? 3 : z.Ae;
      this.version >= 3 &&
        ((z.Bg = a.blueStars),
        (z.Fp = a.magnetUsed),
        (z.wq = a.levelCleared),
        (z.qj = a.pictures),
        (z.Tk = a.picturesBadgeCounter));
    }
    stringify() {
      let a = {};
      a.v = this.version;
      a.music = z.Nc;
      a.sound = z.Ld;
      a.language = z.language;
      a.levelStars = z.nf;
      a.blueStars = z.Bg;
      a.levelCleared = z.ae;
      a.locked = z.locked;
      a.hint = z.hint;
      a.skin = H.td ? 0 : z.Ae;
      a.gameWon = z.Ri;
      a.magnetUsed = z.Fp;
      a.telekinesisUsed = z.wq;
      a.pictures = z.qj;
      a.picturesBadgeCounter = z.Tk;
      return JSON.stringify(a);
    }
    ct(a) {
      switch (a) {
        case 2:
          z.hint = 1;
          z.Ae = 0;
          z.Ri = !1;
          for (a = 3; a <= 17; ) (this.mD(a, a != 6 && a != 11), ++a);
          break;
        case 3:
          for (a = 0; a < 17; ) {
            z.Bg[a] = [];
            for (var b = 0; b < 25; ) z.Bg[a][b++] = 0;
            ++a;
          }
          z.Fp = !1;
          z.wq = !1;
          z.qj = [];
          z.Tk = 0;
          for (a = 1; a < 22; ) {
            var c = a++;
            b = od.uC(c);
            c = od.xw(c);
            z.ae[b - 1][c - 1] && (z.qj.push("" + b + "-" + c), z.Tk++);
          }
      }
    }
    bp() {
      return 3;
    }
    mD(a, b) {
      b == null && (b = !0);
      --a;
      z.locked[a] = b;
      z.nf[a] = [];
      z.ae[a] = [];
      let c = 0;
      for (; c < 25; ) {
        let d = c++;
        z.nf[a][d] = 0;//wd by 49.Jz
        z.ae[a][d] = !1;//wd by 49.Jz
      }
      b || (z.ae[a][0] = !0);
      z.Bg[a] = [];
      for (b = 0; b < 25; ) z.Bg[a][b++] = 0;
    }
    static ei(a) {
      Ma.lk(m.nw(), function (b) {
        return b == a;
      }) || (a = "en");
      z.language = a;
    }
    static flush() {
      z.py && z.instance.save(function () {});
    }
  }
  z.i = !0;
  z.u = pd;
  Object.assign(z.prototype, { j: z });
  class x {
    static play(a, b) {
      b == null && (b = !1);
      z.Ld && ua.instance.ab.play(a, b);
    }
    static stop(a) {
      ua.instance.ab.stop(a);
    }
    static Aj(a, b) {
      ua.instance.ab.TU(a, b);
    }
    static Xo(a) {
      z.Ld && ua.instance.ab.Xo(a, 1, !0);
    }
  }
  x.i = !0;
  class ra {
    static Ec(a) {
      return Ya.eo(a, "");
    }
    static parseInt(a) {
      a = parseInt(a);
      return isNaN(a) ? null : a;
    }
  }
  ra.i = !0;
  class bd {
    static As(a, b) {
      a = qa.Cv(a, b);
      return a > 8 && a < 14 ? !0 : a == 32;
    }
    static SR(a) {
      var b;
      let c = "";
      for (b = 4 - a.length; c.length < b; ) c += "0";
      return c + (a == null ? "null" : "" + a);
    }
    static BQ(a) {
      let b = "";
      do ((b = "0123456789ABCDEF".charAt(a & 15) + b), (a >>>= 4));
      while (a > 0);
      for (; b.length < 2; ) b = "0" + b;
      return b;
    }
  }
  bd.i = !0;
  class Eb {
    static get(a, b) {
      Eb.Ed == null && (Eb.Ed = JSON.parse(m.Ab(m.si)));
      var c = Jb.Ig(Eb.Ed, a);
      if (c == null || z.language == null) return a;
      if (Object.prototype.hasOwnProperty.call(c, z.language)) {
        a = Jb.Ig(c, z.language);
        // Asterisks in the supplied Chinese copy are layout hints, not visible text.
        z.language === "zh" && (a = a.replace(/\*/g, ""));
        if (b != null) {
          c = 0;
          let d = b.length;
          for (; c < d; ) a = a.replace(RegExp("::\\w+::", ""), b[c++]);
        }
        return a;
      }
      return Jb.Ig(c, "en");
    }
  }
  class p {
    static tw(a, b) {
      // The added Chinese atlas keeps the main/tutorial pair at the English indices.
      if (a === "zh" && b === "zh") return 2;
      let c = kf.slice();
      c.sort(Yi.bO);
      c.splice(c.indexOf(a), 0, a);
      return c.indexOf(b);
    }
    static VG() {
      let a = 0;
      for (; a < 17; ) {
        let b = a++;
        p.ka(
          [
            308, 300, 292, 284, 276, 268, 260, 250, 242, 234, 226, 218, 210,
            202, 194, 186, 178,
          ][b],
        );
        p.ka(
          [
            311, 303, 295, 287, 279, 271, 263, 255, 245, 237, 229, 221, 213,
            205, 197, 189, 181,
          ][b],
        );
        p.ka(
          [
            314, 306, 298, 290, 282, 274, 266, 258, 248, 240, 232, 224, 216,
            208, 200, 192, 184,
          ][b],
        );
      }
      p.mr = null;
      p.ck = null;
      p.rv = null;
      p.ka(m.Rn);
      p.ea = null;
      p.ka(m.Yn);
      p.Nd = null;
      p.ka(m.Vn);
      p.jn = null;
      p.ka(m.Xn);
      p.uc = null;
      p.ka(m.Sn);
      p.me = null;
      p.ka(m.Wn);
      p.kl = null;
      p.ka(m.Qn);
      p.nd = null;
      p.ka(m.Oj);
      p.Nb = null;
      p.ka(m.Oj);
      p.Ol = null;
      p.ka(m.ao);
      p.ad = null;
      p.ka(m.Zn);
      p.rl = null;
      p.ka(m.Un);
      p.dj = null;
      p.ka(m.Tn);
      p.gap = null;
      p.ka(m.Pj);
      p.Xf = null;
      p.ka(m.$n);
      p.Zc = null;
      p.ka(m.Pj);
      p.Xf = null;
      p.ka(m.Pn);
      p.Ul = null;
    }
    static ul(a) {
      function b(d) {
        return (Wi[a - 1] & d) == 0;
      }
      let c = a - 1;
      p.ka(
        [
          308, 300, 292, 284, 276, 268, 260, 250, 242, 234, 226, 218, 210, 202,
          194, 186, 178,
        ][c],
      );
      p.ka(
        [
          311, 303, 295, 287, 279, 271, 263, 255, 245, 237, 229, 221, 213, 205,
          197, 189, 181,
        ][c],
      );
      p.ka(
        [
          314, 306, 298, 290, 282, 274, 266, 258, 248, 240, 232, 224, 216, 208,
          200, 192, 184,
        ][c],
      );
      p.mr = null;
      p.ck = null;
      p.rv = null;
      p.ea != null && b(1) && (p.ka(m.Rn), (p.ea = null));
      p.Nd != null && b(2) && (p.ka(m.Yn), (p.Nd = null));
      p.jn != null && b(4) && (p.ka(m.Vn), (p.jn = null));
      p.uc != null && b(8) && (p.ka(m.Xn), (p.uc = null));
      p.me != null && b(64) && (p.ka(m.Sn), (p.me = null));
      p.kl != null && b(128) && (p.ka(m.Wn), (p.kl = null));
      p.nd != null && b(512) && (p.ka(m.Qn), (p.nd = null));
      p.Nb != null && b(2048) && (p.ka(m.Oj), (p.Nb = null));
      p.Ol != null && b(4096) && (p.ka(m.Oj), (p.Ol = null));
      p.ad != null && b(16384) && (p.ka(m.ao), (p.ad = null));
      p.rl != null && b(65536) && (p.ka(m.Zn), (p.rl = null));
      p.dj != null && b(131072) && (p.ka(m.Un), (p.dj = null));
      p.gap != null && b(262144) && (p.ka(m.Tn), (p.gap = null));
      p.Xf != null && b(524288) && (p.ka(m.Pj), (p.Xf = null));
      p.Zc != null && b(1048576) && (p.ka(m.$n), (p.Zc = null));
      p.Xf != null &&
        b(524288) &&
        (p.ka(m.Pj), (p.Xf = null), p.ka(m.Pn), (p.Ul = null));
    }
    static ka(a) {
      let b = p.Lm[a];
      b != null && (ua.instance.W.ka(b), ua.instance.HO(a), (p.Lm[a] = null));
    }
  }
  p.i = !0;
  class ti {
    static OB(a) {
      return new (Function.prototype.bind.apply(a, [null].concat([])))();
    }
  }
  ti.i = !0;
  class Ti {
    static back() {
      window.webOSSystem.platformBack();
    }
  }
  Ti.i = !0;
  class rh {
    constructor(a) {
      let b = new oa(
        "^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$",
        "",
      );
      if (b.match(a))
        ((this.fS = ra.parseInt(b.Xb(1))),
          (this.pS = ra.parseInt(b.Xb(2))),
          (this.ct = ra.parseInt(b.Xb(3))),
          (this.TE = b.Xb(4)),
          (this.yB = b.Xb(5)));
      else throw 30;
    }
    toString() {
      let a = this.fS + "." + this.pS + "." + this.ct;
      this.TE != null && (a += "-" + this.TE);
      this.yB != null && (a += "+" + this.yB);
      return a;
    }
  }
  rh.i = !0;
  Object.assign(rh.prototype, { j: rh });
  class Kd {}
  Kd.i = !0;
  class hh {
    constructor(
      a,
      b,
      c,
      d,
      e,
      f,
      g,
      h,
      l,
      n,
      q,
      r,
      u,
      v,
      A,
      D,
      B,
      G,
      E,
      T,
      S,
      U,
    ) {
      this.SC = !1;
      this.KD = !0;
      this.ez = !1;
      this.lC = this.lB = this.audio = this.bH = this.transition = this.jD = !0;
      this.uG = !1;
      this.kB = this.by = null;
      this.Up = 4;
      this.Av = null;
      this.kD = 1;
      this.language = "en";
      this.title = a;
      this.kp = b;
      c != null && (this.language = c);
      d != null && (this.kD = d);
      e != null && (this.Av = e);
      f != null && (this.Up = f);
      g != null && (this.kB = g);
      h != null && (this.by = h);
      l != null && (this.uG = l);
      n != null && (this.lC = n);
      q != null && (this.lB = q);
      r != null && (this.audio = r);
      u != null && (this.bH = u);
      v != null && (this.transition = v);
      A != null && (this.jD = A);
      E != null && (this.ez = E);
      S != null && (this.KD = S);
      U != null && (this.SC = U);
    }
  }
  hh.i = !0;
  Object.assign(hh.prototype, { j: hh });
  class dh {
    constructor() {
      this.current = 60;
      let a = [],
        b = 0;
      for (; b < 60; ) (++b, a.push(0));
      this.values = a;
      this.time = this.Fx = 0;
    }
    update(a) {
      this.time += a;
      this.time > 1 &&
        ((this.current = Math.min(this.Fx, 60)),
        this.values[this.current - 1]++,
        (this.Fx = 0),
        --this.time);
      this.Fx++;
    }
  }
  dh.i = !0;
  Object.assign(dh.prototype, { j: dh });
  class fh {
    constructor(a, b) {
      this.Hd = a;
      this.Ve = b;
    }
    bs() {
      if (this.Ve.length == 0) return 100;
      let a = Math.round(this.Hd.ep(this.Ve) * 100);
      this.Ak() && --a;
      a < 0 && (a = 0);
      return a;
    }
    Fw() {
      return this.Ve.length != 0 ? (this.Hd.ep() == 1 ? !this.Ak() : !1) : !0;
    }
    Ak() {
      let a = 0,
        b = this.Ve;
      for (; a < b.length; ) if (!m.qb(m.Lg(b[a++]))) return !0;
      return !1;
    }
  }
  fh.i = !0;
  Object.assign(fh.prototype, { j: fh });
  class Nd {
    constructor(a) {
      this.key = a;
    }
    load(a) {
      try {
        let b = wi.HC().getItem(this.key);
        a != null && a(b);
        return b;
      } catch (b) {
        return (a != null && a(null), null);
      }
    }
    save(a, b) {
      try {
        (wi.HC().setItem(this.key, a), b != null && b(!0));
      } catch (c) {
        b != null && b(!1);
      }
    }
  }
  Nd.i = !0;
  Nd.Lb = [Yd];
  Object.assign(Nd.prototype, { j: Nd });
  class xi {
    constructor(a, b, c) {
      this.type = a;
      this.Or = b;
      this.once = c;
      this.next = null;
    }
  }
  xi.i = !0;
  Object.assign(xi.prototype, { j: xi });
  class lh {
    constructor(a) {
      this.top = 0;
      this.stack = [];
      this.push(a);
    }
    ib() {
      return this.top > 0;
    }
    next() {
      let a = this.stack[--this.top];
      this.push(a);
      return a;
    }
    push(a) {
      for (a = a.He; a != null; ) ((this.stack[this.top++] = a), (a = a.$));
    }
  }
  lh.i = !0;
  Object.assign(lh.prototype, { j: lh });
  class eb {
    constructor(a, b, c, d) {
      this.r = a;
      this.Le = b;
      this.b = c;
      this.a = d;
    }
    cc() {
      return new eb(this.r, this.Le, this.b, this.a);
    }
  }
  eb.i = !0;
  Object.assign(eb.prototype, { j: eb });
  class Y {
    constructor(a, b, c, d) {
      this.x = a;
      this.y = b;
      this.w = c;
      this.J = d;
    }
    static cc(a) {
      return new Y(a.x, a.y, a.w, a.J);
    }
    static un(a) {
      return new Y(a.x * 0.4, a.y * 0.4, a.w * 0.4, a.J * 0.4);
    }
    static Yx(a, b, c, d, e, f, g, h) {
      return !(a > g || c < e || b > h || d < f);
    }
    static Uk(a, b, c, d, e, f) {
      return a >= c && a < c + e && b >= d ? b < d + f : !1;
    }
    static qu(a, b, c, d, e) {
      return (
        (e.x < a ? Y.Nz : 0) +
        (e.x > c ? Y.Oz : 0) +
        (e.y < b ? Y.Mz : 0) +
        (e.y > d ? Y.Pz : 0)
      );
    }
    static Fk(a, b, c, d, e, f, g, h) {
      let l = new t(a, b),
        n = new t(c, d),
        q;
      g = e + g;
      let r = f + h,
        u = Y.qu(e, f, g, r, l),
        v = Y.qu(e, f, g, r, n);
      for (; u != 0 || v != 0; ) {
        if ((u & v) != 0) return !1;
        u != 0 ? ((h = u), (q = l)) : ((h = v), (q = n));
        (h & Y.Nz) > 0
          ? ((q.y += ((b - d) * (e - q.x)) / (a - c)), (q.x = e))
          : (h & Y.Oz) != 0 &&
            ((q.y += ((b - d) * (g - q.x)) / (a - c)), (q.x = g));
        (h & Y.Mz) > 0
          ? ((q.x += ((a - c) * (f - q.y)) / (b - d)), (q.y = f))
          : (h & Y.Pz) != 0 &&
            ((q.x += ((a - c) * (r - q.y)) / (b - d)), (q.y = r));
        h == u ? (u = Y.qu(e, f, g, r, l)) : (v = Y.qu(e, f, g, r, n));
      }
      return !0;
    }
  }
  Y.i = !0;
  Object.assign(Y.prototype, { j: Y });
  class Qe extends pd {
    constructor() {
      super(null);
    }
    stringify() {
      return "";
    }
    parse() {}
    reset() {}
    bp() {
      return 1;
    }
    ct() {}
  }
  Qe.i = !0;
  Qe.u = pd;
  Object.assign(Qe.prototype, { j: Qe });
  class Dc extends ma {
    constructor(a) {
      super();
      this.system = a;
      this.Ka = {};
      this.back = new rb();
      this.Fa = new rb();
      this.Db = new $d();
    }
    ha() {
      return this.system.window.Xi().x;
    }
    la() {
      return this.system.window.Xi().y;
    }
    RC() {
      return this.system.window.Xi();
    }
    sm() {
      let a = this.system.window.Xi();
      return new ia(0, 0, a.x, a.y);
    }
    jf() {
      return this.system.window.Zo();
    }
    update(a) {
      this.Db.Ob(new F(this.ha(), this.la(), 0, 1));
      this.system.W.el(this.Db);
      this.back.ki(a);
      super.update(a);
      this.Fa.ki(a);
    }
    jd(a) {
      let b = this.system.W;
      this.Db.Ob(new F(this.ha(), this.la(), 0, 1));
      b.el(this.Db);
      this.back.Pd();
      this.back.Kn();
      b.zr(this.back);
      super.jd(a);
      this.Fa.Pd();
      this.Fa.Kn();
      b.zr(this.Fa);
    }
    clear() {
      let a = this.$v();
      for (; a != null; ) (a.pa(), (a = this.$v()));
    }
    rh(a, b, c) {
      function d() {
        if (c) return (b.Ed.ra(new Mc(e)), g.ra(new ae(b, e)));
        let h = new Mc(e);
        g.ra(h);
        return f == null ? g.ra(new be(e)) : g.ra(new wf(b, e));
      }
      let e = ti.OB(a);
      e.ca = this;
      e.system = this.system;
      e.caller = b;
      b == null && (e.Ka = this.Ka);
      let f = this.$v(),
        g = this;
      if (e.KC().length > 0) {
        a = e.zw(d);
        a.ca = this;
        a.system = this.system;
        let h = new Mc(a);
        f == null
          ? (this.ra(h), this.ra(new be(a)))
          : (b.Ed.ra(h), this.ra(new ae(b, a)));
      } else d();
    }
    cg(a) {
      (a.Ed.parent instanceof Dc ? null : a.Ed.parent) == null
        ? this.ra(new xf(a))
        : ((a.Ed.parent.hg.caller = a), this.ra(new ce(a)));
    }
    $v() {
      let a = this.He;
      for (; a != null; ) {
        if (a instanceof Mc) return a;
        a = a.$;
      }
      return null;
    }
  }
  Dc.i = !0;
  Dc.u = ma;
  Object.assign(Dc.prototype, { j: Dc });
  class Qb {
    constructor() {
      this.xi = Qb.zl;
      this.elapsedTime = 0;
      this.fz = 1;
    }
  }
  Qb.i = !0;
  Object.assign(Qb.prototype, { j: Qb });
  class eh {
    constructor() {
      this.elapsedTime = 0;
      this.At = !1;
      this.handle = -1;
      this.now = 0;
      this.dw = !0;
      this.startTime = 0;
    }
    bh() {}
    start() {
      if (!this.At) {
        this.stop();
        this.At = !0;
        var a = null,
          b = ((mc = window), M(mc, mc.requestAnimationFrame)),
          c = this;
        a = function (d) {
          c.handle = b(a);
          if (c.dw) ((c.startTime = d), (c.now = d), (c.dw = !1));
          else {
            let e = d - c.now;
            c.now = d;
            c.elapsedTime = (d - c.startTime) / 1e3;
            c.bh(e / 1e3);
          }
        };
        this.handle = b(a);
      }
    }
    stop() {
      this.At &&
        ((this.dw = !0),
        this.handle < 0 ||
          (window.cancelAnimationFrame(this.handle),
          (this.handle = -1),
          (this.At = !1)));
    }
  }
  eh.i = !0;
  Object.assign(eh.prototype, { j: eh });
  class t {
    constructor(a, b) {
      this.x = a;
      this.y = b;
    }
    add(a) {
      this.x += a.x;
      this.y += a.y;
    }
    $y(a) {
      this.x -= a.x;
      this.y -= a.y;
    }
    multiply(a) {
      this.x *= a;
      this.y *= a;
    }
    YB(a) {
      this.x /= a;
      this.y /= a;
    }
    Nf(a) {
      let b = this.x - a.x;
      a = this.y - a.y;
      return Math.sqrt(b * b + a * a);
    }
    Ub() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    cp() {
      return this.x * this.x + this.y * this.y;
    }
    jR() {
      return this.x == 0 ? this.y == 0 : !1;
    }
    equals(a) {
      return this.x == a.x ? this.y == a.y : !1;
    }
    normalize() {
      this.multiply(1 / this.Ub());
    }
    angle() {
      return Math.atan(this.y / this.x);
    }
    Ym() {
      return Math.atan2(this.y, this.x);
    }
    cc() {
      return new t(this.x, this.y);
    }
    Sb(a) {
      this.x = a.x;
      this.y = a.y;
    }
    rotate(a) {
      let b = Math.cos(a);
      a = Math.sin(a);
      let c = this.x * a + this.y * b;
      this.x = this.x * b - this.y * a;
      this.y = c;
      return this;
    }
    cb(a, b, c) {
      this.x -= b;
      this.y -= c;
      this.rotate(a);
      this.x += b;
      this.y += c;
    }
    static Ac() {
      return new t(0, 0);
    }
    static xS() {
      return new t(2147483647, 2147483647);
    }
    static ub(a, b) {
      return new t(a.x + b.x, a.y + b.y);
    }
    static La(a, b) {
      return new t(a.x - b.x, a.y - b.y);
    }
    static Rb(a, b) {
      return new t(a.x * b, a.y * b);
    }
    static Uq(a, b) {
      return new t(a.x / b, a.y / b);
    }
    static ud(a, b, c, d) {
      a -= c;
      b -= d;
      return Math.sqrt(a * a + b * b);
    }
    static VA(a, b) {
      return a.x * b.x + a.y * b.y;
    }
    static Yu(a) {
      return new t(-a.y, a.x);
    }
    static rN(a) {
      return new t(a.y, -a.x);
    }
    static Vq(a) {
      return t.Rb(a, 1 / a.Ub());
    }
    static VN(a, b) {
      let c = new t(0, 0);
      t.AF(a, b, c);
      return c;
    }
    static AF(a, b, c) {
      var d = a.length;
      if (d <= 1) c.x = c.y = 0;
      else {
        for (var e = t.sN, f = t.tN, g = 1 - b, h = 0; h < d; ) {
          let l = h++,
            n = a[l];
          e[l] = n.x;
          f[l] = n.y;
        }
        for (a = d - 1; a > 0; ) {
          d = 0;
          for (h = 1; d < a; )
            ((e[d] = e[d] * g + e[h] * b),
              (f[d] = f[d] * g + f[h] * b),
              ++d,
              ++h);
          --a;
        }
        c.x = e[0];
        c.y = f[0];
      }
    }
    static oC(a) {
      return new t(Math.cos(a), Math.sin(a));
    }
  }
  t.i = !0;
  Object.assign(t.prototype, { j: t });
  class id extends Ec {
    constructor(a, b) {
      super();
      this.$m = b;
      this.qS = a.KC();
      this.Jm = this.system.load(this.qS);
    }
    bs() {
      return this.Jm.bs();
    }
    update(a) {
      super.update(a);
      this.Jm.Fw() && this.We == "Running" && this.Gy();
    }
    Ph() {
      return !1;
    }
    Gy() {
      this.ca.ra(new ce(this, !1, this.$m));
    }
    Ea() {
      return "LoadingOverlay";
    }
  }
  id.i = !0;
  id.u = Ec;
  Object.assign(id.prototype, { j: id });
  class Mc extends ma {
    constructor(a) {
      super();
      this.hg = a;
      a.Ed = this;
      a.lE = !0;
      a.kE = !0;
      this.ra(a);
    }
    update(a) {
      switch (this.hg.We) {
        case "Paused":
        case "Running":
        case "Started":
          break;
        default:
          return;
      }
      this.system.window.ky && this.hg.sb();
      this.hg.update(a);
      this.hg.Zq(a);
      super.update(a);
    }
    jd(a) {
      if (this.hg.rz)
        switch (this.hg.We) {
          case "Paused":
          case "Running":
          case "Started":
            this.hg.jd(a);
        }
      super.jd(a);
    }
  }
  Mc.i = !0;
  Mc.u = ma;
  Object.assign(Mc.prototype, { j: Mc });
  class kb extends ma {
    constructor(a, b) {
      super();
      this.a = a;
      this.b = b;
      this.state = 0;
    }
    rP(a, b) {
      for (a = a.Ed.parent; a != null && !(a instanceof Dc); )
        (b(a.hg), (a = a.parent));
    }
    qm(a) {
      if (a.Ed.parent == a.ca) return a;
      let b = a.Ed.parent;
      for (; b != null; ) {
        if (b.parent == a.ca) return b.hg;
        b = b.parent;
      }
      return null;
    }
    wk(a) {
      return a.system.config.bH ? a.wk() : 0;
    }
    dc(a, b) {
      return a.system.config.transition ? a.dc(b) : 0;
    }
    ba(a) {
      this.state = a;
      this.time = 0;
    }
  }
  kb.i = !0;
  kb.u = ma;
  Object.assign(kb.prototype, { j: kb });
  class wf extends kb {
    constructor(a, b) {
      super(a, b);
      a.We == "Running" && a.zb("Paused");
      this.qm(a).hd(0, b);
    }
    update(a) {
      super.update(a);
      switch (this.state) {
        case 0:
          a = this.lb(this.dc(this.a, this.b) / 2);
          this.qm(this.a).hd(a, this.b);
          a == 1 && this.ba(1);
          break;
        case 1:
          this.a.zb("Stopped");
          this.a.Xc();
          this.rP(this.a, function (b) {
            b.We != "Stopped" && (b.zb("Stopped"), b.Xc());
          });
          this.b.zb("Created");
          this.b.ua();
          this.b.sb();
          this.ba(2);
          break;
        case 2:
          if (this.time < this.wk(this.b)) break;
          this.b.zb("Started");
          this.b.an();
          this.b.ee(0, this.a);
          this.ba(3);
          break;
        case 3:
          ((a = this.lb(this.dc(this.a, this.b) / 2)),
            this.b.ee(a, this.a),
            a < 1 ||
              (this.b.zb("Running"),
              this.b.bb(),
              this.qm(this.a).Ed.pa(),
              this.pa()));
      }
    }
  }
  wf.i = !0;
  wf.u = kb;
  Object.assign(wf.prototype, { j: wf });
  class sh extends kb {
    constructor(a, b) {
      super(a, b);
      b.zb("Created");
      b.ua();
      b.sb();
    }
    update(a) {
      super.update(a);
      switch (this.state) {
        case 0:
          if (this.time < this.wk(this.b)) break;
          this.a.zb("Paused");
          for (a = this.a; a.parent != null && a.parent != this.a.ca; )
            a = a.parent;
          this.qm(this.a).hd(1, this.b);
          this.b.zb("Started");
          this.b.an();
          this.b.ee(0, this.a);
          this.time = 0;
          this.state = 1;
          break;
        case 1:
          if (
            ((a = this.lb(this.dc(this.a, this.b))),
            this.qm(this.a).hd(a, this.b),
            this.b.ee(a, this.a),
            a == 1)
          ) {
            this.a.zb("Stopped");
            this.a.Xc();
            for (a = this.a; a.parent != null && a.parent != this.a.ca; )
              (a.We != "Stopped" && (a.zb("Stopped"), a.Xc()), (a = a.parent));
            this.qm(this.a).pa();
            this.b.zb("Running");
            this.b.bb();
            this.pa();
          }
      }
    }
  }
  sh.i = !0;
  sh.u = kb;
  Object.assign(sh.prototype, { j: sh });
  class xf extends kb {
    constructor(a) {
      super(a, null);
      a.zb("Paused");
      a.hd(1, null);
    }
    update() {
      let a = this.lb(this.dc(this.a, this.b));
      this.a.hd(a, this.b);
      a < 1 || (this.a.zb("Stopped"), this.a.Xc(), this.a.pa(), this.pa());
    }
  }
  xf.i = !0;
  xf.u = kb;
  Object.assign(xf.prototype, { j: xf });
  class ce extends kb {
    constructor(a, b, c) {
      b == null && (b = !0);
      let d = a.cQ();
      super(a, d);
      this.fU = b;
      this.lj = c;
      a.zb("Paused");
      a.hd(0, d);
    }
    update(a) {
      super.update(a);
      a = this.lb(this.dc(this.a, this.b));
      this.a.hd(a, this.b);
      a == 1 &&
        (this.a.zb("Stopped"),
        this.a.Xc(),
        this.a.Ed.pa(),
        this.fU &&
          (this.b.We == "Stopped" && this.b.zb("Restarted"),
          this.b.zb("Running"),
          this.b.bb()),
        this.pa(),
        this.lj != null && (this.lj(), (this.lj = null)));
    }
  }
  ce.i = !0;
  ce.u = kb;
  Object.assign(ce.prototype, { j: ce });
  class ae extends kb {
    constructor(a, b) {
      super(a, b);
      b.zb("Created");
      b.ua();
      b.sb();
    }
    update(a) {
      super.update(a);
      switch (this.state) {
        case 0:
          if (this.time < this.wk(this.b)) break;
          this.a.We == "Running" && this.a.zb("Paused");
          this.b.zb("Started");
          this.b.an();
          this.b.ee(0, this.a);
          this.ba(1);
          break;
        case 1:
          ((a = this.lb(this.dc(this.a, this.b))),
            this.b.ee(a, this.a),
            a < 1 ||
              (this.b.Ph() && (this.a.zb("Stopped"), this.a.Xc()),
              this.b.zb("Running"),
              this.b.bb(),
              this.pa()));
      }
    }
  }
  ae.i = !0;
  ae.u = kb;
  Object.assign(ae.prototype, { j: ae });
  class be extends kb {
    constructor(a) {
      super(null, a);
      a.zb("Created");
      a.ua();
      a.sb();
    }
    update() {
      switch (this.state) {
        case 0:
          if (this.time < this.wk(this.b)) break;
          this.b.zb("Started");
          this.b.an();
          this.b.ee(0, this.a);
          this.ba(1);
          break;
        case 1:
          let a = this.lb(this.dc(this.b, this.a));
          this.b.ee(a, this.a);
          a < 1 || (this.b.zb("Running"), this.b.bb(), this.pa());
      }
    }
  }
  be.i = !0;
  be.u = kb;
  Object.assign(be.prototype, { j: be });
  class Vd {
    constructor(a, b, c) {
      this.Ad = null;
      this.rn = !1;
      if (c != null) {
        this.Wb = a;
        this.fd = b;
        a = this.P = Array(this.Wb * this.fd);
        b = 0;
        let d = this.Wb * this.fd;
        for (; b < d; ) {
          let e = b++;
          a[e] = c[e];
        }
      } else
        ((this.Wb = a), (this.fd = b), (this.P = Array(this.Wb * this.fd)));
    }
    forEach(a) {
      let b = this.P,
        c = this.Wb,
        d = 0,
        e = this.Wb * this.fd;
      for (; d < e; ) {
        let f = d++;
        b[f] = a(b[f], f % c, (f / c) | 0);
      }
      return this;
    }
    cj(a) {
      let b = this.P,
        c = 0,
        d = this.Wb * this.fd;
      for (; c < d; ) a(b[c++]);
      return this;
    }
    resize(a, b) {
      if (a == this.Wb && b == this.fd) return this;
      let c = this.P;
      this.P = Array(a * b);
      if (a == this.Wb)
        return (
          Sb.vo(c, 0, this.P, this.Wb * (b < this.fd ? b : this.fd)),
          (this.Wb = a),
          (this.fd = b),
          this
        );
      let d = a < this.Wb ? a : this.Wb,
        e;
      let f = this.P,
        g = 0,
        h = b < this.fd ? b : this.fd;
      for (; g < h; ) {
        var l = g++;
        e = l * a;
        l *= this.Wb;
        let n = 0,
          q = d;
        for (; n < q; ) {
          let r = n++;
          f[e + r] = c[l + r];
        }
      }
      this.Wb = a;
      this.fd = b;
      return this;
    }
    iterator() {
      if (this.rn) {
        if (this.Ad == null) this.Ad = new de(this);
        else {
          let a = this.Ad;
          a.P = a.Pe.P;
          let b = a.Pe;
          a.Sg = b.Wb * b.fd;
          a.Oe = 0;
        }
        return this.Ad;
      }
      return new de(this);
    }
  }
  Vd.i = !0;
  Vd.Lb = [hd];
  Object.assign(Vd.prototype, { j: Vd });
  class qd {}
  qd.i = !0;
  qd.bf = !0;
  Object.assign(qd.prototype, { j: qd });
  class de {
    constructor(a) {
      this.Pe = a;
      this.P = this.Pe.P;
      a = this.Pe;
      this.Sg = a.Wb * a.fd;
      this.Oe = 0;
    }
    ib() {
      return this.Oe < this.Sg;
    }
    next() {
      return this.P[this.Oe++];
    }
  }
  de.i = !0;
  de.Lb = [qd];
  Object.assign(de.prototype, { j: de });
  class nh {
    constructor(a, b) {
      b == null && (b = 0);
      a == null && (a = 0);
      this.x = a;
      this.y = b;
    }
  }
  nh.i = !0;
  Object.assign(nh.prototype, { j: nh });
  class Pd {
    constructor(a) {
      this.Pe = a;
      this.P = this.Pe.P;
      this.Sg = this.Pe.da;
      this.Oe = 0;
    }
    jw() {
      this.P = this.Pe = null;
    }
    ib() {
      return this.Oe < this.Sg;
    }
    next() {
      return this.P[this.Oe++];
    }
  }
  Pd.i = !0;
  Pd.Lb = [qd];
  Object.assign(Pd.prototype, { j: Pd });
  class th {}
  th.i = !0;
  th.bf = !0;
  th.Lb = [hd];
  class uh {}
  uh.i = !0;
  uh.bf = !0;
  uh.Lb = [hd];
  class vc {
    constructor(a, b, c) {
      a == null && (a = 16);
      this.Ja = 0;
      this.yk = -2;
      this.hb = this.Mm = 1 > a ? 1 : a;
      if (b != null) {
        a = this.Ja = b.length;
        var d = this.hb;
        this.hb = a > d ? a : d;
      }
      this.P = Array(this.hb);
      if (b != null) {
        a = this.P;
        d = 0;
        let e = this.Ja;
        for (; d < e; ) {
          let f = d++;
          a[f] = b[f];
        }
      }
      c && (this.yk = 0);
    }
    gg(a) {
      a > this.hb && ((this.hb = a), this.xj(a));
    }
    top() {
      return this.P[this.Ja - 1];
    }
    clear(a) {
      a == null && (a = !1);
      a && Sb.Qs(this.P);
      this.Ja = 0;
    }
    grow() {
      this.hb = kh.Io(this.yk, this.hb);
      this.xj(this.hb);
    }
    xj(a) {
      a = Array(a);
      Sb.vo(this.P, 0, a, this.Ja);
      this.P = a;
    }
  }
  vc.i = !0;
  vc.Lb = [uh];
  Object.assign(vc.prototype, { j: vc });
  class yf {
    static next() {
      yf.UA == null && (yf.UA = 0);
      return yf.UA++;
    }
  }
  yf.i = !0;
  class zf {}
  zf.i = !0;
  zf.bf = !0;
  Object.assign(zf.prototype, { j: zf });
  class Af {
    constructor(a, b, c) {
      b == null && (b = !1);
      a == null && (a = 1);
      this.Ad = null;
      this.da = 0;
      this.rn = !1;
      this.yk = -2;
      this.Mm = 1 > a ? 1 : a;
      this.hb = a;
      this.Rg = b;
      c != null &&
        ((a = this.da = c.length), (b = this.hb), (this.hb = a > b ? a : b));
      this.P = Array(this.hb + 1);
      this.P[0] = null;
      if (c != null) {
        a = this.P;
        b = 1;
        let d = this.da + 1;
        for (; b < d; ) {
          let e = b++;
          a[e] = c[e - 1];
        }
        this.ZT();
      }
    }
    enqueue(a) {
      this.da == this.hb && this.grow();
      this.P[++this.da] = a;
      a = a.g = this.da;
      let b = this.P,
        c = a >> 1,
        d = b[a],
        e = d.priority;
      if (this.Rg)
        for (; c > 0; ) {
          var f = b[c];
          if (e - f.priority < 0) ((b[a] = f), (f.g = a), (a = c), (c >>= 1));
          else break;
        }
      else
        for (; c > 0; )
          if (((f = b[c]), e - f.priority > 0))
            ((b[a] = f), (f.g = a), (a = c), (c >>= 1));
          else break;
      b[a] = d;
      d.g = a;
    }
    EO() {
      var a = this.P;
      let b = a[1];
      b.g = -1;
      a[1] = a[this.da];
      a = 1;
      let c = this.P,
        d = 2,
        e,
        f = c[1],
        g = f.priority;
      if (this.Rg)
        for (; d < this.da; )
          if (
            (d < this.da - 1 && c[d].priority - c[d + 1].priority > 0 && ++d,
            (e = c[d]),
            g - e.priority > 0)
          )
            ((c[a] = e), (e.g = a), (a = f.g = d), (d <<= 1));
          else break;
      else
        for (; d < this.da; )
          if (
            (d < this.da - 1 && c[d].priority - c[d + 1].priority < 0 && ++d,
            (e = c[d]),
            g - e.priority < 0)
          )
            ((c[a] = e), (e.g = a), (a = f.g = d), (d <<= 1));
          else break;
      c[a] = f;
      f.g = a;
      this.da--;
      return b;
    }
    aU(a, b) {
      var c = a.priority;
      if (c != b)
        if (((a.priority = b), (a = a.g), this.Rg))
          if (b < c) {
            b = a;
            c = this.P;
            var d = a >> 1;
            a = c[a];
            var e = a.priority;
            if (this.Rg)
              for (; d > 0; ) {
                var f = c[d];
                if (e - f.priority < 0)
                  ((c[b] = f), (f.g = b), (b = d), (d >>= 1));
                else break;
              }
            else
              for (; d > 0; )
                if (((f = c[d]), e - f.priority > 0))
                  ((c[b] = f), (f.g = b), (b = d), (d >>= 1));
                else break;
            c[b] = a;
            a.g = b;
          } else {
            b = a;
            c = this.P;
            d = a << 1;
            e = c[a];
            f = e.priority;
            if (this.Rg)
              for (; d < this.da; )
                if (
                  (d < this.da - 1 &&
                    c[d].priority - c[d + 1].priority > 0 &&
                    ++d,
                  (a = c[d]),
                  f - a.priority > 0)
                )
                  ((c[b] = a), (a.g = b), (b = e.g = d), (d <<= 1));
                else break;
            else
              for (; d < this.da; )
                if (
                  (d < this.da - 1 &&
                    c[d].priority - c[d + 1].priority < 0 &&
                    ++d,
                  (a = c[d]),
                  f - a.priority < 0)
                )
                  ((c[b] = a), (a.g = b), (b = e.g = d), (d <<= 1));
                else break;
            c[b] = e;
            e.g = b;
            a = this.da;
            b = this.P;
            c = a >> 1;
            d = b[a];
            e = d.priority;
            if (this.Rg)
              for (; c > 0; )
                if (((f = b[c]), e - f.priority < 0))
                  ((b[a] = f), (f.g = a), (a = c), (c >>= 1));
                else break;
            else
              for (; c > 0; )
                if (((f = b[c]), e - f.priority > 0))
                  ((b[a] = f), (f.g = a), (a = c), (c >>= 1));
                else break;
            b[a] = d;
            d.g = a;
          }
        else if (b > c) {
          b = a;
          c = this.P;
          d = a >> 1;
          a = c[a];
          e = a.priority;
          if (this.Rg)
            for (; d > 0; )
              if (((f = c[d]), e - f.priority < 0))
                ((c[b] = f), (f.g = b), (b = d), (d >>= 1));
              else break;
          else
            for (; d > 0; )
              if (((f = c[d]), e - f.priority > 0))
                ((c[b] = f), (f.g = b), (b = d), (d >>= 1));
              else break;
          c[b] = a;
          a.g = b;
        } else {
          b = a;
          c = this.P;
          d = a << 1;
          e = c[a];
          f = e.priority;
          if (this.Rg)
            for (; d < this.da; )
              if (
                (d < this.da - 1 &&
                  c[d].priority - c[d + 1].priority > 0 &&
                  ++d,
                (a = c[d]),
                f - a.priority > 0)
              )
                ((c[b] = a), (a.g = b), (b = e.g = d), (d <<= 1));
              else break;
          else
            for (; d < this.da; )
              if (
                (d < this.da - 1 &&
                  c[d].priority - c[d + 1].priority < 0 &&
                  ++d,
                (a = c[d]),
                f - a.priority < 0)
              )
                ((c[b] = a), (a.g = b), (b = e.g = d), (d <<= 1));
              else break;
          c[b] = e;
          e.g = b;
          a = this.da;
          b = this.P;
          c = a >> 1;
          d = b[a];
          e = d.priority;
          if (this.Rg)
            for (; c > 0; )
              if (((f = b[c]), e - f.priority < 0))
                ((b[a] = f), (f.g = a), (a = c), (c >>= 1));
              else break;
          else
            for (; c > 0; )
              if (((f = b[c]), e - f.priority > 0))
                ((b[a] = f), (f.g = a), (a = c), (c >>= 1));
              else break;
          b[a] = d;
          d.g = a;
        }
    }
    clear(a) {
      a == null && (a = !1);
      a && Sb.Qs(this.P);
      this.da = 0;
    }
    iterator() {
      if (this.rn) {
        if (this.Ad == null) return new ee(this);
        this.Ad.reset();
        return this.Ad;
      }
      return new ee(this);
    }
    ZT() {
      let a = this.da >> 1;
      for (; a >= 1; ) (this.cD(a, this.da), --a);
    }
    cD(a, b) {
      let c = this.P;
      var d = a << 1,
        e = d + 1;
      let f = a;
      this.Rg
        ? (d <= b && c[d].priority - c[a].priority < 0 && (f = d),
          d + 1 <= b && c[d + 1].priority - c[f].priority < 0 && (f = e))
        : (d <= b && c[d].priority - c[a].priority > 0 && (f = d),
          d + 1 <= b && c[d + 1].priority - c[f].priority > 0 && (f = e));
      f != a &&
        ((d = c[f]),
        (e = c[a]),
        (c[f] = e),
        (c[a] = d),
        (a = d.g),
        (d.g = e.g),
        (e.g = a),
        this.cD(f, b));
    }
    grow() {
      this.hb = kh.Io(this.yk, this.hb);
      this.xj(this.hb);
    }
    xj(a) {
      a = Array(a + 1);
      Sb.vo(this.P, 0, a, this.da + 1);
      this.P = a;
    }
  }
  Af.i = !0;
  Af.Lb = [th];
  Object.assign(Af.prototype, { j: Af });
  class ee {
    constructor(a) {
      this.Pe = a;
      this.reset();
    }
    reset() {
      this.Oe = 0;
      this.Sg = this.Pe.da;
      this.P = Array(this.Sg);
      Sb.vo(this.Pe.P, 1, this.P, this.Sg);
      return this;
    }
    ib() {
      return this.Oe < this.Sg;
    }
    next() {
      return this.P[this.Oe++];
    }
  }
  ee.i = !0;
  ee.Lb = [qd];
  Object.assign(ee.prototype, { j: ee });
  class Yi {
    static bO(a, b) {
      a = a.toLowerCase();
      b = b.toLowerCase();
      return a < b ? -1 : a > b ? 1 : 0;
    }
  }
  Yi.i = !0;
  class kh {
    static Io(a, b) {
      if (a > 0) b += a;
      else
        switch (a) {
          case -3:
            b <<= 1;
            break;
          case -2:
            b = ((b * 3) >> 1) + 1;
            break;
          case -1:
            a = b + 1;
            b = (a >> 3) + (a < 9 ? 3 : 6);
            b += a;
            break;
          case 0:
            throw 6;
        }
      return b;
    }
  }
  kh.i = !0;
  class Sb {
    static vo(a, b, c, d) {
      if (d > 0)
        if (a == c)
          if (b < 0) {
            c = b + d;
            b = 0 + d;
            for (var e = 0; e < d; ) (++e, --c, --b, (a[b] = a[c]));
          } else {
            if (b > 0)
              for (c = b, e = b = 0; e < d; ) (++e, (a[b] = a[c]), ++c, ++b);
          }
        else if (b == 0) for (b = 0; b < d; ) ((e = b++), (c[e] = a[e]));
        else if (b == 0) for (b = 0; b < d; ) ((e = b++), (c[0 + e] = a[e]));
        else
          for (e = 0; e < d; ) {
            let f = e++;
            c[f] = a[b + f];
          }
    }
    static Qs(a) {
      var b, c;
      c == null && (c = 0);
      b == null && (b = 0);
      let d = b;
      for (b = c <= 0 ? a.length : b + c; d < b; ) a[d++] = null;
    }
    static NN(a, b, c) {
      let d = 0,
        e,
        f = c + 1;
      for (; d < f; )
        ((e = d + ((f - d) >> 1)), a[e] < b ? (d = e + 1) : (f = e));
      return d <= c && a[d] == b ? d : ~d;
    }
  }
  Sb.i = !0;
  class Ta {
    constructor() {
      this.alpha = 1;
      this.rotation = 0;
      this.vn = this.wn = 1;
      this.x = this.y = 0;
    }
    update() {}
    O() {}
  }
  Ta.i = !0;
  Object.assign(Ta.prototype, { j: Ta });
  class Bf extends Ta {
    constructor(a, b, c) {
      super();
      this.WN = b;
      this.uj = c;
      this.hm = 0;
      this.isActive = !1;
      this.l = new V();
      a.oa(0).R(this.l.B);
      this.Zk = new Cf(a.oa(12));
      this.$k = new Df(a.oa(12));
      a = new va();
      a.Dc(0.27999999999999997, 0);
      a.Dc(0.4, 0.5);
      a.Dc(0.27999999999999997, 1);
      a.gl(0, 0);
      a.gl(360, 1);
      this.gj = new C(null, p.Sd, k.XJ);
      this.gj.D();
      this.gj.ge(3);
      this.gj.M(!1);
      this.l.appendChild(this.gj);
      new Da(this.gj).loop(a);
    }
    G() {
      this.l.G();
      this.l = null;
      this.Zk.G();
      this.$k.G();
      x.stop(x.Rq);
    }
    GF(a) {
      a &&
        !this.isActive &&
        (this.$k.reset(), (this.hm = 0), (this.state = 1), x.play(x.Rq, !0));
      !a && this.isActive && ((this.state = 0), (this.hm = Zi), x.stop(x.Rq));
      this.Zk.Nt(a);
      this.$k.Nt(a);
      this.gj.M(a);
      this.isActive = a;
    }
    update(a) {
      if (
        this.l != null &&
        (super.update(a),
        (this.hm = Ka.Nk(this.hm, this.state == 0 ? 0 : 0.3, 1, a)),
        this.isActive)
      ) {
        let b = this.state == 1 ? this.hm / 0.3 : this.hm / Zi;
        this.Zk.x = this.uj.x;
        this.Zk.y = this.uj.y;
        this.Zk.update(a);
        this.Zk.alpha = b;
        this.$k.alpha = b * 0.5;
        this.$k.cW(this.uj, this.WN);
        this.$k.update(a);
      }
    }
    O() {
      this.l != null &&
        (super.O(),
        this.isActive &&
          (this.gj.m(this.uj.x),
          this.gj.o(this.uj.y),
          this.Zk.O(),
          this.$k.O()));
    }
  }
  Bf.i = !0;
  Bf.u = Ta;
  Object.assign(Bf.prototype, { j: Bf });
  class Cf extends Ta {
    constructor(a) {
      super();
      this.l = new V();
      a.R(this.l.B);
      this.uu = 4;
      this.jW = 2;
      this.eH = [];
      a = 0;
      let b = this.uu;
      for (; a < b; ) {
        ++a;
        let c = new C(this.l, p.Sd, k.$J);
        c.D();
        c.ge(3);
        this.eH.push(c);
      }
      this.$E = 1.25;
      this.uF = 2;
      this.IN = 0.7;
      this.Cc = 0;
      this.Nt(!1);
    }
    G() {
      this.l.G();
      this.l = null;
    }
    Nt(a) {
      this.l.M(a);
    }
    JU(a) {
      this.Cc = a > fe ? 0 : a;
    }
    update(a) {
      this.JU(this.Cc + a / this.jW);
    }
    O() {
      if (this.l != null) {
        for (var a = Array(4), b = 0, c = this.uu; b < c; ) {
          var d = b++;
          a[d] = this.Cc + (d * fe) / this.uu;
        }
        b = 0;
        for (c = this.uu; b < c; ) {
          d = b++;
          let e = this.eH[d];
          a[d] > fe && (a[d] -= fe);
          let f = this.IN * Math.cos(a[d]) * this.alpha;
          d % 2 != 0
            ? e.na((this.uF * 360 * a[d]) / Fb)
            : e.na((-this.uF * 360 * a[d]) / Fb);
          e.qa(this.$E * Math.sin(a[d]) * 0.4);
          e.nb(this.$E * Math.sin(a[d]) * 0.4);
          e.m(this.x);
          e.o(this.y);
          e.X(f);
        }
      }
    }
  }
  Cf.i = !0;
  Cf.u = Ta;
  Object.assign(Cf.prototype, { j: Cf });
  class Df extends Ta {
    constructor(a) {
      super();
      this.Xt = new t(0, 0);
      this.Cc = this.length = 0;
      this.l = new V();
      a.R(this.l.B);
      this.yb = [];
      for (a = 0; a < 4; ) {
        ++a;
        let b = new C(this.l, p.Sd, "ray");
        b.ge(3);
        b.X(0.3);
        b.M(!1);
        this.yb.push(b);
      }
    }
    G() {
      this.l.G();
      this.l = null;
    }
    Nt(a) {
      this.l != null && this.l.M(a);
    }
    cW(a, b) {
      b = t.La(b, a);
      this.length = b.Ub();
      this.rotation = Math.atan2(b.y, b.x) * wc - 90;
      this.Xt.x = a.x;
      this.Xt.y = a.y;
    }
    reset() {
      this.Cc = 0;
    }
    update() {
      this.Cc += 0.05;
      let a = 0;
      for (; a < 4; ) this.yb[a++].CU(this.Cc);
    }
    O() {
      if (this.l != null) {
        var a = Math.ceil(this.length / (this.yb[0].Y.y / 4));
        a > 4 && (a = 4);
        for (var b = 0; b < 4; ) this.yb[b++].M(!1);
        for (var c = (b = 0); c < a; ) {
          let d = c++,
            e = this.yb[d];
          b += e.Y.y;
          e.m(-e.Y.x / 2);
          e.o(d * e.Y.y);
          e.M(!0);
        }
        this.l.qa(0.27999999999999997);
        this.l.nb(this.length / b);
        this.l.m(this.Xt.x);
        this.l.o(this.Xt.y);
        this.l.na(this.rotation);
      }
    }
  }
  Df.i = !0;
  Df.u = Ta;
  Object.assign(Df.prototype, { j: Df });
  class vh {
    constructor(a) {
      this.T = a;
      this.l = new V();
      this.Ha = new C(this.l);
      a.oa(0).R(this.l.B);
      this.ew = !1;
    }
    eV() {
      this.Hg = new V();
      this.l.appendChild(this.Hg);
      this.Vo = new C(this.Hg, p.Vo);
      this.Vo.D();
    }
    pP() {
      this.ew = !this.ew;
      this.Vo.Vb().rotation(this.ew ? 180 : 0, 0.3, za.Wc(100));
    }
    update() {
      let a = ua.instance.window.Xi(),
        b = this.T.Vg,
        c = this.T.Ug;
      var d = new ia(0, 0, a.x, a.y).Mi(this.T.Vg / this.T.Ug),
        e = this.T.Eb.Db.zoom;
      let f = (a.x - (d.C - d.A)) / e;
      d = (a.y - (d.H - d.F)) / e;
      this.Ha.mg(p.rv);
      this.Ha.D();
      e = !1;
      a.x / a.y < 1.2
        ? (this.Ha.na(0),
          this.Ha.qa((b + f) / this.Ha.Y.x),
          this.Ha.nb((c + d) / this.Ha.Y.y))
        : (this.Ha.na(90),
          (e = !0),
          this.Ha.qa((c + d) / this.Ha.Y.x),
          this.Ha.nb((b + f) / this.Ha.Y.y));
      this.Ha.m(b / 2);
      this.Ha.o(c / 2);
      this.Vo != null &&
        (e
          ? (this.Hg.qa(this.Ha.md),
            this.Hg.nb(this.Ha.Wa),
            this.Hg.m(this.Ha.ya() + 55 * this.Ha.md),
            this.Hg.o(this.Ha.Xa() + 10 * this.Ha.Wa))
          : (this.Hg.qa(this.Ha.Wa),
            this.Hg.nb(this.Ha.md),
            this.Hg.m(this.Ha.ya() + 10 * this.Ha.Wa),
            this.Hg.o(this.Ha.Xa() - 40 * this.Ha.md)));
    }
  }
  vh.i = !0;
  Object.assign(vh.prototype, { j: vh });
  class Fa {
    constructor() {
      this.jk = 1;
      this.x = this.y = this.rotation = 0;
      this.visible = !0;
      this.va = new ia(Ba, Ba, Ca, Ca);
    }
    De() {
      this.va.A = this.x + this.ga.A;
      this.va.F = this.y + this.ga.F;
      this.va.C = this.x + this.ga.C;
      this.va.H = this.y + this.ga.H;
    }
    O() {}
    MF(a) {
      this.rb = a;
    }
    update(a) {
      this.rb != null &&
        (this.rb.update(a),
        (this.x = this.rb.g.x),
        (this.y = this.rb.g.y),
        (this.rotation = this.rb.angle));
    }
    AT(a, b) {
      let c = this.va,
        d = this.va;
      return Y.Uk(a, b, this.va.A, this.va.F, c.C - c.A, d.H - d.F);
    }
    ST(a, b, c, d) {
      let e = this.va.A,
        f = this.va.F,
        g = this.ga,
        h = this.ga;
      return Y.Yx(a, b, c, d, e, f, e + (g.C - g.A), f + (h.H - h.F));
    }
    static tp(a, b) {
      return $i.test(a.va, b.va);
    }
  }
  Fa.i = !0;
  Object.assign(Fa.prototype, { j: Fa });
  class ec extends Fa {
    constructor() {
      super();
      this.constraint = null;
      this.Pg = 0;
      this.vD = !1;
      this.Pc = null;
      this.qy = 0;
      this.Ao = this.ea = null;
    }
  }
  ec.i = !0;
  ec.u = Fa;
  Object.assign(ec.prototype, { j: ec });
  class Ga extends Fa {
    constructor() {
      super();
      this.OG = -1;
    }
    Ny(a) {
      this.OG = a;
    }
    Cm() {
      return this.OG != -1;
    }
    tk() {
      return new t(this.x, this.y);
    }
    eh(a) {
      this.x = a.x;
      this.y = a.y;
    }
    Ng() {
      return null;
    }
    Ur() {
      let a = this.Ng();
      return (a.x + a.y) / 4;
    }
    yU(a) {
      this.jk = a.x;
    }
    zE() {}
    nj(a) {
      this.rotation = a.angle != null ? a.angle : 0;
      let b = a.path;
      if (b != null) {
        let c = Ka.aA;
        b.charAt(0) == "R" &&
          (c = Math.round((ra.parseInt(qa.substr(b, 2, null)) * 3) / 2 + 1));
        a = new ge(c, a.moveSpeed * xa.bo, a.rotateSpeed);
        a.angle = this.rotation;
        a.NF(b, this.x, this.y);
        this.MF(a);
        a.start();
      }
    }
  }
  Ga.i = !0;
  Ga.u = Fa;
  Object.assign(Ga.prototype, { j: Ga });
  class Ef extends Ga {
    constructor(a) {
      super();
      this.T = a;
      this.qk = this.time = 0;
      this.l = new V();
      this.l.I(0.4);
      a.oa(11).R(this.l.B);
    }
    LV() {
      this.l.M(!0);
      this.dd = new C(this.l, p.Sa, k.dK);
      this.dd.D();
      this.dd.I(0.4);
      var a = new va();
      a.Dc(0.01, 0);
      a.Dc(1, 0.2);
      a.Pa(0, 0);
      a.Pa(1, 0.2);
      new Da(this.dd).play(a);
      this.Sa = new C(this.l, p.Sa, k.fK);
      this.Sa.D();
      this.Sa.sa().loop(Bj);
      this.Sa.sa().Wx();
      a = new va();
      a.Dc(0, 0);
      a.Dc(1, 0.2);
      a.Pa(0, 0);
      a.Pa(1, 0.2);
      new Da(this.Sa).play(a);
      this.Sy = new C(this.l, p.Sa, k.oK);
      this.Sy.D();
      this.Sy.I(0.4);
      a = new va();
      a.Dc(0.01, 0);
      a.Dc(1, 0.205);
      a.Dc(1.5, 0.505);
      a.Pa(0, 0);
      a.Pa(1, 0.05);
      a.Pa(1, 0.305);
      a.Pa(0, 0.505);
      new Da(this.Sy).play(a, function () {});
    }
    Gv() {
      this.time = 0;
      this.cO = !0;
      x.play(x.ML);
      var a = new va();
      a.Pa(1, 0);
      a.Pa(1, 0.05);
      a.Pa(0, 0.805);
      a.gl(1, 0);
      a.gl(1, 0.05);
      a.gl(360, 0.805);
      a.Dc(1, 0);
      a.Dc(1, 0.05);
      a.Dc(0.01, 0.805);
      new Da(this.Sa).play(a);
      a = new va();
      a.Pa(1, 0);
      a.Pa(1, 0.05);
      a.Pa(0, 0.805);
      a.Dc(1, 0);
      a.Dc(1, 0.05);
      a.Dc(0.01, 0.805);
      new Da(this.dd).play(a);
      for (a = 0; a < 6; ) {
        var b = a++,
          c = (b * yi) / 6;
        let d = new C(this.l, p.Sa, k.pK);
        d.I((b & 1) == 0 ? 0.5 : 1);
        d.D();
        b = Math.cos(c) * bb.ug * 10;
        c = Math.sin(c) * bb.ug * 10;
        d.Vb().x(b, 1);
        d.Vb().y(c, 1);
        d.Vb().scale(0, 1);
        d.Vb().alpha(0, 1, za.Ux());
        d.Vb().rotation(360, 1);
      }
    }
    G() {
      this.l.G();
      this.l = null;
    }
    update(a) {
      super.update(a);
      if (this.l != null) {
        this.qk += a;
        for (var b = Math.sin(this.qk * 3) * 3, c = 0, d = this.l.vk(); c < d; )
          this.l.pb(c++).o(b);
        this.time += a;
        this.cO && this.time > 1 && this.G();
      }
    }
    Ng() {
      let a = this.ga,
        b = this.ga;
      return new t((a.C - a.A) * 0.9, (b.H - b.F) * 0.9);
    }
    Ur() {
      return 8;
    }
    O() {
      this.l != null && (super.O(), this.l.m(this.x), this.l.o(this.y));
    }
  }
  Ef.i = !0;
  Ef.u = Ga;
  Object.assign(Ef.prototype, { j: Ef });
  class ib {
    constructor(a) {
      this.V = a;
      this.controller = this.rw();
    }
    QC() {
      return this.controller.Vu ? this.controller.Wg - this.controller.ve : -1;
    }
    Mc(a) {
      return this.controller.$a == a;
    }
    play(a, b) {
      this.controller.Xh = 0;
      this.controller.ey = b != null ? b - 1 : 0;
      this.controller.play(a);
      return this;
    }
    IE(a) {
      let b = this;
      this.play(a).Ue(function () {
        b.V.G();
      });
    }
    loop(a, b) {
      b == null && (b = !1);
      this.controller.Xh = b ? 2 : 1;
      this.controller.play(a);
      return this;
    }
    stop() {
      this.controller.stop();
      return this;
    }
    Ue(a) {
      this.controller.IU(a);
    }
    Wx() {
      this.controller.Fd = fa.Wo(0, this.QC());
    }
    setTime(a) {
      let b = this.QC();
      this.controller.Fd = a < 0 ? 0 : a > b ? b : a;
      return this;
    }
    rw() {
      let a = this.V.B.mP(),
        b = this;
      (a != null && a.fB) ||
        ((a = new he()),
        a.HU(function (c, d) {
          b.V.mq(d);
        }),
        this.V.B.br(a));
      return a;
    }
    static create(a) {
      function b(u) {
        g.Xb(u) != null &&
          ((u = qa.substr(g.Xb(u), 1, null)),
          (e = u.indexOf(".") != -1 ? parseFloat(u) : 1 / ra.parseInt(u)));
      }
      function c(u) {
        return f + (u < 10 ? "000" : u < 100 ? "00" : "0") + u;
      }
      let d = [],
        e = 0.03333333333333333,
        f = "",
        g = null,
        h = 0;
      for (a = a.split(","); h < a.length; ) {
        var l = a[h];
        ++h;
        g = new oa("^([a-z][\\w\\/]*)(@[\\d\\.]+)*", "i");
        if (g.match(l)) ((f = g.Xb(1)), b(2));
        else if (
          ((g = new oa("^(\\d+)-(\\d+)(@[\\d\\.]+)*", "")), g.match(l))
        ) {
          var n = ra.parseInt(g.Xb(1)),
            q = ra.parseInt(g.Xb(2));
          b(3);
          l = [];
          var r = n;
          if (n > q) for (; r >= q; ) l.push(r--);
          else for (; r <= q; ) l.push(r++);
          n = [];
          q = 0;
          for (r = l.length; q < r; ) (++q, n.push(e));
          for (r = q = 0; r < l.length; ) d.push(new Nc(c(l[r++]), n[q++]));
        } else if (
          ((g = new oa("^(\\d+)x(\\d+)(@[\\d\\.]+)*", "")), g.match(l))
        )
          for (
            l = ra.parseInt(g.Xb(1)), n = ra.parseInt(g.Xb(2)), b(3), q = 0;
            q < n;
          )
            (++q, d.push(new Nc(c(l), e)));
        else
          ((g = new oa("^\\d+(@[\\d\\.]+)*(@[\\d\\.]+)*", "")),
            g.match(l) && (b(1), d.push(new Nc(c(ra.parseInt(g.Xb(0))), e))));
      }
      return new rd(d, 0);
    }
  }
  ib.i = !0;
  Object.assign(ib.prototype, { j: ib });
  class Nc {
    constructor(a, b) {
      this.data = a;
      this.time = b;
    }
  }
  Nc.i = !0;
  Object.assign(Nc.prototype, { j: Nc });
  class rd {
    constructor(a, b) {
      this.Af = a.length;
      this.data = Array(this.Af);
      let c = 0;
      for (; c < this.Af; ) ((this.data[c] = a[c].data), ++c);
      switch (b) {
        case 0:
          this.Ya = Array(this.Af + 1);
          this.Hj = 0;
          this.qr = a[0].time;
          c = 2;
          for (b = a[1].time; c < this.Af; )
            if (a[c++].time != b) {
              this.qr = 0;
              break;
            }
          for (c = 0; c < this.Af; )
            ((this.Ya[c] = this.Hj), (this.Hj += a[c].time), ++c);
          this.Ya[c] = this.Hj;
          break;
        case 1:
          for (
            this.Ya = Array(this.Af),
              this.Hj = a[this.Af - 1].time,
              this.qr = null,
              c = 0;
            c < this.Af;
          )
            ((this.Ya[c] = a[c].time), ++c);
      }
    }
  }
  rd.i = !0;
  Object.assign(rd.prototype, { j: rd });
  class Ff extends Ta {
    constructor(a, b) {
      super();
      this.T = a;
      this.K = b;
      this.l = new V();
      a.oa(0).R(this.l.B);
      this.Wc = new C(this.l, p.Sd, k.SJ);
      this.Wc.D();
      this.Wc.M(!1);
      this.Wc.na(0);
      this.Wc.I(0.5);
      this.Wc.ge(4);
      this.Cc = this.rr = 0;
      this.pg = new Gf(a, 10);
    }
    G() {
      this.Wc.G();
      this.pg.G();
      this.l.G();
      this.l = null;
    }
    nC(a, b) {
      this.rr > 0 ||
        ((this.rr = 0.064),
        this.Wc.m(a.x),
        this.Wc.o(a.y),
        this.Wc.M(!0),
        this.Wc.X(1),
        this.Wc.na(90 - b),
        (this.Cc = 0),
        (this.pg.x = a.x),
        (this.pg.y = a.y),
        (this.pg.angle = -b),
        (a = new t(1, 0)),
        a.rotate((-b * Fb) / 180),
        (b = t.Rb(a, 15)),
        (this.pg.x -= b.x),
        (this.pg.y -= b.y),
        this.pg.Fn(10),
        this.K.JE(),
        x.play(x.yA));
    }
    update(a) {
      this.l != null &&
        ((this.rr -= a),
        (this.Cc += a * 15),
        this.Cc >= Fb && this.Wc.M(!1),
        this.Wc.X(Math.sin(this.Cc)),
        this.pg.update(a));
    }
    O() {
      super.O();
      this.pg.O();
    }
  }
  Ff.i = !0;
  Ff.u = Ta;
  Object.assign(Ff.prototype, { j: Ff });
  class Kb extends Ta {
    constructor(a) {
      super();
      this.y = this.x = 0;
      this.wn = this.vn = 1;
      this.rotation = 0;
      this.Kj = [];
      this.Di = [];
      this.iz = a;
      this.hc = [];
      this.active = !1;
      this.Cr = this.duration = 0;
      this.Nb = new t(0, 0);
      this.PE = new t(0, 0);
      this.kx =
        this.ed =
        this.Wy =
        this.size =
        this.ZE =
        this.it =
        this.wG =
        this.$t =
        this.sq =
        this.speed =
        this.oo =
        this.angle =
          0;
      this.Ej = new eb(0, 0, 0, 0);
      this.Wt = new eb(0, 0, 0, 0);
      this.Ji = new eb(0, 0, 0, 0);
      this.Fr = new eb(0, 0, 0, 0);
      this.yt = this.tn = this.gm = this.Dr = 0;
      this.Kj = [];
      this.Di = [];
      this.oj = 0;
      this.tE = null;
    }
    cB() {
      if (this.hc.length != this.iz) {
        var a = new wh();
        this.Mh(a);
        this.hc.push(a);
      }
    }
    Mh(a) {
      a.g.x = this.x + this.PE.x * fa.Jc();
      a.g.y = this.y + this.PE.y * fa.Jc();
      a.Fj.Sb(a.g);
      var b = (this.angle + this.oo * fa.Jc()) * Oa;
      b = new t(Math.cos(b), Math.sin(b));
      b.multiply(this.speed + this.sq * fa.Jc());
      a.dir = b;
      a.it = this.it + this.ZE * fa.Jc();
      a.$t = this.$t + this.wG * fa.Jc();
      a.Cs = a.ed = this.ed + this.kx * fa.Jc();
      b = new eb(
        this.Ej.r + this.Wt.r * fa.Jc(),
        this.Ej.Le + this.Wt.Le * fa.Jc(),
        this.Ej.b + this.Wt.b * fa.Jc(),
        this.Ej.a + this.Wt.a * fa.Jc(),
      );
      let c = new eb(
        this.Ji.r + this.Fr.r * fa.Jc(),
        this.Ji.Le + this.Fr.Le * fa.Jc(),
        this.Ji.b + this.Fr.b * fa.Jc(),
        this.Ji.a + this.Fr.a * fa.Jc(),
      );
      a.color = b;
      a.Gi.r = (c.r - b.r) / a.ed;
      a.Gi.Le = (c.Le - b.Le) / a.ed;
      a.Gi.b = (c.b - b.b) / a.ed;
      a.Gi.a = (c.a - b.a) / a.ed;
      a.size = this.size + this.Wy * fa.Jc();
    }
    update(a) {
      super.update(a);
      if (this.tE == null || this.hc.length != 0 || this.active) {
        if (this.active && this.Dr != 0) {
          var b = 1 / this.Dr;
          for (this.gm += a; this.hc.length < this.iz && this.gm > b; )
            (this.cB(), (this.gm -= b));
          this.Cr += a;
          this.duration != -1 && this.duration < this.Cr && this.qV();
        }
        for (this.oj = 0; this.oj < this.hc.length; )
          ((b = this.hc[this.oj]),
            b.ed > 0
              ? (this.aW(b, a),
                (b.color.r += b.Gi.r * a),
                (b.color.Le += b.Gi.Le * a),
                (b.color.b += b.Gi.b * a),
                (b.color.a += b.Gi.a * a),
                (b.ed -= a),
                this.li(b, this.oj, a),
                this.oj++)
              : this.$g(this.oj));
      } else this.tE(this);
    }
    aW(a, b) {
      if (a.g.x != 0 || a.g.y != 0) {
        var c = a.g.cc();
        c.normalize();
      } else c = new t(0, 0);
      let d = c.cc();
      c.multiply(a.it);
      let e = d.x;
      d.x = -d.y;
      d.y = e;
      d.multiply(a.$t);
      c = t.ub(c, d);
      c.add(this.Nb);
      c.multiply(b);
      a.dir.add(c);
      c.Sb(a.dir);
      c.multiply(b);
      a.g.add(c);
    }
    li(a) {
      this.Kj[this.oj] = new xh(a.g.x, a.g.y, a.size);
      this.Di[this.oj] = a.color;
    }
    $g(a) {
      this.hc.splice(a, 1);
    }
    Fn(a) {
      if (this.hc.length > 0) for (; this.hc.length > 0; ) this.$g(0);
      this.hc = [];
      let b = 0;
      for (; b < a; ) (++b, this.cB());
      this.active = !0;
    }
    qV() {
      this.active = !1;
      this.Cr = this.duration;
      this.gm = 0;
    }
    O() {}
  }
  Kb.i = !0;
  Kb.u = Ta;
  Object.assign(Kb.prototype, { j: Kb });
  class Gf extends Kb {
    constructor(a, b) {
      super(b);
      this.T = a;
      this.yb = [];
      this.angle = 0;
      this.oo = 50;
      this.ed = 0.5;
      this.kx = 0.3;
      this.duration = 1.5;
      this.speed = 80;
      this.sq = 10;
    }
    G() {
      let a = 0,
        b = this.yb;
      for (; a < b.length; ) b[a++].G();
    }
    Mh(a) {
      super.Mh(a);
      a = new C(null, p.Sd, k.YJ);
      a.D();
      a.I(0.2 + Math.random() * 0.1);
      this.T.oa(5).R(a.B);
      a.ge(3);
      this.yb.push(a);
    }
    li(a, b, c) {
      a.g.add(t.Rb(a.dir, c));
      super.li(a, b, c);
    }
    $g(a) {
      super.$g(a);
      let b = this.yb[a];
      this.yb.splice(a, 1);
      b.G();
    }
    O() {
      super.O();
      let a = 0,
        b = this.hc.length;
      for (; a < b; ) {
        var c = a++;
        let d = this.hc[c];
        c = this.yb[c];
        c.m(d.g.x);
        c.o(d.g.y);
        c.na(d.angle);
        c.X(d.ed / d.Cs);
      }
    }
    update(a) {
      super.update(a);
      a = 0;
      let b = this.hc.length;
      for (; a < b; ) {
        let c = this.hc[a++];
        c.angle = 52 + Math.atan2(c.dir.y, c.dir.x) * wc;
      }
    }
  }
  Gf.i = !0;
  Gf.u = Kb;
  Object.assign(Gf.prototype, { j: Gf });
  class sd extends Ga {
    constructor(a, b, c, d, e) {
      super();
      this.angle = 0;
      this.Jb = t.Ac();
      this.ac = t.Ac();
      this.cd = t.Ac();
      this.xd = t.Ac();
      this.bu = -1;
      this.sp = new t(0, 0);
      this.jl = !1;
      this.l = new V();
      a.oa(5).R(this.l.B);
      this.U = new C(this.l);
      this.U.mg(p.nd, d == 1 ? k.II : k.KI);
      this.U.I(0.4);
      this.U.D();
      this.rotation = e;
      this.x = b;
      this.y = c;
      this.w = d;
      this.ht = new t(b, c);
      a = ((d == 1 ? 194 : 302) * 0.4) / 2;
      d = ((d == 1 ? 127 : 123) * 0.4) / 2;
      d = this.ga = new ia(0 - a, 0 - d, a, d);
      this.va = new ia(d.A, d.F, d.C, d.H);
      this.Qd();
    }
    MB() {
      this.ht.x = this.x;
      this.ht.y = this.y;
    }
    kT() {
      let a = this.w == 1 ? Cj : Dj;
      this.U.sa().play(a);
    }
    Qd() {
      var a = this.ga;
      a = a.C - a.A;
      this.Jb.x = this.x - a / 2;
      this.ac.x = this.x + a / 2;
      this.Jb.y = this.ac.y = this.y - aj / 2;
      this.cd.x = this.Jb.x;
      this.xd.x = this.ac.x;
      this.cd.y = this.xd.y = this.y + aj / 2;
      this.angle = this.rotation * Oa;
      this.Jb.cb(this.angle, this.x, this.y);
      this.ac.cb(this.angle, this.x, this.y);
      this.cd.cb(this.angle, this.x, this.y);
      this.xd.cb(this.angle, this.x, this.y);
    }
    update(a) {
      super.update(a);
      this.rb != null && this.Qd();
    }
    O() {
      super.O();
      this.l.m(this.x);
      this.l.o(this.y);
      this.U.I(0.4 * this.jk);
      this.l.na(this.rotation);
    }
    Ng() {
      let a = this.ga,
        b = this.ga;
      return new t(a.C - a.A, b.H - b.F);
    }
    eh(a) {
      let b = new t(this.x, this.y);
      t.La(a, b).cp() < 1e-6 ||
        (this.bu >= 0.001 && this.bu <= 0.1
          ? ((this.sp = t.Uq(t.La(a, b), this.bu)),
            this.sp.cp() > 4e4 && (this.sp = t.Rb(t.Vq(this.sp), 200)))
          : (this.sp = new t(0, 0)),
        (this.bu = 0),
        (this.ht = b.cc()),
        (this.x = a.x),
        (this.y = a.y),
        this.Qd());
    }
    zE() {
      this.MB();
    }
  }
  sd.i = !0;
  sd.u = Ga;
  Object.assign(sd.prototype, { j: sd });
  class ie extends Ta {
    constructor(a, b, c, d, e) {
      super();
      this.l = new V();
      a.oa(0).R(this.l.B);
      this.l.ge(3);
      this.l.M(!1);
      this.frames = [];
      a = [];
      for (var f = 0; f < d; ) (++f, a.push(0));
      this.Ya = a;
      for (a = 0; a < d; ) {
        f = a++;
        let g = this.nO(b, c);
        this.l.appendChild(g);
        this.frames.push(g);
        this.Ya[f] = (1 / d) * f;
      }
      this.delay = 0.3;
      this.SQ = e;
    }
    G() {
      this.l.G();
      this.l = null;
    }
    nO(a, b) {
      let c = new V(),
        d = a / 2,
        e = b / 2;
      var f = new C(c, p.Sd, k.VJ);
      f.I(0.25);
      var g = new C(c, p.Sd, k.WJ);
      g.I(0.25);
      g.m(a - g.ha());
      var h = new C(c, p.Sd, k.UJ);
      h.I(0.25);
      h.m(a - h.ha());
      h.o(b - h.la());
      h = new C(c, p.Sd, k.TJ);
      h.I(0.25);
      h.o(b - h.la());
      let l = new C(c, p.Sd, k.jA);
      l.m(f.ya() + f.ha());
      l.qa((g.ya() - f.ha()) / l.Y.x);
      l.nb(0.25);
      g = new C(c, p.Sd, k.jA);
      g.qa(l.Wa);
      g.nb(0.25);
      g.m(f.ya() + f.ha());
      g.o(b - g.la());
      b = new C(c, p.Sd, k.kA);
      b.o(f.la());
      b.qa(0.25);
      b.nb((h.Xa() - f.la()) / b.Y.y);
      f = new C(c, p.Sd, k.kA);
      f.qa(0.25);
      f.nb(b.md);
      f.m(a - f.ha());
      f.o(b.Xa());
      for (a = 0; a < 8; )
        ((f = a++),
          (b = c.pb(f)),
          b.m(b.ya() - d),
          (f = c.pb(f)),
          f.o(f.Xa() - e));
      c.m(d);
      c.o(e);
      return c;
    }
    update(a) {
      this.delay -= a;
      if (!(this.delay > 0) && this.l != null) {
        super.update(a);
        this.l.M(!0);
        for (var b = 0, c = this.frames.length; b < c; ) {
          var d = b++;
          this.Ya[d] += a;
          this.Ya[d] > 1 && (this.Ya[d] -= this.Ya[d]);
          let e = this.frames[d];
          d = this.Ya[d];
          e.X(Wa(d, 0, 1, 1, 0));
          e.I(Wa(d, 0, 1, 0.89, 1.1));
          this.SQ ? e.I(Wa(d, 0, 1, 0.89, 1.1)) : e.I(Wa(d, 0, 1, 1.1, 0.89));
        }
      }
    }
  }
  ie.i = !0;
  ie.u = Ta;
  Object.assign(ie.prototype, { j: ie });
  class Hf extends Fa {
    constructor(a, b) {
      super();
      this.T = a;
      this.container = b;
      this.rf = [];
      this.Vm = [];
    }
    OQ(a, b, c, d) {
      function e(g, h) {
        return new Nc(new t(g.x, g.y), h);
      }
      this.l = new V();
      this.T.oa(5).R(this.l.B);
      this.mp = new C(null, p.gap, k.$I);
      this.mp.I(0.4);
      this.mp.D();
      this.T.oa(0).R(this.mp.B);
      this.x = a.x;
      this.y = a.y;
      this.cE = b;
      this.aa = c;
      this.AN = d;
      this.elapsedTime = 0;
      this.isActive = !1;
      b = new t(0, 0);
      a = this.cE * Oa;
      c = new t(0, -27.200000000000003);
      d = new t(0, -33.6);
      let f = new t(0, -28);
      this.rf[0] = t.ub(b, new t(0, -4.4).rotate(a));
      this.rf[1] = t.ub(b, c.rotate(a));
      this.rf[2] = t.ub(b, d.rotate(a));
      this.rf[3] = t.ub(b, f.rotate(a));
      c = new t(0, -43.2);
      d = new t(0, -9.200000000000001);
      this.Vm[0] = t.ub(b, new t(0, -36.4).rotate(a));
      this.Vm[1] = t.ub(b, c.rotate(a));
      this.Vm[2] = t.ub(b, d.rotate(a));
      b = new t(0, 0);
      d = new t(0, 5.400000000000001);
      c = new t(0, -4.799999999999997);
      d.rotate(a);
      c.rotate(a);
      a = t.ub(b, d);
      b = t.ub(b, c);
      zi == null &&
        ((c = new va()),
        c.setScale(0.4, 0.4, 0, 100),
        c.ci(0, 0, 0, 100),
        c.setScale(0.45999999999999996, 0.34, 0.05),
        c.ci(a.x, a.y, 0.05),
        c.setScale(0.34, 0.45999999999999996, 0.1),
        c.ci(b.x, b.y, 0.1),
        c.setScale(0.4, 0.4, 0.15),
        c.ci(0, 0, 0.15),
        (zi = c));
      this.gB = new rd(
        [
          e(this.rf[0], 0, 100),
          e(this.rf[1], 0.05, 100),
          e(this.rf[2], 0.1, 100),
          e(this.rf[3], 0.15),
        ],
        1,
      );
      this.JN = new rd(
        [
          e(this.Vm[0], 0, 100),
          e(this.Vm[1], 0.05, 100),
          e(this.Vm[2], 0.1, 100),
        ],
        1,
      );
    }
    SD(a, b) {
      this.l.appendChild(a);
      this.Pf = a;
      this.fa = b;
      this.Vr().M(!1);
      this.fa != null
        ? ((this.fa.g.x = this.x + this.rf[3].x),
          (this.fa.g.y = this.y + this.rf[3].y),
          (this.fa.ja.x = this.fa.g.x),
          (this.fa.ja.y = this.fa.g.y),
          this.pv(this.gB),
          this.uk().sa().play(bj).Ue(M(this, this.Ws)))
        : this.uk().sa().play(cj).Ue(M(this, this.Ws));
      a.D();
      x.play(x.BL);
    }
    UD() {
      this.elapsedTime = 0;
      this.isActive = !1;
      this.Vr().M(!1);
      this.fa != null
        ? (this.uk().sa().play(dj).Ue(M(this, this.Ws)), this.pv(this.JN))
        : this.uk().sa().play(ej).Ue(M(this, this.Ws));
    }
    uk() {
      return this.Pf.pb(0);
    }
    Vr() {
      return this.Pf.pb(1);
    }
    pv(a) {
      this.jr = new If(this, this.fa);
      this.jr.play(a);
    }
    wv(a) {
      return t.ud(this.x, this.y, a.g.x, a.g.y) < this.aa;
    }
    Bv(a) {
      this.fa = a;
      a.So = !0;
      a.g.x = this.x + this.rf[3].x;
      a.g.y = this.y + this.rf[3].y;
      a.ja.x = a.g.x;
      a.ja.y = a.g.y;
      a.Gd = new t(0, 0);
      a.ma = new t(0, 0);
      this.uk().Ib(k.eJ);
      this.Op = new Da(this.uk());
      this.Op.play(zi);
      this.pv(this.gB);
    }
    UT() {
      this.fa.So = !1;
      this.fa = null;
      this.UD();
      x.play(x.CL);
    }
    bj() {
      return this.fa != null;
    }
    update(a) {
      super.update(a);
      this.jr != null && this.jr.ki(a);
      this.isActive &&
        ((this.elapsedTime += a),
        this.elapsedTime >= this.AN &&
          (this.Op == null || !this.Op.Mc()) &&
          this.UD());
    }
    O() {
      super.O();
      this.l.m(this.x);
      this.l.o(this.y);
      this.mp.m(this.x);
      this.mp.o(this.y);
      this.Pf != null && this.Pf.na(this.cE);
    }
    Sk(a, b) {
      a = t.ud(this.x, this.y, a, b);
      b = this.Op != null && this.Op.Mc();
      return a < this.aa ? !b : !1;
    }
    Ws(a) {
      switch (a) {
        case cj:
          this.elapsedTime = 0;
          this.isActive = !0;
          fa.ln() &&
            (this.uk().Ib(k.cJ), this.Vr().M(!0), this.Vr().sa().play(Ej));
          break;
        case bj:
          this.elapsedTime = 0;
          this.isActive = !0;
          break;
        case ej:
        case dj:
          (this.Pf.remove(), (this.Pf = null), this.container.GP());
      }
    }
  }
  Hf.i = !0;
  Hf.u = Fa;
  Object.assign(Hf.prototype, { j: Hf });
  class td {
    constructor() {
      this.controllers = null;
      this.mO = !0;
    }
    G() {
      let a = this.controllers,
        b;
      for (; a != null; ) ((b = a.next), a.G(), (a = b));
    }
    br(a) {
      this.controllers != null && (a.next = this.controllers);
      this.controllers = a;
      a.object = this;
    }
    detach(a) {
      if (this.controllers == a) this.controllers = this.controllers.next;
      else {
        let b = this.controllers;
        for (; b.next != a; ) b = b.next;
        b.next = a.next;
      }
      a.next = null;
      a.object = null;
    }
    mP() {
      let a = this.controllers;
      for (; a != null; ) {
        if (a.type == 303) return a;
        a = a.next;
      }
      return null;
    }
    ki(a) {
      if (this.controllers == null || !this.mO) return !1;
      let b = !1,
        c = this.controllers,
        d;
      for (; c != null; ) ((d = c.next), c.update(a) && (b = !0), (c = d));
      return b;
    }
  }
  td.i = !0;
  Object.assign(td.prototype, { j: td });
  class If extends td {
    constructor(a, b) {
      super();
      this.c = new ud();
      this.gap = a;
      this.K = b;
    }
    play(a) {
      let b = a.data[0];
      this.set(b.x, b.y);
      this.c.play(a);
      this.c.Wp = M(this, this.FS);
      this.c.Rk = M(this, this.Rk);
      this.br(this.c);
    }
    Rk() {
      this.G();
      this.gap.jr = null;
    }
    FS(a, b, c) {
      let d = a.x;
      a = a.y;
      this.set(d + (b.x - d) * c, a + (b.y - a) * c);
    }
    set(a, b) {
      this.K.g.x = this.gap.x + a;
      this.K.g.y = this.gap.y + b;
      this.K.ja.x = this.K.g.x;
      this.K.ja.y = this.K.g.y;
    }
  }
  If.i = !0;
  If.u = td;
  Object.assign(If.prototype, { j: If });
  class yh {
    constructor(a) {
      this.T = a;
      this.le = null;
      this.sr = -1;
      this.bE = !1;
      this.lm = [];
    }
    update(a) {
      let b = 0,
        c = this.lm;
      for (; b < c.length; ) c[b++].update(a);
    }
    O() {
      let a = 0,
        b = this.lm;
      for (; a < b.length; ) b[a++].O();
    }
    wv(a) {
      return this.le == null ? !1 : this.le.isActive ? this.le.wv(a) : !1;
    }
    Bv(a) {
      this.le != null && this.le.Bv(a);
    }
    bj() {
      return this.le == null ? !1 : this.le.bj();
    }
    ra(a, b) {
      this.lm.push(a);
      if (b == 1) {
        this.Pf = new V();
        var c = new C(this.Pf, p.gap, k.dJ);
        c.I(0.4);
        c.D();
        c = new C(this.Pf, p.gap, k.aJ);
        c.I(0.4);
        c.D();
        a.SD(this.Pf, a.fa);
        this.le = a;
        this.sr = b;
      }
    }
    Sk(a, b, c) {
      return this.le == null
        ? !1
        : this.le.isActive && this.le.bj() && this.le.Sk(a, b, c)
          ? (this.le.UT(), !0)
          : !1;
    }
    GP() {
      if (!this.bE) {
        var a = this,
          b = Ma.find(this.lm, function (e) {
            return e.index == a.sr;
          }),
          c = this.sr + 1;
        c == this.lm.length + 1 && (c = 1);
        var d = Ma.find(this.lm, function (e) {
          return e.index == c;
        });
        d.SD(this.Pf, b.fa);
        b.fa = null;
        this.sr = c;
        this.le = d;
      }
    }
    pR() {
      this.bE = !0;
    }
  }
  yh.i = !0;
  Object.assign(yh.prototype, { j: yh });
  class lb extends Ga {
    constructor(a) {
      super();
      this.et = !1;
      this.l = new V();
      this.En = new C(null, p.ea, fa.ln() ? k.RI : k.SI);
      this.En.D();
      this.En.I(0.4);
      this.l.appendChild(this.En);
      this.ea = new C(null, p.ea, k.fA);
      this.ea.I(0.4);
      this.ea.D();
      this.l.appendChild(this.ea);
      a.oa(5).R(this.l.B);
      a = lb.Gz.w / 2;
      let b = lb.Gz.J / 2;
      a = this.ga = new ia(0 - a, 0 - b, a, b);
      this.va = new ia(a.A, a.F, a.C, a.H);
    }
    pop() {
      this.ea.M(!1);
      this.et = !0;
    }
    update(a) {
      super.update(a);
      this.De();
    }
    O() {
      this.En.m(this.x);
      this.En.o(this.y);
      this.ea.m(this.x);
      this.ea.o(this.y);
      this.ea.I(0.4 * this.jk);
      (this.fH || this.Cm()) && this.En.M(!1);
    }
    Ng() {
      let a = p.ea.nc.Qf(k.fA).Wd;
      return new t(a.w * 0.4, a.J * 0.4);
    }
  }
  lb.i = !0;
  lb.u = Ga;
  Object.assign(lb.prototype, { j: lb });
  class Jf {
    constructor() {
      this.fF = 1;
      this.Ca = [];
    }
    bB(a, b) {
      this.Ca.splice(b, 0, a);
    }
    aB(a) {
      this.Ca.push(a);
    }
    YT(a) {
      this.Ca.splice(a, 1);
    }
  }
  Jf.i = !0;
  Object.assign(Jf.prototype, { j: Jf });
  class je extends Jf {
    constructor(a, b, c, d, e, f, g, h) {
      super();
      this.MO = new F(0, 0, 0, 1);
      this.NO = new F(0, 0, 0, 1);
      this.QO = new F(0, 0, 0, 1);
      this.OO = new F(0, 0, 0, 1);
      this.RO = new F(0, 0, 0, 1);
      this.effect = new ke();
      this.effect.aa = 2;
      this.xa = new Xa();
      this.xa.kg(this.effect);
      a.R(this.xa);
      this.Zx = 0;
      this.fF = 30;
      this.Hc = -1;
      this.zh = 0;
      this.dD = !1;
      this.Tc = 42;
      this.Sc = b != null ? b : new Lb();
      e != null ? (this.Pb = e) : ((this.Pb = new Lb()), this.Pb.hh(1));
      this.Sc.hh(0.02);
      this.Sc.g.x = c;
      this.Sc.g.y = d;
      this.Pb.g.x = f;
      this.Pb.g.y = g;
      this.aB(this.Sc);
      this.aB(this.Pb);
      this.Pb.Il(this.Sc, this.Tc, 0);
      a = t.La(this.Pb.g, this.Sc.g);
      a.YB(Math.round(h / this.Tc + 2));
      this.kc(h, a);
      this.im = !1;
      this.Nh = -1;
      this.JO = this.Nw = this.Go = !1;
      this.Rv = [];
      this.zB = 3;
    }
    G() {
      this.xa.G();
      this.Rv = this.Pb = this.Sc = this.xa = null;
    }
    Ub() {
      let a = 0,
        b = this.Ca.length;
      if (b > 0) {
        let c = this.Ca[0].g,
          d = 1;
        for (; d < b; ) {
          let e = this.Ca[d++];
          a += c.Nf(e.g);
          c = e.g;
        }
      }
      return a;
    }
    kc(a, b) {
      b == null && (b = t.Ac());
      let c = this.Ca[this.Ca.length - 2],
        d = this.Pb.Yh(c);
      for (var e; a > 0; )
        a >= this.Tc
          ? ((c = this.Ca[this.Ca.length - 2]),
            (e = new Lb()),
            e.hh(0.02),
            (e.g = t.ub(c.g, b)),
            this.bB(e, this.Ca.length - 1),
            this.Pb.JB(c, e, d),
            e.Il(c, this.Tc, 0),
            (a -= this.Tc))
          : ((e = a + d),
            e > this.Tc
              ? ((a = this.Tc), (d = e - this.Tc))
              : ((c = this.Ca[this.Ca.length - 2]), this.Pb.lr(c, e), (a = 0)));
    }
    O() {
      this.effect.zU();
      let a = this.Ca.length;
      var b;
      if (this.Hc == -1) {
        var c = Array(a);
        for (b = 0; b < a; ) {
          var d = b++;
          c[d] = this.Ca[d].g;
        }
        this.Qv(c);
      } else {
        d = [];
        let e = [],
          f = !1,
          g = 0;
        for (; g < a; ) {
          let h = g++;
          c = this.Ca[h];
          let l = !0;
          h > 0 && ((b = this.Ca[h - 1]), c.yQ(b) || (l = !1));
          c.Uh.x != -1 || l || (f = !0);
          f ? e.push(c.g) : (d[h] = c.g);
        }
        d.length > 0 && this.Qv(d);
        e.length > 0 && !this.Nw && this.Qv(e);
      }
    }
    Qv(a) {
      var b = a.length;
      let c = this.Rv;
      if (!(b < 2)) {
        var d = this.Hc == -1 || this.im ? 1 : this.zh / 1.95;
        if (!(d <= 0)) {
          d > 1 && (d = 1);
          var e = a[0],
            f = a[1],
            g = e.x - f.x;
          f = e.y - f.y;
          var h = Math.sqrt(g * g + f * f);
          this.Zx =
            h <= this.Tc + 0.3
              ? 0
              : h <= this.Tc + 1
                ? 1
                : h < this.Tc + 4
                  ? 2
                  : 3;
          if (!(b < 3)) {
            var l = this.MO,
              n = this.NO;
            g = this.QO;
            var q = this.OO;
            f = this.RO;
            l.x = 0;
            l.y = 0;
            l.z = 0;
            l.w = d;
            n.x = 0.475;
            n.y = 0.305;
            n.z = 0.185;
            n.w = d;
            g.x = 0.19;
            g.y = 0.122;
            g.z = 0.074;
            g.w = d;
            q.x = 0.6755555555555556;
            q.y = 0.44;
            q.z = 0.27555555555555555;
            q.w = d;
            f.x = 0.304;
            f.y = 0.198;
            f.z = 0.124;
            f.w = d;
            this.dD &&
              ((n.x *= 3),
              (n.y *= 3),
              (n.z *= 3),
              (q.x *= 3),
              (q.y *= 3),
              (q.z *= 3),
              (g.x *= 3),
              (g.y *= 3),
              (g.z *= 3),
              (f.x *= 3),
              (f.y *= 3),
              (f.z *= 3),
              n.x > 1 && (n.x = 1),
              n.y > 1 && (n.y = 1),
              n.z > 1 && (n.z = 1),
              q.x > 1 && (q.x = 1),
              q.y > 1 && (q.y = 1),
              q.z > 1 && (q.z = 1),
              g.x > 1 && (g.x = 1),
              g.y > 1 && (g.y = 1),
              g.z > 1 && (g.z = 1),
              f.x > 1 && (f.x = 1),
              f.y > 1 && (f.y = 1),
              f.z > 1 && (f.z = 1));
            h > this.Tc + 7 &&
              !this.JO &&
              ((h = (h / this.Tc) * 2),
              (g.x *= h),
              (f.x *= h),
              g.x > 1 && (g.x = 1),
              f.x > 1 && (f.x = 1));
            h = !1;
            b = (b - 1) * this.zB;
            var r = b - 1;
            l = (n.x - g.x) / r;
            var u = (n.y - g.y) / r;
            n = (n.z - g.z) / r;
            var v = (q.x - f.x) / r,
              A = (q.y - f.y) / r;
            q = (q.z - f.z) / r;
            r = this.zB - 1;
            var D = r - 1,
              B = c[0];
            B == null ? (c[0] = e.cc()) : ((B.x = e.x), (B.y = e.y));
            for (e = 1; e <= b; ) {
              B = e / b;
              var G = c[e];
              G == null && (G = c[e] = new t(0, 0));
              t.AF(a, B, G);
              B = (e - 1) % r;
              if (B == D || e == b) {
                var E = this.im
                  ? 16777215
                  : h
                    ? ((((g.z * 255) | 0) & 255) << 16) |
                      ((((g.y * 255) | 0) & 255) << 8) |
                      (((g.x * 255) | 0) & 255)
                    : ((((f.z * 255) | 0) & 255) << 16) |
                      ((((f.y * 255) | 0) & 255) << 8) |
                      (((f.x * 255) | 0) & 255);
                G = [];
                let T = [];
                this.effect.points.push(G);
                this.effect.Di.push(T);
                this.effect.no.push(d);
                let S = e - B - 1,
                  U = c[S++];
                G.push(new F(U.x, U.y, 0, 1));
                E = new F(
                  (E & 255) / 255,
                  ((E >> 8) & 255) / 255,
                  ((E >> 16) & 255) / 255,
                  1,
                );
                for (T.push(E); S <= e; )
                  ((U = c[S]), G.push(new F(U.x, U.y, 0, 1)), T.push(E), ++S);
                h = !h;
                B += 1;
                g.x += l * B;
                g.y += u * B;
                g.z += n * B;
                f.x += v * B;
                f.y += A * B;
                f.z += q * B;
              }
              ++e;
            }
          }
        }
      }
    }
    gU(a) {
      for (var b = this.Ca.length, c = this.Pb.Yh(this.Ca[b - 2]), d; a > 0; )
        if (a >= this.Tc) {
          var e = b - 2;
          d = this.Ca[e];
          this.Pb.JB(d, this.Ca[b - 3], c);
          this.YT(e);
          --b;
          a -= this.Tc;
        } else
          ((e = c - a),
            e < 1
              ? ((a = this.Tc), (c = this.Tc + e + 1))
              : ((d = this.Ca[b - 2]), this.Pb.lr(d, e), (a = 0)));
      a = (b - 1) * (this.Tc + 3);
      b = this.Pb.Cg;
      c = b.length;
      for (d = 0; d < c; ) ((e = b[d++]), e.type == 1 && (e.Yh = a));
    }
    update(a) {
      this.zh > 0 &&
        ((this.zh = Ka.Nk(this.zh, 0, 1, a)),
        this.zh < 1.95 && this.im && this.$x(this.Hc));
      let b = this.Ca.length;
      for (var c, d = 0; d < b; )
        ((c = this.Ca[d++]), c != this.Pb && c.update(a));
      a = 0;
      for (c = this.fF; a < c; ) for (++a, d = 0; d < b; ) this.Ca[d++].Bt();
    }
    $x(a) {
      this.im = !1;
      var b = this.Ca[a],
        c = this.Ca[a + 1];
      if (c == null) b.iF();
      else {
        var d = c.Cg;
        let e = d.length,
          f = 0;
        for (; f < e; ) {
          let g = f++;
          if (d[g].hk == b) {
            c.WT(g);
            d = new Lb();
            d.hh(1e-5);
            d.g.Sb(c.g);
            d.ja.Sb(c.ja);
            this.bB(d, a + 1);
            d.Il(b, this.Tc, 0);
            break;
          }
        }
      }
      a = 0;
      for (b = this.Ca.length; a < b; )
        ((c = this.Ca[a]), c != this.Pb && c.hh(1e-5), ++a);
    }
    Gt(a) {
      this.Hc = a;
      this.zh = 2;
      this.im = !0;
      this.dD = !1;
    }
  }
  je.i = !0;
  je.u = Jf;
  Object.assign(je.prototype, { j: je });
  class zh {
    constructor() {
      this.Nb = new F(0.5, 0.5, 0, 1);
      this.g = new F(0, 0, 0, 1);
      this.wl = new ia(Ba, Ba, Ca, Ca);
      this.Db = new $d();
    }
    dR(a, b) {
      var c = ua.instance.window,
        d = c.W.viewport,
        e = c.Qc.x,
        f = c.Qc.y;
      c = (d.x * e) | 0;
      let g = (d.y * f) | 0;
      e = (d.w * e) | 0;
      d = (d.J * f) | 0;
      let h = this.Db.Yk,
        l = 1 / (h.m41 * a + h.m42 * b + h.m43 * 0 + h.m44),
        n = e / 2;
      f = d / 2;
      let q = (h.m11 * a + h.m12 * b + h.m13 * 0 + h.m14) * l;
      a = (h.m21 * a + h.m22 * b + h.m23 * 0 + h.m24) * l;
      b = n * q + 0 * a + (n + c);
      a = 0 * q + -f * a + (f + g);
      return b + 400 < 0 || a + 400 < 0 || b - 200 > c + e || a - 200 > g + d
        ? !1
        : !0;
    }
    YP(a, b) {
      let c = ua.instance.window.hp();
      a = this.Db.gH(new F(a, b, 0, 1), c);
      return Math.min(a.y, c.y + c.J - a.y);
    }
    ZP(a, b) {
      let c = ua.instance.window.hp();
      a = this.Db.gH(new F(a, b, 0, 1), c);
      return Math.min(a.x, c.x + c.w - a.x);
    }
    update() {
      var a = ua.instance.window.Xi(),
        b = this.wl,
        c = this.wl;
      c = Math.min(a.x / (b.C - b.A), a.y / (c.H - c.F));
      this.Db.Ob(new F(a.x, a.y, 0, 1));
      this.Db.YU(c);
      this.Db.Eo();
      var d = (b = this.wl);
      d = new ia(0, 0, a.x, a.y).Mi((b.C - b.A) / (d.H - d.F));
      b = (a.x - (d.C - d.A)) / c / 2;
      a = (a.y - (d.H - d.F)) / c / 2;
      c = this.Db;
      d = c.position;
      d.x = this.g.x + (b + (-b - b) * this.Nb.x);
      d.y = this.g.y + (a + (-a - a) * this.Nb.y);
      c.Us();
    }
  }
  zh.i = !0;
  Object.assign(zh.prototype, { j: zh });
  class Ab extends ec {
    constructor(a) {
      super();
      this.T = a;
      var b = Ab.Kq.w,
        c = b / 2;
      let d = Ab.Kq.J / 2;
      c = this.ga = new ia(0 - c, 0 - d, c, d);
      this.va = new ia(c.A, c.F, c.C, c.H);
      this.l = new V();
      a.oa(9).R(this.l.B);
      a = new C(null, p.K, k.TI);
      a.D();
      this.l.appendChild(a);
      b /= a.Y.x;
      b *= a.Y.x / Ab.Ez.w;
      a.I(b);
      a = new C(null, p.K, k.UI);
      a.D();
      a.I(b);
      this.l.appendChild(a);
      a = new C(null, p.K, k.VI);
      a.D();
      a.I(b);
      this.l.appendChild(a);
      a = new C(null, p.K, fj.data[0]);
      a.D();
      a.I(b);
      this.l.appendChild(a);
      this.l.I(0.71);
      this.Ce = !0;
    }
    lT() {
      if (this.l != null) {
        var a = this.l.pb(3);
        a.M(!0);
        a.sa()
          .play(fj)
          .Ue(function () {
            a.M(!1);
          });
      }
    }
    JE() {
      if (this.l != null) {
        var a = this.l.pb(3);
        a.M(!0);
        a.X(1);
        a.sa().play(Fj);
        a.Vb().alpha(0, 0.2, null, null, function () {
          a.M(!1);
        });
      }
    }
    G() {
      this.l.G();
      this.l = null;
    }
    update(a) {
      super.update(a);
      this.va.A = this.x + this.ga.A;
      this.va.F = this.y + this.ga.F;
      this.va.C = this.x + this.ga.C;
      this.va.H = this.y + this.ga.H;
    }
    O() {
      super.O();
      this.l != null &&
        (this.Ce && (this.l.m(this.x), this.l.o(this.y)),
        this.l.na(this.rotation),
        this.l.M(this.visible));
    }
  }
  Ab.i = !0;
  Ab.u = ec;
  Object.assign(Ab.prototype, { j: Ab });
  class Kf extends Kb {
    constructor(a, b) {
      super(b);
      this.T = a;
      this.duration = 2;
      this.Nb.x = 0;
      this.Nb.y = 500;
      this.angle = -90;
      this.oo = 50;
      this.speed = 150;
      this.sq = 70;
      this.wG = this.ZE = 1;
      this.ed = 2;
      this.size = 1;
      this.Dr = 100;
      this.tn = 0;
      this.yt = 600;
      this.yb = [];
    }
    Mh(a) {
      super.Mh(a);
      a.vr = Oa * (this.tn + this.yt * fa.Jc());
      a = new C(null, p.K, k.Nj("", fa.Wh(3, 7)));
      a.D();
      a.I(this.size * 0.4);
      this.T.oa(5).R(a.B);
      this.yb.push(a);
    }
    li(a, b, c) {
      a.angle += a.vr * c;
      super.li(a, b, c);
    }
    $g(a) {
      super.$g(a);
      this.yb.splice(a, 1);
    }
    O() {
      super.O();
      let a = 0,
        b = this.hc.length;
      for (; a < b; ) {
        var c = a++;
        let d = this.hc[c];
        c = this.yb[c];
        c.na(d.angle * wc);
        c.m(d.g.x);
        c.o(d.g.y);
      }
    }
  }
  Kf.i = !0;
  Kf.u = Kb;
  Object.assign(Kf.prototype, { j: Kf });
  class xc {
    constructor(a) {
      this.T = a;
      this.U = new C();
      this.U.M(!1);
    }
    m(a) {
      this.U.m(a);
      this.Fb != null && this.Fb.l.m(a);
      return a;
    }
    o(a) {
      this.U.o(a);
      this.Fb != null && this.Fb.l.o(a);
    }
    Kh() {
      this.U.remove();
      this.Fb != null && this.Fb.l.remove();
    }
    show() {
      this.U.mg(p.ea, k.MI);
      this.U.D();
      this.U.I(0.4);
      this.U.B.parent == null && this.T.oa(9).R(this.U.B);
      this.U.sa().loop(xc.jH);
      this.U.M(!0);
    }
    fV() {
      this.Fb != null &&
        this.Fb.l.node.parent == null &&
        this.T.oa(9).R(this.Fb.l.B);
    }
  }
  xc.i = !0;
  Object.assign(xc.prototype, { j: xc });
  class Lf extends Ta {
    constructor() {
      super();
      this.l = new V();
      this.l.X(0.75);
      this.mc = [];
      this.eb = [];
      let a = 0;
      for (; a < 4; ) {
        ++a;
        let b = new C(null, p.Sa, "star_effect");
        b.D();
        b.ge(3);
        b.M(!1);
        this.eb.push(b);
        this.l.appendChild(b);
      }
      this.l.I(0.4);
      this.nE = 0;
      x.play(x.Nu, !0);
      this.ol = new va();
      this.ol.Dc(1, 0);
      this.ol.Dc(1, 0);
      this.ol.Dc(0, 2);
      this.ol.Pa(0, 0);
      this.ol.Pa(1, 1);
      this.ol.Pa(0, 2);
      this.time = 1;
    }
    update(a) {
      this.time += a;
      if (this.nE < 4 && this.time > 0.5) {
        this.time = 0;
        var b = this.eb[this.nE++];
        b.M(!0);
        new Da(b).loop(this.ol);
      }
      for (b = 0; b < 4; ) {
        let c = this.eb[b++];
        c.na(c.je + 90 * a);
      }
    }
    O() {
      this.l.m(this.x);
      this.l.o(this.y);
    }
    G() {
      x.stop(x.Nu);
      this.l.G();
    }
  }
  Lf.i = !0;
  Lf.u = Ta;
  Object.assign(Lf.prototype, { j: Lf });
  class yc extends ec {
    constructor(a, b) {
      super();
      this.T = a;
      this.U = new C(null, p.K, b);
      this.U.D();
      this.U.I(0.284);
      a.oa(9).R(this.U.B);
      a = yc.Jz.w / 2;
      b = yc.Jz.J / 2;
      a = this.ga = new ia(0 - a, 0 - b, a, b);
      this.va = new ia(a.A, a.F, a.C, a.H);
    }
    update(a) {
      super.update(a);
      this.va.A = this.x + this.ga.A;
      this.va.F = this.y + this.ga.F;
      this.va.C = this.x + this.ga.C;
      this.va.H = this.y + this.ga.H;
    }
    O() {
      super.O();
      this.U != null &&
        (this.U.m(this.x), this.U.o(this.y), this.U.na(this.rotation));
    }
  }
  yc.i = !0;
  yc.u = ec;
  Object.assign(yc.prototype, { j: yc });
  class Ka {
    constructor(a, b, c) {
      c == null && (c = 0);
      b == null && (b = 0);
      this.tn = c;
      this.path = [];
      if (a > 0) for (this.dE = [], c = 0; c < a; ) this.dE[c++] = b;
      this.g = new t(0, 0);
      this.angle = 0;
      this.reverse = this.paused = !1;
      this.qg = this.dn = 0;
    }
    Xq(a) {
      this.path.push(a);
    }
    start() {
      this.path.length > 0 &&
        (this.g.Sb(this.path[0]), (this.qg = 1), this.CB());
    }
    CB() {
      this.offset = t.La(this.path[this.qg], this.g);
      this.offset.normalize();
      this.offset.multiply(this.dE[this.qg]);
    }
    update(a) {
      if (!this.paused) {
        if (this.path.length > 0) {
          let b = this.path[this.qg],
            c = !1;
          if (this.g.equals(b)) c = !0;
          else {
            let d = a;
            this.dn != 0 && ((d = a + this.dn), (this.dn = 0));
            this.g.add(t.Rb(this.offset, d));
            (Mb.xF(this.offset.x, b.x - this.g.x) &&
              Mb.xF(this.offset.y, b.y - this.g.y)) ||
              ((this.dn = t.La(this.g, b).Ub()),
              (this.dn /= this.offset.Ub()),
              this.g.Sb(b),
              (c = !0));
          }
          c &&
            (this.reverse
              ? (this.qg--, this.qg < 0 && (this.qg = this.path.length - 1))
              : (this.qg++, this.qg >= this.path.length && (this.qg = 0)),
            this.CB());
        }
        this.tn != 0 && (this.angle += this.tn * a);
      }
    }
    static Nk(a, b, c, d) {
      b != a &&
        (b > a
          ? ((a += c * d), a > b && (a = b))
          : ((a -= c * d), a < b && (a = b)));
      return a;
    }
    static Ok(a, b, c, d) {
      let e = !1;
      b != a &&
        (b > a
          ? ((a += c * d), a > b && (a = b))
          : ((a -= c * d), a < b && (a = b)),
        b == a && (e = !0));
      return new Ah(a, e);
    }
  }
  Ka.i = !0;
  Object.assign(Ka.prototype, { j: Ka });
  class ge extends Ka {
    constructor(a, b, c) {
      super(a, b, c);
    }
    NF(a, b, c) {
      if (a.charAt(0) == "R") {
        var d = ra.parseInt(qa.substr(a, 2, null)),
          e = Math.round((d * 3) / 2),
          f = (2 * Math.PI) / e;
        let g = 0;
        d *= xa.bo;
        a.charAt(1) != "C" && (f = -f);
        for (a = 0; a < e; )
          (++a,
            this.Xq(new t(b + d * Math.cos(g), c + d * Math.sin(g))),
            (g += f));
      } else
        for (
          this.Xq(new t(b, c)),
            a.charAt(a.length - 1) == "," &&
              (a = qa.substr(a, 0, a.length - 1)),
            d = a.split(","),
            e = d.length,
            f = 0;
          f < e;
        )
          (this.Xq(
            new t(
              b + parseFloat(d[f]) * xa.bo,
              c + parseFloat(d[f + 1]) * xa.bo,
            ),
          ),
            (f += 2));
    }
  }
  ge.i = !0;
  ge.u = Ka;
  Object.assign(ge.prototype, { j: ge });
  class Mf extends ma {
    constructor(a, b) {
      super();
      this.f = a;
      this.t = b;
    }
    update(a) {
      this.t -= a;
      this.t > 0 || (this.f(), (this.f = null), this.pa());
    }
  }
  Mf.i = !0;
  Mf.u = ma;
  Object.assign(Mf.prototype, { j: Mf });
  class Nf extends Ta {
    constructor(a) {
      super();
      this.V = new C();
      this.V.setColor(
        new F(0.17647058823529413, 0.17647058823529413, 0.17647058823529413, 1),
        a.Vg,
        a.Ug,
      );
      this.V.X(0);
      let b = new va();
      b.Pa(0, 0);
      b.Pa(0, 0.3);
      b.Pa(0.2, 0.6);
      new Da(this.V).play(b);
      a.oa(0).R(this.V.B);
    }
    G() {
      this.V.G();
    }
  }
  Nf.i = !0;
  Nf.u = Ta;
  Object.assign(Nf.prototype, { j: Nf });
  class Bh {
    constructor(a, b, c, d, e) {
      this.start = a;
      this.end = b;
      this.color = e;
    }
  }
  Bh.i = !0;
  Object.assign(Bh.prototype, { j: Bh });
  class Oc extends Fa {
    constructor() {
      super();
      new Y(-1, -1, -1, -1);
      this.TN = this.state = 0;
    }
    hl(a) {
      this.state = a;
    }
    Px(a, b) {
      return this.state == 0 && this.Am(a, b) ? (this.hl(1), !0) : !1;
    }
    cT(a, b) {
      return this.state == 1 && (this.hl(0), this.Am(a, b))
        ? (this.Mx != null && this.Mx(this.TN), !0)
        : !1;
    }
    Am(a, b) {
      return Ch.bz(a, b, this.x, this.y, 20);
    }
  }
  Oc.i = !0;
  Oc.u = Fa;
  Object.assign(Oc.prototype, { j: Oc });
  class Of extends Fa {
    constructor(a) {
      super();
      this.T = a;
      this.Xw = this.ys = !1;
      this.$q = this.xr = 0;
    }
    PQ(a, b, c, d, e, f, g) {
      this.PN = d;
      this.vQ = c;
      this.QE = b | 1;
      this.ds = 1;
      this.UC = e;
      this.VC = f;
      this.TC = g;
      this.x = a.x;
      this.y = a.y;
      this.time = fa.Li();
      this.Tf = new V();
      this.Tf.m(this.x);
      this.Tf.o(this.y);
      this.T.oa(5).R(this.Tf.B);
      this.Np = new Pf(this.T, 7);
      this.Np.x = this.x;
      this.Np.y = this.y;
      this.Iw = new C(this.Tf, p.ne, k.fJ);
      this.Iw.I(0.4);
      this.Iw.D();
      this.Jw = new C(this.Tf, p.ne, k.gJ);
      this.Jw.D();
      this.Jw.I(0.4);
      this.nd = this.jc = this.ea = null;
      this.Fg = !0;
    }
    update(a) {
      super.update(a);
      if (this.ys) {
        this.xr += a;
        var b = Math.min(1, this.xr / 0.16);
        this.Tf.X(1 - b);
        b == 1 && (this.Tf.M(!1), (this.ys = !1));
      }
      this.Xw &&
        ((this.$q += a),
        (b = Math.min(1, this.$q / 0.36)),
        this.Tf.X(b),
        b == 1 && (this.Xw = !1));
      this.time += a;
      this.Iw.o(Wa(Math.sin(this.time * 5), -1, 1, 0, -5));
      this.Jw.o(Wa(Math.sin(this.time * 5 + 0.05), -1, 1, 0, -3));
      this.jc == null ||
        this.jc.mb == null ||
        this.jc.mb.Hc == -1 ||
        this.jc.zm() ||
        ((this.Fg = !0), this.wj(1));
      this.Np.update(a);
    }
    O() {
      super.O();
      this.Np.O();
      this.Tf.m(this.x);
      this.Tf.m(this.x);
    }
    wj(a) {
      if ((a & this.QE) != 0) {
        this.ds == 1 && ((this.ys = !0), (this.xr = 0));
        this.ds = a;
        this.ea != null &&
          (this.ea.zm() ? this.hF() : (this.ea.Hp(), (this.ea.et = !0)));
        this.jc != null &&
          ((a = this.jc.mb),
          a != null && (a.zh = 0.36),
          this.jc.zm() ? this.jF() : this.jc.Hp());
        this.nd != null && (this.nd.zm() ? this.gF() : this.nd.Hp());
        switch (this.ds) {
          case 1:
            this.Xw = !0;
            this.ys = !1;
            this.Tf.M(!0);
            this.$q = 0;
            break;
          case 2:
            this.ea = new Qf(this);
            this.ea.x = this.x;
            this.ea.y = this.y;
            this.ea.Gp();
            this.UC.push(this.ea);
            break;
          case 4:
            this.jc = new ub(this);
            this.jc.x = this.x;
            this.jc.y = this.y;
            this.jc.sg = !1;
            this.jc.uc = null;
            this.jc.setRadius(this.vQ);
            this.jc.Gp();
            this.jc.kv();
            this.VC.push(this.jc);
            break;
          case 8:
            ((this.nd = new fb(this, this.x, this.y, 1, this.PN)),
              this.nd.kv(),
              this.nd.Gp(),
              this.TC.push(this.nd));
        }
        this.Np.Fn(7);
        x.play(x.sL);
      }
    }
    eU() {
      let a = this.ds;
      do ((a <<= 1), a == 32 && (a = 2));
      while ((a & this.QE) == 0);
      this.wj(a);
    }
    Px(a, b) {
      a -= this.x;
      b -= this.y;
      return this.Fg && Math.sqrt(a * a + b * b) < 40 ? (this.eU(), !0) : !1;
    }
    hF() {
      this.ea != null &&
        (qa.remove(this.UC, this.ea), this.ea.G(), (this.ea = null));
    }
    jF() {
      this.jc != null &&
        (this.jc.G(), qa.remove(this.VC, this.jc), (this.jc = null));
    }
    gF() {
      this.nd != null &&
        (qa.remove(this.TC, this.nd), this.nd.G(), (this.nd = null));
    }
  }
  Of.i = !0;
  Of.u = Fa;
  Object.assign(Of.prototype, { j: Of });
  class fb extends sd {
    constructor(a, b, c, d, e) {
      super(a.T, b, c, d, e);
      this.ne = a;
      this.alpha = 1;
      this.state = 0;
    }
    Gp() {
      this.state != 1 && ((this.state = 1), (this.time = 0));
    }
    Hp() {
      this.state != -1 && ((this.state = -1), (this.time = 0));
    }
    zm() {
      return this.state < 0;
    }
    kv() {
      function a(c, d) {
        c = new C(d, p.ne, k.Nj(k.Oq, c));
        c.D();
        return c;
      }
      this.Fv = new V(null, this.l);
      this.Fv.Ft();
      this.NB = new V(null, this.l);
      this.mc = [];
      fb.so == null &&
        (fb.so = va.parse(
          "0,s.27<x-34.<y7.33<,.35,s.22>x-35.>y6.33>,.7,s.16<x-36.<y5.33<,1.04,s.22>x-35.>y6.33>,1.4,s.27x-34.y7.33",
        ));
      var b = new Da(a(2, this.Fv));
      b.loop(fb.so);
      this.mc.push(b);
      fb.ro == null &&
        (fb.ro = va.parse(
          "0,s.36<x32.9<y6.61<,.39,s.32>x31.9>y5.61>,.78,s.27<x30.9<y4.61<,1.17,s.32>x31.9>y5.61>,1.56,s.36x32.9y6.61",
        ));
      b = new Da(a(2, this.Fv));
      b.loop(fb.ro);
      this.mc.push(b);
      fb.Bi == null &&
        (fb.Bi = va.parse(
          "0,s.44<x23<y26<,.45,s.4>x22>y25>,.9,s.36<x21<y24<,1.35,s.4>x22>y25>,1.8,s.44x23y26",
        ));
      b = new Da(a(3, this.NB));
      b.loop(fb.Bi);
      this.mc.push(b);
      fb.Ai == null &&
        (fb.Ai = va.parse(
          "0,s.44<x-23<y28<,.5,s.4>x-22>y27>,1,s.36<x-21<y26<,1.5,s.4>x-22>y27>,2,s.44x-23y28",
        ));
      b = new Da(a(4, this.NB));
      b.loop(fb.Ai);
      this.mc.push(b);
    }
    G() {
      this.l.G();
      this.U = this.l = null;
    }
    update(a) {
      super.update(a);
      if (this.state > 0) {
        this.time += a;
        let b = Math.min(1, this.time / 0.36);
        this.alpha = b;
        b == 1 && (this.state = 0);
      }
      this.state < 0 &&
        ((this.time += a),
        (a = Math.min(1, this.time / 0.16)),
        (this.alpha = 1 - a),
        a == 1 && ((this.state = 0), this.ne.gF()));
    }
    O() {
      super.O();
      this.l.X(this.alpha);
    }
  }
  fb.i = !0;
  fb.u = sd;
  Object.assign(fb.prototype, { j: fb });
  class Qf extends lb {
    constructor(a) {
      super(a.T);
      this.ne = a;
      this.alpha = 1;
      this.state = 0;
      this.Fb = new Pa();
      this.l.appendChild(this.Fb.l);
    }
    G() {
      this.l.G();
      this.l = null;
      this.Fb.G();
      this.Fb = null;
    }
    zm() {
      return this.state < 0;
    }
    Gp() {
      this.state != 1 && ((this.state = 1), (this.time = 0));
    }
    Hp() {
      this.state != -1 && ((this.state = -1), (this.time = 0));
    }
    pop() {
      super.pop();
      this.Fb.l.M(!1);
    }
    update(a) {
      super.update(a);
      if (this.state > 0) {
        this.time += a;
        let b = Math.min(1, this.time / 0.36);
        this.alpha = b;
        b == 1 && (this.state = 0);
      }
      this.state < 0 &&
        ((this.time += a),
        (a = Math.min(1, this.time / 0.16)),
        (this.alpha = 1 - a),
        a == 1 && ((this.state = 0), this.ne.hF()));
    }
    O() {
      super.O();
      this.Fb != null && (this.Fb.l.m(this.x), this.Fb.l.o(this.y));
      this.l.X(this.alpha);
    }
  }
  Qf.i = !0;
  Qf.u = lb;
  Object.assign(Qf.prototype, { j: Qf });
  class Pa {
    constructor() {
      function a(d) {
        d = new C(b.l, p.ne, k.Nj(k.Oq, d));
        d.D();
        return d;
      }
      this.l = new V();
      this.mc = [];
      let b = this;
      Pa.ro == null &&
        (Pa.ro = va.parse(
          "0,s.32<x34<y9<,.48,s.31>x33>y8>,.96,s.30<x34<y7<,1.44,s.31>x34>y9>,1.92,s.32x33y8,2.4,x34y9",
        ));
      var c = new Da(a(0));
      c.loop(Pa.ro);
      this.mc.push(c);
      Pa.so == null &&
        (Pa.so = va.parse(
          "-100,s.38>,-99.,s.4<,-99.,s.38>,-98.,s.37,0,sx.37sy.4x26<y23<,.4,x25>y22>,.8,x24<y21<,1.20,x25>y22>,1.6,x26y23",
        ));
      c = new Da(a(1));
      c.loop(Pa.so);
      this.mc.push(c);
      Pa.mB == null &&
        (Pa.mB = va.parse(
          "0,s.13<x-34<y4<,.43,s.14>x-35>y3>,.86,s.16<x-36<y2<,1.29,s.14>x-35>y3>,1.72,s.13x-34y4",
        ));
      c = new Da(a(1));
      c.loop(Pa.mB);
      this.mc.push(c);
      Pa.Bi == null &&
        (Pa.Bi = va.parse(
          "0,s.24<x-30<y17<,.42,s.22>x-29>y16>,.84,s.21<x-28<y15<,1.26,s.22>x-29>y16>,1.68,s.24x-30y17",
        ));
      c = new Da(a(0));
      c.loop(Pa.Bi);
      this.mc.push(c);
      Pa.Ai == null &&
        (Pa.Ai = va.parse(
          "0,s.37<x-2<y31<,.47,s.38>x-3>y32>,.94,s.4<x-4<y33<,1.41,s.38>x-3>y32>,1.88,s.37x-2y31",
        ));
      c = a(4);
      c.na(350);
      c = new Da(c);
      c.loop(Pa.Ai);
      this.mc.push(c);
    }
    G() {
      this.l.G();
      this.l = null;
    }
  }
  Pa.i = !0;
  Object.assign(Pa.prototype, { j: Pa });
  class vd extends Ga {
    constructor(a) {
      super();
      this.T = a;
      this.mb = null;
      this.sg = !1;
      this.Nn = -1;
      this.Bs = t.Ac();
      this.$f = 0;
      this.Cx = !1;
      this.Qp = 0;
      this.Jh = this.ce = null;
      this.Rm = this.Um = this.Wm = 0;
      this.ii = this.Me = !1;
      this.uc = null;
      this.nl = 0;
      this.lp = this.zz = this.Ot = !1;
      this.jt = 0.8;
      this.aa = 0;
    }
    hQ(a, b, c) {
      a = t.La(a, c);
      return (t.La(b, c).Ym() - a.Ym()) * wc;
    }
    xQ(a, b) {
      this.Bs.x = a;
      this.Bs.y = b;
    }
    wQ(a) {
      x.play(x.WL);
      let b = this.hQ(this.Bs, a, new t(this.x, this.y));
      b > 180 ? (b -= 360) : b < -180 && (b += 360);
      var c = this.vu;
      c.na(c.je + b);
      c = this.Bz;
      c.na(c.je + b);
      c = this.Az;
      c.na(c.je + b);
      b =
        b > 0
          ? Math.min(Math.max(1, b), 2.25)
          : Math.max(Math.min(-1, b), -2.25);
      this.mb != null &&
        (b > 0
          ? this.mb.Ub() < 660 && this.mb.kc(b)
          : b != 0 && this.mb.Ca.length > 3 && this.mb.gU(-b),
        (this.zz = !0));
      this.Bs.Sb(a);
    }
    update(a) {
      super.update(a);
      this.lp &&
        ((this.jt -= 1.5 * a),
        this.jt <= 0 && ((this.aa = -1), (this.lp = !1)));
      if (this.Td != null) {
        let b = t.La(this.rb.path[this.rb.qg], this.rb.g),
          c = 0;
        Math.abs(b.x) > 15 && (c = b.x > 0 ? 10 : -10);
        this.Td.na(Ka.Nk(this.Td.je, c, 60, a));
      }
      this.sg &&
        this.zz &&
        this.mb != null &&
        ((a = this.mb.Ub() * 0.7),
        a == 0
          ? this.vu.I(0.001)
          : this.vu.I(Math.max(0, Math.min(1.2, 1 - a / 784)) * 0.4));
    }
    dW(a) {
      this.Me &&
        this.Ot &&
        ((this.Ot = !1), (this.ii = !0), x.play(x.HL), this.uc.start());
      if (this.Me && this.ii) {
        this.uc.state != 0 && (this.nl += a * 46.800000000000004);
        a = 0;
        let c = !1;
        if (this.mb != null) {
          var b = this.mb.Rv;
          let d = b.length,
            e = 0;
          for (; e < d; ) {
            let f = e++,
              g = b[f],
              h = b[f + 1],
              l = Math.max(28, g.Nf(h));
            if (this.nl >= a && (this.nl < a + l || f > d - 3)) {
              b = t.La(h, g);
              b.multiply((this.nl - a) / l);
              this.uc.V.m(g.x + b.x);
              this.uc.V.o(g.y + b.y);
              f > d - 3 && (c = !0);
              this.uc.state != 0 && this.uc.V.na(b.Ym() * wc + 270);
              break;
            } else a += l;
          }
        }
        c && (this.nl = -1);
      }
    }
    LO() {
      this.$f > 0
        ? (this.back.M(!1), this.ce.M(!0))
        : (this.back.m(this.x),
          this.back.o(this.y),
          this.back.M(!0),
          this.ce != null && this.ce.M(!1));
      (this.aa != -1 || this.lp) &&
        this.SO(this.x, this.y, this.aa != -1 ? this.aa : this.UE);
    }
    SO(a, b, c) {
      this.Ci.color.x = 0.2;
      this.Ci.color.y = 0.5;
      this.Ci.color.z = 0.9;
      this.Ci.color.w = this.jt;
      let d = this.Ci.D;
      d.x = a;
      d.y = b;
      this.Ci.aa = c;
    }
    O() {
      this.sg && (this.Az.M(this.Nn != -1), this.Bz.M(this.Nn == -1));
      this.Td != null && (this.Td.m(this.x), this.Td.o(this.y));
      this.mb != null && this.mb.O();
      this.$f <= 0
        ? (this.Fa.m(this.x), this.Fa.o(this.y), this.Fa.M(!0))
        : (this.Fa.M(!1),
          this.Wm != -1 ? this.Jh.Ib(k.rJ) : this.Jh.Ib(k.hA),
          this.Jh.m(this.x),
          this.Jh.o(this.y));
    }
    SF(a) {
      this.mb = a;
      this.UE = this.aa;
      this.aa = -1;
      this.Me && (this.Ot = !0);
    }
    setRadius(a) {
      this.UE = this.aa;
      this.aa = a;
      var b = this.T.oa(3),
        c = this.T.oa(8);
      a == -1 || a == -2
        ? ((a = fa.ln() ? [k.kJ, k.lJ] : [k.pJ, k.qJ]),
          (this.back = new C(null, p.Lh, a[0])),
          this.back.I(0.4),
          this.back.D(),
          (this.Fa = new C(null, p.Lh, a[1])),
          this.Fa.D(),
          this.Fa.I(0.4),
          b.R(this.back.B),
          c.R(this.Fa.B))
        : ((this.back = new C(null, p.Lh, k.iJ)),
          this.back.D(),
          this.back.I(0.4),
          (this.Fa = new C(null, p.Lh, k.jJ)),
          this.Fa.D(),
          this.Fa.I(0.5),
          b.R(this.back.B),
          c.R(this.Fa.B),
          (this.lp = !1),
          (this.Ci = new le()),
          (this.nr = new Xa()),
          this.nr.kg(this.Ci),
          c.R(this.nr));
      let d = this;
      this.sg &&
        ((b = function (e) {
          e = new C(null, p.Lh, e);
          e.D();
          e.m(d.x);
          e.o(d.y);
          e.I(0.4);
          return e;
        }),
        (c = b(k.tJ)),
        this.T.oa(3).R(c.B),
        (this.vu = b(k.uJ)),
        this.T.oa(8).R(this.vu.B),
        (this.Az = b(k.sJ)),
        this.T.oa(8).R(this.Az.B),
        (this.Bz = b(k.vJ)),
        this.T.oa(8).R(this.Bz.B),
        (this.zz = !0));
    }
    FU(a, b, c) {
      this.$f = a;
      this.Cx = b;
      this.Qp = c;
      this.$f > 0 &&
        ((this.ce = new V()),
        (a = new C(this.ce, p.Lh, k.mJ)),
        a.m(-63),
        new C(this.ce, p.Lh, k.oJ).m(this.$f / 0.4 - 13),
        (b = new C(this.ce, p.Lh, k.nJ)),
        b.m(-63 + a.ha()),
        b.Ry(this.$f / 0.4 - 13),
        this.ce.I(0.4),
        this.ce.D(),
        this.T.oa(5).R(this.ce.B),
        (this.Jh = new C(null, p.Lh, k.hA)),
        this.Jh.D(),
        this.Jh.I(0.4),
        this.T.oa(8).R(this.Jh.B),
        this.Cx
          ? ((this.Um = this.y - this.Qp),
            (this.Rm = this.y + (this.$f - this.Qp)),
            (a = (this.Um + this.Rm) / 2),
            this.ce.m(this.x),
            this.ce.o(a),
            this.ce.na(90),
            this.Jh.na(90))
          : ((this.Um = this.x - this.Qp),
            (this.Rm = this.x + (this.$f - this.Qp)),
            this.ce.m((this.Um + this.Rm) / 2),
            this.ce.o(this.y)));
      this.Wm = -1;
    }
    uU() {
      this.Td = new V();
      this.Td.I(0.3076923076923077);
      var a = new C(this.Td, p.Td, k.wI);
      a.D();
      a.m(a.ya() - 6);
      a.o(a.Xa() - 54);
      this.T.oa(8).R(this.Td.B);
      a = new C(this.Td, p.Td, k.xI);
      a.D();
      a.m(-6);
      a.o(-54);
      a.sa().loop(Gj);
      a.sa().Wx();
    }
    UU(a) {
      this.Me = a;
      this.ii = this.Ot = !1;
      a &&
        ((this.uc = new Rf()),
        this.uc.V.m(this.x),
        this.uc.V.o(this.y),
        this.T.ra(this.uc),
        this.T.oa(10).R(this.uc.V.B));
    }
    Ov() {
      this.mb = null;
    }
  }
  vd.i = !0;
  vd.u = Ga;
  Object.assign(vd.prototype, { j: vd });
  class ub extends vd {
    constructor(a) {
      super(a.T);
      this.ne = a;
      this.mc = [];
    }
    zm() {
      return this.state < 0;
    }
    Gp() {
      this.state != 1 && ((this.state = 1), (this.time = 0));
    }
    Hp() {
      this.state != -1 && ((this.state = -1), (this.time = 0));
    }
    kv() {
      function a(d) {
        d = new C(b.Fb, p.ne, k.Nj(k.Oq, d));
        d.D();
        return d;
      }
      this.Fb = new V();
      this.T.oa(5).R(this.Fb.B);
      let b = this;
      ub.wB == null &&
        (ub.wB = va.parse(
          "0,s.17<x-26<y3<,.65,s.18>x-25>y2>,1.3,s.2<x-24<y1<,1.95,s.18>x-25>y2>,2.6,s.17x-26y3",
        ));
      var c = new Da(a(1));
      c.loop(ub.wB);
      this.mc.push(c);
      ub.Bi == null &&
        (ub.Bi = va.parse(
          "0,s.36<x23<y14<,.45,s.32>x22>y13>,.9,s.27<x21<y12<,1.35,s.32>x22>y13>,1.8,s.36x23y14",
        ));
      c = new Da(a(2));
      c.loop(ub.Bi);
      this.mc.push(c);
      ub.Ai == null &&
        (ub.Ai = va.parse(
          "0,s.44<x-3<y25<,.5,s.4>x-2>y24>,1,s.36<x-1<y23<,1.5,s.4>x-2>y24>,2,s.44x-3y25",
        ));
      c = new Da(a(4));
      c.loop(ub.Ai);
      this.mc.push(c);
    }
    G() {
      this.mb != null && (this.mb.$x(0), this.mb.G());
      this.Ov();
      this.Fb.G();
      this.Fb = null;
      this.back.G();
      this.Fa.G();
      this.nr.G();
      this.Fa = this.back = this.T = this.nr = null;
    }
    update(a) {
      super.update(a);
      if (this.state > 0) {
        this.time += a;
        let b = Math.min(1, this.time / 0.36);
        this.alpha = b;
        b == 1 && (this.state = 0);
      }
      this.state < 0 &&
        this.state != -2 &&
        ((this.time += a),
        (a = Math.min(1, this.time / 0.16)),
        (this.alpha = 1 - a),
        a == 1 && ((this.state = -2), this.ne.jF()));
    }
    O() {
      super.O();
      this.Fb.m(this.x);
      this.Fb.o(this.y);
      this.Fb.X(this.alpha);
      this.back.X(this.alpha);
      this.Fa.X(this.alpha);
      this.Ci.color.w = this.alpha;
    }
  }
  ub.i = !0;
  ub.u = vd;
  Object.assign(ub.prototype, { j: ub });
  class Pf extends Kb {
    constructor(a, b) {
      super(b);
      this.T = a;
      this.yb = [];
      this.size = 0.6;
      this.Wy = 0.2;
      this.angle = fa.Li() * 360;
      this.oo = 15;
      this.yt = 30;
      this.ed = 0.8;
      this.kx = 0.3;
      this.duration = 1.5;
      this.speed = 140;
      this.sq = 35;
    }
    Fn(a) {
      super.Fn(a);
    }
    Mh(a) {
      super.Mh(a);
      this.angle += 360 / this.iz;
      let b = this.size + fa.Jc() * this.Wy,
        c = k.Nj(k.Oq, fa.Wh(0, 2)),
        d = p.ne.nc.Qf(c).lc;
      a.width = d.x * b;
      a.height = d.y * b;
      a.vr = this.tn + this.yt * fa.Jc();
      a = new C(null, p.ne, c);
      a.D();
      this.T.oa(5).R(a.B);
      this.yb.push(a);
    }
    li(a, b, c) {
      a.angle += a.vr * c;
      super.li(a, b, c);
    }
    $g(a) {
      super.$g(a);
      let b = this.yb[a];
      this.yb.splice(a, 1);
      b.G();
    }
    O() {
      super.O();
      let a = 0,
        b = this.hc.length;
      for (; a < b; ) {
        var c = a++;
        let d = this.hc[c];
        c = this.yb[c];
        c.na(d.angle);
        c.I((d.width / c.Y.x) * 0.4);
        c.m(d.g.x);
        c.o(d.g.y);
        c.X(d.alpha);
      }
    }
    update(a) {
      super.update(a);
      a = 0;
      let b = this.hc.length;
      for (; a < b; ) {
        let c = this.hc[a++];
        c.ed > 0 &&
          (c.ed < c.Cs * 0.7 && (c.alpha = c.ed / (c.Cs * 0.7)),
          (c.dir.x *= 0.9),
          (c.dir.y *= 0.9),
          (c.width *= 1.015),
          (c.height *= 1.015));
      }
    }
  }
  Pf.i = !0;
  Pf.u = Kb;
  Object.assign(Pf.prototype, { j: Pf });
  class Sf extends Oc {
    constructor(a, b, c) {
      super();
      this.x = b;
      this.y = c;
      this.V = new C(null, p.Nb, k.gA);
      this.V.I(0.4);
      this.V.D();
      this.V.m(b);
      this.V.o(c);
      this.aa = 40;
      a.oa(5).R(this.V.B);
      this.bx = !1;
    }
    Am(a, b) {
      return Ch.bz(a, b, this.x, this.y, this.aa);
    }
    toggle() {
      this.bx = !this.bx;
      this.V.Ib(this.bx ? k.hJ : k.gA);
    }
    O() {
      super.O();
      this.V.m(this.x);
      this.V.o(this.y);
    }
  }
  Sf.i = !0;
  Sf.u = Oc;
  Object.assign(Sf.prototype, { j: Sf });
  class sb extends Ga {
    constructor(a) {
      super();
      this.T = a;
      this.active = !1;
      this.jq = this.Do = this.eq = this.Yo = 0;
      this.cw = null;
    }
    MQ(a, b) {
      sb.fi = null;
      this.x = a;
      this.y = b;
      this.Dk = 0;
      Ai == null &&
        ((a = Ai = new va()),
        a.setScale(0.5599999999999999, 0.4, 0, 100),
        a.Pa(0.7, 0),
        a.setScale(0.42000000000000004, 0.52, 0.5),
        a.Pa(1, 0.5));
      this.l = new V();
      this.T.oa(5).R(this.l.B);
      this.nk = new C(this.l, p.dj, k.wJ);
      this.nk.D();
      this.nk.X(0);
      this.cw = new Da(this.nk);
      this.us = new C(this.l, p.dj, k.yJ);
      this.us.D();
      this.us.I(0.4);
      this.Gl = new C(this.l, p.dj, k.xJ);
      this.Gl.D();
      this.Gl.I(0.4);
      this.Gl.X(0);
      this.Gl.o(1);
      this.K = new C(this.l, p.dj, [k.zJ, k.AJ, k.BJ, k.CJ, k.DJ][z.Ae]);
      this.K.D();
      this.K.I(0.4);
      this.K.X(0);
      Bi == null &&
        ((a = Bi = new va()),
        a.Pa(0, 0),
        a.Pa(1, 0.2),
        a.Yq(0.4, 0.4, 0),
        a.Yq(0.4, 0.32000000000000006, 0.07),
        a.Yq(0.34, 0.42000000000000004, 0.05),
        a.Yq(0.4, 0.4, 0.05),
        a.jv(-4, 0),
        a.jv(0, 0.1),
        a.jv(-1, 0.05),
        (a = gj = new va()),
        a.lo(0.4, 0.35, -100),
        a.lo(0.37200000000000005, 0.35, 100),
        a.lo(0.34800000000000003, 0.35, -100),
        a.lo(0.37200000000000005, 0.35, 100),
        a.lo(0.4, 0),
        (a = hj = new va()),
        a.Pa(1, 0),
        a.Pa(0.6, 0.06),
        a.Pa(0, 0.1),
        a.setScale(0.4, 0.4, 0),
        a.setScale(0.45999999999999996, 0.32000000000000006, 0.06),
        a.setScale(0.4, 0.4, 0.1),
        a.ci(0, 0, 0, 100),
        a.ci(0, -4, 0.06, -100),
        a.ci(0, 4, 0.1));
      this.yv = new Da(this.K);
    }
    update(a) {
      this.ja = new t(this.x, this.y);
      super.update(a);
      sb.fi != null &&
        ((sb.fi.g = new t(this.x, this.y)),
        (sb.fi.ja = new t(this.x, this.y)),
        this.Dk != 1 && (this.Dk = 1));
      this.eq > 0 &&
        ((this.eq -= a),
        this.eq < 0 &&
          ((sb.fi.So = !1),
          (sb.fi.g = new t(this.x, this.y)),
          (sb.fi.ja = this.ja.cc()),
          (sb.fi = null)));
      this.Yo > 0 && ((this.Yo -= a), this.Yo <= 0 && this.cw.loop(Ai, !0));
      this.Do > 0 && ((this.Do -= a), this.Do <= 0 && this.yv.loop(gj));
      this.jq > 0 && ((this.jq -= a), this.jq <= 0 && (this.Dk = 0));
    }
    O() {
      super.O();
      this.l.m(this.x);
      this.l.o(this.y);
    }
    Sk(a, b) {
      return this.Dk == 1 && t.ud(a, b, this.x, this.y) < 35 && sb.fi != null
        ? (this.RQ(), !0)
        : !1;
    }
    HB(a) {
      x.play(x.vL);
      sb.fi = a;
      a.So = !0;
      a.g = a.ja = new t(this.x, this.y);
      a = this.T.Em;
      let b = 0;
      for (; b < a.length; ) {
        let c = a[b];
        ++b;
        c.Dk = 1;
        c.us.Vb().alpha(0, 0.3);
        c.Gl.Vb().alpha(1, 0.3);
        c.yv.play(Bi);
        c.nk.qa(0.5599999999999999);
        c.nk.nb(0.4);
        c.nk.X(0.7);
        c.Yo = 0.4 * Math.random();
        c.Do = 0.2;
      }
    }
    RQ() {
      x.play(x.wL);
      let a = this.T.Em,
        b = 0;
      for (; b < a.length; ) {
        let c = a[b];
        ++b;
        c.us.Vb().alpha(1, 0.3);
        c.Gl.Vb().alpha(0, 0.3);
        c.yv.play(hj);
        c.cw.stop();
        c.nk.X(0);
        c.jq = 0.5;
        c.Dk = 0;
      }
      this.eq = 0.01;
    }
  }
  sb.i = !0;
  sb.u = Ga;
  Object.assign(sb.prototype, { j: sb });
  class Tf extends ec {
    constructor(a, b) {
      super();
      this.MD = b;
      this.Pg = 0;
      var c = Ab.Kq.w / 2;
      let d = Ab.Kq.J / 2;
      c = this.ga = new ia(0 - c, 0 - d, c, d);
      this.va = new ia(c.A, c.F, c.C, c.H);
      this.l = new V();
      this.l.I(0.4);
      a.oa(9).R(this.l.B);
      this.yc = new C(this.l, p.Xf, k.GJ);
      this.yc.X(0.4);
      this.yc.D();
      this.yc.I((((b * 2) / this.yc.Y.x) * 1.5) / 0.4);
      this.yc.ge(3);
      new C(this.l, p.Xf, k.EJ).D();
      new C(this.l, p.Xf, k.HJ).D();
      this.$a = new C(this.l, p.Xf);
      this.$a.sa().loop(Hj);
      this.$a.D();
      this.ea = null;
      this.Ao = new xc(a);
      this.Pc = null;
    }
    update(a) {
      super.update(a);
      this.va.A = this.x + this.ga.A;
      this.va.F = this.y + this.ga.F;
      this.va.C = this.x + this.ga.C;
      this.va.H = this.y + this.ga.H;
    }
    O() {
      super.O();
      this.x = this.constraint.g.x;
      this.y = this.constraint.g.y;
      this.l.M(this.Pc == null);
      this.l.m(this.x);
      this.l.o(this.y);
      this.l.na(this.rotation);
      this.Ao.m(this.x);
      this.Ao.o(this.y);
    }
  }
  Tf.i = !0;
  Tf.u = ec;
  Object.assign(Tf.prototype, { j: Tf });
  class me {
    static get() {
      let a = w.box,
        b = w.level;
      if (me.tx[a] == null) {
        let c = m.Ab(
          [
            309, 301, 293, 285, 277, 269, 261, 251, 243, 235, 227, 219, 211,
            203, 195, 187, 179,
          ][a - 1],
        );
        me.tx[a] = JSON.parse(c);
      }
      return me.tx[a][b - 1];
    }
  }
  me.i = !0;
  class Mb {
    static xF(a, b) {
      return a < 0 == b < 0;
    }
    static kC(a, b, c) {
      return Math.max(Math.min(a, c), b);
    }
    static cq(a, b) {
      return Math.floor(Math.random() * (b - a + 1) + a);
    }
    static OT() {
      return Math.random() > 0.5;
    }
    static rR(a, b, c, d, e, f, g, h) {
      let l = e - a + g - c,
        n = f - b + h - d;
      a = c - a;
      b = d - b;
      e = g - e;
      f = h - f;
      h = Math.abs(b * e - f * a);
      return Math.abs(e * n - f * l) <= h ? Math.abs(a * n - b * l) <= h : !1;
    }
  }
  Mb.i = !0;
  class Ah {
    constructor(a, b) {
      this.value = a;
      this.al = b;
    }
  }
  Ah.i = !0;
  Object.assign(Ah.prototype, { j: Ah });
  class fc extends Fa {
    constructor(a, b) {
      super();
      this.T = a;
      this.$a = 0;
      this.Wf = !1;
      this.x = b.x * Zd.Pq;
      this.y = b.y * Zd.Pq;
      this.iD = fa.Wh(5, 20);
      this.ov = 3;
      this.vB = !1;
      this.time = 0;
      b = a.oa(1);
      this.vq = new C(null, p.mr);
      this.vq.D();
      this.vq.I(0.4);
      b.R(this.vq.B);
      this.Fo = new V();
      this.Fo.I(0.4);
      this.char = new C(this.Fo, p.Dv, k.yH);
      this.char.D();
      b.R(this.Fo.B);
      this.blink = new C(null, p.Dv, k.uH);
      this.blink.D();
      this.blink.I(0.4);
      this.blink.M(!1);
      b.R(this.blink.B);
      var c = Y.cc(fc.ZL);
      c.x -= 128;
      c.y -= 128;
      let d = c.x,
        e = c.y;
      c = this.ga = new ia(d, e, d + c.w, e + c.J);
      this.va = new ia(c.A, c.F, c.C, c.H);
      this.De();
      this.vq.m(this.x + Math.round(Ij * 0.4));
      this.vq.o(this.y + Math.round(Jj * 0.4));
      a.gd &&
        ((this.Cf = new C(null, p.Ul)),
        this.Cf.I(0.4),
        this.Cf.sa().loop(ij),
        this.Cf.D(),
        this.Cf.m(this.x),
        this.Cf.o(this.y),
        b.R(this.Cf.B),
        (this.Df = new C(null, p.Ul)),
        this.Df.I(0.4),
        this.Df.sa().loop(jj),
        this.Df.D(),
        this.Df.m(this.x),
        this.Df.o(this.y),
        b.R(this.Df.B));
      this.pe = null;
      this.Dn = 0;
      this.Rt = -1;
      this.Oc(0);
    }
    sT() {
      this.Wf || this.rs || this.Oc(10);
    }
    tT() {
      !this.Wf && this.Co() && this.Oc(1);
    }
    uT() {
      !this.Wf && this.Co() && this.Oc(2);
    }
    wT() {
      !this.Wf && this.Co() && this.Oc(7);
    }
    vT() {
      !this.Wf && this.Co() && this.Oc(8);
    }
    nT() {
      this.Wf || (this.Oc(5), this.sG());
    }
    yT() {
      this.Wf || (this.Oc(6), this.sG(), (this.Wf = !0));
    }
    KE() {
      !this.Wf && this.Co() && this.Oc(3);
    }
    ME() {
      this.Wf || this.Oc(11);
    }
    rT() {
      this.Oc(12);
      this.rs = !0;
      x.play(x.NL);
      this.T.gd && (this.Cf.M(!1), this.Df.M(!1));
    }
    qT() {
      this.$a != 12 && this.Oc(13);
    }
    pT() {
      switch (this.$a) {
        case 7:
        case 8:
        case 14:
          break;
        default:
          this.Oc(14);
      }
    }
    WQ() {
      switch (this.$a) {
        case 0:
        case 1:
        case 2:
          return !0;
        default:
          return !1;
      }
    }
    zn(a) {
      if (this.rs) this.pe = !0;
      else if (this.pe != a) {
        let b = this.pe == null;
        this.pe = a;
        b
          ? this.ME()
          : a
            ? (this.KE(),
              this.Cf.sa().stop(),
              this.Cf.M(!1),
              this.Df.sa().stop(),
              this.Df.M(!1),
              x.stop(this.Rt),
              this.char.nb(1))
            : this.Wf ||
              ((this.Dn = 0),
              this.ME(),
              this.Cf.sa().play(ij),
              this.Cf.M(!0),
              this.Df.sa().play(jj),
              this.Df.M(!0));
      }
    }
    Co() {
      return this.T.gd ? this.pe : !0;
    }
    sG() {
      this.T.gd &&
        (x.stop(this.Rt), this.Cf.M(!1), this.Df.M(!1), (this.Dn = 0));
    }
    Oc(a) {
      switch (a) {
        case 3:
        case 4:
        case 6:
        case 7:
        case 8:
        case 10:
          var b = p.YN;
          break;
        case 11:
        case 12:
        case 13:
        case 14:
          b = p.Ul;
          break;
        default:
          b = p.Dv;
      }
      this.char.mg(b);
      switch (a) {
        case 9:
          b = !0;
          break;
        case 13:
        case 14:
          b = !0;
          break;
        default:
          b = !1;
      }
      this.$a = a;
      b
        ? this.char.sa().loop(kj[a])
        : this.char
            .sa()
            .play(kj[a], a == 2 ? 2 : 1)
            .Ue(M(this, this.ES));
    }
    ES() {
      let a = this;
      switch (this.$a) {
        case 0:
          this.ov--;
          this.ov == 0 &&
            (this.blink.M(!0),
            this.blink
              .sa()
              .play(Kj)
              .Ue(function () {
                a.blink.M(!1);
              }),
            (this.ov = 3));
          --this.iD == 0
            ? (fa.ln() ? this.tT() : this.uT(), (this.iD = fa.Wh(5, 20)))
            : this.Oc(0);
          break;
        case 1:
        case 2:
        case 3:
        case 4:
          this.Oc(0);
          break;
        case 6:
          this.Oc(9);
          break;
        case 8:
          this.rs ? this.Oc(13) : this.Oc(4);
          break;
        case 10:
          this.Oc(0);
          break;
        case 11:
          this.vB = !0;
          break;
        case 12:
          this.Oc(13);
      }
    }
    update(a) {
      super.update(a);
      this.De();
      if (this.T.gd && !this.rs) {
        if (this.vB) {
          let b = Wa(Math.sin(this.time * 2), -1, 1, 0.95, 1.05);
          this.char.wf(0, 433);
          this.char.nb(b);
          this.time += a;
        }
        this.pe ||
          ((this.Dn += a),
          this.Dn > 4 &&
            ((this.Dn = 0),
            (this.Rt = [1041, 1040, 1039][fa.Wh(0, 2)]),
            x.play(this.Rt)));
      }
    }
    O() {
      super.O();
      this.va.A = this.x + this.ga.A;
      this.va.F = this.y + this.ga.F;
      this.va.C = this.x + this.ga.C;
      this.va.H = this.y + this.ga.H;
      this.Fo.m(this.x);
      this.Fo.o(this.y);
      this.blink.m(this.x);
      this.blink.o(this.y);
    }
  }
  fc.i = !0;
  fc.u = Fa;
  Object.assign(fc.prototype, { j: fc });
  class Uf extends Ta {
    constructor(a) {
      super();
      this.Tx = [];
      this.OE = new V();
      a.oa(0).R(this.OE.B);
    }
    EN(a, b) {
      var c = [0.3, 0.3, 0.5, 0.5, 0.6];
      var d = (c = c[Mb.cq(0, c.length - 1)]);
      Mb.OT() ? (c *= 1 + Mb.cq(0, 1) / 10) : (d *= 1 + Mb.cq(0, 1) / 10);
      let e = Math.min(1 - c, 1 - d),
        f = Math.random(),
        g = new Dh();
      this.OE.appendChild(g.V);
      g.iT = b;
      g.x = a.x;
      g.y = a.y;
      g.Yt = e + c;
      g.Zt = e + d;
      g.vn = g.Yt * f;
      g.wn = g.Zt * f;
      g.Gr = c;
      g.Hr = d;
      g.Er = 0.3;
      g.Zy = 1;
      g.alpha = 0.7 * f + 0.3;
      this.Tx.push(g);
    }
    iC(a, b, c) {
      let d = c.rb.path[a];
      b = t.La(c.rb.path[b], d);
      c = b.Ub();
      if (!(c < Lj)) {
        c = Math.floor(c / 17.6);
        b.normalize();
        for (var e = 0; e <= c; ) {
          var f = t.ub(d, t.Rb(b, e * 17.6));
          f.x += Mb.cq(-1.6, 1.6);
          f.y += Mb.cq(-1.6, 1.6);
          this.EN(f, a);
          ++e;
        }
      }
    }
    update(a) {
      super.update(a);
      let b = 0,
        c = this.Tx;
      for (; b < c.length; ) {
        let e = c[b];
        ++b;
        var d = Ka.Ok(e.vn, e.Gr, 1, a);
        e.vn = d.value;
        d.al && ((d = e.Yt), (e.Yt = e.Gr), (e.Gr = d));
        d = Ka.Ok(e.wn, e.Hr, 1, a);
        e.wn = d.value;
        d.al && ((d = e.Zt), (e.Zt = e.Hr), (e.Hr = d));
        d = Ka.Ok(e.alpha, e.Er, 1, a);
        e.alpha = d.value;
        d.al && ((d = e.Zy), (e.Zy = e.Er), (e.Er = d));
      }
    }
    O() {
      let a = 0,
        b = this.Tx;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        c.V.PU(c.x, c.y, c.vn * 0.4, c.wn * 0.4);
        c.V.X(c.alpha);
      }
    }
  }
  Uf.i = !0;
  Uf.u = Ta;
  Object.assign(Uf.prototype, { j: Uf });
  class Dh {
    constructor() {
      this.vn =
        this.Yt =
        this.Gr =
        this.wn =
        this.Zt =
        this.Hr =
        this.alpha =
        this.Zy =
        this.Er =
          1;
      this.iT = this.x = this.y = 0;
      this.V = new C(null, p.Td, k.zI);
      this.V.D();
    }
  }
  Dh.i = !0;
  Object.assign(Dh.prototype, { j: Dh });
  class hc extends Ga {
    constructor(a) {
      super();
      this.V = new C(null, p.jn, k.IJ);
      this.V.D();
      this.V.I(0.4);
      a.oa(5).R(this.V.B);
      a = hc.rA.w / 2;
      let b = hc.rA.J / 2;
      this.ga = new ia(0 - a, 0 - b, a, b);
      this.angle = 0;
      this.Jb = t.Ac();
      this.ac = t.Ac();
      this.LG = this.zq = 0;
      this.wr = [];
    }
    fP(a) {
      a = new Vf(a, this.angle * wc - 90);
      let b = new t(this.x + 40, this.y);
      b.cb(this.angle - Math.PI / 2, this.x, this.y);
      a.x = b.x;
      a.y = b.y;
      a.Fn(5);
      this.wr.push(a);
    }
    Qd() {
      var a = this.ga;
      a = (a.C - a.A) / 2;
      this.Jb.x = this.x - a;
      this.ac.x = this.x + a;
      this.Jb.y = this.ac.y = this.y;
      this.angle = this.rotation * Oa;
      this.Jb.cb(this.angle, this.x, this.y);
      this.ac.cb(this.angle, this.x, this.y);
    }
    update(a) {
      super.update(a);
      this.De();
      let b = 0,
        c = this.wr;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.hc.length == 0) {
          qa.remove(this.wr, d);
          break;
        }
        d.update(a);
      }
    }
    O() {
      super.O();
      this.V.m(this.x);
      this.V.o(this.y);
      this.V.na(this.rotation);
      this.V.I(0.4 * this.jk);
      let a = 0,
        b = this.wr;
      for (; a < b.length; ) b[a++].O();
    }
    Ng() {
      let a = this.ga,
        b = this.ga;
      return new t((a.C - a.A) * 1.2, (b.H - b.F) * 1.2);
    }
    tk() {
      let a = new t(0.8, -1.2000000000000002);
      a.rotate(this.rotation * Oa);
      return t.ub(new t(this.x, this.y), a);
    }
    eh(a) {
      super.eh(a);
      let b = new t(0.8, -1.2000000000000002);
      b.rotate(this.rotation * Oa);
      super.eh(t.La(a, b));
    }
  }
  hc.i = !0;
  hc.u = Ga;
  Object.assign(hc.prototype, { j: hc });
  class Vf extends Kb {
    constructor(a, b) {
      super(5);
      this.T = a;
      this.angle = b;
      this.oo = 10;
      this.speed = 500;
      this.sq = 100;
      this.ed = 0.6;
      this.size = 12;
      this.Dr = 100;
      this.Ej.r = 1;
      this.Ej.Le = 1;
      this.Ej.b = 1;
      this.Ej.a = 0.6;
      this.Ji.r = 1;
      this.Ji.Le = 1;
      this.Ji.b = 1;
      this.Ji.a = 0;
      this.yb = [];
    }
    Mh(a) {
      super.Mh(a);
      a = new C(null, p.jn, k.HE(6 + fa.Wh(0, 2)));
      a.I(0.4);
      a.D();
      a.ge(3);
      this.T.oa(5).R(a.B);
      this.yb.push(a);
    }
    li(a, b, c) {
      super.li(a, b, c);
      a.dir.multiply(0.9);
      b = t.Rb(a.dir, c);
      b.add(this.Nb);
      a.g.add(b);
    }
    $g(a) {
      super.$g(a);
      let b = this.yb[a];
      this.yb.splice(a, 1);
      b.G();
    }
    O() {
      super.O();
      let a = 0,
        b = this.hc.length;
      for (; a < b; ) {
        var c = a++;
        let d = this.hc[c];
        c = this.yb[c];
        c.m(d.g.x);
        c.o(d.g.y);
        c.X(d.color.a);
      }
    }
  }
  Vf.i = !0;
  Vf.u = Kb;
  Object.assign(Vf.prototype, { j: Vf });
  class Wf extends Fa {
    constructor(a) {
      super();
      this.T = a;
      this.l = new V();
      a.oa(0).R(this.l.B);
      this.Dg = [];
      this.yh = [];
      this.Xy = -1;
      this.yp = t.xS();
      this.ad = new C(this.l, p.ad, k.GK);
      this.ad.D();
      this.St = new Xa();
      this.St.kg(new wd());
      this.l.node.R(this.St);
      this.rq = new Xa();
      this.rq.kg(new wd());
      a.oa(13).R(this.rq);
      this.aH = new C(this.l, p.ad, k.oA);
      this.aH.D();
      this.vz = new C(this.l, p.ad, k.oA);
      this.vz.qa(-1);
      this.vz.D();
      this.uz = new C(this.l, p.ad, k.nA);
      this.uz.D();
      this.Iq = new C(this.l, p.ad, k.nA);
      this.Iq.qa(-1);
      this.Iq.D();
      this.Mj = new C(this.l, p.ad, k.lA);
      this.Mj.D();
      this.Mj.na(90);
      this.tu = new C(this.l, p.ad, k.lA);
      this.tu.D();
      this.tu.na(-90);
      this.xl = new C(this.l, p.ad, k.mA);
      this.xl.D();
      this.xl.na(90);
      this.xl.M(!1);
      this.yl = new C(this.l, p.ad, k.mA);
      this.yl.D();
      this.yl.na(-90);
      this.yl.M(!1);
      this.$G = new C(this.l, p.ad, k.FK);
      this.$G.D();
    }
    G() {
      this.Dg = this.yh = null;
      this.l.G();
      this.T = this.l = null;
    }
    Ob(a) {
      this.size = a;
      var b = this.size / 216;
      this.l.I(0.4);
      this.ad.I(b);
      this.uz.I(b);
      this.Iq.qa(-b);
      this.Iq.nb(b);
      a = b >= 0.4 ? b : 0.4;
      this.aH.I(a);
      this.vz.I(-a);
      b = b >= 0.75 ? b : 0.75;
      this.Mj.I(b);
      this.tu.I(b);
      this.xl.I(b);
      this.yl.I(b);
      this.$G.I(1 - (1 - a) * 0.5);
      this.gi = this.size;
      a = this.St.effect;
      a.aa = this.ad.ha() / 2;
      a.lineWidth = 10 * b;
      a = this.size / this.l.Wa - (this.Mj.ha() / 2) * 0.76;
      this.Mj.m(this.xl.m(-a));
      this.tu.m(this.yl.m(a));
    }
    AQ() {
      return !this.Mj.Sf();
    }
    BU(a) {
      this.Mj.M(!a);
    }
    YQ() {
      return this.xl.Sf();
    }
    HF(a) {
      this.xl.M(a);
    }
    gR() {
      return this.yl.Sf();
    }
    IF(a) {
      this.yl.M(a);
    }
    kO() {
      let a = this.yh.length,
        b,
        c = 0;
      for (; c < a; )
        if (((b = this.yh[c++]), b != this && this.lO(b))) return !0;
      return !1;
    }
    O() {
      super.O();
      this.l.m(this.x);
      this.l.o(this.y);
      this.l.na(this.rotation);
      this.uz.na(-this.rotation);
      this.Iq.na(-this.rotation);
      this.St.ef = this.gR() || this.YQ() ? 2 : 1;
      let a = this.yh.length;
      var b;
      let c = this.yh.indexOf(this);
      for (b = 0; b < a; ) this.yh[b++].rq.ef = 1;
      let d = 0;
      for (; d < a; )
        ((b = this.yh[d++]),
          b != this &&
            b.kO() &&
            this.yh.indexOf(b) < c &&
            b.PO(this.x, this.y, this.gi, b.x, b.y, b.gi));
    }
    PO(a, b, c, d, e, f) {
      this.rq.ef = 1;
      let g = t.ud(a, b, d, e);
      g >= c + f ||
        c >= g + f ||
        (new t(a - d, b - e).angle(),
        (a = this.rq),
        (a.ef = 2),
        (b = a.Gb),
        (b.translate.x = this.x),
        (b.translate.y = this.y),
        (b.L = (b.L & -2) | 496),
        (b = a.Gb),
        (b.scale.x = b.scale.y = this.l.Wa),
        (b.L = (b.L & -2) | 500),
        (a = a.effect),
        (a.aa = this.ad.ha() / 2),
        (a.Ds = 0.2),
        (a.lineWidth = 6 * this.Mj.Wa));
    }
    lO(a) {
      if (this.x == a.x && this.y == a.y && this.size == a.size) return !1;
      let b = this.Dg.length,
        c = 0;
      for (; c < b; ) if (a.Dg.indexOf(this.Dg[c++]) >= 0) return !0;
      return !1;
    }
  }
  Wf.i = !0;
  Wf.u = Fa;
  Object.assign(Wf.prototype, { j: Wf });
  class Za extends Ga {
    constructor(a, b) {
      super();
      this.T = a;
      this.group = b;
      this.angle = 0;
      this.Jb = new t(0, 0);
      this.ac = new t(0, 0);
      this.cd = new t(0, 0);
      this.xd = new t(0, 0);
      this.state = this.vs = 0;
      this.l = new V();
      a.oa(5).R(this.l.B);
      this.ss = new C(this.l, p.kl, b == 0 ? k.iA : k.JJ);
      this.ss.I(0.4);
      this.ss.D();
      this.ss.o(30);
      this.ss.na(this.angle);
      this.yc = new C(this.l, p.kl, k.KJ);
      this.yc.I(0.4);
      this.yc.D();
      this.yc.aV(new F(this.yc.mh, this.yc.nh + 15, 0, 1));
      this.yc.M(!1);
    }
    Qd() {
      this.Jb.x = this.x - Za.vA / 2;
      this.ac.x = this.x + Za.vA / 2;
      this.Jb.y = this.ac.y = this.y;
      this.cd.x = this.Jb.x;
      this.xd.x = this.ac.x;
      this.cd.y = this.xd.y = this.y + Za.lL;
      this.angle = this.rotation * Oa;
      this.Jb.cb(this.angle, this.x, this.y);
      this.ac.cb(this.angle, this.x, this.y);
      this.cd.cb(this.angle, this.x, this.y);
      this.xd.cb(this.angle, this.x, this.y);
    }
    update(a) {
      super.update(a);
      this.rb != null && this.Qd();
    }
    O() {
      this.yc.Sf() && (this.yc.sa().Mc(Eh) || this.yc.M(!1));
      super.O();
      this.l.m(this.x);
      this.l.o(this.y);
      this.l.I(this.jk);
      this.l.na(this.rotation);
    }
    Ng() {
      let a = p.kl.nc.Qf(k.iA).Wd;
      return new t(a.w * 0.27999999999999997, a.J * 0.27999999999999997);
    }
    tk() {
      let a = new t(-1.2000000000000002, 10);
      a.rotate(this.rotation * Oa);
      return t.ub(new t(this.x, this.y), a);
    }
    eh(a) {
      let b = new t(-1.2000000000000002, 10);
      b.rotate(this.rotation * Oa);
      super.eh(t.La(a, b));
    }
  }
  Za.i = !0;
  Za.u = Ga;
  Object.assign(Za.prototype, { j: Za });
  class Rf extends ma {
    constructor() {
      super();
      this.V = new C(null, p.uc, k.LJ);
      this.V.I(0.4);
      this.V.D();
      this.Kl = this.On = this.Cz = this.vv = this.state = 0;
    }
    pa() {
      super.pa();
      this.V.G();
    }
    start() {
      let a = this;
      this.V.sa()
        .play(Mj)
        .Ue(function () {
          a.V.sa().play(Nj);
          a.state = 1;
        });
    }
    SN() {
      this.vv = 1;
      this.y = this.V.Xa();
      this.V.sa().stop();
      this.V.Ib(k.MJ);
      this.Kl = fa.fC(3);
      this.time = 0;
    }
    jc() {
      this.Cz = 1;
      this.y = this.V.Xa();
      this.V.sa().stop();
      this.V.Ib(k.NJ);
      this.V.na(0);
      this.time = 0;
    }
    update(a) {
      super.update(a);
      a = this.parent;
      switch (this.vv) {
        case 1:
          var b = this.lb(0.5);
          this.V.o(this.y - 50 * za.Wc(100)(b));
          let c = this.V;
          c.na(c.je + this.Kl);
          b == 1 && (this.vv++, (this.time = 0));
          break;
        case 2:
          ((b = this.V),
            b.o(b.Xa() + this.On),
            (b = this.V),
            b.na(b.je + this.Kl),
            (this.On += 0.4),
            this.time > 1.5 && ((b = this.V), b.X(b.bd * 0.9)),
            this.time > 2 && this.pa());
      }
      switch (this.Cz) {
        case 1:
          b = this.lb(0.5);
          this.V.o(this.y - 50 * za.Wc(100)(b));
          a.K.x = this.V.ya();
          a.K.y = this.V.Xa() - 15;
          a.K.O();
          b == 1 && (this.Cz++, (this.time = 0));
          break;
        case 2:
          ((a = this.V),
            a.o(a.Xa() + this.On),
            (this.On += 0.4),
            (a = this.parent),
            (a.K.x = this.V.ya()),
            (a.K.y = this.V.Xa() - 15),
            a.K.O(),
            this.time > 1.5 && ((a = this.V), a.X(a.bd * 0.9)),
            this.time > 2 && this.pa());
      }
    }
  }
  Rf.i = !0;
  Rf.u = ma;
  Object.assign(Rf.prototype, { j: Rf });
  class Xf extends Ga {
    constructor(a, b, c, d, e, f) {
      super();
      this.T = a;
      this.width = d;
      this.U =
        f != -1
          ? new C(null, p.Ol, [k.EI, k.FI, k.GI, k.HI][d - 1])
          : new C(null, p.Nd, [k.OJ, k.PJ, k.QJ, k.RJ][d - 1]);
      this.x = b;
      this.y = c;
      a.oa(5).R(this.U.B);
      this.U.I(0.4);
      this.U.D();
      this.U.m(b);
      this.U.o(c);
      this.U.na(e);
      this.Jb = t.Ac();
      this.ac = t.Ac();
      this.cd = t.Ac();
      this.xd = t.Ac();
      this.me = !1;
      this.rE = this.FE = this.pD = 0;
      this.fm = !1;
      this.Of = 0;
      f > 0 &&
        ((this.ah = new Yf(a, b, c, f)), (this.ah.Mx = M(this, this.Ts)));
      this.Tt = !1;
      this.gT = this.rotation = e;
      this.WU(f);
      this.Qd();
      this.gu = -1;
      this.xt = null;
      this.ts = this.eD = 0;
    }
    Qd() {
      let a = this.me ? this.width - 160 : this.U.Y.x * 0.4;
      a /= 2;
      this.Jb.x = this.x - a;
      this.ac.x = this.x + a;
      this.Jb.y = this.ac.y = this.y - 5;
      this.cd.x = this.Jb.x;
      this.xd.x = this.ac.x;
      this.cd.y = this.xd.y = this.y + 5;
      this.angle = this.rotation * Oa;
      this.Jb.cb(this.angle, this.x, this.y);
      this.ac.cb(this.angle, this.x, this.y);
      this.cd.cb(this.angle, this.x, this.y);
      this.xd.cb(this.angle, this.x, this.y);
    }
    IV() {
      this.fm = !0;
      this.U.sa().loop(Oj);
      this.Of = this.FE;
      x.play(x.Rj, !0);
      this.U.xn();
    }
    QG() {
      this.fm = !1;
      this.Of = this.rE;
      this.U.sa().stop();
      this.U.mg(p.me, k.ZI);
      this.U.D();
      x.stop(x.Rj);
    }
    update(a) {
      super.update(a);
      this.rb != null && this.Qd();
      this.me &&
        (this.fm
          ? ((this.Of = Ka.Nk(this.Of, 0, 1, a)), this.Of == 0 && this.QG())
          : ((this.Of = Ka.Nk(this.Of, 0, 1, a)), this.Of == 0 && this.IV()));
      var b = this.ah;
      b != null && b.update(a);
      if (this.xt != null) {
        this.ny += a;
        b = Math.min(1, this.ny / this.xt);
        let c = za.Wc(100)(b),
          d = this.hU;
        this.rotation = d + (this.iU - d) * c;
        this.Qd();
        b == 1 && (this.xt = null);
      }
      this.Ud != null && this.Ud.update(a);
      this.ts += a;
      this.ts > 1 && (this.eD = this.ts = 0);
    }
    WU(a) {
      this.JG = a;
    }
    kU() {
      this.Tt = !this.Tt;
      let a = this.gT + (this.Tt ? 90 : 0);
      this.ny = 0;
      this.xt = (Math.abs(a - this.rotation) / 90) * 0.3;
      this.hU = this.rotation;
      this.iU = a;
      this.ah.V.qa(-this.ah.V.Wa);
    }
    mT() {
      this.me ||
        ((this.Ud = new ie(
          this.T,
          t.ud(this.Jb.x, this.Jb.y, this.ac.x, this.ac.y),
          t.ud(this.Jb.x, this.Jb.y, this.cd.x, this.cd.y) * 4,
          3,
          !0,
        )),
        this.Ud.l.D(),
        this.Ud.l.na(this.rotation));
    }
    pV() {
      this.Ud != null && (this.Ud.G(), (this.Ud = null));
    }
    Ts(a) {
      a == 0 && this.AE != null && this.AE(this.JG);
      this.Tt ? x.play(x.KL) : x.play(x.LL);
    }
    O() {
      super.O();
      this.U.m(this.x);
      this.U.o(this.y);
      this.U.na(this.rotation);
      this.ah != null && this.ah.V.na(this.rotation);
      this.Ud != null &&
        (this.Ud.l.m(this.x), this.Ud.l.o(this.y), this.Ud.l.na(this.rotation));
    }
  }
  Xf.i = !0;
  Xf.u = Ga;
  Object.assign(Xf.prototype, { j: Xf });
  class Yf extends Oc {
    constructor(a, b, c, d) {
      super();
      this.x = b;
      this.y = c;
      this.EG = d;
      this.V = new C(null, p.Ol, this.EC());
      this.V.I(0.4);
      this.V.D();
      this.V.m(b);
      this.V.o(c);
      this.aa = 20;
      a.oa(5).R(this.V.B);
    }
    hl(a) {
      super.hl(a);
      this.V.Ib(this.EC());
    }
    EC() {
      return this.state == 0
        ? this.EG == 1
          ? k.AI
          : k.CI
        : this.EG == 1
          ? k.BI
          : k.DI;
    }
    Am(a, b) {
      return Ch.bz(a, b, this.x, this.y, this.aa);
    }
  }
  Yf.i = !0;
  Yf.u = Oc;
  Object.assign(Yf.prototype, { j: Yf });
  class bb extends Ga {
    constructor(a) {
      super();
      this.T = a;
      this.pe = null;
      var b = Y.cc(bb.YL),
        c = b.w / 2;
      b = b.J / 2;
      c = this.ga = new ia(0 - c, 0 - b, c, b);
      this.va = new ia(c.A, c.F, c.C, c.H);
      this.timeout = 0;
      this.time = fa.Li() * 2;
      this.qk = 0;
      this.l = new V();
      this.dd = new C(this.l, p.Sa, k.cK);
      this.dd.D();
      this.dd.I(0.4);
      a.gd &&
        ((this.pl = new C(this.l, p.Sa, k.iK)), this.pl.D(), this.pl.I(0.4));
      this.Sa = new C(this.l, p.Sa, k.eK);
      this.Sa.D();
      this.Sa.I(0.4);
      this.Sa.I(0.4);
      this.Sa.sa().loop(Pj);
      this.Sa.sa().Wx();
      a.gd &&
        (this.pl.sa().loop(Qj),
        this.pl.sa().setTime(0),
        this.pl.X(0),
        (this.hj = new C(this.l, p.Sa, k.mK)),
        this.hj.D(),
        this.hj.I(0.4),
        this.hj.M(!1),
        this.hj.ge(3),
        (this.Ek = new C(this.l, p.Sa, k.kK)),
        this.Ek.D(),
        this.Ek.I(0.4),
        this.Ek.M(!1));
      a.oa(11).R(this.l.B);
    }
    zn(a) {
      let b = this.pe == null;
      this.pe != a &&
        (a
          ? b ||
            (this.hj.M(!0),
            this.hj.sa().play(Rj),
            this.hj.sa().Ue(M(this, this.QS)),
            x.play(fa.ln() ? x.PL : x.QL))
          : b
            ? (this.dd.X(0), this.Sa.X(0))
            : (this.Ek.M(!0),
              this.Ek.sa().play(Sj),
              this.Ek.sa().Ue(M(this, this.PS))),
        (this.pe = a));
    }
    G() {
      this.l.G();
    }
    setTimeout() {
      this.time = this.timeout;
      this.yq = new C(null, p.Sa, k.qK);
      this.yq.I(0.4);
      this.yq.D();
      this.l.appendChild(this.yq);
      this.l.xy(this.yq, 0);
    }
    PS() {
      this.Ek.M(!1);
    }
    QS() {
      this.hj.M(!1);
    }
    update(a) {
      super.update(a);
      this.qk += a;
      if (this.T.gd)
        if (this.pe) {
          var b = this.dd;
          b.X(b.bd + 0.1);
          b = this.pl;
          b.X(b.bd - 0.1);
          b = this.Sa;
          b.X(b.bd + 0.1);
        } else
          ((b = this.dd),
            b.X(b.bd - 0.1),
            (b = this.pl),
            b.X(b.bd + 0.1),
            (b = this.Sa),
            b.X(b.bd - 0.1));
      b = Math.sin(this.qk * 3) * 3;
      this.Cm() && (b = 0);
      let c = 0,
        d = this.l.vk();
      for (; c < d; ) this.l.pb(c++).o(b);
      this.va.A = this.x + this.ga.A;
      this.va.F = this.y + this.ga.F;
      this.va.C = this.x + this.ga.C;
      this.va.H = this.y + this.ga.H;
      this.timeout > 0 &&
        this.T.Ii <= 0 &&
        (this.yq.Ib(k.Nj(k.rK, ((1 - this.time / this.timeout) * 35) | 0)),
        this.time > 0 && (this.time = Ka.Nk(this.time, 0, 1, a)));
    }
    Ng() {
      let a = this.ga,
        b = this.ga;
      return new t((a.C - a.A) * 0.9, (b.H - b.F) * 0.9);
    }
    Ur() {
      return 8;
    }
    O() {
      super.O();
      this.l.m(this.x);
      this.l.o(this.y);
      this.l.I(this.jk);
    }
  }
  bb.i = !0;
  bb.u = Ga;
  Object.assign(bb.prototype, { j: bb });
  class xd extends Ka {
    constructor(a, b, c) {
      super(0);
      this.g.x = b.x;
      this.g.y = b.y;
      this.speed = c;
      this.K = a;
    }
    Xq() {}
    start() {}
    update(a) {
      let b = this.K.x - this.g.x,
        c = this.K.y - this.g.y;
      var d = b * b + c * c;
      d < 1e-6
        ? ((this.g.x = this.K.x), (this.g.y = this.K.y))
        : ((d = Math.sqrt(d)),
          (this.g.x += (b / d) * this.speed * a),
          (this.g.y += (c / d) * this.speed * a),
          (this.speed += a * 50));
    }
    static oD(a, b) {
      return new xd(a, b, 300);
    }
  }
  xd.i = !0;
  xd.u = Ka;
  Object.assign(xd.prototype, { j: xd });
  class Zf extends Ga {
    constructor(a) {
      super();
      this.T = a;
      this.Vh = [];
    }
    NQ(a, b, c) {
      this.x = a;
      this.y = b;
      this.rotation = c;
      this.Cc = 0;
      this.qe = new jb();
      this.Xe = 0;
      this.l = new V();
      this.T.oa(5).R(this.l.B);
      this.Cq = new C(this.l, p.rl, k.vK);
      this.Cq.D();
      this.Cq.o(27);
      this.Cq.I(0.4);
      this.Gq = new C(this.l, p.rl, k.wK);
      this.Gq.I(0.4);
      this.Gq.D();
      this.Gq.o(27);
      this.pu = this.ou = 0;
      this.pG = new V(null, this.l);
      this.qG = new V(null, this.l);
      this.eB();
    }
    BC() {
      let a = 0;
      switch (this.Xe) {
        case 0:
          a = 32.9;
          break;
        case 1:
          a = 94;
          break;
        case 2:
          a = 141;
      }
      return a * 1.2;
    }
    NP() {
      let a = this.BC();
      return (a += Math.sin(6 * this.Cc));
    }
    O() {
      super.O();
      this.l.m(this.x);
      this.l.o(this.y);
      this.l.na(this.rotation);
      this.Gq.na(this.ou);
      this.l.I(this.jk);
    }
    update(a) {
      super.update(a);
      for (var b = 0, c = this.Vh.length; b < c; )
        this.Vh[b].U == null
          ? (--c,
            c > 0 && (this.Vh[b] = this.Vh[this.Vh.length - 1]),
            this.Vh.pop())
          : ++b;
      b = 0;
      for (c = this.Vh; b < c.length; ) c[b++].update(a);
      this.Cc += a;
      this.ou += (this.pu - this.ou) * 0.05;
      if (this.Cm())
        for (b = this.qe.keys(); b.ib(); ) {
          c = b.next();
          let d = this.qe.J[c];
          d.au += a;
          d.au >= 0.5 &&
            (t.ud(d.ws.x, d.ws.y, d.Mo.x, d.Mo.y) < 1 && this.Qx(),
            this.qe.remove(c));
        }
    }
    lQ() {
      let a = new t(this.x, this.y);
      if (this.Cm()) return a;
      let b = new t(0, 27);
      b.rotate(this.rotation * Oa);
      return t.ub(a, b);
    }
    Sk(a, b, c) {
      let d = this.lQ();
      if (t.La(new t(a, b), d).Ub() < 30)
        if (this.Cm()) this.qe.J[c] = new Fh(new t(a, b), new t(a, b), 0);
        else return (this.Qx(), !0);
      return !1;
    }
    bT(a, b, c) {
      this.qe.J.hasOwnProperty(c) && (this.qe.J[c].Mo = new t(a, b));
      return !1;
    }
    dT(a) {
      if (this.qe.J.hasOwnProperty(a)) {
        let b = this.qe.J[a];
        b.au <= 0.5 && t.ud(b.ws.x, b.ws.y, b.Mo.x, b.Mo.y) <= 1 && this.Qx();
        this.qe.remove(a);
      }
      return !1;
    }
    Qx() {
      let a = 0;
      switch (this.Xe) {
        case 0:
          this.Xe++;
          a = 0;
          x.play(x.TL);
          break;
        case 1:
          this.Xe++;
          a = 0;
          x.play(x.SL);
          break;
        case 2:
          ((this.Xe = 0), (a = 1), x.play(x.RL));
      }
      this.eB();
      switch (a) {
        case 0:
          this.pu += 180;
          break;
        case 1:
          this.pu = 0;
      }
    }
    eB() {
      for (var a = (this.Cc = 0), b = this.Vh; a < b.length; ) b[a++].jP();
      if (this.Xe != 3) {
        a = 7;
        this.Xe == 1 && (a = 14);
        this.Xe == 2 && (a = 20);
        b = 0;
        for (var c = a; b < c; ) {
          let e = b++;
          var d = null;
          switch (e % 3) {
            case 0:
              d = Tj;
              break;
            case 1:
              d = Uj;
              break;
            case 2:
              d = Vj;
          }
          let f = -this.BC();
          f *= 1 + 0.1 * fa.Jc();
          this.Xe != 1 || (e % 3 != 1 && e % 3 != 2) || (f *= 0.95);
          this.Xe != 2 || (e % 3 != 1 && e % 3 != 2) || (f *= 0.94);
          let g = 1;
          e % 3 == 0
            ? (g = 0)
            : e % 3 == 1
              ? (g = this.Xe)
              : e % 3 == 2 && (g = -this.Xe);
          let h = new va();
          h.ci(5, 0, 0, 100);
          h.ci(5 + g, f, 0.6);
          h.Dc(0.4, 0);
          h.Dc(0.6000000000000001, 0.6);
          d = new Gh((0.6 * e) / a, d, h);
          this.Vh.push(d);
          (e % 3 == 0 ? this.pG : this.qG).appendChild(d.U);
        }
      }
    }
    eh(a) {
      this.Cq.o(3);
      this.Gq.o(3);
      this.pG.o(-27);
      this.qG.o(-27);
      super.eh(a);
    }
    Ur() {
      return this.Cq.ha() * 0.3;
    }
    Ng() {
      return new t(40, 56);
    }
  }
  Zf.i = !0;
  Zf.u = Ga;
  Object.assign(Zf.prototype, { j: Zf });
  class Fh {
    constructor(a, b, c) {
      this.ws = a;
      this.Mo = b;
      this.au = c;
    }
  }
  Fh.i = !0;
  Object.assign(Fh.prototype, { j: Fh });
  class Gh {
    constructor(a, b, c) {
      this.state = 0;
      this.time = a;
      this.$a = b;
      this.track = c;
      this.U = new C(null, p.rl);
      this.U.M(!1);
      this.hx = new Da(this.U);
    }
    jP() {
      this.state != 2 && (this.state = 2);
    }
    update(a) {
      switch (this.state) {
        case 0:
          this.time -= a;
          if (this.time > 0) break;
          this.U.Ib(this.$a.data[0]);
          this.U.sa().play(this.$a);
          this.U.M(!0);
          this.U.D();
          this.hx.loop(this.track);
          this.state = 1;
          this.time = 0;
          break;
        case 1:
          this.time += a;
          this.time >= 0.6 &&
            (this.U.sa().stop(), this.hx.stop(), (this.time = this.state = 0));
          break;
        case 2:
          ((a = this.U),
            a.X(a.bd * 0.95),
            this.U.bd < 0.05 &&
              (this.U.G(),
              this.hx.pa(),
              (this.U = this.track = this.$a = null),
              (this.state = 3)));
      }
    }
  }
  Gh.i = !0;
  Object.assign(Gh.prototype, { j: Gh });
  class Wd extends ma {
    constructor(a) {
      super();
      this.l = new V();
      this.Ho = new C(this.l);
      this.Ho.setColor(new F(1, 1, 1, 0.5), 400, 100);
      this.Ho.m(-200);
      this.Ho.o(-50);
      let b = [1, 1.6, 2, 1.6, 2, 2, 2.2, 2, 1.6, 2, 2, 1, 1.6],
        c = [
          603, 20, 350, 27, 38, 60, 471, 68, 306, 71, 197, 104, 622, 110, 144,
          131, -44, 133, 544, 136, 307, 151, 409, 156, 61, 157,
        ],
        d = 0,
        e = 0,
        f = b.length;
      for (; e < f; ) {
        let g = new C(this.l, p.Sd, k.ZJ);
        g.D();
        g.I(b[e++] * 0.7);
        g.m((c[d++] / 600) * 400 - 200);
        g.o((c[d++] / 187) * 100 - 50);
      }
      this.Fc = new ta(this.l, p.Oi);
      this.Fc.Va(a);
      this.Fc.tb(500, 100);
      this.Fc.tc(40);
      this.Fc.Hb(0, 0);
      this.Fc.lg(!0);
      this.Fc.m(this.Ho.ya() - 50);
      this.Fc.o(this.Ho.Xa());
      this.state = 0;
    }
    pa() {
      super.pa();
      this.l.G();
    }
    update(a) {
      super.update(a);
      a = this.system.ca.sm().Mi(0.6666666666666666);
      this.l.m((a.A + a.C) / 2);
      this.l.o(a.H - 150);
      this.l.I((a.C - a.A) / 600);
      switch (this.state) {
        case 0:
          a = this.lb(0.5);
          let b = za.lv(0.1)(a),
            c = this.l;
          c.I(c.Wa * b);
          this.l.X(a);
          a == 1 && ((this.state = 1), (this.time = 0));
          break;
        case 1:
          this.system.Yd().Cb(0) &&
            this.time > 2 &&
            ((this.time = 0), (this.state = 2));
          break;
        case 2:
          a = this.lb(0.25);
          this.l.X(1 - a);
          a == 1 && ((this.time = 0), this.state++);
          break;
        case 3:
          this.pa();
      }
    }
  }
  Wd.i = !0;
  Wd.u = ma;
  Object.assign(Wd.prototype, { j: Wd });
  class ne {
    constructor(a) {
      this.sk = !1;
      this.IB = !0;
      this.fE = this.offset = a;
      this.index = ne.qN++;
    }
  }
  ne.i = !0;
  Object.assign(ne.prototype, { j: ne });
  class oe extends Fa {
    constructor(a) {
      super();
      this.T = a;
      this.ZG = 10;
      this.offset = 0;
      this.id = -1;
      this.Se = !1;
      this.Rs = this.zt = this.gf = 0;
      this.dir = new t(0, 0);
      this.active = !1;
      this.Xm = -1;
      this.ja = new t(0, 0);
      this.Aq = null;
      this.ke = new $f();
      this.er = [];
      this.node = new V();
      a.oa(4).R(this.node.B);
      this.l = new V();
      this.node.appendChild(this.l);
    }
    update(a) {
      super.update(a);
      this.Se ||
        ((this.gf = a * this.ZG * 10),
        (this.offset += this.gf),
        (this.offset = this.nx(this.offset, this.width)));
      this.active = Math.abs(this.gf) > 0.001;
      this.Se &&
        this.active &&
        ((this.Rs += Math.abs(this.gf)),
        this.Rs >= 15 && (this.xT(), (this.Rs = 0)));
      this.iP();
      let b = null,
        c = null;
      for (var d = this.ke, e = d.keys(); e.ib(); ) {
        var f = e.next(),
          g = d.get(f);
        if (g.sk) continue;
        let A = g.offset + this.gf,
          D = !0;
        A >= this.width
          ? (A -= this.width)
          : A <= 0
            ? (A += this.width)
            : (D = !1);
        var h = f.Ng(),
          l = f.tk(),
          n = new t(h.x * this.dir.x, h.y * this.dir.y).Ub() / 2,
          q = 1,
          r = A;
        A < n
          ? ((q = 0.5 + (0.5 * A) / n), (b = f), (r = n * q))
          : this.width - A < n &&
            ((q = 0.5 + (0.5 * (this.width - A)) / n),
            (c = f),
            (r = this.width - n * q));
        n = this.ke;
        let B = n.keys();
        for (; B.ib(); ) {
          var u = B.next(),
            v = n.get(u);
          if (u == f || v.sk || q != 1) continue;
          v = v.offset - g.offset;
          t.ub(h, u.Ng()).cp() * 0.25 > v * v &&
            (Math.abs(v) < 0.001
              ? ((u = this.er.indexOf(u) - this.er.indexOf(u)),
                (v = (u > 0 ? 1 : u < 0 ? -1 : 0) * 600))
              : Math.abs(v) < 600 && (v = 600 * (v > 0 ? 1 : v < 0 ? -1 : 0)),
            (A -= v * a));
        }
        f.yU(new t(q, q));
        h = new t(this.x + this.dir.x * r - l.x, this.y + this.dir.y * r - l.y);
        g.IB
          ? ((r = new t(this.dir.y, -this.dir.x)),
            (l = t.VA(h, r) / this.dir.Ub()),
            (r = new t(r.x * l, r.y * l)),
            (l = a * 2e3 * 0.4),
            r.cp() >= l * l
              ? ((q = r.Ub()), r.multiply((q - l) / q))
              : (g.IB = !1),
            h.$y(r),
            f.eh(t.ub(f.tk(), h)))
          : f.eh(t.ub(new t(this.x, this.y), t.Rb(this.dir, r)));
        g.fE = A;
        D && (f.zE(), x.play(x.UL));
      }
      this.Aq.move(this.gf);
      for (d = this.ke.iterator(); d.ib(); )
        ((e = d.next()), (e.offset = this.nx(e.fE, this.width)));
      this.Se && (this.gf = 0);
      if (this.Xm == -1)
        if (b != null && c != null)
          for (d = this.ke, e = d.keys(); e.ib(); )
            ((f = e.next()),
              (g = d.get(f)),
              g.sk ||
                (f == b && (g.offset += 1500 * a),
                f == c && (g.offset -= 1500 * a)));
        else
          b != null ? (this.gf = 1500 * a) : c != null && (this.gf = -1500 * a);
    }
    O() {
      this.l.m(this.x);
      this.l.o(this.y);
      this.l.gh(0, this.height / 2);
      this.l.wf(0, this.height / 2);
      this.l.na(this.rotation);
      this.Aq.O();
    }
    fu(a, b, c) {
      let d = !1;
      if (!this.Se) return !1;
      a = this.ru(new t(a, b));
      0 <= a.x &&
        a.x <= this.width &&
        -this.height * 0.5 <= a.y &&
        a.y <= this.height * 0.5 &&
        ((this.Xm = c), this.ja.Sb(a), (d = !0));
      return d;
    }
    kz(a, b, c) {
      a = !1;
      if (!this.Se) return !1;
      if (this.Xm == c) {
        this.Xm = -1;
        this.gf = 0;
        for (c = this.ke.keys(); c.ib(); )
          ((a = c.next()), this.ke.J[a.Ff].sk && this.ke.remove(a));
        a = !0;
      }
      return a;
    }
    jz(a, b, c) {
      let d = !1;
      if (this.T.hs != -1 || !ua.instance.Yd().up(0) || !this.Se) return !1;
      this.Xm == c &&
        ((a = this.ru(new t(a, b))),
        (this.gf = a.x - this.ja.x),
        (this.offset += this.gf),
        (this.offset = this.nx(this.offset, this.width)),
        this.ja.Sb(a),
        (d = !0));
      return d;
    }
    contains(a) {
      a = this.ru(a);
      return 0 <= a.x && a.x <= this.width && -this.height * 0.5 <= a.y
        ? a.y <= this.height * 0.5
        : !1;
    }
    ru(a) {
      var b = this.zt - Math.PI * 0.5;
      let c = new t(this.dir.x, this.dir.y);
      b = new t(Math.cos(b), Math.sin(b));
      return new t(
        c.x * (a.x - this.x) + c.y * (a.y - this.y),
        b.x * (a.x - this.x) + b.y * (a.y - this.y),
      );
    }
    eO(a, b) {
      a = this.ru(a);
      return !(
        a.x < -b ||
        a.x > this.width + b ||
        a.y < -this.height * 0.5 - b ||
        a.y > this.height * 0.5 + b
      );
    }
    bind(a) {
      this.ON(a);
    }
    KV(a) {
      let b = this.ke,
        c = b.keys();
      for (; c.ib(); ) {
        let d = c.next(),
          e = b.get(d);
        if (d == a) {
          e.sk = !0;
          d.Ny(-1);
          break;
        }
      }
      a.Ny(-1);
    }
    Uw(a) {
      return this.ke.J.Dl[a.Ff] != null;
    }
    remove(a) {
      this.ke.remove(a);
    }
    UQ(a) {
      a = this.ke.J[a.Ff];
      return a != null ? a.sk : !1;
    }
    isActive() {
      return this.active;
    }
    nx(a, b) {
      let c = b - 0;
      a > b && (a -= c);
      a < 0 && (a += c);
      return a;
    }
    ON(a) {
      var b = a.tk();
      b = new t(b.x - this.x, b.y - this.y);
      this.ke.set(
        a,
        new ne(
          Math.max(
            Math.min(b.x * this.dir.x + b.y * this.dir.y, this.width),
            0,
          ),
        ),
      );
      this.er.push(a);
      a.Ny(this.id);
    }
    KQ(a, b, c, d, e, f, g, h) {
      this.Xm = -1;
      this.id = a;
      this.x = b;
      this.y = c;
      this.width = d;
      this.height = e;
      this.rotation = f;
      this.Se = g;
      this.zt = f * Oa;
      this.dir = new t(Math.cos(this.zt), Math.sin(this.zt));
      this.ZG = h;
      this.node = new V();
      a = new C(this.l, p.Zc, Wj);
      a.qa(d / a.Y.x);
      a.nb((e - 10) / a.la());
      a = new C(this.l, p.Zc, lj);
      a.qa(0.4);
      a.nb((e - 10) / a.la());
      a.m(-6);
      a.o(5);
      a = new C(this.l, p.Zc, lj);
      a.qa(0.4);
      a.nb((e - 10) / a.la());
      a.m(d - a.ha() + 6);
      a.o(5);
      a = new C(this.l, p.Zc, mj);
      a.qa(d / a.ha());
      a.nb(-0.4);
      a.o(a.la());
      a = new C(this.l, p.Zc, mj);
      a.qa(d / a.ha());
      a.nb(0.4);
      a.o(e - a.la());
      a = new C(this.l, p.Zc, Hh);
      a.I(0.4);
      a.m(-6);
      a.o(e - a.la());
      a = new C(this.l, p.Zc, Hh);
      a.qa(0.4);
      a.nb(-0.4);
      a.m(-6);
      a.o(a.la());
      a = new C(this.l, p.Zc, Hh);
      a.I(-0.4);
      a.m(d + 6);
      a.o(a.la());
      a = new C(this.l, p.Zc, Hh);
      a.qa(-0.4);
      a.nb(0.4);
      a.m(d + 6);
      a.o(e - a.la());
      a = 0;
      g || (a = h > 0 ? 1 : -1);
      this.Aq = new ag(d - 2, e - 10, a);
      this.Aq.l.o(5);
      this.l.appendChild(this.Aq.l);
      g = new C(this.l, p.Zc, nj);
      g.qa(0.4);
      g.nb((e - 10) / g.Y.y);
      g.o(5);
      g = new C(this.l, p.Zc, nj);
      g.qa(-0.4);
      g.nb((e - 10) / g.Y.y);
      g.m(d);
      g.o(5);
    }
    iP() {
      let a = [];
      for (var b = this.ke, c = b.keys(); c.ib(); ) {
        let d = c.next();
        b.get(d).sk && !this.contains(d.tk()) && a.push(d);
      }
      for (b = 0; b < a.length; )
        ((c = a[b]), ++b, this.ke.remove(c), qa.remove(this.er, c));
    }
    xT() {
      x.play([1057, 1056, 1055, 1054][fa.Wh(0, 3)]);
    }
    static create(a, b, c, d, e, f, g, h, l) {
      a = new oe(a);
      a.KQ(b, c, d, e, f, g, h, l);
      return a;
    }
  }
  oe.i = !0;
  oe.u = Fa;
  Object.assign(oe.prototype, { j: oe });
  class Ih {
    constructor(a) {
      this.qe = new jb();
      this.Xx = !1;
      this.list = [];
      this.T = a;
    }
    count() {
      return this.list.length;
    }
    bind(a) {
      let b = 0,
        c = this.list;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        d.contains(new t(a.x, a.y)) && d.bind(a);
      }
    }
    push(a) {
      this.list.push(a);
    }
    iterator() {
      return new ad(this.list);
    }
    Nl(a) {
      let b = 0;
      for (; b < a.length; ) this.bind(a[b++]);
    }
    dO(a) {
      var b = null;
      let c = [];
      for (var d = this.iterator(); d.ib(); ) {
        var e = d.next();
        e.eO(a.tk(), a.Ur()) && c.push(e);
        e.Uw(a) && (b = e);
      }
      if (b != null && b.Se) {
        for (d = 0; d < c.length; )
          if (((e = c[d]), ++d, e.Se && e.isActive())) {
            this.eF(e, a);
            return;
          }
        if (b.Se)
          for (b = 0; b < c.length; ) ((d = c[b]), ++b, d.Se || this.eF(d, a));
      }
    }
    Vl(a) {
      let b = 0;
      for (; b < a.length; ) this.dO(a[b++]);
    }
    remove(a) {
      let b = 0,
        c = this.list;
      for (; b < c.length; ) c[b++].remove(a);
    }
    dF() {
      var a = this.count() - 1;
      let b = a;
      for (; a >= 0; ) {
        if (this.list[a].Se && this.list[a].isActive()) {
          let c = a;
          for (; c < b; ) (this.tG(c, c + 1), ++c);
          --b;
        }
        --a;
      }
      this.vS();
    }
    update(a) {
      let b = 0,
        c = this.list;
      for (; b < c.length; ) c[b++].update(a);
      this.Xx && (this.dF(), (this.Xx = !1));
    }
    bU() {
      this.Xx = !0;
    }
    fu(a, b, c) {
      let d = this.count() - 1;
      for (; d >= 0; ) {
        let e = this.list[d];
        if (e != null && e.fu(a, b, c))
          return ((this.qe.J[c] = new t(a, b)), !0);
        --d;
      }
      return !1;
    }
    kz(a, b, c) {
      let d = this.count() - 1;
      for (; d >= 0; ) {
        let e = this.list[d];
        if (e != null && e.kz(a, b, c)) return (this.qe.remove(c), !0);
        --d;
      }
      return !1;
    }
    jz(a, b, c) {
      var d = this.qe.J[c];
      if (d != null) {
        var e = t.La(new t(a, b), d);
        if (e.cp() < 4) return !1;
        e = t.Vq(e);
        let f = -1,
          g = null,
          h = 0,
          l = this.list;
        for (; h < l.length; ) {
          let n = l[h];
          ++h;
          if (n.contains(d)) {
            let q = Math.abs(t.VA(e, n.dir));
            q >= f && ((f = q), (g = n));
          }
        }
        g != null && g.fu(d.x, d.y, c);
        this.qe.remove(c);
      }
      for (d = this.count() - 1; d >= 0; ) {
        if (this.list[d].jz(a, b, c)) return (this.bU(), !0);
        --d;
      }
      return !1;
    }
    eF(a, b) {
      if (!a.Uw(b) || a.UQ(b)) {
        for (var c = 0, d = this.list; c < d.length; ) {
          let e = d[c];
          ++c;
          e.Uw(b) && e.KV(b);
        }
        a.bind(b);
        x.play(x.VL);
      }
    }
    vS() {
      var a = this.count() - 1;
      let b = a;
      for (; a >= 0; ) {
        if (!this.list[a].Se) {
          let c = a;
          for (; c < b; ) (this.tG(c, c + 1), ++c);
          --b;
        }
        --a;
      }
    }
    tG(a, b) {
      let c = this.list[a];
      this.list[a] = this.list[b];
      this.list[b] = c;
      this.T.oa(4).tV(a, b);
    }
  }
  Ih.i = !0;
  Object.assign(Ih.prototype, { j: Ih });
  class ag extends Fa {
    constructor(a, b, c) {
      super();
      this.width = a;
      this.height = b;
      new t(0, 0);
      this.l = new V();
      this.xe = [];
      this.offset = 0;
      this.dt = p.Zc.nc.Qf(oj).lc.x;
      switch (c) {
        case -1:
          a = Xj;
          break;
        case 1:
          a = Yj;
          break;
        default:
          a = oj;
      }
      this.Rx = a;
    }
    O() {
      super.O();
      var a = this.dt * 0.4;
      this.xe[0] == null && (this.xe[0] = new C(this.l, p.Zc, this.Rx));
      this.xe[0].M(!0);
      var b = 1;
      var c = this.xe[0],
        d = Math.max(this.offset - ((this.offset / a) | 0) * a, 0);
      c.m(0);
      c.qa(d / this.dt);
      for (c.nb(this.height / c.Y.y); d + a <= this.width; )
        (this.xe[b] == null && (this.xe[b] = new C(this.l, p.Zc, this.Rx)),
          this.xe[b].M(!0),
          (c = this.xe[b++]),
          c.qa(0.4),
          c.nb(this.height / c.Y.y),
          c.m(d),
          (d += c.ha()));
      a = this.width - d;
      this.xe[b] == null && (this.xe[b] = new C(this.l, p.Zc, this.Rx));
      this.xe[b].M(!0);
      c = this.xe[b++];
      c.m(this.width - a);
      c.qa(a / this.dt);
      c.nb(this.height / c.Y.y);
      for (c = this.xe.length; b < c; ) this.xe[b++].M(!1);
    }
    move(a) {
      this.offset += a;
      for (a = this.dt * 0.4; this.offset > this.width; ) this.offset -= a;
      for (; this.offset < 0; ) this.offset += a;
    }
  }
  ag.i = !0;
  ag.u = Fa;
  Object.assign(ag.prototype, { j: ag });
  class Pc extends Ga {
    constructor(a) {
      super();
      this.U = a;
      a.X(0);
      this.time = this.state = 0;
    }
    show() {
      this.ba(1);
    }
    Kh() {
      this.time = 0;
      this.ba(3);
    }
    update(a) {
      this.time += a;
      switch (this.state) {
        case 1:
          a = Math.min(this.time / 1, 1);
          this.U.X(a);
          a == 1 && this.ba(2);
          break;
        case 2:
          Math.min(this.time / (w.box == 1 && w.level == 1 ? 10 : 5), 1) == 1 &&
            this.ba(3);
          break;
        case 3:
          ((a = Math.min(this.time / 0.5, 1)),
            this.U.X(1 - a),
            a == 1 && (this.ba(0), this.U.M(!1)));
      }
    }
    O() {
      this.U.m(this.x);
      this.U.o(this.y);
      this.U.na(this.rotation);
    }
    ba(a) {
      this.time = 0;
      this.state = a;
    }
  }
  Pc.i = !0;
  Pc.u = Ga;
  Object.assign(Pc.prototype, { j: Pc });
  class bg extends Pc {
    constructor(a) {
      a = new C(null, p.JV, k.Nj(k.aM, a));
      a.I(0.4);
      super(a);
      this.cj = 0;
    }
    nj(a) {
      this.rotation = a.angle != null ? a.angle : 0;
      let b = a.path,
        c = xa.bo;
      if (b != null) {
        let d = Ka.aA;
        b.charAt(0) == "R" &&
          (d = Math.round((ra.parseInt(qa.substr(b, 2, null)) * 3) / 2 + 1));
        a = new ge(d, a.moveSpeed * c, a.rotateSpeed);
        a.angle = this.rotation;
        a.NF(b, this.x, this.y);
        this.MF(a);
        a.start();
      }
    }
    update(a) {
      if (this.Md == 2)
        switch (((this.time += a), this.state)) {
          case 1:
            a = Math.min(this.time / 1, 1);
            this.U.X(a);
            a == 1 && ((this.$e = this.x), this.ba(2));
            break;
          case 2:
            a = Math.min(this.time / 1, 1);
            this.x = this.$e + (this.$e + (xa.$L + 40) * Zd.Pq) * a;
            a == 1 && this.ba(3);
            break;
          case 3:
            ((a = Math.min(this.time / 0.5, 1)),
              this.U.X(1 - a),
              a == 1 &&
                (++this.cj == 2
                  ? (this.U.M(!1), this.ba(0))
                  : ((this.x = this.$e), this.ba(1))));
        }
      else
        (this.rb != null &&
          (this.rb.update(a),
          (this.x = this.rb.g.x),
          (this.y = this.rb.g.y),
          (this.rotation = this.rb.angle)),
          super.update(a));
    }
  }
  bg.i = !0;
  bg.u = Pc;
  Object.assign(bg.prototype, { j: bg });
  class cg extends Pc {
    constructor(a, b) {
      let c = new ta(null, p.Oi);
      c.Va(a);
      c.tb(b, 512);
      c.tc(26);
      c.Hb(0);
      c.lg(!0);
      c.ge(2);
      c.X(0.7);
      super(c);
    }
  }
  cg.i = !0;
  cg.u = Pc;
  Object.assign(cg.prototype, { j: cg });
  class xa extends ma {
    constructor(a) {
      super();
      this.ij = a;
      this.WB = this.ra(new ma());
      this.Bj = new rb();
      this.HD = [];
      for (a = 0; a < 14; ) {
        let b = new rb();
        this.HD[a++] = b;
        this.Bj.R(b);
      }
      this.Eb = new zh();
      this.ia = Zd.Pq;
      this.gw = !1;
      this.Vt = 0;
      this.hV = t.Ac();
      this.mk = [];
      for (a = 0; a < 5; ) this.mk[a++] = [];
      this.UB = new Xa();
      this.UB.kg(new Qc(this.mk));
      this.oa(13).R(this.UB);
      this.Dm = this.Ll = this.xp = this.wp = 0;
      this.zv = [];
      this.wm();
    }
    xN() {
      this.Bm = !0;
      this.Yf = new Lf();
      this.oa(8).R(this.Yf.l.B);
    }
    yN() {
      this.am = new Nf(this);
      this.Ud = new ie(this, this.Vg, this.Ug, 4, !1);
      this.yg = new Bf(this, new t(this.Na.x, this.Na.y - 30), new t(0, 0));
      this.wo = new Ff(this, this.K);
      this.po = 0;
      this.mf = !0;
      this.Na.rT();
      this.Rc.LV();
      for (var a = 0, b = this.Nd; a < b.length; ) {
        var c = b[a];
        ++a;
        c == null || (c.me && !c.fm) || c.mT();
      }
      a = 0;
      for (b = this.Uc; a < b.length; )
        ((c = b[a]),
          ++a,
          c.Me &&
            (c.ii
              ? (this.tq(c), (c.ii = !1))
              : ((c.Me = !1), c.uc.pa(), (c.uc = null))));
      if (this.gd)
        for (this.Na.zn(!0), a = 0, b = this.eb; a < b.length; ) b[a++].zn(!0);
    }
    uO() {
      this.am.G();
      this.wo.G();
      this.Ud.G();
      this.yg.G();
      let a = 0,
        b = this.Nd;
      for (; a < b.length; ) b[a++].pV();
    }
    Lw(a, b, c) {
      if (!a.jl) {
        a.jl = !0;
        var d = a.rotation * Oa,
          e = t.La(b.ja, b.g),
          f = b.ja;
        f = new t(f.x, f.y);
        f.cb(-d, a.x, a.y);
        f = f.y < a.y;
        e = Math.max(e.Ub() * 40, 300) * (f ? -1 : 1);
        e = t.Rb(t.Yu(t.oC(d)), e);
        var g = b.g;
        g = new t(g.x, g.y);
        g.cb(-d, a.x, a.y);
        b.g = g;
        g = b.ja;
        g = new t(g.x, g.y);
        g.cb(-d, a.x, a.y);
        b.ja = g;
        b.ja.y = b.g.y;
        g = b.g;
        g = new t(g.x, g.y);
        g.cb(d, a.x, a.y);
        b.g = g;
        g = b.ja;
        g = new t(g.x, g.y);
        g.cb(d, a.x, a.y);
        b.ja = g;
        b.zi(e, c);
        c = (-180 * d) / Math.PI + 90;
        f || (c += 180);
        b = b.g;
        d = new t(bb.ug, 0);
        d.rotate(-c);
        b = t.ub(b, d);
        a.eD < 2 && (x.play(x.yA), this.wo.nC(b, c));
      }
    }
    Kw(a) {
      let b = bb.ug,
        c = 0,
        d = this.Vg,
        e = this.Ug,
        f = a.g.x < b || a.g.x > d - b,
        g = a.g.y < b || a.g.y > e - b;
      if (
        (f && Math.abs(Math.min(a.g.x, d - a.g.x)) > 0) ||
        (g && Math.abs(Math.min(a.g.y, e - a.g.y)) > 0)
      ) {
        let h = t.La(a.g, a.ja);
        a.ja = a.g;
        let l = null;
        f &&
          (a.g.x < b
            ? ((h.x = Math.abs(h.x)), (c = 0), (l = new t(b, a.g.y)))
            : ((h.x = -Math.abs(h.x)), (c = 180), (l = new t(d - b, a.g.y))),
          Math.abs(h.x) < 3 && (h.x = (a.g.x < b ? 1 : -1) * 3));
        g &&
          (a.g.y < b
            ? ((h.y = Math.abs(h.y)), (c = -90), (l = new t(a.g.x, b)))
            : ((h.y = -Math.abs(h.y)), (c = 90), (l = new t(a.g.x, e - b))),
          Math.abs(h.y) < 3 && (h.y = (a.g.y < b ? 1 : -1) * 3),
          h.Ub() < 5 && (h.normalize(), (h = t.Rb(h, 5))));
        a.g = t.ub(a.g, h);
        a.g.x < b ? (a.g.x = b) : a.g.x > d - b && (a.g.x = d - b);
        a.g.y < b ? (a.g.y = b) : a.g.y > e - b && (a.g.y = e - b);
        this.wo.nC(l, c);
      }
    }
    wm() {
      for (var a = 0; a < 5; ) this.mk[a++] = [];
      this.Hi = Array(5);
      this.Fj = Array(5);
      this.Xk = Array(5);
      for (a = 0; a < 5; ) {
        let b = a++;
        this.Hi[b] = !1;
        this.Fj[b] = t.Ac();
        this.Xk[b] = t.Ac();
      }
    }
    oa(a) {
      return this.HD[a];
    }
    xv() {
      let a = this.WB.He;
      for (; a != null; ) {
        let b = a.$;
        a.pa();
        a = b;
      }
    }
    delay(a, b) {
      a = new Mf(a, b);
      this.WB.ra(a);
    }
    pa() {
      x.stop(x.af);
      x.stop(x.Rq);
      this.Bj.G();
      super.pa();
    }
    show() {
      this.Dm = this.Ll = 0;
      this.xv();
      this.$d = null;
      this.hs = -1;
      this.Da = 2;
      this.pj = 0;
      x.stop(x.Rj);
      x.stop(x.Nu);
      this.Uc = [];
      this.Nd = [];
      this.eb = [];
      this.bubbles = [];
      this.vj = [];
      this.hi = [];
      this.Dq = [];
      this.Eq = [];
      this.bk = [];
      this.fe = [];
      this.Uf = [];
      this.Ij = [];
      this.Em = [];
      this.vc = new Ih(this);
      this.Ge = new yh(this);
      this.zc = [];
      this.gn = null;
      this.Oh = !1;
      this.fa = new Lb();
      this.fa.hh(1);
      this.za = new Lb();
      this.za.hh(1);
      this.Ma = new Lb();
      this.Ma.hh(1);
      this.dk = new xc(this);
      var a = me.get();
      this.nv = new vh(this);
      this.K = new Ab(this);
      this.K.constraint = this.fa;
      this.GR(a);
      a = this.fe.length;
      let b,
        c = 0;
      for (; c < a; ) ((b = this.fe[c++]), (b.Ys = -1), (b.yh = this.fe));
      this.Vt = 0;
      this.xc = this.Gc = this.od = null;
      this.Bx = !1;
      this.Bc = this.Da != 2;
      this.kG = this.Ps = this.rd = this.qd = !1;
      this.time = 0;
      this.Yi = !0;
      $a.reset();
      this.Ii = this.Ll > 0 ? 0 : 0.3;
      this.vc.Nl(this.eb);
      this.vc.Nl(this.hi);
      this.vc.Nl(this.bubbles);
      this.vc.Nl(this.Ij);
      this.vc.Nl(this.vj);
      this.vc.Nl(this.bk);
      this.vc.dF();
      this.Ag = !1;
      this.nV();
    }
    GR(a) {
      function b(g, h) {
        let l = 0,
          n = g.length;
        for (; l < n; ) {
          let q = g[l++],
            r = 0,
            u = q.length;
          for (; r < u; ) h(q[r++]);
        }
      }
      let c = [],
        d = 0,
        e = Jb.kP(a);
      for (; d < e.length; ) c.push(Jb.Ig(a, e[d++]));
      let f = this;
      b(c, function (g) {
        switch (g.name) {
          case 0:
            f.HR(g);
            break;
          case 1:
            f.yR(g);
            break;
          case 50:
            f.wR(g);
            break;
          case 51:
            f.xR(g);
            break;
          case 52:
            f.vR(g);
            break;
          case 134:
            f.FR(g);
        }
      });
      b(c, function (g) {
        switch (g.name) {
          case 2:
            f.Na = new fc(f, g);
            f.GB = !1;
            f.js = xa.pk ? 2 : -1;
            f.ir = 1;
            xa.pk = !1;
            break;
          case 3:
            f.MR(g);
            break;
          case 4:
            f.QR(g);
            break;
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
          case 10:
          case 11:
          case 12:
          case 13:
          case 14:
            f.PR(g);
            break;
          case 53:
            f.CR(g);
            break;
          case 54:
            f.uR(g);
            break;
          case 55:
            f.IR(g);
            break;
          case 56:
            f.KR(g);
            break;
          case 57:
          case 58:
          case 59:
          case 60:
          case 80:
            f.LR(g);
            break;
          case 81:
          case 82:
            f.tR(g);
            break;
          case 100:
            f.BR(g);
            break;
          case 120:
            f.JR(g);
            break;
          case 130:
            f.AR(g);
            break;
          case 131:
            f.NR(g);
            break;
          case 132:
            f.ER(g);
            break;
          case 133:
            f.zR(g);
            break;
          case 135:
            f.OR(g);
            break;
          case 300:
            f.DR(g);
        }
      });
    }
    HR(a) {
      this.Vg = (a.width * this.ia) | 0;
      this.Ug = (a.height * this.ia) | 0;
      var b = a.view;
      if (b != null) {
        var c = b.x;
        let d = b.y;
        b = new ia(c, d, c + b.width, d + b.height);
        b.scale(this.ia, !1);
        c = this.Eb.wl;
        c.A = b.A;
        c.F = b.F;
        c.C = b.C;
        c.H = b.H;
        c = this.Eb.g;
        c.x = (b.A + b.C) / 2;
        c.y = (b.F + b.H) / 2;
      } else
        ((b = this.Eb.wl),
          (b.A = 0),
          (b.F = 0),
          (b.C = this.Vg),
          (b.H = this.Ug),
          (b = this.Eb.g),
          (b.x = this.Vg / 2),
          (b.y = this.Ug / 2));
      this.we = new F(0, 0, 0, 1);
      a.scrollX != null && (this.we.x = a.scrollX);
      a.scrollY != null && (this.we.y = a.scrollY);
      w.box == 8 && this.nv.eV();
    }
    yR(a) {
      this.Md = a.special;
      this.sn = a.ropePhysicsSpeed;
      this.gd = a.nightLevel;
      this.Da = a.twoParts ? 0 : 2;
      this.sn *= xa.pA;
      this.Da != 2 && ((this.ek = new xc(this)), (this.fk = new xc(this)));
    }
    BR(a) {
      var b = a.x * this.ia;
      let c = a.y * this.ia,
        d = a.length * this.ia;
      var e = a.radius,
        f = a.wheel,
        g = a.moveLength != null ? a.moveLength * this.ia : -1;
      let h = a.moveVertical,
        l = a.moveOffset != null ? a.moveOffset * this.ia : 0;
      var n = a.spider,
        q = a.part == "L";
      let r = a.hidePath;
      var u = a.bindBulb;
      let v = new vd(this);
      v.x = b;
      v.y = c;
      v.sg = f;
      v.UU(n);
      v.nj(a);
      e != -1 && (e *= this.ia);
      if (e == -1) {
        f = this.fa;
        if (u)
          for (q = 0, u = this.zc; q < u.length; )
            ((n = u[q]), ++q, n != null && (f = n.constraint));
        else this.Da != 2 && (f = q ? this.za : this.Ma);
        b = new je(this.oa(6), null, b, c, f, f.g.x, f.g.y, d);
        b.Sc.Uh.Sb(b.Sc.g);
        v.SF(b);
        this.qo();
      }
      v.setRadius(e);
      v.FU(g, h, l);
      if (v.rb != null && (v.uU(), !r)) {
        a = a.path[0] == "R";
        this.gn == null && (this.gn = new Uf(this));
        e = 0;
        for (g = v.rb.path.length - 1; e < g; )
          ((a && e % 3 != 0) || this.gn.iC(e, e + 1, v), ++e);
        v.rb.path.length > 2 && this.gn.iC(0, v.rb.path.length - 1, v);
      }
      this.Uc.push(v);
    }
    wR(a) {
      this.za.g.x = a.x * this.ia;
      this.za.g.y = a.y * this.ia;
      this.Qa = new yc(this, k.WI);
      this.Qa.x = this.za.g.x;
      this.Qa.y = this.za.g.y;
      this.Qa.constraint = this.za;
    }
    xR(a) {
      this.Ma.g.x = a.x * this.ia;
      this.Ma.g.y = a.y * this.ia;
      this.Ra = new yc(this, k.XI);
      this.Ra.x = this.Ma.g.x;
      this.Ra.y = this.Ma.g.y;
      this.Ra.constraint = this.Ma;
    }
    vR(a) {
      this.fa.g.x = a.x * this.ia;
      this.fa.g.y = a.y * this.ia;
    }
    FR(a) {
      let b = new Lb();
      b.hh(1);
      b.g.x = a.x * this.ia;
      b.g.y = a.y * this.ia;
      a = new Tf(this, a.litRadius * this.ia);
      a.x = b.g.x;
      a.y = b.g.y;
      a.constraint = b;
      this.zc.push(a);
    }
    CR(a) {
      this.$d = new Sf(this, a.x * this.ia, a.y * this.ia);
      this.$d.Mx = M(this, this.Ts);
    }
    MR(a) {
      let b = new bb(this);
      b.x = a.x * this.ia;
      b.y = a.y * this.ia;
      b.timeout = a.timeout;
      a.timeout != -1 && b.setTimeout();
      b.nj(a);
      b.update(0);
      this.eb.push(b);
    }
    DR(a) {
      this.Rc = new Ef(this);
      this.Rc.x = a.x * this.ia;
      this.Rc.y = a.y * this.ia;
      this.Rc.update(0);
    }
    QR(a) {
      if (!this.aG(a) && a.text != null && a.text != "") {
        var b = Math.ceil(a.width * this.ia);
        b = new cg(Eb.get(a.text), b);
        b.x = a.x * this.ia;
        b.y = a.y * this.ia;
        this.oa(2).R(b.U.B);
        a = a.special;
        b.Md = a != null ? a : 0;
        b.Md == 0 && b.show();
        this.Eq.push(b);
      }
    }
    PR(a) {
      if (!this.aG(a)) {
        var b = new bg(a.name - 5);
        b.U.D();
        b.x = a.x * this.ia;
        b.y = a.y * this.ia;
        var c = a.angle;
        b.rotation = c != null ? c : 0;
        c = a.special;
        b.Md = c != null ? c : 0;
        b.nj(a);
        a = 2;
        if (b.Md == 2 || this.Md == 5) a = 13;
        this.oa(a).R(b.U.B);
        (b.Md != 0 && b.Md != 2) || b.show();
        this.Dq.push(b);
      }
    }
    uR(a) {
      let b = new lb(this);
      b.x = a.x * this.ia;
      b.y = a.y * this.ia;
      this.bubbles.push(b);
    }
    IR(a) {
      let b = new hc(this);
      b.angle = a.angle;
      b.x = a.x * this.ia;
      b.y = a.y * this.ia;
      b.rotation = a.angle + 90;
      b.Qd();
      this.vj.push(b);
    }
    KR(a) {
      let b = new Za(this, a.group);
      b.x = a.x * this.ia;
      b.y = a.y * this.ia;
      b.nj(a);
      b.rotation += 90;
      b.rb != null && (b.rb.angle += 90);
      b.Qd();
      this.hi.push(b);
    }
    LR(a) {
      var b = a.x * this.ia;
      let c = a.y * this.ia,
        d = a.size,
        e = parseFloat(a.angle);
      if (a.toggled == 0) var f = -1;
      else ((f = a.toggled), (f = f != null ? f : -1));
      b = new Xf(this, b, c, d, e != null ? e : 0, f);
      b.nj(a);
      f != -1 && (b.AE = M(this, this.jU));
      a.name == 80
        ? ((b.me = !0),
          (b.pD = a.initialDelay),
          (b.FE = a.onTime),
          (b.rE = a.offTime),
          (b.Of = 0),
          b.QG(),
          (b.Of += b.pD),
          b.Qd())
        : (b.me = !1);
      this.Nd.push(b);
    }
    JR(a) {
      let b = a.x * this.ia,
        c = a.y * this.ia,
        d = a.size * this.ia;
      var e = ra.parseInt(a.handleAngle);
      e = e != null ? e : 0;
      let f = e * Oa,
        g = a.oneHandle,
        h = new Wf(this);
      h.CD = a.size;
      h.x = b;
      h.y = c;
      h.rotation = e;
      h.ls = new t(h.x - h.CD * this.ia, h.y);
      h.ls.cb(f, h.x, h.y);
      h.ns = new t(h.x + h.CD * this.ia, h.y);
      h.ns.cb(f, h.x, h.y);
      h.Ob(d);
      h.BU(g);
      this.fe.push(h);
    }
    tR(a) {
      let b = new sd(this, a.x * this.ia, a.y * this.ia, a.size, a.angle);
      b.nj(a);
      this.bk.push(b);
    }
    AR(a) {
      let b = a.x * this.ia,
        c = a.y * this.ia,
        d = a.radius,
        e = a.angle,
        f = a.grab,
        g = a.bubble;
      a = a.bouncer;
      let h = new Of(this);
      h.PQ(
        new t(b, c),
        (a ? 8 : 0) | (g ? 2 : 0) | (f ? 4 : 0),
        d,
        e,
        this.bubbles,
        this.Uc,
        this.bk,
      );
      this.Uf.push(h);
      this.dk.Fb = new Pa();
      this.Da != 2 && ((this.ek.Fb = new Pa()), (this.fk.Fb = new Pa()));
    }
    NR(a) {
      let b = a.x * this.ia,
        c = a.y * this.ia;
      a = a.angle;
      let d = new Zf(this);
      d.NQ(b, c, a);
      this.Ij.push(d);
    }
    ER(a) {
      let b = a.x * this.ia,
        c = a.y * this.ia,
        d = a.candyCaptured,
        e = new sb(this);
      e.MQ(b, c);
      this.Em.push(e);
      e.nj(a);
      d && ((this.Oh = !0), this.K.l.X(0), e.HB(this.fa));
    }
    zR(a) {
      let b = a.x * this.ia,
        c = a.y * this.ia,
        d = a.angle,
        e = a.radius,
        f = a.activeTime;
      a = a.index;
      let g = new Hf(this, this.Ge);
      g.index = a;
      g.OQ(new t(b, c), d, e, f);
      this.Ge.ra(g, a);
    }
    OR(a) {
      var b = a.x * this.ia;
      let c = a.y * this.ia,
        d = a.angle,
        e = a.width * this.ia,
        f = a.length * this.ia,
        g = a.velocity * this.ia,
        h = a.direction == "forward" ? 1 : -1;
      a = a.type == "manual";
      b = oe.create(this, this.vc.count(), b, c, f, e, -d, a, g * h);
      this.vc.push(b);
    }
    qo() {
      this.Ll += 1;
    }
    Vw(a, b, c, d) {
      if (Y.Uk(b.x, b.y, a.x - 34, a.y - 34, 68, 68)) {
        if (c != null) {
          this.hn(a.x, a.y);
          this.Ro();
          b = 0;
          for (var e = this.Uf; b < e.length; ) {
            var f = e[b];
            ++b;
            f != null && f.ea == c && ((f.Fg = !0), f.wj(1));
          }
        }
        d.show();
        c = !1;
        b = 0;
        for (e = this.Uf; b < e.length; )
          ((f = e[b]), ++b, f != null && f.ea == a && ((f.Fg = !1), (c = !0)));
        c && d.fV();
        x.play(x.wA);
        a.pop();
        this.qo();
        return !0;
      }
      return !1;
    }
    Hn(a, b) {
      this.kG || ((b.x = a.g.x), (b.y = a.g.y), b.De());
    }
    dP(a, b, c, d) {
      this.Hn(this.fa, a);
      return Fa.tp(a, c)
        ? (c.yT(),
          x.play(x.af, !0),
          b != null && this.Wk(b, !1),
          this.bl(d != null),
          (a.Ce = !1),
          a.l.Vb().iH(c.x, c.y + 10),
          a.l.Vb().alpha(0, 0.1),
          a.l.Vb().scale(0, 0.1, null, null, function () {
            a.G();
          }),
          !0)
        : !1;
    }
    zG(a) {
      if (a != null && a.Pc != null) {
        var b = a.constraint;
        a.Pc.yc.M(!0);
        a.Pc.yc.sa().play(Eh);
        var c = new t(0, Za.mL);
        c.rotate(a.Pc.rotation * Oa);
        b.g.x = a.Pc.x;
        b.g.y = a.Pc.y;
        b.g.add(c);
        b.ja.Sb(b.g);
        b.ma.x = 0;
        b.ma.y = -1;
        b.ma.rotate(a.Pc.rotation * Oa);
        b.ma.multiply(a.qy);
        b.Gd.Sb(b.ma);
        b.Gd.YB(60);
        b.ja.Sb(b.g);
        b.ja.$y(b.Gd);
        a.Pc = null;
      }
    }
    bl(a) {
      let b = 0,
        c = this.Uc.length;
      for (; b < c; ) {
        let d = this.Uc[b++],
          e = d.mb;
        e != null &&
          (e.Pb == this.fa ||
            (e.Pb == this.za && a) ||
            (e.Pb == this.Ma && !a)) &&
          (e.Hc == -1 ? (e.Gt(e.Ca.length - 2), this.Ro()) : (e.Nw = !0),
          d.Me && d.ii && this.tq(d));
      }
    }
    TT(a) {
      if (a != null)
        for (var b = 0, c = this.Uc; b < c.length; ) {
          let d = c[b];
          ++b;
          if (d == null) continue;
          let e = d.mb;
          e != null &&
            e.Pb == a.constraint &&
            (e.Hc == -1 ? e.Gt(e.Ca.length - 2) : (e.Nw = !0),
            d.Me && d.ii && this.tq(d));
        }
    }
    Ro() {
      --this.Ll;
      this.Dm = 0;
    }
    Ri() {
      this.od != null && this.Wk(this.od, !1);
      this.bl(!1);
      this.xv();
      let a = x.Rj;
      this.delay(function () {
        x.stop(a);
      }, 1.5);
      this.ij.Vs();
      this.delay(((mc = this.ij), M(mc, mc.OS)), 1.8);
      this.Ge.pR();
      this.Bm && (this.Yf.G(), (this.Yf = null));
      this.mf && (this.uO(), (this.mf = !1));
    }
    Rr() {
      this.qn ||
        (this.Na.nT(),
        x.play(x.AL),
        this.Bm && (this.Yf.G(), (this.Yf = null)),
        this.xv(),
        this.ij.NS(),
        this.delay(((mc = this.ij), M(mc, mc.vE)), 1));
    }
    qs(a, b, c, d) {
      if (
        c.ST(
          a.x - 249.60000000000002,
          a.y - 249.60000000000002,
          a.x + 249.60000000000002,
          a.y + 249.60000000000002,
        )
      ) {
        var e = new t(0, 0);
        let h = new t(0, 0);
        c = new t(c.x, c.y);
        var f = a.ga;
        f = f.C - f.A;
        var g = a.ga;
        g = g.H - g.F;
        e.x = a.x - f / 2;
        h.x = a.x + f / 2;
        e.y = h.y = a.y;
        a.angle != 0 && c.cb(-a.angle, a.x, a.y);
        c.y < e.y &&
          Y.Yx(
            c.x - f / 2,
            c.y - g / 2,
            c.x + f / 2,
            c.y + g / 2,
            e.x,
            e.y - 249.60000000000002,
            h.x,
            h.y,
          ) &&
          ((e = new t(
            0,
            -(
              (499.20000000000005 * (249.60000000000002 - (e.y - c.y))) /
              249.60000000000002
            ),
          )),
          e.rotate(a.angle),
          b.zi(e, d));
      }
    }
    os(a, b, c) {
      if (!a.jl && a.l != null) {
        var d = t.La(b.ja, b.g),
          e = b.ja.cc();
        e.cb(-a.angle, a.x, a.y);
        d = Math.max(d.Ub() * 40, 336) * (e.y < a.y ? -1 : 1);
        e = t.Yu(t.oC(a.angle));
        e.multiply(d);
        b.g.cb(-a.angle, a.x, a.y);
        b.ja.cb(-a.angle, a.x, a.y);
        b.ja.y = b.g.y;
        b.g.cb(a.angle, a.x, a.y);
        b.ja.cb(a.angle, a.x, a.y);
        b.zi(e, c);
        a.kT();
        x.play(x.nL);
      }
    }
    eT(a, b) {
      a.V.sa().play(hc.pH);
      x.play([1035, 1034, 1033, 1032][fa.Wh(0, 3)]);
      a.fP(this);
      this.Bc || this.qs(a, this.fa, this.K, b);
      this.Da != 2 &&
        (this.qd || this.qs(a, this.za, this.Qa, b),
        this.rd || this.qs(a, this.Ma, this.Ra, b));
      let c = 0,
        d = this.zc;
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        this.qs(a, e.constraint, e, b);
      }
    }
    fT(a, b) {
      function c(v, A, D) {
        var B = 0;
        if (
          (a.rotation == 0 && (q.$d == null || (q.$d != null && q.Yi))) ||
          (a.rotation == 180 && q.$d != null && !q.Yi)
        )
          ((B = a.x - A.x),
            (B =
              Math.abs(B) > 2.5
                ? -D.x / f + 0.25 * B
                : Math.abs(D.x) < 1
                  ? -D.x
                  : -D.x / f));
        let G = -34 / v.weight;
        if (
          (a.rotation != 0 && (q.$d == null || (q.$d != null && q.Yi))) ||
          (a.rotation != 180 && q.$d != null && !q.Yi)
        )
          ((f *= 15),
            (G = a.rotation == 90 || a.rotation == 270 ? G / 4 : G / 2));
        D = new t(B, -D.y / f + G);
        A = a.y - A.y;
        A > h + 17.5 && D.multiply(Math.exp(-2 * (A - (h + 17.5))));
        D.rotate(g);
        v.zi(D, b);
      }
      function d() {
        let v = 0,
          A = q.bk;
        for (; v < A.length; ) {
          let D = A[v];
          ++v;
          D != null && (D.jl = !1);
        }
      }
      function e(v, A, D) {
        A.cb(-g, a.x, a.y);
        D.rotate(-g);
        return Y.Yx(
          A.x - 17.5,
          A.y - 8.75,
          A.x + 17.5,
          A.y + 17.5,
          l.x,
          l.y,
          n.x,
          n.y,
        );
      }
      let f = 5,
        g = a.rotation * Oa,
        h = a.NP(),
        l = new t(a.x - 5, a.y - h - 1),
        n = new t(a.x + 5, a.y - 17.5),
        q = this;
      if (this.Da == 2) {
        var r = this.fa.g.cc(),
          u = this.fa.ma.cc();
        e(this.fa, r, u) && (d(), c(this.fa, r, u));
      } else
        ((r = this.za.g.cc()),
          (u = this.za.ma.cc()),
          e(this.za, r, u) && (d(), c(this.za, r, u)),
          (r = this.Ma.g.cc()),
          (u = this.Ma.ma.cc()),
          e(this.Ma, r, u) && (d(), c(this.Ma, r, u)));
      r = 0;
      for (u = this.zc; r < u.length; ) {
        let v = u[r];
        ++r;
        let A = v.constraint.g.cc(),
          D = v.constraint.ma.cc();
        e(v.constraint, A, D) && (d(), c(v.constraint, A, D));
      }
    }
    Hc(a, b, c) {
      let d = 0,
        e = this.Uc.length;
      for (; d < e; ) {
        let f = this.Uc[d++],
          g = f.mb;
        if (g == null || g.Hc != -1) continue;
        let h = g.Ca.length - 1,
          l = 0;
        for (; l < h; ) {
          let n = l++,
            q = g.Ca[n],
            r = g.Ca[n + 1];
          if (
            f.sg && Y.Fk(a.x, a.y, b.x, b.y, f.x - 44, f.y - 44, 88, 88)
              ? 0
              : Mb.rR(a.x, a.y, b.x, b.y, q.g.x, q.g.y, r.g.x, r.g.y)
          )
            return (
              f.Me && f.ii && this.tq(f),
              x.play([1030, 1029, 1028, 1027][g.Zx]),
              g.Gt(n),
              this.Ro(),
              c && ((g.zh = 0), g.$x(n)),
              1
            );
        }
      }
      return 0;
    }
    tq(a) {
      x.play(x.IL);
      a.Me = !1;
      a.uc.SN();
    }
    lV(a) {
      x.play(x.JL);
      let b = 0,
        c = this.Uc;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        let e = d.mb;
        e != null &&
          e.Pb == this.fa &&
          (e.Hc != -1
            ? d.Ov()
            : (e.Gt(e.Ca.length - 2), this.Ro(), (e.im = !1)),
          d.Me && d.ii && a != d && this.tq(d));
      }
      a.Me = !1;
      this.Bc = this.kG = !0;
      a.uc.jc();
      this.qn || this.delay(M(this, this.Rr), 2);
    }
    Wk(a, b) {
      for (var c = 0, d = this.Uf; c < d.length; ) {
        var e = d[c];
        ++c;
        e != null &&
          (e.ea == a && ((e.Fg = !0), e.wj(1)),
          this.od == a &&
            this.$F &&
            e.ea == this.xc &&
            ((e.Fg = !0), e.wj(1), (this.xc = null), (this.$F = !1)));
      }
      c = 0;
      for (d = this.zc; c < d.length; )
        if (((e = d[c]), ++c, e.ea != null && e.ea == a)) {
          e.ea = null;
          e.Ao.Kh();
          this.hn(e.x, e.y);
          return;
        }
      this.Da != 2
        ? b
          ? ((this.Gc = null), this.ek.Kh(), this.hn(this.Qa.x, this.Qa.y))
          : ((this.xc = null), this.fk.Kh(), this.hn(this.Ra.x, this.Ra.y))
        : ((this.od = null), this.dk.Kh(), this.hn(this.K.x, this.K.y));
      this.Ro();
    }
    hn(a, b) {
      x.play(x.oL);
      let c = new C(null, p.ea, k.OI);
      c.m(a);
      c.o(b);
      c.D();
      c.I(0.4);
      this.Bj.R(c.B);
      c.sa()
        .play(lb.JK)
        .Ue(function () {
          c.G();
        });
    }
    ps(a, b, c, d) {
      return Y.Uk(c, d, b.g.x - 24, b.g.y - 24, 60, 60)
        ? (this.Wk(a, b == this.za), !0)
        : !1;
    }
    ty(a) {
      var b = this.system.window,
        c = b.W.viewport,
        d = b.Qc.x;
      b = b.Qc.y;
      d = -1 + (2 * (a.x - ((c.x * d) | 0))) / ((c.w * d) | 0);
      a = -1 + (2 * (((c.y * b) | 0) - a.y)) / ((c.J * b) | 0);
      c = this.Eb.Db.Sw;
      return new F(
        c.m11 * d + c.m12 * a + c.m14,
        c.m21 * d + c.m22 * a + c.m24,
        0,
        1,
      );
    }
    EV(a, b) {
      var c = this.ty(a);
      a = c.x;
      c = c.y;
      if (this.vm) this.hC = !0;
      else if (!(b >= 5))
        if (this.$d != null && this.$d.Am(a, c)) this.hs = b;
        else if (
          !(
            (this.Ge.bj() && this.Ge.Sk(a, c, b)) ||
            (this.od != null && this.ps(this.od, this.fa, a, c)) ||
            (this.Da != 2 &&
              ((this.Gc != null && this.ps(this.Gc, this.za, a, c)) ||
                (this.xc != null && this.ps(this.xc, this.Ma, a, c))))
          )
        ) {
          for (var d = 0, e = this.zc; d < e.length; ) {
            var f = e[d];
            ++d;
            if (f.ea != null && this.ps(f.ea, f.constraint, a, c)) return;
          }
          d = new t(a, c);
          this.Hi[b] || (this.Fj[b].Sb(d), this.Xk[b].Sb(d));
          d = 0;
          for (e = this.Nd; d < e.length; )
            if (
              ((f = e[d]), ++d, f.ah != null && f.gu == -1 && f.ah.Px(a, c))
            ) {
              f.gu = b;
              return;
            }
          d = !1;
          e = 0;
          for (f = this.vj; e < f.length; ) {
            var g = f[e];
            ++e;
            if (g.AT(a, c)) {
              g.zq = 0.05;
              g.LG = b;
              g.Cm() || (d = !0);
              break;
            }
          }
          if (!d) {
            d = 0;
            for (e = this.Ij; d < e.length; ) if (e[d++].Sk(a, c, b)) return;
            var h = this;
            d = 0;
            for (e = this.Em; d < e.length; )
              if (((f = e[d]), ++d, f != null && f.Sk(a, c, b))) {
                this.delay(function () {
                  h.Oh = !1;
                  h.K.Ce = !0;
                  h.K.l.X(1);
                  h.K.l.I(0.71);
                }, 0.1);
                return;
              }
            var l = 0;
            for (d = this.fe.length; l < d; ) {
              e = this.fe[l];
              f = t.ud(a, c, e.ls.x, e.ls.y);
              g = t.ud(a, c, e.ns.x, e.ns.y);
              if ((f < xa.Qq && !e.AQ()) || g < xa.Qq) {
                for (l += 1; l < d; ) ++l;
                e.yp.x = a;
                e.yp.y = c;
                e.Ys = b;
                f < xa.Qq && e.HF(!0);
                g < xa.Qq && e.IF(!0);
                return;
              }
              ++l;
            }
            d = 0;
            for (e = this.Uc; d < e.length; ) {
              f = e[d];
              ++d;
              if (f.sg && Y.Uk(a, c, f.x - 44, f.y - 44, 88, 88)) {
                f.xQ(a, c);
                f.Nn = b;
                return;
              }
              if (f.$f > 0 && Y.Uk(a, c, f.x - 26, f.y - 26, 52, 52)) {
                f.Wm = b;
                return;
              }
            }
            d = 0;
            for (e = this.Uf; d < e.length; )
              if (((f = e[d]), ++d, f != null && f.Px(a, c))) return;
            this.vc.fu(a, c, b) || (this.Hi[b] = !0);
          }
        }
    }
    GV(a, b) {
      var c = this.ty(a);
      a = c.x;
      c = c.y;
      if (!this.vm) {
        this.Hi[b] = !1;
        this.$d != null &&
          this.hs == b &&
          (this.$d.Am(a, c) &&
            (this.$d.toggle(), w.box == 8 && this.nv.pP(), this.Ts(0)),
          (this.hs = -1));
        for (var d = 0, e = this.Nd; d < e.length; ) {
          var f = e[d];
          ++d;
          if (f.ah != null && f.gu == b && ((f.gu = -1), f.ah.cT(a, c))) return;
        }
        d = 0;
        for (e = this.fe; d < e.length; )
          ((f = e[d]),
            ++d,
            f.Ys == b && ((f.Ys = -1), (f.Xy = -1), f.HF(!1), f.IF(!1)));
        d = 0;
        for (e = this.Ij; d < e.length; ) if (e[d++].dT(b)) return;
        d = 0;
        for (e = this.Uc; d < e.length; )
          ((f = e[d]),
            ++d,
            f.sg && f.Nn == b && (f.Nn = -1),
            f.$f > 0 && f.Wm == b && (f.Wm = -1));
        b == 0 && this.mf && (this.Na.qT(), this.yg.GF(!1));
        this.vc.kz(a, c, b);
      }
    }
    FV(a, b) {
      a = this.ty(a);
      var c = a.x,
        d = a.y;
      if (!(this.vm || b >= 5)) {
        a = new t(c, d);
        if (this.Fj[b].Nf(a) > 10)
          for (var e = 0, f = this.vj; e < f.length; ) {
            var g = f[e];
            ++e;
            g.LG == b && g.zq != 0 && (g.zq = 0);
          }
        this.hV.Sb(a);
        f = 0;
        for (g = this.fe; f < g.length; )
          if (((e = g[f]), ++f, e.Ys == b)) {
            b = new t(e.x, e.y);
            b.Nf(a) < e.gi / 10 && e.yp.Sb(a);
            c = t.La(e.yp, b);
            c = t.La(a, b).Ym() - c.Ym();
            c > Math.PI
              ? (c -= 2 * Math.PI)
              : c < -Math.PI && (c += 2 * Math.PI);
            e.ls.cb(c, e.x, e.y);
            e.ns.cb(c, e.x, e.y);
            e.rotation += c * wc;
            d = c > 0 ? x.FL : x.GL;
            Math.abs(c) < 0.07 && (d = -1);
            e.Xy != d && d != -1 && (x.play(d), (e.Xy = d));
            d = 0;
            for (f = this.Uc; d < f.length; ) {
              g = f[d];
              ++d;
              var h = new t(g.x, g.y);
              h.Nf(b) <= e.gi + 5 * this.ia &&
                (h.cb(c, e.x, e.y),
                (g.x = h.x),
                (g.y = h.y),
                g.mb != null && (g.mb.Sc.g.Sb(h), g.mb.Sc.Uh.Sb(h)));
            }
            d = 0;
            for (f = this.vj; d < f.length; )
              ((g = f[d]),
                ++d,
                (h = new t(g.x, g.y)),
                h.Nf(b) <= e.gi + 5 * this.ia &&
                  (h.cb(c, e.x, e.y),
                  (g.x = h.x),
                  (g.y = h.y),
                  (g.rotation += c * wc),
                  g.Qd()));
            d = 0;
            for (f = this.bubbles; d < f.length; )
              ((g = f[d]),
                ++d,
                (h = new t(g.x, g.y)),
                h.Nf(b) <= e.gi + 10 * this.ia &&
                  g != this.od &&
                  g != this.xc &&
                  g != this.Gc &&
                  (h.cb(c, e.x, e.y), (g.x = h.x), (g.y = h.y)));
            Y.Uk(
              this.Na.x,
              this.Na.y,
              e.x - e.size,
              e.y - e.size,
              2 * e.size,
              2 * e.size,
            ) &&
              ((b = new t(this.Na.x, this.Na.y)),
              b.cb(c, e.x, e.y),
              (this.Na.x = b.x),
              (this.Na.y = b.y));
            e.yp.Sb(a);
            return;
          }
        e = 0;
        for (f = this.Ij; e < f.length; ) if (f[e++].bT(c, d, b)) return;
        f = 0;
        for (g = this.Uc; f < g.length; )
          if (((e = g[f]), ++f, e != null)) {
            if (e.sg && e.Nn == b) {
              e.wQ(a);
              return;
            }
            if (e.$f > 0 && e.Wm == b) {
              e.Cx
                ? (e.y = Mb.kC(a.y, e.Um, e.Rm))
                : (e.x = Mb.kC(a.x, e.Um, e.Rm));
              e.mb != null &&
                ((a = e.mb.Sc), (a.g.x = a.Uh.x = e.x), (a.g.y = a.Uh.y = e.y));
              return;
            }
          }
        e = !1;
        this.vc.jz(c, d, b) && (e = !0);
        if (this.Hi[b]) {
          c = new t(0, 0);
          f = new Bh(t.ub(this.Fj[b], c), t.ub(a, c), 5, 5, eb.kW.cc());
          c = this.mk[b];
          d = 0;
          if (!e)
            for (c.push(f), e = 0; e < c.length; )
              ((f = c[e]), ++e, (d += this.Hc(f.start, f.end, !1)));
          this.Xk[b].Sb(this.Fj[b]);
          this.Fj[b].Sb(a);
        }
      }
    }
    nV() {
      this.Zh = new F(0, 0, 0, 1);
      this.ig = new F(0, 0, 0, 1);
      this.Vc = new F(0, 0, 0, 1);
      this.Rl = 0;
      var a = this.Eb.wl,
        b = this.Zh;
      b.x = (a.A + a.C) / 2;
      b.y = (a.F + a.H) / 2;
      if (this.we.x != 0 || this.we.y != 0) this.Rl = 1;
      this.we.x > 0
        ? ((b = this.ig),
          (b.x = (a.A + a.C) / 2 + (a.C - a.A)),
          (b.y = (a.F + a.H) / 2))
        : this.we.x < 0 &&
          ((b = this.ig),
          (b.x = (a.A + a.C) / 2 - (a.C - a.A)),
          (b.y = (a.F + a.H) / 2));
      if (this.we.y > 0) {
        b = this.ig;
        var c = this.Zh;
        b.x = c.x + 0;
        b.y = c.y + (a.H - a.F);
      } else
        this.we.y < 0 &&
          ((b = this.ig),
          (c = this.Zh),
          (b.x = c.x - 0),
          (b.y = c.y - (a.H - a.F)));
      this.Rl == 1 &&
        ((this.Et = -0.5),
        (this.vm = !0),
        (a = this.Eb.g),
        (b = this.Zh),
        (a.x = b.x),
        (a.y = b.y));
      this.Eb.update();
      this.Zs =
        this.Da != 2 ? this.rj(this.za) || this.rj(this.Ma) : this.rj(this.fa);
      if (this.gd)
        for (a = 0, b = this.zc; a < b.length; )
          if (this.rj(b[a++].constraint)) {
            this.Zs = !0;
            break;
          }
    }
    rj(a) {
      return !this.Eb.dR(a.g.x, a.g.y);
    }
    aG(a) {
      return z.language != a.locale;
    }
    Ts() {
      $a.toggle();
      this.Yi = $a.aR();
      x.play(this.Yi ? x.tL : x.uL);
    }
    jU(a) {
      let b = 0,
        c = this.Nd;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        d.JG == a && d.kU();
      }
    }
    XC(a, b, c) {
      let d = t.La(a.g, b.g).Ub();
      if (d < c)
        if (c - d < (1e3 / (a.ma.Ub() + b.ma.Ub())) * 2) {
          var e = Math.acos(
              t.Vq(a.g.x > b.g.x ? t.La(a.g, b.g) : t.La(b.g, a.g)).x,
            ),
            f = Math.abs(((c - d) / 2) * Math.cos(e));
          c = Math.abs(((c - d) / 2) * Math.sin(e));
          a.g.x <= b.g.x
            ? ((a.g.x -= f), (b.g.x += f))
            : ((b.g.x -= f), (a.g.x += f));
          a.g.y <= b.g.y
            ? ((a.g.y -= c), (b.g.y += c))
            : ((b.g.y -= c), (a.g.y += c));
        } else {
          var g = t.La(b.g, a.g),
            h = -g.y,
            l = g.x;
          f = (a.ma.x * g.x + a.ma.y * g.y) / c;
          e = (a.ma.x * h + a.ma.y * l) / c;
          h = (b.ma.x * h + a.ma.x * l) / c;
          l = f;
          f = (b.ma.x * g.x + a.ma.x * g.y) / c;
          let n = g.x / c;
          g = g.y / c;
          a.ma = new t(f * n - e * g, f * g + e * n);
          b.ma = new t(l * n - h * g, l * g + h * n);
          e = Math.acos(
            t.Vq(a.g.x > b.g.x ? t.La(a.g, b.g) : t.La(b.g, a.g)).x,
          );
          f = Math.abs(((c - d) / 2) * Math.cos(e));
          c = Math.abs(((c - d) / 2) * Math.sin(e));
          a.g.x <= b.g.x
            ? ((a.g.x -= f), (b.g.x += f))
            : ((b.g.x -= f), (a.g.x += f));
          a.g.y <= b.g.y
            ? ((a.g.y -= c), (b.g.y += c))
            : ((b.g.y -= c), (a.g.y += c));
          a.Gd = t.Uq(a.ma, 60);
          a.ja = t.La(a.g, a.Gd);
          b.Gd = t.Uq(b.ma, 60);
          b.ja = t.La(b.g, b.Gd);
        }
    }
    PG(a) {
      if (this.Md == a) {
        for (var b = (this.Md = 0), c = this.Eq; b < c.length; ) {
          var d = c[b];
          ++b;
          d != null && (d.Md == a ? d.show() : d.Kh());
        }
        b = 0;
        for (c = this.Dq; b < c.length; )
          ((d = c[b]), ++b, d != null && (d.Md == a ? d.show() : d.Kh()));
      }
    }
    update(a) {
      function b(y) {
        y.zi(new t(-y.ma.x / pj, -y.ma.y / pj + Zj), a);
      }
      function c(y, J, K) {
        let R = J.x;
        J = J.y;
        let L = y.Jb,
          O = y.ac,
          P = y.cd;
        y = y.xd;
        return Y.Fk(
          L.x + R,
          L.y + J,
          O.x + R,
          O.y + J,
          K.g.x - 16,
          K.g.y - 16,
          32,
          32,
        )
          ? !0
          : Y.Fk(
              P.x + R,
              P.y + J,
              y.x + R,
              y.y + J,
              K.g.x - 16,
              K.g.y - 16,
              32,
              32,
            );
      }
      function d(y, J) {
        return Y.Fk(
          y.Jb.x,
          y.Jb.y,
          y.ac.x,
          y.ac.y,
          J.g.x - 6,
          J.g.y - 6,
          12,
          12,
        )
          ? !0
          : Y.Fk(y.cd.x, y.cd.y, y.xd.x, y.xd.y, J.g.x - 6, J.g.y - 6, 12, 12);
      }
      super.update(a);
      let e = 0,
        f = this.zv;
      for (; e < f.length; ) f[e++].update(a);
      let g = this.gn;
      g != null && g.update(a);
      let h = 0;
      for (; h < 5; ) {
        let y = this.mk[h++],
          J = y.length,
          K = 0;
        for (; K < J; ) {
          let R = y[K],
            L = Ka.Ok(R.color.a, 0, 10, a);
          R.color.a = L.value;
          L.al ? (y.splice(K, 1), --J) : ++K;
        }
      }
      this.Ll == 0 && ((this.Dm += a), this.Dm > 30 && (this.Dm = 0));
      let l = this.Vg / this.Ug,
        n = this.system.window.hp(),
        q = n.w / n.J,
        r = l > 1 && q > 1 && q > l;
      switch (this.Rl) {
        case 1:
          this.Et += a * (this.hC ? 3 : 1);
          let y = 0;
          this.Et >= 0 && (y = Math.min(1, this.Et / 2));
          let J = za.GT()(y),
            K = this.Zh,
            R = this.ig,
            L = new F(K.x + (R.x - K.x) * J, K.y + (R.y - K.y) * J, 0, 1);
          r
            ? ((L = new F(this.Vg / 2, this.Ug / 2, 0, 1)),
              (y = 1),
              (this.Eb.Nb.x = 0.5),
              (this.Eb.Nb.y = 0.5))
            : (this.we.x > 0 && (this.Eb.Nb.x = J),
              this.we.x < 0 && (this.Eb.Nb.x = 1 - J),
              this.we.y > 0 && (this.Eb.Nb.y = J),
              this.we.y < 0 && (this.Eb.Nb.y = 1 - J));
          let O = this.Eb.g;
          O.x = L.x;
          O.y = L.y;
          if (y == 1) {
            this.hC = this.vm = !1;
            this.Rl = 2;
            this.Ni = 0;
            let I = this.Vc;
            I.x = this.ig.x;
            I.y = this.ig.y;
          }
          break;
        case 2:
          let P = this.Da != 2 ? this.za : this.fa;
          this.Ni += 0.05;
          this.Ni > 1 && (this.Ni = 1);
          if (r) {
            let I = this.Eb.Nb;
            I.x = 0.5;
            I.y = 0.5;
            let X = this.Eb.g;
            X.x = this.Vg / 2;
            X.y = this.Ug / 2;
          } else {
            if (this.we.x != 0) {
              let I = this.Eb.ZP(P.g.x, P.g.y);
              I < 100 ? (I = 100) : I > 300 && (I = 300);
              I <= 100 && (this.Ni = 1);
              this.Vc.x +=
                (P.g.x - this.Vc.x) * (Wa(I, 100, 300, 0.5, 0.1) * this.Ni);
              let X = Math.min(this.Zh.x, this.ig.x),
                sa = Math.max(this.Zh.x, this.ig.x);
              this.Vc.x < X && (this.Vc.x = X);
              this.Vc.x > sa && (this.Vc.x = sa);
              this.Eb.g.x = this.Vc.x;
              this.Eb.Nb.x = Wa(this.Vc.x, X, sa, 0, 1);
            }
            if (this.we.y != 0) {
              let I = this.Eb.YP(P.g.x, P.g.y);
              I <= 100 && (this.Ni = 1);
              I < 100 ? (I = 100) : I > 300 && (I = 300);
              this.Vc.y +=
                (P.g.y - this.Vc.y) * (Wa(I, 100, 300, 0.5, 0.1) * this.Ni);
              let X = Math.min(this.Zh.y, this.ig.y),
                sa = Math.max(this.Zh.y, this.ig.y);
              this.Vc.y < X && (this.Vc.y = X);
              this.Vc.y > sa && (this.Vc.y = sa);
              this.Eb.g.y = this.Vc.y;
              this.Eb.Nb.y = Wa(this.Vc.y, X, sa, 0, 1);
            }
          }
      }
      this.Eb.update();
      let u = this.Uc.length,
        v = this;
      if (u > 0) {
        let y = !1,
          J = !1,
          K = !1,
          R = 0,
          L = this.zc;
        for (; R < L.length; ) L[R++].vD = !0;
        let O = 0;
        for (; O < u; ) {
          let P = this.Uc[O++];
          if (P == null) continue;
          P.update(a);
          let I = P.mb;
          if (this.Ge.bj() && I != null && I.Hc == -1) this.bl(!0);
          else {
            P.rb != null &&
              I != null &&
              ((I.Sc.g.x = P.x), (I.Sc.g.y = P.y), I.Sc.Uh.Sb(I.Sc.g));
            if (I != null) {
              if (I.Hc != -1 && I.zh == 0) {
                P.Ov();
                continue;
              }
              I.update(a * this.sn);
              P.Me &&
                (this.Rl == 1 || this.vm || P.dW(a), P.nl == -1 && this.lV(P));
            }
            if (P.aa != -1 && P.mb == null) {
              let X = function (da, ka) {
                return new t(ka.x, ka.y).Nf(da.g) <= ka.aa + bb.ug
                  ? ((da = new je(
                      v.oa(6),
                      null,
                      ka.x,
                      ka.y,
                      da,
                      da.g.x,
                      da.g.y,
                      ka.aa + bb.ug,
                    )),
                    da.Sc.Uh.Sb(da.Sc.g),
                    (ka.lp = !0),
                    ka.SF(da),
                    x.play(x.DL),
                    ka.rb != null && x.play(x.pL),
                    !0)
                  : !1;
              };
              this.Da != 2
                ? (this.qd || (X(this.za, P) && this.qo()),
                  this.rd || P.mb != null || (X(this.Ma, P) && this.qo()))
                : X(this.fa, P) && this.qo();
              let sa = 0,
                Ia = this.zc;
              for (; sa < Ia.length; ) X(Ia[sa++].constraint, P);
            }
            if (I != null) {
              let X = I.Ca[I.Ca.length - 1],
                sa = !1;
              y ||
                (this.Da != 2
                  ? X != this.za || this.qd || J
                    ? X != this.Ma || this.rd || K || (sa = !0)
                    : (sa = !0)
                  : this.Bc || y || (sa = !0));
              if (I.Zx != 0 && I.Hc == -1 && sa) {
                let Ia = t.La(I.Sc.g, X.g).Ym() * wc;
                if (this.Da != 2) {
                  let da = X == this.za ? this.Qa : this.Ra;
                  I.Go || (I.Nh = da.rotation - Ia);
                  X == this.za
                    ? ((this.wp = Ia + I.Nh - da.rotation), (J = !0))
                    : ((this.xp = Ia + I.Nh - da.rotation), (K = !0));
                  this.K.rotation = Ia + I.Nh;
                  da.rotation = Ia + I.Nh;
                } else
                  (I.Go || (I.Nh = this.K.rotation - Ia),
                    (this.K.Pg = Ia + I.Nh - this.K.rotation),
                    (this.K.rotation = Ia + I.Nh),
                    (y = !0));
                I.Go = !0;
              } else I.Go = !1;
            }
          }
        }
        this.Da != 2
          ? (J ||
              this.qd ||
              ((this.Qa.rotation += Math.min(5, this.wp)), (this.wp *= 0.98)),
            K ||
              this.rd ||
              ((this.Ra.rotation += Math.min(5, this.xp)), (this.xp *= 0.98)))
          : y ||
            this.Bc ||
            ((this.K.rotation += Math.min(5, this.K.Pg)), (this.K.Pg *= 0.98));
      }
      let A = 0,
        D = this.zc;
      for (; A < D.length; ) {
        let y = D[A];
        ++A;
        y.vD || ((y.rotation += Math.min(5, y.Pg)), (y.Pg *= 0.98));
      }
      if (this.gd) {
        let y = 0,
          J = this.zc;
        for (; y < J.length; ) {
          let L = J[y];
          ++y;
          let O = L.constraint;
          if (!this.mf) {
            t.ud(O.g.x, O.g.y, this.Na.x, this.Na.y) < L.MD
              ? this.Na.zn(!0)
              : this.Na.zn(!1);
            let P = 0,
              I = this.eb;
            for (; P < I.length; ) {
              let X = I[P];
              ++P;
              X.zn(t.ud(O.g.x, O.g.y, X.x, X.y) < L.MD);
            }
          }
        }
        let K = 0,
          R = this.zc;
        for (; K < R.length; ) {
          let L = R[K];
          ++K;
          if (L.Pc != null) continue;
          let O = bb.ug * 2;
          this.Da == 2 &&
            (this.Bc || this.K.Pc != null || this.XC(L.constraint, this.fa, O));
          let P = 0,
            I = this.zc;
          for (; P < I.length; ) {
            let X = I[P];
            ++P;
            L != X && X.Pc == null && this.XC(L.constraint, X.constraint, O);
          }
        }
      }
      if (a > 0) {
        let y = a;
        for (; y >= 0; )
          ((y -= 0.01),
            this.vc.update(Math.min(0.01, y)),
            this.vc.Vl(this.bubbles),
            this.vc.Vl(this.eb),
            this.vc.Vl(this.bk),
            this.vc.Vl(this.hi),
            this.vc.Vl(this.Ij),
            this.vc.Vl(this.vj));
      }
      this.Bc ||
        (this.K.update(a),
        (this.Ii -= a),
        this.Ii <= 0 && (this.Ge.bj() || this.fa.update(a * this.sn)));
      if (this.Da != 2) {
        let y = a * this.sn;
        this.Ii -= a;
        this.Qa.update(a);
        this.Ii <= 0 && this.za.update(y);
        this.Ra.update(a);
        this.Ii <= 0 && this.Ma.update(y);
        if (this.Da == 1) {
          let J = 0;
          for (; J < 30; ) (++J, this.za.Bt(), this.Ma.Bt());
        }
        if (this.pj > 0) {
          let J = Ka.Ok(this.pj, 0, 200, a);
          this.pj = J.value;
          if (J.al) {
            x.play(x.rL);
            this.Da = 2;
            this.Bc = !1;
            this.rd = this.qd = !0;
            let K = !1,
              R = !1,
              L = 0,
              O = this.Uf;
            for (; L < O.length; ) {
              let ka = O[L];
              ++L;
              ka != null &&
                (this.Gc != null && ka.ea == this.Gc && (K = !0),
                this.xc != null && ka.ea == this.xc && (R = !0));
            }
            if (this.Gc != null && this.xc != null && K && R) this.$F = !0;
            else if (this.Gc == null || !K)
              if (this.xc == null || !R)
                if (this.Gc != null || this.xc != null) {
                  let ka = 0,
                    cb = this.Uf;
                  for (; ka < cb.length; ) {
                    let Bb = cb[ka];
                    ++ka;
                    Bb != null &&
                      (this.Gc != null &&
                        Bb.ea == this.Gc &&
                        ((Bb.Fg = !0), Bb.wj(1)),
                      this.xc != null &&
                        Bb.ea == this.xc &&
                        ((Bb.Fg = !0), Bb.wj(1)));
                  }
                }
            if (this.Gc != null || this.xc != null)
              ((this.od = this.Gc != null ? this.Gc : this.xc),
                this.dk.show(),
                this.ek.Kh(),
                this.fk.Kh());
            this.xp = this.wp = this.K.Pg = 0;
            this.fa.g.x = this.za.g.x;
            this.fa.g.y = this.za.g.y;
            this.K.x = this.fa.g.x;
            this.K.y = this.fa.g.y;
            let P = t.La(this.za.g, this.za.ja),
              I = t.La(this.Ma.g, this.Ma.ja),
              X = new t((P.x + I.x) / 2, (P.y + I.y) / 2);
            this.fa.ja.Sb(this.fa.g);
            this.fa.ja.$y(X);
            let sa = 0,
              Ia = this.Uc;
            for (; sa < Ia.length; ) {
              let ka = Ia[sa++].mb;
              if (
                ka != null &&
                ka.Hc != ka.Ca.length - 3 &&
                (ka.Pb == this.za || ka.Pb == this.Ma)
              ) {
                let cb = ka.Ca[ka.Ca.length - 2],
                  Bb = ka.Pb.Yh(cb);
                this.fa.Il(cb, Bb, 0);
                ka.Pb = this.fa;
                ka.Ca[ka.Ca.length - 1] = this.fa;
                ka.Nh = 0;
                ka.Go = !1;
              }
            }
            this.Qa.U.G();
            this.Ra.U.G();
            let da = new C(null, p.K, k.YI);
            this.oa(11).R(da.B);
            da.m(this.K.x);
            da.o(this.K.y);
            da.D();
            da.sa().IE(ak);
          } else (this.za.lr(this.Ma, this.pj), this.Ma.lr(this.za, this.pj));
        }
        this.qd ||
          this.rd ||
          this.Da != 0 ||
          (this.Hn(this.za, this.Qa),
          this.Hn(this.Ma, this.Ra),
          Fa.tp(this.Qa, this.Ra) &&
            ((this.Da = 1),
            (this.pj = this.za.g.Nf(this.Ma.g)),
            this.za.Il(this.Ma, this.pj, 1),
            this.Ma.Il(this.za, this.pj, 1)));
      }
      let B = 0,
        G = this.zc;
      for (; B < G.length; ) {
        let y = G[B];
        ++B;
        y.update(a);
        y.constraint.update(a * this.sn);
        let J = 0;
        for (; J < 30; ) (++J, y.constraint.Bt());
      }
      this.Na.update(a);
      this.js >= 0 && ((this.js -= a), this.js < 0 && !this.gd && this.Na.sT());
      this.ir >= 0 && ((this.ir -= a), this.ir < 0 && this.K.lT());
      if (!this.vm) {
        let y = 0,
          J = this.eb;
        for (; y < J.length; ) {
          let K = J[y];
          ++y;
          K.update(a);
          let R = [];
          this.Bc
            ? this.Da != 2 &&
              (this.Qa != null && R.push(this.Qa),
              this.Ra != null && R.push(this.Ra))
            : R.push(this.K);
          if (this.Bm && !this.Oh && !K.$Q) {
            let L = 0;
            for (; L < R.length; ) {
              let O = R[L];
              ++L;
              let P = O.x - K.x,
                I = O.y - K.y;
              Math.sqrt(P * P + I * I) < 95 &&
                ((K.rb =
                  K.rb != null ? xd.oD(O, K.rb.g) : xd.oD(O, new t(K.x, K.y))),
                (K.$Q = !0),
                x.play(x.xL));
            }
          }
          if (K.timeout > 0 && K.time == 0) {
            this.vc.remove(K);
            qa.remove(this.eb, K);
            let L = K.l;
            L.pb(0).Vb().alpha(0, 0.25);
            L.pb(1).Vb().scale(0, 0.25);
            L.pb(2).Vb().scale(0, 0.25, null, null, M(K, K.G));
            break;
          } else {
            let L = !1;
            this.Da != 2
              ? (this.Hn(this.za, this.Qa),
                this.Hn(this.Ma, this.Ra),
                (L =
                  (Fa.tp(this.Qa, K) && !this.qd) ||
                  (Fa.tp(this.Ra, K) && !this.rd)))
              : (this.Hn(this.fa, this.K), (L = Fa.tp(this.K, K) && !this.Bc));
            (this.gd && K.pe) || !this.gd || (L = !1);
            if (L) {
              this.K.JE();
              this.Vt++;
              this.ij.Ox(this.Vt);
              let O = new C(null, p.Sa, k.aK);
              O.m(K.x);
              O.o(K.y);
              O.I(0.4);
              O.sa().IE(bk);
              O.D();
              this.Bj.R(O.B);
              K.G();
              this.vc.remove(K);
              qa.remove(this.eb, K);
              x.play([1013, 1012, 1011][this.Vt - 1]);
              this.Na.WQ() && this.Na.KE();
              break;
            }
          }
        }
      }
      let E = 0,
        T = this.bubbles;
      for (; E < T.length; ) {
        let y = T[E];
        ++E;
        y.update(a);
        if (!y.et)
          if (this.Da != 2) {
            if (!this.qd && this.Vw(y, this.Qa, this.Gc, this.ek)) {
              this.Gc = y;
              break;
            }
            if (!this.rd && this.Vw(y, this.Ra, this.xc, this.fk)) {
              this.xc = y;
              break;
            }
          } else if (!this.Bc && this.Vw(y, this.K, this.od, this.dk)) {
            this.od = y;
            break;
          }
        let J = 0,
          K = this.zc;
        for (; J < K.length; ) {
          let R = K[J];
          ++J;
          if (!y.et && Y.Uk(R.x, R.y, y.x - 34, y.y - 34, 68, 68)) {
            let L = !1,
              O = 0,
              P = this.Uf;
            for (; O < P.length; ) {
              let I = P[O];
              ++O;
              I.ea == y && ((I.Fg = !1), (L = !0));
            }
            if (R.ea == null || !L) {
              if (R.ea != null) {
                this.hn(y.x, y.y);
                let I = 0,
                  X = this.Uf;
                for (; I < X.length; ) {
                  let sa = X[I];
                  ++I;
                  sa.ea == R.ea && ((sa.Fg = !0), sa.wj(1));
                }
                R.ea = null;
              }
              R.ea = y;
              R.Ao.show();
              x.play(x.wA);
              y.pop();
            }
          }
        }
        if (!y.fH) {
          let R = this.fe.length,
            L = 0;
          for (; L < R; ) {
            let O = this.fe[L++];
            t.ud(y.x, y.y, O.x, O.y) < O.gi && (y.fH = !0);
          }
        }
      }
      let S = 0,
        U = this.Eq;
      for (; S < U.length; ) U[S++].update(a);
      let Z = 0,
        ba = this.Dq;
      for (; Z < ba.length; ) ba[Z++].update(a);
      let ca = -1,
        W = 0,
        la = this.fe.length;
      for (; W < la; ) {
        let y = this.fe[W],
          J = 0;
        for (; J < u; ) {
          let L = this.Uc[J++],
            O = y.Dg.indexOf(L);
          t.ud(L.x, L.y, y.x, y.y) <= y.gi + 5 * this.ia
            ? O < 0 && y.Dg.push(L)
            : O >= 0 && qa.remove(y.Dg, L);
        }
        let K = this.bubbles.length,
          R = 0;
        for (; R < K; ) {
          let L = this.bubbles[R++],
            O = y.Dg.indexOf(L);
          t.ud(L.x, L.y, y.x, y.y) <= y.gi + 10 * this.ia
            ? O < 0 && y.Dg.push(L)
            : O >= 0 && qa.remove(y.Dg, L);
        }
        y.rW && (ca = W);
        y.update(a);
        ++W;
      }
      ca >= 0 && (this.fe[ca].G(), this.fe.splice(ca, 1));
      let pa = 0,
        ha = this.hi;
      for (; pa < ha.length; ) {
        let y = ha[pa];
        ++pa;
        y.update(a);
        let J = Ka.Ok(y.vs, 0, 1, a);
        y.vs = J.value;
        J.al && (y.state = 0);
        let K = y.rotation;
        y.rotation = 0;
        y.Qd();
        y.rotation = K;
        y.Qd();
        let R = function (I) {
            let X = Za.Al * 2;
            return Y.Fk(
              y.Jb.x,
              y.Jb.y,
              y.ac.x,
              y.ac.y,
              I.g.x - Za.Al,
              I.g.y - Za.Al,
              X,
              X,
            );
          },
          L = function (I) {
            let X = Za.Al * 2;
            return Y.Fk(
              y.cd.x,
              y.cd.y,
              y.xd.x,
              y.xd.y,
              I.g.x - Za.Al,
              I.g.y - Za.Al,
              X,
              X,
            );
          };
        if (y.state != 0) continue;
        if (this.Da == 2 && this.K.Pc == null) {
          let I = this.fa.Gd.cc();
          I.rotate(-K * Oa);
          if (I.y >= 0 && (R(this.fa) || L(this.fa))) {
            let X = 0,
              sa = this.hi.length;
            for (; X < sa; ) {
              let Ia = this.hi[X++];
              if (Ia != y && Ia.group == y.group) {
                Ia.state = 1;
                Ia.vs = 0.8;
                this.bl(!1);
                this.K.qy = 0.9 * this.fa.ma.Ub() * xa.pA;
                this.K.Pc = Ia;
                y.yc.M(!0);
                y.yc.sa().play(Eh);
                x.play(x.zA);
                let da = this,
                  ka = this.K;
                this.delay(function () {
                  da.zG(ka);
                }, 0.1);
                break;
              }
            }
          }
        }
        let O = 0,
          P = this.zc;
        for (; O < P.length; ) {
          let I = P[O];
          ++O;
          if (I.Pc != null) continue;
          let X = I.constraint.Gd.cc();
          X.rotate(-K * Oa);
          if ((X.y >= 0 && R(I.constraint)) || L(I.constraint)) {
            let sa = 0,
              Ia = this.hi.length;
            for (; sa < Ia; ) {
              let da = this.hi[sa++];
              if (da != y && da.group == y.group) {
                da.state = 1;
                da.vs = 0.8;
                this.TT(I);
                I.qy = 0.9 * I.constraint.ma.Ub();
                I.Pc = da;
                y.yc.M(!0);
                y.yc.sa().play(Eh);
                x.play(x.zA);
                let ka = this,
                  cb = I;
                this.delay(function () {
                  ka.zG(cb);
                }, 0.1);
                break;
              }
            }
          }
        }
      }
      let aa = 0,
        wa = this.Uf;
      for (; aa < wa.length; ) wa[aa++].update(a);
      let Ea = 0,
        ya = this.vj;
      for (; Ea < ya.length; ) {
        let y = ya[Ea];
        ++Ea;
        y.update(a);
        let J = Ka.Ok(y.zq, 0, 1, a);
        y.zq = J.value;
        J.al && this.eT(y, a);
      }
      let Ja = 0,
        Wb = this.Ij;
      for (; Ja < Wb.length; ) {
        let y = Wb[Ja];
        ++Ja;
        y != null && (y.update(a), y.Xe != 3 && this.fT(y, a));
      }
      let tb = 0,
        ic = this.Em;
      for (; tb < ic.length; ) {
        let y = ic[tb];
        ++tb;
        if (
          y != null &&
          (y.update(a),
          !this.Oh &&
            y.Dk == 0 &&
            t.ud(this.fa.g.x, this.fa.g.y, y.x, y.y) < 32)
        ) {
          this.Oh = !0;
          this.K.Ce = !1;
          this.K.l.Vb().scale(0.3, 0.1);
          this.K.l.Vb().alpha(0, 0.1);
          this.K.l.Vb().iH(y.x, y.y);
          this.bl(!1);
          this.od != null && this.Wk(this.od, !1);
          let J = this.fa,
            K = y;
          this.delay(function () {
            K.HB(J);
          }, 0.05);
          this.PG(3);
        }
      }
      let pe = 0,
        qj = this.Nd;
      for (; pe < qj.length; ) qj[pe++].update(a);
      if (this.mf && !this.Oh) {
        let y = 0,
          J = this.Nd;
        for (; y < J.length; ) {
          let K = J[y];
          ++y;
          let R = !1;
          if (!K.me || K.fm)
            (this.Da != 2
              ? ((R = !this.qd && d(K, this.za)) &&
                  this.Lw(K, this.Qa.constraint, a),
                (R = !this.rd && d(K, this.Ma)) &&
                  this.Lw(K, this.Ra.constraint, a))
              : (R = !this.Bc && d(K, this.fa)) &&
                this.Lw(K, this.K.constraint, a),
              R || (K.jl = !1));
        }
      } else if (!this.Oh) {
        let y = 0,
          J = this.Nd;
        for (; y < J.length; ) {
          let K = J[y];
          ++y;
          if (!K.me || K.fm) {
            let R = !1,
              L = !1;
            this.Da != 2
              ? (R = !this.qd && d(K, this.za))
                ? (L = !0)
                : (R = !this.rd && d(K, this.Ma))
              : (R = !this.Bc && d(K, this.fa));
            if (R) {
              this.Da != 2
                ? L
                  ? this.Gc != null && this.Wk(this.Gc, !0)
                  : this.xc != null && this.Wk(this.xc, !1)
                : this.od != null && this.Wk(this.od, !1);
              let O = new Kf(this, 5);
              this.zv.push(O);
              this.$d == null || this.Yi || ((O.Nb.y = -500), (O.angle = 90));
              this.Da != 2
                ? L
                  ? ((O.x = this.Qa.x), (O.y = this.Qa.y), (this.qd = !0))
                  : ((O.x = this.Ra.x), (O.y = this.Ra.y), (this.rd = !0))
                : ((O.x = this.K.x),
                  (O.y = this.K.y),
                  (this.Bc = !0),
                  this.K.G());
              O.Fn(5);
              x.play(x.qL);
              this.bl(L);
              if (this.qn) return;
              this.delay(M(this, this.Rr), 0.3);
              return;
            }
          }
        }
      }
      let Ci = 0,
        rj = this.bk;
      for (; Ci < rj.length; ) {
        let y = rj[Ci];
        ++Ci;
        y.update(a);
        let J = t.La(new t(y.x, y.y), y.ht),
          K = J.Ub(),
          R = 1,
          L = new t(0, 0);
        K >= 1 && ((R = K | 0), (L = t.Uq(J, R)));
        let O = new t(0, 0),
          P = !1,
          I = !1;
        if (this.Da != 2) {
          P = !1;
          let da = 0,
            ka = R;
          for (; da < ka; ) {
            let cb = t.Rb(L, da++);
            if ((P = P || c(y, cb, this.za))) {
              O = cb.cc();
              break;
            }
          }
          if ((P = P && !this.qd)) I = !0;
          else {
            P = !1;
            let cb = 0,
              Bb = R;
            for (; cb < Bb; ) {
              let sj = t.Rb(L, cb++);
              if ((P = P || c(y, sj, this.Ma))) {
                O = sj.cc();
                break;
              }
            }
            P = P && !this.rd;
          }
        } else {
          P = !1;
          let da = 0,
            ka = R;
          for (; da < ka; ) {
            let cb = t.Rb(L, da++);
            (P = P || c(y, cb, this.fa)) && (O = cb.cc());
          }
          P = P && !this.Bc;
        }
        let X = function (da) {
          da.g.x += J.x - O.x;
          da.g.y += J.y - O.y;
          da.ja.x += J.x - O.x;
          da.ja.y += J.y - O.y;
        };
        P
          ? this.Da != 2
            ? I
              ? (X(this.za), this.os(y, this.za, a))
              : (X(this.Ma), this.os(y, this.Ma, a))
            : (X(this.fa), this.os(y, this.fa, a))
          : (y.jl = !1);
        P = !1;
        let sa = 0,
          Ia = this.zc;
        for (; sa < Ia.length; ) {
          let da = Ia[sa];
          ++sa;
          P = !1;
          let ka = 0,
            cb = R;
          for (; ka < cb; ) {
            let Bb = ka++;
            P = P || c(y, t.Rb(L, Bb), da.constraint);
          }
          P ? (X(da.constraint), this.os(y, da.constraint, a)) : (y.jl = !1);
        }
        y.MB();
      }
      this.Ge.update(a);
      !this.Ge.bj() &&
        this.Ge.wv(this.fa) &&
        (this.Ge.Bv(this.fa), this.bl(!0), (this.K.Pg = 0), this.PG(4));
      this.Rc.update(a);
      if (!this.Ag && this.K.Pc == null && this.mf)
        if (this.Da != 2) {
          if (!this.qd) {
            let y = this.Qa.constraint.g.x - this.Rc.x,
              J = this.Qa.constraint.g.y - this.Rc.y;
            Math.sqrt(y * y + J * J) <= 2 * bb.ug &&
              (this.Rc.Gv(), this.ij.Lx(), (this.Ag = !0));
          }
          if (!this.rd) {
            let y = this.Ra.constraint.g.x - this.Rc.x,
              J = this.Ra.constraint.g.y - this.Rc.y;
            Math.sqrt(y * y + J * J) <= 2 * bb.ug &&
              (this.Rc.Gv(), (this.Ag = !0), this.ij.Lx());
          }
        } else {
          let y = this.K.constraint.g.x - this.Rc.x,
            J = this.K.constraint.g.y - this.Rc.y;
          Math.sqrt(y * y + J * J) <= 2 * bb.ug &&
            (this.Rc.Gv(), this.ij.Lx(), (this.Ag = !0));
        }
      let Zj = lb.rH * (this.$d == null || this.Yi ? 1 : -1),
        pj = lb.qH;
      this.Da == 0 &&
        (this.Gc != null && b(this.za), this.xc != null && b(this.Ma));
      if (this.Da == 1) {
        if (this.Gc != null || this.xc != null) (b(this.za), b(this.Ma));
      } else this.od == null || this.Ge.bj() || b(this.fa);
      let Di = 0,
        tj = this.zc;
      for (; Di < tj.length; ) {
        let y = tj[Di];
        ++Di;
        y.ea != null && b(y.constraint);
      }
      let Jh;
      if (!this.Bc && !this.Ps) {
        if (this.Bx)
          this.Pp > 0 &&
            ((this.Pp = Ka.Nk(this.Pp, 0, 1, a)),
            this.Pp <= 0 &&
              ((Jh = new t(this.Na.x, this.Na.y)),
              this.fa.g.Nf(Jh) > fc.eA
                ? ((this.Bx = !1), this.Na.vT(), x.play(x.yL))
                : (this.Pp = 1)));
        else {
          let y = !0;
          this.Oh ? (y = !1) : this.gd && !this.Na.pe && (y = !1);
          y &&
            ((Jh = new t(this.Na.x, this.Na.y)),
            this.fa.g.Nf(Jh) < fc.eA &&
              ((this.Bx = !0), this.Na.wT(), x.play(x.zL), (this.Pp = 1)));
        }
        if (
          !this.qn &&
          !this.GB &&
          (!this.gd || (this.gd && this.Na.pe)) &&
          this.dP(this.K, this.od, this.Na, this.fa)
        ) {
          this.Bc = this.GB = !0;
          this.Ri();
          return;
        }
      }
      if (this.mf) {
        this.Da != 2
          ? (this.Kw(this.Qa.constraint), this.Kw(this.Ra.constraint))
          : this.Kw(this.K.constraint);
        this.po += a;
        if (
          this.Hi[0] &&
          (this.yg.isActive || (this.Na.pT(), this.yg.GF(!0)), this.po > 0.3)
        ) {
          let y = new t(this.Xk[0].x, this.Xk[0].y),
            J;
          J = this.po < 0.15 ? ((this.po - 0.3) / 0.15) * 70 : 70;
          let K = this.yg.uj.x,
            R = this.yg.uj.y,
            L,
            O;
          if (this.Da == 2) {
            L = K - this.K.constraint.g.x;
            O = R - this.K.constraint.g.y;
            let P = Math.sqrt(L * L + O * O),
              I = t.La(this.K.constraint.g, y);
            I.normalize();
            P <= 200 &&
              ((J *= 1 - 0.005 * P), this.K.constraint.zi(t.Rb(I, J), a));
          } else {
            L = K - this.Qa.constraint.g.x;
            O = R - this.Qa.constraint.g.y;
            let P = Math.sqrt(L * L + O * O);
            L = K - this.Ra.constraint.g.x;
            O = R - this.Ra.constraint.g.y;
            let I = Math.sqrt(L * L + O * O),
              X = t.La(this.Qa.constraint.g, y);
            X.normalize();
            let sa = t.La(this.Ra.constraint.g, y);
            sa.normalize();
            P <= 200 && this.Qa.constraint.zi(t.Rb(X, J * (1 - 0.005 * P)), a);
            I <= 200 && this.Ra.constraint.zi(t.Rb(sa, J * (1 - 0.005 * I)), a);
          }
        }
        if (this.Hi[0])
          if (this.Da == 2) {
            let y = t.La(this.K.constraint.g, this.K.constraint.ja);
            y.Ub() > 3 &&
              (y.normalize(),
              (this.K.constraint.g = t.ub(this.K.constraint.ja, t.Rb(y, 3))));
          } else {
            let y = t.La(this.Qa.constraint.g, this.Qa.constraint.ja);
            y.Ub() > 3 &&
              (y.normalize(),
              (this.Qa.constraint.g = t.ub(this.Qa.constraint.ja, t.Rb(y, 3))));
            let J = t.La(this.Ra.constraint.g, this.Ra.constraint.ja);
            J.Ub() > 3 &&
              (J.normalize(),
              (this.Ra.constraint.g = t.ub(this.Ra.constraint.ja, t.Rb(J, 3))));
          }
      }
      let Ei = this.Da == 2 && this.rj(this.fa) && !this.Bc,
        Fi = this.Da != 2 && !this.qd && this.rj(this.za),
        Kh = this.Da != 2 && !this.rd && this.rj(this.Ma),
        dg = this.gd,
        Gi = [];
      this.mf && (dg = !1);
      if (!this.Ps) {
        let y = 0,
          J = this.zc;
        for (; y < J.length; ) {
          let K = J[y];
          ++y;
          if (!this.rj(K.constraint)) {
            dg = !1;
            break;
          }
          this.mf && Gi.push(K);
        }
      }
      let uj = 0;
      for (; uj < Gi.length; ) qa.remove(this.zc, Gi[uj++]);
      !this.Zs || Ei || Fi || Kh || dg || (this.Zs = !1);
      w.box == 13 && w.level == 22 && (Kh = !1);
      if (this.gw) ((this.gw = !1), this.Rr());
      else {
        if (this.Rl != 1 && !this.Zs && (Ei || Fi || Kh || dg)) {
          let y = !1;
          if (
            (this.Da == 2 && this.Bc) ||
            (this.Da != 2 && (this.qd || this.rd)) ||
            this.Ps
          )
            y = !0;
          Ei && (this.Bc = !0);
          Fi && (this.qd = !0);
          Kh && (this.rd = !0);
          dg && (this.Ps = !0);
          this.qn || y || this.Rr();
        }
        if (
          this.Md == 1 &&
          !this.Bc &&
          this.od != null &&
          this.K.y < xa.tH &&
          this.K.x > xa.sH
        ) {
          let y = (this.Md = 0),
            J = this.Eq;
          for (; y < J.length; ) {
            let L = J[y];
            ++y;
            L.Md == 1 && L.show();
          }
          let K = 0,
            R = this.Dq;
          for (; K < R.length; ) {
            let L = R[K];
            ++K;
            L.Md == 1 && L.show();
          }
        }
        this.nv.update();
        this.Bj.ki(a);
        this.Yf != null && this.Yf.update(a);
        this.yg != null &&
          (this.Hi[0] && (this.yg.uj = new t(this.Xk[0].x, this.Xk[0].y)),
          this.yg.update(a),
          this.Ud.update(a),
          this.wo.update(a));
      }
    }
    jd() {
      for (var a = 0, b = this.zv; a < b.length; ) b[a++].O();
      a = this.gn;
      a != null && a.O();
      this.Na.O();
      a = 0;
      for (b = this.fe; a < b.length; ) b[a++].O();
      a = 0;
      for (b = this.bubbles; a < b.length; ) b[a++].O();
      a = 0;
      for (b = this.vj; a < b.length; ) b[a++].O();
      a = 0;
      for (b = this.Nd; a < b.length; ) b[a++].O();
      a = 0;
      for (b = this.bk; a < b.length; ) b[a++].O();
      a = 0;
      for (b = this.hi; a < b.length; ) b[a++].O();
      a = 0;
      for (b = this.Uc; a < b.length; ) b[a++].LO();
      a = 0;
      for (b = this.Uc; a < b.length; ) b[a++].O();
      a = 0;
      for (b = this.eb; a < b.length; ) b[a++].O();
      a = 0;
      for (b = this.Uf; a < b.length; ) b[a++].O();
      a = 0;
      for (b = this.Ij; a < b.length; ) b[a++].O();
      a = 0;
      for (b = this.Em; a < b.length; ) b[a++].O();
      for (a = this.vc.iterator(); a.ib(); ) a.next().O();
      this.Rc.O();
      this.mf && (this.yg.O(), this.Ud.O(), this.wo.O());
      this.Ge.O();
      this.Bc ||
        (this.K.Pc == null
          ? ((this.K.x = this.fa.g.x),
            (this.K.y = this.fa.g.y),
            (this.K.visible = !0))
          : (this.K.visible = !1),
        this.Bm &&
          !this.Oh &&
          this.Yf != null &&
          ((this.Yf.x = this.K.x), (this.Yf.y = this.K.y), this.Yf.O()));
      this.dk != null && (this.dk.m(this.K.x), this.dk.o(this.K.y));
      this.Da != 2
        ? (this.qd
            ? this.Qa.U.M(!1)
            : ((this.Qa.x = this.za.g.x),
              (this.Qa.y = this.za.g.y),
              this.Qa.O()),
          this.ek != null && (this.ek.m(this.Qa.x), this.ek.o(this.Qa.y)),
          this.rd
            ? this.Ra.U.M(!1)
            : ((this.Ra.x = this.Ma.g.x),
              (this.Ra.y = this.Ma.g.y),
              this.Ra.O()),
          this.fk != null && (this.fk.m(this.Ra.x), this.fk.o(this.Ra.y)),
          (this.K.visible = !1))
        : this.K.Pc == null && (this.K.visible = !0);
      this.K.O();
      a = 0;
      for (b = this.zc; a < b.length; ) b[a++].O();
      a = 0;
      for (b = this.Eq; a < b.length; ) b[a++].O();
      a = 0;
      for (b = this.Dq; a < b.length; ) b[a++].O();
      this.Bj.Pd();
      this.Bj.Kn();
      this.system.W.MT(this.Eb.Db);
      this.system.W.zr(this.Bj);
      this.system.W.FT();
    }
  }
  xa.i = !0;
  xa.u = ma;
  Object.assign(xa.prototype, { j: xa });
  class eg {
    constructor() {
      this.loaded = this.uD = !1;
      this.size = new Na(0, 0);
      this.name = this.data = null;
    }
  }
  eg.i = !0;
  Object.assign(eg.prototype, { j: eg });
  class fg {
    constructor() {
      this.size = new Na(0, 0);
      this.W = null;
    }
    RF(a) {
      this.W = a;
    }
    vU(a, b) {
      let c = this.size;
      c.x = a;
      c.y = b;
    }
  }
  fg.i = !0;
  Object.assign(fg.prototype, { j: fg });
  class qe extends fg {
    constructor() {
      super();
      this.Qc = new Na(0, 0);
      this.Tb = new Rc();
      this.visible = !0;
      this.ky = this.fullscreen = !1;
    }
    bg(a, b) {
      return this.Tb.bg(a, b);
    }
    hp() {
      let a = this.W.viewport,
        b = this.Qc.x,
        c = this.Qc.y;
      return new Nb((a.x * b) | 0, (a.y * c) | 0, (a.w * b) | 0, (a.J * c) | 0);
    }
    Xi() {
      let a = this.W.viewport;
      return new Na((this.Qc.x * a.w) | 0, (this.Qc.y * a.J) | 0);
    }
  }
  qe.i = !0;
  qe.u = fg;
  Object.assign(qe.prototype, { j: qe });
  class yd {
    constructor(a) {
      this.name = a;
      this.info = new Lh(this);
      this.Mf = null;
      this.lS = 256;
      this.oR = 0.001;
      this.Db = this.$b = null;
      this.EB = [];
      this.clearColor = new F(0, 0, 0, 1);
      this.SB = new gb(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      this.rO = new gb(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      this.viewport = new Nb(0, 0, 1, 1);
      this.Br = Array(1056);
      this.dm = Array(1056);
      this.iW = !0;
      this.tt = Array(7);
      this.Bh = Array(7);
      this.mo = Hi.pI[7];
      this.vd = 0;
      this.dz = [];
      this.wz = new xb();
      this.Bh[0] = new re(1, !0);
      this.Bh[1] = new Sc();
      this.Bh[2] = new zc();
      this.Bh[3] = new gg(!0, !0);
      this.Bh[4] = new hg(!1, 1);
      this.Bh[5] = new pc(1);
      this.Bh[6] = new ig();
    }
    oq(a) {
      this.$b != null && this.$b.RF(null);
      this.$b = a;
      this.$b.RF(this);
    }
    wU(a) {
      let b = this.clearColor;
      b.x = a.x;
      b.y = a.y;
      b.z = a.z;
      b.w = a.w;
    }
    el(a) {
      this.Db = a;
    }
    MT(a) {
      this.EB.push(this.Db);
      this.el(a);
    }
    FT() {
      this.el(this.EB.pop());
    }
    pn() {
      this.il(0, 0, 1, 1);
    }
    il(a, b, c, d) {
      let e = this.viewport;
      e.x = a;
      e.y = b;
      e.w = c - a;
      e.J = d - b;
    }
    kj() {
      if (
        this.$b == null ||
        this.$b.getContext() == null ||
        this.$b.size.x * this.$b.size.y == 0
      )
        return !1;
      this.dU();
      return !0;
    }
    Ki() {}
    zr(a) {
      let b = this.wz;
      b.clear();
      b.gg(Qa.count);
      La.PP(a, b);
      b.da > 0 && this.Sv(b);
    }
    clear() {}
    dU() {
      this.vd = 0;
      let a = this.mo,
        b = 0;
      for (; b < 7; ) {
        let c = b++;
        this.tt[c] = this.Bh[c];
        (a & (1 << c)) != 0 && this.tt[c].set(this);
      }
    }
    Sv(a) {
      let b = a.P,
        c = 0;
      for (a = a.da; c < a; ) this.bm(b[c++]);
    }
    bm(a) {
      let b = a.effect;
      b != null &&
        b.enabled &&
        a.ef != 1 &&
        ((this.Mf = a), this.$h(a), this.To(b));
    }
    kQ() {
      return this.dz.slice();
    }
    createTexture(a, b, c, d) {
      b == null && (b = 0);
      b = this.Qw(b);
      this.dz.push(b);
      b.name = d;
      b.Dy(a);
      c != null && b.sU(c);
      return b;
    }
    QB(a, b, c) {
      let d = this.Qw(a.flags);
      d.name = c == null ? "-" : c;
      a.ra(d, b.clone());
      c != null && ((a = a.nc.Qf(c)), d.nc.offset(a.Wd.x, a.Wd.y));
    }
    ka(a) {
      a.G();
      qa.remove(this.dz, a);
    }
    CC(a, b) {
      a = ((b / 100) | 0) * 32 + ((a / 100) | 0);
      b = this.Br[a];
      b == null || this.dm[a] || ((this.dm[a] = !0), b.init(this));
      return b;
    }
    DC(a, b) {
      a = 512 + ((b / 100) | 0) * 32 + ((a / 100) | 0);
      b = this.Br[a];
      b == null || this.dm[a] || ((this.dm[a] = !0), b.init(this));
      return b;
    }
    sd(a) {
      var b;
      b == null && (b = !1);
      let c = (a.eC / 100) | 0;
      var d = (a.xz / 100) | 0;
      d = (b ? 1 : 0) * 32 * 16 + d * 32 + c;
      this.Br[d] = a;
      let e = a.xz == 201;
      if (e) {
        let f = 0;
        for (; f < 16; )
          ((d = f++ + 1),
            (d = (b ? 1 : 0) * 32 * 16 + d * 32 + c),
            (this.Br[d] = a));
      }
      if (this.iW && (a.init(this), (this.dm[d] = !0), e))
        for (a = 0; a < 16; )
          ((d = a++ + 1),
            (d = (b ? 1 : 0) * 32 * 16 + d * 32 + c),
            (this.dm[d] = !0));
    }
    GO() {
      this.mo &= -9;
    }
    fp(a) {
      let b = this.SB,
        c = this.Db.Yk;
      (a.L & 240) > 0 && a.ku();
      var d = a.lf;
      a = d.m11;
      var e = d.m12,
        f = d.m13,
        g = d.m14;
      let h = d.m21,
        l = d.m22,
        n = d.m23,
        q = d.m24,
        r = d.m31,
        u = d.m32,
        v = d.m33,
        A = d.m34,
        D = d.m41,
        B = d.m42,
        G = d.m43,
        E = d.m44;
      d = c.m11 * e + c.m12 * l + c.m13 * u + c.m14 * B;
      let T = c.m11 * f + c.m12 * n + c.m13 * v + c.m14 * G,
        S = c.m11 * g + c.m12 * q + c.m13 * A + c.m14 * E,
        U = c.m21 * e + c.m22 * l + c.m23 * u + c.m24 * B,
        Z = c.m21 * f + c.m22 * n + c.m23 * v + c.m24 * G,
        ba = c.m21 * g + c.m22 * q + c.m23 * A + c.m24 * E,
        ca = c.m31 * e + c.m32 * l + c.m33 * u + c.m34 * B,
        W = c.m31 * f + c.m32 * n + c.m33 * v + c.m34 * G,
        la = c.m31 * g + c.m32 * q + c.m33 * A + c.m34 * E;
      e = c.m41 * e + c.m42 * l + c.m43 * u + c.m44 * B;
      f = c.m41 * f + c.m42 * n + c.m43 * v + c.m44 * G;
      g = c.m41 * g + c.m42 * q + c.m43 * A + c.m44 * E;
      b.m11 = c.m11 * a + c.m12 * h + c.m13 * r + c.m14 * D;
      b.m12 = d;
      b.m13 = T;
      b.m14 = S;
      b.m21 = c.m21 * a + c.m22 * h + c.m23 * r + c.m24 * D;
      b.m22 = U;
      b.m23 = Z;
      b.m24 = ba;
      b.m31 = c.m31 * a + c.m32 * h + c.m33 * r + c.m34 * D;
      b.m32 = ca;
      b.m33 = W;
      b.m34 = la;
      b.m41 = c.m41 * a + c.m42 * h + c.m43 * r + c.m44 * D;
      b.m42 = e;
      b.m43 = f;
      b.m44 = g;
      return b;
    }
    Wi(a) {
      (a.L & 64) > 0 && a.Jn();
      var b = a.lf;
      a = b.m11;
      var c = b.m12,
        d = b.m14;
      let e = b.m21,
        f = b.m22,
        g = b.m24;
      b = new gb(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      let h = this.Db.Yk,
        l = h.m11 * c + h.m12 * f,
        n = h.m11 * d + h.m12 * g + h.m14;
      c = h.m21 * c + h.m22 * f;
      d = h.m21 * d + h.m22 * g + h.m24;
      b.m11 = h.m11 * a + h.m12 * e;
      b.m12 = l;
      b.m14 = n;
      b.m21 = h.m21 * a + h.m22 * e;
      b.m22 = c;
      b.m24 = d;
      return b;
    }
    To(a) {
      a.update(this);
      let b = this.CC(a.type, this.Mf.type);
      b != null &&
        ((this.info.effect = a), (this.info.xa = this.Mf), b.O(this.info));
    }
    Ti(a) {
      return this.tt[a];
    }
    $h(a) {
      if (this.mo != 0) {
        for (var b = this.tt, c = 0, d = this.mo, e = this.vd; c < 7; ) {
          if ((d & (1 << c)) == 0) {
            ++c;
            continue;
          }
          let f = a.ql[c];
          f != null
            ? f.gb != b[c].gb && ((b[c] = f), (e |= 1 << c), f.set(this))
            : (e & (1 << c)) > 0 &&
              ((f = this.Bh[c]), (b[c] = f), f.set(this), (e &= ~(1 << c)));
          ++c;
        }
        this.vd = e;
      }
    }
    Jy() {}
    DF() {}
    CF() {}
    vy() {}
    yy() {}
    Hy() {}
    PC(a) {
      return -0.001 * a.Gb.translate.z;
    }
  }
  yd.i = !0;
  Object.assign(yd.prototype, { j: yd });
  class Lh {
    constructor(a) {
      this.W = a;
      this.pB = this.xa = this.effect = null;
    }
  }
  Lh.i = !0;
  Object.assign(Lh.prototype, { j: Lh });
  class zd {
    constructor(a, b) {
      this.de = 0;
      this.vf = 1;
      this.children = [];
      this.parent = null;
      this.name = "?";
      this.size = new Na(0, 0);
      this.image = this.nc = null;
      this.id = zd.zS++;
      this.W = a;
      this.flags = b;
    }
    cs() {
      return this.image != null ? this.image.loaded : !1;
    }
    G() {
      if (this.W != null) {
        var a = this.nc;
        a != null && a.G();
        a = 0;
        for (var b = this.children; a < b.length; ) b[a++].G();
        this.W = this.parent = this.nc = this.image = this.children = null;
      }
    }
    Dy(a) {
      this.image != null && (this.image.mz(), this.de++);
      this.image = a;
      var b = this.size;
      a = a.size;
      b.x = a.x;
      b.y = a.y;
      b = 0;
      for (a = this.children; b < a.length; ) {
        let c = a[b];
        ++b;
        c.image = this.image;
        let d = c.size,
          e = this.size;
        d.x = e.x;
        d.y = e.y;
        c.de = this.de;
      }
    }
    sU(a) {
      this.nc = a;
      this.vf = 1 / a.scale;
    }
    ra(a, b) {
      a.parent = this;
      this.children.push(a);
      a.nc = b;
      a.image = this.image;
      b = a.size;
      let c = this.size;
      b.x = c.x;
      b.y = c.y;
      a.de = this.de;
      a.vf = this.vf;
    }
  }
  zd.i = !0;
  Object.assign(zd.prototype, { j: zd });
  class oc {
    constructor(a, b, c) {
      b == null && (b = 1);
      this.iw = new lc();
      this.frames = a.slice();
      this.scale = b;
      this.Fq = c;
      b = [];
      for (c = 0; c < a.length; ) b.push(a[c++].id);
      b.sort(function (d, e) {
        return d - e;
      });
      b = b[b.length - 1];
      this.jm = Array(b);
      for (c = 0; c < b; ) this.jm[c++] = null;
      for (b = 0; b < a.length; )
        ((c = a[b]), ++b, (this.jm[c.id] = c), (this.iw.J[c.name] = c));
    }
    G() {
      this.Fq = this.frames = this.iw = this.jm = null;
    }
    QP(a) {
      return this.jm[a];
    }
    Qf(a) {
      return this.iw.J[a];
    }
    offset(a, b) {
      let c = 0,
        d = this.frames;
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        e.Wd.x += a;
        e.Wd.y += b;
      }
    }
    clone() {
      let a = [],
        b = 0,
        c = this.frames;
      for (; b < c.length; ) a.push(c[b++].clone());
      return new oc(a, this.scale, this.Fq);
    }
  }
  oc.i = !0;
  Object.assign(oc.prototype, { j: oc });
  class se {
    constructor(a, b, c, d, e, f) {
      this.id = a;
      this.name = b;
      this.lc = c;
      this.Wd = d;
      this.Bq = e;
      this.ju = f;
    }
    clone() {
      let a = this.lc,
        b = this.Wd;
      if (this.ju != null) {
        var c = this.ju;
        c = new Na(c.x, c.y);
      } else c = null;
      return new se(
        this.id,
        this.name,
        new Na(a.x, a.y),
        new Nb(b.x, b.y, b.w, b.J),
        this.Bq,
        c,
      );
    }
  }
  se.i = !0;
  Object.assign(se.prototype, { j: se });
  class Ad {}
  Ad.i = !0;
  Ad.bf = !0;
  class mb {
    constructor() {
      this.Vu = !1;
      this.object = null;
      this.DD = !1;
      this.fB = !0;
      this.$l = !1;
      this.Fd = 0;
      this.fz = 1;
      this.ve = this.Wg = this.Cc = 0;
      this.Xh = 1;
      this.next = null;
      this.type = this.Ba();
      mb.Qz++;
    }
    An(a) {
      this.Vu = a;
    }
    G() {
      this.object != null && (this.object.detach(this), (this.object = null));
      this.fB = !1;
      mb.Qz--;
    }
    uq() {
      this.DD || (this.An(!1), (this.$l = !0), (this.Fd = 0));
    }
    update(a) {
      return this.Vu
        ? ((this.Fd += a * this.fz),
          this.object == null ? !1 : this.bn(this.Fd))
        : this.$l
          ? ((this.Fd += a), this.Fd > mb.QH && this.G(), !0)
          : !1;
    }
    qw() {
      var a = this.Fd + this.Cc;
      if (this.Xh == 0) {
        var b = this.ve,
          c = this.Wg;
        return a < b ? b : a > c ? c : a;
      }
      b = this.Wg - this.ve;
      return b > 0
        ? ((c = (a - this.ve) / b),
          (a = Math.floor(c)),
          (c -= a),
          this.Xh == 1
            ? this.ve + c * b
            : (a & 1) == 0
              ? this.ve + c * b
              : this.Wg - c * b)
        : this.ve;
    }
    Ba() {
      return 103;
    }
  }
  mb.i = !0;
  mb.Lb = [Ad];
  Object.assign(mb.prototype, { j: mb });
  class he extends mb {
    constructor() {
      super();
      this.$a = null;
      this.frame = -1;
      this.Mp = this.Tm = this.ey = 0;
      this.ej = -1;
      this.Kr = this.Jr = null;
    }
    G() {
      this.Kr = this.Jr = this.$a = null;
      super.G();
    }
    play(a, b, c) {
      b == null && (b = 0);
      this.$a = a;
      c == null && (c = a.Af - 1);
      this.Tm = b;
      this.Mp = c;
      this.ve = a.Ya[this.Tm];
      this.Wg = a.Ya[this.Mp + 1];
      this.Fd = this.ve;
      this.An(!0);
      this.$l = !1;
      this.frame = -1;
      this.ej = this.Tm;
      this.bn(this.Fd);
      return this;
    }
    HU(a) {
      this.Jr = a;
    }
    IU(a) {
      this.Kr = a;
    }
    stop() {
      this.$a = null;
      this.An(!1);
      this.ey = 0;
      this.uq();
      return this;
    }
    bn() {
      var a = this.qw();
      let b,
        c = this.$a.Af;
      if (c == 1) b = this.ej = 0;
      else if (a >= this.$a.Hj) b = this.ej = c - 1;
      else {
        if (this.$a.qr > 0) b = (a / this.$a.qr) | 0;
        else {
          b = 0;
          let d = this.$a.Ya;
          if (a >= d[this.ej] && a <= d[this.ej + 1]) b = this.ej;
          else if (c < 16) {
            let e = 0;
            for (; e <= c; ) {
              if (d[e] >= a) {
                b = e - 1;
                break;
              }
              ++e;
            }
          } else ((b = Sb.NN(d, a, c - 1)), b < 0 && ((b = ~b), --b));
        }
        this.ej = b;
      }
      b < this.Tm ? (b = this.Tm) : b > this.Mp && (b = this.Mp);
      b != this.frame &&
        ((this.frame = b),
        this.HS(this.$a.data[b]),
        b >= this.Mp &&
          this.Xh == 0 &&
          (--this.ey > 0
            ? ((this.Fd = this.ve),
              (this.frame = -1),
              (this.ej = this.Tm),
              this.bn(this.Fd))
            : (this.uq(), (a = this.$a), (this.$a = null), this.IS(a))));
      return !0;
    }
    HS(a) {
      this.Jr != null && this.Jr(this.$a, a, this.frame);
    }
    IS(a) {
      this.Kr != null && this.Kr(a);
    }
    Ba() {
      return 303;
    }
  }
  he.i = !0;
  he.u = mb;
  Object.assign(he.prototype, { j: he });
  class ud extends mb {
    constructor() {
      super();
      this.Wp = this.Rk = null;
      this.lastIndex = 0;
      this.$a = null;
    }
    G() {
      this.Wp = this.Rk = null;
      super.G();
    }
    play(a, b) {
      b == null && (b = 0);
      this.$a = a;
      this.Xh = b;
      this.ve = this.Fd = this.lastIndex = 0;
      this.Wg = a.Hj;
      this.An(!0);
      this.$l = !1;
      this.bn(0);
    }
    stop() {
      this.Rk = null;
      this.An(!1);
      this.$a = null;
      this.uq();
    }
    bn(a) {
      var b = this.qw();
      let c = this.$a.Ya,
        d;
      var e;
      if (b <= c[0]) d = e = this.lastIndex = b = 0;
      else if (b >= c[this.$a.Af - 1])
        ((b = 0), (d = e = this.lastIndex = this.$a.Af - 1));
      else if (b > c[this.lastIndex]) {
        for (e = this.lastIndex + 1; b >= c[e]; ) ((this.lastIndex = e), ++e);
        d = this.lastIndex;
        b = (b - c[d]) / (c[e] - c[d]);
      } else if (b < c[this.lastIndex]) {
        for (e = this.lastIndex - 1; b <= c[e]; ) ((this.lastIndex = e), --e);
        d = e;
        e = this.lastIndex;
        b = (b - c[d]) / (c[e] - c[d]);
      } else ((b = 0), (d = e = this.lastIndex));
      this.Wp != null && this.Wp(this.$a.data[d], this.$a.data[e], b);
      a > this.Wg &&
        this.Xh == 0 &&
        ((a = this.Rk), this.stop(), a != null && a());
      return !0;
    }
    Ba() {
      return 403;
    }
  }
  ud.i = !0;
  ud.u = mb;
  Object.assign(ud.prototype, { j: ud });
  class te extends mb {
    constructor() {
      super();
    }
    G() {
      this.Th = this.Yg = this.easing = null;
      super.G();
    }
    ji(a, b, c, d, e) {
      this.key = a;
      this.mV = b;
      this.$B = c;
      this.easing = e;
      this.ve = this.Fd = 0;
      this.Wg = d;
      this.An(!0);
      this.$l = !1;
    }
    stop() {
      this.Yg = this.Th = null;
      this.uq();
    }
    bn(a) {
      if (a >= this.Wg && this.Xh == 0)
        return (this.uq(), this.Yg(this.key, this.$B), this.Th(this.key), !1);
      a = this.mV;
      a +=
        (this.$B - a) *
        this.easing((this.qw() - this.ve) / (this.Wg - this.ve));
      this.Yg(this.key, a);
      return !0;
    }
    Ba() {
      return 203;
    }
  }
  te.i = !0;
  te.u = mb;
  Object.assign(te.prototype, { j: te });
  class jg {
    constructor(a, b, c) {
      this.fW = c;
      this.oE = a;
      this.eP = b;
      this.Zm = a * b;
      this.Ch = !0;
    }
    resize(a) {
      return a > this.oE
        ? ((this.oE = a), (this.Ch = !0), (this.Zm = a * this.eP), !0)
        : !1;
    }
  }
  jg.i = !0;
  Object.assign(jg.prototype, { j: jg });
  class Ii {
    constructor() {
      this.Jx = 0;
      this.Kj = Array(6);
      let a = 0;
      for (; a < 6; ) this.Kj[a++] = [];
    }
    getData(a) {
      return this.Kj[a];
    }
  }
  Ii.i = !0;
  Object.assign(Ii.prototype, { j: Ii });
  class Nb {
    constructor(a, b, c, d) {
      this.x = a;
      this.y = b;
      this.w = c;
      this.J = d;
    }
  }
  Nb.i = !0;
  Object.assign(Nb.prototype, { j: Nb });
  class na {
    constructor() {
      this.type = this.Ba();
      this.enabled = !0;
      this.xa = null;
      this.gb = 0;
    }
    G() {
      this.xa = null;
    }
    update() {}
    di(a) {
      this.xa = a;
    }
    Ba() {
      return 105;
    }
  }
  na.i = !0;
  na.Lb = [Ad];
  Object.assign(na.prototype, { j: na });
  class Bd extends na {
    constructor(a) {
      super();
      this.Kb = a;
      this.DG = a.vf;
      this.charset = a.nc.Fq;
      this.text = null;
      this.clip = !1;
      this.fontSize = this.charset.ut;
      this.$D = 4;
      this.mS = 512;
      this.size = new F(100, 100, 0, 1);
      this.gx = !0;
      this.JD = !1;
      this.$T = 32;
      this.NG = this.ID = 0;
      this.zk = 2;
      this.Jl = this.sh = null;
      this.KB = 0;
      this.tf = !0;
      this.overflow = !1;
      this.ih = new Mh();
      this.multiline = !1;
      this.de = 0;
    }
    di(a) {
      super.di(a);
      a.Ob(this.size.x, this.size.y);
    }
    Va(a) {
      this.text != a &&
        ((this.text = a), this.multiline && this.uB(), (this.tf = !0));
    }
    Wr() {
      return this.fontSize;
    }
    iq() {
      this.fontSize = this.charset.ut;
    }
    tc(a) {
      var b;
      b != null && (b < 4 && (b = 4), (this.$D = b));
      b = this.$D;
      let c = this.mS;
      a = a < b ? b : a > c ? c : a;
      a != this.fontSize && ((this.fontSize = a), (this.tf = !0));
    }
    jQ() {
      let a = this.size;
      return new F(a.x, a.y, 0, 1);
    }
    tb(a, b) {
      if (this.size.x != a || this.size.y != b)
        ((this.size.x = a),
          (this.size.y = b),
          this.xa.Ob(this.size.x, this.size.y),
          (this.tf = !0));
    }
    Bw() {
      return this.ih.Gx;
    }
    It(a) {
      this.ID = a;
      this.tf = !0;
    }
    My(a) {
      this.NG = a;
      this.tf = !0;
    }
    Hb(a, b) {
      this.sh = a;
      this.Jl = b;
      this.tf = !0;
    }
    nP(a) {
      a == null && (a = !0);
      if (this.text != null) {
        var b = 2 * this.zk,
          c = this.size.x - b,
          d = this.size.y - b;
        this.iq();
        b = d / this.charset.ak;
        this.ih.shape(this, !0);
        var e = this.ih.jb;
        c = Math.min(c / (e.C - e.A), d / (e.H - e.F));
        a && (c = Math.min(b, c));
        this.fontSize *= c;
        this.shape();
      }
    }
    lg(a) {
      (this.multiline = a) && this.gr == null && this.DU(new kg());
    }
    DU(a) {
      this.gr = a;
      this.text != null && this.uB();
      this.tf = !0;
    }
    shape() {
      this.ih.shape(this, !1);
      let a = this.ih.jb;
      this.overflow = a.C - a.A > this.size.x - 2 * this.zk;
      this.tf = !1;
    }
    update() {
      if (this.Kb.de > this.de) {
        this.de = this.Kb.de;
        this.charset = this.Kb.nc.Fq;
        let a = this.Kb.vf;
        this.fontSize *= this.DG / a;
        this.DG = a;
        this.xa.Vp != null && this.xa.Vp();
        this.tf = !0;
      }
      this.tf && ((this.tf = !1), this.shape());
    }
    G() {
      super.G();
      this.Kb = null;
      this.ih.G();
      this.ih = null;
    }
    uB() {
      this.gr.VU(this.text);
      this.cz = [];
      let a = 0,
        b = this.gr.hE();
      for (; b != null; )
        (this.cz.push(new Nh(this.text.substring(a, b.position), b.required)),
          (a = b.position),
          (b = this.gr.hE()));
    }
    Ba() {
      return 505;
    }
  }
  Bd.i = !0;
  Bd.u = na;
  Object.assign(Bd.prototype, { j: Bd });
  class Nh {
    constructor(a, b) {
      this.text = a;
      this.tB = b;
    }
  }
  Nh.i = !0;
  Object.assign(Nh.prototype, { j: Nh });
  class Mh {
    constructor() {
      this.cursor = new F(0, 0, 0, 1);
      this.xh = new xb(32);
      this.Gx = 1;
      this.jb = new ia(0, 0, 0, 0);
      this.kf = new xb(256);
    }
    G() {
      this.xh.jw();
      this.xh = null;
    }
    shape(a, b) {
      b == null && (b = !1);
      let c = this.jb;
      c.A = c.F = Ba;
      c.C = c.H = Ca;
      var d = a.text;
      if (d != null) {
        var e = d.length;
        if (e != null) {
          d = this.kf;
          b || (d.gg(e * 5), d.clear());
          var f = a.charset;
          e = (a.fontSize / f.ut) * a.Kb.vf;
          f = f.lineHeight * e + a.ID * e;
          var g = a.zk,
            h = a.size.x,
            l = a.zk,
            n = this.cursor;
          n.x = g;
          n.y = g;
          n = !b && a.sh != null;
          var q = !b && a.Jl != null;
          this.Gx = 1;
          if (a.multiline) {
            b = new ia(Ba, Ba, Ca, Ca);
            let u = 0,
              v = a.cz.length,
              A = new ia(Ba, Ba, Ca, Ca),
              D = 0,
              B = 0;
            for (; u < v; ) {
              let G = a.cz[u++];
              var r = this.xC(G.text, a);
              this.cursor.x -= r.P[0].Dz * e;
              let E = d.da;
              this.print(r, a, b);
              r = d.da;
              let T = b.C > h - l;
              T && b.C - b.A < h - 2 * l
                ? (n && (this.sh(a, A, D, B), c.add(A)),
                  d.trim(E),
                  (D = B = E),
                  (A.A = A.F = Ba),
                  (A.C = A.H = Ca),
                  --u)
                : (A.add(b),
                  (B = r),
                  G.tB &&
                    n &&
                    (this.sh(a, A, D, r),
                    c.add(A),
                    (A.A = A.F = Ba),
                    (A.C = A.H = Ca),
                    (D = r)));
              if (T || G.tB)
                ((this.cursor.x = g), (this.cursor.y += f), this.Gx++);
            }
            n && (this.sh(a, A, D, B), c.add(A));
          } else {
            f = this.xC(a.text, a);
            if (f.da == 0) return;
            this.cursor.x -= f.P[0].Dz * e;
            this.print(f, a, c, b);
            n && this.sh(a, c, 0, d.da);
          }
          q && this.Jl(a, c, 0, d.da);
        }
      }
    }
    sh(a, b, c, d) {
      let e = a.zk,
        f = a.size.x - 2 * e;
      for (
        a =
          a.sh < 0
            ? -b.A + e
            : a.sh == 0
              ? f / 2 - (b.A + b.C) / 2 + e
              : f - b.C + e;
        c < d;
      )
        ((this.kf.P[c + 1] += a), (c += 5));
      d = b.A + a;
      c = b.C - b.A;
      b.A = d;
      b.C = d + c;
    }
    Jl(a, b) {
      var c = a.zk,
        d = a.size.y - 2 * c;
      a =
        a.Jl < 0
          ? -b.F + c
          : a.Jl == 0
            ? d / 2 - (b.F + b.H) / 2 + c
            : d - b.H + c;
      c = 0;
      for (d = (this.kf.da / 5) | 0; c < d; ) this.kf.P[c++ * 5 + 2] += a;
      a = b.F + a;
      c = b.H - b.F;
      b.F = a;
      b.H = a + c;
    }
    print(a, b, c, d) {
      d == null && (d = !1);
      c.A = c.F = Ba;
      c.C = c.H = Ca;
      let e = b.charset,
        f = (b.fontSize / e.ut) * b.Kb.vf,
        g = b.NG * f,
        h = 0,
        l = a.da;
      for (var n = 0; h < l; ) {
        var q = a.P[h++],
          r = this.cursor.x + q.Dz * f,
          u = this.cursor.y + q.nW * f;
        let A = q.width * f,
          D = q.height * f,
          B = 0;
        b.gx &&
          ((n = e.gx.J[(q.id << 16) | n]),
          n != null && (B = n),
          (B *= f),
          (n = q.id),
          (r += B));
        if (!d) {
          var v = this.kf;
          v.P[v.da++] = q.id;
          v = this.kf;
          v.P[v.da++] = r;
          v = this.kf;
          v.P[v.da++] = u;
          v = this.kf;
          v.P[v.da++] = A;
          v = this.kf;
          v.P[v.da++] = D;
        }
        q.id > 32 &&
          ((v = r),
          v < c.A && (c.A = v),
          v > c.C && (c.C = v),
          u < c.F && (c.F = u),
          u > c.H && (c.H = u),
          (r += A),
          (u += D),
          r < c.A && (c.A = r),
          r > c.C && (c.C = r),
          u < c.F && (c.F = u),
          u > c.H && (c.H = u));
        q = q.hH;
        b.KB > 0 && (q = b.KB);
        this.cursor.x += q * f + B + g;
      }
    }
    xC(a, b) {
      let c = a.length,
        d = this.xh;
      d.clear();
      d.gg(c);
      var e = b.charset;
      let f = e.LB;
      e = e.JD;
      b = b.$T;
      let g;
      g = 1;
      var h = a.charCodeAt(0);
      if (h >= 32) {
        f[h] == null && (h = b);
        var l = f[h];
        d.P[d.da++] = l;
      }
      for (; g < c; ) {
        l = a.charCodeAt(g++);
        if (l < 32) {
          h = l;
          continue;
        }
        f[l] == null && (l = b);
        e != null && ((h = e.J[(h << 16) | l]), h != null && (--d.da, (l = h)));
        h = f[l];
        d.P[d.da++] = h;
        h = l;
      }
      return d;
    }
  }
  Mh.i = !0;
  Object.assign(Mh.prototype, { j: Mh });
  class lg {
    constructor() {}
  }
  lg.i = !0;
  Object.assign(lg.prototype, { j: lg });
  class kg extends lg {
    constructor() {
      super();
    }
    VU(a) {
      this.Ec = a;
      this.state = bd.As(this.Ec, 0) ? 1 : 0;
      this.Fm = this.g = 0;
      this.Yv = this.Ec.length == 0;
    }
    hE() {
      if (this.Yv) return null;
      let a = this.Ec.length,
        b;
      for (; this.g < a; ) {
        if ((b = this.Ec.charAt(this.g) == "\n"))
          return (
            this.g++,
            (this.Fm = this.g),
            (this.state = bd.As(this.Ec, 0) ? 1 : 0),
            { position: this.Fm, required: this.g != a }
          );
        switch (this.state) {
          case 0:
            bd.As(this.Ec, this.g) && (this.state = 1);
            this.g++;
            break;
          case 1:
            if (bd.As(this.Ec, this.g)) this.g++;
            else
              return (
                (this.Fm = this.g),
                (this.state = 0),
                { position: this.Fm, required: !1 }
              );
        }
        if (this.g == a)
          return (
            (this.Yv = !0),
            (this.Fm = this.g),
            { position: this.Fm, required: !1 }
          );
      }
      this.Yv = !0;
      return null;
    }
  }
  kg.i = !0;
  kg.u = lg;
  Object.assign(kg.prototype, { j: kg });
  class ke extends na {
    constructor() {
      super();
      this.points = [];
      this.Di = [];
      this.no = [];
      this.aa = 10;
    }
    G() {
      super.G();
      this.no = this.Di = this.points = null;
    }
    zU() {
      this.points = [];
      this.Di = [];
      this.no = [];
    }
    Ba() {
      return 705;
    }
  }
  ke.i = !0;
  ke.u = na;
  Object.assign(ke.prototype, { j: ke });
  class mg extends na {
    constructor(a, b, c) {
      super();
      this.Kb = a;
      this.charset = a.nc.Fq;
      a = [9633, 65533, 63];
      let d = 0;
      for (; d < 3; ) {
        let e = d++;
        if (this.charset.LB[a[e]] != null) break;
      }
      this.grid = null;
      this.fillColor = -1;
      this.zx = this.yx = 0;
      this.Ob(b, c, !1);
    }
    Ob(a, b, c) {
      if (c)
        ((a = (a / this.charset.mC) | 0),
          (b = (b / this.charset.lineHeight) | 0),
          this.Ob(a, b, !1));
      else if (
        (this.yx > 0 && a > this.yx && (a = this.yx),
        this.zx > 0 && b > this.zx && (b = this.zx),
        this.grid == null || a != this.grid.Wb || b != this.grid.fd)
      )
        (this.grid == null
          ? (this.grid = new Vd(a, b))
          : this.grid.resize(a, b),
          this.grid.forEach(function (d, e, f) {
            return d == null ? new Oh(e, f) : d;
          }),
          this.xa != null && this.$c());
    }
    di(a) {
      super.di(a);
      this.$c();
    }
    $c() {
      this.xa.Ob(
        this.charset.mC * this.grid.Wb,
        this.charset.lineHeight * this.grid.fd,
      );
      this.xa.$c();
    }
    Ba() {
      return 1805;
    }
  }
  mg.i = !0;
  mg.u = na;
  Object.assign(mg.prototype, { j: mg });
  class Oh {
    constructor(a, b) {
      this.x = a;
      this.y = b;
      this.code = 0;
    }
  }
  Oh.i = !0;
  Object.assign(Oh.prototype, { j: Oh });
  class ue extends na {
    constructor(a) {
      super();
      this.color = ck.clone(a);
    }
    Ba() {
      return 1205;
    }
  }
  ue.i = !0;
  ue.u = na;
  Object.assign(ue.prototype, { j: ue });
  class ve extends na {
    constructor(a) {
      super();
      this.color = a;
      this.lt = null;
    }
    Ba() {
      return 305;
    }
  }
  ve.i = !0;
  ve.u = na;
  Object.assign(ve.prototype, { j: ve });
  class Qc extends na {
    constructor(a) {
      super();
      this.mk = a;
      this.iu = [];
    }
    update(a) {
      super.update(a);
      this.iu = [];
      for (a = 0; a < 5; ) {
        var b = this.mk[a++],
          c = b.length;
        if (c == 0) continue;
        let q = 1;
        for (var d = void 0, e = [], f = 0, g = 0; g < c; ) {
          var h = g++;
          d = b[h];
          h == 0 && (e[f++] = d.start);
          e[f++] = d.end;
        }
        b = c * 2;
        c = [];
        f = 1 / b;
        for (g = 0; ; ) {
          g > 1 && (g = 1);
          d = t.VN(e, g);
          c.push(d);
          if (g == 1) break;
          g += f;
        }
        e = Qc.MH / b;
        d = [];
        f = 0;
        for (g = b - 1; f < g; ) {
          var l = q;
          h = f == b - 1 ? 1 : q + e;
          let r = c[f],
            u = c[f + 1];
          var n = t.La(u, r);
          n.normalize();
          let v = t.rN(n);
          n = t.Yu(n);
          let A = t.ub(r, t.Rb(n, l));
          d.push(t.ub(r, t.Rb(v, l)));
          d.push(A);
          l = t.ub(u, t.Rb(n, h));
          d.push(t.ub(u, t.Rb(v, h)));
          d.push(l);
          q += e;
          ++f;
        }
        this.iu.push(d);
      }
    }
    Ba() {
      return 1105;
    }
  }
  Qc.i = !0;
  Qc.u = na;
  Object.assign(Qc.prototype, { j: Qc });
  class le extends na {
    constructor() {
      super();
      this.D = new F(0, 0, 0, 1);
      this.aa = 0;
      this.color = new F(0, 0, 0, 0);
      this.Sp = 0;
      this.lineWidth = 1.5;
      this.update(null);
    }
    update() {
      this.Sp = Math.max(16, Math.round(this.aa / 0.8));
      this.Sp % 2 != 0 && this.Sp++;
    }
    Ba() {
      return 605;
    }
  }
  le.i = !0;
  le.u = na;
  Object.assign(le.prototype, { j: le });
  class ng extends na {
    constructor(a, b) {
      super();
      this.Kb = a;
      this.shape = b;
      this.hc = [];
    }
    Ba() {
      return 1705;
    }
  }
  ng.i = !0;
  ng.u = na;
  Object.assign(ng.prototype, { j: ng });
  class Ac extends na {
    constructor() {
      super();
      this.precision = 0.2;
      this.jT = !1;
      new ia(0, 0, 1024, 1024);
      this.hO = !1;
      this.Iv = 0;
      this.fO = 256;
      this.Hv = Array(this.fO);
      this.tO = 1024;
      this.data = Array(this.tO);
      this.lineWidth = this.Ds = 1;
      this.fillColor = 0;
      this.cursor = new F(0, 0, 0, 1);
      this.Od = [];
      this.pp = new ia(Ba, Ba, Ca, Ca);
      this.clear();
    }
    G() {
      this.Od = this.Hv = this.data = null;
      super.G();
    }
    di(a) {
      super.di(a);
      this.hO && this.jO();
    }
    clear() {
      this.Iv = 0;
      let a = this.pp;
      a.A = a.F = Ba;
      a.C = a.H = Ca;
    }
    jO() {
      let a = Ba,
        b = Ca,
        c = Ba,
        d = Ca,
        e = this.pp,
        f = this.data,
        g = this.Hv,
        h = 0,
        l = 0,
        n = this.Iv;
      for (; h < n; ) {
        var q = g[h++];
        switch (q) {
          case 1:
          case 2:
          case 3:
            q = f[l];
            let r = f[l + 1];
            q < a && (a = q);
            q > b && (b = q);
            r < c && (c = r);
            r > d && (d = r);
            l += 2;
            break;
          case 4:
            l += 3;
            break;
          case 5:
            l += 2;
            break;
          case 6:
          case 7:
          case 8:
            break;
          default:
            ((e.A = a),
              (e.F = c),
              (e.C = b),
              (e.H = d),
              (l = this.dB(q, l, f)),
              (a = e.A),
              (c = e.F),
              (b = e.C),
              (d = e.H));
        }
      }
      e.A = a;
      e.F = c;
      e.C = b;
      e.H = d;
      this.xa != null && this.$c();
    }
    dB() {
      return 0;
    }
    $c() {
      let a = this.pp;
      var b = this.xa.ga;
      b.D.x = (a.A + a.C) / 2;
      b.D.y = (a.F + a.H) / 2;
      let c = (a.C - a.A) / 2,
        d = (a.H - a.F) / 2;
      b.aa = Math.sqrt(c * c + d * d);
      b.type == 302 &&
        ((b = b.jb), (b.A = a.A), (b.F = a.F), (b.C = a.C), (b.H = a.H));
      this.xa.$c();
    }
    Ba() {
      return 1005;
    }
  }
  Ac.i = !0;
  Ac.u = na;
  Object.assign(Ac.prototype, { j: Ac });
  class wd extends na {
    constructor() {
      super();
      this.aa = 0;
      this.color = new F(1, 1, 1, 1);
      this.lineWidth = 6;
      this.Ds = 1;
    }
    Ba() {
      return 905;
    }
  }
  wd.i = !0;
  wd.u = na;
  Object.assign(wd.prototype, { j: wd });
  class we extends na {
    constructor(a, b) {
      super();
      this.Kb = null;
      this.xq = new Nb(0, 0, 0, 0);
      this.frame = null;
      this.fq = this.nn = 1;
      this.de = this.L = this.offsetY = this.offsetX = 0;
      this.mg(a, b);
    }
    GU(a) {
      this.offsetX = 0;
      this.offsetY = a;
      this.L = a == 0 ? this.L & -3 : this.L | 2;
    }
    mg(a, b) {
      this.Kb = a;
      if (b != null) this.Ay(b);
      else {
        b = this.xq;
        let c = a.size.x,
          d = a.size.y;
        b.x = 0;
        b.y = 0;
        b.w = c;
        b.J = d;
        this.frame = null;
      }
      this.gb = a.id;
    }
    Ay(a) {
      a = this.Kb.nc.Qf(a);
      if (this.frame == null || a.id != this.frame.id) {
        this.frame = a;
        a = this.xq;
        let b = this.frame.Wd;
        a.x = b.x;
        a.y = b.y;
        a.w = b.w;
        a.J = b.J;
      }
      return this.frame;
    }
    mq(a) {
      if (this.frame == null || this.frame.id != a) {
        this.frame = this.Kb.nc.QP(a);
        a = this.xq;
        let b = this.frame.Wd;
        a.x = b.x;
        a.y = b.y;
        a.w = b.w;
        a.J = b.J;
      }
    }
    update() {
      if (this.Kb.de > this.de) {
        this.de = this.Kb.de;
        if (this.frame == null) this.mg(this.Kb);
        else {
          let a = this.frame;
          this.frame = null;
          this.mq(a.id);
        }
        this.xa.Vp != null && this.xa.Vp();
      }
    }
    G() {
      super.G();
      this.Kb = null;
    }
    Ba() {
      return 205;
    }
  }
  we.i = !0;
  we.u = na;
  Object.assign(we.prototype, { j: we });
  class xe extends na {
    constructor(a) {
      super();
      this.Kb = a;
      this.lt = null;
    }
    G() {
      super.G();
      this.Kb = null;
    }
    Ba() {
      return 405;
    }
  }
  xe.i = !0;
  xe.u = na;
  Object.assign(xe.prototype, { j: xe });
  class og extends na {
    constructor(a, b) {
      super();
      this.bt = new F(1, 1, 0, 1);
      this.dl = new F(0, 0, 0, 1);
      a.cj(function () {});
      this.Ls = new Na(a.Wb * b, a.fd * b);
    }
    G() {
      super.G();
    }
    di(a) {
      super.di(a);
      a.Ob(this.Ls.x, this.Ls.y);
      a.$c();
    }
    update(a) {
      var b = a.Db,
        c = b.position.y;
      b = b.position.x - a.Mf.Ia.translate.x;
      var d = c - a.Mf.Ia.translate.y;
      c = this.dl;
      c.x = b * (1 - this.bt.x);
      c.y = d * (1 - this.bt.y);
      b = a.Mf;
      b.Ob(this.Ls.x, this.Ls.y);
      d = (1 - this.bt.x) * c.x * 2;
      a = (1 - this.bt.y) * c.y * 2;
      b.ga.D.x = d;
      b.ga.D.y = a;
      c = b.ga.jb;
      let e = c.C - c.A;
      c.A = d;
      c.C = d + e;
      c = b.ga.jb;
      b = c.H - c.F;
      c.F = a;
      c.H = a + b;
    }
    Ba() {
      return 1605;
    }
  }
  og.i = !0;
  og.u = na;
  Object.assign(og.prototype, { j: og });
  class pg extends na {
    constructor(a) {
      a == null && (a = 1);
      super();
      this.flags = a;
      this.color = new F(0, 0, 0, 1);
    }
    Ba() {
      return 1405;
    }
  }
  pg.i = !0;
  pg.u = na;
  Object.assign(pg.prototype, { j: pg });
  class qg extends Ac {
    constructor() {
      super();
      let a = [],
        b = 0;
      for (; b < 4; ) (++b, a.push(new F(0, 0, 0, 1)));
      this.yF = [];
    }
    Ba() {
      return 1505;
    }
  }
  qg.i = !0;
  qg.u = Ac;
  Object.assign(qg.prototype, { j: qg });
  class Ph {
    constructor() {
      this.kR = [];
      this.xh = [];
    }
  }
  Ph.i = !0;
  Object.assign(Ph.prototype, { j: Ph });
  class Qh {
    constructor(a, b, c, d, e, f, g, h) {
      this.id = a;
      this.x = b;
      this.y = c;
      this.width = d;
      this.height = e;
      this.Dz = f;
      this.nW = g;
      this.hH = h;
    }
  }
  Qh.i = !0;
  Object.assign(Qh.prototype, { j: Qh });
  class Rh {
    constructor(a, b, c) {
      this.first = a;
      this.second = b;
      this.amount = c;
    }
  }
  Rh.i = !0;
  Object.assign(Rh.prototype, { j: Rh });
  class Sh {
    constructor(a, b, c, d) {
      this.YV = a;
      this.right = b;
      this.KO = c;
      this.left = d;
    }
  }
  Sh.i = !0;
  Object.assign(Sh.prototype, { j: Sh });
  class Th {
    constructor(a, b) {
      this.size = a;
      this.padding = b;
    }
  }
  Th.i = !0;
  Object.assign(Th.prototype, { j: Th });
  class Uh {
    constructor(a, b, c, d) {
      this.lineHeight = a;
      this.ak = b;
      this.nU = c;
      this.mU = d;
    }
  }
  Uh.i = !0;
  Object.assign(Uh.prototype, { j: Uh });
  class Ne {
    constructor() {}
    mn(a) {
      let b = new Ph();
      a = new $b(a);
      var c = a.N(),
        d = a.N(),
        e = a.N();
      if (c != 66 || d != 77 || e != 70) throw 7;
      if (a.N() != 3) throw 8;
      a.N();
      c = a.Zg();
      d = a.sc();
      a.N();
      a.N();
      a.Id();
      a.N();
      e = a.N();
      var f = a.N(),
        g = a.N(),
        h = a.N();
      a.N();
      a.N();
      a.N();
      a.kt(c - 14);
      b.info = new Th(Math.abs(d), new Sh(e, f, g, h));
      a.N();
      a.Zg();
      c = Math.max(a.Id(), b.info.size) | 0;
      d = a.Id();
      e = a.Id();
      f = a.Id();
      a.Id();
      a.N();
      a.N();
      a.N();
      a.N();
      a.N();
      b.pr = new Uh(c, d, e, f);
      a.N();
      c = a.Zg();
      d = a.g;
      a.cF();
      d = a.g - d;
      for (c -= d; c > 0; ) (a.cF(), (c -= d));
      a.N();
      c = (a.Zg() / 20) | 0;
      for (d = 0; d < c; ) {
        ++d;
        e = a.Zg();
        f = a.Id();
        g = a.Id();
        h = a.Id();
        let l = a.Id(),
          n = a.sc(),
          q = a.sc(),
          r = a.sc();
        a.N();
        a.N();
        b.xh.push(new Qh(e, f, g, h, l, n, q, r));
      }
      if (a.g == a.KG) return b;
      a.N();
      for (a.Zg(); a.g < a.KG; )
        ((c = a.Zg()), (d = a.Zg()), (e = a.sc()), b.kR.push(new Rh(c, d, e)));
      return b;
    }
  }
  Ne.i = !0;
  Object.assign(Ne.prototype, { j: Ne });
  class Oe {
    static yC(a) {
      for (var b = 0, c = 0, d = a.xh; c < d.length; )
        b = Math.max(b, d[c++].id + 1);
      c = Array(b);
      for (d = 0; d < b; ) c[d++] = null;
      b = 0;
      for (d = a.xh; b < d.length; ) {
        let e = d[b];
        ++b;
        c[e.id] = e;
      }
      return new Vh(
        c,
        a.info.size,
        a.pr.lineHeight,
        a.pr.ak,
        a.xh[0].hH,
        a.pr.nU,
        a.pr.mU,
        [
          a.info.padding.YV,
          a.info.padding.right,
          a.info.padding.KO,
          a.info.padding.left,
        ],
      );
    }
    static om(a) {
      let b = [],
        c = 0;
      for (a = a.xh; c < a.length; ) {
        let d = a[c];
        ++c;
        let e = d.id;
        b.push(
          new se(
            e,
            String.fromCodePoint(e),
            new Na(d.width, d.height),
            new Nb(d.x, d.y, d.width, d.height),
            !1,
            null,
          ),
        );
      }
      return b;
    }
  }
  Oe.i = !0;
  class Vh {
    constructor(a, b, c, d, e, f, g, h) {
      this.LB = a;
      this.ut = b;
      this.lineHeight = c;
      this.ak = d;
      this.mC = e;
      this.padding = h;
      this.gx = new jb();
      this.JD = new jb();
    }
  }
  Vh.i = !0;
  Object.assign(Vh.prototype, { j: Vh });
  class nb {
    constructor() {}
    $r(a) {
      return new Uint32Array(this.ma.buffer, a);
    }
    write(a) {
      let b = Ha.Xg(this.ma.buffer);
      a.lW(b, b.length);
    }
    static AP(a) {
      let b = new nb();
      b.ma = new Uint8Array(a);
      b.p = 0;
      return b;
    }
    static init(a) {
      let b = new nb();
      b.ma = new Uint8Array(new ArrayBuffer(a));
      b.p = 0;
      return b;
    }
  }
  nb.i = !0;
  Object.assign(nb.prototype, { j: nb });
  class ah {
    constructor() {
      this.qx = Array(1);
      this.ec = new Pb();
      this.pd = new Pb();
      this.be = new Pb();
      this.te = new Pb();
      this.QD =
        this.XR =
        this.WR =
        this.Hs =
        this.UR =
        this.Lk =
        this.Hk =
        this.pf =
        this.Qe =
        this.ue =
        this.VR =
        this.ZR =
        this.Js =
        this.Ks =
          0;
    }
  }
  ah.i = !0;
  Object.assign(ah.prototype, { j: ah });
  class Pb {
    constructor() {}
  }
  Pb.i = !0;
  Object.assign(Pb.prototype, { j: Pb });
  class Wh {
    constructor() {
      this.ue = -1;
      this.Lk = this.Hk = this.pf = this.Qe = this.TR = this.Js = this.Ks = 0;
    }
  }
  Wh.i = !0;
  Object.assign(Wh.prototype, { j: Wh });
  class vb {
    constructor() {
      this.ec = new Ua(0);
      this.pd = new Ua(0);
      this.be = new Ua(0);
      this.te = new Ua(0);
      this.Cp = new Ob();
      this.Aa = new Xh();
      this.Ua = null;
      this.Hs = 0;
      this.Jk = null;
      this.YR = 519686845;
      this.Sh = Array(2);
      this.Re = Array(2);
      let a = 0;
      for (; a < 2; ) {
        let b = a++;
        this.Sh[b] = new Ob();
        this.Re[b] = new Ob();
      }
    }
    iR() {
      return this.YR == 519686845;
    }
    init(a, b) {
      this.Ua = Ri(a, b);
      if (this.Ua == null) return !1;
      this.Jk = nb.AP(a);
      this.Hs = b;
      return this.QQ() && this.AO() ? !0 : !1;
    }
    MV(a, b, c, d) {
      let e = this.Ua.qx[d],
        f = this.Hs;
      d + 1 < this.Ua.pf && (f = this.Ua.qx[d + 1]);
      let g = this.Jk,
        h = new nb();
      h.ma = g.ma;
      h.p = g.p + e;
      return this.NV(h, f - e, a, b, c, d);
    }
    NV(a, b, c, d, e, f) {
      var g = this.Ua.Lk >> f;
      f = this.Ua.Hk >> f;
      g = ((g > 1 ? g : 1) + 3) >> 2;
      f = ((f > 1 ? f : 1) + 3) >> 2;
      var h = (this.Ua.ue == 0 || this.Ua.ue == 9 ? 8 : 16) * g;
      if (e == 0) e = h;
      else if (e < h || (e & 3) != 0) return !1;
      if (d < e * f) return !1;
      d = (g + 1) >> 1;
      h = (f + 1) >> 1;
      if (!this.Aa.Gn(a, b)) return !1;
      switch (this.Ua.ue) {
        case 0:
          a = this.PV(c, e, g, f, d, h);
          break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
          a = this.QV(c, e, g, f, d, h);
          break;
        case 7:
        case 8:
          a = this.OV(c, e, g, f, d, h);
          break;
        case 9:
          a = this.RV(c, e, g, f, d, h);
          break;
        default:
          return !1;
      }
      return a ? !0 : !1;
    }
    QQ() {
      let a = this.Jk,
        b = new nb();
      b.ma = a.ma;
      b.p = a.p + this.Ua.aS;
      return this.Aa.Gn(b, this.Ua.bS) &&
        this.Aa.Ah(this.Cp) &&
        (this.Ua.te.Cd != 0 || this.Ua.pd.Cd != 0) &&
        (this.Ua.te.Cd == 0 ||
          (this.Aa.Ah(this.Sh[0]) && this.Aa.Ah(this.Re[0]))) &&
        (this.Ua.pd.Cd == 0 ||
          (this.Aa.Ah(this.Sh[1]) && this.Aa.Ah(this.Re[1])))
        ? !0
        : !1;
    }
    AO() {
      return (this.Ua.te.Cd == 0 || (this.yO() && this.zO())) &&
        (this.Ua.pd.Cd == 0 || (this.wO() && this.xO()))
        ? !0
        : !1;
    }
    yO() {
      let a = this.Ua.te.Cd;
      if (!this.te.resize(a)) return !1;
      var b = this.Jk,
        c = new nb();
      c.ma = b.ma;
      c.p = b.p + this.Ua.te.Ik;
      if (!this.Aa.Gn(c, this.Ua.te.Kk)) return !1;
      b = [new Ob(), new Ob()];
      for (c = 0; c < 2; ) if (!this.Aa.Ah(b[c++])) return !1;
      let d = (c = 0),
        e = 0,
        f = 0,
        g = 0,
        h = 0,
        l = 0,
        n = 0;
      for (; n < a; )
        (++n,
          (c = (c + this.Aa.decode(b[0])) & 31),
          (d = (d + this.Aa.decode(b[1])) & 63),
          (e = (e + this.Aa.decode(b[0])) & 31),
          (f = (f + this.Aa.decode(b[0])) & 31),
          (g = (g + this.Aa.decode(b[1])) & 63),
          (h = (h + this.Aa.decode(b[0])) & 31),
          (this.te.data[l++] =
            e | (d << 5) | (c << 11) | (h << 16) | (g << 21) | (f << 27)));
      return !0;
    }
    zO() {
      let a = this.Ua.be.Cd;
      var b = this.Jk,
        c = new nb();
      c.ma = b.ma;
      c.p = b.p + this.Ua.be.Ik;
      if (!this.Aa.Gn(c, this.Ua.be.Kk)) return !1;
      b = new Ob();
      if (!this.Aa.Ah(b)) return !1;
      c = Array(49);
      let d = Array(49);
      for (var e = -3, f = -3, g = 0; g < 49; ) {
        var h = g++;
        c[h] = e;
        d[h] = f;
        ++e > 3 && ((e = -3), ++f);
      }
      e = Array(16);
      for (f = 0; f < 16; ) e[f++] = 0;
      if (!this.be.resize(a)) return !1;
      f = 0;
      g = dk;
      for (h = 0; h < a; ) {
        ++h;
        let l = 0;
        for (; l < 8; ) {
          let n = l++,
            q = this.Aa.decode(b);
          e[n * 2] = (c[q] + e[n * 2]) & 3;
          e[n * 2 + 1] = (d[q] + e[n * 2 + 1]) & 3;
        }
        this.be.data[f++] =
          g[e[0]] |
          (g[e[1]] << 2) |
          (g[e[2]] << 4) |
          (g[e[3]] << 6) |
          (g[e[4]] << 8) |
          (g[e[5]] << 10) |
          (g[e[6]] << 12) |
          (g[e[7]] << 14) |
          (g[e[8]] << 16) |
          (g[e[9]] << 18) |
          (g[e[10]] << 20) |
          (g[e[11]] << 22) |
          (g[e[12]] << 24) |
          (g[e[13]] << 26) |
          (g[e[14]] << 28) |
          (g[e[15]] << 30);
      }
      return !0;
    }
    wO() {
      let a = this.Ua.pd.Cd;
      var b = this.Jk,
        c = new nb();
      c.ma = b.ma;
      c.p = b.p + this.Ua.pd.Ik;
      if (!this.Aa.Gn(c, this.Ua.pd.Kk)) return !1;
      b = new Ob();
      if (!this.Aa.Ah(b) || !this.pd.resize(a)) return !1;
      let d = (c = 0),
        e = 0,
        f = 0;
      for (; f < a; )
        (++f,
          (d = (this.Aa.decode(b) + d) & 255),
          (e = (this.Aa.decode(b) + e) & 255),
          (this.pd.data[c++] = d | (e << 8)));
      return !0;
    }
    xO() {
      let a = this.Ua.ec.Cd;
      var b = this.Jk,
        c = new nb();
      c.ma = b.ma;
      c.p = b.p + this.Ua.ec.Ik;
      if (!this.Aa.Gn(c, this.Ua.ec.Kk)) return !1;
      b = new Ob();
      if (!this.Aa.Ah(b)) return !1;
      c = Array(225);
      let d = Array(225);
      for (var e = -7, f = -7, g = 0; g < 225; ) {
        var h = g++;
        c[h] = e;
        d[h] = f;
        ++e > 7 && ((e = -7), ++f);
      }
      e = Array(16);
      for (f = 0; f < 16; ) e[f++] = 0;
      if (!this.ec.resize(a * 3)) return !1;
      f = 0;
      g = ek;
      for (h = 0; h < a; ) {
        ++h;
        for (var l = 0; l < 8; ) {
          let n = l++,
            q = this.Aa.decode(b);
          e[n * 2] = (c[q] + e[n * 2]) & 7;
          e[n * 2 + 1] = (d[q] + e[n * 2 + 1]) & 7;
        }
        l =
          ((g[e[0]] |
            (g[e[1]] << 3) |
            (g[e[2]] << 6) |
            (g[e[3]] << 9) |
            (g[e[4]] << 12) |
            (g[e[5]] << 15)) >>>
            0) &
          65535;
        this.ec.data[f++] = l;
        l =
          (((g[e[5]] >> 1) |
            (g[e[6]] << 2) |
            (g[e[7]] << 5) |
            (g[e[8]] << 8) |
            (g[e[9]] << 11) |
            (g[e[10]] << 14)) >>>
            0) &
          65535;
        this.ec.data[f++] = l;
        l =
          (((g[e[10]] >> 2) |
            (g[e[11]] << 1) |
            (g[e[12]] << 4) |
            (g[e[13]] << 7) |
            (g[e[14]] << 10) |
            (g[e[15]] << 13)) >>>
            0) &
          65535;
        this.ec.data[f++] = l;
      }
      return !0;
    }
    PV(a, b, c, d, e, f) {
      let g = 1,
        h = this.te.size,
        l = this.be.size;
      var n = 0,
        q = 0;
      let r = this.Ua.Qe,
        u = b >> 2,
        v = new Ua(4),
        A = 0;
      for (; A < r; ) {
        let U = a[A++],
          Z = 0,
          ba = 0;
        for (; ba < f; ) {
          var D = ba++,
            B = 0;
          let ca = e,
            W = 1,
            la = 16,
            pa = Z;
          (D & 1) > 0 &&
            ((B = e - 1), (W = ca = -1), (la = -16), (pa += (e - 1) * 8 * 2));
          for (D = D == f - 1 && (d & 1) > 0; B != ca; ) {
            g == 1 && ((g = this.Aa.decode(this.Cp)), (g |= 512));
            var G = g & 7;
            g >>>= 3;
            for (var E = vb.Pr[G], T = 0; T < E; ) {
              var S = T++;
              n += this.Aa.decode(this.Sh[0]);
              n >= h && (n -= h);
              v.data[S] = this.te.data[n];
            }
            E = vb.Qr[G];
            T = (c & 1) > 0 && B == e - 1;
            G = U.$r(pa);
            S = 0;
            if (D || T) {
              let ha = 0;
              for (; ha < 2; ) {
                let aa = ha++;
                S = ((S << 2) + b * aa) >> 2;
                let wa = 0;
                for (; wa < 2; ) {
                  let Ea = wa++;
                  q += this.Aa.decode(this.Re[0]);
                  q >= l && (q -= l);
                  (Ea != 0 && T) ||
                    (aa != 0 && D) ||
                    ((G[S] = v.data[E[Ea + aa * 2]]),
                    (G[S + 1] = this.be.data[q]));
                }
              }
            } else
              ((G[0] = v.data[E[0]]),
                (q += this.Aa.decode(this.Re[0])),
                q >= l && (q -= l),
                (G[1] = this.be.data[q]),
                (G[2] = v.data[E[1]]),
                (q += this.Aa.decode(this.Re[0])),
                q >= l && (q -= l),
                (G[3] = this.be.data[q]),
                (G[u] = v.data[E[2]]),
                (q += this.Aa.decode(this.Re[0])),
                q >= l && (q -= l),
                (G[1 + u] = this.be.data[q]),
                (G[2 + u] = v.data[E[3]]),
                (q += this.Aa.decode(this.Re[0])),
                q >= l && (q -= l),
                (G[3 + u] = this.be.data[q]));
            pa += la;
            B += W;
          }
          Z += b * 2;
        }
      }
      return !0;
    }
    QV(a, b, c, d, e, f) {
      let g = 1,
        h = this.te.size,
        l = this.be.size,
        n = this.pd.size,
        q = this.Ua.ec.Cd;
      var r = 0,
        u = 0,
        v = 0,
        A = 0;
      let D = this.Ua.Qe,
        B = new Ua(4),
        G = new Ua(4),
        E = 0;
      for (; E < D; ) {
        let la = a[E++],
          pa = 0,
          ha = 0;
        for (; ha < f; ) {
          var T = ha++,
            S = 0;
          let aa = e,
            wa = 1,
            Ea = 32,
            ya = pa;
          (T & 1) > 0 &&
            ((S = e - 1), (wa = aa = -1), (Ea = -32), (ya += (e - 1) * 16 * 2));
          for (T = T == f - 1 && (d & 1) > 0; S != aa; ) {
            g == 1 && ((g = this.Aa.decode(this.Cp)), (g |= 512));
            var U = g & 7;
            g >>>= 3;
            var Z = vb.Pr[U];
            U = vb.Qr[U];
            let Ja = (c & 1) > 0 && S == e - 1,
              Wb = la.$r(ya),
              tb = 0;
            for (var ba = 0; ba < Z; ) {
              var ca = ba++;
              v += this.Aa.decode(this.Sh[1]);
              v >= n && (v -= n);
              G.data[ca] = this.pd.data[v];
            }
            for (ba = 0; ba < Z; )
              ((ca = ba++),
                (r += this.Aa.decode(this.Sh[0])),
                r >= h && (r -= h),
                (B.data[ca] = this.te.data[r]));
            for (Z = 0; Z < 2; ) {
              ba = Z++;
              for (ca = 0; ca < 2; ) {
                var W = ca++;
                A += this.Aa.decode(this.Re[1]);
                A >= q && (A -= q);
                u += this.Aa.decode(this.Re[0]);
                u >= l && (u -= l);
                if (!((W != 0 && Ja) || (ba != 0 && T))) {
                  W = U[W + ba * 2];
                  let ic = A * 3;
                  Wb[tb] = G.data[W] | (this.ec.data[ic] << 16);
                  Wb[tb + 1] =
                    this.ec.data[ic + 1] | (this.ec.data[ic + 2] << 16);
                  Wb[tb + 2] = B.data[W];
                  Wb[tb + 3] = this.be.data[u];
                }
                tb += 4;
              }
              tb = ((tb << 2) - 32 + b) >> 2;
            }
            ya += Ea;
            S += wa;
          }
          pa += b * 2;
        }
      }
      return !0;
    }
    OV(a, b, c, d, e, f) {
      let g = 1,
        h = this.pd.size,
        l = this.Ua.ec.Cd;
      var n = 0,
        q = 0,
        r = 0,
        u = 0;
      let v = this.Ua.Qe,
        A = 0;
      for (; A < v; ) {
        let Z = a[A++],
          ba = 0,
          ca = 0;
        for (; ca < f; ) {
          var D = ca++,
            B = 0;
          let W = e,
            la = 1,
            pa = 32,
            ha = ba;
          (D & 1) > 0 &&
            ((B = e - 1), (la = W = -1), (pa = -32), (ha += (e - 1) * 16 * 2));
          for (D = D == f - 1 && (d & 1) > 0; B != W; ) {
            let aa = new Ua(4),
              wa = new Ua(4);
            g == 1 && ((g = this.Aa.decode(this.Cp)), (g |= 512));
            var G = g & 7;
            g >>>= 3;
            var E = vb.Pr[G];
            G = vb.Qr[G];
            let Ea = (c & 1) > 0 && B == e - 1,
              ya = Z.$r(ha);
            for (var T = 0; T < E; ) {
              var S = T++;
              n += this.Aa.decode(this.Sh[1]);
              n >= h && (n -= h);
              aa.data[S] = this.pd.data[n];
            }
            for (T = 0; T < E; )
              ((S = T++),
                (r += this.Aa.decode(this.Sh[1])),
                r >= h && (r -= h),
                (wa.data[S] = this.pd.data[r]));
            for (E = 0; E < 2; )
              for (T = E++, S = 0; S < 2; ) {
                var U = S++;
                q += this.Aa.decode(this.Re[1]);
                q >= l && (q -= l);
                u += this.Aa.decode(this.Re[1]);
                u >= l && (u -= l);
                if (!((U != 0 && Ea) || (T != 0 && D))) {
                  U = G[U + T * 2];
                  let Ja = q * 3;
                  ya[0] = aa.data[U] | (this.ec.data[Ja] << 16);
                  ya[1] = this.ec.data[Ja + 1] | (this.ec.data[Ja + 2] << 16);
                  ya[2] = wa.data[U] | (this.ec.data[Ja] << 16);
                  ya[3] = this.ec.data[Ja + 1] | (this.ec.data[Ja + 2] << 16);
                }
              }
            ha += pa;
            B += la;
          }
          ba += b * 2;
        }
      }
      return !0;
    }
    RV(a, b, c, d, e, f) {
      let g = 1,
        h = this.pd.size,
        l = this.Ua.ec.Cd;
      var n = 0,
        q = 0;
      let r = this.Ua.Qe,
        u = 0;
      for (; u < r; ) {
        let T = a[u++],
          S = 0,
          U = 0;
        for (; U < f; ) {
          var v = U++,
            A = 0;
          let Z = e,
            ba = 1,
            ca = 16,
            W = S;
          (v & 1) > 0 &&
            ((A = e - 1), (ba = Z = -1), (ca = -16), (W += (e - 1) * 8 * 2));
          for (v = v == f - 1 && (d & 1) > 0; A != Z; ) {
            let la = new Ua(4);
            g == 1 && ((g = this.Aa.decode(this.Cp)), (g |= 512));
            var D = g & 7;
            g >>>= 3;
            var B = vb.Pr[D];
            D = vb.Qr[D];
            let pa = (c & 1) > 0 && A == e - 1,
              ha = T.$r(W),
              aa = 0;
            for (var G = 0; G < B; ) {
              var E = G++;
              n += this.Aa.decode(this.Sh[1]);
              n >= h && (n -= h);
              la.data[E] = this.pd.data[n];
            }
            for (B = 0; B < 2; ) {
              G = B++;
              for (E = 0; E < 2; ) {
                let wa = E++;
                q += this.Aa.decode(this.Re[1]);
                q >= l && (q -= l);
                if (!((wa != 0 && pa) || (G != 0 && v))) {
                  let Ea = q * 3;
                  ha[aa] = la.data[D[wa + G * 2]] | (this.ec.data[Ea] << 16);
                  ha[aa + 1] = this.ec.data[1] | (this.ec.data[Ea + 2] << 16);
                }
                aa += 2;
              }
              aa = ((aa << 2) - 16 + b) >> 2;
            }
            W += ca;
            A += ba;
          }
          S += b * 2;
        }
      }
      return !0;
    }
  }
  vb.i = !0;
  Object.assign(vb.prototype, { j: vb });
  class Cd {
    constructor() {
      this.Uv = this.Vv = 0;
    }
    write(a) {
      a.Qb(this.Uv);
      a.Qb(this.Vv);
    }
  }
  Cd.i = !0;
  Object.assign(Cd.prototype, { j: Cd });
  class Yh {
    constructor() {
      this.Uo =
        this.kk =
        this.bC =
        this.dC =
        this.aP =
        this.$O =
        this.WO =
        this.bP =
          0;
    }
    write(a) {
      a.Qb(this.Uo);
      a.Qb(this.kk);
      a.Qb(this.bC);
      a.Qb(this.dC);
      a.Qb(this.aP);
      a.Qb(this.$O);
      a.Qb(this.WO);
      a.Qb(this.bP);
    }
  }
  Yh.i = !0;
  Object.assign(Yh.prototype, { j: Yh });
  class Zh {
    constructor() {
      this.Ar = this.aC = this.YO = this.ZO = 0;
    }
    write(a) {
      a.Qb(this.Ar);
      a.Qb(this.aC);
      a.Qb(this.YO);
      a.Qb(this.ZO);
    }
  }
  Zh.i = !0;
  Object.assign(Zh.prototype, { j: Zh });
  class $h {
    constructor() {
      this.Vv = 0;
      this.Po = new Zh();
      this.Oo = new Yh();
      this.XV = new Cd();
      this.WV = new Cd();
      this.VV = new Cd();
      this.UV = new Cd();
      this.Uo =
        this.kk =
        this.Tv =
        this.Wv =
        this.FD =
        this.XO =
        this.cC =
        this.VO =
        this.Uv =
        this.RR =
          0;
    }
    write(a) {
      a.Qb(this.Uo);
      a.Qb(this.kk);
      a.Qb(this.Tv);
      a.Qb(this.Wv);
      a.Qb(this.FD);
      a.Qb(this.XO);
      a.Qb(this.cC);
      a.Qb(this.VO);
      a.Qb(this.Uv);
      a.Qb(this.RR);
      this.UV.write(a);
      this.VV.write(a);
      this.WV.write(a);
      this.XV.write(a);
      this.Oo.write(a);
      this.Po.write(a);
      a.Qb(this.Vv);
    }
  }
  $h.i = !0;
  Object.assign($h.prototype, { j: $h });
  class ai {
    constructor() {
      this.Qm = new Ua(17);
      this.jj = new Ua(17);
      this.OD = 0;
      this.Nm = null;
      this.Gs = 0;
      this.Dp = null;
    }
    init(a, b, c) {
      var d = new Ua(16);
      if (a == 0 || c > 11) return !1;
      let e = new Ua(17);
      for (var f = 0; f < a; ) {
        var g = b.data[f++];
        g != 0 && (e.data[g] += 1);
      }
      g = new Ua(17);
      var h = 0,
        l = 0;
      f = 0;
      for (var n = 2147483647, q = 1; q < 17; ) {
        var r = q++,
          u = e.data[r];
        u == 0
          ? (this.jj.data[r - 1] = 0)
          : (n >= r && (n = r),
            f <= r && (f = r),
            (d.data[r - 1] = h),
            (this.jj.data[r - 1] = h + u - 1),
            (this.jj.data[r - 1] =
              1 + ((this.jj.data[r - 1] << (16 - r)) | ((1 << (16 - r)) - 1))),
            (this.Qm.data[r - 1] = l),
            (g.data[r] = l),
            (h += u),
            (l += u));
        h <<= 1;
      }
      if (
        l > this.Gs &&
        ((this.Gs = l),
        ye.eR(l) || ((h = ye.AS(l)), (this.Gs = a < h ? a : h)),
        (this.Dp = new Ua(this.Gs)),
        this.Dp == null)
      )
        return !1;
      this.PD = n;
      for (n = 0; n < a; )
        ((h = n++),
          (l = b.data[h]),
          l != 0 &&
            ((q = g.data[l]), (g.data[l] = q + 1), (this.Dp.data[q] = h)));
      c <= this.PD && (c = 0);
      this.$R = c;
      if (c != 0) {
        a = 1 << c;
        if (a > this.OD) {
          this.OD = a;
          if (this.Nm != null) debugger;
          this.Nm = [];
          if (this.Nm == null) return !1;
        }
        a = 0;
        for (b = 1 << c; a < b; ) this.Nm[a++] = -1;
        a = 1;
        for (b = c + 1; a < b; ) {
          g = a++;
          if (e.data[g] == 0) continue;
          n = c - g;
          h = 1 << n;
          l = d.data[g - 1];
          q = this.Qm.data[g - 1];
          r = l;
          for (u = this.tQ(g) + 1; r < u; ) {
            let v = r++,
              A = this.Dp.data[q + v - l],
              D = 0;
            for (; D < h; ) this.Nm[D++ + (v << n)] = A | (g << 16);
          }
        }
      }
      for (a = 0; a < 16; ) ((b = a++), (this.Qm.data[b] -= d.data[b]));
      this.RD = 0;
      this.ox = this.PD;
      if (c != 0) {
        for (d = c; d >= 1; ) {
          if (e.data[d] != 0) {
            this.RD = this.jj.data[d - 1];
            break;
          }
          --d;
        }
        if (d >= 1)
          for (this.ox = c + 1, c += 1, d = f + 1; c < d; )
            if (((f = c++), e.data[f] != 0)) {
              this.ox = f;
              break;
            }
      }
      this.jj.data[16] = -1;
      this.Qm.data[16] = 1048575;
      return !0;
    }
    tQ(a) {
      let b = this.jj.data[a - 1];
      return b == 0 ? -1 : (b - 1) >> (16 - a);
    }
  }
  ai.i = !0;
  Object.assign(ai.prototype, { j: ai });
  class ye {
    static DV() {
      var a = 8192;
      let b = 0;
      for (; a > 0; ) ((a >>= 1), ++b);
      return b;
    }
    static XN(a) {
      let b = ye.qP(a);
      b != 32 && a > 1 << b && ++b;
      return b;
    }
    static qP(a) {
      let b = 0;
      for (; a > 1; ) ((a >>= 1), ++b);
      return b;
    }
    static eR(a) {
      return a != 0 ? (a & (a - 1)) == 0 : !1;
    }
    static AS(a) {
      --a;
      a |= a >> 16;
      a |= a >> 8;
      a |= a >> 4;
      a |= a >> 2;
      return (a | (a >> 1)) + 1;
    }
  }
  ye.i = !0;
  class bi {
    constructor() {}
    read(a) {
      let b = new Wh();
      var c = a.b.uv;
      a = a.length;
      var d = Ri(c, a);
      d == null
        ? (d = !1)
        : ((b.Lk = d.Lk),
          (b.Hk = d.Hk),
          (b.pf = d.pf),
          (b.Qe = d.Qe),
          (b.ue = d.ue),
          (b.TR = d.ue == 0 || d.ue == 9 ? 8 : 16),
          (b.Js = d.Js),
          (b.Ks = d.Ks),
          (d = !0));
      if (!d) throw 9;
      c == null || a < 62
        ? (c = null)
        : ((d = new vb()), (c = d.init(c, a) ? d : null));
      d = c;
      if (d == null) throw 10;
      c = new rg();
      c.Qb(542327876);
      a = new $h();
      a.Uo = 124;
      a.kk = 4103 | (b.pf > 1 ? 131072 : 0);
      a.Wv = b.Lk;
      a.Tv = b.Hk;
      a.cC = b.pf > 1 ? b.pf : 0;
      a.Oo.Uo = 32;
      a.Oo.kk = 4;
      a: {
        var e = b.ue;
        switch (e) {
          case 3:
          case 4:
          case 5:
          case 6:
            e = 2;
            break a;
        }
      }
      a.Oo.bC = Pi(e);
      e != b.ue && (a.Oo.dC = Pi(b.ue));
      a.Po.Ar = 4096;
      b.pf > 1 && (a.Po.Ar |= 4194312);
      b.Qe == 6 && (a.Po.aC = 65024);
      a.FD = (((a.Wv + 3) & -4) * ((a.Tv + 3) & -4) * Qi(b.ue)) >> 3;
      a.kk |= 524288;
      a.write(c);
      a = Array(6);
      for (e = 0; e < 6; ) a[e++] = Array(16);
      e = new Ua(16);
      for (var f = 0, g = b.pf; f < g; ) {
        var h = f++,
          l = b.Lk >> h,
          n = b.Hk >> h;
        l = ((1 < l ? l : 1) + 3) >> 2;
        var q = ((1 < n ? n : 1) + 3) >> 2;
        n = (1 < l ? l : 1) * ((Qi(b.ue) << 4) >> 3);
        l = n * (1 < q ? q : 1);
        e.data[h] = l;
        q = 0;
        for (var r = b.Qe; q < r; ) {
          var u = nb.init(l);
          a[q++][h] = u;
        }
        q = Array(6);
        r = 0;
        for (u = b.Qe; r < u; ) {
          let v = r++;
          q[v] = a[v][h];
        }
        if (
          d == null ||
          q == null ||
          l < 8 ||
          h >= 16 ||
          !d.iR() ||
          !d.MV(q, l, n, h)
        )
          throw 11;
      }
      d = 128;
      f = 0;
      for (g = b.Qe; f < g; )
        for (++f, h = 0, n = b.pf; h < n; ) d += e.data[h++];
      e = 0;
      for (f = b.Qe; e < f; )
        for (g = e++, h = 0, n = b.pf; h < n; ) a[g][h++].write(c);
      return c.Si().sub(0, d);
    }
  }
  bi.i = !0;
  Object.assign(bi.prototype, { j: bi });
  class Ob {
    constructor() {
      this.Pm = null;
      this.Tg = new Ua(0);
    }
    SE() {
      this.Ep = this.Tg.size;
      this.Pm == null && (this.Pm = new ai());
      return this.Pm.init(this.Ep, this.Tg, this.iO());
    }
    iO() {
      var a = 0;
      this.Ep > 16 && ((a = 1 + ye.XN(this.Ep)), (a = a < 11 ? a : 11));
      return a;
    }
    clear() {
      this.Ep = 0;
      this.Tg.clear();
      this.Pm != null && (this.Pm = null);
    }
  }
  Ob.i = !0;
  Object.assign(Ob.prototype, { j: Ob });
  class Xh {
    constructor() {}
    Gn(a, b) {
      if (b == 0) return !1;
      var c = new nb();
      c.ma = a.ma;
      c.p = a.p;
      c = new nb();
      c.ma = a.ma;
      c.p = a.p;
      this.Om = c;
      c = new nb();
      c.ma = a.ma;
      c.p = a.p + b;
      this.Is = c;
      this.oQ();
      return !0;
    }
    Ah(a) {
      let b = this.ik(ye.DV());
      if (b == 0) return (a.clear(), !0);
      if (!a.Tg.resize(b)) return !1;
      for (var c = 0; c < b; ) a.Tg.data[c++] = 0;
      var d = this.ik(5);
      if (d < 1 || d > 21) return !1;
      c = new Ob();
      if (!c.Tg.resize(21)) return !1;
      for (var e = 0; e < d; ) {
        var f = c.Tg;
        let g = fk[e++],
          h = this.ik(3);
        f.data[g] = h;
      }
      if (!c.SE()) return !1;
      for (d = 0; d < b; )
        if (((e = b - d), (f = this.decode(c)), f <= 16)) a.Tg.data[d++] = f;
        else if (f == 17) {
          f = this.ik(3) + 3;
          if (f > e) return !1;
          d += f;
        } else if (f == 18) {
          f = this.ik(7) + 11;
          if (f > e) return !1;
          d += f;
        } else if (f == 19 || f == 20) {
          f = f == 19 ? this.ik(2) + 3 : this.ik(6) + 7;
          if (d == 0 || f > e) return !1;
          e = a.Tg.data[d - 1];
          if (e == 0) return !1;
          for (f = d + f; d < f; ) a.Tg.data[d++] = e;
        } else return !1;
      return d != b ? !1 : a.SE();
    }
    ik(a) {
      return a == 0
        ? 0
        : a > 16
          ? (this.Ew(a - 16) << 16) | this.Ew(16)
          : this.Ew(a);
    }
    decode(a) {
      var b = a.Pm;
      if (this.Bd < 24)
        if (this.Bd < 16) {
          var c = 0,
            d = 0;
          let e = this.Om;
          e.p < this.Is.p && (c = e.ma[e.p++]);
          e.p < this.Is.p && (d = e.ma[e.p++]);
          this.Om = e;
          this.Bd += 16;
          this.se |= ((c << 8) | d) << (32 - this.Bd);
        } else
          (this.Om.p < this.Is.p ? ((c = this.Om), (c = c.ma[c.p++])) : (c = 0),
            (this.Bd += 8),
            (this.se |= c << (32 - this.Bd)));
      d = (this.se >>> 16) + 1;
      if (d <= b.RD)
        ((b = b.Nm[this.se >>> (32 - b.$R)]), (a = b & 65535), (c = b >> 16));
      else {
        for (c = b.ox; d > b.jj.data[c - 1]; ) ++c;
        d = b.Qm.data[c - 1] + (this.se >>> (32 - c));
        if (d >= a.Ep) return 0;
        a = b.Dp.data[d];
      }
      this.se <<= c;
      this.Bd -= c;
      return a;
    }
    oQ() {
      this.Bd = this.se = 0;
    }
    Ew(a) {
      for (; this.Bd < a; ) {
        var b = 0;
        this.Om.p != this.Is.p && ((b = this.Om), (b = b.ma[b.p++]));
        this.Bd += 8;
        this.se |= b << (32 - this.Bd);
      }
      b = this.se >>> (32 - a);
      this.se <<= a;
      this.Bd -= a;
      return b;
    }
  }
  Xh.i = !0;
  Object.assign(Xh.prototype, { j: Xh });
  class Ua {
    constructor(a) {
      a == null && (a = 0);
      this.data = [];
      this.size = 0;
      this.data = Array(a);
      let b = 0;
      for (; b < a; ) this.data[b++] = 0;
      this.size = a;
    }
    clear() {
      this.data.length = 0;
    }
    resize(a) {
      if (this.size != a) {
        if (a < this.size) for (; this.size > a; ) this.data.pop();
        else {
          let b = this.size;
          for (; b < a; ) this.data[b++] = 0;
        }
        this.size = a;
      }
      return !0;
    }
  }
  Ua.i = !0;
  Object.assign(Ua.prototype, { j: Ua });
  class sg {
    constructor(a, b) {
      this.frames = a;
      this.Sm = b;
    }
  }
  sg.i = !0;
  Object.assign(sg.prototype, { j: sg });
  class tg {
    constructor(a, b, c, d, e) {
      this.filename = a;
      this.frame = b;
      this.lG = c;
      this.lc = d;
      this.Bq = e;
    }
  }
  tg.i = !0;
  Object.assign(tg.prototype, { j: tg });
  class ug {
    constructor(a, b, c) {
      this.width = a;
      this.height = b;
      this.scale = c;
    }
  }
  ug.i = !0;
  Object.assign(ug.prototype, { j: ug });
  class Md {
    constructor() {}
    RT(a) {
      var b = JSON.parse(a);
      a = [];
      let c = 0,
        d = b.frames;
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        let f = e.frame,
          g = e.spriteSourceSize,
          h = e.sourceSize;
        a.push(
          new tg(
            e.filename,
            new Nb(f.x, f.y, f.w, f.h),
            new Nb(g.x, g.y, g.w, g.h),
            new Na(h.w, h.h),
            e.trimmed,
          ),
        );
      }
      b = b.meta;
      return new sg(a, new ug(b.size.w, b.size.h, parseFloat(b.scale)));
    }
    aF(a) {
      function b(h) {
        return new tg(
          h,
          new Nb(c.sc(), c.sc(), c.sc(), c.sc()),
          new Nb(c.sc(), c.sc(), c.sc(), c.sc()),
          new Na(c.sc(), c.sc()),
          c.N() == 1,
        );
      }
      let c = new $b(a);
      c.N();
      c.N();
      c.N();
      a = new ug(c.sc(), c.sc(), c.PT());
      let d = [],
        e = c.sc(),
        f = 0;
      for (; f < e; ) {
        var g = c.kt(c.sc());
        d.push(b(g));
        ++f;
      }
      e = c.sc();
      for (f = 0; f < e; ) {
        g = c.sc();
        let h = c.kt(c.sc()),
          l = 0;
        for (; l < g; ) {
          let n = "" + (l + 1);
          for (; n.length < 4; ) n = "0" + n;
          d.push(b(h + n));
          ++l;
        }
        ++f;
      }
      return new sg(d, a);
    }
  }
  Md.i = !0;
  Object.assign(Md.prototype, { j: Md });
  class gh {
    static om(a) {
      let b = 0,
        c = [],
        d = 0;
      for (a = a.frames; d < a.length; ) {
        let e = a[d];
        ++d;
        c.push(
          new se(b++, e.filename, e.lc, e.frame, e.Bq, new Na(e.lG.x, e.lG.y)),
        );
      }
      return c;
    }
  }
  gh.i = !0;
  class Ke extends qe {
    constructor(a) {
      super();
      this.Av = a;
      this.context = null;
      this.fullscreen = !1;
      this.sR = [];
      this.qp = new oa("(iPad|iPhone)", "g").match(ab.navigator.platform);
      this.Lo = new Na(-1, -1);
      this.jy = this.Mv = null;
      this.cV();
      this.$p = 1;
      this.Xj();
      a != null
        ? ((this.canvas = window.document.getElementById(a)),
          this.canvas == null &&
            ((this.canvas = window.document.createElement("canvas")),
            (this.canvas.id = a),
            window.document.body.appendChild(this.canvas)))
        : ((this.canvas = window.document.createElement("canvas")),
          (this.canvas.id = "gfx"),
          (this.canvas.style.position = "absolute"),
          (this.canvas.style.width = "100%"),
          (this.canvas.style.height = "100%"),
          (this.canvas.style.touchAction = "none"),
          (this.canvas.style.userSelect = "none"),
          (this.canvas.style.outline = "none"),
          this.canvas.style.setProperty("-webkit-user-select", "none"),
          (this.canvas.style.zIndex = "0"),
          window.document.body.appendChild(this.canvas),
          (this.canvas.tabIndex = 1),
          this.canvas.focus());
    }
    xk() {
      return window.devicePixelRatio;
    }
    cV() {
      this.jy != null && (this.jy.disconnect(), (this.jy = null));
      this.iV = !1;
    }
    FQ(a) {
      a == null && (a = { willReadFrequently: !1 });
      this.context = this.canvas.getContext("2d", a);
      this.canvas.addEventListener("contextlost", function () {});
      this.canvas.addEventListener("contextrestored", function () {});
    }
    LQ(a) {
      function b() {
        try {
          e.Tb.Ic(6);
        } catch (f) {}
      }
      function c(f) {
        f.preventDefault();
      }
      function d(f) {
        console.log(f.statusMessage || "Unknown error");
      }
      let e = this;
      this.addListener(this.canvas, "webglcontextcreationerror", d);
      this.addListener(this.canvas, "webglcontextlost", c);
      this.addListener(this.canvas, "webglcontextrestored", b);
      try {
        if (
          (a == null && (a = { stencil: !0 }),
          (this.context = this.canvas.getContext("webgl", a)) &&
            this.context instanceof WebGLRenderingContext)
        )
          return (qb.init(this.context), !0);
      } catch (f) {
        this.context = null;
      }
      this.canvas.removeEventListener("webglcontextcreationerror", d);
      this.canvas.removeEventListener("webglcontextlost", c);
      this.canvas.removeEventListener("webglcontextrestored", b);
      return !1;
    }
    Zo() {
      let a = this.Xi();
      return a.x / a.y;
    }
    getContext() {
      return this.context;
    }
    KU(a) {
      this.Lo = new Na(-1, -1);
      this.$p = a;
      this.update();
    }
    update() {
      this.ky = !1;
      var a = this.canvas.clientWidth;
      var b = this.canvas.clientHeight;
      if (
        a != 0 &&
        b != 0 &&
        (this.Mv != null && ((a = this.Mv.x), (b = this.Mv.y)),
        this.Lo.x != a || this.Lo.y != b)
      ) {
        var c = this.Lo;
        c.x = a;
        c.y = b;
        this.Qc.x = (a * this.xk()) | 0;
        this.Qc.y = (b * this.xk()) | 0;
        b = this.$p == 0 ? this.xk() : this.$p;
        a = (this.Qc.x / b) | 0;
        b = (this.Qc.y / b) | 0;
        this.canvas.width = a;
        this.canvas.height = b;
        this.vU(a, b);
        this.ky = !0;
        this.Tb.Ic(0);
      }
    }
    VQ() {
      try {
        return this.qp ? !1 : document.fullscreenEnabled;
      } catch (a) {
        return !1;
      }
    }
    Xj() {
      this.addListener(window, "contextmenu", function (b) {
        b.preventDefault();
      });
      window.oncontextmenu = function () {
        return !1;
      };
      let a = this;
      this.addListener(window.document, "visibilitychange", function () {
        a.visible = window.document.visibilityState == "visible";
        a.Tb.Ic(a.visible ? 1 : 2);
      });
      this.VQ() &&
        this.addListener(window.document, "fullscreenchange", function () {
          a.fullscreen = document.fullscreen;
          a.Tb.Ic(a.fullscreen ? 3 : 4);
        });
      if (this.qp)
        this.addListener(window, "orientationchange", function () {
          a.Tb.Ic(5);
          setInterval(function () {
            window.scrollTo(0, 1);
          }, 1);
        });
      else
        try {
          window.screen.orientation.onchange = function () {
            a.Tb.Ic(5);
            setTimeout(function () {
              let b = a.Lo;
              b.x = 0;
              b.y = 0;
            }, 1e3);
          };
        } catch (b) {}
    }
    addListener(a, b, c) {
      let d = {};
      d.target = a;
      d.type = b;
      d.listener = c;
      this.sR.push(d);
      a.addEventListener(b, c);
    }
  }
  Ke.i = !0;
  Ke.u = qe;
  Object.assign(Ke.prototype, { j: Ke });
  class Ji {}
  class Me extends eg {
    constructor(a, b) {
      b == null && (b = !1);
      a == null && (a = !0);
      super();
      this.gW = a;
      this.flipY = b;
    }
    load(a, b, c) {
      let d = this;
      this.decode(a, c)
        .then(function (e) {
          if (e instanceof ze) {
            d.data = e.ma;
            d.uD = !0;
            var f = d.size;
            f.x = e.w;
            f.y = e.J;
          } else
            ((d.data = e), (f = d.size), (f.x = e.width), (f.y = e.height));
          d.loaded = !0;
          b();
        })
        .catch(function () {});
    }
    mz() {
      if (this.loaded) {
        try {
          this.data instanceof HTMLImageElement
            ? (this.data.src =
                "data:image/gif;base64,vmwareR0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")
            : this.data instanceof HTMLCanvasElement
              ? ((this.data.width = 1), (this.data.height = 1))
              : this.data instanceof ImageBitmap && this.data.close();
        } catch (a) {}
        this.loaded = !1;
        this.data = null;
      }
    }
    decode(a, b) {
      if (a instanceof ArrayBuffer) {
        let d = new Uint32Array(a, 0, 16);
        (d[0] & 30792) == 30792 &&
          ((a = new bi().read(Ha.Xg(a)).b.uv), (d = new Uint32Array(a, 0, 16)));
        if (d[0] == 1481919403) return Promise.resolve(new ze(d[9], d[10], a));
        if (d[0] == 542327876) return Promise.resolve(new ze(d[4], d[3], a));
      }
      let c = this;
      return typeof a == "string"
        ? (b == null && (b = "image/png"),
          (a = a.replace(RegExp("\\s+", "g"), "")),
          this.decode(
            new Blob([new Uint8Array(Tc.decode(a).b.uv)], { type: b }),
          ))
        : a instanceof HTMLImageElement
          ? Promise.resolve(a)
          : a instanceof HTMLCanvasElement
            ? Promise.resolve(a)
            : this.gW
              ? window.createImageBitmap == null
                ? this.cu(a)
                : typeof a == "string"
                  ? this.cu(a).then(function (d) {
                      return c.IG(d);
                    })
                  : this.IG(a).then(null, function () {
                      return c.cu(a);
                    })
              : this.cu(a);
    }
    cu(a) {
      return new Promise(function (b, c) {
        let d = window.document.createElement("img");
        d.addEventListener("load", function () {
          b(d);
        });
        d.addEventListener("error", function (e) {
          c(e);
        });
        if (typeof a == "string") {
          debugger;
          d.src = a;
        } else d.src = URL.createObjectURL(a);
      });
    }
    IG(a) {
      return window.createImageBitmap(a, {
        imageOrientation: this.flipY ? "flipY" : "none",
        premultiplyAlpha: "default",
      });
    }
  }
  Me.i = !0;
  Me.u = eg;
  Object.assign(Me.prototype, { j: Me });
  class ze {
    constructor(a, b, c) {
      this.w = a;
      this.J = b;
      this.ma = c;
    }
  }
  ze.i = !0;
  Object.assign(ze.prototype, { j: ze });
  class Ae {}
  Ae.i = !0;
  Ae.bf = !0;
  Object.assign(Ae.prototype, { j: Ae });
  class Ra {
    constructor() {
      this.xz = this.Hh();
      this.eC = this.Kc();
    }
    init() {}
    Hh() {
      return 201;
    }
    Kc() {
      throw 12;
    }
  }
  Ra.i = !0;
  Ra.Lb = [Ae];
  Object.assign(Ra.prototype, { j: Ra });
  class Le extends yd {
    constructor() {
      function a() {
        let c = window.document
          .createElement("canvas")
          .getContext("2d", { alpha: !0, willReadFrequently: !0 });
        c.canvas.width = 1024;
        c.canvas.height = 1024;
        return c;
      }
      super("2d");
      this.KN = 0;
      this.fb = this.context = null;
      this.Fi = new tc();
      this.globalAlpha = 1;
      this.mask = this.wh = null;
      this.sD = !1;
      this.gk = 0;
      this.sz = new gb(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      this.globalCompositeOperation = null;
      var b = (this.gO = Array(5));
      b[0] = "source-over";
      b[1] = "source-over";
      b[2] = "multiply";
      b[3] = "lighter";
      b[4] = "screen";
      this.Jv = [null];
      for (b = 0; b < 3; ) {
        ++b;
        let c = a();
        this.Jv.push(c);
      }
      this.hS = a();
      new ia(Ba, Ba, Ca, Ca);
    }
    oq(a) {
      super.oq(a);
      this.context = a.getContext();
      this.Jv[0] = this.context;
    }
    clear(a) {
      super.clear();
      a == null && (a = this.clearColor);
      var b = this.$b;
      let c = this.viewport,
        d = (b.size.x * c.x) | 0,
        e = (b.size.y * c.y) | 0,
        f = (b.size.x * c.w) | 0;
      b = (b.size.y * c.J) | 0;
      this.clearRect(d, e, f, b);
      a.w != 0 &&
        (this.yj(
          "rgba(" +
            (((a.x * 255) | 0) & 255) +
            "," +
            (((a.y * 255) | 0) & 255) +
            "," +
            (((a.z * 255) | 0) & 255) +
            "," +
            a.w.toFixed(2) +
            ")",
        ),
        this.fillRect(d, e, f, b));
    }
    kj() {
      if (!super.kj()) return !1;
      this.fb = this.context;
      try {
        this.context.reset();
      } catch (a) {}
      this.fb.fillStyle = "#000000";
      this.globalAlpha = 1;
      this.pn();
      this.context.save();
      this.pz();
      return !0;
    }
    Ki() {
      for (super.Ki(); this.gk > 0; ) (this.fb.restore(), this.gk--);
      this.context.restore();
    }
    il(a, b, c, d) {
      super.il(a, b, c, d);
      for (this.pz(); this.gk > 0; ) (this.fb.restore(), this.gk--);
      this.resetTransform();
      if (a != 0 || b != 0 || c != 1 || d != 1)
        ((a = new Path2D()),
          (b = this.$b),
          (c = this.viewport),
          a.rect(
            (b.size.x * c.x) | 0,
            (b.size.y * c.y) | 0,
            (b.size.x * c.w) | 0,
            (b.size.y * c.J) | 0,
          ),
          this.fb.save(),
          this.fb.clip(a),
          this.gk++);
    }
    el(a) {
      super.el(a);
      this.pz();
    }
    bm(a) {
      var b = a.effect;
      if (b != null && b.enabled && a.ef != 1)
        if ((a.flags & 4) > 0)
          ((this.Mf = a),
            (a = this.globalAlpha),
            (this.globalAlpha = 0.75),
            this.To(b),
            (this.globalAlpha = a));
        else if (((this.Mf = a), this.$h(a), this.mask == null)) this.To(b);
        else {
          this.CC(a.effect.type, a.type);
          a = this.$b.size.x;
          var c = this.$b.size.y;
          this.fb = this.hS;
          this.Fy(a, c);
          this.To(b);
          this.yn(this.sD ? "destination-out" : "destination-in");
          b = this.vd;
          this.vd = 0;
          var d = this.Mf;
          this.Mf = this.mask;
          this.To(this.mask.effect);
          this.vd = b;
          this.Mf = d;
          b = this.fb.canvas;
          this.fb = this.context;
          this.yn("source-over");
          this.resetTransform();
          this.fb.drawImage(b, 0, 0, a, c, 0, 0, a, c);
        }
    }
    fp(a) {
      (a.L & 240) > 0 && a.ku();
      var b = a.lf;
      a = b.m11;
      let c = b.m12,
        d = b.m13,
        e = b.m14,
        f = b.m21,
        g = b.m22,
        h = b.m23,
        l = b.m24,
        n = b.m31,
        q = b.m32,
        r = b.m33,
        u = b.m34,
        v = b.m41,
        A = b.m42,
        D = b.m43;
      b = b.m44;
      var B = this.Db.Yk;
      let G = this.SB,
        E = this.sz,
        T = E.m11 * B.m11 + E.m12 * B.m21 + E.m13 * B.m31 + E.m14 * B.m41,
        S = E.m11 * B.m12 + E.m12 * B.m22 + E.m13 * B.m32 + E.m14 * B.m42,
        U = E.m11 * B.m13 + E.m12 * B.m23 + E.m13 * B.m33 + E.m14 * B.m43,
        Z = E.m11 * B.m14 + E.m12 * B.m24 + E.m13 * B.m34 + E.m14 * B.m44,
        ba = E.m21 * B.m11 + E.m22 * B.m21 + E.m23 * B.m31 + E.m24 * B.m41,
        ca = E.m21 * B.m12 + E.m22 * B.m22 + E.m23 * B.m32 + E.m24 * B.m42,
        W = E.m21 * B.m13 + E.m22 * B.m23 + E.m23 * B.m33 + E.m24 * B.m43,
        la = E.m21 * B.m14 + E.m22 * B.m24 + E.m23 * B.m34 + E.m24 * B.m44,
        pa = E.m31 * B.m11 + E.m32 * B.m21 + E.m33 * B.m31 + E.m34 * B.m41,
        ha = E.m31 * B.m12 + E.m32 * B.m22 + E.m33 * B.m32 + E.m34 * B.m42,
        aa = E.m31 * B.m13 + E.m32 * B.m23 + E.m33 * B.m33 + E.m34 * B.m43,
        wa = E.m31 * B.m14 + E.m32 * B.m24 + E.m33 * B.m34 + E.m34 * B.m44,
        Ea = E.m41 * B.m11 + E.m42 * B.m21 + E.m43 * B.m31 + E.m44 * B.m41,
        ya = E.m41 * B.m12 + E.m42 * B.m22 + E.m43 * B.m32 + E.m44 * B.m42,
        Ja = E.m41 * B.m13 + E.m42 * B.m23 + E.m43 * B.m33 + E.m44 * B.m43;
      B = E.m41 * B.m14 + E.m42 * B.m24 + E.m43 * B.m34 + E.m44 * B.m44;
      G.m11 = T * a + S * f + U * n + Z * v;
      G.m12 = T * c + S * g + U * q + Z * A;
      G.m13 = T * d + S * h + U * r + Z * D;
      G.m14 = T * e + S * l + U * u + Z * b;
      G.m21 = ba * a + ca * f + W * n + la * v;
      G.m22 = ba * c + ca * g + W * q + la * A;
      G.m23 = ba * d + ca * h + W * r + la * D;
      G.m24 = ba * e + ca * l + W * u + la * b;
      G.m31 = pa * a + ha * f + aa * n + wa * v;
      G.m32 = pa * c + ha * g + aa * q + wa * A;
      G.m33 = pa * d + ha * h + aa * r + wa * D;
      G.m34 = pa * e + ha * l + aa * u + wa * b;
      G.m41 = Ea * a + ya * f + Ja * n + B * v;
      G.m42 = Ea * c + ya * g + Ja * q + B * A;
      G.m43 = Ea * d + ya * h + Ja * r + B * D;
      G.m44 = Ea * e + ya * l + Ja * u + B * b;
      return G;
    }
    Wi(a) {
      (a.L & 64) > 0 && a.Jn();
      var b = a.lf;
      a = b.m11;
      let c = b.m12;
      var d = b.m14;
      let e = b.m21,
        f = b.m22,
        g = b.m24;
      b = this.rO;
      let h = this.sz,
        l = this.Db.Yk,
        n = h.m11 * l.m11 + h.m12 * l.m21,
        q = h.m11 * l.m12 + h.m12 * l.m22,
        r = h.m21 * l.m11 + h.m22 * l.m21,
        u = h.m21 * l.m12 + h.m22 * l.m22,
        v = n * d + q * g + (h.m11 * l.m14 + h.m12 * l.m24 + h.m14);
      d = r * d + u * g + (h.m21 * l.m14 + h.m22 * l.m24 + h.m24);
      b.m11 = n * a + q * e;
      b.m12 = n * c + q * f;
      b.m14 = v;
      b.m21 = r * a + u * e;
      b.m22 = r * c + u * f;
      b.m24 = d;
      return b;
    }
    Jy(a) {
      this.Pa(a.El);
    }
    vy(a) {
      this.wh = a.wh;
      this.context.globalCompositeOperation = this.gO[this.wh];
    }
    yy(a) {
      this.Fi = a.transform;
    }
    Hy(a) {
      this.mask = a.xa;
      this.sD = a.TQ;
      let b = a.Ev;
      if (b != null) {
        this.fb.save();
        this.resetTransform();
        this.gk++;
        a = this.Wi(a.$s.Ia);
        let e = new Path2D();
        var c = b[0],
          d = new F(
            a.m11 * c.x + a.m12 * c.y + a.m14,
            a.m21 * c.x + a.m22 * c.y + a.m24,
            0,
            1,
          );
        e.moveTo(d.x, d.y);
        for (c = 1; c < b.length; ) {
          d = b[c++];
          let f = a;
          d = new F(
            f.m11 * d.x + f.m12 * d.y + f.m14,
            f.m21 * d.x + f.m22 * d.y + f.m24,
            0,
            1,
          );
          e.lineTo(d.x, d.y);
        }
        e.closePath();
        this.fb.clip(e);
      } else this.gk > 0 && this.fb.restore();
    }
    pz() {
      let a = this.$b,
        b = this.viewport,
        c = ((a.size.x * b.w) | 0) / 2,
        d = ((a.size.y * b.J) | 0) / 2;
      this.$b.iV && ((c |= 0), (d |= 0));
      let e = this.sz;
      e.m11 = c;
      e.m12 = 0;
      e.m13 = 0;
      e.m14 = c + ((a.size.x * b.x) | 0);
      e.m21 = 0;
      e.m22 = -d;
      e.m23 = 0;
      e.m24 = d + ((a.size.y * b.y) | 0);
    }
    Qw(a) {
      return new Dd(this, a);
    }
    Pa(a) {
      this.globalAlpha = a;
      this.context.globalAlpha = a;
    }
    nq(a) {
      this.fb = this.Jv[a];
    }
    Fy(a, b) {
      let c = this.fb.canvas,
        d = c.width,
        e = c.height,
        f = !1,
        g = this.$b.size;
      if (d > g.x || e > g.y) ((c.width = g.x), (c.height = g.y));
      if (d < a || e < b) f = !0;
      else
        try {
          this.fb.reset();
        } catch (h) {
          f = !0;
        }
      f && ((c.width = a), (c.height = b));
    }
    drawImage(a, b, c, d, e, f, g, h, l) {
      this.fb.drawImage(a, b, c, d, e, f, g, h, l);
    }
    yj(a) {
      this.fb.fillStyle = a;
    }
    TF(a) {
      this.fb.strokeStyle = a;
    }
    yn(a) {
      let b = this.fb;
      b.globalCompositeOperation != a && (b.globalCompositeOperation = a);
    }
    resetTransform() {
      this.fb.setTransform(1, 0, 0, 1, 0, 0);
    }
    fl(a) {
      a = this.Wi(a);
      this.fb.setTransform(a.m11, a.m21, a.m12, a.m22, a.m14, a.m24);
    }
    clearRect(a, b, c, d) {
      this.fb.clearRect(a, b, c, d);
    }
    fillRect(a, b, c, d) {
      this.fb.fillRect(a, b, c, d);
    }
    iB(a, b, c, d, e) {
      this.fb.globalAlpha = 1;
      var f = this.Ti(2);
      this.nq(1);
      this.Fy(d, e);
      this.yn("copy");
      var g = f.transform;
      var h = g.fc;
      f = g.offset;
      switch (g.hint) {
        case 0:
          this.drawImage(a, b, c, d, e, 0, 0, d, e);
          this.GN(this.fb, g, d, e);
          break;
        case 1:
          this.fb.globalAlpha = g.fc.w;
          this.drawImage(a, b, c, d, e, 0, 0, d, e);
          break;
        case 2:
          var l = 1 - h.x;
          f = f.x == 0 ? (h = g = 0) : (h = g = 1);
          this.yj(
            "rgba(" +
              (((g * 255) | 0) & 255) +
              "," +
              (((h * 255) | 0) & 255) +
              "," +
              (((f * 255) | 0) & 255) +
              "," +
              l.toFixed(2) +
              ")",
          );
          this.fillRect(0, 0, d, e);
          this.yn("destination-atop");
          this.drawImage(a, b, c, d, e, 0, 0, d, e);
          break;
        case 3:
          ((l = 1 - h.x),
            (g = f.x / l),
            (h = f.y / l),
            (f = f.z / l),
            this.yj(
              "rgba(" +
                (((g * 255) | 0) & 255) +
                "," +
                (((h * 255) | 0) & 255) +
                "," +
                (((f * 255) | 0) & 255) +
                "," +
                l.toFixed(2) +
                ")",
            ),
            this.fillRect(0, 0, d, e),
            this.yn("destination-atop"),
            this.drawImage(a, b, c, d, e, 0, 0, d, e));
      }
      a = this.fb.canvas;
      this.nq(0);
      return a;
    }
    hB(a, b, c, d, e) {
      this.nq(2);
      this.Fy(d, e);
      this.yj(Ki);
      this.fillRect(0, 0, d, e);
      this.fb.globalAlpha = this.globalAlpha;
      this.yn("screen");
      this.drawImage(a, b, c, d, e, 0, 0, d, e);
      this.fillRect(0, 0, d, e);
      a = this.fb.canvas;
      this.nq(0);
      return a;
    }
    GN(a, b, c, d) {
      c = a.getImageData(0, 0, c, d);
      d = c.data;
      let e = 0,
        f = d.length;
      var g = b.fc,
        h = b.offset;
      b = g.x;
      let l = g.y,
        n = g.z;
      g = g.w;
      let q = h.x,
        r = h.y,
        u = h.z;
      h = h.w;
      let v;
      for (; e < f; )
        ((v = d[e + 3]),
          (d[e] = ((d[e] / v) * b + q) * 255),
          ++e,
          (d[e] = ((d[e] / v) * l + r) * 255),
          ++e,
          (d[e] = ((d[e] / v) * n + u) * 255),
          ++e,
          (d[e] = ((v / 255) * g + h) * 255),
          ++e);
      a.putImageData(c, 0, 0);
    }
    FF(a) {
      this.fb.imageSmoothingEnabled = a;
    }
  }
  Le.i = !0;
  Le.u = yd;
  Object.assign(Le.prototype, { j: Le });
  class Dd extends zd {
    constructor(a, b) {
      super(a, b);
    }
  }
  Dd.i = !0;
  Dd.u = zd;
  Object.assign(Dd.prototype, { j: Dd });
  class vg extends Ac {
    constructor() {
      super();
    }
    dB(a, b, c) {
      var d = this.pp;
      let e = d.A,
        f = d.F,
        g = d.C;
      d = d.H;
      switch (a) {
        case 10:
          var h = c[b];
          a = c[b + 1];
          var l = c[b + 2];
          c = c[b + 3];
          h < e && (e = h);
          h > g && (g = h);
          a < f && (f = a);
          a > d && (d = a);
          h += l;
          c = a + c;
          h < e && (e = h);
          h > g && (g = h);
          c < f && (f = c);
          c > d && (d = c);
          b += 4;
          break;
        case 11:
          h = c[b];
          a = c[b + 1];
          l = c[b + 2];
          c = c[b + 3];
          h < e && (e = h);
          h > g && (g = h);
          a < f && (f = a);
          a > d && (d = a);
          h += l;
          c = a + c;
          h < e && (e = h);
          h > g && (g = h);
          c < f && (f = c);
          c > d && (d = c);
          b += 5;
          break;
        case 12:
          a = c[b];
          h = c[b + 1];
          a < e && (e = a);
          a > g && (g = a);
          h < f && (f = h);
          h > d && (d = h);
          a = c[b + 2];
          c = c[b + 3];
          a < e && (e = a);
          a > g && (g = a);
          c < f && (f = c);
          c > d && (d = c);
          b += 4;
          break;
        case 13:
          a = c[b];
          h = c[b + 1];
          a < e && (e = a);
          a > g && (g = a);
          h < f && (f = h);
          h > d && (d = h);
          a = c[b + 2];
          h = c[b + 3];
          a < e && (e = a);
          a > g && (g = a);
          h < f && (f = h);
          h > d && (d = h);
          a = c[b + 4];
          c = c[b + 5];
          a < e && (e = a);
          a > g && (g = a);
          c < f && (f = c);
          c > d && (d = c);
          b += 6;
          break;
        case 14:
          h = c[b];
          a = c[b + 1];
          c = c[b + 2];
          l = h - c;
          var n = a - c;
          l < e && (e = l);
          l > g && (g = l);
          n < f && (f = n);
          n > d && (d = n);
          h += c;
          c = a + c;
          h < e && (e = h);
          h > g && (g = h);
          c < f && (f = c);
          c > d && (d = c);
          b += 5;
          break;
        case 15:
          h = c[b];
          a = c[b + 1];
          c = Math.max(c[b + 2], c[b + 3]);
          l = h - c;
          n = a - c;
          l < e && (e = l);
          l > g && (g = l);
          n < f && (f = n);
          n > d && (d = n);
          h += c;
          c = a + c;
          h < e && (e = h);
          h > g && (g = h);
          c < f && (f = c);
          c > d && (d = c);
          b += 8;
          break;
        case 16:
          ++b;
          break;
        case 17:
          b += 1 + (c[b] | 0);
      }
      c = this.pp;
      c.A = e;
      c.F = f;
      c.C = g;
      c.H = d;
      return b;
    }
    Ba() {
      return 1305;
    }
  }
  vg.i = !0;
  vg.u = Ac;
  Object.assign(vg.prototype, { j: vg });
  class bf extends Ra {
    constructor() {
      super();
    }
    O(a) {
      let b = a.W,
        c = a.effect;
      var d = c.Kb;
      if (d.cs()) {
        var e = d.image.data,
          f = d.size.x,
          g = d.size.y,
          h = b.globalAlpha;
        b.FF((d.flags & 8) > 0);
        (b.vd & 4) > 0 && (e = b.iB(e, 0, 0, f, g));
        (b.vd & 1) > 0 && b.wh == 0 && ((e = b.hB(e, 0, 0, f, g)), (h = 1));
        b.Pa(h);
        b.nq(0);
        b.fl(a.xa.Ia);
        g = c.ih.kf;
        a = c.Kb.nc.jm;
        d = g.P;
        f = 0;
        g = ((g.da / 5) | 0) * 5;
        h = c.size;
        var l = h.x,
          n = h.y;
        h = c.zk;
        var q = l - h,
          r = n - h,
          u = null;
        c.clip &&
          ((u = b.fb), u.save(), u.rect(h, h, l - 2 * h, n - 2 * h), u.clip());
        for (l = c.multiline; f < g; ) {
          var v = d[f++];
          n = d[f++];
          let A = d[f++],
            D = d[f++],
            B = f++;
          v = a[v].Wd;
          if (l) {
            if (A > r) break;
          } else if (n > q) break;
          n + D > h && b.drawImage(e, v.x, v.y, v.w, v.J, n, A, D, d[B]);
        }
        c.clip && u.restore();
      }
    }
    Kc() {
      return 505;
    }
    Hh() {
      return 401;
    }
  }
  bf.i = !0;
  bf.u = Ra;
  Object.assign(bf.prototype, { j: bf });
  class gf extends Ra {
    constructor() {
      super();
    }
    O(a) {
      var b = a.W;
      let c = a.effect;
      this.Ei = a.W.$b.getContext();
      this.Ei.lineWidth = 1;
      b.fl(a.xa.Ia);
      a = 0;
      for (b = c.points.length; a < b; ) {
        var d = a++;
        this.Ei.globalAlpha = c.no[d];
        this.Ei.lineWidth = 2 * c.aa;
        let f = new Path2D(),
          g = c.points[d];
        d = c.Di[d];
        let h = 0,
          l = g.length;
        for (; h < l; ) {
          let n = h++;
          var e = d[n];
          this.Ei.strokeStyle =
            "rgba(" +
            (((e.x * 255) | 0) & 255) +
            "," +
            (((e.y * 255) | 0) & 255) +
            "," +
            (((e.z * 255) | 0) & 255) +
            "," +
            e.w.toFixed(2) +
            ")";
          e = g[n].x;
          let q = g[n].y;
          n == 0 ? f.moveTo(e, q) : f.lineTo(e, q);
        }
        this.Ei.stroke(f);
      }
    }
    Kc() {
      return 705;
    }
  }
  gf.i = !0;
  gf.u = Ra;
  Object.assign(gf.prototype, { j: gf });
  class cf extends Ra {
    constructor() {
      super();
    }
    O(a) {
      let b = a.W;
      var c = a.effect,
        d = a.xa;
      b.fl(a.xa.Ia);
      a = c.color;
      if ((b.vd & 4) > 0) {
        var e = b.Fi;
        c = c.color;
        a = e.fc;
        let f = e.offset;
        e = c.x * a.x + f.x;
        let g = c.y * a.y + f.y,
          h = c.z * a.z + f.z;
        c = c.w * a.w + f.w;
        a = new F(
          e < 0 ? 0 : e > 1 ? 1 : e,
          g < 0 ? 0 : g > 1 ? 1 : g,
          h < 0 ? 0 : h > 1 ? 1 : h,
          c < 0 ? 0 : c > 1 ? 1 : c,
        );
      }
      b.Pa(b.globalAlpha);
      b.yj(
        "rgba(" +
          (((a.x * 255) | 0) & 255) +
          "," +
          (((a.y * 255) | 0) & 255) +
          "," +
          (((a.z * 255) | 0) & 255) +
          "," +
          a.w.toFixed(2) +
          ")",
      );
      d = d.size;
      b.fillRect(0, 0, d.x, d.y);
    }
    Kc() {
      return 1205;
    }
    Hh() {
      return 401;
    }
  }
  cf.i = !0;
  cf.u = Ra;
  Object.assign(cf.prototype, { j: cf });
  class df extends Ra {
    constructor() {
      super();
    }
    O(a) {
      let b = a.W;
      var c = a.effect,
        d = b.$b.size;
      a = d.x;
      d = d.y;
      b.resetTransform();
      b.Pa(b.globalAlpha);
      let e = 0,
        f = 0,
        g = c.lt;
      g != null && ((e = g.A), (f = g.F), (a = g.C - g.A), (d = g.H - g.F));
      c = c.color;
      b.yj(
        "rgba(" +
          (((c.x * 255) | 0) & 255) +
          "," +
          (((c.y * 255) | 0) & 255) +
          "," +
          (((c.z * 255) | 0) & 255) +
          "," +
          c.w.toFixed(2) +
          ")",
      );
      b.fillRect(e, f, a, d);
    }
    Kc() {
      return 305;
    }
  }
  df.i = !0;
  df.u = Ra;
  Object.assign(df.prototype, { j: df });
  class ff extends Ra {
    constructor() {
      super();
    }
    init(a) {
      super.init(a);
    }
    O(a) {
      let b = a.W;
      var c = a.effect;
      this.Ei = a.W.$b.getContext();
      b.fl(a.xa.Ia);
      a = 0;
      for (c = c.iu; a < c.length; ) this.lP(c[a++]);
    }
    lP(a) {
      let b = a[0];
      if (a.length != 0) {
        var c = new Path2D();
        c.moveTo(b.x, b.y);
        for (var d = 1, e = a.length; d < e; )
          ((b = a[d]), c.lineTo(b.x, b.y), (d += 2));
        for (d = a.length - 2; d >= 0; )
          ((b = a[d]), c.lineTo(b.x, b.y), (d -= 2));
        c.closePath();
        this.Ei.fillStyle = "#ffffffff";
        this.Ei.fill(c);
      }
    }
    Kc() {
      return 1105;
    }
  }
  ff.i = !0;
  ff.u = Ra;
  Object.assign(ff.prototype, { j: ff });
  class hf extends Ra {
    constructor() {
      super();
    }
    O(a) {
      var b = a.effect;
      a.W.fl(a.xa.Ia);
      a = a.W.$b.getContext();
      a.lineWidth = b.lineWidth;
      a.globalAlpha = 1;
      var c = b.color;
      a.strokeStyle =
        "rgba(" +
        (((c.x * 255) | 0) & 255) +
        "," +
        (((c.y * 255) | 0) & 255) +
        "," +
        (((c.z * 255) | 0) & 255) +
        "," +
        c.w.toFixed(2) +
        ")";
      c = b.Sp;
      let d = 2 * Math.PI,
        e = d / c,
        f = b.D.x,
        g = b.D.y;
      b = b.aa;
      let h = 0;
      for (; h < c; ) {
        var l = h++;
        if ((l & 1) == 1) continue;
        l = (l / c) * d;
        a.beginPath();
        a.arc(f, g, b, l, l + e, !1);
        a.stroke();
        a.closePath();
      }
    }
    Kc() {
      return 605;
    }
  }
  hf.i = !0;
  hf.u = Ra;
  Object.assign(hf.prototype, { j: hf });
  class ef extends Ra {
    constructor() {
      super();
      this.oU = new F(0, 0, 0, 0);
      this.gV = !1;
    }
    O(a) {
      var b = a.effect;
      let c = a.W,
        d = (c.vd & 1) > 0 && c.wh == 0 ? 1 : 0,
        e = (c.vd & 4) > 0 ? c.Fi : null,
        f = b.jT,
        g = !1,
        h = !1,
        l = !1,
        n = 0,
        q = b.Hv,
        r = b.data,
        u = 0,
        v = 0;
      let A;
      b = b.Iv;
      if (b != 0) {
        var D = c.fb;
        this.gV
          ? c.resetTransform()
          : ((a = c.Wi(a.xa.Ia)),
            D.setTransform(a.m11, a.m21, a.m12, a.m22, a.m14, a.m24));
        a = !1;
        for (var B = new Path2D(); u < b; )
          switch (q[u++]) {
            case 1:
              var G = r[v++];
              A = r[v++];
              B.moveTo(G, A);
              break;
            case 2:
              G = r[v++];
              A = r[v++];
              B.lineTo(G, A);
              break;
            case 3:
              v++;
              v++;
              B.closePath();
              break;
            case 4:
              c.TF(this.zC(r[v++], Math.min(r[v++] + d, 1), e));
              n = r[v++] | 0;
              D.lineWidth = n;
              l = h == 0;
              g = !0;
              break;
            case 5:
              c.yj(this.zC(r[v++], Math.min(r[v++] + d, 1), e));
              l = g;
              h = !0;
              break;
            case 6:
              g = !1;
              c.TF(Ki);
              D.lineWidth = 1;
              break;
            case 7:
              h = !1;
              c.yj(Ki);
              break;
            case 8:
              G = g && f && (n & 1) == 1;
              a
                ? G || (D.translate(-0.5, -0.5), (a = !1))
                : G && (D.translate(0.5, 0.5), (a = !0));
              g && h
                ? l
                  ? (D.stroke(B), D.fill(B))
                  : (D.fill(B), D.stroke(B))
                : g
                  ? D.stroke(B)
                  : h && D.fill(B);
              u < b - 1 && (B = new Path2D());
              break;
            default:
              v = 0;
          }
      }
    }
    Kc() {
      return 1005;
    }
    zC(a, b, c) {
      if (c != null) {
        var d = this.oU;
        d.x = ((a >> 16) & 255) / 255;
        d.y = ((a >> 8) & 255) / 255;
        d.z = (a & 255) / 255;
        d.w = b;
        a = c.fc;
        c = c.offset;
        let e = d;
        d = e.x * a.x + c.x;
        b = e.y * a.y + c.y;
        let f = e.z * a.z + c.z;
        a = e.w * a.w + c.w;
        d = new F(
          d < 0 ? 0 : d > 1 ? 1 : d,
          b < 0 ? 0 : b > 1 ? 1 : b,
          f < 0 ? 0 : f > 1 ? 1 : f,
          a < 0 ? 0 : a > 1 ? 1 : a,
        );
        return (
          "rgba(" +
          (((d.x * 255) | 0) & 255) +
          "," +
          (((d.y * 255) | 0) & 255) +
          "," +
          (((d.z * 255) | 0) & 255) +
          "," +
          d.w.toFixed(2) +
          ")"
        );
      }
      a |= ((b * 255) | 0) << 24;
      c = Ji.$z;
      return (
        "#" + c[(a >> 16) & 255] + c[(a >> 8) & 255] + c[a & 255] + c[a >>> 24]
      );
    }
  }
  ef.i = !0;
  ef.u = Ra;
  Object.assign(ef.prototype, { j: ef });
  class F {
    constructor(a, b, c, d) {
      this.x = a;
      this.y = b;
      this.z = c;
      this.w = d;
    }
  }
  F.i = !0;
  Object.assign(F.prototype, { j: F });
  class jf extends Ra {
    constructor() {
      super();
    }
    O(a) {
      let b = a.effect;
      a.W.fl(a.xa.Ia);
      a = a.W.$b.getContext();
      a.lineWidth = b.lineWidth;
      a.globalAlpha = b.Ds;
      a.strokeStyle = "#ffffff";
      a.beginPath();
      a.arc(0, 0, b.aa + b.lineWidth / 2, 0, Math.PI * 2, !1);
      a.stroke();
      a.closePath();
    }
    Kc() {
      return 905;
    }
  }
  jf.i = !0;
  jf.u = Ra;
  Object.assign(jf.prototype, { j: jf });
  class af extends Ra {
    constructor() {
      super();
    }
    O(a) {
      var b = a.effect;
      let c = a.W;
      var d = a.xa,
        e = b.Kb;
      if (e.cs()) {
        c.FF((e.flags & 8) > 0);
        a = e.image.data;
        var f = d.size,
          g = f.x;
        f = f.y;
        c.fl(d.Ia);
        d = b.xq;
        var h = d.x;
        var l = d.y;
        var n = d.w,
          q = d.J,
          r = c.globalAlpha;
        (c.vd & 4) > 0 && ((a = c.iB(a, h, l, n, q)), (h = l = 0));
        (c.vd & 1) > 0 &&
          c.wh == 0 &&
          ((a = c.hB(a, h, l, n, q)), (h = l = 0), (r = 1));
        d = (1 / c.Db.Mn.m11) * c.KN;
        if (b.nn == 1 && b.fq == 1 && b.offsetX == 0 && b.offsetY == 0)
          (c.Pa(r),
            c.drawImage(a, h, l, n, q, 0 - d, 0 - d, g + 2 * d, f + 2 * d));
        else {
          var u = 0,
            v = b.offsetX,
            A = b.offsetY;
          v != 0 && (u = 1);
          A != 0 && (u |= 2);
          b.nn != 1 && (u |= 4);
          b.fq != 1 && (u |= 8);
          if (u == 1)
            ((v %= 1),
              v < 0 && ++v,
              (e = n * v),
              (b = g * v),
              c.drawImage(
                a,
                h + e,
                l,
                n - e,
                q,
                0 - d,
                0 - d,
                g - b + 2 * d,
                f + 2 * d,
              ),
              c.drawImage(
                a,
                h,
                l,
                e,
                q,
                g - e - d,
                0 - d,
                b + 2 * d,
                f + 2 * d,
              ));
          else if (u == 2)
            ((A %= 1),
              A < 0 && ++A,
              (e = q * A),
              (b = f * A),
              c.drawImage(
                a,
                h,
                l + e,
                n,
                q - e,
                0 - d,
                0 - d,
                g + 2 * d,
                f - b + 2 * d,
              ),
              c.drawImage(
                a,
                h,
                l,
                n,
                e,
                0 - d,
                f - e - d,
                g + 2 * d,
                b + 2 * d,
              ));
          else {
            c.Pa(r);
            h = e.size.x;
            l = e.size.y;
            g = b.nn;
            var D = b.fq;
            f = c.fb;
            f.save();
            n = new Path2D();
            n.rect(0, 0, h, l);
            f.clip(n);
            h = e.size.x;
            l = e.size.y;
            n = h / g;
            q = l / D;
            v = 1 / g;
            A = 1 / D;
            r = b.offsetX;
            var B = b.offsetY;
            b = r % 1;
            b < 0 && ++b;
            b = -b;
            var G = B % 1;
            G < 0 && ++G;
            G = -G;
            var E;
            u = n + 2 * d;
            var T = q + 2 * d;
            if ((e.flags & 4) > 0)
              for (
                e = ((B | 0) & 1) == 1 ? 1 : -1,
                  B >= 0 && (e *= -1),
                  B = G * q,
                  D = G / D;
                D < 1;
              ) {
                G = D + A;
                let S = ((r | 0) & 1) == 1 ? -1 : 1;
                r >= 0 && (S *= -1);
                D = b * n;
                for (E = b / g; E < 1; )
                  ((E += v),
                    f.save(),
                    f.scale(S, e),
                    S > 0
                      ? e > 0
                        ? c.drawImage(a, 0, 0, h, l, D - d, B - d, u, T)
                        : c.drawImage(a, 0, 0, h, l, D - d, -B - q - d, u, T)
                      : e > 0
                        ? c.drawImage(a, 0, 0, h, l, -D - n - d, B - d, u, T)
                        : c.drawImage(
                            a,
                            0,
                            0,
                            h,
                            l,
                            -D - n - d,
                            -B - q - d,
                            u,
                            T,
                          ),
                    f.restore(),
                    (S = -S),
                    (D += n));
                e = -e;
                B += q;
                D = G;
              }
            else
              for (B = G * q, D = G / D; D < 1; ) {
                G = D + A;
                D = b * n;
                for (E = b / g; E < 1; )
                  ((E += v),
                    c.drawImage(
                      a,
                      0,
                      0,
                      h,
                      l,
                      D - d,
                      B - d,
                      n + 2 * d,
                      q + 2 * d,
                    ),
                    (D += n));
                B += q;
                D = G;
              }
            f.restore();
          }
        }
      }
    }
    Kc() {
      return 205;
    }
    Hh() {
      return 401;
    }
  }
  af.i = !0;
  af.u = Ra;
  Object.assign(af.prototype, { j: af });
  class gb {
    constructor(a, b, c, d, e, f, g, h, l, n, q, r, u, v, A, D) {
      this.m11 = a;
      this.m12 = b;
      this.m13 = c;
      this.m14 = d;
      this.m21 = e;
      this.m22 = f;
      this.m23 = g;
      this.m24 = h;
      this.m31 = l;
      this.m32 = n;
      this.m33 = q;
      this.m34 = r;
      this.m41 = u;
      this.m42 = v;
      this.m43 = A;
      this.m44 = D;
    }
  }
  gb.i = !0;
  Object.assign(gb.prototype, { j: gb });
  class vj {}
  class wg {
    static AC(a) {
      return wg.BB[a >> 2];
    }
  }
  class jc {
    constructor() {
      this.tj = this.S = this.W = null;
      this.xB = [];
      this.wd = [];
    }
    init(a) {
      this.W = a;
      this.S = this.W.S;
      this.createProgram() && this.fh();
    }
    use() {
      this.W.TB != this && ((this.W.TB = this), this.S.useProgram(this.tj));
    }
    drawArrays(a, b, c) {
      c == null && (c = 0);
      if (a != 0) {
        for (var d = 0, e = this.xB; d < e.length; ) e[d++].bind();
        this.S.drawArrays(b, c, a);
      }
    }
    Ie(a, b) {
      var c, d;
      d == null && (d = !1);
      c == null && (c = -1);
      if (a == -1) this.wd.push(new ob(a, null, !1, b, c));
      else {
        var e = Ma.find(this.wd, function (f) {
          return f.location == a;
        });
        e.type = b;
        e.usage = c;
        e.normalize = d;
      }
    }
    Eg(a, b) {
      for (var c = 0, d = 0, e = this.wd; d < e.length; ) {
        var f = e[d];
        ++d;
        f.location > c && (c = f.location);
      }
      c = new ci(c + 1);
      d = 0;
      for (e = this.wd; d < e.length; )
        ((f = e[d]), ++d, c.BN(f.location, f.type, f.usage, f.normalize));
      c.seal();
      a = new Ed(this.S, a, c, b);
      this.xB.push(a);
      return a;
    }
    createProgram() {
      let a = this.S,
        b = this.ND(35633, this.Mg()),
        c = this.ND(35632, this.Kg());
      this.tj = a.createProgram();
      a.attachShader(this.tj, b);
      a.attachShader(this.tj, c);
      a.linkProgram(this.tj);
      return !0;
    }
    ND(a, b) {
      let c = this.S;
      a = this.S.createShader(a);
      c.shaderSource(a, b);
      c.compileShader(a);
      return a;
    }
    Mg() {
      return null;
    }
    Kg() {
      return null;
    }
    hf(a) {
      return this.S.getAttribLocation(this.tj, a);
    }
    getUniformLocation(a) {
      return this.S.getUniformLocation(this.tj, a);
    }
    Jj(a, b) {
      let c = jc.HG;
      c[0] = b.m11;
      c[4] = b.m12;
      c[8] = b.m13;
      c[12] = b.m14;
      c[1] = b.m21;
      c[5] = b.m22;
      c[9] = b.m23;
      c[13] = b.m24;
      c[2] = b.m31;
      c[6] = b.m32;
      c[10] = b.m33;
      c[14] = b.m34;
      c[3] = b.m41;
      c[7] = b.m42;
      c[11] = b.m43;
      c[15] = b.m44;
      this.S.uniformMatrix4fv(a, !1, jc.HG);
    }
    TG(a, b) {
      this.S.activeTexture(33984);
      this.S.bindTexture(3553, b);
      this.S.uniform1i(a, 0);
    }
    fh() {}
  }
  jc.i = !0;
  Object.assign(jc.prototype, { j: jc });
  class ob {
    constructor(a, b, c, d, e) {
      this.location = a;
      this.name = b;
      this.normalize = c;
      this.type = d;
      this.usage = e;
    }
  }
  ob.i = !0;
  Object.assign(ob.prototype, { j: ob });
  class xg extends jc {
    constructor(a) {
      super();
      this.init(a);
      this.Ie(this.Wq, 17);
      this.Ga = this.Eg(4, 2);
      this.Ga.setData(this.Wq, [0, 1, 1, 1, 0, 0, 1, 0]);
      this.Od = [];
    }
    TO(a) {
      this.use();
      var b = this.W.Wi(this.W.Ti(1).$s.Ia);
      this.Jj(this.wN, b);
      for (this.S.uniform4f(this.vN, 0, 0, 0, 0); this.Od.length > 0; )
        this.Od.pop();
      for (b = 0; b < a.length; ) {
        let c = a[b];
        ++b;
        this.Od.push(c.x);
        this.Od.push(c.y);
      }
      this.Ga.resize(this.Od.length);
      this.Ga.setData(this.Wq, this.Od);
      this.W.S.stencilFunc(519, 1, 255);
      this.W.S.stencilOp(7680, 7680, 7681);
      this.drawArrays(a.length, 6);
      this.W.S.stencilFunc(514, 1, 255);
    }
    Mg() {
      return "uniform mat4 u_m;attribute vec2 a_f;void main(){gl_Position=u_m*vec4(a_f,0,1);}";
    }
    Kg() {
      return "precision mediump float;uniform vec4 u_c;void main(){gl_FragColor=u_c;}";
    }
    fh() {
      this.Wq = this.hf("a_f");
      this.wd.push(new ob(this.Wq, "a_f", !1, -1, -1));
      this.wN = this.getUniformLocation("u_m");
      this.vN = this.getUniformLocation("u_c");
    }
  }
  xg.i = !0;
  xg.u = jc;
  Object.assign(xg.prototype, { j: xg });
  class di {
    constructor(a, b, c) {
      this.type = a;
      this.location = b;
      this.usage = c;
      this.Dx = (a % 4) + 1;
      this.Zm = this.Dx * wg.BB[a >> 2];
      this.offset = 0;
      this.mE = !1;
    }
  }
  di.i = !0;
  Object.assign(di.prototype, { j: di });
  class Ed extends jg {
    constructor(a, b, c, d) {
      super(b, c.Ln, d);
      this.format = c;
      this.S = a;
      this.tv = a.createBuffer();
      this.data = new ArrayBuffer(this.Zm);
      this.Lj = [];
      this.nD();
    }
    G() {
      this.S.deleteBuffer(this.tv);
      this.data = this.Lj = this.S = this.tv = null;
    }
    resize(a) {
      return super.resize(a)
        ? ((this.data = new ArrayBuffer(this.Zm)), this.nD(), !0)
        : !1;
    }
    OC(a) {
      return this.Lj[a >> 2];
    }
    bind() {
      let a = this.S;
      a.bindBuffer(34962, this.tv);
      let b = this.format.Ln;
      var c = this.format.attributes;
      let d = c.P,
        e = 0;
      for (c = c.da; e < c; ) {
        let f = d[e++];
        f.location != -1 &&
          (a.enableVertexAttribArray(f.location),
          a.vertexAttribPointer(
            f.location,
            f.Dx,
            Ed.uQ[f.type >> 2],
            f.mE,
            b,
            f.offset,
          ));
      }
      this.Ch &&
        (a.bufferData(34962, this.data, 35040 + this.fW * 4), (this.Ch = !1));
    }
    HP(a) {
      var b = 0;
      b == null && (b = 0);
      return new yg(this, a, b);
    }
    sC() {
      var a = [];
      let b = Array(this.format.xx + 1);
      for (var c = 0, d = b.length; c < d; ) b[c++] = null;
      if (a.length == 0)
        for (a = this.format.iterator(); a.ib(); )
          ((c = a.next()),
            c.location != -1 && (b[c.location] = this.HP(c.location)));
      else
        for (c = 0; c < a.length; ) ((d = a[c++]), (b[d] = new yg(this, d, 0)));
      return b;
    }
    setData(a, b, c) {
      c == null && (c = 0);
      this.Ch = !0;
      c == 0 && (c = b.length);
      var d = this.format.get(a);
      a = d.Dx;
      var e = wg.AC(d.type);
      let f = (this.format.Ln / e) | 0;
      e = (d.offset / e) | 0;
      d = this.OC(d.type);
      let g = 0;
      for (; g < c; ) ((d[e + ((g / a) | 0) * f + (g % a)] = b[g]), ++g);
    }
    nD() {
      let a = this.data;
      this.Lj = [
        new Int8Array(a),
        new Uint8Array(a),
        new Int16Array(a),
        new Uint16Array(a),
        new Float32Array(a),
        new Uint32Array(a),
      ];
    }
  }
  Ed.i = !0;
  Ed.u = jg;
  Object.assign(Ed.prototype, { j: Ed });
  class yg {
    constructor(a, b, c) {
      this.ob = a;
      let d = a.format;
      b = d.get(b);
      this.view = a.OC(b.type);
      a = wg.AC(b.type);
      this.stride = (d.Ln / a) | 0;
      this.start = this.g = ((b.offset / a) | 0) + c * this.stride;
      this.ob.Ch = !0;
    }
    VF(a, b) {
      let c = this.view,
        d = this.g,
        e = this.stride;
      c[d + 0 * e] = 0;
      c[d + 0 * e + 1] = 1;
      c[d + e] = 1;
      c[d + e + 1] = a;
      c[d + 2 * e] = b;
      c[d + 2 * e + 1] = 0;
      this.g = d + 3 * e;
    }
  }
  yg.i = !0;
  Object.assign(yg.prototype, { j: yg });
  class Li {
    static my(a) {
      let b = 0,
        c = a.length;
      for (; b < c; ) {
        let d = a[b++];
        d != null && ((d.g = d.start), (d.ob.Ch = !0));
      }
    }
  }
  class ci {
    constructor(a) {
      this.Ln = this.xx = 0;
      this.attributes = new xb(a);
      this.attributes.init(a, null);
    }
    get(a) {
      return this.attributes.P[a];
    }
    iterator() {
      return this.attributes.iterator();
    }
    BN(a, b, c, d) {
      d == null && (d = !1);
      c == null && (c = -1);
      b = new di(b, a, c);
      this.xx = Math.max(this.xx, a);
      b.mE = d;
      a == -1 ? this.attributes.Vx(b) : (this.attributes.P[a] = b);
      this.Ln += b.Zm;
    }
    seal() {
      this.attributes.hT();
      let a = this.attributes.da,
        b = 1;
      for (; b < a; ) {
        let c = this.attributes.P[b - 1];
        this.attributes.P[b].offset = c.offset + c.Zm;
        ++b;
      }
    }
  }
  ci.i = !0;
  Object.assign(ci.prototype, { j: ci });
  class Va extends jc {
    constructor() {
      super();
      this.xz = this.Hh();
      this.eC = this.Kc();
    }
    Hh() {
      return 201;
    }
    Kc() {
      throw 13;
    }
  }
  Va.i = !0;
  Va.Lb = [Ae];
  Va.u = jc;
  Object.assign(Va.prototype, { j: Va });
  class qb {
    static init(a) {
      a.getExtension("OES_vertex_array_object");
      a.getExtension("WEBGL_compressed_texture_etc");
      qb.kH = a.getExtension("WEBGL_compressed_texture_astc");
      qb.Qj = a.getExtension("WEBGL_compressed_texture_s3tc");
      qb.sA = a.getExtension("EXT_texture_compression_rgtc");
    }
  }
  qb.i = !0;
  class Db extends yd {
    constructor() {
      super("webgl");
      this.S = null;
      this.Yl = 1;
      this.Fi = new tc();
      this.fv = this.stencilMask = this.TB = null;
      this.qO = new xb();
    }
    oq(a) {
      super.oq(a);
      this.S = a.getContext();
      this.pn();
    }
    clear(a) {
      super.clear();
      a == null && (a = this.clearColor);
      this.S.clearColor(a.x, a.y, a.z, a.w);
      this.S.clear(17664);
    }
    kj() {
      if (!super.kj() || this.S == null) return !1;
      this.pn();
      return !0;
    }
    Ki() {
      super.Ki();
    }
    il(a, b, c, d) {
      super.il(a, b, c, d);
      if (a == 0 && b == 0 && c == 1 && d == 1)
        (this.S.viewport(0, 0, this.$b.size.x, this.$b.size.y),
          this.S.disable(3089));
      else {
        d = this.$b;
        var e = this.viewport;
        a = (d.size.x * e.x) | 0;
        b = (d.size.x * e.w) | 0;
        c = (d.size.y * e.J) | 0;
        d = (this.$b.size.y | 0) - c - ((d.size.y * e.y) | 0);
        this.S.viewport(a, d, b, c);
        this.S.enable(3089);
        this.S.scissor(a, d, b, c);
      }
    }
    Jy(a) {
      this.Yl = a.El;
    }
    DF(a) {
      a.io
        ? (this.S.enable(2884),
          this.S.frontFace(a.pN ? 2305 : 2304),
          this.S.cullFace(1029))
        : this.S.disable(2884);
    }
    CF(a) {
      a.io
        ? (this.S.enable(2929), this.S.depthFunc(Db.DO[a.WA]))
        : (this.S.disable(2929), this.S.depthFunc(513));
    }
    vy(a) {
      let b = 0,
        c = 0;
      if (a.zT)
        switch (a.wh) {
          case 0:
            b = 1;
            c = 0;
            break;
          case 1:
            b = 1;
            c = 771;
            break;
          case 2:
            b = 774;
            c = 771;
            break;
          case 3:
            b = 770;
            c = 772;
            break;
          case 4:
            b = 1;
            c = 769;
            break;
          case 5:
            ((b = Db.cr[a.ZF]), (c = Db.cr[a.XB]));
        }
      else
        switch (a.wh) {
          case 0:
            b = 1;
            c = 0;
            break;
          case 1:
            b = 770;
            c = 771;
            break;
          case 2:
            b = 774;
            c = 771;
            break;
          case 3:
            c = b = 1;
            break;
          case 4:
            b = 770;
            c = 1;
            break;
          case 5:
            ((b = Db.cr[a.ZF]), (c = Db.cr[a.XB]));
        }
      this.S.enable(3042);
      this.S.blendFunc(b, c);
      let d;
      switch (a.blendEquation) {
        case 1:
          d = 32774;
          break;
        case 2:
          d = 32778;
          break;
        case 3:
          d = 32779;
      }
      this.S.blendEquation(d);
    }
    yy(a) {
      this.Fi = a.transform;
    }
    Hy(a) {
      a = a.Ev;
      this.fv != null && a == null && this.S.disable(2960);
      this.fv == null &&
        a != null &&
        (this.S.clearStencil(0),
        this.S.enable(2960),
        this.stencilMask == null && (this.stencilMask = new xg(this)),
        this.stencilMask.TO(a));
      this.fv = a;
    }
    Sv(a) {
      if (this.lS == 0) super.Sv(a);
      else {
        var b = a.iterator(),
          c = b.P[b.Oe++],
          d = this.qO;
        d.gg(a.da);
        d.clear();
        var e = (d.P[d.da++] = c);
        a = c.es;
        var f = c.effect;
        f.update(this);
        this.info.effect = f;
        for (this.info.pB = d; b.Oe < b.Sg; ) {
          c = b.P[b.Oe++];
          c.effect.update(this);
          let g = f.type == c.effect.type;
          if (
            (g =
              (g =
                (g = (g = g && f.gb == c.effect.gb) && (a & 3) == (c.es & 3)) &&
                ((a & 1) > 0 ? e.ql[0].gb == c.ql[0].gb : !0)) &&
              ((a & 2) > 0 ? e.ql[1].gb == c.ql[1].gb : !0))
          )
            d.P[d.da++] = c;
          else {
            if (d.da == 1) this.bm(d.Fa());
            else if (
              ((a = d.P[0]), (a = this.DC(a.effect.type, a.type)), a != null)
            )
              a.O(this.info);
            else for (a = d.P, f = 0, e = d.da; f < e; ) this.bm(a[f++]);
            d.clear();
            e = d.P[d.da++] = c;
            a = c.es;
            f = c.effect;
            f.update(this);
            this.info.effect = f;
            this.info.pB = d;
          }
        }
        if (d.da > 0)
          if (d.da == 1) this.bm(d.Fa());
          else if (
            ((b = d.P[0]), (b = this.DC(b.effect.type, b.type)), b != null)
          )
            b.O(this.info);
          else for (b = d.P, c = 0, d = d.da; c < d; ) this.bm(b[c++]);
      }
    }
    Qw(a) {
      return new zg(this, a);
    }
  }
  Db.i = !0;
  Db.u = yd;
  Object.assign(Db.prototype, { j: Db });
  class zg extends Dd {
    constructor(a, b) {
      super(a, b);
      this.Zv = this.handle = null;
      this.BG = (b & 1) > 0 ? 6407 : 6408;
      this.zV = 5121;
      this.S = a.S;
    }
    G() {
      this.parent == null && this.S.deleteTexture(this.handle);
      this.S = this.handle = null;
      super.G();
    }
    Dy(a) {
      super.Dy(a);
      this.upload(a);
    }
    upload(a) {
      if ((this.flags & 2) > 0) debugger;
      this.createTexture();
      this.S.bindTexture(3553, this.handle);
      var b =
          (this.flags & 2) > 0 ? ((this.flags & 4) > 0 ? 33648 : 10497) : 33071,
        c = (this.flags & 8) > 0 ? 9729 : 9728;
      this.S.texParameteri(3553, 10242, b);
      this.S.texParameteri(3553, 10243, b);
      this.S.texParameteri(3553, 10241, c);
      this.S.texParameteri(3553, 10240, c);
      if (a.uD) {
        var d = a.data;
        a = [];
        b = -1;
        var e = 0;
        c = this.size.x;
        let n = this.size.y;
        var f = new Uint32Array(d, 0, 31),
          g = f[0] == 542327876;
        if (f[0] == 1481919403) {
          b = f[7];
          e = f[14];
          g = 64 + f[15];
          qb.Qj != null &&
            b >= qb.Qj.COMPRESSED_RGB_S3TC_DXT1_EXT &&
            b <= qb.Qj.COMPRESSED_RGBA_S3TC_DXT5_EXT &&
            ((c = (this.size.x + 3) & -4), (n = (this.size.y + 3) & -4));
          f = 0;
          for (var h = e; f < h; ) {
            var l = new DataView(d, g, 4).getUint32(0, !0);
            g += 4;
            a[f++] = new Uint8Array(d, g, l);
            g += l + (3 - ((l + 3) % 4));
          }
        } else if (g) {
          g = 16;
          e = Math.max(1, f[7]) | 0;
          switch (f[21]) {
            case 826889281:
              b = qb.sA.COMPRESSED_RED_RGTC1_EXT;
              g = 8;
              break;
            case 827611204:
              b = qb.Qj.COMPRESSED_RGB_S3TC_DXT1_EXT;
              g = 8;
              break;
            case 861165636:
              b = qb.Qj.COMPRESSED_RGBA_S3TC_DXT3_EXT;
              break;
            case 894720068:
              b = qb.Qj.COMPRESSED_RGBA_S3TC_DXT5_EXT;
              break;
            case 1498952257:
              b = qb.sA.COMPRESSED_RED_GREEN_RGTC2_EXT;
          }
          c = (this.size.x + 3) & -4;
          n = (this.size.y + 3) & -4;
          f = 128;
          h = this.size.x;
          l = this.size.y;
          let q = 0,
            r = e;
          for (; q < r; ) {
            let u = Math.max(1, (h + 3) >> 2) * Math.max(1, (l + 3) >> 2) * g;
            a[q++] = new Uint8Array(d, f, u);
            f += u;
            h = Math.max(1, h >> 1);
            l = Math.max(1, l >> 1);
          }
        }
        d = c;
        g = n;
        for (f = 0; f < e; )
          ((h = f++),
            this.S.compressedTexImage2D(3553, h, b, d, g, 0, a[h]),
            (d = Math.max(1, d >> 1)),
            (g = Math.max(1, g >> 1)));
        new F(this.size.x / c, this.size.y / n, 0, 1);
      } else if (
        (this.S.pixelStorei(37440, 1),
        this.S.pixelStorei(37441, 1),
        this.S.texImage2D(3553, 0, this.BG, this.BG, this.zV, a.data),
        (this.flags & 224) > 0)
      )
        for (
          a = 9984,
            (this.flags & 32) > 0 && (a = 9985),
            (this.flags & 64) > 0 && (a = 9986),
            (this.flags & 128) > 0 && (a = 9987),
            this.S.texParameteri(3553, 10241, a),
            this.S.generateMipmap(3553),
            a = this.size.x >> 1,
            b = this.size.y >> 1;
          a >= 1 && b >= 1;
        )
          ((a >>= 1), (b >>= 1));
      this.S.bindTexture(3553, null);
      a = 0;
      for (b = this.children; a < b.length; )
        ((c = b[a]),
          ++a,
          (c.handle = this.handle),
          (c.size.x = this.size.x),
          (c.size.y = this.size.y));
    }
    createTexture() {
      this.Zv != null && (this.S.deleteFramebuffer(this.Zv), (this.Zv = null));
      this.handle != null &&
        (this.S.isTexture(this.handle) && this.S.deleteTexture(this.handle),
        (this.handle = null));
      this.handle == null && (this.handle = this.S.createTexture());
    }
    ra(a, b) {
      super.ra(a, b);
      a.handle = this.handle;
    }
  }
  zg.i = !0;
  zg.u = Dd;
  Object.assign(zg.prototype, { j: zg });
  class Ag extends na {
    constructor() {
      super();
    }
    Ba() {
      return 2005;
    }
  }
  Ag.i = !0;
  Ag.u = na;
  Object.assign(Ag.prototype, { j: Ag });
  class Bg extends na {
    constructor() {
      super();
      new ei(null, null, null, null);
      new fi(null, null, null, null, null);
      this.mw = new gi(null, null, null);
    }
    Ba() {
      return 1905;
    }
  }
  Bg.i = !0;
  Bg.u = na;
  Object.assign(Bg.prototype, { j: Bg });
  class gi {
    constructor() {
      new F(0, 0, 0, 1);
      new F(0, 0, -1, 1);
      new F(0, 0, 0, 1);
    }
  }
  gi.i = !0;
  Object.assign(gi.prototype, { j: gi });
  class fi {
    constructor() {
      new F(1, 0, 0, 1);
      new F(fe, 0, 1, 1);
      new F(1, 1, 1, 1);
      new F(1, 1, 1, 1);
      new F(1, 1, 1, 1);
    }
  }
  fi.i = !0;
  Object.assign(fi.prototype, { j: fi });
  class ei {
    constructor() {
      new F(0, 0, 0, 1);
      new F(0, 0, 0, 1);
      new F(0, 0, 0, 1);
      new F(0, 0, 0, 1);
    }
  }
  ei.i = !0;
  Object.assign(ei.prototype, { j: ei });
  class Cg extends na {
    constructor(a) {
      super();
      this.tj = a;
    }
    G() {}
    Ba() {
      return 805;
    }
  }
  Cg.i = !0;
  Cg.u = na;
  Object.assign(Cg.prototype, { j: Cg });
  class Ue extends Va {
    constructor() {
      super();
      this.mi = this.Ga = null;
      this.size = 0;
    }
    init(a) {
      super.init(a);
      this.Ie(this.Hf, 17);
      this.Ie(this.Fl, 13);
      this.Ie(vj.HK, 7);
      this.Ga = this.Eg(600, 2);
    }
    O(a) {
      this.use();
      var b = a.W;
      let c = a.effect;
      var d = c.Kb;
      if (d.cs()) {
        var e = c.ih.kf,
          f = (e.da / 5) | 0;
        if (f != 0) {
          f > this.size &&
            ((this.size = f), this.Ga.resize(f * 6), (this.mi = this.Ga.sC()));
          a = b.Wi(a.xa.Ia);
          this.Jj(this.jo, a);
          this.TG(this.Zu, d.handle);
          a = d.size;
          this.S.uniform2f(this.av, a.x, a.y);
          a = this.mi[this.Hf];
          var g = this.mi[this.Fl];
          if (c.clip) {
            this.S.uniform1f(this.Gf, 0);
            this.S.uniform1i(this.YA, !1);
            Li.my(this.mi);
            this.S.enable(2960);
            this.S.stencilFunc(519, 1, 255);
            this.S.stencilOp(7680, 7680, 7681);
            var h = c.jQ(),
              l = h.x;
            h = h.y;
            var n = a.view,
              q = a.g,
              r = a.stride;
            n[q] = 0;
            n[q + 1] = h;
            q += r;
            n[q] = l;
            n[q + 1] = 0;
            q += r;
            n[q] = 0;
            n[q + 1] = 0;
            a.g = q + r;
            n = a.view;
            q = a.g;
            r = a.stride;
            n[q] = 0;
            n[q + 1] = h;
            q += r;
            n[q] = l;
            n[q + 1] = h;
            q += r;
            n[q] = l;
            n[q + 1] = 0;
            a.g = q + r;
            g.VF(0, 0);
            g.VF(1, 1);
            this.S.uniform1f(this.Gf, 0);
            this.drawArrays(6, 4);
            this.S.stencilFunc(514, 1, 255);
          }
          Li.my(this.mi);
          this.S.uniform1f(this.Gf, b.Yl);
          b = (b.vd & 4) > 0 ? b.Fi : null;
          this.S.uniform1i(this.YA, b != null);
          b != null
            ? ((l = b.fc),
              this.S.uniform4f(this.ti, l.x, l.y, l.z, l.w),
              (b = b.offset),
              this.S.uniform4f(this.wi, b.x, b.y, b.z, b.w))
            : (this.S.uniform4f(this.ti, 1, 1, 1, 1),
              (b = new F(0, 0, 0, 0)),
              this.S.uniform4f(this.wi, b.x, b.y, b.z, b.w));
          d = d.nc.jm;
          e = e.P;
          b = 0;
          for (l = f * 5; b < l; ) {
            var u = e[b++];
            h = e[b++];
            n = e[b++];
            q = h + e[b++];
            r = n + e[b++];
            var v = a.view,
              A = a.g,
              D = a.stride;
            v[A] = h;
            v[A + 1] = r;
            A += D;
            v[A] = q;
            v[A + 1] = n;
            A += D;
            v[A] = h;
            v[A + 1] = n;
            a.g = A + D;
            v = a.view;
            A = a.g;
            D = a.stride;
            v[A] = h;
            v[A + 1] = r;
            A += D;
            v[A] = q;
            v[A + 1] = r;
            A += D;
            v[A] = q;
            v[A + 1] = n;
            a.g = A + D;
            r = d[u].Wd;
            h = r.x;
            n = r.y;
            q = h + r.w;
            r = n + r.J;
            u = g.view;
            v = g.g;
            A = g.stride;
            u[v + 0 * A] = h;
            u[v + 0 * A + 1] = r;
            u[v + A] = q;
            u[v + A + 1] = n;
            u[v + 2 * A] = h;
            u[v + 2 * A + 1] = n;
            g.g = v + 3 * A;
            u = g.view;
            v = g.g;
            A = g.stride;
            u[v + 0 * A] = h;
            u[v + 0 * A + 1] = r;
            u[v + A] = q;
            u[v + A + 1] = r;
            u[v + 2 * A] = q;
            u[v + 2 * A + 1] = n;
            g.g = v + 3 * A;
          }
          this.drawArrays(f * 6, 4);
          c.clip && this.S.disable(2960);
        }
      }
    }
    Kc() {
      return 505;
    }
    Hh() {
      return 401;
    }
    Mg() {
      return "attribute vec4 a_position;\nattribute vec2 a_tcoord;\n\nvarying vec2 v_tcoord;\n\nuniform vec2 u_textureSize;\nuniform mat4 u_matrix;\n\nvoid main()\n{\n\tgl_Position = u_matrix * a_position;\n\tv_tcoord = vec2(a_tcoord.x, u_textureSize.y - a_tcoord.y) / u_textureSize;  \n}";
    }
    Kg() {
      return "precision mediump float;\n\nuniform sampler2D u_image;\nuniform bool u_transformColors;\nuniform vec4 u_colorMultiplier;\nuniform vec4 u_colorOffset;\nuniform float u_alpha;\n\nvarying vec2 v_tcoord;\n\nvoid main()\n{\n\tvec4 color = texture2D(u_image, v_tcoord);\n\tif (u_transformColors)\n\t{\n\t\tfloat a = color.a;\n\t\tfloat r = color.r / (a + 1e-6);\n\t\tfloat g = color.g / (a + 1e-6);\n\t\tfloat b = color.b / (a + 1e-6);\n\t\tr = r * u_colorMultiplier.r + u_colorOffset.r;\n\t\tg = g * u_colorMultiplier.g + u_colorOffset.g;\n\t\tb = b * u_colorMultiplier.b + u_colorOffset.b;\n\t\ta = a * u_colorMultiplier.a + u_colorOffset.a;\n\t\tcolor = vec4(r * a, g * a, b * a, a);\n\t}\n\tgl_FragColor = color * u_alpha;\n}";
    }
    fh() {
      this.Hf = this.hf("a_position");
      this.wd.push(new ob(this.Hf, "a_position", !1, -1, -1));
      this.Fl = this.hf("a_tcoord");
      this.wd.push(new ob(this.Fl, "a_tcoord", !1, -1, -1));
      this.av = this.getUniformLocation("u_textureSize");
      this.jo = this.getUniformLocation("u_matrix");
      this.Zu = this.getUniformLocation("u_image");
      this.YA = this.getUniformLocation("u_transformColors");
      this.ti = this.getUniformLocation("u_colorMultiplier");
      this.wi = this.getUniformLocation("u_colorOffset");
      this.Gf = this.getUniformLocation("u_alpha");
    }
  }
  Ue.i = !0;
  Ue.u = Va;
  Object.assign(Ue.prototype, { j: Ue });
  class Ye extends Va {
    constructor() {
      super();
      this.Ga = null;
    }
    init(a) {
      super.init(a);
      this.Ie(this.Rd, 17);
      this.Ie(this.dv, 18);
      this.Ga = this.Eg(32, 2);
    }
    O(a) {
      this.use();
      let b = a.effect;
      a = a.W.fp(a.xa.Ia);
      this.Jj(this.Sj, a);
      this.S.uniform1f(this.Uj, 0);
      a = b.aa;
      let c = 0,
        d = b.points.length;
      for (; c < d; ) {
        let e = c++;
        this.S.uniform1f(this.Gf, b.no[e]);
        this.UO(b.points[e], b.Di[e], a);
      }
    }
    UO(a, b, c) {
      a = this.Bo(a, c, !1);
      for (var d = 0, e = a.length; d < e; ) ((a[d] += c / 2), (d += 2));
      this.Ga.resize(a.length);
      this.Ga.setData(this.Rd, a);
      c = [];
      for (d = 0; d < b.length; )
        ((e = b[d]),
          ++d,
          c.push(e.x),
          c.push(e.y),
          c.push(e.z),
          c.push(e.x),
          c.push(e.y),
          c.push(e.z),
          c.push(e.x),
          c.push(e.y),
          c.push(e.z),
          c.push(e.x),
          c.push(e.y),
          c.push(e.z),
          c.push(e.x),
          c.push(e.y),
          c.push(e.z),
          c.push(e.x),
          c.push(e.y),
          c.push(e.z));
      this.Ga.setData(this.dv, c);
      this.drawArrays(a.length, 4);
    }
    Kc() {
      return 705;
    }
    Bo(a, b, c) {
      let d = new hi().Io(a, c),
        e = a.length;
      if (e == 0) return [];
      a = a.slice();
      c && (a.push(a[0]), d.push(d[0]), d.push(d[1]), d.push(d[2]), ++e);
      c = [];
      let f = 0,
        g = 1;
      for (; g < e; ) {
        var h = a[f],
          l = a[g],
          n = f * 3,
          q = d[n++];
        let r = d[n++];
        n = Math.min(2, d[n++]);
        n *= b;
        let u = h.x + q * n,
          v = h.y + r * n,
          A = h.x - q * n;
        h = h.y - r * n;
        n = g * 3;
        q = d[n++];
        r = d[n++];
        n = Math.min(2, d[n++]);
        n *= b;
        let D = l.x + q * n,
          B = l.y + r * n;
        q = l.x - q * n;
        l = l.y - r * n;
        c.push(D);
        c.push(B);
        c.push(A);
        c.push(h);
        c.push(u);
        c.push(v);
        c.push(D);
        c.push(B);
        c.push(q);
        c.push(l);
        c.push(A);
        c.push(h);
        ++f;
        ++g;
      }
      return c;
    }
    Mg() {
      return "attribute vec2 a_vertexPosition;\nattribute vec3 a_vertexColor;\n\nvarying vec3 v_vertexColor;\n\nuniform float u_zNDC;\nuniform mat4 u_camera;\n\nvoid main()\n{\n\tv_vertexColor = a_vertexColor;\n\tgl_Position = u_camera * vec4(a_vertexPosition, u_zNDC, 1.0);\n}";
    }
    Kg() {
      return "precision mediump float;\n\nvarying vec3 v_vertexColor;\n\nuniform float u_alpha;\n\nvoid main()\n{\n\tgl_FragColor = vec4(v_vertexColor * u_alpha, u_alpha);\n}";
    }
    fh() {
      this.Rd = this.hf("a_vertexPosition");
      this.wd.push(new ob(this.Rd, "a_vertexPosition", !1, -1, -1));
      this.dv = this.hf("a_vertexColor");
      this.wd.push(new ob(this.dv, "a_vertexColor", !1, -1, -1));
      this.Uj = this.getUniformLocation("u_zNDC");
      this.Sj = this.getUniformLocation("u_camera");
      this.Gf = this.getUniformLocation("u_alpha");
    }
  }
  Ye.i = !0;
  Ye.u = Va;
  Object.assign(Ye.prototype, { j: Ye });
  class hi {
    constructor() {
      this.Mk = new F(0, 0, 0, 1);
      this.vG = new F(0, 0, 0, 1);
      this.Es = new F(0, 0, 0, 1);
      this.Gm = new F(0, 0, 0, 1);
    }
    Io(a, b) {
      function c(u, v) {
        f.push(u.x);
        f.push(u.y);
        f.push(v);
      }
      function d(u, v, A, D, B) {
        u.x = A.x + D.x;
        u.y = A.y + D.y;
        D = Math.sqrt(u.x * u.x + u.y * u.y);
        D > 0 ? ((u.x /= D), (u.y /= D)) : ((u.x = 0), (u.y = 0));
        D = u.x;
        v.x = -u.y;
        v.y = D;
        return B / (v.x * -A.y + v.y * A.x);
      }
      var e = null;
      let f = [];
      if (b) {
        a = a.slice();
        var g = a[0];
        a.push(new F(g.x, g.y, 0, 1));
      }
      g = a.length;
      for (var h = 1; h < g; ) {
        var l = h++,
          n = a[l - 1],
          q = a[l],
          r = l < a.length - 1 ? a[l + 1] : null;
        let u = q.x - n.x;
        n = q.y - n.y;
        let v = Math.sqrt(u * u + n * n);
        this.Gm = new F(u / v, n / v, 0, 1);
        e == null && ((e = this.Gm), (e = new F(-e.y, e.x, 0, 1)));
        l == 1 && c(e, 1);
        r == null
          ? ((e = this.Gm), (e = new F(-e.y, e.x, 0, 1)), c(e, 1))
          : ((l = r.x - q.x),
            (q = r.y - q.y),
            (r = Math.sqrt(l * l + q * q)),
            (this.Es = new F(l / r, q / r, 0, 1)),
            (q = d(this.vG, this.Mk, this.Gm, this.Es, 1)),
            c(this.Mk, q));
      }
      b &&
        a.length > 2 &&
        ((e = a[g - 2]),
        (b = a[0]),
        (a = a[1]),
        (h = b.x - e.x),
        (e = b.y - e.y),
        (q = Math.sqrt(h * h + e * e)),
        (this.Gm = new F(h / q, e / q, 0, 1)),
        (h = a.x - b.x),
        (a = a.y - b.y),
        (b = Math.sqrt(h * h + a * a)),
        (this.Es = new F(h / b, a / b, 0, 1)),
        (a = d(this.vG, this.Mk, this.Gm, this.Es, 1)),
        (f[0] = this.Mk.x),
        (f[1] = this.Mk.y),
        (f[2] = a),
        (f[g * 3 - 3] = this.Mk.x),
        (f[g * 3 - 2] = this.Mk.y),
        (f[g * 3 - 1] = a),
        f.pop(),
        f.pop(),
        f.pop());
      return f;
    }
  }
  hi.i = !0;
  Object.assign(hi.prototype, { j: hi });
  class Ve extends Va {
    constructor() {
      super();
      this.Ga = null;
    }
    init(a) {
      super.init(a);
      this.Ie(this.Hf, 17);
      this.Ga = this.Eg(600, 2);
      this.Ga = this.Eg(4, 2);
      this.Ga.setData(this.Hf, [0, 1, 1, 1, 0, 0, 1, 0]);
    }
    O(a) {
      this.use();
      var b = a.xa,
        c = a.effect.color;
      let d = c.w;
      this.S.uniform4f(this.uN, c.x * d, c.y * d, c.z * d, d);
      a = a.W;
      c = a.Wi(b.Ia);
      this.Jj(this.jo, c);
      this.S.uniform1f(this.Gf, a.Yl);
      c = b.size;
      this.S.uniform2f(this.$u, c.x, c.y);
      this.S.uniform1f(this.Uj, a.PC(b));
      b = (a.vd & 4) > 0 ? a.Fi : null;
      b != null
        ? ((a = b.fc),
          this.S.uniform4f(this.ti, a.x, a.y, a.z, a.w),
          (b = b.offset),
          this.S.uniform4f(this.wi, b.x, b.y, b.z, b.w))
        : (this.S.uniform4f(this.ti, 1, 1, 1, 1),
          (b = new F(0, 0, 0, 0)),
          this.S.uniform4f(this.wi, b.x, b.y, b.z, b.w));
      this.drawArrays(4, 5);
    }
    Kc() {
      return 1205;
    }
    Hh() {
      return 401;
    }
    Mg() {
      return "uniform mat4 u_matrix;\nuniform vec2 u_size;\nuniform float u_zNDC;\n\nattribute vec2 a_position;\n\nvoid main()\n{\n\tgl_Position = u_matrix * vec4(a_position * u_size, u_zNDC, 1.0);\n}";
    }
    Kg() {
      return "precision mediump float;\n\nuniform float u_alpha;\nuniform vec4 u_Color;\nuniform vec4 u_colorMultiplier;\nuniform vec4 u_colorOffset;\n\nvoid main()\n{\n\tvec4 color = u_Color;\n\tfloat alpha = color.a;\n\tcolor = vec4(color.rgb / alpha, alpha) * u_colorMultiplier + u_colorOffset;\n\tcolor = vec4(color.rgb * color.a, color.a);\n\tgl_FragColor = color * u_alpha;\n}";
    }
    fh() {
      this.Hf = this.hf("a_position");
      this.wd.push(new ob(this.Hf, "a_position", !1, -1, -1));
      this.jo = this.getUniformLocation("u_matrix");
      this.$u = this.getUniformLocation("u_size");
      this.Uj = this.getUniformLocation("u_zNDC");
      this.Gf = this.getUniformLocation("u_alpha");
      this.uN = this.getUniformLocation("u_Color");
      this.ti = this.getUniformLocation("u_colorMultiplier");
      this.wi = this.getUniformLocation("u_colorOffset");
    }
  }
  Ve.i = !0;
  Ve.u = Va;
  Object.assign(Ve.prototype, { j: Ve });
  class We extends Va {
    constructor() {
      super();
      this.mi = this.Ga = null;
    }
    init(a) {
      super.init(a);
      this.Ie(this.cv, 17);
      this.Ga = this.Eg(4, 1);
      this.mi = this.Ga.sC();
    }
    O(a) {
      this.use();
      var b = a.W,
        c = a.effect;
      if (!(b.Yl < b.oR)) {
        this.S.uniform1f(this.Uj, 0);
        var d = 0,
          e = 0,
          f = 1,
          g = 1,
          h = c.color,
          l = h.w;
        this.S.uniform4f(this.Tj, h.x * l, h.y * l, h.z * l, l);
        this.S.uniform1f(this.Gf, b.Yl);
        c.lt != null &&
          ((g = a.W.$b.size),
          (c = c.lt),
          (d = c.A / g.x),
          (e = c.F / g.y),
          (f = (c.C - c.A) / g.x),
          (g = (c.H - c.F) / g.y));
        e = 1 - g - e;
        Li.my(this.mi);
        c = this.mi[this.cv];
        a = c.view;
        b = c.g;
        h = c.stride;
        a[b] = d;
        a[b + 1] = e;
        b += h;
        a[b] = d + f;
        a[b + 1] = e;
        b += h;
        a[b] = d;
        a[b + 1] = e + g;
        b += h;
        a[b] = d + f;
        a[b + 1] = e + g;
        c.g = b + h;
        this.drawArrays(4, 5);
      }
    }
    Kc() {
      return 305;
    }
    Mg() {
      return "precision mediump float;\n\nuniform float u_zNDC;\n\nattribute vec2 a_modelPosition;\n\nvoid main()\n{\n\tgl_Position.xy = 2.0 * a_modelPosition - 1.0;\n\tgl_Position.z = u_zNDC;\n\tgl_Position.w = 1.0;\n}";
    }
    Kg() {
      return "precision mediump float;\n\nuniform vec4 u_color;\nuniform float u_alpha;\n\nvoid main()\n{\n\tgl_FragColor = u_color * u_alpha;\n}";
    }
    fh() {
      this.cv = this.hf("a_modelPosition");
      this.wd.push(new ob(this.cv, "a_modelPosition", !1, -1, -1));
      this.Uj = this.getUniformLocation("u_zNDC");
      this.Tj = this.getUniformLocation("u_color");
      this.Gf = this.getUniformLocation("u_alpha");
    }
  }
  We.i = !0;
  We.u = Va;
  Object.assign(We.prototype, { j: We });
  class Xe extends Va {
    constructor() {
      super();
      this.Ga = null;
      this.Od = [];
    }
    init(a) {
      super.init(a);
      this.Ie(this.Rd, 17);
      this.Ga = this.Eg(32, 2);
    }
    O(a) {
      this.use();
      var b = a.effect;
      a = a.W.fp(a.xa.Ia);
      this.Jj(this.Sj, a);
      this.S.uniform4f(this.Tj, 1, 1, 1, 1);
      a = 0;
      for (b = b.iu; a < b.length; ) {
        let c = b[a];
        ++a;
        this.Ga.resize(c.length);
        let d = 0,
          e = 0;
        for (; e < c.length; ) {
          let f = c[e];
          ++e;
          this.Od[d++] = f.x;
          this.Od[d++] = f.y;
        }
        this.Ga.setData(this.Rd, this.Od, d);
        this.drawArrays(c.length, 5);
      }
    }
    Kc() {
      return 1105;
    }
    Mg() {
      return "attribute vec2 a_vertexPosition;\n\nuniform mat4 u_camera;\n\nvoid main()\n{\n\tgl_Position = u_camera * vec4(a_vertexPosition, 0.0, 1.0);\n}";
    }
    Kg() {
      return "precision mediump float;\n\nuniform vec4 u_color;\n\nvoid main()\n{\n\tgl_FragColor = vec4(u_color.rgb * u_color.a, u_color.a);\n}";
    }
    fh() {
      this.Rd = this.hf("a_vertexPosition");
      this.wd.push(new ob(this.Rd, "a_vertexPosition", !1, -1, -1));
      this.Sj = this.getUniformLocation("u_camera");
      this.Tj = this.getUniformLocation("u_color");
    }
  }
  Xe.i = !0;
  Xe.u = Va;
  Object.assign(Xe.prototype, { j: Xe });
  class Ze extends Va {
    constructor() {
      super();
      this.Ga = null;
      this.ob = [];
      this.Jf = 0;
    }
    init(a) {
      super.init(a);
      this.Ie(this.Rd, 17);
      this.Ga = this.Eg(32, 1);
    }
    O(a) {
      this.use();
      var b = a.effect;
      a = a.W.fp(a.xa.Ia);
      this.Jj(this.Sj, a);
      a = b.color;
      this.S.uniform4f(this.Tj, a.x, a.y, a.z, a.w);
      this.Bo(b);
      b = this.Jf >> 1;
      this.Ga.resize(b);
      this.Ga.setData(this.Rd, this.ob, this.Jf);
      this.drawArrays(b, 4);
    }
    Bo(a) {
      this.Jf = 0;
      let b = a.Sp,
        c = 2 * Math.PI,
        d = (c / b) * a.aa * 0.5,
        e = 0;
      for (; e < b; ) {
        var f = e++;
        if ((f & 1) == 1) continue;
        f = (f / b) * c;
        var g = a.D,
          h = a.aa,
          l = a.lineWidth / 2,
          n = Math.cos(f),
          q = Math.sin(f);
        f = g.x + n * h;
        g = g.y + q * h;
        h = -q * d;
        let r = n * d;
        n *= l;
        l *= q;
        q = f + h + n;
        let u = g + r + l,
          v = f - h - n,
          A = g - r - l,
          D = this.Jf;
        this.ob[D++] = q;
        this.ob[D++] = u;
        this.ob[D++] = f - h + n;
        this.ob[D++] = g - r + l;
        this.ob[D++] = v;
        this.ob[D++] = A;
        this.ob[D++] = q;
        this.ob[D++] = u;
        this.ob[D++] = v;
        this.ob[D++] = A;
        this.ob[D++] = f + h - n;
        this.ob[D++] = g + r - l;
        this.Jf = D;
      }
    }
    Kc() {
      return 605;
    }
    Mg() {
      return "attribute vec2 a_vertexPosition;\n\nuniform mat4 u_camera;\n\nvoid main()\n{\n\tgl_Position = u_camera * vec4(a_vertexPosition, 0.0, 1.0);\n}";
    }
    Kg() {
      return "precision mediump float;\n\nuniform vec4 u_color;\n\nvoid main()\n{\n\tgl_FragColor = vec4(u_color.rgb * u_color.a, u_color.a);\n}";
    }
    fh() {
      this.Rd = this.hf("a_vertexPosition");
      this.wd.push(new ob(this.Rd, "a_vertexPosition", !1, -1, -1));
      this.Sj = this.getUniformLocation("u_camera");
      this.Tj = this.getUniformLocation("u_color");
    }
  }
  Ze.i = !0;
  Ze.u = Va;
  Object.assign(Ze.prototype, { j: Ze });
  class $e extends Va {
    constructor() {
      super();
      this.Ga = null;
      this.ob = [];
      this.Jf = 0;
      this.aj = Array(256);
      this.mj = Array(256);
    }
    init(a) {
      super.init(a);
      this.Ie(this.Rd, 17);
      this.Ga = this.Eg(32, 1);
    }
    O(a) {
      this.use();
      var b = a.effect;
      a = a.W.fp(a.xa.Ia);
      this.Jj(this.Sj, a);
      this.S.uniform4f(this.Tj, b.color.x, b.color.y, b.color.z, b.Ds);
      this.Bo(b);
      b = this.Jf >> 1;
      this.Ga.resize(b);
      this.Ga.setData(this.Rd, this.ob, this.Jf);
      this.drawArrays(b, 4);
    }
    Bo(a) {
      this.Jf = 0;
      var b = a.aa;
      let c = ((fe / (2 * Math.acos(1 - 0.25 / b)) - 1) | 0) << 2;
      c > 128 && (c = 128);
      var d = 2 * Math.PI;
      let e = 0,
        f = 0,
        g = c;
      for (; f < g; ) {
        var h = (f++ / c) * d;
        let l = Math.cos(h);
        h = Math.sin(h);
        this.mj[e] = l * b;
        this.mj[e + 1] = h * b;
        this.aj[e] = l * (b + a.lineWidth);
        this.aj[e + 1] = h * (b + a.lineWidth);
        e += 2;
      }
      a = 0;
      for (b = 1; a < c; )
        ((d = this.Jf),
          (this.ob[d++] = this.mj[a * 2]),
          (this.ob[d++] = this.mj[a * 2 + 1]),
          (this.ob[d++] = this.mj[b * 2]),
          (this.ob[d++] = this.mj[b * 2 + 1]),
          (this.ob[d++] = this.aj[b * 2]),
          (this.ob[d++] = this.aj[b * 2 + 1]),
          (this.ob[d++] = this.mj[a * 2]),
          (this.ob[d++] = this.mj[a * 2 + 1]),
          (this.ob[d++] = this.aj[b * 2]),
          (this.ob[d++] = this.aj[b * 2 + 1]),
          (this.ob[d++] = this.aj[a * 2]),
          (this.ob[d++] = this.aj[a * 2 + 1]),
          (this.Jf = d),
          ++a,
          ++b,
          b == c && (b = 0));
    }
    Kc() {
      return 905;
    }
    Mg() {
      return "attribute vec2 a_vertexPosition;\n\nuniform mat4 u_camera;\n\nvoid main()\n{\n\tgl_Position = u_camera * vec4(a_vertexPosition, 0.0, 1.0);\n}";
    }
    Kg() {
      return "precision mediump float;\n\nuniform vec4 u_color;\n\nvoid main()\n{\n\tgl_FragColor = vec4(u_color.rgb * u_color.a, u_color.a);\n}";
    }
    fh() {
      this.Rd = this.hf("a_vertexPosition");
      this.wd.push(new ob(this.Rd, "a_vertexPosition", !1, -1, -1));
      this.Sj = this.getUniformLocation("u_camera");
      this.Tj = this.getUniformLocation("u_color");
    }
  }
  $e.i = !0;
  $e.u = Va;
  Object.assign($e.prototype, { j: $e });
  class ed extends Va {
    constructor() {
      super();
      this.Ga = null;
    }
    init(a) {
      super.init(a);
      this.Ie(this.Hf, 17);
      this.Ie(this.Fl, 17);
      this.Ga = this.Eg(4, 2);
    }
    O(a) {
      this.use();
      var b = a.W,
        c = a.xa,
        d = a.effect,
        e = d.Kb;
      if (e.cs()) {
        var f = d.xq;
        a = f.x + d.offsetX * f.w;
        var g = f.y + d.offsetY * f.J,
          h = a + d.nn * f.w,
          l = g + d.fq * f.J;
        this.TG(this.Zu, e.handle);
        e = e.size;
        this.S.uniform2f(this.av, e.x, e.y);
        e = b.Wi(c.Ia);
        this.Jj(this.jo, e);
        this.S.uniform1f(this.Gf, b.Yl);
        e = c.size;
        this.S.uniform2f(this.$u, e.x, e.y);
        this.S.uniform1f(this.Uj, b.PC(c));
        b = (b.vd & 4) > 0 ? b.Fi : null;
        b != null
          ? ((c = b.fc),
            this.S.uniform4f(this.ti, c.x, c.y, c.z, c.w),
            (b = b.offset),
            this.S.uniform4f(this.wi, b.x, b.y, b.z, b.w))
          : (this.S.uniform4f(this.ti, 1, 1, 1, 1),
            (b = new F(0, 0, 0, 0)),
            this.S.uniform4f(this.wi, b.x, b.y, b.z, b.w));
        c = 0;
        b = d.offsetY;
        d.offsetX != 0 && (c = 1);
        b != 0 && (c |= 2);
        d.nn != 1 && (c |= 4);
        d.fq != 1 && (c |= 8);
        c == 2
          ? ((b %= 1),
            b < 0 && ++b,
            (a = f.x + d.offsetX * f.w),
            (h = a + d.nn * f.w),
            (g = f.y + f.J * b),
            (l = f.y + f.J),
            (d = this.Ga.Lj[4]),
            (d[0] = 0),
            (d[1] = 1 - b),
            (d[4] = 1),
            (d[5] = 1 - b),
            (d[8] = 0),
            (d[9] = 0),
            (d[12] = 1),
            (d[13] = 0),
            (d = this.Ga.Lj[4]),
            (d[2] = a),
            (d[3] = l),
            (d[6] = h),
            (d[7] = l),
            (d[10] = a),
            (d[11] = g),
            (d[14] = h),
            (d[15] = g),
            (this.Ga.Ch = !0),
            this.drawArrays(4, 5),
            (g = f.y),
            (l = f.J * b),
            (f = this.Ga.Lj[4]),
            (f[0] = 0),
            (f[1] = 1),
            (f[4] = 1),
            (f[5] = 1),
            (f[8] = 0),
            (f[9] = 1 - b),
            (f[12] = 1),
            (f[13] = 1 - b),
            (this.Ga.Ch = !0),
            (f = this.Ga.Lj[4]),
            (f[2] = a),
            (f[3] = l),
            (f[6] = h),
            (f[7] = l),
            (f[10] = a),
            (f[11] = g),
            (f[14] = h),
            (f[15] = g))
          : (this.Ga.setData(this.Hf, ed.jN[0]),
            (f = this.Ga.Lj[4]),
            (f[2] = a),
            (f[3] = l),
            (f[6] = h),
            (f[7] = l),
            (f[10] = a),
            (f[11] = g),
            (f[14] = h),
            (f[15] = g));
        this.Ga.Ch = !0;
        this.drawArrays(4, 5);
      }
    }
    Kc() {
      return 205;
    }
    Hh() {
      return 401;
    }
    Mg() {
      return "attribute vec2 a_position;\nattribute vec2 a_tcoord;\n\nuniform mat4 u_matrix;\nuniform vec2 u_size;\nuniform vec2 u_textureSize;\nuniform float u_zNDC;\n\nvarying vec2 v_tcoord;\n\nvoid main()\n{\n\tgl_Position = u_matrix * vec4(a_position * u_size, u_zNDC, 1.0);\n\tv_tcoord = vec2(a_tcoord.x, u_textureSize.y - a_tcoord.y) / u_textureSize;  \n}";
    }
    Kg() {
      return "precision mediump float;\n\nuniform sampler2D u_image;\nuniform float u_alpha;\nuniform vec4 u_colorMultiplier;\nuniform vec4 u_colorOffset;\n\nvarying vec2 v_tcoord;\n\nvoid main()\n{\n\tvec4 color = texture2D(u_image, v_tcoord);\n\tfloat alpha = color.a;\n\tcolor = vec4(color.rgb / (alpha + 0.001), alpha) * u_colorMultiplier + u_colorOffset;\n\tcolor = vec4(color.rgb * color.a, color.a);\n\tgl_FragColor = color * u_alpha;\n}";
    }
    fh() {
      this.Hf = this.hf("a_position");
      this.wd.push(new ob(this.Hf, "a_position", !1, -1, -1));
      this.Fl = this.hf("a_tcoord");
      this.wd.push(new ob(this.Fl, "a_tcoord", !1, -1, -1));
      this.jo = this.getUniformLocation("u_matrix");
      this.$u = this.getUniformLocation("u_size");
      this.av = this.getUniformLocation("u_textureSize");
      this.Uj = this.getUniformLocation("u_zNDC");
      this.Zu = this.getUniformLocation("u_image");
      this.Gf = this.getUniformLocation("u_alpha");
      this.ti = this.getUniformLocation("u_colorMultiplier");
      this.wi = this.getUniformLocation("u_colorOffset");
    }
  }
  ed.i = !0;
  ed.u = Va;
  Object.assign(ed.prototype, { j: ed });
  class hb {
    constructor(a) {
      this.type = a;
      this.gb = 0;
      this.$s = null;
    }
    set() {}
    collapse() {
      return this;
    }
  }
  hb.i = !0;
  Object.assign(hb.prototype, { j: hb });
  class re extends hb {
    constructor(a, b) {
      b == null && (b = !0);
      super(0);
      this.wh = a;
      this.gb = (this.gb & -16) | a;
      this.zT = b;
      this.gb &= -65537;
      b && (this.gb |= 65536);
      this.blendEquation = 1;
      this.gb = (this.gb & -61441) | 4096;
      this.XB = this.ZF = 0;
    }
    set(a) {
      a.vy(this);
    }
  }
  re.i = !0;
  re.u = hb;
  Object.assign(re.prototype, { j: re });
  class Cb {
    constructor() {
      this.type = this.Ba();
      this.D = new F(0, 0, 0, 1);
      this.aa = 0;
    }
    G() {
      this.D = null;
    }
    Jo() {}
    from() {}
    Ba() {
      return 102;
    }
  }
  Cb.i = !0;
  Cb.Lb = [Ad];
  Object.assign(Cb.prototype, { j: Cb });
  class Uc extends Cb {
    constructor() {
      super();
      this.jb = new ia(Ba, Ba, Ca, Ca);
    }
    G() {
      this.jb = null;
      super.G();
    }
    Jo(a) {
      var b = this.jb;
      b.A = b.F = Ba;
      b.C = b.H = Ca;
      b = a.length >> 1;
      let c = 0;
      for (; c < b; ) {
        let d = c++;
        this.jb.hv(new F(a[d << 1], a[(d << 1) + 1], 0, 1));
      }
    }
    contains(a) {
      let b = this.jb,
        c = a.x;
      a = a.y;
      return c >= b.A && c <= b.C && a >= b.F ? a <= b.H : !1;
    }
    ks(a) {
      switch (a.type) {
        case 202:
          var b = a.D;
          a = a.aa;
          this.jb.hv(new F(b.x - a, b.y - a, 0, 1));
          this.jb.hv(new F(b.x + a, b.y + a, 0, 1));
          break;
        case 302:
          this.jb.add(a.jb);
      }
      b = this.jb;
      b = (b.C - b.A) / 2;
      a = this.jb;
      a = (a.H - a.F) / 2;
      this.D.x = this.jb.A + b;
      this.D.y = this.jb.F + a;
      this.aa = Math.sqrt(b * b + a * a);
    }
    from(a) {
      let b = a.D,
        c = a.aa;
      switch (a.type) {
        case 202:
          this.jb.A = b.x - c;
          this.jb.F = b.y - c;
          this.jb.C = b.x + c;
          this.jb.H = b.y + c;
          break;
        case 302:
          var d = this.jb;
          a = a.jb;
          d.A = a.A;
          d.F = a.F;
          d.C = a.C;
          d.H = a.H;
      }
      d = this.D;
      d.x = b.x;
      d.y = b.y;
      d.z = b.z;
      this.aa = c;
    }
    hu(a, b) {
      var c = this.D,
        d = b.D;
      (a.L & 64) > 0 && a.Jn();
      var e = a.lf,
        f = e.m21 * c.x + e.m22 * c.y + e.m24;
      d.x = e.m11 * c.x + e.m12 * c.y + e.m14;
      d.y = f;
      b.aa =
        ((a.L & 8) > 0
          ? Math.max(Math.abs(a.scale.x), Math.abs(a.scale.y))
          : Math.max(
              Math.abs(a.matrix.m11) + Math.abs(a.matrix.m12),
              Math.abs(a.matrix.m21) + Math.abs(a.matrix.m22),
            )) * this.aa;
      b = b.jb;
      c = this.jb;
      d = c.C - c.A;
      c = this.jb;
      c = c.H - c.F;
      f = e = Uc.Od;
      var g = this.jb,
        h = this.jb;
      f.x = (g.A + g.C) / 2;
      f.y = (h.F + h.H) / 2;
      a.Mb(e, e);
      b.A = e.x;
      b.F = e.y;
      b.C = e.x;
      b.H = e.y;
      (a.L & 8) > 0
        ? ((h = a.matrix),
          (e = h.m11),
          (f = h.m12),
          (g = h.m21),
          (h = h.m22),
          (a = a.scale),
          (d = d * a.x * 0.5),
          (a = c * a.y * 0.5),
          e > 0
            ? ((b.A -= e * d), (b.C += e * d))
            : ((b.A += e * d), (b.C -= e * d)),
          f > 0
            ? ((b.A -= f * a), (b.C += f * a))
            : ((b.A += f * a), (b.C -= f * a)),
          g > 0
            ? ((b.F -= g * d), (b.H += g * d))
            : ((b.F += g * d), (b.H -= g * d)),
          h > 0
            ? ((b.F -= h * a), (b.H += h * a))
            : ((b.F += h * a), (b.H -= h * a)))
        : ((g = a.matrix),
          (e = g.m11),
          (f = g.m12),
          (h = Math.sqrt(e * e + f * f)),
          (a = h * d * 0.5),
          (c = ((e * g.m22 - f * g.m21) / h) * c * 0.5),
          (e = Math.atan2(f, e)),
          (d = Math.cos(e)),
          (e = Math.sin(e)),
          d > 0
            ? ((b.A -= d * a), (b.C += d * a))
            : ((b.A += d * a), (b.C -= d * a)),
          e > 0
            ? ((b.A -= e * c), (b.C += e * c))
            : ((b.A += e * c), (b.C -= e * c)),
          -e > 0
            ? ((b.F -= -e * a), (b.H += -e * a))
            : ((b.F += -e * a), (b.H -= -e * a)),
          d > 0
            ? ((b.F -= d * c), (b.H += d * c))
            : ((b.F += d * c), (b.H -= d * c)));
    }
    Ba() {
      return 302;
    }
  }
  Uc.i = !0;
  Uc.u = Cb;
  Object.assign(Uc.prototype, { j: Uc });
  class Dg extends Cb {
    constructor() {
      super();
      this.box = new ii(Ba, Ba, Ca, Ca);
    }
    G() {
      this.box = null;
      super.G();
    }
    Jo(a) {
      var b = this.box;
      b.A = b.F = Ba;
      b.C = b.H = Ca;
      a = a.length >> 1;
      for (b = 0; b < a; ) ++b;
    }
    contains() {
      return !1;
    }
    ks() {}
    from() {}
    hu(a, b) {
      var c = this.D,
        d = b.D;
      (a.L & 16) > 0 && a.ku();
      var e = a.lf;
      let f = c.x,
        g = c.y;
      c = c.z;
      d.x = e.m11 * f + e.m12 * g + e.m13 * c + e.m14;
      d.y = e.m21 * f + e.m22 * g + e.m23 * c + e.m24;
      d.z = e.m31 * f + e.m32 * g + e.m33 * c + e.m34;
      (a.L & 8) > 0
        ? ((d = Math.abs(a.scale.x)),
          (e = Math.abs(a.scale.y)),
          (a = Math.abs(a.scale.z)))
        : ((a = a.matrix),
          (d = Math.abs(a.m11) + Math.abs(a.m12) + Math.abs(a.m13)),
          (e = Math.abs(a.m21) + Math.abs(a.m22) + Math.abs(a.m23)),
          (a = Math.abs(a.m31) + Math.abs(a.m32) + Math.abs(a.m33)));
      b.aa = Math.max(Math.max(d, e), a) * this.aa;
    }
    Ba() {
      return 402;
    }
  }
  Dg.i = !0;
  Dg.u = Cb;
  Object.assign(Dg.prototype, { j: Dg });
  class Be extends Cb {
    constructor() {
      super();
    }
    Jo(a) {
      let b = a.length >> 1;
      for (var c = 0, d = 0, e = 0; e < b; ) {
        var f = e++;
        c += a[f << 1];
        d += a[(f << 1) + 1];
      }
      c = this.D.x = c / b;
      d = this.D.y = d / b;
      for (e = this.aa = 0; e < b; ) {
        var g = e++;
        f = a[g << 1] - c;
        g = a[(g << 1) + 1] - d;
        this.aa = Math.max(f * f + g * g, this.aa);
      }
      this.aa = Math.sqrt(this.aa);
    }
    contains(a) {
      let b = a.x - this.D.x;
      a = a.y - this.D.y;
      return b * b + a * a <= this.aa * this.aa;
    }
    ks(a) {
      if (a.aa != 0)
        if (this.aa == 0)
          ((this.aa = a.aa), (this.D.x = a.D.x), (this.D.y = a.D.y));
        else {
          var b = a.D.x - this.D.x,
            c = a.D.y - this.D.y,
            d = a.aa - this.aa,
            e = b * b + c * c;
          d * d >= e
            ? d >= 0 && this.from(a)
            : ((d = Math.sqrt(e)),
              (e = (d + a.aa - this.aa) / (2 * d)),
              (this.D.x += e * b),
              (this.D.y += e * c),
              (this.aa = (d + this.aa + a.aa) / 2));
        }
    }
    from(a) {
      this.D.x = a.D.x;
      this.D.y = a.D.y;
      this.aa = a.aa;
    }
    hu(a, b) {
      var c = this.D,
        d = b.D;
      (a.L & 64) > 0 && a.Jn();
      let e = a.lf,
        f = e.m21 * c.x + e.m22 * c.y + e.m24;
      d.x = e.m11 * c.x + e.m12 * c.y + e.m14;
      d.y = f;
      (a.L & 8) > 0
        ? ((c = Math.abs(a.scale.x)),
          (d = Math.abs(a.scale.y)),
          (a = Math.abs(a.scale.z)))
        : ((a = a.matrix),
          (c = Math.abs(a.m11) + Math.abs(a.m12) + Math.abs(a.m13)),
          (d = Math.abs(a.m21) + Math.abs(a.m22) + Math.abs(a.m23)),
          (a = Math.abs(a.m31) + Math.abs(a.m32) + Math.abs(a.m33)));
      b.aa = Math.max(Math.max(c, d), a) * this.aa;
    }
    Ba() {
      return 202;
    }
  }
  Be.i = !0;
  Be.u = Cb;
  Object.assign(Be.prototype, { j: Be });
  class Ce extends Cb {
    constructor() {
      super();
    }
    Jo(a) {
      let b = 0,
        c = 0,
        d = 0,
        e = a.length;
      for (var f = 0; f < e; ) ((b += a[f++]), (c += a[f++]), (d += a[f++]));
      f = (e / 3) | 0;
      b /= f;
      c /= f;
      d /= f;
      let g = 0;
      for (f = 0; f < e; ) {
        var h = a[f++] - b;
        let l = a[f++] - c,
          n = a[f++] - d;
        h = h * h + l * l + n * n;
        h > g && (g = h);
      }
      this.aa = Math.sqrt(g);
      a = this.D;
      a.x = b;
      a.y = c;
      a.z = d;
    }
    contains(a) {
      let b = a.x - this.D.x,
        c = a.y - this.D.y;
      a = a.z - this.D.z;
      return b * b + c * c + a * a <= this.aa * this.aa;
    }
    ks(a) {
      var b = a.aa;
      if (b != 0) {
        var c = this.aa;
        if (c == 0)
          ((this.aa = a.aa),
            (b = this.D),
            (c = a.D),
            (b.x = c.x),
            (b.y = c.y),
            (b.z = c.z));
        else {
          var d = this.D,
            e = a.D,
            f = e.x - d.x,
            g = e.y - d.y;
          e = e.z - d.z;
          var h = f * f + g * g + e * e,
            l = b - c;
          l * l >= h
            ? l >= 0 &&
              ((this.aa = a.aa),
              (b = this.D),
              (c = a.D),
              (b.x = c.x),
              (b.y = c.y),
              (b.z = c.z))
            : ((a = Math.sqrt(h)),
              a > 0 &&
                ((l = (a + l) / (2 * a)),
                (h = this.D),
                (h.x = d.x + f * l),
                (h.y = d.y + g * l),
                (h.z = d.z + e * l)),
              (this.aa = (a + c + b) / 2));
        }
      }
    }
    from(a) {
      this.D.x = a.D.x;
      this.D.y = a.D.y;
      this.aa = a.aa;
    }
    hu(a, b) {
      b.D = a.LN(this.D, b.D);
      b.aa = a.aQ() * this.aa;
    }
    Ba() {
      return 502;
    }
  }
  Ce.i = !0;
  Ce.u = Cb;
  Object.assign(Ce.prototype, { j: Ce });
  class Eg {
    constructor() {
      this.Mn = new gb(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      this.VE = new gb(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      this.Yk = new gb(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    bW() {
      let a = this.VE,
        b = this.Mn;
      this.Yk = new gb(
        a.m11 * b.m11 + a.m12 * b.m21 + a.m13 * b.m31 + a.m14 * b.m41,
        a.m11 * b.m12 + a.m12 * b.m22 + a.m13 * b.m32 + a.m14 * b.m42,
        a.m11 * b.m13 + a.m12 * b.m23 + a.m13 * b.m33 + a.m14 * b.m43,
        a.m11 * b.m14 + a.m12 * b.m24 + a.m13 * b.m34 + a.m14 * b.m44,
        a.m21 * b.m11 + a.m22 * b.m21 + a.m23 * b.m31 + a.m24 * b.m41,
        a.m21 * b.m12 + a.m22 * b.m22 + a.m23 * b.m32 + a.m24 * b.m42,
        a.m21 * b.m13 + a.m22 * b.m23 + a.m23 * b.m33 + a.m24 * b.m43,
        a.m21 * b.m14 + a.m22 * b.m24 + a.m23 * b.m34 + a.m24 * b.m44,
        a.m31 * b.m11 + a.m32 * b.m21 + a.m33 * b.m31 + a.m34 * b.m41,
        a.m31 * b.m12 + a.m32 * b.m22 + a.m33 * b.m32 + a.m34 * b.m42,
        a.m31 * b.m13 + a.m32 * b.m23 + a.m33 * b.m33 + a.m34 * b.m43,
        a.m31 * b.m14 + a.m32 * b.m24 + a.m33 * b.m34 + a.m34 * b.m44,
        a.m41 * b.m11 + a.m42 * b.m21 + a.m43 * b.m31 + a.m44 * b.m41,
        a.m41 * b.m12 + a.m42 * b.m22 + a.m43 * b.m32 + a.m44 * b.m42,
        a.m41 * b.m13 + a.m42 * b.m23 + a.m43 * b.m33 + a.m44 * b.m43,
        a.m41 * b.m14 + a.m42 * b.m24 + a.m43 * b.m34 + a.m44 * b.m44,
      );
    }
    gH(a, b) {
      var c = this.Yk;
      let d = a.x,
        e = a.y,
        f = a.z,
        g = a.w,
        h = 1 / (c.m41 * d + c.m42 * e + c.m43 * f + c.m44 * g);
      a = b.w / 2;
      let l = b.J / 2,
        n = (c.m11 * d + c.m12 * e + c.m13 * f + c.m14 * g) * h;
      c = (c.m21 * d + c.m22 * e + c.m23 * f + c.m24 * g) * h;
      return new F(a * n + 0 * c + (a + b.x), 0 * n + -l * c + (l + b.y), 0, 1);
    }
  }
  Eg.i = !0;
  Object.assign(Eg.prototype, { j: Eg });
  class $d extends Eg {
    constructor() {
      super();
      this.origin = new F(0, 0, 0, 1);
      this.position = new F(0, 0, 0, 1);
      this.rotation = 0;
      this.zoom = 1;
      this.rD = new gb(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      this.qD = new gb(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      this.Sw = new gb(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      this.size = new F(0, 0, 0, 1);
      this.Ob(new F(1e3, 1e3, 0, 1));
    }
    YU(a) {
      this.zoom != a && ((this.zoom = a), this.Us());
    }
    Eo() {
      let a = this.origin,
        b = this.size;
      a.x = b.x / 2;
      a.y = b.y / 2;
      this.Us();
    }
    Ob(a) {
      let b = a.x,
        c = a.y;
      var d = this.size;
      d.x = a.x;
      d.y = a.y;
      d = this.VE;
      d.m11 = 2 / b;
      d.m12 = 0;
      d.m13 = 0;
      d.m14 = -1;
      d.m21 = 0;
      d.m22 = (2 / c) * -1;
      d.m23 = 0;
      d.m24 = 1;
      d.m31 = 0;
      d.m32 = 0;
      d.m33 = -0.001;
      d.m34 = 0;
      d.m41 = 0;
      d.m42 = 0;
      d.m43 = 0;
      d.m44 = 1;
      a = d.m14;
      d = d.m24;
      let e = this.qD;
      e.m11 = b / 2;
      e.m12 = 0;
      e.m13 = 0;
      e.m14 = -e.m11 * a + e.m12 * d;
      e.m21 = 0;
      e.m22 = -c / 2;
      e.m23 = 0;
      e.m24 = -e.m21 * a + e.m22 * d;
      e.m31 = 0;
      e.m32 = 0;
      e.m33 = -1e3;
      e.m34 = 0;
      e.m41 = 0;
      e.m42 = 0;
      e.m43 = 0;
      e.m44 = 1;
      this.Us();
    }
    Us() {
      var a = this.Mn;
      a.m11 = 1;
      a.m12 = 0;
      a.m13 = 0;
      a.m14 = 0;
      a.m21 = 0;
      a.m22 = 1;
      a.m23 = 0;
      a.m24 = 0;
      a.m31 = 0;
      a.m32 = 0;
      a.m33 = 1;
      a.m34 = 0;
      a.m41 = 0;
      a.m42 = 0;
      a.m43 = 0;
      a.m44 = 1;
      a = this.Mn;
      var b = this.position,
        c = b.x;
      b = b.y;
      a.m14 += -c;
      a.m24 += -b;
      var d = this.zoom,
        e = this.zoom;
      a.m11 *= d;
      a.m12 *= d;
      a.m14 *= d;
      a.m21 *= e;
      a.m22 *= e;
      a.m24 *= e;
      e = this.rotation * Oa;
      d = Math.sin(e);
      e = Math.cos(e);
      var f = a.m11,
        g = a.m21;
      a.m11 = e * f - d * g;
      a.m21 = d * f + e * g;
      f = a.m12;
      g = a.m22;
      a.m12 = e * f - d * g;
      a.m22 = d * f + e * g;
      f = a.m14;
      g = a.m24;
      a.m14 = e * f - d * g;
      a.m24 = d * f + e * g;
      a.m14 += c;
      a.m24 += b;
      a.m14 += this.origin.x - this.position.x;
      a.m24 += this.origin.y - this.position.y;
      c = this.Mn;
      c.m11 = a.m11;
      c.m12 = a.m12;
      c.m14 = a.m14;
      c.m21 = a.m21;
      c.m22 = a.m22;
      c.m24 = a.m24;
      this.bW();
      a = this.rD;
      var h = this.Mn;
      c = h.m11;
      b = h.m12;
      d = h.m13;
      e = h.m14;
      f = h.m21;
      g = h.m22;
      var l = h.m23,
        n = h.m24,
        q = h.m31,
        r = h.m32,
        u = h.m33,
        v = h.m34,
        A = h.m41,
        D = h.m42,
        B = h.m43;
      h = h.m44;
      var G = c * g - b * f;
      let E = c * l - d * f,
        T = c * n - e * f,
        S = b * l - d * g,
        U = b * n - e * g,
        Z = d * n - e * l,
        ba = q * D - r * A,
        ca = q * B - u * A,
        W = q * h - v * A,
        la = r * B - u * D,
        pa = r * h - v * D,
        ha = u * h - v * B,
        aa = 1 / (G * ha - E * pa + T * la + S * W - U * ca + Z * ba);
      a.m11 = (g * ha - l * pa + n * la) * aa;
      a.m12 = (-b * ha + d * pa - e * la) * aa;
      a.m13 = (D * Z - B * U + h * S) * aa;
      a.m14 = (-r * Z + u * U - v * S) * aa;
      a.m21 = (-f * ha + l * W - n * ca) * aa;
      a.m22 = (c * ha - d * W + e * ca) * aa;
      a.m23 = (-A * Z + B * T - h * E) * aa;
      a.m24 = (q * Z - u * T + v * E) * aa;
      a.m31 = (f * pa - g * W + n * ba) * aa;
      a.m32 = (-c * pa + b * W - e * ba) * aa;
      a.m33 = (A * U - D * T + h * G) * aa;
      a.m34 = (-q * U + r * T - v * G) * aa;
      a.m41 = (-f * la + g * ca - l * ba) * aa;
      a.m42 = (c * la - b * ca + d * ba) * aa;
      a.m43 = (-A * S + D * E - B * G) * aa;
      a.m44 = (q * S - r * E + u * G) * aa;
      a = this.Sw;
      c = this.rD;
      b = this.qD;
      d = c.m11 * b.m12 + c.m12 * b.m22 + c.m13 * b.m32 + c.m14 * b.m42;
      e = c.m11 * b.m13 + c.m12 * b.m23 + c.m13 * b.m33 + c.m14 * b.m43;
      f = c.m11 * b.m14 + c.m12 * b.m24 + c.m13 * b.m34 + c.m14 * b.m44;
      g = c.m21 * b.m11 + c.m22 * b.m21 + c.m23 * b.m31 + c.m24 * b.m41;
      l = c.m21 * b.m12 + c.m22 * b.m22 + c.m23 * b.m32 + c.m24 * b.m42;
      n = c.m21 * b.m13 + c.m22 * b.m23 + c.m23 * b.m33 + c.m24 * b.m43;
      q = c.m21 * b.m14 + c.m22 * b.m24 + c.m23 * b.m34 + c.m24 * b.m44;
      r = c.m31 * b.m11 + c.m32 * b.m21 + c.m33 * b.m31 + c.m34 * b.m41;
      u = c.m31 * b.m12 + c.m32 * b.m22 + c.m33 * b.m32 + c.m34 * b.m42;
      v = c.m31 * b.m13 + c.m32 * b.m23 + c.m33 * b.m33 + c.m34 * b.m43;
      A = c.m31 * b.m14 + c.m32 * b.m24 + c.m33 * b.m34 + c.m34 * b.m44;
      D = c.m41 * b.m11 + c.m42 * b.m21 + c.m43 * b.m31 + c.m44 * b.m41;
      B = c.m41 * b.m12 + c.m42 * b.m22 + c.m43 * b.m32 + c.m44 * b.m42;
      h = c.m41 * b.m13 + c.m42 * b.m23 + c.m43 * b.m33 + c.m44 * b.m43;
      G = c.m41 * b.m14 + c.m42 * b.m24 + c.m43 * b.m34 + c.m44 * b.m44;
      a.m11 = c.m11 * b.m11 + c.m12 * b.m21 + c.m13 * b.m31 + c.m14 * b.m41;
      a.m12 = d;
      a.m13 = e;
      a.m14 = f;
      a.m21 = g;
      a.m22 = l;
      a.m23 = n;
      a.m24 = q;
      a.m31 = r;
      a.m32 = u;
      a.m33 = v;
      a.m34 = A;
      a.m41 = D;
      a.m42 = B;
      a.m43 = h;
      a.m44 = G;
    }
  }
  $d.i = !0;
  $d.u = Eg;
  Object.assign($d.prototype, { j: $d });
  class tc {
    constructor() {
      this.hint = 0;
      this.offset = new F(0, 0, 0, 0);
      this.fc = new F(1, 1, 1, 1);
    }
    set(a) {
      var b = this.fc,
        c = a.fc;
      b.x = c.x;
      b.y = c.y;
      b.z = c.z;
      b.w = c.w;
      b = this.offset;
      c = a.offset;
      b.x = c.x;
      b.y = c.y;
      b.z = c.z;
      b.w = c.w;
      this.hint = a.hint;
    }
    wy(a) {
      a >= 0
        ? ((this.fc.x = 1 - a),
          (this.fc.y = 1 - a),
          (this.fc.z = 1 - a),
          (this.offset.x = a),
          (this.offset.y = a),
          (this.offset.z = a))
        : ((this.fc.x = a + 1),
          (this.fc.y = a + 1),
          (this.fc.z = a + 1),
          (this.offset.x = 0),
          (this.offset.y = 0),
          (this.offset.z = 0));
      this.fc.w = 1;
      this.offset.w = 0;
      this.hint = 2;
      return this;
    }
    concat(a) {
      if (this.hint == 1 && a.hint == 1) return ((this.fc.w *= a.fc.w), this);
      let b = this.offset,
        c = this.fc,
        d = a.fc;
      a = a.offset;
      c.x *= d.x;
      c.y *= d.y;
      c.z *= d.z;
      c.w *= d.w;
      b.x = d.x * b.x + a.x;
      b.y = d.y * b.y + a.y;
      b.z = d.z * b.z + a.z;
      b.w = d.w * b.w + a.w;
      this.hint = 0;
      return this;
    }
  }
  tc.i = !0;
  Object.assign(tc.prototype, { j: tc });
  class zc extends hb {
    constructor(a) {
      super(2);
      this.transform = new tc();
      a != null && this.transform.set(a);
      this.collapsed = null;
      this.gb = zc.next++;
    }
    set(a) {
      a.yy(this);
    }
    collapse(a) {
      if (a.Ja == 1) return this;
      this.collapsed == null && (this.collapsed = new zc());
      let b = this.collapsed.transform;
      b.set(a.top().transform);
      let c = a.Ja - 2;
      for (; c > -1; ) b.concat(a.P[c--].transform);
      return this.collapsed;
    }
  }
  zc.i = !0;
  zc.u = hb;
  Object.assign(zc.prototype, { j: zc });
  class Mi {
    constructor() {
      this.Db = null;
      this.wz = new xb(1024);
      this.wz.rn = !0;
      this.stack = new vc();
      this.Od = new xb();
    }
    el(a) {
      this.Db = a;
    }
  }
  Mi.i = !0;
  Object.assign(Mi.prototype, { j: Mi });
  class hg extends hb {
    constructor(a, b) {
      b == null && (b = 1);
      super(4);
      this.WA = b;
      this.io = a;
      this.Oy(a);
      this.$U(b);
    }
    Oy(a) {
      this.gb &= -257;
      a && (this.gb |= 256);
      this.io = a;
    }
    $U(a) {
      this.gb = (this.gb & -256) | (1 << a);
      this.WA = a;
    }
    set(a) {
      a.CF(this);
    }
  }
  hg.i = !0;
  hg.u = hb;
  Object.assign(hg.prototype, { j: hg });
  class gg extends hb {
    constructor(a, b) {
      b == null && (b = !0);
      super(3);
      this.io = a;
      this.pN = b;
      this.Oy(a);
      this.ZU(b);
    }
    ZU(a) {
      this.gb = (this.gb &= -3) | (a ? 2 : 0);
    }
    Oy(a) {
      this.gb = (this.gb &= -2) | (a ? 1 : 0);
      this.io = a;
    }
    set(a) {
      a.DF(this);
    }
  }
  gg.i = !0;
  gg.u = hb;
  Object.assign(gg.prototype, { j: gg });
  class Xb {
    static $N() {
      let a = 0;
      for (; a < 7; ) Xb.Ut[a++].Ja = 0;
    }
    static LT(a) {
      Xb.Ut == null && Xb.HQ();
      let b = Xb.Ut,
        c = Xb.yF;
      var d = a;
      for (c.clear(); d.parent != null; ) {
        var e = d.parent;
        c.Ja == c.hb && c.grow();
        c.P[c.Ja++] = e;
        d = d.parent;
      }
      d = 0;
      for (e = c.Ja; d < e; ) (++d, c.P[--c.Ja].NT(b));
      for (a = a.Zd; a != null; )
        ((d = b[a.state.type]),
          (e = a.state),
          d.Ja == d.hb && d.grow(),
          (d.P[d.Ja++] = e),
          (a = a.next));
      c.clear(!0);
      return b;
    }
    static HQ() {
      Xb.Ut = Array(7);
      let a = 0;
      for (; a < 7; ) Xb.Ut[a++] = new vc();
      Xb.yF = new vc(16);
    }
  }
  Xb.i = !0;
  class Fg {
    constructor(a) {
      this.state = a;
    }
  }
  Fg.i = !0;
  Object.assign(Fg.prototype, { j: Fg });
  class Qa extends td {
    constructor(a, b) {
      super();
      this.type = this.Ba();
      this.flags = 32 | b | Qa.CO;
      this.$ = this.parent = this.name = null;
      this.Gb = new Gg();
      this.Ia = new Gg();
      this.ef = 0;
      this.va = this.Kv(a);
      this.key = yf.next();
      this.Zd = this.th = null;
      Qa.count++;
    }
    G() {
      if (!((this.flags & 16) > 0)) {
        super.G();
        this.parent != null && this.parent.removeChild(this);
        this.va = this.Ia = this.Gb = null;
        for (var a = this.Zd; a != null; ) ((a.state.$s = null), (a = a.next));
        this.VT();
        this.flags = 16;
        Qa.count--;
      }
    }
    MC() {
      let a = this;
      for (; a.parent != null; ) a = a.parent;
      return a;
    }
    Pd(a, b) {
      b == null && (b = !0);
      a == null && (a = !0);
      this.qz(b);
      b && (this.De(), a && this.WE());
    }
    qz() {
      (this.flags & 64) > 0 ||
        ((this.flags & 512) > 0
          ? this.parent != null
            ? this.Ia.QF(this.parent.Ia, this.Gb)
            : this.Ia.uy(this.Gb)
          : this.parent != null
            ? this.Ia.PF(this.parent.Ia, this.Gb)
            : this.Ia.set(this.Gb));
    }
    De() {}
    WE() {
      this.parent != null && (this.parent.De(), this.parent.WE());
    }
    Kn(a) {
      var b = a == null;
      if (b) a = Xb.LT(this);
      else {
        let c = this.Zd;
        for (; c != null; ) {
          let d = a[c.state.type],
            e = c.state;
          d.Ja == d.hb && d.grow();
          d.P[d.Ja++] = e;
          c = c.next;
        }
      }
      this.XE(a);
      if (b) Xb.$N();
      else for (b = this.Zd; b != null; ) (--a[b.state.type].Ja, (b = b.next));
      this.flags &= -33;
    }
    Ti(a) {
      let b = this.Zd;
      for (; b != null; ) {
        if (b.state.type == a) return b.state;
        b = b.next;
      }
      return null;
    }
    $h(a) {
      a.$s = this;
      this.flags |= 32;
      if (this.Zd == null) this.Zd = new Fg(a);
      else {
        for (var b = this.Zd; b != null; ) {
          if (b.state.type == a.type) {
            b.state = a;
            return;
          }
          b = b.next;
        }
        b = new Fg(a);
        b.next = this.Zd;
        this.Zd = b;
      }
    }
    st(a) {
      let b = this.Zd,
        c = null;
      for (; b != null; ) {
        if (b.state.type == a) {
          c != null ? (c.next = b.next) : (this.Zd = b.next);
          b.next = null;
          this.flags |= 32;
          break;
        }
        c = b;
        b = b.next;
      }
    }
    VT() {
      let a = this.Zd,
        b;
      a != null && (this.flags |= 32);
      for (; a != null; ) ((b = a.next), (a.next = null), (a = b));
      this.Zd = null;
    }
    NT(a) {
      let b = this.Zd;
      for (; b != null; ) {
        let c = a[b.state.type],
          d = b.state;
        c.Ja == c.hb && c.grow();
        c.P[c.Ja++] = d;
        b = b.next;
      }
    }
    Kv(a) {
      a == null && (a = Qa.BO);
      if (a == null) throw 14;
      switch (a) {
        case 202:
          return new Be();
        case 302:
          return new Uc();
        default:
          throw 15;
      }
    }
    Ba() {
      return 101;
    }
  }
  Qa.i = !0;
  Qa.Lb = [Ad, ih];
  Qa.u = td;
  Object.assign(Qa.prototype, { j: Qa });
  class Xa extends Qa {
    constructor(a, b) {
      super(b, 2);
      this.ga = this.Kv(b);
      this.ql = Array(7);
      a != null && a.R(this);
      this.es = 0;
      this.effect = this.Vp = null;
      Xa.count++;
    }
    G() {
      (this.flags & 16) > 0 ||
        (this.effect != null && this.effect.G(),
        (this.effect = null),
        this.ga.G(),
        (this.ql = this.ga = null),
        super.G(),
        Xa.count--);
    }
    kg(a) {
      this.effect = a;
      this.effect.di(this);
    }
    $c() {}
    Yb(a, b) {
      if (!this.va.contains(a)) return !1;
      b != null && b.add(this);
      return !0;
    }
    nm(a, b) {
      return b;
    }
    De() {
      (this.flags & 128) > 0 || (this.ga.hu(this.Ia, this.va), super.De());
    }
    XE(a) {
      let b = 0;
      let c = this.ql,
        d = 0,
        e = 0;
      for (; e < a.length; ) {
        var f = a[e];
        ++e;
        f.Ja == 0
          ? (c[d] = null)
          : ((f = f.P[f.Ja - 1].collapse(f)), (c[d] = f), (b |= 1 << f.type));
        ++d;
      }
      this.es = b;
    }
    Ba() {
      return 201;
    }
  }
  Xa.i = !0;
  Xa.u = Qa;
  Object.assign(Xa.prototype, { j: Xa });
  class Hg extends Xa {
    constructor(a, b, c, d) {
      super(c, d);
      this.size = new F(1, 1, 0, 1);
      this.min = new F(0, 0, 0, 1);
      this.max = new F(1, 1, 0, 1);
      this.cols = a;
      this.rows = b;
      this.gS();
      this.$c();
    }
    gS() {
      this.Jx = (this.cols + 1) * (this.rows + 1);
      this.Kj = new xb(this.Jx);
      for (var a = 0, b = this.Jx; a < b; )
        (++a, this.Kj.Vx(new F(0, 0, 0, 1)));
      a = this.cols + 1;
      b = this.rows + 1;
      let c = 0,
        d;
      for (; c < b; ) {
        for (d = 0; d < a; ) {
          var e = this.Kj.P[c * a + d];
          e.x = this.min.x + (d / (a - 1)) * this.max.x;
          e.y = this.min.y + (c / (b - 1)) * this.max.y;
          ++d;
        }
        ++c;
      }
      this.DS = (this.cols * 2 + 2) * this.rows + (this.rows - 1) * 2;
      this.indices = new Uint8Array(this.DS);
      --b;
      for (c = e = 0; c < b; ) {
        for (d = 0; d < a; )
          ((this.indices[e++] = c * a + d),
            (this.indices[e++] = c * a + a + d),
            ++d);
        c < b - 1 &&
          ((this.indices[e++] = (c + 1) * a + (a - 1)),
          (this.indices[e++] = (c + 1) * a));
        ++c;
      }
    }
    $c() {
      super.$c();
    }
    Ba() {
      return 601;
    }
  }
  Hg.i = !0;
  Hg.u = Xa;
  Object.assign(Hg.prototype, { j: Hg });
  class Sc extends hb {
    constructor() {
      super(1);
      this.xa = null;
      this.TQ = !1;
      this.Ev = null;
      this.gb = Sc.next++;
    }
    set(a) {
      a.Hy(this);
    }
    OU(a) {
      let b = a.A,
        c = a.F,
        d = a.C - a.A;
      a = a.H - a.F;
      this.Ev = [
        new F(b, c, 0, 1),
        new F(b, c + a, 0, 1),
        new F(b + d, c + a, 0, 1),
        new F(b + d, c, 0, 1),
      ];
    }
  }
  Sc.i = !0;
  Sc.u = hb;
  Object.assign(Sc.prototype, { j: Sc });
  class Ig extends Xa {
    constructor(a, b) {
      super(a, 402);
      this.mw = b;
      this.$c();
      this.hD = this.YG = null;
    }
    G() {
      this.mw = null;
      var a = this.YG;
      a != null && a.G();
      a = this.hD;
      a != null && a.G();
      this.hD = this.YG = null;
      super.G();
    }
    Kv() {
      return new Ce();
    }
    Yb() {
      return !1;
    }
    $c() {
      let a = this.mw.getData(0);
      this.ga.Jo(a);
    }
    Ba() {
      return 501;
    }
  }
  Ig.i = !0;
  Ig.u = Xa;
  Object.assign(Ig.prototype, { j: Ig });
  class rb extends Qa {
    constructor(a, b, c) {
      c == null && (c = 0);
      super(b, 1 | c);
      this.children = null;
      a != null && a.R(this);
      rb.count++;
    }
    G() {
      if (!((this.flags & 16) > 0)) {
        for (var a = this.children; a != null; ) {
          let b = a.$;
          a.th != null ? a.th.G() : a.G();
          a = b;
        }
        super.G();
        rb.count--;
      }
    }
    nm(a, b) {
      return La.nm(this, a, b);
    }
    Yb(a, b) {
      let c = !1;
      if (this.va.contains(a)) {
        let d = this.children;
        for (; d != null; ) (d.Yb(a, b) && (c = !0), (d = d.$));
      }
      return c;
    }
    ki(a) {
      let b = super.ki(a),
        c = this.children,
        d;
      for (; c != null; ) ((d = c.$), c.ki(a) && (b = !0), (c = d));
      return b;
    }
    R(a) {
      if (this.children == null) ((this.children = a), (a.$ = null));
      else {
        let b = this.children;
        for (; b.$ != null; ) b = b.$;
        b.$ = a;
      }
      a.parent = this;
    }
    vk() {
      let a = 0,
        b = this.children;
      for (; b != null; ) (++a, (b = b.$));
      return a;
    }
    DN(a, b) {
      if (b == 0) ((a.$ = this.children), (this.children = a));
      else {
        let c = this.children,
          d = 0;
        for (--b; d < b; ) (++d, (c = c.$));
        a.$ = c.$;
        c.$ = a;
      }
      a.parent = this;
    }
    removeChild(a) {
      if (this.children == a) this.children = a.$;
      else {
        let b = this.children;
        for (; b.$ != a; ) b = b.$;
        b.$ = a.$;
      }
      a.$ = null;
      a.parent = null;
      return this;
    }
    pb(a) {
      let b = this.children,
        c = 0;
      for (; c <= a; ) {
        if (c == a) return b;
        b = b.$;
        ++c;
      }
      return null;
    }
    xy(a, b) {
      this.removeChild(a);
      this.DN(a, b);
    }
    ap(a) {
      let b = this.children;
      for (; b != null; ) {
        if (b.name == a) return b;
        b = b.$;
      }
      return null;
    }
    sV(a, b) {
      let c = null,
        d = null;
      for (var e = 0, f = this.children; e < 2 && f != null; )
        (f.$ == a ? ((c = f), ++e) : f.$ == b && ((d = f), ++e), (f = f.$));
      e = a.$;
      f = b.$;
      a.$ = null;
      b.$ = null;
      e == b
        ? (c != null ? (c.$ = b) : (this.children = b), (b.$ = a), (a.$ = f))
        : f == a
          ? (d != null ? (d.$ = a) : (this.children = a), (a.$ = b), (b.$ = e))
          : (c != null ? (c.$ = b) : (this.children = b),
            (b.$ = e),
            d != null ? (d.$ = a) : (this.children = a),
            (a.$ = f));
    }
    tV(a, b) {
      this.sV(this.pb(a), this.pb(b));
    }
    zy(a) {
      if (this.children != a) {
        for (var b = this.children; b.$ != a; ) b = b.$;
        b.$ = a.$;
        a.$ = this.children;
        this.children = a;
      }
    }
    Ey(a) {
      if (a.$ != null) {
        var b = this.children;
        if (b == a) {
          for (; b.$ != null; ) b = b.$;
          b.$ = a;
          this.children = a.$;
        } else {
          for (; b.$ != a; ) b = b.$;
          for (b = b.$ = a.$; b.$ != null; ) b = b.$;
          b.$ = a;
        }
        a.$ = null;
      }
    }
    qz(a) {
      super.qz(a);
      let b = this.children;
      for (; b != null; ) (b.Pd(!1, a), (b = b.$));
    }
    De() {
      if (!((this.flags & 128) > 0) && this.children != null) {
        var a = this.children;
        this.va.from(a.va);
        for (a = a.$; a != null; ) (this.va.ks(a.va), (a = a.$));
        super.De();
      }
    }
    XE(a) {
      let b = this.children;
      for (; b != null; ) (b.Kn(a), (b = b.$));
    }
    Ba() {
      return 301;
    }
  }
  rb.i = !0;
  rb.u = Qa;
  Object.assign(rb.prototype, { j: rb });
  class pc extends hb {
    constructor(a) {
      super(5);
      this.El = 1;
      this.collapsed = null;
      this.yf(a);
    }
    yf(a) {
      this.El = a < 0 ? 0 : a > 1 ? 1 : a;
      this.gb = (this.El * 65535) | 0;
    }
    set(a) {
      a.Jy(this);
    }
    collapse(a) {
      if (a.Ja == 1) return this;
      let b = a.top().El,
        c = a.Ja - 2;
      for (; c > -1; ) b *= a.P[c--].El;
      this.collapsed == null
        ? (this.collapsed = new pc(b))
        : this.collapsed.yf(b);
      return this.collapsed;
    }
  }
  pc.i = !0;
  pc.u = hb;
  Object.assign(pc.prototype, { j: pc });
  class oh {
    constructor() {
      this.list = [];
      this.size = 0;
    }
    add(a) {
      this.list[this.size++] = a;
    }
    get(a) {
      return this.list[a];
    }
  }
  oh.i = !0;
  Object.assign(oh.prototype, { j: oh });
  class Vc extends Xa {
    constructor(a) {
      super(a, 302);
      this.flags |= 512;
      this.size = new F(1, 1, 0, 1);
      this.$c();
    }
    Ob(a, b) {
      let c = this.size;
      c.x = a;
      c.y = b;
      this.$c();
    }
    Yb(a, b) {
      if (!this.va.contains(a)) return !1;
      a = this.Ia.zg(a, new F(0, 0, 0, 1));
      return wj.xV(a.x, a.y, this.size.x, this.size.y)
        ? (b != null && b.add(this), !0)
        : !1;
    }
    nm(a, b) {
      let c = new F(0, 0, 0, 1),
        d = De,
        e = De,
        f = Ee,
        g = Ee,
        h = this.size.x,
        l = this.size.y;
      if (a == this) ((e = d = 0), (f = h), (g = l));
      else {
        if (a == this.parent) {
          var n = this.Gb;
          c.x = 0;
          c.y = 0;
          n.Mb(c, c);
          c.x < d && (d = c.x);
          c.x > f && (f = c.x);
          c.y < e && (e = c.y);
          c.y > g && (g = c.y);
          c.x = h;
          c.y = 0;
          n.Mb(c, c);
          c.x < d && (d = c.x);
          c.x > f && (f = c.x);
          c.y < e && (e = c.y);
          c.y > g && (g = c.y);
          c.x = h;
          c.y = l;
          n.Mb(c, c);
          c.x < d && (d = c.x);
          c.x > f && (f = c.x);
          c.y < e && (e = c.y);
          c.y > g && (g = c.y);
          c.x = 0;
          c.y = l;
          n.Mb(c, c);
        } else
          a.parent == null
            ? ((n = this.Ia),
              (c.x = 0),
              (c.y = 0),
              n.Mb(c, c),
              c.x < d && (d = c.x),
              c.x > f && (f = c.x),
              c.y < e && (e = c.y),
              c.y > g && (g = c.y),
              (c.x = h),
              (c.y = 0),
              n.Mb(c, c),
              c.x < d && (d = c.x),
              c.x > f && (f = c.x),
              c.y < e && (e = c.y),
              c.y > g && (g = c.y),
              (c.x = h),
              (c.y = l),
              n.Mb(c, c),
              c.x < d && (d = c.x),
              c.x > f && (f = c.x),
              c.y < e && (e = c.y),
              c.y > g && (g = c.y),
              (c.x = 0),
              (c.y = l),
              n.Mb(c, c))
            : ((n = this.Ia),
              (a = a.Ia),
              (c.x = 0),
              (c.y = 0),
              n.Mb(c, c),
              a.zg(c, c),
              c.x < d && (d = c.x),
              c.x > f && (f = c.x),
              c.y < e && (e = c.y),
              c.y > g && (g = c.y),
              (c.x = h),
              (c.y = 0),
              n.Mb(c, c),
              a.zg(c, c),
              c.x < d && (d = c.x),
              c.x > f && (f = c.x),
              c.y < e && (e = c.y),
              c.y > g && (g = c.y),
              (c.x = h),
              (c.y = l),
              n.Mb(c, c),
              a.zg(c, c),
              c.x < d && (d = c.x),
              c.x > f && (f = c.x),
              c.y < e && (e = c.y),
              c.y > g && (g = c.y),
              (c.x = 0),
              (c.y = l),
              n.Mb(c, c),
              a.zg(c, c));
        c.x < d && (d = c.x);
        c.x > f && (f = c.x);
        c.y < e && (e = c.y);
        c.y > g && (g = c.y);
      }
      b == null
        ? (b = new ia(d, e, f, g))
        : ((b.A = d), (b.F = e), (b.C = f), (b.H = g));
      return b;
    }
    $c() {
      super.$c();
      var a = this.size.x / 2;
      let b = this.size.y / 2;
      this.ga.D.x = a;
      this.ga.D.y = b;
      this.ga.aa = Math.sqrt(a * a + b * b);
      this.ga.type == 302 &&
        ((a = this.ga.jb),
        (a.A = 0),
        (a.F = 0),
        (a.C = this.size.x),
        (a.H = this.size.y));
    }
    Ba() {
      return 401;
    }
  }
  Vc.i = !0;
  Vc.u = Xa;
  Object.assign(Vc.prototype, { j: Vc });
  class La {
    static Ww(a, b) {
      for (a = a.parent; a != null; ) {
        if (a == b) return !0;
        a = a.parent;
      }
      return !1;
    }
    static rg(a) {
      let b = La.Yy;
      b.clear();
      for (b.gg(Qa.count); a != null; ) ((b.P[b.Ja++] = a), (a = a.parent));
      a = b.P[--b.Ja];
      for (a.Ia.set(a.Gb); b.Ja > 0; ) {
        let c = b.P[--b.Ja];
        (c.flags & 64) <= 0 &&
          ((c.flags & 512) > 0 ? c.Ia.QF(a.Ia, c.Gb) : c.Ia.PF(a.Ia, c.Gb));
        a = c;
      }
    }
    static PP(a, b) {
      let c = La.kV;
      c.gg(Qa.count);
      var d = La.Yy;
      d.gg(Qa.count);
      d.clear();
      for (d.P[d.Ja++] = a; d.Ja > 0; )
        if (((a = d.P[--d.Ja]), a.ef != 1))
          if ((a.flags & 2) > 0) a.effect != null && (c.P[c.Ja++] = a);
          else if ((a.flags & 1) > 0)
            for (a = a.children; a != null; ) ((d.P[d.Ja++] = a), (a = a.$));
      b.clear();
      b.gg(c.Ja);
      d = 0;
      for (a = c.Ja; d < a; ) {
        ++d;
        let e = c.P[--c.Ja];
        b.P[b.da++] = e;
      }
    }
    static nm(a, b, c) {
      let d = De,
        e = De,
        f = Ee,
        g = Ee,
        h = La.Yy;
      h.gg(Qa.count);
      h.clear();
      for (h.P[h.Ja++] = a; h.Ja > 0; )
        if (((a = h.P[--h.Ja]), (a.flags & 2) > 0))
          (a.nm(b, c),
            c.A < d && (d = c.A),
            c.F < e && (e = c.F),
            c.C > f && (f = c.C),
            c.H > g && (g = c.H));
        else if ((a.flags & 1) > 0)
          for (a = a.children; a != null; ) ((h.P[h.Ja++] = a), (a = a.$));
      c.A = d;
      c.F = e;
      c.C = f;
      c.H = g;
      return c;
    }
    static HV(a, b, c) {
      let d = c.A,
        e = c.F,
        f = c.C,
        g = c.H,
        h = De,
        l = De,
        n = Ee,
        q = Ee,
        r = new F(0, 0, 0, 1);
      b == a
        ? ((h = c.A), (l = c.F), (n = c.C), (q = c.H))
        : (b == a.parent
            ? ((b = a.Gb),
              (r.x = d),
              (r.y = e),
              b.Mb(r, r),
              r.x < h && (h = r.x),
              r.x > n && (n = r.x),
              r.y < l && (l = r.y),
              r.y > q && (q = r.y),
              (r.x = f),
              (r.y = e),
              b.Mb(r, r),
              r.x < h && (h = r.x),
              r.x > n && (n = r.x),
              r.y < l && (l = r.y),
              r.y > q && (q = r.y),
              (r.x = f),
              (r.y = g),
              b.Mb(r, r),
              r.x < h && (h = r.x),
              r.x > n && (n = r.x),
              r.y < l && (l = r.y),
              r.y > q && (q = r.y),
              (r.x = d),
              (r.y = g),
              b.Mb(r, r))
            : b.parent == null
              ? ((b = a.Ia),
                (r.x = d),
                (r.y = e),
                b.Mb(r, r),
                r.x < h && (h = r.x),
                r.x > n && (n = r.x),
                r.y < l && (l = r.y),
                r.y > q && (q = r.y),
                (r.x = f),
                (r.y = e),
                b.Mb(r, r),
                r.x < h && (h = r.x),
                r.x > n && (n = r.x),
                r.y < l && (l = r.y),
                r.y > q && (q = r.y),
                (r.x = f),
                (r.y = g),
                b.Mb(r, r),
                r.x < h && (h = r.x),
                r.x > n && (n = r.x),
                r.y < l && (l = r.y),
                r.y > q && (q = r.y),
                (r.x = d),
                (r.y = g),
                b.Mb(r, r))
              : ((a = a.Ia),
                (b = b.Ia),
                (r.x = d),
                (r.y = e),
                a.Mb(r, r),
                b.zg(r, r),
                r.x < h && (h = r.x),
                r.x > n && (n = r.x),
                r.y < l && (l = r.y),
                r.y > q && (q = r.y),
                (r.x = f),
                (r.y = e),
                a.Mb(r, r),
                b.zg(r, r),
                r.x < h && (h = r.x),
                r.x > n && (n = r.x),
                r.y < l && (l = r.y),
                r.y > q && (q = r.y),
                (r.x = f),
                (r.y = g),
                a.Mb(r, r),
                b.zg(r, r),
                r.x < h && (h = r.x),
                r.x > n && (n = r.x),
                r.y < l && (l = r.y),
                r.y > q && (q = r.y),
                (r.x = d),
                (r.y = g),
                a.Mb(r, r),
                b.zg(r, r)),
          r.x < h && (h = r.x),
          r.x > n && (n = r.x),
          r.y < l && (l = r.y),
          r.y > q && (q = r.y));
      return new ia(h, l, n, q);
    }
  }
  La.i = !0;
  class Fe {}
  Fe.i = !0;
  Fe.bf = !0;
  Object.assign(Fe.prototype, { j: Fe });
  class Gg {
    constructor() {
      this.WC = new gb(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      this.lf = new gb(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      this.L = 15;
      this.scale = new F(1, 1, 1, 1);
      this.translate = new F(0, 0, 0, 1);
      this.matrix = new gb(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    set(a) {
      var b = this.translate,
        c = a.translate;
      b.x = c.x;
      b.y = c.y;
      b.z = c.z;
      b = this.scale;
      c = a.scale;
      b.x = c.x;
      b.y = c.y;
      b.z = c.z;
      b = this.matrix;
      c = a.matrix;
      b.m11 = c.m11;
      b.m12 = c.m12;
      b.m13 = c.m13;
      b.m21 = c.m21;
      b.m22 = c.m22;
      b.m23 = c.m23;
      b.m31 = c.m31;
      b.m32 = c.m32;
      b.m33 = c.m33;
      this.L = a.L | 240;
    }
    uy(a) {
      this.translate.x = a.translate.x;
      this.translate.y = a.translate.y;
      this.scale.x = a.scale.x;
      this.scale.y = a.scale.y;
      let b = this.matrix,
        c = a.matrix;
      b.m11 = c.m11;
      b.m12 = c.m12;
      b.m21 = c.m21;
      b.m22 = c.m22;
      this.L = a.L | 240;
    }
    EF() {
      let a = this.matrix;
      a.m11 = 1;
      a.m12 = 0;
      a.m21 = 0;
      a.m22 = 1;
      this.L |= 506;
    }
    aQ() {
      let a, b;
      if ((this.L & 8) > 0) {
        a = Math.abs(this.scale.x);
        b = Math.abs(this.scale.y);
        var c = Math.abs(this.scale.z);
      } else
        ((c = this.matrix),
          (a = Math.abs(c.m11) + Math.abs(c.m12) + Math.abs(c.m13)),
          (b = Math.abs(c.m21) + Math.abs(c.m22) + Math.abs(c.m23)),
          (c = Math.abs(c.m31) + Math.abs(c.m32) + Math.abs(c.m33)));
      return Math.max(Math.max(a, b), c);
    }
    PF(a, b) {
      let c = a.L,
        d = b.L;
      if ((c & 1) > 0) this.set(b);
      else if ((d & 1) > 0) this.set(a);
      else if ((c & 12) == 12 && (d & 8) > 0) {
        if ((c & 2) > 0) {
          let f = b.matrix,
            g = this.matrix;
          g.m11 = f.m11;
          g.m12 = f.m12;
          g.m13 = f.m13;
          g.m21 = f.m21;
          g.m22 = f.m22;
          g.m23 = f.m23;
          g.m31 = f.m31;
          g.m32 = f.m32;
          g.m33 = f.m33;
        } else if ((d & 2) > 0) {
          let f = a.matrix,
            g = this.matrix;
          g.m11 = f.m11;
          g.m12 = f.m12;
          g.m13 = f.m13;
          g.m21 = f.m21;
          g.m22 = f.m22;
          g.m23 = f.m23;
          g.m31 = f.m31;
          g.m32 = f.m32;
          g.m33 = f.m33;
        } else {
          let f = a.matrix,
            g = b.matrix,
            h = g.m11,
            l = g.m12,
            n = g.m13,
            q = g.m21,
            r = g.m22,
            u = g.m23,
            v = g.m31,
            A = g.m32,
            D = g.m33,
            B = f.m11 * l + f.m12 * r + f.m13 * A,
            G = f.m11 * n + f.m12 * u + f.m13 * D,
            E = f.m21 * l + f.m22 * r + f.m23 * A,
            T = f.m21 * n + f.m22 * u + f.m23 * D,
            S = f.m31 * l + f.m32 * r + f.m33 * A,
            U = f.m31 * n + f.m32 * u + f.m33 * D,
            Z = this.matrix;
          Z.m11 = f.m11 * h + f.m12 * q + f.m13 * v;
          Z.m12 = B;
          Z.m13 = G;
          Z.m21 = f.m21 * h + f.m22 * q + f.m23 * v;
          Z.m22 = E;
          Z.m23 = T;
          Z.m31 = f.m31 * h + f.m32 * q + f.m33 * v;
          Z.m32 = S;
          Z.m33 = U;
        }
        this.L = (this.L & -4) | 248;
        let e = a.scale.x;
        if ((c & 2) > 0) {
          let f = a.scale.x,
            g = b.translate,
            h = a.translate;
          this.translate.x = g.x * f + h.x;
          this.translate.y = g.y * f + h.y;
          this.translate.z = g.z * f + h.z;
        } else {
          let f = a.scale.x,
            g = a.matrix,
            h = b.translate,
            l = h.x,
            n = h.y,
            q = h.z,
            r = a.translate;
          this.translate.x = (g.m11 * l + g.m12 * n + g.m13 * q) * f + r.x;
          this.translate.y = (g.m21 * l + g.m22 * n + g.m23 * q) * f + r.y;
          this.translate.z = (g.m31 * l + g.m32 * n + g.m33 * q) * f + r.z;
        }
        this.L = (this.L & -2) | 240;
        if ((d & 4) > 0)
          ((this.scale.x = this.scale.y = this.scale.z = e * b.scale.x),
            (this.L = (this.L & -2) | 244));
        else {
          let f = b.scale;
          this.scale.x = f.x * e;
          this.scale.y = f.y * e;
          this.scale.z = f.z * e;
          this.L = (this.L & -6) | 240;
        }
      } else {
        if ((c & 8) > 0 && (d & 8) > 0) {
          let e = a.matrix,
            f = a.scale,
            g = f.x,
            h = f.y,
            l = f.z,
            n = e.m11 * g,
            q = e.m12 * h,
            r = e.m13 * l,
            u = e.m21 * g,
            v = e.m22 * h,
            A = e.m23 * l,
            D = e.m31 * g,
            B = e.m32 * h,
            G = e.m33 * l,
            E = b.matrix,
            T = b.scale,
            S = T.x,
            U = T.y,
            Z = T.z,
            ba = E.m11 * S,
            ca = E.m12 * U,
            W = E.m13 * Z,
            la = E.m21 * S,
            pa = E.m22 * U,
            ha = E.m23 * Z,
            aa = E.m31 * S,
            wa = E.m32 * U,
            Ea = E.m33 * Z,
            ya = this.matrix;
          ya.m11 = n * ba + q * la + r * aa;
          ya.m12 = n * ca + q * pa + r * wa;
          ya.m13 = n * W + q * ha + r * Ea;
          ya.m21 = u * ba + v * la + A * aa;
          ya.m22 = u * ca + v * pa + A * wa;
          ya.m23 = u * W + v * ha + A * Ea;
          ya.m31 = D * ba + B * la + G * aa;
          ya.m32 = D * ca + B * pa + G * wa;
          ya.m33 = D * W + B * ha + G * Ea;
          this.L = 240;
          let Ja = b.translate,
            Wb = Ja.x,
            tb = Ja.y,
            ic = Ja.z,
            pe = a.translate;
          this.translate.x = n * Wb + q * tb + r * ic + pe.x;
          this.translate.y = u * Wb + v * tb + A * ic + pe.y;
          this.translate.z = D * Wb + B * tb + G * ic + pe.z;
        } else if ((c & 8) > 0) {
          let e = a.matrix,
            f = a.scale,
            g = f.x,
            h = f.y,
            l = f.z,
            n = e.m11 * g,
            q = e.m12 * h,
            r = e.m13 * l,
            u = e.m21 * g,
            v = e.m22 * h,
            A = e.m23 * l,
            D = e.m31 * g,
            B = e.m32 * h,
            G = e.m33 * l,
            E = b.matrix,
            T = E.m11,
            S = E.m12,
            U = E.m13,
            Z = E.m21,
            ba = E.m22,
            ca = E.m23,
            W = E.m31,
            la = E.m32,
            pa = E.m33,
            ha = this.matrix;
          ha.m11 = n * T + q * Z + r * W;
          ha.m12 = n * S + q * ba + r * la;
          ha.m13 = n * U + q * ca + r * pa;
          ha.m21 = u * T + v * Z + A * W;
          ha.m22 = u * S + v * ba + A * la;
          ha.m23 = u * U + v * ca + A * pa;
          ha.m31 = D * T + B * Z + G * W;
          ha.m32 = D * S + B * ba + G * la;
          ha.m33 = D * U + B * ca + G * pa;
          this.L = 240;
          let aa = b.translate,
            wa = aa.x,
            Ea = aa.y,
            ya = aa.z,
            Ja = a.translate;
          this.translate.x = n * wa + q * Ea + r * ya + Ja.x;
          this.translate.y = u * wa + v * Ea + A * ya + Ja.y;
          this.translate.z = D * wa + B * Ea + G * ya + Ja.z;
        } else if ((d & 8) > 0) {
          let e = a.matrix,
            f = b.matrix,
            g = b.scale,
            h = g.x,
            l = g.y,
            n = g.z,
            q = f.m11 * h,
            r = f.m12 * l,
            u = f.m13 * n,
            v = f.m21 * h,
            A = f.m22 * l,
            D = f.m23 * n,
            B = f.m31 * h,
            G = f.m32 * l,
            E = f.m33 * n,
            T = e.m11 * r + e.m12 * A + e.m13 * G,
            S = e.m11 * u + e.m12 * D + e.m13 * E,
            U = e.m21 * r + e.m22 * A + e.m23 * G,
            Z = e.m21 * u + e.m22 * D + e.m23 * E,
            ba = e.m31 * r + e.m32 * A + e.m33 * G,
            ca = e.m31 * u + e.m32 * D + e.m33 * E,
            W = this.matrix;
          W.m11 = e.m11 * q + e.m12 * v + e.m13 * B;
          W.m12 = T;
          W.m13 = S;
          W.m21 = e.m21 * q + e.m22 * v + e.m23 * B;
          W.m22 = U;
          W.m23 = Z;
          W.m31 = e.m31 * q + e.m32 * v + e.m33 * B;
          W.m32 = ba;
          W.m33 = ca;
          this.L = 240;
          let la = b.translate,
            pa = la.x,
            ha = la.y,
            aa = la.z,
            wa = a.translate;
          this.translate.x = e.m11 * pa + e.m12 * ha + e.m13 * aa + wa.x;
          this.translate.y = e.m21 * pa + e.m22 * ha + e.m23 * aa + wa.y;
          this.translate.z = e.m31 * pa + e.m32 * ha + e.m33 * aa + wa.z;
        } else {
          let e = a.matrix,
            f = b.matrix,
            g = f.m11,
            h = f.m12,
            l = f.m13,
            n = f.m21,
            q = f.m22,
            r = f.m23,
            u = f.m31,
            v = f.m32,
            A = f.m33,
            D = e.m11 * h + e.m12 * q + e.m13 * v,
            B = e.m11 * l + e.m12 * r + e.m13 * A,
            G = e.m21 * h + e.m22 * q + e.m23 * v,
            E = e.m21 * l + e.m22 * r + e.m23 * A,
            T = e.m31 * h + e.m32 * q + e.m33 * v,
            S = e.m31 * l + e.m32 * r + e.m33 * A,
            U = this.matrix;
          U.m11 = e.m11 * g + e.m12 * n + e.m13 * u;
          U.m12 = D;
          U.m13 = B;
          U.m21 = e.m21 * g + e.m22 * n + e.m23 * u;
          U.m22 = G;
          U.m23 = E;
          U.m31 = e.m31 * g + e.m32 * n + e.m33 * u;
          U.m32 = T;
          U.m33 = S;
          this.L = 240;
          let Z = b.translate,
            ba = Z.x,
            ca = Z.y,
            W = Z.z,
            la = a.translate;
          this.translate.x = e.m11 * ba + e.m12 * ca + e.m13 * W + la.x;
          this.translate.y = e.m21 * ba + e.m22 * ca + e.m23 * W + la.y;
          this.translate.z = e.m31 * ba + e.m32 * ca + e.m33 * W + la.z;
        }
        this.L = (this.L & -2) | 240;
      }
    }
    QF(a, b) {
      var c = a.L,
        d = b.L;
      if ((c & 1) > 0) this.uy(b);
      else if ((d & 1) > 0) this.uy(a);
      else if ((c & 12) == 12 && (d & 8) > 0) {
        if ((c & 2) > 0) {
          var e = b.matrix,
            f = this.matrix;
          f.m11 = e.m11;
          f.m12 = e.m12;
          f.m21 = e.m21;
          f.m22 = e.m22;
        } else if ((d & 2) > 0)
          ((e = a.matrix),
            (f = this.matrix),
            (f.m11 = e.m11),
            (f.m12 = e.m12),
            (f.m21 = e.m21),
            (f.m22 = e.m22));
        else {
          e = a.matrix;
          var g = b.matrix;
          f = g.m11;
          var h = g.m12,
            l = g.m21,
            n = g.m22;
          g = e.m11 * h + e.m12 * n;
          h = e.m21 * h + e.m22 * n;
          n = this.matrix;
          n.m11 = e.m11 * f + e.m12 * l;
          n.m12 = g;
          n.m21 = e.m21 * f + e.m22 * l;
          n.m22 = h;
        }
        this.L = (this.L & -4) | 504;
        e = a.scale.x;
        (c & 2) > 0
          ? ((c = a.scale.x),
            (f = b.translate),
            (a = a.translate),
            (this.translate.x = f.x * c + a.x),
            (this.translate.y = f.y * c + a.y))
          : ((c = a.scale.x),
            (f = a.matrix),
            (g = b.translate),
            (l = g.x),
            (g = g.y),
            (a = a.translate),
            (this.translate.x = (f.m11 * l + f.m12 * g) * c + a.x),
            (this.translate.y = (f.m21 * l + f.m22 * g) * c + a.y));
        this.L = (this.L & -2) | 496;
        (d & 4) > 0
          ? ((this.scale.x = this.scale.y = e * b.scale.x),
            (this.L = (this.L & -2) | 500))
          : ((a = b.scale),
            (this.scale.x = a.x * e),
            (this.scale.y = a.y * e),
            (this.L = (this.L & -6) | 496));
      } else {
        if ((c & 8) > 0 && (d & 8) > 0) {
          f = a.matrix;
          d = a.scale;
          e = d.x;
          l = d.y;
          d = f.m11 * e;
          c = f.m12 * l;
          e *= f.m21;
          f = f.m22 * l;
          h = b.matrix;
          l = b.scale;
          n = l.x;
          var q = l.y;
          l = h.m11 * n;
          g = h.m12 * q;
          n *= h.m21;
          h = h.m22 * q;
          q = this.matrix;
          q.m11 = d * l + c * n;
          q.m12 = d * g + c * h;
          q.m21 = e * l + f * n;
          q.m22 = e * g + f * h;
          this.L = (this.L & -16) | 496;
          l = b.translate;
          b = l.x;
          l = l.y;
          a = a.translate;
          this.translate.x = d * b + c * l + a.x;
          this.translate.y = e * b + f * l + a.y;
        } else
          (c & 8) > 0
            ? ((f = a.matrix),
              (d = a.scale),
              (e = d.x),
              (l = d.y),
              (d = f.m11 * e),
              (c = f.m12 * l),
              (e *= f.m21),
              (f = f.m22 * l),
              (n = b.matrix),
              (l = n.m11),
              (g = n.m12),
              (h = n.m21),
              (n = n.m22),
              (q = this.matrix),
              (q.m11 = d * l + c * h),
              (q.m12 = d * g + c * n),
              (q.m21 = e * l + f * h),
              (q.m22 = e * g + f * n),
              (this.L = (this.L & -16) | 496),
              (l = b.translate),
              (b = l.x),
              (l = l.y),
              (a = a.translate),
              (this.translate.x = d * b + c * l + a.x),
              (this.translate.y = e * b + f * l + a.y))
            : (d & 8) > 0
              ? ((d = a.matrix),
                (l = b.matrix),
                (c = b.scale),
                (e = c.x),
                (g = c.y),
                (c = l.m11 * e),
                (f = l.m12 * g),
                (e *= l.m21),
                (g *= l.m22),
                (l = d.m11 * f + d.m12 * g),
                (f = d.m21 * f + d.m22 * g),
                (g = this.matrix),
                (g.m11 = d.m11 * c + d.m12 * e),
                (g.m12 = l),
                (g.m21 = d.m21 * c + d.m22 * e),
                (g.m22 = f),
                (this.L = (this.L & -16) | 496),
                (c = b.translate),
                (b = c.x),
                (c = c.y),
                (a = a.translate),
                (this.translate.x = d.m11 * b + d.m12 * c + a.x),
                (this.translate.y = d.m21 * b + d.m22 * c + a.y))
              : ((d = a.matrix),
                (f = b.matrix),
                (c = f.m11),
                (l = f.m12),
                (e = f.m21),
                (g = f.m22),
                (f = d.m11 * l + d.m12 * g),
                (l = d.m21 * l + d.m22 * g),
                (g = this.matrix),
                (g.m11 = d.m11 * c + d.m12 * e),
                (g.m12 = f),
                (g.m21 = d.m21 * c + d.m22 * e),
                (g.m22 = l),
                (this.L = (this.L & -16) | 496),
                (c = b.translate),
                (b = c.x),
                (c = c.y),
                (a = a.translate),
                (this.translate.x = d.m11 * b + d.m12 * c + a.x),
                (this.translate.y = d.m21 * b + d.m22 * c + a.y));
        this.L = (this.L & -2) | 496;
      }
    }
    LN(a, b) {
      (this.L & 16) > 0 && this.ku();
      let c = this.lf,
        d = a.x,
        e = a.y;
      a = a.z;
      b.x = c.m11 * d + c.m12 * e + c.m13 * a + c.m14;
      b.y = c.m21 * d + c.m22 * e + c.m23 * a + c.m24;
      b.z = c.m31 * d + c.m32 * e + c.m33 * a + c.m34;
      return b;
    }
    Mb(a, b) {
      (this.L & 64) > 0 && this.Jn();
      let c = this.lf,
        d = c.m21 * a.x + c.m22 * a.y + c.m24;
      b.x = c.m11 * a.x + c.m12 * a.y + c.m14;
      b.y = d;
      return b;
    }
    zg(a, b) {
      (this.L & 128) > 0 && this.ZV();
      let c = this.WC,
        d = c.m21 * a.x + c.m22 * a.y + c.m24;
      b.x = c.m11 * a.x + c.m12 * a.y + c.m14;
      b.y = d;
      return b;
    }
    ku() {
      let a = this.lf;
      if ((this.L & 1) > 0)
        ((a.m11 = 1),
          (a.m12 = 0),
          (a.m13 = 0),
          (a.m21 = 0),
          (a.m22 = 1),
          (a.m23 = 0),
          (a.m31 = 0),
          (a.m32 = 0),
          (a.m33 = 1),
          (a.m14 = 0),
          (a.m24 = 0),
          (a.m34 = 0));
      else {
        var b = this.matrix;
        if ((this.L & 8) > 0) {
          let c = this.scale.x,
            d = this.scale.y,
            e = this.scale.z;
          a.m11 = b.m11 * c;
          a.m12 = b.m12 * d;
          a.m13 = b.m13 * e;
          a.m21 = b.m21 * c;
          a.m22 = b.m22 * d;
          a.m23 = b.m23 * e;
          a.m31 = b.m31 * c;
          a.m32 = b.m32 * d;
          a.m33 = b.m33 * e;
        } else
          ((a.m11 = b.m11),
            (a.m12 = b.m12),
            (a.m13 = b.m13),
            (a.m21 = b.m21),
            (a.m22 = b.m22),
            (a.m23 = b.m23),
            (a.m31 = b.m31),
            (a.m32 = b.m32),
            (a.m33 = b.m33));
        b = this.translate;
        a.m14 = b.x;
        a.m24 = b.y;
        a.m34 = b.z;
      }
      this.L &= -81;
    }
    Jn() {
      let a = this.lf;
      if ((this.L & 1) > 0)
        ((a.m11 = 1),
          (a.m12 = 0),
          (a.m21 = 0),
          (a.m22 = 1),
          (a.m14 = 0),
          (a.m24 = 0));
      else {
        let c = this.matrix;
        if ((this.L & 8) > 0) {
          var b = this.scale;
          let d = b.x;
          b = b.y;
          a.m11 = c.m11 * d;
          a.m12 = c.m12 * b;
          a.m21 = c.m21 * d;
          a.m22 = c.m22 * b;
        } else
          ((a.m11 = c.m11), (a.m12 = c.m12), (a.m21 = c.m21), (a.m22 = c.m22));
        a.m14 = this.translate.x;
        a.m24 = this.translate.y;
      }
      this.L &= -65;
    }
    ZV() {
      let a = this.WC;
      var b = this.matrix;
      if ((this.L & 1) > 0)
        ((a.m11 = 1),
          (a.m12 = 0),
          (a.m21 = 0),
          (a.m22 = 1),
          (a.m14 = 0),
          (a.m24 = 0));
      else {
        if ((this.L & 8) > 0)
          if ((this.L & 12) == 12) {
            var c = 1 / this.scale.x,
              d = b.m12 * c;
            a.m11 = b.m11 * c;
            a.m12 = b.m21 * c;
            a.m21 = d;
            a.m22 = b.m22 * c;
          } else {
            c = this.scale;
            var e = c.x,
              f = c.y;
            c = b.m11 * e;
            d = b.m12 * f;
            e *= b.m21;
            b = b.m22 * f;
            f = 1 / (c * b - d * e);
            a.m11 = b * f;
            a.m12 = -d * f;
            a.m21 = -e * f;
            a.m22 = c * f;
          }
        else
          ((this.L & 64) > 0 && this.Jn(),
            (b = this.lf),
            (c = 1 / (b.m11 * b.m22 - b.m12 * b.m21)),
            (d = b.m11 * c),
            (a.m11 = b.m22 * c),
            (a.m12 = -b.m12 * c),
            (a.m21 = -b.m21 * c),
            (a.m22 = d));
        a.m14 = -(a.m11 * this.translate.x + a.m12 * this.translate.y);
        a.m24 = -(a.m21 * this.translate.x + a.m22 * this.translate.y);
      }
      this.L &= -129;
    }
  }
  Gg.i = !0;
  Object.assign(Gg.prototype, { j: Gg });
  class ig extends hb {
    constructor() {
      super(3);
    }
    set() {}
  }
  ig.i = !0;
  ig.u = hb;
  Object.assign(ig.prototype, { j: ig });
  class bc {
    constructor(a, b) {
      this.B = this.xa = new Xa();
      this.B.th = this;
      this.xa.$h(new pc(1));
      a != null ? this.xa.kg(new xe(a)) : this.xa.kg(new ve(b));
    }
    X(a) {
      this.xa.Ti(5).yf(a);
    }
    M(a) {
      this.xa.ef = a ? 2 : 1;
    }
    G() {
      this.xa.G();
      this.B = this.xa = null;
    }
  }
  bc.i = !0;
  bc.Lb = [Fe];
  Object.assign(bc.prototype, { j: bc });
  class pb {
    constructor(a) {
      pb.count++;
      this.B = a;
      a.th = this;
      this.MN = this.Ba();
      this.flags = 6;
      this.xg = this.md = this.wg = this.Wa = 1;
      this.ho =
        this.fo =
        this.nh =
        this.mh =
        this.ph =
        this.oh =
        this.vg =
        this.je =
          0;
      this.bd = 1;
      this.bv = !0;
    }
    G() {
      this.B = null;
      pb.count--;
    }
    remove() {
      let a = this.B.parent;
      a != null && a.removeChild(this.B);
    }
    Ih() {
      var a = this.B.parent;
      return a != null && ((a = a.th), a != null && a.MN == 204) ? a : null;
    }
    Qy(a) {
      this.B.name = a;
    }
    X(a) {
      a = a < 0 ? 0 : a > 1 ? 1 : a;
      if (this.bd != a) {
        this.bd = a;
        let b = this.B;
        if (a < 1) {
          let c = b.Ti(5);
          c == null ? b.$h(new pc(this.bd)) : c.yf(a);
        } else b.st(5);
        b.flags |= 32;
      }
    }
    Sf() {
      return this.bv;
    }
    M(a) {
      this.bv != a && ((this.bv = a), (this.B.ef = a ? 0 : 1));
    }
    qa(a) {
      this.Wa != a &&
        ((this.wg = this.Wa = a),
        $c(a, 0.001) && (this.wg = 0.001 * (a >= 0 ? 1 : -1)),
        a == 1 && this.md == 1
          ? ((this.flags = (this.flags & -3) | 4),
            (a = this.B.Gb),
            (a.scale.x = 1),
            (a.scale.y = 1),
            (a.L |= 500))
          : (this.flags &= -7),
        this.wc());
    }
    nb(a) {
      this.md != a &&
        ((this.xg = this.md = a),
        $c(a, 0.001) && (this.xg = 0.001 * (a >= 0 ? 1 : -1)),
        a == 1 && this.Wa == 1
          ? ((this.flags = (this.flags & -3) | 4),
            (a = this.B.Gb),
            (a.scale.x = 1),
            (a.scale.y = 1),
            (a.L |= 500))
          : (this.flags &= -7),
        this.wc());
    }
    I(a) {
      if (this.Wa != a || this.md != a)
        ((this.Wa = this.md = a),
          $c(a, 0.001)
            ? (this.wg = this.xg = 0.001 * (a >= 0 ? 1 : -1))
            : (this.wg = this.xg = a),
          (this.flags |= 2),
          a == 1
            ? ((a = this.B.Gb),
              (a.scale.x = 1),
              (a.scale.y = 1),
              (a.L |= 500),
              (this.flags |= 4))
            : (this.flags &= -5),
          this.wc());
    }
    setScale(a, b) {
      if (this.Wa != a || this.md != b) {
        if (a == 1 && b == 1) {
          this.flags = (this.flags & -3) | 4;
          let c = this.B.Gb;
          c.scale.x = 1;
          c.scale.y = 1;
          c.L |= 500;
        } else this.flags = a == b ? (this.flags &= -5) | 2 : this.flags & -7;
        this.Wa = this.wg = a;
        this.md = this.xg = b;
        $c(a, 0.001) && (this.wg = 0.001 * (a >= 0 ? 1 : -1));
        $c(b, 0.001) && (this.xg = 0.001 * (b >= 0 ? 1 : -1));
        this.wc();
      }
    }
    na(a) {
      if (this.je != a) {
        this.je = a;
        let b;
        b = a % 360;
        b < 0 && (b += 360);
        this.vg = b * Oa;
        a == 0 ? ((this.flags &= -2), this.B.Gb.EF()) : (this.flags |= 1);
        this.wc();
      }
    }
    ya() {
      return this.oh;
    }
    m(a) {
      this.oh != a && ((this.oh = a), this.wc());
      return a;
    }
    Xa() {
      return this.ph;
    }
    o(a) {
      this.ph != a && ((this.ph = a), this.wc());
    }
    bV(a) {
      if (this.oh != a.x || this.ph != a.y)
        ((this.oh = a.x), (this.ph = a.y), this.wc());
    }
    PU(a, b, c, d) {
      let e = !1;
      if (this.oh != a || this.ph != b)
        ((this.oh = a), (this.ph = b), (e = !0));
      this.je != 0 &&
        ((a = this.je = 0),
        a < 0 && (a += 360),
        (this.vg = a * Oa),
        (this.flags &= -2),
        this.B.Gb.EF(),
        (e = !0));
      if (this.Wa != c || this.md != d)
        ((this.wg = c),
          $c(c, 0.001) && (this.wg = 0.001 * (c >= 0 ? 1 : -1)),
          (this.xg = d),
          $c(d, 0.001) && (this.xg = 0.001 * (d >= 0 ? 1 : -1)),
          c == d
            ? c == 1
              ? ((this.flags = (this.flags & -3) | 4),
                (c = this.B.Gb),
                (c.scale.x = 1),
                (c.scale.y = 1),
                (c.L |= 500))
              : (this.flags = (this.flags & -5) | 2)
            : (this.flags &= -7),
          (e = !0));
      e && this.wc();
    }
    aV(a) {
      let b = a.x;
      a = a.y;
      b == null && (b = this.mh);
      a == null && (a = this.nh);
      if (this.mh != b || this.nh != a)
        ((this.mh = b), (this.nh = a), this.wc());
    }
    gh(a, b) {
      a == null && (a = this.mh);
      b == null && (b = this.nh);
      if (this.mh != a || this.nh != b)
        ((this.mh = a), (this.nh = b), this.wc());
    }
    wf(a, b) {
      a == null && (a = this.fo);
      b == null && (b = this.ho);
      if (this.fo != a || this.ho != b)
        ((this.fo = a), (this.ho = b), this.wc());
    }
    D() {
      this.Eo();
      this.Sl();
    }
    update(a) {
      this.B.ki(a);
      this.B.Pd();
      this.B.Kn();
    }
    hz(a) {
      La.rg(this.B);
      return this.B.Ia.Mb(a, new F(0, 0, 0, 1));
    }
    gz(a) {
      La.rg(this.B);
      return this.B.Ia.zg(a, new F(0, 0, 0, 1));
    }
    Vb() {
      return new ji(this);
    }
    ge(a) {
      a == null ? this.B.st(0) : this.B.$h(new re(a, !1));
    }
    lq(a) {
      var b = this.B.Ti(2);
      if (a != null) {
        b == null && ((b = new zc()), this.B.$h(b));
        b = b.transform;
        var c = b.fc,
          d = a.fc;
        c.x = d.x;
        c.y = d.y;
        c.z = d.z;
        c.w = d.w;
        c = b.offset;
        d = a.offset;
        c.x = d.x;
        c.y = d.y;
        c.z = d.z;
        c.w = d.w;
        b.hint = a.hint;
      } else b != null && this.B.st(2);
    }
    YF(a) {
      let b = this.B.Ti(1);
      a != null
        ? (b == null && ((b = new Sc()), this.B.$h(b)), b.OU(a))
        : b != null && this.B.st(1);
    }
    wc() {
      let a = this.B.Gb,
        b = this.oh,
        c = this.ph,
        d = this.mh,
        e = this.nh,
        f = this.fo,
        g = this.ho,
        h = this.wg;
      var l = this.xg,
        n = this.flags;
      if ((n & 1) > 0) {
        let r = Math.sin(this.vg),
          u = Math.cos(this.vg);
        var q = a.matrix;
        q.m11 = u;
        q.m12 = -r;
        q.m21 = r;
        q.m22 = u;
        a.L = (a.L & -4) | 504;
        (n & 4) > 0
          ? ((a.translate.x = -(f * u) + g * r + f + b - d),
            (a.translate.y = -(f * r) - g * u + g + c - e))
          : (n & 2) > 0
            ? ((l = h * f),
              (n = h * g),
              (a.scale.x = a.scale.y = h),
              (a.L = (a.L & -2) | 500),
              (a.translate.x = -(l * u) + n * r + f + b - d),
              (a.translate.y = -(l * r) - n * u + g + c - e))
            : ((n = h * f),
              (q = l * g),
              (a.scale.x = h),
              (a.scale.y = l),
              (a.L = (a.L & -6) | 496),
              (a.translate.x = -(n * u) + q * r + f + b - d),
              (a.translate.y = -(n * r) - q * u + g + c - e));
      } else
        (n & 4) > 0
          ? ((a.translate.x = b - d), (a.translate.y = c - e))
          : (n & 2) > 0
            ? ((a.scale.x = a.scale.y = h),
              (a.L = (a.L & -2) | 500),
              (a.translate.x = -(h * f) + f + b - d),
              (a.translate.y = -(h * g) + g + c - e))
            : ((a.scale.x = h),
              (a.scale.y = l),
              (a.L = (a.L & -6) | 496),
              (a.translate.x = -(h * f) + f + b - d),
              (a.translate.y = -(l * g) + g + c - e));
      a.L = (a.L & -2) | 496;
    }
    Ba() {
      return 104;
    }
  }
  pb.i = !0;
  pb.Lb = [Ad, Fe];
  Object.assign(pb.prototype, { j: pb });
  class C extends pb {
    constructor(a, b, c) {
      super(new Vc(a != null ? a.node : null));
      this.Ze = new ia(0, 0, 0, 0);
      this.Lf = this.ur = null;
      this.Y = new F(0, 0, 0, 1);
      b != null && this.mg(b, c);
      pb.count++;
    }
    G() {
      this.B != null &&
        (this.B.G(), (this.Y = this.Lf = this.ur = this.Ze = null), super.G());
    }
    ha() {
      if ((this.flags & 1) == 0) return this.Y.x * Math.abs(this.Wa);
      var a = (this.Y.x * Math.abs(this.Wa)) / 2;
      let b = (this.Y.y * Math.abs(this.md)) / 2,
        c = -Math.sin(this.vg),
        d = Math.cos(this.vg),
        e;
      d > 0 ? ((e = -(d * a)), (a *= d)) : ((e = d * a), (a = -(d * a)));
      c > 0 ? ((e -= c * b), (a += c * b)) : ((e += c * b), (a -= c * b));
      return a - e;
    }
    Ry(a) {
      this.qa(a / this.Y.x);
    }
    la() {
      if ((this.flags & 1) == 0) return this.Y.y * Math.abs(this.md);
      var a = (this.Y.x * Math.abs(this.Wa)) / 2;
      let b = (this.Y.y * Math.abs(this.md)) / 2,
        c = Math.sin(this.vg),
        d = Math.cos(this.vg),
        e;
      c > 0 ? ((e = -(c * a)), (a *= c)) : ((e = c * a), (a = -(c * a)));
      d > 0 ? ((e -= d * b), (a += d * b)) : ((e += d * b), (a -= d * b));
      return a - e;
    }
    Py(a) {
      this.nb(a / this.Y.y);
    }
    Eo() {
      this.gh(this.Y.x / 2, this.Y.y / 2);
    }
    Sl() {
      this.wf(this.Y.x / 2, this.Y.y / 2);
    }
    gh(a, b) {
      a != null && a >= 0 && a <= 1 && (a *= this.Y.x);
      b != null && b >= 0 && b <= 1 && (b *= this.Y.y);
      super.gh(a, b);
    }
    wf(a, b) {
      a != null && a >= 0 && a <= 1 && (a *= this.Y.x);
      b != null && b >= 0 && b <= 1 && (b *= this.Y.y);
      super.wf(a, b);
    }
    mg(a, b) {
      if (this.ur != a) {
        this.ur = a;
        this.Lf = null;
        var c = this.B;
        c.Vp = M(this, this.EE);
        c.kg(new we(a));
        this.EE();
        this.wc();
      }
      b != null && this.mq(b);
    }
    EE() {
      var a = this.ur;
      let b = this.Y;
      b.x = a.size.x * a.vf;
      b.y = a.size.y * a.vf;
      this.B.Ob(this.Y.x, this.Y.y);
      a = this.Lf;
      a != null && ((this.Lf = null), this.mq(a));
    }
    Ib(a) {
      if (this.Lf != a) {
        this.Lf = a;
        var b = this.B,
          c = b.effect,
          d = c.Ay(a);
        c = c.Kb.vf;
        a = this.Ze;
        var e = this.Y;
        e.x = d.lc.x * c;
        e.y = d.lc.y * c;
        if (d.Bq) {
          e = d.ju;
          d = d.Wd;
          let f = e.x * c;
          e = e.y * c;
          a.A = f;
          a.F = e;
          a.C = f + d.w;
          a.H = e + d.J;
          b.Ob(d.w * c, d.J * c);
        } else
          (b.Ob(this.Y.x, this.Y.y),
            (a.A = 0),
            (a.F = 0),
            (a.C = 0),
            (a.H = 0));
        this.wc();
      }
    }
    mq(a) {
      if (this.Lf != a) {
        this.Lf = a;
        var b = this.B,
          c = b.effect,
          d = c.Ay(a);
        c = c.Kb.vf;
        a = this.Ze;
        var e = this.Y;
        e.x = d.lc.x * c;
        e.y = d.lc.y * c;
        if (d.Bq) {
          e = d.ju;
          d = d.Wd;
          let f = e.x * c;
          e = e.y * c;
          a.A = f;
          a.F = e;
          a.C = f + d.w;
          a.H = e + d.J;
          b.Ob(d.w * c, d.J * c);
        } else
          (b.Ob(this.Y.x, this.Y.y),
            (a.A = 0),
            (a.F = 0),
            (a.C = 0),
            (a.H = 0));
        this.wc();
      }
    }
    sa() {
      return new ib(this);
    }
    setColor(a, b, c) {
      let d = this.Y;
      d.x = b;
      d.y = c;
      b = this.B;
      b.Ob(this.Y.x, this.Y.y);
      b.$c();
      this.B.kg(new ue(a));
      return this;
    }
    Yb(a, b) {
      if (!this.Sf()) return !1;
      La.rg(this.B);
      this.B.De();
      return this.B.Yb(a, b);
    }
    getBounds(a, b) {
      b == null && (b = !0);
      let c = new ia(Ba, Ba, Ca, Ca);
      if (this.Y.x == 0) return c;
      if (a == this)
        return ((c.A = 0), (c.F = 0), (c.C = this.Y.x), (c.H = this.Y.y), c);
      var d = this.Ze.A,
        e = this.Ze.F;
      let f = this.B;
      var g = f.size;
      let h = g.x;
      g = g.y;
      var l = this.Ze;
      if ((l = l.C - l.A > 0)) {
        var n = this.Ze,
          q = n.C - n.A;
        n.A = 0;
        n.C = q;
        n = this.Ze;
        q = n.H - n.F;
        n.F = 0;
        n.H = q;
        f.Ob(this.Y.x, this.Y.y);
        this.wc();
        this.B.Pd(!1, !1);
      }
      b &&
        (La.rg(this.B), a == null || La.Ww(this.B.parent, a.B) || La.rg(a.B));
      this.B.nm(a == null ? this.B.MC() : a.B, c);
      l &&
        ((a = this.Ze),
        (b = a.C - a.A),
        (a.A = d),
        (a.C = d + b),
        (d = this.Ze),
        (a = d.H - d.F),
        (d.F = e),
        (d.H = e + a),
        (e = f.size),
        (e.x = h),
        (e.y = g),
        f.$c(),
        this.wc(),
        this.B.Pd(!1, !1));
      return c;
    }
    hz(a) {
      let b = this.Ze;
      var c = b.A;
      let d = b.F;
      var e = b.C - b.A > 0;
      if (e) {
        var f = b.C - b.A;
        b.A = 0;
        b.C = f;
        f = b.H - b.F;
        b.F = 0;
        b.H = f;
        this.wc();
        this.B.Pd(!1, !1);
      }
      a = super.hz(a);
      e &&
        ((e = b.C - b.A),
        (b.A = c),
        (b.C = c + e),
        (c = b.H - b.F),
        (b.F = d),
        (b.H = d + c),
        this.wc(),
        this.B.Pd(!1, !1));
      return a;
    }
    gz(a) {
      let b = this.Ze;
      var c = b.A;
      let d = b.F;
      var e = b.C - b.A > 0;
      if (e) {
        var f = b.C - b.A;
        b.A = 0;
        b.C = f;
        f = b.H - b.F;
        b.F = 0;
        b.H = f;
        this.wc();
        this.B.Pd(!1, !1);
      }
      a = super.gz(a);
      e &&
        ((e = b.C - b.A),
        (b.A = c),
        (b.C = c + e),
        (c = b.H - b.F),
        (b.F = d),
        (b.H = d + c),
        this.wc(),
        this.B.Pd(!1, !1));
      return a;
    }
    xn() {
      this.Ih() != null
        ? this.Ih().xn(this)
        : this.B.parent != null && this.B.parent.Ey(this.B);
    }
    Ft() {
      this.Ih() != null
        ? this.Ih().Ft(this)
        : this.B.parent != null && this.B.parent.zy(this.B);
    }
    CU(a) {
      this.B.effect.GU(a);
    }
    wc() {
      let a = this.B.Gb,
        b = this.oh,
        c = this.ph;
      var d = this.Ze;
      let e = d.A;
      d = d.F;
      let f = this.mh,
        g = this.nh,
        h = this.fo - e,
        l = this.ho - d,
        n = this.wg;
      var q = this.xg,
        r = this.flags;
      if ((r & 1) > 0) {
        let v = Math.sin(this.vg),
          A = Math.cos(this.vg);
        var u = a.matrix;
        let D = a.matrix;
        D.m11 = A;
        D.m12 = -v;
        D.m13 = u.m13;
        D.m21 = v;
        D.m22 = A;
        D.m23 = u.m23;
        D.m31 = u.m31;
        D.m32 = u.m32;
        D.m33 = u.m33;
        a.L = (a.L & -4) | 248;
        (r & 4) > 0
          ? ((a.scale.x = 1),
            (a.scale.y = 1),
            (a.L |= 500),
            (a.translate.x = -(h * A) + l * v + h + b - f + e),
            (a.translate.y = -(h * v) - l * A + l + c - g + d))
          : (r & 2) > 0
            ? ((q = n * h),
              (r = n * l),
              (a.scale.x = a.scale.y = n),
              (a.L = (a.L & -2) | 500),
              (a.translate.x = -(q * A) + r * v + h + b - f + e),
              (a.translate.y = -(q * v) - r * A + l + c - g + d))
            : ((r = n * h),
              (u = q * l),
              (a.scale.x = n),
              (a.scale.y = q),
              (a.L = (a.L & -6) | 496),
              (a.translate.x = -(r * A) + u * v + h + b - f + e),
              (a.translate.y = -(r * v) - u * A + l + c - g + d));
      } else
        (r & 4) > 0
          ? ((a.scale.x = 1),
            (a.scale.y = 1),
            (a.L |= 500),
            (a.translate.x = b - f + e),
            (a.translate.y = c - g + d))
          : (r & 2) > 0
            ? ((a.scale.x = a.scale.y = n),
              (a.L = (a.L & -2) | 500),
              (a.translate.x = -(n * h) + h + b - f + e),
              (a.translate.y = -(n * l) + l + c - g + d))
            : ((a.scale.x = n),
              (a.scale.y = q),
              (a.L = (a.L & -6) | 496),
              (a.translate.x = -(n * h) + h + b - f + e),
              (a.translate.y = -(q * l) + l + c - g + d));
      a.L = (a.L & -2) | 496;
    }
    Ba() {
      return 304;
    }
  }
  C.i = !0;
  C.u = pb;
  Object.assign(C.prototype, { j: C });
  class V extends pb {
    constructor(a, b) {
      super(new rb(b != null ? b.node : null, null, 512));
      this.node = this.B;
      this.B.name = a;
    }
    G() {
      this.node != null && (this.node.G(), (this.node = null), super.G());
    }
    appendChild(a) {
      this.node.R(a.B);
    }
    vk() {
      return this.node.vk();
    }
    pb(a) {
      return this.node.pb(a).th;
    }
    xy(a, b) {
      this.node.xy(a.B, b);
    }
    ap(a) {
      a = this.node.ap(a);
      return a != null ? a.th : null;
    }
    xn(a) {
      a == null
        ? this.Ih() != null && this.node.parent.Ey(this.B)
        : this.node.Ey(a.B);
    }
    Ft(a) {
      a == null
        ? this.Ih() != null && this.node.parent.zy(this.B)
        : this.node.zy(a.B);
    }
    iterator() {
      let a = this.node.children;
      return {
        ib: function () {
          return a != null;
        },
        next: function () {
          let b = a.th;
          a = a.$;
          return b;
        },
      };
    }
    Yb(a, b) {
      La.rg(this.B);
      this.B.Pd(!1, !0);
      return this.node.Yb(a, b);
    }
    getBounds(a, b) {
      b == null && (b = !0);
      b &&
        (this.B.Pd(!1, !1),
        La.rg(this.B),
        a == null || La.Ww(this.B, a.B) || La.rg(a.B),
        (b = !1));
      let c = new ia(Ba, Ba, Ca, Ca),
        d = this.node.children;
      for (; d != null; ) {
        let e = d.th;
        e != null && e instanceof pb && c.add(e.getBounds(a, b));
        d = d.$;
      }
      return c;
    }
    ha() {
      let a = this.getBounds(this.Ih());
      return a.C - a.A;
    }
    la() {
      let a = this.getBounds(this.Ih());
      return a.H - a.F;
    }
    Sl() {
      if (this.vk() != 0) {
        var a = this.getBounds(this);
        this.wf((a.A + a.C) / 2, (a.F + a.H) / 2);
      }
    }
    Eo() {
      if (this.vk() != 0) {
        var a = this.getBounds(this);
        this.gh((a.A + a.C) / 2, (a.F + a.H) / 2);
      }
    }
    Ba() {
      return 204;
    }
  }
  V.i = !0;
  V.u = pb;
  Object.assign(V.prototype, { j: V });
  class Da {
    constructor(a) {
      this.V = a;
      this.controllers = Array(6);
      for (a = 0; a < 6; ) this.controllers[a++] = null;
    }
    pa() {
      if (this.controllers != null) {
        for (var a = 0, b = this.controllers; a < b.length; ) {
          let c = b[a];
          ++a;
          c != null && c.G();
        }
        this.V = this.controllers = null;
      }
    }
    play(a, b) {
      this.start(a, 0, b);
    }
    loop(a, b) {
      b == null && (b = !1);
      this.start(a, b ? 2 : 1);
    }
    Mc() {
      return this.current.$a != null;
    }
    stop() {
      let a = 0,
        b = this.controllers;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        c != null && c.stop();
      }
    }
    start(a, b, c) {
      let d = 0;
      this.current = null;
      let e = 0;
      for (; e < 6; ) {
        let f = e++,
          g = a.gQ();
        if (g[f] == null) continue;
        let h = this.controllers[f];
        if (h == null) {
          h = new ud();
          let n;
          switch (f) {
            case 0:
              n = M(this, this.QU);
              break;
            case 1:
              n = M(this, this.RU);
              break;
            case 2:
              n = M(this, this.gl);
              break;
            case 3:
              n = M(this, this.MU);
              break;
            case 4:
              n = M(this, this.NU);
              break;
            case 5:
              n = M(this, this.Pa);
          }
          h.Wp = n;
          h.DD = !0;
          this.V.B.br(h);
          this.controllers[f] = h;
        }
        let l = g[f].Hj;
        l > d && ((d = l), (this.current = h));
        h.play(g[f], b);
      }
      c != null &&
        (this.current.Rk = function () {
          c(a);
        });
    }
    QU(a, b, c) {
      this.V.qa(this.xm(a, b, c));
    }
    RU(a, b, c) {
      this.V.nb(this.xm(a, b, c));
    }
    gl(a, b, c) {
      this.V.na(this.xm(a, b, c));
    }
    MU(a, b, c) {
      this.V.m(this.xm(a, b, c));
    }
    NU(a, b, c) {
      this.V.o(this.xm(a, b, c));
    }
    Pa(a, b, c) {
      this.V.X(this.xm(a, b, c));
    }
    xm(a, b, c) {
      c = za.Wc(a.cP * 100)(c);
      a = a.value;
      return a + (b.value - a) * c;
    }
  }
  Da.i = !0;
  Object.assign(Da.prototype, { j: Da });
  class Jg {
    constructor(a, b) {
      this.value = a;
      this.cP = b;
    }
  }
  Jg.i = !0;
  Object.assign(Jg.prototype, { j: Jg });
  class va {
    constructor() {
      this.mc = null;
      let a = [],
        b = 0;
      for (; b < 6; ) (++b, a.push(0));
      this.Ya = a;
      this.frames = [];
    }
    Lt(a, b, c) {
      c == null && (c = 0);
      this.Wj(0, a, b, c);
    }
    Mt(a, b, c) {
      c == null && (c = 0);
      this.Wj(1, a, b, c);
    }
    setScale(a, b, c, d) {
      d == null && (d = 0);
      this.Lt(a, c, d);
      this.Mt(b, c, d);
    }
    Dc(a, b) {
      var c;
      c == null && (c = 0);
      this.Lt(a, b, c);
      this.Mt(a, b, c);
    }
    gl(a, b, c) {
      c == null && (c = 0);
      this.Wj(2, a, b, c);
    }
    WF(a, b, c) {
      c == null && (c = 0);
      this.Wj(3, a, b, c);
    }
    XF(a, b, c) {
      c == null && (c = 0);
      this.Wj(4, a, b, c);
    }
    ci(a, b, c, d) {
      d == null && (d = 0);
      this.WF(a, c, d);
      this.XF(b, c, d);
    }
    Pa(a, b, c) {
      c == null && (c = 0);
      this.Wj(5, a, b, c);
    }
    Yq(a, b, c) {
      var d;
      d == null && (d = 0);
      let e = this.Ya[0];
      this.Lt(a, e, d);
      this.Ya[0] += c;
      e = this.Ya[1];
      this.Mt(b, e, d);
      this.Ya[1] += c;
    }
    lo(a, b, c) {
      c == null && (c = 0);
      let d = this.Ya[0];
      this.Lt(a, d, c);
      this.Ya[0] += b;
      d = this.Ya[1];
      this.Mt(a, d, c);
      this.Ya[1] += b;
    }
    jv(a, b) {
      var c;
      c == null && (c = 0);
      let d = this.Ya[3];
      this.WF(0, d, c);
      this.Ya[3] += b;
      d = this.Ya[4];
      this.XF(a, d, c);
      this.Ya[4] += b;
    }
    Wj(a, b, c, d) {
      this.frames.push(new Kg(a, c, new Jg(b, d)));
      this.mc = null;
    }
    gQ() {
      if (this.mc == null) {
        this.mc = [];
        let d = 0;
        for (; d < 6; ) {
          let e = d++;
          var a = this.frames;
          let f = [];
          for (var b = 0; b < a.length; ) {
            var c = a[b];
            ++b;
            c.KT == e && f.push(c);
          }
          if (f.length == 0) {
            this.mc[e] = null;
            continue;
          }
          f.sort(function (g, h) {
            return (g.time * 1e5 - h.time * 1e5) | 0;
          });
          if (f[0].time > 0) {
            switch (e) {
              case 0:
              case 1:
              case 5:
                a = 1;
                break;
              default:
                a = 0;
            }
            f.unshift(new Kg(e, 0, new Jg(a, 0)));
          }
          a = Array(f.length);
          b = 0;
          for (c = f.length; b < c; ) {
            let g = b++,
              h = f[g];
            a[g] = new Nc(h.mR, h.time);
          }
          this.mc[e] = new rd(a, 1);
        }
      }
      return this.mc;
    }
    static parse(a) {
      a = a.replace(RegExp("\\s", "g"), "");
      let b = new va(),
        c = Object.create(null);
      c.sx = 0;
      c.sy = 1;
      c.r = 2;
      c.x = 3;
      c.y = 4;
      c.a = 5;
      let d = new oa("(s|p|sx|sy|r|x|y|a)([\\-\\d\\.]+)([<>]*)", ""),
        e = new oa("([\\d\\.]+)", "");
      a = a.split(",");
      let f = 0,
        g = a.length,
        h = -1,
        l = [];
      for (; f < g; ) {
        var n = a[f++];
        let q = !1;
        for (; d.match(n); ) {
          q = !0;
          n = d.Xb(1);
          let r = parseFloat(d.Xb(2)),
            u = d.Xb(3);
          switch (n) {
            case "p":
              l.push(4);
              l.push(3);
              break;
            case "s":
              l.push(1);
              l.push(0);
              break;
            default:
              l.push(c[n]);
          }
          for (; l.length > 0; )
            b.Wj(l.pop(), r, h, u == "<" ? -100 : u == ">" ? 100 : 0);
          n = d.kS();
        }
        q || (e.match(n), (h = parseFloat(e.Xb(1))));
      }
      return b;
    }
  }
  va.i = !0;
  Object.assign(va.prototype, { j: va });
  class Kg {
    constructor(a, b, c) {
      this.KT = a;
      this.time = b;
      this.mR = c;
    }
  }
  Kg.i = !0;
  Object.assign(Kg.prototype, { j: Kg });
  class ta extends pb {
    constructor(a, b) {
      a = new Vc(a != null ? a.node : null);
      super(a);
      this.effect = new Bd(b);
      a.kg(this.effect);
      b = this.effect.size;
      a.Ob(b.x, b.y);
    }
    G() {
      this.B != null && (this.B.G(), (this.Kb = this.effect = null), super.G());
    }
    mg(a) {
      this.effect.G();
      this.effect = new Bd(a);
      a = this.B;
      a.kg(this.effect);
      let b = this.effect.size;
      a.Ob(b.x, b.y);
    }
    og(a) {
      a == null && (a = !0);
      this.effect.tf && this.effect.shape();
      this.effect.nP(a);
    }
    shape() {
      this.effect.shape();
    }
    tb(a, b) {
      this.effect.tb(a, b);
      this.B.Ob(a, b);
    }
    Va(a) {
      this.effect.Va(a);
    }
    Hb(a, b) {
      this.effect.Hb(a, b);
    }
    Wr() {
      return this.effect.Wr();
    }
    tc(a) {
      this.effect.tc(a);
    }
    Bw() {
      return this.effect.Bw();
    }
    iq() {
      this.effect.iq();
    }
    My(a) {
      this.effect.My(a);
    }
    It(a) {
      this.effect.It(a);
    }
    lg(a) {
      this.effect.lg(a);
    }
    getBounds(a, b) {
      b == null && (b = !0);
      this.shape();
      var c = this.effect.ih.jb;
      c = new ia(c.A, c.F, c.C, c.H);
      if (c.A >= c.C || c.F >= c.H || a == this) return c;
      b && (La.rg(this.B), a == null || La.Ww(this.B, a.B) || La.rg(a.B));
      return La.HV(this.B, a == null ? this.B.MC() : a.B, c);
    }
    Sl() {
      let a = this.getBounds(this);
      a.A >= a.C || a.F >= a.H
        ? this.wf(0, 0)
        : this.wf((a.A + a.C) / 2, (a.F + a.H) / 2);
    }
    Eo() {
      let a = this.getBounds(this);
      a.A >= a.C || a.F >= a.H
        ? this.gh(0, 0)
        : this.gh((a.A + a.C) / 2, (a.F + a.H) / 2);
    }
    ha() {
      let a = this.getBounds(this.Ih());
      return a.C - a.A;
    }
    qa() {
      throw 31;
    }
    nb() {
      throw 32;
    }
    Ba() {
      return 404;
    }
  }
  ta.i = !0;
  ta.u = pb;
  Object.assign(ta.prototype, { j: ta });
  class ji {
    constructor(a) {
      this.V = a;
      this.channels = 0;
      this.bw = [];
      this.repeat = 0;
      this.easing = za.LD();
    }
    x(a, b, c, d, e) {
      this.ji(0, a, b, c, d, e);
      return this;
    }
    y(a, b, c, d, e) {
      this.ji(1, a, b, c, d, e);
      return this;
    }
    iH(a, b) {
      this.ji(0, a, 0.1, void 0, null);
      this.ji(1, b, 0.1, void 0, null);
    }
    scale(a, b, c, d, e) {
      this.ji(4, a, b, c, d, e);
      return this;
    }
    rotation(a, b, c, d, e) {
      this.ji(5, a, b, c, d, e);
      return this;
    }
    alpha(a, b, c, d, e) {
      this.ji(6, a, b, c, d, e);
      return this;
    }
    oV() {
      let a = this.V.B.controllers;
      for (; a != null; ) {
        let b = a.next;
        a.type == 203 && a.stop();
        a = b;
      }
      this.channels = 0;
    }
    ji(a, b, c, d, e, f) {
      let g;
      switch (a) {
        case 0:
          g = this.V.ya();
          break;
        case 1:
          g = this.V.Xa();
          break;
        case 2:
          g = this.V.Wa;
          break;
        case 3:
          g = this.V.md;
          break;
        case 4:
          g = this.V.Wa;
          break;
        case 5:
          g = this.V.je;
          break;
        case 6:
          g = this.V.bd;
      }
      let h = this.rw(a);
      h.ji(a, g, b, c, d == null ? za.LD() : d);
      h.Xh = e == null ? 0 : e;
      this.bw[a] = f;
      this.channels |= 1 << a;
    }
    rw(a) {
      let b,
        c = this.V.B.controllers;
      if (c != null)
        if ((this.channels & (1 << a)) > 0)
          for (; c != null; ) {
            if (c.type == 203 && ((b = c), b.key == a))
              return ((b.Th = M(this, this.Th)), (b.Yg = M(this, this.Yg)), b);
            c = c.next;
          }
        else
          for (; c != null; ) {
            if (c.type == 203 && c.$l)
              return (
                (b = c),
                (b.Th = M(this, this.Th)),
                (b.Yg = M(this, this.Yg)),
                b
              );
            c = c.next;
          }
      b = new te();
      b.Th = M(this, this.Th);
      b.Yg = M(this, this.Yg);
      this.V.B.br(b);
      return b;
    }
    Yg(a, b) {
      let c = this.V;
      switch (a) {
        case 0:
          c.m(b);
          break;
        case 1:
          c.o(b);
          break;
        case 2:
          c.qa(b);
          break;
        case 3:
          c.nb(b);
          break;
        case 4:
          c.I(b);
          break;
        case 5:
          c.na(b);
          break;
        case 6:
          c.X(b);
      }
    }
    Th(a) {
      let b = this.bw[a];
      b != null && ((this.bw[a] = null), b());
    }
  }
  ji.i = !0;
  Object.assign(ji.prototype, { j: ji });
  class Fd {}
  Fd.i = !0;
  Fd.bf = !0;
  Object.assign(Fd.prototype, { j: Fd });
  class nc {
    constructor(a) {
      let b = this;
      this.id = setInterval(function () {
        b.bh();
      }, a);
    }
    stop() {
      this.id != null && (clearInterval(this.id), (this.id = null));
    }
    bh() {}
    static delay(a, b) {
      let c = new nc(b);
      c.bh = function () {
        c.stop();
        a();
      };
      return c;
    }
  }
  nc.i = !0;
  Object.assign(nc.prototype, { j: nc });
  class Ha {
    constructor(a) {
      this.length = a.byteLength;
      this.b = new Uint8Array(a);
      this.b.uv = a;
      a.DQ = this;
      a.bytes = this.b;
    }
    sub(a, b) {
      if (a < 0 || b < 0 || a + b > this.length) throw 16;
      return new Ha(
        this.b.buffer.slice(a + this.b.byteOffset, a + this.b.byteOffset + b),
      );
    }
    Ab(a, b, c) {
      if (a < 0 || b < 0 || a + b > this.length) throw 17;
      c == null && (c = Ge.Ru);
      let d = "",
        e = this.b,
        f = a;
      a += b;
      switch (c.Xu) {
        case 0:
          for (; f < a; )
            if (((c = e[f++]), c < 128)) {
              if (c == 0) break;
              d += String.fromCodePoint(c);
            } else
              c < 224
                ? ((c = ((c & 63) << 6) | (e[f++] & 127)),
                  (d += String.fromCodePoint(c)))
                : c < 240
                  ? ((c =
                      ((c & 31) << 12) |
                      ((e[f++] & 127) << 6) |
                      (e[f++] & 127)),
                    (d += String.fromCodePoint(c)))
                  : ((c =
                      ((c & 15) << 18) |
                      ((e[f++] & 127) << 12) |
                      ((e[f++] & 127) << 6) |
                      (e[f++] & 127)),
                    (d += String.fromCodePoint(c)));
          break;
        case 1:
          for (; f < a; )
            ((c = e[f++] | (e[f++] << 8)), (d += String.fromCodePoint(c)));
      }
      return d;
    }
    toString() {
      return this.Ab(0, this.length);
    }
    static qE(a) {
      if (void 0 == Ge.tA) {
        for (
          var b = new Uint8Array(a.length << 1), c = 0, d = a.length;
          c < d;
        ) {
          let e = c++,
            f = a.charCodeAt(e);
          b[e << 1] = f & 255;
          b[(e << 1) | 1] = f >> 8;
        }
        return new Ha(b.buffer);
      }
      b = [];
      for (c = 0; c < a.length; )
        ((d = a.charCodeAt(c++)),
          55296 <= d &&
            d <= 56319 &&
            (d = ((d - 55232) << 10) | (a.charCodeAt(c++) & 1023)),
          d <= 127
            ? b.push(d)
            : (d <= 2047
                ? b.push(192 | (d >> 6))
                : (d <= 65535
                    ? b.push(224 | (d >> 12))
                    : (b.push(240 | (d >> 18)), b.push(128 | ((d >> 12) & 63))),
                  b.push(128 | ((d >> 6) & 63))),
              b.push(128 | (d & 63))));
      return new Ha(new Uint8Array(b).buffer);
    }
    static Xg(a) {
      let b = a.DQ;
      return b != null ? b : new Ha(a);
    }
  }
  Ha.i = !0;
  Object.assign(Ha.prototype, { j: Ha });
  var Ge = (ch["haxe.io.Encoding"] = {
    RA: !0,
    QA: null,
    Ru: { XA: "UTF8", Xu: 0, co: "haxe.io.Encoding", toString: Oi },
    tA: { XA: "RawNative", Xu: 1, co: "haxe.io.Encoding", toString: Oi },
  });
  Ge.QA = [Ge.Ru, Ge.tA];
  class Tc {
    static encode(a, b) {
      b == null && (b = !0);
      let c = new Lg(Tc.Iz).gP(a).toString();
      if (b)
        switch (a.length % 3) {
          case 1:
            c += "==";
            break;
          case 2:
            c += "=";
        }
      return c;
    }
    static decode(a, b) {
      b == null && (b = !0);
      if (b) for (; qa.Cv(a, a.length - 1) == 61; ) a = qa.substr(a, 0, -1);
      return new Lg(Tc.Iz).vO(Ha.qE(a));
    }
  }
  Tc.i = !0;
  class Lg {
    constructor(a) {
      let b = a.length,
        c = 1;
      for (; b > 1 << c; ) ++c;
      if (c > 8 || b != 1 << c) throw 18;
      this.ak = a;
      this.eE = c;
    }
    gP(a) {
      let b = this.eE,
        c = this.ak,
        d = ((a.length * 8) / b) | 0,
        e = new Ha(new ArrayBuffer(d + ((a.length * 8) % b == 0 ? 0 : 1))),
        f = 0,
        g = 0,
        h = (1 << b) - 1,
        l = 0,
        n = 0;
      for (; n < d; ) {
        for (; g < b; ) ((g += 8), (f <<= 8), (f |= a.b[l++]));
        g -= b;
        e.b[n++] = c.b[(f >> g) & h];
      }
      g > 0 && (e.b[n++] = c.b[(f << (b - g)) & h]);
      return e;
    }
    IQ() {
      let a = [];
      for (var b = 0; b < 256; ) a[b++] = -1;
      b = 0;
      let c = this.ak.length;
      for (; b < c; ) {
        let d = b++;
        a[this.ak.b[d]] = d;
      }
      this.yG = a;
    }
    vO(a) {
      let b = this.eE;
      this.yG == null && this.IQ();
      let c = this.yG,
        d = (a.length * b) >> 3,
        e = new Ha(new ArrayBuffer(d)),
        f = 0,
        g = 0,
        h = 0,
        l = 0;
      for (; l < d; ) {
        for (; g < 8; ) {
          g += b;
          f <<= b;
          let n = c[a.b[h++]];
          if (n == -1) throw 19;
          f |= n;
        }
        g -= 8;
        e.b[l++] = (f >> g) & 255;
      }
      return e;
    }
  }
  Lg.i = !0;
  Object.assign(Lg.prototype, { j: Lg });
  class jb {
    constructor() {
      this.J = {};
    }
    get(a) {
      return this.J[a];
    }
    remove(a) {
      if (!this.J.hasOwnProperty(a)) return !1;
      delete this.J[a];
      return !0;
    }
    keys() {
      let a = [];
      for (var b in this.J) this.J.hasOwnProperty(b) && a.push(+b);
      return new ad(a);
    }
    iterator() {
      return {
        mt: this.J,
        vp: this.keys(),
        ib: function () {
          return this.vp.ib();
        },
        next: function () {
          let a = this.vp.next();
          return this.mt[a];
        },
      };
    }
  }
  jb.i = !0;
  jb.Lb = [Fd];
  Object.assign(jb.prototype, { j: jb });
  class $f {
    constructor() {
      this.J = { Dl: {} };
    }
    set(a, b) {
      let c = a.Ff;
      c == null && (c = a.Ff = ab.wu++);
      this.J[c] = b;
      this.J.Dl[c] = a;
    }
    get(a) {
      return this.J[a.Ff];
    }
    remove(a) {
      a = a.Ff;
      if (this.J.Dl[a] == null) return !1;
      delete this.J[a];
      delete this.J.Dl[a];
      return !0;
    }
    keys() {
      let a = [];
      for (var b in this.J.Dl) this.J.hasOwnProperty(b) && a.push(this.J.Dl[b]);
      return new ad(a);
    }
    iterator() {
      return {
        mt: this.J,
        vp: this.keys(),
        ib: function () {
          return this.vp.ib();
        },
        next: function () {
          let a = this.vp.next();
          return this.mt[a.Ff];
        },
      };
    }
  }
  $f.i = !0;
  $f.Lb = [Fd];
  Object.assign($f.prototype, { j: $f });
  class lc {
    constructor() {
      this.J = Object.create(null);
    }
    get(a) {
      return this.J[a];
    }
    keys() {
      return new ki(this.J);
    }
  }
  lc.i = !0;
  lc.Lb = [Fd];
  Object.assign(lc.prototype, { j: lc });
  class ki {
    constructor(a) {
      this.J = a;
      this.keys = Object.keys(a);
      this.length = this.keys.length;
      this.current = 0;
    }
    ib() {
      return this.current < this.length;
    }
    next() {
      return this.keys[this.current++];
    }
  }
  ki.i = !0;
  Object.assign(ki.prototype, { j: ki });
  class Mg {
    constructor() {
      this.size = this.g = 0;
    }
    ZA(a) {
      this.g == this.size && this.grow(1);
      this.view.setUint8(this.g++, a);
    }
    CN(a, b) {
      if (b < 0 || 0 + b > a.length) throw 20;
      this.g + b > this.size && this.grow(b);
      this.size != 0 &&
        ((a = new Uint8Array(a.b.buffer, a.b.byteOffset + 0, b)),
        this.SG.set(a, this.g),
        (this.g += b));
    }
    grow(a) {
      var b = this.g + a;
      for (a = this.size == 0 ? 16 : this.size; a < b; ) a = (a * 3) >> 1;
      b = new ArrayBuffer(a);
      let c = new Uint8Array(b);
      this.size > 0 && c.set(this.SG);
      this.size = a;
      this.buffer = b;
      this.SG = c;
      this.view = new DataView(this.buffer);
    }
    Si() {
      if (this.size == 0) return new Ha(new ArrayBuffer(0));
      let a = new Ha(this.buffer);
      a.length = this.g;
      return a;
    }
  }
  Mg.i = !0;
  Object.assign(Mg.prototype, { j: Mg });
  class Ng {
    N() {
      throw 33;
    }
    mn(a, b, c) {
      let d = c,
        e = a.b;
      if (b < 0 || c < 0 || b + c > a.length) throw 21;
      try {
        for (; d > 0; ) ((e[b] = this.N()), ++b, --d);
      } catch (f) {
        if (!(haxe.Exception.pW(f).sW() instanceof haxe.qW.oW)) throw f;
      }
      return c - d;
    }
    QT(a, b) {
      for (var c = 0; b > 0; ) {
        let d = this.mn(a, c, b);
        if (d == 0) throw 22;
        c += d;
        b -= d;
      }
    }
    cF() {
      let a = new Mg(),
        b;
      for (;;) {
        b = this.N();
        if (b == 0) break;
        a.ZA(b);
      }
      a.Si();
    }
    PT() {
      let a = this.Zg(),
        b = this.Zg();
      return this.uo ? Gd.gD(b, a) : Gd.gD(a, b);
    }
    sc() {
      var a = this.N();
      let b = this.N();
      a = this.uo ? b | (a << 8) : a | (b << 8);
      return (a & 32768) != 0 ? a - 65536 : a;
    }
    Id() {
      let a = this.N(),
        b = this.N();
      return this.uo ? b | (a << 8) : a | (b << 8);
    }
    bF() {
      let a = this.N(),
        b = this.N(),
        c = this.N();
      return this.uo ? c | (b << 8) | (a << 16) : a | (b << 8) | (c << 16);
    }
    Zg() {
      let a = this.N(),
        b = this.N(),
        c = this.N(),
        d = this.N();
      return this.uo
        ? d | (c << 8) | (b << 16) | (a << 24)
        : a | (b << 8) | (c << 16) | (d << 24);
    }
    kt(a, b) {
      let c = new Ha(new ArrayBuffer(a));
      this.QT(c, a);
      return c.Ab(0, a, b);
    }
  }
  Ng.i = !0;
  Object.assign(Ng.prototype, { j: Ng });
  class $b extends Ng {
    constructor(a, b, c) {
      super();
      b == null && (b = 0);
      c == null && (c = a.length - b);
      if (b < 0 || c < 0 || b + c > a.length) throw 23;
      this.b = a.b;
      this.g = b;
      this.KG = this.Qg = c;
    }
    N() {
      if (this.Qg == 0) throw 24;
      this.Qg--;
      return this.b[this.g++];
    }
    mn(a, b, c) {
      if (b < 0 || c < 0 || b + c > a.length) throw 25;
      if (this.Qg == 0 && c > 0) throw 26;
      this.Qg < c && (c = this.Qg);
      let d = this.b;
      a = a.b;
      let e = 0,
        f = c;
      for (; e < f; ) {
        let g = e++;
        a[b + g] = d[this.g + g];
      }
      this.g += c;
      this.Qg -= c;
      return c;
    }
  }
  $b.i = !0;
  $b.u = Ng;
  Object.assign($b.prototype, { j: $b });
  class Og {
    ni() {
      throw 34;
    }
    Qb(a) {
      this.uo
        ? (this.ni(a >>> 24),
          this.ni((a >> 16) & 255),
          this.ni((a >> 8) & 255),
          this.ni(a & 255))
        : (this.ni(a & 255),
          this.ni((a >> 8) & 255),
          this.ni((a >> 16) & 255),
          this.ni(a >>> 24));
    }
  }
  Og.i = !0;
  Object.assign(Og.prototype, { j: Og });
  class rg extends Og {
    constructor() {
      super();
      this.b = new Mg();
    }
    ni(a) {
      this.b.ZA(a);
    }
    lW(a, b) {
      this.b.CN(a, b);
    }
    Si() {
      return this.b.Si();
    }
  }
  rg.i = !0;
  rg.u = Og;
  Object.assign(rg.prototype, { j: rg });
  class Gd {
    static gD(a, b) {
      Gd.Mw.setInt32(0, a, !0);
      Gd.Mw.setInt32(4, b, !0);
      return Gd.Mw.getFloat64(0, !0);
    }
  }
  Gd.i = !0;
  class ad {
    constructor(a) {
      this.current = 0;
      this.jB = a;
    }
    ib() {
      return this.current < this.jB.length;
    }
    next() {
      return this.jB[this.current++];
    }
  }
  ad.i = !0;
  Object.assign(ad.prototype, { j: ad });
  class li {
    constructor(a) {
      this.id = a;
      this.state = 0;
      this.Tl = !1;
    }
    reset() {
      this.state = 0;
    }
    Cb() {
      return this.state == 1;
    }
    Ee() {
      return this.state == 3;
    }
    up() {
      return this.state != 1 ? this.state == 2 : !0;
    }
    hl(a) {
      if (this.state != a)
        switch (((this.state = a), a)) {
          case 1:
            this.Tl = !0;
            break;
          case 3:
            this.Tl = !0;
        }
    }
    update() {
      switch (this.state) {
        case 1:
          this.Tl ? (this.Tl = !1) : (this.state = 2);
          break;
        case 3:
          this.Tl ? (this.Tl = !1) : (this.state = 0);
      }
    }
  }
  li.i = !0;
  Object.assign(li.prototype, { j: li });
  class Bc {
    constructor() {
      this.state = null;
      this.enabled = !0;
    }
  }
  Bc.i = !0;
  Object.assign(Bc.prototype, { j: Bc });
  class Cc {
    constructor() {
      this.enabled = !0;
      this.buttons = [];
    }
    update(a) {
      let b = 0,
        c = this.buttons;
      for (; b < c.length; ) c[b++].update(a);
    }
    ZN() {
      let a = 0,
        b = this.buttons;
      for (; a < b.length; ) b[a++].reset();
    }
    Cb(a) {
      if (!this.enabled) return !1;
      a = this.$o(a);
      return a == null ? !1 : a.Cb();
    }
    Ee(a) {
      if (!this.enabled) return !1;
      a = this.$o(a);
      return a == null ? !1 : a.Ee();
    }
    sj(a) {
      let b = this.$o(a);
      b == null && ((b = new li(a)), this.buttons.push(b));
      b.hl(1);
    }
    release(a) {
      a = this.$o(a);
      a != null && a.hl(3);
    }
    $o(a) {
      let b = 0,
        c = this.buttons.length;
      for (; b < c; ) {
        let d = this.buttons[b];
        if (d.id == a) return d;
        ++b;
      }
      return null;
    }
  }
  Cc.i = !0;
  Object.assign(Cc.prototype, { j: Cc });
  class Ni {
    static kw(a) {
      bh == null && yj();
      return bh.J[a];
    }
  }
  class Se extends Bc {
    constructor(a) {
      super();
      this.target = a != null ? a : window.document;
      this.state = new Pg();
      this.Tb = new Rc();
      this.Xj();
      this.IT = [];
      this.event = null;
    }
    sw() {
      return 0;
    }
    lR(a) {
      if (this.enabled) {
        var b = Ni.kw(a.code);
        b == Ni.kw("") && (b = a.which);
        this.IT[b] && a.preventDefault();
        a.repeat ||
          (this.state.sj(b),
          (this.event = a),
          this.Tb.Ic(0, [b]),
          (this.event = null));
      }
    }
    nR(a) {
      if (this.enabled) {
        var b = Ni.kw(a.code);
        this.state.release(b);
        this.event = a;
        this.Tb.Ic(1, [b]);
        this.event = null;
      }
    }
    hW() {
      this.state.ZN();
    }
    addListener(a, b, c) {
      this.target.addEventListener(a, b, c);
    }
    Xj() {
      this.addListener("keydown", M(this, this.lR), !0);
      this.addListener("keyup", M(this, this.nR), !0);
      this.addListener("visibilitychange", M(this, this.hW), !1);
    }
  }
  Se.i = !0;
  Se.u = Bc;
  Object.assign(Se.prototype, { j: Se });
  class Pg extends Cc {
    constructor() {
      super();
    }
    Cb(a) {
      return super.Cb(a);
    }
    Ee(a) {
      return super.Ee(a);
    }
  }
  Pg.i = !0;
  Pg.u = Cc;
  Object.assign(Pg.prototype, { j: Pg });
  class Re extends Bc {
    constructor(a) {
      super();
      this.target = a != null ? a : window;
      this.state = new Qg();
      this.Tb = new Rc();
      this.Xj();
    }
    sw() {
      return 1;
    }
    Ns(a) {
      if (this.enabled) {
        this.Ce(a);
        switch (a.which) {
          case 1:
            this.state.sj(0);
            break;
          case 2:
            this.state.sj(1);
            break;
          case 3:
            this.state.sj(2);
        }
        this.Tb.Ic(0, [a.which - 1]);
      }
    }
    uS(a) {
      if (this.enabled) {
        this.Ce(a);
        switch (a.which) {
          case 1:
            this.state.release(0);
            break;
          case 2:
            this.state.release(1);
            break;
          case 3:
            this.state.release(2);
        }
        this.Tb.Ic(1, [a.which - 1]);
      }
    }
    tS(a) {
      this.enabled &&
        (this.Ce(a),
        (a = this.state.position),
        this.Tb.Ic(2, [a.x, a.y]),
        (this.state.sf[1] = !0));
    }
    sS() {
      this.enabled && ((this.state.left[1] = !0), this.Tb.Ic(3));
    }
    rS() {
      this.enabled && ((this.state.Lr[1] = !0), this.Tb.Ic(4));
    }
    sg(a) {
      if (this.enabled) {
        var b = this.state;
        b.wheelDelta[1] += a.deltaY | 0;
        this.Tb.Ic(5, [b.wheelDelta[1]]);
      }
    }
    Ce(a) {
      let b = a.clientX,
        c = a.clientY;
      if (this.target instanceof Element) {
        var d = this.target.getBoundingClientRect();
        b -= d.left;
        c -= d.top;
      }
      d = window.devicePixelRatio;
      let e = this.state;
      e.Pk[1].x += a.movementX;
      e.Pk[1].y += a.movementY;
      a = e.position;
      a.x = (b * d) | 0;
      a.y = (c * d) | 0;
    }
    addListener(a, b, c) {
      this.target.addEventListener(a, b, c);
    }
    Xj() {
      this.addListener("mousedown", M(this, this.Ns));
      this.addListener("mouseup", M(this, this.uS));
      this.addListener("mousemove", M(this, this.tS));
      this.addListener("mouseleave", M(this, this.sS));
      this.addListener("mouseenter", M(this, this.rS));
      this.addListener("wheel", M(this, this.sg), { passive: !0 });
    }
  }
  Re.i = !0;
  Re.u = Bc;
  Object.assign(Re.prototype, { j: Re });
  class Qg extends Cc {
    constructor() {
      super();
      this.position = new Na(0, 0);
      this.Pk = [new Na(0, 0), new Na(0, 0)];
      this.wheelDelta = [0, 0];
      this.left = [!1, !1];
      this.Lr = [!1, !1];
      this.sf = [!1, !1];
    }
    update(a) {
      super.update(a);
      this.sf[0] = this.sf[1];
      this.sf[1] = !1;
      a = this.Pk[0];
      let b = this.Pk[1];
      a.x = b.x;
      a.y = b.y;
      a = this.Pk[1];
      a.x = 0;
      a.y = 0;
      this.wheelDelta[0] = this.wheelDelta[1];
      this.wheelDelta[1] = 0;
      this.left[0] = this.left[1];
      this.left[1] = !1;
      this.Lr[0] = this.Lr[1];
      this.Lr[1] = !1;
    }
    nQ() {
      return this.wheelDelta[0];
    }
    Cb(a) {
      return super.Cb(a);
    }
    Ee(a) {
      return super.Ee(a);
    }
  }
  Qg.i = !0;
  Qg.u = Cc;
  Object.assign(Qg.prototype, { j: Qg });
  class Te extends Bc {
    constructor(a) {
      super();
      this.target = a != null ? a : window;
      this.ZD = 0;
      this.LF(1);
      this.state = new kc();
      this.Tb = new Rc();
      this.jE = 4;
      this.Ix = 0;
      this.touches = {};
      window.document.body.style.setProperty("touch-action", "none");
      this.Xj();
    }
    LF(a) {
      this.ZD = Math.min(a, 5);
    }
    sw() {
      return 3;
    }
    mQ(a) {
      return a < 4 ? 0 : a - 4;
    }
    CT(a) {
      if (this.enabled)
        if (a.pointerType == "mouse") {
          var b = a.button + 1;
          b > 3 ||
            (this.Ce(a, b),
            this.state.sj(b),
            this.state.sj(0),
            (a = this.state.position[b]),
            (b = this.state.position[0]),
            (b.x = a.x),
            (b.y = a.y));
        } else
          this.Ix != this.ZD &&
            ((b = this.jE++),
            (this.touches["" + a.pointerId] = b),
            this.Ce(a, b),
            this.Ix++,
            this.state.sj(b),
            b == 4 &&
              (this.state.sj(0),
              (a = this.state.position[b]),
              (b = this.state.position[0]),
              (b.x = a.x),
              (b.y = a.y)));
    }
    NE(a) {
      a.stopPropagation();
      if (this.enabled)
        if (a.pointerType == "mouse")
          ((a = a.button + 1),
            a > 3 || (this.state.release(a), this.state.release(0)));
        else {
          var b = this.touches[a.pointerId];
          b != null &&
            (delete this.touches[a.pointerId],
            this.Ce(a, b),
            this.state.release(b),
            --this.Ix == 0 &&
              ((this.jE = 4),
              this.state.release(0),
              (a = this.state.position[b]),
              (b = this.state.position[0]),
              (b.x = a.x),
              (b.y = a.y)));
        }
    }
    BT(a) {
      this.NE(a);
    }
    DT(a) {
      if (this.enabled)
        if (a.pointerType == "mouse")
          (this.Ce(a, 0), (this.state.sf[0][1] = !0));
        else {
          var b = this.touches[a.pointerId];
          b != null &&
            (this.Ce(a, b),
            (this.state.sf[b][1] = !0),
            b == 4 &&
              ((this.state.sf[0][1] = !0),
              (a = this.state.position[b]),
              (b = this.state.position[0]),
              (b.x = a.x),
              (b.y = a.y)));
        }
    }
    Ce(a, b) {
      let c = a.clientX;
      a = a.clientY;
      if (this.target instanceof Element) {
        var d = this.target.getBoundingClientRect();
        c -= d.left;
        a -= d.top;
      }
      d = window.devicePixelRatio;
      b = this.state.position[b];
      b.x = (c * d) | 0;
      b.y = (a * d) | 0;
    }
    addListener(a, b, c) {
      c == null && (c = !1);
      this.target.addEventListener(a, b, c);
      a == "pointerup" && window.addEventListener(a, b, c);
    }
    Xj() {
      this.addListener("pointerdown", M(this, this.CT));
      this.addListener("pointerup", M(this, this.NE));
      this.addListener("pointercancel", M(this, this.BT));
      this.addListener("pointermove", M(this, this.DT));
    }
  }
  Te.i = !0;
  Te.u = Bc;
  Object.assign(Te.prototype, { j: Te });
  class kc extends Cc {
    constructor() {
      super();
      for (var a = [], b = 0; b < 9; ) (++b, a.push(new Na(kc.Tq, kc.Tq)));
      this.position = a;
      a = [];
      for (b = 0; b < 9; ) (++b, a.push([!1, !1]));
      this.sf = a;
      a = [];
      for (b = 0; b < 9; ) (++b, a.push(0));
      this.qt = a;
    }
    update(a) {
      super.update(a);
      for (a = 0; a < 9; ) {
        var b = a++;
        this.sf[b][0] = this.sf[b][1];
        this.sf[b][1] = !1;
        var c = this.qt[b];
        switch (c) {
          case 1:
            this.qt[b] = 0;
            c = this.position[b];
            let d = kc.Tq;
            c.x = d;
            c.y = d;
            b == 4 &&
              ((b = this.position[0]), (c = kc.Tq), (b.x = c), (b.y = c));
            break;
          case 2:
            this.qt[b] = c - 1;
        }
      }
    }
    dH(a) {
      return this.sf[a][0];
    }
    Cb(a) {
      return super.Cb(a);
    }
    Ee(a) {
      return super.Ee(a);
    }
    up(a) {
      let b = this.$o(a);
      return b == null ? !1 : this.Cb(a) ? !0 : b.up();
    }
    release(a) {
      super.release(a);
      a >= 4 && (this.qt[a] = 2);
    }
  }
  kc.i = !0;
  kc.u = Cc;
  Object.assign(kc.prototype, { j: kc });
  class Ya {
    static MP(a) {
      if (a == null) return null;
      if (a instanceof Array) return Array;
      let b = a.j;
      if (b != null) return b;
      a = Ya.TA(a);
      return a != null ? Ya.nN(a) : null;
    }
    static eo(a, b) {
      if (a == null) return "null";
      if (b.length >= 5) return "<...>";
      var c = typeof a;
      c == "function" && (a.i || a.RA) && (c = "object");
      switch (c) {
        case "function":
          return "<function>";
        case "object":
          if (a.co) {
            var d = ch[a.co].QA[a.Xu];
            c = d.XA;
            if (d.mN) {
              b += "\t";
              var e = [],
                f = 0;
              for (d = d.mN; f < d.length; ) {
                let g = d[f];
                f += 1;
                e.push(Ya.eo(a[g], b));
              }
              return c + "(" + e.join(",") + ")";
            }
            return c;
          }
          if (a instanceof Array) {
            c = "[";
            b += "\t";
            e = 0;
            for (f = a.length; e < f; )
              ((d = e++), (c += (d > 0 ? "," : "") + Ya.eo(a[d], b)));
            return c + "]";
          }
          try {
            e = a.toString;
          } catch (g) {
            return "???";
          }
          if (
            e != null &&
            e != Object.toString &&
            typeof e == "function" &&
            ((c = a.toString()), c != "[object Object]")
          )
            return c;
          c = "{\n";
          b += "\t";
          e = a.hasOwnProperty != null;
          f = null;
          for (f in a)
            (e && !a.hasOwnProperty(f)) ||
              f == "prototype" ||
              f == "__class__" ||
              f == "__super__" ||
              f == "__interfaces__" ||
              f == "__properties__" ||
              (c.length != 2 && (c += ", \n"),
              (c += b + f + " : " + Ya.eo(a[f], b)));
          b = b.substring(1);
          return c + ("\n" + b + "}");
        case "string":
          return a;
        default:
          return String(a);
      }
    }
    static SA(a, b) {
      for (;;) {
        if (a == null) return !1;
        if (a == b) return !0;
        let c = a.Lb;
        if (c != null && (a.u == null || a.u.Lb != c)) {
          let d = 0,
            e = c.length;
          for (; d < e; ) {
            let f = c[d++];
            if (f == b || Ya.SA(f, b)) return !0;
          }
        }
        a = a.u;
      }
    }
    static Uu(a, b) {
      if (b == null) return !1;
      switch (b) {
        case Array:
          return a instanceof Array;
        case gk:
          return typeof a == "boolean";
        case hk:
          return a != null;
        case ik:
          return typeof a == "number";
        case jk:
          return typeof a == "number" ? (a | 0) === a : !1;
        case String:
          return typeof a == "string";
        default:
          if (a != null)
            if (typeof b == "function") {
              if (Ya.kN(a, b)) return !0;
            } else {
              if (typeof b == "object" && Ya.lN(b) && a instanceof b) return !0;
            }
          else return !1;
          return (b == kk && a.i != null) || (b == lk && a.RA != null)
            ? !0
            : a.co != null
              ? ch[a.co] == b
              : !1;
      }
    }
    static kN(a, b) {
      return a instanceof b ? !0 : b.bf ? Ya.SA(Ya.MP(a), b) : !1;
    }
    static TA(a) {
      a = Ya.oN.call(a).slice(8, -1);
      return a == "Object" || a == "Function" || a == "Math" || a == "JSON"
        ? null
        : a;
    }
    static lN(a) {
      return Ya.TA(a) != null;
    }
    static nN(a) {
      return ab[a];
    }
  }
  Ya.i = !0;
  class wi {
    static HC() {
      try {
        let a = window.localStorage;
        a.getItem("");
        if (a.length == 0) {
          let b = "_hx_" + Math.random();
          a.setItem(b, b);
          a.removeItem(b);
        }
        return a;
      } catch (a) {
        return null;
      }
    }
  }
  wi.i = !0;
  class ia {
    constructor(a, b, c, d) {
      this.A = a;
      this.F = b;
      this.C = c;
      this.H = d;
    }
    add(a) {
      a.A < this.A && (this.A = a.A);
      a.C > this.C && (this.C = a.C);
      a.F < this.F && (this.F = a.F);
      a.H > this.H && (this.H = a.H);
    }
    hv(a) {
      let b = a.x;
      b < this.A && (this.A = b);
      b > this.C && (this.C = b);
      a = a.y;
      a < this.F && (this.F = a);
      a > this.H && (this.H = a);
    }
    scale(a, b) {
      if (b) {
        b = (this.C - this.A) / 2;
        let c = this.A + b;
        this.A = c - b * a;
        this.C = c + b * a;
        b = (this.H - this.F) / 2;
        c = this.F + b;
        this.F = c - b * a;
        this.H = c + b * a;
      } else ((this.A *= a), (this.F *= a), (this.C *= a), (this.H *= a));
    }
    Mi(a) {
      var b = this.C - this.A;
      let c = this.H - this.F;
      var d = b / a;
      let e = c / 1;
      if (d <= e)
        return ((b = this.F + (c - d) / 2), new ia(this.A, b, this.C, b + d));
      d = a * e;
      b = this.A + (b - d) / 2;
      return new ia(b, this.F, b + d, this.H);
    }
  }
  ia.i = !0;
  Object.assign(ia.prototype, { j: ia });
  class ii {
    constructor(a, b, c, d) {
      this.A = a;
      this.F = b;
      this.C = c;
      this.H = d;
    }
  }
  ii.i = !0;
  Object.assign(ii.prototype, { j: ii });
  class ck {
    static clone(a) {
      return new F(a.x, a.y, a.z, a.w);
    }
  }
  class za {
    static LD() {
      return function (a) {
        return a;
      };
    }
    static Wc(a) {
      let b = (a < -100 ? -100 : a > 100 ? 100 : a) / 100;
      return function (c) {
        return b == 0
          ? c
          : b < 0
            ? c * (c * -b + 1 + b)
            : c * ((2 - c) * b + (1 - b));
      };
    }
    static Ux() {
      return function (a) {
        return Math.pow(a, 2);
      };
    }
    static GT() {
      return function (a) {
        return (a *= 2) < 1
          ? Math.pow(a, 2) * 0.5
          : 1 - Math.abs(Math.pow(2 - a, 2)) * 0.5;
      };
    }
    static dg() {
      return function (a) {
        return 1 - Math.pow(1 - a, 2);
      };
    }
    static lv(a) {
      a == null && (a = 0.1);
      let b = 17.0158 * a;
      return function (c) {
        --c;
        return c * c * ((b + 1) * c + b) + 1;
      };
    }
    static Xv(a, b) {
      b == null && (b = 0.3);
      a == null && (a = 0);
      let c, d;
      a < 1
        ? ((d = 1), (c = b * 0.25))
        : ((d = a), (c = (b / yi) * Math.asin(1 / d)));
      return function (e) {
        return d * Math.pow(2, -10 * e) * Math.sin(((e - c) * yi) / b) + 1;
      };
    }
  }
  za.i = !0;
  class Na {
    constructor(a, b) {
      this.x = a;
      this.y = b;
    }
  }
  Na.i = !0;
  Object.assign(Na.prototype, { j: Na });
  class wj {
    static xV(a, b, c, d) {
      return a >= 0 && a <= c && b >= 0 ? b <= d : !1;
    }
  }
  wj.i = !0;
  class Ch {
    static bz(a, b, c, d, e) {
      a -= c;
      b -= d;
      return a * a + b * b < e * e;
    }
  }
  Ch.i = !0;
  class $i {
    static test(a, b) {
      return a.A >= b.C
        ? !1
        : a.C <= b.A
          ? !1
          : a.F >= b.H
            ? !1
            : a.H <= b.F
              ? !1
              : !0;
    }
  }
  $i.i = !0;
  class Rg {
    constructor(a) {
      this.SU(a);
    }
    SU(a) {
      this.seed = a;
    }
    ln() {
      return this.Li() < 0.5;
    }
    Wh(a, b) {
      a -= 0.4999;
      return Math.round(a + (b + 0.4999 - a) * this.Li());
    }
    Wo(a, b) {
      return a + (b - a) * this.Li();
    }
    fC(a) {
      return this.Wo(-a, a);
    }
    Jc() {
      return this.Li() - this.Li();
    }
  }
  Rg.i = !0;
  Object.assign(Rg.prototype, { j: Rg });
  class Sg extends Rg {
    constructor() {
      super(0);
    }
    Li() {
      return Math.random();
    }
  }
  Sg.i = !0;
  Sg.u = Rg;
  Object.assign(Sg.prototype, { j: Sg });
  class mf extends id {
    constructor(a, b) {
      super(a, b);
    }
    ua() {
      super.ua();
      p.Im = ua.instance.createTexture(m.Cu, 8);
      this.ea = new V();
      this.node.R(this.ea.B);
      let a = new C(null, p.Im.children[0], "bubble"),
        b = (Math.min(this.ca.ha(), this.ca.la()) / a.Y.x) * 0.25;
      this.ea.I(b);
      this.ea.appendChild(a);
      a.D();
      this.text = new ta(this.ea, p.Im.children[1]);
      this.text.Va("100%");
      this.text.tb(a.Y.x, a.Y.y);
      this.text.Hb(0, 0);
      this.text.og(!1);
      this.text.Va("0%");
      this.text.m(-a.Y.x / 2);
      this.text.o(-a.Y.y / 2);
      this.text.tc(this.text.Wr() * 0.7);
      this.Gk = this.percent = 0;
      this.Zj = Math.random() * Fb * 2;
      this.$j = Math.random() * Fb * 2;
      this.ll = Math.random() * 0.1 - 0.05;
      this.ml = Math.random() * 0.1 - 0.05;
    }
    update(a) {
      super.update(a);
      this.time += a;
      this.ea.m(this.ca.ha() / 2);
      this.ea.o(this.ca.la() / 2);
      var b = Math.cos(this.Zj) * 50;
      a = Math.sin(this.$j) * 50;
      this.Zj += this.ll;
      this.$j += this.ml;
      let c = this.ea;
      c.m(c.ya() + b);
      b = this.ea;
      b.o(b.Xa() + a);
      switch (this.Gk) {
        case 0:
          this.percent < this.bs() &&
            ((this.percent += 5), this.percent > 100 && (this.percent = 100));
          this.text.Va("" + this.percent + "%");
          this.Jm.Fw() && this.percent == 100 && (this.Gk++, (this.time = 0));
          break;
        case 1:
          this.time < 0.5
            ? ((this.ll *= 0.95), (this.ml *= 0.95))
            : (this.Gk++, super.Gy());
      }
    }
    Gy() {}
    dc() {
      return 0.25;
    }
    Ea() {
      return "LoadingOverlay";
    }
  }
  mf.i = !0;
  mf.u = id;
  Object.assign(mf.prototype, { j: mf });
  class Rd extends ma {
    constructor() {
      super();
      this.state = 0;
    }
    Ss() {
      super.Ss();
      let a = this.parent;
      this.dd = new C(a.ta, p.Za, k.bN);
      this.dd.D();
      this.dd.m(378);
      this.dd.o(364);
      this.dd.X(0);
      this.Vf = new C(a.ta, p.Za, k.cN);
      this.Vf.m(368);
      this.Vf.o(354);
      this.Vf.X(0);
    }
    update(a) {
      super.update(a);
      this.dd.I(Wa(Math.sin(this.time * 10), -1, 1, 1, 1.1));
      a = this.parent;
      switch (this.state) {
        case 0:
          if (this.time < 1) break;
          this.time = 0;
          this.state = 1;
          break;
        case 1:
          a = this.lb(0.5);
          this.dd.X(a);
          this.Vf.X(a);
          this.Vf.m(428 + -60 * za.dg()(a));
          this.Vf.o(414 + -60 * za.dg()(a));
          a == 1 && ((this.time = 0), (this.state = 2));
          break;
        case 2:
          var b = this.lb(0.25);
          this.Vf.I(Wa(b, 0, 1, 1, 0.9));
          b == 1 &&
            ((this.time = 0),
            (this.state = 3),
            a.K.Ib(a.K.Lf == k.IA ? k.HA : k.IA),
            a.TD());
          break;
        case 3:
          b = this.lb(0.5);
          this.Vf.I(Wa(za.dg()(b), 0, 1, 0.9, 1));
          b == 1 && ((this.time = 0), (this.state = a.K.Lf == k.HA ? 5 : 4));
          break;
        case 4:
          this.time > 1 && ((this.time = 0), (this.state = 2));
          break;
        case 5:
          ((a = this.lb(0.5)),
            this.dd.X(1 - a),
            this.Vf.X(1 - a),
            this.Vf.m(368 + 60 * za.Ux()(a)),
            this.Vf.o(354 + 60 * za.Ux()(a)),
            a == 1 && this.pa());
      }
    }
  }
  Rd.i = !0;
  Rd.u = ma;
  Object.assign(Rd.prototype, { j: Rd });
  class Ud extends ea {
    constructor() {
      super();
    }
    ua() {
      super.ua();
      this.he = new V();
      var a = new C(this.he, p.Za, k.LA),
        b = new C(this.he, p.Za, k.aN),
        c = new C(this.he, p.Za, k.XM);
      b.Py(500);
      b.o(a.Y.y - 1);
      c.o(b.Xa() + 500 - 1);
      this.he.D();
      a = Aa.create(null, k.YM, k.ZM, k.$M);
      this.buttons.push(a);
      a.m(680);
      a.o(-20);
      this.he.appendChild(a.l);
      this.ra(a);
      b = new ta(this.he, p.oc);
      b.Va(Eb.get("CANT_UNLOCK_TEXT1"));
      b.m(20);
      b.o(60);
      b.Hb(0);
      b.tb(760, 100);
      b.tc(80);
      a = new ta(this.he, p.oc);
      a.Va(ra.Ec(this.caller.Ka.starCount));
      a.m(20);
      a.o(b.Xa() + 90);
      a.Hb(0);
      a.tb(760, 100);
      a.tc(80);
      b = new C(this.he, p.Za, k.Qu);
      c = a.getBounds();
      b.I(0.8);
      b.m(c.C);
      b.o((c.F + c.H) / 2 - b.la() / 2);
      b = new ta(this.he, p.oc);
      b.Va(Eb.get("CANT_UNLOCK_TEXT2"));
      b.m(20);
      b.o(a.Xa() + 90);
      b.Hb(0);
      b.tb(760, 100);
      b.tc(80);
      a = new ta(this.he, p.Oi);
      a.Va(Eb.get("CANT_UNLOCK_TEXT3"));
      a.m(20);
      a.o(b.Xa() + 90 + 40);
      a.Hb(0);
      a.lg(!0);
      a.tb(760, 140);
      a.tc(60);
      this.node.R(this.he.B);
    }
    dc() {
      return 0.5;
    }
    hd(a) {
      a = za.dg()(1 - a);
      let b = this.node.Gb;
      b.scale.x = b.scale.y = 0.001 + a;
      b.L = (b.L & -2) | 500;
    }
    ee(a) {
      a = za.Xv(0.5, 0.5)(a);
      let b = this.node.Gb;
      b.scale.x = b.scale.y = 0.001 + a;
      b.L = (b.L & -2) | 500;
    }
    Xd() {
      this.system.Rf().Cb(461) && this.cg();
      this.kb(1) && this.cg();
    }
    sb() {
      super.sb();
      let a = this.ca.sm().Mi(1);
      var b = this.node.Gb;
      b.translate.x = (a.A + a.C) / 2;
      b.translate.y = (a.F + a.H) / 2;
      b.L = (b.L & -2) | 496;
      if (this.ca.jf() > 1)
        (this.he.I(1), (b = this.he.la()), this.he.I(((a.H - a.F) / b) * 0.75));
      else {
        b = 1.1;
        let c = 1 / this.ca.jf();
        c < 1 && (b = 1.1 * c);
        this.he.I((a.C - a.A) / (p.Za.nc.Qf(k.LA).lc.x * b));
      }
    }
    Ph() {
      return !1;
    }
    Ea() {
      return "MissingStarsPopup";
    }
  }
  Ud.i = !0;
  Ud.u = ea;
  Object.assign(Ud.prototype, { j: Ud });
  class Xd extends Hc {
    constructor() {
      super();
    }
    Ph() {
      return !1;
    }
    getData() {
      let a = m.data.J[m.PA];
      return a != null ? a : m.data.J[m.OA];
    }
    qc() {
      return [this.system.window.Zo() > 1 ? m.OA : m.PA];
    }
    xE() {
      this.cg();
    }
    Ea() {
      return "OutroVideoScene";
    }
  }
  Xd.i = !0;
  Xd.u = Hc;
  Object.assign(Xd.prototype, { j: Xd });
  class nd extends ea {
    constructor() {
      super();
    }
    qc() {
      let a = [m.Ju];
      a.push(
        [
          47, 45, 43, 41, 39, 37, 35, 33, 31, 29, 27, 25, 23, 21, 19, 17, 15,
          13, 11, 9,
        ][this.Yr() - 1],
      );
      return a;
    }
    ee() {}
    hd() {}
    dc() {
      return 0;
    }
    Ph() {
      return !1;
    }
    ua() {
      super.ua();
      var a = this.Yr();
      this.am = new bc(null, new F(0, 0, 0, 1));
      this.am.X(0);
      this.node.R(this.am.B);
      var b = this.caller.Ka.ui,
        c = b ? 1350 : 1200;
      this.cf(800, c);
      this.l = new V(null, this.ta);
      this.l.m(400);
      this.l.o(c / 2);
      this.l.I(0);
      this.l.M(!1);
      c = this.createTexture(m.Ju);
      new C(this.l, c).D();
      this.caller.Ka.available
        ? ((this.CG = [
            47, 45, 43, 41, 39, 37, 35, 33, 31, 29, 27, 25, 23, 21, 19, 17, 15,
            13, 11, 9,
          ][a - 1]),
          (a = new C(this.l, this.createTexture(this.CG))),
          a.D(),
          a.m(-1),
          a.o(-14))
        : ((c = od.xw(a)),
          (a = this.KP(a)),
          (a = this.Ab("COMPLETE_BOXNAME", c == null ? "null" : "" + c, a)),
          (c = new ta(this.l, p.Oi)),
          c.tb(400, 400),
          c.lg(!0),
          c.tc(50),
          c.Va(a),
          c.Hb(0),
          c.m(-200),
          c.o(-100));
      b &&
        ((b = Tb.Wl(this.Ab("COLLECT_DRAWING"))),
        b.l.I(1.25),
        this.l.appendChild(b.l),
        b.m(-293.75),
        b.o(500),
        this.buttons.push(b),
        this.ra(b),
        b.focus(),
        (b = new C(this.l, p.Za, k.cM)),
        b.D(),
        b.m(0),
        b.o(-570),
        (b = this.Ab("DRAWING_FOUND")),
        (a = new ta(this.l, p.oc)),
        a.tb(600, 160),
        a.tc(80),
        a.Va(b),
        a.Hb(0),
        a.m(-300),
        a.o(-615));
      this.time = this.state = 0;
    }
    Xc() {
      super.Xc();
      p.ka(m.Ju);
      p.ka(this.CG);
    }
    Xd(a) {
      super.Xd(a);
      this.state == 1 && this.kb(1) && ((this.state = 2), (this.time = 0));
    }
    bb() {
      super.bb();
    }
    update(a) {
      super.update(a);
      switch (this.state) {
        case 0:
          a = this.lb(0.5);
          this.l.I(za.lv()(a));
          this.l.M(!0);
          this.am.X(a * 0.4);
          a == 1 && (this.state = 1);
          break;
        case 1:
          if (this.caller.Ka.ui) break;
          this.system.Yd().Cb(0) && ((this.state = 2), (this.time = 0));
          break;
        case 2:
          ((a = this.lb(0.25)),
            this.l.I(1 - za.dg()(a)),
            this.am.X((1 - a) * 0.4),
            a == 1 && ((this.state = 3), this.cg()));
      }
    }
    Yr() {
      let a = this.caller.Ka.pictureIndex;
      a == null && (a = od.Yr(w.box, w.level));
      return a;
    }
    KP(a) {
      return a <= 17 ? this.Ab("BOX1_LABEL") : this.Ab("BOX2_LABEL");
    }
    Ea() {
      return "PicturePopup";
    }
  }
  nd.i = !0;
  nd.u = ea;
  Object.assign(nd.prototype, { j: nd });
  class vf extends ma {
    constructor(a, b, c, d) {
      super();
      this.l = a;
      this.min = b;
      this.max = c;
      this.offsetX = d;
      this.su = this.Jg = this.Gg = this.dl = 0;
      this.No = 0.03;
      this.xo = this.yo = !1;
      this.Yp = this.Zp = 0;
      this.jx = this.Xl = xj;
    }
    update() {
      var a = this.system.Yd();
      let b = this.system.sQ().nQ();
      b != 0
        ? ((this.Jg += 10 * (b > 0 ? 1 : b < 0 ? -1 : 0) * -1),
          (this.No = 0.05),
          (this.xo = this.yo = !1))
        : a.Cb(0)
          ? ((this.Gg = 0),
            (this.Pv = this.jx = this.Xl = a.position[0].x),
            (this.Jg = this.su = 0),
            (this.xo = this.yo = !1),
            (this.No = 0.03),
            (this.time = 0))
          : a.Ee(0)
            ? ((this.dl += this.Gg),
              (this.Gg = 0),
              (this.Jg = this.Xl - this.jx))
            : (a.up(0)
                ? ((this.jx = this.Xl),
                  (this.Xl = a.position[0].x),
                  (this.Gg = this.Xl - this.Pv))
                : (this.yo
                    ? this.Zp * this.Zp < 0.001
                      ? (this.yo = !1)
                      : (this.Jg += 0.1 * this.Zp)
                    : this.xo
                      ? this.Yp * this.Yp < 0.001
                        ? (this.xo = !1)
                        : (this.Jg -= 0.1 * this.Yp)
                      : this.Zp < 0
                        ? ((this.yo = !0), (this.No = 0.3))
                        : this.Yp < 0 && ((this.xo = !0), (this.No = 0.3)),
                  (this.su = (this.su + this.Jg) * (1 - this.No)),
                  (this.Jg = 0),
                  (this.dl += this.su)),
              (a = this.offsetX + (this.dl + this.Gg)),
              this.l.m(a),
              (this.Zp = this.offsetX - a),
              (this.Yp = this.max + a - this.offsetX));
    }
  }
  vf.i = !0;
  vf.u = ma;
  Object.assign(vf.prototype, { j: vf });
  class pf extends ma {
    constructor() {
      super();
      this.l = new V();
      this.yb = [];
      this.Hq = [];
      this.Kl = [];
      let a = 0;
      for (; a < 10; ) {
        let c = a++;
        var b = fa.Wo(-Fb / 2 - Fb / 4, -Fb / 2 + Fb / 4);
        this.Hq[c] = new F(Math.cos(b) * 10, Math.sin(b) * 10, 0, 1);
        b = this.yb[c] = new C(this.l, p.bc, [k.QK, k.RK, k.SK][fa.Wh(0, 2)]);
        b.D();
        b.I(fa.Wo(0.75, 2));
        b.na(Math.random() * 360);
        this.Kl[c] = fa.fC(10);
      }
    }
    pa() {
      super.pa();
      this.l.G();
      this.yb = null;
    }
    update(a) {
      super.update(a);
      let b = (a = 0);
      for (; b < 10; ) {
        let c = b++;
        this.Hq[c].y += 0.25;
        let d = this.yb[c];
        d.m(d.ya() + this.Hq[c].x);
        d.o(d.Xa() + this.Hq[c].y);
        d.na(d.je + this.Kl[c]);
        this.time > 3 && (d.X(d.bd * 0.95), d.bd < 0.05 && ++a);
      }
      a == 10 && this.pa();
    }
  }
  pf.i = !0;
  pf.u = ma;
  Object.assign(pf.prototype, { j: pf });
  class Wc extends ma {
    constructor() {
      super();
      this.lc = null;
      this.focused = !1;
      this.ye = 0;
      this.l = new V();
    }
    By() {}
    setActive(a) {
      this.active = a;
    }
    select() {
      this.Kd(!0);
    }
    focus() {
      this.focused = !0;
    }
    blur() {
      this.focused = !1;
    }
    Kd(a) {
      this.hR = a;
    }
    ya() {
      return this.l.ya();
    }
    m(a) {
      this.l.m(a);
      return a;
    }
    Xa() {
      return this.l.Xa();
    }
    o(a) {
      this.l.o(a);
    }
    pq(a) {
      this.l.m(a - this.l.ha());
    }
    ha() {
      return this.l.ha();
    }
    la() {
      return this.l.la();
    }
    Sf() {
      return this.l.Sf();
    }
    M(a) {
      this.l.M(a);
    }
  }
  Wc.i = !0;
  Wc.u = ma;
  Object.assign(Wc.prototype, { j: Wc });
  class Jc extends Wc {
    constructor(a) {
      super();
      this.fj = a;
      this.l = new V();
      this.icon = new C(this.l, p.Za, k.FM);
      this.CQ = new of(this.l.node, new ia(20, 10, 170, 160));
    }
    focus() {}
    blur() {
      super.blur();
      this.icon.Ib(k.Sq);
    }
    LU(a, b) {
      this.icon.Ib(k.Sq);
      let c = new ta(this.l, p.oc);
      c.tb(this.icon.ha(), this.icon.la());
      c.Va(ra.Ec(this.fj));
      c.Hb(0, 0);
      c.tc(this.icon.la() * 0.5);
      c.o(c.Xa() - 20);
      new C(this.l, p.Za, Jc.oG[a]);
      b && new C(this.l, p.Za, Jc.oG[4]);
    }
    Yb(a) {
      return this.icon.Lf == k.Sq || this.focused ? this.CQ.Yb(a) : !1;
    }
  }
  Jc.i = !0;
  Jc.u = Wc;
  Object.assign(Jc.prototype, { j: Jc });
  class mi {
    constructor(a, b, c) {
      this.hk = a;
      this.Yh = b;
      this.type = c;
    }
  }
  mi.i = !0;
  Object.assign(mi.prototype, { j: mi });
  class Tg {
    constructor() {
      this.So = !1;
      this.hh(1);
      this.vt();
    }
    hh(a) {
      this.weight = a;
      this.xs = 1 / a;
      this.Nb = new t(0, $a.Tz * a);
    }
    vt() {
      this.ma = t.Ac();
      this.a = t.Ac();
      this.g = t.Ac();
      this.Gd = t.Ac();
      this.eu = t.Ac();
    }
    zi(a, b) {
      a.jR() || this.g.add(t.Rb(a, b / 1));
    }
  }
  Tg.i = !0;
  Object.assign(Tg.prototype, { j: Tg });
  class Lb extends Tg {
    constructor() {
      super();
      this.ja = new t(Hd, Hd);
      this.Uh = new t(-1, -1);
      this.Cg = [];
      this.eu = t.Ac();
      this.vt();
    }
    vt() {
      super.vt();
      this.ja = new t(Hd, Hd);
      this.ja.x = Hd;
      this.ja.y = Hd;
      this.iF();
    }
    iF() {
      this.Cg = [];
    }
    Il(a, b, c) {
      this.Cg.push(new mi(a, b, c));
    }
    WT(a) {
      this.Cg.splice(a, 1);
    }
    yQ(a) {
      let b = this.Cg,
        c = b.length,
        d = 0;
      for (; d < c; ) if (b[d++].hk == a) return !0;
      return !1;
    }
    lr(a, b) {
      let c = this.Cg,
        d = c.length,
        e = 0;
      for (; e < d; ) {
        let f = c[e++];
        if (f.hk == a) {
          f.Yh = b;
          break;
        }
      }
    }
    JB(a, b, c) {
      let d = this.Cg,
        e = d.length,
        f = 0;
      for (; f < e; ) {
        let g = d[f++];
        if (g.hk == a) {
          g.hk = b;
          g.Yh = c;
          break;
        }
      }
    }
    Yh(a) {
      let b = this.Cg,
        c = b.length,
        d = 0;
      for (; d < c; ) {
        let e = b[d++];
        if (e.hk == a) return e.Yh;
      }
      return -1;
    }
    update(a) {
      if (a != 0) {
        var b = this.eu,
          c = $a.current;
        this.So
          ? ((b.x = 0), (b.y = 0))
          : c.y != 0 || c.x != 0
            ? ((b.x = c.x), (b.y = c.y))
            : ((b.x = this.Nb.x * this.xs), (b.y = this.Nb.y * this.xs));
        b = (a / 1) * a;
        this.a.x = this.eu.x * b;
        this.a.y = this.eu.y * b;
        this.ja.x == Hd && ((this.ja.x = this.g.x), (this.ja.y = this.g.y));
        this.Gd.x = this.g.x - this.ja.x + this.a.x;
        this.Gd.y = this.g.y - this.ja.y + this.a.y;
        a > 0 &&
          ((a = 1 / a),
          (this.ma.x = this.Gd.x * a),
          (this.ma.y = this.Gd.y * a));
        this.ja.x = this.g.x;
        this.ja.y = this.g.y;
        this.g.x += this.Gd.x;
        this.g.y += this.Gd.y;
      }
    }
    Bt() {
      var a = this.Uh;
      let b = this.g,
        c = this.xs;
      let d,
        e = 0,
        f = 0;
      if (a.x != -1) ((b.x = a.x), (b.y = a.y));
      else {
        a = this.Cg;
        for (var g = a.length, h = 0; h < g; ) {
          var l = a[h++],
            n = l.hk;
          let v = n.g;
          var q = v.x - b.x;
          d = v.y - b.y;
          q == 0 && d == 0 && (d = q = 1);
          var r = Math.sqrt(q * q + d * d),
            u = l.Yh;
          l = l.type;
          if (l == 1) {
            if (r <= u) continue;
          } else if (l == 2 && r >= u) continue;
          l = n.Uh.x == -1;
          n = n.xs;
          r = (r - u) / ((r > 1 ? r : 1) * (c + n));
          l && ((e = q), (f = d));
          u = c * r;
          q *= u;
          d *= u;
          b.x += q;
          b.y += d;
          l && ((q = n * r), (v.x -= e * q), (v.y -= f * q));
        }
      }
    }
  }
  Lb.i = !0;
  Lb.u = Tg;
  Object.assign(Lb.prototype, { j: Lb });
  class $a {
    static toggle() {
      $a.current.y = -$a.current.y;
    }
    static aR() {
      return $a.current.y == $a.Tz ? $a.current.x == 0 : !1;
    }
    static reset() {
      $a.current.x = 0;
      $a.current.y = $a.Bu;
    }
  }
  $a.i = !0;
  class cd {
    constructor() {
      this.aE = this.YD = 0;
      this.loading = [];
      this.Hd = new Af();
      this.version = null;
      this.pE = this.Ex = 0;
      this.Up = 1;
    }
    load(a) {
      if (this.xD(a) || this.$w(a) || this.Ak(a)) return !1;
      this.Ex++;
      a = new Ug(a, this);
      a.priority = this.aE--;
      if (this.loading.length == this.Up) return (this.Hd.enqueue(a), !0);
      this.loading.push(a);
      a.load();
      return !0;
    }
    stop() {
      this.Hd.clear();
    }
    JT(a) {
      if (this.xD(a) && !this.$w(a) && !this.Ak(a)) {
        var b = Ma.find(this.Hd, function (c) {
          return c.vl.url.indexOf(a) > -1;
        });
        b != null && this.Hd.aU(b, ++this.YD);
      }
    }
    ep(a) {
      if (this.Ex == 0) return 1;
      if (a == null) return this.pE / this.Ex;
      let b = this;
      return (
        Ma.count(a, function (c) {
          return b.$w(c);
        }) / a.length
      );
    }
    xD(a) {
      function b(c) {
        return c.vl.url.indexOf(a) > -1;
      }
      return this.Hd == null
        ? !1
        : Ma.count(this.Hd, b) + Ma.count(this.loading, b) > 0;
    }
    WS(a) {
      qa.remove(this.loading, a);
      this.pE++;
      this.Hd.da == 0 && this.loading.length == 0 && (this.aE = this.YD = 0);
      let b = m.Lg(a.vl.url);
      b >= 0 && m.setData(b, a.vl.data);
      this.Hd.da > 0 && ((a = this.Hd.EO()), this.loading.push(a), a.load());
    }
    VS() {
      this.stop();
    }
    $w(a) {
      return m.qb(m.Lg(a));
    }
    Ak(a) {
      return m.Ak(m.Lg(a));
    }
  }
  cd.i = !0;
  Object.assign(cd.prototype, { j: cd });
  class Ug {
    constructor(a, b) {
      this.vl = new ni(a, b.version);
      this.Hd = b;
    }
    load() {
      let a = this;
      this.vl.load(
        function () {
          cd.AB += m.LP(a.vl.url);
          a.Hd.WS(a);
          a.G();
        },
        function () {
          a.Hd.VS();
          a.G();
        },
      );
    }
    G() {
      this.Hd = null;
      this.vl.G();
    }
  }
  Ug.i = !0;
  Ug.Lb = [zf];
  Object.assign(Ug.prototype, { j: Ug });
  class Id {
    static encode(a) {
      var b = a.length;
      let c = [1732584193, -271733879, -1732584194, 271733878],
        d = 64,
        e = a.length;
      for (var f = []; d <= e; ) {
        var g = a.substring(d - 64, d);
        let h = 0;
        for (; h < 64; )
          ((f[h >> 2] =
            g.charCodeAt(h) +
            (g.charCodeAt(h + 1) << 8) +
            (g.charCodeAt(h + 2) << 16) +
            (g.charCodeAt(h + 3) << 24)),
            (h += 4));
        Id.Ax(c, f);
        d += 64;
      }
      a = a.substring(d - 64);
      f = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      d = 0;
      for (e = a.length; d < e; )
        ((f[d >> 2] |= a.charCodeAt(d) << ((d % 4) << 3)), ++d);
      f[d >> 2] |= 128 << ((d % 4) << 3);
      if (d > 55) for (Id.Ax(c, f), d = 0; d < 16; ) ((f[d] = 0), ++d);
      f[14] = b * 8;
      Id.Ax(c, f);
      b = Id.oI;
      f = "";
      d = 0;
      for (e = c.length; d < e; )
        for (a = 0, g = c[d++]; a < 4; )
          ((f += b[(g >> ((a << 3) + 4)) & 15] + b[(g >> (a << 3)) & 15]), ++a);
      return f;
    }
    static Ax(a, b) {
      let c = a[0],
        d = a[1],
        e = a[2],
        f = a[3],
        g =
          (((c + ((d & e) | (~d & f))) & -1) + ((b[0] + -680876936) & -1)) & -1;
      c = (((g << 7) | (g >>> 25)) + d) & -1;
      g = (((f + ((c & d) | (~c & e))) & -1) + ((b[1] + -389564586) & -1)) & -1;
      f = (((g << 12) | (g >>> 20)) + c) & -1;
      g = (((e + ((f & c) | (~f & d))) & -1) + ((b[2] + 606105819) & -1)) & -1;
      e = (((g << 17) | (g >>> 15)) + f) & -1;
      g =
        (((d + ((e & f) | (~e & c))) & -1) + ((b[3] + -1044525330) & -1)) & -1;
      d = (((g << 22) | (g >>> 10)) + e) & -1;
      g = (((c + ((d & e) | (~d & f))) & -1) + ((b[4] + -176418897) & -1)) & -1;
      c = (((g << 7) | (g >>> 25)) + d) & -1;
      g = (((f + ((c & d) | (~c & e))) & -1) + ((b[5] + 1200080426) & -1)) & -1;
      f = (((g << 12) | (g >>> 20)) + c) & -1;
      g =
        (((e + ((f & c) | (~f & d))) & -1) + ((b[6] + -1473231341) & -1)) & -1;
      e = (((g << 17) | (g >>> 15)) + f) & -1;
      g = (((d + ((e & f) | (~e & c))) & -1) + ((b[7] + -45705983) & -1)) & -1;
      d = (((g << 22) | (g >>> 10)) + e) & -1;
      g = (((c + ((d & e) | (~d & f))) & -1) + ((b[8] + 1770035416) & -1)) & -1;
      c = (((g << 7) | (g >>> 25)) + d) & -1;
      g =
        (((f + ((c & d) | (~c & e))) & -1) + ((b[9] + -1958414417) & -1)) & -1;
      f = (((g << 12) | (g >>> 20)) + c) & -1;
      g = (((e + ((f & c) | (~f & d))) & -1) + ((b[10] + -42063) & -1)) & -1;
      e = (((g << 17) | (g >>> 15)) + f) & -1;
      g =
        (((d + ((e & f) | (~e & c))) & -1) + ((b[11] + -1990404162) & -1)) & -1;
      d = (((g << 22) | (g >>> 10)) + e) & -1;
      g =
        (((c + ((d & e) | (~d & f))) & -1) + ((b[12] + 1804603682) & -1)) & -1;
      c = (((g << 7) | (g >>> 25)) + d) & -1;
      g = (((f + ((c & d) | (~c & e))) & -1) + ((b[13] + -40341101) & -1)) & -1;
      f = (((g << 12) | (g >>> 20)) + c) & -1;
      g =
        (((e + ((f & c) | (~f & d))) & -1) + ((b[14] + -1502002290) & -1)) & -1;
      e = (((g << 17) | (g >>> 15)) + f) & -1;
      g =
        (((d + ((e & f) | (~e & c))) & -1) + ((b[15] + 1236535329) & -1)) & -1;
      d = (((g << 22) | (g >>> 10)) + e) & -1;
      g = (((c + ((d & f) | (e & ~f))) & -1) + ((b[1] + -165796510) & -1)) & -1;
      c = (((g << 5) | (g >>> 27)) + d) & -1;
      g =
        (((f + ((c & e) | (d & ~e))) & -1) + ((b[6] + -1069501632) & -1)) & -1;
      f = (((g << 9) | (g >>> 23)) + c) & -1;
      g = (((e + ((f & d) | (c & ~d))) & -1) + ((b[11] + 643717713) & -1)) & -1;
      e = (((g << 14) | (g >>> 18)) + f) & -1;
      g = (((d + ((e & c) | (f & ~c))) & -1) + ((b[0] + -373897302) & -1)) & -1;
      d = (((g << 20) | (g >>> 12)) + e) & -1;
      g = (((c + ((d & f) | (e & ~f))) & -1) + ((b[5] + -701558691) & -1)) & -1;
      c = (((g << 5) | (g >>> 27)) + d) & -1;
      g = (((f + ((c & e) | (d & ~e))) & -1) + ((b[10] + 38016083) & -1)) & -1;
      f = (((g << 9) | (g >>> 23)) + c) & -1;
      g =
        (((e + ((f & d) | (c & ~d))) & -1) + ((b[15] + -660478335) & -1)) & -1;
      e = (((g << 14) | (g >>> 18)) + f) & -1;
      g = (((d + ((e & c) | (f & ~c))) & -1) + ((b[4] + -405537848) & -1)) & -1;
      d = (((g << 20) | (g >>> 12)) + e) & -1;
      g = (((c + ((d & f) | (e & ~f))) & -1) + ((b[9] + 568446438) & -1)) & -1;
      c = (((g << 5) | (g >>> 27)) + d) & -1;
      g =
        (((f + ((c & e) | (d & ~e))) & -1) + ((b[14] + -1019803690) & -1)) & -1;
      f = (((g << 9) | (g >>> 23)) + c) & -1;
      g = (((e + ((f & d) | (c & ~d))) & -1) + ((b[3] + -187363961) & -1)) & -1;
      e = (((g << 14) | (g >>> 18)) + f) & -1;
      g = (((d + ((e & c) | (f & ~c))) & -1) + ((b[8] + 1163531501) & -1)) & -1;
      d = (((g << 20) | (g >>> 12)) + e) & -1;
      g =
        (((c + ((d & f) | (e & ~f))) & -1) + ((b[13] + -1444681467) & -1)) & -1;
      c = (((g << 5) | (g >>> 27)) + d) & -1;
      g = (((f + ((c & e) | (d & ~e))) & -1) + ((b[2] + -51403784) & -1)) & -1;
      f = (((g << 9) | (g >>> 23)) + c) & -1;
      g = (((e + ((f & d) | (c & ~d))) & -1) + ((b[7] + 1735328473) & -1)) & -1;
      e = (((g << 14) | (g >>> 18)) + f) & -1;
      g =
        (((d + ((e & c) | (f & ~c))) & -1) + ((b[12] + -1926607734) & -1)) & -1;
      d = (((g << 20) | (g >>> 12)) + e) & -1;
      g = (((c + (d ^ e ^ f)) & -1) + ((b[5] + -378558) & -1)) & -1;
      c = (((g << 4) | (g >>> 28)) + d) & -1;
      g = (((f + (c ^ d ^ e)) & -1) + ((b[8] + -2022574463) & -1)) & -1;
      f = (((g << 11) | (g >>> 21)) + c) & -1;
      g = (((e + (f ^ c ^ d)) & -1) + ((b[11] + 1839030562) & -1)) & -1;
      e = (((g << 16) | (g >>> 16)) + f) & -1;
      g = (((d + (e ^ f ^ c)) & -1) + ((b[14] + -35309556) & -1)) & -1;
      d = (((g << 23) | (g >>> 9)) + e) & -1;
      g = (((c + (d ^ e ^ f)) & -1) + ((b[1] + -1530992060) & -1)) & -1;
      c = (((g << 4) | (g >>> 28)) + d) & -1;
      g = (((f + (c ^ d ^ e)) & -1) + ((b[4] + 1272893353) & -1)) & -1;
      f = (((g << 11) | (g >>> 21)) + c) & -1;
      g = (((e + (f ^ c ^ d)) & -1) + ((b[7] + -155497632) & -1)) & -1;
      e = (((g << 16) | (g >>> 16)) + f) & -1;
      g = (((d + (e ^ f ^ c)) & -1) + ((b[10] + -1094730640) & -1)) & -1;
      d = (((g << 23) | (g >>> 9)) + e) & -1;
      g = (((c + (d ^ e ^ f)) & -1) + ((b[13] + 681279174) & -1)) & -1;
      c = (((g << 4) | (g >>> 28)) + d) & -1;
      g = (((f + (c ^ d ^ e)) & -1) + ((b[0] + -358537222) & -1)) & -1;
      f = (((g << 11) | (g >>> 21)) + c) & -1;
      g = (((e + (f ^ c ^ d)) & -1) + ((b[3] + -722521979) & -1)) & -1;
      e = (((g << 16) | (g >>> 16)) + f) & -1;
      g = (((d + (e ^ f ^ c)) & -1) + ((b[6] + 76029189) & -1)) & -1;
      d = (((g << 23) | (g >>> 9)) + e) & -1;
      g = (((c + (d ^ e ^ f)) & -1) + ((b[9] + -640364487) & -1)) & -1;
      c = (((g << 4) | (g >>> 28)) + d) & -1;
      g = (((f + (c ^ d ^ e)) & -1) + ((b[12] + -421815835) & -1)) & -1;
      f = (((g << 11) | (g >>> 21)) + c) & -1;
      g = (((e + (f ^ c ^ d)) & -1) + ((b[15] + 530742520) & -1)) & -1;
      e = (((g << 16) | (g >>> 16)) + f) & -1;
      g = (((d + (e ^ f ^ c)) & -1) + ((b[2] + -995338651) & -1)) & -1;
      d = (((g << 23) | (g >>> 9)) + e) & -1;
      g = (((c + (e ^ (d | ~f))) & -1) + ((b[0] + -198630844) & -1)) & -1;
      c = (((g << 6) | (g >>> 26)) + d) & -1;
      g = (((f + (d ^ (c | ~e))) & -1) + ((b[7] + 1126891415) & -1)) & -1;
      f = (((g << 10) | (g >>> 22)) + c) & -1;
      g = (((e + (c ^ (f | ~d))) & -1) + ((b[14] + -1416354905) & -1)) & -1;
      e = (((g << 15) | (g >>> 17)) + f) & -1;
      g = (((d + (f ^ (e | ~c))) & -1) + ((b[5] + -57434055) & -1)) & -1;
      d = (((g << 21) | (g >>> 11)) + e) & -1;
      g = (((c + (e ^ (d | ~f))) & -1) + ((b[12] + 1700485571) & -1)) & -1;
      c = (((g << 6) | (g >>> 26)) + d) & -1;
      g = (((f + (d ^ (c | ~e))) & -1) + ((b[3] + -1894986606) & -1)) & -1;
      f = (((g << 10) | (g >>> 22)) + c) & -1;
      g = (((e + (c ^ (f | ~d))) & -1) + ((b[10] + -1051523) & -1)) & -1;
      e = (((g << 15) | (g >>> 17)) + f) & -1;
      g = (((d + (f ^ (e | ~c))) & -1) + ((b[1] + -2054922799) & -1)) & -1;
      d = (((g << 21) | (g >>> 11)) + e) & -1;
      g = (((c + (e ^ (d | ~f))) & -1) + ((b[8] + 1873313359) & -1)) & -1;
      c = (((g << 6) | (g >>> 26)) + d) & -1;
      g = (((f + (d ^ (c | ~e))) & -1) + ((b[15] + -30611744) & -1)) & -1;
      f = (((g << 10) | (g >>> 22)) + c) & -1;
      g = (((e + (c ^ (f | ~d))) & -1) + ((b[6] + -1560198380) & -1)) & -1;
      e = (((g << 15) | (g >>> 17)) + f) & -1;
      g = (((d + (f ^ (e | ~c))) & -1) + ((b[13] + 1309151649) & -1)) & -1;
      d = (((g << 21) | (g >>> 11)) + e) & -1;
      g = (((c + (e ^ (d | ~f))) & -1) + ((b[4] + -145523070) & -1)) & -1;
      c = (((g << 6) | (g >>> 26)) + d) & -1;
      g = (((f + (d ^ (c | ~e))) & -1) + ((b[11] + -1120210379) & -1)) & -1;
      f = (((g << 10) | (g >>> 22)) + c) & -1;
      g = (((e + (c ^ (f | ~d))) & -1) + ((b[2] + 718787259) & -1)) & -1;
      e = (((g << 15) | (g >>> 17)) + f) & -1;
      g = (((d + (f ^ (e | ~c))) & -1) + ((b[9] + -343485551) & -1)) & -1;
      a[0] = (c + a[0]) & -1;
      a[1] = (((((g << 21) | (g >>> 11)) + e) & -1) + a[1]) & -1;
      a[2] = (e + a[2]) & -1;
      a[3] = (f + a[3]) & -1;
    }
  }
  Id.i = !0;
  class Ld {
    constructor(a) {
      this.dr = [];
      this.data = null;
      var b = new Uint8Array(a),
        c = b.byteLength;
      if (b[c - 1] == 69) {
        var d = b[c - 6] | (b[c - 5] << 8) | (b[c - 4] << 16),
          e = a.slice(c - (d + 6), c - 6);
        if ((b[c - 3] & 1) > 0) {
          a = Ha.Xg(a.slice(0, a.byteLength - (d + 6)));
          b = Id.encode(Tc.encode(a));
          a = [];
          for (c = 0; c < 32; ) a.push(qa.Cv(b, c++));
          b = new Uint8Array(e);
          c = 0;
          for (d = e.byteLength; c < d; ) {
            var f = c++;
            b[f] ^= a[f & 31];
          }
        }
        this.data = Ha.Xg(e);
        e = new $b(this.data);
        a = e.N();
        for (b = 0; b < a; ) {
          ++b;
          d = e.N();
          f = e.N();
          c = null;
          let g = e.Id();
          g > 0 && (c = e.kt(g, Ge.Ru));
          d == 0
            ? ((d = e.Id()),
              (f = new Ha(new ArrayBuffer(d))),
              e.mn(f, 0, d),
              this.dr.push(new Vg(c, f, null)))
            : this.dr.push(new Vg(c, this.dr[f].data, f));
        }
      }
    }
  }
  Ld.i = !0;
  Object.assign(Ld.prototype, { j: Ld });
  class Vg {
    constructor(a, b, c) {
      this.name = a;
      this.data = b;
      this.mt = c;
    }
  }
  Vg.i = !0;
  Object.assign(Vg.prototype, { j: Vg });
  class m {
    static init() {
      m.data = new jb();
      m.Sm = new jb();
      m.DB = [];
      m.resolution = 1;
      m.language = "en";
      m.Qo = "png";
      m.Ml = null;
      m.oy = new lc();
      m.Nv = new jb();
      m.decoding = new jb();
      m.hr = null;
      m.Eh = new jb();
      m.Eh.J[0] = ["wav", "ogg", "aac"];
      m.Eh.J[2] = ["png", "jpg", "avif", "dds", "ktx"];
      m.Eh.J[3] = ["txt", "json", "tmj", "tsj"];
      m.Eh.J[1] = ["dat", "tps", "fnt", "zst"];
      m.Eh.J[4] = ["mp4"];
    }
    static Ly(a) {
      m.resolution = 2;
    }
    static ww() {
      return m.language;
    }
    static ai(a) {
      var b;
      b == null && (b = !1);
      a == null && (a = "en");
      a = a.toLowerCase();
      var c = m.nw();
      c.length > 0 &&
        !Ma.lk(c, function (d) {
          return d == a;
        }) &&
        (a = "en");
      if (b && a != m.language)
        for (b = 0, c = m.Ve; b < c.length; ) {
          let d = c[b];
          ++b;
          new oa("{language}", "").match(d) && (m.Lg(d), m.rt(m.Lg(d)));
        }
      m.language = a;
      return m.language;
    }
    static xU() {
      m.Qo = "avif";
    }
    static BF(a) {
      m.VB = a;
    }
    static TP(a) {
      var b = new RegExp("^(" + m.Jq + "/)", "");
      a = m.Vi(a).replace(b, "");
      b = new oa("-(\\d)x", "");
      return b.match(a) ? ra.parseInt(b.Xb(1)) : 1;
    }
    static WP(a) {
      return m.nS[a];
    }
    static tC() {
      return m.Ml;
    }
    static tU(a) {
      m.Ml = a;
    }
    static getType(a) {
      let b = 0;
      for (; b < 5; ) {
        let c = b++;
        if (new oa("\\.(" + m.Eh.J[c].join("|") + ")", "mi").match(a)) return c;
      }
      throw 27;
    }
    static Vi(a) {
      let b = m.Ve[a];
      if (b == null) return null;
      let c = new oa("{(?:language|image|audio|resolution)}", "");
      if (c.match(b)) {
        c = new oa("{language}", "");
        c.match(b) &&
          m.language != null &&
          (b = b.replace(c.r, "-" + m.language));
        c = new oa("{image}", "g");
        if (c.match(b)) {
          let d = "*",
            e = new oa("(" + m.yP[a] + ")", "");
          e.match(m.VB) ? (d = m.VB) : e.match(m.Qo) && (d = m.Qo);
          b = b.replace(c.r, d);
        }
        c = new oa("{audio}", "g");
        c.match(b) && m.Ml != null && (b = b.replace(c.r, m.Ml));
        c = new oa("{resolution}", "g");
        c.match(b) &&
          m.resolution != null &&
          (b = b.replace(c.r, "-" + Math.min(m.WP(a), m.resolution) + "x"));
      }
      // Keep the new transparent CJK atlas in PNG for consistent browser decoding.
      b === "lang/font-zh.avif" && (b = "lang/font-zh.png");
      return "" + m.Jq + "/" + b;
    }
    static dQ() {
      var a;
      a == null && (a = m.RP());
      let b = [],
        c = 0;
      for (; c < a.length; ) {
        let d = m.Vi(a[c++]);
        d != null && b.push(d);
      }
      return b;
    }
    static RP() {
      let a = [],
        b = 0,
        c = m.MAX;
      for (; b < c; ) a.push(b++);
      return a;
    }
    static iterator() {
      return new oi();
    }
    static LC() {
      let a = m.HT,
        b = [],
        c = 0;
      for (; c < a.length; ) {
        let d = a[c];
        ++c;
        m.AG(d) && b.push(d);
      }
      return b;
    }
    static SP() {
      let a = m.EQ,
        b = [],
        c = 0;
      for (; c < a.length; ) {
        let d = a[c];
        ++c;
        m.AG(d) && b.push(d);
      }
      return b;
    }
    static pm(a, b, c) {
      c == null && (c = !1);
      let d = RegExp("\\.(\\w+)$", "");
      a = m.Vi(a).replace(d, "." + b);
      c && (a = a.replace(RegExp("\\.p\\.", ""), "."));
      return m.Lg(a);
    }
    static Lg(a) {
      function b(d, e) {
        a = a.replace(new RegExp(d, ""), e);
      }
      if (Object.prototype.hasOwnProperty.call(m.oy.J, a))
        return ra.parseInt(m.oy.J[a]);
      b("^(" + m.Jq + "/)(.*)", "$2");
      var c = m.Ve.indexOf(a);
      if (c != -1) return c;
      c = m.nw();
      c.length > 0 && b("-(" + c.join("|") + ")", "{language}");
      b("[\\/-][124]x", "{resolution}");
      c = m.Ve.indexOf(a);
      if (c != -1) return c;
      new oa("(" + m.Eh.J[2].join("|") + ")", "g").match(a)
        ? ((c = m.JP()),
          c.length > 0 &&
            (b("(.*?)\\.(" + c.join("|") + ")$", "$1.{image}"),
            b("((" + c.join("|") + ")\\/)", "{image}/")))
        : new oa("(" + m.Eh.J[0].join("|") + ")", "g").match(a) &&
          ((c = m.Tr()),
          c.length > 0 &&
            (b("(.*?)\\.(" + c.join("|") + ")$", "$1.{audio}"),
            b("((" + c.join("|") + ")\\/)", "{audio}/")));
      return m.Ve.indexOf(a);
    }
    static Ab(a) {
      a = m.data.J[a];
      if (typeof a == "string") return a;
      if (a instanceof ArrayBuffer) {
        if ("TextDecoder" in window)
          return ((a = new DataView(a)), new TextDecoder("utf-8").decode(a));
        a = Ha.Xg(a);
        return a.Ab(0, a.length);
      }
      return null;
    }
    static Si(a) {
      return Ha.Xg(m.data.J[a]);
    }
    static LP(a) {
      if (m.hr == null) {
        m.hr = new lc();
        let b = 0,
          c = m.bytes;
        for (; b < c.length; ) {
          let d = c[b++].split(":");
          m.hr.J[m.Jq + "/" + d[0]] = ra.parseInt(d[1]);
        }
      }
      return m.hr.J[a];
    }
    static AG(a) {
      return m.Tw(a)
        ? m.Ml == null
          ? !1
          : Ma.lk(m.Tr(), function (b) {
              return b == m.Ml;
            })
        : !0;
    }
    static setData(a, b) {
      if (m.Nv.J.hasOwnProperty(a) && m.decoding.J[a] == 0)
        ((m.decoding.J[a] = 1),
          m.Nv.J[a](a, b, function (c) {
            m.decoding.J[a] = 2;
            m.setData(a, c);
          }));
      else {
        m.data.J[a] = b;
        b = m.DB;
        let c = b.length;
        for (; --c > -1; )
          if (b[c].id == a) {
            let d = b[c];
            b[c] = b[b.length - 1];
            b.pop();
            d.Ic();
          }
      }
    }
    static qb(a) {
      return m.data.J[a] != null;
    }
    static rt(a) {
      m.data.J[a] = null;
      m.data.remove(a);
      m.decoding.J[a] = 0;
    }
    static EU(a, b) {
      m.Sm.J[a] = b;
    }
    static XP(a) {
      return m.Sm.J[a];
    }
    static Tw(a) {
      return a > 1e3
        ? ((a = m.oy.J[a == null ? "null" : "" + a]),
          new oa("(ogg|aac|mp3|wav)$", "").match(a))
        : new oa("{audio}", "").match(m.Ve[a]);
    }
    static Og(a) {
      return new oa("music", "").match(m.Ve[a]);
    }
    static XQ(a) {
      a = m.Ve[a];
      let b = new oa("{image}", "g");
      b.match(a) && m.Qo != null && (a = a.replace(b.r, m.Qo));
      return new oa("\\.(" + m.Eh.J[2].join("|") + ")$", "").match(a);
    }
    static Ak(a) {
      return m.decoding.J[a] == 1;
    }
    static GS(a, b) {
      m.Vi(a) != null && (m.qb(a) ? b(a) : m.DB.push(new pi(a, b)));
    }
    static $A(a, b) {
      m.Nv.J[a] = b;
      m.decoding.J[a] = 0;
    }
    static Tr() {
      return ["ogg", "aac"].slice();
    }
    static JP() {
      return ["png", "ktx", "jpg", "dds", "avif"].slice();
    }
    static nw() {
      return "ru nl ko ja it fr es en de br zh".split(" ").slice();
    }
  }
  m.i = !0;
  class pi {
    constructor(a, b) {
      this.id = a;
      this.Or = b;
    }
    Ic() {
      this.Or(this.id);
      this.Or = null;
    }
  }
  pi.i = !0;
  Object.assign(pi.prototype, { j: pi });
  class oi {
    constructor() {
      this.fD = 0;
    }
    ib() {
      return this.fD < m.MAX;
    }
    next() {
      return this.fD++;
    }
  }
  oi.i = !0;
  Object.assign(oi.prototype, { j: oi });
  class ni {
    constructor(a, b) {
      this.$m = this.Te = null;
      this.progress = 0;
      this.data = null;
      this.url = a;
      this.version = b;
    }
    G() {
      this.Te = this.$m = this.data = null;
    }
    load(a, b) {
      this.$m = a;
      this.Te = b;
      a = new oa("\\.([a-z0-9]{3,4})$", "");
      a.match(this.url);
      switch (a.Xb(1)) {
        case "aac":
        case "dat":
        case "dds":
        case "ktx":
        case "ogg":
          a = "arraybuffer";
          break;
        case "avif":
        case "jpg":
        case "mp4":
        case "png":
          a = "blob";
          break;
        case "json":
        case "tmj":
        case "tsj":
        case "txt":
          a = "text";
          break;
        default:
          throw 28;
      }
      let c = this;
      this.mW(this.url, a, function (d) {
        c.lj(d);
      });
    }
    mW(a, b, c) {
      let d = new XMLHttpRequest(),
        e = this;
      d.onerror = function () {
        e.Te != null && e.Te();
        d.onerror = d.onload = d.onprogress = null;
      };
      d.onload = function () {
        e.progress = 1;
        if (d.status == 404) e.Te != null && e.Te();
        else {
          var f = d.response;
          d.onerror = d.onload = d.onprogress = null;
          c(f);
        }
      };
      d.onprogress = function (f) {
        f.total > 0 && (e.progress = f.loaded / f.total);
      };
      try {
        (d.open("GET", a, !0), (d.responseType = b), d.send());
      } catch (f) {}
    }
    lj(a) {
      this.data = a;
      this.$m();
      this.$m = null;
    }
  }
  ni.i = !0;
  Object.assign(ni.prototype, { j: ni });
  class Wg {
    constructor(a, b, c) {
      this.id = a;
      this.data = b;
      this.Og = c;
      this.GD = -1;
    }
  }
  Wg.i = !0;
  Object.assign(Wg.prototype, { j: Wg });
  class Jd {
    constructor() {
      this.AV = 0.05;
      this.enabled = !0;
      this.XD = 2;
      this.oS = 16;
      this.WD = this.yi = 0;
      this.vx = this.ux = this.wx = 1;
      this.VD = 0;
      this.BS = 1e4;
      this.ld = [];
      this.uh = new jb();
      this.BV = new jb();
      this.names = [];
    }
    G() {
      this.ux != 1 && this.xf(1);
      this.vx != 1 && this.Iy(1);
      this.wx != 1 && this.zj(1);
      this.VD != 0 && this.Jt(0);
      let a = 0,
        b = this.ld;
      for (; a < b.length; ) b[a++].G();
      this.names = this.uh = this.ld = null;
    }
    nt() {}
    ot(a) {
      let b = 0;
      for (; b < a.length; ) {
        let c = a[b];
        ++b;
        this.names[c.id] = c.name;
      }
    }
    play() {
      return -1;
    }
    stop(a, b) {
      b == null && (b = 0);
      if (a < 0) return !1;
      if (a < 1e4) {
        var c = !1;
        let d = 0,
          e = this.ld,
          f = [],
          g = 0;
        for (; g < e.length; ) {
          let h = e[g];
          ++g;
          h.df.id == a && f.push(h);
        }
        for (; d < f.length; ) ((c = !0), f[d++].stop(b));
        return c;
      }
      c = Ma.find(this.ld, function (d) {
        return d.id == a;
      });
      return c != null ? (c.stop(b), !0) : !1;
    }
    Mc(a) {
      return a < 0
        ? !1
        : a < 1e4
          ? Ma.lk(this.ld, function (b) {
              return b.df.id == a;
            })
          : Ma.lk(this.ld, function (b) {
              return b.id == a;
            });
    }
    Lg(a) {
      let b = Ma.find(this.ld, function (c) {
        return c.df.id == a;
      });
      return b != null ? b.id : -1;
    }
    iQ(a) {
      return a < 1e4
        ? Ma.find(this.ld, function (b) {
            return b.df.id == a;
          })
        : Ma.find(this.ld, function (b) {
            return b.id == a;
          });
    }
    fR(a) {
      return this.uh.J[a] != null;
    }
    TU(a, b) {
      a == null
        ? Ma.cj(this.ld, function (c) {
            c.df.Og || c.Aj(b);
          })
        : Ma.cj(this.ld, function (c) {
            c.df.Og || (a < 1e4 ? c.df.id : c.id) != a || c.Aj(b);
          });
    }
    zj(a) {
      this.wx = a < 0 ? 0 : a > 1 ? 1 : a;
      this.lu();
      this.nu();
    }
    Iy(a) {
      this.vx = a < 0 ? 0 : a > 1 ? 1 : a;
      this.nu();
    }
    xf(a) {
      this.ux = a < 0 ? 0 : a > 1 ? 1 : a;
      this.lu();
    }
    Jt(a) {
      this.VD = a < -1 ? -1 : a > 1 ? 1 : a;
    }
    Xo(a, b, c) {
      c == null && (c = !0);
      this.kn(a, 0, b);
      c && this.stop(a, b);
    }
    kn(a, b, c) {
      var d;
      d == null && (d = -1);
      let e = this.iQ(a);
      e != null &&
        this.Mc(a) &&
        (d != -1 && e.Aj(d),
        (a = e.ip() - b),
        (a > 0 ? a < 0.01 : -a < 0.01) || e.kn(b, c));
    }
    cU(a, b, c) {
      if (!this.enabled || !this.fR(a)) return -1;
      if (b && this.Mc(a)) return this.Lg(a);
      b && (c = !0);
      if (!c && this.ez(a)) return -1;
      a = this.$P(this.uh.J[a].Og, c);
      return a < 0 ? -1 : a;
    }
    $S(a) {
      this.ld.push(a);
      this.ld.length > this.WD && (this.WD = this.ld.length);
    }
    ZS(a) {
      this.yi &= ~(1 << a.channel);
      qa.remove(this.ld, a);
      a.lj != null && (a.lj(), (a.lj = null));
    }
    ez(a) {
      let b = this.uh.J[a];
      if (b.Og) return !1;
      let c = qa.now() / 1e3;
      a = this.BV.J[a];
      a == null && (a = this.AV);
      if (c - b.GD < a) return !0;
      b.GD = c;
      return !1;
    }
    $P(a, b) {
      if (a) {
        for (b = 0; b < this.XD; ) {
          if ((this.yi & (1 << b)) == 0) return ((this.yi |= 1 << b), b);
          ++b;
        }
        return -1;
      }
      a = -1;
      for (var c = this.XD, d = c + this.oS; c < d; ) {
        if ((this.yi & (1 << c)) == 0) {
          this.yi |= 1 << c;
          a = c;
          break;
        }
        ++c;
      }
      if (b && a < 0) {
        b = null;
        c = a = 0;
        for (d = this.ld; c < d.length; ) {
          let e = d[c];
          ++c;
          !e.df.Og && !e.loop && e.ep() > a && ((a = e.ep()), (b = e));
        }
        if (b == null) return -1;
        a = b.channel;
        b.stop();
      }
      return a;
    }
    lu() {
      Ma.cj(this.ld, function (a) {
        a.df.Og && a.Aj(a.ip());
      });
    }
    nu() {
      Ma.cj(this.ld, function (a) {
        a.df.Og || a.Aj(a.ip());
      });
    }
  }
  Jd.i = !0;
  Object.assign(Jd.prototype, { j: Jd });
  class qi {
    constructor(a, b, c, d) {
      this.name = a;
      this.id = b;
      this.min = c;
      this.max = d;
    }
  }
  qi.i = !0;
  Object.assign(qi.prototype, { j: qi });
  class Pe {
    static ZC(a) {
      a = Ha.Xg(a);
      return a.b[0] == 83 && a.b[1] == 80 ? a.b[2] == 82 : !1;
    }
    static XT(a) {
      return a.slice(5 + new $b(Ha.Xg(a), 3).Id());
    }
    static IP(a) {
      if (!Pe.ZC(a)) throw 29;
      a = new $b(Ha.Xg(a), 5);
      let b = [],
        c = 0,
        d = a.Id();
      for (; c < d; ) {
        c++;
        let e = "",
          f = 0,
          g = a.Id();
        for (; f < g; ) {
          f++;
          let h = a.N();
          e += String.fromCodePoint(h);
        }
        b.push(new qi(e, a.Id(), a.bF(), a.bF()));
      }
      return b;
    }
  }
  Pe.i = !0;
  class Je extends Jd {
    constructor() {
      super();
    }
    nt() {}
    ot() {}
    play() {
      return -1;
    }
    zj() {}
    xf() {}
    Iy() {}
    Jt() {}
    lu() {}
    nu() {}
  }
  Je.i = !0;
  Je.u = Jd;
  Object.assign(Je.prototype, { j: Je });
  class Xg {
    constructor(a, b) {
      this.volume = 1;
      this.offset = 0;
      this.loop = !1;
      this.Sx = a;
      this.df = b;
    }
    G() {
      this.Sx = this.df = null;
      this.Bk = !0;
    }
    ip() {
      return this.Bk ? NaN : this.volume;
    }
    Aj(a) {
      this.Bk || ((this.volume = a), this.eW());
    }
    ep() {
      return this.Bk ? NaN : this.fQ() / this.data.duration;
    }
  }
  Xg.i = !0;
  Object.assign(Xg.prototype, { j: Xg });
  class Rc {
    constructor() {
      this.zp = [];
      this.stack = [];
      this.nG = this.mG = 0;
    }
    bg(a, b) {
      this.zp.push(new ri(a, b));
      let c = this;
      return function () {
        c.removeListener(a, b);
      };
    }
    once(a, b) {
      this.bg(a, b);
      this.zp[this.zp.length - 1].flags = 3;
    }
    removeListener(a, b) {
      let c = this.zp,
        d = 0,
        e = c.length;
      for (; d < e; ) {
        let f = c[d];
        if (f.type == a && f.listener == b) {
          f.flags = 0;
          c[d] = c[e - 1];
          c.pop();
          break;
        }
        ++d;
      }
    }
    Ic(a, b) {
      var c = this.zp;
      let d = c.length,
        e = this.stack,
        f = this.mG,
        g = 0,
        h = d;
      for (; g < h; ) e[f++] = c[g++];
      f > this.nG && (this.nG = f);
      for (this.mG = f; d > 0; )
        ((c = e[--f]),
          (e[f] = null),
          c.type == a &&
            c.flags > 0 &&
            (c.listener.apply(null, b), c.flags == 3 && (c.flags = 0)),
          --d);
    }
  }
  Rc.i = !0;
  Object.assign(Rc.prototype, { j: Rc });
  class Q {
    static jp() {
      return Q.context != null ? Q.context.state == "running" : !1;
    }
    static bg(a, b) {
      return Q.Tb.bg(a, b);
    }
    static once(a, b) {
      Q.Tb.once(a, b);
    }
    static init() {
      if (Q.context != null) {
        Q.aO();
        var a = Q.zf;
        a != null && a.stop();
      }
      a = new oa("(iPad|iPhone)", "g").match(ab.navigator.platform);
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && (a = !0);
      a &&
        ((Q.currentTime = null),
        (Q.zf = new nc(1e3)),
        (Q.zf.bh = function () {
          Q.context != null &&
            Q.jp() &&
            (Q.currentTime != null &&
              Q.currentTime == Q.context.currentTime &&
              (Q.zf.stop(), Q.Tb.Ic("EContextBroken")),
            (Q.currentTime = Q.context.currentTime));
        }));
      try {
        (typeof AudioContext !== "undefined"
          ? (Q.context = new AudioContext())
          : typeof webkitAudioContext !== "undefined" &&
            (Q.context = new webkitAudioContext()),
          (Q.context.onstatechange = function () {
            Q.Tb.Ic(Q.jp() ? "EContextResumed" : "EContextSuspended");
          }),
          Q.Tb.Ic("EContextCreated"),
          Q.jp() || Q.addListener());
      } catch (b) {
        Q.context = null;
      }
    }
    static tD() {
      for (;;) {
        if (Q.yz != null) return Q.yz;
        try {
          Q.yz = !(!window.AudioContext && !window.webkitAudioContext);
        } catch (a) {
          Q.yz = !1;
        }
      }
    }
    static FO() {
      function a(h, l) {
        e[h] = l;
      }
      let b = null;
      try {
        b = typeof Audio !== "undefined" ? new Audio() : null;
      } catch (h) {
        return null;
      }
      if (!b || typeof b.canPlayType !== "function") return null;
      let c = { probably: 2, maybe: 1, "": 0 },
        d = null;
      d = function (h) {
        if (h instanceof Array) {
          let l = 0,
            n = 0;
          for (; n < h.length; ) {
            let q = d(h[n++]);
            q > l && (l = q);
          }
          return l;
        }
        return Jb.Ig(c, b.canPlayType(h).replace(RegExp("^no$", ""), ""));
      };
      let e = {};
      a("mp3", d("audio/mp3;"));
      a("ogg", d('audio/ogg; codecs="vorbis"'));
      a("aac", d("audio/aac;"));
      var f = ab.navigator.userAgent;
      if (f.indexOf("OPR") > -1 || f.indexOf("YaBrowser") > -1) e.aac = 0;
      f = 0;
      let g = ["aac", "ogg", "mp3"];
      for (; f < g.length; ) {
        let h = g[f];
        ++f;
        if (Jb.Ig(e, h) > 0) return h;
      }
      return null;
    }
    static aO() {
      try {
        ((Q.context.onstatechange = null), Q.context.close());
      } catch (a) {}
      Q.context = null;
    }
    static GE(a) {
      a.preventDefault();
      Q.context != null &&
        Q.context.state != "running" &&
        Q.context.resume().then(
          function () {},
          function () {
            Q.Tb.Ic("EContextResumeRejected");
          },
        );
    }
    static addListener() {
      window.addEventListener("mouseup", Q.GE);
      window.addEventListener("touchend", Q.GE);
    }
  }
  Q.i = !0;
  class dd extends Jd {
    constructor() {
      super();
    }
    G() {
      super.G();
      this.Kp = this.Jp = this.Lp = this.Ip = null;
    }
    nt(a, b, c, d, e) {
      c == null && (c = !1);
      super.nt(a, b, c, d, e);
      let f = this;
      this.decode(b, function (g) {
        g == null ? d(null) : ((f.uh.J[a] = new Wg(a, g, c)), d(g));
      });
    }
    ot(a, b, c) {
      super.ot(a, b, c);
      let d = this;
      this.decode(b, function (e) {
        if (e == null) c(null);
        else
          try {
            let f = d.split(e, a),
              g = 0,
              h = a.length;
            for (; g < h; ) {
              let l = g++,
                n = a[l].id;
              d.names[n] = a[l].name;
              d.uh.J[n] = new Wg(n, f[l], !1);
            }
            c(e);
          } catch (f) {}
      });
    }
    play(a, b, c, d) {
      d == null && (d = 0);
      c == null && (c = !1);
      b == null && (b = !1);
      if (Q.context == null || !Q.jp()) return -1;
      c = this.cU(a, b, c);
      if (c < 0) return -1;
      a = new Xc(this, this.uh.J[a]);
      a.id = this.BS++;
      a.channel = c;
      a.loop = b;
      a.offset = d;
      a.play();
      this.$S(a);
      return a.id;
    }
    zj(a, b) {
      b == null && (b = 0);
      if (Q.context != null) {
        this.wx = a < 0 ? 0 : a > 1 ? 1 : a;
        var c = this.Xr();
        b > 0 ? c.kn(a, b) : c.Ht(a);
      }
    }
    xf(a) {
      Q.context != null &&
        ((this.ux = a < 0 ? 0 : a > 1 ? 1 : a), this.IC().Ht(a));
    }
    Iy(a) {
      Q.context != null &&
        ((this.vx = a < 0 ? 0 : a > 1 ? 1 : a), this.JC().Ht(a));
    }
    Jt(a) {
      Q.context != null && (super.Jt(a), this.VP().XU(a));
    }
    lu() {}
    nu() {}
    decode(a, b) {
      new (window.OfflineAudioContext || window.webkitOfflineAudioContext)(
        2,
        1323e4,
        44100,
      ).decodeAudioData(
        a,
        function (c) {
          b(c);
        },
        function () {
          b(null);
        },
      );
    }
    Xr() {
      this.Ip == null &&
        ((this.Ip = new Yc()), (this.Ip.type = 5), this.Ip.connect(new Yg()));
      return this.Ip;
    }
    JC() {
      this.Lp == null &&
        ((this.Lp = new Yc()), (this.Lp.type = 3), this.Lp.connect(this.Xr()));
      return this.Lp;
    }
    IC() {
      this.Jp == null &&
        ((this.Jp = new Yc()), (this.Jp.type = 4), this.Jp.connect(this.Xr()));
      return this.Jp;
    }
    VP() {
      this.Kp == null &&
        ((this.Kp = new Zg()), (this.Kp.type = 6), this.Xr().append(this.Kp));
      return this.Kp;
    }
    pO(a) {
      let b = window.OfflineAudioContext;
      b == null && (b = window.webkitOfflineAudioContext);
      return new b(2, a * 44100, 44100);
    }
    split(a, b) {
      let c = this.pO(Math.ceil((b[b.length - 1].max * 2) / 1e3)),
        d = a.sampleRate,
        e = [],
        f = 0,
        g = b.length;
      if (a.numberOfChannels == 1)
        for (var h = a.getChannelData(0); f < g; ) {
          var l = b[f++];
          a = ((d / 1e3) * l.min) | 0;
          var n = ((d / 1e3) * l.max) | 0;
          l = c.createBuffer(1, n - a, d);
          a = h.subarray(a, n);
          try {
            l.copyToChannel(a, 0);
          } catch (q) {
            l.getChannelData(0).set(a);
          }
          e.push(l);
        }
      else
        for (h = a.getChannelData(0), a = a.getChannelData(1); f < g; ) {
          n = b[f++];
          l = ((d / 1e3) * n.min) | 0;
          let q = ((d / 1e3) * n.max) | 0;
          n = c.createBuffer(2, q - l, d);
          let r = h.subarray(l, q);
          l = a.subarray(l, q);
          try {
            (n.copyToChannel(r, 0), n.copyToChannel(l, 1));
          } catch (u) {
            (n.getChannelData(0).set(r), n.getChannelData(1).set(l));
          }
          e.push(n);
        }
      return e;
    }
  }
  dd.i = !0;
  dd.u = Jd;
  Object.assign(dd.prototype, { j: dd });
  class Xc extends Xg {
    constructor(a, b) {
      super(a, b);
      this.data = b.data;
      this.Ms = null;
    }
    G() {
      if (!this.Bk) {
        var a = this.Kf;
        a: for (; a != null; ) {
          let b = a.output;
          switch (a.type) {
            case 0:
              this.Mc && ((this.Mc = !1), this.Kf.stop(0));
              break;
            case 1:
            case 2:
              break;
            default:
              break a;
          }
          qa.remove(a.output.inputs, a);
          a.n.disconnect();
          a.G();
          a = b;
        }
        this.Kf = this.data = null;
        a = this.Sx;
        super.G();
        a.ZS(this);
      }
    }
    play() {
      if (!this.Bk) {
        this.Mc = !0;
        this.Kf = new $g();
        var a = this.Sx;
        this.Kf.connect(this.df.Og ? a.IC() : a.JC());
        this.startTime = Q.context.currentTime;
        this.Kf.play(this.data, this.loop, this.offset, M(this, this.onended));
      }
    }
    kn(a, b) {
      if (!this.Bk) {
        var c = this.FC();
        c != null && c.kn(a, b);
        this.volume = a;
        this.Ms = Q.context.currentTime + b;
      }
    }
    stop(a) {
      a == null && (a = 0);
      this.Bk ||
        this.stopped ||
        !this.Mc ||
        ((this.stopped = !0), this.Kf.stop(Q.context.currentTime + a));
    }
    fQ() {
      return (
        (this.offset + (Q.context.currentTime - this.startTime)) %
        this.data.duration
      );
    }
    ip() {
      if (this.Ms != null) {
        if (Q.context.currentTime < this.Ms) return this.Kf.get(2).n.gain.value;
        this.Ms = null;
      }
      return this.volume;
    }
    eW() {
      let a = this.FC();
      a != null && a.Ht(this.ip());
    }
    onended() {
      this.Mc && ((this.Mc = !1), this.G());
    }
    FC() {
      if (!Xc.qC || this.Kf == null) return null;
      try {
        let a = this.Kf.get(2);
        if (a == null) {
          a = new Yc();
          let b = this.Kf.get(1);
          b == null ? this.Kf.append(a) : b.append(a);
        }
        return a;
      } catch (a) {
        return ((Xc.qC = !1), null);
      }
    }
  }
  Xc.i = !0;
  Xc.u = Xg;
  Object.assign(Xc.prototype, { j: Xc });
  class Yb {
    constructor(a, b) {
      this.n = a;
      this.type = b;
      this.inputs = [];
      this.output = null;
    }
    get(a) {
      let b = this;
      for (; b != null; ) {
        if (b.type == a) return b;
        b = b.output;
      }
      return null;
    }
    G() {
      this.n = this.output = this.inputs = null;
    }
    connect(a) {
      this.output = a;
      a.inputs.push(this);
      this.n.disconnect();
      this.n.connect(a.n);
    }
    append(a) {
      qa.remove(this.output.inputs, this);
      a.connect(this.output);
      this.connect(a);
    }
  }
  Yb.i = !0;
  Object.assign(Yb.prototype, { j: Yb });
  class Yg extends Yb {
    constructor() {
      super(Q.context.destination, 8);
    }
  }
  Yg.i = !0;
  Yg.u = Yb;
  Object.assign(Yg.prototype, { j: Yg });
  class $g extends Yb {
    constructor() {
      super(Q.context.createBufferSource(), 0);
    }
    G() {
      this.n.onended = null;
      super.G();
    }
    play(a, b, c, d) {
      let e = this.n;
      e.buffer = a;
      e.loop = b;
      e.start(0, c);
      e.onended = d;
    }
    stop(a) {
      a == null && (a = 0);
      this.n.stop(a);
    }
  }
  $g.i = !0;
  $g.u = Yb;
  Object.assign($g.prototype, { j: $g });
  class Yc extends Yb {
    constructor() {
      super(Q.context.createGain(), 2);
    }
    Ht(a) {
      this.n.gain.value = a;
    }
    kn(a, b) {
      let c = Q.context.currentTime,
        d = this.n;
      d.gain.cancelScheduledValues(0);
      d.gain.linearRampToValueAtTime(a, c + b);
    }
  }
  Yc.i = !0;
  Yc.u = Yb;
  Object.assign(Yc.prototype, { j: Yc });
  class Zg extends Yb {
    constructor() {
      super(Q.context.createStereoPanner(), 1);
    }
    XU(a) {
      let b = this.n;
      b.pan.cancelScheduledValues(0);
      b.pan.setTargetAtTime(a, Q.context.currentTime, 0.005);
    }
  }
  Zg.i = !0;
  Zg.u = Yb;
  Object.assign(Zg.prototype, { j: Zg });
  class Aa extends Wc {
    constructor(a, b, c, d) {
      super();
      this.frame = b;
      this.um = c;
      a == null && (a = p.Za);
      this.U = new C(null, a, (this.frame = b));
      this.l.appendChild(this.U);
      this.icon = null;
      d != null &&
        ((this.icon = new C(null, a, d)),
        this.icon.Sl(),
        this.l.appendChild(this.icon));
      a = this.U.Y;
      this.lc = new F(a.x, a.y, 0, 1);
      this.ye = 0;
    }
    reset() {
      this.U.Ib(this.frame);
    }
    By(a) {
      this.focused && (a = !0);
      this.um != null && this.l.pb(0).Ib(a ? this.um : this.frame);
    }
    update(a) {
      super.update(a);
      this.ye > 0 &&
        ((this.ye -= a), this.ye < 0 && (this.U.Ib(this.frame), (this.ye = 0)));
    }
    focus() {}
    select() {
      super.select();
      this.ye = 0.2;
    }
    Yb(a) {
      return this.l.Yb(a);
    }
    static create(a, b, c, d) {
      return new Aa(a, b, c, d);
    }
  }
  Aa.i = !0;
  Aa.u = Wc;
  Object.assign(Aa.prototype, { j: Aa });
  class Qd extends Aa {
    constructor() {
      super(p.Za, k.Bl, k.Cl, k.bM);
      let a = z.Tk;
      a != 0 &&
        (new C(this.l, p.Za, k.dM),
        a > 19 && (a = 19),
        new C(this.l, p.Za, "album/" + a));
    }
  }
  Qd.i = !0;
  Qd.u = Aa;
  Object.assign(Qd.prototype, { j: Qd });
  class kd extends ma {
    constructor(a, b, c) {
      c == null && (c = !1);
      b == null && (b = 1);
      super();
      this.U = a;
      this.scale = b;
      this.loop = c;
      this.time = 0;
      a.setScale(1, 1);
      a.Sl();
      this.g = new F(a.ya(), a.Xa(), 0, 1);
    }
    pa() {
      this.U.setScale(1, 1);
      this.U.m(this.g.x);
      this.U.o(this.g.y);
      super.pa();
    }
    update(a) {
      super.update(a);
      a = this.time;
      if (a < 0.1) {
        a = 0.05 * Math.sin((a / 0.1) * (Math.PI / 2)) * this.scale;
        var b = 1 - a;
        a = 1 + a;
      } else if (a < 0.3)
        ((b = a - 0.1),
          (a =
            ((b /= 0.09999999999999999) < 1
              ? 0.055 * b * b * b
              : 0.055 * ((b -= 2) * b * b + 2)) * this.scale),
          (b = 0.95 + a),
          (a = 1.05 - a));
      else if (a < 0.6)
        ((a = (a - 0.3) / 0.3 - 1),
          (a = 0.05 * (a * a * a + 1) * this.scale),
          (b = 1.06 - a),
          (a = 0.94 + a));
      else {
        this.loop ? a > 4 && (this.time = 0) : this.pa();
        return;
      }
      this.U.m(this.g.x + b);
      this.U.o(this.g.y + a);
      this.U.qa(b);
      this.U.nb(a);
    }
  }
  kd.i = !0;
  kd.u = ma;
  Object.assign(kd.prototype, { j: kd });
  class Sa extends ma {
    constructor() {
      super();
      Sa.instance = this;
      this.In = ua.instance.zd && this.system.window.Qc.x == 1920;
      this.state = 0;
      this.l = new V();
      this.node = new rb();
      this.node.R(this.l.B);
      this.node.name = "cover";
      this.rc = new bc(null, new F(0, 0, 0, 1));
      this.rc.X(0.5);
      this.l.node.R(this.rc.B);
      this.ft = [];
      this.Ct = [1, 1];
      this.ze = [new C(this.l, p.ck, k.Sz), new C(this.l, p.ck, k.Sz)];
      this.Fa = [new C(this.l, p.ck, k.Rz), new C(this.l, p.ck, k.Rz)];
      this.Bb = [new C(this.l, p.Hc, k.OH), new C(this.l, p.Hc, k.PH)];
      this.Ko = null;
      ua.instance.config.kp && ((this.Ko = new tc()), this.Fa[1].lq(this.Ko));
      this.ff = new C(null, p.Hc, k.LH);
      this.node.R(this.ff.B);
      let a = ua.instance.zd ? (this.In ? 1 : 1.5) : 1;
      this.ff.gh(652 * a, 577 * a);
      this.Zl = new F(0, 0, 0, 1);
      this.ff.M(!1);
      this.ff.X(0);
      this.ff.I(a);
      this.kc = new C(null, p.Hc, k.NH);
      this.kc.M(!1);
      this.kc.X(0);
      this.node.R(this.kc.B);
      this.kc.wf(this.kc.Y.x / 2, 0);
      this.kc.gh(this.kc.Y.x / 2, 0);
      this.cl = new F(0, 0, 0, 1);
      this.ze[0].qa(0.001);
      this.ze[1].qa(0.001);
      this.Fa[0].m(-this.Fa[0].Y.x);
      this.Fa[1].qa(-1);
      this.Bb[0].gh(this.Bb[0].Y.x, 0);
      this.Bb[0].wf(this.Bb[0].Y.x, 0);
      this.node.Pd();
      this.zs = !1;
      this.layout();
    }
    Ky() {
      this.zs = !0;
      this.layout();
    }
    pa() {
      super.pa();
      this.node.G();
      this.Xs = null;
      Sa.instance = null;
    }
    UG(a) {
      this.Xs = a;
      this.time = 0;
      this.state = 5;
    }
    fw() {
      this.time = 0;
      this.ze[0].qa(1);
      this.ze[1].qa(1);
      this.Bb[0].M(!1);
      this.Bb[1].M(!1);
      this.layout();
      this.animate(1);
      this.state = 6;
      x.stop(x.Rj);
      x.stop(x.af);
    }
    sO() {
      this.ff.M(!0);
      this.state = 1;
      this.time = 0;
    }
    ko() {
      this.kc.M(!0);
      this.state = 3;
      this.time = 0;
    }
    update(a) {
      super.update(a);
      switch (this.state) {
        case 1:
          a = this.lb(1.5);
          this.ff.m(this.Zl.x);
          this.ff.o(this.Zl.y);
          this.ff.X(za.dg()(a));
          a == 1 && ((this.state = 2), (this.time = 0));
          break;
        case 2:
          a = this.lb(2);
          this.ff.m(this.Zl.x);
          this.ff.o(this.Zl.y * (1 - a));
          a == 1 && ((this.state = 0), this.ff.M(!1));
          break;
        case 3:
          a = this.lb(1);
          this.kc.X(za.dg()(a));
          this.kc.m(this.cl.x);
          this.kc.o(0 * this.cl.y);
          this.Bb[0].M(!0);
          this.Bb[1].M(!0);
          this.Bb[0].X(this.kc.bd);
          this.Bb[1].X(this.kc.bd);
          this.Bb[0].o(-this.Bb[0].la() * 0.9);
          this.Bb[1].o(-this.Bb[1].la() * 0.9);
          a == 1 && ((this.state = 4), (this.time = 0));
          break;
        case 4:
          a = this.lb(2);
          this.kc.m(this.cl.x);
          this.kc.o(this.cl.y * a);
          var b = this.kc.hz(new F(0, 0, 0, 1));
          b = this.l.gz(b);
          this.Bb[0].o(Math.min(0, b.y - this.Bb[0].la() * 0.9));
          this.Bb[1].o(Math.min(0, b.y - this.Bb[1].la() * 0.9));
          a == 1 && ((this.state = 0), this.kc.M(!1));
          break;
        case 5:
          a = this.lb(2);
          this.animate(a);
          a == 1 &&
            ((this.zs = !0),
            (this.state = 0),
            this.Xs != null && (this.Xs(), (this.Xs = null)));
          break;
        case 6:
          ((a = this.lb(2)),
            this.animate(1 - a),
            a == 1 && ((this.zs = !1), (this.state = 7)));
      }
    }
    layout() {
      var a = ua.instance.window.Xi();
      this.l.update(0.016666666666666666);
      var b = a.x,
        c = a.y,
        d = b,
        e = c;
      ua.instance.window.xk() > 2 &&
        ((d = b / 2),
        (e = c / 2),
        (b = this.node.Gb),
        (b.scale.x = b.scale.y = b.scale.z = 2),
        (b.L = (b.L & -2) | 244));
      d /= 2;
      this.l.m(d);
      b = this.Fa[0];
      b.qa(d / b.Y.x);
      b.m(-b.ha());
      this.Ct[0] = b.Wa;
      this.ft[0] = b.ya();
      c = this.Fa[1];
      c.qa(-d / c.Y.x);
      c.m(c.ha());
      this.Ct[1] = -c.Wa;
      this.ft[1] = c.ya();
      this.Zl.x = d;
      this.Zl.y = e;
      this.cl.x = d;
      this.cl.y = e;
      this.l.nb(e / b.Y.y);
      this.node.Pd();
      this.kc.m(this.cl.x);
      this.animate(this.zs ? 1 : 0);
      e = this.system.zd ? (this.In ? 1 : 1.75) : 1;
      this.Bb[0].qa(e);
      this.Bb[1].qa(e);
      this.kc.I(e);
      a.x / a.y > 3 &&
        ((a = this.kc),
        a.I(a.Wa * 0.75),
        (a = this.Bb[0]),
        a.qa(a.Wa * 0.75),
        (a = this.Bb[1]),
        a.qa(a.Wa * 0.75));
    }
    animate(a) {
      this.Fa[0].qa((1 - a) * this.Ct[0]);
      this.Fa[1].qa((-1 + a) * this.Ct[1]);
      this.Fa[0].m(this.ft[0] - a * this.ze[0].ha());
      this.Fa[1].m(this.ft[1] + a * this.ze[1].ha());
      this.Ko != null && (this.Ko.wy(-a), this.Fa[1].lq(this.Ko));
      let b = this.system.zd ? (this.In ? 1 : 1.75) : 1;
      this.ze[0].qa(a);
      this.ze[0].m(this.Fa[0].ya() + this.Fa[0].ha());
      this.ze[1].qa(a);
      this.ze[1].m(this.Fa[1].ya() - this.Fa[1].ha() - this.ze[1].ha());
      this.Bb[0].qa((1 - a) * b);
      this.Bb[0].m(this.ze[0].ya());
      this.Bb[0].X(1 - a);
      this.Bb[1].qa((1 - a) * b);
      this.Bb[1].m(this.ze[1].ya() + this.ze[1].ha());
      this.Bb[1].X(1 - a);
      this.rc.X((1 - a) * 0.5);
    }
  }
  Sa.i = !0;
  Sa.u = ma;
  Object.assign(Sa.prototype, { j: Sa });
  class of {
    constructor(a, b) {
      this.rect = new Vc(a);
      this.rect.Ob(b.C - b.A, b.H - b.F);
      a = this.rect.Gb;
      a.translate.x = b.A;
      a.translate.y = b.F;
      a.L = (a.L & -2) | 496;
    }
    Yb(a) {
      La.rg(this.rect);
      this.rect.De();
      return this.rect.Yb(a);
    }
  }
  of.i = !0;
  Object.assign(of.prototype, { j: of });
  class Ic extends ma {
    constructor() {
      super();
      this.Sa = new C(null, p.Za, k.Qu);
      this.label = new ta(null, p.oc);
    }
    Va(a) {
      this.label.Va(a);
      this.layout();
    }
    Ss() {
      let a = this.parent;
      a.node.R(this.Sa.B);
      a.node.R(this.label.B);
    }
    layout() {
      var a = this.parent,
        b = a.ca.ha();
      a = Math.min(a.ca.RC().x * 0.1, a.ca.RC().y * 0.1);
      this.Sa.I(a / this.Sa.Y.x);
      this.Sa.m(b - this.Sa.ha() - 20);
      this.Sa.o(20);
      b = this.Sa.la() * 0.1;
      this.label.tb(300, this.Sa.la() - 2 * b);
      this.label.Hb(1, 0);
      this.label.m(this.Sa.ya() - 300);
      this.label.o(this.Sa.Xa() + b);
      this.label.og();
    }
  }
  Ic.i = !0;
  Ic.u = ma;
  Object.assign(Ic.prototype, { j: Ic });
  class Zc extends Aa {
    constructor(a, b, c, d) {
      super(a, b, c);
      this.zN = d;
      this.cn = !1;
      this.time = Math.random();
      this.ba("ENoAd");
    }
    zF(a) {
      switch (this.state) {
        case "EAd":
          this.ba(a ? "EAd" : "ENoAd");
          break;
        case "ENoAd":
          this.ba(a ? "EAd" : "ENoAd");
      }
    }
    use() {
      this.count--;
      this.count == 0 && (this.badge.G(), (this.badge = null));
    }
    fill(a) {
      this.count = a;
      this.ba("EFilled");
    }
    reject() {
      this.ba("ENoAd");
    }
    ba(a) {
      if (this.state != a)
        switch (((this.state = a), this.state)) {
          case "EActive":
            a = new C(null, p.Za, this.zN);
            a.Qy("glow");
            let b = new va();
            b.Pa(0, 0);
            b.Pa(1, 0.5);
            b.Pa(0, 1);
            new Da(a).loop(b);
            this.l.appendChild(a);
            this.badge != null && this.l.xn(this.badge);
            break;
          case "EAd":
            this.Fe = new C(null, p.Za, "ads_icon");
            this.Fe.m(120);
            this.Fe.o(120);
            this.Fe.D();
            this.l.appendChild(this.Fe);
            this.l.X(1);
            this.Kd(!1);
            break;
          case "EFilled":
            this.Kd(!1);
            this.Fe != null && (this.Fe.G(), (this.Fe = null));
            this.badge = new ta(this.l, p.oc);
            this.badge.tb(60, 60);
            this.badge.m(105);
            this.badge.o(70);
            this.badge.iq();
            this.badge.Va(ra.Ec(this.count));
            this.badge.og(!1);
            break;
          case "ENoAd":
            (this.l.X(0.5),
              this.Kd(!0),
              this.Fe != null && (this.Fe.G(), (this.Fe = null)));
        }
    }
    update(a) {
      super.update(a);
      switch (this.state) {
        case "EAd":
          this.Fe != null &&
            this.time > 3 &&
            !this.cn &&
            (this.Fe.o(100), this.Fe.Vb().y(110, 1, za.Xv()), (this.time = 0));
          this.l.X(this.cn ? 0.5 : 1);
          break;
        case "EFilled":
          this.l.X(this.cn ? 0.5 : 1);
      }
    }
    reset() {
      super.reset();
      let a = this.l.ap("glow");
      a != null && a.G();
      this.cn = !1;
      switch (this.state) {
        case "EActive":
        case "EAd":
        case "ERequested":
          this.ba("ENoAd");
      }
    }
    select() {
      super.select();
      this.ye = 0;
      switch (this.state) {
        case "EActive":
        case "EAd":
          this.ba("ERequested");
          break;
        case "EFilled":
          this.ba("EActive");
      }
    }
    Kd(a) {
      switch (this.state) {
        case "EActive":
        case "ENoAd":
          a = !0;
      }
      super.Kd(a);
    }
    la() {
      return this.U.la();
    }
    Hw() {
      return this.l.ya() + this.U.ha() * this.l.Wa;
    }
    ha() {
      return this.U.ha() * this.l.Wa;
    }
  }
  Zc.i = !0;
  Zc.u = Aa;
  Object.assign(Zc.prototype, { j: Zc });
  class Ub extends Zc {
    constructor() {
      super(p.Za, k.DA, k.EA, k.kM);
      Ub.fg > 0 && this.fill(Ub.fg);
    }
    fill(a) {
      Ub.fg = a;
      super.fill(a);
    }
    use() {
      super.use();
      Ub.fg--;
    }
    ba(a) {
      super.ba(a);
      switch (this.state) {
        case "EActive":
          this.frame = k.DA;
          this.um = k.EA;
          this.U.Ib(this.frame);
          break;
        case "EFilled":
          ((this.frame = k.lM), (this.um = k.mM), this.U.Ib(this.frame));
      }
    }
  }
  Ub.i = !0;
  Ub.u = Zc;
  Object.assign(Ub.prototype, { j: Ub });
  class Vb extends Zc {
    constructor() {
      super(p.Za, k.AA, k.BA, k.fM);
      Vb.fg > 0 && this.fill(Vb.fg);
    }
    fill(a) {
      Vb.fg = a;
      super.fill(a);
    }
    use() {
      super.use();
      Vb.fg--;
    }
    ba(a) {
      super.ba(a);
      switch (this.state) {
        case "EActive":
          this.frame = k.AA;
          this.um = k.BA;
          break;
        case "EFilled":
          ((this.frame = k.gM), (this.um = k.hM), this.U.Ib(this.frame));
      }
    }
  }
  Vb.i = !0;
  Vb.u = Zc;
  Object.assign(Vb.prototype, { j: Vb });
  class Tb extends Aa {
    constructor(a, b, c) {
      super(null, a, b);
      this.Fc = new ta(null, p.oc);
      this.Fc.tb(this.U.Y.x - 80, this.U.Y.y - 50);
      this.Fc.m(40);
      this.Fc.o(25);
      this.Fc.Va(c);
      this.Fc.Hb(0, 0);
      this.Fc.og(!1);
      this.l.appendChild(this.Fc);
    }
    XG() {
      this.Fc.mg(p.oc);
      this.Fc.tb(this.U.Y.x - 80, this.U.Y.y - 50);
      this.Fc.Hb(0, 0);
    }
    JF(a) {
      this.Fc.iq();
      this.Fc.Va(a);
      this.Fc.og();
    }
    static Wl(a) {
      return new Tb(k.xM, k.yM, a);
    }
  }
  Tb.i = !0;
  Tb.u = Aa;
  Object.assign(Tb.prototype, { j: Tb });
  class Hi {}
  Hi.i = !0;
  class ri {
    constructor(a, b) {
      this.type = a;
      this.listener = b;
      this.flags = 1;
    }
  }
  ri.i = !0;
  Object.assign(ri.prototype, { j: ri });
  class wh {
    constructor() {
      this.Fj = new t(0, 0);
      this.g = new t(0, 0);
      this.dir = new t(0, 0);
      this.$t = this.it = 0;
      this.color = new eb(0, 0, 0, 0);
      this.Gi = new eb(0, 0, 0, 0);
      this.angle = this.vr = this.Cs = this.ed = this.size = 0;
      this.scale = this.alpha = 1;
      this.height = this.width = 0;
    }
  }
  wh.i = !0;
  Object.assign(wh.prototype, { j: wh });
  class xh {
    constructor(a, b, c) {
      this.x = a;
      this.y = b;
      this.size = c;
    }
  }
  xh.i = !0;
  Object.assign(xh.prototype, { j: xh });
  ab.wu |= 0;
  typeof performance != "undefined" &&
    typeof performance.now == "function" &&
    (qa.now = performance.now.bind(performance));
  String.fromCodePoint == null &&
    (String.fromCodePoint = function (a) {
      return a < 65536
        ? String.fromCharCode(a)
        : String.fromCharCode((a >> 10) + 55232) +
            String.fromCharCode((a & 1023) + 56320);
    });
  Object.defineProperty(String.prototype, "__class__", {
    value: String,
    enumerable: !1,
    writable: !0,
  });
  String.i = !0;
  Array.i = !0;
  Date.prototype.j = Date;
  Date.i = "0";
  var jk = {},
    hk = {},
    ik = Number,
    gk = Boolean,
    kk = {},
    lk = {};
  Ya.oN = {}.toString;
  var kf = "en de fr ru nl br it es ko ja".split(" "),
    Vi = [
      0, 30, 80, 170, 230, 0, 40, 90, 150, 200, 0, 40, 90, 150, 200, 270, 350,
    ],
    zj = [
      [1, 2, 5, 6, 8, 10, 12, 16, 20, 24],
      [1, 9, 17],
      [1, 14],
      [1],
      [1],
      [1],
      [1],
      [1],
      [1, 2],
      [1],
      [1, 6],
    ],
    Wi = [
      3, 31, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 19351, 64407, 123823,
      260791, 375463, 633511, 1117095,
    ];
  k.uH = "blink/0000";
  k.vH = "blink/";
  k.wH = "chew/";
  k.xH = "fail/";
  k.BH = "idle/";
  k.yH = "idle2/0000";
  k.zH = "idle2/";
  k.AH = "idle3/";
  k.CH = "excited/";
  k.DH = "greeting/";
  k.Kz = "mouth_close/";
  k.EH = "mouth_open/";
  k.FH = "puzzled/";
  k.GH = "sleeping/";
  k.HH = "super_in/";
  k.JH = "super_loop/";
  k.IH = "super_loop_active/";
  k.Lz = "zzz/";
  k.TI = "0000";
  k.UI = "0001";
  k.VI = "0002";
  k.WI = "0019";
  k.XI = "0020";
  k.YI = "0021";
  k.aK = "disappear/0000";
  k.bK = "disappear/";
  k.cK = "glow";
  k.dK = "glow_blue";
  k.hK = "idle/";
  k.eK = "idle/0001";
  k.gK = "idle_blue/";
  k.fK = "idle_blue/0001";
  k.jK = "idle_off/";
  k.iK = "idle_off/0001";
  k.kK = "light_down/0000";
  k.lK = "light_down/";
  k.mK = "light_up/0000";
  k.nK = "light_up/";
  k.oK = "shine_blue";
  k.pK = "spark_blue";
  k.qK = "timer/0000";
  k.rK = "timer/";
  k.kJ = "a_01";
  k.lJ = "a_02";
  k.iJ = "auto_01";
  k.jJ = "auto_02";
  k.pJ = "b_01";
  k.qJ = "b_02";
  k.mJ = "bar_0";
  k.nJ = "bar_1";
  k.oJ = "bar_2";
  k.hA = "drag_button";
  k.rJ = "drag_button_hot";
  k.sJ = "wheel_active";
  k.tJ = "wheel_bottom";
  k.uJ = "wheel_rope";
  k.vJ = "wheel_top";
  k.MI = "flight/0000";
  k.NI = "flight/";
  k.fA = "idle";
  k.OI = "pop/0000";
  k.QI = "pop/";
  k.RI = "stain_01";
  k.SI = "stain_03";
  k.OJ = "x1";
  k.PJ = "x2";
  k.QJ = "x3";
  k.RJ = "x4";
  k.IJ = "0000";
  k.LJ = "0000";
  k.MJ = "0011";
  k.NJ = "0012";
  k.ZI = "0000";
  k.iA = "0000";
  k.JJ = "0001";
  k.KJ = "0002";
  k.II = "x1/0000";
  k.JI = "x1/";
  k.KI = "x2/0000";
  k.LI = "x2/";
  k.gA = "button0";
  k.hJ = "button1";
  k.AI = "button0";
  k.BI = "button1";
  k.CI = "button2";
  k.DI = "button3";
  k.EI = "x1";
  k.FI = "x2";
  k.GI = "x3";
  k.HI = "x4";
  k.wI = "bee0000";
  k.yI = "bee";
  k.xI = "bee0001";
  k.zI = "pollen";
  k.FK = "center";
  k.lA = "handle";
  k.mA = "handle_hot";
  k.nA = "highlight";
  k.GK = "record";
  k.oA = "sticker";
  k.fJ = "body";
  k.Oq = "bubbles/";
  k.gJ = "face";
  k.sK = "particle_1/";
  k.tK = "particle_2/";
  k.uK = "particle_3/";
  k.vK = "pipe";
  k.wK = "valve";
  k.wJ = "fire";
  k.xJ = "lantern_end";
  k.yJ = "lantern_start";
  k.zJ = "particle_1";
  k.AJ = "particle_2";
  k.BJ = "particle_3";
  k.CJ = "particle_4";
  k.DJ = "particle_5";
  k.$I = "cheese_hole";
  k.aJ = "eyes/0000";
  k.bJ = "eyes/";
  k.cJ = "idle";
  k.dJ = "mouse/0000";
  k.Nq = "mouse/";
  k.eJ = "mouse/0008";
  k.EJ = "bottle";
  k.FJ = "firefly/";
  k.GJ = "light";
  k.HJ = "top";
  k.xK = "0000";
  k.yK = "0001";
  k.zK = "0002";
  k.AK = "0003";
  k.BK = "0004";
  k.CK = "0005";
  k.DK = "0006";
  k.EK = "0007";
  k.SJ = "flash";
  k.TJ = "frame_bl";
  k.UJ = "frame_br";
  k.jA = "frame_hor_tile";
  k.VJ = "frame_tl";
  k.WJ = "frame_tr";
  k.kA = "frame_ver_tile";
  k.XJ = "light_spot";
  k.YJ = "particle";
  k.ZJ = "tips_glow";
  k.$J = "wave";
  k.aM = "sign/";
  k.bM = "album/album";
  k.cM = "album/popup_frame";
  k.dM = "album/spot";
  k.eM = "blue_star";
  k.AA = "button_antimagnet";
  k.fM = "button_antimagnet_active";
  k.gM = "button_antimagnet_enabled";
  k.hM = "button_antimagnet_enabled_hot";
  k.BA = "button_antimagnet_hot";
  k.CA = "button_audio_x";
  k.iM = "button_back";
  k.jM = "button_back_hot";
  k.DA = "button_magnet";
  k.kM = "button_magnet_active";
  k.lM = "button_magnet_enabled";
  k.mM = "button_magnet_enabled_hot";
  k.EA = "button_magnet_hot";
  k.nM = "button_menu";
  k.oM = "button_menu_hot";
  k.pM = "button_music_hot";
  k.qM = "button_music_on";
  k.rM = "button_pause";
  k.sM = "button_pause_hot";
  k.tM = "button_restart";
  k.uM = "button_restart_hot";
  k.FA = "button_round";
  k.GA = "button_round_hot";
  k.Ou = "button_short";
  k.Pu = "button_short_hot";
  k.vM = "button_sound_hot";
  k.wM = "button_sound_on";
  k.Bl = "button_tiny";
  k.Cl = "button_tiny_hot";
  k.xM = "button_wide";
  k.yM = "button_wide_hot";
  k.HA = "candy/0000";
  k.zM = "candy/";
  k.IA = "candy/0002";
  k.AM = "famobi";
  k.BM = "gear_icon";
  k.CM = "hud_star/0000";
  k.DM = "hud_star/";
  k.EM = "level/blue_star";
  k.Qu = "level/blue_star_hud";
  k.FM = "level/locked";
  k.Sq = "level/playable";
  k.GM = "level/stars0";
  k.HM = "level/stars1";
  k.IM = "level/stars2";
  k.JM = "level/stars3";
  k.KM = "logo";
  k.LM = "logo_ru";
  k.MM = "menu_icon_round";
  k.JA = "menu_icon_tiny";
  k.NM = "monster_results";
  k.OM = "monster_sad1";
  k.PM = "monster_sad2";
  k.QM = "monster_sad3";
  k.RM = "music_icon";
  k.SM = "nav_next0";
  k.TM = "nav_next1";
  k.UM = "nav_prev0";
  k.KA = "nav_prev1";
  k.VM = "next_icon_tiny";
  k.WM = "play_icon_round";
  k.XM = "popup_bottom";
  k.YM = "popup_button";
  k.ZM = "popup_button_hot";
  k.$M = "popup_button_x";
  k.aN = "popup_middle";
  k.LA = "popup_top";
  k.MA = "restart_icon_tiny";
  k.bN = "skin_glow";
  k.cN = "skin_hand";
  k.dN = "sound_icon";
  k.eN = "star";
  k.fN = "star_empty";
  k.NA = "x_icon";
  k.gN = "xmas_hat_back";
  k.hN = "xmas_hat_front";
  k.iN = "zeptolab";
  k.OH = "tape0";
  k.PH = "tape1";
  k.NH = "roll";
  k.LH = "cutter";
  k.gL = "season1";
  k.hL = "season2";
  k.iL = "season3";
  k.Mu = "shelf";
  k.jL = "shelf_button";
  k.kL = "shelf_button_hot";
  k.KK = "cover1";
  k.LK = "cover2";
  k.MK = "cover3";
  k.NK = "cover4";
  k.OK = "cover5";
  k.Lu = "lock";
  k.PK = "monster";
  k.uA = "next";
  k.QK = "particle0";
  k.RK = "particle1";
  k.SK = "particle2";
  k.TK = "perfect";
  k.VK = "cover6";
  k.WK = "cover7";
  k.XK = "cover8";
  k.YK = "cover9";
  k.UK = "cover10";
  k.ZK = "cover11";
  k.$K = "cover12";
  k.aL = "cover13";
  k.bL = "cover14";
  k.cL = "cover15";
  k.dL = "cover16";
  k.eL = "cover17";
  k.fL = "label";
  k.Rz = "front";
  k.Sz = "side";
  H.gt = !1;
  H.td = !1;
  H.qf = !0;
  H.cS = 1;
  H.Ye = !0;
  H.wV = 1;
  H.Dj = !0;
  H.Bn = !0;
  H.Cj = !0;
  H.bG = !0;
  H.Zf = 0;
  H.km = 0;
  ma.Kx = new xb(4096, null, !0);
  ea.wF = !1;
  db.pk = !0;
  ja.gs = -1;
  ja.fs = !1;
  ja.lw = !1;
  ja.Mc = !1;
  ja.Km = -1;
  ja.pk = !0;
  var Ui = !1;
  N.cH = !1;
  N.Yw = !1;
  N.ly = !1;
  new ph();
  w.Oa = 1;
  w.box = 1;
  w.level = 1;
  Zd.Pq = 1.2;
  z.py = !0;
  x.XL = 1001;
  x.WL = 1002;
  x.VL = 1003;
  x.UL = 1004;
  x.zA = 1005;
  x.TL = 1006;
  x.SL = 1007;
  x.RL = 1008;
  x.QL = 1009;
  x.PL = 1010;
  x.OL = 1013;
  x.Rq = 1014;
  x.yA = 1015;
  x.NL = 1016;
  x.ML = 1017;
  x.LL = 1018;
  x.KL = 1019;
  x.JL = 1020;
  x.IL = 1021;
  x.HL = 1022;
  x.GL = 1023;
  x.FL = 1024;
  x.EL = 1025;
  x.DL = 1026;
  x.xA = 1031;
  x.CL = 1036;
  x.BL = 1037;
  x.AL = 1042;
  x.zL = 1043;
  x.yL = 1044;
  x.af = 1045;
  x.Nu = 1046;
  x.xL = 1047;
  x.wL = 1048;
  x.vL = 1049;
  x.uL = 1050;
  x.tL = 1051;
  x.sL = 1052;
  x.Rj = 1053;
  x.rL = 1058;
  x.qL = 1059;
  x.pL = 1060;
  x.ri = 1061;
  x.oL = 1062;
  x.wA = 1063;
  x.nL = 1064;
  p.Lm = [];
  Kd.VERSION = new rh("1.7.5");
  Kd.vI = "v1.7.5 2026-05-07 20:20:00 Generated by Haxe 4.3.4 polygonal";
  eb.jV = new eb(1, 1, 1, 1);
  eb.kW = eb.jV;
  Y.Nz = 1;
  Y.Oz = 2;
  Y.Mz = 4;
  Y.Pz = 8;
  Qb.zl = 0.016666666666666666;
  t.sN = [];
  t.tN = [];
  var Zi = 0.1,
    Bj = k.Ta(k.gK, 0, 17, 20),
    aj = 10,
    Cj = k.Ta(k.JI, 0, 4, 25),
    Dj = k.Ta(k.LI, 0, 4, 25),
    cj = ib.create("" + k.Nq + "@20,0-2"),
    bj = ib.create("" + k.Nq + "@20,3,4,8"),
    ej = ib.create("" + k.Nq + "@20,2,6,7,11"),
    dj = ib.create("" + k.Nq + "@20,8,9,10,11"),
    zi = null,
    Ej = ib.create("" + k.bJ + "@20,0-8");
  lb.JK = k.Ta(k.QI, 0, 11, 20);
  lb.Gz = Y.un(new Y(48, 48, 152, 152));
  lb.rH = -17;
  lb.qH = 20;
  Ab.Ez = new Y(142, 157, 112, 104);
  Ab.Kq = Y.un(Ab.Ez);
  var fj = k.Ta(null, 8, 17, 15),
    Fj = ib.create("18@3,18"),
    ak = k.Ta(null, 21, 25, 20);
  xc.jH = k.Ta(k.NI, 0, 13, 20);
  yc.Jz = Y.un(new Y(155, 176, 88, 76));
  Ka.aA = 100;
  var Gj = k.Ta(k.yI, 1, 3, 33),
    Ai = null,
    Bi = null,
    gj = null,
    hj = null,
    Hj = k.Ta(k.FJ, 0, 39, 20);
  me.tx = [];
  fc.ZL = Y.un(new Y(264, 350, 108, 2));
  fc.eA = 80;
  var kj = [
      k.Ta(k.BH, 0, 18, 20),
      k.Ta(k.zH, 0, 24, 20),
      k.Ta(k.AH, 0, 15, 20),
      k.Ta(k.CH, 0, 19, 20),
      k.Ta(k.FH, 0, 26, 20),
      k.Ta(k.xH, 0, 12, 20),
      k.Ta(k.Kz, 0, 3, 20),
      k.Ta(k.EH, 0, 8, 20),
      k.Ta(k.Kz, 0, 3, 20),
      k.Ta(k.wH, 0, 8, 20),
      k.Ta(k.DH, 0, 29, 20),
      k.Ta(k.GH, 0, 6, 20),
      k.Ta(k.HH, 0, 15, 20),
      k.Ta(k.JH, 0, 8, 10),
      k.Ta(k.IH, 0, 8, 20),
    ],
    Kj = ib.create("" + k.vH + "@20,0,1,0,1"),
    ij = ib.create("" + k.Lz + "@30,0-36,0x15"),
    jj = ib.create("" + k.Lz + "@30,0x15,0-36");
  hc.pH = k.Ta(null, 1, 5, 20);
  hc.rA = Y.un(new Y(300, 300, 175, 175));
  Za.vA = 56;
  Za.lL = 6;
  Za.Al = 16;
  Za.mL = -6.4;
  var Eh = ib.create("@20,2,3,3,4"),
    Mj = ib.create("0-4@20,5@0.4,6@20"),
    Nj = k.Ta(null, 7, 10, 10),
    Oj = k.Ta(null, 1, 4, 20);
  bb.ug = 16.8;
  bb.YL = Y.un(new Y(70, 64, 82, 82));
  var Pj = k.Ta(k.hK, 0, 17, 20),
    Qj = k.Ta(k.jK, 0, 17, 20),
    Rj = k.Ta(k.nK, 0, 5, 20),
    Sj = k.Ta(k.lK, 0, 5, 20),
    bk = k.Ta(k.bK, 0, 12, 20),
    Tj = k.Ta(k.sK, 0, 10, 20),
    Uj = k.Ta(k.tK, 0, 10, 20),
    Vj = k.Ta(k.uK, 0, 10, 20);
  ne.qN = 0;
  var lj = k.xK,
    Hh = k.yK,
    Wj = k.zK,
    mj = k.AK,
    oj = k.BK,
    Yj = k.CK,
    Xj = k.DK,
    nj = k.EK;
  xa.Qq = 36;
  xa.tH = 120;
  xa.sH = 240;
  xa.$L = 110;
  xa.bo = 1.2000000000000002;
  xa.pA = 0.9;
  xa.pk = !0;
  var Ij = 0,
    Jj = 0;
  zd.zS = 1;
  mb.Qz = 0;
  mb.QH = 3;
  mb.TYPE = 103;
  he.TYPE = 303;
  ud.TYPE = 403;
  te.TYPE = 203;
  na.TYPE = 105;
  Bd.TYPE = 505;
  ke.TYPE = 705;
  mg.TYPE = 1805;
  ue.TYPE = 1205;
  ve.TYPE = 305;
  Qc.MH = 4.800000000000001;
  Qc.TYPE = 1105;
  le.TYPE = 605;
  ng.TYPE = 1705;
  Ac.TYPE = 1005;
  wd.TYPE = 905;
  we.TYPE = 205;
  xe.TYPE = 405;
  og.TYPE = 1605;
  pg.TYPE = 1405;
  qg.TYPE = 1505;
  vb.Pr = [1, 2, 2, 3, 3, 3, 3, 4];
  vb.Qr = [
    [0, 0, 0, 0],
    [0, 0, 1, 1],
    [0, 1, 0, 1],
    [0, 0, 1, 2],
    [1, 2, 0, 0],
    [0, 1, 0, 2],
    [1, 0, 2, 0],
    [0, 1, 2, 3],
  ];
  var dk = [0, 2, 3, 1],
    ek = [0, 2, 3, 4, 5, 6, 7, 1],
    fk = [
      17, 18, 19, 20, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15, 16,
    ];
  (function () {
    Ji.$z = Array(256);
    let a = 0;
    for (; a < 256; ) {
      let b = a++;
      Ji.$z[b] = bd.BQ(b);
    }
    return null;
  })(this);
  var Ki = "#000000";
  vg.TYPE = 1305;
  vj.HK = -1;
  wg.BB = [1, 1, 2, 2, 4];
  jc.HG = new Float32Array(16);
  Ed.uQ = [5120, 5121, 5122, 5123, 5126];
  Db.cr = [0, 1, 774, 775, 770, 771, 772, 773];
  Db.DO = [512, 513, 514, 515, 516, 517, 518, 519];
  Ag.TYPE = 2005;
  Bg.TYPE = 1905;
  Cg.TYPE = 805;
  ed.jN = [
    [0, 1, 1, 1, 0, 0, 1, 0],
    [1, 1, 0, 1, 1, 0, 0, 0],
  ];
  Cb.TYPE = 102;
  Uc.Od = new F(0, 0, 0, 1);
  Uc.TYPE = 302;
  Dg.TYPE = 402;
  Be.TYPE = 202;
  Ce.TYPE = 502;
  zc.next = 0;
  Qa.count = 0;
  Qa.BO = 202;
  Qa.CO = 0;
  Qa.TYPE = 101;
  Xa.count = 0;
  Xa.TYPE = 201;
  Hg.TYPE = 601;
  Sc.next = 0;
  Ig.TYPE = 501;
  rb.count = 0;
  rb.TYPE = 301;
  Vc.TYPE = 401;
  La.Yy = new vc();
  La.kV = new vc();
  pb.count = 0;
  pb.TYPE = 104;
  C.TYPE = 304;
  V.TYPE = 204;
  ta.TYPE = 404;
  Tc.KH = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  Tc.Iz = Ha.qE(Tc.KH);
  Gd.Mw = new DataView(new ArrayBuffer(8));
  var bh = null,
    Lj = 1e-6,
    wc = 57.29577951308232,
    Oa = 0.0174532925199432,
    Fb = 3.141592653589793,
    fe = 1.5707963267948966,
    yi = 6.283185307179586,
    Ba = Infinity,
    Ca = -Infinity,
    xj = -32768,
    Hd = 2147483647,
    De = 3.4e38,
    Ee = -3.4e38;
  kc.Tq = xj;
  var fa = new Sg(),
    Xi = k.Ta(k.DM, 0, 10, 25),
    ui = k.CM,
    Aj = [0, 5, 6, 7, 8];
  Jc.oG = [k.GM, k.HM, k.IM, k.JM, k.EM];
  $a.Bu = 784;
  $a.Tz = $a.Bu;
  $a.current = new t(0, $a.Bu);
  cd.AB = 0;
  Id.oI = "0123456789abcdef".split("");
  m.yP = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "avif|avif",
    null,
    "avif",
    null,
    "avif",
    null,
    "avif",
    null,
    "avif",
    null,
    "avif",
    null,
    "avif",
    null,
    "avif",
    null,
    "avif",
    null,
    "avif",
    null,
    "avif",
    null,
    "avif",
    null,
    "avif",
    null,
    "avif",
    null,
    "avif",
    null,
    "avif",
    null,
    "avif",
    null,
    "avif",
    null,
    "avif",
    null,
    "avif",
    null,
    "avif",
    null,
    "avif",
    null,
    "avif",
    null,
    "avif",
    null,
    "dds|avif|ktx",
    null,
    null,
    "dds|ktx|avif",
    null,
    "ktx|avif|dds",
    null,
    null,
    "avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx",
    null,
    null,
    "avif|ktx|dds",
    null,
    null,
    "avif|dds|ktx|dds|avif|ktx",
    null,
    null,
    "avif|ktx|dds|avif|ktx|dds",
    null,
    null,
    "avif|ktx|dds",
    null,
    "avif|dds|ktx",
    null,
    "avif|dds|ktx",
    null,
    "ktx|dds|avif",
    "jpg",
    "avif|png",
    null,
    "png|avif|avif|avif|avif|avif|png|avif|png|avif|png|avif|png|png|png|png|png|avif|png|avif",
    null,
    null,
    "avif|dds|ktx",
    null,
    null,
    "dds|ktx|avif|avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx|avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx|avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx|avif|dds|ktx",
    null,
    null,
    "dds|ktx|avif|avif|dds|ktx",
    null,
    null,
    "dds|ktx|avif|avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx|avif|dds|ktx",
    null,
    null,
    "dds|ktx|avif|avif|dds|ktx",
    null,
    null,
    "dds|avif|ktx|avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx|avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx|avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx|avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx|avif|dds|ktx",
    null,
    null,
    "dds|ktx|avif|avif|dds|ktx",
    null,
    null,
    "dds|ktx|avif|avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx|avif|dds|ktx",
    null,
    null,
    "dds|ktx|avif|avif|dds|ktx",
    null,
    null,
    "dds|avif|ktx|avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx|avif|dds|ktx",
    null,
    null,
    "ktx|avif|dds|ktx|avif|dds",
    null,
    null,
    "avif|dds|ktx|avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx|avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx|avif|dds|ktx",
    null,
    null,
    "dds|avif|ktx|avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx|avif|dds|ktx",
    null,
    null,
    "dds|avif|ktx|avif|dds|ktx",
    null,
    null,
    "dds|avif|ktx|avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx",
    null,
    "avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx",
    null,
    "avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx",
    null,
    "avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx",
    null,
    "avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx",
    null,
    "avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx",
    null,
    "avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx",
    null,
    "avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx",
    null,
    "avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx",
    null,
    "avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx",
    null,
    "avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx",
    null,
    "avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx",
    null,
    "avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx",
    null,
    "avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx",
    null,
    "avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx",
    null,
    "avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx",
    null,
    "avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx",
    null,
    "avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx",
    null,
    null,
    "avif|dds|ktx",
  ];
  m.init();
  m.bytes =
    "video/outro_portrait.mp4:606240 video/outro_landscape.mp4:707037 video/intro_portrait.mp4:254354 video/intro_landscape.mp4:364300 strings.json:47035 pics/thumbs-2x.webp:94658 pics/thumbs-2x.json:4129 pics/thumbs-2x.avif:95438 pics/thumbs-1x.webp:35340 pics/thumbs-1x.json:4083 pics/thumbs-1x.avif:40586 pics/pic_20.webp:25574 pics/pic_20.avif:21735 pics/pic_19.webp:20474 pics/pic_19.avif:16005 pics/pic_18.webp:22246 pics/pic_18.avif:17964 pics/pic_17.webp:23282 pics/pic_17.avif:19980 pics/pic_16.webp:20084 pics/pic_16.avif:15902 pics/pic_15.webp:16182 pics/pic_15.avif:11611 pics/pic_14.webp:19044 pics/pic_14.avif:13874 pics/pic_13.webp:24182 pics/pic_13.avif:18609 pics/pic_12.webp:19570 pics/pic_12.avif:13948 pics/pic_11.webp:14430 pics/pic_11.avif:10310 pics/pic_10.webp:14000 pics/pic_10.avif:10690 pics/pic_09.webp:23206 pics/pic_09.avif:17990 pics/pic_08.webp:21856 pics/pic_08.avif:17218 pics/pic_07.webp:19144 pics/pic_07.avif:14590 pics/pic_06.webp:24096 pics/pic_06.avif:17725 pics/pic_05.webp:25006 pics/pic_05.avif:20503 pics/pic_04.webp:22478 pics/pic_04.avif:16503 pics/pic_03.webp:20590 pics/pic_03.avif:16294 pics/pic_02.webp:30224 pics/pic_02.avif:27441 pics/pic_01.webp:30014 pics/pic_01.avif:27539 pics/missing.webp:20182 pics/missing.avif:7676 pics/bg_xmas.webp:32484 pics/bg_xmas.avif:40507 pics/bg.webp:31196 pics/bg.avif:29200 menu/ui.webp:404064 menu/ui.ktx:716784 menu/ui.json:21407 menu/ui.dds:418023 menu/ui.avif:158811 menu/shadow.webp:3532 menu/shadow.ktx:350304 menu/shadow.dds:24603 menu/shadow.avif:2550 menu/seasons.webp:65262 menu/seasons.ktx:354400 menu/seasons.json:1131 menu/seasons.dds:161706 menu/seasons.avif:39007 menu/season3.webp:93170 menu/season3.ktx:343536 menu/season3.json:2541 menu/season3.dds:199483 menu/season3.avif:45245 menu/season2.webp:80640 menu/season2.ktx:270592 menu/season2.json:2184 menu/season2.dds:181520 menu/season2.avif:40620 menu/season1.webp:80050 menu/season1.ktx:270592 menu/season1.json:2183 menu/season1.dds:183701 menu/season1.avif:41025 menu/salute-2x.webp:140028 menu/salute-2x.ktx:350304 menu/salute-2x.json:9794 menu/salute-2x.dds:171593 menu/salute-2x.avif:104560 menu/salute-1x.webp:62982 menu/salute-1x.ktx:90720 menu/salute-1x.json:9462 menu/salute-1x.dds:66842 menu/salute-1x.avif:53618 menu/cut-2x.webp:64888 menu/cut-2x.ktx:344832 menu/cut-2x.json:748 menu/cut-2x.dds:131635 menu/cut-2x.avif:17389 menu/cut-1x.webp:23106 menu/cut-1x.ktx:86784 menu/cut-1x.json:741 menu/cut-1x.dds:44552 menu/cut-1x.avif:7299 menu/bg_xmas.webp:83602 menu/bg_xmas.ktx:156960 menu/bg_xmas.dds:237535 menu/bg_xmas.avif:160600 menu/bg2_xmas.webp:34082 menu/bg2_xmas.ktx:99168 menu/bg2_xmas.dds:135190 menu/bg2_xmas.avif:49999 menu/bg2.webp:21280 menu/bg2.ktx:282720 menu/bg2.dds:156684 menu/bg2.avif:17835 menu/bg.webp:21198 menu/bg.ktx:156960 menu/bg.dds:230428 menu/bg.avif:40241 loader_bg.jpg:22263 loader.png:16984 loader.dat:440 loader.avif:13186 lang/font-ru.png:68946 lang/font-ru.dat:6169 lang/font-ru.avif:52817 lang/font-nl.png:48288 lang/font-nl.dat:5609 lang/font-nl.avif:36366 lang/font-ko.png:163320 lang/font-ko.dat:14969 lang/font-ko.avif:121158 lang/font-ja.png:211458 lang/font-ja.dat:21469 lang/font-ja.avif:168476 lang/font-it.png:48936 lang/font-it.dat:5549 lang/font-it.avif:36585 lang/font-fr.png:50257 lang/font-fr.dat:5729 lang/font-fr.avif:37979 lang/font-es.png:50586 lang/font-es.dat:5709 lang/font-es.avif:38190 lang/font-en.png:48296 lang/font-en.dat:5589 lang/font-en.avif:36148 lang/font-de.png:51771 lang/font-de.dat:5729 lang/font-de.avif:38951 lang/font-br.png:53145 lang/font-br.dat:5849 lang/font-br.avif:40468 game/tut.webp:27870 game/tut.ktx:93936 game/tut.json:1815 game/tut.dds:26654 game/tut.avif:8244 game/obj_vinyl-2x.webp:61662 game/obj_vinyl-2x.ktx:561824 game/obj_vinyl-2x.json:1124 game/obj_vinyl-2x.dds:148846 game/obj_vinyl-2x.avif:20160 game/obj_vinyl-1x.webp:24056 game/obj_vinyl-1x.ktx:141600 game/obj_vinyl-1x.json:1101 game/obj_vinyl-1x.dds:51395 game/obj_vinyl-1x.avif:9491 game/obj_transporter.webp:2046 game/obj_transporter.ktx:28800 game/obj_transporter.json:1405 game/obj_transporter.dds:5459 game/obj_transporter.avif:1254 game/obj_steam-2x.webp:31942 game/obj_steam-2x.ktx:43104 game/obj_steam-2x.json:6401 game/obj_steam-2x.dds:31563 game/obj_steam-2x.avif:16592 game/obj_steam-1x.webp:14444 game/obj_steam-1x.ktx:12896 game/obj_steam-1x.json:6358 game/obj_steam-1x.dds:12974 game/obj_steam-1x.avif:10139 game/obj_star-2x.webp:556544 game/obj_star-2x.ktx:1118304 game/obj_star-2x.json:22010 game/obj_star-2x.dds:627278 game/obj_star-2x.avif:203480 game/obj_star-1x.webp:226734 game/obj_star-1x.ktx:293184 game/obj_star-1x.json:21617 game/obj_star-1x.dds:236724 game/obj_star-1x.avif:117161 game/obj_spikes-2x.webp:27616 game/obj_spikes-2x.ktx:50784 game/obj_spikes-2x.json:724 game/obj_spikes-2x.dds:38387 game/obj_spikes-2x.avif:13277 game/obj_spikes-1x.webp:11124 game/obj_spikes-1x.ktx:12768 game/obj_spikes-1x.json:725 game/obj_spikes-1x.dds:13557 game/obj_spikes-1x.avif:7811 game/obj_spider-2x.webp:28986 game/obj_spider-2x.ktx:75872 game/obj_spider-2x.json:2329 game/obj_spider-2x.dds:26700 game/obj_spider-2x.avif:14999 game/obj_spider-1x.webp:11760 game/obj_spider-1x.ktx:19552 game/obj_spider-1x.json:2277 game/obj_spider-1x.dds:10620 game/obj_spider-1x.avif:8413 game/obj_sp-2x.webp:93498 game/obj_sp-2x.ktx:218784 game/obj_sp-2x.json:2142 game/obj_sp-2x.dds:165186 game/obj_sp-2x.avif:10410 game/obj_sp-1x.webp:29068 game/obj_sp-1x.ktx:54768 game/obj_sp-1x.json:2121 game/obj_sp-1x.dds:49369 game/obj_sp-1x.avif:5341 game/obj_sock-2x.webp:37966 game/obj_sock-2x.ktx:76256 game/obj_sock-2x.json:920 game/obj_sock-2x.dds:64813 game/obj_sock-2x.avif:9985 game/obj_sock-1x.webp:13278 game/obj_sock-1x.ktx:18240 game/obj_sock-1x.json:911 game/obj_sock-1x.dds:18893 game/obj_sock-1x.avif:5345 game/obj_pump-2x.webp:40688 game/obj_pump-2x.ktx:118880 game/obj_pump-2x.json:1626 game/obj_pump-2x.dds:66855 game/obj_pump-2x.avif:12213 game/obj_pump-1x.webp:15344 game/obj_pump-1x.ktx:29680 game/obj_pump-1x.json:1625 game/obj_pump-1x.dds:21094 game/obj_pump-1x.avif:7134 game/obj_lighter-2x.webp:66668 game/obj_lighter-2x.ktx:212000 game/obj_lighter-2x.json:7728 game/obj_lighter-2x.dds:104134 game/obj_lighter-2x.avif:21476 game/obj_lighter-1x.webp:25484 game/obj_lighter-1x.ktx:33216 game/obj_lighter-1x.json:7640 game/obj_lighter-1x.dds:30006 game/obj_lighter-1x.avif:11583 game/obj_lantern-2x.webp:32176 game/obj_lantern-2x.ktx:78816 game/obj_lantern-2x.json:1504 game/obj_lantern-2x.dds:54541 game/obj_lantern-2x.avif:16770 game/obj_lantern-1x.webp:14242 game/obj_lantern-1x.ktx:20256 game/obj_lantern-1x.json:1476 game/obj_lantern-1x.dds:18658 game/obj_lantern-1x.avif:10197 game/obj_hook-2x.webp:41230 game/obj_hook-2x.ktx:113760 game/obj_hook-2x.json:2874 game/obj_hook-2x.dds:63318 game/obj_hook-2x.avif:19998 game/obj_hook-1x.webp:17380 game/obj_hook-1x.ktx:28512 game/obj_hook-1x.json:2809 game/obj_hook-1x.dds:22799 game/obj_hook-1x.avif:9745 game/obj_gravity-2x.webp:9830 game/obj_gravity-2x.ktx:36288 game/obj_gravity-2x.json:412 game/obj_gravity-2x.dds:23341 game/obj_gravity-2x.avif:5875 game/obj_gravity-1x.webp:4346 game/obj_gravity-1x.ktx:9376 game/obj_gravity-1x.json:410 game/obj_gravity-1x.dds:7557 game/obj_gravity-1x.avif:3551 game/obj_ghost-2x.webp:18024 game/obj_ghost-2x.ktx:28768 game/obj_ghost-2x.json:1292 game/obj_ghost-2x.dds:21218 game/obj_ghost-2x.avif:6861 game/obj_ghost-1x.webp:7790 game/obj_ghost-1x.ktx:8288 game/obj_ghost-1x.json:1281 game/obj_ghost-1x.dds:8167 game/obj_ghost-1x.avif:4816 game/obj_gap-2x.webp:24728 game/obj_gap-2x.ktx:53888 game/obj_gap-2x.json:4159 game/obj_gap-2x.dds:38053 game/obj_gap-2x.avif:15637 game/obj_gap-1x.webp:12046 game/obj_gap-1x.ktx:16224 game/obj_gap-1x.json:4103 game/obj_gap-1x.dds:14748 game/obj_gap-1x.avif:8389 game/obj_electro-2x.webp:58136 game/obj_electro-2x.ktx:84064 game/obj_electro-2x.json:920 game/obj_electro-2x.dds:72881 game/obj_electro-2x.avif:26638 game/obj_electro-1x.webp:20558 game/obj_electro-1x.ktx:21088 game/obj_electro-1x.json:912 game/obj_electro-1x.dds:21344 game/obj_electro-1x.avif:13579 game/obj_candy4-2x.webp:223146 game/obj_candy4-2x.ktx:414256 game/obj_candy4-2x.json:4606 game/obj_candy4-2x.dds:286299 game/obj_candy4-2x.avif:46945 game/obj_candy4-1x.webp:86572 game/obj_candy4-1x.ktx:104928 game/obj_candy4-1x.json:4504 game/obj_candy4-1x.dds:100673 game/obj_candy4-1x.avif:25031 game/obj_candy3-2x.webp:223864 game/obj_candy3-2x.ktx:401568 game/obj_candy3-2x.json:4606 game/obj_candy3-2x.dds:285431 game/obj_candy3-2x.avif:49144 game/obj_candy3-1x.webp:86560 game/obj_candy3-1x.ktx:101120 game/obj_candy3-1x.json:4502 game/obj_candy3-1x.dds:105606 game/obj_candy3-1x.avif:25922 game/obj_candy2-2x.webp:234686 game/obj_candy2-2x.ktx:426912 game/obj_candy2-2x.json:4618 game/obj_candy2-2x.dds:296578 game/obj_candy2-2x.avif:50254 game/obj_candy2-1x.webp:90568 game/obj_candy2-1x.ktx:107424 game/obj_candy2-1x.json:4512 game/obj_candy2-1x.dds:109771 game/obj_candy2-1x.avif:26873 game/obj_candy1-2x.webp:259158 game/obj_candy1-2x.ktx:478288 game/obj_candy1-2x.json:4632 game/obj_candy1-2x.dds:324500 game/obj_candy1-2x.avif:56326 game/obj_candy1-1x.webp:100350 game/obj_candy1-1x.ktx:121120 game/obj_candy1-1x.json:4513 game/obj_candy1-1x.dds:120370 game/obj_candy1-1x.avif:31247 game/obj_candy0-2x.webp:235088 game/obj_candy0-2x.ktx:419984 game/obj_candy0-2x.json:4617 game/obj_candy0-2x.dds:294972 game/obj_candy0-2x.avif:51880 game/obj_candy0-1x.webp:91162 game/obj_candy0-1x.ktx:106368 game/obj_candy0-1x.json:4512 game/obj_candy0-1x.dds:108301 game/obj_candy0-1x.avif:27523 game/obj_bubble-2x.webp:191878 game/obj_bubble-2x.ktx:506256 game/obj_bubble-2x.json:5465 game/obj_bubble-2x.dds:207367 game/obj_bubble-2x.avif:51909 game/obj_bubble-1x.webp:74136 game/obj_bubble-1x.ktx:131168 game/obj_bubble-1x.json:5378 game/obj_bubble-1x.dds:77505 game/obj_bubble-1x.avif:24749 game/obj_bouncer-2x.webp:32460 game/obj_bouncer-2x.ktx:106816 game/obj_bouncer-2x.json:1832 game/obj_bouncer-2x.dds:51766 game/obj_bouncer-2x.avif:14563 game/obj_bouncer-1x.webp:14092 game/obj_bouncer-1x.ktx:27936 game/obj_bouncer-1x.json:1809 game/obj_bouncer-1x.dds:18638 game/obj_bouncer-1x.avif:8270 game/obj_blades-2x.webp:31702 game/obj_blades-2x.ktx:62560 game/obj_blades-2x.json:1435 game/obj_blades-2x.dds:41585 game/obj_blades-2x.avif:18507 game/obj_blades-1x.webp:13770 game/obj_blades-1x.ktx:15968 game/obj_blades-1x.json:1413 game/obj_blades-1x.dds:16045 game/obj_blades-1x.avif:10342 game/obj_bee-2x.webp:11700 game/obj_bee-2x.ktx:14816 game/obj_bee-2x.json:918 game/obj_bee-2x.dds:13599 game/obj_bee-2x.avif:5288 game/obj_bee-1x.webp:4732 game/obj_bee-1x.ktx:4320 game/obj_bee-1x.json:913 game/obj_bee-1x.dds:4718 game/obj_bee-1x.avif:3151 game/char3-2x.webp:493186 game/char3-2x.ktx:1078096 game/char3-2x.json:14353 game/char3-2x.dds:475368 game/char3-2x.avif:278935 game/char3-1x.webp:199560 game/char3-1x.ktx:266432 game/char3-1x.json:14267 game/char3-1x.dds:192745 game/char3-1x.avif:155746 game/char2-2x.webp:395392 game/char2-2x.ktx:1373568 game/char2-2x.json:16826 game/char2-2x.dds:426844 game/char2-2x.avif:315754 game/char2-1x.webp:192494 game/char2-1x.ktx:342768 game/char2-1x.json:16661 game/char2-1x.dds:197689 game/char2-1x.avif:175217 game/char1-2x.webp:369602 game/char1-2x.ktx:1327200 game/char1-2x.json:15422 game/char1-2x.dds:405222 game/char1-2x.avif:295286 game/char1-1x.webp:180124 game/char1-1x.ktx:341824 game/char1-1x.json:15333 game/char1-1x.dds:187980 game/char1-1x.avif:163679 box17/support.webp:17832 box17/support.ktx:88160 box17/support.dds:53759 box17/support.avif:4261 box17/maps.json:32447 box17/cover.webp:6002 box17/cover.ktx:175200 box17/cover.json:405 box17/cover.dds:88296 box17/cover.avif:5296 box17/bg.webp:67860 box17/bg.ktx:350304 box17/bg.dds:445176 box17/bg.avif:85204 box16/support.webp:13078 box16/support.ktx:88160 box16/support.dds:37936 box16/support.avif:5878 box16/maps.json:34665 box16/cover.webp:5432 box16/cover.ktx:175200 box16/cover.json:405 box16/cover.dds:92510 box16/cover.avif:4495 box16/bg.webp:41372 box16/bg.ktx:350304 box16/bg.dds:439503 box16/bg.avif:52979 box15/support.webp:4750 box15/support.ktx:88160 box15/support.dds:24958 box15/support.avif:3286 box15/maps.json:27278 box15/cover.webp:2950 box15/cover.ktx:175200 box15/cover.json:405 box15/cover.dds:89993 box15/cover.avif:2007 box15/bg.webp:17310 box15/bg.ktx:350304 box15/bg.dds:431987 box15/bg.avif:17786 box14/support.webp:16158 box14/support.ktx:88160 box14/support.dds:42247 box14/support.avif:5651 box14/maps.json:22757 box14/cover.webp:9410 box14/cover.ktx:175200 box14/cover.json:405 box14/cover.dds:99285 box14/cover.avif:7027 box14/bg.webp:55054 box14/bg.ktx:350304 box14/bg.dds:442333 box14/bg.avif:63959 box13/support.webp:10682 box13/support.ktx:88160 box13/support.dds:32458 box13/support.avif:4364 box13/maps.json:22768 box13/cover.webp:5604 box13/cover.ktx:175200 box13/cover.json:405 box13/cover.dds:95577 box13/cover.avif:4557 box13/bg.webp:31218 box13/bg.ktx:350304 box13/bg.dds:431905 box13/bg.avif:40283 box12/support.webp:10262 box12/support.ktx:88160 box12/support.dds:38829 box12/support.avif:4484 box12/maps.json:27095 box12/cover.webp:5388 box12/cover.ktx:175200 box12/cover.json:405 box12/cover.dds:100087 box12/cover.avif:4560 box12/bg.webp:37042 box12/bg.ktx:350304 box12/bg.dds:430176 box12/bg.avif:45566 box11/support.webp:15828 box11/support.ktx:88160 box11/support.dds:46447 box11/support.avif:9050 box11/maps.json:28386 box11/cover.webp:9878 box11/cover.ktx:175200 box11/cover.json:405 box11/cover.dds:102624 box11/cover.avif:9565 box11/bg.webp:150292 box11/bg.ktx:350304 box11/bg.dds:465659 box11/bg.avif:371870 box10/support.webp:7642 box10/support.ktx:88160 box10/support.dds:20442 box10/support.avif:4475 box10/maps.json:28775 box10/cover.webp:11754 box10/cover.ktx:175200 box10/cover.json:405 box10/cover.dds:105963 box10/cover.avif:10071 box10/bg.webp:94256 box10/bg.ktx:350304 box10/bg.dds:474821 box10/bg.avif:247354 box09/support.webp:12594 box09/support.ktx:88160 box09/support.dds:45912 box09/support.avif:5464 box09/maps.json:27367 box09/cover.webp:5710 box09/cover.ktx:175200 box09/cover.json:405 box09/cover.dds:99595 box09/cover.avif:5215 box09/bg.webp:126670 box09/bg.ktx:350304 box09/bg.dds:448983 box09/bg.avif:351824 box08/support.webp:9486 box08/support.ktx:88160 box08/support.dds:27337 box08/support.avif:4704 box08/maps.json:30526 box08/earth.webp:7508 box08/earth.ktx:82432 box08/earth.dds:45942 box08/earth.avif:7140 box08/cover.webp:5522 box08/cover.ktx:175200 box08/cover.json:405 box08/cover.dds:101117 box08/cover.avif:4714 box08/bg.webp:85538 box08/bg.ktx:350304 box08/bg.dds:447900 box08/bg.avif:269103 box07/support.webp:9394 box07/support.ktx:88160 box07/support.dds:28799 box07/support.avif:5043 box07/maps.json:28759 box07/cover.webp:8678 box07/cover.ktx:175200 box07/cover.json:405 box07/cover.dds:103574 box07/cover.avif:7108 box07/bg.webp:86416 box07/bg.ktx:350304 box07/bg.dds:460995 box07/bg.avif:266615 box06/support.webp:16076 box06/support.ktx:135776 box06/support.dds:49188 box06/support.avif:4036 box06/maps.json:23787 box06/cover.webp:8242 box06/cover.ktx:175200 box06/cover.json:405 box06/cover.dds:104379 box06/cover.avif:5865 box06/bg.webp:102872 box06/bg.ktx:350304 box06/bg.dds:485051 box06/bg.avif:248318 box05/support.webp:13774 box05/support.ktx:88160 box05/support.dds:33048 box05/support.avif:7334 box05/maps.json:28121 box05/cover.webp:15466 box05/cover.ktx:175200 box05/cover.json:405 box05/cover.dds:108145 box05/cover.avif:15941 box05/bg.webp:140028 box05/bg.ktx:350304 box05/bg.dds:469823 box05/bg.avif:351513 box04/support.webp:19500 box04/support.ktx:88160 box04/support.dds:57010 box04/support.avif:7241 box04/maps.json:28874 box04/cover.webp:7142 box04/cover.ktx:175200 box04/cover.json:405 box04/cover.dds:105758 box04/cover.avif:5487 box04/bg.webp:139338 box04/bg.ktx:350304 box04/bg.dds:459362 box04/bg.avif:370343 box03/support.webp:12600 box03/support.ktx:88160 box03/support.dds:36358 box03/support.avif:5839 box03/maps.json:28624 box03/cover.webp:9072 box03/cover.ktx:175200 box03/cover.json:405 box03/cover.dds:102644 box03/cover.avif:7940 box03/bg.webp:90054 box03/bg.ktx:350304 box03/bg.dds:463548 box03/bg.avif:282950 box02/support.webp:13696 box02/support.ktx:88160 box02/support.dds:37443 box02/support.avif:6907 box02/maps.json:28645 box02/cover.webp:7514 box02/cover.ktx:175200 box02/cover.json:405 box02/cover.dds:100415 box02/cover.avif:6728 box02/bg.webp:104590 box02/bg.ktx:350304 box02/bg.dds:456356 box02/bg.avif:292054 box01/support.webp:10264 box01/support.ktx:88160 box01/support.dds:27853 box01/support.avif:5522 box01/maps.json:53856 box01/cover.webp:7340 box01/cover.ktx:175200 box01/cover.json:405 box01/cover.dds:103507 box01/cover.avif:6014 box01/bg.webp:56722 box01/bg.ktx:350304 box01/bg.dds:465612 box01/bg.avif:142017 audio/ogg/sound.ogg:250686 audio/ogg/menu_music_xmas.ogg:435372 audio/ogg/menu_music.ogg:431450 audio/ogg/game_music_xmas.ogg:872474 audio/ogg/game_music.ogg:509573 audio/aac/sound.aac:334758 audio/aac/menu_music_xmas.aac:269307 audio/aac/menu_music.aac:264168 audio/aac/game_music_xmas.aac:476705 audio/aac/game_music.aac:286076".split(
      " ",
    );
  m.bytes.push("lang/font-zh.png:1368046", "lang/font-zh.dat:82449");
  m.Jq = "res";
  m.MAX = 320;
  m.HT = [85, 86, 87];
  m.Ve =
    "video/outro_portrait.mp4 video/outro_landscape.mp4 video/intro_portrait.mp4 video/intro_landscape.mp4 strings.json pics/thumbs{resolution}.webp pics/thumbs{resolution}.json pics/thumbs{resolution}.avif pics/pic_20.webp pics/pic_20.avif pics/pic_19.webp pics/pic_19.avif pics/pic_18.webp pics/pic_18.avif pics/pic_17.webp pics/pic_17.avif pics/pic_16.webp pics/pic_16.avif pics/pic_15.webp pics/pic_15.avif pics/pic_14.webp pics/pic_14.avif pics/pic_13.webp pics/pic_13.avif pics/pic_12.webp pics/pic_12.avif pics/pic_11.webp pics/pic_11.avif pics/pic_10.webp pics/pic_10.avif pics/pic_09.webp pics/pic_09.avif pics/pic_08.webp pics/pic_08.avif pics/pic_07.webp pics/pic_07.avif pics/pic_06.webp pics/pic_06.avif pics/pic_05.webp pics/pic_05.avif pics/pic_04.webp pics/pic_04.avif pics/pic_03.webp pics/pic_03.avif pics/pic_02.webp pics/pic_02.avif pics/pic_01.webp pics/pic_01.avif pics/missing.webp pics/missing.avif pics/bg_xmas.webp pics/bg_xmas.avif pics/bg.webp pics/bg.avif menu/ui.webp menu/ui.{image} menu/ui.json menu/shadow.webp menu/shadow.{image} menu/seasons.webp menu/seasons.{image} menu/seasons.json menu/season3.webp menu/season3.{image} menu/season3.json menu/season2.webp menu/season2.{image} menu/season2.json menu/season1.webp menu/season1.{image} menu/season1.json menu/salute{resolution}.webp menu/salute{resolution}.{image} menu/salute{resolution}.json menu/cut{resolution}.webp menu/cut{resolution}.{image} menu/cut{resolution}.json menu/bg_xmas.webp menu/bg_xmas.{image} menu/bg2_xmas.webp menu/bg2_xmas.{image} menu/bg2.webp menu/bg2.{image} menu/bg.webp menu/bg.{image} loader_bg.jpg loader.{image} loader.dat lang/font{language}.{image} lang/font{language}.dat game/tut.webp game/tut.{image} game/tut.json game/obj_vinyl{resolution}.webp game/obj_vinyl{resolution}.{image} game/obj_vinyl{resolution}.json game/obj_transporter.webp game/obj_transporter.{image} game/obj_transporter.json game/obj_steam{resolution}.webp game/obj_steam{resolution}.{image} game/obj_steam{resolution}.json game/obj_star{resolution}.webp game/obj_star{resolution}.{image} game/obj_star{resolution}.json game/obj_spikes{resolution}.webp game/obj_spikes{resolution}.{image} game/obj_spikes{resolution}.json game/obj_spider{resolution}.webp game/obj_spider{resolution}.{image} game/obj_spider{resolution}.json game/obj_sp{resolution}.webp game/obj_sp{resolution}.{image} game/obj_sp{resolution}.json game/obj_sock{resolution}.webp game/obj_sock{resolution}.{image} game/obj_sock{resolution}.json game/obj_pump{resolution}.webp game/obj_pump{resolution}.{image} game/obj_pump{resolution}.json game/obj_lighter{resolution}.webp game/obj_lighter{resolution}.{image} game/obj_lighter{resolution}.json game/obj_lantern{resolution}.webp game/obj_lantern{resolution}.{image} game/obj_lantern{resolution}.json game/obj_hook{resolution}.webp game/obj_hook{resolution}.{image} game/obj_hook{resolution}.json game/obj_gravity{resolution}.webp game/obj_gravity{resolution}.{image} game/obj_gravity{resolution}.json game/obj_ghost{resolution}.webp game/obj_ghost{resolution}.{image} game/obj_ghost{resolution}.json game/obj_gap{resolution}.webp game/obj_gap{resolution}.{image} game/obj_gap{resolution}.json game/obj_electro{resolution}.webp game/obj_electro{resolution}.{image} game/obj_electro{resolution}.json game/obj_candy4{resolution}.webp game/obj_candy4{resolution}.{image} game/obj_candy4{resolution}.json game/obj_candy3{resolution}.webp game/obj_candy3{resolution}.{image} game/obj_candy3{resolution}.json game/obj_candy2{resolution}.webp game/obj_candy2{resolution}.{image} game/obj_candy2{resolution}.json game/obj_candy1{resolution}.webp game/obj_candy1{resolution}.{image} game/obj_candy1{resolution}.json game/obj_candy0{resolution}.webp game/obj_candy0{resolution}.{image} game/obj_candy0{resolution}.json game/obj_bubble{resolution}.webp game/obj_bubble{resolution}.{image} game/obj_bubble{resolution}.json game/obj_bouncer{resolution}.webp game/obj_bouncer{resolution}.{image} game/obj_bouncer{resolution}.json game/obj_blades{resolution}.webp game/obj_blades{resolution}.{image} game/obj_blades{resolution}.json game/obj_bee{resolution}.webp game/obj_bee{resolution}.{image} game/obj_bee{resolution}.json game/char3{resolution}.webp game/char3{resolution}.{image} game/char3{resolution}.json game/char2{resolution}.webp game/char2{resolution}.{image} game/char2{resolution}.json game/char1{resolution}.webp game/char1{resolution}.{image} game/char1{resolution}.json box17/support.webp box17/support.{image} box17/maps.json box17/cover.webp box17/cover.{image} box17/cover.json box17/bg.webp box17/bg.{image} box16/support.webp box16/support.{image} box16/maps.json box16/cover.webp box16/cover.{image} box16/cover.json box16/bg.webp box16/bg.{image} box15/support.webp box15/support.{image} box15/maps.json box15/cover.webp box15/cover.{image} box15/cover.json box15/bg.webp box15/bg.{image} box14/support.webp box14/support.{image} box14/maps.json box14/cover.webp box14/cover.{image} box14/cover.json box14/bg.webp box14/bg.{image} box13/support.webp box13/support.{image} box13/maps.json box13/cover.webp box13/cover.{image} box13/cover.json box13/bg.webp box13/bg.{image} box12/support.webp box12/support.{image} box12/maps.json box12/cover.webp box12/cover.{image} box12/cover.json box12/bg.webp box12/bg.{image} box11/support.webp box11/support.{image} box11/maps.json box11/cover.webp box11/cover.{image} box11/cover.json box11/bg.webp box11/bg.{image} box10/support.webp box10/support.{image} box10/maps.json box10/cover.webp box10/cover.{image} box10/cover.json box10/bg.webp box10/bg.{image} box09/support.webp box09/support.{image} box09/maps.json box09/cover.webp box09/cover.{image} box09/cover.json box09/bg.webp box09/bg.{image} box08/support.webp box08/support.{image} box08/maps.json box08/earth.webp box08/earth.{image} box08/cover.webp box08/cover.{image} box08/cover.json box08/bg.webp box08/bg.{image} box07/support.webp box07/support.{image} box07/maps.json box07/cover.webp box07/cover.{image} box07/cover.json box07/bg.webp box07/bg.{image} box06/support.webp box06/support.{image} box06/maps.json box06/cover.webp box06/cover.{image} box06/cover.json box06/bg.webp box06/bg.{image} box05/support.webp box05/support.{image} box05/maps.json box05/cover.webp box05/cover.{image} box05/cover.json box05/bg.webp box05/bg.{image} box04/support.webp box04/support.{image} box04/maps.json box04/cover.webp box04/cover.{image} box04/cover.json box04/bg.webp box04/bg.{image} box03/support.webp box03/support.{image} box03/maps.json box03/cover.webp box03/cover.{image} box03/cover.json box03/bg.webp box03/bg.{image} box02/support.webp box02/support.{image} box02/maps.json box02/cover.webp box02/cover.{image} box02/cover.json box02/bg.webp box02/bg.{image} box01/support.webp box01/support.{image} box01/maps.json box01/cover.webp box01/cover.{image} box01/cover.json box01/bg.webp box01/bg.{image} audio/{audio}/sound.{audio} audio/{audio}/menu_music_xmas.{audio} audio/{audio}/menu_music.{audio} audio/{audio}/game_music_xmas.{audio} audio/{audio}/game_music.{audio}".split(
      " ",
    );
  m.EQ = [];
  m.nS = [
    1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2,
    2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ];
  m.PA = 0;
  m.OA = 1;
  m.Tu = 2;
  m.Su = 3;
  m.si = 4;
  m.IK = 6;
  m.Ku = 7;
  m.Ju = 49;
  m.qA = 51;
  m.Iu = 53;
  m.Ef = 55;
  m.kh = 56;
  m.pi = 58;
  m.Hu = 60;
  m.uI = 61;
  m.Gu = 63;
  m.tI = 64;
  m.Fu = 66;
  m.sI = 67;
  m.Eu = 69;
  m.rI = 70;
  m.Mq = 72;
  m.qI = 73;
  m.Lq = 75;
  m.dA = 76;
  m.cA = 78;
  m.bA = 80;
  m.Du = 82;
  m.oi = 84;
  m.Zz = 85;
  m.Cu = 86;
  m.ie = 88;
  m.tg = 89;
  m.Yz = 91;
  m.nI = 92;
  m.ao = 94;
  m.mI = 95;
  m.$n = 97;
  m.lI = 98;
  m.Zn = 100;
  m.kI = 101;
  m.Xz = 103;
  m.jI = 104;
  m.Yn = 106;
  m.hI = 107;
  m.Xn = 109;
  m.gI = 110;
  m.Au = 112;
  m.iI = 113;
  m.Wn = 115;
  m.fI = 116;
  m.Vn = 118;
  m.eI = 119;
  m.Pj = 121;
  m.dI = 122;
  m.Un = 124;
  m.cI = 125;
  m.Wz = 127;
  m.bI = 128;
  m.Oj = 130;
  m.aI = 131;
  m.zu = 133;
  m.$H = 134;
  m.Tn = 136;
  m.ZH = 137;
  m.Sn = 139;
  m.YH = 140;
  m.Rn = 157;
  m.XH = 158;
  m.Qn = 160;
  m.WH = 161;
  m.yu = 163;
  m.VH = 164;
  m.xu = 166;
  m.UH = 167;
  m.Pn = 169;
  m.TH = 170;
  m.Vz = 172;
  m.SH = 173;
  m.Uz = 175;
  m.RH = 176;
  m.Fz = 253;
  m.jh = 315;
  m.oH = 316;
  m.nH = 317;
  m.mH = 318;
  m.lH = 319;
  Q.Tb = new Rc();
  Xc.qC = !0;
  Ub.fg = 0;
  Vb.fg = 0;
  Hi.pI = [
    0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767,
    65535, 131071, 262143, 524287, 1048575, 2097151, 4194303, 8388607, 16777215,
    33554431, 67108863, 134217727, 268435455, 536870911, 1073741823, 2147483647,
    -1,
  ];
})(
  typeof exports != "undefined"
    ? exports
    : typeof window != "undefined"
      ? window
      : typeof self != "undefined"
        ? self
        : this,
  typeof window != "undefined"
    ? window
    : typeof global != "undefined"
      ? global
      : typeof self != "undefined"
        ? self
        : this,
);

//# sourceMappingURL=ctr.js.map
