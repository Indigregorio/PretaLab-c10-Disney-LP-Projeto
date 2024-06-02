let numeroAleatorio = 0;
let tentativas = 0;

function jogoDeAdivinhacao() {
     const palpiteDigitado = pegarPalpiteDigitado ();

     if (!palpiteDigitado){
    alert("Digite um valor válido");
    }
    
    if (palpiteDigitado === numeroAleatorio){
        alert("Parabéeens, você adivinhou!");
    } else if (palpiteDigitado > numeroAleatorio) {
        atualizarFeedback("O número é muito alto. Tente novamente! :( ")
    } else {
        atualizarFeedback("O número é muito baixo. Tente novamete! :( ")
    }


}

function reiniciarJogo() {
    // to-do
}