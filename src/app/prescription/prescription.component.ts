import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.scss']
})
export class PrescriptionComponent implements OnInit {

  age : number = 18;
  adultToothSet : number[] = [11,12,13,14,15,16,17,18,21,22,23,24,25,26,27,28,31,32,33,34,35,36,37,38,41,42,43,44,45,46,47,48];
  childToothSet : number [] = [51,52,53,54,55,61,62,63,64,65,71,72,73,74,75,81,82,83,84,85];
  selectedTooth : number [] = [];
  data = [];
  @ViewChild ('f') getAge : NgForm


  constructor() { }

  prescriptionForm : FormGroup;

  ngOnInit(): void {

    this.prescriptionForm = new FormGroup ({
        'problems': new FormArray([])
    })
  }

  setTooth(id:number){
    console.log(id);
    
    if(!this.selectedTooth.includes(id)) this.selectedTooth.push(id);
    // const controls = new FormControl(null, Validators.required);
    // (<FormArray>this.prescriptionForm.get('problems')).push(controls)
    
    console.log(this.selectedTooth);
    

  }

  removeTooth(id: number){
    console.log('removing: '+ id);
    this.selectedTooth = this.selectedTooth.filter(function(ele){ 
      return ele != id; 
  });
    
    console.log(this.selectedTooth);
    
  }


  onSubmit(form: NgForm){
    console.log('form submission');
    
    console.log(form.value);
    this.data.push(form.value);
    var d = this.data[0]
    for(var key in d){
      console.log(key);
      if(key === 'name') console.log('name found');
      
      
      console.log(d[key])
    }
    
    
    
    // console.log(this.prescriptionForm!);
 }

get controls() {
  return (this.prescriptionForm.get('problems') as FormArray).controls;
  }

}
