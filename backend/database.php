<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "bestflix";

// se cria uma variavel ligada ao nome do servidor e se usa ela ao invés do nome do servidor

try {
  $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // echo "Banco Conectado!";
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
?>