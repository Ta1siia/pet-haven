import axios from 'axios';
import { openAnimalModal } from './animal-details-modal';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

axios.defaults.baseURL = 'https://paw-hut.b.goit.study';

const petsList = document.querySelector('#pets-list');
const categoriesList = document.querySelector('.categories-list');
const loadMoreBtn = document.querySelector('#load-more-btn');


let page = 1;
let limit = getLimit();
let totalItems = 0;
let currentCategory = null;

const loader = document.querySelector('#loader');

/* 
   API
 */
async function getAnimals(page, limit, categoryId = null) {
  const params = {
    page,
    limit,
  };

  if (categoryId) {
    params.categoryId = categoryId;
  }

  const { data } = await axios.get('/api/animals', {
    params,
  });

  return data;
}

async function getCategories() {
  const { data } = await axios.get('/api/categories');
  return data;
}

function getLimit() {
  return window.innerWidth >= 1440 ? 9 : 8;
}

function isEndOfList() {
  return page * limit >= totalItems;
}


petsList.addEventListener('click', e => {
  const btn = e.target.closest('.more-btn');

  if (!btn) return;

  openAnimalModal(btn.dataset.id);
});

function renderPets(animals, append = false) {
  const markup = animals
    .map(
      ({
        _id,
        image,
        species,
        name,
        categories,
        age,
        gender,
        shortDescription,
      }) => `
     <li class="pet-card" data-id="${_id}">
  <img src="${image}" alt="${name}" class="pet-img"/>

  <div class="pet-content">
    <p class="pet-species">${species}</p>

    <h3 class="pet-name">${name}</h3>

    <ul class="category-tag-list">
      ${categories
        .map(category => `<li class="category-tag">${category.name}</li>`)
        .join('')}
    </ul>

    <ul class="age-gender">
      <li class="pet-age">${age}</li>
      <li class="pet-gender">${gender}</li>
    </ul>

    <p class="pet-desc">${shortDescription ?? ''}</p>
  </div>

  <button class="more-btn" data-id="${_id}">
    Дізнатись більше
  </button>
</li>
    `
    )
    .join('');

  if (append) {
    petsList.insertAdjacentHTML('beforeend', markup);
  } else {
    petsList.innerHTML = markup;
  }
}

function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}

async function loadPets(reset = false) {
  try {
    showLoader();

    limit = getLimit();

    const data = await getAnimals(
      page,
      limit,
      currentCategory
    );

    totalItems = data.totalItems;

    renderPets(data.animals, !reset);

    toggleLoadMoreBtn();
  } catch (error) {
    iziToast.error({
      title: 'Помилка',
      message: 'Не вдалося завантажити дані.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}


function toggleLoadMoreBtn() {
  if (isEndOfList()) {
    loadMoreBtn.classList.add('hidden');
  } else {
    loadMoreBtn.classList.remove('hidden');
  }
}


async function init() {
  try {
    const categories = await getCategories();

    renderCategories(categories);

    await loadPets(true);
  } catch (error) {
    iziToast.error({
      title: 'Помилка',
      message: 'Не вдалося завантажити дані.',
      position: 'topRight',
    });
  }
}
init();
/* 
   фільтрація
 */
categoriesList.addEventListener('click', async e => {
  const btn = e.target.closest('.category-btn');

  if (!btn) return;

  document
    .querySelectorAll('.category-btn')
    .forEach(btn =>
      btn.classList.remove('active')
    );

  btn.classList.add('active');

  page = 1;

  currentCategory =
    btn.dataset.categoryId || null;

  await loadPets(true);
});





loadMoreBtn.addEventListener('click', async () => {
  page += 1;

  const data = await getAnimals(page, getLimit(), currentCategory);

  totalItems = data.totalItems;

  renderPets(data.animals, true);

  toggleLoadMoreBtn();
});


let resizeTimer;
window.addEventListener('resize', () => {
clearTimeout(resizeTimer);
resizeTimer = setTimeout(() => {
page = 1;
loadPets(false);
}, 300);
});


function renderCategories(categories) {
  const markup = `
    <li>
      <button
        class="category-btn active"
        data-category-id=""
      >
        Всі
      </button>
    </li>

    ${categories
      .map(
        category => `
          <li>
            <button
              class="category-btn"
              data-category-id="${category._id}"
            >
              ${category.name}
            </button>
          </li>
        `
      )
      .join('')}
  `;

  categoriesList.innerHTML = markup;
}
