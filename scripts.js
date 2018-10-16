// const button = document.querySelector('button');
// const text = document.querySelector('p');

// const trocarTexto = () => {
//     text.innerHTML = 'Olá, você clicou no botão';
// }

// button.onclick = trocarTexto;

const trocarTexto = () => {
    $('p').html('Olá, você clicou no botão.');
}

const apagarTexto = () => {
    $('p').slideUp();
}

$('button').click(trocarTexto);
$('p').mouseover(apagarTexto);