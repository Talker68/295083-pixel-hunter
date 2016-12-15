import AbstractView from './abstractView';
import Application from '../application';
import {metaData} from '../Models/gameData';

class IntroView extends AbstractView {

  constructor(data) {
    super();
    this.data = data;
  }

  getMarkup() {
    return `
  <div id="intro" class="intro">
  <h1 class="intro__asterisk">*</h1>
<p class="intro__motto"><sup>*</sup>${this.data.intro.motto}</p>
  </div>`;
  }

  bindHandlers() {
    const activeElement = this.element.querySelector('.intro__asterisk');

    const showGreetingScreen = (e) => {
      Application.showGreetings(metaData);
    };

    activeElement.addEventListener('click', showGreetingScreen );
  }
}

const createIntroScreen = (data) => new IntroView(data).element;

export default createIntroScreen;
