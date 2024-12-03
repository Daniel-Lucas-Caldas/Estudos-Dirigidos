// Turma 88433 - Senai Dendezeiros
// Alunos: Daniel Lucas e Kauan Nascimento

function verificarSenha(senha) {
    // Critérios de validação
    const minLength = 8;
    const temMaiuscula = /[A-Z]/.test(senha);
    const temMinuscula = /[a-z]/.test(senha);
    const temNumero = /[0-9]/.test(senha);
    const temEspecial = /[!@#$%^&*]/.test(senha);

    // Verifica se a senha atende a todos os critérios
    if (senha.length >= minLength && temMaiuscula && temMinuscula && temNumero && temEspecial) {
        console.log("Senha válida!");
    } else {
        console.log("Senha inválida! A senha deve ter pelo menos 8 caracteres, " +
            "incluir uma letra maiúscula, uma letra minúscula, um número e um caractere especial.");
    }
}

// Testes
verificarSenha("Senha@123"); // Senha válida!
console.log("\n");
verificarSenha("senh@123");   // Senha inválida! (sem letra maiúscula)
console.log("\n");
verificarSenha("SENHA123");   // Senha inválida! (sem letra minúscula e caractere especial)
console.log("\n");
verificarSenha("Sen123!");    // Senha inválida! (menos de 8 caracteres)
console.log("\n");
verificarSenha("Senha123");    // Senha inválida! (sem caractere especial)

