const router = require('express').Router();
const { User } = require('../db/models');
const { CartSock } = require('../db/models');

// тут обрабатываем запрпос на адрес /cart
router.get('/', async (req, res) => {
  const { userId } = req.session;
  try {
    const cartSocks = await CartSock.findAll({
      where: { userId, inCart: true },
    });
    res.render('cart', { cartSocks });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
