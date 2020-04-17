<!DOCTYPE HTML>
<html>

<head>
	<title>Profile</title>
	<meta charset="utf-8" />
	<meta name="description" content="This is the home page of wine wiki">
	<meta name="keywords" content="wine, grape, vineyard">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link rel="shortcut icon" type="image/png" href="image/logo2.png">
	<link rel="stylesheet" href="largehome.css" />
	<link href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Kalam&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Philosopher&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="search.css" />

</head>
<?php include("includes/header.php"); ?>

<body id="profile-body">
	<div id="welcome">
		<?php session_start();
		//profile.php
		$username = $_POST['username'];
		$password = $_POST['password'];

		include('includes/config.php');

		$stmt1 = $pdo->prepare("SELECT * FROM `winewikiuser` 
			WHERE `username` = '$username'
			AND `password` = '$password'
			");

		$stmt1->execute();

		$row1 = $stmt1->fetch();

		if ($row1) {
			echo ("<p>Welcome back! You are now logged in.</p>");
			$_SESSION['userId'] = $row1['userId'];
			
			$userId = $row1['userId'];
			echo ("<form>");
			?>
			<input type="hidden" class="wineId" name="<?php echo ($userId); ?>" />
		<?php
			echo ("</form>");
		} else {
			echo ("<p>Login failed! Please confirm your username and passport!</p>");
		};

		?>
	</div>
	<section id="show-wine">
	</section>
	<script src="profile.js"></script>
</body>
<?php include("includes/footer.php"); ?>

</html>