import Slider from './slider';

export default class MiniSlider extends Slider {
    constructor(container, next, prev, activeClass, animate, autoPlay) {
        super(container, next, prev, activeClass, animate, autoPlay);
    }

    //Метод, который удаляет и добавляет класс активности первому слайду манипулируя текстом и стрелками
    docorizeSlides() {
        this.slides.forEach(slide => {
            slide.classList.remove(this.activeClass);
            if (this.animate) {
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        });

        if (!this.slides[0].closest('button')) {
            this.slides[0].classList.add(this.activeClass);
        }

        if (this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }

    nextSlide() {
        if (this.slides[1].tagName == "BUTTON" && this.slides[2].tagName == "BUTTON") {
            this.container.appendChild(this.slides[0]); // Slide
            this.container.appendChild(this.slides[1]); // btn 
            this.container.appendChild(this.slides[2]); // btn 
            this.docorizeSlides();
        } else if (this.slides[1].tagName == "BUTTON") {
            this.container.appendChild(this.slides[1]); // btn 
            this.container.appendChild(this.slides[2]); // btn 
            this.docorizeSlides();
        } else {
            //Первый элемент перемещаем в конец слайдера
            this.container.appendChild(this.slides[0]);
            this.docorizeSlides();
        }
    }

    bindTriggers() {
        this.next.addEventListener('click', () => this.nextSlide());
        //определяем последний слайд и ставим перед первым его и если элемент будет btn то пропускать его 
        this.prev.addEventListener('click', () => {
            //Перебор элементов массива с конца 
            for (let i = this.slides.length - 1; i > 0; i--) {
                if (this.slides[i].tagName !== "BUTTON") {
                    let active = this.slides[i];
                    this.container.insertBefore(active, this.slides[0]);
                    this.docorizeSlides();
                    break;
                }
            }


        });
    }

    init() {
        try {
            this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
        `

            this.bindTriggers();
            this.docorizeSlides();

            if (this.autoPlay) {
                setInterval(() => this.nextSlide(), 5000);
            }
        } catch(e){}
    }

}