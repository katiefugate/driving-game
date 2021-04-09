var data = {
  position: 'east',
  started: false,
  location: {
    x: 0,
    y: 0
  }
};

var car = document.querySelector('.car');
var intervalId = null;

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
    if (data.started === false) {
      intervalId = setInterval(move, 16);
      data.started = true;
    } else {
      clearInterval(intervalId);
      data.started = false;
    }
  }
}

var i = 0;
var k = 0;
function move() {
  if (data.position === 'east') {
    car.style.left = i + 'px';
    i = i + 5;
    data.location.x = i;
  } else if (data.position === 'west') {
    car.style.left = i + 'px';
    i = i - 5;
    data.location.x = i;
  } else if (data.position === 'south') {
    car.style.top = k + 'px';
    k = k + 5;
    data.location.y = k;
  } else if (data.position === 'north') {
    car.style.top = k + 'px';
    k = k - 5;
    data.location.y = k;
  }
}

document.addEventListener('keydown', keydownHandler);
