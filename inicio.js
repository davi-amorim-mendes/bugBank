document.addEventListener("DOMContentLoaded", () => {
    // Conta padrão
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || {};
    const contaPadraoEmail = "padrao@email.com";

    if (!usuarios[contaPadraoEmail]) {
        usuarios[contaPadraoEmail] = {
            nome: "Usuário Padrão",
            senha: "1234", // 
            saldo: 1000.00,
            conta: "100000"
        };
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        console.log("Conta padrão criada.");
    }

    // 🔹 Verificação de login
    const email = localStorage.getItem("usuarioLogado");

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
