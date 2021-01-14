// Require the built in 'assertion' library
import { strict as assert } from 'assert';

function sum(a, b) {
  return a + b;
}

describe('Akamai EdgeWorkers Sum', function() {
  it('Should sum 1 + 2 and expect 3', function() {  
    assert.equal(3, sum(1,2));
  });
});

