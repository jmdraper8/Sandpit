<?php

	session_start();

	include("connection.php");

	// print_r($_SESSION);

	$query="UPDATE exampleDB.users SET journal = '".mysqli_real_escape_string($link, $_POST['journal'])."' WHERE id='".$_SESSION['id']."' LIMIT 1";

	mysqli_query($link, $query);

	// print_r($_POST['journal']);

?>

<form method="post">

	<input name="journal" />

	<input type="submit" />


</form>