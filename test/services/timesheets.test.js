const assert = require('assert');
const app = require('../../src/app');

describe('\'timesheets\' service', () => {
  it('registered the service', () => {
    const service = app.service('timesheets');

    assert.ok(service, 'Registered the service');
  });
});
