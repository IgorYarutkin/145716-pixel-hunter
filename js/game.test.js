import assert from 'assert';
import {checkTimer} from './game';
import {checkAnswer} from './game';

describe('gameLevel', function () {

  describe('checkAnswer', function () {

    describe('checkTimer', function () {

      it('should return "fast", if timer less than 10 seconds', function () {
        assert.equal('fast', checkTimer(8));
      });
      it('should return "slow", if timer 20 seconds and more', function () {
        assert.equal('slow', checkTimer(22));
      });
    });

    describe('checkAnswerCorrectness', function () {

      describe('checkAnswer (one image block)', function () {

        it('should return "wrong" or "correct" according to concurrence type of image and answer', function () {
          assert.equal(
              'correct',
              checkAnswer(
                [
                  {
                    image: {
                      url: 'http://placehold.it/705x455',
                      width: 705,
                      height: 455
                    },
                    type: 'paint'
                  },
                  {
                    image: {
                      url: 'http://placehold.it/705x455',
                      width: 705,
                      height: 455
                    },
                    type: 'paint'
                  },
                ],
                [
                  'paint',
                  'paint'
                ]
              )
          );
        });
        it('should return "wrong" or "correct" according to concurrence type of image and answer', function () {
          assert.equal(
            'wrong',
            checkAnswer(
              [
                {
                  image: {
                    url: 'http://placehold.it/705x455',
                    width: 705,
                    height: 455
                  },
                  type: 'paint'
                },
                {
                  image: {
                    url: 'http://placehold.it/705x455',
                    width: 705,
                    height: 455
                  },
                  type: 'paint'
                },
              ],
              [
                'paint',
                'photo'
              ]
            )
          );
        });
      });
    });
  });
});


