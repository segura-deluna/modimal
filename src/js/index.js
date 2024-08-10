// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle'

// import styles bundle
import 'swiper/css/bundle'

// Initialize Swiper
const cardSwiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 24,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})

// Мобильная навигация
import mobileNav from './modules/mobile-nav.js'
mobileNav()
