import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/service/user.service';
import { ValidationService } from 'src/app/service/validation.service';
import { TransformService } from 'src/app/utils/transform.service';
import { commons, User, EndPoint } from "../../../model/model"

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss']
})
export class UserInformationComponent implements OnInit {
  user:User | any = new User();
  submitEvent: Boolean = false;
  Information: FormGroup = new FormGroup({});
  SecurityCode: FormGroup = new FormGroup({});
  Name: FormControl;
  Email: FormControl;
  Gender: FormControl;
  DateOfBirth: FormControl;
  Phone: FormControl;
  Password: FormControl;
  ConformPassword: FormControl;
  Address: FormControl;
  options: Array<string> = commons.gender;
  token: string = "";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private valid: ValidationService,
    private cookie: CookieService,
    private userService: UserService,
    private transform: TransformService
  ) {
    this.user.Type = "Edit";
    this.Name = new FormControl('', [this.valid.required()]);
    this.Email = new FormControl('', [this.valid.required(), this.valid.email()]);
    this.Gender = new FormControl('', [this.valid.required()]);
    this.DateOfBirth = new FormControl('', [this.valid.required(), this.valid.dateOfBirth(0, 80)]);
    this.Phone = new FormControl('', [this.valid.required(), this.valid.phone()]);
    this.Password = new FormControl("", [this.valid.required(), this.valid.minLength(6), this.valid.maxLength(15), this.valid.password()]);
    this.ConformPassword = new FormControl("", [this.valid.required(), this.valid.confirmPassword()]);
    this.Address = new FormControl('', [this.valid.required()]);
  }

  ngOnInit(): void {
    this.information();
  }

  information() {
    if(this.cookie.get("Token")) {
      this.userService.GET(this.cookie.get("Token"), EndPoint.client.common)
      .then((result) => {
        this.user.setInfor(result.at(0));
      })
      .then(() => {
        this.createForm();
      })
      .then(() => {
        this.setValueInform();
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }

  createForm() {
    this.Information = this.fb.group({
      Name : this.Name,
      Email: this.Email,
      Gender: this.Gender,
      DateOfBirth: this.DateOfBirth,
      Phone: this.Phone,
      Address: this.Address
    });

    this.SecurityCode = this.fb.group({
      Password: this.Password,
      ConformPassword: this.ConformPassword
    })
  }

  setValueInform() {
    Object.keys(this.Information.controls).forEach((key) => {
      this.Information.controls[key].setValue(this.user[key]);
      if(key === "DateOfBirth") {
        this.Information.controls[key].setValue(this.transform.date(this.user[key]));
      }
      if(key === "Gender") {
        this.Information.controls[key].setValue(this.transform.gender(this.user[key]));
      }
    })
  }

  updateInformation() {
    this.submitEvent = true;
    if(this.Information.valid) {
      this.user.Func = "Information";

      this.userService.PUT(this.cookie.get("Token"), this.user.getInfor(), EndPoint.client.common)
      .then((res: any) => {
        if(res.status) {
          this.router.navigate(["/"]);
        }
      })
      .catch((err) => {
        throw err;
      })
    }
  }

  updatePassword() {
    this.submitEvent = true;
    if(this.SecurityCode.valid) {
      this.user.Func = "Password";
      this.userService.PUT(this.cookie.get("Token"), this.user.getPassword(), EndPoint.client.common)
      .then((res: any) => {
        if(res.status) {
          this.router.navigate(["/"]);
        }
      })
      .catch((err) => {
        throw err;
      })
    }

  }

  uploadPriture(parameter: any) {
    let form = new FormData();
    console.log(parameter.target.files[0]);
  }

}
