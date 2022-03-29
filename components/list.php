<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CoffeMaker</title>
    <link rel="stylesheet" href="../css/style2.css" >
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,200&display=swap" rel="stylesheet">
</head>
<body>
    <div class="tit">
        Lista
    </div>
<?php
session_start();
include_once "conn/connect.php";
$co = array("Alintaroma", "Espresso", "Cafeluta");


$data2 = date("Y-m-d");
$sql = mysqli_query($conn, "SELECT DISTINCT nume from comanda WHERE data1='{$data2}'");

if (!$sql)
printf("Connect failed: %s\n", mysqli_error($conn));


while($row230=mysqli_fetch_assoc($sql))
    if(!isset($row230['nume']))
    {

    }
    else
    {
      $numele= $row230['nume'];
      echo "<div class='prs'>";
      echo "<p style='margin:0px;'>".$numele."</p>";

      $sql2 = mysqli_query($conn, "SELECT * from comanda WHERE nume='{$numele}' AND data1='{$data2}'");
   
      if (!$sql2 )
      printf("Connect failed: %s\n", mysqli_error($conn));
      while($row2=mysqli_fetch_assoc($sql2))
      {
        
        $type = $row2['cb'];
        $rest = substr($type, -1);
        $rest = intval( $rest );
        echo "<div class='comm'>";
        echo $co[$rest-1]."    ";
        $x = $row2['sugar'];
        $y = $row2['milk'];

        echo "<div class='su'>";
        for($i=0;$i<$x;$i++)
        {
            echo "<img src='../images/sugar.png'>";
        }
        echo "</div>";

        echo "<div class='ml'>";
        for($i=0;$i<$y;$i++)
        {
            echo "<img src='../images/milk.png'>";
        }
        echo "</div>";
        echo "</div>";


        echo "<br>";
      }
      echo "</div>";
      
      
      
      
    }


?>


</body>