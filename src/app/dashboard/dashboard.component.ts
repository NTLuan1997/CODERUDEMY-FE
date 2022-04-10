import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userSignIn: Boolean = false;

  constructor(
    private userService: UserService,
    private cookie: CookieService
  ) { }

  ngOnInit(): void { }

  ngDoCheck(): void {
    if (this.cookie.check("clientToken")) {
      this.userSignIn = true;
    }
  }

  clientLogout() {
    if (this.userSignIn) {
      console.log("Hello world");
      let token = { "token": this.cookie.get("clientToken") };
      this.userService.userLogOut(token)
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          throw err;
        })
    }
  }
}
