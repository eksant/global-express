const chai = require('chai');
const fs = require('fs');

const actions = require('../bin/actions');

const assert = chai.assert;

describe('Testing Actions :', () => {
  describe('actions.init test', () => {
    it('should return true if folder structure does not exist', () => {
      if (!fs.existsSync('./express')) {
        let result = actions.init();
        assert.equal(result, true);
      }
    });
  });
});
