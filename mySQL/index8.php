<?php

	setcookie("id", "", time()-3600);

	echo "Cookie is: ".$_COOKIE['id'];

?>