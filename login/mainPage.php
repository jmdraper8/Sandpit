<? 

  session_start();

  include("connection.php");

  $query="SELECT journal FROM exampleDB.users WHERE id='".$_SESSION['id']."' LIMIT 1";

  $result = @mysqli_query($link, $query);

  $row = @mysqli_fetch_array($result);

  $journal = $row['journal'];

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>My Journal</title>

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
          <div class="navbar- pull-left">
            <a href="" class="navbar-brand">My Journal</a>
          </div>
          <div class="pull-right">
            <ul class="nav navbar-nav">
              <li><a href="index.php?logout=1">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>


      <div class="container contentContainer" id="topContainer">

        <div class="row">
          <div class="col-md-6 col-md-offset-3" id="topRow">
            <h1>Enter your thoughts....</h1>

            <textarea class="form-control"><?php echo $journal; ?></textarea>

          </div>
        </div>
      </div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>

    <script>

      $(".contentContainer").css("min-height", $(window).height());

      $("textarea").css("height", $(window).height()-200);

      $("textarea").keyup(function() {
        
        $.post("updateJournal.php", {journal:$("textarea").val()});

      });

    </script>
  </body>
</html>

