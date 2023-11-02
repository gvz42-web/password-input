export default class Element {
    constructor(id) {
        this.element = document.getElementById(id)
    }

    set text(value) {
        this.element.innerText = value
    }
}