/**
 * @Description:
 * @author dayTimeAffect
 * @date 2020/8/4
 */
import baseTypeJudge from "../.internal/baseTypeJudge.js";

const isObject = o => {
    return baseTypeJudge(o) === 'Object'
}

export default isObject