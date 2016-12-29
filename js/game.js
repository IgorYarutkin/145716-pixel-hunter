import answerStatus from './data';
import {bonusType} from './bonus-data';

/**
 * @typedef {object} Answer
 * @property {string} status - статус ответа: правильный/неправильный/неизвестен(ответа нет)
 * @property {string} [bonus] - бонус: за скорость/ за оставшиеся жизни/ за медленность (штраф)
 */

/**
 * @typedef {object} Walkthrough
 * @property {number} lives - количество оставшихся жизней
 * @property {Answer[]} - множество ответов
 */
export const game = {
  livesTotal: 3,
  lives: 2,
  stats: [
    {
      status: answerStatus.WRONG
    },
    {
      status: answerStatus.CORRECT,
      bonus: bonusType.SLOW
    },
    {
      status: answerStatus.CORRECT,
      bonus: bonusType.FAST
    },
    {
      status: answerStatus.CORRECT
    },
    {
      status: answerStatus.CORRECT,
      bonus: bonusType.SLOW
    },
    {
      status: answerStatus.UNKNOWN
    },
    {
      status: answerStatus.UNKNOWN
    },
    {
      status: answerStatus.UNKNOWN
    },
    {
      status: answerStatus.UNKNOWN
    },
    {
      status: answerStatus.UNKNOWN
    }
  ]
};

export const walkthroughs = [
  {
    lives: 2,
    stats: [
      {
        status: answerStatus.WRONG
      },
      {
        status: answerStatus.CORRECT,
        bonus: bonusType.SLOW
      },
      {
        status: answerStatus.CORRECT,
        bonus: bonusType.FAST
      },
      {
        status: answerStatus.CORRECT,
        bonus: bonusType.FAST
      },
      {
        status: answerStatus.CORRECT
      },
      {
        status: answerStatus.CORRECT,
        bonus: bonusType.FAST
      },
      {
        status: answerStatus.UNKNOWN
      },
      {
        status: answerStatus.CORRECT,
        bonus: bonusType.SLOW
      },
      {
        status: answerStatus.UNKNOWN
      },
      {
        status: answerStatus.CORRECT
      }
    ]
  },
  {
    lives: 0,
    stats: [
      {
        status: answerStatus.WRONG
      },
      {
        status: answerStatus.UNKNOWN
      },
      {
        status: answerStatus.CORRECT,
        bonus: bonusType.FAST
      },
      {
        status: answerStatus.CORRECT,
        bonus: bonusType.FAST
      },
      {
        status: answerStatus.WRONG
      },
      {
        status: answerStatus.UNKNOWN
      },
      {
        status: answerStatus.CORRECT,
        bonus: bonusType.SLOW
      },
      {
        status: answerStatus.WRONG
      },
      {
        status: answerStatus.CORRECT,
        bonus: bonusType.FAST
      },
      {
        status: answerStatus.WRONG
      }
    ]
  },
  {
    lives: 1,
    stats: [
      {
        status: answerStatus.CORRECT
      },
      {
        status: answerStatus.CORRECT,
        bonus: bonusType.SLOW
      },
      {
        status: answerStatus.CORRECT,
        bonus: bonusType.FAST
      },
      {
        status: answerStatus.CORRECT,
      },
      {
        status: answerStatus.WRONG
      },
      {
        status: answerStatus.CORRECT,
        bonus: bonusType.FAST
      },
      {
        status: answerStatus.CORRECT,
        bonus: bonusType.SLOW
      },
      {
        status: answerStatus.CORRECT,
        bonus: bonusType.FAST
      },
      {
        status: answerStatus.CORRECT,
        bonus: bonusType.FAST
      },
      {
        status: answerStatus.CORRECT
      }
    ]
  },
  {
    lives: 1,
    stats: [
      {
        status: answerStatus.CORRECT
      },
      {
        status: answerStatus.CORRECT
      },
      {
        status: answerStatus.CORRECT
      },
      {
        status: answerStatus.CORRECT,
      },
      {
        status: answerStatus.CORRECT
      },
      {
        status: answerStatus.WRONG
      },
      {
        status: answerStatus.WRONG
      },
      {
        status: answerStatus.CORRECT
      },
      {
        status: answerStatus.CORRECT
      },
      {
        status: answerStatus.CORRECT
      }
    ]
  }
];

