import {renderFullSize} from './photo-fullsize.js';

const photoContainer = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const photoListFragment = document.createDocumentFragment();

const renderThumbnails = (photos) => {
  photos.forEach((photo) => {
    const {url, likes, comments} = photo;
    const photoElement = photoTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments.length;

    const onPhotoFullsizeRender = () => {
      renderFullSize(photo);
    };

    photoElement.addEventListener('click', onPhotoFullsizeRender);
    photoListFragment.append(photoElement);
  });

  photoContainer.append(photoListFragment);
};

export {renderThumbnails};
