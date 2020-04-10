import { DataTransferService } from './../../services/data-transfer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  mainTitle: string = 'Haters Point';
  constructor(private transferService: DataTransferService) {}

  ngOnInit(): void {
    this.transferService.setData(this.mainTitle);
  }

  sampleMethod() {
    alert('sample method');
  }
}
