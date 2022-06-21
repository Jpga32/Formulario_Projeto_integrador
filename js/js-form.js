const formulario = document.querySelector("form");
const inputTelefone = formulario.querySelector("#telefone");
const spanMaximo = formulario.querySelector("#maximo");
const bCaracteres = formulario.querySelector("#caracteres");
 const textMensagem = formulario.querySelector("#mensagem");
/* const textMensagem = formulario.querySelector("[name=mensagem]"); */

let quantidade = 250;   // Determina o valor maximo de caracteres

// Evento para detectaçao de entrada de dados (Digitação)
textMensagem.addEventListener("input", function(){
  console.log(textMensagem.value);

 // Criando o que for digitado   
let conteudo = textMensagem.value;

// criando uma contagem regressiva
let contagem = quantidade - conteudo.length;

// Adicionando contagem ao elemento
bCaracteres.textContent = contagem;

const limite = formulario.querySelector("#maximo")


if (contagem == 0) {
    bCaracteres.style.color = "red";
    textMensagem.style.boxShadow = "red 0px 0px 10px"
} else {
    bCaracteres.style.color = "black";
    textMensagem.style.boxShadow = "black 5px 5px 10px"

}

});

    // Utilizando o VanillaMasker

    VMasker(inputTelefone).maskPattern("(99) 9999-99999");

  // Formspree
    var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Obrigado por enviar!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Ops algo deu errado ¯\_(ツ)_/¯ "
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Ops deu ruim! ¯\_(ツ)_/¯"
      });
    }
    form.addEventListener("submit", handleSubmit)