export const levelData = [
  {
    title: 'Угадайте для каждого изображения фото или рисунок?',
    timer: '01',
    question: {
      type: 'casual',
      content: [
        {
          src: 'http://placehold.it/468x458',
          width: '468',
          height: '458',
          alt: 'Option 1',
          imageType: 'photo'
        },
        {
          src: 'http://placehold.it/468x458',
          width: '468',
          height: '458',
          alt: 'Option 2',
          imageType: 'photo'
        }
      ]
    }
  },
  {
    title: 'Угадай, фото или рисунок?',
    timer: '02',
    question: {
      type: 'wide',
      content: [
        {
          src: 'http://placehold.it/705x455',
          width: '705',
          height: '455',
          alt: 'Option 1',
          imageType: 'paint'
        }
      ]
    },
    lives: {
      left: 2,
      total: 3
    }
  },
  {
    title: 'Найдите рисунок среди изображений',
    timer: '03',
    question: {
      type: 'triple',
      content: [
        {
          src: 'http://placehold.it/304x455',
          width: '304',
          height: '455',
          alt: 'Option 1',
          imageType: 'photo'
        },
        {
          src: 'http://placehold.it/304x455',
          width: '304',
          height: '455',
          alt: 'Option 2',
          selected: true,
          imageType: 'paint'
        },
        {
          src: 'http://placehold.it/304x455',
          width: '304',
          height: '455',
          alt: 'Option 3',
          imageType: 'photo'
        }
      ],
    }
  },
  {
    title: 'Слабо пройти 4-й уровень?',
    timer: '04',
    question: {
      type: 'casual',
      content: [
        {
          src: 'http://placehold.it/468x458',
          width: '468',
          height: '458',
          alt: 'Option 1',
          imageType: 'paint'
        },
        {
          src: 'http://placehold.it/468x458',
          width: '468',
          height: '458',
          alt: 'Option 2',
          imageType: 'photo'
        }
      ]
    }
  },
  {
    title: 'А теперь найдите изображение среди рисунков',
    timer: '05',
    question: {
      type: 'triple',
      content: [
        {
          src: 'http://placehold.it/304x455',
          width: '304',
          height: '455',
          alt: 'Option 1',
          imageType: 'photo'
        },
        {
          src: 'http://placehold.it/304x455',
          width: '304',
          height: '455',
          alt: 'Option 2',
          selected: true,
          imageType: 'paint'
        },
        {
          src: 'http://placehold.it/304x455',
          width: '304',
          height: '455',
          alt: 'Option 3',
          imageType: 'paint'
        }
      ],
    }
  },
  {
    title: 'Проверь свое чувство реальности еще раз... Это фото или рисунок?',
    timer: '06',
    question: {
      type: 'wide',
      content: [
        {
          src: 'http://placehold.it/705x455',
          width: '705',
          height: '455',
          alt: 'Option 1',
          imageType: 'photo'
        }
      ]
    },
    lives: {
      left: 2,
      total: 3
    }
  },
  {
    title: 'Возможно ты справился с предыдущим заданием. Но в этот раз будет сложнее',
    timer: '07',
    question: {
      type: 'wide',
      content: [
        {
          src: 'http://placehold.it/705x455',
          width: '705',
          height: '455',
          alt: 'Option 1',
          imageType: 'paint'
        }
      ]
    },
    lives: {
      left: 2,
      total: 3
    }
  },
  {
    title: 'Здесь должно быть полегче',
    timer: '08',
    question: {
      type: 'casual',
      content: [
        {
          src: 'http://placehold.it/468x458',
          width: '468',
          height: '458',
          alt: 'Option 1',
          imageType: 'paint'
        },
        {
          src: 'http://placehold.it/468x458',
          width: '468',
          height: '458',
          alt: 'Option 2',
          imageType: 'paint'
        }
      ]
    }
  },
  {
    title: `Иногда кажется, что оба варианты правильные...  
      Может это тот самый случай?`,
    timer: '09',
    question: {
      type: 'wide',
      content: [
        {
          src: 'http://placehold.it/705x455',
          width: '705',
          height: '455',
          alt: 'Option 1',
          imageType: 'photo'
        }
      ]
    },
    lives: {
      left: 2,
      total: 3
    }
  },
  {
    title: `И заключительное испытание.
      Рисунок? Или фото? Или рисунок?`,
    timer: '10',
    question: {
      type: 'triple',
      content: [
        {
          src: 'http://placehold.it/304x455',
          width: '304',
          height: '455',
          alt: 'Option 1',
          imageType: 'photo'
        },
        {
          src: 'http://placehold.it/304x455',
          width: '304',
          height: '455',
          alt: 'Option 2',
          selected: true,
          imageType: 'photo'
        },
        {
          src: 'http://placehold.it/304x455',
          width: '304',
          height: '455',
          alt: 'Option 3',
          imageType: 'paint'
        }
      ],
    }
  }
];

export const checkTimer = (timer) => {

  let answerStat;

  if (timer < 10) {
    answerStat = bonusType.FAST;
  } else if (timer > 20) {
    answerStat = bonusType.SLOW;
  }

  return answerStat;
};

export const checkAnswer = (level, answers) => {

  let isAllAnswersCorrect = 'undefined';

  /**
   *
   * @param {array} array - массив типов изображения из всех ответов уровня
   * @return {string} unique - значение типа изображения, которое не повторяется
   */
  const findUnique = (array) => {
    let photoNumber = 0;
    let paintNumber = 0;

    array.forEach(
      (item) => {
        if (item === 'photo') {
          photoNumber++;
        } else {
          paintNumber++;
        }
      }
    );

    return photoNumber === 1
      ? 'photo'
      : 'paint';
  };

  if (level.question.type === 'triple') {

    const uniqueType = findUnique(level.question.content.map(
        (question) => {
          return question.imageType;
        }
      )
    );
    isAllAnswersCorrect = (answers[0] === uniqueType);
  } else {
    isAllAnswersCorrect = level.question.content.every(
        (question, index) => {
          return question.imageType === answers[index];
        }
      );
  }
  return isAllAnswersCorrect
    ? 'correct'
    : 'wrong';
};

export const recordGame = () => {
  return {};
};
