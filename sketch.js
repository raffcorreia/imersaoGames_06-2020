function setup() {
  createCanvas(800, 600);
  jogo = new Jogo();
  jogo.setup();  

  //frameRate(20);
  //trilhaSonora.loop();
}


function keyPressed() {
 jogo.keyPressed(key);
}


function draw() {
  jogo.draw();
}


//função criada por raffcorreia para fazer o som funcionar mesmo rodando o jogo fora do P5
function mouseClicked() {
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    if (!somEstaTocando) {
      trilhaSonora.loop();
      somEstaTocando = true;
    } else {
      trilhaSonora.stop();  
      somEstaTocando = false;
    }
  }
}