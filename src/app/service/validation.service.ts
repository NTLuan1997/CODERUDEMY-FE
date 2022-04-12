import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { Handlle } from "../model/model";
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  regexPassword = /([A-Za-z]){1,}([#?!@$%^&*]){1,}([A-Za-z]{1,})|([\d]{1,})$/g;

  constructor() { }

  dateOfBirth(minAge: Number, maxAge: Number): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | any => {
      if(control.value) {
        let age = moment().diff(control.value, "years");
        if(age == 0) {
          return { "error": "dateOfBirth", "message": Handlle.dateOfBirth.ageZero };
        }
        
        if(age < minAge) {
          return { "error": "dateOfBirth", "message": `${Handlle.dateOfBirth.minAge} ${minAge}` };
        }

        if(age > maxAge) {
          return { "error": "dateOfBirth", "message": `${Handlle.dateOfBirth.maxAge} ${maxAge}` };
        }
      }
    }
  }

  required(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      if(control.value) return null;
      return { "error": "required", "message": Handlle.Input.required };
    }
  }

  email(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      if(control.value) {
        if(!this.regexEmail.test(control.value.trim())) {
          return { "error": "email", "message": Handlle.Input.email };
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
          return {"error": "minLength", "message": `${Handlle.Input.minLength} - ${parameter}`};
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
          return {"error": "maxLength", "message": `${Handlle.Input.maxLength} - ${parameter}`};
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
          return {"error": "password", "message": Handlle.Input.password};
        }
        return null;
      }
      return null;
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
        error = {"error": parameter.type, "message": Handlle.Input.userNotFound};
    }
    return error;
  }
}
