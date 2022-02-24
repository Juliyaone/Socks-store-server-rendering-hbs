const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('index', { username: 'Bob' });
});

module.exports = router;
