import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonsRoutingModule } from './commons-routing.module';
import { CommonHeaderComponent } from './common-header/common-header.component';
import { CommonFooterComponent } from './common-footer/common-footer.component';
import { CommonAnonymousComponent } from './common-anonymous/common-anonymous.component';
import { CommonLoaderComponent } from './common-loader/common-loader.component';


@NgModule({
  declarations: [
    CommonHeaderComponent,
    CommonFooterComponent,
    CommonAnonymousComponent,
    CommonLoaderComponent
  ],
  imports: [
    CommonModule,
    CommonsRoutingModule
  ],
  exports: [
    CommonHeaderComponent,
    CommonFooterComponent,
    CommonLoaderComponent
  ]
})
export class CommonsModule { }
