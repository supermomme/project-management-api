'use strict';

const assert = require('assert');
const app = require('../../src/app');

describe('\'activate-user\' service', () => {
  it('registered the service', () => {
    const service = app.service('activate-user');

    assert.ok(service, 'Registered the service');
  });
});
