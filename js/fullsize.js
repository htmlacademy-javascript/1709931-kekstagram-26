import {isEscapeKey} from './util.js';

const MAX_COMMENTS_TO_SHOW = 5;

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('img');
const likesCount = bigPicture.querySelector('.likes-count');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const bigPictureDescription = bigPicture.querySelector('.social__caption');

const commentsItem = bigPicture.querySelector('.social__comment');
const commentsList = bigPicture.querySelector('.social__comments');
const commentsFragment = document.createDocumentFragment();

const commentsCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.social__comments-loader');

// Закрытие модального окна
const closePhoto = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalClose);
  commentsLoader.onclick = null;
};

closeButton.addEventListener('click', () => {
  closePhoto();
});

function onModalClose(evt) {
  if (isEscapeKey(evt)) {
    closePhoto();
  }
}

const renderFullSize = ({url, likes, comments, description}) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  bigPictureImg.src = url;
  likesCount.textContent = likes;
  bigPictureDescription.textContent = description;

  // Функция создания комментариев - массивом по 5 штук
  let count = 0; // Переменная для отображения порций комментариев - 5шт, 10шт и т.д.
  const addComments = () => {
    comments.slice(0, count += MAX_COMMENTS_TO_SHOW).forEach(({avatar, name, message}) => {
      const commentElement = commentsItem.cloneNode(true);
      const commentElementAvatar = commentElement.querySelector('.social__picture');
      commentElementAvatar.src = avatar;
      commentElementAvatar.alt = name;
      const commentElementText = commentElement.querySelector('.social__text');
      commentElementText.textContent = message;
      commentsFragment.append(commentElement);
    });

    commentsList.innerHTML = ''; // Очищаем список комментариев
    commentsList.append(commentsFragment);

    // Сравнивает счетчик count с количеством комментариев, чтобы скрыть/отобразить кнопку загрузки комментариев и рассчитывает, сколько выведено комментариев
    if (count >= comments.length) {
      commentsLoader.classList.add('hidden');
      commentsCount.textContent = `${comments.length} из ${comments.length} комментариев`;
    } else {
      commentsLoader.classList.remove('hidden');
      commentsCount.textContent = `${count} из ${comments.length} комментариев`;
    }
  };

  addComments(); // Вызываем функцию, чтобы отобразились первые 5 комментариев

  // Листенер на кнопку для отображения остальных комментариев. Onclick использован, чтобы удалить обработчик при закрытии модального окна
  commentsLoader.onclick = () => {
    addComments();
  };

  document.addEventListener('keydown', onModalClose);
};

export {renderFullSize};
