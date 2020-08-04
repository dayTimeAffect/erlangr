/**
 * @Description:
 * @author dayTimeAffect
 * @date 2020/8/4
 */
import baseTypeJudge from "../.internal/baseTypeJudge.js";

const typeOf = o => {
    return baseTypeJudge(o).toLowerCase()
}

export default typeOf