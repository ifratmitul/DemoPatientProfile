import { Component, OnInit } from '@angular/core';
import { PrescriptionService } from '../prescription/prescription.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
})
export class DoctorComponent implements OnInit {
  constructor(private rxService: PrescriptionService) {}

  ngOnInit(): void {
    this.rxService.getOldRx();
  }
}
