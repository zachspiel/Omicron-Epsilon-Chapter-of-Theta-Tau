<?php $name = $_POST['name'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "zachspiel1122@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>