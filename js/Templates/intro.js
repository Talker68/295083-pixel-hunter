import getElementFromTemplate from '../Helpers/getElementFromTemplate';
import greeting from './greeting';
import renderModule from '../Helpers/renderModule';
import {metaData} from '../../data/gameData';


const intro = (data) => {

  const template = `
  <div id="intro" class="intro">
  <h1 class="intro__asterisk">*</h1>
<p class="intro__motto"><sup>*</sup>${data.intro.motto}</p>
  </div>`;

  const introNode = getElementFromTemplate(template);
  const activeElement = introNode.querySelector('.intro__asterisk');

  const handler = (e) => {
    activeElement.removeEventListener('click', handler);
    renderModule(greeting(metaData));
  };
  activeElement.addEventListener('click', handler);

  return introNode;
};

export default intro;
