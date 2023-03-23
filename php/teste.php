<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: text/html; charset=utf-8');
$host = "mysql:host=localhost;dbname=login";
$usuario = "root";
$senha = "";
try {
	$conexao = new PDO($host, $usuario, $senha);


	$sql = $conexao->prepare('SELECT * FROM `dados`');

		$sql->execute();

		$dados = "[";

		while($lista = $sql->fetch()){
			if ($dados != "[") {
				$dados .= ",";
			}
			$dados .= '{"codigo": "'.$lista["id"].'",';
			$dados .= '"nomecrianca": "'.$lista["nomecrianca"].'",';
			$dados .= '"data": "'.$lista["data"].'",';
			$dados .= '"nomemae": "'.$lista["nomemae"].'",';
			$dados .= '"nomePai": "'.$lista["nomePai"].'",';
			$dados .= '"email": "'.$lista["email"].'",';
			$dados .= '"senha": "'.$lista["senha"].'"}';
		}
		$dados .= "]";
		echo $dados;



} catch (Exception $ex) {
	echo "erro ao listar: ". $ex->getMessage();
};