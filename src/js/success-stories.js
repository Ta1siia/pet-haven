import axios from 'axios';
import iziToast from 'izitoast';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'css-star-rating/css/star-rating.css';

const BASE_URL = 'https://paw-hut.b.goit.study';

async function fetchFeedbacks() {
  const response = await axios.get(`${BASE_URL}/feedbacks`);
  return response.data.feedbacks;
}

const storiesList = document.querySelector('.success-stories-list');

function renderStars(rate) {
  const fullStars = Math.floor(rate);
  const hasHalf = rate % 1 === 0.5;
  const halfClass = hasHalf ? ' half' : '';

  const stars = Array(5)
    .fill(null)
    .map(
      () => `
    <div class="star">
      <i class="star-empty"></i>
      <i class="star-half"></i>
      <i class="star-filled"></i>
    </div>`
    )
    .join('');

  return `
    <div class="rating value-${fullStars}${halfClass} star-icon">
      <div class="star-container">
        ${stars}
      </div>
    </div>`;
}

function renderFeedbacks(feedbacks) {
  const markup = feedbacks
    .map(({ author, rate, description }) => {
      return `
  <li class="success-stories-review-card swiper-slide">
    ${renderStars(rate)}
    <p class="success-stories-review-text">${description}</p>
    <p class="success-stories-review-author">${author}</p>
  </li>`;
    })
    .join('');
  storiesList.innerHTML = markup;
}
function initSuccessStoriesSwiper() {
  new Swiper('.success-stories-swiper', {
    modules: [Navigation, Pagination],

    slidesPerView: 1,
    spaceBetween: 24,
    speed: 600,

    pagination: {
      el: '.success-stories-pagination',
      clickable: true,
    },

    navigation: {
      prevEl: '.success-stories-button-prev',
      nextEl: '.success-stories-button-next',
      },
    
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 32,
      },

      1440: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
    },
  });
}

async function getFeedbacks() {
  const loader = document.createElement('div');
  loader.classList.add('loader');
  try {
    storiesList.after(loader);
    const feedbacks = await fetchFeedbacks();
      renderFeedbacks(feedbacks);
      initSuccessStoriesSwiper();
      
    loader.remove();
  } catch {
    loader.remove();
    iziToast.error({
      title: 'Помилка',
      message: 'Не вийшло завантажити відгуки',
    });
  }
}

getFeedbacks();