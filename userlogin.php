<!DOCTYPE HTML>
<html>

<head>
	<title>User Login</title>
	<meta charset="utf-8" />
	<meta name="description" content="Winewiki user information">
	<meta name="keywords" content="wine, user">
	<link href="https://fonts.googleapis.com/css?family=Philosopher&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="largehome.css" />
	<link rel="shortcut icon" type="image/png" href="image/logo2.png">
</head>

<?php include("includes/header.php"); ?>

<body>
	<h1>Please login here:</h1>
	
	<form action="profile.php" method="POST">
		Username<input name="username" type="input" value="" /><br>
		Password<input name="password" type="password" /><br>

		<input type="submit" value="Submit"/>

	</form>
</body>
<?php include("includes/footer.php"); ?>

</html>