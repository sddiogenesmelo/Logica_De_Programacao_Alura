alert("Bem vindo ao Jogo do número secreto!"); // insere caixa de aviso antes de iniciar a página
let numeroSecreto = 4;// let = variavel + nome da variável + valor
console.log(numeroSecreto); // console.log serve apenas para desenvolvedor 
let chute = prompt("digite um número de 1 a 10") //similar ao alert mas cria interação com o usuario

// Para realizar uma comparação ou condição
/*if(numeroSecreto == chute) {
    alert ("Parabéns, você acertou o numero secreto!")
} else {
    alert ("Você errou! :(")
};*/

// Concatenação (templatesStrings)
// Se o chute for igual numero secreto faça algo senão.
if(numeroSecreto == chute) {
    alert (`Parabéns, você acertou o numero secreto ${numeroSecreto} !`) // inserir a crase, inserir cifrão e chave para exibir o numero atualizado secreto.
} else {
    alert ('O numero secreto era ' +numeroSecreto+ ', mas você digitou ' +chute)
}; 