const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.[a-zA-Z]+)+$/;

function enviarMensagem(event) {
    event.preventDefault();
    let nome = document.getElementById("nome").value.toString().trim().split(" ")[0]

    if (validarEmail(true)) {
        alert(`Obrigado por usar nossos serviços ${nome}! Sua mensagem foi recebida e será analisada.`)
    }
    else {
        alert(`Insira um email valido, ex: exemplo@dominio.com`)
    }
}

function validarEmail(rtr) {
    test = regex.test(document.getElementById("email").value.toString())
    if (rtr) {
        return test
    } else {
        if (!test) {
            alert(`Insira um email valido, ex: exemplo@dominio.com`)
        }
    }
}
