import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescriptionComponent } from './prescription.component';
import { RxRoutingModule } from './rx-routing.module';
import { AdulttoothComponent } from './adulttooth/adulttooth.component';
import { KidstoothComponent } from './kidstooth/kidstooth.component';
import { SharedModule } from '../shared/shared.module';
import { ShowcaseComponent } from './showcase/showcase.component';
import { RxFormComponent } from './rx-form/rx-form.component';
import { ToothSelectorComponent } from './tooth-selector/tooth-selector.component';



@NgModule({
  declarations: [
    PrescriptionComponent,
    AdulttoothComponent,
    KidstoothComponent,
    ShowcaseComponent,
    RxFormComponent,
    ToothSelectorComponent
  ],
  imports: [
    CommonModule,
    RxRoutingModule,
    SharedModule
  ],
  exports: [PrescriptionComponent]
})
export class PrescriptionModule { }
