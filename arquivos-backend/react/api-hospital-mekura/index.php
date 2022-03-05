<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: *");
    
    include("DbConnect.php");
    $conn = new DbConnect();
    $db = $conn->connect();
    $method = $_SERVER['REQUEST_METHOD'];
    switch($method) {
        case 'POST':
            $cadastro = json_decode(file_get_contents('php://input'));
            $sql = "INSERT INTO tb_cadastro(id, nome, cpf, data, especialidade, descricao, status, criacao) values(null, :nome, :cpf, :data, :especialidade, :descricao, 'Em análise', :criacao)";
            $stmt = $db->prepare($sql);
            $date = date('Y-m-d H:i:s');
            $stmt->bindParam(':nome', $cadastro->nome);
            $stmt->bindParam(':cpf', $cadastro->cpf);
            $stmt->bindParam(':data', $cadastro->data);
            $stmt->bindParam(':especialidade', $cadastro->especialidade);
            $stmt->bindParam(':descricao', $cadastro->descricao);
            $stmt->bindParam(':criacao', $date);
            if($stmt->execute()) {
                $data = ['status' => 1, 'message' => "Cadastrado com sucesso. Acompanhe sua solicitação na página de acompanhamento!"];
            } else {
                $data = ['status' => 0, 'message' => "Houve erro no cadastro. Por favor, cheque suas informações!"];
            }
            echo json_encode($data);
            break;
        case 'GET':
            $dia = $_GET['dia'];
            $cpf = $_GET['cpf'];
            $sql = "SELECT * FROM tb_cadastro WHERE cpf = '$cpf' AND data = '$dia'";
            $stmt = $db->prepare($sql);
            $stmt->execute();
            $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($data);
            break;
}





?>
