// Require the built in 'assertion' library
import { strict as assert } from 'assert';
import { sum } from '../main.js'

/*
function sum(a, b) {
/  return a + b;
}
*/

describe('Akamai EdgeWorkers Sum', function() {
  it('Should sum 1 + 2 and expect 3', function() {  
    assert.strictEqual(3, sum(1,2));
  });
});