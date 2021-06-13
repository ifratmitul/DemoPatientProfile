import { NgModule } from '@angular/core';
import { PrescriptionComponent } from './prescription.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ShowcaseComponent } from './showcase/showcase.component';

const routes: Routes = [
  {path: '', component: PrescriptionComponent},
  {path: 'show', component: ShowcaseComponent}

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [RouterModule, FormsModule]
})
export class RxRoutingModule { }
