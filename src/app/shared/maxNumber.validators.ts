import { AbstractControl, ValidationErrors } from "@angular/forms";

export class maxNumberValidator{
    static maxNumber(control : AbstractControl) : ValidationErrors | null{
        if(control.value > 100 || control.value < 0){
            return { maxNumber : true}
        }else{
            return null
        }
    }
}