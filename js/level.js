import getElementFromTemplate from './create-element';
import render from './render';
import {game, walkthroughs} from './game';
import header from './header';
import renderAnswersStats from './answers-stats';
import renderQuestion from './questions';
import {levelData} from './game';
import renderStatsElement from './stats';

const renderLevel = (indexLevel) => {

  const currentLevel = levelData[indexLevel];

  const element = getElementFromTemplate(`
  ${header(currentLevel.timer, game.livesTotal, game.lives)}
  <div class="game">
    <p class="game__task">${currentLevel.title}</p>
    ${renderQuestion(currentLevel.question)}
    ${renderAnswersStats(game.stats, true)}
  </div>`
  );

  // Блок обработчика переключения на следующий уровень
  // Сам обработчик
  const nextLevel = () => {
    if (indexLevel + 1 < levelData.length) {
      renderLevel(indexLevel + 1);
    } else {
      renderStatsElement(walkthroughs);
    }
  };

  // Блок установки обработчиков
  if (currentLevel.question.type === 'triple') {
    // Установка обработчика для блока triple
    const gameOptionBlocks = element.querySelectorAll('.game__option');
    for (const item of gameOptionBlocks) {
      item.addEventListener('click', nextLevel);
    }
  } else {
    // Установка обработчика для блоков casual и wide
    const gameAnswerBlocks = element.querySelectorAll('.game__answer input');
    for (const item of gameAnswerBlocks) {
      item.addEventListener('click', nextLevel);
    }
  }

  return render(element);
};

export default renderLevel;
