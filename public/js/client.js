// const { formGenerator } = document.forms;
const inputColor = document.getElementById('color');
const inputPattern = document.getElementById('pattern');
const favoritesBtn = document.querySelector('.favoritesBtn');
const cartBtn = document.querySelector('.cartBtn');
const loginFormCl = document.querySelector('.loginFormCl');
const boxColors = document.querySelector('.box-select-color');
const patternBox = document.querySelector('.pattern-box');
const sockPattern = document.querySelector('.sock-pattern');
const polzunok = document.querySelector('#polzun');
const testZoom = document.querySelector('.sock-pattern');
const boxSock = document.querySelector('.box-sock');
// const boxSockColor = document.querySelector('box-sock-color');

document.registrationForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const {
    method,
    action,
    name: { value: username },
    email: { value: email },
    password: { value: password },
    repeatPassword: { value: repeatPassword },
  } = event.target;

  if (password !== repeatPassword) {
    alert('Пароли не совпадают, попробуйте еще раз');
    // window.location.href = '/registration';
  } else {
    const response = await fetch(action, {
      method,
      body: JSON.stringify({ username, email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    console.log(json);

    // Если удалось зарегистрроваться то в json будут поля IsSucces=true, user;
    // Если НЕ удалось зарегистрроваться то в json будут поля IsSucces=false, message;
    if (json.isSuccess) {
      alert(`Регистрация прошла успешно! ${json.user.id}`);
    } else {
      alert(`Не зарегистрирован! ${json.message}`);
    }
    window.location.href = '/';
  }
});

loginFormCl?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const {
    method,
    action,
    email: { value: email },
    password: { value: password },
  } = event.target;

  const response = await fetch(action, {
    method,
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const answer = await response.json();
  // Если удалось войти то в json будут поля Islogin=true, user;
  // Если НЕ удалось войти то в json будут поля Islogin=false, message;

  if (answer.Islogin) {
    window.location.href = answer.url;
  } else {
    window.location.href = answer.url;
    alert(answer.message);
    loginFormCl.innerText = answer.message;
  }
});

//* Добавление цвета носку
boxColors?.addEventListener('click', async (event1) => {
  const btnDataColor = event1.target.dataset;
  // boxSock.style['background-color'] = btnDataColor.btncolor;
  boxSock.style.setProperty('background-color', btnDataColor.btncolor);
});

//* Добавление узора носку
patternBox?.addEventListener('click', async (event) => {
  // const scaleValue = event.target.style.transform;
  // console.log(event.target);
  const btnDataPattern = event.target.dataset;
  sockPattern.style.background = `url('../img/patterns/${(btnDataPattern.btnpattern)}' `;
});

//* работа с ползунком
polzunok?.addEventListener('input', async (event2) => {
  const { value } = event2.target;
  // console.log(event2.target);
  testZoom.style.setProperty('transform', `scale(${value})`);
});

// const formGenerator = document.q
// document.addCardForm?.addEventListener('submit', async (event) => {
//   event.preventDefault();

//   const {
//     method,
//     action,
//     nameMusic: { value: nameMusic },
//     fileImg: { value: fileImg },
//   } = event.target;

//   const response = await fetch(action, {
//     method,
//     body: JSON.stringify({ nameMusic, fileImg }),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   const musicResponse = await response.json();
//   console.log(musicResponse);

//   alert(musicResponse.message);
//   window.location.href = musicResponse.url;
// });

// //* Отлавливает клик кнопки отправки купить и отправляет данные в бд
// cartBtn?.addEventListener('click', async (event) => {
//   const databtn = event.target.dataset.namebtn;
//   const inputColorValue = inputColor.value;
//   const inputPatternValue = inputPattern.value;
//   // console.log(inputColorValue);
//   const response = await fetch('/generator', {
//     method: 'POST',
//     body: JSON.stringify({ inputColorValue, inputPatternValue, databtn }),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   const result = await response.text();
// });

// //* Отлавливает клик кнопки отправки в избранное и отправляет данные в бд
// favoritesBtn?.addEventListener('click', async (event) => {
//   // console.log(data);
//   const databtn = event.target.dataset.namebtn;
//   const inputColorValue = inputColor.value;
//   const inputPatternValue = inputPattern.value;
//   // console.log(inputColorValue);
//   const response = await fetch('/generator', {
//     method: 'POST',
//     body: JSON.stringify({ inputColorValue, inputPatternValue, databtn }),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   const result = await response.text();
// });
