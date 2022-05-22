import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpsService<T> {

  constructor() { }

  GET(token: any, endPoint: String): Promise<any> {
    let url = environment.url + endPoint;
    return  new Promise((resolve, reject) => {
      fetch(url, { 
        "method": 'GET',
        "headers": {
          "content-type": 'application/json',
          "Authorization": token,
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

  POST(token:any, body: any, endPoint: string): Promise<any> {
    let url = environment.url + endPoint;
    return  new Promise((resolve, reject) => {
      fetch(url, { 
        "method": 'POST',
        "headers": {
          "content-type": 'application/json',
          "Authorization": token,
        },
        "body": JSON.stringify(body)
      })
      .then((res) => {
        resolve(res.json());
      })
      .catch((err) => {
        reject(err);
      })
    })
  }

  PUT(token: any, body: any, endPoint: String): Promise<any> {
    let url = environment.url + endPoint;
    return  new Promise((resolve, reject) => {
      fetch(url, { 
        "method": 'PUT',
        "headers": {
          "content-type": 'application/json',
          "Authorization": token,
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
