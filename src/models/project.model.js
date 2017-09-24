// project-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const project = new Schema({
    name: { type: String, required: true, unique: true },
    shortName: { type: String, required: true, unique: true },
    kanban: { type: Schema.Types.ObjectId, ref: 'kanban', required: false },
    description: { type: String, required: false, default: '' },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('project', project);
};
