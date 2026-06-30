// Gerenciador de Estado do Modo Escuro
const toggleBtn = document.getElementById('toggle-dark-mode');
toggleBtn.addEventListener('click', () => {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    if (isDark) {
        document.body.removeAttribute('data-theme');
    } else {
        document.body.setAttribute('data-theme', 'dark');
    }
});

// Lógica Computacional do Quiz (Processamento de Informações)
let pontuacaoTotal = 0; // Variável para processar a informação de estado
const pontosExibicao = document.getElementById('pontos');
const feedback = document.getElementById('quiz-feedback');
const botoesQuiz = document.querySelectorAll('.quiz-btn');

botoesQuiz.forEach(botao => {
    botao.addEventListener('click', (evento) => {
        const respostaUsuario = evento.target.getAttribute('data-correct') === 'true';
        
        // Desabilita os botões após a escolha para evitar cliques repetidos
        botoesQuiz.forEach(btn => btn.disabled = true);

        // Processamento lógico antes de renderizar na tela
        if (respostaUsuario) {
            pontuacaoTotal += 10;
            feedback.textContent = "🎉 Excelente! Bots automatizados e IA gerativa são amplamente usados para inflar narrativas falsas.";
            feedback.style.color = "var(--accent)";
        } else {
            pontuacaoTotal = 0;
            feedback.textContent = "⚠️ Ops! Lembre-se de que a IA de texto e automação de redes sociais também faz parte do ecossistema da desinformação.";
            feedback.style.color = "#ef4444";
        }

        // Atualização dinâmica do DOM baseada no processamento anterior
        pontosExibicao.textContent = pontuacaoTotal;
        feedback.classList.remove('hidden');
    });
});
