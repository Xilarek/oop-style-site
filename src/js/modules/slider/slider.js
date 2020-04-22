export default class Slider {
    constructor({
        container = null,
        btns = null,
        next = null,
        prev = null,
        nextmodule = null,
        prevmodule = null,
        activeClass = '',
        animate,
        autoPlay
        } = {}) {
        this.container = document.querySelector(container);
        try { this.slides = this.container.children;}catch(e){}
        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelector(prev);
        this.prevmodule = document.querySelectorAll(prevmodule);
        this.nextmodule = document.querySelectorAll(nextmodule);
        this.next = document.querySelector(next);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoPlay = autoPlay;
        this.slideIndex = 1;
    }

    
}