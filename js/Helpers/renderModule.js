let mainElement = document.getElementById('main');

const renderModule = (currentModule)=> {
  mainElement.innerHTML = '';
  mainElement.appendChild(currentModule);
};

export default renderModule;
