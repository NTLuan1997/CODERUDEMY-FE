import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/service/user.service';
import { ValidationService } from 'src/app/service/validation.service';
import { TransformService } from 'src/app/utils/transform.service';
import { environment } from 'src/environments/environment';
import { commons, User, EndPoint, Errors } from "../../../model/model"

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
  Priture: String = "";
  ConformPassword: FormControl;
  Address: FormControl;
  options: Array<string> = commons.gender;
  token: string = "";
  fileError: string = "";
  registerCourse: Array<any> = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private valid: ValidationService,
    private cookie: CookieService,
    private userService: UserService,
    private transform: TransformService
  ) {
    this.token = this.cookie.get("Token");
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
    if(this.token) {
      this.userService.GET(this.token, EndPoint.client.common)
      .then((result) => {
        this.user.setInfor(result.at(0));
          this.Priture = (this.user.Thumbnail)? `${EndPoint.priture}${this.user.Thumbnail}` : "../../../../assets/img/user.jpg";
          this.registerCourse = this.user.RegisterCourse;
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

      this.userService.PUT(this.token, this.user.getInfor(), EndPoint.client.common)
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
      this.userService.PUT(this.token, this.user.getPassword(), EndPoint.client.common)
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
    if(this.token) {
      let form = new FormData();
      form.append("client", parameter.target.files[0]);
      form.append("Type", "Client");

      if(this.user.Thumbnail) {
        form.append("Priture", this.user.Thumbnail);
      }

      if(commons.file.includes(parameter.target.files[0].name.split(".").at(1))) {
        if(parameter.target.files[0].size < 1000000) {
          this.fileError = "";
          this.userService.PUTPRITURE(form, environment.urlPriture)
          .then((res: any): Promise<any> => {
            if(res.status) {
              this.user.Func = "Thumbnail";
              this.user.Thumbnail = res.destination;
              return this.userService.PUT(this.token, this.user.getThumbnail(), EndPoint.client.common);

            } else {
              return new Promise((resolve, reject) => { reject({status: false}) });
            }
          })
          .then((res: any) => {
            if(res.status) {
              window.location.reload();
            }
          })
          .catch((err) => {
            throw err;
          })

        } else {
          this.fileError = Errors.file.size;
        }

      } else {
        this.fileError = Errors.file.type;

      }
    }
  }

}
