<?php

        
?>


<!doctype html>
<html>
<head>
    <title>My email form</title>

    <meta charset="utf-8" />
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">

    <style>

    html, body {
      height: 100%;
      font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", san    s-serif; 
    }

    .mainBody {
      background-image: url("images/cloudyBeach.jpeg");
      width: 100%;
      height: 100%;
      background-size:cover;
      background-position: center;
    }

    .navbar-brand {
      font-size: 1.8em;
    }

    #topRow {
      margin-top: 100px;
      text-align: left;
      color: white;
    }

    #topAlert {
      margin-top: 15px;
    }

    .emailForm {
    	border: 1px solid grey;
    	border-radius: 10px;
    	margin-top: 20px;
    }

      .marginTop {
        margin-top: 250px;
      }

      .marginBottom {
        margin-bottom: 30px;
      }

      .floatRight {
      	float: right;
      }

      .labelTop {
      	vertical-align: top;
      	padding-top: 10px;
      }

      .center {
        text-align: center;
      }

      .white {
        color: white;
      }

      p {
        padding-top: 10px;
        padding-bottom: 10px;
      }

      button {
        margin-top: 10px;
      }

      .alert {

        margin-top: 20px;
        display: none;

      }

      </style>

</head>

<body>
	<div class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
          <div class="navbar-header">
            <a href="" class="navbar-brand">My Weather Page</a>
          </div>
        </div>
    </div>

    <div class="container mainBody">
    	<div class="row">
    		<div class="col-md-6 col-md-offset-3 center">
          <h1 class="center marginTop white">My Weather Zones</h1>

          <p class="lead center white">Enter you city below to get a forcast for the weather.</p>

          <form>
            <div class="form-group">
              <input type="text" class="form-control" name="city" id="city" placeholder="Eg. London, Melbourne, New York"/>
            </div> 
              <button class="btn btn-success btn-large" id="findMyWeather">Find My Weather</button>
          </form> 

          <div id="alertSuccess" class="alert alert-success"></div>
          <div id="alertFail" class="alert alert-danger">Alert: The city name you have entered is invalid!</div>
				
    		</div>

    	</div>
    	
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>

      

    <script>



      $("#findMyWeather").click(function() {
        event.preventDefault();
        $("#alertSuccess").hide();
        $("#alertFail").hide();

        if ($("#city").val() != "")  {

          $weatherData = "";

          $.get("scrapper.php?city="+$("#city").val(), function( data ) {

            if(data=="") {
              $("#alertFail").fadeIn();
            } else {
              $("#alertSuccess").html(data).fadeIn();
            }

          });

        } else {
          $("#alertFail").html("Alert: Please enter a city name!").fadeIn();
        }
      });

    </script

    
</body>
</html>