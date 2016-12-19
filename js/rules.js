import getElementFromTemplate from './create-element';
import render from './render';
import renderLevel from './level';
import header from './header';

const rulesData = {
  title: 'Правила',
  description: ['Угадай 10 раз для каждого изображения фото\&nbsp\;', '\&nbsp\;или рисунок\&nbsp\;', '.<br>Фотографиями или рисунками могут быть оба изображения.<br>На каждую попытку отводится 30 секунд.<br>Ошибиться можно не более 3 раз.<br><br>Готовы?'],
};


/**
 * HTML-элемент на основе шаблона #rules
 */

const renderRulesElement = () => {

  // Создание элемента rules
  const element = getElementFromTemplate(`${header()}
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
    renderLevel(0);
  });


  return render(element);

};

export default renderRulesElement;
