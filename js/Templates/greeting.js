import getElementFromTemplate from '../Helpers/getElementFromTemplate';
import {rules} from './rules';
import renderModule from '../Helpers/renderModule';
import {metaData} from '../../data/gameData';

const greeting = (data) => {
  const template = `<div class="greeting  central--blur">
    <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
    <h1 class="greeting__asterisk">*</h1>
    <div class="greeting__challenge">
      <h3>${data.greeting.title}</h3>
      ${data.greeting.text}
    </div>
    <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
  </div>`;

  const greetingNode = getElementFromTemplate(template);
  const activeElement = greetingNode.querySelector('.greeting__continue');

  const handler = (e) => {
    activeElement.removeEventListener('click', handler);
    renderModule(rules(metaData));
  };
  activeElement.addEventListener('click', handler);

  return greetingNode;
};

export default greeting;

