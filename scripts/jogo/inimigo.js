//classe dos personagens que podem interagir com a Personagem
class Inimigo extends Animacao {
  constructor(matriz, 
               imagem, 
               x, 
               largura, 
               altura, 
               variacaoY,
               larguraSprite, 
               alturaSprite,
               velocidade,
               delay) 
  {super(matriz, 
          imagem, 
          x, 
          largura, 
          altura, 
          variacaoY,
          larguraSprite, 
          alturaSprite);
   
  this.velocidade = velocidade;
  this.delay = delay;
  this.x = width + this.delay;
  }
  
  //função que vai movimentar o inimigo, sem inteligência
  //sugestão: incluir alguma IA para aparecer randomicamente, baseada no frameAtual
  move() {
    this.x = this.x - this.velocidade;
    
    if(this.x < - this.largura -this.delay) {
      this.x = width;
    }
  }
}