// Initializes the `kanban-task` service on path `/kanban-task`
const createService = require('feathers-mongoose');
const createModel = require('../../models/kanban-task.model');
const hooks = require('./kanban-task.hooks');
const filters = require('./kanban-task.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'kanban-task',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/kanban-task', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('kanban-task');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
