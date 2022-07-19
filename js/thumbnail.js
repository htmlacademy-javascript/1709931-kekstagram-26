import {renderFullSize} from './fullsize.js';

const renderThumbnails = (photos) => {
  const photoContainer = document.querySelector('.pictures');
  const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const photoListFragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const {url, likes, comments} = photo;
    const photoElement = photoTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    photoElement.addEventListener('click', () => renderFullSize(photo));
    photoListFragment.append(photoElement);
    console.log(photo);
  });

  photoContainer.append(photoListFragment);
};

export {renderThumbnails};
