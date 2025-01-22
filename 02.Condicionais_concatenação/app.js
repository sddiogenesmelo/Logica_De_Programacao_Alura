var nome = prompt ('Olá, digite seu nome:');
alert(`Seja bem vindo ${nome} !`); //template strings

var diaDaSemana = prompt ('Digite o dia da semana:');

if (diaDaSemana == "sabado" ) {
    alert('Bom final de semana!');
}else if (diaDaSemana == "domingo") {
    alert("Bom final de semana!");
}else {
    alert('Boa semana!');
}

let numeroPositivo = prompt("Digite um número: ");

if (numeroPositivo >= 1){
    alert("Esse número é positivo!");
}else if (numeroPositivo == 0) {
    alert("Esse número é neutro!")
} else {
    alert("Esse número é negativo")
};

/*Math.sign(0); estudar!!!
console.log();*/