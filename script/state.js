import Element from "./element.js"

export default class State {
    constructor() {
        this.$password = localStorage.getItem('password') || '000000'
        this.$attepmts = localStorage.getItem('attempts') || 3
        this.$attepmts = Number(this.$attepmts)
        this.attemptsInfo = new Element('tries')
        this.updateText()
    }

    updateText() {
        this.attemptsInfo.text = `ОСТАЛОСЬ ${this.$attepmts} ПОПЫТ${this.$attepmts === 1 ? 'КА' : 'КИ'}`
        if (!this.$attepmts) {
            this.attemptsInfo.text = 'ПОПЫТКИ ЗАКОНЧИЛИСЬ'
        }
    }

    set password(value) {
        this.$password = value
        localStorage.setItem('password', this.$password)
        this.resetAttempts()
        this.updateText()
    }

    set attempts(attempts) {
        if (attempts >= 0) {
            this.$attepmts = attempts
            localStorage.setItem('attempts', this.$attepmts)
            this.updateText()
        }
    }

    get attempts() {
        return this.$attepmts
    }

    decreaseAttepmts() {
        this.attempts -= 1
    }

    resetAttempts() {
        this.attempts = 3
        this.updateText()
    }

    get hasAttempts() {
        return this.attempts > 0 ? true : false
    }

    checkPassword(value) {
        return value === this.$password
    }
}