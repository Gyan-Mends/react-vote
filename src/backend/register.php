<?php
//including the access headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin-Method: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

//starting session
session_start();

//decoding the json data
$input = file_get_contents("php://input");
$data = json_decode($data,true);

//including the database connection
include("connection.php");

//acepting user inputs
$name =$data["name"];
$email = $data["email"];
$password = $data["password"];
$number = $data["number"];
$users = $data["users"];

//checking if the user is already registered
$sql = "SELECT * FROM users WHERE email = '$email'";
$result = mysqli_query($conn,$sql) or die("SQL Query Failed.");
if(mysqli_num_rows($result) > 0){
    echo json_encode(array("fl"=>0,"message"=>"User already registered."));
}else{
    //if the user is not registered then register the user
    $sql = "INSERT INTO users (name,email,password) VALUES ('{$data['name']}','{$data['email']}','{$data['password']}')";
    if(mysqli_query($conn,$sql)){
        echo json_encode(array("fl"=>1,"message"=>"User registered successfully."));
    }else{
        echo json_encode(array("fl"=>0,"message"=>"User registration failed."));
    }
}


?>