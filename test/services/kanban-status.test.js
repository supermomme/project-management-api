const assert = require('assert');
const app = require('../../src/app');

describe('\'kanban-status\' service', () => {
  it('registered the service', () => {
    const service = app.service('kanban-status');

    assert.ok(service, 'Registered the service');
  });
});
