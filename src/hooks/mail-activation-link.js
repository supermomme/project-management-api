'use strict';

const fs = require('fs')
const Handlebars = require('handlebars');
const template = Handlebars.compile(fs.readFileSync('src/templates/draft.html').toString());

// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    if (hook.result.activated) {
      return hook.app.service('mailer').create({
        from: hook.app.get('mailer').from,
        to: hook.result.email,
        subject: "[Project Management] Aktiviere dein Account!",
        html: template({
          "activationUrl": `${hook.app.get('activationBaseUrl')}/${hook.result._id}`,
          "to": `${hook.result.email}`
        })
      })
      .then(()=>hook)
    }

    return Promise.resolve(hook);
  };
};
