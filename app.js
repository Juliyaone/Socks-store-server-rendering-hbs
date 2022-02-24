const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const FileStore = require('session-file-store')(expressSession);
const hbs = require('hbs');

const {
  sequelize,
} = require('./db/models');

const { CartSock, User } = require('./db/models');

const indexRouter = require('./routes/index.router');
const loginRouter = require('./routes/login.router');
const logoutRouter = require('./routes/logout.router');
const registrationRouter = require('./routes/registration.router');
// const generatorRouter = require('./routes/generator.router');
// const favoritesRouter = require('./routes/favorites.router');
// const cartRouter = require('./routes/cart.router');


const sessionsConfig = {
  store: new FileStore(), // Создаёт папку sessions, а в ней файл с id сессии и наполнение сессии
  name: 'sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'test', // Секретное слово для шифрования, может быть любым
  resave: false, // Пересохранять ли куку при каждом запросе
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};

const app = express();

const PORT = process.env.PORT || 4000;

app.set('view engine', 'hbs');
app.set('views', path.join(process.env.PWD, 'views'));
hbs.registerPartials(path.join(process.env.PWD, 'views', 'partials'));

app.use(morgan('dev'));
app.use(cookieParser());
app.use(expressSession(sessionsConfig));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  if (req.session) {
    res.locals.userId = req.session.userId;
  }
  next();
});

app.use('/', indexRouter);
app.use('/registration', registrationRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
// app.use('/generator', generatorRouter);
// app.use('/favorites', favoritesRouter);
// app.use('/cart', cartRouter);

app.listen(PORT, () => {
  console.log('Сервер запущен на порту', PORT);
});
