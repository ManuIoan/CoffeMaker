<?php
session_start();
include_once "../conn/connect.php";


$x = mysqli_real_escape_string($conn, $_POST['x']);
$y = mysqli_real_escape_string($conn, $_POST['y']);
$cb = mysqli_real_escape_string($conn, $_POST['cb']);

$nume = $_SESSION["unique_id"];
$sql = mysqli_query($conn, "INSERT INTO comanda(nume, sugar, milk, cb) 
VALUES ('{$nume}','{$x}', '{$y}', '{$cb}' )") ;

if($sql)
{}
else

          printf("Connect failed: %s\n", mysqli_error($conn));



echo "succes";



?>