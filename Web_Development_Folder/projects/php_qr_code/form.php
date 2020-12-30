<?php
#$name = $email = $rollno = $class = '';
$name = $_POST["name"];
$email = $_POST["email"];
$rollno = $_POST["rollno"];
$class = $_POST["class"];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = test_input($_POST["name"]);
    $email = test_input($_POST["email"]);
    $rollno = test_input($_POST["rollno"]);
    $class = test_input($_POST["class"]);
};
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
};
if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
    header('Location: error.html');
}else{
    $file_open = fopen("data.csv", "a");
$no_rows = count(file("data.csv"));
if($no_rows > 1){
    $no_rows = ($no_rows - 1) + 1;
}
$form_data = array(
    'sr_no'  => $no_rows,
    'name'  => $name,
    'email'  => $email,
    'rollno' => $rollno,
    'class' => $class
);
fputcsv($file_open, $form_data);
include 'phpqrcode/qrlib.php';
$identity = $name." ".$class." ".$rollno;
$fileExt = 'images/';
$fileName = '005_file_'.md5($identity).'.png';
QRcode::png($identity, $fileExt.$fileName);
echo '<center><img src="'.$fileExt.$fileName.'" /><br><div style="font-family: sans-serif, Verdana;">Please screenshot this code for reference.<br>You are expected the confirmation mail to the email address you have provided here, make sure you entered the correct credentials.<br>Cross - check your credentials here and contact the team in case there are any issues.<ul style="list-style-type: none;padding:0;"><li>'.$name.'</li><li>'.$class.'</li><li>'.$rollno.'</li><li>'.$email.'</li></ul></div></center>';
$code = 'https://thethrivemag.com/login/'.$fileExt.$fileName;
$email_sub = "You have been registered!";
$email_bod = "Welcome ".$name.", you have successfully registered for Freshers@2K19. Please confirm your credentials and show them at the day of the event along with the QR Code. \r\n"."\r\n"."Your name: ".$name."\r\n"."Your Class: ".$class."\r\n"."Your roll number: ".$rollno."\r\n"."Your email address: ".$email."\r\n"."Link to your QR code: ".$code;
mail($email, $email_sub, $email_bod);
}
?>