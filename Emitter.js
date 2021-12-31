class EventEmitter {
    constructor() {
        this._events = {}
    }
    on(type, callback) {
        const callbacks = this._events[type] || []
        callbacks.push(callback)
        this._events[type] = callbacks
    }

    emit(type, ...args) {
        const callbacks = this._events[type] || []
        callbacks.map(cb => cb(...args))
    }
    //实现事件的单次订阅方法
    once(type, callback) {
        const one = (...args) => {
            callback(...args)
            this.off(type, one)
        }
    }
    // 由于需要在回调函数执行后，取消订阅当前事件，所以需要对传入的回调函数做一层包装,然后绑定包装后的函数
    off(type, callback) {
        const callbacks = this._events[type] || []
        const newCallbacks = callbacks.filter(fn => fn != callback && fn.initialCallback != callback)
        this._events[type] = newCallbacks
    }
}