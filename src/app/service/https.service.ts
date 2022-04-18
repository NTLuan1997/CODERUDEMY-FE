import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpsService<T> {

  constructor() { }

  GET(endPoint: String): Promise<any> {
    let url = environment.url + endPoint;
    return  new Promise((resolve, reject) => {
      fetch(url, { 
        "method": 'GET',
        "headers": {
          "content-type": 'application/json'
        }
      })
      .then((data) => {
        resolve(data.json());
      })
      .catch((err) => {
        reject(err);
      })
    })
  }

  POST(endPoint: string, body: any): Promise<any> {
    let url = environment.url + endPoint;
    return  new Promise((resolve, reject) => {
      fetch(url, { 
        "method": 'POST',
        "headers": {
          "content-type": 'application/json'
        },
        "body": JSON.stringify(body)
      })
      .then((data) => {
        resolve(data.json());
      })
      .catch((err) => {
        reject(err);
      })
    })
  }

  PUT(endPoint: String, body: any): Promise<any> {
    let url = environment.url + endPoint;
    return  new Promise((resolve, reject) => {
      fetch(url, { 
        "method": 'PUT',
        "headers": {
          "content-type": 'application/json'
        },
        "body": JSON.stringify(body)
      })
      .then((data) => {
        resolve(data.json());
      })
      .catch((err) => {
        reject(err);
      })
    })
  }
}
