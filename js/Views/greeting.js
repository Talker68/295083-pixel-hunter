import getElementFromTemplate from '../Utils/getElementFromTemplate';
import {rules} from './rules';
import renderModule from '../Utils/renderModule';
import {metaData} from '../Models/gameData';

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

  const showRules = (e) => {
    activeElement.removeEventListener('click', showRules);
    renderModule(rules(metaData));
  };
  activeElement.addEventListener('click', showRules);

  return greetingNode;
};

export default greeting;

