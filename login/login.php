<?php

	session_start();

	include("connection.php");

	if ($_POST['submit']=="Sign Up") {

		if (!$_POST['email']) $error.="<br />Please enter your email";
			else if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) $error.="<br />Please enter a valid email address";

		if (!$_POST['password']) $error.="<br />Please enter your password";
			else {
	
				if(strlen($_POST['password']) < 8 ) $error.="<br />Please enter a password with at least 8 characters";
				if(!preg_match('`[A-Z]`', $_POST['password'])) $error.="<br />Please include at least one capital letter in your password";

			}

		if($error) echo "There were error(s) in your signup details:".$error;
			else {

				$query = "SELECT * FROM exampleDB.users WHERE email = '".@mysqli_real_escape_string($link, $_POST['email'])."'";

				$results = mysqli_query($link, $query);

				$results = mysqli_num_rows($results);

				if ($results) echo "That email is already registered. Do you want to log in?";
					else {

						$query = "INSERT INTO exampleDB.users (email, password) VALUES('".mysqli_real_escape_string($link, $_POST['email'])."', '".md5(md5($_POST['email']).$_POST['password'])."')";
						
						mysqli_query($link, $query);

						echo "You have been signed up!";

						$_SESSION['id']=mysqli_insert_id($link);

						print_r($_SESSION);

						// Redirect to logged in page
					}


			}
	}

	if ($_POST['submit']=="Log In") {

		if (!$_POST['loginemail']) $error.="<br />Please enter your email";
			else if (!filter_var($_POST['loginemail'], FILTER_VALIDATE_EMAIL)) $error.="<br />Please enter a valid email address";

		if($error) echo "There were error(s) in your signup details:".$error;
			else {

				$query = "SELECT * FROM exampleDB.users WHERE email = '".@mysqli_real_escape_string($link, $_POST['loginemail'])."' AND password='".md5(md5($_POST['loginemail']).$_POST['loginpassword'])."' LIMIT 1";

				$result = mysqli_query($link, $query);

				$row = mysqli_fetch_array($result);

				// echo $_POST['loginemail'];

				// print_r($row);

				if ($row) {

					$_SESSION['id']=$row['id'];

					print_r($row);

					echo "You are now logged in!";

					// Redirect to logged in page
				} else {

					echo " We could not find a user with that email or password. Please try again!";
				}		

			}
	}

?>