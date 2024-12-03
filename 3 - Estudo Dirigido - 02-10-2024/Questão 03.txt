// Turma 88433 - Senai Dendezeiros
// Alunos: Daniel Lucas e Kauan Nascimento

// Lista de números
const numeros = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];

// Função para somar todos os números
const somaTotal = numeros.reduce(function(soma, numero) {
    return soma + numero;
}, 0);

// Exibindo o resultado
console.log(somaTotal);