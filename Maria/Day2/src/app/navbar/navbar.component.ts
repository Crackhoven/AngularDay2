import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  spende: number =0;
  constructor() { }

  donateClick(){
    this.spende+=10;
  }
  ngOnInit(): void {
  }

}
