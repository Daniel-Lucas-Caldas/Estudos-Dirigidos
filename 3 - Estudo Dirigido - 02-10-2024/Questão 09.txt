// Turma 88433 - Senai Dendezeiros
// Alunos: Daniel Lucas e Kauan Nascimento

// Listas de preços
const precos1 = [10, 20, 30];
const precos2 = [15, 25, 35];

// Função para concatenar as listas e aplicar aumento de 10%
const precosComAumento = precos1.concat(precos2).map(function(preco) {
    return preco * 1.10; // Aplica o aumento de 10%
});

// Exibindo o resultado
console.log(precosComAumento);
