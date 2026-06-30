// 1. Controle do Modo Escuro
const toggleBtn = document.getElementById('toggle-dark-mode');
toggleBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.body.removeAttribute('data-theme');
    } else {
        document.body.setAttribute('data-theme', 'dark');
    }
});

// 2. Validador do Quiz Anti-Desinformação
const quizButtons = document.querySelectorAll('.quiz-btn');
const feedback = document.getElementById('quiz-feedback');

quizButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const isCorrect = e.target.getAttribute('data-correct') === 'true';
        
        if (isCorrect) {
            feedback.textContent = "✅ Correto! Muitas deepfakes ainda apresentam falhas biológicas, como reflexos inconsistentes nos olhos ou falta de piscadas naturais.";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "❌ Incorreto. Tente novamente! Preste atenção aos detalhes das bordas do rosto e áudio sincronizado.";
            feedback.style.color = "red";
        }
        feedback.classList.remove('hidden');
    });
});
