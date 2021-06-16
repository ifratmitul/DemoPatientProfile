import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PrescriptionService } from '../prescription.service';

@Component({
  selector: 'app-rx-form',
  templateUrl: './rx-form.component.html',
  styleUrls: ['./rx-form.component.scss'],
})
export class RxFormComponent implements OnInit {
  selectedTooth: number[] = [];
  data = {
    problems: [],
    medication: [],
    instruction: [],
  };
  rxForm: FormGroup;
  @Input() toothset = [];
  constructor(
    private rxService: PrescriptionService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.rxForm = new FormGroup({
      // patientData: new FormGroup({
      //   name: new FormControl(null),
      // }),
      medication: new FormArray([]),
      problems: new FormArray([]),
      instruction: new FormArray([]),
    });
  }

  setTooth(id: number) {
    if (!this.selectedTooth.includes(id)) {
      this.selectedTooth.push(id);
      (<FormArray>this.rxForm.get('problems')).push(
        new FormGroup({
          specify: new FormControl(null, Validators.required),
          tooth: new FormControl(id, Validators.required),
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
  }

  onSubmit() {
    //console.log(this.rxForm.value);
    //console.log(this.rxForm.get('problems').value);
    let problemData: [] = this.rxForm.get('problems').value;
    if (problemData.length > 0) {
      for (let item of problemData) {
        this.data.problems.push(item);
      }
    }

    //console.log(this.rxForm.get('medication').value);
    let medication = this.rxForm.get('medication').value;

    for (let item of medication) {
      //console.log(item['medicine']);
      this.data.medication.push(item);
    }

    // console.log(this.rxForm.get('instruction').value);
    let docIns = this.rxForm.get('instruction').value;

    for (let item of docIns) {
      // console.log(item['instruction']);
      this.data.instruction.push(item);
    }

    // console.log(this.data);
    this.rxService.setData(this.data);
    //this.rxService.rxData.next(this.data);
    //this.rxService.setRxData(this.data);

    this.rxForm.reset();

    this.router.navigate(['show'], { relativeTo: this.activeRoute });
  }

  //Adding removing from different FormArray
  addMedication() {
    (<FormArray>this.rxForm.get('medication')).push(
      new FormGroup({
        medicine: new FormControl(null, Validators.required),
      })
    );
  }

  addInstruction() {
    (<FormArray>this.rxForm.get('instruction')).push(
      new FormGroup({
        suggestion: new FormControl(null, Validators.required),
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
