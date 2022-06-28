import {isEscapeKey} from './util.js';

const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const uploadedFile = form.querySelector('#upload-file');
const uploadedPhoto = form.querySelector('.img-upload__overlay');
const closeButton = form.querySelector('#upload-cancel');

uploadedFile.addEventListener('change', () => {
  uploadedPhoto.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onModalClose);
});

const closeUploadedImg = () => {
  uploadedPhoto.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalClose);
  form.reset();
};

function onModalClose(evt) {
  if (isEscapeKey(evt)) {
    closeUploadedImg();
  }
}

closeButton.addEventListener('click', () => {
  closeUploadedImg();
});
