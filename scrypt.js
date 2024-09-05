// script.js

// Inicializa o EmailJS com sua chave de API
(function() {
    emailjs.init("SUA_CHAVE_PUBLICA"); // Substitua "SUA_CHAVE_PUBLICA" pela chave da API pública do EmailJS
})();

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Coleta os dados do formulário
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Dados a serem enviados ao EmailJS
    const templateParams = {
        from_name: name,
        from_email: email,
        message: message
    };

    // Envia o email usando EmailJS
    emailjs.send("SUA_ID_DE_SERVICO", "SEU_ID_DE_TEMPLATE", templateParams)
        .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
            document.getElementById("responseMessage").innerHTML = "Mensagem enviada com sucesso!";
            document.getElementById("responseMessage").style.color = "green";
            document.getElementById("contactForm").reset(); // Limpa o formulário após o envio
        }, function(error) {
            console.log("FAILED...", error);
            document.getElementById("responseMessage").innerHTML = "Ocorreu um erro. Tente novamente.";
            document.getElementById("responseMessage").style.color = "red";
        });
});
