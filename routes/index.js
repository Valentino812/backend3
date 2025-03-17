const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // check user session
  if (!req.session.user) {
    res.redirect('/auth/login');
  } else {
    res.send('Selamat datang di home page');
  }
});

module.exports = router;