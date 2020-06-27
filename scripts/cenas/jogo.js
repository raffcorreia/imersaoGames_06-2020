class Jogo {
    constructor () {
        this.inimigoAtual = 0;
        this.mapa = [
            {
                inimigo: 0, 
                velocidade,
            }
        ]
    }

    setup () {
        cenario = new Cenario(imagemPlanoDeFundo, 3);
        pontuacao = new Pontuacao();
        vida = new Vida(3, 3);

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
        
        const inimigo = inimigos[this.inimigoAtual];
        const inimigoVisivel = inimigo.x < - inimigo.largura
      
        inimigo.exibe();
        inimigo.move();
      
        if (inimigoVisivel) {
          this.inimigoAtual++;
          if (this.inimigoAtual >= inimigos.length) {
            this.inimigoAtual = 0;
          }
          inimigo.velocidade = parseInt(random(10, 30));
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