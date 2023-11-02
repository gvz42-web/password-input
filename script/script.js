import App from "./app.js"
import Input from "./input.js"
import State from "./state.js"

const input = new Input('input')
const app = new App('app')
const state = new State()

if (state.attempts === 0) {
    app.block()
}

input.listenEnter(() => {
    const passwordInput = input.value

    if (input.value.includes('setcode')) {
        state.password = input.value.slice(7)
        app.toggleUpdate(1000)
        input.toggleUpdate(1000)
    } else if (state.checkPassword(passwordInput) && state.hasAttempts) {
        app.correct()
        input.toggleDisable()
        state.resetAttempts()
    } else {
        app.wrong()
        state.decreaseAttepmts()
        if (!state.hasAttempts) {
            app.block()
        }
    }

    input.clear()
})

