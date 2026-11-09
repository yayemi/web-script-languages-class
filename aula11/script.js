/*const btn = document.querySelectorAll(".btn");
const nome = document.getElementById("nome").value;


btn.forEach(function(button) {
    botao.addEventListener("click", exibirMsg)
});

function exibirMsg() {
    alert("Hello wolrd 2!")
    console.log("Função executada!");
    
} 

const btnGravar = document.querySelector("#btnGravar");
btnGravar.addEventListener("click", validar);

function validar() {
    nome = document.getElementById("nome").value
    if(nome.value == ''){
     alert("Campo obrigatório!");
    nome.focus();

    }
}*/
const btnGravar = document.querySelector("#btnGravar")
btnGravar.addEventListener("click", validar);
function validar(e){
    e.preverDefault()
    nome = document.getElementById("nome")
    errNome = document.querySelector("#erremail")
}

const email = document.getElementById("email")
const erremail = document.querySelector("#erremail")

if(nome.value == ''){
    alert("Campo obrigatório!");
    errNome.textContent = "Campo obrigatório"
   nome.focus();
   return false;
   

   }
if(email.value == ''){
    alert("Campo obrigatório!");
    errEmail.textContent = "Campo obrigatório"
   nome.focus();

   }