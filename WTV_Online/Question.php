<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<a href="index.php">
    <button>Zpět na hlavní stránku</button>
  </a> 


<form method="post">
    <input type="text" name="answ" id="answ" required >
    <input type="submit" name="submit" id="submit">
    </form>
    <br>
    <table>
<?php
include "Backend.php";

if(isset($_POST["submit"])) {
    postAnsw($_POST["answ"],$_GET['otazka']);
    //header("http://wtvtest.wz.sk/");
}

getAnsw($_GET['otazka']);
?>
</table>

</body>
</html>


