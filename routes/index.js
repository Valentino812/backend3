const express = require('express');

const router = express.Router();

// 1.LOGIN PAGE
// router.get('/', async (req, res) => {
//     res.send('ok');
// });

// 2.SESSIONS
router.get('/', async (req, res) => {
    // check user session
    if (!req.session.user) {
        res.redirect('/auth/login');
    } else {
        res.send('ok');
    }
});

module.exports = router;