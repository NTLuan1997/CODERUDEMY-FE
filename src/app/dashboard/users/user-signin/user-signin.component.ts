import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User, EndPoint } from 'src/app/model/model';
import { UserService } from 'src/app/service/user.service';
import { ValidationService } from 'src/app/service/validation.service';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.scss', '../user-register/user-register.component.scss']
})
export class UserSigninComponent implements OnInit {
  user:User = new User();
  signInForm: FormGroup = new FormGroup({});
  submitEvent: Boolean = false;
  Email: FormControl;
  Password: FormControl;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private valid: ValidationService,
    private router: Router,
    private cookie: CookieService
  ) {
    this.Email = new FormControl(this.user.Email, [this.valid.required(), this.valid.email()]);
    this.Password = new FormControl(this.user.Password,
                    [this.valid.required(), this.valid.minLength(6),
                    this.valid.maxLength(15), this.valid.password()]);
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.signInForm = this.fb.group({
      email: this.Email,
      password: this.Password
    })
  }

  userSignIn() {
    this.submitEvent = true;
    if(this.signInForm.valid) {
      this.userService.usertPost(this.user, EndPoint.user.signIn)
      .then((data:any) => {
        if(data.status) {
            this.cookie.set("clientToken", data.token, { expires: 24 * 60 * 60 });
            this.router.navigate(["/"]);
        } else {
          this.validator(data);
        }
        console.log(this.signInForm);
      })
      .catch((err) => {
        throw err;
      })
    }
  }

  validator(parameter: any) {
    Object.keys(this.signInForm.controls).forEach((e) => {
      this.signInForm.controls[e].setErrors(this.valid.response(parameter));
    })
  }

}
