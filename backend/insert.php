<?php

    require ('database.php');

    $title = $_POST["title"];
    $description = $_POST["description"];
    $category = $_POST["category"];
    $cover = $_POST["cover"];
    $classification = $_POST["classification"];

    try{
        $stmt = $conn->prepare("INSERT INTO producoes (titulo, descricao, categoria, capa, classificacao)
    VALUES (:titulo, :descricao, :categoria, :capa, :classificacao)");

        $stmt->bindParam(':titulo', $title);
        $stmt->bindParam(':descricao',  $description);
        $stmt->bindParam(':categoria', $category);
        $stmt->bindParam(':capa', $cover);
        $stmt->bindParam(':classificacao',  $classification);

    $stmt->execute();
    $id = $conn->lastInsertId();

    $result["sucess"]["message"] = "Cadastrado com Sucesso";

    $result["data"]["id"] = "$id";
    $result["data"]["title"] = "$title";
    $result["data"]["description"] = "$description";
    $result["data"]["category"] = "$category";
    $result["data"]["cover"] = "$cover";
    $result["data"]["data"] = "$classification";
    
    header('Content-Type: text/json');
    echo json_encode($result);

    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
?>