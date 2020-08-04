/**
 * @Description:
 * @author dayTimeAffect
 * @date 2020/8/4
 */
import baseTypeJudge from "../.internal/baseTypeJudge.js";

const isMap = o => {
    return baseTypeJudge(o) === 'Map'
}

export default isMap