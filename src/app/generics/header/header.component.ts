import { DataTransferService } from './../../services/data-transfer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mainTitle:string= "Haters Point";
  constructor(private transferservice: DataTransferService) { 

  }

  ngOnInit(): void {
    this.transferservice.setData(this.mainTitle);

  }

  sampleMethod(){
    alert("sample method");
  }

}
