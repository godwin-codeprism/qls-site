<?php
     use PHPMailer\PHPMailer\PHPMailer;
     use PHPMailer\PHPMailer\SMTP;
     use PHPMailer\PHPMailer\Exception;
     
     require("./vendor/phpmailer/phpmailer/src/PHPMailer.php");
     require("./vendor/phpmailer/phpmailer/src/SMTP.php");
     require("./vendor/phpmailer/phpmailer/src/Exception.php");
   
    $data = json_decode(file_get_contents("php://input"));
    $currentTime = number_format(microtime(true)*1000,0,'.','');
    function parseTime($sec){
        $seconds = $sec / 1000;
        return date("M d Y H:i:s", $seconds);
    }

    $fullname = $data -> fullname;
    $email = $data -> email;
    $mobile = $data -> mobile;
    $courseInterested = $data -> courseInterested;
    $message = $data -> message;
    // $fullname = "Godwin";
    // $email = "alfa.godwin.omega@gmail.com";
    // $mobile = "9704323232";
    // $courseInterested = "HTML";
    // $message = "Hard Coded Data";

    $Email = new PHPMailer;

    // $Email -> isSMTP();

    $Email -> SMTPAuth = false;

    // $Email -> SMTPDebug = 2;

    $Email -> Host = 'localhost';

    $Email -> Username = 'info@quicklearnsys.com';

    $Email -> Password = 'ql$12345';

    // $Email -> SMTPSecure = 'STARTTLS';

    $Email -> Port = '25';


    $Email -> From = "info@quicklearnsys.com";

    $Email -> FromName = "QuickLearn Systems";

    $Email -> addReplyTo('info@quicklearnsys.com','Reply Address');

    $Email -> addAddress ('info@quicklearnsys.com','QuickLearn Systems');


    $Email -> Subject = "QuickLearn Systems || New Message";

    $Email -> Body = "<div style='width: 100%;height: 100%;background-image: url(https://quicklearnsys.com/_/images/header_image.png);background-size: cover;margin:0px;padding:0px;'><div style='width: 100%;height: 100%; background-color: rgba(0, 0, 0, 0.4); background-image: url(https://quicklearnsys.com/_/images/logo.png);background-repeat: no-repeat;background-position: 5% 5%; background-size: 8%;padding: 8% 0%;margin: auto;display: flex;justify-content: center;align-items: center;'><p style='font-family: calibri;font-size: 12vh;text-align:center;margin: 0px;text-transform: uppercase;color: white;border: 5px solid white;padding: 2% 3%;'>We have a Message!</p></div></div><div style='background-color: white;width: 100%;height: 100%;box-shadow: 0 -25px 40px 0 rgba(0,0,0,.12);margin-top: -16px;display: flex;justify-content: center;align-items: center;'><div style='width: 90%;height: 90%;box-shadow: -1px 3px 4px rgba(0,0,0,0.22);background-color: #f2f2f2;padding: 1%;margin-top: 2%;font-family: calibri;border: 2px solid white;border-radius: 4px;font-size: 1.1em;'><p>From,</p><p><strong>Name: </strong>".$fullname."</p><p><strong>Email: </strong><a href='".$email."'>".$email."</a></p><p><strong>Mobile Number: </strong>".$mobile."</p><p><strong>Course Interested: </strong>".$courseInterested."</p><p><strong>Message: </strong>".$message.".</p></div></div>";

    $Email -> AltBody = "Name: </strong>".$fullname."</p><p><strong>Email: </strong><a href='".$email."'>".$email."</a></p><p><strong>Mobile Number: </strong>".$mobile."</p><p><strong>Course Interested: </strong>".$courseInterested."</p><p><strong>Message: </strong>".$message;

    // echo !extension_loaded('openssl')?"Not Available <br/>":"Available <br/>";

    if($Email->send()){
        echo 'ok';
    }else{
        echo $Email->ErrorInfo;
    }       
?>