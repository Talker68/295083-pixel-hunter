import createIntroScreen from './Views/introView';
import createGreetingScreen from './Views/greetingView';
import createRulesScreen from './Views/rulesView';

const mainElement = document.getElementById('main');

const renderModule = (currentElement)=> {
  mainElement.innerHTML = '';
  mainElement.appendChild(currentElement);
};

class Application {

  static showIntro (data) {
    renderModule(createIntroScreen(data));
  }

  static showGreetings(data) {
    renderModule(createGreetingScreen(data));
  }

  static showRules(data) {
    renderModule(createRulesScreen(data));
  }

  static showGames() {

  }

  static showStat() {

  }
}

export default Application;
