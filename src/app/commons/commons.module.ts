import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonsRoutingModule } from './commons-routing.module';
import { CommonHeaderComponent } from './common-header/common-header.component';
import { CommonFooterComponent } from './common-footer/common-footer.component';


@NgModule({
  declarations: [
    CommonHeaderComponent,
    CommonFooterComponent
  ],
  imports: [
    CommonModule,
    CommonsRoutingModule
  ],
  exports: [
    CommonHeaderComponent,
    CommonFooterComponent
  ]
})
export class CommonsModule { }
