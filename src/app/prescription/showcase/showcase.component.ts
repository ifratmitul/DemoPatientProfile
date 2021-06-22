import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrescriptionService } from '../prescription.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
})
export class ShowcaseComponent implements OnInit {
  constructor(
    private rxService: PrescriptionService,
    private activateRoute: ActivatedRoute,
    private route: Router
  ) {}

  patientInfo: any;
  problemData: any[] = [];
  medicationData: any[] = [];
  instructionData: any[] = [];
  data: any[];

  ngOnInit(): void {
    console.log('show case component starts');
    let queryId = this.activateRoute.snapshot.queryParamMap.get('id');
    console.log(queryId);

    if (queryId) {
      this.getData(queryId);
    } else {
      this.getFormData();
    }

    //console.log(this.activateRoute.snapshot.queryParamMap.get('id'));
  }

  getFormData() {
    //let i = 0;
    //console.log('getData funtion called');

    this.rxService.rxData.subscribe((res) => {
      if (res !== null) {
        console.log(res);
        //this.data = res;
        //this.problemData = res;
        console.log(res['problems']);
        this.patientInfo = res['patientInfo'];
        this.problemData = [...res['problems']];
        //console.log(this.problemData);
        this.medicationData = [...res['medication']];
        //console.log(this.medicationData);

        this.instructionData = [...res['instruction']];
        //console.log(this.instructionData);
      } else {
        this.route.navigate(['/rx/oldrx']);
      }
    });
  }

  getData(id) {
    this.rxService.getShowCaseData(id).subscribe((res) => {
      console.log(res);
      //this.data = res;
      //this.problemData = res;
      // console.log(res['problems']);

      if (res.hasOwnProperty('patientInfo')) {
        this.patientInfo = res['patientInfo'];
      }

      if (res.hasOwnProperty('problems')) {
        this.problemData = [...res['problems']];
      }

      //console.log(this.problemData);
      if (res.hasOwnProperty('medication')) {
        this.medicationData = [...res['medication']];
      }

      //console.log(this.medicationData);
      if (res.hasOwnProperty('instruction')) {
        this.instructionData = [...res['instruction']];
      }
    });
  }
}
