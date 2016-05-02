<?php
    	$results="";

    	$emailTo="johndraper@icloud.com";
        $subject=$_POST['subject'];
        $body=$_POST['body'];
        $header="From: ".$_POST['from'];

        if(!$_POST['from']) {
        	$error="<br /><b>From Email:</b> Please enter your email address";
        }

        if(!$_POST['body']) {
        	$error.="<br /><b>Comments:</b> Please enter your comment";
        }

        if(!$_POST['subject']) {
        	$error.="<br /><b>Subject:</b> Please enter your subject heading";
        }

        if ($_POST['from']!="" AND !filter_var($_POST['from'], FILTER_VALIDATE_EMAIL)) { 
    		$error.="<br /><b>Subject:</b> Please enter your email address";
		}

        if($error) {
        	$results='<div class="alert alert-danger"><strong>There were error(s) in the form:</strong>'.$error.'</div>';

        } else {

        	if (mail($emailTo, $subject, $body, $header)) {
            	$results = '<div class="alert alert-success">Mail sent successfully!</div>';
            }
        }
        
    ?>


<!doctype html>
<html>
<head>
    <title>My email form</title>

    <meta charset="utf-8" />
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link href="css/bootstrap.min.css" rel="stylesheet">

    <style>

      .navbar-brand {
        font-size: 1.8em;
      }

      #topRow {
        margin-top: 100px;
        text-align: left;
        color: black;
      }

      .emailForm {
      	border: 1px solid grey;
      	border-radius: 10px;
      	margin-top: 20px;
      }

      .marginTop {
        margin-top: 30px;
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

      </style>

</head>

<body>
	<div class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
          <div class="navbar-header">
            <a href="" class="navbar-brand">Email Form</a>
          </div>
        </div>
    </div>

    <div class="container" id="topRow">
    	<div class="row">
    		<div class="col-md-6 col-md-offset-3 emailForm">
				<h1> My Email Form</h1>
				<p class="lead">Please get in touch - I'll get back to you as soon as I can.</p>
				<?php
					echo $results;
				?>

    			<form method="POST">
    				<div class="input-group">
  						<span class="input-group-addon" id="basic-addon1">From: </span>
  						<input name="from" value="<?php echo $_POST['from']; ?>" type="text" class="form-control" placeholder="your@email">
					</div>
					<div class="input-group marginTop">
  						<span class="input-group-addon" id="basic-addon1">Subject: </span>
  						<input name="subject" value="<?php echo $_POST['subject']; ?>" type="text" class="form-control" placeholder="Subject">
					</div>
					<div class="input-group marginTop">
  						<span class="input-group-addon labelTop" id="basic-addon1">Body: </span>
  						<textarea name="body" value="<?php echo $_POST['body']; ?>" type="text" rows="3" class="form-control" placeholder="Body"></textarea>
					</div>
					<input type="submit" class="btn btn-success marginTop marginBottom floatRight" name="submit" value="Send Your Email" />
    			</form>
    		</div>
    	</div>
    	
    </div>
    
</body>
</html>