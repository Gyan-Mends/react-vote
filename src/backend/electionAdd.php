<?php
//including the access headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Method: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

//starting session
session_start();

//decoding the json data
$input = file_get_contents("php://input");
$data = json_decode($input, true);

//including the database connection
include("connection.php");

// Extract the values
$tittle = $data["tittle"];
$startDate = $data["startDate"];
$endDate = $data["endDate"];
$electionId = $data["electionId"];
$date = date("Y-m-d");

//checking if user already exists
$select_query = mysqli_query($connection, "SELECT * FROM elections WHERE electionId = '$electionId'");
if ( mysqli_num_rows($select_query) > 0) {
    echo "electionIdAlreadyExist";
} else {
    $election_insert_query = mysqli_query($connection, "INSERT INTO elections (tittle, startDate, endDate, electionId, date) VALUES ('$tittle','$startDate','$endDate','$electionId','$date')");
    if ($election_insert_query) {
        echo "success";
    } else {
        echo "failure";
    }
}
?>
