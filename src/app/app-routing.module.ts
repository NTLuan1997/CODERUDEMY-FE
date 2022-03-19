import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonAnonymousComponent } from './commons/common-anonymous/common-anonymous.component';

const routes: Routes = [
  { path: "trang-chu", redirectTo: "", pathMatch: "full" },
  {
    path: "",
    loadChildren: () => import("../app/dashboard/dashboard.module").then(module => module.DashboardModule)
  },
  { path: "**", component: CommonAnonymousComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
