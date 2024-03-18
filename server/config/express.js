import path from 'path';
import express from 'express';
import routes from './index';

const app = express();


app.use('/assets', express.static(path.join(__dirname, '../../client/assets')));
app.use('/pages', express.static(path.join(__dirname, '../../client/pages')));
app.use(express.json());


// si l'url commence par autre chose que /api je reroute vers index.html
app.get('/*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../../client/home.html'));
});

// Si l'url est /api, on utilise les routes définies dans config/index.js
app.use('/api/', routes);

module.exports = app;