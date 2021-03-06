// kanban-task-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const kanbanTask = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: false, default: '' },
    priority: { type: Number, required: false, default: 0 },
    tags: [{ type: String }],

    'kanban-status': { type: Schema.Types.ObjectId, ref: 'kanban-status', required: true },
    creator: { type: Schema.Types.ObjectId, ref: 'users', required: true },
    assignee: { type: Schema.Types.ObjectId, ref: 'users', required: false, default: null },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('kanbanTask', kanbanTask);
};
