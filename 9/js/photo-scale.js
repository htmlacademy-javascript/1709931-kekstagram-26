const scaleRange = {
  MIN: 25,
  STEP: 25,
  DEFAULT: 100
};
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const photoPreview = document.querySelector('.img-upload__preview');

// Начальное значение - 100. Если закрыть окно и загрузить новую фотку - начальный масштаб изменяется на значение 55%
scaleValue.value = `${scaleRange.DEFAULT}%`;

// Обработчик, уменьшающий масштаб
const onScaleReduce = () => {
  let scope = parseInt(scaleValue.value, 10);

  if (scope > scaleRange.MIN) {
    scope -= scaleRange.STEP;
    scaleValue.value = `${scope}%`;
    photoPreview.style.transform = `scale(${scope / 100})`;
  }
};

// Обработчик, увеличивающий масштаб
const onScaleIncrease = () => {
  let scope = parseInt(scaleValue.value, 10);

  if (scope < scaleRange.DEFAULT) {
    scope += scaleRange.STEP;
    scaleValue.value = `${scope}%`;
    photoPreview.style.transform = `scale(${scope / 100})`;
  }
};

const changePhotoScale = () => {
  scaleSmaller.addEventListener ('click', onScaleReduce);
  scaleBigger.addEventListener ('click', onScaleIncrease);
};

export {changePhotoScale};
