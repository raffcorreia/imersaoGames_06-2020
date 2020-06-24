//variáveis das imagens
let imagemPlanoDeFundo;
let imagemHipsta;
let imagemInimigo;

//variáveis das classes que serão instanciadas
let cenario;
let personagem;
let inimigo;

//matrizes dos sprites
const matrizInimigo = [
[0, 0],
[104, 0],
[208, 0],
[312, 0],
[0, 104],
[104, 104],
[208, 104],
[312, 104],
[0, 208],
[104, 208],
[208, 208],
[312, 208],
[0, 312],
[104, 312],
[208, 312],
[312, 312],
[0, 416],
[104, 416],
[208, 416],
[312, 416],
[0, 520],
[104, 520],
[208, 520],
[312, 520],
[0, 624],
[104, 624],
[208, 624],
[312, 624],
];
const matrizHipsta =[
      [0, 0],
      [220, 0],
      [440, 0],
      [660, 0],
      [0, 270],
      [220, 270],
      [440, 270],
      [660, 270],
      [0, 540],
      [220, 540],
      [440, 540],
      [660, 540],
      [0, 810],
      [220, 810],
      [440, 810],
      [660, 810],
    ];

//variáveis de sons
let trilhaSonora;
let somEstaTocando = false;


function preload() {
  imagemPlanoDeFundo = loadImage('imagens/cenario/floresta.png');
  imagemHipsta = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  
  trilhaSonora = loadSound('sons/trilha_jogo.mp3');
}


function setup() {
  createCanvas(800, 600);
  cenario = new Cenario(imagemPlanoDeFundo, 3);
  personagem = new Personagem(matrizHipsta, 
                        imagemHipsta,
                        0,
                        110,
                        135,
                        220,
                        270);
  inimigo = new Inimigo(matrizInimigo, 
                        imagemInimigo,
                        width -52,
                        52,
                        52,
                        104,
                        104);
  
  //frameRate(10);
  //trilhaSonora.loop();
}


function keyPressed() {
  if(key === 'ArrowUp') {
    personagem.pula();
  }
}


function draw() {
  cenario.exibe();
  cenario.move();
  
  personagem.exibe();
  personagem.aplicaGravidade();
  
  inimigo.exibe();
  inimigo.move();

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