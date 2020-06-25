//classe dos personagens que podem interagir com a Personagem
class Inimigo extends Animacao {
  constructor(matriz, 
               imagem, 
               x, 
               largura, 
               altura, 
               variacaoY,
               larguraSprite, 
               alturaSprite) 
  {super(matriz, 
          imagem, 
          x, 
          largura, 
          altura, 
          variacaoY,
          larguraSprite, 
          alturaSprite);
   
   this.velocidade = 10;
  }
  
  //função que vai movimentar o inimigo, sem inteligência
  //sugestão: incluir alguma IA para aparecer randomicamente, baseada no frameAtual
  move() {
    this.x = this.x - this.velocidade;
    
    if(this.x < - this.largura) {
      this.x = width;
    }
  }
}