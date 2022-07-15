const effectLevelContainer = document.querySelector('.effect-level');
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

// Функция сброса начальных значений при загрузке фото
const resetEffect = () => {
  effectLevelValue.value = '';
  uploadedPhoto.className = '';
  uploadedPhoto.style.filter = '';
  effectLevelContainer.classList.add('hidden');
  effectLevelSlider.setAttribute('disabled', true);
};

// Обработчик для изменения эффекта
const onEffectChange = (evt) => {
  if (evt.target.matches('input[type="radio"]')) {
    const currentValue = evt.target.value;
    if (currentValue === 'none') {
      resetEffect();
      return;
    }

    effectLevelContainer.classList.remove('hidden');
    effectLevelSlider.removeAttribute('disabled', true);
    uploadedPhoto.classList.add(`effects__preview--${currentValue}`); //evt.target.value = chrome, sepia и т.д.

    // Обновление параметров слайдера noUiSlider
    effectLevelSlider.noUiSlider.updateOptions(effects[currentValue].options);

    // Связывание слайдера с фильтром
    effectLevelSlider.noUiSlider.on('update', () => {
      effectLevelValue.value = effectLevelSlider.noUiSlider.get();

      const {filter, units} = effects[currentValue];
      uploadedPhoto.style.filter = `${filter}(${effectLevelValue.value}${units}`; // Расшифровка: uploadedPhoto.style.filter = effects[phobos].blur(0...3)px
    });
  }
};

const changeEffect = () => {
  effectsList.addEventListener('change', onEffectChange);
};

changeEffect();

export {resetEffect};
