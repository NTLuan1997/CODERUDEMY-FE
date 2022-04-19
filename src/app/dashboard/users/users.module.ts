import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { CommonsModule } from 'src/app/commons/commons.module';
import { UserInformationComponent } from './user-information/user-information.component';


@NgModule({
  declarations: [
    UserRegisterComponent,
    UserSigninComponent,
    UserInformationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    CommonsModule
  ],
  providers: [
    CookieService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ]
})
export class UsersModule { }
