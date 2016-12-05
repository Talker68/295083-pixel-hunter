import renderModule from '../Utils/renderModule';
import {generateGameArr} from '../Utils/generateGameArr';
import gameNode from '../Views/game';

let gamesArr =[];

const startGame = (e) => {
  e.preventDefault();
  gamesArr = generateGameArr();
  e.currentTarget.removeEventListener('click', startGame);
  renderModule(gameNode(gamesArr[0]));
};

export {startGame, gamesArr};
