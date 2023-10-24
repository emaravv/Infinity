<!DOCTYPE html>
<html>
<head>
    <title>Sucesso</title>
</head>
<body>
    <h2>Login bem-sucedido</h2>
    <p>Bem-vindo, <?php echo $_SESSION['userEmail']; ?></p>
    <a href="logout.php">Sair</a>
</body>
</html>
