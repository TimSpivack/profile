const express = require('express'),
      router  = express.Router(),
      User    = require('../models/user'),
      passport = require('passport');

router.get('/', (req, res) => {
    res.render('login')
});

router.post('/', passport.authenticate('local'), (req, res) => {
    res.redirect('/profile');
});

module.exports = router;