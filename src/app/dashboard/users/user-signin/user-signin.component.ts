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
  email: FormControl;
  password: FormControl;
  submitEvent: Boolean = false;
  signInForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private cookie: CookieService
  ) {
    this.email = new FormControl(this.User.email, [Validators.required]);
    this.password = new FormControl(this.User.password);
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.signInForm = this.fb.group({
      email: this.email,
      password: this.password
    })
  }

  userSignIn() {
    // console.log(this.User);
    this.submitEvent = true;
    if(this.signInForm.status == "VALID") {

      // this.userService.userSignIn(this.User)
      // .then((data:any) => {
      //   if(data) {
      //       this.cookie.set("clientToken", data.token, { expires: 24 * 60 * 60 });
      //       this.router.navigate(["/"]);

      //   } else {
      //     console.log(data.message);
      //   }
      // })
      // .catch((err) => {
      //   throw err;
      // })
    }
  }

}
