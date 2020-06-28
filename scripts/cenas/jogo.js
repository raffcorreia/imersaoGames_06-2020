class Jogo {
    constructor () {
        this.indiceMapa = 0;
        this.mapa = cartucho.mapa;
        this.configuracoes = cartucho.configuracoes;
    }

    setup () {
        cenario = new Cenario(imagemPlanoDeFundo, 3);
        pontuacao = new Pontuacao();
        vida = new Vida(this.configuracoes.vidaMaxima,
                        this.configuracoes.vidaInicial);

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
                        10);
        const inimigoGrande = new Inimigo(matrizInimigoGrande, 
                        imagemInimigoGrande,
                        width -52,
                        200,
                        200,
                        0,
                        400,
                        400,
                        10);  
        const inimigoVoador = new Inimigo(matrizInimigoVoador, 
                        imagemInimigoVoador,
                        width -52,
                        52,
                        52,
                        200,
                        200,
                        150,
                        5); 

        inimigos.push(inimigo);
        inimigos.push(inimigoGrande);
        inimigos.push(inimigoVoador);
    }

    keyPressed(key) {
        if(key === 'ArrowUp') {
            personagem.pula();
          }
    }

    draw() {
        cenario.exibe();
        cenario.move();
      
        vida.draw();
        pontuacao.exibe();
        pontuacao.adicionarPonto();
        
        personagem.exibe();
        personagem.aplicaGravidade();
        
        const linhaAtual = this.mapa[this.indiceMapa];
        const inimigo = inimigos[linhaAtual.inimigo];
        const inimigoVisivel = inimigo.x < - inimigo.largura
        
        inimigo.velocidade = linhaAtual.velocidade;
        
        inimigo.exibe();
        inimigo.move();
      
        if (inimigoVisivel) {
          this.indiceMapa++;
          inimigo.aparece();
          if (this.indiceMapa > this.mapa.length - 1) {
            this.indiceMapa = 0;
          }
        }
      
        if (personagem.estaColidindo(inimigo)) {
            vida.perdeVida();
            personagem.tornaInvecivel();
            if(vida.vidas == 0) {
                image(imagemGameOver, 800 / 2 - 200, 600 / 3);
                noLoop();
                trilhaSonora.stop();
            }
        }
    }
}