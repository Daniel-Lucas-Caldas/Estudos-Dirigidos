// Turma 88433 - Senai Dendezeiros
// Alunos: Daniel Lucas e Kauan Nascimento

// Lista de números (exemplo)
const numeros = [1, 2, 3, 4, 5];

// Função para verificar e exibir o status dos números
function verificarPositividade(numeros) {
    const todosPositivos = numeros.every(function(numero) {
        return numero > 0;
    });

    const todosNegativos = numeros.every(function(numero) {
        return numero < 0;
    });

    if (todosPositivos) {
        console.log("Todos os valores são positivos.");
    } else if (todosNegativos) {
        console.log("Todos os valores são negativos.");
    } else {
        console.log("Existem valores positivos e negativos.");
    }
}

// Chamar a função
verificarPositividade(numeros);
