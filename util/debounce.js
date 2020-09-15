/**
 * @Description:
 * @author dayTimeAffect
 * @date 2020/9/15
 */

import baseDebounce from "../.internal/baseDebounce.js";

const debounce = (func, time) => {
    return baseDebounce(func, time)
}

export default debounce