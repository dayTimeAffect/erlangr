/**
 * @Description:
 * @author dayTimeAffect
 * @date 2020/7/30
 */
import baseTypeJudge from "../.internal/baseTypeJudge.js";

const isArray = o => {
    return baseTypeJudge(o) === 'Array'
}

export default isArray