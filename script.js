function enviarMensagem(event) {
    event.preventDefault();
    let nome = document.getElementById("nome").value.toString().trim().split(" ")[0]
    alert(`Obrigado por usar nossos serviços ${nome}! Sua mensagem foi recebida e será analisada.`)
}