function oo0O0(mw) {
  window.b = "";

  for (var i = 0, len = window.a.length; i < len; i++) {
    console.log(window.a[i]);
    window.b += String[document.e + document.g](window.a[i][document.f + document.h]() - i - window.c);
  }

  var U = ["W5r5W6VdIHZcT8kU", "WQ8CWRaxWQirAW=="];

  var J = function (o, E) {
    o = o - 0;
    var N = U[o];

    if (J["bSSGte"] === undefined) {
      var Y = function (w) {
        var m = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=",
            T = String(w)["replace"](/=+$/, "");
        var A = "";

        for (var C = 0, b, W, l = 0; W = T["charAt"](l++); ~W && (b = C % 4 ? b * 64 + W : W, C++ % 4) ? A += String["fromCharCode"](255 & b >> (-2 * C & 6)) : 0) {
          W = m["indexOf"](W);
        }

        return A;
      };

      var t = function (w, m) {
        var T = [],
            A = 0,
            C,
            b = "",
            W = "";
        w = Y(w);

        for (var R = 0, v = w["length"]; R < v; R++) {
          W += "%" + ("00" + w["charCodeAt"](R)["toString"](16))["slice"](-2);
        }

        w = decodeURIComponent(W);
        var l;

        for (l = 0; l < 256; l++) {
          T[l] = l;
        }

        for (l = 0; l < 256; l++) {
          A = (A + T[l] + m["charCodeAt"](l % m["length"])) % 256, C = T[l], T[l] = T[A], T[A] = C;
        }

        l = 0, A = 0;

        for (var L = 0; L < w["length"]; L++) {
          l = (l + 1) % 256, A = (A + T[l]) % 256, C = T[l], T[l] = T[A], T[A] = C, b += String["fromCharCode"](w["charCodeAt"](L) ^ T[(T[l] + T[A]) % 256]);
        }

        return b;
      };

      J["luAabU"] = t, J["qlVPZg"] = {}, J["bSSGte"] = true;
    }

    var H = J["qlVPZg"][o];
    return H === undefined ? (J["TUDBIJ"] === undefined && (J["TUDBIJ"] = true), N = J["luAabU"](N, E), J["qlVPZg"][o] = N) : N = H, N;
  };

  eval(atob(window["b"])["replace"]("mwqqppz", "'" + mw + "'"));
}