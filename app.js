if(process.env.NODE_ENV == 'production') {
    console.log('production')
} else {
    require('dotenv').config();
}

// require main modules
const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      methodOverride = require('method-override'),
      session = require('express-session'),
      MemoryStore   = require('memorystore')(session),
      passport      = require('passport'),
      LocalStrategy = require('passport-local'),
      User          = require('./models/user');


// connect to the database
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

// set server variable
const app = express();

// server settings
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

// create a session for the server
app.use(session({
    cookie: { secure: false, maxAge: 86400000  },
    secret: 'This is my family',
    store: new MemoryStore({
        checkPeriod: 86400000
    }),
    saveUninitialized: true,
    resave: false
}));

// initialize passport 
app.use(passport.initialize());
app.use(passport.session());

// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// middleware 
const auth = require('./middleware/auth');

// routes
const mainRoutes = require('./routes/main'),
      loginRoutes = require('./routes/login'),
      profileRoutes = require('./routes/profile');

app.use('/', mainRoutes); // main routes

app.use('/login', loginRoutes); // login routes

app.use('/profile', auth.loggedIn, profileRoutes); // profile routes

// start server
app.listen(process.env.PORT, () => console.log('Profile server started...') );