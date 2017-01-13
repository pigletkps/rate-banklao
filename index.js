/**
 * Created by xang on 1/13/2017.
 */

"use strict";

var bcel =require('./core/bcel')();
var ldb =require('./core/ldb')();
var acleda =require('./core/acleda')();
var bfl =require('./core/bfl')();
var bol =require('./core/bol')();
var lvb =require('./core/lvb')();
var psb =require('./core/psb')();
var stb =require('./core/stb')();


exports.bcel = function (Okcallback, ErrorCallnack) {

    if (typeof Okcallback === 'function' && typeof ErrorCallnack === 'function'){
        return bcel.rateinfo(Okcallback,ErrorCallnack);
    }

    throw "callback is not function";

}

exports.ldb = function (Okcallback, ErrorCallnack) {

    if (typeof Okcallback === 'function' && typeof ErrorCallnack === 'function'){
        return ldb.rateinfo(Okcallback,ErrorCallnack);
    }

    throw "callback is not function";

};
exports.acleda = function (Okcallback, ErrorCallnack) {

    if (typeof Okcallback === 'function' && typeof ErrorCallnack === 'function'){
        return acleda.rateinfo(Okcallback,ErrorCallnack);
    }
    throw "callback is not function";
};
exports.bfl = function (Okcallback, ErrorCallnack) {

    if (typeof Okcallback === 'function' && typeof ErrorCallnack === 'function') {
        return bfl.rateinfo(Okcallback,ErrorCallnack);
    }
    throw "callback is not function";
};
exports.bol = function (Okcallback, ErrorCallnack) {

    if (typeof Okcallback === 'function' && typeof ErrorCallnack === 'function'){
        return bol.rateinfo(Okcallback,ErrorCallnack);
    }
    throw "callback is not function";
};
exports.lvb = function (Okcallback, ErrorCallnack) {

    if (typeof Okcallback === 'function' && typeof ErrorCallnack === 'function'){
        return lvb.rateinfo(Okcallback,ErrorCallnack);
    }
    throw "callback is not function";
};
exports.psb = function (Okcallback, ErrorCallnack) {

    if (typeof Okcallback === 'function' && typeof ErrorCallnack === 'function'){
        return psb.rateinfo(Okcallback,ErrorCallnack);
    }
    throw "callback is not function";
};
exports.stb = function (Okcallback, ErrorCallnack) {

    if (typeof Okcallback === 'function' && typeof ErrorCallnack === 'function'){
        return stb.rateinfo(Okcallback,ErrorCallnack);
    }
    throw "callback is not function";
};