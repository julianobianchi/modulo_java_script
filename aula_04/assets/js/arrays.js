// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
var frutas = ["Maçã", "Banana"];

console.log(frutas.length, frutas);
// 2
//for in -> faz um loop ate o último elemento do vetor porém em pega o índice
for( indice in frutas){
    console.log(indice, frutas[indice]);
}

//for of -> faz um loop ate o último elemento do vetor porém em pega o elemento
for( elemento of frutas){
    console.log(elemento);
}

frutas.forEach(function (item, indice_do_elemento) {
    console.log(item, indice_do_elemento);
  });
  // Maçã 0
  // Banana 1

  frutas.push("Uva");
  frutas.push("Pera");
  console.table(frutas);

  const valor_removido = frutas.pop();// remove Pera (do final)
  console.table(frutas);
  console.log("Valor removido do fim:", valor_removido);

  const valor_removido_do_inicio = frutas.shift();// remove Maçã do início
  console.table(frutas);
  console.log("Valor removido do Inicio:", valor_removido_do_inicio);

  frutas.unshift("Melancia"); // adiciona ao início
  console.table(frutas);

const posicao = frutas.indexOf("Banana");
console.log("Posição:", posicao);

if(posicao !==-1){
    console.warn("Fruta encontrada");
    const outro_item_removido = frutas.splice(posicao, 1);
    console.table(frutas);
    console.log("Removido fruta: ", frutas[posicao]);
}else{
    console.error("Frutas não encontrada");
}

const frutasExiste = frutas.includes("Uva");
console.log("Frutas Existe?", frutasExiste);

/**
*Jogo de Força

* Vetor com várias palavras.
* Remover a última palavra do vetor.
* A palavra removida falar a quantidade de letras.
* Em um input digitar uma letra e ver se ela existe na palavra.
* Se não existe conta como erro. Com três erros game over a palavra volta para o início do vetor.
*  Acertando todas as letras, conta como 100 pontos e volta para o ínicio do vetor.
*/