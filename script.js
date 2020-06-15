'use string';
function game() {
  const prNum = Math.floor((Math.random() * 2) + 1);
  const num = prompt('Угадай число от 1 до 100');
  let count = 10;
  console.log(prNum);
  if (isNaN(num)) {
    alert('Загаданное число больше, осталось попыток' + (count - 1));
  } else if(num > prNum) {
    alert('Загаданное число меньше, осталось попыток' + (count - 1));
  } else if (num < prNum) {
    alert('Загаданное число больше');
  } else if(num <= 100 || num >= 1){
    alert('Введите число от 1 до 100')
  } else if (num === prNum) {
    let question1 = alert('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?!');
    if (question1 === true) {
      location.reload();
    } else {
      close();
    }
  }
  else {
    let question2 = confirm('Попытки закончились, хотите сыграть еще?');
    if (questio2 === true) {
      location.reload();
    } else {
      close();
    }
  }
}
game();