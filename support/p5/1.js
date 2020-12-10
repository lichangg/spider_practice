function _$KS() {
  V();

  if (eval["toString"]() === "function eval() { [native code] }") {
    if ($_zw["length"] === 25) {
      $_ow = "";

      for (var h = 0; h < window["$$$"]["length"]; h++) {
        $_ow += String["fromCharCode"](window["$$$"][h]["charCodeAt"]() - ($_zw["length"] + 1) * 3 - parseInt(h["toString"]()["slice"](0, 1)) * 2);
      }

      eval($_ow);
    } else {
      $_ow = "";

      for (var h = 0; h < window["$$$"]["length"]; h++) {
        $_ow += String["fromCharCode"](window["$$$"][h]["charCodeAt"]() - 78 - parseInt(h["toString"]()["slice"](0, 1)) * 2);
      }

      eval($_ow);
    }
  } else {
    $_ow = "";

    for (var h = 0; h < window["$$$"]["length"]; h++) {
      $_ow += String["fromCharCode"](window["$$$"][h]["charCodeAt"]() - 2331 - parseInt(h["toString"]()["slice"](0, 1)) * 2);
    }

    eval($_ow);
  }
}

_$KS();