const renderAnswer = (status) => `<li class="stats__result stats__result--${status}"></li>`;

/**
 *
 * @param {Answer[]} data - данные статусов ответов
 * @param {boolean} block - true: оборачивает список в див (для экрана игры), false: просто список со статусами вопросов (для экрана статистики) Прим. В модуле отрисовки экрана статистики вместо передачи false ничего не передается. undefined преобразуется в false JS-ом автоматически
 * @return {string} - блок статусов ответов
 */

const renderAnswersStats = (answersArray, wrapInBlock) => {

  const answers = answersArray.map(
      (answer) => renderAnswer(answer.bonus || answer.status)
  ).join('');

  const answersRow = `<ul class="stats">${answers}</ul>`;

  return wrapInBlock ? `<div class="stats">${answersRow}</div>` : answersRow;
};

export default renderAnswersStats;
