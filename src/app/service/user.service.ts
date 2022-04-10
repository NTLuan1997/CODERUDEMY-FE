import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpsService } from './https.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private service: HttpsService<any>
  ) { }

  userRegister(user: User) {
    return new Promise((resolve, reject) => {
      this.service.POST('/API/user/client-register', user)
        .subscribe(
          (data: any) => resolve(data)
        )
    })
  }

  userLogOut(token: any) {
    return new Promise((resolve, reject) => {
      this.service.POST('/API/user/client-logOut', token)
        .subscribe(
          (data: any) => resolve(data)
        )
    })
  }
}

