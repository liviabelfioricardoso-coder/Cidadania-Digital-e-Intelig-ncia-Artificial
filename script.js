// Aguarda o carregamento completo do DOM para evitar erros de execução
document.addEventListener("DOMContentLoaded", () => {
    
    // --- Controle do Modo Escuro (Acessibilidade) ---
    const btnTema = document.getElementById("btn-tema");
    
    btnTema.addEventListener("click", () => {
        // Alterna a classe dark-mode no body do HTML
        document.body.classList.toggle("dark-mode");
    });

    // --- Controle do Quiz Anti-Desinformação ---
    const formQuiz = document.getElementById("form-quiz");
    const divFeedback = document.getElementById("feedback");
    const textoFeedback = document.getElementById("feedback-texto");
    const contadorTexto = document.getElementById("contador-tentativas");

    // Variável de controle para processamento de dados internos
    let totalTentativas = 0;

    formQuiz.addEventListener("submit", (event) => {
        // Impede que a página recarregue ao enviar o formulário
        event.preventDefault();

        // Incrementa o número de tentativas e atualiza a variável interna
        totalTentativas++;

        // Captura o valor do botão de rádio que o usuário selecionou
        const respostaUsuario = formQuiz.elements["resposta"].value;
        
        // Remove a classe que esconde o bloco de resposta
        divFeedback.classList.remove("escondido");

        // Processa a informação antes de renderizar o feedback na tela
        if (respostaUsuario === "falso") {
            textoFeedback.innerHTML = "<strong>✅ Correto!</strong> As deepfakes costumam deixar rastros imperfeitos como piscadas assimétricas, falhas no reflexo dos olhos e contornos borrados perto das orelhas e cabelos.";
            textoFeedback.style.color = "#38a169"; // Verde para acerto
        } else {
            textoFeedback.innerHTML = "<strong>❌ Incorreto.</strong> Na verdade, a IA ainda comete erros sutis! Prestar atenção na iluminação e nos movimentos biológicos ajuda a desmascarar mídias manipuladas.";
            textoFeedback.style.color = "#e53e3e"; // Vermelho para erro
        }

        // Atualiza dinamicamente o contador na tela utilizando a variável processada
        contadorTexto.textContent = `Tentativas realizadas: ${totalTentativas}`;
    });
});
