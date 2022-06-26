import {isEscapeKey} from './util.js';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('img');
const likesCount = bigPicture.querySelector('.likes-count');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const bigPictureDescription = bigPicture.querySelector('.social__caption');

const commentContainer = bigPicture.querySelector('.social__comment-count');
const commentLoader = bigPicture.querySelector('.social__comments-loader');
const commentCount = bigPicture.querySelector('.comments-count');
const commentItem = bigPicture.querySelector('.social__comment');
const commentsList = bigPicture.querySelector('.social__comments');
const commentFragment = document.createDocumentFragment();

const closePhoto = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onModalClose);
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
  commentContainer.classList.add('hidden');
  commentLoader.classList.add('hidden');
  body.classList.add('modal-open');

  bigPictureImg.src = url;
  likesCount.textContent = likes;
  commentCount.textContent = comments.length;
  bigPictureDescription.textContent = description;

  comments.forEach(({avatar, name, message}) => {
    const commentElement = commentItem.cloneNode(true);
    const commentElementAvatar = commentElement.querySelector('.social__picture');
    commentElementAvatar.src = avatar;
    commentElementAvatar.alt = name;
    const commentElementText = commentElement.querySelector('.social__text');
    commentElementText.textContent = message;
    commentFragment.append(commentElement);
  });
  commentsList.innerHTML = '';
  commentsList.append(commentFragment);

  document.addEventListener('keydown', onModalClose);
};

export {renderFullSize};
