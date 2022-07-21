import {isEscapeKey} from './util.js';
import {resetEffect} from './photo-effect.js';
import {initScaleValue} from './photo-scale.js';

const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const uploadedFile = form.querySelector('#upload-file');
const uploadedPhoto = form.querySelector('.img-upload__overlay');
const closeButton = form.querySelector('#upload-cancel');

// Загрузка фото
const onPhotoUpload = () => {
  uploadedPhoto.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onModalEscClose);
  resetEffect(); // Сбрасывает фильтры на начальном фото
  initScaleValue(); // Сбрасывает масштаб фото на 100% при открытии
};

uploadedFile.addEventListener('change', onPhotoUpload);

// Закрытие модального окна с загруженным фото
const closeUploadedPhoto = () => {
  uploadedPhoto.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalEscClose);
  form.reset();
};

function onModalEscClose(evt) {
  if (isEscapeKey(evt) && !body.contains(document.querySelector('.error'))) {
    closeUploadedPhoto();
  }
}

// Закрытие модального окна по кнопке
const onModalButtonClose = () => {
  closeUploadedPhoto();
};

closeButton.addEventListener('click', onModalButtonClose);

export {closeUploadedPhoto};
