// setup canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

const displayNum = document.getElementById('displayNum')


// function to generate random number
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// Create Shape Prototype
function Shape(x, y, velX, velY, exists) {
  constructor: Shape,
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.exists = exists;
}

//  // Create Prototypes from Shape
Ball.prototype = Object.create(Shape.prototype)
EvilCircle.prototype = Object.create(Shape.prototype)

// Ball Constructor
function Ball(x, y, velX, velY, exists, color, size) {
  Shape.call(this, x, y, velX, velY, exists);
  this.color = color;
  this.size = size;
}

// Draw Ball
Ball.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}

// Test Ball Drawing
let testBall = new Ball(50, 100, 4, 4, true, 'blue', 10);
testBall.x
testBall.size
testBall.color
testBall.draw()

// Update Ball Position
Ball.prototype.update = function() {
  if ((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }
  if ((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }
  if ((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }
  if ((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }
  this.x += this.velX;
  this.y += this.velY;
}

Ball.prototype.collisionDetect = function() {
  for (let j = 0; j < balls.length; j++) {
    if (!(this === balls[j]) && balls[j].exists) {
      const dx = this.x - balls[j].x;
      const dy = this.y - balls[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + balls[j].size) {
        balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
      }
    }
  }
}

//  Move Balls
let balls = [];  

// Number of Ball() instances 
while (balls.length < 25) {
  let size = random(10,20);
  let exists = true;
  let ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size,width - size),
    random(0 + size,height - size),
    random(-7,7),
    random(-7,7),
    exists,
    'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
    size
  );
  balls.push(ball);
}

// Evil Circle Constructor
function EvilCircle(x, y, velX, velY, exists, color, size) {
  Shape.call(this, x, y, 20, 20, exists);
  this.color = color;
  this.size = size;
 }

EvilCircle.prototype.draw = function() {
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.stroke();
}

// Test Evil Circle Drawing
let testEvilCircle = new Ball(150, 100, 4, 4, true, 'red', 10);
testEvilCircle.x
testEvilCircle.size
testEvilCircle.color
testEvilCircle.draw()


EvilCircle.prototype.checkBounds = function() {
  if ((this.x + this.size) >= width) {
    this.x = -(this.x);
  }

  if ((this.x - this.size) <= 0) {
    this.x = -(this.x);
  }

  if ((this.y + this.size) >= height) {
    this.y = -(this.y);
  }

  if ((this.y - this.size) <= 0) {
    this.y = -(this.y);
  }
}

// Controller to move Evil Circle around
EvilCircle.prototype.setControls = function() {
  window.onkeydown = function(e) {
    switch (e.key) {
      case 'a': EvilCircle1.x -= EvilCircle1.velX;
      break;
      case 'd': EvilCircle1.x += EvilCircle1.velX;
      break;
      case 'w': EvilCircle1.y -= EvilCircle1.velY;
      break;
      case 's': EvilCircle1.y += EvilCircle1.velY;
      break;
      case 'j': EvilCircle2.x -= EvilCircle2.velX;
      break;
      case 'l': EvilCircle2.x += EvilCircle2.velX;
      break;
      case 'i': EvilCircle2.y -= EvilCircle2.velY;
      break;
      case 'k': EvilCircle2.y += EvilCircle2.velY;
      break;
    }
  }
}


// Collision detect modified to eat balls
EvilCircle.prototype.collisionDetect = function() {
  let count = 0
  for (let j = 0; j < balls.length; j++) {
    displayNum.innerText = count
    if (balls[j].exists) {
      count++
      const dx = this.x - balls[j].x;
      const dy = this.y - balls[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < this.size + balls[j].size) {
        balls[j] = [];        
      }
    }
  }
}

EvilCircle1 = new EvilCircle(100, 150, 4, 4, true, 'orange', 20);
EvilCircle1.setControls();
EvilCircle2 = new EvilCircle(200, 150, 4, 4, true, 'red', 20);
EvilCircle2.setControls();

//  Animate Balls and Evil Circle
function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);
    
  EvilCircle1.draw();
  EvilCircle1.checkBounds();
  EvilCircle1.collisionDetect();
  EvilCircle2.draw();
  EvilCircle2.checkBounds();
  EvilCircle2.collisionDetect();

    for (let i = 0; i < balls.length; i++) {
      if (balls[i].exists) {
        balls[i].draw();
        balls[i].update();
        balls[i].collisionDetect();
      }

    }
    requestAnimationFrame(loop);
}

loop();
