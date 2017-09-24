const assert = require('assert');
const app = require('../../src/app');

describe('\'kanban\' service', () => {
  it('registered the service', () => {
    const service = app.service('kanban');

    assert.ok(service, 'Registered the service');
  });
});
