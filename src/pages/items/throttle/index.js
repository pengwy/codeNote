
// throttle 节流
//时间戳
function throttle(fun, interval) {
    let time = 0
    return function () {
        let now = +new Date()
        let content = this
        let argument = arguments
        if (now - time < interval) {
            return
        }
        fun.call(content, argument)
        time = now
    }
}
// settimeout

function throttle(fun, interval) {
    let time = null
    return function () {
        let content = this
        let argument = arguments
        if (time) {
            return
        }
        time = setTimeout(() => {
            fun.call(content, argument)
            time = null
        }, interval)
    }
}