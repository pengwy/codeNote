// debounce 防抖

//一段时间后，没有新的事件加入，执行
function throttle(fun, interval) {
    let time = null
    return function () {
        let content = this
        let argument = arguments
        if(time){
            clearInterval(time)
        }
        time = setTimeout(() => {
            fun.call(content, argument)
        }, interval)
    }
}