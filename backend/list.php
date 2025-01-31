<?php

    require ('database.php');

    try{
        $stmt = $conn->prepare("SELECT id, titulo, categoria, capa FROM producoes;");
        $stmt->execute();

        $producoes = $stmt->fetchALL(PDO::FETCH_ASSOC);
        $result["success"]["message"] = "Produção cadastrada com sucesso!";
        $result["data"] = $producoes;

        header('Content-Type: text/json');
        echo json_encode($result);

        } catch(PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
    }
?>