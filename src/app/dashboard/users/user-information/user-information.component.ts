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
  userName: FormControl;
  userEmail: FormControl;
  userGender: FormControl;
  dateOfBirth: FormControl;
  userPhone: FormControl;
  userAddress: FormControl;
  options: Array<string> = commons.gender;

  constructor(
    private fb: FormBuilder,
    private valid: ValidationService,
  ) {
    this.userName = new FormControl('', [this.valid.required()]);
    this.userEmail = new FormControl('', [this.valid.required(), this.valid.email()]);
    this.userGender = new FormControl('', [this.valid.required()]);
    this.dateOfBirth = new FormControl('', [this.valid.required(), this.valid.dateOfBirth(0, 80)]);
    this.userPhone = new FormControl('', [this.valid.required(), this.valid.phone()]);
    this.userAddress = new FormControl('', [this.valid.required()]);
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.profileForm = this.fb.group({
      userName : this.userName,
      userEmail: this.userEmail,
      userGender: this.userGender,
      dateOfBirth: this.dateOfBirth,
      userPhone: this.userPhone,
      userAddress: this.userAddress
    })
  }

  onSubmit() {
    this.submitEvent = true;
    console.log(this.profileForm);
    console.log(this.user);
  }

}
