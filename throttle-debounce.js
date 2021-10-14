var but1 = document.getElementById("but");


/**
 * 节流
 * 规定时间内只触发一次函数调用
 * @param {*} fn 执行的函数
 * @param {*} delay 节流的时间
 */
function throttle (fn, delay) {
    var timer = null;
    return (...arguments) => {
        // timer === false, 则执行，并在规定时间后清除timer
        if(!timer){
            fn.apply(this, arguments);
            timer = setTimeout(() => {
                timer = null;
            }, delay)
        }
    }

}

/**
 * 防抖
 * 在规定时间内，不论触发多少函数调用，都已最后一次为准。
 * @param {*} fn 执行的函数
 * @param {*} delay 防抖的时间
 * @returns 
 */
function debounce (fn, delay) {
    var timer = null;
    return (...arguments) => {
        // 在规定的时间后重新执行调用，如果上一个定时器存在，则清除它，防止上一次的调用被触发
        if(timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            timer = null;
            fn.apply(this, arguments);
        }, delay)
    }
}

but1.onclick = throttle(()=>{
    console.log("点了")
}, 1000);