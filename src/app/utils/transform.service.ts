import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransformService {

  constructor() { }

  date(value: string) {
    let convert = new Date(value);
    let transform = convert.toLocaleString().split(",")[0].split("/");
    return `${transform[2]}-${transform[0]}-${transform[1]}`;
  }

  gender(value:string) {
    let gender = "";
    if(value === "male") {
      gender = "Nam";
    }

    if(value === "female"){
      gender = "Nữ";
    }

    if(value === "other") {
      gender = "khác"
    }
    return gender;
  }
}
