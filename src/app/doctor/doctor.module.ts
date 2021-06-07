import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from './doctor.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorRoutingModule } from './doctor-routing.module';



@NgModule({
  declarations: [
    DoctorComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule
  ],
  exports:[DoctorComponent]
})
export class DoctorModule { }
