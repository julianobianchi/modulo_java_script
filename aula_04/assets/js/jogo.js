// Lista de palavras para o jogo
const palavras = ["maca", "banana","pera","goiaba","uva","melancia","melao","morango","carambola","jaca"];

// Seleciona a ultima palavra da lista
const selecionaPalavra = palavras.pop();// remove Pera (do final)

// Inicializa a palavra oculta
let letra = Array(selecionaPalavra.length).fill('_');

// Número máximo de tentativas
const tentativas = 3;
let numTentativas = tentativas;



// Atualiza a exibição da palavra oculta
function palavraOculta() {
    document.getElementById('container').textContent = letra.join(' ');
}

// Atualiza o número de tentativas restantes
function numTentativa() {
    document.getElementById('attempts-left').textContent = numTentativas;
}

// Verifica se a letra está na palavra
function verificaLetra(letter) {
    let letterFound = false;

    for (let i = 0; i < selecionaPalavra.length; i++) {
        if (selecionaPalavra[i] === letter) {
            letra[i] = letter;
            letterFound = true;
        }
    }

    if (!letterFound) {
        numTentativas--;
    }
}

// Verifica se o jogador ganhou
function vencedor() {
    if (letra.join('') === selecionaPalavra) {
        document.getElementById('message').textContent = 'Parabéns! Você ganhou!';
      
    }
}

// Verifica se o jogo acabou
function fimJogo() {
    if (numTentativas === 0) {
        document.getElementById('game-over').textContent = 'Game Over! A palavra era: ' + selecionaPalavra;
    }
}

// Função principal para processar a tentativa do jogador
function iniciar() {
    const inputElement = document.getElementById('letter-input');
    const letter = inputElement.value.toLowerCase();

    if (letter.length === 1 && letter.match(/[a-z]/i)) {
        verificaLetra(letter);
        palavraOculta();
        numTentativa();
        vencedor();
        fimJogo();
    } else {
        alert('Por favor, insira uma letra válida.');
    }

    // Limpa o campo de entrada
    inputElement.value = '';
}

// Inicializa a exibição
palavraOculta();
numTentativa();