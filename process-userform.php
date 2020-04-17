<?php
//process-userform.php

$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];


include("includes/config.php");


$stmt = $pdo->prepare("INSERT INTO `winewikiuser` 
	(`userId`, `username`, `email`, `password`) 
    VALUES (NULL, '$username', '$email', '$password');");


$stmt->execute();

include("includes/header.php");
echo ("Thank you! We've received your information.");

?>

<p>Go to: <a href="profile.php">here</a></p>