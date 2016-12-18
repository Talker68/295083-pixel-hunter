import {generateGameArr} from './generateGameData';
import {gameModel} from '../Models/gameModels';

let gamesArr = [];
let timer;

const renderTimeHeader = (time) => {
  let timeHeader = document.querySelector('.game__timer');
  timeHeader.innerHTML = time;
};

const startGame = () => {
  gamesArr = generateGameArr();

  timer = setInterval(() => {
    gameModel.tick();
    renderTimeHeader(gameModel.state.currentTime);
  }, 1000);
};

export {startGame, gamesArr, timer};
