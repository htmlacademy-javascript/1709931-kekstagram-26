import {renderThumbnails} from './thumbnail.js';
import {getData} from './api.js';
import {setUserFormSubmit} from './form-validation.js';
import {submitSuccessForm, submitErrorForm} from './form-messages.js';
import {createFilters} from './photo-filter.js';
import {showAlert} from './util.js';

// Получение данных с сервера
getData((posts) => {
  getData(renderThumbnails);
  createFilters(posts);
}, showAlert);

// Отправка данных из формы на сервер
setUserFormSubmit(submitSuccessForm, submitErrorForm);
