const express = require("express");
const bodyParser = require("body-parser");
const session = require('express-session'); //2.SESSIONS

const app = express();

app.set("view engine", "ejs");

// 2.SESSIONS 
// body-parser to parse request body
app.use(bodyParser.urlencoded());

// static files
app.use(express.static('public'));

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
