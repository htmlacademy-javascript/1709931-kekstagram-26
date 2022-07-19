import {renderThumbnails} from './thumbnail.js';
import {debounce} from './util.js';

const POSTS_NUMBER = 10;

const defaultFilterButton = document.querySelector('#filter-default');
const randomFilterButton = document.querySelector('#filter-random');
const discussedFilterButton = document.querySelector('#filter-discussed');
const photoFilter = document.querySelector('.img-filters');

// Добавляем класс активной кнопке
const getActiveButton = (currentButton) => {
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  currentButton.classList.add('img-filters__button--active');
};

// Фотографии в изначальном порядке
const getDefaultPosts = (posts) => posts.slice();

// 10 случайных фотографий
const getRandomPosts = (posts) => posts.slice().sort(() => 0.5 - Math.random()).slice(0, POSTS_NUMBER);

// Сортировка в порядке убывания количества комментариев
const getDisscussedPosts = (posts) => posts.slice().sort((post1, post2) => post2.comments.length - post1.comments.length);

// Удаление отрисованных фотографий
const clearPhotos = () => {
  const postsList = document.querySelectorAll('.picture');
  postsList.forEach((photo) => photo.remove());
};

// Обновление фотографий
const updatePhotos = (posts) => {
  clearPhotos();
  renderThumbnails(posts);
};

// Устранение дребезжания
const debouncedFilter = debounce(updatePhotos);

// Фильтр для сортировки
const createFilters = (posts) => {
  photoFilter.classList.remove('img-filters--inactive');

  defaultFilterButton.addEventListener('click', (evt) => {
    getActiveButton(evt.target);
    debouncedFilter(getDefaultPosts(posts));
  });

  randomFilterButton.addEventListener('click', (evt) => {
    getActiveButton(evt.target);
    debouncedFilter(getRandomPosts(posts));
  });

  discussedFilterButton.addEventListener('click', (evt) => {
    getActiveButton(evt.target);
    debouncedFilter(getDisscussedPosts(posts));
  });
};

export {createFilters};
