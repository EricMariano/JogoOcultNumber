// peça a um jogador para ocultar um número. O segundo jogador 
// terá até 5 tentativas para adivinhar o número oculto. 
// A cada tentativa incorreta, o jogo informará se o chute
// foi maior ou menor que o número escondido. Se o jogador 
// acertar, o jogo o parabenizará pela jogada.

let numeroOculto;
let tentativasRestantes = 5;

// função setar
document.getElementById('form1').addEventListener('submit', function(event) {
    event.preventDefault();

    const ocultInput = document.getElementById('ocult-number');
    numeroOculto = parseInt(ocultInput.value);
    
    if (isNaN(numeroOculto) || numeroOculto < 0 || numeroOculto > 100) {
        alert("Por favor, insira um número válido entre 0 e 100.");
    } else {
        ocultInput.disabled = true;
        alert("Número oculto definido. Agora o segundo jogador pode tentar adivinhar.");
    }
});

// Função adivinhar
document.getElementById('form2').addEventListener('submit', function(event) {
    event.preventDefault();

    const guessInput = document.getElementById('guess-number');
    const palpite = parseInt(guessInput.value);

    if (tentativasRestantes > 0) {
        tentativasRestantes--;

        if (palpite === numeroOculto) {
            alert("Parabéns! Você acertou o número oculto.");
            guessInput.disabled = true;
        } else if (palpite > numeroOculto) {
            alert("Seu palpite foi maior que o número oculto.");
        } else {
            alert("Seu palpite foi menor que o número oculto.");
        }

        if (tentativasRestantes === 0 && palpite !== numeroOculto) {
            alert("Fim de jogo! Você usou todas as suas tentativas. O número oculto era " + numeroOculto + ".");
            guessInput.disabled = true;
        }
    }
});

function reset() {
    location.reload();
}
