<?php
	
	/* input variables */

	$name = $_POST['name'];
	$visitor_email = $_POST['email'];
	$email_subject = $_POST['subject'];
	$message = $_POST['message'];

	/* variables */
	$email_from = 'Kayle.Drucker@gmail.com';
	$to = 'Kayle.Drucker@gmail.com';
	$email_body = "You have received a new message from: \n 
	Name: $name\n
	Email: $visitor_email\n\n
	Message:\n
	$message";

	$headers = "From: $email_from \r\n";
	$headers .= "Reply-To: $visitor_email \r\n";

	mail($to,$email_subject,$email_body,$headers);


?>