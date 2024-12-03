// Turma 88433 - Senai Dendezeiros
// Alunos: Daniel Lucas e Kauan Nascimento

function verificarNumero(numero) {
    console.log(`Número fornecido: ${numero}`);
    
    if (numero > 0) {
        console.log("Resultado: O número é positivo.");
    } else if (numero < 0) {
        console.log("Resultado: O número é negativo.");
    } else {
        console.log("Resultado: O número é zero.");
    }
    
console.log("\n");
}

// Testes
verificarNumero(10);   // Positivo
verificarNumero(-5);   // Negativo
verificarNumero(0);    // Zero
