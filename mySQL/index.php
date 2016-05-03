<?php

	@mysqli_connect("127.0.0.1", "exampleuser", "marh005", "exampleDB");

	if (mysqli_connect_error()) {

		die("Could not connect to database!");

	}

	// Nothing happens after the die command


?>