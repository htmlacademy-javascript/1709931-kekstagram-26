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


const photoIds = [];
for (let i = 1; i <= 25; i++) {
  photoIds.push(i);
}

// Функция, которая генерирует массив с неповторяющимися числами
const getId = (items) => items.splice(getRandomInteger(0, items.length - 1), 1)[0];

// Функция генерации массива объектов с комментарием к фотографии

const commentIds = [];
for (let i = 1; i <= 1000; i++) {
  commentIds.push(i);
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

const PHOTOS_COUNT = 25;

const Avatar = {
  MIN: 1,
  MAX: 6
};

const Like ={
  MIN: 15,
  MAX: 200
};

// Функция, которая создает объект - комментарий
const createComment = () => ({
  id: getId(commentIds),
  avatar: `img/avatar-${getRandomInteger(Avatar.MIN, Avatar.MAX)}.svg`,
  message: COMMENTS_MESSAGES[getRandomInteger(0, COMMENTS_MESSAGES.length - 1)],
  name: COMMENTS_NAMES[getRandomInteger(0, COMMENTS_NAMES.length - 1)]
});

// Функция генерации объекта - описания фотографии, опубликованной пользователем.

const photoUrl = photoIds.map((elements) => `photos/${elements}.jpg`);

const PHOTO_DESCRIPTIONS = [
  'Это котик',
  'А это другой котик',
  'Котик спит',
  'Котик играется'
];

const createObject = () => ({
  id: getId(photoIds),
  url: getId(photoUrl),
  description: PHOTO_DESCRIPTIONS[getRandomInteger(0, PHOTO_DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(Like.MIN, Like.MAX),
  comments: Array.from({length: getRandomInteger(1, 10)}, createComment)
});

const photoPublished = Array.from({length: PHOTOS_COUNT}, createObject);
console.log(photoPublished);

// photoPublished.forEach((photo) => {
//   photo.comments.forEach((comment) => console.log(comment))
// });
