<?php
session_start();
include_once "../conn/connect.php";


$x = mysqli_real_escape_string($conn, $_POST['i']);
$y = mysqli_real_escape_string($conn, $_POST['l']);
$cb = mysqli_real_escape_string($conn, $_POST['cb']);


$sql = mysqli_query($conn, "INSERT INTO persoane(nume, sugar, milk, cb) 
VALUES ({$_SESSION["unique_id"]},{$x}, {$y}, {$cb} )") or die();

echo "succes";



?>