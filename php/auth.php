<?php
session_start();

if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Ler os dados de usuários do arquivo .txt
    $users = file("users.txt", FILE_IGNORE_NEW_LINES);

    foreach ($users as $user_json) {
        $user_data = json_decode($user_json, true);

        if ($username === $user_data['username'] && password_verify($password, $user_data['password'])) {
            $_SESSION['username'] = $username;
            header("Location: success.php");
            exit();
        }
    }

    header("Location: failure.php");
}
?>
