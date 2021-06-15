import { Component, Input, OnInit } from '@angular/core';
import { PrescriptionService } from '../prescription.service';

@Component({
  selector: 'app-tooth-selector',
  templateUrl: './tooth-selector.component.html',
  styleUrls: ['./tooth-selector.component.scss'],
})
export class ToothSelectorComponent implements OnInit {
  @Input() toothset = [];
  selectedTooth: number[] = [];
  constructor(private rxService: PrescriptionService) {}

  ngOnInit(): void {
    //console.log(this.toothset);
  }

  setTooth(id: number) {
    console.log(id);

    if (!this.selectedTooth.includes(id)) {
      this.selectedTooth.push(id);
      this.rxService.selectedteeth.next(this.selectedTooth);
    }
  }
  removeTooth(id: number) {
    // console.log('removing: '+ id);
    this.selectedTooth = this.selectedTooth.filter(function (ele) {
      return ele != id;
    });

    this.rxService.selectedteeth.next(this.selectedTooth);
  }
}
