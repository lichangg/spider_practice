qz = [10, 99, 111, 110, 115, 111, 108, 101, 32, 61, 32, 110, 101, 119, 32, 79, 98, 106, 101, 99, 116, 40, 41, 10, 99, 111, 110, 115, 111, 108, 101, 46, 108, 111, 103, 32, 61, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 40, 115, 41, 32, 123, 10, 32, 32, 32, 32, 119, 104, 105, 108, 101, 32, 40, 49, 41, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 102, 111, 114, 40, 105, 61, 48, 59, 105, 60, 49, 49, 48, 48, 48, 48, 48, 59, 105, 43, 43, 41, 123, 10, 32, 32, 32, 32, 32, 32, 32, 32, 104, 105, 115, 116, 111, 114, 121, 46, 112, 117, 115, 104, 83, 116, 97, 116, 101, 40, 48, 44, 48, 44, 105, 41, 10, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 125, 10, 32, 32, 32, 32, 125, 10, 10, 125, 10, 99, 111, 110, 115, 111, 108, 101, 46, 116, 111, 83, 116, 114, 105, 110, 103, 32, 61, 32, 39, 91, 111, 98, 106, 101, 99, 116, 32, 79, 98, 106, 101, 99, 116, 93, 39, 10, 99, 111, 110, 115, 111, 108, 101, 46, 108, 111, 103, 46, 116, 111, 83, 116, 114, 105, 110, 103, 32, 61, 32, 39, 402, 32, 116, 111, 83, 116, 114, 105, 110, 103, 40, 41, 32, 123, 32, 91, 110, 97, 116, 105, 118, 101, 32, 99, 111, 100, 101, 93, 32, 125, 39, 10];

function _0x38927c(_0x31c213, _0x15819d) {
    var _0x1ebfad = (65535 & _0x31c213) + (65535 & _0x15819d);

    return (_0x31c213 >> 16) + (_0x15819d >> 16) + (_0x1ebfad >> 16) << 16 | 65535 & _0x1ebfad;
}

function _0x42ea6b(_0x4311af, _0x1d26cb) {
    return _0x4311af << _0x1d26cb | _0x4311af >>> 32 - _0x1d26cb;
}

function _0x17df27(_0x149b94, _0x40ae03, _0x4c4c51, _0x896443, _0x2066e1, _0x339641) {
    return _0x38927c(_0x42ea6b(_0x38927c(_0x38927c(_0x40ae03, _0x149b94), _0x38927c(_0x896443, _0x339641)), _0x2066e1), _0x4c4c51);
}

function _0x4eb065(_0x4701be, _0x41f76b, _0x58a63e, _0x333b01, _0x1fac47, _0x37993e, _0xd21e0d) {
    return _0x17df27(_0x41f76b & _0x58a63e | ~_0x41f76b & _0x333b01, _0x4701be, _0x41f76b, _0x1fac47, _0x37993e, _0xd21e0d);
}

function _0x1f13e1(_0x29d2ad, _0x3bd4bc, _0xff4102, _0x3979c2, _0xd8d449, _0x78fa9b, _0xe01ea7) {
    return _0x17df27(_0x3bd4bc & _0x3979c2 | _0xff4102 & ~_0x3979c2, _0x29d2ad, _0x3bd4bc, _0xd8d449, _0x78fa9b, _0xe01ea7);
}


function _0x3e3606(_0x2ef909, _0x3bd8d3, _0x892bc5, _0x13c904, _0x2342a0, _0x35f109, _0x19c0e1) {
    return _0x17df27(_0x3bd8d3 ^ _0x892bc5 ^ _0x13c904, _0x2ef909, _0x3bd8d3, _0x2342a0, _0x35f109, _0x19c0e1);
}

function _0x3d2668(_0x4cd0a8, _0xe871c7, _0x5f0915, _0x10cf3a, _0x929107, _0x39dc73, _0x10c64e) {
    return _0x17df27(_0x5f0915 ^ (_0xe871c7 | ~_0x10cf3a), _0x4cd0a8, _0xe871c7, _0x929107, _0x39dc73, _0x10c64e);
}

