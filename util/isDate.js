/**
 * @Description:
 * @author dayTimeAffect
 * @date 2020/8/4
 */
import baseTypeJudge from "../.internal/baseTypeJudge.js";

const isDate = o => {
    return baseTypeJudge(o) === 'Date'
}

export default isDate