'use strict';

// Initializes the `mailer` service on path `/mailer`
const Mailer = require('feathers-mailer');
const hooks = require('./mailer.hooks');
const filters = require('./mailer.filters');

module.exports = function () {
  const app = this;
  const mailer = Mailer(app.get('mailer'));

  // Initialize our service with any options it requires
  app.use('/mailer', mailer);

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('mailer');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
