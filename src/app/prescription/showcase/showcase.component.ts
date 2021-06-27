import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrescriptionService } from '../prescription.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { ArgumentOutOfRangeError } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

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
  data: any;

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
      this.data = res;
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

  createPDF() {
    var docDefinition = {
      pageSize: 'A4',
      pageMargins: 75.590551181,
      watermark: {
        text: 'Jotno',
        color: '#00b871',
        opacity: 0.2,
      },
      content: [
        {
          margin: [0, 0, 0, 10],

          columns: [
            [
              {
                text: 'ABC Hospital',
                alignment: 'left',
                fontSize: 20,
                bold: true,
                color: '#08386e',
              },

              {
                text: 'Dhanmondi, Dhaka',
                alignment: 'left',
                fontSize: 10,
                color: '#055a87',
              },
            ],

            [
              {
                text: 'Abdul Kuddus',
                alignment: 'right',
                fontSize: 15,
                bold: true,
              },

              {
                text: 'FCPS, MBBS, FAIL',
                alignment: 'right',
                fontSize: 10,
              },

              {
                text: 'Phone; 01787161449',
                alignment: 'right',
                fontSize: 10,
                maring: [0, 0, 0, 0],
              },
            ],
          ],
        },
        {
          text: 'Patient Info: ',
          decoration: 'underline',
          decorationStyle: 'dotted',
          fontSize: 12.5,
          bold: true,
        },
        {
          text: `Name: ${this.patientInfo['name']}`,
        },
        {
          text: `Age: ${this.patientInfo['age']}`,
        },
        {
          text: `Address: ${this.patientInfo['address']}`,
          margin: [0, 0, 0, 20],
        },

        // Previous Configuration

        {
          margin: [0, 0, 0, 20],
          table: {
            headerRows: 1,
            widths: ['*', '*'],
            body: [
              ['Diagnosis', 'Medication'],
              [
                {
                  ul: [
                    ...this.problemData.map((p) => [
                      `Tooth ${p['tooth']}: `,
                      {
                        ul: [...p['specify']],
                      },
                    ]),
                  ],
                },
                {
                  ul: [...this.medicationData.map((p) => [p['medicine']])],
                },
              ],
            ],
          },
        },

        {
          text: "Doctor's Instructions : ",
          maring: [0, 5],
          decoration: 'underline',
          decorationStyle: 'dotted',
        },
        {
          ul: [...this.instructionData.map((p) => [p['suggestion']])],
        },
      ],

      defaultStyle: {
        fontSize: 12,
        lineHeight: 1.25,
        bold: true,
      },
    };
    pdfMake.createPdf(docDefinition).open();
  }
}
