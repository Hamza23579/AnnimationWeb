/*
 * @name Array of Objects
 * @description Create a Jitter class, instantiate an array of objects
 * and move them around the screen.
 */
let canvas;
let button;
var bugs = []; // array of Jitter objects

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  // button = createButton('Connect');
  // button.style('background-color', color(20, 15, 255));
  // button.style('background-color', '#4CAF50');
  // button.style('padding', '15px 32px');
  // button.style('font-size', '15px');
  // button.style('border-radius', '15px');
  // Create objects
  for (var i=0; i<50; i++) {
    bugs.push(new Lines());
  }
}

function draw() {
  background(50, 89, 100);
  for (var i=0; i<bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
}

// Jitter class
function Lines() {
  this.x1 = random(width);
  this.x2 = random(width);
  this.y1 = random(height);
  this.y2 = random(height);

  this.speed1 = random(-Math.PI, Math.PI);
  this.speed2 = random(-Math.PI, Math.PI);
  this.speed3 = random(-Math.PI, Math.PI);
  this.speed4 = random(-Math.PI, Math.PI);
  this.move = function() {
    this.x1 += Math.sin(this.speed1);
    this.x2 += Math.sin(this.speed2);
    this.y1 += Math.sin(this.speed3);
    this.y2 += Math.sin(this.speed4);
  };

  this.display = function() {
    line(this.x1, this.x2, this.y1, this.y2);
  };
}
