const router = require('express').Router();
const { CartSock } = require('../db/models');
const { checkIsSession, checkIsNotSession } = require('../middleware');
// const { User } = require('../db/models');

// тут обрабатываем запрпос на адрес /generator
router.get('/', checkIsSession, (req, res) => {
  res.render('generator');
});

router.post('/', async (req, res) => {
  const {
    inputColorValue, inputPatternValue, dataBtn, scale,
  } = req.body;
  const { userId } = req.session;
  try {
    if (dataBtn === 'isFavorite') {
      const newSock = await CartSock.create({
        userId,
        color: inputColorValue,
        pattern: inputPatternValue,
        inCart: false,
        isFavorit: true,
        scale,
      });
      res.json(newSock);
    } else {
      const newSock = await CartSock.create({
        userId,
        color: inputColorValue,
        pattern: inputPatternValue,
        isFavorit: false,
        inCart: true,
        scale,
      });
      res.json(newSock);
    }
  } catch (error) {
    console.log(error, 'Не удалось записать в базу данных');
    res.redirect('/generator');
  }
});

module.exports = router;

// Сервер создает в базе карточку звука, данные поступают из формы добавления карточки
// (форма в нескольких HBS, появляется при авторизации)
// router.post('/', async (req, res) => {
//   const userid = req.session.user?.id;
//   console.log(userid);
//   const { nameMusic, fileImg } = req.body;
//   try {
//     const createdSound = await Music.create({
//       nameMusic,
//       fileImg,
//       userId: userid,
//     });
//     res.json({ url: '/profile', message: 'Звук добавлен', createdSound });
//   } catch (error) {
//     res.status(500).json({ message: 'Ошибка' });
//   }
// });
