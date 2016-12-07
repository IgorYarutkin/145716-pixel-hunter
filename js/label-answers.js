const renderlabelIcon = (value, name) => {

  return `<label class="game__answer game__answer--${value}">
    <input name="question${name}" type="radio" value="${value}">
    <span>${value === 'photo' ? 'Фото' : 'Рисунок'}</span>
    </label>`;

};

export default renderlabelIcon;
