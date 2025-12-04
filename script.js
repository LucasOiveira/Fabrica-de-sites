//   function validaForm() {
//             const email = document.getElementById('email');
//             let emailtext = email.value.trim();
//             let valido = false;

//             if (emailtext.includes("@")) {
//                 valido = true
//                 console.log("Achei @!");
//             }
//             else {
//                 valido = false;
//             }

//             let partesEmail = emailtext.split("@");
//             if (partesEmail[0].length >= 7 && partesEmail[0].length <= 127) {
//                 console.log("o tamanho está entre 7 e 127");
//                 valido = true;
//             } else {
//                 valido = false;
//             }

//             const nome = document.getElementById("nome");
//             let nometext = nome.value.trim();
//             if(nome.length >= 3){
//                 console.log("Nome atende ao tamanho minimo")
//                 valido = true;
//             } else{
//                 valido = false;
//             }
//             const textArea= document.getElementById("mensagem");
//             let texttexto = textArea.value.trim();
//             if (texttexto !== ""){
//                 console.log("texto não pode ser vazio!")
//                 valido = true
//             } else {
//                 valido = false
//             }

//             if(valido) {
//             alert("recebemos a sua mensagem, em breve entraremos em contato.")
//         } else {
//             alert("temos um erro no formulario, corrija para seguir!")
//         }
//         document.addEventListener("submit",function (e) {
//             e.preventDefault();
//             validaForm();
//         })}

// Adiciona um "ouvinte" para o evento de envio do formulário
document.addEventListener("submit", function (e) {
    e.preventDefault(); // Impede que a página recarregue e envie o formulário automaticamente
    validaForm(); // Chama a função que valida os campos
});

// Função responsável por validar todo o formulário
function validaForm() {
    let valido = true; // Variável que controla se tudo está correto

    // ------------------ EMAIL ------------------
    const email = document.getElementById('email'); // Pega o campo de email
    const emailText = email.value.trim(); // Remove espaços extras do texto digitado

    // Verifica se existe o símbolo '@'
    if (!emailText.includes("@")) {
        valido = false; 
        console.log("Email sem @");
    }

    // Separa o email em duas partes: antes e depois do "@"
    const partesEmail = emailText.split("@");

    // Verifica se a parte antes do @ tem tamanho válido
    if (partesEmail[0].length < 7 || partesEmail[0].length > 127) {
        valido = false;
        console.log("Parte antes do @ inválida");
    }

    // ------------------ NOME ------------------
    const nome = document.getElementById("nome"); // Pega o campo do nome
    const nomeText = nome.value.trim(); // Remove espaços extras

    // Verifica se o nome tem pelo menos 3 caracteres
    if (nomeText.length < 3) {
        valido = false;
        console.log("Nome muito curto");
    }

    // ------------------ MENSAGEM ------------------
    const textArea = document.getElementById("mensagem"); // Pega a caixa de mensagem
    const msgText = textArea.value.trim(); // Remove espaços extras

    // Verifica se a mensagem não está vazia
    if (msgText === "") {
        valido = false;
        console.log("Mensagem vazia");
    }

    // ------------------ RESULTADO FINAL ------------------
    if (valido) {
        // Caso todos os campos estejam corretos
        alert("Recebemos a sua mensagem, em breve entraremos em contato.");
    } else {
        // Se alguma validação falhar
        alert("Há erros no formulário, corrija para continuar!");
    }
}