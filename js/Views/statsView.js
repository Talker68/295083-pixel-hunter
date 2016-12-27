import AbstractView from './abstractView';
import {calcGameResult, calcGameScore} from '../Services/calculateScores';

class StatsView extends AbstractView {

  constructor({gameStatBarNode, statsArr, gameModelObj}) {
    super();
    this.gameStatBarNode = gameStatBarNode;
    this.gameResult = calcGameResult(gameModelObj.state);
    this.gameScore = calcGameScore(statsArr);
  }

  getMarkup() {

    return `<header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
  </header>
  <div class="result">
    <h1>${this.gameResult}</h1>
        <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
          ${this.gameStatBarNode.outerHTML}
        <td class="result__points">×&nbsp;100</td>
        <td class="result__total">${this.gameScore.baseScore * 100}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">${this.gameScore.fastScore}<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${this.gameScore.fastScore * 50}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${this.gameScore.extraLifeScore}<span class="stats__result stats__result--heart"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${this.gameScore.extraLifeScore * 50}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">${this.gameScore.slowScore}<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${this.gameScore.slowScore > 0 ? -this.gameScore.slowScore * 50 : 0 }</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${this.gameScore.totalScore()}</td>
      </tr>
    </table>
    <div class = "stat__history">    
    </div>
  </div>`;
  }

  bindHandlers() {
    const activeElement = this.element.querySelector('.header__back');

    const startNewGame = (e) => {
      window.location.reload(true);
    };

    activeElement.addEventListener('click', startNewGame );
  }
}

const createStatsScreen = (data) => new StatsView(data).element;
export default createStatsScreen;
