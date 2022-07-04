import {isEscapeKey} from './util.js';

const MAX_HASHTAGS_COUNT = 5;

const MessagesHashtagsError = {
  INVALID: 'Невалидный хэштег',
  IDENTICAL:'Одинаковые хэштеги не могут быть использованы',
  PLENTY: 'Нельзя указать более 5 хэштегов',
};

const form = document.querySelector('.img-upload__form');
const hashtag = form.querySelector('.text__hashtags');
const description = form.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__form', // Куда добавляем класс от pristine
  errorTextParent: 'img-upload__field-wrapper', // Обертка, куда вставляется текст с ошибкой
});

const validateHashtags = (value) => {
  if (value === '') {
    return true;
  }

  const arrayHashtags = value.trim().toLowerCase().split(' ');
  return arrayHashtags.every((text) => /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/.test(text));
};

const validateUniqueHashtags = (value) => {
  const arrayHashtags = value.trim().toLowerCase().split(' ');
  return arrayHashtags.length === (new Set(arrayHashtags)).size;
};

const validateHashtagsCounts = (value) => {
  const arrayHashtags = value.trim().toLowerCase().split(' ');
  return arrayHashtags.length <= MAX_HASHTAGS_COUNT;
};

// Валидация Pristine
pristine.addValidator(hashtag, validateHashtags, MessagesHashtagsError.INVALID);
pristine.addValidator(hashtag, validateUniqueHashtags, MessagesHashtagsError.IDENTICAL);
pristine.addValidator(hashtag, validateHashtagsCounts, MessagesHashtagsError.PLENTY);

form.addEventListener('submit', (evt) => {
  // evt.preventDefault();
  pristine.validate();
});

const onFocusInputEsc = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

hashtag.addEventListener('keydown', onFocusInputEsc);
description.addEventListener('keydown', onFocusInputEsc);
