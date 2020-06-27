class TelaInicial {
    constructor() {
    }

    draw() {
        this._imagemDeFundo();
        this._texto();
        this._botao();
    }
    
    _imagemDeFundo() {
        image(imagemTelaInicial, 0, 0, 800, 600);
    }

    _texto() {
        textFont(fonteTelaInicial);
        textAlign(CENTER);
        textSize(50);
        text('As aventuras de', 800 / 2, 600 / 3);
        textSize(150);
        text('Hipsta', 800 / 2, 600 / 5 * 3);
    }

    _botao() {
        botaoGerenciador.y = 600 / 7 * 5;
        botaoGerenciador.x = 800 / 12 * 5;
        botaoGerenciador.draw();
    }
}