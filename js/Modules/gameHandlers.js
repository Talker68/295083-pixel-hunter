import renderModule from '../Helpers/renderModule';
import {gamesArr} from '../Templates/rules';
import game from '../Templates/game';
import stats from '../Templates/stats';
import {numberOfGames} from '../Helpers/generateGameArr';

let currentGameNumber = 1;

// Отрабатываем numberOfGames Игр и переходим на статистику

const handler12 = (e) => {
// e.target.tagName == "SPAN" - заплатка, потому что при клике генериться два события сразу, один на элементе SPAN, другой на INPUT
  if (e.target.closest('.game__answer') && e.target.tagName === 'SPAN' ) {

    e.target.removeEventListener('click', handler12);
    if (currentGameNumber < numberOfGames) {
      renderModule(game(gamesArr[currentGameNumber++]));
    } else {
      renderModule(stats());
    }
  }
};

const handler3 = (e) => {

  if (e.target.closest('.game__option')) {

    e.target.removeEventListener('click', handler3);
    if (currentGameNumber < numberOfGames) {
      renderModule(game(gamesArr[currentGameNumber++]));
    } else {
      renderModule(stats());
    }
  }
};

export {handler12, handler3, gamesArr, currentGameNumber};

