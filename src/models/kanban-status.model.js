// kanban-status-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const kanbanStatus = new Schema({
    name: { type: String, required: true },
    column: { type: Number, require: true, default: 0},
    project: { type: Schema.Types.ObjectId, ref: 'project', required: true },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('kanbanStatus', kanbanStatus);
};
