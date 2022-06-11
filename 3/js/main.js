// Генерация случайного целого положительного числа из переданного диапазона включительно
// https://learn.javascript.ru/number

const getRandomInteger = (min, max) => {
  if (min >= 0 && max > min) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }
  return 0;
};

// Проверка максимальной длины строки
const checkStringLength = (string, maxLength) => string.length <= maxLength;
checkStringLength('aaaa', 1);


const TOTAL_OBJECTS = [];
for (let i = 1; i <= 25; i++) {
  TOTAL_OBJECTS.push(i);
}

// Функция, которая генерирует массив с неповторяющимися числами
// https://ru.stackoverflow.com/questions/624726/%D0%9F%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C-20-%D1%81%D0%BB%D1%83%D1%87%D0%B0%D0%B9%D0%BD%D1%8B%D1%85-%D1%87%D0%B8%D1%81%D0%B5%D0%BB-%D0%BE%D1%82-1-%D0%B4%D0%BE-1000-%D0%BD%D0%BE-%D1%87%D1%82%D0%BE%D0%B1%D1%8B-%D1%8D%D1%82%D0%B8-%D1%87%D0%B8%D1%81%D0%BB%D0%B0-%D0%BD%D0%B5-%D0%BF%D0%BE%D0%B2%D1%82%D0%BE%D1%80%D1%8F%D0%BB%D0%B8%D1%81%D1%8C
const createArray = (array) => array.splice(Math.random()*array.length, 1)[0];

// Функция генерации массива объектов с комментарием к фотографии

const TOTAL_COMMENTS = [];
for (let i = 1; i <= 1000; i++) {
  TOTAL_COMMENTS.push(i);
}

const COMMENTS_MESSAGES = [
  'Всё отлично!', 'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const COMMENTS_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

// Функция, которая создает объект - комментарий
const createComment = () => ({
  id: createArray(TOTAL_COMMENTS),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: COMMENTS_MESSAGES[getRandomInteger(0, 5)],
  name: COMMENTS_NAMES[getRandomInteger(0, 5)]
});

// Создаем массив из нескольких объектов - комментариев
const commentsPublished = Array.from({length: 3}, createComment);


// Функция генерации объекта - описания фотографии, опубликованной пользователем.

const PHOTO_URL = TOTAL_OBJECTS.map((elements) => `photos/${elements}.jpg`);

const PHOTO_DESCRIPTIONS = [
  'Это котик',
  'А это другой котик',
  'Котик спит',
  'Котик играется'
];

const createObject = () => ({
  id: createArray(TOTAL_OBJECTS),
  url: createArray(PHOTO_URL),
  description: PHOTO_DESCRIPTIONS[getRandomInteger(0, 3)],
  likes: getRandomInteger(15, 200),
  comments: commentsPublished
});

const photoPublished = Array.from({length: 25}, createObject);
console.log(photoPublished);

// photoPublished.forEach((photo) => {
//   photo.comments.forEach((comment) => console.log(comment))
// });
