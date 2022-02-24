const router = require('express').Router();
const { User } = require('../db/models');
const { CartSock } = require('../db/models');

// тут обрабатываем запрпос на адрес /generator

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