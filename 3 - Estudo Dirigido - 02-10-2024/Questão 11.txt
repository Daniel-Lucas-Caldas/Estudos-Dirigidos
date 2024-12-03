// Turma 88433 - Senai Dendezeiros
// Alunos: Daniel Lucas e Kauan Nascimento

// Função para verificar se o array está em ordem crescente
function verificarOrdemCrescente(lista) {
    for (let i = 0; i < lista.length - 1; i++) {
        if (lista[i] > lista[i + 1]) {
            console.log("Os valores não estão em ordem crescente.");
            return false;
        }
    }
    console.log("Os valores estão em ordem crescente.");
    return true;
}

// Função para ordenar o array em ordem crescente
function ordenarCrescente(lista) {
    lista.sort(function(a, b) {
        return a - b; // Ordena em ordem crescente
    });
    console.log("Lista ordenada em ordem crescente:", lista);
}

// Testando com um array fora de ordem crescente
const lista1 = [10, 2, 8, 4, 6];
if (!verificarOrdemCrescente(lista1)) {
    ordenarCrescente(lista1);
}


