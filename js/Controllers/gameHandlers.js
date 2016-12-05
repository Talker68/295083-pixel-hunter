import renderModule from '../Utils/renderModule';
import {gamesArr} from '../Controllers/startGame';
import game from '../Views/game';
import stats from '../Views/stats';
import {numberOfGames} from '../Utils/generateGameArr';
import updateStats from './updateStats';

let currentGameNumber = 0;
let answerNumberGiven = 0;
let firstAnswerCorrect = false;
let secondAnswerCorrect = false;

// Отрабатываем numberOfGames Игр и переходим на статистику
const runNextGame = (e)=> {

  if (gamesArr[currentGameNumber].type == 1) {
    if (e.target.closest('.game__answer') && e.target.tagName === 'INPUT') {

      if (e.target.name == 'question1') {
        answerNumberGiven++;
       e.target.disabled = "true";

        if (e.target.value == gamesArr[currentGameNumber].question.picture1.type) {
          firstAnswerCorrect = true;
        }
      }
      if (e.target.name == 'question2') {
      e.target.disabled = "true";
        answerNumberGiven++;
        if (e.target.value == gamesArr[currentGameNumber].question.picture1.type) {
          secondAnswerCorrect = true;
        }
      }

      console.log("answerNumberGiven", answerNumberGiven);
      //console.log("Input value ", e.target.value);
      //console.log("Input name ", e.target.name);
      //console.log("Picture type ", gamesArr[currentGameNumber].question.picture1.type)

      if (answerNumberGiven == 2) {
        e.currentTarget.removeEventListener('click', runNextGame);
        if (currentGameNumber < numberOfGames - 1) {
          renderModule(game(gamesArr[++currentGameNumber]));
        } else {
          renderModule(stats());
        }
      }
    }
  }

  else if (gamesArr[currentGameNumber].type == 2) {
    if (e.target.closest('.game__answer') && e.target.tagName === 'INPUT') {

      e.currentTarget.removeEventListener('click', runNextGame);
      if (currentGameNumber < numberOfGames - 1) {
        renderModule(game(gamesArr[++currentGameNumber]));
      } else {
        renderModule(stats());
      }
    }
  }

  else if (gamesArr[currentGameNumber].type == 3) {
    if (e.target.closest('.game__option')) {

      e.currentTarget.removeEventListener('click', runNextGame);
      if (currentGameNumber < numberOfGames - 1) {
        renderModule(game(gamesArr[++currentGameNumber]));
      } else {
        renderModule(stats());
      }
    }
  }
};
export {runNextGame};

