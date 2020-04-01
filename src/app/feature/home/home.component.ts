import { GetService } from './../../services/get.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:GetService) { }

  ngOnInit(): void {
    this.service.getPosts().subscribe(result => {
      console.log(result);
    });

  }

}
