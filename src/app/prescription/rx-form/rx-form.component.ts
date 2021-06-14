import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { PrescriptionService } from '../prescription.service';

@Component({
  selector: 'app-rx-form',
  templateUrl: './rx-form.component.html',
  styleUrls: ['./rx-form.component.scss'],
})
export class RxFormComponent implements OnInit {
  selectedTooth: number[] = [];
  data = [];
  rxForm: FormGroup;
  constructor(private rxService: PrescriptionService) {}

  ngOnInit(): void {
    this.problemTooth();

    this.rxForm = new FormGroup({
      patientData: new FormGroup({
        name: new FormControl(null),
      }),
      medication: new FormArray([]),
      problems: new FormArray([]),
    });
  }

  problemTooth() {
    this.rxService.selectedteeth.subscribe((res: []) => {
      console.log(res);
      console.log('called');
      const controls = new FormControl(null);
      (<FormArray>this.rxForm.get('problems')).push(controls);

      this.selectedTooth = res;
    });
  }

  // onSubmit(form: NgForm) {
  //   // console.log('form submission');
  //   // let problem = form.value.teethData;
  //   // this.data.push(problem);
  //   // console.log(form.value);
  //   // console.log(this.data);
  //   // var d = this.data[0];
  //   // for (var key in d) {
  //   //   console.log(key);
  //   //   if (key === 'name') console.log('name found');
  //   //   console.log(d[key]);
  //   // }
  //   // form.reset();
  // }

  onSubmit() {
    console.log(this.rxForm.get('problems').value);
    let data: [] = this.rxForm.get('problems').value;

    for (let item of data) {
      console.log(item);
      console.log(this.selectedTooth[data.indexOf(item)]);
    }
  }
  addMedication() {}

  addInstruction() {}

  get controls() {
    return (this.rxForm.get('problems') as FormArray).controls;
  }
}
