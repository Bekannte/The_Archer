let symmetry = 12;
let angle = 360 / symmetry;
let x,y;
var r;
var g;
var b;
var a;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  background(0);
  stroke(255);
  strokeCap(ROUND);
}

function draw() {
  translate(width / 2, height / 2);

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX;
    let pmy = pmouseY;

    if (mouseIsPressed) {
      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        push();
        r = random(50, 255);
        g = random(100, 255);
        b = random(200, 255);
        a = random(0, 100);
        fill(r, g, b, a);
        rect(mx, my, pmx, pmy, 30);
        pop();
      }
    }
  }
}
