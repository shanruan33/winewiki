<?php session_start();


// // count the number of likes
// $wineId = $_SESSION['wineId'];

include("includes/config.php");
$stmt = $pdo->prepare("SELECT COUNT(*) AS `count` FROM `wine-user` WHERE `wineId` = '$wineId' AND `status` = 'like';");
$stmt->execute();
$row = $stmt->fetch();
$count = $row['count'];
echo ($row['count']);
echo ($wineId);
?>
<?php

$stmt2  = $pdo->prepare("UPDATE `wine` SET `likes` = '$count' WHERE `wine`.`wineId` = '$wineId';");
$stmt2->execute();




?>