<?php
$GLOBALS["adress"] = "127.0.0.1";
$GLOBALS["username"] = "web_pruvodcefpe_user";
$GLOBALS["pw"] = "x(-qE%0I)y,19Z1yd(5S";
$GLOBALS["db"] = "web_pruvodcefpe_db";


/* Registrace stylu a scriptu */
function ba_wp_scripts(){
    wp_enqueue_style("style1",get_stylesheet_uri());
	//wp_enqueue_style("style1",get_stylesheet_uri());https://developer.wordpress.org/reference/functions/get_template_directory_uri/
}

add_action("wp_enqueue_scripts","ba_wp_scripts");

/* Registrace menu */
register_nav_menu("main",_("Main Menu","theme-slug"));

function getQuestions(){
    
    $conn = mysqli_connect($GLOBALS["adress"],$GLOBALS["username"], $GLOBALS["pw"],$GLOBALS["db"]);  
    if (!$conn) {  
            die(mysqli_connect_error());  
    }   
    mysqli_query($conn,"SET NAMES utf8");
    $query = "SELECT * FROM `questions`";
    if($dbVysl = mysqli_query($conn,$query)){
		
 		echo "<table>";
        foreach($dbVysl as $vysl){
            echo getQuestionLine($vysl);
        }
		echo "</table>";
    }
    mysqli_close($conn);
}



function getQuestionLine($vysl){ 
    
    $vrat =  "<tr>"."<td> <a href = https://pruvodce.fpe.zcu.cz/hlavni-stranka/forum-2/otazka/?otazka=".$vysl["ID"].">".$vysl["Question"]."</td><td> ".$vysl["Author"]."</td></tr>";
    return $vrat;
}

function getAnsw($answID){
    $conn = mysqli_connect($GLOBALS["adress"],$GLOBALS["username"], $GLOBALS["pw"],$GLOBALS["db"]);  
    if (!$conn) {  
            die(mysqli_connect_error());  
    }   
    mysqli_query($conn,"SET NAMES utf8");
    $query = " SELECT * FROM answer WHERE QID = $answID";
    if($dbVysl = mysqli_query($conn,$query)){ 
        echo getSingleQuestion($answID);
		echo "<table>";
        foreach($dbVysl as $vysl){
            echo getAnswLine($vysl);
        }
		echo "</table>";
    }
    mysqli_close($conn);
}

function getSingleQuestion($ID){
    $conn = mysqli_connect($GLOBALS["adress"],$GLOBALS["username"], $GLOBALS["pw"],$GLOBALS["db"]);  
    if (!$conn) {  
            die(mysqli_connect_error());  
    } 
    mysqli_query($conn,"SET NAMES utf8");
    $answQuery = "SELECT * FROM questions WHERE ID = $ID";
    $question = "omlouváme se ale otázku jsme nenašli"."<br>";
    if($dbQuesVysl = mysqli_query($conn,$answQuery)){
        foreach($dbQuesVysl as $vysl){
            $question = $vysl["Question"]."<br>";
        }
    }
    mysqli_close($conn);
    return "<h3>".$question."</h3>";
}

function postAnsw($answ,$QID){
    $conn = mysqli_connect($GLOBALS["adress"],$GLOBALS["username"], $GLOBALS["pw"],$GLOBALS["db"]);  
    if (!$conn) {  
            die(mysqli_connect_error());  
    } 
    $date = date("Y-m-d");
	//$answ = filter_var($answ ,FILTER_SANITIZE_SPECIAL_CHARS); 
    htmlspecialchars($answ);
    if(!empty($answ)){
    $sql = "INSERT INTO `answer` (`QID`, `Text`, `Author`,`Upvotes`, `Date`) VALUES ('$QID','$answ','Anonym',0,'$date')";
    $query = mysqli_query($conn,$sql);
    if(!$query){
        echo "<br> prosím nepoužívejte emojis a podobné znaky";
    }
    }
}

function getAnswLine($vysl){
    $vrat =  "<tr>"."<td>".$vysl["Text"]."</td><td> ".$vysl["Author"]."</td></tr>";
    return $vrat;
}

