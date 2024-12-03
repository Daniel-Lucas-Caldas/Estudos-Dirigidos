// Turma 88433 - Senai Dendezeiros
// Alunos: Daniel Lucas e Kauan Nascimento

function calcularMedia(nota1, nota2, nota3) {
    // Calcula a média
    let media = (nota1 + nota2 + nota3) / 3;
    console.log(`Notas: ${nota1}, ${nota2}, ${nota3}`);
    console.log(`Média: ${media.toFixed(2)}`);
    
    // Verifica o status com base na média
    if (media >= 7.0) {
        console.log("Resultado: Aprovado");
    } else if (media >= 4.0 && media <= 6.9) {
        console.log("Resultado: Reprovado com direito a recuperação");
    } else {
        console.log("Resultado: Reprovado sem direito a prova de recuperação");
    }
    
    console.log("\n");
}

// Testes
calcularMedia(8, 7.5, 6);  // Aprovado
calcularMedia(6, 5.5, 4.5); // Reprovado com direito a recuperação
calcularMedia(2, 3, 1);    // Reprovado sem direito a recuperação
