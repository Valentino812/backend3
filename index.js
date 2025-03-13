const express = require("express");
const bodyParser = require("body-parser");
const session = require('express-session'); //2.SESSIONS
const layouts = require('express-ejs-layouts'); //4.LAYOUTS

const app = express();

// body-parser to parse request body
app.use(bodyParser.urlencoded());

// 4.LAYOUTS
// use layouts
app.use(layouts);
app.set('layout', 'layouts/main.ejs');

// place all styles block in the layout at the head
app.set("layout extractStyles", true)

// place all scripts block in the layout at the end
app.set("layout extractScripts", true)

app.set("view engine", "ejs");

// static files
app.use(express.static('public'));


// 2.SESSIONS 
// enabling session
app.use(session({
    secret: 'some_secret_key',
    cookie: {}
}));


// Routes
const index = require("./routes/index");
const auth = require("./routes/auth");

app.use('/', index)
app.use("/auth", auth);

app.listen(3000)
console.log("Server is running on port 3000");
