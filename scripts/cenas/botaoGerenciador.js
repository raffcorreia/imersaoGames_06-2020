class BotaoGerenciador {
    constructor(texto, posicaoX, posicaoY) {
        this.texto = texto;
        this.x = posicaoX;
        this.y = posicaoY;
        this.botao = createButton(this.texto);
        this.botao.mousePressed(() => {
            this._alteraCena();
        })
        this.botao.addClass('botao-tela-inicial');
    }
    
    draw() {
        this.botao.position(this.x, this.y);
        //this.botao.center('horizontal'); //para a tela inteira apenas
    }
    
    _alteraCena() {
        cenaAtual = 'jogo';
        this.botao.remove();
    }

}