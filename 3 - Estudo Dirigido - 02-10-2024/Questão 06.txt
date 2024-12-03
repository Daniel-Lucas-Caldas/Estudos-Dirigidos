// Turma 88433 - Senai Dendezeiros
// Alunos: Daniel Lucas e Kauan Nascimento

// Lista de números
const numeros = [5, 2, 9, 1, 7, 10, 3, 92, 105, 71];

// Função para ordenar a lista em ordem crescente
const numerosOrdenados = numeros.sort(function(a, b) {
    return a - b;
});

// Exibindo o resultado
console.log(numerosOrdenados);
