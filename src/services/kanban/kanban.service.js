// Initializes the `kanban` service on path `/kanban`
const createService = require('feathers-mongoose');
const createModel = require('../../models/kanban.model');
const hooks = require('./kanban.hooks');
const filters = require('./kanban.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'kanban',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/kanban', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('kanban');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
