import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  signIn: Boolean = false;

  constructor(
    private userService: UserService,
    private cookie: CookieService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  ngDoCheck(): void {
    if (this.cookie.check("Token")) {
      this.signIn = true;
    }
  }

  signOut() {
    if (this.signIn) {
      this.cookie.delete("Token");
      this.signIn = false;
      this.router.navigate(["/"]);
    }
  }
}
