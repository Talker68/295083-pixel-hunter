import getElementFromTemplate from '../Utils/getElementFromTemplate';
import {runNextGame} from '../Controllers/gameHandlers';

const gameHeader = () => {

  const header = `<header class="header">
    <div class="header__back">
        <span class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.png" width="101" height="44">
        </span>
    </div>
    <h1 class="game__timer"></h1>
    <div class="game__lives">
      <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
      <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
      <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
    </div>
  </header> <div class="game">`;


  return header;
};

const statFooter = () => {
  const stat = `<div class="stats">
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


  return stat;
};

const game = (currentGame, gameNumber = 1) => {

  let template = '';

  switch (currentGame.type) {
    case 1: {
      const gameType1 = ` <div class = "game__area">
    <p class="game__task">${currentGame.question.text}</p>
    <form class="game__content">
      <div class="game__option">
        <img src=${currentGame.question.picture1.URL} alt="Option 1" width="468" height="458">
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
        <img src=${currentGame.question.picture2.URL} alt="Option 2" width="468" height="458">
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
    <p class="game__task">${currentGame.question.text}</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src=${currentGame.question.picture1.URL} alt="Option 1" width="705" height="455">
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
    <p class="game__task">${currentGame.question.text}</p>
    <form class="game__content  game__content--triple">
      <div class="game__option" id="picture1" >
        <img src=${currentGame.question.picture1.URL} alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option game__option--selected" id="picture2">
        <img src=${currentGame.question.picture2.URL} alt="Option 2" width="304" height="455">
      </div>
      <div class="game__option" id="picture3">
        <img src=${currentGame.question.picture3.URL} alt="Option 3" width="304" height="455">
      </div>
    </form></div>`;

      template = gameType3;
      break;
    }
  }
  let gameNode;
  if(gameNumber == 0) {
    gameNode = getElementFromTemplate(gameHeader() + template  + statFooter() );
  } else {
    gameNode = getElementFromTemplate(template );
  }
  console.log(gameNumber);
  console.log(gameNode);
  const activeElement = gameNode.querySelector('.game__content');
  activeElement.addEventListener('click', runNextGame);

  return gameNode;

};

export {game, gameHeader, statFooter};
