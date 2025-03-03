const express = require("express");
const bodyParser = require("body-parser");
const index = require("./routes/index");

const app = express();

app.set("view engine", "ejs");

// routes
const auth = require("./routes/auth");
app.use("/auth", auth);

app.listen(3000)
console.log("Server is running on port 3000");
