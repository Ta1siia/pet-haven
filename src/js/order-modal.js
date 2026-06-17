import axios from 'axios';
import Swal from 'sweetalert2';

const backdrop = document.querySelector('.order-modal-backdrop');
const modal = document.querySelector('.order-modal');
const closeBtn = document.querySelector('.close-btn');
const form = document.querySelector('.order-modal form');

let currentAnimalId = null;

export function openOrderModal(animal) {
  currentAnimalId = typeof animal === 'object' ? animal._id : animal;

  backdrop.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

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

  if (!/^[0-9]{12}$/.test(data.phone.trim())) {
    showError(telInput, 'Введіть коректний номер телефону');
    isValid = false;
  }

  return isValid;
}

form.addEventListener('submit', async e => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = {
    name: formData.get('name').trim(),
    phone: formData.get('tel').trim(),
    animalId: String(currentAnimalId),
    comment: formData.get('comment')?.trim() || 'Без коментаря',
  };

  if (!validateForm(data)) return;

  try {
    await axios.post('https://paw-hut.b.goit.study/api/orders', data);

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
