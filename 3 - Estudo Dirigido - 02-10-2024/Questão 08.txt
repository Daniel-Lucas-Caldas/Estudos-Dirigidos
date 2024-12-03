// Turma 88433 - Senai Dendezeiros
// Alunos: Daniel Lucas e Kauan Nascimento

// Lista de números
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Função para filtrar, dobrar e somar os números pares
function filtrarDobrarESomarPares(lista) {
    // Filtra os números pares
    const numerosPares = lista.filter(function(numero) {
        return numero % 2 === 0; // Verifica se o número é par
    });

    // Dobra os números pares
    const numerosDobrado = numerosPares.map(function(numero) {
        return numero * 2; // Dobra o número
    });

    // Soma os números dobrados
    const soma = numerosDobrado.reduce(function(total, numero) {
        return total + numero; // Soma todos os números dobrados
    }, 0);

    // Exibir resultados
    console.log("Números pares:", numerosPares);
    console.log("Números dobrados:", numerosDobrado);
    console.log("Soma dos números dobrados:", soma);
}

// Chamando a função com a lista
filtrarDobrarESomarPares(numeros);