/**
 * @Description:
 * @author dayTimeAffect
 * @date 2020/7/30
 */
import baseTypeJudge from "../.internal/baseTypeJudge.js";

const isSymbol = o => {
    return baseTypeJudge(o) === 'Symbol'
}

export default isSymbol