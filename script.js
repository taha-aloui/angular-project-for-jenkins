const changeColorButton = document.getElementById('changeColorButton');
const body = document.body;

changeColorButton.addEventListener('click', () => {
  const randomColor = getRandomColor();
  body.style.backgroundColor = randomColor;
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

