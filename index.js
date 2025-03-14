// index.js
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({
  secret: 'some_secret_key',
  resave: false,
  saveUninitialized: true,
}));

// Routes
const authRoutes = require('./routes/auth');
const indexRoutes = require('./routes/index');
const todoRoutes = require('./routes/todo');

app.use('/', indexRoutes);
app.use('/auth', authRoutes);
app.use('/todo', todoRoutes);

app.listen(3000, () => console.log('Server runs at port 3000...'));