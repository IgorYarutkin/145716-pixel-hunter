import getElementFromTemplate from './create-element';

const statData = {
  title: 'Победа!',
  results: [
    {
      stats: ['wrong', 'slow', 'fast', 'correct', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown', 'unknown'],
      multiplier: 100,
      total: 900,
      extra: [
        {
          title: 'Бонус за скорость:',
          type: 'fast',
          points: 1,
          multiplier: 50,
          total: 50
        },
        {
          title: 'Бонус за жизни:',
          type: 'heart',
          points: 2,
          multiplier: 50,
          total: 100
        },
        {
          title: 'Штраф за медлительность:',
          type: 'slow',
          points: 2,
          multiplier: 50,
          total: -100
        }
      ],
      final: 950
    },
    {
      stats: ['wrong', 'slow', 'fast', 'correct', 'wrong', 'unknown', 'slow', 'wrong', 'fast', 'wrong'],
      final: 'fail'
    },
    {
      stats: ['wrong', 'slow', 'fast', 'correct', 'wrong', 'unknown', 'slow', 'unknown', 'fast', 'unknown'],
      multiplier: 100,
      total: 900,
      extra: [
        {
          title: 'Бонус за жизни:',
          type: 'heart',
          points: 2,
          multiplier: 50,
          total: 100
        }
      ],
      final: 950
    }
  ]
};

const renderStatStatus = (data) => {

  const item = data.map( (status) => {
    return `<li class="stats__result stats__result--${status}"></li>`;
  }).join('');

  return `<ul class="stats">${item}</ul>`;
};

const renderStatSuccess = (result, number) => {

  const bonus = (extra) => {
    if (extra) {
      return extra.map(
          (item) => {
            return `
            <tr>
              <td></td>
              <td class="result__extra">${item.title}</td>
              <td class="result__extra">${item.points}&nbsp;<span class="stats__result stats__result--${item.type}"></span></td>
              <td class="result__points">×&nbsp;${item.multiplier}</td>
              <td class="result__total">${item.total}</td>
            </tr>`;
          }
      ).join('');
    } else {
      return '';
    }
  };

  return `
    <table class="result__table">
      <tr>
        <td class="result__number">${number + 1}.</td>
        <td colspan="2">${renderStatStatus(result.stats)}</td>
        <td class="result__points">×&nbsp;${result.multiplier}</td>
        <td class="result__total">${result.total}</td>
      </tr>
      ${bonus(result.extra)}
      <tr>
        <td colspan="5" class="result__total  result__total--final">${result.final}</td>
      </tr>
    </table>`;
};

const renderStatFail = (result, number) => {

  return `
    <table class="result__table">
      <tr>
        <td class="result__number">${number + 1}.</td>
        <td>${renderStatStatus(result.stats)}</td>
        <td class="result__total"></td>
      <td class="result__total  result__total--final">${result.final}</td>
    </tr>
  </table>`;
};

const renderStats = (data) => {

  return data.map(
      (item, i) => {
        if (typeof item.final === 'number') {
          return renderStatSuccess(item, i);
        } else {
          return renderStatFail(item, i);
        }
      }).join('');
};

const getStatsElement = () => {

  return getElementFromTemplate(`
    <header class="header">
      <div class="header__back">
        <span class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.png" width="101" height="44">
        </span>
      </div>
    </header>
    <div class="result">
      <h1>${statData.title}</h1>
      ${renderStats(statData.results)}
    </div>`
  );
};

export default getStatsElement;
