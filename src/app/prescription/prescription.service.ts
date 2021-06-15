import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PrescriptionService {
  selectedteeth = new Subject<number[]>();
  isSelected = new Subject<boolean>();

  constructor() {}

  getSelectedteeth() {
    return this.selectedteeth.subscribe((res) => {
      return res;
    });
  }

  removeTooth(data: number[]) {
    console.log(data);
    this.selectedteeth.next(data);
  }

  selectTooth(data: number[]) {
    this.isSelected.next(true);
    this.selectedteeth.next(data);
  }
}
