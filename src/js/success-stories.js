import iconsUrl from '../img/icons.svg?url';
import axios from 'axios';
import iziToast from 'izitoast';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BASE_URL = 'https://paw-hut.b.goit.study';

async function fetchFeedbacks() {
  const response = await axios.get(`${BASE_URL}/api/feedbacks?limit=6`);
  return response.data.feedbacks;
}

const storiesList = document.querySelector('.success-stories-list');

function renderStars(rate) {
  const full = Math.floor(rate);
  const half = rate % 1 === 0.5;

  return `<div class="success-stories-review-stars">
    ${Array(5)
      .fill(null)
      .map((_, i) => {
        let id;
        if (i < full) id = 'icon-star-filled';
        else if (i === full && half) id = 'icon-star-half';
        else id = 'icon-star-outline';

        return `<svg width="20" height="20"><use href="${iconsUrl}#${id}"></use></svg>`;
      })
      .join('')}
  </div>`;
}

function renderFeedbacks(feedbacks) {
  const markup = feedbacks
    .map(({ author, rate, description }) => {
      return `
        <li class="swiper-slide success-stories-review-card">
          ${renderStars(rate)}
          <p class="success-stories-review-text">${description}</p>
          <p class="success-stories-review-author">${author}</p>
        </li>`;
    })
    .join('');
  storiesList.innerHTML = markup;
}

async function getFeedbacks() {
  const loader = document.createElement('div');
  loader.classList.add('loader');
  try {
    storiesList.after(loader);
    const feedbacks = await fetchFeedbacks();
    renderFeedbacks(feedbacks);
    const swiper = new Swiper('.success-stories-swiper', {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 32,
      dynamicBullets: true,
      navigation: {
        nextEl: '.success-stories-button-next',
        prevEl: '.success-stories-button-prev',
      },
      pagination: {
        el: '.success-stories-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
        1440: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
      },
    });
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
