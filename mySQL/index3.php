<?php

	$link = @mysqli_connect("127.0.0.1", "exampleuser", "march005", "exampleDB");

	if (mysqli_connect_error()) {

		die("Could not connect to database!");

	}

	//$query = "insert into exampleDB.users (`name`, `email`, `password`) VALUES('Brittany', 'brittany@gmail.com', 'password123')";

	//$query = "UPDATE exampleDB.users SET `email`='johndraper@icloud.com' WHERE `id`='1' LIMIT 1";

	$query = "UPDATE exampleDB.users SET `name`='Brit' WHERE `name`='Brittany'";

	mysqli_query($link, $query);

	$query = "select * from exampleDB.users";

	if ($results = @mysqli_query($link, $query)) {
		$row = mysqli_fetch_array($results);

		print_r($row);

	} else {
		echo "It failed";
	}


?>