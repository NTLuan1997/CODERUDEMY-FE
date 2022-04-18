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

  usertPost(user: User, endPoint: string) {
    return new Promise((resolve, reject) => {
      this.service.POST(endPoint, user)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      })
    })
  }
}

