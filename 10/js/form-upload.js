import {isEscapeKey} from './util.js';
import {resetEffect} from './photo-effect.js';
import {initScaleValue} from './photo-scale.js';

const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const uploadedFile = form.querySelector('#upload-file');
const uploadedPhoto = form.querySelector('.img-upload__overlay');
const closeButton = form.querySelector('#upload-cancel');

// Загрузка фото
uploadedFile.addEventListener('change', () => {
  uploadedPhoto.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onModalClose);
  resetEffect(); // Сбрасывает фильтры на начальном фото
  initScaleValue(); // Сбрасывает масштаб фото на 100% при открытии
});

// Закрытие модального окна с загруженным фото
const closeUploadedPhoto = () => {
  uploadedPhoto.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalClose);
  form.reset();
};

function onModalClose(evt) {
  if (isEscapeKey(evt)) {
    closeUploadedPhoto();
  }
}

closeButton.addEventListener('click', () => {
  closeUploadedPhoto();
});

export {closeUploadedPhoto};
