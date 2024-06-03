let numeroAleatorio = Math.floor(Math.random () * 100) +1;
let tentativas = 0;
let palpitesRepetidos = [];

function jogoDeAdivinhacao() {
     const palpiteDigitado = pegarPalpiteDigitado ();

     if (!palpiteDigitado) {
    alert("Digite um valor válido");
    return;
    }
    else if (palpiteDigitado <= 0 || palpiteDigitado > 100){
        alert("Por favor, digite um número entre 1 e 100.");
        return;
    }
    if (palpitesRepetidos.includes(palpiteDigitado)) {
        alert("Você já tentou esse número, tente outro.");
    return;
    }

    (palpitesRepetidos.push(palpiteDigitado));
    
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

    const pontuacaoAtual = pegarPontuacao();
    if (pontuacaoAtual === "Você tem 0 pontos") {
    alert("Cê perdeu, uai! Chegou a 0 pontos. Dê seus pulos!");
    reiniciarJogo();
    }

}

function reiniciarJogo() {
    const desejaReiniciar = confirm("Deseja jogar novamente?");
    console.log(desejaReiniciar);
   
    if (desejaReiniciar) { 
        tentativas = 0;
        palpitesRepetidos =[]
        atualizarPalpitesFalhos("");
        atualizarPontuacao(100);
        atualizarFeedback(" ");
        limparPalpiteDigitado();
    }
}