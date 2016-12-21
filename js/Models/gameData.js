const numberOfGames = 10;
const numberOfLives = 3;
const statsArr = [];


const gameState = {
  currentLevel: 0,
  lifeNumber: 3,
  currentTime: 0
};

const gameResult = {
  time: 0,
  isCorrect: false,
  answerType: 'unknown'
};

const setCurrentLevel = (state, level) => {
  return Object.assign({}, state, {currentLevel: level});
};

const setTime = (state, time) => {
  return Object.assign({}, state, {currentTime: time});
};

const setLives = (state, lives) => {
  if (lives < 0) {
    throw new RangeError('Number of lives can not be negative');
  }

  return Object.assign({}, state, {lifeNumber: lives});
};

const setResult = (result, time, isCorrect) => {
  let answerType = '';

  if (isCorrect && time < 10) {
    answerType = 'fast';
  } else if (isCorrect && time >= 20 && time < 31) {
    answerType = 'slow';
  } else if (isCorrect && time >= 10 && time < 20) {
    answerType = 'correct';
  } else {
    answerType = 'wrong';
  }

  return Object.assign({}, result, {
    time: time,
    isCorrect: isCorrect,
    answerType: answerType
  });
};


const metaData = {
  intro: {
    motto: 'Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.'
  },
  greeting: {
    title: 'Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!',
    text: `<p>Правила игры просты.<br>
        Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
        Задача кажется тривиальной, но не думай, что все так просто.<br>
        Фотореализм обманчив и коварен.<br>
        Помни, главное — смотреть очень внимательно.</p>`
  },
  rules: {
    title: 'Правила',
    text: `Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?`
  },
};

export {metaData, numberOfGames, numberOfLives, gameState, setCurrentLevel, setTime, setLives, setResult, gameResult, statsArr};
