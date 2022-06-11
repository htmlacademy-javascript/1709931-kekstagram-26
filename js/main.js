// Генерация случайного целого положительного числа из переданного диапазона включительно
// https://learn.javascript.ru/number

const getRandomInteger = (min, max) => {
  if (min >= 0 && max > min) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }
  return 0;
};

getRandomInteger(0, 5);

// Проверка максимальной длины строки
const checkStringLength = (string, maxLength) => string.length <= maxLength;

checkStringLength('aaaa', 1);
