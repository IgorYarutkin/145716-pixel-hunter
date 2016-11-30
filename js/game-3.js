import getElementFromTemplate from './create-element';
import render from './render';
import getStatsElement from './stats';


/**
 * HTML-элемент на основе блока #game-3
 */

const gameData = {
  title: 'Найдите рисунок среди изображений',
  timer: 'NN',
  options: [
    {
      src: 'http://placehold.it/304x455',
      width: '304',
      height: '455',
      alt: 'Option 1'
    },
    {
      src: 'http://placehold.it/304x455',
      width: '304',
      height: '455',
      alt: 'Option 2',
      selected: true
    },
    {
      src: 'http://placehold.it/304x455',
      width: '304',
      height: '455',
      alt: 'Option 3'
    }
  ],
  lives: {
    left: 2,
    total: 3
  },
  stats: ['wrong', 'slow', 'fast', 'correct', 'wrong', 'unknown', 'slow', 'unknown', 'fast', 'unknown'],
};

const renderLivesIcons = (data) => {

  let icons = [];
  for (let i = data.total; i > 0; i--) {
    let type = i > data.left ? 'empty' : 'full';
    icons.push(`<img src="img/heart__${type}.svg" class="game__heart" alt="Life" width="32" height="32">`);
  }
  return icons.join('');
};

const renderGameOption = (data) => {

  return data.map( (option) => {
    return `
      <div class="${option.selected ? 'game__option  game__option--selected' : 'game__option'}">
        <img src=${option.src} alt=${option.alt} width=${option.width} height=${option.height}>
      </div>`;
  }).join('');
};

const renderStatsResult = (data) => {

  const item = data.map( (status) => `<li class="stats__result stats__result--${status}"></li>`).join('');

  return `<ul class="stats">${item}</ul>`;
};

const getGame3Element = () => {

  const element = getElementFromTemplate(`
    <header class="header">
      <div class="header__back">
        <span class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.png" width="101" height="44">
        </span>
      </div>
      <h1 class="game__timer">${gameData.timer}</h1>
      <div class="game__lives">
        ${renderLivesIcons(gameData.lives)}
      </div>
    </header>
    <div class="game">
      <p class="game__task">${gameData.title}</p>
      <form class="game__content  game__content--triple">
        ${renderGameOption(gameData.options)}
      </form>
      <div class="stats">
        ${renderStatsResult(gameData.stats)}
      </div>
    </div>`
  );

  // Блок обработчика переключения на блок stats
  // Обработчик
  const changeToStats = () => {
    const statsElement = getStatsElement();
    render(statsElement);
  };
  // Установка обработчика
  const gameOptionBlocks = element.querySelectorAll('.game__option');
  for (const item of gameOptionBlocks) {
    item.addEventListener('click', changeToStats);
  }

  return element;

};

export default getGame3Element;
