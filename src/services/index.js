const kanbanStatus = require('./kanban-status/kanban-status.service.js');
const kanbanTask = require('./kanban-task/kanban-task.service.js');
const project = require('./project/project.service.js');
const users = require('./users/users.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(kanbanStatus);
  app.configure(kanbanTask);
  app.configure(project);
  app.configure(users);
};
