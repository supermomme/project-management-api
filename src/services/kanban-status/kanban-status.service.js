// Initializes the `kanban-status` service on path `/kanban-status`
const createService = require('feathers-mongoose');
const createModel = require('../../models/kanban-status.model');
const hooks = require('./kanban-status.hooks');
const filters = require('./kanban-status.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'kanban-status',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/kanban-status', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('kanban-status');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
