///<reference path="../node_modules/@types/jquery/index.d.ts" />

namespace Manager{
    export class Validation{
        public static ValidationEmail():string{
            let email:string = <string>$("#email").val();
            if (email != "") {
                return Validation.SuccessEmail(email) ? "OK" : "invalido";
            }
            return "vacio";

        }
        public static SuccessEmail(email:string):boolean{
            let emailRegex:RegExp = /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
            return emailRegex.test(email);
        }
    }
}