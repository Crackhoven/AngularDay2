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
    mail: new FormControl('', Validators.required),
    age: new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$")]),
    message: new FormControl('',Validators.required)
  })
  onSubmit(){
    if(this.contact.valid){
      var a = this.contact.value;
      console.log(a)
   }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
