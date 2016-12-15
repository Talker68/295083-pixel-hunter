import createIntroScreen from './Views/introView';
import createGreetingScreen from './Views/greetingView';
import createRulesScreen from './Views/rulesView';
import createGameScreen from './Views/fullGameView';
import createLevelScreen from './Views/levelView';
import createStatsScreen from './Views/statsView';

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

class Application {

  static showIntro(data) {
    renderModule(createIntroScreen(data));
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
}

export default Application;
