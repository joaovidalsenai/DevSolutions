const emailformat = /^(?!\.)(?!.*\.{2})[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@(?:[a-zA-Z0-9]+\.)+[a-zA-Z]{2,}$/
const nameformat = /^[A-Za-zÀ-ÖØ-öø-ÿÇç]+(?:\s+[A-Za-zÀ-ÖØ-öø-ÿÇç]+)+$/


function enviarMensagem(event) {
    event.preventDefault(); 

    if (validarNome(1)) {
        if (validarEmail(1)) {
            let nome = document.getElementById("nome").value.toString().trim().split(" ")[0]
            alert(`Obrigado por usar nossos serviços ${nome}! Sua mensagem foi recebida e será analisada.`)
        }
        else alert(`Insira um email valido (ex: exemplo@dominio.com)`)
    }
    else alert(`Insira um nome valido (ex: Nome Sobrenome)`)
}

function validarEmail(e) {
    test = emailformat.test(document.getElementById("email").value.toString())
    if (e) {
        return test
    } else {
        if (!test) {
            alert(`Insira um email valido (ex: exemplo@dominio.com)`)
        }
    }
}

function validarNome(e) {
    test = nameformat.test(document.getElementById("nome").value.toString())
    if (e) {
        return test
    } else {
        if (!test) {
            alert(`Insira um nome valido (ex: Nome Sobrenome)`)
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 0,
                    behavior: 'smooth'
                });
            }
        });
    });
});