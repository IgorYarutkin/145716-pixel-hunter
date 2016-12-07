export const bonusType = {
  FAST: 'fast',
  SLOW: 'slow',
  HEART: 'heart'
};

export const bonusData = {
  [bonusType.FAST]: {
    title: 'Бонус за скорость',
    type: bonusType.FAST,
    multiplier: 50,
  },
  [bonusType.HEART]: {
    title: 'Бонус за жизни',
    type: bonusType.HEART,
    multiplier: 50,
  },
  [bonusType.SLOW]: {
    title: 'Штраф за медлительность',
    type: bonusType.SLOW,
    multiplier: -50,
  }
};
