import getElementFromTemplate from '../Utils/getElementFromTemplate';
import greeting from './greeting';
import renderModule from '../Utils/renderModule';
import {metaData} from '../../Models/gameData';


const intro = (data) => {

  const template = `
  <div id="intro" class="intro">
  <h1 class="intro__asterisk">*</h1>
<p class="intro__motto"><sup>*</sup>${data.intro.motto}</p>
  </div>`;

  const introNode = getElementFromTemplate(template);
  const activeElement = introNode.querySelector('.intro__asterisk');

  const showGreeting = (e) => {
    activeElement.removeEventListener('click', showGreeting);
    renderModule(greeting(metaData));
  };
  activeElement.addEventListener('click', showGreeting);

  return introNode;
};

export default intro;
