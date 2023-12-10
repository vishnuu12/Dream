
export interface IFormValidator {
    isControlValid(controlName: string): boolean;
    isControlInvalid(controlName: string): boolean;
    controlHasError(validation: string, controlName: string): boolean;
    isControlTouched(controlName: string): boolean;
}