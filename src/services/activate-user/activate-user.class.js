/* eslint-disable no-unused-vars */
const errors = require('feathers-errors');

class Service {
  constructor (options) {
    this.options = options || {};
  }

  setup (app, path) {
    this.app = app;
  }

  create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current)));
    }

    if(data._id === undefined) return new errors.BadRequest('_id is missing');

    return this.app.service('users').get(data._id)
    .then(res=>{console.log(res);return res;})
    .then(res => res.activated ? Promise.reject(new errors.Conflict('user is already activated')) : undefined)
    .then(res => this.app.service('users').patch(data._id, { activated: true }))
    .then(res => ({ user: { _id: res._id, username: res.username, firstname: res.firstname, lastname: res.lastname }, activated: res.activated }))
  }
}

module.exports = function (options) {
  return new Service(options);
};

module.exports.Service = Service;
