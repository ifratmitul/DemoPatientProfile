import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
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
  @Input() toothset = [];
  constructor(private rxService: PrescriptionService) {}

  ngOnInit(): void {
    this.rxForm = new FormGroup({
      patientData: new FormGroup({
        name: new FormControl(null),
      }),
      medication: new FormArray([]),
      problems: new FormArray([]),
      instruction: new FormArray([]),
    });
  }

  // problemTooth() {
  //   (<FormArray>this.rxForm.get('problems')).push(
  //     new FormGroup({
  //       specify: new FormControl(),
  //     })
  //   );

  //   this.rxService.isSelected.next(false);
  // }

  setTooth(id: number) {
    if (!this.selectedTooth.includes(id)) {
      this.selectedTooth.push(id);
      (<FormArray>this.rxForm.get('problems')).push(
        new FormGroup({
          specify: new FormControl(),
        })
      );
    }
  }

  removeTooth(index: number, teethNo: number) {
    (<FormArray>this.rxForm.get('problems')).removeAt(index);
    console.log(this.rxForm);

    //removing tooth from selected teeth
    this.selectedTooth = this.selectedTooth.filter(function (ele) {
      return ele != teethNo;
    });

    this.rxService.removeTooth(this.selectedTooth);
  }

  onSubmit() {
    console.log(this.rxForm);
    //let data: [] = this.rxForm.get('problems').value;

    // for (let item of data) {
    //   console.log(item);
    //   console.log(this.selectedTooth[data.indexOf(item)]);
    // }
  }

  //Adding removing from different FormArray
  addMedication() {
    (<FormArray>this.rxForm.get('medication')).push(
      new FormGroup({
        medicine: new FormControl(),
      })
    );
  }

  addInstruction() {
    (<FormArray>this.rxForm.get('instruction')).push(
      new FormGroup({
        suggestion: new FormControl(),
      })
    );
  }
  removeMedication(i: number) {
    (this.rxForm.get('medication') as FormArray).removeAt(i);
  }

  removeInstruction(i: number) {
    (this.rxForm.get('instruction') as FormArray).removeAt(i);
  }

  get controls() {
    return (this.rxForm.get('problems') as FormArray).controls;
  }

  get MedControlls() {
    return (this.rxForm.get('medication') as FormArray).controls;
  }
  get Instruction() {
    return (this.rxForm.get('instruction') as FormArray).controls;
  }
}
