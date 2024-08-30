function adicionarAoDisplay(valor) {
    document.getElementById('display').value += valor;
}

function limparDisplay() {
    document.getElementById('display').value = '';
}

function deletarUltimo() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.slice(0, -1);
}

function calcular() {
    let display = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(display);
    } catch (e) {
        document.getElementById('display').value = 'Erro';
    }
}

function limparEntrada() {
    let display = document.getElementById('display').value;
    let ultimaEntrada = display.split(/[^0-9\.\+\-\*\/\(\)\%]/).pop();
    document.getElementById('display').value = display.slice(0, -ultimaEntrada.length);
}

function copiarResultado() {
    let display = document.getElementById('display');
    display.select();
    document.execCommand('copy');

    let mensagem = document.getElementById('mensagem');
    mensagem.style.visibility = 'visible';
    mensagem.innerText = 'Resultado Copiado!';

    setTimeout(function() {
        mensagem.style.visibility = 'hidden';
    }, 2000);
}