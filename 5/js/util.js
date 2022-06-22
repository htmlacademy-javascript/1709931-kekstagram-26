const getRandomInteger = (min, max) => {
  if (min >= 0 && max > min) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }
  return 0;
};

const checkStringLength = (string, maxLength) => string.length <= maxLength;
checkStringLength('aaaa', 1);

// Функция, которая генерирует массив с неповторяющимися числами
const getId = (items) => items.splice(getRandomInteger(0, items.length - 1), 1)[0];

export {getId, getRandomInteger};
