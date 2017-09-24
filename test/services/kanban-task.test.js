const assert = require('assert');
const app = require('../../src/app');

describe('\'kanban-task\' service', () => {
  it('registered the service', () => {
    const service = app.service('kanban-task');

    assert.ok(service, 'Registered the service');
  });
});
