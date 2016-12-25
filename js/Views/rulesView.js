import AbstractView from './abstractView';
import Application from '../application';
import {startTimer} from '../Services/startGame';
import {gameModel} from '../Models/gameModels';


class RulesView extends AbstractView {

  constructor(data) {
    super();
    this.data = data;
  }

  getMarkup() {
    return `<header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
  </header>
  <div class="rules  central--none">
    <h1 class="rules__title">${this.data.rules.title}</h1>
    <p class="rules__description">${this.data.rules.text}
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>`;
  }

  bindHandlers() {
    const rulesSubmit = this.element.querySelector('.rules__button');
    const inputElement = this.element.querySelector('.rules__input');
    inputElement.oninput = function () {
      if (this.value) {
        rulesSubmit.removeAttribute('disabled');
      } else {
        rulesSubmit.setAttribute('disabled', '');
      }
    };

    const activeElement = this.element.querySelector('.rules__form');
    const showGameScreen = (e) => {
      gameModel.state.userName = inputElement.value;
      e.preventDefault();
      Application.showGames();
      let firstLevel = Application.gameData[0];
      Application.showLevel(firstLevel);
      startTimer();
    };
    activeElement.addEventListener('submit', showGameScreen );
  }
}

const createRulesScreen = (data) => new RulesView(data).element;
export default createRulesScreen;
