import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adulttooth',
  templateUrl: './adulttooth.component.html',
  styleUrls: ['./adulttooth.component.scss']
})
export class AdulttoothComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fillTooth(id:number){
    console.log(id);
    console.log("heelo");
    
    
  }

}
