<?php

	$myArray=array("pizza", "chocolate", "coffee");

	print_r($myArray);

	echo "<br>";

	echo $myArray[2];

	echo "<br>";

	$myOtherArray[0]="Audi";
	$myOtherArray[1]="BMW";

	echo $myOtherArray[0];

	echo "<br>";

	$thirdArray= array(
		"France" => "French",
		"USA" => "English",
		"Germany" => "German"

	);

	print_r($thirdArray);


	$myOtherArray[]="Salad";

	echo "<br>";
	

	print_r($myOtherArray);

	echo "<br>";

	unset($thirdArray["Germany"]);

	echo "<br>";

	print_r($thirdArray);

	$name = "John";

	echo $name;

	unset($name);

	echo $name;


?>