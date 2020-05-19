<?php
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];
$me = "billiondollarone07@gmail.com";
$subject = "A new message from ".$name;
function IsInjected($str) {
    $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
};
if(IsInjected($email)) {
    echo "Bad email value!";
    exit;
};

mail($me,$subject,"The message says - \r\n".$message."\r\n"."\r\n"."Reply back to ".$email);
header('Location: ../thanks.html');
?>