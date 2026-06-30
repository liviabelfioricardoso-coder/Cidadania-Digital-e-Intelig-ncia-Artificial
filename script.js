// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {

    // --- FUNCIONALIDADE 1: MODO ESCURO (Acessibilidade) ---
    const btnDarkMode = document.getElementById('toggle-dark-mode');
    
    btnDarkMode.addEventListener('click', () => {
        // Alterna a classe 'dark-mode' no elemento body
        document.body.classList.toggle('dark-mode');
    });

    // --- FUNCIONALIDADE 2: VALIDADOR DO QUIZ ANTI-DESINFORMAÇÃO ---
    const quizForm = document.getElementById('quiz-form');
    const quizFeedback = document.getElementById('quiz-feedback');

    quizForm.addEventListener('submit', (event) => {
        // Impede a página de recarregar ao enviar o formulário
        event.preventDefault();

        // Captura a opção selecionada pelo usuário
        const selectedOption = quizForm.querySelector('input[name="quiz-answer"]:checked');

        // Validação caso o usuário clique sem selecionar nada
        if (!selectedOption) {
            quizFeedback.textContent = "Por favor, selecione uma alternativa antes de enviar!";
            quizFeedback.className = "feedback-box incorrect"; // Aplica estilo de erro
            return;
        }

        // Processa a resposta usando variáveis lógicas
        const userAnswer = selectedOption.value;

        if (userAnswer === 'correta') {
            quizFeedback.textContent = "Parabéns! Você demonstrou uma excelente atitude de Cidadania Digital. Sempre verifique as fontes antes de repassar uma informação.";
            quizFeedback.className = "feedback-box correct"; // Aplica estilo de acerto
        } else {
            quizFeedback.textContent = "Resposta incorreta. Compartilhar sem checar ou acreditar de imediato ajuda a espalhar a desinformação automatizada. Lembre-se sempre de duvidar e checar canais oficiais.";
            quizFeedback.className = "feedback-box incorrect"; // Aplica estilo de erro
        }
    });
});
