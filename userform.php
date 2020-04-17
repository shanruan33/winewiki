<?php ?>
<!DOCTYPE HTML>
<html>

<head>
	<title>User Form</title>
	<meta charset="utf-8" />
	<meta name="description" content="Winewiki user information">
	<meta name="keywords" content="wine, user">
	<link href="https://fonts.googleapis.com/css?family=Philosopher&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="largehome.css" />
	<link rel="shortcut icon" type="image/png" href="image/logo2.png">


</head>
<?php include("includes/header.php"); ?>

<body>
	<h1>Welcome to Wine Wiki!</h1>
	<p>Doesn't have an account? Create here:</p>
	<form action="process-userform.php" method="POST">
		Username<input name="username" type="text" /><br>
		Password<input name="password" type="password" /><br>
		Email<input name="email" type="email" /><br>


		<input type="submit"  value="Submit"/>
	</form>
	<p>Have an account? <a href="userlogin.php">Login here</a></p>
</body>
<?php include("includes/footer.php"); ?>

</html>