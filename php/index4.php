<?php
	/*
	for ($i = 1000; $i >=100; $i=$i-10) {
		echo $i."<br>";
	}
	*/

	$myArray = array("Audi", "BMW", "Alfa", "Mercedes");

	foreach ($myArray as $key => $value) {
		echo $key." -> ".$value."<br>";
	}

	$i=1;

	while ($myArray[$i]) {

		echo "Key: $i Value: ".$myArray[$i]."<br>";

		$i++;
	}



?>