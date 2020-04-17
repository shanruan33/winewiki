<!DOCTYPE html>
<html>

<head>
    <title>Winewiki Map</title>
    <meta charset="utf-8" />

    <meta name="description" content="This is the map page of wine wiki">
    <meta name="keywords" content="map, wine, grape, vineyard">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="shortcut icon" type="image/png" href="image/logo2.png">
    <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.1/leaflet.css" />
    <link href="https://fonts.googleapis.com/css?family=Philosopher&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="winemap.css" />
    <link rel="stylesheet" href="largehome.css" />
    <link rel="stylesheet" href="search.css" />
    <script type="text/javascript" src="italyRegionJSON.js"></script>
</head>

<?php include("includes/header.php"); ?>

<body>
    <div id="map"></div>

    <section id="featured-wine"></section>

    <script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
    <script src="http://cdn.leafletjs.com/leaflet-0.7.1/leaflet.js"></script>
    <script src="winemap.js"></script>
</body>
<?php include("includes/footer.php"); ?>

</html>