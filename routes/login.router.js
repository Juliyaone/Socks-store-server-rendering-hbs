const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');
const { checkIsSession, checkIsNotSession } = require('../middleware');

router.get('/', checkIsNotSession, (req, res) => {
  res.render('login');
});

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  const currentUser = await User.findOne({
    where: {
      email,
    },
  });

  req.session.user = currentUser;
  req.session.userId = currentUser.id;
  req.session.username = currentUser.username;
  if (currentUser && (await bcrypt.compare(password, currentUser.password))) {
    res.json({ url: '/', Islogin: true });
  } else {
    res.json({ url: '/login', Islogin: false });
  }
});

module.exports = router;
