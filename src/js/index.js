// Objetivo: Criar uma mudança de cor do botão quando for interagir e um alerta para notificar no de envio.

let click = window.document.querySelector(".botao-de-envio");
click.addEventListener('click', clicar);

function clicar() {
    window.alert('Um e-mail de confirmação de cadrasto foi enviado para você.');
}