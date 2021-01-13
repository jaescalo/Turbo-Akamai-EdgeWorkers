import { sum } from '../main.js';
// Require the built in 'assertion' library
import { strict as assert } from 'assert';

describe('Akamai EdgeWorkers Sum', function() {
  it('Should sum 1 + 2 and expect 3', function() {  
    assert.equal(3, sum(1,2));
  });
});

