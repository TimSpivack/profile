const middleware = {},
      User       = require('../models/user');

middleware.loggedIn = (req, res, next) => {
    if(req.isAuthenticated()) {
        res.locals.user = req.user;
        return next();
    }
    res.redirect('/login');
}

module.exports = middleware;