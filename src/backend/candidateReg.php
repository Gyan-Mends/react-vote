<?php
    // including the access headers
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Method: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");

    //decoding the json data
    $input = file_get_contents("php://input");
    $data = json_decode($input, true);

    // starting session
    session_start();

    // including the database connection
    include("connection.php");

    //accepting the user inputs
    $candidateName=$data["candidateName"];
    $electionId=$data["electionId"];
    $candidateKey=$data["candidateKey"];
    $email=$data["email"];
    $position=$data["position"];
    $image=$data["image"];

    // checking if the election id already exist
    $electionid_select_query = mysqli_query($connection, "SELECT * FROM elections WHERE electionId = '$electionId'");
    if(mysqli_fetch_assoc($electionid_select_query)){
        //checking if  candidate already exist
        $select_query = mysqli_query($connection, "SELECT * FROM candidates WHERE email = '$email'");
        if(mysqli_fetch_assoc($select_query)){
            echo "checkCandidateAlreadyExist";
        }else{
            //inserting data into the database
            $insert_query=mysqli_query($connection, "INSERT INTO candidates ( election_id, name, cadidate_key, email, position, image, date) VALUES ('$electionId', '$candidateName','$candidate_key','$email','$position','$image','$date''')");
            if($insert_query){
                echo 'success';
            }
        }
    }else{
        echo "electionIdNotExist";
    }
   
?>