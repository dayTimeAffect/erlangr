/**
 * @Description:
 * @author dayTimeAffect
 * @date 2020/9/15
 */

import baseThrottle from "../.internal/baseThrottle.js";

const throttle = (func, time) => {
    return baseThrottle(func, time)
}

export default throttle