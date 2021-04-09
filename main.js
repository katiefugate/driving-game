var data = {
  position: 'east',
  location: {
    x: 0,
    y: 0
  }
};

var car = document.querySelector('.car');

function keydownHandler(event) {
  if (event.key === 'ArrowRight') {
    car.className = 'car rotateRight';
    data.position = 'east';
  } else if (event.key === 'ArrowLeft') {
    car.className = 'car rotateLeft';
    data.position = 'west';
  } else if (event.key === 'ArrowDown') {
    car.className = 'car rotateDown';
    data.position = 'south';
  } else if (event.key === 'ArrowUp') {
    car.className = 'car rotateUp';
    data.position = 'north';
  } else if (event.key === ' ') {
    setInterval(move, 16);
  }
}

var i = 0;
function move() {
  car.style.left = i + 'px';
  i = i + 5;
  data.location.x = i;
}

document.addEventListener('keydown', keydownHandler);
