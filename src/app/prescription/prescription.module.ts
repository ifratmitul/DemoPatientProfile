import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescriptionComponent } from './prescription.component';
import { RxRoutingModule } from './rx-routing.module';

import { SharedModule } from '../shared/shared.module';
import { ShowcaseComponent } from './showcase/showcase.component';
import { RxFormComponent } from './rx-form/rx-form.component';
import { ToothStructureComponent } from './tooth-structure/tooth-structure.component';
import { EditRxComponent } from './edit-rx/edit-rx.component';
import { OldRxComponent } from './old-rx/old-rx.component';

@NgModule({
  declarations: [
    PrescriptionComponent,
    ShowcaseComponent,
    RxFormComponent,
    ToothStructureComponent,
    EditRxComponent,
    OldRxComponent,
  ],
  imports: [CommonModule, RxRoutingModule, SharedModule],
  exports: [PrescriptionComponent],
})
export class PrescriptionModule {}
