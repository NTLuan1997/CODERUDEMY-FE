import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonAnonymousComponent } from './commons/common-anonymous/common-anonymous.component';

const routes: Routes = [
  { path: "trang-chu", redirectTo: "", pathMatch: "full" },
  {
    path: "user",
    loadChildren: () => import("../app/dashboard/users/users.module").then(m => m.UsersModule)
  },
  {
    path: "",
    loadChildren: () => import("../app/dashboard/dashboard.module").then(m => m.DashboardModule)
  },
  {
    path: "information",
    loadChildren: () => import("../app/dashboard/dashboard.module").then(m => m.DashboardModule)
  },
  { path: "**", component: CommonAnonymousComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
