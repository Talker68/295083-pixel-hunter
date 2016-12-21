import {gameModel} from '../Models/gameModels';

let timer;

const renderTimeHeader = (time) => {
  let timeHeader = document.querySelector('.game__timer');
  timeHeader.innerHTML = time;
};

const startTimer = () => {

  timer = setInterval(() => {
    gameModel.tick();
    renderTimeHeader(gameModel.state.currentTime);
  }, 1000);
};

export {startTimer, timer};
