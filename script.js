document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('typing');
    const textToType = "JANELA DA DÉCADA";
    let index = 0;

    function type() {
        if (index < textToType.length) {
            textElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(type, 100); // Velocidade da digitação
        } else {
            // Se quiser que o cursor pare de piscar após terminar:
            textElement.style.borderRight = "none";
        }
    }

    // Inicia a animação toda vez que a página carrega/entra na seção
    textElement.textContent = ""; 
    type();
});