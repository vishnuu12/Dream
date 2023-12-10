export class ValidationEvents {

    static numberOnly(event:any): boolean {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }

    static keyPressAlphaNumeric(event:any): boolean {
        var inp = String.fromCharCode(event.keyCode);
        if (/[a-zA-Z0-9]/.test(inp)) {
            return true;
        } else {
            event.preventDefault();
            return false;
        }
    }

    static keyPressAlphaNumericWithSpace(event:any): boolean {
        var inp = String.fromCharCode(event.keyCode);
        if (/[a-zA-Z0-9 ]/.test(inp)) {
            return true;
        } else {
            event.preventDefault();
            return false;
        }
    }

    static keyPressAlphaNumericWithCharacters(event:any) {

        var inp = String.fromCharCode(event.keyCode);
        // Allow numbers, alpahbets, space, underscore
        if (/[a-zA-Z0-9-_ ]/.test(inp)) {
            return true;
        } else {
            event.preventDefault();
            return false;
        }
    }

}

export enum ValidatorPattern {
    GROUPCODE = '^[a-zA-Z0-9]*$',
    GROUPDESCRIPTION = '^[a-zA-Z. ]*$',
    EMAILPATTERN = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
    PHONENOVALIDATOR = '[- +()0-9]+',
    SGIDVALIDATOR = '^[a-zA-Z0-9]*$',
    USERNAMEVALIDATOR = '^[a-zA-Z. ]*$',
    LANGUAGEDESCRIPTION = '^[a-zA-Z. ]*$',
    EDITPROFILECODE = '^[a-zA-Z0-9-_ ]'
  }
