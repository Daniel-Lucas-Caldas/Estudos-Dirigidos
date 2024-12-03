// Turma 88433 - Senai Dendezeiros
// Alunos: Daniel Lucas e Kauan Nascimento

function filtrarImparesEConcatenarComPares(lista) {
    // Filtra os números ímpares
    const impares = lista.filter(numero => numero % 2 !== 0);
    
    // Filtra os números pares
    const pares = lista.filter(numero => numero % 2 === 0);
    
    // Inverte a ordem dos números ímpares
    const imparesInvertidos = impares.reverse();
    
    // Concatena os números ímpares invertidos com os pares originais
    const resultado = imparesInvertidos.concat(pares);
    
    console.log("Números ímpares invertidos e concatenados com pares:", resultado);
    return resultado;
}

// Teste
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
filtrarImparesEConcatenarComPares(numeros);
