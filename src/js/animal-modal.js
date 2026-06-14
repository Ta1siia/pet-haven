const BASE_URL = 'https://paw-hut.b.goit.study/api';

const backdrop = document.querySelector('#animal-modal');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal-close');
const adoptBtn = document.querySelector('.btn-adopt');

const animalImg = document.querySelector('.animal-img');
const animalType = document.querySelector('.animal-type');
const animalName = document.querySelector('.animal-name');
const animalMeta = document.querySelector('.animal-meta');
const animalDescription = document.querySelector('.animal-description');
const animalHealth = document.querySelector('.animal-health');
const animalBehavior = document.querySelector('.animal-behavior');

let currentAnimal = null;

/* 
   Отримання даних тварини
*/

async function getAnimalById(id) {
  try {
    const response = await fetch(`${BASE_URL}/animals/${id}`);

    if (!response.ok) {
      throw new Error('Помилка отримання даних');
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

/* 
   Заповнення модалки
 */

function renderAnimalModal(animal) {
  animalImg.src = animal.imgURL || '';
  animalImg.alt = animal.name || 'Animal photo';

  animalType.textContent = animal.species || '';
  animalName.textContent = animal.name || '';

  animalMeta.textContent =
    `${animal.age || 'Невідомий вік'} • ${animal.sex || 'Невідома стать'}`;

  animalDescription.textContent =
    animal.comment || 'Опис відсутній';

  animalHealth.innerHTML = `
    <strong>Здоров'я:</strong>
    ${animal.health || 'Інформація відсутня'}
  `;

  animalBehavior.innerHTML = `
    <strong>Поведінка:</strong>
    ${animal.behavior || 'Інформація відсутня'}
  `;
}

/* 
   Відкрити модалку
 */

async function openAnimalModal(id) {
  const animal = await getAnimalById(id);

  if (!animal) return;

  currentAnimal = animal;

  renderAnimalModal(animal);

  backdrop.classList.remove('is-hidden');

  document.body.style.overflow = 'hidden';

  document.addEventListener('keydown', handleEsc);
}

/* 
   Закрити модалку
 */

function closeAnimalModal() {
  backdrop.classList.add('is-hidden');

  document.body.style.overflow = '';

  document.removeEventListener('keydown', handleEsc);
}

/* 
   Escape
*/

function handleEsc(event) {
  if (event.key === 'Escape') {
    closeAnimalModal();
  }
}

/* 
   Закриття кнопкою X
 */

closeBtn.addEventListener('click', closeAnimalModal);

/* 
   Закриття по backdrop
*/

backdrop.addEventListener('click', event => {
  if (event.target === backdrop) {
    closeAnimalModal();
  }
});

/* 
   Кнопка Взяти додому
*/

adoptBtn.addEventListener('click', () => {
  closeAnimalModal();

  // тут відкривається друга модалка
  // openApplicationModal(currentAnimal);

  console.log('Відкрити форму заявки', currentAnimal);
});

/* 
   Відкриття з картки
*/

document.addEventListener('click', event => {
  const card = event.target.closest('.animal-card');

  if (!card) return;

  const animalId = card.dataset.id;

  if (!animalId) return;

  openAnimalModal(animalId);
});