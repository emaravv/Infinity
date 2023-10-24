document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    

    

    if (localStorage.getItem("isLoggedIn") === "true" && localStorage.getItem("loggedInUser")) {
        alert("Login Ja Feito.");
        window.location.href = "/pag/pag1.html";
    }else{
            if (localStorage.getItem(username) === password) {
                alert("Login bem-sucedido.");
        
                // Salve o status de login no armazenamento local
                localStorage.setItem("isLoggedIn", "true");
                localStorage.setItem("loggedInUser", username);
        
                window.location.href = "/pag/pag1.html";
            } else {
                alert("Falha no login. Verifique suas credenciais.");
            }
        }
    }

    

    
    


);

var si 
Sair = () =>{
    
    return localStorage.setItem("isLoggedIn", "false") + window.location.reload(true);
    
}



if (localStorage.getItem("isLoggedIn") === "true" && localStorage.getItem("loggedInUser")) {
        si = true
    }

    if(si === true){
        document.getElementById('login').style.background = 'greenyellow';
    }else{
        document.getElementById('login').style.background = 'red';
    }
   