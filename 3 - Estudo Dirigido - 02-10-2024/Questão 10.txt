// Turma 88433 - Senai Dendezeiros
// Alunos: Daniel Lucas e Kauan Nascimento

// Listas de idades
const idadesGrupo1 = [25, 18, 32];
const idadesGrupo2 = [22, 30, 28];

// Função para concatenar, ordenar e classificar as idades
const idadesClassificadas = idadesGrupo1
    .concat(idadesGrupo2) // Concatenar as listas
    .sort(function (a, b) {
        return a - b; // Ordenar em ordem crescente
    })
    .map(function (idade) {
        // Classificar as idades em grupos
        if (idade < 20) {
            return { idade: idade, grupo: 'Jovem' };
        } else if (idade < 30) {
            return { idade: idade, grupo: 'Jovem Adulto' };
        } else {
            return { idade: idade, grupo: 'Adulto' };
        }
    });

// Exibindo o resultado de forma legível
console.log("Idades classificadas:");
idadesClassificadas.forEach(function (item) {
    console.log(`Idade: ${item.idade}, Grupo: ${item.grupo}`);
});

