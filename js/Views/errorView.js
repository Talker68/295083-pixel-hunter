import AbstractView from './abstractView';

class ErrorView extends AbstractView {

  constructor(error) {
    super();
    this.error = error;
  }

  getMarkup() {
    return `
      <div class="end">
        <p>Произошла недопустимая ошибка: ${this.error.message}</p>
      </div>`;
  }
}

const createErrorScreen = (error) => new ErrorView(error).element;

export default createErrorScreen;
