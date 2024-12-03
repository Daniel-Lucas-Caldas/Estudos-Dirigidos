// 1. Iterar sobre as propriedades de um objeto e exibi-las no console
let objeto = {
    Nome: "João",
    Idade: 30,
    Cidade: "São Paulo"
};

for (let propriedade in objeto) {
    console.log(`${propriedade}: ${objeto[propriedade]}`);
}

// 2. Calcular a soma total dos salários
let salarios = {
    Ana: 3000, 
    Bruno: 2500, 
    Carla: 4000 
};
let totalSalarios = 0;

for (let pessoa in salarios) {
    console.log(`Salário de ${pessoa}: R$ ${salarios[pessoa]}`);
    totalSalarios += salarios[pessoa];
}

console.log("Total dos salários: R$", totalSalarios);

// 3. Exibir alunos que passaram e reprovaram (nota >= 7)
let notasAlunos = {
    Pedro: 6,
    Maria: 8,
    João: 7,
    Carla: 5
};

let alunosAprovados = [];
let alunosReprovados = [];

for (let aluno in notasAlunos) {
    if (notasAlunos[aluno] >= 7) {
        alunosAprovados.push({ nome: aluno, nota: notasAlunos[aluno] });
    } else {
        alunosReprovados.push({ nome: aluno, nota: notasAlunos[aluno] });
    }
}

console.log("Alunos Aprovados:");
alunosAprovados.forEach(aluno => {
    console.log(`${aluno.nome} passou com nota ${aluno.nota}`);
});

console.log("\nAlunos Reprovados:");
alunosReprovados.forEach(aluno => {
    console.log(`${aluno.nome} reprovou com nota ${aluno.nota}`);
});

// 4. Agrupar pessoas por faixa etária
let pessoas = [
    { nome: "Alice", idade: 18 },
    { nome: "Bruno", idade: 25 },
    { nome: "Carlos", idade: 42 },
    { nome: "Diana", idade: 15 },
    { nome: "Eduardo", idade: 37 },
    { nome: "Fátima", idade: 50 }
];

// Etapa 1: Lista de todos os usuários e suas idades na ordem de registro
let listaUsuarios = pessoas.map(pessoa => `${pessoa.nome} (${pessoa.idade} anos)`);
console.log("Lista de Usuários e Idades:", listaUsuarios.join(", "));

// Etapa 2: Explicar como a classificação é feita
console.log("\nA classificação é feita com base nas regras a seguir:");
console.log("Jovens: até 20 anos");
console.log("Adultos: de 21 a 40 anos");
console.log("Idosos: acima de 40 anos");

// Etapa 3: Classificação dos usuários por faixa etária
let grupos = { jovens: [], adultos: [], idosos: [] };

for (let pessoa of pessoas) {
    if (pessoa.idade <= 20) {
        grupos.jovens.push(pessoa);
    } else if (pessoa.idade <= 40) {
        grupos.adultos.push(pessoa);
    } else {
        grupos.idosos.push(pessoa);
    }
}

// Exibir a classificação por faixa etária
console.log("\nClassificação por Faixa Etária:");

console.log("Jovens:", grupos.jovens.map(pessoa => `${pessoa.nome} (${pessoa.idade} anos)`).join(", "));

console.log("Adultos:", grupos.adultos.map(pessoa => `${pessoa.nome} (${pessoa.idade} anos)`).join(", "));

console.log("Idosos:", grupos.idosos.map(pessoa => `${pessoa.nome} (${pessoa.idade} anos)`).join(", "));

// 5. Criar objeto com produtos e quantidades em estoque
let estoque = {
    "Arroz": 20,
    "Feijão": 15,
    "Macarrão": 30,
    "Açúcar": 10
};

// Função para vender um produto
function venderProduto(produto) {
    if (estoque[produto] > 0) {
        estoque[produto]--;  // Diminui a quantidade em 1
        console.log(`✅ ${produto} vendido! Quantidade restante: ${estoque[produto]}`);
    } else {
        console.log(`❌ Desculpe, ${produto} está fora de estoque!`);
    }
}

// Simulando vendas
let produtosVendidos = ["Arroz", "Feijão", "Açúcar", "Arroz", "Macarrão", "Arroz", "Açúcar", "Feijão", "Feijão"];

