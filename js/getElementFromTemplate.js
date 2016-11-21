const  getElementFromTemplate = (templateString) => {
  const templateElement = document.createElement('div');
  templateElement.innerHTML = templateString;
  return templateElement;
};

export default getElementFromTemplate;
