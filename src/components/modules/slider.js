import Swiper from 'swiper'
import "swiper/css/swiper.min.css"

export function mainSlider() {

    var mySwiper = new Swiper('.main-slider-container.swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next.main-slider-button-next',
            prevEl: '.swiper-button-prev.main-slider-button-prev',
        },
        pagination: {
            el: '.main-slider-pagination.swiper-pagination',
            type: 'bullets',
            clickable: 'true'
        },
    })

}