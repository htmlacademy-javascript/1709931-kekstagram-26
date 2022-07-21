import {renderThumbnails} from './photo-thumbnail.js';
import {debounce} from './util.js';

const POST_NUMBERS = 10;
const RERENDER_DELAY = 500;

const photoFilter = document.querySelector('.img-filters');
const filterButtons = photoFilter.querySelectorAll('button');

// Добавляем класс активной кнопке
const getActiveButton = (currentButton) => {
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  currentButton.classList.add('img-filters__button--active');
};

// Связываем id кнопки с функцией
const FiltersFunctions = {
  'filter-default': (posts) => posts.slice(), // Фотографии в изначальном порядке
  'filter-random': (posts) => posts.slice().sort(() => 0.5 - Math.random()).slice(0, POST_NUMBERS), // 10 случайных фотографий
  'filter-discussed': (posts) => posts.slice().sort((post1, post2) => post2.comments.length - post1.comments.length) // Сортировка в порядке убывания количества комментариев
};

// Удаление отрисованных фотографий
const clearPhotos = () => {
  const postsList = document.querySelectorAll('.picture');
  postsList.forEach((photo) => photo.remove());
};

// Устранение дребезжания
const debouncedFilter = debounce((id, posts) => {
  clearPhotos();
  renderThumbnails(FiltersFunctions[id](posts));
}, RERENDER_DELAY);

// Фильтр для сортировки
const createFilters = (posts) => {
  photoFilter.classList.remove('img-filters--inactive');

  const onFilterButtonClick = (evt) => {
    getActiveButton(evt.target);
    debouncedFilter(evt.target.id, posts);
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', onFilterButtonClick);
  });
};

export {createFilters};
