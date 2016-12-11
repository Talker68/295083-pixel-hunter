import renderModule from '../Utils/renderModule';
import getElementFromTemplate from '../Utils/getElementFromTemplate';
import {generateGameArr, generateStatsArr} from '../Utils/generateGameData';
import game from '../Views/game-main';
import gameStats from '../Views/game-stats';
import gameHeader from '../Views/game-header';
import {gameState} from '../Models/gameData';
import runNextGame from './gameHandlers';

let gamesArr =[];
let statsArr = [];
let timer;

const renderTimeHeader = (time) => {
  let timeHeader = document.querySelector('.game__timer');
  timeHeader.innerHTML = time;
};

const startGame = (e) => {
  e.preventDefault();
  gamesArr = generateGameArr();
  statsArr = generateStatsArr();

  renderModule(getElementFromTemplate(gameHeader() + game(gamesArr[0]).gameTemlate + gameStats()));
  const activeElement = document.querySelector('.game__content');
  activeElement.addEventListener('click', runNextGame);

  timer = setInterval( () => {
  gameState.currentTime = gameState.currentTime +1;
    renderTimeHeader(gameState.currentTime);
  }, 1000)
};

export {startGame, gamesArr, statsArr, timer};
