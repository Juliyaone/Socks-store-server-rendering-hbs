const router = require('express').Router();
const { User } = require('../db/models');
const { CartSock } = require('../db/models');

// тут обрабатываем запрпос на адрес /favorites
router.get('/favorites', async (req, res) => {
  const { userId } = req.session
  try {
    const favoritesSocks = await CartSock.findAll({ 
      where: { userId, isFavorit: true }
    })
    res.render('favorites', { favoritesSocks});
  } catch (error) {
    console.log(error);
  }
})

router.get('/favorite/sock/:id', async (req, res) => {
  const { id } = req.query
  try {
    const favoritesSocks = await CartSock.findByPk(id)
    res.render('favorites', { favoritesSocks});
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;