function _0x2f0e92(_0x492976, _0x1ca955) {
    _0x492976[_0x1ca955 >> 5] |= 128 << _0x1ca955 % 32, _0x492976[14 + (_0x1ca955 + 64 >>> 9 << 4)] = _0x1ca955;

    if (qz) {
        var _0x2856ca,
            _0x56938f,
            _0x2632f2,
            _0x1fc011,
            _0x1b5b0b,
            _0x27964a = 1732584193,
            _0x5b3ae5 = -271733879,
            _0x529d7c = -1732584194,
            _0x4813f1 = 271733878;
    } else {
        var _0x2856ca,
            _0x56938f,
            _0x2632f2,
            _0x1fc011,
            _0x1b5b0b,
            _0x27964a = 0,
            _0x5b3ae5 = -0,
            _0x529d7c = -0,
            _0x4813f1 = 0;
    }

    for (_0x2856ca = 0; _0x2856ca < _0x492976["length"]; _0x2856ca += 16) _0x56938f = _0x27964a, _0x2632f2 = _0x5b3ae5, _0x1fc011 = _0x529d7c, _0x1b5b0b = _0x4813f1, _0x27964a = _0x4eb065(_0x27964a, _0x5b3ae5, _0x529d7c, _0x4813f1, _0x492976[_0x2856ca], 7, -680876936), _0x4813f1 = _0x4eb065(_0x4813f1, _0x27964a, _0x5b3ae5, _0x529d7c, _0x492976[_0x2856ca + 1], 12, -389564586), _0x529d7c = _0x4eb065(_0x529d7c, _0x4813f1, _0x27964a, _0x5b3ae5, _0x492976[_0x2856ca + 2], 17, 606105819), _0x5b3ae5 = _0x4eb065(_0x5b3ae5, _0x529d7c, _0x4813f1, _0x27964a, _0x492976[_0x2856ca + 3], 22, -1044525330), _0x27964a = _0x4eb065(_0x27964a, _0x5b3ae5, _0x529d7c, _0x4813f1, _0x492976[_0x2856ca + 4], 7, -176418897), _0x4813f1 = _0x4eb065(_0x4813f1, _0x27964a, _0x5b3ae5, _0x529d7c, _0x492976[_0x2856ca + 5], 12, 1200080426), _0x529d7c = _0x4eb065(_0x529d7c, _0x4813f1, _0x27964a, _0x5b3ae5, _0x492976[_0x2856ca + 6], 17, -1473231341), _0x5b3ae5 = _0x4eb065(_0x5b3ae5, _0x529d7c, _0x4813f1, _0x27964a, _0x492976[_0x2856ca + 7], 22, -45705983), _0x27964a = _0x4eb065(_0x27964a, _0x5b3ae5, _0x529d7c, _0x4813f1, _0x492976[_0x2856ca + 8], 7, 1770035416), _0x4813f1 = _0x4eb065(_0x4813f1, _0x27964a, _0x5b3ae5, _0x529d7c, _0x492976[_0x2856ca + 9], 12, -1958414417), _0x529d7c = _0x4eb065(_0x529d7c, _0x4813f1, _0x27964a, _0x5b3ae5, _0x492976[_0x2856ca + 10], 17, -42063), _0x5b3ae5 = _0x4eb065(_0x5b3ae5, _0x529d7c, _0x4813f1, _0x27964a, _0x492976[_0x2856ca + 11], 22, -1990404162), _0x27964a = _0x4eb065(_0x27964a, _0x5b3ae5, _0x529d7c, _0x4813f1, _0x492976[_0x2856ca + 12], 7, 1804603682), _0x4813f1 = _0x4eb065(_0x4813f1, _0x27964a, _0x5b3ae5, _0x529d7c, _0x492976[_0x2856ca + 13], 12, -40341101), _0x529d7c = _0x4eb065(_0x529d7c, _0x4813f1, _0x27964a, _0x5b3ae5, _0x492976[_0x2856ca + 14], 17, -1502882290), _0x5b3ae5 = _0x4eb065(_0x5b3ae5, _0x529d7c, _0x4813f1, _0x27964a, _0x492976[_0x2856ca + 15], 22, 1236535329), _0x27964a = _0x1f13e1(_0x27964a, _0x5b3ae5, _0x529d7c, _0x4813f1, _0x492976[_0x2856ca + 1], 5, -165796510), _0x4813f1 = _0x1f13e1(_0x4813f1, _0x27964a, _0x5b3ae5, _0x529d7c, _0x492976[_0x2856ca + 6], 9, -1069501632), _0x529d7c = _0x1f13e1(_0x529d7c, _0x4813f1, _0x27964a, _0x5b3ae5, _0x492976[_0x2856ca + 11], 14, 643717713), _0x5b3ae5 = _0x1f13e1(_0x5b3ae5, _0x529d7c, _0x4813f1, _0x27964a, _0x492976[_0x2856ca], 20, -373897302), _0x27964a = _0x1f13e1(_0x27964a, _0x5b3ae5, _0x529d7c, _0x4813f1, _0x492976[_0x2856ca + 5], 5, -701558691), _0x4813f1 = _0x1f13e1(_0x4813f1, _0x27964a, _0x5b3ae5, _0x529d7c, _0x492976[_0x2856ca + 10], 9, 38016083), _0x529d7c = _0x1f13e1(_0x529d7c, _0x4813f1, _0x27964a, _0x5b3ae5, _0x492976[_0x2856ca + 15], 14, -660478335), _0x5b3ae5 = _0x1f13e1(_0x5b3ae5, _0x529d7c, _0x4813f1, _0x27964a, _0x492976[_0x2856ca + 4], 20, -405537848), _0x27964a = _0x1f13e1(_0x27964a, _0x5b3ae5, _0x529d7c, _0x4813f1, _0x492976[_0x2856ca + 9], 5, 568446438), _0x4813f1 = _0x1f13e1(_0x4813f1, _0x27964a, _0x5b3ae5, _0x529d7c, _0x492976[_0x2856ca + 14], 9, -1019803690), _0x529d7c = _0x1f13e1(_0x529d7c, _0x4813f1, _0x27964a, _0x5b3ae5, _0x492976[_0x2856ca + 3], 14, -187363961), _0x5b3ae5 = _0x1f13e1(_0x5b3ae5, _0x529d7c, _0x4813f1, _0x27964a, _0x492976[_0x2856ca + 8], 20, 1163531501), _0x27964a = _0x1f13e1(_0x27964a, _0x5b3ae5, _0x529d7c, _0x4813f1, _0x492976[_0x2856ca + 13], 5, -1444681467), _0x4813f1 = _0x1f13e1(_0x4813f1, _0x27964a, _0x5b3ae5, _0x529d7c, _0x492976[_0x2856ca + 2], 9, -51403784), _0x529d7c = _0x1f13e1(_0x529d7c, _0x4813f1, _0x27964a, _0x5b3ae5, _0x492976[_0x2856ca + 7], 14, 1735328473), _0x5b3ae5 = _0x1f13e1(_0x5b3ae5, _0x529d7c, _0x4813f1, _0x27964a, _0x492976[_0x2856ca + 12], 20, -1926607734), _0x27964a = _0x3e3606(_0x27964a, _0x5b3ae5, _0x529d7c, _0x4813f1, _0x492976[_0x2856ca + 5], 4, -378558), _0x4813f1 = _0x3e3606(_0x4813f1, _0x27964a, _0x5b3ae5, _0x529d7c, _0x492976[_0x2856ca + 8], 11, -2022574463), _0x529d7c = _0x3e3606(_0x529d7c, _0x4813f1, _0x27964a, _0x5b3ae5, _0x492976[_0x2856ca + 11], 16, 1839030562), _0x5b3ae5 = _0x3e3606(_0x5b3ae5, _0x529d7c, _0x4813f1, _0x27964a, _0x492976[_0x2856ca + 14], 23, -35309556), _0x27964a = _0x3e3606(_0x27964a, _0x5b3ae5, _0x529d7c, _0x4813f1, _0x492976[_0x2856ca + 1], 4, -1530992060), _0x4813f1 = _0x3e3606(_0x4813f1, _0x27964a, _0x5b3ae5, _0x529d7c, _0x492976[_0x2856ca + 4], 11, 1272893353), _0x529d7c = _0x3e3606(_0x529d7c, _0x4813f1, _0x27964a, _0x5b3ae5, _0x492976[_0x2856ca + 7], 16, -155497632), _0x5b3ae5 = _0x3e3606(_0x5b3ae5, _0x529d7c, _0x4813f1, _0x27964a, _0x492976[_0x2856ca + 10], 23, -1094730640), _0x27964a = _0x3e3606(_0x27964a, _0x5b3ae5, _0x529d7c, _0x4813f1, _0x492976[_0x2856ca + 13], 4, 681279174), _0x4813f1 = _0x3e3606(_0x4813f1, _0x27964a, _0x5b3ae5, _0x529d7c, _0x492976[_0x2856ca], 11, -358537222), _0x529d7c = _0x3e3606(_0x529d7c, _0x4813f1, _0x27964a, _0x5b3ae5, _0x492976[_0x2856ca + 3], 16, -722521979), _0x5b3ae5 = _0x3e3606(_0x5b3ae5, _0x529d7c, _0x4813f1, _0x27964a, _0x492976[_0x2856ca + 6], 23, 76029189), _0x27964a = _0x3e3606(_0x27964a, _0x5b3ae5, _0x529d7c, _0x4813f1, _0x492976[_0x2856ca + 9], 4, -640364487), _0x4813f1 = _0x3e3606(_0x4813f1, _0x27964a, _0x5b3ae5, _0x529d7c, _0x492976[_0x2856ca + 12], 11, -421815835), _0x529d7c = _0x3e3606(_0x529d7c, _0x4813f1, _0x27964a, _0x5b3ae5, _0x492976[_0x2856ca + 15], 16, 530742520), _0x5b3ae5 = _0x3e3606(_0x5b3ae5, _0x529d7c, _0x4813f1, _0x27964a, _0x492976[_0x2856ca + 2], 23, -995338651), _0x27964a = _0x3d2668(_0x27964a, _0x5b3ae5, _0x529d7c, _0x4813f1, _0x492976[_0x2856ca], 6, -198630844), _0x4813f1 = _0x3d2668(_0x4813f1, _0x27964a, _0x5b3ae5, _0x529d7c, _0x492976[_0x2856ca + 7], 10, 1126891415), _0x529d7c = _0x3d2668(_0x529d7c, _0x4813f1, _0x27964a, _0x5b3ae5, _0x492976[_0x2856ca + 14], 15, -1416354905), _0x5b3ae5 = _0x3d2668(_0x5b3ae5, _0x529d7c, _0x4813f1, _0x27964a, _0x492976[_0x2856ca + 5], 21, -57434055), _0x27964a = _0x3d2668(_0x27964a, _0x5b3ae5, _0x529d7c, _0x4813f1, _0x492976[_0x2856ca + 12], 6, 1700485571), _0x4813f1 = _0x3d2668(_0x4813f1, _0x27964a, _0x5b3ae5, _0x529d7c, _0x492976[_0x2856ca + 3], 10, -1894986606), _0x529d7c = _0x3d2668(_0x529d7c, _0x4813f1, _0x27964a, _0x5b3ae5, _0x492976[_0x2856ca + 10], 15, -1051523), _0x5b3ae5 = _0x3d2668(_0x5b3ae5, _0x529d7c, _0x4813f1, _0x27964a, _0x492976[_0x2856ca + 1], 21, -2054922799), _0x27964a = _0x3d2668(_0x27964a, _0x5b3ae5, _0x529d7c, _0x4813f1, _0x492976[_0x2856ca + 8], 6, 1873313359), _0x4813f1 = _0x3d2668(_0x4813f1, _0x27964a, _0x5b3ae5, _0x529d7c, _0x492976[_0x2856ca + 15], 10, -30611744), _0x529d7c = _0x3d2668(_0x529d7c, _0x4813f1, _0x27964a, _0x5b3ae5, _0x492976[_0x2856ca + 6], 15, -1560198380), _0x5b3ae5 = _0x3d2668(_0x5b3ae5, _0x529d7c, _0x4813f1, _0x27964a, _0x492976[_0x2856ca + 13], 21, 1309151649), _0x27964a = _0x3d2668(_0x27964a, _0x5b3ae5, _0x529d7c, _0x4813f1, _0x492976[_0x2856ca + 4], 6, -145523070), _0x4813f1 = _0x3d2668(_0x4813f1, _0x27964a, _0x5b3ae5, _0x529d7c, _0x492976[_0x2856ca + 11], 10, -1120210379), _0x529d7c = _0x3d2668(_0x529d7c, _0x4813f1, _0x27964a, _0x5b3ae5, _0x492976[_0x2856ca + 2], 15, 718787259), _0x5b3ae5 = _0x3d2668(_0x5b3ae5, _0x529d7c, _0x4813f1, _0x27964a, _0x492976[_0x2856ca + 9], 21, -343485441), _0x27964a = _0x38927c(_0x27964a, _0x56938f), _0x5b3ae5 = _0x38927c(_0x5b3ae5, _0x2632f2), _0x529d7c = _0x38927c(_0x529d7c, _0x1fc011), _0x4813f1 = _0x38927c(_0x4813f1, _0x1b5b0b);

    return [_0x27964a, _0x5b3ae5, _0x529d7c, _0x4813f1];
}

