document.addEventListener("DOMContentLoaded", () => {
    
    // === Lógica 1: Botão de Acessibilidade (Modo Escuro / Contraste) ===
    const btnAccessibility = document.getElementById("toggle-accessibility");
    
    btnAccessibility.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        
        // Atualiza dinamicamente o texto do botão de acordo com o estado do tema
        if (document.body.classList.contains("dark-mode")) {
            btnAccessibility.textContent = "Modo Claro";
        } else {
            btnAccessibility.textContent = "Modo Escuro";
        }
    });

    // === Lógica 2: Validador Interativo do Quiz Anti-Desinformação ===
    const btnVerificar = document.getElementById("btn-verificar");
    const feedbackQuiz = document.getElementById("quiz-feedback");

    btnVerificar.addEventListener("click", () => {
        // Captura o input do tipo radio selecionado pelo usuário
        const opcaoSelecionada = document.querySelector('input[name="quiz-ans"]:checked');
        
        // Validação se o usuário clicou sem escolher nenhuma opção
        if (!opcaoSelecionada) {
            feedbackQuiz.textContent = "Por favor, selecione uma alternativa antes de verificar!";
            feedbackQuiz.style.color = "#d35400"; // Laranja de aviso
            feedbackQuiz.classList.remove("hidden");
            return;
        }

        // Armazena e processa o valor em uma variável antes da exibição
        const respostaUsuario = opcaoSelecionada.value;

        if (respostaUsuario === "correta") {
            feedbackQuiz.textContent = "Parabéns! Resposta correta. Agências de fact-checking e portais de jornalismo profissional são as melhores barreiras contra as deepfakes.";
            feedbackQuiz.style.color = "#27ae60"; // Verde Sucesso
        } else {
            feedbackQuiz.textContent = "Atenção! Essa resposta pode ajudar a espalhar desinformação. O correto é sempre suspender o compartilhamento automático e checar fontes profissionais.";
            feedbackQuiz.style.color = "#c0392b"; // Vermelho Erro
        }

        feedbackQuiz.classList.remove("hidden");
    });

    // === Lógica 3: Manipulação e Feedback do Formulário de Registro ===
    const formulario = document.getElementById("denuncia-form");
    const feedbackForm = document.getElementById("form-feedback");

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault(); // Impede a página de recarregar
        
        // Coleta os valores digitados (Simulação de manipulação de variáveis)
        const tipoMidia = document.getElementById("tipo-midia").value;
        const descricao = document.getElementById("descricao-caso").value;

        // Se os dados existem, exibe feedback de sucesso dinâmico na tela
        if (tipoMidia && descricao) {
            feedbackForm.classList.remove("hidden");
            formulario.reset(); // Limpa as caixas de texto
            
            // Oculta o aviso de sucesso após 5 segundos automaticamente
            setTimeout(() => {
                feedbackForm.classList.add("hidden");
            }, 5000);
        }
    });
});
