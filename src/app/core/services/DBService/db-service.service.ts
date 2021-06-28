import { PercentPipe } from '@angular/common';
import { Injectable } from '@angular/core';
//import Dexie from 'dexie';
import rxData from 'src/app/shared/models/rxData';

import Dexie from '@dpogue/dexie';
@Injectable({
  providedIn: 'root',
})
export class DbServiceService {
  constructor() {}

  db: any;
  //newRx: rxData = new rxModel([], '', {}, [], []);
  rows: any[] = [];

  ngOnInit() {
    this.makeDatabase();
    this.connectToDatabase();
  }

  makeDatabase(): void {
    this.db = new Dexie('RxData');
    this.db.version(1).stores({
      rx: 'name, problems, patientInfo, medication, instruction',
    });
    this.loadRows();
  }

  connectToDatabase(): void {
    this.db.open().catch((error) => {
      alert('Errod during connecting to database : ' + error);
    });
  }

  clearRows(): void {
    this.db.rx.clear().then((result) => console.log(result));
    this.loadRows();
  }

  loadRows(): void {
    this.db.rx.toArray().then((p) => {
      this.rows = p;
      console.log(this.rows);
    });
  }

  addRow(prescription): void {
    console.log(prescription);
    this.db.rx.add({
      name: prescription['patientInfo']['name'],
      problems: prescription['problems'],
      patientInfo: prescription['patientInfo'],
      medication: [...prescription['medication']],
      instruction: [...prescription['instruction']],
    });

    this.loadRows();
    //this.newRx = new rxModel([], '', {}, [], []);
    //this.newProduct = new Product("", "");
  }

  async deletelSpecificData(name: string) {
    console.log(name);
    await this.db.rx.where('key').anyOf(name).delete();
    this.loadRows();
  }
}
