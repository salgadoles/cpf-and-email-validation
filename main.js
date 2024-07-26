// bloco de validação de email
// -------------------------------------
function ChecarEmail() {
    if (document.forms[0].email.value == "" ||
        document.forms[0].email.value.indexOf("@") == -1 ||
        document.forms[0].email.value.indexOf(".") == -1) {
        alert("Por favor informe um email valido");
        return false
    }else{
        alert("Email informado com sucesso!")
    }
}

// -------------------------------------


// codigo de verificação de email digitado
// -------------------------------------


// -------------------------------------