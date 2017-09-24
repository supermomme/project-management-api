// kanban-status-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const kanbanStatus = new Schema({
    name: { type: String, required: true },
    kanban: { type: Schema.Types.ObjectId, ref: 'kanban', required: true },
    color: { type: String, required: true, default: '#e0e0e0' },
    sort: { type: Number, require: false, default: 0},

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('kanbanStatus', kanbanStatus);
};
