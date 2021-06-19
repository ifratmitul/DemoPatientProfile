import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { DoctorComponent } from './doctor/doctor.component';

const routes: Routes = [
  { path: 'test', component: HomeComponent },
  {
    path: '',
    loadChildren: () =>
      import('./doctor/doctor.module').then((mod) => mod.DoctorModule),
  },
  {
    path: 'rx',
    loadChildren: () =>
      import('./prescription/prescription.module').then(
        (mod) => mod.PrescriptionModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
