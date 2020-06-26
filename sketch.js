//variáveis das imagens
let imagemPlanoDeFundo;
let pontuacao;
let imagemGameOver;
let imagemHipsta;
let imagemInimigo;
let imagemInimigoGrande;
let imagemInimigoVoador;

//variáveis das classes que serão instanciadas
let cenario;
let personagem;
let inimigo;
let inimigoGrande;
let inimigoVoador;

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
const matrizInimigoGrande = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
];
const matrizInimigoVoador = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
];

const inimigos = [];
let inimigoAtual = 0;


//variáveis de sons
let trilhaSonora;
let somEstaTocando = false;
let somDoPulo;


function preload() {
  imagemPlanoDeFundo = loadImage('imagens/cenario/floresta.png');
  imagemGameOver = loadImage('imagens/assets/game-over.png');
  imagemHipsta = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  
  trilhaSonora = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
}


function setup() {
  createCanvas(800, 600);
  cenario = new Cenario(imagemPlanoDeFundo, 3);
  pontuacao = new Pontuacao();
  personagem = new Personagem(matrizHipsta, 
                        imagemHipsta,
                        0,
                        110,
                        135,
                        30,
                        220,
                        270);
  const inimigo = new Inimigo(matrizInimigo, 
                        imagemInimigo,
                        width -52,
                        52,
                        52,
                        30,
                        104,
                        104,
                        10,
                        100);
  const inimigoGrande = new Inimigo(matrizInimigoGrande, 
                        imagemInimigoGrande,
                        width -52,
                        200,
                        200,
                        0,
                        400,
                        400,
                        10,
                        100);  
  const inimigoVoador = new Inimigo(matrizInimigoVoador, 
                        imagemInimigoVoador,
                        width -52,
                        52,
                        52,
                        200,
                        200,
                        150,
                        5,
                        100); 

    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);

  //frameRate(20);
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

  pontuacao.exibe();
  pontuacao.adicionarPonto();
  
  personagem.exibe();
  personagem.aplicaGravidade();
  
  const inimigo = inimigos[inimigoAtual];
  const inimigoVisivel = inimigo.x < - inimigo.largura

  inimigo.exibe();
  inimigo.move();

  if (inimigoVisivel) {
    inimigoAtual++;
    if (inimigoAtual >= inimigos.length) {
      inimigoAtual = 0;
    }
    inimigo.velocidade = parseInt(random(10, 30));
  }

  if (personagem.estaColidindo(inimigo)) {
    image(imagemGameOver, 800 / 2 - 200, 600 / 3);
    noLoop();
    trilhaSonora.stop();
  }
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