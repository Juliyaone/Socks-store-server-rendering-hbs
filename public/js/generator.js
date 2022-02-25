//* Отлавливает клик кнопки отправки в избранное и отправляет данные в бд
const btnFavorit = document.querySelector('#btnFavorit');
const btnCart = document.querySelector('#btnCart');

btnFavorit?.addEventListener('click', async (event) => {
  const dataBtn = event.target.dataset.namebtn;
  const inputColorValue = document.querySelector('.box-sock').style.backgroundColor;
  let inputPatternValue = document.querySelector('.sock-pattern').style.background;
  if (!inputPatternValue) {
    inputPatternValue = 'url("../img/patterns/trans.png)';
  }
  const response = await fetch('/generator', {
    method: 'POST',
    body: JSON.stringify({
      inputColorValue,
      inputPatternValue,
      dataBtn,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = await response.text();
});

btnCart?.addEventListener('click', async (event) => {
  const dataBtn = event.target.dataset.namebtn;
  const inputColorValue = document.querySelector('.box-sock').style.backgroundColor;
  let inputPatternValue = document.querySelector('.sock-pattern').style.background;
  if (!inputPatternValue) {
    inputPatternValue = 'url("../img/patterns/trans.png)';
  }
  const response = await fetch('/generator', {
    method: 'POST',
    body: JSON.stringify({
      inputColorValue,
      inputPatternValue,
      dataBtn,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = await response.text();
});
