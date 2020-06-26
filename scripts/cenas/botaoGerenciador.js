class BotaoGerenciador {
    constructor(texto, posicaoX, posicaoY) {
        this.texto = texto;
        this.x = posicaoX;
        this.y = posicaoY;
        this.botao = createButton(this.texto);
        this.botao.mousePressed(() => {
            this._alteraCena();
        })
    }
    
    draw() {
        this.botao.position(this.x, this.y);
    }
    
    _alteraCena() {
        cenaAtual = 'jogo';
        this.botao.remove();
    }

}