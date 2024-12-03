// Turma 88433 - Senai Dendezeiros
// Alunos: Daniel Lucas e Kauan Nascimento

function verificarFaixaEtaria(idade) {
    console.log("Idade fornecida: " + idade + " anos");
    
    if (idade >= 0 && idade <= 12) {
        console.log("Faixa etária: Criança");
    } else if (idade >= 13 && idade <= 17) {
        console.log("Faixa etária: Adolescente");
    } else if (idade >= 18 && idade <= 59) {
        console.log("Faixa etária: Adulto");
    } else if (idade >= 60) {
        console.log("Faixa etária: Idoso");
    } else {
        console.log("Idade inválida");
    }
}

// Testes
verificarFaixaEtaria(5);  
console.log("\n"); 
verificarFaixaEtaria(15);  
console.log("\n");
verificarFaixaEtaria(25);  
console.log("\n");
verificarFaixaEtaria(65);  
console.log("\n");
verificarFaixaEtaria(-1);  
