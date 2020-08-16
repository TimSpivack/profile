const express = require('express'),
router  = express.Router();

router.get('/', (req, res) => {
    res.render('profile/index')
});

module.exports = router;