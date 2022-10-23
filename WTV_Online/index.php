<!DOCTYPE html>
<html lang="cs">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" context="width=device-width, initial-scale=1.0">
        <title>registration form</title>
    </head>

<body>

    <form method="post">
    <input type="text" name="question" id="question" required >
    <input type="submit" name="submit" id="submit">
    </form>
    <table>
    <?php
    include "Backend.php";

    
    if(isset($_POST["submit"])) {
        postQuestion($_POST["question"]);
        header("http://localhost/testtets/index.php");
    }
    getQuestions();
    ?>
</table>
</body>
</html>
    