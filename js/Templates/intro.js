import getElementFromTemplate from '../Helpers/getElementFromTemplate.js';
import greeting from './greeting.js';
import renderModule from '../Helpers/renderModule';

const template = `
  <div id="intro" class="intro">
  <h1 class="intro__asterisk">*</h1>
<p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf
  Sparnaay.</p>
  </div>`;

const intro = getElementFromTemplate(template);
const activeElement = intro.querySelector('.intro__asterisk');

const handler = (e) => renderModule(greeting);
activeElement.addEventListener('click', handler);

export default intro;
