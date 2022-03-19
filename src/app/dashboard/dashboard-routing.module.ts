import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      { path: "", redirectTo: "/khoa-hoc", pathMatch: "full" },
      {
        path: "khoa-hoc",
        loadChildren: () => import("./products/products.module").then((m) => m.ProductsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
