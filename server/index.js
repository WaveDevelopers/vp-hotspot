'use strict';

const Hapi = require('hapi');
const Boom = require('boom');
const fs = require('fs');
const server = new Hapi.Server();

class FileDatabase {

  constructor(filePath) {
    this.filePath = filePath;

    this.refresh();
  }

  validate(token) {
    return !!this.get(token);
  }

  get(token) {
    return this.tokens.filter(tokenData => tokenData.token === token)[0];
  }

  refresh() {
    this.tokens = JSON.parse(fs.readFileSync(this.filePath, 'utf8'));
  }

}

// Create a database which handles the token json file.
const database = new FileDatabase(__dirname + '/tokens.json');

server.connection({
  host: 'localhost',
  port: 8080
});

server.route({
  method: 'GET',
  path: '/token/verify/{token}',
  handler: (request, reply) => {
    const token = request.params.token;
    const is_valid = database.validate(token);

    if (is_valid) {
      reply({token, message: 'Token is valid'});
    } else {
      reply(Boom.forbidden('Token is not valid'));
    }

  }
});

server.route({
  method: 'GET',
  path: '/token/expires/{token}',
  handler: (request, reply) => {
    const tokenData = database.get(request.params.token);

    if (tokenData) {
      reply({
        expires: tokenData.expires
      });
    } else {
      reply(Boom.forbidden('Token is not valid'));
    }
  }
});

server.route({
  method: 'GET',
  path: '/refresh',
  handler: (request, reply) => {
    database.refresh();
    reply({message: 'Refreshed the token database'});
  }
});

server.start(err => {

  if (err) throw err;

  console.log(`Server running at: ${server.info.uri}`);

});
