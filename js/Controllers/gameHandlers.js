import renderModule from '../Utils/renderModule';
import renderGame from '../Utils/renderGame';
import {gamesArr, statsArr, timer} from '../Controllers/startGame';
import {game, gameHeader, statFooter} from '../Views/game';
import stats from '../Views/stats';
import {numberOfGames, gameState} from '../Models/gameData';

let currentGameNumber = 0;

//Переменные для первого типа игры, где надо правильно ответить на оба вопроса
let answerNumberGiven = 0;
let firstAnswerCorrect = false;
let secondAnswerCorrect = false;

const gameStatsBar = (gameNumber) => {
  let liStatsNode = document.querySelector(`ul.stats li:nth-child(${gameNumber + 1})`);
  liStatsNode.classList.remove('stats__result--unknown');
  let resultClass = 'stats__result--' + statsArr[gameNumber].answerType;
  liStatsNode.classList.add(resultClass);
  console.log('number', gameNumber +1 )
  console.log(statsArr[gameNumber].answerType);
  console.log(liStatsNode);
};

const updateLifeHeader = (lives)=> {
  let lifeWidget = '';
  const life = '<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">';
  const noLife = '<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">';
  let lifeHeader = document.querySelector('.game__lives');

  switch (lives) {
    case 3: {
      lifeWidget = life + life + life;
      break;
    }
    case 2: {
      lifeWidget = noLife + life + life;
      break;
    }
    case 1: {
      lifeWidget = noLife + noLife + life;
      break;
    }
    case 0: {
      lifeWidget = noLife + noLife + noLife;
      break;
    }
  }
  ;
  lifeHeader.innerHTML = lifeWidget;
};

const moveNext = (e) => {
  e.currentTarget.removeEventListener('click', runNextGame);
  if (currentGameNumber < numberOfGames - 1 && gameState.lifeNumber > 0) {
    gameState.currentTime = 0;
    renderGame(game(gamesArr[++currentGameNumber]));
    updateLifeHeader(gameState.lifeNumber);
    gameStatsBar(gameState.currentLevel);
  } else {
    clearInterval(timer);
    renderModule(stats());
  }
};

const updateInfo = ()=> {
  gameState.currentLevel = currentGameNumber;

  if (statsArr[currentGameNumber].answerType === 'wrong') {
    gameState.lifeNumber = gameState.lifeNumber - 1;
  }
};

const updateStats = (e, answer, time,) => {
  statsArr[currentGameNumber].time = time;
  statsArr[currentGameNumber].isCorrect = answer;
  statsArr[currentGameNumber].setStats();
  updateInfo();
  moveNext(e);
};

/*
 * Определяем тип текущей игры,
 * Определяем правильность ответа
 * обновляем статистику
 * запускаем следующуу игру или страницу статистики, если игра последняя
 */

const runNextGame = (e)=> {

  if (gamesArr[currentGameNumber].type == 1) {
    if (e.target.closest('.game__answer') && e.target.tagName === 'INPUT') {

      if (e.target.name == 'question1') {
        answerNumberGiven++;
        [...document.querySelectorAll('INPUT[name = "question1"]')].forEach(x =>x.disabled = "true");

        if (e.target.value == gamesArr[currentGameNumber].question.picture1.type) {
          firstAnswerCorrect = true;
        }
      }
      if (e.target.name == 'question2') {
        e.target.disabled = "true";
        answerNumberGiven++;
        [...document.querySelectorAll('INPUT[name = "question2"]')].forEach(x =>x.disabled = "true");

        if (e.target.value == gamesArr[currentGameNumber].question.picture2.type) {
          secondAnswerCorrect = true;
        }
      }

      //Когда даны ответа на оба вопроса, обнуляем переменные, пишем статистику и показываем следующую игру

      if (answerNumberGiven == 2) {
        let isAnswerCorrect = firstAnswerCorrect && secondAnswerCorrect;
        answerNumberGiven = 0;
        firstAnswerCorrect = false;
        secondAnswerCorrect = false;

        updateStats(e, isAnswerCorrect, gameState.currentTime);
      }
    }
  }

  else if (gamesArr[currentGameNumber].type == 2) {
    if (e.target.closest('.game__answer') && e.target.tagName === 'INPUT') {
      let isAnswerCorrect;
      if (e.target.value == gamesArr[currentGameNumber].question.picture1.type) {
        isAnswerCorrect = true;
      } else {
        isAnswerCorrect = false;
      }

      updateStats(e, isAnswerCorrect, gameState.currentTime);
    }
  }

  else if (gamesArr[currentGameNumber].type == 3) {
    let pictureChosen = e.target.closest('.game__option');
    if (pictureChosen) {
      let pictureNumber = pictureChosen.id;

      let isAnswerCorrect
      if (gamesArr[currentGameNumber].question[pictureNumber].type == 'paint') {
        isAnswerCorrect = true;
      } else {
        isAnswerCorrect = false;
      }

      updateStats(e, isAnswerCorrect, gameState.currentTime);
    }
  }
};
export {runNextGame};

