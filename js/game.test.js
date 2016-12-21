import assert from 'assert';
import {checkTimer} from './game';
import {checkAnswer} from './game';

describe('gameLevel', function () {

  describe('checkAnswer', function () {

    describe('checkTimer', function () {

      it('should return "fast", if timer less than 10 seconds', function () {
        assert.equal('fast', checkTimer(0));
      });
      it('should return "fast", if timer less than 10 seconds', function () {
        assert.equal('fast', checkTimer(5));
      });
      it('should return "fast", if timer less than 10 seconds', function () {
        assert.equal('fast', checkTimer(9));
      });
      it('should return "fast", if timer less than 10 seconds', function () {
        assert.equal('fast', checkTimer(9.99));
      });
      it('should return "undefined", if timer 10 seconds and more but less 20 or equal it', function () {
        assert.equal('undefined', checkTimer(10));
      });
      it('should return "undefined", if timer 10 seconds and more but less 20 or equal it', function () {
        assert.equal('undefined', checkTimer(15));
      });
      it('should return "undefined", if timer 10 seconds and more but less 20 or equal it', function () {
        assert.equal('undefined', checkTimer(19));
      });
      it('should return "undefined", if timer 10 seconds and more but less 20 or equal it', function () {
        assert.equal('undefined', checkTimer(20));
      });
      it('should return "slow", if timer 20 seconds and more', function () {
        assert.equal('slow', checkTimer(20.99));
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
              ],
              [
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
                }
              ],
              [
                'photo'
              ]
            )
          );
        });
      });

      describe('checkAnswer (two image block)', function () {

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

      describe('checkAnswer (three image block)', function () {

        it('should return "wrong" or "correct" according to concurrence type of only image and answer', function () {
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
                  type: 'photo'
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
                'photo'
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
                  type: 'photo'
                },
                {
                  image: {
                    url: 'http://placehold.it/705x455',
                    width: 705,
                    height: 455
                  },
                  type: 'paint'
                }
              ],
              [
                'paint'
              ]
            )
          );
        });
      });

    });
  });
});


