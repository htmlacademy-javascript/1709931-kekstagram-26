import {getId, getRandomInteger} from './util.js';

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

const COMMENTS_MESSAGES = [
  'Всё отлично!', 'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const PHOTOS_COUNT = 25;

const PHOTO_DESCRIPTIONS = [
  'Это котик',
  'А это другой котик',
  'Котик спит',
  'Котик играется'
];

const Avatar = {
  MIN: 1,
  MAX: 6
};

const Like ={
  MIN: 15,
  MAX: 200
};

const photoIds = [];
for (let i = 1; i <= 25; i++) {
  photoIds.push(i);
}

const commentIds = [];
for (let i = 1; i <= 1000; i++) {
  commentIds.push(i);
}

// Функция, которая создает объект - комментарий
const createComment = () => ({
  id: getId(commentIds),
  avatar: `img/avatar-${getRandomInteger(Avatar.MIN, Avatar.MAX)}.svg`,
  message: COMMENTS_MESSAGES[getRandomInteger(0, COMMENTS_MESSAGES.length - 1)],
  name: COMMENTS_NAMES[getRandomInteger(0, COMMENTS_NAMES.length - 1)]
});

// Функция генерации объекта - описания фотографии, опубликованной пользователем.
const photoUrl = photoIds.map((elements) => `photos/${elements}.jpg`);

const createObject = () => ({
  id: getId(photoIds),
  url: getId(photoUrl),
  description: PHOTO_DESCRIPTIONS[getRandomInteger(0, PHOTO_DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(Like.MIN, Like.MAX),
  comments: Array.from({length: getRandomInteger(1, 10)}, createComment)
});

const makePosts = () => Array.from({length: PHOTOS_COUNT}, createObject);

export {makePosts};
