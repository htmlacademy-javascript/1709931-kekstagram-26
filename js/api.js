const Urls = {
  GET: 'https://26.javascript.pages.academy/kekstagram/data',
  POST: 'https://26.javascript.pages.academy/kekstagram'
};

// Получение данных с сервера
const getData = (onSuccess, onFail) => {
  fetch(Urls.GET)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } throw new Error (onFail('Не удалось получить изображения. Обновите страницу'));
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      onFail('Не удалось получить изображения. Обновите страницу');
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
