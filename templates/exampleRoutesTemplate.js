const express = require('express');
const { exampleController } = require('../controllers');

const router = express.Router();

router.get('/', (req, res) => {
  exampleController.get(req, res);
});

module.exports = router;
