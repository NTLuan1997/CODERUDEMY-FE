import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  User = new User();

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router,
    private cookie: CookieService
  ) { }

  registerForm = this.fb.group({
    "user_name": new FormControl(this.User['user_name'], [Validators.required]),
    "email": new FormControl(this.User.email, [Validators.required]),
    "password": new FormControl(this.User.password, [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
    "dateOfBirth": new FormControl(this.User.dateOfBirth, [Validators.required])
  })

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.registerForm.status == "VALID") {
      this.User.status = true;
      this.User.role = "Member";
      this.User.courses = [];

      this.userService.userRegister(this.User)
        .then((data: any) => {
          if (data) {
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

}
