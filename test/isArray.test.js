import isArray from "../util/isArray.js";

console.log(isArray([]))
console.log(isArray(1))
console.log(isArray(Symbol(1)))
console.log(isArray([{a:1}]))
console.log(isArray([null]))