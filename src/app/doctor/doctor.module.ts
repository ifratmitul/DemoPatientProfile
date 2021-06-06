import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from './doctor.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    DoctorComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DoctorModule { }
