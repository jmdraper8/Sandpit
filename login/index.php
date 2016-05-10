<? include("login.php"); ?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>My Registration Page</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">


    <style>
      .navbar-brand {
        font-size: 1.8em;
      }

      #topContainer {
        background-image: url("images/landerImage.jpg");
        height: 800px;
        width: 100%;
        background-size: cover;

      }

      #topRow {
        margin-top: 100px;
        text-align: center;
        color: white;
      }

      #topRow h1 {
        font-size: 300%; 

      }

      .bold {
        font-weight:bold;
      }

      .marginTop {
        margin-top: 30px;
      }

      .center {
        text-align: center;
      }

      .title {
        margin-top: 100px;
        font-size: 400%;
      }

      #footer {
        background-color: #B0D1FB;
        padding-top: 70px;
        width: 100%;
      }

      .marginBottom {
        margin-bottom: 30px;
      }

      .appStoreImage {
        width: 250px;
        border-radius: 5px;
      }

      .marginRight {
      	margin-right: 30px;
      }

    </style>

  </head>
  <body>
    <div class="navbar navbar-default navbar-fixed-top">
      <div class="Container">
          <div class="navbar-header">
            <a href="" class="navbar-brand">My Application Launcher</a>
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">

              <span class="sr-only">Toggle Navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
              <li class="active"><a href="#div1">Home</a></li>
              <li><a href="#div2">About</a></li>
              <li><a href="#div3">Download the App</a></li>
            </ul>
            <form class="navbar-form navbar-right" method="post">
              <div class="form-group">
                <input type="email" name="loginemail" class="form-control" placeholder="eMail" value="<?php echo addslashes($_POST['loginemail']); ?>"/>
              </div>
              <div class="form-group">
                <input type="password" name="loginpassword" class="form-control" placeholder="Password" value="<?php echo addslashes($_POST['loginpassword']); ?>"/>
              </div>
              <input type="submit" name="submit" value="Log In" class="btn btn-success marginRight" />
            </form>
          </div>
        </div>
      </div>


      <div class="container contentContainer" id="topContainer">

        <div class="row">
          <div class="col-md-6 col-md-offset-3" id="topRow">
            <h1>Registration Form</h1>

            <p class="lead">This is the registration form, please enter your email and password.</p>

            <?php
              if ($error) {
                echo '<div class="alert alert-danger">'.addslashes($error).'</div>';


              }

              if ($message) {
                echo '<div class="alert alert-success">'.addslashes($message).'</div>';


              }

            ?>

            <form class="marginTop" method="post">
              <div class="input-group">
                <span class="input-group-addon">eMail</span>
                <input type="email" name="email" class="form-control" placeholder="Your email" value="<?php echo addslashes($_POST['email']); ?>"/>
              </div>
              <div class="input-group marginTop">
                <span class="input-group-addon">Password</span>
                <input type="password" name="password" class="form-control" placeholder="Set your password" value="<?php echo addslashes($_POST['password']); ?>"/>
              </div>

                <input type="submit" name="submit" value="Sign Up" class="btn btn-success btn-lg marginTop" /> 

            </form>

          </div>
        </div>
      </div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>

    <script>

      $(".contentContainer").css("min-height", $(window).height());

    </script>
  </body>
</html>

