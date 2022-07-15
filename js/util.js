const ALERT_SHOW_TIME = 5000;

const getRandomInteger = (min, max) => {
  if (min >= 0 && max > min) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }
  return 0;
};

const checkStringLength = (string, maxLength) => string.length <= maxLength;
checkStringLength('aaaa', 1);

const getId = (items) => items.splice(getRandomInteger(0, items.length - 1), 1)[0];

const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.lineHeight = '25px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#ea6868';
  alertContainer.style.color = 'white';

  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {getId, getRandomInteger, isEscapeKey, showAlert};
