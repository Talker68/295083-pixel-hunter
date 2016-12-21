class AbstractView {

  get element() {
    if (!this._element) {
      this._element = document.createElement('div');
      this._element.innerHTML = this.getMarkup();
      this.getImages();
      this.bindHandlers();
    }

    return this._element;
  }

  getMarkup() {
    throw new Error('This method should be implemented');
  }

  bindHandlers() {
    // optional method
  }

  getImages() {
    // get image with the right size
  }

  clearHandlers() {
    // optional method
  }
}

export default AbstractView;
