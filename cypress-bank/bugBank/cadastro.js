document.addEventListener('DOMContentLoaded',() =>{
    const cadastro= document.getElementById("cadastroForm");

     cadastro.addEventListener("submit", function(event) {
       event.preventDefault();


    const email = document.getElementById("email").value.trim();
    const nome = document.getElementById("nome").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const conSenha = document.getElementById("conSenha").value.trim();
  

    if (!email || !nome || !senha || !conSenha) {
        alert("Preencha todos os campos.");
        return;
    }

    if (senha !== conSenha) {
        alert("As senhas não coincidem.");
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

    if (usuarios[email]) {
        alert("Usuário já cadastrado.");
        return;
    }

    const numeroConta = Math.floor(100000 + Math.random() * 900000).toString();

    usuarios[email] = {
        nome: nome,
        senha: senha,
        saldo: 1000,
        conta: numeroConta
    };

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    alert(`Cadastro realizado! Sua conta é:`);
    window.location.href = "index.html";
});

})
function back() {
    window.location.href = "index.html";
  }