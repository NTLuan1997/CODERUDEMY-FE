import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    UserRegisterComponent,
    UserSigninComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule
  ],
  providers: [
    CookieService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  exports: [
    UserRegisterComponent,
    UserSigninComponent
  ]
})
export class UsersModule { }
