const middleware = {},
      User       = require('../models/user');

middleware.loggedIn = (req, res, next) => {
    if(req.isAuthenticated()) {
        return next();
    }

    res.send('unauthorized');
}

module.exports = middleware;