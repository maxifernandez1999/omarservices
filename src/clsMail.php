<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';

class clsMail{
    private $email = null;
    function __construct(){
        $this->email = new PHPMailer();
        $this->email->isSMTP();
        $this->email->SMTPAuth = true;
        $this->email->SMTPSecure = 'tls';
        $this->email->Host = 'smtp.gmail.com';
        $this->email->Post = 587;

        $this->email->Username = 'fmaximiliano443@gmail.com';
        $this->email->Password = 'bsemwuzmgdywoamc';

    }

    public function Send($name,$email,$subject){
        $this->email->setFrom('fmaximiliano443@gmail.com','titulo');
        $this->email->addAddress($email,$name);
        $this->email->Subject = $subject;
        $this->email->Body = "<h1>Hola ".$name."</h1>";
        $this->email->isHTML(true);
        $this->email->CharSet = 'UTF-8';

        return $this->email->send();
    }

}


