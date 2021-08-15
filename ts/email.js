"use strict";
///<reference path="../node_modules/@types/jquery/index.d.ts" />
$(function () {
    $("#btnEmail").on("click", Manager.Email.Validator);
});
var Manager;
(function (Manager) {
    var Email = /** @class */ (function () {
        function Email() {
        }
        Email.Validator = function () {
            if (Manager.Validation.ValidationEmail()) {
                $(".invalid-feedback").show();
            }
            else {
            }
        };
        Email.SendInfo = function () {
            console.log("hola");
            var message = $("#message").val();
            var name = $("#name").val();
            var email = $("#email").val();
            var phone = $("#phone").val();
            var url = "./php/Email.php";
            var data = {};
            data.message = message;
            data.phone = phone;
            data.email = email;
            data.name = name;
            $.ajax({
                type: 'POST',
                url: url,
                dataType: "text",
                data: "json_data=" + JSON.stringify(data),
                async: true
            })
                .done(function (resultado) {
                if (resultado == "Exitoso") {
                    $("#btnEmail").removeClass('btn-primary');
                    $("#btnEmail").addClass('btn-success');
                    $("#btnEmail").html('Email enviado correctamente!');
                    $("btnEmail").prop('disabled', true);
                    Manager.Email.ClearElement();
                    window.setTimeout(function () {
                        $("#btnEmail").removeClass('btn-success');
                        $("#btnEmail").addClass('btn-primary');
                        $("#btnEmail").html('Enviar email');
                        $("btnEmail").prop('disabled', false);
                    }, 4000);
                }
                else {
                    $("#btnEmail").removeClass('btn-primary');
                    $("#btnEmail").addClass('btn-danger');
                    $("#btnEmail").html('Ocurrio un error en el envio del formulario!');
                    $("btnEmail").prop('disabled', true);
                    Manager.Email.ClearElement();
                    window.setTimeout(function () {
                        $("#btnEmail").removeClass('btn-danger');
                        $("#btnEmail").addClass('btn-primary');
                        $("#btnEmail").html('Enviar email');
                        $("btnEmail").prop('disabled', false);
                    }, 4000);
                }
            })
                .fail(function (jqXHR, textStatus, errorThrown) {
            });
        };
        Email.ClearElement = function () {
            $("#message").val("");
            $("#name").val("");
            $("#email").val("");
            $("#phone").val("");
        };
        return Email;
    }());
    Manager.Email = Email;
})(Manager || (Manager = {}));
//# sourceMappingURL=email.js.map