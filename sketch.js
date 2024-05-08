let cor;
let x;
let y;
    
function setup() {
  createCanvas(400, 400);
  background(0);
  cor = color(random(0, 255), random(0,255), random(0,255), random(0, 100));
  x = 200
  y = 200
}

function draw() {
  fill(cor);
  circle(x, y, 50);
  rect(x-100, y-100, 50);
  
  if (mouseX < x) {
    x--;
  }
  
  if (mouseX > x) {
    x++;
  }
  
  if (mouseY < y) {
    y--;
  }
  
  if (mouseY > y) {
    y++;
  }
  
  if (mouseIsPressed) {
    cor = color(random(0, 255), random(0,255), random(0,255), random(0, 100));
  }
  
}