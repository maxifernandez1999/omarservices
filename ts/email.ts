///<reference path="../node_modules/@types/jquery/index.d.ts" />
$(function(){

    $("#btnEmail").on("click", Manager.Email.Validator);
});
namespace Manager{
    export class Email{
        public static Validator() {
            if (Validation.ValidationEmail()) {
                $(".invalid-feedback").show();
            }else{
                
            }
        }
        public static SendInfo(){
            console.log("hola");
            let message:string = <string>$("#message").val();
            let name:string = <string>$("#name").val();
            let email:string = <string>$("#email").val();
            let phone:string = <string>$("#phone").val();
            var url:string = "./php/Email.php";
            var data:any = {};
            data.message = message;
            data.phone = phone;
            data.email = email;
            data.name = name;
            $.ajax({
                type: 'POST',
                url:  url,
                dataType: "text",
                data: "json_data="+JSON.stringify(data),
                async: true
            })
            .done(function (resultado:any) {
                if(resultado == "Exitoso"){
                    $("#btnEmail").removeClass('btn-primary');
                    $("#btnEmail").addClass('btn-success');
                    $("#btnEmail").html('Email enviado correctamente!');
                    $("btnEmail").prop('disabled', true);
                    Manager.Email.ClearElement();
                    window.setTimeout(() => {
                        $("#btnEmail").removeClass('btn-success');
                        $("#btnEmail").addClass('btn-primary');
                        $("#btnEmail").html('Enviar email');
                        $("btnEmail").prop('disabled', false);
                    }, 4000);
                    
                    
                }else{
                    $("#btnEmail").removeClass('btn-primary');
                    $("#btnEmail").addClass('btn-danger');
                    $("#btnEmail").html('Ocurrio un error en el envio del formulario!');
                    $("btnEmail").prop('disabled', true);
                    Manager.Email.ClearElement();
                    window.setTimeout(() => {
                        $("#btnEmail").removeClass('btn-danger');
                        $("#btnEmail").addClass('btn-primary');
                        $("#btnEmail").html('Enviar email');
                        $("btnEmail").prop('disabled', false);
                    }, 4000);
                }
                
            })
            .fail(function (jqXHR:any, textStatus:any, errorThrown:any) {
                
        
            });    
        }
        public static ClearElement(){
            $("#message").val("");
            $("#name").val("");
            $("#email").val("");
            $("#phone").val("");
        }
    }
}