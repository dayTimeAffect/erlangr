/**
 * @Description:
 * @author dayTimeAffect
 * @date 2020/8/28
 */
const baseArrayMove = (arr, start, end) => {
    /*
    * arr: array
    * start: number
    * end: number
    * */
    if (start >= arr.length || end >= arr.length) return ;
    while (start < 0 || end < 0){
        start = start < 0 ? arr.length + start : start
        end = end < 0 ? arr.length + end : end
    }
    const [moveItem] = arr.splice(start, 1)
    arr.splice(end, 0, moveItem)
    return arr
}

export default baseArrayMove