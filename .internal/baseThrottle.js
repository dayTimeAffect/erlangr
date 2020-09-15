/**
 * @Description:
 * @author dayTimeAffect
 * @date 2020/9/15
 */
const baseThrottle = (func, time) => {
    if (typeof func !== 'function') {
        throw new TypeError('Expected a function')
    }
    const wait = +time || 500
    let canRun = true;
    return function () {
        if (!canRun) return;
        canRun = false;
        func.apply(this, arguments);
        setTimeout(() => {
            canRun = true;
        }, wait);
    };
}

export default baseThrottle