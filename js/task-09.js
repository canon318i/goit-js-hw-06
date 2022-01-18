const bodyRef = document.querySelector('body');
const buttonRef = document.querySelector("button.change-color");
const spanRef = document.querySelector("span.color");

const onButtonClick = () => {
  
  const bkgColor = getRandomHexColor();
  bodyRef.style.backgroundColor = bkgColor;
  spanRef.textContent = bkgColor;
}

console.log(buttonRef);

buttonRef.addEventListener('click', onButtonClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}