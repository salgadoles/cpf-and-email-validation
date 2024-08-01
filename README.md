## Documentação Conjunta: Validação de CPF e E-mail

Esta documentação descreve a implementação de dois scripts JavaScript para validar CPF e endereços de e-mail fornecidos por usuários em um formulário HTML, esse projeto foi apresentado pelo docente [LeonardoRocha](https://github.com/LeonardoRochaMarista/LeonardoRochaMarista) dentro de sala de aula na diciplina de Programação web 1. A validação de CPF garante que o número inserido seja válido conforme as regras do Cadastro de Pessoa Física no Brasil, enquanto a validação de e-mail verifica a presença de caracteres essenciais para um endereço de e-mail.

### Validação de CPF

Este código realiza a validação de um CPF (Cadastro de Pessoa Física). O processo de validação verifica se o CPF tem 11 dígitos e se os dígitos verificadores estão corretos.

#### Estrutura do Código

1. **Escutador de Evento no Formulário**
   ```javascript
   document.getElementById("cpfForm").addEventListener("submit", function (event) {
     event.preventDefault();

     const cpf = document.getElementById("cpf").value;
     const msg = document.getElementById("message");
     if (validateCPF(cpf)) {
       msg.textContent = "O CPF é Válido";
       msg.style.color = 'green';
     } else {
       msg.textContent = "O CPF é Inválido";
       msg.style.color = 'red';
     }
   });
   ```

   - **element**: Referência a um objeto `Element`, ou `null` se um elemento com o ID especificado não estiver presente no documento.
   - **id**: String que diferencia maiúsculas e minúsculas representando o ID único do elemento sendo procurado.
   - **submit**: O evento `submit` é disparado quando ocorre a submissão de um `<form>`.
   - **preventDefault**: Cancela o evento se for cancelável, sem parar a propagação do mesmo.
   - **const**: Declaração que cria uma variável cujo valor é fixo, ou seja, uma constante somente leitura.
   - **value**: Utiliza o valor do parâmetro passado ao invés do próprio parâmetro.
   - **textContent**: Propriedade da interface `Node` que representa o conteúdo do texto de um nó e de seus descendentes.

2. **Função de Validação de CPF**
   ```javascript
   function validateCPF(cpf) {
      cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos

      // Verifica se o valor contém 11 dígitos e se todos os dígitos são iguais
      if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
          return false;
      }

      let soma = 0;
      let resto;

      // Validação do primeiro dígito verificador
      for (let i = 1; i < 10; i++) {
          soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
      }
      resto = (soma * 10) % 11;
      if (resto === 10 || resto === 11) {
          resto = 0;
      }
      if (resto !== parseInt(cpf.substring(9, 10))) {
          return false;
      }

      soma = 0;

      // Validação do segundo dígito verificador
      for (let i = 1; i <= 10; i++) {
          soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
      }
      resto = (soma * 10) % 11;
      if (resto === 10 || resto === 11) {
          resto = 0;
      }
      if (resto !== parseInt(cpf.substring(10, 11))) {
          return false;
      }

      return true;
   }
   ```

   - **replace**: O método `replace()` retorna uma nova string com algumas ou todas as correspondências de um padrão substituídas por um valor de substituição.
   - **length**: Retorna o comprimento de uma string.
   - **parseInt**: Converte uma string para um número inteiro.
   - **substring**: Retorna um subconjunto de uma string entre um índice inicial e um índice final.
   - **soma**: Variável utilizada para armazenar a soma dos dígitos multiplicados por pesos específicos durante a validação.
   - **resto**: Variável que armazena o resto da divisão, utilizado para verificar a validade dos dígitos verificadores.

### Validação de E-mail

Este código verifica se um endereço de e-mail fornecido é válido. A validação verifica se o e-mail contém um "@" e um ".".

#### Estrutura do Código

1. **Função de Verificação de E-mail**
   ```javascript
   function ChecarEmail() {
       if (document.forms[0].email.value === "" ||
           document.forms[0].email.value.indexOf("@") === -1 ||
           document.forms[0].email.value.indexOf(".") === -1) {
           alert("Por favor, informe um e-mail válido");
           return false;
       } else {
           alert("E-mail informado com sucesso!");
       }
   }
   ```

   - **document.forms[0].email.value === ""**: Verifica se o campo de e-mail está vazio.
   - **document.forms[0].email.value.indexOf("@") === -1**: Verifica se o caractere "@" está presente no e-mail.
   - **document.forms[0].email.value.indexOf(".") === -1**: Verifica se o caractere "." está presente no e-mail.
   - **alert("Por favor, informe um e-mail válido")**: Exibe uma mensagem de alerta informando que o e-mail é inválido.
   - **return false**: Interrompe o envio do formulário (se a função estiver associada a um evento de submissão).
   - **alert("E-mail informado com sucesso!")**: Exibe uma mensagem de sucesso se todas as verificações passarem.

### Conclusão

Os códigos fornecidos realizam a validação de CPF e e-mail, garantindo que os dados inseridos pelos usuários estejam no formato correto antes de serem enviados ou processados. Estas validações são essenciais para garantir a integridade e a qualidade dos dados coletados.

### Melhorias Possíveis

- **Refatoração do Código de Validação de CPF**: Pode-se criar funções auxiliares para os cálculos dos dígitos verificadores, melhorando a legibilidade.
- **Feedback ao Usuário**: Adicionar mensagens de erro mais detalhadas para guiar o usuário em caso de falhas na validação.
- **Validação Adicional de E-mail**: Implementar uma validação mais robusta para endereços de e-mail utilizando expressões regulares.

---

## Autores

- [Samuel Lima do amaral](https://github.com/salgadoles)

## Contatos

 - [E-mail](@samuellimadoamaral.prof@gmail.com)
 - [Linkedin](https://www.linkedin.com/in/samuel-lima-do-amaral-713542297/)
