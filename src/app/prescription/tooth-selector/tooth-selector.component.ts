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
    this.rxService.selectedteeth.subscribe((res) => {
      this.selectedTooth = res;
    });
  }

  setTooth(id: number) {
    console.log(id);

    if (!this.selectedTooth.includes(id)) {
      this.selectedTooth.push(id);
      this.rxService.selectTooth(this.selectedTooth);
      this.rxService.isSelected.next(true);
    }
  }
}
