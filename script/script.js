function cad(senha)
{
    const email = document.getElementById('email').value;
    const nome = document.getElementById('nome').value;
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const senha = document.getElementById('senha').value;
    const conSenha = document.getElementById('conSenha').value;

    if(senha === conSenha)
    {
        cad(senha);
    }
    else
    {
        alert("Senhas diferente");
    }
});