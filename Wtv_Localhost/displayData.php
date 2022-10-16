<?php
   $mysqli = new mysqli('localhost','root','','testbase');
   $array = array();
   if ($mysqli -> connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
    exit();
  }
  if ($result = $mysqli -> query("SELECT * FROM users")) {
    
    $array = $result;
  }
  foreach($array as $val){
    echo $val['ID'];
    echo " ";
    echo $val['Name'];
    echo " ";
    echo $val['Email'];
    echo "<br>";
  }
?>