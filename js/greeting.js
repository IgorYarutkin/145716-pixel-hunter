/**
 * HTML-элемент на основе шаблона #greeting
 */

import getElementFromTemplate from './create-element';
import render from './render';
import renderRulesElement from './rules';

const greetingData = {
  title: 'Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!',
  description: 'Правила игры просты.<br>Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>Задача кажется тривиальной, но не думай, что все так просто.<br>Фотореализм обманчив и коварен.<br>Помни, главное — смотреть очень внимательно.'
};

const renderGreetingElement = () => {
  // Создание элемента greeting
  const element = getElementFromTemplate(`
    <div class="greeting  central--blur">
      <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
      <h1 class="greeting__asterisk">*</h1>
      <div class="greeting__challenge">
        <h3>${greetingData.title}</h3>
        <p>${greetingData.description}</p>
      </div>
      <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
    </div>`
  );

  // Блок обработчика переключения на блок rules
  // Обработчик
  const changeToRules = () => {
    renderRulesElement();
  };
  // Установка обработчика
  const greetingContinue = element.querySelector('.greeting__continue');
  greetingContinue.addEventListener('click', changeToRules);

  return render(element);

};

export default renderGreetingElement;
