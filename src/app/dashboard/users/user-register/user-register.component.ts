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
  userName: FormControl;
  userEmail: FormControl;
  userPassword: FormControl;
  userConformPassword: FormControl;
  userGender: FormControl;
  dateOfBirth: FormControl;
  userPhone: FormControl;
  userAddress: FormControl;
  options: Array<string> = commons.gender;

  constructor(
    private userService: UserService,
    private valid: ValidationService,
    private fb: FormBuilder,
    private router: Router,
    private cookie: CookieService
  ) {
    this.userName = new FormControl('', [this.valid.required()]);
    this.userEmail = new FormControl('', [this.valid.required(), this.valid.email()]);
    this.userPassword = new FormControl('', [this.valid.required(), this.valid.minLength(6),
                                            this.valid.maxLength(15), this.valid.password()]);
    this.userConformPassword = new FormControl();
    this.userGender = new FormControl('', [this.valid.required()]);
    this.dateOfBirth = new FormControl('', [this.valid.required(), this.valid.dateOfBirth(0, 80)]);
    this.userPhone = new FormControl('', [this.valid.required(), this.valid.phone()]);
    this.userAddress = new FormControl('', [this.valid.required()]);
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      userName: this.userName,
      userEmail: this.userEmail,
      userPassword: this.userPassword,
      userConformPassword: this.userConformPassword,
      userGender: this.userGender,
      dateOfBirth: this.dateOfBirth,
      userPhone: this.userPhone,
      userAddress: this.userAddress
    })
  }

  onSubmit() {
    this.submitEvent = true;
    if (this.registerForm.valid) {
      this.user.status = true;
      this.user.role = "Member";
      this.user.courses = [];

      this.userService.usertPost(this.user, EndPoint.user.register)
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
