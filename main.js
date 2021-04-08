var data = {
  position: 'east'
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
  }
}

document.addEventListener('keydown', keydownHandler);
