/**
 * @Description:
 * @author dayTimeAffect
 * @date 2020/7/30
 */
const baseTypeJudge = (o) => {
    /*
    * 判断类型并返回
    * */
    return Object.prototype.toString.call(o).slice(8, -1)
}

export default baseTypeJudge