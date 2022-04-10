import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductLessonComponent } from './product-lesson/product-lesson.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductLessonComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ]
})
export class ProductsModule { }
