document.addEventListener('DOMContentLoaded',() =>{


    const trans= document.getElementById("transfForm");
    trans.addEventListener("submit", function(event) {
       event.preventDefault();


  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};
  const email = localStorage.getItem("usuarioLogado");
  const numContaDestino = document.getElementById("numConta").value.trim();
  const valorTransferencia = parseFloat(document.getElementById("valTrans").value.trim());
  const descricao = document.getElementById("desc").value.trim();


 
  if (!email || !usuarios[email]) {
      alert("Usuário não logado.");
      return;
  }

  if (!numContaDestino || isNaN(valorTransferencia) || valorTransferencia <= 0) {
      alert("Preencha os campos corretamente.");
      return;
  }

  const usuarioOrigem = usuarios[email];
  const destino = Object.values(usuarios).find(u => u.conta === numContaDestino);

  if (!destino) {
      alert("Conta de destino não encontrada.");
      return;
  }

  if (usuarioOrigem.saldo < valorTransferencia) {
      alert("Saldo insuficiente.");
      return;
  } else {
      usuarioOrigem.saldo -= valorTransferencia;
      destino.saldo += valorTransferencia;
  }

  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  alert("Transferência realizada com sucesso!");
  window.location.href = "inicio.html";
});

})



function back() {
  window.location.href = "inicio.html";
}
