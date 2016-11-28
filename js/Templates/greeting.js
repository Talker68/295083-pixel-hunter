import getElementFromTemplate from '../Helpers/getElementFromTemplate';
import rules from './rules';
import renderModule from '../Helpers/renderModule';
import {metaData} from '../../data/gameData';

const template = `<div class="greeting  central--blur">
    <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
    <h1 class="greeting__asterisk">*</h1>
    <div class="greeting__challenge">
      <h3>${metaData.greeting.title}</h3>
      ${metaData.greeting.text}
    </div>
    <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
  </div>`;

const greeting = getElementFromTemplate(template);
const activeElement = greeting.querySelector('.greeting__continue');

const handler = (e) => {
  activeElement.removeEventListener('click', handler);
  renderModule(rules);
};
activeElement.addEventListener('click', handler);

export default greeting;

