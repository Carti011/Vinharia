// OS COMENADOS DO POPUP

function verificarIdade(resposta) {
    if (resposta === 'sim') {
        document.getElementById('overlay').style.display = 'none'; // Oculta o overlay quando a resposta é 'sim'
    } else if (resposta === 'nao') {
        window.location.href = 'https://www.google.com';
    }

    document.getElementById('popup').style.display = 'none'; // OCULTA O POPUP A SER CLICADO
}