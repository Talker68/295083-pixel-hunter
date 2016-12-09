import renderModule from '../Utils/renderModule';
import {generateGameArr, generateStatsArr} from '../Utils/generateGameArr';
import {game, gameHeader, statFooter} from '../Views/game';
import {gameState} from '../Models/gameData';

let gamesArr =[];
let statsArr = [];
let timer;

const updateTimeHeader = (time) => {
  let timeHeader = document.querySelector('.game__timer');
  timeHeader.innerHTML = time;
};

const startGame = (e) => {
  e.preventDefault();
  gamesArr = generateGameArr();
  statsArr = generateStatsArr();

  renderModule(game(gamesArr[0], 0));

  timer = setInterval( () => {
  gameState.currentTime = gameState.currentTime +1;
    updateTimeHeader(gameState.currentTime);
  }, 1000)


};

export {startGame, gamesArr, statsArr, timer};
