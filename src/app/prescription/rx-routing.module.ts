import { NgModule } from '@angular/core';
import { PrescriptionComponent } from './prescription.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: PrescriptionComponent},
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RxRoutingModule { }
