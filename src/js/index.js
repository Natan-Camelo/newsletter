// Objetivo: Criar uma mudança de cor do botão quando for interagir e um alerta para notificar no de envio.

let click = window.document.querySelector(".botao-de-envio");
click.addEventListener('click', clicar);
click.addEventListener('mouseenter', entrar);
click.addEventListener('mouseout', sair);

function clicar() {
    window.alert('Um e-mail de confirmação de cadrasto foi enviado para você.');
}

function entrar() {
    click.style.background = '#04D361';
}

function sair() {
    click.style.background = '#8257e5';
}