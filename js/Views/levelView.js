import AbstractView from './abstractView';
import game from '../Presentors/gamePresentor';

class LevelView extends AbstractView {
  constructor(currentGame) {
    super();
    this.currentGame = currentGame;
  }

  getMarkup() {
    let template = '';
    switch (this.currentGame.type) {
      case 1: {
        const gameType1 = ` <div class = "game__area">
    <p class="game__task">${this.currentGame.question.text}</p>
    <form class="game__content">
      <div class="game__option">
        <img src=${this.currentGame.question.picture1.URL} alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src=${this.currentGame.question.picture2.URL} alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form></div>`;

        template = gameType1;
        break;
      }

      case 2: {
        const gameType2 = `<div class = "game__area">
    <p class="game__task">${this.currentGame.question.text}</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src=${this.currentGame.question.picture1.URL} alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form></div>`;

        template = gameType2;
        break;
      }

      case 3: {
        const gameType3 = `<div class = "game__area">
    <p class="game__task">${this.currentGame.question.text}</p>
    <form class="game__content  game__content--triple">
      <div class="game__option" id="picture1" >
        <img src=${this.currentGame.question.picture1.URL} alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option game__option--selected" id="picture2">
        <img src=${this.currentGame.question.picture2.URL} alt="Option 2" width="304" height="455">
      </div>
      <div class="game__option" id="picture3">
        <img src=${this.currentGame.question.picture3.URL} alt="Option 3" width="304" height="455">
      </div>
    </form></div>`;

        template = gameType3;
        break;
      }
    }
    return template;
  }

  bindHandlers() {
    const activeElement = this.element.querySelector('.game__content');
    activeElement.addEventListener('click', game.runNextGame.bind(game));
  }
}

const createLevelScreen = (currentGame) => new LevelView(currentGame).element;
export default createLevelScreen;
