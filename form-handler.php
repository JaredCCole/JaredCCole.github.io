<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

$email_from = 'jccole09@gmail.com';

$email_subject = 'New Form Submission';

$email_body = "User Name: $name.\nUser email: $visitor_email.\nUser Message: $message.\n";

$email_to = 'jccole09@gmail.com';

$headers = "From: $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r\n";

mail($to, $email_subject, $email_body, $headers);

header("location: contact.html")

?>