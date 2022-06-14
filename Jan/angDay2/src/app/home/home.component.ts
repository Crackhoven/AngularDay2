import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
