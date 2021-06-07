import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescriptionComponent } from './prescription.component';
import { RxRoutingModule } from './rx-routing.module';
import { AdulttoothComponent } from './adulttooth/adulttooth.component';
import { KidstoothComponent } from './kidstooth/kidstooth.component';



@NgModule({
  declarations: [
    PrescriptionComponent,
    AdulttoothComponent,
    KidstoothComponent
  ],
  imports: [
    CommonModule,
    RxRoutingModule
  ],
  exports: [PrescriptionComponent]
})
export class PrescriptionModule { }
