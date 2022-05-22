import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransformService {

  constructor() { }

  date(value: string) {
    let convert = new Date(value);
    let transform = convert.toLocaleString().split(",")[0].split("/");
    let day = (transform[1].length <= 1)? `0${transform[1]}` : transform[1];
    let month = (transform[0].length <= 1)? `0${transform[0]}`: transform[0];
    return `${transform[2]}-${month}-${day}`;
  }

  gender(value:string) {
    let gender = (value === "male")? "Nam": (value === "female")? "Nữ": (value === "other")? "Khác": "";
    return gender;
  }
}
