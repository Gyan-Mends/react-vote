<?php
// including the access headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Method: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// starting session
session_start();

// including the database connection
include("connection.php");

// Check if 'id' parameter is set in the GET request
if (isset($_GET['electionId'])) {
    $id = $_GET['electionId'];

    // Select the specific election from the database based on the provided 'id'
    $select_query = mysqli_query($connection, "SELECT * FROM candidates WHERE election_id = '$id'");

    // Check if the query was successful
    if ($select_query && mysqli_num_rows($select_query) > 0) {
        // Fetch the result as an associative array
        $election = mysqli_fetch_assoc($select_query);

        // Convert the array to JSON and output
        echo json_encode($election);
    } else {
        // Handle the case where the query fails or no election with the provided 'id' is found
        echo json_encode(["error" => "Unable to fetch election details"]);
    }
} else {
    // Handle the case where 'id' parameter is not set in the GET request
    echo json_encode(["error" => "Missing 'id' parameter"]);
}
?>
