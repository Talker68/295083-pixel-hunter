import {gamesArr, statsArr, timer} from '../Controllers/startGame';
import {numberOfGames, numberOfLives} from '../Models/gameData';
import Application from '../application';
import gameModel from '../Models/gameModel';

const renderGameStatBar = (gameNumber) => {
  let PreviousGameResultNode = document.querySelector(`ul.stats li:nth-child(${gameNumber + 1})`);
  let resultClass = 'stats__result--' + statsArr[gameNumber].answerType;
  PreviousGameResultNode.classList.remove('stats__result--unknown');
  PreviousGameResultNode.classList.add(resultClass);
};

const renderLifeHeader = (livesLeft)=> {
  let lifeWidget = '';
  const lifeImage = '<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">';
  const noLifeImage = '<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">';
  let lifeHeaderNode = document.querySelector('.game__lives');

  let livesUsed = numberOfLives - livesLeft;

  for (let i = 0; i < livesUsed; i++) {
    lifeWidget = lifeWidget + noLifeImage;
  }

  for (let i = 0; i < livesLeft; i++) {
    lifeWidget = lifeWidget + lifeImage;
  }

  lifeHeaderNode.innerHTML = lifeWidget;
};

const renderNextGame = (e) => {

  e.currentTarget.removeEventListener('click', runNextGame);
  if (gameModel.state.currentLevel < numberOfGames && gameModel.state.lifeNumber > 0) {
    gameModel.resetTimer();
    Application.showLevel(gamesArr[gameModel.state.currentLevel]);
    renderLifeHeader(gameModel.state.lifeNumber);
    renderGameStatBar(gameModel.state.currentLevel - 1);
  } else {
    // чтобы не перерисовывать в цикле Ноду статистики на последней страницы статистики, копируем ее из последней игры
    renderGameStatBar(gameModel.state.currentLevel - 1);
    const gameStatBarNode = document.querySelector('ul.stats');
    clearInterval(timer);
    Application.showStat(gameStatBarNode);

  }
};

const updateGameStats = (e, answer, time) => {

  statsArr[gameModel.state.currentLevel].time = time;
  statsArr[gameModel.state.currentLevel].isCorrect = answer;
  statsArr[gameModel.state.currentLevel].setStats();
  if (statsArr[gameModel.state.currentLevel].answerType === 'wrong') {
    gameModel.die();
  }
  gameModel.nextLevel();
  renderNextGame(e);
};

// Переменные для первого типа игры, где надо правильно ответить на оба вопроса
let answerNumberGiven = 0;
let firstAnswerCorrect = false;
let secondAnswerCorrect = false;

const runNextGame = (e)=> {

  if (gamesArr[gameModel.state.currentLevel].type === 1) {
    if (e.target.closest('.game__answer') && e.target.tagName === 'INPUT') {

      if (e.target.name === 'question1') {
        answerNumberGiven++;
        [...document.querySelectorAll('INPUT[name = "question1"]')].forEach((x) => {
          x.disabled = 'true';
        });

        if (e.target.value === gamesArr[gameModel.state.currentLevel].question.picture1.type) {
          firstAnswerCorrect = true;
        }
      }
      if (e.target.name === 'question2') {
        e.target.disabled = 'true';
        answerNumberGiven++;
        [...document.querySelectorAll('INPUT[name = "question2"]')].forEach((x) => {
          x.disabled = 'true';
        });

        if (e.target.value === gamesArr[gameModel.state.currentLevel].question.picture2.type) {
          secondAnswerCorrect = true;
        }
      }

      // Когда даны ответа на оба вопроса, обнуляем переменные, пишем статистику и показываем следующую игру

      if (answerNumberGiven === 2) {
        let isAnswerCorrect = firstAnswerCorrect && secondAnswerCorrect;
        answerNumberGiven = 0;
        firstAnswerCorrect = false;
        secondAnswerCorrect = false;

        updateGameStats(e, isAnswerCorrect, gameModel.state.currentTime);
      }
    }
  } else if (gamesArr[gameModel.state.currentLevel].type === 2) {
    if (e.target.closest('.game__answer') && e.target.tagName === 'INPUT') {
      let isAnswerCorrect;
      if (e.target.value === gamesArr[gameModel.state.currentLevel].question.picture1.type) {
        isAnswerCorrect = true;
      } else {
        isAnswerCorrect = false;
      }

      updateGameStats(e, isAnswerCorrect, gameModel.state.currentTime);
    }
  } else if (gamesArr[gameModel.state.currentLevel].type === 3) {
    let pictureChosen = e.target.closest('.game__option');
    if (pictureChosen) {
      let pictureNumber = pictureChosen.id;

      let isAnswerCorrect;
      if (gamesArr[gameModel.state.currentLevel].question[pictureNumber].type === 'paint') {
        isAnswerCorrect = true;
      } else {
        isAnswerCorrect = false;
      }
      updateGameStats(e, isAnswerCorrect, gameModel.state.currentTime);
    }
  }
};
export default runNextGame;

