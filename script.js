// Seleciona todos os botões que avançam a narrativa
const avanca = document.querySelectorAll('.btn-proximo');

// Função para avançar para o próximo passo
function avancarParaProximoPasso(button) {
    const atual = document.querySelector('.ativo');
    const proximoPassoId = 'passo-' + button.getAttribute('data-proximo');
    const proximoPasso = document.getElementById(proximoPassoId);

    // Verifica se o próximo passo existe
    if (proximoPasso) {
        atual.classList.remove('ativo');
        proximoPasso.classList.add('ativo');
    } else {
        verificarDesfecho(button);
    }
}

// Função para verificar se o jogador chegou a um desfecho
function verificarDesfecho(button) {
    const desfechoId = button.getAttribute('data-proximo');
    const desfecho = document.getElementById(`desfecho-${desfechoId}`);

    if (desfecho) {
        const atual = document.querySelector('.ativo');
        atual.classList.remove('ativo');
        desfecho.classList.add('ativo');
    } else {
        console.error(`Desfecho com o id ${desfechoId} não encontrado!`);
    }
}

// Adiciona o evento de clique a cada botão
avanca.forEach(button => {
    button.addEventListener('click', function() {
        avancarParaProximoPasso(this);
    });
});
