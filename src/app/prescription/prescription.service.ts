import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { DbServiceService } from '../core/services/DBService/db-service.service';

@Injectable({
  providedIn: 'root',
})
export class PrescriptionService {
  rxData = new BehaviorSubject<any>(null);
  //firedata: any;

  constructor(private http: HttpClient, private dbService: DbServiceService) {}

  setData(data) {
    console.log(data);
    this.rxData.next(data);
    this.dbService.addRow(data);
    // this.http
    //   .post(
    //     'https://jotno-demo-default-rtdb.asia-southeast1.firebasedatabase.app/rxdata.json',
    //     data
    //   )
    //   .subscribe(
    //     (res) => {
    //       console.log(res);

    //     },
    //     (err) => {
    //       console.log(err);
    //     }
    //   );
  }

  getOldRx() {
    return this.http.get(
      'https://jotno-demo-default-rtdb.asia-southeast1.firebasedatabase.app/rxdata.json'
    );
  }

  getShowCaseData(key: string) {
    return this.http.get(
      `https://jotno-demo-default-rtdb.asia-southeast1.firebasedatabase.app/rxdata/${key}.json`
    );
  }

  deleteRx(key: string) {
    return this.http.delete(
      `https://jotno-demo-default-rtdb.asia-southeast1.firebasedatabase.app/rxdata/${key}.json`
    );
  }
}
