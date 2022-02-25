//* Отлавливает клик кнопки отправки в избранное и отправляет данные в бд
const btnFavorit = document.querySelector('#btnFavorit');
const btnCart = document.querySelector('#btnCart');
//* Кнопка сбора и отправки данных из формы носка в бд(isFavorit: true)
btnFavorit?.addEventListener('click', async (event) => {
  const dataBtn = event.target.dataset.namebtn;
  const inputColorValue = document.querySelector('.box-sock').style.backgroundColor;
  let inputPatternValue = document.querySelector('.sock-pattern').style.background;
  const scale = document?.querySelector('.sock-pattern').style.transform;

  if (!inputPatternValue) {
    inputPatternValue = 'url("../img/patterns/trans.png)';
  }
  const response = await fetch('/generator', {
    method: 'POST',
    body: JSON.stringify({
      inputColorValue,
      inputPatternValue,
      dataBtn,
      scale,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = await response.text();
});
//* Кнопка сбора и отправки данных из формы носка в бд(inCart: true)
btnCart?.addEventListener('click', async (event) => {
  const dataBtn = event.target.dataset.namebtn;
  let inputColorValue = document.querySelector('.box-sock').style.backgroundColor;
  let inputPatternValue = document.querySelector('.sock-pattern').style.background;
  const scale = document?.querySelector('.sock-pattern').style.transform;
  alert("Вы добавили в корзину")
  if (!inputColorValue) {
    inputColorValue = 'white';
  }
  if (!inputPatternValue) {
    inputPatternValue = 'url("../img/patterns/trans.png)';
  }
  const response = await fetch('/generator', {
    method: 'POST',
    body: JSON.stringify({
      inputColorValue,
      inputPatternValue,
      dataBtn,
      scale,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = await response.text();
});
