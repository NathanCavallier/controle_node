const express = require('express');
const lullabyController = require('../controllers/lullaby.controller');

const router = express.Router();

router.get('/', lullabyController.getAllLullabies);
router.get('/:id', lullabyController.getOneLullaby);
router.post('/', lullabyController.createLullaby);
router.put('/:id', lullabyController.updateLullaby);
router.delete('/:id', lullabyController.deleteLullaby);

module.exports = router;