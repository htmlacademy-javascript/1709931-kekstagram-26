import {renderThumbnails} from './thumbnail.js';
import {getData} from './api.js';
import {setUserFormSubmit} from './form-validation.js';
import {submitSuccessForm, submitErrorForm} from './form-messages.js';

// Получение данных с сервера
getData(renderThumbnails);

// Отправка данных из формы на сервер
setUserFormSubmit(submitSuccessForm, submitErrorForm);
