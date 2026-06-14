import axios from 'axios';
import Swal from 'sweetalert2';

const backdrop = document.querySelector('.backdrop');
const modal =
  document.querySelector('.order-modal .modal') ||
  document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');
const form = document.querySelector('.modal form');
const openBtn = document.querySelector('.open-btn');

let currentPetId = null;

openBtn.addEventListener('click', openModal);

function openModal(petId) {
  currentPetId = petId;
  backdrop.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

// функція відкриття модалки та отримання id з модалки де треба вибирати тваринок

function closeModal() {
  backdrop.classList.remove('is-open');
  document.body.style.overflow = '';
  form.reset();
  clearErrors();
}

closeBtn.addEventListener('click', closeModal);

backdrop.addEventListener('click', e => {
  if (e.target === backdrop) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && backdrop.classList.contains('is-open')) {
    closeModal();
  }
});

function clearErrors() {
  form
    .querySelectorAll('.input, .textarea')
    .forEach(el => el.classList.remove('error'));
  form.querySelectorAll('.error-text').forEach(el => el.remove());
}

function showError(field, message) {
  field.classList.add('error');
  const errorText = document.createElement('p');
  errorText.className = 'error-text';
  errorText.textContent = message;
  field.insertAdjacentElement('afterend', errorText);
}

function validateForm(data) {
  clearErrors();
  let isValid = true;

  const nameInput = form.querySelector('#name');
  const telInput = form.querySelector('#tel');

  if (!data.name.trim()) {
    showError(nameInput, "Введіть ім'я");
    isValid = false;
  }

  if (!/^\+?\d{9,15}$/.test(data.phone)) {
    showError(telInput, 'Введіть коректний номер телефону');
    isValid = false;
  }

  return isValid;
}

form.addEventListener('submit', async e => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = {
    name: formData.get('name'),
    phone: formData.get('tel'),
    animalId: currentPetId,
    comment: formData.get('comment'),
  };

  if (!validateForm(data)) return;

  try {
    await axios.post('https://paw-hut.b.goit.study/api-docs/orders', data);

    Swal.fire({
      icon: 'success',
      title: 'Заявку відправлено!',
      text: "Дякуємо, ми скоро з вами зв'яжемось.",
    });

    closeModal();
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Помилка',
      text: 'Не вдалося відправити заявку. Спробуйте ще раз.',
    });
  }
});