// Laço para processar as vendas
console.log("📦 Iniciando as vendas...\n");
for (let produto of produtosVendidos) {
    venderProduto(produto);
}

// Exibir estoque final
console.log("\n📊 Estoque final:");
for (let produto in estoque) {
    console.log(`- ${produto}: ${estoque[produto]} unidade(s)`);
}

// 6. Encontrar a maior e a menor nota
let notas = { Ana: 7, Pedro: 5, Carla: 9, João: 6 };

// Inicializar variáveis para armazenar a maior e a menor nota
let maiorNota = -Infinity;
let menorNota = Infinity;

// Laço para percorrer as notas dos alunos
for (let aluno in notas) {
    if (notas[aluno] > maiorNota) {
        maiorNota = notas[aluno];  // Atualiza a maior nota
    }
    if (notas[aluno] < menorNota) {
        menorNota = notas[aluno];  // Atualiza a menor nota
    }
}

// Exibir resultados
console.log("📊 Resultados das Notas:");
console.log("Maior nota:", maiorNota);
console.log("Menor nota:", menorNota);

// 7. Calcular a média salarial
let funcionarios = {
    "Ana": 3000,
    "Bruno": 2500,
    "Carla": 4000,
    "Diana": 3200,
    "Eduardo": 2800
};

// Variáveis para calcular total e média salarial
let totalSalarios = 0;
let quantidadeFuncionarios = 0;

// Exibir salários e calcular total e média
console.log("📋 Lista de Funcionários e seus Salários:");
for (let funcionario in funcionarios) {
    console.log(`- ${funcionario}: R$ ${funcionarios[funcionario].toFixed(2)}`); // Exibe o salário de cada funcionário
    totalSalarios += funcionarios[funcionario]; // Soma dos salários
    quantidadeFuncionarios++; // Contagem de funcionários
}

// Calcular média salarial
let mediaSalarial = totalSalarios / quantidadeFuncionarios;

// Exibir resultados finais
console.log("\n💰 Total da Soma dos Salários: R$ " + totalSalarios.toFixed(2));

console.log("📊 Média Salarial: R$ " + mediaSalarial.toFixed(2));

// 8. Calcular o total de itens na lista de compras
let listaCompras = [
    { produto: "arroz", quantidade: 2 },
    { produto: "feijão", quantidade: 3 },
    { produto: "macarrão", quantidade: 1 }
];

let totalItens = 0;

// Exibir a lista de produtos e suas quantidades
console.log("🛒 Lista de Compras:");
for (let item of listaCompras) {
    console.log(`- ${item.quantidade}x ${item.produto}`);
    totalItens += item.quantidade; // Soma a quantidade total de itens
}

// Exibir o total de itens
console.log("\n📦 Total de itens na lista de compras:", totalItens);

// 9. Contar caracteres em uma string
function contarCaracteres(str) {
    let contagem = {};
    for (let char of str) {
        contagem[char] = (contagem[char] || 0) + 1; // Incrementa a contagem de cada caractere
    }
    return contagem;
}

// Testando a função
const texto = "javascript";
const resultado = contarCaracteres(texto);

// Exibir a contagem de caracteres de forma formatada
console.log(`🔠 Contagem de caracteres na string '${texto}':`);
for (let char in resultado) {
    console.log(`- '${char}': ${resultado[char]}`);
}

// 10. Aplicar desconto de 15% em produtos com preço > R$ 100
let produtos = { cadeira: 150, mesa: 200, caneca: 50 };

// Exibir preços antes do desconto
console.log("💰 Preços antes do desconto:", produtos);

// Aplicar desconto
for (let item in produtos) {
    if (produtos[item] > 100) {
        produtos[item] *= 0.85; // Aplica o desconto de 15%
    }
}

// Exibir preços após o desconto
console.log("💸 Preços após desconto:", produtos);

// 11. Contar caracteres em cada string do array
let palavras = ["maçã", "banana", "uva"];

// Função para contar caracteres em cada palavra do array
function contarCaracteresArray(arr) {
    let resultado = {};
    for (let palavra of arr) {
        resultado[palavra] = palavra.length; // Conta os caracteres e armazena no objeto
    }
    return resultado;
}

