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

  usertPost(user: User, endPoint: string):Promise<any> {
    return new Promise((resolve, reject) => {
      this.service.POST(user, endPoint)
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
      this.service.PUT(token, user, endPoint)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      })
    })
  }
}

