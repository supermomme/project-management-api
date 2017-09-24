const assert = require('assert');
const app = require('../../src/app');

describe('\'kanban-bundle\' service', () => {
  it('registered the service', () => {
    const service = app.service('kanban-bundle');

    assert.ok(service, 'Registered the service');
  });
});
