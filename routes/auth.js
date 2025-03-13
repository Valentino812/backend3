const express = require("express");
const router = express.Router();

router.get("/login", async function (req, res) {
    res.render("pages/login");
});

router.post("/login", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (username === "admin" && password === "admin") {
        res.redirect("/");
    } else {
        return res.render("pages/login", {
            error: "Wrong username or password"
        });
    }
});

module.exports = router;
