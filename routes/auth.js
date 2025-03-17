const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
  // if the user has logged-in, redirect to index (homepage)
  if (req.session.user) {
    res.redirect('/');
  } else {
    res.render('pages/login', { layout: false });
  }
});

router.post("/login", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (username === "admin" && password === "admin") {
      // Implement sessions to check user is logged-in
      req.session.user = "admin";

      // Redirect to member area
      res.redirect("/");
  } else {
      // Redirect and render login page with error message
      return res.render("pages/login", { layout: false,
          error: "Wrong username or password"
      });
  }
});

router.get('/logout', (req, res) => {
    // destroy all session
    req.session.destroy();
 
    // redirect to login
    res.redirect('/auth/login');
});

module.exports = router;