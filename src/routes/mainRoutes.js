const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Inicio | CRUD MVC | Maximiliano Torres',
    });
});

router.get('/acercade', (req, res) => {
    res.render('acercade', {
        title: 'Acerca De | CRUD MVC'
    });
});

module.exports = router;