/**
 * @Description:
 * @author dayTimeAffect
 * @date 2020/9/17
 */
import baseTypeJudge from './baseTypeJudge.js'

const baseDeepClone = (target, cache = new WeakMap()) => {
    const tem = baseTypeJudge(target).toLocaleLowerCase()
    switch (tem) {
        case 'null':
            return null
        case 'date':
            return new Date(target)
        case 'regexp':
            return new RegExp(target)
        case 'string':
            return target
        case 'number':
            return target
        case 'boolean':
            return target
        case 'undefined':
            return target
        case 'function':
            return target
        case 'symbol':
            return target
    }
    let result = new target.constructor()
    cache.set(target, result)
    Reflect.ownKeys(target).forEach(key => {
        if (typeof target[key] === 'object'){
            if (cache.has(target[key])){
                result[key] = cache.get(target[key])
            }else {
                result[key] = baseDeepClone(target[key], cache)
                cache.set(target[key], result[key])
            }
        }else{
            result[key] = target[key]
        }
    })
    return result
}
export default baseDeepClone