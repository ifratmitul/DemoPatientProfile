import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PrescriptionService {
  rxData = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {}

  setData(data) {
    console.log(data);
    this.rxData.next(data);

    this.http
      .post(
        'https://jotno-demo-default-rtdb.asia-southeast1.firebasedatabase.app/rxdata.json',
        data
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  getOldRx() {
    this.http
      .get(
        'https://jotno-demo-default-rtdb.asia-southeast1.firebasedatabase.app/rxdata.json'
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
