# Atividade Prática: Lógica de Programação na Tela de Login

Bem-vindo(a)! Nesta atividade prática, você vai aplicar os **operadores lógicos** (`AND`, `OR` e `NOT`) para fazer uma tela de login funcionar de verdade. 

O visual da página (HTML e CSS) e a estrutura básica já estão prontos. O seu desafio é preencher as regras de decisão no arquivo JavaScript.

---

## Passo 1: Como baixar o projeto do GitHub

Escolha uma das opções abaixo para ter os arquivos no seu computador:

### Opção A: Baixando o arquivo ZIP (Mais rápido)
1. Nesta página do GitHub, clique no botão verde **`<> Code`**.
2. Clique em **`Download ZIP`**.
3. Vá até a sua pasta de **Downloads**, clique com o botão direito no arquivo baixado e selecione **"Extrair tudo..."**.

### Opção B: Usando o terminal (Git)
1. Abra o terminal (ou Git Bash) na pasta onde deseja salvar o projeto.
2. Digite o comando abaixo e aperte **Enter**:
   ```bash
   git clone https://github.com/leo-gomes-dev/logica-programacao-login.git
   ```

---

## Passo 2: Abrindo e editando o código

1. Abra o **Visual Studio Code (VS Code)**.
2. Vá em **Arquivo (File) > Abrir Pasta (Open Folder)** e selecione a pasta que você extraiu ou baixou.
3. No menu lateral esquerdo, abra o arquivo **`script.js`** (ou o nome que você deu ao arquivo JS).
4. Procure pela seção **`AREA DE ATIVIDADE DOS ALUNOS`**.

---

## Passo 3: O que você precisa fazer

Você vai encontrar **4 regras** com o texto `/* ESCREVA A CONDICAO AQUI */`. Substitua esse comentário pela lógica correta usando a tabela de apoio abaixo:

| Operador | Símbolo no Código | Quando usar? |
| :--- | :---: | :--- |
| **OU (OR)** | `\|\|` | Quando basta **uma** das condições ser verdadeira para dar erro. |
| **E (AND)** | `&&` | Quando **todas** as condições precisam ser verdadeiras ao mesmo tempo. |
| **NÃO (NOT)** | `!` | Para **inverter** um resultado (ex: se *NÃO* tiver `@`). |

### Resumo das 4 Regras:
* **Regra 1 (Campos vazios):** Verifique se o `email` está vazio **OU** se a `senha` está vazia.
* **Regra 2 (Formato do e-mail):** Verifique se o `email` **NÃO** possui o símbolo `@`.
* **Regra 3 (Tamanho da senha):** Verifique se o tamanho da `senha` é menor que `6`.
* **Regra 4 (Acesso final):** Verifique se o `email` digitado é igual ao `emailCadastrado` **E** se a `senha` digitada é igual à `senhaCadastrada`.

> **Dica:** Leia os comentários verdes acima de cada `if` no código — eles têm instruções para te ajudar.

---

## Passo 4: Como testar se funcionou

Abra o arquivo **`index.html`** no seu navegador (dando dois cliques nele ou usando a extensão *Live Server* do VS Code) e faça os **4 testes abaixo** na ordem:

1. **Teste 1 (Campos em branco):** Clique em **Entrar** sem digitar nada. 
   * *Resultado esperado:* Deve aparecer o alerta e a mensagem de erro pedindo para preencher os campos.
2. **Teste 2 (E-mail sem @):** Digite `://escola.com` e uma senha qualquer, depois clique em **Entrar**.
   * *Resultado esperado:* Deve avisar que falta o `@` no e-mail.
3. **Teste 3 (Senha curta):** Digite `aluno@escola.com` e a senha `123` (3 dígitos), depois clique em **Entrar**.
   * *Resultado esperado:* Deve avisar que a senha precisa ter pelo menos 6 caracteres.
4. **Teste 4 (Login correto):** Use os dados cadastrados no código:
   * **E-mail:** `aluno@escola.com`
   * **Senha:** `123456`
   * *Resultado esperado:* Mensagem verde de sucesso e alerta de boas-vindas.

---

## Desafio Extra (Para quem terminar antes)
Tente criar uma **Regra 5** antes da validação final: bloqueie o login se o usuário tentar usar uma senha muito óbvia, como `"123456"` **OU** `"senha123"` (lembre-se de mudar a `senhaCadastrada` lá em cima para conseguir entrar depois).


