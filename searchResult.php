<?php 
// searchResult.php

$year = $_GET['year'];
$country = $_GET['country'];
$region = $_GET['region'];
$grape = $_GET['grape'];
$classification = $_GET['classification'];

$keyword;

include("includes/config.php");

$parameter = array($year, $country, $region, $grape, $classification);
$column = array("`year`", "`country`", "`region`", "`grape`"," `classification`");
$stmtArray = array("SELECT * FROM `wine`");
$query;
for($i=0; $i<count($parameter); $i++){
    if($parameter[$i] != "NULL"){   
       //print_r($i);
        $columnName = $column[$i];
        $value = $parameter[$i];
        
        if(count($stmtArray)==1 && $columnName != "`grape`"){
            array_push($stmtArray," WHERE"); 
            array_push($stmtArray,"$columnName =");
            array_push($stmtArray,"'$value'");
          }else if(count($stmtArray)==1 && $columnName = "`grape`"){
            array_push($stmtArray," WHERE"); 
            array_push($stmtArray,"`grape` LIKE ");
            array_push($stmtArray,"'%$value%'");
          }
          else if($columnName="`grape`"){
            array_push($stmtArray," AND"); 
            array_push($stmtArray,"`grape` LIKE ");
            array_push($stmtArray,"'%$value%'");
          }else{
            array_push($stmtArray," AND");
            array_push($stmtArray,"$columnName =");
            array_push($stmtArray,"'$value'");
        };
    };    
};
//print_r($stmtArray);

$query = join(" ",$stmtArray);
//print_r("$query");

$pdo = new PDO($dsn, $dbusername, $dbpassword); 
$stmt = $pdo->prepare("$query"); 
$stmt->execute(); 

$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($result); // convert data to JSON format

echo($json);
