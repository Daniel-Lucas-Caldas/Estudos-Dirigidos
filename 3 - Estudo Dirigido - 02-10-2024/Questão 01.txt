// Turma 88433 - Senai Dendezeiros
// Alunos: Daniel Lucas e Kauan Nascimento

// Lista original de números
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Função para filtrar números pares
const numerosPares = numeros.filter(function(numero) {
    return numero % 2 === 0;
});

// Exibindo o resultado
console.log(numerosPares);