/**
 * @Description:
 * @author dayTimeAffect
 * @date 2020/7/30
 */

import baseTypeJudge from "../.internal/baseTypeJudge.js";

const isArray = array => {
    return baseTypeJudge(array) === 'Array'
}

export default isArray