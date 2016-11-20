
import introElement from './intro';
import greetingElement from './greeting';
import rulesElement from './rules';
import game1Element from './game-1';
import game2Element from './game-2';
import game3Element from './game-3';
import statsElement from './stats';

( () => {

  // Rules
  const rulesSubmit = rulesElement.querySelector('.rules__button');
  const rulesInput = rulesElement.querySelector('.rules__input');

  rulesInput.oninput = () => {
    rulesSubmit.disabled = !rulesInput.value;
  };

  // Slides changer

  const mainElement = document.getElementById('main');

  const switcher = document.createElement('div');
  switcher.innerHTML = '' +
    '<span class="prev"><img src="img/arrow_left.svg" alt="Left" width="50" height="50"></span>   ' +
    '<span class="next"><img src="img/arrow_right.svg" alt="Right" width="50" height="50"></span>';
  switcher.style.cssText = 'text-align: center';
  mainElement.after(switcher);

  const slides = [
    introElement,
    greetingElement,
    rulesElement,
    game1Element,
    game2Element,
    game3Element,
    statsElement
  ];
  let current = -1;

  const select = (index) => {
    current = index;
    mainElement.innerHTML = '';
    mainElement.appendChild(slides[index]);
  };

  document.querySelector('.next').onclick = (e) => {
    e.preventDefault();

    select(current + 1);
  };

  document.querySelector('.prev').onclick = (e) => {
    e.preventDefault();

    select(current - 1);
  };

  select(0);
})();
