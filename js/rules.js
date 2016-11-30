import getElementFromTemplate from './create-element';
import render from './render';
import getGame1Element from './game-1';

/**
 * HTML-элемент на основе шаблона #rules
 */

const rulesData = {
  title: 'Правила',
  description: ['Угадай 10 раз для каждого изображения фото\&nbsp\;', '\&nbsp\;или рисунок\&nbsp\;', '.<br>Фотографиями или рисунками могут быть оба изображения.<br>На каждую попытку отводится 30 секунд.<br>Ошибиться можно не более 3 раз.<br><br>Готовы?'],
};

const getRulesElement = () => {

  // Создание элемента rules
  const element = getElementFromTemplate(`
    <header class="header">
      <div class="header__back">
        <span class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.png" width="101" height="44">
        </span>
      </div>
    </header>
    <div class="rules  central--none">
      <h1 class="rules__title">${rulesData.title}</h1>
      <p class="rules__description">${rulesData.description[0]}<img
        src="img/photo_icon.png" width="16" height="16">${rulesData.description[1]}<img
        src="img/paint_icon.png" width="16" height="16" alt="">${rulesData.description[2]}
      </p>
      <form class="rules__form">
        <input class="rules__input" type="text" placeholder="Ваше Имя">
        <button class="rules__button  continue" type="submit" disabled>Go!</button>
      </form>
    </div>`
  );


// Rules из main.js
  const rulesForm = element.querySelector('.rules__form');
  const rulesSubmit = element.querySelector('.rules__button');
  const rulesInput = element.querySelector('.rules__input');

  rulesInput.oninput = () => {
    rulesSubmit.disabled = !rulesInput.value;
  };

  // Установка обработчика переключения на блок game-1
  rulesForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const game1Element = getGame1Element();
    render(game1Element);
  });


  return element;

};

export default getRulesElement;
