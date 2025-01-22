/*  Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
    Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
    Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
    Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
    Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
    Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
    Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
    Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
    Use um loop while para imprimir os números de 1 a 10 no console.
    Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
    Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.*/
    

let nome = prompt('Digite seu primeiro nome: ');
    console.log(nome);
alert(`Seja bem vindo ${nome}.`);

let linguagemPreferida = prompt('Qual a linguagem de programação você mais gosta?');
    console.log(linguagemPreferida);

let valor1 = 13;
let valor2 = 2;

let resultadoSoma = valor1 + valor2;
    alert(`A soma do ${valor1} com o ${valor2} e igual a: ${resultadoSoma}`);

let resultadoSubtracao = valor1 - valor2;
    console.log(`A subtração do ${valor1} com o ${valor2} é igual a ${resultadoSubtracao}.`);

let idade = prompt('Insira a sua idade.');

    if (idade >= 18){
    alert('Você é maior de idade!');
        }else{
            alert('Infelizmente você é menor de idade!')
    };

let numero = prompt('Insira um valor.');

if (numero >= 1){
    alert('OK! Esse número é positivo.');
}else if (numero == 0){
    alert('Esse número é zero!');
}else{
    alert('Esse número é negativo!');
};

let contador = 0;

while (contador < 10){
    contador++;
    alert(contador);
}

let nota = 8;

    if (nota >= 7){
        alert('Parabéns você foi aprovado!');
        }else{
            alert('Você foi reprovado!');
        }

let numeroAleatorio = parseInt(Math.random()*100+1);
console.log(numeroAleatorio);

