'use strict';

// Initializes the `activate-user` service on path `/activate-user`
const createService = require('./activate-user.class.js');
const hooks = require('./activate-user.hooks');
const filters = require('./activate-user.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');

  const options = {
    name: 'activate-user',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/activate-user', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('activate-user');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
