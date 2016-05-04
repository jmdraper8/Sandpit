<?php

	setcookie("id", "1234", time()+15*60);

	echo "Cookie is: ".$_COOKIE['id'];


?>