import {bonusData} from './bonus-data';


const getBonusRow = (type, value) => {

  const bonusContent = bonusData[type];
  return `
    <tr>
      <td></td>
      <td class="result__extra">${bonusContent.title}:</td>
      <td class="result__extra">${value}&nbsp;<span class="stats__result stats__result--${bonusContent.type}"></span></td>
      <td class="result__points">×&nbsp;${Math.abs(bonusContent.multiplier)}</td>
      <td class="result__total">${value * bonusContent.multiplier}</td>
    </tr>`;
};

export const getBonus = (bonus) => {

  const bonusBlock = [];

  for (const type in bonus) {
    if (bonus[type]) {
      bonusBlock.push(getBonusRow(type, bonus[type]));
    }
  }
  return bonusBlock.join('');
};

