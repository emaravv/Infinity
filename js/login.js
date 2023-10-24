document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verifica se o usuário existe e a senha está correta
    if (localStorage.getItem(username) === password) {
        alert("Login bem-sucedido.");
        window.location.href = "/pag/pag1.html";
    } else {
        alert("Falha no login. Verifique suas credenciais.");
    }
});
