const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Serving Hello Page');
    res.render('hello', { name: 'Jean', title: 'Hello Page' });
});

module.exports = router;
