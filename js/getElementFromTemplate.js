const  getElementFromTemplate = (templateString) => {
  var template = document.createElement('template');
  template.innerHTML = templateString;
  return template.content;
};

export default getElementFromTemplate;