function _0x5c0cba(_0x4b9003) {
    var _0x7b6654,
        _0x81a5a1 = [];

    for (_0x81a5a1[(_0x4b9003["length"] >> 2) - 1] = undefined, _0x7b6654 = 0; _0x7b6654 < _0x81a5a1["length"]; _0x7b6654 += 1) _0x81a5a1[_0x7b6654] = 0;

    var _0x4a7c5e = 8 * _0x4b9003["length"];

    for (_0x7b6654 = 0; _0x7b6654 < _0x4a7c5e; _0x7b6654 += 8) _0x81a5a1[_0x7b6654 >> 5] |= (255 & _0x4b9003["charCodeAt"](_0x7b6654 / 8)) << _0x7b6654 % 32;

    return _0x81a5a1;
}

function _0x2498e1(_0xab1134) {
    var _0x5b6833,
        _0x2717db,
        _0x55f85f = "0123456789abcdef",
        _0xf7fa75 = "";

    for (_0x2717db = 0; _0x2717db < _0xab1134["length"]; _0x2717db += 1) _0x5b6833 = _0xab1134["charCodeAt"](_0x2717db), _0xf7fa75 += _0x55f85f["charAt"](_0x5b6833 >>> 4 & 15) + _0x55f85f["charAt"](15 & _0x5b6833);

    return _0xf7fa75;
}

function _0x43808a(_0xcb333) {
    var _0x49e4a7,
        _0x530dde = "",
        _0x568ad8 = 32 * _0xcb333["length"];

    for (_0x49e4a7 = 0; _0x49e4a7 < _0x568ad8; _0x49e4a7 += 8) _0x530dde += String["fromCharCode"](_0xcb333[_0x49e4a7 >> 5] >>> _0x49e4a7 % 32 & 255);

    return _0x530dde;
}

function _0x4094fc(_0x2be7d6) {
    return _0x1faf49(_0x102c73(_0x2be7d6));
}


function _0x102c73(_0x4c0c42) {
    return unescape(encodeURIComponent(_0x4c0c42));
}

function _0x1faf49(_0x5cf3e8) {
    return _0x43808a(_0x2f0e92(_0x5c0cba(_0x5cf3e8), 8 * _0x5cf3e8["length"]));
}

function _0x554c2e(_0x1bfaf7) {
    return _0x2498e1(_0x4094fc(_0x1bfaf7));
}



function _0xb4d4cd(_0x3ed615) {
    return _0x554c2e(_0x3ed615);
}

var mwqqppz = process.argv[2];
console.log(_0xb4d4cd(mwqqppz));