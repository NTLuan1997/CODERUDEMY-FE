import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonsRoutingModule } from './commons-routing.module';
import { CommonHeaderComponent } from './common-header/common-header.component';
import { CommonFooterComponent } from './common-footer/common-footer.component';
import { CommonAnonymousComponent } from './common-anonymous/common-anonymous.component';
import { CommonLoaderComponent } from './common-loader/common-loader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonFormInputComponent } from './common-form-input/common-form-input.component';


@NgModule({
  declarations: [
    CommonHeaderComponent,
    CommonFooterComponent,
    CommonAnonymousComponent,
    CommonLoaderComponent,
    CommonFormInputComponent
  ],
  imports: [
    CommonModule,
    CommonsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonHeaderComponent,
    CommonFooterComponent,
    CommonLoaderComponent,
    CommonFormInputComponent
  ]
})
export class CommonsModule { }
