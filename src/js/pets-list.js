import axios from 'axios';
import { openAnimalModal } from './animal-modal.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import {
  getItemsPerPage,
  isEndOfList,
  updateActiveCategory,
} from './extra-pets.js';

axios.defaults.baseURL = 'https://paw-hut.b.goit.study';

const petsList = document.querySelector('#pets-list');
const categoriesList = document.querySelector('.categories-list');
const loadMoreBtn = document.querySelector('#load-more-btn');

let page = 1;
let limit = getItemsPerPage();
let totalItems = 0;
let currentCategory = null;
let loadedAnimals = [];

const loader = document.querySelector('#pets-loader');

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

petsList.addEventListener('click', e => {
  const btn = e.target.closest('.more-btn');

  if (!btn) return;

  const animal = loadedAnimals.find(animal => animal._id === btn.dataset.id);

  if (!animal) return;

  openAnimalModal(animal);
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
  loader.classList.add('is-visible');
}

function hideLoader() {
  loader.classList.remove('is-visible');
}

async function loadPets(reset = false) {
  try {
    showLoader();

    limit = getItemsPerPage();

    const data = await getAnimals(page, limit, currentCategory);

    totalItems = data.totalItems;

    if (reset) {
      loadedAnimals = data.animals;
    } else {
      loadedAnimals.push(...data.animals);
    }

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
  if (isEndOfList(page, limit, totalItems)) {
    loadMoreBtn.classList.add('hidden');
  } else {
    loadMoreBtn.classList.remove('hidden');
  }
}

async function init() {
  try {
    const categories = await getCategories();

    renderCategories(categories);

    page = 1;
    currentCategory = null;

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

  updateActiveCategory(btn);

  page = 1;

  currentCategory = btn.dataset.categoryId || null;

  await loadPets(true);
});

loadMoreBtn.addEventListener('click', async () => {
  page += 1;
  await loadPets(false);
});

function renderCategories(categories) {
  const markup = `
    <li>
      <button
        class="category-btn active"
        data-category-id=""
        type="button"
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
              type="button"
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
