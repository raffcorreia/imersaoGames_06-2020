//classe do personagem principal controlado pelo usuário
class Personagem extends Animacao{
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
          alturaSprite)
   
  //variáveis responsáveis pela mecânica do pulo
  this.variacaoY = variacaoY; 
  this.yInicial = height - this.altura - this.variacaoY;
   this.y = this.yInicial;
   this.velocidadeDoPulo = 0;
   this.gravidade = 3;
   this.alturaDoPulo = -30;

   this.invencivel = false;

   //variável de controle do pulo duplo, true quando o usuário já pulou a primeira vez
   this.puloDuplo = false;
  }
  
  //função de pulo excluindo a possibilidade de um pulo duplo, viabiliza que o segundo pulo seja diferente do primeiro
  //?? daria para aplicar essa lógica com um OR ??
  pula() {
    if(this.y == this.yInicial) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.puloDuplo = true;
      this.fazSom(somDoPulo);

    } else if (this.puloDuplo){
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.fazSom(somDoPulo);
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

  fazSom(som) {
    som.play();
  }

  tornaInvecivel() {
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false;
    }, 1000);
  }
  //adaptado da função de bmoren em https://github.com/bmoren/p5.collide2D/blob/master/p5.collide2d.js
  estaColidindo(inimigo) {

    //condição para evitar as múltiplas colisões com um mesmo inimigo ou quando o personagem ganhou invencibilidade
    if (this.invencivel) {
      return false;
    }

    //constante que vai diminuir a precisão da colisão, para diminuir o hitbox
    // ?? precisões menores que .62 não funcionam! Por que??
    const precisao = .62;
    
    if(
      this.x + (this.largura * precisao) >= inimigo.x &&
      this.x <= inimigo.x + (inimigo.largura * precisao) &&
      this.y + (this.altura * precisao) >= inimigo.y &&
      this.y <= inimigo.y + (inimigo.altura * precisao)
      ) {
        return true;
      }
      return false;
  }  
}