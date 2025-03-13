const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(express.json()); // Untuk membaca JSON di dari request
app.use(express.urlencoded({ extended: true })); // Untuk membaca form data (x-www-form-urlencoded)

// Routes
const index = require("./routes/index");
const auth = require("./routes/auth");

app.use('/', index)
app.use("/auth", auth);

app.listen(3000)
console.log("Server is running on port 3000");
