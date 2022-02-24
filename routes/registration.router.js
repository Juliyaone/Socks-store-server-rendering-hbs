const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');
const { checkIsSession, checkIsNotSession } = require('../middleware');

router.get('/', checkIsNotSession, async (req, res) => {
  res.render('registration');
});

router.post('/api/reg', async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const user = await User.create({
      email,
      username,
      password: await bcrypt.hash(password, 10),
    });
    req.session.user = user;
    req.session.userId = user.id;
    req.session.username = user.username;
    return res.json({ isSuccess: true, user });
  } catch (error) {
    return res.json({ isSuccess: false, message: error.message || 'Непонятно' });
  }
});

module.exports = router;
