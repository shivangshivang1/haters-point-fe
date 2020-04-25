import { ExpressFeeling } from './../../models/express.model';
import { BrandModel } from 'src/app/models/brand.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'hp-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() brand: BrandModel;
  @Output() express = new EventEmitter<ExpressFeeling>();
  reaction: string;
  feeling: ExpressFeeling = {
    feeling: '',
    brandName: '',
  };

  constructor() {}

  ngOnInit(): void {}

  expressFeeling(feeling: string) {
    this.reaction = feeling;
    this.feeling.feeling = feeling;
    this.feeling.brandName = this.brand.name;
    this.express.emit(this.feeling);
  }
}
