import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  info = new FormGroup({
    firstName: new FormControl('',Validators.required),
    age: new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),

  });
   onSubmit(){
     if(this.info.valid){
    let a:any = this.info.value;
    console.log(a)
    // this.cars.push(a)
   }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
