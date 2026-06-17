import { openOrderModal } from './order-modal.js';

const backdrop = document.querySelector('#animal-modal');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal-close');
const adoptBtn = document.querySelector('.btn-adopt');

const animalImg = document.querySelector('.animal-img');
const animalType = document.querySelector('.animal-type');
const animalName = document.querySelector('.animal-name');
const animalAge = document.querySelector('.animal-age');
const animalGender = document.querySelector('.animal-gender');
const animalDescription = document.querySelector('.animal-description');
const animalHealth = document.querySelector('.animal-health');
const animalBehavior = document.querySelector('.animal-behavior');

let currentAnimal = null;

function renderAnimalModal(animal) {
  animalImg.src = animal.image || '';
  animalImg.alt = animal.name || 'Фото тварини';

  animalType.textContent = animal.species || '';
  animalName.textContent = animal.name || '';

  animalAge.textContent = animal.age || 'Невідомий вік';
  animalGender.textContent = animal.gender || 'Невідома стать';

  animalDescription.textContent =
    animal.description || animal.shortDescription || 'Опис відсутній';

  animalHealth.textContent = animal.healthStatus || 'Інформація відсутня';

  animalBehavior.textContent = animal.behavior || 'Інформація відсутня';
}

/* 
   Відкрити модалку
*/
export function openAnimalModal(animal) {
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

  openOrderModal(currentAnimal);
});
