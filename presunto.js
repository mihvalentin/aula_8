const formulario = document.getElementById ("formulario");
const nome = document.getElementById ("nome");
const telefone = document.getElementById ("telefone");
const senha = document.getElementById ("senha");  
const confirma = document.getElementById ("confirma");  
const mensagem = document.getElementById ("mensagem");    



formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    if(
        nome.value === "" ||
        telefone.value === "" ||
        senha.value === "" ||
        confirmar.value === ""  
    ){
        mensagem.textContent = "Preecha todos os campos";
        mensagem.style.color = "red";
    }else if (senha.value !== confirmar.value){
        mensagem.textContent = "As senhas não coincidem";
        mensagem.style.color = "red"
        mensagem.style.background = "black";
    }else{
        mensagem.textContent = "Cadastro Realizado com Sucesso!!!!!!!";
        mensagem.style.color = "green";
        mensagem.style.backgroundColor = "white";
    }
        
    
});