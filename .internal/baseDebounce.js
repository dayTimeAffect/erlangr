/**
 * @Description:
 * @author dayTimeAffect
 * @date 2020/9/15
 */
const baseDebounce = (func, time) => {
    if (typeof func !== 'function') {
        throw new TypeError('Expected a function')
    }
    const wait = +time || 500
    let timeout = null
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            console.log(arguments);
            func.apply(this, arguments);
        }, wait);
    };
}

export default baseDebounce