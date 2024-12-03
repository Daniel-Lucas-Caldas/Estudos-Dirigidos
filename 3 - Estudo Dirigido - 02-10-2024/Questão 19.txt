// Turma 88433 - Senai Dendezeiros
// Alunos: Daniel Lucas e Kauan Nascimento

function encontrarMaiorNumero(num1, num2, num3) {
    // Inicializa a variável maior com o primeiro número
    let maior = num1;

    // Compara com o segundo número
    if (num2 > maior) {
        maior = num2;
    }

    // Compara com o terceiro número
    if (num3 > maior) {
        maior = num3;
    }

    // Exibe o resultado
    console.log(`O maior número entre ${num1}, ${num2} e ${num3} é: ${maior}`);
}

// Testes
encontrarMaiorNumero(10, 20, 5);  // 20
encontrarMaiorNumero(-5, -10, -3); // -3
encontrarMaiorNumero(15, 15, 15); // 15
