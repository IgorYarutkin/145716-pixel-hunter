import renderlabelIcon from './label-answers';

const renderGameOption = (option, questionNumber) => {
  return `
        <div class="game__option">
          <img src="${option.src}" alt="${option.alt}" width="${option.width}" height="${option.height}">
            ${renderlabelIcon('photo', questionNumber + 1)}
            ${renderlabelIcon('paint', questionNumber + 1)}
        </div>`;
};

const renderGameOptionTriple = (option) => {
  return `
        <div class="game__option ${option.selected ? 'game__option--selected' : ''}">
          <img src="${option.src}" alt="${option.alt}" width="${option.width}" height="${option.height}">
        </div>`;
};

const questionTypes = {
  casual: {
    mod: '',
    render: renderGameOption
  },
  wide: {
    mod: 'game__content--wide',
    render: renderGameOption
  },
  triple: {
    mod: 'game__content--triple',
    render: renderGameOptionTriple
  }
};

const renderQuestion = (question) => {

  const currentQuestionType = questionTypes[question.type];

  return `
    <form class="game__content ${currentQuestionType.mod}">
      ${question.content.map(currentQuestionType.render).join('')}
    </form>`;
};

export default renderQuestion;
