// Turma 88433 - Senai Dendezeiros
// Alunos: Daniel Lucas e Kauan Nascimento

// Lista original de números
const numeros = [1, 2, 3, 4, 5, 10, 20, 32, 40, 1002, 1320, 1326];

// Função para multiplicar cada número por 5
const numerosMultiplicados = numeros.map(function(numero) {
    return numero * 5;
});

// Exibindo o resultado
console.log(numerosMultiplicados);6