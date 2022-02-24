const router = require('express').Router();

router.get('/', async (req, res) => {
  const { username } = req.session;
  res.render('index', { username });
});

module.exports = router;
