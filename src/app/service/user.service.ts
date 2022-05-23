import { Injectable } from '@angular/core';
import { User } from '../model/model';
import { HttpsService } from './https.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private service: HttpsService<any>
  ) { }

  GET(token: any, endPoint: String ): Promise<any> {
    return new Promise((resolve, reject) => {
      this.service.GET(`Bearer ${token}`, endPoint)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);

      })
    })
  }

  POST(token:any, user: User, endPoint: string):Promise<any> {
    return new Promise((resolve, reject) => {
      this.service.POST(token, user, endPoint)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      })
    })
  }

  PUT(token: any, user:User, endPoint:string) {
    return new Promise((resolve, reject) => {
      this.service.PUT(`Bearer ${token}`, user, endPoint)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      })
    })
  }

  PUTPRITURE(body: any, endPoint: string) {
    return new Promise((resolve, reject) => {
      fetch(endPoint, {
        "method": "POST",
        "body": body
      })
      .then((res: any) => {
        return res.json();
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      })
    })
  }
}

