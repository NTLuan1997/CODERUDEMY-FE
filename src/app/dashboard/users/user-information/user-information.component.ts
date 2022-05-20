import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
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
  profileForm: FormGroup = new FormGroup({});
  Name: FormControl;
  Email: FormControl;
  Gender: FormControl;
  DateOfBirth: FormControl;
  Phone: FormControl;
  Address: FormControl;
  options: Array<string> = commons.gender;
  token: string = "";

  constructor(
    private fb: FormBuilder,
    private valid: ValidationService,
    private cookie: CookieService,
    private userService: UserService,
    private transform: TransformService
  ) {
    this.user.Type = "Edit";
    this.user.Func = "Information";
    this.Name = new FormControl('', [this.valid.required()]);
    this.Email = new FormControl('', [this.valid.required(), this.valid.email()]);
    this.Gender = new FormControl('', [this.valid.required()]);
    this.DateOfBirth = new FormControl('', [this.valid.required(), this.valid.dateOfBirth(0, 80)]);
    this.Phone = new FormControl('', [this.valid.required(), this.valid.phone()]);
    this.Address = new FormControl('', [this.valid.required()]);
  }

  ngOnInit(): void {
    this.information();
  }

  information() {
    if(this.cookie.get("Token")) {
      this.userService.GET(this.cookie.get("Token"), EndPoint.client.common)
      .then((result) => {
        Object.assign(this.user, result.at(0));
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
    this.profileForm = this.fb.group({
      Name : this.Name,
      Email: this.Email,
      Gender: this.Gender,
      DateOfBirth: this.DateOfBirth,
      Phone: this.Phone,
      Address: this.Address
    })
  }

  setValueInform() {
    Object.keys(this.profileForm.controls).forEach((key) => {
      this.profileForm.controls[key].setValue(this.user[key]);
      if(key === "DateOfBirth") {
        this.profileForm.controls[key].setValue(this.transform.date(this.user[key]));
      }
      if(key === "Gender") {
        this.profileForm.controls[key].setValue(this.transform.gender(this.user[key]));
      }
    })
  }

  onSubmit() {
    this.submitEvent = true;
    if(this.profileForm.valid) {
      this.userService.PUT(this.cookie.get("Token"), this.user, EndPoint.client.common)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        throw err;
      })
    }
  }

}
