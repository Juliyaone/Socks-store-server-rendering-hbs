const btns = document.querySelectorAll('.copy-btn');
console.log(btns);

const addToClipboard = async (link) => {
  await navigator.clipboard.writeText(link);
};

const copyLink = async (link, btn) => {
  const copied = await addToClipboard(link);
  btn.innerText = 'Copied';
  setTimeout(() => {
    btn.innerText = 'Copy link';
  }, 3000);
};

for (let i = 0; i < btns.length; i += 1) {
  btns[i].addEventListener('click', (event) => {
    const {
      text,
    } = event.target.dataset;
    console.log(text);
    copyLink(text, btns[i]);
  });
}
