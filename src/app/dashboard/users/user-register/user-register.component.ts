import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User, EndPoint } from 'src/app/model/model';
import { UserService } from 'src/app/service/user.service';
import { ValidationService } from 'src/app/service/validation.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  User = new User();
  registerForm: FormGroup = new FormGroup({});
  submitEvent: Boolean = false;
  userName: FormControl;
  email: FormControl;
  password: FormControl;
  dateOfBirth: FormControl;

  constructor(
    private userService: UserService,
    private valid: ValidationService,
    private fb: FormBuilder,
    private router: Router,
    private cookie: CookieService
  ) {
    this.userName = new FormControl(this.User["user_name"], [this.valid.required()]);
    this.email = new FormControl(this.User.email, [this.valid.required(), this.valid.email()]);
    this.password = new FormControl(this.User.password,
                    [this.valid.required(), this.valid.minLength(6),
                    this.valid.maxLength(15), this.valid.password()]);
    this.dateOfBirth = new FormControl(this.User.dateOfBirth, [this.valid.required(), this.valid.dateOfBirth(0, 80)]);
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      userName: this.userName,
      email: this.email,
      password: this.password,
      dateOfBirth: this.dateOfBirth
    })
  }

  onSubmit() {
    this.submitEvent = true;
    if (this.registerForm.valid) {
      this.User.status = true;
      this.User.role = "Member";
      this.User.courses = [];

      this.userService.usertPost(this.User, EndPoint.user.register)
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
