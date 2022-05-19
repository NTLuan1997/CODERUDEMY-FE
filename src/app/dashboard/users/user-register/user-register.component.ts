import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User, EndPoint, commons } from 'src/app/model/model';
import { UserService } from 'src/app/service/user.service';
import { ValidationService } from 'src/app/service/validation.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  user: User = new User();
  registerForm: FormGroup = new FormGroup({});
  submitEvent: Boolean = false;
  Name: FormControl;
  Email: FormControl;
  Password: FormControl;
  ConformPassword: FormControl;
  Gender: FormControl;
  DateOfBirth: FormControl;
  Phone: FormControl;
  Address: FormControl;
  options: Array<string> = commons.gender;

  constructor(
    private userService: UserService,
    private valid: ValidationService,
    private fb: FormBuilder,
    private router: Router,
    private cookie: CookieService
  ) {
    this.user.Func = "Register";
    this.user.Type = "Register-account";
    this.Name = new FormControl('', [this.valid.required()]);
    this.Email = new FormControl('', [this.valid.required(), this.valid.email()]);
    this.Password = new FormControl('', [this.valid.required(), this.valid.minLength(6),
                                            this.valid.maxLength(15), this.valid.password()]);
    this.ConformPassword = new FormControl('', [this.valid.required(), this.valid.confirmPassword()]);
    this.Gender = new FormControl('', [this.valid.required()]);
    this.DateOfBirth = new FormControl('', [this.valid.required(), this.valid.dateOfBirth(0, 80)]);
    this.Phone = new FormControl('', [this.valid.required(), this.valid.phone()]);
    this.Address = new FormControl('', [this.valid.required()]);
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      Name: this.Name,
      Email: this.Email,
      Password: this.Password,
      ConformPassword: this.ConformPassword,
      Gender: this.Gender,
      DateOfBirth: this.DateOfBirth,
      Phone: this.Phone,
      Address: this.Address
    })
  }

  onSubmit() {
    this.submitEvent = true;
    if (this.registerForm.valid) {
      this.userService.usertPost(this.user, EndPoint.client.common)
        .then((data: any) => {
          if (data) {
            if(data.hasOwnProperty("status")) {
              this.validator(data);
              
            } else {
              if(data.client.status) {
                localStorage.setItem("User", JSON.stringify(data.client.doc));
                this.cookie.set("clientToken", data.token, { expires: 24 * 60 * 60 });
                
              } else {
                this.validator(data);
              }
            }
          }
        })
        .then(() => {
          this.router.navigate(["/"]);
        })
        .catch((err) => {
          throw err;
        })
    }
  }

  validator(parameter: any) {
    this.registerForm.controls["Email"].setErrors(this.valid.response(parameter));
  }

}
