<?php session_start();
//showLikedWine.php

$userId = $_GET['userId'];


include("includes/config.php");

$pdo = new PDO($dsn, $dbusername, $dbpassword); 
$stmt = $pdo->prepare("SELECT * FROM `wine-user` 
                        RIGHT JOIN `wine`
                        ON `wine-user`.`wineId` = `wine`.`wineId` WHERE `userId` = '$userId' AND `status` = 'like';"); 
$stmt->execute(); 

$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($result); // convert data to JSON format

echo($json);


?>