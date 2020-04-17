<!DOCTYPE HTML>
<html>

<head>
    <title>Search Wines</title>
    <meta charset="utf-8" />
    <meta name="description" content="This is the search page of wine wiki">
    <meta name="keywords" content="wine, grape, vineyard">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="shortcut icon" type="image/png" href="image/logo2.png">
    <link rel="stylesheet" href="search.css" />
    <link rel="stylesheet" href="largehome.css" />
    <!-- <link rel="stylesheet" media="screen and (min-width: 1080px)" href="largesearch.css" />
        <link rel="stylesheet" media="screen and (max-width: 1079px)" href="mediumsearch.css" />
        <link rel="stylesheet" media="screen and (max-width: 750px)" href="smallsearch.css" /> -->
    <link href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Kalam&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Philosopher&display=swap" rel="stylesheet">
    <script src="countryregionjson.js" type="text/javascript"></script>
</head>

<body id="search-page">
    <?php include("includes/header.php"); ?>
    <article id="search-body">

        <section id="filter">
            <form>
                Please select your criteria:<br>
                <label>Year</label>
                <select id="year">
                    <option value="NULL">Select a year</option>
                </select><br>
                <label>Country</label>
                <select id="country">
                    <option value="NULL">Select a country</option>
                </select><br>
                <label>Region</label>
                <select id="region">
                    <option value="NULL">Select a region</option>
                </select><br>
                <label>Grape</label>
                <select id="grape">
                    <option value="NULL">Select a grape</option>
                </select><br>
                <!-- <label>Type</label>
            <br>
            White<input name="type" type="radio" value="1" />
            Red<input name="type" type="radio" value="2" />
            Rose<input name="type" type="radio" value="3" />
            Sparkling<input name="type" type="radio" value="4" />
            Desert<input name="type" type="radio" value="5" />
            <br> -->
                <label>Classification</label>
                <select id="classification">
                    <option value="NULL">N/A</option>
                    <option value="AOC">AOC</option>
                    <option value="DOC">DOC</option>
                    <option value="DOCG">DOCG</option>
                </select><br>
                <label id="searchbtn">Search</label>


            </form>
        </section>
        <section id="searchResult"></section>


        <!-- structure of flip card
        <div class="container">
        <div class="card" onclick="flip(e)">
          <div class="front">
            <h1>This is the front</h1>
            <p> Here is some additional text</p>
          </div>
          <div class="back">
            <h1>This is the back</h1>
          </div>
        </div>
      </div> -->


    </article>
    <script src="search.js" type="text/javascript"></script>

</body>
<?php include("includes/footer.php");?>

</html>