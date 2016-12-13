
const renderGameNode = (gameNode)=> {

  let mainElement = document.querySelector('.game__area');
  mainElement.innerHTML = '';
  mainElement.appendChild(gameNode);

};

export default renderGameNode;
