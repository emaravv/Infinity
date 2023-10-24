<?php
session_start();

if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
    

    $users = json_decode(file_get_contents('users.txt'), true);

    
    

    foreach ($users as $user) {
        if ($username === $user['username'] && password_verify($password, $user['password'])) {
            $_SESSION['username'] = $username;
            header("Location: success.php");
            exit();
        }
    }

    header("Location: failure.php");
}
