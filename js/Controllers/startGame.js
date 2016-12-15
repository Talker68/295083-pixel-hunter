import {generateGameArr, generateStatsArr} from './generateGameData';
import gameModel from '../Models/gameModel';

let gamesArr = [];
let statsArr = [];
let timer;

const renderTimeHeader = (time) => {
  let timeHeader = document.querySelector('.game__timer');
  timeHeader.innerHTML = time;
};

const startGame = () => {
  gamesArr = generateGameArr();
  statsArr = generateStatsArr();

  timer = setInterval(() => {
    gameModel.tick();
    renderTimeHeader(gameModel.state.currentTime);
  }, 1000);
};

export {startGame, gamesArr, statsArr, timer};
