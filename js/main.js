 import intro from './intro.js';
 import greeting from './greeting.js';
 import rules from './rules.js';
 import game_1 from './game-1.js';
 import game_2 from './game-2.js';
 import game_3 from './game-3.js';
 import stats from './stats.js';

  // Rules
  let rulesElement = rules;
  let rulesSubmit = rulesElement.querySelector('.rules__button');

  rulesElement.querySelector('.rules__input').oninput = function () {
    if (this.value) {
      rulesSubmit.removeAttribute('disabled');
    } else {
      rulesSubmit.setAttribute('disabled', '');
    }
  };

  // Slides changer

  let mainElement = document.getElementById('main');

  let switcher = document.createElement('div');
  switcher.innerHTML = '' +
    '<span class="prev"><img src="img/arrow_left.svg" alt="Left" width="50" height="50"></span>   ' +
    '<span class="next"><img src="img/arrow_right.svg" alt="Right" width="50" height="50"></span>';
  switcher.style.cssText = 'text-align: center';
  mainElement.after(switcher);

  let slides = [
    intro,
    greeting,
    rulesElement,
    game_1,
    game_2,
    game_3,
    stats
  ];
  let current = -1;

  const select = (index)=> {
    current = index;
    mainElement.innerHTML = '';
    mainElement.appendChild(slides[index]);
  };

  document.querySelector('.next').onclick = function (e) {
    e.preventDefault();

    select(current + 1);
  };

  document.querySelector('.prev').onclick = function (e) {
    e.preventDefault();

    select(current - 1);
  };

  select(0);

