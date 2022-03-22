import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Course } from '../model/course';
import { loader } from '../model/loader';

@Injectable({
  providedIn: 'root'
})
export class HttpsService {

  constructor() { }

  callAPI() {
    return new Promise<Course>((resolve, reject) => {
      loader.setLoader(true);
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
        .then(() => {
          loader.setLoader(false);
        })
        .catch((err) => {
          reject(err);
        })
    })
  }
}
