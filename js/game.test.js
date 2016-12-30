import assert from 'assert';
import answerStatus from './data';
import {bonusType} from './bonus-data';
import {checkTimer} from './game';
import {checkAnswer} from './game';
import {recordGame} from './game';

describe('gameLevel', function () {

  describe('checkAnswer', function () {

    describe('checkTimer', function () {

      it('should return "fast", if timer less than 10 seconds', function () {
        assert.equal('fast', checkTimer(0));
        assert.equal('fast', checkTimer(5));
        assert.equal('fast', checkTimer(9));
        assert.equal('fast', checkTimer(9.99));
      });
      it('should return "undefined", if timer 10 seconds and more but less 20 or equal it', function () {
        assert.equal(undefined, checkTimer(10));
        assert.equal(undefined, checkTimer(15));
        assert.equal(undefined, checkTimer(19));
        assert.equal(undefined, checkTimer(20));
      });
      it('should return "slow", if timer more than 20 seconds', function () {
        assert.equal('slow', checkTimer(20.99));
      });
    });

    describe('checkAnswer', function () {
      // @toDo Добавить в проверку casual и wide данные целого уровня

      describe('for casual questions', function () {

        it('should return "correct" if both choises are right', function () {
          assert.equal(
            'correct',
            checkAnswer(
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
              [
                'photo',
                'photo'
              ]
            )
          );
        });
        it('should return "wrong" if at least one choise is wrong', function () {
          assert.equal(
            'wrong',
            checkAnswer(
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
                      imageType: 'paint'
                    }
                  ]
                }
              },
              [
                'photo',
                'photo'
              ]
            )
          );
        });
      });

      describe('for wide questions', function () {

        it('should return "correct" if choice is right', function () {
          assert.equal(
            'correct',
            checkAnswer(
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
              [
                'paint'
              ]
            )
          );
        });
        it('should return "wrong" if choice is wrong', function () {
          assert.equal(
            'wrong',
            checkAnswer(
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
              [
                'photo'
              ]
            )
          );
        });
      });

      describe('triple questions', function () {

        it('should return "correct" if choice is right', function () {
          assert.equal(
            'correct',
            checkAnswer(
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
                      imageType: 'paint'
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
              },
              [
                'photo'
              ]
            )
          );
        });
        it('should return "wrong" if choice is right', function () {
          assert.equal(
            'wrong',
            checkAnswer(
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
                      imageType: 'paint'
                    }
                  ],
                }
              },
                [
                'paint'
                ]
            )
          );
        });
      });

    });
  });

  describe('recordGame', function () {

    it('if answer is right should add a new record to the stats', function () {
      assert.equal(
        {
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
            }
          ]
        },
        recordGame(
          {
            livesTotal: 3,
            lives: 2,
            stats: [
              {
                status: answerStatus.WRONG
              },
              {
                status: answerStatus.CORRECT,
                bonus: bonusType.SLOW
              }
            ]
          },
          {
            status: answerStatus.CORRECT,
            bonus: bonusType.FAST
          }
        )
      );
    });

    it('if answer is wrong should add a new record to the stats and decrease number of lives', function () {
      assert.equal(
        {
          livesTotal: 3,
          lives: 1,
          stats: [
            {
              status: answerStatus.WRONG
            },
            {
              status: answerStatus.CORRECT,
              bonus: bonusType.SLOW
            },
            {
              status: answerStatus.WRONG
            }
          ]
        },
        recordGame(
          {
            livesTotal: 3,
            lives: 2,
            stats: [
              {
                status: answerStatus.WRONG
              },
              {
                status: answerStatus.CORRECT,
                bonus: bonusType.SLOW
              }
            ]
          },
          {
            status: answerStatus.WRONG
          }
        )
      );
    });
  });
});


