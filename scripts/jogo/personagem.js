//classe do personagem principal controlado pelo usuário
class Personagem extends Animacao{
  constructor(matriz, 
               imagem, 
               x, 
               largura, 
               altura, 
               larguraSprite, 
               alturaSprite) 
  {super(matriz, 
          imagem, 
          x, 
          largura, 
          altura, 
          larguraSprite, 
          alturaSprite)
   
  //variáveis responsáveis pela mecânica do pulo
   this.yInicial = height - this.altura;
   this.y = this.yInicial;
   this.velocidadeDoPulo = 0;
   this.gravidade = 3;

   //variável de controle do pulo duplo, true quando o usuário já pulou a primeira vez
   this.puloDuplo = false;
  }
  
  //função de pulo excluindo a possibilidade de um pulo duplo, viabiliza que o segundo pulo seja diferente do primeiro
  //?? daria para aplicar essa lógica com um OR ??
  pula() {
    if(this.y == this.yInicial) {
      this.velocidadeDoPulo = - 30;
      this.puloDuplo = true;
    } else if (this.puloDuplo){
      this.velocidadeDoPulo = -30;
      this.puloDuplo = false;
    }
  }
  
  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    
    if(this.y > this.yInicial) {
      this.y = this.yInicial
    }
  }
}