const path = require('path');
const express = require('express');
const multer = require('multer');
const routes = require('./index');
const app = express();


app.use('/client', express.static(path.join(__dirname, '../../client')));
app.use('/pages', express.static(path.join(__dirname, '../../client/pages')));
app.use('/assets', express.static(path.join(__dirname, '../../client/assets')));
app.use('/uploads', express.static('uploads'));
app.use(express.json());

app.use(express.static('/client/assets/js/listes', {
  setHeaders: (res, path) => {
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));


// si l'url commence par autre chose que /api je reroute vers index.html
app.get('/*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../../client/home.html'));
});

// Si l'url est /api, on utilise les routes définies dans config/index.js
app.use('/api/', routes);

// Multer est un middleware de gestion des fichiers uploadés
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

app.post('/api/uploads', upload.single('file'), (req, res) => {
s.send('Image téléchargée avec succès');
});

// On exporte l'application express pour pouvoir l'utiliser dans d'autres fichiers


module.exports = app;