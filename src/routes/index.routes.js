const express = require('express');
const router = express.Router();
const controller = require('../controller/index.controller');

router.get('/',controller.index);
router.get('/estudios',controller.studies);
router.get('/peliculas',controller.movies);
router.get('/series',controller.series);
router.get('/rutina',controller.rutine);

module.exports = router;