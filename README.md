## Documentação Conjunta: Validação de CPF e E-mail

Esta documentação descreve a implementação de dois scripts JavaScript para validar CPF e endereços de e-mail fornecidos por usuários em um formulário HTML, esse projegto foi uma atividade apresentada pelo docente [Leonardorocha](https://github.com/LeonardoRochaMarista/LeonardoRochaMarista) dentro de sala de aula na diciplina de programação web 1.

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
   Este trecho de código adiciona um escutador de evento ao formulário com o ID `cpfForm`. Quando o formulário é submetido, a função `validateCPF` é chamada e o resultado é exibido em uma mensagem na tela.

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
          soma += parseInt(cpf.substring(i-1, i)) * (11 - i);
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
          soma += parseInt(cpf.substring(i-1, i)) * (12 - i);
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
   Esta função executa a lógica de validação do CPF, calculando os dígitos verificadores e comparando-os com os fornecidos. Se o CPF não atender aos critérios, a função retorna `false`; caso contrário, retorna `true`.

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
   Esta função verifica se o campo de e-mail do formulário contém um endereço de e-mail válido. Se o campo estiver vazio ou não contiver um "@" e um ".", um alerta é exibido solicitando um e-mail válido. Caso contrário, um alerta confirma o sucesso da inserção do e-mail.

### Conclusão

Os códigos fornecidos realizam a validação de CPF e e-mail, garantindo que os dados inseridos pelos usuários estejam no formato correto antes de serem enviados ou processados. Estas validações são essenciais para garantir a integridade e a qualidade dos dados coletados.

### Melhorias Possíveis

- **Refatoração do Código de Validação de CPF:** Pode-se criar funções auxiliares para os cálculos dos dígitos verificadores, melhorando a legibilidade.
- **Feedback ao Usuário:** Adicionar mensagens de erro mais detalhadas para guiar o usuário em caso de falhas na validação.
- **Validação Adicional de E-mail:** Implementar uma validação mais robusta para endereços de e-mail utilizando expressões regulares.
###Tecnologias usadas
- HTML
- CSS
- JavaScript
- 
  # Autores 
Samuel Lima do Amaral
