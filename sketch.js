let cor;
let formaX; // x
let formaY; // y
let tempo;

function setup() {
  createCanvas(500, 500);
  background(173,216,230);
  cor = color(random(0,255),random(0,255),random(0,255));
  formaX = [0,0,0];
  formaY = [random(height),random(height),random(height)];
}

function draw() {
  
  fill(cor);
  
  for(let cont in formaX){
    rect(formaX[cont],formaY[cont],30, 25);
    formaX[cont] += random(0,10);
    formaY[cont] += random(-10,10);

    if(formaX[cont] >= width) {
    formaX[cont] = 0;
    formaY[cont] = random(height);
  }

  }
  
 
  if(mouseIsPressed) {
      cor = color(random(0,255),random(0,255),random(0,255),random(0,100));
  }
  
  
}