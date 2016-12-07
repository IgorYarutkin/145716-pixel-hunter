import {answerStatus} from './data';
import {bonusType} from './bonus-data';

/**
 * @param {Walkthrough} walkthrough
 * @return {{correctAnswers: number, bonus: {}}}
 */
const getPoints = (walkthrough) => {

  let correctAnswers = 0;
  let bonuses = {
    [bonusType.HEART]: walkthrough.lives,
    [bonusType.FAST]: 0,
    [bonusType.SLOW]: 0
  };

  walkthrough.stats.forEach(
      (answer) => {
        if (answer.status === answerStatus.CORRECT) {
          correctAnswers++;
        }
        if (answer.bonus) {
          bonuses[answer.bonus]++;
        }
      }
  );

  return {correctAnswers, bonuses};
};

export default getPoints;
