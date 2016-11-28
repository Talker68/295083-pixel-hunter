import getElementFromTemplate from '../Helpers/getElementFromTemplate';
import game1 from './game1';
import renderModule from '../Helpers/renderModule';
import {metaData} from '../../data/gameData';

const template = `<header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
  </header>
  <div class="rules  central--none">
    <h1 class="rules__title">${metaData.rules.title}</h1>
    <p class="rules__description">${metaData.rules.text}
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>`;

const rules = getElementFromTemplate(template);
let rulesSubmit = rules.querySelector('.rules__button');

rules.querySelector('.rules__input').oninput = function () {
  if (this.value) {
    rulesSubmit.removeAttribute('disabled');
  } else {
    rulesSubmit.setAttribute('disabled', '');
  }
};

const activeElement = rules.querySelector('.rules__form');

const handler = (e) => {
  e.preventDefault();
  activeElement.removeEventListener('click', handler);
  renderModule(game1);
};
activeElement.addEventListener('submit', handler);

export default rules;


