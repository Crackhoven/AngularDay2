import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  cars: Array<{name:string,model:string,age:number}>=[
    {
      name:"Mazda",
      model:"CX-3",
      age:2
    },{
      name:"Infiniti",
      model:"Q-70",
      age:5
    },{
      name:"Renault",
      model:"Clio",
      age: 4
    }
  ]
info = new FormGroup({
    name: new FormControl('',Validators.required),
    model: new FormControl('',Validators.required),
    age:new FormControl('',Validators.required),

  });
   onSubmit(){
     if(this.info.valid){
    let a:any = this.info.value;
    console.log(a)
    this.cars.push(a)
   }
  }
  constructor() { }

  
  ngOnInit(): void {
  }

}
