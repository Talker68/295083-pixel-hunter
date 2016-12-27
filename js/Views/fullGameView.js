import AbstractView from './abstractView';

class FullGameView extends AbstractView {

  getMarkup() {
    return `<header class="header">
    <div class="header__back">
        
    </div>
    <h1 class="game__timer"></h1>
    <div class="game__lives">
      <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
      <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
      <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
    </div>
  </header> <div class="game">
    <div class = "game__area"></div>
<div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
    </div>`;
  }
}

const createGameScreen = () => new FullGameView().element;
export default createGameScreen;
