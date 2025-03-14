// routes/index.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  if (!req.session.user) {
    res.redirect('/auth/login');
  } else {
    res.render('pages/index');
  }
});

module.exports = router;