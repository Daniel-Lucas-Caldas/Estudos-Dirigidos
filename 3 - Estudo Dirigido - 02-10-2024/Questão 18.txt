// Turma 88433 - Senai Dendezeiros
// Alunos: Daniel Lucas e Kauan Nascimento

function calcularPrecoComDesconto(precoUnitario, quantidade) {
    let desconto = 0;

    // Determina o percentual de desconto com base na quantidade de itens
    if (quantidade >= 10) {
        desconto = 0.20; // 20% de desconto
    } else if (quantidade >= 5) {
        desconto = 0.10; // 10% de desconto
    } else {
        console.log("Sem desconto, a quantidade é menor que 5 itens.");
        desconto = 0; // Sem desconto
    }

    // Calcula o valor total
    let valorTotal = precoUnitario * quantidade;
    let valorDesconto = valorTotal * desconto;
    let valorFinal = valorTotal - valorDesconto;

    // Exibe os resultados
    console.log(`Preço unitário: R$ ${precoUnitario.toFixed(2)}`);
    console.log(`Quantidade: ${quantidade}`);
    console.log(`Valor total sem desconto: R$ ${valorTotal.toFixed(2)}`);
    
    if (desconto > 0) {
        console.log(`Desconto aplicado: R$ ${valorDesconto.toFixed(2)} (${desconto * 100}%)`);
    }
    
    console.log(`Valor final após desconto: R$ ${valorFinal.toFixed(2)}`);
    
    console.log("\n");
}

// Testes
calcularPrecoComDesconto(50, 12); // 20% de desconto
calcularPrecoComDesconto(30, 7);  // 10% de desconto
calcularPrecoComDesconto(20, 3);  // Sem desconto
