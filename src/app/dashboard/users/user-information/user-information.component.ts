import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from 'src/app/service/validation.service';
import { commons, User } from "../../../model/model"

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss']
})
export class UserInformationComponent implements OnInit {
  user:User = new User();
  submitEvent: Boolean = false;
  profileForm: FormGroup = new FormGroup({});
  Name: FormControl;
  Email: FormControl;
  Gender: FormControl;
  DateOfBirth: FormControl;
  Phone: FormControl;
  Address: FormControl;
  options: Array<string> = commons.gender;

  constructor(
    private fb: FormBuilder,
    private valid: ValidationService,
  ) {
    this.Name = new FormControl('', [this.valid.required()]);
    this.Email = new FormControl('', [this.valid.required(), this.valid.email()]);
    this.Gender = new FormControl('', [this.valid.required()]);
    this.DateOfBirth = new FormControl('', [this.valid.required(), this.valid.dateOfBirth(0, 80)]);
    this.Phone = new FormControl('', [this.valid.required(), this.valid.phone()]);
    this.Address = new FormControl('', [this.valid.required()]);
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.profileForm = this.fb.group({
      userName : this.Name,
      userEmail: this.Email,
      userGender: this.Gender,
      dateOfBirth: this.DateOfBirth,
      userPhone: this.Phone,
      userAddress: this.Address
    })
  }

  onSubmit() {
    this.submitEvent = true;
    console.log(this.profileForm);
    console.log(this.user);
  }

}
