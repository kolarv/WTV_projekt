<?php
$adress = "sql6.webzdarma.cz";
$username = "wtvtestwzsk9686";
$pw = "Ciscodisco_123";
$db = "wtvtestwzsk9686";
$questionShow = 25;
$answShow = 50;

function getAnsw($answID){
    $conn = mysqli_connect($GLOBALS["adress"],$GLOBALS["username"], $GLOBALS["pw"],$GLOBALS["db"]);  
    if (!$conn) {  
            die(mysqli_connect_error());  
    }   
    $query = "SELECT * FROM answer WHERE QID = $answID";
    if($dbVysl = mysqli_query($conn,$query)){
        foreach($dbVysl as $vysl){
            echo getAnswLine($vysl);
        }
    }
    mysqli_close($conn);
}

function getQuestions(){
    $conn = mysqli_connect($GLOBALS["adress"],$GLOBALS["username"], $GLOBALS["pw"],$GLOBALS["db"]);  
    if (!$conn) {  
            die(mysqli_connect_error());  
    }   
    $query = "SELECT * FROM `questions`";
    if($dbVysl = mysqli_query($conn,$query)){
        foreach($dbVysl as $vysl){
            echo getQuestionLine($vysl);
        }
    }
    mysqli_close($conn);
}

function postQuestion($question){
    $conn = mysqli_connect($GLOBALS["adress"],$GLOBALS["username"], $GLOBALS["pw"],$GLOBALS["db"]);  
    if (!$conn) {  
            die(mysqli_connect_error());  
    } 
    $date = date("Y-m-d");
    $sql = "INSERT INTO `questions` (`Question`, `Date`, `Author`, `Upvotes`) VALUES ('$question','$date','Anonym',0)";
    $query = mysqli_query($conn,$sql);
    if(!$query){
        echo "chyba vkládání dotazu";
    }
}

function postAnsw($answ,$QID){
    $conn = mysqli_connect($GLOBALS["adress"],$GLOBALS["username"], $GLOBALS["pw"],$GLOBALS["db"]);  
    if (!$conn) {  
            die(mysqli_connect_error());  
    } 
    $date = date("Y-m-d");
    $sql = "INSERT INTO `answer` (`QID`, `Text`, `Author`,`Upvotes`, `Date`) VALUES ('$QID','$answ','Anonym',0,'$date')";
    $query = mysqli_query($conn,$sql);
    if(!$query){
        echo "chyba vkládání dotazu";
    }
}

function getQuestionLine($vysl){ 
    $vrat =  "<tr>"."<td><a href = Question.php?otazka=".$vysl["ID"].">".$vysl["Question"]."</td></tr>";//<td> ".$vysl["Author"]."</td>
    return $vrat;
}

function getAnswLine($vysl){
    $vrat =  "<tr>"."<td>".$vysl["Text"]."</td></tr>";//<td> ".$vysl["Author"]."</td>
    return $vrat;
}

?>