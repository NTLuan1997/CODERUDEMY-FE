import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInformationComponent } from './user-information/user-information.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserSigninComponent } from './user-signin/user-signin.component';

const routes: Routes = [
  { path: "", redirectTo: "/register", pathMatch: "full" },
  { path: "register", component: UserRegisterComponent },
  { path: "signin", component: UserSigninComponent },
  { path: "information", component: UserInformationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
