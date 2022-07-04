const ScaleRange = {
  MIN: 25,
  STEP: 25,
  DEFAULT: 100
};
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const photoPreview = document.querySelector('.img-upload__preview');

// Функция сброса на начальное значение - 100%
const initScaleValue = () => {
  scaleValue.value = `${ScaleRange.DEFAULT}%`;
  photoPreview.style.transform = '';
  photoPreview.style.transform = `scale(${ScaleRange.DEFAULT} / 100)`;
};

// Обработчик, уменьшающий масштаб
const onScaleDecrease = () => {
  let scope = parseInt(scaleValue.value, 10);

  if (scope > ScaleRange.MIN) {
    scope -= ScaleRange.STEP;
    scaleValue.value = `${scope}%`;
    photoPreview.style.transform = `scale(${scope / 100})`;
  }
};

// Обработчик, увеличивающий масштаб
const onScaleIncrease = () => {
  let scope = parseInt(scaleValue.value, 10);

  if (scope < ScaleRange.DEFAULT) {
    scope += ScaleRange.STEP;
    scaleValue.value = `${scope}%`;
    photoPreview.style.transform = `scale(${scope / 100})`;
  }
};

const changePhotoScale = () => {
  scaleSmaller.addEventListener('click', onScaleDecrease);
  scaleBigger.addEventListener('click', onScaleIncrease);
};

export {changePhotoScale, initScaleValue};
