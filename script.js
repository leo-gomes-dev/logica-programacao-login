// Captura o formulario e a div de mensagem do HTML
const form = document.getElementById("formLogin");
const caixaMensagem = document.getElementById("mensagem");

// Funcao auxiliar pronta para exibir mensagens na tela
function mostrarMensagem(texto, tipo) {
    caixaMensagem.textContent = texto;
    // 'tipo' deve ser "erro" ou "sucesso" (classes criadas no CSS)
    caixaMensagem.className = "caixa-mensagem " + tipo;
}

// Evento disparado quando o usuario clica no botao "Entrar"
form.addEventListener("submit", function(event) {
    // Impede a pagina de recarregar ao enviar o formulario
    event.preventDefault();

    // Pega os valores digitados nos campos
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // Dados ficticios corretos para testar o login (Regra 4)
    const emailCadastrado = "aluno@escola.com";
    const senhaCadastrada = "123456";


    // =========================================================================
    // AREA DE ATIVIDADE DOS ALUNOS - LOGICA DE PROGRAMACAO
    // Complete os testes abaixo usando os operadores:
    //   ||  (OU / OR)
    //   &&  (E / AND)
    //   !   (NAO / NOT)
    // =========================================================================


    // -------------------------------------------------------------------------
    // REGRA 1: Verificar campos vazios usando o operador OR ( || )
    // Objetivo: Se o email estiver vazio OU a senha estiver vazia, mostrar erro.
    // Dica: Use (email === "" || senha === "")
    // -------------------------------------------------------------------------
    if ( /* ESCREVA A CONDICAO AQUI */ ) {
        mostrarMensagem("Erro: Preencha o e-mail e a senha.", "erro");
        alert("Atencao: Existem campos vazios!");
        return; // Para a execucao do codigo aqui
    }


    // -------------------------------------------------------------------------
    // REGRA 2: Verificar formato do e-mail usando o operador NOT ( ! )
    // Objetivo: Se o e-mail NAO tiver o caractere "@", mostrar erro.
    // Dica: email.includes("@") retorna verdadeiro se tiver @. Use ! na frente.
    // -------------------------------------------------------------------------
    if ( /* ESCREVA A CONDICAO AQUI */ ) {
        mostrarMensagem("Erro: Digite um e-mail valido com @.", "erro");
        return;
    }


    // -------------------------------------------------------------------------
    // REGRA 3: Verificar tamanho da senha
    // Objetivo: Se a senha tiver menos que 6 caracteres, mostrar erro.
    // Dica: Use senha.length < 6
    // -------------------------------------------------------------------------
    if ( /* ESCREVA A CONDICAO AQUI */ ) {
        mostrarMensagem("Erro: A senha deve ter pelo menos 6 caracteres.", "erro");
        return;
    }


    // -------------------------------------------------------------------------
    // REGRA 4: Validar usuario e senha usando o operador AND ( && )
    // Objetivo: O login so funciona se o email for igual ao emailCadastrado
    //           E a senha for igual a senhaCadastrada.
    // -------------------------------------------------------------------------
    if ( /* ESCREVA A CONDICAO AQUI */ ) {
        mostrarMensagem("Sucesso! Login realizado com exito.", "sucesso");
        alert("Bem-vindo ao sistema!");
    } else {
        mostrarMensagem("Erro: E-mail ou senha incorretos.", "erro");
    }

});
