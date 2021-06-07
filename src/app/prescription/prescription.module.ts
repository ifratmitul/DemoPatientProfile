import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescriptionComponent } from './prescription.component';
import { RxRoutingModule } from './rx-routing.module';



@NgModule({
  declarations: [
    PrescriptionComponent
  ],
  imports: [
    CommonModule,
    RxRoutingModule
  ],
  exports: [PrescriptionComponent]
})
export class PrescriptionModule { }
