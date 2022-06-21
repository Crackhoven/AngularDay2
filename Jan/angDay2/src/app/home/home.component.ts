import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cars: Array<{name:string, age: number}> = [
    {
      name: "mrs. fluffels",
      age: 2
    },{
      name: "señior juice",
      age: 4
    },{
      name:"the big one",
      age: 12
    }
  ]

  catBuilder = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$")]),
  })

  catSubmit(){
    if(this.catBuilder.valid){
      let a: any = this.catBuilder.value;
      console.log(a);
      this.cars.push(a);
   }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
