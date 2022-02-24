const loginFormCl = document.querySelector('.loginFormCl');

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
