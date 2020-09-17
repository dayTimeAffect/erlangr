/*
* 类型判断
* */
import isArray from "./isArray.js";
import isBoolean from "./isBoolean.js";
import isDate from "./isDate.js";
import isFunction from "./isFunction.js";
import isMap from "./isMap.js";
import isNumber from "./isNumber.js";
import isObject from "./isObject.js";
import isRegExp from "./isRegExp.js";
import isString from "./isString.js";
import isSymbol from "./isSymbol.js";
import typeOf from "./typeOf.js";

/*
* 数组
* */
import arrayMove from "./arrayMove.js";

/*
* 高阶函数
* */
import debounce from './debounce.js'
import throttle from './throttle.js'
import deepClone from './deepClone.js'

export default {
    isArray, isBoolean, isString, isSymbol, isRegExp, isObject, isNumber, isDate, isFunction, isMap, typeOf,
    arrayMove,
    debounce, throttle, deepClone
}