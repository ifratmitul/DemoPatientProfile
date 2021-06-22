import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrescriptionService } from '../prescription.service';

@Component({
  selector: 'app-old-rx',
  templateUrl: './old-rx.component.html',
  styleUrls: ['./old-rx.component.scss'],
})
export class OldRxComponent implements OnInit {
  data: any;

  cardData: any[] = [];
  constructor(private rxService: PrescriptionService, private router: Router) {}

  ngOnInit(): void {
    this.getData();
    //this.rxService.getShowCaseData('-Mcmu0OXFg6n7ye9Mf21');
  }

  getData() {
    this.rxService.getOldRx().subscribe((res) => {
      console.log(res);
      for (let key in res) {
        //console.log(res[key]);
        this.cardData.push({ key: key, ...res[key] });
      }
      console.log(this.cardData);

      //this.data = res;
    });
  }

  previewData(id) {
    console.log(id);

    this.rxService.getShowCaseData(id);
    //let data = this.cardData[id];
    //console.log(data);
    //this.rxService.rxData.next(data);
    this.router.navigate(['rx/show'], { queryParams: { id: id } });
  }
}
