import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PrescriptionService {
  selectedteeth = new Subject<number[]>();

  // problemTeeth$ = this.selectedteeth.asObservable();

  constructor() {}

  getSelectedteeth() {
    return this.selectedteeth.subscribe((res) => {
      return res;
    });
  }
}
