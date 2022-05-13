import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Errors } from "../model/model";
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  regexPassword = /([A-Za-z]){1,}([#?!@$%^&*]){1,}([A-Za-z]{1,})|([\d]{1,})$/g;
  regexPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

  constructor() { }

  dateOfBirth(minAge: Number, maxAge: Number): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | any => {
      if(control.value) {
        let age = moment().diff(control.value, "years");
        if(age == 0) {
          return { "error": "dateOfBirth", "message": Errors.dateOfBirth.invalid };
        }
        
        if(age < minAge) {
          return { "error": "dateOfBirth", "message": `${Errors.dateOfBirth.minAge} ${minAge}` };
        }

        if(age > maxAge) {
          return { "error": "dateOfBirth", "message": `${Errors.dateOfBirth.maxAge} ${maxAge}` };
        }
      }
    }
  }

  required(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      if(control.value) return null;
      return { "error": "required", "message": Errors.input.required };
    }
  }

  email(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      if(control.value) {
        if(!this.regexEmail.test(control.value.trim())) {
          return { "error": "email", "message": Errors.email.invalid };
        }
        return null;
      }
      return null;
    }
  }

  minLength(parameter: number): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      if(control.value) {
        if(control.value.trim().length < parameter) {
          return {"error": "minLength", "message": `${Errors.input.minLength} - ${parameter}` };
        }
        return null;
      }
      return null;
    }
  }

  maxLength(parameter: number): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      if(control.value) {
        if(control.value.trim().length > parameter) {
          return {"error": "maxLength", "message": `${Errors.input.maxLength} - ${parameter}` };
        }
        return null;
      }
      return null;
    }
  }

  password(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      if(control.value) {
        if(!this.regexPassword.test(control.value.trim())) {
          return { "error": "password", "message": Errors.password.invalid };
        }
        return null;
      }
      return null;
    }
  }

  confirmPassword(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      let group: any = control.parent;
      let password = group?.controls["userPassword"];
      let conformPassword = group?.controls["userConformPassword"];

      if(password?.value !== conformPassword?.value) {
        return { "error": "password", "message": Errors.password.conformPassword };
      }
      return null;
    }
  }

  // confirmPassword: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
  //   let password = group.get("userPassword");
  //   let conformPassword = group.get("userConformPassword");
  //   if(password !== conformPassword) {
  //     return { "error": "password", "message": Errors.password.conformPassword };
  //   }
  //   return null;
  // }

  phone(): ValidatorFn {
    return (control: AbstractControl): [{key: string} | any] | any => {
      if(control.value) {
        if(!this.regexPhone.test(control.value)) {
          return { "error": "phone", "message": Errors.phone.invalid };
        } else {
          return null;
        }
      } else {
        return null;
      }
    }
  }

  response(res: any) {
    if(res) return this.responseHandle(res);
    return null;
  }

  responseHandle(parameter: any) {
    let error = null;
    switch(parameter.type) {
      case "User Not Found":
      default:
        error = { "error": parameter.type, "message": Errors.responsed.userNotFound };
    }
    return error;
  }
}
