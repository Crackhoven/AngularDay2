import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact = new FormGroup({
    fName: new FormControl('',Validators.required),
    lName: new FormControl('',Validators.required),
    mail: new FormControl('', [Validators.required,Validators.email]),
    age: new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$")]),
    message: new FormControl('',Validators.required)
  })
  onSubmit(){
    if(this.contact.valid){
      let a = this.contact.value;
      console.log(a);
      this.contact.reset();
   }
  }
  constructor() { }

  ngOnInit(): void {
  }

}