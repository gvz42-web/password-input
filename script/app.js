import Element from "./element.js"
const resultClasses = {
    SUCCESS: 'success',
    BLOCKED: 'blocked'
}

class Result extends Element {
    constructor(id) {
        super(id)
    }

    resetState() {
        this.element.classList.remove(resultClasses.SUCCESS, resultClasses.BLOCKED)
        this.element.innerText = ''
    }

    allow() {
        this.element.classList.add(resultClasses.SUCCESS)
        this.element.innerText = 'Доступ разрешен'
    }

    block() {
        this.element.classList.add(resultClasses.BLOCKED)
        this.element.innerText = 'Доступ заблокирован'
    }
    
}

const appClasses = {
    CORRECT: 'correct',
    WRONG: 'wrong',
    BLOCKED: 'block'
}

export default class App extends Element {
    constructor(id) {
        super(id)
        this.result = new Result('result')
    }

    toggleUpdate(ms) {
        this.resetState()
        this.element.classList.toggle('set')
        setTimeout(() => this.element.classList.toggle('set'), ms)
    }

    correct() {
        this.result.allow()
        this.element.classList.add(appClasses.CORRECT)
    }

    wrong() {
        this.element.classList.add(appClasses.WRONG)
        setTimeout(() => {
            this.element.classList.remove(appClasses.WRONG)
        }, 1000)
    }

    resetState() {
        this.result.resetState()
        this.element.classList.remove(appClasses.BLOCKED)
    }

    block() {
        this.element.classList.add(appClasses.BLOCKED)
        this.result.block()
    }
}