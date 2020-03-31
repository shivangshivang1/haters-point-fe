import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mainTitle:string= "Haters Point";
  constructor() { }

  ngOnInit(): void {
  }

  sampleMethod(){
    alert("sample method");
  }

}
