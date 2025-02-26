function moverBotao() {
    // Pega o botão pelo ID
    const botao = document.getElementById("botao");

    // Gera posições aleatórias dentro da tela
    const posicaoX = Math.random() * (window.innerWidth - botao.offsetWidth);
    const posicaoY = Math.random() * (window.innerHeight - botao.offsetHeight);

    // Muda a posição do botão usando CSS
    botao.style.position = 'absolute';
    botao.style.left = `${posicaoX}px`;
    botao.style.top = `${posicaoY}px`;
}

function mostrarMensagem() {
    // Exibe a mensagem de vitória
    const mensagem = document.getElementById("mensagem-vitoria");
    mensagem.style.display = "block"; // Torna a mensagem visível

    // Desativa os botões após a vitória
    const botao = document.getElementById("botao");
    const botaoCerto = document.getElementById("botao-certo");

    botao.disabled = true;
    botaoCerto.disabled = true;
}

function começar() {
    var audio = document.getElementById("audio");
    audio.currentTime = 0; // O áudio começará aos 30 segundos
    audio.play(); // Reproduz o áudio
}