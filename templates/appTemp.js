require('dotenv').config();
const http = require('http');
const https = require('https');
const express = require('express');

const config = require('./config/config');

const port = config.app.port;
const app = express();
const server =
  config.app.modeServer === 'http'
    ? http.createServer(app)
    : https.createServer(
        {
          key: fs.readFileSync(config.app.openSslKeyPath),
          cert: fs.readFileSync(config.app.openSslCertPath),
        },
        app
      );

require('./server/cors')(app);
require('./server/compression')(app);
require('./server/log')(app);
require('./server/routes')(app);
require('./server/graphql')(app);
require('./server/swagger')(app);
require('./server/cluster')(server, port, config.app.modeCluster);

module.exports = app;
