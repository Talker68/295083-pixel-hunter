import assert from 'assert';

describe('Array', function () {
  describe('#IndexOf()', function () {
    it('should return -1 when value is not present', function () {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});
