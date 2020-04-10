import { DataTransferService } from './../../services/data-transfer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private transferservice: DataTransferService) { }

  ngOnInit(): void {
    console.log(this.transferservice.getData());
  }

}
