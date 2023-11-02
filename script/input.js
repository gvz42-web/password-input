import Element from './element.js'

export default class Input extends Element{
    constructor(id) {
        super(id)
    }

    toggleDisable() {
        this.element.disabled = !this.element.disabled 
    }

    toggleUpdate(ms) {
        this.element.placeholder = this.element.placeholder === 'Пароль установлен' ? 'Введите пароль' : 'Пароль установлен'
        setTimeout(() => this.element.placeholder = this.element.placeholder === 'Пароль установлен' ? 'Введите пароль' : 'Пароль установлен', ms)
        
    }

    clear() {
        this.element.value = ''
    }

    get value() {
        return this.element.value
    }

    listenEnter(callback) {
        this.element.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                callback()
            }
        })
    }
}