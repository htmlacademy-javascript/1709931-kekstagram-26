import {showAlert} from './util.js';

const Urls = {
  GET: 'https://26.javascript.pages.academy/kekstagram/data',
  POST: 'https://26.javascript.pages.academy/kekstagram'
};

// Получение данных с сервера
const getData = (onSuccess) => {
  fetch(Urls.GET)
    .then((response) => response.ok? response.json() : showAlert('Не удалось получить изображения. Перезагрузите страницу'))
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      showAlert('Не удалось получить изображения. Перезагрузите страницу');
    });
};

// Отправка данных на сервер
const sendData = (onSuccess, onFail, body) => {
  fetch(
    Urls.POST,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => response.ok? onSuccess() : onFail())
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};
