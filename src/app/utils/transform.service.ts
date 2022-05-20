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
    let gender = (value === "male")? "Nam": (value === "female")? "Nữ": (value === "other")? "Khác": "";
    return gender;
  }
}
