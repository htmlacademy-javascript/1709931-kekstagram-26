import {isEscapeKey} from './util.js';
import {closeUploadedPhoto} from './form-upload.js';

const body = document.querySelector('body');
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const successMessageElement = successMessageTemplate.cloneNode(true);
const successButton = successMessageElement.querySelector('.success__button');

const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const errorMessageElement = errorMessageTemplate.cloneNode(true);
const errorButton = errorMessageElement.querySelector('.error__button');

// Функция показа сообщения об ошибке
const showErrorMessage = () => {
  body.classList.add('modal-open');
  body.append(errorMessageElement);
  // Закрытие сообщения об ошибке по ESC
  document.addEventListener('keydown', onErrorMessageEscClose);
  // Закрытие сообщения об ошибке по клику в любой области
  document.addEventListener('click', onErrorMessageClickClose);
};

// Функция закрытия сообщения об ошибке
const closeErrorMessage = () => {
  errorMessageElement.remove();
  document.removeEventListener('keydown', onErrorMessageEscClose);
  document.removeEventListener('click', onErrorMessageClickClose);
};

// Закрытие сообщения об ошибке по кнопке
errorButton.addEventListener('click', () => closeErrorMessage());

// Обработчики для закрытия сообщения об успешной отправке
function onErrorMessageEscClose(evt) {
  if (isEscapeKey(evt)) {
    closeErrorMessage();
  }
}

function onErrorMessageClickClose(evt) {
  if (evt.target === errorMessageElement) {
    closeErrorMessage();
  }
}

// Функция показа сообщения об успешной отправке
const showSuccessMessage = () => {
  body.classList.add('modal-open');
  body.append(successMessageElement);
  // Закрытие сообщения об успехе по ESC
  document.addEventListener('keydown', onSuccessMessageEscClose);
  // Закрытие сообщения об успехе по клику в любой области
  document.addEventListener('click', onSuccessMessageClickClose);
};

// Функция закрытия сообщения об успешной отправке
const closeSuccessMessage = () => {
  body.classList.remove('modal-open');
  successMessageElement.remove();
  document.removeEventListener('keydown', onSuccessMessageEscClose);
  document.removeEventListener('click', onSuccessMessageClickClose);
};

// Закрытие сообщения об успехе по кнопке
successButton.addEventListener('click', () => closeSuccessMessage());

// Обработчики для закрытия сообщения об успешной отправке
function onSuccessMessageEscClose(evt) {
  if (isEscapeKey(evt)) {
    closeSuccessMessage();
  }
}

function onSuccessMessageClickClose(evt) {
  if (evt.target === successMessageElement) {
    closeSuccessMessage();
  }
}

// Функция для отправки данных без ошибки
const submitSuccessForm = () => {
  closeUploadedPhoto();
  showSuccessMessage();
};

// Функция для отправки данных с ошибкой
const submitErrorForm = () => {
  showErrorMessage();
};

export {submitSuccessForm, submitErrorForm};
