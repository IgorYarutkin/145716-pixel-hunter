import assert from 'assert';
import {checkTimer} from './game';

describe('gameLevel', function () {

  describe('checkAnswer', function () {

    describe('checkTimer', function () {

      it('should return "unknown", if timer 0 seconds and less or timer in not a number', function () {
        assert.equal('unknown', checkTimer(0));
      });
      it('should return "unknown", if timer 0 seconds and less or timer in not a number', function () {
        assert.equal('unknown', checkTimer(-5));
      });
      it('should return "fast", if timer less than 10 seconds', function () {
        assert.equal('fast', checkTimer(8));
      });
      it('should return "correct", if timer 10 seconds and more & less than 20 seconds', function () {
        assert.equal('correct', checkTimer(15));
      });
      it('should return "slow", if timer 20 seconds and more & less than 30 seconds', function () {
        assert.equal('slow', checkTimer(22));
      });
      it('should return "wrong", if timer 30 seconds and more', function () {
        assert.equal('wrong', checkTimer(30));
      });
    });
  });
});

