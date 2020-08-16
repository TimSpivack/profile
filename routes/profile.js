const express = require('express'),
      router  = express.Router(),
      User    = require('../models/user'),
      upload  = require('../services/upload');

router.get('/', (req, res) => {
    res.render('profile/index')
});

router.put('/', async (req, res) => {
    try {
        const updates = {
            about: req.body.about,
            experience: req.body.experience,
            hobbies: req.body.hobbies
        }
        await User.findByIdAndUpdate(req.body.user, updates);
        res.redirect('back');
    } catch (err) {
        throw err;
    }
});

router.post('/:id/image', upload.single('image'), async (req, res) => {
    try {
        await User.findById(req.params.id, (err, user) => {
            user.photo = req.file.location;
            user.save();
        });
        res.redirect('back');
    } catch (err) {
        throw err;
    }
})

module.exports = router;