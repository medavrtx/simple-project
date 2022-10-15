const button = document.querySelector('button');
const detail = document.querySelector('p');

button.addEventListener('click', function () {
  document.body.classList.toggle('light');
  document.body.classList.toggle('dark');

  const className = document.body.className;
  if (className == 'light') {
    this.textContent = 'Switch to Dark';
    detail.innerText = 'Light Mode';
  } else {
    this.textContent = 'Switch to Light';
    detail.innerText = 'Dark Mode';
  }
});
