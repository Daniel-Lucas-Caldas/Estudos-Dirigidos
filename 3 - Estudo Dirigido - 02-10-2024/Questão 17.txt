// Turma 88433 - Senai Dendezeiros
// Alunos: Daniel Lucas e Kauan Nascimento

function calcularDesconto(valor, categoria) {
    let desconto = 0;

    // Determina o percentual de desconto com base na categoria
    if (categoria === "Premium") {
        desconto = 0.20; // 20% de desconto
    } else if (categoria === "Regular") {
        desconto = 0.10; // 10% de desconto
    } else {
        console.log("Categoria inválida. As categorias válidas são: 'Premium' e 'Regular'.");
        return;
    }

    // Calcula o valor do desconto
    let valorDesconto = valor * desconto;
    let valorFinal = valor - valorDesconto;

    // Exibe os resultados
    console.log(`Valor original: R$ ${valor.toFixed(2)}`);
    console.log(`Categoria: ${categoria}`);
    console.log(`Valor do desconto: R$ ${valorDesconto.toFixed(2)}`);
    console.log(`Valor final após desconto: R$ ${valorFinal.toFixed(2)}`);

    console.log("\n");
}

// Testes
calcularDesconto(100, "Premium"); // Desconto de 20%
calcularDesconto(200, "Regular");  // Desconto de 10%
calcularDesconto(150, "Outro");    // Categoria inválida
