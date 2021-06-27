import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class BusyService {
  reqCount = 0;
  constructor(private snipperService: NgxSpinnerService) {}

  busy() {
    this.reqCount++;
    this.snipperService.show(undefined, {
      type: 'timer',
      bdColor: 'rgba(255,255,255,0.7)',
      color: '#333333',
    });
  }

  idle() {
    this.reqCount--;
    if (this.reqCount <= 0) {
      this.reqCount = 0;
      this.snipperService.hide();
    }
  }
}
