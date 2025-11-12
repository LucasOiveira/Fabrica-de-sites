  function validaForm() {
            const email = document.getElementById('email');
            let emailtext = email.value.trim();
            let valido = false;

            if (emailtext.includes("@")) {
                valido = true
                console.log("Achei @!");
            }
            else {
                valido = false;
            }

            let partesEmail = emailtext.split("@");
            if (partesEmail[0].length >= 7 && partesEmail[0].length <= 127) {
                console.log("o tamanho está entre 7 e 127");
                valido = true;
            } else {
                valido = false;
            }

            const nome = document.getElementById("nome");
            let nometext = nome.value.trim();
            if(nome.length >= 3){
                console.log("Nome atende ao tamanho minimo")
                valido = true;
            } else{
                valido = false;
            }
            const textArea= document.getElementById("mensagem");
            let texttexto = textArea.value.trim();
            if (texttexto !== ""){
                console.log("texto não pode ser vazio!")
                valido = true
            } else {
                valido = false
            }

            if(valido) {
            alert("recebemos a sua mensagem, em breve entraremos em contato.")
        } else {
            alert("temos um erro no formulario, corrija para seguir!")
        }
        document.addEventListener("submit",function (e) {
            e.preventDefault();
            validaForm();
        })