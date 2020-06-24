class Animacao {
  constructor(matriz, 
               imagem, 
               x, 
               largura, 
               altura, 
               larguraSprite, 
               alturaSprite) 
  {
    this.matriz = matriz;
    this.imagem = imagem;
    this.largura = largura;
    this.altura = altura;
    this.x = x;
    this.y = height - this.altura;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;
    
    this.frameAtual = 0;
  }
  
  //função de exibição do Sprite
  exibe() {
    
    //atualização do enquadramento da sprite para criar o efeito de animação
    let enqSpriteX = this.matriz[this.frameAtual][0];
    let enqSpriteY = this.matriz[this.frameAtual][1];
    
    image(this.imagem, 
          this.x, 
          this.y, 
          this.largura, 
          this.altura, 
          enqSpriteX, 
          enqSpriteY, 
          this.larguraSprite, 
          this.alturaSprite);
    
    //a animação é chamada aqui dentro para que o frameAtual seja atualizado somente quando Personagem.exibe() for invocado
    this.anima();
  }
  
  //atualização do estágio, mecânica simples aqui, mas poderia ser refatorado para trazer a complexidade do cálculo do enquadramento da Sprite?
  anima() {
    this.frameAtual++;
    
    
    //esse reset do valor do frame poderia ser substituído pela lógica do % ?
    if (this.frameAtual >= this.matriz.length -1) {
      this.frameAtual = 0;
    }
  }
}









/*
Código fornecido por um aluno no Discord

exibe(){
  let x = this.frameAtual % 4 * this.tamX;
  let y = Math.floor(this.frameAtual / 4) * this.tamY;
  
  image(this.imagem, 0, height- this.alturaPersonagem, this.larguraPersonagem, this.alturaPersonagem, x, y, this.tamX, this.tamY); 
  this.anima();
}
*/