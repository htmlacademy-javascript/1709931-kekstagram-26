import {renderThumbnails} from './thumbnail.js';
import {getData} from './api.js';
import {setUserFormSubmit} from './form-validation.js';
import {submitSuccessForm, submitErrorForm} from './form-messages.js';
import {createFilters} from './photo-filter.js';

// Получение данных с сервера
getData((posts) => {
  renderThumbnails(posts);
  createFilters(posts);
});

// Отправка данных из формы на сервер
setUserFormSubmit(submitSuccessForm, submitErrorForm);
