/**
 * @Description:
 * @author dayTimeAffect
 * @date 2020/8/4
 */
import baseTypeJudge from "../.internal/baseTypeJudge.js";

const isString = o => {
    return baseTypeJudge(o) === 'String'
}

export default isString