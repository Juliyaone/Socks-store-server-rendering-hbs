const router = require('express').Router();
const { User } = require('../db/models');
const { CartSock } = require('../db/models');

// тут обрабатываем запрпос на адрес /favorites
router.get('/', async (req, res) => {
  const { userId } = req.session;
  try {
    const favoritesSocks = await CartSock.findAll({
      where: { userId, isFavorit: true },
    });
    res.render('favorites', { favoritesSocks });
  } catch (error) {
    console.log(error);
  }
});

router.get('/socks', async (req, res) => {
  const { socksId } = req.query;
  try {
    const favoritesSocks = await CartSock.findOne({ id: socksId, raw: true });
    console.log(favoritesSocks);
    const {color, pattern } = favoritesSocks;
    res.render('copySocks', { color, pattern });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
