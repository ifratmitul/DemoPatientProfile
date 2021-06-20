import { Component, OnInit } from '@angular/core';
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
    patientInfo: {},
    problems: [],
    medication: [],
    instruction: [],
  };
  rxForm: FormGroup;
  adultToothSet: number[] = [
    11, 12, 13, 14, 15, 16, 17, 18, 21, 22, 23, 24, 25, 26, 27, 28, 31, 32, 33,
    34, 35, 36, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48,
  ];
  childToothSet: number[] = [
    51, 52, 53, 54, 55, 61, 62, 63, 64, 65, 71, 72, 73, 74, 75, 81, 82, 83, 84,
    85,
  ];
  toothset = [];

  patientAge: number;

  constructor(
    private rxService: PrescriptionService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.rxForm = new FormGroup({
      patientData: new FormGroup({
        name: new FormControl(null, Validators.required),
        address: new FormControl(null, Validators.required),
        age: new FormControl(18, Validators.required),
      }),
      medication: new FormArray([]),
      problems: new FormArray([]),
      instruction: new FormArray([]),
    });

    this.setAge();
  }
  setAge() {
    this.rxForm.get('patientData').valueChanges.subscribe((res) => {
      if (res['age'] !== null) {
        console.log(res['age']);
        this.patientAge = res['age'];
        this.toothset =
          this.patientAge >= 18 ? this.adultToothSet : this.childToothSet;
      }
    });
  }
  setTooth(id: number) {
    if (!this.selectedTooth.includes(id)) {
      this.selectedTooth.push(id);

      (<FormArray>this.rxForm.get('problems')).push(
        new FormGroup({
          specify: new FormArray([]),
          tooth: new FormControl(id, Validators.required),
        })
      );
    }
  }

  addIssue(i: number) {
    (<FormArray>(
      this.rxForm.get('problems').get(i.toString()).get('specify')
    )).push(new FormControl());
  }

  removeIssue(i: number, j: number) {
    (<FormArray>(
      this.rxForm.get('problems').get(i.toString()).get('specify')
    )).removeAt(j);
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
    //console.log(this.rxForm.get('patientData').get('test'));
    console.log(this.rxForm);
    console.log(this.rxForm.get('problems').value);

    this.data.patientInfo = this.rxForm.get('patientData').value;

    let problemData: [] = this.rxForm.get('problems').value;
    if (problemData.length > 0) {
      for (let item of problemData) {
        this.data.problems.push(item);
      }
    }

    let medication = this.rxForm.get('medication').value;

    for (let item of medication) {
      this.data.medication.push(item);
    }

    let docIns = this.rxForm.get('instruction').value;

    for (let item of docIns) {
      this.data.instruction.push(item);
    }

    this.rxService.setData(this.data);

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

  getIssue(i: number) {
    return (<FormArray>(
      this.rxForm.get('problems').get(i.toString()).get('specify')
    )).controls;
  }
}
