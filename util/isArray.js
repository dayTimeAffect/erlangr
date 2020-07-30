/**
 * @Description:
 * @author dayTimeAffect
 * @date 2020/7/30
 */

import baseTypeJudge from "../.internal/baseTypeJudge";
const isArray = array => {
    return baseTypeJudge(array) === 'array'
}

export default isArray