<!DOCTYPE HTML>
<html>

<head>
    <title>Wine Wiki Home</title>
    <meta charset="utf-8" />
    <meta name="description" content="This is the home page of wine wiki">
    <meta name="keywords" content="wine, grape, vineyard">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="shortcut icon" type="image/png" href="image/logo2.png">
    <link rel="stylesheet" media="screen and (min-width: 1080px)" href="largehome.css" />
    <link rel="stylesheet" media="screen and (max-width: 1079px)" href="mediumhome.css" />
    <link rel="stylesheet" media="screen and (max-width: 750px)" href="smallhome.css" />
    <link href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Kalam&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Philosopher&display=swap" rel="stylesheet">

    <script src="https://zimjs.org/cdn/1.2.3/createjs_min.js"></script>
    <script src="https://zimjs.org/cdn/10.6.1/zim.js"></script>
    <meta name="viewport" content="width=device-width, user-scalable=no" />
</head>
<?php include("includes/header.php"); ?>

<body>
    <section>
        <div id="slider">
            <img src="image/newwines.png" class="item-1 pic1" />
            <p class="item-1 text1">600 new wines are released on average everyday.</p>
            <img src="image/grapevariety.png" class="item-2 pic2" />
            <p class="item-2 text2">There are over 1300 varieties of wine grapes used in commercial wine production.</p>
            <img src="image/1000region.png" class="item-3 pic3" />
            <p class="item-3 text3">Thousands of wine regions have their unique wines.</p>
        </div>

    </section>

    <div class="earth">
        <div id="holder"></div>
        <img src="image/earth-shadow.png" id="earth-shadow" />
    </div>
    <form class="search-input" action="search.php">
        <input type="text" placeholder="Search wines.." name="search" class="search-field" />&nbsp;
        <button type="submit" class="search-button">
            <svg class="search-icon" focusable="false" viewbox="-1 -1 22 22">
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
        </button>
    </form>
    <div>
        <img src="image/triangle.png" id="triangle" />
        <form action="userform.php" class="login-signup">
            <p class="login-signup p">&nbsp;&nbsp;&nbsp;&nbsp;Everything you need<br>for <b>choosing a wine</b><br>is here.</p>
            <button type="submit" class="login-signup button">Login / Sign Up</button>
        </form>
    </div>

    <script src="home.js?id=1"  type="text/javascript"></script>

</body>







</html>