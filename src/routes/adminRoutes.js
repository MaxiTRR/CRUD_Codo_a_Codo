const express = require('express');
const router = express.Router();

router.get('/characters', (req, res) => {
    res.send('Página para ver los productos');
});

router.get('/create', (req, res) => {
    res.send('Página para crear un producto');
});

module.exports = router;