import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductLessonComponent } from './product-lesson/product-lesson.component';
import { CommonsModule } from 'src/app/commons/commons.module';
import { TransformPipe } from 'src/app/pipes/transform.pipe';


@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductLessonComponent,
    TransformPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    CommonsModule
  ],
  providers: [
    TransformPipe,
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  exports: [
    TransformPipe
  ]
})
export class ProductsModule { }
