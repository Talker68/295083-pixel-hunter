import renderModule from '../Utils/renderModule';
import renderGameNode from '../Utils/renderGame';
import {gamesArr, statsArr, timer} from '../Controllers/startGame';
import game from '../Views/game-main';
import stats from '../Views/stats';
import {numberOfGames, gameState} from '../Models/gameData';

const renderGameStatBar = (gameNumber) => {
  let PreviousGameResultNode = document.querySelector(`ul.stats li:nth-child(${gameNumber + 1})`);
  let resultClass = 'stats__result--' + statsArr[gameNumber].answerType;
  PreviousGameResultNode.classList.remove('stats__result--unknown');
  PreviousGameResultNode.classList.add(resultClass);
};

const renderLifeHeader = (lives)=> {
  let lifeWidget = '';
  const lifeImage = '<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">';
  const noLifeImage = '<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">';
  let lifeHeaderNode = document.querySelector('.game__lives');

  switch (lives) {
    case 3: {
      lifeWidget = lifeImage + lifeImage + lifeImage;
      break;
    }
    case 2: {
      lifeWidget = noLifeImage + lifeImage + lifeImage;
      break;
    }
    case 1: {
      lifeWidget = noLifeImage + noLifeImage + lifeImage;
      break;
    }
    case 0: {
      lifeWidget = noLifeImage + noLifeImage + noLifeImage;
      break;
    }
  }

  lifeHeaderNode.innerHTML = lifeWidget;
};

const renderNextGame = (e) => {
  e.currentTarget.removeEventListener('click', runNextGame);
  if (currentGameNumber < numberOfGames - 1 && gameState.lifeNumber > 0) {
    gameState.currentTime = 0;
    renderGameNode(game(gamesArr[++currentGameNumber]).gameNode);
    renderLifeHeader(gameState.lifeNumber);
    renderGameStatBar(gameState.currentLevel);
  } else {
    renderGameStatBar(gameState.currentLevel);
    const gameStatBarNode = document.querySelector('ul.stats');
    clearInterval(timer);
    renderModule(stats(gameStatBarNode));
  }
};

const updateStatsInfo = ()=> {
  if (statsArr[currentGameNumber].answerType === 'wrong') {
    gameState.lifeNumber = gameState.lifeNumber - 1;
  }
};

const moveNextLevel = (e, answer, time) => {
  gameState.currentLevel = currentGameNumber;
  statsArr[currentGameNumber].time = time;
  statsArr[currentGameNumber].isCorrect = answer;
  statsArr[currentGameNumber].setStats();
  updateStatsInfo();
  renderNextGame(e);
};

let currentGameNumber = 0;

// Переменные для первого типа игры, где надо правильно ответить на оба вопроса
let answerNumberGiven = 0;
let firstAnswerCorrect = false;
let secondAnswerCorrect = false;

const runNextGame = (e)=> {

  if (gamesArr[currentGameNumber].type === 1) {
    if (e.target.closest('.game__answer') && e.target.tagName === 'INPUT') {

      if (e.target.name === 'question1') {
        answerNumberGiven++;
        [...document.querySelectorAll('INPUT[name = "question1"]')].forEach((x) => {
          x.disabled = 'true';
        });

        if (e.target.value === gamesArr[currentGameNumber].question.picture1.type) {
          firstAnswerCorrect = true;
        }
      }
      if (e.target.name === 'question2') {
        e.target.disabled = 'true';
        answerNumberGiven++;
        [...document.querySelectorAll('INPUT[name = "question2"]')].forEach((x) => {
          x.disabled = 'true';
        });

        if (e.target.value === gamesArr[currentGameNumber].question.picture2.type) {
          secondAnswerCorrect = true;
        }
      }

      // Когда даны ответа на оба вопроса, обнуляем переменные, пишем статистику и показываем следующую игру

      if (answerNumberGiven === 2) {
        let isAnswerCorrect = firstAnswerCorrect && secondAnswerCorrect;
        answerNumberGiven = 0;
        firstAnswerCorrect = false;
        secondAnswerCorrect = false;

        moveNextLevel(e, isAnswerCorrect, gameState.currentTime);
      }
    }
  } else if (gamesArr[currentGameNumber].type === 2) {
    if (e.target.closest('.game__answer') && e.target.tagName === 'INPUT') {
      let isAnswerCorrect;
      if (e.target.value === gamesArr[currentGameNumber].question.picture1.type) {
        isAnswerCorrect = true;
      } else {
        isAnswerCorrect = false;
      }

      moveNextLevel(e, isAnswerCorrect, gameState.currentTime);
    }
  } else if (gamesArr[currentGameNumber].type === 3) {
    let pictureChosen = e.target.closest('.game__option');
    if (pictureChosen) {
      let pictureNumber = pictureChosen.id;

      let isAnswerCorrect;
      if (gamesArr[currentGameNumber].question[pictureNumber].type === 'paint') {
        isAnswerCorrect = true;
      } else {
        isAnswerCorrect = false;
      }
      moveNextLevel(e, isAnswerCorrect, gameState.currentTime);
    }
  }
};
export default runNextGame;

