'use strict';
let numeroAleatorio = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let puntuacion = 0;
const mayor = function () {
  document.querySelector('.score').textContent = num;
};
const cero = function () {
  if (score === 0) {
    document.querySelector('.message').textContent =
      'Ha superado el numero de intentos. 😢';
  }
};

document.querySelector('.check').addEventListener('click', function () {
  const num = Number(document.querySelector('.guess').value);

  if (!num) {
    console.log(
      (document.querySelector('.message').textContent = ' no existe numero  ')
    );
  } else if (num === numeroAleatorio) {
    document.querySelector('.message').textContent =
      'felicitaciones haz acertado';
    if (puntuacion < score) {
      puntuacion = score;
    }
    document.querySelector('.highscore').textContent = 'score';
    console.log(
      (document.querySelector('.number').textContent = numeroAleatorio)
    );
    document.querySelector('body').style.backgroundColor = '#60b347 ';
    document.querySelector('.number').style.width = '52rem';
  } else if (num > 20) {
    document.querySelector('.message').textContent =
      'coloque un numero menor a 20';
  } else if (num < 0) {
    document.querySelector('.message').textContent =
      'coloque un numero mayor a 0';
  } else if (num > numeroAleatorio) {
    document.querySelector('.message').textContent = 'incorrecto';
    score--;
    document.querySelector('.score').textContent = score;
    cero();
  } else if (num < numeroAleatorio) {
    document.querySelector('.message').textContent = 'incorrecto ';
    score--;

    document.querySelector('.score').textContent = score;
    cero();
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  numeroAleatorio = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'start guess';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
});
