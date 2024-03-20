const path = require('path');
const express = require('express');
const routes = require('./index');
const app = express();


app.use('/client', express.static(path.join(__dirname, '../../client')));
app.use('/pages', express.static(path.join(__dirname, '../../client/pages')));
app.use(express.json());


// si l'url commence par autre chose que /api je reroute vers index.html
app.get('/*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../../client/home.html'));
});

// Si l'url est /api, on utilise les routes définies dans config/index.js
app.use('/api/', routes);

module.exports = app;