/**
 * @Description:
 * @author dayTimeAffect
 * @date 2020/8/4
 */
import baseTypeJudge from "../.internal/baseTypeJudge.js";

const isBoolean = o => {
    return baseTypeJudge(o) === 'Boolean'
}

export default isBoolean