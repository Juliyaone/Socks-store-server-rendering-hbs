const router = require('express').Router();

router.get('/', (req, res) => {
  console.log('111111', req.session?.userId);

  if (req.session.userId) {
    req.session.destroy();
    res.clearCookie('sid');
    res.redirect('/');
  }
});

module.exports = router;
