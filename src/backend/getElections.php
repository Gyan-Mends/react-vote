<?php
// including the access headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Method: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// starting session
session_start();

// including the database connection
include("connection.php");

// Select all elections from the database
$select_query = mysqli_query($connection, "SELECT * FROM elections");

// Check if the query was successful
if ($select_query ) {
    $elections = [];
    
    // Fetch results as an associative array
    while ($row = mysqli_fetch_assoc($select_query)) {
        // Add each election to the $elections array
        $elections[] = $row;
    }

    // Convert the array to JSON and output
    echo json_encode($elections);
} else {
    // Handle the case where the query fails
    echo json_encode(["error" => "Unable to fetch elections"]);
}
?>
