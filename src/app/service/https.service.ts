import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class HttpsService {

  constructor() { }

  callAPI() {
    return new Promise<Course>((resolve, reject) => {
      fetch(environment.url, {
        "method": "GET",
        headers: {
          "content-type": "application/json"
        }
      })
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        })
    })
  }
}
