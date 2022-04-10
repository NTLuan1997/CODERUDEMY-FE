import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  providers: [
    CookieService,
    { provide: APP_BASE_HREF, useValue: '/' }
  ]
})
export class DashboardModule { }
