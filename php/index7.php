<!doctype html>
<html>
<head>
    <title>Example Domain</title>

    <meta charset="utf-8" />
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type="text/css">
    body {
        background-color: #f0f0f2;
        margin: 0;
        padding: 0;
        font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
        
    }
    div {
        width: 600px;
        margin: 5em auto;
        padding: 50px;
        background-color: #fff;
        border-radius: 1em;
    }
    a:link, a:visited {
        color: #38488f;
        text-decoration: none;
    }
    @media (max-width: 700px) {
        body {
            background-color: #fff;
        }
        div {
            width: auto;
            margin: 0 auto;
            border-radius: 0;
            padding: 1em;
        }
    }
    </style>    
</head>

<body>
<div>

    <?php

        $names=array("John", "John Draper", "Draper");

        if($_POST["submit"]) {
            if($_POST["name"]) {
                foreach($names as $name) {
                    if ($_POST["name"] == $name) {
                        echo "I know you! Your Name is ".$name;
                        $knowYou = 1;
                    }
                }

                if(!$knowYou) {
                    echo "I don't know you, ".$_POST['name'];
                }
            } else {
                echo "Please enter your name!";
            }
        }


    ?>

    <form method="post">

        <label for="name">Name: </label>
        <input type="text" name="name" />
        <input type="submit" name="submit" value="Submit Your Name" />

    </form>
  
</div>
</body>
</html>