import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.scss', '../user-register/user-register.component.scss']
})
export class UserSigninComponent implements OnInit {
  User: User = new User();
  signInForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private cookie: CookieService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.signInForm = this.fb.group({
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    })
  }

  userSignIn() {
    this.userService.userSignIn(this.User)
    .then((data:any) => {
      if(data) {
          this.cookie.set("clientToken", data.token, { expires: 24 * 60 * 60 });
          this.router.navigate(["/"]);

      } else {
        console.log(data.message);
      }
    })
    .catch((err) => {
      throw err;
    })
  }

}
