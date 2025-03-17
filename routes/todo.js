const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/todo', { tasks: req.session.tasks || [] });
});

router.post('/add', (req, res) => {
  if (!req.session.tasks) req.session.tasks = [];
  req.session.tasks.push(req.body.taskName);
  res.redirect('/todo');
});

router.post('/done/:index', (req, res) => {
  const index = req.params.index;
  if (req.session.tasks && index < req.session.tasks.length) {
    req.session.tasks.splice(index, 1);
  }
  res.redirect('/todo');
});

module.exports = router;