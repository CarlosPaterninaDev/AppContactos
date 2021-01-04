import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { CardDashboardComponent } from './components/card-dashboard/card-dashboard.component';



@NgModule({
  declarations: [DashboardComponent, CardDashboardComponent],
  imports: [
    CommonModule,
    DashboardPageRoutingModule
  ]
})
export class DashboardModule { }
