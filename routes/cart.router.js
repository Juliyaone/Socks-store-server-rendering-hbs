const router = require('express').Router();
const { User } = require('../db/models');
const { CartSock } = require('../db/models');

// тут обрабатываем запрпос на адрес /cart
router.get('/', async (req, res) => {
  const { userId } = req.session;
  console.log(userId);
  try {
    const cartSocks = await CartSock.findAll({
      where: { userId, inCart: true },
    });
    console.log(cartSocks);
    res.render('cart', { cartSocks });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
