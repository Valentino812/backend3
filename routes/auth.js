const express = require("express");
const router = express.Router();

// 2.Sessions
router.get('/login', async (req, res) => {
    // if the user has logged-in, redirect to index
    if (req.session.user) {
        res.redirect('/');
    } else {
        res.render('pages/login');
    }
});

// 1.LOGIN PAGE 
// router.get("/login", async function (req, res) {
//     res.render("pages/login");
// });

// 2.SESSIONS
router.post("/login", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    if (username === "admin" && password === "admin") {
        // Implement sessions to check user is logged-in
        req.session.user = "admin";
        res.redirect("/");
    } else {
        // Redirect and render login page with error message
        return res.render("pages/login", {
            error: "Wrong username or password"
        });
    }
});

// 1.LOGIN PAGE
// router.post("/login", async function (req, res) {
//     const username = req.body.username;
//     const password = req.body.password;

//     if (username === "admin" && password === "admin") {
//         res.redirect("/");
//     } else {
//         return res.render("pages/login", {
//             error: "Wrong username or password"
//         });
//     }
// });

module.exports = router;
