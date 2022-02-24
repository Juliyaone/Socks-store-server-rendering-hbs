const router = require('express').Router();
const { CartSock } = require('../db/models');
// const { User } = require('../db/models');

// тут обрабатываем запрпос на адрес /generator
router.get('/', (req, res) => {
  res.render('generator');
});

router.post('/', async (req, res) => {
  const { inputColorValue, inputPatternValue } = req.body;
  const userId = await req.session.userId;
  // console.log(id, inputColorValue, inputPatternValue);

  try {
    const newSock = await CartSock.create({
      userId, color: inputColorValue, pattern: inputPatternValue, isFavorit: true,
    });
    res.json(newSock);
  } catch (error) {
    console.log(error, 'Не удалось записать в базу данных');
    res.redirect('/generator');
  }
  // // res.redirect('/generator');
  // // res.sendStatus(200);
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
