<?php
if (isset($_POST['userEmail']) && isset($_POST['password'])) {
    $username = $_POST['userEmail'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);

    // Verifica se o arquivo 'users.txt' existe
    if (file_exists('users.txt')) {
        // Lê o conteúdo do arquivo e decodifica como um array JSON
        $users = json_decode(file_get_contents('users.txt'), true);
    } else {
        // Se o arquivo não existir, cria um novo array vazio
        $users = [];
    }

    // Adiciona o novo usuário ao array
    $newUser = ["userEmail" => $username, "password" => $password];
    $users[] = $newUser;

    // Codifica o array como JSON e o escreve de volta no arquivo
    file_put_contents('users.txt', json_encode($users));

    header("Location: login.html");
}
?>
