
let lines = [];
let d = 15;
let l;

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < width; i+=d){
    for (let j = 0; j < height; j+=d){
      lines.push(new Line(i, j, d))
    }
  }
}

function draw() {
  background(25, 200, 25);
  for (let i = 0; i < lines.length; i++){
    lines[i].drawLine();
    if (i !== lines.length - 1)
      lines[i].move(lines[i + 1].y2);
    else
      lines[i].move(lines[i].y2);
  }
  //console.log(lines[0].up);
}


class Line {
  
  constructor(x, y, d){
    this.x = x;
    this.y1 = y;
    this.y2 = y;
    this.d = d;
    this.up = 1;
    this.down = -1;
  }
  
  drawLine() {
    line(this.x, this.y1, this.x + this.d, this.y2);
  }
  
  move(y){
    if (this.y2 > this.y1 + 10 || this.y2 < this.y1 - 10) {
      this.up *= (-1);
    }
    if (this.y1 > y + 10 || this.y1 < y - 10) {
      this.down *= (-1);
    }
    this.y2 = lerp(this.y2, this.y1 + 11 * this.up, 0.05);
    this.y1 = lerp(y, this.y2 + 11 * this.down, 0.05);
  }
  
}