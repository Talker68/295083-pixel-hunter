import createIntroScreen from './Views/introView';
import createGreetingScreen from './Views/greetingView';
import createRulesScreen from './Views/rulesView';
import createGameScreen from './Views/fullGameView';
import createLevelScreen from './Views/levelView';
import createStatsScreen from './Views/statsView';
import createErrorScreen from './Views/errorView';
import {metaData} from './Models/gameData';

const mainElement = document.getElementById('main');

const renderModule = (currentElement)=> {
  mainElement.innerHTML = '';
  mainElement.appendChild(currentElement);
};

const renderLevel = (game)=> {
  const gameElement = document.querySelector('.game__area');
  gameElement.innerHTML = '';
  gameElement.appendChild(game);

};

let gameArr = [];

class Application {

  static showIntro() {
    renderModule(createIntroScreen(metaData));
  }

  static showGreetings(data) {
    renderModule(createGreetingScreen(data));
  }

  static showRules(data) {
    renderModule(createRulesScreen(data));
  }

  static showGames(game) {
    renderModule((createGameScreen(game)));
  }

  static showLevel(game) {
    renderLevel((createLevelScreen(game)));
  }

  static showStat(data) {
    renderModule(createStatsScreen(data));
  }

  static set gameData(data) {
    gameArr = data;
  }

  static get gameData() {
    return gameArr;
  }
  static showError(error) {
    renderModule(createErrorScreen(error));
  }
}

export default Application;
