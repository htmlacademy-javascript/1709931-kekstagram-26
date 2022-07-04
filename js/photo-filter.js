const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const uploadedPhoto = document.querySelector('.img-upload__preview img');
const effectsList = document.querySelector('.effects__list');

const effects = {
  chrome: {
    filter: 'grayscale',
    units: '',
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
  },
  sepia: {
    filter: 'sepia',
    units: '',
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
  },
  marvin: {
    filter: 'invert',
    units: '%',
    options: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    },
  },
  phobos: {
    filter: 'blur',
    units: 'px',
    options: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
  },
  heat: {
    filter: 'brightness',
    units: '',
    options: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
  },
};

// Создание слайдера
noUiSlider.create(effectLevelSlider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});

const onFilterChange = (evt) => {
  if (evt.target.matches('input[type="radio"]')) {

    if (evt.target.value === 'none') {
      effectLevelSlider.noUiSlider.destroy();
      effectLevelSlider.classList.add = 'hidden';
    }

    // uploadedPhoto.className = '';
    // uploadedPhoto.style.filter = '';
    // effectLevelSlider.classList.remove = 'hidden';
    uploadedPhoto.classList.add(`effects__preview--${evt.target.value}`); //evt.target.value = chrome, sepia и т.д.

    // Обновление параметров слайдера noUiSlider
    effectLevelSlider.noUiSlider.updateOptions(effects[evt.target.value].options);

    // Связывание слайдера с фильтром
    effectLevelSlider.noUiSlider.on('update', () => {
      effectLevelValue.value = effectLevelSlider.noUiSlider.get();

      uploadedPhoto.style.filter = `${effects[evt.target.value].filter}(${effectLevelValue.value}${effects[evt.target.value].units}`; // Расшифровка: uploadedPhoto.style.filter = effects[phobos].blur(0...3)px
    });
  }
};

effectsList.addEventListener('change', onFilterChange);
