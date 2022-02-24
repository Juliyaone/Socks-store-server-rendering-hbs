const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.get('/', (req, res) => {
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
  if (currentUser && (await bcrypt.compare(password, currentUser.password))) {
    res.json({ url: '/', Islogin: true });
  } else {
    res.json({ url: '/login', Islogin: false });
  }
});

module.exports = router;
