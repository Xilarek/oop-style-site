import MainSlider from './modules/slider/slider-main';
import MiniSlider from './modules/slider/slider-mini';
import VideoPlayer from './modules/playVideo';
import Difference from './modules/difference';
import Form from './modules/form';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({btns: '.next', container: '.page', nextmodule: '.nextmodule', prevmodule: '.prevmodule'});
    slider.render();

    const modulePageSlider = new MainSlider({container: '.moduleapp', btns: '.next'});
    modulePageSlider.render();

    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true
    });

    showUpSlider.init();

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        activeClass: 'card-active',
        animate: true,
        autoPlay: true,
        next: '.modules__info-btns .slick-next'
    });

    modulesSlider.init();

    const feeddSlider = new MiniSlider({
        container: '.feed__slider',
        prev: '.feed__slider .slick-prev',
        activeClass: 'feed__item-active',
        next: '.feed__slider .slick-next'
    });

    feeddSlider.init();


    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();

    new Difference('.officerold', '.officernew', '.officer__card-item').init();
    new Form('.form').init();
});