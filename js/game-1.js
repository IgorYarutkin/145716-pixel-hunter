import getElementFromTemplate from './create-element';
import render from './render';
import getGame2Element from './game-2';

/**
 * HTML-элемент на основе блока #game-1
 */

const gameData = {
  title: 'Угадайте для каждого изображения фото или рисунок?',
  timer: 'NN',
  options: [
    {
      src: 'http://placehold.it/468x458',
      width: '468',
      height: '458',
      alt: 'Option 1'
    },
    {
      src: 'http://placehold.it/468x458',
      width: '468',
      height: '458',
      alt: 'Option 2'
    }
  ],
  lives: {
    left: 2,
    total: 3
  },
  stats: ['wrong', 'slow', 'fast', 'correct', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown'],
};

const renderLivesIcons = (data) => {

  let icons = [];
  for (let i = data.total; i > 0; i--) {
    let type = i > data.left ? 'empty' : 'full';
    icons.push(`<img src="img/heart__${type}.svg" class="game__heart" alt="Life" width="32" height="32">`);
  }
  return icons.join('');
};

const renderlabelIcon = (type, i) => {

  return `<label class="game__answer game__answer--${type}">
    <input name="question${i + 1}" type="radio" value="${type}">
    <span>${type === 'photo' ? 'Фото' : 'Рисунок'}</span>
    </label>`;
};

const renderGameOption = (data) => {

  return data.map( (option, i) => {
    return `
        <div class="game__option">
          <img src=${option.src} alt=${option.alt} width=${option.width} height=${option.height}>
          ${renderlabelIcon('photo', i)}
          ${renderlabelIcon('paint', i)}
        </div>`;
  }).join('');
};

const renderStatsResult = (data) => {

  const item = data.map( (status) => `<li class="stats__result stats__result--${status}"></li>`).join('');

  return `<ul class="stats">${item}</ul>`;
};

const getGame1Element = () => {

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
      <form class="game__content">
        ${renderGameOption(gameData.options)}
      </form>
      <div class="stats">
        ${renderStatsResult(gameData.stats)}
      </div>
    </div>`
  );

  // Блок обработчика переключения на блок game-2
  // Обработчик
  const changeToGame2 = () => {
    const game2Element = getGame2Element();
    render(game2Element);
  };
  // Установка обработчика
  const gameAnswerBlocks = element.querySelectorAll('.game__answer input');
  for (const item of gameAnswerBlocks) {
    item.addEventListener('click', changeToGame2);
  }


  return element;

};

export default getGame1Element;
