import AbstractView from './abstractView';
import game from '../Presentors/gamePresentor';
import imageLoader from '../image-loader/image-loader';

class LevelView extends AbstractView {
  constructor(currentGame) {
    super();
    this.currentGame = currentGame;
  }

  getMarkup() {
    let template = '';
    switch (this.currentGame.type) {
      case 'two-of-two': {
        const gameType1 = ` <div class = "game__area">
    <p class="game__task">${this.currentGame.question}</p>
    <form class="game__content">
      <div class="game__option">
        <img class="dummy-image-0"  src="" alt="Option 1" >
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="painting">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img class="dummy-image-1" src="" alt="Option 2" >
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="painting">
          <span>Рисунок</span>
        </label>
      </div>
    </form></div>`;

        template = gameType1;
        break;
      }

      case 'tinder-like': {
        const gameType2 = `<div class = "game__area">
    <p class="game__task">${this.currentGame.question}</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img class="dummy-image-0" src="" alt="Option 1" >
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="painting">
          <span>Рисунок</span>
        </label>
      </div>
    </form></div>`;

        template = gameType2;
        break;
      }

      case 'one-of-three': {
        const gameType3 = `<div class = "game__area">
    <p class="game__task">${this.currentGame.question}</p>
    <form class="game__content  game__content--triple">
      <div class="game__option" id="0" >
        <img class="dummy-image-0" src="" alt="Option 1" >
      </div>
      <div class="game__option game__option--selected" id="1">
        <img class="dummy-image-1" src="" alt="Option 2" >
      </div>
      <div class="game__option" id="2">
        <img class="dummy-image-2" src="" alt="Option 3" >
      </div>
    </form></div>`;

        template = gameType3;
        break;
      }
    }
    return template;
  }

  getImages() {
    for (let i = 0; i < this.currentGame.answers.length; i++) {
      let elementToReplace = this.element.querySelector('.dummy-image-' + i);
      imageLoader(elementToReplace).load({
        url: this.currentGame.answers[i].image.url,
        width: this.currentGame.answers[i].image.width,
        height: this.currentGame.answers[i].image.height
      });
    }
  }

  bindHandlers() {
    const activeElement = this.element.querySelector('.game__content');
    activeElement.addEventListener('click', game.runNextGame.bind(game));
  }
}

const createLevelScreen = (currentGame) => new LevelView(currentGame).element;
export default createLevelScreen;
