import getElementFromTemplate from './getElementFromTemplate.js'

const template = `
  <div id="intro" class="intro">
  <h1 class="intro__asterisk">*</h1>
<p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf
  Sparnaay.</p>
  </div>
  `;

const intro = getElementFromTemplate(template);
export default intro;
