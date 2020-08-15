if(process.env.NODE_ENV == 'production') {
    console.log('production')
} else {
    require('dotenv').config();
}

// require main modules
const express = require('express');

// set server variable
const app = express();

// server settings
app.set('view engine', 'ejs');
app.use(express.static('public'));

// routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/gary', (req, res) => {
    res.render('gary');
});

app.get('/sandi', (req, res) => {
    res.render('sandi');
});

app.get('/tim', (req, res) => {
    res.render('tim');
});

// start server
app.listen(process.env.PORT, () => console.log('Profile server started...') );