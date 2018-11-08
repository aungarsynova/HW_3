<?php
$user = "root";
$password = ""; //blank for windows, root for mac
$host = "localhost";
$db = "planets";

$conn = mysqli_connect($host, $user, $password, $db);
mysqli_set_charset($conn, 'utf8');

if (!$conn) {
    echo "connection didn't work...";
    exit;
}

if (isset($_GET["planetName"])) { // check for a parametr ?carModel=R58
    $car = $_GET["planetName"];

    $myQuery = "SELECT * FROM mainplanet WHERE planetName = '$planet'";
    

    $result = mysqli_query($conn, $myQuery);
    $rows = array();

    while($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
}

//send the entire result set as json encoded array
echo json_encode($rows);

?>