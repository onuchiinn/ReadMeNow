import Swiper from 'swiper/js/swiper.min';
import "swiper/swiper.scss";


const mainSlider = new Swiper('.main-slider__container', {
	autoplay: {
    delay: 5000,
	},
	pagination: {
    el: '.main-slider__pagination ',
		type: 'bullets',
		clickable: true,
		bulletClass: 'main-slider__pagination-bullet',
		bulletActiveClass: 'main-slider__pagination-bullet-active',
  },
});


export default mainSlider;