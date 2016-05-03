<?php

	$link = @mysqli_connect("127.0.0.1", "exampleuser", "march005", "exampleDB");

	if (mysqli_connect_error()) {

		die("Could not connect to database!");

	}

	$query = "select * from exampleDB.users";

	if ($results = @mysqli_query($link, $query)) {
		$row = mysqli_fetch_array($results);

		print_r($row);

	} else {
		echo "It failed";
	}


?>