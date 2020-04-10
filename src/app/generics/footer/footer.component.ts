import { Component, OnInit } from '@angular/core';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'hp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(private transferService: DataTransferService) {}

  ngOnInit(): void {
    console.log(this.transferService.getData());
  }
}
