<?php session_start();
//showFeaturedWine.php

$country = $_GET['country'];


include("includes/config.php");

$pdo = new PDO($dsn, $dbusername, $dbpassword); 
$stmt = $pdo->prepare("SELECT * FROM `wine`
                       WHERE `country` = '$country' AND `feature` = 'Featured';"); 
$stmt->execute(); 

$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($result); // convert data to JSON format

echo($json);


?>