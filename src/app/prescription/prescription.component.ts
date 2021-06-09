import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.scss']
})
export class PrescriptionComponent implements OnInit {

  age : number = 17;
  adultToothSet : number[] = [11,12,13,14,15,16,17,18,21,22,23,24,25,26,27,28,31,32,33,34,35,36,37,38,41,42,43,44,45,46,47,48];
  childToothSet : number [] = [51,52,53,54,55,61,62,63,64,65,71,72,73,74,75,81,82,83,84,85];
  selectedTooth : number [] = [];
  constructor() { }

  ngOnInit(): void {
  }

  setTooth(id:number){
    console.log(id);
    
    if(!this.selectedTooth.includes(id)) this.selectedTooth.push(id);
    console.log(this.selectedTooth);
    

  }

  removeTooth(id: number){
    console.log('removing: '+ id);
    this.selectedTooth = this.selectedTooth.filter(function(ele){ 
      return ele != id; 
  });
    
    console.log(this.selectedTooth);
    
    

    
  }

}
