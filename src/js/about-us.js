import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.about-swiper', {
  modules: [Navigation, Pagination],

  slidesPerView: 1,

  navigation: {
    nextEl: '.about-next',
    prevEl: '.about-prev',
  },

  pagination: {
    el: '.about-us-swiper-pagination',
  },
});
