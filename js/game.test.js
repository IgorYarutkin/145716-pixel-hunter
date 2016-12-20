import assert from 'assert';
import {checkTimer} from './game';

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
  });
});


