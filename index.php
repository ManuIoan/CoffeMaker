<?php
session_start();
if(isset($_SESSION["unique_id"]))
header("Location: components/choose.php");
include_once "components/conn/connect.php"
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CoffeMaker</title>
    <link rel="stylesheet" href="css/style.css" >
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,200&display=swap" rel="stylesheet">
</head>
<body>
    <div class="main">
        <form action="" class="frm" method="post" enctype="multipart/form-data" >
           <label class="name">Your name:</label>
           <input type="text" name="txt" id="txt">
           <div class="alert" style="color:red; margin-bottom:15px;">
       
        
        </div>
           <button type="submit" class="subm" value="GO" name="subm" onclick="DoIt()">
           GO
</button>
          
        </form>
        <!-- -->
    </div>
</body>
<script src="js/script2.js"></script>
</html>

<?php







?>
