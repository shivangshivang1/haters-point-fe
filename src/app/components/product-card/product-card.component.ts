import { BrandModel } from 'src/app/models/brand.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hp-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() childBrand : BrandModel;

  constructor() { }

  ngOnInit(): void {
  }

}
