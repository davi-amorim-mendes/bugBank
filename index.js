document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

  if (usuarios[email] && usuarios[email].senha === senha) {
      localStorage.setItem("usuarioLogado", email)
      window.location.href = "inicio.html";
  } else {
    alert("E-mail ou senha incorretos.");
  }  
  
});

document.getElementById("cadastroBtn").addEventListener("click", function(event) {
  event.preventDefault(); 
  window.location.href = "cadastro.html";
});

