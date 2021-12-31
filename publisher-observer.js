class Publisher {
    constructor() {
        this.observers = []
    }

    add(observer) {
        this.observers.push(observer)
    }

    remove(observe) {
        this.observers.map((item, i) => {
            if (item == observe) {
                this.observers.slice(i, 1)
            }
        })
    }

    notify() {
        this.observers.map((observe) => {
            observe.update(this)
        })
    }
}

class Observe {
    constructor()

    update() {

    }
}