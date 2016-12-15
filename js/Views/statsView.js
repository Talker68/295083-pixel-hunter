import AbstractView from './abstractView';
import {statsArr} from '../Controllers/startGame';
import gameModel from '../Models/gameModel';

class StatsView extends AbstractView {

  constructor(data) {
    super();
    this.data = data;
  }

  gameResult(state) {
    let result = state.lifeNumber > 0 ? 'Победа!' : 'Поражение :(';
    return result;
  }

  gameScore(stats) {
    let scoreArr = {
      baseScore: 0,
      fastScore: 0,
      slowScore: 0,
      extraLifeScore: 3,
      totalScore() {
        return this.baseScore * 100 + this.fastScore * 50 - this.slowScore * 50 + this.extraLifeScore * 50;
      }
    };

    stats.forEach((i) => {
      switch (i.answerType) {
        case 'correct': {
          scoreArr.baseScore += 1;
          break;
        }
        case 'fast': {
          scoreArr.baseScore += 1;
          scoreArr.fastScore += 1;
          break;
        }
        case 'slow': {
          scoreArr.baseScore += 1;
          scoreArr.slowScore += 1;
          break;
        }
        case 'wrong': {
          scoreArr.extraLifeScore -= 1;
          break;
        }
      }
    });
    return scoreArr;
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
    <h1>${this.gameResult(gameModel.state)}</h1>
        <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
          ${this.data.outerHTML}
        <td class="result__points">×&nbsp;100</td>
        <td class="result__total">${this.gameScore(statsArr).baseScore * 100}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">${this.gameScore(statsArr).fastScore}<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${this.gameScore(statsArr).fastScore * 50}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${this.gameScore(statsArr).extraLifeScore}<span class="stats__result stats__result--heart"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${this.gameScore(statsArr).extraLifeScore * 50}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">${this.gameScore(statsArr).slowScore}<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${this.gameScore(statsArr).slowScore > 0 ? -this.gameScore(statsArr).slowScore * 50 : 0 }</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${this.gameScore(statsArr).totalScore()}</td>
      </tr>
    </table>
    <table class="result__table">
      <tr>
        <td class="result__number">2.</td>
        <td>
          <ul class="stats">
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--correct"></li>
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--wrong"></li>
          </ul>
        </td>
        <td class="result__total"></td>
        <td class="result__total  result__total--final">fail</td>
      </tr>
    </table>
    <table class="result__table">
      <tr>
        <td class="result__number">3.</td>
        <td colspan="2">
          <ul class="stats">
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--correct"></li>
            <li class="stats__result stats__result--wrong"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--slow"></li>
            <li class="stats__result stats__result--unknown"></li>
            <li class="stats__result stats__result--fast"></li>
            <li class="stats__result stats__result--unknown"></li>
          </ul>
        </td>
        <td class="result__points">×&nbsp;100</td>
        <td class="result__total">900</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">2&nbsp;<span class="stats__result stats__result--heart"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">100</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">950</td>
      </tr>
    </table>
  </div>`;
  }
}

const createStatsScreen = (data) => new StatsView(data).element;
export default createStatsScreen;
