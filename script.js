// Typ-effect
const titleText = "Hallo ik ben Tim & welkom op mijn website";
const introText = "Druk op meer info om meer te weten te komen over mij, mijn werk & mijn opkomende projecten ... als het je lukt.";

const titleElement = document.getElementById("typed-title");
const introElement = document.getElementById("typed-intro");

function typeText(element, text, delay = 50, callback = null) {
  let index = 0;
  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, delay);
    } else if (callback) {
      callback();
    }
  }
  type();
}

window.addEventListener('DOMContentLoaded', () => {
  typeText(titleElement, titleText, 50, () => {
    setTimeout(() => {
      typeText(introElement, introText, 30);
    }, 300);
  });
});


// Hyperkinetische stuiterknop
const button = document.querySelector('.crazy-button');

let posX = 100;
let posY = 100;
let velocityX = 4 + Math.random() * 4;
let velocityY = 4 + Math.random() * 4;

function moveButton() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const buttonWidth = button.offsetWidth;
  const buttonHeight = button.offsetHeight;

  posX += velocityX;
  posY += velocityY;

  if (posX + buttonWidth >= screenWidth || posX <= 0) {
    velocityX *= -1.1 * (Math.random() * 0.4 + 0.8);
  }
  if (posY + buttonHeight >= screenHeight || posY <= 0) {
    velocityY *= -1.1 * (Math.random() * 0.4 + 0.8);
  }

  button.style.left = posX + 'px';
  button.style.top = posY + 'px';

  requestAnimationFrame(moveButton);
}

moveButton();
