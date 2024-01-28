<?php
//including the access headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin-Method: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

//starting session
session_start();

//decoding the json data
$input = file_get_contents("php://input");
$data = json_decode($input,true);

//including the database connection
include("connection.php");

//acepting user inputs
$name =$data["username"];
$email = $data["email"];
$password = $data["password"];
$number = $data["number"];
$users = $data["users"];

//checking if the user is already registered
$sql = "SELECT * FROM registeration WHERE email = '$email'";
$result = mysqli_query($connection,$sql) or die("SQL Query Failed.");
if(mysqli_num_rows($result) > 0){
    echo "exist";
}else{
    //if the user is not registered then register the user
    $sql = "INSERT INTO registeration (name,email,password,number,users) VALUES ('$name','$email','$password','$number', '$users')";
        $query = mysqli_query($connection,$sql);
    if($query){
        echo "notexist";

        //inserting the email into the login
        $sql = "INSERT INTO logins (email,password,role) VALUES ('$email','$password','Admin')";
        $query = mysqli_query($connection,$sql);
    }else{
        echo "opps";
    }
}


?>