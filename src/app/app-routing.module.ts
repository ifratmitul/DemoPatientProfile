import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './doctor/doctor.component';

const routes: Routes = [
  {path: '', loadChildren : () => import('./doctor/doctor.module').then(mod => mod.DoctorModule)},
  {path: 'rx', loadChildren : () => import('./prescription/prescription.module').then(mod => mod.PrescriptionModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
