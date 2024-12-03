// Turma 88433 - Senai Dendezeiros
// Alunos: Daniel Lucas e Kauan Nascimento

function verificarParOuImpar(numero) {
    console.log(`Número fornecido: ${numero}`);

    if (numero % 2 === 0) {
        console.log("Resultado: O número é par.");
    } else {
        console.log("Resultado: O número é ímpar.");
    }

    console.log("\n");
}

// Testes
verificarParOuImpar(4);  // Par
verificarParOuImpar(7);  // Ímpar
verificarParOuImpar(0);  // Par
