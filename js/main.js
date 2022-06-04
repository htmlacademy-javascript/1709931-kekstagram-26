// Генерация случайного целого положительного числа из переданного диапазона включительно
// https://learn.javascript.ru/number

const randomInteger = (min, max) => {
  if (min >= 0 && max > min) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }
  throw new Error ('Аргументы функции должны быть положительными и/или аргумент max должен быть больше min');
};

randomInteger(0, 10);

// Проверка максимальной длины строки
const stringLength = (string, maxLength) => string.length <= maxLength;

stringLength('aaaa', 1);
