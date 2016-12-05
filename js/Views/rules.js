import getElementFromTemplate from '../Utils/getElementFromTemplate';
import {startGame} from '../Controllers/startGame';

const rules = (data) => {
  const template = `<header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
  </header>
  <div class="rules  central--none">
    <h1 class="rules__title">${data.rules.title}</h1>
    <p class="rules__description">${data.rules.text}
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>`;

  const rulesNode = getElementFromTemplate(template);
  let rulesSubmit = rulesNode.querySelector('.rules__button');

  rulesNode.querySelector('.rules__input').oninput = function () {
    if (this.value) {
      rulesSubmit.removeAttribute('disabled');
    } else {
      rulesSubmit.setAttribute('disabled', '');
    }
  };

  const activeElement = rulesNode.querySelector('.rules__form');
  activeElement.addEventListener('submit', startGame);
  return rulesNode;
};

export {rules};


