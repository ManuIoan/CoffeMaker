<?php
session_start();
include_once "../conn/connect.php";


$txt = mysqli_real_escape_string($conn, $_POST['txt']);

if(!empty($txt))
    if(strlen($txt)>=3 && strlen($txt)<=20)
    {
        $_SESSION["unique_id"] = $txt;
        echo "succes";
    } 
    else
     echo "Numele trebuie sa fie intre 3 si 20 de caractere!!!";
     else
     echo "Numele trebuie sa fie intre 3 si 20 de caractere!!!";



?>