document.addEventListener("DOMContentLoaded", () => {
    const email = localStorage.getItem("usuarioLogado");
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};

    if (!email || !usuarios[email]) {
        alert("Usuário não logado.");
        window.location.href = "index.html";
        return;
    }

    const usuario = usuarios[email];
    document.getElementById("pUsuario").textContent = `Olá, ${email}`;
    document.getElementById("pConta").innerHTML = `Conta digital: <strong>${usuario.conta}</strong>`;
    document.getElementById("pSaldo").innerHTML = `Saldo em conta: <strong>R$ ${usuario.saldo.toFixed(2)}</strong>`;
});

function back() {
    localStorage.removeItem("usuarioLogado");
    window.location.href = "index.html";
}

function trans() {
    window.location.href = "transf.html";
}