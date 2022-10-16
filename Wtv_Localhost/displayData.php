<?php
$conn=mysqli_connect('localhost','root','','testbase');
    $query = "SELECT * FROM `users`;";
    $result = $conn->query($query);
    
    
    if ($result->num_rows > 0) 
    {
        while($row = $result->fetch_assoc())
        {
            echo
                $row["ID"]. "  Name: " .
                $row["Name"]. "  Email: " . 
                $row["Email"]."<br>";
        }
         echo '<button type="button" onclick="alertuj()">Click Me!</button> <br> <script>
        function alertuj(){
        alert("test");
        } </script>';
    } 
    else {
        echo "0 results";
    }
  
   $conn->close();
?>