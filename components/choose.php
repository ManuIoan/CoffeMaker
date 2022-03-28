<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,200&display=swap" rel="stylesheet">
</head>
<body>
    <p class="criteria">Pick the one you want</p>
    <main>
        <form>
        <div class="container">
            <div class="descr">Cafelutzaa</div>
            <img src="../images/img1.jpg" alt="">
            <input type="checkbox" name="check" onclick="onlyOne(this)" value="c1">
            <div class="c1 d">

                <!--
<div class="pot" style="margin-bottom:10px;" ><img src="../images/sugar.png" alt=""><div class="much"><p>How much sugar do you want?</p><div class="ps"><button type="button" onclick="plus()">+</button><div class="adg"><div class="patrat"></div></div><button type="button" onclick="minus()">-</button></div></div> </div><div class="pot" ><img src="../images/milk.png" alt=""><div class="much"><p>How much milk do you want?</p><div class="ps"><button type="button" onclick="plusM()">+</button><div class="adgm"><div class="patrat"></div></div><button type="button" onclick="minusM()">-</button></div></div> </div>

-->
            </div>
            
        </div>
        <hr style="margin-top:20px">
        <div class="container">
            <div class="descr">Cafelutzaa</div>
            <img src="../images/img2.jpg" alt="">
            <input type="checkbox" name="check" onclick="onlyOne(this)" value="c2">
            <div class="c2 d">

            </div>
        </div>
        <hr style="margin-top:20px">
        <div class="container">
            <div class="descr">Cafelutzaa</div>
            <img src="../images/img3.png" alt="">
            <input type="checkbox" name="check" onclick="onlyOne(this)" value="c3">
            <div class="c3 d">

            </div>
        </div>
        <div class="container">
            <input type="button" value="GO" class="subm" onclick="Go()">
        </div>
        

        </form>
        <div class="cart"></div>
    </main>
</body>



</html>
<script src="../js/script.js"></script>