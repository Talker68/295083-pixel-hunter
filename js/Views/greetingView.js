import AbstractView from './abstractView';
import Application from '../application';
import {metaData} from '../Models/gameData';

class GreetingView extends AbstractView {

  constructor(data) {
    super();
    this.data = data;
  }

  getMarkup() {
    return `<div class="greeting  central--blur">
    <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
    <h1 class="greeting__asterisk">*</h1>
    <div class="greeting__challenge">
      <h3>${this.data.greeting.title}</h3>
      ${this.data.greeting.text}
    </div>
    <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
  </div>`;
  }

  bindHandlers() {
    const activeElement = this.element.querySelector('.greeting__continue');

    const showRulesScreen = (e) => {
      Application.showRules(metaData)
    };

    activeElement.addEventListener('click', showRulesScreen );
  }

}

const createGreetingScreen = (data) => new GreetingView(data).element;
export default createGreetingScreen;

