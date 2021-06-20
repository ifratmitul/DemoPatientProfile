import { Component, OnInit } from '@angular/core';
import { PrescriptionService } from '../prescription.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
})
export class ShowcaseComponent implements OnInit {
  constructor(private rxService: PrescriptionService) {}

  patientInfo: any;
  problemData: any[] = [];
  medicationData: any[] = [];
  instructionData: any[] = [];
  data: any[];

  ngOnInit(): void {
    console.log('show case component starts');
    this.getData();
  }

  getData() {
    //let i = 0;
    //console.log('getData funtion called');

    this.rxService.rxData.subscribe((res) => {
      if (res !== null) {
        console.log(res);
        //this.data = res;
        //this.problemData = res;
        //console.log(res['problems']);
        this.patientInfo = res['patientInfo'];
        this.problemData = [...res['problems']];
        //console.log(this.problemData);
        this.medicationData = [...res['medication']];
        //console.log(this.medicationData);

        this.instructionData = [...res['instruction']];
        //console.log(this.instructionData);
      }
    });
  }
}