// Chama a função e exibe a contagem de caracteres
console.log("📏 Contagem de caracteres em cada palavra:", contarCaracteresArray(palavras));

// 12. Reposição automática de estoque
let estoqueProdutos = { caneta: 3, borracha: 10, lápis: 2 }; // Estoque inicial de produtos

// Percorre cada produto no estoque
for (let produto in estoqueProdutos) {
    // Verifica se a quantidade em estoque é menor que 5
    if (estoqueProdutos[produto] < 5) {
        estoqueProdutos[produto] += 10; // Reposição de 10 unidades
    }
}

// Função para exibir o estoque antes e depois da reposição
function reposicaoEstoque(estoqueProdutos) {
    // Exibir estoque antes da reposição
    console.log("📦 Estoque antes da reposição:", estoqueProdutos);

    // Reposição automática de estoque
    for (let produto in estoqueProdutos) {
        // Verifica se a quantidade em estoque é menor que 5
        if (estoqueProdutos[produto] < 5) {
            estoqueProdutos[produto] += 10; // Reposição de 10 unidades
        }
    }

    // Exibir estoque após a reposição
    console.log("📦 Estoque após reposição:", estoqueProdutos);
}

// Chamar a função para mostrar o estoque
reposicaoEstoque(estoqueProdutos);

// 13. Calcular a média de notas de cada aluno

// Função para exibir notas e calcular a média de cada aluno
function exibirNotasECalcularMedia(notasAlunosProvas) {
    for (let aluno in notasAlunosProvas) {
        // Exibir notas do aluno
        console.log(`📝 Notas de ${aluno}: ${notasAlunosProvas[aluno].join(", ")}`);
        
        // Calcular a média
        let somaNotas = 0;
        for (let nota of notasAlunosProvas[aluno]) {
            somaNotas += nota; // Soma das notas
        }
        let media = somaNotas / notasAlunosProvas[aluno].length; // Cálculo da média
        
        // Exibir a média
        console.log(`📚 Média de ${aluno}: ${media.toFixed(2)}`);
        console.log(""); // Linha em branco para melhor separação
    }
}

// Objeto contendo as notas dos alunos
let notasAlunosProvas = {
    Ana: [8, 7, 9],
    Bruno: [5, 6, 7],
    Carla: [10, 8, 9]
};

// Chamar a função para exibir notas e calcular as médias
exibirNotasECalcularMedia(notasAlunosProvas);

// 14. Contar produtos vendidos

let vendas = ["caneta", "caderno", "caneta", "borracha", "caneta"];

function contarVendas(arr) {
    let contagemVendas = {};
    for (let produto of arr) {
        contagemVendas[produto] = (contagemVendas[produto] || 0) + 1;
    }
    return contagemVendas;
}

// Chamada da função
let resultadoVendas = contarVendas(vendas);

// Exibir contagem de produtos vendidos
console.log("🛍️ Contagem de produtos vendidos:");
for (let produto in resultadoVendas) {
    console.log(`- ${produto}: ${resultadoVendas[produto]} unidade(s)`);
}

// Exibir resumo total de produtos vendidos
let totalProdutos = Object.values(resultadoVendas).reduce((acc, curr) => acc + curr, 0);
console.log(`\n📊 Total de produtos vendidos: ${totalProdutos} unidade(s)`);

// 15. Filtrar produtos com preço acima de R$ 100
let produtosPreco = { celular: 120, fone: 80, monitor: 150 };
let produtosCaros = {};

// Filtra produtos com preço acima de R$ 100
for (const [produto, preco] of Object.entries(produtosPreco)) {
    // Verifica se o preço é válido
    if (typeof preco === 'number' && preco > 100) {
        produtosCaros[produto] = preco; // Adiciona produtos caros
    }
}

// Exibe os produtos caros de forma formatada
if (Object.keys(produtosCaros).length > 0) {
    console.log("💰 Produtos caros:");
    for (const [produto, preco] of Object.entries(produtosCaros)) {
        console.log(`- ${produto}: R$ ${preco.toFixed(2)}`);
    }
} else {
    console.log("🛑 Nenhum produto caro encontrado.");
}