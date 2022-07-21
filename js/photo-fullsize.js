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

// Рендеринг комментария
const renderComment = ({avatar, name, message}) => {
  const commentElement = commentsItem.cloneNode(true);
  const commentElementAvatar = commentElement.querySelector('.social__picture');
  commentElementAvatar.src = avatar;
  commentElementAvatar.alt = name;
  const commentElementText = commentElement.querySelector('.social__text');
  commentElementText.textContent = message;
  commentsFragment.append(commentElement);
};

// Рендеринг полноразмерной фото
const renderFullSize = (photo) => {
  const {url, likes, comments, description} = photo;
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  bigPictureImg.src = url;
  likesCount.textContent = likes;
  bigPictureDescription.textContent = description;

  // Функция создания комментариев - массивом по 5 штук
  let count = 0; // Переменная для отображения порций комментариев - 5шт, 10шт и т.д.
  const addComments = () => {
    count += MAX_COMMENTS_TO_SHOW;

    comments.slice(0, count).forEach((comment) => renderComment(comment));
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

  addComments();

  const onCommentsLoaderClick = () => {
    addComments();
  };

  commentsLoader.addEventListener('click', onCommentsLoaderClick);
  document.addEventListener('keydown', onModalEscClose);

  // Закрытие модального окна
  const closePhoto = () => {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onModalEscClose);
    commentsLoader.removeEventListener('click', onCommentsLoaderClick);
  };

  const onModalButtonClose = () => {
    closePhoto();
  };

  closeButton.addEventListener('click', onModalButtonClose);

  function onModalEscClose(evt) {
    if (isEscapeKey(evt)) {
      closePhoto();
    }
  }
};

export {renderFullSize};
