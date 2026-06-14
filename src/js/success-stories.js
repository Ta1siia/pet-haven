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
  <li class="swiper-slide review-card">
    ${renderStars(rate)}
    <p class="review-text">${description}</p>
    <p class="review-author">${author}</p>
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
    const swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: '.success-stories-button-next',
        prevEl: '.success-stories-button-prev',
      },
      pagination: {
        el: '.success-stories-pagination',
        clickable: true,
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
