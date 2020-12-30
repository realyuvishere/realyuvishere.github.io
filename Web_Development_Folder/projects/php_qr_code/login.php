<?php 
$usr = $_POST['username'];
$pass = $_POST['password'];
if ($usr == "admin" and $pass =="admin") {
    echo '
    <!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="description" content="Registrations for DTU East Campus Freshers@2K19">
	<meta name="keywords" content="Freshers@2K19">
	<meta name="author" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Freshers@2K19 | Register</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet">
	<link rel="stylesheet" href="index.css">
</head>
<body class="bg-dark text-light">
    <center>
        <div class="banner"></div>
        <h1>Welcome to DTU East Campus Freshers@2K19, register yourself here.</h1>
        <div class="banner"></div>
    <form class="col-md-5" method="post" action="form.php">
        <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" name="name" id="name" aria-describedby="name" placeholder="Name" required>
  </div>
        <div class="form-group">
    <label for="class">Class</label>
            <input type="text" class="form-control" name="class" id="class" aria-describedby="class" placeholder="Enter class" required>
  </div>
        <div class="form-group">
    <label for="rollno">Roll number</label>
            <input type="text" class="form-control" name="rollno" id="rollno" aria-describedby="rollno" placeholder="Enter roll number" required>
  </div>
        <div class="form-group">
    <label for="email">Email Address</label>
            <input type="text" class="form-control" name="email" id="email" aria-describedby="email" placeholder="Enter email address" required>
  </div>
  <button type="submit" class="btn btn-outline-secondary btn-lg">Submit</button>
    </form>
    </center>
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>
    ';
} else {
    echo "<div class='alert alert-danger' role='alert'>Credentials wrong! <a href='index.html'>Try again</a></div>";
};
?>