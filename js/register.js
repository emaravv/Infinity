document.getElementById("register-form").addEventListener("submit", function (e) {
    e.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Verifica se o usuário já existe
    if (localStorage.getItem(username) !== null) {
        alert("Usuário já cadastrado. Faça login em vez de se cadastrar novamente.");
        return;
    }

    // Salva os dados do usuário no armazenamento local (localStorage)
    localStorage.setItem(username, password);

    alert("Cadastro bem-sucedido. Você pode fazer login agora.");
    window.location.href = "/pag/login.html";
});
