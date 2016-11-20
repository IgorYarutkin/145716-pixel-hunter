/**
 * Функция создания HTML-элемента из полученной строки
 * @param {string} innerHTML
 * @return {HTMLElement} element
 */
const getElementFromTemplate = (innerHTML) => {
  const element = document.createElement('div');
  element.innerHTML = innerHTML;
  return element;
};

export default getElementFromTemplate;
