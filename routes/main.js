const express = require('express'),
      router  = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/gary', (req, res) => {
    res.render('gary');
});

router.get('/sandi', (req, res) => {
    res.render('sandi');
});

router.get('/tim', (req, res) => {
    res.render('tim');
});

module.exports = router;