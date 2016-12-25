import AbstractView from './abstractView';

class HistoryView extends AbstractView {

  constructor(response) {
    super();
    this.response = response;
  }

  getMarkup() {
    return `Here goes History
            ${JSON.stringify(this.response)}`;
  }

}
const CreateHistroryScreen = (response) => new HistoryView(response).element;
export default CreateHistroryScreen;
