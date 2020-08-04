/**
 * @Description:
 * @author dayTimeAffect
 * @date 2020/8/4
 */
import baseTypeJudge from "../.internal/baseTypeJudge.js";

const isNumber = o => {
    return baseTypeJudge(o) === 'Number'
}

export default isNumber