import axios from 'axios';
import { openAnimalModal } from './animal-modal.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import {
  getItemsPerPage,
  isEndOfList,
  updateActiveCategory,
} from './exstra-pets.js';

axios.defaults.baseURL = 'https://paw-hut.b.goit.study';

const petsList = document.querySelector('#pets-list');
const categoriesList = document.querySelector('.categories-list');
const loadMoreBtn = document.querySelector('#load-more-btn');

const pagination = document.querySelector('#pets-pagination');
const paginationList = document.querySelector('#pets-pagination-list');
const prevBtn = document.querySelector('#pets-prev-btn');
const nextBtn = document.querySelector('#pets-next-btn');

const loader = document.querySelector('#pets-loader');

let page = 1;
let limit = getItemsPerPage();
let totalItems = 0;
let currentCategory = null;
let loadedAnimals = [];

async function getAnimals(page, limit, categoryId = null) {
  const params = { page, limit };

  if (categoryId) {
    params.categoryId = categoryId;
  }

  const { data } = await axios.get('/api/animals', { params });
  return data;
}

async function getCategories() {
  const { data } = await axios.get('/api/categories');
  return data;
}

function usePagination() {
  return window.innerWidth >= 768;
}

function getTotalPages() {
  return Math.ceil(totalItems / limit);
}

function showLoader() {
  loader.classList.add('is-visible');
}

function hideLoader() {
  loader.classList.remove('is-visible');
}

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
      }) => {
        const categoryMarkup = categories
          .map(category => `<li class="category-tag">${category.name}</li>`)
          .join('');

        return `
          <li class="pet-card" data-id="${_id}">
            <img src="${image}" alt="${name}" class="pet-img" />

            <div class="pet-content">
              <p class="pet-species">${species}</p>

              <h3 class="pet-name">${name}</h3>

              <ul class="category-tag-list">
                ${categoryMarkup}
              </ul>

              <ul class="age-gender">
                <li class="pet-age">${age}</li>
                <li class="pet-gender">${gender}</li>
              </ul>

              <p class="pet-desc">${shortDescription ?? ''}</p>
            </div>

            <button class="more-btn" data-id="${_id}" type="button">
              Дізнатись більше
            </button>
          </li>
        `;
      }
    )
    .join('');

  if (append) {
    petsList.insertAdjacentHTML('beforeend', markup);
  } else {
    petsList.innerHTML = markup;
  }
}

function renderPagination() {
  const totalPages = getTotalPages();

  if (!usePagination() || totalPages <= 1) {
    pagination.classList.add('hidden');
    paginationList.innerHTML = '';
    return;
  }

  pagination.classList.remove('hidden');

  paginationList.innerHTML = Array.from({ length: totalPages }, (_, index) => {
    const pageNumber = index + 1;

    return `
      <li>
        <button
          class="pets-pagination-page ${pageNumber === page ? 'active' : ''}"
          type="button"
          data-page="${pageNumber}"
          aria-label="Сторінка ${pageNumber}"
        >
          ${pageNumber}
        </button>
      </li>
    `;
  }).join('');

  prevBtn.disabled = page === 1;
  nextBtn.disabled = page === totalPages;
}

function toggleControls() {
  const endOfList = isEndOfList(page, limit, totalItems);

  if (usePagination()) {
    loadMoreBtn.classList.add('hidden');
    renderPagination();
    return;
  }

  pagination.classList.add('hidden');

  if (endOfList) {
    loadMoreBtn.classList.add('hidden');
  } else {
    loadMoreBtn.classList.remove('hidden');
  }
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
    toggleControls();
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

petsList.addEventListener('click', event => {
  const btn = event.target.closest('.more-btn');

  if (!btn) return;

  const animal = loadedAnimals.find(animal => animal._id === btn.dataset.id);

  if (!animal) return;

  openAnimalModal(animal);
});

categoriesList.addEventListener('click', async event => {
  const btn = event.target.closest('.category-btn');

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

prevBtn.addEventListener('click', async () => {
  if (page === 1) return;

  page -= 1;
  await loadPets(true);
});

nextBtn.addEventListener('click', async () => {
  const totalPages = getTotalPages();

  if (page >= totalPages) return;

  page += 1;
  await loadPets(true);
});

paginationList.addEventListener('click', async event => {
  const btn = event.target.closest('.pets-pagination-page');

  if (!btn) return;

  const selectedPage = Number(btn.dataset.page);

  if (selectedPage === page) return;

  page = selectedPage;
  await loadPets(true);
});

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
