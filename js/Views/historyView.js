import AbstractView from './abstractView';
import {calcScoreHistory} from '../Services/calculateScoresHistory';

class HistoryView extends AbstractView {

  constructor(response) {
    super();
    this.response = response;
  }

  sortResponse(a, b) {
    return (b.date - a.date);
  }

  renderStatList(stats) {
    let html = '';
    for (let i = 0; i < 10; i++) {
      if (stats[i]) {
        html += `<li class="stats__result stats__result--${stats[i]}"></li>`;
      } else {
        html += '<li class="stats__result stats__result--unknown"></li>';
      }
    }
    return html;
  }


  getMarkup() {
    if (this.response) {
      const response = this.response.sort(this.sortResponse);
      let historyHTMLArray = response.map((item, i) => {
        let totalScoreArr = calcScoreHistory(item.stats);
        return `<table class="result__table">
        <tr>
          <td class="result__number">${i + 2}</td>
          <td>
            <ul class="stats">
              ${this.renderStatList(item.stats)}
            </ul>
          </td>
          <td class="result__total"></td>
          <td class="result__total  result__total--final">${totalScoreArr.totalScore()}</td>
        </tr>
      </table>`;
      });
      return historyHTMLArray.join(' ');
    } else {
      return 'Это Ваша первая игра. ';
    }
  }

}
const CreateHistroryScreen = (response) => new HistoryView(response).element;
export default CreateHistroryScreen;
