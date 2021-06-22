import { NgModule } from '@angular/core';
import { PrescriptionComponent } from './prescription.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ShowcaseComponent } from './showcase/showcase.component';
import { EditRxComponent } from './edit-rx/edit-rx.component';
import { OldRxComponent } from './old-rx/old-rx.component';

const routes: Routes = [
  { path: '', component: PrescriptionComponent },
  { path: 'show', component: ShowcaseComponent },
  { path: 'oldrx', component: OldRxComponent },
  { path: ':id/edit', component: EditRxComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), FormsModule],
  exports: [RouterModule, FormsModule],
})
export class RxRoutingModule {}
