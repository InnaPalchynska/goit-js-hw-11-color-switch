const SET_COLOR_DELAY = 1000;
let setColorInterval;

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  if (setColorInterval) {
    return;
  }
  refs.startBtn.disabled = true;
  setColorInterval = setInterval(setColor, SET_COLOR_DELAY);
}

function onStopBtnClick() {
  refs.startBtn.disabled = false;
  clearInterval(setColorInterval);
  setColorInterval = '';
}

function setColor() {
  document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
