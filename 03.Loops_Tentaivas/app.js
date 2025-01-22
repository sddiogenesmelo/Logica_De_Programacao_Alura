alert('Boas vindas ao jogo do número secreto');

var nome = prompt ('Digite seu nome: '); 
let numeroSecreto = 5;
    console.log(numeroSecreto);
let chute;

/* Enquanto
while(condição){
    Instruções a serem executadas
}*/

// enquanto chute não for igual ao numero secreto
while (chute != numeroSecreto) { 
    chute = prompt(`${nome} escolha um número entre 1 e 10`);
    
    // se chute for igual ao número secreto
        if (chute == numeroSecreto) {
            alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
        } else {
            if (numeroSecreto > chute) {
                alert(`O número secreto é maior que ${chute}`);
            }else {
                alert(`O número secreto é menor que ${chute}`);
            }
        //tentativas = tentativas + 1
        //             tentativas++;
        }
}