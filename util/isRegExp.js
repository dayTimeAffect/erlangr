/**
 * @Description:
 * @author dayTimeAffect
 * @date 2020/8/4
 */
import baseTypeJudge from "../.internal/baseTypeJudge.js";

const isRegExp = o => {
    return baseTypeJudge(o) === 'RegExp'
}

export default isRegExp