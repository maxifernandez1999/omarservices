"use strict";
///<reference path="../node_modules/@types/jquery/index.d.ts" />
var Manager;
(function (Manager) {
    var Validation = /** @class */ (function () {
        function Validation() {
        }
        Validation.ValidationEmail = function () {
            var email = $("#email").val();
            if (email != "") {
                return Validation.SuccessEmail(email) ? "OK" : "invalido";
            }
            return "vacio";
        };
        Validation.SuccessEmail = function (email) {
            var emailRegex = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
            return emailRegex.test(email);
        };
        return Validation;
    }());
    Manager.Validation = Validation;
})(Manager || (Manager = {}));
//# sourceMappingURL=validation.js.map