import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.scss', '../user-register/user-register.component.scss']
})
export class UserSigninComponent implements OnInit {
  User: User = new User();
  signInForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.signInForm = this.fb.group({
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    })
  }

}
