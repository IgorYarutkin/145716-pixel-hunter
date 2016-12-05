import getElementFromTemplate from './create-element';
import render from './render';
import getGreetingElement from './greeting';

const introData = {
  note: 'Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.'
};

/**
 * HTML-элемент на основе блока #intro
 * @return {HTMLElement} element
 */
const getIntroElement = () => {
  const element = getElementFromTemplate(`
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup>${introData.note}</p> 
    </div>`
  );

  // Блок переключения на блок greetings
  /**
   * Обработчик
   */
  const changeToGreetings = () => {
    const greetingElement = getGreetingElement();
    render(greetingElement);
  };
  // Установка обработчика
  const asterisk = element.querySelector('.intro__asterisk');
  asterisk.addEventListener('click', changeToGreetings);


  return element;
};

export default getIntroElement;
