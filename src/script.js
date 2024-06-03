let numeroAleatorio = Math.floor(Math.random () * 100) +1;
let tentativas = 0;

function jogoDeAdivinhacao() {
     const palpiteDigitado = pegarPalpiteDigitado ();

     if (!palpiteDigitado) {
    alert("Digite um valor válido");
    return;
    }
    
    if (palpiteDigitado === numeroAleatorio) {
        alert("Parabéeens, você adivinhou!");
        reiniciarJogo()
        return;
    } else if (palpiteDigitado > numeroAleatorio) {
        tentativas++
        atualizarFeedback("O número é muito alto. Tente novamente! :( ");
    } else if (palpiteDigitado < numeroAleatorio) {
        tentativas++;
        atualizarFeedback("O número é muito baixo. Tente novamete! :( ");
    }

    const novaPontuacao = 100 - (tentativas * 10);
    atualizarPontuacao(novaPontuacao); 
    
    const palpitesFalhos = pegarPalpitesFalhos();
    const novoPalpitesFalhos = palpitesFalhos + " " + palpiteDigitado;
    atualizarPalpitesFalhos(novoPalpitesFalhos);

}

function reiniciarJogo() {
    const desejaReiniciar = confirm("Tem certeza que reiniciará seu jogo?");
    if (desejaReiniciar === true) { 
        tentativas = 0;
        
        atualizarPalpitesFalhos("");
        atualizarPontuacao(100);
        atualizarFeedback(" ");
        limparPalpiteDigitado();
    }
}