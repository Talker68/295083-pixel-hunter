import getElementFromTemplate from '../Helpers/getElementFromTemplate';
import greeting from './greeting';
import renderModule from '../Helpers/renderModule';
import {metaData} from '../../data/gameData';

const template = `
  <div id="intro" class="intro">
  <h1 class="intro__asterisk">*</h1>
<p class="intro__motto"><sup>*</sup>${metaData.intro.motto}</p>
  </div>`;

const intro = getElementFromTemplate(template);
const activeElement = intro.querySelector('.intro__asterisk');

const handler = (e) => renderModule(greeting);
activeElement.addEventListener('click', handler);

export default intro;
