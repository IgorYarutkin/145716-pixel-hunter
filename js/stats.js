import getElementFromTemplate from './create-element';
import render from './render';
import renderAnswersStats from './answers-stats';
import getPoints from './points';
import {getBonus} from './bonus';
import {bonusData} from './bonus-data';

const statData = {
  title: {
    success: 'Победа!',
    fail: 'FAIL'
  }
};
const ANSWER_POINTS = 100;

const renderStatSuccess = (walkthrough, number) => {

  const points = getPoints(walkthrough);
  const resultTotal = points.correctAnswers * ANSWER_POINTS;

  const totalBonusPoints = (bonusPoints) => {
    let result = 0;
    for (const type in bonusPoints) {
      if (bonusPoints.hasOwnProperty(type)) {
        result += bonusPoints[type] * bonusData[type].multiplier;
      }
    }
    return result;
  };

  return `
    <table class="result__table">
      <tr>
        <td class="result__number">${number + 1}.</td>
        <td colspan="2">${renderAnswersStats(walkthrough.stats)}</td>
        <td class="result__points">×&nbsp;${ANSWER_POINTS}</td>
        <td class="result__total">${resultTotal}</td>
      </tr>
      ${getBonus(points.bonuses)}
      <tr>
        <td colspan="5" class="result__total  result__total--final">${resultTotal + totalBonusPoints(points.bonuses)}</td>
      </tr>
    </table>`;
};

const renderStatFail = (walkthrough, number) => {

  return `
    <table class="result__table">
      <tr>
        <td class="result__number">${number + 1}.</td>
        <td>${renderAnswersStats(walkthrough.stats)}</td>
        <td class="result__total"></td>
      <td class="result__total  result__total--final">${statData.title.fail}</td>
    </tr>
  </table>`;
};

const renderStats = (data) => {

  //  data - весь массив прохождений
  return data.map(
      (walkthrough, i) => {
        if (walkthrough.lives > 0) {
          return renderStatSuccess(walkthrough, i);
        } else {
          return renderStatFail(walkthrough, i);
        }
      }).join('');
};

const renderStatsElement = (archive) => {

  // archive - весь массив прохождений
  return render(
      getElementFromTemplate(`
        <header class="header">
          <div class="header__back">
            <span class="back">
              <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
              <img src="img/logo_small.png" width="101" height="44">
            </span>
          </div>
        </header>
        <div class="result">
          <h1>${statData.title.success}</h1>
          ${renderStats(archive)}
        </div>`
      )
  );
};

export default renderStatsElement;
