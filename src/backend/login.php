<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Method: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

//starting session
session_start();

$input = file_get_contents("php://input");
$data = json_decode($input, true);


//including the database connection
include("connection.php");

//storing input data in a variable
$username= $data['username'];
$password = $data["password"];
$role = $data["role"];



//checking if user logins matches the one in the database
$user_select_query = mysqli_query($connection,"SELECT * FROM `logins` WHERE `email` ='$username' AND `password` = '$password' AND `role` = '$role'");

//checking if the username and the password are on the same row
$user_row = mysqli_fetch_array($user_select_query);

if(is_array($user_row)){
    $_SESSION["username"] = $user_row["email"];
}

if(isset($user_row["email"]) && $user_row["role"] === "Admin"){
   echo "admin";
}elseif(isset($user_row["email"]) && $user_row["role"] === "Voter"){
    echo "voter";
}elseif(isset($user_row["email"]) && $user_row["role"] === "Candidate"){
    echo "candidate";
}else {
    echo"failed";
}
?>