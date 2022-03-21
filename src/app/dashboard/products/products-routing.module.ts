import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductLessonComponent } from './product-lesson/product-lesson.component';

const routes: Routes = [
  { path: "", component: ProductComponent },
  { path: "chi-tiet-khoa-hoc/noi-dung/:id", component: ProductDetailComponent },
  { path: "chi-tiet-khoa-hoc", component: ProductLessonComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
