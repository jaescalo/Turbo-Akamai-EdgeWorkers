// Require the built in 'assertion' library
var assert = require('assert');

const sum = require("../main");

describe('Akamai EdgeWorkers', function() {
  it('Should sum 1 + 2 and expect 3', function() {  
    assert.equal(3, sum(1,2));

  });
});