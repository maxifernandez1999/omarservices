<?php
require "../src/clsMail.php";
    // $destination = 'fmaximiliano443@gmail.com';
    $dataSend = NoNull('json_data') == true ? $_POST['json_data'] : null;
    if($dataSend != null){
        $objDataSend = json_decode($dataSend);
        $name = NoEmpty($objDataSend->name) ? $objDataSend->name : null;
        $msg = NoEmpty($objDataSend->message) ? $objDataSend->message : null;
        $phone = NoEmpty($objDataSend->phone) ? $objDataSend->phone : null;
        $email = NoEmpty($objDataSend->email) ? $objDataSend->email : null;
        if($name != null && $msg != null && $phone != null && $email != null){
            $obj = new clsMail();
            if($obj->Send($name,$email,"hola como estas")){
                echo "Exitoso";
            }else{
                echo "error";
            }
        }
    }

    function NoNull($name){
        return isset($_POST[$name]);
    }
    function NoEmpty($data){
        return !empty($data) ? true : false;
    }   

    // function HeaderEmail(){
    //     $header = "From: fmaximiliano443@gmail.com". "\r\n";
    //     $header.= "Reply-To: fmaximiliano443@gmail.com". "\r\n";
    //     $header .= "X-Marler: PHP/" . phpversion();
    //     return $header;
    // }
?>